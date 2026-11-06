# Manual Maestro de Práctica y Resolución de Parciales - 2do Parcial ICSW 2026

> **Cátedra:** Ingeniería y Calidad de Software (UTN-FRC 4K2)  
> **Docentes:** Ing. Laura Covara — Ing. Judith Meles  
> **Fuentes:** Auditoría forense de los Segundos Parciales tomados en 2025 (Tema A Amarillo y Tema B Verde de *Cambalache Solidario*, con correcciones manuscritas en lapicera azul de las docentes), Guía Oficial de Trabajos Prácticos Evaluables Resueltos 2026 (Práctico 6 TDD *EcoHarmony Park*, Práctico 8/9 Testing Caja Negra *Taxi Mobile*, Práctico 9/10 Testing Caja Negra *EcoHarmony Park*, Práctico 10/12 *Kanban Pizza*), presentaciones oficiales (`PRE_09` a `PRE_16`) y apuntes de clase 2026.

---

## Índice General de la Guía Práctica del 2do Parcial

1. **Arquitectura y Rúbrica Oficial del 2do Parcial (Teórico-Práctico 100 Puntos)**
   - Estructura real del examen: Hoja Práctica (50 pts: Clases de Equivalencia [20 pts] + Casos de Prueba [30 pts]) y Ejercicio de Desarrollo en Hoja Teórica (18 pts: Diseño de Tablero Kanban).
   - Los **10 Errores Fatales** que descuentan puntos según las correcciones reales en lapicera azul de Laura Covara y Judith Meles.
2. **Frente Práctico — Consigna 1: Partición de Equivalencias de Entrada y Salida (20 Puntos)**
   - Regla de Oro #1: Numeración correlativa única ($1, 2, 3, \dots, N$).
   - Regla de Oro #2: La condición externa implícita obligatoria (`Usuario logueado`).
   - Regla de Oro #3: Cómo desglosar campos con dependencias cruzadas (condicionales).
   - Regla de Oro #4: Desglose exhaustivo de Clases Inválidas por tipo, formato, obligatoriedad y bordes.
   - Regla de Oro #5: Cómo armar las **Clases de Equivalencia de Salida** separando cada componente visual/lógico/archivo (la corrección más repetida en 2025).
3. **Frente Práctico — Consigna 2: Diseño de Casos de Prueba con Valores Límite (30 Puntos = 2 × 15 pts)**
   - Anatomía exacta de las 6 columnas de la Matriz de Casos de Prueba (`ID | Prioridad | Nombre | Precondiciones | Pasos | Resultado Esperado`).
   - Cómo inyectar **Análisis de Valores Límite (BVA)** en los datos concretos de los pasos.
   - Diferencia quirúrgica entre `Precondiciones` (estado estático previo de la BD) y `Pasos` (acciones del actor).
   - Trazabilidad obligatoria: listar qué números de Clases de Equivalencia cubre cada Caso de Prueba.
4. **Frente Teórico-Práctico: Diseño de Tablero Kanban Completo (18 Puntos del Teórico)**
   - Receta algorítmica en 5 pasos para sacar 18/18 puntos.
   - División obligatoria en subcolumnas de **Producción (*En Curso*)** y **Acumulación (*Buffer / Listo*)** para habilitar el sistema *Pull*.
   - Límites de WIP, Punto de Compromiso, Punto de Entrega, Carril *Expedite*, Tipos de Ítems y las **6 Políticas Explícitas Blindadas**.
5. **Resoluciones Modelo Completas "Golden Templates" (Calificación 10/10)**
   - **Golden Template 1:** *Cambalache Solidario — Parcial 2025 Tema A* (`Publicar Producto en Venta` + Tablero Kanban Mantenimiento Evolutivo).
   - **Golden Template 2:** *Cambalache Solidario — Parcial 2025 Tema B* (`Generar Rendición para Beneficiarios` + Tablero Kanban Incidentes Críticos).
   - **Golden Template 3:** *Taxi Mobile — Práctico 9 Oficial 2026* (`Ver mapa de taxis`).
   - **Golden Template 4:** *EcoHarmony Park — Práctico 10 Oficial 2026* (`Inscribirme a actividad` + `Comprar entradas` resuelto completo).

---

## 1. Arquitectura y Rúbrica Oficial del 2do Parcial (100 Puntos)

A diferencia del 1er Parcial donde todo el desarrollo estaba en el Práctico, en el **2do Parcial tenés 68 puntos sobre 100 que son de resolución práctica / diseño en hoja**:

```text
SEGUNDO PARCIAL ICSW (100 PUNTOS TOTALES)
│
├── HOJA 1: EXAMEN PRÁCTICO DE TESTING CAJA NEGRA (50 Puntos — 60 min)
│   ├── PUNTO 1: Tabla de Clases de Equivalencia (20 Puntos)
│   │   ├── 1.a Clases de Equivalencia de ENTRADA (Válidas e Inválidas numeradas) [~12 pts]
│   │   └── 1.b Clases de Equivalencia de SALIDA (Válidas e Inválidas por componente) [~8 pts]
│   │
│   └── PUNTO 2: Matriz de Casos de Prueba con Valores Límite (30 Puntos)
│       ├── 2.a Caso de Prueba #1 solicitado por consigna (con BVA y datos concretos) [15 pts]
│       └── 2.b Caso de Prueba #2 solicitado por consigna (con BVA y datos concretos) [15 pts]
│
└── HOJA 2: EXAMEN TEÓRICO (50 Puntos — 60 min)
    ├── PUNTO 1: Diseño de Sistema KANBAN para un Caso de Estudio (18 Puntos)
    │   ├── 1.a Diseño visual del Tablero (Producción vs. Buffer, WIPs, Compromiso/Entrega) [~8 pts]
    │   ├── 1.b Identificación y justificación de Tipos de Ítems de Trabajo [~4 pts]
    │   └── 1.c Definición de al menos 5 Políticas Explícitas con su propósito [~6 pts]
    │
    └── PUNTO 2: 8 Preguntas Multiple Choice Múltiple Respuesta (32 Puntos = 8 × 4 pts)
```

---

### Los 10 Errores Fatales que Laura Covara y Judith Meles Penalizan en Lapicera Azul

De la inspección directa de las hojas corregidas de los alumnos en el Segundo Parcial 2025 (Temas A y B), estos son los **10 errores exactos que te hacen perder la promoción**:

1. **Omitir la condición externa `Usuario logueado` en la tabla de Entrada (Resta 2 a 3 puntos):**
   * ❌ *Error del alumno:* Empezar la tabla directamente con el primer campo del formulario (ej. `Título` o `Barrio`).
   * 🔵 *Corrección de cátedra:* Toda User Story comienza con `"Como <Rol> quiero..."`. Por lo tanto, `Usuario logueado` es **SIEMPRE** una condición externa de entrada (Válida: `Usuario logueado con perfil de <Rol>`; Inválidas: `Usuario no logueado` y `Usuario con perfil distinto a <Rol>`).
2. **Poner una sola fila genérica en las Clases de Equivalencia de Salida (Resta 4 a 6 puntos):**
   * ❌ *Error del alumno en 2025:* Poner una única fila al final llamada `Salida: Muestra mensaje de éxito / Muestra mensaje de error`.
   * 🔵 *Corrección manuscrita en azul en los parciales 2025:* ***"Separar cada elemento de salida"*** / ***"Faltan las salidas del reporte, los cálculos y los distintos mensajes de error"***.
   * ✅ *Cómo blindarte:* Tenés que crear una fila de Salida por cada efecto o dato que devuelve el sistema: 1) *Estado en que queda la entidad creada/modificada*, 2) *Cálculos mostrados en pantalla*, 3) *Grilla/Listado o Archivo descargado (`.xlsx`, `.pdf`)*, 4) *Notificación/Email enviado*, y 5) *Mensajes de confirmación vs. cada Mensaje de error específico*.
3. **No abrir las clases cuando un campo depende del valor de otro campo (Resta 3 a 4 puntos):**
   * ❌ *Error del alumno:* Si el enunciado dice *"El detalle de uso es obligatorio solo si el artículo es Usado"*, poner simplemente `Detalle de uso: Válida = texto <= 100 car. | Inválida = vacío`.
   * 🔵 *Corrección de cátedra:* Si el artículo es *Nuevo*, dejar vacío el detalle de uso **NO es inválido, es VÁLIDO**. Tenés que condicionarlo:
     * *Válida A:* Ingresa detalle ($\le 100$ car.) **cuando Estado = "Usado"**.
     * *Válida B:* No ingresa detalle **cuando Estado = "Nuevo"**.
     * *Inválida A:* No ingresa detalle **cuando Estado = "Usado"**.
     * *Inválida B:* Ingresa detalle ($> 100$ car.) **cuando Estado = "Usado"**.
     * *Inválida C:* Ingresa detalle **cuando Estado = "Nuevo"**.
4. **No numerar correlativamente cada Clase de Equivalencia ($1, 2, \dots, N$) (Resta 2 puntos):**
   * Cada clase válida e inválida lleva su propio número único a la izquierda para poder trazarla en los Casos de Prueba.
5. **Escribir palabras abstractas como "válido" o "correcto" dentro de un Caso de Prueba (Resta 5 a 8 puntos):**
   * ❌ *Error del alumno:* Paso 2: *"El vendedor ingresa un título válido, un precio mayor a cero y sube una foto válida"*.
   * 🔵 *Corrección de cátedra:* Un Caso de Prueba **NO es una prueba de usuario (UAT)**; es una especificación ejecutable literal. Si un tester junior lee tu paso, tiene que saber **exactamente qué caracteres tipear**: `"Campera de abrigo"`, `"$25.000"`, `"campera_frente.jpg (2,00 MB)"`.
6. **No usar Valores Límite en los datos de los Casos de Prueba (Resta 4 a 6 puntos):**
   * ❌ *Error del alumno:* Si la cantidad permitida es de `1 a 10 entradas` y el tamaño de foto es `hasta 2 MB`, probar con `4 entradas` y una foto de `500 KB`.
   * 🔵 *Corrección de cátedra:* La consigna dice explícitamente *"aplicando Análisis de Valores Límite"*. Tenés que usar **$1$ o $10$ entradas** (o $0$ y $11$ si es un caso que falla) y una foto de exactamente **$2,00\text{ MB}$** (o $2,01\text{ MB}$ si falla).
7. **Meter acciones en `Precondiciones` o meter precondiciones en `Pasos` (Resta 3 puntos):**
   * En `Precondiciones` **nadie hace click ni ingresa nada**: solo se declara el estado previo del sistema (quién está logueado y qué registros existen cargados en la base de datos antes de empezar).
   * En `Pasos` van únicamente las acciones numeradas del usuario sobre la interfaz, terminando siempre con el click en el botón de confirmación/búsqueda.
8. **Inconsistencia entre `Precondiciones`, `Pasos` y `Resultado Esperado` (Resta 4 puntos):**
   * Si en el `Resultado Esperado` decís *"El sistema muestra 2 taxis ocupados: chapa AAA 111 y BBB 222"*, esos dos taxis **tienen que haber sido declarados previamente en la columna `Precondiciones`** con todos sus datos. Nada puede aparecer "por arte de magia" en el Resultado Esperado si no estaba en las Precondiciones o en los Pasos.
9. **En el Tablero Kanban (Teórico Punto 1), hacer columnas simples sin subcolumnas de Acumulación/Buffer (Resta 5 a 6 puntos sobre 18):**
   * Si no dividís las etapas activas en `[En Curso (Producción)]` y `[Listo (Acumulación / Buffer)]`, no existe sistema *Pull* ni forma de distinguir *Touch Time* de *Cycle Time*.
10. **En el Tablero Kanban, escribir políticas genéricas sin explicar su propósito (Resta 4 puntos sobre 18):**
    * Cada una de las 5 políticas explícitas debe tener una **regla operativa verificable** (ej. criterio de salida de columna, límite de WIP, regla de *swarming* ante bloqueos) seguida de **`Propósito: ...`**.

---

## 2. Receta Algorítmica Paso a Paso para el Examen Práctico (50 Puntos)

### Paso 1: Cómo Construir la Tabla de Clases de Equivalencia (20 Puntos) en 20 Minutos

1. **Barrido de Entradas:** Leé los *Criterios de Aceptación* y las *Pruebas de Usuario* de la tarjeta de la US y hacé una lista de todas las entradas.
   * **Entrada #0 (Siempre primera):** `Usuario logueado`.
   * **Entradas de Selección / Combo / Radio:** (ej. *Categoría*, *Estado*, *Actividad*, *Forma de pago*, *Formato de exportación*).
   * **Entradas de Texto:** (ej. *Nombre*, *Título*, *Descripción*, *Comentario*).
   * **Entradas Numéricas:** (ej. *Cantidad*, *Precio*, *Edad*, *DNI*, *Porcentaje*).
   * **Entradas de Fecha / Hora:** (ej. *Fecha de visita*, *Fecha Desde*, *Fecha Hasta*, *Horario*).
   * **Entradas de Archivos:** Desglosalas en **3 condiciones externas separadas**: 1) *Cantidad de archivos*, 2) *Formato/Extensión del archivo*, 3) *Peso/Tamaño de cada archivo*.
   * **Entradas de Estado de Dispositivo/Entorno** (si aplica): (ej. *Sistema de ubicación GPS habilitado*, *Conexión a internet*).
2. **Completar Clases Válidas e Inválidas de Entrada con el Checklist Anti-Olvidos:**
   * ¿Es obligatorio? $\to$ Agregá `No ingresa <campo>` en **Inválidas**.
   * ¿Es opcional? $\to$ Agregá `No ingresa <campo>` en **Válidas**.
   * ¿Tiene formato o tipo numérico/fecha? $\to$ Agregá `Ingresa formato no numérico / inválido` en **Inválidas**.
   * ¿Tiene límite inferior $a$? $\to$ Agregá `Valor < a` en **Inválidas**.
   * ¿Tiene límite superior $b$? $\to$ Agregá `Valor > b` en **Inválidas**.
   * ¿Depende de otro campo? $\to$ Abrí las clases especificando `... cuando <Otro Campo> es X`.
3. **Barrido de Salidas (Subtítulo: `CLASES DE EQUIVALENCIA DE SALIDA`):**
   * Preguntate: *"Cuando el usuario aprieta el botón final, ¿qué cosas cambian o se muestran?"* y creá una fila por cada una:
     1. **Estado/Creación de la Entidad** (Válida: se crea/actualiza en estado X | Inválida: no se crea/actualiza).
     2. **Cada Campo Calculado o Dato Visualizado en Pantalla** (ej. *Monto total*, *Color del ícono*, *Datos del pasajero*, *Listado de resultados*).
     3. **Archivo o Email Generado** (ej. *Archivo Excel `.xlsx`*, *Email de confirmación*).
     4. **Mensajes del Sistema** (Válida: *Mensaje de confirmación o mensaje informativo de búsqueda vacía* | Inválidas: *Un mensaje de error específico por cada regla de validación que puede fallar*).
4. **Numeración Final:** Poné los números correlativos $1, 2, 3, \dots, N$ sin saltearte ninguno.

---

### Paso 2: Cómo Construir los 2 Casos de Prueba (30 Puntos) en 25 Minutos

1. **Identificar qué te pide exactamente cada uno de los 2 Casos de Prueba:**
   * Leé bien la consigna del Punto 2: siempre te dicen qué escenario específico quieren en el Caso 1 y en el Caso 2 (ej. *"Caso 1: Artículo Usado que pasa; Caso 2: Artículo Nuevo que pasa"*, o *"Caso 1: Exportación a Excel con datos; Caso 2: Período sin datos"*).
2. **Columna `Prioridad`:**
   * Si es un flujo principal feliz (*Happy Path* / Pasa) o una validación crítica $\to$ **`Alta`**.
   * Si es un flujo alternativo sin datos o validación secundaria $\to$ **`Media`**.
   * Si es un filtro o error menor $\to$ **`Baja`**.
3. **Columna `Nombre del Caso de Prueba`:**
   * Nombre descriptivo y claro de lo que prueba el caso (ej. `"Publicar producto usado con valores límite máximos"`).
4. **Columna `Precondiciones` (La Foto Previa de la Base de Datos):**
   * Escribí siempre estos 3 bloques con datos inventados concretos:
     * **Bloque 1 (Usuario):** `El usuario "pedro.gomez@mail.com" se encuentra logueado en el sistema y posee permisos de <Rol>.`
     * **Bloque 2 (Datos Maestros):** `Se encuentran registrados y activos en el sistema los <Barrios / Categorías / Actividades / ONGs>: "X", "Y", "Z".` (Si hay reglas de fecha actual, declarala acá: `La fecha actual del sistema es 31/10/2026`).
     * **Bloque 3 (Datos Transaccionales previos si es una consulta/listado):** Si la US consulta o filtra cosas (como *Ver mapa de taxis* o *Generar rendición*), **declará exactamente qué objetos existen hoy en la base de datos con sus atributos completos** para que luego aparezcan en el Resultado Esperado.
5. **Columna `Pasos` (Con Valores Límite Explícitos):**
   * Paso 1: `1. El <Rol> selecciona la opción "<Nombre de la pantalla / US>".`
   * Pasos intermedios: `2. El <Rol> ingresa en el campo <Campo> el valor "<Valor Concreto en el Límite>"...`
   * Último Paso: `N. El <Rol> selecciona el botón "<Confirmar / Publicar / Mostrar / Generar>".`
6. **Columna `Resultado Esperado`:**
   * Detallá punto por punto:
     * Qué objeto se creó/modificó o qué archivo se descargó.
     * Qué datos exactos e importes calculados se ven en pantalla (coincidentes 100% con tus Precondiciones y Pasos).
     * Qué mensaje literal muestra el sistema.
     * Entre paréntesis al final: `(Clases de equivalencia cubiertas: 1, 4, 7, 10, ...)`.

---

## 3. Golden TemplatesAdicionales de la Guía Oficial 2026

*(Nota: Los Golden Templates 1 y 2 correspondientes a los Parciales 2025 Tema A y Tema B de **Cambalache Solidario** —tanto de Kanban como de Testing Caja Negra— se encuentran completos en `Temario_Completo_Desarrollado_P2.md`. Aquí sumamos además los Golden Templates 3 y 4 de **Taxi Mobile** y **EcoHarmony Park**).*

---

### Golden Template 3: *Taxi Mobile* — US: `Ver mapa de taxis` (Práctico 9 Oficial)

* **Historia de Usuario:** *Como Administrador de la Central quiero ver la ubicación de todos los taxis de la central y si tienen viajes en curso para saber la disponibilidad actual.*
* **Criterios de Aceptación:**
  * Se muestran taxis en todos los estados (`Verde: Libre`, `Amarillo: Solicitado`, `Rojo: Ocupado`, `Negro: Fuera de Servicio`).
  * Los taxis que se mostrarán deben tener habilitado el sistema de ubicación.
  * Pasando el mouse sobre el ícono del auto deben visualizarse los datos del viaje si está `Ocupado` (`hora de inicio` y `costo`) y los datos del pasajero (`nombre, apellido` y `celular`).
  * Si el taxi está `Solicitado`, sólo se visualizarán los datos del pasajero.
  * Podrán utilizarse filtros por `Barrio`, por `Estado` y por `Chapa del taxi`.

#### Tabla de Clases de Equivalencia Oficial (Taxi Mobile)

| Condición Externa | N° | Clases de Equivalencia Válidas | N° | Clases de Equivalencia Inválidas |
| :--- | :-: | :--- | :-: | :--- |
| **CLASES DE EQUIVALENCIA DE ENTRADA** | | | | |
| **Barrio** | 1 | Barrio existente | 2 | Barrio inexistente |
| **Estado del taxi** | 3 | Libre | 7 | Cualquier estado distinto de los válidos |
| | 4 | Solicitado | | |
| | 5 | Ocupado | | |
| | 6 | Fuera de servicio | | |
| **Chapa del taxi** | 8 | Matrícula de taxi formato viejo (3 letras + 3 números) | 10 | Cualquier otra combinación de números y letras que no corresponda a matrícula válida |
| | 9 | Matrícula de taxi Mercosur (2 letras + 3 números + 2 letras) | | |
| **Usuario logueado** | 11 | Usuario con perfil de Administrador de la Central | 12 | Usuario no logueado |
| | | | 13 | Cualquier usuario con perfil distinto a Administrador de la Central |
| **Sistema de ubicación** | 14 | Sistema de ubicación habilitado | 15 | Sistema de ubicación no habilitado |
| **CLASES DE EQUIVALENCIA DE SALIDA** | | | | |
| **Identificador del estado del taxi** | 16 | Ícono de auto en color Verde, Amarillo, Rojo o Negro según estado | 17 | `"Taxi no conectado al Sistema de Ubicación"` |
| **Identificador del pasajero** | 18 | Nombre y Apellido, Celular | 19 | `"Error, no es posible mostrar los datos del pasajero"` |
| **Hora inicio del viaje** | 20 | `hh:mm dd/mm/yyyy` correspondiente a una fecha-hora $\le$ actual | 21 | `"Error, no es posible mostrar el inicio del viaje"` |
| **Costo del viaje** | 22 | Precio decimal mayor a cero ($> 0$) | 23 | `"Error, no es posible mostrar el costo del viaje"` |
| **Identificador del taxi** | 24 | Matrícula del Taxi | 25 | `"Taxi no conectado al Sistema de Ubicación"` |
| **Mensaje de búsqueda de taxi** | 26 | *(Visualización normal del mapa)* | 27 | `"Barrio Inexistente"` |

---

### Golden Template 4: *EcoHarmony Park* — US: `Comprar entradas` (Resolución Completa de Cátedra)

> [!TIP]
> En el PDF de prácticos resueltos de la cátedra (página 65), el Práctico 9 tenía un comentario al margen que decía *"Falta agregar las clases de comprar entradas"*. ¡Es un candidato altísimo a aparecer en el parcial o recuperatorio! Acá tenés la resolución 10/10 lista para usar.

#### Contexto de la User Story (`Comprar entradas` - EcoHarmony Park)
* **Historia:** *Como Visitante quiero comprar una entrada para asegurar mi visita al parque.*
* **Criterios de Aceptación:**
  * Se debe permitir la compra de entradas **solo a usuarios registrados y logueados con rol Visitante**.
  * Debe indicar la **Fecha de visita deseada** (`dd/mm/aaaa`), que puede ser del día actual o futuro (hasta 30 días), y debe ser en los días en que el parque está abierto (el parque abre de **martes a domingo**; cierra los **lunes y días festivos**).
  * Debe ingresar la **Cantidad de entradas requeridas** (número entero entre **1 y 10**).
  * Por cada entrada debe indicar la **Edad de cada visitante** (entero entre **0 y 110 años**) y el **Tipo de pase** (`"Regular"` o `"VIP"`).
  * Debe seleccionar la **Forma de pago**: `"Efectivo"` (pago en boletería) o `"Tarjeta"` (redirige a la pasarela de **Mercado Pago**).
  * El sistema debe mostrar el **Monto total calculado**, enviar un **email de confirmación** y mostrar en pantalla la confirmación con la **cantidad de entradas compradas y la fecha**.

#### 1. Tabla de Clases de Equivalencia Completa (`Comprar entradas`)

| Condición Externa | N° | Clases de Equivalencia Válidas | N° | Clases de Equivalencia Inválidas |
| :--- | :-: | :--- | :-: | :--- |
| **CLASES DE EQUIVALENCIA DE ENTRADA** | | | | |
| **Usuario logueado** | 1 | Usuario registrado y logueado con permisos de Visitante | 2 | Usuario no logueado |
| | | | 3 | Usuario logueado con rol distinto a Visitante |
| **Fecha de visita** | 4 | Fecha en formato `dd/mm/aaaa` tal que $\text{Fecha Actual} \le \text{Fecha Visita} \le \text{Fecha Actual} + 30\text{ días}$, correspondiente a un día de Martes a Domingo no festivo | 5 | No selecciona / no ingresa fecha de visita |
| | | | 6 | Fecha con formato inválido (distinto de `dd/mm/aaaa`) |
| | | | 7 | Selecciona fecha anterior a la fecha actual ($\text{Fecha} < \text{Actual}$) |
| | | | 8 | Selecciona fecha posterior a 30 días ($\text{Fecha} > \text{Actual} + 30\text{ días}$) |
| | | | 9 | Selecciona un día Lunes (parque cerrado) |
| | | | 10 | Selecciona un día Festivo (parque cerrado) |
| **Cantidad de entradas** | 11 | Número entero tal que $1 \le \text{Cantidad} \le 10$ | 12 | No ingresa cantidad de entradas (vacío) |
| | | | 13 | Ingresa valor no numérico o decimal (no entero) |
| | | | 14 | Ingresa cantidad $< 1$ (ej. $\le 0$) |
| | | | 15 | Ingresa cantidad $> 10$ (ej. $\ge 11$) |
| **Edad de cada visitante** | 16 | Por cada entrada, ingresa edad entera tal que $0 \le \text{Edad} \le 110$ años | 17 | No ingresa la edad de al menos un visitante |
| | | | 18 | Ingresa edad en formato no numérico o no entero |
| | | | 19 | Ingresa edad $< 0$ |
| | | | 20 | Ingresa edad $> 110$ |
| **Tipo de pase** | 21 | Selecciona tipo de pase `"Regular"` | 23 | No selecciona tipo de pase para al menos una entrada |
| | 22 | Selecciona tipo de pase `"VIP"` | 24 | Cualquier tipo de pase distinto de `"Regular"` y `"VIP"` |
| **Forma de pago** | 25 | Selecciona `"Efectivo"` (pago en boletería) | 27 | No selecciona forma de pago |
| | 26 | Selecciona `"Tarjeta"` (Mercado Pago) | 28 | Cualquier forma de pago distinta de `"Efectivo"` y `"Tarjeta"` |
| **CLASES DE EQUIVALENCIA DE SALIDA** | | | | |
| **Monto Total Calculado** | 29 | Monto total numérico mayor a cero acorde a las edades y tipos de pase seleccionados | 30 | Error al calcular el monto total de la compra |
| **Redirección Pasarela de Pago** | 31 | Redirección exitosa a Mercado Pago (cuando Forma de pago = `"Tarjeta"`) | 33 | `"Error al intentar redirigir a Mercado Pago"` |
| | 32 | Sin redirección externa (cuando Forma de pago = `"Efectivo"`) | | |
| **Mensaje de Confirmación en Pantalla** | 34 | `"Compra generada con éxito: Fecha: dd/mm/aaaa \| Cantidad de entradas compradas: X"` | 35 | `"No se ha seleccionado un tipo de pago. Por favor seleccione uno"` |
| | | | 36 | `"El parque está cerrado en la fecha seleccionada"` |
| | | | 37 | `"La cantidad de entradas debe ser un número entero entre 1 y 10"` |
| | | | 38 | `"La edad ingresada no es válida"` |
| **Email de Confirmación** | 39 | Se envía correo electrónico al mail del visitante con fecha, cantidad de entradas, tipo de pase, monto total y forma de pago | 40 | `"Error al intentar generar el mail"` / No se envía correo |

#### 2. Matriz de Casos de Prueba con Valores Límite (`Comprar entradas`)

| ID | Prioridad | Nombre del Caso de Prueba | Precondiciones | Pasos | Resultado Esperado |
| :-: | :-: | :--- | :--- | :--- | :--- |
| **1** | **Alta** | Comprar 1 entrada en el día actual pagando con Tarjeta (Valores límite inferiores) | • El usuario `"nico.lopez@gmail.com"` se encuentra registrado y logueado con permisos de **Visitante**.<br>• La fecha actual del sistema es **Sábado `31/10/2026`** (día hábil de apertura del parque, no festivo).<br>• El precio vigente de la entrada Regular para mayores de 18 años es de `\$10.000`.<br>• El servicio de pasarela de Mercado Pago se encuentra activo y conectado. | 1. El Visitante selecciona la opción `"Comprar entradas"`.<br>2. El Visitante ingresa como Fecha de visita **`"31/10/2026"`** *(valor límite mín.: Fecha Actual)*.<br>3. El Visitante ingresa como Cantidad de entradas **`"1"`** *(valor límite mín.: 1 entrada)*.<br>4. El Visitante ingresa como Edad del visitante **`"0"`** *(o `"110"`, valor límite de edad)* y selecciona Tipo de pase **`"Regular"`**.<br>5. El Visitante selecciona Forma de pago **`"Tarjeta"`**.<br>6. El Visitante selecciona el botón `"Confirmar compra"`. | • El sistema calcula y muestra el Monto Total de `\$10.000`.<br>• El sistema redirige exitosamente al usuario a la pasarela de **Mercado Pago**.<br>• El sistema registra la compra y muestra en pantalla: **`"Compra generada con éxito: Fecha: 31/10/2026 \| Cantidad de entradas compradas: 1"`**.<br>• El sistema envía un email a `"nico.lopez@gmail.com"` con el texto: `"Compra de entradas verificada! Se ha comprado una entrada de tipo Regular para el día 31/10/2026. El costo total es de $10.000. El monto ya se ha cobrado a través de su tarjeta. Los esperamos!"`.<br>*(Clases cubiertas: 1, 4, 11, 16, 21, 26, 29, 31, 34, 39)*. |
| **2** | **Alta** | Intentar comprar 11 entradas superando el límite máximo permitido (Caso que Falla) | • El usuario `"nico.lopez@gmail.com"` se encuentra registrado y logueado con permisos de **Visitante**.<br>• La fecha actual del sistema es **Sábado `31/10/2026`**.<br>• El día Domingo `01/11/2026` el parque se encuentra abierto. | 1. El Visitante selecciona la opción `"Comprar entradas"`.<br>2. El Visitante ingresa como Fecha de visita **`"01/11/2026"`**.<br>3. El Visitante ingresa como Cantidad de entradas **`"11"`** *(valor límite inválido superior: $10 + 1$)*.<br>4. El Visitante selecciona Forma de pago **`"Efectivo"`**.<br>5. El Visitante selecciona el botón `"Confirmar compra"`. | • El sistema rechaza la operación y no registra la compra.<br>• El sistema muestra el mensaje de error: **`"La cantidad de entradas debe ser un número entero entre 1 y 10"`**.<br>• No se genera ni envía email de confirmación.<br>*(Clases cubiertas: 1, 4, 15, 25, 37, 40)*. |


---

# 6. Hallazgos Forenses de los Nuevos Parciales Reales (`Fórmula 1`, `Club Deportivo`, `Draft NBA` y Guía de TPs Cátedra)

Al auditar los parciales adicionales corregidos por la cátedra (`13/06/2025 Fórmula 1 Tema A y B`, `29/11/2025 Recuperatorio Club Deportivo`, `18/06/2024 Draft NBA Nota 8 [29/30 en CPs]`) y las soluciones oficiales de los Prácticos 9 y 10 de la Guía de TPs, aparecen **7 reglas de corrección letales** que tenés que dominar:

### 🚨 Las 7 Reglas de Birome Roja / Rosa / Violeta de los Profes

1. **PROHIBIDO UNIFICAR RANGOS DEPENDIENTES (`"¡No se unifican!"`)**:
   - **Caso Draft NBA (`Enviar oferta a jugador`)**: Si es *Novato Universitario*, el monto oscila entre `20 y 25 millones`; si es *Novato de Liga*, oscila entre `21 y 26 millones`. El alumno puso una sola clase válida `20.000.000 <= monto <= 26.000.000` y la profe le tachó todo en violeta escribiendo: **`"¡No se unifican! -> Monto para novato universitario / Monto para novato de liga"`**.
   - **Caso Fórmula 1 (`Simular cambios de configuración`)**: Si `Ángulo de ruedas <= 0`, la `Presión de frenado` va de `20 a 50 bar`; si `Ángulo de ruedas > 0`, va de `51 a 100 bar`.
   - **Regla de Oro**: Siempre que un rango dependa de otro campo o tipo, creá **dos condiciones externas separadas** (o dos clases válidas explícitamente condicionadas como en el TP 10 de la cátedra) con sus respectivos límites inferiores y superiores inválidos por separado.

2. **COMBOS / LISTADOS SELECCIONABLES vs. CAMPOS DE TEXTO (`"Selecciona / No selecciona"`)**:
   - Si el criterio de aceptación dice *"Se debe mostrar un listado... debe **seleccionar** un jugador"* o *"Debe **seleccionar** los años de duración (1 o 2)"*, **NO pongas como clase inválida `"Ingresa caracteres no numéricos"` ni `"Ingresa número distinto de 1 y 2"`** (la profe lo tachó en Draft NBA). En un combo desplegable el usuario no tipea texto libre: la clase válida es **`Selecciona [opción válida]`** y la clase inválida es **`No selecciona [campo]`** (o selecciona un ítem que incumple una regla de negocio del dominio, ej. *Selecciona carrera en curso* o *Selecciona actividad sin cupo*).

3. **CAMPOS CONDICIONALES OBLIGATORIOS SEGÚN REGLA DE NEGOCIO (Patrón Oficial Guía TP 10 - `Talla de vestimenta` / `DNI Tutor`)**:
   - Cuando un dato solo se pide bajo cierta condición (ej. *Talla de vestimenta si la actividad lo demanda*, o *DNI de padre/madre/tutor si el hincha es menor de 18 años*):
     - **Clase Válida 1**: Ingresa/selecciona valor válido **y la condición lo requiere** *(ej. Ingresa DNI tutor válido siendo menor de 18 años)*.
     - **Clase Válida 2**: **No ingresa/selecciona valor y la condición NO lo requiere** *(ej. No ingresa DNI tutor siendo mayor o igual a 18 años)*.
     - **Clase Inválida 1**: **No ingresa/selecciona valor y la condición SÍ lo requiere** *(ej. No ingresa DNI tutor siendo menor de 18 años)*.
     - **Clase Inválida 2**: Ingresa valor con formato inválido / no numérico / fuera de rango cuando la condición lo requiere.

4. **PROHIBIDO LISTAR CLASES MUTUAMENTE EXCLUYENTES EN UN MISMO CASO DE PRUEBA (`"Mutuamente excluyentes"`)**:
   - En el Recuperatorio del Club Deportivo, el alumno puso en `Clases de Equivalencia cubiertas: 1, 4, 7, 14, 15...` donde `14` era *Mayor de edad* y `15` era *Menor de edad*, y al final incluyó clases de salida de error en un caso exitoso. La profe se lo circuló en rosa: **`"Mutuamente excluyentes"`**.
   - **Chequeo obligatorio antes de entregar**: En la celda `Clases de Equivalencia` de cada Caso de Prueba, verificá que haya **exactamente 1 sola clase por cada Condición Externa de entrada** y que las clases de salida listadas correspondan únicamente al resultado de ese caso (éxito o el error específico probado).

5. **EN LA COLUMNA `PASOS` SOLO ACTÚA EL USUARIO (`"En Pasos puso acciones del Sistema -> Resultado"`)**:
   - En el Recuperatorio del Club Deportivo, el alumno escribió: *"Paso 10: El sistema valida las fotos y si el rostro coincide con el DNI"*. La profe lo encerró en rosa y sacó una flecha hacia la derecha escribiendo **`"Resultado"`**.
   - **Regla de Oro**: Todos los pasos empiezan con `1. El [Rol] selecciona...`, `2. El [Rol] ingresa...`. El último paso SIEMPRE es `n. El [Rol] selecciona el botón "Confirmar / Generar / Guardar"`. Todo lo que el sistema hace, valida, muestra o envía va en **`Resultado esperado`**.

6. **PRECONDICIONES CON DATOS CONCRETOS COMPLETOS PARA PODER VERIFICAR EL REPORTE/SALIDA (`"¿Pilotos de escudería? ¿Información de la carrera?"`)**:
   - En Fórmula 1 Tema B (`Generar reporte post carrera`), el alumno puso en Precondiciones: *"Carrera Copa Pistón cargada y finalizada. Escudería Puma cargada"*. La profe le escribió en grande con birome rosa: **`"¿Pilotos de escudería? ¿Información de la carrera?"`** y en Resultado Esperado le puso: **`"No muestra el reporte resultante"`**.
   - **Por qué**: Si el Caso de Prueba pide generar un reporte de una escudería o una rendición de un mes, en **Precondiciones** tenés que inventar y dejar explícitos los datos cargados en la base de datos (ej. *La escudería `"Ferrari"` tiene registrados a los pilotos `"Charles Leclerc"` (Puesto 1, S1: 28s, Estrategia: 1 parada) y `"Carlos Sainz"` (Puesto 3, S1: 29s, Estrategia: 2 paradas) en el GP `"Mónaco 2025"`*), y en **Resultado Esperado** tenés que decir que el sistema muestra en pantalla / PDF el reporte con **esos valores exactos**! (Mirá cómo lo hace la cátedra en la página 59 de la Guía de TPs para el taxi `IXT 689`: pone en Precondiciones `"14/10 16:10 horas, costo $48, Mariana Perez cel 3513455777"` y en Resultado Esperado repite exactamente esos mismos datos).

7. **NUEVA PREGUNTA TEÓRICA DE DESARROLLO (15 PUNTOS): DISEÑAR UN CHECKLIST DE REVISIÓN TÉCNICA (Fagan)**:
   - En el Segundo Parcial del 13/06/2025 (Tema A y Tema B), además del Tablero Kanban (15 pts), tomaron una pregunta abierta de **15 puntos**:
     - **Tema A**: *"Diseñe un checklist con al menos 5 preguntas, que se pueda utilizar para realizar revisiones técnicas a los casos de prueba."*
     - **Tema B**: *"Diseñe un checklist con al menos 5 preguntas, que se pueda utilizar para realizar revisiones técnicas a la arquitectura."*
   - **Criterio de corrección de la cátedra**: Si te piden un checklist para un artefacto $X$, **las 5 preguntas deben ser específicas sobre defectos técnicos de ese artefacto $X$** (no pongas preguntas genéricas de gestión de proyectos ni de código si estás revisando arquitectura o casos de prueba).

---

## 🛠️ Plantillas Blindadas de Checklists de Revisión Técnica (15 Puntos en Teórico)

Si el sábado te piden *"Diseñe un checklist con al menos 5 preguntas para realizar una revisión técnica (Inspección) de..."*, copiá estas preguntas exactas (validadas con `√` por los profes):

### Opción A: Checklist para Revisión Técnica de CASOS DE PRUEBA (Validado 13/06/2025 Tema A)
1. **¿Están claramente definidas todas las precondiciones necesarias** (usuarios logueados, estado previo de la base de datos y servicios externos) para poder ejecutar el caso de prueba?
2. **¿Los pasos del caso de prueba utilizan valores concretos y específicos** en lugar de descripciones abstractas o rangos genéricos?
3. **¿Se han cubierto y referenciado correctamente las clases de equivalencia** maximizando la cobertura sin incluir clases mutuamente excluyentes en un mismo caso de prueba?
4. **¿Se ha aplicado correctamente el método de Análisis de Valores Límite (BVA)** utilizando los valores frontera exactos ($mín$, $mín-1$, $máx$, $máx+1$) en las condiciones con rangos?
5. **¿Está especificado de forma inequívoca y verificable el Resultado Esperado** (datos exactos de salida, cambios de estado o mensajes de error) para cada caso de prueba?
6. **¿Los pasos describen únicamente acciones del usuario**, separando las respuestas del sistema en la columna de Resultado Esperado?

### Opción B: Checklist para Revisión Técnica de ARQUITECTURA DE SOFTWARE (13/06/2025 Tema B)
1. **¿La arquitectura propuesta satisface todos los atributos de calidad (requisitos no funcionales)** críticos especificados en la ERS (performance, disponibilidad, seguridad, escalabilidad)?
2. **¿Están claramente definidos todos los componentes/módulos arquitectónicos y sus responsabilidades** manteniendo alta cohesión y bajo acoplamiento?
3. **¿Están especificadas de forma completa y consistente las interfaces y protocolos de comunicación** entre los componentes internos y con los servicios externos?
4. **¿El estilo o patrón arquitectónico seleccionado (ej. capas, microservicios, cliente-servidor) es consistente** con las restricciones tecnológicas y de despliegue del proyecto?
5. **¿Existen puntos únicos de fallo (SPOF) o cuellos de botella** en el flujo de datos entre los componentes de la arquitectura que comprometan la fiabilidad del sistema?

### Opción C: Checklist para Revisión Técnica de HISTORIAS DE USUARIO / REQUERIMIENTOS
1. **¿La Historia de Usuario respeta la plantilla estándar (`Como <rol> quiero <funcionalidad> para <valor de negocio>`)** identificando un rol válido del dominio?
2. **¿Los Criterios de Aceptación son completos, claros, no ambiguos y verificables** sin contradicciones entre sí?
3. **¿La Historia de Usuario cumple con los criterios INVEST** (Independiente, Negociable, Valiosa, Estimable, Small/Pequeña, Testeable)?
4. **¿Se han especificado las Pruebas de Usuario de aceptación** contemplando tanto escenarios de éxito (`Pasa`) como escenarios de rechazo (`Falla`)?
5. **¿Están contempladas todas las reglas de negocio del dominio** (validaciones de formato, rangos límite y dependencias entre datos) dentro de los criterios de aceptación?

---

# 7. Tres Modelos Reales Adicionales Resueltos Paso a Paso (`Fórmula 1`, `Draft NBA`, `Club Deportivo`)

## 🏎️ Caso Real 3: Parcial 13/06/2025 — Dominio `Fórmula 1 (F1 Multiviewer Pro)` (Tema A)
**User Story**: `Simular cambios de configuración`
> *Como ingeniero de pista quiero simular el impacto de diferentes configuraciones del monoplaza para prever su rendimiento antes de aplicarlas en pista.*
> **Criterios de aceptación:**
> - Se debe cargar un archivo PDF con los datos base del auto con tamaño máximo de **10 MB**.
> - Se deben ingresar los siguientes parámetros:
>   - **Grados de inclinación de los alerones**: valor numérico entre **0° y 60°**.
>   - **Altura del auto con respecto al piso**: valor numérico entre **50 mm y 120 mm**.
>   - **Rigidez de la suspensión**: nivel entero en una escala de **1 a 10**.
>   - **Ángulo de las ruedas**: valor numérico entre **-5° y +5°**.
>   - **Presión de frenado**: si el ángulo de las ruedas es $\le 0$, el valor debe estar entre **20 bar y 50 bar**; si el ángulo de las ruedas es $> 0$, el valor debe estar entre **51 bar y 100 bar**.
> - Cada configuración simulada debe guardarse con un **nombre identificatorio de hasta 25 caracteres**.
> - Se puede aplicar un **filtro por circuito** para ajustar los cálculos a las condiciones específicas de esa pista (opcional).
> - El sistema debe renderizar el modelo 3D con los flujos de aire en **menos de 5 segundos**.
> - Al finalizar la simulación, se enviará un **correo electrónico al ingeniero** con un resumen de los resultados obtenidos.
>
> **Consigna 2**: Defina 2 casos de prueba: **uno que pase aplicando valores límite** y **uno que falle**, maximizando clases de equivalencia.

### 1. Tabla de Clases de Equivalencia (`Simular cambios de configuración`)

| Condición Externa | Clases de Equivalencia Válidas | Clases de Equivalencia Inválidas |
| :--- | :--- | :--- |
| **1. Archivo datos base del auto** | **1.** Carga archivo en formato `.PDF` con tamaño $> 0\text{ MB}$ y $\le 10\text{ MB}$. | **2.** No carga archivo.<br>**3.** Carga archivo con formato distinto a `.PDF` (ej. `.jpg`, `.docx`).<br>**4.** Carga archivo `.PDF` con tamaño $> 10\text{ MB}$. |
| **2. Grados de inclinación de alerones** | **5.** Número decimal/entero $\ge 0$ y $\le 60$. | **6.** No ingresa grados de inclinación.<br>**7.** Ingresa caracteres no numéricos.<br>**8.** Número $< 0$.<br>**9.** Número $> 60$. |
| **3. Altura del auto (mm)** | **10.** Número decimal/entero $\ge 50$ y $\le 120$. | **11.** No ingresa altura del auto.<br>**12.** Ingresa caracteres no numéricos.<br>**13.** Número $< 50$.<br>**14.** Número $> 120$. |
| **4. Rigidez de la suspensión** | **15.** Número entero $\ge 1$ y $\le 10$. | **16.** No ingresa rigidez de suspensión.<br>**17.** Ingresa valor no numérico o decimal no entero.<br>**18.** Número entero $< 1$ ($\le 0$).<br>**19.** Número entero $> 10$ ($\ge 11$). |
| **5. Ángulo de las ruedas** | **20.** Número decimal/entero $\ge -5$ y $\le 0$ *(habilita rango frenado 20-50 bar)*.<br>**21.** Número decimal/entero $> 0$ y $\le 5$ *(habilita rango frenado 51-100 bar)*. | **22.** No ingresa ángulo de las ruedas.<br>**23.** Ingresa caracteres no numéricos.<br>**24.** Número $< -5$.<br>**25.** Número $> 5$. |
| **6. Presión de frenado (si ángulo $\le 0$)** | **26.** Número decimal/entero $\ge 20$ y $\le 50$ (con ángulo de ruedas $\in [-5, 0]$). | **27.** No ingresa presión de frenado.<br>**28.** Ingresa caracteres no numéricos.<br>**29.** Número $< 20$ (con ángulo $\le 0$).<br>**30.** Número $> 50$ (con ángulo $\le 0$). |
| **7. Presión de frenado (si ángulo $> 0$)** | **31.** Número decimal/entero $\ge 51$ y $\le 100$ (con ángulo de ruedas $\in (0, 5]$). | **32.** Número $< 51$ (con ángulo $> 0$).<br>**33.** Número $> 100$ (con ángulo $> 0$). |
| **8. Nombre identificatorio** | **34.** Cadena de caracteres de longitud $\ge 1$ y $\le 25$ caracteres. | **35.** No ingresa nombre identificatorio (vacío).<br>**36.** Cadena de caracteres de longitud $> 25$ caracteres. |
| **9. Filtro por circuito (Opcional)** | **37.** Selecciona un circuito válido cargado en el sistema.<br>**38.** No selecciona filtro por circuito. | **39.** Selecciona/ingresa un circuito inexistente. |
| **10. Usuario Logueado** | **40.** Usuario logueado con rol de Ingeniero de Pista. | **41.** Usuario no logueado.<br>**42.** Usuario logueado con otro rol (Aficionado). |
| **SALIDA: Renderizado Modelo 3D y Guardado** | **43.** El sistema guarda la configuración, renderiza el modelo 3D con flujos de aire en tiempo $< 5\text{ s}$ y muestra resumen de simulación. | **44.** Error: `"Debe cargar un archivo PDF válido de hasta 10 MB"`.<br>**45.** Error: `"Grados de inclinación debe estar entre 0 y 60"`.<br>**46.** Error: `"Altura del auto debe estar entre 50 y 120 mm"`.<br>**47.** Error: `"Rigidez de suspensión debe ser un entero entre 1 y 10"`.<br>**48.** Error: `"Ángulo de ruedas debe estar entre -5 y 5"`.<br>**49.** Error: `"Para ángulo <= 0, la presión de frenado debe estar entre 20 y 50 bar"`.<br>**50.** Error: `"Para ángulo > 0, la presión de frenado debe estar entre 51 y 100 bar"`.<br>**51.** Error: `"El nombre identificatorio es obligatorio y de hasta 25 caracteres"`.<br>**52.** Error de performance: Renderizado demora $\ge 5\text{ s}$. |
| **SALIDA: Correo electrónico al ingeniero** | **53.** El sistema envía correo electrónico al Ingeniero de Pista con el resumen de los resultados obtenidos. | **54.** No se envía correo electrónico por error en la simulación. |

### 2. Casos de Prueba (`Simular cambios de configuración`)

| ID | Prioridad | Clases de Equivalencia | Nombre del Caso de Prueba | Precondiciones | Pasos | Resultado Esperado |
| :-: | :-: | :--- | :--- | :--- | :--- | :--- |
| **01** | **Alta** | `1, 5, 10, 15, 20, 26, 34, 37, 40, 43, 53` | Simular configuración exitosa aplicando valores límite con ángulo de ruedas $\le 0$ (Pasa) | • Usuario `"adrian.newey@f1.com"` logueado con perfil de **Ingeniero de Pista**.<br>• Existe en el dispositivo del usuario el archivo `"base_rb21.pdf"` con tamaño exacto de **`10 MB`**.<br>• El circuito `"Monza"` se encuentra cargado en el sistema. | 1. El Ingeniero de Pista selecciona la opción `"Simular cambios de configuración"`.<br>2. El Ingeniero carga el archivo **`"base_rb21.pdf"`** *(10 MB, límite superior válido)*.<br>3. El Ingeniero ingresa Grados de inclinación de alerones **`"0"`** *(límite inferior válido)*.<br>4. El Ingeniero ingresa Altura del auto **`"120"`** *(límite superior válido)*.<br>5. El Ingeniero ingresa Rigidez de suspensión **`"1"`** *(límite inferior válido)*.<br>6. El Ingeniero ingresa Ángulo de ruedas **`"-5"`** *(límite inferior válido $\le 0$)*.<br>7. El Ingeniero ingresa Presión de frenado **`"50"`** *(límite superior válido para ángulo $\le 0$)*.<br>8. El Ingeniero ingresa Nombre identificatorio **`"Configuracion_Monza_2025A"`** *(exactamente 25 caracteres, límite superior válido)*.<br>9. El Ingeniero selecciona el filtro por circuito **`"Monza"`**.<br>10. El Ingeniero selecciona el botón `"Simular"`. | • El sistema guarda la configuración `"Configuracion_Monza_2025A"` ajustada al circuito `"Monza"`.<br>• El sistema renderiza por pantalla el modelo 3D con los flujos de aire en menos de 5 segundos.<br>• El sistema envía un correo electrónico a `"adrian.newey@f1.com"` con el resumen de los resultados obtenidos para `"Configuracion_Monza_2025A"`. |
| **02** | **Alta** | `1, 5, 10, 15, 21, 33, 34, 38, 40, 50, 54` | Simular configuración fallida por presión de frenado superior al límite con ángulo $> 0$ (Falla) | • Usuario `"adrian.newey@f1.com"` logueado con perfil de **Ingeniero de Pista**.<br>• Existe en el dispositivo del usuario el archivo `"base_rb21.pdf"` de `5 MB`. | 1. El Ingeniero de Pista selecciona la opción `"Simular cambios de configuración"`.<br>2. El Ingeniero carga el archivo **`"base_rb21.pdf"`**.<br>3. El Ingeniero ingresa Grados de inclinación de alerones **`"30"`**.<br>4. El Ingeniero ingresa Altura del auto **`"80"`**.<br>5. El Ingeniero ingresa Rigidez de suspensión **`"5"`**.<br>6. El Ingeniero ingresa Ángulo de ruedas **`"5"`** *(valor límite superior $> 0$)*.<br>7. El Ingeniero ingresa Presión de frenado **`"101"`** *(valor límite inválido superior: $100 + 1$)*.<br>8. El Ingeniero ingresa Nombre identificatorio **`"Config_Test_Falla"`**.<br>9. El Ingeniero no selecciona filtro por circuito.<br>10. El Ingeniero selecciona el botón `"Simular"`. | • El sistema rechaza la simulación y muestra el mensaje de error: **`"Para un ángulo de ruedas mayor a 0, la presión de frenado debe estar entre 51 y 100 bar"`**.<br>• No se renderiza el modelo 3D ni se envía el correo electrónico. |

---

## 🏀 Caso Real 4: Parcial 18/06/2024 — Dominio `Draft NBA` (Tema B — Nota 29/30 en CPs)
**User Story**: `Enviar oferta a jugador`
> *Como Entrenador quiero enviar una oferta a un jugador para que comience a jugar en mi equipo.*
> **Criterios de aceptación:**
> - Se debe mostrar un listado con todos los jugadores sin ofertas pendientes, con su nombre, apellido, posición y país de origen. El entrenador debe seleccionar un jugador para enviarle la oferta.
> - Debe ingresar un **tiempo límite de validez de la oferta entre 24 y 48 hs**.
> - Debe seleccionar los **años de duración del contrato, entre 1 y 2 años**.
> - En caso de ser un **jugador novato universitario** (19 años y proviene de universidad), validar que el **monto a percibir ingresado oscile entre los 20 y 25 millones de dólares anuales**.
> - En caso de ser un **jugador novato de liga** (entre 19 y 22 años y proviene de liga profesional), validar que el **monto a percibir ingresado oscile entre los 21 y 26 millones de dólares anuales**.
> - Debe enviar un mail al jugador con la fecha de validez de la oferta, año/s duración del contrato y el monto anual a percibir.

### Mirá cómo se arma el Caso de Prueba que sacó 29/30 en este parcial (corregido con `√` en todas las celdas):
- **Nombre del CP**: `Enviar oferta a jugador universitario estadounidense exitoso`
- **Prioridad**: `Alta`
- **Clases de Equivalencia**: `1, 4, 8, 12, 16, 17` *(1 sola clase por condición externa)*
- **Precondiciones**:
  - Usuario `" Gregg Popovich "` logueado con rol de **Entrenador**.
  - Jugador **`"Tom Cruise"`**, estadounidense, **sin ofertas pendientes**, de **19 años**, con **1 año en una universidad** *(Novato Universitario)*, sin contratos firmados fuera de EE.UU., con mail **`"tomicruise@gmail.com"`**, posición **`"Pivot"`**, cargado en el sistema.
  - Años del contrato (`1` y `2`) cargados en el sistema.
  - Fecha actual del sistema: `18/06/2024`.
- **Pasos**:
  1. El Entrenador selecciona la opción `"Enviar oferta a jugador"`.
  2. El Entrenador selecciona el jugador **`"Tom Cruise"`**.
  3. El Entrenador ingresa el Tiempo límite de validez de la oferta **`"48"`** hs *(valor límite superior válido)*.
  4. El Entrenador selecciona los años de duración del contrato **`"1"`** *(valor límite inferior válido)*.
  5. El Entrenador ingresa el monto a percibir **`"20.000.000"`** *(valor límite inferior válido para novato universitario)*.
  6. El Entrenador selecciona la opción `"Confirmar"`.
- **Resultado esperado**:
  - En el paso 1: El sistema muestra la **lista completa** de los jugadores sin ofertas pendientes, incluyendo a `"Tom Cruise"`, `"Pivot"`, `"Estados Unidos"`.
  - En el paso 6: El sistema registra la oferta del jugador `"Tom Cruise"` y envía un mail a **`"tomicruise@gmail.com"`** con la fecha de validez **`20/06/2024`** *(48 hs desde el 18/06/2024)*, **`1 año`** de duración del contrato y monto anual a percibir de **`USD 20.000.000`**.

---

## ⚽ Caso Real 5: Recuperatorio 29/11/2025 — Dominio `Club Deportivo / Socios`
**User Story**: `Registrar solicitud de adhesión`
> *Como Hincha quiero registrar mi solicitud de adhesión para ser socio del Club.*
> **Criterios de aceptación:**
> - Debe ingresar: **nombre, apellido, número de DNI y fecha de nacimiento**. En caso de ser **menor de edad ($< 18$ años)**, se solicita además el **DNI del padre, madre o tutor**.
> - Debe ingresar el **número de celular sin el 0 y sin el 15**, y su **dirección de mail**.
> - Debe subir **3 fotos**: una de su **rostro**, una del **frente del DNI** y otra del **dorso del DNI**, todas con la **nitidez y el tamaño requerido**.
> - El sistema valida a través de un **servicio de validación de fotos** que las 3 imágenes correspondan a lo solicitado y que el rostro coincida con la foto del DNI.
> - Si la validación es exitosa, se registra la solicitud en estado **`"Pendiente de aprobación"`** y se muestra mensaje de éxito.

### Las claves para el 10/10 en `Registrar solicitud de adhesión`:
1. **Desglosar las 3 fotos y sus validaciones**:
   - No metas las 3 fotos en una sola clase vaga. Condiciones externas:
     - `DNI del Padre/Madre/Tutor`:
       - Válida A: Ingresa DNI numérico válido de 7 u 8 dígitos (siendo menor de 18 años).
       - Válida B: No ingresa DNI de tutor (siendo mayor o igual a 18 años).
       - Inválida: No ingresa DNI de tutor siendo menor de 18 años / Ingresa formato no numérico.
     - `Foto Rostro`, `Foto Frente DNI`, `Foto Dorso DNI`:
       - Válida: Sube las 3 fotos en el orden correspondiente, con nitidez válida, tamaño dentro del límite permitido, y el rostro coincide con el frente del DNI.
       - Inválidas: No sube alguna de las 3 fotos / Sube foto no nítida (borrosa) / Sube foto que supera el tamaño máximo / Sube fotos en orden invertido (ej. dorso donde va frente) / El rostro no coincide con la foto del DNI según el servicio.
     - `Servicio externo de validación biométrica`:
       - Válida: Servicio de validación activo/disponible.
       - Inválida: Servicio de validación caído/no disponible.
2. **Precondiciones del Caso de Prueba**:
   - Las 3 fotos (`"rostro_juan.png"`, `"dni_frente_juan.png"`, `"dni_dorso_juan.png"`, nítidas, de `500 KB`, correspondientes a la misma persona) **están almacenadas en el dispositivo del Hincha** (¡NUNCA pongas que ya están cargadas en el sistema si el Hincha las sube en el Paso 8!).
   - El **Servicio de validación de fotos** se encuentra activo y funcionando.
   - La **fecha actual del sistema** es `29/11/2025` (indispensable para calcular con exactitud el Valor Límite de 18 años con la Fecha de Nacimiento: ej. nació el `29/11/2007` = exactamente 18 años hoy [Mayor de edad límite], o nació el `30/11/2007` = 17 años y 364 días [Menor de edad límite]).

---

# 8. Respuestas Modelo a las 5 Preguntas Teóricas Abiertas del Parcial 2024 (`Draft NBA`)

Por si el sábado incluyen preguntas teóricas a desarrollar como en 2024:

1. **Pregunta 3.a (Scrum Daily Meeting)**: *"Juan como Scrum Master es invitado a una Daily a las 9 am. Durante la reunión el equipo completo comienza una discusión profunda y finalmente comienzan a culparse entre ellos. ¿Qué debería hacer Juan?"*
   - **Respuesta 10/10**: Como Scrum Master (líder servicial y guardián del marco Scrum), Juan debe **intervenir inmediatamente** para:
     1. **Cortar el debate profundo en la Daily**: Recordar que la Daily Scrum tiene un **time-box estricto de 15 minutos** y su único propósito es inspeccionar el progreso hacia el Objetivo del Sprint y adaptar el Sprint Backlog para las próximas 24 horas, **no resolver problemas técnicos complejos en vivo** (eso se lleva a una reunión posterior pos-Daily solo con los involucrados).
     2. **Frenar la cultura de culpa**: Recordar los valores de Scrum (**Respeto, Coraje, Apertura**) y la responsabilidad compartida del equipo autoorganizado (no hay culpables individuales). Si el conflicto interpersonal persiste, debe abordarlo y facilitarlo en la **Sprint Retrospective** buscando causas raíz en el proceso y no en las personas.

2. **Pregunta 3.b (Sprint Review sin build oficial)**: *"Al final del Sprint, en la Sprint Review, el equipo explica que tuvo un problema con un build y que la versión oficial no está disponible. En lugar de eso, preparó una demo en el ambiente de desarrollo. ¿Qué debería hacer el Product Owner?"*
   - **Respuesta 10/10**: El Product Owner **NO debe aceptar esas historias de usuario como "Terminadas" (Done)**, porque violan la **Definición de Hecho (Definition of Done - DoD)** acordada (que exige código integrado, compilado y probado en el entorno oficial/staging). En la Sprint Review solo se puede demostrar e inspeccionar un **Incremento que cumpla con la DoD**. Las US incompletas vuelven al Product Backlog para ser re-priorizadas en el próximo Sprint, y en la **Sprint Retrospective** el equipo debe analizar por qué falló la Integración Continua (build roto al final del Sprint).

3. **Pregunta 3.c (Build / Error Bloqueante)**: *"Tengo un mensaje que dice que el error es bloqueante, ¿qué significa? ¿qué puedo hacer para solucionarlo?"*
   - **Respuesta 10/10**: Un defecto o error **bloqueante (Blocker / Crítico)** significa que impide por completo continuar con la ejecución del sistema, rompe el *build* de Integración Continua (línea roja) o bloquea la ejecución de los demás casos de prueba de esa funcionalidad. **Para solucionarlo**: bajo la práctica de **Integración Continua (CI)** y filosofía Lean (*Parar la línea / Jidoka*), corregir un build roto o error bloqueante tiene **máxima prioridad inmediata** para el equipo antes de subir nuevo código: se puede **revertir el último commit** al último estado estable (*Línea Base / Green build*) o hacer un *hotfix* inmediato en equipo, correr las pruebas unitarias/regresión localmente y volver a integrar.

4. **Pregunta 3.d (Tiempo máximo Reunión de Inspección de Fagan)**: *"Si se decide realizar una revisión técnica de algunos casos de prueba, ¿cuál es el tiempo máximo aconsejable para una reunión de Inspección? Justifique."*
   - **Respuesta 10/10**: El tiempo máximo aconsejable para una reunión de Inspección técnica formal (Fagan) es de **2 horas (120 minutos)**. **Justificación**: La inspección requiere concentración mental intensiva para detectar defectos; pasadas las 2 horas aparece la **fatiga cognitiva**, cae drásticamente la tasa de detección de defectos por hora y la reunión pierde efectividad y retorno de inversión (por eso también se limita la velocidad de inspección y el tamaño del artefacto a revisar por sesión).

5. **Pregunta 3.e (CMMI - Organizaciones Inmaduras)**: *"Según CMMI, ¿cuáles son las características de organizaciones inmaduras?"*
   - **Respuesta 10/10**: En una organización **inmadura (Nivel 1 - Inicial)**:
     - Los procesos son **ad-hoc y caóticos** (se improvisan sobre la marcha por practicantes y gerentes).
     - **No hay procesos definidos ni institucionalizados** (o si están escritos, no se siguen).
     - La gestión es **reactiva ("apagar incendios")**: se resuelven crisis cuando explotan.
     - El éxito depende exclusivamente del **esfuerzo heroico individual** y no de la capacidad de la organización.
     - **Los presupuestos y cronogramas se exceden sistemáticamente** porque no existen bases históricas para estimar.
     - **Cuando hay presión de fechas, se abandona la calidad** (se recortan pruebas y revisiones para entregar rápido).
