import { useMemo } from 'react';
import { MESES, capitalizar, celdasDelMes, desdeIso, formatearLarga, mesesEntre } from '../lib/fechas.js';
import { evaluarFecha, motivoCierre, ultimaFechaDeVenta } from '../lib/reglas.js';
import './Calendario.css';

const ENCABEZADOS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];

export default function Calendario({ hoy, seleccionada, onElegir }) {
  const meses = useMemo(() => mesesEntre(hoy, ultimaFechaDeVenta(hoy)), [hoy]);

  return (
    <div className="calendario">
      <div className="calendario__meses">
        {meses.map(({ anio, mes }) => (
          <div className="calendario__mes" key={`${anio}-${mes}`}>
            <h3 className="calendario__titulo">
              {capitalizar(MESES[mes - 1])} <span>{anio}</span>
            </h3>

            <div className="calendario__semana" aria-hidden="true">
              {ENCABEZADOS.map((dia, columna) => (
                <span key={dia} className={columna === 0 ? 'is-cerrado' : undefined}>
                  {dia}
                </span>
              ))}
            </div>

            <div className="calendario__grilla">
              {celdasDelMes(anio, mes).map((iso, indice) => {
                if (!iso) {
                  const lunes = indice % 7 === 0 ? ' is-cerrado' : '';
                  return <span key={`vacio-${indice}`} className={`calendario__vacio${lunes}`} />;
                }

                const cierre = motivoCierre(iso);
                const fueraDePeriodo = !cierre && evaluarFecha(iso, hoy) !== null;
                const estado = cierre ? 'is-cerrado' : fueraDePeriodo ? 'is-fuera' : 'is-disponible';
                const clases = [
                  'calendario__dia',
                  estado,
                  iso === hoy && 'is-hoy',
                  iso === seleccionada && 'is-seleccionado'
                ]
                  .filter(Boolean)
                  .join(' ');

                return (
                  <button
                    key={iso}
                    type="button"
                    className={clases}
                    disabled={estado !== 'is-disponible'}
                    aria-pressed={iso === seleccionada}
                    aria-label={capitalizar(formatearLarga(iso))}
                    title={cierre ?? (fueraDePeriodo ? 'Fuera del período de venta' : undefined)}
                    onClick={() => onElegir(iso)}
                  >
                    {desdeIso(iso).dia}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <ul className="calendario__leyenda">
        <li>
          <span className="calendario__muestra is-disponible" /> Disponible
        </li>
        <li>
          <span className="calendario__muestra is-seleccionado" /> Tu visita
        </li>
        <li>
          <span className="calendario__muestra is-cerrado" /> Parque cerrado
        </li>
        <li>
          <span className="calendario__muestra is-fuera" /> Fuera del período de venta
        </li>
      </ul>
    </div>
  );
}
