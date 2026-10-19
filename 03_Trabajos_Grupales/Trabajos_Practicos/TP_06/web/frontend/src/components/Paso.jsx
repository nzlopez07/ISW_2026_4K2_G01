import { IconoCandado, IconoCheck } from './Iconos.jsx';
import './Paso.css';

// Bloqueado: el contenido queda inerte (no se puede usar) y se muestra qué falta
export default function Paso({
  id,
  numero,
  titulo,
  descripcion,
  completo = false,
  bloqueado = false,
  mensajeBloqueo,
  acciones,
  children
}) {
  const idTitulo = `${id}-titulo`;
  const clases = ['paso', completo && 'paso--completo', bloqueado && 'paso--bloqueado']
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={clases} aria-labelledby={idTitulo}>
      <header className="paso__encabezado">
        <span className="paso__numero" aria-hidden="true">
          {completo ? <IconoCheck tamano={17} grosor={2.6} /> : numero}
        </span>
        <div className="paso__titulos">
          <h2 id={idTitulo} className="paso__titulo">
            {titulo}
          </h2>
          {descripcion && <p className="paso__descripcion">{descripcion}</p>}
        </div>
        {acciones && !bloqueado && <div className="paso__acciones">{acciones}</div>}
      </header>

      <div className="paso__cuerpo" inert={bloqueado}>
        {children}
      </div>

      {bloqueado && (
        <div className="paso__bloqueo" role="note">
          <IconoCandado tamano={18} />
          <span>{mensajeBloqueo}</span>
        </div>
      )}
    </section>
  );
}
