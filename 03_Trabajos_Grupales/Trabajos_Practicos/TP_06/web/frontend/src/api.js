async function pedir(url, opciones) {
  let respuesta;
  try {
    respuesta = await fetch(url, opciones);
  } catch {
    throw new Error('No pudimos conectarnos con el servidor. Intentá nuevamente.');
  }
  const datos = await respuesta.json().catch(() => null);
  if (!respuesta.ok) throw new Error(datos?.error ?? 'Ocurrió un error inesperado. Intentá nuevamente.');
  return datos;
}

export const obtenerEstado = () => pedir('/api/estado-usuario');

export const comprarEntradas = solicitud =>
  pedir('/api/comprar-entradas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(solicitud)
  });
