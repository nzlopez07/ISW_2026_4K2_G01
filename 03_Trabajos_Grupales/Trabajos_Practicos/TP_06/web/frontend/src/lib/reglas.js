// Reglas de la compra que la interfaz aplica mientras se completa el formulario.
// El TicketService vuelve a validar todo al confirmar.
import { aIso, diaSemana, diasEnMes, formatearCorta, sumarDias } from './fechas.js';

export const CANTIDAD_MINIMA = 1;
export const CANTIDAD_MAXIMA = 10;
export const EDAD_MAXIMA = 134;
export const DIAS_ANTICIPACION = 30;
export const HORA_LIMITE_HOY = '17:30';

export const CATEGORIAS = [
  { codigo: 'bebe', nombre: 'Bebé', desde: 0, hasta: 3, factor: 0 },
  { codigo: 'menor', nombre: 'Menor', desde: 4, hasta: 15, factor: 0.5 },
  { codigo: 'adulto', nombre: 'Adulto', desde: 16, hasta: 59, factor: 1 },
  { codigo: 'mayor', nombre: 'Adulto mayor', desde: 60, hasta: EDAD_MAXIMA, factor: 0.5 }
];

export const NOMBRE_PASE = { regular: 'Regular', vip: 'VIP' };
export const NOMBRE_FORMA_PAGO = { mercado_pago: 'Mercado Pago', efectivo: 'Efectivo en boletería' };

const formatoPesos = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 });

export const formatearPrecio = monto => `$${formatoPesos.format(monto)}`;
export const formatearPrecioEntrada = monto => (monto === 0 ? 'Sin cargo' : formatearPrecio(monto));

export function categoriaPorEdad(edad) {
  return CATEGORIAS.find(c => edad >= c.desde && edad <= c.hasta);
}

export function etiquetaBeneficio(categoria) {
  if (categoria.factor === 0) return 'Sin cargo';
  if (categoria.factor === 1) return 'Tarifa plena';
  return `${(1 - categoria.factor) * 100}% off`;
}

export function rangoCategoria(categoria) {
  return categoria.hasta === EDAD_MAXIMA ? `${categoria.desde}+ años` : `${categoria.desde} a ${categoria.hasta} años`;
}

// La edad no se corrige sola: si no es válida se devuelve el motivo para mostrarlo
export function validarEdad(texto) {
  const valor = texto.trim();
  if (valor === '') return { estado: 'vacia', mensaje: 'Ingresá la edad del visitante.' };
  if (!/^\d+$/.test(valor)) {
    return { estado: 'invalida', mensaje: 'Usá solo números enteros, sin puntos, comas ni signos.' };
  }
  const edad = Number(valor);
  if (edad > EDAD_MAXIMA) {
    return { estado: 'invalida', mensaje: `La edad debe estar entre 0 y ${EDAD_MAXIMA} años.` };
  }
  return { estado: 'valida', edad };
}

export function calcularResumen(visitantes, tarifas) {
  const lineas = new Map();
  let subtotal = 0;
  let total = 0;
  let sinEdad = 0;

  for (const visitante of visitantes) {
    const validacion = validarEdad(visitante.edad);
    if (validacion.estado !== 'valida') {
      sinEdad += 1;
      continue;
    }
    const categoria = categoriaPorEdad(validacion.edad);
    const precio = tarifas[visitante.tipoPase] * categoria.factor;
    subtotal += tarifas[visitante.tipoPase];
    total += precio;

    const clave = `${categoria.codigo}-${visitante.tipoPase}`;
    const linea = lineas.get(clave) ?? { clave, categoria, tipoPase: visitante.tipoPase, cantidad: 0, importe: 0 };
    linea.cantidad += 1;
    linea.importe += precio;
    lineas.set(clave, linea);
  }

  return {
    lineas: [...lineas.values()],
    cantidad: visitantes.length,
    sinEdad,
    subtotal,
    descuento: subtotal - total,
    total
  };
}

export const ultimaFechaDeVenta = hoy => sumarDias(hoy, DIAS_ANTICIPACION);

export function motivoCierre(iso) {
  if (diaSemana(iso) === 0) return 'El parque permanece cerrado los lunes.';
  if (iso.endsWith('-12-25') || iso.endsWith('-01-01')) {
    return 'El parque permanece cerrado en días festivos (25 de diciembre y 1 de enero).';
  }
  return null;
}

export function evaluarFecha(iso, hoy, hora) {
  if (iso < hoy) return `La fecha no puede ser anterior a hoy (${formatearCorta(hoy)}).`;
  if (iso === hoy && hora > HORA_LIMITE_HOY) return `Para el día de hoy solo se puede comprar hasta las ${HORA_LIMITE_HOY}.`;
  const ultima = ultimaFechaDeVenta(hoy);
  if (iso > ultima) {
    return `Podés comprar con hasta ${DIAS_ANTICIPACION} días de anticipación: elegí una fecha hasta el ${formatearCorta(ultima)}.`;
  }
  const motivo = motivoCierre(iso);
  return motivo ? `${motivo} Elegí otro día.` : null;
}

// Devuelve la fecha ISO solo si existe y se puede reservar; si no, el motivo
export function validarFechaEscrita(texto, hoy, hora) {
  const partes = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(texto);
  if (!partes) return { iso: null, mensaje: 'Completá la fecha con el formato dd/mm/aaaa.' };
  const [dia, mes, anio] = partes.slice(1).map(Number);
  if (mes < 1 || mes > 12 || dia < 1 || dia > diasEnMes(anio, mes)) {
    return { iso: null, mensaje: 'La fecha ingresada no existe. Revisá el día y el mes.' };
  }
  const iso = aIso(anio, mes, dia);
  const mensaje = evaluarFecha(iso, hoy, hora);
  return { iso: mensaje ? null : iso, mensaje };
}

// Máscara dd/mm/aaaa que respeta las barras escritas: "1/11/2026" -> "01/11/2026"
export function enmascararFecha(texto) {
  const segmentos = texto.replace(/[^\d/]/g, '').split('/');
  const digitos = segmentos
    .map((segmento, i) => (i < 2 && i < segmentos.length - 1 && segmento.length === 1 ? `0${segmento}` : segmento))
    .join('')
    .slice(0, 8);
  return [digitos.slice(0, 2), digitos.slice(2, 4), digitos.slice(4)].filter(Boolean).join('/');
}
