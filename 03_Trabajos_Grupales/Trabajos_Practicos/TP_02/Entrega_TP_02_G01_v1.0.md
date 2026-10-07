# Práctico 2: EcoHarmony Park – Bioparque Interactivo

**Requerimientos Ágiles: User Stories, Estimaciones y Alcance del MVP**  
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
* **Hipótesis de Valor:** *"Los visitantes del bioparque EcoHarmony Park experimentan demoras en filas físicas de boletería, desorientación dentro del predio de múltiples hectáreas y desaprovechamiento de las actividades guiadas y horarios de alimentación por falta de información dinámica en tiempo real. Los visitantes adoptarán masivamente una aplicación móvil que les permita comprar entradas anticipadas con acreditación inmediata por Mercado Pago, explorar un mapa interactivo sectorizado por colores con puntos de interés clave, consultar horarios de exhibición con alertas de proximidad temporal y reservar cupos en experiencias enriquecedoras de aforo limitado."*
* **Hipótesis de Viabilidad y Canal Digital:** *"Al menos el 60% de los visitantes que adquieran entradas anticipadas utilizarán la pasarela de pago digital (Mercado Pago) a través de la aplicación, descongestionando los puntos de venta presenciales y permitiendo planificar con antelación los aforos de las actividades guiadas."*

### Justificación Conceptual y Enfoque Lean
* **Eliminación de desperdicios y mitigación de riesgos:** Desarrollar sistemas administrativos web integrales, motores de geolocalización satelital en tiempo real o servicios complejos de notificaciones push antes de validar que los visitantes descargan y usan la aplicación en el parque constituye un riesgo crítico de sobreingeniería (*waste / muda*).
* **Foco del MVP:** El MVP se focaliza en la experiencia directa del visitante (*foco en el visitante*). Se prioriza el acceso público y sin fricción a la información (mapa interactivo, horarios de alimentación, reserva de actividades) sin exigir registro previo, solicitando el alta de cuenta únicamente para la transacción crítica de compra de entradas. Toda la gestión administrativa de horarios, animales y shows se resuelve inicialmente por base de datos y procesos manuales del personal del parque.

---

## 2. Definición del Alcance del MVP (In Scope)

El MVP comprende el conjunto nuclear de funcionalidades orientadas a enriquecer la visita presencial y habilitar la compra digital de entradas:

### Módulo de Orientación y Actividades en el Parque (Acceso Público sin Registro)
* **US-01:** Ver mapa interactivo del parque
* **US-02:** Ver horarios de alimentación de animales
* **US-03:** Inscribirse a actividad del parque

### Módulo Comercial y Transaccional (Acceso Autenticado)
* **US-04:** Registrar usuario visitante
* **US-05:** Loguear usuario visitante
* **US-06:** Comprar entradas al bioparque con Mercado Pago

### Módulo Administrativo Nuclear
* **US-00:** Registrar show del día *(User Story Canónica / Metro Patrón de Estimación)*

### Justificación de Inclusión
Se articulan armónicamente los dos grandes motores de valor del proyecto: la orientación y enriquecimiento de la visita presencial (sin barreras de login para maximizar la adopción) y la digitalización y cobro electrónico de entradas (con login y pasarela de pago segura).

---

## 3. Definición del No Alcance (Out of Scope / No Contempla)

* **Geolocalización del visitante en tiempo real (seguimiento continuo por GPS):** Se descarta en esta etapa para evitar complejidad de calibración satelital en zonas arboladas y consumo excesivo de batería del dispositivo móvil; el mapa inicial es panorámico e interactivo por sectores.
* **Notificaciones Push automatizadas en segundo plano:** Sustituido en el MVP por el aviso visual dinámico en pantalla (*"¡Apúrate que ya comienza!"*) para aquellos eventos programados dentro de los próximos 60 minutos.
* **Módulo Web / ABM Administrativo de Sectores, Exhibiciones, Animales y Cuidadores:** Los administradores cargan y actualizan los cronogramas directamente en base de datos.
* **Gestión de membresías anuales, pases VIP o tarifas corporativas:** En el MVP solo se contemplan entradas generales tarificadas por cantidad y edad en días operativos del parque.
* **Cancelaciones automáticas y reembolsos desde la app:** Se resuelven de forma manual a través del canal de atención al cliente en administración.

---

## 4. Identificación y Matriz de Roles

| Rol | Sigla | Tipo de Usuario | Participación en el MVP | Descripción de Perfil |
|---|---|---|---|---|
| **Visitante General** | `VG` | Externo | Directa (Pública) | Turista o visitante que recorre el bioparque y consulta mapa, horarios y actividades sin registrarse. |
| **Visitante Comprador** | `VC` | Externo | Directa (Autenticado) | Usuario registrado que adquiere entradas al parque mediante la pasarela digital de pago. |
| **Administrador del Parque** | `ADM` | Interno | Directa y Operativa | Personal del bioparque que configura el show del día y administra catálogos por base de datos. |
| **Cuidador de Animales** | `CU` | Interno | Indirecta | Personal operativo referenciado como responsable a cargo en los horarios de alimentación. |

---

## 5. User Story Canónica (Metro Patrón de Estimación)

### US-00: Registrar show del día
* **Card:** *Como Administrador del bioparque quiero registrar el nombre y horario del show especial del día para que los visitantes puedan consultarlo desde la aplicación.*
* **Estimación:** **1 Story Point**
* **Justificación de Estimación:**
  * **Complejidad:** Baja. Formulario simple con solo dos campos obligatorios (nombre del show y horario) y validaciones elementales de formato.
  * **Esfuerzo:** Bajo. Pantalla mínima de captura sin lógica condicional dependiente ni integraciones externas.
  * **Incertidumbre:** Nula. Comprensión absoluta de las reglas de negocio y tecnología estándar totalmente dominada.
  * **Propósito como Metro Patrón:** Constituye el pivote atómico de 1 SP de mínima complejidad y máxima certidumbre, utilizado para calibrar por comparación relativa (triangulación en Planning Poker) el resto del backlog.

---

## 6. Tarjetas de User Stories del MVP

### Tarjeta 1: Ver mapa interactivo del parque
* **Frase verbal:** *Ver mapa del parque*
* **Card:** *Como Visitante del parque quiero ver el mapa interactivo para obtener información sobre la distribución geográfica del predio y ubicar puntos de interés.*
* **Criterios de Aceptación:**
  * Debe desplegar una vista panorámica del parque dividida en tres sectores diferenciados por colores: *"Terrestres"*, *"Acuáticos"* y *"Aéreos"*.
  * El mapa debe contener íconos interactivos posicionados en sus coordenadas correspondientes:
    * Ícono **"Inodoro"**: identifica los sanitarios distribuidos en el parque.
    * Ícono **"Bolsa"**: identifica las tiendas y puntos de venta oficiales.
    * Ícono **"Micrófono"**: identifica la ubicación del show especial del día.
  * Al hacer clic sobre el ícono de *"Micrófono"*, debe abrirse una ventana modal o tooltip que informe el nombre del show programado y su horario.
  * Si no hay ningún show programado para la fecha, al pulsar el ícono de micrófono debe mostrar un mensaje explicativo (*"No hay show programado para el día de hoy"*).
  * Debe permitir realizar zoom in y zoom out para explorar las distintas áreas del predio.
* **Pruebas de Usuario:**
  * Probar ver el mapa del parque visualizando los tres sectores diferenciados por color y los íconos (Inodoro, Bolsa, Micrófono) en sus ubicaciones correspondientes. `(PASA)`
  * Probar presionar el ícono de micrófono un día con show programado y verificar que despliegue nombre del show y horario. `(PASA)`
  * Probar presionar el ícono de micrófono un día en el cual no hay show registrado y verificar aviso informativo. `(PASA)`
  * Probar cargar el mapa interactivo en modo offline o sin conectividad y verificar manejo controlado con mensaje de reintento. `(PASA)`
* **Estimación:** **5 Story Points**
* **Justificación de Estimación:**
  * **Complejidad:** Media. Requiere maquetación gráfica interactiva, manejo de capas vectoriales por color y asociación de eventos de clic a coordenadas de íconos.
  * **Esfuerzo:** Alto. Exige diseño cartográfico digital del bioparque, posicionamiento preciso de puntos de interés e interactividad fluida en pantallas táctiles móviles.
  * **Incertidumbre:** Media. No existe duda de negocio, pero sí demanda calibración técnica sobre el renderizado del mapa sin degradar la memoria del teléfono.

---

### Tarjeta 2: Ver horarios de alimentación de animales
* **Frase verbal:** *Ver horarios de alimentación*
* **Card:** *Como Visitante del parque quiero ver los horarios de alimentación de los animales para planificar mi recorrido y no perderme las exhibiciones.*
* **Criterios de Aceptación:**
  * Para cada horario de alimentación programado se debe exhibir: especie, nombre del animal, edad, hora programada, sector del parque (Terrestres, Acuáticos o Aéreos) y cuidador encargado (nombre y apellido).
  * Los horarios deben listarse ordenados cronológicamente desde los más próximos a la hora actual en adelante.
  * No deben mostrarse horarios de alimentación con fechas y horas ya transcurridas.
  * La lista debe abarcar los horarios planificados hasta un máximo de siete (7) días en el futuro.
  * Debe permitir filtrar los horarios seleccionando una fecha de visita específica comprendida dentro de la semana próxima.
  * Para aquellos horarios cuya hora programada se encuentre a una hora o menos de comenzar, debe exhibirse de forma destacada el mensaje: *"¡Apúrate que ya comienza!"*.
* **Pruebas de Usuario:**
  * Probar visualizar los horarios de alimentación ordenados por proximidad temporal mostrando todos los datos requeridos. `(PASA)`
  * Probar filtrar los horarios seleccionando una fecha válida dentro de los próximos 7 días. `(PASA)`
  * Probar filtrar seleccionando una fecha pasada y verificar que el sistema rechace la selección o la deshabilite. `(FALLA)`
  * Probar filtrar seleccionando una fecha posterior a siete días y verificar que el sistema no lo permita. `(FALLA)`
  * Probar visualizar el mensaje *"¡Apúrate que ya comienza!"* en un horario que inicia en 45 minutos. `(PASA)`
  * Probar consultar la sección cuando no hay horarios registrados para la fecha seleccionada y verificar mensaje de estado vacío. `(PASA)`
* **Estimación:** **3 Story Points**
* **Justificación de Estimación:**
  * **Complejidad:** Media. Validación de ventanas temporales (máximo 7 días, bloqueo de horas pasadas), cálculo reactivo de la cuenta regresiva de 60 minutos y ordenamiento dinámico.
  * **Esfuerzo:** Medio. Construcción de tarjetas informativas atractivas y filtros de calendario en la vista móvil.
  * **Incertidumbre:** Baja. Requerimiento funcional nítido con lógica temporal bien delimitada.

---

### Tarjeta 3: Inscribirse a actividad del parque
* **Frase verbal:** *Inscribirse a actividad*
* **Card:** *Como Visitante del parque quiero inscribirme a una actividad guiada para reservar mi lugar en las experiencias especiales de cupo limitado.*
* **Criterios de Aceptación:**
  * El sistema debe permitir elegir una actividad del catálogo oficial: *"Tirolesa"*, *"Safari"*, *"Palestra"* y *"Jardinería"*.
  * Debe requerir seleccionar un horario dentro de los turnos disponibles que cuenten con cupo restante.
  * Debe solicitar obligatoriamente los datos del participante: nombre y apellido, DNI, edad y correo electrónico.
  * Si la actividad elegida demanda indumentaria de seguridad (ej. arnés en Tirolesa o Palestra), debe exigir seleccionar el talle de vestimenta (XS, S, M, L, XL). Si la actividad no lo requiere (ej. Jardinería), dicho campo no debe solicitarse.
  * Debe exigir la aceptación explícita de los Términos y Condiciones específicos de la actividad antes de confirmar la reserva.
  * Al confirmar, el sistema descuenta un cupo disponible y envía automáticamente un correo electrónico al visitante con el resumen de la inscripción y un código QR identificador.
* **Pruebas de Usuario:**
  * Probar inscribirse a una actividad con cupos disponibles completando datos, talle requerido y aceptando términos y condiciones. `(PASA)`
  * Probar inscribirse a una actividad que ya completó su cupo máximo para el horario seleccionado. `(FALLA)`
  * Probar inscribirse a una actividad que demanda talle de vestimenta sin seleccionar el talle. `(FALLA)`
  * Probar inscribirse a Jardinería verificando que no se exija talle de indumentaria. `(PASA)`
  * Probar confirmar la inscripción sin marcar la casilla de aceptación de términos y condiciones. `(FALLA)`
  * Probar recepción del correo con el código QR y verificar que el aforo disponible de la actividad disminuya en 1 unidad. `(PASA)`
* **Estimación:** **3 Story Points**
* **Justificación de Estimación:**
  * **Complejidad:** Media. Validación concurrente de cupos en tiempo real, campos condicionales según el tipo de actividad y despacho de comprobante con código QR.
  * **Esfuerzo:** Medio. Desarrollo de formulario wizard multi-paso, reglas condicionales y servicio de mensajería transaccional.
  * **Incertidumbre:** Baja. Reglas de negocio explícitas y tecnología estándar de reservas.

---

### Tarjeta 4: Registrar usuario visitante
* **Frase verbal:** *Registrar usuario*
* **Card:** *Como Visitante del parque quiero registrarme con mi correo electrónico y contraseña para habilitar la compra de entradas a través de la aplicación.*
* **Criterios de Aceptación:**
  * Debe permitir ingresar una dirección de correo electrónico válida y una contraseña personal.
  * La contraseña debe poseer al menos 8 caracteres y contener al menos una letra mayúscula y un número.
  * Debe verificar que la dirección de correo electrónico no se encuentre previamente registrada en la base de datos.
  * Al registrarse con éxito, debe enviar un correo de bienvenida y permitir continuar de inmediato con el flujo de compra.
* **Pruebas de Usuario:**
  * Probar registrar usuario con correo válido no registrado y contraseña que cumpla con los requisitos. `(PASA)`
  * Probar registrar usuario con un correo que ya existe en el sistema. `(FALLA)`
  * Probar registrar usuario con formato de email inválido. `(FALLA)`
  * Probar registrar usuario con una contraseña débil (menos de 8 caracteres o sin números). `(FALLA)`
* **Estimación:** **1 Story Point**
* **Justificación de Estimación:**
  * **Complejidad:** Baja. Formulario estándar con validaciones de sintaxis y unicidad.
  * **Esfuerzo:** Bajo. Módulo rutinario de autenticación.
  * **Incertidumbre:** Nula. Flujo convencional completamente conocido.

---

### Tarjeta 5: Loguear usuario visitante
* **Frase verbal:** *Loguear usuario*
* **Card:** *Como Visitante registrado quiero iniciar sesión en la aplicación para acceder a mis datos y completar la compra de entradas.*
* **Criterios de Aceptación:**
  * Debe permitir ingresar correo electrónico y contraseña registrados.
  * Debe autenticar las credenciales y generar la sesión activa en el dispositivo.
  * Ante credenciales incorrectas, debe exhibir mensaje de error seguro (*"Credenciales incorrectas"*).
* **Pruebas de Usuario:**
  * Probar iniciar sesión con email y contraseña válidos. `(PASA)`
  * Probar iniciar sesión con email o contraseña incorrectos. `(FALLA)`
  * Probar iniciar sesión dejando campos en blanco. `(FALLA)`
* **Estimación:** **1 Story Point**
* **Justificación de Estimación:**
  * **Complejidad:** Baja. Verificación directa de credenciales.
  * **Esfuerzo:** Bajo. Componente elemental de seguridad.
  * **Incertidumbre:** Nula. Arquitectura estándar de autenticación.

---

### Tarjeta 6: Comprar entradas al bioparque con Mercado Pago
* **Frase verbal:** *Comprar entradas*
* **Card:** *Como Visitante registrado quiero comprar entradas para el bioparque indicando fecha, cantidad y medio de pago para asegurar mi acceso y agilizar el ingreso.*
* **Criterios de Aceptación:**
  * El usuario debe seleccionar una fecha de visita válida que coincida con los días de apertura del parque (excluyendo días de cierre por mantenimiento).
  * Debe indicar la cantidad de entradas requeridas (restricción: mínimo 1, máximo 10 entradas por transacción).
  * Por cada entrada debe registrar la edad del asistente para aplicar la categoría tarifaria correspondiente (Menor, Adulto, Jubilado).
  * El sistema calcula y exhibe el importe total desglosado a pagar.
  * Debe permitir elegir la modalidad de pago:
    * **Efectivo en boletería:** Emite una reserva con código de barras/QR para abonar presencialmente el día de la visita.
    * **Tarjeta online:** Redirige al checkout seguro de **Mercado Pago** mediante integración con su API.
  * Al completarse el pago digital de forma exitosa mediante webhook/retorno de Mercado Pago, el sistema cambia el estado a *"Abonada"*, genera las entradas digitales con código QR único por visitante y despacha un correo de confirmación con los tickets adjuntos.
* **Pruebas de Usuario:**
  * Probar comprar entradas seleccionando fecha de visita operativa, cantidad menor a 10, edades de los visitantes y pago exitoso vía Mercado Pago con confirmación por email. `(PASA)`
  * Probar comprar entradas seleccionando una fecha en la cual el bioparque se encuentra cerrado. `(FALLA)`
  * Probar solicitar más de 10 entradas en una misma operación. `(FALLA)`
  * Probar seleccionar 0 entradas o valor negativo. `(FALLA)`
  * Probar pagar con Mercado Pago simulando transacción rechazada por la tarjeta y verificar que no se emitan entradas. `(FALLA)`
  * Probar seleccionar opción de pago en efectivo y verificar emisión de reserva pendiente de pago. `(PASA)`
* **Estimación:** **8 Story Points**
* **Justificación de Estimación:**
  * **Complejidad:** Alta. Involucra formulario maestro-detalle con tarifas dinámicas por edad, integración con pasarela de pago externa (Mercado Pago), manejo de webhooks asíncronos y generación de tickets con QR cifrado.
  * **Esfuerzo:** Alto. Construcción de checkout, integración con SDK de pasarela de pago, validación de retornos seguros y despacho de correo transaccional.
  * **Incertidumbre:** Media. Dependencia de servicio externo de terceros (Mercado Pago) y políticas de expiración de transacciones pendientes.

---

## 7. Backlog Futuro / Release 2 (Fuera del MVP)

* **US-07: Visualización de ubicación en tiempo real con GPS en el mapa (8 SP):** Triangulación satelital para mostrar la posición actual del visitante en el mapa interactivo.
* **US-08: Notificaciones Push de recordatorio de exhibiciones (5 SP):** Envío de alertas nativas del sistema operativo en segundo plano.
* **US-09: Panel web administrativo integral (8 SP):** Portal de gestión para dar de alta sectores, exhibiciones, cuidadores y shows del día desde una interfaz web gráfica.

---
📚 Universidad Tecnológica Nacional · Facultad Regional Córdoba · Cátedra de Ingeniería y Calidad de Software · 2026
