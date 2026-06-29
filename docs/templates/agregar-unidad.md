# Template para agregar una nueva unidad

Este es el prompt que pegás en una **nueva sesión de Claude Code** cuando querés sumar otra unidad de la materia a la app de estudio (8.2, 9, 10, etc.). El flujo es: soltás los PDFs de la unidad nueva en `C:\Users\Juan\Downloads\`, abrís Claude Code en el directorio del proyecto, pegás el prompt completo de abajo y arrancás.

---

## Cómo usarlo

1. **Asegurate de estar en el directorio del proyecto** al abrir Claude Code:
   ```
   C:\Users\Juan\Desktop\projects\Sistemas y metodos - P2
   ```

2. **Soltá los PDFs de la unidad nueva** en `C:\Users\Juan\Downloads\`. Pueden ser 1, 2 o más PDFs por unidad (igual que la primera unidad).

3. **Editá SOLO los 3 `{{PLACEHOLDERS}}`** del prompt. El resto del template queda igual — las menciones a unidades específicas (8.1, etc.) son descripción del estado actual de la app y Claude las verifica leyendo `js/content.js` al inicio, no las hardcodea.
   - `{{UNIDAD}}`: número de la unidad nueva (ej: `"8.2"`, `"9"`, `"10.1"`)
   - `{{TITULO_UNIDAD}}`: nombre largo (ej: `"Administración de Proyectos II"`, `"Gestión del cambio"`)
   - `{{PDFS}}`: paths absolutos a los PDFs separados por coma

4. **Pegá el prompt completo** en Claude Code y dejá que ejecute. Va a iterar entre 5-15 minutos según la cantidad de contenido. Al final tenés deploy actualizado.

---

## Prompt template (copiar todo lo que está abajo del corte)

---

Quiero agregar la unidad **{{UNIDAD}}** ({{TITULO_UNIDAD}}) a la app de estudio existente. Es la misma materia (Sistemas y Métodos) y la misma app — solo extiendo el contenido.

**Project root**: `C:\Users\Juan\Desktop\projects\Sistemas y metodos - P2`
**Live deploy**: https://joajo13.github.io/Sistemas-y-m-todos-v2/
**Repo**: https://github.com/joajo13/Sistemas-y-m-todos-v2

**PDFs fuente de la unidad nueva** (en `C:\Users\Juan\Downloads\`):
- {{PDFS}}

## Contexto del proyecto

La app ya está construida y deployada. Existe `docs/specs/2026-05-13-study-app-admin-proyectos-design.md` con el diseño y `docs/plans/2026-05-13-study-app-admin-proyectos.md` con el plan original. Leélos antes de tocar nada para entender estructura y convenciones.

Stack: vanilla HTML + JS (módulos ES) + Tailwind por CDN + PDF.js por CDN. Sin npm, sin build. Deploy automático a GH Pages al pushear `main`.

Contenido vive en `js/content.js` como `export const SECTIONS = [...]`. Tipos relevantes y convenciones documentados al principio del archivo.

## Reglas inviolables

1. **Contenido EXCLUSIVAMENTE de los PDFs**. Nada inventado. Los textos del apunte van transcritos (literal o levemente condensados). Quizzes y flashcards basados solo en lo que dice el apunte.
2. **Criollo en rioplatense argentino**: "vos" no "tú", informal pero claro. Cada título de sección lleva criollo. Cada `h3` interno lleva su criollo opcional. En secciones planas (sin `h3`), poné criollo como `callout` tone `info` después del listado.
3. **No romper lo existente**. Las secciones que ya están en `SECTIONS` no se modifican. Vos SOLO agregás objetos nuevos al final del array.
4. **UTF-8 con tildes correctas**. El archivo es ES.
5. **No agregues toolchain** (npm, TS, build steps). Mantené vanilla.
6. **Imágenes**: si los PDFs traen diagramas útiles (no fotos decorativas), extraelos con PyMuPDF a `images/diagrams/<unidad-slug>/`. Pasalos por `figure` blocks en `content.js`.

## Paso 1 — Leer estado actual

Antes de tocar nada, leé:
- `docs/specs/2026-05-13-study-app-admin-proyectos-design.md` (diseño)
- `docs/plans/2026-05-13-study-app-admin-proyectos.md` (plan original — entender qué se hizo)
- `js/content.js` (entender estructura del array `SECTIONS` y formato de los objetos)
- `js/home.js` (entender cómo se renderiza la home)

Confirmá con un `git status` que el working tree está clean y estás en `main`.

## Paso 2 — Refactor para multi-unit (SOLO la primera vez que se agrega una unidad nueva)

Verificá si los objetos de `SECTIONS` ya tienen un campo `unit`. Si NO lo tienen, hay que hacer este refactor chico una sola vez (esto pasa solamente la primera vez que se extiende el proyecto más allá de la unidad inicial).

### 2a. Agregar campo `unit` a todas las secciones existentes

A cada objeto en `SECTIONS` que actualmente NO tenga `unit`, agregale el campo:
```js
unit: '8.1',
```
justo después del `id`. Asumí que todas las secciones pre-existentes son de la unidad 8.1 (porque fue la primera y única hasta este momento). Si no es el caso, paralo y consultame.

### 2b. Modificar `js/home.js` para agrupar por unidad

Reemplazá la última línea (`grid.innerHTML = SECTIONS.map(sectionCard).join('');`) por una lógica que agrupe las secciones por `section.unit` y renderice un header `<h2>` por grupo antes del grid correspondiente.

Ejemplo del comportamiento esperado (los números varían según las unidades que existan):
```
Unidad <X> — <título de esa unidad>
[grid de cards de esa unidad]

Unidad <Y> — <título de esa unidad>
[grid de cards de esa unidad]
```

El subtítulo del header principal (`Sistemas y Métodos — Unidad 8.1` o similar) cambialo a algo genérico como `Sistemas y Métodos — Apuntes` para que sirva con múltiples unidades.

### 2c. Modificar `js/seccion.js` para mostrar la unidad en el header

En el `section-header`, donde dice `<p>Sección ${s.id}</p>`, cambialo a `<p>Unidad ${s.unit} · Sección ${s.id}</p>`.

### 2d. Confirmar localmente con HTTP server

```bash
python -m http.server 8000 &
SERVER_PID=$!
sleep 1
curl -s -o /dev/null -w "index.html: %{http_code}\n" http://localhost:8000/
kill $SERVER_PID 2>/dev/null || true
```

### 2e. Commit del refactor

```bash
git add js/content.js js/home.js js/seccion.js
git commit -m "$(cat <<'EOF'
refactor: soporte multi-unidad en SECTIONS y vistas

Agrega campo `unit` a cada sección (todas las existentes son 8.1).
home.js ahora agrupa por unidad con headers. seccion.js muestra
"Unidad X · Sección Y" en el header. Sin breaking changes: los IDs
de sección y la persistencia localStorage no cambian.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

**Si las secciones YA tienen `unit`** (porque alguien corrió esto antes), saltá este paso entero y pasá directo al Paso 3.

## Paso 3 — Copiar PDFs al proyecto y extraer texto

```bash
mkdir -p "C:/Users/Juan/Desktop/projects/Sistemas y metodos - P2/pdfs"
# Para cada PDF de la unidad nueva, copialo con nombre limpio:
cp "C:/Users/Juan/Downloads/<pdf-original>.pdf" "C:/Users/Juan/Desktop/projects/Sistemas y metodos - P2/pdfs/<unidad>-<slug>.pdf"
```

Convención de nombres: `<unidad>-<slug>.pdf` (ej: `8-2-fundamentos.pdf`, `8-2-presentacion.pdf`, `9-cambio.pdf`).

Después, extraé el texto plano con PyMuPDF para entenderlo. Usá un script ad-hoc en Python:
```python
import fitz
for path in [...]:
    doc = fitz.open(path)
    for i, page in enumerate(doc):
        print(f'--- {path} pg {i+1} ---')
        print(page.get_text())
```

## Paso 4 — Detectar secciones en los PDFs y planificarlas

Leé el texto extraído. Identificá los **títulos numerados** (1., 2., 3., ...) que marcan secciones grandes del apunte. Esas son las secciones de la unidad nueva.

Para cada sección detectada, decidí:
- **id**: continuá la numeración global a partir del último id que ya existe en `SECTIONS`. Ejemplo: si el último id existente es `'7'`, la primera nueva es `'8'`. Si es `'12'`, la primera nueva es `'13'`. Los IDs son strings.
- **unit**: `'{{UNIDAD}}'`.
- **title**: el título tal cual del apunte.
- **criollo**: 2-3 frases informales rioplatense del título completo.
- **blocks**: párrafos + listas + h3 (con criollo si tiene) + figures.
- **quiz**: 3-5 V/F + 3-4 MC.
- **flashcards**: 5-9 cards (concepto / definición).

Listá las secciones planificadas antes de implementar:
```
Sección 8: <título>
Sección 9: <título>
...
```

## Paso 5 — Extraer imágenes útiles (si las hay)

Si los PDFs tienen diagramas útiles (no stock photos decorativas), extraelos con un script tipo este:
```python
import fitz
doc = fitz.open('pdfs/<nombre>.pdf')
for page_num, page in enumerate(doc, 1):
    for i, info in enumerate(page.get_images(full=True)):
        base = doc.extract_image(info[0])
        print(f'page={page_num} idx={i} ext={base["ext"]} size={base["width"]}x{base["height"]}')
```

Inspeccioná las imágenes (leélas como image input si necesitás verlas). Las que son diagramas/esquemas útiles se quedan; las que son fotos decorativas (gente, paisajes, relojes, etc.) se descartan.

Guardá las útiles en `images/diagrams/<unidad-slug>/` (ej: `images/diagrams/8-2/embudo.png`).

Referencialas como `figure` blocks en la data:
```js
{
  type: 'figure',
  src: 'images/diagrams/{{unidad-slug}}/<archivo>.png',
  alt: '<descripción del diagrama>',
  caption: '<una línea de qué muestra>',
}
```

## Paso 6 — Escribir el contenido en `js/content.js`

Agregá los nuevos objetos al final del array `SECTIONS`, antes del `];` de cierre. Mantenés la sangría y formato del archivo existente. Cada objeto sigue exactamente el shape de las secciones 1-7 (mirá la 1 como template).

**Tono criollo**: rioplatense argentino, "vos", informal pero claro. Ejemplos: "Básicamente, ...", "La idea es que...", "Es lo mismo que... pero...".

**Cantidad mínima** por sección:
- 3-5 V/F (con `explain`).
- 3-4 MC (4 opciones, `correctIndex`, `explain`).
- 5-9 flashcards.
- 1 criollo del título + criollo por cada h3.

**IDs únicos**: `tf-<sectionId>-<n>`, `mc-<sectionId>-<n>`, `ms-<sectionId>-<n>`, `fc-<sectionId>-<n>`.

El `quiz` de cada sección puede tener además **`ms`** (multi-select): preguntas de **5 opciones** con
`correctIndexes: number[]`, donde puede haber varias correctas **o ninguna** (`correctIndexes: []`).
Scoring all-or-nothing. Apuntá a 2-3 `ms` por sección.

## Paso 6b — Generar el banco NUEVO anti-spoiler (`quiz2` / `flashcards2`)

Además del quiz/flashcards de la sección, cada sección lleva un **segundo banco** de autoevaluación
pensado para ponerse a prueba en serio. Vive **fuera** de `js/subjects/<materia>.js`, en
`js/quizzes2/<materia>.js`, como un mapa:

```js
export default {
  '<sectionId>': {
    quiz2: { tf: [...], mc: [...], ms: [...] },
    flashcards2: [...],
  },
  // ...
};
```

`js/content.js` lo mergea sobre cada sección por `id` (`sec.quiz2` / `sec.flashcards2`). La app lo
expone con `?set=2` (botones "Quiz nuevo" / "Flashcards nuevas" en la sección). **Para la unidad
nueva, agregá las entradas correspondientes al mapa de `js/quizzes2/<materia>.js`** (no toques el
archivo de la materia).

**Cantidad por sección** en el banco nuevo: 4-5 V/F, 4-5 MC (4 opciones), 2-3 MS (5 opciones,
incluyendo a veces el caso "ninguna correcta"), 6-8 flashcards. IDs con sufijo 2:
`tf2-`, `mc2-`, `ms2-`, `fc2-`.

### Reglas anti-spoiler (OBLIGATORIAS para el banco nuevo)

La idea del banco nuevo es que **no se pueda adivinar la respuesta por su forma**, solo por el
conocimiento. Al generarlo, respetá:

1. **Opciones homogéneas**: mismo largo aproximado, misma forma gramatical y mismo nivel de detalle
   en todas las opciones. Prohibido que la correcta sea la más larga / más técnica / más matizada.
2. **Posición aleatoria** de la correcta (variá `correctIndex` entre 0–3 a lo largo de las preguntas;
   nunca "la más larga").
3. **Distractores plausibles** del mismo dominio (nada absurdo ni de otro tema).
4. **Sin muletas** tipo "todas las anteriores" / "ninguna de las anteriores" como opción.
5. **V/F balanceado** (~50/50); evitá tells de absolutos ("siempre/nunca").
6. **MS con cantidad de correctas impredecible** (0 a 5); incluí ocasionalmente alguna con `[]`.
7. El `explain` puede ser detallado (se muestra **después** de responder), nunca visible en las
   opciones.
8. Contenido **exclusivamente** del apunte de esa sección. Nada inventado.

> Auditoría rápida: tras generar, el ratio "opción correcta = la más larga" en las MC del banco nuevo
> debe acercarse a ~25% (azar), no quedar alto. Si queda alto, estás regalando la respuesta.

## Paso 7 — Verificación

```bash
cd "C:/Users/Juan/Desktop/projects/Sistemas y metodos - P2"
node --check js/content.js && echo "PARSED OK"
grep -c "TBD" js/content.js   # debe dar 0
```

Levantá el server y curl-check (reemplazá `<id>` por los IDs reales que acabás de agregar):
```bash
python -m http.server 8000 &
SERVER_PID=$!
sleep 1
curl -s -o /dev/null -w "seccion <id>: %{http_code}\n" http://localhost:8000/seccion.html?id=<id>
curl -s -o /dev/null -w "quiz <id>: %{http_code}\n" http://localhost:8000/quiz.html?id=<id>
curl -s -o /dev/null -w "flashcards <id>: %{http_code}\n" http://localhost:8000/flashcards.html?id=<id>
# Banco nuevo (anti-spoiler):
curl -s -o /dev/null -w "quiz2 <id>: %{http_code}\n" "http://localhost:8000/quiz.html?id=<id>&set=2"
curl -s -o /dev/null -w "flashcards2 <id>: %{http_code}\n" "http://localhost:8000/flashcards.html?id=<id>&set=2"
kill $SERVER_PID 2>/dev/null || true
```

## Paso 8 — Commit y push

Un commit por unidad (no por sección — son muchos archivos en uno solo, no tiene sentido fragmentar):

```bash
git add js/content.js js/quizzes2/ images/diagrams/ pdfs/
git commit -m "$(cat <<'EOF'
content: agregar Unidad {{UNIDAD}} — {{TITULO_UNIDAD}}

Suma <N> secciones nuevas al array SECTIONS, con criollo, quizzes
(V/F + MC) y flashcards basadas exclusivamente en los PDFs fuente.
Imágenes en images/diagrams/<unidad-slug>/. PDFs en pdfs/.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
git push origin main
```

El push trigger el rebuild de GH Pages. En ~1-2 minutos la unidad nueva está live.

## Paso 9 — Reportar

Al final, mostrá:
- Cantidad de secciones agregadas + sus títulos.
- Cantidad de V/F, MC y flashcards totales agregadas.
- Imágenes incluidas (si las hay).
- SHA del commit + confirmación del push.
- URL para verificar: https://joajo13.github.io/Sistemas-y-m-todos-v2/

## Constraints adicionales

- Sin tests automatizados (no están en scope del proyecto).
- Sin animaciones complejas ni features extra (mantenete dentro del scope del diseño original).
- Si encontrás un concepto que aparece nombrado en un PDF pero sin explicación (ej: como pasó con OBS en la 8.1), agregalo con un callout `info` que diga que aparece en la lista pero el apunte no lo desarrolla. NO inventes definiciones.
- Si los PDFs son grandes y se cae el contexto, dividí el trabajo en pasos: leés un PDF entero primero, después el siguiente, etc.

## Si algo se complica

- Si la unidad es muy distinta en estructura y rompe los patterns de la 8.1: pará, contame qué pasa, y discutimos cambios al diseño antes de avanzar.
- Si un PDF está roto o no se puede leer: pará y avisame qué archivo es.
- Si dudás del criollo o de cómo armar una pregunta: dale la mejor interpretación que respete el texto del apunte y dejá una nota al final con tu duda.

---

## Ejemplo de uso completo

```
Quiero agregar la unidad 8.2 (Administración de Proyectos II) a la app de estudio existente.
...
PDFs fuente de la unidad nueva:
- C:\Users\Juan\Downloads\0177_APU_FundamentosAdminProyectos2_261Q_V1-0.pdf
- C:\Users\Juan\Downloads\0177_APU_PresentacionAdminProyectos2_261Q_V1-0.pdf
```

Y todo lo demás del template tal cual.
