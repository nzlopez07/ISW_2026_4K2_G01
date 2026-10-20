let ultimoId = 0;

export function nuevoVisitante() {
  ultimoId += 1;
  return { id: ultimoId, edad: '', tipoPase: 'regular', tocado: false };
}

export function reductorVisitantes(visitantes, accion) {
  const actualizar = cambios =>
    visitantes.map(visitante => (visitante.id === accion.id ? { ...visitante, ...cambios } : visitante));

  switch (accion.tipo) {
    case 'agregar':
      return [...visitantes, accion.visitante];
    case 'quitar':
      return visitantes.filter(visitante => visitante.id !== accion.id);
    case 'quitar-ultimo':
      return visitantes.slice(0, -1);
    case 'edad':
      return actualizar({ edad: accion.edad });
    case 'tocar':
      return actualizar({ tocado: true });
    case 'pase':
      return actualizar({ tipoPase: accion.tipoPase });
    case 'reiniciar':
      return [accion.visitante];
    default:
      return visitantes;
  }
}
