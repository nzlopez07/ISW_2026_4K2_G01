import { useEffect } from 'react';
import BlurText from '../reactbits/BlurText.jsx';
import logoChico from '../assets/brand/logo-ecoharmony-sm.webp';
import { capitalizar, formatearLarga } from '../lib/fechas.js';
import { NOMBRE_PASE, categoriaPorEdad, formatearPrecio, formatearPrecioEntrada } from '../lib/reglas.js';
import { IconoCorreo, IconoInfo } from './Iconos.jsx';
import './Confirmacion.css';

export default function Confirmacion({ resultado, fecha, usuario, onVerCorreo, onNuevaCompra }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const correo = resultado.email_confirmacion;
  const pagoOnline = resultado.forma_pago === 'mercado_pago';
  const cantidad = resultado.cantidad_entradas;
  const entradas = `${cantidad} ${cantidad === 1 ? 'entrada' : 'entradas'}`;

  return (
    <section className="confirmacion" aria-labelledby="confirmacion-titulo">
      <div className="confirmacion__encabezado">
        <div className="confirmacion__sello" aria-hidden="true">
          <svg viewBox="0 0 52 52">
            <circle className="confirmacion__circulo" cx="26" cy="26" r="24" />
            <path className="confirmacion__tilde" d="M15 27.5l7 7 15-16" />
          </svg>
        </div>
        <div id="confirmacion-titulo">
          <BlurText
            as="h2"
            text={`¡Listo, ${usuario.nombre.split(' ')[0]}! Tu compra está confirmada`}
            className="confirmacion__titulo"
            delay={70}
            trigger="load"
          />
        </div>
        <p className="confirmacion__resumen">
          Compraste <strong>{entradas}</strong> para el <strong>{formatearLarga(fecha)}</strong>.
        </p>
      </div>

      <article className="boleto" aria-label="Comprobante de la compra">
        <div className="boleto__principal">
          <div className="boleto__marca">
            <img src={logoChico} alt="" width="38" height="43" />
            <div>
              <strong>EcoHarmony Park</strong>
              <span>Entradas al parque</span>
            </div>
          </div>

          <dl className="boleto__datos">
            <div>
              <dt>Fecha de visita</dt>
              <dd>{capitalizar(formatearLarga(fecha))}</dd>
            </div>
            <div>
              <dt>Horario</dt>
              <dd>8:30 a 19:00 h</dd>
            </div>
            <div>
              <dt>Cantidad</dt>
              <dd>{entradas}</dd>
            </div>
            <div>
              <dt>Pago</dt>
              <dd>{pagoOnline ? 'Pagado con Mercado Pago' : 'Efectivo en boletería'}</dd>
            </div>
          </dl>

          <table className="boleto__tabla">
            <thead>
              <tr>
                <th scope="col">Visitante</th>
                <th scope="col">Pase</th>
                <th scope="col" className="boleto__importe">
                  Precio
                </th>
              </tr>
            </thead>
            <tbody>
              {correo.entradas.map(entrada => (
                <tr key={entrada.numero}>
                  <td>
                    <span className="boleto__visitante">
                      #{entrada.numero} · {categoriaPorEdad(entrada.edad).nombre}
                    </span>
                    <span className="boleto__edad">{entrada.edad} años</span>
                  </td>
                  <td>{NOMBRE_PASE[entrada.tipo_pase.toLowerCase()]}</td>
                  <td className="boleto__importe numero">{formatearPrecioEntrada(entrada.precio)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="boleto__talon">
          <span className="boleto__etiqueta">N.º de orden</span>
          <strong className="boleto__orden">{resultado.id_compra}</strong>
          <span className="boleto__etiqueta">{pagoOnline ? 'Total pagado' : 'Total a pagar'}</span>
          <strong className="boleto__total numero">{formatearPrecio(resultado.monto_total)}</strong>
        </div>
      </article>

      {!pagoOnline && (
        <p className="aviso aviso--info">
          <IconoInfo tamano={18} />
          <span>
            Presentá el número de orden <strong>{resultado.id_compra}</strong> en la boletería y aboná{' '}
            {formatearPrecio(resultado.monto_total)} en efectivo el día de tu visita.
          </span>
        </p>
      )}

      <div className="confirmacion__correo">
        <span className="confirmacion__correo-icono">
          <IconoCorreo tamano={22} />
        </span>
        <p>
          Te enviamos un correo con el detalle de tu compra a <strong>{correo.destinatario}</strong>.
        </p>
        <button type="button" className="boton boton--secundario" onClick={onVerCorreo}>
          Ver correo
        </button>
      </div>

      <div className="confirmacion__acciones">
        <button type="button" className="boton boton--primario" onClick={onNuevaCompra}>
          Comprar otras entradas
        </button>
      </div>
    </section>
  );
}
