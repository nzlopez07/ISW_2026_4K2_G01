import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import Encabezado from './components/Encabezado.jsx';
import Portada from './components/Portada.jsx';
import Paso from './components/Paso.jsx';
import SelectorFecha from './components/SelectorFecha.jsx';
import Visitantes from './components/Visitantes.jsx';
import FormasPago from './components/FormasPago.jsx';
import Resumen, { BarraMovil } from './components/Resumen.jsx';
import PasarelaMercadoPago from './components/PasarelaMercadoPago.jsx';
import Confirmacion from './components/Confirmacion.jsx';
import CorreoConfirmacion from './components/CorreoConfirmacion.jsx';
import PiePagina from './components/PiePagina.jsx';
import { IconoAlerta } from './components/Iconos.jsx';
import { comprarEntradas, obtenerEstado } from './api.js';
import { calcularResumen, validarEdad } from './lib/reglas.js';
import { nuevoVisitante, reductorVisitantes } from './lib/visitantes.js';
import './App.css';

function listarPendientes(fecha, resumen, formaPago) {
  const pendientes = [];
  if (!fecha) pendientes.push({ destino: 'paso-fecha', texto: 'Elegí la fecha de tu visita' });
  if (resumen.sinEdad === 1) pendientes.push({ destino: 'paso-visitantes', texto: 'Ingresá una edad válida para 1 visitante' });
  if (resumen.sinEdad > 1) {
    pendientes.push({ destino: 'paso-visitantes', texto: `Ingresá una edad válida para ${resumen.sinEdad} visitantes` });
  }
  if (!formaPago) pendientes.push({ destino: 'paso-pago', texto: 'Elegí la forma de pago' });
  return pendientes;
}

export default function App() {
  const [estado, setEstado] = useState(null);
  const [errorCarga, setErrorCarga] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [visitantes, despachar] = useReducer(reductorVisitantes, null, () => [nuevoVisitante()]);
  const [formaPago, setFormaPago] = useState(null);
  const [intentoConfirmar, setIntentoConfirmar] = useState(false);
  const [errorCompra, setErrorCompra] = useState(null);
  const [fasePago, setFasePago] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [verCorreo, setVerCorreo] = useState(false);
  const [versionFormulario, setVersionFormulario] = useState(0);
  const avisoErrorRef = useRef(null);

  const cargar = useCallback(() => {
    setErrorCarga(null);
    obtenerEstado()
      .then(setEstado)
      .catch(error => setErrorCarga(error.message));
  }, []);

  useEffect(cargar, [cargar]);

  // Lleva a la vista el aviso de error una vez que se renderizó
  useEffect(() => {
    if (!errorCompra) return;
    avisoErrorRef.current?.focus({ preventScroll: true });
    avisoErrorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [errorCompra]);

  const resumen = useMemo(() => estado && calcularResumen(visitantes, estado.tarifas), [visitantes, estado]);
  const pendientes = resumen ? listarPendientes(fecha, resumen, formaPago) : [];

  const irA = destino => {
    const seccion = document.getElementById(destino);
    seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    let campo = seccion.querySelector('input');
    if (destino === 'paso-visitantes') {
      campo = [...seccion.querySelectorAll('input[data-campo-edad]')].find(
        input => validarEdad(input.value).estado !== 'valida'
      );
    }
    window.setTimeout(() => campo?.focus({ preventScroll: true }), 450);
  };

  const enviarCompra = async () => {
    if (formaPago === 'mercado_pago') setFasePago('pagando');
    else setEnviando(true);

    try {
      const respuesta = await comprarEntradas({
        fecha_visita: fecha,
        entradas: visitantes.map(visitante => ({ edad: Number(visitante.edad), tipo_pase: visitante.tipoPase })),
        forma_pago: formaPago
      });
      setResultado(respuesta);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setErrorCompra(error.message);
    } finally {
      setFasePago(null);
      setEnviando(false);
    }
  };

  const confirmar = () => {
    setErrorCompra(null);
    if (pendientes.length > 0) {
      setIntentoConfirmar(true);
      irA(pendientes[0].destino);
      return;
    }
    if (formaPago === 'mercado_pago') {
      setFasePago('redirigiendo');
      window.setTimeout(() => setFasePago('checkout'), 1400);
      return;
    }
    enviarCompra();
  };

  const nuevaCompra = () => {
    setResultado(null);
    setVerCorreo(false);
    setFecha(null);
    setFormaPago(null);
    setIntentoConfirmar(false);
    setErrorCompra(null);
    despachar({ tipo: 'reiniciar', visitante: nuevoVisitante() });
    setVersionFormulario(version => version + 1);
    cargar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const portada = resultado
    ? {
        etiqueta: 'Compra confirmada',
        titulo: '¡Te esperamos en el parque!',
        bajada: 'Ya tenés tus entradas. Revisá el detalle y el correo de confirmación que te enviamos.'
      }
    : {
        etiqueta: 'Entradas online',
        titulo: 'Comprá tus entradas',
        bajada: 'Elegí el día de tu visita, sumá a quienes te acompañan y asegurá tu lugar en el parque.'
      };

  return (
    <>
      <Encabezado usuario={estado?.usuario} />
      <Portada {...portada} />

      <main id="contenido" className="principal">
        {!estado && !errorCarga && (
          <div className="estado-carga" role="status">
            <span className="spinner" aria-hidden="true" />
            Cargando…
          </div>
        )}

        {errorCarga && (
          <div className="estado-carga estado-carga--error" role="alert">
            <IconoAlerta tamano={22} />
            <p>{errorCarga}</p>
            <button type="button" className="boton boton--secundario" onClick={cargar}>
              Reintentar
            </button>
          </div>
        )}

        {estado && resultado && (
          <Confirmacion
            resultado={resultado}
            fecha={fecha}
            usuario={estado.usuario}
            onVerCorreo={() => setVerCorreo(true)}
            onNuevaCompra={nuevaCompra}
          />
        )}

        {estado && !resultado && (
          <div className="compra">
            <div className="compra__pasos">
              {errorCompra && (
                <div ref={avisoErrorRef} className="aviso aviso--error alerta-compra" role="alert" tabIndex={-1}>
                  <IconoAlerta tamano={20} />
                  <div>
                    <strong>No pudimos confirmar tu compra.</strong>
                    <span>{errorCompra}</span>
                  </div>
                </div>
              )}

              <Paso
                id="paso-fecha"
                numero={1}
                titulo="¿Cuándo nos visitás?"
                descripcion="Abrimos de martes a domingo, de 8:30 a 19:00 h. Cerramos los lunes, el 25 de diciembre y el 1 de enero. Para el mismo día se puede comprar hasta las 17:30."
                completo={Boolean(fecha)}
              >
                <SelectorFecha
                  key={versionFormulario}
                  hoy={estado.hoy}
                  hora={estado.hora}
                  fecha={fecha}
                  onCambio={setFecha}
                  mostrarRequerido={intentoConfirmar}
                />
              </Paso>

              <Paso
                id="paso-visitantes"
                numero={2}
                titulo="¿Quiénes vienen?"
                descripcion="Cargá la edad y elegí el tipo de pase de cada visitante. El precio de cada entrada depende de la edad."
                completo={Boolean(fecha) && resumen.sinEdad === 0}
                bloqueado={!fecha}
                mensajeBloqueo="Elegí una fecha válida para cargar las entradas"
              >
                <Visitantes
                  tarifas={estado.tarifas}
                  visitantes={visitantes}
                  despachar={despachar}
                  mostrarErrores={intentoConfirmar}
                />
              </Paso>

              <Paso
                id="paso-pago"
                numero={3}
                titulo="¿Cómo querés pagar?"
                descripcion="Pagá online con Mercado Pago o en efectivo en la boletería del parque."
                completo={Boolean(fecha && formaPago)}
                bloqueado={!fecha}
                mensajeBloqueo="Elegí una fecha válida para continuar"
              >
                <FormasPago formaPago={formaPago} onCambio={setFormaPago} mostrarRequerido={intentoConfirmar} />
              </Paso>
            </div>

            <Resumen
              usuario={estado.usuario}
              fecha={fecha}
              formaPago={formaPago}
              resumen={resumen}
              pendientes={pendientes}
              enviando={enviando}
              onConfirmar={confirmar}
              onIrA={irA}
            />
          </div>
        )}
      </main>

      <PiePagina />

      {estado && !resultado && (
        <BarraMovil formaPago={formaPago} resumen={resumen} enviando={enviando} onConfirmar={confirmar} />
      )}

      <PasarelaMercadoPago
        fase={fasePago}
        total={resumen?.total ?? 0}
        cantidad={visitantes.length}
        fecha={fecha}
        usuario={estado?.usuario}
        onPagar={enviarCompra}
        onCancelar={() => setFasePago(null)}
      />

      <CorreoConfirmacion
        abierto={verCorreo}
        correo={resultado?.email_confirmacion}
        usuario={estado?.usuario}
        onCerrar={() => setVerCorreo(false)}
      />
    </>
  );
}
