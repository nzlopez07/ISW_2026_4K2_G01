import logoChico from '../assets/brand/logo-ecoharmony-sm.webp';
import './Encabezado.css';

function iniciales(nombre) {
  return nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(parte => parte[0].toUpperCase())
    .join('');
}

export default function Encabezado({ usuario }) {
  return (
    <header className="encabezado">
      <div className="encabezado__contenido">
        <a className="marca" href="/" aria-label="EcoHarmony Park, volver al inicio">
          <img className="marca__logo" src={logoChico} alt="" width="40" height="45" />
          <span className="marca__texto">
            <span className="marca__nombre">EcoHarmony Park</span>
            <span className="marca__bajada">Bioparque · Reserva natural</span>
          </span>
        </a>

        {usuario && (
          <div className="sesion" title={usuario.email}>
            <span className="sesion__avatar" aria-hidden="true">
              {iniciales(usuario.nombre)}
            </span>
            <span className="sesion__datos">
              <span className="sesion__nombre">{usuario.nombre}</span>
              <span className="sesion__estado">
                <span className="sesion__punto" aria-hidden="true" />
                Sesión iniciada
              </span>
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
