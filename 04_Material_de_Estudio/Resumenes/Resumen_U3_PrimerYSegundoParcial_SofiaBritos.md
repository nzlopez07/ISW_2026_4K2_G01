# Unidad 3 SCM

# **Gestión de Configuración de Software**

La **Gestión de Configuración de Software (SCM - *Software Configuration Management*)** es la disciplina de la ingeniería de software encargada de identificar, organizar, controlar y rastrear los cambios en todos los elementos que componen un sistema de software a lo largo de su ciclo de vida, garantizando la **integridad, trazabilidad y calidad** del producto.

## Bloque 1: Fundamentos de SCM, Objetivos, Elementos de Configuración (SCI), Líneas Base y Entornos

### Concepto, Propósito de SCM y Problemas que Resuelve

La **Gestión de Configuración de Software (SCM)** es una actividad "sombrilla" (*umbrella activity*) y una disciplina de soporte transversal a todo el proyecto de software, relevante a lo largo de todo el ciclo de vida del producto.

- **Definición Formal (ANSI/IEEE 828 / IEEE 610.12):** Es la disciplina que aplica dirección y monitoreo administrativo y técnico para identificar y documentar las características funcionales y físicas de los ítems de configuración, controlar los cambios en dichas características, registrar e informar el estado de los cambios y verificar el cumplimiento de los requerimientos.
- **Propósito Central (Edward Bersoff / IEEE):** Establecer y mantener la **integridad del producto de software** a lo largo de su ciclo de vida. Esto garantiza que el software satisfaga las necesidades del usuario, pueda ser rastreado completamente, cumpla los criterios de rendimiento, costo y expectativas de entrega, minimizando el esfuerzo perdido en reprocesos.
- **Problemas Clásicos que Resuelve SCM:**
    - **Sobreescritura y pérdida de cambios:** Evita que dos desarrolladores modifiquen simultáneamente el mismo archivo y uno pise el trabajo del otro.
    - **Pérdida de componentes o versiones:** Impide la falta de control sobre cuál es la versión más reciente o correcta.
    - **Desincronización de artefactos:** Mantiene la alineación entre requerimientos, código fuente, ejecutables y documentación de soporte.
    - **Regresión de fallas y doble mantenimiento:** Previene la reintroducción accidental de defectos previamente corregidos.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                        SISTEMA DE GESTIÓN SCM                             │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ • Elementos de Componentes: Repositorio y base de datos de objetos        │
 │ • Elementos de Proceso: Acciones y reglas de gestión de cambios           │
 │ • Elementos de Construcción: Herramientas de build automatizado           │
 │ • Elementos Humanos: Integración y uso por el equipo de software          │
 └───────────────────────────────────────────────────────────────────────────┘
```

### Ítems de Configuración de Software (SCI / IC)

Un **Ítem de Configuración de Software (SCI)** es todo artefacto u objeto de información producido durante el proceso de ingeniería de software que necesita ser identificado, compartido, versionado y controlado de forma individual respecto a su evolución.

#### Categorización de los SCIs por Ámbito del Proyecto:

1. **Ítems del Producto:** Artefactos que componen directamente la solución entregable. Incluye la Especificación de Requerimientos (ERS), modelos de arquitectura y diseño, código fuente, archivos de configuración, librerías, scripts de base de datos, casos de prueba y manuales de usuario [8, 14, 66–68].
2. **Ítems del Proyecto:** Artefactos de gestión a nivel global, como el Plan de Proyecto, Cronogramas, Plan de SCM, Plan de Calidad (QA) y Planes de Pruebas.
3. **Ítems de Iteración / Sprint:** Artefactos vinculados a un ciclo temporal acotado, como el Sprint Backlog, reportes de errores/defectos, métricas del sprint y notas de liberación (*release notes*).
4. **Entorno y Herramientas:** Las versiones específicas de editores, compiladores e IDEs también pueden colocarse bajo control de configuración (*congeladas*) para garantizar que la reconstrucción del producto sea reproducible de forma idéntica en el futuro.

```
                               ESTRUCURA DE SCI
                                      │
           ┌──────────────────────────┼──────────────────────────┐
           ▼                          ▼                          ▼
    ÍTEMS DE PRODUCTO           ÍTEMS DE PROYECTO          ÍTEMS DE ITERACIÓN
 • ERS / Requerimientos     • Plan de Proyecto          • Sprint Backlog
 • Código Fuente y Datos    • Plan de SCM y QA          • Reporte de Defectos
 • Casos de Prueba          • Cronograma de Trabajo     • Notas de Release
```

### Líneas Base (*Baselines*)

Una **Línea Base (*Baseline*)** es una especificación o producto de software que ha sido revisado y aprobado formalmente mediante una puerta de calidad, sirviendo como base fija para desarrollos posteriores y que solo puede modificarse a través de un procedimiento formal de control de cambios.

- **Propósito:** Congela el estado del sistema en un momento clave, permitiendo volver atrás en el tiempo, aislar el trabajo en progreso y reproducir con exactitud cualquier versión del entorno.
- **Identificación:** Se marcan de forma explícita en el repositorio mediante **etiquetas (*tags*)** que referencian el conjunto exacto de versiones de cada SCI involucrado.
- **Evolución de Líneas Base en el Ciclo de Vida:**
    - **Línea Base Funcional / de Requerimientos:** Aprobación de la ERS o lista de requerimientos iniciales.
    - **Línea Base de Diseño / Asignada:** Congelamiento de los modelos de arquitectura y diseño de componentes.
    - **Línea Base de Desarrollo / Codificación:** Código verificado que ha superado las pruebas unitarias e integración interna.
    - **Línea Base de Producto / Release:** Configuración empaquetada y auditada entregada formalmente al cliente.

### El Repositorio SCM y la Estructura de Espacios de Trabajo (*Workspaces*)

El **Repositorio SCM** es el metamodelo y centro de almacenamiento centralizado que conserva todos los SCIs, resguardando su historial de revisiones, relaciones de trazabilidad y metadatos asociados.

Para evitar interferencias entre desarrolladores durante el trabajo simultáneo, SCM estructura el flujo de trabajo en áreas o espacios diferenciados:

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │               ESTRUCURA DE ESPACIOS DE TRABAJO (WORKSPACES)               │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ 1. Espacio Privado del Desarrollador (Engineering Workspace):             │
 │    Propiedad individual. Aísla la edición y pruebas locales (*Check-out*) │
 │    sin afectar al resto del equipo.                                       │     
 ├───────────────────────────────────────────────────────────────────────────┤
 │ 2. Área Controlada del Proyecto / SCM Workspace:                          │
 │    Propiedad de SCM. Almacena artefactos que pasaron puertas de calidad   │
 │    y están disponibles para integración interna (*Read-only*).            │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ 3. Área de Pruebas (Test Workspace):                                      │
 │    Propiedad del equipo de testing. Contiene entornos y conjuntos de      │
 │    prueba para ejecutar validaciones sobre versiones liberadas.           │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ 4. Área del Cliente / Producción (Customer-Controlled Workspace):         │
 │    Contiene las líneas base comerciales y versiones liberadas al público, │
 │    modificables solo por autorización del cliente/CCB.                    │
 └───────────────────────────────────────────────────────────────────────────┘
```

## Bloque 2: Funciones y Actividades Clave de SCM

La **Gestión de Configuración de Software (SCM)** organiza sus actividades operativas en cuatro funciones interrelacionadas que garantizan la trazabilidad, previsibilidad y control sobre los cambios.

### Identificación de la Configuración

Es la primera actividad de SCM y consiste en seleccionar, estructurar y nombrar de forma unívoca todos los objetos de información que estarán bajo control del proyecto.

- **Identificación Unívoca y Reglas de Nombrado:** Cada elemento de configuración (SCI) recibe una designación única, una convención de nombres estandarizada y un esquema de versionado.
- **Estructura del Repositorio:** Define la jerarquía de almacenamiento y la ubicación exacta de los artefactos dentro del repositorio de SCM.
- **Trazabilidad Bidireccional:** Permite vincular cada elemento del producto con sus dependencias. Así, un requerimiento de la ERS se rastrea hacia su diseño, sus módulos de código fuente, los casos de prueba asociados y la versión o *release* final donde fue incorporado.

```
  [Requerimiento ERS] ───► [Módulo de Diseño] ───► [Código Fuente] ───► [Caso de Prueba] ───► [Release]
```

### Control de Cambios (*Configuration Change Control*)

El control de cambios es el procedimiento formal que regula cómo se solicitan, evalúan, aprueban e implementan las modificaciones sobre los artefactos que forman parte de una **Línea Base**.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                      FLUJO DEL CONTROL DE CAMBIOS                         │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ 1. Solicitud de Cambio (CR / CRF): Registrada por el cliente o usuario.  │
 │ 2. Análisis de Impacto Técnico: Evaluación de costo, efectos colaterales. │
 │ 3. Decisión del Comité (CCB): Aprobación, rechazo o diferimiento.          │
 │ 4. Orden de Cambio (OCI / ECO): Autorización formal para modificar código. │
 │ 5. Verificación e Integración: Check-in en el repositorio y auditoría.   │
 └───────────────────────────────────────────────────────────────────────────┘
```

#### A. La Solicitud de Cambio (*Change Request - CR / CRF*)

Todo cambio —sea la corrección de un defecto o un nuevo requerimiento— debe formalizarse mediante un **Formato de Petición de Cambio (CRF)**. Este documento registra el solicitante, la descripción de la modificación, la prioridad, los componentes potencialmente afectados y las estimaciones iniciales de esfuerzo.

#### B. El Comité de Control de Cambios (*Change Control Board - CCB*)

El **CCB** es el organismo formal responsable de evaluar el impacto estratégico, técnico y económico de los cambios propuestos.

- **Composición:** Está integrado de forma multidisciplinaria por representantes de todas las áreas involucradas: **Análisis/Diseño, Desarrollo, Testing, Gestión de Proyecto y Clientes/Interesados**.
- **Evaluación de Impacto:** El CCB analiza aspectos técnicos, posibles efectos colaterales en otros módulos, costos adicionales y el impacto en la fecha de entrega acordada.
- **Decisión:** El CCB determina si el cambio se **Acepta**, se **Rechaza** o se **Difiere** para una versión posterior.

#### C. Orden de Cambio de Ingeniería (OCI / ECO)

Si la solicitud es aprobada por el CCB, se emite una **Orden de Cambio de Ingeniería (OCI)**. La OCI asigna formalmente a los desarrolladores la responsabilidad de extraer el SCI (*Check-out*), implementar la modificación, ejecutar las pruebas y promover el artefacto actualizado a la siguiente línea base (*Check-in*).

### Registro e Informe del Estado (*Configuration Status Accounting - CSA*)

El **Registro e Informe del Estado (CSA)** es la función administrativa que mantiene la visibilidad continua sobre la evolución del sistema y el estado de todas las peticiones de cambio.

- **Propósito:** Registrar qué ocurrió, quién lo hizo, cuándo sucedió y qué otros elementos resultan afectados.
- **Preguntas clave que responde la Contabilidad de Estado:**
    - ¿Cuál es el estado actual de un ítem de configuración específico?
    - ¿Una solicitud de cambio fue aprobada, rechazada o está pendiente en el CCB?
    - ¿Qué versión exacta del código o *release* contiene la corrección de un error o la mejora implementada?
    - ¿Cuáles son las diferencias exactas entre la versión actual y la línea base anterior?

### Auditorías de Configuración (*Configuration Audits*)

Mientras que las **Revisiones Técnicas Formales (RTF)** evalúan la corrección técnica del código o diseño, las **Auditorías de Configuración** verifican de forma independiente la **integridad del producto**, garantizando que el sistema construido coincida con la documentación y los requerimientos aprobados.

```
                               AUDITORÍAS DE SCM
                                       │
           ┌───────────────────────────┴───────────────────────────┐
           ▼                                                       ▼
AUDITORÍA FUNCIONAL (FCA)                               AUDITORÍA FÍSICA (PCA)
• Compara el software ejecutable                        • Compara el código fuente
  contra la ERS.                                          contra la documentación.
• Pregunta: ¿Construimos lo que                          • Pregunta: ¿La documentación
  el cliente especificó?                                  refleja exactamente el código?
```

- **Auditoría de Configuración Funcional (FCA - *Functional Configuration Audit*):**
    - Evalúa el software construido (ejecutables y pruebas) frente a la **Especificación de Requerimientos de Software (ERS)**.
    - Su objetivo es comprobar que el código implementa **únicamente y de forma completa** las funciones y capacidades especificadas, verificando la actualización de la matriz de rastreabilidad.
- **Auditoría de Configuración Física (PCA - *Physical Configuration Audit*):**
    - Compara el código desarrollado con la documentación de soporte y manuales entregables.
    - Su propósito es asegurar que la documentación técnica que se entregará al usuario o cliente sea consistente y describa con precisión la versión real del software.

## Bloque 3: SCM en Entornos Ágiles y Prácticas Continuas (*Agile SCM*)

En entornos ágiles y de entregas frecuentes, la **Gestión de Configuración de Software** deja de concebirse como una burocracia de control restrictivo para convertirse en una disciplina automatizada de soporte directo al equipo de desarrollo.

### La Filosofía de SCM en el Paradigma Ágil (*Agile SCM*)

El Manifiesto Ágil y las prácticas de ingeniería modernas transforman la aplicación de SCM guiándose por principios clave:

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                         PRINCIPIOS DE AGILE SCM                           │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ • Servir al equipo de desarrollo en lugar de fiscalizarlo                 │
 │ • Responder activamente al cambio en lugar de intentar evitarlo           │
 │ • Automatización total e integración "sin fricción"                      │
 │ • Eliminación del desperdicio (Lean SCM) y documentación liviana          │
 │ • Feedback continuo sobre la calidad, estabilidad e integridad del código │
 └───────────────────────────────────────────────────────────────────────────┘
```

- **Servicio al Practicante:** La configuración sirve para facilitar la colaboración diaria del equipo y no para crear barreras administrativas.
- **Visibilidad y Automatización:** Tareas como la construcción de binarios (*builds*), la ejecución de pruebas y el despliegue se automatizan al máximo para reducir el margen de error humano y el tiempo de ciclo.
- **Responsabilidad Compartida:** La calidad e integridad del repositorio es responsabilidad colectiva de todo el equipo de desarrollo, no de un departamento aislado.

### Patrones de Ramificación y Mezcla (*Branching & Merging*)

Una **rama (*branch*)** es una línea de código independiente que se bifurca del tronco principal (*trunk, master o mainline*) para permitir la experimentación, el desarrollo de nuevas características o la corrección de errores sin alterar la versión estable.

```
       ┌─────────────── [ Feature Branch (Desarrollo aislado) ] ──────────────┐
       │                                                                      │
       │                                                          (Merge)     ▼
 ──────┴─────────────── [ Mainline / Trunk (Estado Estable) ] ────────────────┴──────
```

#### A. Reglas Doradas de Ramificación (Henrik Kniberg / SCM Patterns)

1. **Mantener el Tronco (*Mainline*) en Estado Verde / Consistente:** La línea principal debe compilar perfectamente y superar todas las pruebas automáticas en todo momento. Debe ser posible generar una versión funcional liberable desde la línea principal en cualquier instante.
2. **Ramificar Solo cuando sea Necesario:** Crear ramas en exceso incrementa exponencialmente la complejidad administrativa y el costo de mantenimiento.
3. **Sincronizar e Integrar Frecuentemente:** Si se trabaja en una rama, se deben traer diariamente los cambios de la línea principal a la rama local para evitar acumulaciones de diferencias.
4. **Evitar el "Infierno de la Integración" (*Integration Hell*):** Retrasar la mezcla (*merge*) de ramas paralelas durante semanas o meses genera incompatibilidades masivas cuyo costo de resolución suele superar al tiempo de codificación original.

#### B. Comparativa: *Feature Branching* (GitFlow) vs. *Trunk-Based Development*

- **Feature Branching (GitFlow):** Se crean ramas independientes de larga duración por cada característica o historia de usuario. Si no se gestiona con disciplina estricta, puede generar cuellos de botella prolongados durante la fase de integración.
- **Trunk-Based Development (Desarrollo Basado en Tronco):** Todos los desarrolladores envían e integran sus pequeños cambios de código directamente a una única rama principal varias veces al día. Es el patrón predilecto en metodologías ágiles maduras y *Continuous Delivery*.

### Prácticas Continuas: CI, CD y Despliegue Automatizado

Las prácticas continuas constituyen el motor técnico que impulsa la entrega incremental de valor de forma segura.

```
  ┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
  │ INTEGRACIÓN CONTINUA │ ───► │  ENTREGA CONTINUA    │ ───► │ DESPLIEGUE CONTINUO  │
  │        (CI)          │      │        (CD)          │      │     (Continuous)     │
  └──────────────────────┘      └──────────────────────┘      └──────────────────────┘
   • Check-in frecuente.         • Empaquetado automático.      • Despliegue automático
   • Build y tests en           • Listo para desplegar          en producción tras pasar
     servidor de CI.              a staging / producción.        todas las pruebas.
```

#### A. Integración Continua (CI - *Continuous Integration*)

Práctica donde cada desarrollador integra sus cambios en el repositorio centralizado al menos una vez al día.

- **El Servidor de Compilación (CI Server):** Al detectar un nuevo *commit*, un servidor dedicado (ej. Jenkins, Hudson, GitHub Actions, GitLab CI) descarga el código, ejecuta la construcción (*build*) completa y corre la suite automatizada de pruebas unitarias y de integración.
- **Juez de Salud y Fin de "En mi máquina funciona":** El servidor de CI actúa como el árbitro neutral de la salud del código. Si una prueba falla, el equipo detiene sus tareas secundarias para reparar la línea principal de forma inmediata.

#### B. Entrega Continua (CD - *Continuous Delivery*) y Despliegue Continuo

- **Entrega Continua:** Asegura que cada cambio validado en el repositorio genere automáticamente un artefacto ejecutable e instalable que haya superado las pruebas de aceptación.
- **Despliegue Continuo (*Continuous Deployment*):** Extiende la automatización enviando de forma transparente y sin intervención manual cada incremento aprobado directamente al entorno de producción real.

#### C. La Definición de Terminado (*Definition of Done*) en SCM

En agilidad, una Historia de Usuario no se considera completada hasta que su código fuente está **fusionado en la línea principal (*trunk*)**, probado en un entorno dedicado de integración y libre de conflictos de mezcla.

### Infraestructura como Código (IaC) y Gestión de Entornos

Para garantizar que las compilaciones y pruebas sean 100% reproducibles en cualquier máquina o servidor, el repositorio SCM debe contener **todos los artefactos requeridos para construir el proyecto desde cero**:

- **Artefactos Bajo Control:** Además del código fuente, se incluyen archivos de configuración, esquemas de bases de datos, scripts de construcción (Make, Maven, Gradle), archivos de definición de contenedores (Dockerfiles, Kubernetes manifests) y conjuntos de datos de prueba.
- **Aislamiento de Entornos:** Evita las discrepancias de comportamiento entre los entornos locales del desarrollador, el servidor de integración (*staging*) y el entorno de producción real.

## Bloque 4: Herramientas, Gobernanza, Métricas y Madurez (CMMI)

En este último bloque de **Gestión de Configuración de Software (SCM)**, abordamos la evolución tecnológica de las herramientas, la integración con marcos internacionales de capacidad y madurez (*CMMI*), y la medición cuantitativa de la disciplina.

### Evolución de Herramientas de SCM: Centralizadas vs. Distribuidas

Las herramientas de control de versiones son el núcleo técnico que sostiene las políticas de SCM en cualquier proyecto de software. A lo largo de la historia de la ingeniería de software, han evolucionado en dos arquitecturas principales:

```
  MODELO CENTRALIZADO (CVS, Subversion)            MODELO DISTRIBUIDO (Git, Mercurial)
  ┌───────────────────────────────────┐            ┌───────────────────────────────────┐
  │        Servidor Central           │            │        Servidor Remoto            │
  │     (Base de Datos/Versiones)     │            │    (Copia Completa de Historial)  │
  └─────────────────┬─────────────────┘            └─────────────────┬─────────────────┘
                    │ (Check-out/Check-in)                           │ (Push/Pull)
         ┌──────────┴──────────┐                          ┌──────────┴──────────┐
         ▼                     ▼                          ▼                     ▼
  ┌─────────────┐       ┌─────────────┐            ┌─────────────┐       ┌─────────────┐
  │ Cliente A   │       │ Cliente B   │            │ Cliente A   │       │ Cliente B   │
  │ (Archivos)  │       │ (Archivos)  │            │(Repo Local) │       │(Repo Local) │
  └─────────────┘       └─────────────┘            └─────────────┘       └─────────────┘
```

#### A. Control de Versiones Centralizado (ej. CVS, Subversion / SVN)

- **Arquitectura:** Un único servidor centralizado conserva la base de datos con todo el historial de versiones y revisiones. Los desarrolladores extraen (*check-out*) los archivos a sus estaciones locales y devuelven (*check-in*) sus modificaciones directamente al servidor.
- **Ventajas:** Mayor facilidad de administración y control centralizado de permisos de acceso por parte de la organización.
- **Desventajas:** Punto único de falla (*Single Point of Failure*); si el servidor central se cae o no hay conexión de red, los desarrolladores no pueden realizar *commits*, consultar el historial ni crear ramas.

#### B. Control de Versiones Distribuido (ej. Git, Mercurial)

- **Arquitectura:** Cada desarrollador posee en su equipo una copia idéntica y completa del repositorio de código, incluyendo todo el historial de versiones y ramas.
- **Ventajas:**
    - Trabajo *offline*: Los desarrolladores realizan *commits*, ramificaciones (*branches*) y revisiones de historial localmente sin depender de la red.
    - Alta disponibilidad: Si el servidor principal falla, cualquier copia local actúa como respaldo completo para restaurar el sistema.
    - Flujos de trabajo flexibles: Habilita esquemas de colaboración mediante *Pull Requests* y revisiones entre pares antes de la integración al *mainline*.

### SCM en CMMI: El Área de Proceso CM (Nivel 2 de Madurez)

En el modelo de madurez **CMMI (*Capability Maturity Model Integration*)**, la **Administración de la Configuración (CM)** se clasifica formalmente como un **Área de Proceso (AP) de la categoría de Soporte** ubicada en el **Nivel 2 de Madurez (Administrado / *Managed*)**.

```
 ┌───────────────────────────────────────────────────────────────────────────┐
 │               ÁREA DE PROCESO: CM (CMMI DEV V1.3 - NIVEL 2)               │
 ├───────────────────────────────────────────────────────────────────────────┤
 │ Propósito: Establecer y mantener la integridad de los productos de trabajo│
 │ mediante la identificación, control de cambios, registro del estado y     │
 │ auditorías formales de configuración.                                     │
 └───────────────────────────────────────────────────────────────────────────┘
```

**Metas Específicas (SG) de CM en CMMI:**

1. **SG 1 - Establecer Líneas Base (*Establish Baselines*):** Identificar los ítems de configuración de software (SCIs) que compondrán las líneas base en momentos clave del proyecto.
2. **SG 2 - Rastrear y Controlar los Cambios (*Track and Control Changes*):** Evaluar, aprobar e implementar solicitudes de cambio sobre los artefactos bajo control de línea base de forma transparente y disciplinada.
3. **SG 3 - Establecer la Integridad (*Establish Integrity*):** Documentar el estado de los ítems de configuración e inspeccionar la correspondencia entre los ejecutables y la documentación mediante auditorías de SCM.

### Métricas de SCM

La recolección de métricas dentro de la disciplina de SCM permite a la gerencia evaluar la estabilidad del repositorio, la carga de trabajo y la fluidez del proceso de integración.

- **Frecuencia de Integración (*Commit / Merge Rate*):** Cantidad de integraciones realizadas por desarrollador o equipo por día/semana. Refleja el tamaño de los incrementos y el grado de adopción de prácticas de integración continua.
- **Tiempo de Ciclo del Cambio (*Change Lead Time*):** Mapea la duración desde que se registra una Solicitud de Cambio (CR) o se crea una rama hasta que el código probado se fusiona y despliega en producción.
- **Tasa de Conflictos de Mezcla (*Merge Conflict Rate*):** Porcentaje de integraciones que requieren intervención manual para resolver inconsistencias entre ramas paralelas.
- **Cobertura de Trazabilidad de Requerimientos:** Proporción de ítems de configuración (código, pruebas, scripts) vinculados de forma explícita a un requerimiento de negocio o solicitud aprobada.