import SpotlightCard from '../reactbits/SpotlightCard.jsx';
import { IconoAlerta, IconoCheck, IconoEfectivo, IconoTarjeta } from './Iconos.jsx';
import './FormasPago.css';

const OPCIONES = [
  {
    valor: 'mercado_pago',
    titulo: 'Mercado Pago',
    detalle: 'Pagá online con tarjeta de crédito o débito. Te redirigimos a Mercado Pago para completar el pago.',
    nota: 'Pago online',
    Icono: IconoTarjeta
  },
  {
    valor: 'efectivo',
    titulo: 'Efectivo en boletería',
    detalle: 'Reservá ahora y pagá al llegar al parque, el día de tu visita.',
    nota: 'Pago en el parque',
    Icono: IconoEfectivo
  }
];

export default function FormasPago({ formaPago, onCambio, mostrarRequerido }) {
  const faltaElegir = mostrarRequerido && !formaPago;

  return (
    <div className="formas-pago">
      <div className="formas-pago__opciones" role="radiogroup" aria-label="Forma de pago">
        {OPCIONES.map(({ valor, titulo, detalle, nota, Icono }) => (
          <SpotlightCard
            key={valor}
            theme="light"
            spotlightColor="rgba(167, 201, 87, 0.9)"
            intensity={0.35}
            spotlightSize={260}
            borderGlow={0.9}
            className={`opcion-pago opcion-pago--${valor}${formaPago === valor ? ' is-elegida' : ''}`}
          >
            <label className="opcion-pago__contenido">
              <input
                type="radio"
                className="sr-only"
                name="forma-pago"
                value={valor}
                checked={formaPago === valor}
                onChange={() => onCambio(valor)}
              />
              <span className="opcion-pago__icono">
                <Icono tamano={24} />
              </span>
              <span className="opcion-pago__textos">
                <span className="opcion-pago__titulo">{titulo}</span>
                <span className="opcion-pago__detalle">{detalle}</span>
                <span className="opcion-pago__nota">{nota}</span>
              </span>
              <span className="opcion-pago__marca" aria-hidden="true">
                {formaPago === valor && <IconoCheck tamano={14} grosor={3} />}
              </span>
            </label>
          </SpotlightCard>
        ))}
      </div>

      {faltaElegir && (
        <p className="campo__mensaje campo__mensaje--error formas-pago__error" role="alert">
          <IconoAlerta tamano={16} />
          Elegí una forma de pago para continuar.
        </p>
      )}
    </div>
  );
}
