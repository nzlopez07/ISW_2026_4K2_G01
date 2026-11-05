# Unidad 1 Ingeniera de SW

# La Evolución de la Ingeniería de Software

### El Origen de la Disciplina

- **Nacimiento (1968):** Se estableció formalmente tras la conferencia de la **NATO** (*Organización del Tratado del Atlántico Norte*) para enfrentar la llamada **«crisis del software»**.
- **Objetivo:** Aplicar un enfoque disciplinado, cuantificable y sistemático al desarrollo, emulando la ingeniería tradicional ante la creciente complejidad e impredecibilidad de los proyectos.

### El Modelo en Cascada (Waterfall)

- **Origen y auge:** Propuesto por **Winston Royce** en 1970; adoptado masivamente durante las décadas de 1970 y 1980.
- **Naturaleza:** Ciclo de vida **prescriptivo**, secuencial y dirigido por un plan.
- **Fases secuenciales:**
    1. Análisis de requerimientos
    2. Diseño del sistema y del software
    3. Implementación en código (y pruebas de unidad)
    4. Pruebas de integración del sistema
    5. Operación y mantenimiento
- **Regla estricta:** Cada etapa debe completarse y aprobarse formalmente antes de avanzar a la siguiente.
- **Balance:**
    - **Ventaja:** Funciona bien cuando los requerimientos son estables y totalmente conocidos desde el inicio.
    - **Desventaja:** Provoca fallos severos e inflexibilidad en entornos que exigen cambios continuos.

### La Complejidad del Software: "No Silver Bullet" (1987)

- **Autor:** Frederick Brooks.
- **Tesis central:** *No hay "bala de plata"*. No existe ni existirá una tecnología o técnica de gestión que, por sí sola, incremente la productividad o confiabilidad en un **orden de magnitud (10x)** en una década.
- **Clasificación de las dificultades:**
    - **Dificultades accidentales:** Ligadas a la tecnología o herramientas (ej. sintaxis del lenguaje de programación, tiempos de compilación).
    - **Dificultades esenciales:** Inherentes a la naturaleza del software (ej. complejidad conceptual, invisibilidad de sus estructuras, conformidad con reglas del negocio cambiantes).
- **Ejemplo práctico:**
    
    > Un marco de trabajo (*framework*) moderno puede generar código automáticamente y eliminar la tarea repetitiva de teclear sintaxis (**dificultad accidental**), pero no puede resolver la comprensión, modelado y estructuración de la lógica de negocio (**dificultad esencial**), labor que sigue exigiendo criterio intelectual humano.
    > 

### Modelos de Madurez y Calidad de Procesos (SEI)

A finales de la década de 1980, el **SEI** (*Software Engineering Institute*) de la Carnegie Mellon University buscó estandarizar y predecir la calidad:

#### A. CMM (*Capability Maturity Model*)

- Diseñado para evaluar y medir la madurez de los procesos de software.
- Clasifica el avance organizacional en **5 niveles progresivos** (desde un estado *inicial/caótico* hasta uno *optimizado* con mejora continua).

#### B. CMMI (*Capability Maturity Model Integration*)

Evolución integral que unifica la ingeniería de software, la de sistemas y la gestión de servicios. Presenta dos representaciones:

| **Representación** | **Qué evalúa** | **Escala / Niveles** | **Propósito** |
| --- | --- | --- | --- |
| **Por Etapas** | **Madurez Organizacional** global    | **5 niveles** (de 1 a 5)    | Provee un estándar probado de avance y facilita la comparación entre organizaciones.    |
| **Continua** | **Capacidad** de cada Área de Proceso (AP)    | **6 niveles** (de 0 a 5)    | Permite seleccionar el orden de las mejoras según las prioridades de la empresa.    |

### La Transición hacia la Agilidad (2001)

- **Causa del cambio:** Rigidez del modelo en cascada y sobrecarga burocrática de los marcos de madurez pesados.
- **Punto de inflexión:** Creación del **Manifiesto Ágil (2001)**.
- **Pilares clave:**
    - Priorizar la **adaptabilidad al cambio** frente a planes inflexibles.
    - Realizar **entregas frecuentes** de software funcional y operativo.
    - Fomentar el **aprendizaje empírico** y la colaboración continua con el usuario.

# Problemas de Desarrollo y Errores: Clásicos vs. Modernos

### La Naturaleza del Desarrollo de Software

- **Actividad intelectual y humana:** El éxito radica principalmente en las capacidades, interacciones y personalidades del equipo.
- **Impredecibilidad:** A diferencia de la manufactura tradicional, los proyectos de software son intrínsecamente más difíciles de predecir.
- **Problemas históricos recurrentes:**
    - Productos finales que no satisfacen las verdaderas necesidades del cliente.
    - Software rígido: alta dificultad para extenderlo o adaptarlo.
    - Documentación deficiente o inexistente.
    - Baja calidad técnica y defectos frecuentes.
    - Desbordamiento continuo de presupuestos y calendarios.

### Errores Clásicos en la Era Tradicional

El autor **Steve McConnell** clasificó los errores clásicos en cuatro categorías: *personal*, *proceso*, *tecnología* y *gestión del producto*.

#### A. La Ilusión de los Requerimientos Congelados

- **Falso supuesto:** Creer que las especificaciones pueden fijarse al 100% al inicio del proyecto.
- **Impacto:** Cualquier cambio posterior genera caos organizativo o un reproceso masivo.

#### B. La Ley de Brooks

> *"Agregar personal a un proyecto de software que ya está atrasado solo logrará atrasarlo más."*
> 
- **Causa técnica:**
    1. Los desarrolladores experimentados deben frenar su trabajo para formar a los nuevos.
    2. Las líneas de comunicación y coordinación interna aumentan de forma exponencial.
- **Ejemplo práctico:** Si en un proyecto de 3 meses se añaden dos programadores durante el último mes, el tiempo invertido en explicar la arquitectura y coordinar neutraliza cualquier aporte de código a corto plazo.

#### C. Deficiencias en Gestión de Configuración (SCM)

- La ausencia de control de versiones riguroso generaba pérdidas de código, sobrescritura involuntaria de cambios entre compañeros y reaparición de fallas corregidas (*regresiones*).

#### D. Casos Históricos Catastróficos

- **Mariner I (1962):** Destrucción de la sonda a Venus a los 293 segundos por una fórmula matemática manuscrita mal programada.
- **Mars Climate Orbiter (1999):** Pérdida de la sonda por incompatibilidad en la conversión de unidades métricas a unidades imperiales/inglesas.
- **Ariane 5 (1996):** Explosión a los 37 segundos del despegue provocada por reutilizar software del Ariane 4. Un desbordamiento numérico (conversión de coma flotante de 64 bits a entero de 16 bits sin control de límites) desactivó la computadora de navegación.

### Errores Actuales y Desafíos Modernos (Ágiles)

Aunque las metodologías ágiles mitigaron los cuellos de botella de la burocracia documental tradicional, introdujeron nuevas desviaciones:

#### A. Acumulación de Deuda Técnica

- **Definición:** El coste acumulado derivado de tomar atajos técnicos rápidos para acelerar una entrega inmediata.
- **Mecanismo de degradación:** Si no se practica una **refactorización continua**, la arquitectura interna se corrompe paulatinamente, encareciendo y desestabilizando cualquier cambio futuro.

#### B. Fragmentación Horizontal de Historias de Usuario

- **Error:** Dividir las historias por capas técnicas (ej. una historia aislada para UI, otra para la base de datos y otra para servicios).
- **Consecuencia:** Destruye la entrega incremental de valor al usuario y convierte los sprints en "minicadenas en cascada". Deben construirse como **rebanadas verticales de valor funcional**.

#### C. La Falacia del Exceso de Confianza

- **Pruebas no funcionales tardías:** Posponer pruebas de rendimiento, concurrencia o seguridad para el final del desarrollo.
- **Riesgo:** Los problemas arquitectónicos estructurales se descubren cuando el sistema ya opera en producción, donde corregirlos resulta exponencialmente más costoso.

### 4. Cuadro Comparativo: Errores Tradicionales vs. Errores Modernos

| **Dimensión de Análisis** | **Errores Clásicos Históricos (Tradicionales)** | **Errores Actuales y Modernos (Ágiles / Modernos)** |
| --- | --- | --- |
| **Gestión de Requerimientos** | Exigir especificaciones completas y congeladas al inicio, ignorando la volatilidad natural del problema. | *Backlogs* gigantescos despriorizados o requerimientos emergentes sin rumbo que provocan parálisis por incertidumbre. |
| **Planificación y Presupuesto** | Adherencia rígida a cronogramas absolutos en horas e intento de apurar proyectos sumando personal (**Ley de Brooks**).    | Apresurar lanzamientos entregando código "suficientemente bueno" sin criterios rigurosos de aceptación, calidad o pruebas.    |
| **Arquitectura y Calidad** | Posponer la integración y las pruebas globales del sistema para las fases finales del proyecto.    | Acumulación de **Deuda Técnica** por omitir la refactorización continua y retrasar las pruebas de rendimiento y seguridad.    |
| **Reutilización de Componentes** | Intentar desarrollar todos los componentes desde cero por falta de librerías estandarizadas. | Reutilización a ciegas de componentes COTS, APIs o bibliotecas externas sin comprobar las suposiciones y restricciones del entorno.    |
| **Estructura del Trabajo** | Asignación de tareas aisladas bajo procesos burocráticos y documentación exhaustiva prescriptiva. | Fragmentar las Historias de Usuario por capas técnicas (BD, UI) en lugar de construir incrementos verticales de valor. |

## Puntos de Inflexión y Preguntas para Pensar en Ingeniería de Software

### **Pregunta de Reflexión 1: Dimensión Humana vs. Herramientas**

> Si la mayoría de las causas de fracaso en los proyectos de software siguen vinculadas a factores humanos y de comunicación más que a limitaciones tecnológicas, ¿por qué la industria tiende a buscar la solución invirtiendo en nuevas herramientas en lugar de mejorar los procesos de interacción del equipo?
> 

#### El Choque de Paradigmas: Software vs. Manufactura Tradicional

- **El intento histórico (décadas de 1970 y 1980):** Se intentó gestionar el desarrollo de software emulando la ingeniería tradicional (construcción civil, industria automotriz).
- **El error de base:** Ignorar las diferencias fundamentales entre ensamblar productos físicos y concebir sistemas abstractos e intangibles.

#### Comparativa: ¿Por qué el software NO es manufactura?

| **Criterio** | **Manufactura Tradicional** | **Ingeniería de Software** |
| --- | --- | --- |
| **Naturaleza del producto** | Física, tangible, sujeta a leyes y desgaste material.    | Intangible, abstracta, maleable, sin desgaste físico (se deteriora conceptualmente).    |
| **Distribución de costos** | La mayor parte se concentra en la producción en masa en plantas fabriles.    | **Cero producción en masa**; casi la totalidad del costo se ubica en el diseño y la ingeniería intelectual.    |
| **Costos del cambio** | Modificar un molde o estructura física tras fabricarse es astronómico.    | El producto es inherentemente maleable, pero sensible a la volatilidad del negocio.    |
| **Factor determinante de calidad** | Automatización, calibración de máquinas y estandarización del ensamblaje.    | **Intelecto, habilidades, diseño y comunicación** del equipo humano.    |

#### El Fracaso de la Rigidez Fabril: El Modelo en Cascada

- **Premisa tradicional:** Se planifica exhaustivamente al inicio para "congelar" requerimientos, asumiendo que cambiarlos luego será inviable.
- **Fases secuenciales prescriptivas:** Análisis → Diseño → Construcción →Pruebas (aprobación estricta de cada fase antes de avanzar).
- **Consecuencia real:** El cliente espera meses o años para ver software operativo, descubriendo tardíamente que el producto no resuelve sus verdaderas necesidades de negocio.

#### El Factor Humano y la Comunicación

- **Ley de Brooks (Frederick Brooks):**
    
    > *"Agregar personal a un proyecto de software atrasado solo logrará retrasarlo más."*
    > 
    - *Explicación:* Los desarrolladores experimentados detienen su labor para instruir a los nuevos y las vías de comunicación interna crecen de forma exponencial.
- **Determinantes del éxito:** La evidencia empírica demuestra que el éxito o fracaso depende prioritariamente de:
    - Comunicación cara a cara y fluida.
    - Involucramiento continuo del usuario/cliente.
    - Claridad en los requerimientos.
    - Apoyo y patrocinio gerencial activo.

#### Búsqueda de Madurez y la Tesis *No Silver Bullet*

- **CMM y CMMI (SEI):** Intentos de medir y estandarizar la madurez y capacidad organizacional. Si no se equilibran, pueden degenerar en burocracia y documentación excesiva.
- **"No Silver Bullet" (Frederick Brooks, 1987):**
    - No existe una solución tecnológica mágica que aumente por sí sola la productividad en un orden de magnitud (10x).
    - **Dificultades accidentales:** Se resuelven con herramientas modernas (compiladores, frameworks).
    - **Dificultades esenciales:** Inherentes al modelado del software y su lógica conceptual compleja; requieren juicio humano insustituible.
- **Conclusión del punto de inflexión:** Superar la metáfora industrial y asumir la ingeniería de software como un **proceso evolutivo y continuo**, centrado en la adaptación al cambio y la interacción entre personas.

### Pregunta de Reflexión 2: Reutilización vs. Suposiciones Ocultas

> La reutilización de componentes y bibliotecas externas es un pilar del desarrollo moderno. Viendo el ejemplo del Ariane 5, ¿dónde está el límite entre la eficiencia de no reinventar la rueda y el riesgo de incorporar código cuyo comportamiento interno e hipótesis de entorno desconocemos?
> 
- **El caso de advertencia (Ariane 5):** Se reutilizó el módulo de referencia inercial del Ariane 4 sin contemplar que los nuevos motores generaban aceleraciones mayores, causando una excepción aritmética por desbordamiento que autodestruyó el cohete.
- **Punto de equilibrio crítico:**
    - No basta con conocer la especificación de la interfaz externa (firma de métodos o APIs).
    - Resulta indispensable validar las **hipótesis ambientales implícitas** (rangos numéricos, concurrencia, límites de memoria y supuestos operativos) antes de integrar componentes en un contexto operacional diferente.

### Pregunta de Reflexión 3: Estrategia y Negligencia en la Deuda Técnica

> *En el entorno competitivo actual, ¿hasta qué punto es justificable asumir Deuda Técnica para llegar antes al mercado, y en qué momento esa deuda se convierte en una negligencia que pone en riesgo la supervivencia del producto?*
> 

#### Cuándo es una Decisión Estratégica Justificable

- **Compromiso consciente:** Balancear deliberadamente el *time-to-market* contra el costo de demora.
- **Dilema de la calidad (Meyer y Pressman):** Buscar la perfección absoluta de código en etapas tempranas puede consumir todo el presupuesto y dejar a la empresa fuera de la ventana comercial.
- **Lanzamientos "suficientemente buenos":** Producir versiones iniciales enfocadas en el núcleo funcional para validar hipótesis de negocio con usuarios reales y capturar mercado a tiempo.

#### Cuándo se Transforma en Negligencia Peligrosa

- **Pérdida de control de los intereses:** Los atajos técnicos acumulados sobrepasan la capacidad de respuesta del equipo.
- **Degradación del código:** El sistema se vuelve frágil, rígido y opaco; modificar una parte rompe módulos no relacionados.
- **Carga de falla (Failure Load):** El equipo deja de crear valor funcional para dedicar el 100% de su tiempo a apagar incendios y resolver reclamos de producción.
- **Colapso de la velocidad:** La velocidad del equipo cae drásticamente hacia cero debido al miedo constante de romper el código.

### 3. La Solución Sostenible (Metodologías Ágiles / Lean)

- **Gestión proactiva:** La calidad y el mantenimiento preventivo deben ser continuos, no un hito aplazado para el final.
- **Capacidad explícita:** Reservar un porcentaje fijo de capacidad en cada iteración/sprint para refactorización e infraestructura técnica.
- **Refactorización continua:** Reestructurar internamente el código sin cambiar su comportamiento externo, pagando los intereses de forma incremental y preservando la adaptabilidad del software.

# Propiedades del Software Complejo

Los sistemas de software modernos presentan atributos inherentes que determinan su dificultad técnica y de gestión:

### 1. Naturaleza Abstracta e Intangible

- **Ausencia de límites físicos:** Al ser de carácter lógico, no está restringido por las leyes de la física, propiedades de los materiales ni procesos de manufactura fabril.
- **Impacto:** Permite crear construcciones conceptuales inmensas sin barreras materiales, pero causa que la complejidad aumente a un ritmo vertiginoso.

### 2. Dificultad Esencial (Complejidad Intrínseca)

- **Tesis *No Silver Bullet* (Fred Brooks):** La complejidad conceptual es inherente a la esencia del software (junto con la *conformidad*, la *cambiabilidad* y la *invisibilidad*).
- **Implicación:** No existen ni existirán herramientas, técnicas o "balas de plata" milagrosas que eliminen esta complejidad de raíz.

### 3. Propiedades Emergentes

- **Concepto:** Características que pertenecen al **sistema como un todo** y no a sus partes componentes individuales.
- **Momento de aparición:** Solo surgen y pueden evaluarse una vez integrados el software, el hardware, los operadores humanos y el entorno operativo.
- **Clasificación:**
    - **Funcionales:** El propósito operativo del sistema completo (ej. una bicicleta como medio de transporte tras ensamblarse).
    - **No funcionales:** Confiabilidad, seguridad, rendimiento, tolerancia a fallos y usabilidad. Si no alcanzan un nivel mínimo, pueden volver inútil al sistema.

### 4. Interdependencia de Componentes y No Determinismo

- **Efectos en cascada:** La falla o comportamiento imprevisto de un módulo individual puede propagarse a través de las distintas capas de la arquitectura.
- **Comportamiento no lineal:** En sistemas sociotécnicos con concurrencia, interfaces externas e intervención de personas, una misma entrada no siempre produce exactamente la misma salida.

### 5. Resolución de "Problemas Malvados" (*Wicked Problems*)

- **Definición (Rittel y Webber):** Problemas tan complejos e interconectados que es imposible especificarlos de manera definitiva y completa antes de comenzar.
- **Múltiples actores:** Diferentes participantes tienen visiones y metas en conflicto.
- **Evolución continua:** La verdadera naturaleza del problema solo se comprende a medida que se diseña, construye y despliega la solución.

### 6. Evolución Continua y Degradación Estructural

- En entornos reales, el software debe evolucionar permanentemente para no quedar obsoleto.
- Con cada cambio acumulado, la estructura interna se degrada por naturaleza, haciendo mandatorio invertir recursos continuos en refactorización y mantenimiento preventivo.

## Las Leyes de Lehman de la Evolución del Software

Formuladas por **Manny Lehman y Les Belady**, aplican a los **Sistemas tipo E**: programas instalados en entornos reales que deben adaptarse a los cambios del negocio y contexto operativo.

| **N.º** | **Ley de Lehman** | **Principio Clave** | **Implicación Práctica** |
| --- | --- | --- | --- |
| **1** | **Cambio Continuo** (*Continuous Change*)    | El software en uso real debe adaptarse continuamente.    | Si no cambia, se vuelve progresivamente insatisfactorio e inútil para los usuarios.    |
| **2** | **Complejidad Creciente** (*Increasing Complexity*)    | Al evolucionar y sumar funciones, la estructura interna se degrada.    | Exige destinar tiempo y presupuesto al **mantenimiento preventivo / refactorización** para conservar la arquitectura.    |
| **3** | **Autorregulación / Evolución del Programa** (*Self-Regulation*)    | El proceso de evolución sigue una dinámica interna propia y autorregulada.    | Métricas como el tamaño, el tiempo entre versiones y los defectos reportados se mantienen casi invariantes por versión.    |
| **4** | **Estabilidad Organizacional** (*Organizational Stability*)    | La tasa de desarrollo y actividad global permanece prácticamente constante.    | Es independiente del personal o recursos asignados, pues los costos de comunicación en equipos grandes saturan el avance.    |
| **5** | **Conservación de Familiaridad** (*Conservation of Familiarity*)    | El cambio incremental en cada versión debe permanecer acotado y estable.    | Si se agrega demasiada funcionalidad en una entrega, la siguiente versión deberá dedicarse casi exclusivamente a reparar fallas.    |
| **6** | **Crecimiento Continuo** (*Continued Growth*)    | La capacidad funcional del software debe crecer de manera ininterrumpida.    | Necesario para sostener el valor de negocio y la satisfacción de los usuarios durante su ciclo de vida.    |
| **7** | **Declive de la Calidad** (*Declining Quality*)    | La calidad percibida decae inevitablemente con el paso del tiempo.    | Ocurre de forma natural a menos que el sistema se mantenga y adapte rigurosamente a las variaciones del entorno.    |
| **8** | **Sistema de Retroalimentación** (*Feedback System*)    | Los procesos evolutivos constituyen sistemas de retroalimentación multinivel y multiagente.    | Deben monitorearse y gestionarse con ciclos de *feedback* continuos para lograr mejoras de producto sostenibles.    |

### 💡 Síntesis

- **Brooks vs. Lehman:** Brooks explica por qué el software es conceptualmente complejo desde su concepción (**dificultades esenciales**); Lehman explica por qué esa complejidad **tiende a degradarse y crecer con el paso del tiempo** si no se realiza mantenimiento preventivo.
- **Sistemas Tipo E:** Sistemas embebidos en el mundo real donde el software moldea su entorno y los cambios del entorno fuerzan la evolución del software en un bucle continuo.

#### **Ejemplo**

La relación entre la **Ley de Complejidad Creciente** (la segunda ley de la dinámica de evolución de Lehman) y la **Deuda Técnica** ilustra la forma en que los sistemas de software reales se degradan cuando se modifican de manera continua. Mientras que Lehman describe un fenómeno estructural inevitable —donde cualquier sistema que cambia para adaptarse a su entorno se vuelve naturalmente más complejo a menos que se invierta en conservarlo—, la deuda técnica actúa como el catalizador económico y operativo de esa degradación cuando el equipo elige tomar atajos de diseño o parches rápidos para acelerar una entrega.

Para visualizar esta interacción en un entorno real, consideremos el ejemplo práctico de un sistema de comercio electrónico (*e-commerce*):

En la **Fase 1 (Estado Inicial Limpio)**, el sistema nace con una arquitectura sencilla para procesar compras locales pagadas en efectivo. El módulo de procesamiento de pedidos es pequeño, cohesivo y fácil de entender por cualquier desarrollador.

En la **Fase 2 (Acumulación de Deuda Técnica)**, la empresa necesita lanzar urgentemente ventas nocturnas con cupones de descuento, pagos con tarjeta de crédito e integración con múltiples empresas de logística para no perder mercado ante la competencia. Ante la presión de los plazos, el equipo decide no rediseñar la arquitectura de pagos ni escribir pruebas de regresión automatizadas. En su lugar, incorporan la nueva lógica añadiendo múltiples estructuras condicionales anidadas (`if-else`) dentro de la misma función principal de procesamiento. La funcionalidad sale a tiempo y genera ingresos, pero el equipo ha contraído una **deuda técnica** al dejar un código duplicado, acoplado y sin cobertura de pruebas.

En la **Fase 3 (Manifestación de la Ley de Complejidad Creciente)**, en los meses siguientes, el sistema continúa cambiando para soportar impuestos regionales y promociones de envío. Como la estructura interna no se limpió, cada nuevo cambio distorsiona aún más el diseño original. Modificar el cálculo de un cupón de descuento provoca un efecto colateral no intencionado que bloquea las transacciones con tarjeta de crédito en producción. De acuerdo con la Ley de Lehman, la complejidad del módulo se ha elevado a un punto tal que el tiempo promedio para analizar el impacto de cualquier cambio se duplica, y los desarrolladores gastan más tiempo corrigiendo errores derivados de la alta complejidad que agregando nuevo valor.

En la **Fase 4 (Paso por Refactorización para Pagar la Deuda)**, si la gerencia decide no intervenir, el sistema terminará convirtiéndose en un sistema heredado inmanejable e inseguro de tocar. La forma de frenar la ley de Lehman y saldar la deuda técnica es dedicar capacidad explícita a la **refactorización**. Esto implica reestructurar internamente el módulo de pedidos —por ejemplo, extrayendo las reglas de pago hacia clases independientes con polimorfismo— para simplificar la arquitectura y eliminar la duplicación, sin alterar el comportamiento observable del sistema y asegurando su correcto funcionamiento mediante pruebas automatizadas.

Este ciclo demuestra que la deuda técnica es la decisión deliberada o accidental de ignorar el deterioro del código, mientras que la Ley de Lehman es la consecuencia ineludible que recuerda que, si no se invierte de manera continua en mantenimiento preventivo, la complejidad terminará destruyendo la mantenibilidad del producto.

# Fundamentos de la Ingeniería de Software

### Definición y Orígenes de la Disciplina

La **Ingeniería de Software** se ocupa de todos los aspectos de la producción de software profesional, distinguiéndose de la programación individual o personal por su enfoque estructurado, disciplinado y orientado al trabajo en equipo.

- **Nacimiento (1968):** El término fue acuñado formalmente durante la conferencia de la **OTAN/NATO** en Garmisch para abordar la denominada *«crisis del software»*.
- **Definición fundacional (Fritz Bauer, 1968):**
    
    > *«El establecimiento y uso de principios fundamentales de la ingeniería con el objetivo de desarrollar, de forma económica, software que sea confiable y trabaje con eficiencia en máquinas reales.»*
    > 
- **Definición formal (Estándar IEEE 610.12):**
    1. La aplicación de un enfoque **sistemático, disciplinado y cuantificable** al desarrollo, operación y mantenimiento del software (es decir, la aplicación de la ingeniería al software).
    2. El estudio de dichos enfoques.

### ¿Qué es Realmente el Software?

El software profesional no es únicamente código fuente o programas aislados; constituye una **configuración completa** integrada por:

- Programas de cómputo (ejecutables y fuentes).
- Estructuras y archivos de datos.
- Reglas y procedimientos operativos.
- Documentación técnica y manuales para el usuario final.

> **La perspectiva de David Parnas:**
> 
> 
> Definió la disciplina como la **«construcción multipersona de software multiversión»**. Esto sintetiza que no busca enseñar a programar en solitario, sino a coordinar equipos para construir sistemas complejos que evolucionarán y recibirán mantenimiento en el tiempo.
> 

### Las Capas de la Ingeniería de Software (Roger Pressman)

Pressman modela la ingeniería de software como una tecnología estructurada en capas sobrepuestas:

```
 ┌────────────────────────────────────────┐
 │             HERRAMIENTAS               │  (Soporte automatizado / CASE)
 ├────────────────────────────────────────┤
 │               MÉTODOS                  │  (Cómo técnico: análisis, diseño, etc.)
 ├────────────────────────────────────────┤
 │               PROCESO                  │  (Aglutinante: actividades, tareas, flujo)
 ├────────────────────────────────────────┤
 │        COMPROMISO CON LA CALIDAD       │  (Cimiento indispensable / Cultura)
 └────────────────────────────────────────┘
```

### Cuatro Actividades Fundamentales del Proceso

Independientemente del ciclo de vida elegido (cascada, iterativo o ágil), todo desarrollo profesional comprende:

| **N.º** | **Actividad** | **Objetivo Central** |
| --- | --- | --- |
| **1** | **Especificación del software**
    | Clientes e ingenieros definen las funciones requeridas y las restricciones operativas del sistema.    |
| **2** | **Desarrollo (Diseño e Implementación)**
    | Se diseña la arquitectura, la estructura de componentes y se escribe el código ejecutable.    |
| **3** | **Validación del software**
    | Pruebas sistemáticas para asegurar que el software cumple las expectativas y requerimientos del cliente.    |
| **4** | **Evolución (Mantenimiento)**
    | Modificación continua del software en producción para responder a los cambios del negocio y del entorno operativo.    |

- **Compromiso con la calidad (Base):** El cimiento indispensable que impulsa la cultura de mejora continua.
- **Proceso (Aglutinante):** Define el marco secuencial de actividades, acciones y tareas para un desarrollo racional y oportuno.
- **Métodos:** Proporcionan el "cómo" técnico (modelado, análisis de requerimientos, diseño, construcción, pruebas y mantenimiento).
- **Herramientas (Cúspide):** Ofrecen soporte automatizado o semiautomatizado a los procesos y métodos. Al integrarse forman entornos **CASE** (*Computer-Aided Software Engineering*).

### Estructura Curricular: Los Tres Bloques de Disciplinas

Demuestran que dominar la codificación individual no es suficiente para asegurar la calidad de un producto profesional:

- **1. Disciplinas Técnicas:**
    - Ingeniería de requerimientos.
    - Análisis y diseño arquitectónico.
    - Construcción (codificación).
    - Pruebas (*testing*).
    - Despliegue del sistema.
- **2. Disciplinas de Gestión:**
    - Planificación y estimación de proyectos.
    - Monitoreo y control.
    - Garantía de entregas en tiempo y presupuesto.
- **3. Disciplinas de Soporte:**
    
    *Atraviesan todo el ciclo de vida brindando estabilidad, gobernanza y control:*
    
    - **SCM (*Software Configuration Management*):** Gestión de configuración y control de versiones.
    - **SQA (*Software Quality Assurance*):** Aseguramiento integral de la calidad.
    - **Métricas y medición:** Recolección y análisis cuantitativo de productos y procesos.

# Procesos Definidos vs. Procesos Empíricos y Ciclos de Vida

## PARTE 1: Procesos Definidos vs. Procesos Empíricos

Representa la frontera conceptual fundamental entre la gestión tradicional de software y el paradigma ágil moderno.

```
PROCESO DEFINIDO:
 [ Entradas Identificadas ] ──▶ [ Proceso Prescriptivo Repetible ] ──▶ [ Salidas Esperadas ]

PROCESO EMPÍRICO:
 ┌───▶ [ Asumir ] ──▶ [ Construir ] ──┐
 │                                    ▼
 └─── [ Adaptar ] ◀── [ Revisar ] ◀── [ Retroalimentar ]
```

### Proceso Definido (Inspirado en la Manufactura Tradicional)

- **Origen:** Inspirado en las líneas de montaje y producción fabril en masa.
- **Premisa fundamental:** Asume que es posible repetir el mismo proceso indefinidamente y obtener exactamente los mismos resultados previsibles.
- **Mecanismo de control:** La administración y el control provienen directamente de la **predictibilidad** del propio proceso prescriptivo.
- **Supuesto clave:** El problema se puede especificar y congelar al 100% desde el inicio.
- **Modelo característico:** **Modelo en Cascada** (*Waterfall*), con fases estrictamente lineales y aprobaciones formales para avanzar.

### Proceso Empírico (Paradigma Ágil)

- **Premisa fundamental:** Diseñado para procesos creativos y complejos sujetos a múltiples variables cambiantes. Al repetir el proceso bajo condiciones similares, pueden obtenerse resultados diferentes.
- **Mecanismo de control:** La administración y el control se realizan mediante **inspecciones frecuentes y adaptaciones continuas**.
- **Patrón de conocimiento circular:**
    1. **Asumir:** Partir de hipótesis iniciales.
    2. **Construir:** Elaborar un incremento de software funcional.
    3. **Retroalimentar:** Obtener *feedback* directo del cliente y usuarios.
    4. **Revisar:** Analizar los resultados contra las expectativas.
    5. **Adaptar:** Ajustar tanto el producto como el proceso antes del siguiente ciclo.
- **Marcos de trabajo principales:** **Scrum** y **Kanban**.

#### Los Tres Pilares del Empirismo

Base conceptual de los marcos ágiles como Scrum:

- **Transparencia:** Todos los aspectos significativos del proceso y del avance deben ser completamente visibles para los responsables de gestionarlo y ejecutarlo.
- **Inspección:** Evaluación periódica y oportuna del progreso hacia los objetivos para detectar anomalías o desviaciones.
- **Adaptación:** Capacidad de ajustar el rumbo o los procesos inmediatamente tras identificar desviaciones o nuevas necesidades.

## PARTE 2: Ciclos de Vida y Gestión de Proyectos

### 1. Producto vs. Proyecto

- **Ciclo de Vida:** Serie de pasos o etapas a través de las cuales progresa una iniciativa.
- **Ciclo de Vida del Producto:** Abarca desde la idea inicial y el plan de negocio, pasando por la construcción, operaciones, mantenimiento y evolución, hasta su retiro definitivo del mercado.
- **Ciclo de Vida del Proyecto:** Delimita la ventana temporal intermedia y específica orientada a construir una versión o entrega (*release*) puntual de dicho producto.

### 2. Impacto en la "Triple Restricción" (Alcance, Tiempo y Costo)

| **Variable de Gestión** | **Modelo Tradicional (Cascada / Secuencial)** | **Metodologías Ágiles (Iterativo / Incremental)** |
| --- | --- | --- |
| **Enfoque de gestión** | Dirigido por un plan determinista.    | Control empírico del proceso.    |
| **Tiempo y Costo (Presupuesto)** | Se estiman para cumplir un alcance prefijado; si hay retrasos, se extienden los plazos o el gasto.    | **Fijos / Acotados:** *Timeboxes* o iteraciones cortas (1 a 4 semanas) y presupuesto de consumo regular convenido.    |
| **Alcance** | **Fijo y congelado por contrato**; se evalúa contra las especificaciones iniciales.    | **Variable y negociable:** Si no se llega con el compromiso, se reduce alcance manteniendo fija la fecha.    |
| **Métricas de control** | Cronogramas en horas, seguimiento de hitos documentales y fases aprobadas.    | Velocidad del equipo, capacidad operativa y software funcionando entregado.    |
| **Riesgos principales** | Bloqueos por dependencias y alto costo de retrabajo si los errores surgen al final.    | Desvío si falta visión de producto o no se definen criterios de aceptación claros. |
| **Estrategia de entrega** | Una única entrega masiva al término del proyecto. | Entregas tempranas y continuas vía **MVP** (*Mínimo Producto Viable*) o **MMF**.    |

### Otros Modelos y Marcos de Evolución

- **Modelo en Espiral (Barry Boehm):** Modelo evolutivo orientado a la **reducción explícita de riesgos** antes de realizar grandes inversiones. Cada ciclo aborda:
    1. Definición de objetivos.
    2. Análisis y evaluación de riesgos.
    3. Desarrollo y validación de prototipos.
    4. Planificación del siguiente ciclo o hito.
- **CMM / CMMI (SEI):** Modelos de madurez organizacional estructurados en **5 niveles progresivos** (Inicial, Administrado, Definido, Administrado Cuantitativamente, Optimizado) para institucionalizar prácticas de ingeniería sin perder el foco en la calidad.
- **Tesis *No Silver Bullet* (Brooks):** Recordatorio de que ninguna herramienta o método eliminará las **dificultades esenciales** del software (complejidad conceptual, conformidad, invisibilidad); las herramientas solo simplifican las **dificultades accidentales** (sintaxis, compilación).

## PARTE 3: Criterios para Elegir el Ciclo de Vida Adecuado

No existe un enfoque universal (*«one size does not fit all»*). La elección depende de ponderar los siguientes factores:

1. **Estabilidad de los Requerimientos:**
    - *Estables y conocidos:* Admiten enfoques lineales/cascada.
    - *Volátiles o ambiguos:* Exigen ciclos iterativos, empíricos y adaptativos.
2. **Criticidad del Sistema y Perfil de Riesgo:**
    - Misión crítica (vidas humanas o pérdidas financieras masivas): Requiere mayor formalidad de verificación, validación y análisis de riesgos (ej. Espiral o Cascada riguroso).
3. **Urgencia de Salida al Mercado (*Time-to-Market*):**
    - Necesidad urgente de validar con el negocio: Requiere iteraciones cortas, MVP y liberaciones incrementales.
4. **Factores Organizacionales y Técnicos:**
    - Habilidades y madurez del equipo de trabajo.
    - Grado de involucramiento del usuario final y del negocio.
    - Novedad y madurez de la tecnología empleada.

# Concepto General de Ciclo de Vida

- **Definición:** Es la serie de pasos, fases o etapas estructuradas a través de las cuales un producto o un proyecto progresa y evoluciona a lo largo del tiempo.
- **Perspectiva de proceso:** Describe cómo se organiza el trabajo, especificando qué actividades se llevan a cabo y en qué orden se ejecutan.

### Ciclo de Vida del Producto

- **Definición:** Abarca la existencia completa de la solución de software desde su concepción inicial de negocio hasta su retiro definitivo del mercado.
- **Etapas principales:**
    - **Plan de Negocio e Idea:** Definición de la visión y las oportunidades comerciales.
    - **Construcción e Introducción:** Desarrollo inicial llevado a cabo mediante uno o más proyectos.
    - **Operaciones y Uso:** Período de puesta en producción donde los usuarios utilizan la herramienta.
    - **Actualizaciones y Evolución:** Introducción de mejoras continuas para adaptar el software a nuevas necesidades.
    - **Retiro:** Fase final cuando el producto deja de operar o es reemplazado.
- **Horizonte temporal y financiamiento:** No tiene un fin predefinido mientras siga siendo útil y suele financiarse de forma incremental a lo largo del tiempo.
- **Alcance del Producto:** Comprende el conjunto de características, propiedades y funciones especificadas para el software.
- **Medición de cumplimiento:** El alcance del producto se mide y evalúa contra la **Especificación de Requerimientos**.

### Ciclo de Vida del Proyecto

- **Definición:** Es una representación temporaria y acotada de un proceso que especifica las fases de trabajo y su secuencia para construir o actualizar una versión determinada del producto.
- **Clasificación de modelos de proceso:**
    - **Secuencial:** Fases lineales consecutivas donde una etapa se completa antes de iniciar la siguiente (por ejemplo, el Modelo en Cascada).
    - **Iterativo / Incremental:** Ciclos de tiempo fijo donde se entregan incrementos funcionales de forma acumulativa.
    - **Evolutivo / Recursivo:** Ciclos orientados al análisis continuo y la reducción explícita de riesgos (por ejemplo, el Modelo en Espiral).
- **Horizonte temporal y financiamiento:** Es de duración limitada y temporaria; inicia con la asignación de presupuesto y finaliza cuando se alcanzan los objetivos del proyecto.
- **Alcance del Proyecto:** Representa todo el trabajo, y solo el trabajo, necesario para entregar el producto con las funciones especificadas.
- **Medición de cumplimiento:** El alcance del proyecto se mide y evalúa contra el **Plan de Proyecto** o Plan de Desarrollo de Software.

### Relación y Diferencias Clave

- **Sinergia:** Un solo producto suele dar origen a **múltiples proyectos** a lo largo de su historia (un proyecto inicial para la primera versión y proyectos posteriores para cada actualización importante).
- **Enfoque de gestión:**
    - El **Ciclo del Producto** enfoca su atención en la visión del negocio, la satisfacción del usuario y el valor entregado a largo plazo.
    - El **Ciclo del Proyecto** enfoca su atención en la ejecución técnica del trabajo, el orden de las actividades y el control de restricciones como tiempo, costo y alcance.
- **Criterio de éxito:**
    - El éxito del producto se evalúa en función de su adopción en el mercado y el cumplimiento de los requerimientos de negocio.
    - El éxito del proyecto se evalúa en función del cumplimiento de los entregables y cronogramas pactados en el plan de desarrollo.

# Las 4 P de la Gestión de Proyectos de Software

En la administración de proyectos de software, existen cuatro elementos fundamentales conocidos tradicionalmente como las "4 P":

- **Personal (*People*):** Constituye el factor más crítico y determinante para el éxito del proyecto, ya que el desarrollo de software es una actividad intensamente humana e intelectual. Abarca a los desarrolladores, analistas, líderes de equipo, administradores, clientes y usuarios finales.
- **Producto (*Product*):** Hace referencia al sistema o solución que se va a construir, definiendo su alcance, objetivos, restricciones y la descomposición del problema en componentes o funciones de negocio.
- **Proceso (*Process*):** Proporciona el marco conceptual y la guía de ruta que define la secuencia de actividades, tareas e hitos necesarios para desarrollar el producto de manera ordenada y adaptable.
- **Proyecto (*Project*):** Involucra la planificación, el monitoreo, la gestión de riesgos y el control de los recursos (esfuerzo, tiempo y presupuesto) para garantizar que el equipo alcance los objetivos pactados.

### Componentes Fundamentales de un Proceso de Software

El proceso de software se define como el conjunto estructurado de actividades, métodos y transformaciones utilizados para desarrollar y mantener productos informáticos. Para que este proceso funcione, se compone de tres elementos interconectados:

- **Personas:** Individuos que aportan sus habilidades técnicas, conocimientos, entrenamiento y motivación para ejecutar las tareas del proyecto.
- **Procedimientos y Métodos:** Definen la secuencia lógica de pasos, las prácticas y los criterios técnicos que indican *cómo* realizar la ingeniería de requerimientos, el diseño, la codificación, las pruebas y el mantenimiento.
- **Herramientas y Equipos (Tecnología):** Proveen el soporte físico y tecnológico para automatizar o facilitar la ejecución de los métodos y procedimientos.

### Actividades del Proceso e Integración Disciplinaria

El desarrollo de software se organiza a través de dos tipos de actividades principales:

- **Actividades Fundamentales (Estructurales del Marco Conceptual):**
    - **Especificación (Requerimientos):** Definición de las capacidades funcionales y las restricciones operativas que debe cumplir el sistema junto con los clientes y usuarios.
    - **Desarrollo (Diseño e Implementación):** Creación de la arquitectura del software, el diseño de componentes y la construcción del código fuente ejecutable.
    - **Validación (Pruebas / *Testing*):** Verificación y evaluación del sistema para asegurar que cumple con las especificaciones y responde a las necesidades reales del cliente.
    - **Evolución (Mantenimiento):** Modificación del software en producción para adaptarlo a cambios en el entorno de negocio o corregir fallas.
- **Actividades Sombrilla y Disciplinas de Soporte:**
Son actividades que se ejecutan de manera transversal a lo largo de todo el ciclo de vida para dar estabilidad y control:
    - **Gestión de Configuración de Software (SCM):** Control de versiones, rastreo de cambios y mantenimiento de líneas base de los ítems de configuración.
    - **Aseguramiento de Calidad de Software (SQA / PPQA):** Revisiones técnicas, auditorías y monitoreo para garantizar el cumplimiento de estándares.
    - **Medición y Métricas:** Recolección de datos cuantitativos sobre el producto, el proyecto y el proceso para predecir el desempeño y guiar la mejora continua.

### Herramientas y Entorno Tecnológico

Las herramientas de software ofrecen soporte automatizado o semiautomatizado a los procesos y métodos. Cuando estas herramientas se integran formalmente, conforman un entorno de Ingeniería de Software Asistida por Computadora, conocido por las siglas **CASE** (*Computer-Aided Software Engineering*):

- **Entornos de Desarrollo Integrados (IDE):** Editores de código con asistencia sintáctica, compiladores e integradores de depuración.
- **Sistemas de Control de Versiones y Repositorios:** Herramientas para la gestión de ramas, fusión de código e historial de cambios.
- **Herramientas de Modelado y Análisis:** Software para diagramación conceptual (como herramientas UML) y definición de arquitecturas.
- **Herramientas de Automatización de Pruebas y Despliegue:** Marcos de trabajo de pruebas unitarias (como JUnit) y tuberías de integración continua.

### El Vínculo entre Personal, Proceso, Proyecto, Producto y Herramientas

La calidad del software no depende de un único elemento, sino de la interacción equilibrada de todos sus componentes:

- **Integración en la Gestión:** El personal capacitado se incorpora al proyecto; el proceso general de la organización se adapta a las características particulares de dicho proyecto; y las herramientas automatizan y soportan las tareas del proceso.
- **El Proceso como Factor Controlable:** Aunque la capacidad de las personas es el factor individual más influyente en la calidad final, el proceso se considera el único factor verdaderamente controlable por la organización para mejorar la calidad y la eficiencia de forma sistemática.
- **Generación de Entregables:** La correcta ejecución del proyecto bajo un proceso adecuado da como resultado un **Producto** de alta calidad (código, documentación, modelos y ejecutables) que satisface las necesidades del negocio.

# Ciclo de vida y sus clasificaciones

### 1. Ciclo de Vida Secuencial (Lineal / Prescriptivo)

- **Tipo:** Secuencial / Lineal.
- **Modelo característico:** **Modelo en Cascada** (*Waterfall*), propuesto originalmente por Winston Royce. Define un modelo prescriptivo en el cual el desarrollo avanza de manera rígida y paso a paso a través de fases separadas.
- **Funcionamiento:** Divide las actividades de la ingeniería de software (análisis de requerimientos, diseño de la arquitectura, implementación en código, pruebas de integración y mantenimiento) en fases lineales e independientes. Cada fase genera entregables documentales formales y debe completarse y ser aprobada antes de iniciar la siguiente etapa.
- **Enfoque:** Dirigido por un plan determinista (*plan-driven*). Asume que el problema se puede especificar por completo y congelar desde el inicio, midiendo el éxito del proyecto contra el cumplimiento del plan inicial y las especificaciones cerradas.
- **Ventajas:**
    - Ofrece una estructura simple, intuitiva y fácil de comprender para la administración del proyecto.
    - Facilita el control administrativo mediante hitos documentales claros y revisiones formales de avance al finalizar cada fase.
    - Funciona de manera eficiente en proyectos con requerimientos estables, maduros y bien conocidos.
- **Desventajas:**
    - Presenta una gran dificultad para acomodar la incertidumbre natural y los cambios de requerimientos en etapas intermedias o avanzadas.
    - El cliente no dispone de una versión funcional del programa hasta que el proyecto está muy avanzado.
    - Suele generar "estados de bloqueo" donde los miembros del equipo permanecen inactivos esperando que otros concluyan entregables documentales previos, aumentando el costo de reestructuración si los errores se descubren al final.

### 2. Ciclo de Vida Iterativo e Incremental (Empírico / Ágil)

- **Tipo:** Iterativo / Incremental.
- **Modelos característicos:** **Desarrollo Incremental**, **Scrum**, **Kanban** y **Extreme Programming (XP)**.
- **Funcionamiento:** Descompone el desarrollo del sistema en una serie de versiones o incrementos construidos en iteraciones de corta duración (de 1 a 4 semanas). En cada iteración se ejecutan de forma solapada las actividades de especificación, diseño, codificación y pruebas, entregando un incremento ejecutable que añade valor funcional sobre las versiones previas.
- **Enfoque:** Control de procesos empírico sustentado en los tres pilares del empirismo: transparencia, inspección y adaptación continua. Invierte la lógica de gestión manteniendo fijos el tiempo y el costo de la iteración, mientras que el alcance se convierte en la variable negociable con el negocio.
- **Ventajas:**
    - Reduce sustancialmente el costo de adaptar requerimientos cambiantes durante el desarrollo.
    - Permite obtener retroalimentación temprana del cliente a través de demostraciones del software operativo en cada iteración.
    - Facilita la entrega e implementación rápida de software utilizable mediante un Mínimo Producto Viable (MVP).
- **Desventajas:**
    - Dificulta la definición del costo total y el alcance final cerrado del proyecto desde sus etapas iniciales.
    - Requiere una alta disponibilidad e involucramiento continuo por parte del cliente para priorizar el trabajo.
    - Si no se aplica una refactorización técnica continua para mantener la calidad de la arquitectura a medida que evoluciona, el sistema sufre degradación estructural acumulando Deuda Técnica.

### 3. Ciclo de Vida Recursivo / Evolutivo (Orientado a Riesgos)

- **Tipo:** Recursivo / Evolutivo.
- **Modelo característico:** **Modelo en Espiral**, ideado por Barry Boehm.
- **Funcionamiento:** Representa el proceso como una serie de circuitos o revoluciones concéntricas alrededor de una espiral. Cada vuelta de la espiral se divide en cuatro cuadrantes fundamentales: 1) Determinar objetivos, alternativas y restricciones; 2) Evaluar alternativas, identificar y resolver riesgos (mediante prototipado y simulación); 3) Desarrollar y probar el incremento de ese nivel; 4) Planificar la siguiente fase.
- **Enfoque:** Impulsado explícitamente por el análisis de riesgos. Combina la naturaleza iterativa de la elaboración de prototipos con los aspectos sistémicos y controlados del modelo secuencial.
- **Ventajas:**
    - Permite la identificación y resolución explícita de riesgos técnicos y financieros en cada ciclo antes de realizar grandes inversiones.
    - Permite incorporar la creación de prototipos en cualquier etapa de la evolución del producto para validar la factibilidad técnica.
    - Se adapta para aplicarse a lo largo de todo el ciclo de vida de una aplicación, desde la concepción del concepto hasta el mantenimiento operativo a largo plazo.
- **Desventajas:**
    - Demanda una elevada experiencia en la evaluación cuantitativa y cualitativa de riesgos para garantizar el éxito del proyecto.
    - Genera una sobrecarga de planificación que puede resultar excesiva o inviable para proyectos pequeños.
    - Suele ser difícil convencer a los clientes, especialmente bajo esquemas contractuales tradicionales, de que el enfoque evolutivo es controlable y supervisado.

| Dimensión de Análisis | Ciclo de Vida Secuencial (Lineal / Prescriptivo) | Ciclo de Vida Iterativo e Incremental (Empírico / Ágil) | Ciclo de Vida Recursivo / Evolutivo (Orientado a Riesgos) |
| --- | --- | --- | --- |
| **Modelos Característicos** | **Modelo en Cascada** (*Waterfall*), Modelo en V. | **Scrum**, **Kanban**, **XP** y Desarrollo Incremental. | **Modelo en Espiral** de Barry Boehm. |
| **Funcionamiento y Estructura** | Secuencia rígida de fases independientes (requerimientos, diseño, código, pruebas). Cada fase debe cerrarse y aprobarse antes de pasar a la siguiente. | Solapamiento de actividades en iteraciones cortas de tiempo fijo (*sprints*). Cada ciclo añade un incremento ejecutable sobre el anterior. | Circuitos o revoluciones concéntricas alrededor de una espiral. Cada ciclo aborda objetivos, análisis de riesgo, desarrollo y planificación. |
| **Enfoque de Gestión** | **Dirigido por un plan determinista** (*plan-driven*). Asume predictibilidad y especificación completa por adelantado. | **Control de procesos empírico**. Basado en los tres pilares: **transparencia, inspección y adaptación**. | **Impulsado explícitamente por el análisis de riesgos**. Combina la sistemática del secuencial con la tolerancia al cambio del evolutivo. |
| **Manejo de la Triple Restricción** | **Alcance Fijo y Congelado** por contrato. Tiempo y costo se estiman para cumplir la especificación. | **Tiempo y Costo Fijos** (*timeboxes*). **Alcance Variable y Negociable** según prioridades de negocio. | **Flexibilidad Acotada:** El costo y el cronograma se revalúan y ajustan tras la retroalimentación de cada revolución. |
| **Estrategia de Entrega** | Entrega única y masiva del producto completo al finalizar el proyecto. | Entregas tempranas y frecuentes de valor funcional mediante un **Mínimo Producto Viable (MVP)**. | Entregas progresivas de prototipos operacionales y versiones cada vez más completas del sistema. |
| **Ventajas Principales** | Estructura simple y fácil de administrar mediante hitos documentales
Funciona bien cuando los requerimientos son estables y conocidos. | Reduce fuertemente el costo de acomodar cambios en los requerimientos.
Permite obtener retroalimentación directa del cliente sobre software funcionando. | Identifica y resuelve riesgos técnicos y financieros de forma explícita antes de grandes inversiones.
Aplica prototipado en cualquier etapa del ciclo de vida. |
| **Desventajas / Riesgos** | Alto costo de reestructuración si surgen errores o cambios en fases avanzadas.
Genera "estados de bloqueo" por dependencia de tareas.
El cliente no ve software operativo hasta el final. | Dificultad para estimar el costo total y alcance cerrado desde el inicio.
Si se omite la refactorización continua, la arquitectura se degrada acumulando **Deuda Técnica**. | Exige alta experiencia cuantitativa y cualitativa en evaluación de riesgos. 
Sobrecarga de planificación inviable para proyectos pequeños.
Difícil de encajar bajo contratos rígidos tradicionales. |

---

# **Administración de Proyectos de Software**

La **Administración de Proyectos de Software** es la disciplina encargada de planificar, coordinar, monitorear y controlar los recursos, procesos y personas necesarios para entregar un producto de software de calidad, a tiempo y dentro del presupuesto convenido.

A diferencia de otros proyectos de ingeniería, la intangibilidad del software, la volatilidad de los requerimientos y la alta dependencia del intelecto humano hacen que la gestión de proyectos de software sea una tarea compleja e intensamente humana

## Bloque 1: Fundamentos de Gestión, las 4 P y la Triple Restricción

La administración de un proyecto de software consiste en la aplicación de conocimientos, habilidades, herramientas y técnicas a las actividades del proyecto para satisfacer las especificaciones y requerimientos acordados.

### Concepto de Proyecto de Software y la Tríada Proceso-Proyecto-Producto

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                                 PROCESO                                   │
 │            (El "Cómo", métodos y mapa de ruta disciplinado)               │
 └─────────────────────────────────────┬─────────────────────────────────────┘
                                       │  Se adapta y aplica en
                                       ▼
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                                 PROYECTO                                  │
 │         (El "Cuándo" y "Quién", esfuerzo acotado en el tiempo)            │
 └─────────────────────────────────────┬─────────────────────────────────────┘
                                       │  Genera como resultado
                                       ▼
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                                 PRODUCTO                                  │
 │           (El "Qué", software ejecutable y valor de negocio)              │
 └───────────────────────────────────────────────────────────────────────────┘
```

Para administrar software de manera profesional es fundamental distinguir las diferencias conceptuales entre sus tres componentes interrelacionados:

- **Proceso:** Es el marco conceptual o "mapa de carreteras" que define quién hace qué, cuándo y cómo para alcanzar un objetivo de desarrollo. Proporciona la serie de pasos predecibles, actividades de marco de trabajo y tareas técnicas necesarias para construir software.
- **Proyecto:** Es la planificación, ejecución, monitoreo y control del esfuerzo acotado y acoplado en el tiempo para entregar un producto específico dentro de restricciones presupuestarias y de calendario.
- **Producto:** Es el resultado o entregable ejecutable (junto con su documentación y modelos de diseño) que responde a las necesidades operativas del cliente.

**Ciclo de Vida del Proyecto vs. Ciclo de Vida del Producto**

- **Ciclo de Vida del Proyecto:** Es **finito y acotado**; inicia con la gestación del contrato o la planificación inicial y concluye formalmente con la entrega y aceptación del sistema. El cumplimiento del alcance del proyecto se mide contra el **Plan de Proyecto**.
- **Ciclo de Vida del Producto:** Es **evolutivo y continuo**; abarca desde la concepción del producto en el mercado hasta su retiro definitivo (pasando por Introducción, Crecimiento, Madurez y Declive). A lo largo de la vida útil del producto se ejecutan múltiples proyectos e incrementos sucesivos. El cumplimiento del alcance del producto se mide contra la **Especificación de Requerimientos**.

### El Espectro Administrativo — Las 4 P (Roger Pressman) repetido

Roger Pressman establece que la administración efectiva de un proyecto de software debe enfocar de forma equilibrada cuatro factores críticos:

```
                       ┌─────────────────────────┐
                       │        PERSONAL         │
                       │   (Factor Humano / CMM) │
                       └────────────┬────────────┘
                                    │
                       ┌────────────┴────────────┐
                       │        PRODUCTO         │
                       │   (Ámbito y Alcance)    │
                       └────────────┬────────────┘
                                    │
                       ┌────────────┴────────────┐
                       │         PROCESO         │
                       │ (Modelo y Actividades)  │
                       └────────────┬────────────┘
                                    │
                       ┌────────────┴────────────┐
                       │        PROYECTO         │
                       │  (Plan, Riesgo y Control)│
                       └─────────────────────────┘
```

### La Triple Restricción (*Triple Constraint*) y la Calidad

El rol principal del Líder de Proyecto es balancear activamente tres variables que compiten entre sí:

```
                       ALCANCE (Objetivos / Requerimientos)
                                     ▲
                                    ╱ ╲
                                   ╱   ╲
                                  ╱     ╲
                                 ╱ CALIDAD ╲
                                ╱           ╲
  TIEMPO (Cronograma / Fechas) ─────────────── COSTO (Presupuesto / Recursos)
```

- **Alcance:** ¿Qué está tratando de alcanzar el proyecto y cuáles son las características requeridas?
- **Tiempo:** ¿Cuánto tiempo calendario llevará completarlo y cuáles son las fechas comprometidas?
- **Costo:** ¿Qué presupuesto y recursos se requieren para ejecutar el trabajo?

> **Impacto en la Calidad:** Los proyectos de alta calidad son aquellos que entregan el producto requerido satisfaciendo los objetivos de alcance en el tiempo estipulado y dentro del presupuesto planificado. Si una de las tres variables se modifica (por ejemplo, si se reduce el tiempo o se expande el alcance), las otras dos variables o la **Calidad final** del software sufren un impacto directo.
> 

#### Triple Restricción en Tradicional vs. Ágil

- **Enfoque Tradicional (Dirigido por Plan):** Mantiene el **Alcance FIJO** y congelado por especificación inicial; el **Tiempo y Costo son ESTIMADOS / VARIABLES** (si hay retrasos, se extiende la fecha o el presupuesto).
- **Enfoque Ágil (Dirigido por Valor):** Mantiene el **Tiempo y Costo FIJOS** (mediante *timeboxes* o iteraciones cortas y presupuestos constantes); el **Alcance es VARIABLE Y NEGOCIABLE** (se ajustan las historias de usuario según las prioridades del negocio).

### Principios Organizativos de Gestión

**A. El Principio W5HH de Barry Boehm**

Barry Boehm propone una regla organizativa que simplifica la planificación de cualquier proyecto respondiendo a 7 preguntas clave (*Why, What, When, Who, Where, How, How much*):

1. **¿Por qué (*Why*) se desarrollará el sistema?** Valida si el propósito y la justificación de negocio justifican el gasto de dinero y esfuerzo.
2. **¿Qué (*What*) se hará?** Define el conjunto de tareas e hitos requeridos para el proyecto.
3. **¿Cuándo (*When*) se hará?** Establece el calendario del proyecto indicando cuándo se realizarán las tareas y entregables.
4. **¿Quién (*Who*) es responsable?** Define los roles, funciones y responsabilidades del equipo de software.
5. **¿Dónde (*Where*) están ubicados?** Identifica la organización espacial y de red de los recursos del proyecto.
6. **¿Cómo (*How*) se hará el trabajo?** Define el enfoque técnico (métodos, arquitecturas) y las estrategias administrativas.
7. **¿Cuánto (*How much*) se requiere de cada recurso?** Especifica las estimaciones cuantitativas de costo, personal y tiempo.

**B. Las 10 Señales de Advertencia de John Reel (Proyectos en Peligro)**

John Reel identifica las 10 causas raíz que indican tempranamente que un proyecto de software está en riesgo de fracasar:

1. El personal de software no entiende las necesidades del cliente.
2. El ámbito (*alcance*) del producto está pobremente definido.
3. Los cambios de requerimientos se gestionan de forma deficiente.
4. La tecnología elegida cambia durante el desarrollo.
5. Las necesidades empresariales cambian o están mal definidas.
6. Las fechas límite fijadas son irreales.
7. Los usuarios finales muestran resistencia al sistema.
8. Se pierde el patrocinio gerencial (o nunca se obtuvo adecuadamente).
9. El equipo carece de personal con las habilidades adecuadas.
10. Los gerentes y profesionales evitan las mejores prácticas y lecciones aprendidas.

## Bloque 2: Gestión de Personas, Equipos y Comunicaciones

La ingeniería de software es una actividad **intensamente humana** donde el personal constituye el factor más crítico para el éxito o fracaso de un proyecto. Este bloque aborda la dinámica de los participantes, las estructuras de organización de los equipos y la gestión de la comunicación.

### Los Participantes del Proyecto (*Stakeholders*)

Un **participante (*stakeholder*)** es cualquier persona o grupo que influye, se beneficia directa o indirectamente, o se ve afectado por el resultado del proyecto de software. La bibliografía establece una taxonomía clara de sus roles:

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                           GERENTES EJECUTIVOS                             │
 │      (Definen la estrategia de negocio e influencia institucional)         │
 └─────────────────────────────────────┬─────────────────────────────────────┘
                                       │
 ┌─────────────────────────────────────▼─────────────────────────────────────┐
 │                           GERENTES DE PROYECTO                            │
 │          (Planifican, motivan, organizan y coordinan al equipo)          │
 └─────────────────────────────────────┬─────────────────────────────────────┘
                                       │
 ┌─────────────────────────────────────▼─────────────────────────────────────┐
 │                        EQUIPO TÉCNICO / PROFESIONALES                     │
 │     (Aportan habilidades: analistas, arquitectos, dev, testers, QA)     │
 └───────────────┬───────────────────────────────────────────┬───────────────┘
                 │                                           │
 ┌───────────────▼───────────────┐           ┌───────────────▼───────────────┐
 │           CLIENTES            │           │        USUARIOS FINALES       │
 │ (Solicitan el software, finan-│           │ (Operan el software en su día │
 │  cian y fijan los objetivos)  │           │  a día para sus tareas)       │
 └───────────────────────────────┘           └───────────────────────────────┘
```

- **Gerentes Ejecutivos:** Definen los temas empresariales de alto nivel y garantizan el patrocinio o financiamiento del proyecto.
- **Gerentes / Líderes de Proyecto:** Responsables técnicos o administrativos de planificar, motivar, organizar y controlar a los profesionales que construyen el software.
- **Profesionales (Equipo de Desarrollo):** Especialistas que aportan la capacidad técnica directa (analistas, arquitectos, desarrolladores, *testers*, diseñadores, administradores de bases de datos y personal de soporte).
- **Clientes:** Personas o entidades que solicitan la construcción del producto, definen los objetivos generales del negocio y coordinan los fondos.
- **Usuarios Finales:** Personas que interactúan operativamente con el sistema en su trabajo diario y definen los detalles funcionales específicos.
- **Otros Participantes:** Subcontratistas, expertos de dominio, departamentos de marketing, organizaciones regulatorias y personal de operaciones.

### Liderazgo, Selección y Estructura de Equipos

**A. Paradigmas Organizacionales de Equipos (Larry Constantine)**

Constantine define cuatro estructuras u organizaciones tipo para los equipos de desarrollo:

1. **Paradigma Cerrado:** Estructura jerárquica tradicional de autoridad. Funciona bien para productos predecibles y similares a los anteriores, pero inhibe la innovación.
2. **Paradigma Aleatorio:** Estructura holgada basada en la iniciativa individual. Excelente para descubrimientos de alta innovación técnica, pero débil para un desempeño ordenado.
3. **Paradigma Abierto:** Combina controles del modelo cerrado con la innovación del aleatorio. El trabajo es altamente colaborativo y con decisiones por consenso. Es el ideal para la resolución de problemas complejos.
4. **Paradigma Síncrono:** Organiza al equipo dividiendo el problema en piezas naturales, donde los miembros trabajan en trozos pequeños con poca comunicación activa diaria entre sí.

**B. Estructura Tradicional vs. Equipos Ágiles Autodirigidos**

- **Equipo Programador Jefe (*Chief Programmer Team*):** Diseñado por Mills, Baker y Brooks para optimizar a programadores de alta productivida. Un programador jefe toma las decisiones técnicas centrales apoyado por un ingeniero de respaldo, un bibliotecario de software y especialistas.
- **Equipos Ágiles y Autoorganizados:** La unidad fundamental en marcos ágiles (como Scrum) es un equipo reducido (idealmente de 3 a 10 personas) y multidisciplinario. Es **autodirigido / autoorganizado**, lo que significa que posee autonomía interna para planificar, tomar decisiones técnicas y distribuir el trabajo sin una gestión de comando y control. La jerarquía clásica pierde sentido y los roles se disponen horizontalmente en un clima de confianza y cooperación.

```
  ESTRATEGIA JERÁRQUICA TRADICIONAL               EQUIPOS ÁGILES AUTOORGANIZADOS
       ┌─────────────────┐                             ┌───────────────┐
       │ Programador Jefe│                             │ Product Owner │
       └────────┬────────┘                             └───────┬───────┘
                │                                              │ (El Qué)
  ┌─────────────┼─────────────┐                        ┌───────▼───────┐
  ▼             ▼             ▼                        │ Developers /  │
Programador  Diseñador     Tester                      │ Scrum Team    │
  (Jerarquía de comando y control)                     └───────────────┘
                                                  (Autonomía en el "Cómo",
                                                   colaboración horizontal)
```

**C. Cohesión y el Fenómeno de "Cuajar" (*Gelling*)**

Tom DeMarco y Timothy Lister señalan que un grupo de trabajo asignado no es automáticamente un equipo. El objetivo de la gestión es lograr un **equipo cuajado (*cohesive team*)**, donde el grupo está tan fuertemente unido que el resultado global trasciende a la suma de sus partes individuales.

**D. Personalidades Complementarias (Bass & Dunteman / Sommerville)**

Al seleccionar a los integrantes del equipo, la literatura recomienda equilibrar tres tipos de orientaciones personales:

- **Orientados a Tareas:** Se motivan por el desafío intelectual y el trabajo técnico puro.
- **Orientados a la Interacción:** Se enfocan en la comunicación, detectando fricciones tempranas y facilitando el buen clima del grupo.
- **Orientados a Sí Mismos:** Buscan la transformación o el reconocimiento personal y empujan el trabajo hacia su cierre.

### Factor Humano, Comunicación y Ley de Brooks

**A. La Ley de Brooks**

Formulada por Frederick Brooks en su obra clásica *The Mythical Man-Month*:

> **Ley de Brooks:** *"Agregar personal a un proyecto de software retrasado lo retrasa aún más"*.
> 
- **Fundamento:** El tiempo y el esfuerzo no son intercambiables de forma lineal (las personas y los meses no se combinan libremente como en la manufactura). Incorporar nuevos desarrolladores exige que los miembros experimentados del equipo detengan su trabajo productivo para capacitar a los ingresantes, sumado al incremento exponencial de las rutas de comunicación.

**B. Canales de Comunicación y Sobrecarga**

Conforme el tamaño del grupo aumenta, la cantidad de rutas o canales de comunicación se incrementa cuadráticamente según la fórmula: $\text{Rutas de Comunicación} = \frac{n \times (n - 1)}{2}$

*(Donde (n) es el número de personas en el equipo).*
Un grupo de 8 personas genera **28 canales posibles** de comunicación.. Esto explica por qué la agilidad prefiere equipos pequeños y divididos, donde los costos de coordinación y el ruido se reducen al mínimo.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │               EFECTIVIDAD DE LOS CANALES DE COMUNICACIÓN                 │
 └───────────────────────────────────────────────────────────────────────────┘
   ▲  [Más Cálido / Más Efectivo]
   │  • Conversación Cara a Cara frente a un Pizarrón (Información vocal,   │
   │    subvocal y gestual con realimentación directa inmediata)             │
   │  • Videoconferencia / Teleconferencia                                   │
   │  • Conversación Telefónica / Chat                                       │
   │  • Correo Electrónico / Mensajería                                      │
   │  • Documentación en Papel / Especificaciones escritas                   │
   ▼  [Más Frío / Menos Efectivo]
```

**C. Riqueza de los Canales de Comunicación**

De acuerdo con la investigación de Alistair Cockburn y Scott Ambler citada en los textos de la cátedra, el canal de comunicación por excelencia es la **conversación cara a cara**. Permite el flujo de información vocal, subvocal y gestual con realimentación instantánea, superando la frialdad e ineficiencia de la documentación en papel.

## Bloque 3: Planificación, Alcance, Recursos y Calendarización (*Scheduling*)

La planificación es la actividad de gestión donde el trabajo del proyecto se divide en partes asignables, se estiman los recursos y el tiempo necesario, y se establecen los mecanismos para medir el avance real frente a lo previsto.

### El Plan de Proyecto (*Software Project Plan*)

El **Plan de Proyecto** es el documento maestro que comunica a los desarrolladores, clientes e interesados *qué* trabajo se realizará, *quién* lo ejecutará, *cuándo* se entregará y *cómo* se organizarán los recursos.

El plan evoluciona continuamente a lo largo del ciclo de vida del desarrollo a medida que disminuye la incertidumbre inicial y se refinan los requerimientos.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                       PLAN DE PROYECTO (SDP)                              │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ • Alcance del Proyecto y WBS/EDT (Estructura de Desglose del Trabajo)     │
 │ • Calendario y Cronograma de Actividades (Gantt)                          │
 │ • Asignación de Recursos (Humanos, Reutilizables, Entorno)                │
 │ • Planes de Soporte (Gestión de Riesgos, Calidad, SCM, Pruebas)           │
 └───────────────────────────────────────────────────────────────────────────┘
```

### Gestión del Alcance (*Scope Management*)

Una causa frecuente de fracaso en los proyectos es no delimitar claramente las fronteras del trabajo. En la administración de software se diferencian dos dimensiones del alcance:

- **Alcance del Producto:** Comprende las funciones, capacidades y características operativas que deben estar presentes en el software ejecutable. **Se mide y evalúa contra la Especificación de Requerimientos**.
- **Alcance del Proyecto:** Representa todo el trabajo organizativo, técnico y administrativo que debe realizarse para entregar el producto deseado. **Se mide y evalúa contra el Plan de Proyecto**.

```
                               ALCANCE TOTAL
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           ▼                                                   ▼
 ALCANCE DEL PRODUCTO                                ALCANCE DEL PROYECTO
 (Funciones y Capacidades)                           (Trabajo y Actividades)
           │                                                   │
           ▼                                                   ▼
 Evaluado contra la Especificación                   Evaluado contra el Plan
    de Requerimientos                              de Proyecto (SDP)
```

**Estructura de Desglose del Trabajo (WBS / EDT)**

La **EDT (Estructura de Distribución del Trabajo)** o **WBS (*Work Breakdown Structure*)** es la descomposición jerárquica e incremental del proyecto en tareas y paquetes de trabajo manejables.

- **Hitos (*Milestones*):** Puntos de control o etapas clave dentro del calendario (de duración cero) que marcan la finalización de un evento significativo o la revisión de un entregable.
- **Entregables (*Deliverables*):** Productos de trabajo tangibles y verificables (código fuente, modelos de diseño, documentos de arquitectura, planes de prueba) que se presentan al cliente o a la gerencia.

### Asignación de Recursos y Decisiones de Adquisición

**A. Categorías de Recursos Requeridos**

Durante la planificación, el líder de proyecto especifica tres categorías principales de recursos, indicando su descripción, disponibilidad, momento de requerimiento y duración:

1. **Recursos Humanos:** Definición del personal técnico necesario (analistas, desarrolladores, arquitectos, *testers*) especificando los roles y la ventana temporal de su participación.
2. **Componentes de Software Reutilizables:** Software de "experiencia completa" (comprado COTS), de "experiencia parcial" (componentes a modificar) o de "experiencia nueva" a construir desde cero.
3. **Entorno de Desarrollo:** Herramientas de software (IDEs, compiladores, gestores de pruebas) y hardware especializado (servidores, dispositivos de prueba, redes).

**B. Decisiones de Hacer vs. Comprar (*Make or Buy*) y Subcontratación (*Outsourcing*)**

Ante un requerimiento funcional, la gerencia evalúa tres alternativas tácticas o estratégicas:

- **Desarrollar a la medida (*Make*):** Construcción propia cuando la funcionalidad representa el núcleo competitivo de la empresa.
- **Adquirir comercialmente (*Buy / COTS*):** Licenciar un producto existente cuando el costo de desarrollo supera al de la licencia y la solución satisface los requerimientos estándar.
- **Subcontratar (*Outsourcing*):** Contratar a un proveedor externo para desarrollar partes específicas del sistema. Requiere una gestión rigurosa para controlar las interfaces de integración y la calidad entregada.

### Programación y Calendarización (*Scheduling*)

La calendarización es el proceso de distribuir el esfuerzo estimado a lo largo de la duración planificada del proyecto, asignando tareas a individuos específicos y estableciendo la secuencia de ejecución.

**A. Red de Tareas y Ruta Crítica (CPM / PERT)**

Una **Red de Tareas (o Diagrama de Red de Actividades)** es la representación gráfica del flujo de trabajo que muestra las dependencias y la secuencia secuencial o paralela entre las tareas.

```
     ┌───────────┐         ┌───────────┐
     │ Tarea 1.1 ├────────►│ Tarea 1.3 ├──────────┐
     └─────┬─────┘         └───────────┘          │
           │                                      ▼
           │               ┌───────────┐    ┌───────────┐
           └──────────────►│ Tarea 1.2 ├───►│ Tarea 1.4 │ (Hito M1)
                           └───────────┘    └───────────┘
```

- **Método de la Ruta Crítica (CPM - *Critical Path Method*):** Es la cadena o secuencia más larga de tareas dependientes desde el inicio hasta el final del proyecto. **Determina la duración mínima total del proyecto**.
- **Riesgo en la Ruta Crítica:** Cualquier retraso en una tarea ubicada sobre la ruta crítica posterga de forma directa e inevitable la fecha de finalización del proyecto completo.

**C. Cronogramas y Diagrama de Gantt**

El **Diagrama de Gantt** es la representación gráfica de barras horizontales sobre un eje temporal que permite visualizar las fechas de inicio y finalización de cada tarea, la concurrencia de actividades paralelas y la ubicación de los hitos.

**B. La Regla 40-20-40 de Distribución del Esfuerzo (Roger Pressman)**

Roger Pressman propone una pauta orientativa para distribuir el esfuerzo estimado a lo largo del flujo del proceso de software:

```
 ┌────────────────────────────────────────┬──────────────┬────────────────────────────────────────┐
 │   ANÁLISIS FRONTAL Y DISEÑO (40%)      │ CÓDIGO (20%) │     PRUEBAS Y VALIDACIÓN (40%)        │
 └────────────────────────────────────────┴──────────────┴────────────────────────────────────────┘
```

- **40% Análisis y Diseño:** Planificación, especificación de requerimientos y arquitectura del sistema.
- **20% Codificación:** Escritura de código fuente (se quita el énfasis desmedido a la programación pura).
- **40% Pruebas:** Pruebas unitarias, de integración, de sistema y revisión de defectos.

**D. Encuadre Temporal (*Time-boxing*)**

Es una técnica de gestión recomendada ante fechas límite severas e innegociables. Reconoce que no se puede entregar el 100% del producto en el tiempo estipulado. Se divide el proyecto en incrementos y se fija una ventana de tiempo rígida (*timebox*); al llegar a la fecha límite, **el trabajo para esa tarea se detiene indefectiblemente y se entrega lo que esté completado**, pasando a la siguiente iteración.

## Bloque 4: Gestión de Riesgos, Monitoreo, Control, Métricas y Gobernanza

Este cuarto y último bloque abarca las actividades sombrilla y mecanismos de control necesarios para garantizar que el proyecto se ejecute de forma predecible, reduciendo la incertidumbre y asegurando la mejora continua.

## Gestión de Riesgos (*Risk Management*)

La **Gestión de Riesgos** es una acción proactiva y continua que busca comprender y manejar la incertidumbre inherente a los proyectos de software.

**A. Definición y Características Clave**

Un **riesgo** es un problema potencial o un evento incierto que, si ocurre, puede comprometer el éxito del proyecto o generar pérdidas no deseadas. Posee dos características fundamentales:

- **Incertidumbre:** El evento puede o no ocurrir (no existen riesgos 100% probables).
- **Pérdida / Impacto:** Si el riesgo se materializa, se producen consecuencias indeseadas en el costo, calendario o calidad del producto.

**B. Clasificación de los Riesgos (Tom DeMarco, Sommerville, Pressman)**

Los riesgos de software se agrupan en tres grandes categorías:

- **Riesgos del Proyecto (*Project Risks*):** Amenazan el plan, el presupuesto, el calendario o los recursos (ej. rotación imprevista de personal clave, indisponibilidad de hardware o cambios administrativos).
- **Riesgos del Producto (*Product Risks*):** Amenazan la calidad, la especificación técnica o el rendimiento del software (ej. subestimación del tamaño del código, herramientas CASE con bajo desempeño o ambigüedades en la especificación).
- **Riesgos Empresariales / de Negocio (*Business Risks*):** Amenazan la viabilidad comercial del producto o la estrategia de la compañía (ej. construir un producto que el mercado no desea, perder el apoyo presupuestal o la aparición de un producto competitivo).

**C. Estrategias: Reactiva vs. Proactiva**

- **Estrategia Reactiva (Apagar Incendios / *Firefighting*):** El equipo no toma medidas previas y solo actúa cuando el riesgo ya se transformó en una crisis real.
- **Estrategia Proactiva:** Se identifican y analizan los riesgos formalmente antes de comenzar el desarrollo, diseñando planes para evitarlos o mitigar su impacto.

**D. Las 5 Actividades del Proceso de Gestión de Riesgos**

El ciclo de gestión de riesgos sigue un flujo iterativo continuo a lo largo del proyecto:

1. **Identificación de Riesgos:** Búsqueda sistemática de amenazas mediante listas de verificación (*checklists*), revisiones de ámbito y análisis de los componentes de riesgo (rendimiento, soporte, costo y calendario).
2. **Análisis y Proyección de Riesgos:** Evaluación de la **Probabilidad de ocurrencia (P)** y el **Impacto / Costo (C)** de cada riesgo. Se calcula la **Exposición al Riesgo (ER)** mediante la ecuación: $[ER = P \times C] \quad
donde\ (P) \ es \ la \ probabilidad \  y \ (C)$ es el costo si ocurre.
3. **Planificación de Riesgos (Estrategia MMMR):** Definición de acciones específicas:
    - **Mitigación:** Pasos preventivos para reducir la probabilidad de ocurrencia del riesgo.
    - **Monitoreo:** Seguimiento continuo de indicadores clave para detectar si el riesgo se vuelve más o menos probable.
    - **Manejo y Contingencia:** Planes de acción inmediatos para ejecutar si el riesgo finalmente se convierte en realidad.
4. **Seguimiento y Control:** Monitoreo diario o semanal para ajustar las prioridades según la tabla de riesgos.
5. **Aprendizaje y Base de Conocimiento:** Registro de lecciones aprendidas para actualizar la base institucional de riesgos.

**E. Artefactos de Registro:** Toda la estrategia se formaliza en el **Plan MMMR** (*Plan de Mitigación, Monitoreo y Manejo de Riesgos*) o mediante **Hojas de Información de Riesgo (HIR)** almacenadas en una base de datos.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                       1. IDENTIFICACIÓN DE RIESGOS                        │
 │    (Listas de verificación, componentes y promotores de riesgo)           │
 └─────────────────────────────────────┬─────────────────────────────────────┘
                                       │
 ┌─────────────────────────────────────▼─────────────────────────────────────┐
 │                   2. ANÁLISIS Y PROYECCIÓN DE RIESGOS                     │
 │      (Probabilidad [P] x Impacto [C] = Exposición al Riesgo [ER])         │
 └─────────────────────────────────────┬─────────────────────────────────────┘
                                       │
 ┌─────────────────────────────────────▼─────────────────────────────────────┐
 │                  3. PLANIFICACIÓN DE RIESGOS (PLAN MMMR)                  │
 │      (Estrategias de Mitigación, Monitoreo y Manejo de Contingencia)      │
 └─────────────────────────────────────┬─────────────────────────────────────┘
                                       │
 ┌─────────────────────────────────────▼─────────────────────────────────────┐
 │                      4. SEGUIMIENTO, CONTROL Y APRENDIZAJES               │
 │           (Revisión activa en el desarrollo y base de conocimiento)       │
 └───────────────────────────────────────────────────────────────────────────┘
```

### Monitoreo y Control del Proyecto

El **Monitoreo y Control** es el mecanismo táctico que permite evaluar el progreso real frente a lo planificado y tomar acciones correctivas oportunas.

- **Seguimiento mediante Productos de Trabajo:** El avance no se mide por opiniones subjetivas, sino por la finalización e inspección de productos de trabajo tangibles (modelos de análisis, código probado, documentos de diseño).
- **Mecanismos de Control Principales:**
    - **Revisiones Técnicas Formales (RTF):** Inspecciones entre pares para detectar errores tempranamente y verificar hitos de diseño y código.
    - **Reportes de Estado (*Status Reports*) y Minutas:** Comunicación periódica con la gerencia y el cliente para visibilizar el avance, el costo ejecutado y los problemas.
    - **Control Visibilizado en Ágil (*Burn-down / Burn-up Charts*):** Gráficos que comparan diariamente el trabajo restante frente a la meta del *Sprint* o *Release*.

### Métricas de Proyecto y Software

Las métricas proporcionan indicadores cuantitativos objetivos para ajustar el proceso, el proyecto o el producto.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                           MÉTRICAS DE PROCESO                             │
 │   (Estratégicas: Recopiladas a través de proyectos para mejorar la        │
 │    eficacia organizativa a largo plazo)                                  │
 └─────────────────────────────────────▲─────────────────────────────────────┘
                                       │
 ┌─────────────────────────────────────┴─────────────────────────────────────┐
 │                           MÉTRICAS DE PROYECTO                            │
 │   (Tácticas: Utilizadas por el líder de proyecto para evaluar el avance,  │
 │    rastrear riesgos y controlar el costo/tiempo en tiempo real)           │
 └─────────────────────────────────────▲─────────────────────────────────────┘
                                       │
 ┌─────────────────────────────────────┴─────────────────────────────────────┐
 │                           MÉTRICAS DE PRODUCTO                            │
 │   (Atributos internos: Miden tamaño, complejidad, calidad y defectos      │
 │    del software construido)                                              │
 └───────────────────────────────────────────────────────────────────────────┘
```

#### A. Dominios de las Métricas de Software

Las métricas se dividen formalmente en tres dominios interrelacionados:

#### B. Métricas Fundamentales de Proyecto

Existen cuatro métricas directas e indirectas básicas en la gestión tradicional y ágil:

1. **Esfuerzo:** Medido en persona-meses u horas aplicadas al desarrollo.
2. **Tamaño:** Medido en Líneas de Código (LOC), Puntos de Función (PF), Casos de Uso o Puntos de Historia.
3. **Tiempo Calendario:** Duración real observada entre hitos clave respecto a lo programado.
4. **Defectos:** Conteo de errores descubiertos en revisiones y pruebas, densidad de defectos y la **Eficiencia de Remoción de Defectos (ERD)**.

### Gobernanza y Madurez del Proceso (CMMI)

El modelo **CMMI (*Capability Maturity Model Integration*)** es el marco de referencia internacional emitido por el SEI / ISACA para evaluar y mejorar la capacidad de los procesos de desarrollo de software.

#### A. Representaciones de CMMI

- **Representación por Etapas (Niveles de Madurez 1 a 5):** Ofrece un camino de mejora organizacional prefijado evaluando conjuntos de Áreas de Proceso.
- **Representación Continua (Niveles de Capacidad 0 a 5):** Permite a la organización seleccionar el orden de mejora por cada Área de Proceso individual según sus metas de negocio.

#### B. Niveles de Madurez (Por Etapas) y Áreas de Proceso de Gestión de Proyectos

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │  Nivel 5: OPTIMIZADO        ──► Foco en la mejora continua e innovación. │
 ├───────────────────────────────────────────────────────────────────────────┤
 │  Nivel 4: CUANTITATIVAMENTE ──► Subprocesos medidos y controlados         │
 │           ADMINISTRADO          estadísticamente (QPM).                   │
 ├───────────────────────────────────────────────────────────────────────────┤
 │  Nivel 3: DEFINIDO          ──► Procesos estandarizados en la organización│
 │                                 (RSKM, IPM, DAR).                         │
 ├───────────────────────────────────────────────────────────────────────────┤
 │  Nivel 2: ADMINISTRADO      ──► Gestión disciplinada a nivel de proyecto  │
 │                                 (PP, PMC, SAM, REQM, PPQA, CM, MA).       │
 ├───────────────────────────────────────────────────────────────────────────┤
 │  Nivel 1: INICIAL           ──► Procesos impredecibles, reactivos y       │
 │                                 sin control.                              │
 └───────────────────────────────────────────────────────────────────────────┘
```

- **Nivel 1 - Inicial:** Procesos impredecibles, indocumentados y reactivos; la calidad depende del esfuerzo heroico individual.
- **Nivel 2 - Administrado:** Los proyectos se planifican, ejecutan, miden y controlan de acuerdo con políticas.
    - **Áreas de Proceso (AP) clave en Gestión de Proyectos:**
        - **PP (*Project Planning* / Planeación de Proyectos):** Establecimiento de estimaciones de alcance, esfuerzo y calendario.
        - **PMC (*Project Monitoring and Control* / Monitoreo y Control):** Seguimiento del progreso e inicio de acciones correctivas.
        - **SAM (*Supplier Agreement Management* / Gestión de Acuerdos con Proveedores):** Manejo de contratos y subcontratación.
        - **REQM (*Requirements Management* / Gestión de Requerimientos):** Control de cambios y trazabilidad de requisitos.
- **Nivel 3 - Definido:** Procesos estandarizados en toda la organización.
    - **Áreas de Proceso (AP) clave en Gestión de Proyectos:**
        - **RSKM (*Risk Management* / Gestión de Riesgos):** Identificación, análisis y mitigación continua de riesgos.
        - **IPM (*Integrated Project Management* / Gestión Integrada de Proyectos):** Adaptación del proceso estándar de la organización para cada proyecto.
- **Nivel 4 - Cuantitativamente Administrado:** Métricas cuantitativas y estadísticas aplicadas al control de subprocesos (**QPM - *Quantitative Project Management***).
- **Nivel 5 - Optimizado:** Mejora continua del proceso basada en el análisis de causas raíz de defectos (**CAR - *Causal Analysis and Resolution***).