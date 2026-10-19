# EcoHarmony Park - TP 06: Aseguramiento de Calidad de Proceso y de Producto

**Universidad Tecnológica Nacional - Facultad Regional Córdoba (UTN-FRC)**  
**Cátedra:** Ingeniería de Software (ISW) - Curso 4K2 - Grupo 01  
**Unidad Temática:** Unidad Nro. 4: Aseguramiento de Calidad de Proceso y de Producto  
**Práctica:** Enfoque de Desarrollo Conducido por Pruebas (TDD) — *Red - Green - Refactor*  

---

## 1. User Story Seleccionada

> **ID / Estimación:** US-01 (8 Story Points)  
> **Título:** Comprar Entradas  
> **Rol:** Como visitante registrado  
> **Deseo:** Quiero comprar una o más entradas  
> **Finalidad:** Asegurar mi visita al parque.

### Criterios de Aceptación (Consigna Oficial + FAQ PO)
1. **Usuario Registrado:** El comprador debe ser un usuario previamente registrado en la plataforma.
2. **Fecha de Visita:** La fecha debe ser igual o posterior a la fecha actual y no mayor a 30 días en el futuro.
3. **Días de Apertura:** La fecha debe coincidir con los días de funcionamiento del bioparque (martes a domingos de 8:30 a 19:00). El parque está cerrado todos los lunes, y los feriados 25 de diciembre y 1 de enero.
4. **Cantidad de Entradas:** La compra debe ser de 1 a 10 entradas inclusive (`1 <= cantidad <= 10`).
5. **Edad de los Visitantes:** Se debe ingresar la edad de cada visitante individualmente (`0 <= edad < 135`).
6. **Tipo de Pase:** Cada entrada indica su pase, Regular ($10.000) o VIP ($20.000).
7. **Cálculo de Monto con Descuentos por Edad:**
   - 0 a 3 años: Gratis ($0).
   - 4 a 15 años: 50% de descuento.
   - 16 a 59 años: 100% (tarifa plena).
   - 60 años o más: 50% de descuento.
8. **Formas de Pago:** Efectivo (pago en boletería) o Mercado Pago (pasarela con tarjeta).
9. **Confirmación vía Correo:** Envío automático de correo electrónico con el resumen de la compra.

---

## 2. Estructura del Repositorio

El diseño desacopla la lógica de negocio de los servicios externos para permitir pruebas unitarias con dobles de prueba (mocks):

```text
TP_06/
├── pyproject.toml               # Configuración de pytest y PYTHONPATH
├── requirements.txt             # Dependencias del proyecto (pytest)
├── README.md                    # Descripción de la entrega y del caso
├── docs/
│   └── DECISIONES_DISENO.md     # Justificación arquitectónica y decisiones de diseño
├── src/
│   ├── __init__.py
│   ├── domain/                  # Entidades y reglas del negocio
│   │   ├── __init__.py
│   │   ├── exceptions.py        # Excepciones de negocio (ParqueCerrado, etc.)
│   │   └── models.py            # Modelos: Usuario, Entrada, CompraEntradas, TipoPase, FormaPago
│   └── services/                # Servicios y adaptadores
│       ├── __init__.py
│       ├── email_service.py     # Protocolo / Interfaz de envío de emails
│       ├── payment_service.py   # Protocolo / Interfaz de pasarela Mercado Pago
│       └── ticket_service.py    # Orquestador del caso de uso
├── tests/
│   ├── __init__.py
│   └── test_comprar_entradas.py # Suite de pruebas unitarias idiomáticas con Pytest
└── web/
    ├── server.py                # Servidor de la demo: API + interfaz compilada
    └── frontend/                # Interfaz en React (Vite)
```

---

## 3. Ciclo TDD

Siguiendo el ciclo TDD:
1. **Fase RED:** Se diseñó la suite automatizada en `tests/test_comprar_entradas.py` agrupada en clases temáticas (`TestAperturaYFechas`, `TestCantidadYEdades`, `TestTarifasYDescuentos`, `TestFormasPagoYNotificacion`, `TestAutenticacionUsuario`) con `@pytest.mark.parametrize`. Todas las pruebas fallan inicialmente con `NotImplementedError`, garantizando ausencia de falsos positivos.
2. **Fase GREEN:** Implementación mínima en `src/services/ticket_service.py` para satisfacer los tests.
3. **Fase REFACTOR:** Modularización y optimización del diseño sin romper las pruebas.

Las correcciones de la revisión se hicieron en un nuevo ciclo RED - GREEN (ver `docs/DECISIONES_DISENO.md`, sección 7).

---

## 4. Ejecución de Pruebas

```bash
# 1. Instalar dependencias
pip install -r requirements.txt

# 2. Ejecutar pytest en modo detallado
pytest -v
```

---

## 5. Demo Web

Requiere Node.js. La interfaz se compila la primera vez (y cada vez que cambie algo en `web/frontend`):

```bash
cd web/frontend
npm install
npm run build
cd ../..
```

Después alcanza con levantar el servidor desde `TP_06` y abrir http://localhost:8080:

```bash
python web/server.py
```

Las compras se guardan en `web/ecoharmony.db` (SQLite, no se sube al repositorio). Para empezar de cero, borrar ese archivo.

---

## 6. Despliegue en Render

Crear un **Web Service** conectado al repositorio con esta configuración:

| Campo | Valor |
| :--- | :--- |
| Root Directory | `03_Trabajos_Grupales/Trabajos_Practicos/TP_06` |
| Runtime | Python 3 |
| Build Command | `cd web/frontend && npm install && npm run build` |
| Start Command | `python web/server.py` |
| Variable de entorno | `TZ` = `America/Argentina/Buenos_Aires` |

`TZ` hace que la fecha y la hora del servidor sean las de Argentina (las reglas de "hoy" y de las 17:30 dependen de ellas). En el plan gratuito el disco no es persistente: la base `ecoharmony.db` se reinicia cuando el servicio se redespliega o se suspende por inactividad.

