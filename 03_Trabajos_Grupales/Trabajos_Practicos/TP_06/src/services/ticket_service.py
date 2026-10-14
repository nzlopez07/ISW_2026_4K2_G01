"""Servicio orquestador del caso de uso de compra de entradas."""
from datetime import date
from typing import List, Optional

from src.domain.models import CompraEntradas, FormaPago, TipoPase, Usuario
from src.services.email_service import EmailService
from src.services.payment_service import PaymentService


class TicketService:
    """Caso de uso: Comprar entradas para ingresar al bioparque EcoHarmony Park."""

    # Tarifas base definidas según el PO
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
        """Valida las reglas de negocio, calcula el monto total y orquesta la compra."""
        raise NotImplementedError("Fase RED de TDD: pendiente de implementación")
