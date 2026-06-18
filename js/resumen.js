import { renderNav } from './nav.js';
import { getCurrentSubject } from './content.js';
import { renderBlock, hydrateBlocks } from './blocks.js';
import { renderMath } from './katex-init.js';

const subject = getCurrentSubject();

if (!subject) {
  location.replace('index.html');
} else if (!subject.resumen) {
  // La materia todavía no tiene resumen generado: volvé a la materia.
  location.replace(`materia.html?subject=${subject.id}`);
} else {
  main();
}

function main() {
  document.title = `Resumen final — ${subject.title}`;
  renderNav({ active: 'home', subject });
  document.getElementById('resumen-back').href = `materia.html?subject=${subject.id}`;

  document.getElementById('resumen-header').innerHTML = `
    <div class="section-header-eyebrow"><span>Resumen final</span></div>
    <h1 class="section-header-title">${subject.title}</h1>
  `;

  const intro = subject.resumen.intro;
  document.getElementById('resumen-intro').innerHTML = intro
    ? `<div class="criollo-callout">
         <span class="eyebrow no-rule" style="display:block;margin-bottom:0.35em;">Para el final</span>
         <p>${intro}</p>
       </div>`
    : '';

  const host = document.getElementById('resumen-content');
  host.innerHTML = subject.resumen.units.map(renderUnit).join('');
  hydrateBlocks(host);

  const renderAll = () => renderMath(host);
  if (typeof window.renderMathInElement === 'function') renderAll();
  else window.addEventListener('load', renderAll, { once: true });
}

function renderUnit(u) {
  const unitTitle = subject.units[u.unit] || '';
  const header = `
    <div class="unit-header" style="margin-top:2.5rem;">
      <span class="unit-header-num">${u.unit}</span>
      <span class="unit-header-title">${unitTitle}</span>
      <span class="unit-header-meta">${u.sections.length} ${u.sections.length === 1 ? 'sección' : 'secciones'}</span>
    </div>
  `;
  return header + u.sections.map(renderResumenSection).join('');
}

function renderResumenSection(s) {
  const body = s.blocks.map(renderBlock).join('');
  const leer = `seccion.html?subject=${subject.id}&id=${s.id}`;
  return `
    <section style="margin-top:2rem;">
      <h3 style="margin-bottom:0.75rem;">${s.title}</h3>
      ${body}
      <p style="margin-top:1rem;">
        <a href="${leer}" class="btn-ghost touch-target"
           style="padding:0.4rem 0.85rem;font-size:.78rem;letter-spacing:.06em;">
          Leer completo →
        </a>
      </p>
    </section>
  `;
}
