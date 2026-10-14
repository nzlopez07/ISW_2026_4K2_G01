"""Suite de pruebas unitarias para la User Story: Comprar Entradas (TP 06).

Ciclo TDD - Fase RED.
Diseño basado en la consigna oficial y las especificaciones del Product Owner.
"""
from datetime import date, timedelta
from unittest.mock import Mock
import pytest

from src.domain.exceptions import (
    CantidadEntradasInvalidaException,
    EdadInvalidaException,
    ErrorEnvioEmailException,
    FechaInvalidaException,
    FormaPagoInvalidaException,
    ParqueCerradoException,
    UsuarioNoRegistradoException,
)
from src.domain.models import FormaPago, TipoPase, Usuario
from src.services.email_service import EmailService
from src.services.payment_service import PaymentService
from src.services.ticket_service import TicketService


# ------------------------------------------------------------------------------
# Fixtures compartidas
# ------------------------------------------------------------------------------

@pytest.fixture
def usuario_registrado():
    """Simula un usuario visitante con sesión iniciada en la app."""
    return Usuario(
        nombre="Fernando Javier",
        email="visitante@ecoharmony.com",
        dni="40123456",
    )


@pytest.fixture
def mock_email_service():
    """Mock del servicio de envío de correos transaccionales."""
    service = Mock(spec=EmailService)
    service.enviar_confirmacion.return_value = True
    return service


@pytest.fixture
def mock_payment_service():
    """Mock de la pasarela de pagos (Mercado Pago)."""
    service = Mock(spec=PaymentService)
    service.procesar_pago.return_value = True
    return service


@pytest.fixture
def ticket_service(mock_email_service, mock_payment_service):
    """Instancia del servicio de compra con dependencias simuladas."""
    return TicketService(
        email_service=mock_email_service,
        payment_service=mock_payment_service,
    )


@pytest.fixture
def fecha_abierta():
    """Retorna una fecha futura válida en la cual el parque seguro está abierto."""
    hoy = date.today()
    # Buscamos el próximo martes (weekday == 1) para evitar lunes y feriados
    dias = 1
    while True:
        candidata = hoy + timedelta(days=dias)
        es_lunes = candidata.weekday() == 0
        es_feriado = (candidata.month == 12 and candidata.day == 25) or (
            candidata.month == 1 and candidata.day == 1
        )
        if not es_lunes and not es_feriado and dias <= 20:
            return candidata
        dias += 1


# ------------------------------------------------------------------------------
# 1. Pruebas de Apertura del Parque y Rango de Fechas
# ------------------------------------------------------------------------------

class TestAperturaYFechas:
    """Verifica las reglas de apertura (cerrado lunes/feriados) y límites temporales."""

    def test_compra_en_dia_lunes_falla(self, ticket_service, usuario_registrado):
        """El parque no abre los lunes; debe rechazar la compra."""
        hoy = date.today()
        dias_hasta_lunes = (0 - hoy.weekday()) % 7 or 7
        proximo_lunes = hoy + timedelta(days=dias_hasta_lunes)

        with pytest.raises(ParqueCerradoException):
            ticket_service.comprar_entradas(
                usuario=usuario_registrado,
                fecha_visita=proximo_lunes,
                edades_visitantes=[25],
                forma_pago=FormaPago.EFECTIVO,
            )

    @pytest.mark.parametrize("mes,dia", [(12, 25), (1, 1)])
    def test_compra_en_feriados_festivos_falla(
        self, ticket_service, usuario_registrado, mes, dia
    ):
        """El parque cierra en Navidad y Año Nuevo; debe rechazar la compra."""
        año = date.today().year
        feriado = date(año, mes, dia)
        if feriado < date.today():
            feriado = date(año + 1, mes, dia)

        with pytest.raises(ParqueCerradoException):
            ticket_service.comprar_entradas(
                usuario=usuario_registrado,
                fecha_visita=feriado,
                edades_visitantes=[30],
                forma_pago=FormaPago.EFECTIVO,
            )

    def test_compra_con_fecha_pasada_falla(self, ticket_service, usuario_registrado):
        """No se admiten fechas anteriores al día actual."""
        ayer = date.today() - timedelta(days=1)
        with pytest.raises(FechaInvalidaException):
            ticket_service.comprar_entradas(
                usuario=usuario_registrado,
                fecha_visita=ayer,
                edades_visitantes=[25],
                forma_pago=FormaPago.EFECTIVO,
            )

    def test_compra_con_mas_de_un_mes_de_anticipacion_falla(
        self, ticket_service, usuario_registrado
    ):
        """El horizonte máximo de compra es de un mes (30 días)."""
        fecha_lejana = date.today() + timedelta(days=35)
        with pytest.raises(FechaInvalidaException):
            ticket_service.comprar_entradas(
                usuario=usuario_registrado,
                fecha_visita=fecha_lejana,
                edades_visitantes=[25],
                forma_pago=FormaPago.EFECTIVO,
            )

    def test_compra_en_fecha_valida_exito(
        self, ticket_service, usuario_registrado, fecha_abierta
    ):
        """Una compra en día habilitado se procesa con éxito."""
        compra = ticket_service.comprar_entradas(
            usuario=usuario_registrado,
            fecha_visita=fecha_abierta,
            edades_visitantes=[28],
            forma_pago=FormaPago.EFECTIVO,
        )
        assert compra.confirmada is True
        assert compra.fecha_visita == fecha_abierta


# ------------------------------------------------------------------------------
# 2. Pruebas de Cantidad de Entradas y Edades
# ------------------------------------------------------------------------------

class TestCantidadYEdades:
    """Verifica los límites de entradas (1 a 10) y rangos biológicos de edad."""

    @pytest.mark.parametrize("cantidad_invalida", [0, -1, 11, 15])
    def test_cantidad_entradas_fuera_de_rango_falla(
        self, ticket_service, usuario_registrado, fecha_abierta, cantidad_invalida
    ):
        """La cantidad de entradas debe ser estrictamente entre 1 y 10."""
        edades = [25] * max(0, cantidad_invalida) if cantidad_invalida >= 0 else []
        with pytest.raises(CantidadEntradasInvalidaException):
            ticket_service.comprar_entradas(
                usuario=usuario_registrado,
                fecha_visita=fecha_abierta,
                edades_visitantes=edades,
                forma_pago=FormaPago.EFECTIVO,
            )

    @pytest.mark.parametrize("cantidad_valida", [1, 5, 10])
    def test_cantidad_entradas_permitida_exito(
        self, ticket_service, usuario_registrado, fecha_abierta, cantidad_valida
    ):
        """Cantidades dentro del límite (1 a 10) son válidas."""
        edades = [30] * cantidad_valida
        compra = ticket_service.comprar_entradas(
            usuario=usuario_registrado,
            fecha_visita=fecha_abierta,
            edades_visitantes=edades,
            forma_pago=FormaPago.EFECTIVO,
        )
        assert len(compra.entradas) == cantidad_valida

    @pytest.mark.parametrize("edad_invalida", [-1, 135, 150])
    def test_edad_visitante_fuera_de_rango_falla(
        self, ticket_service, usuario_registrado, fecha_abierta, edad_invalida
    ):
        """Edades menores a 0 o superiores a 134 años deben ser rechazadas."""
        with pytest.raises(EdadInvalidaException):
            ticket_service.comprar_entradas(
                usuario=usuario_registrado,
                fecha_visita=fecha_abierta,
                edades_visitantes=[edad_invalida],
                forma_pago=FormaPago.EFECTIVO,
            )


# ------------------------------------------------------------------------------
# 3. Pruebas de Cálculo de Tarifas y Descuentos por Edad
# ------------------------------------------------------------------------------

class TestTarifasYDescuentos:
    """Valida los precios según tipo de pase y descuentos por edad según el PO."""

    @pytest.mark.parametrize(
        "edad,precio_esperado",
        [
            (2, 0.0),       # <= 3 años: Gratis ($0)
            (3, 0.0),       # Límite gratis: 3 años
            (4, 5000.0),    # 4 a 15 años: 50% de $10.000 ($5.000)
            (15, 5000.0),   # Límite niños: 15 años
            (16, 10000.0),  # 16 a 59 años: 100% ($10.000)
            (40, 10000.0),  # Adulto pleno
            (60, 5000.0),   # >= 60 años: 50% de $10.000 ($5.000)
            (75, 5000.0),   # Adulto mayor
        ],
    )
    def test_descuentos_pase_regular(
        self, ticket_service, usuario_registrado, fecha_abierta, edad, precio_esperado
    ):
        """Verifica la escala de descuentos para pase Regular (Base $10.000)."""
        compra = ticket_service.comprar_entradas(
            usuario=usuario_registrado,
            fecha_visita=fecha_abierta,
            edades_visitantes=[edad],
            forma_pago=FormaPago.EFECTIVO,
            tipo_pase=TipoPase.REGULAR,
        )
        assert compra.monto_total == precio_esperado
        assert compra.entradas[0].precio == precio_esperado

    @pytest.mark.parametrize(
        "edad,precio_esperado",
        [
            (1, 0.0),        # Bebé gratis ($0)
            (10, 10000.0),   # 50% de $20.000 ($10.000)
            (25, 20000.0),   # Adulto pleno ($20.000)
            (65, 10000.0),   # 50% de $20.000 ($10.000)
        ],
    )
    def test_descuentos_pase_vip(
        self, ticket_service, usuario_registrado, fecha_abierta, edad, precio_esperado
    ):
        """Verifica la escala de descuentos para pase VIP (Base $20.000)."""
        compra = ticket_service.comprar_entradas(
            usuario=usuario_registrado,
            fecha_visita=fecha_abierta,
            edades_visitantes=[edad],
            forma_pago=FormaPago.EFECTIVO,
            tipo_pase=TipoPase.VIP,
        )
        assert compra.monto_total == precio_esperado
        assert compra.entradas[0].precio == precio_esperado

    def test_monto_total_compra_familiar_multiple(
        self, ticket_service, usuario_registrado, fecha_abierta
    ):
        """Compra de 4 pases regulares: bebé (2), niño (10), adulto (35), abuelo (68).
        Total esperado: $0 + $5.000 + $10.000 + $5.000 = $20.000.
        """
        edades = [2, 10, 35, 68]
        compra = ticket_service.comprar_entradas(
            usuario=usuario_registrado,
            fecha_visita=fecha_abierta,
            edades_visitantes=edades,
            forma_pago=FormaPago.EFECTIVO,
            tipo_pase=TipoPase.REGULAR,
        )
        assert compra.monto_total == 20000.0
        assert len(compra.entradas) == 4


# ------------------------------------------------------------------------------
# 4. Pruebas de Medios de Pago y Notificaciones
# ------------------------------------------------------------------------------

class TestFormasPagoYNotificacion:
    """Verifica la integración con Mercado Pago, pago en efectivo y correo."""

    def test_pago_mercado_pago_procesa_pasarela(
        self, ticket_service, usuario_registrado, fecha_abierta, mock_payment_service
    ):
        """Si la forma de pago es Mercado Pago, debe llamar a la pasarela electrónica."""
        compra = ticket_service.comprar_entradas(
            usuario=usuario_registrado,
            fecha_visita=fecha_abierta,
            edades_visitantes=[25],
            forma_pago=FormaPago.MERCADO_PAGO,
        )
        assert compra.forma_pago == FormaPago.MERCADO_PAGO
        mock_payment_service.procesar_pago.assert_called_once_with(compra)

    def test_pago_efectivo_no_invoca_pasarela(
        self, ticket_service, usuario_registrado, fecha_abierta, mock_payment_service
    ):
        """Si la forma de pago es efectivo, no debe invocar la pasarela de tarjeta."""
        compra = ticket_service.comprar_entradas(
            usuario=usuario_registrado,
            fecha_visita=fecha_abierta,
            edades_visitantes=[25],
            forma_pago=FormaPago.EFECTIVO,
        )
        assert compra.forma_pago == FormaPago.EFECTIVO
        mock_payment_service.procesar_pago.assert_not_called()

    def test_forma_pago_invalida_falla(
        self, ticket_service, usuario_registrado, fecha_abierta
    ):
        """Si se especifica un medio de pago no soportado, lanza excepción."""
        with pytest.raises(FormaPagoInvalidaException):
            ticket_service.comprar_entradas(
                usuario=usuario_registrado,
                fecha_visita=fecha_abierta,
                edades_visitantes=[25],
                forma_pago="TRANSFERENCIA_BANCARIA",  # type: ignore
            )

    def test_envio_mail_confirmacion_exito(
        self, ticket_service, usuario_registrado, fecha_abierta, mock_email_service
    ):
        """Una compra exitosa envía el correo con los datos de confirmación."""
        compra = ticket_service.comprar_entradas(
            usuario=usuario_registrado,
            fecha_visita=fecha_abierta,
            edades_visitantes=[25],
            forma_pago=FormaPago.EFECTIVO,
        )
        mock_email_service.enviar_confirmacion.assert_called_once_with(
            email=usuario_registrado.email,
            compra=compra,
        )

    def test_fallo_envio_mail_lanza_excepcion(
        self, ticket_service, usuario_registrado, fecha_abierta, mock_email_service
    ):
        """Si el servicio de correo falla, se interrumpe el flujo con excepción."""
        mock_email_service.enviar_confirmacion.side_effect = ErrorEnvioEmailException(
            "Servidor SMTP inalcanzable"
        )
        with pytest.raises(ErrorEnvioEmailException):
            ticket_service.comprar_entradas(
                usuario=usuario_registrado,
                fecha_visita=fecha_abierta,
                edades_visitantes=[25],
                forma_pago=FormaPago.EFECTIVO,
            )


# ------------------------------------------------------------------------------
# 5. Pruebas de Autenticación de Usuario
# ------------------------------------------------------------------------------

class TestAutenticacionUsuario:
    """Verifica que solo usuarios registrados puedan comprar entradas."""

    def test_usuario_no_registrado_falla(self, ticket_service, fecha_abierta):
        """Si no hay un usuario registrado/autenticado, la compra debe ser rechazada."""
        with pytest.raises(UsuarioNoRegistradoException):
            ticket_service.comprar_entradas(
                usuario=None,
                fecha_visita=fecha_abierta,
                edades_visitantes=[25],
                forma_pago=FormaPago.EFECTIVO,
            )
