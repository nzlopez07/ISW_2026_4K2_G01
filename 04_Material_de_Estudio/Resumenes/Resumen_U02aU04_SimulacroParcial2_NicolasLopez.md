# 🎯 SIMULACRO MAESTRO DE EXAMEN P2: SUITE DE MULTIPLE CHOICE REALES Y PREGUNTAS A DESARROLLAR
**Cátedra:** Ingeniería y Calidad de Software (ICSW - 4K2, UTN FRC)  
**Origen:** Parciales Reales Auditados 2024 y 2025 (Tema A, Tema B y Recuperatorio con Correcciones de Profesores)  
**Instrucciones de Auto-Evaluación:** Lee la consigna, elegí mentalmente tus opciones (o anótalas en un papel) y luego desplegá la pestaña para ver la corrección forense de la cátedra con la birome roja.

---

# PARTE 1: SUITE DE 17 MULTIPLE CHOICE REALES (8 PTS C/U EN EL EXAMEN)

> [!IMPORTANT]
> **Modalidad Oficial de la Cátedra:** Son preguntas de **múltiple opción con múltiples respuestas correctas**. Si marcas una opción trampa o te falta una correcta, la cátedra descuenta puntos o clava **0 puntos**. ¡Atención a los cazabobos!

---

### 📌 Pregunta 01 (Tema A 2025 — Pregunta 1)
**Enunciado:** Durante la integración diaria, el *Nexus Integration Team* (NIT) detecta que dos equipos Scrum tienen dependencias críticas no resueltas. ¿Cuál es la mejor acción inmediata?

- **A)** Reprogramar el Sprint Review para dar tiempo a resolver dependencias.
- **B)** Facilitar una conversación entre los equipos para ajustar sus planes.
- **C)** Escalar el problema al Product Owner para priorizarlo en el Product Backlog.
- **D)** Crear un nuevo equipo temporal para resolver la dependencia.
- **E)** Ninguna, dejar que los equipos se arreglen solos.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`B`** y **`C`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:** El NIT no es un equipo ejecutor ni un jefe jerárquico; su rol es de facilitación y coaching. Inmediatamente debe facilitar la comunicación entre los equipos afectados (`B`) y, si la dependencia impacta el orden de entrega de valor o requiere refinamiento, involucrar al Product Owner único para repriorizar en el PB (`C`).
* **Trampas de la Cátedra:**
  - `A` es falsa: Los eventos de Scrum son *time-boxed* y no se reprograman por bloqueos técnicos.
  - `D` es falsa: Nexus prohíbe crear capas burocráticas o equipos parches.
</details>

---

### 📌 Pregunta 02 (Tema A 2025 — Pregunta 2)
**Enunciado:** Respecto al uso de métricas tradicionales en Ingeniería de Software, ¿cuáles de las siguientes afirmaciones son verdaderas?

- **A)** La métrica de densidad de defectos se calcula como el número de defectos encontrados dividido por el tamaño del producto.
- **B)** Las métricas de productividad como LOC/persona-mes (LOC = Líneas de Código sin comentarios) son confiables para comparar equipos de desarrollo con diferentes niveles de experiencia.
- **C)** Las métricas tradicionales permiten evaluar directamente la satisfacción del usuario con el producto final.
- **D)** La métrica de tasa de fallos (*failure rate*) es útil para evaluar la confiabilidad del software durante la etapa de operación (software en uso).

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`A`** y **`D`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:**
  - `A`: $\text{Densidad de Defectos} = \text{Defectos} / \text{Tamaño}$ (ej. KLOC o Puntos de Función). Métrica tradicional estándar.
  - `D`: La tasa de fallos en producción mide fallas observadas por unidad de tiempo, clave para la confiabilidad.
* **Trampas de la Cátedra:**
  - `B` es **FALSA Y CAZABOBOS TÍPICO**: Las líneas de código jamás son confiables para comparar equipos (fomenta programar código verboso o inflado).
  - `C` es **FALSA**: Las métricas tradicionales son internas (tamaño, esfuerzo, defectos), no evalúan la percepción subjetiva del usuario.
</details>

---

### 📌 Pregunta 03 (Tema A 2025 — Pregunta 3)
**Enunciado:** ¿Cuáles de las siguientes métricas permiten evaluar la **capacidad del equipo** para asumir compromisos en un Sprint?

- **A)** Horas disponibles por integrante del equipo.
- **B)** Velocidad promedio histórica del equipo.
- **C)** Porcentaje de cobertura de código.
- **D)** Tasa de defectos por sprint.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`A`** y **`B`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:** Para el *Sprint Planning*, el equipo estima cuántos Story Points puede comprometer cruzando su velocidad histórica (`B`) con la disponibilidad real de horas de sus miembros en esas 2 semanas (`A` - contemplando vacaciones, feriados, etc.).
* **Trampas de la Cátedra:**
  - `C` (Cobertura) es una métrica de calidad técnica de pruebas, no de capacidad de trabajo.
  - `D` (Tasa de defectos) mide calidad o deuda técnica, no capacidad de entrega de historias.
</details>

---

### 📌 Pregunta 04 (Tema A 2025 — Pregunta 4)
**Enunciado:** Estás liderando el equipo de Testing en una empresa de desarrollo de software. La versión del producto ha pasado todas las pruebas automatizadas y manuales. ¿Qué criterios adicionales deberías considerar antes de finalizar las pruebas (*Exit Criteria*)?

- **A)** El equipo de desarrollo ha solicitado liberar la versión lo antes posible.
- **B)** Se ha alcanzado el nivel de cobertura de pruebas definido en el plan de calidad.
- **C)** No se han reportado nuevos defectos críticos en los últimos dos ciclos de prueba.
- **D)** Todos los casos de prueba han sido ejecutados al menos una vez.
- **E)** El cliente ha aprobado la versión en ambiente de pre producción.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`B`**, **`C`** y **`D`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:** Son los criterios de parada estándar de ISTQB / Cátedra: cobertura alcanzada según plan (`B`), estabilidad de defectos críticos en ciclos de regresión (`C`) y ejecución del 100% de la suite planificada (`D`).
* **Trampas de la Cátedra:**
  - `A` es **FALSA**: La presión de desarrollo o gerencia nunca es un criterio técnico de salida de testing.
  - `E` es **TRAMPA**: La aprobación del cliente es criterio de Aceptación (UAT / Liberación), no de finalización de las pruebas del equipo de testing.
</details>

---

### 📌 Pregunta 05 (Tema A 2025 — Pregunta 5)
**Enunciado:** ¿Cuáles de las siguientes afirmaciones son **compartidas tanto por Lean como por el Manifiesto Ágil**?

- **A)** Entregar valor al cliente lo antes posible.
- **B)** Minimizar el trabajo en curso (WIP).
- **C)** Documentación exhaustiva sobre el código.
- **D)** Mejora continua del proceso.
- **E)** Responder al cambio más que seguir un plan.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`A`**, **`D`** y **`E`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:**
  - Ambos enfoques buscan entrega temprana de valor (`A`), adaptación frente al cambio (`E`) y mejora continua / Kaizen (`D`).
* **Trampa Mortal del Examen:**
  - `B` (**Minimizar WIP**) es **EXCLUSIVO DE KANBAN / LEAN**. No figura en los 4 valores ni 12 principios del Manifiesto Ágil de 2001. El alumno que marcó `B` se sacó 0 puntos.
  - `C` es contraria al Manifiesto Ágil (*Software funcionando sobre documentación exhaustiva*).
</details>

---

### 📌 Pregunta 06 (Tema A 2025 — Pregunta 6)
**Enunciado:** ¿Qué beneficios aporta la Integración Continua (CI) en proyectos de desarrollo de software?

- **A)** Detectar errores de integración más temprano.
- **B)** Aumentar la complejidad del código.
- **C)** Facilitar la colaboración entre equipos.
- **D)** Reducir el tiempo entre entregas.
- **E)** Evitar la automatización de pruebas.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`A`**, **`C`** y **`D`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:** Integrar varias veces al día con builds y pruebas automáticas permite detectar colisiones al instante (`A`), mantener el código unificado entre desarrolladores (`C`) y reducir el ciclo de release (`D`).
* **Trampas de la Cátedra:**
  - `B` es un perjuicio, no un beneficio.
  - `E` es falsa: CI exige e intensifica la automatización de pruebas.
</details>

---

### 📌 Pregunta 07 (Tema A 2025 — Pregunta 7)
**Enunciado:** Vas a participar como revisor en una **revisión formal de código (Inspección de Fagan)**. ¿Qué acciones deberías realizar **antes de la reunión** para asegurar una participación efectiva?

- **A)** Leer el código o artefacto a revisar con anticipación.
- **B)** Preparar una lista de observaciones y dudas para discutir.
- **C)** Esperar a la reunión para revisar el código junto con el equipo.
- **D)** Verificar que el documento o código esté en su versión final.
- **E)** Consultar con el autor para entender el contexto antes de la revisión.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`A`** y **`B`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:** En la etapa de **Preparación Individual** de Fagan, cada inspector debe revisar el artefacto de forma solitaria y crítica (`A`) y anotar sus hallazgos en la lista de defectos (`B`).
* **Trampas Letales de la Cátedra:**
  - `C` es un *Walkthrough* informal, en Fagan si no leíste antes no podés entrar.
  - `D` es **responsabilidad exclusiva del MODERADOR** en el Criterio de Entrada (*Entry Criteria*).
  - `E` **arruina la inspección**: hablar con el autor sesga al revisor; el artefacto debe explicarse por sí mismo.
</details>

---

### 📌 Pregunta 08 (Tema A 2025 — Pregunta 8)
**Enunciado:** ¿Cuál de las siguientes métricas refleja mejor si una **historia de usuario está lista para ser finalizada** en un entorno de testing ágil?

- **A)** Porcentaje de cobertura de código.
- **B)** Porcentaje de criterios de aceptación cumplidos.
- **C)** Tasa de defectos por historia.
- **D)** Tiempo promedio de ejecución de pruebas.
- **E)** Número de tareas reabiertas.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opción Correcta:** **`B`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:** Una User Story solo se considera terminada (*Done*) cuando cumple el **100% de sus Criterios de Aceptación**.
* **Trampa de la Cátedra:**
  - La opción `A` (Cobertura) tienta mucho, pero tener 95% de cobertura en tests unitarios no garantiza que la funcionalidad cumpla las expectativas de negocio del usuario. El alumno que marcó `A, B` recibió 0 puntos y la profesora le tachó `A` en rojo.
</details>

---

### 📌 Pregunta 09 (Tema B 2025 — Pregunta 1)
**Enunciado:** ¿Cuáles de las siguientes métricas permiten evaluar el **estado de avance de un proyecto** de software en relación con su **planificación original**?

- **A)** Índice de desempeño del cronograma (SPI - *Schedule Performance Index*).
- **B)** Complejidad ciclomática.
- **C)** Variación del esfuerzo estimado (*Effort Variance*).
- **D)** Porcentaje de cobertura de código.
- **E)** Tasa de defectos por sprint.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`A`** y **`C`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:** Pertenecen al **Dominio de Proyecto**:
  - $SPI = EV / PV$ compara avance real contra cronograma planificado.
  - $\text{Effort Variance} = \text{Esfuerzo Real} - \text{Esfuerzo Estimado}$ evalúa desvío contra la línea base.
* **Trampas de la Cátedra:**
  - `B` es Dominio de Producto (Caja Blanca).
  - `D` es Dominio de Proceso/Calidad.
  - `E` es Dominio de Proceso/Testing.
</details>

---

### 📌 Pregunta 10 (Tema B 2025 — Pregunta 2)
**Enunciado:** Tu equipo ha identificado un **defecto menor** en la versión final, pero el cliente necesita el producto en producción urgentemente. ¿Qué acciones justifican finalizar las pruebas y proceder con la liberación?

- **A)** El defecto fue reportado por un tester junior y no se ha validado aún.
- **B)** El equipo de Testing no tuvo tiempo de ejecutar todas las pruebas de regresión.
- **C)** El defecto está documentado y se ha planificado su corrección en el siguiente sprint.
- **D)** El defecto no afecta funcionalidades críticas ni la experiencia del usuario.
- **E)** Se ha realizado una evaluación de impacto y se considera aceptable el riesgo.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`C`**, **`D`** y **`E`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:** Liberar con defectos conocidos requiere **gestión de riesgos formal**: evaluar severidad (`D`), medir impacto/riesgo (`E`) y asegurar trazabilidad acordando postergación con el PO para el próximo ciclo (`C`).
* **Trampas de la Cátedra:**
  - `A` es negligencia (descartar un bug por la jerarquía del tester).
  - `B` viola las buenas prácticas (liberar sin regresión completa es ir a ciegas).
</details>

---

### 📌 Pregunta 11 (Tema B 2025 — Pregunta 3)
**Enunciado:** ¿Cuáles de las siguientes características son **propias del testing ágil**?

- **A)** Se realiza de forma continua durante el desarrollo.
- **B)** Requiere colaboración estrecha entre testers y desarrolladores.
- **C)** Depende exclusivamente de documentación formal.
- **D)** Prioriza la automatización de pruebas.
- **E)** Se inicia después de la fase de codificación.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`A`**, **`B`** y **`D`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:** En Testing Ágil las pruebas son continuas (`A`), el equipo es multifuncional colaborativo (`B`) y la automatización es indispensable para mantener el ritmo de entrega y la regresión (`D`).
* **Trampas de la Cátedra:**
  - `C` y `E` son características del modelo en cascada tradicional.
</details>

---

### 📌 Pregunta 12 (Tema B 2025 — Pregunta 4)
**Enunciado:** ¿Qué principios son **característicos del enfoque Lean pero NO están explícitamente en el Manifiesto Ágil**?

- **A)** Eliminar desperdicios.
- **B)** Optimizar el todo.
- **C)** Satisfacción del cliente mediante entregas tempranas y continuas.
- **D)** Atención continua a la calidad del producto o servicio.
- **E)** Comunicación cara a cara como la forma más eficiente.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`A`** y **`B`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:**
  - *Eliminate Waste* y *Optimize the Whole* son dos de los 7 principios de Poppendieck (Lean Software Development).
* **Trampa Letal:**
  - `C`, `D` y `E` son principios **textuales de los 12 principios del Manifiesto Ágil (2001)**. El alumno que marcó `A, B, D` sacó **0 puntos**.
</details>

---

### 📌 Pregunta 13 (Tema B 2025 — Pregunta 5)
**Enunciado:** ¿Cuáles de las siguientes prácticas están asociadas con la **Entrega Continua (Continuous Delivery - CD)**?

- **A)** Automatización del despliegue en producción.
- **B)** Revisión manual de cada cambio antes de integrar.
- **C)** Pruebas automatizadas en cada commit.
- **D)** Validación continua de calidad.
- **E)** Liberación de versiones solo al final del proyecto.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`A`**, **`C`** y **`D`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:** CD requiere pipeline automatizado con tests en cada commit (`C`), validación de calidad continua (`D`) y capacidad de despliegue automatizado (`A`).
* **Trampas de la Cátedra:**
  - `B` es un cuello de botella que frena la integración.
  - `E` es el enfoque tradicional en cascada.
</details>

---

### 📌 Pregunta 14 (Tema B 2025 — Pregunta 6)
**Enunciado:** Estás organizando una **revisión formal de diseño**. ¿Qué roles deben estar claramente definidos para que la revisión sea efectiva?

- **A)** Cliente final, para aprobar los cambios antes de la implementación.
- **B)** Moderador, para facilitar la reunión y mantener el enfoque.
- **C)** Autor, responsable del artefacto a revisar.
- **D)** Revisor(es), encargados de identificar defectos y mejoras.
- **E)** Escritor (o Secretario), para registrar los hallazgos y acuerdos.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`B`**, **`C`**, **`D`** y **`E`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:** Son los 4 roles técnicos fundamentales de la Inspección Formal de Fagan / IEEE 1028: Moderador (`B`), Autor (`C`), Inspectores/Revisores (`D`) y Registrador/Escritor (`E`).
* **Trampa de la Cátedra:**
  - `A` es **FALSA**: El cliente final no participa de una inspección técnica formal interna de diseño o código.
</details>

---

### 📌 Pregunta 15 (Tema B 2025 — Pregunta 7)
**Enunciado:** En un Nexus con 6 equipos Scrum, el incremento integrado **no pasa las pruebas de integración al final del Sprint**. ¿Qué prácticas están **más alineadas con Nexus**?

- **A)** Implementar integración continua y pruebas automatizadas.
- **B)** Realizar una Nexus Sprint Retrospective enfocada en integración y dependencias.
- **C)** Ajustar la *Definition of Done* para permitir entregas parciales sin integrar.
- **D)** Reducir el número de equipos para simplificar la integración.
- **E)** Todas las anteriores son correctas.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`A`** y **`B`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:** La responsabilidad del *Nexus Integration Team* (NIT) es asegurar que los equipos integren continuamente (`A`) y utilizar la *Nexus Sprint Retrospective* para analizar de raíz las dependencias no resueltas (`B`).
* **Trampas Destructivas:**
  - `C` es **PECADOR MORTAL**: La *Definition of Done* JAMÁS se debilita ni se relaja para ocultar problemas de calidad.
  - `D` es evasión del problema.
</details>

---

### 📌 Pregunta 16 (Tema B 2025 — Pregunta 8)
**Enunciado:** ¿Cuál de las siguientes es una técnica de diseño de casos de prueba basada en el **análisis de entradas válidas e inválidas**?

- **A)** Pruebas de regresión.
- **B)** Análisis de valor límite (y Partición de Equivalencia).
- **C)** Pruebas exploratorias.
- **D)** Pruebas de humo.
- **E)** Pruebas de integración.

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opción Correcta:** **`B`** *(Calificación real en parcial: 4/4 pts)*
* **Justificación de la Cátedra:** Las técnicas de Caja Negra de *Partición en Clases de Equivalencia* y *Análisis de Valores Límite* dividen los dominios de entrada y salida en particiones válidas e inválidas.
* **Trampas:** Las demás son niveles, tipos o enfoques de ejecución de pruebas, no técnicas formales de diseño de casos.
</details>

---

### 📌 Pregunta 17 (Recuperatorio 2025 — Tema A)
**Enunciado:** Un desarrollador debe revisar múltiples sistemas y correos para encontrar información sobre una tarea asignada, ya que los criterios y detalles no están documentados en el tablero Kanban ni accesibles para el equipo. ¿Qué **desperdicios de Lean Software Development** se observan claramente en este escenario?

- **A)** Movimiento (*Motion* / Búsqueda de información).
- **B)** Espera (*Waiting* / Tiempos muertos).
- **C)** Sobreprocesamiento (*Extra Processing*).
- **D)** Defectos (*Defects*).
- **E)** Sobreproducción (*Extra Features*).

<details>
<summary><b>🔍 Ver Respuesta Correcta, Calificación y Trampa</b></summary>

* **Opciones Correctas:** **`A`**, **`B`** y **`C`**
* **Justificación de la Cátedra:**
  - `A`: El programador pierde tiempo saltando entre aplicaciones y navegando correos buscando requerimientos.
  - `B`: La tarea está bloqueada/demorada mientras el desarrollador no consigue la información.
  - `C`: Se realizan tareas innecesarias y redundantes para formatear o consultar datos que deberían estar visibles en la tarjeta.
</details>

---

# PARTE 2: LAS 7 PREGUNTAS TEÓRICAS ABIERTAS A DESARROLLAR (MODELO 10/10)

Si este sábado incluyen preguntas teóricas abiertas como en el Parcial 2024 (*Draft NBA*) o Checklists de Exámenes anteriores, estas son las respuestas con puntuación perfecta redactadas al estilo exacto que exige la cátedra:

---

### 📝 Pregunta Abierta 1 (Daily Scrum en Conflicto y Culpas)
**Consigna:** *"Juan como Scrum Master es invitado a una Daily a las 9 am. Durante la reunión el equipo completo comienza una discusión profunda sobre un problema técnico y finalmente comienzan a culparse entre ellos. ¿Qué debería hacer Juan?"*

> **Respuesta 10/10 de Cátedra:**
> Como Scrum Master (líder servicial y facilitador del marco Scrum), Juan debe **intervenir en el acto**:
> 1. **Frenar el debate técnico extenso:** Recordar que la Daily Scrum tiene un **time-box estricto de 15 minutos** y su único objetivo es sincronizar el trabajo de las próximas 24 horas hacia el Objetivo del Sprint, **no resolver problemas técnicos complejos en vivo**. Debe coordinar una reunión pos-Daily únicamente con los miembros involucrados.
> 2. **Erradicar la cultura de culpa:** Cortar de inmediato los señalamientos personales recordando los valores de Scrum (**Respeto, Coraje y Apertura**) y el principio de **responsabilidad colectiva** del equipo autoorganizado (el éxito o fallo es de todo el equipo, no individual).
> 3. **Llevar la causa raíz a la Retrospectiva:** Agendar la fricción interpersonal y la falta de acuerdos técnicos para ser tratada como punto central de mejora en la próxima **Sprint Retrospective**.

---

### 📝 Pregunta Abierta 2 (Sprint Review sin Build Oficial)
**Consigna:** *"Al final del Sprint, en la Sprint Review, el equipo explica que tuvo un problema con un build y que la versión oficial no está disponible. En lugar de eso, preparó una demo en el ambiente de desarrollo local. ¿Qué debería hacer el Product Owner?"*

> **Respuesta 10/10 de Cátedra:**
> El Product Owner **NO debe aceptar esas historias de usuario como 'Terminadas' (Done)**:
> 1. **Inviolabilidad de la Definition of Done (DoD):** En la Sprint Review solo se inspecciona un **Incremento potencialmente desplegable que cumpla el 100% de la DoD**. Una demo en una máquina local viola la DoD (no está integrado, no pasó las pruebas automatizadas del pipeline ni está en el entorno oficial de staging).
> 2. **Destino de las historias no terminadas:** Vuelven al **Product Backlog**, se reestiman y el PO decide si las prioriza para el siguiente Sprint.
> 3. **Acción de mejora en la Retrospectiva:** El equipo debe analizar por qué se rompió la Integración Continua al final del Sprint (aplicar filosofía Lean: parar la línea para que un build roto nunca llegue al final del ciclo).

---

### 📝 Pregunta Abierta 3 (Error Bloqueante en Integración Continua)
**Consigna:** *"Tengo un mensaje en el pipeline de Integración Continua que dice que el error es 'bloqueante' (Blocker). ¿Qué significa y qué acciones debe tomar el equipo para solucionarlo?"*

> **Respuesta 10/10 de Cátedra:**
> 1. **Qué significa:** Un error bloqueante (*Blocker*) es un defecto crítico que **rompe la compilación/build**, hace fallar las pruebas automatizadas o detiene la ejecución general del sistema, dejando el pipeline en estado rojo e impidiendo que los demás desarrolladores integren su código.
> 2. **Acción inmediata (Filosofía Lean - Jidoka / 'Parar la Línea'):**
>    - Detener de inmediato la subida de nuevos cambios al repositorio principal.
>    - Si la corrección no es evidente en minutos, **revertir (rollback) el último commit** al último estado estable conocido (*Green Build*).
>    - El autor del commit con apoyo del equipo debe reproducir y solucionar el error en su entorno local (*hotfix*), pasar todas las pruebas unitarias y de regresión localmente, y recién entonces volver a commitear.

---

### 📝 Pregunta Abierta 4 (Tiempo Máximo de Inspección Formal de Fagan)
**Consigna:** *"Si se decide realizar una revisión técnica formal (Inspección de Fagan) de casos de prueba o arquitectura, ¿cuál es el tiempo máximo aconsejable para la reunión y por qué?"*

> **Respuesta 10/10 de Cátedra:**
> 1. **Tiempo máximo aconsejable:** **2 horas (120 minutos)**.
> 2. **Justificación:** La inspección formal exige un esfuerzo cognitivo y nivel de concentración extremadamente altos para detectar anomalías minuciosas. Los estudios empíricos demuestran que superadas las 2 horas aparece la **fatiga mental**, la tasa de detección de defectos por hora decae drásticamente y la reunión deja de ser costo-efectiva. Por esta razón, si el artefacto es extenso, el Moderador debe dividirlo en múltiples sesiones de máximo 2 horas.

---

### 📝 Pregunta Abierta 5 (CMMI: Organizaciones Inmaduras vs. Maduras)
**Consigna:** *"Según CMMI, ¿cuáles son las características distintivas de las organizaciones inmaduras (Nivel 1 - Inicial)?"*

> **Respuesta 10/10 de Cátedra:**
> En una organización inmadura (Nivel 1):
> - **Procesos caóticos y ad-hoc:** No existen procesos institucionalizados; cada proyecto se ejecuta según el criterio o improvisación de quien lo lidera.
> - **Gestión reactiva ("Apagar incendios"):** La gerencia se enfoca en resolver crisis urgentes en lugar de prevenir problemas.
> - **Dependencia del heroísmo individual:** El éxito de los proyectos depende exclusivamente del esfuerzo personal extraordinario y horas extra de personas específicas, no de la capacidad organizacional.
> - **Previsibilidad nula:** Los presupuestos, cronogramas y funcionalidades se desvían sistemáticamente porque no hay datos históricos para estimar.
> - **La calidad se sacrifica bajo presión:** Cuando se acercan las fechas de entrega, se recortan o eliminan las pruebas y revisiones para entregar a tiempo.

---

### 📝 Pregunta Abierta 6 (Dominios de Métricas en Ingeniería de Software)
**Consigna:** *"Explique los tres dominios de métricas (Proceso, Proyecto y Producto). Indique propósito, quién las recolecta y utiliza, y su visibilidad (pública vs. privada)."*

> **Respuesta 10/10 de Cátedra:**
>
> | Dominio | Propósito | ¿Quién la recolecta y utiliza? | Visibilidad | Ejemplos Reales |
> | :--- | :--- | :--- | :--- | :--- |
> | **Proceso** | Evaluar y mejorar la efectividad y madurez del proceso de desarrollo en toda la organización a lo largo del tiempo. | **Ingeniero de Procesos / Grupo de Calidad (SEPG / SQA)** | **Pública y Despersonalizada** (visible a la organización; jamás para evaluar personas). | Densidad de defectos por fase, Eficiencia de remoción de defectos (DRE), Lead Time, Cycle Time. |
> | **Proyecto** | Monitorear el estado, avance, costos y riesgos de un proyecto específico para tomar decisiones operativas. | **Líder de Proyecto / Scrum Master** | **Privada** (del equipo y sus interesados directos). | SPI (Índice de Cronograma), CPI (Índice de Costos), Velocidad del Sprint, Burndown Chart, Esfuerzo real vs. estimado. |
> | **Producto** | Medir características técnicas, tamaño y atributos de calidad del software entregado. | **Arquitectos, Desarrolladores y Testers** | **Técnica** (equipo de desarrollo). | Líneas de Código (LOC), Puntos de Función, Complejidad Ciclomática de McCabe, Cobertura de código, Confiabilidad (MTBF). |

---

### 📝 Pregunta Abierta 7 (Diferencia Fundamental: SQA vs. Control de Calidad / Testing)
**Consigna:** *"Compare Aseguramiento de Calidad de Software (SQA / PPQA) con Control de Calidad (QC / Testing). Indique orientación, objetivo, independencia jerárquica y actividades prohibidas en SQA."*

> **Respuesta 10/10 de Cátedra:**
> - **Orientación y Enfoque:**
>   - **SQA (Aseguramiento):** Orientado al **PROCESO** y de carácter **PREVENTIVO**. Evalúa que el equipo aplique los estándares, procedimientos y planes acordados.
>   - **QC / Testing (Control):** Orientado al **PRODUCTO** y de carácter **CORRECTIVO / DETECTIVO**. Ejecuta pruebas para encontrar defectos en el artefacto antes de entregarlo.
> - **Independencia Jerárquica de SQA:**
>   - El responsable de SQA **NO debe depender jerárquicamente del Líder de Proyecto**; debe reportar a un nivel gerencial superior independiente para garantizar objetividad en sus auditorías.
> - **Actividades Prohibidas en SQA (Cazabobos clásico):**
>   - El grupo de SQA **NO diseña ni ejecuta casos de prueba de software**, ni programa código, ni corrige defectos. Esas actividades pertenecen exclusivamente a Desarrollo y Testing.

---

# PARTE 3: CHECKLIST FINAL PARA EL CASO PRÁCTICO (HOJA DE EXCEL)

Antes de entregar tu hoja práctica en el parcial, verificá mentalmente estos 5 puntos birome rosa:

1. **Usuario Logueado:** SIEMPRE va como primera fila de ENTRADAS (`1. Usuario registrado, activo y logueado...` / `2. Usuario no registrado...`).
2. **Condiciones Dependientes (ANSES / Roles / Menores):** No crees condiciones inexistentes como "Condición jubilatoria". Las condiciones son `Sexo` y `Edad`. Para menores: `DNI del menor` es una entrada y `DNI del Padre/Madre/Tutor` es otra condición externa aparte.
3. **Fotos en Condiciones Separadas:** No agrupes las fotos en una sola condición. Separá `Foto Rostro` de `Fotos DNI (frente y dorso)`.
4. **Precondiciones con Datos Concretos:** En el Caso de Prueba, las fotos están **en el dispositivo local del usuario** (`"rostro_matias.jpg"`), NUNCA cargadas en el sistema.
5. **En Pasos SOLO el Usuario:** Todo paso arranca con `El [Rol] selecciona / ingresa...`. El sistema valida y responde en la columna **Resultado Esperado**.
6. **Caso de Falla:** Solo **UN DATO INVÁLIDO** a la vez. En `Clases de Equivalencia` listá la clase de entrada inválida y la clase de mensaje de error de salida correspondiente (¡nada de salidas exitosas en un caso de error!).
