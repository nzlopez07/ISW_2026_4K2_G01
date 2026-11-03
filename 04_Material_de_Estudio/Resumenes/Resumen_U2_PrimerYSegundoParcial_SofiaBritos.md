# Unidad 2 Agile - Scrum

# **Filosofía Ágil**

La **Filosofía Ágil** (o *Agilismo*) no es un proceso prescriptivo, una metodología rígida ni un conjunto de reglas estáticas; es una **ideología y una cultura de trabajo** guiada por valores y principios orientados a adaptar el desarrollo de productos a entornos complejos e inciertos.

Como sintetizó Martin Fowler, la agilidad representa un *"compromiso útil entre nada de proceso y demasiado proceso"*, priorizando la capacidad de respuesta y el factor humano por encima de la burocracia.

### El Origen: El Manifiesto Ágil (2001)

En febrero de 2001, 17 líderes y consultores del desarrollo de software (entre ellos Kent Beck, Martin Fowler, Ken Schwaber, Jeff Sutherland, Alistair Cockburn y Robert C. Martin) se reunieron en Snowbird, Utah, para buscar una alternativa a las metodologías tradicionales orientadas a planes rígidos. De esa reunión surgió el **Manifiesto por el Desarrollo Ágil de Software**, el cual declara cuatro valores fundamentales:

1. **Individuos e interacciones** sobre procesos y herramientas.
2. **Software funcionando** sobre documentación exhaustiva.
3. **Colaboración con el cliente** sobre negociación contractual.
4. **Respuesta ante el cambio** sobre el seguimiento de un plan.

> *Aclaración clave del Manifiesto:* Aunque existe valor en los elementos de la derecha, los agilistas valoran más los elementos de la izquierda.
> 

### Los 12 Principios del Manifiesto Ágil

Los cuatro valores se sustentan en **12 principios rectores**, organizados en cuatro grandes pilares estratégicos:

- **Entrega de Valor y Satisfacción del Cliente:**
    1. La mayor prioridad es satisfacer al cliente mediante **entregas tempranas y continuas de software valioso**.
    2. El software funcionando es la **principal medida de progreso**.
    3. Entregar software funcional con frecuencia (de un par de semanas a un par de meses).
- **Adaptación Continua:**
4. Los requisitos cambiantes son bienvenidos, incluso en etapas tardías, para ofrecer ventajas competitivas al cliente.
5. La simplicidad es esencial: es el arte de **maximizar la cantidad de trabajo no realizado**.
- **Personas y Colaboración:**
6. Las personas de negocio y los desarrolladores deben **trabajar juntos diariamente**.
7. Construir proyectos en torno a **individuos motivados**, dándoles el entorno y la confianza necesaria.
8. La **conversación cara a cara** es el método más eficiente de transmitir información.
9. Las mejores arquitecturas, requerimientos y diseños emergen de **equipos autoorganizados**.
- **Excelencia Técnica y Sostenibilidad:**
10. Los procesos ágiles promueven el **desarrollo sostenible**: patrocinadores, desarrolladores y usuarios deben poder mantener un ritmo constante de forma indefinida.
11. La atención continua a la **excelencia técnica y al buen diseño** mejora la agilidad.
12. A intervalos regulares, el equipo **reflexiona sobre cómo ser más eficaz** para ajustar y perfeccionar su comportamiento en consecuencia (*retrospectivas*).

### El Fundamento Teórico: Control de Procesos Empírico

Frente a los modelos tradicionales que asumen un proceso definido y determinista, la filosofía ágil se fundamenta en el **empirismo**. Esto significa que las decisiones se toman basadas en la experiencia real y la observación de resultados, apoyándose en tres pilares:

1. **Transparencia:** Todos los aspectos significativos del proceso deben ser visibles para quienes ejecutan y reciben el trabajo.
2. **Inspección:** Evaluación frecuente de los artefactos y el progreso para detectar desviaciones.
3. **Adaptación:** Ajuste inmediato del producto o del proceso cuando se identifica un desvío.

### Mitos y Malentendidos Habituales ("Ágil no es Caos")

En la práctica profesional, el término "ágil" a menudo se malinterpreta o se aplica de manera incorrecta:

- **Mito 1: "Ser ágil es no planificar ni documentar"**
    - **Realidad:** Ágil combate el costo del desperdicio generado por el *BRUF* (*Big Requirements Up Front* o análisis masivo por adelantado). No elimina la planificación, sino que adopta una **planificación continua y adaptativa a múltiples niveles** con documentación *Lean* (solo la necesaria que agregue valor).
- **Mito 2: "Ágil es sinónimo de indisciplina o cowboy programming"**
    - **Realidad:** Ser ágil exige **prácticas de ingeniería muy disciplinadas** (como refactorización constante, TDD, integración continua y pruebas automatizadas concurrentes) para evitar la acumulación de Deuda Técnica y sostener la velocidad.
- **Mito 3: "Agile es Scrum"**
    - **Realidad:** Ágil es la filosofía o "sombrilla" conceptual. Scrum, Kanban, Extreme Programming (XP), FDD y Crystal son marcos de trabajo o metodologías específicas que implementan dicha filosofía.

---

## ¿Qué es Ágil?

**Ágil** no es una metodología prescriptiva ni un conjunto de reglas rígidas, sino una **filosofía e ideología de trabajo** orientada a guiar el desarrollo de productos en entornos complejos y cambiantes. Martin Fowler definió el agilismo como *"un compromiso útil entre nada de proceso y demasiado proceso"*, caracterizándose por ser adaptable en lugar de predictivo y por estar centrado en las personas más que en los procesos mecánicos.

Su fundamento conceptual y formal nació en 2001 con el **Manifiesto por el Desarrollo Ágil de Software**, el cual establece cuatro valores esenciales:

- **Individuos e interacciones** sobre procesos y herramientas.
- **Software funcionando** sobre documentación exhaustiva.
- **Colaboración con el cliente** sobre negociación contractual.
- **Respuesta ante el cambio** sobre el seguimiento de un plan.

A nivel teórico, la agilidad se sostiene sobre el **control de procesos empírico**, el cual reemplaza la planificación rígida por adelantado por el aprendizaje basado en la experiencia, la observación directa y sus tres pilares rectores: **transparencia, inspección y adaptación continua**.

### Desarrollo de Software y Frameworks Ágiles

En el desarrollo de software, la filosofía ágil se implementa mediante un enfoque **iterativo e incremental**, reduciendo la burocracia y eliminando el desperdicio de la planificación masiva inicial (*BRUF* o *Big Requirements Up Front*).

Bajo la "sombrilla" conceptual de Ágil existen diversos **marcos de trabajo (*frameworks*) y metodologías**, entre los cuales destacan:

1. **Scrum:** Es el marco de trabajo ágil más utilizado. Organiza la gestión mediante ciclos temporales de duración fija llamados *sprints* (habitualmente de 1 a 4 semanas) donde un equipo multidisciplinario construye un incremento ejecutable y potencialmente liberable de software.
2. **Kanban:** Es un sistema de planificación de tipo *pull* centrado en **visualizar el flujo de trabajo** y **limitar el trabajo en progreso (*WIP*)**. A diferencia de Scrum, no prescribe iteraciones rígidas con *timebox*, sino que optimiza el flujo continuo y la entrega bajo demanda.
3. **Extreme Programming (XP):** Enfocado fuertemente en las **prácticas de ingeniería y la excelencia técnica**. Introduce técnicas clave como el Desarrollo Guiado por Pruebas (TDD), la programación en parejas, la refactorización continua y la integración continua.
4. **Otros modelos ágiles:** Incluyen *Lean Software Development* (centrado en la eliminación de desperdicios), *Feature-Driven Development* (FDD), la familia *Crystal* y el Modelado Ágil.

## ¿Por qué elegir Ágil?

Adoptar un enfoque ágil ofrece ventajas estratégicas decisivas en la industria moderna de software:

- **Gestión efectiva de la incertidumbre y el cambio:** Los requerimientos cambiantes dejan de verse como un obstáculo y se convierten en una **ventaja competitiva**, permitiendo adaptar el producto a las necesidades reales del mercado en cualquier etapa del proyecto.
- **Reducción drástica del desperdicio:** Estudios clásicos de la industria muestran que en proyectos tradicionales con requerimientos cerrados por adelantado (*BRUF*), hasta un **45% de las funcionalidades desarrolladas nunca llegan a utilizarse**. Ágil evita esto priorizando únicamente el trabajo que agrega valor inmediato.
- **Aceleración del tiempo de salida al mercado (*Time-to-Market*):** Permite realizar entregas tempranas y frecuentes de software funcional mediante un **Mínimo Producto Viable (MVP)**, obteniendo retroalimentación real de los usuarios en semanas en lugar de meses o años.
- **Visibilidad y transparencia del proceso:** Tanto el cliente como el equipo tienen visibilidad constante sobre el estado real del desarrollo y los cuellos de botella, lo que fomenta la colaboración y la resolución proactiva de impedimentos.
- **Sostenibilidad y motivación del equipo:** Promueve un ritmo de trabajo constante y sostenible, empoderando a equipos autoorganizados para tomar decisiones de diseño y arquitectura de forma colaborativa.

Tanto **Scrum** como **Kanban** son herramientas de proceso enmarcadas dentro del pensamiento *Lean* y la filosofía ágil, diseñadas para ayudar a los equipos a optimizar su trabajo de forma transparente y adaptable. Sin embargo, la diferencia principal radica en su **nivel de prescripción** (cantidad de reglas formales) y en su **gestión del flujo de trabajo y del tiempo**.

### Puntos en Común (Similitudes)

A pesar de sus diferencias de implementación, ambos marcos comparten la misma raíz filosófica:

- **Fundamento empírico:** Ambos se basan en la inspección, la adaptación continua y la experimentación (*Kaizen*) para mejorar el proceso.
- **Sistemas tipo *Pull*:** El equipo no recibe trabajo "empujado" desde afuera, sino que "tira" de las tareas de la cola de trabajo únicamente cuando dispone de capacidad para procesarlas.
- **Limitación del Trabajo en Curso (WIP):** Ambos limitan la cantidad de tareas simultáneas para evitar la multitarea, reducir cuellos de botella y acelerar la entrega.
- **Visibilidad del proceso:** Utilizan la visualización del flujo mediante tableros para revelar problemas y cuellos de botella.
- **Entregas tempranas y frecuentes:** Priorizan la entrega continua de software funcional y valioso al cliente.

### Diferencias Clave entre Scrum y Kanban

| Criterio | Scrum | Kanban |
| --- | --- | --- |
| **Nivel de Prescripción** | **Más prescriptivo.** Prescribe 3 roles fijos (Product Owner, Scrum Master, Equipo), 4 eventos regulares y artefactos definidos. | **Más adaptativo y ligero.** No prescribe roles ni reuniones fijas; únicamente exige **visualizar el flujo** y **limitar el WIP**. |
| **Gestión del Tiempo** | Utiliza **iteraciones de duración fija** (*sprints* de 1 a 4 semanas) donde se congela un compromiso de entrega. | Funciona con un **flujo continuo** de trabajo; la cadencia de planificación y despliegue se desacopla y adapta de forma fluida. |
| **Limitación del WIP** | Limita el WIP **por unidad de tiempo** (se compromete un volumen de trabajo determinado por el tamaño o velocidad del Sprint). | Limita el WIP **por estado o columna del tablero** de manera explícita (p. ej. máximo 2 tareas en la columna "En Desarrollo"). |
| **Tolerancia al Cambio** | **Se resiste al cambio durante el Sprint.** Una vez iniciado el Sprint Backlog, no se introducen nuevas tareas salvo emergencia. | **Permite cambios de prioridad continuos.** El Product Owner puede reorganizar la cola de entrada en cualquier momento mientras haya capacidad. |
| **Métricas Principales** | Se evalúa fundamentalmente mediante la **Velocidad** (puntos de historia o tareas completadas por iteración). | Se evalúa mediante el **Lead Time / Cycle Time** (tiempo medio que tarda una tarea desde que entra hasta que se entrega) y el rendimiento (*Throughput*). |

### Criterios de Selección: ¿Cuándo elegir cada uno?

**Elegir Scrum cuando:**

- El proyecto implica la construcción de un **producto nuevo o complejo**, donde establecer un ritmo de entregas regulares por *Sprint* ayuda a enfocar al equipo y brindar certidumbre al negocio.
- La organización o el equipo requieren una **estructura clara de roles y reuniones fijas** para coordinarse y mantenerse alineados.
- Las actividades de desarrollo se pueden planificar con relativa estabilidad en bloques de 1 a 4 semanas sin sufrir interrupciones urgentes de forma constante.

**Elegir Kanban cuando:**

- El entorno de trabajo es **altamente reactivo o conducido por eventos**, como equipos de mantenimiento, soporte técnico, operaciones informáticas o corrección de errores en producción, donde las prioridades cambian de un momento a otro.
- Se desea **introducir mejoras progresivas en un proceso existente** sin alterar traumáticamente los roles ni las estructuras organizacionales de la empresa.
- Se busca optimizar el flujo de trabajo de extremo a extremo, reduciendo los tiempos de espera (*Lead Time*) y eliminando cuellos de botella acumulados.

### La Convergencia (*Scrumban*)

Como señala Henrik Kniberg en la literatura de la cátedra, ambos marcos no son mutuamente excluyentes y se pueden combinar. De hecho, es muy común que equipos de Scrum maduros adopten límites explícitos de WIP en las columnas de sus tableros (convirtiéndolos en tableros Kanban), o que equipos Kanban adopten reuniones diarias de sincronización o retrospectivas periódicas (*Scrumban*).

### Top de Técnicas Efectivas en Agile

- **Historias de Usuario (User Stories) con las 3C e INVEST:** Representan expresiones de intención y conversaciones centradas en el usuario en lugar de pliegos de especificaciones rígidos. Se estructuran en tres partes: **Tarjeta** (frase resumen), **Conversación** (diálogo para acordar detalles) y **Confirmación** (Criterios de Aceptación). Se evalúan bajo el acrónimo **INVEST** (Independientes, Negociables, Valiosas, Estimables, Pequeñas y Probables/Testeables).
- **Aseo y Refinamiento del Backlog (*Backlog Grooming / Triage*):** Priorización activa y revisión periódica del *Product Backlog*. Consiste en dividir historias grandes, clarificar criterios y purgar de manera continua el material obsoleto para mantener el trabajo enfocado.
- **Estimación Relativa y Planning Poker:** Técnica colaborativa que utiliza la "sabiduría colectiva" del equipo para estimar el esfuerzo o complejidad de las historias mediante puntos de historia en lugar de horas absolutas, comparándolas contra una *Historia Canónica* que actúa como patrón de medida.
- **Límites de Trabajo en Progreso (WIP) y Tableros Visuales:** Técnica central de Kanban que limita la cantidad de tareas simultáneas en cada columna del flujo de trabajo. Esto evita la multitarea, expone cuellos de botella y maximiza el flujo continuo de valor de extremo a extremo.
- **Spikes (Historias de Investigación):** Tipo especial de historia de tiempo acotado (*timeboxed*) que se utiliza para explorar una incógnita tecnológica o funcional y eliminar el riesgo o la incertidumbre antes de estimar e implementar una historia definitiva.
- **Desarrollo Guiado por Pruebas de Aceptación (ATDD) y TDD:** Práctica de ingeniería donde los criterios de aceptación de las Historias de Usuario se traducen en ejemplos concisos y pruebas automatizadas antes de escribir el código fuente.
- **Retrospectivas Frecuentes:** Encuentros regulares al final de cada iteración donde el equipo inspecciona su proceso, analiza lo que funcionó y lo que no, y acuerda experimentos de mejora para la siguiente iteración.

## Dominio del Problema vs. Dominio de la Solución

La ingeniería de requerimientos organiza estos tipos de requerimientos dividiéndolos formalmente entre dos dominios conceptuales:

```
                     ▲
                    ╱ ╲
                   ╱   ╲  Requerimientos de Negocio  ┐
                  ╱     ╲                            ├─ DOMINIO DEL PROBLEMA
                 ╱───────╲ Requerimientos de Usuario  ┘
                ╱         ╲
               ╱───────────╲ Requerimientos de Software ─ DOMINIO DE LA SOLUCIÓN
              ───────────────
```

#### Dominio del Problema (El "Qué" y el "Por qué")

Comprende las necesidades, metas u objetivos de la organización y de los usuarios finales, expresados en el lenguaje del negocio y sin prescribir decisiones tecnológicas.

- **Requerimientos de Negocio:** Definen el propósito estratégico y el cambio esperado (por ejemplo: *"Disminuir en un X% el tiempo invertido en procesos manuales de atención al cliente"*).
- **Requerimientos de Usuario (Historias de Usuario y Épicas):** Expresan lo que el usuario necesita lograr en su trabajo diario (por ejemplo: *"Realizar consultas en línea del estado de cuenta de los clientes"*).
- *Regla Ágil:* El *Product Owner* y los clientes deben mantener las Historias de Usuario en este dominio, enfocándose en los objetivos de negocio y dejando la solución en manos del equipo técnico.

#### Dominio de la Solución (El "Cómo")

Comprende la traducción técnica y las decisiones de diseño, arquitectura e implementación necesarias para responder a las necesidades del problema.

- **Requerimientos de Software Funcionales y No Funcionales:** Especifican el comportamiento detallado del sistema, los formatos, el rendimiento y las restricciones legales o de seguridad (por ejemplo: *"Generar reporte de saldos en formato PDF"* o *"Cumplir niveles de seguridad según la ley bancaria"*).
- **Requerimientos de Implementación, Historias Técnicas y Tareas:** Decisiones de infraestructura, bases de datos, servidores, refactorización de código o configuraciones (por ejemplo: *"Configurar servidores en la nube"* o *"Indexar la tabla de eventos"*).

# Gestión Ágil de Requerimientos de Software

La **Gestión Ágil de Requerimientos** reemplaza la especificación masiva inicial de requerimientos (*Big Requirements Up Front - BRUF*) por un proceso evolutivo, colaborativo e incremental. Los requerimientos no se consideran un contrato inflexible, sino **expresiones de intención** orientadas a generar conversaciones continuas con el negocio.

### Niveles de Abstracción en Requerimientos Ágiles

Los requerimientos se organizan de forma jerárquica para facilitar su análisis y refinamiento gradual:

- **Temas (*Themes*):** Colecciones de historias de usuario y épicas relacionadas que comparten un objetivo de negocio común.
- **Épicas (*Epics*):** Historias de gran tamaño e incertidumbre que no caben en un solo *Sprint* y deben descomponerse en historias más pequeñas antes de su desarrollo.
- **Historias de Usuario (*User Stories*):** Unidades fundamentales de trabajo que describen una funcionalidad deseada desde la perspectiva del usuario y aportan valor directo. Se componen de las **3 C**:
    1. **Tarjeta (*Card*):** Frase sintética que sigue el formato *"Como [rol], quiero [funcionalidad], para [beneficio/valor]"*.
    2. **Conversación (*Conversation*):** Diálogo entre el equipo técnico y el cliente/Product Owner para descubrir detalles y resolver dudas.
    3. **Confirmación (*Confirmation*):** Criterios de Aceptación que definen las condiciones específicas bajo las cuales la historia se considera terminada (*Done*).
- **Spikes (Historias de Investigación):** Historias especiales de tiempo acotado (*timeboxed*) diseñadas para reducir el riesgo técnico o funcional antes de estimar o implementar una historia definitiva.
- **Tareas (*Tasks*):** Unidades técnicas de trabajo en las que los desarrolladores desglosan una Historia de Usuario para su ejecución concreta en el *Sprint*.

### Triángulos de Gestión: Dirigido por Plan (Tradicional) vs. Dirigido por Valor (Ágil)

La diferencia fundamental en la administración de proyectos entre el paradigma tradicional y el ágil radica en cuáles variables de la **Triple Restricción** se mantienen **Fijas** y cuáles son **Estimadas/Variables**:

**A. Triángulo Tradicional (Dirigido por Plan / *Plan-Driven*):** El modelo prescriptivo congela el alcance al inicio y calcula el tiempo y costo necesarios para cumplirlo.

```
               ▲  [FIJO]
              ╱ ╲
             ╱   ╲  ALCANCE (Especificación cerrada)
            ╱     ╲
   [ESTIMADO]───────[ESTIMADO]
     TIEMPO         COSTO / RECURSOS
```

- **Alcance:** **FIJO.** Se especifica y congela por contrato al inicio del proyecto.
- **Tiempo y Costo:** **ESTIMADOS / VARIABLES.** Si surgen imprevistos o retrasos, se extienden los plazos o se incrementa el presupuesto.

**B. Triángulo Ágil (Dirigido por Valor / *Value-Driven*):** El modelo empírico congela el tiempo y el costo en *timeboxes* fijos, ajustando el alcance según las prioridades del negocio.

```
     TIEMPO         COSTO / RECURSOS
   [FIJO]───────────[FIJO]
            ╲     ╱
             ╲   ╱  ALCANCE (Backlog Priorizado)
              ╲ ╱
               ▼  [VARIABLE / ESTIMADO]
```

- **Tiempo y Costo:** **FIJOS.** Duración acotada de iteraciones (*Sprints* de 1 a 4 semanas) y presupuesto/equipo constante de consumo financiero.
- **Alcance:** **VARIABLE Y NEGOCIABLE.** Si no se alcanza a completar todo lo previsto en el *Sprint*, se reduce el alcance liberando las historias de menor prioridad, manteniendo fija la fecha de entrega.

### Cuadro Comparativo Completo: Tradicional vs. Ágil

| Dimensión | Enfoque Tradicional (Dirigido por Plan) | Enfoque Ágil (Dirigido por Valor) |
| --- | --- | --- |
| **Paradigma de Proceso** | **Proceso Definido:** Inspirado en la manufactura; asume predictibilidad y repetibilidad. | **Proceso Empírico:** Diseñado para entornos complejos; basado en transparencia, inspección y adaptación. |
| **Gestión de Requerimientos** | Especificación exhaustiva por adelantado (*BRUF*). Requerimientos cerrados. | Refinamiento continuo y gradual vía *Product Backlog* e Historias de Usuario. |
| **Manejo del Cambio** | El cambio se considera un desvío o riesgo que debe evitarse mediante control de cambios formal. | El cambio es bienvenido incluso en etapas tardías para brindar ventaja competitiva al cliente. |
| **Estrategia de Entrega** | Entrega única y masiva del producto completo al finalizar el proyecto. | Entregas tempranas, frecuentes e incrementales de software funcional (MVP / MMF). |
| **Rol del Cliente** | Participa principalmente al inicio (definición de pliego) y al final (aceptación). | Colaboración diaria y continua con el equipo ( Product Owner activo). |
| **Medida de Progreso** | Avance según cronograma de tareas y cumplimiento de hitos documentales. | **Software funcionando** que aporta valor real al negocio. |
| **Diseño y Arquitectura** | Arquitectura masiva definida por completo por adelantado (*BDUF*). | Arquitectura emergente y evolutiva mediante refactorización continua. |
| **Criterio de Éxito** | Cumplimiento estricto del plan de proyecto (Alcance, Tiempo y Costo). | Maximizar el valor entregado y la adopción del usuario evitando el desperdicio. |

---

# User Stories (Historias de Usuario)

Las **Historias de Usuario** no son especificaciones detalladas ni exhaustivas de requerimientos como los casos de uso tradicionales. Son expresiones de intención que describen una funcionalidad o necesidad desde la perspectiva del usuario o cliente, redactadas en su propio lenguaje de negocio.

Su propósito principal es servir como un *token* o invitación para generar una conversación directa entre el cliente/Product Owner y el equipo de desarrollo, permitiendo diferir el análisis detallado hasta justo antes de iniciar la implementación.

### Partes y Estructura de una User Story

La estructura y ciclo de vida de una historia de usuario se compone formalmente de las **3 C**:

1. **Tarjeta (*Card*):** La representación física o sintética escrita de la historia que captura la intención del requerimiento. Utiliza la plantilla estándar:
    
    > *"Como `<rol / tipo de usuario>`, quiero `<actividad / funcionalidad>`, para `<beneficio / valor de negocio>`"*.
    > 
2. **Conversación (*Conversation*):** El diálogo verbal continuo entre el Product Owner y el equipo técnico para profundizar en los detalles y resolver dudas en el momento en que se va a desarrollar la historia.
3. **Confirmación (*Confirmation*):** Los **Criterios de Aceptación** y pruebas asociadas que definen los límites funcionales y las condiciones específicas que deben cumplirse para validar que la historia provee valor y está terminada (*Done*).

Adicionalmente, para asegurar su calidad antes de entrar al desarrollo, una historia debe responder al modelo **INVEST**:

- **I - Independent (Independiente):** Es posible calendarizarla e implementarla en cualquier orden sin dependencias bloqueantes.
- **N - Negotiable (Negociable):** Establece el "qué" se necesita, manteniendo abierto el "cómo" técnico.
- **V - Valuable (Valiosa):** Aporta valor perceptible y directo al cliente o usuario.
- **E - Estimatable (Estimable):** Presenta suficiente claridad para que el equipo evalúe su esfuerzo relativo.
- **S - Small (Pequeña):** Posee el tamaño adecuado para ser completada dentro de una única iteración o *Sprint*.
- **T - Testable (Demostrable / Testeable):** Contiene criterios claros para derivar pruebas que confirmen su correcto funcionamiento.

### Product Owner (Dueño del Producto)

El **Product Owner** es el rol responsable de representar la voz del cliente, de los usuarios y de las partes interesadas dentro del equipo ágil. Entre sus responsabilidades principales destacan:

- **Definir el "Qué" y el "Por Qué":** Establece los objetivos y requerimientos de negocio sin prescribir soluciones técnicas, dejando las decisiones de diseño e implementación al equipo de desarrollo.
- **Priorizar el Product Backlog:** Es el único rol autorizado para ordenar los elementos de la pila según su importancia, valor comercial, retorno de inversión y riesgo.
- **Clarificar y Aceptar Entregables:** Responde dudas sobre el negocio, define los criterios de aceptación y evalúa el software funcionando al final de cada iteración para aprobar o solicitar correcciones sobre el trabajo.

### Product Backlog (Pila del Producto)

El **Product Backlog** es la lista priorizada, viva y dinámica que concentra todos los requerimientos, funcionalidades, historias de usuario, mejoras y tareas necesarias para el producto.

- **Estructura Dinámica y Mapeo de Detalle:** Los ítems de **alta prioridad** se ubican en la parte superior con un **mayor nivel de detalle** y estimación para ser desarrollados en los próximos *Sprints*; los ítems de **baja prioridad** se sitúan abajo con **menor detalle** o en niveles de abstracción más altos (como Épicas o Temas).
- **Enfocado en el Negocio:** Está compuesto casi en su totalidad por elementos expresados en la terminología del cliente, lo que permite al Product Owner realizar intercambios de alcance de forma sencilla.
- **Evolutivo:** Crece y cambia a medida que se obtiene nuevo conocimiento sobre el producto y el mercado, permitiendo reordenar, agregar o remover elementos en cualquier momento.

### Historias de Usuario como Artefacto Multipropósito

Una Historia de Usuario no es una especificación técnica cerrada ni una simple tarea; la literatura de la cátedra señala que es un **artefacto multipropósito** porque cumple simultáneamente cinco funciones esenciales en el proyecto:

- **Una necesidad del usuario:** Expresa un objetivo o problema real desde la perspectiva de quien utilizará el sistema y en su propio lenguaje de negocio.
- **Una descripción del producto:** Define de forma sintética las capacidades y características operativas que debe poseer el software.
- **Un ítem de planificación:** Sirve como la unidad básica de trabajo que el *Product Owner* prioriza en el *Product Backlog* para ser estimada, asignada e implementada en una iteración o *Sprint*.
- **Un *token* para una conversación:** Funciona como un recordatorio físico o visual (una tarjeta) que invita al diálogo directo entre el cliente y los desarrolladores para descubrir los detalles en el momento oportuno.
- **Un mecanismo para diferir una conversación:** Permite posponer el análisis detallado hasta el último momento responsable (justo antes de iniciar la codificación), evitando la especificación prematura y el desperdicio del análisis masivo por adelantado (*BRUF*).

### Porciones Verticales vs. Porciones Horizontales (*Slicing*)

La forma en que se dividen o rebanan las Historias de Usuario condiciona si el equipo entrega valor real o si genera una cascada disfrazada de agilidad:

```
 ┌────────────────────────────────────────────────────────┐
 │                      GUI / UI                          │
 ├────────────────────────────────────────────────────────┤  ◄─── PORCIÓN HORIZONTAL
 │                 LÓGICA DE NEGOCIO                      │      (Fragmentación por Capa Técnica)
 ├────────────────────────────────────────────────────────┤      [Genera dependencias y no entrega valor]
 │                   BASE DE DATOS                        │
 └────────────────────────────────────────────────────────┘
     ▲                ▲                ▲
     │                │                │
     └────────────────┴────────────────┘
            PORCIÓN VERTICAL
   (Rebanada funcional de extremo a extremo)
   [Entrega valor ejecutable y testeable]
```

- **Porciones Horizontales (Fragmentación por Capas Técnicas - Error / Disfunción):**
    - Ocurre cuando una historia se divide según la arquitectura de componentes del sistema (por ejemplo, crear una historia aislada para las pantallas de la GUI, otra para la Lógica de Negocio y otra para la Base de Datos).
    - **Efecto:** Destruye la entrega incremental de valor, ya que una capa técnica aislada no le sirve al usuario final, transformando las iteraciones en "minicadenas en cascada" donde el software no se puede probar de forma integrada hasta el final.
- **Porciones Verticales (Rebanadas de Valor Funcional - Buena Práctica Ágil):**
    - Consiste en cortar el requerimiento **atravesando todas las capas del sistema** (interfaz, reglas de negocio y persistencia) en un incremento pequeño pero completo.
    - **Efecto:** Permite obtener un resultado funcional ejecutable de extremo a extremo que aporta un valor tangible, admite la realización de pruebas de aceptación reales y permite validar la integración del sistema de manera continua.

### Modelado de Roles (*User Role Modeling*)

Para evitar la falacia de asumir que existe un "único tipo de usuario genérico" para el software, la disciplina aplica el **Modelado de Roles** (basado en el diseño centrado en el uso de Constantine & Lockwood y desarrollado por Mike Cohn). Un **Rol de Usuario** representa una colección de atributos descriptivos que caracterizan a una población específica de usuarios y sus interacciones deseadas con el sistema.

Técnicas principales del Modelado de Roles:

- **Tarjetas y Atributos de Rol:** Definen las características diferenciadoras de cada perfil, tales como la frecuencia de uso del sistema, el nivel de conocimiento del dominio, la pericia tecnológica o sus objetivos de trabajo (por ejemplo, el perfil de un "Reclutador Interno").
- **Mapas de Roles de Usuario (*User Role Maps*):** Diagramas gráficos utilizados para descubrir, organizar y visualizar las relaciones, jerarquías o superposiciones entre los distintos roles identificados.
- **Personas (Personajes):** Representaciones imaginarias pero concretas de un rol a las que se les asigna un nombre, una cara, una historia de vida y detalles realistas para humanizar al usuario y ayudar al equipo a empatizar con sus necesidades reales durante las conversaciones.
- **Personajes Extremos (*Extreme Characters*):** Uso de perfiles límite u opuestos (por ejemplo, diseñar un dispositivo para el Papa, para un traficante o para una joven con múltiples parejas) para descubrir historias o requerimientos no obvios relacionados con la usabilidad, la privacidad o la seguridad.
- **Usuarios Representantes (*Proxies*):** Intermediarios como gerentes, vendedores o expertos del dominio que hablan en nombre del usuario final. La literatura advierte que se deben evitar como fuente única, ya que no siempre reflejan con precisión la experiencia operativa directa de quien utilizará el sistema.

### Criterios de Aceptación (*Acceptance Criteria*)

Los **Criterios de Aceptación** son las condiciones de satisfacción fijadas por el *Product Owner* o cliente para definir los límites de una Historia de Usuario (*User Story*). Expresan los requerimientos funcionales y no funcionales mínimos necesarios para que la historia provea valor real al negocio.

- **Función en el Modelo 3C e INVEST:** Representan la **Confirmación** (la tercera "C") en la tarjeta de la historia de usuario y garantizan el atributo **Testable** (Demostrable / Testeable) del modelo **INVEST**.
- **Propósito:**
    - Establecen una visión compartida del requerimiento entre el *Product Owner*, desarrolladores y *testers*.
    - Definen la intención del requerimiento sin prescribir decisiones de diseño o implementación.
    - Ayudan a los desarrolladores a saber cuándo detener la codificación de una historia.
    - Sirven de insumo principal para que los desarrolladores y *testers* deriven las pruebas concretas.

### Pruebas de Aceptación / Pruebas de Usuario (*Acceptance Testing / UAT*)

Las **Pruebas de Aceptación** (o *Pruebas de Usuario*) constituyen la ejecución práctica o casos de prueba concretos derivados a partir de los criterios de aceptación. Su meta principal es validar que el software se ajusta a las necesidades operativas del usuario y establecer confianza en el sistema antes de su liberación.

- **Proceso de derivación en dos pasos:**
    1. **Identificación al dorso de la tarjeta:** Durante las conversaciones sobre la Historia de Usuario, se anotan las condiciones generales o escenarios clave al dorso de la tarjeta (*Front of Card / Back of Card*).
    2. **Diseño de casos de prueba completos:** Se especifican las entradas concretas, los pasos de ejecución y los resultados esperados expresados en términos de **"Pasa"** (*Pass*) o **"Falla"** (*Fail*).
- **Desarrollo Dirigido por Pruebas de Aceptación (ATDD):** En prácticas avanzadas de ingeniería ágil, las pruebas de aceptación se escriben antes de codificar la solución (*First-Test Development*). Herramientas de automatización como FitNesse, Cucumber o Concordion permiten conectar estas frases en lenguaje de negocio directamente con el código ejecutable.

### Cuadro Comparativo: Criterios vs. Pruebas de Aceptación

| Dimensión | Criterios de Aceptación | Pruebas de Aceptación / Pruebas de Usuario |
| --- | --- | --- |
| **Definición** | **Reglas, límites y condiciones de satisfacción** expresados en alto nivel que debe cumplir la historia. | **Escenarios de prueba concretos y ejecutables** derivados para verificar el cumplimiento de dichas reglas. |
| **Nivel de Abstracción** | **Declarativo / Intención:** Define *qué* debe suceder o qué restricciones existen. | **Procedimental / Escenario:** Especifica datos de entrada, acciones y resultados esperados (*Pasa / Falla*). |
| **Formato Típico** | Listado de reglas de negocio o cláusulas estilo *Given-When-Then* (Dado-Cuando-Entonces). | Casos de prueba con escenarios válidos (*Pasa*) e inválidos (*Falla*). |
| **Momento de Redacción** | Durante el refinamiento del *Product Backlog* y la planificación del *Sprint*. | Se identifican en la conversación y se detallan o automatizan antes y durante la codificación. |

#### Ejemplo Práctico Integrado (Estructura de Examen Parcial)

A continuación se presenta un ejemplo con la plantilla estándar utilizada en las evaluaciones de la cátedra:

> **Historia de Usuario:** *Buscar Destino por Dirección*
> 
> 
> **Descripción:** *"Como Conductor, quiero buscar un destino a partir de una calle y altura, para llegar al lugar deseado sin perderme."*
> 
- **Criterios de Aceptación:**
    1. La altura de la calle debe ser un valor numérico entero y positivo.
    2. El tiempo de respuesta de la búsqueda no debe demorar más de 30 segundos.
    3. La interfaz debe requerir la selección obligatoria de un país y una ciudad válidos.
- **Pruebas de Usuario (Casos de Prueba Pasa / Falla):**
    - Probar buscar un destino en un país y ciudad existentes, ingresando una calle existente y altura válida (pasa).
    - Probar buscar un destino sin seleccionar una ciudad o país de la lista (falla).
    - Probar buscar un destino ingresando un valor alfanumérico o negativo en el campo altura (falla).
    - Probar buscar un destino en una calle inexistente para el país y ciudad seleccionados (falla).

En el desarrollo ágil de software, la **Definición de Listo (*Definition of Ready - DoR*)** y la **Definición de Terminado (*Definition of Done - DoD*)** constituyen dos listas de comprobación y acuerdos explícitos de calidad que evitan malentendidos, reducen el desperdicio y garantizan el flujo continuo de trabajo entre el negocio y el equipo técnico.

### Definición de Listo (*Definition of Ready - DoR*)

La **Definición de Listo** representa el **criterio de entrada (*Entry Criteria*)** que establece las condiciones indispensables que debe cumplir una Historia de Usuario o ítem de la pila (*Product Backlog Item - PBI*) **antes de poder ser aceptado e incorporado en la planificación de un Sprint**. Su objetivo es evitar que el equipo comience a desarrollar historias ambiguas, gigantes o bloqueadas por dependencias externas.

De acuerdo con el modelo de la cátedra, un PBI está "Listo" cuando cumple con la siguiente lista de comprobación:

- **Valor de negocio claro:** El valor y el propósito comercial de la historia están claramente expresados.
- **Comprensión compartida:** Los detalles son suficientemente comprendidos por el equipo para tomar una decisión informada sobre su viabilidad.
- **Dependencias resueltas:** Todas las dependencias técnicas o de terceros han sido identificadas y no existen bloqueos externos que impidan completarla.
- **Estimada y pequeña:** La historia ha sido debidamente estimada por el equipo y es lo suficientemente pequeña para ser "consumida" completamente dentro de un único *Sprint*.
- **Criterios de Aceptación claros:** Contiene criterios de aceptación (y de performance, si aplica) claros, testeables y demostrables.
- **Criterio de demostración:** El equipo comprende exactamente cómo mostrar el incremento durante la *Sprint Review*.

### Definición de Terminado (*Definition of Done - DoD*)

La **Definición de Terminado** representa el **criterio de salida (*Exit Criteria*)** y el estándar de calidad compartido por el equipo que determina cuándo una Historia de Usuario se considera completamente finalizada. Garantiza que el código entregado sea **potencialmente entregable** (*Potentially Shippable*) y libre de Deuda Técnica, evitando que queden tareas pendientes "de desarrollo o pruebas" para más adelante.

A diferencia de los Criterios de Aceptación (que son individuales por historia), la **DoD es transversal y aplica a todas las historias del proyecto**. Según los estándares de la cátedra, incluye:

- **Revisión de diseño y arquitectura:** El diseño ha sido revisado e inspeccionado correctamente.
- **Calidad de código:** El código está completo, refactorizado, comentado, sigue el formato estándar del equipo e inspeccionado.
- **Gestión de Configuración (SCM):** El código ha sido integrado y verificado (*check-in*) en el repositorio central de fuentes.
- **Estrategia de Pruebas completa:** Se han diseñado y ejecutado con éxito las pruebas unitarias, de integración y de sistema.
- **Documentación:** La documentación de usuario y los manuales técnicos han sido actualizados.
- **Aprobación de Calidad:** La historia cuenta con la verificación y visto bueno final del encargado de pruebas (*Tester/QA*) y del *Product Owner* respecto a la intención original del negocio.

### Cuadro Comparativo: DoR vs. DoD vs. Criterios de Aceptación

| Dimensión | Definición de Listo (DoR) | Definición de Terminado (DoD) | Criterios de Aceptación |
| --- | --- | --- | --- |
| **Fase del Ciclo** | **Entrada al Sprint:** Se evalúa antes de comprometer el trabajo en el *Sprint Planning*. | **Salida de la Iteración:** Se evalúa para dar por concluida la historia durante el *Sprint*. | **Transversal al Desarrollo:** Se definen durante el análisis e інforman la codificación y pruebas. |
| **Alcance** | Aplica a **todos los PBIs** que aspiran a entrar a la iteración. | Aplica a **todas las historias y entregables** del equipo por igual. | Es **específico e individual** para cada Historia de Usuario concreta. |
| **Propósito** | Prevenir la entrada de requerimientos maduros a medias e incertidumbres no resueltas. | Garantizar la calidad técnica, evitar la Deuda Técnica y asegurar software potencialmente liberable. | Definir las reglas de negocio particulares para que la historia entregue valor y se sepa cuándo parar de codificar. |
| **Responsable Principal** | El **Product Owner** en colaboración con el equipo durante el refinamiento (*grooming*). | El **Equipo de Desarrollo y QA** de forma colaborativa. | El **Product Owner** en diálogo directo con el cliente y el equipo. |

En las metodologías ágiles (originadas principalmente en Extreme Programming - XP), una **Spike** (o historia de investigación) es un tipo especial de historia utilizada para eliminar el riesgo y la incertidumbre de una Historia de Usuario o de cualquier otra faceta del proyecto antes de estimarla o desarrollarla.

### ¿Por qué se utiliza una Spike?

Cuando una historia es demasiado compleja, vaga o involucra una tecnología desconocida, el equipo no puede estimarla de manera confiable con *Planning Poker* ni garantizar su cumplimiento dentro de un *Sprint*. En lugar de adivinar, el equipo crea una **Spike** de tiempo acotado (*timebox*) para experimentar, prototipar y aprender.

### Clasificación de Spikes

Las Spikes se dividen formalmente en dos categorías según el dominio en el que se ubique la incertidumbre:

```
                             ┌─────────────────┐
                             │     SPIKES      │
                             └────────┬────────┘
                                      │
               ┌──────────────────────┴──────────────────────┐
               ▼                                             ▼
   ┌───────────────────────┐                     ┌───────────────────────┐
   │    SPIKES TÉCNICAS    │                     │   SPIKES FUNCIONALES  │
   │ (Dominio de Solución) │                     │ (Dominio del Problema)│
   └───────────────────────┘                     └───────────────────────┘
```

#### A. Spikes Técnicas (Dominio de la Solución)

- **Propósito:** Se utilizan para investigar enfoques técnicos y ganar confianza en la arquitectura o infraestructura antes de comprometerse con el código definitivo.
- **Casos de uso típicos:**
    - Evaluar el rendimiento o latencia potencial de un componente.
    - Decisión de "Construir vs. Comprar" (*Make or Buy*) de una librería o servicio externo.
    - Probar la integración de una nueva tecnología o API desconocida.
    - Validar si la arquitectura puede soportar un volumen determinado de datos.

#### B. Spikes Funcionales (Dominio del Problema e Interacción)

- **Propósito:** Se utilizan cuando existe incertidumbre sobre cómo el usuario interactuará con el sistema para alcanzar el beneficio esperado.
- **Casos de uso típicos:**
    - Crear maquetas (*wireframes*) o prototipos rápidos de la interfaz de usuario para obtener retroalimentación temprana.
    - Evaluar qué flujo de navegación resulta más simple o intuitivo para el usuario.
    - Aclarar el comportamiento esperado de una regla de negocio ambigua con el cliente.

### Lineamientos y Reglas de Uso

- **Timeboxing estricto (Tiempo Acotado):** Aunque no se pueda estimar con exactitud el resultado de la investigación, **siempre se define el tiempo máximo que se invertirá** (por ejemplo, máximo 8 horas o 2 días). Al vencer el *timebox*, la investigación se detiene con las conclusiones obtenidas.
- **Excepción, no la regla:** Todas las Historias de Usuario tienen cierto grado de incertidumbre natural. Las Spikes deben reservarse únicamente para incógnitas críticas y de alto riesgo, utilizándose como último recurso para evitar convertir el desarrollo en una fase de investigación permanente.
- **Pueden combinarse:** Una misma historia compleja puede requerir ambas modalidades. Por ejemplo, para la historia *"Ver uso diario de energía en un histograma"*, el equipo puede crear un **Spike Técnico** (investigar tiempos de respuesta y ancho de banda al consultar la BD) y un **Spike Funcional** (probar un prototipo del gráfico web con usuarios para validar el diseño).

### El Costo del Tradicional BRUF (*Big Requirements Up Front*)

El enfoque tradicional de ingeniería de software se basa en la especificación masiva de requerimientos por adelantado (*BRUF* o *Big Requirements Up Front*). Bajo este paradigma, se asume que es posible predecir y congelar el 100% de las necesidades del cliente antes de comenzar a escribir código. Sin embargo, la evidencia empírica muestra que este intento de predictibilidad genera un nivel de **desperdicio masivo**.

Según los estudios clásicos de la industria presentados por Jim Johnson (Standish Group, XP 2002) sobre el uso real de las funcionalidades en los sistemas típicos de software:

- **45% de las características NUNCA se utilizan**.
- **19% de las características se utilizan RARAMENTE**.
- **16% se utilizan A VECES**.
- **13% se utilizan A MENUDO**.
- **Solo el 7% se utilizan SIEMPRE**.

Esto demuestra que en los proyectos tradicionales dirigidos por requerimientos rígidos por adelantado, **más del 60% del costo y esfuerzo de desarrollo se invierte en construir características que no aportan ningún valor real al usuario final**. Desde la perspectiva del *Lean Thinking*, todo aquello que no aporta valor directo al cliente constituye un desperdicio que debe ser eliminado.

### Redefiniendo los "Productos Exitosos"

En la gestión tradicional, un proyecto solía catalogarse como "exitoso" si lograba entregar la totalidad del alcance especificado en la fecha pactada y dentro del presupuesto. Sin embargo, la gestión ágil de productos señala una paradoja crítica: **un proyecto puede cumplir con el plan al 100% y aun así ser un fracaso comercial completo**.

- **El riesgo principal:** En palabras de la gestión moderna de productos, *"el mayor riesgo no es fallar técnicamente, es construir a la perfección algo que nadie quiere"*.
- **La medida del éxito:** La productividad y el éxito de un producto no se miden por la cantidad de código escrito o el volumen de funciones entregadas, sino por la **adopción real, la satisfacción del usuario y la capacidad de descubrir sistemáticamente la cosa correcta a construir cada día**.

### El Ecosistema de "Mínimos" para Generar Valor sin Desperdicio

Para evitar los elevados costos del BRUF y alinear el desarrollo con el mercado, la gestión ágil y *Lean* reemplaza la especificación gigante inicial por un **ecosistema de productos mínimos de aprendizaje y liberación continua**:

1. **UVP (*Unique Value Proposition* - Propuesta de Valor Única):** Es la hipótesis central de negocio sobre por qué el producto o servicio será único en el mercado.
2. **MVP (*Minimal Viable Product* - Producto Mínimo Viable):** Es la versión de un nuevo producto creada con el menor esfuerzo posible para obtener la máxima cantidad de **aprendizaje validado** sobre los clientes reales. No busca ganar mercado masivo de inmediato, sino probar la hipótesis de valor (ejemplo: el prototipo en video de 3 minutos usado por Dropbox para validar la demanda antes de construir la arquitectura completa).
3. **MVF (*Minimal Viable Feature* - Característica Mínima Viable):** Es una versión a pequeña escala de una funcionalidad específica, diseñada para probar la adopción y utilidad de una idea "pionera" de alta incertidumbre dentro de un producto existente.
4. **MMF (*Minimal Marketable Feature* - Característica Mínima Comercializable):** Es la pieza funcional más pequeña que puede liberarse al mercado aportando un valor comercial claro y directo tanto para el usuario como para la organización. Se aplica cuando se tiene alta certeza sobre lo que se debe construir.
5. **MMP / MMR (*Minimal Marketable Product / Release*):** Es la primera liberación comercial (*release*) dirigida a los *early adopters*, la cual empaqueta el conjunto más pequeño posible de MMFs necesarios para resolver una necesidad concreta del mercado.
6. **MLP (*Minimal Lovable Product* - Producto Mínimo Adorable):** Representa la evolución hacia mercados competitivos o maduros, donde ser simplemente "viable" ya no alcanza. El MLP prioriza el diseño, la usabilidad y las interacciones para evocar una **conexión emocional y deleite en el usuario**, fomentando la lealtad y la retención temprana.

---

# ¿Qué son las Estimaciones Ágiles, para qué se usan y por qué conviene utilizarlas?

Las **estimaciones ágiles** son pronósticos probabilísticos que realiza el equipo de desarrollo sobre la magnitud o el tamaño relativo del trabajo requerido para construir un incremento de software.

- **¿Para qué se usan?** Se utilizan para evaluar de manera temprana la factibilidad del trabajo planificado, brindar previsibilidad al negocio, tomar decisiones informadas sobre el alcance del producto y planificar el volumen de ítems que pueden ingresar a un *Sprint* o *Release*.
- **¿Por qué conviene utilizarlas?**
    - **El valor del proceso:** Lo más valioso de estimar no es el número final obtenido, sino el **proceso de discusión grupal**. Al estimar juntos, el equipo descubre dudas, alinea la visión técnica y aclara los requerimientos directamente con el *Product Owner*.
    - **La mente humana y la comparación:** Las personas somos deficientes estimando tiempos absolutos (en horas o días), pero somos sumamente eficientes y rápidas comparando cosas entre sí (estimación relativa).
    - **Protección del equipo:** Servir como una barrera de protección para evitar que el equipo asuma compromisos irreales.

## Bloque 1

### Fundamentos y Paradigma de la Estimación Ágil

#### A. Estimación vs. Compromis

Una de las mayores fuentes de fracaso en proyectos de software ocurre al confundir estos dos conceptos:

- **Estimación:** Es una predicción cuantitativa o relativa fundada sobre un grado de incertidumbre inicial. **Una estimación no es precisa ni es un compromiso formal**.
- **Compromiso:** Es una meta de entrega o fecha acordada. Utilizar las estimaciones iniciales como compromisos rígidos resulta peligroso para la organización, ya que la presión distorsiona la calidad y degrada la arquitectura del software.

#### B. Separación de Tamaño y Duración

En el enfoque tradicional se intenta estimar directamente la duración calendario (ej. *"esto tardará 5 días"*). En el desarrollo ágil, estas dos variables **se separan conceptualmente**:

1. **Tamaño (*Size*):** Es la magnitud, complejidad y volumen de trabajo inherente a la historia. Es un atributo intrínseco del software que **el equipo estima**.
2. **Duración (*Duration*):** Es el tiempo calendario que tomará completar dicho tamaño. **La duración no se estima a ojo**, sino que **emerge de forma matemática** al dividir el tamaño acumulado entre la **Velocidad del equipo** (*Team Velocity*) a lo largo de las iteraciones.

#### C. Precisión vs. Exactitud y el Cono de la Incertidumbre

Basado en las investigaciones de Steve McConnell:

- **Precisión:** Se refiere a la cantidad de dígitos significativos con los que se expresa un número (ej. *"395.7 días"* es altamente preciso, pero probablemente inexacto).
- **Exactitud:** Se refiere a qué tan cerca se encuentra la cifra de la realidad final.
- **Cono de la Incertidumbre:** Muestra cómo al inicio de un proyecto la variabilidad del esfuerzo real puede oscilar entre un **0.25x** y un **4.0x** del estimado original. Intentar dar estimaciones hiperprecisas en la parte ancha del cono es un error conceptual; la precisión de la estimación debe ajustarse paulatinamente a medida que avanza el conocimiento del producto.

### Unidades de Medida Ágiles

#### Puntos de Historia (*Story Points - SP*)

El **Story Point** es una unidad de medida abstracta y relativa propia y específica de cada equipo de trabajo. Sirve para evaluar el "peso" o tamaño de una Historia de Usuario.

A diferencia del tiempo puro, la estimación en Story Points se compone de **tres factores clave (las "3 burbujas")**:

- **Complejidad:** Dificultad técnica del algoritmo, de la arquitectura o del flujo de negocio.
- **Esfuerzo:** Cantidad de trabajo repetitivo o volumen físico de tareas a realizar.
- **Duda / Incertidumbre / Riesgo:** Grado de desconocimiento sobre la tecnología, el dominio o las dependencias.

> *Regla clave:* La complejidad de una historia tiende a incrementarse de forma exponencial (no lineal) a medida que crece su tamaño. Por ello, los Story Points **no son medidas basadas en tiempo** y son abstractos para evitar comparaciones absurdas con la realidad o entre distintos equipos.
> 

#### Días Ideales (*Ideal Days*)

Representa la cantidad de tiempo de trabajo continuo e ininterrumpido (sin reuniones, e-mails, soporte ni distracciones operativas) que le tomaría a un desarrollador arquetípico completar una tarea.

- **Ventaja:** Es una medida más intuitiva para equipos que recién se inician en la agilidad.
- **Desventaja frente a SP:** Tiende a provocar que la gerencia compare los "días ideales" con los "días calendario reales", cuestionando por qué el equipo completó solo 8 días ideales en un *Sprint* de 10 días útiles.

#### 3Tallas de Camiseta (*T-Shirt Sizing: S, M, L, XL, XXL*)

Es una técnica de estimación gruesa y cualitativa.

- **Aplicación:** Ideal para estimar elementos de alto nivel (*Épicas* o *Temas*) durante las fases iniciales o en la parte ancha del Cono de la Incertidumbre, cuando entrar en el detalle de números exactos genera falsa precisión.

## Bloque 2: Patrones de Referencia, Técnicas y Métodos de Estimación

En este segundo bloque nos enfocamos en **cómo se lleva a la práctica la estimación relativa**, analizando los patrones de comparación y las técnicas grupales más efectivas utilizadas en los equipos ágiles.

### Patrones de Referencia y Comparación

#### 1. La Historia Canónica (o Historia Base)

Para poder realizar estimaciones relativas, el equipo necesita un patrón de medida o "metro patrón" contra el cual medir.

- **Definición:** La **Historia Canónica** (también llamada *Base Story* o *Story Z*) es una Historia de Usuario real seleccionada por el equipo que cumple con ser **simple, muy bien comprendida, de baja complejidad y sin incertidumbre**.
- **Mecánica:** A esta historia se le asigna un valor fijo de referencia dentro de la escala (por ejemplo, 1 o 2 Story Points). A partir de allí, cualquier otra historia del *Backlog* se evalúa por comparación directa contra ella preguntándose: *"¿Es esta historia el doble de compleja que la Historia Canónica, igual o la mitad?"*.
- **Utilidad en la cátedra:** En las evaluaciones prácticas, siempre se debe identificar la Historia Canónica e indicar la justificación técnica de su elección basada en **Esfuerzo, Complejidad e Incertidumbre**.

#### 2. Estimación por Analogía

- Consiste en comparar una nueva Historia de Usuario contra otras historias que el equipo **ya ha desarrollado y completado previamente** en *Sprints* pasados.
- En lugar de analizar la historia desde cero en términos absolutos, el equipo busca patrones similares: *"Esta funcionalidad de exportar a PDF es análoga a la que hicimos el Sprint pasado para exportar a Excel, por lo que debería tener un tamaño equivalente"*.

#### 3. Desagregación (*Disaggregation*)

- **Definición:** Es la técnica de descomponer una historia grande, vaga o compleja (*Épica*) en historias más pequeñas y manejables.
- **Razón de uso:** Estimar un bloque gigante de software conduce frecuentemente a la subestimación u omisión de tareas críticas. Al rebanar la historia en piezas funcionales más pequeñas, la estimación resulta sustancialmente más confiable y precisa.

### Técnicas y Métodos de Estimación

#### 1. Planning Poker (Póker de Planificación)

Es la técnica ágil de estimación colaborativa más difundida a nivel mundial, diseñada por James Grenning y popularizada por Mike Cohn. Combina la opinión de expertos, la analogía y la desagregación mediante un juego estructurado derivado del método *Wideband Delphi*.

- **Participantes y Roles:**
    - **Equipo de Desarrollo (Estimadores):** Son los **únicos que votan y estiman**. Incluye a programadores, *testers*, diseñadores UX y administradores de bases de datos. La premisa fundamental es: *"Las personas más competentes para resolver la tarea deben ser quienes la estimen"*.
    - **Product Owner:** Lee la historia y aclara las dudas funcionales o de negocio, pero **no vota ni estima** para evitar sesgar o presionar al equipo.
    - **Moderador / Scrum Master:** Facilita la dinámica y asegura que la discusión no se extienda indefinidamente.
- **Mecánica Paso a Paso:**
    1. **Lectura y Discusión:** Se lee la Historia de Usuario a todo el equipo y se realizan preguntas aclaratorias al *Product Owner*.
    2. **Selección Individual y Secreta:** Cada estimador selecciona una carta de su mazo con su estimación en *Story Points* y la coloca boca abajo en la mesa.
    3. **Revelación Simultánea:** Todos muestran sus cartas al mismo tiempo. Esto evita el **sesgo de anclaje** (donde la opinión de la persona con más experiencia o jerarquía influye en la decisión de los demás).
    4. **Debate de Extremos:** Si hay consenso pleno, ese es el valor asignado. Si hay discrepancia significativa (ej. uno votó 2 y otro 13), **los votantes de los valores más alto y más bajo explican sus razones** a los demás.
    5. **Re-votación:** Tras una breve discusión centrada en los supuestos técnicos o riesgos descubiertos, se vuelve a votar hasta lograr convergencia.
- **Escala Modificada de Fibonacci y Decodificación de Cartas:**
El mazo típico de *Planning Poker* utiliza una secuencia no lineal basada en Fibonacci: **0, 1/2, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?, Taza de Café**.
    - **¿Por qué es una escala no lineal?** Porque a medida que una tarea crece en tamaño, la incertidumbre se incrementa exponencialmente. Carece de sentido discutir si una historia grande equivale a 18, 20 o 22 puntos; la separación amplia de la escala evita la **falsa sensación de precisión** (*falsa exactitud*).
    - **Decodificación de las Cartas:**
        - **`0`:** La funcionalidad está casi hecha o no requiere esfuerzo significativo.
        - **`1/2` y `1`:** Funcionalidad muy pequeña o cambios cosméticos menores.
        - **`2` a `5`:** Funcionalidades de tamaño pequeño a mediano (es el tamaño deseado para trabajar de forma cómoda en un *Sprint*).
        - **`8` a `13`:** Funcionalidades grandes. Aún caben en un *Sprint*, pero se recomienda analizar si es posible dividirlas.
        - **`20` y `40`:** Funcionalidad demasiado grande (*Épica*) que no puede ni debe entrar a un *Sprint* sin ser dividida previamente.
        - **`100`:** Confirmación de que el requerimiento es gigante o está mal planteado; no se debe iniciar sin un rediseño completo.
        - **`?` (Signo de pregunta):** Incertidumbre absoluta; el estimador no comprende la historia o requiere más información de negocio.
        - **☕ (Taza de café):** El equipo necesita realizar una pausa o descanso.

#### 2. Mapeo de Afinidad (*Affinity Estimating / Wall of Estimation*)

- **Definición:** Es una técnica de estimación masiva y ultra rápida utilizada cuando se debe clasificar un volumen muy grande de Historias de Usuario en poco tiempo (por ejemplo, al inicio de un proyecto o versión).
- **Mecánica:** En lugar de votar historia por historia con *Planning Poker*, se colocan las tarjetas en una pared o tablero físico/virtual. El equipo, de forma silenciosa y colaborativa, mueve las historias ordenándolas de menor a mayor tamaño en columnas o categorías (como Tallas de Camiseta: S, M, L, XL, XXL) por comparación visual rápida.

#### 3. Spikes (Historias de Investigación) como Soporte a la Estimación

- Cuando una historia obtiene recurrentemente votos de `?` o una gran dispersión de cartas durante el *Planning Poker* debido a un desconocimiento técnico o funcional, **se interrumpe la estimación**.
- En su lugar, se crea una **Spike** (técnica o funcional) de tiempo acotado (*timeboxed*) para que un desarrollador investigue o construya un prototipo previo. Una vez concluida la *Spike*, el equipo cuenta con la información necesaria para retomar la estimación de la historia en el *Planning Poker* con baja incertidumbre.

## Bloque 3: Métricas de Progreso, Proyección y Re-estimación

En este último bloque nos enfocamos en **cómo medir el progreso real del desarrollo, realizar proyecciones confiables y gestionar el mantenimiento de las estimaciones** a lo largo del tiempo.

### Métricas de Progreso y Proyección

#### 1. Velocidad del Equipo (*Team Velocity*)

La **Velocidad** es la métrica empírica fundamental en Scrum para medir la capacidad de entrega de un equipo de desarrollo.

- **Definición y cálculo:** Se calcula sumando la cantidad de *Story Points* asignados a las Historias de Usuario que el equipo ha completado **100% de acuerdo con la Definición de Terminado (*Definition of Done*)** durante una iteración.
- **Mecanismo de autocorrección:** La velocidad **corrige automáticamente los errores de estimación del equipo con el paso del tiempo**. Si el equipo subestima o sobreestima la complejidad de las historias de forma sistemática, la velocidad real se ajustará en consecuencia (subiendo o bajando), estabilizando la capacidad de predicción para los siguientes *Sprints* sin necesidad de modificar el patrón de medida.

#### 2. La Regla de "Todo o Nada" (*All-or-Nothing Rule*)

Una de las normas estrictas y conceptuales de la agilidad es que **no se otorgan créditos ni puntos parciales por historias "casi terminadas"** al finalizar el *Sprint*.

- **Fundamento *Lean*:** En el pensamiento *Lean* y en la gestión del flujo, **el valor del trabajo a medio hacer es cero** (o incluso negativo, ya que representa desperdicio / *Work In Progress* acumulado).
- **Aplicación:** Si una historia de 8 Puntos de Historia tiene el código listo pero le falta la automatización de pruebas o la aprobación final de QA según la *DoD*, el equipo obtiene **0 puntos** para la velocidad de esa iteración. La historia no completada regresa al *Product Backlog* para ser revaluada y completada en el siguiente *Sprint*.

#### 3. Métodos de Predicción de la Velocidad y Capacidad

Para planificar cuántas historias pueden ingresar al próximo *Sprint*, se utilizan dos métodos principales:

- **A. "El tiempo que hizo ayer" (*Yesterday's Weather*):**
    - Asume que el equipo entregará en la iteración que comienza una cantidad de *Story Points* similar al promedio observado en los últimos 2 o 3 *Sprints*.
    - Es la técnica de predicción más simple y efectiva cuando el tamaño del equipo, las condiciones de entorno y la duración del *Sprint* se mantienen constantes.
- **B. Cálculo de Capacidad y Factor de Dedicación (*Capacity & Dedication Factor*):**
    - Se utiliza cuando la composición del equipo varía (por vacaciones, licencias, feriados) o en equipos totalmente nuevos.
    - **Cálculo de Días-Hombre Disponibles:** Se suman los días efectivos de trabajo de cada integrante considerando ausencias planificadas.
    - **Factor de Dedicación:** Porcentaje que representa el tiempo efectivo que el equipo puede enfocar en codificar y probar PBIs sin distracciones (descontando reuniones de Scrum, soporte operativo, e-mails). El valor por defecto típico para equipos nuevos suele rondar el **70%**.
    - **Fórmula: $\text{Velocidad Estimada} = \text{Días-Hombre Disponibles} \times \text{Factor de Dedicación}$**

#### 4. Gráficos de Proyección y Seguimiento

- **Sprint Burndown Chart:**
    - Gráfico que muestra la cantidad de trabajo restante (en horas o *Story Points*) dentro de un *Sprint* a lo largo de los días de la iteración.
    - Muestra una **línea ideal** desde el total comprometido hasta cero, y una **línea real** que se actualiza diariamente en el *Daily Scrum*. Permite detectar de un vistazo si el equipo está a tiempo, adelantado o atrasado.
- **Release Burndown Chart vs. Release Burnup Chart:**
    - **Release Burndown:** Muestra los *Story Points* pendientes del *Release* total a lo largo de los *Sprints*.
    - **Release Burnup:** Muestra dos líneas independientes: una para el **Alcance Total (*Scope*)** y otra para el **Trabajo Completado (*Done*)**.
    - *Ventaja del Burnup:* Permite distinguir claramente si un retraso en la fecha estimada de entrega se debe a un bajo rendimiento del equipo o a un **incremento constante de alcance (*Scope Creep*)** introducido por el *Product Owner* durante el proyecto.

### Re-estimación y Mantenimiento

#### 1. ¿Cuándo NO se debe re-estimar?

- **No re-estimar durante la ejecución del Sprint:** Si una historia estimada en 3 puntos resulta tomar más tiempo de lo previsto, **nunca se cambia su estimación inicial en medio del Sprint**. Cambiar las estimaciones sobre la marcha invalida el histórico de la velocidad y destruye su capacidad autocorrectora.
- **No re-estimar historias terminadas:** Una vez completada una historia, su estimación original se mantiene inalterada en el histórico del proyecto.

#### 2. ¿Cuándo SÍ corresponde re-estimar?

- **Cambio sustancial en el alcance o requerimiento:** Si el *Product Owner* modifica la intención o las reglas de negocio de una historia mientras está en el *Product Backlog*, se debe re-estimar en la siguiente sesión de refinamiento (*grooming*).
- **Descubrimiento de un error masivo de apreciación:** Si una historia que se creía simple resulta ser una épica gigante debido a una restricción técnica no detectada originalmente, se re-estima o desagrega antes de ser planificada en un *Sprint*.
- **Cambios estructurales en el equipo o la tecnología:** Si el equipo adopta un nuevo entorno o marco técnico que altera drásticamente la relación entre la *Historia Canónica* y las demás, se realiza una sesión de re-estimación relativa para el *Backlog* pendiente.

A partir de las métricas de velocidad y los gráficos de seguimiento, el *Product Owner* puede realizar ajustes en las fechas de entrega o negociar el alcance del producto con el cliente.

---

# Gestión de Productos

La **Gestión de Productos de Software** es la disciplina de la ingeniería de software encargada de definir, guiar y hacer evolucionar un producto digital a lo largo de todo su ciclo de vida, asegurando que el esfuerzo de desarrollo se traduzca en **valor real para los usuarios y sostenibilidad financiera para la organización**.

A diferencia de la gestión tradicional de proyectos —que se enfoca en controlar el tiempo, el costo y el cumplimiento de un pliego de especificaciones cerrado—, la gestión de productos pone el foco en el **mercado, la adopción y el impacto del software en el mundo real**.

## Bloque 1: Fundamentos de la Gestión de Productos y Creación de Valor

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                     CICLO DE VIDA DEL PRODUCTO                            │
 │  [Introducción]  ───►  [Crecimiento]  ───►  [Madurez]  ───►  [Declive]    │
 └───────────────────────────────────────────────────────────────────────────┘
       ▲                       ▲                    ▲
       │                       │                    │
 ┌─────┴───────┐         ┌─────┴───────┐      ┌─────┴───────┐
 │ Proyecto 1  │         │ Proyecto 2  │      │ Proyecto N  │   (Múltiples proyectos
 │ (Versión 1) │         │ (Versión 2) │      │ (Versión N) │    finitos alimentan al
 └─────────────┘         └─────────────┘      └─────────────┘    producto continuo)
```

#### 1. El Propósito de Crear Productos y su Ciclo de Vida

- **¿Por qué se crean productos de software?** La razón de ser de un producto no es acumular código ni ejecutar tareas técnicas, sino satisfacer necesidades de los clientes, alcanzar una masa crítica de usuarios activos, generar retorno económico y materializar una visión estratégica de negocio.
- **Diferencia entre Ciclo de Vida del Proyecto y del Producto:**
    - **Ciclo de Vida del Proyecto:** Es **finito y acotado en el tiempo**; inicia con una necesidad específica y concluye formalmente con la entrega de un resultado o versión.
    - **Ciclo de Vida del Producto:** Es **continuación permanente y evolutiva**; abarca cuatro fases estratégicas desde su concepción hasta su retiro: **Introducción**, **Crecimiento**, **Madurez** y **Declive**. A lo largo de la vida de un producto se ejecutan múltiples proyectos e incrementos sucesivos (*releases*) para mantener su valor en el mercado.

#### 2. La Paradoja de la Creación de Valor y el Costo del Desperdicio

El mayor cambio de paradigma en la gestión moderna de productos radica en reconocer una paradoja fundamental:

> **El axioma central de la Gestión de Productos:** *"El mayor riesgo en el desarrollo de software no es fallar técnicamente, sino construir a la perfección algo que nadie quiere, necesita o utiliza"*.
> 

#### Las Estadísticas del Standish Group sobre el Uso Real de Características

En las investigaciones clásicas presentadas por Jim Johnson (*Standish Group, XP 2002*) sobre el comportamiento de uso en sistemas de software tradicionales, se revelaron cifras contundentes:

```
  [45% NUNCA se usan] ──────────────────────────┐
  [19% RARA VEZ se usan] ────────────────────┐  │  ► 64% DESPERDICIO MASIVO
                                             │  │    (Construido mediante BRUF)
  [16% A VECES se usan] ───────┐             │  │
  [13% A MENUDO se usan] ────┐ │             │  │
  [7% SIEMPRE se usan] ────┐ │ │             │  │
                           ▼ ▼ ▼             ▼  ▼
                         ┌────────────────────────┐
                         │ 36% Uso Real de Valor  │
                         └────────────────────────┘
```

- **45% NUNCA se utilizan (*Never*)**.
- **19% RARA VEZ se utilizan (*Rarely*)**.
- **16% A VECES se utilizan (*Sometimes*)**.
- **13% A MENUDO se utilizan (*Often*)**.
- **Solo el 7% se utilizan SIEMPRE (*Always*)**.

#### El Concepto *Lean* de Valor vs. Desperdicio (*Waste*)

La filosofía *Lean* establece que **valor es todo aquello que provee un beneficio directo al cliente**; cualquier actividad, documento o línea de código que no contribuya a ese fin constituye **desperdicio**.

- **El costo oculto de las características extra:** Desarrollar funciones innecesarias no solo desperdicia presupuesto inicial, sino que **incrementa exponencialmente la complejidad del código**, encareciendo el mantenimiento futuro y reduciendo la vida útil del sistema.
- **Redefinición de la Productividad:** La productividad de un equipo no puede medirse en la cantidad de características creadas por día, sino en **la capacidad de averiguar e identificar sistemáticamente la cosa correcta a construir cada día**.

#### 3. La Grieta Evolutiva del Ingeniero de Software

```
  PERSPECTIVA TÉCNICA TRADICIONAL          PERSPECTIVA DE GESTIÓN DE PRODUCTOS
 ┌───────────────────────────────┐        ┌───────────────────────────────────┐
 │ • Algoritmos y sintaxis       │        │ • Experiencias humanas y emociones│
 │ • Arquitectura interna        │  ───►  │ • Personas y hábitos de uso       │
 │ • Estructuras de bases de datos│        │ • Contextos operacionales reales  │
 │ • Cantidad de código generado │        │ • Resolución de problemas de valor│
 └───────────────────────────────┘        └───────────────────────────────────┘
```

Para gestionar productos de forma exitosa, los profesionales deben superar la **grieta mental e intelectual** que separa la visión puramente técnica de la visión centrada en el ser humano:

El ingeniero de software evoluciona desde un perfil centrado en el "cómo programar" hacia un **gestor de valor** que comprende el impacto del software en los hábitos, necesidades y actividades de las personas reales.

## Bloque 2: Product Discovery y Validación de Hipótesis (*Lean Startup & Design Thinking*)

En este bloque abordamos la fase de **Product Discovery** (Descubrimiento del Producto), cuyo propósito es reducir la incertidumbre del mercado antes de realizar grandes inversiones de desarrollo técnico.

#### 1. Frameworks de Definición y Descubrimiento (*Product Discovery*)

Para construir el producto correcto, la gestión moderna se apoya en dos marcos colaborativos complementarios:

```
               ┌─────────────────────────────────────────┐
               │    DESIGN THINKING (Empatía e Ideación) │
               └────────────────────┬────────────────────┘
                                    │
                                    ▼
               ┌─────────────────────────────────────────┐
               │     LEAN UX (Diseño de Hipótesis)       │
               └────────────────────┬────────────────────┘
                                    │
                                    ▼
               ┌─────────────────────────────────────────┐
               │   LEAN STARTUP (Experimentos y MVP)     │
               └─────────────────────────────────────────┘
```

#### A. Design Thinking: Un Framework para Innovar

Es un enfoque centrado en las personas para resolver problemas complejos. Se compone de **5 etapas iterativas**:

1. **Empatizar (¿Cuál es el problema?):** Explorar el contexto humano, observando y comprendiendo las necesidades reales del usuario.
2. **Definir (¿Por qué es importante?):** Sintetizar la investigación para formular un punto de vista claro y acotado sobre el problema.
3. **Idear (¿Cómo lo resolvemos?):** Generar una amplia diversidad de ideas y alternativas sin quedarse en lo obvio.
4. **Prototipar (¿Cómo lo creamos?):** Construir representaciones rápidas y económicas de las ideas. La premisa clave es *"fallar de forma económica y veloz"*.
5. **Testear (¿Funciona?):** Mostrar los prototipos a los usuarios para obtener retroalimentación real, validar si la solución funciona y refinar el producto.

#### B. Lean UX (User Experience)

Popularizado por Jeff Gothelf, **Lean UX** combina tres fundamentos: *Design Thinking*, *Filosofía Ágil* y *Lean Startup*. Introduce principios clave de gestión:

- **Fuera del Negocio de los Entregables (*Getting out of the Deliverables Business*):** Los documentos masivos no resuelven problemas de los clientes. El éxito se mide por los **resultados alcanzados (*outcomes*)** en el comportamiento del usuario, no por los artefactos o diseños producidos.
- **GOOB (*Getting Out Of the Building*):** Principio formulado por Steve Blank que plantea que las dudas sobre las necesidades del usuario no se resuelven en salas de reunión, sino **saliendo a la calle y al mercado** a validar en el mundo real.
- **Proto-Personas y Diseño de Hipótesis:** En lugar de crear personajes extensos basados en investigaciones prolongadas, se crean *Proto-Personas* (supuestos iniciales del equipo) que se transforman en **declaraciones de hipótesis** para ser puestas a prueba de inmediato.

#### 2. El Ciclo de Realimentación *Build-Experiment-Learn* (Lean Startup)

```
                     ┌──────────────┐
                     │     IDEA     │
                     └──────┬───────┘
                            │
                       (Construir)
                            │
                            ▼
                     ┌──────────────┐
  (Aprender) ◄──────┤   PRODUCTO   ├──────► (Experimentar)
                     └──────────────┘
                            │
                         (Datos)
                            │
                            ▼
                     ┌──────────────┐
                     │ EXPERIMENTO /│
                     │    DATOS     │
                     └──────────────┘
```

El método *Lean Startup* de Eric Ries se estructura en un bucle continuo de aprendizaje diseñado para minimizar el riesgo:

El ciclo arranca desde una **Idea**, se traduce en un **Producto/MVP** mediante la fase de construcción, se somete a **Experimentación** para recolectar **Datos** reales de comportamiento y culmina al **Aprender** si la hipótesis inicial se confirma o si se debe corregir el rumbo.

#### El Dilema: "La Trampa / Audacia del Cero" (*The Audacity of Zero*)

Este concepto describe una paradoja brutal al momento de lanzar un producto:

> **El dilema de la Audacia del Cero:** A menudo resulta más fácil recaudar financiamiento o convencer a inversores cuando se tienen **cero ingresos, cero clientes y cero tracción**, porque el número "cero" invita a la pura imaginación y fantasía. Sin embargo, cuando se lanza una versión inicial y se obtienen **números pequeños pero reales**, surgen dudas inmediatas sobre si esos números crecerán.
> 
- **El riesgo generado:** Este fenómeno genera un incentivo perverso: **posponer el lanzamiento** de cualquier versión del producto hasta estar seguro del éxito "perfecto" para evitar mostrar números pequeños.
- **El antídoto:** Romper la parálisis lanzando lo antes posible un **Producto Mínimo Viable (MVP)** para confrontar la realidad con datos concretos de uso.

#### 3. Desmontaje de Supuestos de "Salto de Fe" (*Leap of Faith Assumptions*)

Los elementos de mayor riesgo en una *startup* o producto nuevo —aquellos de los que depende toda la supervivencia del proyecto— se denominan **supuestos de salto de fe**. Se dividen en dos hipótesis fundamentales:

1. **Hipótesis de Valor:** Evalúa si el producto realmente entrega un beneficio tangible al cliente una vez que comienza a usarlo. Su métrica principal de validación es la **Tasa de Retención de Usuarios** (si los usuarios vuelven voluntariamente a usar el producto).
2. **Hipótesis de Crecimiento:** Evalúa cómo los nuevos clientes descubrirán el producto. Sus métricas principales son la **Tasa de Referencia / Viralidad** y el **Net Promoter Score (NPS)**.

#### 4. Casos de Estudio Emblemáticos de Validación

#### Caso A: Dropbox (Resolviendo el Riesgo Técnico con una Prueba de Humo)

- **El Reto:** Dropbox requería una integración compleja en múltiples sistemas operativos y una arquitectura de sistemas distribuidos muy costosa de construir. Construir el software completo representaba un riesgo económico masivo si luego nadie lo quería.
- **El Experimento (MVP / *Smoke Test*):** Drew Houston (fundador) no escribió el código completo de la infraestructura; hizo un **video explicativo de 3 minutos** demostrando cómo funcionaría la sincronización para los *early adopters*.
- **Resultado:** La lista de espera beta pasó de 5.000 a **75.000 personas de la noche a la mañana**. Validó la demanda sin haber construido el backend definitivo.
- **Lección:** *"Piensa en grande, pero comienza en pequeño"*.

#### Caso B: Facebook (Validando Comportamiento Humano sobre Factibilidad Técnica)

- **El Contexto:** En el verano de 2004, Facebook tenía apenas 150.000 usuarios registrados e ingresos casi nulos, pero logró levantar sus primeros $500.000 en capital de riesgo.
- **¿Por qué invirtieron si los números eran pequeños?** Porque validó con contundencia sus dos supuestos de salto de fe:
    - **Hipótesis de Valor validada:** Más del **50% de los usuarios registrados regresaban al sitio todos los días** (retención extrema).
    - **Hipótesis de Crecimiento validada:** En menos de un mes desde su lanzamiento en Harvard, casi **3/4 partes de los estudiantes universitarios ya lo utilizaban**, sin haber gastado $1 en publicidad o marketing.
- **Lección:** No validaron factibilidad técnica, validaron **patrones de comportamiento humano y tracción real**.

## Bloque 3: El Ecosistema de los "Mínimos" (UVP, MVP, MVF, MMF, MMP) y el Rebanado Técnico

En este bloque se analiza la arquitectura de valor que permite a las organizaciones evolucionar desde la validación inicial de una hipótesis de negocio hasta la entrega comercial continua, evitando la sobreconstrucción y el desperdicio.

### 1. La Arquitectura del Valor y los Mínimos

```
 ┌─────────────────────────────────────────────────────────────────────────┐
 │                   UVP (Propuesta de Valor Única)                        │
 │                [La hipótesis central de diferenciación]                 │
 └────────────────────────────────────┬────────────────────────────────────┘
                                      │
                                      ▼
 ┌─────────────────────────────────────────────────────────────────────────┐
 │                     MVP (Producto Mínimo Viable)                        │
 │           [Vehículo de aprendizaje inicial para validar la UVP]          │
 └────────────────────────────────────┬────────────────────────────────────┘
                                      │
                     ┌────────────────┴────────────────┐
                     ▼                                 ▼
   ┌───────────────────────────────────┐ ┌───────────────────────────────────┐
   │    MMF (Característica Mínima     │ │   MVF (Característica Mínima     │
   │           Comercializable)        │ │              Viable)              │
   │  • Alta certeza de valor.          │ │  • Alta incertidumbre / "Pionera".│
   │  • Reduce el Time-to-Market.      │ │  • Mini-versión de MVP en producto│
   └─────────────────┬─────────────────┘ └─────────────────┬─────────────────┘
                     │                                     │
                     └────────────────┬────────────────────┘
                                      ▼
 ┌─────────────────────────────────────────────────────────────────────────┐
 │                  MMP / MMR1 (Primer Release Comercial)                  │
 │          [Empaquetado mínimo de MMFs dirigido a Early Adopters]         │
 └─────────────────────────────────────────────────────────────────────────┘
```

#### A. UVP (*Unique Value Proposition* - Propuesta de Valor Única)

- **Definición:** Es la hipótesis de negocio central que define por qué el producto o servicio será único en el mercado.
- **Relación con la agilidad:** Constituye el núcleo conceptual alrededor del cual se diseña la estrategia inicial de validación.

#### B. MVP (*Minimal Viable Product* - Producto Mínimo Viable)

- **Definición (Eric Ries):** *"Es la versión de un nuevo producto que permite a un equipo recopilar la cantidad máxima de aprendizaje validado sobre los clientes con el menor esfuerzo posible"*.
- **Propósito y Foco:** Se centra en probar la **UVP** agregando las funciones mínimas indispensables (*table stakes*) únicamente para garantizar que sea viablemente utilizable por los clientes. Sirve para evaluar el comportamiento real de los usuarios, lo cual es sustancialmente más confiable que realizar encuestas.
- **Espectro de Complejidad del MVP:**
    - **Pruebas de Humo (*Smoke Tests*):** Experimentos donde **no hay producto construido aún** (por ejemplo, landing pages o videos explicativos como el de Dropbox).
    - **Prototipos Tempranos:** Productos funcionales pero con características faltantes.
- **La Pirámide de Viabilidad (Anatomía de un MVP Efectivo):**
    - **Cómo NO hacerlo (Producto Fragmentado):** Construir únicamente la capa base de funcionalidad completa sin incluir usabilidad, fiabilidad ni diseño.
    - **Cómo SÍ hacerlo (Rebanada Cohesiva Vertical):** Ofrecer una porción pequeña pero integrada de extremo a extremo que abarque **Funcionalidad, Fiabilidad, Usabilidad y Diseño**.

#### C. Matriz de Priorización para el MVP

Para decidir qué características entran en la versión inicial y cuáles se descartan, se utiliza la matriz de priorización dividida en cuatro cuadrantes:

1. **HACER (Importante y Urgente):** Componentes críticos e indispensables de la Propuesta de Valor Única que deben **incluirse en el MVP**.
2. **PLANEAR (Importante y No Urgente):** Funcionalidades de maduración que se diferirán para desarrollarse en un **lanzamiento Beta** posterior.
3. **DELEGAR (No Importante y Urgente):** Necesidades operativas donde conviene evaluar **integraciones con servicios o APIs de terceros** en lugar de programarlas desde cero.
4. **ELIMINAR (No Importante y No Urgente):** Requerimientos descartados del *Roadmap* por considerarse **desperdicio puro**.

#### D. MVF (*Minimal Viable Feature* - Característica Mínima Viable)

- **Definición:** Es una función "pionera" a pequeña escala que se construye e implementa de forma rápida en un producto ya existente para probar la utilidad y adopción en un área de **alta incertidumbre**.
- **Naturaleza:** Funciona como una versión "mini" del MVP dentro de un producto consolidado. Está dirigida a *early adopters* o clientes altamente tolerantes para tomar decisiones estratégicas de evolución.

#### E. MMF (*Minimal Marketable Feature* - Característica Mínima Comercializable)

- **Definición:** Es la pieza funcional más pequeña que puede ser liberada al mercado aportando valor comercial directo tanto para la organización como para los usuarios.
- **Contexto de uso:** Se aplica en áreas donde existe una **alta certeza de valor**. Su objetivo principal es optimizar el tiempo de comercialización (*Time-to-Market*).

#### F. MMP / MMR (*Minimal Marketable Product / Release*)

- **MMP (*Minimal Marketable Product* = MMR1):** Es el primer lanzamiento comercial formal del producto dirigido a los *early adopters*, enfocado en empaquetar el conjunto indispensable de MMFs que satisfacen sus necesidades.
- **MMR (*Minimal Marketable Release*):** Representa cada incremento o versión sucesiva (MMR2, MMR3... MMR N) que entrega el conjunto más pequeño posible de nuevas características comercializables.

### 2. Corte Geológico / Rebanado Técnico (*Dinosaurio Carpaccio*)

Existe una distinción fundamental entre la **perspectiva de negocio** y la **perspectiva de implementación técnica**:

- **Nivel Negocio (Atómico):** Los MVP, MVF y MMF son las unidades atómicas de valor para el negocio; no es posible aprender o comercializar nada más pequeño que un MMF o MVF.
- **Nivel Técnico (Ejecución):** Sin embargo, desde el punto de vista del desarrollo, un MMF o un MVP pueden seguir siendo demasiado grandes o complejos para codificarse en una sola pieza.
- **El Corte Geológico / Carpaccio:** Consiste en rebanar los MVP, MVF y MMF en finas porciones de ejecución técnica llamadas **Historias de Usuario (*User Stories*)**. Esta fragmentación busca reducir el riesgo de ejecución tecnológica y obtener retroalimentación técnica temprana a lo largo del desarrollo, aunque cada porción técnica individual no tenga valor comercial independiente por sí sola.

## Bloque 4: Evolución del Producto, Matriz de Priorización, El Pivote y el Paso al *Minimal Lovable Product* (MLP)

En este cuarto y último bloque se profundiza en las herramientas de toma de decisiones para estructurar el producto inicial, cómo responder a la retroalimentación del mercado para evolucionar o pivotar, y el salto cualitativo hacia productos que enamoran al usuario.

### Matriz de Priorización: Decidiendo qué entra en el MVP

Para evitar la sobreconstrucción y el desperdicio de desarrollo, la **Matriz de Priorización** organiza los requerimientos y características según dos ejes fundamentales: **Importancia** (vertical) y **Urgencia** (horizontal):

```
                        URGENTE                    NO URGENTE
               ┌───────────────────────────┬───────────────────────────┐
  IMPORTANTE   │        1. HACER           │        2. PLANEAR         │
               │  • Incluir en el MVP.     │  • Desarrollar para un    │
               │  • Componentes críticos   │    lanzamiento Beta.      │
               │    de la Propuesta de     │  • Funcionalidades de     │
               │    Valor Única (UVP).     │    maduración.            │
               ├───────────────────────────┼───────────────────────────┤
NO IMPORTANTE  │        3. DELEGAR         │        4. ELIMINAR        │
               │  • Considerar integracio- │  • Remover del Roadmap    │
               │    nes de terceras partes │    del producto.          │
               │    o servicios (APIs).    │  • Desperdicio puro.      │
               └───────────────────────────┴───────────────────────────┘
```

- **1. HACER (Importante y Urgente):** Requerimientos críticos que componen la propuesta de valor única. Son indispensables para que el producto sea viable en el mercado.
- **2. PLANEAR (Importante y No Urgente):** Funcionalidades valiosas pero no inmediatas; se difieren para lanzamientos beta o versiones futuras.
- **3. DELEGAR (No Importante y Urgente):** Necesidades operativas donde conviene usar servicios externos o APIs de terceros en lugar de desarrollar código desde cero.
- **4. ELIMINAR (No Importante y No Urgente):** Características que no aportan valor significativo y deben eliminarse del *roadmap* por constituir desperdicio.

### Trazado de la Ruta de Liberación (*Release Roadmap*)

El *Roadmap* traza la evolución del producto a lo largo del tiempo uniendo la fase de aprendizaje con la fase comercial:

```
  [Fase 1: Aprendizaje]        [Fase 2: Lanzamiento]          [Fase 3: Evolución]
   ┌─────────────────┐          ┌───────────────────┐        ┌───────────────────┐
   │       MVP       │  ───►    │  MMP (MMR 1)      │ ───►   │ MMR 2 ... MMR N   │
   │ (Validación de  │          │ (Primer release   │        │ (Incrementos      │
   │  hipótesis)     │          │  comercial)       │        │  continuos MMFs)  │
   └─────────────────┘          └───────────────────┘        └───────────────────┘
```

1. **Fase 1 - MVP (Aprendizaje):** Enfocada en validaciones rápidas, más cercana a prototipos o pruebas de humo (*smoke tests*) para obtener aprendizaje validado.
2. **Fase 2 - MMP / MMR1 (Lanzamiento):** Primer lanzamiento comercial dirigido a *early adopters*, empaquetando las **MMFs** (Características Mínimas Comercializables) esenciales.
3. **Fase 3 - MMR2 ... MMR N (Evolución):** Incrementos de release continuos que entregan el conjunto más pequeño posible de características nuevas para mantener el crecimiento del producto.

### Navegando el Ruido hacia el Encaje de Mercado: El Pivote (*Pivot*)

Al lanzar el MVP inicial, el equipo recopila comentarios de los usuarios que indican cómo debe evolucionar el producto:

- **La Señal Dispersa (Aún no hay mercado):** Ocurre cuando los usuarios potenciales expresan *"Esto es genial, pero necesito X"*, pero cada usuario pide un elemento **X diferente**. Esto demuestra que no se ha encontrado aún un segmento homogéneo ni un encaje producto-mercado.
- **La Señal Clara (Momento de Pivotar):** Se manifiesta cuando las respuestas de distintos clientes coinciden en señalar la **misma necesidad faltante X**.
- **El Pivote:** Es un cambio de estrategia estructurado donde se construye un **MVP2** centrado en la nueva hipótesis basada en el aprendizaje validado del cliente.

### Cruzando la Grieta de la Experiencia: Del MVP al MLP (*Minimal Lovable Product*)

En mercados maduros con competidores establecidos, la simple "viabilidad" (satisfacer la función básica) ya no basta para retener usuarios:

```
   FOCALIZADO EN TAREAS                           FOCALIZADO EN EXPERIENCIAS
  ┌──────────────────────┐                       ┌───────────────────────────┐
  │ • Funcionalidad      │    LA GRIETA DE LA    │ • Gente y emociones       │
  │ • Características    │ ────────────────────► │ • Actividades y contextos │
  │ • MVP / MMP          │      EXPERIENCIA      │ • MLP (Conexión emocional)│
  └──────────────────────┘                       └───────────────────────────┘
```

- **¿Qué es un MLP?** Es la versión más simple de un producto que genera una **conexión emocional o deleite** en los usuarios, fomentando la lealtad e impulsando la adopción desde el primer momento.
- **¿Por qué evoluciona el estándar?**
    1. **Reputación de marca:** Demuestra a los clientes que la empresa se preocupa genuinamente por sus necesidades e interacciones.
    2. **Diferenciación:** Permite destacar en entornos competitivos donde la funcionalidad básica se da por sentada.
    3. **Retroalimentación leal:** Genera una base de usuarios comprometida que proporciona retroalimentación de alta calidad.

### Matriz Diagnóstica Comparativa: MVP vs. MMP vs. MLP

Para aplicar el enfoque adecuado según el estado del producto, la cátedra propone la siguiente matriz de diagnóstico:

| Dimensión | MVP (*Minimal Viable Product*) | MMP (*Minimal Marketable Product*) | MLP (*Minimal Lovable Product*) |
| --- | --- | --- | --- |
| **Objetivo Principal** | **Validar conceptos** e hipótesis de negocio rápido y económico. | **Atender a una base amplia de usuarios** con características clave. | **Crear conexión emocional**, deleite e interacción profunda. |
| **Enfoque de Diseño** | Investigar, empatizar y probar con el usuario. | Construir, refinar código, estabilidad y testing. | Diseñar para el deleite, interfaz intuitiva e impacto emocional. |
| **Resultado / Beneficio** | Informar y definir el alcance real del producto. | Atracción y salida al mercado masivo. | **Lealtad temprana**, retención y amor por la marca. |
| **Ejemplo Típico** | Videos o entrevistas (*Dropbox*). | Lanzamiento Beta comercial. | Apps con animaciones fluidas y experiencias personalizadas (*Spotify, WhatsApp*). |

---

# Scrum

## Bloque 1: Fundamentos, Teoría, Pilares y Valores de Scrum

### Definición de Scrum

Scrum es un **marco de trabajo liviano** e intencionalmente incompleto que ayuda a las personas, equipos y organizaciones a generar valor a través de soluciones adaptativas para problemas complejos.

A diferencia de las metodologías tradicionales prescriptivas, Scrum no proporciona instrucciones detalladas paso a paso, sino que establece un conjunto de reglas que guían las relaciones e interacciones humanas, confiando en la inteligencia colectiva del equipo.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                            FILOSOFÍA DE SCRUM                             │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ • Marco de trabajo liviano e incompleto por diseño                         │
 │ • Basado en la inteligencia colectiva y la autoorganización              │
 │ • Enfocado en problemas complejos mediante soluciones adaptativas         │
 └───────────────────────────────────────────────────────────────────────────┘
```

### Control de Proceso Empírico y Pensamiento *Lean*

```
  PROCESO DEFINIDO / TRADICIONAL                PROCESO EMPÍRICO (SCRUM)
 ┌──────────────────────────────┐             ┌──────────────────────────────┐
 │ • Basado en predicciones     │             │ • Basado en la observación   │
 │ • Plan congelado por avance  │             │   y evidencia real          │
 │ • Poca tolerancia al cambio  │             │ • Inspección y adaptación    │
 └──────────────────────────────┘             │   en ciclos iterativos       │
                                              └──────────────────────────────┘
```

Scrum se fundamenta directamente en dos pilares teóricos principales: el **Empirismo** y el **Pensamiento *Lean***:

- **Empirismo:** Afirma que el verdadero conocimiento proviene de la experiencia práctica y que las decisiones deben tomarse con base en la evidencia objetiva observada en el mundo real, en lugar de apoyarse en predicciones teóricas.
- **Pensamiento *Lean*:** Se enfoca en reducir y eliminar el desperdicio (*waste*), concentrando todos los esfuerzos únicamente en lo esencial para maximizar el valor entregado.
- **Enfoque Iterativo e Incremental:** Al aplicarse en entornos complejos sometidos a alta incertidumbre, Scrum emplea entregas cortas e incrementales para optimizar la previsibilidad y controlar el riesgo de forma continua.

### Los 3 Pilares del Empirismo

Para que el control de proceso empírico funcione eficazmente, Scrum se sostiene sobre tres pilares interconectados:

```
                         ┌─────────────────────────┐
                         │      TRANSPARENCIA      │
                         │ (Revela la realidad)    │
                         └────────────┬────────────┘
                                      │
                         ┌────────────┴────────────┐
                         │       INSPECCIÓN        │
                         │ (Detecta desviaciones)  │
                         └────────────┬────────────┘
                                      │
                         ┌────────────┴────────────┐
                         │        ADAPTACIÓN       │
                         │  (Ajuste inmediato)     │
                         └─────────────────────────┘
```

1. **Transparencia:** El proceso emergente, el trabajo y los artefactos deben ser claramente visibles tanto para quienes ejecutan las tareas como para quienes reciben los resultados. Si los artefactos carecen de transparencia, las decisiones tomadas sobre ellos pueden disminuir el valor e incrementar el riesgo. La transparencia es la condición de entrada indispensable para la inspección.
2. **Inspección:** Los artefactos de Scrum y el avance hacia las metas acordadas deben inspeccionarse con frecuencia y diligencia para detectar desviaciones o variaciones indeseables. Scrum provee cadencia y ritmo a través de sus eventos formales para facilitar esta inspección. *Regla clave:* La inspección sin transparencia resulta engañosa y derrochadora.
3. **Adaptación:** Si se detecta que algún aspecto del proceso o del producto se desvía fuera de los límites aceptables, el proceso o los materiales deben ajustarse lo antes posible para minimizar futuras desviaciones. Se espera que el equipo se adapte en el momento exacto en que aprende algo nuevo. *Regla clave:* Sin adaptación, la transparencia y la inspección carecen de sentido y son consideradas inútiles.

### Los 5 Valores de Scrum

El éxito operativo de Scrum depende de que los integrantes del equipo incorporen y vivan cinco valores fundamentales en su interacción diaria:

- **Compromiso (*Commitment*):** El equipo se compromete a alcanzar sus objetivos y a apoyarse mutuamente.
- **Foco (*Focus*):** La atención principal se concentra en el trabajo del *Sprint* para lograr el mejor progreso posible hacia las metas.
- **Franqueza / Apertura (*Openness*):** El equipo y los interesados acuerdan ser abiertos y transparentes sobre todo el trabajo y los desafíos que se presentan.
- **Respeto (*Respect*):** Los miembros del equipo se respetan entre sí como personas capaces e independientes.
- **Coraje (*Courage*):** El equipo tiene el valor y la valentía para hacer lo correcto y abordar los problemas difíciles.

> **Efecto de los Valores:** Cuando el equipo incorpora estos valores en su cultura, los pilares empíricos (transparencia, inspección y adaptación) cobran vida y generan la **confianza** necesaria para sostener la autogestión.
> 

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                           LOS 5 VALORES DE SCRUM                          │
 ├───────────────────────────────────────────────────────────────────────────┤
 │  1. COMPROMISO (Commitment): Dedicación a lograr las metas del Sprint.    │
 │  2. FOCO (Focus): Concentración en el trabajo del Sprint y sus objetivos. │
 │  3. FRANQUEZA / APERTURA (Openness): Transparencia sobre el trabajo y     │
 │     los desafíos.                                                         │
 │  4. RESPETO (Respect): Valorar la capacidad y autonomía de los colegas.   │
 │  5. CORAJE (Courage): Valentía para hacer lo correcto y abordar problemas │
 │     difíciles.                                                            │
 └───────────────────────────────────────────────────────────────────────────┘
```

## Bloque 2: La Estructura del Scrum Team (Roles)

En Scrum, la unidad fundamental de entrega es el **Scrum Team**, una célula cohesiva de profesionales enfocados en un único objetivo a la vez: el **Objetivo del Producto** (*Product Goal*).

### Naturaleza y Características del Scrum Team

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                            EL SCRUM TEAM                                  │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ • Tamaño reducido (generalmente 10 personas o menos)                      │
 │ • Sin jerarquías internas ni subequipos por disciplina                    │
 │ • Autogestionado: Deciden internamente quién, qué, cómo y cuándo          │
 │ • Multifuncional: Posee todas las habilidades para generar un Incremento  │
 └───────────────────────────────────────────────────────────────────────────┘
```

- **Tamaño reducido:** Se estructura para ser lo suficientemente pequeño como para mantener una comunicación fluida y ágil, pero lo bastante grande como para completar trabajo significativo en un *Sprint* (típicamente **10 personas o menos**).
- **Sin subequipos ni jerarquías:** Dentro del equipo no existen títulos ni categorías subordinadas (como "subequipo de testing" o "jerarquía de desarrolladores senior"). Todo el equipo comparte colectivamente la responsabilidad de generar un incremento útil y valioso.
- **Autogestión (*Self-Managing*):** Evolucionando desde el concepto clásico de autoorganización, el Scrum Team autogestionado posee la autonomía interna para decidir **quién hace qué, cómo, cuándo y dónde trabajar**.
- **Multifuncionalidad (*Cross-Functional*):** El grupo posee de forma integrada todas las capacidades requeridas (descubrimiento, diseño, ingeniería, pruebas y validación) para entregar un Incremento utilizable en cada *Sprint* sin depender de agentes externos.

### Product Owner (PO): Maximización del Valor

El **Product Owner** es el responsable de maximizar el valor del producto resultante del trabajo del Scrum Team y de representar la voz de los clientes e interesados.

- **Gestión del Product Backlog:** Es la única persona facultada para crear, ordenar y priorizar los elementos del *Product Backlog* (*PBIs*), asegurando que el plan sea transparente y claro para todos.
- **Una sola persona, no un comité:** Aunque el PO puede recopilar solicitudes de múltiples interesados (*stakeholders*), las decisiones de priorización se canalizan a través de su figura individual. Para que tenga éxito, la organización debe respetar sus decisiones.

### Scrum Master (SM): Líder Servicial y Agente de Cambio

```
                                  SCRUM MASTER
                                (Servicio en 33%)
                                       │
           ┌───────────────────────────┼───────────────────────────┐
           ▼                           ▼                           ▼
    Al Scrum Team               Al Product Owner            A la Organización
• Guía la autogestión       • Ayuda a definir metas     • Lidera la adopción ágil
• Remueve impedimentos      • Facilita técnicas de PB    • Elimina barreras entre
• Asegura eventos útiles    • Apoya en entorno complejo   interesados y equipos
```

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                           RESPONSABILIDADES DEL PO                        │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ • Desarrollar y comunicar explícitamente el Objetivos del Producto       │
 │ • Crear, comunicar y ordenar los elementos del Product Backlog (PBIs)     │
 │ • Asegurar que el Product Backlog sea transparente, visible y entendible │
 │ • Representar a los interesados como una persona única (no un comité)     │
 └───────────────────────────────────────────────────────────────────────────┘
```

El **Scrum Master** es responsable de establecer Scrum según la Guía oficial y de velar por la efectividad operativa del equipo. Es un verdadero **líder servicial y agente de cambio** a nivel equipo u organizacional.

- **Servicio al Scrum Team:** Guía al equipo en la autogestión y multifuncionalidad, remueve impedimentos que el equipo no puede resolver por sí mismo y asegura que los eventos ocurran dentro de los *timeboxes*.
- **Servicio al Product Owner:** Ayuda a encontrar técnicas efectivas para la definición de Objetivos del Producto y la gestión empírica del *Product Backlog*.
- **Servicio a la Organización:** Lidera y asesora en la adopción de Scrum, facilitando la comprensión del empirismo y eliminando barreras entre los interesados y el equipo.

### Product Developers: Construcción del Incremento

Los **Developers** son los integrantes del Scrum Team comprometidos a crear cualquier aspecto de un **Incremento utilizable** en cada *Sprint*.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                      RESPONSABILIDADES DE LOS DEVELOPERS                  │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ • Crear el plan táctico para el Sprint (Sprint Backlog)                  │
 │ • Inculcar calidad adhiriéndose a la Definición de Terminado (DoD)       │
 │ • Adaptar el plan diariamente durante la Daily Scrum hacia el Sprint Goal │
 │ • Responsabilizarse mutuamente como profesionales                          │
 └───────────────────────────────────────────────────────────────────────────┘
```

- **Naturaleza del rol:** El término *Developers* abarca a cualquier profesional involucrado en la creación del producto (diseñadores, programadores, analistas, ingenieros de calidad, arquitectos).
- **Innovación de la Extensión 2026 (SGEP):** Se reconoce que las actividades de desarrollo pueden ser ejecutadas por **humanos o asistentes automatizados de Inteligencia Artificial** incorporados como "compañeros de equipo", bajo la estricta regla de ***Human-in-the-Loop*** (donde la responsabilidad final y ética permanece 100% en las personas).

## Bloque 3: Eventos, Artefactos y Prácticas Tradicionales de Scrum

En Scrum, el desarrollo avanza en ciclos iterativos de duración fija donde cada evento provee una oportunidad formal para la **inspección y adaptación**.

### El Sprint como Evento Contenedor

El **Sprint** es el corazón de Scrum; es el contenedor de duración fija (**1 mes o menos**) dentro del cual suceden las ideas convertidas en incremento de valor.

- **Sucesión continua:** Un nuevo Sprint inicia inmediatamente después de que concluye el anterior.
- **Reglas durante el Sprint:**
    - No se realizan cambios que pongan en riesgo el **Objetivo del Sprint** (*Sprint Goal*).
    - La calidad no se disminuye ni se compromete.
    - El *Product Backlog* se refina continuamente según se aprende.
    - El alcance puede renegociarse entre los *Developers* y el *Product Owner* a medida que surge más información.

### Los 4 Eventos Formales de Inspección y Adaptación

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                           EVENTOS Y TIMEBOXES                             │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ • Sprint Planning: Máximo 8 horas (para un Sprint de 1 mes)               │
 │ • Daily Scrum: 15 minutos diarios (mismo lugar y hora)                    │
 │ • Sprint Review: Máximo 4 horas (para un Sprint de 1 mes)                 │
 │ • Sprint Retrospective: Máximo 3 horas (para un Sprint de 1 mes)          │
 └───────────────────────────────────────────────────────────────────────────┘
```

#### A. Sprint Planning (Planificación del Sprint)

Inicia el Sprint estableciendo el trabajo a realizar mediante la colaboración de todo el Scrum Team.

- **Timebox:** Máximo **8 horas** para un Sprint de 1 mes (proporcionalmente menor para Sprints más cortos).
- **Las 3 Preguntas/Temas Clave de la Planificación:**
    1. **¿Por qué este Sprint es valioso?** El PO propone cómo el producto aumentará su valor y el equipo define colectivamente el **Objetivo del Sprint** (*Sprint Goal*).
    2. **¿Qué se puede hacer en este Sprint?** Los *Developers* seleccionan elementos del *Product Backlog* (*PBIs*) según su capacidad y desempeño pasado.
    3. **¿Cómo se realizará el trabajo elegido?** Los *Developers* desglosan los PBIs seleccionados en tareas tácticas (frecuentemente de 1 día o menos).

#### B. Daily Scrum (Scrum Diario)

Evento diario de **15 minutos** exclusivo de los *Developers* para inspeccionar el progreso hacia el *Sprint Goal* y adaptar el *Sprint Backlog*.

- **Lugar y Hora:** Se realiza a la misma hora y en el mismo lugar todos los días hábiles para reducir la complejidad.
- **Propósito:** Mejorar la comunicación, identificar impedimentos tempranos y producir un plan de trabajo claro para las siguientes 24 horas.

#### C. Sprint Review (Revisión del Sprint)

Sesión de trabajo colaborativa (no una mera presentación) realizada al final del Sprint entre el Scrum Team y los *stakeholders*.

- **Timebox:** Máximo **4 horas** para un Sprint de 1 mes.
- **Propósito:** Inspeccionar los Incrementos logrados, evaluar el progreso hacia el *Product Goal* y discutir cambios en el entorno de negocio para ajustar el *Product Backlog* de cara al futuro.

#### D. Sprint Retrospective (Retrospectiva del Sprint)

Concluye el Sprint como una reunión de inspección interna del Scrum Team enfocada en la calidad y la efectividad.

- **Timebox:** Máximo **3 horas** para un Sprint de 1 mes.
- **Propósito:** Inspeccionar cómo fue el último Sprint con respecto a las personas, relaciones, procesos y la *Definition of Done*, e identificar mejoras concretas que se integrarán en el siguiente *Sprint Backlog*.

### Los 3 Artefactos y sus Compromisos Formales

Cada artefacto representa trabajo o valor y está diseñado para maximizar la transparencia. Cada uno contiene un **compromiso explícito** que refuerza el empirismo:

```
 ┌───────────────────────────┐         ┌───────────────────────────────────┐
 │        ARTEFACTO          │         │        COMPROMISO ASOCIADO        │
 ├───────────────────────────┤         ├───────────────────────────────────┤
 │ Product Backlog           │   ───►  │ Product Goal (Objetivo del Prod.) │
 │ Sprint Backlog            │   ───►  │ Sprint Goal (Objetivo del Sprint) │
 │ Incremento (Increment)    │   ───►  │ Definition of Done (DoD)          │
 └───────────────────────────┘         └───────────────────────────────────┘
```

- **Product Backlog:** Lista emergente y ordenada de todo lo que se necesita para mejorar el producto.
    - **Compromiso — Product Goal:** Describe un estado futuro del producto que sirve como objetivo de mediano/largo plazo para el Scrum Team.
- **Sprint Backlog:** Plan en tiempo real creado por y para los *Developers*, compuesto por el *Sprint Goal* (por qué), los PBIs seleccionados (qué) y el plan de entrega (cómo).
    - **Compromiso — Sprint Goal:** El propósito único y coherente del Sprint que brinda flexibilidad sobre la ejecución exacta sin alterar la meta.
- **Incremento (*Increment*):** El peldaño concreto de valor que se suma a todos los incrementos anteriores y debe ser completamente utilizable.
    - **Compromiso — Definition of Done (DoD):** Descripción formal del estándar de calidad requerido para considerar que el trabajo está 100% completado. Si un PBI no cumple la DoD, no se puede presentar en la *Sprint Review* ni liberar; regresa al *Product Backlog*.

### Actividad Clave de Soporte: Refinamiento del Product Backlog

El **Refinamiento (*Refinement / Grooming*)** no es un evento formal con tiempo fijo rígido, sino una **actividad continua** en la que el *Product Owner* y los *Developers* desglosan, clarifican y estiman los elementos del *Backlog*.

- **Dedicación típica:** Suele consumir alrededor del **10% de la capacidad del equipo** dentro del Sprint.
- **Criterios *Ready* (Definición de Listo):** Tras el refinamiento, un PBI adquiere el estado *Ready* cuando está suficientemente comprendido, desglosado en un tamaño pequeño y libre de dependencias externas para poder ingresar a un *Sprint Planning*.

## Bloque 4: La Extensión 2026 — *Scrum Guide Expansion Pack (SGEP 2026)*

Esta evolución del marco de trabajo —desarrollada por Ralph Jocham, John Coleman y Jeff Sutherland— expande la Guía Scrum 2020 para abordar la **complejidad e incertidumbre moderna, la integración de la inteligencia artificial, el liderazgo organizacional y la realización de valor a largo plazo**.

### Origen y Propósito de la Extensión (SGEP)

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                       EVOLUCIÓN A SCRUM EXPANDIDO                         │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ • Conexión con Sistemas Adaptativos Complejos (CAS) y Teoría del Caos    │
 │ • Adopción del Ciclo OODA de John Boyd y pensamiento de Cynefin           │
 │ • Enfoque total en "Product Thinking" (Ciclo de vida completo del activo) │
 └───────────────────────────────────────────────────────────────────────────┘
```

- **Sistemas Adaptativos Complejos (CAS):** Se apoya en la teoría de sistemas complejos para reconocer que los equipos evolucionan y encuentran soluciones óptimas en el "borde del caos" (*edge of chaos*) mediante reglas simples (*enabling constraints*) y retroalimentación continua.
- **Product Thinking vs. Project Thinking:** Los proyectos son temporales y frecuentemente dejan "productos huérfanos" al finalizar. Scrum ampliado abarca todo el ciclo de vida del producto ("desde la cuna hasta la tumba"), equilibrando el crecimiento a corto plazo con la sostenibilidad futura (*total cost of ownership*, *crossing the chasm* y evolución de versiones).

### El Ecosistema Ampliado de Roles y la Inteligencia Artificial

```
                               ECOSISTEMA DE ROLES (SGEP 2026)
                                              │
           ┌──────────────────────────────────┼──────────────────────────────────┐
           ▼                                  ▼                                  ▼
   SCRUM TEAM (Interno)                   SUPPORTERS                         STAKEHOLDERS
 • Product Owner (Humano)            • Líderes ejecutivos                • Clientes y Usuarios
 • Scrum Master (Humano)               y patrocinadores.                 • Financistas y Reguladores
 • Product Developers (Humano + IA)   • Eliminan barreras                 • Entidades e interacciones
   [Responsabilidad 100% Humana]       organizacionales.                   no humanas
```

El SGEP reintroduce y formaliza roles en el ecosistema organizacional para garantizar la efectividad del equipo:

**A. El Rol del *Supporter* (Interesado Apoyador)**

- **Definición:** Es un tipo específico de *Stakeholder* (gerentes, directores, financistas, personal de compras o RRHH) que forma una coalición poderosa para apoyar activamente la adopción de Scrum.
- **Responsabilidad:** Remueve impedimentos estructurales fuera del alcance del equipo, transforma los procesos administrativos para hacerlos coherentes con la agilidad y brinda "cobertura política". Si un gerente no empodera ni remueve barreras, **no es un *Supporter***.

**B. Integración de la Inteligencia Artificial (*Product Developers*)**

- **Agentes Automatizados:** Se reconoce explícitamente que las tareas de desarrollo pueden ser ejecutadas por humanos o asistentes de Inteligencia Artificial ("compañeros de equipo") para potenciar el refinamiento, detectar ambigüedades o generar incrementos.
- **La Regla *Human-in-the-Loop*:** Aunque la IA aumenta la capacidad cognitiva del equipo, la **responsabilidad final (*accountability*) técnica, ética y legal permanece 100% en los humanos**. Al menos un *Product Developer* debe ser humano.

### Compromisos y el Doble Filtro de Calidad: Output vs. Outcome

Para evitar la "fábrica de funcionalidades" (*feature factory*), el SGEP establece dos compromisos formales de calidad sobre la entrega:

```
 ┌────────────────────────────────────────┬────────────────────────────────────────┐
 │   DEFINITION OF OUTPUT DONE (Salida)   │    DEFINITION OF OUTCOME DONE (Valor)  │
 ├────────────────────────────────────────┼────────────────────────────────────────┤
 │ • Compromiso formal del INCREMENTO.    │ • Compromiso formal del PRODUCTO.      │
 │ • Mide Calidad Técnica e Integración.  │ • Mide Valor Real e Impacto de Negocio.│
 │ • Pregunta: ¿Lo construimos bien?      │ • Pregunta: ¿Construimos lo correcto?  │
 │ • Frecuencia: Cumplido en cada Sprint. │ • Frecuencia: Medido continuo/post-rel.│
 └────────────────────────────────────────┴────────────────────────────────────────┘
```

1. **Definition of Output Done (Calidad Técnica):**
    - Es el estándar formal e innegociable de ingeniería (código limpio, pruebas automatizadas, CI/CD, seguridad y rendimiento). Garantiza que el Incremento es técnicamente sólido y utilizable.
2. **Definition of Outcome Done (Valor de Negocio):**
    - Requiere evidencia directa y observable de que la entrega generó un cambio de comportamiento en los usuarios (adopción, eficiencia, satisfacción) o un impacto real en el negocio (ROI, telemetría).
3. **El Estatus de la *Definition of Ready (DoR)*:**
    - En el SGEP, la *DoR* **no es un compromiso formal** (para evitar contratos rígidos), sino una **cualidad emergente** del refinamiento continuo que aporta la claridad suficiente para iniciar el trabajo con confianza.

### La Lente OODA y la Gestión del Flujo

El SGEP conecta los 5 Valores de Scrum con el **Ciclo OODA** (*Observe, Orient, Decide, Act*) creado por John Boyd para la toma de decisiones rápidas en alta incertidumbre:

- **Observe (Observar):** Se vive mediante la **Apertura** y el **Respeto** para reunir evidencia objetiva y perspectivas diversas.
- **Orient (Orientar):** Requiere **Coraje** para interpretar la realidad honestamente, desafiar supuestos y pivotar si las hipótesis fallan.
- **Decide (Decidir):** Aplica el **Foco** realizando experimentos paralelos seguros para fallar (*safe-to-fail probes*) durante el refinamiento.
- **Act (Actuar):** Se materializa con el **Compromiso** para ejecutar hacia el *Sprint Goal* dentro del *timebox*.

#### Principios Clave de Ejecución en SGEP:

- **Planificación de Holgura (*Slack*):** Los equipos efectivos no se sobrecargan al 100% de su capacidad; planifican margen o holgura para absorber sorpresas o imprevistos técnicos.
- **Enfoque en Flujo (*Stop Starting, Start Finishing*):** Priorizar terminar ítems en progreso antes de iniciar nuevos, monitoreando el **trabajo ocioso** y no a las personas ociosas.

---