import { useId } from 'react';
import { nuevoVisitante } from '../lib/visitantes.js';
import {
  CANTIDAD_MAXIMA,
  CANTIDAD_MINIMA,
  CATEGORIAS,
  NOMBRE_PASE,
  categoriaPorEdad,
  etiquetaBeneficio,
  formatearPrecio,
  formatearPrecioEntrada,
  rangoCategoria,
  validarEdad
} from '../lib/reglas.js';
import { IconoAlerta, IconoEstrella, IconoInfo, IconoMas, IconoMenos, IconoPapelera } from './Iconos.jsx';
import './Visitantes.css';

function Tarifas({ tarifas }) {
  return (
    <div className="tarifas">
      <div className="tarifas__pases">
        {Object.entries(tarifas).map(([tipo, precio]) => (
          <div key={tipo} className={`tarifa tarifa--${tipo}`}>
            <div className="tarifa__cabecera">
              <span className="tarifa__nombre">
                {tipo === 'vip' && <IconoEstrella tamano={15} />}
                Pase {NOMBRE_PASE[tipo]}
              </span>
              <span className="tarifa__precio numero">{formatearPrecio(precio)}</span>
            </div>
          </div>
        ))}
      </div>
      <ul className="tarifas__descuentos" aria-label="Precio según la edad">
        {CATEGORIAS.map(categoria => (
          <li key={categoria.codigo} className={`descuento descuento--${categoria.codigo}`}>
            <span className="descuento__nombre">{categoria.nombre}</span>
            <span className="descuento__rango">{rangoCategoria(categoria)}</span>
            <span className="descuento__beneficio">{etiquetaBeneficio(categoria)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TarjetaVisitante({ numero, visitante, tarifas, puedeQuitar, mostrarErrores, despachar }) {
  const id = useId();
  const validacion = validarEdad(visitante.edad);
  const categoria = validacion.estado === 'valida' ? categoriaPorEdad(validacion.edad) : null;
  const precio = categoria ? tarifas[visitante.tipoPase] * categoria.factor : null;
  const mostrarError =
    validacion.estado === 'invalida' || (validacion.estado === 'vacia' && (visitante.tocado || mostrarErrores));

  return (
    <li className={`visitante${mostrarError ? ' visitante--error' : ''}`}>
      <div className="visitante__cabecera">
        <span className="visitante__numero" aria-hidden="true">
          {numero}
        </span>
        <div className="visitante__titulo">
          <h3>Visitante {numero}</h3>
          {categoria ? (
            <span className={`etiqueta-categoria etiqueta-categoria--${categoria.codigo}`}>
              {categoria.nombre} · {etiquetaBeneficio(categoria)}
            </span>
          ) : (
            <span className="etiqueta-categoria etiqueta-categoria--pendiente">
              {validacion.estado === 'vacia' ? 'Falta la edad' : 'Revisá la edad'}
            </span>
          )}
        </div>
        <span className="visitante__precio numero">{precio === null ? '—' : formatearPrecioEntrada(precio)}</span>
        {puedeQuitar && (
          <button
            type="button"
            className="visitante__quitar"
            onClick={() => despachar({ tipo: 'quitar', id: visitante.id })}
            aria-label={`Quitar al visitante ${numero}`}
            title="Quitar visitante"
          >
            <IconoPapelera tamano={18} />
          </button>
        )}
      </div>

      <div className="visitante__campos">
        <div className="campo">
          <label className="campo__etiqueta" htmlFor={`${id}-edad`}>
            Edad
          </label>
          <div className="campo__control" data-estado={mostrarError ? 'error' : categoria ? 'ok' : undefined}>
            <input
              id={`${id}-edad`}
              className="campo__input numero"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              placeholder="Ej.: 34"
              value={visitante.edad}
              onChange={evento => despachar({ tipo: 'edad', id: visitante.id, edad: evento.target.value })}
              onBlur={() => despachar({ tipo: 'tocar', id: visitante.id })}
              aria-invalid={mostrarError}
              aria-describedby={mostrarError ? `${id}-error` : undefined}
              data-campo-edad
            />
            <span className="campo__sufijo">años</span>
          </div>
        </div>

        <fieldset className="pase">
          <legend className="campo__etiqueta">Tipo de pase</legend>
          <div className="pase__opciones">
            {Object.entries(tarifas).map(([tipo, tarifa]) => (
              <label
                key={tipo}
                className={`pase__opcion pase__opcion--${tipo}${visitante.tipoPase === tipo ? ' is-activo' : ''}`}
              >
                <input
                  type="radio"
                  className="sr-only"
                  name={`${id}-pase`}
                  value={tipo}
                  checked={visitante.tipoPase === tipo}
                  onChange={() => despachar({ tipo: 'pase', id: visitante.id, tipoPase: tipo })}
                />
                <span className="pase__nombre">
                  {tipo === 'vip' && <IconoEstrella tamano={14} />}
                  {NOMBRE_PASE[tipo]}
                </span>
                <span className="pase__precio numero">
                  {categoria ? formatearPrecioEntrada(tarifa * categoria.factor) : formatearPrecio(tarifa)}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {mostrarError && (
        <p id={`${id}-error`} className="campo__mensaje campo__mensaje--error visitante__error" role="alert">
          <IconoAlerta tamano={16} />
          {validacion.mensaje}
        </p>
      )}
    </li>
  );
}

export default function Visitantes({ tarifas, visitantes, despachar, mostrarErrores }) {
  const cantidad = visitantes.length;

  return (
    <div className="visitantes">
      <div className="cantidad">
        <div className="cantidad__texto">
          <span className="cantidad__etiqueta" id="cantidad-entradas">
            Cantidad de entradas
          </span>
          <span className="cantidad__ayuda">
            Mínimo {CANTIDAD_MINIMA} · máximo {CANTIDAD_MAXIMA} por fecha
          </span>
        </div>
        <div className="cantidad__control" role="group" aria-labelledby="cantidad-entradas">
          <button
            type="button"
            className="cantidad__boton"
            onClick={() => despachar({ tipo: 'quitar-ultimo' })}
            disabled={cantidad <= CANTIDAD_MINIMA}
            aria-label="Quitar una entrada"
          >
            <IconoMenos tamano={18} grosor={2.2} />
          </button>
          <output className="cantidad__valor numero" aria-live="polite">
            {cantidad}
          </output>
          <button
            type="button"
            className="cantidad__boton"
            onClick={() => despachar({ tipo: 'agregar', visitante: nuevoVisitante() })}
            disabled={cantidad >= CANTIDAD_MAXIMA}
            aria-label="Agregar una entrada"
          >
            <IconoMas tamano={18} grosor={2.2} />
          </button>
        </div>
      </div>

      {cantidad >= CANTIDAD_MAXIMA && (
        <p className="aviso aviso--alerta" role="status">
          <IconoInfo tamano={18} />
          Alcanzaste el máximo de {CANTIDAD_MAXIMA} entradas por fecha.
        </p>
      )}

      <Tarifas tarifas={tarifas} />

      <ol className="visitantes__lista">
        {visitantes.map((visitante, indice) => (
          <TarjetaVisitante
            key={visitante.id}
            numero={indice + 1}
            visitante={visitante}
            tarifas={tarifas}
            puedeQuitar={cantidad > CANTIDAD_MINIMA}
            mostrarErrores={mostrarErrores}
            despachar={despachar}
          />
        ))}
      </ol>
    </div>
  );
}
