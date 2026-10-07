# 11/09 - Scrum 2026: Framework, Planificación de Release y Sprint, y Métricas

- **Materia:** Ingeniería y Calidad de Software (ICSW) – Curso 4K2 (2026)
- **Cátedra:** Judith Meles – Laura Covaro
- **Autor:** López Daniel Nicolás (Legajo 97969 – Grupo 1)
- **Material base:** Presentación `08 SCRUM 2026, Planificación de release y sprint, Métricas Scrum.pdf` y `Guía Oficial de Scrum (2020 / SGEP 2026)`.
- **Regla SCM de nombrado:** `<MM-DD>_<NombreApellido>_<Tema>.md` $\to$ `09-11_LopezNicolas_ScrumPlanificacionReleaseYSprint.md`

---

## 1. Cultura Ágil y la Base Empírica de Scrum

### Pre-lectura y fundamentos teóricos
* **Definición formal:** Scrum es un marco de trabajo (*framework*) liviano diseñado para generar valor mediante soluciones adaptativas ante problemas complejos.
* **Control de procesos empírico:** Frente a los modelos predictivos de la industria tradicional, Scrum fundamenta el control del trabajo en tres pilares:
  1. **Transparencia:** Procesos, artefactos y criterios deben ser visibles y entendidos con un significado común por todos los involucrados.
  2. **Inspección:** Evaluación frecuente y oportuna de los artefactos y el avance hacia los objetivos, sin entorpecer el trabajo operativo.
  3. **Adaptación:** Ajuste inmediato del proceso o de los elementos en desarrollo ante cualquier desvío detectado fuera de tolerancias.
* **Valores rectores:** Compromiso, Foco, Franqueza/Apertura, Respeto y Coraje.

> [!NOTE]
> **Apuntes en vivo de la clase: Empirismo y Manifiesto Ágil**  
> *Espacio para registrar énfasis de la cátedra sobre los 12 principios o discusiones teóricas:*
> 
> 

---

## 2. El Scrum Team y la Evolución a SGEP 2026

### Pre-lectura y fundamentos teóricos
* **Estructura organizativa:** Unidad cohesionada de profesionales orientada a un único objetivo a la vez (**Product Goal**). Desaparece la noción de jerarquías o subequipos internos.
* **Responsabilidades formales (Scrum 2020):**
  - **Product Owner (PO):** Máximo responsable de maximizar el valor del producto y de la gestión efectiva del Product Backlog (ordenamiento, visibilidad y claridad). Representa al negocio y a los usuarios.
  - **Scrum Master (SM):** Responsable de la efectividad del equipo; líder servicial (*servant-leader*) que fomenta el marco ágil, entrena al equipo y remueve impedimentos organizacionales.
  - **Developers:** Personas comprometidas a construir cualquier aspecto de un Incremento utilizable en cada Sprint. Poseen dos atributos obligatorios: son **autogestionados** (definen internamente cómo y quién realiza las tareas) y **multifuncionales** (cuentan con todas las competencias requeridas).
* **Particularidad de cátedra (Slide 36 - SGEP 2026):**
  - *Ecosistema ampliado:* Supporters, Stakeholders.
  - *Composición del equipo de desarrollo:* Scrum Master (Humano), Product Owner (Humano), **Product Developers (Humanos + IA integrada al flujo de trabajo)**.

> [!NOTE]
> **Apuntes en vivo de la clase: Roles, Responsabilidades y Developers H+IA**  
> *Anotar comentarios de las docentes sobre el rol de la inteligencia artificial dentro del Scrum Team:*
> 
> 

---

## 3. Los 5 Eventos y sus Timeboxes

### Pre-lectura y fundamentos teóricos
Cada evento es un bloque de tiempo formal predeterminado (*timeboxed*) concebido para habilitar la inspección y adaptación continua:

| Evento | Timebox máximo (Sprint de 1 mes) | Propósito central | Participantes |
| :--- | :---: | :--- | :--- |
| **The Sprint** | $\le 1$ mes | Contenedor de todos los demás eventos. Genera un incremento con valor de negocio. | Scrum Team completo |
| **Sprint Planning** | Máximo 8 horas | Define: 1. Por qué el Sprint tiene valor (Sprint Goal), 2. Qué se hará, 3. Cómo se hará. | Scrum Team completo |
| **Daily Scrum** | **15 minutos** diarios | Inspeccionar el avance diario hacia el Sprint Goal y adaptar el plan de las próximas 24 horas. | Developers |
| **Sprint Review** | Máximo 4 horas | Inspeccionar el incremento terminado en conjunto con los stakeholders y adaptar el Product Backlog. | Scrum Team + Stakeholders |
| **Sprint Retrospective** | Máximo 3 horas | Inspeccionar relaciones, procesos, personas y herramientas para planificar mejoras operativas. | Scrum Team completo |
| *Refinamiento del PB* | ~10% del tiempo de Sprint | Actividad continua para descomponer, estimar y dar formato a los ítems del Product Backlog. | PO + Developers |

> [!NOTE]
> **Apuntes en vivo de la clase: Eventos y Dinámicas**  
> *Espacio para registrar aclaraciones sobre la Daily, la Retrospectiva o el Refinamiento continuo:*
> 
> 

---

## 4. Los 3 Artefactos y sus 3 Compromisos Obligatorios

### Pre-lectura y fundamentos teóricos
Cada artefacto materializa un compromiso explícito destinado a asegurar la transparencia y la medición objetiva del progreso:

1. **Product Backlog $\to$ Compromiso: Objetivo del Producto (*Product Goal*)**
   - Define el estado futuro del producto a largo plazo. El equipo debe alcanzar o abandonar formalmente un Product Goal antes de comprometer el siguiente.
2. **Sprint Backlog $\to$ Compromiso: Objetivo del Sprint (*Sprint Goal*)**
   - Propósito único del Sprint en curso. Es inmutable durante la iteración, pero brinda flexibilidad técnica a los Developers respecto a cómo alcanzarlo.
3. **Incremento $\to$ Compromiso: Definición de Terminado (*Definition of Done - DoD*)**
   - Descripción formal de las condiciones de calidad que debe cumplir el software para considerarse potencialmente desplegable.

> [!NOTE]
> **Apuntes en vivo de la clase: Artefactos y Definition of Done**  
> *Anotar ejemplos o criterios de DoD abordados en la explicación (pruebas, cobertura, revisiones):*
> 
> 

---

## 5. La Planificación Ágil Multinivel (La "Cebolla")

### Pre-lectura y fundamentos teóricos
La planificación no se restringe a un evento aislado, sino que abarca múltiples horizontes temporales articulados (Slide 53):
1. **Estrategia**
2. **Portfolio**
3. **Producto** (Visión estratégica y Product Goal)
4. **Release** (Horizonte de meses o múltiples iteraciones; granularidad mayor)
5. **Iteración / Sprint** (Semanas o días; historias listas bajo criterio Ready / INVEST)
6. **Día** (Daily Scrum; granularidad en horas / descomposición técnica de tareas)

### Escala de granularidad (Slide 60):
- **Mayor que un Release:** Meses / Épicas maestras de alto nivel.
- **Mayor que un Sprint:** Semanas / Épicas a desglosar.
- **Listo para un Sprint:** Días / User Stories independientes y estimables.
- **Tareas de desarrollo:** Horas / Actividades técnicas concretas en el Sprint Backlog.

> [!NOTE]
> **Apuntes en vivo de la clase: Granularidad y Planificación Multinivel**  
> *Espacio para registrar esquemas o aclaraciones sobre cómo transicionar de nivel:*
> 
> 

---

## 6. Planificación de Release vs. Planificación de Sprint

### Pre-lectura y fundamentos teóricos
* **Planificación de Release:**
  - Determina cuándo y qué paquete de incrementos se liberará a los usuarios finales.
  - **Estrategias de cadencia (Slide 63):**
    - *Release posterior a múltiples Sprints* (enfoque por entregas consolidadas o hitos comerciales).
    - *Release al cierre de cada Sprint* (entrega ágil continua).
    - *Release continuo por funcionalidad / feature* (paradigma DevOps / Integración y Despliegue Continuo).
* **Planificación de Sprint (Sprint Planning):**
  - Actividad inicial de cada iteración.
  - Transforma los ítems seleccionados del Product Backlog en el **Sprint Backlog** (compuesto por el *Sprint Goal*, las *User Stories elegidas* y el *plan técnico de tareas*).

> [!NOTE]
> **Apuntes en vivo de la clase: Planificación de Release**  
> *Anotar articulación entre el MVP de los trabajos prácticos y el primer Release comercial:*
> 
> 

---

## 7. Métricas de Scrum y Velocidad del Equipo (*Velocity*)

### Pre-lectura y fundamentos teóricos
* **Velocidad (Velocity):**
  - Métrica empírica de capacidad y progreso del equipo.
  - Se obtiene calculando la suma de los **Story Points correspondientes a las User Stories finalizadas al 100%** (aquellas que cumplen estrictamente con la Definition of Done).
  - **Criterio riguroso de cátedra:** Las historias a medio terminar o pendientes de validación final computan **0 Story Points** para la velocidad de la iteración; no existe el progreso parcial.
  - *La velocidad estabilizada corrige empíricamente los sesgos de estimación inicial a lo largo de las iteraciones.*
* **Herramientas de seguimiento gráfico:**
  - **Sprint Burndown Chart:** Proyecta el trabajo pendiente restante contra el tiempo diario del Sprint (permite detectar estancamientos tempranos).
  - **Release Burnup / Burndown Chart:** Visualiza la acumulación de valor entregado y el impacto de las modificaciones en el alcance total a lo largo de sucesivas iteraciones.

> [!NOTE]
> **Apuntes en vivo de la clase: Interpretación de Métricas**  
> *Anotar análisis de curvas típicas de Burndown presentadas por las docentes:*
> 
> 

---

## 8. Criterios Críticos y Trampas de Examen

1. **Jerarquía dentro del equipo:**  
   *Criterio:* El Scrum Master no es director de proyecto ni asigna tareas. Los Developers son autogestionados y asignan su propio trabajo.
2. **Capacidad de absorción del Sprint:**  
   *Criterio:* El Product Owner prioriza el valor, pero **únicamente los Developers determinan cuántos ítems pueden comprometer** según su velocidad histórica.
3. **Inmutabilidad del Sprint Goal:**  
   *Criterio:* El objetivo del Sprint no se modifica durante la iteración. Lo que se ajusta y negocia con el PO es el alcance de las tareas específicas para cumplirlo.
4. **Cálculo de velocidad:**  
   *Criterio:* Una historia completada al 90% suma 0 puntos. La agilidad exige software funcionando conforme a la Definition of Done.

---

## 9. Registro de Consultas Formuladas en Clase

* **Consulta 1:**  
  *Respuesta de la cátedra:*  

* **Consulta 2:**  
  *Respuesta de la cátedra:*  
