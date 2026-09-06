# 📦 Entrega_TP_04_G01_v1.0.md

**Asignatura:** Ingeniería y Calidad de Software (ISW)  
**Curso:** 4K2 · Año 2026  
**Grupo:** Grupo 1  
**Trabajo Práctico N° 4:** Gestión de Configuración del Software (SCM)  
**Versión:** `v1.0` (Línea Base Inicial)  

---

## 👥 Integrantes del Equipo

| #   | Integrante          | Legajo | Usuario GitHub  |
| --- | ------------------- | ------ | --------------- |
| 1   | Sofia Britos        | 90121  | @Sofii01        |
| 2   | Claudia Alca B.     | 93842  | @Ciel7872       |
| 3   | Daniel Dragún       | 91910  | @dragunDaniel   |
| 4   | Lucas Pasolli       | 94250  | @LucasPasolli   |
| 5   | Joaquin Gomez Muñoz | 96019  | @Manolo1247     |
| 6   | Francisco González  | 400680 | @7franc         |
| 7   | López Daniel Nicolás| 97969  | @nzlopez07      |
| 8   | Franco Tacca        | 94189  | @FrankensTak    |
| 9   | Martin Boiero       | 400650 | @MartinBoiero   |
| 10  | Nicolas Farias      | 94737  | @NicolasFarias33|
| 11  | Florencia Amaya     | 95865  | @FvAmaya        |
| 12  | Jeremias Lopez Ferreyra | 401016 | @jeremiaslopez526-cpu|
| 13  | Enzo Aguzzi         | 94764  | @Enzo1600       |
| 14  | Ignacio J. Cuello   | 400827 | @IgnacioJCuello |
| 15  | Luciano Ivo Paglino | 95738  | @lucianopgl     |

---

## 1. Introducción y Objetivo del TP4

El objetivo de este trabajo práctico es definir y formalizar el Plan de Administración de la Configuración de Software (SCM) para el Grupo 1 de la asignatura Ingeniería y Calidad de Software (curso 4K2, año 2026).

A través de este plan se establece:
* La estructura numerada de carpetas del repositorio en GitHub (`ISW_2026_4K2_G01`).
* La clasificación de los Ítems de Configuración (IC) identificando su tipo de procedencia (*Cátedra*, *Clase* y *Producción Propia*).
* La regla de nombrado estandarizada basada en delimitadores `_` entre campos y formato `PascalCase` interno por campo.
* El criterio de Línea Base (`v[MAJOR]`) y la explicación detallada de la tabla de seguimiento.

---

## 2. Estructura del Repositorio

El repositorio se organiza con una nomenclatura numerada estandarizada en la raíz para separar los aspectos administrativos, bibliográficos, teóricos, entregables de trabajos prácticos y materiales de estudio:

```text
ISW_2026_4K2_G01/
├── 📁 00_Gestion_Administrativa/ (Programa, Cronograma, Planificación y Acuerdos de Cátedra)
├── 📁 01_Bibliografía/ (Agilismo, SCM, Testing, TDD, Lean_y_Kanban)
├── 📁 02_Presentaciones_de_Clase/ (Presentaciones teóricas de la cátedra PRE_01 a PRE_16)
├── 📁 03_Trabajos_Grupales/
│   ├── 📁 Trabajos_Practicos/ (Guía de enunciados y carpetas TP_01 a TP_13)
│   └── 📁 Trabajos_de_Investigacion/ (Lineamientos y carpetas TIG_01 y TIG_02)
└── 📁 04_Material_de_Estudio/ (Ejercicios resueltos, Notas de Clase y Resúmenes)
```

---

## 3. Ítems de Configuración (IC)

La siguiente tabla detalla la clasificación completa de los Ítems de Configuración del proyecto, especificando su procedencia, regla de nomenclatura estandarizada y su ubicación física relativa dentro del repositorio:

| Ítem de Configuración | Tipo de Ítem | Regla de Nomenclatura | Ubicación Física |
|---|---|---|---|
| Programa de la materia | Cátedra | `GA_Programa_Asignatura_ISW_2026.pdf` | `00_Gestion_Administrativa/` |
| Cronograma de cursada | Cátedra | `GA_Cronograma_ISW_2026.xlsx` | `00_Gestion_Administrativa/` |
| Planificación de la asignatura | Cátedra | `GA_Planificacion_ISW_2026.pdf` | `00_Gestion_Administrativa/` |
| Acuerdos de comunicación con cátedra | Cátedra | `GA_Acuerdos_Comunicacion.pdf` | `00_Gestion_Administrativa/` |
| Bibliografía oficial | Cátedra / Externa | `BIB_<Tema>_<NombreLibro>_<Autor>.<ext>` | `01_Bibliografía/<Categoria>/` |
| Presentaciones teóricas de clase | Cátedra | `PRE_<NroPresentacion>_<NombrePresentacion>.<ext>` | `02_Presentaciones_de_Clase/` |
| Guía de enunciados de TPs evaluables | Cátedra | `Guia_Enunciados_TP_Evaluables_2026.pdf` | `03_Trabajos_Grupales/Trabajos_Practicos/` |
| Resolución de Trabajo Práctico 4 (SCM) | Producción Propia | `Entrega_TP_04_G01_v<MAJOR>.<ext>` | `03_Trabajos_Grupales/Trabajos_Practicos/TP_04/` |
| Entregas de TPs Evaluables (01 a 13) | Producción Propia | `Entrega_TP_<NroTP>_G01_v<MAJOR>.<ext>` | `03_Trabajos_Grupales/Trabajos_Practicos/TP_<NroTP>/` |
| Lineamientos de investigación (TIGs) | Cátedra | `Lineamientos_Investigacion.pdf` | `03_Trabajos_Grupales/Trabajos_de_Investigacion/` |
| Trabajo de Investigación 1 (TIG 1) | Producción Propia | `TIG_01_G01.<ext>` | `03_Trabajos_Grupales/Trabajos_de_Investigacion/TIG_01_Exposicion_DespliegueDeProducto/` |
| Trabajo de Investigación 2 (TIG 2) | Producción Propia | `TIG_02_G01.<ext>` | `03_Trabajos_Grupales/Trabajos_de_Investigacion/TIG_02_PosterCientifico_FrameworksLeanAgile/` |
| Guía de ejercicios resueltos de cátedra | Cátedra | `Guia_TPs_Resueltos_Catedra.pdf` | `04_Material_de_Estudio/Ejercicios_Practicos_Resueltos/` |
| Ejercicios de estudio resueltos | Producción Propia | `EJ_<Tema>_<NombreApellido>.<ext>` | `04_Material_de_Estudio/Ejercicios_Practicos_Resueltos/` |
| Notas de clase y apuntes | Clase | `<MM-DD>_<NombreApellido>_<Tema>.<ext>` | `04_Material_de_Estudio/Notas_de_Clase/` |
| Resúmenes de estudio | Producción Propia | `Resumen_U<NroUnidad>_<Tema>_<NombreApellido>.<ext>` | `04_Material_de_Estudio/Resumenes/` |

---

## 4. Definición y Criterio de Línea Base

### Definición
Se establece una nueva línea base tras la evaluación y puntuación de cada trabajo práctico evaluable, incluyendo las correcciones correspondientes en caso de ser requeridas por la cátedra.

Cada línea base se marca formalmente mediante un **tag anotado de Git** utilizando la nomenclatura **`v[MAJOR]`**, donde:
* **`MAJOR`** → Representa el número de versión principal y se incrementa secuencialmente tras la devolución, calificación y eventual corrección aprobada de cada entrega evaluable (comenzando en `v1.0` para la entrega inicial del TP4).

### Explicación de la Tabla de Líneas Base
La tabla de líneas base disponibles registra la trazabilidad del estado del repositorio mediante cuatro columnas fundamentales:
1. **Versión (`v[MAJOR]`):** Identificador semántico de la línea base aprobada.
2. **Tag de Git:** Etiqueta anotada creada en Git asociada al commit exacto en el que se congeló la versión.
3. **Fecha:** Día de establecimiento de la línea base tras la calificación/corrección.
4. **Descripción:** Detalle del alcance del entregables y el hito alcanzado.

#### Tabla de Líneas Base Disponibles

| Versión | Tag de Git | Fecha | Descripción |
|---|---|---|---|
| `v1.0` | `v1.0` | 06/09/2026 | Línea base inicial del repositorio correspondiente a la corrección del TP4 (Herramientas de SCM). |

---

## 5. Automatización y Verificación de Nomenclatura (CI/CD)

Para garantizar la integridad del repositorio y evitar errores de tipeo o nombres inválidos, el grupo implementó una automatización con **GitHub Actions** en `.github/workflows/verify_filenames.yml` que ejecuta el script `.github/scripts/verify_filenames.py`.

Cada vez que un integrante sube cambios a `main`, el bot verifica que los archivos cumplan con las reglas de nombrado y pertenezcan a la estructura definida.

---

📚 Universidad Tecnológica Nacional · Facultad Regional Córdoba · Ingeniería y Calidad de Software · 2026
