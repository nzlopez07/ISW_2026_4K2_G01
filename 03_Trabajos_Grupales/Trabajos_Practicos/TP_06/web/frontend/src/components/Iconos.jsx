function Icono({ children, tamano = 20, grosor = 1.8, ...props }) {
  return (
    <svg
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={grosor}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconoCalendario = props => (
  <Icono {...props}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </Icono>
);

export const IconoReloj = props => (
  <Icono {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Icono>
);

export const IconoTarjeta = props => (
  <Icono {...props}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="M2.5 9.5h19M6.5 15h4" />
  </Icono>
);

export const IconoEfectivo = props => (
  <Icono {...props}>
    <rect x="2.5" y="6" width="19" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.6" />
    <path d="M6 9.5v.01M18 14.5v.01" />
  </Icono>
);

export const IconoCandado = props => (
  <Icono {...props}>
    <rect x="5" y="10.5" width="14" height="10" rx="2.2" />
    <path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7" />
  </Icono>
);

export const IconoCheck = props => (
  <Icono {...props}>
    <path d="M5 12.5l4.2 4.2L19 7" />
  </Icono>
);

export const IconoAlerta = props => (
  <Icono {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.8v5M12 16.2v.01" />
  </Icono>
);

export const IconoInfo = props => (
  <Icono {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 11v5M12 7.8v.01" />
  </Icono>
);

export const IconoPapelera = props => (
  <Icono {...props}>
    <path d="M4.5 7h15M9.5 7V5.2c0-.7.5-1.2 1.2-1.2h2.6c.7 0 1.2.5 1.2 1.2V7" />
    <path d="M6.5 7l.8 11.6c.1 1 .9 1.9 2 1.9h5.4c1 0 1.9-.8 2-1.9L17.5 7M10 11v5.5M14 11v5.5" />
  </Icono>
);

export const IconoMenos = props => (
  <Icono {...props}>
    <path d="M6 12h12" />
  </Icono>
);

export const IconoMas = props => (
  <Icono {...props}>
    <path d="M12 6v12M6 12h12" />
  </Icono>
);

export const IconoFlechaDerecha = props => (
  <Icono {...props}>
    <path d="M9.5 6l6 6-6 6" />
  </Icono>
);

export const IconoCorreo = props => (
  <Icono {...props}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
    <path d="M3.8 7l8.2 6 8.2-6" />
  </Icono>
);

export const IconoEntrada = props => (
  <Icono {...props}>
    <path d="M3.5 8.5V6.7c0-.7.5-1.2 1.2-1.2h14.6c.7 0 1.2.5 1.2 1.2v1.8a2.6 2.6 0 0 0 0 5.2v1.8c0 .7-.5 1.2-1.2 1.2H4.7c-.7 0-1.2-.5-1.2-1.2v-1.8a2.6 2.6 0 0 0 0-5.2z" transform="translate(0 1)" />
    <path d="M14.5 7v1.4M14.5 11.3v1.4M14.5 15.6V17" />
  </Icono>
);

export const IconoHoja = props => (
  <Icono {...props}>
    <path d="M5 19c0-8 4.5-13.5 14-14-.2 9.5-5.8 14-14 14z" />
    <path d="M5 19c3-4 6-6.5 9.5-8.5" />
  </Icono>
);

export const IconoEstrella = props => (
  <Icono {...props}>
    <path d="M12 3.8l2.4 5 5.4.7-4 3.8 1 5.4-4.8-2.6-4.8 2.6 1-5.4-4-3.8 5.4-.7z" />
  </Icono>
);

export const IconoCerrar = props => (
  <Icono {...props}>
    <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
  </Icono>
);

