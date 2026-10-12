# Especificación de Casos de Prueba en Gherkin (BDD)

**Universidad Tecnológica Nacional - Facultad Regional Córdoba (UTN-FRC)**  
**Cátedra:** Ingeniería de Software (ISW) - Curso 4K2 - Grupo 01  
**Caso de Estudio:** EcoHarmony Park  
**Trabajo Práctico N° 6:** Aseguramiento de Calidad de Proceso y de Producto  
**User Story:** US-01 - Comprar Entradas (SP: 8)  

---

## Definición de la User Story

```gherkin
Funcionalidad: Comprar Entradas al Parque EcoHarmony Park
  Como visitante
  Quiero comprar entrada/s para ingresar al parque
  Para disfrutar de las instalaciones y atracciones ecológicas
```

---

## Criterio de Aceptación 1: Validación de Fecha de Visita

> **Regla de Negocio:** La fecha deseada de visita debe ser posterior o igual a la fecha actual (`fecha_visita >= fecha_actual`).

### Caso 1: Probar comprar entradas indicando una fecha anterior a la actual (Fail)
```gherkin
Escenario: Intento de compra con fecha de visita en el pasado
  Dado que la fecha actual es "12/10/2026"
  Cuando el visitante intenta comprar 1 entrada indicando la fecha de visita "11/10/2026"
  Y proporciona la edad del visitante 25
  Y selecciona la forma de pago "mercado_pago"
  Y proporciona el email "visitante@example.com"
  Entonces el sistema debe rechazar la compra
  Y debe mostrar el mensaje de error "La fecha de visita deseada debe ser posterior o igual a la fecha actual"
```

### Caso 2: Probar comprar entradas indicando la fecha actual (Pass)
```gherkin
Escenario: Compra exitosa indicando la fecha actual
  Dado que la fecha actual es "12/10/2026"
  Cuando el visitante compra 1 entrada indicando la fecha de visita "12/10/2026"
  Y proporciona la edad del visitante 30
  Y selecciona la forma de pago "mercado_pago"
  Y proporciona el email "visitante@example.com"
  Entonces el sistema debe aceptar la compra
  Y la fecha de visita asignada a la reserva debe ser "12/10/2026"
```

### Caso 3: Probar comprar entradas indicando una fecha posterior (Pass)
```gherkin
Escenario: Compra exitosa indicando una fecha futura
  Dado que la fecha actual es "12/10/2026"
  Cuando el visitante compra 1 entrada indicando la fecha de visita "19/10/2026"
  Y proporciona la edad del visitante 28
  Y selecciona la forma de pago "efectivo"
  Y proporciona el email "visitante@example.com"
  Entonces el sistema debe aceptar la compra
  Y la fecha de visita asignada a la reserva debe ser "19/10/2026"
```

---

## Criterio de Aceptación 2: Validación de Cantidad de Entradas

> **Regla de Negocio:** La compra debe ser igual o menor a 10 entradas y estrictamente mayor a 0 (`1 <= cantidad <= 10`).

### Caso 4: Probar comprar entradas y la cantidad de entradas es 10 (Pass)
```gherkin
Escenario: Compra exitosa en el límite superior de 10 entradas permitidas
  Dado que la fecha de visita es válida y posterior a hoy
  Cuando el visitante solicita comprar 10 entradas
  Y proporciona la edad de los 10 visitantes: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
  Y selecciona la forma de pago "mercado_pago"
  Y proporciona el correo electrónico "grupo@example.com"
  Entonces el sistema debe confirmar la compra
  Y debe registrar exactamente 10 entradas en la reserva
```

### Caso 5: Probar comprar entradas y la cantidad de entradas es 11 (Fail)
```gherkin
Escenario: Rechazo de compra por superar el límite máximo de 10 entradas
  Dado que la fecha de visita es válida y posterior a hoy
  Cuando el visitante intenta comprar 11 entradas
  Y proporciona la edad de 11 visitantes
  Y selecciona la forma de pago "mercado_pago"
  Y proporciona el correo electrónico "exceso@example.com"
  Entonces el sistema debe rechazar la compra
  Y debe mostrar el mensaje de error "La cantidad de entradas no puede superar el límite máximo de 10 entradas"
```

### Caso 6: Probar comprar entradas y la cantidad de entradas es 0 (Fail)
```gherkin
Escenario: Rechazo de compra con cantidad igual a cero
  Dado que la fecha de visita es válida y posterior a hoy
  Cuando el visitante intenta comprar 0 entradas
  Y no ingresa visitantes
  Y proporciona el correo electrónico "vacio@example.com"
  Entonces el sistema debe rechazar la compra
  Y debe mostrar el mensaje de error "Debe seleccionar al menos 1 entrada para realizar la compra"
```

### Caso 7: Probar comprar entradas y la cantidad de entradas es -1 (Fail)
```gherkin
Escenario: Rechazo de compra con cantidad negativa
  Dado que la fecha de visita es válida y posterior a hoy
  Cuando el visitante ingresa una cantidad de -1 entradas
  Entonces el sistema debe rechazar la compra
  Y debe mostrar el mensaje de error "La cantidad de entradas debe ser un valor positivo entre 1 y 10"
```

---

## Criterio de Aceptación 3: Visualización y Validación del Monto Total

> **Regla de Negocio:** Se debe calcular y mostrar el monto total de la compra, el cual debe ser estrictamente positivo (`monto_total > 0`).

### Caso 8: Probar comprar entradas y el monto total de la compra es 100 (Pass)
```gherkin
Escenario: Visualización correcta del monto total positivo
  Dado que el precio unitario de entrada general es $100
  Y la fecha de visita es válida
  Cuando el visitante compra 1 entrada para un visitante de 30 años
  Y selecciona la forma de pago "mercado_pago"
  Y proporciona el correo electrónico "visitante@example.com"
  Entonces el sistema debe mostrar el monto total de la compra igual a $100.00
  Y la compra debe ser registrada con dicho monto
```

### Caso 9: Probar comprar entradas y el monto total de la compra es 0 (Fail)
```gherkin
Escenario: Rechazo de compra si el monto total resultante es $0
  Dado que por un error de tarifa o configuración el monto total calculado es $0
  Cuando el visitante intenta procesar la compra de entradas
  Entonces el sistema debe rechazar la transacción
  Y debe mostrar el mensaje de error "El monto total de la compra debe ser mayor a cero"
```

### Caso 10: Probar comprar entradas y el monto total de la compra es -1 (Fail)
```gherkin
Escenario: Rechazo de compra si el monto total resultante es negativo
  Dado que por un cálculo erróneo el monto total es -$1.00
  Cuando el visitante intenta procesar la compra de entradas
  Entonces el sistema debe rechazar la transacción
  Y debe mostrar el mensaje de error "El monto total de la compra no puede ser negativo"
```

---

## Criterio de Aceptación 4: Selección de Forma de Pago

> **Regla de Negocio:** El sistema permite seleccionar exclusivamente:
> - `efectivo` (reserva para pago en boletería).
> - `mercado_pago` (procesamiento electrónico con tarjeta).

### Caso 11: Probar comprar entradas y la forma de pago seleccionada es Mercado Pago (Pass)
```gherkin
Escenario: Compra exitosa abonando con Mercado Pago
  Dado que la compra tiene fecha válida, visitantes válidos y monto de $100
  Cuando el visitante selecciona la forma de pago "mercado_pago"
  Y confirma la compra con su correo "mp@example.com"
  Entonces el sistema debe invocar a la pasarela de pagos de Mercado Pago
  Y tras la aprobación del cobro debe marcar la compra como confirmada
```

### Caso 12: Probar comprar entradas y la forma de pago seleccionada es efectivo (Pass)
```gherkin
Escenario: Compra exitosa seleccionando pago en efectivo en boletería
  Dado que la compra tiene fecha válida, visitantes válidos y monto de $100
  Cuando el visitante selecciona la forma de pago "efectivo"
  Y confirma la compra con su correo "efectivo@example.com"
  Entonces el sistema no debe invocar la pasarela electrónica
  Y debe registrar la reserva confirmada para cobro en la boletería del parque
```

### Caso 13: Probar comprar entradas y la forma de pago seleccionada no está contemplada (Fail)
```gherkin
Escenario: Rechazo de compra con medio de pago no soportado
  Dado que el visitante completa los datos de la compra
  Cuando el visitante intenta enviar una forma de pago no contemplada como "CRIPTOMONEDA"
  Entonces el sistema debe rechazar la compra
  Y debe mostrar el mensaje de error "Forma de pago no válida. Opciones permitidas: efectivo o mercado_pago"
```

---

## Criterio de Aceptación 5: Envío de Confirmación vía Mail

> **Regla de Negocio:** Se debe enviar automáticamente la confirmación con el detalle de la compra al correo provisto por el visitante.

### Caso 14: Probar comprar entradas y la confirmación de la compra llega vía Mail (Pass)
```gherkin
Escenario: Envío exitoso de confirmación por correo electrónico
  Dado que la compra fue procesada correctamente
  Cuando finaliza el flujo de compra para el correo "destinatario@example.com"
  Entonces el servicio de correo debe enviar un email a "destinatario@example.com"
  Y el email debe contener el detalle de la compra con la fecha, cantidad de entradas y monto total
```

### Caso 15: Probar comprar entradas y no llega la confirmación de la compra vía Mail (Fail)
```gherkin
Escenario: Fallo en la entrega de la confirmación por correo electrónico
  Dado que ocurre una caída de red o error en el servicio de correo saliente
  Cuando el sistema intenta enviar la confirmación de compra a "fail_mail@example.com"
  Entonces el sistema debe capturar el error de envío
  Y debe registrar una excepción de tipo "ErrorEnvioEmailException"
```

---

## Criterio de Aceptación 6: Ingreso y Validación de Edad de Cada Visitante

> **Regla de Negocio:** Se debe ingresar obligatoriamente la edad de cada visitante. Las edades válidas comprenden desde 0 años (bebés) hasta 134 años (`0 <= edad < 135`).

### Caso 16: Probar comprar entradas y la edad de los visitantes es 6, 12, 46 y 44 (Pass)
```gherkin
Escenario: Compra familiar con múltiples edades válidas
  Dado que la fecha de visita es válida y la forma de pago es válida
  Cuando el visitante ingresa 4 entradas con las edades 6, 12, 46 y 44
  Y proporciona el correo "familia@example.com"
  Entonces el sistema debe aceptar el registro de los 4 visitantes
  Y debe calcular el monto total correspondiente a 4 entradas
```

### Caso 17: Probar comprar entradas y la edad de un visitante es 0 (Pass)
```gherkin
Escenario: Admisión de visitante de 0 años (bebé lactante)
  Dado que la fecha de visita es válida
  Cuando el visitante ingresa 1 entrada para un visitante de 0 años
  Entonces el sistema debe admitir al visitante como válido
  Y permitir completar la compra
```

### Caso 18: Probar comprar entradas y la edad de un visitante es -1 (Fail)
```gherkin
Escenario: Rechazo de visitante con edad negativa
  Dado que el visitante está registrando los datos de los concurrentes
  Cuando ingresa una edad de -1 años para uno de los visitantes
  Entonces el sistema debe rechazar el registro
  Y debe mostrar el mensaje de error "La edad del visitante no puede ser negativa"
```

### Caso 19: Probar comprar entradas y la edad de un visitante es 135 (Fail)
```gherkin
Escenario: Rechazo de visitante con edad biológicamente inverosímil (135 años)
  Dado que el límite máximo de edad aceptado es menor a 135 años
  Cuando ingresa una edad de 135 años para uno de los visitantes
  Entonces el sistema debe rechazar el registro
  Y debe mostrar el mensaje de error "La edad ingresada supera el límite máximo permitido"
```

### Caso 20: Probar comprar entradas y no se solicita la edad de cada visitante (Fail)
```gherkin
Escenario: Rechazo de compra si se omiten las edades de los visitantes
  Dado que el visitante solicita 3 entradas
  Cuando no proporciona la edad individual para cada uno de los 3 visitantes
  Entonces el sistema debe impedir continuar con la compra
  Y debe exigir el ingreso obligatorio de la edad de cada visitante
```

---

## Matriz Resumen BDD / Gherkin vs Pytest

| Criterio | Identificador Gherkin | Test Pytest Asociado | Estado TDD |
| :--- | :--- | :--- | :--- |
| **Fecha** | Escenario: Fecha en el pasado | `test_comprar_entradas_fecha_anterior_a_la_actual_falla` | RED (Fail) |
| **Fecha** | Escenario: Fecha actual | `test_comprar_entradas_fecha_actual_exito` | RED (Fail) |
| **Fecha** | Escenario: Fecha futura | `test_comprar_entradas_fecha_posterior_exito` | RED (Fail) |
| **Cantidad** | Escenario: Límite 10 entradas | `test_comprar_entradas_cantidad_igual_a_10_exito` | RED (Fail) |
| **Cantidad** | Escenario: Supera límite (11 entradas) | `test_comprar_entradas_cantidad_11_falla` | RED (Fail) |
| **Cantidad** | Escenario: Cantidad cero entradas | `test_comprar_entradas_cantidad_cero_falla` | RED (Fail) |
| **Cantidad** | Escenario: Cantidad negativa | `test_comprar_entradas_cantidad_negativa_falla` | RED (Fail) |
| **Monto** | Escenario: Monto total $100 | `test_comprar_entradas_monto_total_positivo_100_exito` | RED (Fail) |
| **Monto** | Escenario: Monto total $0 | `test_comprar_entradas_monto_total_cero_falla` | RED (Fail) |
| **Monto** | Escenario: Monto total negativo | `test_comprar_entradas_monto_total_negativo_falla` | RED (Fail) |
| **Forma Pago**| Escenario: Mercado Pago | `test_comprar_entradas_forma_pago_mercado_pago_exito` | RED (Fail) |
| **Forma Pago**| Escenario: Efectivo boletería | `test_comprar_entradas_forma_pago_efectivo_exito` | RED (Fail) |
| **Forma Pago**| Escenario: Forma no contemplada | `test_comprar_entradas_forma_pago_no_contemplada_falla` | RED (Fail) |
| **Email** | Escenario: Envío exitoso | `test_comprar_entradas_confirmacion_mail_enviada_exito` | RED (Fail) |
| **Email** | Escenario: Fallo en envío | `test_comprar_entradas_confirmacion_mail_falla_lanza_excepcion`| RED (Fail) |
| **Edades** | Escenario: Edades 6, 12, 46 y 44 | `test_comprar_entradas_edades_multiples_validas_exito` | RED (Fail) |
| **Edades** | Escenario: Edad cero (bebé) | `test_comprar_entradas_edad_visitante_cero_exito` | RED (Fail) |
| **Edades** | Escenario: Edad negativa (-1) | `test_comprar_entradas_edad_visitante_negativa_falla` | RED (Fail) |
| **Edades** | Escenario: Edad extrema (135) | `test_comprar_entradas_edad_visitante_limite_135_falla` | RED (Fail) |
