import ClickSpark from '../reactbits/ClickSpark.jsx';
import CountUp from '../reactbits/CountUp.jsx';
import { capitalizar, formatearLarga } from '../lib/fechas.js';
import { NOMBRE_FORMA_PAGO, NOMBRE_PASE, formatearPrecio, formatearPrecioEntrada } from '../lib/reglas.js';
import { IconoCalendario, IconoCorreo, IconoFlechaDerecha, IconoReloj, IconoTarjeta } from './Iconos.jsx';
import './Resumen.css';

const textoEntradas = cantidad => `${cantidad} ${cantidad === 1 ? 'entrada' : 'entradas'}`;

function BotonConfirmar({ formaPago, enviando, onConfirmar, compacto = false }) {
  let texto = formaPago === 'mercado_pago' ? 'Continuar a Mercado Pago' : 'Confirmar compra';
  if (compacto) texto = formaPago === 'mercado_pago' ? 'Ir a pagar' : 'Confirmar';

  return (
    <button
      type="button"
      className={`boton boton--primario${compacto ? '' : ' boton--grande boton--bloque'}`}
      onClick={onConfirmar}
      disabled={enviando}
    >
      {enviando ? <span className="spinner" aria-hidden="true" /> : null}
      {enviando ? 'Procesando…' : texto}
      {!enviando && <IconoFlechaDerecha tamano={18} grosor={2.2} />}
    </button>
  );
}

export default function Resumen({ usuario, fecha, formaPago, resumen, pendientes, enviando, onConfirmar, onIrA }) {
  return (
    <aside className="resumen" aria-labelledby="resumen-titulo">
      <div className="resumen__tarjeta">
        <div className="resumen__cabecera">
          <h2 id="resumen-titulo" className="resumen__titulo">
            Tu compra
          </h2>
          <span className="resumen__cantidad">{textoEntradas(resumen.cantidad)}</span>
        </div>

        <dl className="resumen__datos">
          <div className="resumen__dato">
            <dt>
              <IconoCalendario tamano={17} /> Fecha
            </dt>
            <dd>{fecha ? capitalizar(formatearLarga(fecha)) : <span className="resumen__vacio">Sin elegir</span>}</dd>
          </div>
          <div className="resumen__dato">
            <dt>
              <IconoReloj tamano={17} /> Horario
            </dt>
            <dd>8:30 a 19:00 h</dd>
          </div>
          <div className="resumen__dato">
            <dt>
              <IconoTarjeta tamano={17} /> Pago
            </dt>
            <dd>{formaPago ? NOMBRE_FORMA_PAGO[formaPago] : <span className="resumen__vacio">Sin elegir</span>}</dd>
          </div>
        </dl>

        <ul className="resumen__lineas" aria-label="Detalle de entradas">
          {resumen.lineas.map(linea => (
            <li key={linea.clave}>
              <span>
                <span className="resumen__multiplicador numero">{linea.cantidad}×</span>
                {linea.categoria.nombre} · {NOMBRE_PASE[linea.tipoPase]}
              </span>
              <span className="numero">{formatearPrecioEntrada(linea.importe)}</span>
            </li>
          ))}
          {resumen.sinEdad > 0 && (
            <li className="resumen__linea-pendiente">
              <span>
                <span className="resumen__multiplicador numero">{resumen.sinEdad}×</span>
                Sin edad válida
              </span>
              <span>—</span>
            </li>
          )}
        </ul>

        <dl className="resumen__totales">
          <div>
            <dt>Subtotal</dt>
            <dd className="numero">{formatearPrecio(resumen.subtotal)}</dd>
          </div>
          {resumen.descuento > 0 && (
            <div className="resumen__descuento">
              <dt>Descuentos por edad</dt>
              <dd className="numero">−{formatearPrecio(resumen.descuento)}</dd>
            </div>
          )}
          <div className="resumen__total">
            <dt>Total</dt>
            <dd>
              <CountUp to={resumen.total} prefix="$" separator="." duration={0.6} trigger="load" />
            </dd>
          </div>
        </dl>

        {pendientes.length > 0 && (
          <div className="resumen__pendientes">
            <p>Para confirmar te falta:</p>
            <ul>
              {pendientes.map(pendiente => (
                <li key={pendiente.destino}>
                  <button type="button" onClick={() => onIrA(pendiente.destino)}>
                    {pendiente.texto}
                    <IconoFlechaDerecha tamano={15} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ClickSpark
          sparkColor={['#8cc63f', '#2e7d32', '#e9c46a']}
          sparkCount={10}
          sparkRadius={36}
          sparkSize={11}
          duration={520}
          disabled={pendientes.length > 0 || enviando}
          className="resumen__accion"
        >
          <BotonConfirmar formaPago={formaPago} enviando={enviando} onConfirmar={onConfirmar} />
        </ClickSpark>

        {usuario && (
          <p className="resumen__nota">
            <IconoCorreo tamano={16} />
            <span>
              Te enviaremos la confirmación a <strong>{usuario.email}</strong>
            </span>
          </p>
        )}
      </div>
    </aside>
  );
}

export function BarraMovil({ formaPago, resumen, enviando, onConfirmar }) {
  return (
    <div className="barra-movil">
      <div className="barra-movil__total">
        <span>{textoEntradas(resumen.cantidad)} · Total</span>
        <strong className="numero">{formatearPrecio(resumen.total)}</strong>
      </div>
      <BotonConfirmar formaPago={formaPago} enviando={enviando} onConfirmar={onConfirmar} compacto />
    </div>
  );
}
