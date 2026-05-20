/**
 * Materia: Análisis Matemático.
 * Unidad 'derivadas' — tabla de derivadas, reglas y derivabilidad.
 *
 * Las fórmulas se escriben en LaTeX entre $...$ (inline) o $$...$$ (display).
 * Render por KaTeX (cargado en seccion.html).
 */

export default {
  id: 'analisis-matematico',
  title: 'Análisis Matemático',
  subtitle: 'Apuntes y fórmulas',
  tagline: 'Derivadas — tabla, reglas, derivabilidad y rectas tangente/normal',
  units: { 'derivadas': 'Derivadas' },
  sections: [
    {
      id: '1',
      unit: 'derivadas',
      title: 'Tabla de derivadas',
      criollo: 'Las derivadas básicas que más vas a usar. Memorizalas — son los ladrillos de todo lo demás.',
      blocks: [
        {
          type: 'p',
          text: 'La derivada de una función mide la tasa de cambio instantánea. Estas son las derivadas elementales que aparecen una y otra vez. Si tu función es una de estas exactamente, listo. Si es una combinación, mirá la sección de reglas.',
        },
        {
          type: 'table',
          caption: 'Derivadas elementales',
          headers: ['f(x)', "f'(x)"],
          rows: [
            ['$c$ (constante)', '$0$'],
            ['$x$', '$1$'],
            ['$x^n$', '$n \\cdot x^{n-1}$'],
            ['$e^x$', '$e^x$'],
            ['$a^x$', '$a^x \\cdot \\ln a$'],
            ['$\\ln x$', '$\\dfrac{1}{x}$'],
            ['$\\log_a x$', '$\\dfrac{1}{x \\ln a}$'],
            ['$\\sin x$', '$\\cos x$'],
            ['$\\cos x$', '$-\\sin x$'],
            ['$\\tan x$', '$\\sec^2 x$'],
            ['$\\cot x$', '$-\\csc^2 x$'],
            ['$\\sec x$', '$\\sec x \\cdot \\tan x$'],
            ['$\\csc x$', '$-\\csc x \\cdot \\cot x$'],
            ['$\\arcsin x$', '$\\dfrac{1}{\\sqrt{1-x^2}}$'],
            ['$\\arccos x$', '$-\\dfrac{1}{\\sqrt{1-x^2}}$'],
            ['$\\arctan x$', '$\\dfrac{1}{1+x^2}$'],
            ['$\\sinh x$', '$\\cosh x$'],
            ['$\\cosh x$', '$\\sinh x$'],
            ['$\\tanh x$', '$\\operatorname{sech}^2 x = 1 - \\tanh^2 x$'],
            ['$\\coth x$', '$-\\operatorname{csch}^2 x$'],
            ['$\\operatorname{sech} x$', '$-\\operatorname{sech} x \\cdot \\tanh x$'],
            ['$\\operatorname{csch} x$', '$-\\operatorname{csch} x \\cdot \\coth x$'],
          ],
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: 'Si tu función combina varias de estas (suma, producto, cociente o composición), no derives cada parte por separado a lo loco — hay reglas. Mirá la sección 2.',
        },
      ],
    },
    {
      id: '2',
      unit: 'derivadas',
      title: 'Reglas de derivación',
      criollo: 'Cuando la función no es una sola cosa sino una combinación, no derivás cada parte por separado: hay reglas concretas para suma, producto, cociente y composición. Estas cuatro cubren casi todo.',
      blocks: [
        {
          type: 'p',
          text: 'Las cuatro reglas que vas a usar todo el tiempo. Cada una con su fórmula y un ejemplo corto. Las podés combinar entre sí: una derivada con regla de la cadena por dentro y producto por fuera es perfectamente normal.',
        },

        {
          type: 'h3',
          text: 'Regla de la suma (y de la resta)',
          criollo: 'La derivada de una suma es la suma de las derivadas. Esto sí podés hacerlo por partes — para sumas y restas siempre funciona.',
        },
        { type: 'math', latex: '(f + g)\'(x) = f\'(x) + g\'(x)', display: true },
        {
          type: 'p',
          text: 'Ejemplo: si $f(x) = x^3 + \\sin x$, entonces $f\'(x) = 3x^2 + \\cos x$. Cada término se deriva por su lado y se suma.',
        },

        {
          type: 'h3',
          text: 'Regla del producto',
          criollo: 'No, la derivada de un producto NO es el producto de las derivadas. La fórmula es: derivada del primero por el segundo, más el primero por la derivada del segundo.',
        },
        { type: 'math', latex: '(f \\cdot g)\'(x) = f\'(x) \\cdot g(x) + f(x) \\cdot g\'(x)', display: true },
        {
          type: 'p',
          text: 'Ejemplo: si $f(x) = x^2 \\cdot \\sin x$, entonces $f\'(x) = 2x \\cdot \\sin x + x^2 \\cdot \\cos x$.',
        },

        {
          type: 'h3',
          text: 'Regla del cociente',
          criollo: 'Para una división: derivada del numerador por el denominador, menos el numerador por la derivada del denominador, todo dividido el denominador al cuadrado.',
        },
        { type: 'math', latex: '\\left(\\dfrac{f}{g}\\right)\'(x) = \\dfrac{f\'(x)\\,g(x) - f(x)\\,g\'(x)}{[g(x)]^2}', display: true },
        {
          type: 'p',
          text: 'Ejemplo: si $f(x) = \\dfrac{\\sin x}{x}$, entonces $f\'(x) = \\dfrac{\\cos x \\cdot x - \\sin x \\cdot 1}{x^2} = \\dfrac{x\\cos x - \\sin x}{x^2}$.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Solo válida si $g(x) \\ne 0$. En los puntos donde el denominador se anula, la función no está definida y por lo tanto no es derivable ahí.',
        },

        {
          type: 'h3',
          text: 'Regla de la cadena',
          criollo: 'Para una función compuesta (una función dentro de otra), derivás de afuera hacia adentro y multiplicás por la derivada de adentro. Si te equivocás en algo, casi siempre es acá.',
        },
        { type: 'math', latex: '(f \\circ g)\'(x) = f\'(g(x)) \\cdot g\'(x)', display: true },
        {
          type: 'p',
          text: 'Ejemplo: si $f(x) = \\sin(x^2)$, la "de afuera" es $\\sin$ y la "de adentro" es $x^2$. Derivás la de afuera dejando la de adentro intacta ($\\cos(x^2)$) y multiplicás por la derivada de la de adentro ($2x$). Resultado: $f\'(x) = \\cos(x^2) \\cdot 2x$.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Truco mental: leé la función "de afuera para adentro", derivá de afuera para adentro, y multiplicá cada paso por la derivada de la siguiente capa interna.',
        },
      ],
    },
    {
      id: '3',
      unit: 'derivadas',
      title: '¿Cuándo una función es derivable?',
      criollo: 'Para decir que $f$ es derivable en un punto no alcanza con que esté definida ahí. El límite del cociente incremental tiene que existir, y dar lo mismo por izquierda y por derecha. Si hay esquina, salto o tangente vertical, no es derivable.',
      blocks: [
        {
          type: 'p',
          text: 'La derivabilidad es una propiedad local: una función puede ser derivable en casi todos los puntos de su dominio salvo en uno. En ese punto se dice que tiene un "punto no derivable", no que la función entera no lo sea.',
        },

        { type: 'h3', text: 'Definición formal' },
        {
          type: 'p',
          text: 'Decimos que $f$ es derivable en $x = a$ cuando existe el siguiente límite y es finito:',
        },
        { type: 'math', latex: 'f\'(a) = \\lim_{h \\to 0} \\dfrac{f(a+h) - f(a)}{h}', display: true },
        {
          type: 'p',
          text: 'Para que esta derivada exista en $a$ tienen que cumplirse tres condiciones simultáneamente:',
        },
        {
          type: 'ol',
          items: [
            '$f$ está definida en $a$ — el punto pertenece al dominio.',
            '$f$ es continua en $a$ — si hay un salto, agujero o asíntota vertical, no hay derivada.',
            'El límite del cociente incremental existe y es finito, y los límites laterales coinciden: $\\lim_{h \\to 0^-} \\dfrac{f(a+h) - f(a)}{h} = \\lim_{h \\to 0^+} \\dfrac{f(a+h) - f(a)}{h}$. Si los laterales dan distinto, hay esquina. Si dan $\\pm \\infty$, hay tangente vertical.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Continua NO implica derivable: $f(x) = |x|$ es continua en $0$ pero no derivable ahí (el límite lateral izquierdo da $-1$ y el derecho da $+1$).',
        },

        { type: 'h3', text: 'Casos típicos donde NO es derivable' },
        {
          type: 'ul',
          items: [
            '<strong>Esquina o pico</strong>: los límites laterales del cociente incremental existen pero son distintos. Ejemplo: $f(x) = |x|$ en $x = 0$.',
            '<strong>Salto o discontinuidad</strong>: la función no es continua en el punto, así que la condición 2 falla. Ejemplo: $f(x) = \\lfloor x \\rfloor$ (parte entera) en cualquier $x$ entero.',
            '<strong>Tangente vertical</strong>: el límite del cociente incremental da $\\pm\\infty$. Ejemplo: $f(x) = \\sqrt[3]{x}$ en $x = 0$ — la pendiente tiende a infinito.',
            '<strong>Oscilación</strong>: la función oscila infinitamente cerca del punto y ni siquiera es continua. Ejemplo: $f(x) = \\sin(1/x)$ no extendida a $x = 0$.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Truco para detectar: si podés dibujar la función sin levantar el lápiz Y sin tener que cambiar bruscamente la dirección, suele ser derivable. Esquinas y tangentes verticales son las dos cosas que rompen la "suavidad".',
        },
      ],
    },
    {
      id: '4',
      unit: 'derivadas',
      title: 'Recta tangente y recta normal',
      criollo: 'La derivada en un punto no es un número abstracto: es la pendiente de la recta que "toca" a la curva ahí. Con esa pendiente y el punto armás la recta tangente, y girándola 90° sacás la normal. Esta sección une todo lo anterior con la geometría.',
      blocks: [
        {
          type: 'p',
          text: 'Arrancá pensando en la recta <strong>secante</strong> al gráfico de $f$ que pasa por los puntos $(a;\\, f(a))$ y $(x;\\, f(x))$. Su pendiente es el <strong>cociente incremental</strong>:',
        },
        { type: 'math', latex: '\\dfrac{f(x) - f(a)}{x - a}', display: true },
        {
          type: 'p',
          text: 'Si a ese cociente le aplicás el límite cuando $x$ tiende a $a$, gráficamente hacés que el punto $(x;\\, f(x))$ se acerque tanto como pueda al punto $(a;\\, f(a))$, y la recta secante se transforma en <strong>recta tangente</strong>. La palabra tangente viene del latín <strong>“tangens”</strong>, que significa <strong>“tocar”</strong> al gráfico de la función en el punto $(a;\\, f(a))$. La pendiente de la recta tangente es entonces:',
        },
        { type: 'math', latex: 'm = \\lim_{x \\to a} \\dfrac{f(x) - f(a)}{x - a} = f\'(a)', display: true },
        {
          type: 'p',
          text: 'Es decir, la pendiente de la tangente es igual a la derivada de la función en $x = a$.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'El estudio de la pendiente de la recta tangente surgió como respuesta al problema de describir la velocidad de un cuerpo en movimiento (problema de la velocidad instantánea). La dirección del movimiento de un objeto a lo largo de una curva en cada instante se define en términos de la dirección de la recta tangente: así se estudian, por ejemplo, las órbitas de los satélites o el diseño del ascenso y descenso de una montaña rusa.',
        },

        {
          type: 'h3',
          text: 'Recta tangente',
          criollo: 'Es la recta que pasa por el punto y "sigue" la dirección de la curva ahí. Su pendiente es la derivada en ese punto. Necesitás dos cosas: la pendiente $f\'(x_0)$ y el punto $(x_0;\\, y_0)$.',
        },
        {
          type: 'p',
          text: 'La recta tangente a una curva en un punto $x_0$ <strong>no anguloso</strong> (donde la curva no cambia repentinamente de dirección) es la recta que, al pasar por dicho punto, conserva la misma dirección que la curva. La derivada en un punto representa la pendiente de la recta tangente en dicho punto, por lo que su ecuación es:',
        },
        { type: 'math', latex: 'y = f\'(x_0)\\,x + b', display: true },
        {
          type: 'p',
          text: 'o bien, en su forma punto-pendiente:',
        },
        { type: 'math', latex: 'y - y_0 = f\'(x_0)\\,(x - x_0)', display: true },

        {
          type: 'h3',
          text: 'Recta normal',
          criollo: 'Es la perpendicular a la tangente en el mismo punto. Si la tangente tiene pendiente $m$, la normal tiene pendiente $-1/m$: la das vuelta y le cambiás el signo. Por eso se dice "opuesta e inversa".',
        },
        {
          type: 'p',
          text: 'Se denomina recta normal a la curva en un punto $x_0$ no anguloso a la recta <strong>perpendicular</strong> a la recta tangente en dicho punto $x_0$. Por eso su pendiente es la <strong>opuesta e inversa</strong> de la pendiente de la recta tangente. Su ecuación es:',
        },
        { type: 'math', latex: 'y = -\\dfrac{1}{f\'(x_0)}\\,x + b', display: true },
        {
          type: 'p',
          text: 'o bien, en su forma punto-pendiente:',
        },
        { type: 'math', latex: 'y - y_0 = -\\dfrac{1}{f\'(x_0)}\\,(x - x_0)', display: true },
        {
          type: 'callout',
          tone: 'info',
          text: 'Que sean perpendiculares se traduce en que el producto de sus pendientes es $-1$: $f\'(x_0) \\cdot \\left(-\\dfrac{1}{f\'(x_0)}\\right) = -1$. Ojo: si $f\'(x_0) = 0$ la tangente es horizontal y la normal es vertical (pendiente indefinida).',
        },

        {
          type: 'h3',
          text: 'Ejemplo resuelto',
          criollo: 'Seguí los cuatro pasos en orden: derivás, evaluás la derivada en el punto (eso es la pendiente), buscás el punto de tangencia, y recién ahí armás la recta. Si te apurás y te salteás el punto, no vas a tener el $b$.',
        },
        {
          type: 'p',
          text: 'Hallar la ecuación de la recta tangente a la gráfica de $f(x)$ en el punto de abscisa $x = 0$ para la siguiente función:',
        },
        { type: 'math', latex: 'f(x) = \\dfrac{e^{-2x} + 5x^3}{\\cos x}', display: true },
        {
          type: 'p',
          text: 'Para hallar la ecuación de la recta tangente seguimos estos pasos:',
        },
        {
          type: 'ol',
          items: [
            'La derivada de la función.',
            'La derivada de la función en el punto, que será la pendiente de la recta tangente.',
            'El punto de tangencia entre la recta y la función.',
            'La ecuación de la recta tangente.',
          ],
        },
        {
          type: 'p',
          text: '<strong>1)</strong> Calculamos $f\'(x)$ aplicando la regla del cociente:',
        },
        { type: 'math', latex: 'f\'(x) = \\dfrac{(-2e^{-2x} + 15x^2)\\cos x - (e^{-2x} + 5x^3)(-\\sin x)}{(\\cos x)^2}', display: true },
        {
          type: 'p',
          text: '<strong>2)</strong> Calculamos $f\'(0)$ reemplazando $x = 0$:',
        },
        { type: 'math', latex: 'f\'(0) = \\dfrac{(-2e^{0} + 15 \\cdot 0^2)\\cos 0 - (e^{0} + 5 \\cdot 0^3)(-\\sin 0)}{(\\cos 0)^2} = \\dfrac{-2 + 0}{1} = -2', display: true },
        {
          type: 'p',
          text: 'Si $f\'(0) = -2$, la pendiente de la recta tangente es $-2$, así que $y_t = -2x + b$.',
        },
        {
          type: 'p',
          text: '<strong>3)</strong> Calculamos $f(0)$ para hallar el punto de tangencia:',
        },
        { type: 'math', latex: 'f(0) = \\dfrac{e^{0} + 5 \\cdot 0^3}{\\cos 0} = \\dfrac{1 + 0}{1} = 1', display: true },
        {
          type: 'p',
          text: 'El punto de tangencia se da en $(0;\\, 1)$.',
        },
        {
          type: 'p',
          text: '<strong>4)</strong> Reemplazamos el punto en $y_t = -2x + b$ para despejar $b$:',
        },
        { type: 'math', latex: '1 = -2 \\cdot 0 + b \\;\\Rightarrow\\; b = 1', display: true },
        {
          type: 'p',
          text: 'Entonces, la ecuación de la recta tangente es:',
        },
        { type: 'math', latex: 'y_t = -2x + 1', display: true },
        {
          type: 'callout',
          tone: 'warning',
          text: 'El apunte plantea hallar también la recta normal en este ejemplo, pero en la resolución solo desarrolla la tangente. Aplicando la fórmula de la normal con $f\'(0) = -2$, su pendiente sería $-\\dfrac{1}{-2} = \\dfrac{1}{2}$ y, pasando por $(0;\\,1)$, daría $y_n = \\dfrac{1}{2}x + 1$ — pero esa cuenta no está en el apunte original.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-4-1', q: 'La pendiente de la recta tangente en un punto es igual a la derivada de la función en ese punto.', a: true, explain: 'Exacto: $m = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a} = f\'(a)$.' },
          { id: 'tf-4-2', q: 'La recta normal es paralela a la recta tangente.', a: false, explain: 'Al revés: la normal es perpendicular a la tangente en ese punto.' },
          { id: 'tf-4-3', q: 'La pendiente de la recta normal es la opuesta e inversa de la pendiente de la tangente.', a: true, explain: 'Si la tangente tiene pendiente $f\'(x_0)$, la normal tiene $-1/f\'(x_0)$.' },
          { id: 'tf-4-4', q: 'La palabra "tangente" viene del latín "tangens", que significa "tocar".', a: true, explain: 'Justamente: la tangente "toca" al gráfico de la función en el punto.' },
          { id: 'tf-4-5', q: 'La recta tangente se obtiene aplicando el límite al cociente incremental cuando x tiende a a, transformando la secante.', a: true, explain: 'Al acercar $(x; f(x))$ a $(a; f(a))$, la secante se transforma en tangente.' },
        ],
        mc: [
          { id: 'mc-4-1', q: '¿Cuál es la forma punto-pendiente de la ecuación de la recta tangente?', options: ['$y - y_0 = f\'(x_0)(x - x_0)$', '$y - y_0 = -\\frac{1}{f\'(x_0)}(x - x_0)$', '$y = f(x_0)\\,x + b$', '$y - y_0 = f(x_0)(x - x_0)$'], correctIndex: 0, explain: 'La tangente usa la derivada $f\'(x_0)$ como pendiente y pasa por $(x_0; y_0)$.' },
          { id: 'mc-4-2', q: 'Si $f\'(x_0) = -2$, ¿cuál es la pendiente de la recta normal en ese punto?', options: ['$-2$', '$2$', '$\\frac{1}{2}$', '$-\\frac{1}{2}$'], correctIndex: 2, explain: 'La normal es opuesta e inversa: $-\\frac{1}{-2} = \\frac{1}{2}$.' },
          { id: 'mc-4-3', q: '¿Qué cociente define la pendiente de la recta secante entre $(a; f(a))$ y $(x; f(x))$?', options: ['$\\frac{f(x) - f(a)}{x - a}$', '$\\frac{x - a}{f(x) - f(a)}$', '$\\frac{f(x) + f(a)}{x + a}$', '$f(x) - f(a)$'], correctIndex: 0, explain: 'Es el cociente incremental: variación de $y$ sobre variación de $x$.' },
          { id: 'mc-4-4', q: 'En el ejemplo resuelto, ¿cuál es la pendiente de la tangente y el punto de tangencia?', options: ['Pendiente $-2$ y punto $(0; 1)$', 'Pendiente $1$ y punto $(0; -2)$', 'Pendiente $\\frac{1}{2}$ y punto $(1; 0)$', 'Pendiente $-2$ y punto $(1; 0)$'], correctIndex: 0, explain: '$f\'(0) = -2$ es la pendiente y $f(0) = 1$ da el punto $(0; 1)$.' },
        ],
      },
      flashcards: [
        { id: 'fc-4-1', front: 'Cociente incremental', back: 'La pendiente de la recta secante: $\\frac{f(x) - f(a)}{x - a}$.' },
        { id: 'fc-4-2', front: 'Pendiente de la recta tangente', back: 'Es la derivada de la función en el punto: $m = f\'(x_0)$.' },
        { id: 'fc-4-3', front: 'Ecuación de la recta tangente', back: '$y - y_0 = f\'(x_0)(x - x_0)$, o bien $y = f\'(x_0)x + b$.' },
        { id: 'fc-4-4', front: 'Recta normal', back: 'La recta perpendicular a la tangente en el punto $x_0$ no anguloso.' },
        { id: 'fc-4-5', front: 'Pendiente de la recta normal', back: 'La opuesta e inversa de la de la tangente: $-\\frac{1}{f\'(x_0)}$.' },
        { id: 'fc-4-6', front: 'Ecuación de la recta normal', back: '$y - y_0 = -\\frac{1}{f\'(x_0)}(x - x_0)$.' },
        { id: 'fc-4-7', front: '¿De dónde viene "tangente"?', back: 'Del latín "tangens", que significa "tocar" al gráfico en el punto.' },
        { id: 'fc-4-8', front: 'Punto no anguloso', back: 'Un punto donde la curva no cambia repentinamente de dirección (no hay esquina).' },
      ],
    },
  ],
  pdfs: [
    { key: 'recta-tangente-normal', label: 'Recta tangente y recta normal', path: 'pdfs/analisis-matematico/derivadas-recta-tangente-normal.pdf' },
  ],
};
