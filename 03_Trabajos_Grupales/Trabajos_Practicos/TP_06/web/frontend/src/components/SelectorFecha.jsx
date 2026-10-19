import { useId, useState } from 'react';
import Calendario from './Calendario.jsx';
import { formatearCorta, formatearLarga } from '../lib/fechas.js';
import { enmascararFecha, validarFechaEscrita } from '../lib/reglas.js';
import { IconoAlerta, IconoCalendario, IconoCheck } from './Iconos.jsx';
import './SelectorFecha.css';

export default function SelectorFecha({ hoy, fecha, onCambio, mostrarRequerido }) {
  const id = useId();
  const [texto, setTexto] = useState(fecha ? formatearCorta(fecha) : '');
  const [error, setError] = useState(null);

  // Mientras lo escrito no sea una fecha válida, no hay fecha seleccionada
  const escribir = (valor, alSalir) => {
    const enmascarado = enmascararFecha(valor);
    setTexto(enmascarado);
    if (enmascarado.length < 10) {
      onCambio(null);
      setError(alSalir && enmascarado ? 'Completá la fecha con el formato dd/mm/aaaa.' : null);
      return;
    }
    const { iso, mensaje } = validarFechaEscrita(enmascarado, hoy);
    setError(mensaje);
    onCambio(iso);
  };

  const elegir = iso => {
    setTexto(formatearCorta(iso));
    setError(null);
    onCambio(iso);
  };

  const mensajeError = error ?? (mostrarRequerido && !fecha ? 'Elegí la fecha de tu visita para continuar.' : null);

  return (
    <div className="selector-fecha">
      <div className="selector-fecha__campo campo">
        <label className="campo__etiqueta" htmlFor={id}>
          Fecha de visita
        </label>
        <div className="campo__control" data-estado={mensajeError ? 'error' : fecha ? 'ok' : undefined}>
          <span className="campo__icono">
            <IconoCalendario tamano={19} />
          </span>
          <input
            id={id}
            className="campo__input numero"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            placeholder="dd/mm/aaaa"
            maxLength={10}
            value={texto}
            onChange={evento => escribir(evento.target.value, false)}
            onBlur={evento => escribir(evento.target.value, true)}
            aria-invalid={Boolean(mensajeError)}
            aria-describedby={`${id}-mensaje`}
          />
        </div>

        <div id={`${id}-mensaje`} aria-live="polite">
          {mensajeError ? (
            <p className="campo__mensaje campo__mensaje--error selector-fecha__error" role="alert">
              <IconoAlerta tamano={16} />
              {mensajeError}
            </p>
          ) : fecha ? (
            <p className="campo__mensaje campo__mensaje--ok">
              <IconoCheck tamano={16} grosor={2.4} />
              ¡Genial! Te esperamos el {formatearLarga(fecha)}.
            </p>
          ) : (
            <p className="campo__mensaje campo__mensaje--ayuda">Escribila con el teclado o elegila en el calendario.</p>
          )}
        </div>
      </div>

      <Calendario hoy={hoy} seleccionada={fecha} onElegir={elegir} />
    </div>
  );
}
