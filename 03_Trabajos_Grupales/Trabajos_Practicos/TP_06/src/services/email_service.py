"""Servicio para envío de emails."""
from typing import Protocol
from src.domain.models import CompraEntradas


class EmailService(Protocol):
    """Protocolo / Interfaz para el servicio de correo electrónico."""
    def enviar_confirmacion(self, email: str, compra: CompraEntradas) -> bool:
        ...


class SmtpEmailService:
    """Implementación real o simulada del servicio de emails."""
    def enviar_confirmacion(self, email: str, compra: CompraEntradas) -> bool:
        raise NotImplementedError("Fase RED de TDD: pendiente de implementación")
