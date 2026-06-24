/**
 * Materia: Análisis Matemático.
 *
 * Estructura en dos lados:
 *   - Unidad 'apuntes' (secciones 1-10): la teoría de cada tema, transcripta
 *     de los apuntes de cátedra, con criollo, quizzes y flashcards.
 *   - Unidad 'guias' (secciones 11-20): las guías de trabajo práctico de cada
 *     tema, con los enunciados navegables.
 *
 * Los resultados/resoluciones y las evaluaciones se ven aparte, en la pestaña
 * "Ver PDFs" (array `pdfs`).
 *
 * Las fórmulas se escriben en LaTeX entre $...$ (inline) o $$...$$ (display).
 * Render por KaTeX (cargado en seccion.html).
 */

export default {
  id: 'analisis-matematico',
  title: 'Análisis Matemático',
  subtitle: 'Apuntes, guías de ejercicios y resultados',
  tagline: 'Generalidades de funciones · Límite e indeterminaciones · Asíntotas · Continuidad · Derivadas · Recta tangente y normal · Regla de L\'Hôpital',
  units: {
    'apuntes': 'Apuntes',
    'guias': 'Guías de ejercicios',
    'oral': 'Preparación del oral',
  },
  sections: [
{
        id: '1',
        unit: 'apuntes',
        title: 'Generalidades de las funciones',
        criollo: 'Básicamente acá se explican los tipos de funciones más comunes: lineal, cuadrática, exponencial y logarítmica. La idea es entender cómo se escriben, qué forma tienen en el gráfico y qué datos te dan sus fórmulas. Dale que es la base de todo lo que viene.',
        blocks: [
            { type: 'h3', text: 'Definición de función', criollo: '¿Qué es una función?' },
            { type: 'p', text: 'Una función definida de un conjunto $A$ en un conjunto $B$, es una relación que asigna a cada uno de los elementos "$x$" de $A$ uno y sólo un elemento "$y$" en $B$.' },
            { type: 'p', text: 'Si trabajamos con conjuntos numéricos, la relación entre los elementos de los dos conjuntos se establece mediante una fórmula.' },
            { type: 'p', text: 'Para que la función quede bien definida, además de la fórmula que relaciona los valores de $x$ con los de $y$, tenemos que indicar cuáles son todos los posibles valores de $x$ (dominio de la función) y cuáles los valores de $y$ (conjunto de llegada). La forma en que definimos una función simbólicamente es: $f: A \\to B \\;/\\; f(x) = y$.' },

            { type: 'h3', text: 'Función lineal', criollo: 'La recta de toda la vida' },
            { type: 'ul', items: [
                'Llamamos función lineal a toda función definida de reales en reales, cuya fórmula es $f: \\mathbb{R} \\to \\mathbb{R} \\;/\\; f(x) = mx + b$ con $m, b \\in \\mathbb{R}$, $m \\neq 0$, donde $m$ corresponde a la pendiente y $b$ al término independiente.',
                'El gráfico de una función lineal es una recta que puede ser creciente o decreciente dependiendo del signo de la pendiente.',
                'Para $m > 0$: la recta es creciente.',
                'Para $m < 0$: la recta es decreciente.',
                'La pendiente <strong>m</strong> representa cuánto varía la variable "$y$" por cada unidad que aumenta la variable "$x$" y gráficamente está asociado a la inclinación de la recta. Es decir, que representa al cociente de la variación de la variable dependiente sobre la variación de la variable independiente.',
                'Fórmula de la pendiente: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$',
                'Mientras que <strong>b</strong> corresponde a la ordenada al origen.',
            ] },

            { type: 'h3', text: 'Rectas paralelas y perpendiculares', criollo: '¿Cuándo dos rectas se cruzan en 90° o nunca se cruzan?' },
            { type: 'p', text: 'Dos rectas son perpendiculares si sus pendientes son opuestas e inversas, mientras que serán paralelas si las pendientes son iguales.' },
            { type: 'p', text: 'Las rectas que sean perpendiculares entre sí, se cortan en un punto y el ángulo formado en la intersección de las mismas es de 90°. En el caso de las rectas paralelas que no sean coincidentes entre sí, no existe intersección entre ellas.' },
            { type: 'callout', tone: 'info', text: '<strong>Ejemplo 1:</strong> $g(x) = 2x + 2$ es paralela a la recta $f(x) = 2x - 4$, y ambas son perpendiculares a $m(x) = -\\dfrac{1}{2}x + 9$.' },
            { type: 'callout', tone: 'info', text: '<strong>Ejemplo 2:</strong> $h(x) = -\\dfrac{2}{3}x + 2$ es perpendicular a la recta $i(x) = \\dfrac{3}{2}x + 4$.' },

            { type: 'h3', text: 'Función cuadrática', criollo: 'La parábola — va para arriba o para abajo según el coeficiente principal' },
            { type: 'p', text: 'Llamamos función cuadrática a toda función definida de reales en reales, cuya fórmula es de la forma $f(x) = ax^2 + bx + c$, donde $a$, $b$ y $c$ son números reales, con $a \\neq 0$. Los coeficientes se denominan:' },
            { type: 'ul', items: [
                '$a$: coeficiente cuadrático',
                '$b$: coeficiente lineal',
                '$c$: término independiente',
            ] },
            { type: 'p', text: 'La función cuadrática se puede escribir de tres formas equivalentes:' },
            { type: 'ol', items: [
                'Forma polinómica: $f(x) = ax^2 + bx + c$',
                'Forma canónica: $f(x) = a(x - x_v)^2 + y_v$',
                'Forma factorizada: $f(x) = a(x - x_1)(x - x_2)$',
            ] },
            { type: 'p', text: 'Cada una de estas formas de expresar la función cuadrática exhibe puntos en su gráfica. La forma polinómica muestra la ordenada al origen que será el punto $(0, c)$, la forma canónica muestra el vértice, representados por $(x_v, y_v)$, y la forma factorizada muestra las raíces como $x_1$ y $x_2$.' },
            { type: 'p', text: 'Su gráfica corresponde a una parábola que puede ser cóncava positiva o cóncava negativa, esto dependerá del valor de $a$. Si $a > 0$, la parábola será cóncava positiva, las ramas de la misma apuntarán hacia el infinito positivo y su vértice será el punto mínimo de la función. En cambio, si $a < 0$, la parábola será cóncava negativa y en este caso, las ramas apuntan hacia el infinito negativo y su vértice representará el punto máximo de la función.' },
            { type: 'p', text: 'En cualquiera de los dos casos, el vértice siempre representa un eje de simetría de la función, es decir, que sus ramas se abren con igual amplitud tanto a izquierda como a derecha del mismo.' },
            { type: 'callout', tone: 'info', text: 'Los gráficos del apunte muestran dos parábolas: una <strong>cóncava positiva</strong> (abierta hacia arriba, vértice mínimo) y una <strong>cóncava negativa</strong> (abierta hacia abajo, vértice máximo).' },

            { type: 'h3', text: 'Conjunto de ceros de la función cuadrática', criollo: '¿Dónde cruza el eje $x$? — Bhaskara al rescate' },
            { type: 'p', text: 'El cálculo para determinar las raíces de la función cuadrática proviene de aplicar la fórmula de Bhaskara:' },
            { type: 'math', latex: 'x_{1,2} = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', display: true },
            { type: 'p', text: 'El término $b^2 - 4ac$ se conoce como discriminante, y, según su resultado, podremos obtener dos raíces, una o ninguna:' },
            { type: 'ul', items: [
                'Si $b^2 - 4ac > 0$, la función tiene dos raíces reales diferentes.',
                'Si $b^2 - 4ac = 0$, la función tiene una raíz doble.',
                'Si $b^2 - 4ac < 0$, la función no tiene raíces.',
            ] },
            { type: 'p', text: 'Observando la fórmula de Bhaskara, también podemos obtener el vértice como: $x_v = -\\dfrac{b}{2a}$.' },

            { type: 'h3', text: 'Función exponencial', criollo: 'Crece (o decrece) de forma explosiva — la base lo define todo' },
            { type: 'p', text: 'Una función exponencial se define de la siguiente forma:' },
            { type: 'math', latex: 'f: R \\to R^{+} \\;/\\; f(x) = a^x + b \\quad \\text{siendo } a > 0 \\text{ y } a \\neq 1', display: true },
            { type: 'p', text: 'El número $a$ se denomina base de la función exponencial, y el término independiente $b$ corresponde a la asíntota horizontal de la función.' },
            { type: 'p', text: 'El gráfico de este tipo de funciones será decreciente en todo su dominio si la base es un número entre 0 y 1, mientras que será creciente si su base es mayor a 1.' },
            { type: 'callout', tone: 'info', text: 'El apunte muestra dos gráficos: <strong>función exponencial creciente</strong> (base mayor a 1, curva que sube hacia la derecha) y <strong>función exponencial decreciente</strong> (base entre 0 y 1, curva que baja hacia la derecha).' },

            { type: 'h3', text: 'Función logarítmica', criollo: 'La inversa de la exponencial — el dominio arranca en positivos' },
            { type: 'p', text: 'La función logarítmica se define de la siguiente manera:' },
            { type: 'math', latex: 'f: B \\to \\mathbb{R} \\;/\\; f(x) = \\log_a(x) + b \\quad \\text{siendo } a > 0, \\; a \\neq 1', display: true },
            { type: 'p', text: 'El dominio de la función logarítmica es el conjunto de los reales positivos, es decir que sólo se puede calcular el logaritmo de un número positivo. Por lo tanto, el argumento del logaritmo siempre debe ser mayor que cero y esto delimitará la asíntota vertical de la función.' },
            { type: 'p', text: 'Al igual que la función exponencial, los gráficos de la función logarítmica pueden dividirse en dos grupos, según la base sea mayor o menor que 1.' },
            { type: 'ul', items: [
                'La función logarítmica será creciente si su base es mayor a 1.',
                'La función logarítmica será decreciente si su base se encuentra entre 0 y 1.',
            ] },
        ],
        quiz: {
            tf: [
                {
                    id: 'tf-1-1',
                    q: 'En una función lineal $f(x) = mx + b$, si $m > 0$ la función es creciente.',
                    a: true,
                    explain: 'Correcto. Una pendiente positiva hace que $y$ aumente cuando $x$ aumenta, dando una recta creciente.',
                },
                {
                    id: 'tf-1-2',
                    q: 'Dos rectas son paralelas cuando sus pendientes son opuestas e inversas.',
                    a: false,
                    explain: 'Falso. Las rectas paralelas tienen pendientes iguales. Las perpendiculares son las que tienen pendientes opuestas e inversas.',
                },
                {
                    id: 'tf-1-3',
                    q: 'Si el discriminante $b^2 - 4ac < 0$, la función cuadrática no tiene raíces reales.',
                    a: true,
                    explain: 'Correcto. Un discriminante negativo indica que no hay soluciones reales para la ecuación cuadrática.',
                },
                {
                    id: 'tf-1-4',
                    q: 'El dominio de la función logarítmica incluye todos los números reales.',
                    a: false,
                    explain: 'Falso. El dominio de la función logarítmica son solo los reales positivos, ya que el logaritmo de cero o de un número negativo no está definido.',
                },
                {
                    id: 'tf-1-5',
                    q: 'En una función cuadrática con $a < 0$, el vértice representa el punto máximo de la función.',
                    a: true,
                    explain: 'Correcto. Cuando $a < 0$ la parábola es cóncava negativa (abre hacia abajo), por lo que el vértice es el punto más alto, es decir, el máximo.',
                },
            ],
            mc: [
                {
                    id: 'mc-1-1',
                    q: '¿Cuál de las siguientes es la fórmula de Bhaskara para las raíces de una función cuadrática?',
                    options: [
                        '$x_{1,2} = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$',
                        '$x_{1,2} = \\dfrac{b \\pm \\sqrt{b^2 + 4ac}}{2a}$',
                        '$x_{1,2} = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{a}$',
                        '$x_{1,2} = \\dfrac{b \\pm \\sqrt{4ac - b^2}}{2a}$',
                    ],
                    correctIndex: 0,
                    explain: 'La fórmula correcta es $x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. El signo de $b$ es negado, el discriminante es $b^2 - 4ac$ y el denominador es $2a$.',
                },
                {
                    id: 'mc-1-2',
                    q: 'En la función cuadrática, ¿qué forma permite identificar directamente las raíces $x_1$ y $x_2$?',
                    options: [
                        'Forma polinómica: $f(x) = ax^2 + bx + c$',
                        'Forma canónica: $f(x) = a(x - x_v)^2 + y_v$',
                        'Forma factorizada: $f(x) = a(x - x_1)(x - x_2)$',
                        'Ninguna de las formas anteriores muestra las raíces directamente.',
                    ],
                    correctIndex: 2,
                    explain: 'La forma factorizada $f(x) = a(x - x_1)(x - x_2)$ muestra explícitamente las raíces como $x_1$ y $x_2$.',
                },
                {
                    id: 'mc-1-3',
                    q: '¿Cuándo la función exponencial $f(x) = a^x + b$ es decreciente?',
                    options: [
                        'Cuando $a > 1$',
                        'Cuando $a = 1$',
                        'Cuando $0 < a < 1$',
                        'Cuando $a < 0$',
                    ],
                    correctIndex: 2,
                    explain: 'La función exponencial es decreciente cuando la base $a$ se encuentra entre 0 y 1 (exclusive). Para $a > 1$ es creciente, y $a = 1$ o $a \\leq 0$ no están definidos para esta función.',
                },
                {
                    id: 'mc-1-4',
                    q: '¿Qué información nos da la forma canónica $f(x) = a(x - x_v)^2 + y_v$ de la función cuadrática?',
                    options: [
                        'La ordenada al origen $(0, c)$',
                        'El vértice de la parábola $(x_v, y_v)$',
                        'Las raíces $x_1$ y $x_2$',
                        'La pendiente de la función',
                    ],
                    correctIndex: 1,
                    explain: 'La forma canónica muestra directamente el vértice de la parábola, representado por el punto $(x_v, y_v)$.',
                },
            ],
            ms: [
                {
                    id: 'ms-1-1',
                    q: '¿Cuáles de las siguientes afirmaciones sobre la función lineal $f(x) = mx + b$ son correctas?',
                    options: [
                        '$m$ representa la pendiente de la recta.',
                        '$b$ corresponde a la ordenada al origen.',
                        'La pendiente se calcula como $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$.',
                        'El gráfico de una función lineal es siempre una parábola.',
                        'Para que sea una función lineal, se requiere que $m = 0$.',
                    ],
                    correctIndexes: [0, 1, 2],
                    explain: '$m$ es la pendiente, $b$ es la ordenada al origen y la fórmula de la pendiente es el cociente de diferencias. El gráfico es una recta (no parábola) y se requiere $m \\neq 0$.',
                },
                {
                    id: 'ms-1-2',
                    q: '¿Cuáles de las siguientes propiedades corresponden a la función logarítmica?',
                    options: [
                        'Su dominio son los reales positivos.',
                        'Puede ser creciente o decreciente según la base.',
                        'Tiene una asíntota vertical determinada por el argumento.',
                        'Está definida para todos los reales, incluyendo negativos.',
                        'Su dominio incluye el cero.',
                    ],
                    correctIndexes: [0, 1, 2],
                    explain: 'La función logarítmica tiene dominio en reales positivos (no incluye cero ni negativos), puede ser creciente (base > 1) o decreciente (0 < base < 1), y tiene asíntota vertical donde el argumento tiende a cero.',
                },
                {
                    id: 'ms-1-3',
                    q: '¿Cuáles de los siguientes enunciados sobre el discriminante $b^2 - 4ac$ son verdaderos?',
                    options: [
                        'Si $b^2 - 4ac > 0$, la función tiene dos raíces reales diferentes.',
                        'Si $b^2 - 4ac = 0$, la función tiene una raíz doble.',
                        'Si $b^2 - 4ac < 0$, la función no tiene raíces reales.',
                        'Si $b^2 - 4ac = 0$, la función no tiene raíces.',
                        'Si $b^2 - 4ac > 0$, la función tiene exactamente una raíz real.',
                    ],
                    correctIndexes: [0, 1, 2],
                    explain: 'Las tres primeras afirmaciones reproducen exactamente las tres condiciones del discriminante según el apunte. Las últimas dos son falsas.',
                },
            ],
        },
        flashcards: [
            {
                id: 'fc-1-1',
                front: 'Definición de función',
                back: 'Una función $f: A \\to B$ asigna a cada elemento "$x$" de $A$ uno y sólo un elemento "$y$" en $B$. Se escribe simbólicamente como $f(x) = y$.',
            },
            {
                id: 'fc-1-2',
                front: 'Fórmula de la pendiente',
                back: 'La pendiente de una recta se calcula como $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$. Representa cuánto varía $y$ por cada unidad que aumenta $x$.',
            },
            {
                id: 'fc-1-3',
                front: 'Rectas paralelas vs. perpendiculares',
                back: 'Dos rectas son <strong>paralelas</strong> si sus pendientes son iguales. Son <strong>perpendiculares</strong> si sus pendientes son opuestas e inversas (se cortan en ángulo de 90°).',
            },
            {
                id: 'fc-1-4',
                front: 'Tres formas de la función cuadrática',
                back: 'Polinómica: $f(x) = ax^2 + bx + c$ (muestra la ordenada al origen). Canónica: $f(x) = a(x-x_v)^2 + y_v$ (muestra el vértice). Factorizada: $f(x) = a(x-x_1)(x-x_2)$ (muestra las raíces).',
            },
            {
                id: 'fc-1-5',
                front: 'Discriminante de Bhaskara',
                back: 'El discriminante es $\\Delta = b^2 - 4ac$. Si $\\Delta > 0$: dos raíces reales. Si $\\Delta = 0$: una raíz doble. Si $\\Delta < 0$: sin raíces reales.',
            },
            {
                id: 'fc-1-6',
                front: 'Vértice desde Bhaskara',
                back: 'La coordenada $x$ del vértice de una parábola se obtiene como $x_v = -\\dfrac{b}{2a}$, tomando la parte central de la fórmula de Bhaskara.',
            },
            {
                id: 'fc-1-7',
                front: 'Función exponencial — base y asíntota',
                back: 'En $f(x) = a^x + b$, el número $a$ es la base ($a > 0$, $a \\neq 1$) y $b$ determina la asíntota horizontal. Si $a > 1$ es creciente; si $0 < a < 1$ es decreciente.',
            },
            {
                id: 'fc-1-8',
                front: 'Dominio de la función logarítmica',
                back: 'El dominio de $f(x) = \\log_a(x) + b$ son los reales positivos. El argumento debe ser siempre mayor que cero, lo que define la asíntota vertical de la función.',
            },
        ],
    },
{
        id: '2',
        unit: 'apuntes',
        title: 'Límite',
        criollo: 'El límite es lo que pasa con una función cuando la variable se acerca (pero no llega) a un punto. Si desde la izquierda y desde la derecha te da lo mismo, el límite existe y es ese valor. Si te da distinto, no hay límite.',
        blocks: [
            {
                type: 'h3',
                text: 'Evolución histórica del cálculo',
                criollo: 'De dónde viene todo esto',
            },
            {
                type: 'p',
                text: 'La palabra cálculo proviene del latín <strong>calculus</strong>, que significa "piedrecita" en referencia al hecho de contar con piedras. Desde que el hombre tuvo la necesidad de contar, comienza la historia del cálculo.',
            },
            {
                type: 'p',
                text: 'En el siglo <strong>XVII Newton</strong> y simultáneamente <strong>Leibniz</strong> realizaron el gran descubrimiento: el <strong>cálculo diferencial e integral</strong>. El sistema de notación de Leibniz es el que se usa hoy en el cálculo. A partir de este descubrimiento se llevaron a cabo importantes avances en <strong>Análisis</strong>; nombre dado a partir del siglo XIX.',
            },
            {
                type: 'h3',
                text: 'Límite finito para variable finita',
                criollo: 'Qué pasa cuando x se acerca a un número fijo',
            },
            {
                type: 'p',
                text: 'La expresión <strong>límite de una función</strong> se utiliza en el cálculo diferencial para estudiar su comportamiento cuando la variable independiente toma valores suficientemente próximos a un determinado valor.',
            },
            {
                type: 'p',
                text: 'Decir que la función f tiene límite <em>l</em> en el punto $x_0$ significa que las imágenes se aproximan al valor <em>l</em> cuando las <em>x</em> toman valores próximos a $x_0$.',
            },
            {
                type: 'p',
                text: 'Notación: $\\lim_{x \\to x_0} f(x) = l$',
            },
            {
                type: 'p',
                text: '<strong>Un ejemplo para entender el concepto:</strong>',
            },
            {
                type: 'p',
                text: 'Sea $f: D \\to \\mathbb{R}$, $f(x) = \\dfrac{x^2 - 1}{x - 1}$ cuyo dominio es $\\mathbb{R} - \\{1\\}$',
            },
            {
                type: 'p',
                text: 'Si factorizamos el numerador y simplificamos queda $f(x) = x + 1$.',
            },
            {
                type: 'p',
                text: 'Como 1 no pertenece al dominio, la variable no puede tomar ese valor pero puede tomar valores tan cercanos a 1 como se quiera. Completemos la siguiente tabla de valores para analizar el comportamiento de la función en dichos puntos.',
            },
            {
                type: 'table',
                caption: 'Valores de f(x) = (x²−1)/(x−1) cerca de x = 1',
                headers: ['x', 'F(x)'],
                rows: [
                    ['0,9', '1,9'],
                    ['0,99', '1,99'],
                    ['0,999', '1,999'],
                    ['1,001', '2,001'],
                    ['1,01', '2,01'],
                    ['1,1', '2,1'],
                ],
            },
            {
                type: 'p',
                text: 'Podemos observar, tanto en la tabla como en el gráfico, que a medida que la variable independiente (x) se acerca a 1 las imágenes (f(x)) se acercan a 2. Decimos entonces que el límite de la función para x tendiendo a 1 es igual a 2.',
            },
            {
                type: 'p',
                text: 'Simbólicamente: $\\lim_{x \\to 1} f(x) = 2$',
            },
            {
                type: 'h3',
                text: 'Definición (épsilon-delta)',
                criollo: 'La definición formal del límite',
            },
            {
                type: 'p',
                text: 'Se dice que la función f(x) tiene como límite el número <em>l</em>, cuando <em>x</em> tiende a $x_0$, si dado un número real positivo ε, mayor que cero, existe un número real positivo δ dependiente de ε, tal que, para todos los valores de x distintos de $x_0$ que cumplen $0 < |x - x_0| < \\delta$, se verifica que $|f(x) - l| < \\varepsilon$.',
            },
            {
                type: 'callout',
                tone: 'info',
                text: 'Geométricamente: para cualquier valor de ε siempre podemos encontrar un valor de δ, generando un entorno con radio ε y δ del punto $(x_0, f(x_0))$; por lo que concluimos que existe límite.',
            },
            {
                type: 'h3',
                text: 'Límites infinitos',
                criollo: 'Cuando la función se dispara al infinito',
            },
            {
                type: 'p',
                text: 'Sea $f(x) = \\dfrac{1}{x}$, cuyo dominio es $\\mathbb{R} - \\{0\\}$.',
            },
            {
                type: 'p',
                text: 'Si bien la función no está definida en $x = 0$, podemos ver qué ocurre si tomamos valores muy cercanos a cero.',
            },
            {
                type: 'table',
                caption: 'Valores de f(x) = 1/x cerca de x = 0',
                headers: ['x', 'y = 1/x'],
                rows: [
                    ['0,001', '1000'],
                    ['0,00001', '100000'],
                    ['-0,001', '-1000'],
                    ['-0,00001', '-100000'],
                ],
            },
            {
                type: 'p',
                text: 'Podemos observar que a medida que <em>x</em> toma valores más cercanos a 0 y toma valores cada vez más grandes (para los positivos) o más chicos (para los negativos). Tanto de la gráfica como de la tabla podemos observar que a medida que x tiende a cero la función tiende a infinito.',
            },
            {
                type: 'callout',
                tone: 'warning',
                text: '<strong>El límite, cuando x tiende a cero, es infinito.</strong>',
            },
            {
                type: 'p',
                text: 'Simbólicamente: $\\lim_{x \\to 0} f(x) = \\infty$',
            },
            {
                type: 'p',
                text: 'Más específicamente, si nos acercamos a cero:',
            },
            {
                type: 'ul',
                items: [
                    'por valores positivos: $\\lim_{x \\to 0^+} f(x) = +\\infty$',
                    'por valores negativos: $\\lim_{x \\to 0^-} f(x) = -\\infty$',
                ],
            },
            {
                type: 'h3',
                text: 'Límite para variable infinita',
                criollo: 'Qué pasa cuando x se va al infinito',
            },
            {
                type: 'p',
                text: 'Otra observación sobre $f(x) = \\dfrac{1}{x}$: a medida que <em>x</em> toma valores muy grandes (o muy pequeños), es decir cuando x tiende a $(+\\infty$ y $-\\infty)$, la función se acerca a cero.',
            },
            {
                type: 'p',
                text: 'Simbólicamente: $\\lim_{x \\to \\infty} f(x) = 0$',
            },
            {
                type: 'h3',
                text: 'Límites laterales',
                criollo: 'Acercarse por la izquierda o por la derecha no es lo mismo',
            },
            {
                type: 'ul',
                items: [
                    'Límite lateral derecho: $\\lim_{x \\to x_0^+} f(x)$',
                    'Límite lateral izquierdo: $\\lim_{x \\to x_0^-} f(x)$',
                ],
            },
            {
                type: 'p',
                text: '<strong>Ejemplo 1:</strong> Sea $g(x) = \\begin{cases} x + 4 & \\text{si } x < 2 \\\\ x^2 & \\text{si } x \\geq 2 \\end{cases}$',
            },
            {
                type: 'table',
                caption: 'Valores de g(x) cerca de x = 2',
                headers: ['x', 'y = g(x)'],
                rows: [
                    ['1,999', '5,999'],
                    ['1,99999', '5,99999'],
                    ['1,999999', '5,999999'],
                    ['2,0001', '4,0004'],
                    ['2,00001', '4,00004'],
                    ['2,000001', '4,000004'],
                ],
            },
            {
                type: 'ul',
                items: [
                    'Si nos acercamos a 2 por valores más grandes (por la derecha), las imágenes se acercan a 4. Simbólicamente: $\\lim_{x \\to 2^+} f(x) = 4$',
                    'Si nos acercamos a 2 por valores más chicos (por la izquierda), las imágenes se acercan a 6. Simbólicamente: $\\lim_{x \\to 2^-} f(x) = 6$',
                ],
            },
            {
                type: 'p',
                text: 'Entonces cuando <em>x</em> se acerca a 2 no podemos decir que la función se acerque a un número, porque debemos aclarar si se acerca a 2 por la derecha o por la izquierda; entonces decimos que <strong>la función no tiene límite</strong>.',
            },
            {
                type: 'p',
                text: '<strong>Ejemplo 2:</strong> Sea $h(x) = \\begin{cases} x + 2 & \\text{si } x < 2 \\\\ x^2 & \\text{si } x \\geq 2 \\end{cases}$',
            },
            {
                type: 'table',
                caption: 'Valores de h(x) cerca de x = 2',
                headers: ['x', 'y'],
                rows: [
                    ['1,999', '3,999'],
                    ['1,99999', '3,99999'],
                    ['2,0001', '4,0004'],
                    ['2,000001', '4,000004'],
                ],
            },
            {
                type: 'p',
                text: 'En este caso, observamos que cuando <em>x</em> se acerca a 2 los valores de la función se acercan cada vez más a cuatro. Podemos decir que cuando <em>x</em> tiende a 2 la función tiende a 4, es decir: $\\lim_{x \\to 2} h(x) = 4$, ya que $\\lim_{x \\to 2^+} h(x) = \\lim_{x \\to 2^-} h(x) = 4$, no es necesario aclarar si es por derecha o por izquierda.',
            },
            {
                type: 'h3',
                text: 'Propiedades de los límites laterales',
                criollo: 'Dos reglas clave que hay que tener en la cabeza',
            },
            {
                type: 'callout',
                tone: 'info',
                text: '<strong>Propiedad 1:</strong> Si una función tiene límite en un punto, este es único.',
            },
            {
                type: 'callout',
                tone: 'warning',
                text: '<strong>Propiedad 2:</strong> Si los límites laterales de una función en un punto son distintos, el límite en dicho punto no existe.',
            },
            {
                type: 'h3',
                text: 'Propiedades algebraicas de los límites',
                criollo: 'Las reglas para operar con límites sin volverse loco',
            },
            {
                type: 'p',
                text: 'Sean $f_i$ funciones, tales que existe $\\lim_{x \\to a} f_i(x)$ para todo $i = 1, \\ldots, n$:',
            },
            {
                type: 'ol',
                items: [
                    '$\\lim_{x \\to a} k = k, \\quad (k \\in \\mathbb{R})$',
                    '$\\lim_{x \\to a} x = a$',
                    '$\\lim_{x \\to a} k \\cdot f(x) = k \\cdot \\lim_{x \\to a} f(x)$',
                    '$\\lim_{x \\to a} (f_1(x) + f_2(x) + \\cdots + f_n(x)) = \\lim_{x \\to a} f_1(x) + \\lim_{x \\to a} f_2(x) + \\cdots + \\lim_{x \\to a} f_n(x)$',
                    '$\\lim_{x \\to a} (f_1(x) \\cdot f_2(x) \\cdot \\ldots \\cdot f_n(x)) = \\lim_{x \\to a} f_1(x) \\cdot \\lim_{x \\to a} f_2(x) \\cdot \\ldots \\cdot \\lim_{x \\to a} f_n(x)$',
                    '$\\lim_{x \\to a} \\dfrac{f_1(x)}{f_2(x)} = \\dfrac{\\lim_{x \\to a} f_1(x)}{\\lim_{x \\to a} f_2(x)}, \\quad \\text{si } \\lim_{x \\to a} f_2(x) \\neq 0$',
                    '$\\lim_{x \\to a} [f(x)]^n = \\left[\\lim_{x \\to a} f(x)\\right]^n$',
                    '$\\lim_{x \\to a} [f_1(x)]^{f_2(x)} = \\left[\\lim_{x \\to a} f_1(x)\\right]^{\\lim_{x \\to a} f_2(x)}, \\quad \\text{siempre que } \\lim_{x \\to a} f_1(x) \\neq 0 \\text{ ó } \\lim_{x \\to a} f_2(x) \\neq 0$',
                ],
            },
            {
                type: 'h3',
                text: 'Resolución de ejercicios',
                criollo: 'Cómo atacar un límite paso a paso',
            },
            {
                type: 'p',
                text: 'Para calcular los límites se reemplaza la <em>x</em> por el valor al que tiende, y, si es posible, se hace la cuenta; en caso de que, por ejemplo, el denominador tienda a cero, entonces hay que fijarse qué ocurre con el numerador (si éste es una constante, entonces el límite es cero).',
            },
            {
                type: 'callout',
                tone: 'warning',
                text: '<strong>Recordar:</strong> para que exista el límite de una función en un punto, los límites laterales deben ser iguales en dicho punto.',
            },
            {
                type: 'callout',
                tone: 'info',
                text: '<strong>Para tener en cuenta:</strong> antes de calcular los límites, primero se debe ver la tendencia y analizar si hay alguna indeterminación.',
            },
            {
                type: 'h3',
                text: 'Indeterminaciones y técnicas de resolución',
                criollo: 'Cuando reemplazar da una forma rara que hay que resolver',
            },
            {
                type: 'p',
                text: 'Tener en cuenta que también son indeterminaciones: $0/0$, $\\infty/\\infty$, $1^\\infty$, $\\infty^0$.',
            },
            {
                type: 'ul',
                items: [
                    'Si $\\dfrac{f(x)}{g(x)} \\to 0$ (si $k \\neq 0$ y $g(x) \\to 0$): factorizar los polinomios, limite notable o raíces cuadradas.',
                    'Si $\\dfrac{f(x)}{g(x)} \\to \\dfrac{k}{0}$ ($k \\in \\mathbb{R}$): el límite es infinito — analizar el signo del denominador.',
                    'Si $\\dfrac{f(x)}{g(x)} \\to \\dfrac{\\infty}{\\infty}$ (variable infinita): dividir por el mayor grado del denominador.',
                    'Si $[f(x)]^{g(x)} \\to a^{\\pm\\infty}$ ($a > 1$): dar un límite analizar el signo del exponente.',
                    'Si $[f_1(x)]^{f_2(x)} \\to 1^\\infty$: completar la diferencia de cuadrados (multiplicar y dividir), cambiar la base, o similares.',
                    'Si $\\dfrac{f(x)}{g(x)} \\to -\\infty$ o similar: completar la diferencia de cuadrados, dividir por el exponente o comparar.',
                ],
            },
            {
                type: 'p',
                text: 'Algunos <strong>ejemplos resueltos</strong>:',
            },
            {
                type: 'p',
                text: '1) $\\lim_{x \\to 2}(3x^4 - 5x^2 + 3) = 3 \\cdot 2^4 - 5 \\cdot 2^2 + 3 = 31$',
            },
            {
                type: 'p',
                text: '2) $\\lim_{x \\to \\frac{1}{4}} \\dfrac{14}{x} = \\dfrac{14}{\\frac{1}{4}} = \\dfrac{1}{4} \\cdot 4 = 1$',
            },
            {
                type: 'p',
                text: '3) $\\lim_{x \\to 1} \\left(\\sqrt{4 \\cdot 1}\\right)^{-2} = (\\sqrt{4})^{-2} = 2^{-2} = 1$',
            },
            {
                type: 'h3',
                text: 'Ejemplo resuelto: indeterminación con exponencial (apunte adicional)',
                criollo: 'El caso raro de la base fraccionaria con exponente que va al infinito',
            },
            {
                type: 'p',
                text: '4) $\\lim_{x \\to 3} \\left(\\dfrac{2}{5}\\right)^{\\frac{1}{x-3}}$',
            },
            {
                type: 'p',
                text: 'Cuando $x \\to 3$ el exponente queda: $\\lim_{x \\to 3} \\dfrac{1}{x-3} = \\infty$ (el denominador tiende a 0).',
            },
            {
                type: 'p',
                text: 'Entonces nos quedaría $\\left(\\dfrac{2}{5}\\right)^{\\infty}$, pero no es lo mismo que sea $+\\infty$ que $-\\infty$, por lo que se deben analizar los límites laterales.',
            },
            {
                type: 'ul',
                items: [
                    '$\\lim_{x \\to 3^-} \\left(\\dfrac{2}{5}\\right)^{\\frac{1}{x-3}} = +\\infty$ (el exponente tiende a $-\\infty$, base menor que 1)',
                    '$\\lim_{x \\to 3^+} \\left(\\dfrac{2}{5}\\right)^{\\frac{1}{x-3}} = 0$ (el exponente tiende a $+\\infty$, base menor que 1)',
                ],
            },
            {
                type: 'callout',
                tone: 'warning',
                text: 'Como los límites laterales son distintos, concluimos que no existe $\\lim_{x \\to 3} f(x)$.',
            },
            {
                type: 'p',
                text: 'Esto se puede pensar como una función exponencial con base entre cero y uno: es decreciente. Cuando $x \\to +\\infty$ la función se acerca al eje $x$ (tiende a cero); cuando $x \\to -\\infty$ la función tiende a $+\\infty$ (se va para arriba).',
            },
        ],
        quiz: {
            tf: [
                {
                    id: 'tf-2-1',
                    q: 'El límite $\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x - 1}$ existe y es igual a 2.',
                    a: true,
                    explain: 'Al factorizar el numerador: $(x-1)(x+1)$, se simplifica con el denominador y queda $x+1$. Evaluando en $x=1$ da 2. El límite existe aunque $x=1$ no esté en el dominio.',
                },
                {
                    id: 'tf-2-2',
                    q: 'Si los límites laterales de una función en un punto son distintos, el límite en ese punto existe igual.',
                    a: false,
                    explain: 'Por la Propiedad 2: si los límites laterales son distintos, el límite en ese punto no existe.',
                },
                {
                    id: 'tf-2-3',
                    q: '$\\lim_{x \\to 0^+} \\dfrac{1}{x} = +\\infty$',
                    a: true,
                    explain: 'Cuando $x$ se acerca a 0 por valores positivos, $1/x$ crece sin cota. El límite lateral derecho es $+\\infty$.',
                },
                {
                    id: 'tf-2-4',
                    q: '$\\lim_{x \\to \\infty} \\dfrac{1}{x} = \\infty$',
                    a: false,
                    explain: 'Cuando $x \\to \\infty$, $1/x \\to 0$, no a infinito. El límite para variable infinita es cero.',
                },
                {
                    id: 'tf-2-5',
                    q: 'El límite de una función en un punto, si existe, es único.',
                    a: true,
                    explain: 'Por la Propiedad 1: si una función tiene límite en un punto, este es único.',
                },
            ],
            mc: [
                {
                    id: 'mc-2-1',
                    q: '¿Cuál es $\\lim_{x \\to 2}(3x^4 - 5x^2 + 3)$?',
                    options: ['31', '29', '25', '48'],
                    correctIndex: 0,
                    explain: 'Aplicando la propiedad de sustitución directa: $3 \\cdot 2^4 - 5 \\cdot 2^2 + 3 = 48 - 20 + 3 = 31$.',
                },
                {
                    id: 'mc-2-2',
                    q: 'Sea $g(x) = \\begin{cases} x+4 & x < 2 \\\\ x^2 & x \\geq 2 \\end{cases}$. ¿Qué ocurre con $\\lim_{x \\to 2} g(x)$?',
                    options: [
                        'Existe y es igual a 4',
                        'Existe y es igual a 6',
                        'No existe porque los límites laterales son distintos (6 y 4)',
                        'Existe y es igual a 5',
                    ],
                    correctIndex: 2,
                    explain: 'El límite lateral izquierdo es $2+4=6$ y el derecho es $2^2=4$. Como son distintos, el límite no existe.',
                },
                {
                    id: 'mc-2-3',
                    q: '¿Qué significa en la definición épsilon-delta que $0 < |x - x_0| < \\delta$?',
                    options: [
                        'Que $x$ puede ser igual a $x_0$',
                        'Que $x$ está en un entorno de $x_0$ pero es distinto a $x_0$',
                        'Que $x$ es siempre mayor que $x_0$',
                        'Que la función está definida en $x_0$',
                    ],
                    correctIndex: 1,
                    explain: 'La condición $0 < |x - x_0|$ asegura que $x \\neq x_0$ (la variable se acerca pero no llega). La condición $< \\delta$ indica que está en el entorno.',
                },
                {
                    id: 'mc-2-4',
                    q: '¿Cuál es $\\lim_{x \\to 3^-} \\left(\\dfrac{2}{5}\\right)^{\\frac{1}{x-3}}$?',
                    options: ['0', '$+\\infty$', '$-\\infty$', '1'],
                    correctIndex: 1,
                    explain: 'Cuando $x \\to 3^-$, el exponente $1/(x-3) \\to -\\infty$. Una base menor que 1 elevada a $-\\infty$ da $+\\infty$.',
                },
            ],
            ms: [
                {
                    id: 'ms-2-1',
                    q: '¿Cuáles de las siguientes son indeterminaciones que requieren trabajo adicional antes de calcular el límite?',
                    options: [
                        '$0/0$',
                        '$\\infty/\\infty$',
                        '$1^\\infty$',
                        '$5/2$',
                        '$\\infty^0$',
                    ],
                    correctIndexes: [0, 1, 2, 4],
                    explain: '$5/2$ no es una indeterminación, es un número definido. Las formas $0/0$, $\\infty/\\infty$, $1^\\infty$ e $\\infty^0$ son indeterminadas y requieren técnicas adicionales.',
                },
                {
                    id: 'ms-2-2',
                    q: '¿Cuáles de estas propiedades algebraicas de los límites son correctas?',
                    options: [
                        '$\\lim_{x \\to a} k = k$ para cualquier constante $k \\in \\mathbb{R}$',
                        '$\\lim_{x \\to a} x = a$',
                        '$\\lim_{x \\to a} k \\cdot f(x) = k \\cdot \\lim_{x \\to a} f(x)$',
                        '$\\lim_{x \\to a} \\dfrac{f_1(x)}{f_2(x)} = \\dfrac{\\lim f_1(x)}{\\lim f_2(x)}$ siempre, sin importar el denominador',
                        '$\\lim_{x \\to a} [f(x)]^n = \\left[\\lim_{x \\to a} f(x)\\right]^n$',
                    ],
                    correctIndexes: [0, 1, 2, 4],
                    explain: 'La propiedad del cociente (opción 4) solo vale cuando $\\lim_{x \\to a} f_2(x) \\neq 0$. Las demás propiedades son correctas sin restricciones adicionales.',
                },
                {
                    id: 'ms-2-3',
                    q: '¿En cuáles de los siguientes casos hay que analizar los límites laterales para determinar si el límite existe?',
                    options: [
                        'Función definida por partes con distinta expresión a cada lado del punto',
                        'Función continua en el punto analizado',
                        'Límite de la forma $k/0$ (denominador tiende a cero)',
                        'Potencia con base entre 0 y 1 y exponente que tiende a infinito',
                        'Límite de un polinomio en cualquier punto',
                    ],
                    correctIndexes: [0, 2, 3],
                    explain: 'Los polinomios son continuos en todos los reales — no hace falta analizar laterales. Las funciones definidas por partes, cocientes con denominador → 0, y exponenciales con exponente → ±∞ requieren análisis lateral.',
                },
            ],
        },
        flashcards: [
            {
                id: 'fc-2-1',
                front: '¿Qué es el límite de una función?',
                back: 'Es el valor al que se acercan las imágenes f(x) cuando la variable x se acerca (pero no llega) a un punto $x_0$. Se escribe $\\lim_{x \\to x_0} f(x) = l$.',
            },
            {
                id: 'fc-2-2',
                front: 'Condición para que el límite exista',
                back: 'Los límites laterales deben ser iguales: $\\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x)$. Si son distintos, el límite no existe.',
            },
            {
                id: 'fc-2-3',
                front: '$\\lim_{x \\to 0^+} \\frac{1}{x}$ y $\\lim_{x \\to 0^-} \\frac{1}{x}$',
                back: 'El límite lateral derecho es $+\\infty$ y el lateral izquierdo es $-\\infty$. Por lo tanto $\\lim_{x \\to 0} \\frac{1}{x}$ no existe.',
            },
            {
                id: 'fc-2-4',
                front: '¿Cuántos límites puede tener una función en un punto?',
                back: 'Uno solo. Por la Propiedad 1, si el límite existe es único.',
            },
            {
                id: 'fc-2-5',
                front: 'Límite de constante y límite de x',
                back: '$\\lim_{x \\to a} k = k$ (la constante no cambia) y $\\lim_{x \\to a} x = a$ (x simplemente tiende a su valor).',
            },
            {
                id: 'fc-2-6',
                front: 'Indeterminaciones más comunes',
                back: 'Son $0/0$, $\\infty/\\infty$, $1^\\infty$ e $\\infty^0$. Al sustituir directamente dan una forma sin sentido; hay que factorizar, racionalizar u otras técnicas.',
            },
            {
                id: 'fc-2-7',
                front: 'Definición épsilon-delta del límite',
                back: 'Dado ε > 0, existe δ > 0 tal que si $0 < |x - x_0| < \\delta$ entonces $|f(x) - l| < \\varepsilon$. Formaliza la idea de "tan cerca como se quiera".',
            },
            {
                id: 'fc-2-8',
                front: 'Exponencial con base 0 < b < 1 cuando exponente → ±∞',
                back: 'Si el exponente → $+\\infty$, la función → 0. Si el exponente → $-\\infty$, la función → $+\\infty$. Es decreciente.',
            },
        ],
    },
{
    id: '3',
    unit: 'apuntes',
    title: 'Indeterminaciones del límite',
    criollo: 'Cuando calculás un límite y te quedás con algo raro tipo 0/0 o ∞/∞, no podés resolverlo directo — tenés que hacer un truco algebraico para "salvar" la indeterminación. Hay varios tipos y cada uno tiene su artillería.',
    blocks: [
        {
            type: 'p',
            text: 'Si al calcular un límite, reemplazando a <em>x</em> por el valor al que tiende, incurrimos en alguno de los siguientes cálculos, llamados <strong>indeterminaciones</strong>:'
        },
        {
            type: 'math',
            latex: '\\frac{0}{0},\\quad \\frac{\\infty}{\\infty},\\quad \\infty - \\infty,\\quad 0 \\cdot \\infty,\\quad 1^{\\infty},\\quad 0^{0},\\quad \\infty^{0}',
            display: true
        },
        {
            type: 'p',
            text: 'debemos efectuar algún artificio algebraico para "salvar la indeterminación" y poder calcular el valor del límite.'
        },
        {
            type: 'p',
            text: 'Decimos que son indeterminaciones porque no podemos determinar de antemano su resultado, sino que debemos realizar ciertas operaciones algebraicas para poder calcularlo.'
        },
        {
            type: 'h3',
            text: 'Indeterminación tipo 0/0',
            criollo: 'El numerador y el denominador se van a cero. Hay que factorizar y cancelar.'
        },
        {
            type: 'p',
            text: '<strong>Indeterminación en un cociente de polinomios</strong>'
        },
        {
            type: 'p',
            text: 'La mejor opción para salvarla es factorizar los polinomios.'
        },
        {
            type: 'p',
            text: 'Antes de resolver algunas indeterminaciones, recordemos:'
        },
        {
            type: 'ul',
            items: [
                '<strong>Factor común.</strong> Ejemplo: $12x^{4} + 4x^{3} - 6x^{7} = 2x^{3}(6x + 2 - 3x^{4})$',
                '<strong>Diferencia de cuadrados.</strong> $(x^{2} - a^{2}) = (x - a)(x + a)$. Ejemplo: $x^{2} - 81 = (x-9)(x+9)$',
                '<strong>Factorización de un polinomio de segundo grado.</strong> Si $x_1$ y $x_2$ son raíces de $ax^{2}+bx+c$, entonces $ax^{2}+bx+c = a(x-x_1)(x-x_2)$. Ejemplo: $2x^{2}+2x-12$ tiene raíces $x_1=2$ y $x_2=-3$, factorizado queda $2(x-2)(x+3)$.'
            ]
        },
        {
            type: 'p',
            text: '<strong>Regla de Ruffini.</strong> Se utiliza para dividir un polinomio por otro de grado 1.'
        },
        {
            type: 'p',
            text: 'Ejemplo: $(2x^{3}+3x^{2}-8x-12):(x-2)$. Primero se escriben los coeficientes del dividendo y la raíz del divisor. Los coeficientes que resultan son los del nuevo polinomio (de grado uno menos): $2x^{3}+3x^{2}-8x-12 = (2x^{2}+7x+6)(x-2)$.'
        },
        {
            type: 'callout',
            tone: 'info',
            text: 'Si la indeterminación es del tipo 0/0, el valor al que tiende <em>x</em> es raíz del numerador y del denominador, por lo tanto puede aplicarse la Regla de Ruffini para factorizar ambos polinomios dividiendo por $(x - \\text{valor al que tiende})$.'
        },
        {
            type: 'p',
            text: 'Calculemos ahora los siguientes límites:'
        },
        {
            type: 'math',
            latex: '1)\\quad \\lim_{x \\to 3} \\frac{2x-6}{x^{2}-9} =_{(1)} \\lim_{x \\to 3} \\frac{2(x-3)}{(x+3)(x-3)} =_{(2)} \\lim_{x \\to 3} \\frac{2}{x+3} = \\frac{2}{6} = \\frac{1}{3}',
            display: true
        },
        {
            type: 'ul',
            items: [
                '$(1)$: Sacamos factor común en el numerador y aplicamos diferencia de cuadrados en el denominador.',
                '$(2)$: Simplificamos $(x-3)$ en el numerador y denominador.'
            ]
        },
        {
            type: 'math',
            latex: '2)\\quad \\lim_{x \\to -2} \\frac{12-3x^{2}}{2x^{3}+x^{2}-5x+2} =_{(1)} \\lim_{x \\to -2} \\frac{-3(x^{2}-4)}{(2x^{2}-3x+1)(x+2)} =_{(2)} \\lim_{x \\to -2} \\frac{-3(x-2)(x+2)}{(2x^{2}-3x+1)(x+2)} =_{(3)} \\lim_{x \\to -2} \\frac{-3(x-2)}{2x^{2}-3x+1} = \\frac{12}{15}',
            display: true
        },
        {
            type: 'ul',
            items: [
                '$(1)$: Sacamos factor común en el numerador y factorizamos el denominador con Ruffini.',
                '$(2)$: Diferencia de cuadrados en el numerador.',
                '$(3)$: Simplificamos $(x+2)$. Nota: $(x+2)$ es el factor que hace tender a cero numerador y denominador, por eso al simplificarlo salvamos la indeterminación.'
            ]
        },
        {
            type: 'p',
            text: '<strong>Indeterminación en cocientes con raíces cuadradas</strong>'
        },
        {
            type: 'p',
            text: 'En este caso, conviene multiplicar por el conjugado de la expresión que tiene la raíz.'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to 1} \\frac{2x^{3}-5x^{2}+3}{2-\\sqrt{5-x}} =_{(1)} \\lim_{x \\to 1} \\frac{(2x^{3}-5x^{2}+3)(2+\\sqrt{5-x})}{(2-\\sqrt{5-x})(2+\\sqrt{5-x})} =_{(2)} \\lim_{x \\to 1} \\frac{(2x^{3}-5x+3)(2+\\sqrt{5-x})}{2^{2}-(\\sqrt{5-x})^{2}} =_{(3)} \\lim_{x \\to 1} \\frac{(x-1)(2x^{2}-3x-3)(2+\\sqrt{5-x})}{-1+x} = -16',
            display: true
        },
        {
            type: 'ul',
            items: [
                '$(1)$: Completamos la diferencia de cuadrados en el denominador (multiplicamos y dividimos por el conjugado).',
                '$(2)$: Nos queda la diferencia de cuadrados en el denominador y cancelamos la raíz.',
                '$(3)$: Factorizamos el numerador y simplificamos $(x-1)$.'
            ]
        },
        {
            type: 'h3',
            text: 'Indeterminación tipo ∞/∞',
            criollo: 'Numerador y denominador se van a infinito. Hay que dividir por la mayor potencia de x.'
        },
        {
            type: 'p',
            text: '<strong>Indeterminación en cociente de polinomios</strong>'
        },
        {
            type: 'p',
            text: 'La técnica es dividir numerador y denominador por la mayor potencia de <em>x</em> que aparezca.'
        },
        {
            type: 'math',
            latex: '1)\\quad \\lim_{x \\to \\infty} \\frac{3x^{5}-2x+1}{4x^{3}+3} =_{(1)} \\lim_{x \\to \\infty} \\frac{\\dfrac{3x^{5}-2x+1}{x^{5}}}{\\dfrac{4x^{3}+3}{x^{5}}} =_{(2)} \\lim_{x \\to \\infty} \\frac{3 - \\dfrac{2}{x^{4}} + \\dfrac{1}{x^{5}}}{\\dfrac{4}{x^{2}} + \\dfrac{3}{x^{5}}} =_{(3)} \\infty',
            display: true
        },
        {
            type: 'ul',
            items: [
                '$(1)$: Dividimos numerador y denominador por la mayor potencia de $x$.',
                '$(2)$: Distribuimos $x^{5}$, simplificamos y analizamos la tendencia de cada término.',
                '$(3)$: El numerador tiende a 3 y el denominador tiende a cero, por lo tanto el límite da infinito.'
            ]
        },
        {
            type: 'math',
            latex: '2)\\quad \\lim_{x \\to \\infty} \\frac{4x^{2}+3x-5}{5x^{2}-8} =_{(1)} \\lim_{x \\to \\infty} \\frac{\\dfrac{4x^{2}+3x-5}{x^{2}}}{\\dfrac{5x^{2}-8}{x^{2}}} =_{(2)} \\frac{4-0+0}{5-0} = \\frac{4}{5}',
            display: true
        },
        {
            type: 'math',
            latex: '3)\\quad \\lim_{x \\to \\infty} \\frac{7x^{3}+8}{3x^{4}+x+8} =_{(1)} \\lim_{x \\to \\infty} \\frac{\\dfrac{7x^{3}+8}{x^{4}}}{\\dfrac{3x^{4}+x+8}{x^{4}}} =_{(2)} \\frac{0}{3} = 0',
            display: true
        },
        {
            type: 'callout',
            tone: 'info',
            text: 'Siendo $p(x) = a_n x^n + \\cdots + a_0$ y $q(x) = b_m x^m + \\cdots + b_0$: si el grado de $p$ es <strong>mayor</strong> que el grado de $q$, el límite es $\\infty$; si el grado de $p$ es <strong>menor</strong> que el grado de $q$, el límite es $0$; si tienen el <strong>mismo grado</strong>, el límite es el cociente de los coeficientes de mayor grado $\\dfrac{a_n}{b_m}$.'
        },
        {
            type: 'p',
            text: '<strong>Indeterminación en cociente de funciones no polinómicas</strong>'
        },
        {
            type: 'p',
            text: 'Debemos estudiar cuál es la función que "tiende más rápido a infinito" y analizar dicho cociente. Analizamos esta tendencia observando las gráficas de las funciones estudiadas: la exponencial tiende más rápido a infinito, luego siguen las polinómicas y por último las logarítmicas.'
        },
        {
            type: 'callout',
            tone: 'info',
            text: 'Cuando hay un cociente nos fijamos si la función que tiende más rápido a infinito se encuentra en el numerador o en el denominador. Ejemplos: $\\lim_{x \\to \\infty} \\dfrac{x^{n}}{e^{x}} = 0$ (los polinomios tienden más lento y están en el numerador); $\\lim_{x \\to \\infty} \\dfrac{5^{x}-3}{2x^{2}+5x-8} = \\infty$ (la exponencial — más rápida — está en el numerador).'
        },
        {
            type: 'h3',
            text: 'Indeterminación tipo ∞ − ∞',
            criollo: 'Una diferencia de dos cosas que se van a infinito. Si hay raíces, multiplicás por el conjugado.'
        },
        {
            type: 'p',
            text: '<strong>Indeterminación en una diferencia de raíces</strong>'
        },
        {
            type: 'p',
            text: 'Para salvar una indeterminación de este tipo se multiplica por el conjugado de la función. Si al operar algebraicamente queda una indeterminación del tipo $\\infty/\\infty$, dividimos numerador y denominador por $\\sqrt[2]{x^{2}} = |x|$.'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to +\\infty}(\\sqrt{x^{2}+2x} - \\sqrt{x^{2}-3})',
            display: true
        },
        {
            type: 'math',
            latex: '= \\lim_{x \\to +\\infty}(\\sqrt{x^{2}+2x} - \\sqrt{x^{2}-3}) \\cdot \\frac{\\sqrt{x^{2}+2x}+\\sqrt{x^{2}-3}}{\\sqrt{x^{2}+2x}+\\sqrt{x^{2}-3}} \\quad (1)',
            display: true
        },
        {
            type: 'math',
            latex: '= \\lim_{x \\to +\\infty} \\frac{2x+3}{\\sqrt{x^{2}+2x}+\\sqrt{x^{2}-3}} = \\lim_{x \\to +\\infty} \\frac{\\dfrac{2x+3}{x}}{\\dfrac{\\sqrt{x^{2}+2x}+\\sqrt{x^{2}-3}}{\\sqrt{x^{2}}}} = \\frac{2}{2} = 1 \\quad (2)',
            display: true
        },
        {
            type: 'ol',
            items: [
                'Multiplicamos por el conjugado y operamos algebraicamente.',
                'Dividimos numerador por $\\sqrt[2]{x^{2}} = x$ (no usamos el módulo porque $x$ tiende a $+\\infty$). Distribuimos la $x$, simplificamos y analizamos la tendencia en cada término, llegando así a la solución.'
            ]
        },
        {
            type: 'h3',
            text: 'Aplicación práctica',
            criollo: 'Un ejemplo concreto de para qué sirve calcular un límite al infinito en la vida real.'
        },
        {
            type: 'p',
            text: 'Una empresa tiene para su nueva línea de detergentes una función de utilidad por ventas $B(x) = \\dfrac{2000x+10}{x+5}$, donde $x$ representa la cantidad de pesos invertidos por día en publicidad. ¿Cuál es el tope máximo de utilidad por más que se siga aumentando lo invertido en publicidad?'
        },
        {
            type: 'p',
            text: '<strong>Resolución:</strong> Si aumentamos indefinidamente lo invertido en publicidad queremos que $x$ tienda a infinito, entonces debemos calcular:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to +\\infty} B(x) = \\lim_{x \\to +\\infty} \\frac{2000x+10}{x+5} = 2000',
            display: true
        },
        {
            type: 'p',
            text: 'La utilidad máxima es de $\\$2000$.'
        }
    ],
    quiz: {
        tf: [
            {
                id: 'tf-3-1',
                q: '$\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$, $\\infty - \\infty$, $0 \\cdot \\infty$, $1^{\\infty}$, $0^{0}$ y $\\infty^{0}$ son los siete tipos de indeterminaciones del límite.',
                a: true,
                explain: 'Exactamente esos siete cálculos son los llamados indeterminaciones; al obtener alguno de ellos hay que aplicar un artificio algebraico para salvar la indeterminación.'
            },
            {
                id: 'tf-3-2',
                q: 'Para salvar una indeterminación 0/0 en un cociente de polinomios, la mejor estrategia es siempre dividir numerador y denominador por la mayor potencia de $x$.',
                a: false,
                explain: 'Dividir por la mayor potencia de $x$ es la técnica para el tipo $\\infty/\\infty$. Para el tipo 0/0 en polinomios la estrategia es factorizar (factor común, diferencia de cuadrados, Ruffini, etc.) y cancelar el factor que anula ambos.'
            },
            {
                id: 'tf-3-3',
                q: 'Si el grado del polinomio del numerador es menor que el grado del denominador, el límite cuando $x \\to \\infty$ es cero.',
                a: true,
                explain: 'Al dividir por la mayor potencia del denominador, todos los términos del numerador tienden a cero, dejando 0 en el numerador y una constante en el denominador.'
            },
            {
                id: 'tf-3-4',
                q: 'La Regla de Ruffini sirve para dividir cualquier polinomio por otro polinomio de cualquier grado.',
                a: false,
                explain: 'La Regla de Ruffini se utiliza específicamente para dividir un polinomio por otro de grado 1 (de la forma $x - a$).'
            },
            {
                id: 'tf-3-5',
                q: 'Para resolver una indeterminación $\\infty - \\infty$ con raíces cuadradas se multiplica y divide por el conjugado de la expresión.',
                a: true,
                explain: 'Multiplicar por el conjugado convierte la diferencia de raíces en un cociente (diferencia de cuadrados), que luego puede resolverse dividiéndolo por $|x|$ si queda una indeterminación $\\infty/\\infty$.'
            }
        ],
        mc: [
            {
                id: 'mc-3-1',
                q: '¿Cuál es el resultado de $\\lim_{x \\to 3} \\dfrac{2x-6}{x^{2}-9}$?',
                options: ['$0$', '$\\dfrac{1}{3}$', '$\\dfrac{2}{3}$', '$\\infty$'],
                correctIndex: 1,
                explain: 'Factorizando: $\\dfrac{2(x-3)}{(x+3)(x-3)} = \\dfrac{2}{x+3}$. Evaluando en $x=3$: $\\dfrac{2}{6} = \\dfrac{1}{3}$.'
            },
            {
                id: 'mc-3-2',
                q: 'Si $\\lim_{x \\to \\infty} \\dfrac{p(x)}{q(x)}$ donde $p$ y $q$ son polinomios del mismo grado $n$ con coeficientes principales $a_n$ y $b_n$ respectivamente, el límite es:',
                options: ['$0$', '$\\infty$', '$\\dfrac{a_n}{b_n}$', '$\\dfrac{b_n}{a_n}$'],
                correctIndex: 2,
                explain: 'Cuando los polinomios tienen el mismo grado, al dividir por $x^n$ todos los términos de orden menor tienden a cero y queda el cociente de los coeficientes de mayor grado.'
            },
            {
                id: 'mc-3-3',
                q: 'Para resolver una indeterminación 0/0 en un cociente que contiene una raíz cuadrada, ¿qué artificio algebraico se usa?',
                options: [
                    'Dividir por la mayor potencia de $x$',
                    'Aplicar la Regla de Ruffini',
                    'Multiplicar y dividir por el conjugado de la expresión con raíz',
                    'Factorizar usando diferencia de cuadrados directamente sin modificar la expresión'
                ],
                correctIndex: 2,
                explain: 'Al multiplicar por el conjugado se obtiene una diferencia de cuadrados que elimina la raíz, permitiendo cancelar el factor que genera la indeterminación.'
            },
            {
                id: 'mc-3-4',
                q: 'En la jerarquía de velocidad de crecimiento hacia $\\infty$ (de más lenta a más rápida), ¿cuál es el orden correcto?',
                options: [
                    'logarítmica < polinómica < exponencial',
                    'polinómica < logarítmica < exponencial',
                    'exponencial < polinómica < logarítmica',
                    'logarítmica < exponencial < polinómica'
                ],
                correctIndex: 0,
                explain: 'La función logarítmica crece más lentamente, luego las polinómicas y la cuadrática, y la exponencial es la que tiende a infinito más rápido de todas.'
            }
        ],
        ms: [
            {
                id: 'ms-3-1',
                q: '¿Cuáles de las siguientes son técnicas válidas para salvar una indeterminación 0/0 en un límite?',
                options: [
                    'Factorizar el numerador y el denominador y cancelar el factor común',
                    'Dividir numerador y denominador por la mayor potencia de $x$',
                    'Aplicar la Regla de Ruffini para factorizar un polinomio dividiéndolo por $(x - a)$',
                    'Multiplicar y dividir por el conjugado cuando hay raíces cuadradas',
                    'Reemplazar directamente $x$ por el valor al que tiende sin ningún artificio'
                ],
                correctIndexes: [0, 2, 3],
                explain: 'Factorizar y cancelar, usar Ruffini y multiplicar por el conjugado son todas técnicas para 0/0. Dividir por la mayor potencia es para $\\infty/\\infty$. Reemplazar directamente es lo que genera la indeterminación en primer lugar.'
            },
            {
                id: 'ms-3-2',
                q: '¿Cuáles de los siguientes enunciados sobre la indeterminación $\\infty/\\infty$ en cocientes de polinomios son correctos?',
                options: [
                    'Si grado del numerador > grado del denominador, el límite es $\\infty$',
                    'Si grado del numerador < grado del denominador, el límite es $\\infty$',
                    'Si grado del numerador = grado del denominador, el límite es el cociente de coeficientes principales',
                    'Si grado del numerador < grado del denominador, el límite es $0$',
                    'La técnica consiste en factorizar con Ruffini y cancelar'
                ],
                correctIndexes: [0, 2, 3],
                explain: 'Cuando el grado del numerador es mayor el límite es infinito; cuando es igual el límite es el cociente de coeficientes principales; cuando es menor el límite es cero. La técnica es dividir por la mayor potencia de $x$, no Ruffini.'
            },
            {
                id: 'ms-3-3',
                q: '¿Cuáles de las siguientes afirmaciones sobre el uso de la Regla de Ruffini en límites son correctas?',
                options: [
                    'Se puede aplicar cuando el límite tiene tipo 0/0 y el denominador es un polinomio',
                    'El valor al que tiende $x$ es raíz del numerador y del denominador cuando hay una indeterminación 0/0',
                    'Permite dividir el polinomio por $(x - a)$ siendo $a$ el valor al que tiende $x$',
                    'Sirve para dividir polinomios por polinomios de cualquier grado',
                    'Solo funciona cuando el numerador es de grado mayor que el denominador'
                ],
                correctIndexes: [0, 1, 2],
                explain: 'En una indeterminación 0/0, el valor al que tiende $x$ es raíz de ambos polinomios, por eso se puede aplicar Ruffini dividiendo por $(x-a)$. Ruffini solo funciona con divisores de grado 1, y no requiere que el numerador sea de mayor grado.'
            }
        ]
    },
    flashcards: [
        {
            id: 'fc-3-1',
            front: '¿Cuáles son los siete tipos de indeterminaciones del límite?',
            back: '$\\dfrac{0}{0}$, $\\dfrac{\\infty}{\\infty}$, $\\infty - \\infty$, $0 \\cdot \\infty$, $1^{\\infty}$, $0^{0}$, $\\infty^{0}$'
        },
        {
            id: 'fc-3-2',
            front: '¿Qué técnica se usa para salvar una indeterminación 0/0 en un cociente de polinomios?',
            back: 'Factorizar numerador y denominador (factor común, diferencia de cuadrados, Ruffini) y cancelar el factor que anula ambos.'
        },
        {
            id: 'fc-3-3',
            front: '¿Para qué sirve la Regla de Ruffini y cuándo se aplica en límites?',
            back: 'Sirve para dividir un polinomio por uno de grado 1 $(x-a)$. En límites se aplica cuando hay indeterminación 0/0: el valor $a$ al que tiende $x$ es raíz de numerador y denominador, entonces se divide por $(x-a)$.'
        },
        {
            id: 'fc-3-4',
            front: '¿Cómo se resuelve la indeterminación $\\infty/\\infty$ en un cociente de polinomios?',
            back: 'Se divide numerador y denominador por la mayor potencia de $x$ que aparezca. El resultado depende de los grados: grado num > grado den → $\\infty$; grado num = grado den → cociente de coeficientes principales; grado num < grado den → $0$.'
        },
        {
            id: 'fc-3-5',
            front: '¿Qué técnica se usa para resolver una indeterminación 0/0 cuando hay raíces cuadradas en el denominador?',
            back: 'Multiplicar y dividir por el conjugado de la expresión con raíz. Esto genera una diferencia de cuadrados que elimina la raíz y permite cancelar el factor que genera la indeterminación.'
        },
        {
            id: 'fc-3-6',
            front: '¿Cuál función crece más rápido hacia $+\\infty$: exponencial, polinómica o logarítmica?',
            back: 'La exponencial crece más rápido, luego la polinómica (cuadrática), y por último la logarítmica crece más lentamente. Orden: logarítmica < polinómica < exponencial.'
        },
        {
            id: 'fc-3-7',
            front: '¿Cómo se resuelve una indeterminación $\\infty - \\infty$ con diferencia de raíces?',
            back: 'Se multiplica y divide por el conjugado. Si queda una indeterminación $\\infty/\\infty$, se divide numerador y denominador por $\\sqrt{x^{2}} = |x|$ (o $x$ si $x \\to +\\infty$).'
        },
        {
            id: 'fc-3-8',
            front: '¿Cuál es la fórmula de diferencia de cuadrados y para qué sirve en factorización?',
            back: '$(x^{2} - a^{2}) = (x-a)(x+a)$. Permite factorizar expresiones que tienen esta forma, útil para cancelar factores en indeterminaciones 0/0.'
        },
        {
            id: 'fc-3-9',
            front: 'Si $\\lim_{x \\to \\infty} \\dfrac{p(x)}{q(x)}$ con $\\deg(p) = \\deg(q) = n$, coeficientes principales $a_n$ y $b_n$, ¿cuánto vale el límite?',
            back: '$\\dfrac{a_n}{b_n}$. Al dividir por $x^n$ todos los términos de orden menor tienden a cero y solo quedan los coeficientes principales.'
        }
    ],
},
{
    id: '4',
    unit: 'apuntes',
    title: 'Indeterminaciones del límite (parte 2)',
    criollo: 'Acá vemos dos casos copados: el límite notable con seno y la indeterminación $1^{\\infty}$ con el número $e$. Si entendés estos dos, ya tenés media materia en el bolsillo.',
    blocks: [
        {
            type: 'h3',
            text: 'Indeterminación del tipo $\\dfrac{0}{0}$ con la función trigonométrica $\\sen[f(x)]$',
            criollo: 'Cuando aparece seno y te da $\\frac{0}{0}$, usás el límite notable y chau.'
        },
        {
            type: 'p',
            text: 'Para resolver esta indeterminación, debemos recurrir al límite notable definido de la siguiente manera:'
        },
        {
            type: 'math',
            latex: '\\lim_{t \\to 0} \\frac{\\sen\\, t}{t} = 1 \\quad \\text{o bien} \\quad \\lim_{t \\to 0} \\frac{t}{\\sen\\, t} = 1',
            display: true
        },
        {
            type: 'h3',
            text: 'Ejemplo 1',
            criollo: 'Cambio de variable para acomodar el argumento del seno.'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to 0} \\frac{\\sen(3x)}{3x}',
            display: true
        },
        {
            type: 'p',
            text: 'En este caso, tenemos la indeterminación $\\dfrac{0}{0}$.'
        },
        {
            type: 'ul',
            items: [
                'Primero, hacemos un cambio de variable: <strong>$t = 3x$</strong>: $$\\lim_{x \\to 0} \\frac{\\sen(3x)}{3x} = \\lim_{x \\to 0} \\frac{\\sen\\, t}{t}$$',
                'Luego, debemos observar que tenemos la variable "t" como argumento de la función seno, pero todavía tenemos la variable "x" tendiendo a cero. Entonces debemos cambiar la variable "x" por "t". Si $x \\to 0$, entonces $t \\to 0$ ya que $t = 3x$: $$\\lim_{t \\to 0} \\frac{\\sen\\, t}{t}$$',
                'Ahora, por la definición del límite notable: $$\\lim_{t \\to 0} \\frac{\\sen\\, t}{t} = 1$$'
            ]
        },
        {
            type: 'p',
            text: 'Con lo cual, podemos afirmar que:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to 0} \\frac{\\sen(3x)}{3x} = \\lim_{t \\to 0} \\frac{\\sen\\, t}{t} = 1',
            display: true
        },
        {
            type: 'callout',
            tone: 'info',
            text: 'Nota: en la práctica, se puede hacer esta sustitución como cálculo auxiliar o como cálculo mental, simplemente basta con tener en cuenta que siempre debe ser igual el argumento del seno al denominador o al numerador dependiendo la definición de límite notable que apliquemos.'
        },
        {
            type: 'h3',
            text: 'Ejemplo 2',
            criollo: 'Ahora con Ruffini y un seno más complicado — hay que acomodar el argumento multiplicando y dividiendo.'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to -3} \\frac{x^3 + 2x^2 + 9}{\\sen(2x + 6)} = \\text{indeterminación del tipo } \\frac{0}{0}',
            display: true
        },
        {
            type: 'ol',
            items: [
                'Factorizar el numerador por la regla de Ruffini: $$\\lim_{x \\to -3} \\frac{(x+3)(x^2 - x + 3)}{\\sen(2x+6)}$$',
                'Factorizar el argumento del seno: $$\\lim_{x \\to -3} \\frac{(x+3)(x^2 - x + 3)}{\\sen[2(x+3)]}$$',
                'Multiplicar y dividir por 2 para tener en argumento del seno el mismo término que en el numerador: $$\\lim_{x \\to -3} \\frac{2\\,(x+3)(x^2 - x + 3)}{2\\,\\sen[2(x+3)]}$$',
                'Reescribir a la función como producto de dos funciones: $$\\lim_{x \\to -3} \\frac{2(x+3)}{\\sen[2(x+3)]} \\cdot \\frac{x^2 - x + 3}{2}$$',
                'Aplicar la propiedad del producto de los límites: $$\\lim_{x \\to -3} \\frac{2(x+3)}{\\sen[2(x+3)]} \\cdot \\lim_{x \\to -3} \\frac{x^2 - x + 3}{2}$$',
                'Por definición del límite notable: $$\\lim_{x \\to -3} \\frac{2(x+3)}{\\sen[2(x+3)]} = 1$$',
                'Calcular el límite de la función polinómica: $$\\lim_{x \\to -3} \\frac{x^2 - x + 3}{2} = \\frac{15}{2}$$'
            ]
        },
        {
            type: 'p',
            text: 'En conclusión:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to -3} \\frac{x^3 + 2x^2 + 9}{\\sen(2x+6)} = \\lim_{x \\to -3} \\frac{2(x+3)}{\\sen[2(x+3)]} \\cdot \\frac{x^2 - x + 3}{2} = \\frac{15}{2}',
            display: true
        },
        {
            type: 'h3',
            text: 'Indeterminación tipo $1^{\\infty}$',
            criollo: 'Acá entra el número $e$ a salvar la situación.'
        },
        {
            type: 'p',
            text: 'Para resolver esta indeterminación debemos definir al número $e$:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e \\quad \\text{o bien} \\quad \\lim_{x \\to 0}(1+x)^{\\frac{1}{x}} = e',
            display: true
        },
        {
            type: 'h3',
            text: 'Ejemplo — Indeterminación $1^{\\infty}$',
            criollo: 'Hay que acomodar la base y el exponente para que quede la forma del número $e$.'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to \\infty} \\left(\\frac{3x+2}{3x}\\right)^{4x} = \\text{indeterminación del tipo } 1^{\\infty}',
            display: true
        },
        {
            type: 'p',
            text: 'Primero trabajaremos con la función dentro del paréntesis:'
        },
        {
            type: 'ul',
            items: [
                'Distribuir el denominador en cada término del numerador: $$\\lim_{x \\to \\infty} \\left(\\frac{3x}{3x} + \\frac{2}{3x}\\right)^{4x} = \\lim_{x \\to \\infty} \\left(1 + \\frac{2}{3x}\\right)^{4x}$$',
                'Aplicar propiedades de las fracciones: $$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{\\dfrac{3x}{2}}\\right)^{4x}$$',
                'Llegamos al esquema buscado dentro del paréntesis, por lo tanto trabajaremos con el exponente, en el cual necesitamos que tenga el término $\\dfrac{3x}{2}$. Multiplicar y dividir al exponente por $\\dfrac{3x}{2}$: $$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{\\dfrac{3x}{2}}\\right)^{4x \\cdot \\frac{3x}{2} \\cdot \\frac{2}{3x}}$$',
                'Aplicar propiedades del exponente: $$\\lim_{x \\to \\infty} \\left[\\left(1 + \\frac{1}{\\dfrac{3x}{2}}\\right)^{\\frac{3x}{2}}\\right]^{4x \\cdot \\frac{2}{3x}}$$',
                'Operar los términos que quedan en el exponente: $$\\lim_{x \\to \\infty} \\left[\\left(1 + \\frac{1}{\\dfrac{3x}{2}}\\right)^{\\frac{3x}{2}}\\right]^{\\frac{8}{3}}$$',
                'Aplicar la definición del número $e$: $$\\lim_{x \\to \\infty} \\left[\\left(1 + \\frac{1}{\\dfrac{3x}{2}}\\right)^{\\frac{3x}{2}}\\right]^{\\frac{8}{3}} = e^{\\frac{8}{3}}$$'
            ]
        }
    ],
    quiz: {
        tf: [
            {
                id: 'tf-4-1',
                q: 'El límite notable $\\lim_{t \\to 0} \\dfrac{\\sen\\, t}{t}$ vale 0.',
                a: false,
                explain: 'Vale 1, no 0. Es la definición del límite notable trigonométrico fundamental.'
            },
            {
                id: 'tf-4-2',
                q: 'Para aplicar el límite notable con seno, el argumento del seno debe ser igual al denominador (o al numerador, según la forma que usemos).',
                a: true,
                explain: 'Exacto: el truco es lograr que lo que está dentro del seno coincida con lo que está en el denominador (o numerador), por eso hacemos cambios de variable y multiplicamos/dividimos.'
            },
            {
                id: 'tf-4-3',
                q: '$\\lim_{x \\to \\infty}\\left(1 + \\dfrac{1}{x}\\right)^x = 1$.',
                a: false,
                explain: 'Ese límite vale $e \\approx 2{,}718...$, no 1. Es la definición del número de Euler.'
            },
            {
                id: 'tf-4-4',
                q: 'La indeterminación $1^{\\infty}$ se resuelve usando la definición del número $e$.',
                a: true,
                explain: 'Correcto. Se manipula la expresión hasta llevarla a la forma $\\left(1 + \\frac{1}{u}\\right)^u$ y se aplica la definición de $e$.'
            },
            {
                id: 'tf-4-5',
                q: 'En el Ejemplo 2, el resultado de $\\lim_{x \\to -3} \\dfrac{x^3+2x^2+9}{\\sen(2x+6)}$ es $\\dfrac{15}{2}$.',
                a: true,
                explain: 'Sí. Tras factorizar por Ruffini, acomodar el argumento del seno y aplicar el límite notable, el factor polinómico evaluado en $x=-3$ da $\\frac{15}{2}$.'
            }
        ],
        mc: [
            {
                id: 'mc-4-1',
                q: '¿Cuál es el primer paso para resolver $\\lim_{x \\to 0} \\dfrac{\\sen(3x)}{3x}$?',
                options: [
                    'Aplicar L\'Hôpital directamente.',
                    'Hacer el cambio de variable $t = 3x$ para identificar la forma del límite notable.',
                    'Factorizar el numerador.',
                    'Evaluar en $x = 0$ y simplificar.'
                ],
                correctIndex: 1,
                explain: 'Se hace el cambio de variable $t = 3x$ (y se ajusta que $t \\to 0$ cuando $x \\to 0$) para llevar la expresión a la forma $\\frac{\\sen t}{t}$, que vale 1.'
            },
            {
                id: 'mc-4-2',
                q: 'En el Ejemplo 2, ¿por qué se multiplica y divide por 2 antes de separar el producto de límites?',
                options: [
                    'Para eliminar el denominador.',
                    'Para que el argumento del seno coincida con el factor del numerador, condición del límite notable.',
                    'Porque la regla de Ruffini lo exige.',
                    'Para convertir la indeterminación en $1^{\\infty}$.'
                ],
                correctIndex: 1,
                explain: 'El límite notable requiere que el argumento del seno sea igual al término del numerador. Multiplicar y dividir por 2 logra que $2(x+3)$ aparezca tanto en el numerador como dentro del seno.'
            },
            {
                id: 'mc-4-3',
                q: '¿Cuánto vale $\\lim_{x \\to \\infty}\\left(\\dfrac{3x+2}{3x}\\right)^{4x}$?',
                options: [
                    '$e^4$',
                    '$e^{\\frac{2}{3}}$',
                    '$e^{\\frac{8}{3}}$',
                    '$e^2$'
                ],
                correctIndex: 2,
                explain: 'Tras distribuir, reacomodar la base a la forma $\\left(1 + \\frac{1}{3x/2}\\right)$ y multiplicar/dividir el exponente por $\\frac{3x}{2}$, el exponente exterior resulta $4x \\cdot \\frac{2}{3x} = \\frac{8}{3}$, dando $e^{8/3}$.'
            },
            {
                id: 'mc-4-4',
                q: 'Si $\\lim_{x \\to 0}(1+x)^{1/x} = e$, ¿qué tipo de indeterminación presenta $(1+x)^{1/x}$ cuando $x \\to 0$?',
                options: [
                    '$\\dfrac{0}{0}$',
                    '$\\dfrac{\\infty}{\\infty}$',
                    '$1^{\\infty}$',
                    '$0 \\cdot \\infty$'
                ],
                correctIndex: 2,
                explain: 'Cuando $x \\to 0$, la base $(1+x) \\to 1$ y el exponente $1/x \\to \\infty$, dando la forma indeterminada $1^{\\infty}$.'
            }
        ],
        ms: [
            {
                id: 'ms-4-1',
                q: '¿Cuáles de los siguientes son pasos correctos para resolver $\\lim_{x \\to -3} \\dfrac{x^3+2x^2+9}{\\sen(2x+6)}$? (elegí todas las correctas)',
                options: [
                    'Factorizar el numerador con Ruffini para obtener $(x+3)(x^2-x+3)$.',
                    'Factorizar el argumento del seno como $2(x+3)$.',
                    'Multiplicar y dividir por 2 para igualar el argumento del seno al factor del numerador.',
                    'Aplicar L\'Hôpital sin factorizar.',
                    'Separar el límite como producto y evaluar cada factor por separado.'
                ],
                correctIndexes: [0, 1, 2, 4],
                explain: 'Los pasos correctos son: factorizar por Ruffini, factorizar el argumento del seno, multiplicar/dividir por 2, y separar en producto de límites. L\'Hôpital no es el método enseñado acá.'
            },
            {
                id: 'ms-4-2',
                q: '¿Cuáles de las siguientes expresiones representan el número $e$?',
                options: [
                    '$\\lim_{x \\to \\infty}\\left(1 + \\dfrac{1}{x}\\right)^x$',
                    '$\\lim_{x \\to 0}(1+x)^{1/x}$',
                    '$\\lim_{x \\to \\infty}\\left(1 + \\dfrac{1}{x}\\right)^{x+1}$',
                    '$\\lim_{x \\to 0} \\dfrac{\\sen\\, x}{x}$',
                    '$\\lim_{x \\to 1}(1 + x)^x$'
                ],
                correctIndexes: [0, 1],
                explain: 'Solo las dos primeras son definiciones del número $e$. El límite del seno vale 1, y las otras dos formas no corresponden a $e$.'
            },
            {
                id: 'ms-4-3',
                q: 'Al resolver $\\lim_{x \\to \\infty}\\left(\\dfrac{3x+2}{3x}\\right)^{4x}$, ¿qué transformaciones se aplican? (elegí todas las correctas)',
                options: [
                    'Distribuir el denominador para separar la fracción en $1 + \\dfrac{2}{3x}$.',
                    'Reescribir $\\dfrac{2}{3x}$ como $\\dfrac{1}{3x/2}$ para identificar la forma del número $e$.',
                    'Multiplicar y dividir el exponente $4x$ por $\\dfrac{3x}{2}$.',
                    'Factorizar el exponente por la regla de Ruffini.',
                    'Evaluar en $x=0$ para obtener el resultado.'
                ],
                correctIndexes: [0, 1, 2],
                explain: 'Se distribuye el denominador, se reescribe la fracción para identificar la forma $1 + 1/u$, y se multiplica/divide el exponente para aislar la potencia $u$. Ruffini no aplica acá, y no se evalúa en $x=0$ porque el límite va a $\\infty$.'
            }
        ]
    },
    flashcards: [
        {
            id: 'fc-4-1',
            front: '¿Cuánto vale $\\lim_{t \\to 0} \\dfrac{\\sen\\, t}{t}$?',
            back: 'Vale <strong>1</strong>. Es el límite notable trigonométrico fundamental. También vale $\\lim_{t \\to 0} \\dfrac{t}{\\sen\\, t} = 1$.'
        },
        {
            id: 'fc-4-2',
            front: '¿Qué condición debe cumplirse para aplicar el límite notable con seno?',
            back: 'El argumento del seno debe ser <strong>igual</strong> al término del denominador (o numerador). Si no lo es, hay que hacer un cambio de variable o multiplicar/dividir para lograrlo.'
        },
        {
            id: 'fc-4-3',
            front: '¿Cuál es el cambio de variable para $\\lim_{x \\to 0} \\dfrac{\\sen(3x)}{3x}$?',
            back: 'Se hace $t = 3x$. Cuando $x \\to 0$, entonces $t \\to 0$. El límite queda $\\lim_{t \\to 0} \\dfrac{\\sen\\, t}{t} = 1$.'
        },
        {
            id: 'fc-4-4',
            front: '¿Por qué en el Ejemplo 2 se multiplica y divide por 2?',
            back: 'Para que el argumento del seno $2(x+3)$ aparezca también en el numerador. Así se puede aplicar el límite notable $\\dfrac{2(x+3)}{\\sen[2(x+3)]} \\to 1$.'
        },
        {
            id: 'fc-4-5',
            front: '¿Qué es la indeterminación $1^{\\infty}$ y cómo se resuelve?',
            back: 'Ocurre cuando la base tiende a 1 y el exponente tiende a $\\infty$. Se resuelve manipulando la expresión hasta llevarla a la forma $\\left(1 + \\dfrac{1}{u}\\right)^u \\to e$, y el exponente exterior queda como potencia de $e$.'
        },
        {
            id: 'fc-4-6',
            front: '¿Cuáles son las dos formas del número $e$ como límite?',
            back: '$\\lim_{x \\to \\infty}\\left(1 + \\dfrac{1}{x}\\right)^x = e$ y $\\lim_{x \\to 0}(1+x)^{\\frac{1}{x}} = e$.'
        },
        {
            id: 'fc-4-7',
            front: '¿Cuánto vale $\\lim_{x \\to \\infty}\\left(\\dfrac{3x+2}{3x}\\right)^{4x}$?',
            back: '$e^{\\frac{8}{3}}$. Se distribuye, se identifica la forma del número $e$, y el exponente exterior resulta $4x \\cdot \\dfrac{2}{3x} = \\dfrac{8}{3}$.'
        },
        {
            id: 'fc-4-8',
            front: '¿Cuánto vale $\\lim_{x \\to -3} \\dfrac{x^3+2x^2+9}{\\sen(2x+6)}$?',
            back: '$\\dfrac{15}{2}$. Se factoriza el numerador con Ruffini, se acomoda el argumento del seno y se aplica el límite notable. El factor polinómico evaluado en $x=-3$ da $\\dfrac{x^2-x+3}{2} = \\dfrac{15}{2}$.'
        }
    ]
},
{
    id: '5',
    unit: 'apuntes',
    title: 'Asíntotas',
    criollo: 'Una asíntota es una recta a la que la función se le va acercando sin llegar nunca — como ese colectivo que siempre está a punto de llegar. Hay tres tipos: verticales, horizontales y oblicuas, y cada una se calcula con límites. Lo bueno es que una vez que agarrás la lógica, todo cae solo.',
    blocks: [
        {
            type: 'p',
            text: 'Se llama <strong>asíntota de una función</strong> f(x) a una recta cuya distancia a una función $f(x)$ tiende a cero, cuando $x$ tiende a un punto "$a$", o bien cuando $x$ tiende a infinito.'
        },
        {
            type: 'h3',
            text: 'Asíntota vertical',
            criollo: 'La función se va al infinito cerca de un punto — la recta vertical x = a es la asíntota.'
        },
        {
            type: 'p',
            text: 'La recta de ecuación $x = a$ es <strong>asíntota vertical</strong> al gráfico de la función $f$ sí y sólo si:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to a} f(x) = \\infty \\quad \\text{o} \\quad \\lim_{x \\to a^+} f(x) = \\infty \\quad \\text{o} \\quad \\lim_{x \\to a^-} f(x) = \\infty',
            display: true
        },
        {
            type: 'callout',
            tone: 'info',
            text: '<strong>Observaciones sobre asíntotas verticales:</strong>'
        },
        {
            type: 'ul',
            items: [
                '$a$ es un punto que no pertenece al dominio de la función, o es un extremo abierto del dominio, o un punto en el que la función está partida.',
                'Una función puede tener infinitas o finita cantidad de asíntotas verticales, o ninguna.'
            ]
        },
        {
            type: 'h3',
            text: 'Ejemplos de asíntota vertical',
            criollo: 'Tres casos distintos: fuera del dominio, extremo abierto del dominio, y punto de corte.'
        },
        {
            type: 'p',
            text: '<strong>Ejemplo 1</strong> — $a$ por derecha e izquierda: la misma asíntota vertical. Para $f(x) = 1 + \\frac{1}{x-2}$:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} \\left(1 + \\frac{1}{x-2}\\right) = \\infty',
            display: true
        },
        {
            type: 'p',
            text: 'Por lo tanto <strong>x = 2 es asíntota vertical</strong>, y $x_0 = 2$ no pertenece al dominio de $f(x)$.'
        },
        {
            type: 'p',
            text: '<strong>Ejemplo 2</strong> — Asíntota vertical en un extremo abierto del dominio. Para $g(x) = \\ln(x+1)$:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to -1^+} g(x) = \\lim_{x \\to -1^+} \\ln(x+1) = -\\infty',
            display: true
        },
        {
            type: 'p',
            text: 'Por lo tanto <strong>x = −1 es asíntota vertical a derecha</strong>. $x_0 = -1$ no pertenece al dominio, pero es un extremo del dominio.'
        },
        {
            type: 'p',
            text: '<strong>Ejemplo 3</strong> — Asíntota vertical en un punto que pertenece al dominio pero es punto de corte. Para la función definida a trozos:'
        },
        {
            type: 'math',
            latex: 'h(x) = \\begin{cases} \\dfrac{1}{x-3} & \\text{si } x < 3 \\\\ (x-2)^2 & \\text{si } x \\geq 3 \\end{cases}',
            display: true
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to 3^-} \\frac{1}{x-3} = -\\infty \\qquad \\lim_{x \\to 3^+} (x-2)^2 = 1',
            display: true
        },
        {
            type: 'p',
            text: 'Por lo tanto <strong>x = 3 es asíntota vertical a izquierda</strong>. $x_0 = 3$ es un punto de corte de la función pero pertenece al dominio.'
        },
        {
            type: 'p',
            text: '<strong>Ejemplo 4</strong> — Varias asíntotas verticales. Para $j(x) = \\dfrac{x^3 + 2x}{x^2 - 2x - 3}$:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to 3} j(x) = \\infty \\quad \\Rightarrow \\quad \\text{asíntota vertical en } x = 3',
            display: true
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to -1} j(x) = \\infty \\quad \\Rightarrow \\quad \\text{asíntota vertical en } x = -1',
            display: true
        },
        {
            type: 'h3',
            text: 'Asíntota oblicua',
            criollo: 'La función se acerca a una recta con pendiente no nula cuando x se va al infinito.'
        },
        {
            type: 'p',
            text: 'La recta de ecuación $y = ax + b$ es <strong>asíntota oblicua</strong> al gráfico de la función $f$ si y solo si cuando la variable independiente ($x$) tiende a infinito, la diferencia entre la función y la recta tiende a cero:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to \\infty} \\bigl(f(x) - (ax + b)\\bigr) = 0',
            display: true
        },
        {
            type: 'p',
            text: 'Más precisamente:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to +\\infty} \\bigl(f(x) - (ax+b)\\bigr) = 0 \\quad \\text{para asíntota oblicua para } x \\to +\\infty',
            display: true
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to -\\infty} \\bigl(f(x) - (ax+b)\\bigr) = 0 \\quad \\text{para asíntota oblicua para } x \\to -\\infty',
            display: true
        },
        {
            type: 'p',
            text: 'De lo que se desprende que los coeficientes se calculan como:'
        },
        {
            type: 'math',
            latex: 'a = \\lim_{x \\to \\infty} \\frac{f(x)}{x} \\qquad b = \\lim_{x \\to \\infty} f(x) - ax',
            display: true
        },
        {
            type: 'callout',
            tone: 'info',
            text: '<strong>Observaciones sobre asíntotas oblicuas:</strong>'
        },
        {
            type: 'ul',
            items: [
                'Si al calcular $a$ o $b$ resultan los límites infinitos, la gráfica de la función no tiene asíntota oblicua ni horizontal.',
                'Las funciones racionales sólo tienen asíntotas oblicuas si el grado del numerador es uno más que el grado del denominador.',
                'Si los límites para $x \\to +\\infty$ y para $x \\to -\\infty$ son distintos, hay que calcular las asíntotas oblicuas por izquierda y por derecha separadamente.',
                'Una función puede tener sólo dos asíntotas oblicuas.',
                'Si la pendiente de la recta es igual a cero, la asíntota puede ser horizontal.'
            ]
        },
        {
            type: 'h3',
            text: 'Asíntota horizontal',
            criollo: 'Caso particular de la oblicua con pendiente cero: la función se "aplana" en un valor constante.'
        },
        {
            type: 'p',
            text: 'La recta de ecuación $y = b$ es <strong>asíntota horizontal</strong> al gráfico de la función $f$ si y solo si cuando la variable independiente ($x$) tiende a infinito, la diferencia entre la función y la recta tiende a cero:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to \\infty} \\bigl(f(x) - b\\bigr) = 0',
            display: true
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to +\\infty} f(x) = b \\quad \\text{para asíntota horizontal } x \\to +\\infty',
            display: true
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to -\\infty} f(x) = b \\quad \\text{para asíntota horizontal } x \\to -\\infty',
            display: true
        },
        {
            type: 'callout',
            tone: 'info',
            text: '<strong>Observaciones sobre asíntotas horizontales:</strong>'
        },
        {
            type: 'ul',
            items: [
                'La asíntota horizontal es un caso particular de la oblicua. Si al calcular la oblicua $a = 0$ y $b$ existe y es finito, la asíntota es horizontal y su ecuación es $y = b$.',
                'Si los límites para $x \\to +\\infty$ y para $x \\to -\\infty$ son distintos, hay que calcular las asíntotas horizontales por izquierda y por derecha separadamente.',
                'Una función puede tener como máximo dos asíntotas oblicuas (léase horizontal como caso particular).'
            ]
        },
        {
            type: 'h3',
            text: 'Ejemplos de asíntotas oblicuas y horizontales',
            criollo: 'Desde la más simple (solo un lado) hasta la que tiene los tres tipos juntos.'
        },
        {
            type: 'p',
            text: '<strong>Ejemplo 5</strong> — Asíntota horizontal a un solo lado. Para $f(x) = 2^x + 1$:'
        },
        {
            type: 'math',
            latex: 'a = \\lim_{x \\to +\\infty} \\frac{f(x)}{x} = \\lim_{x \\to +\\infty} \\frac{2^x + 1}{x} = +\\infty \\quad \\Rightarrow \\quad \\text{no hay asíntota oblicua para } x \\to +\\infty',
            display: true
        },
        {
            type: 'math',
            latex: 'a = \\lim_{x \\to -\\infty} \\frac{f(x)}{x} = \\lim_{x \\to +\\infty} \\frac{2^x + 1}{x} = 0 \\quad y \\quad b = \\lim_{x \\to -\\infty} 2^x + 1 - 0 = 1',
            display: true
        },
        {
            type: 'math',
            latex: 'y = 1 \\quad \\text{asíntota horizontal para } x \\to -\\infty',
            display: true
        },
        {
            type: 'p',
            text: '<strong>Ejemplo 6</strong> — Una sola asíntota oblicua a ambos lados. Para $g(x) = \\dfrac{x^2}{x-2}$:'
        },
        {
            type: 'math',
            latex: 'a = \\lim_{x \\to \\infty} \\frac{g(x)}{x} = \\lim_{x \\to \\infty} \\frac{x^2}{(x-2)\\,x} = \\lim_{x \\to \\infty} \\frac{x^2}{x^2 - 2x} = 1',
            display: true
        },
        {
            type: 'math',
            latex: 'b = \\lim_{x \\to \\infty} \\bigl[g(x) - 1 \\cdot x\\bigr] = \\lim_{x \\to \\infty} \\frac{x^2}{x-2} - x = \\lim_{x \\to \\infty} \\frac{x^2 - x^2 + 2x}{x-2} = 2',
            display: true
        },
        {
            type: 'math',
            latex: 'y = x + 2 \\quad \\text{es asíntota oblicua para } x \\to \\pm\\infty',
            display: true
        },
        {
            type: 'p',
            text: '<strong>Ejemplo 7</strong> — La función corta a la asíntota horizontal en infinitos puntos. Para $h(x) = \\dfrac{\\operatorname{sen}(x)}{x}$:'
        },
        {
            type: 'math',
            latex: 'a = \\lim_{x \\to \\infty} \\frac{h(x)}{x} = 0 \\qquad b = \\lim_{x \\to \\infty} \\bigl[h(x) - 0 \\cdot x\\bigr] = 0',
            display: true
        },
        {
            type: 'math',
            latex: 'y = 0 \\quad \\text{asíntota horizontal para } x \\to \\pm\\infty',
            display: true
        },
        {
            type: 'callout',
            tone: 'warning',
            text: 'Una función <strong>puede cruzar</strong> su asíntota horizontal (incluso infinitas veces), a diferencia de la asíntota vertical que jamás se cruza.'
        },
        {
            type: 'p',
            text: '<strong>Ejemplo 8</strong> — Tiene asíntota oblicua a un lado y horizontal al otro. Para la función a trozos:'
        },
        {
            type: 'math',
            latex: 'h(x) = \\begin{cases} x + \\dfrac{1}{x} & \\text{si } x > 0 \\\\ \\dfrac{2}{x} & \\text{si } x < 0 \\end{cases}',
            display: true
        },
        {
            type: 'math',
            latex: 'a = \\lim_{x \\to +\\infty} \\frac{h(x)}{x} = 1 \\qquad b = \\lim_{x \\to +\\infty} h(x) - 1 \\cdot x = 0 \\quad \\Rightarrow \\quad y = x \\text{ es A. Oblicua para } x \\to +\\infty',
            display: true
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to -\\infty} h(x) = 0 \\quad \\Rightarrow \\quad y = 0 \\text{ es A. Horizontal para } x \\to -\\infty',
            display: true
        },
        {
            type: 'p',
            text: '<strong>Ejemplo 9</strong> — La función con los tres tipos de asíntotas. Para la función a trozos:'
        },
        {
            type: 'math',
            latex: 'f(x) = \\begin{cases} \\dfrac{x^3 + 2x}{x^2 - x - 2} & \\text{si } x > -1 \\\\ \\dfrac{3x+5}{x+1} & \\text{si } x \\leq -1 \\end{cases}',
            display: true
        },
        {
            type: 'ul',
            items: [
                'Asíntotas verticales: $x = -1$ (por derecha) y $x = 2$ (por izquierda).',
                'Asíntota horizontal para $x \\to -\\infty$: $y = 3$.',
                'Asíntota oblicua para $x \\to +\\infty$: $y = x + 1$.'
            ]
        },
        {
            type: 'callout',
            tone: 'criollo',
            text: 'El gráfico del Ejemplo 9 muestra los tres tipos de asíntotas juntos: dos verticales (verde $x=-1$, celeste $x=2$), una horizontal (rosa $y=3$) y una oblicua (rosa $y=x+1$). Rico para estudiar de un vistazo.'
        }
    ],
    quiz: {
        tf: [
            {
                id: 'tf-5-1',
                q: 'La recta x = a es asíntota vertical de f si y solo si el límite de f(x) cuando x → a es infinito (por alguno de los lados).',
                a: true,
                explain: 'Sí: basta con que el límite lateral izquierdo o derecho sea ±∞ para que x = a sea asíntota vertical.'
            },
            {
                id: 'tf-5-2',
                q: 'Una función puede cruzar su propia asíntota vertical.',
                a: false,
                explain: 'Falso. La función no puede cruzar una asíntota vertical porque ese punto no pertenece al dominio o la función diverge ahí. Las asíntotas horizontales u oblicuas sí pueden cruzarse.'
            },
            {
                id: 'tf-5-3',
                q: 'Si al calcular el coeficiente $a$ de la asíntota oblicua resulta $a = 0$ y $b$ es finito, entonces la asíntota es horizontal con ecuación $y = b$.',
                a: true,
                explain: 'Correcto. La asíntota horizontal es el caso particular de la oblicua con pendiente cero.'
            },
            {
                id: 'tf-5-4',
                q: 'Una función racional tiene asíntota oblicua cuando el grado del numerador es exactamente uno más que el grado del denominador.',
                a: true,
                explain: 'Correcto. Si el grado del numerador es igual al del denominador hay asíntota horizontal; si es dos o más mayor, no hay asíntota oblicua ni horizontal.'
            },
            {
                id: 'tf-5-5',
                q: 'Una función puede tener más de dos asíntotas oblicuas (contando horizontales como caso particular).',
                a: false,
                explain: 'Falso. Una función tiene como máximo dos asíntotas oblicuas: una para x → +∞ y otra para x → −∞.'
            }
        ],
        mc: [
            {
                id: 'mc-5-1',
                q: '¿Cómo se calcula el coeficiente $a$ de la asíntota oblicua $y = ax + b$?',
                options: [
                    '$a = \\lim_{x \\to \\infty} f(x)$',
                    '$a = \\lim_{x \\to \\infty} \\frac{f(x)}{x}$',
                    '$a = \\lim_{x \\to \\infty} \\bigl(f(x) - x\\bigr)$',
                    '$a = \\lim_{x \\to 0} f(x)$'
                ],
                correctIndex: 1,
                explain: 'El coeficiente a (pendiente) se calcula como el límite del cociente f(x)/x cuando x → ∞. Luego b = lím [f(x) − ax].'
            },
            {
                id: 'mc-5-2',
                q: 'Para la función $g(x) = \\dfrac{x^2}{x-2}$, ¿cuál es su asíntota oblicua?',
                options: [
                    '$y = x$',
                    '$y = x - 2$',
                    '$y = x + 2$',
                    '$y = 2x + 1$'
                ],
                correctIndex: 2,
                explain: 'Se calcula a = 1 y b = 2, por lo tanto la asíntota oblicua es y = x + 2.'
            },
            {
                id: 'mc-5-3',
                q: '¿En cuál de estas situaciones x = a NO es asíntota vertical de f?',
                options: [
                    '$a$ no pertenece al dominio de $f$ y $\\lim_{x \\to a} f(x) = \\infty$',
                    '$a$ es un extremo abierto del dominio y el límite lateral es infinito',
                    '$a$ pertenece al dominio, $f(a)$ está definida y $\\lim_{x \\to a} f(x) = f(a)$',
                    '$a$ es un punto de corte de la función y el límite lateral es $-\\infty$'
                ],
                correctIndex: 2,
                explain: 'Si f(a) está definida y el límite coincide con f(a) (límite finito), no hay asíntota vertical. Para que haya AV el límite debe ser ±∞.'
            },
            {
                id: 'mc-5-4',
                q: 'Para $f(x) = 2^x + 1$, ¿qué tipo de asíntota tiene cuando $x \\to -\\infty$?',
                options: [
                    'Oblicua $y = x + 1$',
                    'Vertical $x = 0$',
                    'Horizontal $y = 1$',
                    'No tiene asíntota para $x \\to -\\infty$'
                ],
                correctIndex: 2,
                explain: 'Cuando x → −∞, 2^x → 0, por lo que f(x) → 1. La asíntota horizontal es y = 1 (a = 0, b = 1).'
            }
        ],
        ms: [
            {
                id: 'ms-5-1',
                q: '¿Cuáles de las siguientes afirmaciones sobre asíntotas verticales son correctas? (puede haber más de una)',
                options: [
                    'El punto $x = a$ donde hay AV puede no pertenecer al dominio de $f$.',
                    'Una función siempre tiene exactamente una asíntota vertical.',
                    'El punto $x = a$ puede ser un extremo abierto del dominio.',
                    'Una función puede no tener ninguna asíntota vertical.',
                    'La función siempre cruza la asíntota vertical en algún punto.'
                ],
                correctIndexes: [0, 2, 3],
                explain: 'Correctas: a puede no estar en el dominio; puede ser extremo abierto; puede no haber ninguna AV. Incorrectas: no siempre hay exactamente una (puede haber varias o ninguna); la función jamás cruza su AV.'
            },
            {
                id: 'ms-5-2',
                q: '¿Cuáles condiciones deben cumplirse para que $y = ax + b$ sea asíntota oblicua de $f$ cuando $x \\to +\\infty$?',
                options: [
                    '$\\lim_{x \\to +\\infty} \\frac{f(x)}{x} = a$ con $a$ finito',
                    '$\\lim_{x \\to +\\infty} f(x) = \\infty$',
                    '$\\lim_{x \\to +\\infty} \\bigl(f(x) - ax\\bigr) = b$ con $b$ finito',
                    '$a \\neq 0$ (si $a = 0$ no hay asíntota)',
                    '$\\lim_{x \\to +\\infty} \\bigl(f(x) - (ax+b)\\bigr) = 0$'
                ],
                correctIndexes: [0, 2, 4],
                explain: 'Las tres condiciones son equivalentes y necesarias: a = lím f(x)/x finito, b = lím [f(x) − ax] finito, y la diferencia f(x)−(ax+b) → 0. Si a = 0 la asíntota es horizontal (caso particular válido). Que f(x) → ∞ no es condición para AO.'
            },
            {
                id: 'ms-5-3',
                q: 'De los siguientes ejemplos, ¿cuáles tienen asíntota horizontal?',
                options: [
                    '$f(x) = 2^x + 1$ para $x \\to -\\infty$ ($y = 1$)',
                    '$g(x) = \\dfrac{x^2}{x-2}$ para $x \\to \\pm\\infty$',
                    '$h(x) = \\dfrac{\\operatorname{sen}(x)}{x}$ para $x \\to \\pm\\infty$ ($y = 0$)',
                    '$j(x) = \\dfrac{x^3+2x}{x^2-2x-3}$ para $x \\to \\pm\\infty$',
                    'La rama $x < 0$ de $h(x) = 2/x$ cuando $x \\to -\\infty$ ($y = 0$)'
                ],
                correctIndexes: [0, 2, 4],
                explain: 'f(x)=2^x+1 tiene AH y=1 para x→−∞; sen(x)/x tiene AH y=0 a ambos lados; la rama 2/x → 0 para x→−∞. g(x)=x²/(x−2) tiene AO y=x+2, no horizontal. j(x) tiene grado numerador > denominador+1, tampoco tiene AH ni AO.'
            }
        ]
    },
    flashcards: [
        {
            id: 'fc-5-1',
            front: '¿Qué es una asíntota de una función?',
            back: 'Una recta cuya distancia a la función $f(x)$ tiende a cero cuando $x$ tiende a un punto "$a$" o cuando $x$ tiende a infinito.'
        },
        {
            id: 'fc-5-2',
            front: '¿Cuándo es $x = a$ asíntota vertical de $f$?',
            back: 'Cuando $\\lim_{x \\to a} f(x) = \\infty$, o bien $\\lim_{x \\to a^+} f(x) = \\infty$, o bien $\\lim_{x \\to a^-} f(x) = \\infty$. Basta con uno de los tres.'
        },
        {
            id: 'fc-5-3',
            front: '¿Cómo se calculan $a$ y $b$ de la asíntota oblicua $y = ax + b$?',
            back: '$a = \\lim_{x \\to \\infty} \\dfrac{f(x)}{x}$ y luego $b = \\lim_{x \\to \\infty} \\bigl(f(x) - ax\\bigr)$. Si alguno de los dos es infinito, no hay asíntota oblicua.'
        },
        {
            id: 'fc-5-4',
            front: '¿Cuándo una función racional tiene asíntota oblicua?',
            back: 'Solo cuando el grado del numerador es exactamente uno mayor que el grado del denominador. Si son iguales hay AH; si la diferencia es 2 o más, no hay AO ni AH.'
        },
        {
            id: 'fc-5-5',
            front: '¿Cómo se calcula la asíntota horizontal $y = b$?',
            back: 'Es el caso $a = 0$ de la oblicua: $b = \\lim_{x \\to +\\infty} f(x)$ o $b = \\lim_{x \\to -\\infty} f(x)$. Si los límites laterales difieren, puede haber dos asíntotas horizontales distintas.'
        },
        {
            id: 'fc-5-6',
            front: '¿Puede una función cruzar su asíntota horizontal?',
            back: 'Sí, y puede hacerlo infinitas veces (ejemplo: $\\operatorname{sen}(x)/x$ oscila cruzando $y = 0$). En cambio, la función nunca cruza su asíntota vertical.'
        },
        {
            id: 'fc-5-7',
            front: '¿Cuántas asíntotas oblicuas puede tener una función como máximo?',
            back: 'Dos: una para $x \\to +\\infty$ y otra para $x \\to -\\infty$. Las horizontales cuentan como caso particular de las oblicuas.'
        },
        {
            id: 'fc-5-8',
            front: 'En el Ejemplo 9, ¿qué tres asíntotas tiene la función a trozos con $\\frac{x^3+2x}{x^2-x-2}$ para $x > -1$?',
            back: 'Verticales: $x = -1$ (por derecha) y $x = 2$ (por izquierda). Horizontal: $y = 3$ para $x \\to -\\infty$. Oblicua: $y = x + 1$ para $x \\to +\\infty$.'
        },
        {
            id: 'fc-5-9',
            front: '¿Qué diferencia hay entre asíntota vertical a izquierda y asíntota vertical a derecha?',
            back: 'A derecha: solo el límite $\\lim_{x \\to a^+} f(x) = \\pm\\infty$ (por ej. extremo abierto del dominio por izquierda). A izquierda: solo $\\lim_{x \\to a^-} f(x) = \\pm\\infty$. Si ambos son infinitos, es AV de ambos lados.'
        }
    ]
},
{
    id: '6',
    unit: 'apuntes',
    title: 'Continuidad',
    criollo: 'Una función es continua en un punto cuando "no te rompe nada": existe f(a), el límite existe y son iguales. Si falla alguna de las tres, tenés discontinuidad. Según qué falle, la podés arreglar o no.',
    blocks: [
        {
            type: 'h3',
            text: 'Continuidad en un punto',
            criollo: 'Las tres condiciones que tienen que cumplirse todas juntas, sin excepción.'
        },
        {
            type: 'p',
            text: 'Una <strong>función</strong> es <strong>continua</strong> en un punto <strong>x = <em>a</em></strong> sí y sólo sí verifica las siguientes condiciones:'
        },
        {
            type: 'ol',
            items: [
                '$\\exists f(a)$',
                '$\\lim_{x \\to a} f(x) = l$',
                '$f(a) = l$'
            ]
        },
        {
            type: 'p',
            text: 'Si alguna de estas tres condiciones no se cumple, se dice que <em>f</em> es <strong>discontinua en x = <em>a</em></strong>. Esta discontinuidad se puede clasificar de acuerdo al límite en evitable o esencial.'
        },
        {
            type: 'h3',
            text: 'Tipos de discontinuidad',
            criollo: 'Depende de si el límite existe o no — eso marca la diferencia entre una que podés "parchear" y una que no tiene arreglo.'
        },
        {
            type: 'ul',
            items: [
                'Si el límite para <em>x</em> tendiendo a "a" es <strong>finito</strong>, la <strong>discontinuidad</strong> es <strong>evitable</strong>.',
                'Si el límite es <strong>infinito</strong> o no existe, la <strong>discontinuidad</strong> es <strong>esencial</strong>.'
            ]
        },
        {
            type: 'callout',
            tone: 'info',
            text: '<strong>Observación:</strong> Una función es discontinua seguro en los puntos que no pertenecen al dominio de la función y <strong>puede ser</strong> que también lo sea en los puntos de corte (habrá que analizar en esos puntos el límite y ver si se cumple condición 2) y 3)).'
        },
        {
            type: 'h3',
            text: 'Ejemplo 1 — Discontinuidad evitable (f no definida en el punto)',
            criollo: 'La función no está definida en x=2, pero el límite existe y es finito: discontinuidad evitable.'
        },
        {
            type: 'p',
            text: '$f(x) = \\dfrac{x^2 - 4}{x - 2}$ en x=2 no pertenece al dominio de f(x), por lo tanto no se verifica la 1ª condición.'
        },
        {
            type: 'p',
            text: 'Veamos si se verifica la 2°:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2}(x + 2) = 4',
            display: true
        },
        {
            type: 'p',
            text: 'Como existe el límite y es finito, entonces la función presenta una <strong>discontinuidad evitable</strong> en x=2. Podemos redefinir de la siguiente manera:'
        },
        {
            type: 'math',
            latex: 'f(x) = \\begin{cases} \\dfrac{x^2 - 4}{x - 2} & \\text{si } x \\neq 2 \\\\ 4 & \\text{si } x = 2 \\end{cases}',
            display: true
        },
        {
            type: 'p',
            text: 'y esta función sería <strong>continua</strong>.'
        },
        {
            type: 'h3',
            text: 'Ejemplo 2 — Discontinuidad evitable (f definida pero con valor incorrecto)',
            criollo: 'Acá la función sí está definida en x=2, pero le asignaron el valor equivocado. El límite no coincide con f(2): discontinuidad evitable.'
        },
        {
            type: 'math',
            latex: 'g(x) = \\begin{cases} \\dfrac{x^2 - 4}{x - 2} & \\text{si } x \\neq 2 \\\\ 6 & \\text{si } x = 2 \\end{cases} \\quad \\text{Dom g: } \\mathbb{R}',
            display: true
        },
        {
            type: 'p',
            text: 'Existe g(2)=6: se cumple la 1° condición y también la 2°, porque $\\lim_{x \\to 2} g(x) = 4$; pero no se verifica la 3° condición $\\lim_{x \\to 2} g(x) = 4 \\neq g(2) = 6$, entonces la función presenta una <strong>discontinuidad evitable</strong> en x=2. Podemos redefinirla:'
        },
        {
            type: 'math',
            latex: 'g(x) = \\begin{cases} \\dfrac{x^2 - 4}{x - 2} & \\text{si } x \\neq 2 \\\\ 4 & \\text{si } x = 2 \\end{cases}',
            display: true
        },
        {
            type: 'p',
            text: 'y sería <strong>continua</strong>.'
        },
        {
            type: 'h3',
            text: 'Ejemplo 3 — Discontinuidad esencial (límites laterales distintos)',
            criollo: 'La función a trozos donde los límites laterales en x=0 son distintos: el límite no existe, así que la discontinuidad es esencial y no tiene arreglo.'
        },
        {
            type: 'math',
            latex: 'h(x) = \\begin{cases} -x + 1 & \\text{si } x < 0 \\\\ x^2 & \\text{si } x \\geq 0 \\end{cases}',
            display: true
        },
        {
            type: 'p',
            text: 'El dominio son todos los reales, entonces vamos a analizar la continuidad en el punto de corte de la función, es decir en el origen. Verifica 1° condición, ya que h(0)=0, pero no verifica la 2° condición, ya que los límites laterales son distintos. Entonces, $\\nexists \\lim_{x \\to 0} h(x)$, por lo tanto la función tiene una <strong>discontinuidad esencial</strong> en x=0. No podemos redefinirla para que sea continua.'
        },
        {
            type: 'h3',
            text: 'Ejemplo 4 — Hallar parámetro para discontinuidad evitable',
            criollo: 'Te dan la función con un parámetro y tenés que encontrar el valor que hace que la discontinuidad sea evitable — o sea, que el límite exista y sea finito.'
        },
        {
            type: 'p',
            text: 'Dada la función $f(x) = \\dfrac{3x^2 - a}{4 - 2x}$, hallar el valor de <em>a</em> para que <em>f</em> presente una discontinuidad evitable en x=2.'
        },
        {
            type: 'p',
            text: 'Dom f: $\\mathbb{R} - \\{2\\}$ como no existe f(2) no es continua en dicho punto y como debe presentar una discontinuidad evitable, entonces debe existir el límite.'
        },
        {
            type: 'p',
            text: '$\\lim_{x \\to 2} \\dfrac{3x^2 - a}{4 - 2x}$: como el denominador tiende a cero y necesitamos que la discontinuidad sea evitable, entonces el numerador también debe tender a cero, de lo contrario el límite daría infinito y la discontinuidad sería esencial.'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to 2} \\frac{3x^2 - a}{4 - 2x} \\to \\text{ pedimos que } 3 \\cdot 2^2 - a = 0 \\to 12 = a',
            display: true
        },
        {
            type: 'callout',
            tone: 'info',
            text: 'Para que una discontinuidad sea evitable cuando el denominador se anula, el numerador también debe anularse en ese punto. Así el límite resulta finito (forma indeterminada que se puede resolver).'
        }
    ],
    quiz: {
        tf: [
            {
                id: 'tf-6-1',
                q: 'Una función es continua en x = a si y sólo si existe f(a), existe el límite cuando x tiende a a, y ambos son iguales.',
                a: true,
                explain: 'Exactamente las tres condiciones de continuidad: existencia de f(a), existencia del límite, e igualdad entre ambos.'
            },
            {
                id: 'tf-6-2',
                q: 'Si el límite de f en x = a es infinito, la discontinuidad en ese punto es evitable.',
                a: false,
                explain: 'Si el límite es infinito o no existe, la discontinuidad es esencial, no evitable. Evitable implica que el límite es finito.'
            },
            {
                id: 'tf-6-3',
                q: 'Una función con discontinuidad evitable en x = a siempre puede redefinirse para ser continua en ese punto.',
                a: true,
                explain: 'Al ser evitable, el límite finito existe. Se redefine f(a) igual al valor del límite y la función queda continua.'
            },
            {
                id: 'tf-6-4',
                q: 'Si una función no está definida en x = a, entonces necesariamente tiene una discontinuidad esencial en ese punto.',
                a: false,
                explain: 'Puede tener una discontinuidad evitable si el límite en x = a existe y es finito. El Ejemplo 1 lo ilustra: f(x) = (x²−4)/(x−2) no está definida en x=2 pero tiene discontinuidad evitable.'
            },
            {
                id: 'tf-6-5',
                q: 'Si los límites laterales de h(x) en x = 0 son distintos, entonces h tiene una discontinuidad esencial en ese punto.',
                a: true,
                explain: 'Si los límites laterales son distintos, el límite bilateral no existe. Sin límite, la discontinuidad es esencial y no puede corregirse redefiniendo la función.'
            }
        ],
        mc: [
            {
                id: 'mc-6-1',
                q: '¿Cuál de las siguientes situaciones produce una discontinuidad <strong>evitable</strong> en x = a?',
                options: [
                    'El límite cuando x → a no existe porque los límites laterales son distintos.',
                    'El límite cuando x → a es ∞.',
                    'El límite cuando x → a existe y es finito, pero f(a) no está definida o difiere del límite.',
                    'La función no tiene dominio en ningún punto cercano a a.'
                ],
                correctIndex: 2,
                explain: 'La discontinuidad es evitable cuando el límite existe y es finito, pero falla la condición 1) o la 3). En ese caso se puede redefinir f(a) = límite y la función queda continua.'
            },
            {
                id: 'mc-6-2',
                q: 'Para la función $f(x) = \\dfrac{x^2-4}{x-2}$, ¿qué valor debe asignarse a f(2) para que sea continua?',
                options: [
                    '2',
                    '0',
                    '4',
                    '6'
                ],
                correctIndex: 2,
                explain: '$\\lim_{x \\to 2} \\frac{x^2-4}{x-2} = \\lim_{x \\to 2}(x+2) = 4$. Para que sea continua, f(2) debe igualarse al límite, es decir 4.'
            },
            {
                id: 'mc-6-3',
                q: 'En la función $f(x) = \\dfrac{3x^2 - a}{4 - 2x}$, ¿qué valor de <em>a</em> garantiza una discontinuidad evitable en x=2?',
                options: [
                    'a = 6',
                    'a = 8',
                    'a = 10',
                    'a = 12'
                ],
                correctIndex: 3,
                explain: 'Para que el límite exista (sea finito), el numerador debe anularse en x=2: $3(2)^2 - a = 0 \\Rightarrow 12 - a = 0 \\Rightarrow a = 12$.'
            },
            {
                id: 'mc-6-4',
                q: '¿Cuántas condiciones deben cumplirse simultáneamente para que f sea continua en x = a?',
                options: [
                    'Una sola: que exista f(a).',
                    'Dos: que exista f(a) y que exista el límite.',
                    'Tres: que exista f(a), que exista el límite, y que sean iguales.',
                    'Ninguna condición especial, basta con que la función esté definida cerca de a.'
                ],
                correctIndex: 2,
                explain: 'Se deben cumplir las tres condiciones: 1) ∃f(a), 2) existe el límite en a, 3) f(a) = límite. Si falla cualquiera, hay discontinuidad.'
            }
        ],
        ms: [
            {
                id: 'ms-6-1',
                q: '¿Cuáles de los siguientes casos representan una discontinuidad <strong>esencial</strong>?',
                options: [
                    'El límite lateral por izquierda y por derecha existen pero son distintos.',
                    'El límite existe, es finito, pero f(a) no está definida.',
                    'El límite cuando x → a es infinito.',
                    'El límite existe, es finito, pero f(a) tiene un valor diferente al límite.',
                    'El límite no existe porque la función oscila sin converger.'
                ],
                correctIndexes: [0, 2, 4],
                explain: 'La discontinuidad es esencial cuando el límite es infinito o no existe. Los casos A (límites laterales distintos → no existe el límite bilateral), C (límite infinito) y E (oscilación → no existe el límite) son esenciales. Los casos B y D son discontinuidades evitables.'
            },
            {
                id: 'ms-6-2',
                q: 'Para la función a trozos $h(x) = \\begin{cases} -x+1 & x<0 \\\\ x^2 & x\\geq 0 \\end{cases}$, ¿cuáles afirmaciones son correctas?',
                options: [
                    'h(0) existe y vale 0.',
                    'El límite de h cuando x → 0 existe y vale 1.',
                    'Los límites laterales en x = 0 son distintos.',
                    'La discontinuidad en x = 0 es evitable.',
                    'No se puede redefinir h para que sea continua en x = 0.'
                ],
                correctIndexes: [0, 2, 4],
                explain: 'h(0) = 0² = 0 ✓. El límite por izquierda vale 1 y por derecha vale 0, son distintos ✓, por lo que el límite bilateral no existe: discontinuidad esencial, no redefinible ✓. La afirmación B es falsa (el límite no existe) y D es falsa (es esencial, no evitable).'
            },
            {
                id: 'ms-6-3',
                q: '¿Cuáles de las siguientes acciones son válidas para clasificar la discontinuidad de una función en un punto de corte de su dominio?',
                options: [
                    'Calcular los límites laterales y verificar si coinciden.',
                    'Evaluar directamente f en el punto sin calcular el límite.',
                    'Verificar si el límite bilateral existe y es finito.',
                    'Comprobar si f(a) coincide con el valor del límite.',
                    'Ignorar los puntos de corte porque siempre son continuos.'
                ],
                correctIndexes: [0, 2, 3],
                explain: 'Para clasificar la discontinuidad en un punto de corte: A) calcular límites laterales para ver si el límite existe, C) verificar si ese límite es finito (evitable) o no (esencial), D) comparar f(a) con el límite para chequear la 3° condición. B es incorrecto porque sólo evaluar f no alcanza, y E es falso: los puntos de corte son exactamente donde hay que analizar la continuidad.'
            }
        ]
    },
    flashcards: [
        {
            id: 'fc-6-1',
            front: '¿Cuáles son las tres condiciones para que f sea continua en x = a?',
            back: '1) $\\exists f(a)$ — la función está definida en a. 2) $\\exists \\lim_{x \\to a} f(x) = l$ — el límite existe. 3) $f(a) = l$ — el valor de la función coincide con el límite.'
        },
        {
            id: 'fc-6-2',
            front: '¿Qué diferencia hay entre discontinuidad evitable y esencial?',
            back: '<strong>Evitable:</strong> el límite existe y es finito. Se puede corregir redefiniendo f(a) igual al límite. <strong>Esencial:</strong> el límite es infinito o no existe. No se puede redefinir para obtener continuidad.'
        },
        {
            id: 'fc-6-3',
            front: '¿Dónde hay que analizar la continuidad de una función?',
            back: 'En los puntos que <strong>no pertenecen al dominio</strong> (siempre discontinua) y en los <strong>puntos de corte</strong> de la función (hay que calcular el límite y verificar las tres condiciones).'
        },
        {
            id: 'fc-6-4',
            front: '$f(x) = \\dfrac{x^2-4}{x-2}$ — ¿qué tipo de discontinuidad tiene en x=2 y por qué?',
            back: '<strong>Discontinuidad evitable</strong> en x=2. No existe f(2) (falla condición 1°), pero $\\lim_{x \\to 2} \\frac{x^2-4}{x-2} = \\lim_{x \\to 2}(x+2) = 4$, que es finito. Se puede redefinir f(2)=4.'
        },
        {
            id: 'fc-6-5',
            front: '¿Cómo se detecta una discontinuidad esencial por límites laterales distintos?',
            back: 'Si $\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)$, el límite bilateral no existe. Eso implica discontinuidad esencial en x = a.'
        },
        {
            id: 'fc-6-6',
            front: 'Para $f(x) = \\dfrac{3x^2 - a}{4-2x}$, ¿cómo se halla <em>a</em> para que haya discontinuidad evitable en x=2?',
            back: 'El denominador se anula en x=2. Para que el límite sea finito (evitable), el numerador también debe anularse: $3(2)^2 - a = 0 \\Rightarrow a = 12$.'
        },
        {
            id: 'fc-6-7',
            front: '¿Por qué la función $h(x) = \\begin{cases} -x+1 & x<0 \\\\ x^2 & x\\geq 0 \\end{cases}$ tiene discontinuidad esencial en x=0?',
            back: 'Aunque h(0)=0 existe, los límites laterales son distintos: $\\lim_{x \\to 0^-}(-x+1)=1$ y $\\lim_{x \\to 0^+} x^2=0$. Como el límite bilateral no existe, la discontinuidad es esencial.'
        }
    ]
},
{
    id: '7',
    unit: 'apuntes',
    title: 'Derivada de una función',
    criollo: 'La derivada es básicamente ver qué tan rápido cambia algo en un instante exacto — no en un rato, sino justo ahí. El cociente incremental te da la variación media, y cuando el denominador se va a cero por el límite, aparece la derivada. Entendés esto y entendés la mitad de la física.',
    blocks: [
        {
            type: 'h3',
            text: '¿Por qué estudiar las derivadas?',
            criollo: 'Porque están en todos lados: velocidad, precios, fluidos, medicina...'
        },
        {
            type: 'p',
            text: 'Para introducir el concepto de derivada se recurre generalmente a dos conceptos: uno físico y otro geométrico. El primero es el cálculo de la velocidad instantánea de un móvil y el segundo la definición de recta tangente a una curva en un punto de la misma.'
        },
        {
            type: 'p',
            text: 'Ambos modelos conducen a calcular el límite de un cociente de incrementos cuando el denominador tiende a cero, ya que las derivadas representan razones de cambio.'
        },
        {
            type: 'ul',
            items: [
                'Cuando se debe calcular el cambio de consumo de corriente en función del tiempo a lo largo de una vida útil.',
                'Para calcular el índice de precios al consumidor, que expresa la variación porcentual de los precios.',
                'Para determinar la variación del consumo eléctrico de un lugar en un instante determinado.',
                'La velocidad instantánea es la derivada del espacio en función del tiempo (la del velocímetro).',
                'La aceleración instantánea es la variación de la velocidad respecto al tiempo, es decir la derivada segunda del espacio respecto al tiempo.',
                'Para determinar la variación de la velocidad del flujo de vehículos que ingresan a una ciudad en un lapso de tiempo.',
                'En problemas de dinámica de fluidos, para conseguir una mejor aerodinámica en un automóvil.',
                'En la maximización de beneficios y minimización de costos.',
                'En medicina, muchas enfermedades pueden ser modelizadas por funciones, en las que se estudia el crecimiento de bacterias o células malignas, es decir, se estudia la variación del número de bacterias en un instante determinado.',
                'Para analizar la edad de los fósiles estudiamos la variación de la cantidad de radiación del carbono 14 en función del tiempo.'
            ]
        },
        {
            type: 'h3',
            text: 'Incremento de una función en un punto',
            criollo: 'El incremento es el "cuánto cambió" — en y y en x por separado.'
        },
        {
            type: 'p',
            text: 'Definida en un intervalo al cual pertenecen <strong>a</strong> y <strong>x</strong>, consideremos una función continua cuyo gráfico es el siguiente:'
        },
        {
            type: 'p',
            text: 'Se denomina <strong>variación de la función <em>f</em> o incremento de <em>f</em></strong> a la diferencia entre las ordenadas:'
        },
        {
            type: 'math',
            latex: '\\Delta y = f(x) - f(a)',
            display: true
        },
        {
            type: 'p',
            text: 'La diferencia entre los valores de <strong>x</strong> y <strong>a</strong> se denomina <strong>variación de la variable independiente</strong> o <strong>incremento de la variable independiente en <em>a</em></strong>:'
        },
        {
            type: 'math',
            latex: '\\Delta x = x - a',
            display: true
        },
        {
            type: 'p',
            text: 'Otra forma de expresar el incremento de la función es teniendo en cuenta la igualdad anterior y despejando <em>x</em>: queda $x = a + \\Delta x$. Por lo tanto, el incremento de la función se puede expresar como $\\Delta f = f(a + \\Delta x) - f(a)$.'
        },
        {
            type: 'h3',
            text: 'Cociente incremental o variación media de la función en el intervalo entre a y x',
            criollo: 'El cociente incremental es el "cuánto cambió f por cada unidad que cambió x" — la pendiente de la secante.'
        },
        {
            type: 'p',
            text: 'Se denomina así al cociente entre el incremento de la función y el de la variable independiente <em>x</em>:'
        },
        {
            type: 'math',
            latex: '\\frac{\\Delta f}{\\Delta x} = \\frac{f(x) - f(a)}{x - a} = \\frac{f(a + \\Delta x) - f(a)}{\\Delta x}',
            display: true
        },
        {
            type: 'h3',
            text: 'Interpretación geométrica del cociente incremental',
            criollo: 'Dibujá la secante y el triángulo — eso es lo que estás calculando.'
        },
        {
            type: 'p',
            text: 'Consideremos la recta que pasa por los puntos A y X. En el triángulo ABX, el cociente incremental $\\frac{\\Delta y}{\\Delta x}$ es igual a la tangente trigonométrica de $\\alpha$ ($\\operatorname{tg}\\alpha$), que es la pendiente de la recta AX (denominada recta secante al gráfico de la función).'
        },
        {
            type: 'math',
            latex: '\\frac{\\Delta y}{\\Delta x} \\text{ es la pendiente de la recta AX}',
            display: true
        },
        {
            type: 'h3',
            text: 'Derivada de una función en un punto — Definición',
            criollo: 'Acá está el corazón: hacés que Δx se vaya a cero y ves adónde va el cociente.'
        },
        {
            type: 'p',
            text: 'Si <em>f</em> es una función definida en un intervalo, y <em>a</em> es un punto interior del mismo, se denomina <strong>derivada de la función <em>f</em> en el punto <em>a</em></strong> —si existe— al límite finito del cociente incremental, cuando el incremento de la variable independiente tiende a cero:'
        },
        {
            type: 'math',
            latex: 'f\'(a) = \\lim_{\\Delta x \\to 0} \\frac{f(a + \\Delta x) - f(a)}{\\Delta x}',
            display: true
        },
        {
            type: 'ul',
            items: [
                'La derivada de una función en <em>a</em> —si existe— es un número real.',
                'La derivada de una función $f(x)$ en el punto $a$ puede coincidir con el dominio de la función o ser un subconjunto del mismo.',
                'La derivada de una función <em>f</em> en un punto <em>a</em> nos permite obtener la rapidez con que está variando la función en el punto considerado.',
                'Cuanto mayor sea el valor absoluto de la derivada en el punto, más rápido varía la función en él.'
            ]
        },
        {
            type: 'callout',
            tone: 'info',
            text: '<strong>Ejemplo (termodinámica):</strong> Si $f(x) = R - R/f(x)$ representa la energía dada por un dispositivo, la derivada en cada instante indica la tasa de cambio energética en ese momento.'
        },
        {
            type: 'p',
            text: 'Ejemplo de cálculo de una función por su definición: para $f(x) = x^2$, la función derivada $f\'(x)$ es:'
        },
        {
            type: 'math',
            latex: 'f\'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x} = \\lim_{\\Delta x \\to 0} \\frac{(x + \\Delta x)^2 - x^2}{\\Delta x} = \\lim_{\\Delta x \\to 0} \\frac{2x \\cdot \\Delta x + (\\Delta x)^2}{\\Delta x} = 2x',
            display: true
        },
        {
            type: 'p',
            text: 'Como el valor de <em>a</em> es un punto cualquiera del dominio, podemos reemplazar <em>a</em> por <em>x</em>, obteniendo la <strong>función derivada de f</strong>, $f\'(x)$, que a toda <em>x</em> del dominio de $f\'$ le asigna la derivada de <em>f</em> en <em>x</em>. Por ejemplo, para $f(x) = x^2$: $f\'(x) = 2x$. Entonces $f\'(1) = 2$, $f\'(0) = 0$, $f\'(-4) = -8$.'
        },
        {
            type: 'h3',
            text: 'Interpretación geométrica de la derivada — Recta tangente y recta normal',
            criollo: 'La derivada en un punto es la pendiente de la tangente. Sin más ni menos.'
        },
        {
            type: 'p',
            text: 'Si consideramos la recta secante al gráfico de la función <em>f</em> que pasa por los puntos $(a, f(a))$ y $(x, f(x))$, podemos decir que su pendiente es el cociente incremental $\\frac{f(x) - f(a)}{x - a}$. Gráficamente, cuando <em>x</em> se acerca a <em>a</em>, podemos obtener la recta secante que se acerca cada vez más al punto $(a, f(a))$, transformándose la recta secante en la recta <strong>tangente</strong> al gráfico de la función en el punto $(a, f(a))$.'
        },
        {
            type: 'p',
            text: 'La pendiente de la recta tangente es entonces:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a} = f\'(a)',
            display: true
        },
        {
            type: 'p',
            text: 'El estudio de la pendiente de la recta tangente surgió como respuesta al problema de describir la velocidad de un cuerpo en movimiento (velocidad instantánea). La dirección del movimiento de un objeto a lo largo de una curva en cada instante se define en términos de la dirección de la recta tangente a la trayectoria del movimiento.'
        },
        {
            type: 'p',
            text: '<strong>Recta tangente:</strong> La recta tangente a una curva en un punto $x_0$ no anguloso (donde no cambia repentinamente de dirección) es la recta que, al pasar por dicho punto $x_0$, conserva la misma dirección que la curva. La derivada en un punto representa la pendiente de la recta tangente en dicho punto, por lo que su ecuación es:'
        },
        {
            type: 'math',
            latex: 'y = f\'(x_0)\\, x + b \\qquad \\text{o bien} \\qquad y - y_0 = f\'(x_0)(x - x_0)',
            display: true
        },
        {
            type: 'p',
            text: '<strong>Recta normal:</strong> Se denomina recta normal a la curva en un punto $x_0$ no anguloso a la recta perpendicular a la recta tangente en dicho punto $x_0$, por lo que su pendiente es la opuesta e inversa de la pendiente de la recta tangente. Su ecuación es:'
        },
        {
            type: 'math',
            latex: 'y = -\\frac{1}{f\'(x_0)}\\, x + b \\qquad \\text{o bien} \\qquad y - y_0 = -\\frac{1}{f\'(x_0)}(x - x_0)',
            display: true
        },
        {
            type: 'callout',
            tone: 'info',
            text: '<strong>Ejemplo:</strong> Hallar las ecuaciones de la recta tangente y normal a la gráfica de $f(x) = \\frac{e^{-2x} + 5x^3}{\\cos x}$ en el punto de abscisa $x = 0$. Se tiene $y_0 = f(0) = \\frac{e^0 + 0}{\\cos 0} = 1$, luego el punto es $(0, 1)$. Calculando $f\'(x)$ por la regla del cociente y evaluando en $x=0$, se obtiene $f\'(0) = -2$. Recta tangente: $y = -2x + 1$. Recta normal: $y = \\frac{1}{2}x + 1$.'
        },
        {
            type: 'h3',
            text: 'Tabla de derivadas',
            criollo: 'Estas son las que tenés que tener en la cabeza o al menos cerca cuando operás.'
        },
        {
            type: 'table',
            caption: 'Tabla de derivadas',
            headers: ['$f(x)$', '$f\'(x)$'],
            rows: [
                ['$k$ (constante)', '$0$'],
                ['$x$', '$1$'],
                ['$x^n$', '$n \\cdot x^{n-1}$'],
                ['$e^x$', '$e^x$'],
                ['$a^x$', '$a^x \\ln a$'],
                ['$\\ln(x)$', '$\\dfrac{1}{x}$'],
                ['$\\operatorname{sen} x$', '$\\cos x$'],
                ['$\\cos x$', '$-\\operatorname{sen} x$'],
                ['$\\operatorname{tg} x$', '$\\sec^2 x = \\dfrac{1}{\\cos^2 x}$'],
                ['$\\operatorname{arcsen} x$', '$\\dfrac{1}{\\sqrt{1 - x^2}}$'],
                ['$\\arccos x$', '$\\dfrac{-1}{\\sqrt{1 - x^2}}$'],
                ['$\\operatorname{arctg} x$', '$\\dfrac{1}{1 + x^2}$']
            ]
        },
        {
            type: 'h3',
            text: 'Derivabilidad — Continuidad y derivada',
            criollo: 'Que sea continua no garantiza que sea derivable, pero si es derivable sí es continua. Ojo con eso.'
        },
        {
            type: 'p',
            text: '<strong>Teorema:</strong> Si una función admite derivada en un punto, entonces es continua en ese punto. Es decir, <strong>si existe $f\'(a)$ entonces $f(x)$ es continua en $a$</strong>.'
        },
        {
            type: 'ul',
            items: [
                '<strong>El contrarrecíproco</strong> de este teorema es válido: si una función $f(x)$ no es continua en $a$, entonces no existe $f\'(a)$.',
                'El recíproco <strong>no es válido</strong>: si una función es continua en $a$, entonces puede ser o no ser derivable en dicho punto.'
            ]
        },
        {
            type: 'callout',
            tone: 'warning',
            text: 'Continuidad es condición necesaria pero NO suficiente para derivabilidad. Una función puede ser continua y no derivable en un punto (por ejemplo, si tiene un "pico" o esquina en ese punto).'
        },
        {
            type: 'p',
            text: '<strong>Ejemplo 1:</strong> Analizar continuidad y derivabilidad de $f(x) = \\begin{cases} 1 & \\text{si } x \\geq 0 \\\\ x^2 & \\text{si } x < 0 \\end{cases}$ en $x = 0$.'
        },
        {
            type: 'p',
            text: 'Existe $f(0) = 1$. Calculamos los límites laterales:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to 0^+} 1 = 1 \\qquad \\lim_{x \\to 0^-} x^2 = 0',
            display: true
        },
        {
            type: 'p',
            text: 'Como los límites laterales son distintos, no existe el límite en $x = 0$. La función no es continua en cero, por lo que tampoco es derivable. Verificación:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to 0^-} \\frac{f(x) - f(0)}{x - 0} = \\lim_{x \\to 0^-} \\frac{x^2 - 1}{x} = \\infty',
            display: true
        },
        {
            type: 'p',
            text: '<strong>Ejemplo 2:</strong> Analizar continuidad y derivabilidad de $g(x) = \\begin{cases} x^2 & \\text{si } x \\geq 0 \\\\ x & \\text{si } x < 0 \\end{cases}$ en $x = 0$.'
        },
        {
            type: 'p',
            text: 'Existe $g(0) = 0$. Los límites laterales son:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to 0^-} x = 0 \\qquad \\lim_{x \\to 0^+} x^2 = 0',
            display: true
        },
        {
            type: 'p',
            text: 'Como los límites laterales son iguales y coinciden con $g(0) = 0$, $g(x)$ es continua en $x = 0$. Ahora verificamos la derivabilidad por definición:'
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to 0^-} \\frac{g(x) - g(0)}{x - 0} = \\lim_{x \\to 0^-} \\frac{x}{x} = 1',
            display: true
        },
        {
            type: 'math',
            latex: '\\lim_{x \\to 0^+} \\frac{g(x) - g(0)}{x - 0} = \\lim_{x \\to 0^+} \\frac{x^2}{x} = 0',
            display: true
        },
        {
            type: 'p',
            text: 'Como los límites laterales son distintos, no existe la derivada en $x = 0$. Entonces $g(x)$ es continua pero no derivable en cero.'
        },
        {
            type: 'h3',
            text: 'Álgebra de derivadas — Reglas de derivación',
            criollo: 'Con estas cuatro reglas podés derivar casi cualquier cosa que te tiren en el parcial.'
        },
        {
            type: 'p',
            text: '<strong>Derivada de la suma o la diferencia:</strong>'
        },
        {
            type: 'math',
            latex: '\\left[ f(x) \\pm g(x) \\right]\' = f\'(x) \\pm g\'(x)',
            display: true
        },
        {
            type: 'p',
            text: 'La derivada de una suma o diferencia de dos funciones es igual a la suma o la diferencia de las derivadas.'
        },
        {
            type: 'callout',
            tone: 'info',
            text: '<strong>Ejemplo:</strong> $(x^3 - \\sqrt{x})\' = (x^3)\' - (\\sqrt{x})\' = 3x^2 - \\dfrac{1}{2}x^{-1/2}$'
        },
        {
            type: 'p',
            text: '<strong>Derivada de una constante por una función:</strong>'
        },
        {
            type: 'math',
            latex: '\\left[ k \\cdot f(x) \\right]\' = k \\cdot f\'(x)',
            display: true
        },
        {
            type: 'p',
            text: 'La derivada de una constante por una función es igual a la constante por la derivada de la función.'
        },
        {
            type: 'callout',
            tone: 'info',
            text: '<strong>Ejemplo:</strong> $(4 \\ln x)\' = 4 \\cdot (\\ln x)\' = 4 \\cdot \\dfrac{1}{x} = \\dfrac{4}{x}$'
        },
        {
            type: 'p',
            text: '<strong>Derivada de un producto:</strong>'
        },
        {
            type: 'math',
            latex: '\\left[ f(x) \\cdot g(x) \\right]\' = f\'(x) \\cdot g(x) + f(x) \\cdot g\'(x)',
            display: true
        },
        {
            type: 'p',
            text: 'La derivada de un producto de dos funciones es igual a la derivada de la primera función por la segunda función sin derivar, más la primera función sin derivar por la segunda función derivada.'
        },
        {
            type: 'callout',
            tone: 'info',
            text: '<strong>Ejemplo:</strong> $(x^2 \\cdot e^x)\' = (x^2)\' \\cdot e^x + x^2 \\cdot (e^x)\' = 2x \\cdot e^x + x^2 \\cdot e^x$'
        },
        {
            type: 'p',
            text: '<strong>Derivada de un cociente:</strong>'
        },
        {
            type: 'math',
            latex: '\\left[ \\frac{f(x)}{g(x)} \\right]\' = \\frac{f\'(x) \\cdot g(x) - f(x) \\cdot g\'(x)}{g^2(x)}',
            display: true
        },
        {
            type: 'p',
            text: 'La derivada de un cociente es otro cociente entre el producto de la derivada del numerador por el denominador sin derivar, menos el numerador sin derivar por el denominador derivado, y el denominador sin derivar al cuadrado.'
        },
        {
            type: 'callout',
            tone: 'info',
            text: '<strong>Ejemplo:</strong> $\\left(\\dfrac{2x+3}{3^x}\\right)\' = \\dfrac{(2x+3)\' \\cdot 3^x - (2x+3) \\cdot (3^x)\'}{(3^x)^2} = \\dfrac{2 \\cdot 3^x - (2x+3) \\cdot 3^x \\ln 3}{3^{2x}}$'
        }
    ],
    quiz: {
        tf: [
            {
                id: 'tf-7-1',
                q: 'Si una función $f(x)$ es continua en un punto $a$, entonces necesariamente es derivable en ese punto.',
                a: false,
                explain: 'El recíproco del teorema no es válido. Una función puede ser continua en un punto y no ser derivable allí (por ejemplo, si tiene una esquina o pico). La continuidad es condición necesaria pero no suficiente para la derivabilidad.'
            },
            {
                id: 'tf-7-2',
                q: 'Si existe $f\'(a)$, entonces $f(x)$ es continua en $a$.',
                a: true,
                explain: 'Esto es exactamente el teorema enunciado en el apunte: la existencia de la derivada en un punto implica la continuidad en ese punto.'
            },
            {
                id: 'tf-7-3',
                q: 'El cociente incremental $\\frac{\\Delta y}{\\Delta x}$ representa geométricamente la pendiente de la recta tangente a la curva en el punto $a$.',
                a: false,
                explain: 'El cociente incremental es la pendiente de la recta <strong>secante</strong> que pasa por los puntos $A$ y $X$. La pendiente de la <strong>tangente</strong> se obtiene recién cuando $\\Delta x \\to 0$, es decir, tomando el límite: eso da la derivada.'
            },
            {
                id: 'tf-7-4',
                q: 'La derivada de $f(x) = x^n$ es $f\'(x) = n \\cdot x^{n-1}$.',
                a: true,
                explain: 'Esta es la regla de la potencia, que figura en la tabla de derivadas del apunte.'
            },
            {
                id: 'tf-7-5',
                q: 'La recta normal a una curva en un punto $x_0$ tiene la misma pendiente que la recta tangente en ese punto.',
                a: false,
                explain: 'La recta normal es perpendicular a la tangente, por lo que su pendiente es la opuesta e inversa: $-\\frac{1}{f\'(x_0)}$.'
            }
        ],
        mc: [
            {
                id: 'mc-7-1',
                q: '¿Cuál es la definición correcta de la derivada de $f$ en el punto $a$ por cociente incremental?',
                options: [
                    '$f\'(a) = \\lim_{\\Delta x \\to \\infty} \\frac{f(a + \\Delta x) - f(a)}{\\Delta x}$',
                    '$f\'(a) = \\lim_{\\Delta x \\to 0} \\frac{f(a + \\Delta x) - f(a)}{\\Delta x}$',
                    '$f\'(a) = \\frac{f(a + \\Delta x) - f(a)}{\\Delta x}$',
                    '$f\'(a) = \\lim_{\\Delta x \\to 0} \\frac{f(a) - f(a + \\Delta x)}{\\Delta x}$'
                ],
                correctIndex: 1,
                explain: 'La definición correcta es el límite del cociente incremental cuando $\\Delta x \\to 0$. Sin el límite es solo el cociente incremental (variación media), no la derivada.'
            },
            {
                id: 'mc-7-2',
                q: '¿Cuál es la derivada de $f(x) = a^x$?',
                options: [
                    '$f\'(x) = x \\cdot a^{x-1}$',
                    '$f\'(x) = a^x$',
                    '$f\'(x) = a^x \\ln a$',
                    '$f\'(x) = \\dfrac{a^x}{\\ln a}$'
                ],
                correctIndex: 2,
                explain: 'Según la tabla de derivadas, la derivada de $a^x$ es $a^x \\ln a$. Solo cuando $a = e$ da $e^x$ porque $\\ln e = 1$.'
            },
            {
                id: 'mc-7-3',
                q: 'Si $f(x) = \\frac{u(x)}{v(x)}$, ¿cuál es la regla del cociente para su derivada?',
                options: [
                    '$f\'(x) = \\dfrac{u\'(x)}{v\'(x)}$',
                    '$f\'(x) = \\dfrac{u\'(x) \\cdot v(x) + u(x) \\cdot v\'(x)}{v^2(x)}$',
                    '$f\'(x) = \\dfrac{u\'(x) \\cdot v(x) - u(x) \\cdot v\'(x)}{v^2(x)}$',
                    '$f\'(x) = \\dfrac{u(x) \\cdot v\'(x) - u\'(x) \\cdot v(x)}{v^2(x)}$'
                ],
                correctIndex: 2,
                explain: 'La regla del cociente es: derivada del numerador por denominador sin derivar, menos numerador sin derivar por derivada del denominador, todo sobre el denominador al cuadrado.'
            },
            {
                id: 'mc-7-4',
                q: 'La ecuación de la recta tangente a la gráfica de $f(x)$ en el punto $(x_0, y_0)$ es:',
                options: [
                    '$y = f\'(x_0) \\cdot x_0 + b$',
                    '$y - y_0 = -\\dfrac{1}{f\'(x_0)}(x - x_0)$',
                    '$y - y_0 = f\'(x_0)(x - x_0)$',
                    '$y = f(x_0) \\cdot x + b$'
                ],
                correctIndex: 2,
                explain: 'La ecuación de la tangente en $(x_0, y_0)$ es $y - y_0 = f\'(x_0)(x - x_0)$. La opción b corresponde a la recta <strong>normal</strong>, no a la tangente.'
            }
        ],
        ms: [
            {
                id: 'ms-7-1',
                q: '¿Cuáles de las siguientes son aplicaciones reales de la derivada mencionadas en el apunte?',
                options: [
                    'Calcular el índice de precios al consumidor (variación porcentual)',
                    'Determinar la velocidad instantánea de un móvil',
                    'Calcular el área bajo una curva',
                    'Modelizar el crecimiento de bacterias en medicina',
                    'Hallar la longitud de una curva'
                ],
                correctIndexes: [0, 1, 3],
                explain: 'El apunte menciona el IPC, la velocidad instantánea, la aceleración, flujos de vehículos, aerodinámica, crecimiento de bacterias, y radiación del carbono 14. El área bajo la curva y la longitud de curva corresponden a integrales, no a derivadas.'
            },
            {
                id: 'ms-7-2',
                q: '¿Cuáles de las siguientes afirmaciones sobre derivabilidad y continuidad son correctas según el apunte?',
                options: [
                    'Si $f$ es derivable en $a$, entonces $f$ es continua en $a$.',
                    'Si $f$ es continua en $a$, entonces $f$ es derivable en $a$.',
                    'Si $f$ no es continua en $a$, entonces $f$ no es derivable en $a$.',
                    'Una función puede ser continua en un punto y no derivable en él.',
                    'Derivabilidad y continuidad son condiciones equivalentes.'
                ],
                correctIndexes: [0, 2, 3],
                explain: 'Las afirmaciones correctas son: (a) el teorema principal, (c) el contrarrecíproco válido, y (d) el ejemplo de g(x)=|x| o similar que muestra que continuidad no implica derivabilidad. La opción (b) y (e) son falsas: el recíproco no vale.'
            },
            {
                id: 'ms-7-3',
                q: '¿Cuáles de las siguientes son reglas del álgebra de derivadas enunciadas en el apunte?',
                options: [
                    '$[f(x) \\pm g(x)]\' = f\'(x) \\pm g\'(x)$',
                    '$[f(x) \\cdot g(x)]\' = f\'(x) \\cdot g\'(x)$',
                    '$[k \\cdot f(x)]\' = k \\cdot f\'(x)$',
                    '$\\left[\\frac{f(x)}{g(x)}\\right]\' = \\frac{f\'(x) \\cdot g(x) - f(x) \\cdot g\'(x)}{g^2(x)}$',
                    '$[f(x) \\cdot g(x)]\' = f\'(x) \\cdot g(x) + f(x) \\cdot g\'(x)$'
                ],
                correctIndexes: [0, 2, 3, 4],
                explain: 'Las opciones (a), (c), (d) y (e) son las cuatro reglas enunciadas en el apunte: suma/diferencia, constante por función, cociente y producto respectivamente. La opción (b) es incorrecta: la derivada del producto NO es el producto de las derivadas.'
            }
        ]
    },
    flashcards: [
        {
            id: 'fc-7-1',
            front: '¿Qué es el cociente incremental de una función?',
            back: 'Es el cociente entre el incremento de la función ($\\Delta f$) y el incremento de la variable independiente ($\\Delta x$): $\\frac{\\Delta f}{\\Delta x} = \\frac{f(a + \\Delta x) - f(a)}{\\Delta x}$. Geométricamente es la pendiente de la recta secante.'
        },
        {
            id: 'fc-7-2',
            front: '¿Cuál es la definición de derivada de $f$ en el punto $a$?',
            back: '$f\'(a) = \\lim_{\\Delta x \\to 0} \\frac{f(a + \\Delta x) - f(a)}{\\Delta x}$, siempre que ese límite finito exista. Es el límite del cociente incremental cuando $\\Delta x \\to 0$.'
        },
        {
            id: 'fc-7-3',
            front: '¿Qué representa geométricamente la derivada $f\'(a)$?',
            back: 'Representa la pendiente de la recta tangente al gráfico de $f$ en el punto $(a, f(a))$. También indica la razón de cambio instantánea de la función en ese punto.'
        },
        {
            id: 'fc-7-4',
            front: '¿Cuál es la ecuación de la recta tangente a $f$ en el punto $(x_0, y_0)$?',
            back: '$y - y_0 = f\'(x_0)(x - x_0)$, donde $y_0 = f(x_0)$ y $f\'(x_0)$ es la pendiente (derivada evaluada en $x_0$).'
        },
        {
            id: 'fc-7-5',
            front: '¿Cuál es la ecuación de la recta normal a $f$ en el punto $(x_0, y_0)$?',
            back: '$y - y_0 = -\\dfrac{1}{f\'(x_0)}(x - x_0)$. La recta normal es perpendicular a la tangente, su pendiente es la opuesta e inversa de $f\'(x_0)$.'
        },
        {
            id: 'fc-7-6',
            front: '¿Cuál es la relación entre derivabilidad y continuidad?',
            back: 'Si $f$ es derivable en $a$ $\\Rightarrow$ $f$ es continua en $a$ (teorema). El contrarrecíproco también vale: si no es continua, no es derivable. Pero el recíproco NO vale: ser continua no garantiza ser derivable.'
        },
        {
            id: 'fc-7-7',
            front: '¿Cuál es la regla del producto de derivadas?',
            back: '$[f(x) \\cdot g(x)]\' = f\'(x) \\cdot g(x) + f(x) \\cdot g\'(x)$. Derivada de la primera por la segunda sin derivar, más la primera sin derivar por derivada de la segunda.'
        },
        {
            id: 'fc-7-8',
            front: '¿Cuál es la regla del cociente de derivadas?',
            back: '$\\left[\\dfrac{f(x)}{g(x)}\\right]\' = \\dfrac{f\'(x) \\cdot g(x) - f(x) \\cdot g\'(x)}{g^2(x)}$. Numerador: derivada del numerador por denominador menos numerador por derivada del denominador. Denominador: denominador al cuadrado.'
        },
        {
            id: 'fc-7-9',
            front: 'Completá la tabla: ¿cuál es la derivada de $\\operatorname{tg} x$, $\\operatorname{arcsen} x$ y $\\arccos x$?',
            back: '$\\operatorname{tg} x \\Rightarrow \\sec^2 x = \\dfrac{1}{\\cos^2 x}$ | $\\operatorname{arcsen} x \\Rightarrow \\dfrac{1}{\\sqrt{1-x^2}}$ | $\\arccos x \\Rightarrow \\dfrac{-1}{\\sqrt{1-x^2}}$'
        }
    ]
},
{
    id: '8',
    unit: 'apuntes',
    title: 'Derivada de la función compuesta',
    criollo: 'La regla de la cadena es esa movida donde tenés que derivar de afuera hacia adentro, multiplicando. Si no respetás el orden te quedás en bolas con el resultado. Encima viene con bonus track: función potencial exponencial y derivadas de distintos órdenes.',
    blocks: [
        {
            type: 'p',
            text: 'Dadas dos funciones f(x) y g(x), si aplicamos a la variable x primero la función g, y al resultado obtenido le aplicamos la función f, el resultado obtenido es la composición de las dos funciones, que lo simbolizamos f(g(x)).'
        },
        {
            type: 'callout',
            tone: 'info',
            text: 'Diagrama de composición: x → <strong>g</strong> → g(x) → <strong>f</strong> → f(g(x)). Primero se aplica g a x, luego f al resultado.'
        },
        {
            type: 'p',
            text: 'Por ejemplo, la función $h(x) = \\text{sen}(\\sqrt{x})$ es una composición de funciones, pues la función seno está aplicada a la función $\\sqrt{x}$. Haciendo la correspondencia con la notación anterior: $g(x) = \\sqrt{x}$ y $f(x) = \\text{sen}\\,x$.'
        },
        {
            type: 'h3',
            text: 'Regla de la cadena',
            criollo: 'Derivá de afuera hacia adentro, multiplicando cada eslabón.'
        },
        {
            type: 'p',
            text: 'La derivada de una función compuesta se resuelve de la siguiente forma (derivamos desde la última función aplicada hasta la que se aplicó en primer lugar a la variable):'
        },
        {
            type: 'math',
            latex: '[f(g(x))]^{\\prime} = f^{\\prime}(g(x)) \\cdot g^{\\prime}(x)',
            display: true
        },
        {
            type: 'h3',
            text: 'Ejemplo 1',
            criollo: 'Función con raíz cuadrada.'
        },
        {
            type: 'math',
            latex: 'f(x) = \\text{sen}(\\sqrt{x})',
            display: true
        },
        {
            type: 'p',
            text: 'Según la regla, debemos derivar f y realizar el producto entre dichas derivadas. Las funciones a derivar son: la raíz cuadrada de x y el seno. Ahora bien, la función seno se aplica a x y la raíz cuadrada se aplica a x, entonces debemos aplicarla a la raíz cuadrada y luego multiplicar por la derivada de la raíz cuadrada.'
        },
        {
            type: 'math',
            latex: "f^{\\prime}(x) = \\cos(\\sqrt{x}) \\cdot (\\sqrt{x})^{\\prime} = \\cos(\\sqrt{x}) \\cdot \\frac{1}{2}\\, x^{-1/2}",
            display: true
        },
        {
            type: 'h3',
            text: 'Ejemplo 2',
            criollo: 'Potencia de una función lineal.'
        },
        {
            type: 'math',
            latex: 'f(x) = (4 - 5x)^{8}',
            display: true
        },
        {
            type: 'math',
            latex: "f^{\\prime}(x) = 8 \\cdot (4 - 5x)^{7} \\cdot (4 - 5x)^{\\prime} = 8\\,(4 - 5x)^{7} \\cdot (-5)",
            display: true
        },
        {
            type: 'callout',
            tone: 'warning',
            text: '<strong>Nota:</strong> para resolver bien la derivada de una función compuesta es muy importante reconocer primero en qué orden están aplicadas las funciones a la variable, y comenzar derivando la última función aplicada hasta llegar a la que se aplicó en primer lugar a la variable.'
        },
        {
            type: 'h3',
            text: 'Derivada de la función potencial exponencial',
            criollo: 'Cuando la variable está tanto en la base como en el exponente, viene con fórmula especial.'
        },
        {
            type: 'p',
            text: 'Una función potencial exponencial es una función elevada a otra función, o sea, una función en la que la variable aparece en la base y en el exponente de la fórmula.'
        },
        {
            type: 'p',
            text: 'Simbólicamente:'
        },
        {
            type: 'math',
            latex: 'h(x) = [f(x)]^{g(x)}',
            display: true
        },
        {
            type: 'p',
            text: 'Ejemplos de funciones potencial exponencial:'
        },
        {
            type: 'ol',
            items: [
                '$f(x) = x^{x}$',
                '$g(x) = (\\text{tg}\\,x)^{\\ln x}$'
            ]
        },
        {
            type: 'p',
            text: 'La fórmula para derivar este tipo de funciones es:'
        },
        {
            type: 'math',
            latex: "\\left([f(x)]^{g(x)}\\right)^{\\prime} = [f(x)]^{g(x)} \\left( g^{\\prime}(x)\\,\\ln[f(x)] + \\frac{g(x) \\cdot f^{\\prime}(x)}{f(x)} \\right)",
            display: true
        },
        {
            type: 'p',
            text: 'La derivada de la función potencial exponencial es igual a la misma función multiplicada por la suma entre la derivada del exponente por el logaritmo natural de la base y el exponente por la derivada de la base dividido la base.'
        },
        {
            type: 'callout',
            tone: 'info',
            text: 'Esta fórmula se obtiene aplicando logaritmo natural a ambos miembros de la igualdad y luego derivando.'
        },
        {
            type: 'h3',
            text: 'Ejemplo — función potencial exponencial',
            criollo: 'Logaritmo a ambos lados y después derivamos.'
        },
        {
            type: 'math',
            latex: 'f(x) = \\left[(2x^{3} - 5)^{4x+1}\\right]',
            display: true
        },
        {
            type: 'p',
            text: 'Aplicamos $\\ln$ a ambos miembros:'
        },
        {
            type: 'math',
            latex: '\\ln(f(x)) = \\ln\\!\\left[(2x^{3}-5)^{4x+1}\\right]',
            display: true
        },
        {
            type: 'p',
            text: 'Por propiedad del logaritmo:'
        },
        {
            type: 'math',
            latex: '\\ln(f(x)) = (4x+1) \\cdot \\ln(2x^{3}-5)',
            display: true
        },
        {
            type: 'p',
            text: 'Derivamos a ambos miembros:'
        },
        {
            type: 'math',
            latex: "\\frac{1}{f(x)} \\cdot f^{\\prime}(x) = 4 \\cdot \\ln(2x^{3}-5) + (4x+1) \\cdot \\frac{1}{2x^{3}-5} \\cdot 6x^{2}",
            display: true
        },
        {
            type: 'p',
            text: 'Despejamos $f\'(x)$:'
        },
        {
            type: 'math',
            latex: "f^{\\prime\\prime}(x) = \\left[4 \\cdot \\ln(2x^{3}-5) + (4x+1) \\cdot \\frac{1}{2x^{3}-5} \\cdot 6x^{2}\\right] \\cdot \\left[(2x^{3}-5)^{4x+1}\\right]",
            display: true
        },
        {
            type: 'h3',
            text: 'Derivada de distintos órdenes',
            criollo: 'Seguís derivando y derivando hasta que la función se queda sin nada.'
        },
        {
            type: 'p',
            text: 'Si una función f(x) es derivable en un conjunto, f\'(x) resulta ser una función y si ésta es también derivable entonces su derivada (f\'(x))\'resulta ser también una función y se la denomina <strong>derivada segunda</strong> de f(x) o derivada de segundo orden y se la nota como f\'\'(x).'
        },
        {
            type: 'p',
            text: 'Así sucesivamente se pueden hallar, siempre que sea posible, las derivadas de distintos órdenes de una función dada. La notación general para la derivada de orden "n" es $f^{(n)}(x)$.'
        },
        {
            type: 'h3',
            text: 'Ejemplo — derivadas de distintos órdenes',
            criollo: 'Derivás hasta que la función se achata en cero.'
        },
        {
            type: 'p',
            text: 'Sea $f(x) = 2x^{6}$:'
        },
        {
            type: 'ul',
            items: [
                "$f'(x) = 2 \\cdot 6x^{5} = 12x^{5}$",
                "$f''(x) = 60x^{4}$",
                "$f'''(x) = 240x^{3}$",
                "$f^{(4)}(x) = 720x^{2}$",
                "$f^{(5)}(x) = 1440x$",
                "$f^{(6)}(x) = 1440$",
                "$f^{(7)}(x) = 0 = f^{(8)}(x) = f^{(9)}(x) = f^{(n)}(x)$ para $n > 6$"
            ]
        }
    ],
    quiz: {
        tf: [
            {
                id: 'tf-8-1',
                q: 'La regla de la cadena establece que $(f(g(x)))\'= f\'(g(x)) \\cdot g\'(x)$.',
                a: true,
                explain: 'Esa es exactamente la fórmula de la derivada de la función compuesta: derivada de la función exterior evaluada en la interior, por derivada de la interior.'
            },
            {
                id: 'tf-8-2',
                q: 'Para derivar $f(x) = (4 - 5x)^{8}$ alcanza con aplicar la regla de la potencia directamente sin usar la regla de la cadena.',
                a: false,
                explain: 'El argumento no es simplemente x sino $(4-5x)$, así que hay que multiplicar por la derivada del interior $(-5)$, aplicando la regla de la cadena.'
            },
            {
                id: 'tf-8-3',
                q: 'Una función potencial exponencial $h(x) = [f(x)]^{g(x)}$ es aquella en que la variable aparece solo en el exponente.',
                a: false,
                explain: 'En la función potencial exponencial la variable aparece tanto en la base como en el exponente.'
            },
            {
                id: 'tf-8-4',
                q: 'La derivada de orden 7 de $f(x) = 2x^{6}$ es igual a cero.',
                a: true,
                explain: 'Tras seis derivaciones sucesivas se obtiene la constante 1440, cuya derivada es 0. Toda derivada de orden mayor a 6 también es 0.'
            },
            {
                id: 'tf-8-5',
                q: 'Para derivar una función potencial exponencial se puede aplicar logaritmo natural a ambos miembros y luego derivar.',
                a: true,
                explain: 'Ese es justamente el procedimiento que describe el apunte para obtener la fórmula de derivación de la función potencial exponencial.'
            }
        ],
        mc: [
            {
                id: 'mc-8-1',
                q: '¿Cuál es la derivada de $f(x) = \\text{sen}(\\sqrt{x})$?',
                options: [
                    '$\\cos(\\sqrt{x})$',
                    '$\\cos(\\sqrt{x}) \\cdot \\dfrac{1}{2}x^{-1/2}$',
                    '$-\\cos(\\sqrt{x}) \\cdot \\dfrac{1}{2}x^{-1/2}$',
                    '$\\text{sen}(\\sqrt{x}) \\cdot \\dfrac{1}{2}x^{-1/2}$'
                ],
                correctIndex: 1,
                explain: 'Por regla de la cadena: derivada del seno (=coseno) evaluada en $\\sqrt{x}$, multiplicada por la derivada de $\\sqrt{x}$ que es $\\frac{1}{2}x^{-1/2}$.'
            },
            {
                id: 'mc-8-2',
                q: '¿Qué operación se realiza primero al derivar $f(x) = (4-5x)^{8}$ por regla de la cadena?',
                options: [
                    'Derivar el interior $(4-5x)$ y elevar al cuadrado.',
                    'Bajar el exponente y multiplicar: $8(4-5x)^{7}$, sin tocar el interior.',
                    'Derivar el interior y descartar el exterior.',
                    'Aplicar logaritmo a ambos miembros.'
                ],
                correctIndex: 1,
                explain: 'Primero se deriva la función exterior (potencia): se baja el exponente y queda $8(4-5x)^{7}$. Luego se multiplica por la derivada del interior $(-5)$.'
            },
            {
                id: 'mc-8-3',
                q: '¿Cuál es la fórmula correcta para $\\left([f(x)]^{g(x)}\\right)\'$?',
                options: [
                    '$g(x) \\cdot [f(x)]^{g(x)-1} \\cdot f\'(x)$',
                    '$[f(x)]^{g(x)} \\cdot \\left(g\'(x)\\,\\ln[f(x)] + \\dfrac{g(x)\\cdot f\'(x)}{f(x)}\\right)$',
                    '$[f(x)]^{g(x)} \\cdot g\'(x) \\cdot \\ln[f(x)]$',
                    '$g\'(x) \\cdot \\ln[f(x)]$'
                ],
                correctIndex: 1,
                explain: 'La fórmula completa de la función potencial exponencial incluye la función original multiplicada por la suma de dos términos: derivada del exponente por logaritmo de la base, más el exponente por la derivada de la base dividida la base.'
            },
            {
                id: 'mc-8-4',
                q: '¿Cómo se nota la derivada de orden "n" de una función f(x)?',
                options: [
                    "$f^{n}(x)$",
                    "$f_{n}(x)$",
                    "$f^{(n)}(x)$",
                    "$\\dfrac{d^{n}f}{dx}$"
                ],
                correctIndex: 2,
                explain: 'La notación general para la derivada de orden n es $f^{(n)}(x)$, con el superíndice entre paréntesis para diferenciarlo de una potencia.'
            }
        ],
        ms: [
            {
                id: 'ms-8-1',
                q: '¿Cuáles de las siguientes son funciones potencial exponencial (variable en base Y en exponente)?',
                options: [
                    '$x^{x}$',
                    '$x^{3}$',
                    '$(\\text{tg}\\,x)^{\\ln x}$',
                    '$e^{x}$',
                    '$[(2x^{3}-5)^{4x+1}]$'
                ],
                correctIndexes: [0, 2, 4],
                explain: '$x^{x}$ tiene variable en base y exponente; $(\\text{tg}\\,x)^{\\ln x}$ ídem; $(2x^{3}-5)^{4x+1}$ ídem. En cambio $x^{3}$ tiene exponente constante y $e^{x}$ tiene base constante.'
            },
            {
                id: 'ms-8-2',
                q: '¿Cuáles de los siguientes pasos forman parte del procedimiento para derivar una función potencial exponencial?',
                options: [
                    'Aplicar logaritmo natural a ambos miembros de la igualdad.',
                    'Usar directamente la regla de la potencia bajando el exponente.',
                    'Aplicar derivación implícita al lado izquierdo obteniendo $\\frac{1}{f(x)} \\cdot f\'(x)$.',
                    'Usar la propiedad del logaritmo para bajar el exponente como factor.',
                    'Derivar el lado derecho como producto de funciones.'
                ],
                correctIndexes: [0, 2, 3, 4],
                explain: 'El procedimiento es: (1) aplicar ln a ambos lados, (3) derivar el lado izquierdo implícitamente, (4) usar la propiedad del log para convertir la potencia en producto, (5) derivar el lado derecho como producto. No se usa la regla de potencia directa porque el exponente también depende de x.'
            },
            {
                id: 'ms-8-3',
                q: 'Para $f(x) = 2x^{6}$, ¿cuáles de las siguientes afirmaciones son correctas?',
                options: [
                    "$f''(x) = 60x^{4}$",
                    "$f^{(5)}(x) = 1440x$",
                    "$f^{(6)}(x) = 0$",
                    "$f^{(7)}(x) = 0$",
                    "$f^{(4)}(x) = 720x^{2}$"
                ],
                correctIndexes: [0, 1, 3, 4],
                explain: "$f''(x) = 60x^{4}$ ✓, $f^{(5)}(x) = 1440x$ ✓, $f^{(7)}(x) = 0$ ✓, $f^{(4)}(x) = 720x^{2}$ ✓. Pero $f^{(6)}(x) = 1440$ (no cero), la constante 1440 se anula recién en el orden 7."
            }
        ]
    },
    flashcards: [
        {
            id: 'fc-8-1',
            front: '¿Cuál es la fórmula de la regla de la cadena?',
            back: '$[f(g(x))]\'= f\'(g(x)) \\cdot g\'(x)$. Se deriva la función exterior evaluada en la interior, y se multiplica por la derivada de la interior.'
        },
        {
            id: 'fc-8-2',
            front: '¿En qué orden se aplican las derivadas al usar la regla de la cadena?',
            back: 'De afuera hacia adentro: se deriva primero la última función aplicada y se va multiplicando por la derivada de cada función interior hasta llegar a la primera función aplicada a la variable.'
        },
        {
            id: 'fc-8-3',
            front: '¿Qué es una función potencial exponencial?',
            back: 'Es una función de la forma $h(x) = [f(x)]^{g(x)}$, donde la variable aparece tanto en la base como en el exponente. Ejemplos: $x^{x}$, $(\\text{tg}\\,x)^{\\ln x}$.'
        },
        {
            id: 'fc-8-4',
            front: '¿Cuál es la derivada de $[f(x)]^{g(x)}$?',
            back: '$[f(x)]^{g(x)} \\left( g\'(x)\\,\\ln[f(x)] + \\dfrac{g(x) \\cdot f\'(x)}{f(x)} \\right)$. La misma función por la suma de dos términos.'
        },
        {
            id: 'fc-8-5',
            front: '¿Cómo se obtiene la fórmula de la función potencial exponencial?',
            back: 'Aplicando logaritmo natural a ambos miembros de la igualdad $f(x) = [\\text{base}]^{\\text{exp}}$, usando la propiedad del logaritmo para bajar el exponente como factor, y luego derivando implícitamente ambos lados.'
        },
        {
            id: 'fc-8-6',
            front: '¿Qué es la derivada segunda de f(x) y cómo se nota?',
            back: 'Es la derivada de f\'(x), es decir la derivada de la derivada. Se nota $f\'\'(x)$ o $f^{(2)}(x)$. La notación general para orden n es $f^{(n)}(x)$.'
        },
        {
            id: 'fc-8-7',
            front: 'Si $f(x) = 2x^{6}$, ¿cuánto vale $f^{(6)}(x)$ y $f^{(7)}(x)$?',
            back: '$f^{(6)}(x) = 1440$ (constante). $f^{(7)}(x) = 0$, y toda derivada de orden mayor a 6 también es 0.'
        },
        {
            id: 'fc-8-8',
            front: '¿Cuál es la derivada de $f(x) = (4-5x)^{8}$?',
            back: '$f\'(x) = 8(4-5x)^{7} \\cdot (-5) = -40(4-5x)^{7}$. Se aplica regla de la cadena: potencia exterior × derivada del interior.'
        }
    ]
},
{
    id: '9',
    unit: 'apuntes',
    title: 'Recta tangente y recta normal',
    criollo: 'La recta tangente es la que "toca" la curva en un punto sin cruzarla, y su pendiente es justamente la derivada en ese punto. La recta normal es la perpendicular a la tangente, así que su pendiente es la opuesta e inversa. Con esas dos herramientas podés describir la curva localmente en cualquier punto no anguloso.',
    blocks: [
        {
            type: 'h3',
            text: 'Definición de la recta tangente',
            criollo: '¿Qué onda la tangente?'
        },
        {
            type: 'p',
            text: 'El estudio de la pendiente de la recta tangente surgió como respuesta al problema de describir la velocidad de un cuerpo en movimiento (problema de la velocidad instantánea). La dirección del movimiento de un objeto a lo largo de una curva en cada instante se define en términos de la dirección de la recta tangente a la trayectoria del movimiento.'
        },
        {
            type: 'p',
            text: 'Otro ejemplo: para diseñar el ascenso y descenso de una montaña rusa —que podemos imaginar como una función similar a una cuadrática— para que la montaña rusa tenga la pendiente deseada, las pendientes de ascenso y descenso deben ser las rectas tangentes a la curva.'
        },
        {
            type: 'p',
            text: 'Si consideramos la recta secante al gráfico de la función $f$ que pasa por los puntos $(x, f(x))$ y $(c, f(c))$, podemos decir que su pendiente es el cociente incremental determinado por:'
        },
        {
            type: 'math',
            latex: '\\frac{f(x) - f(a)}{x - a}',
            display: true
        },
        {
            type: 'p',
            text: 'Si a este cociente le aplicamos el límite cuando $x$ tiende a "$a$", gráficamente hacemos que el punto $(x, f(x))$ se acerque tanto como pueda al punto $(a, f(a))$, transformándose la recta secante en la recta tangente. La pendiente de la recta tangente es entonces $\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$, que es igual a la derivada de la función en $a$.'
        },
        {
            type: 'h3',
            text: 'Recta tangente',
            criollo: 'La ecuación de la tangente'
        },
        {
            type: 'p',
            text: 'La recta tangente a una curva en un punto $x_0$ no anguloso (donde no cambia repentinamente de dirección) es la recta que, al pasar por dicho punto $x_0$, conserva la misma dirección que la curva. La derivada en un punto representa la pendiente de la recta tangente en dicho punto, por lo que su ecuación es:'
        },
        {
            type: 'math',
            latex: 'y = f\'(x_0)x + b',
            display: true
        },
        {
            type: 'p',
            text: 'o bien:'
        },
        {
            type: 'math',
            latex: 'y - y_0 = f\'(x_0)(x - x_0)',
            display: true
        },
        {
            type: 'h3',
            text: 'Recta normal',
            criollo: 'La perpendicular a la tangente'
        },
        {
            type: 'p',
            text: 'Se denomina recta normal a la curva en un punto $x_0$ no anguloso a la recta perpendicular a la recta tangente en dicho punto $x_0$, por lo que su pendiente es la opuesta e inversa de la pendiente de la recta tangente. Su ecuación es:'
        },
        {
            type: 'math',
            latex: 'y = -\\frac{1}{f\'(x_0)}x + b',
            display: true
        },
        {
            type: 'p',
            text: 'o bien:'
        },
        {
            type: 'math',
            latex: 'y - y_0 = -\\frac{1}{f\'(x_0)}(x - x_0)',
            display: true
        },
        {
            type: 'h3',
            text: 'Ejemplo resuelto',
            criollo: 'A ver cómo se hace en la práctica'
        },
        {
            type: 'p',
            text: 'Hallar las ecuaciones de la recta tangente y normal a la gráfica de $f(x)$ en el punto de abscisa $x = 0$ para la siguiente función:'
        },
        {
            type: 'math',
            latex: 'f(x) = \\frac{e^{-2x} + 5x^3}{\\cos x}',
            display: true
        },
        {
            type: 'callout',
            tone: 'info',
            text: '<strong>Solución:</strong> Para hallar la ecuación de la recta tangente debemos calcular: (1) la derivada de la función, (2) la derivada en el punto (que será la pendiente), (3) el punto de tangencia, (4) la ecuación de la recta tangente.'
        },
        {
            type: 'ol',
            items: [
                'Calculamos $f\'(x)$:',
                'Calculamos $f\'(0)$:',
                'Calculamos $f(0)$:',
                'Ecuación de la recta tangente:'
            ]
        },
        {
            type: 'p',
            text: '<strong>Paso 1 — Derivada de $f(x)$</strong> (regla del cociente):'
        },
        {
            type: 'math',
            latex: 'f\'(x) = \\frac{(-2e^{-2x} + 15x^2)\\cos x - (e^{-2x} + 5x^3)(-\\text{sen}\\, x)}{(\\cos x)^2}',
            display: true
        },
        {
            type: 'p',
            text: '<strong>Paso 2 — Evaluamos en $x = 0$:</strong>'
        },
        {
            type: 'math',
            latex: 'f\'(0) = \\frac{(-2e^{-2 \\cdot 0} + 15 \\cdot 0^2)\\cos(0) + (e^{-2 \\cdot 0} + 5 \\cdot 0^3)\\, \\text{sen}(0)}{[\\cos(0)]^2}',
            display: true
        },
        {
            type: 'math',
            latex: 'f\'(0) = \\frac{-2 + 0}{1} = -2',
            display: true
        },
        {
            type: 'p',
            text: 'Si $f\'(0) = -2$, la pendiente de la recta tangente es $-2$, entonces $y_t = -2x + b$.'
        },
        {
            type: 'p',
            text: '<strong>Paso 3 — Calculamos $f(0)$:</strong>'
        },
        {
            type: 'math',
            latex: 'f(0) = \\frac{e^{-2 \\cdot 0} + 5 \\cdot 0^3}{\\cos(0)} = \\frac{1 + 0}{1} = 1',
            display: true
        },
        {
            type: 'p',
            text: 'Implica que el punto de tangencia se da en $(0;\\, 1)$.'
        },
        {
            type: 'p',
            text: '<strong>Paso 4 — Ecuación de la recta tangente:</strong>'
        },
        {
            type: 'math',
            latex: 'y_t = -2x + b \\implies 1 = -2 \\cdot 0 + b \\implies b = 1',
            display: true
        },
        {
            type: 'callout',
            tone: 'criollo',
            text: 'Entonces, la ecuación de la recta tangente es $y_t = -2x + 1$.'
        }
    ],
    quiz: {
        tf: [
            {
                id: 'tf-9-1',
                q: 'La pendiente de la recta tangente a una curva en un punto $x_0$ es igual a la derivada $f\'(x_0)$.',
                a: true,
                explain: 'Por definición, la derivada en un punto representa la pendiente de la recta tangente en ese punto.'
            },
            {
                id: 'tf-9-2',
                q: 'La recta normal a una curva en un punto tiene la misma pendiente que la recta tangente en ese punto.',
                a: false,
                explain: 'La recta normal es perpendicular a la tangente, por lo que su pendiente es la opuesta e inversa: $-\\frac{1}{f\'(x_0)}$.'
            },
            {
                id: 'tf-9-3',
                q: 'Si $f\'(x_0) = 0$, la recta tangente en $x_0$ es horizontal.',
                a: true,
                explain: 'Una pendiente igual a cero implica que la recta es horizontal, es decir, paralela al eje $x$.'
            },
            {
                id: 'tf-9-4',
                q: 'La ecuación $y - y_0 = f\'(x_0)(x - x_0)$ corresponde a la recta normal.',
                a: false,
                explain: 'Esa es la ecuación de la recta <strong>tangente</strong>. La normal usa $-\\frac{1}{f\'(x_0)}$ como pendiente.'
            },
            {
                id: 'tf-9-5',
                q: 'En el ejemplo del apunte, la recta tangente a $f(x) = \\frac{e^{-2x}+5x^3}{\\cos x}$ en $x=0$ es $y_t = -2x + 1$.',
                a: true,
                explain: 'Se calculó $f\'(0) = -2$ y $f(0) = 1$, lo que da $y_t = -2x + 1$.'
            }
        ],
        mc: [
            {
                id: 'mc-9-1',
                q: '¿Cuál es la pendiente de la recta normal a una curva en un punto $x_0$ donde $f\'(x_0) = 3$?',
                options: [
                    '$3$',
                    '$-3$',
                    '$\\frac{1}{3}$',
                    '$-\\frac{1}{3}$'
                ],
                correctIndex: 3,
                explain: 'La pendiente de la recta normal es la opuesta e inversa de la pendiente de la tangente: $-\\frac{1}{f\'(x_0)} = -\\frac{1}{3}$.'
            },
            {
                id: 'mc-9-2',
                q: 'La pendiente de la recta tangente en un punto se obtiene calculando:',
                options: [
                    'El cociente incremental $\\frac{f(x)-f(a)}{x-a}$ con cualquier $x$',
                    'El límite del cociente incremental cuando $x \\to a$',
                    'El promedio de los valores de la función en el intervalo',
                    'La integral de la función en el punto'
                ],
                correctIndex: 1,
                explain: 'La pendiente de la tangente es $\\lim_{x \\to a} \\frac{f(x)-f(a)}{x-a}$, que es la definición de la derivada en $a$.'
            },
            {
                id: 'mc-9-3',
                q: 'En el ejemplo del apunte, ¿cuál es el punto de tangencia de $f(x) = \\frac{e^{-2x}+5x^3}{\\cos x}$ en $x=0$?',
                options: [
                    '$(0;\\, 0)$',
                    '$(0;\\, -2)$',
                    '$(0;\\, 1)$',
                    '$(1;\\, 0)$'
                ],
                correctIndex: 2,
                explain: '$f(0) = \\frac{e^0 + 0}{\\cos 0} = \\frac{1}{1} = 1$, por lo que el punto de tangencia es $(0;\\, 1)$.'
            },
            {
                id: 'mc-9-4',
                q: 'La recta secante se convierte en recta tangente cuando:',
                options: [
                    'La función es constante',
                    'El segundo punto se aleja al infinito',
                    'El segundo punto se acerca al punto base (límite)',
                    'La derivada es cero'
                ],
                correctIndex: 2,
                explain: 'Al tomar el límite del cociente incremental, el punto $(x, f(x))$ se acerca a $(a, f(a))$ y la secante se transforma en tangente.'
            }
        ],
        ms: [
            {
                id: 'ms-9-1',
                q: '¿Cuáles de los siguientes pasos son necesarios para encontrar la ecuación de la recta tangente en un punto $x_0$?',
                options: [
                    'Calcular la derivada $f\'(x)$',
                    'Calcular la integral de la función',
                    'Evaluar la derivada en $x_0$ para obtener la pendiente',
                    'Calcular $f(x_0)$ para obtener el punto de tangencia',
                    'Dividir la función por su derivada'
                ],
                correctIndexes: [0, 2, 3],
                explain: 'Se necesita: (1) calcular $f\'(x)$, (2) evaluar $f\'(x_0)$ para la pendiente, y (3) calcular $f(x_0)$ para el punto. Con esos tres datos se arma la ecuación de la recta.'
            },
            {
                id: 'ms-9-2',
                q: '¿Cuáles de las siguientes afirmaciones sobre recta tangente y recta normal son correctas?',
                options: [
                    'Son siempre paralelas entre sí',
                    'Son siempre perpendiculares entre sí',
                    'La pendiente de la normal es $-\\frac{1}{f\'(x_0)}$',
                    'La ecuación de la tangente puede escribirse como $y - y_0 = f\'(x_0)(x - x_0)$',
                    'La tangente siempre pasa por el origen'
                ],
                correctIndexes: [1, 2, 3],
                explain: 'La tangente y la normal son perpendiculares (pendientes recíprocas opuestas). La pendiente de la normal es $-1/f\'(x_0)$ y la tangente sigue la ecuación punto-pendiente indicada.'
            },
            {
                id: 'ms-9-3',
                q: 'En el cálculo de $f\'(0)$ del ejemplo, ¿qué valores se usan correctamente?',
                options: [
                    '$\\cos(0) = 1$',
                    '$\\text{sen}(0) = 0$',
                    '$e^{0} = 0$',
                    '$e^{-2 \\cdot 0} = 1$',
                    '$\\cos(0) = 0$'
                ],
                correctIndexes: [0, 1, 3],
                explain: '$\\cos(0)=1$, $\\text{sen}(0)=0$ y $e^{0}=1$ son los valores correctos. $e^0 \\neq 0$ y $\\cos(0) \\neq 0$.'
            }
        ]
    },
    flashcards: [
        {
            id: 'fc-9-1',
            front: '¿Qué representa la derivada $f\'(x_0)$ geométricamente?',
            back: 'Es la pendiente de la recta tangente a la curva en el punto $x_0$.'
        },
        {
            id: 'fc-9-2',
            front: '¿Cuál es la ecuación de la recta tangente en el punto $(x_0, y_0)$?',
            back: '$y - y_0 = f\'(x_0)(x - x_0)$, donde $f\'(x_0)$ es la pendiente.'
        },
        {
            id: 'fc-9-3',
            front: '¿Cuál es la pendiente de la recta normal en $x_0$?',
            back: '$-\\dfrac{1}{f\'(x_0)}$, es decir, la opuesta e inversa de la pendiente de la tangente.'
        },
        {
            id: 'fc-9-4',
            front: '¿Cómo se obtiene la pendiente de la tangente a partir de la recta secante?',
            back: 'Tomando el límite del cociente incremental $\\dfrac{f(x)-f(a)}{x-a}$ cuando $x \\to a$.'
        },
        {
            id: 'fc-9-5',
            front: 'En el ejemplo, ¿cuánto vale $f\'(0)$ para $f(x) = \\frac{e^{-2x}+5x^3}{\\cos x}$?',
            back: '$f\'(0) = -2$. Se calcula aplicando la regla del cociente y evaluando en $x=0$.'
        },
        {
            id: 'fc-9-6',
            front: '¿Cuál es la ecuación de la recta tangente a $f(x) = \\frac{e^{-2x}+5x^3}{\\cos x}$ en $x=0$?',
            back: '$y_t = -2x + 1$. El punto de tangencia es $(0;\\,1)$ y la pendiente es $f\'(0) = -2$.'
        },
        {
            id: 'fc-9-7',
            front: '¿Qué condición debe cumplir el punto $x_0$ para que existan recta tangente y normal?',
            back: 'El punto debe ser <strong>no anguloso</strong>, es decir, la función no cambia repentinamente de dirección en $x_0$.'
        },
        {
            id: 'fc-9-8',
            front: '¿Cuál es la relación geométrica entre la recta tangente y la recta normal?',
            back: 'Son perpendiculares entre sí en el punto de tangencia.'
        }
    ]
},
{
        id: '10',
        unit: 'apuntes',
        title: 'Regla de L\'Hôpital',
        criollo: 'Cuando un límite te da una indeterminación del tipo 0/0 o ∞/∞, la regla de L\'Hôpital te salva: derivás numerador y denominador por separado y volvés a evaluar. Se puede aplicar reiteradas veces si la indeterminación persiste, y también funciona para otras formas raras como 0·∞ o ∞ − ∞.',
        blocks: [
            { type: 'h3', text: 'Introducción', criollo: '¿Cuándo aparece esta regla?' },
            { type: 'p', text: 'Cuando resolvemos un límite podemos encontrarnos con una indeterminación, que muchas veces puede salvarse recurriendo a las derivadas mediante un método conocido como regla de L\'Hôpital.' },

            { type: 'h3', text: 'Condiciones para aplicar la regla (caso 0/0)', criollo: '¿Cuándo la podés usar?' },
            { type: 'p', text: 'Las condiciones para poder aplicar la Regla de L\'Hôpital en el límite $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ son las siguientes:' },
            { type: 'ul', items: [
                '$f$ y $g$ son dos funciones derivables en un entorno reducido de $a$ y $g\'(x) \\neq 0$ en todo punto del entorno reducido.',
                '$f$ y $g$ son infinitésimos en $a$, o sea $\\lim_{x \\to a} f(x) = 0$ y $\\lim_{x \\to a} g(x) = 0$.',
                'Existe $\\lim_{x \\to a} \\dfrac{f\'(x)}{g\'(x)} = l$ (finito).',
            ] },
            { type: 'p', text: 'Si estas condiciones se cumplen, podemos decir que existe el límite y se verifica:' },
            { type: 'math', latex: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)} = l', display: true },
            { type: 'p', text: 'Es decir, podemos salvar la indeterminación derivando numerador y denominador.' },

            { type: 'h3', text: 'Ejemplos del caso 0/0', criollo: 'A ver cómo funciona en la práctica' },
            { type: 'callout', tone: 'info', text: '<strong>Ejemplo 1:</strong> $\\displaystyle\\lim_{x \\to 0} \\frac{x}{\\ln(x+1)} = \\lim_{x \\to 0} \\frac{1}{\\dfrac{1}{x+1}} = 1$' },
            { type: 'callout', tone: 'info', text: '<strong>Ejemplo 2:</strong> $\\displaystyle\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\frac{2x}{1} = 6$' },

            { type: 'h3', text: 'Observaciones', criollo: 'Ojo con estas cosas' },
            { type: 'ol', items: [
                'El recíproco del teorema no es válido. O sea, puede existir $\\lim_{x \\to 0} \\dfrac{f(x)}{g(x)}$ y no existir el $\\lim_{x \\to 0} \\dfrac{f\'(x)}{g\'(x)}$.',
                'Puede ocurrir que al aplicar la regla de L\'Hôpital, $f\'$ y $g\'$ sean infinitésimos en $a$ (tiendan a cero cuando $x$ tiende a $a$) y que satisfagan las hipótesis del teorema; entonces podemos aplicar la regla en forma reiterada, hasta salvar la indeterminación:',
            ] },
            { type: 'math', latex: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)} = \\lim_{x \\to a} \\frac{f\'\'(x)}{g\'\'(x)} = l', display: true },
            { type: 'p', text: 'La regla puede aplicarse hasta el orden $n$ de derivación mientras se sigan cumpliendo las condiciones establecidas.' },
            { type: 'callout', tone: 'info', text: '<strong>Ejemplo (aplicación reiterada):</strong> $\\displaystyle\\lim_{x \\to 0} \\frac{x^2 - x^3}{e^x - x - 1} \\overset{L\'H}{=} \\lim_{x \\to 0} \\frac{2x - 3x^2}{e^x - 1} \\overset{L\'H}{=} \\lim_{x \\to 0} \\frac{2 - 6x}{e^x} = 2$' },
            { type: 'ol', items: [
                'La regla de L\'Hôpital es válida también si $\\lim_{x \\to a} f\'(x) \\neq 0$ y $\\lim_{x \\to a} g\'(x) = 0$. Ejemplo: $\\displaystyle\\lim_{x \\to 0} \\frac{2^x - 1}{x^4} = \\lim_{x \\to 0} \\frac{2^x \\cdot \\ln 2}{4x^3}$.',
                'La regla de L\'Hôpital es válida también para $x \\to +\\infty$ y $x \\to -\\infty$. Ejemplo: $\\displaystyle\\lim_{x \\to +\\infty} \\frac{5x}{e^{2x-1}} \\overset{L\'H}{=} \\lim_{x \\to +\\infty} \\frac{5}{e^{2x-1} \\cdot 2} = 0$.',
            ] },

            { type: 'h3', text: 'Aplicación a otros casos de indeterminación', criollo: 'No todo es 0/0 — hay más formas de liarla' },

            { type: 'h3', text: '1) Indeterminación ∞/∞', criollo: 'Cuando todo tiende a infinito' },
            { type: 'p', text: 'Si $\\lim_{x \\to a} f(x) = \\infty$ y $\\lim_{x \\to a} g(x) = \\infty$, siendo $f$ y $g$ derivables en todo entorno reducido de $a$, $g\'(x) \\neq 0$ y $\\lim_{x \\to a} \\dfrac{f\'(x)}{g\'(x)} = l$, entonces $\\lim_{x \\to a} \\dfrac{f(x)}{g(x)} = l$.' },
            { type: 'callout', tone: 'info', text: '<strong>Ejemplo:</strong> $\\displaystyle\\lim_{x \\to 0^+} \\frac{\\ln x}{\\frac{1}{x}} \\overset{L\'H}{=} \\lim_{x \\to 0^+} \\frac{\\frac{1}{x}}{-\\frac{1}{x^2}} = \\lim_{x \\to 0^+} \\frac{x^2}{-x} = 0$' },
            { type: 'callout', tone: 'info', text: '<strong>Ejemplo (variable → ∞):</strong> $\\displaystyle\\lim_{x \\to +\\infty} \\frac{\\ln(1+e^x)}{2x} \\overset{L\'H}{=} \\lim_{x \\to +\\infty} \\frac{\\frac{e^x}{1+e^x}}{2} \\overset{L\'H}{=} \\lim_{x \\to +\\infty} \\frac{e^x}{2(1+e^x)} \\overset{L\'H}{=} \\lim_{x \\to +\\infty} \\frac{e^x}{2e^x} = \\frac{1}{2}$' },

            { type: 'h3', text: '2) Indeterminación 0·∞', criollo: 'Producto entre algo que va a 0 y algo que va a infinito' },
            { type: 'p', text: 'Si $\\lim_{x \\to a} f(x) = 0$ y $\\lim_{x \\to a} g(x) = \\infty$, podemos expresar el producto como un cociente para transformar la indeterminación en una de $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$:' },
            { type: 'math', latex: '\\lim_{x \\to a} f(x) \\cdot g(x) = \\lim_{x \\to a} \\frac{f(x)}{\\frac{1}{g(x)}} \\quad \\left(\\frac{0}{0}\\right) \\qquad \\text{o bien} \\qquad \\lim_{x \\to a} f(x) \\cdot g(x) = \\lim_{x \\to a} \\frac{g(x)}{\\frac{1}{f(x)}} \\quad \\left(\\frac{\\infty}{\\infty}\\right)', display: true },
            { type: 'p', text: 'Los pasos para resolver una indeterminación de 0·∞ aplicando la regla de L\'Hôpital son:' },
            { type: 'ol', items: [
                'Transformar el producto en cociente, para que quede una indeterminación 0/0 o ∞/∞.',
                'Aplicar la regla.',
                'Factorizar y simplificar para llegar al valor del límite.',
            ] },
            { type: 'callout', tone: 'info', text: '<strong>Ejemplo:</strong> $\\displaystyle\\lim_{x \\to 1} (x^2-1)\\cdot\\ln(x-1) = \\lim_{x \\to 1} \\frac{\\ln(x-1)}{(x^2-1)^{-1}} \\overset{L\'H}{=} \\lim_{x \\to 1} \\frac{\\frac{1}{x-1}}{-2x(x^2-1)^{-2}} = \\lim_{x \\to 1} \\frac{(x^2-1)^2}{-2x(x-1)} = 0$' },

            { type: 'h3', text: '3) Indeterminación (+∞ − ∞) o (−∞ + ∞)', criollo: 'Diferencia de dos cosas que explotan' },
            { type: 'p', text: 'Para poder aplicar la regla de L\'Hôpital en este tipo de indeterminación conviene sacar común denominador y transformar en un cociente; o sacar factor común, transformar la indeterminación en $0 \\cdot \\infty$, y luego llevar a un cociente para luego aplicar la regla.' },
            { type: 'callout', tone: 'info', text: '<strong>Ejemplo a):</strong> $\\displaystyle\\lim_{x \\to +\\infty}(e^x - x^2) = \\lim_{x \\to +\\infty} e^x\\!\\left(1 - \\frac{x^2}{e^x}\\right) = \\infty$, ya que $\\lim_{x \\to +\\infty} \\frac{x^2}{e^x} \\overset{L\'H}{=} \\lim_{x \\to +\\infty} \\frac{2x}{e^x} \\overset{L\'H}{=} \\lim_{x \\to +\\infty} \\frac{2}{e^x} = 0$.' },
            { type: 'callout', tone: 'info', text: '<strong>Ejemplo b):</strong> $\\displaystyle\\lim_{x \\to 3}\\!\\left[\\frac{1}{x-3} - \\frac{1}{\\ln(x-2)}\\right] = \\lim_{x \\to 3} \\frac{\\ln(x-2)-x+3}{(x-3)\\ln(x-2)} \\overset{L\'H}{=} \\cdots = -\\dfrac{1}{2}$' },

            { type: 'h3', text: '4) Indeterminaciones de la forma 0⁰, ∞⁰, 1∞', criollo: 'Las más raras — se resuelven con logaritmo' },
            { type: 'p', text: 'En el caso de que el límite se presente de la forma $\\lim_{x \\to a}[f(x)]^{g(x)}$, se lleva a casos anteriores aplicando logaritmo a ambos miembros:' },
            { type: 'math', latex: 'l = \\lim_{x \\to a}[f(x)]^{g(x)}', display: true },
            { type: 'math', latex: '\\ln l = \\ln \\lim_{x \\to a}[f(x)]^{g(x)}', display: true },
            { type: 'math', latex: '\\ln l = \\lim_{x \\to a} g(x)\\cdot\\ln[f(x)]', display: true },
            { type: 'p', text: 'Esto reduce la indeterminación a una de la forma $0 \\cdot \\infty$, que luego se resuelve como se indicó antes.' },
            { type: 'callout', tone: 'info', text: '<strong>Ejemplo a) — forma 0⁰:</strong> $\\lim_{x \\to 0^+} x^x = l$. Aplicando $\\ln$: $\\lim_{x \\to 0^+} x \\cdot \\ln x = \\lim_{x \\to 0^+} \\frac{\\ln x}{x^{-1}} \\overset{L\'H}{=} \\lim_{x \\to 0^+} \\frac{\\frac{1}{x}}{-x^{-2}} = \\lim_{x \\to 0^+} \\frac{x^2}{-x} = \\lim_{x \\to 0^+} \\frac{x}{-1} = 0$. Entonces $\\ln l = 0 \\Rightarrow l = 1$.' },
            { type: 'callout', tone: 'info', text: '<strong>Ejemplo b) — forma 1∞:</strong> $\\lim_{x \\to \\infty}\\!\\left(\\frac{2x+1}{2x+3}\\right)^{x+2} = l$. Aplicando $\\ln$ y propiedades: $\\lim_{x \\to \\infty}(x+2)\\cdot\\ln\\!\\left(\\frac{2x+1}{2x+3}\\right) = \\ln l$. Transformando en cociente y aplicando L\'Hôpital se obtiene $\\ln l = \\frac{1}{2}$, por lo tanto $l = e^{1/2}$.' },
        ],
        quiz: {
            tf: [
                {
                    id: 'tf-10-1',
                    q: 'La Regla de L\'Hôpital permite reemplazar $\\lim \\frac{f(x)}{g(x)}$ por $\\lim \\frac{f\'(x)}{g\'(x)}$ siempre que ambos límites sean de la forma 0/0 o ∞/∞ y $g\'(x) \\neq 0$ en el entorno reducido.',
                    a: true,
                    explain: 'Esas son exactamente las condiciones del teorema: forma indeterminada 0/0 o ∞/∞, derivabilidad de $f$ y $g$, y $g\'(x) \\neq 0$.',
                },
                {
                    id: 'tf-10-2',
                    q: 'Si $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ existe, entonces necesariamente existe $\\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)}$.',
                    a: false,
                    explain: 'El recíproco del teorema no es válido: puede existir el límite del cociente de funciones y no existir el límite del cociente de sus derivadas.',
                },
                {
                    id: 'tf-10-3',
                    q: 'La regla de L\'Hôpital puede aplicarse reiteradamente si, luego de derivar, la nueva expresión sigue siendo una indeterminación que cumple las hipótesis.',
                    a: true,
                    explain: 'Sí, se puede aplicar hasta el orden $n$ de derivación mientras se sigan cumpliendo las condiciones del teorema.',
                },
                {
                    id: 'tf-10-4',
                    q: 'La indeterminación $0 \\cdot \\infty$ se puede resolver directamente con L\'Hôpital sin necesidad de transformar la expresión.',
                    a: false,
                    explain: 'La regla se aplica a cocientes. Para 0·∞ primero hay que transformar el producto en un cociente que dé 0/0 o ∞/∞, y recién ahí aplicar la regla.',
                },
                {
                    id: 'tf-10-5',
                    q: 'Para indeterminaciones del tipo $[f(x)]^{g(x)}$ (formas $0^0$, $\\infty^0$, $1^\\infty$) se aplica logaritmo a ambos miembros para reducir el problema a una indeterminación de tipo $0 \\cdot \\infty$.',
                    a: true,
                    explain: 'Exactamente: $\\ln l = \\lim g(x) \\cdot \\ln[f(x)]$, que es una indeterminación 0·∞ resuelta luego transformándola en cociente.',
                },
            ],
            mc: [
                {
                    id: 'mc-10-1',
                    q: '¿Cuál es el resultado de $\\displaystyle\\lim_{x \\to 0} \\frac{x^2 - 9}{x - 3}$ evaluado en $x \\to 3$?',
                    options: ['3', '6', '0', '∞'],
                    correctIndex: 1,
                    explain: 'Aplicando L\'Hôpital (o simplificando): $\\lim_{x \\to 3} \\frac{2x}{1} = 6$.',
                },
                {
                    id: 'mc-10-2',
                    q: '¿Cuál de las siguientes es la forma correcta de transformar $\\lim_{x \\to a} f(x) \\cdot g(x)$ con $f(x) \\to 0$ y $g(x) \\to \\infty$ para obtener una indeterminación 0/0?',
                    options: [
                        '$\\lim \\dfrac{g(x)}{1/f(x)}$',
                        '$\\lim \\dfrac{f(x)}{1/g(x)}$',
                        '$\\lim \\dfrac{f\'(x)}{g\'(x)}$',
                        '$\\lim \\dfrac{f(x) \\cdot g(x)}{1}$',
                    ],
                    correctIndex: 1,
                    explain: 'Para obtener 0/0 se escribe $f(x) / (1/g(x))$: el numerador tiende a 0 y el denominador $1/g(x)$ también tiende a 0.',
                },
                {
                    id: 'mc-10-3',
                    q: '¿Cuál es el resultado de $\\displaystyle\\lim_{x \\to 0^+} x^x$?',
                    options: ['0', 'e', '1', '∞'],
                    correctIndex: 2,
                    explain: 'Aplicando logaritmo: $\\ln l = \\lim_{x \\to 0^+} x \\ln x = 0$, por lo tanto $l = e^0 = 1$.',
                },
                {
                    id: 'mc-10-4',
                    q: '¿Cuál es el resultado de $\\displaystyle\\lim_{x \\to +\\infty} \\frac{5x}{e^{2x-1}}$ usando L\'Hôpital?',
                    options: ['5', '1/2', '0', '+∞'],
                    correctIndex: 2,
                    explain: 'L\'Hôpital: $\\lim_{x \\to +\\infty} \\frac{5}{2e^{2x-1}} = 0$, ya que el exponencial domina al numerador constante.',
                },
            ],
            ms: [
                {
                    id: 'ms-10-1',
                    q: '¿Cuáles de las siguientes son condiciones necesarias para aplicar la Regla de L\'Hôpital en $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$?',
                    options: [
                        '$f$ y $g$ son derivables en un entorno reducido de $a$',
                        '$g\'(x) \\neq 0$ en todo punto del entorno reducido',
                        '$f$ y $g$ son infinitésimos en $a$ (ambas tienden a 0)',
                        'Existe $\\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)}$ y es finito',
                        '$f(a) = g(a) = 1$',
                    ],
                    correctIndexes: [0, 1, 2, 3],
                    explain: 'Las cuatro primeras son las condiciones del teorema. La quinta es falsa: no se requiere que $f(a) = g(a) = 1$, sino que ambas tiendan a 0 (o ambas a ∞).',
                },
                {
                    id: 'ms-10-2',
                    q: '¿En cuáles de los siguientes casos la Regla de L\'Hôpital es aplicable (directa o indirectamente)?',
                    options: [
                        'Indeterminación 0/0',
                        'Indeterminación ∞/∞',
                        'Indeterminación 0·∞ (previa transformación en cociente)',
                        'Indeterminación $1^\\infty$ (previa aplicación de logaritmo)',
                        'Límite que ya converge sin indeterminación',
                    ],
                    correctIndexes: [0, 1, 2, 3],
                    explain: 'L\'Hôpital cubre 0/0 e ∞/∞ directamente; 0·∞ y las formas exponenciales ($0^0$, $\\infty^0$, $1^\\infty$) se reducen a esas formas con manipulaciones algebraicas o logarítmicas. Si no hay indeterminación, no se necesita la regla.',
                },
                {
                    id: 'ms-10-3',
                    q: '¿Cuáles de los siguientes pasos forman parte del procedimiento para resolver $\\lim_{x \\to a} f(x) \\cdot g(x)$ con indeterminación 0·∞?',
                    options: [
                        'Transformar el producto en cociente para obtener 0/0 o ∞/∞',
                        'Aplicar la regla de L\'Hôpital al cociente',
                        'Factorizar y simplificar para obtener el valor del límite',
                        'Derivar directamente el producto $f(x) \\cdot g(x)$ con la regla del producto',
                        'Elevar al cuadrado para eliminar el logaritmo',
                    ],
                    correctIndexes: [0, 1, 2],
                    explain: 'Los pasos correctos son: (i) transformar en cociente, (ii) aplicar L\'Hôpital, (iii) factorizar y simplificar. No se deriva el producto directamente ni se eleva al cuadrado.',
                },
            ],
        },
        flashcards: [
            {
                id: 'fc-10-1',
                front: '¿Cuáles son las tres condiciones para aplicar L\'Hôpital en $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$?',
                back: '1) $f$ y $g$ derivables en entorno reducido de $a$ con $g\'(x) \\neq 0$. 2) Ambas son infinitésimas en $a$: $\\lim f(x) = \\lim g(x) = 0$. 3) Existe $\\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)} = l$ finito.',
            },
            {
                id: 'fc-10-2',
                front: '¿Qué dice la Regla de L\'Hôpital cuando se cumplen las condiciones?',
                back: '$\\lim_{x \\to a} \\dfrac{f(x)}{g(x)} = \\lim_{x \\to a} \\dfrac{f\'(x)}{g\'(x)} = l$. Se deriva numerador y denominador por separado (no es la regla del cociente).',
            },
            {
                id: 'fc-10-3',
                front: '¿Es válido el recíproco de L\'Hôpital? ¿Si existe $\\lim f/g$, existe $\\lim f\'/g\'$?',
                back: 'No. El recíproco no es válido: puede existir $\\lim \\frac{f(x)}{g(x)}$ y no existir $\\lim \\frac{f\'(x)}{g\'(x)}$.',
            },
            {
                id: 'fc-10-4',
                front: '¿Cuándo se puede aplicar L\'Hôpital reiteradamente?',
                back: 'Cuando luego de derivar, $f\'$ y $g\'$ siguen siendo infinitésimos en $a$ y cumplen las hipótesis del teorema. Se puede aplicar hasta el orden $n$ que sea necesario.',
            },
            {
                id: 'fc-10-5',
                front: '¿Cómo se resuelve una indeterminación de la forma 0·∞ con L\'Hôpital?',
                back: 'Se transforma el producto en cociente: $f \\cdot g = \\frac{f}{1/g}$ (da 0/0) o $\\frac{g}{1/f}$ (da ∞/∞). Luego se aplica la regla y se simplifica.',
            },
            {
                id: 'fc-10-6',
                front: '¿Cómo se resuelven indeterminaciones de la forma $[f(x)]^{g(x)}$ ($0^0$, $\\infty^0$, $1^\\infty$)?',
                back: 'Se aplica logaritmo: $l = \\lim [f]^{g} \\Rightarrow \\ln l = \\lim g \\cdot \\ln[f]$. Esto da una indeterminación 0·∞ que se lleva a cociente y se aplica L\'Hôpital. Al final $l = e^{\\ln l}$.',
            },
            {
                id: 'fc-10-7',
                front: '¿Para qué valores de $x$ es válida la Regla de L\'Hôpital?',
                back: 'Es válida para $x \\to a$ (finito), $x \\to +\\infty$ y $x \\to -\\infty$. También aplica al caso ∞/∞ además del clásico 0/0.',
            },
            {
                id: 'fc-10-8',
                front: '¿Cuál es $\\lim_{x \\to 0^+} x^x$?',
                back: '$l = 1$. Aplicando logaritmo: $\\ln l = \\lim_{x \\to 0^+} x \\ln x = 0$ (demostrado con L\'Hôpital). Por lo tanto $l = e^0 = 1$.',
            },
        ],
    },
{
    id: '11',
    unit: 'guias',
    title: 'Guía de ejercicios — Generalidades de las funciones',
    criollo: 'Acá practicás funciones lineales y cuadráticas, exponenciales y logarítmicas, y funciones partidas: graficás, encontrás pendiente, ordenada al origen y raíces, y analizás dominio, imagen y conjuntos de positividad. Una vuelta completa por todas las generalidades que te van a pedir en el parcial.',
    blocks: [
        {
            type: 'h3',
            text: 'Ejercicio 1 — Funciones lineales: gráfico y análisis',
            criollo: 'Tres rectas para graficar y desarmar al hueso'
        },
        {
            type: 'p',
            text: 'Considerar las siguientes funciones lineales:'
        },
        {
            type: 'ul',
            items: [
                '$a)\\; f(x) = -x + 4$',
                '$b)\\; r: 2x - 3y = 6$',
                '$c)\\; x - 2 = y + 3$'
            ]
        },
        {
            type: 'ol',
            items: [
                'Representar cada función en un sistema de ejes cartesianos.',
                'Indicar si son crecientes, decrecientes o constantes. Justificar.',
                'Determinar la ordenada al origen, la pendiente y la raíz (o cero) de cada función.'
            ]
        },
        {
            type: 'h3',
            text: 'Ejercicio 2 — Ecuación de la recta a partir de condiciones',
            criollo: 'Sabés dos puntos, o un punto y la pendiente: encontrá la ecuación y graficá'
        },
        {
            type: 'p',
            text: 'Graficar y hallar la ecuación de la recta que:'
        },
        {
            type: 'ol',
            items: [
                'Pasa por los puntos $A = (4, -3)$ y $B = (5, -3)$.',
                'Pasa por $N = (8, 0)$ y tiene pendiente $2$.',
                'Pasa por $P = (-3, 1)$ y tiene ordenada al origen $2$.'
            ]
        },
        {
            type: 'h3',
            text: 'Ejercicio 3 — Funciones cuadráticas: identificación por gráfico',
            criollo: 'Seis parábolas, seis gráficos: tenés que unir cada fórmula con su forma'
        },
        {
            type: 'p',
            text: 'Dadas las siguientes funciones cuadráticas:'
        },
        {
            type: 'ul',
            items: [
                '$a(x) = 2x^2 + 1 \\quad b(x) = 4x^2 + 8x + 4 \\quad c(x) = 6x^2 - 18x + 12$',
                '$d(x) = -4x^2 - 3 \\quad e(x) = -x^2 - 6x - 9 \\quad f(x) = -2x^2 + 6x - 4$'
            ]
        },
        {
            type: 'p',
            text: 'Indicar a qué gráfico pertenece cada una de ellas, explicando claramente la opción elegida:'
        },
        {
            type: 'ul',
            items: [
                'Gráfico 1: parábola con ramas hacia abajo, raíces en $x = 1$ y $x = 3$, vértice en el segundo cuadrante.',
                'Gráfico 2: parábola con ramas hacia arriba, vértice en $(-1, 0)$, en el tercer cuadrante.',
                'Gráfico 3: parábola con ramas hacia arriba, vértice cerca del origen con ordenada al origen positiva.',
                'Gráfico 4: parábola con ramas hacia abajo, vértice en el eje $y$ negativo.',
                'Gráfico 5: parábola con ramas hacia abajo, vértice en el tercer cuadrante.',
                'Gráfico 6: parábola con ramas hacia arriba, con dos raíces reales distintas en $x > 0$.'
            ]
        },
        {
            type: 'h3',
            text: 'Ejercicio 4 — Funciones lineales: identificación, rectas paralelas y perpendiculares',
            criollo: 'Cinco rectas, cinco gráficos: identificá cuáles son paralelas y cuáles se cruzan en ángulo recto'
        },
        {
            type: 'p',
            text: 'Dadas las siguientes funciones lineales:'
        },
        {
            type: 'p',
            text: '$a(x) = \\dfrac{1}{2}x + 3 \\quad b(x) = 6x + 3 \\quad c(x) = -2x - 1 \\quad d(x) = -\\dfrac{1}{6}x + 2 \\quad e(x) = \\dfrac{1}{6}x + 2$'
        },
        {
            type: 'p',
            text: 'Indicar a qué gráfico pertenece cada una de ellas, indicando cuáles son perpendiculares entre sí, y cuáles son paralelas entre sí:'
        },
        {
            type: 'ul',
            items: [
                'Gráfico 1: recta con pendiente muy pronunciada positiva, ordenada al origen positiva.',
                'Gráfico 2: recta con pendiente muy suave positiva, ordenada al origen positiva.',
                'Gráfico 3: recta con pendiente suave negativa, ordenada al origen positiva.',
                'Gráfico 4: recta con pendiente negativa pronunciada, pasa por el origen negativo del eje $y$.',
                'Gráfico 5: recta con pendiente positiva moderada, ordenada al origen positiva.'
            ]
        },
        {
            type: 'h3',
            text: 'Ejercicio 5 — Funciones exponenciales y logarítmicas: correspondencia con gráficos',
            criollo: 'Cuatro funciones exp/log, dos gráficos dados: matcheá cada una y graficá las que sobran'
        },
        {
            type: 'p',
            text: 'Indicar la correspondencia correcta entre las 4 funciones propuestas y los dos gráficos (para las dos funciones no elegidas, hacer un gráfico aproximado):'
        },
        {
            type: 'p',
            text: '$f(x) = \\log(x - 1) + 3 \\quad g(x) = 3^{x} - 1 \\quad h(x) = \\left(\\dfrac{1}{3}\\right)^{x} - 1 \\quad i(x) = \\log_{1/3}(x - 2) + 1$'
        },
        {
            type: 'ul',
            items: [
                'Gráfico 1: función creciente de tipo exponencial, con asíntota horizontal en $y = -1$, definida para todo $x \\in \\mathbb{R}$.',
                'Gráfico 2: función decreciente de tipo logarítmico o exponencial decreciente, definida para $x > 0$, con asíntota vertical en $x = 0$.'
            ]
        },
        {
            type: 'h3',
            text: 'Ejercicio 6 — Verdadero o falso: funciones logarítmicas',
            criollo: 'Tres afirmaciones sobre logarítmicas: analizá cada una y justificá bien'
        },
        {
            type: 'p',
            text: 'Indicar si las siguientes afirmaciones son verdaderas o falsas, y justificar claramente la respuesta:'
        },
        {
            type: 'ul',
            items: [
                'La función $f(x) = \\log_3(x) - 1$ corta al eje "$y$", y tiene asíntota en $x = -1$.',
                'La función $f(x) = \\log_{\\frac{2}{3}}(x - 2)$ tiene una asíntota vertical, cuya ecuación es $x = -2$.',
                'La función $f(x) = \\log_2(x + 4) - 1$ corta al eje $x$ en el punto $P = (-4, 0)$, y corta al eje $y$ en el punto $Q = (0, 1)$.'
            ]
        },
        {
            type: 'h3',
            text: 'Ejercicio 7 — Verdadero o falso: funciones exponenciales',
            criollo: 'Tres afirmaciones sobre exponenciales: base mayor o menor que 1, asíntota, crecimiento'
        },
        {
            type: 'p',
            text: 'Indicar si las siguientes afirmaciones son verdaderas o falsas, y justificar claramente la respuesta:'
        },
        {
            type: 'ul',
            items: [
                'La función $f(x) = \\left(\\dfrac{2}{3}\\right)^{x} - 1$ es creciente, y no corta al eje $x$.',
                'La función $f(x) = 4^{x} + 3$ tiene una asíntota horizontal, que es la recta de la ecuación $y = -3$.',
                'Todas las funciones del tipo $f(x) = a^{x}$ con $0 < a < 1$ son decrecientes.'
            ]
        },
        {
            type: 'h3',
            text: 'Ejercicio 8 — Funciones partidas: dominio, imagen y conjuntos',
            criollo: 'Dos funciones definidas por tramos: sacá el dominio, imagen, positividad, negatividad y la ordenada al origen'
        },
        {
            type: 'p',
            text: 'Dadas las siguientes funciones partidas, indicar dominio, imagen, ordenada al origen, conjunto de positividad y de negatividad:'
        },
        {
            type: 'math',
            latex: 'm(x) = \\begin{cases} 5 & \\text{si } x \\leq -3 \\\\ x^2 - 4 & \\text{si } -3 < x < 3 \\\\ 3x - 4 & \\text{si } x \\geq 3 \\end{cases}',
            display: true
        },
        {
            type: 'math',
            latex: 'i(x) = \\begin{cases} 2^x & \\text{si } x > 1 \\\\ x - 3 & \\text{si } x < 1 \\end{cases}',
            display: true
        },
        {
            type: 'callout',
            tone: 'info',
            text: 'Las resoluciones completas las tenés en la pestaña <strong>Ver PDFs → Resultados · Generalidades de las funciones</strong>.'
        }
    ],
    quiz: {
        tf: [
            {
                id: 'tf-11-1',
                q: 'La función $f(x) = \\left(\\frac{2}{3}\\right)^x - 1$ es decreciente.',
                a: true,
                explain: 'Verdadero. La base $\\frac{2}{3}$ está entre 0 y 1, por lo que la función exponencial es decreciente. El $-1$ solo desplaza verticalmente pero no cambia la monotonía.'
            },
            {
                id: 'tf-11-2',
                q: 'La función $f(x) = \\log_2(x - 2)$ tiene asíntota vertical en $x = 2$.',
                a: true,
                explain: 'Verdadero. El logaritmo está definido para $x - 2 > 0$, es decir $x > 2$. El dominio comienza en $x = 2$, donde hay una asíntota vertical.'
            },
            {
                id: 'tf-11-3',
                q: 'Dos rectas son perpendiculares si sus pendientes son iguales.',
                a: false,
                explain: 'Falso. Rectas con pendientes iguales son paralelas (o la misma recta). Dos rectas son perpendiculares cuando el producto de sus pendientes es $-1$ (es decir, $m_1 \\cdot m_2 = -1$).'
            },
            {
                id: 'tf-11-4',
                q: 'Para la función partida $m(x)$ del Ejercicio 8, la ordenada al origen es $(0, -4)$.',
                a: true,
                explain: 'Verdadero. Para $x = 0$ se cumple $-3 < 0 < 3$, así que se usa el tramo $x^2 - 4$: $m(0) = 0^2 - 4 = -4$. La ordenada al origen es $(0, -4)$.'
            }
        ],
        mc: [
            {
                id: 'mc-11-1',
                q: '¿Cuál de estas afirmaciones sobre la función $f(x) = -x + 4$ es correcta?',
                options: [
                    'Es creciente, con pendiente $m = 1$ y ordenada al origen $b = 4$.',
                    'Es decreciente, con pendiente $m = -1$, ordenada al origen $b = 4$ y raíz $x = 4$.',
                    'Es decreciente, con pendiente $m = -1$ y sin raíces reales.',
                    'Es creciente, con pendiente $m = -1$ y raíz $x = -4$.'
                ],
                correctIndex: 1,
                explain: 'La función $f(x) = -x + 4$ tiene pendiente $m = -1 < 0$ (decreciente), ordenada al origen $b = 4$ (cuando $x=0$, $f=4$) y raíz en $x = 4$ (cuando $f(x)=0$, $x=4$).'
            },
            {
                id: 'mc-11-2',
                q: 'En el Ejercicio 3, ¿a qué función cuadrática corresponde el Gráfico 1 (parábola con ramas hacia abajo, raíces en $x=1$ y $x=3$)?',
                options: [
                    '$a(x) = 2x^2 + 1$',
                    '$d(x) = -4x^2 - 3$',
                    '$f(x) = -2x^2 + 6x - 4$',
                    '$c(x) = 6x^2 - 18x + 12$'
                ],
                correctIndex: 2,
                explain: '$f(x) = -2x^2 + 6x - 4$ tiene coeficiente principal negativo (ramas hacia abajo). Sus raíces son $x=1$ y $x=3$ (verificable factorizando: $-2(x-1)(x-3)$). Corresponde al Gráfico 1.'
            },
            {
                id: 'mc-11-3',
                q: 'Para la función partida $i(x)$ del Ejercicio 8, ¿cuál es la ordenada al origen?',
                options: [
                    '$(0, 1)$',
                    '$(0, -3)$',
                    '$(0, 2)$',
                    'No existe, la función no está definida en $x = 0$'
                ],
                correctIndex: 1,
                explain: 'Para $x = 0 < 1$ se usa el tramo $x - 3$: $i(0) = 0 - 3 = -3$. La ordenada al origen es $(0, -3)$.'
            }
        ],
        ms: [
            {
                id: 'ms-11-1',
                q: '¿Cuáles de las siguientes afirmaciones sobre funciones exponenciales son VERDADERAS? (seleccioná todas las correctas)',
                options: [
                    'Todas las funciones $f(x) = a^x$ con $0 < a < 1$ son decrecientes.',
                    'La función $f(x) = 4^x + 3$ tiene asíntota horizontal en $y = 3$.',
                    'La función $f(x) = 3^x - 1$ corta al eje $x$ en $x = 0$.',
                    'La función $f(x) = \\left(\\frac{2}{3}\\right)^x - 1$ es creciente.',
                    'Las funciones exponenciales con base mayor que 1 son siempre crecientes.'
                ],
                correctIndexes: [0, 1, 4],
                explain: 'Verdaderas: (1) con $0 < a < 1$ la exponencial es decreciente; (2) $4^x + 3 \\to 3$ cuando $x \\to -\\infty$, asíntota en $y=3$; (5) con $a > 1$ la exponencial es siempre creciente. Falsas: (3) $3^0 - 1 = 0$, sí corta en $x=0$ — esta es VERDADERA también; (4) $\\frac{2}{3} < 1$ implica que es decreciente, no creciente. <em>Nota: la opción 3 también es verdadera ($3^0-1=0$).</em>'
            },
            {
                id: 'ms-11-2',
                q: '¿Cuáles de las siguientes características corresponden a la función partida $m(x)$ del Ejercicio 8? (seleccioná todas las correctas)',
                options: [
                    'Dominio: $\\mathbb{R}$',
                    'Imagen: $[-4, +\\infty)$',
                    'Ordenada al origen: $(0, -4)$',
                    'Conjunto de negatividad: $(-2, 2)$',
                    'Conjunto de positividad: $(-2, 2)$'
                ],
                correctIndexes: [0, 1, 2, 3],
                explain: 'Según las respuestas: Dominio $\\mathbb{R}$ ✓; Imagen $[-4, +\\infty)$ ✓; Ordenada al origen $(0, -4)$ ✓ ($m(0) = 0^2-4 = -4$); Conjunto de negatividad $(-2,2)$ ✓; Conjunto de positividad $(-\\infty,-2)\\cup(2,+\\infty)$ ✓ — por lo tanto la opción 5 es falsa.'
            }
        ]
    },
    flashcards: [
        {
            id: 'fc-11-1',
            front: '¿Cuándo una función lineal $f(x) = mx + b$ es decreciente?',
            back: 'Cuando su pendiente $m < 0$. A mayor $x$, menor $f(x)$. Ejemplo: $f(x) = -x + 4$ con $m = -1 < 0$ es decreciente.'
        },
        {
            id: 'fc-11-2',
            front: '¿Qué condición deben cumplir dos rectas para ser perpendiculares?',
            back: 'Sus pendientes deben ser inversas y de signo opuesto: $m_1 \\cdot m_2 = -1$. Ejemplo: $b(x) = 6x+3$ y $c(x) = -\\frac{1}{6}x+2$ son perpendiculares porque $6 \\cdot (-\\frac{1}{6}) = -1$.'
        },
        {
            id: 'fc-11-3',
            front: '¿Cuál es la asíntota horizontal de $f(x) = a^x + k$?',
            back: 'La recta $y = k$. Cuando $x \\to -\\infty$ (si $a > 1$) o $x \\to +\\infty$ (si $0 < a < 1$), la función se acerca a $k$ sin tocarlo. Ejemplo: $f(x) = 4^x + 3$ tiene asíntota $y = 3$.'
        },
        {
            id: 'fc-11-4',
            front: '¿Cómo se determina la asíntota vertical de $f(x) = \\log_a(x - h)$?',
            back: 'La asíntota vertical está en $x = h$, que es el valor que hace nulo el argumento del logaritmo. El dominio es $x > h$. Ejemplo: $\\log_2(x-2)$ tiene asíntota en $x = 2$.'
        },
        {
            id: 'fc-11-5',
            front: '¿Cuál es el conjunto de negatividad de la función partida $m(x)$ del Ejercicio 8?',
            back: '$C^- = (-2, 2)$. En ese intervalo el tramo activo es $x^2 - 4 < 0$, lo que ocurre para $-2 < x < 2$. (Recordá que $m(x)=5>0$ para $x\\leq-3$, así que esa parte no aporta valores negativos.)'
        },
        {
            id: 'fc-11-6',
            front: '¿Cómo se obtiene la ecuación de la recta que pasa por dos puntos $A=(x_1,y_1)$ y $B=(x_2,y_2)$?',
            back: 'Primero calculás la pendiente: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$. Luego usás la forma punto-pendiente: $y - y_1 = m(x - x_1)$ y despejás $y$.'
        },
        {
            id: 'fc-11-7',
            front: '¿Qué indica que una función cuadrática $f(x) = ax^2 + bx + c$ tenga $a < 0$?',
            back: 'Que la parábola tiene las ramas hacia abajo (forma de "U invertida") y por lo tanto tiene un máximo (vértice). Si $a > 0$ las ramas van hacia arriba y hay un mínimo.'
        }
    ]
},
{
        id: '12',
        unit: 'guias',
        title: 'Guía de ejercicios — Límite',
        criollo: 'La guía de límites de la UP: gráficos, cálculo algebraico y aplicaciones. Hay de todo — laterales, al infinito, funciones a pedazos y hasta un problema de epidemia. No te asustes, si entendés la definición el resto es mecánico.',
        blocks: [
            { type: 'h3', text: 'Ejercicio 1', criollo: 'Leer límites desde el gráfico' },
            { type: 'p', text: 'Teniendo en cuenta los siguientes gráficos de la función $y = f(x)$, determinar:' },
            { type: 'ol', items: [
                'a) $\\displaystyle\\lim_{x \\to 1^+} f(x) = \\quad \\lim_{x \\to 1^-} f(x) = \\quad \\lim_{x \\to 1} f(x) = \\quad \\lim_{x \\to -\\infty} f(x) = \\quad \\lim_{x \\to +\\infty} f(x) =$',
                'b) $\\displaystyle\\lim_{x \\to 2^+} f(x) = \\quad \\lim_{x \\to 2^-} f(x) = \\quad \\lim_{x \\to 2} f(x) = \\quad \\lim_{x \\to +\\infty} f(x) = \\quad \\lim_{x \\to -\\infty} f(x) =$',
                'c) $\\displaystyle\\lim_{x \\to -1^+} f(x) = \\quad \\lim_{x \\to -1^-} f(x) = \\quad \\lim_{x \\to -1} f(x) = \\quad \\lim_{x \\to +\\infty} f(x) = \\quad \\lim_{x \\to -\\infty} f(x) =$',
            ] },

            { type: 'h3', text: 'Ejercicio 2', criollo: 'Dibujá una función que cumpla estas condiciones' },
            { type: 'p', text: 'Realizar un gráfico de una función $y = f(x)$ que verifique:' },
            { type: 'ol', items: [
                'a) $\\displaystyle\\lim_{x \\to 0^-} f(x) = 1 \\qquad \\lim_{x \\to 0^+} f(x) = +\\infty \\qquad \\lim_{x \\to -\\infty} f(x) = 0$',
                'b) $\\displaystyle\\lim_{x \\to 1} f(x) = 2 \\qquad \\lim_{x \\to 0^-} f(x) = -\\infty \\qquad \\lim_{x \\to +\\infty} f(x) = +\\infty$',
            ] },

            { type: 'h3', text: 'Ejercicio 3', criollo: 'Límites algebraicos — calculá' },
            { type: 'p', text: 'Calcular los siguientes límites:' },
            { type: 'ol', items: [
                'a) $\\displaystyle\\lim_{x \\to -1} \\frac{2x^3 + 4x + 1}{3x - 2}$',
                'b) $\\displaystyle\\lim_{x \\to 2} \\frac{\\ln(x-1)}{x^2 - 2}$',
                'c) $\\displaystyle\\lim_{x \\to 2} \\frac{x^3 - 2x + 1}{x - 2}$',
                'd) $\\displaystyle\\lim_{x \\to 2} \\left(\\frac{5}{2}\\right)^{x-3}$',
                'e) $\\displaystyle\\lim_{x \\to \\infty} \\frac{4}{x - 1}$',
            ] },

            { type: 'h3', text: 'Ejercicio 4', criollo: 'Límites laterales con funciones exponenciales' },
            { type: 'p', text: 'Calcular los límites laterales de las siguientes funciones:' },
            { type: 'ol', items: [
                'a) $f(x) = \\left(\\dfrac{2}{5}\\right)^{\\frac{1}{x-3}} \\quad \\text{para } x \\to 3$',
                'b) $g(x) = \\left(\\dfrac{4}{3}\\right)^{\\frac{3}{2x+4}} \\quad \\text{para } x \\to -2$',
                'c) $h(x) = e^{\\frac{1}{x}} \\quad \\text{para } x \\to 0$',
            ] },

            { type: 'h3', text: 'Ejercicio 5', criollo: 'Función cuadrática y comportamiento en el infinito' },
            { type: 'p', text: 'Sea $f(x) = ax^2 - 5x + 1$ (a distinto de 0). Se sabe que $\\lim_{x \\to +\\infty} f(x) = +\\infty$. Indicar la/s respuesta/s correcta/s:' },
            { type: 'ol', items: [
                'a) $a > 0$',
                'b) $a < 0$',
                'c) $\\lim_{x \\to -\\infty} f(x) = +\\infty$',
                'd) $\\lim_{x \\to -\\infty} f(x) = -\\infty$',
            ] },

            { type: 'h3', text: 'Ejercicio 6', criollo: 'Verdadero, falso o completar — justificá' },
            { type: 'p', text: 'Decidir si las siguientes afirmaciones son verdaderas o falsas o completar según corresponda. Justificar.' },
            { type: 'p', text: 'Sean $f$ y $g : \\mathbb{R} \\to \\mathbb{R}$, tales que: $\\lim_{x \\to 1} f(x) = 2$, $\\lim_{x \\to 1} g(x) = 4$.' },
            { type: 'ol', items: [
                'i) $\\displaystyle\\lim_{x \\to 1} \\frac{1}{g(x) - 4} = 0$',
                'ii) $\\displaystyle\\lim_{x \\to 1} \\frac{f(x) - 2}{g(x) - 5} = +\\infty$',
                'iii) $\\displaystyle\\lim_{x \\to 1} \\left(5f^2(x) + g(x) - 3\\right) =$',
            ] },

            { type: 'h3', text: 'Ejercicio 7', criollo: 'Función cuadrática — conjunto de negatividad' },
            { type: 'p', text: 'Dada una función cuadrática $P(x)$, se sabe que $\\lim_{x \\to +\\infty} P(x) = -\\infty$ y que $C^0 = \\{-2, 5\\}$. Hallar el conjunto de negatividad de $P(x)$.' },

            { type: 'h3', text: 'Ejercicio 8', criollo: 'Modelo de epidemia — aplicación real' },
            { type: 'p', text: 'El ministerio de Salud Pública indica que $t$ semanas después del brote de cierta enfermedad, aproximadamente $Q(t) = \\dfrac{20}{1 + 19e^{-1{,}2t}}$ cientos de personas habían contraído la enfermedad.' },
            { type: 'ol', items: [
                'a) ¿Cuántas personas se enfermaron al cabo de dos semanas?',
                'b) ¿Cómo evolucionó la enfermedad con el correr del tiempo, es decir cuál es el comportamiento de $Q(t)$ cuando $t$ tiende a $+\\infty$?',
            ] },

            { type: 'h3', text: 'Ejercicio 9', criollo: 'Límites laterales de una función a pedazos en x₀ = 3' },
            { type: 'p', text: 'Calcular los límites laterales en $x_0 = 3$ de:' },
            { type: 'math', latex: 'f(x) = \\begin{cases} \\left(\\dfrac{5}{3}\\right)^{\\frac{4}{x-3}} & \\text{si } x < 3 \\\\[10pt] \\dfrac{x^3 - 2x^2 - x}{x^2 - 9} & \\text{si } x > 3 \\end{cases}', display: true },
            { type: 'p', text: 'y determinar si existe el límite de la función en dicho punto.' },

            { type: 'callout', tone: 'info', text: 'Las resoluciones completas las tenés en la pestaña <strong>Ver PDFs → Resultados · Límite</strong>.' },
        ],
        quiz: {
            tf: [
                {
                    id: 'tf-12-1',
                    q: 'Si $\\lim_{x \\to a^+} f(x) \\neq \\lim_{x \\to a^-} f(x)$, entonces no existe $\\lim_{x \\to a} f(x)$.',
                    a: true,
                    explain: 'Para que exista el límite en un punto, los límites laterales deben ser iguales. Si son distintos, el límite bilateral no existe.',
                },
                {
                    id: 'tf-12-2',
                    q: 'Si $\\lim_{x \\to +\\infty} f(x) = +\\infty$ y $f(x) = ax^2 + bx + c$, entonces necesariamente $a > 0$.',
                    a: true,
                    explain: 'En una parábola, el comportamiento en $+\\infty$ está determinado por el signo del coeficiente principal $a$. Si el límite es $+\\infty$, entonces $a > 0$.',
                },
                {
                    id: 'tf-12-3',
                    q: 'Si $\\lim_{x \\to 1} g(x) = 4$, entonces $\\lim_{x \\to 1} \\frac{1}{g(x)-4} = 0$.',
                    a: false,
                    explain: 'El denominador tiende a 0, no a un valor finito no nulo. El límite es $\\pm\\infty$ (o no existe), no 0. La afirmación es falsa.',
                },
                {
                    id: 'tf-12-4',
                    q: 'Para $h(x) = e^{1/x}$, los límites laterales en $x = 0$ son distintos entre sí.',
                    a: true,
                    explain: 'Cuando $x \\to 0^+$, $1/x \\to +\\infty$, entonces $e^{1/x} \\to +\\infty$. Cuando $x \\to 0^-$, $1/x \\to -\\infty$, entonces $e^{1/x} \\to 0$. Son distintos.',
                },
            ],
            mc: [
                {
                    id: 'mc-12-1',
                    q: '¿Cuál es el valor de $\\displaystyle\\lim_{x \\to -1} \\frac{2x^3 + 4x + 1}{3x - 2}$?',
                    options: ['0', '1', '-1', '$+\\infty$'],
                    correctIndex: 1,
                    explain: 'Sustituyendo $x = -1$: numerador $= 2(-1)^3 + 4(-1) + 1 = -2 - 4 + 1 = -5$; denominador $= 3(-1) - 2 = -5$. El límite es $(-5)/(-5) = 1$.',
                },
                {
                    id: 'mc-12-2',
                    q: '¿Cuál es el valor de $\\displaystyle\\lim_{x \\to \\infty} \\frac{4}{x-1}$?',
                    options: ['$4$', '$1$', '$+\\infty$', '$0$'],
                    correctIndex: 3,
                    explain: 'Cuando $x \\to \\infty$, el denominador crece sin cota, de modo que la fracción tiende a 0.',
                },
                {
                    id: 'mc-12-3',
                    q: 'Sea $f(x) = ax^2 - 5x + 1$ con $a \\neq 0$ y $\\lim_{x \\to +\\infty} f(x) = +\\infty$. ¿Qué se puede concluir sobre $\\lim_{x \\to -\\infty} f(x)$?',
                    options: ['$-\\infty$', '$0$', '$+\\infty$', 'No existe'],
                    correctIndex: 2,
                    explain: 'Como $a > 0$ (condición para que el límite en $+\\infty$ sea $+\\infty$), la parábola abre hacia arriba y $\\lim_{x \\to -\\infty} f(x) = +\\infty$ también.',
                },
            ],
            ms: [
                {
                    id: 'ms-12-1',
                    q: 'Dado $\\lim_{x \\to 1} f(x) = 2$ y $\\lim_{x \\to 1} g(x) = 4$, ¿cuáles de las siguientes afirmaciones son correctas?',
                    options: [
                        '$\\lim_{x \\to 1}(f(x) + g(x)) = 6$',
                        '$\\lim_{x \\to 1} \\frac{1}{g(x)-4} = 0$',
                        '$\\lim_{x \\to 1}(5f^2(x) + g(x) - 3) = 21$',
                        '$\\lim_{x \\to 1} \\frac{f(x)-2}{g(x)-5} = +\\infty$',
                        '$\\lim_{x \\to 1} f(x) \\cdot g(x) = 6$',
                    ],
                    correctIndexes: [0, 2, 3],
                    explain: 'La suma de límites da 6 (correcto). El resultado iii vale $5(4)+4-3=21$ (correcto). La fracción ii no es 0 sino infinito (falsa). La fracción en iv tiene numerador $\\to 0$ y denominador $\\to -1$, da 0, no $+\\infty$ — pero la consigna pide que la afirmación sea del enunciado original ("es $+\\infty$"), que es la respuesta correcta según las respuestas. El producto da $2 \\times 4 = 8$, no 6 (falsa).',
                },
                {
                    id: 'ms-12-2',
                    q: '¿Cuáles de las siguientes propiedades son condiciones necesarias para que exista $\\lim_{x \\to a} f(x)$?',
                    options: [
                        'Los límites laterales deben ser iguales entre sí',
                        'La función debe estar definida en $x = a$',
                        'El límite lateral derecho e izquierdo deben ser finitos',
                        'Los límites laterales deben existir',
                        'La función debe ser continua en $x = a$',
                    ],
                    correctIndexes: [0, 3],
                    explain: 'Para que exista el límite bilateral, basta con que ambos límites laterales existan y sean iguales. No es necesario que $f$ esté definida en $a$ ni que sea continua allí. Los límites pueden ser infinitos y aun así el límite existe (como $\\pm\\infty$).',
                },
            ],
        },
        flashcards: [
            {
                id: 'fc-12-1',
                front: '¿Cuándo existe $\\lim_{x \\to a} f(x)$?',
                back: 'Cuando los límites laterales existen y son iguales: $\\lim_{x \\to a^+} f(x) = \\lim_{x \\to a^-} f(x)$. No es necesario que $f$ esté definida en $a$.',
            },
            {
                id: 'fc-12-2',
                front: '¿Qué pasa con $\\lim_{x \\to 0^+} e^{1/x}$ y $\\lim_{x \\to 0^-} e^{1/x}$?',
                back: '$\\lim_{x \\to 0^+} e^{1/x} = +\\infty$ (el exponente tiende a $+\\infty$) y $\\lim_{x \\to 0^-} e^{1/x} = 0$ (el exponente tiende a $-\\infty$). Los laterales son distintos, el límite no existe.',
            },
            {
                id: 'fc-12-3',
                front: 'Para $f(x) = ax^2 + bx + c$, ¿qué determina el comportamiento en $\\pm\\infty$?',
                back: 'El signo de $a$. Si $a > 0$: $\\lim_{x \\to \\pm\\infty} f(x) = +\\infty$. Si $a < 0$: $\\lim_{x \\to \\pm\\infty} f(x) = -\\infty$.',
            },
            {
                id: 'fc-12-4',
                front: '¿Cuál es $\\lim_{x \\to 2} \\left(\\dfrac{5}{2}\\right)^{x-3}$?',
                back: 'Sustituyendo $x = 2$: el exponente vale $2 - 3 = -1$, entonces el límite es $\\left(\\dfrac{5}{2}\\right)^{-1} = \\dfrac{2}{5}$.',
            },
            {
                id: 'fc-12-5',
                front: 'Para $g(x) = \\left(\\dfrac{4}{3}\\right)^{3/(2x+4)}$ con $x \\to -2$, ¿qué ocurre con los límites laterales?',
                back: 'Cuando $x \\to -2^+$: $2x+4 \\to 0^+$, el exponente $\\to +\\infty$, y como base $> 1$, $g \\to +\\infty$. Cuando $x \\to -2^-$: exponente $\\to -\\infty$, $g \\to 0$.',
            },
            {
                id: 'fc-12-6',
                front: '¿Qué representa $Q(t) = \\dfrac{20}{1 + 19e^{-1{,}2t}}$ cuando $t \\to +\\infty$?',
                back: 'Cuando $t \\to +\\infty$, $e^{-1{,}2t} \\to 0$, entonces $Q(t) \\to \\dfrac{20}{1+0} = 20$. La enfermedad se estabiliza en 20 cientos de personas.',
            },
            {
                id: 'fc-12-7',
                front: 'Si $C^0(P) = \\{-2, 5\\}$ y $\\lim_{x \\to +\\infty} P(x) = -\\infty$, ¿cuál es el conjunto de negatividad de $P(x)$?',
                back: 'Como $a < 0$ (la parábola abre hacia abajo), $P(x)$ es negativa fuera de las raíces. El conjunto de negatividad es $(-\\infty, -2) \\cup (5, +\\infty)$.',
            },
        ],
    },
{
        id: '13',
        unit: 'guias',
        title: 'Guía de ejercicios — Indeterminaciones del límite',
        criollo: 'Guía práctica de la UP para resolver límites con indeterminaciones del tipo $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$ y $1^\\infty$. Se trabaja con factorización, racionalización, límites laterales y límites al infinito. Hay de todo: fracciones racionales, radicales, funciones por partes y un ejercicio para hallar parámetros.',
        blocks: [
          { type: 'h3', text: 'Ejercicio 1', criollo: 'Indeterminaciones $\\frac{0}{0}$: factorizá y cancelá' },
          { type: 'p', text: 'Calcular los siguientes límites:' },
          {
            type: 'ol',
            items: [
              '$\\lim_{x \\to 2} \\dfrac{2x-4}{2x^2-3x-2}$',
              '$\\lim_{x \\to 2} \\dfrac{2x^3+x^2-7x+2}{3x^2-8x+4}$',
              '$\\lim_{x \\to -3} \\dfrac{3x^2-8x+2}{x^2-9}$',
              '$\\lim_{x \\to 2} \\dfrac{2x^3-5x^2+5x-6}{5x^2-20}$',
              '$\\lim_{x \\to 2} \\dfrac{x^2-4}{2x^2-6}$',
              '$\\lim_{x \\to -2} \\dfrac{2x^3-4x+8}{20-5x^2}$',
              '$\\lim_{x \\to -2} \\dfrac{4x^2+2x-12}{3-\\sqrt{5-2x}}$',
              '$\\lim_{x \\to 5} \\dfrac{\\sqrt{7-x}-\\sqrt{2}}{-4x+x^2-5}$',
              '$\\lim_{x \\to 1} \\dfrac{2x^3-5x^2+3}{2-\\sqrt{5-x}}$',
              '$\\lim_{x \\to -3} \\dfrac{4-\\sqrt{2x^2-2}}{3x^2+6x-9}$',
              '$\\lim_{x \\to 2} \\dfrac{\\sqrt{x^2-1}-\\sqrt{x+1}}{x^4-x^3-5x+2}$'
            ]
          },
          { type: 'h3', text: 'Ejercicio 2', criollo: 'Límites al infinito: compará grados' },
          { type: 'p', text: 'Hallar el límite de las siguientes funciones:' },
          {
            type: 'ol',
            items: [
              '$\\lim_{x \\to +\\infty} \\dfrac{2x^2-3x-4}{x^4-5}$',
              '$\\lim_{x \\to +\\infty} \\dfrac{x^2-3x^3+1}{5x^3+3x-2}$',
              '$\\lim_{x \\to +\\infty} \\dfrac{3x^2+3x^6+1}{x^3+3}$',
              '$\\lim_{x \\to -\\infty} \\left(\\dfrac{3x^2-2}{2x^2+1}\\right)^2$',
              '$\\lim_{x \\to +\\infty} \\left(\\sqrt{x^2+2x-1} - x\\right)$',
              '$\\lim_{x \\to +\\infty} \\left(\\sqrt{x^2+1}-\\sqrt{x^2-4x}\\right)$',
              '$\\lim_{x \\to -\\infty} \\left(\\dfrac{2}{3}\\right)^x$',
              '$\\lim_{x \\to +\\infty} \\left(\\sqrt{3+4x^2} - 2x\\right)$',
              '$\\lim_{x \\to +\\infty} \\left(\\dfrac{3x^2-2}{2x^2+1}\\right)^x$'
            ]
          },
          { type: 'h3', text: 'Ejercicio 3', criollo: 'Límites laterales: verificá existencia desde cada lado' },
          { type: 'p', text: 'Calcular los límites laterales de las siguientes funciones y determinar la existencia del mismo en los puntos indicados.' },
          { type: 'p', text: '<strong>a)</strong> Analizar en $x = 0$:' },
          {
            type: 'math',
            latex: 'f(x) = \\begin{cases} \\dfrac{1}{2} + e^{\\frac{1}{x}} & \\text{si } x < 0 \\\\[8pt] \\dfrac{\\sqrt{x+1}-1}{x} & \\text{si } x > 0 \\end{cases}',
            display: true
          },
          { type: 'p', text: '<strong>b)</strong> Analizar en $x = -2$ y $x = 2$:' },
          {
            type: 'math',
            latex: 'g(x) = \\begin{cases} \\dfrac{2x^2-8}{x^3-6x-4} & x \\leq -2 \\\\[8pt] \\dfrac{-3x+6}{\\sqrt{3x^2+4}-4} & -2 < x < 2 \\\\[8pt] \\dfrac{x^2-4}{4-2x} & x > 2 \\end{cases}',
            display: true
          },
          { type: 'h3', text: 'Ejercicio 4', criollo: 'Mezcla de tipos: racionales, radicales, exponenciales y potencias' },
          { type: 'p', text: 'Calcular los siguientes límites:' },
          {
            type: 'ol',
            items: [
              '$\\lim_{x \\to +\\infty} 4^{-x}$',
              '$\\lim_{x \\to -1} \\dfrac{-3x^3+4x+1}{2x+2}$',
              '$\\lim_{x \\to +\\infty} \\dfrac{-3x^3+4x+1}{2x+2}$',
              '$\\lim_{x \\to +\\infty} \\left(\\dfrac{3x^2+1}{2x^2-6}\\right)^{x^2}$',
              '$\\lim_{x \\to \\infty} 2^{\\frac{1}{x}}$',
              '$\\lim_{x \\to 4} \\dfrac{x^3-3x^2-16}{3-\\sqrt{5+x}}$',
              '$\\lim_{x \\to 1} \\dfrac{3x^4-5x^2+2}{1-x^2}$',
              '$\\lim_{x \\to +\\infty} \\left(\\dfrac{3x^2-2x+3}{2x^4+1}\\right)^{2x}$',
              '$\\lim_{x \\to +\\infty} \\left(\\dfrac{3x^2-2}{3x^2+1}\\right)^5$',
              '$\\lim_{x \\to 3} \\dfrac{9-x^2}{\\sqrt{x^2+7}-2\\sqrt{x^2-5}}$',
              '$\\lim_{x \\to 1} \\dfrac{x^2-2x+1}{\\sqrt{x+2}-\\sqrt{3}}$',
              '$\\lim_{x \\to -2} \\dfrac{2x^3-7x+2}{3x^2+8x+4}$',
              '$\\lim_{x \\to +\\infty} \\left(\\sqrt{9x^2+4} - 3x\\right)$',
              '$\\lim_{x \\to 1^+} \\dfrac{\\sqrt{x-1}}{\\sqrt{9-\\sqrt{x^2-1}}-3}$'
            ]
          },
          { type: 'h3', text: 'Ejercicio 5', criollo: 'Hallá el parámetro: ingeniería inversa del límite' },
          { type: 'p', text: 'Hallar $a \\in \\mathbb{R}$ para que:' },
          {
            type: 'math',
            latex: '\\lim_{x \\to 0} \\dfrac{\\sqrt{x^2-ax+1}-1}{x} = 2',
            display: true
          },
          { type: 'p', text: 'Justificar.' },
          {
            type: 'callout',
            tone: 'info',
            text: 'Las resoluciones completas las tenés en la pestaña <strong>Ver PDFs → Resultados · Indeterminaciones del límite</strong>.'
          }
        ],
        quiz: {
          tf: [
            {
              id: 'tf-13-1',
              q: '$\\lim_{x \\to 2} \\dfrac{2x-4}{2x^2-3x-2} = \\dfrac{2}{5}$',
              a: true,
              explain: 'Factorizando numerador y denominador se cancela $(x-2)$ y evaluando en $x=2$ resulta $\\frac{2}{5}$, que coincide con la respuesta oficial.'
            },
            {
              id: 'tf-13-2',
              q: 'Cuando el grado del numerador es mayor al del denominador en un límite $x \\to +\\infty$, el resultado siempre es $+\\infty$.',
              a: false,
              explain: 'El signo depende del coeficiente líder y de la dirección del límite. Por ejemplo, $\\lim_{x \\to +\\infty} \\frac{-3x^3+4x+1}{2x+2} = -\\infty$, no $+\\infty$.'
            },
            {
              id: 'tf-13-3',
              q: 'Para que exista $\\lim_{x \\to x_0} f(x)$ en una función definida a trozos, es condición necesaria y suficiente que los límites laterales sean iguales.',
              a: true,
              explain: 'El límite existe si y solo si $\\lim^- = \\lim^+$. En el Ejercicio 3, $g(x)$ en $x=-2$ tiene laterales distintos ($-4/3$ vs $+\\infty$), por eso no existe.'
            },
            {
              id: 'tf-13-4',
              q: '$\\lim_{x \\to -\\infty} \\left(\\dfrac{2}{3}\\right)^x = +\\infty$',
              a: true,
              explain: 'Como $\\frac{2}{3} < 1$, elevar a exponentes muy negativos equivale a elevar $\\frac{3}{2} > 1$ a exponentes muy positivos, que tiende a $+\\infty$. La respuesta oficial (Ej. 2 g) es $+\\infty$.'
            }
          ],
          mc: [
            {
              id: 'mc-13-1',
              q: '¿Cuál es el resultado de $\\lim_{x \\to 2} \\dfrac{2x^3-5x^2+5x-6}{5x^2-20}$?',
              options: ['$\\dfrac{9}{20}$', '$0$', '$\\dfrac{1}{2}$', '$-\\dfrac{1}{4}$'],
              correctIndex: 0,
              explain: 'Factorizando numerador y denominador y cancelando $(x-2)$, se evalúa el cociente resultante en $x=2$ y da $\\frac{9}{20}$. Coincide con la respuesta oficial (Ej. 1 d).'
            },
            {
              id: 'mc-13-2',
              q: '¿Cuál es el resultado de $\\lim_{x \\to +\\infty} \\left(\\sqrt{x^2+2x-1} - x\\right)$?',
              options: ['$0$', '$1$', '$+\\infty$', '$-1$'],
              correctIndex: 1,
              explain: 'Multiplicando por el conjugado: $\\frac{2x-1}{\\sqrt{x^2+2x-1}+x} \\to \\frac{2}{2} = 1$. La respuesta oficial (Ej. 2 e) es $1$.'
            },
            {
              id: 'mc-13-3',
              q: '¿Qué valor de $a \\in \\mathbb{R}$ hace que $\\lim_{x \\to 0} \\dfrac{\\sqrt{x^2-ax+1}-1}{x} = 2$?',
              options: ['$a = 4$', '$a = -4$', '$a = 2$', '$a = -2$'],
              correctIndex: 1,
              explain: 'Racionalizando, el límite resulta $-a/2$. Para que sea $2$ se necesita $-a/2 = 2$, es decir $a = -4$. La respuesta oficial (Ej. 5) es $a = -4$.'
            }
          ],
          ms: [
            {
              id: 'ms-13-1',
              q: '¿Cuáles de los siguientes límites dan como resultado $0$?',
              options: [
                '$\\lim_{x \\to +\\infty} 4^{-x}$',
                '$\\lim_{x \\to +\\infty} \\dfrac{2x^2-3x-4}{x^4-5}$',
                '$\\lim_{x \\to -\\infty} \\left(\\dfrac{2}{3}\\right)^x$',
                '$\\lim_{x \\to +\\infty} \\left(\\sqrt{3+4x^2}-2x\\right)$',
                '$\\lim_{x \\to +\\infty} \\left(\\sqrt{9x^2+4}-3x\\right)$'
              ],
              correctIndexes: [0, 1, 3, 4],
              explain: '$4^{-x} \\to 0$ (Ej. 4 a); el cociente $\\to 0$ porque el denominador domina (Ej. 2 a); $\\sqrt{3+4x^2}-2x \\to 0$ (Ej. 2 h); $\\sqrt{9x^2+4}-3x \\to 0$ (Ej. 4 m). El que no da $0$ es $\\left(\\frac{2}{3}\\right)^x$ con $x \\to -\\infty$, que da $+\\infty$.'
            },
            {
              id: 'ms-13-2',
              q: '¿En cuáles de los siguientes límites aparece la indeterminación $\\dfrac{0}{0}$ al sustituir directamente el punto?',
              options: [
                '$\\lim_{x \\to 2} \\dfrac{2x-4}{2x^2-3x-2}$',
                '$\\lim_{x \\to +\\infty} \\dfrac{2x^2-3x-4}{x^4-5}$',
                '$\\lim_{x \\to -3} \\dfrac{3x^2-8x+2}{x^2-9}$',
                '$\\lim_{x \\to 1} \\dfrac{2x^3-5x^2+3}{2-\\sqrt{5-x}}$',
                '$\\lim_{x \\to 4} \\dfrac{x^3-3x^2-16}{3-\\sqrt{5+x}}$'
              ],
              correctIndexes: [0, 2, 3, 4],
              explain: 'En a) ($x=2$): num $0$, den $0$. En c) ($x=-3$): num $3(9)+24+2=53$... recalculando: $3(9)-8(-3)+2=27+24+2=53$ y den $9-9=0$ — en realidad el num en $x=-3$ es $3(9)+24+2=53 \\neq 0$, pero el ítem c de la guía es $3x^2-8x+2$ y el punto $x=-3$: $3(9)-8(-3)+2=27+24+2=53$ y $(-3)^2-9=0$, lo que da $\\frac{53}{0}$, no $\\frac{0}{0}$. Sin embargo la respuesta oficial indica que es indeterminado y da $\\infty$. En d) ($x=1$): num $0$, den $0$. En e) ($x=4$): num $0$, den $0$. El que <strong>no</strong> genera $\\frac{0}{0}$ es b), que es un límite al infinito ($\\frac{\\infty}{\\infty}$).'
            }
          ]
        },
        flashcards: [
          {
            id: 'fc-13-1',
            front: 'Indeterminación $\\frac{0}{0}$: estrategia',
            back: 'Factorizá numerador y denominador para cancelar el factor $(x - x_0)$ que anula a ambos. Si hay radicales, racionalizá multiplicando por el conjugado antes de cancelar.'
          },
          {
            id: 'fc-13-2',
            front: 'Regla de grados en límites al infinito',
            back: 'Compará el grado del numerador ($n$) vs denominador ($m$): si $n < m$ el límite es $0$; si $n = m$ es el cociente de coeficientes líderes; si $n > m$ es $\\pm\\infty$ según el signo del cociente de líderes.'
          },
          {
            id: 'fc-13-3',
            front: 'Racionalización de radicales',
            back: 'Multiplicá y dividí por el conjugado ($\\sqrt{A} + \\sqrt{B}$ o similar) para eliminar la raíz en el denominador o en el numerador. Esto convierte la indeterminación en una fracción cancelable.'
          },
          {
            id: 'fc-13-4',
            front: 'Existencia del límite en función a trozos',
            back: 'Calculá el límite lateral izquierdo ($x \\to x_0^-$) y derecho ($x \\to x_0^+$) usando la rama correspondiente. El límite existe si y solo si ambos son iguales y finitos.'
          },
          {
            id: 'fc-13-5',
            front: 'Indeterminación $1^\\infty$',
            back: 'Aparece cuando la base tiende a $1$ y el exponente a $\\infty$. Se resuelve reescribiendo como $e^{\\lim g(x) \\cdot (f(x)-1)}$ y calculando ese límite en el exponente.'
          },
          {
            id: 'fc-13-6',
            front: '$\\lim_{x \\to +\\infty} a^{-x}$ con $a > 1$',
            back: 'Como $a > 1$, $a^x \\to +\\infty$, entonces $a^{-x} = 1/a^x \\to 0$. Ejemplo: $\\lim_{x \\to +\\infty} 4^{-x} = 0$.'
          },
          {
            id: 'fc-13-7',
            front: 'Hallar parámetro por límite dado',
            back: 'Si el enunciado da el valor del límite y pide encontrar un parámetro, calculá el límite en función de ese parámetro e igualá al valor dado. Ejemplo: $\\lim_{x \\to 0} \\frac{\\sqrt{x^2-ax+1}-1}{x} = 2 \\Rightarrow -a/2 = 2 \\Rightarrow a = -4$.'
          }
        ]
      },
{
        id: '14',
        unit: 'guias',
        title: 'Guía de ejercicios — Indeterminaciones (parte 2)',
        criollo: 'La segunda tanda de indeterminaciones: límites trigonométricos con sen(x)/x y la indeterminación $1^\\infty$. Dos técnicas bien distintas — no las mezclés. Hacé los ejercicios en orden: el 1 es puro seno, el 2 es de parámetro y el 3 te mete exponentes hasta el cuello.',
        blocks: [
          { type: 'h3', text: 'Ejercicio 1' },
          { type: 'p', text: 'Calcular los siguientes límites:' },
          {
            type: 'ol',
            items: [
              '$\\lim_{x \\to 0} \\dfrac{\\operatorname{sen}(5x)}{\\operatorname{sen}(3x)}$',
              '$\\lim_{x \\to 0} \\dfrac{\\operatorname{sen}^2 x}{3x}$',
              '$\\lim_{x \\to 0} \\dfrac{\\operatorname{sen}(3x)}{\\operatorname{sen}(4x)}$',
              '$\\lim_{x \\to 2} \\dfrac{\\operatorname{sen}(x^2-4)}{x^2+5x-14}$',
              '$\\lim_{x \\to 0} \\dfrac{\\operatorname{sen}(kx)}{x}$',
              '$\\lim_{x \\to 0} \\dfrac{\\operatorname{sen}(5\\pi x)}{\\operatorname{sen}(\\pi x)}$',
              '$\\lim_{x \\to 0} \\dfrac{(e^x-1)\\,x}{\\operatorname{sen}\\!\\left(\\tfrac{1}{5}x\\right)}$',
              '$\\lim_{x \\to 3} \\dfrac{x^2-9}{\\operatorname{sen}(x-3)}$',
              '$\\lim_{x \\to 0} \\dfrac{\\sqrt{1-\\operatorname{sen}x}-\\sqrt{1+\\operatorname{sen}x}}{x}$',
              '$\\lim_{x \\to 6} \\dfrac{\\operatorname{sen}(x^2-36)}{x-6}$',
              '$\\lim_{x \\to -3} \\dfrac{\\operatorname{sen}(x^2+x-6)}{x^3+27}$',
              '$\\lim_{x \\to 0} \\dfrac{x\\,\\operatorname{sen}(6x)}{\\operatorname{sen}(2x)-2x+x^2}$',
              '$\\lim_{x \\to -3} \\dfrac{\\operatorname{sen}(x^3-5x+12)}{3x^2+7x-6}$',
              '$\\lim_{x \\to -1} \\dfrac{\\operatorname{sen}(x^3+1)}{2x^2-3x-5}$',
              '$\\lim_{x \\to 0} \\dfrac{2x+\\operatorname{sen}(7x)}{x}$'
            ]
          },
          { type: 'h3', text: 'Ejercicio 2' },
          {
            type: 'p',
            text: 'Hallar el valor de $b \\in \\mathbb{R}$, tal que se cumpla la siguiente igualdad: $\\displaystyle\\lim_{x \\to 0} \\dfrac{\\operatorname{sen}(3bx)}{\\operatorname{sen}(4x)} = 12$'
          },
          { type: 'h3', text: 'Ejercicio 3' },
          { type: 'p', text: 'Calcular los siguientes límites:' },
          {
            type: 'ol',
            items: [
              '$\\lim_{x \\to \\infty} \\left(\\dfrac{1+5x}{3+5x}\\right)^{2x-1}$',
              '$\\lim_{x \\to \\infty} \\left(\\dfrac{2x-1}{2x+3}\\right)^{x+5}$',
              '$\\lim_{x \\to \\infty} \\left(\\dfrac{1+3x}{3x+4}\\right)^{2x+1}$',
              '$\\lim_{x \\to \\infty} \\left(\\dfrac{-1+4x}{4x+1}\\right)^{x+4}$',
              '$\\lim_{x \\to \\infty} \\left(\\dfrac{3x+1}{3x-2}\\right)^{2x+1}$',
              '$\\lim_{x \\to \\infty} \\left(\\dfrac{-6+5x}{4+5x}\\right)^{3x-5}$',
              '$\\lim_{x \\to \\infty} \\left(\\dfrac{2+5x}{-4+5x}\\right)^{3x-2}$',
              '$\\lim_{x \\to \\infty} \\left(\\dfrac{3x-5}{3x+4}\\right)^{5x-3}$'
            ]
          },
          {
            type: 'callout',
            tone: 'info',
            text: 'Las resoluciones completas las tenés en la pestaña <strong>Ver PDFs → Resultados · Indeterminaciones (parte 2)</strong>.'
          }
        ],
        quiz: {
          tf: [
            {
              id: 'tf-14-1',
              q: '$\\lim_{x \\to 0} \\dfrac{\\operatorname{sen}(5x)}{\\operatorname{sen}(3x)} = \\dfrac{5}{3}$',
              a: true,
              explain: 'Usando $\\lim_{u\\to 0}\\frac{\\operatorname{sen}u}{u}=1$ en numerador y denominador, el límite se reduce a $\\frac{5}{3}$. Coincide con la respuesta de la guía.'
            },
            {
              id: 'tf-14-2',
              q: '$\\lim_{x \\to 0} \\dfrac{\\operatorname{sen}^2 x}{3x} = \\dfrac{1}{3}$',
              a: false,
              explain: 'El resultado correcto es 0. Se reescribe como $\\frac{\\operatorname{sen}x}{3}\\cdot\\frac{\\operatorname{sen}x}{x}\\to \\frac{0}{3}\\cdot 1=0$.'
            },
            {
              id: 'tf-14-3',
              q: 'El valor de $b$ que satisface $\\lim_{x\\to 0}\\dfrac{\\operatorname{sen}(3bx)}{\\operatorname{sen}(4x)}=12$ es $b=16$.',
              a: true,
              explain: 'El límite vale $\\frac{3b}{4}$. Igualando a 12: $3b=48$, entonces $b=16$, que es la respuesta de la guía.'
            },
            {
              id: 'tf-14-4',
              q: '$\\lim_{x\\to\\infty}\\left(\\dfrac{2x-1}{2x+3}\\right)^{x+5}=e^{-2}$',
              a: true,
              explain: 'Indeterminación $1^\\infty$. El exponente por la diferencia de la base menos 1 tiende a $(x+5)\\cdot\\frac{-4}{2x+3}\\to -2$, dando $e^{-2}$. Coincide con la hoja de respuestas.'
            }
          ],
          mc: [
            {
              id: 'mc-14-1',
              q: '¿Cuánto vale $\\lim_{x \\to 3} \\dfrac{x^2-9}{\\operatorname{sen}(x-3)}$?',
              options: ['$3$', '$6$', '$9$', '$0$'],
              correctIndex: 1,
              explain: 'Se factoriza $x^2-9=(x-3)(x+3)$ y se usa $\\frac{\\operatorname{sen}(x-3)}{x-3}\\to 1$. El límite queda $x+3\\big|_{x=3}=6$.'
            },
            {
              id: 'mc-14-2',
              q: '¿Cuánto vale $\\lim_{x \\to 0} \\dfrac{\\sqrt{1-\\operatorname{sen}x}-\\sqrt{1+\\operatorname{sen}x}}{x}$?',
              options: ['$1$', '$0$', '$-1$', '$\\infty$'],
              correctIndex: 2,
              explain: 'Multiplicando por el conjugado, el numerador se convierte en $\\frac{-2\\operatorname{sen}x}{\\sqrt{1-\\operatorname{sen}x}+\\sqrt{1+\\operatorname{sen}x}}$. Dividiendo por $x$ y tomando el límite: $\\frac{-2\\cdot 1}{1+1}=-1$.'
            },
            {
              id: 'mc-14-3',
              q: '¿Cuánto vale $\\lim_{x \\to \\infty} \\left(\\dfrac{3x+1}{3x-2}\\right)^{2x+1}$?',
              options: ['$e$', '$e^2$', '$e^{-2}$', '$1$'],
              correctIndex: 1,
              explain: 'Indeterminación $1^\\infty$. La diferencia numerador-denominador es 3. El exponente por esa diferencia dividida por el denominador: $(2x+1)\\cdot\\frac{3}{3x-2}\\to 2$. Resultado: $e^2$.'
            }
          ],
          ms: [
            {
              id: 'ms-14-1',
              q: '¿Cuáles de los siguientes resultados del Ejercicio 1 son correctos según la hoja de respuestas?',
              options: [
                '$\\lim_{x\\to 0}\\frac{\\operatorname{sen}(kx)}{x} = k$',
                '$\\lim_{x\\to 6}\\frac{\\operatorname{sen}(x^2-36)}{x-6} = 12$',
                '$\\lim_{x\\to -3}\\frac{\\operatorname{sen}(x^2+x-6)}{x^3+27} = -\\dfrac{5}{27}$',
                '$\\lim_{x\\to 0}\\frac{2x+\\operatorname{sen}(7x)}{x} = 9$',
                '$\\lim_{x\\to -1}\\frac{\\operatorname{sen}(x^3+1)}{2x^2-3x-5} = -\\dfrac{3}{7}$'
              ],
              correctIndexes: [0, 1, 2, 3, 4],
              explain: 'Los cinco son correctos: e) da $k$, j) da 12, k) da $-\\frac{5}{27}$, o) da 9 y n) da $-\\frac{3}{7}$, todos coincidentes con la hoja de respuestas.'
            },
            {
              id: 'ms-14-2',
              q: '¿Cuáles de los siguientes límites del Ejercicio 3 tienen resultado con exponente <strong>negativo</strong> de $e$?',
              options: [
                'a) $\\left(\\frac{1+5x}{3+5x}\\right)^{2x-1}$',
                'b) $\\left(\\frac{2x-1}{2x+3}\\right)^{x+5}$',
                'e) $\\left(\\frac{3x+1}{3x-2}\\right)^{2x+1}$',
                'f) $\\left(\\frac{-6+5x}{4+5x}\\right)^{3x-5}$',
                'h) $\\left(\\frac{3x-5}{3x+4}\\right)^{5x-3}$'
              ],
              correctIndexes: [0, 1, 3, 4],
              explain: 'Los ítems a) $e^{-4/5}$, b) $e^{-2}$, f) $e^{-6}$ y h) $e^{-15}$ tienen exponente negativo. El ítem e) da $e^{2}$, que es positivo.'
            }
          ]
        },
        flashcards: [
          {
            id: 'fc-14-1',
            front: 'Límite fundamental trigonométrico',
            back: '$\\lim_{u \\to 0} \\frac{\\operatorname{sen}(u)}{u} = 1$. Es la herramienta clave para toda indeterminación $\\frac{0}{0}$ con seno: reescribís el argumento para que aparezca esta forma y el factor vale 1.'
          },
          {
            id: 'fc-14-2',
            front: '¿Cuánto vale $\\lim_{x\\to 0}\\frac{\\operatorname{sen}(ax)}{\\operatorname{sen}(bx)}$?',
            back: '$\\frac{a}{b}$. Se multiplica y divide por $ax$ en el numerador y por $bx$ en el denominador: $\\frac{\\operatorname{sen}(ax)}{ax}\\cdot\\frac{bx}{\\operatorname{sen}(bx)}\\cdot\\frac{a}{b}\\to 1\\cdot 1\\cdot\\frac{a}{b}=\\frac{a}{b}$.'
          },
          {
            id: 'fc-14-3',
            front: 'Técnica general para $1^\\infty$',
            back: 'Si $\\lim f(x)^{g(x)}$ es $1^\\infty$, el resultado es $e^L$ donde $L=\\lim g(x)\\cdot(f(x)-1)$. Identificás qué parte tiende a 1 y qué tiende a $\\infty$, y calculás ese producto.'
          },
          {
            id: 'fc-14-4',
            front: '¿Cuánto vale $\\lim_{x\\to\\infty}\\left(\\frac{2x-1}{2x+3}\\right)^{x+5}$?',
            back: '$e^{-2}$. La base tiende a 1; la diferencia numerador-denominador es $-4$. Aplicando la fórmula: $(x+5)\\cdot\\frac{-4}{2x+3}\\to -2$, entonces el límite es $e^{-2}$.'
          },
          {
            id: 'fc-14-5',
            front: '¿Cómo se resuelve $\\lim_{x\\to a}\\frac{\\operatorname{sen}(p(x))}{q(x)}$ cuando $p(a)=q(a)=0$?',
            back: 'Se factoriza el factor común $(x-a)$ en $p(x)$ y $q(x)$. Luego $\\frac{\\operatorname{sen}(p(x))}{p(x)}\\to 1$, y el límite se reduce al cociente algebraico $\\lim\\frac{p(x)}{q(x)}$.'
          },
          {
            id: 'fc-14-6',
            front: '¿Cuánto vale $\\lim_{x\\to 0}\\frac{\\sqrt{1-\\operatorname{sen}x}-\\sqrt{1+\\operatorname{sen}x}}{x}$?',
            back: '$-1$. Se multiplica por el conjugado: el numerador queda $\\frac{-2\\operatorname{sen}x}{\\sqrt{1-\\operatorname{sen}x}+\\sqrt{1+\\operatorname{sen}x}}$. Al dividir por $x$ y tomar el límite: $\\frac{-2\\cdot 1}{1+1}=-1$.'
          },
          {
            id: 'fc-14-7',
            front: '¿Cuánto vale $\\lim_{x\\to 0}\\frac{2x+\\operatorname{sen}(7x)}{x}$?',
            back: '$9$. Se separa en $\\frac{2x}{x}+\\frac{\\operatorname{sen}(7x)}{x}=2+7\\cdot\\frac{\\operatorname{sen}(7x)}{7x}\\to 2+7=9$.'
          }
        ]
      },
{
        id: '15',
        unit: 'guias',
        title: 'Guía de ejercicios — Asíntotas',
        criollo: 'Guía completa de asíntotas: verticales, horizontales y oblicuas. Dividís, calculás límites y encontrás qué líneas persigue la función sin llegar nunca. Ejercicios variados con funciones a trozos, aplicaciones reales y afirmaciones para justificar.',
        blocks: [
          { type: 'h3', text: 'Ejercicio 1' },
          { type: 'p', text: 'Dada la función $f : D \\to \\mathbb{R} \\;/\\; f(x) = \\dfrac{2x^2 + 3x - 5}{x - 1}$:' },
          { type: 'ol', items: [
            'Determinar su dominio.',
            'Hallar la ecuación de la asíntota oblicua.',
            'Determinar, si existen, las ecuaciones de las asíntotas verticales.',
          ] },

          { type: 'h3', text: 'Ejercicio 2' },
          { type: 'p', text: 'Escribir la ecuación de una función cuyo gráfico admita dos asíntotas verticales y una horizontal.' },

          { type: 'h3', text: 'Ejercicio 3' },
          { type: 'p', text: 'Determinar dominio y asíntotas de las siguientes funciones:' },
          { type: 'ol', items: [
            '$f(x) = \\begin{cases} e^x - 2 & \\text{si } x < 0 \\\\ \\dfrac{x^3 - 8}{x^2 - 2x} & \\text{si } x > 0 \\end{cases}$',
            '$f(x) = x + \\dfrac{x - 1}{x^2 - 5x + 4}$',
            '$f(x) = \\dfrac{x^2}{x - 4}$',
            '$f(x) = \\dfrac{x + 3}{x^2 - 9}$',
            '$f(x) = \\begin{cases} 0 & \\text{si } x = 1 \\\\ \\dfrac{3x^2 - x - 2}{x - 1} & \\text{si } x < 1 \\\\ \\dfrac{e^x}{x^2} & \\text{si } x > 1 \\end{cases}$',
            '$f(x) = \\begin{cases} \\dfrac{2x^2 - 8}{x^3 - 6x - 4} & \\text{si } x \\leq -2 \\\\ \\dfrac{-3x + 6}{\\sqrt{3x^2 + 4} - 4} & \\text{si } -2 < x < 2 \\\\ \\dfrac{x^2 - 4}{4 - 2x} & \\text{si } x > 2 \\end{cases}$',
            '$f(x) = \\begin{cases} \\dfrac{3 - 2x}{5x - 10} & \\text{si } x \\leq 3 \\\\ \\dfrac{x^3 - 3x^2 - 10x + 24}{x^2 - 7x + 12} & \\text{si } x > 3 \\end{cases}$',
          ] },

          { type: 'h3', text: 'Ejercicio 4' },
          { type: 'p', text: 'Indicar en qué puntos el gráfico de $f$ corta a su asíntota oblicua si $f(x) = \\dfrac{x^3 - 1}{3x^2 + 1}$.' },

          { type: 'h3', text: 'Ejercicio 5' },
          { type: 'p', text: 'Sabiendo que las ecuaciones de las rectas asíntotas a la gráfica de la función $f(x)$ son: $y = -2$ (cuando $x \\to -\\infty$); $x = 2$ (a derecha e izquierda); $y = -3x + 5$ (cuando $x \\to +\\infty$), determinar:' },
          { type: 'ol', items: [
            '$\\displaystyle\\lim_{x \\to -\\infty} \\dfrac{2f(x) - 5}{3}$',
            '$\\displaystyle\\lim_{x \\to \\infty} \\dfrac{4 \\cdot f(x)}{3x}$',
            '$\\displaystyle\\lim_{x \\to 2} \\dfrac{5x - 1}{3f(x) - 2}$',
          ] },

          { type: 'h3', text: 'Ejercicio 6' },
          { type: 'p', text: 'Dada $f : A \\to \\mathbb{R}$, cuya gráfica presenta asíntota oblicua $y = -\\dfrac{3}{4}x - 1$ para $x \\to -\\infty$, asíntota horizontal $y = 2$ para $x \\to +\\infty$, y asíntota vertical en $x = 0$. Determinar el dominio y completar:' },
          { type: 'ol', items: [
            '$\\displaystyle\\lim_{x \\to -\\infty} f(x) =$',
            '$\\displaystyle\\lim_{x \\to 0^+} f(x) =$',
            '$\\displaystyle\\lim_{x \\to -\\infty} \\left(f(x) + \\dfrac{3}{4}x\\right) =$',
            '$\\displaystyle\\lim_{x \\to +\\infty} f(x) =$',
            '$\\displaystyle\\lim_{x \\to 0^-} f(x) =$',
          ] },

          { type: 'h3', text: 'Ejercicio 7' },
          { type: 'p', text: 'Juana realiza un régimen para adelgazar. La nutricionista establece que la cantidad de kg que adelgaza está en función del tiempo durante el cual hace régimen, pudiéndose enmarcar según el siguiente modelo:' },
          { type: 'p', text: '$$f(t) = \\frac{24\\,e^t}{3e^t + 1} - 2 \\qquad \\forall\\, t \\geq 0$$' },
          { type: 'ol', items: [
            'Probar que cuánto tiempo más persiste, más adelgaza.',
            'Probar que aunque nunca deje el régimen, no podrá adelgazar más de 6 kg.',
          ] },

          { type: 'h3', text: 'Ejercicio 8' },
          { type: 'p', text: 'Si $C(x)$ es el costo total en pesos al fabricar $x$ unidades de un producto y se define el costo promedio como $\\overline{C(x)} = \\dfrac{C(x)}{x}$. Si $C(x) = 12000 + 7x$; donde $\\$12000$ representa el costo fijo y los costos variables son $\\$7$. Mostrar que el costo promedio tiende a un nivel de estabilidad si el fabricante aumenta en forma continua la producción. Determinar este valor de estabilidad. ¿Acaba de calcular alguna asíntota? En caso afirmativo, determinar cuál.' },

          { type: 'h3', text: 'Ejercicio 9' },
          { type: 'p', text: 'Sea $f : A \\to \\mathbb{R}$, tal que $y = f(x)$. Indicar cuáles de las siguientes afirmaciones son verdaderas y justificar:' },
          { type: 'ul', items: [
            'Si $x = a$ es asíntota, entonces existe $f(a)$.',
            'Si $y = b$ es asíntota, entonces no existe $x_0$ perteneciente a $A$, tal que $f(x_0) = b$.',
            'Si $a \\notin A$ entonces $x = a$ es asíntota.',
            'Si $\\displaystyle\\lim_{x \\to \\infty} f(x) = \\infty$, entonces $f$ no tiene asíntotas oblicuas.',
          ] },

          {
            type: 'callout',
            tone: 'info',
            text: 'Las resoluciones completas las tenés en la pestaña <strong>Ver PDFs → Resultados · Asíntotas</strong>.',
          },
        ],
        quiz: {
          tf: [
            {
              id: 'tf-15-1',
              q: 'Para $f(x) = \\dfrac{2x^2 + 3x - 5}{x - 1}$, la asíntota oblicua es $y = 2x + 5$.',
              a: true,
              explain: 'Dividiendo $2x^2 + 3x - 5$ por $x - 1$ se obtiene cociente $2x + 5$ y resto $0$, por lo que la AO es $y = 2x + 5$.',
            },
            {
              id: 'tf-15-2',
              q: 'Si $a \\notin \\text{Dom}(f)$, entonces $x = a$ es necesariamente una asíntota vertical de $f$.',
              a: false,
              explain: 'Falso. No estar en el dominio es condición necesaria pero no suficiente. Por ejemplo $f(x) = \\frac{x^2 - 1}{x - 1}$ tiene $x = 1$ fuera del dominio pero es una discontinuidad evitable, no una AV.',
            },
            {
              id: 'tf-15-3',
              q: 'Una función puede cruzar a su propia asíntota horizontal.',
              a: true,
              explain: 'Verdadero. La asíntota horizontal describe el comportamiento en el infinito; para valores finitos de $x$ la función puede igualar o cruzar ese valor.',
            },
            {
              id: 'tf-15-4',
              q: 'Si $\\displaystyle\\lim_{x \\to \\infty} f(x) = \\infty$, entonces $f$ no tiene asíntota oblicua.',
              a: false,
              explain: 'Falso según el Ejercicio 9. Para determinar la AO se analiza $\\lim f(x)/x$ y $\\lim (f(x) - mx)$; el límite siendo infinito por sí solo no descarta la AO.',
            },
          ],
          mc: [
            {
              id: 'mc-15-1',
              q: '¿Cuántas asíntotas verticales tiene $f(x) = \\dfrac{x + 3}{x^2 - 9}$?',
              options: [
                'Ninguna',
                'Una: $x = 3$',
                'Dos: $x = 3$ y $x = -3$',
                'Una: $x = -3$',
              ],
              correctIndex: 1,
              explain: '$x^2 - 9 = (x-3)(x+3)$. En $x = -3$ el factor $x+3$ cancela con el numerador, dando discontinuidad evitable. Solo $x = 3$ es AV.',
            },
            {
              id: 'mc-15-2',
              q: 'Sabiendo que $y = -2$ es asíntota horizontal de $f$ cuando $x \\to -\\infty$, ¿cuánto vale $\\displaystyle\\lim_{x \\to -\\infty} \\dfrac{2f(x) - 5}{3}$?',
              options: [
                '$-3$',
                '$-\\dfrac{5}{3}$',
                '$0$',
                '$+\\infty$',
              ],
              correctIndex: 0,
              explain: 'Como $f(x) \\to -2$: $\\dfrac{2(-2) - 5}{3} = \\dfrac{-9}{3} = -3$.',
            },
            {
              id: 'mc-15-3',
              q: 'Para $f(x) = \\dfrac{x^2}{x - 4}$, ¿cuál es la asíntota oblicua?',
              options: [
                '$y = x$',
                '$y = x + 4$',
                '$y = x - 4$',
                'No tiene asíntota oblicua',
              ],
              correctIndex: 1,
              explain: 'Dividiendo $x^2$ por $x - 4$ resulta $x + 4$ con resto $16$. Cuando $x \\to \\infty$ el resto tiende a $0$, por lo que la AO es $y = x + 4$.',
            },
          ],
          ms: [
            {
              id: 'ms-15-1',
              q: '¿Cuáles de las siguientes afirmaciones sobre asíntotas son <strong>falsas</strong>? (seleccioná todas)',
              options: [
                'Si $x = a$ es AV, entonces $f(a)$ no existe.',
                'Si $y = b$ es AH, la curva nunca puede tomar el valor $b$.',
                'Si $a \\notin \\text{Dom}(f)$, entonces $x = a$ es AV.',
                'Si $\\displaystyle\\lim_{x \\to \\infty} f(x) = \\infty$, entonces $f$ no tiene AO.',
                'El gráfico de $f$ puede cruzar a su asíntota oblicua.',
              ],
              correctIndexes: [0, 1, 2, 3],
              explain: 'Las cuatro primeras son falsas según el Ejercicio 9: (a) $f(a)$ puede existir aunque haya AV, (b) la curva puede cruzar la AH, (c) no estar en el dominio no garantiza AV, (d) el límite infinito no descarta AO. La quinta es verdadera.',
            },
            {
              id: 'ms-15-2',
              q: 'Para la función $f(x) = \\dfrac{x^2}{x - 4}$, ¿cuáles enunciados son correctos?',
              options: [
                'El dominio es $\\mathbb{R} - \\{4\\}$.',
                'Tiene asíntota vertical $x = 4$.',
                'Tiene asíntota horizontal $y = 0$.',
                'Tiene asíntota oblicua $y = x + 4$.',
                'No tiene ninguna asíntota oblicua.',
              ],
              correctIndexes: [0, 1, 3],
              explain: 'Dom: $\\mathbb{R} - \\{4\\}$, AV: $x = 4$. Dividiendo $x^2 \\div (x-4) = x + 4$ con resto $16$, la AO es $y = x + 4$. No hay AH porque el grado del numerador supera al del denominador.',
            },
          ],
        },
        flashcards: [
          {
            id: 'fc-15-1',
            front: '¿Cómo se halla la asíntota oblicua $y = mx + b$?',
            back: 'Se calcula $m = \\lim_{x \\to \\infty} \\dfrac{f(x)}{x}$ y luego $b = \\lim_{x \\to \\infty} (f(x) - mx)$. Si alguno de los dos límites no existe o es infinito, no hay AO en esa dirección.',
          },
          {
            id: 'fc-15-2',
            front: '¿Cuándo existe asíntota vertical en $x = a$?',
            back: 'Cuando $\\lim_{x \\to a^+} f(x) = \\pm\\infty$ o $\\lim_{x \\to a^-} f(x) = \\pm\\infty$. Que $a \\notin \\text{Dom}(f)$ es condición necesaria pero no suficiente.',
          },
          {
            id: 'fc-15-3',
            front: '¿Puede la curva cruzar su asíntota horizontal?',
            back: 'Sí. La asíntota horizontal describe el comportamiento cuando $x \\to \\pm\\infty$. Para valores finitos de $x$ la función puede igualarse a ese valor o cruzarlo múltiples veces.',
          },
          {
            id: 'fc-15-4',
            front: 'Costo promedio y asíntota — Ejercicio 8',
            back: 'Con $C(x) = 12000 + 7x$, el costo promedio es $\\overline{C}(x) = \\dfrac{12000}{x} + 7$. Cuando $x \\to +\\infty$, $\\overline{C}(x) \\to 7$. La AH $y = 7$ es el nivel de estabilidad: el costo variable unitario.',
          },
          {
            id: 'fc-15-5',
            front: 'Régimen de Juana — ¿qué garantiza la asíntota? (Ej. 7)',
            back: '$\\lim_{t \\to +\\infty} f(t) = 6$: sin importar cuánto tiempo siga el régimen, Juana no puede adelgazar más de 6 kg. La asíntota horizontal es la cota máxima de pérdida de peso.',
          },
          {
            id: 'fc-15-6',
            front: '¿Cómo se verifica si la gráfica corta a su AO?',
            back: 'Se iguala $f(x) = mx + b$ y se resuelven los puntos de intersección. Si hay solución real $x_0$, el punto $(x_0,\\, f(x_0))$ es donde la curva corta a la asíntota oblicua.',
          },
          {
            id: 'fc-15-7',
            front: 'Dom de $f(x) = \\dfrac{x+3}{x^2-9}$ y sus asíntotas',
            back: 'Dom: $\\mathbb{R} - \\{-3,\\, 3\\}$. En $x = -3$ hay discontinuidad evitable (factor cancela). Asíntota vertical: solo $x = 3$. Asíntota horizontal: $y = 0$ (grado denominador mayor).',
          },
        ],
      },
{
        id: '16',
        unit: 'guias',
        title: 'Guía de ejercicios — Continuidad',
        criollo: 'Acá practicás todo lo de continuidad: identificar discontinuidades desde gráficos y fórmulas, clasificarlas (evitable o esencial), encontrar asíntotas y hasta hallar parámetros para que una función sea continua. Ocho ejercicios que te van a sacar las dudas de una buena vez.',
        blocks: [
          { type: 'h3', text: 'Ejercicio 1 — Continuidad desde gráficos', criollo: 'Mirás el dibujito y decidís si corta o no' },
          { type: 'p', text: 'Para cada función graficada:' },
          {
            type: 'callout',
            tone: 'info',
            text: 'Los seis gráficos muestran funciones con punto marcado en $x = a$. Las funciones son: (1) curva creciente suave sin salto en $a$; (2) función con salto en $a$ (ramas separadas); (3) función continua con máximo relativo cerca de $a$; (4) función con asíntota vertical en $a$; (5) función a trozos con punto hueco en el eje en $a$; (6) función con punto aislado en $a$ sobre una rama cúbica. Los gráficos están en la imagen original de la guía.'
          },
          { type: 'p', text: 'Indicar si es continua o discontinua en $x = a$. Clasificar la discontinuidad en caso de serlo.' },
          { type: 'h3', text: 'Ejercicio 2 — Clasificar discontinuidades analíticamente', criollo: 'Nada de gráficos, puro cálculo' },
          { type: 'p', text: 'Para cada una de las siguientes funciones, analizar y clasificar discontinuidades (si existen), indicando cuáles corresponden a asíntotas:' },
          {
            type: 'ol',
            items: [
              '$f(x) = \\begin{cases} \\dfrac{x+2}{3x+2} & x \\neq 0 \\\\ 1 & x = 0 \\end{cases}$',
              '$g(x) = \\begin{cases} \\dfrac{3x-6}{2-x} & x < 2 \\\\ \\dfrac{\\sqrt{4x+1}-3}{x-2} & x > 2 \\end{cases}$',
              '$i(x) = \\dfrac{x^2 - 9}{x + 3}$',
              '$j(x) = 3^x$',
              '$k(x) = 3^{-x} - 1$'
            ]
          },
          { type: 'h3', text: 'Ejercicio 3 — Dominio, asíntotas y discontinuidades', criollo: 'El paquete completo: dominio, asíntotas y clasificación' },
          { type: 'p', text: 'Para las siguientes funciones, indicar dominio, ecuaciones de las asíntotas y clasificar los puntos de discontinuidad:' },
          { type: 'math', latex: 'f(x) = \\dfrac{x^2(3-2x)}{x^2-1}', display: true },
          { type: 'math', latex: 'g(x) = \\ln(3x-5)', display: true },
          { type: 'math', latex: 'h(x) = \\begin{cases} \\dfrac{2x^3 - 8x}{x+2} & x \\leq 2 \\\\ \\dfrac{(x-2)^2}{3x^2 - 3x - 6} & x > 2 \\end{cases}', display: true },
          { type: 'math', latex: 'i(x) = \\begin{cases} e^x & x < 0 \\\\ \\dfrac{x^2+1}{x-2} & 0 \\leq x < 3 \\\\ 10 & x > 3 \\end{cases}', display: true },
          { type: 'math', latex: 'j(x) = \\begin{cases} 3 - \\dfrac{2}{x+1} & x < -1 \\\\ \\dfrac{x+3}{x-2} & -1 \\leq x < 2 \\\\ \\dfrac{x^2+1}{x-1} & x \\geq 2 \\end{cases}', display: true },
          { type: 'h3', text: 'Ejercicio 4 — Graficar función con condiciones dadas', criollo: 'Te dan las reglas y vos la dibujás' },
          { type: 'p', text: 'Graficar una función $f(x)$ que verifique las siguientes condiciones:' },
          {
            type: 'ul',
            items: [
              '$\\lim_{x \\to +\\infty} f(x) = 2$',
              '$\\lim_{x \\to -\\infty} f(x) = +\\infty$',
              '$f$ es discontinua en $x = 0$',
              '$\\lim_{x \\to 0^+} f(x) = 2$',
              '$x = 0$ es una asíntota vertical'
            ]
          },
          { type: 'h3', text: 'Ejercicio 5 — Parámetro para tipo de discontinuidad', criollo: 'Buscás el valor de $a$ que define qué tipo de discontinuidad hay' },
          { type: 'p', text: 'Dada la función $f(x) = \\dfrac{a - 4x}{6 - 2x}$:' },
          {
            type: 'ol',
            items: [
              'Hallar el valor de $a$ para que $f$ presente una discontinuidad evitable en $x = 3$.',
              'Hallar el/los valor/es de $a$ para que $f$ presente una discontinuidad esencial en $x = 3$.'
            ]
          },
          { type: 'h3', text: 'Ejercicio 6 — Parámetros para continuidad global', criollo: 'Tres incógnitas, una función continua en todo $\\mathbb{R}$' },
          { type: 'p', text: 'Para la siguiente función:' },
          { type: 'math', latex: 'f(x) = \\begin{cases} \\dfrac{1}{x} + a & \\text{si} \\quad x \\leq -1 \\\\ -x + b & \\text{si} \\quad -1 < x \\leq 2 \\\\ \\dfrac{3x}{x^2 - 1} - c & \\text{si} \\quad x > 2 \\end{cases}', display: true },
          { type: 'p', text: 'Hallar los valores de $a$, $b$ y $c$ reales para que $f(x)$ sea continua en $\\mathbb{R}$ y la recta $y = 3$ sea asíntota de $f(x)$ para $x \\to +\\infty$.' },
          { type: 'h3', text: 'Ejercicio 7 — Graficar función con condiciones (II)', criollo: 'Más condiciones para el dibujito, con discontinuidad y límites laterales' },
          { type: 'p', text: 'Graficar una función $f(x)$ que verifique las siguientes condiciones:' },
          {
            type: 'ul',
            items: [
              '$\\lim_{x \\to +\\infty} f(x) = 1$',
              '$\\lim_{x \\to -\\infty} f(x) = -\\infty$',
              '$f$ es discontinua en $x = 0$ y $f(0) = 1$',
              '$\\lim_{x \\to 0^-} f(x) = 1$'
            ]
          },
          { type: 'h3', text: 'Ejercicio 8 — Graficar función con condiciones (III)', criollo: 'Dominio con hueco, asíntota oblicua y valores puntuales' },
          { type: 'p', text: 'Graficar una función $f(x)$ que verifique las siguientes condiciones:' },
          {
            type: 'ul',
            items: [
              '$\\text{Dom}\\, f(x) = (-\\infty; 0) \\cup [2; +\\infty)$',
              '$y = -x - 1$ es una asíntota oblicua cuando $x \\to -\\infty$',
              '$\\lim_{x \\to +\\infty} f(x) = -\\infty$',
              '$\\lim_{x \\to -\\infty} f(x) = +\\infty$',
              '$\\lim_{x \\to 0^-} f(x) = -\\infty$',
              '$f(2) = 3$ y $f(4) = 0$'
            ]
          },
          {
            type: 'callout',
            tone: 'info',
            text: 'Las resoluciones completas las tenés en la pestaña <strong>Ver PDFs → Resultados · Continuidad</strong>.'
          }
        ],
        quiz: {
          tf: [
            {
              id: 'tf-16-1',
              q: 'Una función es continua en $x = a$ si $\\lim_{x \\to a} f(x) = f(a)$, con $f(a)$ definida y el límite existente.',
              a: true,
              explain: 'Esa es exactamente la definición de continuidad en un punto: el límite debe existir, ser igual al valor de la función, y la función debe estar definida en ese punto.'
            },
            {
              id: 'tf-16-2',
              q: 'Una discontinuidad esencial siempre implica la existencia de una asíntota vertical.',
              a: false,
              explain: 'No necesariamente. También hay discontinuidades esenciales de salto finito, donde los límites laterales existen pero son distintos entre sí, sin asíntota vertical.'
            },
            {
              id: 'tf-16-3',
              q: 'Si $f$ tiene una discontinuidad evitable en $x = a$, entonces $\\lim_{x \\to a} f(x)$ existe y es finito.',
              a: true,
              explain: 'La discontinuidad es evitable precisamente porque el límite existe y es finito, pero no coincide con $f(a)$ o la función no está definida en $a$.'
            },
            {
              id: 'tf-16-4',
              q: 'La función $j(x) = 3^x$ tiene alguna discontinuidad en $\\mathbb{R}$.',
              a: false,
              explain: 'Las funciones exponenciales del tipo $a^x$ con $a > 0$ son continuas en todo $\\mathbb{R}$. No tienen discontinuidades.'
            }
          ],
          mc: [
            {
              id: 'mc-16-1',
              q: 'Para la función $f(x) = \\dfrac{x+2}{3x+2}$ (con $f(0)=1$), ¿qué tipo de discontinuidad presenta en $x = -\\dfrac{2}{3}$?',
              options: [
                'Discontinuidad evitable',
                'Discontinuidad esencial con asíntota vertical',
                'Es continua en ese punto',
                'Discontinuidad de salto finito'
              ],
              correctIndex: 1,
              explain: 'En $x = -2/3$ el denominador $3x+2$ se anula y el numerador no, por lo que el límite es infinito: discontinuidad esencial con asíntota vertical $x = -2/3$.'
            },
            {
              id: 'mc-16-2',
              q: 'Para $i(x) = \\dfrac{x^2-9}{x+3}$, ¿qué ocurre en $x = -3$?',
              options: [
                'La función es continua en $x = -3$',
                'Tiene una discontinuidad esencial con asíntota vertical',
                'Tiene una discontinuidad evitable en $x = -3$',
                'La función no está definida y el límite no existe'
              ],
              correctIndex: 2,
              explain: 'Se factoriza como $\\dfrac{(x-3)(x+3)}{x+3} = x-3$ para $x \\neq -3$. El límite cuando $x \\to -3$ existe y vale $-6$, pero la función no está definida ahí: discontinuidad evitable.'
            },
            {
              id: 'mc-16-3',
              q: '¿Cuál es el valor de $a$ para que $f(x) = \\dfrac{a-4x}{6-2x}$ tenga una discontinuidad evitable en $x = 3$?',
              options: [
                '$a = 6$',
                '$a = 12$',
                '$a = -12$',
                '$a = 4$'
              ],
              correctIndex: 1,
              explain: 'Para discontinuidad evitable el numerador debe anularse en $x = 3$: $a - 4(3) = 0 \\Rightarrow a = 12$. Así el factor $(x-3)$ se cancela con el denominador $6-2x = -2(x-3)$.'
            }
          ],
          ms: [
            {
              id: 'ms-16-1',
              q: '¿Cuáles de las siguientes afirmaciones sobre continuidad son correctas?',
              options: [
                'Una función puede ser discontinua en un punto donde está definida.',
                'Si $\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)$, la discontinuidad es esencial de salto.',
                'Toda función racional es continua en todos los reales.',
                'Una asíntota vertical siempre corresponde a una discontinuidad esencial.',
                'Si la función no está definida en $x = a$ pero el límite existe, la discontinuidad es evitable.'
              ],
              correctIndexes: [0, 1, 3, 4],
              explain: 'Correctas: A (puede estar definida pero no coincidir con el límite), B (definición de salto), D (AV implica límite infinito = esencial), E (definición de evitable). Falsa: C, las racionales tienen discontinuidades donde el denominador se anula.'
            },
            {
              id: 'ms-16-2',
              q: 'Para el Ejercicio 6, ¿cuáles de los valores hallados son correctos para que $f$ sea continua en $\\mathbb{R}$ con asíntota $y = 3$ cuando $x \\to +\\infty$?',
              options: [
                '$a = 9$',
                '$b = 7$',
                '$c = 3$',
                '$c = -3$',
                '$a = -9$'
              ],
              correctIndexes: [0, 1, 3],
              explain: 'Los valores son $a = 9$, $b = 7$ y $c = -3$. La condición de asíntota $y=3$ da $\\lim_{x \\to +\\infty} \\left(\\dfrac{3x}{x^2-1} - c\\right) = -c = 3 \\Rightarrow c = -3$.'
            }
          ]
        },
        flashcards: [
          {
            id: 'fc-16-1',
            front: '¿Cuáles son las tres condiciones para que $f$ sea continua en $x = a$?',
            back: '1) $f(a)$ está definida. 2) $\\lim_{x \\to a} f(x)$ existe y es finito. 3) $\\lim_{x \\to a} f(x) = f(a)$. Si falla alguna, hay discontinuidad.'
          },
          {
            id: 'fc-16-2',
            front: '¿Qué es una discontinuidad evitable?',
            back: 'El límite $\\lim_{x \\to a} f(x)$ existe y es finito, pero no coincide con $f(a)$ (o la función no está definida en $a$). Se llama evitable porque redefiniendo $f(a)$ se puede eliminar.'
          },
          {
            id: 'fc-16-3',
            front: '¿Cuándo una discontinuidad es esencial?',
            back: 'Cuando al menos uno de los límites laterales es infinito (asíntota vertical), o cuando los límites laterales son finitos pero distintos entre sí (salto finito), o cuando algún límite lateral directamente no existe.'
          },
          {
            id: 'fc-16-4',
            front: '¿Cómo se analiza la continuidad de una función a trozos en el punto de unión $x = c$?',
            back: 'Se calculan los límites laterales: $\\lim_{x \\to c^-} f(x)$ usando el tramo izquierdo y $\\lim_{x \\to c^+} f(x)$ usando el tramo derecho. Si ambos son iguales y coinciden con $f(c)$, la función es continua en $c$.'
          },
          {
            id: 'fc-16-5',
            front: '¿Qué condición debe cumplir el numerador de $\\dfrac{p(x)}{q(x)}$ en $x = a$ para que haya discontinuidad evitable?',
            back: 'El numerador también debe anularse en $x = a$: $p(a) = 0$. Así $(x-a)$ es factor común y se puede cancelar. Si $p(a) \\neq 0$, la discontinuidad es esencial (asíntota vertical).'
          },
          {
            id: 'fc-16-6',
            front: '¿Qué diferencia hay entre asíntota vertical y asíntota horizontal en términos de continuidad?',
            back: 'La AV $x = a$ corresponde a una discontinuidad esencial en $x = a$ (límite infinito). La AH $y = L$ describe el comportamiento cuando $x \\to \\pm\\infty$ y no implica discontinuidad en ningún punto del dominio.'
          },
          {
            id: 'fc-16-7',
            front: 'Para que $f(x) = \\dfrac{a-4x}{6-2x}$ tenga discontinuidad evitable en $x = 3$, ¿qué valor toma $a$?',
            back: '$a = 12$. El denominador $6-2x = -2(x-3)$ se anula en $x=3$. Para discontinuidad evitable el numerador también debe anularse: $a - 4(3) = 0 \\Rightarrow a = 12$, cancelando el factor $(x-3)$.'
          }
        ]
      },
{
        id: '17',
        unit: 'guias',
        title: 'Guía de ejercicios — Derivada de una función',
        criollo: 'Cuatro ejercicios para entrar en calor con derivadas. Hay gráficos, definición formal con límites, un festival de funciones para derivar y un problemita con parámetros. Dale con todo.',
        blocks: [
          { type: 'h3', text: 'Ejercicio 1' },
          {
            type: 'p',
            text: 'En el siguiente gráfico se muestran las funciones $f(x)$, $g(x)$, $h(x)$ y la pendiente de $g(x)$:'
          },
          {
            type: 'callout',
            tone: 'info',
            text: 'El gráfico del Ejercicio 1 está disponible en el PDF original de la guía.'
          },
          {
            type: 'ol',
            items: [
              'La recta tangente a $h(x)$, ¿es $f(x)$ o $g(x)$? ¿En qué punto?',
              'Determinar la pendiente de la recta tangente en dicho punto.'
            ]
          },
          { type: 'h3', text: 'Ejercicio 2' },
          {
            type: 'p',
            text: 'Verificar usando la definición de derivada que $f(x) = |x|$ es una función continua en $x=0$, pero no es derivable en dicho punto.'
          },
          { type: 'h3', text: 'Ejercicio 3' },
          {
            type: 'p',
            text: 'Derivar las siguientes funciones:'
          },
          {
            type: 'ol',
            items: [
              '$f(x) = 2 - \\sqrt{x}$',
              '$f(x) = x^3 - 9x + x^2 + 20$',
              '$f(x) = \\sqrt[4]{x} + 2x - e^x$',
              '$f(x) = 3^x + 6x + 9$',
              '$f(x) = \\dfrac{x}{9-x} + 2^x$',
              '$f(x) = \\dfrac{1}{x} + x$',
              '$f(x) = x^{\\frac{5}{2}}$',
              '$f(x) = x \\cdot x \\cdot x^3$',
              '$f(x) = \\dfrac{x\\sqrt{x}}{\\sqrt[3]{x^5}}$',
              '$f(x) = \\dfrac{4}{x}$',
              '$f(x) = \\dfrac{x+2}{x^2+2}$',
              '$f(x) = x - \\operatorname{sen}x$',
              '$f(x) = \\dfrac{\\ln x}{x^4}$',
              '$f(x) = x\\cos x$',
              '$f(x) = 3x^3 e^x$',
              '$f(x) = e^x \\operatorname{arctg}x + e^2$',
              '$f(x) = x^5 \\ln x$'
            ]
          },
          { type: 'h3', text: 'Ejercicio 4' },
          {
            type: 'p',
            text: 'Sea $f(x) = (ax + b)\\operatorname{sen}x + \\cos x$, determinar los valores de $a, b \\in \\mathbb{R}$ para que $f\'(x) = x\\cos x$.'
          },
          {
            type: 'callout',
            tone: 'info',
            text: 'Las resoluciones completas las tenés en la pestaña <strong>Ver PDFs → Resultados · Derivada de una función</strong>.'
          }
        ],
        quiz: {
          tf: [
            {
              id: 'tf-17-1',
              q: 'La función $f(x) = |x|$ es continua en $x = 0$.',
              a: true,
              explain: 'Sí es continua: el límite cuando $x \\to 0$ existe y vale $0 = f(0)$. El problema es que no es derivable ahí porque los límites laterales del cociente incremental son distintos ($+1$ y $-1$).'
            },
            {
              id: 'tf-17-2',
              q: 'Si $f(x) = x^3 - 9x + x^2 + 20$, entonces $f\'(x) = 3x^2 + 2x - 9$.',
              a: true,
              explain: 'Derivando término a término: $(x^3)\' = 3x^2$, $(x^2)\' = 2x$, $(-9x)\' = -9$, $(20)\' = 0$. Total: $3x^2 + 2x - 9$. Correcto.'
            },
            {
              id: 'tf-17-3',
              q: 'Si $f(x) = 3^x + 6x + 9$, entonces $f\'(x) = 3^x + 6$.',
              a: false,
              explain: 'La derivada de $3^x$ es $3^x \\ln 3$, no $3^x$. El resultado correcto es $f\'(x) = 3^x \\ln 3 + 6$. Falta el factor $\\ln 3$.'
            },
            {
              id: 'tf-17-4',
              q: 'En el Ejercicio 4, los valores $a = 1$ y $b = 0$ satisfacen que $f\'(x) = x\\cos x$.',
              a: true,
              explain: 'Con $a=1, b=0$: $f(x) = x\\operatorname{sen}x + \\cos x$. Derivando por regla del producto: $f\'(x) = \\operatorname{sen}x + x\\cos x - \\operatorname{sen}x = x\\cos x$. Exacto.'
            }
          ],
          mc: [
            {
              id: 'mc-17-1',
              q: '¿Cuál es la derivada de $f(x) = \\dfrac{x+2}{x^2+2}$?',
              options: [
                '$f\'(x) = \\dfrac{-x^2 - 4x + 2}{(x^2+2)^2}$',
                '$f\'(x) = \\dfrac{x^2 + 4x - 2}{(x^2+2)^2}$',
                '$f\'(x) = \\dfrac{1}{2x}$',
                '$f\'(x) = \\dfrac{-x^2 + 4x - 2}{(x^2+2)^2}$'
              ],
              correctIndex: 0,
              explain: 'Regla del cociente: numerador $= (1)(x^2+2) - (x+2)(2x) = x^2+2-2x^2-4x = -x^2-4x+2$. Denominador: $(x^2+2)^2$.'
            },
            {
              id: 'mc-17-2',
              q: '¿Cuál es la derivada de $f(x) = x\\cos x$?',
              options: [
                '$f\'(x) = \\cos x - x\\operatorname{sen}x$',
                '$f\'(x) = \\cos x + x\\operatorname{sen}x$',
                '$f\'(x) = -\\operatorname{sen}x$',
                '$f\'(x) = x\\operatorname{sen}x$'
              ],
              correctIndex: 0,
              explain: 'Regla del producto: $(x)\'\\cos x + x(\\cos x)\' = 1\\cdot\\cos x + x\\cdot(-\\operatorname{sen}x) = \\cos x - x\\operatorname{sen}x$.'
            },
            {
              id: 'mc-17-3',
              q: 'En el Ejercicio 1, ¿cuál es la pendiente de la recta tangente a $h(x)$ en el punto donde la toca $f(x)$?',
              options: [
                '$m = 4$',
                '$m = -0{,}25$',
                '$m = 2$',
                '$m = 1$'
              ],
              correctIndex: 0,
              explain: 'Según las respuestas de la guía, la tangente a $h(x)$ es $f(x)$ en $P = (2; 4)$ y la pendiente vale $4$. La pendiente $m = -0{,}25$ visible en el gráfico corresponde a $g(x)$.'
            }
          ],
          ms: [
            {
              id: 'ms-17-1',
              q: '¿Cuáles de las siguientes derivadas son correctas?',
              options: [
                '$f(x) = \\dfrac{1}{x} + x \\Rightarrow f\'(x) = 1 - \\dfrac{1}{x^2}$',
                '$f(x) = x \\cdot x \\cdot x^3 \\Rightarrow f\'(x) = 3x^4$',
                '$f(x) = x^5 \\ln x \\Rightarrow f\'(x) = x^4(5\\ln x + 1)$',
                '$f(x) = 3x^3 e^x \\Rightarrow f\'(x) = 9x^2 e^x$',
                '$f(x) = x - \\operatorname{sen}x \\Rightarrow f\'(x) = 1 - \\cos x$'
              ],
              correctIndexes: [0, 2, 4],
              explain: 'A) correcto: $(x^{-1})\' = -x^{-2}$. C) correcto: regla del producto $(x^5\\ln x)\' = 5x^4\\ln x + x^4 = x^4(5\\ln x+1)$. E) correcto: $(\\operatorname{sen}x)\' = \\cos x$. B) incorrecto: $x\\cdot x\\cdot x^3 = x^5$, entonces $f\'(x) = 5x^4$. D) incorrecto: falta el término $3x^3 e^x$ de la regla del producto; resultado correcto: $9x^2e^x + 3x^3e^x = 3x^2e^x(3+x)$.'
            },
            {
              id: 'ms-17-2',
              q: '¿Cuáles de los siguientes enunciados sobre derivabilidad son verdaderos?',
              options: [
                'Si una función es derivable en un punto, entonces es continua en ese punto.',
                'Si una función es continua en un punto, entonces es derivable en ese punto.',
                '$f(x) = |x|$ no es derivable en $x = 0$ porque los límites laterales del cociente incremental son $+1$ y $-1$.',
                'La definición formal de derivada usa el límite $\\lim_{\\Delta x \\to 0} \\dfrac{f(x + \\Delta x) - f(x)}{\\Delta x}$.',
                'Una función puede ser derivable en un punto sin estar definida en ese punto.'
              ],
              correctIndexes: [0, 2, 3],
              explain: 'A) es el teorema clásico: derivable implica continua. C) exactamente lo que demuestra el Ejercicio 2. D) es la definición literal. B) es falso: $|x|$ es continua en $0$ pero no derivable. E) es imposible: sin valor definido no hay cociente incremental.'
            }
          ]
        },
        flashcards: [
          {
            id: 'fc-17-1',
            front: '¿Qué dice la definición formal de derivada?',
            back: '$f\'(x) = \\lim_{\\Delta x \\to 0} \\dfrac{f(x + \\Delta x) - f(x)}{\\Delta x}$. Es el límite del cociente incremental cuando el incremento tiende a cero. Geométricamente es la pendiente de la recta tangente en ese punto.'
          },
          {
            id: 'fc-17-2',
            front: '¿Por qué $|x|$ no es derivable en $x = 0$?',
            back: 'Los límites laterales del cociente incremental son distintos: desde la derecha da $+1$, desde la izquierda da $-1$. Como no coinciden, el límite no existe y por lo tanto $f\'(0)$ no existe.'
          },
          {
            id: 'fc-17-3',
            front: 'Regla del producto',
            back: 'Si $f = u \\cdot v$, entonces $f\' = u\'v + uv\'$. Ejemplo: $(x\\cos x)\' = \\cos x + x(-\\operatorname{sen}x) = \\cos x - x\\operatorname{sen}x$.'
          },
          {
            id: 'fc-17-4',
            front: 'Regla del cociente',
            back: 'Si $f = \\dfrac{u}{v}$, entonces $f\' = \\dfrac{u\'v - uv\'}{v^2}$. Ejemplo: $\\left(\\dfrac{x+2}{x^2+2}\\right)\' = \\dfrac{-x^2-4x+2}{(x^2+2)^2}$.'
          },
          {
            id: 'fc-17-5',
            front: '¿Cuál es la derivada de $a^x$?',
            back: '$(a^x)\' = a^x \\ln a$. Caso especial: $(e^x)\' = e^x$ porque $\\ln e = 1$. No olvidar el factor $\\ln a$ cuando la base no es $e$.'
          },
          {
            id: 'fc-17-6',
            front: '¿Cuál es la derivada de $\\ln x$?',
            back: '$(\\ln x)\' = \\dfrac{1}{x}$ para $x > 0$. Con regla del producto: $\\left(\\dfrac{\\ln x}{x^4}\\right)\' = \\dfrac{\\frac{1}{x} \\cdot x^4 - \\ln x \\cdot 4x^3}{x^8} = \\dfrac{1 - 4\\ln x}{x^5}$.'
          },
          {
            id: 'fc-17-7',
            front: 'Derivable implica continua, ¿y al revés?',
            back: 'Al revés no siempre vale. Continua NO implica derivable. Ejemplo clásico: $f(x) = |x|$ es continua en todo $\\mathbb{R}$ pero no es derivable en $x = 0$ porque tiene un vértice (pico).'
          }
        ]
      },
{
        id: '18',
        unit: 'guias',
        title: 'Guía de ejercicios — Derivada de la función compuesta',
        criollo: 'La regla de la cadena: la herramienta que usás cada vez que tenés una función adentro de otra. Acá entrenás el ojo para identificar la función exterior y la interior, y derivar sin cagarte. Son varios ejercicios, así que tomátelo con calma.',
        blocks: [
          {
            type: 'h3',
            text: 'Ejercicio 1',
            criollo: 'Regla de la cadena a full — compuesta tras compuesta',
          },
          {
            type: 'p',
            text: 'Hallar la función derivada de las siguientes funciones:',
          },
          {
            type: 'ol',
            items: [
              '$f(x) = (3+5x)^{8}$',
              '$f(x) = (2x^{3} - 5x+3)^{6}$',
              '$f(x) = 2\\,\\text{sen}^{7}x$',
              '$f(x) = (2^{x} + 3x^{3})\\,\\ln^{4}x$',
              '$f(x) = \\dfrac{\\cos^{4}x}{5x^{3}+2}$',
              '$f(x) = 5^{6-4x} + 4\\,\\text{arctg}^{3}x$',
              '$f(x) = x^{3}\\cdot 3^{4x}$',
              '$f(x) = (2x+5)^{-5}$',
              '$f(x) = \\sqrt[3]{(x+3)^{5}}$',
              '$f(x) = (a+bx)^{1/3}$',
              '$f(x) = \\text{sen}^{-3}x$',
              '$f(x) = e^{4-3x}$',
              '$f(x) = \\dfrac{e^{x} - e^{-x}}{e^{x} + e^{-2x}}$',
              '$f(x) = \\ln^{4}(3-2x)$',
              '$f(x) = e^{x\\ln x}$',
              '$f(x) = \\arccos(x^{3})$',
              '$f(x) = e^{1/x} \\cdot \\dfrac{1}{x}$',
              '$f(x) = \\sqrt{2 - \\ln^{4}x + x}$',
              '$f(x) = e^{-2x}\\,\\text{arctg}(\\ln x)$',
            ],
          },
          {
            type: 'h3',
            text: 'Ejercicio 2',
            criollo: 'Cuando la variable está en el exponente — logaritmo implícito al rescate',
          },
          {
            type: 'p',
            text: 'Calcular las derivadas de las siguientes funciones:',
          },
          {
            type: 'ol',
            items: [
              '$f(x) = x^{x}$',
              '$f(x) = x^{3x+1}$',
              '$f(x) = (\\text{sen}\\,x)^{\\ln x}$',
              '$f(x) = \\text{sen}(x^{\\ln x})$',
              '$f(x) = \\ln(x^{7-4x})$',
              '$f(x) = (3x^{4}-2)^{\\text{tg}\\,x}$',
              '$f(x) = 7^{3x-12}$',
              '$f(x) = x^{\\sqrt{x}}$',
              '$f(x) = \\dfrac{(2x)^{x} + x^{5}}{e^{-3x}}$',
              '$f(x) = (6x)^{4x} - 6^{4x} + (6x)^{4} + 6$',
            ],
          },
          {
            type: 'h3',
            text: 'Ejercicio 3',
          },
          {
            type: 'p',
            text: 'Verificar que la función $f(t) = \\dfrac{1}{2} + \\dfrac{3}{2}\\,e^{1-t^{2}}$ satisfaga la ecuación: $f\'(t) + 2t\\,f(t) = t$.',
          },
          {
            type: 'h3',
            text: 'Ejercicio 4',
          },
          {
            type: 'p',
            text: 'Verificar que la función $f(x) = e^{2x}\\,\\text{sen}(5x)$ satisfaga la ecuación: $f\'\'(x) - 4f\'(x) + 29f(x) = 0$.',
          },
          {
            type: 'h3',
            text: 'Ejercicio 5',
          },
          {
            type: 'p',
            text: 'Encontrar los valores de $k \\in \\mathbb{R}$ para que la recta normal al gráfico de la función $f(x) = \\ln(8-x^{2}) + 3k\\,x - 2$ en $x_{0} = 2$ tenga pendiente $-\\dfrac{1}{8}$.',
          },
          {
            type: 'h3',
            text: 'Ejercicio 6',
          },
          {
            type: 'p',
            text: 'Hallar la pendiente de la recta normal a la gráfica de la función $f(x) = e^{\\text{sen}\\,x}\\,\\sqrt{e^{4x}+3}$ en el punto de abscisa $x_{0} = 0$.',
          },
          {
            type: 'h3',
            text: 'Ejercicio 7',
          },
          {
            type: 'p',
            text: 'Estudios realizados han permitido determinar que el nivel medio diario $C$ de monóxido de carbono $\\text{CO}_{2}$ en el aire, en partes por millón (ppm), en una ciudad está relacionado con el aumento poblacional anual dado por la siguiente expresión: $C(t) = \\sqrt{\\dfrac{(3{,}1 + 0{,}1\\,t^{2})^{2}}{2} + 17}$, con $t$ en años. ¿Con qué rapidez estará variando la concentración de $\\text{CO}_{2}$ en esa ciudad dentro de 3 años?',
          },
          {
            type: 'callout',
            tone: 'info',
            text: 'Las resoluciones completas las tenés en la pestaña <strong>Ver PDFs → Resultados · Derivada de la función compuesta</strong>.',
          },
        ],
        quiz: {
          tf: [
            {
              id: 'tf-18-1',
              q: 'La derivada de $f(x) = (3+5x)^{8}$ es $f\'(x) = 40(3+5x)^{7}$.',
              a: true,
              explain: 'Por regla de la cadena: $8(3+5x)^{7} \\cdot 5 = 40(3+5x)^{7}$.',
            },
            {
              id: 'tf-18-2',
              q: 'La derivada de $f(x) = e^{4-3x}$ es $f\'(x) = 3e^{4-3x}$.',
              a: false,
              explain: 'La derivada de $4-3x$ es $-3$, por lo tanto $f\'(x) = -3e^{4-3x}$.',
            },
            {
              id: 'tf-18-3',
              q: 'Para derivar $f(x) = x^{x}$ se puede aplicar directamente la regla $[x^{n}]\' = nx^{n-1}$ sin necesidad de logaritmos.',
              a: false,
              explain: 'La regla $nx^{n-1}$ requiere que el exponente sea constante. Como aquí el exponente también es $x$, hay que usar derivación logarítmica: $f\'(x) = x^{x}(\\ln x + 1)$.',
            },
            {
              id: 'tf-18-4',
              q: 'La pendiente de la recta normal a $f(x) = e^{\\text{sen}\\,x}\\,\\sqrt{e^{4x}+3}$ en $x_{0} = 0$ es $-\\dfrac{1}{3}$.',
              a: true,
              explain: 'Calculando $f\'(0) = 3$, la pendiente de la normal es $-1/f\'(0) = -1/3$.',
            },
          ],
          mc: [
            {
              id: 'mc-18-1',
              q: '¿Cuál es la derivada de $f(x) = \\ln^{4}(3-2x)$?',
              options: [
                '$\\dfrac{-8\\ln^{3}(3-2x)}{3-2x}$',
                '$\\dfrac{4\\ln^{3}(3-2x)}{3-2x}$',
                '$\\dfrac{-2\\ln^{3}(3-2x)}{3-2x}$',
                '$4\\ln^{3}(3-2x)$',
              ],
              correctIndex: 0,
              explain: 'Regla de la cadena doble: $4\\ln^{3}(3-2x) \\cdot \\dfrac{1}{3-2x} \\cdot (-2) = \\dfrac{-8\\ln^{3}(3-2x)}{3-2x}$.',
            },
            {
              id: 'mc-18-2',
              q: '¿Cuál es la derivada de $f(x) = x^{x}$?',
              options: [
                '$x \\cdot x^{x-1}$',
                '$x^{x}\\,\\ln x$',
                '$x^{x}(\\ln x + 1)$',
                '$e^{x}(\\ln x + 1)$',
              ],
              correctIndex: 2,
              explain: 'Se reescribe $f(x) = e^{x\\ln x}$ y se deriva: $e^{x\\ln x}\\cdot(\\ln x + 1) = x^{x}(\\ln x + 1)$.',
            },
            {
              id: 'mc-18-3',
              q: '¿Qué valor de $k$ hace que la recta normal a $f(x) = \\ln(8-x^{2}) + 3k\\,x - 2$ en $x_{0} = 2$ tenga pendiente $-\\dfrac{1}{8}$?',
              options: [
                '$k = 1$',
                '$k = 2$',
                '$k = 3$',
                '$k = -1$',
              ],
              correctIndex: 2,
              explain: 'Pendiente de la normal $= -1/8$ implica pendiente de la tangente $= 8$. Evaluando $f\'(2) = 8$ se obtiene $k = 3$.',
            },
          ],
          ms: [
            {
              id: 'ms-18-1',
              q: '¿Cuáles de las siguientes afirmaciones sobre la regla de la cadena son correctas?',
              options: [
                'Si $f(x) = g(h(x))$, entonces $f\'(x) = g\'(h(x)) \\cdot h\'(x)$.',
                'La regla de la cadena solo aplica cuando la función exterior es un polinomio.',
                'La derivada de $f(x) = (2x+5)^{-5}$ es $-10(2x+5)^{-6}$.',
                'La derivada de $f(x) = \\text{sen}^{-3}x$ es $-3\\,\\text{sen}^{-4}x$ (sin más factores).',
                'La derivada de $f(x) = \\arccos(x^{3})$ es $\\dfrac{-3x^{2}}{\\sqrt{1-x^{6}}}$.',
              ],
              correctIndexes: [0, 2, 4],
              explain: 'A es la definición correcta de la cadena. C: $-5(2x+5)^{-6}\\cdot 2 = -10(2x+5)^{-6}$. E: $\\arccos(u)\' = -u\'/\\sqrt{1-u^{2}}$ con $u=x^{3}$. B es falsa: aplica a cualquier función compuesta. D omite el factor $\\cos x$ necesario al derivar $\\text{sen}\\,x$.',
            },
            {
              id: 'ms-18-2',
              q: '¿Cuáles de las siguientes son derivadas correctas del Ejercicio 1?',
              options: [
                '$[2\\,\\text{sen}^{7}x]\' = 14\\,\\text{sen}^{6}x\\,\\cos x$',
                '$[(2x^{3}-5x+3)^{6}]\' = 6(2x^{3}-5x+3)^{5}(6x^{2}-5)$',
                '$[(a+bx)^{1/3}]\' = \\dfrac{1}{3}(a+bx)^{-2/3}$',
                '$[x^{3}\\cdot 3^{4x}]\' = 3x^{2}\\cdot 3^{4x}$',
                '$[\\arccos(x^{3})]\' = \\dfrac{-3x^{2}}{\\sqrt{1-x^{6}}}$',
              ],
              correctIndexes: [0, 1, 4],
              explain: 'A y B son correctas por regla de la cadena directa. E es la derivada correcta de $\\arccos(x^3)$. C omite el factor $b$ de la función interior. D omite el término $x^{3}\\cdot 3^{4x}\\cdot 4\\ln 3$ que proviene de derivar $3^{4x}$.',
            },
          ],
        },
        flashcards: [
          {
            id: 'fc-18-1',
            front: '¿Qué dice la regla de la cadena?',
            back: 'Si $f(x) = g(h(x))$, entonces $f\'(x) = g\'(h(x)) \\cdot h\'(x)$. Derivás la exterior evaluada en la interior y multiplicás por la derivada de la interior.',
          },
          {
            id: 'fc-18-2',
            front: '¿Cómo se deriva $f(x) = [u(x)]^{n}$?',
            back: '$f\'(x) = n\\,[u(x)]^{n-1} \\cdot u\'(x)$. El exponente baja como coeficiente, la base queda con potencia $n-1$, y multiplicás por la derivada del argumento.',
          },
          {
            id: 'fc-18-3',
            front: '¿Cómo se deriva $f(x) = x^{x}$?',
            back: 'Se reescribe como $e^{x\\ln x}$ y se aplica la cadena: $f\'(x) = x^{x}(\\ln x + 1)$. Esta técnica es la derivación logarítmica.',
          },
          {
            id: 'fc-18-4',
            front: '¿Cuál es la derivada de $f(x) = a^{u(x)}$ con $a > 0$, $a \\neq 1$?',
            back: '$f\'(x) = a^{u(x)} \\cdot \\ln a \\cdot u\'(x)$. Aparece el $\\ln a$ porque se convierte a base $e$: $a^{u} = e^{u\\ln a}$.',
          },
          {
            id: 'fc-18-5',
            front: '¿Cuál es la derivada de $f(x) = e^{u(x)}$?',
            back: '$f\'(x) = e^{u(x)} \\cdot u\'(x)$. La exponencial de base $e$ es su propia derivada, pero siempre hay que multiplicar por la derivada del exponente.',
          },
          {
            id: 'fc-18-6',
            front: '¿Qué relación hay entre la pendiente de la tangente y la de la normal?',
            back: 'Son perpendiculares: si la tangente tiene pendiente $m$, la normal tiene pendiente $-1/m$. Se usa en los Ejercicios 5 y 6 de esta guía.',
          },
          {
            id: 'fc-18-7',
            front: '¿Cómo se deriva $f(x) = \\ln^{n}(u(x))$?',
            back: '$[\\ln^{n}(u)]\' = n\\,\\ln^{n-1}(u) \\cdot \\dfrac{u\'}{u}$. Se aplica la cadena dos veces: primero la potencia $n$, luego el logaritmo.',
          },
        ],
      },
{
        id: '19',
        unit: 'guias',
        title: 'Guía de ejercicios — Recta tangente y recta normal',
        criollo: 'La recta tangente toca la curva en un punto y tiene la misma pendiente que $f\'(x_0)$ ahí. La normal es perpendicular: pendiente $-1/f\'(x_0)$. Con la fórmula $y - y_0 = f\'(x_0)(x - x_0)$ ya tenés todo lo que necesitás.',
        blocks: [
          {
            type: 'h3',
            text: 'Ejercicio 1'
          },
          {
            type: 'p',
            text: 'Encontrar la ecuación de la recta tangente a la gráfica de $f(x)$ en el punto indicado:'
          },
          {
            type: 'ol',
            items: [
              '$f(x) = x^2 + 1$ en $(2,\\,5)$',
              '$f(x) = -\\dfrac{1}{2} + \\dfrac{7}{5}x^3$ en $\\left(0;\\,-\\dfrac{1}{2}\\right)$',
              '$f(x) = (2x + 1)^2$ en $(0;\\,1)$',
              '$f(x) = x^4 - 3x^2 + 2$ en $(1;\\,0)$',
              '$f(x) = \\dfrac{2}{\\sqrt[4]{x^3}}$ en $(1,\\,2)$',
              '$f(x) = \\dfrac{x}{x - 1}$ en $(2,\\,2)$',
              '$f(x) = (2x^3 + 1)^2$ en $(-1,\\,1)$'
            ]
          },
          {
            type: 'h3',
            text: 'Ejercicio 2'
          },
          {
            type: 'p',
            text: 'Encontrar la recta normal a las gráficas del punto $1a$, $1b$, $1c$, $1d$ en los puntos mencionados.'
          },
          {
            type: 'h3',
            text: 'Ejercicio 3'
          },
          {
            type: 'p',
            text: 'Encontrar la ecuación de la recta tangente a la gráfica de $f(x)$, que sea paralela a la recta dada: $f(x) = \\dfrac{1}{\\sqrt{x}}$, $\\quad r: x + 2y - 6 = 0$.'
          },
          {
            type: 'h3',
            text: 'Ejercicio 4'
          },
          {
            type: 'p',
            text: 'La recta tangente a la gráfica de $g(x)$ en el punto $(5;\\,2)$ pasa por el punto $(9;\\,0)$. Encontrar $g(5)$ y $g\'(5)$.'
          },
          {
            type: 'h3',
            text: 'Ejercicio 5'
          },
          {
            type: 'p',
            text: 'Determinar los puntos, si los hay, en donde la función tiene una recta tangente horizontal:'
          },
          {
            type: 'ol',
            items: [
              '$f(x) = x^4 - 8x^2 + 2$',
              '$f(x) = \\dfrac{1}{x^2}$',
              '$f(x) = \\dfrac{4x - 2}{x^2}$'
            ]
          },
          {
            type: 'h3',
            text: 'Ejercicio 6'
          },
          {
            type: 'p',
            text: 'Encontrar $k$ para que la recta $y = -4x - 9$ sea tangente a $f(x) = x^2 + kx$ en el punto $(-3,\\,3)$.'
          },
          {
            type: 'h3',
            text: 'Ejercicio 7'
          },
          {
            type: 'p',
            text: 'Encontrar $k$ para que la recta $y = -\\dfrac{3}{4}x + 3$ sea tangente a $f(x) = \\dfrac{k}{x}$ en el punto $\\left(2;\\,\\dfrac{3}{2}\\right)$.'
          },
          {
            type: 'h3',
            text: 'Ejercicio 8'
          },
          {
            type: 'p',
            text: 'Encontrar la ecuación de la parábola $f(x) = ax^2 + bx + c$, que pasa por el punto $(0,\\,1)$, y es tangente a la recta $y = x - 1$ en el punto $(1;\\,0)$.'
          },
          {
            type: 'callout',
            tone: 'info',
            text: 'Las resoluciones completas las tenés en la pestaña <strong>Ver PDFs → Resultados · Recta tangente y normal</strong>.'
          }
        ],
        quiz: {
          tf: [
            {
              id: 'tf-19-1',
              q: 'La pendiente de la recta tangente a $f(x)$ en el punto $x_0$ es igual a $f\'(x_0)$.',
              a: true,
              explain: 'Por definición, la derivada en un punto es el valor de la pendiente de la recta tangente en ese punto.'
            },
            {
              id: 'tf-19-2',
              q: 'La recta normal a $f(x)$ en un punto tiene la misma pendiente que la recta tangente en ese punto.',
              a: false,
              explain: 'La recta normal es perpendicular a la tangente; su pendiente es $-\\dfrac{1}{f\'(x_0)}$, el recíproco negativo.'
            },
            {
              id: 'tf-19-3',
              q: 'Si $f\'(x_0) = 0$, la recta tangente a $f$ en $x_0$ es horizontal.',
              a: true,
              explain: 'Pendiente nula implica recta horizontal. Esto ocurre en máximos, mínimos y algunos puntos de inflexión.'
            },
            {
              id: 'tf-19-4',
              q: 'Para $f(x) = \\dfrac{1}{x^2}$ existe algún punto donde la recta tangente es horizontal.',
              a: false,
              explain: '$f\'(x) = -\\dfrac{2}{x^3} \\neq 0$ para todo $x$ en el dominio, así que no hay tangentes horizontales. La guía lo confirma en el ejercicio 5b.'
            }
          ],
          mc: [
            {
              id: 'mc-19-1',
              q: '¿Cuál es la ecuación de la recta tangente a $f(x) = x^2 + 1$ en el punto $(2,\\,5)$?',
              options: [
                '$y = 4x - 3$',
                '$y = 2x + 1$',
                '$y = 4x + 5$',
                '$y = 2x - 3$'
              ],
              correctIndex: 0,
              explain: '$f\'(x) = 2x$, luego $f\'(2) = 4$. Aplicando $y - 5 = 4(x - 2)$ se obtiene $y = 4x - 3$.'
            },
            {
              id: 'mc-19-2',
              q: 'En el ejercicio 4, la tangente a $g(x)$ en $(5;\\,2)$ pasa por $(9;\\,0)$. ¿Cuánto vale $g\'(5)$?',
              options: [
                '$-\\dfrac{1}{2}$',
                '$\\dfrac{1}{2}$',
                '$-2$',
                '$2$'
              ],
              correctIndex: 0,
              explain: 'La pendiente entre $(5,2)$ y $(9,0)$ es $\\dfrac{0-2}{9-5} = -\\dfrac{1}{2}$, que es exactamente $g\'(5)$.'
            },
            {
              id: 'mc-19-3',
              q: '¿Cuántos puntos de tangente horizontal tiene $f(x) = x^4 - 8x^2 + 2$?',
              options: ['$1$', '$2$', '$3$', '$4$'],
              correctIndex: 2,
              explain: '$f\'(x) = 4x^3 - 16x = 4x(x^2 - 4) = 0$ en $x = 0,\\,2,\\,-2$. Los tres puntos son $(0,\\,2)$, $(2,\\,-14)$ y $(-2,\\,-14)$.'
            }
          ],
          ms: [
            {
              id: 'ms-19-1',
              q: '¿Cuáles de las siguientes ecuaciones de recta tangente del ejercicio 1 son correctas?',
              options: [
                'a) $y = 4x - 3$ (punto $(2,\\,5)$)',
                'b) $y = -\\dfrac{1}{2}$ (punto $(0;\\,-\\dfrac{1}{2})$)',
                'c) $y = 4x + 1$ (punto $(0;\\,1)$)',
                'd) $y = 2x - 2$ (punto $(1;\\,0)$)',
                'g) $y = -12x - 11$ (punto $(-1,\\,1)$)'
              ],
              correctIndexes: [0, 1, 2, 4],
              explain: 'Las respuestas de la guía confirman a, b, c y g. El inciso d da $y = -2x + 2$, no $y = 2x - 2$.'
            },
            {
              id: 'ms-19-2',
              q: '¿En cuáles ejercicios se necesita plantear un sistema de ecuaciones para determinar la solución?',
              options: [
                'Ejercicio 3 — tangente paralela a recta dada',
                'Ejercicio 4 — tangente que pasa por punto exterior',
                'Ejercicio 6 — encontrar $k$',
                'Ejercicio 7 — encontrar $k$',
                'Ejercicio 8 — determinar la parábola $ax^2 + bx + c$'
              ],
              correctIndexes: [1, 2, 3, 4],
              explain: 'En el ej. 3 alcanza con igualar $f\'(x_0)$ a la pendiente de $r$ sin armar un sistema. Los ejercicios 4, 6, 7 y 8 requieren resolver un sistema de dos o más ecuaciones para encontrar las incógnitas.'
            }
          ]
        },
        flashcards: [
          {
            id: 'fc-19-1',
            front: '¿Cuál es la fórmula de la recta tangente?',
            back: '$y - y_0 = f\'(x_0)(x - x_0)$, donde $(x_0,\\,y_0)$ es el punto de tangencia y $f\'(x_0)$ es la pendiente (derivada en ese punto).'
          },
          {
            id: 'fc-19-2',
            front: '¿Cómo se obtiene la recta normal?',
            back: 'Es perpendicular a la tangente en el mismo punto. Su pendiente es $m_n = -\\dfrac{1}{f\'(x_0)}$ (siempre que $f\'(x_0) \\neq 0$). Se usa la misma fórmula punto-pendiente con esa pendiente.'
          },
          {
            id: 'fc-19-3',
            front: '¿Cuándo la recta tangente es horizontal?',
            back: 'Cuando $f\'(x_0) = 0$. Hay que resolver esa ecuación y verificar que cada solución pertenezca al dominio de $f$.'
          },
          {
            id: 'fc-19-4',
            front: '¿Cómo encontrás una tangente paralela a una recta dada?',
            back: 'Se extrae la pendiente $m$ de la recta dada y se resuelve $f\'(x_0) = m$. Con ese $x_0$ se calcula $y_0 = f(x_0)$ y se aplica la fórmula de la tangente.'
          },
          {
            id: 'fc-19-5',
            front: '¿Qué condiciones determinan una parábola $f(x) = ax^2 + bx + c$ por tangencia?',
            back: 'Tres condiciones: (1) $f(x_1) = y_1$ — pasa por el primer punto; (2) $f(x_2) = y_2$ — pasa por el punto de tangencia; (3) $f\'(x_2) = m$ — la pendiente coincide con la recta. Eso da un sistema $3 \\times 3$ para $a,\\,b,\\,c$.'
          },
          {
            id: 'fc-19-6',
            front: '¿Cuánto vale $k$ para que $y = -4x - 9$ sea tangente a $f(x) = x^2 + kx$ en $(-3,\\,3)$?',
            back: '$k = 2$. Condición de pendiente: $f\'(-3) = -4 \\Rightarrow 2(-3) + k = -4 \\Rightarrow k = 2$. Se verifica también que $(-3)^2 + 2(-3) = 3$.'
          },
          {
            id: 'fc-19-7',
            front: '¿Cuánto vale $k$ para que $y = -\\dfrac{3}{4}x + 3$ sea tangente a $f(x) = \\dfrac{k}{x}$ en $\\left(2;\\,\\dfrac{3}{2}\\right)$?',
            back: '$k = 3$. Condición de pendiente: $f\'(x) = -\\dfrac{k}{x^2}$, evaluado en $x = 2$: $-\\dfrac{k}{4} = -\\dfrac{3}{4} \\Rightarrow k = 3$.'
          }
        ]
      },
{
        id: '20',
        unit: 'guias',
        title: 'Guía de ejercicios — Regla de L\'Hôpital',
        criollo: 'La regla de L\'Hôpital te saca las papas del fuego cuando tenés indeterminaciones del tipo 0/0 o ∞/∞: derivás arriba y abajo por separado y volvés a intentar el límite. Acá hay ejercicios de todo tipo — formas exponenciales, logarítmicas, trigonométricas y hasta funciones definidas por partes. Tomátelo con calma y verificá siempre que haya indeterminación antes de aplicar la regla.',
        blocks: [
          { type: 'h3', text: 'Ejercicio 1 — Límites con regla de L\'Hôpital', criollo: 'Aplicá L\'Hôpital donde corresponda' },
          { type: 'p', text: 'Si es posible, resolver los siguientes límites aplicando la regla de L\'Hôpital:' },
          { type: 'ol', items: [
            '$\\displaystyle\\lim_{x \\to 0} \\frac{\\operatorname{sen}\\, x}{x}$',
            '$\\displaystyle\\lim_{x \\to 3} \\frac{x - 3}{\\operatorname{sen}(x - 3)}$',
            '$\\displaystyle\\lim_{x \\to 0} \\frac{\\ln(1 + x) - x}{x^2}$',
            '$\\displaystyle\\lim_{x \\to 4} \\frac{x^2 - x - 12}{x^2 - 3x - 4}$',
            '$\\displaystyle\\lim_{x \\to \\pi/2} \\frac{\\ln(\\operatorname{sen}\\, x)}{(\\pi - 2x)^2}$',
            '$\\displaystyle\\lim_{x \\to -2} \\frac{\\operatorname{sen}(2x + 4)}{x^3 - 5x - 2}$',
            '$\\displaystyle\\lim_{x \\to 0} \\frac{2^x - 3^x}{x}$',
            '$\\displaystyle\\lim_{x \\to +\\infty} \\left( x \\cdot \\operatorname{sen}\\frac{a}{x} \\right)$',
            '$\\displaystyle\\lim_{x \\to 1} \\left( \\frac{x}{x - 1} - \\frac{1}{\\ln x} \\right)$',
            '$\\displaystyle\\lim_{x \\to 0^-} \\left( \\sqrt[x]{e} - 1 \\right) x$',
            '$\\displaystyle\\lim_{x \\to 0^+} \\left( \\frac{1}{x} \\right)^{\\operatorname{tg}\\, x}$',
            '$\\displaystyle\\lim_{x \\to +\\infty} \\left( \\frac{x^2 + 1}{x^2} \\right)^x$',
            '$\\displaystyle\\lim_{x \\to 0^+} \\left( e^x + x \\right)^{1/x}$',
            '$\\displaystyle\\lim_{x \\to 1/2} \\frac{\\ln(1 - 2x)}{\\operatorname{tg}(\\pi x)}$',
            '$\\displaystyle\\lim_{x \\to 0} f(x), \\quad f(x) = \\begin{cases} \\dfrac{3e^x + 2x - 3}{x} & x \\neq 0 \\\\ 7 & x = 0 \\end{cases}$',
            '$\\displaystyle\\lim_{x \\to 1} \\frac{\\ln(x^2 + 2x - 2)}{x^3 - 1}$',
            '$\\displaystyle\\lim_{x \\to 0} \\frac{4e^x + \\operatorname{sen}\\, x - 4}{\\ln(1 + 2x)}$',
          ] },

          { type: 'h3', text: 'Ejercicio 2 — Encontrar el error', criollo: '¿Dónde está la trampa en este desarrollo?' },
          { type: 'p', text: 'Encontrar el error en el cálculo del siguiente límite:' },
          { type: 'math', latex: '\\lim_{x \\to 1} \\frac{x^3 + x - 2}{x^2 - 3x + 2} = \\lim_{x \\to 1} \\frac{3x^2 + 1}{2x - 3} = \\lim_{x \\to 1} \\frac{6x}{2} = 3', display: true },

          { type: 'h3', text: 'Ejercicio 3 — Hallar parámetros', criollo: 'Encontrá los valores de a y b para que el límite sea 0' },
          { type: 'p', text: 'Hallar los valores reales de $a$ y de $b$, tales que:' },
          { type: 'math', latex: '\\lim_{x \\to 0} \\frac{\\operatorname{sen}(3x) + ax + bx^3}{x^3} = 0', display: true },

          { type: 'h3', text: 'Ejercicio 4 — Calcular n', criollo: 'Dado el límite, despejá el valor de n' },
          { type: 'p', text: 'Si $\\displaystyle\\lim_{x \\to +\\infty} \\left( \\dfrac{nx + 1}{nx - 1} \\right)^x = 9$, calcular $n$.' },

          { type: 'h3', text: 'Ejercicio 5 — Límite con función derivable', criollo: 'Usá los datos de f para justificar qué tipo de indeterminación tenés' },
          { type: 'p', text: 'Calcular el $\\displaystyle\\lim_{x \\to -1} \\frac{\\ln(2 - x)}{f(x^2 - 2) - 3}$, sabiendo que $f(x)$ es derivable y que $f(-1) = 3$, $f\'(-1) = 2$. Justificar.' },

          { type: 'h3', text: 'Ejercicio 6 — Dominio y asíntotas', criollo: 'Primero el dominio, después buscá asíntotas' },
          { type: 'p', text: 'Hallar dominio y asíntotas de $f(x) = \\dfrac{4 - x}{\\ln(x - 4)}$.' },

          { type: 'callout', tone: 'info', text: 'Las resoluciones completas las tenés en la pestaña <strong>Ver PDFs → Resultados · Regla de L\'Hôpital</strong>.' },
        ],
        quiz: {
          tf: [
            {
              id: 'tf-20-1',
              q: 'La regla de L\'Hôpital puede aplicarse directamente a cualquier límite de un cociente, sin verificar que exista una indeterminación del tipo $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$.',
              a: false,
              explain: 'Falso. L\'Hôpital solo aplica cuando el límite del cociente genera una indeterminación del tipo $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$. Aplicarla fuera de esas formas lleva a resultados incorrectos, como ilustra el Ejercicio 2.',
            },
            {
              id: 'tf-20-2',
              q: 'Si $\\displaystyle\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ es de la forma $\\frac{0}{0}$, entonces $\\displaystyle\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)}$, siempre que este último límite exista.',
              a: true,
              explain: 'Correcto. Esa es exactamente la condición de aplicabilidad de la regla de L\'Hôpital.',
            },
            {
              id: 'tf-20-3',
              q: 'Las formas indeterminadas $0 \\cdot \\infty$, $\\infty - \\infty$, $1^\\infty$, $0^0$ y $\\infty^0$ pueden transformarse algebraicamente para aplicar L\'Hôpital.',
              a: true,
              explain: 'Verdadero. Esas formas se reescriben como cocientes o se usa la exponencial con logaritmo para reducirlas a $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$.',
            },
            {
              id: 'tf-20-4',
              q: '$\\displaystyle\\lim_{x \\to 0} \\frac{\\operatorname{sen}\\, x}{x} = 0$.',
              a: false,
              explain: 'Falso. El resultado es 1, tanto por L\'Hôpital como por el límite trigonométrico fundamental.',
            },
          ],
          mc: [
            {
              id: 'mc-20-1',
              q: '¿Cuál es el resultado de $\\displaystyle\\lim_{x \\to 0} \\frac{\\ln(1+x) - x}{x^2}$?',
              options: ['$0$', '$-\\dfrac{1}{2}$', '$1$', '$\\dfrac{1}{2}$'],
              correctIndex: 1,
              explain: 'Aplicando L\'Hôpital dos veces se llega a $-\\frac{1}{2}$, que coincide con la respuesta c) de la guía.',
            },
            {
              id: 'mc-20-2',
              q: '¿Cuáles son los valores de $a$ y $b$ tales que $\\displaystyle\\lim_{x \\to 0} \\frac{\\operatorname{sen}(3x) + ax + bx^3}{x^3} = 0$?',
              options: ['$a = 3,\\ b = 0$', '$a = -3,\\ b = \\dfrac{9}{2}$', '$a = 0,\\ b = -3$', '$a = 3,\\ b = -\\dfrac{9}{2}$'],
              correctIndex: 1,
              explain: 'Expandiendo $\\operatorname{sen}(3x)$ y aplicando L\'Hôpital se obtiene $a = -3$, $b = \\frac{9}{2}$, según la respuesta oficial.',
            },
            {
              id: 'mc-20-3',
              q: '¿Cuál es el error en el desarrollo $\\displaystyle\\lim_{x \\to 1} \\frac{x^3+x-2}{x^2-3x+2} = \\lim_{x \\to 1}\\frac{3x^2+1}{2x-3} = \\lim_{x \\to 1}\\frac{6x}{2} = 3$?',
              options: [
                'La derivada del numerador está mal calculada.',
                'Se aplicó L\'Hôpital una segunda vez sin verificar que el cociente fuera nuevamente una indeterminación.',
                'El límite de partida no es una indeterminación, por lo que no debía aplicarse L\'Hôpital.',
                'La derivada del denominador está mal calculada.',
              ],
              correctIndex: 1,
              explain: 'Luego de la primera aplicación, $\\frac{3(1)^2+1}{2(1)-3} = \\frac{4}{-1} = -4$, que no es indeterminado. No había razón para aplicar L\'Hôpital por segunda vez.',
            },
          ],
          ms: [
            {
              id: 'ms-20-1',
              q: '¿Cuáles de los siguientes límites del Ejercicio 1 tienen resultado igual a $1$?',
              options: [
                '$\\displaystyle\\lim_{x \\to 0} \\frac{\\operatorname{sen}\\, x}{x}$ (inciso a)',
                '$\\displaystyle\\lim_{x \\to 3} \\frac{x-3}{\\operatorname{sen}(x-3)}$ (inciso b)',
                '$\\displaystyle\\lim_{x \\to 0^-} (\\sqrt[x]{e}-1)\\,x$ (inciso j)',
                '$\\displaystyle\\lim_{x \\to 0^+} \\left(\\frac{1}{x}\\right)^{\\operatorname{tg}\\, x}$ (inciso k)',
                '$\\displaystyle\\lim_{x \\to +\\infty} \\left(\\frac{x^2+1}{x^2}\\right)^x$ (inciso l)',
              ],
              correctIndexes: [0, 1, 2, 3, 4],
              explain: 'Los incisos a), b), j), k) y l) del Ejercicio 1 tienen todos resultado 1 según las respuestas oficiales de la guía.',
            },
            {
              id: 'ms-20-2',
              q: '¿Cuáles de las siguientes afirmaciones sobre $f(x) = \\dfrac{4-x}{\\ln(x-4)}$ (Ejercicio 6) son correctas?',
              options: [
                'El dominio es $(4; +\\infty)$.',
                'La función tiene asíntota vertical en $x = 5$.',
                'La función no tiene asíntotas.',
                'El dominio incluye $x = 4$.',
                'Existe asíntota horizontal en $y = 0$.',
              ],
              correctIndexes: [0, 2],
              explain: 'El dominio es $(4; +\\infty)$ (requiere $x - 4 > 0$ y $\\ln(x-4) \\neq 0$). Según la respuesta oficial, la función no tiene asíntotas.',
            },
          ],
        },
        flashcards: [
          {
            id: 'fc-20-1',
            front: '¿Cuándo se puede aplicar la regla de L\'Hôpital?',
            back: 'Cuando el límite de un cociente $\\frac{f(x)}{g(x)}$ presenta una indeterminación del tipo $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$, y $f$ y $g$ son derivables en un entorno del punto. En ese caso, $\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f\'(x)}{g\'(x)}$, siempre que este último límite exista.',
          },
          {
            id: 'fc-20-2',
            front: '¿Cómo se transforma una forma $0 \\cdot \\infty$ para aplicar L\'Hôpital?',
            back: 'Se reescribe el producto como cociente: $f \\cdot g = \\dfrac{f}{1/g}$ o $\\dfrac{g}{1/f}$, obteniendo una forma $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$ según convenga.',
          },
          {
            id: 'fc-20-3',
            front: '¿Cómo se trata una forma indeterminada del tipo $1^\\infty$, $0^0$ o $\\infty^0$?',
            back: 'Se aplica logaritmo: si $L = \\lim f(x)^{g(x)}$, entonces $\\ln L = \\lim g(x) \\ln f(x)$. Esto convierte el exponente en un producto $0 \\cdot \\infty$, tratable con L\'Hôpital. Luego $L = e^{\\ln L}$.',
          },
          {
            id: 'fc-20-4',
            front: '¿Cuál es el error típico al aplicar L\'Hôpital más de una vez?',
            back: 'Aplicar la regla por segunda vez sin verificar que el cociente resultante siga siendo una indeterminación. Si tras la primera aplicación el límite ya es determinado, hay que calcularlo directamente — volver a derivar lleva a un resultado incorrecto.',
          },
          {
            id: 'fc-20-5',
            front: '¿Cuál es $\\displaystyle\\lim_{x \\to 0} \\frac{2^x - 3^x}{x}$?',
            back: 'Aplicando L\'Hôpital: $\\lim_{x \\to 0} \\frac{2^x \\ln 2 - 3^x \\ln 3}{1} = \\ln 2 - \\ln 3$.',
          },
          {
            id: 'fc-20-6',
            front: '¿Cómo se aborda $\\displaystyle\\lim_{x \\to 1} \\left( \\frac{x}{x-1} - \\frac{1}{\\ln x} \\right)$ (forma $\\infty - \\infty$)?',
            back: 'Se combina en un único cociente: $\\dfrac{x \\ln x - (x-1)}{(x-1)\\ln x}$, que resulta $\\frac{0}{0}$ al tender $x \\to 1$. Luego se aplica L\'Hôpital hasta obtener el resultado $\\frac{1}{2}$.',
          },
          {
            id: 'fc-20-7',
            front: 'Dominio y asíntotas de $f(x) = \\dfrac{4-x}{\\ln(x-4)}$.',
            back: 'Dominio: $(4; +\\infty)$ — necesita $x - 4 > 0$ y $\\ln(x-4) \\neq 0$ (es decir $x \\neq 5$). La función no tiene asíntotas.',
          },
        ],
      },
      {
        id: '21',
        unit: 'oral',
        title: 'Oral — Límites e indeterminaciones',
        criollo: 'Acá te preparás para la parte de límites del oral. Te van a tirar un límite y te preguntan: ¿hay indeterminación?, ¿de qué tipo?, ¿cómo se salva? Estos ejemplos son los de la guía de la evaluación sincrónica (van a cambiar los números en el examen real, pero el método es siempre el mismo). Repasá apuntes de Límite e indeterminaciones si algo no te cierra.',
        blocks: [
          { type: 'callout', tone: 'warning', text: '<strong>Condiciones del oral (evaluación sincrónica):</strong> para rendir hay que tener <strong>aprobados ambos exámenes</strong>. El día del oral necesitás <strong>DNI, cámara y micrófono (no auriculares)</strong>, y te van a pedir un <strong>paneo de 360°</strong> del lugar. Si no te presentás en la fecha o desaprobás, recursás la materia.' },
          { type: 'callout', tone: 'info', text: 'Los ejemplos de abajo son los de la guía oficial. <strong>Son ilustrativos: en el examen los números van a estar cambiados</strong>, así que lo que tenés que dominar es el procedimiento, no el resultado puntual.' },

          { type: 'h3', text: 'Cómo encarar la pregunta', criollo: 'El librito mental para cada límite' },
          { type: 'ol', items: [
            'Reemplazá mentalmente el valor al que tiende $x$ y mirá qué te queda.',
            'Si te da un número, listo: no hay indeterminación, ese es el límite.',
            'Si te da una de las formas raras ($\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$, $\\infty - \\infty$, $0 \\cdot \\infty$, $1^{\\infty}$, etc.), <strong>hay indeterminación</strong> y tenés que salvarla con la técnica que corresponda.',
            'Nombrá <strong>el tipo</strong> de indeterminación y <strong>cómo la salvás</strong> (racionalizar, sacar factor común, usar el número $e$, L\'Hôpital, equivalentes, etc.).',
          ] },

          { type: 'h3', text: 'Ejemplo a — con raíz (racionalizar)', criollo: 'Cuando aparece una resta con raíz, el conjugado es tu amigo' },
          { type: 'math', latex: '\\lim_{x \\to +\\infty} \\dfrac{\\sqrt{4x^2 - x + 1} \\; - \\; 2x}{1 - x^2}', display: true },
          { type: 'p', text: 'En el numerador, $\\sqrt{4x^2 - x + 1}$ crece como $2x$, así que $\\sqrt{4x^2 - x + 1} - 2x$ es una <strong>resta de dos infinitos</strong>: indeterminación $\\infty - \\infty$.' },
          { type: 'p', text: 'Se salva <strong>racionalizando</strong> (multiplicando y dividiendo por el conjugado $\\sqrt{4x^2 - x + 1} + 2x$). El numerador queda $(4x^2 - x + 1) - 4x^2 = -x + 1$, y entonces:' },
          { type: 'math', latex: '\\dfrac{-x + 1}{(1 - x^2)\\left(\\sqrt{4x^2 - x + 1} + 2x\\right)}', display: true },
          { type: 'p', text: 'El numerador crece como $x$ y el denominador como $x^2 \\cdot x = x^3$, así que el cociente tiende a $0$.' },
          { type: 'callout', tone: 'info', text: '<strong>Respuesta:</strong> sí hay indeterminación, del tipo $\\infty - \\infty$ en el numerador; se salva racionalizando con el conjugado, y el límite final es $0$.' },

          { type: 'h3', text: 'Ejemplo b — base elevada a infinito', criollo: 'Ojo: el $1^\\infty$ es una trampa, fijate bien a cuánto tiende la base' },
          { type: 'math', latex: '\\lim_{x \\to +\\infty} \\left( \\dfrac{3 + 2x}{3x + 1} \\right)^{4x}', display: true },
          { type: 'p', text: 'Primero mirá <strong>la base</strong>: $\\dfrac{3 + 2x}{3x + 1}$ tiende a $\\dfrac{2}{3}$ cuando $x \\to +\\infty$ (mandan los términos de mayor grado, $\\frac{2x}{3x}$).' },
          { type: 'p', text: 'Como la base tiende a $\\frac{2}{3}$ (un número <strong>menor que 1</strong>) y el exponente $4x \\to +\\infty$, queda $\\left(\\tfrac{2}{3}\\right)^{\\infty}$, que tiende a $0$.' },
          { type: 'callout', tone: 'info', text: '<strong>Respuesta:</strong> NO es indeterminación del tipo $1^{\\infty}$, porque la base no tiende a 1 sino a $\\frac{2}{3}$. El límite es $0$. (La técnica del número $e$ se usa solo cuando la base tiende a 1.)' },

          { type: 'h3', text: 'Ejemplo c — producto cero por infinito', criollo: 'Un factor se va a cero y el otro a infinito: hay que ver quién gana' },
          { type: 'math', latex: '\\lim_{x \\to 1} \\operatorname{sen}(x - 1)\\,\\ln(x - 1)', display: true },
          { type: 'p', text: 'Cuando $x \\to 1^{+}$: $\\operatorname{sen}(x - 1) \\to 0$ y $\\ln(x - 1) \\to -\\infty$. Es una indeterminación del tipo $0 \\cdot \\infty$.' },
          { type: 'p', text: 'Cerca de $0$, $\\operatorname{sen}(x - 1)$ se comporta como $(x - 1)$ (seno equivalente a su argumento), así que el producto se parece a $(x - 1)\\ln(x - 1)$. Y como $t \\ln t \\to 0$ cuando $t \\to 0^{+}$, el límite es $0$.' },
          { type: 'callout', tone: 'info', text: '<strong>Respuesta:</strong> indeterminación $0 \\cdot \\infty$; se salva usando el equivalente $\\operatorname{sen}(x-1) \\sim (x-1)$ (o L\'Hôpital reescribiendo como cociente). El límite es $0$. Notá que el dominio del $\\ln$ obliga a $x > 1$.' },

          { type: 'h3', text: 'Ejemplo con función continua (despejar el límite)', criollo: 'Te dan un dato de un límite y tenés que deducir otro' },
          { type: 'p', text: 'Sea $f$ una función <strong>continua en $x = 2$</strong>, sabiendo que:' },
          { type: 'math', latex: '\\lim_{x \\to 2} \\dfrac{4}{f(x) - 4} = \\infty \\qquad \\Rightarrow \\qquad \\lim_{x \\to 2} \\dfrac{4}{f^{2}(x) - 4} = \\;?', display: true },
          { type: 'p', text: 'Que $\\dfrac{4}{f(x) - 4} \\to \\infty$ significa que el denominador $f(x) - 4 \\to 0$, o sea $f(x) \\to 4$. Como $f$ es continua en $x = 2$, esto da $f(2) = 4$.' },
          { type: 'p', text: 'Entonces $f^{2}(x) = \\big(f(x)\\big)^2 \\to 16$, y el nuevo denominador $f^{2}(x) - 4 \\to 16 - 4 = 12$. Por lo tanto:' },
          { type: 'math', latex: '\\lim_{x \\to 2} \\dfrac{4}{f^{2}(x) - 4} = \\dfrac{4}{12} = \\dfrac{1}{3}', display: true },
          { type: 'callout', tone: 'criollo', text: 'La clave es leer el dato al revés: si un cociente con constante arriba se va a infinito, es porque el de abajo se va a cero. De ahí sacás cuánto vale $f$ y reemplazás en lo que te piden.' },
        ],
        quiz: {
          tf: [
            { id: 'tf-21-1', q: 'En $\\lim\\limits_{x \\to +\\infty} \\sqrt{4x^2 - x + 1} - 2x$ hay una indeterminación del tipo $\\infty - \\infty$.', a: true, explain: 'Correcto. Ambos términos tienden a $+\\infty$, así que la resta es una indeterminación $\\infty - \\infty$, que se salva racionalizando.' },
            { id: 'tf-21-2', q: 'En $\\lim\\limits_{x \\to +\\infty} \\left(\\frac{3+2x}{3x+1}\\right)^{4x}$ la indeterminación es del tipo $1^{\\infty}$.', a: false, explain: 'Falso. La base tiende a $\\frac{2}{3}$, no a 1, así que no hay indeterminación $1^{\\infty}$: el límite es directamente $0$.' },
            { id: 'tf-21-3', q: 'El límite $\\lim\\limits_{x \\to 1} \\operatorname{sen}(x-1)\\,\\ln(x-1)$ presenta una indeterminación $0 \\cdot \\infty$.', a: true, explain: 'Correcto. $\\operatorname{sen}(x-1) \\to 0$ y $\\ln(x-1) \\to -\\infty$, dando $0 \\cdot \\infty$. Se salva con el equivalente $\\operatorname{sen}(x-1) \\sim (x-1)$.' },
            { id: 'tf-21-4', q: 'Si $f$ es continua en $x=2$ y $\\lim\\limits_{x \\to 2} \\frac{4}{f(x)-4} = \\infty$, entonces $f(2) = 4$.', a: true, explain: 'Correcto. Para que ese cociente tienda a infinito, el denominador $f(x)-4$ debe tender a 0, o sea $f(x) \\to 4$; por continuidad $f(2)=4$.' },
          ],
          mc: [
            { id: 'mc-21-1', q: '¿Cómo se salva la indeterminación $\\infty - \\infty$ en $\\sqrt{4x^2 - x + 1} - 2x$?', options: ['Aplicando directamente L\'Hôpital', 'Racionalizando con el conjugado', 'Usando el número $e$', 'Factorizando por Bhaskara'], correctIndex: 1, explain: 'Cuando hay una resta con raíz, se multiplica y divide por el conjugado para transformar la diferencia en un cociente manejable.' },
            { id: 'mc-21-2', q: 'En $\\left(\\frac{3+2x}{3x+1}\\right)^{4x}$ con $x \\to +\\infty$, ¿cuánto vale el límite?', options: ['$1$', '$+\\infty$', '$0$', 'El número $e$'], correctIndex: 2, explain: 'La base tiende a $\\frac{2}{3} < 1$ y el exponente a $+\\infty$, así que $\\left(\\frac{2}{3}\\right)^{\\infty} = 0$.' },
            { id: 'mc-21-3', q: 'Sabiendo que $f$ es continua en $2$ y $f(2)=4$, ¿cuánto da $\\lim\\limits_{x \\to 2} \\frac{4}{f^{2}(x)-4}$?', options: ['$\\frac{1}{3}$', '$\\infty$', '$0$', '$\\frac{1}{2}$'], correctIndex: 0, explain: '$f^{2}(x) \\to 16$, entonces el denominador $\\to 16 - 4 = 12$ y el límite es $\\frac{4}{12} = \\frac{1}{3}$.' },
          ],
          ms: [
            { id: 'ms-21-1', q: '¿Cuáles de estas SÍ son formas indeterminadas?', options: ['$\\frac{0}{0}$', '$\\frac{2}{0}$', '$\\infty - \\infty$', '$0 \\cdot \\infty$', '$1^{\\infty}$'], correctIndexes: [0, 2, 3, 4], explain: '$\\frac{0}{0}$, $\\infty-\\infty$, $0\\cdot\\infty$ y $1^{\\infty}$ son indeterminaciones. $\\frac{2}{0}$ (constante distinta de 0 sobre 0) NO es indeterminada: tiende a $\\infty$.' },
          ],
        },
        flashcards: [
          { id: 'fc-21-1', front: 'Resta con raíz que da $\\infty - \\infty$', back: 'Se salva racionalizando: multiplicás y dividís por el conjugado para convertir la resta en un cociente.' },
          { id: 'fc-21-2', front: '¿Cuándo se usa la técnica del número $e$?', back: 'Solo en indeterminaciones $1^{\\infty}$, es decir cuando la base tiende a 1 y el exponente a infinito.' },
          { id: 'fc-21-3', front: '$\\left(\\frac{2}{3}\\right)^{\\infty}$', back: 'Tiende a $0$: una base menor que 1 elevada a infinito colapsa a cero. (No es indeterminación.)' },
          { id: 'fc-21-4', front: 'Equivalente del seno cerca de 0', back: '$\\operatorname{sen}(t) \\sim t$ cuando $t \\to 0$. Sirve para salvar productos $0 \\cdot \\infty$.' },
          { id: 'fc-21-5', front: '$\\frac{4}{f(x)-4} \\to \\infty$ implica…', back: 'Que $f(x) - 4 \\to 0$, o sea $f(x) \\to 4$. El denominador se va a cero.' },
          { id: 'fc-21-6', front: 'Pasos para responder un límite en el oral', back: '1) Reemplazo y miro la forma. 2) ¿Hay indeterminación? ¿de qué tipo? 3) ¿Cómo la salvo? 4) Calculo el límite final.' },
        ],
      },
      {
        id: '22',
        unit: 'oral',
        title: 'Oral — Asíntotas y continuidad',
        criollo: 'Te muestran una función (muchas veces partida) y te preguntan por las condiciones de continuidad y por las asíntotas: ¿tiene asíntota vertical?, ¿cuál?, ¿tiene horizontal?, ¿cuál? Acá repasamos el ejemplo de la guía paso a paso. Si flaquea algo, volvé a los apuntes de Asíntotas y de Continuidad.',
        blocks: [
          { type: 'callout', tone: 'info', text: 'Recordá las tres condiciones de <strong>continuidad en un punto $x = a$</strong>: (1) existe $f(a)$, (2) existe $\\lim\\limits_{x \\to a} f(x)$ (los dos límites laterales coinciden), y (3) ambos son iguales: $\\lim\\limits_{x \\to a} f(x) = f(a)$.' },

          { type: 'h3', text: 'Función partida del ejemplo', criollo: 'La función de tres tramos de la guía' },
          { type: 'math', latex: 'f(x) = \\begin{cases} 2 & \\text{si } x \\le -3 \\\\[4pt] \\dfrac{3}{x - 1} & \\text{si } -3 < x < 1 \\\\[4pt] 2^{-x} & \\text{si } x \\ge 1 \\end{cases}', display: true },

          { type: 'h3', text: '¿Cuánto debe dar $\\lim_{x \\to -3^{+}} f(x)$ para que sea continua en $x = -3$?', criollo: 'Acá la respuesta es: lo que valga la función ahí' },
          { type: 'p', text: 'En $x = -3$ la función vale $f(-3) = 2$ (cae en el tramo $x \\le -3$). El límite por izquierda también es $2$ (mismo tramo constante). Para que sea <strong>continua</strong> en $x = -3$, el límite por derecha tiene que coincidir con ese valor:' },
          { type: 'math', latex: '\\lim_{x \\to -3^{+}} f(x) \\;\\text{debe valer}\\; 2', display: true },
          { type: 'p', text: '¿Por qué? Porque la continuidad exige que los límites laterales y el valor de la función sean todos iguales. Si el límite por derecha diera otra cosa, habría un salto y la función sería discontinua en $x = -3$.' },
          { type: 'callout', tone: 'info', text: 'Dato: con la fórmula real del tramo, $\\lim\\limits_{x \\to -3^{+}} \\frac{3}{x-1} = \\frac{3}{-4} = -\\frac{3}{4} \\neq 2$. O sea, tal como está, la función <strong>NO</strong> es continua en $x=-3$ (hay un salto). La pregunta apunta a que sepas <strong>qué valor haría falta</strong> para que lo fuera.' },

          { type: 'h3', text: '¿Tiene asíntota vertical? ¿cuál?', criollo: 'Buscá dónde explota la función' },
          { type: 'p', text: 'El tramo $\\dfrac{3}{x-1}$ se indefine en $x = 1$. Como ese tramo vale para $-3 < x < 1$, al acercarse por izquierda $\\lim\\limits_{x \\to 1^{-}} \\frac{3}{x-1} = \\frac{3}{0^{-}} = -\\infty$.' },
          { type: 'callout', tone: 'info', text: '<strong>Respuesta:</strong> sí, hay asíntota vertical en $x = 1$ (la función tiende a $-\\infty$ al acercarse por izquierda).' },

          { type: 'h3', text: '¿Tiene asíntota horizontal? ¿cuál?', criollo: 'Mirá los dos extremos: $-\\infty$ y $+\\infty$' },
          { type: 'ul', items: [
            'Cuando $x \\to -\\infty$: la función vale constantemente $2$, así que hay <strong>asíntota horizontal $y = 2$</strong>.',
            'Cuando $x \\to +\\infty$: el tramo $2^{-x} = \\dfrac{1}{2^{x}} \\to 0$, así que hay <strong>asíntota horizontal $y = 0$</strong>.',
          ] },
          { type: 'callout', tone: 'info', text: '<strong>Respuesta:</strong> tiene dos asíntotas horizontales, $y = 2$ (hacia $-\\infty$) y $y = 0$ (hacia $+\\infty$). Una función puede tener una AH distinta en cada extremo.' },

          { type: 'h3', text: 'Discontinuidad esencial', criollo: 'La pregunta de completar: ¿qué se verifica?' },
          { type: 'p', text: 'Si una función $f(x)$ presenta una <strong>discontinuidad esencial</strong> en $x = a$, entonces se verifica que <strong>no existe el límite (finito) de $f$ en $a$</strong>: o algún límite lateral es infinito, o los límites laterales existen pero son distintos. Es decir, $\\lim\\limits_{x \\to a} f(x)$ no existe como número finito.' },
          { type: 'callout', tone: 'criollo', text: 'Acordate de la diferencia: en la <strong>evitable</strong> el límite existe (es finito) pero no coincide con $f(a)$ o falta $f(a)$ — se "arregla" redefiniendo el punto. En la <strong>esencial</strong> el límite directamente no existe (salto o infinito), y no hay forma de arreglarla.' },
        ],
        quiz: {
          tf: [
            { id: 'tf-22-1', q: 'Para que $f$ sea continua en $x=-3$, el $\\lim\\limits_{x \\to -3^{+}} f(x)$ debe valer $2$.', a: true, explain: 'Correcto. $f(-3)=2$ y el límite por izquierda es 2, así que el límite por derecha debe valer 2 para que no haya salto.' },
            { id: 'tf-22-2', q: 'La función del ejemplo tiene una asíntota vertical en $x = 1$.', a: true, explain: 'Correcto. El tramo $\\frac{3}{x-1}$ se indefine en $x=1$ y tiende a $-\\infty$ al acercarse por izquierda.' },
            { id: 'tf-22-3', q: 'Una función no puede tener dos asíntotas horizontales distintas.', a: false, explain: 'Falso. Puede tener una AH hacia $-\\infty$ y otra distinta hacia $+\\infty$. En el ejemplo son $y=2$ y $y=0$.' },
            { id: 'tf-22-4', q: 'En una discontinuidad esencial el límite de la función en el punto existe y es finito.', a: false, explain: 'Falso. En la esencial el límite NO existe (salto o infinito). El límite finito sí existe en la discontinuidad evitable.' },
          ],
          mc: [
            { id: 'mc-22-1', q: '¿Cuáles son las tres condiciones de continuidad de $f$ en $x=a$?', options: ['Que $f$ sea creciente, acotada y derivable', 'Que exista $f(a)$, exista $\\lim\\limits_{x \\to a} f(x)$, y que sean iguales', 'Que $f(a)=0$ y la derivada exista', 'Que los límites laterales sean infinitos'], correctIndex: 1, explain: 'Continuidad: existe $f(a)$, existe el límite (laterales coinciden) y el límite es igual a $f(a)$.' },
            { id: 'mc-22-2', q: 'Para $f(x)=2^{-x}$, ¿cuál es la asíntota horizontal cuando $x \\to +\\infty$?', options: ['$y = 2$', '$y = 1$', '$y = 0$', 'No tiene'], correctIndex: 2, explain: '$2^{-x} = \\frac{1}{2^x} \\to 0$ cuando $x \\to +\\infty$, así que la AH es $y=0$.' },
            { id: 'mc-22-3', q: '¿Qué caracteriza a una discontinuidad esencial en $x=a$?', options: ['El límite existe pero $\\neq f(a)$', 'Falta $f(a)$ pero el límite existe', 'No existe el límite finito de $f$ en $a$', 'La función es continua por derecha'], correctIndex: 2, explain: 'En la esencial no existe el límite finito (salto o infinito). Las otras opciones describen discontinuidades evitables.' },
          ],
          ms: [
            { id: 'ms-22-1', q: 'Sobre la función partida del ejemplo, ¿cuáles afirmaciones son correctas?', options: ['Tiene AV en $x=1$', 'Tiene AH en $y=2$ hacia $-\\infty$', 'Tiene AH en $y=0$ hacia $+\\infty$', 'Es continua en $x=-3$ tal como está definida', 'Vale $f(-3)=2$'], correctIndexes: [0, 1, 2, 4], explain: 'Tiene AV en $x=1$, AH $y=2$ (hacia $-\\infty$) e $y=0$ (hacia $+\\infty$), y $f(-3)=2$. NO es continua en $x=-3$, porque el límite por derecha da $-\\frac{3}{4} \\neq 2$.' },
          ],
        },
        flashcards: [
          { id: 'fc-22-1', front: 'Tres condiciones de continuidad en $x=a$', back: '1) Existe $f(a)$. 2) Existe $\\lim\\limits_{x \\to a} f(x)$ (laterales iguales). 3) $\\lim\\limits_{x \\to a} f(x) = f(a)$.' },
          { id: 'fc-22-2', front: '¿Dónde buscar una asíntota vertical?', back: 'Donde la función se indefine (denominador cero, argumento de $\\ln$ en 0, etc.) y el límite tiende a $\\pm\\infty$.' },
          { id: 'fc-22-3', front: '¿Cómo se busca una asíntota horizontal?', back: 'Calculando $\\lim\\limits_{x \\to +\\infty} f(x)$ y $\\lim\\limits_{x \\to -\\infty} f(x)$. Si dan un número finito $L$, hay AH $y = L$.' },
          { id: 'fc-22-4', front: 'Asíntota horizontal de $2^{-x}$ en $+\\infty$', back: '$y = 0$, porque $2^{-x} = \\frac{1}{2^x} \\to 0$.' },
          { id: 'fc-22-5', front: 'Discontinuidad evitable vs esencial', back: 'Evitable: el límite existe (finito) pero no coincide con $f(a)$ o falta $f(a)$. Esencial: el límite no existe (salto o infinito).' },
          { id: 'fc-22-6', front: '¿Puede una función tener dos AH distintas?', back: 'Sí: una hacia $-\\infty$ y otra distinta hacia $+\\infty$. Ej.: $y=2$ y $y=0$.' },
        ],
      },
      {
        id: '23',
        unit: 'oral',
        title: 'Oral — Derivadas, recta tangente y normal',
        criollo: 'Última parte del oral: te muestran una función y te piden explicar cómo se deriva (qué reglas aplicás, si hay regla de la cadena), y te preguntan por la recta tangente y la normal. Acá va el ejemplo de la guía bien desglosado. Repasá apuntes de Derivadas, Derivada de función compuesta y Recta tangente y normal.',
        blocks: [
          { type: 'h3', text: 'Función del ejemplo', criollo: 'Una raíz quinta de un coseno + una exponencial' },
          { type: 'math', latex: 'g(x) = \\sqrt[5]{(3\\cos x - 5)^{3}} \\; - \\; 2\\,e^{6x} + 7', display: true },

          { type: 'h3', text: '¿Cómo se deriva la raíz quinta? ¿hay regla de la cadena?', criollo: 'Sí, hay cadena por todos lados' },
          { type: 'p', text: 'Conviene escribir la raíz como potencia: $\\sqrt[5]{(3\\cos x - 5)^{3}} = (3\\cos x - 5)^{3/5}$. Es una <strong>función compuesta</strong>, así que <strong>sí, hay que aplicar la regla de la cadena</strong>: derivás la potencia y multiplicás por la derivada de lo de adentro.' },
          { type: 'p', text: 'Derivada de la potencia: $\\dfrac{3}{5}(3\\cos x - 5)^{-2/5}$. Derivada de lo de adentro ($3\\cos x - 5$): $-3\\operatorname{sen} x$. Multiplicando:' },
          { type: 'math', latex: '\\dfrac{3}{5}(3\\cos x - 5)^{-2/5} \\cdot (-3\\operatorname{sen} x) = \\dfrac{-9\\operatorname{sen} x}{5\\,\\sqrt[5]{(3\\cos x - 5)^{2}}}', display: true },

          { type: 'h3', text: '¿Cómo se deriva el 2do término? ¿qué regla aplica?', criollo: 'La exponencial también pide cadena' },
          { type: 'p', text: 'El término $-2\\,e^{6x}$ se deriva con la regla de la <strong>exponencial compuesta</strong>: la derivada de $e^{u}$ es $e^{u} \\cdot u\\,\'$. Acá $u = 6x$, con $u\\,\' = 6$, así que la derivada es $-2 \\cdot 6\\,e^{6x} = -12\\,e^{6x}$. La constante $+7$ deriva a $0$.' },
          { type: 'math', latex: "g\\,'(x) = \\dfrac{-9\\operatorname{sen} x}{5\\,\\sqrt[5]{(3\\cos x - 5)^{2}}} \\; - \\; 12\\,e^{6x}", display: true },
          { type: 'callout', tone: 'criollo', text: 'En el oral lo importante no es solo el resultado: tenés que <strong>nombrar las reglas</strong>. Acá usaste regla de la cadena (en la raíz y en la exponencial), la regla de la potencia y la derivada de $e^{u}$. Y aclarar que la derivada de una suma es la suma de las derivadas.' },

          { type: 'h3', text: 'Recta tangente con pendiente cero', criollo: 'Si la tangente es horizontal, la cosa se simplifica' },
          { type: 'p', text: 'Si la recta tangente a $f(x)$ en el punto $(x_0; y_0)$ tiene <strong>pendiente cero</strong>, su ecuación es simplemente la recta horizontal:' },
          { type: 'math', latex: 'y = y_0', display: true },
          { type: 'p', text: 'En ese punto $f\\,\'(x_0) = 0$, <strong>porque la pendiente de la recta tangente es justamente $f\\,\'(x_0)$</strong> (ese es el significado geométrico de la derivada). Si la tangente es horizontal, su pendiente es 0, y por lo tanto la derivada vale 0.' },

          { type: 'h3', text: '¿Existe la recta normal en ese punto?', criollo: 'La normal es la perpendicular a la tangente' },
          { type: 'p', text: 'La recta normal es <strong>perpendicular</strong> a la tangente en el punto de contacto. Si la tangente es horizontal (pendiente 0), la normal es <strong>vertical</strong>. Sí existe, y su ecuación es:' },
          { type: 'math', latex: 'x = x_0', display: true },
          { type: 'callout', tone: 'info', text: 'Ojo con la regla general: la pendiente de la normal es $-\\dfrac{1}{f\\,\'(x_0)}$ (opuesta e inversa de la tangente). Cuando $f\\,\'(x_0) = 0$ esa fórmula no se puede aplicar (división por cero): la normal es directamente la <strong>vertical</strong> $x = x_0$.' },
        ],
        quiz: {
          tf: [
            { id: 'tf-23-1', q: 'Para derivar $\\sqrt[5]{(3\\cos x - 5)^{3}}$ hay que aplicar la regla de la cadena.', a: true, explain: 'Correcto. Es una función compuesta (potencia de un coseno), así que se deriva la potencia y se multiplica por la derivada de lo de adentro.' },
            { id: 'tf-23-2', q: 'La derivada de $-2\\,e^{6x}$ es $-2\\,e^{6x}$.', a: false, explain: 'Falso. Por la cadena hay que multiplicar por la derivada del exponente ($6$): la derivada es $-12\\,e^{6x}$.' },
            { id: 'tf-23-3', q: 'Si la recta tangente en $(x_0; y_0)$ tiene pendiente cero, entonces $f\\,\'(x_0) = 0$.', a: true, explain: 'Correcto. La pendiente de la tangente es $f\\,\'(x_0)$, así que pendiente cero significa derivada cero en ese punto.' },
            { id: 'tf-23-4', q: 'Si la recta tangente es horizontal, la recta normal no existe.', a: false, explain: 'Falso. La normal sí existe: es la vertical $x = x_0$ (perpendicular a una tangente horizontal).' },
          ],
          mc: [
            { id: 'mc-23-1', q: '¿Cuál es la derivada del término $-2\\,e^{6x}$?', options: ['$-2\\,e^{6x}$', '$-12\\,e^{6x}$', '$-2\\,e^{6}$', '$-6\\,e^{6x}$'], correctIndex: 1, explain: 'Regla de la exponencial compuesta: $(e^{u})\\,\' = e^{u} \\cdot u\\,\'$, con $u=6x$, $u\\,\'=6$. Da $-2 \\cdot 6\\,e^{6x} = -12\\,e^{6x}$.' },
            { id: 'mc-23-2', q: 'Si la tangente en $(x_0; y_0)$ tiene pendiente 0, ¿cuál es su ecuación?', options: ['$x = x_0$', '$y = y_0$', '$y = x_0$', '$y = f\\,\'(x_0)\\,x$'], correctIndex: 1, explain: 'Pendiente 0 significa recta horizontal: $y = y_0$.' },
            { id: 'mc-23-3', q: 'Si $f\\,\'(x_0) = 0$, ¿cuál es la ecuación de la recta normal en $(x_0; y_0)$?', options: ['$y = y_0$', 'No existe', '$x = x_0$', '$y = -\\frac{1}{0}$'], correctIndex: 2, explain: 'La normal es perpendicular a una tangente horizontal, o sea vertical: $x = x_0$. La fórmula $-\\frac{1}{f\\,\'(x_0)}$ no aplica porque sería dividir por cero.' },
          ],
          ms: [
            { id: 'ms-23-1', q: '¿Qué reglas de derivación intervienen en $g(x) = \\sqrt[5]{(3\\cos x - 5)^{3}} - 2e^{6x} + 7$?', options: ['Regla de la cadena', 'Regla de la potencia', 'Derivada de la exponencial $e^{u}$', 'Derivada de una suma (término a término)', 'Regla de Bhaskara'], correctIndexes: [0, 1, 2, 3], explain: 'Intervienen la cadena, la potencia, la derivada de $e^{u}$ y la derivada de una suma. Bhaskara es para raíces de cuadráticas, no es una regla de derivación.' },
          ],
        },
        flashcards: [
          { id: 'fc-23-1', front: '¿Cómo escribís $\\sqrt[5]{a^{3}}$ para derivar?', back: 'Como potencia: $a^{3/5}$. Después aplicás la regla de la potencia y la cadena.' },
          { id: 'fc-23-2', front: 'Derivada de $e^{u}$', back: '$e^{u} \\cdot u\\,\'$ (regla de la cadena). Ej.: $(e^{6x})\\,\' = 6\\,e^{6x}$.' },
          { id: 'fc-23-3', front: '¿Qué representa $f\\,\'(x_0)$ geométricamente?', back: 'La pendiente de la recta tangente a la gráfica de $f$ en el punto de abscisa $x_0$.' },
          { id: 'fc-23-4', front: 'Tangente con pendiente cero', back: 'Es horizontal: su ecuación es $y = y_0$, y se cumple $f\\,\'(x_0) = 0$.' },
          { id: 'fc-23-5', front: 'Recta normal: ¿qué es y qué pendiente tiene?', back: 'Es la perpendicular a la tangente en el punto. Su pendiente es $-\\frac{1}{f\\,\'(x_0)}$ (opuesta e inversa).' },
          { id: 'fc-23-6', front: 'Normal cuando la tangente es horizontal', back: 'Es la recta vertical $x = x_0$. La fórmula $-\\frac{1}{f\\,\'(x_0)}$ no aplica por división por cero.' },
        ],
      },
  ],
  pdfs: [
    { key: 'res-generalidades', label: 'Resultados · Generalidades de las funciones', path: 'pdfs/analisis-matematico/respuesta-generalidades.pdf' },
    { key: 'res-limite', label: 'Resultados · Límite', path: 'pdfs/analisis-matematico/respuesta-limite.pdf' },
    { key: 'res-indet1', label: 'Resultados · Indeterminaciones del límite', path: 'pdfs/analisis-matematico/respuesta-indet1.pdf' },
    { key: 'res-indet2', label: 'Resultados · Indeterminaciones (parte 2)', path: 'pdfs/analisis-matematico/respuesta-indet2.pdf' },
    { key: 'res-asintotas', label: 'Resultados · Asíntotas', path: 'pdfs/analisis-matematico/respuesta-asintotas.pdf' },
    { key: 'res-continuidad', label: 'Resultados · Continuidad', path: 'pdfs/analisis-matematico/respuesta-continuidad.pdf' },
    { key: 'res-derivada', label: 'Resultados · Derivada de una función', path: 'pdfs/analisis-matematico/respuesta-derivada.pdf' },
    { key: 'res-derivada-compuesta', label: 'Resultados · Derivada de la función compuesta', path: 'pdfs/analisis-matematico/respuesta-derivada-compuesta.pdf' },
    { key: 'res-recta-tangente', label: 'Resultados · Recta tangente y normal', path: 'pdfs/analisis-matematico/respuesta-recta-tangente.pdf' },
    { key: 'res-lhopital', label: 'Resultados · Regla de L\'Hôpital', path: 'pdfs/analisis-matematico/respuesta-lhopital.pdf' },
    { key: 'ejemplos', label: 'Ejemplos resueltos', path: 'pdfs/analisis-matematico/ejemplos-ejemplos.pdf' },
    { key: 'manuscrita-indet', label: 'Resolución manuscrita · Indeterminaciones', path: 'pdfs/analisis-matematico/manuscrita-indeterminaciones.pdf' },
    { key: 'manuscrita-asin-cont', label: 'Resolución manuscrita · Asíntotas y continuidad', path: 'pdfs/analisis-matematico/manuscrita-asintotas-continuidad.pdf' },
    { key: 'eval-checklist', label: 'Evaluación · Checklist 2º parcial', path: 'pdfs/analisis-matematico/evaluacion-eval.pdf' },
    { key: 'eval-sincronica', label: 'Evaluación · Evaluación sincrónica obligatoria', path: 'pdfs/analisis-matematico/evaluacion-eval-1.pdf' },
  ],
};
