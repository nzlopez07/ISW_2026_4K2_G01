/**
 * EcoHarmony Park - Lógica Frontend del Portal de Compras
 * Conexión reactiva con la API respaldada por TicketService (TDD).
 */

const PRECIOS_BASE = {
  regular: 10000,
  vip: 20000,
};

let estado = {
  fecha_visita: "",
  tipo_pase: "regular",
  visitantes: [28], // Por defecto un adulto de 28 años
  forma_pago: "mercado_pago",
  compra_confirmada: null,
};

// ------------------------------------------------------------------------------
// Inicialización al cargar la página
// ------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  inicializarCalendario();
  renderizarVisitantes();
  actualizarResumen();
  cargarDatosUsuario();
});

async function cargarDatosUsuario() {
  try {
    const res = await fetch("/api/estado-usuario");
    if (res.ok) {
      const data = await res.json();
      document.getElementById("user-name").textContent = data.usuario.nombre;
      const iniciales = data.usuario.nombre.split(" ").map(p => p[0]).join("");
      document.getElementById("user-initials").textContent = iniciales;
      document.getElementById("mp-modal-titular").textContent = data.usuario.nombre;
    }
  } catch (e) {
    console.warn("No se pudo conectar con el endpoint de usuario", e);
  }
}

// ------------------------------------------------------------------------------
// Paso 1: Configuración del Calendario
// ------------------------------------------------------------------------------
function inicializarCalendario() {
  const inputFecha = document.getElementById("input-fecha");
  const hoy = new Date();
  
  // Rango de 0 a 30 días
  const maxFecha = new Date();
  maxFecha.setDate(hoy.getDate() + 30);

  const formatoISO = (d) => d.toISOString().split("T")[0];
  inputFecha.min = formatoISO(hoy);
  inputFecha.max = formatoISO(maxFecha);

  // Buscar el primer día abierto (evitar lunes y feriados)
  let fechaInicial = new Date();
  for (let i = 1; i <= 30; i++) {
    fechaInicial.setDate(hoy.getDate() + i);
    if (!esDiaCerrado(fechaInicial)) {
      break;
    }
  }

  inputFecha.value = formatoISO(fechaInicial);
  estado.fecha_visita = inputFecha.value;

  inputFecha.addEventListener("change", (e) => {
    validarFechaSeleccionada(e.target.value);
  });

  validarFechaSeleccionada(inputFecha.value);
}

function esDiaCerrado(fecha) {
  // En JS: getDay() -> 0: Domingo, 1: Lunes, ..., 6: Sábado
  const esLunes = fecha.getDay() === 1;
  const esNavidad = fecha.getMonth() === 11 && fecha.getDate() === 25;
  const esAñoNuevo = fecha.getMonth() === 0 && fecha.getDate() === 1;
  return esLunes || esNavidad || esAñoNuevo;
}

function validarFechaSeleccionada(fechaStr) {
  const errorEl = document.getElementById("fecha-error");
  const btnSubmit = document.getElementById("btn-submit");

  if (!fechaStr) {
    errorEl.textContent = "Por favor selecciona una fecha.";
    errorEl.style.display = "block";
    btnSubmit.disabled = true;
    return false;
  }

  const [y, m, d] = fechaStr.split("-").map(Number);
  const fecha = new Date(y, m - 1, d);

  if (esDiaCerrado(fecha)) {
    const motivo = fecha.getDay() === 1 
      ? "El bioparque permanece cerrado los días lunes por mantenimiento."
      : "El bioparque permanece cerrado en días festivos (25 de diciembre y 1 de enero).";
    errorEl.textContent = `⚠️ ${motivo}`;
    errorEl.style.display = "block";
    btnSubmit.disabled = true;
    return false;
  }

  errorEl.style.display = "none";
  btnSubmit.disabled = false;
  estado.fecha_visita = fechaStr;
  actualizarResumen();
  return true;
}

// ------------------------------------------------------------------------------
// Paso 2: Selección de Tipo de Pase
// ------------------------------------------------------------------------------
function seleccionarPase(tipo) {
  estado.tipo_pase = tipo;
  document.getElementById("card-pase-regular").classList.toggle("selected", tipo === "regular");
  document.getElementById("card-pase-vip").classList.toggle("selected", tipo === "vip");
  renderizarVisitantes();
  actualizarResumen();
}

// ------------------------------------------------------------------------------
// Paso 3: Gestión de Visitantes y Edades
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// Paso 3: Gestión de Visitantes y Steppers por Categoría (Estándar UX Mobile)
// ------------------------------------------------------------------------------
function modificarCategoria(cat, delta) {
  if (delta > 0) {
    if (estado.visitantes.length >= 10) return;
    
    // Asignar edad default representativa de la categoría
    let edadDefault = 30;
    if (cat === "bebe") edadDefault = 2;
    else if (cat === "menor") edadDefault = 10;
    else if (cat === "mayor") edadDefault = 65;
    else if (cat === "adulto") edadDefault = 30;

    estado.visitantes.push(edadDefault);
  } else if (delta < 0) {
    if (estado.visitantes.length <= 1) return; // Mínimo 1 entrada requerida

    // Buscar el último visitante de esa categoría y removerlo
    let indiceARemover = -1;
    for (let i = estado.visitantes.length - 1; i >= 0; i--) {
      const edad = estado.visitantes[i];
      if (cat === "bebe" && edad <= 3) { indiceARemover = i; break; }
      if (cat === "menor" && edad >= 4 && edad <= 15) { indiceARemover = i; break; }
      if (cat === "adulto" && edad >= 16 && edad <= 59) { indiceARemover = i; break; }
      if (cat === "mayor" && edad >= 60) { indiceARemover = i; break; }
    }

    if (indiceARemover !== -1) {
      estado.visitantes.splice(indiceARemover, 1);
    }
  }

  renderizarVisitantes();
  actualizarResumen();
}

function ajustarEdad(index, delta) {
  const actual = estado.visitantes[index] || 0;
  const nueva = Math.max(0, Math.min(120, actual + delta));
  estado.visitantes[index] = nueva;
  renderizarVisitantes();
  actualizarResumen();
}

function eliminarVisitante(index) {
  if (estado.visitantes.length <= 1) return;
  estado.visitantes.splice(index, 1);
  renderizarVisitantes();
  actualizarResumen();
}

function actualizarEdadVisitante(index, nuevaEdad) {
  const edad = parseInt(nuevaEdad, 10);
  estado.visitantes[index] = isNaN(edad) ? 0 : Math.max(0, Math.min(120, edad));
  renderizarVisitantes();
  actualizarResumen();
}

function renderizarVisitantes() {
  const container = document.getElementById("visitors-list");
  const tagCount = document.getElementById("tag-cantidad-visitantes");

  const totalVisitantes = estado.visitantes.length;
  if (tagCount) {
    tagCount.textContent = `${totalVisitantes} de 10 entradas`;
  }

  // 1. Contar visitantes por categoría
  let cAdultos = 0, cMenores = 0, cMayores = 0, cBebes = 0;
  for (const edad of estado.visitantes) {
    if (edad <= 3) cBebes++;
    else if (edad <= 15) cMenores++;
    else if (edad >= 60) cMayores++;
    else cAdultos++;
  }

  // 2. Actualizar contadores de steppers
  const elCountAdulto = document.getElementById("count-adulto");
  const elCountMenor = document.getElementById("count-menor");
  const elCountMayor = document.getElementById("count-mayor");
  const elCountBebe = document.getElementById("count-bebe");

  if (elCountAdulto) elCountAdulto.textContent = cAdultos;
  if (elCountMenor) elCountMenor.textContent = cMenores;
  if (elCountMayor) elCountMayor.textContent = cMayores;
  if (elCountBebe) elCountBebe.textContent = cBebes;

  // 3. Precios dinámicos en los steppers según el pase seleccionado
  const precioBase = PRECIOS_BASE[estado.tipo_pase];
  const precio50 = precioBase * 0.5;

  const elPriceAdulto = document.getElementById("cat-price-adulto");
  const elPriceMenor = document.getElementById("cat-price-menor");
  const elPriceMayor = document.getElementById("cat-price-mayor");

  if (elPriceAdulto) elPriceAdulto.textContent = `Tarifa Plena • $${precioBase.toLocaleString("es-AR")}`;
  if (elPriceMenor) elPriceMenor.textContent = `50% OFF • $${precio50.toLocaleString("es-AR")}`;
  if (elPriceMayor) elPriceMayor.textContent = `50% OFF • $${precio50.toLocaleString("es-AR")}`;

  // 4. Estados de habilitación de botones + / -
  const limiteAlcanzado = totalVisitantes >= 10;
  const esMinimoTotal = totalVisitantes <= 1;

  ["adulto", "menor", "mayor", "bebe"].forEach(cat => {
    const btnPlus = document.getElementById(`btn-plus-${cat}`);
    const btnMinus = document.getElementById(`btn-minus-${cat}`);
    let countCat = 0;
    if (cat === "adulto") countCat = cAdultos;
    if (cat === "menor") countCat = cMenores;
    if (cat === "mayor") countCat = cMayores;
    if (cat === "bebe") countCat = cBebes;

    if (btnPlus) btnPlus.disabled = limiteAlcanzado;
    if (btnMinus) btnMinus.disabled = countCat <= 0 || esMinimoTotal;
  });

  // 5. Renderizar lista individual de entradas
  container.innerHTML = estado.visitantes.map((edad, index) => {
    let badgeTexto = "Tarifa Plena";
    let badgeClase = "discount-full";
    let catNombre = "Adulto";
    let precioFinal = precioBase;

    if (edad <= 3) {
      badgeTexto = "Bebé - Gratis ($0)";
      badgeClase = "discount-free";
      catNombre = "Bebé";
      precioFinal = 0;
    } else if (edad <= 15) {
      badgeTexto = "Menor - 50% OFF";
      badgeClase = "discount-half";
      catNombre = "Menor";
      precioFinal = precioBase * 0.5;
    } else if (edad >= 60) {
      badgeTexto = "Adulto Mayor - 50% OFF";
      badgeClase = "discount-half";
      catNombre = "Adulto Mayor";
      precioFinal = precioBase * 0.5;
    }

    const puedeEliminar = totalVisitantes > 1;

    return `
      <div class="visitor-item-card">
        <div class="visitor-top-row">
          <div class="visitor-badge-group">
            <span class="visitor-index-pill">#${index + 1} ${catNombre}</span>
            <span class="visitor-price-pill">$${precioFinal.toLocaleString("es-AR")}</span>
          </div>
          <div>
            ${puedeEliminar ? `
              <button type="button" class="btn-remove-visitor" onclick="eliminarVisitante(${index})" title="Eliminar entrada #${index + 1}" aria-label="Eliminar entrada">
                ✕
              </button>
            ` : `<span class="btn-remove-placeholder"></span>`}
          </div>
        </div>

        <div class="visitor-bottom-row">
          <div class="visitor-age-stepper">
            <span class="visitor-age-label">Edad:</span>
            <button type="button" class="btn-age-quick" onclick="ajustarEdad(${index}, -1)" ${edad <= 0 ? "disabled" : ""} aria-label="Disminuir edad">−</button>
            <input 
              id="visitor-age-${index}"
              type="number" 
              class="visitor-age-input" 
              value="${edad}" 
              min="0" 
              max="120"
              inputmode="numeric"
              onchange="actualizarEdadVisitante(${index}, this.value)"
              aria-label="Edad del visitante ${index + 1}"
            />
            <button type="button" class="btn-age-quick" onclick="ajustarEdad(${index}, 1)" ${edad >= 120 ? "disabled" : ""} aria-label="Aumentar edad">+</button>
            <span style="font-size: 0.8rem; color: var(--text-muted);">años</span>
          </div>
          <span class="discount-pill ${badgeClase}">${badgeTexto}</span>
        </div>
      </div>
    `;
  }).join("");
}

// ------------------------------------------------------------------------------
// Paso 4: Selección de Medio de Pago
// ------------------------------------------------------------------------------
function seleccionarPago(medio) {
  estado.forma_pago = medio;
  document.getElementById("card-pago-mp").classList.toggle("selected", medio === "mercado_pago");
  document.getElementById("card-pago-efectivo").classList.toggle("selected", medio === "efectivo");
  actualizarResumen();
}

// ------------------------------------------------------------------------------
// Cálculo y Actualización del Resumen en Tiempo Real
// ------------------------------------------------------------------------------
function calcularTotales() {
  const precioBase = PRECIOS_BASE[estado.tipo_pase];
  const subtotalBruto = estado.visitantes.length * precioBase;
  
  let totalFinal = 0;
  for (const edad of estado.visitantes) {
    if (edad <= 3) {
      totalFinal += 0;
    } else if (edad <= 15 || edad >= 60) {
      totalFinal += precioBase * 0.5;
    } else {
      totalFinal += precioBase;
    }
  }

  const descuentoTotal = subtotalBruto - totalFinal;
  return { subtotalBruto, descuentoTotal, totalFinal };
}

function actualizarResumen() {
  const { subtotalBruto, descuentoTotal, totalFinal } = calcularTotales();

  // Fecha legible
  if (estado.fecha_visita) {
    const [y, m, d] = estado.fecha_visita.split("-");
    document.getElementById("summary-fecha").textContent = `${d}/${m}/${y}`;
  }

  document.getElementById("summary-pase").textContent = estado.tipo_pase === "regular" ? "Pase Regular" : "Pase VIP";
  document.getElementById("summary-cantidad").textContent = `${estado.visitantes.length} entrada${estado.visitantes.length > 1 ? "s" : ""}`;
  document.getElementById("summary-pago").textContent = estado.forma_pago === "mercado_pago" ? "Mercado Pago" : "Efectivo";

  document.getElementById("summary-subtotal").textContent = `$${subtotalBruto.toLocaleString("es-AR")}`;
  document.getElementById("summary-descuento").textContent = `-$${descuentoTotal.toLocaleString("es-AR")}`;
  document.getElementById("summary-total").textContent = `$${totalFinal.toLocaleString("es-AR")}`;

  document.getElementById("mp-modal-total").textContent = `$${totalFinal.toLocaleString("es-AR")}`;

  // Sincronizar barra flotante de checkout móvil
  const elMobileTotal = document.getElementById("mobile-total-display");
  const elMobileCant = document.getElementById("mobile-cant-display");
  if (elMobileTotal) {
    elMobileTotal.textContent = `$${totalFinal.toLocaleString("es-AR")}`;
  }
  if (elMobileCant) {
    const paseNombre = estado.tipo_pase === "regular" ? "Regular" : "VIP";
    elMobileCant.textContent = `${estado.visitantes.length} ent. • Pase ${paseNombre}`;
  }
}

// ------------------------------------------------------------------------------
// Proceso de Compra e Integración con Backend / Mercado Pago
// ------------------------------------------------------------------------------
async function procesarCompra() {
  ocultarAlertaError();

  if (!validarFechaSeleccionada(estado.fecha_visita)) {
    return;
  }

  // Si seleccionó Mercado Pago, mostramos el modal de confirmación de MP
  if (estado.forma_pago === "mercado_pago") {
    const { totalFinal } = calcularTotales();
    document.getElementById("mp-modal-total").textContent = `$${totalFinal.toLocaleString("es-AR")}`;
    abrirModal("modal-mercadopago");
    return;
  }

  // Si seleccionó efectivo, confirmamos directamente
  ejecutarLlamadaBackend();
}

function confirmarTransaccionMP() {
  cerrarModal("modal-mercadopago");
  ejecutarLlamadaBackend();
}

async function ejecutarLlamadaBackend() {
  const btnSubmit = document.getElementById("btn-submit");
  btnSubmit.disabled = true;
  btnSubmit.textContent = "Procesando...";

  try {
    const res = await fetch("/api/comprar-entradas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fecha_visita: estado.fecha_visita,
        edades_visitantes: estado.visitantes,
        forma_pago: estado.forma_pago,
        tipo_pase: estado.tipo_pase,
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.exito) {
      mostrarAlertaError(data.error || "Ocurrió un error al procesar la compra.");
      btnSubmit.disabled = false;
      btnSubmit.textContent = "Confirmar Compra";
      return;
    }

    // Éxito: guardar resultado y mostrar voucher
    estado.compra_confirmada = data;
    mostrarVoucherExito(data);

  } catch (err) {
    mostrarAlertaError("Error de comunicación con el servidor: " + err.message);
  } finally {
    btnSubmit.disabled = false;
    btnSubmit.textContent = "Confirmar Compra";
  }
}

function mostrarVoucherExito(data) {
  document.getElementById("voucher-id-compra").textContent = data.id_compra;
  document.getElementById("voucher-fecha").textContent = data.fecha_visita;
  document.getElementById("voucher-cantidad").textContent = `${data.cantidad_entradas} entrada${data.cantidad_entradas > 1 ? "s" : ""}`;
  
  const elPase = document.getElementById("voucher-pase");
  if (elPase) {
    elPase.textContent = data.tipo_pase === "vip" ? "Pase VIP" : "Pase Regular";
  }
  
  document.getElementById("voucher-total").textContent = `$${data.monto_total.toLocaleString("es-AR")}`;
  abrirModal("modal-voucher");
}

function abrirVisorEmail() {
  cerrarModal("modal-voucher");
  
  const emailData = estado.compra_confirmada?.email_confirmacion;
  if (!emailData) return;

  document.getElementById("email-destinatario").textContent = emailData.destinatario;
  document.getElementById("email-asunto").textContent = emailData.asunto;
  document.getElementById("email-orden").textContent = emailData.id_compra;
  document.getElementById("email-fecha").textContent = emailData.fecha_visita;
  document.getElementById("email-pago").textContent = emailData.forma_pago;
  document.getElementById("email-total").textContent = `$${emailData.monto_total.toLocaleString("es-AR")}`;

  const listaUl = document.getElementById("email-lista-entradas");
  listaUl.innerHTML = emailData.entradas.map(ent => `
    <li>Entrada #${ent.numero}: ${ent.categoria} (Pase ${ent.tipo_pase}) — <strong>$${ent.precio.toLocaleString("es-AR")}</strong></li>
  `).join("");

  abrirModal("modal-email");
}

// ------------------------------------------------------------------------------
// Utilidades de Modales y Alertas
// ------------------------------------------------------------------------------
function abrirModal(id) {
  document.getElementById(id).classList.add("active");
}

function cerrarModal(id) {
  document.getElementById(id).classList.remove("active");
}

function mostrarAlertaError(mensaje) {
  const el = document.getElementById("api-error-alert");
  el.textContent = mensaje;
  el.style.display = "block";
}

function ocultarAlertaError() {
  const el = document.getElementById("api-error-alert");
  el.style.display = "none";
}
