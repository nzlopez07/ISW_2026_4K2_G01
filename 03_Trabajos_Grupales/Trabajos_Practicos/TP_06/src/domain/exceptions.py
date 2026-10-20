"""Excepciones de dominio para la compra de entradas de EcoHarmony Park."""


class DominioException(Exception):
    """Excepción base para errores de reglas de negocio."""


class UsuarioNoRegistradoException(DominioException):
    """El usuario que intenta comprar no está registrado en la plataforma."""


class ParqueCerradoException(DominioException):
    """El parque no se encuentra abierto en la fecha solicitada (lunes o feriados)."""


class FechaInvalidaException(DominioException):
    """La fecha de visita es anterior a hoy o supera el horizonte de 30 días."""


class CantidadEntradasInvalidaException(DominioException):
    """La cantidad de entradas solicitadas está fuera del rango permitido (1 a 10)."""


class EdadInvalidaException(DominioException):
    """La edad del visitante es menor a 0 o supera el límite biológico (>= 135 años)."""


class FormaPagoInvalidaException(DominioException):
    """La forma de pago seleccionada no es soportada o no fue especificada."""


class TipoPaseInvalidoException(DominioException):
    """El tipo de pase especificado no existe o no está permitido."""


class ErrorEnvioEmailException(DominioException):
    """Ocurrió un error al despachar el correo de confirmación de compra."""


class ErrorProcesamientoPagoException(DominioException):
    """Falló la comunicación o la transacción con la pasarela de pagos."""
