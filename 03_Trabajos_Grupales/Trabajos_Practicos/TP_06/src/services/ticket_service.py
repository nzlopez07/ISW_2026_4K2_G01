"""Servicio para la compra de entradas de EcoHarmony Park."""
from datetime import date, timedelta
from typing import List, Optional
import uuid

from src.domain.exceptions import (
    CantidadEntradasInvalidaException,
    EdadInvalidaException,
    FechaInvalidaException,
    FormaPagoInvalidaException,
    ParqueCerradoException,
    TipoPaseInvalidoException,
    UsuarioNoRegistradoException,
)
from src.domain.models import CompraEntradas, Entrada, FormaPago, TipoPase, Usuario
from src.services.email_service import EmailService
from src.services.payment_service import PaymentService


class TicketService:
    """Caso de uso: Comprar entradas."""

    # Tarifas base
    PRECIO_REGULAR = 10000.0
    PRECIO_VIP = 20000.0

    def __init__(
        self,
        email_service: Optional[EmailService] = None,
        payment_service: Optional[PaymentService] = None,
    ) -> None:
        self.email_service = email_service
        self.payment_service = payment_service

    def comprar_entradas(
        self,
        usuario: Optional[Usuario],
        fecha_visita: date,
        edades_visitantes: List[int],
        forma_pago: FormaPago,
        tipo_pase: TipoPase = TipoPase.REGULAR,
    ) -> CompraEntradas:
        """Valida los datos, calcula el total y orquesta el pago y la confirmación."""
        self._validar_solicitud(
            usuario=usuario,
            fecha_visita=fecha_visita,
            edades_visitantes=edades_visitantes,
            forma_pago=forma_pago,
            tipo_pase=tipo_pase,
        )

        # Generamos cada entrada con su tarifa calculada individualmente
        entradas: List[Entrada] = [
            Entrada(
                edad_visitante=edad,
                tipo_pase=tipo_pase,
                precio=self._calcular_precio_entrada(edad, tipo_pase),
            )
            for edad in edades_visitantes
        ]
        monto_total = sum(e.precio for e in entradas)

        compra = CompraEntradas(
            usuario=usuario,
            fecha_visita=fecha_visita,
            entradas=entradas,
            forma_pago=forma_pago,
            monto_total=monto_total,
            id_compra=f"ECO-{uuid.uuid4().hex[:8].upper()}",
            confirmada=False,
        )

        # Si el pago es con tarjeta, invocamos pasarela de Mercado Pago
        if forma_pago == FormaPago.MERCADO_PAGO and self.payment_service:
            self.payment_service.procesar_pago(compra)

        # Despacho de mail de confirmación
        if self.email_service:
            self.email_service.enviar_confirmacion(email=usuario.email, compra=compra)

        compra.confirmada = True
        return compra

    def _validar_solicitud(
        self,
        usuario: Optional[Usuario],
        fecha_visita: date,
        edades_visitantes: List[int],
        forma_pago: FormaPago,
        tipo_pase: TipoPase,
    ) -> None:
        """Centraliza las validaciones de negocio previas a la compra."""
        # 1. Usuario registrado
        if not usuario:
            raise UsuarioNoRegistradoException(
                "La compra solo está permitida a usuarios registrados."
            )

        # 2. Fecha no puede ser anterior a hoy
        hoy = date.today()
        if fecha_visita < hoy:
            raise FechaInvalidaException("La fecha no puede ser anterior a hoy.")

        # 3. Días de apertura del parque
        self._validar_calendario_apertura(fecha_visita)

        # 4. Máximo un mes de anticipación (30 días)
        if fecha_visita > hoy + timedelta(days=30):
            raise FechaInvalidaException(
                "No se permite comprar entradas con más de un mes de anticipación."
            )

        # 5. Cantidad de entradas: 1 a 10
        cantidad = len(edades_visitantes)
        if cantidad < 1 or cantidad > 10:
            raise CantidadEntradasInvalidaException(
                "La cantidad de entradas debe ser entre 1 y 10."
            )

        # 6. Rango biológico de edades
        for edad in edades_visitantes:
            if edad < 0 or edad >= 135:
                raise EdadInvalidaException(f"Edad fuera de rango: {edad}")

        # 7. Tipo de pase y medio de pago válidos
        if tipo_pase not in (TipoPase.REGULAR, TipoPase.VIP):
            raise TipoPaseInvalidoException(f"Tipo de pase no válido: {tipo_pase}")

        if forma_pago not in (FormaPago.EFECTIVO, FormaPago.MERCADO_PAGO):
            raise FormaPagoInvalidaException(f"Forma de pago no válida: {forma_pago}")

    @staticmethod
    def _validar_calendario_apertura(fecha: date) -> None:
        """Verifica que el parque esté abierto en la fecha indicada."""
        # Lunes cerrado por mantenimiento
        if fecha.weekday() == 0:
            raise ParqueCerradoException("El parque permanece cerrado los lunes.")

        # Feriados festivos de fin de año
        if (fecha.month == 12 and fecha.day == 25) or (
            fecha.month == 1 and fecha.day == 1
        ):
            raise ParqueCerradoException(
                "El parque permanece cerrado en días festivos (25 de diciembre y 1 de enero)."
            )

    def _calcular_precio_entrada(self, edad: int, tipo_pase: TipoPase) -> float:
        """Aplica la política de descuentos según edad y tipo de pase."""
        precio_base = (
            self.PRECIO_REGULAR if tipo_pase == TipoPase.REGULAR else self.PRECIO_VIP
        )
        if edad <= 3:
            return 0.0  # Bebés gratis
        if edad <= 15 or edad >= 60:
            return precio_base * 0.5  # 50% para menores y adultos mayores
        return precio_base  # Tarifa completa
