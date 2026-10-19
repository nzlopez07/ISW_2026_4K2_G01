"""Servicio para la compra de entradas de EcoHarmony Park."""
from datetime import date, datetime, time, timedelta
from typing import List, Optional
import uuid

from src.domain.exceptions import (
    CantidadEntradasInvalidaException,
    EdadInvalidaException,
    ErrorProcesamientoPagoException,
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
        # Entradas ya compradas por cada usuario (DNI) para cada fecha
        self.entradas_compradas = {}

    def comprar_entradas(
        self,
        usuario: Optional[Usuario],
        fecha_visita: date,
        entradas: List[Entrada],
        forma_pago: FormaPago,
    ) -> CompraEntradas:
        """Valida los datos, calcula el total y orquesta el pago y la confirmación."""
        self._validar_solicitud(
            usuario=usuario,
            fecha_visita=fecha_visita,
            entradas=entradas,
            forma_pago=forma_pago,
        )

        # Generamos cada entrada con su tarifa calculada individualmente
        entradas_cotizadas: List[Entrada] = [
            Entrada(
                edad_visitante=entrada.edad_visitante,
                tipo_pase=entrada.tipo_pase,
                precio=self._calcular_precio_entrada(entrada.edad_visitante, entrada.tipo_pase),
            )
            for entrada in entradas
        ]
        monto_total = sum(e.precio for e in entradas_cotizadas)

        compra = CompraEntradas(
            usuario=usuario,
            fecha_visita=fecha_visita,
            entradas=entradas_cotizadas,
            forma_pago=forma_pago,
            monto_total=monto_total,
            id_compra=f"ECO-{uuid.uuid4().hex[:8].upper()}",
            confirmada=False,
        )

        # Si el pago es con tarjeta, invocamos pasarela de Mercado Pago
        if forma_pago == FormaPago.MERCADO_PAGO and self.payment_service:
            if not self.payment_service.procesar_pago(compra):
                raise ErrorProcesamientoPagoException("Mercado Pago rechazó el pago.")

        # Despacho de mail de confirmación
        if self.email_service:
            self.email_service.enviar_confirmacion(email=usuario.email, compra=compra)

        clave = (usuario.dni, fecha_visita)
        self.entradas_compradas[clave] = self.entradas_compradas.get(clave, 0) + len(entradas)

        compra.confirmada = True
        return compra

    def _validar_solicitud(
        self,
        usuario: Optional[Usuario],
        fecha_visita: date,
        entradas: List[Entrada],
        forma_pago: FormaPago,
    ) -> None:
        """Centraliza las validaciones de negocio previas a la compra."""
        # 1. Usuario registrado
        if not usuario:
            raise UsuarioNoRegistradoException(
                "La compra solo está permitida a usuarios registrados."
            )

        # 2. Fecha no puede ser anterior a hoy, y para hoy solo hasta las 17:30
        ahora = datetime.now()
        hoy = ahora.date()
        if fecha_visita < hoy:
            raise FechaInvalidaException("La fecha no puede ser anterior a hoy.")
        if fecha_visita == hoy and ahora.time() > time(17, 30):
            raise FechaInvalidaException("Para el día de hoy solo se puede comprar hasta las 17:30.")

        # 3. Días de apertura del parque
        self._validar_calendario_apertura(fecha_visita)

        # 4. Máximo un mes de anticipación (30 días)
        if fecha_visita > hoy + timedelta(days=30):
            raise FechaInvalidaException(
                "No se permite comprar entradas con más de un mes de anticipación."
            )

        # 5. Cantidad de entradas: 1 a 10
        cantidad = len(entradas)
        if cantidad < 1 or cantidad > 10:
            raise CantidadEntradasInvalidaException(
                "La cantidad de entradas debe ser entre 1 y 10."
            )
        ya_compradas = self.entradas_compradas.get((usuario.dni, fecha_visita), 0)
        if ya_compradas + cantidad > 10:
            raise CantidadEntradasInvalidaException(
                f"Solo se pueden comprar 10 entradas por fecha (ya compraste {ya_compradas})."
            )

        # 6. Rango biológico de edades y tipo de pase de cada entrada
        for entrada in entradas:
            if entrada.edad_visitante < 0 or entrada.edad_visitante >= 135:
                raise EdadInvalidaException(f"Edad fuera de rango: {entrada.edad_visitante}")
            if entrada.tipo_pase not in (TipoPase.REGULAR, TipoPase.VIP):
                raise TipoPaseInvalidoException(f"Tipo de pase no válido: {entrada.tipo_pase}")

        # 7. Medio de pago válido
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
