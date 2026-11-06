# Compendio Maestro: Temario Oficial Completo y Desarrollado - 2do Parcial ICSW (2026)

> **Cátedra:** Ingeniería y Calidad de Software (UTN-FRC 4K2)  
> **Docentes Titulares:** Ing. Laura Covara — Ing. Judith Meles  
> **Autor / Alumno:** Daniel Nicolás López (Legajo 97969)  
> **Estructura Pedagógica Mejorada (Metodología 4D):**
> 1. **En Forma (Académico):** Definición exacta de las filminas, libros y papers de la cátedra para responder y elegir opciones sin fisuras.
> 2. **En Criollo (Intuitivo):** Traducción directa a tierra para entender la lógica real detrás del concepto y no estudiar de memoria.
> 3. **Cómo Verlo de Diversas Formas:** Diagramas de flujo, cuadros comparativos, fórmulas y ejemplos concretos de proyectos reales.
> 4. **Gatillos y Cazabobos de Parcial:** Palabras clave que disparan cada concepto y trampas reales extraídas de los Segundos Parciales 2025 (Temas A y B).

---

> [!IMPORTANT] ACTUALIZACIÓN OFICIAL DE CÁTEDRA (2do Parcial 2026):
> **TEMA EXCLUIDO CONFIRMADO POR LA DOCENTE:** **NO SE EVALÚAN LOS MODELOS DE CALIDAD DE PRODUCTO** (McCall, Barbacci, ISO/IEC 25010 / SQuaRE).
> **SÍ SE EVALÚAN AL 100% LOS MODELOS DE PROCESO:** **CMMI** (Niveles de madurez 1 a 5, representaciones escalonada vs continua, SCAMPI), **SPICE (ISO 15504)** e **ISO 9001**.

## Índice General del Compendio

```text
├── RADIOGRAFÍA FORENSE DEL SEGUNDO PARCIAL (Estructura, Tiempos, Puntajes y Estrategia)
│
├── UNIDAD 2: Gestión Lean-Ágil de Productos de Software (Continuación)
│   ├── 1. Filosofía Lean y Pensamiento Lean en Software (Poppendieck: 7 Principios, 7+1 Desperdicios Manufactura vs. SW, Hacer vs. Ser Ágil).
│   ├── 2. Método Kanban en el Desarrollo de Software (Definición, 6 Prácticas, Columnas Producción vs. Buffer, WIP, Pull, Clases de Servicio, 9 Valores, Principios, Scrum vs. Kanban).
│   ├── 3. MANUAL DE 18 PUNTOS: Cómo Diseñar el Tablero Kanban del Parcial Teórico (Receta + Temas A y B 2025 Resueltos).
│   ├── 4. Escalado Ágil: Framework Nexus y LeSS (Roles, Eventos, Artefactos, NIT — Evaluado en Multiple Choice 2025).
│   └── 5. Métricas en los Diferentes Enfoques (Concepto, Epifenómenos, 3 Dominios [Proceso/Proyecto/Producto], Métricas Tradicionales, Ágiles y Lean/Kanban).
│
├── UNIDAD 3: Gestión de Software como Producto (Continuación)
│   ├── 1. SCM en Ambientes Ágiles vs. Enfoque Tradicional.
│   └── 2. Prácticas Continuas (Continuous Integration, Continuous Delivery, Continuous Deployment, Pipelines, Canary vs. Blue/Green Deployment).
│
├── UNIDAD 4: Aseguramiento de Calidad de Proceso y de Producto
│   ├── 1. Conceptos Generales sobre Calidad (Definición formal/implícita, 3 Niveles, Plan de Humphrey, Principios, 5 Visiones de Garvin, Equilibrio de Calidad).
│   ├── 2. Importancia de Trabajar Para y Con Calidad (Ventajas, Desventajas, Problemas de Calidad de Proyecto vs. de Producto).
│   ├── 3. Aseguramiento de la Calidad del Software - SQA / PPQA (Actividades, SQA vs. QC/Testing, Independencia del GAC, Estándares Producto vs. Proceso, Procesos Definidos vs. Empíricos).
│   ├── 4. Principales Modelos de Calidad (Producto: McCall, Barbacci, ISO 25010; Mejora: IDEAL, SPICE/ISO 15504; Evaluación: CMMI [Constelaciones, 22 Áreas, Nivel 2, Proveedores A/B, SCAMPI, Etapas vs. Continua, CMMI+Ágil] e ISO 9001).
│   ├── 5. Auditorías al Software (Qué es, Beneficios, Tipos [Proyecto, Grupo de Calidad, FCA, PCA], Roles, Proceso en 4 Etapas, Checklists, Hallazgos [Buenas prácticas, Desviaciones, Observaciones], Métricas).
│   ├── 6. Técnicas y Herramientas para Revisiones Técnicas (Verificación vs. Validación, Peer Reviews, Walkthrough vs. Inspección Formal de Fagan [5 Roles, 6 Etapas], Auditorías vs. Revisiones).
│   ├── 7. Calidad de Producto: Testing de Software (Principios Myers/ISTQB, Mitos, Good Enough, Error/Defecto/Falla, Severidad vs. Prioridad, Ciclos y Regresión, 4 Niveles, Modelo en V, 4 Ambientes, Proceso en 5 Etapas, Artefactos, Caja Negra vs. Caja Blanca [Grafo, McCabe, Coberturas], Tipos Funcional/No Funcional/Smoke).
│   └── 8. Testing en Ambientes Ágiles y TDD (Manifiesto, 9 Principios, 6 Prácticas, Circuito ATDD, Rol del Tester, 4 Cuadrantes Q1-Q4, Pirámide Ágil vs. Cono de Helado, TDD [Red-Green-Refactor, 3 Leyes, Patrón AAA, Mocks/Stubs]).
│
└── MANUAL PRÁCTICO FORENSE (50 PUNTOS): Diseño de Pruebas de Caja Negra
    ├── 1. Reglas de Oro y Errores Mortales (Auditoría de Correcciones Reales de las Profesoras).
    ├── 2. Plantilla Universal Blindada de Clases de Equivalencia (Entrada y Salida) y Valores Límite.
    ├── 3. Plantilla Universal Blindada de Matriz de Casos de Prueba.
    └── 4. Resoluciones Modelo Completas: Taxi Mobile (TP9), EcoHarmony Park (TP10) y Cambalache Solidario (Parciales 2025 Tema A y Tema B).
```

---

## Mapa Mental Integrador: El Hilo Conductor del Segundo Parcial

```mermaid
flowchart TD
    subgraph U2["UNIDAD 2: Flujo Continuo y Medición"]
        Lean["Filosofía Lean (Poppendieck)\n7 Principios + Eliminar 7 Desperdicios"]
        Kanban["Método Kanban\n6 Prácticas + Limitar WIP + Sistema Pull"]
        Metricas["Métricas en 3 Dominios\nProceso (Públicas) | Proyecto (Privadas) | Producto"]
        MetEnfoques["Métricas por Enfoque\nTradicional (Esfuerzo/PF) | Ágil (Velocidad/RTF) | Lean (Lead/Cycle/Touch Time)"]
        Nexus["Escalado Ágil (Nexus / LeSS)\nNexus Integration Team + Eventos Escalados"]
    end

    subgraph U3["UNIDAD 3: Entrega Continua"]
        AgileSCM["SCM Ágil\nCoordinación sobre control, sin CCB formal"]
        CI["Continuous Integration (CI)\nBuild + Tests Unitarios automáticos varias veces/día"]
        CD1["Continuous Delivery\nListo para prod + Decisión humana (1 click)"]
        CD2["Continuous Deployment\nPase a producción 100% automático"]
        Deploy["Estrategias de Despliegue\nCanary (progresivo %) vs. Blue/Green (2 entornos idénticos)"]
    end

    subgraph U4_Proc["UNIDAD 4A: Calidad de Proceso (Verificación / Prevención)"]
        Calidad["Concepto de Calidad\n5 Visiones Garvin + Programada/Realizada/Necesaria"]
        SQA["SQA / PPQA\nIndependiente del PM + Asegura Proceso y Producto"]
        Modelos["Modelos de Calidad\nProducto (McCall, ISO 25010) | Mejora (IDEAL, SPICE) | Evaluación (CMMI, ISO 9001)"]
        Auditorias["Auditorías de Software (Externas/Independientes)\nProyecto, Grupo QA, FCA, PCA -> Hallazgos: Desviaciones requieren Plan"]
        Revisiones["Revisiones Técnicas / Peer Reviews (Internas entre pares)\nWalkthrough (Informal) vs. Inspección de Fagan (Formal: 5 Roles, 6 Etapas)"]
    end

    subgraph U4_Prod["UNIDAD 4B: Calidad de Producto (Validación / Detección)"]
        Testing["Fundamentos de Testing\nError -> Defecto -> Falla | Severidad (Técnica) vs. Prioridad (Negocio)"]
        Niveles["Niveles, Ambientes y Ciclos\nUnitaria -> Integración -> Sistema -> Aceptación (Alfa/Beta) + Regresión"]
        Estrategias["Estrategias de Prueba\nCaja Blanca (McCabe, Coberturas) vs. Caja Negra (Partición Equivalencia + Valores Límite)"]
        AgileTest["Testing Ágil y TDD\n4 Cuadrantes (Q1-Q4) + Pirámide (80% Unit / 15% API / 5% GUI) + ATDD + TDD (Red-Green-Refactor)"]
    end

    Lean --> Kanban --> Metricas --> MetEnfoques
    Kanban --> CI --> CD1 --> CD2 --> Deploy
    AgileSCM --> CI
    Calidad --> SQA --> Modelos --> Auditorias & Revisiones
    Revisiones -->|"Previene defectos temprano"| Testing
    Testing --> Niveles --> Estrategias --> AgileTest
    CI -.->|"Automatiza Q1/Q2"| AgileTest
```

---

## Radiografía Forense del Segundo Parcial (Estructura Real 2025/2026)

El Segundo Parcial se divide en **dos exámenes independientes de 60 minutos cada uno**, sumando **100 puntos totales** (escala del 1 al 10, donde ~60% es aprobación con 4 y ~69-70% es promoción con 7):

| Parte | Puntaje | Tiempo | Estructura Exacta | Clave de Supervivencia |
| :--- | :---: | :---: | :--- | :--- |
| **1. Examen Teórico** | **50 pts** | 60 min | **• Punto 1 (18 pts):** Diseñar un Tablero Kanban completo para un escenario dado + definir Tipos de Ítems de Trabajo (con justificación) + redactar al menos 5 Políticas Explícitas (con propósito).<br>**• Punto 2 (32 pts = 8 × 4 pts):** 8 preguntas Multiple Choice con **múltiples opciones correctas**. | En el Kanban: separar cada actividad en `[En Curso / Producción]` + `[Listo / Buffer]`, poner WIP en todas, y definir punto de compromiso y entrega. En los MC: detectar la palabra trampa que invalida la opción. |
| **2. Examen Práctico** | **50 pts** | 60 min | Dado un Dominio y una tarjeta de User Story con Criterios de Aceptación y Pruebas de Usuario:<br>**• Punto 1 (20 pts):** Tabla de Clases de Equivalencia Válidas e Inválidas (de Entrada y de Salida).<br>**• Punto 2 (30 pts = 2 × 15 pts):** Diseñar 2 Casos de Prueba aplicando Valores Límite y cubriendo la mayor cantidad de clases. | Numerar correlativamente todas las clases ($1, 2, \dots, N$), incluir siempre **Usuario Logueado** como entrada, separar salidas por componente/mensaje, y en los Casos de Prueba usar **datos concretos** en Precondiciones, Pasos y Resultados Esperados. |

---

# UNIDAD 2: Gestión Lean-Ágil de Productos de Software (Continuación)

---

## 1. Filosofía Lean y Pensamiento Lean en el Desarrollo de Software

### A. Origen y Evolución del Pensamiento Lean (Slides 3 a 8 de `PRE_10_LEANKANBAN`)

* **En Forma (Definición Académica):**
  * El pensamiento Lean (*Lean Thinking*, término popularizado por Bob Emiliani y Womack/Jones) tiene su origen en el **Sistema de Producción Toyota (TPS)** diseñado por **Taiichi Ohno** en Japón tras la Segunda Guerra Mundial.
  * Es una filosofía de gestión enfocada en la **reducción de los 7 desperdicios (*muda*)** para mejorar la calidad, reducir el tiempo de producción y disminuir el costo total, logrando un flujo continuo de valor hacia el cliente bajo la premisa de *"hacer más con menos"* (menos esfuerzo humano, menos equipamiento, menos tiempo y menos espacio).
  * En **2003**, **Mary y Tom Poppendieck** publican *Lean Software Development: An Agile Toolkit*, adaptando los principios de Toyota al desarrollo de software.

* **En Criollo (Cómo pensarlo):**
  * Toyota no tenía la plata ni los galpones gigantes de Ford o General Motors para fabricar miles de autos por adelantado ("por las dudas" = sistema *Push*) y guardarlos en un depósito. Tuvo que inventar una forma de fabricar **solo lo que el cliente ya pidió y justo cuando lo necesita** (sistema *Pull*), eliminando cualquier actividad, espera o burocracia que no le agregue valor real al cliente. Poppendieck agarró esa misma lógica y dijo: *"En software, escribir código o documentos que nadie usa, o tener historias trabadas esperando que alguien las pruebe, es exactamente igual a acumular chapas oxidadas en un galpón"*.

---

### B. Los 7 Principios del Desarrollo de Software Lean (Poppendieck - Slides 10 a 18)

| # | Principio Lean | En Forma (Definición de Cátedra) | En Criollo y Ejemplo en Software |
| :-: | :--- | :--- | :--- |
| **1** | **Eliminar los desperdicios** (*Eliminate Waste*) | Desperdicio es **cualquier cosa que no añade valor al producto según la percepción del cliente**. El primer paso es aprender a identificarlos para luego erradicarlos. | Si el cliente no lo pidió, no lo usa o no mejora la calidad interna necesaria para entregarlo, es basura. Ej.: documentar 100 páginas que nadie lee. |
| **2** | **Amplificar el aprendizaje** (*Amplify Learning*) | El desarrollo de software es un proceso de aprendizaje continuo. No se espera "hacer todo bien de entrada", sino aprender rápido mediante ciclos cortos de retroalimentación, pruebas tempranas y entregas frecuentes. | Programar es descubrir qué quería realmente el usuario. En vez de adivinar durante 6 meses, hacés iteraciones cortas, mostrás prototipos/incrementos y aprendés del error rápido. |
| **3** | **Decidir lo más tarde posible** (*Decide as Late as Possible*) | Retrasar las decisiones irreversibles (arquitectura, diseño detallado) hasta el **"último momento responsable"**, cuando se cuenta con hechos reales y experiencia en lugar de suposiciones inciertas. | Si todavía no sabés cuánto tráfico va a tener la app, mantené el diseño desacoplado (flexible) y no te cases hoy con una base de datos carísima; decidilo cuando tengas datos reales. |
| **4** | **Entregar tan rápido como sea posible** (*Deliver as Fast as Possible*) | Cuanto antes se entrega el software funcional, antes recibe valor el cliente, antes se obtiene *feedback* real y menos tiempo tienen los requerimientos para cambiar en el camino. | La velocidad no es "programar apurado y mal", sino **eliminar las colas de espera** para que una historia pase de idea a producción en días y no en meses. |
| **5** | **Potenciar / Empoderar al equipo** (*Empower the Team*) | Respetar a las personas. Quienes realizan el trabajo técnico conocen mejor cómo hacerlo; se debe confiar en ellos, darles autonomía para autoorganizarse y escuchar sus alertas. | Viene del *Jidoka* de Toyota: cualquier operario podía frenar la línea si veía un defecto. En software, el equipo decide cómo construir y estima su trabajo sin que un jefe les imponga el cómo. |
| **6** | **Construir con integridad / Calidad embebida** (*Build Integrity In*) | La calidad no se agrega al final mediante pruebas masivas; se construye desde el inicio. El producto debe tener **integridad percibida** (útil y coherente para el usuario) e **integridad conceptual** (arquitectura limpia, mantenible y testeada con TDD/CI). | No sirve programar código basura y tirárselo a los testers al final para que "encuentren los bugs". Cada línea se escribe con pruebas automatizadas y refactorización continua. |
| **7** | **Ver el todo / Optimizar el todo** (*See the Whole*) | Un sistema no es la suma aislada de sus partes sino el producto de sus interacciones (Pensamiento Sistémico). Optimizar localmente un área a costa de otra degrada el rendimiento global. | Si los programadores escupen 50 historias por semana pero hay 1 solo tester, optimizaste "programación" pero rompiste el sistema entero creando un cuello de botella gigante en Testing. |

---

### C. Los 7 (+1) Desperdicios: Manufactura (Toyota) vs. Desarrollo de Software (Poppendieck - Slide 12)

> [!IMPORTANT]
> **Pregunta fija de Multiple Choice:** La cátedra toma la correspondencia exacta entre los 7 desperdicios industriales de Taiichi Ohno y los 7 desperdicios del software de Mary Poppendieck, más el **8vo desperdicio** agregado posteriormente.

| # | Desperdicio en Manufactura (TPS) | Desperdicio Equivalente en Software (Poppendieck) | Explicación en Criollo / Caso Concreto |
| :-: | :--- | :--- | :--- |
| **1** | **Sobreproducción** (*Overproduction*) | **Funcionalidades extras** (*Extra Features / Gold Plating*) | Desarrollar cosas "por las dudas" que el cliente no pidió o no necesita. **El 80% de las features rara vez o nunca se usan (solo el 7% se usa siempre y el 13% a menudo).** Cada línea extra cuesta mantenerla y testearla. |
| **2** | **Inventario** (*Inventory*) | **Trabajo parcialmente hecho** (*Partially Done Work*) | Requerimientos especificados pero no codificados, código escrito pero no integrado ni probado, o código probado pero no desplegado en producción. Es plata inmovilizada que se vuelve obsoleta y no da valor. |
| **3** | **Procesamiento extra** (*Extra Processing*) | **Procesos extras / Reaprendizaje** (*Extra Processes / Relearning*) | Burocracia inútil, formularios o documentos que nadie lee, o volver a descubrir conocimiento que ya alguien del equipo sabía pero no se compartió. |
| **4** | **Transporte** (*Transportation*) | **Transferencias / Pasamanos** (*Handoffs*) | Cada vez que el trabajo pasa de una persona/área a otra (Analista $\to$ Arquitecto $\to$ Dev $\to$ Tester $\to$ Operaciones) a través de documentos se pierde hasta un 50% de conocimiento tácito en cada pase ("teléfono descompuesto"). |
| **5** | **Espera** (*Waiting*) | **Esperas / Retrasos** (*Delays / Waiting*) | Historias esperando que el PO aclare una duda, esperando aprobación de arquitectura, esperando que haya ambiente de testing o que otro equipo termine una API. |
| **6** | **Movimiento** (*Motion*) | **Cambio de tareas / Context Switching** (*Task Switching*) | Asignar a un desarrollador a 3 proyectos o 4 tareas simultáneas. Cada cambio de contexto destruye la concentración y consume entre 20% y 40% del tiempo productivo en "volver a enchufarse". |
| **7** | **Defectos** (*Defects*) | **Defectos** (*Defects / Bugs*) | El costo de un defecto es directamente proporcional al tiempo que permanece oculto. Encontrarlo en producción cuesta exponencialmente más (retrabajo, hotfixes, pérdida de reputación) que prevenirlo o detectarlo al instante. |
| **+1 (8vo)** | **Talento no utilizado** | **Talento humano subutilizado / Creatividad desaprovechada** | Tratar a los ingenieros como meros "picadores de código" sin escuchar sus ideas de mejora del proceso o producto. |

---

### D. Relación Lean–Ágil y "Hacer Ágil" vs. "Ser Ágil" (Slides 19 a 24 de `PRE_10_LEANKANBAN`)

* **Relación Lean y Ágil:**
  * Lean y Ágil comparten valores y principios: ambos buscan entregar valor rápido, adaptarse al cambio, empoderar a las personas y mejorar continuamente.
  * **Diferencia de foco origen:** Ágil nació en 2001 específicamente para el desarrollo de software en equipos pequeños; Lean nació en manufactura y aporta una visión de **flujo de extremo a extremo (*end-to-end*) a nivel organizacional y sistémico**, por lo que Lean se utiliza fuertemente como base para **escalar la agilidad** a toda la empresa.
* **Hacer Ágil (*Doing Agile*) vs. Ser Ágil (*Being Agile*):**
  * **Hacer Ágil:** Es la adopción mecánica y superficial de prácticas, herramientas o ceremonias (ej. "usamos Jira, nos paramos 15 minutos a la mañana en la Daily y llamamos Sprint a las semanas") sin cambiar la cultura de comando y control.
  * **Ser Ágil:** Es internalizar la mentalidad (*mindset*), los **valores y principios** de colaboración, transparencia, confianza, seguridad psicológica para experimentar y foco genuino en el valor para el cliente.
  * **Regla de cátedra:** Se puede *Hacer Ágil* sin *Ser Ágil* (fracaso común en las empresas), pero para lograr resultados reales se necesita **ambos**: prácticas concretas respaldadas por una cultura y mentalidad ágil.

---

## 2. Método Kanban en el Contexto del Desarrollo de Software

### A. ¿Qué es y qué NO es el Método Kanban? (David J. Anderson - Slides 25 a 33)

* **En Forma (Definición Académica):**
  * La palabra japonesa *Kanban* significa literalmente **"tarjeta visual"** o **"señal visual"** (*Kan* = visual, *Ban* = tarjeta/tablero).
  * Formulado para el trabajo de conocimiento y software por **David J. Anderson (2010)**, el **Método Kanban** es un método para **definir, gestionar y mejorar servicios que entregan trabajo de conocimiento**, caracterizado por **empezar con lo que se hace ahora** y buscar el **cambio evolutivo e incremental** mediante la visualización del flujo y la limitación del trabajo en progreso (WIP).
  * **¡CUIDADO CON LA TRAMPA DE PARCIAL!** Kanban **NO es un ciclo de vida de desarrollo de software** ni una metodología de gestión de proyectos que reemplace todo de cero; es un **método de gestión de flujo y mejora evolutiva de procesos** que se aplica sobre un proceso ya existente (sea Scrum, RUP, Cascada o soporte técnico).

* **En Criollo:**
  * Si venís trabajando de una forma en tu empresa y traés Scrum, tenés que patear el tablero: cambiarle el título del puesto a la gente (ahora sos Product Owner, vos Scrum Master) y trabajar en Sprints fijos. En cambio, **Kanban llega en pantuflas**: te dice *"No cambies ningún rol ni ninguna ceremonia hoy. Dibujá en la pared exactamente los pasos reales que hacen hoy para entregar trabajo, poné un tope de cuántas tarjetas puede haber en cada columna y empezá a medir dónde se traban las cosas para mejorarlo de a poquito"*.

---

### B. Las 6 Prácticas Generales del Método Kanban (Slides 34 a 45)

```mermaid
flowchart LR
    P1["1. Visualizar el\nflujo de trabajo"] --> P2["2. Limitar el trabajo\nen curso (WIP)"]
    P2 --> P3["3. Gestionar y\nmedir el flujo"]
    P3 --> P4["4. Hacer explícitas las\npolíticas del proceso"]
    P4 --> P5["5. Implementar ciclos\nde retroalimentación"]
    P5 --> P6["6. Mejorar colaborativamente,\nevolucionar experimentalmente"]
```

1. **Visualizar el flujo de trabajo (*Visualize*):**
   * En el software el trabajo es invisible (está en la cabeza de los programadores o en servidores). Visualizarlo consiste en representar cada ítem de trabajo como una tarjeta en un tablero cuyas columnas reflejan **cada paso real por el que pasa el trabajo** desde que se solicita hasta que se entrega, haciendo visibles los bloqueos, colas y cuellos de botella.
2. **Limitar el trabajo en progreso (*Limit WIP - Work In Progress*):**
   * Restringir mediante un número máximo explícito la cantidad de ítems que pueden estar simultáneamente en cada estado o columna del tablero.
   * **Propósito:** Evitar la multitarea (*context switching*), exponer inmediatamente los cuellos de botella y transformar el flujo en un **sistema Pull** (solo se "tira" de una nueva tarea hacia adelante cuando se libera capacidad aguas abajo).
   * **Fórmula / Regla de Oro de Kanban:** **"Dejar de empezar y empezar a terminar" (*Stop starting, start finishing*)**.
3. **Gestionar y medir el flujo (*Manage Flow*):**
   * Lo que se gestiona es el flujo de trabajo a través del sistema, NO a las personas (queremos que las tarjetas se muevan rápido, no tener a las personas ocupadas al 100% haciendo cosas que quedan trabadas). Se monitorean métricas como *Lead Time*, *Cycle Time*, *Throughput* y Diagramas de Flujo Acumulado (CFD) para eliminar bloqueos.
4. **Hacer explícitas las políticas del proceso (*Make Process Policies Explicit*):**
   * Nadie puede mejorar ni autoorganizarse si las reglas del juego son tácitas o están en la cabeza de un jefe. Las reglas (qué significa que una tarea esté "Lista" para pasar de columna —*criterios de salida / pull criteria*—, límites de WIP, cómo se trata un bloqueo o una urgencia) deben estar **escritas y visibles para todos arriba o al costado del tablero**.
5. **Implementar ciclos de retroalimentación (*Implement Feedback Loops*):**
   * Establecer cadencias o reuniones regulares de revisión tanto operativas (Reunión Diaria frente al tablero Kanban viendo el flujo de derecha a izquierda) como de entrega de servicio, operaciones y estrategia con clientes y *stakeholders*.
6. **Mejorar colaborativamente, evolucionar experimentalmente (*Improve Collaboratively, Evolve Experimentally*):**
   * En lugar de opinar sin sustento en una retrospectiva y luego olvidar lo acordado, Kanban aplica el **método científico** y modelos formales (como la Teoría de las Restricciones de Goldratt o la Ley de Little): se formula una **hipótesis de mejora**, se ejecuta un **experimento** (ej. bajar el WIP de Desarrollo de 6 a 4), se **mide el impacto** en el *Cycle Time* y se consolida o revierte el cambio.

---

### C. Anatomía Técnica de un Tablero Kanban: Columnas de Producción vs. Columnas de Acumulación (Buffer)

> [!CAUTION]
> **ESTE CONCEPTO VALE 18 PUNTOS EN EL PARCIAL TEÓRICO:** En el Punto 1 del examen teórico te piden diseñar un tablero Kanban. Si solo ponés columnas simples como `Análisis | Desarrollo | Testing`, **te descuentan la mitad del puntaje**. Tenés que dividir las etapas en subcolumnas de **Producción (En Curso)** y **Acumulación (Buffer / Listo)** para habilitar el sistema *Pull*.

```text
+------------+-----------------------------------+-----------------------------------+-----------------------------------+------------+
|  BACKLOG / |        1. ANÁLISIS (WIP: 3)       |       2. DESARROLLO (WIP: 4)      |         3. TESTING (WIP: 2)       |   HECHO /  |
|  OPCIONES  +-----------------+-----------------+-----------------+-----------------+-----------------+-----------------+ DESPLEGADO |
|            | En Curso (Prod) |  Listo (Buffer) | En Curso (Prod) |  Listo (Buffer) | En Curso (Prod) |  Listo (Buffer) |            |
+------------+-----------------+-----------------+-----------------+-----------------+-----------------+-----------------+------------+
             ▲                                                                                                           ▲
    Punto de Compromiso                                                                                           Punto de Entrega
   (Empieza el Cycle Time)                                                                                     (Termina el Cycle Time)
```

* **Columnas de Producción (Actividad / Trabajo Activo / *In Progress*):**
  * Representan estados donde **se está ejecutando activamente trabajo que agrega valor** sobre el ítem (tiempo efectivo de trabajo = **Touch Time**). Ejemplo: *Análisis en Curso*, *Codificación en Curso*, *Testing en Curso*.
* **Columnas de Acumulación (Buffer / Espera / *Done* intermedio):**
  * Representan estados donde la etapa anterior ya terminó su trabajo sobre el ítem y este **queda en espera (cola)** hasta que la etapa siguiente tenga capacidad disponible en su WIP para "tirar" (*pull*) de él. Ejemplo: *Análisis Listo*, *Desarrollo Listo (Listo para Testear)*.
  * **¿Para qué sirven las columnas de acumulación?**
    1. Implementan el **Sistema Pull**: El equipo de *Análisis* NO "empuja" (*push*) la tarjeta a *Desarrollo en Curso*; la deja en *Análisis Listo*. Cuando *Desarrollo* se libera, **tira (*pull*)** de *Análisis Listo*.
    2. Permiten **medir el tiempo de espera vs. el tiempo de trabajo efectivo** (diferenciar *Touch Time* de *Cycle Time*).
    3. Como **comparten el límite de WIP de la columna padre** (ej. si *Desarrollo* tiene WIP = 4 y hay 4 tarjetas clavadas en *Desarrollo Listo* porque *Testing* está saturado), los desarrolladores **NO pueden empezar una 5ta tarea**; se ven obligados a ayudar a desbloquear *Testing*.

---

### D. Clases de Servicio (*Classes of Service* - CoS) en Kanban

Las **Clases de Servicio** determinan cómo se priorizan y tratan distintos ítems de trabajo según su **Costo de Retraso (*Cost of Delay*)** e impacto en el negocio. Suelen representarse con colores de tarjetas o carriles horizontales (*swimlanes*):

| Clase de Servicio | Cuándo se usa (Gatillo) | Política de Tratamiento en el Tablero |
| :--- | :--- | :--- |
| **1. Expedite (Urgente / Carril Rápido)** | Incidentes críticos en producción (servidor caído, falla bloqueante que frena las ventas hoy). Costo de retraso inmediato y altísimo. | Máxima prioridad. **Puede superar momentáneamente el límite de WIP** (pero solo se permite **máximo 1 ítem Expedite en todo el tablero** a la vez). El equipo frena lo demás para resolverlo. |
| **2. Fecha Fija (*Fixed Delivery Date*)** | Requerimientos con una fecha límite legal, regulatoria o comercial inamovible (ej. cambio impositivo de ARCA que rige el 1 de noviembre, o promo del Mundial). | Si se entrega después de la fecha, el valor cae a cero o hay multa. Se planifica su entrada al tablero calculando el *Lead Time* hacia atrás para garantizar que llegue a tiempo. |
| **3. Estándar (*Standard*)** | Evoluciones funcionales normales, mejoras e historias de usuario habituales del negocio. Costo de retraso lineal/gradual. | Siguen el flujo normal **FIFO** (*First In, First Out* o según priorización del backlog) respetando estrictamente los límites de WIP. |
| **4. Intangible** | Tareas técnicas cuyo valor no es visible de inmediato pero cuya postergación genera riesgo futuro (pago de deuda técnica, actualización de librerías, refactorización de arquitectura). | Se les asigna un porcentaje o cupo de capacidad cuando no hay urgencias, evitando que la deuda técnica haga colapsar el sistema a largo plazo. |

---

### E. Valores, Principios Directores y Principios Fundacionales de Kanban (Slides 30 a 33)

1. **Los 9 Valores del Método Kanban (Mike Burrows):**
   * **Transparencia**, **Equilibrio** (entre demandas y capacidades), **Colaboración**, **Foco en el Cliente**, **Flujo** (trabajo continuo de valor), **Liderazgo** (en todos los niveles), **Entendimiento** (autoconocimiento de la organización), **Acuerdo** (compromiso compartido hacia las metas) y **Respeto** (por las personas y sus roles actuales).
2. **Los 3 Principios Directores (Agendas de Sostenibilidad y Orientación al Servicio):**
   * **Foco en el cliente:** Entender las necesidades y expectativas del cliente.
   * **Gestionar el trabajo, dejar que la gente se autoorganice:** Gestionar las tareas y el flujo; permitir que los profesionales se autoorganicen alrededor de él.
   * **Evolucionar las políticas:** Revisar y mejorar regularmente las políticas para mejorar los resultados.
3. **Los 4 Principios Fundacionales de Gestión del Cambio:**
   * **Empezar con lo que se hace ahora** (comprender los procesos actuales tal como se practican realmente).
   * **Acordar buscar la mejora a través del cambio evolutivo** (no revoluciones traumáticas).
   * **Respetar el proceso, los roles, las responsabilidades y los cargos actuales** (reduce la resistencia al cambio).
   * **Fomentar actos de liderazgo en todos los niveles** (desde el desarrollador junior hasta la gerencia).

---

### F. Cómo Verlo de Diversas Formas: Cuadro Comparativo Scrum vs. Kanban

> [!TIP]
> **Cazabobos clásico de Multiple Choice:** Cuando el enunciado pregunta diferencias entre Scrum y Kanban, buscá siempre **Cadencia (Iteraciones fijas vs. Flujo continuo)**, **Roles prescriptos (PO/SM/Devs vs. Ningún rol obligatorio)** y **Métrica guía (Velocidad vs. Lead/Cycle Time)**.

| Dimensión | Framework SCRUM | Método KANBAN |
| :--- | :--- | :--- |
| **Naturaleza** | Marco de trabajo (*Framework*) ágil estructurado para desarrollo de productos complejos. | Método de gestión de flujo y mejora evolutiva de servicios. |
| **Cadencia / Iteraciones** | **Iteraciones de tiempo fijo (*Timeboxed Sprints*)** de 1 a 4 semanas. Principio, desarrollo y fin. | **Flujo continuo**. No requiere Sprints obligatorios (las entregas se hacen apenas un ítem se termina o a demanda). |
| **Roles Prescriptos** | **3 Roles obligatorios:** Product Owner, Scrum Master y Developers (Humanos + IA). | **No prescribe ningún rol obligatorio.** Se mantienen los roles existentes en la organización (aunque puede emerger un *Service Delivery Manager* o *Service Request Manager*). |
| **Límite del Trabajo** | Se limita **por iteración** (el *Sprint Backlog* según la Velocidad/Capacidad del Sprint). | Se limita **por estado/columna del flujo en tiempo real** mediante límites explícitos de **WIP**. |
| **Cambios durante el curso** | **No se permiten cambios** que pongan en peligro el *Sprint Goal* una vez iniciado el Sprint. | **Permite cambios en cualquier momento** en la cola de entrada antes del punto de compromiso: si se libera un lugar en la primera columna, puede entrar una prioridad nueva de inmediato. |
| **Estimación** | Requiere estimación relativa previa (ej. Story Points / Horas ideales) para planificar el Sprint. | **La estimación es opcional** (muchos equipos simplemente procuran ítems de tamaño similar y miden tiempos reales de ciclo y *Throughput*). |
| **Propiedad del Tablero** | El *Sprint Backlog* pertenece al equipo Scrum y **se reinicia en cada nuevo Sprint**. | El Tablero Kanban es **persistente** a lo largo del tiempo. |
| **Métrica Principal** | **Velocidad** (*Velocity* en Story Points aceptados por Sprint) y *Burndown Chart*. | **Lead Time**, **Cycle Time**, **Touch Time**, **Throughput** y **CFD** (Diagrama de Flujo Acumulado). |

---

## 3. MANUAL DE 18 PUNTOS: Cómo Diseñar el Tablero Kanban del Parcial Teórico

En los Segundos Parciales de ICSW (tanto Tema A como Tema B de 2025), el **Punto 1 del Teórico (18 puntos sobre 50)** tiene **exactamente el mismo formato**:
1. Te dan un caso de estudio de una empresa con problemas de sobrecarga, interrupciones, cuellos de botella en QA/Revisión y falta de visibilidad.
2. Te piden:
   * **a)** Diseñar el **Tablero Kanban completo** (columnas, subcolumnas, límites de WIP sugeridos, punto de compromiso y punto de entrega).
   * **b)** Identificar los **Tipos de Ítems de Trabajo** (y Clases de Servicio) que circularán por el tablero, **justificando** cada uno.
   * **c)** Definir al menos **5 Políticas Explícitas** para gestionar el flujo y **explicar el propósito** de cada una.

### A. La Receta Algorítmica en 5 Pasos (Para sacar 18/18 sin fallar)

* **PASO 1 — Leer el enunciado y subrayar los "Pasos del Proceso" y los "Dolores":**
  * Subrayá cada verbo de acción del flujo (ej. *Analizar/Diagnosticar $\to$ Desarrollar/Resolver $\to$ Revisar Código $\to$ Probar/QA $\to$ Desplegar/Cerrar*).
  * Subrayá cuántos miembros hay en el equipo (ej. si son 6 personas: 4 devs y 2 testers, la suma de los WIP activos no debería superar ~6 a 8 tarjetas para evitar multitarea).
* **PASO 2 — Dibujar las Columnas dividiendo Producción vs. Acumulación (Buffer):**
  * **Columna 0 (Izquierda):** `Backlog / Bandeja de Entrada` (sin WIP o con tope de priorizados) $\to$ **Columna de `Seleccionado / Listo para Iniciar` (WIP: X)**.
  * **Línea vertical punteada 1:** **PUNTO DE COMPROMISO** (acá arranca el *Cycle Time*).
  * **Columnas Centrales del Flujo:** Por cada etapa técnica identificada (Análisis, Desarrollo, Code Review, Testing/QA), dividila en **dos subcolumnas**:
    * `[En Curso (Producción)]` + `[Listo / Terminado (Acumulación / Buffer)]`.
    * Poné un **WIP numérico arriba de cada etapa** (ej. `Desarrollo [WIP: 3]`, `Testing QA [WIP: 2]`). **Regla:** Si el enunciado dice que hay cuello de botella en Revisión o QA, ponele un WIP ajustado y explícito a esa etapa.
  * **Línea vertical punteada 2:** **PUNTO DE ENTREGA** (acá termina el *Cycle Time*).
  * **Columna Final (Derecha):** `Desplegado en Producción / Cerrado (Done)`.
  * **Carril Horizontal Superior (*Swimlane*):** Agregá siempre un carril horizontal arriba llamado **`Carril Expedite / Urgencias Críticas (WIP: 1)`** para emergencias bloqueantes.
* **PASO 3 — Definir los Tipos de Ítems de Trabajo (con color y justificación):**
  * Extraé del texto los distintos pedidos que recibe el equipo (usualmente son 3 o 4):
    1. *Evolutivos / Nuevas Funcionalidades* (Tarjeta Azul/Verde - Clase Estándar).
    2. *Bugs / Defectos o Incidentes Críticos* (Tarjeta Roja - Clase Expedite o Prioridad Alta).
    3. *Requerimientos Regulatorios / Legales con Fecha Límite* (Tarjeta Amarilla - Clase Fecha Fija).
    4. *Mejoras Técnicas / Refactorización / Consultas* (Tarjeta Violeta - Clase Intangible/Estándar).
* **PASO 4 — Redactar las 5 (o 6) Políticas Explícitas con Estructura `[Regla Concreta] + [Propósito Lean/Kanban]`:**
  * Nunca escribas políticas vagas como *"Trabajar bien"*. Usá siempre estas **6 Políticas Blindadas** adaptadas al caso:
    1. **Política de Respeto de Límites de WIP y Sistema Pull:** *"Ningún miembro puede iniciar un nuevo ítem si la columna alcanzó su límite de WIP. Solo se puede 'tirar' (pull) de la columna de acumulación anterior cuando se libera cupo"*. **Propósito:** Evitar el *context switching* (multitarea) y exponer cuellos de botella.
    2. **Política de Colaboración ante Cuellos de Botella (*Swarming* / "Dejar de empezar, empezar a terminar"):** *"Cuando la subcolumna 'Listo' de Desarrollo se llena porque QA/Revisión está al límite de su WIP, los desarrolladores no toman nuevas historias del Backlog, sino que colaboran en desbloquear Revisiones o Pruebas"*. **Propósito:** Optimizar el flujo global (*Ver el Todo*) y reducir el *Cycle Time*.
    3. **Política de Criterios de Salida (*Definition of Ready / Definition of Done* por columna):** *"Un ítem solo puede pasar de 'Desarrollo en Curso' a 'Desarrollo Listo' si compila sin errores, pasa el 100% de las pruebas unitarias automatizadas y cumple los estándares de código"*. **Propósito:** Construir con calidad embebida y evitar retrabajo hacia atrás.
    4. **Política de Gestión de Carril Expedite / Urgencias:** *"Solo puede existir como máximo 1 ítem en el carril Expedite a la vez, reservado exclusivamente para incidentes críticos que frenan la operación del cliente. El equipo prioriza su resolución inmediata"*. **Propósito:** Atender emergencias reales sin destruir la previsibilidad del resto del flujo.
    5. **Política de Tratamiento de Ítems Bloqueados:** *"Si un ítem no puede avanzar por una dependencia externa o falta de respuesta del cliente, se marca visualmente con un indicador rojo de 'Bloqueado', se registra la fecha/causa y se escala en la reunión diaria. El ítem bloqueado sigue ocupando lugar en el WIP"*. **Propósito:** Hacer visibles los impedimentos para resolverlos rápido en vez de acumular trabajo parcialmente hecho.
    6. **Política de Priorización en Punto de Compromiso (Bandeja de Entrada):** *"El ingreso de ítems a la columna 'Listo para Iniciar' se realiza según su Clase de Servicio (1° Expedite, 2° Fecha Fija próxima a vencer, 3° Estándar por orden de valor de negocio)"*. **Propósito:** Alinear la capacidad técnica con las prioridades reales del negocio.

---

### B. Resoluciones Modelo de los Exámenes Reales 2025 (Temas A y B)

#### Caso Real 1: Parcial 2025 Tema A — *Equipo de Mantenimiento Evolutivo (Fintech: 4 Devs + 2 QAs)*
* **Dolores del enunciado:** Reciben mejoras funcionales, bugs de producción, cambios regulatorios del BCRA con fecha fija y refactorizaciones. Los devs empiezan muchas cosas a la vez, las tareas se acumulan esperando *Code Review* y *QA*, y cuando entra un bug urgente abandonan lo que estaban haciendo dejando código a mitad de camino.
* **Diseño del Tablero Kanban Modelo (18/18 pts):**

```text
+-----------------------------------------------------------------------------------------------------------------------------------+
| CARRIL EXPEDITE (Bugs Críticos Producción - Caída de pagos) [WIP MÁXIMO EN TODO EL CARRIL: 1]                                     |
+--------------+--------------+--------------------+-----------------------+--------------------+---------------------+-------------+
|   BACKLOG    | SELECCIONADO |  1. ANÁLISIS TÉCN. |     2. DESARROLLO     |   3. CODE REVIEW   |   4. TESTING / QA   | DESPLEGADO  |
|  DE PEDIDOS  |  PARA INICIAR|      [WIP: 2]      |        [WIP: 3]       |      [WIP: 2]      |       [WIP: 2]      |  EN PROD    |
| (Sin límite) |   [WIP: 3]   +---------+----------+-----------+-----------+---------+----------+----------+----------+   (DONE)    |
|              |              |En Curso |  Listo   | En Curso  |   Listo   |En Curso |  Listo   | En Curso |  Listo   |             |
|              |              | (Prod.) | (Buffer) |  (Prod.)  |  (Buffer) | (Prod.) | (Buffer) |  (Prod.) | (Buffer) |             |
+--------------+--------------+---------+----------+-----------+-----------+---------+----------+----------+----------+-------------+
               |              ▲                                                                                       ▲
               |     PUNTO DE COMPROMISO                                                                       PUNTO DE ENTREGA
               |   (Inicia el Cycle Time)                                                                   (Termina el Cycle Time)
+--------------+--------------------------------------------------------------------------------------------------------------------+
| CARRIL ESTÁNDAR / FECHA FIJA / INTANGIBLE (Suma de WIP activos: 2 + 3 + 2 + 2 = 9 tarjetas máx para 6 personas, con buffers)      |
+-----------------------------------------------------------------------------------------------------------------------------------+
```

* **Tipos de Ítems de Trabajo (con justificación):**
  1. **Bug Crítico de Producción (Rojo - Clase Expedite):** Fallas graves en producción que impiden operar a los clientes. Justificación: Requieren atención inmediata por su altísimo costo de retraso.
  2. **Cambio Regulatorio BCRA (Amarillo - Clase Fecha Fija):** Normativas legales con fecha de vencimiento obligatoria. Justificación: Deben diferenciarse para garantizar que ingresen al flujo con suficiente antelación (según el *Lead Time*) y evitar multas.
  3. **Mejora Evolutiva / Nueva Funcionalidad (Verde - Clase Estándar):** Nuevos requerimientos de negocio solicitados por clientes/producto. Justificación: Son el flujo normal de creación de valor y avanzan por orden de prioridad.
  4. **Deuda Técnica / Refactorización (Azul - Clase Intangible):** Mejoras internas de arquitectura o rendimiento. Justificación: Visibilizarlas evita que queden ocultas o postergadas indefinidamente degradando la calidad futura.

#### Caso Real 2: Parcial 2025 Tema B — *Mesa de Ayuda e Incidentes Críticos (Software ERP: 5 Especialistas)*
* **Dolores del enunciado:** Reciben tickets críticos (sistema caído), reclamos por errores funcionales, consultas de uso y pedidos de configuración. Todo entra mezclado, los especialistas tienen hasta 6 tickets abiertos cada uno a la vez, los tickets quedan días esperando respuesta del cliente ("en espera") o validación de un referente senior, y los clientes se quejan del altísimo tiempo de respuesta (*Lead Time*).
* **Diseño del Tablero Kanban Modelo (18/18 pts):**
  * **Columnas:** `Bandeja de Entrada (Triage)` $\to$ `Listo para Atender [WIP: 4]` $\to$ **[Punto de Compromiso]** $\to$ `1. Diagnóstico y Análisis [WIP: 3] (En Curso | Listo)` $\to$ `2. Resolución / Configuración [WIP: 3] (En Curso | Listo)` $\to$ `3. Validación Senior / Pruebas [WIP: 2] (En Curso | Listo)` $\to$ `4. Confirmación del Usuario [WIP: 3]` $\to$ **[Punto de Entrega]** $\to$ `Ticket Cerrado`.
  * **Tipos de Ítems:** 1) *Incidente Crítico / Caída de ERP* (Expedite, WIP: 1), 2) *Error Funcional / Bug* (Estándar Alta), 3) *Pedido de Configuración / Parametrización* (Estándar Media), 4) *Consulta de Usuario* (Flujo Rápido / Fast-track que tras Diagnóstico puede pasar directo a Confirmación sin requerir desarrollo).

---

## 4. Escalado Ágil: Framework Nexus y LeSS (Evaluado en Multiple Choice 2025)

> [!WARNING]
> Aunque en el punteo general dice "Unidad 2: Filosofía Lean y Kanban", **tanto en el Tema A como en el Tema B del Segundo Parcial 2025 tomaron una pregunta completa de 4 puntos sobre el Framework NEXUS** (Escalado de Scrum). Acá tenés el desarrollo exacto para no perder esos 4 puntos.

### A. ¿Cuándo y por qué Escalar Scrum?
* Un equipo Scrum individual es óptimo con hasta **10 miembros**. Cuando un mismo producto grande requiere que **entre 3 y 9 equipos Scrum** (de 30 a ~100 personas) trabajen simultáneamente sobre el **mismo Product Backlog** y la **misma base de código** para producir un único **Incremento Integrado**, surgen dependencias cruzadas de requerimientos, arquitectura y software. Para resolverlas nacen los marcos de escalado como **Nexus** (creado por Ken Schwaber / Scrum.org) y **LeSS** (*Large-Scale Scrum*, de Larman y Vodde).

### B. El Framework NEXUS (Ken Schwaber - Scrum.org)

* **En Forma (Definición Académica):**
  * **Nexus** es un marco de trabajo exoesquelético que une de **3 a 9 equipos Scrum** que trabajan en un **único Product Backlog** para construir un **Incremento Integrado** que cumpla con la Definición de Hecho (*Definition of Done*) al menos en cada Sprint.
* **El Nuevo Rol Clave: El Equipo de Integración Nexus (*Nexus Integration Team - NIT*):**
  * Está compuesto por:
    1. El **Product Owner** (¡hay UN SOLO Product Owner para todo el Nexus!).
    2. Un **Scrum Master**.
    3. Uno o más **Miembros del Equipo de Integración Nexus** (que suelen ser desarrolladores representantes de los distintos equipos Scrum individuales).
  * **Responsabilidad del NIT (¡Cazabobos de Parcial!):** El NIT **NO hace el trabajo de integración por sí mismo como un equipo separado que junta el código**, sino que es **responsable (*accountable*) de asegurar que se produzca un Incremento Integrado "Done"** al menos una vez por Sprint. Para ello, entrena, guía, provee herramientas de CI/CD, detecta dependencias entre equipos y ayuda a resolver problemas de integración. (Los miembros del NIT pueden trabajar también en sus propios equipos Scrum, pero **dan prioridad a su trabajo en el NIT**).
* **Artefactos en Nexus:**
  1. **Un único Product Backlog** para todos los equipos Scrum (gestionado por el único Product Owner).
  2. **Nexus Sprint Backlog:** Artefacto nuevo compuesto por los ítems del Product Backlog seleccionados por todos los equipos para el Sprint y **las dependencias entre ellos** (sirve para hacer transparentes las dependencias cruzadas durante el Sprint).
  3. **Un único Incremento Integrado:** La suma integrada de todo el trabajo completado por todos los equipos Scrum del Nexus.
* **Eventos en Nexus** (Rodean, preceden o reemplazan a los eventos de los equipos individuales):
  1. **Refinamiento del Product Backlog (Obligatorio en Nexus):** A diferencia de Scrum de 1 equipo donde el refinamiento es una actividad continua, en Nexus es un **evento formal** para descomponer ítems grandes, identificar qué equipo hará qué y **eliminar o minimizar dependencias entre equipos** antes del Sprint Planning.
  2. **Nexus Sprint Planning:** Primero representantes de cada equipo se reúnen para coordinar dependencias y seleccionar ítems hacia el *Nexus Sprint Backlog*, definiendo el **Nexus Sprint Goal**; luego cada equipo Scrum planifica su propio *Sprint Backlog*.
  3. **Nexus Daily Scrum:** Representantes apropiados de cada equipo Scrum se reúnen diariamente **ANTES** de los *Daily Scrums* de sus equipos individuales para inspeccionar el estado del Incremento Integrado y detectar problemas de integración o dependencias del día, los cuales luego llevan a las Dailies de cada equipo.
  4. **Nexus Sprint Review:** **Reemplaza** a las Sprint Reviews individuales (hay una sola *Nexus Sprint Review* para todo el Nexus, porque hay un solo Incremento Integrado para mostrar a los stakeholders).
  5. **Nexus Sprint Retrospective:** Se divide en **3 partes**:
     * *Parte 1:* Representantes de los equipos se reúnen para identificar problemas compartidos de integración/escalado.
     * *Parte 2:* Cada equipo Scrum realiza su propia *Sprint Retrospective* individual (incluyendo los temas surgidos en la Parte 1).
     * *Parte 3:* Los representantes vuelven a reunirse para acordar cómo visualizar y dar seguimiento a las acciones de mejora comunes para el próximo Sprint.

### C. Gatillos y Trampas de NEXUS en el Parcial 2025
* ❌ **Trampa Falsa 1:** *"En Nexus cada equipo Scrum tiene su propio Product Owner y su propio Product Backlog"*. $\to$ **FALSO**. Hay **1 solo Product Owner** y **1 solo Product Backlog** para todo el producto.
* ❌ **Trampa Falsa 2:** *"La Nexus Daily Scrum se realiza después de las Daily Scrums individuales de cada equipo"*. $\to$ **FALSO**. Se realiza **ANTES**, para detectar problemas de integración y bajarlos a la Daily de cada equipo.
* ❌ **Trampa Falsa 3:** *"Cada equipo Scrum hace su propia Sprint Review por separado"*. $\to$ **FALSO**. Hay una única **Nexus Sprint Review** sobre el Incremento Integrado.

---

## 5. Métricas en los Diferentes Enfoques (Tradicional, Ágil y Lean/Kanban)

### A. Concepto de Métrica, Epifenómenos y Reglas Éticas (Slides 1 a 17 de `PRE_11_Métricas`)

* **En Forma (Definición Académica):**
  * **Medir** es un mecanismo para **asignar de manera objetiva un número** (o una categoría en una escala definida) a un atributo o propiedad de una entidad (proceso, proyecto o producto) con el propósito de describirla, comprenderla, predecirla o mejorarla.
  * **Dato $\neq$ Métrica $\neq$ Indicador:** Una medida aislada es un dato (ej. "encontramos 15 defectos"); una **métrica** relaciona medidas (ej. "15 defectos cada 1000 líneas de código o por User Story"); un **indicador** contrasta la métrica contra un umbral o meta para tomar decisiones.
  * **Escala Objetiva (Numérica) vs. Escala Subjetiva (Categórica):** Siempre se prefiere medir cuantitativamente con números objetivos; cuando una cualidad es difícil de cuantificar (ej. "satisfacción del cliente" o "usabilidad"), se utiliza una escala subjetiva acotada (ej. *Muy Mala, Mala, Regular, Buena, Excelente*) intentando definir criterios claros para reducir el sesgo de percepción.
  * **Epifenómenos (¡Palabra clave de cátedra!):** En muchos casos **no se puede medir un atributo directamente** (ej. "la calidad del diseño" o "la mantenibilidad"), por lo que debemos medir **epifenómenos**, es decir, síntomas secundarios o atributos indirectos observables que se correlacionan con el atributo principal (ej. medir el acoplamiento o la complejidad ciclomática como epifenómeno de la mantenibilidad).
  * **Relación Costo-Beneficio de las Métricas:** Recolectar y analizar métricas **cuesta tiempo y dinero**. Nunca se debe medir "por medir"; toda métrica debe responder a un objetivo de información claro, y el beneficio de las decisiones tomadas gracias a ella debe superar el costo de su recolección (idealmente automatizando la toma de datos).
  * **Regla Ética Inquebrantable (Ley de Goodhart / Efecto Hawthorne):** **NUNCA se deben utilizar las métricas de ingeniería de software para premiar o castigar individualmente a las personas.** Si evaluás o pagás bonos a un programador por "líneas de código escritas", escribirá código inflado y repetitivo; si evaluás a un equipo por "no reportar bugs", ocultarán los defectos debajo de la alfombra.

* **En Criollo:**
  * Medir es ponerle el termómetro al proyecto para no manejar a ciegas. Como no podés meter una regla adentro del software para medir "cuánta calidad tiene", medís pistas indirectas (*epifenómenos*), igual que el médico mide la fiebre para saber si hay infección. Y jamás uses el termómetro para pegarle en la cabeza al programador, porque al otro día te rompe el termómetro o lo mete en agua fría para que dé 36.5°C.

---

### B. Los 3 Dominios de las Métricas: Proceso, Proyecto y Producto (Slides 18 a 25)

> [!IMPORTANT]
> **Pregunta Fija de Parcial (Apareció en Tema A y Tema B 2025):** ¿Quién usa cada dominio de métrica, cuál es su alcance y cuáles son públicas vs. privadas?

| Dominio de Métrica | ¿Qué evalúa y cuál es su propósito? | ¿Quién la recolecta / utiliza principalmente? | Alcance Temporal y Visibilidad (Pública vs. Privada) | Ejemplos Típicos |
| :--- | :--- | :--- | :--- | :--- |
| **1. Métricas de PROCESO** | Evalúan la **eficacia y eficiencia del proceso de desarrollo** a nivel organizacional a lo largo de múltiples proyectos para impulsar la **mejora continua a largo plazo**. | **Ingeniero de Procesos** / Grupo de Procesos (SEPG) / Gerencia de Calidad. | **Estratégico (Largo Plazo).** Son **PÚBLICAS y DESPERSONALIZADAS** (consolidan datos estadísticos de varios proyectos sin exponer a personas individuales). | Eficiencia de remoción de defectos entre fases, tiempo medio de ciclo organizacional, adherencia al estándar, ROI de introducir TDD en la empresa. |
| **2. Métricas de PROYECTO** | Evalúan el **estado actual, avance, costos, riesgos y desvíos de un proyecto particular en ejecución** para permitir ajustes tácticos y controlar plazos/presupuesto. | **Líder de Proyecto (PM)** / Scrum Master / Equipo del proyecto. | **Táctico (Corto/Mediano Plazo, dura lo que dura el proyecto).** Son **PRIVADAS del proyecto** (para uso interno de gestión del equipo/PM). | *Effort Variance* (Varianza de esfuerzo), *SPI* (Índice de desempeño de cronograma), Velocidad del equipo en el Sprint, *Burndown Chart*. |
| **3. Métricas de PRODUCTO** | Evalúan las **características técnicas internas y externas del artefacto de software** (tamaño, complejidad, diseño, confiabilidad, defectos) para asegurar su calidad técnica. | **Desarrolladores y Testers** (y Arquitectos). | **Técnico (Sobre las versiones del producto).** | Complejidad Ciclomática de McCabe, Cobertura de código (*Code Coverage*), Densidad de defectos, Puntos de Función / Tamaño, Tiempo Medio Entre Fallos (MTBF). |

---

### C. Métricas en el Enfoque Tradicional (Slides 26 a 38)

En el enfoque tradicional (procesos definidos, predictivos, orientados al cumplimiento del plan de tiempo, alcance y presupuesto), las métricas giran en torno a **4 variables base**: **Tamaño**, **Esfuerzo**, **Calendario (Tiempo)** y **Defectos**.

1. **Métricas de Tamaño:**
   * **LOC / KLOC (*Lines of Code* / Miles de líneas de código):** Fácil de contar automáticamente una vez escrito el código, pero **muy mala métrica hoy en día** porque depende del lenguaje de programación, penaliza el código conciso/bien refactorizado y no sirve para estimar al inicio antes de programar.
   * **Puntos de Función (PF - *Function Points*):** Mide el tamaño funcional del sistema desde la perspectiva del usuario (entradas, salidas, consultas, archivos lógicos internos e interfaces externas), **independientemente del lenguaje o tecnología**.
2. **Métricas de Esfuerzo y Calendario (Control de Gestión del Proyecto):**
   * **Esfuerzo:** Se mide en **horas-hombre, días-hombre o meses-hombre**.
   * **Varianza de Esfuerzo (*Effort Variance* - EV):** Mide la desviación entre el esfuerzo real consumido y el esfuerzo estimado/planificado:
     $$\text{Effort Variance (\%)} = \frac{\text{Esfuerzo Real} - \text{Esfuerzo Estimado}}{\text{Esfuerzo Estimado}} \times 100$$
     *(Si da positivo, el proyecto consumió más esfuerzo del previsto).*
   * **Índice de Desempeño del Cronograma (*Schedule Performance Index* - SPI):** Mide la eficiencia en el uso del tiempo comparando el valor ganado (trabajo realmente completado) contra el valor planificado a la fecha:
     $$\text{SPI} = \frac{\text{EV (Valor Ganado / Trabajo Completado)}}{\text{PV (Valor Planificado)}}$$
     * Si $\text{SPI} = 1$: En fecha exacta según el plan.
     * Si $\text{SPI} < 1$: **Proyecto atrasado** (se completó menos trabajo del previsto para hoy).
     * Si $\text{SPI} > 1$: Proyecto adelantado respecto al cronograma.
3. **Métricas de Calidad y Defectos Tradicionales:**
   * **Densidad de Defectos (*Defect Density*):** Cantidad de defectos encontrados dividida por el tamaño del software o módulo:
     $$\text{Densidad de Defectos} = \frac{\text{Cantidad Total de Defectos}}{\text{Tamaño (KLOC, PF o Cantidad de US)}}$$
   * **Tasa de Fallos (*Failure Rate*) / MTBF:** Frecuencia con la que aparecen fallas en ejecución a lo largo del tiempo operativo.

---

### D. Métricas en el Enfoque Ágil / Scrum (Slides 39 a 49)

En el enfoque ágil no medimos el éxito por "cumplir ciegamente un plan escrito hace 6 meses", sino por la **entrega continua y sostenible de valor funcional aceptado por el cliente**.

| Métrica Ágil | Definición Formal de Cátedra | Reglas Críticas y Trampas de Parcial |
| :--- | :--- | :--- |
| **1. Velocidad (*Velocity*)** | Cantidad de **Puntos de Historia (*Story Points*)** correspondientes a las Historias de Usuario que fueron **100% terminadas (cumplen DoD) y ACEPTADAS por el Product Owner** al finalizar el Sprint. | **¡Regla Binaria (Todo o Nada)!** Si una historia de 8 SP está al 95% al terminar el Sprint, **suma 0 puntos** a la velocidad de ese Sprint (pasará al siguiente). **NUNCA se debe comparar la velocidad de dos equipos distintos**, porque el Story Point es una medida relativa propia de cada equipo. |
| **2. Capacidad (*Capacity*)** | Cantidad de trabajo que el equipo **estima que podrá realizar** en el próximo Sprint, considerando la disponibilidad real de sus miembros (descontando feriados, vacaciones, licencias, tiempo de ceremonias). | Se puede expresar en **Horas Ideales disponibles** del equipo para el Sprint (para desglosar tareas en el *Sprint Planning*) o como **Velocidad Estimada** basada en el promedio histórico. |
| **3. RTF (*Running Tested Features*)** | Métrica creada por **Ron Jeffries**. Mide la cantidad de **funcionalidades / historias de usuario que están ejecutándose, pasando todas sus pruebas automatizadas (aceptación y regresión) e integradas** listas para producción en cada momento. | A diferencia de medir fases intermedias ("tenemos 80% de análisis hecho"), RTF exige que la barra suba **únicamente cuando hay software funcionando y probado de punta a punta** desde el Sprint 1. |
| **4. Gráficos Burn (Burndown / Burnup / Combined)** | • **Burndown Chart:** Trabajo pendiente (eje Y) vs. Tiempo (eje X); la línea baja hacia cero.<br>• **Burnup Chart:** Trabajo completado acumulado vs. Línea de alcance total; permite ver si se agregaron o quitaron requerimientos.<br>• **Combined Burn Chart:** Combina el trabajo restante hacia abajo y los cambios de alcance en la base. | El *Burndown* no distingue si el trabajo pendiente subió porque el equipo fue lento o porque se agregaron historias; el **Burnup** y el **Combined Burn Chart** hacen explícito el cambio de alcance (*Scope Creep*). |

---

### E. Métricas en el Enfoque Lean / Kanban (Slides 50 a 60)

> [!IMPORTANT]
> **TEMA ESTRELLA DEL SEGUNDO PARCIAL:** La diferencia exacta entre **Lead Time**, **Cycle Time**, **Touch Time** y la fórmula de **Eficiencia del Ciclo de Proceso** se evalúa en casi todos los turnos. Mirá el diagrama temporal abajo para que te quede grabado a fuego.

```text
  El cliente pide          El equipo se compromete        Termina y se entrega
  el requerimiento         y lo mete al flujo activo      al cliente (Producción)
         │                            │                              │
         ▼                            ▼                              ▼
=========+============================+==============================+=========► Tiempo
         │                            │  [Trabaja] [Espera] [Trabaja]│
         │                            │  (Touch)   (Buffer) (Touch)  │
         │                            ├──────────────────────────────┤
         │                            │          CYCLE TIME          │
         │                            │   (Vista Interna del Equipo) │
         ├────────────────────────────┴──────────────────────────────┤
         │                  LEAD TIME / ELAPSED TIME                 │
         │                (Vista Externa del Cliente)                │
```

1. **Lead Time (o *Elapsed Time* — Tiempo de Entrega):**
   * **Definición:** Es el tiempo total que transcurre desde que **el cliente realiza el pedido** (entra al Backlog/Bandeja) hasta que **el requerimiento está terminado y entregado al cliente**.
   * **Perspectiva:** Es la **vista externa del cliente** (*"¿Cuánto tardan desde que les pido algo hasta que lo puedo usar?"*).
2. **Cycle Time (Tiempo de Ciclo):**
   * **Definición:** Es el tiempo que transcurre desde que **el equipo se compromete con el ítem y comienza a trabajar en él** (cruza el Punto de Compromiso en el tablero Kanban) hasta que **finaliza su desarrollo/entrega** (cruza el Punto de Entrega).
   * **Perspectiva:** Es la **vista interna de capacidad del proceso/equipo**. Incluye tanto el tiempo en que se estuvo trabajando sobre la tarea (columnas de Producción) como el tiempo en que estuvo esperando entre etapas (columnas de Acumulación / Buffer).
   * **Relación matemática siempre verdadera:** $\text{Lead Time} \ge \text{Cycle Time}$.
3. **Touch Time (Tiempo de Contacto / Tiempo de Trabajo Efectivo):**
   * **Definición:** Es únicamente la suma del tiempo en que **alguien estuvo trabajando activamente sobre el ítem agregándole valor** (solo el tiempo en las subcolumnas de **Producción**, **excluyendo** todos los tiempos de espera en colas o subcolumnas de Acumulación/Buffer y bloqueos).
   * **Relación matemática siempre verdadera:** $\text{Touch Time} \le \text{Cycle Time} \le \text{Lead Time}$.
4. **Eficiencia del Ciclo de Proceso (*Process Cycle Efficiency* - PCE):**
   * **Fórmula Oficial de Cátedra:**
     $$\text{Eficiencia del Ciclo de Proceso} = \frac{\text{Touch Time}}{\text{Lead Time}} \quad (\text{o } \times 100\text{ para expresarlo en \%})$$
   * **Interpretación:** Mide qué proporción del tiempo total de espera del cliente se dedicó realmente a agregar valor sobre el producto.
     * Cuanto **más cercano a 1 (o 100%)**, más eficiente y fluido es el proceso (casi no hubo colas ni esperas en buffers).
     * Cuanto **más cercano a 0**, más ineficiente es el proceso (la tarjeta pasó el 90% de su vida durmiendo en colas de acumulación o bloqueada).
   * **Ejemplo numérico rápido:** Si un cliente pide un cambio el lunes a la mañana y se le entrega el viernes a la tarde ($\text{Lead Time} = 5\text{ días} = 40\text{ hs hábiles}$), el equipo lo tomó el miércoles ($\text{Cycle Time} = 3\text{ días} = 24\text{ hs}$), pero entre esperas de revisión y QA el programador y el tester solo lo tocaron efectivamente durante $4\text{ horas}$ ($\text{Touch Time} = 4\text{ hs}$), entonces:
     $$\text{Eficiencia del Ciclo de Proceso} = \frac{4\text{ hs}}{40\text{ hs}} = 0.10 \text{ (10\% de eficiencia; el 90\% fue desperdicio de espera)}$$
5. **Throughput (Rendimiento / Tasa de Entrega) y Ley de Little:**
   * **Throughput:** Cantidad de ítems de trabajo completados por unidad de tiempo (ej. *12 historias por semana* o *3 tickets por día*).
   * **Ley de Little:** $\text{Cycle Time Promedio} = \frac{\text{WIP Promedio}}{\text{Throughput Promedio}}$. **Conclusión:** Si querés bajar el *Cycle Time* (entregar más rápido) sin contratar más gente, **tenés que reducir el WIP**.
6. **Diagrama de Flujo Acumulado (*Cumulative Flow Diagram* - CFD):**
   * Gráfico de áreas apiladas donde cada banda de color muestra la cantidad acumulada de tarjetas en cada columna del tablero a lo largo del tiempo:
     * La **distancia vertical** de una banda en un día dado es el **WIP** en esa etapa.
     * La **distancia horizontal** entre la línea superior e inferior es el **Cycle Time / Lead Time promedio**.
     * Si una banda se **ensancha verticalmente**, significa que entraron más tareas de las que salieron $\to$ **¡hay un cuello de botella en la etapa siguiente!**.

---

# UNIDAD 3: Gestión de Software como Producto — SCM Ágil y Prácticas Continuas

---

## 1. Gestión de Configuración del Software (SCM) en Ambientes Ágiles

* **En Forma (Definición Académica):**
  * Mientras que en el enfoque tradicional la Gestión de Configuración (SCM) tiene un carácter fuertemente **prescriptivo, formal y burocrático** orientado al control estricto de los desarrolladores mediante un Comité de Control de Cambios (CCB) y Auditorías de Configuración formales (FCA/PCA), en **ambientes ágiles** el enfoque cambia radicalmente: **la SCM está al servicio del equipo de desarrollo y no al revés**.
  * En metodologías ágiles, la SCM **posibilita el seguimiento, la integración rápida y la coordinación colectiva del desarrollo en lugar de controlar a los desarrolladores**.
  * **¡Cazabobos de Examen (Apareció textual en los apuntes)!**
    1. En ambientes ágiles **NO existe un Comité de Control de Cambios (CCB) formal** (el cambio es bienvenido y priorizado continuamente por el Product Owner en el Product Backlog).
    2. Como los equipos ágiles son autoorganizados y validan el incremento en cada Sprint mediante pruebas automatizadas y la *Sprint Review*, **las Auditorías de Configuración formales (FCA/PCA) NO son una actividad propia de la SCM en ambientes ágiles**.
    3. El repositorio de control de versiones es compartido por **desarrolladores y testers** (donde viven tanto el código fuente de producción como los scripts de pruebas automatizadas y la configuración de infraestructura).

---

## 2. Prácticas Continuas: CI vs. Continuous Delivery vs. Continuous Deployment

### A. Las 3 Prácticas Continuas y el Pipeline de Despliegue (*Deployment Pipeline*)

```mermaid
flowchart LR
    Code["Commit de Código\n(Varias veces al día)"] --> Build["Build + Tests Unitarios\ny de Integración Auto"]
    Build --> AccTest["Tests de Aceptación y\nNo Funcionales Auto (Staging)"]
    AccTest -->|"Aprobación Manual\n(Decisión Humana: 1 Click)"| Prod1["Producción\n(Continuous Delivery)"]
    AccTest ==>|"100% Automático\n(Sin intervención humana)"| Prod2["Producción\n(Continuous Deployment)"]

    subgraph SG_CI["1. CONTINUOUS INTEGRATION (CI)"]
        Code
        Build
    end
    subgraph SG_CD1["2. CONTINUOUS DELIVERY (CDelivery)"]
        SG_CI
        AccTest
        Prod1
    end
```

| Práctica Continua | En Forma (Definición Exacta de Cátedra) | En Criollo y Gatillo de Examen |
| :--- | :--- | :--- |
| **1. Integración Continua (*Continuous Integration* - CI)** | Práctica de desarrollo en la que los miembros del equipo **integran su trabajo en la rama principal (*trunk/main*) frecuentemente —al menos una vez al día, usualmente varias veces al día—**. Cada integración es verificada automáticamente mediante la **construcción (*build*) del software y la ejecución de pruebas automatizadas (unitarias y de integración)** para detectar errores de integración lo antes posible. | En vez de programar cada uno en su rama durante 1 mes y sufrir el "infierno de integración" (*merge hell*) cuando nada compila junto, todos suben cambios chiquitos varias veces al día. Un servidor (ej. GitHub Actions, Jenkins) compila y corre los tests al instante. **Si el build se rompe, arreglarlo es la prioridad #1 del equipo.** |
| **2. Entrega Continua (*Continuous Delivery*)** | Extiende la Integración Continua asegurando que el código pase por un *pipeline* automatizado de pruebas de aceptación y preproducción, de modo que el software **esté SIEMPRE en un estado listo para ser desplegado en producción en cualquier momento**, pero **el despliegue efectivo a producción requiere una decisión humana (de negocio) manual** (usualmente apretar un botón). | La valija está siempre armada y revisada en la puerta. Técnica y funcionalmente podrías salir a producción cualquier martes a las 3 PM, pero **un humano (el PO o gerente de negocio) decide cuándo apretar el botón** por razones comerciales o de mercado. |
| **3. Despliegue Continuo (*Continuous Deployment*)** | Un paso más allá de la Entrega Continua: **TODO cambio que pasa exitosamente todas las etapas automatizadas de tu pipeline de producción es desplegado automáticamente a los usuarios finales en producción**, **SIN intervención humana**. | Si tu *commit* pasó todos los tests unitarios, de integración, de seguridad y de aceptación del *pipeline*, **va derecho a producción solo**, sin que nadie tenga que autorizarlo ni apretar un botón. Solo un test fallido frena el pase a producción. |

---

### B. Estrategias de Deployment en Producción: Canary Deployment vs. Blue/Green Deployment

> [!IMPORTANT]
> **Pregunta Fija del Parcial Teórico 2025 (Temas A y B):** ¿Cuál es la diferencia técnica y de infraestructura entre **Canary Deployment** y **Blue/Green Deployment**?

```text
  CANARY DEPLOYMENT (Despliegue Progresivo por %)               BLUE / GREEN DEPLOYMENT (2 Entornos Idénticos)
  ===============================================               ==============================================
                 [ Balanceador / Router ]                                   [ Balanceador / Router ]
                     /              \                                           /              \
         95% Usuarios                5% Usuarios                    100% Tráfico                0% Tráfico (Luego 100%)
             /                          \                               /                          \
            ▼                            ▼                             ▼                            ▼
  +-------------------+        +-------------------+         +-------------------+        +-------------------+
  | Versión Actual v1 |        | Nueva Versión v2  |         |   Entorno BLUE    |        |   Entorno GREEN   |
  |   (Estable)       |        |    ("Canario")    |         | (Versión v1 Prod) |        | (Nueva Versión v2)|
  +-------------------+        +-------------------+         +-------------------+        +-------------------+
  Si el 5% no falla, sube gradualmente: 20% -> 50% -> 100%   Se prueba v2 en Green; el router conmuta 100% de golpe.
```

| Característica | **Canary Deployment** (Despliegue Canario) | **Blue/Green Deployment** (Despliegue Azul/Verde) |
| :--- | :--- | :--- |
| **Concepto (En Forma)** | Consiste en liberar la nueva versión del software inicialmente a un **subconjunto pequeño y controlado de usuarios reales** (ej. 2% o 5% del tráfico, o una región geográfica), monitorear métricas y errores en producción real, y si todo funciona correctamente, **incrementar gradualmente el porcentaje** hasta llegar al 100%. | Consiste en mantener **dos entornos de producción completos e idénticos** (*Blue* y *Green*). En un momento dado, uno (ej. *Blue*) atiende el **100% del tráfico en vivo**, mientras en el otro inactivo (*Green*) se despliega y prueba la nueva versión. Una vez validado *Green*, el *router*/balanceador **conmuta todo el tráfico de *Blue* a *Green* instantáneamente**. |
| **En Criollo (Origen)** | Viene de los mineros de carbón que llevaban un canario en una jaula: si había gas tóxico, el canario se desmayaba antes que todos los mineros. Si la versión v2 tiene un bug oculto, **solo le explota al 5% de los usuarios**, no al 100%. | Tenés dos escenarios gemelos. Mientras la obra se representa en el Escenario Azul, armás la escenografía nueva en el Escenario Verde. Cuando está lista, cambiás el cartel de la puerta para que todo el público entre al Verde. |
| **Rollback (Vuelta atrás ante falla)** | Muy rápido: el balanceador simplemente **redirige ese 5% de tráfico nuevamente a los servidores de la versión anterior**. | **Instantáneo y con cero *downtime***: el *router* vuelve a apuntar al entorno *Blue* original que seguía encendido e intacto. |
| **Costo de Infraestructura** | **Bajo/Moderado:** No requiere duplicar toda la infraestructura; solo levanta unos pocos nodos/contenedores con la versión nueva. | **Alto:** Requiere contar con capacidad de infraestructura para mantener **dos entornos de producción completos en paralelo**. |
| **Gatillo de Examen** | *"Exposición progresiva / gradual a un pequeño porcentaje de usuarios para mitigar riesgo en vivo"*. | *"Dos entornos de producción idénticos en paralelo y cambio de ruteo del tráfico completo sin tiempo de inactividad"*. |


---

# UNIDAD 4: Aseguramiento de Calidad de Proceso y de Producto

---

## 1. Conceptos Generales sobre Calidad (`PRE_12_PPQAIntro`)

### A. ¿Qué es la Calidad en el Software? (Definición Formal, Implícita y Subjetividad)

* **En Forma (Definición Académica):**
  * Según IEEE / Pressman / Cátedra, la **Calidad del Software** es la **concordancia del software producido con los requerimientos explícitamente establecidos (funcionales y de desempeño), con los estándares de desarrollo prefijados y con los requerimientos implícitos no establecidos formalmente pero que todo usuario desea y espera**.
  * Esta definición encierra **tres pilares clave**:
    1. **Los requerimientos explícitos del software** son la base contra la cual se mide la calidad: si el software no hace lo que se especificó, no tiene calidad.
    2. **Los estándares especificados** definen un conjunto de criterios de desarrollo que guían la forma en que se aplica la ingeniería de software; si no se siguen, casi seguramente habrá falta de calidad.
    3. **Los requerimientos implícitos** (ej. que sea fácil de usar, que no borre datos si se corta internet, que sea mantenible) a menudo no se escriben en el contrato, pero si el software no los satisface, su calidad queda en entredicho.
  * **Carácter Subjetivo y Contextual:** La calidad tiene una componente subjetiva porque **"la calidad está en los ojos de quien la observa"** (depende de quién sea el cliente/usuario y del momento o contexto: un sistema bancario prioriza seguridad e integridad transaccional por encima de animaciones visuales; un videojuego prioriza gráficos y fluidez). Por eso, la ingeniería busca **transformar percepciones subjetivas en atributos y métricas objetivas**.

* **En Criollo:**
  * Cumplir solo lo que dice el papel firmado no alcanza para decir que tu software tiene calidad. Si el cliente te pidió un botón para "Guardar factura" (requerimiento explícito) y tu botón guarda la factura pero tarda 45 minutos o tiene la letra en amarillo fluo ilegible (requerimientos implícitos de performance y usabilidad), el cliente te va a decir que el sistema es una porquería aunque "cumpla el documento".

---

### B. Gestión de la Calidad en los 3 Niveles (Organizacional, Proceso y Proyecto)

1. **Nivel Organizacional:** Establece la cultura de calidad, políticas generales, modelos de referencia (ej. adoptar ISO 9001 o CMMI) y estructura el **Grupo de Aseguramiento de Calidad (GAC / SQA)** independiente de los proyectos.
2. **Nivel de Proceso:** Define los procesos estándar de la organización, guías, plantillas, listas de verificación (*checklists*) y métricas de proceso para asegurar que cualquier proyecto tenga una base repetible.
3. **Nivel de Proyecto:** Instancia y adapta (*tailoring*) el proceso estándar a las necesidades concretas del proyecto mediante un **Plan de Aseguramiento de Calidad del Software (PACS / SQA Plan)** y un **Plan de Pruebas**, ejecutando revisiones técnicas, auditorías y testing sobre los entregables reales.

---

### C. Plan de Calidad según Watts Humphrey y Principios de la Calidad

* **Plan de Calidad (Watts Humphrey):** Todo plan de calidad de un proyecto debe definir explícitamente tres elementos:
  1. **Atributos de Calidad:** Qué características específicas de calidad se requieren para el producto (ej. disponibilidad del 99.9%, mantenibilidad, usabilidad).
  2. **Actividades de Control y Aseguramiento de Calidad:** Qué revisiones técnicas, inspecciones, pruebas y auditorías se realizarán en cada etapa.
  3. **Criterios de Completitud (Entrada y Salida):** Qué condiciones objetivas deben cumplirse para dar por terminada una actividad o fase.
* **Principios Fundamentales de la Calidad:**
  * La calidad **no se agrega al final** ni se "testea" sobre un producto mal hecho; **la calidad se diseña y se construye desde el inicio** en cada actividad del proceso.
  * Un **buen proceso** es condición necesaria (aunque no mágica por sí sola) para obtener de manera predecible un **buen producto**.
  * El costo de prevenir un defecto temprano en requerimientos o diseño es exponencialmente menor que el costo de corregirlo en testing final o en producción (**Regla 1-10-100 de Boehm**).

---

### D. Las 5 Visiones de la Calidad de David Garvin (¡Pregunta Clave de Parcial!)

David Garvin explica que distintas disciplinas y roles entienden la calidad desde **5 perspectivas o visiones diferentes**:

| Visión de Garvin | En Forma (Definición de Cátedra) | En Criollo y Quién piensa así |
| :--- | :--- | :--- |
| **1. Visión Trascendental** | La calidad es algo que **se reconoce inmediatamente cuando se ve o experimenta, pero es imposible de definir de manera precisa y absoluta** (*"excelencia innata"*). | *"No sé explicarte técnicamente por qué, pero usás esta app y se nota que es de primera"*. (Visión filosófica/artística). |
| **2. Visión Basada en el Usuario** | La calidad es la **adecuación al propósito o al uso** (*Fitness for purpose*). Un producto tiene calidad en la medida en que **satisface las necesidades, deseos y expectativas concretas del usuario final**. | Si al usuario le resuelve su problema de forma cómoda y efectiva, tiene calidad. (Visión de **Product Owners, Marketing y UX**). |
| **3. Visión Basada en el Producto** | La calidad está ligada directamente a las **características internas y atributos medibles del propio artefacto** (cantidad de atributos deseables presentes: modularidad, baja complejidad, confiabilidad, cobertura). | Se cree que si la arquitectura interna, el código y las métricas técnicas del producto son excelentes, el usuario estará satisfecho. (Visión de **Desarrolladores y Arquitectos**). |
| **4. Visión Basada en el Proceso (o Manufactura)** | La calidad es la **conformidad con los requerimientos y el apego estricto al proceso y estándares definidos**. Su premisa es que **un proceso de calidad ejecutado sin desvíos producirá un producto de calidad** y reducirá el retrabajo. | *"Si seguimos al pie de la letra el proceso certificado en ISO/CMMI, el software va a salir bien"*. (Visión de **Ingenieros de Procesos y Auditores SQA**). |
| **5. Visión Basada en el Valor (Económica)** | La calidad se define en relación con el **precio y el costo**: un producto de calidad es aquel que **ofrece el máximo desempeño o utilidad a un precio que el cliente está dispuesto a pagar** (y a un costo rentable para quien lo produce). | Un Ferrari es excelente, pero si el cliente necesita un utilitario de \$15.000 para repartir pan, un sistema de \$2 millones no tiene calidad de valor para él. (Visión de **Gerencia General, Finanzas y Sponsors**). |

---

### E. El Equilibrio de las 3 Calidades: Necesaria, Programada y Realizada

```text
         (Lo que el cliente necesita/espera)          (Lo que se especificó y diseñó)
            ┌───────────────────────────┐                ┌───────────────────────────┐
            │   1. CALIDAD NECESARIA    │                │   2. CALIDAD PROGRAMADA   │
            │  (Requerida por Usuario)  │                │   (Planificada en ERS)    │
            └─────────────┬─────────────┘                └─────────────┬─────────────┘
                          │       ┌───────────────────────────┐        │
                          └──────►│     IDEAL: INTERSECCIÓN   │◄───────┘
                                  │     TOTAL DE LAS TRES     │
                                  └─────────────▲─────────────┘
                                                │
                                  ┌─────────────┴─────────────┐
                                  │   3. CALIDAD REALIZADA    │
                                  │ (Construida realmente SW) │
                                  └───────────────────────────┘
```

1. **Calidad Necesaria (o Esperada):** Lo que el cliente/usuario realmente necesita y espera del software (incluyendo requerimientos explícitos e implícitos).
2. **Calidad Programada (o Diseñada):** Lo que el equipo de ingeniería relevó, especificó en los documentos de requerimientos/diseño y planificó construir.
3. **Calidad Realizada (o Lograda):** Lo que el equipo efectivamente construyó y entregó en el código ejecutable real.
* **Desajustes clásicos (Trampas de Examen):**
  * Si **Calidad Necesaria $\neq$ Calidad Programada**: Falló la **Ingeniería de Requerimientos / Validación** (no entendimos lo que quería el cliente).
  * Si **Calidad Programada $\neq$ Calidad Realizada**: Falló la **Construcción / Verificación** (especificamos bien el diseño, pero programamos otra cosa o introdujimos defectos).
  * Si damos **Calidad Realizada $>$ Calidad Necesaria**: Caemos en **Sobrecalidad / *Gold Plating*** (desperdicio Lean #1: encarecemos el proyecto construyendo lujos que el cliente no pidió ni quiere pagar).

---

## 2. Importancia de Trabajar Para y Con Calidad: Ventajas, Desventajas y Problemas

* **Ventajas de implementar Gestión de Calidad:**
  * Disminución drástica de los costos por retrabajo (*rework*) y mantenimiento correctivo.
  * Mayor previsibilidad en tiempos de entrega y presupuestos.
  * Detección temprana de defectos (donde corregirlos cuesta monedas en lugar de fortunas).
  * Mayor satisfacción y confianza del cliente.
  * Menor dependencia de "héroes individuales" gracias a procesos claros y estándares compartidos.
* **Desventajas / Obstáculos percibidos:**
  * Requiere inversión inicial de tiempo, capacitación y dinero (el retorno de inversión —ROI— se ve a mediano/largo plazo, no al día siguiente).
  * Resistencia cultural del equipo técnico (*"la gente de calidad es burocrática, molesta, frena el desarrollo y se mete con mi trabajo"*).
  * Riesgo de burocratización si se llenan formularios por cumplir sin entender el propósito (*Hacer sin Ser*).
* **Problemas de Calidad de PROYECTO vs. Problemas de Calidad de PRODUCTO:**
  * **Problemas de Calidad de Proyecto:** Afectan la gestión y ejecución del esfuerzo (ej. cronogramas irreales, estimaciones erróneas, falta de gestión de riesgos, alta rotación de personal, desvíos de presupuesto, mala comunicación con stakeholders).
  * **Problemas de Calidad de Producto:** Afectan al artefacto de software resultante (ej. alta densidad de bugs, caídas del servidor, lentitud extrema, código espagueti imposible de mantener, brechas de seguridad, interfaz inusable).
  * **Vínculo causal:** Un proyecto mal gestionado (con plazos imposibles y presión extrema) casi siempre deriva en que los desarrolladores recorten pruebas y diseño, generando un **producto de mala calidad**.

---

## 3. Actividades Relacionadas con el Aseguramiento de la Calidad del Software (SQA / PPQA)

### A. SQA (Aseguramiento de Calidad) vs. QC / Testing (Control de Calidad)

> [!CAUTION]
> **CONFUSIÓN MORTAL EN PARCIALES:** **SQA (o PPQA en CMMI) $\neq$ Testing**. En los Multiple Choice siempre ponen una opción trampa que dice *"El grupo de SQA se encarga de diseñar y ejecutar los casos de prueba del software"*. **¡ESO ES FALSO!** Eso lo hace Testing (Control de Calidad).

| Dimensión | **Aseguramiento de Calidad (SQA / QA / PPQA)** | **Control de Calidad (QC / Testing)** |
| :--- | :--- | :--- |
| **Foco Principal** | Enfocado en el **PROCESO** (y en verificar que los estándares de proceso y producto se cumplan). | Enfocado en el **PRODUCTO** (verificar y validar que el software construido funcione sin defectos). |
| **Orientación** | **PREVENCIÓN de defectos** (*Proactivo*): busca mejorar la forma de trabajar para que no se introduzcan errores. | **DETECCIÓN de defectos** (*Reactivo/Correctivo*): busca encontrar los defectos que ya están en el producto antes de entregarlo. |
| **Alcance** | **Transversal a todo el ciclo de vida** y a toda la organización (desde la planificación inicial hasta la entrega). | Se concentra en las actividades de revisión y **ejecución de pruebas sobre los artefactos/código** del proyecto. |
| **Actividades Típicas** | Definir estándares de proceso/producto, realizar **Auditorías de Calidad**, evaluar adherencia al proceso, recolectar métricas de proceso, capacitar. | Diseñar casos de prueba (Caja Negra/Blanca), ejecutar pruebas (unitarias, integración, sistema, regresión), reportar bugs. |
| **Quién lo ejecuta** | El **Grupo de Aseguramiento de Calidad (GAC / SQA)**, que es **independiente del proyecto**. | Los **Testers y Desarrolladores** que forman parte del equipo del proyecto. |

---

### B. El Grupo de Aseguramiento de Calidad (GAC / SQA) y su Independencia Obligatoria

* **Regla de Oro de Cátedra (CMMI PPQA):** El grupo o responsable de SQA **DEBE SER INDEPENDIENTE del Líder de Proyecto (Project Manager) y del equipo de desarrollo**.
* **¿Por qué tiene que ser independiente y tener su propio canal de reporte hacia la Alta Gerencia?**
  * Porque existe un **conflicto de intereses natural**: cuando un proyecto se atrasa y quema las papas por la fecha de entrega, el Líder de Proyecto tiene la tentación de saltar pasos del proceso (ej. *"salteemos las revisiones de diseño y las pruebas de regresión así entregamos el viernes"*).
  * Si el auditor de SQA fuera subordinado del Líder de Proyecto, el Líder le ordenaría callarse y firmar todo como "OK". Al depender de otra rama gerencial (Gerencia de Calidad / Dirección), SQA tiene **objetividad y autoridad para escalar desviaciones a la Alta Gerencia** si no se resuelven dentro del proyecto.

---

### C. Estándares de Producto vs. Estándares de Proceso y Calidad en Procesos Definidos vs. Empíricos

* **Estándares de Producto vs. Estándares de Proceso:**
  * **Estándares de PRODUCTO:** Definen la estructura, formato y características que deben tener los **artefactos o entregables resultantes** (ej. plantilla estándar de Especificación de Requerimientos IEEE 830, estándares de codificación Java/Python, plantilla de Casos de Prueba, estándares de diseño de interfaz UI).
  * **Estándares de PROCESO:** Definen **cómo se deben realizar las actividades** de ingeniería y gestión (ej. procedimiento formal para conducir una Inspección de Fagan, proceso de control de cambios, flujo para gestionar un incidente).
* **La Calidad en Procesos Definidos vs. Procesos Empíricos:**
  * **En Procesos Definidos (Tradicionales / CMMI):** La calidad se asegura definiendo de antemano un proceso detallado y auditando externamente (mediante SQA) que el equipo **siga fielmente el proceso prescripto** (*conformidad con el proceso*).
  * **En Procesos Empíricos (Ágiles / Scrum):** La calidad se asegura mediante la **transparencia, inspección y adaptación continua**, la **Definición de Hecho (*Definition of Done*)**, las prácticas técnicas de **Calidad Embebida** (TDD, Integración Continua, *Pair Programming*, Refactoring) y la autoevaluación del propio equipo en la *Sprint Retrospective*.

---

## 4. Principales Modelos de Calidad Existentes (Producto, Mejora y Evaluación)

```mermaid
flowchart TD
    Modelos["MODELOS Y NORMAS DE CALIDAD DE SOFTWARE"]
    Modelos --> MProd["1. Modelos de Calidad de PRODUCTO\n(Evalúan atributos del artefacto)"]
    Modelos --> MMej["2. Modelos de MEJORA de Procesos\n(Guían cómo mejorar paso a paso)"]
    Modelos --> MEval["3. Modelos de EVALUACIÓN de Procesos\n(Miden madurez/capacidad organizacional)"]

    MProd --> McCall["McCall (1977)\n3 Ejes: Operación, Revisión, Transición"]
    MProd --> Barbacci["Barbacci / SEI (1995)\nAtributos No Funcionales"]
    MProd --> ISO25000["ISO/IEC 25000 (SQuaRE) / 25010\n8 Caract. Producto + 5 Calidad en Uso"]

    MMej --> IDEAL["Modelo IDEAL (SEI)\nInitiating-Diagnosing-Establishing-Acting-Learning"]
    MMej --> SPICE["SPICE (ISO/IEC 15504)\nMejora y Evaluación (Niveles 0 a 5)"]

    MEval --> CMMI["CMMI (SEI)\nConstelaciones DEV/ACQ/SVC\nContinua (0-5) vs. Etapas (1-5)"]
    MEval --> ISO9001["Norma ISO 9001\nSistema de Gestión de Calidad general"]
```

---

> [!CAUTION] TEMA EXCLUIDO POR LA CATEDRA (SEGUNDO PARCIAL 2026)
> **CONFIRMADO POR LA DOCENTE EN CLASE:** Los **Modelos de Calidad de PRODUCTO** (Modelo de McCall, Modelo de Barbacci, y Norma ISO/IEC 25010 / SQuaRE) **NO SE EVALUAN EN ESTE PARCIAL**.
> **NO PIERDAS TIEMPO ESTUDIANDO ESTA SECCION.**
> **LO QUE SI ENTRA AL 100% DE MODELOS:** Modelos de **PROCESO** (CMMI Niveles 1 a 5, Representaciones Escalonada vs Continua, SCAMPI, SPICE / ISO 15504 e ISO 9001).

---
### A. Modelos de Calidad de PRODUCTO (Foco en el Artefacto de Software)

#### 1. Modelo de McCall (1977)
Organiza la calidad del producto en **3 ejes o capacidades** vistas desde el usuario y el desarrollador, desglosadas en **11 factores de calidad**:
* **a) Operación del Producto (¿Funciona bien hoy al usarlo?):**
  * *Corrección* (¿hace lo que pedí?), *Confiabilidad* (¿lo hace de forma exacta todo el tiempo?), *Eficiencia* (¿qué tan rápido y con qué recursos corre?), *Integridad / Seguridad* (¿puedo controlar el acceso no autorizado?), *Usabilidad / Facilidad de uso* (¿es fácil operarlo?).
* **b) Revisión del Producto (¿Es fácil cambiarlo y arreglarlo?):**
  * *Mantenibilidad / Facilidad de mantenimiento* (¿puedo localizar y arreglar un error rápido?), *Flexibilidad* (¿puedo modificarlo para agregar cambios?), *Facilidad de prueba / Testabilidad* (¿puedo probarlo fácilmente para validar los cambios?).
* **c) Transición del Producto (¿Se adapta a nuevos ambientes o sistemas?):**
  * *Portabilidad* (¿puedo llevarlo a otro hardware/SO?), *Reusabilidad* (¿puedo reusar partes en otro sistema?), *Interoperabilidad* (¿puede comunicarse e intercambiar datos con otro sistema?).

#### 2. Modelo de Barbacci / SEI (1995)
Se enfoca en los **atributos de calidad de arquitectura (No Funcionales)**: *Performance (Rendimiento)*, *Dependability (Confiabilidad + Disponibilidad + Seguridad operativa/Safety + Seguridad informática/Security)* y *Mantenibilidad / Modificabilidad*.

#### 3. Familia de Normas ISO/IEC 25000 (SQuaRE) e ISO/IEC 25010 (Evolución de ISO 9126)
Es el estándar internacional vigente para evaluar la calidad del producto de software. Divide el modelo en dos grandes partes:
* **1) Modelo de Calidad de Producto (Calidad Interna y Externa — 8 Características):**
  1. **Adecuación Funcional:** Completitud, corrección y pertinencia de las funciones.
  2. **Eficiencia de Desempeño:** Comportamiento temporal (tiempos de respuesta), utilización de recursos (CPU, RAM) y capacidad.
  3. **Compatibilidad:** Coexistencia e **interoperabilidad** con otros sistemas.
  4. **Usabilidad:** Inteligibilidad, facilidad de aprendizaje, operabilidad, protección frente a errores de usuario, estética UI y accesibilidad.
  5. **Fiabilidad (Confiabilidad):** Madurez, **disponibilidad**, **tolerancia a fallos** y **capacidad de recuperación**.
  6. **Seguridad:** Confidencialidad, integridad, no repudio, autenticidad y responsabilidad.
  7. **Mantenibilidad:** Modularidad, reusabilidad, analizabilidad, capacidad de ser modificado y **capacidad de ser probado**.
  8. **Portabilidad:** Adaptabilidad, facilidad de instalación y capacidad de ser reemplazado.
* **2) Modelo de Calidad en Uso (5 Características percibidas por el usuario en su contexto real):** *Efectividad*, *Eficiencia*, *Satisfacción*, *Libertad de riesgo* y *Cobertura de contexto*.

---

### B. Modelos de MEJORA de Procesos

#### 1. Modelo IDEAL del SEI (*Software Engineering Institute*)
Es un ciclo de vida iterativo de **5 fases** diseñado específicamente para guiar un programa de mejora de procesos organizacionales (como implementar CMMI):
* **I — Initiating (Iniciación):** Establecer el estímulo para el cambio, asegurar el patrocinio (*sponsorship*) de la Alta Gerencia, definir objetivos de negocio y asignar recursos.
* **D — Diagnosing (Diagnóstico):** Evaluar el estado actual de los procesos de la organización (*"¿dónde estamos parados hoy?"* mediante un diagnóstico o *gap analysis*) contra el modelo deseado.
* **E — Establishing (Establecimiento):** Planificar las acciones concretas, priorizar qué áreas mejorar primero, formar los grupos de trabajo (SEPG) y fijar metas medibles.
* **A — Acting (Actuación):** Desarrollar, probar en proyectos piloto, refinar y desplegar las mejoras de proceso en toda la organización.
* **L — Learning (Aprendizaje):** Analizar las métricas y lecciones aprendidas para validar si se lograron los objetivos de negocio e iniciar el siguiente ciclo IDEAL.

#### 2. Modelo SPICE (ISO/IEC 15504 — actual serie ISO/IEC 33000)
* *Software Process Improvement and Capability dEtermination*. Es el estándar internacional para evaluar y mejorar la capacidad de los procesos de software en una escala de **6 niveles (del 0 al 5)**:
  * **Nivel 0 (Incompleto)** $\to$ **Nivel 1 (Realizado)** $\to$ **Nivel 2 (Administrado)** $\to$ **Nivel 3 (Establecido)** $\to$ **Nivel 4 (Predecible)** $\to$ **Nivel 5 (Optimizado)**.

---

### C. Modelos de EVALUACIÓN de Procesos: CMMI e ISO 9001

> [!IMPORTANT]
> **CMMI ES TEMA FIJO EN TODOS LOS SEGUNDOS PARCIALES (Apareció en Tema A y Tema B 2025):** Tenés que dominar las 3 constelaciones, las 7 áreas de Nivel 2, Proveedores Tipo A vs. B, el método SCAMPI y la diferencia exacta entre Representación por Etapas y Representación Continua.

#### 1. ¿Qué es CMMI? (*Capability Maturity Model Integration*)
* Desarrollado por el **SEI (*Software Engineering Institute* de la Universidad Carnegie Mellon)**, CMMI es un modelo de referencia de buenas prácticas que evalúa la madurez y capacidad de los procesos de una organización.
* **Premisa fundamental de CMMI:** *"La calidad de un sistema o producto está altamente influenciada por la calidad del proceso empleado para desarrollarlo y mantenerlo"*. CMMI dice **QUÉ** prácticas deben realizarse (metas y prácticas específicas/genéricas), pero **NO impone el CÓMO** (no obliga a usar un ciclo de vida específico).

#### 2. Las 3 Constelaciones de CMMI y las 4 Categorías (22 Áreas de Proceso)
* **Las 3 Constelaciones:**
  1. **CMMI-DEV (*for Development*):** Para organizaciones que **desarrollan y mantienen productos y sistemas de software**. (Consta de **22 Áreas de Proceso**).
  2. **CMMI-ACQ (*for Acquisition*):** Para organizaciones que **compran / adquieren** productos o servicios a terceros y gestionan proveedores.
  3. **CMMI-SVC (*for Services*):** Para organizaciones que **prestan servicios** (ej. mesa de ayuda, operaciones IT, hosting).
* **Las 4 Categorías en que se agrupan las 22 Áreas de Proceso (CMMI-DEV):**
  1. **Gestión de Proyectos** (*Project Management*): PP, PMC, SAM, IPM, RSKM, QPM.
  2. **Gestión de Procesos** (*Process Management*): OPF, OPD, OT, OPP, OID.
  3. **Ingeniería** (*Engineering*): REQM, RD, TS, PI, VER, VAL.
  4. **Soporte** (*Support*): CM (SCM), PPQA, MA, DAR, CAR.

#### 3. Las 7 Áreas de Proceso del Nivel de Madurez 2 (Administrado / Gestionado) y Proveedores Tipo A vs. B

```text
  LAS 7 ÁREAS DE PROCESO DE CMMI NIVEL 2 ("ADMINISTRADO"):
  ┌──────────────────────────────────────────────────────┐
  │ 1. REQM : Gestión de Requerimientos                  │
  │ 2. PP   : Planificación de Proyectos                 │
  │ 3. PMC  : Monitoreo y Control de Proyectos           │
  │ 4. MA   : Medición y Análisis                        │
  │ 5. PPQA : Aseguramiento de Calidad de Proceso y Prod.│
  │ 6. CM   : Gestión de Configuración (SCM)             │
  ├──────────────────────────────────────────────────────┤
  │ 7. SAM  : Gestión de Acuerdos con Proveedores        │ ◄── ¡Solo obligatoria si subcontrata!
  └──────────────────────────────────────────────────────┘
```

* **Diferencia entre Empresas / Proveedores Tipo A y Tipo B (en Nivel 2):**
  * **Tipo A (Con Subcontratación):** Desarrollan software y **subcontratan partes críticas del desarrollo a terceros proveedores** $\to$ Deben acreditar las **7 Áreas de Proceso** de Nivel 2 (incluyendo **SAM - *Supplier Agreement Management***).
  * **Tipo B (Sin Subcontratación):** Desarrollan todo internamente sin subcontratar desarrollo a terceros $\to$ SAM se declara "No Aplicable" y acreditan las **6 Áreas de Proceso** restantes de Nivel 2.

#### 4. Las 2 Representaciones de CMMI: Continua vs. Por Etapas (Escalonada)

| Característica | **Representación CONTINUA** | **Representación POR ETAPAS (Escalonada / *Staged*)** |
| :--- | :--- | :--- |
| **¿Qué evalúa y mejora?** | Evalúa y mejora **Áreas de Proceso individuales** seleccionadas por la organización según sus prioridades de negocio. | Evalúa la **madurez global de toda la organización** mediante conjuntos predefinidos de áreas de proceso en cada escalón. |
| **Métrica que otorga** | **Niveles de CAPACIDAD (*Capability Levels*)**, que van del **Nivel 0 al Nivel 5** para **cada Área de Proceso** por separado (genera un *Perfil de Capacidad*). | **Niveles de MADUREZ (*Maturity Levels*)**, que van del **Nivel 1 al Nivel 5** para **toda la organización**. |
| **Escala de Niveles** | • **Nivel 0:** Incompleto<br>• **Nivel 1:** Realizado (*Performed*)<br>• **Nivel 2:** Administrado (*Managed*)<br>• **Nivel 3:** Definido (*Defined*)<br>• **Nivel 4:** Cuantitativamente Administrado<br>• **Nivel 5:** En Optimización (*Optimizing*) | • **Nivel 1:** Inicial (Caótico, éxito depende de héroes)<br>• **Nivel 2:** Administrado (Proyectos gestionados: 7 áreas)<br>• **Nivel 3:** Definido (Proceso estándar organizacional: +11 áreas)<br>• **Nivel 4:** Cuantitativamente Administrado (Control estadístico: +2 áreas)<br>• **Nivel 5:** En Optimización (Mejora continua e innovación: +2 áreas) |
| **Flexibilidad vs. Comparabilidad** | **Máxima flexibilidad:** la empresa elige qué área mejorar primero (ej. subir solo REQM y PPQA a nivel 3). No da un único número global para marketing. | **Máxima comparabilidad comercial:** permite decir *"Somos una empresa CMMI Nivel 3"*. Para lograr un Nivel $N$, hay que satisfacer **TODAS** las áreas de ese nivel y los anteriores. |

> [!TIP]
> **Detalle clave de los Niveles 2 y 3 (Por Etapas):**
> * En el **Nivel 2 (Administrado)**, cada **proyecto** define y gestiona su propio proceso (puede haber dos proyectos en la misma empresa trabajando distinto, pero ambos planifican, controlan cambios y hacen QA).
> * En el **Nivel 3 (Definido)**, la **organización** tiene un **Proceso Estándar Organizacional único** documentado, y todos los proyectos de la empresa deben **adaptar (*tailor*) su proceso a partir de ese estándar organizacional**.

#### 5. Método de Evaluación Oficial de CMMI: SCAMPI
* **SCAMPI (*Standard CMMI Appraisal Method for Process Improvement*):** Es el método oficial del SEI para evaluar organizaciones contra CMMI. Tiene **3 clases**:
  * **SCAMPI Clase A:** El más riguroso, formal y exhaustivo. Es el **ÚNICO que otorga una calificación oficial de Nivel de Madurez/Capacidad** (válida por 3 años) y requiere un *Lead Appraiser* certificado por el SEI verificando múltiples fuentes de evidencia objetiva (documentos y entrevistas).
  * **SCAMPI Clase B:** Menos costoso; sirve como evaluación intermedia ("simulacro") para ver qué tan cerca está la empresa antes de pagar un Clase A. No otorga certificación oficial.
  * **SCAMPI Clase C:** Evaluación rápida y económica (diagnóstico inicial o *gap analysis*) sobre un área puntual. No otorga calificación.

#### 6. Relación entre CMMI y Metodologías Ágiles (Slides y Apuntes de Clase)
* **¿Pueden convivir CMMI y Ágil?** **Sí**, especialmente en los Niveles 2 y 3, porque CMMI dice *qué* lograr y Ágil puede ser el *cómo* a nivel de ingeniería y gestión de proyecto. Sin embargo, **ambos deben ceder**:
  * **Ágil debe ceder** incorporando trazabilidad explícita de requerimientos (en las User Stories), documentación mínima requerida como evidencia objetiva y **aceptando Auditorías independientes de proceso (PPQA)**.
  * **CMMI (los auditores) debe aceptar** que la evidencia no sean carpetas gigantes de papel firmadas en cascada, sino tableros digitales (Jira/Trello), historias de usuario en el Backlog, tests automatizados y radiadores de información, sin exigir minutas burocráticas de cada Daily Scrum.
* **¿Por qué chocan más al subir a los Niveles 4 y 5?** Porque CMMI Niveles 4 y 5 exigen **estandarización estadística y predicción cuantitativa extrapolando métricas históricas entre distintos proyectos de la organización**, mientras que el enfoque Ágil puro sostiene que los procesos son empíricos y que **la velocidad o experiencia de un equipo no es linealmente extrapolable a otros equipos o proyectos**.

#### 7. Norma ISO 9001 vs. CMMI
* **ISO 9001:** Es una norma internacional certificable de **Sistemas de Gestión de Calidad para cualquier industria** (fábricas, bancos, hospitales o software; para software se complementa con la guía ISO 90003). Es **binaria** (se aprueba o no se aprueba la certificación de cumplimiento de requisitos mínimos de gestión de calidad), mientras que **CMMI es exclusivo de ingeniería/software/servicios y evalúa niveles progresivos de madurez (1 a 5)**.

---

## 5. Auditorías al Software (`PRE_14_AuditoriasDeSw`)

### A. ¿Qué es una Auditoría de Calidad de Software y cuáles son sus Beneficios?

* **En Forma (Definición Académica):**
  * Es una actividad de las disciplinas de soporte que consiste en una **evaluación independiente** (realizada por personal ajeno al equipo del proyecto auditado) de los **productos o procesos de software** con el fin de **asegurar el cumplimiento con los estándares, lineamientos, especificaciones, planes y procedimientos establecidos**, basándose estrictamente en **criterios objetivos y evidencia documental/observable**.
  * Son el instrumento principal del **Aseguramiento de Calidad del Software (SQA / PPQA)**.
* **Beneficios Principales:**
  * Otorgan una opinión **objetiva e independiente** sobre la salud real del proyecto.
  * Dan **visibilidad a la Alta Gerencia** sobre cómo se están ejecutando realmente los procesos de trabajo.
  * Identifican tempranamente **áreas potenciales de insatisfacción del cliente** e incumplimientos antes de que exploten en producción.
  * Permiten identificar tanto **puntos fuertes (buenas prácticas)** para replicar en otros proyectos como **oportunidades de mejora y desviaciones**.

---

### B. Los 4 Tipos de Auditorías en Ingeniería de Software

| Tipo de Auditoría | ¿Qué audita y contra qué contrasta? | ¿Quién la realiza y cuál es su propósito? |
| :--- | :--- | :--- |
| **1. Auditoría de Proyecto (o de Proceso/Calidad)** | Audita un **proyecto en ejecución** contrastando la evidencia real de trabajo contra el **proceso definido y adaptado para ese proyecto** (según el PACS / Plan de Calidad). | Realizada por el **Grupo de SQA (independiente del proyecto)**. Verifica objetivamente que el equipo esté cumpliendo el proceso y manteniendo la consistencia de los artefactos. |
| **2. Auditoría al Grupo de Calidad (Auditoría Externa a SQA)** | Audita **al propio equipo de SQA / Aseguramiento de Calidad** (*"¿Quién audita a los auditores?"*). | Realizada por **personal externo al grupo de QA (o auditores externos a la empresa)** para verificar que los auditores de SQA estén realizando sus auditorías y evaluaciones de manera correcta y objetiva. |
| **3. Auditoría de Configuración Funcional (FCA)** | Compara el **software construido (ejecutable + resultados de pruebas)** contra los **requerimientos especificados en la ERS / Backlog y la matriz de trazabilidad**. | Propia de la disciplina **SCM** antes de liberar una Línea Base de Producto. Su propósito es validar que el software implementa **completa y únicamente** las capacidades funcionales requeridas. |
| **4. Auditoría de Configuración Física (PCA)** | Compara el **código fuente e ítems de configuración por entregar** contra la **documentación técnica, de diseño y manuales de soporte/operación**. | Propia de **SCM** previa a la entrega. Su propósito es asegurar que todos los ítems existen físicamente en la versión correcta y que **la documentación describe fiel y consistentemente al código construido**. |

---

### C. Los 3 Roles en una Auditoría de Software y sus Responsabilidades

> [!IMPORTANT]
> **Pregunta Clásica de Multiple Choice (Apareció en los Parciales 2025):** ¿Quién propone la fecha de la auditoría y quién arma el Plan de Acción para corregir las desviaciones? **¡EL AUDITADO!** (No el auditor).

1. **El Auditado (Generalmente el Líder de Proyecto o referente del equipo auditado):**
   * **Propone la fecha** de realización de la auditoría (dentro de la ventana prevista en el PACS).
   * Participa de las reuniones, **entrega las evidencias** solicitadas y responde las consultas del auditor.
   * Recibe y contesta el reporte de auditoría.
   * **Es el responsable de elaborar y proponer el Plan de Acción Correctivo** para subsanar las **desviaciones** encontradas en el reporte, y de ejecutar dichas correcciones.
2. **El Auditor (o Equipo Auditor / Auditor Líder):**
   * Consta de 1 o 2 personas que **DEBEN ser independientes (externas) al proyecto que se está auditando** (miembros del grupo SQA).
   * **Acuerda la fecha** con el auditado y comunica formalmente el alcance y el *checklist* previo.
   * **Recolecta y analiza la evidencia objetiva** suficiente y relevante.
   * Elabora el **Reporte de Auditoría** clasificando los hallazgos.
   * Realiza el **seguimiento posterior** validando que el Auditado haya cumplido el Plan de Acción y cerrando formalmente las desviaciones.
3. **El Gerente de SQA (Aseguramiento de Calidad):**
   * Gestiona el programa anual de auditorías, asigna a los auditores, aprueba los reportes y **escala a la Alta Gerencia (Dirección)** aquellas desviaciones críticas que el proyecto se niegue a resolver o cuyos planes de acción venzan sin cumplirse.

---

### D. Las 4 Etapas del Proceso de Auditoría y Reglas de Oro

```mermaid
flowchart LR
    E1["1. Preparación y\nPlanificación\n(¡Nunca sorpresa!)"] --> E2["2. Ejecución de\nla Auditoría\n(Apertura + Evidencias)"]
    E2 --> E3["3. Análisis y\nReporte\n(Cierre + Informe Final)"]
    E3 --> E4["4. Seguimiento\n(Plan de Acción hasta\ncerrar Desviaciones)"]
```

1. **Etapa 1: Preparación y Planificación:**
   * **¡Regla de Oro!** **Las auditorías de software NUNCA son sorpresivas ("caer de sorpresa").** Están planificadas en el PACS.
   * Se acuerda la fecha con el auditado, se define el alcance (qué artefactos y procesos se van a revisar), se prepara la **Lista de Verificación (*Checklist*)** y se estudia la documentación previa del proyecto.
2. **Etapa 2: Ejecución de la Auditoría:**
   * Comienza con una **Reunión de Apertura** breve donde se repasa el objetivo y alcance.
   * Se realizan las entrevistas y la **revisión de evidencias objetivas** guiándose por el *Checklist* (aplicando **muestreo** representativo cuando no es posible revisar el 100% de los artefactos).
3. **Etapa 3: Análisis y Reporte:**
   * El auditor evalúa las evidencias recolectadas y clasifica los hallazgos.
   * Se realiza una **Reunión de Cierre** con el auditado para presentarle preliminarmente los hallazgos (evitando malentendidos o "sorpresas" en el informe escrito).
   * Se emite y distribuye formalmente el **Reporte Final de Auditoría**.
4. **Etapa 4: Seguimiento (*Follow-up*):**
   * Si hubo **Desviaciones**, el **Auditado** presenta su **Plan de Acción** (con tareas responsables y fechas de compromiso).
   * La auditoría **NO termina con la entrega del reporte**: recién se cierra cuando el Auditor verifica en la fecha pactada que las acciones correctivas se ejecutaron efectivamente y las desviaciones quedaron subsanadas. Si no se cumplen, se escala a la Alta Gerencia.

---

### E. Clasificación de los Hallazgos de Auditoría (¡Cazabobos Fijo de Parcial!)

En el Reporte de Auditoría, los hallazgos se clasifican en **3 categorías exactas**:

| Tipo de Hallazgo | Significado (En Forma) | ¿Requiere Plan de Acción Obligatorio? |
| :--- | :--- | :---: |
| **1. Buena Práctica** | Destaca un aspecto sobresaliente donde el proyecto no solo cumplió el estándar, sino que implementó una solución o práctica ejemplar digna de imitarse en toda la organización. | **NO** |
| **2. Desviación (o No Conformidad)** | Incumplimiento objetivo respecto al proceso definido, estándar o plan (basado en evidencia). Se subdivide en dos grados:<br>• **No Adecuado (*Non-compliant*):** El ítem/proceso directamente no existe o incumple gravemente el estándar.<br>• **Necesita Mejora (*Needs Improvement*):** El ítem existe y se aplica parcialmente, pero presenta falencias o incompletitudes respecto al estándar. | **SÍ (OBLIGATORIO)**<br>El auditado debe proponer un Plan de Acción con fecha límite y el auditor debe hacer seguimiento. |
| **3. Observación** | Una advertencia preventiva, sugerencia o debilidad menor detectada que hoy **no constituye un incumplimiento formal del estándar**, pero que podría convertirse en un problema a futuro si no se atiende. | **NO**<br>(Queda a criterio del proyecto implementarla, sin seguimiento obligatorio). |

---

## 6. Técnicas y Herramientas para Revisiones Técnicas del Software (`PRE_13_RevisionesTécnicas`)

### A. Verificación vs. Validación (Barry Boehm)

* **Verificación (*Verification*):**
  * **Pregunta guía:** ***"¿Estamos construyendo el producto CORRECTAMENTE?"*** (*Are we building the product right?*).
  * **Concepto:** Conjunto de actividades que aseguran que el software implementa correctamente una función específica y que los artefactos de una fase **cumplen con las especificaciones y estándares establecidos en la fase previa** (conformidad interna con los requisitos y el diseño).
* **Validación (*Validation*):**
  * **Pregunta guía:** ***"¿Estamos construyendo el producto CORRECTO?"*** (*Are we building the right product?*).
  * **Concepto:** Conjunto de actividades que aseguran que el software construido **es trazable a los requerimientos del cliente y satisface realmente sus necesidades y expectativas operativas en su entorno**.

---

### B. ¿Qué son las Revisiones Técnicas / Revisiones entre Pares (*Peer Reviews*)?

* **En Forma (Definición Académica):**
  * Las **Revisiones Técnicas (o *Peer Reviews*)** son un filtro de **evaluación estática** (no requieren ejecutar código) realizado por **colegas / pares técnicos** del autor durante el desarrollo para detectar errores, ambigüedades, omisiones e inconsistencias en cualquier artefacto de software (especificaciones de requerimientos, historias de usuario, diagramas de arquitectura, código fuente, casos de prueba) **lo más temprano posible**.
* **Reglas Éticas de Oro de toda Revisión Técnica:**
  1. **Se evalúa el ARTEFACTO (el producto de trabajo), NUNCA al autor ni su capacidad personal.** (Los resultados de una revisión jamás se usan para la evaluación de desempeño de RRHH del programador).
  2. El objetivo de la reunión de revisión es **DESCUBRIR y REGISTRAR defectos, NO resolverlos ni rediseñar la solución ahí mismo** (la corrección la hace después el autor en privado).
  3. Mantener un clima de respeto y crítica constructiva.

---

### C. Tipos de Revisiones: Informales (*Walkthrough*) vs. Formales (*Inspección de Fagan*)

```text
  ESPECTRO DE FORMALIDAD DE LAS REVISIONES ENTRE PARES:
  Menor Formalidad ◄────────────────────────────────────────────────────────► Mayor Formalidad
  [ Revisión Ad-hoc / Pair Programming ] ──► [ Walkthrough (Recorrido) ] ──► [ Inspección de Fagan ]
```

#### 1. Revisión Informal / *Walkthrough* (Recorrido o Paseo)
* **Cómo funciona:** Es una reunión de revisión **dirigida y conducida por el propio Autor del artefacto**, quien les "cuenta" o guía paso a paso el documento o código a sus compañeros de equipo para recibir comentarios y detectar errores.
* **Características:** Poca o nula preparación individual previa, no tiene un proceso estricto de entrada/salida, no asigna roles formales fijos ni recolecta métricas estadísticas rigurosas. Es barata y rápida, pero **menos eficaz** porque el autor, sin querer, "guía" a los demás por su propia lógica y puede pasar por alto sus propios puntos ciegos.

#### 2. Revisión Formal / Inspección de Software (Método de Michael Fagan - IBM, 1976)

> [!IMPORTANT]
> **TEMA FIJO DE MULTIPLE CHOICE:** En los exámenes de la cátedra siempre evalúan los **5 Roles de una Inspección Formal** y las **6 Etapas del Proceso de Inspección de Fagan**, especialmente qué hace el **Lector**, qué hace el **Moderador** y la prohibición de corregir en la reunión.

* **Los 5 Roles de una Inspección Formal de Fagan:**
  1. **Autor (Productor):** Es quien creó el artefacto que se va a inspeccionar. Su rol en la reunión es escuchar, responder dudas puntuales si se le consulta y **luego corregir los defectos en la etapa de Retrabajo**. (**¡Nunca puede ser Moderador, Lector ni Anotador de su propio producto!**).
  2. **Moderador (Líder de la Inspección):** Es el responsable de planificar la inspección, verificar que el artefacto cumpla los criterios de entrada, **dirigir la reunión manteniéndola enfocada** (evitando discusiones de solución o ataques personales), controlar el tiempo y realizar el **Seguimiento final** de las correcciones.
  3. **Lector (*Reader*):** Durante la reunión de inspección, es quien **guía al equipo leyendo o parafraseando el artefacto con sus propias palabras** sección por sección. *(Al parafrasearlo un tercero distinto del autor, saltan inmediatamente las ambigüedades entre lo que el autor quiso poner y lo que realmente dice el documento).*
  4. **Anotador / Escriba (*Recorder*):** Registra formalmente en la planilla de inspección cada defecto, inconsistencia o problema detectado durante la reunión (indicando ubicación, descripción y severidad).
  5. **Inspector(es) / Revisor(es):** Su único objetivo es **prepararse individualmente antes de la reunión** usando *Checklists* y **encontrar defectos** en el artefacto. (Todos los participantes, incluido el Moderador y el Lector, actúan también como inspectores).

* **Las 6 Etapas de la Inspección Formal de Fagan:**

```mermaid
flowchart LR
    S1["1. Planificación\n(Moderador verifica\ncriterios y convoca)"] --> S2["2. Visión General\n(Overview - Opcional:\nAutor da contexto)"]
    S2 --> S3["3. Preparación\nIndividual\n(Inspectores con Checklist)"]
    S3 --> S4["4. Reunión de\nInspección (Máx 2h)\n(Lector lee, Escriba anota)"]
    S4 --> S5["5. Corrección /\nRetrabajo\n(El Autor corrige)"]
    S5 --> S6["6. Seguimiento\n(Moderador verifica\ncorrecciones)"]
```

  1. **Planificación:** El Autor entrega el artefacto; el **Moderador** verifica que esté listo para inspeccionarse (criterios de entrada), selecciona a los participantes (3 a 6 personas), asigna roles y distribuye el material.
  2. **Visión General (*Overview* — Opcional):** Reunión corta donde el Autor explica el contexto general del artefacto si el equipo no lo conoce.
  3. **Preparación Individual (¡Crítica!):** **Antes de la reunión**, cada inspector examina el artefacto **por su cuenta** ayudándose con **Listas de Comprobación (*Checklists*)** de errores típicos y anota los defectos potenciales que encuentra. *(Si los inspectores no hicieron la preparación individual, el Moderador debe suspender y reprogramar la reunión).*
  4. **Reunión de Inspección:**
     * Duración máxima recomendada: **no más de 2 horas** (después de 2 horas la atención cognitiva cae en picada).
     * El **Lector** va presentando el artefacto, los **Inspectores** exponen los defectos encontrados en su preparación más los que surgen por sinergia grupal, y el **Anotador** los registra.
     * **Regla Inquebrantable:** **En la reunión SOLO se identifican y registran los defectos; NO se debate cómo corregirlos.** Al final, el grupo dictamina el estado del artefacto (*Aceptado tal cual*, *Aceptado condicional a correcciones menores verificadas por el moderador*, o *Rechazado: requiere nueva inspección*).
  5. **Corrección / Retrabajo (*Rework*):** El **Autor** toma la lista de defectos registrada y realiza todas las correcciones sobre el artefacto.
  6. **Seguimiento (*Follow-up*):** El **Moderador** verifica que el Autor haya corregido efectivamente todos los defectos registrados (o convoca a una re-inspección si hubo demasiados cambios) y cierra formalmente la inspección recolectando las métricas (densidad de defectos, horas insumidas).

---

### D. Cómo Verlo de Diversas Formas: Cuadro Comparativo Auditorías vs. Revisiones Técnicas

> [!WARNING]
> **PREGUNTA OBLIGATORIA DE PARCIAL:** ¿En qué se diferencia una **Auditoría de Calidad** de una **Revisión Técnica (Peer Review)**? Estudiate esta tabla fila por fila.

| Criterio de Comparación | **Auditoría de Calidad de Software** | **Revisión Técnica / *Peer Review* (Inspección / Walkthrough)** |
| :--- | :--- | :--- |
| **Propósito Principal** | Evaluar objetivamente la **conformidad / adherencia con procesos, estándares, planes y regulaciones**. | Detectar **defectos técnicos, errores, ambigüedades e inconsistencias en un artefacto de trabajo** para mejorar su calidad técnica. |
| **¿Quién la realiza?** | **Auditores INDEPENDIENTES (externos al proyecto)**, pertenecientes al grupo de SQA o entidad externa. | **PARES / COLEGAS técnicos** (otros desarrolladores, analistas, arquitectos o testers del mismo proyecto o área técnica). |
| **Objeto de Evaluación** | El **Proceso aplicado en el proyecto** y el cumplimiento de estándares en los entregables (usando muestreo). | Un **Artefacto técnico específico en profundidad** (un documento de requerimientos, un diseño, una clase de código, un plan de pruebas). |
| **Herramienta Base** | *Checklist* de cumplimiento de proceso/estándares y recolección de **evidencias objetivas**. | *Checklist* de defectos técnicos por tipo de artefacto y lectura línea por línea / sección por sección. |
| **Salida / Resultado** | **Reporte de Auditoría** con Buenas Prácticas, Observaciones y **Desviaciones** (que exigen un **Plan de Acción** del Auditado). | **Lista de Defectos detectados** en el artefacto (que el **Autor** corrige en la etapa de **Retrabajo**) y dictamen de aceptación del artefacto. |
| **Escalamiento Gerencial** | **Sí:** Si las desviaciones no se corrigen, **se escala a la Alta Gerencia / Dirección**. | **No:** Es una actividad técnica interna de ingeniería; los resultados quedan en el equipo y en métricas despersonalizadas de ingeniería. |


---

## 7. Calidad de Producto: Testing de Software (`PRE_09_TestingdeSoftware` y `CajaNegra`)

### A. ¿Qué es el Testing de Software? Definiciones Clásicas vs. Modernas

* **Definición Clásica (Glenford Myers, 1979):** *"El testing es el proceso de **ejecutar un programa con la intención de encontrar errores**"*.
  * **En Criollo (Cambio de mentalidad de Myers):** Si vos probás tu propio programa "queriendo demostrar que anda bien", inconscientemente vas a elegir los datos fáciles donde sabés que no falla. En cambio, **un buen caso de prueba es aquel que tiene una alta probabilidad de descubrir un error aún no descubierto**, y **una prueba exitosa es aquella que logra hacer saltar un defecto**.
* **Definición Moderna (IEEE / Hetzel / ISTQB):** Proceso de **verificación y validación dinámica** (y también estática al revisar requerimientos/diseño de pruebas) que evalúa un sistema o componente para **determinar si satisface los requerimientos especificados y las necesidades del usuario**, medir su calidad y detectar diferencias entre los resultados esperados y los reales.

---

### B. Los Principios del Testing (Los 10 de Myers + Los 7 de ISTQB)

#### Los 7 Principios Fundamentales del Testing (ISTQB / Cátedra — ¡Fijos en Multiple Choice!)
1. **Las pruebas muestran la presencia de defectos, NO su ausencia:** Probar un software demuestra que hay defectos si saltan, pero aunque pasen 1000 pruebas **nunca se puede demostrar matemáticamente que el software está 100% libre de defectos**.
2. **Las pruebas exhaustivas son imposibles:** Probar absolutamente todas las combinaciones posibles de entradas, estados y precondiciones es inviable salvo en programas triviales. Por eso se usan técnicas de **muestreo inteligente y análisis de riesgo** (Partición de Equivalencias y Valores Límite).
3. **Pruebas tempranas (*Early Testing*):** Las actividades de prueba deben comenzar lo antes posible en el ciclo de vida (desde que se escriben los requerimientos o User Stories) para detectar defectos cuando corregirlos es barato.
4. **Agrupación de defectos (*Defect Clustering* / Principio de Pareto 80-20):** Los defectos no se distribuyen uniformemente; **un pequeño número de módulos concentra la mayoría de los defectos descubiertos** (aprox. el 80% de los bugs están en el 20% de los módulos más complejos o acoplados).
5. **La Paradoja del Pesticida (*Pesticide Paradox*):** Si se repiten una y otra vez exactamente los mismos casos de prueba, llega un punto en que **esos casos dejan de encontrar nuevos defectos** (igual que los insectos se vuelven resistentes al mismo pesticida). Los casos de prueba deben revisarse y actualizarse continuamente.
6. **Las pruebas dependen del contexto:** No se prueba igual una tienda web de ropa que el software del piloto automático de un avión o un marcapasos.
7. **La falacia de la ausencia de errores (*Absence-of-errors fallacy*):** De nada sirve encontrar y corregir el 99% de los bugs técnicos si el sistema construido es inusable o **no cumple con las necesidades y expectativas reales del usuario** (falla de validación).

#### Principios Adicionales de Glenford Myers (Destacados en Filminas)
* **Un programador debe evitar probar su propio programa como única validación:** Porque sufre de "ceguera de autor" (traslada los mismos malentendidos con los que programó al diseñar la prueba y le cuesta "destruir" a su propio hijo). *(Nota: el desarrollador SÍ hace pruebas unitarias/TDD, pero el testing funcional/sistema requiere una mirada independiente o cruzada).*
* **Todo caso de prueba debe definir obligatoriamente su Resultado Esperado ANTES de ejecutarse:** Si ejecutás primero y mirás la pantalla sin haber escrito qué tenía que dar, tu cerebro sufre de sesgo de confirmación y dice *"Ah, dio 142.50, debe estar bien"*.
* **Se deben diseñar casos de prueba tanto para condiciones de entrada VÁLIDAS como para condiciones INVÁLIDAS e inesperadas.**
* **Inspeccionar a fondo el resultado de cada prueba.**
* **Conservar y reutilizar los casos de prueba** para las futuras **Pruebas de Regresión**.

---

### C. Mitos del Testing y "¿Cuánto Testing es Suficiente?" (*Good Enough*)

* **Mitos Comunes Derribados por la Cátedra:**
  * *Mito 1: "El testing es caro y frena el proyecto"* $\to$ **Falso:** Lo que es carísimo es salir a producción con defectos graves.
  * *Mito 2: "El testing solo empieza cuando todo el código está terminado"* $\to$ **Falso:** Diseñar casos de prueba al escribir requerimientos previene los peores errores.
  * *Mito 3: "Si el software fue testeado, tiene cero defectos"* $\to$ **Falso** (Principio 1 de ISTQB).
  * *Mito 4: "Cualquiera puede testear haciendo clicks al azar"* $\to$ **Falso:** El testing requiere metodología ingenieril (Caja Negra/Blanca).
* **¿Cuánto Testing es Suficiente? (Criterios de Salida y *Good Enough Quality*):**
  * Como el testing exhaustivo es infinito, **¿cuándo paramos de probar?**:
    1. Cuando se alcanzan los **Criterios de Aceptación / Salida del Plan de Pruebas** (ej. 100% de casos de prioridad Alta/Media ejecutados, 0 defectos Bloqueantes o Críticos abiertos, cobertura $\ge 85\%$).
    2. Cuando el **riesgo técnico y comercial de liberar el software es aceptable** frente al costo y pérdida de oportunidad de seguir retrasando el lanzamiento (**Enfoque *Good Enough* — Suficientemente Bueno**).
    3. (En la práctica real, lamentablemente muchas veces se frena cuando se acaba el tiempo o el presupuesto del proyecto, por lo cual se debe priorizar siempre probar primero lo más riesgoso).

---

### D. Trilogía Terminológica de la Cátedra: Error vs. Defecto (Bug) vs. Falla

> [!CAUTION]
> **¡ATENCIÓN ESPECIAL AL CRITERIO DE LA CÁTEDRA COVARA-MELES!** Además de la definición ISTQB (Error humano $\to$ Defecto en el código $\to$ Falla en ejecución), en las clases y apuntes de UTN FRC la cátedra define una **diferencia exacta por cambio de etapa** entre **Error** y **Defecto** que toman siempre en los Multiple Choice:

```mermaid
flowchart LR
    Err["1. ERROR\nSe introduce y se detecta\nen la MISMA etapa\n(No cambia de fase)"] -->|"Si NO se detecta y pasa\na la etapa siguiente"| Def["2. DEFECTO (Bug / Falta)\nImperfección en el artefacto\nque SE TRASLADÓ de etapa\n(Ej: de Diseño a Código)"]
    Def -->|"Cuando se ejecuta el código\ny el defecto se activa"| Fal["3. FALLA (Failure)\nManifestación externa visible\nen EJECUCIÓN (Resultado Real !=\nResultado Esperado)"]
```

| Concepto | Definición Exacta de Cátedra (UTN FRC) | Ejemplo Claro |
| :--- | :--- | :--- |
| **1. Error** | Equivocación humana al desarrollar un artefacto que **se detecta y corrige dentro de la MISMA etapa en la que fue cometido** (no trasciende a la etapa siguiente). | El analista escribe mal una regla en la Especificación de Requerimientos, pero durante la revisión de requerimientos con su par (en la misma etapa de análisis) lo ven y lo corrigen. |
| **2. Defecto (o *Bug* / Falta)** | Es un error que **NO fue detectado en su etapa de origen y SE TRASLADÓ a una etapa posterior** del desarrollo, quedando alojado estáticamente en un artefacto o en el código fuente. | Aquella regla mal escrita en Requerimientos pasó desapercibida, llegó a Diseño y el programador la codificó en el método `calcularDescuento()`. Está latente en el código aunque nadie ejecute aún el programa. |
| **3. Falla (*Failure*)** | Es la **manifestación externa u observable de un defecto cuando el software SE ESTÁ EJECUTANDO**, provocando que el **Resultado Obtenido difiera del Resultado Esperado**. | Un usuario o tester ejecuta el sistema, compra un producto y el sistema le cobra \$0 o tira un *NullPointerException* en pantalla. *(Nota: Puede haber un defecto en un `if` del código que nunca se ejecute y por ende nunca produzca una falla).* |

---

### E. Severidad vs. Prioridad de un Defecto (¡Pregunta Fija del Parcial 2025!)

Cuando se encuentra y reporta un defecto, se lo clasifica en **dos dimensiones ortogonales (independientes)**:

| Dimensión | **SEVERIDAD (Gravedad Técnica)** | **PRIORIDAD (Urgencia de Negocio)** |
| :--- | :--- | :--- |
| **¿Qué mide?** | Mide el **impacto técnico del defecto sobre el funcionamiento del sistema** (cuánto daño hace al software o a los datos). | Mide la **urgencia comercial/de negocio con la que debe corregirse** (en qué orden debe arreglarlo el equipo). |
| **¿Quién la define?** | La asigna el **Tester / Ingeniero de Pruebas** basándose en criterios técnicos objetivos. | La define el **Product Owner / Cliente / Líder de Proyecto** según el impacto en el negocio y las fechas de entrega. |
| **Escala de Niveles (De mayor a menor)** | 1. **Bloqueante (*Blocker*):** El sistema se cae por completo, corrompe la BD o impide seguir probando el módulo.<br>2. **Crítica (*Critical*):** Una funcionalidad principal del negocio no funciona y no tiene *workaround* (alternativa).<br>3. **Mayor (*Major*):** Una funcionalidad falla o da resultados incorrectos, pero existe un camino alternativo (*workaround*) temporal.<br>4. **Menor (*Minor*):** Falla secundaria o molestia que no impide operar.<br>5. **Cosmética (*Trivial*):** Error de ortografía, color, alineación de un botón o estética UI. | 1. **Urgente / Inmediata:** Dejar todo y arreglar ya (*Hotfix*).<br>2. **Alta:** Debe corregirse obligatoriamente antes de liberar el Sprint / Release actual.<br>3. **Media:** Corregir si da el tiempo en este ciclo o en el próximo.<br>4. **Baja:** Se puede postergar para futuras versiones o cuando sobre tiempo. |
| **¿Cambia con el tiempo?** | Es **relativamente estática** (el daño técnico sobre el código es el mismo hoy que mañana). | Es **dinámica** (puede subir de Baja a Urgente si se acerca la fecha de uso de ese módulo). |

* **Los 2 Ejemplos Cruzados que Toman Siempre en el Examen:**
  * **Caso A: Baja Severidad (Cosmética) + Alta Prioridad:** En la pantalla de inicio de la web del banco, el logo oficial o el nombre del Banco dice *"Banco Nasionall"* con falta de ortografía gigante. Técnicamente el sistema transacciona perfecto (**Severidad Cosmética**), pero por imagen corporativa no puede salir a producción así (**Prioridad Alta/Urgente**).
  * **Caso B: Alta Severidad (Crítica) + Baja Prioridad:** El módulo de "Generación del Balance Anual Impositivo del 31 de Diciembre" crashea por completo al exportar el PDF (**Severidad Crítica**), pero estamos en el mes de **Marzo** y nadie usa esa pantalla hasta fin de año, mientras que mañana hay que entregar el módulo de pagos diarios (**Prioridad Baja/Media hoy**).

---

### F. Ciclos de Prueba y Estrategias de Pruebas de Regresión

* **¿Qué es una Prueba de Regresión (*Regression Testing*)?**
  * Consiste en **volver a ejecutar casos de prueba que ya habían sido ejecutados y habían pasado exitosamente en versiones/ciclos anteriores**, luego de que se introdujeron cambios en el código (corrección de defectos, nuevas funcionalidades o refactorizaciones), con el propósito de **verificar que los cambios recientes NO introdujeron nuevos defectos ni rompieron funcionalidades que antes andaban bien** (*efecto dominó / regresión*).
* **Dinámica de los Ciclos de Prueba (Ciclo 0 a Ciclo $N$):**
  * **Ciclo 0 (Inicial):** Primera ejecución completa de toda la batería de casos de prueba sobre la versión entregada por Desarrollo. Algunos casos pasan (OK) y otros fallan (se reportan defectos y vuelven a Desarrollo para corrección).
  * **Ciclos 1, 2, ..., $N$:** Desarrollo entrega una nueva versión con los defectos corregidos. Acá existen **3 estrategias de ejecución**:
    1. **Estrategia CON Regresión en cada ciclo (Ideal Teórica):** En cada nuevo ciclo se re-ejecutan **los casos que habían fallado (re-testing / confirmación) MÁS todos los casos que habían pasado antes (regresión)**. *Ventaja:* Máxima seguridad inmediata. *Desventaja:* Si las pruebas son manuales, es carísimo y lentísimo (solo es viable si las pruebas están **automatizadas**).
    2. **Estrategia SIN Regresión (Práctica / Riesgosa):** En el Ciclo 1 solo se vuelven a ejecutar los casos que habían fallado en el Ciclo 0; en el Ciclo 2 solo los que fallaron en el Ciclo 1. *Ventaja:* Rápida y barata. *Desventaja:* Altísimo riesgo de que el arreglo del Ciclo 2 haya roto algo que pasó en el Ciclo 0 y nadie se entere antes de salir a producción.
    3. **Estrategia Híbrida (Sin regresión intermedia + Regresión Completa al Final):** Durante los ciclos intermedios (1, 2...) solo se re-prueban los casos fallidos y sus módulos aledaños para avanzar rápido, y en el **último ciclo previo a liberar a producción** se ejecuta una **Prueba de Regresión Completa**.

---

### G. Los 4 Niveles de Prueba, el Modelo en V y los 4 Ambientes

#### 1. Los 4 Niveles de Prueba y el Principio de Granularidad Inversa

```text
  ESPECIFICACIÓN (Izquierda de la V)                     PRUEBAS (Derecha de la V - Granularidad)
  ==================================                     ========================================
  [ Requerimientos de Negocio / Usuario ] ◄────────────► [ 4. Pruebas de ACEPTACIÓN (UAT: Alfa / Beta) ]  (Macro / Sistema entero)
             │                                                                    ▲
             ▼                                                                    │
  [ Especificación del Sistema (ERS)    ] ◄────────────► [ 3. Pruebas de SISTEMA (Funcionales / No Func) ]
             │                                                                    ▲
             ▼                                                                    │
  [ Diseño Arquitectónico / Interfaces  ] ◄────────────► [ 2. Pruebas de INTEGRACIÓN (Top-Down/Bottom-Up)]
             │                                                                    ▲
             ▼                                                                    │
  [ Diseño Detallado / Código de Clases ] ◄────────────► [ 1. Pruebas UNITARIAS (De Componente / Clase)  ]  (Micro / Unidad aislada)
```

> [!NOTE]
> **¿Por qué hablamos de "Granularidad Inversa" en el Modelo en V?** Porque mientras diseñamos (rama izquierda de la V) vamos de lo **General / Macro** ( el negocio entero) hacia lo **Particular / Micro** (un método o función de código); en cambio, cuando ejecutamos las pruebas (rama derecha de la V) vamos en sentido inverso: desde el **grano más fino y pequeño** (**Pruebas Unitarias**) hacia el **grano más grueso y global** (**Pruebas de Aceptación del sistema completo**).

| Nivel de Prueba | ¿Qué prueba exactamente? | ¿Quién la realiza y cómo? | Conceptos Clave de Examen |
| :--- | :--- | :--- | :--- |
| **1. Pruebas Unitarias (o de Componente)** | Verifica el funcionamiento de la **unidad más pequeña de software de forma aislada** del resto (una función, método, procedimiento o clase). | **El Desarrollador** que escribe el código (usando frameworks tipo JUnit/PyTest y *Mocks/Stubs*). | Estratégicamente de Caja Blanca / TDD. Detectan errores algorítmicos y de lógica local al instante. |
| **2. Pruebas de Integración** | Verifica la **interacción, comunicación, pasaje de parámetros y contratos de interfaz entre componentes o subsistemas combinados** (o con la BD / APIs). | **Desarrolladores y/o Testers Técnicos.** | Estrategias:<br>• **Top-Down (Descendente):** Desde el módulo principal hacia abajo, simulando los submódulos aún no hechos con **Stubs**.<br>• **Bottom-Up (Ascendente):** Desde los módulos de bajo nivel hacia arriba, invocándolos mediante **Drivers (Controladores)**.<br>• **Big Bang:** Juntar todo de golpe al final (¡malísima práctica!). |
| **3. Pruebas de Sistema (o de Versión)** | Verifica el **sistema completo y totalmente integrado** contra la Especificación de Requerimientos (tanto requerimientos **Funcionales** como **No Funcionales**). | **Equipo de Testing / QA** en el ambiente de Testing/Staging. | Incluye el **Smoke Test** inicial al instalar la versión, pruebas funcionales de extremo a extremo y pruebas de carga/performance/seguridad. |
| **4. Pruebas de Aceptación (UAT - *User Acceptance Testing*)** | Valida que el sistema cumpla con las necesidades del negocio para que **el cliente/usuario decida formalmente si acepta o no el producto** para desplegarlo. | **El Cliente / Usuarios Finales / Product Owner.** | Se dividen en:<br>• **Pruebas ALFA ($\alpha$):** Realizadas por el cliente/usuario pero **en el entorno controlado del desarrollador** (quien observa y toma nota).<br>• **Pruebas BETA ($\beta$):** Realizadas por los usuarios finales **en su propio entorno real de trabajo / operación**, sin presencia ni control de los desarrolladores. |

#### 2. Los 4 Ambientes (Entornos) de Software
1. **Ambiente de Desarrollo (*Development / Local*):** Donde los programadores codifican y corren sus pruebas unitarias locales. Es inestable y cambia minuto a minuto.
2. **Ambiente de Pruebas (*Testing / QA*):** Entorno controlado y exclusivo para el equipo de Testing donde se instalan versiones cerradas (*builds*) para ejecutar las pruebas funcionales y de integración sin que los programadores toquen el código a mitad de una prueba.
3. **Ambiente de Preproducción (*Staging / UAT*):** Réplica **lo más idéntica posible al ambiente de Producción** (en hardware, configuración y volumen de datos anonimizados). Se usa para pruebas de Aceptación de Usuario (UAT), pruebas de Performance/Carga y simulacros de despliegue.
4. **Ambiente de Producción (*Production*):** El entorno real en vivo donde operan los usuarios finales del negocio.

---

### H. El Proceso de Pruebas en 5 Etapas y sus Artefactos

```mermaid
flowchart LR
    P1["1. Planificación\n(Artefacto:\nPlan de Pruebas)"] --> P2["2. Diseño e Identif.\n(Artefacto:\nCasos de Prueba)"]
    P2 --> P3["3. Ejecución\n(Artefacto:\nRegistro Ejecución)"]
    P3 --> P4["4. Análisis de Fallas\n(Artefacto:\nReporte de Defectos)"]
    P4 --> P5["5. Fin / Cierre\n(Artefacto:\nInforme Final)"]
    P4 -.->|"Nuevo Ciclo\n(Re-test + Regresión)"| P3
```

1. **Planificación:** Definir alcance, riesgos, estrategia, recursos, ambientes, cronograma y criterios de entrada/salida $\to$ Genera el **Plan de Pruebas (*Test Plan*)**.
2. **Diseño e Identificación:** Analizar los requerimientos/historias de usuario, aplicar técnicas de Caja Negra/Blanca para identificar **Condiciones de Prueba** (*qué* probar) y detallar los **Casos de Prueba** (*cómo* probarlo con datos concretos, precondiciones, pasos y resultados esperados) $\to$ Genera la **Especificación / Matriz de Casos de Prueba**.
3. **Ejecución:** Preparar los datos de prueba en el ambiente, correr los casos manuales o automatizados y comparar el *Resultado Real Obtenido* contra el *Resultado Esperado*, marcando cada caso como *Pasa (OK)*, *Falla (Fail)* o *Bloqueado*.
4. **Análisis de Fallas y Seguimiento:** Por cada caso que falló, investigar la causa, aislar los pasos para reproducirla y registrar el incidente asignándole **Severidad** y **Prioridad** $\to$ Genera el **Reporte de Defectos (*Bug Report*)** y alimenta el ciclo de corrección.
5. **Fin / Cierre de Pruebas:** Evaluar si se cumplieron los criterios de salida, calcular métricas finales (cobertura, densidad de defectos, defectos abiertos por severidad) y documentar lecciones aprendidas $\to$ Genera el **Informe Final de Pruebas**.

---

### I. Estrategias de Prueba: Caja Blanca vs. Caja Negra

#### 1. Estrategia de CAJA BLANCA (Estructural / Basada en el Código / *Glass-Box*)
* **Concepto:** El tester/desarrollador **conoce y mira el interior de la caja** (la estructura interna del código fuente, sus sentencias, condicionales `if/else`, bucles `while/for` y caminos lógicos) para diseñar casos de prueba que ejerciten todas las rutas del algoritmo.
* **Grafo de Flujo de Control y Complejidad Ciclomática de McCabe $V(G)$:**
  * Todo procedimiento o método puede representarse como un **Grafo de Flujo** dirigido $G = (N, E)$, donde:
    * **Nodos ($N$):** Instrucciones secuenciales o condiciones de decisión. (Un **Nodo Predicado** es todo nodo del que salen 2 o más aristas por una condición lógica simple).
    * **Aristas ($E$ - *Edges*):** Flechas que indican el flujo de control de un nodo a otro.
    * **Regiones ($R$):** Áreas delimitadas por aristas y nodos, **incluyendo siempre 1 región adicional por el plano exterior abierto**.
  * **Las 3 Fórmulas Equivalentes de la Complejidad Ciclomática de McCabe $V(G)$:**
    $$V(G) = R \quad (\text{Cantidad total de regiones, contando la exterior})$$
    $$V(G) = E - N + 2P \quad (\text{donde } E = \text{Aristas}, N = \text{Nodos}, P = \text{componentes conexos, usualmente } P=1 \implies E - N + 2)$$
    $$V(G) = D + 1 \quad (\text{donde } D = \text{cantidad de nodos predicado / decisiones simples binarias})$$
    *(Atención: Si un `if` tiene una condición compuesta como `if (A > 0 AND B < 5)`, cuenta como **2 decisiones simples** $D=2$, porque internamente son dos ramificaciones booleanas).*
  * **¿Para qué sirve $V(G)$ en Testing?**
    1. Mide cuantitativamente la **complejidad lógica de un módulo** (McCabe recomienda que un módulo no supere **$V(G) \le 10$**; si es mayor, es difícil de entender, mantener y probar, y conviene refactorizarlo).
    2. Determina exactamente el **número de caminos linealmente independientes** del programa (el *Conjunto Básico de Caminos*), lo cual constituye la **cota superior del número de casos de prueba necesarios para garantizar que se ejecuten todas las sentencias y todas las ramas de decisión al menos una vez**.

* **Los 5 Criterios de Cobertura Lógica en Caja Blanca (De más débil a más fuerte):**

| Nivel de Cobertura | ¿Qué exige cubrir como mínimo? | Ejemplo con `if (A > 0 AND B == 1) then X()` |
| :--- | :--- | :--- |
| **1. Cobertura de Sentencias (*Statement Coverage*)** | Que **cada línea o instrucción ejecutable** del código se ejecute al menos una vez. (Es el criterio más débil). | Con un solo caso `(A=5, B=1)` entra al `if`, ejecuta `X()` y cubre el 100% de las sentencias, ¡pero nunca probó qué pasa cuando el `if` da falso! |
| **2. Cobertura de Decisión / Ramas (*Branch Coverage*)** | Que **cada decisión global (`if`, `while`) tome el valor `TRUE` y el valor `FALSE`** al menos una vez (recorriendo tanto la rama verdadera como la falsa). | Con 2 casos: `(A=5, B=1) -> True` y `(A=-1, B=1) -> False` cubrís ambas ramas del `if`, pero nunca probaste que `B == 1` sea falso. |
| **3. Cobertura de Condición (*Condition Coverage*)** | Que **cada condición booleana individual** dentro de una expresión compuesta tome los valores `TRUE` y `FALSE` al menos una vez. | `A > 0` toma T y F, y `B == 1` toma T y F. Ej.: Caso 1 `(A=5 [T], B=0 [F])` y Caso 2 `(A=-1 [F], B=1 [T])`. ¡Ojo: en ambos casos el `AND` global dio `FALSE`, así que no cubrió la rama `TRUE` de la decisión! |
| **4. Cobertura de Decisión / Condición** | Combina las dos anteriores: que cada condición individual tome `T` y `F`, **Y ADEMÁS** que la decisión global tome `T` y `F`. | Caso 1 `(A=5 [T], B=1 [T]) -> Decisión T` y Caso 2 `(A=-1 [F], B=0 [F]) -> Decisión F`. |
| **5. Cobertura de Condición Múltiple** | Exige probar **todas las combinaciones posibles ($2^k$) de valores de verdad** de las $k$ condiciones individuales dentro de cada decisión. | Para 2 condiciones ($2^2 = 4$ casos): `(T,T)`, `(T,F)`, `(F,T)` y `(F,F)`. Es la más exhaustiva pero crece exponencialmente ($2^k$). |

---

#### 2. Estrategia de CAJA NEGRA (Funcional / Basada en Especificaciones / *Behavioral*)
* **Concepto:** El tester ve al software como una **caja negra opaca**: **no conoce ni mira el código fuente interno**, sino que se basa exclusivamente en la **Especificación de Requerimientos / Criterios de Aceptación de la User Story** para suministrar **Entradas** y verificar que las **Salidas** coincidan con el comportamiento esperado.
* **Las 2 Técnicas Fundamentales de Caja Negra de la Cátedra:**
  1. **Partición de Equivalencias (*Equivalence Partitioning*):**
     * Divide el dominio de todos los datos de entrada (y de salida) de una condición externa en un número finito de subconjuntos o **Clases de Equivalencia** (**Clases Válidas** que el sistema debe aceptar y procesar, y **Clases Inválidas** que el sistema debe rechazar con error).
     * **Hipótesis fundamental:** Se asume que **cualquier valor representativo elegido dentro de una misma clase de equivalencia se comporta exactamente igual que cualquier otro valor de esa misma clase** (si uno descubre un defecto, los demás de esa clase también; si uno no lo descubre, los demás tampoco). Así evitamos probar 1 millón de números redundantes.
  2. **Análisis de Valores Límite (*Boundary Value Analysis* - BVA):**
     * Complementa a la Partición de Equivalencias bajo la observación empírica de que **la gran mayoría de los defectos de programación ocurren justo en las fronteras (bordes) de las clases de equivalencia** (porque los programadores se equivocan poniendo `<` en lugar de `<=`, o empezando un arreglo en 1 en vez de 0).
     * **Regla de Aplicación:** En lugar de elegir cualquier número al azar en el medio del rango válido $[a, b]$, se eligen los valores **justo en el límite y a un paso a cada lado de la frontera**:
       * Límite inferior: **$a - 1$** (inválido), **$a$** (válido límite) y opcionalmente $a + 1$.
       * Límite superior: opcionalmente $b - 1$, **$b$** (válido límite) y **$b + 1$** (inválido).

---

### J. Tipos de Pruebas: Smoke Test, Funcionales y No Funcionales

* **Smoke Test (Prueba de Humo / *Build Verification Test*):**
  * Es un subconjunto breve de pruebas básicas y críticas que se ejecuta apenas se compila e instala una nueva versión (*build*) en el ambiente de testing para responder una sola pregunta: ***"¿La versión es lo suficientemente estable como para iniciar el ciclo completo de pruebas, o explota apenas arranca ('sale humo')?"***. Si el *Smoke Test* falla, **se rechaza la versión inmediatamente** y se devuelve a Desarrollo sin gastar tiempo del equipo de QA.
* **Pruebas Funcionales (*"¿Qué hace el sistema?"*):**
  * Evalúan las funciones de negocio especificadas. Pueden diseñarse **Basadas en Requerimientos** (probando cada historia de usuario o caso de uso y sus criterios de aceptación) o **Basadas en Procesos de Negocio** (recorriendo escenarios completos de punta a punta del negocio, ej. desde que un empleado se da de alta hasta que se liquida su sueldo a fin de mes).
* **Pruebas No Funcionales (*"¿Cómo o qué tan bien lo hace el sistema?"* — Cuadrante Q4):**
  * **Pruebas de Performance (Rendimiento):** Miden los tiempos de respuesta, velocidad y consumo de recursos bajo condiciones normales/esperadas de operación.
  * **Pruebas de Carga (*Load Testing*):** Miden el comportamiento del sistema incrementando progresivamente la cantidad de usuarios concurrentes o transacciones hasta llegar al **límite máximo esperado en horas pico** según las especificaciones.
  * **Pruebas de Stress (Estrés):** Someten al sistema a cargas **superiores a su capacidad máxima especificada** (o le restringen memoria/CPU/red al extremo) para descubrir **en qué punto exacto colapsa (*breaking point*) y cómo se recupera** (si pierde datos o se recupera limpiamente cuando baja el pico).
  * **Pruebas de Usabilidad:** Evalúan qué tan fácil de entender, aprender y operar es el sistema para los usuarios reales.
  * **Pruebas de Seguridad:** Evalúan vulnerabilidades, control de accesos, encriptación e inyecciones de código.
  * **Pruebas de Configuración / Portabilidad:** Evalúan que el software funcione en las distintas combinaciones de navegadores (Chrome, Safari, Firefox), sistemas operativos (Android, iOS, Windows) y resoluciones de pantalla.

---

## 8. Testing en Ambientes Ágiles y TDD (`PRE_09_AgileTesting` y `PRE_16_TDD`)

### A. Diferencias entre Testing Tradicional y Testing Ágil

```text
  ENFOQUE TRADICIONAL (Cascada):                           ENFOQUE ÁGIL (Iterativo / Continuo):
  [ Análisis ] ──► [ Diseño ] ──► [ Código ] ──► [TESTING]   Cada Sprint: [ Analizar + Diseñar + Codificar + TESTEAR ]
  (El Testing es una fase al final; si falta tiempo,       (El Testing es una ACTIVIDAD CONTINUA desde el Día 1;
   se recorta y comprime el testing).                       todo el equipo es dueño de la calidad).
```

* En el enfoque tradicional, el testing es una **fase separada al final**, ejecutada por un departamento aislado de "Control de Calidad" que actúa como "policía de la calidad".
* En el enfoque ágil, **el testing NO es una fase, sino una actividad continua transversal** que ocurre desde el primer día del Sprint junto con la programación. **No existe un "equipo de testing separado" dentro del Sprint**: los testers forman parte del equipo de *Developers* multifuncional y **todo el equipo (*Whole Team Approach*) es responsable de la calidad**.

---

### B. El Manifiesto del Testing Ágil (5 Valores) y los 9 Principios del Testing Ágil

#### Los 5 Valores del Manifiesto del Testing Ágil
1. **Probar a lo largo de todo el proceso (Actividad continua)** *sobre* probar al final como una fase.
2. **Prevenir defectos** *sobre* encontrar defectos.
3. **Entender la funcionalidad (Comprensión compartida del negocio)** *sobre* solo comprobar/verificar mecánicamente que cumple el papel.
4. **Construir el mejor sistema (Colaborando juntos)** *sobre* intentar "romper el sistema" enfrentándose a los programadores.
5. **Responsabilidad del equipo por la calidad** *sobre* responsabilidad exclusiva del tester.

#### Los 9 Principios del Testing Ágil (Lisa Crispin & Janet Gregory)
1. El equipo ágil **avanza el proyecto con feedback continuo** provisto por las pruebas.
2. Las pruebas **no son una fase**, son una actividad continua junto al desarrollo.
3. **Todo el equipo** realiza pruebas (desarrolladores, testers, Product Owner).
4. **Acortar el tiempo de respuesta del feedback** (mediante integración continua y pruebas automatizadas).
5. Mantener el **código limpio y simple** (refactorizando defectos y deuda técnica dentro de la misma iteración).
6. **Reducir la documentación de pruebas** al mínimo útil (reemplazar documentos pesados por checklists reutilizables y **pruebas ejecutables automatizadas** como documentación viva).
7. **Guiado por pruebas (*Test-Driven*):** escribir o definir las pruebas **antes** de escribir el código (TDD y ATDD) para prevenir defectos en vez de solo detectarlos después.
8. **Satisfacción del cliente como meta suprema** (*Good Enough Quality* alineada al valor de negocio).
9. **Adaptabilidad** al contexto y aprendizaje continuo en cada retrospectiva.

---

### C. Las 6 Prácticas Concretas del Testing Ágil y el Circuito ATDD Paso a Paso

* **Las 6 Prácticas Concretas del Testing Ágil:**
  1. **Pruebas Unitarias y de Integración Automatizadas** (base de la pirámide e Integración Continua).
  2. **Pruebas de Regresión de Sistema Automatizadas** (para no temer cambiar el código en cada Sprint).
  3. **Pruebas Exploratorias Manuales** (donde un tester humano aplica su creatividad e intuición para descubrir escenarios no previstos).
  4. **TDD (*Test-Driven Development*):** Desarrollo guiado por pruebas unitarias a nivel de código.
  5. **ATDD (*Acceptance Test-Driven Development*) / BDD:** Desarrollo guiado por pruebas de aceptación a nivel de requerimiento de negocio.
  6. **Control de Versiones Conjunto:** Código de producción y código de pruebas automatizadas viven juntos en el mismo repositorio SCM.

* **El Circuito ATDD (*Acceptance Test-Driven Development*) Paso a Paso:**
  1. **Conversación ("Los 3 Amigos": Product Owner + Developer + Tester):** Antes de programar la Historia de Usuario, conversan para destilar los Criterios de Aceptación mediante ejemplos concretos.
  2. **Especificar las Pruebas de Aceptación:** Se escriben las pruebas de aceptación (a menudo en formato *Given-When-Then* / Dado-Cuando-Entonces) **ANTES de escribir el código**.
  3. **Automatizar las Pruebas de Aceptación:** Se conectan a un framework automatizado; al correrlas por primera vez, **fallan** (porque la historia aún no se programó).
  4. **Desarrollar la Funcionalidad (aplicando ciclos cortos de TDD interno):** Los desarrolladores construyen el código hasta que todas las pruebas unitarias y las **pruebas de aceptación automatizadas pasan en verde**.
  5. **Demostración y Regresión:** La prueba de aceptación queda incorporada permanentemente a la batería de regresión continua.

---

### D. El Rol del Tester en el Equipo Ágil

El tester ágil no espera sentado al último día del Sprint a que le "tiren el código por arriba de la pared". Durante todo el Sprint interactúa en **3 frentes**:
1. **Con el Product Owner / Cliente:** Lo ayuda a redactar buenos **Criterios de Aceptación y Pruebas de Usuario (UAT)** sin ambigüedades, pensando en los casos bordes y caminos alternativos/negativos antes del *Sprint Planning*.
2. **Con los Desarrolladores:** Trabaja codo a codo (*pair testing*, *Three Amigos*) definiendo ejemplos ejecutables, ayudando a automatizar pruebas de API/aceptación y probando cada historia apenas se codifica.
3. **Con el Equipo de Sistema (*System Team* / DevOps):** Colabora en mantener el *pipeline* de Integración Continua, los datos de prueba y las pruebas no funcionales/de extremo a extremo.

---

### E. Los 4 Cuadrantes del Testing Ágil (Brian Marick / Crispin & Gregory)

> [!IMPORTANT]
> **PREGUNTA FIJA DEL SEGUNDO PARCIAL 2025 (Apareció en Tema A y Tema B):** Tenés que saber exactamente cómo se cruzan los dos ejes (**Orientado a la Tecnología vs. Orientado al Negocio** y **Apoya al Equipo vs. Critica al Producto**), qué pruebas van en **Q1, Q2, Q3 y Q4**, y **cuáles son manuales vs. automatizadas**.

```text
                                 ORIENTADO AL NEGOCIO (Business-Facing)
                                    (Lenguaje del Dominio / Usuario)
                                                   │
      ┌────────────────────────────────────────────┼────────────────────────────────────────────┐
      │                                            │                                            │
      │   CUADRANTE 2 (Q2)                         │   CUADRANTE 3 (Q3)                         │
      │   • Pruebas Funcionales / Story Tests      │   • Pruebas Exploratorias                  │
      │   • Ejemplos / ATDD / BDD                  │   • Pruebas de Usabilidad                  │
      │   • Prototipos y Simulaciones              │   • Pruebas de Aceptación de Usuario (UAT) │
      │                                            │   • Pruebas Alfa y Beta                    │
      │   👉 [ AUTOMATIZADAS Y MANUALES ]          │   👉 [ 100% MANUALES (Juicio Humano) ]     │
      │                                            │                                            │
APOYA AL EQUIPO ───────────────────────────────────┼─────────────────────────────────── CRITICA AL PRODUCTO
(Guía el desarrollo:                               │                                   (Evalúa el producto terminado
 Prevención / Construcción)                        │                                    para encontrar debilidades)
      │                                            │                                            │
      │   CUADRANTE 1 (Q1)                         │   CUADRANTE 4 (Q4)                         │
      │   • Pruebas Unitarias (TDD)                │   • Pruebas de Performance y Carga         │
      │   • Pruebas de Componentes / Integración   │   • Pruebas de Stress (Estrés)             │
      │   • Calidad interna y arquitectura         │   • Pruebas de Seguridad, Fiabilidad ("-ilities")
      │                                            │                                            │
      │   👉 [ 100% AUTOMATIZADAS ]                │   👉 [ AUTOMATIZADAS CON HERRAMIENTAS ]    │
      │                                            │                                            │
      └────────────────────────────────────────────┼────────────────────────────────────────────┘
                                                   │
                                ORIENTADO A LA TECNOLOGÍA (Technology-Facing)
                                    (Lenguaje de Programación / Infra)
```

* **Nota Clave sobre los Cuadrantes:** Los números Q1, Q2, Q3 y Q4 **NO indican un orden secuencial cronológico obligatorio** (como en cascada), sino una taxonomía para planificar qué pruebas necesita nuestro Sprint.

---

### F. La Pirámide de Automatización de Testing Ágil (Mike Cohn) vs. El Cono de Helado Tradicional

```text
      PIRÁMIDE DE TESTING ÁGIL (Saludable)                CONO DE HELADO / PIRÁMIDE INVERTIDA (Anti-patrón Tradicional)
      ====================================                =============================================================
             ( Testing Exploratorio )                                  \   Pruebas Manuales y de GUI   /  (Lentas, frágiles,
                    /       \                                           \        (80% del esfuerzo)   /    carísimas de mantener)
                   /   GUI   \         ◄── 1% a 5% (Lentas, caras)       \───────────────────────────/
                  /───────────\                                           \   API / Integración     /
                 /  API / Serv \       ◄── 5% a 15% (Reglas negocio)       \───────────────────────/
                /───────────────\                                           \  Unitarias (Pocas)  /
               /    UNITARIAS    \     ◄── 80% a 90% (Rápidas, baratas,      \───────────────────/
              /___________________\        altísimo ROI, corren en segs)      \_________________/
```

1. **Base de la Pirámide — Pruebas Unitarias y de Componentes (80% a 90%):**
   * Son **extremadamente rápidas** (miles corren en pocos segundos), **baratas de escribir y mantener**, indican la línea exacta donde está el error y tienen el **mayor Retorno de Inversión (ROI)** de automatización.
2. **Capa Intermedia — Pruebas de API / Servicios / Aceptación en Capa Lógica (5% a 15%):**
   * Prueban las reglas de negocio e integración de extremo a extremo **evitando pasar por la interfaz gráfica (GUI)**. Son mucho más estables y rápidas que las pruebas de pantalla.
3. **Cima de la Pirámide — Pruebas de GUI / Interfaz de Usuario Automatizadas (1% a 5%):**
   * Simulan clicks en el navegador/app (ej. Selenium, Playwright). Son las **más lentas, costosas y frágiles** (si un diseñador cambia un botón de lugar o renombra un CSS, el test se rompe aunque la lógica de negocio funcione perfecto). Por eso se automatiza en GUI **solo un conjunto mínimo de flujos críticos (*happy paths*)**.
4. **Nube Superior — Testing Exploratorio Manual:**
   * Lo que **NUNCA debe automatizarse**: la exploración creativa, visual y de usabilidad hecha por un ser humano.

---

### G. Desarrollo Guiado por Pruebas: TDD (*Test-Driven Development* - Kent Beck)

> [!IMPORTANT]
> **TDD TIENE SU PROPIA PRESENTACIÓN (`PRE_16_TDD`) Y SU PROPIO PRÁCTICO EVALUABLE (TP6):** La cátedra evalúa en los Multiple Choice qué es TDD (diseño + programación), el ciclo **Red-Green-Refactor**, las **3 Leyes**, el patrón **AAA** y qué son los **Mocks/Stubs**.

#### 1. ¿Qué es TDD realmente?
* Popularizado por **Kent Beck** (como práctica central de *Extreme Programming - XP*), **TDD NO es una técnica de Testing para que los testers encuentren bugs al final; es una técnica de DISEÑO y PROGRAMACIÓN de software** guiada por pruebas unitarias automatizadas.
* **Ecuación de TDD:** $$\text{TDD} = \text{TFD (Test First Development)} + \text{Refactoring}$$
* **¿Por qué decimos que es una técnica de DISEÑO?** Porque al obligarte a escribir primero la prueba que invoca al método antes de que el método exista, te obliga a pensar primero en la interfaz pública de tu clase, a mantener métodos pequeños con una única responsabilidad (**Alta Cohesión**) y desacoplados de bases de datos o servicios externos (**Bajo Acoplamiento**), logrando un **Diseño Emergente** limpio.

#### 2. El Ciclo Mantra de TDD: RED $\to$ GREEN $\to$ REFACTOR

```mermaid
flowchart LR
    Red["1. RED (Rojo)\nEscribir una pequeña prueba\nautomatizada que FALLE\n(ni siquiera compila o da error)"] --> Green["2. GREEN (Verde)\nEscribir el CÓDIGO MÍNIMO\ne indispensable de producción\npara que la prueba PASE"]
    Green --> Refactor["3. REFACTOR (Azul)\nLimpiar el código (eliminar\nduplicación, mejorar nombres)\nsin romper las pruebas verdes"]
    Refactor -->|"Repetir en ciclos de\npocos minutos"| Red
```

1. **RED (Rojo — Crear una prueba que falle):**
   * Escribís un test unitario pequeñito para un comportamiento puntual que aún no existe. **Lo ejecutás y verificás que FALLE**. *(¿Por qué es obligatorio verlo fallar primero? Para **testear al propio test** y asegurarte de que no escribiste un test mal hecho que da siempre verdadero por accidente).*
2. **GREEN (Verde — Hacer que la prueba pase de la forma más simple):**
   * Escribís **únicamente el código de producción mínimo y más sencillo posible** para que ese test pase en verde, sin agregar lógica extra para requerimientos futuros (*"No adelantar código"*). No importa si en este paso el código no es elegante; el único objetivo es poner la barra en verde rápido.
3. **REFACTOR (Refactorizar — Mejorar el diseño interno):**
   * Con la red de seguridad de todos los tests en verde, **mejorás la estructura interna del código** (eliminás código duplicado, extraés métodos, mejorás nombres, aplicás patrones) **sin alterar su comportamiento externo**, corriendo los tests tras cada toque para confirmar que todo sigue en verde.

#### 3. Las 3 Leyes de TDD (Robert C. Martin - "Uncle Bob")
1. **Primera Ley:** No escribirás código de producción a menos que sea para hacer pasar una prueba unitaria que falla.
2. **Segunda Ley:** No escribirás más de una prueba unitaria de lo estrictamente suficiente para que falle (y no compilar cuenta como fallar).
3. **Tercera Ley:** No escribirás más código de producción del estrictamente suficiente para hacer pasar la única prueba que está fallando actualmente.

#### 4. Anatomía de una Prueba Unitaria: El Patrón AAA (*Arrange - Act - Assert*)
Como viste en el **Práctico 6 de TDD (EcoHarmony Park)** de la guía de la cátedra, todo test unitario se estructura en **3 bloques claramente separados**:
1. **Arrange (Preparar / Precondiciones):** Se instancian los objetos necesarios, se inicializan los diccionarios/variables de entrada y se configuran los *Mocks/Stubs* (ej. `usuario = ...`, `compra = ...`).
2. **Act (Actuar / Secuencia):** Se invoca a la función o método específico que se está probando (ej. `resultado = comprar_entradas(compra, usuario)`).
3. **Assert (Afirmar / Verificar Resultados):** Se compara automáticamente mediante una aserción (`assertEquals(resultado, esperado)`) que la salida o excepción devuelta coincida exactamente con el resultado esperado. *(Una prueba unitaria sin `assert` no prueba absolutamente nada).*

#### 5. Aislamiento en Pruebas Unitarias: *Stubs* y *Mocks* (*Test Doubles*)
Una prueba unitaria debe ser **rápida, determinista y aislada**: no debe conectarse de verdad a la pasarela real de Mercado Pago, ni mandar mails reales por internet, ni depender de una base de datos lenta que puede estar caída. Para aislar la unidad bajo prueba se usan **Dobles de Prueba (*Test Doubles*)**:
* **Stub:** Objeto simulado que **reemplaza a una dependencia real y devuelve respuestas preprogramadas ("enlatadas")** cuando el método bajo prueba lo consulta (ej. un *Stub* de base de datos que siempre devuelve `"Cupo disponible = 5"` sin ir al disco). Verifica **estado**.
* **Mock:** Objeto simulado inteligente que, además de reemplazar a la dependencia, **registra cómo fue invocado y permite verificar el comportamiento / interacción** (ej. un *Mock* del servicio de Email que verifica: *"¿El método `comprar_entradas` llamó exactamente 1 vez a `enviar_mail()` pasándole el correo del cliente?"*).
* **Ventajas y Desventajas de TDD:**
  * *Ventajas:* Altísima cobertura de regresión desde el día 1, código modular y desacoplado, menor tiempo perdido depurando (*debugging*), las pruebas sirven como **documentación viva y ejecutable** de cómo usar cada clase.
  * *Desventajas / Desafíos:* Curva de aprendizaje inicial alta, incrementa el tiempo de codificación inicial entre un 15% y 30% (que se recupera con creces en menor retrabajo y mantenimiento), y si las pruebas están mal diseñadas (muy acopladas a la implementación interna), hay que mantener también el código de pruebas.


---

# MANUAL PRÁCTICO FORENSE (50 PUNTOS): Diseño de Pruebas de Caja Negra

---

## 1. Radiografía del Examen Práctico y Auditoría de Correcciones Reales

En el Segundo Parcial Práctico (50 puntos, 60 minutos) te entregan:
1. Una descripción general del **Dominio** (1 página y media, ej. *Cambalache Solidario*, *EcoHarmony Park*, *Taxi Mobile*).
2. Una **Tarjeta de Historia de Usuario (User Story)** con sus **Criterios de Aceptación** y **Pruebas de Usuario (UAT)**.
3. Dos consignas:
   * **Punto 1 (20 puntos):** *"Según el método de Partición de Equivalencias, defina las clases existentes (de Entrada y de Salida, válidas e inválidas) utilizando el cuadro provisto"*.
   * **Punto 2 (30 puntos = 2 casos × 15 puntos):** *"Defina 2 Casos de Prueba específicos (indicados en la consigna) aplicando los métodos de Partición de Equivalencias y Análisis de Valores Límite, maximizando la cantidad de clases cubiertas"*.

---

### Los 10 Errores Mortales Marcados en Lapicera Azul por las Profesoras (y Cómo Blindarte)

Analizando las correcciones reales puño y letra de Laura Covara y Judith Meles en los parciales 2025 (Temas A y B), estos son los **10 puntos exactos donde los alumnos pierden entre 15 y 30 puntos**:

| # | Error Mortal del Alumno en el Parcial | Corrección de la Cátedra (Cómo Hacerlo Perfecto 10/10) |
| :-: | :--- | :--- |
| **1** | **Olvidar la condición externa `Usuario` / `Usuario logueado`** porque no dice "ingresar usuario" en el formulario. | **SIEMPRE incluí `Usuario logueado` como Condición Externa de Entrada.**<br>• *Clase Válida:* `Usuario logueado con rol/perfil de <Rol de la US>`.<br>• *Clases Inválidas:* 1) `Usuario no logueado`, 2) `Usuario logueado con perfil distinto a <Rol de la US>`. |
| **2** | **No numerar correlativamente las Clases de Equivalencia** o repetir números entre válidas e inválidas. | Numerá **todas** las clases (tanto válidas como inválidas, de entrada y de salida) con un **ID único y correlativo ($1, 2, 3, \dots, N$)**. Ese número es el que después referenciás en los Casos de Prueba. |
| **3** | **Ignorar las dependencias entre entradas (Campos Condicionales)** (ej. "Si es Usado, el detalle de uso es obligatorio; si es Nuevo, no"). | Cuando el campo $B$ depende del valor elegido en el campo $A$, **dividí las clases de $B$ mencionando explícitamente la condición de $A$**:<br>• *Válida 1:* Ingresa Detalle de Uso (cadena $\le 200$ car.) **cuando Estado = "Usado"**.<br>• *Válida 2:* No ingresa Detalle de Uso **cuando Estado = "Nuevo"**.<br>• *Inválida 1:* No ingresa Detalle de Uso **cuando Estado = "Usado"**.<br>• *Inválida 2:* Ingresa Detalle de Uso **cuando Estado = "Nuevo"**. |
| **4** | **Tratar igual a los campos Obligatorios y a los Opcionales.** | • Si el campo es **Obligatorio**: `No ingresa <campo> (vacío)` va en **Clase Inválida**.<br>• Si el campo es **Opcional**: `No ingresa <campo> (vacío)` va como una **Clase VÁLIDA adicional** (además de la clase válida donde sí lo ingresa). |
| **5** | **Olvidar las múltiples clases inválidas en campos numéricos, de texto o archivos.** | Por cada restricción de un campo, creá su clase inválida separada:<br>1) `No ingresa <campo>` (si es requerido).<br>2) `Ingresa formato no numérico / no entero / caracteres inválidos`.<br>3) `Valor menor al mínimo` (ej. $< 1$ o $\le 0$).<br>4) `Valor mayor al máximo` (ej. $> 10$ o $> 150$ caracteres). |
| **6** | **En Clases de Equivalencia de SALIDA, poner una sola fila pobre** llamada `"Mensaje"` o repetir las entradas. | En las correcciones de 2025 las profesoras escribieron en azul: ***"Separar cada elemento de salida"***. Mirá qué produce la US cuando sale bien y cuando falla, y creá filas de Salida para:<br>• *Identificador / Estado del objeto creado o actualizado* (ej. Producto en estado `"Publicado"`).<br>• *Datos / Grilla / Planilla o Archivo exportado* (ej. Archivo Excel `.xlsx` con columnas X, Y, Z).<br>• *Mensaje de confirmación en pantalla* vs. *Mensajes de error específicos por cada validación fallida*.<br>• *Notificación / Email enviado* (si la US lo menciona). |
| **7** | **Usar palabras genéricas en los Casos de Prueba** (*"Ingresa un nombre válido, un precio válido y sube una foto válida"*). | **¡PROHIBIDO USAR LA PALABRA "VÁLIDO" O "CORRECTO" EN UN CASO DE PRUEBA!** El Caso de Prueba debe tener **valores literales y concretos listos para tipear**: `"Campera de cuero"`, Precio `"$15.000"`, Peso `"2,00 MB"`, Formato `".jpg"`, Barrio `"Nueva Córdoba"`. |
| **8** | **No aplicar Análisis de Valores Límite (BVA) al elegir los datos concretos del Caso de Prueba.** | Si la clase válida de Descripción es *de 1 a 150 caracteres*, el Precio es *$> 0$* y se permiten *de 1 a 3 fotos de hasta 2 MB*, en tu Caso de Prueba no elijas 50 caracteres y 2 fotos de 1 MB: **elegí los VALORES LÍMITE**: ej. **150 caracteres** (o 1 carácter), **3 fotos** (límite superior) de **2 MB** (límite superior). ¡Las profesoras buscan específicamente el valor límite en tu ejemplo! |
| **9** | **Confundir `Precondiciones` con `Pasos` en el Caso de Prueba.** | • **Precondiciones:** Estado previo del sistema y la BD **antes** de tocar nada (ej. *El usuario "pedro" está logueado con rol Vendedor; existen las categorías "Ropa" y "Calzado" cargadas en el sistema; existe la venta #104 del 15/10/2025 por \$10.000*).<br>• **Pasos:** Secuencia numerada de acciones del actor: *1. El Vendedor selecciona la opción "...", 2. El Vendedor ingresa "...", ..., N. El Vendedor presiona el botón "..."*. |
| **10** | **Un Resultado Esperado incompleto o que no verifica las Precondiciones.** | Todo dato que preparaste en las Precondiciones e ingresaste en los Pasos **debe reflejarse en el Resultado Esperado** (ej. si en Precondiciones dijiste que en octubre hubo 2 ventas de \$5.000 y \$3.000, el Resultado Esperado debe decir que el reporte muestra exactamente esas 2 filas y el total de **\$8.000**). Además, indicá las **Clases de Equivalencia cubiertas** por el caso. |

---

## 2. Plantillas Universales Blindadas para el Examen Práctico

### A. Plantilla de Clases de Equivalencia (Punto 1 — 20 Puntos)

```markdown
| Condición Externa | N° | Clases de Equivalencia Válidas | N° | Clases de Equivalencia Inválidas |
| :--- | :-: | :--- | :-: | :--- |
| **CLASES DE EQUIVALENCIA DE ENTRADA** | | | | |
| **Usuario logueado** | 1 | Usuario logueado con permisos/rol de [Rol de la US] | 2 | Usuario no logueado |
| | | | 3 | Usuario logueado con cualquier rol distinto a [Rol de la US] |
| **[Campo Lista / Selección]** (ej. Categoría / Estado) | 4 | Selecciona una opción válida de la lista: ["Opción A", "Opción B", "Opción C"] | 5 | No selecciona ninguna opción (vacío) |
| | | | 6 | Selecciona una opción inexistente o sin cupo/inactiva |
| **[Campo Texto Obligatorio con Tope]** (ej. Título <= 50 car.) | 7 | Ingresa cadena de texto de longitud $1 \le L \le 50$ caracteres | 8 | No ingresa texto (vacío) |
| | | | 9 | Ingresa cadena de texto con longitud $L > 50$ caracteres |
| **[Campo Numérico con Rango]** (ej. Cantidad entera entre 1 y 10) | 10 | Ingresa número entero $1 \le \text{Cantidad} \le 10$ | 11 | No ingresa cantidad (vacío) |
| | | | 12 | Ingresa valor en formato no numérico o decimal (no entero) |
| | | | 13 | Ingresa número entero $< 1$ (ej. $\le 0$) |
| | | | 14 | Ingresa número entero $> 10$ |
| **[Campo Condicional]** (ej. Detalle si Estado = Usado) | 15 | Ingresa detalle ($1 \le L \le 200$ car.) cuando Estado es "Usado" | 17 | No ingresa detalle cuando Estado es "Usado" |
| | 16 | No ingresa detalle cuando Estado es "Nuevo" | 18 | Ingresa detalle con $L > 200$ car. cuando Estado es "Usado" |
| | | | 19 | Ingresa detalle cuando Estado es "Nuevo" |
| **[Campo Archivos / Fotos]** (ej. 1 a 3 fotos JPG/PNG hasta 2MB) | 20 | Adjunta entre 1 y 3 archivos de imagen | 21 | No adjunta ninguna imagen (0 archivos) |
| | | | 22 | Adjunta más de 3 imágenes ($> 3$ archivos) |
| **Formato de Imagen** | 23 | Imagen en formato `.jpg` o `.png` | 24 | Archivo en cualquier formato distinto a `.jpg` y `.png` (ej. `.pdf`, `.gif`) |
| **Tamaño/Peso de Imagen** | 25 | Cada imagen tiene un peso $> 0\text{ KB}$ y $\le 2\text{ MB}$ | 26 | Al menos una imagen tiene un peso $> 2\text{ MB}$ |
| **CLASES DE EQUIVALENCIA DE SALIDA** | | | | |
| **Estado / Registro del Objeto** | 27 | Se registra el [Objeto] en estado "[Estado Esperado]" con los datos ingresados | 28 | No se registra el [Objeto] (transacción cancelada/rechazada) |
| **Visualización / Cálculo / Archivo de Salida** | 29 | Se muestra/genera [Detalle exacto de grilla, cálculo de comisión o archivo .xlsx/.pdf] | 30 | No se genera el archivo / No se muestran resultados |
| **Mensaje del Sistema** | 31 | Mensaje de éxito: "[Texto de confirmación según US]" | 32 | Mensaje de error: "Debe completar todos los campos obligatorios [Campo]" |
| | | | 33 | Mensaje de error: "El valor de [Campo] supera el límite permitido" |
| | | | 34 | Mensaje de error: "Formato o tamaño de archivo no válido" |
```

---

### B. Tabla Rápida de Valores Límite (BVA) para Elegir tus Datos de Prueba

Cada vez que tengas que inventar el dato concreto para tus 2 Casos de Prueba en el Punto 2, **no pongas un valor del medio: poné los valores de la columna "Valores Límite Válidos" (si el caso de prueba es de éxito / *Pasa*) o de la columna "Valores Límite Inválidos" (si el caso de prueba es de error / *Falla*)**:

| Regla en los Criterios de Aceptación | Clases de Equivalencia | Valores Límite VÁLIDOS (Para Caso que PASA) | Valores Límite INVÁLIDOS (Para Caso que FALLA) |
| :--- | :--- | :--- | :--- |
| **"Entre 1 y 10 entradas"** ($1 \le X \le 10$, entero) | Válida: $[1, 10]$<br>Inválidas: $< 1$ y $> 10$ | **$1$** (mínimo) o **$10$** (máximo) | **$0$** (límite inf. $- 1$) o **$11$** (límite sup. $+ 1$) |
| **"Precio mayor a 0"** ($X > 0$, decimal) | Válida: $> 0$<br>Inválida: $\le 0$ | **$\$0,01$** (o $\$1$ si es entero) | **$\$0,00$** (límite inválido) o **$-\$0,01$** |
| **"Descripción de hasta 150 caracteres"** ($1 \le L \le 150$) | Válida: $[1, 150]$<br>Inválidas: $0$ (vacío) y $> 150$ | Cadena de **1 carácter** o de **exactamente 150 caracteres** | Cadena **vacía (0 car.)** o de **151 caracteres** |
| **"Entre 1 y 3 fotos de hasta 2 MB"** | Cant. Válida: $[1, 3]$<br>Peso Válido: $(0, 2\text{ MB}]$ | **1 foto** o **3 fotos** de exactamente **2,00 MB** | **0 fotos** o **4 fotos**; o 1 foto de **2,01 MB** |
| **"Período de hasta 1 semana (7 días) a futuro desde hoy (31/10/2026)"** | Válida: $[\text{Hoy}, \text{Hoy}+7\text{d}]$<br>Inválidas: $< \text{Hoy}$ y $> \text{Hoy}+7\text{d}$ | **31/10/2026** (Hoy) o **07/11/2026** (Hoy + 7 días) | **30/10/2026** (Ayer) o **08/11/2026** (Hoy + 8 días) |
| **"Fecha desde $\le$ Fecha hasta, no mayor a fecha actual"** | Válida: $F_{\text{desde}} \le F_{\text{hasta}} \le F_{\text{actual}}$ | $F_{\text{hasta}} =$ **Fecha actual** (o $F_{\text{desde}} = F_{\text{hasta}}$) | $F_{\text{hasta}} =$ **Fecha actual + 1 día**, o $F_{\text{desde}} > F_{\text{hasta}}$ |

---

## 3. Resoluciones Modelo Completas de los Parciales Reales 2025 (Cambalache Solidario)

### A. Parcial 2025 TEMA A (Amarillo) — US: `Publicar Producto en Venta`

#### Contexto de la User Story (Tema A 2025)
* **Historia:** *Como Vendedor registrado quiero publicar un producto para ponerlo a la venta en la plataforma Cambalache Solidario y donar un porcentaje a una ONG.*
* **Criterios de Aceptación:**
  * Se debe ingresar: **Título** (obligatorio, hasta 60 caracteres), **Descripción** (obligatoria, hasta 200 caracteres), **Categoría** (seleccionar una de las habilitadas: Indumentaria, Hogar, Tecnología, Libros), **Precio** (obligatorio, numérico mayor a cero), **Estado del artículo** ("Nuevo" o "Usado").
  * Si el estado es **"Usado"**, se debe ingresar obligatoriamente el **Detalle de uso / estado** (hasta 100 caracteres). Si es **"Nuevo"**, este campo no debe completarse.
  * Se debe adjuntar **entre 1 y 3 fotos** del producto en formato **JPG o PNG**, donde cada foto no supere los **2 MB**.
  * Se debe seleccionar la **ONG beneficiaria** (de la lista de ONGs activas) y el **Porcentaje de donación** (entero entre **10% y 100%**).
  * El sistema debe calcular y mostrar el **Monto a donar a la ONG** y la **Ganancia neta del vendedor**, dejar el artículo en estado **"Publicado"** y mostrar el mensaje de confirmación.
* **Consigna del Punto 2:** Diseñar 2 Casos de Prueba aplicando Valores Límite:
  * **Caso de Prueba 1:** Publicar exitosamente un artículo **Usado** (Pasa).
  * **Caso de Prueba 2:** Publicar exitosamente un artículo **Nuevo** (Pasa) *(o variante con falla según tema)*.

#### Punto 1 Resuelto 20/20 Puntos: Tabla de Clases de Equivalencia (Tema A)

| Condición Externa | N° | Clases de Equivalencia Válidas | N° | Clases de Equivalencia Inválidas |
| :--- | :-: | :--- | :-: | :--- |
| **CLASES DE EQUIVALENCIA DE ENTRADA** | | | | |
| **Usuario logueado** | 1 | Usuario logueado con perfil de Vendedor registrado | 2 | Usuario no logueado |
| | | | 3 | Usuario logueado con perfil distinto a Vendedor (ej. Administrador / ONG) |
| **Título del producto** | 4 | Cadena de caracteres con longitud $1 \le L \le 60$ caracteres | 5 | No ingresa título (vacío) |
| | | | 6 | Cadena de caracteres con longitud $L > 60$ caracteres |
| **Descripción** | 7 | Cadena de caracteres con longitud $1 \le L \le 200$ caracteres | 8 | No ingresa descripción (vacío) |
| | | | 9 | Cadena de caracteres con longitud $L > 200$ caracteres |
| **Categoría** | 10 | Selecciona 1 categoría habilitada de la lista: "Indumentaria", "Hogar", "Tecnología", "Libros" | 11 | No selecciona categoría |
| | | | 12 | Categoría inexistente o deshabilitada |
| **Precio** | 13 | Número mayor a cero ($\text{Precio} > 0$) | 14 | No ingresa precio (vacío) |
| | | | 15 | Ingresa caracteres no numéricos en precio |
| | | | 16 | Ingresa número menor o igual a cero ($\text{Precio} \le 0$) |
| **Estado del artículo** | 17 | Selecciona estado "Nuevo" | 19 | No selecciona estado del artículo |
| | 18 | Selecciona estado "Usado" | 20 | Cualquier estado distinto de "Nuevo" y "Usado" |
| **Detalle de uso** | 21 | Ingresa cadena de $1 \le L \le 100$ caracteres cuando Estado es "Usado" | 23 | No ingresa detalle de uso (vacío) cuando Estado es "Usado" |
| | 22 | No ingresa detalle de uso cuando Estado es "Nuevo" | 24 | Ingresa cadena con $L > 100$ caracteres cuando Estado es "Usado" |
| | | | 25 | Ingresa detalle de uso cuando Estado es "Nuevo" |
| **Cantidad de fotos** | 26 | Adjunta entre 1 y 3 fotos ($1 \le \text{Cant} \le 3$) | 27 | No adjunta ninguna foto ($\text{Cant} = 0$) |
| | | | 28 | Adjunta más de 3 fotos ($\text{Cant} > 3$) |
| **Formato de fotos** | 29 | Fotos en formato `.JPG` o `.PNG` | 30 | Archivos en formato distinto a `.JPG` o `.PNG` (ej. `.PDF`, `.BMP`) |
| **Tamaño de cada foto** | 31 | Cada foto tiene un peso $> 0\text{ KB}$ y $\le 2\text{ MB}$ | 32 | Al menos una foto tiene un peso $> 2\text{ MB}$ |
| **ONG Beneficiaria** | 33 | Selecciona 1 ONG activa de la lista | 34 | No selecciona ONG beneficiaria |
| | | | 35 | ONG inexistente o inactiva |
| **Porcentaje de donación** | 36 | Número entero tal que $10 \le \% \le 100$ | 37 | No ingresa porcentaje de donación (vacío) |
| | | | 38 | Ingresa valor no numérico o decimal (no entero) |
| | | | 39 | Número entero $< 10$ (ej. $9\%$) |
| | | | 40 | Número entero $> 100$ (ej. $101\%$) |
| **CLASES DE EQUIVALENCIA DE SALIDA** | | | | |
| **Estado de la Publicación** | 41 | Producto registrado en el sistema en estado "Publicado" | 42 | Producto no registrado / No cambia a estado "Publicado" |
| **Cálculo de Monto a Donar** | 43 | Se muestra monto a donar $= \text{Precio} \times (\% \text{ Donación} / 100)$ (mayor a 0) | 44 | Error: No es posible calcular el monto a donar |
| **Cálculo de Ganancia del Vendedor** | 45 | Se muestra ganancia neta $= \text{Precio} - \text{Monto a Donar}$ ($\ge 0$) | 46 | Error: No es posible calcular la ganancia del vendedor |
| **Mensaje de Confirmación / Error** | 47 | Mensaje de éxito: "El producto ha sido publicado con éxito" | 48 | Mensaje de error por datos obligatorios faltantes |
| | | | 49 | Mensaje de error por longitud o rango inválido (título, descripción, precio o porcentaje) |
| | | | 50 | Mensaje de error: "Debe ingresar el detalle de uso para artículos usados" |
| | | | 51 | Mensaje de error por cantidad, formato o peso de fotos inválido |

#### Punto 2 Resuelto 30/30 Puntos: Casos de Prueba con Valores Límite (Tema A)

| ID | Prioridad | Nombre del Caso de Prueba | Precondiciones | Pasos | Resultado Esperado |
| :-: | :-: | :--- | :--- | :--- | :--- |
| **1** | **Alta** | Publicar producto en estado Usado con valores límite superiores | • El usuario `"nico.lopez@gmail.com"` se encuentra logueado en el sistema y posee perfil de **Vendedor registrado**.<br>• Existen cargadas y habilitadas en el sistema las categorías: `"Indumentaria"`, `"Hogar"`, `"Tecnología"` y `"Libros"`.<br>• Existe cargada y activa la ONG `"Fundación Banco de Alimentos Córdoba"`. | 1. El Vendedor selecciona la opción `"Publicar Producto en Venta"`.<br>2. El Vendedor ingresa en Título una cadena de **60 caracteres** (valor límite máx.): `"Notebook Lenovo ThinkPad T14 Gen 2 usada en excelente estado"`.<br>3. El Vendedor ingresa en Descripción una cadena de **200 caracteres** (valor límite máx.): `"Computadora portátil con procesador i5, 16GB RAM y disco SSD de 512GB. Incluye cargador original de fábrica, batería funcionando perfectamente y maletín de transporte impermeable color negro mate."`.<br>4. El Vendedor selecciona la Categoría `"Tecnología"`.<br>5. El Vendedor ingresa en Precio el valor `100000`.<br>6. El Vendedor selecciona el Estado `"Usado"`.<br>7. El Vendedor ingresa en Detalle de uso una cadena de **100 caracteres** (valor límite máx.): `"Uso de oficina durante 1 año. Tiene un pequeño desgaste cosmético en la esquina derecha de la tapa."`.<br>8. El Vendedor adjunta **3 fotos** (valor límite máx.): `foto1.jpg` (**2,00 MB**), `foto2.png` (**2,00 MB**) y `foto3.jpg` (**1,50 MB**).<br>9. El Vendedor selecciona la ONG `"Fundación Banco de Alimentos Córdoba"`.<br>10. El Vendedor ingresa como Porcentaje de donación el valor límite mínimo **`10`** ($10\%$).<br>11. El Vendedor selecciona el botón `"Publicar"`. | • El sistema registra el producto `"Notebook Lenovo ThinkPad T14 Gen 2..."` en estado **`"Publicado"`**.<br>• El sistema calcula y muestra el **Monto a donar a la ONG: `\$10.000`** ($10\%$ de $\$100.000$) y la **Ganancia del vendedor: `\$90.000`**.<br>• El sistema muestra el mensaje de confirmación: **`"El producto ha sido publicado con éxito"`**.<br>*(Clases cubiertas: 1, 4, 7, 10, 13, 18, 21, 26, 29, 31, 33, 36, 41, 43, 45, 47)*. |
| **2** | **Alta** | Publicar producto en estado Nuevo con valores límite inferiores | • El usuario `"nico.lopez@gmail.com"` se encuentra logueado en el sistema y posee perfil de **Vendedor registrado**.<br>• Existen cargadas y habilitadas las categorías: `"Indumentaria"`, `"Hogar"`, `"Tecnología"` y `"Libros"`.<br>• Existe cargada y activa la ONG `"Techo Córdoba"`. | 1. El Vendedor selecciona la opción `"Publicar Producto en Venta"`.<br>2. El Vendedor ingresa en Título una cadena de **1 carácter** (valor límite mín.): `"A"`.<br>3. El Vendedor ingresa en Descripción una cadena de **1 carácter** (valor límite mín.): `"B"`.<br>4. El Vendedor selecciona la Categoría `"Libros"`.<br>5. El Vendedor ingresa en Precio el valor límite mínimo **`0,01`** (`$0,01` o `$1`).<br>6. El Vendedor selecciona el Estado `"Nuevo"`.<br>7. El Vendedor **no ingresa** datos en el campo Detalle de uso.<br>8. El Vendedor adjunta **1 foto** (valor límite mín.): `libro.png` de peso **`0,10 MB`** ($\le 2\text{ MB}$).<br>9. El Vendedor selecciona la ONG `"Techo Córdoba"`.<br>10. El Vendedor ingresa como Porcentaje de donación el valor límite máximo **`100`** ($100\%$).<br>11. El Vendedor selecciona el botón `"Publicar"`. | • El sistema registra el producto `"A"` con estado `"Nuevo"` en estado de publicación **`"Publicado"`**.<br>• El sistema calcula y muestra el **Monto a donar a la ONG: `\$0,01`** ($100\%$) y la **Ganancia del vendedor: `\$0,00`**.<br>• El sistema muestra el mensaje de confirmación: **`"El producto ha sido publicado con éxito"`**.<br>*(Clases cubiertas: 1, 4, 7, 10, 13, 17, 22, 26, 29, 31, 33, 36, 41, 43, 45, 47)*. |

---

### B. Parcial 2025 TEMA B (Verde) — US: `Generar Rendición para Beneficiarios`

#### Contexto de la User Story (Tema B 2025)
* **Historia:** *Como Administrador de Cambalache Solidario quiero generar el reporte de rendición de donaciones para una ONG beneficiaria en un período de fechas para informar y transferir lo recaudado.*
* **Criterios de Aceptación:**
  * Se debe seleccionar una **ONG Beneficiaria** (de las ONGs registradas) o la opción **"Todas"**.
  * Se debe ingresar **Fecha Desde** y **Fecha Hasta** (ambas obligatorias, en formato `dd/mm/aaaa`). La *Fecha Desde* debe ser menor o igual a la *Fecha Hasta*, y la *Fecha Hasta* no puede ser posterior a la **fecha actual**. Además, el rango máximo entre *Fecha Desde* y *Fecha Hasta* no puede superar los **31 días**.
  * Se debe seleccionar el **Formato de salida** del reporte: **"Pantalla"**, **"Excel"** o **"PDF"**.
  * El reporte debe listar para cada venta concretada en el período: Fecha de venta, Producto, Precio de venta, % de donación y Monto donado, más una fila final con el **Total Recaudado para Donación**.
  * Si no existen ventas para el filtro ingresado, debe informarse el mensaje *"No se registran donaciones para los criterios seleccionados"*.
* **Consigna del Punto 2:**
  * **Caso de Prueba 1:** Generar rendición exitosa exportando a **Excel** con datos en el período (Pasa).
  * **Caso de Prueba 2:** Generar rendición para un período válido **sin datos / sin ventas registradas** (Pasa mostrando mensaje de sin registros).

#### Punto 1 Resuelto 20/20 Puntos: Tabla de Clases de Equivalencia (Tema B)

| Condición Externa | N° | Clases de Equivalencia Válidas | N° | Clases de Equivalencia Inválidas |
| :--- | :-: | :--- | :-: | :--- |
| **CLASES DE EQUIVALENCIA DE ENTRADA** | | | | |
| **Usuario logueado** | 1 | Usuario logueado con perfil de Administrador | 2 | Usuario no logueado |
| | | | 3 | Usuario logueado con perfil distinto a Administrador (ej. Vendedor / Comprador) |
| **ONG Beneficiaria** | 4 | Selecciona una ONG registrada de la lista | 6 | No selecciona ninguna opción en ONG Beneficiaria |
| | 5 | Selecciona la opción "Todas" | 7 | Selecciona una ONG inexistente |
| **Fecha Desde** | 8 | Fecha válida en formato `dd/mm/aaaa` tal que $\text{Fecha Desde} \le \text{Fecha Hasta} \le \text{Fecha Actual}$ | 9 | No ingresa Fecha Desde (vacío) |
| | | | 10 | Fecha Desde con formato inválido (distinto de `dd/mm/aaaa` o fecha inexistente como `31/02/2025`) |
| | | | 11 | $\text{Fecha Desde} > \text{Fecha Actual}$ (fecha futura) |
| **Fecha Hasta** | 12 | Fecha válida en formato `dd/mm/aaaa` tal que $\text{Fecha Desde} \le \text{Fecha Hasta} \le \text{Fecha Actual}$ | 13 | No ingresa Fecha Hasta (vacío) |
| | | | 14 | Fecha Hasta con formato inválido |
| | | | 15 | $\text{Fecha Hasta} > \text{Fecha Actual}$ (fecha futura) |
| | | | 16 | $\text{Fecha Hasta} < \text{Fecha Desde}$ (período invertido) |
| **Amplitud del Período** | 17 | Período tal que $0 \le (\text{Fecha Hasta} - \text{Fecha Desde}) \le 31\text{ días}$ | 18 | Período tal que $(\text{Fecha Hasta} - \text{Fecha Desde}) > 31\text{ días}$ |
| **Formato de Salida** | 19 | Selecciona "Pantalla" | 22 | No selecciona formato de salida |
| | 20 | Selecciona "Excel" | 23 | Cualquier formato distinto de "Pantalla", "Excel" o "PDF" |
| | 21 | Selecciona "PDF" | | |
| **CLASES DE EQUIVALENCIA DE SALIDA** | | | | |
| **Detalle de Rendición (Con Ventas)** | 24 | Listado con filas que contienen: Fecha de venta, Producto, Precio de venta, % Donación y Monto donado de las ventas del período | 25 | Error: No es posible mostrar el detalle de ventas |
| **Totalizador de Rendición** | 26 | Suma total exacta de los montos donados ($\text{Total} > 0$) | 27 | Error en el cálculo del total recaudado |
| **Archivo / Salida Generada** | 28 | Visualización de grilla en Pantalla (si eligió "Pantalla") | 31 | Error al generar o descargar el archivo de exportación |
| | 29 | Descarga de archivo `.xlsx` (si eligió "Excel") | | |
| | 30 | Descarga de archivo `.pdf` (si eligió "PDF") | | |
| **Mensajes del Sistema** | 32 | Mensaje informativo (cuando no hay ventas en el período válido): `"No se registran donaciones para los criterios seleccionados"` | 33 | Mensaje de error: `"Debe completar las fechas Desde y Hasta"` |
| | | | 34 | Mensaje de error: `"La Fecha Hasta no puede ser mayor a la fecha actual ni menor a la Fecha Desde"` |
| | | | 35 | Mensaje de error: `"El período consultado no puede superar los 31 días"` |

#### Punto 2 Resuelto 30/30 Puntos: Casos de Prueba con Valores Límite (Tema B)

| ID | Prioridad | Nombre del Caso de Prueba | Precondiciones | Pasos | Resultado Esperado |
| :-: | :-: | :--- | :--- | :--- | :--- |
| **1** | **Alta** | Generar rendición en formato Excel para una ONG con período límite de 31 días | • El usuario `"admin@cambalache.org"` se encuentra logueado con permisos de **Administrador**.<br>• La fecha actual del sistema es **`31/10/2025`**.<br>• Se encuentra registrada la ONG `"Fundación Manos Abiertas"` y `"Caritas Córdoba"`.<br>• Existen registradas 2 ventas concretadas para `"Fundación Manos Abiertas"` en el período:<br>  - Venta 1: Fecha `01/10/2025`, Producto `"Mesa de pino"`, Precio `\$20.000`, Donación `50%`, Monto donado `\$10.000`.<br>  - Venta 2: Fecha `31/10/2025`, Producto `"Silla escritorio"`, Precio `\$10.000`, Donación `20%`, Monto donado `\$2.000`. | 1. El Administrador selecciona la opción `"Generar Rendición para Beneficiarios"`.<br>2. El Administrador selecciona en ONG Beneficiaria `"Fundación Manos Abiertas"`.<br>3. El Administrador ingresa en Fecha Desde **`"01/10/2025"`**.<br>4. El Administrador ingresa en Fecha Hasta **`"31/10/2025"`** *(valor límite igual a Fecha Actual y amplitud límite de 31 días)*.<br>5. El Administrador selecciona el Formato de salida **`"Excel"`**.<br>6. El Administrador selecciona el botón `"Generar Rendición"`. | • El sistema genera y descarga un archivo en formato Excel (`.xlsx`) para `"Fundación Manos Abiertas"` correspondiente al período `01/10/2025` al `31/10/2025`.<br>• La planilla contiene las 2 filas de ventas:<br>  1) `01/10/2025 | Mesa de pino | \$20.000 | 50% | \$10.000`<br>  2) `31/10/2025 | Silla escritorio | \$10.000 | 20% | \$2.000`<br>• En la fila totalizadora muestra el **Total Recaudado para Donación: `\$12.000`**.<br>*(Clases cubiertas: 1, 4, 8, 12, 17, 20, 24, 26, 29)*. |
| **2** | **Media** | Generar rendición sin datos registrados en fecha límite de 1 solo día | • El usuario `"admin@cambalache.org"` se encuentra logueado con permisos de **Administrador**.<br>• La fecha actual del sistema es **`31/10/2025`**.<br>• Se encuentra registrada la ONG `"Patitas Callejeras"`.<br>• **No existen ventas concretadas** para ninguna ONG en el día `31/10/2025`. | 1. El Administrador selecciona la opción `"Generar Rendición para Beneficiarios"`.<br>2. El Administrador selecciona en ONG Beneficiaria la opción **`"Todas"`**.<br>3. El Administrador ingresa en Fecha Desde **`"31/10/2025"`**.<br>4. El Administrador ingresa en Fecha Hasta **`"31/10/2025"`** *(valor límite inferior de amplitud: 0 días de diferencia, Fecha Desde = Fecha Hasta = Fecha Actual)*.<br>5. El Administrador selecciona el Formato de salida **`"Pantalla"`**.<br>6. El Administrador selecciona el botón `"Generar Rendición"`. | • El sistema no muestra filas en la grilla de resultados.<br>• El sistema muestra en pantalla el mensaje informativo: **`"No se registran donaciones para los criterios seleccionados"`**.<br>*(Clases cubiertas: 1, 5, 8, 12, 17, 19, 32)*. |

---

## 4. Diccionario Maestro de Gatillos y Cazabobos de Multiple Choice (Parciales 2025 Tema A y B)

En el Punto 2 del Examen Teórico (32 puntos = 8 preguntas de 4 puntos cada una) las preguntas son de **múltiples opciones correctas**. Acá tenés el desglose forense de las **trampas exactas** tomadas en 2025 para que las reconozcas en 5 segundos:

| Tema de la Pregunta | ✅ Opción VERDADERA (Marcar siempre) | ❌ Opción TRAMPA / FALSA (¡NO marcar jamás!) |
| :--- | :--- | :--- |
| **1. Métricas (Lean, Ágil, Tradicional y Dominios)** | • **Eficiencia de ciclo de proceso** $= \text{Touch Time} / \text{Lead Time}$; cuanto más cercana a **1**, más eficiente es el proceso.<br>• Las métricas de **Proceso** las usa el **Ingeniero de Procesos** y son **públicas y despersonalizadas**.<br>• Las métricas de **Proyecto** las usa el **Líder de Proyecto** y son **privadas**.<br>• **RTF (*Running Tested Features*)** exige que las features estén integradas y pasando todas sus pruebas automatizadas en cada momento. | • *"La eficiencia del ciclo de proceso se calcula como Cycle Time / Touch Time"* (Falso: es al revés, Touch / Lead).<br>• *"Las métricas de proceso permiten evaluar el rendimiento individual de cada desarrollador"* (Falso: nunca se evalúan personas con métricas).<br>• *"La velocidad de un equipo Scrum sirve para compararlo con otro equipo de la empresa"* (Falso: el Story Point es relativo a cada equipo). |
| **2. Prácticas Continuas y Deployment** | • **Continuous Integration (CI):** Integrar código varias veces al día ejecutando build y pruebas unitarias/integración automatizadas.<br>• **Continuous Delivery:** El software está siempre listo para producción, pero el pase a producción requiere **decisión humana manual**.<br>• **Continuous Deployment:** Todo cambio que pasa las pruebas del pipeline se despliega en producción **automáticamente sin intervención humana**.<br>• **Canary Deployment:** Libera la versión nueva a un **pequeño porcentaje de usuarios** y escala gradualmente.<br>• **Blue/Green Deployment:** Mantiene **dos entornos idénticos** y conmuta todo el tráfico del entorno Blue al Green. | • *"En Continuous Delivery cada commit que pasa las pruebas automáticas se instala automáticamente en producción sin intervención humana"* (Falso: eso es Continuous **Deployment**).<br>• *"Canary Deployment requiere duplicar el 100% de los servidores en dos entornos idénticos"* (Falso: eso es Blue/Green).<br>• *"En ambientes ágiles las Auditorías de Configuración son la actividad central de CI"* (Falso). |
| **3. Aseguramiento de Calidad (SQA / PPQA)** | • El grupo de **SQA debe ser independiente** del Líder de Proyecto.<br>• SQA se enfoca en el **proceso** y en la **prevención**, evaluando que el proyecto adhiera al proceso definido.<br>• En la visión de **Garvin basada en el Proceso**, se asume que la calidad del producto es consecuencia de seguir un proceso de calidad. | • *"El grupo de SQA depende jerárquicamente del Líder de Proyecto para agilizar las decisiones"* (Falso: perdería objetividad e independencia).<br>• *"La actividad principal de SQA es diseñar y ejecutar los casos de prueba funcionales del sistema"* (Falso: eso es Testing / Control de Calidad). |
| **4. Modelos de Calidad y CMMI** | • En **CMMI Nivel 2**, las 7 áreas son **REQM, PP, PMC, MA, PPQA, CM y SAM** (los proveedores **Tipo B** que no subcontratan excluyen SAM y aplican 6).<br>• La representación **Continua** mide **Niveles de Capacidad (0 a 5)** por área de proceso; la representación **Por Etapas** mide **Niveles de Madurez (1 a 5)** para la organización.<br>• **SCAMPI Clase A** es el único método que otorga calificación oficial. | • *"La representación por Etapas otorga niveles de madurez del 0 al 5"* (Falso: por Etapas va del **1 al 5**; la que empieza en **0** es la Continua).<br>• *"Para certificar CMMI Nivel 2 es obligatorio tener un Proceso Estándar Único para toda la organización"* (Falso: eso recién es en el **Nivel 3 - Definido**; en Nivel 2 se gestiona a nivel de proyecto). |
| **5. Auditorías vs. Revisiones Técnicas** | • En una **Auditoría**, el **Auditado** propone la fecha, entrega evidencias y **elabora el Plan de Acción** para las **Desviaciones** (*No Adecuado* / *Necesita Mejora*).<br>• Las **Observaciones** y **Buenas Prácticas** **NO** requieren Plan de Acción.<br>• En la **Inspección de Fagan**, el **Lector** parafrasea el artefacto, el **Moderador** dirige y hace el seguimiento, y el **Autor** corrige después en la etapa de **Retrabajo**. | • *"Las auditorías de software deben caer de sorpresa para que el equipo no oculte errores"* (Falso: siempre son planificadas).<br>• *"El Auditor redacta el Plan de Acción que el proyecto debe cumplir"* (Falso: el Plan de Acción lo propone el **Auditado**).<br>• *"Durante la Reunión de Inspección de Fagan el equipo debate y corrige en el acto los defectos encontrados"* (Falso: en la reunión solo se registran; corrige el Autor después). |
| **6. Testing (Error/Defecto/Falla, Severidad/Prioridad, Niveles)** | • **Error:** se detecta en la **misma etapa** en que se introduce.<br>• **Defecto:** error que **se traslada de una etapa a otra**.<br>• **Falla:** manifestación visible del defecto **en ejecución**.<br>• **Severidad** = impacto técnico (lo define el Tester); **Prioridad** = urgencia de negocio (la define el PO/Negocio).<br>• **Pruebas Alfa:** usuario en entorno del desarrollador; **Pruebas Beta:** usuario en su propio entorno real. | • *"Un defecto de severidad Cosmética siempre tiene prioridad Baja"* (Falso: un error ortográfico en el logo principal es Cosmético pero de Prioridad Alta).<br>• *"La Complejidad Ciclomática de McCabe se aplica en pruebas de Caja Negra"* (Falso: McCabe es exclusivo de **Caja Blanca**). |
| **7. Testing Ágil, 4 Cuadrantes y TDD** | • **Q1** (Tecnología + Apoya al equipo): Unitarias/Componentes (**Automatizadas**).<br>• **Q2** (Negocio + Apoya al equipo): Funcionales/Ejemplos (**Auto + Manual**).<br>• **Q3** (Negocio + Critica al producto): Exploratorias/Usabilidad/UAT (**Manuales**).<br>• **Q4** (Tecnología + Critica al producto): Performance/Carga/Seguridad (**Herramientas**).<br>• **Pirámide Ágil:** Base **80-90% Unitarias**, Centro **5-15% API**, Cima **1-5% GUI**.<br>• **TDD:** técnica de **diseño y programación** (*Red $\to$ Green $\to$ Refactor*). | • *"Los Cuadrantes del Testing Ágil deben ejecutarse en orden secuencial estricto Q1 -> Q2 -> Q3 -> Q4"* (Falso: no son fases secuenciales).<br>• *"En la Pirámide de Testing Ágil la mayor inversión de automatización debe hacerse en la interfaz gráfica (GUI)"* (Falso: la GUI es la cima de solo 1-5% por ser lenta y frágil).<br>• *"En el paso Green de TDD se debe escribir el código definitivo optimizado y generalizado para futuros requerimientos"* (Falso: en Green se escribe solo el código **mínimo** para pasar el test; se limpia en **Refactor**). |
| **8. Escalado Ágil (Framework Nexus)** | • Nexus escala de **3 a 9 equipos Scrum** con **UN SOLO Product Backlog** y **UN SOLO Product Owner**.<br>• La **Nexus Daily Scrum** ocurre **ANTES** de las Dailies individuales de cada equipo.<br>• La **Nexus Sprint Review** reemplaza a las Sprint Reviews individuales.<br>• La **Nexus Sprint Retrospective** tiene **3 partes**. | • *"El Nexus Integration Team (NIT) es un equipo aparte que se encarga de integrar manualmente el código de todos los equipos al final del Sprint"* (Falso: los equipos integran continuamente; el NIT asegura, guía y destraba). |
