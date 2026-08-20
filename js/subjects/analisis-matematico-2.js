/**
 * Materia: Análisis Matemático 2.
 *
 * Unidad 'derivadas' (secciones 1-4): el apunte de cátedra "Aplicación de las
 * derivadas" (UP), transcripto en forma literal, con criollo, quizzes y
 * flashcards.
 *
 * Unidad 'estudio-completo' (secciones 6-7): el apunte "Estudio completo de
 * funciones. Extremos condicionados" (UP). La sección 6 son los siete pasos
 * del estudio completo más el ejemplo resuelto f(x) = x/(x²+1); la 7, extremos
 * absolutos y condicionados con las cuatro gráficas originales del apunte.
 *
 * Unidad 'tps' (secciones 5 y 8): los trabajos prácticos de la cátedra, con las
 * consignas transcriptas y las figuras originales.
 *
 * Los ocho gráficos del apunte están reconstruidos como blocks de tipo 'plot':
 * gráficos interactivos en canvas (js/plot.js) con recta tangente arrastrable,
 * lectura en vivo de la pendiente y toggles de curvas. Las funciones elegidas
 * reproducen la geometría de las figuras originales (pendientes anotadas,
 * ceros, extremos y puntos de inflexión coinciden con los del apunte).
 *
 * Las fórmulas se escriben en LaTeX entre $...$ (inline) o $$...$$ (display).
 * Render por KaTeX (cargado en seccion.html).
 */

export default {
  id: 'analisis-matematico-2',
  title: 'Análisis Matemático 2',
  subtitle: 'Aplicación de las derivadas · Estudio completo de funciones — Apuntes',
  tagline: 'Crecimiento y decrecimiento · Extremos relativos · Puntos críticos · Concavidad y convexidad · Puntos de inflexión · Asíntotas · Extremos absolutos y condicionados',
  units: {
    'derivadas': 'Aplicación de las derivadas',
    'estudio-completo': 'Estudio completo de funciones. Extremos condicionados',
    'tps': 'Trabajos prácticos',
  },
  sections: [
    {
      id: '1',
      unit: 'derivadas',
      title: 'Crecimiento y decrecimiento de una función',
      criollo: 'Acá la idea es simple: la derivada te dice si la función sube o baja. Si la derivada da positiva en un intervalo, la función viene creciendo; si da negativa, viene bajando. Pensalo con la recta tangente: si está inclinada para arriba, la pendiente es positiva y la función crece. Dale que es la base de todo lo que sigue.',
      blocks: [
        { type: 'p', text: '<strong>Definición:</strong> una función $f: A \\to \\mathbb{R}$ es estrictamente creciente en $(a; b) \\subseteq A$ sí y solo sí dados dos valores $x_1, x_2 \\in (a;b)$ verifican que si $x_2 > x_1 \\Rightarrow f(x_2) > f(x_1)$.' },
        {
          type: 'plot',
          caption: 'Función estrictamente creciente: al tomar $x_2 > x_1$ se verifica que $f(x_2) > f(x_1)$. Arrastrá la tangente y mirá que la pendiente siempre da positiva.',
          height: 360,
          domain: [-2, 4],
          range: [-1, 4.5],
          curves: [
            { fn: (x) => Math.exp(0.75 * x), d1: (x) => 0.75 * Math.exp(0.75 * x), label: 'f(x)', color: 'ink', width: 2.2 },
          ],
          points: [
            { x: 0.5, on: 0, label: 'f(x₁)', color: 'steel', guides: true },
            { x: 1.7, on: 0, label: 'f(x₂)', color: 'steel', guides: true },
          ],
          annotations: [
            { x: 0.5, y: -0.55, text: 'x₁', color: 'steel', align: 'center' },
            { x: 1.7, y: -0.55, text: 'x₂', color: 'steel', align: 'center' },
          ],
          tangent: { curve: 0, at: 1.2, min: -1.8, max: 1.9, readout: ['f', 'd1'] },
        },
        { type: 'p', text: '<strong>Definición:</strong> una función $f: A \\to \\mathbb{R}$ es estrictamente decreciente en $(a; b) \\subseteq A$ sí y solo sí dados dos valores $x_1, x_2 \\in (a;b)$ verifican que si $x_2 > x_1 \\Rightarrow f(x_2) < f(x_1)$.' },
        {
          type: 'plot',
          caption: 'Función estrictamente decreciente: al tomar $x_2 > x_1$ se verifica que $f(x_2) < f(x_1)$. Acá la pendiente de la tangente siempre da negativa.',
          height: 360,
          domain: [-2, 4],
          range: [-1, 4.5],
          curves: [
            { fn: (x) => 1 + 2 * Math.exp(-0.7 * x), d1: (x) => -1.4 * Math.exp(-0.7 * x), label: 'f(x)', color: 'ink', width: 2.2 },
          ],
          points: [
            { x: 0.5, on: 0, label: 'f(x₁)', color: 'steel', guides: true },
            { x: 1.7, on: 0, label: 'f(x₂)', color: 'steel', guides: true },
          ],
          annotations: [
            { x: 0.5, y: -0.55, text: 'x₁', color: 'steel', align: 'center' },
            { x: 1.7, y: -0.55, text: 'x₂', color: 'steel', align: 'center' },
          ],
          tangent: { curve: 0, at: 1.0, min: -0.5, max: 3.8, readout: ['f', 'd1'] },
        },
        { type: 'p', text: 'Observemos en el siguientes gráfico que las rectas tangentes trazadas en puntos donde la función $f(x)$ es creciente tienen <strong>pendiente positiva</strong>, es decir que $f\'(x) > 0$ en dichos puntos, mientras que en los puntos donde $f(x)$ es decreciente las rectas tangentes tienen <strong>pendientes negativas</strong>, o sea que $f\'(x) < 0$ en dichos puntos.' },
        {
          type: 'plot',
          caption: 'Rectas tangentes en $x = -1$, $x = 2$ y $x = 4$: se obtienen $f\'(-1) = 2{,}6$ (creciente), $f\'(2) = -1{,}6$ (decreciente) y $f\'(4) = 1{,}6$ (creciente otra vez). Arrastrá el punto y verificalo.',
          height: 400,
          domain: [-2.2, 6],
          range: [-3, 5.5],
          curves: [
            { fn: (x) => 0.2 * x ** 3 - x ** 2 + 2, d1: (x) => 0.6 * x ** 2 - 2 * x, label: 'f(x)', color: 'steel', width: 2.2 },
          ],
          points: [
            { x: -1, on: 0, color: 'accent' },
            { x: 2, on: 0, color: 'forest' },
            { x: 4, on: 0, color: 'accent' },
          ],
          annotations: [
            { x: -1.05, y: 3.4, text: "f '(-1) = 2,6", color: 'accent' },
            { x: 2.15, y: -0.55, text: "f '(2) = -1,6", color: 'forest' },
            { x: 4.15, y: -1.9, text: "f '(4) = 1,6", color: 'accent' },
          ],
          tangent: { curve: 0, at: -1, min: -1.8, max: 5.4, readout: ['f', 'd1'] },
        },
        { type: 'p', text: 'Podemos enunciar entonces las siguientes propiedades:' },
        {
          type: 'ul',
          items: [
            'Si $f(x)$ es una función creciente y derivable en un intervalo $[a,b]$, entonces: $f\'(x) \\geq 0$.',
            'Si $f(x)$ es una función decreciente y derivable en un intervalo $[a,b]$, entonces: $f\'(x) \\leq 0$.',
            'Si $f(x)$ es una función continua en $[a,b]$ y derivable en $(a,b)$ si $f\'(x) > 0$ entonces $f(x)$ es creciente en el intervalo.',
            'Si $f(x)$ es una función continua en $[a,b]$ y derivable en $(a,b)$ si $f\'(x) < 0$ entonces $f(x)$ es decreciente en el intervalo.',
          ],
        },
        { type: 'p', text: 'Para analizar, entonces, los intervalos en los que una función es estrictamente creciente o decreciente determinaremos los valores de $x$, para los cuales la derivada es positiva o negativa respectivamente.' },
        { type: 'callout', tone: 'criollo', text: 'Ojo con el detalle fino de las propiedades: si sabés que la función crece, la derivada te queda $\\geq 0$ (con el igual incluido, porque puede haber un punto suelto con tangente horizontal). Pero al revés, si la derivada te da estrictamente $> 0$, ahí sí podés afirmar que crece. No es lo mismo la ida que la vuelta.' },
      ],
      quiz: {
        tf: [
          { id: 'tf-1-1', q: 'Si $f$ es estrictamente creciente en $(a;b)$, entonces para $x_2 > x_1$ se verifica $f(x_2) > f(x_1)$.', a: true, explain: 'Es exactamente la definición de función estrictamente creciente que da el apunte.' },
          { id: 'tf-1-2', q: 'Si $f(x)$ es creciente y derivable en $[a,b]$, el apunte concluye que $f\'(x) > 0$ estrictamente.', a: false, explain: 'La propiedad enunciada es $f\'(x) \\geq 0$, con el igual incluido. El estricto aparece en la implicación recíproca: si $f\'(x) > 0$ entonces $f$ es creciente.' },
          { id: 'tf-1-3', q: 'En los puntos donde la función es decreciente, las rectas tangentes tienen pendiente negativa.', a: true, explain: 'Es lo que se observa en el gráfico: pendiente negativa equivale a $f\'(x) < 0$ en esos puntos.' },
          { id: 'tf-1-4', q: 'Para determinar los intervalos de crecimiento y decrecimiento hay que analizar el signo de la función $f(x)$.', a: false, explain: 'Hay que analizar el signo de la <strong>derivada</strong>: se determinan los valores de $x$ para los cuales la derivada es positiva o negativa.' },
          { id: 'tf-1-5', q: 'Una función es estrictamente decreciente en $(a;b)$ si dados $x_1, x_2 \\in (a;b)$ con $x_2 > x_1$ resulta $f(x_2) < f(x_1)$.', a: true, explain: 'Es la definición textual de decrecimiento estricto del apunte.' },
        ],
        mc: [
          {
            id: 'mc-1-1',
            q: 'Según el apunte, ¿qué condición alcanza para afirmar que $f(x)$ es creciente en un intervalo?',
            options: [
              'Que $f(x)$ sea continua en $[a,b]$, derivable en $(a,b)$ y $f\'(x) > 0$',
              'Que $f(x)$ sea continua en $[a,b]$ y $f(x) > 0$',
              'Que $f(x)$ sea derivable y $f\'(x) \\geq 0$',
              'Que $f(x)$ tenga rectas tangentes en todos sus puntos',
            ],
            correctIndex: 0,
            explain: 'La propiedad dice: si $f(x)$ es continua en $[a,b]$ y derivable en $(a,b)$, y $f\'(x) > 0$, entonces $f(x)$ es creciente en el intervalo.',
          },
          {
            id: 'mc-1-2',
            q: 'En el gráfico del apunte se indica $f\'(2) = -1{,}6$. ¿Qué significa?',
            options: [
              'Que en $x = 2$ la recta tangente tiene pendiente negativa y la función es decreciente ahí',
              'Que en $x = 2$ la función vale $-1{,}6$',
              'Que la función tiene un mínimo en $x = 2$',
              'Que la función no es derivable en $x = 2$',
            ],
            correctIndex: 0,
            explain: '$f\'(2)$ es la pendiente de la recta tangente en $x = 2$. Al ser negativa, en ese punto la función es decreciente.',
          },
          {
            id: 'mc-1-3',
            q: 'Si $f(x)$ es decreciente y derivable en $[a,b]$, el apunte afirma que:',
            options: [
              '$f\'(x) \\leq 0$',
              '$f\'(x) < 0$',
              '$f\'(x) = 0$',
              '$f\'(x) \\geq 0$',
            ],
            correctIndex: 0,
            explain: 'La propiedad enunciada para funciones decrecientes y derivables es $f\'(x) \\leq 0$.',
          },
          {
            id: 'mc-1-4',
            q: '¿Qué signo tiene la pendiente de la recta tangente en un punto donde la función crece?',
            options: ['Positiva', 'Negativa', 'Nula', 'No se puede determinar'],
            correctIndex: 0,
            explain: 'Donde la función es creciente las rectas tangentes tienen pendiente positiva, o sea $f\'(x) > 0$.',
          },
        ],
        ms: [
          {
            id: 'ms-1-1',
            q: '¿Cuáles de las siguientes propiedades enuncia el apunte sobre crecimiento y derivada?',
            options: [
              'Si $f$ es creciente y derivable en $[a,b]$, entonces $f\'(x) \\geq 0$',
              'Si $f$ es decreciente y derivable en $[a,b]$, entonces $f\'(x) \\leq 0$',
              'Si $f$ es continua en $[a,b]$, derivable en $(a,b)$ y $f\'(x) > 0$, entonces $f$ es creciente',
              'Si $f$ es continua en $[a,b]$, derivable en $(a,b)$ y $f\'(x) < 0$, entonces $f$ es decreciente',
              'Si $f$ es creciente, entonces $f\'\'(x) > 0$',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Las cuatro primeras son las propiedades textuales del apunte. La derivada segunda no aparece acá: se usa recién para analizar concavidad.',
          },
          {
            id: 'ms-1-2',
            q: 'De acuerdo con la definición de función estrictamente creciente en $(a;b)$, ¿qué elementos intervienen?',
            options: [
              'Dos valores $x_1, x_2$ pertenecientes al intervalo $(a;b)$',
              'La condición $x_2 > x_1$',
              'La conclusión $f(x_2) > f(x_1)$',
              'Que el intervalo $(a;b)$ esté incluido en $A$',
              'Que la función sea derivable en todo el intervalo',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'La definición de crecimiento estricto no exige derivabilidad: se enuncia sólo comparando imágenes. La derivabilidad aparece después, en las propiedades.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-1-1', front: 'Función estrictamente creciente', back: '$f: A \\to \\mathbb{R}$ es estrictamente creciente en $(a;b) \\subseteq A$ sí y solo sí dados $x_1, x_2 \\in (a;b)$, si $x_2 > x_1$ entonces $f(x_2) > f(x_1)$.' },
        { id: 'fc-1-2', front: 'Función estrictamente decreciente', back: '$f: A \\to \\mathbb{R}$ es estrictamente decreciente en $(a;b) \\subseteq A$ sí y solo sí dados $x_1, x_2 \\in (a;b)$, si $x_2 > x_1$ entonces $f(x_2) < f(x_1)$.' },
        { id: 'fc-1-3', front: 'Creciente ⇒ derivada', back: 'Si $f(x)$ es creciente y derivable en $[a,b]$, entonces $f\'(x) \\geq 0$.' },
        { id: 'fc-1-4', front: 'Decreciente ⇒ derivada', back: 'Si $f(x)$ es decreciente y derivable en $[a,b]$, entonces $f\'(x) \\leq 0$.' },
        { id: 'fc-1-5', front: 'Derivada positiva ⇒ ?', back: 'Si $f$ es continua en $[a,b]$, derivable en $(a,b)$ y $f\'(x) > 0$, entonces $f(x)$ es creciente en el intervalo.' },
        { id: 'fc-1-6', front: 'Derivada negativa ⇒ ?', back: 'Si $f$ es continua en $[a,b]$, derivable en $(a,b)$ y $f\'(x) < 0$, entonces $f(x)$ es decreciente en el intervalo.' },
        { id: 'fc-1-7', front: 'Pendiente de la tangente y crecimiento', back: 'Donde $f$ crece las rectas tangentes tienen pendiente positiva ($f\'(x) > 0$); donde decrece, pendiente negativa ($f\'(x) < 0$).' },
        { id: 'fc-1-8', front: '¿Cómo se hallan los intervalos de crecimiento?', back: 'Determinando los valores de $x$ para los cuales la derivada es positiva (creciente) o negativa (decreciente).' },
      ],
    },

    {
      id: '2',
      unit: 'derivadas',
      title: 'Extremos relativos',
      criollo: 'Los máximos y mínimos "locales" son los picos y los valles de la curva. Primero buscás los <strong>puntos críticos</strong> (donde la derivada da cero o directamente no existe) — esos son los candidatos. Después, con alguno de los dos criterios, decidís si el candidato es máximo, mínimo o no es nada.',
      blocks: [
        {
          type: 'plot',
          caption: 'Extremos relativos: $B$ es un máximo relativo y $A$ es un mínimo relativo. Movete con la tangente y fijate que en ambos puntos la pendiente vale cero.',
          height: 400,
          domain: [-3.6, 3.2],
          range: [-3, 6],
          curves: [
            { fn: (x) => 0.5 * x ** 3 + 0.75 * x ** 2 - 3 * x, d1: (x) => 1.5 * x ** 2 + 1.5 * x - 3, label: 'f(x)', color: 'forest', width: 2.2 },
          ],
          points: [
            { x: -2, on: 0, label: 'B', color: 'violet' },
            { x: 1, on: 0, label: 'A', color: 'violet' },
          ],
          tangent: { curve: 0, at: -2, min: -3.4, max: 2.4, readout: ['f', 'd1'] },
        },
        { type: 'p', text: '<strong>Definición:</strong> sea $f(x)$ una función y $a$ y $b$ pertenecientes al dominio de $f(x)$. Decimos que:' },
        {
          type: 'ul',
          items: [
            '$f(b)$ es <strong>máximo relativo o local</strong> de $f \\Leftrightarrow$ existe $E(b)$ (un entorno de $b$) $\\subseteq \\mathrm{Dom}\\, f(x)$ / para todo $x$ perteneciente a $E(b)$ se verifica que $f(b) > f(x)$.',
            '$f(a)$ es <strong>mínimo relativo o local</strong> de $f \\Leftrightarrow$ existe $E(a)$ (un entorno de $a$) $\\subseteq \\mathrm{Dom}\\, f(x)$ / para todo $x$ perteneciente a $E(a)$ se verifica que $f(a) < f(x)$.',
          ],
        },

        { type: 'h3', text: 'Condición necesaria para la existencia de un valor extremo', criollo: 'Los candidatos a máximo o mínimo son los puntos críticos: ahí la derivada vale cero o no existe.' },
        { type: 'p', text: 'Decimos que el punto $(x_0;\\, f(x_0))$ es <strong>punto crítico</strong> de una función $f(x)$ (posible máximo o mínimo) si la derivada en dicho punto es cero o no existe.' },
        { type: 'p', text: 'Simbólicamente:' },
        { type: 'math', latex: '(x_0;\\, f(x_0)) \\text{ es punto crítico de } f(x) \\iff f\'(x_0) = 0 \\;\\text{ o }\\; \\nexists\\, f\'(x_0)', display: true },

        { type: 'h3', text: 'Condiciones suficientes para la existencia de un valor extremo', criollo: 'Dos maneras de decidir: mirar cómo cambia el signo de la derivada primera, o directamente evaluar la derivada segunda.' },
        { type: 'p', text: 'Existen dos criterios que permiten determinar si un punto crítico es máximo o mínimo de una función.' },
        { type: 'p', text: 'Sea $f(x)$ una función que admite derivada segunda y $x_0$ un punto crítico de ella, entonces:' },
        {
          type: 'ul',
          items: [
            '<strong>Primer criterio:</strong> si $f\'(x) < 0$ para todo $x < x_0$ y $f\'(x) > 0$ para todo $x > x_0$, la función pasa de ser decreciente a ser creciente, entonces, hay un <strong>mínimo relativo</strong> en $x_0$. Análogamente, si $f\'(x) > 0$ para todo $x < x_0$ y $f\'(x) < 0$ para todo $x > x_0$, la función pasa de ser creciente a ser decreciente, entonces, hay un <strong>máximo relativo</strong> en ese punto. Si $f(x)$ no cambia el crecimiento en el punto crítico, la función no tiene extremos relativos en ese punto.',
            '<strong>Segundo criterio:</strong> consiste en estudiar el signo de la derivada segunda en el punto crítico.',
          ],
        },
        {
          type: 'ul',
          items: [
            'Si $f\'\'(x_0) > 0$ entonces en $x_0$ tiene un <strong>mínimo relativo</strong>.',
            'Si $f\'\'(x_0) < 0$ entonces en $x_0$ tiene un <strong>máximo relativo</strong>.',
            'Si $f\'\'(x_0) = 0$. Este criterio no sirve para determinar la naturaleza del punto crítico.',
          ],
        },
        { type: 'callout', tone: 'warning', text: 'Que la derivada se anule en $x_0$ es condición <strong>necesaria</strong> pero no suficiente: te da un candidato, no un extremo. Si la función no cambia el crecimiento en ese punto crítico, no hay extremo relativo ahí. Y si $f\'\'(x_0) = 0$, el segundo criterio directamente no te sirve.' },
      ],
      quiz: {
        tf: [
          { id: 'tf-2-1', q: 'Un punto $(x_0; f(x_0))$ es punto crítico si $f\'(x_0) = 0$ o si no existe $f\'(x_0)$.', a: true, explain: 'Es la condición necesaria para la existencia de un valor extremo, tal como la define el apunte.' },
          { id: 'tf-2-2', q: 'Si $f\'\'(x_0) = 0$, el segundo criterio confirma que $x_0$ es un punto de máximo.', a: false, explain: 'Si $f\'\'(x_0) = 0$ el criterio no sirve para determinar la naturaleza del punto crítico.' },
          { id: 'tf-2-3', q: 'Si en $x_0$ la función pasa de decreciente a creciente, hay un mínimo relativo.', a: true, explain: 'Primer criterio: $f\'(x) < 0$ antes y $f\'(x) > 0$ después implica mínimo relativo en $x_0$.' },
          { id: 'tf-2-4', q: 'Todo punto crítico de una función es necesariamente un máximo o un mínimo relativo.', a: false, explain: 'Si $f(x)$ no cambia el crecimiento en el punto crítico, la función no tiene extremos relativos en ese punto.' },
          { id: 'tf-2-5', q: 'Si $f\'\'(x_0) < 0$ en un punto crítico $x_0$, entonces hay un máximo relativo.', a: true, explain: 'Es el segundo criterio: derivada segunda negativa en el punto crítico indica máximo relativo.' },
        ],
        mc: [
          {
            id: 'mc-2-1',
            q: '¿Cómo define el apunte que $f(b)$ sea máximo relativo o local de $f$?',
            options: [
              'Existe un entorno $E(b) \\subseteq \\mathrm{Dom}\\, f(x)$ tal que para todo $x \\in E(b)$ se verifica $f(b) > f(x)$',
              'Para todo $x$ del dominio se verifica $f(b) > f(x)$',
              'La derivada en $b$ es positiva',
              '$f(b)$ es el valor más grande que toma la función',
            ],
            correctIndex: 0,
            explain: 'Es una condición <strong>local</strong>: se pide sólo dentro de un entorno de $b$, no en todo el dominio.',
          },
          {
            id: 'mc-2-2',
            q: 'Según el primer criterio, si $f\'(x) > 0$ para $x < x_0$ y $f\'(x) < 0$ para $x > x_0$, en $x_0$ hay:',
            options: ['Un máximo relativo', 'Un mínimo relativo', 'Un punto de inflexión', 'Ningún extremo'],
            correctIndex: 0,
            explain: 'La función pasa de ser creciente a ser decreciente, entonces hay un máximo relativo en ese punto.',
          },
          {
            id: 'mc-2-3',
            q: '¿Qué hipótesis pide el apunte antes de aplicar los criterios de extremos?',
            options: [
              'Que $f(x)$ admita derivada segunda y que $x_0$ sea un punto crítico de ella',
              'Que $f(x)$ sea continua en todo $\\mathbb{R}$',
              'Que $f(x)$ sea una función polinómica',
              'Que $f\'(x_0) \\neq 0$',
            ],
            correctIndex: 0,
            explain: 'Textual: "Sea $f(x)$ una función que admite derivada segunda y $x_0$ un punto crítico de ella, entonces...".',
          },
          {
            id: 'mc-2-4',
            q: 'En el segundo criterio, ¿qué se estudia?',
            options: [
              'El signo de la derivada segunda en el punto crítico',
              'El signo de la derivada primera a izquierda y derecha',
              'El signo de la función en el punto crítico',
              'El valor de la derivada tercera',
            ],
            correctIndex: 0,
            explain: 'El segundo criterio consiste en estudiar el signo de la derivada segunda en el punto crítico.',
          },
        ],
        ms: [
          {
            id: 'ms-2-1',
            q: '¿Cuáles de estas situaciones corresponden a un punto crítico según el apunte?',
            options: [
              '$f\'(x_0) = 0$',
              'No existe $f\'(x_0)$',
              '$f\'\'(x_0) = 0$',
              '$f(x_0) = 0$',
              'La recta tangente en $x_0$ es vertical y por lo tanto no hay derivada',
            ],
            correctIndexes: [0, 1, 4],
            explain: 'Punto crítico es donde la derivada <strong>primera</strong> es cero o no existe. Que $f\'\'(x_0) = 0$ apunta a un posible punto de inflexión, y que $f(x_0) = 0$ es simplemente una raíz.',
          },
          {
            id: 'ms-2-2',
            q: 'Sobre el segundo criterio (derivada segunda en el punto crítico $x_0$), ¿qué afirmaciones son correctas?',
            options: [
              'Si $f\'\'(x_0) > 0$ hay un mínimo relativo',
              'Si $f\'\'(x_0) < 0$ hay un máximo relativo',
              'Si $f\'\'(x_0) = 0$ el criterio no determina la naturaleza del punto crítico',
              'Requiere que la función admita derivada segunda',
              'Si $f\'\'(x_0) = 0$ se concluye que no hay extremo',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Cuando $f\'\'(x_0) = 0$ el criterio no sirve — eso no permite concluir que no haya extremo, simplemente hay que analizarlo de otra forma.',
          },
          {
            id: 'ms-2-3',
            q: 'Según el primer criterio, ¿qué conclusiones son válidas?',
            options: [
              '$f\'(x) < 0$ antes y $f\'(x) > 0$ después de $x_0$ ⇒ mínimo relativo',
              '$f\'(x) > 0$ antes y $f\'(x) < 0$ después de $x_0$ ⇒ máximo relativo',
              'Si el crecimiento no cambia en el punto crítico, no hay extremo relativo ahí',
              'El criterio se basa en el cambio de crecimiento de la función',
              'El criterio necesita calcular la derivada tercera',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'La derivada tercera no interviene en los criterios de extremos: aparece recién como segundo criterio para puntos de inflexión.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-2-1', front: 'Máximo relativo o local', back: '$f(b)$ es máximo relativo de $f \\Leftrightarrow$ existe un entorno $E(b) \\subseteq \\mathrm{Dom}\\, f$ tal que para todo $x \\in E(b)$ se verifica $f(b) > f(x)$.' },
        { id: 'fc-2-2', front: 'Mínimo relativo o local', back: '$f(a)$ es mínimo relativo de $f \\Leftrightarrow$ existe un entorno $E(a) \\subseteq \\mathrm{Dom}\\, f$ tal que para todo $x \\in E(a)$ se verifica $f(a) < f(x)$.' },
        { id: 'fc-2-3', front: 'Punto crítico', back: '$(x_0; f(x_0))$ es punto crítico de $f(x)$ (posible máximo o mínimo) si $f\'(x_0) = 0$ o no existe $f\'(x_0)$. Es la condición necesaria para un valor extremo.' },
        { id: 'fc-2-4', front: 'Primer criterio — mínimo', back: 'Si $f\'(x) < 0$ para $x < x_0$ y $f\'(x) > 0$ para $x > x_0$, la función pasa de decreciente a creciente: hay mínimo relativo en $x_0$.' },
        { id: 'fc-2-5', front: 'Primer criterio — máximo', back: 'Si $f\'(x) > 0$ para $x < x_0$ y $f\'(x) < 0$ para $x > x_0$, la función pasa de creciente a decreciente: hay máximo relativo en $x_0$.' },
        { id: 'fc-2-6', front: 'Primer criterio — sin extremo', back: 'Si $f(x)$ no cambia el crecimiento en el punto crítico, la función no tiene extremos relativos en ese punto.' },
        { id: 'fc-2-7', front: 'Segundo criterio', back: 'Se estudia el signo de $f\'\'$ en el punto crítico: $f\'\'(x_0) > 0 \\Rightarrow$ mínimo relativo; $f\'\'(x_0) < 0 \\Rightarrow$ máximo relativo; $f\'\'(x_0) = 0 \\Rightarrow$ el criterio no sirve.' },
        { id: 'fc-2-8', front: 'Hipótesis de los criterios', back: 'Sea $f(x)$ una función que admite derivada segunda y $x_0$ un punto crítico de ella.' },
      ],
    },

    {
      id: '3',
      unit: 'derivadas',
      title: 'Concavidad y convexidad',
      criollo: 'Concavidad es hacia dónde "abre" la curva. Si queda por <strong>encima</strong> de sus tangentes, es cóncava hacia arriba (concavidad positiva) y la derivada segunda da positiva. Si queda por <strong>debajo</strong>, es cóncava hacia abajo o convexa y la derivada segunda da negativa. El truco para acordarte: si la curva está arriba de la tangente, las pendientes van creciendo, y si la derivada primera crece es porque su propia derivada es positiva.',
      blocks: [
        { type: 'p', text: '<strong>Definición:</strong> la curva correspondiente a una función derivable en un intervalo $(a; b)$ es <strong>cóncava hacia arriba</strong> o tiene <strong>concavidad positiva</strong> en el mismo sí y solo sí la curva queda por encima de las rectas tangentes en todos los puntos del intervalo. La curva correspondiente a $f(x)$ representada en el siguiente gráfico es cóncava hacia arriba.' },
        {
          type: 'plot',
          caption: 'Curva cóncava hacia arriba: queda siempre por encima de sus rectas tangentes. Arrastrando el punto se ve cómo la pendiente va aumentando (por ejemplo $m_1 = -2{,}16$, luego $m_2 = -0{,}4$ y después $m_3 = 0{,}54$).',
          height: 400,
          domain: [-0.6, 4.3],
          range: [-0.8, 3.4],
          curves: [
            { fn: (x) => 0.8 * x + 0.45 / (x - 1) - 1.1, d1: (x) => 0.8 - 0.45 / (x - 1) ** 2, label: 'f(x)', color: 'steel', width: 2.2 },
          ],
          tangent: { curve: 0, at: 1.39, min: 1.15, max: 4.2, readout: ['f', 'd1', 'd2'] },
        },
        { type: 'p', text: 'La curva correspondiente a una función derivable en un intervalo $(c; d)$ es <strong>cóncava hacia abajo</strong> o tiene <strong>concavidad negativa</strong> o es <strong>convexa</strong> en el mismo sí y solo sí la curva queda por debajo de las rectas tangentes en todos los puntos del intervalo. La curva representada en el siguiente grafico es cóncava hacia abajo.' },
        {
          type: 'plot',
          caption: 'Curva cóncava hacia abajo (convexa): queda siempre por debajo de sus rectas tangentes. Acá las pendientes van disminuyendo a medida que $x$ crece ($m_1 = -0{,}73$, $m_2 = -3{,}53$, $m_3 = -7{,}6$).',
          height: 400,
          domain: [-3.5, 3.6],
          range: [-5.5, 3],
          curves: [
            { fn: (x) => 2 - 0.15 * Math.exp(1.2 * x), d1: (x) => -0.18 * Math.exp(1.2 * x), label: 'f(x)', color: 'steel', width: 2.2 },
          ],
          tangent: { curve: 0, at: 1.167, min: -3.2, max: 3.12, readout: ['f', 'd1', 'd2'] },
        },
        { type: 'p', text: 'En los gráficos anteriores podemos observar que si la curva es cóncava hacia arriba, las pendientes de las rectas tangentes aumentan a medida que $x$ aumenta; por lo tanto, podemos decir que la derivada primera de la función es creciente. Por lo visto anteriormente, si la derivada primera es creciente, su derivada es positiva. Esto es, la derivada segunda de la función es positiva en el intervalo donde la función es cóncava hacia arriba. Análogamente, ocurre cuando la función es cóncava hacia abajo.' },

        { type: 'h3', text: 'Conclusión', criollo: 'La primera derivada te habla del crecimiento; la segunda, de la concavidad.' },
        { type: 'p', text: 'Así como la primera derivada nos da información sobre el crecimiento o decrecimiento de una función y de sus máximos y mínimos relativos, la derivada segunda nos sirve para analizar la concavidad y los puntos de inflexión de la misma.' },
        { type: 'p', text: 'Enunciemos los teoremas correspondientes a la concavidad de una función relacionados con su derivada segunda:' },
        { type: 'p', text: 'Si una función es dos veces derivable en un intervalo y:' },
        {
          type: 'ul',
          items: [
            'Si $f\'\'(x) > 0$ en $(a; b) \\Rightarrow f$ es cóncava positiva en $(a; b)$.',
            'Si $f\'\'(x) < 0$ en $(c; d) \\Rightarrow f$ es cóncava negativa en $(c; d)$.',
          ],
        },

        { type: 'h3', text: 'Ejemplo', criollo: 'La parábola: el signo de $a$ define todo.' },
        { type: 'p', text: 'Analizar la concavidad de la función $f(x) = ax^2 + bx + c$' },
        { type: 'math', latex: 'f\'(x) = 2ax + b', display: true },
        { type: 'math', latex: 'f\'\'(x) = 2a', display: true },
        { type: 'p', text: 'El signo de la derivada segunda depende del valor de $a$: si el coeficiente cuadrático es positivo la derivada segunda es positiva y la parábola es cóncava hacia arriba, en cambio, si el coeficiente cuadrático es negativo la derivada segunda es negativa y la función es cóncava hacia abajo.' },
      ],
      quiz: {
        tf: [
          { id: 'tf-3-1', q: 'Una curva es cóncava hacia arriba en un intervalo si queda por encima de las rectas tangentes en todos los puntos del intervalo.', a: true, explain: 'Es la definición textual de concavidad positiva.' },
          { id: 'tf-3-2', q: 'Cóncava hacia abajo, concavidad negativa y convexa son tres nombres para la misma situación.', a: true, explain: 'El apunte los da como sinónimos: la curva queda por debajo de las rectas tangentes.' },
          { id: 'tf-3-3', q: 'Si la curva es cóncava hacia arriba, las pendientes de las rectas tangentes disminuyen a medida que $x$ aumenta.', a: false, explain: 'Al contrario: aumentan. Por eso la derivada primera es creciente y la derivada segunda resulta positiva.' },
          { id: 'tf-3-4', q: 'En $f(x) = ax^2 + bx + c$ la derivada segunda es $f\'\'(x) = 2a$.', a: true, explain: 'Derivando dos veces: $f\'(x) = 2ax + b$ y $f\'\'(x) = 2a$.' },
          { id: 'tf-3-5', q: 'La derivada segunda sirve para analizar el crecimiento y decrecimiento de la función.', a: false, explain: 'Del crecimiento se ocupa la derivada primera. La derivada segunda sirve para analizar la concavidad y los puntos de inflexión.' },
        ],
        mc: [
          {
            id: 'mc-3-1',
            q: '¿Qué significa que la derivada primera sea creciente en un intervalo?',
            options: [
              'Que la derivada segunda es positiva y la función es cóncava hacia arriba',
              'Que la función es creciente en el intervalo',
              'Que la función tiene un máximo relativo',
              'Que la función es cóncava hacia abajo',
            ],
            correctIndex: 0,
            explain: 'Si $f\'$ es creciente, su derivada ($f\'\'$) es positiva, y ese es justamente el intervalo donde la función es cóncava hacia arriba.',
          },
          {
            id: 'mc-3-2',
            q: 'Según los teoremas enunciados, si $f\'\'(x) < 0$ en $(c;d)$ entonces:',
            options: [
              '$f$ es cóncava negativa en $(c;d)$',
              '$f$ es cóncava positiva en $(c;d)$',
              '$f$ es decreciente en $(c;d)$',
              '$f$ tiene un punto de inflexión en $(c;d)$',
            ],
            correctIndex: 0,
            explain: 'El teorema dice: si $f\'\'(x) < 0$ en $(c;d) \\Rightarrow f$ es cóncava negativa en $(c;d)$.',
          },
          {
            id: 'mc-3-3',
            q: 'En la parábola $f(x) = ax^2 + bx + c$, ¿de qué depende la concavidad?',
            options: [
              'Del signo del coeficiente cuadrático $a$',
              'Del signo del coeficiente lineal $b$',
              'Del signo del término independiente $c$',
              'Del valor del discriminante',
            ],
            correctIndex: 0,
            explain: 'Como $f\'\'(x) = 2a$, el signo de la derivada segunda depende sólo de $a$: positivo ⇒ cóncava hacia arriba; negativo ⇒ cóncava hacia abajo.',
          },
          {
            id: 'mc-3-4',
            q: 'La condición para que una curva sea convexa en un intervalo es que:',
            options: [
              'Quede por debajo de las rectas tangentes en todos los puntos del intervalo',
              'Quede por encima de las rectas tangentes en todos los puntos del intervalo',
              'No tenga rectas tangentes en el intervalo',
              'La derivada primera sea negativa en el intervalo',
            ],
            correctIndex: 0,
            explain: 'Convexa = cóncava hacia abajo = concavidad negativa: la curva queda por debajo de sus rectas tangentes.',
          },
        ],
        ms: [
          {
            id: 'ms-3-1',
            q: '¿Qué caracteriza a una función cóncava hacia arriba en un intervalo?',
            options: [
              'La curva queda por encima de las rectas tangentes',
              'Las pendientes de las tangentes aumentan a medida que $x$ aumenta',
              'La derivada primera es creciente',
              'La derivada segunda es positiva',
              'La función es necesariamente creciente',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'La concavidad no dice nada sobre el crecimiento: una curva cóncava hacia arriba puede estar decreciendo (como en el primer gráfico, donde las pendientes son negativas pero van aumentando).',
          },
          {
            id: 'ms-3-2',
            q: 'Sobre el ejemplo $f(x) = ax^2 + bx + c$, ¿qué afirmaciones son correctas?',
            options: [
              '$f\'(x) = 2ax + b$',
              '$f\'\'(x) = 2a$',
              'Si $a > 0$ la parábola es cóncava hacia arriba',
              'Si $a < 0$ la función es cóncava hacia abajo',
              'La concavidad cambia de signo en el vértice',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'La derivada segunda de una parábola es la constante $2a$: nunca cambia de signo, así que la parábola no tiene puntos de inflexión.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-3-1', front: 'Cóncava hacia arriba', back: 'La curva de una función derivable en $(a;b)$ es cóncava hacia arriba (concavidad positiva) sí y solo sí queda por encima de las rectas tangentes en todos los puntos del intervalo.' },
        { id: 'fc-3-2', front: 'Cóncava hacia abajo / convexa', back: 'La curva de una función derivable en $(c;d)$ es cóncava hacia abajo (concavidad negativa o convexa) sí y solo sí queda por debajo de las rectas tangentes en todos los puntos del intervalo.' },
        { id: 'fc-3-3', front: 'Teorema — concavidad positiva', back: 'Si $f$ es dos veces derivable y $f\'\'(x) > 0$ en $(a;b)$, entonces $f$ es cóncava positiva en $(a;b)$.' },
        { id: 'fc-3-4', front: 'Teorema — concavidad negativa', back: 'Si $f$ es dos veces derivable y $f\'\'(x) < 0$ en $(c;d)$, entonces $f$ es cóncava negativa en $(c;d)$.' },
        { id: 'fc-3-5', front: '¿Por qué $f\'\' > 0$ si es cóncava hacia arriba?', back: 'Porque las pendientes de las tangentes aumentan al aumentar $x$, o sea que $f\'$ es creciente; y si $f\'$ es creciente su derivada $f\'\'$ es positiva.' },
        { id: 'fc-3-6', front: '¿Para qué sirve cada derivada?', back: 'La primera derivada informa sobre crecimiento, decrecimiento y máximos y mínimos relativos. La derivada segunda sirve para analizar la concavidad y los puntos de inflexión.' },
        { id: 'fc-3-7', front: 'Concavidad de $ax^2 + bx + c$', back: '$f\'(x) = 2ax + b$ y $f\'\'(x) = 2a$. Si $a > 0$ la parábola es cóncava hacia arriba; si $a < 0$, cóncava hacia abajo.' },
      ],
    },

    {
      id: '4',
      unit: 'derivadas',
      title: 'Punto de inflexión',
      criollo: 'El punto de inflexión es donde la curva "cambia de mano": venía cóncava hacia arriba y pasa a cóncava hacia abajo, o al revés. La condición necesaria es que la derivada segunda se anule (o no exista), pero eso solo no alcanza: hay que confirmar con el cambio de signo de la derivada segunda o con la derivada tercera distinta de cero.',
      blocks: [
        { type: 'p', text: 'El punto $(x_0;\\, f(x_0))$ del gráfico de una función continua $f$ es un <em>punto de inflexión</em> sí y solo sí en el mismo la curva cambia el sentido de su concavidad.' },
        { type: 'p', text: 'Para determinar los puntos de inflexión de una función se deben tener en cuenta las siguientes condiciones:' },

        { type: 'h3', text: 'Condición necesaria', criollo: 'Sin esto no hay inflexión, pero con esto solo tampoco alcanza.' },
        { type: 'p', text: 'Para que $(x_0;\\, f(x_0))$ sea punto de inflexión de $f$ es necesario que $f\'\'(x_0) = 0$ o que no exista la derivada segunda en $x_0$.' },

        { type: 'h3', text: 'Condición suficiente', criollo: 'Dos formas de confirmarlo: el cambio de signo de $f\'\'$, o mirar $f\'\'\'$.' },
        { type: 'p', text: '<strong>Primer criterio: cambio del signo de la derivada segunda</strong>' },
        { type: 'p', text: 'Decimos que $(x_0;\\, f(x_0))$ es punto de inflexión de $f$ si en él cambia el signo de la derivada segunda. Analizamos entonces el signo de la derivada segunda a izquierda y derecha de $x_0$. Si es distinto, en $x_0$ la función tiene un punto de inflexión, sino no tiene punto de inflexión en $x_0$.' },
        {
          type: 'table',
          caption: 'Los dos casos en que el signo de $f\'\'$ cambia al pasar por $x_0$',
          headers: ['A la izquierda de $x_0$', 'En $x_0$', 'A la derecha de $x_0$', 'Conclusión'],
          rows: [
            ['$f\'\'(x_0) < 0$', '$x_0$', '$f\'\'(x_0) > 0$', '$x_0$ es punto de inflexión'],
            ['$f\'\'(x_0) > 0$', '$x_0$', '$f\'\'(x_0) < 0$', '$x_0$ es punto de inflexión'],
          ],
        },
        { type: 'p', text: '<strong>Segundo criterio: análisis de la derivada tercera</strong>' },
        { type: 'p', text: 'Si $f\'\'\'(x_0)$ es distinta de cero entonces la función tiene un punto de inflexión en $(x_0;\\, f(x_0))$' },
        { type: 'math', latex: 'f\'\'\'(x_0) \\neq 0 \\;\\rightarrow\\; (x_0;\\, f(x_0)) \\text{ es punto de inflexión}', display: true },

        { type: 'p', text: 'Analicemos todo lo visto en el siguiente gráfico en el que están representadas una función $f(x)$, su derivada primera $f\'(x)$ y su derivada segunda $f\'\'(x)$:' },
        {
          type: 'plot',
          caption: 'La función $f(x)$ junto a su derivada primera $f\'(x)$ y su derivada segunda $f\'\'(x)$. Prendé y apagá las curvas desde la leyenda para comparar: donde $f\'\'$ corta el eje ($x = -1$ y $x = 1$), $f\'$ tiene sus extremos y $f$ cambia de concavidad.',
          height: 440,
          domain: [-3.2, 3.2],
          range: [-5.5, 6.5],
          curves: [
            { fn: (x) => x ** 4 / 4 - 1.5 * x ** 2 + 1, d1: (x) => x ** 3 - 3 * x, d2: (x) => 3 * x ** 2 - 3, label: 'f(x)', color: 'steel', width: 2.2 },
            { fn: (x) => x ** 3 - 3 * x, d1: (x) => 3 * x ** 2 - 3, label: "f '(x)", color: 'accent', width: 2 },
            { fn: (x) => 3 * x ** 2 - 3, d1: (x) => 6 * x, label: "f ''(x)", color: 'forest', width: 2 },
          ],
          vlines: [
            { x: -1, label: 'x = -1', color: 'violet' },
            { x: 1, label: 'x = 1', color: 'violet' },
          ],
          points: [
            { x: -1, on: 0, color: 'violet' },
            { x: 1, on: 0, color: 'violet' },
          ],
          tangent: { curve: 0, at: -1, min: -2.6, max: 2.6, readout: ['f', 'd1', 'd2'] },
        },
        { type: 'p', text: 'Podemos observar que $f(x)$ comienza siendo cóncava, luego pasa a ser convexa para terminar nuevamente cóncava. Como es una función continua, tiene dos puntos de inflexión en los que se verifican las condiciones antes expresadas.' },
        { type: 'p', text: 'Vemos que $f\'\'(-1) = 0$ y $f\'\'(1) = 0$ (condición necesaria para la existencia de un punto de inflexión).' },
        { type: 'p', text: 'Si analizamos, además, el signo de la derivada segunda (condición suficiente):' },
        {
          type: 'table',
          headers: ['$x$', '$(-\\infty; -1)$', '$-1$', '$(-1; 1)$', '$1$', '$(1; +\\infty)$'],
          rows: [
            ['$f\'\'(x)$', '$+$', '$0$', '$-$', '$0$', '$+$'],
          ],
        },
        { type: 'p', text: 'Llegamos analíticamente a concluir que la función es cóncava hacia arriba en $(-\\infty; -1)$ y en $(1; +\\infty)$, y cóncava hacia abajo en $(-1; 1)$ y tiene puntos de inflexión en $x = 1$ y en $x = -1$.' },
        { type: 'p', text: '(Que podemos reafirmar con el gráfico de la derivada primera $f\'(x)$, que es creciente de $(-\\infty; -1)$ y de $(1; +\\infty)$, y decreciente en $(-1; 1)$).' },

        { type: 'h3', text: 'Ejemplo', criollo: 'El paso a paso completo: derivás dos veces, buscás los ceros de $f\'\'$, armás la tabla de signos y concluís.' },
        { type: 'p', text: 'Analizar la concavidad y los puntos de inflexión de la función $f(x) = 2x^4 - 3x^2 + 5$' },
        { type: 'ul', items: ['Calculamos primero las derivadas primera y segunda:'] },
        { type: 'math', latex: 'f\'(x) = 8x^3 - 6x \\qquad\\qquad f\'\'(x) = 24x^2 - 6', display: true },
        { type: 'ul', items: ['Analizamos los ceros de la segunda derivada (o los puntos del dominio en los que no está definida):'] },
        { type: 'math', latex: 'f\'\'(x) = 0 \\;\\rightarrow\\; 24x^2 - 6 = 0 \\;\\rightarrow\\; x = \\frac{1}{2} \\;\\lor\\; x = -\\frac{1}{2}', display: true },
        { type: 'p', text: 'Estas son las abscisas de los posibles puntos de inflexión.' },
        { type: 'p', text: '(No analizamos la posibilidad de que no exista la derivada segunda ya que es una función polinómica).' },
        { type: 'ul', items: ['Analizamos el signo de la derivada segunda a derecha e izquierda de los ceros para determinar la concavidad de la curva:'] },
        {
          type: 'table',
          headers: ['$x$', '$\\left(-\\infty; -\\frac{1}{2}\\right)$', '$-\\frac{1}{2}$', '$\\left(-\\frac{1}{2}; \\frac{1}{2}\\right)$', '$\\frac{1}{2}$', '$\\left(\\frac{1}{2}; +\\infty\\right)$'],
          rows: [
            ['$f\'\'(x)$', '$+$', '$0$', '$-$', '$0$', '$+$'],
          ],
        },
        { type: 'ul', items: ['Conclusión:'] },
        {
          type: 'ul',
          items: [
            '$f$ es <strong>cóncava hacia arriba</strong> en $\\left(-\\infty; -\\frac{1}{2}\\right)$ y en $\\left(\\frac{1}{2}; +\\infty\\right)$.',
            '$f$ es <strong>cóncava hacia abajo</strong> en $\\left(-\\frac{1}{2}; \\frac{1}{2}\\right)$.',
            '$\\left(\\frac{1}{2};\\, f\\left(\\frac{1}{2}\\right)\\right)$ y $\\left(-\\frac{1}{2};\\, f\\left(-\\frac{1}{2}\\right)\\right)$ son <strong>puntos de inflexión</strong>.',
          ],
        },
        {
          type: 'plot',
          caption: 'Visualización de apoyo del ejemplo (no figura en el apunte): $f(x) = 2x^4 - 3x^2 + 5$ con su derivada segunda. Arrastrá la tangente hasta $x = \\pm\\,0{,}5$ y mirá cómo $f\'\'$ pasa por cero y cambia de signo.',
          height: 420,
          domain: [-1.6, 1.6],
          range: [-3, 8],
          curves: [
            { fn: (x) => 2 * x ** 4 - 3 * x ** 2 + 5, d1: (x) => 8 * x ** 3 - 6 * x, d2: (x) => 24 * x ** 2 - 6, label: 'f(x)', color: 'steel', width: 2.2 },
            { fn: (x) => 8 * x ** 3 - 6 * x, d1: (x) => 24 * x ** 2 - 6, label: "f '(x)", color: 'accent', width: 2, hidden: true },
            { fn: (x) => 24 * x ** 2 - 6, d1: (x) => 48 * x, label: "f ''(x)", color: 'forest', width: 2 },
          ],
          vlines: [
            { x: -0.5, label: 'x = -1/2', color: 'violet' },
            { x: 0.5, label: 'x = 1/2', color: 'violet' },
          ],
          points: [
            { x: -0.5, on: 0, color: 'violet' },
            { x: 0.5, on: 0, color: 'violet' },
          ],
          tangent: { curve: 0, at: -0.5, min: -1.45, max: 1.45, readout: ['f', 'd1', 'd2'] },
        },

        { type: 'h3', text: 'En resumen: qué determina cada derivada', criollo: 'La chuleta de toda la unidad. Si te olvidás de todo lo demás, con esto zafás: cada derivada te contesta una pregunta distinta.' },
        { type: 'p', text: 'Cada derivada responde una pregunta distinta sobre la función:' },
        {
          type: 'ul',
          items: [
            '<strong>Derivada primera $f\'(x)$</strong>: te da la <strong>pendiente de la recta tangente</strong> en cada punto, y con eso determinás si la función <strong>crece o decrece</strong>.',
            '<strong>Derivada segunda $f\'\'(x)$</strong>: te da la <strong>concavidad</strong>; y donde se anula (o no existe), tenés un <strong>posible punto de inflexión</strong>. Además, evaluada en un punto crítico, te dice si es máximo o mínimo.',
            '<strong>Derivada tercera $f\'\'\'(x)$</strong>: si en ese punto es <strong>distinta de cero</strong>, te confirma que el <strong>punto de inflexión existe</strong>.',
          ],
        },
        {
          type: 'table',
          caption: 'Qué determina cada herramienta, según los criterios del apunte',
          headers: ['Herramienta', 'Qué determina'],
          rows: [
            ['$f\'(x)$', 'La <strong>pendiente de la recta tangente</strong>, y con ella el crecimiento: $f\'(x) > 0 \\Rightarrow$ creciente; $f\'(x) < 0 \\Rightarrow$ decreciente'],
            ['$f\'(x_0) = 0$ o $\\nexists\\, f\'(x_0)$', 'Que $(x_0;\\, f(x_0))$ sea <strong>punto crítico</strong>: posible máximo o mínimo. Es la condición <strong>necesaria</strong> de valor extremo'],
            ['Cambio de signo de $f\'$ en $x_0$', 'Si el punto crítico es máximo o mínimo (<strong>primer criterio</strong>): de negativa a positiva $\\Rightarrow$ mínimo; de positiva a negativa $\\Rightarrow$ máximo; si no cambia $\\Rightarrow$ no hay extremo'],
            ['$f\'\'(x_0)$ en un punto crítico', 'La naturaleza de ese punto crítico (<strong>segundo criterio</strong>): $> 0 \\Rightarrow$ mínimo; $< 0 \\Rightarrow$ máximo; $= 0 \\Rightarrow$ el criterio no sirve'],
            ['Signo de $f\'\'(x)$ en un intervalo', 'La <strong>concavidad</strong>: $f\'\'(x) > 0 \\Rightarrow$ cóncava hacia arriba (positiva); $f\'\'(x) < 0 \\Rightarrow$ cóncava hacia abajo (negativa o convexa)'],
            ['$f\'\'(x_0) = 0$ o $\\nexists\\, f\'\'(x_0)$', 'Que $x_0$ sea un <strong>posible punto de inflexión</strong>. Es la condición <strong>necesaria</strong> de inflexión'],
            ['Cambio de signo de $f\'\'$ en $x_0$', 'Que el punto de inflexión <strong>exista</strong> (<strong>primer criterio</strong>, suficiente): basta con que el signo a izquierda y derecha sea distinto'],
            ['$f\'\'\'(x_0) \\neq 0$', 'Que el punto de inflexión <strong>exista</strong> (<strong>segundo criterio</strong>, suficiente)'],
          ],
        },
        {
          type: 'table',
          caption: 'Los términos definidos en el apunte, en una línea',
          headers: ['Término', 'Definición'],
          rows: [
            ['Estrictamente creciente', 'Dados $x_1, x_2 \\in (a;b)$: si $x_2 > x_1 \\Rightarrow f(x_2) > f(x_1)$'],
            ['Estrictamente decreciente', 'Dados $x_1, x_2 \\in (a;b)$: si $x_2 > x_1 \\Rightarrow f(x_2) < f(x_1)$'],
            ['Máximo relativo o local', 'Existe un entorno $E(b) \\subseteq \\mathrm{Dom}\\, f$ tal que para todo $x \\in E(b)$ vale $f(b) > f(x)$'],
            ['Mínimo relativo o local', 'Existe un entorno $E(a) \\subseteq \\mathrm{Dom}\\, f$ tal que para todo $x \\in E(a)$ vale $f(a) < f(x)$'],
            ['Punto crítico', 'Punto donde $f\'(x_0) = 0$ o no existe $f\'(x_0)$: posible máximo o mínimo'],
            ['Cóncava hacia arriba', 'Concavidad positiva: la curva queda <strong>por encima</strong> de sus rectas tangentes'],
            ['Cóncava hacia abajo', 'Concavidad negativa o convexa: la curva queda <strong>por debajo</strong> de sus rectas tangentes'],
            ['Punto de inflexión', 'Punto en el que la curva <strong>cambia el sentido de su concavidad</strong>'],
            ['Condición necesaria', 'Lo que tiene que cumplirse sí o sí, pero que por sí solo no alcanza para concluir'],
            ['Condición suficiente', 'Lo que, si se cumple, permite afirmar que el extremo o la inflexión existe'],
          ],
        },
        { type: 'callout', tone: 'criollo', text: 'El orden en que se usa esto en un ejercicio: derivás una vez y buscás dónde $f\' = 0$ (esos son los <strong>candidatos a extremo</strong>). Derivás otra vez y buscás dónde $f\'\' = 0$ (esos son los <strong>candidatos a inflexión</strong>). Después confirmás cada candidato con el criterio que te quede más cómodo. Nunca te quedes en la condición necesaria: eso te da candidatos, no respuestas.' },
      ],
      quiz: {
        tf: [
          { id: 'tf-4-1', q: 'Un punto de inflexión es aquel en el que la curva cambia el sentido de su concavidad.', a: true, explain: 'Es la definición: $(x_0; f(x_0))$ de una función continua $f$ es punto de inflexión sí y solo sí en él la curva cambia el sentido de su concavidad.' },
          { id: 'tf-4-2', q: 'Que $f\'\'(x_0) = 0$ alcanza para asegurar que hay un punto de inflexión en $x_0$.', a: false, explain: 'Es sólo la condición <strong>necesaria</strong>. Hay que verificar además el cambio de signo de $f\'\'$ o que $f\'\'\'(x_0) \\neq 0$.' },
          { id: 'tf-4-3', q: 'Si $f\'\'\'(x_0) \\neq 0$ entonces la función tiene un punto de inflexión en $(x_0; f(x_0))$.', a: true, explain: 'Es el segundo criterio (condición suficiente) enunciado en el apunte.' },
          { id: 'tf-4-4', q: 'En el ejemplo $f(x) = 2x^4 - 3x^2 + 5$, la derivada segunda es $f\'\'(x) = 24x^2 - 6$.', a: true, explain: 'Derivando: $f\'(x) = 8x^3 - 6x$ y luego $f\'\'(x) = 24x^2 - 6$.' },
          { id: 'tf-4-5', q: 'En el ejemplo $f(x) = 2x^4 - 3x^2 + 5$ hay que analizar también dónde no existe la derivada segunda.', a: false, explain: 'El apunte aclara: "No analizamos la posibilidad de que no exista la derivada segunda ya que es una función polinómica".' },
        ],
        mc: [
          {
            id: 'mc-4-1',
            q: '¿Cuál es la condición necesaria para que $(x_0; f(x_0))$ sea punto de inflexión?',
            options: [
              'Que $f\'\'(x_0) = 0$ o que no exista la derivada segunda en $x_0$',
              'Que $f\'(x_0) = 0$',
              'Que $f\'\'\'(x_0) = 0$',
              'Que la función sea derivable en $x_0$',
            ],
            correctIndex: 0,
            explain: 'La condición necesaria es que la derivada segunda se anule en $x_0$ o que no exista allí.',
          },
          {
            id: 'mc-4-2',
            q: 'En el gráfico donde se representan $f$, $f\'$ y $f\'\'$, ¿qué se observa?',
            options: [
              'Que $f\'\'(-1) = 0$ y $f\'\'(1) = 0$, y que $f$ tiene dos puntos de inflexión',
              'Que $f$ tiene un solo punto de inflexión en $x = 0$',
              'Que $f\'$ es creciente en todo su dominio',
              'Que $f\'\'$ nunca se anula',
            ],
            correctIndex: 0,
            explain: 'El apunte señala $f\'\'(-1) = 0$ y $f\'\'(1) = 0$ como condición necesaria, y concluye que hay puntos de inflexión en $x = 1$ y $x = -1$.',
          },
          {
            id: 'mc-4-3',
            q: 'En el ejemplo, la conclusión es que $f(x) = 2x^4 - 3x^2 + 5$ es cóncava hacia abajo en:',
            options: [
              '$\\left(-\\frac{1}{2}; \\frac{1}{2}\\right)$',
              '$\\left(-\\infty; -\\frac{1}{2}\\right)$',
              '$\\left(\\frac{1}{2}; +\\infty\\right)$',
              'Todo $\\mathbb{R}$',
            ],
            correctIndex: 0,
            explain: 'La tabla de signos muestra $f\'\'(x) < 0$ entre $-\\frac{1}{2}$ y $\\frac{1}{2}$; en los otros dos intervalos es positiva y la función es cóncava hacia arriba.',
          },
          {
            id: 'mc-4-4',
            q: 'El primer criterio (condición suficiente) para puntos de inflexión consiste en:',
            options: [
              'Analizar si cambia el signo de la derivada segunda a izquierda y derecha de $x_0$',
              'Verificar que $f\'(x_0) = 0$',
              'Evaluar la derivada tercera en $x_0$',
              'Comprobar que la función sea continua en $x_0$',
            ],
            correctIndex: 0,
            explain: 'Si el signo de $f\'\'$ a izquierda y derecha de $x_0$ es distinto, hay punto de inflexión; si no, no lo hay. Evaluar $f\'\'\'$ es el segundo criterio.',
          },
        ],
        ms: [
          {
            id: 'ms-4-1',
            q: 'En el gráfico de $f$, $f\'$ y $f\'\'$ del apunte, ¿qué conclusiones se obtienen?',
            options: [
              '$f$ es cóncava hacia arriba en $(-\\infty; -1)$ y en $(1; +\\infty)$',
              '$f$ es cóncava hacia abajo en $(-1; 1)$',
              '$f$ tiene puntos de inflexión en $x = 1$ y en $x = -1$',
              '$f\'$ es creciente en $(-\\infty; -1)$ y en $(1; +\\infty)$, y decreciente en $(-1; 1)$',
              '$f$ no tiene puntos de inflexión porque $f\'\'$ se anula',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Que $f\'\'$ se anule es justamente la condición necesaria del punto de inflexión, y acá además cambia de signo, así que los puntos de inflexión existen.',
          },
          {
            id: 'ms-4-2',
            q: '¿Qué pasos sigue el apunte para resolver el ejemplo $f(x) = 2x^4 - 3x^2 + 5$?',
            options: [
              'Calcular las derivadas primera y segunda',
              'Analizar los ceros de la segunda derivada',
              'Analizar el signo de $f\'\'$ a derecha e izquierda de los ceros',
              'Concluir la concavidad y los puntos de inflexión',
              'Calcular la derivada tercera para confirmar',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'En este ejemplo se resuelve con el primer criterio (tabla de signos de $f\'\'$); la derivada tercera no se calcula.',
          },
          {
            id: 'ms-4-3',
            q: '¿Cuáles son condiciones suficientes para afirmar que hay punto de inflexión en $x_0$?',
            options: [
              'Que cambie el signo de la derivada segunda al pasar por $x_0$',
              'Que $f\'\'\'(x_0) \\neq 0$',
              'Que $f\'\'(x_0) = 0$',
              'Que no exista la derivada segunda en $x_0$',
              'Que $f\'(x_0) = 0$',
            ],
            correctIndexes: [0, 1],
            explain: 'Las opciones 3 y 4 son la condición <strong>necesaria</strong>, no suficiente. Que $f\'(x_0) = 0$ define un punto crítico, que es otra cosa.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-4-1', front: 'Punto de inflexión', back: 'El punto $(x_0; f(x_0))$ del gráfico de una función continua $f$ es punto de inflexión sí y solo sí en el mismo la curva cambia el sentido de su concavidad.' },
        { id: 'fc-4-2', front: 'Condición necesaria (inflexión)', back: 'Para que $(x_0; f(x_0))$ sea punto de inflexión es necesario que $f\'\'(x_0) = 0$ o que no exista la derivada segunda en $x_0$.' },
        { id: 'fc-4-3', front: 'Primer criterio (inflexión)', back: 'Cambio del signo de la derivada segunda: se analiza el signo de $f\'\'$ a izquierda y derecha de $x_0$. Si es distinto, hay punto de inflexión; si no, no lo hay.' },
        { id: 'fc-4-4', front: 'Segundo criterio (inflexión)', back: 'Análisis de la derivada tercera: si $f\'\'\'(x_0) \\neq 0$ entonces la función tiene un punto de inflexión en $(x_0; f(x_0))$.' },
        { id: 'fc-4-5', front: 'Ejemplo — derivadas de $2x^4 - 3x^2 + 5$', back: '$f\'(x) = 8x^3 - 6x$ y $f\'\'(x) = 24x^2 - 6$.' },
        { id: 'fc-4-6', front: 'Ejemplo — ceros de $f\'\'$', back: '$24x^2 - 6 = 0 \\Rightarrow x = \\frac{1}{2} \\lor x = -\\frac{1}{2}$. Son las abscisas de los posibles puntos de inflexión.' },
        { id: 'fc-4-7', front: 'Ejemplo — conclusión', back: '$f$ es cóncava hacia arriba en $\\left(-\\infty; -\\frac{1}{2}\\right)$ y en $\\left(\\frac{1}{2}; +\\infty\\right)$, cóncava hacia abajo en $\\left(-\\frac{1}{2}; \\frac{1}{2}\\right)$, y tiene puntos de inflexión en $x = \\pm\\frac{1}{2}$.' },
        { id: 'fc-4-8', front: '¿Por qué no se analiza dónde no existe $f\'\'$ en el ejemplo?', back: 'Porque $f(x) = 2x^4 - 3x^2 + 5$ es una función polinómica: su derivada segunda existe en todo el dominio.' },
      ],
    },

    {
      id: '6',
      unit: 'estudio-completo',
      title: 'Estudio completo de funciones',
      criollo: 'Acá se junta todo. En vez de mirar una cosa por vez (dominio por un lado, derivada por el otro), el apunte te da una receta de siete pasos para radiografiar una función de punta a punta: dominio, cortes con los ejes, asíntotas, crecimiento, concavidad, gráfico y conjunto imagen. Después lo aplica entero sobre $f(x) = \\dfrac{x}{x^2+1}$, que es el ejemplo que conviene que te sepas de memoria.',
      blocks: [
        { type: 'p', text: 'Integrando los conceptos vistos hasta el momento con los estudiados en Análisis Matemático I, podemos realizar el <strong>estudio completo de una función</strong>, teniendo en cuenta los siguientes pasos:' },

        { type: 'h3', text: '1. Dominio', criollo: 'El paso cero de todo: dónde vive la función. Tres cosas te lo recortan — denominadores, raíces y logaritmos.' },
        { type: 'p', text: 'Tener en cuenta para las restricciones que los denominadores deben ser distintos de cero, los radicandos mayores o iguales a cero y los argumentos de los logaritmos positivos.' },

        { type: 'h3', text: '2. Intersecciones con los ejes' },
        {
          type: 'ul',
          items: [
            'Con el eje $x$: determinar los ceros o raíces de la función ($f(x) = 0$).',
            'Con el eje $y$: calcular la ordenada de $x = 0$.',
          ],
        },

        { type: 'h3', text: '3. Asíntotas', criollo: 'Las tres asíntotas se buscan con límites, siempre. Y ojo con el detalle que aparece en el ejemplo: si ya tenés horizontal, no vas a tener oblicua.' },
        { type: 'p', text: '<strong>Vertical:</strong> $x = a$ es asíntota vertical de $f \\leftrightarrow \\lim\\limits_{x \\to a} f(x) = \\infty$' },
        { type: 'p', text: '<strong>Horizontal:</strong> $y = b$ es asíntota horizontal de $f \\leftrightarrow \\lim\\limits_{x \\to \\infty} f(x) = b$' },
        { type: 'p', text: '<strong>Oblicua:</strong> $y = mx + b$ es asíntota oblicua de $f$ si existen y son finitos los límites' },
        { type: 'math', latex: 'm = \\lim_{x \\to \\infty} \\frac{f(x)}{x} \\quad y \\quad b = \\lim_{x \\to \\infty}\\big(f(x) - mx\\big)', display: true },

        { type: 'h3', text: '4. Crecimiento y extremos' },
        {
          type: 'ul',
          items: [
            'Si $f\'(x) > 0$ en $(a;b) \\rightarrow f$ es estrictamente creciente en $(a;b)$.',
            'Si $f\'(x) < 0$ en $(c;d) \\rightarrow f$ es estrictamente decreciente en $(c;d)$.',
          ],
        },
        { type: 'p', text: '$(x_0; f(x_0))$ es <strong>MÁXIMO RELATIVO</strong> de $f \\leftrightarrow f\'(x_0) = 0$ o $\\nexists f\'(x_0)$ y en este punto cambia el signo de la derivada de positivo a negativo.' },
        { type: 'p', text: '$(x_0; f(x_0))$ es <strong>mínimo relativo</strong> de $f \\leftrightarrow f\'(x_0) = 0$ o $\\nexists f\'(x_0)$ y en este punto cambia el signo de la derivada de negativo a positivo.' },

        { type: 'h3', text: '5. Concavidad y puntos de inflexión' },
        {
          type: 'ul',
          items: [
            'Si $f\'\'(x) > 0$ en $(a;b) \\rightarrow f$ es cóncava hacia arriba en $(a;b)$.',
            'Si $f\'\'(x) < 0$ en $(c;d) \\rightarrow f$ es cóncava hacia abajo en $(c;d)$.',
          ],
        },
        { type: 'p', text: '$(x_0; f(x_0))$ es <strong>punto de inflexión</strong> de $f \\leftrightarrow f\'\'(x_0) = 0$ o $\\nexists f\'(x_0)$ y en este punto cambia el signo de la derivada segunda.' },

        { type: 'h3', text: '6. Gráfico aproximado' },
        { type: 'p', text: 'Utilizando todos los puntos obtenidos en el análisis anterior, podemos realizar el gráfico aproximado de la función.' },

        { type: 'h3', text: '7. Conjunto imagen y extremos absolutos' },
        { type: 'p', text: 'Una vez realizado el gráfico podemos determinar el conjunto imagen de la función y si tiene extremos absolutos.' },

        { type: 'callout', tone: 'criollo', text: 'Fijate que el orden de los pasos no es caprichoso: cada uno usa lo del anterior. Sin dominio no sabés dónde buscar asíntotas; sin crecimiento y concavidad no podés dibujar; y sin el dibujo no leés el conjunto imagen. Si en un parcial te piden "estudio completo", seguí los siete pasos en fila y no te vas a colgar ninguno.' },

        { type: 'h3', text: 'Ejemplo resuelto: f(x) = x / (x² + 1)', criollo: 'El ejemplo estrella del apunte. Es una función racional con numerador de grado 1 y denominador de grado 2, así que se aplana en el infinito. Seguilo paso por paso que después el TP te pide exactamente esto para ocho funciones más.' },
        { type: 'p', text: 'Realizar un gráfico aproximado de la función $f: D \\to \\mathbb{R} / f(x) = \\dfrac{x}{x^2+1}$, analizando previamente dominio, intersecciones con los ejes, asíntotas, crecimiento, extremos relativos, concavidad y puntos de inflexión.' },

        { type: 'p', text: '<strong>1. Dominio:</strong> $\\mathbb{R}$' },

        { type: 'p', text: '<strong>2. Intersecciones con los ejes.</strong> Eje $x$:' },
        { type: 'math', latex: '\\frac{x}{x^2+1} = 0 \\rightarrow x = 0 \\rightarrow (0;0)\\ \\text{punto de interseccion con } x', display: true },
        { type: 'p', text: 'Eje $y$: coincide con el punto de intersección con el eje $x$.' },

        { type: 'p', text: '<strong>3. Asíntotas.</strong> Vertical: no tiene. Horizontal:' },
        { type: 'math', latex: '\\lim_{x \\to \\infty} \\frac{x}{x^2+1} = 0 \\rightarrow y = 0 \\ \\text{es asíntota horizontal}', display: true },
        { type: 'p', text: 'Oblicua: no tiene, ya que tiene asíntota horizontal.' },

        { type: 'p', text: '<strong>4. Crecimiento.</strong>' },
        { type: 'math', latex: 'f\'(x) = \\frac{-x^2+1}{(x^2+1)^2}', display: true },
        { type: 'p', text: 'Condición necesaria:' },
        { type: 'math', latex: 'f\'(x) = 0 \\rightarrow \\frac{-x^2+1}{(x^2+1)^2} = 0 \\rightarrow -x^2 + 1 = 0 \\rightarrow x = 1 \\ o \\ x = -1 \\ \\text{puntos críticos}', display: true },
        { type: 'p', text: 'Condición suficiente:' },
        {
          type: 'table',
          headers: ['$x$', '$(-\\infty;-1)$', '$-1$', '$(-1;1)$', '$1$', '$(1;+\\infty)$'],
          rows: [
            ['$f\'(x)$', '$-$', '$0$', '$+$', '$0$', '$-$'],
          ],
        },
        {
          type: 'ul',
          items: [
            '$f$ es estrictamente creciente en $(-1;1)$.',
            '$f$ es estrictamente decreciente en $(-\\infty;-1)$ y $(1;+\\infty)$.',
            '$\\left(1; \\dfrac{1}{2}\\right)$ es MÁXIMO RELATIVO.',
            '$\\left(-1; -\\dfrac{1}{2}\\right)$ es mínimo relativo.',
          ],
        },

        { type: 'p', text: '<strong>5. Concavidad.</strong>' },
        { type: 'math', latex: 'f\'\'(x) = \\frac{-2x \\cdot (-x^2+3)}{(x^2+1)^3}', display: true },
        { type: 'p', text: 'Condición necesaria:' },
        { type: 'math', latex: 'f\'\'(x) = 0 \\rightarrow \\frac{-2x \\cdot (-x^2+3)}{(x^2+1)^3} = 0 \\rightarrow -2x \\cdot (-x^2+3) = 0', display: true },
        { type: 'math', latex: '\\rightarrow x = 0 \\ o \\ x = -\\sqrt{3} \\ o \\ x = \\sqrt{3} \\ \\text{posibles puntos de inflexión}', display: true },
        { type: 'p', text: 'Condición suficiente:' },
        {
          type: 'table',
          headers: ['$x$', '$(-\\infty;-\\sqrt{3})$', '$-\\sqrt{3}$', '$(-\\sqrt{3};0)$', '$0$', '$(0;\\sqrt{3})$', '$\\sqrt{3}$', '$(\\sqrt{3};+\\infty)$'],
          rows: [
            ['$f\'\'(x)$', '$-$', '$0$', '$+$', '$0$', '$-$', '$0$', '$+$'],
          ],
        },
        {
          type: 'ul',
          items: [
            '$f$ es cóncava hacia arriba en $\\left(-\\sqrt{3};0\\right)$ y $\\left(\\sqrt{3};+\\infty\\right)$.',
            '$f$ es cóncava hacia abajo en $\\left(-\\infty;-\\sqrt{3}\\right)$ y $\\left(0;\\sqrt{3}\\right)$.',
            'Los puntos de inflexión son $\\left(-\\sqrt{3}; -\\dfrac{\\sqrt{3}}{4}\\right)$, $(0;0)$ y $\\left(\\sqrt{3}; \\dfrac{\\sqrt{3}}{4}\\right)$.',
          ],
        },
        { type: 'callout', tone: 'warning', text: 'Dos erratas del PDF que conviene que sepas: en la tabla de la condición suficiente de concavidad la fila está rotulada <strong>$f\'(x)$</strong> cuando en realidad son los signos de <strong>$f\'\'(x)$</strong>, y el intervalo de concavidad hacia abajo aparece escrito como $(0;+\\sqrt{3})$ (el $+$ está de más, es simplemente $(0;\\sqrt{3})$). Acá quedó transcripto como corresponde.' },

        { type: 'p', text: '<strong>6. Gráfico aproximado.</strong>' },
        {
          type: 'plot',
          caption: 'Gráfico aproximado de $f(x) = \\dfrac{x}{x^2+1}$: mínimo relativo en $\\left(-1;-\\frac{1}{2}\\right)$, máximo relativo en $\\left(1;\\frac{1}{2}\\right)$, puntos de inflexión en $x = -\\sqrt{3}$, $x = 0$ y $x = \\sqrt{3}$, y asíntota horizontal $y = 0$. Arrastrá la tangente: se aplana justo en los extremos.',
          height: 380,
          domain: [-4, 4],
          range: [-0.85, 0.85],
          curves: [
            { fn: (x) => x / (x * x + 1), d1: (x) => (1 - x * x) / Math.pow(x * x + 1, 2), label: 'f(x)', color: 'violet', width: 2.4 },
            { fn: (x) => (1 - x * x) / Math.pow(x * x + 1, 2), label: "f '(x)", color: 'ochre', width: 1.8, dash: true, hidden: true },
          ],
          hlines: [
            { y: 0, label: 'y = 0 (asíntota horizontal)', color: 'muted' },
          ],
          points: [
            { x: -1, on: 0, label: 'mínimo', color: 'steel' },
            { x: 1, on: 0, label: 'MÁXIMO', color: 'accent' },
            { x: 0, on: 0, label: 'PI', color: 'forest' },
            { x: -Math.sqrt(3), on: 0, label: 'PI₂', color: 'forest' },
            { x: Math.sqrt(3), on: 0, label: 'PI₁', color: 'forest' },
          ],
          tangent: { curve: 0, at: 1, min: -3.8, max: 3.8, readout: ['f', 'd1'] },
        },

        { type: 'p', text: '<strong>7. Conjunto imagen y extremos absolutos.</strong>' },
        { type: 'math', latex: '\\text{Conjunto imagen: } \\left[-\\frac{1}{2}; \\frac{1}{2}\\right]', display: true },
        {
          type: 'ul',
          items: [
            '$\\left(-1; -\\dfrac{1}{2}\\right)$ es mínimo absoluto.',
            '$\\left(1; \\dfrac{1}{2}\\right)$ es MÁXIMO ABSOLUTO.',
          ],
        },
        { type: 'callout', tone: 'criollo', text: 'Acá pasa algo lindo: el mínimo y el máximo <em>relativos</em> terminan siendo también los <em>absolutos</em>. No siempre es así — pasa porque la función se aplana contra la asíntota $y = 0$ y nunca vuelve a superar esos valores. Por eso el paso 7 va después del gráfico: el conjunto imagen lo leés del dibujo, no lo adivinás.' },
      ],
      quiz: {
        tf: [
          { id: 'tf-6-1', q: 'Para el dominio hay que pedir que los radicandos sean mayores o iguales a cero y los argumentos de los logaritmos positivos.', a: true, explain: 'Son dos de las tres restricciones que enumera el apunte; la tercera es que los denominadores sean distintos de cero.' },
          { id: 'tf-6-2', q: 'La intersección con el eje $y$ se obtiene resolviendo $f(x) = 0$.', a: false, explain: 'Eso da la intersección con el eje $x$. Para el eje $y$ hay que calcular la ordenada de $x = 0$, o sea $f(0)$.' },
          { id: 'tf-6-3', q: 'En el ejemplo, $f(x) = \\dfrac{x}{x^2+1}$ no tiene asíntota oblicua porque tiene asíntota horizontal.', a: true, explain: 'Es la justificación textual del apunte: "Oblicua: no tiene, ya que tiene asíntota horizontal".' },
          { id: 'tf-6-4', q: 'Los puntos críticos del ejemplo son $x = 0$, $x = -\\sqrt{3}$ y $x = \\sqrt{3}$.', a: false, explain: 'Esos son los <strong>posibles puntos de inflexión</strong>, que salen de $f\'\'(x) = 0$. Los puntos críticos salen de $f\'(x) = 0$ y son $x = 1$ y $x = -1$.' },
          { id: 'tf-6-5', q: 'El conjunto imagen del ejemplo es $\\left[-\\dfrac{1}{2}; \\dfrac{1}{2}\\right]$.', a: true, explain: 'Se lee del gráfico: la función nunca baja de $-\\frac{1}{2}$ ni sube de $\\frac{1}{2}$, y alcanza ambos valores.' },
        ],
        mc: [
          {
            id: 'mc-6-1',
            q: 'Según el apunte, ¿cuándo $x = a$ es asíntota vertical de $f$?',
            options: [
              'Cuando $\\lim\\limits_{x \\to a} f(x) = \\infty$',
              'Cuando $\\lim\\limits_{x \\to \\infty} f(x) = a$',
              'Cuando $f(a) = 0$',
              'Cuando $f$ no está definida en $a$',
            ],
            correctIndex: 0,
            explain: 'La condición del apunte es que el límite de la función cuando $x$ tiende a $a$ dé infinito. Que la función no esté definida en $a$ es necesario pero no alcanza.',
          },
          {
            id: 'mc-6-2',
            q: 'Para la asíntota oblicua $y = mx + b$, ¿cómo se calcula $b$?',
            options: [
              '$b = \\lim\\limits_{x \\to \\infty} \\dfrac{f(x)}{x}$',
              '$b = \\lim\\limits_{x \\to \\infty}\\big(f(x) - mx\\big)$',
              '$b = f(0)$',
              '$b = \\lim\\limits_{x \\to 0} f(x)$',
            ],
            correctIndex: 1,
            explain: 'Primero se calcula $m = \\lim\\limits_{x \\to \\infty} \\frac{f(x)}{x}$ y con ese $m$ se obtiene $b = \\lim\\limits_{x \\to \\infty}(f(x) - mx)$. Ambos límites tienen que existir y ser finitos.',
          },
          {
            id: 'mc-6-3',
            q: 'En el ejemplo, ¿en qué intervalo es estrictamente creciente $f(x) = \\dfrac{x}{x^2+1}$?',
            options: [
              'En $(-\\infty;-1)$',
              'En $(1;+\\infty)$',
              'En $(-1;1)$',
              'En todo $\\mathbb{R}$',
            ],
            correctIndex: 2,
            explain: 'La tabla de signos muestra $f\'(x) > 0$ solamente entre $-1$ y $1$. En $(-\\infty;-1)$ y en $(1;+\\infty)$ la derivada es negativa.',
          },
          {
            id: 'mc-6-4',
            q: '¿Cuál es la derivada segunda de $f(x) = \\dfrac{x}{x^2+1}$ según el apunte?',
            options: [
              '$f\'\'(x) = \\dfrac{-x^2+1}{(x^2+1)^2}$',
              '$f\'\'(x) = \\dfrac{-2x \\cdot (-x^2+3)}{(x^2+1)^3}$',
              '$f\'\'(x) = \\dfrac{2x}{(x^2+1)^2}$',
              '$f\'\'(x) = \\dfrac{-x^2+3}{(x^2+1)^2}$',
            ],
            correctIndex: 1,
            explain: 'La primera opción es la derivada <strong>primera</strong>. La segunda es $\\frac{-2x(-x^2+3)}{(x^2+1)^3}$, y de igualarla a cero salen los tres posibles puntos de inflexión.',
          },
        ],
        ms: [
          {
            id: 'ms-6-1',
            q: 'De los siete pasos del estudio completo, ¿cuáles necesitan derivar la función?',
            options: [
              'Crecimiento y extremos',
              'Concavidad y puntos de inflexión',
              'Dominio',
              'Intersecciones con los ejes',
              'Asíntotas',
            ],
            correctIndexes: [0, 1],
            explain: 'El crecimiento sale del signo de $f\'$ y la concavidad del signo de $f\'\'$. Dominio, intersecciones y asíntotas se resuelven sin derivar (las asíntotas, con límites).',
          },
          {
            id: 'ms-6-2',
            q: '¿Qué se verifica en el ejemplo $f(x) = \\dfrac{x}{x^2+1}$?',
            options: [
              'El dominio es $\\mathbb{R}$',
              'Tiene asíntota horizontal $y = 0$',
              'La intersección con el eje $y$ coincide con la del eje $x$',
              'Tiene tres puntos de inflexión',
              'Tiene asíntota vertical en $x = -1$',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Todo eso figura en el desarrollo. Asíntota vertical no tiene: el denominador $x^2+1$ nunca se anula en los reales.',
          },
          {
            id: 'ms-6-3',
            q: 'Según el paso 4, $(x_0; f(x_0))$ es máximo relativo de $f$ cuando…',
            options: [
              '$f\'(x_0) = 0$ o no existe $f\'(x_0)$',
              'La derivada cambia de signo positivo a negativo en ese punto',
              '$f\'\'(x_0) = 0$',
              'La derivada cambia de signo negativo a positivo en ese punto',
              '$f(x_0) = 0$',
            ],
            correctIndexes: [0, 1],
            explain: 'Las dos condiciones van juntas: se anula (o no existe) la derivada primera <strong>y</strong> el signo pasa de positivo a negativo. El cambio de negativo a positivo corresponde al mínimo relativo, y $f\'\'(x_0) = 0$ es la condición de punto de inflexión.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-6-1', front: 'Los 7 pasos del estudio completo', back: '1) Dominio. 2) Intersecciones con los ejes. 3) Asíntotas. 4) Crecimiento y extremos. 5) Concavidad y puntos de inflexión. 6) Gráfico aproximado. 7) Conjunto imagen y extremos absolutos.' },
        { id: 'fc-6-2', front: 'Restricciones a mirar para el dominio', back: 'Denominadores distintos de cero, radicandos mayores o iguales a cero y argumentos de los logaritmos positivos.' },
        { id: 'fc-6-3', front: 'Asíntota vertical — condición', back: '$x = a$ es asíntota vertical de $f \\leftrightarrow \\lim\\limits_{x \\to a} f(x) = \\infty$.' },
        { id: 'fc-6-4', front: 'Asíntota horizontal — condición', back: '$y = b$ es asíntota horizontal de $f \\leftrightarrow \\lim\\limits_{x \\to \\infty} f(x) = b$.' },
        { id: 'fc-6-5', front: 'Asíntota oblicua — cómo se calcula', back: '$y = mx + b$ es oblicua si existen y son finitos $m = \\lim\\limits_{x \\to \\infty} \\dfrac{f(x)}{x}$ y $b = \\lim\\limits_{x \\to \\infty}(f(x) - mx)$.' },
        { id: 'fc-6-6', front: 'Ejemplo — derivadas de $f(x) = \\dfrac{x}{x^2+1}$', back: '$f\'(x) = \\dfrac{-x^2+1}{(x^2+1)^2}$ y $f\'\'(x) = \\dfrac{-2x(-x^2+3)}{(x^2+1)^3}$.' },
        { id: 'fc-6-7', front: 'Ejemplo — extremos de $f(x) = \\dfrac{x}{x^2+1}$', back: '$\\left(1;\\dfrac{1}{2}\\right)$ es MÁXIMO RELATIVO y $\\left(-1;-\\dfrac{1}{2}\\right)$ es mínimo relativo. Crece en $(-1;1)$ y decrece en $(-\\infty;-1)$ y $(1;+\\infty)$.' },
        { id: 'fc-6-8', front: 'Ejemplo — puntos de inflexión', back: '$\\left(-\\sqrt{3};-\\dfrac{\\sqrt{3}}{4}\\right)$, $(0;0)$ y $\\left(\\sqrt{3};\\dfrac{\\sqrt{3}}{4}\\right)$. Cóncava hacia arriba en $(-\\sqrt{3};0)$ y $(\\sqrt{3};+\\infty)$; hacia abajo en $(-\\infty;-\\sqrt{3})$ y $(0;\\sqrt{3})$.' },
        { id: 'fc-6-9', front: 'Ejemplo — conjunto imagen y extremos absolutos', back: 'Imagen $\\left[-\\dfrac{1}{2};\\dfrac{1}{2}\\right]$. $\\left(-1;-\\dfrac{1}{2}\\right)$ es mínimo absoluto y $\\left(1;\\dfrac{1}{2}\\right)$ es MÁXIMO ABSOLUTO.' },
      ],
    },

    {
      id: '7',
      unit: 'estudio-completo',
      title: 'Extremos absolutos y extremos condicionados',
      criollo: 'Los extremos relativos son "el más alto del barrio"; los absolutos son "el más alto de todo el país". Y los condicionados son "el más alto dentro de este intervalo que te doy". La gracia del tema es que, cuando te encierran en un intervalo cerrado, el máximo y el mínimo pueden estar en los extremos relativos de adentro o directamente en las puntas del intervalo — así que hay que comparar imágenes y quedarse con la más grande y la más chica.',
      blocks: [
        { type: 'h3', text: 'Extremos absolutos', criollo: 'Definición corta: los puntos donde la función alcanza la mayor y la menor imagen de todo su dominio.' },
        { type: 'p', text: 'Se denomina así a los puntos del dominio en los que la función tiene la mayor y la menor imagen.' },
        { type: 'math', latex: '(a; f(a)) \\text{ es máximo absoluto de } f \\iff \\forall x \\in Df : f(a) \\geq f(x)', display: true },
        { type: 'math', latex: '(b; f(b)) \\text{ es mínimo absoluto de } f \\iff \\forall x \\in Df : f(b) \\leq f(x)', display: true },
        { type: 'p', text: 'Para determinar los extremos absolutos de una función, primero se determina el conjunto imagen y a partir de allí se analiza, si existe, el mayor y/o el menor valor.' },

        { type: 'h3', text: 'Extremos condicionados', criollo: 'Acá te cambian la regla: ya no mirás todo el dominio sino solo un intervalo. Y el teorema te garantiza que, si la función es continua en un intervalo cerrado, sí o sí hay máximo y mínimo adentro.' },
        { type: 'p', text: 'Se denomina así a los puntos en los que una función continua toma su mayor y menor valor dentro de un intervalo.' },
        { type: 'callout', tone: 'info', text: '<strong>Teorema:</strong> toda función continua en un intervalo $[a;b]$ alcanza al menos una vez en él su valor máximo y su valor mínimo.' },
        { type: 'p', text: 'Observemos los siguientes gráficos:' },
        {
          type: 'figure',
          src: 'images/diagrams/analisis-matematico-2/extremos-cond-grafica-1.png',
          alt: 'Gráfica 1: curva con dos máximos relativos y dos mínimos relativos, sin extremos absolutos, definida en todos los reales',
          caption: 'Gráfica 1 — dominio: todos los reales. Tocá la imagen para ampliarla.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/analisis-matematico-2/extremos-cond-grafica-2.png',
          alt: 'Gráfica 2: la misma curva restringida al intervalo [a;b], con los extremos absolutos coincidiendo con los extremos del intervalo',
          caption: 'Gráfica 2 — dominio: el intervalo $[a;b]$.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/analisis-matematico-2/extremos-cond-grafica-3.png',
          alt: 'Gráfica 3: la misma curva restringida a otro intervalo [a;b], con los extremos absolutos también en los extremos del intervalo',
          caption: 'Gráfica 3 — dominio: el intervalo $[a;b]$.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/analisis-matematico-2/extremos-cond-grafica-4.png',
          alt: 'Gráfica 4: la misma curva restringida a un intervalo [a;b] donde el máximo absoluto está en b y el mínimo absoluto es un mínimo relativo interior',
          caption: 'Gráfica 4 — el máximo absoluto coincide con $b$ y el mínimo absoluto con un mínimo relativo interior.',
        },
        { type: 'p', text: 'En la gráfica 1, si consideramos como dominio de $f(x)$ todos los reales, podemos ver que la función tiene dos máximos relativos y dos mínimos relativos, pero <strong>no tiene ni máximo ni mínimo absoluto</strong>. En las gráficas siguientes consideramos como dominio de $f(x)$ el intervalo $[a;b]$. En las gráficas 2 y 3 vemos que los extremos absolutos de $f(x)$ coinciden con los extremos del intervalo. Por último, en la gráfica 4, el máximo absoluto coincide con el extremo $b$ del intervalo y el mínimo absoluto con el mínimo relativo de $f$ que pertenece al intervalo.' },
        { type: 'p', text: 'De las observaciones anteriores podemos concluir que los extremos condicionados de una función continua en un intervalo <strong>pueden encontrarse en los extremos del intervalo o en los extremos relativos de la función que pertenecen al mismo</strong>. Por lo tanto, para determinar los extremos condicionados de una función primero determinamos los extremos relativos pertenecientes al intervalo y luego comparamos sus imágenes con las imágenes de los extremos del intervalo. La mayor de todas las imágenes corresponde al máximo condicionado y la menor, al mínimo condicionado.' },
        { type: 'callout', tone: 'criollo', text: 'La receta es de tres pasos y no falla: 1) derivás e igualás a cero para sacar los puntos críticos; 2) tirás a la basura los que caen fuera del intervalo; 3) evaluás $f$ en los críticos que quedaron <strong>y también en $a$ y en $b$</strong>. Comparás todas las imágenes: la más grande es el máximo condicionado, la más chica el mínimo. Ese paso 3 es donde todo el mundo se olvida de evaluar las puntas del intervalo.' },

        { type: 'h3', text: 'Ejemplo resuelto: f(x) = x³ – 3x + 3 en [–3; 0]' },
        { type: 'p', text: 'Determinar los valores máximo y mínimo de $f(x) = x^3 - 3x + 3$ en el intervalo $[-3;0]$.' },
        { type: 'p', text: '<strong>Solución.</strong> Primero hallamos la derivada de $f(x)$:' },
        { type: 'math', latex: 'f\'(x) = 3x^2 - 3', display: true },
        { type: 'p', text: 'Igualamos a cero para buscar los puntos críticos: $3x^2 - 3 = 0 \\rightarrow x = 1 \\lor x = -1$.' },
        { type: 'p', text: '$x = 1$ no pertenece al intervalo $[-3;0]$, por lo que para dicho valor no evaluamos $f(x)$.' },
        { type: 'p', text: 'Calculamos la imagen para los extremos del intervalo y para el punto crítico que sí pertenece al intervalo:' },
        {
          type: 'ul',
          items: [
            '$f(-3) = -15 \\rightarrow$ mínimo de $f(x)$ en el intervalo.',
            '$f(0) = 3$.',
            '$f(-1) = 5 \\rightarrow$ máximo de $f(x)$ en el intervalo.',
          ],
        },
        {
          type: 'plot',
          caption: 'La función $f(x) = x^3 - 3x + 3$ sobre el intervalo $[-3;0]$. El punto crítico $x = -1$ queda adentro (y da el máximo condicionado); $x = 1$ queda afuera y se descarta. Arrastrá la tangente y mirá que se aplana en $x = -1$ y en $x = 1$.',
          height: 380,
          domain: [-3.6, 2],
          range: [-16, 8],
          curves: [
            { fn: (x) => x ** 3 - 3 * x + 3, d1: (x) => 3 * x * x - 3, label: 'f(x)', color: 'ink', width: 2.2 },
          ],
          vlines: [
            { x: -3, label: 'a = -3', color: 'steel' },
            { x: 0, label: 'b = 0', color: 'steel' },
          ],
          points: [
            { x: -3, on: 0, label: 'MÍNIMO cond. (-3;-15)', color: 'accent', guides: true },
            { x: -1, on: 0, label: 'MÁXIMO cond. (-1;5)', color: 'forest', guides: true },
            { x: 1, on: 0, label: 'x = 1 (fuera del intervalo)', color: 'muted' },
          ],
          tangent: { curve: 0, at: -1, min: -3.4, max: 1.8, readout: ['f', 'd1'] },
        },
        { type: 'p', text: 'Luego decimos que los extremos condicionados de $f(x)$ son:' },
        {
          type: 'ul',
          items: [
            'MÍNIMO CONDICIONADO: $P = (-3;-15)$.',
            'MÁXIMO CONDICIONADO: $Q = (-1;5)$.',
          ],
        },
        { type: 'callout', tone: 'criollo', text: 'Mirá el detalle fino del ejemplo: el máximo condicionado ($x = -1$) es un máximo relativo de la función, pero el mínimo condicionado ($x = -3$) <strong>no es un mínimo relativo de nada</strong> — es simplemente la punta izquierda del intervalo. Ese es exactamente el caso de la gráfica 4 del apunte. Si solo hubieras buscado extremos relativos, el mínimo se te escapaba.' },
      ],
      quiz: {
        tf: [
          { id: 'tf-7-1', q: 'Toda función continua en un intervalo $[a;b]$ alcanza al menos una vez su valor máximo y su valor mínimo en él.', a: true, explain: 'Es el teorema textual que enuncia el apunte, y es lo que garantiza que los extremos condicionados existan.' },
          { id: 'tf-7-2', q: 'En la gráfica 1, con dominio todos los reales, la función tiene máximo y mínimo absolutos.', a: false, explain: 'El apunte aclara que tiene dos máximos relativos y dos mínimos relativos, pero <strong>no</strong> tiene ni máximo ni mínimo absoluto.' },
          { id: 'tf-7-3', q: 'Los extremos condicionados pueden estar en los extremos del intervalo o en los extremos relativos que pertenecen a él.', a: true, explain: 'Es la conclusión que el apunte saca de comparar las gráficas 1 a 4.' },
          { id: 'tf-7-4', q: 'En el ejemplo, el punto crítico $x = 1$ se descarta porque no anula la derivada.', a: false, explain: 'Sí anula la derivada ($3 \\cdot 1^2 - 3 = 0$). Se descarta porque <strong>no pertenece al intervalo</strong> $[-3;0]$.' },
          { id: 'tf-7-5', q: 'Para hallar extremos absolutos, el apunte propone primero determinar el conjunto imagen y de ahí analizar el mayor y/o el menor valor.', a: true, explain: 'Es el procedimiento textual, y por eso el paso 7 del estudio completo va después del gráfico aproximado.' },
        ],
        mc: [
          {
            id: 'mc-7-1',
            q: '¿Cómo se define formalmente que $(a; f(a))$ sea máximo absoluto de $f$?',
            options: [
              '$\\forall x \\in Df : f(a) \\geq f(x)$',
              '$\\forall x \\in Df : f(a) \\leq f(x)$',
              '$f\'(a) = 0$ y $f\'\'(a) < 0$',
              '$\\exists x \\in Df : f(a) > f(x)$',
            ],
            correctIndex: 0,
            explain: 'El máximo absoluto es aquel cuya imagen es mayor o igual que la de <strong>cualquier</strong> punto del dominio. La segunda opción es la definición de mínimo absoluto.',
          },
          {
            id: 'mc-7-2',
            q: 'En el ejemplo $f(x) = x^3 - 3x + 3$ en $[-3;0]$, ¿cuál es el máximo condicionado?',
            options: [
              '$(0;3)$',
              '$(-3;-15)$',
              '$(-1;5)$',
              '$(1;1)$',
            ],
            correctIndex: 2,
            explain: 'Comparando $f(-3) = -15$, $f(0) = 3$ y $f(-1) = 5$, la mayor imagen es $5$, así que $Q = (-1;5)$ es el máximo condicionado.',
          },
          {
            id: 'mc-7-3',
            q: '¿Qué muestra la gráfica 4 del apunte?',
            options: [
              'Que los dos extremos absolutos coinciden con los extremos del intervalo',
              'Que el máximo absoluto coincide con $b$ y el mínimo absoluto con un mínimo relativo interior',
              'Que la función no tiene extremos absolutos en el intervalo',
              'Que el mínimo absoluto coincide con $a$ y el máximo con un máximo relativo interior',
            ],
            correctIndex: 1,
            explain: 'Ese es el caso mixto: una punta del intervalo y un extremo relativo de adentro. En las gráficas 2 y 3 los dos extremos absolutos caen en las puntas del intervalo.',
          },
          {
            id: 'mc-7-4',
            q: 'Después de descartar los puntos críticos que quedan fuera del intervalo, ¿en qué valores hay que evaluar $f$?',
            options: [
              'Solo en los puntos críticos que quedaron adentro',
              'Solo en los extremos $a$ y $b$ del intervalo',
              'En los puntos críticos de adentro y también en $a$ y en $b$',
              'En el punto medio del intervalo',
            ],
            correctIndex: 2,
            explain: 'El apunte compara las imágenes de los extremos relativos que pertenecen al intervalo con las imágenes de los extremos del intervalo. La mayor da el máximo condicionado y la menor el mínimo.',
          },
        ],
        ms: [
          {
            id: 'ms-7-1',
            q: 'En el ejemplo $f(x) = x^3 - 3x + 3$ en $[-3;0]$, ¿qué valores se evalúan?',
            options: [
              '$f(-3)$',
              '$f(0)$',
              '$f(-1)$',
              '$f(1)$',
              '$f(3)$',
            ],
            correctIndexes: [0, 1, 2],
            explain: 'Se evalúan las dos puntas del intervalo ($-3$ y $0$) y el único punto crítico que pertenece a él ($-1$). $x = 1$ está fuera del intervalo y $x = 3$ ni siquiera es punto crítico.',
          },
          {
            id: 'ms-7-2',
            q: '¿Qué afirmaciones sobre la gráfica 1 son correctas según el apunte?',
            options: [
              'Tiene dos máximos relativos',
              'Tiene dos mínimos relativos',
              'No tiene máximo absoluto',
              'No tiene mínimo absoluto',
              'Su dominio es el intervalo $[a;b]$',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'En la gráfica 1 el dominio son todos los reales; el intervalo $[a;b]$ aparece recién en las gráficas 2, 3 y 4.',
          },
          {
            id: 'ms-7-3',
            q: '¿Cuáles de estos puntos son extremos condicionados de $f(x) = x^3 - 3x + 3$ en $[-3;0]$?',
            options: [
              '$(-3;-15)$',
              '$(-1;5)$',
              '$(0;3)$',
              '$(1;1)$',
              '$(3;21)$',
            ],
            correctIndexes: [0, 1],
            explain: '$P = (-3;-15)$ es el mínimo condicionado y $Q = (-1;5)$ el máximo. $f(0) = 3$ se evalúa pero no es ni el mayor ni el menor valor.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-7-1', front: 'Extremos absolutos — definición', back: 'Los puntos del dominio en los que la función tiene la mayor y la menor imagen. $(a;f(a))$ es máximo absoluto $\\iff \\forall x \\in Df: f(a) \\geq f(x)$; $(b;f(b))$ es mínimo absoluto $\\iff \\forall x \\in Df: f(b) \\leq f(x)$.' },
        { id: 'fc-7-2', front: 'Extremos condicionados — definición', back: 'Los puntos en los que una función continua toma su mayor y menor valor <strong>dentro de un intervalo</strong>.' },
        { id: 'fc-7-3', front: 'Teorema de los extremos condicionados', back: 'Toda función continua en un intervalo $[a;b]$ alcanza al menos una vez en él su valor máximo y su valor mínimo.' },
        { id: 'fc-7-4', front: '¿Dónde pueden estar los extremos condicionados?', back: 'En los extremos del intervalo o en los extremos relativos de la función que pertenecen al mismo.' },
        { id: 'fc-7-5', front: 'Receta para hallar extremos condicionados', back: 'Determinar los extremos relativos que pertenecen al intervalo, comparar sus imágenes con las imágenes de los extremos del intervalo. La mayor es el máximo condicionado y la menor, el mínimo condicionado.' },
        { id: 'fc-7-6', front: 'Cómo se hallan los extremos absolutos', back: 'Primero se determina el conjunto imagen de la función y a partir de allí se analiza, si existe, el mayor y/o el menor valor.' },
        { id: 'fc-7-7', front: 'Gráficas 2 y 3 vs. gráfica 4', back: 'En las gráficas 2 y 3 los extremos absolutos coinciden con los extremos del intervalo. En la 4, el máximo absoluto coincide con $b$ y el mínimo absoluto con el mínimo relativo de $f$ que pertenece al intervalo.' },
        { id: 'fc-7-8', front: 'Ejemplo — $f(x) = x^3 - 3x + 3$ en $[-3;0]$', back: '$f\'(x) = 3x^2 - 3 = 0 \\rightarrow x = 1 \\lor x = -1$; $x = 1$ queda fuera. $f(-3) = -15$, $f(0) = 3$, $f(-1) = 5$. MÍNIMO CONDICIONADO $P = (-3;-15)$; MÁXIMO CONDICIONADO $Q = (-1;5)$.' },
      ],
    },

    {
      id: '5',
      unit: 'tps',
      title: 'TP 1 — Extremos relativos. Concavidad y convexidad',
      criollo: 'El primer trabajo práctico de la materia: 8 ejercicios que usan todo lo de las secciones anteriores. Los primeros seis son de extremos y crecimiento (incluidos dos problemas de optimización, el del gimnasio y el del tanque), y los dos últimos son de concavidad y puntos de inflexión. Los ejercicios 5 y 8 te dan el gráfico de la derivada y tenés que deducir cómo es la función.',
      blocks: [
        { type: 'h3', text: 'Consignas · Extremos relativos. Intervalos de crecimiento y decrecimiento', criollo: 'Primer bloque del TP: los ejercicios 1 a 6, todos de crecimiento, decrecimiento y extremos. Los enunciados van tal cual vienen en el PDF, y los gráficos de los ejercicios 5 y 8 son los originales de la cátedra, así que los valores que leas ahí son los que valen.' },

        { type: 'h3', text: 'Ejercicio 1' },
        { type: 'p', text: 'Determinar para las siguientes funciones los intervalos de crecimiento y decrecimiento y los extremos relativos, si es que existen:' },
        {
          type: 'ul',
          items: [
            '$a)\\; f(x) = 3x^4 - 4x^3 - 12x^2 + 3$',
            '$b)\\; f(x) = (x-2)^{2/3}$',
            '$c)\\; f(x) = x \\cdot \\sqrt{1 - x^2}$',
            '$d)\\; f(x) = x.ex$',
            '$e)\\; f(x) = \\dfrac{2x^2 + 8}{x}$',
            '$f)\\; f(x) = \\ln(x^2 + 4)$',
            '$g)\\; f(x) = e^{-x^2}$',
            '$h)\\; f(x) = \\dfrac{3x - 2}{x - 1}$',
          ],
        },
        { type: 'callout', tone: 'warning', text: 'El ítem <strong>d)</strong> está transcripto tal cual figura en el PDF de la cátedra: <strong>$f(x) = x.ex$</strong>, sin exponente. En el original se perdió el superíndice al generar el archivo. Por el contexto (está entre funciones exponenciales y logarítmicas) casi con seguridad se trata de $f(x) = x \\cdot e^x$, pero conviene que lo confirmes con la cátedra antes de resolverlo.' },

        { type: 'h3', text: 'Ejercicio 2' },
        { type: 'p', text: 'Para la función $f(x) = \\dfrac{x-3}{(x-2)^2}$, hallar el dominio, los puntos de intersección con los ejes, los intervalos de crecimiento y de decrecimiento, los extremos relativos.' },

        { type: 'h3', text: 'Ejercicio 3' },
        { type: 'p', text: 'Calcular el valor de $a \\in \\Re$ para que $f(x) = x^3 + ax$ tenga un extremo en $x = 1$. Justificar. ¿Es un máximo o un mínimo?' },

        { type: 'h3', text: 'Ejercicio 4' },
        { type: 'p', text: 'Un gimnasio tiene la cuota mensual en $\\$200$. Quiere subir los precios, pero sabe que al hacerlo pierde socios. El gimnasio sabe que su función "beneficio" está dada por $B = -\\dfrac{2}{3}x^3 + 9x^2 + 720x + 4200$, donde $x$ representa el aumento en $\\$$, ¿cuál será el precio de <strong>la cuota</strong> para que el gimnasio obtenga el máximo beneficio?' },

        { type: 'h3', text: 'Ejercicio 5' },
        { type: 'p', text: 'El siguiente grafico corresponde a la derivada de una función $f$:' },
        {
          type: 'ul',
          items: [
            'a) Analizar los intervalos de crecimiento y decrecimiento de $f$.',
            'b) Dar las abscisas de los extremos relativos y clasificarlos.',
          ],
        },
        {
          type: 'figure',
          src: 'images/diagrams/analisis-matematico-2/tp1-ej5-grafico-derivada.png',
          alt: 'Gráfico de la derivada de f: curva que corta al eje x en tres puntos, con un máximo cerca de x = -0,3 y un mínimo cerca de x = 2',
          caption: 'Ejercicio 5 — gráfico de $f\'(x)$ (figura original del TP). Tocá la imagen para ampliarla.',
        },

        { type: 'h3', text: 'Ejercicio 6' },
        { type: 'p', text: 'Se desea construir un tanque rectangular sin tapa y con una capacidad de $60\\ \\mathrm{m}^3$, de modo que el largo de la base sea el doble de su ancho. Determinar las dimensiones del tanque más económico sabiendo que el material de la base cuesta $\\$10$ el $\\mathrm{m}^2$ y el material de los laterales cuesta $\\$6$ el $\\mathrm{m}^2$.' },

        { type: 'h3', text: 'Concavidad y puntos de inflexión', criollo: 'Segundo bloque del TP: los ejercicios 7 y 8, ya con la derivada segunda en juego.' },

        { type: 'h3', text: 'Ejercicio 7' },
        { type: 'p', text: 'Analizar la concavidad y los puntos de inflexión de las siguientes funciones:' },
        {
          type: 'ul',
          items: [
            '$a)\\; f(x) = x \\cdot (x^2 - 4)$',
            '$b)\\; f(x) = 3^{1/x}$',
            '$c)\\; f(x) = \\dfrac{e^x}{x}$',
            '$d)\\; f(x) = \\dfrac{x}{x^2 + 1}$',
            '$e)\\; f(x) = x \\cdot \\ln(x)$',
            '$f)\\; f(x) = x \\cdot \\sqrt{x^2 - 4}$',
          ],
        },

        { type: 'h3', text: 'Ejercicio 8' },
        { type: 'p', text: 'El gráfico de la derivada de una función definida en $\\mathbb{R}$ es el siguiente:' },
        {
          type: 'figure',
          src: 'images/diagrams/analisis-matematico-2/tp1-ej8-grafico-derivada.png',
          alt: 'Gráfico de la derivada de una función definida en R: curva que corta al eje x cerca de -2,9, 0,9 y 2,4, con un máximo cerca de x = -1,3 y un mínimo cerca de x = 1,7',
          caption: 'Ejercicio 8 — gráfico de $f\'(x)$ (figura original del TP). Tocá la imagen para ampliarla.',
        },
        {
          type: 'ul',
          items: [
            'Analizar el crecimiento de la función en los siguientes intervalos: $(-6; -4) \\rightarrow \\;\\ldots\\;$ &nbsp; $(-2; -1) \\rightarrow \\;\\ldots\\;$ &nbsp; $(4; 6) \\rightarrow \\;\\ldots$',
            'Escribir un intervalo que contenga a un máximo relativo de la función y otro intervalo que contenga a un mínimo relativo.',
          ],
        },
        { type: 'p', text: 'Determinar los intervalos de concavidad positiva y negativa de la función y las abscisas de los puntos de inflexión' },

        { type: 'callout', tone: 'criollo', text: 'Un par de avisos para no tropezar. En los ejercicios 5 y 8 el gráfico es de <strong>$f\'$, no de $f$</strong>: donde la curva está por encima del eje, $f$ crece; donde corta el eje, $f$ tiene un candidato a extremo; y donde $f\'$ tiene sus propios máximos y mínimos, $f$ tiene los puntos de inflexión. En los problemas 4 y 6 (gimnasio y tanque) primero armás la función a optimizar y recién después derivás. Y ojo con el 4: te piden el <strong>precio de la cuota</strong>, no el aumento $x$.' },
      ],
      quiz: {
        tf: [
          { id: 'tf-5-1', q: 'En los ejercicios 5 y 8 el gráfico que se da es el de la función $f$.', a: false, explain: 'En ambos el gráfico corresponde a la <strong>derivada</strong> de la función: el enunciado 5 dice "corresponde a la derivada de una función $f$" y el 8, "el gráfico de la derivada de una función definida en $\\mathbb{R}$".' },
          { id: 'tf-5-2', q: 'En el ejercicio 3 hay que hallar el valor de $a$ para que $f(x) = x^3 + ax$ tenga un extremo en $x = 1$.', a: true, explain: 'Es el enunciado textual, que además pide justificar y decidir si se trata de un máximo o un mínimo.' },
          { id: 'tf-5-3', q: 'En el ejercicio 4 la variable $x$ de la función beneficio representa el precio final de la cuota.', a: false, explain: 'El enunciado aclara que $x$ representa el <strong>aumento</strong> en pesos. La cuota parte de $\\$200$, así que el precio pedido es $200 + x$.' },
          { id: 'tf-5-4', q: 'El ejercicio 6 pide construir un tanque rectangular sin tapa con capacidad de $60\\ \\mathrm{m}^3$ y con el largo de la base igual al doble del ancho.', a: true, explain: 'Son las dos restricciones del enunciado: volumen $60\\ \\mathrm{m}^3$ y largo $=$ doble del ancho. El costo es $\\$10$ el $\\mathrm{m}^2$ de base y $\\$6$ el de los laterales.' },
          { id: 'tf-5-5', q: 'El ejercicio 2 pide únicamente los extremos relativos de la función.', a: false, explain: 'Pide el dominio, los puntos de intersección con los ejes, los intervalos de crecimiento y decrecimiento <strong>y</strong> los extremos relativos.' },
        ],
        mc: [
          {
            id: 'mc-5-1',
            q: 'Si el gráfico dado es el de $f\'$ y la curva está por encima del eje $x$ en un intervalo, ¿qué se concluye sobre $f$ ahí?',
            options: [
              'Que $f$ es creciente en ese intervalo',
              'Que $f$ es positiva en ese intervalo',
              'Que $f$ es cóncava hacia arriba en ese intervalo',
              'Que $f$ tiene un máximo en ese intervalo',
            ],
            correctIndex: 0,
            explain: 'Que $f\'(x) > 0$ significa que $f$ crece. El signo de $f$ y su concavidad son otra cosa: la concavidad se lee del crecimiento de $f\'$, no de su signo.',
          },
          {
            id: 'mc-5-2',
            q: 'Para resolver el ejercicio 3, ¿qué condición hay que plantear primero?',
            options: [
              '$f\'(1) = 0$, porque en un extremo la derivada se anula',
              '$f(1) = 0$, porque el extremo está en $x = 1$',
              '$f\'\'(1) = 0$, porque es la condición de extremo',
              '$f\'\'\'(1) \\neq 0$, para confirmar el extremo',
            ],
            correctIndex: 0,
            explain: 'La condición necesaria de extremo es que la derivada primera se anule. Después, el signo de $f\'\'(1)$ decide si es máximo o mínimo, que es lo que pide la segunda parte del enunciado.',
          },
          {
            id: 'mc-5-3',
            q: 'En el gráfico de $f\'$ del ejercicio 5, ¿qué representan los puntos donde la curva corta al eje $x$?',
            options: [
              'Las abscisas de los puntos críticos de $f$: candidatos a extremo relativo',
              'Los puntos de inflexión de $f$',
              'Las raíces de $f$',
              'Las asíntotas verticales de $f$',
            ],
            correctIndex: 0,
            explain: 'Donde $f\'$ vale cero se cumple la condición necesaria de extremo. Por eso el ítem b) pide dar esas abscisas y clasificarlas.',
          },
          {
            id: 'mc-5-4',
            q: 'El bloque final del ejercicio 8 pide determinar:',
            options: [
              'Los intervalos de concavidad positiva y negativa y las abscisas de los puntos de inflexión',
              'Sólo los extremos relativos de la función',
              'El dominio y la imagen de la función',
              'Las asíntotas de la función',
            ],
            correctIndex: 0,
            explain: 'Es la consigna textual con la que cierra el trabajo práctico.',
          },
        ],
        ms: [
          {
            id: 'ms-5-1',
            q: '¿Qué se pide para la función $f(x) = \\dfrac{x-3}{(x-2)^2}$ en el ejercicio 2?',
            options: [
              'El dominio',
              'Los puntos de intersección con los ejes',
              'Los intervalos de crecimiento y de decrecimiento',
              'Los extremos relativos',
              'Los puntos de inflexión',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El ejercicio 2 pertenece al bloque de extremos y crecimiento: no pide puntos de inflexión. Esos aparecen recién en los ejercicios 7 y 8.',
          },
          {
            id: 'ms-5-2',
            q: '¿Cuáles de estas funciones aparecen en el ejercicio 7 (concavidad y puntos de inflexión)?',
            options: [
              '$f(x) = x \\cdot (x^2 - 4)$',
              '$f(x) = 3^{1/x}$',
              '$f(x) = \\dfrac{x}{x^2 + 1}$',
              '$f(x) = x \\cdot \\ln(x)$',
              '$f(x) = 3x^4 - 4x^3 - 12x^2 + 3$',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'La última pertenece al ejercicio 1, que es de crecimiento y extremos. El ejercicio 7 tiene seis ítems: $x(x^2-4)$, $3^{1/x}$, $e^x/x$, $x/(x^2+1)$, $x\\ln(x)$ y $x\\sqrt{x^2-4}$.',
          },
          {
            id: 'ms-5-3',
            q: 'Teniendo el gráfico de $f\'$, ¿qué información sobre $f$ se puede deducir directamente?',
            options: [
              'Los intervalos donde $f$ crece y donde decrece, según el signo de $f\'$',
              'Las abscisas de los extremos relativos, donde $f\'$ corta al eje',
              'Los intervalos de concavidad, según dónde $f\'$ crece o decrece',
              'Las abscisas de los puntos de inflexión, donde $f\'$ tiene sus extremos',
              'El valor exacto de $f$ en cada punto',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'Del gráfico de la derivada no se puede recuperar el valor de $f$: falta la constante. Todo lo demás sí se lee, y es justamente lo que piden los ejercicios 5 y 8.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-5-1', front: 'TP 1 — ¿qué cubre?', back: 'Ocho ejercicios: los seis primeros de extremos relativos e intervalos de crecimiento y decrecimiento; los ejercicios 7 y 8, de concavidad y puntos de inflexión.' },
        { id: 'fc-5-2', front: 'Ejercicio 2 — qué pide', back: 'Para $f(x) = \\dfrac{x-3}{(x-2)^2}$: el dominio, los puntos de intersección con los ejes, los intervalos de crecimiento y de decrecimiento, y los extremos relativos.' },
        { id: 'fc-5-3', front: 'Ejercicio 3 — qué pide', back: 'Calcular $a \\in \\Re$ para que $f(x) = x^3 + ax$ tenga un extremo en $x = 1$, justificarlo y decidir si es máximo o mínimo.' },
        { id: 'fc-5-4', front: 'Ejercicio 4 — la función beneficio', back: '$B = -\\dfrac{2}{3}x^3 + 9x^2 + 720x + 4200$, donde $x$ es el aumento en pesos sobre una cuota de $\\$200$. Se pide el precio de la cuota que maximiza el beneficio.' },
        { id: 'fc-5-5', front: 'Ejercicio 6 — datos del tanque', back: 'Tanque rectangular sin tapa, capacidad $60\\ \\mathrm{m}^3$, largo de la base igual al doble del ancho. Base a $\\$10$ el $\\mathrm{m}^2$ y laterales a $\\$6$ el $\\mathrm{m}^2$. Se buscan las dimensiones más económicas.' },
        { id: 'fc-5-6', front: 'Ejercicios 5 y 8 — qué muestran', back: 'El gráfico de la <strong>derivada</strong> de la función, no el de la función. Hay que deducir el comportamiento de $f$ leyendo $f\'$.' },
        { id: 'fc-5-7', front: 'Leer $f\'$ para saber de $f$', back: 'Signo de $f\'$ ⇒ crecimiento de $f$. Ceros de $f\'$ ⇒ candidatos a extremo. Crecimiento de $f\'$ ⇒ concavidad de $f$. Extremos de $f\'$ ⇒ puntos de inflexión de $f$.' },
        { id: 'fc-5-8', front: 'Ejercicio 8 — consigna final', back: 'Determinar los intervalos de concavidad positiva y negativa de la función y las abscisas de los puntos de inflexión.' },
      ],
    },

    {
      id: '8',
      unit: 'tps',
      title: 'TP 2 — Estudio completo de funciones. Extremos condicionados',
      criollo: 'El segundo trabajo práctico: siete consignas que te hacen aplicar la receta de los siete pasos hasta que salga sola. El ejercicio 1 es un estudio completo guiado de una racional, el 2 son ocho funciones para hacer el estudio completo entero, el 3 y el 4 son de leer gráficos, y del 5 al 7 son extremos condicionados (incluido el problema del tiempo de reacción según la edad).',
      blocks: [
        { type: 'h3', text: 'Consignas', criollo: 'Los enunciados van tal cual vienen en el PDF de la cátedra, y los gráficos de los ejercicios 3 y 4 son las figuras originales, así que los valores que leas ahí son los que valen.' },

        { type: 'h3', text: 'Ejercicio 1' },
        { type: 'p', text: 'Dada la función $f(x) = \\dfrac{2x^2+3}{4x-1}$:' },
        {
          type: 'ul',
          items: [
            'a) Hallar el dominio, intersección con los ejes y las asíntotas.',
            'b) Analizar la continuidad y clasificar, si existen, los puntos de discontinuidad.',
            'c) Hallar intervalos de crecimiento, decrecimiento y extremos, si existen.',
            'd) Hallar intervalos de concavidad, convexidad y puntos de inflexión, si existen.',
            'e) Realizar la gráfica aproximada.',
            'f) Hallar los extremos de $f(x)$ en el intervalo $[-2;0]$.',
            'g) Hallar las ecuaciones de la recta tangente y normal al gráfico de $f(x)$ en $x = 0$.',
          ],
        },

        { type: 'h3', text: 'Ejercicio 2' },
        { type: 'p', text: 'Realizar el estudio completo y el gráfico aproximado de las siguientes funciones:' },
        {
          type: 'ul',
          items: [
            '$a)\\; f(x) = \\dfrac{e^x}{x}$',
            '$b)\\; g(x) = \\dfrac{2x}{x^2+1}$',
            '$c)\\; h(x) = \\dfrac{x}{\\ln x}$',
            '$d)\\; i(x) = x^3 - 3x^2$',
            '$e)\\; j(x) = x + \\dfrac{1}{x}$',
            '$f)\\; k(x) = x\\sqrt{1-x^2}$',
            '$g)\\; l(x) = 2x^2 - x^4$',
            '$h)\\; m(x) = 2^{\\frac{1}{x-1}}$',
          ],
        },

        { type: 'h3', text: 'Ejercicio 3' },
        { type: 'p', text: 'Teniendo en cuenta el siguiente gráfico de la derivada de una función $f(x)$ definida en reales, complete para que las afirmaciones sean verdaderas.' },
        {
          type: 'figure',
          src: 'images/diagrams/analisis-matematico-2/tp2-ej3-grafico-derivada.png',
          alt: 'Gráfico de la derivada de f: parábola que corta al eje x en x = -5 y en x = 3, con vértice cerca de (-1; -2)',
          caption: 'Ejercicio 3 — gráfico de $f\'(x)$ (figura original del TP). Tocá la imagen para ampliarla.',
        },
        {
          type: 'ul',
          items: [
            'La función $f(x)$ es creciente en los intervalos …………… y decreciente en ……………',
            '$f\'(-5) = \\ldots$ y $f\'(3) = \\ldots$',
            'Por lo tanto, podemos concluir que en $x = 3$ la función tiene un …………… y en $x = -5$ tiene un ……………',
            'La función $f\'(x)$ es creciente en el intervalo …………… y decreciente en ……………',
            'Y, entonces, $f(x)$ es cóncava en el intervalo …………… y convexa en ……………',
            'Además, $f\'\'(-1) = \\ldots$ Por lo tanto, en $x = \\ldots$ la función tiene un punto de inflexión.',
          ],
        },

        { type: 'h3', text: 'Ejercicio 4' },
        { type: 'p', text: 'Dado el siguiente gráfico de una función $f(x)$ determine:' },
        {
          type: 'figure',
          src: 'images/diagrams/analisis-matematico-2/tp2-ej4-grafico-funcion.png',
          alt: 'Gráfico de una función f(x) con un máximo relativo cerca de x = -1,7, un mínimo relativo cerca de x = -1, un máximo relativo cerca de x = 0,5 y un mínimo relativo cerca de x = 1,6',
          caption: 'Ejercicio 4 — gráfico de $f(x)$ (figura original del TP). Tocá la imagen para ampliarla.',
        },
        {
          type: 'ul',
          items: [
            'a) Un intervalo para que el máximo de $f(x)$ coincida con un máximo relativo.',
            'b) Un intervalo para que el mínimo de $f(x)$ sea uno de los extremos del intervalo.',
            'c) Un intervalo donde los extremos sean ambos extremos de los intervalos.',
          ],
        },

        { type: 'h3', text: 'Ejercicio 5' },
        { type: 'p', text: 'Hallar los extremos de las siguientes funciones restringidas a los correspondientes intervalos.' },
        {
          type: 'ul',
          items: [
            '$a)\\; f(x) = 3x^2 + 2x - 1$ &nbsp;&nbsp; con $-1 \\leq x \\leq 4$',
            '$b)\\; g(x) = x - \\ln(2+x)$ &nbsp;&nbsp; con $0 \\leq x \\leq 3$',
            '$c)\\; h(x) = 2x^3 - 3x^2 - 12x + 2$ &nbsp;&nbsp; con $-2 \\leq x \\leq 3$',
          ],
        },

        { type: 'h3', text: 'Ejercicio 6' },
        { type: 'p', text: 'Para la siguiente función $f(x) = x^3 + 3x^2 - 9x$, se pide:' },
        {
          type: 'ul',
          items: [
            'a) Hallar intervalos de crecimiento, decrecimiento y extremos, si es que existen.',
            'b) Hallar los extremos de $f(x)$, sujeto a la restricción $0 \\leq x \\leq 4$.',
          ],
        },

        { type: 'h3', text: 'Ejercicio 7' },
        { type: 'p', text: 'En una empresa el departamento de recursos humanos, se encontró que el tiempo de reacción para solucionar un obstáculo varía acorde la edad del personal según la función:' },
        { type: 'math', latex: 'R(x) = 0{,}02\\sqrt{1850 - 40x + \\tfrac{1}{2}x^2}', display: true },
        { type: 'p', text: 'donde $R(x)$ representa el tiempo de reacción medido en minutos. La edad del personal se encuentra entre: 25 y 60 años. Determine la edad en la que el tiempo de reacción es mínimo y cuál es dicho tiempo.' },

        { type: 'callout', tone: 'criollo', text: 'Un par de avisos para no tropezar. En el ejercicio 3 el gráfico es de <strong>$f\'$, no de $f$</strong>: donde la parábola está por debajo del eje, $f$ decrece; donde corta el eje, $f$ tiene candidatos a extremo; y el vértice de la parábola (el mínimo de $f\'$) es el punto de inflexión de $f$. En el ejercicio 4, en cambio, el gráfico <strong>sí</strong> es el de $f$, y lo que tenés que hacer es inventar vos los intervalos que cumplan cada condición — hay muchas respuestas válidas. Y en el 7, la edad está restringida a $[25;60]$: es un extremo condicionado de manual, así que evaluá también las puntas.' },
      ],
      quiz: {
        tf: [
          { id: 'tf-8-1', q: 'En el ejercicio 1 la función a estudiar es $f(x) = \\dfrac{2x^2+3}{4x-1}$.', a: true, explain: 'Es el enunciado textual, y sobre ella se piden los siete ítems (dominio, continuidad, crecimiento, concavidad, gráfica, extremos en $[-2;0]$ y rectas tangente y normal en $x = 0$).' },
          { id: 'tf-8-2', q: 'En el ejercicio 3 el gráfico dado corresponde a la función $f(x)$.', a: false, explain: 'Corresponde a la <strong>derivada</strong> de $f(x)$. Por eso las consignas te hacen deducir crecimiento, extremos, concavidad y punto de inflexión de $f$ a partir de la parábola.' },
          { id: 'tf-8-3', q: 'El ejercicio 7 restringe la edad del personal al intervalo de 25 a 60 años.', a: true, explain: 'El enunciado aclara que "la edad del personal se encuentra entre: 25 y 60 años", así que se trata de un problema de extremos condicionados.' },
          { id: 'tf-8-4', q: 'El ejercicio 6 pide los extremos de $f(x) = x^3 + 3x^2 - 9x$ sujetos a la restricción $-2 \\leq x \\leq 3$.', a: false, explain: 'La restricción del ítem b) es $0 \\leq x \\leq 4$. El intervalo $[-2;3]$ es el del ítem c) del ejercicio 5.' },
          { id: 'tf-8-5', q: 'En el ejercicio 4 se pide, entre otras cosas, un intervalo donde los extremos de $f(x)$ sean ambos extremos del intervalo.', a: true, explain: 'Es el ítem c). Los otros dos piden un intervalo donde el máximo coincida con un máximo relativo y otro donde el mínimo sea una de las puntas.' },
        ],
        mc: [
          {
            id: 'mc-8-1',
            q: '¿Qué se pide en el ítem g) del ejercicio 1?',
            options: [
              'La gráfica aproximada de $f(x)$',
              'Los extremos de $f(x)$ en $[-2;0]$',
              'Las ecuaciones de la recta tangente y normal en $x = 0$',
              'Los puntos de inflexión de $f(x)$',
            ],
            correctIndex: 2,
            explain: 'El ítem g) pide las rectas tangente y normal al gráfico en $x = 0$. La gráfica aproximada es el e) y los extremos en $[-2;0]$, el f).',
          },
          {
            id: 'mc-8-2',
            q: 'En el ejercicio 5, ¿a qué intervalo está restringida $g(x) = x - \\ln(2+x)$?',
            options: [
              '$-1 \\leq x \\leq 4$',
              '$0 \\leq x \\leq 3$',
              '$-2 \\leq x \\leq 3$',
              '$0 \\leq x \\leq 4$',
            ],
            correctIndex: 1,
            explain: 'El ítem b) del ejercicio 5 lleva $0 \\leq x \\leq 3$. El $[-1;4]$ es del ítem a), el $[-2;3]$ del c) y el $[0;4]$ es del ejercicio 6.',
          },
          {
            id: 'mc-8-3',
            q: 'Del gráfico de $f\'(x)$ del ejercicio 3, ¿qué se concluye para los valores de $x$ donde la parábola queda por debajo del eje?',
            options: [
              'Que $f$ es decreciente ahí',
              'Que $f$ es negativa ahí',
              'Que $f$ es convexa ahí',
              'Que $f$ tiene un mínimo ahí',
            ],
            correctIndex: 0,
            explain: 'Que $f\'(x) < 0$ significa que $f$ decrece. El signo de $f$ y su concavidad son otra cosa: la concavidad se lee del <strong>crecimiento</strong> de $f\'$, no de su signo.',
          },
          {
            id: 'mc-8-4',
            q: '¿Qué función aparece en el ítem h) del ejercicio 2?',
            options: [
              '$m(x) = 2^{\\frac{1}{x-1}}$',
              '$m(x) = \\dfrac{2}{x-1}$',
              '$m(x) = 2x^2 - x^4$',
              '$m(x) = x + \\dfrac{1}{x}$',
            ],
            correctIndex: 0,
            explain: 'Es una exponencial de base 2 con exponente $\\frac{1}{x-1}$. La tercera opción es el ítem g) y la cuarta el e).',
          },
        ],
        ms: [
          {
            id: 'ms-8-1',
            q: '¿Qué ejercicios del TP 2 son de extremos condicionados (función restringida a un intervalo)?',
            options: [
              'El ítem f) del ejercicio 1',
              'El ejercicio 5',
              'El ítem b) del ejercicio 6',
              'El ejercicio 7',
              'El ejercicio 2',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El ejercicio 2 pide el estudio completo de ocho funciones sobre todo su dominio, sin restricción a un intervalo. Todos los demás acotan la variable a un intervalo cerrado.',
          },
          {
            id: 'ms-8-2',
            q: 'Según el enunciado del ejercicio 1, ¿qué hay que hallar?',
            options: [
              'El dominio y las asíntotas',
              'Los puntos de discontinuidad, clasificados',
              'Los intervalos de concavidad y convexidad',
              'Los extremos en el intervalo $[-2;0]$',
              'El conjunto imagen y los extremos absolutos',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El ejercicio 1 tiene siete ítems (a–g) y ninguno pide explícitamente el conjunto imagen ni los extremos absolutos; sí pide la gráfica aproximada y las rectas tangente y normal en $x = 0$.',
          },
          {
            id: 'ms-8-3',
            q: 'Sobre el ejercicio 7 (tiempo de reacción), ¿qué afirmaciones son correctas?',
            options: [
              '$R(x)$ mide el tiempo de reacción en minutos',
              'La edad está acotada entre 25 y 60 años',
              'Se pide la edad de mínimo tiempo de reacción y ese tiempo',
              'La función lleva un factor $0{,}02$ multiplicando a la raíz',
              'Se pide además el gráfico aproximado de $R(x)$',
            ],
            correctIndexes: [0, 1, 2, 3],
            explain: 'El enunciado no pide graficar: pide determinar la edad en la que el tiempo de reacción es mínimo y cuál es dicho tiempo.',
          },
        ],
      },
      flashcards: [
        { id: 'fc-8-1', front: 'TP 2 — ¿qué cubre?', back: 'Siete consignas: estudio completo guiado de una racional (1), estudio completo de ocho funciones (2), lectura del gráfico de $f\'$ (3), lectura del gráfico de $f$ para armar intervalos (4) y extremos condicionados (5, 6 y 7).' },
        { id: 'fc-8-2', front: 'Ejercicio 1 — la función y los ítems', back: '$f(x) = \\dfrac{2x^2+3}{4x-1}$. Se pide: dominio, intersecciones y asíntotas; continuidad y clasificación de discontinuidades; crecimiento y extremos; concavidad, convexidad y puntos de inflexión; gráfica aproximada; extremos en $[-2;0]$; rectas tangente y normal en $x = 0$.' },
        { id: 'fc-8-3', front: 'Ejercicio 2 — las ocho funciones', back: '$\\dfrac{e^x}{x}$, $\\dfrac{2x}{x^2+1}$, $\\dfrac{x}{\\ln x}$, $x^3-3x^2$, $x+\\dfrac{1}{x}$, $x\\sqrt{1-x^2}$, $2x^2-x^4$ y $2^{\\frac{1}{x-1}}$.' },
        { id: 'fc-8-4', front: 'Ejercicio 3 — qué se da y qué se pide', back: 'Se da el gráfico de $f\'(x)$ (una parábola) y hay que completar afirmaciones sobre crecimiento y decrecimiento de $f$, extremos en $x = 3$ y $x = -5$, crecimiento de $f\'$, concavidad y convexidad de $f$, y el punto de inflexión.' },
        { id: 'fc-8-5', front: 'Ejercicio 4 — qué se pide', back: 'A partir del gráfico de $f(x)$: a) un intervalo donde el máximo coincida con un máximo relativo; b) uno donde el mínimo sea una de las puntas del intervalo; c) uno donde ambos extremos sean las puntas del intervalo.' },
        { id: 'fc-8-6', front: 'Ejercicio 5 — funciones e intervalos', back: '$f(x) = 3x^2+2x-1$ en $[-1;4]$; $g(x) = x - \\ln(2+x)$ en $[0;3]$; $h(x) = 2x^3-3x^2-12x+2$ en $[-2;3]$.' },
        { id: 'fc-8-7', front: 'Ejercicio 6 — qué pide', back: 'Para $f(x) = x^3+3x^2-9x$: a) intervalos de crecimiento, decrecimiento y extremos; b) los extremos sujetos a la restricción $0 \\leq x \\leq 4$.' },
        { id: 'fc-8-8', front: 'Ejercicio 7 — el problema de RR. HH.', back: '$R(x) = 0{,}02\\sqrt{1850 - 40x + \\frac{1}{2}x^2}$ da el tiempo de reacción en minutos según la edad $x$, con $25 \\leq x \\leq 60$. Se pide la edad de mínimo tiempo de reacción y ese tiempo.' },
      ],
    },
  ],
  pdfs: [
    { key: 'aplicacion-derivadas', label: 'Apunte · Aplicación de las derivadas', path: 'pdfs/analisis-matematico-2/1-aplicacion-de-las-derivadas.pdf' },
    { key: 'tp1-extremos-concavidad', label: 'TP 1 · Extremos relativos. Concavidad y convexidad', path: 'pdfs/analisis-matematico-2/2-tp1-extremos-concavidad.pdf' },
    { key: 'estudio-completo-funciones', label: 'Apunte · Estudio completo de funciones. Extremos condicionados', path: 'pdfs/analisis-matematico-2/3-estudio-completo-de-funciones.pdf' },
    { key: 'tp2-estudio-completo', label: 'TP 2 · Estudio completo de funciones. Extremos condicionados', path: 'pdfs/analisis-matematico-2/4-tp2-estudio-completo-extremos-condicionados.pdf' },
  ],
};
