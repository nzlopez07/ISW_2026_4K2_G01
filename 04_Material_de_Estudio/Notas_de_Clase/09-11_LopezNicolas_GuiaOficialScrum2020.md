# 11/09 - Guía Oficial de Scrum 2020: Fundamentos Teóricos, Estructura y Criterios de Examen

- **Materia:** Ingeniería y Calidad de Software (ICSW) – Curso 4K2 (2026)
- **Cátedra:** Judith Meles – Laura Covaro
- **Autor:** López Daniel Nicolás (Legajo 97969 – Grupo 1)
- **Referencia oficial:** *The Scrum Guide* (Ken Schwaber y Jeff Sutherland, versión 2020) y Presentación `08 SCRUM 2026, Planificación de release y sprint, Métricas Scrum.pdf`.
- **Regla SCM de nombrado:** `<MM-DD>_<NombreApellido>_<Tema>.md` $\to$ `09-11_LopezNicolas_GuiaOficialScrum2020.md`

---

## 1. Definición y Naturaleza de Scrum

### Enfoque intuitivo
Scrum no es un manual prescriptivo paso a paso ni un protocolo cerrado. Actúa como el reglamento de un deporte: fija el terreno de juego, las reglas obligatorias, los tiempos y las responsabilidades básicas. La estrategia técnica, las tácticas de programación y las herramientas específicas las elige el equipo según las condiciones cambiantes del entorno.

### Definición formal de examen
Scrum es un **marco de trabajo (*framework*) liviano**, deliberadamente **incompleto**, que asiste a personas, equipos y organizaciones en la generación de valor a través de soluciones adaptativas para abordar problemas complejos.

* **Diferencia entre Marco de Trabajo y Metodología:**
  - Una *metodología* es rígida y prescriptiva: impone qué actividades hacer, qué artefactos generar y en qué orden estricto ejecutarlos.
  - Un *framework* define límites, responsabilidades y eventos indispensables para hacer operativo el empirismo, dejando que las prácticas de ingeniería específicas se acoplen libremente según el contexto.
* **Carácter incompleto por diseño:** Scrum solo establece las reglas esenciales del marco. Técnicas como Historias de Usuario, estimaciones con Planning Poker, desarrollo guiado por pruebas (TDD) o integración continua (CI/CD) no integran la definición formal de Scrum; son complementos metodológicos compatibles.

---

## 2. Fundamentos Filosóficos: Empirismo y Pensamiento Lean

Scrum descansa operativamente sobre dos corrientes: el **control de procesos empírico** y el **pensamiento Lean (*Lean thinking*)**.
- El **empirismo** establece que el conocimiento certero surge de la experiencia directa y que la toma de decisiones debe fundamentarse en la observación de hechos reales ya acontecidos.
- El **pensamiento Lean** orienta el esfuerzo a la eliminación sistemática de desperdicios (*waste*) y a la entrega continua de valor tangible.

### Los Tres Pilares del Empirismo

```text
               +-----------------------------+
               |        TRANSPARENCIA        |
               | (Visibilidad compartida)    |
               +--------------+--------------+
                              |
                              v
               +-----------------------------+
               |         INSPECCIÓN          |
               | (Detección de desviaciones) |
               +--------------+--------------+
                              |
                              v
               +-----------------------------+
               |         ADAPTACIÓN          |
               | (Ajuste rápido de proceso)  |
               +-----------------------------+
```

1. **Transparencia:**  
   Los procesos, el estado real del trabajo y los acuerdos operativos deben ser plenamente visibles para quienes ejecutan el trabajo y para quienes lo reciben. Las decisiones no pueden sustentarse en información incompleta o supuestos ficticios. Si el criterio de calidad no se comprende unánimemente, se vulnera la transparencia.
2. **Inspección:**  
   Los artefactos de Scrum y el avance hacia los objetivos declarados deben ser evaluados con frecuencia programada para detectar anomalías o variaciones fuera de tolerancia.  
   *Criterio de examen:* La inspección nunca debe convertirse en un mecanismo policial de supervisión que interrumpa la ejecución operativa.
3. **Adaptación:**  
   Cuando un proceso o el producto resultante se desvía de los parámetros aceptables, el proceso o el material bajo desarrollo debe ajustarse de inmediato para frenar el desvío.

### Los Cinco Valores de Scrum
La efectividad del empirismo depende del ejercicio de cinco valores en la cultura del equipo:
* **Compromiso:** Disposición personal y colectiva para alcanzar los objetivos del equipo y respaldarse mutuamente.
* **Foco:** Concentración de la capacidad productiva en el trabajo comprometido para el Sprint Goal actual.
* **Franqueza / Apertura:** Disposición para transparentar el estado real de las tareas y debatir abiertamente los impedimentos.
* **Respeto:** Reconocimiento de los integrantes como profesionales competentes y autónomos.
* **Coraje:** Determinación para encarar problemas difíciles y hacer lo correcto sin buscar culpables individuales.

---

## 3. El Scrum Team: Estructura y Responsabilidades

> [!IMPORTANT]
> **Evolución clave de la Guía 2020:** Se suprime el vocablo "Roles" para erradicar divisiones jerárquicas internas. Se adopta el término **Responsabilidades**. No coexisten subequipos; el Scrum Team conforma una unidad indivisible orientada a un único producto.

### Atributos Centrales del Equipo
* **Autogestionado (*Self-managing*):** El equipo decide autónomamente **quién** hace **qué**, **cuándo** y **cómo**. Supera el viejo concepto de *auto-organización*, confiriendo gobierno técnico total a los ejecutores.
* **Multifuncional (*Cross-functional*):** Reúne internamente todas las competencias requeridas (análisis, arquitectura, codificación, pruebas, infraestructura) para generar un incremento completo sin dependencias externas.
* **Dimensión:** Típicamente **10 personas o menos**. El fundamento técnico radica en mitigar la explosión de canales de comunicación formulada por la Ley de Brooks:
  $$\text{Canales} = \frac{n(n - 1)}{2}$$

---

### Las Tres Responsabilidades Formales

#### A. Developers (Desarrolladores)
Son los integrantes comprometidos a construir cualquier aspecto de un **Incremento utilizable** en cada iteración.
- **Alcance de responsabilidad:**
  - Formular el plan del Sprint (**Sprint Backlog**).
  - Garantizar la calidad mediante la aplicación estricta de la **Definition of Done**.
  - Sincronizar y adaptar el plan de trabajo diario hacia el **Sprint Goal** en la Daily Scrum.
  - Asumir la corresponsabilidad profesional de las entregas.

#### B. Product Owner (PO)
Es el responsable exclusivo de **maximizar el valor del producto** derivado del trabajo del Scrum Team. Representa a una persona individual, **nunca a un comité**.
- **Alcance de responsabilidad:**
  - Construir y comunicar el **Product Goal**.
  - Crear, detallar y dar claridad a los elementos del **Product Backlog**.
  - **Ordenar** el Product Backlog según valor de negocio, riesgos y dependencias.
  - Asegurar la total transparencia del backlog para la organización.
- *Distinción de parcial:* El Product Owner define el *qué* y el *por qué*. No posee atribuciones para definir el *cómo técnico* ni para imponer la cantidad de trabajo que los Developers deben absorber en el Sprint.

#### C. Scrum Master (SM)
Responsable de **establecer Scrum** de acuerdo con la guía oficial y de asegurar la **efectividad operativa del Scrum Team**. Actúa como un **líder servicial (*servant-leader*)**.
- **Servicio al Scrum Team:**
  - Fomentar la autogestión y la multifuncionalidad interna.
  - Enfocar al equipo en generar incrementos que satisfagan la Definition of Done.
  - Gestionar la **remoción activa de impedimentos** organizacionales que frenen al equipo.
  - Velar por la ejecución positiva y timeboxeada de todos los eventos.
- **Servicio al Product Owner:**
  - Proveer técnicas de estructuración empírica del Product Backlog.
  - Facilitar la comunicación y colaboración constructiva con los stakeholders.
- **Servicio a la Organización:**
  - Liderar la transformación ágil y capacitar a la empresa en la adopción del marco.
  - Eliminar barreras de aislamiento entre los interesados (*stakeholders*) y los equipos.
- *Trampa recurrente:* Confundir al Scrum Master con un Project Manager tradicional o un asignador de tareas. El SM carece de autoridad jerárquica de mando sobre los Developers.

---

## 4. Los Cinco Eventos de Scrum y su Timeboxing

Cada evento constituye un bloque de tiempo fijo (**timebox**) ideado formalmente para habilitar los ciclos de inspección y adaptación sin incurrir en burocracia innecesaria:

```text
+-----------------------------------------------------------------------------------------+
|                                        THE SPRINT                                       |
|                                                                                         |
|  +------------------+     +----------------+     +-----------------+     +-----------+  |
|  | SPRINT PLANNING  | --> |  DAILY SCRUM   | --> |  SPRINT REVIEW  | --> |  SPRINT   |  |
|  | (Hasta 8 horas)  |     | (15 min diarios)     | (Hasta 4 horas) |     |  RETRO    |  |
|  +------------------+     +----------------+     +-----------------+     +-----------+  |
|                                                                                         |
+-----------------------------------------------------------------------------------------+
```

### 1. The Sprint
* **Propósito:** Es el evento contenedor de todos los restantes. Dentro de su vigencia se ejecuta todo el trabajo técnico necesario para alcanzar el Product Goal.
* **Duración:** Máximo **1 mes** o menos. Una duración constante aporta ritmo y predictibilidad. Un nuevo Sprint se inicia inmediatamente al concluir el precedente.
* **Reglas durante su desarrollo:**
  - Queda prohibido introducir alteraciones que atenten contra el **Sprint Goal**.
  - La calidad del software **no puede degradarse**; la Definition of Done es innegociable frente a presiones de tiempo.
  - El Product Backlog continúa refinándose de forma paralela.
  - El alcance de las tareas técnicas puede renegociarse con el PO a medida que se profundiza el conocimiento.
* **Cancelación excepcional:** Facultad reservada exclusivamente al **Product Owner**, aplicable si el **Sprint Goal pierde vigencia** por razones drásticas de mercado o estrategia corporativa.

---

### 2. Sprint Planning (Planificación del Sprint)
Actividad inaugural de la iteración. Su timebox máximo es de **8 horas** para un Sprint mensual (proporcionalmente menor para ventanas más breves). Aborda formalmente **tres temas estructurales**:

* **Tema 1: ¿Por qué es valioso este Sprint?**  
  El PO plantea el impacto pretendido en el producto. Todo el Scrum Team consensúa la redacción del **Sprint Goal**.
* **Tema 2: ¿Qué se puede hacer en este Sprint?**  
  Los Developers examinan el Product Backlog refinado, ponderan su velocidad histórica y capacidad de jornada, y **seleccionan los ítems** a incluir. La decisión del volumen admitido recae pura y exclusivamente en los Developers.
* **Tema 3: ¿Cómo se realizará el trabajo seleccionado?**  
  Los Developers diseñan la estrategia técnica y descomponen cada ítem en tareas operativas (generalmente de un día de labor o menos), dando origen al **Sprint Backlog**.

---

### 3. Daily Scrum
* **Propósito:** Inspeccionar la trayectoria hacia el **Sprint Goal** y reajustar el **Sprint Backlog**, delineando el plan operativo de las próximas 24 horas.
* **Timebox:** **15 minutos** diarios, en horario y lugar fijos para estandarizar el hábito.
* **Participantes:** Diseñado exclusivamente **para y por los Developers**. Si el PO o el SM intervienen en tareas técnicas del backlog, asisten en calidad de Developers; de lo contrario, el SM solo se encarga de que se cumpla el evento y no se exceda el tiempo.
* *Criterio de examen:* La Guía 2020 abolió el esquema cerrado de tres preguntas preestablecidas (*qué hice, qué haré, qué trabas tengo*). Se admite cualquier dinámica conversacional mientras mantenga el foco en el Sprint Goal.

---

### 4. Sprint Review (Revisión del Sprint)
* **Propósito:** Inspeccionar el Incremento producido y adaptar el Product Backlog sobre la base del contexto de negocio actualizado.
* **Timebox:** Máximo **4 horas** para Sprints de 1 mes.
* **Dinámica:** El Scrum Team presenta el incremento funcional a los **interesados directos (stakeholders)**. Se debaten aspectos comerciales, modificaciones en el mercado y proyecciones de entregas futuras.
* *Aclaración conceptual:* No es una mera demostración pasiva de software. Es una mesa de trabajo interactiva donde el feedback recogido modifica directamente el orden y contenido del Product Backlog.

---

### 5. Sprint Retrospective (Retrospectiva del Sprint)
* **Propósito:** Planificar medidas concretas para **elevar la calidad técnica y la efectividad operativa** del equipo.
* **Timebox:** Máximo **3 horas** para un Sprint mensual. Concluye formalmente el Sprint.
* **Dinámica:** El Scrum Team examina críticamente su último ciclo respecto a **personas, dinámicas vinculares, procesos, herramientas y el cumplimiento de su Definition of Done**.
* **Resultado:** Formulación de mejoras accionables. Las acciones prioritarias de optimización se incorporan como ítems formales dentro del **Sprint Backlog del ciclo siguiente**.

---

## 5. Los Tres Artefactos y sus Compromisos Obligatorios

Los artefactos cristalizan valor o trabajo ejecutado, buscando garantizar la máxima **transparencia**.

> [!IMPORTANT]
> Cada artefacto aloja un **compromiso obligatorio** que opera como métrica objetiva de avance y coherencia empírica.

| Artefacto | Compromiso Asociado | Definición Sintética |
| :--- | :--- | :--- |
| **Product Backlog** | **Objetivo del Producto (*Product Goal*)** | Meta estratégica a largo plazo del sistema. |
| **Sprint Backlog** | **Objetivo del Sprint (*Sprint Goal*)** | Meta táctica inmutable durante la iteración. |
| **Incremento** | **Definición de Terminado (*Definition of Done*)** | Umbral formal de calidad técnica exigible. |

---

### 1. Product Backlog
* **Naturaleza:** Inventario dinámico, vivo y ordenado de todos los requerimientos, mejoras y correcciones conocidos para el producto. Constituye la **única fuente de asignación de trabajo** para el Scrum Team.
* **Refinamiento continuo (*Backlog Refinement*):** Labor constante donde el PO y los Developers desglosan, reestiman y detallan los ítems. Aquellas historias suficientemente analizadas para resolverse en un Sprint adquieren la condición de "Listas" (*Ready*).
* **Compromiso: Product Goal**  
  Describe el estado final que el producto persigue en el mediano/largo plazo. El Scrum Team debe consumar o descartar explícitamente un Product Goal antes de abrazar el subsiguiente.

---

### 2. Sprint Backlog
* **Naturaleza:** Plan de ejecución exclusivo **de los Developers y para los Developers**. Contiene:
  1. El **Sprint Goal** (fundamento de valor / el porqué).
  2. Los **ítems del Product Backlog seleccionados** (alcance funcional / el qué).
  3. El **desglose técnico de tareas** necesarias para materializarlos (ingeniería / el cómo).
* **Comportamiento:** Documento altamente flexible. Se actualiza a lo largo del Sprint: se agregan tareas no previstas descubiertas en el camino o se descartan tareas que resulten superfluas.
* **Compromiso: Sprint Goal**  
  Propósito unificador inalterable durante el Sprint. Dota de coherencia técnica al esfuerzo colectivo y resguarda al equipo de desvíos no planificados.

---

### 3. Incremento (*The Increment*)
* **Naturaleza:** Escalón funcional y acumulativo hacia el Product Goal. Cada nuevo incremento se integra de forma cohesiva sobre los incrementos precedentes, verificando la compatibilidad global del sistema.
* **Condición de operatividad:** Para ser computado como incremento, el software **debe ser utilizable** (*usable*), independientemente de que el Product Owner resuelva publicarlo de inmediato o no. Pueden concebirse múltiples incrementos utilizables dentro de una misma iteración.
* **Compromiso: Definition of Done (DoD)**  
  - Descripción formal y objetiva de las condiciones de calidad técnica (pruebas unitarias, revisiones, documentación, integración) que el producto debe verificar para considerarse finalizado.
  - Si un ítem no cumple íntegramente la DoD, **no califica como Incremento, no se expone en la Sprint Review y computa 0 puntos de velocidad**. Retorna al Product Backlog.

---

## 6. Cuadro Comparativo Integral de Examen

| Elemento | Responsable Directo | Participantes | Timebox Máximo | Criterio Clave de Parcial |
| :--- | :--- | :--- | :--- | :--- |
| **Product Backlog** | Product Owner | PO + Developers | Continuo | El PO tiene autoridad exclusiva sobre el orden de priorización. |
| **Sprint Backlog** | Developers | Developers | Duración del Sprint | Únicamente los Developers pueden modificar su composición interna. |
| **Sprint Planning** | Scrum Team | Todo el Scrum Team | 8 horas (1 mes) | Los Developers fijan la capacidad admisible de trabajo; no el PO. |
| **Daily Scrum** | Developers | Developers | 15 minutos diarios | Espacio de sincronización técnica, no rendición jerárquica de cuentas. |
| **Sprint Review** | Scrum Team | Scrum Team + Stakeholders | 4 horas (1 mes) | Mesa de trabajo de co-diseño con el negocio; no es una simple demo. |
| **Sprint Retrospective** | Scrum Team | Todo el Scrum Team | 3 horas (1 mes) | Análisis de personas, procesos y DoD; genera mejoras para el siguiente backlog. |
| **Definition of Done** | Organización o Scrum Team | Scrum Team | Invariable en el Sprint | Historias sin DoD validada computan 0 puntos para la velocidad. |

---

## 7. Preguntas Típicas de Examen y Respuestas Modelo

1. **¿Por qué Scrum eliminó los cargos tradicionales de Project Manager o Líder de Proyecto?**  
   *Respuesta:* Porque la fragmentación jerárquica diluye la responsabilidad compartida. Scrum divide las atribuciones de gobierno en tres ejes balanceados: el PO responde por el valor comercial del producto, los Developers responden por la arquitectura, calidad e implementación técnica del incremento, y el SM responde por la eficacia del marco de trabajo y la remoción de trabas organizacionales.
2. **Si durante el Sprint el equipo nota que no llegará a completar todas las historias seleccionadas, ¿qué debe hacerse según Scrum?**  
   *Respuesta:* No se cancela el Sprint ni se relaja la Definition of Done. Los Developers negocian oportunamente con el Product Owner el recorte de alcance de las tareas o la devolución de ítems al Product Backlog, resguardando en todo momento el cumplimiento del **Sprint Goal**.
3. **¿Cuál es la relación entre la Definition of Done (DoD) y el cálculo de la Velocidad del equipo?**  
   *Respuesta:* La Velocidad computa exclusivamente la suma de los Story Points de aquellas historias que verifican al 100% la Definition of Done al cierre del Sprint. Las historias con tareas pendientes o sin validación formal aportan **cero puntos** a la velocidad del ciclo.
4. **¿Puede modificarse el Sprint Goal una vez iniciado el Sprint?**  
   *Respuesta:* **No.** El Sprint Goal es el compromiso rector inmutable de la iteración. Si por cambios radicales de contexto el objetivo quedara enteramente obsoleto, la única salida contemplada por Scrum es la **cancelación formal del Sprint por decisión exclusiva del Product Owner**.
