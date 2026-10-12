1. **Analizar los Criterios de Aceptación (CA):**

* **Usuario:** El comprador debe ser un usuario previamente registrado en la plataforma
* **Datos de entrada:** Se debe indicar la fecha de visita (actual o futura, dentro de los días de apertura del parque), la cantidad de entradas (máximo 10), la edad de cada visitante y el tipo de pase (VIP o regular)**.**
* **Pago:** Seleccionar la forma de pago (efectivo para pagar en boletería o tarjeta con redirección a Mercado Pago)**.**
* **Confirmación:** Al finalizar, se debe informar la cantidad de entradas compradas junto con la fecha y enviar un mensaje de confirmación vía mail

2. **Diseñar las Pruebas (Fase Red):**

Escribe las pruebas automatizadas (unitarias o de aceptación) que **deben fallar** inicialmente porque la funcionalidad aún no está desarrollada

* **Casos de éxito (Pass):**
  * Probar comprar entradas con fecha válida, cantidad igual mayor a 10 edades correctas, tipo de pase y forma de pago seleccionada (efectivo o Mercado Pago), verificando que llegue el mail de confirmación
* **Casos de error (Fail):**
  * Probar comprar entradas sin seleccionar forma de pago.
  * Probar ingresar una fecha de visita en la que el parque está cerrado o una fecha pasada.
  * Probar ingresar una cantidad de entradas mayor a 10.
  * Probar realizar la compra sin estar registrado o logueado.

3. **Escribir el Código Mínimo (Fase Green):**

* Desarrolla el código más simple y directo posible (puedes utilizar valores hardcodeados en una primera instancia) para lograr que todas las pruebas diseñadas pasen a estado verde.

4. **Refactorizar (Fase Refactor):**

* Revisa el código para mejorar la calidad, eliminar duplicaciones, aplicar las reglas de estilo de código del grupo y estructurar las clases/métodos correctamente.
* Ejecuta las pruebas nuevamente para asegurarte de que todas siguen pasando satisfactoriamente después de los cambios.

5. **Preparar la Entrega y Demostración:**

* Asegúrate de tener documentadas las decisiones de diseño y listo el entorno para mostrar el funcionamiento de la aplicación junto con la ejecución de las pruebas automatizadas.
