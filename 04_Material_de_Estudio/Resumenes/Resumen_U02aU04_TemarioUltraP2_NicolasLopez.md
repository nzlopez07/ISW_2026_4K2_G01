# Machete Maestro de Repaso Rápido: Segundo Parcial ICSW (2026)

> **Cátedra:** Ingeniería y Calidad de Software (UTN-FRC 4K2)  
> **Uso:** Repaso intensivo en 25 minutos antes de rendir. Cero relleno académico, 100% foco en preguntas de examen y gatillos de Multiple Choice.

---

> [!IMPORTANT] ACTUALIZACIÓN OFICIAL DE CÁTEDRA:
> **EXCLUIDO:** Modelos de Calidad de **PRODUCTO** (McCall, Barbacci, ISO/IEC 25010 / SQuaRE) **NO SE EVALÚAN**.
> **SÍ SE EVALÚAN:** Modelos de **PROCESO** (CMMI, SPICE, ISO 9001), SQA, Auditorías, Revisiones (Fagan), Testing, TDD, Lean, Kanban, Nexus y Prácticas Continuas.

---

## 1. UNIDAD 2: Lean Software Development y Kanban

### A. Los 7 Principios de Lean (Mary & Tom Poppendieck)
1. **Eliminar desperdicios (*Eliminate Waste*):** Todo lo que no agrega valor directo al cliente final es basura.
2. **Amplificar el aprendizaje (*Amplify Learning*):** Ciclos cortos de feedback y prototipado rápido.
3. **Decidir lo más tarde posible (*Decide as Late as Possible*):** Mantener opciones abiertas; no decidir por especulación temprana.
4. **Entregar lo más rápido posible (*Deliver as Fast as Possible*):** Flujo veloz que maximiza el retorno de inversión y aprendizaje.
5. **Empoderar al equipo (*Empower the Team*):** Los desarrolladores toman las decisiones técnicas de su propio trabajo.
6. **Construir integridad intrínseca (*Build Integrity In*):** Calidad desde la fuente (TDD, refactoring, CI); no testear calidad al final.
7. **Optimizar el todo (*Optimize the Whole*):** Mirar la cadena de valor completa (*Value Stream*), no suboptimizar una etapa aislada.

> [!WARNING] TRAMPA DE CHOICE:
> *Eliminar desperdicios* y *Optimizar el todo* son **exclusivos de Lean**, **NO** están en el texto del Manifiesto Ágil de 2001.

### B. Los 7 (+1) Desperdicios: Toyota vs. Software
| Desperdicio Toyota | Desperdicio en Software (Poppendieck) | Ejemplo Real de Parcial |
| :--- | :--- | :--- |
| **Sobreproducción** | **Funcionalidades extras (*Extra Features*)** | Desarrollar pantallas o botones que nadie usa. |
| **Inventario** | **Trabajo parcialmente terminado (*Partially Done*)** | Código programado sin probar, ramas sin mergear. |
| **Sobreprocesamiento** | **Procesos innecesarios / burocracia** | Documentación exhaustiva que nadie lee, firmas redundantes. |
| **Transporte** | **Traspasos (*Handoffs*)** | Pasar la tarea de analista a dev, de dev a tester (pérdida de contexto). |
| **Movimiento** | **Cambio de contexto / Búsqueda de datos** | Dev navegando mails y sistemas buscando datos no documentados. |
| **Espera** | **Retrasos / Esperas (*Delays*)** | Esperar aprobación del PO, esperar que liberen ambiente de test. |
| **Defectos** | **Defectos y Retrabajo (*Defects / Bugs*)** | Errores que obligan a rehacer código ya "terminado". |
| *(Extra)* | **Talento no aprovechado** | No escuchar ideas del equipo, seniors copiando y pegando. |

### C. Método Kanban: Prácticas y Métricas
* **Las 6 Prácticas Generales de Kanban:**
  1. Visualizar el flujo (el Tablero).
  2. Limitar el trabajo en proceso (WIP Limits).
  3. Gestionar y medir el flujo.
  4. Hacer las políticas explícitas (DoD, reglas de pull, bloqueos).
  5. Implementar bucles de retroalimentación (reuniones de revisión/cadencias).
  6. Mejorar colaborativamente, evolucionar experimentalmente.
* **Métricas Clave:**
  - **Lead Time (Tiempo de Entrega):** Desde que el cliente crea la solicitud hasta que está desplegada en Producción.
  - **Cycle Time (Tiempo de Ciclo):** Desde que el equipo **inicia el trabajo activo** hasta que se finaliza.
  - **Throughput (Rendimiento):** Cantidad de ítems terminados por unidad de tiempo (ej. 10 tareas/semana).
  - **Ley de Little (*Little's Law*):** $\text{Lead Time} = \frac{\text{WIP}}{\text{Throughput}}$ $\to$ Para reducir el tiempo de entrega, **reducir el WIP**.
  - **CFD (Diagrama de Flujo Acumulado):** Distancia vertical = **WIP actual**; distancia horizontal = **Lead Time aproximado**; banda que se ensancha = **cuello de botella**.
* **Clases de Servicio (*Classes of Service*):**
  - **Expedite (Emergencia):** WIP = 1, prioridad absoluta, interrumpe el trabajo normal (*swarming*).
  - **Fecha Fija (*Fixed Date*):** Tareas con vencimiento regulatorio o contractual inamovible.
  - **Estándar:** Requerimientos normales del día a día (FIFO según prioridad).
  - **Intangible:** Tareas técnicas o mejoras que no urgen hoy, pero si no se hacen costarán caro mañana.

---

## 2. UNIDAD 2 (Escalado Ágil): Framework NEXUS (Scrum.org)

* **¿Para qué sirve?** Escalar Scrum para coordinar de **3 a 9 Scrum Teams** trabajando sobre un **único Product Backlog**.
* **El Rol Clave: NIT (*Nexus Integration Team*):**
  - Formado por: **1 Product Owner único**, **1 Scrum Master de Nexus** y miembros técnicos de los equipos.
  - **Responsabilidad principal:** **Detectar, transparentar y resolver DEPENDENCIAS ENTRE EQUIPOS** para asegurar la entrega de un **Incremento Integrado y potencialmente desplegable** al final de cada Sprint.
* **Gatillos de Parcial sobre Nexus:**
  - Si dos equipos tienen dependencias críticas no resueltas: el NIT facilita la conversación entre ellos para alinear sus planes y escala el orden de ítems al PO.
  - El NIT **no** hace el trabajo de los equipos; su foco es la **integración continua y remover bloqueos cross-team**.

---

## 3. UNIDAD 3: Prácticas Continuas y DevOps

### A. Las 3 Prácticas Continuas
1. **Integración Continua (CI):** Los desarrolladores integran código a la rama principal con alta frecuencia (mínimo diario). Cada commit dispara un build automatizado y pruebas unitarias/estáticas. *Objetivo: Detectar errores de integración lo antes posible.*
2. **Entrega Continua (*Continuous Delivery - CD*):** El software siempre está en un estado potencialmente desplegable a producción. El paso a producción se realiza con **un solo clic (aprobación manual del negocio)**.
3. **Despliegue Continuo (*Continuous Deployment - CD*):** Todo cambio que pasa todas las pruebas automatizadas del pipeline **se despliega automáticamente en Producción SIN intervención humana**.

### B. Estrategias de Despliegue en Producción
* **Blue/Green Deployment:** Se tienen dos ambientes idénticos de producción:
  - *Blue* (versión actual atendiendo usuarios) y *Green* (versión nueva recién desplegada).
  - Se hacen pruebas finales en Green y se conmuta el router/balanceador. Si algo falla, el **rollback es instantáneo** (volver a apuntar a Blue).
* **Canary Deployment (Despliegue Canario):**
  - La nueva versión se despliega solo para un pequeño porcentaje de usuarios reales (ej. 5%).
  - Se monitorean errores y métricas; si es estable, se amplía progresivamente al 100%. *Objetivo: Minimizar el radio de daño frente a fallos graves.*

---

## 4. UNIDAD 4: Calidad, Modelos de Proceso y Revisiones Técnicas

### A. Aseguramiento de Calidad (SQA) vs. Control de Calidad (QC)
| Dimensión | SQA (Aseguramiento de Calidad) | QC (Control de Calidad / Testing) |
| :--- | :--- | :--- |
| **Foco principal** | Al **PROCESO** de desarrollo | Al **PRODUCTO** (código y ejecutables) |
| **Enfoque temporal** | **Preventivo** (durante todo el ciclo de vida) | **Correctivo / Detectivo** (cuando hay artefactos) |
| **Responsables** | Grupo de Aseguramiento de Calidad (GAC / SQA) | Testers y Desarrolladores |
| **Independencia** | **Obligatoriamente independiente** del líder de proyecto (reporta a gerencia) | Integrado al equipo de desarrollo / proyecto |
| **Actividades** | Auditar cumplimiento de estándares, definir metodologías | Ejecutar casos de prueba, reportar bugs |

### B. Auditorías de Software
* Proceso formal y documentado para evaluar evidencia y verificar cumplimiento de criterios.
* **Clasificación de Hallazgos (Cazabobos Fijo):**
  - **No Conformidad Mayor:** Incumplimiento sistemático o grave de un estándar o procedimiento obligatorio que afecta directamente la calidad.
  - **No Conformidad Menor:** Incumplimiento puntual, aislado o no sistemático que no pone en riesgo crítico el proceso.
  - **Observación / Oportunidad de Mejora:** Recomendación preventiva para optimizar; no constituye incumplimiento.

### C. Revisiones Técnicas: Walkthrough vs. Inspección de Fagan
| Atributo | Walkthrough (Recorrido) | Inspección de Fagan (1976) |
| :--- | :--- | :--- |
| **Formalidad** | **Informal** | **Formal y rigurosa** (con métricas y listas de control) |
| **Liderazgo** | Liderado por el **Autor** del artefacto | Liderado por un **Moderador neutral capacitado** (el autor NUNCA modera) |
| **Objetivo** | Difusión, consenso, aprendizaje conjunto | **Detección sistemática de defectos** |
| **Roles clave** | Autor y revisores | Moderador, Autor, Lector (lee en voz alta), Inspector (caza defectos) |
| **Duración máxima** | Flexible (1 a 2 horas) | **MÁXIMO 2 HORAS** (después la concentración cae y no se detectan fallos) |
| **Regla de Oro** | Se pueden intercambiar ideas | **PROHIBIDO DISCUTIR SOLUCIONES**. Solo se registran defectos; el autor corrige luego (*rework*). |

### D. Modelos de Calidad de PROCESO (CMMI, SPICE, ISO 9001)
1. **CMMI (*Capability Maturity Model Integration*):**
   * **Representación Escalonada (*Staged* - 5 Niveles de Madurez Organizacional):**
     - **Nivel 1 (Inicial):** Caótico, reactivo, éxito dependiente de esfuerzos individuales heroicos.
     - **Nivel 2 (Gestionado / Administrado):** Control **a nivel proyecto individual**. Se planifica, se gestionan requerimientos, monitoreo y aseguramiento básico.
     - **Nivel 3 (Definido):** Procesos estandarizados y documentados **a nivel organización entera** (activos de procesos organizacionales).
     - **Nivel 4 (Gestionado Cuantitativamente):** Control estadístico de procesos; objetivos cuantitativos de calidad y rendimiento predecibles.
     - **Nivel 5 (En Optimización):** Mejora continua proactiva, análisis de causa raíz e innovación tecnológica.
   * **Representación Continua (*Continuous*):** Mide la capacidad de áreas de proceso individuales en 4 niveles (0 Incompleto, 1 Realizado, 2 Gestionado, 3 Definido).
   * **SCAMPI:** Método oficial de evaluación y certificación formal de CMMI.
2. **SPICE (ISO/IEC 15504 / Serie ISO/IEC 33000):** Estándar internacional para la evaluación y mejora de la capacidad de los procesos de software.
3. **ISO 9001:** Norma genérica de Sistemas de Gestión de Calidad (SGC) basada en procesos, ciclo PDCA/PHVA y satisfacción del cliente.

---

## 5. UNIDAD 4: Testing de Software y TDD

### A. Trilogía Fundamental de Defectos
* **Error (Equivocación humana):** Acción humana errónea cometida por el programador o analista (ej. confundir un `<` con `<=`).
* **Defecto / Bug (En el artefacto):** La manifestación estática del error en el código fuente, diseño o requerimiento.
* **Falla (*Failure* - En ejecución):** El comportamiento incorrecto observable en tiempo de ejecución por el usuario o tester.
$$\text{Error (Humano)} \longrightarrow \text{Defecto/Bug (Código)} \longrightarrow \text{Falla (Ejecución)}$$

### B. Severidad vs. Prioridad de un Defecto
* **Severidad (Técnica):** Impacto del defecto sobre el funcionamiento del sistema (Bloqueante, Crítico, Mayor, Menor).
* **Prioridad (Negocio):** Urgencia comercial con la que el defecto debe ser corregido (Alta, Media, Baja).
* *Ejemplo clásico:* Un error de ortografía en el logo de la pantalla principal tiene **Severidad Baja** (no rompe nada) pero **Prioridad Alta** (impacto visual de marca).

### C. Los 7 Principios Fundamentales del Testing (ISTQB)
1. **El testing demuestra la presencia de defectos, NO su ausencia:** Probar mucho encuentra bugs, pero jamás prueba que no quede ninguno.
2. **El testing exhaustivo es imposible:** No se pueden probar todas las combinaciones de datos; se aplican técnicas de riesgo y valores límite.
3. **El testing temprano ahorra tiempo y dinero:** Mientras antes se detecta un error, exponencialmente más barato es arreglarlo (Principio del turno hacia la izquierda / *Shift-Left*).
4. **Agrupación de defectos (*Defect Clustering* / Principio de Pareto):** El 80% de los defectos se concentra en el 20% de los módulos.
5. **Paradoja del pesticida:** Si se repiten las mismas pruebas una y otra vez, dejan de encontrar defectos nuevos; hay que actualizar los casos.
6. **El testing depende del contexto:** No se prueba igual un e-commerce que un software de aviónica o marcapasos.
7. **La falacia de ausencia de errores:** Un sistema 100% libre de bugs no sirve de nada si no cumple con las necesidades reales del usuario.

### D. Niveles de Prueba y Tipos
* **4 Niveles de Prueba (Granularidad Inversa):**
  1. *Pruebas Unitarias:* Prueban componentes individuales aislados (hechas por desarrolladores).
  2. *Pruebas de Integración:* Prueban la interacción y comunicación entre módulos o servicios.
  3. *Pruebas de Sistema:* Prueban el sistema completo integrado frente a requerimientos funcionales y no funcionales.
  4. *Pruebas de Aceptación (UAT):* Validan si el producto es apto para su entrega al cliente o usuario final.
* **Smoke Test (Prueba de Humo):** Conjunto reducido de pruebas críticas que se corren sobre una nueva versión para verificar si es lo suficientemente estable como para iniciar un ciclo de pruebas formal (si falla, el build se rechaza inmediatamente).
* **Pruebas de Regresión:** Re-ejecutar pruebas existentes para verificar que un cambio o corrección de código **no haya roto funcionalidades que antes andaban bien**.

### E. Testing Ágil y TDD
* **Pirámide de Automatización de Testing (Mike Cohn):**
  - **Base ancha (Mayor cantidad):** Pruebas Unitarias automatizadas (rápidas, baratas, aisladas).
  - **Medio:** Pruebas de Integración / Servicios / API.
  - **Cúspide estrecha (Menor cantidad):** Pruebas de UI / End-to-End (lentas, costosas, frágiles).
  - *(Antipatrón a evitar: El "Cono de Helado" donde se automatiza casi todo en UI y poco en unitarias).*
* **Los 4 Cuadrantes del Testing Ágil (Brian Marick / Crispin & Gregory):**
  - **Q1 (Apoya al equipo / Tecnología):** Pruebas unitarias y de componentes (automatizadas, TDD).
  - **Q2 (Apoya al equipo / Negocio):** Pruebas funcionales, historias de usuario, ejemplos (ATDD).
  - **Q3 (Critica el producto / Negocio):** Pruebas exploratorias, usabilidad, UAT.
  - **Q4 (Critica el producto / Tecnología):** Rendimiento, carga, seguridad, compatibilidad.
* **TDD (*Test-Driven Development* - Kent Beck):**
  - **Ciclo Mantra:** **RED** (escribir prueba que falla) $\to$ **GREEN** (escribir el código mínimo para que pase) $\to$ **REFACTOR** (mejorar diseño y código sin alterar comportamiento).
  - **Las 3 Leyes de TDD (Uncle Bob):**
    1. No escribir código de producción sin antes haber escrito una prueba unitaria que falle.
    2. No escribir más de una prueba unitaria que lo suficiente para fallar (la no compilación es un fallo).
    3. No escribir más código de producción que el suficiente para hacer pasar la prueba unitaria que falla.
  - **Patrón AAA en Pruebas Unitarias:**
    - **Arrange (Organizar):** Preparar datos, objetos y precondiciones.
    - **Act (Actuar):** Invocar al método bajo prueba.
    - **Assert (Afirmar):** Verificar que el resultado obtenido coincide exactamente con el esperado.
  - **Dobles de Prueba (*Test Doubles*):**
    - **Stub:** Objeto que devuelve respuestas predefinidas enlatadas (*canned data*) a llamadas hechas durante la prueba.
    - **Mock:** Objeto preprogramado con expectativas de comportamiento; **verifica que ciertos métodos hayan sido llamados** con los parámetros exactos.

---

## 6. APÉNDICE PRÁCTICO: Las 7 Reglas de Oro de Caja Negra (50 Puntos)

1. **PROHIBIDO unificar dos campos distintos en una sola fila:** Si la pantalla tiene dos variables (ej. *Alerón delantero* y *Alerón trasero*, o *Monto universitario* y *Monto de liga*), van en **filas separadas**.
2. **Combos y listas desplegables:** Se particionan como **`Selecciona opción` (Válida)** y **`No selecciona (nulo)` (Inválida)**. Los filtros de la lista van en `Precondiciones`.
3. **Condiciones dependientes (Si X entonces Y):** Se abren dos filas de Entrada (una por cada rama de la condición).
4. **En la columna `Pasos` SOLO actúa el usuario:** El último paso siempre es el clic del usuario (ej. `El vendedor presiona el botón "Confirmar"`). La validación, guardado en BD, mensajes de error y envío de mails van **adentro de `Resultado Esperado`**.
5. **Datos concretos obligatorios en el Caso de Prueba:** Prohibido dejar variables abstractas en la Tabla 2. Usar valores entre comillas: `"Juan Pérez"`, `"$20.000"`, `"img1.jpg"`, `"comprador1@gmail.com"`, y mensajes con texto literal `"Publicado con éxito"`.
6. **Precondiciones completas:** Declarar usuario logueado con rol, fecha actual del sistema (`"30/10/2026"`), opciones de combos cargadas en el sistema, y existencia en la BD o dispositivo de los objetos/archivos que el caso necesita.
7. **Para un Caso de Prueba de FALLA:**
   - Se ingresa **UN SOLO DATO INVÁLIDO** a propósito (ej. foto que no coincide con DNI o donación menor al mínimo).
   - Se cubre la clase de **Entrada INVÁLIDA** que provocó el error y la clase de **Salida INVÁLIDA** del mensaje de error específico.
