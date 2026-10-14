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
        """Valida la compra, calcula precios y envía confirmación."""
        # 1. Debe ser un usuario registrado
        if not usuario:
            raise UsuarioNoRegistradoException(
                "La compra solo está permitida a usuarios registrados."
            )

        # 2. Validación de fecha: no puede ser pasada
        hoy = date.today()
        if fecha_visita < hoy:
            raise FechaInvalidaException("La fecha no puede ser anterior a hoy.")

        # 3. Días que cierra el parque: lunes y feriados festivos
        if fecha_visita.weekday() == 0:
            raise ParqueCerradoException("El parque permanece cerrado los lunes.")
        if (fecha_visita.month == 12 and fecha_visita.day == 25) or (
            fecha_visita.month == 1 and fecha_visita.day == 1
        ):
            raise ParqueCerradoException(
                "El parque permanece cerrado en días festivos (25 de diciembre y 1 de enero)."
            )

        # 4. Máximo un mes de anticipación
        if fecha_visita > hoy + timedelta(days=30):
            raise FechaInvalidaException(
                "No se permite comprar entradas con más de un mes de anticipación."
            )

        # 5. Cantidad de entradas: de 1 a 10
        cantidad = len(edades_visitantes)
        if cantidad < 1 or cantidad > 10:
            raise CantidadEntradasInvalidaException(
                "La cantidad de entradas debe ser entre 1 y 10."
            )

        # 6. Validación de edades (0 a 134 años)
        for edad in edades_visitantes:
            if edad < 0 or edad >= 135:
                raise EdadInvalidaException(f"Edad fuera de rango: {edad}")

        # 7. Tipo de pase y forma de pago
        if tipo_pase not in (TipoPase.REGULAR, TipoPase.VIP):
            raise TipoPaseInvalidoException(f"Tipo de pase no válido: {tipo_pase}")

        if forma_pago not in (FormaPago.EFECTIVO, FormaPago.MERCADO_PAGO):
            raise FormaPagoInvalidaException(f"Forma de pago no válida: {forma_pago}")

        # 8. Cálculo de precios con descuentos por edad
        precio_base = (
            self.PRECIO_REGULAR if tipo_pase == TipoPase.REGULAR else self.PRECIO_VIP
        )
        entradas: List[Entrada] = []
        monto_total = 0.0

        for edad in edades_visitantes:
            if edad <= 3:
                precio = 0.0  # Bebés gratis
            elif edad <= 15 or edad >= 60:
                precio = precio_base * 0.5  # Menores y adultos mayores pagan 50%
            else:
                precio = precio_base  # Adultos pagan tarifa completa

            entradas.append(
                Entrada(edad_visitante=edad, tipo_pase=tipo_pase, precio=precio)
            )
            monto_total += precio

        # 9. Crear orden de compra
        compra = CompraEntradas(
            usuario=usuario,
            fecha_visita=fecha_visita,
            entradas=entradas,
            forma_pago=forma_pago,
            monto_total=monto_total,
            id_compra=f"ECO-{uuid.uuid4().hex[:8].upper()}",
            confirmada=False,
        )

        # 10. Si el pago es con tarjeta, procesamos con Mercado Pago
        if forma_pago == FormaPago.MERCADO_PAGO and self.payment_service:
            self.payment_service.procesar_pago(compra)

        # 11. Envío de confirmación por email
        if self.email_service:
            self.email_service.enviar_confirmacion(email=usuario.email, compra=compra)

        compra.confirmada = True
        return compra
