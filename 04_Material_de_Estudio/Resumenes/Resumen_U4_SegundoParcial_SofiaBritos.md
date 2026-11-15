# Unidad 4

## Bloque 1: Conceptos Generales de Calidad en Software

El estudio de la **calidad del software** es una disciplina fundamental dentro de la ingeniería de software, orientada a definir, medir y asegurar que los sistemas entreguen valor real a las partes interesadas sin incurrir en fallas o reprocesos costosos.

### ¿Qué es Calidad en Software?

Definir la calidad en el ámbito del software resulta complejo debido a la intangibilidad del producto y a la diversidad de perspectivas de quienes interactúan con él. En términos de la ingeniería de software, la **calidad de software** se define como:

> **Definición Formal:** Un proceso eficaz de software aplicado de manera que crea un producto útil que proporciona valor medible tanto a quienes lo producen como a quienes lo utilizan.
> 

**A. Las 5 Perspectivas Multidimensionales de David Garvin**

David Garvin sostiene que la calidad no puede evaluarse desde un único prisma, sino que debe analizarse a través de cinco dimensiones conceptuales adaptables al software:

1. **Visión Trascendental (Estética):** Reconoce la calidad como una condición innata de excelencia que se percibe intuitivamente al interactuar con el producto ("se reconoce cuando se ve").
2. **Visión del Usuario:** Mide la calidad en función de qué tan bien el software se adapta a las necesidades, preferencias y contexto del usuario final (adecuación al propósito).
3. **Visión del Producto:** Se enfoca en la presencia o ausencia de atributos y características internas medibles contenidas en el sistema (ej. cantidad de funciones, rendimiento).
4. **Visión de Manufactura (del Fabricante):** Evalúa la conformidad con las especificaciones y estándares de diseño previstos, minimizando variaciones y defectos durante la construcción.
5. **Visión Basada en el Valor:** Pondera la calidad en relación con el costo e inversión que el cliente o la organización está dispuesta a pagar por el producto

**B. La Formula Intuitiva de Robert Glass y la Visión de DeMarco**

- **Fórmula de Robert Glass:** Robert Glass propone que la percepción real del éxito se resume en la ecuación: $[\text{Satisfacción del Usuario} = \text{Producto que funciona} + \text{Buena Calidad} + \text{Entrega dentro del presupuesto y plazo}]$
    
    Glass enfatiza que, aunque las métricas técnicas sean correctas, si el usuario final no queda satisfecho, el esfuerzo carece de valor.
    
- **Visión de Tom DeMarco:** Sostiene que *"la calidad de un producto está en función de cuánto cambia al mundo para bien"*, sugiriendo que los usuarios perdonan fallas menores de rendimiento si el beneficio de negocio devengado es sustancial.

### La Tríada de la Calidad del Software

Para lograr una gestión efectiva, la calidad en el desarrollo de software se organiza en tres dimensiones operativas interrelacionadas: **Calidad de Proceso, Calidad de Producto y Calidad en Uso / Proyecto**.

```
                        CALIDAD PROGRAMADA (Especificación)
                                     ▲
                                    ╱ ╲
                                   ╱   ╲
                                  ╱     ╲
                                 ╱CALIDAD╲
                                ╱ESPERADA ╲
  CALIDAD REALIZADA (Producto) ─────────────── CALIDAD NECESARIA (Usuario)
```

#### Coincidencia de Niveles de Calidad

- **Calidad Programada:** La calidad que se especifica en los modelos de requerimientos y diseño.
- **Calidad Realizada:** La calidad efectiva que se logra e implementa en el software construido.
- **Calidad Necesaria:** La calidad real que el usuario o el negocio requiere para resolver su problema .

> **Regla de Coincidencia:** La intersección justa entre la Calidad Programada, Realizada y Necesaria constituye la **Calidad Esperada**. Todo lo que quede por fuera de dicha coincidencia representa **desperdicio o insatisfacción** para el cliente.
> 

### Modelos de Calidad de Producto

Los modelos de calidad de producto proporcionan una taxonomía estructurada de atributos y factores para evaluar el comportamiento del software.

**A. Modelo de McCall:** Clasifica los factores de calidad agrupándolos en tres perspectivas principales de operación y mantenimiento:

1. **Operación del Producto:** Facilidad de uso y desempeño operativo (**Corrección, Confiabilidad, Usabilidad, Integridad y Eficiencia**).
2. **Revisión del Producto:** Capacidad del código para ser modificado o reparado (**Facilidad de Mantenimiento, Flexibilidad y Facilidad de Prueba**).
3. **Transición del Producto:** Adaptabilidad del software a nuevos entornos (**Portabilidad, Reusabilidad e Interoperabilidad**).

**B. Estándar ISO/IEC 25010 (Evolución de ISO 9126):** Establece un modelo de calidad dividido en **Calidad de Producto** y **Calidad en Uso**:

- **Atributos Principales de Producto:** Adecuación Funcional, Eficiencia de Desempeño, Compatibilidad, Usabilidad, Fiabilidad, Seguridad, Mantenibilidad y Portabilidad.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                     MODELO DE CALIDAD DE MCCALL                           │
 ├──────────────────────────┬─────────────────────────┬──────────────────────┤
 │ OPERACIÓN DEL PRODUCTO   │ REVISIÓN DEL PRODUCTO   │ TRANSICIÓN DEL PROD. │
 │ (Características de uso) │ (Facilidad de cambio)   │ (Adaptabilidad)      │
 ├──────────────────────────┼─────────────────────────┼──────────────────────┤
 │ • Corrección             │ • Mantenibilidad        │ • Portabilidad       │
 │ • Confiabilidad          │ • Flexibilidad          │ • Reusabilidad       │
 │ • Usabilidad             │ • Facilidad de Prueba   │ • Interoperabilidad  │
 │ • Integridad / Eficiencia│                         │                      │
 └──────────────────────────┴─────────────────────────┴──────────────────────┘
```

**C. Modelo de Barbacci / SEI:** Se enfoca en la optimización coordinada de "atributos duros" de arquitectura (**Performance, Seguridad y Confiabilidad**), buscando un equilibrio u óptimo global en lugar de maximizar un único atributo de forma aislada.

### Calidad Interna vs. Calidad Externa

En la ingeniería de software es crucial diferenciar las dos caras de la calidad:

| Dimensión | Descripción | Ejemplos de Atributos | Responsabilidad |
| --- | --- | --- | --- |
| **Calidad Externa** | Es aquello percibido directamente por los usuarios al interactuar operativamente con el sistema | Interfaz intuitiva, velocidad de respuesta, corrección funcional, usabilidad. | Compartida entre el **Product Owner** (alcance) y el Equipo. |
| **Calidad Interna** | Aspectos técnicos no visibles a simple vista por el usuario, pero con profundo impacto en la sostenibilidad del sistema. | Legibilidad del código, consistencia del diseño, refactorización, cobertura de pruebas unitarias, arquitectura. | **Exclusiva del Equipo de Desarrollo** (no es negociable). |

> **Regla de la Calidad Interna:** La calidad interna **nunca es negociable.** Sacrificar la calidad interna para reducir tiempos (realizar "apaños" o generar Deuda Técnica) deteriora la base de código, destruyendo la calidad externa a mediano y largo plazo.
> 

### El Proceso como Factor Controlable

Entre los múltiples factores que influyen en el resultado de un proyecto (personas, tecnología, producto, características del cliente y entorno), **el proceso de desarrollo es el único factor verdaderamente controlable** para mejorar de forma predecible y cuantitativa la calidad del software y el desempeño de la organización.

- **Principio de Causalidad:** Un proceso estandarizado, medido y controlado reduce la variabilidad aleatoria e incrementa la probabilidad de obtener de forma consistente un producto de alta calidad $Mejores \ Procesos (\Rightarrow) Mejor \ Producto$.
- **Gobernanza:** Mientras que el talento individual de las personas es variable, la institucionalización de un proceso bien definido le otorga estabilidad y previsibilidad a la organización ante la rotación de personal.

## Bloque 2: Importancia de Trabajar con Calidad, Costo de la Calidad (CoQ) y el Dilema de la Calidad

La gestión económica de la calidad demuestra que el aseguramiento preventivo no representa un gasto innecesario, sino una inversión estratégica que reduce de forma drástica el costo total de desarrollo y mantenimiento.

### ¿Por qué Trabajar con Calidad? Ventajas, Mitos y Principio Económico

Existe la falsa creencia de que aplicar prácticas de calidad ralentiza el desarrollo y encarece el proyecto. La evidencia empírica en ingeniería de software demuestra lo contrario:

- **El Principio Económico Fundamental:** *"Trabajar con calidad es más barato que trabajar sin calidad"*. Detectar y reparar errores durante las fases iniciales requiere una fracción mínima del esfuerzo necesario para solucionar fallos en producción.
- **Ventajas de la Calidad Precoz:** Reduce la necesidad de reprocesos, mejora el tiempo de salida al mercado (*time-to-market*), preserva la reputación corporativa y disminuye la tasa de rotación o desgaste del equipo técnico.
- **La Ley de Meskimen:** Inmortaliza el hábito inadecuado de las organizaciones bajo presión: *"Nunca hay tiempo para hacerlo bien, pero siempre hay tiempo para hacerlo otra vez"*.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                       EL VERDADERO COSTO DE LA CALIDAD                    │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ • Con Revisiones / SQA temprano: Menor costo total y liberaciones rápidas  │
 │ • Sin Revisiones / "Apaños": Triplica el costo total por retrabajos    │
 └───────────────────────────────────────────────────────────────────────────┘
```

### El Costo de la Calidad (CoQ - *Cost of Quality*)

El **Costo de la Calidad (CoQ)** abarca la suma total de los recursos invertidos en buscar la calidad (actividades preventivas y de evaluación) más los costos acumulados por la falta de calidad (fallas internas y externas).

```
                               COSTO DE LA CALIDAD (CoQ)
                                           │
           ┌───────────────────────────────┴───────────────────────────────┐
           ▼                                                               ▼
 COSTOS DE CONFORMIDAD (Inversión)                             COSTOS DE NO CONFORMIDAD (Pérdida)
           │                                                               │
 ┌─────────┴─────────┐                                           ┌─────────┴─────────┐
 ▼                   ▼                                           ▼                   ▼
PREVENCIÓN          EVALUACIÓN                               FALLA INTERNA       FALLA EXTERNA
• Capacitación      • Revisiones técnicas                    • Reprocesos        • Soporte técnico
• Planificación     • Métricas de evaluación                 • Re-pruebas        • Devoluciones/Garantía
• Modelado inicial  • Testing y depuración                   • Efectos colaterales• Daño de reputación
```

**A. Costos de Conformidad (Inversión en Calidad)**

1. **Costos de Prevención:** Inversiones realizadas para evitar que los defectos ingresen al sistema desde el inicio. Incluyen la planificación de SQA, capacitación del personal, modelado de requerimientos/diseño y configuración de herramientas.
2. **Costos de Evaluación:** Gastos asociados a la investigación e inspección de los artefactos la "primera vez" que pasan por una etapa de proceso. Incluyen las **Revisiones Técnicas Formales (RTF)**, recolección de métricas y la ejecución de pruebas unitarias/integradas (*testing*).

**B. Costos de No Conformidad (Costo de los Errores)**

1. **Costos de Falla Interna:** Se generan cuando se detecta un error en los productos del trabajo **antes de enviar el software al cliente**. Incluyen el esfuerzo de reparación (retrabajo), las re-pruebas y la corrección de efectos colaterales imprevistos.
2. **Costos de Falla Externa:** Ocurren cuando los defectos son descubiertos por el usuario final **después de la liberación comercial**. Incluyen la atención de quejas en mesa de ayuda, emisión de parches de emergencia, penalizaciones contractuales y la pérdida de clientes por mala reputación.

### La Curva Exponencial del Costo de Corrección de Defectos

Los estudios de Barry Boehm, Victor Basili y datos consolidados de la industria (Cigital / NIST) demuestran que el costo de encontrar y corregir un error se incrementa de forma **exponencial** a medida que se avanza en el ciclo de vida de desarrollo:

```
  COSTO RELATIVO ($)
     ▲
$14k │                                                                 [Mantenimiento/Producción]
     │                                                                           $14,102
$7k  │                                                      [Pruebas de Sistema]
     │                                                             $7,136
$1k  │                                 [Codificación]
     │                                      $977
 $0  ├─── [Requerimientos] ── [Diseño] ──────┴────────────────────────────────────────────────► FASES
            $139               $455
```

> **Conclusión Económica:** Detectar un error en la fase de requerimientos o diseño mediante revisiones técnicas es aproximadamente **100 veces más barato** que corregir ese mismo error cuando el software ya está instalado en el cliente.
> 

| Fase de Detección del Defecto | Costo Promedio por Defecto (USD) | Factor de Multiplicación Relativo |
| --- | --- | --- |
| **Requerimientos / Análisis** | **$139** | 1x (Base de referencia) |
| **Diseño Arquitectónico** | **$455** | ~3.2x |
| **Codificación / Pruebas Unitarias** | **$977** | ~7x |
| **Pruebas de Sistema / Integración** | **$7,136** | ~51x |
| **Mantenimiento / Producción** | **$14,102** | **~101x** |

### El Dilema de la Calidad y el Software "Suficientemente Bueno"

```
           [ SOFTWARE DEFECTUOSO ] ◄────── PUNTOS EXTREMOS ──────► [ PERFECCIONISMO INFINITO ]
           • Pérdida de ventas            (Habitualmente mortales) • Pérdida de ventana comercial
           • Litigios y soporte caro                               • Agotamiento de presupuesto
                                                      │
                                                      ▼
                                       [ SOFTWARE SUFICIENTEMENTE BUENO ]
                                       • Balance estratégico de mercado
                                       • Funcionalidad clave estable (v1.0)
```

**A. El Dilema de la Calidad (Bertrand Meyer)**

Bertrand Meyer plantea la encrucijada económica a la que se enfrentan todas las organizaciones de software:

- **Escenario A (Mala Calidad):** Si produce software defectuoso o de mala calidad, fracasa porque los usuarios lo rechazarán o la empresa quebrará por costos de garantía y litigios.
- **Escenario B (Perfeccionismo Infinito):** Si dedica un tiempo y presupuesto infinitos a buscar un producto perfecto de cero defectos, perderá la ventana de oportunidad del mercado (*time-to-market*) y agotará los recursos antes de entregar.
- **Punto Medio Mágico:** Buscar el balance óptimo donde el software alcance un nivel de calidad aceptable sin destruir la viabilidad comercial ni retrasar la entrega.

**B. Software "Suficientemente Bueno" (*Good-Enough Software*)**

Consiste en entregar una versión inicial (v1.0) que contiene las funciones centrales de alta calidad que el usuario necesita, manteniendo pequeños errores no críticos en funciones secundarias conocidas para capturar el mercado a tiempo.

> **Peligros y Advertencias de la Filosofía *Good-Enough*:**
> 
> 1. **Empresas Pequeñas:** Entregar productos muy defectuosos puede destruir la reputación de la empresa de forma irreversible, impidiendo llegar a una versión 2.0.
> 2. **Sistemas Críticos (*Mission/Safety-Critical*):** En dominios médicos, aeronáuticos, automotrices o financieros, aplicar la filosofía de "suficientemente bueno" constituye una **negligencia grave y punible**, donde los fallos pueden costar vidas o pérdidas millonarias.

## Bloque 3: Estructura del Aseguramiento de Calidad (SQA / PPQA), Planificación y Estándares

En este tercer bloque abordamos la arquitectura institucional de la calidad de software, delimitando las fronteras entre disciplinas conceptuales, examinando el Área de Proceso **PPQA en CMMI**, el **Plan PACS / SQAP**  y la taxonomía de **estándares internacionales**.

### Diferenciación de Conceptos Clave en Calidad de Software

En la industria y la literatura académica, los términos asociados a la gestión de calidad a menudo se confunden. La cátedra establece una clara distinción funcional entre **Gestión de Calidad**, **Aseguramiento de Calidad (SQA)**, **Control de Calidad (QC)** y **Verificación y Validación (V&V)**:

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                   GESTIÓN DE LA CALIDAD ORGANIZACIONAL                    │
 ├───────────────────────────────────────────────────────────────────────────┤
 │  • ASEGURAMIENTO DE CALIDAD (SQA / PPQA): Orientado al PROCESO (Preventivo)│
 │    Define estándares, guías y audita la adhesión del equipo a las reglas. │
 ├───────────────────────────────────────────────────────────────────────────┤
 │  • CONTROL DE CALIDAD (QC): Orientado al PRODUCTO (Detectivo)            │
 │    Aplica revisiones y pruebas (testing) para eliminar defectos.         │
 └───────────────────────────────────────────────────────────────────────────┘
```

| Disciplina | Foco Principal | Orientación | Actividades Típicas |
| --- | --- | --- | --- |
| **Gestión de Calidad** (*Quality Management*) | Gobernanza organizacional e independencia de auditoría. | Estratégica | Definir políticas de calidad, estructurar el Manual de Calidad y asegurar recursos  |
| **Aseguramiento de Calidad** (*SQA / PPQA*) | **Proceso** | **Preventiva** (evita la introducción de errores) | Definición de procesos, auditorías de proceso, evaluación de adhesión a estándares |
| **Control de Calidad** (*QC*) | **Producto**  | **Detectiva** (identifica y remueve defectos)  | Inspecciones de código, Revisiones Técnicas Formales (RTF), Testing |

#### Verificación vs. Validación (V&V)

Dentro de las actividades de evaluación de calidad, el estándar **IEEE Std 1012** y Pressman establecen las dos preguntas doradas de ingeniería:

- **Verificación (*"¿Estamos construyendo el producto correctamente?"*):**
    - Asegura que el producto o entregable de una fase satisface exactamente las especificaciones y condiciones impuestas en la línea base anterior.
    - *Ejemplo:* Comprobar que el modelo de diseño arquitectónico refleja todos los requerimientos de la ERS.
- **Validación (*"¿Estamos construyendo el producto correcto?"*):**
    - Asegura que el software ejecutable en funcionamiento satisface las necesidades reales, expectativas y propósito operativo del usuario final en su entorno de trabajo.
    - *Ejemplo:* Ejecutar pruebas de aceptación con el cliente final sobre el sistema desplegado.

---

### El Área de Proceso PPQA en CMMI (Nivel 2 - Administrado)

En el marco **CMMI-DEV V1.3**, el área de proceso **PPQA (*Process and Product Quality Assurance*)** se ubica en el **Nivel 2 de Madurez (Administrado)** dentro de la categoría de **Soporte**.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │               PROPÓSITO DE PPQA EN CMMI (NIVEL 2 - SOPORTE)               │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ Ofrecer al personal y a la gerencia una perspectiva u opinión OBJETIVA    │
 │ e independiente sobre los procesos realizados y los productos de trabajo  │
 │ asociados a lo largo del proyecto.                                        │
 └───────────────────────────────────────────────────────────────────────────┘
```

**Metas Específicas (SG) de PPQA:**

1. **SG 1 - Evaluar Objetivamente la Adhesión de los Procesos (*Objectively Evaluate Processes*):**
    - Evalúa periódicamente los procesos realizados frente a las descripciones de proceso, estándares y procedimientos organizacionales aplicables.
2. **SG 2 - Evaluar Objetivamente los Productos de Trabajo y Servicios (*Objectively Evaluate Work Products*):**
    - Evalúa los artefactos construidos frente a los estándares de producto preestablecidos, identificando no conformidades y garantizando su resolución ante el nivel de administración adecuado.

> **Independencia Estratégica:** CMMI y la bibliografía de la cátedra destacan que el responsable de PPQA/SQA debe mantener independencia operativa del Gerente de Proyecto para evitar conflictos de interés entre los plazos de entrega y la calidad.
> 

### El Plan de Aseguramiento de Calidad del Software (PACS / SQAP)

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                  ESTRUCTURA TÍPICA DEL PLAN PACS (IEEE 730)               │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ 1. Propósito y Alcance del Plan                                           │
 │ 2. Documentos de Referencia y Estándares Aplicables (Proceso y Producto)   │
 │ 3. Estructura Organizacional, Roles y Responsabilidades (GAC / SQA)       │
 │ 4. Tareas y Actividades de SQA (Revisiones Técnicas y Auditorías)         │
 │ 5. Procedimientos para el Registro, Reporte y Seguimiento de Defectos     │
 │ 6. Herramientas, Métodos y Métricas de Calidad de Soporte                 │
 │ 7. Plan de Auditorías de Proyecto y Gestión de Configuración (SCM)        │
 └───────────────────────────────────────────────────────────────────────────┘
```

El **PACS (o SQAP - *Software Quality Assurance Plan*)** es el mapa de ruta maestro que rige las actividades de calidad de un proyecto particular. Basado en el estándar **IEEE Std 730**, se elabora durante la fase de planificación del proyecto.

- **Independencia en el PACS:** El plan especifica expresamente quién realizará las auditorías y cómo se informarán las desviaciones o no conformidades directamente a la alta gerencia cuando no puedan resolverse dentro del equipo de proyecto.

### Estándares de Software: Proceso vs. Producto

Un pilar del aseguramiento de calidad es la selección e institucionalización de **estándares**, los cuales concentran la "sabiduría y mejores prácticas" acumuladas por la organización o la industria.

```
                               ESTÁNDARES DE SOFTWARE
                                         │
           ┌─────────────────────────────┴─────────────────────────────┐
           ▼                                                           ▼
ESTÁNDARES DE PROCESO                                       ESTÁNDARES DE PRODUCTO
(Definen CÓMO se debe trabajar)                             (Definen CÓMO debe verse el entregable)
• ISO 9001 / ISO 12207                                      • Estándar de Codificación (Java/C++)
• IEEE 1028 (Revisiones y Auditorías)                       • Estándar de ERS (IEEE 830)
• CMMI-DEV V1.3                                             • ISO/IEC 25010 (Modelo de Calidad)
```

1. **Estándares de Proceso:** Definen la secuencia de pasos, reglas de aprobación y procedimientos que deben seguirse para desarrollar software o gestionar el proyecto.
    - *Ejemplos:* **ISO 9001** (marco de gestión basado en el ciclo PDCA / Plan-Do-Check-Act), **IEEE 1028** (procedimiento formal para revisiones y auditorías) y **CMMI**.
2. **Estándares de Producto:** Aplican a los entregables tangibles que se producen durante el desarrollo, especificando su formato, contenido y reglas de representación.
    - *Ejemplos:* Estándar de estructura del documento de requerimientos (ERS), convenciones de encabezado en clases, reglas de estilo de programación y el modelo **ISO/IEC 25010**.

## Bloque 4: Actividades Sombrilla de SQA — Revisiones, Auditorías, Testing y Métricas

En este último bloque de la **Unidad 4 (PPQA)**, abordamos la ejecución práctica de las actividades sombrilla que garantizan tanto la **calidad del proceso** como la **calidad del producto** a lo largo de todo el ciclo de vida de desarrollo.

### Revisiones Técnicas e Inspecciones (Control de Calidad Estático)

Las **Revisiones Técnicas** constituyen el proceso de verificación y validación (V&V) estático por excelencia: permiten examinar requerimientos, modelos de diseño, código fuente y planes de prueba **sin necesidad de ejecutar el software**.

```
                               REVISIONES TÉCNICAS
                                        │
           ┌────────────────────────────┴────────────────────────────┐
           ▼                                                         ▼
INFORMALES (Walkthroughs / Recorridas)                   FORMALES (Inspecciones de Fagan / FTR)
• Dirigidas por el autor/programador.              • Proceso estructurado y controlado.
• Mínima preparación previa.                        • Roles definidos y listas de verificación.
• Foco en aprendizaje y discusión breve.        • Recolección formal de métricas de defectos.
```

**A. Tipos de Revisiones según su Formalidad**

- **Recorridas / *Walkthroughs* (Informales):** Técnica en la que el autor guía a sus pares a través del artefacto para explicar la lógica, responder preguntas y capacitar al equipo. Posee poca o ninguna preparación previa y no recopila métricas sistemáticas del proceso.
- **Inspecciones de Software / *FTR - Formal Technical Reviews*:** Proceso formal introducido originalmente por Michael Fagan en IBM (1976). Su objetivo explícito es detectar y remover la mayor cantidad de defectos de forma eficiente en etapas tempranas.
    
    > **Efectividad de las Inspecciones:** Diversos estudios demuestran que las inspecciones formales logran detectar entre el **60% y el 90% de los errores** antes de la fase de pruebas ejecutables, reduciendo los costos de retrabajo hasta en un factor de 10.
    > 

**B. Las 6 Fases del Proceso Formal de Inspección**

El proceso convencional de inspección sigue una secuencia estricta de pasos:

```
 ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
 │ 1.Planificación│ ──► │ 2.Visión Gral.│ ──►│ 3.Preparación │
 └───────────────┘     └───────────────┘     └───────┬───────┘
                                                     │
 ┌───────────────┐     ┌───────────────┐             │
 │ 6.Seguimiento │ ◄── │ 5.Corrección  │ ◄───────────┘
 └───────────────┘     └───────────────┘     (4. Reunión de Inspección)
```

1. **Planificación:** El moderador verifica los criterios de entrada, selecciona al equipo de revisión y asigna los roles.
2. **Visión General / Vista Previa:** Presentación breve del contexto del artefacto a revisar por parte del autor.
3. **Preparación Individual:** Cada revisor examina de forma independiente el documento o código utilizando **listas de verificación (*checklists*)** para anotar los defectos potenciales antes de la reunión.
4. **Reunión de Inspección:** El lector recorre el trabajo y el equipo registra los defectos encontrados en una lista de pendientes (*minuta de revisión*).
5. **Corrección / Retrabajo:** El autor modifica el producto corrigiendo los defectos documentados.
6. **Seguimiento:** El moderador o revisor asignado verifica que todas las correcciones se hayan realizado correctamente sin reintroducir nuevos errores.

**C. Reglas de Oro de las Revisiones Técnicas**

- **Revisar el producto, no al productor:** Las revisiones buscan fallos en los artefactos, jamás evaluar el desempeño de las personas.
- **Limitar la reunión a 2 horas máximo:** La concentración humana disminuye drásticamente pasados los 120 minutos.
- **Señalar problemas, no resolverlos:** Durante la reunión solo se identifican y registran los defectos; buscar soluciones en vivo desvía la agenda y consume tiempo.
- **Respetar el tamaño máximo:** Se recomienda revisar un máximo de **250 líneas de código (LOC)** o **280 líneas de texto** por sesión.

### Auditorías de Software (Aseguramiento de Calidad / PPQA)

Mientras que las revisiones técnicas son realizadas por ingenieros para evaluar productos de trabajo, las **Auditorías de Software** son evaluaciones independientes realizadas por el grupo de SQA / PPQA para verificar el **cumplimiento de estándares, procesos y guías establecidas**.

```
                               AUDITORÍAS DE SOFTWARE
                                         │
           ┌─────────────────────────────┼─────────────────────────────┐
           ▼                             ▼                             ▼
 AUDITORÍA DE PROYECTO       AUDITORÍA DE CONFIGURACIÓN    AUDITORÍA DE CONFIGURACIÓN
                             FUNCIONAL (FCA)               FÍSICA (PCA)
• Valida si el equipo sigue  • Compara el software          • Compara el código construido
  el proceso definido en       ejecutable contra la ERS.       contra la documentación
  el Plan PACS.              • Verifica que cumpla solo           técnica entregable.
                               y totalmente lo especificado.
```

1. **Auditoría de Proyecto:** Evalúa objetivamente si la ejecución real del desarrollo se adhiere a los procesos organizacionales y al Plan PACS (frecuencia de revisiones, gestión de riesgos y métricas).
2. **Auditoría de Configuración Funcional (FCA):** Compara el software construido y probado con la Especificación de Requerimientos de Software (ERS) para asegurar que el sistema satisface **únicamente y de forma completa** las capacidades pactadas, validando la matriz de trazabilidad.
3. **Auditoría de Configuración Física (PCA):** Verifica la correspondencia exacta entre los ejecutables/código fuente y la documentación de soporte (manuales de usuario, arquitectura, guías de instalación) antes de autorizar la liberación al cliente.

### Testing / Pruebas de Software (Control de Calidad Dinámico)

El **Testing** es la actividad de Control de Calidad que involucra la **ejecución real del programa** bajo condiciones controladas para comparar el comportamiento observado contra el esperado y descubrir fallas.

- **Sinergia con las Revisiones Estáticas:** Las revisiones e inspecciones (análisis estático) y el testing (análisis dinámico) son técnicas **complementarias**, no excluyentes. Las revisiones detectan errores de lógica, estilo y arquitectura antes de compilar; el testing detecta defectos de integración, rendimiento y temporización en tiempo de ejecución.
- **La Máxima de Dijkstra sobre las Pruebas:**
    
    > *"Las pruebas de software pueden demostrar la presencia de defectos, pero nunca pueden demostrar su ausencia completa"*.
    > 

### Métricas de Calidad y el Ciclo de Mejora Continua (PDCA / Deming)

#### A. Métricas Clave de Defectos en SQA

Para evaluar la efectividad de las actividades de SQA y la estabilidad del producto, se emplean dos fórmulas fundamentales:

1. **Densidad de Defectos:** Mide la cantidad de errores encontrados en relación con el tamaño del producto: $[\text{Densidad de Defectos} = \frac{\text{Total de Defectos Encontrados}}{\text{Tamaño del Producto (LOC, PF, Puntos de Historia o Páginas)}}]$
2. **Eficiencia de Remoción de Defectos (ERD / *Defect Removal Efficiency*):** Mide el porcentaje de errores que fueron detectados y eliminados **antes de liberar el software al usuario final**: $[ERD = \left( \frac{E}{E + D} \right) \times 100]$
*Donde \(E\) es la cantidad de errores encontrados internamente durante el desarrollo (revisiones + testing) y \(D\) es la cantidad de defectos reportados por el cliente en producción. Un valor alto de ERD (ej. > 90%) indica un filtro de calidad interno altamente eficaz.*

#### B. El Ciclo PDCA / Deming en SQA

El Aseguramiento de Calidad se alinea directamente con el ciclo cerrado de mejora continua **PDCA (*Plan-Do-Check-Act*)** propuesto por Walter Shewhart y W. Edwards Deming e integrado en estándares como ISO 9001:

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                   EL CICLO PDCA DE CALIDAD EN SOFTWARE                    │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ • PLAN (Planificar): Definir el Plan PACS/SQAP, estándares y metas.       │
 │ • DO (Hacer): Ejecutar el desarrollo aplicando revisiones e inspecciones.  │
 │ • CHECK (Verificar): Medir, auditar procesos (PPQA) y ejecutar pruebas.    │
 │ • ACT (Actuar): Analizar causas raíz e implementar acciones correctivas.   │
 └───────────────────────────────────────────────────────────────────────────┘
```

# Principales Modelos de Calidad Existentes (CMMI – SPICE – ISO)

Los modelos y estándares de calidad proporcionan marcos de referencia para evaluar, medir y mejorar la capacidad de los procesos de software y la calidad de los productos entregados.

```
                           MODELOS DE CALIDAD Y MEJORA
                                        │
     ┌──────────────────────────────────┼──────────────────────────────────┐
     ▼                                  ▼                                  ▼
 CMMI (SEI / ISACA)            SPICE (ISO/IEC 15504)              NORMAS ISO
 • Orientado a Madurez/Capacidad. • Marco estándar internacional   • ISO 9001 (SGC genérico).
 • 3 Constelaciones (DEV/SVC/ACQ).  de evaluación de procesos.     • ISO/IEC 12207 (Ciclo de Vida).
 • Representación Etapas/Continua. • Evaluación flexible por PA.   • ISO/IEC 25010 (SQuaRE).
```

#### A. CMMI ® (*Capability Maturity Model Integration*)

- **Origen e Institución:** Evolución del SW-CMM creado por el *Software Engineering Institute (SEI)* de la Universidad Carnegie Mellon y el Departamento de Defensa de EE.UU.. Actualmente gestionado por ISACA.
- **Naturaleza:** No es una norma rígida ni una ley; no se "certifica", sino que se evalúa la madurez/capacidad mediante evaluadores autorizados (*Lead Appraisers*) bajo métodos como SCAMPI.
- **Las 3 Constelaciones de CMMI:**
    - **CMMI-DEV:** Guía para desarrollar productos y sistemas de software.
    - **CMMI-SVC:** Guía para la prestación y gestión de servicios.
    - **CMMI-ACQ:** Guía para la adquisición y gestión de proveedores.
- **Dos Representaciones de Evaluación:**
    - **Por Etapas (*Staged*):** Mide la **Madurez Organizacional** global en **5 Niveles** (1-Inicial, 2-Administrado, 3-Definido, 4-Cuantitativamente Administrado, 5-Optimizado). Cada nivel agrupa un conjunto fijo de Áreas de Proceso (AP).
    - **Continua (*Continuous*):** Mide la **Capacidad** específica de Áreas de Proceso individuales en **6 Niveles** (0 a 5). Permite a la empresa elegir en qué orden mejorar cada proceso.

#### B. SPICE (*Software Process Improvement and Capability dEtermination* - ISO/IEC 15504)

- **Origen y Propósito:** Iniciativa internacional impulsada por ISO/IEC para contar con un estándar de evaluación neutro y objetivo.
- **Enfoque:** Define requisitos para la evaluación de procesos de software y permite mapear la capacidad de los procesos de manera flexible, cruzándose con estándares de ciclo de vida como la norma **ISO/IEC 12207**.

#### C. Normas ISO en Calidad de Software

- **ISO 9001 / ISO 9000-3:** Estándar de Gestión de Calidad aplicable a cualquier organización. Aplica el ciclo **PDCA (Plan-Do-Check-Act)** e implica la auditoría y certificación formal por organismos acreditados de tercera parte (ej. esquemas como *TickIT*).
- **ISO/IEC 12207:** Establece la arquitectura completa de los procesos del ciclo de vida del software (procesos principales, de soporte y organizacionales).
- **ISO/IEC 25000 (SQuaRE) / ISO 25010:** Modelo de calidad centrado en el **Producto**, evaluando atributos como adecuación funcional, usabilidad, fiabilidad, mantenibilidad y seguridad.

### Auditorías de Software: Proyecto vs. Grupo de Calidad

Según el estándar **IEEE Std 1028**, una auditoría es una evaluación independiente de los productos o procesos de software para asegurar el cumplimiento con estándares, especificaciones y procedimientos preestablecidos.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                   COMPARACIÓN DE AUDITORÍAS DE SOFTWARE                   │
 ├────────────────────────────────┬──────────────────────────────────────────┤
 │     AUDITORÍA DE PROYECTO      │    AUDITORÍA AL GRUPO DE CALIDAD (SQA)   │
 ├────────────────────────────────┼──────────────────────────────────────────┤
 │ • Foco: Un proyecto específico.│ • Foco: El departamento/grupo de SQA.    │
 │ • Marco: Plan PACS / SQAP.     │ • Marco: Políticas de calidad generales. │
 │ • Evalúa: Si los               │ • Evalúa: Si los auditores/analistas de  │
 │  desarrolladores cumplen el    │ QA cumplen bien sus controles.           |
 |    proceso del proyecto.       │                                          |
 └────────────────────────────────┴──────────────────────────────────────────┘
```

- **Auditoría de Proyecto:**
    - **Objeto de Evaluación:** Se enfoca en la ejecución de un proyecto en particular.
    - **Regla de Operación:** Se realiza según lo planificado en el **PACS (Plan de Aseguramiento de Calidad de Software)**.
    - **Propósito:** Verificar la consistencia técnica del producto a medida que evoluciona (consistencia entre requerimientos ERS, diseño DDS, código fuente y ejecución de pruebas) y comprobar que el equipo de desarrollo sigue los procedimientos aprobado.
- **Auditoría al Grupo de Calidad (Grupo de SQA / PPQA):**
    - **Objeto de Evaluación:** Evalúa al propio equipo de Aseguramiento de Calidad.
    - **Propósito:** Garantizar que el grupo de SQA mantiene la **independencia objetiva**, ejecuta las revisiones y auditorías comprometidas, reporta de forma transparente las no conformidades a la gerencia y aplica métricas válidas. Evita que el área de SQA caiga en complacencia o pierda rigor.

### El Proceso Formal de Auditoría de Software

La ejecución de una auditoría sigue un flujo estructurado de trabajo para garantizar la imparcialidad y la recolección de **evidencia objetiva** [cite: 106].

```
  ┌───────────────────────────┐      ┌───────────────────────────┐
  │ 1. PREPARACIÓN Y PLANIF.  │ ───► │   2. EJECUCIÓN (Campo)    │
  │ • Alcance, fechas y checklist.   │ • Preguntas y evidencia.  │
  └───────────────────────────┘      └─────────────┬─────────────┘
                                                   │
  ┌───────────────────────────┐      ┌─────────────▼─────────────┐
  │      4. SEGUIMIENTO       │ ◄─── │  3. ANÁLISIS Y REPORTE    │
  │ • Plan de Acción y cierre.│      │ • Hallazgos y reunión.    │
  └───────────────────────────┘      └───────────────────────────┘
```

#### A. Roles y Responsabilidades

- **Auditor:** Define y comunica el alcance, aplica la técnica del cuestionario, solicita y examina la evidencia objetiva, elabora el reporte de hallazgos y realiza el seguimiento.
- **Auditado:** Proporciona los documentos y registros solicitados, contesta las preguntas con franqueza, elabora el **Plan de Acción** para corregir las desviaciones y notifica su cumplimient.

#### B. Las 4 Fases del Proceso de Auditoría

1. **Preparación y Planificación:**
    - Se acuerdan las fechas, lugar y alcance de la auditoría entre auditor y auditado.
    - El auditor confecciona la herramienta central: el **Checklist / Lista de Verificación de Auditoría** (preguntas abiertas sobre el plan de proyecto, gestión de requerimientos, control de cambios y estándares).
2. **Ejecución (Trabajo de Campo):**
    - Reunión de apertura para informar la dinámica.
    - Aplicación del cuestionario (técnica de preguntas abiertas: *qué, quién, cómo, dónde, cuándo*).
    - Inspección de **evidencia objetiva** (ej. minutas firmadas, reportes de pruebas, líneas base aprobadas, registros de configuración) para validar las respuestas y completar el checklist.
3. **Análisis y Reporte de Resultados:**
    - El auditor analiza los hallazgos y redacta el **Reporte de Auditoría**, clasificando las **Desviaciones / No Conformidades**.
    - Reunión de cierre donde se presentan las observaciones y se acuerda la fecha de entrega del informe definitivo.
4. **Seguimiento (*Follow-up*):**
    - El auditado analiza las desviaciones y envía un **Plan de Acción** formal con fechas comprometidas de resolución.
    - El auditor revisa y aprueba el Plan de Acción, verifica la implementación efectiva de las correcciones y realiza el **cierre formal de las desviaciones**.

**A continuación, desarrollamos en detalle los 3 temas pendientes organizados en bloques conceptuales:**

# Bloque 1: Planificación de Pruebas de Software (*Test Planning*)

La prueba de software es una actividad sistemática que debe planificarse anticipadamente para definir una estrategia clara, asignar recursos y establecer criterios objetivos de evaluación.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                     PROCESO DE PLANIFICACIÓN DE PRUEBAS                   │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ 1. Análisis de Riesgos y Objetivos del Cliente                            │
 │ 2. Definición de la Estrategia (Niveles, tipos y alcance)                 │
 │ 3. Estimación de Recursos, Tiempos y Entornos de Prueba                   │
 │ 4. Establecimiento de Criterios de Entrada, Salida y Detención            │
 └───────────────────────────────────────────────────────────────────────────┘
```

#### A. Estrategia de Prueba vs. Plan de Pruebas (*Test Plan*)

- **Estrategia de Prueba:** Es la plantilla organizacional marco que describe el enfoque general, la secuencia de integración, las métricas a recolectar y el tipo de pruebas a aplicar según el ciclo de vida del proyecto.
- **Plan de Pruebas (*Test Plan*):** Es el documento operativo de gestión que especifica las fechas, recursos asignados, entornos requeridos, riesgos a abordar y entregables del proceso de prueba para un proyecto o *sprint* específico.

#### B. Componentes y Criterios del Plan de Pruebas

- **Criterios de Entrada (*Entry Criteria*):** Condiciones previas e indispensables para comenzar a probar un componente (ej. código compilado sin errores sintácticos, ambiente de pruebas configurado y disponibilidad de la ERS/historias de usuario).
- **Criterios de Salida y Detención (*Exit / Suspension Criteria*):** Definen cuándo se da por concluida la etapa de pruebas o cuándo debe suspenderse la ejecución por fallas bloqueantes.
- **Entregables del Proceso de Prueba:** Incluyen el Plan de Pruebas, la Especificación de Casos de Prueba, el Reporte de Incidentes/Bugs y el Informe Final de Pruebas.

#### C. Clasificación de Defectos: Severidad vs. Prioridad

Cuando una prueba falla y se registra un defecto o *bug*, se categoriza bajo dos dimensiones fundamentales:

```
 ┌────────────────────────────────────────┬────────────────────────────────────────┐
 │               SEVERIDAD                │               PRIORIDAD                │
 ├────────────────────────────────────────┼────────────────────────────────────────┤
 │ • Mide el impacto técnico del fallo    │ • Mide la urgencia de negocio para     │
 │   en la operación del sistema.         │   corregir el error.                   │
 │ • Escala: Bloqueante, Crítico, Mayor,  │ • Escala: Urgente, Alta, Media,        │
 │   Menor, Cosmético.                    │   Baja.                                │
 └────────────────────────────────────────┴────────────────────────────────────────┘
```

# Bloque 2: Niveles, Tipos y Técnicas de Prueba (Caja Negra y Caja Blanca)

Las pruebas se organizan jerárquicamente en niveles de abstracción que abarcan desde el componente aislado hasta la validación del sistema completo.

```
                             NIVELES DE PRUEBA
                                    │
           ┌────────────────────────┼────────────────────────┐
           ▼                        ▼                        ▼
 PRUEBAS UNITARIAS        PRUEBAS DE INTEGRACIÓN    PRUEBAS DE SISTEMA / ACEPTACIÓN
 • Métodos / Clases.      • Interacción entre       • Funcionalidad total, interfaz,
 • Acceso al código.        componentes.              desempeño y validación final UAT.
```

#### A. Los 4 Niveles de Prueba

1. **Pruebas Unitarias (*Unit Testing*):** Verifican la unidad más pequeña del diseño de software (funciones, métodos o clases aisladas). Son realizadas directamente por los desarrolladores con acceso al código fuente utilizando *frameworks* de prueba (ej. JUnit).
2. **Pruebas de Integración (*Integration Testing*):** Comprueban que los componentes que funcionan bien de forma aislada también operan correctamente al conectarse entre sí a través de sus interfaces. Se aplican mediante estrategias de integración incremental (*Top-Down*, *Bottom-Up* o *Sandwich*).
3. **Pruebas de Sistema (*System Testing*):** Evalúan el sistema de software integrado de manera global en un entorno similar al de producción para verificar que cumple con todos los requerimientos funcionales y de rendimiento.
4. **Pruebas de Aceptación (*Acceptance Testing* / UAT):** Demuestran al cliente o usuario final que el producto satisface sus necesidades operativas. Incluyen las pruebas **Alfa** (realizadas en el entorno del desarrollador por usuarios clave) y **Beta** (liberadas a un grupo externo de usuarios en un entorno real).

#### B. Tipos de Prueba

- **Pruebas Funcionales:** Validan las funciones e interacciones que el software debe realizar según la especificación de requerimientos.
- **Pruebas No Funcionales:** Evalúan atributos de calidad de arquitectura e infraestructura, como rendimiento, carga, estrés, seguridad, usabilidad y mantenibilidad.
- **Pruebas de Regresión:** Consisten en volver a ejecutar pruebas previas tras aplicar un cambio o corrección de código para garantizar que no se introdujeron nuevos errores ni se rompieron funcionalidades existentes.

#### C. Técnicas de Diseño de Casos de Prueba

```
 ┌────────────────────────────────────────┬────────────────────────────────────────┐
 │   CAJA NEGRA (Funcional / Externa)     │   CAJA BLANCA (Estructural / Interna)  │
 ├────────────────────────────────────────┼────────────────────────────────────────┤
 │ • Sin acceso al código fuente.         │ • Basada en la estructura lógica e     │
 │ • Se enfoca en entradas y salidas.     │   interna del código fuente.           │
 │ • Técnicas: Partición de Equivalencia, │ • Técnicas: Cobertura de Sentencias,   │
 │   Valores Límite, Tablas de Transición │   Ramas/Decisiones y Caminos Básicos   │
 │  .                                     │  .                            │
 └────────────────────────────────────────┴────────────────────────────────────────┘
```

- **Técnicas de Caja Negra (*Black-Box*):**
    - **Partición en Clases de Equivalencia:** Divide el dominio de entrada de un programa en clases de datos válidas e inválidas para las cuales se asume que el software se comportará de manera idéntica. Se selecciona al menos un caso de prueba por cada clase de equivalencia.
    - **Análisis de Valores Límite (*Boundary Value Analysis*):** Complementa la partición de equivalencia seleccionando datos de prueba ubicados en las fronteras o extremos del intervalo de cada clase (valores límite exactos, inmediatamente por debajo e inmediatamente por encima), donde históricamente ocurre la mayor densidad de fallas.
- **Técnicas de Caja Blanca (*White-Box*):**
    - **Prueba de Ruta / Camino Básico:** Utiliza la estructura de control para derivar una medida de complejidad ciclomática que garantiza ejercitar cada ruta independiente dentro de un módulo al menos una vez.
    - **Criterios de Cobertura:** Evalúan el porcentaje de código ejercitado por las pruebas (*Statement Coverage* / Cobertura de Sentencias y *Branch Coverage* / Cobertura de Decisiones).

# Bloque 3: Testing en Ambientes Ágiles (*Agile Testing*)

En el paradigma ágil, las pruebas dejan de ser una fase tardía al final del desarrollo y se convierten en una **actividad continua y colaborativa** presente desde el día uno.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                       PRINCIPIOS DEL TESTING ÁGIL                         │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ • Prevenir defectos es superior a encontrar defectos.                     │
 │ • Todo el equipo es responsable de la calidad (*Whole-team approach*).    │
 │ • Testing es una actividad continua, no una fase del proyecto.            │
 │ • Las pruebas representan especificaciones ejecutables del sistema.       │
 └───────────────────────────────────────────────────────────────────────────┘
```

#### A. La Pirámide del Testing Ágil vs. Tradicional

En el desarrollo tradicional de cascada se suele incurrir en la **pirámide invertida** (muchas pruebas manuales por interfaz de usuario al final y pocas pruebas unitarias). En contraste, la **Pirámide de Testing Ágil** promueve:

```
                       PIRÁMIDE DE TESTING ÁGIL
                                ▲
                               ╱ ╲
                              ╱   ╲  GUI / Pruebas Manuales y Exploratorias (1-5%)
                             ╱─────╲
                            ╱       ╲  Pruebas de Aceptación / Servicios / API (5-15%)
                           ╱─────────╲
                          ╱           ╲  Pruebas Unitarias Automatizadas (80-90%)
                         ───────────────
```

- **Base Ancha de Pruebas Unitarias (80-90%):** Pruebas automatizadas rápidas ejecutadas por los desarrolladores.
- **Capa Media de Servicios y Aceptación (5-15%):** Pruebas de reglas de negocio e integración entre componentes.
- **Cúspide Reducida de Interfaz de Usuario (1-5%):** Pruebas exploratorias manuales y de usabilidad centradas en la experiencia del usuario.

#### B. Los 4 Cuadrantes del Testing Ágil (Brian Marick / Lisa Crispin)

Organizan los tipos de pruebas combinando la orientación (Tecnología vs. Negocio) y el propósito (Apoyar al equipo vs. Criticar el producto):

```
               ORIENTADAS AL NEGOCIO
           ┌───────────────────────────┬───────────────────────────┐
           │ CUADRANTE 2 (Q2)          │ CUADRANTE 3 (Q3)          │
           │ • Pruebas de Historias    │ • Pruebas Exploratorias   │
           │ • Ejemplos de Aceptación  │ • Pruebas de Usabilidad / UX│
           │ • Prototipos y Simulación │ • Pruebas de Aceptación   │
  APOYAN   │   (Manuales/Automáticas)  │   (UAT - Manuales)        │   CRITICAN
  AL EQUIPO├───────────────────────────┼───────────────────────────┤  EL PRODUCTO
           │ CUADRANTE 1 (Q1)          │ CUADRANTE 4 (Q4)          │
           │ • Pruebas Unitarias       │ • Pruebas de Rendimiento  │
           │ • Pruebas de Componentes  │ • Pruebas de Carga        │
           │   (Automatizadas)         │ • Pruebas de Seguridad    │
           │                           │   (Basadas en Herramientas│
           └───────────────────────────┴───────────────────────────┘
               ORIENTADAS A LA TECNOLOGÍA
```

#### C. Prácticas Concretas: TDD, ATDD y BDD

- **Desarrollo Guiado por Pruebas (TDD - *Test-Driven Development*):** Técnica de diseño e ingeniería donde las pruebas unitarias automatizadas se escriben **antes** de escribir el código funcional.
    - **Ciclo Red-Green-Refactor:** 1) **Rojo:** Escribir una prueba corta que falle. 2) **Verde:** Escribir el código mínimo necesario para que la prueba pase. 3) **Refactorizar:** Limpiar y optimizar el código manteniendo la prueba en verde.
- **Desarrollo Guiado por Pruebas de Aceptación (ATDD):** Extiende el enfoque TDD involucrando al Product Owner, Desarrolladores y Testers para definir los criterios de aceptación como **ejemplos ejecutables** antes de codificar la Historia de Usuario.
- **Desarrollo Guiado por Comportamiento (BDD):** Aplica lenguajes basados en el formato DSL (*Domain Specific Language*) como `Given-When-Then` (Dado-Cuando-Entonces) para definir el comportamiento esperado del sistema de forma entendible tanto para el negocio como para la automatización técnica.

---