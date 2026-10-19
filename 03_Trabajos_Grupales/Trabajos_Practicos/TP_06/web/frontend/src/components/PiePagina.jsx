import logoChico from '../assets/brand/logo-ecoharmony-sm.webp';
import { IconoReloj } from './Iconos.jsx';
import './PiePagina.css';

export default function PiePagina() {
  return (
    <footer className="pie">
      <div className="pie__contenido">
        <div className="pie__marca">
          <img src={logoChico} alt="" width="34" height="38" />
          <div>
            <strong>EcoHarmony Park</strong>
            <span>Bioparque y reserva natural</span>
          </div>
        </div>
        <p className="pie__horario">
          <IconoReloj tamano={16} />
          Martes a domingo · 8:30 a 19:00 h
        </p>
        <p className="pie__legal">© {new Date().getFullYear()} EcoHarmony Park. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
