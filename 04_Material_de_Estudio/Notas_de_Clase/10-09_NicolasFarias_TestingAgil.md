### 1. Concepto Fundamental: Testing Ágil vs. Tradicional (Cascada)

- En el enfoque tradicional, el testing es una fase al final del desarrollo (verificación) y el ciclo lleva meses o años.
- En los entornos ágiles, el testing no es una fase, sino una **actividad continua** que ocurre en iteraciones de días.
- El objetivo en un modelo tradicional es "buscar bugs", mientras que el objetivo en Agile es **prevenir bugs**.

### 2. El Manifiesto del Testing Ágil

Este manifiesto plantea 5 cambios de mentalidad clave para los equipos:
- Valorar la prevención de defectos sobre encontrar defectos.
- Valorar realizar pruebas durante el proceso sobre hacer pruebas al final.
- Valorar entender lo que se está probando sobre simplemente verificar la funcionalidad.
- Valorar ayudar a construir un mejor sistema sobre la intención de "romper" el sistema.
- Valorar que la calidad es responsabilidad de todo el equipo sobre la idea de que solo el tester es responsable.
### 3. Los 9 Principios del Testing en Proyectos Ágiles

1. El testing se mueve hacia adelante en el proyecto.
2. El testing no es una fase.
3. Todos los miembros del equipo hacen testing.
4. Se debe reducir la latencia (demora) del feedback.
5. Las pruebas representan las expectativas del usuario.
6. Se debe mantener el código limpio y corregir los defectos rápido.
7. Se busca reducir la sobrecarga de documentación de las pruebas.
8. Las pruebas son parte obligatoria del criterio de "Done" (Terminado).
9. Se cambia el enfoque de probar al final a un enfoque "Conducido por Pruebas".
### 4. Prácticas Concretas de Testing

- **TDD (Test Driven Development):** Desarrollo conducido por pruebas, basado en el ciclo _Red (escribir prueba que falla) -> Green (hacer que pase) -> Refactor (mejorar el código)_.
- **ATDD (Acceptance Test Driven Development):** Desarrollo conducido por pruebas de aceptación, donde se explora la funcionalidad con ejemplos antes de programar.
- Se utilizan pruebas exploratorias y control de versión conjunto para las pruebas y el código fuente.
- Se implementan pruebas automatizadas de unidad, integración y de regresión a nivel de sistema.
### 5. El Rol del Tester en el Equipo Ágil

El tester interactúa constantemente con todas las partes del equipo:

- **Con el Product Owner (PO):** Ayuda a preparar historias de usuario, define criterios de aceptación y comprende mejor el dominio del negocio.
- **Con los Developers:** Define estrategias de prueba, automatiza pruebas funcionales (ATDD), detecta bugs brindando feedback temprano y sugiere mejoras de usabilidad.
- **Con el System Team:** Ayuda a preparar el ambiente de pruebas, valida el estado "Done" de las historias, reporta métricas de calidad y confirma la aceptación final junto al PO.
### 6. Cuadrantes del Testing Ágil

Clasifican los tipos de pruebas según su propósito y enfoque:

- **Q1 (Apoyo al equipo / Tecnológico):** Pruebas unitarias y de componentes (generalmente automatizadas).
- **Q2 (Apoyo al equipo / Negocio):** Pruebas funcionales, pruebas de historias, ejemplos y prototipos (automatizadas y manuales).
- **Q3 (Criticar al producto / Negocio):** Pruebas exploratorias, pruebas de usabilidad y UAT o pruebas de aceptación de usuario (ejecución manual).
- **Q4 (Criticar al producto / Tecnológico):** Pruebas de rendimiento, carga, seguridad y otros atributos de calidad utilizando herramientas específicas.
### 7. La Pirámide del Testing

- **Pirámide Agile:** La gran base (80-90%) está formada por pruebas unitarias automatizadas y rápidas. El centro (5-15%) son las pruebas de aceptación/API, y solo la punta (1-5%) son pruebas de GUI (Interfaz Gráfica) manuales o end-to-end.
- **Pirámide Tradicional (Anti-patrón):** Suele estar invertida, donde el 80-90% del esfuerzo se gasta en pruebas lentas de GUI al final del desarrollo, y hay muy pocas pruebas unitarias.
### 8. Beneficios de la Automatización

Automatizar pruebas en entornos ágiles aporta grandes ventajas al equipo, tales como:

- Rápida ejecución y reusabilidad de los casos.
- Mayor cobertura de código y precisión en los resultados.
- Mayor alcance de las pruebas y reducción de costos a largo plazo.