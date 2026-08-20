import os
import sys
import re

# Reglas de nombrado por carpeta según el Plan de Configuración SCM
REGLAS = [
    {
        "carpeta": r"^00_Gestion_Administrativa/",
        "patron": r"^00_Gestion_Administrativa/GA_[A-Z][a-zA-Z0-9_]*\.(pdf|xlsx|md|docx)$",
        "formato": "GA_<NombreArchivo>.<ext>",
        "ejemplo": "GA_Programa_Asignatura_ISW_2026.pdf"
    },
    {
        "carpeta": r"^02_Presentaciones_de_Clase/",
        "patron": r"^02_Presentaciones_de_Clase/PRE_\d{2}_[A-Z][a-zA-Z0-9]+\.(pdf|pptx)$",
        "formato": "PRE_<NroPresentacion>_<NombrePresentacion>.<ext>",
        "ejemplo": "PRE_01_IntroduccionIngenieriaSoftware.pdf"
    },
    {
        "carpeta": r"^03_Trabajos_Grupales/Trabajos_Practicos/",
        "patron": r"^03_Trabajos_Grupales/Trabajos_Practicos/(Guia_Enunciados_TP_Evaluables_2026\.pdf|TP_00_Guia_Enunciados_Evaluables\.pdf|TP_\d{2}/.*|Entrega_TP_\d{2}_G01_v\d+(\.\d+)?\.[a-zA-Z0-9]+)$",
        "formato": "Entrega_TP_<NroTP>_G01_v<MAJOR>.<ext>",
        "ejemplo": "Entrega_TP_04_G01_v1.0.pdf"
    },
    {
        "carpeta": r"^03_Trabajos_Grupales/Trabajos_de_Investigacion/",
        "patron": r"^03_Trabajos_Grupales/Trabajos_de_Investigacion/(Guia_Lineamientos_TIG_2026\.pdf|TIG_00_Lineamientos_Investigacion\.pdf|TIG_\d{2}_[A-Za-z0-9_]+/(TIG_\d{2}_G01\.[a-zA-Z0-9]+|\.gitkeep))$",
        "formato": "TIG_<NroTIG>_G01.<ext>",
        "ejemplo": "TIG_01_G01.pdf"
    },
    {
        "carpeta": r"^04_Material_de_Estudio/Ejercicios_Practicos_Resueltos/",
        "patron": r"^04_Material_de_Estudio/Ejercicios_Practicos_Resueltos/(Guia_TPs_Resueltos_Catedra\.pdf|EJ_00_Guia_Resueltos_Catedra\.pdf|EJ_[A-Z][a-zA-Z0-9]+_[A-Z][a-zA-Z0-9]+\.[a-zA-Z0-9]+)$",
        "formato": "EJ_<Tema>_<NombreApellido>.<ext>",
        "ejemplo": "EJ_TestingCajaNegra_NicolasLopez.pdf"
    },
    {
        "carpeta": r"^04_Material_de_Estudio/Notas_de_Clase/",
        "patron": r"^04_Material_de_Estudio/Notas_de_Clase/\d{2}-\d{2}_[A-Z][a-zA-Z0-9]+_[A-Z][a-zA-Z0-9]+\.md$",
        "formato": "<MM-DD>_<NombreApellido>_<Tema>.md",
        "ejemplo": "08-18_NicolasLopez_ClaseIntro.md"
    },
    {
        "carpeta": r"^04_Material_de_Estudio/Resumenes/",
        "patron": r"^04_Material_de_Estudio/Resumenes/Resumen_U\d{2}_[A-Z][a-zA-Z0-9]+_[A-Z][a-zA-Z0-9]+\.[a-zA-Z0-9]+$",
        "formato": "Resumen_U<NroUnidad>_<Tema>_<NombreApellido>.<ext>",
        "ejemplo": "Resumen_U01_IngenieriaSoftwareContexto_NicolasLopez.pdf"
    }
]

def verificar_nombres():
    errores = []

    for raiz, _, archivos in os.walk("."):
        for archivo in archivos:
            if archivo == ".gitkeep" or ".git" in raiz or ".github" in raiz:
                continue

            ruta = os.path.relpath(os.path.join(raiz, archivo), ".").replace("\\", "/")

            if ruta == "README.md":
                continue

            for regla in REGLAS:
                if re.search(regla["carpeta"], ruta):
                    if not re.match(regla["patron"], ruta):
                        errores.append({
                            "archivo": ruta,
                            "formato": regla["formato"],
                            "ejemplo": regla["ejemplo"]
                        })

    if errores:
        print("[ERROR] Se encontraron archivos que no cumplen la regla de nombrado:\n")
        for item in errores:
            print(f"  * Archivo invalido: '{item['archivo']}'")
            print(f"    --> Formato esperado: {item['formato']}")
            print(f"    --> Ejemplo correcto: {item['ejemplo']}\n")
        sys.exit(1)
    else:
        print("[OK] Todos los archivos cumplen perfectamente las reglas de nombrado del Plan SCM.")

if __name__ == "__main__":
    verificar_nombres()
