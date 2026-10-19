import LightRays from '../reactbits/LightRays.jsx';
import BlurText from '../reactbits/BlurText.jsx';
import logo from '../assets/brand/logo-ecoharmony.webp';
import { CANTIDAD_MAXIMA, DIAS_ANTICIPACION } from '../lib/reglas.js';
import { IconoCalendario, IconoEntrada, IconoHoja, IconoReloj } from './Iconos.jsx';
import './Portada.css';

export default function Portada({ etiqueta, titulo, bajada }) {
  return (
    <section className="portada">
      <div className="portada__fondo" aria-hidden="true">
        <LightRays
          raysColor="#eaf6d2"
          raysSpeed={0.55}
          lightSpread={0.85}
          rayLength={1.5}
          rayDensity={0.9}
          glow={0.55}
          haze={0.35}
          intensity={0.95}
          fadeDistance={1.05}
          mouseInfluence={0.06}
          cursorShadow={false}
          clickPulse={false}
          noiseAmount={0.03}
          distortion={0.04}
        />
        <div className="portada__veladura" />
      </div>

      <div className="portada__contenido">
        <div className="portada__texto">
          <span className="portada__etiqueta">
            <IconoHoja tamano={15} />
            {etiqueta}
          </span>
          <BlurText
            key={titulo}
            as="h1"
            text={titulo}
            className="portada__titulo"
            delay={110}
            stepDuration={0.4}
            trigger="load"
          />
          <p className="portada__bajada">{bajada}</p>

          <ul className="portada__datos">
            <li>
              <IconoReloj tamano={17} />
              Martes a domingo · 8:30 a 19:00 h
            </li>
            <li>
              <IconoCalendario tamano={17} />
              Hasta {DIAS_ANTICIPACION} días de anticipación
            </li>
            <li>
              <IconoEntrada tamano={17} />
              Hasta {CANTIDAD_MAXIMA} entradas por compra
            </li>
          </ul>
        </div>

        <div className="portada__medalla" aria-hidden="true">
          <div className="portada__medalla-aro" />
          <img src={logo} alt="" width="560" height="635" />
        </div>
      </div>
    </section>
  );
}
