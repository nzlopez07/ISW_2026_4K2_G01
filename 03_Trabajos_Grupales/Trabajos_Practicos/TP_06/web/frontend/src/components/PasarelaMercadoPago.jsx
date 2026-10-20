import { createPortal } from 'react-dom';
import Modal from './Modal.jsx';
import logoChico from '../assets/brand/logo-ecoharmony-sm.webp';
import { formatearCorta } from '../lib/fechas.js';
import { formatearPrecio } from '../lib/reglas.js';
import { IconoCandado, IconoCheck, IconoTarjeta } from './Iconos.jsx';
import './PasarelaMercadoPago.css';

// fase: 'redirigiendo' | 'checkout' | 'pagando'
export default function PasarelaMercadoPago({ fase, total, cantidad, fecha, usuario, onPagar, onCancelar }) {
  if (!fase) return null;

  if (fase === 'redirigiendo') {
    return createPortal(
      <div className="redireccion" role="status">
        <span className="redireccion__spinner" aria-hidden="true" />
        <p className="redireccion__titulo">Te estamos llevando a Mercado Pago…</p>
        <p className="redireccion__texto">No cierres ni recargues esta ventana.</p>
      </div>,
      document.body
    );
  }

  const pagando = fase === 'pagando';

  return (
    <Modal abierto etiqueta="Pago con Mercado Pago" onCerrar={onCancelar} cerrable={!pagando} className="pasarela">
      <div className="pasarela__barra">
        <span className="pasarela__marca">Mercado Pago</span>
        <span className="pasarela__seguro">
          <IconoCandado tamano={14} /> Pago seguro
        </span>
      </div>

      <div className="pasarela__cuerpo">
        <div className="pasarela__comercio">
          <img src={logoChico} alt="" width="36" height="41" />
          <div>
            <span>Estás pagando a</span>
            <strong>EcoHarmony Park</strong>
          </div>
        </div>

        <div className="pasarela__monto">
          <span>Total a pagar</span>
          <strong className="numero">{formatearPrecio(total)}</strong>
          <small>
            {cantidad} {cantidad === 1 ? 'entrada' : 'entradas'} para el {formatearCorta(fecha)}
          </small>
        </div>

        <div className="pasarela__medio">
          <span className="pasarela__etiqueta">Pagás con</span>
          <div className="pasarela__tarjeta">
            <span className="pasarela__tarjeta-icono">
              <IconoTarjeta tamano={20} />
            </span>
            <div className="pasarela__tarjeta-datos">
              <strong>Visa crédito •••• 4242</strong>
              <span>{usuario?.nombre}</span>
            </div>
            <span className="pasarela__tarjeta-check">
              <IconoCheck tamano={13} grosor={3} />
            </span>
          </div>
          <div className="pasarela__cuotas">
            <span>1 pago de</span>
            <strong className="numero">{formatearPrecio(total)}</strong>
          </div>
        </div>

        <button type="button" className="boton pasarela__pagar" onClick={onPagar} disabled={pagando} data-autofocus>
          {pagando && <span className="spinner" aria-hidden="true" />}
          {pagando ? 'Procesando pago…' : `Pagar ${formatearPrecio(total)}`}
        </button>
        <button type="button" className="pasarela__volver" onClick={onCancelar} disabled={pagando}>
          Volver a EcoHarmony Park
        </button>
      </div>
    </Modal>
  );
}
