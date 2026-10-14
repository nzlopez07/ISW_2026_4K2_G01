"""Servicio para procesamiento de pagos."""
from typing import Protocol
from src.domain.models import CompraEntradas


class PaymentService(Protocol):
    """Protocolo / Interfaz para procesamiento de pagos."""
    def procesar_pago(self, compra: CompraEntradas) -> bool:
        ...


class MercadoPagoPaymentService:
    """Implementación de pasarela Mercado Pago."""
    def procesar_pago(self, compra: CompraEntradas) -> bool:
        raise NotImplementedError("Fase RED de TDD: pendiente de implementación")
