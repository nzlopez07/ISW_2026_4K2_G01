# Documento de Decisiones de Diseño y Arquitectura

**Trabajo Práctico N° 6:** Aseguramiento de Calidad de Proceso y de Producto  
**Cátedra:** Ingeniería de Software (ISW) - UTN FRC - 4K2  
**Caso de Estudio:** EcoHarmony Park  
**User Story:** US-01 - Comprar Entradas (SP: 8)  

---

## 1. Principios de Diseño Adoptados

Para garantizar alta cohesión, bajo acoplamiento y testeabilidad en el ciclo TDD, se aplicaron los siguientes principios:

### 1.1. Principios SOLID
- **Single Responsibility Principle (SRP):**
  - `Visitante`: Modela y valida los datos propios del visitante (ej. edad permitida).
  - `CompraEntradas`: Estructura inmutable/dataclass que almacena el estado de la transacción.
  - `TicketService`: Orquesta el flujo de negocio del caso de uso.
  - `EmailService` / `PaymentService`: Encargados exclusivamente de la comunicación con servicios externos.
- **Open/Closed Principle (OCP):**
  - El sistema utiliza abstracciones (`Protocols` o interfaces) para la pasarela de pagos y el servicio de correos, permitiendo añadir nuevos medios de pago o proveedores de notificación sin modificar el servicio central de tickets.
- **Dependency Inversion Principle (DIP):**
  - `TicketService` depende de abstracciones (`EmailService`, `PaymentService`) y no de implementaciones concretas. Esto permite inyectar dobles de prueba (`mocks` / `stubs`) durante la ejecución de los tests unitarios en `pytest`.

---

## 2. Jerarquía de Excepciones del Dominio

Se diseñó una jerarquía en `src/domain/exceptions.py` con una clase base `DominioException`. Esto permite un manejo granular de errores de negocio:

| Excepción | Criterio de Aceptación / Causa |
| :--- | :--- |
| `FechaInvalidaException` | Fecha de visita anterior a la fecha actual (`fecha < today()`). |
| `CantidadEntradasInvalidaException` | Cantidad de entradas menor o igual a 0, o mayor a 10. |
| `EdadInvalidaException` | Edad menor a 0 o mayor o igual a 135 años. |
| `MontoInvalidoException` | Monto calculado o provisto menor o igual a 0. |
| `FormaPagoInvalidaException` | Forma de pago distinta de `efectivo` o `mercado_pago`. |
| `ErrorEnvioEmailException` | Fallo de entrega en la confirmación por correo electrónico. |
| `ErrorProcesamientoPagoException`| Fallo en la pasarela de pago electrónico. |

---

## 3. Matriz de Casos de Prueba (Fase RED)

Los casos de prueba cubren tanto análisis de valores límite (BVA - *Boundary Value Analysis*) como partición de equivalencia:

| # | Caso de Prueba | Entrada / Condición | Resultado Esperado | Criterio |
|---|---|---|---|---|
| 1 | Fecha anterior a hoy | `fecha = today - 1 día` | `FechaInvalidaException` (Fail) | Criterio 1 |
| 2 | Fecha actual (hoy) | `fecha = today` | `Pass` (Compra confirmada) | Criterio 1 |
| 3 | Fecha posterior a hoy | `fecha = today + 7 días` | `Pass` (Compra confirmada) | Criterio 1 |
| 4 | Límite máximo: 10 entradas | `edades = [25] * 10` | `Pass` (10 entradas válidas) | Criterio 2 |
| 5 | Supera límite: 11 entradas | `edades = [20] * 11` | `CantidadEntradasInvalidaException` (Fail) | Criterio 2 |
| 6 | Cantidad cero entradas | `edades = []` | `CantidadEntradasInvalidaException` (Fail) | Criterio 2 |
| 7 | Cantidad negativa entradas | `edades = [-1]` | `CantidadEntradasInvalidaException` / `EdadInvalidaException` (Fail) | Criterio 2 |
| 8 | Monto total cero | `precio = 0.0` | `MontoInvalidoException` (Fail) | Criterio 4 |
| 9 | Monto total positivo ($100) | 1 entrada a $100 | `Pass` (`monto_total == 100.0`) | Criterio 4 |
| 10 | Monto total negativo | `precio = -1.0` | `MontoInvalidoException` (Fail) | Criterio 4 |
| 11 | Pago con Mercado Pago | `forma_pago = FormaPago.MERCADO_PAGO` | `Pass` (invoca pasarela) | Criterio 5 |
| 12 | Pago en efectivo | `forma_pago = FormaPago.EFECTIVO` | `Pass` (no invoca pasarela electrónica) | Criterio 5 |
| 13 | Forma de pago no soportada | `forma_pago = "CRIPTO"` | `FormaPagoInvalidaException` (Fail) | Criterio 5 |
| 14 | Confirmación mail exitosa | Servicio email retorna éxito | `Pass` (se envía detalle) | Criterio 6 |
| 15 | Fallo en envío de confirmación | Servicio email lanza error | `ErrorEnvioEmailException` (Fail) | Criterio 6 |
| 16 | Variedad de edades válidas | `edades = [6, 12, 46, 44]` | `Pass` (4 visitantes registrados) | Criterio 3 |
| 17 | Edad límite inferior válida: 0 | `edad = 0` (bebé) | `Pass` | Criterio 3 |
| 18 | Edad negativa inválida | `edad = -1` | `EdadInvalidaException` (Fail) | Criterio 3 |
| 19 | Edad extrema inválida: 135 | `edad = 135` | `EdadInvalidaException` (Fail) | Criterio 3 |

---

## 4. Evidencia de la Fase RED

Al ejecutar `pytest`, se comprueba que el 100% de los tests fallan debido a la ausencia deliberada de implementación de producción:

```text
============================= test session starts =============================
platform win32 -- Python 3.14.7, pytest-9.1.1
rootdir: c:\Dani\UTN\ISW\ISW_2026_4K2_G01\03_Trabajos_Grupales\Trabajos_Practicos\TP_06
configfile: pyproject.toml
testpaths: tests
collected 23 items

tests/test_comprar_entradas.py FFFFFFFFFFFFFFFFFFF                       [ 82%]
tests/test_visitante.py FFFF                                             [100%]

============================= 23 failed in 0.74s ==============================
```

Todas las pruebas fallan con `NotImplementedError`, confirmando que:
1. Las pruebas están correctamente programadas y descubiertas por el test runner.
2. Ningún test pasa por casualidad ("falso positivo").
3. El sistema está listo para avanzar a la fase **GREEN**.
