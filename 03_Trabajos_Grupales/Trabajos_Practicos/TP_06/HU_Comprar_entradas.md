**Comprar Entradas**

Como visitante, quiero comprar entrada/s para ingresar al parque

**Criterios de Aceptación**

*  Debe indicar la fecha de visita deseada, la cantidad de entradas requeridas, la edad de cada
  visitante y tipo de pase (VIP o regular).
* La fecha de visita guiada puede ser del día actual o futuro.
* Debe enviar un mensaje de confirmación vía mail
* Debe redirigir a mercado pago al confirmar la compra si el pago es con tarjeta de crédito
* La fecha de la visita debe estar dentro de los días en que el parque está abierto.
* Debe seleccionar la forma de pago: efectivo en caso de querer pagar en boletería o con tarjeta
* La cantidad de entradas requeridas no debe ser mayor a 10
* Al finalizar la compra se debe informar la cantidad de entradas compradas y la fecha.
* Se debe permitir la compra de entradas solo a usuarios registrados.

**Pruebas de aceptación**

- Probar comprar una entrada indicando la fecha de visita dentro de los días disponibles, una
  cantidad de entradas menor a 10, la edad de todos los visitantes, el tipo de pase, la forma de
  pago con tarjeta mediante Mercado pago y recepción del mail de confirmación (pasa)
- Probar comprar entradas sin seleccionar forma de pago (falla)
- Probar comprar entradas ingresando una fecha de visita en la cual el parque se encuentra
  cerrado (falla)
- Probar comprar entradas ingresando una cantidad de entradas mayor a 10 (falla)

**User Canonica: Registrar visitante**

**Estimación: SP 8**

* Complejidad: Alto. Contiene validaciones e integraciones.
* Esfuerzo: Medio Alto. Se deben realizar la integraciones con la API de Mercado Pago y Mail
* Incertidumbre: Medio. Se deben realizar validaciones claras y concretas.
