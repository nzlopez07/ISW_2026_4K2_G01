# 📄 GA_Plan_Configuracion_ISW_2026.md

**Asignatura:** Ingeniería y Calidad de Software (ISW)  
**Curso:** 4K2 · Año 2026  
**Grupo:** Grupo 1  

---

## 1. Propósito y Alcance

El presente documento establece el Plan de Gestión de Configuración de Software (SCM) para el Grupo 1 de la asignatura Ingeniería y Calidad de Software (curso 4K2, 2026).

El objetivo de este plan es:
1. Definir la estructura estandarizada del repositorio de control de versiones (Git/GitHub) con nomenclatura numerada para resguardar el trabajo del grupo.
2. Identificar los Ítems de Configuración (IC) y sus reglas de nombrado, basadas en **campos en PascalCase (sin guiones internos) delimitados entre sí mediante guion bajo `_`**.
3. Establecer el criterio de Línea Base y el procedimiento de marcado mediante etiquetas anotadas (`v[MAJOR]`) en Git.

---

## 2. Estructura del Repositorio

```text
└── ISW_G1_4K2_2026
    ├── 📁 00_Gestion_Administrativa/
    │   ├── 📄 GA_Plan_Configuracion_ISW_2026.md
    │   ├── 📄 GA_Programa_Asignatura_ISW_2026.pdf
    │   ├── 📄 GA_Cronograma_ISW_2026.pdf
    │   └── 📄 GA_Informacion_General_Cursado.md
    │
    ├── 📁 01_Bibliografía/
    │   ├── 📁 Agilismo/
    │   ├── 📁 Ingenieria_de_Software/
    │   ├── 📁 Lean_y_Kanban/
    │   ├── 📁 SCM/
    │   ├── 📁 TDD/
    │   └── 📁 Testing_de_Software/
    │
    ├── 📁 02_Presentaciones_de_Clase/
    │   ├── 📄 PRE_01_IntroduccionIngenieriaSoftware.pdf
    │   ├── 📄 PRE_02_SCM.pdf
    │   ├── 📄 PRE_03_RequisitosAgilesUserStories.pdf
    │   └── 📄 PRE_04_EstimacionesAgiles.pdf (hasta PRE_15)
    │
    ├── 📁 03_Trabajos_Grupales/
    │   ├── 📁 Trabajos_Practicos/
    │   │   ├── 📄 Guia_Enunciados_TP_Evaluables_2026.pdf
    │   │   ├── 📁 TP_01/
    │   │   ├── 📁 TP_02/
    │   │   ├── 📁 TP_03/
    │   │   ├── 📁 TP_04/
    │   │   └── 📁 TP_05/ (hasta TP_13)
    │   └── 📁 Trabajos_de_Investigacion/
    │       ├── 📄 Guia_Lineamientos_TIG_2026.pdf
    │       ├── 📁 TIG_01_Exposicion_DespliegueDeProducto/
    │       └── 📁 TIG_02_PosterCientifico_FrameworksLeanAgile/
    │
    └── 📁 04_Material_de_Estudio/
        ├── 📁 Ejercicios_Practicos_Resueltos/
        │   ├── 📄 Guia_TPs_Resueltos_Catedra.pdf
        │   └── 📄 EJ_TestingCajaNegra_NicolasLopez.pdf
        ├── 📁 Notas_de_Clase/
        │   └── 📄 08-18_NicolasLopez_ClaseIntro.md
        └── 📁 Resumenes/
            └── 📄 Resumen_U01_IngenieriaSoftwareContexto_NicolasLopez.md
```

---

## 3. Ítems de Configuración (IC)

| Ítem de configuración | Regla de nombrado | Ubicación física |
|---|---|---|
| Plan de administración de configuración | `GA_Plan_Configuracion_ISW_2026.md` | `ISW_G1_4K2_2026/00_Gestion_Administrativa/` |
| Programa de la materia | `GA_Programa_Asignatura_ISW_2026.pdf` | `ISW_G1_4K2_2026/00_Gestion_Administrativa/` |
| Cronograma de cursada | `GA_Cronograma_ISW_2026.pdf` | `ISW_G1_4K2_2026/00_Gestion_Administrativa/` |
| Información general de cursado | `GA_Informacion_General_Cursado.md` | `ISW_G1_4K2_2026/00_Gestion_Administrativa/` |
| Bibliografía | `BIB_<Tema>_<NombreLibro>_<Autor>.<Extension>` | `ISW_G1_4K2_2026/01_Bibliografía/<Categoria>/` |
| Presentaciones teóricas | `PRE_<NroPresentacion>_<NombrePresentacion>.<Extension>` | `ISW_G1_4K2_2026/02_Presentaciones_de_Clase/` |
| Guía de trabajos prácticos evaluables | `Guia_Enunciados_TP_Evaluables_2026.pdf` | `ISW_G1_4K2_2026/03_Trabajos_Grupales/Trabajos_Practicos/` |
| Trabajos prácticos evaluables | `Entrega_TP_<NroTP>_G01_v<MAJOR>.<Extension>` | `ISW_G1_4K2_2026/03_Trabajos_Grupales/Trabajos_Practicos/TP_<NroTP>/` |
| Lineamientos de investigación | `Guia_Lineamientos_TIG_2026.pdf` | `ISW_G1_4K2_2026/03_Trabajos_Grupales/Trabajos_de_Investigacion/` |
| Trabajo de investigación 1 | `TIG_01_G01.<Extension>` | `ISW_G1_4K2_2026/03_Trabajos_Grupales/Trabajos_de_Investigacion/TIG_01_Exposicion_DespliegueDeProducto/` |
| Trabajo de investigación 2 | `TIG_02_G01.<Extension>` | `ISW_G1_4K2_2026/03_Trabajos_Grupales/Trabajos_de_Investigacion/TIG_02_PosterCientifico_FrameworksLeanAgile/` |
| Guía de ejercicios resueltos de cátedra | `Guia_TPs_Resueltos_Catedra.pdf` | `ISW_G1_4K2_2026/04_Material_de_Estudio/Ejercicios_Practicos_Resueltos/` |
| Ejercicios de estudio | `EJ_<Tema>_<NombreApellido>.<Extension>` | `ISW_G1_4K2_2026/04_Material_de_Estudio/Ejercicios_Practicos_Resueltos/` |
| Notas de clase | `<MM-DD>_<NombreApellido>_<Tema>.md` | `ISW_G1_4K2_2026/04_Material_de_Estudio/Notas_de_Clase/` |
| Resúmenes de estudio | `Resumen_<NroUnidad>_<Tema>_<NombreApellido>.<Extension>` | `ISW_G1_4K2_2026/04_Material_de_Estudio/Resumenes/` |

---

## 4. Glosario

| Sigla / Placeholder | Significado |
|---|---|
| `PascalCase + _` | Convención oficial: Cada campo del nombre se escribe en **PascalCase** (Mayúscula inicial por palabra, sin guion interno). El guion bajo `_` se usa únicamente como delimitador entre campos distintos. Ej: `08-18_NicolasLopez_ClaseIntro.md`. |
| `<GA>` | Gestión Administrativa. Prefijo para los archivos de gobierno del proyecto. |
| `<NombreArchivo>` | Nombre descriptivo del archivo administrativo en PascalCase. Ej: `Plan_Configuracion_ISW_2026`. |
| `<MM-DD>` | Fecha de la toma de nota en formato Mes-Día. Ej: `08-18`, `10-03`. |
| `<NombreApellido>` | Nombre y apellido del integrante en PascalCase sin guion interno. Ej: `NicolasLopez`, `JoaquinGomez`. |
| `<Tema>` | Nombre o título del tema en PascalCase sin guion interno. Ej: `SCMHerramientas`, `ClaseIntro`. |
| `<NombrePresentacion>` | Nombre o título de la presentación teórica según la cátedra en PascalCase. Ej: `IntroduccionIngenieriaSoftware`. |
| `<NroTP>` | Número a 2 dígitos que identifica el Trabajo Práctico. Ej: `01`, `04`, `10`. |
| `<NroPresentacion>` | Número a 2 dígitos asignado por la cátedra a la presentación teórica (`01`, `02`, ..., `15`). |
| `<MAJOR>` | Versión mayor incrementada por cada recepción de entrega evaluable y su corrección cuando correspondiera (`v1.0`, `v2.0`). |
| `<Extension>` | Extensión del archivo. Ej: `.pdf`, `.md`, `.docx`, `.xlsx`. |
| `ISW` | Ingeniería y Calidad de Software. |
| `TP` | Trabajo Práctico. |
| `TIG` | Trabajo de Investigación Grupal. |
| `PRE` | Presentación Teórica. |
| `BIB` | Bibliografía. |

---

## 5. Criterio de línea base

Queda establecido que luego de la devolución y puntuación de cada trabajo práctico evaluable, y si corresponde, luego de aplicar su correspondiente corrección va a ser definida una nueva línea base.

Cada línea base se marca mediante un **tag de Git** (`v[MAJOR]`): El mecanismo estándar es un tag anotado sobre un commit específico.

- **`MAJOR`** → Se incrementa con cada recepción de trabajo práctico evaluable y su corrección, si correspondiera (empieza en `v1.0`).

---

## 6. Líneas base disponibles

| Versión | Tag de Git | Fecha | Descripción |
|---|---|---|---|
| `v1.0` | `v1.0` | 18/08/2026 | Línea base inicial del repositorio para el TP evaluable 4 (Herramientas de SCM). |
