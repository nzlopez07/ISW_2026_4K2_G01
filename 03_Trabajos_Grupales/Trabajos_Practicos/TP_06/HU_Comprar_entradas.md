
**Comprar Entradas**

Como visitante, quiero comprar entrada/s para ingresar al parque

**Criterios de Aceptación**

* El sistema debe validar que la fecha de visita deseada sea posterior o igual a la fecha actual.
* El sistema debe validar que la compra sea igual o menor a 10 entradas
* Se debe ingresar la edad de cada visitante
* Se debe mostrar el monto total
* Se debe seleccionar la forma de pago: efectivo (boletería) o mercado pago (tarjeta)
* Se debe enviar la confirmación de la compra vía mail

**Pruebas de aceptación**

* Probar comprar entradas indicando fecha igual o posterior a la fecha actual (Pass)
* Probar comprar entradas y la cantidad de entradas no supera las 10 (Pass)
* Probar comprar entradas y se muestra el monto total de la compra (Pass)
* Probar comprar entradas y se solicita la edad de cada visitante (Pass)
* Probar comprar entradas y el sistema permite seleccionar la forma de pago: efectivo o mercado pago. (Pass)
* Probar comprar entradas y llega la confirmación de la compra vía mail (Pass)
* Probar comprar entradas indicando una fecha anterior a la actual (Fail)
* Probar comprar entradas y la cantidad de entradas es mayor a 10 (Fail)
* Probar comprar entradas y no se muestra el monto total (Fail)
* Probar comprar entradas y no se muestra la forma de pago efectivo (Fail)
* Probar comprar entradas y no llega la confirmación de la compra vía mail (Fail)
* Probar comprar entradas y no se solicita la edad de cada visitante (Fail)

**User Canonica: Registrar visitante**

**Estimación: SP 8**

* Complejidad: Alto. Contiene validaciones, integraciones y algoritmos para la generación de las entradas
* Esfuerzo: Medio Alto. Se deben realizar la integraciones con la API de Mercado Pago y Mail
* Incertidumbre: Medio. Se deben realizar validaciones claras y concretas.
