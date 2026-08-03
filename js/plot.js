/**
 * Motor de gráficos matemáticos interactivos.
 *
 * Canvas 2D vanilla, sin dependencias ni CDN. Renderiza el ContentBlock de
 * tipo 'plot' que usan las materias con contenido analítico (curvas, rectas
 * tangentes, puntos críticos, comparación de f / f' / f'').
 *
 * Interacción disponible:
 *   - Arrastrar el punto de tangencia sobre la curva (mouse, touch) o moverlo
 *     con el slider / las flechas del teclado. La pendiente se recalcula en vivo.
 *   - Prender y apagar curvas desde la leyenda.
 *   - Crosshair al pasar el mouse, con las coordenadas del punto.
 *
 * Shape del block (todos los campos salvo `curves` son opcionales):
 *
 *   {
 *     type: 'plot',
 *     caption: string,
 *     height: number,                      // alto en px (default 340)
 *     domain: [xmin, xmax],                // default [-5, 5]
 *     range: [ymin, ymax],                 // default: autoescala sobre las curvas
 *     grid: boolean,                       // default true
 *     crosshair: boolean,                  // default true
 *     curves: [{
 *       fn: (x) => number,                 // requerido
 *       d1: (x) => number,                 // derivada exacta (si no, numérica)
 *       label: string,                     // 'f(x)'
 *       color: 'ink'|'accent'|'forest'|'ochre'|'steel'|'violet'|'muted',
 *       dash: boolean,
 *       hidden: boolean,                   // arranca apagada
 *       toggleable: boolean,               // default true si hay label
 *       width: number,
 *     }],
 *     tangent: {
 *       curve: number,                     // índice en curves (default 0)
 *       at: number,                        // x inicial del punto de tangencia
 *       min: number, max: number,          // límites del arrastre (default domain)
 *       draggable: boolean,                // default true
 *       triangle: boolean,                 // triángulo pendiente (default true)
 *       readout: ('f'|'d1'|'d2')[],        // qué mostrar (default ['f','d1'])
 *     },
 *     points: [{ x, y, on, label, color, guides }],
 *       // `on` = índice de curva para calcular y. `guides` = líneas punteadas
 *       // hasta los ejes con la etiqueta proyectada.
 *     vlines: [{ x, label, color, dash }],
 *     hlines: [{ y, label, color, dash }],
 *     annotations: [{ x, y, text, color, align }],
 *   }
 */

const PALETTE = {
  ink: '#1F1B17',
  accent: '#8E2B1F',
  forest: '#3F5B3C',
  ochre: '#B86A2F',
  steel: '#2F5D7C',
  violet: '#6B4E8E',
  muted: '#847762',
};

const AXIS = '#A89A82';
const GRID = '#DCD2BC';
const GRID_STRONG = '#CBBFA6';
const PAPER = '#FBF6E9';
const LABEL = '#5F5545';

const PAD = { l: 46, r: 20, t: 18, b: 34 };

// Registro de specs: renderBlock devuelve sólo un placeholder con el id, así
// los blocks pueden llevar funciones JS de verdad (no serializables a JSON).
const registry = new Map();
let seq = 0;

const color = (name) => PALETTE[name] || name || PALETTE.ink;

/** Deriva numéricamente por diferencia centrada (fallback si no hay d1/d2). */
const num1 = (f, x, h = 1e-5) => (f(x + h) - f(x - h)) / (2 * h);
const num2 = (f, x, h = 1e-3) => (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);

const slopeOf = (c, x) => (typeof c.d1 === 'function' ? c.d1(x) : num1(c.fn, x));
const curvatureOf = (c, x) => (typeof c.d2 === 'function' ? c.d2(x) : num2(c.fn, x));

/** Formatea con coma decimal (convención de la cátedra) y sin ceros de más. */
function fmt(v, decimals = 2) {
  if (!Number.isFinite(v)) return '—';
  let s = v.toFixed(decimals);
  if (s.includes('.')) s = s.replace(/\.?0+$/, '');
  if (s === '-0') s = '0';
  return s.replace('.', ',');
}

/** Paso de grilla "redondo" (1, 2, 5 × 10^n) para ~`target` divisiones. */
function niceStep(span, target) {
  const raw = span / Math.max(1, target);
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const mult = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10;
  return mult * mag;
}

/** Autoescala el eje y muestreando las curvas visibles sobre el dominio. */
function autoRange(curves, [xmin, xmax]) {
  let lo = Infinity;
  let hi = -Infinity;
  for (const c of curves) {
    for (let i = 0; i <= 200; i++) {
      const y = c.fn(xmin + ((xmax - xmin) * i) / 200);
      if (!Number.isFinite(y)) continue;
      if (y < lo) lo = y;
      if (y > hi) hi = y;
    }
  }
  if (!Number.isFinite(lo) || !Number.isFinite(hi)) return [-5, 5];
  if (hi - lo < 1e-9) { lo -= 1; hi += 1; }
  const pad = (hi - lo) * 0.12;
  return [lo - pad, hi + pad];
}

/**
 * Devuelve el HTML del block y registra su spec para la hidratación posterior.
 */
export function renderPlot(spec) {
  const id = `plot-${++seq}`;
  registry.set(id, spec);
  const caption = spec.caption ? `<figcaption>${spec.caption}</figcaption>` : '';
  const h = spec.height || 340;
  return `
    <figure class="plot-figure" data-plot-id="${id}">
      <div class="plot-stage" style="height:${h}px">
        <canvas class="plot-canvas"></canvas>
      </div>
      <div class="plot-ui"></div>
      ${caption}
    </figure>
  `;
}

/** Engancha el comportamiento interactivo de todos los plots del contenedor. */
export function hydratePlots(container) {
  container.querySelectorAll('[data-plot-id]').forEach((fig) => {
    if (fig.dataset.plotReady === '1') return;
    const spec = registry.get(fig.dataset.plotId);
    if (!spec) return;
    fig.dataset.plotReady = '1';
    try {
      buildPlot(fig, spec);
    } catch (err) {
      console.error('No se pudo renderizar el gráfico:', err);
    }
  });
}

function buildPlot(fig, spec) {
  const canvas = fig.querySelector('.plot-canvas');
  const ui = fig.querySelector('.plot-ui');
  const ctx = canvas.getContext('2d');

  const domain = spec.domain || [-5, 5];
  const curves = (spec.curves || []).map((c) => ({
    toggleable: !!c.label,
    width: 2,
    ...c,
    visible: !c.hidden,
  }));

  const tan = spec.tangent
    ? {
        curve: 0,
        draggable: true,
        triangle: true,
        readout: ['f', 'd1'],
        min: domain[0],
        max: domain[1],
        ...spec.tangent,
        x: spec.tangent.at ?? (domain[0] + domain[1]) / 2,
      }
    : null;

  // Estado de la vista
  let range = spec.range || autoRange(curves.filter((c) => c.visible), domain);
  let W = 0;
  let H = 0;
  let hover = null; // { x, y } en coordenadas matemáticas

  const plotW = () => W - PAD.l - PAD.r;
  const plotH = () => H - PAD.t - PAD.b;
  const toPx = (x) => PAD.l + ((x - domain[0]) / (domain[1] - domain[0])) * plotW();
  const toPy = (y) => PAD.t + ((range[1] - y) / (range[1] - range[0])) * plotH();
  const fromPx = (px) => domain[0] + ((px - PAD.l) / plotW()) * (domain[1] - domain[0]);
  const fromPy = (py) => range[1] - ((py - PAD.t) / plotH()) * (range[1] - range[0]);

  // ---- Controles (leyenda + slider + lectura de la pendiente) --------------

  const legendItems = curves.filter((c) => c.label && c.toggleable);
  let legendHtml = '';
  if (legendItems.length) {
    legendHtml = `<div class="plot-legend">${curves
      .map((c, i) =>
        c.label && c.toggleable
          ? `<label class="plot-legend-item">
               <input type="checkbox" data-curve="${i}" ${c.visible ? 'checked' : ''} />
               <span class="plot-swatch" style="background:${color(c.color)}"></span>
               <span class="plot-legend-label">${c.label}</span>
             </label>`
          : ''
      )
      .join('')}</div>`;
  }

  let tangentHtml = '';
  if (tan && tan.draggable) {
    tangentHtml = `
      <div class="plot-tangent-ui">
        <label class="plot-slider-row">
          <span class="plot-slider-caption">Punto de tangencia</span>
          <input type="range" class="plot-slider"
                 min="${tan.min}" max="${tan.max}" step="0.01" value="${tan.x}"
                 aria-label="Mover el punto de tangencia sobre la curva" />
        </label>
        <div class="plot-readout" role="status" aria-live="polite"></div>
      </div>
    `;
  } else if (tan) {
    tangentHtml = `<div class="plot-tangent-ui"><div class="plot-readout" role="status"></div></div>`;
  }

  ui.innerHTML = legendHtml + tangentHtml;

  const slider = ui.querySelector('.plot-slider');
  const readout = ui.querySelector('.plot-readout');

  ui.querySelectorAll('input[data-curve]').forEach((box) => {
    box.addEventListener('change', () => {
      curves[Number(box.dataset.curve)].visible = box.checked;
      if (!spec.range) range = autoRange(curves.filter((c) => c.visible), domain);
      draw();
    });
  });

  if (slider) {
    slider.addEventListener('input', () => {
      tan.x = Number(slider.value);
      draw();
    });
  }

  // ---- Arrastre del punto de tangencia sobre el canvas ---------------------

  if (tan && tan.draggable) {
    let dragging = false;

    const setFromEvent = (e) => {
      const r = canvas.getBoundingClientRect();
      const x = fromPx(e.clientX - r.left);
      tan.x = Math.min(tan.max, Math.max(tan.min, x));
      if (slider) slider.value = String(tan.x);
      draw();
    };

    canvas.addEventListener('pointerdown', (e) => {
      dragging = true;
      canvas.setPointerCapture(e.pointerId);
      canvas.classList.add('is-dragging');
      setFromEvent(e);
      e.preventDefault();
    });
    canvas.addEventListener('pointermove', (e) => {
      if (dragging) setFromEvent(e);
    });
    const stop = (e) => {
      if (!dragging) return;
      dragging = false;
      canvas.classList.remove('is-dragging');
      try { canvas.releasePointerCapture(e.pointerId); } catch { /* ya liberado */ }
    };
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('pointercancel', stop);
    canvas.classList.add('is-draggable');
  }

  // ---- Crosshair de lectura ------------------------------------------------

  if (spec.crosshair !== false) {
    canvas.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') return;
      const r = canvas.getBoundingClientRect();
      const px = e.clientX - r.left;
      const py = e.clientY - r.top;
      hover =
        px >= PAD.l && px <= W - PAD.r && py >= PAD.t && py <= H - PAD.b
          ? { x: fromPx(px), y: fromPy(py) }
          : null;
      draw();
    });
    canvas.addEventListener('pointerleave', () => {
      hover = null;
      draw();
    });
  }

  // ---- Dibujo --------------------------------------------------------------

  function resize() {
    const stage = canvas.parentElement;
    const dpr = window.devicePixelRatio || 1;
    W = stage.clientWidth;
    H = stage.clientHeight;
    if (!W || !H) return;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  function clipPlot() {
    ctx.beginPath();
    ctx.rect(PAD.l, PAD.t, plotW(), plotH());
    ctx.clip();
  }

  function drawGrid() {
    const xs = niceStep(domain[1] - domain[0], Math.max(4, Math.round(plotW() / 78)));
    const ys = niceStep(range[1] - range[0], Math.max(3, Math.round(plotH() / 54)));

    ctx.font = '11px Geist, ui-sans-serif, system-ui, sans-serif';
    ctx.lineWidth = 1;

    // Verticales
    for (let x = Math.ceil(domain[0] / xs) * xs; x <= domain[1] + 1e-9; x += xs) {
      const px = Math.round(toPx(x)) + 0.5;
      const isZero = Math.abs(x) < xs / 1000;
      if (spec.grid !== false) {
        ctx.strokeStyle = isZero ? GRID_STRONG : GRID;
        ctx.beginPath();
        ctx.moveTo(px, PAD.t);
        ctx.lineTo(px, H - PAD.b);
        ctx.stroke();
      }
      if (!isZero) {
        ctx.fillStyle = LABEL;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(fmt(x, 2), px, H - PAD.b + 8);
      }
    }

    // Horizontales
    for (let y = Math.ceil(range[0] / ys) * ys; y <= range[1] + 1e-9; y += ys) {
      const py = Math.round(toPy(y)) + 0.5;
      const isZero = Math.abs(y) < ys / 1000;
      if (spec.grid !== false) {
        ctx.strokeStyle = isZero ? GRID_STRONG : GRID;
        ctx.beginPath();
        ctx.moveTo(PAD.l, py);
        ctx.lineTo(W - PAD.r, py);
        ctx.stroke();
      }
      if (!isZero) {
        ctx.fillStyle = LABEL;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(fmt(y, 2), PAD.l - 8, py);
      }
    }
  }

  function drawAxes() {
    ctx.strokeStyle = AXIS;
    ctx.lineWidth = 1.4;
    ctx.fillStyle = AXIS;

    // Eje x (si y=0 entra en el rango; si no, lo apoya en el borde)
    const y0 = Math.min(Math.max(0, range[0]), range[1]);
    const py = Math.round(toPy(y0)) + 0.5;
    ctx.beginPath();
    ctx.moveTo(PAD.l, py);
    ctx.lineTo(W - PAD.r, py);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(W - PAD.r, py);
    ctx.lineTo(W - PAD.r - 7, py - 4);
    ctx.lineTo(W - PAD.r - 7, py + 4);
    ctx.closePath();
    ctx.fill();

    // Eje y
    const x0 = Math.min(Math.max(0, domain[0]), domain[1]);
    const px = Math.round(toPx(x0)) + 0.5;
    ctx.beginPath();
    ctx.moveTo(px, H - PAD.b);
    ctx.lineTo(px, PAD.t);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(px, PAD.t);
    ctx.lineTo(px - 4, PAD.t + 7);
    ctx.lineTo(px + 4, PAD.t + 7);
    ctx.closePath();
    ctx.fill();
  }

  function drawCurve(c) {
    const steps = Math.max(120, Math.round(plotW()));
    const yspan = range[1] - range[0];
    ctx.save();
    clipPlot();
    ctx.strokeStyle = color(c.color);
    ctx.lineWidth = c.width;
    ctx.lineJoin = 'round';
    ctx.setLineDash(c.dash ? [6, 5] : []);
    ctx.beginPath();
    let started = false;
    let prevY = null;
    for (let i = 0; i <= steps; i++) {
      const x = domain[0] + ((domain[1] - domain[0]) * i) / steps;
      const y = c.fn(x);
      // Corta el trazo en discontinuidades y asíntotas para no dibujar
      // el salto vertical falso que uniría las dos ramas.
      if (!Number.isFinite(y) || (prevY !== null && Math.abs(y - prevY) > yspan * 8)) {
        started = false;
        prevY = Number.isFinite(y) ? y : null;
        continue;
      }
      const px = toPx(x);
      const py = toPy(y);
      if (!started) {
        ctx.moveTo(px, py);
        started = true;
      } else {
        ctx.lineTo(px, py);
      }
      prevY = y;
    }
    ctx.stroke();
    ctx.restore();
  }

  function drawTangent() {
    const c = curves[tan.curve];
    if (!c || !c.visible) return;
    const x0 = tan.x;
    const y0 = c.fn(x0);
    if (!Number.isFinite(y0)) return;
    const m = slopeOf(c, x0);
    if (!Number.isFinite(m)) return;

    ctx.save();
    clipPlot();

    // Triángulo de pendiente (rise / run), como en el apunte
    if (tan.triangle && Math.abs(m) > 1e-9) {
      const xspan = domain[1] - domain[0];
      const yspan = range[1] - range[0];
      let run = xspan * 0.13;
      if (Math.abs(m) * run > yspan * 0.26) run = (yspan * 0.26) / Math.abs(m);
      const rise = m * run;
      ctx.fillStyle = m >= 0 ? 'rgba(63,91,60,0.16)' : 'rgba(142,43,31,0.14)';
      ctx.strokeStyle = m >= 0 ? 'rgba(63,91,60,0.55)' : 'rgba(142,43,31,0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(toPx(x0), toPy(y0));
      ctx.lineTo(toPx(x0 + run), toPy(y0));
      ctx.lineTo(toPx(x0 + run), toPy(y0 + rise));
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Recta tangente, extendida a todo el ancho
    ctx.strokeStyle = PALETTE.ochre;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(toPx(domain[0]), toPy(y0 + m * (domain[0] - x0)));
    ctx.lineTo(toPx(domain[1]), toPy(y0 + m * (domain[1] - x0)));
    ctx.stroke();
    ctx.restore();

    // Punto de tangencia. Va fuera del clip para que no se recorte justo en el
    // borde, pero si quedó muy afuera del área no se dibuja: si no, se pintaría
    // encima de los ejes y las etiquetas.
    const px = toPx(x0);
    const py = toPy(y0);
    if (px < PAD.l - 10 || px > W - PAD.r + 10 || py < PAD.t - 10 || py > H - PAD.b + 10) return;
    ctx.fillStyle = PAPER;
    ctx.strokeStyle = PALETTE.ochre;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(px, py, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  function drawPoints() {
    for (const p of spec.points || []) {
      const src = typeof p.on === 'number' ? curves[p.on] : null;
      const y = p.y ?? (src ? src.fn(p.x) : null);
      if (y === null || !Number.isFinite(y)) continue;
      const px = toPx(p.x);
      const py = toPy(y);
      const col = color(p.color || 'steel');

      if (p.guides) {
        ctx.save();
        ctx.strokeStyle = col;
        ctx.globalAlpha = 0.5;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        const axisY = toPy(Math.min(Math.max(0, range[0]), range[1]));
        const axisX = toPx(Math.min(Math.max(0, domain[0]), domain[1]));
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px, axisY);
        ctx.moveTo(px, py);
        ctx.lineTo(axisX, py);
        ctx.stroke();
        ctx.restore();
      }

      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(px, py, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = PAPER;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      if (p.label) {
        ctx.fillStyle = col;
        ctx.font = '600 12px Geist, ui-sans-serif, system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'bottom';
        ctx.fillText(p.label, px + 8, py - 6);
      }
    }
  }

  function drawRules() {
    ctx.save();
    clipPlot();
    for (const v of spec.vlines || []) {
      ctx.strokeStyle = color(v.color || 'muted');
      ctx.lineWidth = 1.2;
      ctx.setLineDash(v.dash === false ? [] : [5, 4]);
      ctx.beginPath();
      ctx.moveTo(toPx(v.x), PAD.t);
      ctx.lineTo(toPx(v.x), H - PAD.b);
      ctx.stroke();
      if (v.label) {
        ctx.setLineDash([]);
        ctx.fillStyle = color(v.color || 'muted');
        ctx.font = '600 11px Geist, ui-sans-serif, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(v.label, toPx(v.x), PAD.t + 2);
      }
    }
    for (const hl of spec.hlines || []) {
      ctx.strokeStyle = color(hl.color || 'muted');
      ctx.lineWidth = 1.2;
      ctx.setLineDash(hl.dash === false ? [] : [5, 4]);
      ctx.beginPath();
      ctx.moveTo(PAD.l, toPy(hl.y));
      ctx.lineTo(W - PAD.r, toPy(hl.y));
      ctx.stroke();
      if (hl.label) {
        ctx.setLineDash([]);
        ctx.fillStyle = color(hl.color || 'muted');
        ctx.font = '600 11px Geist, ui-sans-serif, system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'bottom';
        ctx.fillText(hl.label, PAD.l + 4, toPy(hl.y) - 3);
      }
    }
    ctx.restore();
  }

  function drawAnnotations() {
    for (const a of spec.annotations || []) {
      ctx.fillStyle = color(a.color || 'ink');
      ctx.font = '600 12px Geist, ui-sans-serif, system-ui, sans-serif';
      ctx.textAlign = a.align || 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(a.text, toPx(a.x), toPy(a.y));
    }
  }

  function drawCrosshair() {
    if (!hover) return;
    ctx.save();
    clipPlot();
    ctx.strokeStyle = 'rgba(132,119,98,0.55)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(toPx(hover.x), PAD.t);
    ctx.lineTo(toPx(hover.x), H - PAD.b);
    ctx.moveTo(PAD.l, toPy(hover.y));
    ctx.lineTo(W - PAD.r, toPy(hover.y));
    ctx.stroke();
    ctx.restore();

    const text = `(${fmt(hover.x)} ; ${fmt(hover.y)})`;
    ctx.font = '11px Geist, ui-sans-serif, system-ui, sans-serif';
    const w = ctx.measureText(text).width + 12;
    const bx = W - PAD.r - w;
    const by = PAD.t + 2;
    ctx.fillStyle = 'rgba(251,246,233,0.92)';
    ctx.strokeStyle = GRID_STRONG;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.rect(bx, by, w, 20);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = LABEL;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, bx + w / 2, by + 10);
  }

  function updateReadout() {
    if (!readout || !tan) return;
    const c = curves[tan.curve];
    if (!c) return;
    const x0 = tan.x;
    const parts = [`<span class="plot-chip"><em>x</em><sub>0</sub> = ${fmt(x0)}</span>`];
    const want = tan.readout;
    if (want.includes('f')) {
      // 'f(x)' → 'f', "f '(x)" → "f '": la etiqueta ya trae su variable.
      const name = (c.label || 'f').replace(/\s*\(x\)\s*$/, '');
      parts.push(`<span class="plot-chip">${name}(<em>x</em><sub>0</sub>) = ${fmt(c.fn(x0))}</span>`);
    }
    if (want.includes('d1')) {
      const m = slopeOf(c, x0);
      const tone = m > 1e-6 ? 'is-pos' : m < -1e-6 ? 'is-neg' : 'is-zero';
      const word = m > 1e-6 ? 'creciente' : m < -1e-6 ? 'decreciente' : 'pendiente nula';
      parts.push(
        `<span class="plot-chip ${tone}">pendiente <em>m</em> = ${fmt(m)} <small>(${word})</small></span>`
      );
    }
    if (want.includes('d2')) {
      const k = curvatureOf(c, x0);
      const tone = k > 1e-6 ? 'is-pos' : k < -1e-6 ? 'is-neg' : 'is-zero';
      const word = k > 1e-6 ? 'cóncava hacia arriba' : k < -1e-6 ? 'cóncava hacia abajo' : 'posible inflexión';
      parts.push(`<span class="plot-chip ${tone}"><em>f</em>′′ = ${fmt(k)} <small>(${word})</small></span>`);
    }
    readout.innerHTML = parts.join('');
  }

  function draw() {
    if (!W || !H) return;
    ctx.clearRect(0, 0, W, H);
    drawGrid();
    drawAxes();
    drawRules();
    for (const c of curves) if (c.visible) drawCurve(c);
    if (tan) drawTangent();
    drawPoints();
    drawAnnotations();
    drawCrosshair();
    updateReadout();
  }

  // Responsive: el canvas se re-dibuja cuando cambia el ancho de la columna.
  if (typeof ResizeObserver === 'function') {
    new ResizeObserver(resize).observe(canvas.parentElement);
  } else {
    window.addEventListener('resize', resize);
  }
  resize();
}
