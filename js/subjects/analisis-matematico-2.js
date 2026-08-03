/**
 * Materia: Análisis Matemático 2.
 *
 * Unidad 'derivadas' (secciones 1-4): el apunte de cátedra "Aplicación de las
 * derivadas" (UP), transcripto en forma literal, con criollo, quizzes y
 * flashcards.
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
  subtitle: 'Aplicación de las derivadas — Apuntes',
  tagline: 'Crecimiento y decrecimiento · Extremos relativos · Puntos críticos · Concavidad y convexidad · Puntos de inflexión',
  units: {
    'derivadas': 'Aplicación de las derivadas',
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
  ],
  pdfs: [
    { key: 'aplicacion-derivadas', label: 'Apunte · Aplicación de las derivadas', path: 'pdfs/analisis-matematico-2/1-aplicacion-de-las-derivadas.pdf' },
  ],
};
