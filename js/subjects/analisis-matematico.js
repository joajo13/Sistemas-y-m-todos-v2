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
  tagline: 'Derivadas — tabla, reglas y derivabilidad',
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
            '**Esquina o pico**: los límites laterales del cociente incremental existen pero son distintos. Ejemplo: $f(x) = |x|$ en $x = 0$.',
            '**Salto o discontinuidad**: la función no es continua en el punto, así que la condición 2 falla. Ejemplo: $f(x) = \\lfloor x \\rfloor$ (parte entera) en cualquier $x$ entero.',
            '**Tangente vertical**: el límite del cociente incremental da $\\pm\\infty$. Ejemplo: $f(x) = \\sqrt[3]{x}$ en $x = 0$ — la pendiente tiende a infinito.',
            '**Oscilación**: la función oscila infinitamente cerca del punto y ni siquiera es continua. Ejemplo: $f(x) = \\sin(1/x)$ no extendida a $x = 0$.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Truco para detectar: si podés dibujar la función sin levantar el lápiz Y sin tener que cambiar bruscamente la dirección, suele ser derivable. Esquinas y tangentes verticales son las dos cosas que rompen la "suavidad".',
        },
      ],
    },
  ],
  pdfs: [],
};
