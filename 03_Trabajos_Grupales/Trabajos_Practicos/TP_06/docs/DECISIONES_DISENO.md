# Documento de Decisiones de Diseño y Arquitectura

**Trabajo Práctico N° 6:** Aseguramiento de Calidad de Proceso y de Producto  
**Cátedra:** Ingeniería de Software (ISW) - UTN FRC - Curso 4K2 - Grupo 01  
**Caso de Estudio:** EcoHarmony Park  
**User Story:** US-01 - Comprar Entradas (Estimación: 8 Story Points)  

---

## 1. Alcance y Contexto del Problema

El objetivo del presente trabajo práctico es implementar la funcionalidad de **Comprar Entradas** utilizando la disciplina de **Desarrollo Guiado por Pruebas (TDD)** bajo el ciclo **Red - Green - Refactor**.

La especificación se basa estrictamente en la consigna evaluable del TP6 y en las aclaraciones brindadas por los Product Owners (PO) de EcoHarmony Park:
* **Rol:** Visitante registrado en la plataforma.
* **Objetivo:** Adquirir entre 1 y 10 entradas para una fecha válida de visita, indicando edades y tipo de pase (Regular o VIP).
* **Reglas clave:** 
  * El parque abre de martes a domingos (cerrado todos los lunes, y los feriados 25 de diciembre y 1 de enero).
  * Los precios base son: Regular $10.000 y VIP $20.000.
  * Se aplican descuentos por edad: bebés (<= 3 años) entran gratis; menores (4 a 15 años) y adultos mayores (>= 60 años) abonan el 50%; adultos (16 a 59 años) abonan tarifa plena.
  * El pago puede ser en efectivo (en boletería) o mediante tarjeta con redirección a Mercado Pago.
  * Al finalizar se envía un correo electrónico de confirmación con el desglose de la compra.

---

## 2. Modelo de Dominio

Para evitar sobreingeniería y reflejar fielmente la realidad del negocio, el modelo se organiza en entidades simples y cohesivas:

```
+-----------------------------------------------------------+
|                      CompraEntradas                       |
+-----------------------------------------------------------+
| - id_compra: Optional[str]                                |
| - usuario: Usuario                                        |
| - fecha_visita: date                                      |
| - entradas: List[Entrada]                                 |
| - forma_pago: FormaPago                                   |
| - monto_total: float                                      |
| - confirmada: bool                                        |
+-----------------------------------------------------------+
           |                                  |
           | 1..*                             | 1
           v                                  v
+-----------------------+          +-----------------------+
|        Entrada        |          |        Usuario        |
+-----------------------+          +-----------------------+
| - edad_visitante: int |          | - nombre: str         |
| - tipo_pase: TipoPase |          | - email: str          |
| - precio: float       |          | - dni: str            |
+-----------------------+          +-----------------------+
```

### Justificación de las Entidades:
1. **`Entrada` vs `Visitante`:** Corrigiendo la observación del code review, una orden de compra contiene **entradas**, no personas. Cada entrada registra la edad del visitante y el tipo de pase elegido, permitiendo calcular su precio de forma individual.
2. **`Usuario`:** Modela al comprador autenticado en la plataforma. Siguiendo la respuesta del PO, para esta User Story se asume que el usuario ya inició sesión, por lo que en las pruebas se provee una instancia válida de usuario registrado.
3. **`TipoPase`:** Enum con valores `REGULAR` ($10.000) y `VIP` ($20.000).
4. **`FormaPago`:** Enum con valores `EFECTIVO` (pago presencial) y `MERCADO_PAGO` (pago electrónico).

---

## 3. Jerarquía de Excepciones del Dominio

Las excepciones de negocio derivan de una clase base común `DominioException`, lo que permite capturar errores de forma granular:

| Excepción | Causa de Negocio |
| :--- | :--- |
| `UsuarioNoRegistradoException` | El usuario comprador no está registrado o la sesión no es válida. |
| `ParqueCerradoException` | La fecha seleccionada cae en día lunes o feriado festivo (25/12 o 01/01). |
| `FechaInvalidaException` | La fecha de visita es anterior al día actual o supera los 30 días de anticipación. |
| `CantidadEntradasInvalidaException` | Se intentan comprar menos de 1 o más de 10 entradas en la transacción. |
| `EdadInvalidaException` | La edad de un visitante es menor a 0 o mayor o igual a 135 años. |
| `TipoPaseInvalidoException` | El tipo de pase de una entrada no es Regular ni VIP. |
| `FormaPagoInvalidaException` | No se especifica forma de pago o se ingresa un medio no contemplado. |
| `ErrorEnvioEmailException` | Fallo de comunicación al despachar el correo de confirmación. |
| `ErrorProcesamientoPagoException` | Fallo al procesar el pago con la pasarela electrónica (Mercado Pago). |

*(Nota: Se eliminó deliberadamente la excepción artificial de "monto negativo" debido a que el cliente nunca ingresa el precio manualmente; el monto es un resultado calculado por el sistema en función de las entradas y edades).*

---

## 4. Servicios e Inyección de Dependencias

Para respetar los principios de **Inversión de Dependencias (DIP)** y **Responsabilidad Única (SRP)**:
* **`TicketService`:** Es el servicio orquestador del caso de uso. Contiene la lógica de validación de negocio y cálculo de tarifas.
* **`PaymentService` (Protocol / Interface):** Abstracción de la pasarela de pago (Mercado Pago). En las pruebas unitarias se reemplaza por un mock (`Mock(spec=PaymentService)`) para verificar que se invoque al pagar con tarjeta y no se invoque al pagar en efectivo.
* **`EmailService` (Protocol / Interface):** Abstracción del servicio de mensajería transaccional. Permite verificar que el correo se envíe con los datos correctos y simular caídas del servicio sin depender de un servidor SMTP real.

---

## 5. Estrategia y Justificación de las Pruebas con Pytest

Para evitar un archivo de pruebas sobredimensionado y repetitivo (donde la mayor parte del código sería copiar y pegar el mismo bloque `Arrange-Act-Assert` para cambiar un solo parámetro), se adoptaron dos herramientas estándar de `pytest`:

1. **Clases de prueba (`class Test...`):**
   Actúan como módulos lógicos que agrupan los casos según el criterio de aceptación que evalúan. Esto facilita la lectura, colapsado de bloques y auditoría del código sin tener funciones dispersas:
   * `TestAperturaYFechas`: Evalúa días abiertos, lunes cerrados por mantenimiento, feriados festivos (25/12 y 01/01) y límites temporales.
   * `TestCantidadYEdades`: Valida los límites de entradas (1 a 10) y rangos biológicos de edad (0 a 134 años).
   * `TestTarifasYDescuentos`: Comprueba los descuentos por edad (gratis para bebés, 50% para niños y adultos mayores, 100% para adultos) en pases Regular y VIP.
   * `TestFormasPagoYNotificacion`: Verifica el flujo de Mercado Pago vs Efectivo y la confirmación vía correo electrónico.
   * `TestAutenticacionUsuario`: Verifica que solo usuarios registrados puedan realizar compras.

2. **Pruebas parametrizadas (`@pytest.mark.parametrize`):**
   Permiten aplicar análisis de valores límite (BVA) y partición de equivalencia pasando tablas de datos a una única función de prueba bien definida.

De este modo, reducimos el archivo a un tamaño mantenible y legible, ejecutando 35 casos de prueba exhaustivos con menos de 300 líneas de código limpio.

---

## 6. Evidencia de la Fase RED

Al ejecutar `pytest`, se comprueba que el 100% de los tests (35 casos generados mediante parametrización) fallan debido a la ausencia deliberada de implementación de producción:

```text
============================= test session starts =============================
platform win32 -- Python 3.14.7, pytest-9.1.1
rootdir: c:\Dani\UTN\ISW\ISW_2026_4K2_G01\03_Trabajos_Grupales\Trabajos_Practicos\TP_06
configfile: pyproject.toml
testpaths: tests
collected 35 items

tests/test_comprar_entradas.py FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF   [100%]

============================= 35 failed in 1.27s ==============================
```

Todas las pruebas fallan con `NotImplementedError`, confirmando que:
1. Las pruebas están correctamente programadas y descubiertas por el test runner.
2. Ningún test pasa por casualidad ("falso positivo").
3. El sistema está listo para avanzar a la fase **GREEN**.

---

## 7. Correcciones posteriores a la revisión

Se hicieron en un nuevo ciclo RED - GREEN. La suite pasó de 36 a 39 casos:

1. **Tipo de pase por visitante.** La User Story pide "la edad de cada visitante y tipo de pase" sin aclarar si el pase es uno para toda la compra; antes se aplicaba el mismo a todas las entradas. Ahora `comprar_entradas` recibe la lista de `Entrada` (edad y pase de cada visitante), algo que el modelo ya contemplaba. Caso nuevo: `test_cada_entrada_con_su_tipo_de_pase`.
2. **Pago rechazado.** El servicio ignoraba la respuesta de Mercado Pago: si el pago se rechazaba, la compra se confirmaba igual y se enviaba el correo. Ahora se lanza `ErrorProcesamientoPagoException`. Caso nuevo: `test_pago_rechazado_no_confirma_la_compra`.
3. **Compra sin forma de pago.** Es una prueba de usuario de la consigna. El servicio ya la rechazaba, pero el servidor web completaba "efectivo" por defecto; se agregó el caso `None` a `test_forma_pago_invalida_falla` y se quitó ese valor por defecto del servidor.

Además se corrigió `test_compra_con_mas_de_un_mes_de_anticipacion_falla`, que fallaba los días en que hoy + 35 caía en lunes (el servicio respondía `ParqueCerradoException`): ahora usa el siguiente día abierto. No agrega casos.

**RED** (la firma todavía no acepta `entradas`):

```text
TypeError: TicketService.comprar_entradas() got an unexpected keyword argument 'entradas'
============================= 39 failed =============================
```

**GREEN:**

```text
============================= 39 passed =============================
```

