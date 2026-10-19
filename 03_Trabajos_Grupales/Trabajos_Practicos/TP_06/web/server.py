"""Servidor web de demostración para el portal de compras de EcoHarmony Park.

Conecta la interfaz visual de usuario directamente con el TicketService de TDD.
"""
from datetime import date, datetime
import json
import os
import sqlite3
import sys
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse

# Agregar la raíz de TP_06 al path de Python para importar los módulos de src
DIRECTORIO_ACTUAL = os.path.dirname(os.path.abspath(__file__))
RAIZ_TP06 = os.path.abspath(os.path.join(DIRECTORIO_ACTUAL, ".."))
DIRECTORIO_INTERFAZ = os.path.join(DIRECTORIO_ACTUAL, "frontend", "dist")
RUTA_BASE_DATOS = os.path.join(DIRECTORIO_ACTUAL, "ecoharmony.db")
if RAIZ_TP06 not in sys.path:
    sys.path.insert(0, RAIZ_TP06)

from src.domain.exceptions import DominioException
from src.domain.models import CompraEntradas, Entrada, FormaPago, TipoPase, Usuario
from src.services.email_service import EmailService
from src.services.payment_service import PaymentService
from src.services.registro_compras import RegistroCompras
from src.services.ticket_service import TicketService


# Implementaciones reales/simuladas para el servidor web interactivo
class WebEmailService(EmailService):
    """Guarda y despacha el correo de confirmación de la compra."""
    def __init__(self):
        self.ultimo_email_enviado = None

    def enviar_confirmacion(self, email: str, compra: CompraEntradas) -> bool:
        # Generar comprobante estructurado del correo
        desglose = []
        for i, ent in enumerate(compra.entradas, 1):
            categoria = "Adulto"
            if ent.edad_visitante <= 3:
                categoria = "Bebé (Gratis)"
            elif ent.edad_visitante <= 15:
                categoria = "Menor (50% OFF)"
            elif ent.edad_visitante >= 60:
                categoria = "Mayor (50% OFF)"
            desglose.append({
                "numero": i,
                "edad": ent.edad_visitante,
                "categoria": categoria,
                "tipo_pase": ent.tipo_pase.value.upper(),
                "precio": ent.precio,
            })

        self.ultimo_email_enviado = {
            "destinatario": email,
            "remitente": "boletos@ecoharmonypark.com",
            "asunto": f"Entradas Confirmadas - {compra.id_compra} - EcoHarmony Park",
            "fecha_envio": datetime.now().strftime("%d/%m/%Y %H:%M"),
            "id_compra": compra.id_compra,
            "fecha_visita": compra.fecha_visita.strftime("%d/%m/%Y"),
            "monto_total": compra.monto_total,
            "forma_pago": compra.forma_pago.value.replace("_", " ").title(),
            "entradas": desglose,
        }
        return True


class WebPaymentService(PaymentService):
    """Simulador avanzado de la pasarela de pagos de Mercado Pago."""
    def procesar_pago(self, compra: CompraEntradas) -> bool:
        return True


class SqliteRegistroCompras(RegistroCompras):
    """Guarda las compras confirmadas y sus entradas en una base SQLite."""
    def __init__(self, ruta: str):
        self.ruta = ruta
        with sqlite3.connect(self.ruta) as conexion:
            conexion.executescript("""
                CREATE TABLE IF NOT EXISTS compras (
                    id_compra TEXT PRIMARY KEY,
                    dni TEXT NOT NULL,
                    fecha_visita TEXT NOT NULL,
                    forma_pago TEXT NOT NULL,
                    monto_total REAL NOT NULL
                );
                CREATE TABLE IF NOT EXISTS entradas (
                    id_compra TEXT NOT NULL REFERENCES compras (id_compra),
                    edad_visitante INTEGER NOT NULL,
                    tipo_pase TEXT NOT NULL,
                    precio REAL NOT NULL
                );
            """)

    def guardar(self, compra: CompraEntradas) -> None:
        with sqlite3.connect(self.ruta) as conexion:
            conexion.execute(
                "INSERT INTO compras VALUES (?, ?, ?, ?, ?)",
                (compra.id_compra, compra.usuario.dni, compra.fecha_visita.isoformat(),
                 compra.forma_pago.value, compra.monto_total),
            )
            conexion.executemany(
                "INSERT INTO entradas VALUES (?, ?, ?, ?)",
                [(compra.id_compra, e.edad_visitante, e.tipo_pase.value, e.precio) for e in compra.entradas],
            )

    def entradas_compradas(self, dni: str, fecha: date) -> int:
        with sqlite3.connect(self.ruta) as conexion:
            fila = conexion.execute(
                "SELECT COUNT(*) FROM entradas JOIN compras USING (id_compra) "
                "WHERE dni = ? AND fecha_visita = ?",
                (dni, fecha.isoformat()),
            ).fetchone()
        return fila[0]


# Instancia del servicio de tickets de negocio
servicio_email = WebEmailService()
servicio_pago = WebPaymentService()
servicio_tickets = TicketService(
    email_service=servicio_email,
    payment_service=servicio_pago,
    registro_compras=SqliteRegistroCompras(RUTA_BASE_DATOS),
)

# Usuario registrado por defecto según la consigna
USUARIO_LOGUEADO = Usuario(
    nombre="Fernando Javier",
    email="fernando.javier@ecoharmony.com",
    dni="40123456",
)


class EcoHarmonyRequestHandler(SimpleHTTPRequestHandler):
    """Manejador HTTP para la API de compras y los archivos estáticos."""

    # En Windows el registro puede asociar .js a text/plain y el navegador no carga la interfaz
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map, ".js": "text/javascript"}

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORIO_INTERFAZ, **kwargs)

    def do_GET(self):
        url = urlparse(self.path)
        if url.path == "/api/estado-usuario":
            self._responder_json({
                "usuario": {
                    "nombre": USUARIO_LOGUEADO.nombre,
                    "email": USUARIO_LOGUEADO.email,
                    "dni": USUARIO_LOGUEADO.dni,
                },
                "tarifas": {
                    "regular": TicketService.PRECIO_REGULAR,
                    "vip": TicketService.PRECIO_VIP,
                },
                "horario": "08:30 a 19:00 (Entrada hasta las 17:30)",
                "hoy": date.today().isoformat(),
                "hora": datetime.now().strftime("%H:%M"),
            })
            return

        if url.path == "/api/ultimo-email":
            self._responder_json(servicio_email.ultimo_email_enviado or {})
            return

        if not os.path.isdir(DIRECTORIO_INTERFAZ):
            self.send_error(
                HTTPStatus.SERVICE_UNAVAILABLE,
                "Falta compilar la interfaz",
                "Ejecutar: cd web/frontend && npm install && npm run build",
            )
            return

        return super().do_GET()

    def do_POST(self):
        url = urlparse(self.path)
        longitud = int(self.headers.get("Content-Length", 0))
        cuerpo = self.rfile.read(longitud).decode("utf-8")
        datos = json.loads(cuerpo) if cuerpo else {}

        if url.path == "/api/comprar-entradas":
            try:
                # Parsear fecha
                fecha_str = datos.get("fecha_visita")
                if not fecha_str:
                    raise DominioException("Debe seleccionar una fecha de visita.")
                fecha_visita = datetime.strptime(fecha_str, "%Y-%m-%d").date()

                # Parsear entradas: edad y tipo de pase de cada visitante
                entradas = [
                    Entrada(edad_visitante=int(e["edad"]), tipo_pase=TipoPase(e["tipo_pase"]))
                    for e in datos.get("entradas", [])
                ]

                # Parsear forma de pago (sin valor por defecto: el visitante debe elegirla)
                forma_pago = datos.get("forma_pago")
                forma_pago = FormaPago(forma_pago) if forma_pago else None

                # Ejecutar caso de uso en TicketService
                compra = servicio_tickets.comprar_entradas(
                    usuario=USUARIO_LOGUEADO,
                    fecha_visita=fecha_visita,
                    entradas=entradas,
                    forma_pago=forma_pago,
                )

                self._responder_json({
                    "exito": True,
                    "id_compra": compra.id_compra,
                    "monto_total": compra.monto_total,
                    "fecha_visita": compra.fecha_visita.strftime("%d/%m/%Y"),
                    "forma_pago": compra.forma_pago.value,
                    "cantidad_entradas": len(compra.entradas),
                    "email_confirmacion": servicio_email.ultimo_email_enviado,
                })

            except DominioException as e:
                self._responder_json({"exito": False, "error": str(e)}, status=HTTPStatus.BAD_REQUEST)
            except Exception as e:
                self._responder_json({"exito": False, "error": f"Error inesperado: {str(e)}"}, status=HTTPStatus.INTERNAL_SERVER_ERROR)
            return

        self.send_error(HTTPStatus.NOT_FOUND, "Ruta no encontrada")

    def _responder_json(self, data: dict, status: HTTPStatus = HTTPStatus.OK):
        contenido = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(contenido)))
        self.end_headers()
        self.wfile.write(contenido)


def iniciar_servidor(puerto: int = 8080, host: str = None):
    if host is None:
        host = os.environ.get("HOST", "0.0.0.0")
    servidor = ThreadingHTTPServer((host, puerto), EcoHarmonyRequestHandler)
    print(f"Servidor EcoHarmony Park iniciado en http://{host}:{puerto}")
    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido.")
        servidor.server_close()


if __name__ == "__main__":
    puerto = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    iniciar_servidor(puerto)
