"""Registro de las compras confirmadas."""
from datetime import date
from typing import Protocol
from src.domain.models import CompraEntradas


class RegistroCompras(Protocol):
    """Protocolo / Interfaz para guardar compras y consultar las entradas ya compradas."""
    def guardar(self, compra: CompraEntradas) -> None:
        ...

    def entradas_compradas(self, dni: str, fecha: date) -> int:
        ...


class RegistroComprasEnMemoria:
    """Implementación en memoria, usada cuando no se indica otra."""
    def __init__(self) -> None:
        self.cantidades = {}

    def guardar(self, compra: CompraEntradas) -> None:
        clave = (compra.usuario.dni, compra.fecha_visita)
        self.cantidades[clave] = self.cantidades.get(clave, 0) + len(compra.entradas)

    def entradas_compradas(self, dni: str, fecha: date) -> int:
        return self.cantidades.get((dni, fecha), 0)
