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
  ],
  pdfs: [],
};
