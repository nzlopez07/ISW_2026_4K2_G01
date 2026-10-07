# Práctico 1: Mis Gastos Familiares – Finanzas Personales Ágiles

**Requerimientos Ágiles: Historias de Usuario, Identificación de Roles y Alcance del MVP**  
**Materia:** Ingeniería y Calidad de Software (ICSW) – Curso 4K2 (2026)  
**Grupo:** Grupo 1  
**Versión:** `v1.0` (Entrega Oficial de Cátedra)

---

## 👥 Integrantes del Equipo

| # | Integrante | Legajo | Usuario GitHub |
|---|---|---|---|
| 1 | Sofia Britos | 90121 | @Sofii01 |
| 2 | Claudia Alca B. | 93842 | @Ciel7872 |
| 3 | Daniel Dragún | 91910 | @dragunDaniel |
| 4 | Lucas Pasolli | 94250 | @LucasPasolli |
| 5 | Joaquin Gomez Muñoz | 96019 | @Manolo1247 |
| 6 | Francisco González | 400680 | @7franc |
| 7 | López Daniel Nicolás | 97969 | @nzlopez07 |
| 8 | Franco Tacca | 94189 | @FrankensTak |
| 9 | Martin Boiero | 400650 | @MartinBoiero |
| 10 | Nicolas Farias | 94737 | @NicolasFarias33 |
| 11 | Florencia Amaya | 95865 | @FvAmaya |
| 12 | Jeremias Lopez Ferreyra | 401016 | @jeremiaslopez526-cpu |
| 13 | Enzo Aguzzi | 94764 | @Enzo1600 |
| 14 | Ignacio J. Cuello | 400827 | @IgnacioJCuello |
| 15 | Luciano Ivo Paglino | 95738 | @lucianopgl |

---

## 1. Definición y Justificación de la Hipótesis de Negocio (Lean Startup)

### Formulación de la Hipótesis
* **Hipótesis de Valor:** *"Las personas que administran economías personales y familiares tienen la necesidad de registrar sus egresos cotidianos de forma inmediata en el momento exacto en que ocurren. Si disponen de una aplicación móvil intuitiva, ágil y sin fricciones que les permita registrar un gasto en pocos segundos y consultar la planilla acumulada del mes corriente, adoptarán el producto como su herramienta de cabecera frente a alternativas engorrosas como hojas de cálculo tradicionales o anotaciones en papel."*
* **Hipótesis de Crecimiento y Adopción:** *"Los usuarios registrarán al menos el 70% de sus gastos menores diarios de forma consistente durante las primeras cuatro semanas de uso, validando que la simplicidad del producto supera la inercia de no registrar los consumos."*

### Justificación Conceptual y Enfoque Lean
* **Validación del hábito antes de la sofisticación:** El principal riesgo de negocio en productos de finanzas personales radica en la tasa de deserción por sobrecarga operativa. Construir reportes estadísticos avanzados, sincronización multi-cuenta o categorización predictiva antes de comprobar si los usuarios sostienen el hábito de registro constituye desperdicio (*waste / muda*).
* **Foco del MVP:** El núcleo del MVP se centra en el circuito mínimo de valor: registro e inicio de sesión persistente, alta ágil de categorías personalizadas, registro de gastos propios con validación estricta de fechas (no futuras) y visualización de la planilla del mes en curso con totalizador consolidado en cabecera.

---

## 2. Definición del Alcance del MVP (In Scope)

El MVP comprende el desarrollo de una solución mobile orientada al flujo esencial del usuario:

### Módulo de Acceso y Seguridad
* **US-00:** Registrar usuario *(User Story Canónica / Metro Patrón de Estimación)*
* **US-01:** Loguear usuario (Iniciar sesión)
* **US-02:** Cerrar sesión de usuario

### Módulo de Gestión de Gastos
* **US-03:** Registrar tipo de gasto
* **US-04:** Guardar gasto propio
* **US-05:** Generar listado de gastos del mes en curso

### Justificación de Inclusión
Se seleccionaron estas historias porque cubren el flujo operacional indispensable de punta a punta (*thin vertical slice*), posibilitando la captura de datos en tiempo real y su visualización inmediata sin dependencias técnicas complejas.

---

## 3. Definición del No Alcance (Out of Scope / No Contempla)

* **Registro y asignación de gastos a terceros / responsables adicionales:** En esta fase todo gasto se imputa al usuario activo; si el gasto pertenece a un tercero, se indica temporalmente en la descripción libre.
* **Sugerencia y autocompletado inteligente de nombres y apellidos (estilo Excel):** Se posterga para evitar desarrollo de algoritmos predictivos en la etapa inicial.
* **Consultas avanzadas con filtros combinados y ordenamientos dinámicos:** La planilla inicial se muestra preconfigurada para el mes corriente con orden cronológico descendente. Los filtros cruzados por rangos de fechas o montos se implementarán en la siguiente versión.
* **Totalizadores dinámicos segmentados según filtros:** Solo se despliega el total mensual general en cabecera.
* **Exportación a formatos externos (Excel, PDF, CSV):** No contemplado en MVP.
* **Sincronización multi-dispositivo y persistencia colaborativa:** El MVP opera de forma local/monousuario.

---

## 4. Identificación y Matriz de Roles

| Rol | Sigla | Tipo de Usuario | Participación en el MVP | Descripción de Perfil |
|---|---|---|---|---|
| **Ejecutor de Gastos** | `EG` | Externo | Directa | Usuario principal que descarga la app, gestiona sus categorías, carga consumos diarios y monitorea su planilla mensual. |
| **Familiar Asociado** | `FA` | Externo | Indirecta / Mitigada | Miembro del núcleo familiar cuyos consumos son absorbidos en las descripciones cargadas por el EG. |
| **Administrador del Sistema** | `ADM` | Interno | Manual / Operativa | Soporte técnico y mantenimiento de infraestructura fuera del software. |

---

## 5. User Story Canónica (Metro Patrón de Estimación)

### US-00: Registrar usuario
* **Card:** *Como Ejecutor de Gastos quiero registrarme en la aplicación para comenzar a analizar y gestionar mis gastos personales.*
* **Estimación:** **1 Story Point**
* **Justificación de Estimación:**
  * **Complejidad:** Baja. Formulario simple de 5 campos (DNI, nombre, apellido, usuario, contraseña) con validaciones estándar de formato y verificación de unicidad.
  * **Esfuerzo:** Bajo. Tarea técnica de baja dedicación resuelta mediante librerías estándar de autenticación.
  * **Incertidumbre:** Nula. El requerimiento funcional es transparente y no posee riesgos de diseño ni integración externa.
  * **Propósito como Metro Patrón:** Actúa como la unidad patrón de 1 SP, permitiendo estimar el resto del backlog por comparación relativa y triangulación (Planning Poker).

---

## 6. Tarjetas de User Stories del MVP

### Tarjeta 1: Loguear usuario (Iniciar sesión)
* **Frase verbal:** *Loguear usuario*
* **Card:** *Como Ejecutor de Gastos quiero iniciar sesión con mi usuario y contraseña para acceder a la aplicación y consultar o cargar mis gastos.*
* **Criterios de Aceptación:**
  * Debe permitir ingresar nombre de usuario y contraseña previamente registrados.
  * Debe autenticar las credenciales contra la base de datos de usuarios.
  * Si las credenciales coinciden, debe iniciar sesión y dirigir a la vista principal de la planilla de gastos.
  * Si las credenciales no coinciden, debe mostrar un mensaje de error genérico (*"Usuario o contraseña incorrectos"*) sin revelar cuál dato falló por motivos de seguridad.
  * La sesión iniciada debe persistir indefinidamente en el dispositivo (sin caducidad por tiempo) hasta que el usuario decida explícitamente cerrar sesión.
* **Pruebas de Usuario:**
  * Probar iniciar sesión con usuario y contraseña válidos y existentes. `(PASA)`
  * Probar iniciar sesión con usuario inexistente. `(FALLA)`
  * Probar iniciar sesión con usuario existente pero contraseña incorrecta. `(FALLA)`
  * Probar iniciar sesión dejando el campo usuario vacío. `(FALLA)`
  * Probar iniciar sesión dejando el campo contraseña vacío. `(FALLA)`
  * Probar cerrar y volver a abrir la aplicación verificando que la sesión permanezca activa sin solicitar login nuevamente. `(PASA)`
* **Estimación:** **1 Story Point**
* **Justificación de Estimación:**
  * **Complejidad:** Baja. Formulario elemental de dos campos y verificación estándar de hash de contraseña.
  * **Esfuerzo:** Bajo. Muy bajo tiempo de desarrollo apoyado en controladores de sesión estándar.
  * **Incertidumbre:** Nula. Requerimiento plenamente comprendido sin dudas de diseño ni tecnologías desconocidas.

---

### Tarjeta 2: Cerrar sesión de usuario
* **Frase verbal:** *Cerrar sesión de usuario*
* **Card:** *Como Ejecutor de Gastos quiero cerrar mi sesión activa para resguardar la privacidad de mi información económica cuando comparto el dispositivo.*
* **Criterios de Aceptación:**
  * Debe existir una opción accesible de "Cerrar sesión" en el menú principal o perfil del usuario.
  * Al seleccionar la opción, el sistema debe limpiar los tokens/datos de sesión almacenados en el dispositivo.
  * Debe redirigir de inmediato a la pantalla de bienvenida / login.
  * Una vez cerrada la sesión, no se debe poder navegar hacia las pantallas de gastos mediante el botón "Atrás" del dispositivo sin volver a iniciar sesión.
* **Pruebas de Usuario:**
  * Probar cerrar sesión con un usuario que tiene sesión activa y verificar redirección al login. `(PASA)`
  * Probar intentar cerrar sesión cuando no existe una sesión activa. `(FALLA)`
  * Probar presionar el botón atrás del navegador/móvil luego de cerrar sesión y verificar que no permita acceder a la planilla de gastos. `(PASA)`
* **Estimación:** **1 Story Point**
* **Justificación de Estimación:**
  * **Complejidad:** Baja. Destrucción de token de autenticación y redirección básica.
  * **Esfuerzo:** Bajo. Se resuelve con pocas líneas de código en el controlador de autenticación.
  * **Incertidumbre:** Nula. Flujo elemental sin factores de riesgo.

---

### Tarjeta 3: Registrar tipo de gasto (Categoría)
* **Frase verbal:** *Registrar tipo de gasto*
* **Card:** *Como Ejecutor de Gastos quiero registrar un tipo de gasto para clasificar mis egresos al momento de cargarlos.*
* **Criterios de Aceptación:**
  * Debe permitir ingresar el nombre del tipo de gasto (campo obligatorio, mínimo 3 caracteres, máximo 50 caracteres).
  * Debe permitir ingresar un comentario o descripción opcional (máximo 200 caracteres).
  * El nombre del tipo de gasto debe ser único para el usuario logueado (no sensible a mayúsculas/minúsculas).
  * Al guardar con éxito, la nueva categoría debe quedar disponible de forma inmediata en el selector desplegable de carga de gastos.
* **Pruebas de Usuario:**
  * Probar registrar un tipo de gasto con nombre no registrado y sin comentario opcional. `(PASA)`
  * Probar registrar un tipo de gasto con nombre y comentario opcional completos. `(PASA)`
  * Probar registrar un tipo de gasto con un nombre que ya existe para el mismo usuario. `(FALLA)`
  * Probar registrar un tipo de gasto con nombre vacío o con solo espacios en blanco. `(FALLA)`
  * Probar registrar un tipo de gasto con un nombre de menos de 3 caracteres. `(FALLA)`
* **Estimación:** **1 Story Point**
* **Justificación de Estimación:**
  * **Complejidad:** Baja. Formulario simple con un campo obligatorio y validación de unicidad en base de datos.
  * **Esfuerzo:** Bajo. Operación CRUD básica de catálogo secundario.
  * **Incertidumbre:** Nula. Claridad absoluta sobre la funcionalidad y su modelo de persistencia.

---

### Tarjeta 4: Guardar gasto propio
* **Frase verbal:** *Guardar gasto*
* **Card:** *Como Ejecutor de Gastos quiero guardar un gasto para tener un registro histórico y fidedigno de mis desembolsos diarios.*
* **Criterios de Aceptación:**
  * Debe permitir ingresar el monto del gasto, el cual debe ser numérico positivo mayor a cero (con hasta dos decimales).
  * Debe mostrar por defecto la fecha actual del sistema en el selector de fecha, permitiendo modificarla manualmente.
  * La fecha seleccionada nunca podrá ser posterior a la fecha actual del sistema (restricción estricta: fecha <= hoy).
  * Debe requerir obligatoriamente una descripción breve del gasto (mínimo 3 caracteres).
  * Debe permitir seleccionar un tipo de gasto entre las categorías previamente creadas por el usuario (o asignar una categoría "General" por defecto si no selecciona ninguna).
  * Debe asignar automáticamente el gasto como "propio" y asociar el nombre y apellido del usuario logueado como responsable.
  * Al guardar con éxito, debe persistir el registro, emitir un mensaje de confirmación y actualizar el listado de gastos.
* **Pruebas de Usuario:**
  * Probar guardar un gasto con todos los datos válidos (monto, fecha actual, tipo de gasto, descripción). `(PASA)`
  * Probar guardar un gasto modificando la fecha por una fecha anterior válida (fecha pasada). `(PASA)`
  * Probar guardar un gasto seleccionando una fecha futura (posterior a la actual). `(FALLA)`
  * Probar guardar un gasto con monto igual a cero o con valor negativo. `(FALLA)`
  * Probar guardar un gasto sin ingresar monto. `(FALLA)`
  * Probar guardar un gasto sin ingresar descripción. `(FALLA)`
  * Probar guardar un gasto sin seleccionar tipo de gasto, asignándose la categoría por defecto. `(PASA)`
  * Probar guardar un gasto verificando que el responsable asignado coincida con el usuario logueado. `(PASA)`
* **Estimación:** **3 Story Points**
* **Justificación de Estimación:**
  * **Complejidad:** Media. Involucra formulario interactivo con selectores de fecha, validaciones de reglas de negocio cruzadas (control temporal no futuro, tipos de datos decimales, persistencia relacional con categorías).
  * **Esfuerzo:** Medio. Requiere construcción de la pantalla de carga, validaciones del lado del cliente y servidor, y persistencia en base de datos.
  * **Incertidumbre:** Baja. El requerimiento funcional es claro; solo demanda asegurar la usabilidad móvil para una carga rápida.

---

### Tarjeta 5: Generar listado de gastos del mes en curso
* **Frase verbal:** *Generar listado de gastos*
* **Card:** *Como Ejecutor de Gastos quiero visualizar mis gastos del mes en una planilla para informarme de mi situación financiera consolidada.*
* **Criterios de Aceptación:**
  * Debe presentar una vista estructurada en formato tabular / lista con columnas: Fecha, Tipo de Gasto, Descripción, Monto y Responsable.
  * Por defecto debe cargar automáticamente los gastos correspondientes al mes calendario y año actuales.
  * Los registros deben ordenarse por fecha en forma cronológica descendente (el gasto más reciente arriba).
  * En la parte superior de la vista debe exhibir una tarjeta de resumen con la sumatoria monetaria total de los gastos del mes corriente.
  * Si el usuario no tiene gastos registrados en el mes actual, debe mostrar un mensaje amigable (*"No posees gastos registrados en este mes"*).
* **Pruebas de Usuario:**
  * Probar generar el listado de gastos teniendo registros cargados en el mes en curso y verificar orden cronológico descendente. `(PASA)`
  * Probar generar el listado en un mes en el que no existen gastos y verificar mensaje de estado vacío. `(PASA)`
  * Probar registrar un nuevo gasto y verificar que aparezca inmediatamente en el listado y actualice la sumatoria superior. `(PASA)`
  * Probar que los montos se muestren con formato de moneda estándar ($ con separador de miles y decimales). `(PASA)`
* **Estimación:** **3 Story Points**
* **Justificación de Estimación:**
  * **Complejidad:** Media. Consulta agregada a base de datos con filtrado temporal por rango de mes/año, ordenamiento y cálculo de sumatoria acumulada.
  * **Esfuerzo:** Medio. Maquetación responsive de grilla para pantallas móviles asegurando legibilidad sin desbordes horizontales.
  * **Incertidumbre:** Baja. Requerimiento funcional perfectamente delimitado; la técnica está dominada por el equipo.

---

## 7. Backlog Futuro / Release 2 (Fuera del MVP)

* **US-06: Registrar responsable de gastos (1 SP):** Permitir registrar miembros familiares adicionales para imputarles gastos.
* **US-07: Consultar gastos con filtros combinados y ordenamiento dinámico (3 SP):** Filtrar por responsable, categoría y rango libre de fechas, ordenando por cualquier columna y recalculando subtotales dinámicos.

---
📚 Universidad Tecnológica Nacional · Facultad Regional Córdoba · Cátedra de Ingeniería y Calidad de Software · 2026
