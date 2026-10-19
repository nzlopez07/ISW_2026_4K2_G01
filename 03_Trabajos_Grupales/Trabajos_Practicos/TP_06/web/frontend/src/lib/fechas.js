// Fechas en formato AAAA-MM-DD siempre en hora local.
// No usar toISOString(): pasa a UTC y después de las 21 h devuelve el día siguiente.

export const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

export const DIAS_SEMANA = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

const dosDigitos = numero => String(numero).padStart(2, '0');

export function aIso(anio, mes, dia) {
  return `${anio}-${dosDigitos(mes)}-${dosDigitos(dia)}`;
}

export function desdeIso(iso) {
  const [anio, mes, dia] = iso.split('-').map(Number);
  return { anio, mes, dia };
}

export function sumarDias(iso, dias) {
  const { anio, mes, dia } = desdeIso(iso);
  const fecha = new Date(anio, mes - 1, dia + dias);
  return aIso(fecha.getFullYear(), fecha.getMonth() + 1, fecha.getDate());
}

export function diasEnMes(anio, mes) {
  return new Date(anio, mes, 0).getDate();
}

// 0 = lunes ... 6 = domingo
export function diaSemana(iso) {
  const { anio, mes, dia } = desdeIso(iso);
  return (new Date(anio, mes - 1, dia).getDay() + 6) % 7;
}

export function formatearCorta(iso) {
  const { anio, mes, dia } = desdeIso(iso);
  return `${dosDigitos(dia)}/${dosDigitos(mes)}/${anio}`;
}

export function formatearLarga(iso) {
  const { anio, mes, dia } = desdeIso(iso);
  return `${DIAS_SEMANA[diaSemana(iso)]} ${dia} de ${MESES[mes - 1]} de ${anio}`;
}

export function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export function mesesEntre(desde, hasta) {
  let { anio, mes } = desdeIso(desde);
  const fin = desdeIso(hasta);
  const meses = [];
  while (anio < fin.anio || (anio === fin.anio && mes <= fin.mes)) {
    meses.push({ anio, mes });
    mes += 1;
    if (mes > 12) {
      mes = 1;
      anio += 1;
    }
  }
  return meses;
}

// Celdas de la grilla de un mes; null para los huecos antes del día 1
export function celdasDelMes(anio, mes) {
  const celdas = Array.from({ length: diaSemana(aIso(anio, mes, 1)) }, () => null);
  for (let dia = 1; dia <= diasEnMes(anio, mes); dia += 1) {
    celdas.push(aIso(anio, mes, dia));
  }
  return celdas;
}
