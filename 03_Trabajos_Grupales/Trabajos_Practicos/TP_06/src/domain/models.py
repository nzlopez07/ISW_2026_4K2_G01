"""Modelos de dominio para la compra de entradas de EcoHarmony Park."""
from dataclasses import dataclass
from datetime import date
from enum import Enum
from typing import List, Optional


class FormaPago(str, Enum):
    """Medios de pago disponibles."""
    EFECTIVO = "efectivo"
    MERCADO_PAGO = "mercado_pago"


class TipoPase(str, Enum):
    """Modalidades de pase para ingresar al parque."""
    REGULAR = "regular"
    VIP = "vip"


@dataclass
class Usuario:
    """Usuario registrado en la plataforma del bioparque."""
    nombre: str
    email: str
    dni: str


@dataclass
class Entrada:
    """Representa una entrada individual para un visitante."""
    edad_visitante: int
    tipo_pase: TipoPase = TipoPase.REGULAR
    precio: float = 0.0


@dataclass
class CompraEntradas:
    """Orden de compra confirmada para ingresar al parque."""
    usuario: Usuario
    fecha_visita: date
    entradas: List[Entrada]
    forma_pago: FormaPago
    monto_total: float
    confirmada: bool = False
    id_compra: Optional[str] = None
