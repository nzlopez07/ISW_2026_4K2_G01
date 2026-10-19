import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IconoCerrar } from './Iconos.jsx';
import './Modal.css';

const ENFOCABLES = 'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Modal({ abierto, onCerrar, etiqueta, cerrable = true, className = '', children }) {
  const dialogoRef = useRef(null);
  const opcionesRef = useRef({ onCerrar, cerrable });
  opcionesRef.current = { onCerrar, cerrable };

  useEffect(() => {
    if (!abierto) return undefined;
    const enfocadoAntes = document.activeElement;
    const desbordeAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const dialogo = dialogoRef.current;
    (dialogo.querySelector('[data-autofocus]') ?? dialogo).focus();

    const alPresionarTecla = evento => {
      const { onCerrar: cerrar, cerrable: sePuedeCerrar } = opcionesRef.current;
      if (evento.key === 'Escape' && sePuedeCerrar && cerrar) {
        cerrar();
        return;
      }
      if (evento.key !== 'Tab') return;
      const enfocables = dialogo.querySelectorAll(ENFOCABLES);
      if (enfocables.length === 0) return;
      const primero = enfocables[0];
      const ultimo = enfocables[enfocables.length - 1];
      if (evento.shiftKey && document.activeElement === primero) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primero.focus();
      }
    };

    document.addEventListener('keydown', alPresionarTecla);
    return () => {
      document.removeEventListener('keydown', alPresionarTecla);
      document.body.style.overflow = desbordeAnterior;
      enfocadoAntes?.focus?.();
    };
  }, [abierto]);

  if (!abierto) return null;

  return createPortal(
    <div
      className="modal"
      onMouseDown={evento => {
        if (evento.target === evento.currentTarget && cerrable && onCerrar) onCerrar();
      }}
    >
      <div
        ref={dialogoRef}
        className={`modal__dialogo ${className}`}
        role="dialog"
        aria-modal="true"
        aria-label={etiqueta}
        tabIndex={-1}
      >
        {cerrable && onCerrar && (
          <button type="button" className="modal__cerrar" onClick={onCerrar} aria-label="Cerrar">
            <IconoCerrar tamano={18} />
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
}
