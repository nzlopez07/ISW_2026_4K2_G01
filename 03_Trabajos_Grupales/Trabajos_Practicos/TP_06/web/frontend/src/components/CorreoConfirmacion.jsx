import Modal from './Modal.jsx';
import logo from '../assets/brand/logo-ecoharmony-sm.webp';
import { NOMBRE_PASE, formatearPrecio, formatearPrecioEntrada } from '../lib/reglas.js';
import { IconoCorreo } from './Iconos.jsx';
import './CorreoConfirmacion.css';

export default function CorreoConfirmacion({ abierto, correo, usuario, onCerrar }) {
  if (!correo) return null;

  return (
    <Modal abierto={abierto} onCerrar={onCerrar} etiqueta="Correo de confirmación" className="correo">
      <div className="correo__barra">
        <IconoCorreo tamano={17} /> Bandeja de entrada
      </div>

      <div className="correo__meta">
        <h3 className="correo__asunto">{correo.asunto}</h3>
        <div className="correo__remitente">
          <img src={logo} alt="" width="40" height="45" />
          <div className="correo__remitente-datos">
            <strong>EcoHarmony Park &lt;{correo.remitente}&gt;</strong>
            <span>Para: {correo.destinatario}</span>
          </div>
          <time className="correo__hora">{correo.fecha_envio}</time>
        </div>
      </div>

      <div className="correo__cuerpo">
        <div className="correo__portada">
          <img src={logo} alt="EcoHarmony Park" width="64" height="72" />
          <h4>¡Gracias por tu compra, {usuario.nombre.split(' ')[0]}!</h4>
          <p>Tu visita está confirmada. Te esperamos para disfrutar un día en armonía con la naturaleza.</p>
        </div>

        <dl className="correo__datos">
          <div>
            <dt>N.º de orden</dt>
            <dd>{correo.id_compra}</dd>
          </div>
          <div>
            <dt>Fecha de visita</dt>
            <dd>{correo.fecha_visita}</dd>
          </div>
          <div>
            <dt>Horario</dt>
            <dd>8:30 a 19:00 h</dd>
          </div>
          <div>
            <dt>Forma de pago</dt>
            <dd>{correo.forma_pago}</dd>
          </div>
        </dl>

        <table className="correo__tabla">
          <thead>
            <tr>
              <th scope="col">Entrada</th>
              <th scope="col">Pase</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            {correo.entradas.map(entrada => (
              <tr key={entrada.numero}>
                <td>
                  #{entrada.numero} · {entrada.categoria} ({entrada.edad} años)
                </td>
                <td>{NOMBRE_PASE[entrada.tipo_pase.toLowerCase()]}</td>
                <td className="numero">{formatearPrecioEntrada(entrada.precio)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan={2}>
                Total
              </th>
              <td className="numero">{formatearPrecio(correo.monto_total)}</td>
            </tr>
          </tfoot>
        </table>

        <p className="correo__pie">
          Presentá este correo o el número de orden al ingresar. Este mensaje se envió automáticamente, no es necesario
          responderlo.
        </p>
      </div>
    </Modal>
  );
}
