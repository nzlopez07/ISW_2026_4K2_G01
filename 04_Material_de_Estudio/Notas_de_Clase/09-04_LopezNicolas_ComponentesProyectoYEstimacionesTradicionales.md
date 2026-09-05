# 04/09 - Componentes de un Proyecto de SW y Estimaciones Tradicionales

- **Materia:** Ingeniería y Calidad de Software (ICSW) - Curso 4K2 (2026)
- **Cátedra:** Judith Meles – Laura Covaro
- **Autor:** López Daniel Nicolás (Legajo 97969 - Grupo 1)
- **Presentaciones base:** `06 Componentes de Proyecto SW.pdf` y `07 Estimaciones de Sw.pdf`
- **Bibliografía principal:** 
  - Brooks, Frederick P. Jr. – *The Mythical Man-Month* / *No Silver Bullet*
  - McConnell, Steve – *Software Estimation: Demystifying the Black Art*

---

## 1. El Pentágono del Software: Proceso, Proyecto, Producto, Personas y Herramientas

```text
       [PROCESO]
       /        \
  instancia      automatizado con
  y adapta            \
     v                 v
[PROYECTO] ------> [HERRAMIENTAS]
   ^     \
incorpora  obtiene como resultado
   |        \
[PERSONAS]   v
          [PRODUCTO]
```

- **Proceso (IEEE):** Secuencia de pasos ejecutados para un propósito dado.
- **Proceso de Software (SW-CMM):** Conjunto estructurado de actividades, métodos, prácticas y transformaciones que la gente usa para desarrollar o mantener software y sus productos asociados.
- **Proyecto:** Esfuerzo temporario (inicio y fin delimitados) orientado a crear un producto, servicio o resultado **único**.
  - *Cuidado en parcial:* Una línea de producción en serie **no** es un proyecto.
- **Producto:** Resultado final entregable que soluciona una necesidad u oportunidad de negocio.

---

## 2. Procesos Definidos vs. Procesos Empíricos

| Dimensión | Proceso Definido | Proceso Empírico |
| :--- | :--- | :--- |
| **Inspiración** | Líneas de montaje industrial (manufactura). | Procesos creativos, complejos e investigación. |
| **Premisa** | Repetir el mismo proceso da siempre exactamente el mismo resultado. | Variables cambiantes. Repetir el proceso puede generar resultados distintos. |
| **Mecanismo de Control** | Predictibilidad y estandarización a priori. | **Inspección frecuente y adaptación** continua. |
| **Ciclo de conocimiento** | Lineal y preestablecido. | *Asumir $\to$ Construir $\to$ Retroalimentar $\to$ Revisar $\to$ Adaptar*. |

> **Criterio Cátedra:** El desarrollo de software es inherentemente un **proceso empírico** porque el producto es intangible, las necesidades mutan y la complejidad cognitiva es alta.

---

## 3. Ciclos de Vida: Producto vs. Proyecto

- **Ciclo de Vida del Producto:** Abarca desde la idea y plan de negocio inicial, pasando por sucesivos proyectos de desarrollo/mantenimiento, operación en producción y actualizaciones, hasta el retiro definitivo del mercado.
- **Ciclo de Vida del Proyecto:** Unidad de gestión temporaria (Fase Inicial $\to$ Intermedia $\to$ Final/Entrega). Un producto atraviesa múltiples proyectos a lo largo de su vida útil.
- **Clasificación básica de Ciclos de Vida de desarrollo:**
  1. **Secuencial:** Cascada lineal (requisitos $\to$ diseño $\to$ implementación $\to$ pruebas).
  2. **Iterativo:** Repetición de fases en ciclos para refinar el producto.
  3. **Recursivo:** Descomposición del problema en subproblemas tratados con ciclos anidados.

---

## 4. Núcleo Teórico de Fred Brooks (*The Mythical Man-Month*)

### A. Complejidad Esencial vs. Dificultad Accidental (*No Silver Bullet*)
- **Accidente (Problemas superados por la evolución tecnológica):**
  - Restricciones severas de memoria y hardware.
  - Sintaxis engorrosa de lenguajes primitivos.
  - Tiempos muertos de compilación.
  - Procesamiento batch vs. interactivo.
- **Esencia (Propiedades intrínsecas e incurables del software):**
  1. **Complejidad:** Ninguna parte del software es idéntica a otra; escalabilidad no lineal de estados.
  2. **Conformidad:** El software debe amoldarse a interfaces de sistemas humanos, leyes o sistemas legados caprichosos e ilógicos.
  3. **Mutabilidad:** Presión social y del entorno para modificarlo constantemente porque "es código maleable".
  4. **Invisibilidad:** Carece de presencia física o geométrica inherente.
- **Conclusión de parcial:** Las herramientas (POO, IA, frameworks) atacan el **accidente**. No existe "bala de plata" que otorgue un salto de orden de magnitud ($10\times$) sobre la **complejidad esencial**.

### B. El Mito del Hombre-Mes (Esfuerzo $\neq$ Progreso)
- Hombres y meses **no** son recursos intercambiables.
- Existen restricciones estrictamente secuenciales: *"Gestar un hijo toma 9 meses sin importar cuántas mujeres se asignen"*.
- Confundir esfuerzo acumulado con calendario de entrega conduce al colapso del cronograma.

### C. Ley de Brooks
> **"Añadir personal a un proyecto que ya está retrasado, lo retrasa aún más."**

**Causas de la ley (Justificación obligatoria de parcial):**
1. **Desvío de mentores:** Los desarrolladores productivos deben detener su trabajo para capacitar e incorporar a los nuevos ingresantes (*onboarding*).
2. **Fricción por repartición del trabajo:** Necesidad de rediseñar módulos y subdividir tareas en curso.
3. **Nuevos errores de interfaz:** Mayor superficie de integración y fallas de acoplamiento.
4. **Crecimiento combinatorio de canales de comunicación:**
   $$\text{Canales} = \frac{n(n - 1)}{2}$$
   - Con 3 personas: 3 canales.
   - Con 10 personas: 45 canales.
   - Con 50 personas: 1.225 canales.
   El esfuerzo de comunicación crece exponencialmente devorando las ganancias teóricas de mano de obra.

### D. Integridad Conceptual y Equipo Quirúrgico
- La **integridad conceptual** es el atributo supremo de calidad de un diseño: un sistema debe reflejar una filosofía unificada, como si hubiera fluido de una sola mente.
- **Equipo Quirúrgico:** Estructura donde un **Cirujano (Arquitecto principal)** diseña y escribe las partes críticas, asistido por un Copiloto, un Administrador (liberador de trabas operativas), Editor de documentación y personal de soporte, minimizando la comunicación cruzada caótica.

### E. El Efecto del Segundo Sistema (*Second-System Effect*)
- El segundo sistema diseñado por un arquitecto es el más propenso a la sobrecarga innecesaria (*featuritis*, diseño barroco), acumulando todas las ideas postergadas del primero.

---

## 5. Administración de Proyectos y Triple Restricción

- **Administración de Proyectos:** Aplicación de conocimientos, habilidades, herramientas y técnicas para satisfacer los requerimientos del proyecto.
- **La Triple Restricción:**
  - **Alcance (Scope)**
  - **Tiempo (Schedule / Cronograma)**
  - **Costo / Recursos (Cost)**
  - El balance de estos tres vértices determina la **Calidad** lograda. Modificar un vértice obliga a renegociar los restantes.

### Distinción Clave de Parcial: Alcance de Producto vs. Alcance de Proyecto
- **Alcance del Producto:** Todas las características y funciones que debe incluir el software entregable.
  - *¿Contra qué se mide su cumplimiento?:* Contra la **Especificación de Requerimientos** (ERS / US).
- **Alcance del Proyecto:** Todo el trabajo (y *solo* el trabajo) necesario para construir y entregar el producto con la calidad acordada.
  - *¿Contra qué se mide su cumplimiento?:* Contra el **Plan de Proyecto** (o Plan de Desarrollo de Software).

---

## 6. Riesgos y Métricas de Software

### Gestión de Riesgos
- **Riesgo:** *"Un problema esperando para suceder"*; evento incierto que, de ocurrir, compromete el éxito del proyecto.
- **Ciclo de Gestión:** *Identificar $\to$ Analizar $\to$ Planificar respuesta $\to$ Seguimiento y Control $\to$ Aprendizaje continuo*.

### Clasificación de Métricas
1. **Métricas de Proceso:** Miden la efectividad y madurez de las prácticas y procesos organizacionales.
2. **Métricas de Proyecto:** Miden el desempeño operativo durante la ejecución (cumplimiento de hitos, desvío de cronograma, gasto vs. presupuesto, volatilidad de requerimientos).
3. **Métricas de Producto:** Evalúan el entregable de software (tamaño en LOC/PF, densidad de defectos, cobertura de pruebas unitarias, complejidad).

- **Métricas básicas del proyecto:** Tamaño del producto, Esfuerzo, Tiempo (Calendario) y Defectos.

---

## 7. Estimaciones Tradicionales de Software (Steve McConnell)

### A. Principios de Estimación
- **Por definición, una estimación NO es precisa.**
- **Estimar $\neq$ Planear $\neq$ Comprometerse:**
  - *Estimación:* Predicción probabilística del esfuerzo/duración requerida basada en datos y supuestos.
  - *Plan:* Cómo se pretende organizar las tareas para alcanzar metas.
  - *Compromiso:* Acuerdo vinculante de fechas y entregables con stakeholders.
- A mayor brecha entre lo estimado y lo planeado, mayor es el riesgo asumido.

### B. El Cono de Incertidumbre (*Cone of Uncertainty*)
- En fases tempranas (definición inicial de requisitos), el error de estimación puede variar entre **$0.25\times$ y $4.0\times$** respecto al valor real final.
- Conforme avanza el proyecto y se toman decisiones arquitectónicas, la variabilidad disminuye progresivamente hasta converger en $1.0\times$.
- *Error típico:* Forzar compromisos de fecha y costo fijos cuando el proyecto se encuentra en la parte ancha del cono.

### C. Métodos Tradicionales de Estimación

1. **Basados en la Experiencia:**
   - **Juicio de Experto Puro:** Un profesional experimentado estima según su bagaje.  
     *Riesgo:* Dependencia crítica. Si el experto abandona la empresa, se pierde la capacidad de estimar.
   - **Estimación a Tres Puntos (Fórmula PERT / Beta):**
     $$\text{Esfuerzo} = \frac{O + 4H + P}{6}$$
     Donde:
     - $O$: Estimación Optimista.
     - $H$: Estimación Habitual (más probable).
     - $P$: Estimación Pesimista.
   - **Wideband Delphi (Juicio de Experto Grupal):**
     - Procedimiento estructurado, anónimo e iterativo para alcanzar consenso sin sesgos de jerarquía ni líderes dominantes:
       1. Se distribuyen especificaciones técnicas.
       2. Discusión inicial grupal sobre el producto.
       3. Estimaciones individuales y secretas entregadas a un coordinador.
       4. El coordinador distribuye el resumen tabulado anónimo.
       5. Reunión para debatir supuestos detrás de las discrepancias extremas.
       6. Votación anónima sucesiva hasta convergencia razonable.
   - **Analogía y Datos Históricos:** Comparación sistemática contra componentes de proyectos previos ya finalizados.

### D. Causa Principal de Falla: Actividades Omitidas
- La principal causa de desvío en estimaciones tradicionales es la omisión sistemática de actividades complementarias debido al optimismo de los desarrolladores:
  - Tareas técnicas omitidas: testing unitario, armado de datasets de prueba, revisiones de código, refactorización, documentación técnica, soporte a versiones previas.
  - Tareas generales omitidas: reuniones de coordinación, capacitaciones, licencias médicas, feriados, buffers de contingencia.

---

## 8. Preguntas Clave para el Parcial

1. **¿Por qué la ley de Brooks sostiene que agregar personal demora más el proyecto?**
   - R: Porque distrae a los mentores en el onboarding, fragmenta el trabajo generando nuevas interfaces defectuosas y dispara exponencialmente las vías de comunicación según $n(n-1)/2$.
2. **¿Qué diferencia conceptual existe entre Proceso Definido y Proceso Empírico?**
   - R: El definido asume predictibilidad absoluta por repetición estandarizada (modelo industrial); el empírico asume incertidumbre y complejidad, basando su control en inspección frecuente y adaptación.
3. **¿Cuál es la diferencia entre el Alcance del Producto y el del Proyecto?**
   - R: El alcance del producto son las funcionalidades del software y se valida contra la Especificación de Requerimientos; el alcance del proyecto es todo el trabajo requerido para entregarlo y se controla contra el Plan de Proyecto.
4. **¿Por qué Wideband Delphi exige anonimato en las estimaciones intermedias?**
   - R: Para evitar el efecto de anclaje, la presión jerárquica y el condicionamiento de los perfiles más extrovertidos o de mayor rango.
