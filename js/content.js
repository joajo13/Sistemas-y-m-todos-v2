/**
 * Índice de materias y helpers de acceso.
 *
 * Cada materia vive en js/subjects/<id>.js exportando default un objeto:
 *   Subject = {
 *     id: string,                        // slug en URL y storage
 *     title: string,
 *     subtitle: string,
 *     tagline?: string,
 *     units: Record<string, string>,
 *     sections: Section[],
 *     pdfs: { key, label, path }[],
 *     partials?: Partial[]               // parciales de práctica (transversales)
 *   }
 *
 * Partial = {
 *   id: string,                          // único dentro del subject
 *   title: string,
 *   blurb?: string,                      // descripción corta para el índice
 *   questions: PartialQuestion[]         // ORDENADAS (preserva el orden mixto)
 * }
 *
 * PartialQuestion (discriminada por `kind`) =
 *   | { kind: 'tf', q, a: boolean, explain }
 *   | { kind: 'mc', q, options: string[], correctIndex: number, explain }
 *   | { kind: 'open', q, model }         // desarrollo: se revela respuesta modelo, no se puntúa
 *
 * Section = {
 *   id: string,                          // único dentro del subject
 *   unit?: string,
 *   title: string,
 *   criollo?: string,
 *   blocks: ContentBlock[],
 *   quiz?: { tf: TFQuestion[], mc: MCQuestion[], ms?: MSQuestion[] },
 *   flashcards?: Flashcard[],
 *   quiz2?: { tf: TFQuestion[], mc: MCQuestion[], ms?: MSQuestion[] },  // banco NUEVO (anti-spoiler)
 *   flashcards2?: Flashcard[]            // banco NUEVO (anti-spoiler)
 * }
 *
 * TFQuestion = { id, q, a: boolean, explain }
 * MCQuestion = { id, q, options: string[], correctIndex: number, explain }
 * MSQuestion = { id, q, options: string[5], correctIndexes: number[], explain }
 *   Multi-select: 5 opciones, 0+ correctas (correctIndexes puede ser []),
 *   scoring all-or-nothing. El caso "ninguna correcta" es válido.
 *
 * BANCO NUEVO (quiz2 / flashcards2): set de autoevaluación generado de cero,
 * con reglas anti-spoiler (opciones homogéneas en largo/forma, posición de la
 * correcta aleatoria, sin pistas). NO vive en js/subjects/<materia>.js sino en
 * js/quizzes2/<materia>.js como un mapa { [sectionId]: { quiz2, flashcards2 } }
 * que acá se mergea sobre cada Section por id. Se accede con ?set=2 en la URL.
 * IDs con sufijo 2: tf2-/mc2-/ms2-/fc2-.
 *
 * ContentBlock =
 *   | { type: 'h3', text: string, criollo?: string }
 *   | { type: 'p', text: string }
 *   | { type: 'ul', items: string[] }
 *   | { type: 'ol', items: string[] }
 *   | { type: 'callout', tone: 'info'|'warning'|'criollo', text: string }
 *   | { type: 'figure', src: string, alt: string, caption: string }
 *   | { type: 'math', latex: string, display?: boolean }
 *   | { type: 'table', caption?: string, headers: string[], rows: string[][] }
 *   | { type: 'code', code: string }
 *
 * En strings de p/ul/ol/callout y celdas de table se acepta LaTeX inline
 * entre $...$ y display entre $$...$$. h3.text NO se procesa.
 *
 * Para código inline (un comando, path, flag o filename dentro de un párrafo),
 * usar el tag HTML <code>...</code> directamente en el string. Para bloques de
 * código (comandos multilínea, output de ejemplo), usar el block type 'code'.
 */

import sistemasYMetodos from './subjects/sistemas-y-metodos.js';
import analisisMatematico from './subjects/analisis-matematico.js';
import computacionAplicada from './subjects/computacion-aplicada.js';
import introduccionIngSoftware from './subjects/introduccion-ing-software.js';
import sistemasDigitalesI from './subjects/sistemas-digitales-i.js';

import quizzes2SistemasYMetodos from './quizzes2/sistemas-y-metodos.js';
import quizzes2AnalisisMatematico from './quizzes2/analisis-matematico.js';
import quizzes2ComputacionAplicada from './quizzes2/computacion-aplicada.js';
import quizzes2IntroduccionIngSoftware from './quizzes2/introduccion-ing-software.js';
import quizzes2SistemasDigitalesI from './quizzes2/sistemas-digitales-i.js';

export const SUBJECTS = [sistemasYMetodos, analisisMatematico, computacionAplicada, introduccionIngSoftware, sistemasDigitalesI];

// Banco NUEVO (anti-spoiler): mapa por subject id -> { [sectionId]: { quiz2, flashcards2 } }.
// Se mergea sobre las secciones por id, sin tocar los archivos de js/subjects/.
const QUIZZES2 = {
  'sistemas-y-metodos': quizzes2SistemasYMetodos,
  'analisis-matematico': quizzes2AnalisisMatematico,
  'computacion-aplicada': quizzes2ComputacionAplicada,
  'introduccion-ing-software': quizzes2IntroduccionIngSoftware,
  'sistemas-digitales-i': quizzes2SistemasDigitalesI,
};

for (const subject of SUBJECTS) {
  const bank = QUIZZES2[subject.id];
  if (!bank) continue;
  for (const section of subject.sections) {
    const extra = bank[section.id];
    if (!extra) continue;
    if (extra.quiz2) section.quiz2 = extra.quiz2;
    if (extra.flashcards2) section.flashcards2 = extra.flashcards2;
  }
}

export function getSubject(subjectId) {
  return SUBJECTS.find((s) => s.id === subjectId) || null;
}

export function getSection(subjectId, sectionId) {
  const subject = getSubject(subjectId);
  if (!subject) return null;
  return subject.sections.find((s) => s.id === sectionId) || null;
}

/**
 * Devuelve la primera sección posterior a `currentSectionId` (en orden del
 * array) que tenga la feature pedida ('quiz', 'flashcards', 'quiz2' o
 * 'flashcards2'). Salta secciones que no la tengan. Devuelve null si no hay
 * ninguna más adelante.
 */
export function getNextSectionWith(subjectId, currentSectionId, feature) {
  const subject = getSubject(subjectId);
  if (!subject) return null;
  const idx = subject.sections.findIndex((s) => s.id === currentSectionId);
  if (idx === -1) return null;
  for (let i = idx + 1; i < subject.sections.length; i++) {
    if (subject.sections[i][feature]) return subject.sections[i];
  }
  return null;
}

/**
 * Devuelve el parcial de práctica con `partialId` dentro del subject, o null.
 */
export function getPartial(subjectId, partialId) {
  const subject = getSubject(subjectId);
  if (!subject || !subject.partials) return null;
  return subject.partials.find((p) => p.id === partialId) || null;
}

/**
 * Lee ?subject=<id> de location.search y devuelve el Subject correspondiente.
 * Devuelve null si falta o no existe.
 *
 * Solo para uso en navegador — depende de `location` global. Llamarla desde
 * Node u otro entorno sin `location` lanza ReferenceError.
 */
export function getCurrentSubject() {
  const id = new URLSearchParams(location.search).get('subject');
  if (!id) return null;
  return getSubject(id);
}
