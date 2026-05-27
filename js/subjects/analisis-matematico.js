/**
 * Materia: Análisis Matemático.
 * Unidad 'derivadas' — tabla de derivadas, reglas y derivabilidad.
 * Unidad 'lhopital' — regla de L'Hôpital y casos de indeterminación.
 *
 * Las fórmulas se escriben en LaTeX entre $...$ (inline) o $$...$$ (display).
 * Render por KaTeX (cargado en seccion.html).
 */

export default {
  id: 'analisis-matematico',
  title: 'Análisis Matemático',
  subtitle: 'Apuntes y fórmulas',
  tagline: 'Derivadas — tabla, reglas, derivabilidad y rectas tangente/normal · Regla de L\'Hôpital',
  units: { 'derivadas': 'Derivadas', 'lhopital': 'Regla de L\'Hôpital' },
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
    {
      id: '5',
      unit: 'lhopital',
      title: 'Regla de L\'Hôpital: definición y condiciones',
      criollo: 'Cuando un límite te da una indeterminación tipo $\\frac{0}{0}$, en vez de pelearte algebraicamente derivás numerador y denominador por separado y volvés a tomar el límite. Ojo: no es la regla del cociente, es derivar arriba y abajo cada uno por su lado.',
      blocks: [
        {
          type: 'p',
          text: 'Cuando resolvemos un límite podemos encontrarnos con una indeterminación, que muchas veces puede salvarse recurriendo a las derivadas mediante un método conocido como regla de L\'Hôpital.',
        },
        {
          type: 'h3',
          text: 'Condiciones para aplicarla',
          criollo: 'No la podés tirar siempre: hace falta que se cumplan las tres condiciones. La clave es que sea una indeterminación $\\frac{0}{0}$ (los dos infinitésimos) y que el límite de las derivadas exista y sea finito.',
        },
        {
          type: 'p',
          text: 'Las condiciones para poder aplicar la Regla de L\'Hôpital en el límite $\\lim_{x \\to a} \\dfrac{f(x)}{g(x)}$ son las siguientes:',
        },
        {
          type: 'ul',
          items: [
            '$f$ y $g$ son dos funciones derivables en un entorno reducido de $a$ y $g\'(x) \\ne 0$ en todo punto del entorno reducido.',
            '$f$ y $g$ son infinitésimos en $a$, o sea $\\lim_{x \\to a} f(x) = 0$ y $\\lim_{x \\to a} g(x) = 0$.',
            'Existe $\\lim_{x \\to a} \\dfrac{f\'(x)}{g\'(x)} = l$ (finito).',
          ],
        },
        {
          type: 'p',
          text: 'Si estas condiciones se cumplen, podemos decir que existe el límite y vale:',
        },
        { type: 'math', latex: '\\lim_{x \\to a} \\dfrac{f(x)}{g(x)} = \\lim_{x \\to a} \\dfrac{f\'(x)}{g\'(x)} = l', display: true },
        {
          type: 'p',
          text: 'Es decir, podemos salvar la indeterminación derivando numerador y denominador.',
        },
        { type: 'h3', text: 'Ejemplos', criollo: 'Dos casos típicos de $\\frac{0}{0}$. En el segundo, fijate que la regla te da el mismo resultado que factorizar y simplificar — pero suele ser más directo.' },
        {
          type: 'p',
          text: '<strong>1)</strong> Un límite $\\frac{0}{0}$: derivás arriba ($x \\to 1$) y abajo ($\\ln(x+1) \\to \\frac{1}{x+1}$):',
        },
        { type: 'math', latex: '\\lim_{x \\to 0} \\dfrac{x}{\\ln(x+1)} = \\lim_{x \\to 0} \\dfrac{1}{\\frac{1}{x+1}} = 1', display: true },
        {
          type: 'p',
          text: '<strong>2)</strong> Otra indeterminación $\\frac{0}{0}$ en $x = 3$:',
        },
        { type: 'math', latex: '\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\dfrac{2x}{1} = 6', display: true },
        {
          type: 'h3',
          text: 'Observación: el recíproco no vale',
          criollo: 'Que el límite del cociente original exista NO garantiza que exista el límite de las derivadas. La implicación va para un solo lado.',
        },
        {
          type: 'p',
          text: 'El recíproco del teorema no es válido. O sea, puede existir $\\lim_{x \\to a} \\dfrac{f(x)}{g(x)}$ y no existir $\\lim_{x \\to a} \\dfrac{f\'(x)}{g\'(x)}$.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-5-1', q: 'La regla de L\'Hôpital sirve para salvar indeterminaciones derivando numerador y denominador por separado.', a: true, explain: 'Exacto: se deriva $f$ y $g$ cada uno por su lado, no es la regla del cociente.' },
          { id: 'tf-5-2', q: 'Para aplicar L\'Hôpital en un caso $\\frac{0}{0}$ alcanza con que f y g sean infinitésimos en a, sin más condiciones.', a: false, explain: 'También hace falta que sean derivables en un entorno reducido, que $g\'(x) \\ne 0$, y que exista y sea finito $\\lim \\frac{f\'(x)}{g\'(x)}$.' },
          { id: 'tf-5-3', q: 'El límite de las derivadas debe existir y ser finito para poder aplicar la regla.', a: true, explain: 'Es una de las tres condiciones: $\\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)} = l$ con $l$ finito.' },
          { id: 'tf-5-4', q: 'Si existe el límite del cociente original, entonces siempre existe el límite del cociente de las derivadas.', a: false, explain: 'El recíproco del teorema no es válido: puede existir uno y no el otro.' },
        ],
        mc: [
          { id: 'mc-5-1', q: '¿Qué tipo de indeterminación resuelve directamente la versión básica de la regla de L\'Hôpital?', options: ['$\\frac{0}{0}$', '$0 + 0$', '$1 \\cdot \\infty$ siempre', '$\\frac{5}{0}$'], correctIndex: 0, explain: 'La versión básica requiere que $f$ y $g$ sean infinitésimos en $a$, es decir la forma $\\frac{0}{0}$.' },
          { id: 'mc-5-2', q: 'Resolvé $\\lim_{x \\to 0} \\frac{x}{\\ln(x+1)}$ con L\'Hôpital.', options: ['$1$', '$0$', '$\\infty$', '$\\frac{1}{2}$'], correctIndex: 0, explain: 'Derivando: $\\frac{1}{1/(x+1)} \\to \\frac{1}{1} = 1$.' },
          { id: 'mc-5-3', q: '¿Cuál NO es una condición para aplicar la regla?', options: ['Que $f$ y $g$ sean polinomios', 'Que $f$ y $g$ sean derivables en un entorno reducido de $a$', 'Que $g\'(x) \\ne 0$ en el entorno reducido', 'Que exista y sea finito $\\lim \\frac{f\'(x)}{g\'(x)}$'], correctIndex: 0, explain: 'No se exige que sean polinomios; sí derivabilidad, $g\' \\ne 0$ y que exista el límite de las derivadas.' },
        ],
      },
      flashcards: [
        { id: 'fc-5-1', front: '¿Qué es la regla de L\'Hôpital?', back: 'Un método para salvar indeterminaciones de un límite derivando numerador y denominador por separado.' },
        { id: 'fc-5-2', front: 'Fórmula de L\'Hôpital', back: '$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)} = l$.' },
        { id: 'fc-5-3', front: 'Condiciones (caso $\\frac{0}{0}$)', back: '$f$ y $g$ derivables en un entorno reducido de $a$, $g\'(x) \\ne 0$, ambos infinitésimos en $a$, y existe $\\lim \\frac{f\'(x)}{g\'(x)}$ finito.' },
        { id: 'fc-5-4', front: 'Infinitésimo en a', back: 'Una función cuyo límite en $a$ es $0$: $\\lim_{x \\to a} f(x) = 0$.' },
        { id: 'fc-5-5', front: '¿Vale el recíproco?', back: 'No: puede existir $\\lim \\frac{f(x)}{g(x)}$ y no existir $\\lim \\frac{f\'(x)}{g\'(x)}$.' },
        { id: 'fc-5-6', front: '$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$', back: 'Por L\'Hôpital: $\\lim_{x \\to 3} \\frac{2x}{1} = 6$.' },
      ],
    },
    {
      id: '6',
      unit: 'lhopital',
      title: 'Aplicación reiterada y validez de la regla',
      criollo: 'Si después de derivar una vez seguís con $\\frac{0}{0}$, volvés a aplicar la regla — las veces que haga falta. Y aunque el ejemplo clásico es con $x \\to a$ finito, la regla también funciona cuando $x \\to +\\infty$ o $x \\to -\\infty$.',
      blocks: [
        {
          type: 'p',
          text: 'Puede ocurrir que al aplicar la regla de L\'Hôpital, $f\'$ y $g\'$ sean infinitésimos en $a$ (tiendan a cero cuando $x$ tiende a $a$) y que satisfagan las hipótesis del teorema. Entonces podemos aplicar la regla en forma reiterada, hasta salvar la indeterminación:',
        },
        { type: 'math', latex: '\\lim_{x \\to a} \\dfrac{f(x)}{g(x)} = \\lim_{x \\to a} \\dfrac{f\'(x)}{g\'(x)} = \\lim_{x \\to a} \\dfrac{f\'\'(x)}{g\'\'(x)} = l', display: true },
        {
          type: 'p',
          text: 'La regla puede aplicarse hasta el orden $n$ de derivación mientras se sigan cumpliendo las condiciones establecidas.',
        },
        {
          type: 'p',
          text: 'Ejemplo (se aplica dos veces, porque la primera derivada sigue dando $\\frac{0}{0}$):',
        },
        { type: 'math', latex: '\\lim_{x \\to 0} \\dfrac{x^2 - x^3}{e^x - x - 1} = \\lim_{x \\to 0} \\dfrac{2x - 3x^2}{e^x - 1} = \\lim_{x \\to 0} \\dfrac{2 - 6x}{e^x} = 2', display: true },
        {
          type: 'h3',
          text: 'Cuando f\' ya no es infinitésimo',
          criollo: 'No siempre tenés que derivar hasta que arriba y abajo den cero a la vez. La regla también vale cuando la derivada del numerador ya no es infinitésimo y la del denominador sí.',
        },
        {
          type: 'p',
          text: 'La regla de L\'Hôpital es válida también si $\\lim_{x \\to a} f\'(x) \\ne 0$ y $\\lim_{x \\to a} g\'(x) = 0$:',
        },
        { type: 'math', latex: '\\lim_{x \\to 0} \\dfrac{2^x - 1}{x^4} = \\lim_{x \\to 0} \\dfrac{2^x \\ln 2}{4x^3}', display: true },
        {
          type: 'h3',
          text: 'Validez para x → ±∞',
          criollo: 'La regla no se queda en los límites finitos: si la variable se va a infinito, también la podés usar.',
        },
        {
          type: 'p',
          text: 'La regla de L\'Hôpital es válida también para $x \\to +\\infty$ y $x \\to -\\infty$:',
        },
        { type: 'math', latex: '\\lim_{x \\to +\\infty} \\dfrac{5x}{e^{2x-1}} \\overset{L\'H}{=} \\lim_{x \\to +\\infty} \\dfrac{5}{e^{2x-1} \\cdot 2} = 0', display: true },
      ],
      quiz: {
        tf: [
          { id: 'tf-6-1', q: 'Si tras aplicar L\'Hôpital una vez seguís con una indeterminación, podés volver a aplicarla.', a: true, explain: 'Se puede aplicar en forma reiterada, hasta el orden $n$, mientras se cumplan las condiciones.' },
          { id: 'tf-6-2', q: 'La regla de L\'Hôpital solo sirve cuando x tiende a un número finito.', a: false, explain: 'También es válida para $x \\to +\\infty$ y $x \\to -\\infty$.' },
          { id: 'tf-6-3', q: 'En $\\lim_{x \\to 0} \\frac{x^2 - x^3}{e^x - x - 1}$ hay que aplicar la regla más de una vez.', a: true, explain: 'La primera derivada da $\\frac{2x - 3x^2}{e^x - 1}$, que sigue siendo $\\frac{0}{0}$; se aplica de nuevo y da $2$.' },
          { id: 'tf-6-4', q: 'La regla puede aplicarse un número ilimitado de veces sin importar si se cumplen las condiciones.', a: false, explain: 'Se aplica hasta el orden $n$ mientras se sigan cumpliendo las condiciones establecidas.' },
        ],
        mc: [
          { id: 'mc-6-1', q: '¿Cuánto vale $\\lim_{x \\to 0} \\frac{x^2 - x^3}{e^x - x - 1}$?', options: ['$2$', '$0$', '$1$', '$\\infty$'], correctIndex: 0, explain: 'Aplicando L\'Hôpital dos veces se llega a $\\frac{2 - 6x}{e^x} \\to 2$.' },
          { id: 'mc-6-2', q: 'Al derivar $2^x - 1$ respecto de $x$ se obtiene:', options: ['$2^x \\ln 2$', '$2^x$', '$x \\cdot 2^{x-1}$', '$\\ln 2$'], correctIndex: 0, explain: 'La derivada de $a^x$ es $a^x \\ln a$.' },
          { id: 'mc-6-3', q: '¿Cuánto vale $\\lim_{x \\to +\\infty} \\frac{5x}{e^{2x-1}}$?', options: ['$0$', '$\\infty$', '$5$', '$\\frac{5}{2}$'], correctIndex: 0, explain: 'Por L\'Hôpital queda $\\frac{5}{2e^{2x-1}} \\to 0$ porque el denominador crece sin límite.' },
        ],
      },
      flashcards: [
        { id: 'fc-6-1', front: 'Aplicación reiterada', back: 'Si las derivadas siguen dando indeterminación, se vuelve a aplicar la regla: $\\lim \\frac{f}{g} = \\lim \\frac{f\'}{g\'} = \\lim \\frac{f\'\'}{g\'\'} = l$.' },
        { id: 'fc-6-2', front: '¿Hasta qué orden se puede aplicar?', back: 'Hasta el orden $n$ de derivación, mientras se sigan cumpliendo las condiciones.' },
        { id: 'fc-6-3', front: '$\\lim_{x \\to 0} \\frac{x^2 - x^3}{e^x - x - 1}$', back: 'Aplicando L\'Hôpital dos veces da $2$.' },
        { id: 'fc-6-4', front: '¿Vale para x → ∞?', back: 'Sí, la regla es válida también para $x \\to +\\infty$ y $x \\to -\\infty$.' },
        { id: 'fc-6-5', front: '$\\lim_{x \\to +\\infty} \\frac{5x}{e^{2x-1}}$', back: 'Por L\'Hôpital: $\\frac{5}{2e^{2x-1}} \\to 0$.' },
      ],
    },
    {
      id: '7',
      unit: 'lhopital',
      title: 'Otras indeterminaciones: ∞/∞ y 0·∞',
      criollo: 'La regla no es solo para $\\frac{0}{0}$. También sirve directo para $\\frac{\\infty}{\\infty}$, y para el producto $0 \\cdot \\infty$ alcanza con reescribirlo como un cociente para caer en un caso conocido.',
      blocks: [
        {
          type: 'p',
          text: 'Además del caso $\\frac{0}{0}$, la regla de L\'Hôpital se aplica a otros casos de indeterminación, ya sea directamente o transformándolos en un cociente.',
        },
        { type: 'h3', text: 'Indeterminación ∞/∞', criollo: 'Mismo espíritu que el caso $\\frac{0}{0}$, pero ahora numerador y denominador se van los dos a infinito. Las condiciones son análogas.' },
        {
          type: 'p',
          text: 'Si $\\lim_{x \\to a} f(x) = \\infty$ y $\\lim_{x \\to a} g(x) = \\infty$, siendo $f$ y $g$ derivables en todo entorno reducido de $a$, $g\'(x) \\ne 0$ y $\\lim_{x \\to a} \\dfrac{f\'(x)}{g\'(x)} = l$, entonces $\\lim_{x \\to a} \\dfrac{f(x)}{g(x)} = l$.',
        },
        {
          type: 'p',
          text: 'Ejemplo (tras derivar, hay que operar y simplificar):',
        },
        { type: 'math', latex: '\\lim_{x \\to 0^+} \\dfrac{\\ln x}{\\frac{1}{x}} \\overset{L\'H}{=} \\lim_{x \\to 0^+} \\dfrac{\\frac{1}{x}}{-\\frac{1}{x^2}} = \\lim_{x \\to 0^+} \\dfrac{x^2}{-x} = 0', display: true },
        {
          type: 'p',
          text: 'También es aplicable si la variable tiende a infinito:',
        },
        { type: 'math', latex: '\\lim_{x \\to +\\infty} \\dfrac{\\ln(1 + e^x)}{2x} \\overset{L\'H}{=} \\lim_{x \\to +\\infty} \\dfrac{\\frac{1}{1+e^x} \\cdot e^x}{2} = \\lim_{x \\to +\\infty} \\dfrac{e^x}{2(1 + e^x)} \\overset{L\'H}{=} \\lim_{x \\to +\\infty} \\dfrac{e^x}{2 e^x} = \\dfrac{1}{2}', display: true },
        { type: 'h3', text: 'Indeterminación 0·∞', criollo: 'Acá no derivás de una: primero pasás uno de los factores al denominador como su inverso, y así el producto se vuelve $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$. Recién ahí aplicás la regla.' },
        {
          type: 'p',
          text: 'Si $\\lim_{x \\to a} f(x) = 0$ y $\\lim_{x \\to a} g(x) = \\infty$, podemos expresar el producto de las funciones como un cociente, de tal forma que la indeterminación se transforme en una de $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$:',
        },
        { type: 'math', latex: '\\lim_{x \\to a} f(x) \\cdot g(x) = \\lim_{x \\to a} \\dfrac{f(x)}{\\frac{1}{g(x)}} \\;\\left(\\tfrac{0}{0}\\right) \\quad \\text{o bien} \\quad \\lim_{x \\to a} f(x) \\cdot g(x) = \\lim_{x \\to a} \\dfrac{g(x)}{\\frac{1}{h(x)}} \\;\\left(\\tfrac{\\infty}{\\infty}\\right)', display: true },
        {
          type: 'p',
          text: 'Ejemplo:',
        },
        { type: 'math', latex: '\\lim_{x \\to 1} (x^2 - 1) \\ln(x - 1) = \\lim_{x \\to 1} \\dfrac{\\ln(x-1)}{(x^2-1)^{-1}} \\overset{L\'H}{=} \\lim_{x \\to 1} \\dfrac{\\frac{1}{x-1}}{-1(x^2-1)^{-2} \\cdot 2x} = \\lim_{x \\to 1} \\dfrac{(x^2-1)^2}{-2x(x-1)} = 0', display: true },
        {
          type: 'p',
          text: 'Los pasos a seguir para resolver una indeterminación de $0 \\cdot \\infty$ aplicando la regla de L\'Hôpital son:',
        },
        {
          type: 'ol',
          items: [
            'Transformar el producto en cociente, para que quede una indeterminación $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$.',
            'Aplicar la regla.',
            'Factorizar y simplificar para llegar al valor del límite.',
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-7-1', q: 'La regla de L\'Hôpital también se aplica directamente a la indeterminación $\\frac{\\infty}{\\infty}$.', a: true, explain: 'Con condiciones análogas al caso $\\frac{0}{0}$: derivabilidad, $g\' \\ne 0$ y existencia del límite de las derivadas.' },
          { id: 'tf-7-2', q: 'Para una indeterminación 0·∞ se puede aplicar L\'Hôpital sin transformar nada.', a: false, explain: 'Primero hay que transformar el producto en un cociente ($\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$) y recién ahí aplicar la regla.' },
          { id: 'tf-7-3', q: 'Un producto $f(x) \\cdot g(x)$ con $f \\to 0$ y $g \\to \\infty$ puede escribirse como $\\frac{f(x)}{1/g(x)}$.', a: true, explain: 'Así la indeterminación $0 \\cdot \\infty$ se transforma en $\\frac{0}{0}$.' },
          { id: 'tf-7-4', q: 'Tras aplicar L\'Hôpital en un caso ∞/∞ nunca hace falta operar ni simplificar.', a: false, explain: 'En el ejemplo $\\frac{\\ln x}{1/x}$ hay que operar y simplificar tras derivar para llegar al valor.' },
        ],
        mc: [
          { id: 'mc-7-1', q: '¿Cuánto vale $\\lim_{x \\to +\\infty} \\frac{\\ln(1 + e^x)}{2x}$?', options: ['$\\frac{1}{2}$', '$0$', '$1$', '$\\infty$'], correctIndex: 0, explain: 'Aplicando L\'Hôpital dos veces y simplificando queda $\\frac{e^x}{2e^x} = \\frac{1}{2}$.' },
          { id: 'mc-7-2', q: 'Para resolver una indeterminación $0 \\cdot \\infty$, el primer paso es:', options: ['Transformar el producto en un cociente', 'Derivar el producto directamente', 'Aplicar logaritmo', 'Factorizar y simplificar'], correctIndex: 0, explain: 'Primero se reescribe como cociente para obtener $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$, después se aplica la regla y por último se factoriza y simplifica.' },
          { id: 'mc-7-3', q: '¿Cuánto vale $\\lim_{x \\to 1} (x^2 - 1)\\ln(x-1)$?', options: ['$0$', '$1$', '$-1$', '$\\infty$'], correctIndex: 0, explain: 'Reescribiéndolo como cociente y aplicando L\'Hôpital da $0$.' },
        ],
      },
      flashcards: [
        { id: 'fc-7-1', front: 'Condiciones para ∞/∞', back: '$f, g$ derivables en el entorno reducido de $a$, $g\'(x) \\ne 0$ y existe $\\lim \\frac{f\'(x)}{g\'(x)} = l$. Entonces $\\lim \\frac{f}{g} = l$.' },
        { id: 'fc-7-2', front: '¿Cómo se resuelve 0·∞?', back: 'Se transforma el producto en un cociente ($\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$), se aplica la regla y se factoriza/simplifica.' },
        { id: 'fc-7-3', front: 'Reescribir $f \\cdot g$ como cociente', back: '$f(x) \\cdot g(x) = \\frac{f(x)}{1/g(x)}$, para que dé $\\frac{0}{0}$.' },
        { id: 'fc-7-4', front: '$\\lim_{x \\to +\\infty} \\frac{\\ln(1+e^x)}{2x}$', back: 'Vale $\\frac{1}{2}$ (aplicando L\'Hôpital dos veces).' },
        { id: 'fc-7-5', front: '$\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x}$', back: 'Por L\'Hôpital y simplificando: $\\frac{x^2}{-x} \\to 0$.' },
        { id: 'fc-7-6', front: 'Pasos para 0·∞', back: '1) transformar en cociente; 2) aplicar la regla; 3) factorizar y simplificar.' },
      ],
    },
    {
      id: '8',
      unit: 'lhopital',
      title: 'Indeterminaciones ∞−∞ y exponenciales (0⁰, ∞⁰, 1^∞)',
      criollo: 'Los casos más rebuscados también caen. Para $\\infty - \\infty$ sacás común denominador o factor común. Para las potencias indeterminadas el truco es aplicar logaritmo a ambos miembros y bajar el exponente.',
      blocks: [
        { type: 'h3', text: 'Indeterminación ∞−∞', criollo: 'No derivás directo una resta de infinitos. Primero la convertís en un cociente (común denominador) o en un producto $0 \\cdot \\infty$ (factor común), y de ahí seguís.' },
        {
          type: 'p',
          text: 'Para poder aplicar la regla de L\'Hôpital en este tipo de indeterminación conviene sacar común denominador y transformar en un cociente; o sacar factor común, transformar la indeterminación en $0 \\cdot \\infty$, y luego llevar a un cociente para aplicar la regla.',
        },
        {
          type: 'p',
          text: '<strong>a)</strong> Sacando factor común $e^x$:',
        },
        { type: 'math', latex: '\\lim_{x \\to +\\infty} (e^x - x^2) = \\lim_{x \\to +\\infty} e^x\\left(1 - \\dfrac{x^2}{e^x}\\right) = \\lim_{x \\to +\\infty} \\dfrac{1 - \\frac{x^2}{e^x}}{e^{-x}} = \\infty', display: true },
        {
          type: 'p',
          text: 'Resolvemos primero el límite del numerador:',
        },
        { type: 'math', latex: '\\lim_{x \\to +\\infty} \\dfrac{x^2}{e^x} \\overset{L\'H}{=} \\lim_{x \\to +\\infty} \\dfrac{2x}{e^x} \\overset{L\'H}{=} \\lim_{x \\to +\\infty} \\dfrac{2}{e^x} = 0', display: true },
        {
          type: 'p',
          text: 'Entonces, como el numerador tiende a $1$ y el denominador a $0$, el límite es igual a infinito.',
        },
        {
          type: 'p',
          text: '<strong>b)</strong> Sacando común denominador:',
        },
        { type: 'math', latex: '\\lim_{x \\to 3} \\left(\\dfrac{1}{x-3} - \\dfrac{1}{\\ln(x-2)}\\right) = \\lim_{x \\to 3} \\dfrac{\\ln(x-2) - x + 3}{(x-3)\\ln(x-2)}', display: true },
        { type: 'math', latex: '\\overset{L\'H}{=} \\lim_{x \\to 3} \\dfrac{\\frac{1}{x-2} - 1}{\\ln(x-2) + \\frac{x-3}{x-2}} = \\lim_{x \\to 3} \\dfrac{3 - x}{(x-2)\\ln(x-2) + x - 3}', display: true },
        { type: 'math', latex: '\\overset{L\'H}{=} \\lim_{x \\to 3} \\dfrac{-1}{\\ln(x-2) + 1 + 1} = -\\dfrac{1}{2}', display: true },
        { type: 'h3', text: 'Indeterminaciones 0⁰, ∞⁰, 1^∞', criollo: 'Cuando la indeterminación está en el exponente, le aplicás $\\ln$ a ambos miembros. Eso baja el exponente como factor ($\\ln l = \\lim g(x)\\ln f(x)$), lo convertís en cociente, aplicás L\'Hôpital, y al final volvés con $l = e^{\\ln l}$.' },
        {
          type: 'p',
          text: 'En el caso de que el límite se presente de la forma $\\lim_{x \\to a} [f(x)]^{g(x)}$ se lleva a casos anteriores, aplicando logaritmo a ambos miembros:',
        },
        { type: 'math', latex: 'l = \\lim_{x \\to a} [f(x)]^{g(x)} \\;\\Rightarrow\\; \\ln l = \\lim_{x \\to a} g(x) \\cdot \\ln[f(x)]', display: true },
        {
          type: 'table',
          caption: 'Ejemplo a) — forma 0⁰',
          headers: ['Paso', 'Justificación'],
          rows: [
            ['$\\lim_{x \\to 0^+} x^x = l$', 'planteamos el límite'],
            ['$\\ln\\left(\\lim_{x \\to 0^+} x^x\\right) = \\ln l$', 'aplicamos $\\ln$ a ambos miembros'],
            ['$\\lim_{x \\to 0^+} x \\cdot \\ln x = \\ln l$', 'por propiedad del límite y del logaritmo'],
            ['$\\lim_{x \\to 0^+} \\dfrac{\\ln x}{x^{-1}} = \\ln l$', 'transformamos en cociente la indeterminación'],
            ['$\\lim_{x \\to 0^+} \\dfrac{\\frac{1}{x}}{-\\frac{1}{x^2}} = \\ln l$', 'aplicamos la regla de L\'Hôpital'],
            ['$\\lim_{x \\to 0^+} \\dfrac{x^2}{-x} = \\ln l$', 'simplificamos y resolvemos el límite'],
            ['$0 = \\ln l \\;\\Rightarrow\\; l = 1$', 'por definición de logaritmo, el límite es igual a $1$'],
          ],
        },
        {
          type: 'table',
          caption: 'Ejemplo b) — forma 1^∞',
          headers: ['Paso', 'Justificación'],
          rows: [
            ['$\\lim_{x \\to \\infty} \\left(\\dfrac{2x+1}{2x+3}\\right)^{x+2} = l$', 'planteamos el límite'],
            ['$\\lim_{x \\to \\infty} (x+2) \\cdot \\ln\\left(\\dfrac{2x+1}{2x+3}\\right) = \\ln l$', 'aplicamos $\\ln$ a ambos miembros y propiedades de $\\ln$'],
            ['$\\lim_{x \\to \\infty} \\dfrac{\\ln\\left(\\frac{2x+1}{2x+3}\\right)}{(x+2)^{-1}} = \\ln l$', 'transformamos en cociente'],
            ['$\\lim_{x \\to \\infty} \\dfrac{\\frac{2x+3}{2x+1} \\cdot \\frac{2(2x+3) - 2(2x+1)}{(2x+3)^2}}{-2(x+2)^{-2}} = \\ln l$', 'aplicamos la regla de L\'Hôpital'],
            ['$\\dfrac{1}{2} = \\ln l \\;\\Rightarrow\\; l = e^{1/2}$', 'simplificamos, resolvemos el límite y aplicamos propiedad de logaritmo'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-8-1', q: 'Para una indeterminación ∞−∞ conviene sacar común denominador o factor común antes de aplicar la regla.', a: true, explain: 'Así se transforma en un cociente o en $0 \\cdot \\infty$, casos a los que sí se les puede aplicar L\'Hôpital.' },
          { id: 'tf-8-2', q: 'En las formas 0⁰, ∞⁰ y 1^∞ se aplica logaritmo a ambos miembros para resolver.', a: true, explain: 'El logaritmo baja el exponente: $\\ln l = \\lim g(x) \\cdot \\ln[f(x)]$, llevándolo a un caso anterior.' },
          { id: 'tf-8-3', q: 'En el ejemplo $\\lim_{x \\to 0^+} x^x$, el resultado de $\\ln l$ es 0, por lo que $l = 1$.', a: true, explain: 'Como $\\ln l = 0$, por definición de logaritmo $l = e^0 = 1$.' },
          { id: 'tf-8-4', q: 'En $\\lim_{x \\to \\infty} \\left(\\frac{2x+1}{2x+3}\\right)^{x+2}$ el resultado es $l = 1$.', a: false, explain: 'Da $\\ln l = \\frac{1}{2}$, así que $l = e^{1/2}$, no $1$.' },
        ],
        mc: [
          { id: 'mc-8-1', q: 'Tras aplicar $\\ln$, ¿en qué se convierte $\\lim_{x \\to a} [f(x)]^{g(x)}$?', options: ['$\\ln l = \\lim_{x \\to a} g(x) \\cdot \\ln[f(x)]$', '$\\ln l = \\lim_{x \\to a} f(x) \\cdot \\ln[g(x)]$', '$\\ln l = \\lim_{x \\to a} \\frac{f(x)}{g(x)}$', '$\\ln l = \\lim_{x \\to a} [g(x)]^{f(x)}$'], correctIndex: 0, explain: 'El logaritmo de una potencia baja el exponente como factor.' },
          { id: 'mc-8-2', q: '¿Cuánto vale $\\lim_{x \\to 0^+} x^x$?', options: ['$1$', '$0$', '$e$', '$\\infty$'], correctIndex: 0, explain: 'Se obtiene $\\ln l = 0$, entonces $l = 1$.' },
          { id: 'mc-8-3', q: '¿Cuánto vale $\\lim_{x \\to \\infty} \\left(\\frac{2x+1}{2x+3}\\right)^{x+2}$?', options: ['$e^{1/2}$', '$1$', '$e$', '$e^{-1}$'], correctIndex: 0, explain: 'Se llega a $\\ln l = \\frac{1}{2}$, por lo tanto $l = e^{1/2}$.' },
          { id: 'mc-8-4', q: 'En el ejemplo a) de ∞−∞, $\\lim_{x \\to +\\infty}(e^x - x^2)$ da:', options: ['$\\infty$', '$0$', '$1$', '$-\\infty$'], correctIndex: 0, explain: 'El numerador tiende a $1$ y el denominador ($e^{-x}$) a $0$, así que el límite es infinito.' },
        ],
      },
      flashcards: [
        { id: 'fc-8-1', front: '¿Cómo se ataca ∞−∞?', back: 'Sacando común denominador (lo lleva a cociente) o factor común (lo lleva a $0 \\cdot \\infty$), y luego se aplica la regla.' },
        { id: 'fc-8-2', front: 'Formas exponenciales indeterminadas', back: '$0^0$, $\\infty^0$ y $1^\\infty$. Se resuelven aplicando logaritmo a ambos miembros.' },
        { id: 'fc-8-3', front: 'Logaritmo de la potencia', back: 'Si $l = \\lim [f(x)]^{g(x)}$, entonces $\\ln l = \\lim g(x) \\cdot \\ln[f(x)]$.' },
        { id: 'fc-8-4', front: '$\\lim_{x \\to 0^+} x^x$', back: 'Vale $1$: se llega a $\\ln l = 0$, entonces $l = e^0 = 1$.' },
        { id: 'fc-8-5', front: '$\\lim_{x \\to \\infty} \\left(\\frac{2x+1}{2x+3}\\right)^{x+2}$', back: 'Vale $e^{1/2}$: se obtiene $\\ln l = \\frac{1}{2}$.' },
        { id: 'fc-8-6', front: '$\\lim_{x \\to +\\infty}(e^x - x^2)$', back: 'Es $\\infty$: numerador $\\to 1$, denominador $\\to 0$.' },
        { id: 'fc-8-7', front: 'Último paso en formas exponenciales', back: 'Despejar $l$ con $l = e^{\\ln l}$, una vez resuelto el límite de $\\ln l$.' },
      ],
    },
  ],
  pdfs: [
    { key: 'recta-tangente-normal', label: 'Recta tangente y recta normal', path: 'pdfs/analisis-matematico/derivadas-recta-tangente-normal.pdf' },
    { key: 'regla-lhopital', label: 'Regla de L\'Hôpital', path: 'pdfs/analisis-matematico/lhopital-regla.pdf' },
  ],
};
