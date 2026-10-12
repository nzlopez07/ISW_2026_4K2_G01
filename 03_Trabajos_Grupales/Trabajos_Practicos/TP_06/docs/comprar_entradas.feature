# language: es
Característica: Comprar Entradas al Parque EcoHarmony Park
  Como visitante
  Quiero comprar entrada/s para ingresar al parque
  Para disfrutar de las instalaciones y atracciones ecológicas

  # ----------------------------------------------------------------------------
  # Criterio 1: Validación de Fecha de Visita
  # ----------------------------------------------------------------------------
  Escenario: Probar comprar entradas indicando una fecha anterior a la actual (Fail)
    Dado que la fecha actual del sistema es hoy
    Cuando el visitante intenta comprar 1 entrada indicando una fecha de visita anterior a la actual
    Y la edad del visitante es 25
    Y la forma de pago seleccionada es "mercado_pago"
    Y el correo electrónico es "visitante@example.com"
    Entonces el sistema debe rechazar la compra con una excepción de fecha inválida

  Escenario: Probar comprar entradas indicando la fecha actual (Pass)
    Dado que la fecha actual del sistema es hoy
    Cuando el visitante compra 1 entrada indicando la fecha de visita de hoy
    Y la edad del visitante es 30
    Y la forma de pago seleccionada es "mercado_pago"
    Y el correo electrónico es "visitante@example.com"
    Entonces el sistema debe confirmar la compra para la fecha de hoy

  Escenario: Probar comprar entradas indicando una fecha posterior (Pass)
    Dado que la fecha actual del sistema es hoy
    Cuando el visitante compra 1 entrada indicando una fecha de visita posterior a la actual
    Y la edad del visitante es 28
    Y la forma de pago seleccionada es "efectivo"
    Y el correo electrónico es "visitante@example.com"
    Entonces el sistema debe confirmar la compra para la fecha futura solicitada

  # ----------------------------------------------------------------------------
  # Criterio 2: Validación de Cantidad de Entradas
  # ----------------------------------------------------------------------------
  Escenario: Probar comprar entradas y la cantidad de entradas es 10 (Pass)
    Dado que la fecha de visita es válida
    Cuando el visitante solicita comprar 10 entradas
    Y se ingresa la edad de los 10 visitantes
    Y la forma de pago es "mercado_pago"
    Y el correo electrónico es "grupo@example.com"
    Entonces el sistema debe confirmar la compra con 10 entradas

  Escenario: Probar comprar entradas y la cantidad de entradas es 11 (Fail)
    Dado que la fecha de visita es válida
    Cuando el visitante intenta comprar 11 entradas
    Y se ingresa la edad de 11 visitantes
    Y la forma de pago es "mercado_pago"
    Y el correo electrónico es "exceso@example.com"
    Entonces el sistema debe rechazar la compra por superar el límite de 10 entradas

  Escenario: Probar comprar entradas y la cantidad de entradas es 0 (Fail)
    Dado que la fecha de visita es válida
    Cuando el visitante intenta comprar 0 entradas
    Y la forma de pago es "efectivo"
    Y el correo electrónico es "vacio@example.com"
    Entonces el sistema debe rechazar la compra por cantidad no válida

  Escenario: Probar comprar entradas y la cantidad de entradas es -1 (Fail)
    Dado que la fecha de visita es válida
    Cuando el visitante intenta comprar -1 entradas
    Y la forma de pago es "efectivo"
    Y el correo electrónico es "negativo@example.com"
    Entonces el sistema debe rechazar la compra por cantidad no válida

  # ----------------------------------------------------------------------------
  # Criterio 3: Validación y Visualización del Monto Total
  # ----------------------------------------------------------------------------
  Escenario: Probar comprar entradas y el monto total de la compra es 100 (Pass)
    Dado que el precio unitario por entrada es 100
    Y la fecha de visita es válida
    Cuando el visitante compra 1 entrada para un visitante de 30 años
    Y la forma de pago es "mercado_pago"
    Y el correo electrónico es "visitante@example.com"
    Entonces el sistema debe calcular y mostrar el monto total de la compra igual a 100

  Escenario: Probar comprar entradas y el monto total de la compra es 0 (Fail)
    Dado que el precio configurado resulta en un monto total de 0
    Y la fecha de visita es válida
    Cuando el visitante intenta procesar la compra
    Entonces el sistema debe rechazar la compra por monto no válido

  Escenario: Probar comprar entradas y el monto total de la compra es -1 (Fail)
    Dado que el precio configurado resulta en un monto total negativo de -1
    Y la fecha de visita es válida
    Cuando el visitante intenta procesar la compra
    Entonces el sistema debe rechazar la compra por monto negativo

  # ----------------------------------------------------------------------------
  # Criterio 4: Selección de Forma de Pago
  # ----------------------------------------------------------------------------
  Escenario: Probar comprar entradas y la forma de pago seleccionada es Mercado Pago (Pass)
    Dado que los datos de la compra son válidos
    Cuando el visitante selecciona la forma de pago "mercado_pago"
    Y confirma la compra
    Entonces el sistema debe procesar el cobro mediante la pasarela de Mercado Pago
    Y la compra debe quedar en estado confirmada

  Escenario: Probar comprar entradas y la forma de pago seleccionada es efectivo (Pass)
    Dado que los datos de la compra son válidos
    Cuando el visitante selecciona la forma de pago "efectivo"
    Y confirma la compra
    Entonces el sistema no debe invocar la pasarela de Mercado Pago
    Y la reserva debe quedar confirmada para abonar en boletería

  Escenario: Probar comprar entradas y la forma de pago seleccionada no está contemplada (Fail)
    Dado que los datos de la compra son válidos
    Cuando el visitante intenta seleccionar una forma de pago "criptomoneda"
    Entonces el sistema debe rechazar la compra por forma de pago no contemplada

  # ----------------------------------------------------------------------------
  # Criterio 5: Envío de Confirmación vía Mail
  # ----------------------------------------------------------------------------
  Escenario: Probar comprar entradas y la confirmación de la compra llega vía Mail (Pass)
    Dado que la compra fue procesada correctamente
    Cuando finaliza la transacción para el correo "destinatario@example.com"
    Entonces el sistema debe enviar un correo de confirmación a "destinatario@example.com"
    Y el correo debe incluir los detalles completos de la compra

  Escenario: Probar comprar entradas y la confirmación de la compra no llega vía Mail (Fail)
    Dado que el servicio de correo electrónico reporta un fallo de entrega
    Cuando el sistema intenta enviar la confirmación de la compra a "error@example.com"
    Entonces el sistema debe capturar el error y lanzar una excepción de envío de correo

  # ----------------------------------------------------------------------------
  # Criterio 6: Ingreso y Validación de Edad de Cada Visitante
  # ----------------------------------------------------------------------------
  Escenario: Probar comprar entradas y la edad de los visitantes es 6, 12, 46 y 44 (Pass)
    Dado que la fecha de visita es válida
    Cuando el visitante ingresa 4 visitantes con edades 6, 12, 46 y 44 respectivamente
    Y la forma de pago es "mercado_pago"
    Y el correo electrónico es "familia@example.com"
    Entonces el sistema debe admitir a los 4 visitantes
    Y el monto total debe corresponder a 4 entradas

  Escenario: Probar comprar entradas y la edad de un visitante es 0 (Pass)
    Dado que la fecha de visita es válida
    Cuando el visitante ingresa 1 visitante de 0 años
    Y la forma de pago es "efectivo"
    Y el correo electrónico es "bebe@example.com"
    Entonces el sistema debe admitir al visitante de 0 años y confirmar la compra

  Escenario: Probar comprar entradas y la edad de un visitante es -1 (Fail)
    Dado que la fecha de visita es válida
    Cuando el visitante ingresa un visitante con edad -1
    Entonces el sistema debe rechazar la compra por edad negativa

  Escenario: Probar comprar entradas y la edad de un visitante es 135 (Fail)
    Dado que la fecha de visita es válida
    Cuando el visitante ingresa un visitante con edad 135
    Entonces el sistema debe rechazar la compra por edad fuera del rango permitido

  Escenario: Probar comprar entradas y no se solicita la edad de cada visitante (Fail)
    Dado que el visitante solicita entradas para el parque
    Cuando no se ingresa la edad individual de los visitantes
    Entonces el sistema debe rechazar la operación exigiendo la edad de cada visitante
