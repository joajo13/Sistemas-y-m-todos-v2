/**
 * Banco NUEVO (anti-spoiler) — analisis-matematico
 *
 * Mapa { [sectionId]: { quiz2: { tf, mc, ms }, flashcards2: [...] } }.
 * content.js mergea esto sobre las secciones por id (sec.quiz2 / sec.flashcards2).
 * Generado para autoevaluación: opciones homogéneas, sin pistas de forma.
 */
export default {
  "1": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-1-1",
          "q": "En una función lineal $f(x)=mx+b$, el valor $b$ corresponde a la ordenada al origen.",
          "a": true,
          "explain": "Tal cual: $b$ es el término independiente y representa la ordenada al origen, donde la recta cruza el eje $y$."
        },
        {
          "id": "tf2-1-2",
          "q": "En la función cuadrática $f(x)=ax^2+bx+c$, si $a<0$ entonces la parábola es cóncava positiva y su vértice es un mínimo.",
          "a": false,
          "explain": "Al revés: con $a<0$ la parábola es cóncava negativa, abre hacia abajo y el vértice es el punto máximo."
        },
        {
          "id": "tf2-1-3",
          "q": "Dos rectas son perpendiculares cuando sus pendientes son opuestas e inversas entre sí.",
          "a": true,
          "explain": "Así es. Perpendiculares: pendientes opuestas e inversas. Paralelas: pendientes iguales."
        },
        {
          "id": "tf2-1-4",
          "q": "El dominio de la función logarítmica es el conjunto de todos los números reales sin restricción.",
          "a": false,
          "explain": "No: el dominio del logaritmo son los reales positivos, el argumento siempre debe ser mayor que cero."
        },
        {
          "id": "tf2-1-5",
          "q": "En la función exponencial $f(x)=a^x+b$, el término $b$ corresponde a la asíntota horizontal.",
          "a": true,
          "explain": "Correcto. La base es $a$ y el término independiente $b$ marca la asíntota horizontal de la curva."
        }
      ],
      "mc": [
        {
          "id": "mc2-1-1",
          "q": "¿Qué condición sobre la base $a$ hace que la función exponencial $f(x)=a^x+b$ sea creciente en todo su dominio?",
          "options": [
            "Que la base $a$ sea mayor que uno",
            "Que la base $a$ esté entre cero y uno",
            "Que la base $a$ sea igual a cero exacto",
            "Que la base $a$ sea cualquier negativo"
          ],
          "correctIndex": 0,
          "explain": "Si la base es mayor a 1, la exponencial crece; si está entre 0 y 1, decrece. La base nunca es 0, 1 ni negativa."
        },
        {
          "id": "mc2-1-2",
          "q": "Según la forma factorizada $f(x)=a(x-x_1)(x-x_2)$, ¿qué puntos de la parábola quedan a la vista?",
          "options": [
            "El vértice de la parábola",
            "La ordenada al origen",
            "El eje de simetría vertical",
            "Las raíces de la función"
          ],
          "correctIndex": 3,
          "explain": "La factorizada muestra las raíces $x_1$ y $x_2$. La canónica muestra el vértice y la polinómica la ordenada al origen $(0,c)$."
        },
        {
          "id": "mc2-1-3",
          "q": "Si la fórmula de la pendiente es $m=\\dfrac{y_2-y_1}{x_2-x_1}$, ¿qué representa geométricamente ese valor?",
          "options": [
            "El punto de corte con el eje",
            "La inclinación de la recta",
            "El valor de la abscisa media",
            "La distancia entre dos puntos"
          ],
          "correctIndex": 1,
          "explain": "La pendiente mide cuánto varía $y$ por cada unidad de $x$, y eso es la inclinación de la recta."
        },
        {
          "id": "mc2-1-4",
          "q": "¿Cuál es el valor del discriminante que indica que la cuadrática tiene una raíz doble?",
          "options": [
            "Cuando $b^2-4ac>0$",
            "Cuando $b^2-4ac<0$",
            "Cuando $b^2-4ac=0$",
            "Cuando $b^2-4ac=1$"
          ],
          "correctIndex": 2,
          "explain": "Discriminante igual a cero: una raíz doble. Positivo: dos raíces distintas. Negativo: no hay raíces reales."
        },
        {
          "id": "mc2-1-5",
          "q": "¿Cómo se obtiene la abscisa del vértice de una parábola a partir de la fórmula de Bhaskara?",
          "options": [
            "Mediante $x_v=-\\dfrac{b}{2a}$",
            "Mediante $x_v=\\dfrac{b}{2a}$",
            "Mediante $x_v=-\\dfrac{c}{2a}$",
            "Mediante $x_v=\\dfrac{b^2}{4ac}$"
          ],
          "correctIndex": 0,
          "explain": "Observando Bhaskara, el vértice queda en $x_v=-\\dfrac{b}{2a}$, justo en el medio entre las dos raíces."
        }
      ],
      "ms": [
        {
          "id": "ms2-1-1",
          "q": "¿Cuáles de las siguientes afirmaciones sobre la función lineal $f(x)=mx+b$ son correctas según el texto?",
          "options": [
            "Con $m>0$ la recta resulta creciente",
            "Con $m<0$ la recta resulta decreciente",
            "El valor $m$ es la ordenada al origen",
            "Se exige que la pendiente sea $m\\neq 0$",
            "El gráfico siempre es una parábola"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Creciente con $m>0$, decreciente con $m<0$ y se pide $m\\neq 0$. La ordenada al origen es $b$, no $m$, y el gráfico es una recta."
        },
        {
          "id": "ms2-1-2",
          "q": "¿Cuáles de estas son formas equivalentes de escribir la función cuadrática mencionadas en el apunte?",
          "options": [
            "La forma polinómica común",
            "La forma canónica con vértice",
            "La forma factorizada con raíces",
            "La forma logarítmica de base",
            "La forma exponencial creciente"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres formas son polinómica, canónica y factorizada. Logarítmica y exponencial son otros tipos de función, no formas de la cuadrática."
        },
        {
          "id": "ms2-1-3",
          "q": "Sobre el ejemplo $g(x)=2x+2$ y $f(x)=2x-4$, ¿cuáles afirmaciones se cumplen?",
          "options": [
            "Las rectas $g$ y $f$ son perpendiculares",
            "Las rectas $g$ y $f$ tienen pendientes opuestas",
            "Las rectas $g$ y $f$ se cortan en un punto",
            "Las rectas $g$ y $f$ son coincidentes idénticas",
            "Las rectas $g$ y $f$ tienen ordenadas iguales"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: $g$ y $f$ son paralelas porque comparten pendiente $2$, no se cortan, no son coincidentes ni tienen igual ordenada al origen."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-1-1",
        "front": "¿Qué es una función de $A$ en $B$?",
        "back": "Una relación que asigna a cada elemento $x$ de $A$ uno y sólo un elemento $y$ en $B$."
      },
      {
        "id": "fc2-1-2",
        "front": "Fórmula general de la función lineal",
        "back": "$f(x)=mx+b$ con $m,b\\in\\mathbb{R}$ y $m\\neq 0$; $m$ es la pendiente y $b$ la ordenada al origen."
      },
      {
        "id": "fc2-1-3",
        "front": "Condición de rectas paralelas y perpendiculares",
        "back": "Paralelas: pendientes iguales. Perpendiculares: pendientes opuestas e inversas (se cortan a 90°)."
      },
      {
        "id": "fc2-1-4",
        "front": "Tres formas de la función cuadrática",
        "back": "Polinómica $ax^2+bx+c$, canónica $a(x-x_v)^2+y_v$ y factorizada $a(x-x_1)(x-x_2)$."
      },
      {
        "id": "fc2-1-5",
        "front": "Fórmula de Bhaskara",
        "back": "$x_{1,2}=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$, sirve para hallar las raíces de la cuadrática."
      },
      {
        "id": "fc2-1-6",
        "front": "Discriminante y cantidad de raíces",
        "back": "$b^2-4ac>0$: dos raíces reales; $=0$: una raíz doble; $<0$: ninguna raíz real."
      },
      {
        "id": "fc2-1-7",
        "front": "Concavidad de la parábola según $a$",
        "back": "$a>0$: cóncava positiva, vértice mínimo; $a<0$: cóncava negativa, vértice máximo."
      },
      {
        "id": "fc2-1-8",
        "front": "Dominio de la función logarítmica",
        "back": "Los reales positivos: el argumento debe ser mayor que cero, lo que delimita la asíntota vertical."
      }
    ]
  },
  "2": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-2-1",
          "q": "Si los límites laterales de una función en un punto son distintos, entonces el límite en ese punto no existe.",
          "a": true,
          "explain": "Esa es la propiedad 2: si el lateral izquierdo difiere del derecho, no hay límite en el punto."
        },
        {
          "id": "tf2-2-2",
          "q": "El sistema de notación que se usa hoy en el cálculo es el que ideó Newton, no el de Leibniz.",
          "a": false,
          "explain": "No: el texto dice que la notación que se usa hoy es la de Leibniz, aunque ambos descubrieron el cálculo."
        },
        {
          "id": "tf2-2-3",
          "q": "Si una función tiene límite en un punto, ese límite es único.",
          "a": true,
          "explain": "Correcto, es la propiedad 1: el límite, cuando existe, es único."
        },
        {
          "id": "tf2-2-4",
          "q": "Para $f(x)=\\dfrac{1}{x}$, cuando $x$ tiende a infinito la función tiende a cero.",
          "a": true,
          "explain": "Tal cual: al crecer mucho $x$, el cociente $1/x$ se achica y tiende a cero."
        },
        {
          "id": "tf2-2-5",
          "q": "En $\\lim_{x\\to 0^-}\\dfrac{1}{x}$, acercándose por valores negativos, el resultado es $+\\infty$.",
          "a": false,
          "explain": "Por la izquierda (negativos) da $-\\infty$; el $+\\infty$ se obtiene acercándose por la derecha."
        }
      ],
      "mc": [
        {
          "id": "mc2-2-1",
          "q": "Para $f(x)=\\dfrac{x^2-1}{x-1}$ con dominio $\\mathbb{R}-\\{1\\}$, ¿a qué valor tiende la función cuando $x\\to 1$?",
          "options": [
            "Tiende al valor cero",
            "Tiende al valor uno",
            "Tiende al valor dos",
            "No existe el límite"
          ],
          "correctIndex": 2,
          "explain": "Simplificando queda $f(x)=x+1$, y al acercarse $x$ a 1 las imágenes se acercan a 2."
        },
        {
          "id": "mc2-2-2",
          "q": "En la definición épsilon-delta, ¿de qué depende el número positivo $\\delta$ que se elige?",
          "options": [
            "Depende del épsilon dado",
            "Depende del punto $x_0$ fijo",
            "Depende del límite $l$ buscado",
            "Depende del dominio $D$ total"
          ],
          "correctIndex": 0,
          "explain": "El $\\delta$ se elige en función de $\\varepsilon$: dado el épsilon, existe un delta dependiente de él."
        },
        {
          "id": "mc2-2-3",
          "q": "Para la función a trozos $g(x)$ del ejemplo 1, los laterales en $x=2$ dan 4 por derecha y 6 por izquierda. ¿Qué se concluye?",
          "options": [
            "El límite vale cuatro",
            "El límite vale seis",
            "El límite no existe",
            "El límite vale cinco"
          ],
          "correctIndex": 2,
          "explain": "Como los laterales son distintos (4 y 6), no se puede decir a qué número tiende: el límite no existe."
        },
        {
          "id": "mc2-2-4",
          "q": "Frente a una indeterminación del tipo $\\dfrac{\\infty}{\\infty}$ con variable infinita, ¿qué técnica indica el texto?",
          "options": [
            "Multiplicar por el conjugado",
            "Dividir por el mayor grado",
            "Factorizar y luego simplificar",
            "Reemplazar de manera directa"
          ],
          "correctIndex": 1,
          "explain": "Para $\\infty/\\infty$ se divide numerador y denominador por la mayor potencia (mayor grado) del denominador."
        },
        {
          "id": "mc2-2-5",
          "q": "En el ejemplo $\\lim_{x\\to 3}\\left(\\dfrac{2}{5}\\right)^{1/(x-3)}$, ¿por qué se concluye que no existe el límite?",
          "options": [
            "Porque la base es negativa siempre",
            "Porque el exponente queda en cero",
            "Porque los laterales dan distinto",
            "Porque el resultado da indeterminado"
          ],
          "correctIndex": 2,
          "explain": "Por izquierda da $+\\infty$ y por derecha da $0$: laterales distintos, así que el límite no existe."
        }
      ],
      "ms": [
        {
          "id": "ms2-2-1",
          "q": "¿Cuáles de las siguientes son propiedades algebraicas de los límites tal como figuran en el texto?",
          "options": [
            "El límite de una constante $k$ es $k$",
            "El límite de $x$ cuando $x\\to a$ es $a$",
            "El límite de un producto es el producto de límites",
            "El límite de una suma es la suma de límites",
            "El cociente vale aunque el denominador tienda a cero"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son propiedades válidas. El cociente solo vale si el límite del denominador es distinto de cero."
        },
        {
          "id": "ms2-2-2",
          "q": "Según el apunte, ¿cuáles de estas expresiones se consideran indeterminaciones?",
          "options": [
            "La forma $0/0$",
            "La forma $\\infty/\\infty$",
            "La forma $1^\\infty$",
            "La forma $\\infty^0$",
            "La forma $5/2$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "$0/0$, $\\infty/\\infty$, $1^\\infty$ y $\\infty^0$ son indeterminaciones. $5/2$ es un cociente común, da resultado directo."
        },
        {
          "id": "ms2-2-3",
          "q": "Sobre la evolución histórica del cálculo que cuenta el apunte, ¿cuáles afirmaciones son verdaderas?",
          "options": [
            "El cálculo lo descubrió únicamente Newton solo",
            "La notación vigente la creó Isaac Newton",
            "El término cálculo viene de contar con dedos",
            "El nombre Análisis surge desde el siglo XV",
            "Leibniz inventó el cálculo en el siglo XVI"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: lo descubrieron Newton y Leibniz a la vez, la notación es de Leibniz, calculus viene de piedrecita, y el Análisis se nombra desde el siglo XIX."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-2-1",
        "front": "¿Qué significa que $\\lim_{x\\to x_0}f(x)=l$?",
        "back": "Que las imágenes se aproximan al valor $l$ cuando las $x$ toman valores próximos a $x_0$."
      },
      {
        "id": "fc2-2-2",
        "front": "Definición épsilon-delta del límite",
        "back": "Dado $\\varepsilon>0$ existe $\\delta>0$ tal que si $0<|x-x_0|<\\delta$ entonces $|f(x)-l|<\\varepsilon$."
      },
      {
        "id": "fc2-2-3",
        "front": "Límites laterales de $f(x)=1/x$ en $x=0$",
        "back": "Por la derecha tiende a $+\\infty$ y por la izquierda tiende a $-\\infty$."
      },
      {
        "id": "fc2-2-4",
        "front": "Propiedad de unicidad del límite",
        "back": "Si una función tiene límite en un punto, ese límite es único."
      },
      {
        "id": "fc2-2-5",
        "front": "¿Cuándo no existe el límite en un punto?",
        "back": "Cuando los límites laterales en ese punto son distintos entre sí."
      },
      {
        "id": "fc2-2-6",
        "front": "Origen de la palabra cálculo",
        "back": "Del latín calculus, que significa piedrecita, en referencia a contar con piedras."
      },
      {
        "id": "fc2-2-7",
        "front": "Aporte de Newton y Leibniz",
        "back": "En el siglo XVII descubrieron el cálculo diferencial e integral; la notación actual es la de Leibniz."
      },
      {
        "id": "fc2-2-8",
        "front": "Técnica para $\\infty/\\infty$ con variable infinita",
        "back": "Dividir numerador y denominador por la mayor potencia de $x$ del denominador."
      }
    ]
  },
  "3": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-3-1",
          "q": "La Regla de Ruffini se utiliza para dividir un polinomio por otro de grado 1.",
          "a": true,
          "explain": "Exacto, Ruffini sirve para dividir un polinomio por uno de grado uno, como $(x-2)$."
        },
        {
          "id": "tf2-3-2",
          "q": "Frente a una indeterminación $0/0$ en cociente de polinomios, la mejor opción es dividir por la mayor potencia de $x$.",
          "a": false,
          "explain": "No: eso es para $\\infty/\\infty$. En $0/0$ con polinomios se factoriza y se cancela el factor problemático."
        },
        {
          "id": "tf2-3-3",
          "q": "Si dos polinomios del cociente tienen el mismo grado, el límite al infinito es el cociente de los coeficientes de mayor grado.",
          "a": true,
          "explain": "Correcto: con igual grado, el límite es $a_n/b_m$, el cociente de los coeficientes principales."
        },
        {
          "id": "tf2-3-4",
          "q": "Para salvar una diferencia de raíces del tipo $\\infty-\\infty$ se multiplica por el conjugado de la función.",
          "a": true,
          "explain": "Sí: se multiplica y divide por el conjugado, y si queda $\\infty/\\infty$ se divide por $\\sqrt{x^2}=|x|$."
        },
        {
          "id": "tf2-3-5",
          "q": "Entre exponencial, polinómica y logarítmica, la que tiende más rápido a infinito es la logarítmica.",
          "a": false,
          "explain": "Al revés: la exponencial es la más rápida, después las polinómicas y por último las logarítmicas."
        }
      ],
      "mc": [
        {
          "id": "mc2-3-1",
          "q": "En el problema de la utilidad $B(x)=\\dfrac{2000x+10}{x+5}$, ¿cuál es el tope máximo de utilidad cuando $x\\to+\\infty$?",
          "options": [
            "El valor de cinco pesos",
            "El tope de dos mil pesos",
            "El valor de diez pesos justos",
            "El valor de un solo peso"
          ],
          "correctIndex": 1,
          "explain": "Igual grado arriba y abajo: el límite es el cociente de coeficientes principales $2000/1=2000$."
        },
        {
          "id": "mc2-3-2",
          "q": "¿Cómo se factoriza la diferencia de cuadrados $x^2-81$?",
          "options": [
            "Como $(x-9)(x+9)$",
            "Como $(x-81)(x+1)$",
            "Como $(x-9)^2$ exacto",
            "Como $9(x-9)(x+1)$"
          ],
          "correctIndex": 0,
          "explain": "Diferencia de cuadrados: $x^2-a^2=(x-a)(x+a)$, así que $x^2-81=(x-9)(x+9)$."
        },
        {
          "id": "mc2-3-3",
          "q": "En cocientes que involucran raíces cuadradas con indeterminación, ¿qué conviene hacer según el texto?",
          "options": [
            "Dividir por la mayor potencia",
            "Multiplicar por el conjugado",
            "Aplicar la regla de Ruffini",
            "Reemplazar de forma directa"
          ],
          "correctIndex": 1,
          "explain": "Con raíces conviene multiplicar por el conjugado de la expresión que tiene la raíz, para cancelarla."
        },
        {
          "id": "mc2-3-4",
          "q": "Para $\\lim_{x\\to\\infty}\\dfrac{p(x)}{q(x)}$, si el grado de $p$ es menor que el de $q$, ¿cuánto vale el límite?",
          "options": [
            "El límite vale infinito",
            "El límite vale cero",
            "El límite es el cociente $a_n/b_m$",
            "El límite vale uno"
          ],
          "correctIndex": 1,
          "explain": "Si el numerador tiene menor grado que el denominador, el límite es cero."
        },
        {
          "id": "mc2-3-5",
          "q": "En el límite $\\lim_{x\\to 3}\\dfrac{2x-6}{x^2-9}$, tras factorizar y simplificar, ¿cuál es el resultado?",
          "options": [
            "El resultado es $\\dfrac{1}{3}$",
            "El resultado es $\\dfrac{2}{3}$",
            "El resultado es $\\dfrac{1}{6}$",
            "El resultado es $\\dfrac{2}{9}$"
          ],
          "correctIndex": 0,
          "explain": "Queda $\\dfrac{2}{x+3}$ y al reemplazar $x=3$ da $\\dfrac{2}{6}=\\dfrac{1}{3}$."
        }
      ],
      "ms": [
        {
          "id": "ms2-3-1",
          "q": "¿Cuáles de las siguientes son herramientas de factorización que recuerda el apunte para indeterminaciones $0/0$?",
          "options": [
            "Sacar factor común",
            "Diferencia de cuadrados",
            "Factorizar el polinomio de segundo grado",
            "Regla de Ruffini",
            "Dividir por la mayor potencia de $x$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Factor común, diferencia de cuadrados, factorizar la cuadrática y Ruffini sirven para $0/0$. Dividir por la mayor potencia es para $\\infty/\\infty$."
        },
        {
          "id": "ms2-3-2",
          "q": "Sobre el orden de velocidad hacia infinito entre tipos de función, ¿cuáles afirmaciones son correctas?",
          "options": [
            "La exponencial es la más rápida",
            "Las polinómicas van en el medio",
            "Las logarítmicas son las más lentas",
            "$\\lim_{x\\to\\infty}\\dfrac{x^n}{e^x}=0$",
            "Las logarítmicas superan a la exponencial"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "El orden es exponencial, luego polinómicas, luego logarítmicas; por eso $x^n/e^x\\to 0$. La logarítmica nunca supera a la exponencial."
        },
        {
          "id": "ms2-3-3",
          "q": "Respecto del límite $\\lim_{x\\to-2}\\dfrac{12-3x^2}{2x^3+x^2-5x+2}$, ¿cuáles afirmaciones son verdaderas según el desarrollo?",
          "options": [
            "Es una indeterminación del tipo $0/0$",
            "El factor que se cancela es $(x+2)$",
            "El numerador se factoriza con diferencia de cuadrados",
            "El resultado final es $\\dfrac{12}{15}$",
            "El denominador se factoriza con Ruffini"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Todas son correctas: es $0/0$, se cancela $(x+2)$, el numerador usa diferencia de cuadrados, el denominador Ruffini y el resultado es $12/15$."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-3-1",
        "front": "¿Qué son las indeterminaciones de un límite?",
        "back": "Formas como $0/0$, $\\infty/\\infty$, $\\infty-\\infty$, $0\\cdot\\infty$, $1^\\infty$, $0^0$, $\\infty^0$ cuyo resultado no se determina de antemano."
      },
      {
        "id": "fc2-3-2",
        "front": "Técnica para indeterminación $0/0$ en polinomios",
        "back": "Factorizar numerador y denominador y cancelar el factor que los hace tender a cero."
      },
      {
        "id": "fc2-3-3",
        "front": "¿Para qué sirve la Regla de Ruffini?",
        "back": "Para dividir un polinomio por otro de grado 1, útil al factorizar en la indeterminación $0/0$."
      },
      {
        "id": "fc2-3-4",
        "front": "Técnica para indeterminación $\\infty/\\infty$ en polinomios",
        "back": "Dividir numerador y denominador por la mayor potencia de $x$ que aparezca."
      },
      {
        "id": "fc2-3-5",
        "front": "Comparación de grados al infinito",
        "back": "Grado $p>$ grado $q$: límite $\\infty$; grado $p<$ grado $q$: límite $0$; grados iguales: cociente $a_n/b_m$."
      },
      {
        "id": "fc2-3-6",
        "front": "Técnica para $\\infty-\\infty$ con raíces",
        "back": "Multiplicar por el conjugado; si queda $\\infty/\\infty$, dividir por $\\sqrt{x^2}=|x|$."
      },
      {
        "id": "fc2-3-7",
        "front": "Orden de velocidad hacia infinito",
        "back": "La exponencial tiende más rápido, luego las polinómicas y por último las logarítmicas."
      },
      {
        "id": "fc2-3-8",
        "front": "Diferencia de cuadrados",
        "back": "$x^2-a^2=(x-a)(x+a)$; por ejemplo $x^2-81=(x-9)(x+9)$."
      }
    ]
  },
  "4": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-4-1",
          "q": "El límite notable establece que $\\lim_{t\\to 0}\\dfrac{\\sen t}{t}=1$.",
          "a": true,
          "explain": "Correcto, ese es el límite notable del seno, y también vale su inverso $\\dfrac{t}{\\sen t}\\to 1$."
        },
        {
          "id": "tf2-4-2",
          "q": "Para la indeterminación $1^\\infty$ hay que recurrir a la definición del número $e$.",
          "a": true,
          "explain": "Tal cual: el número $e$ es la herramienta para salvar la forma $1^\\infty$."
        },
        {
          "id": "tf2-4-3",
          "q": "El número $e$ se define como $\\lim_{x\\to\\infty}\\left(1+\\dfrac{1}{x}\\right)^x$.",
          "a": true,
          "explain": "Sí, esa es una de las definiciones de $e$; la otra equivalente es $\\lim_{x\\to 0}(1+x)^{1/x}$."
        },
        {
          "id": "tf2-4-4",
          "q": "En el ejemplo $\\lim_{x\\to 0}\\dfrac{\\sen(3x)}{3x}$, tras el cambio de variable el resultado es 3.",
          "a": false,
          "explain": "No: el cambio $t=3x$ lleva al límite notable, que vale 1, no 3."
        },
        {
          "id": "tf2-4-5",
          "q": "En el ejemplo del seno con Ruffini, el resultado final de $\\lim_{x\\to-3}\\dfrac{x^3+2x^2+9}{\\sen(2x+6)}$ es $\\dfrac{15}{2}$.",
          "a": true,
          "explain": "Así es: el límite notable da 1 y la parte polinómica da $\\dfrac{15}{2}$, que es el resultado final."
        }
      ],
      "mc": [
        {
          "id": "mc2-4-1",
          "q": "Para aplicar el límite notable del seno, ¿qué debe cumplirse entre el argumento del seno y el denominador?",
          "options": [
            "Que sean exactamente iguales",
            "Que el argumento sea el doble",
            "Que difieran en una constante",
            "Que el denominador valga cero"
          ],
          "correctIndex": 0,
          "explain": "El argumento del seno debe ser igual al denominador (o numerador) para que aplique el límite notable."
        },
        {
          "id": "mc2-4-2",
          "q": "En el ejemplo $\\lim_{x\\to-3}\\dfrac{x^3+2x^2+9}{\\sen(2x+6)}$, ¿qué se hace para acomodar el argumento del seno?",
          "options": [
            "Se multiplica y divide por 2",
            "Se multiplica y divide por 3",
            "Se aplica el conjugado directo",
            "Se reemplaza el valor directo"
          ],
          "correctIndex": 0,
          "explain": "Se multiplica y divide por 2 para que el argumento $2(x+3)$ coincida con el factor $(x+3)$ del numerador."
        },
        {
          "id": "mc2-4-3",
          "q": "¿Cuál es el resultado final del límite $\\lim_{x\\to\\infty}\\left(\\dfrac{3x+2}{3x}\\right)^{4x}$?",
          "options": [
            "El resultado es $e^{4}$",
            "El resultado es $e^{2/3}$",
            "El resultado es $e^{8/3}$",
            "El resultado es $e^{3}$"
          ],
          "correctIndex": 2,
          "explain": "Acomodando base y exponente queda la forma de $e$ elevada a $4x\\cdot\\dfrac{2}{3x}=\\dfrac{8}{3}$, o sea $e^{8/3}$."
        },
        {
          "id": "mc2-4-4",
          "q": "En $\\lim_{x\\to 0}\\dfrac{\\sen(3x)}{3x}$, ¿qué cambio de variable se usa para llegar al límite notable?",
          "options": [
            "El cambio $t=x$",
            "El cambio $t=3x$",
            "El cambio $t=x/3$",
            "El cambio $t=x+3$"
          ],
          "correctIndex": 1,
          "explain": "Con $t=3x$, cuando $x\\to 0$ también $t\\to 0$, y queda $\\dfrac{\\sen t}{t}=1$."
        },
        {
          "id": "mc2-4-5",
          "q": "En el ejemplo $1^\\infty$, ¿qué se hace primero para encarar la resolución?",
          "options": [
            "Se opera primero el exponente",
            "Se aplica la regla de Ruffini",
            "Se reemplaza el infinito directo",
            "Se trabaja la base interna"
          ],
          "correctIndex": 3,
          "explain": "Primero se trabaja la función dentro del paréntesis (la base) hasta darle la forma $1+\\dfrac{1}{\\cdot}$, después el exponente."
        }
      ],
      "ms": [
        {
          "id": "ms2-4-1",
          "q": "¿Cuáles de estos pasos forman parte de la resolución del ejemplo del seno con Ruffini?",
          "options": [
            "Factorizar el numerador con Ruffini",
            "Factorizar el argumento del seno",
            "Multiplicar y dividir por 2",
            "Aplicar la propiedad del producto de límites",
            "Multiplicar por el conjugado del seno"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Se factoriza con Ruffini, se factoriza el argumento, se multiplica y divide por 2 y se usa el producto de límites. El conjugado no aparece acá."
        },
        {
          "id": "ms2-4-2",
          "q": "Sobre el número $e$ y la indeterminación $1^\\infty$, ¿cuáles afirmaciones son correctas?",
          "options": [
            "$\\lim_{x\\to\\infty}\\left(1+\\dfrac{1}{x}\\right)^x=e$",
            "$\\lim_{x\\to 0}(1+x)^{1/x}=e$",
            "El número $e$ resuelve la forma $1^\\infty$",
            "El número $e$ resuelve la forma $0/0$ del seno",
            "La base del paréntesis debe quedar como $1+\\dfrac{1}{\\cdot}$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Las dos definiciones de $e$ son correctas, $e$ resuelve $1^\\infty$ y la base se acomoda a $1+\\dfrac{1}{\\cdot}$. La forma $0/0$ del seno se resuelve con el límite notable, no con $e$."
        },
        {
          "id": "ms2-4-3",
          "q": "Respecto del límite notable del seno, ¿cuáles de estas igualdades o ideas son válidas según el texto?",
          "options": [
            "$\\lim_{t\\to 0}\\dfrac{\\sen t}{t}=1$",
            "$\\lim_{t\\to 0}\\dfrac{t}{\\sen t}=1$",
            "Sirve para indeterminaciones $0/0$ con seno",
            "Se puede usar como cálculo mental auxiliar",
            "$\\lim_{t\\to 0}\\dfrac{\\sen t}{t}=0$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las dos formas del límite notable valen 1, sirven para $0/0$ con seno y se pueden aplicar como cálculo mental. La quinta es falsa: da 1, no 0."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-4-1",
        "front": "Límite notable del seno",
        "back": "$\\lim_{t\\to 0}\\dfrac{\\sen t}{t}=1$, y equivalentemente $\\lim_{t\\to 0}\\dfrac{t}{\\sen t}=1$."
      },
      {
        "id": "fc2-4-2",
        "front": "¿Cuándo se usa el límite notable del seno?",
        "back": "Para salvar indeterminaciones $0/0$ donde aparece la función seno."
      },
      {
        "id": "fc2-4-3",
        "front": "Condición clave del límite notable",
        "back": "El argumento del seno debe ser igual al denominador (o numerador), si hace falta se acomoda con cambio de variable."
      },
      {
        "id": "fc2-4-4",
        "front": "Definiciones del número $e$",
        "back": "$\\lim_{x\\to\\infty}\\left(1+\\dfrac{1}{x}\\right)^x=e$ o bien $\\lim_{x\\to 0}(1+x)^{1/x}=e$."
      },
      {
        "id": "fc2-4-5",
        "front": "¿Qué indeterminación resuelve el número $e$?",
        "back": "La indeterminación del tipo $1^\\infty$."
      },
      {
        "id": "fc2-4-6",
        "front": "Resultado de $\\lim_{x\\to\\infty}\\left(\\dfrac{3x+2}{3x}\\right)^{4x}$",
        "back": "Da $e^{8/3}$, acomodando la base a la forma de $e$ y operando el exponente."
      },
      {
        "id": "fc2-4-7",
        "front": "Resultado del ejemplo del seno con Ruffini",
        "back": "$\\lim_{x\\to-3}\\dfrac{x^3+2x^2+9}{\\sen(2x+6)}=\\dfrac{15}{2}$, combinando el límite notable (1) y la parte polinómica."
      },
      {
        "id": "fc2-4-8",
        "front": "Pasos generales para resolver un $1^\\infty$",
        "back": "Primero acomodar la base a $1+\\dfrac{1}{\\cdot}$ y luego ajustar el exponente para que aparezca la definición de $e$."
      }
    ]
  },
  "5": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-5-1",
          "q": "Una recta es asíntota de $f(x)$ si la distancia entre la función y la recta tiende a cero cuando $x$ tiende a un punto o al infinito.",
          "a": true,
          "explain": "Tal cual la definición del texto: asíntota es la recta cuya distancia a la función tiende a cero, ya sea con $x \\to a$ o con $x \\to \\infty$. Esa es la idea central de toda asíntota."
        },
        {
          "id": "tf2-5-2",
          "q": "Una función racional siempre tiene asíntota oblicua sin importar los grados del numerador y del denominador.",
          "a": false,
          "explain": "Falso: según el texto, las racionales tienen oblicua solo si el grado del numerador es uno más que el del denominador. No es algo que pase siempre."
        },
        {
          "id": "tf2-5-3",
          "q": "Una función puede cruzar su asíntota horizontal incluso infinitas veces, a diferencia de la vertical que nunca se cruza.",
          "a": true,
          "explain": "Sí, el ejemplo de $\\frac{\\operatorname{sen}(x)}{x}$ muestra que la función corta a la horizontal en infinitos puntos. La vertical, en cambio, jamás se cruza."
        },
        {
          "id": "tf2-5-4",
          "q": "Para que $x = a$ sea asíntota vertical, el punto $a$ debe pertenecer siempre al interior del dominio de la función.",
          "a": false,
          "explain": "Falso: el texto dice que $a$ suele estar fuera del dominio, o ser un extremo abierto, o un punto de corte. No tiene por qué ser un punto interior del dominio."
        },
        {
          "id": "tf2-5-5",
          "q": "La asíntota horizontal es un caso particular de la oblicua que aparece cuando la pendiente $a$ vale cero y $b$ es finito.",
          "a": true,
          "explain": "Correcto: si al calcular la oblicua te queda $a = 0$ y $b$ existe y es finito, la asíntota es horizontal con ecuación $y = b$. Es la oblicua con pendiente nula."
        }
      ],
      "mc": [
        {
          "id": "mc2-5-1",
          "q": "¿Cuál es la condición para que la recta $x = a$ sea asíntota vertical de $f$?",
          "options": [
            "Que el límite de $f(x)$ cuando $x \\to a$ (o por un lado) sea infinito",
            "Que el límite de $f(x)$ cuando $x \\to a$ sea finito y distinto de cero",
            "Que el límite de $f(x)/x$ cuando $x \\to \\infty$ valga exactamente uno",
            "Que el límite de $f(x)$ cuando $x \\to \\infty$ sea igual a $a$"
          ],
          "correctIndex": 0,
          "explain": "La vertical aparece cuando $f$ explota cerca de un punto: el límite (bilateral o lateral) en $x \\to a$ da infinito. Las otras describen horizontal u oblicua, no vertical."
        },
        {
          "id": "mc2-5-2",
          "q": "Para hallar la pendiente $a$ de una asíntota oblicua $y = ax + b$, ¿qué límite se calcula?",
          "options": [
            "El límite de $f(x) - b$ cuando $x$ tiende a un punto finito",
            "El límite del cociente $f(x)/x$ cuando $x$ tiende a infinito",
            "El límite de $f(x) + ax$ cuando $x$ tiende a un valor cualquiera",
            "El límite lateral de $f(x)$ cuando $x$ tiende al punto $a$"
          ],
          "correctIndex": 1,
          "explain": "La pendiente sale de $a = \\lim_{x \\to \\infty} f(x)/x$. Después con esa $a$ calculás $b = \\lim (f(x) - ax)$. Las otras mezclan fórmulas de otros casos."
        },
        {
          "id": "mc2-5-3",
          "q": "Según el texto, ¿qué pasa si al calcular la oblicua los límites $a$ o $b$ dan infinitos?",
          "options": [
            "La función tiene una oblicua distinta por cada lado",
            "La función pasa a tener una asíntota horizontal en $y = b$",
            "La gráfica no tiene asíntota oblicua ni horizontal",
            "La función presenta una asíntota vertical en ese punto"
          ],
          "correctIndex": 2,
          "explain": "El texto es claro: si $a$ o $b$ resultan límites infinitos, no hay ni oblicua ni horizontal. No se transforma en otra cosa, simplemente no existe ese tipo de asíntota."
        },
        {
          "id": "mc2-5-4",
          "q": "En el Ejemplo 6, para $g(x) = \\frac{x^2}{x-2}$ se obtiene $a = 1$ y $b = 2$. ¿Cuál es la asíntota oblicua?",
          "options": [
            "La recta $y = 2x + 1$ válida solo para $x \\to +\\infty$",
            "La recta $y = x - 2$ válida solo para $x \\to -\\infty$",
            "La recta $y = 2x - 1$ por ambos lados del infinito",
            "La recta $y = x + 2$ para $x \\to \\pm\\infty$"
          ],
          "correctIndex": 3,
          "explain": "Con $a = 1$ y $b = 2$ la recta es $y = x + 2$, y el texto aclara que vale para $x \\to \\pm\\infty$. Las otras invierten los coeficientes o el lado."
        },
        {
          "id": "mc2-5-5",
          "q": "¿Cuál es la cantidad máxima de asíntotas oblicuas (contando la horizontal como caso particular) que puede tener una función?",
          "options": [
            "Una sola asíntota oblicua por toda la función",
            "Dos asíntotas oblicuas como máximo posible",
            "Tres asíntotas oblicuas como mucho en total",
            "Infinitas asíntotas oblicuas según el caso"
          ],
          "correctIndex": 1,
          "explain": "El texto dice que una función puede tener a lo sumo dos oblicuas (una por cada lado del infinito). Por eso el máximo es dos, no una ni tres."
        }
      ],
      "ms": [
        {
          "id": "ms2-5-1",
          "q": "¿Cuáles de estas afirmaciones sobre asíntotas verticales son correctas según el texto?",
          "options": [
            "El punto $a$ puede ser un extremo abierto del dominio de la función",
            "Una función puede tener finitas, infinitas o ninguna asíntota vertical",
            "El punto $a$ siempre pertenece al interior del dominio de la función",
            "La vertical aparece cuando el límite en $x \\to a$ es infinito",
            "La función nunca llega a cruzar a su asíntota vertical"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Todas son del texto salvo la tercera: $a$ suele estar fuera del dominio o ser extremo abierto o punto de corte, no en el interior. Las otras cuatro sí valen."
        },
        {
          "id": "ms2-5-2",
          "q": "¿Cuáles de las siguientes son condiciones que el texto exige para tener una asíntota horizontal $y = b$ con $x \\to +\\infty$?",
          "options": [
            "Que la pendiente del cociente $f(x)/x$ sea distinta de cero",
            "Que el límite de $f(x)$ cuando $x \\to +\\infty$ sea igual a $b$",
            "Que la función presente un punto fuera de su dominio",
            "Que el numerador tenga grado mayor que el del denominador",
            "Que el límite de $f(x) - b$ con $x \\to +\\infty$ sea infinito"
          ],
          "correctIndexes": [
            1
          ],
          "explain": "La única correcta es la segunda: $\\lim_{x \\to +\\infty} f(x) = b$. Las demás contradicen al texto: para horizontal la pendiente es cero y la diferencia $f(x) - b$ tiende a cero, no a infinito."
        },
        {
          "id": "ms2-5-3",
          "q": "¿Cuáles de estos enunciados sobre el cálculo de asíntotas oblicuas son verdaderos según el texto?",
          "options": [
            "Las racionales tienen oblicua cuando el numerador supera al denominador en dos grados",
            "Toda función polinómica de grado dos posee siempre una asíntota oblicua",
            "Una asíntota vertical se calcula con el límite del cociente $f(x)/x$",
            "La pendiente de la oblicua nunca puede llegar a valer exactamente cero",
            "Toda función continua en los reales tiene al menos una asíntota oblicua"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta: las racionales tienen oblicua cuando el numerador supera por UN grado (no dos), la pendiente sí puede valer cero (ahí es horizontal), y nada obliga a una continua a tener oblicua. Era una MS sin correctas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-5-1",
        "front": "¿Qué es una asíntota de $f(x)$?",
        "back": "Una recta cuya distancia a la función tiende a cero cuando $x$ tiende a un punto $a$ o cuando $x$ tiende a infinito."
      },
      {
        "id": "fc2-5-2",
        "front": "Condición de asíntota vertical $x = a$",
        "back": "Que $\\lim_{x \\to a} f(x) = \\infty$, o que alguno de los límites laterales ($x \\to a^+$ o $x \\to a^-$) sea infinito."
      },
      {
        "id": "fc2-5-3",
        "front": "Definición de asíntota oblicua $y = ax + b$",
        "back": "La recta a la que $f$ se acerca en el infinito: $\\lim_{x \\to \\infty} (f(x) - (ax + b)) = 0$."
      },
      {
        "id": "fc2-5-4",
        "front": "Fórmulas de los coeficientes de la oblicua",
        "back": "$a = \\lim_{x \\to \\infty} \\frac{f(x)}{x}$ y $b = \\lim_{x \\to \\infty} (f(x) - ax)$."
      },
      {
        "id": "fc2-5-5",
        "front": "¿Cuándo tiene oblicua una función racional?",
        "back": "Solo cuando el grado del numerador es exactamente uno más que el grado del denominador."
      },
      {
        "id": "fc2-5-6",
        "front": "Asíntota horizontal como caso de la oblicua",
        "back": "Si al calcular la oblicua queda $a = 0$ y $b$ finito, la asíntota es horizontal: $y = b$."
      },
      {
        "id": "fc2-5-7",
        "front": "¿Una función cruza sus asíntotas?",
        "back": "Puede cruzar la horizontal incluso infinitas veces (ej. $\\frac{\\operatorname{sen}(x)}{x}$), pero la vertical nunca se cruza."
      },
      {
        "id": "fc2-5-8",
        "front": "Máximo de asíntotas oblicuas/horizontales",
        "back": "Como mucho dos (una por cada lado del infinito), tomando la horizontal como caso particular de la oblicua."
      }
    ]
  },
  "6": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-6-1",
          "q": "Para que $f$ sea continua en $x = a$ deben cumplirse las tres condiciones: que exista $f(a)$, que exista el límite y que ambos coincidan.",
          "a": true,
          "explain": "Exacto: existencia de $f(a)$, existencia del límite finito $l$, e igualdad $f(a) = l$. Si falla cualquiera de las tres, hay discontinuidad."
        },
        {
          "id": "tf2-6-2",
          "q": "Si el límite de $f$ cuando $x \\to a$ es finito, la discontinuidad en ese punto se clasifica como esencial.",
          "a": false,
          "explain": "Falso: si el límite es finito, la discontinuidad es evitable (la podés parchear). La esencial es cuando el límite es infinito o no existe."
        },
        {
          "id": "tf2-6-3",
          "q": "En el Ejemplo 3 con límites laterales distintos en $x = 0$, la discontinuidad es esencial y no se puede redefinir.",
          "a": true,
          "explain": "Sí: como los laterales son distintos no existe el límite, así que la discontinuidad es esencial y no hay forma de redefinir $h$ para volverla continua."
        },
        {
          "id": "tf2-6-4",
          "q": "Una función está siempre definida y es continua en los puntos que no pertenecen a su dominio.",
          "a": false,
          "explain": "Falso: en los puntos que no pertenecen al dominio la función es discontinua seguro. No puede ser continua donde ni siquiera está definida."
        },
        {
          "id": "tf2-6-5",
          "q": "En el Ejemplo 4, el valor de $a$ que hace evitable la discontinuidad se obtiene pidiendo que el numerador se anule en $x = 2$.",
          "a": true,
          "explain": "Correcto: como el denominador tiende a cero, para que el límite sea finito el numerador también debe anularse. De $3 \\cdot 2^2 - a = 0$ sale $a = 12$."
        }
      ],
      "mc": [
        {
          "id": "mc2-6-1",
          "q": "¿Cuál de estas NO es una de las tres condiciones de continuidad de $f$ en $x = a$?",
          "options": [
            "Que exista el valor de la función $f(a)$ en el punto",
            "Que exista el límite finito de $f(x)$ cuando $x \\to a$",
            "Que el valor $f(a)$ coincida con el límite $l$ obtenido",
            "Que la derivada $f'(a)$ exista y sea un número finito"
          ],
          "correctIndex": 3,
          "explain": "La continuidad pide solo tres cosas: que exista $f(a)$, que exista el límite y que coincidan. La derivada no entra en la definición de continuidad."
        },
        {
          "id": "mc2-6-2",
          "q": "¿Cómo se clasifica una discontinuidad cuando el límite en el punto es infinito o no existe?",
          "options": [
            "Como discontinuidad evitable que se puede redefinir sin problema",
            "Como discontinuidad esencial que no se arregla",
            "Como continuidad lateral existente por uno de los dos lados",
            "Como punto regular sin ningún tipo de discontinuidad presente"
          ],
          "correctIndex": 1,
          "explain": "Si el límite es infinito o no existe, la discontinuidad es esencial: no hay manera de redefinir la función para volverla continua ahí."
        },
        {
          "id": "mc2-6-3",
          "q": "En el Ejemplo 1, $f(x) = \\frac{x^2 - 4}{x - 2}$ en $x = 2$. ¿Por qué la discontinuidad es evitable?",
          "options": [
            "Porque $f(2)$ está definida pero el límite no existe",
            "Porque los límites laterales en $x = 2$ son distintos",
            "Porque el límite existe y es finito, vale cuatro",
            "Porque la función tiene una asíntota vertical en dos"
          ],
          "correctIndex": 2,
          "explain": "Simplificando queda $\\lim_{x \\to 2}(x+2) = 4$: el límite existe y es finito. Como $f(2)$ no está definida pero el límite sí, la podés redefinir y es evitable."
        },
        {
          "id": "mc2-6-4",
          "q": "En el Ejemplo 2, $g(2) = 6$ pero $\\lim_{x \\to 2} g(x) = 4$. ¿Qué condición de continuidad falla?",
          "options": [
            "Falla la tercera: $f(a)$ no coincide con el límite",
            "Falla la primera: no existe el valor de $g(2)$",
            "Falla la segunda: el límite en el punto no existe",
            "Fallan las tres condiciones de continuidad juntas"
          ],
          "correctIndex": 0,
          "explain": "Existe $g(2) = 6$ (1ª ok) y existe el límite $= 4$ (2ª ok), pero $4 \\neq 6$: falla la tercera, la igualdad. Por eso es evitable, redefiniendo $g(2) = 4$."
        },
        {
          "id": "mc2-6-5",
          "q": "Según el texto, ¿en qué puntos hay que analizar siempre si una función a trozos puede ser discontinua?",
          "options": [
            "En los máximos y mínimos relativos de la función",
            "En los puntos de corte entre los distintos trozos",
            "En los puntos donde la derivada se anula a cero",
            "En los extremos del intervalo de integración"
          ],
          "correctIndex": 1,
          "explain": "El texto dice que en los puntos de corte hay que analizar el límite y ver si se cumplen las condiciones 2 y 3. Ahí es donde una a trozos puede romperse."
        }
      ],
      "ms": [
        {
          "id": "ms2-6-1",
          "q": "¿Cuáles de estas afirmaciones sobre discontinuidades evitables son correctas según el texto?",
          "options": [
            "Ocurren cuando el límite en el punto resulta finito",
            "La del Ejemplo 1 se da por $f(a)$ no definida",
            "La del Ejemplo 2 se da por $f(a)$ con valor incorrecto",
            "Siempre se pueden redefinir para volver la función continua",
            "Aparecen únicamente cuando el límite vale infinito"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son del texto: la evitable es por límite finito, sea por $f(a)$ ausente (Ej.1) o con valor equivocado (Ej.2), y se redefine. La última describe la esencial."
        },
        {
          "id": "ms2-6-2",
          "q": "En el Ejemplo 4, $f(x) = \\frac{3x^2 - a}{4 - 2x}$ debe tener discontinuidad evitable en $x = 2$. ¿Qué es correcto?",
          "options": [
            "El dominio de $f$ es todo $\\mathbb{R}$ salvo el punto $x = 2$",
            "Para que el límite sea finito, el numerador debe anularse",
            "Se plantea la ecuación $3 \\cdot 2^2 - a = 0$ en el punto",
            "El valor buscado del parámetro resulta ser $a = 12$",
            "El parámetro correcto que hace evitable la discontinuidad es $a = 6$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son correctas: dominio $\\mathbb{R} - \\{2\\}$, hay que anular el numerador, la ecuación es $3 \\cdot 4 - a = 0$ y da $a = 12$. La quinta ($a = 6$) está mal."
        },
        {
          "id": "ms2-6-3",
          "q": "¿Cuáles de los siguientes enunciados sobre continuidad contradicen lo que dice el texto?",
          "options": [
            "Una discontinuidad con límite finito siempre es esencial",
            "En los puntos fuera del dominio la función es continua",
            "El límite infinito en un punto da discontinuidad evitable",
            "Los puntos de corte nunca hace falta analizarlos",
            "Si los límites laterales difieren, la discontinuidad es evitable"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco contradicen al texto: límite finito da evitable (no esencial), fuera del dominio hay discontinuidad, límite infinito da esencial, los cortes SÍ se analizan y laterales distintos dan esencial."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-6-1",
        "front": "Tres condiciones de continuidad en $x = a$",
        "back": "Que exista $f(a)$, que exista el límite $\\lim_{x \\to a} f(x) = l$, y que $f(a) = l$."
      },
      {
        "id": "fc2-6-2",
        "front": "Discontinuidad evitable",
        "back": "Aquella en la que el límite en el punto es finito; se puede redefinir la función para volverla continua."
      },
      {
        "id": "fc2-6-3",
        "front": "Discontinuidad esencial",
        "back": "Aquella en la que el límite es infinito o no existe; no se puede redefinir la función para hacerla continua."
      },
      {
        "id": "fc2-6-4",
        "front": "¿Dónde es seguro que una función es discontinua?",
        "back": "En los puntos que no pertenecen a su dominio; en los puntos de corte hay que analizar el límite."
      },
      {
        "id": "fc2-6-5",
        "front": "Caso Ejemplo 1: $\\frac{x^2-4}{x-2}$ en $x=2$",
        "back": "$f(2)$ no existe pero $\\lim = 4$ (finito): discontinuidad evitable, se redefine con $f(2) = 4$."
      },
      {
        "id": "fc2-6-6",
        "front": "Caso Ejemplo 2: $g(2) = 6$ con límite $4$",
        "back": "Existe $g(2)$ y el límite, pero $4 \\neq 6$: falla la 3ª condición. Evitable, se redefine $g(2) = 4$."
      },
      {
        "id": "fc2-6-7",
        "front": "Condición para que una evitable exista con denominador que se anula",
        "back": "El numerador también debe anularse en ese punto, así el límite queda finito (indeterminación resoluble)."
      },
      {
        "id": "fc2-6-8",
        "front": "¿Por qué el Ejemplo 3 es esencial?",
        "back": "Los límites laterales en $x = 0$ son distintos, así que no existe el límite: discontinuidad esencial, sin arreglo."
      }
    ]
  },
  "7": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-7-1",
          "q": "La derivada de $f$ en un punto $a$ es el límite finito del cociente incremental cuando el incremento de la variable independiente tiende a cero.",
          "a": true,
          "explain": "Esa es la definición: $f'(a) = \\lim_{\\Delta x \\to 0} \\frac{f(a+\\Delta x)-f(a)}{\\Delta x}$. El cociente incremental llevado al límite con $\\Delta x \\to 0$."
        },
        {
          "id": "tf2-7-2",
          "q": "Si una función es continua en un punto, entonces necesariamente es derivable en ese punto.",
          "a": false,
          "explain": "Falso: el recíproco no vale. Continuidad es necesaria pero no suficiente para derivar; una función puede ser continua y tener un pico donde no es derivable."
        },
        {
          "id": "tf2-7-3",
          "q": "La pendiente de la recta normal en un punto es la opuesta e inversa de la pendiente de la recta tangente.",
          "a": true,
          "explain": "Sí: la normal es perpendicular a la tangente, por eso su pendiente es $-1/f'(x_0)$, la opuesta e inversa de la pendiente de la tangente."
        },
        {
          "id": "tf2-7-4",
          "q": "Si una función no es continua en $a$, entonces no existe la derivada $f'(a)$.",
          "a": true,
          "explain": "Verdadero: es el contrarrecíproco del teorema, y vale. Si no hay continuidad en $a$, no puede haber derivada en $a$."
        },
        {
          "id": "tf2-7-5",
          "q": "La derivada de $\\operatorname{tg} x$ según la tabla es $-\\operatorname{sen} x$.",
          "a": false,
          "explain": "Falso: la derivada de $\\operatorname{tg} x$ es $\\sec^2 x = \\frac{1}{\\cos^2 x}$. El $-\\operatorname{sen} x$ es la derivada del coseno."
        }
      ],
      "mc": [
        {
          "id": "mc2-7-1",
          "q": "¿Qué representa geométricamente el cociente incremental $\\frac{f(x)-f(a)}{x-a}$?",
          "options": [
            "La pendiente de la recta tangente en el punto $a$",
            "La pendiente de la recta secante que pasa por A y X",
            "El área del triángulo formado bajo la curva",
            "La pendiente de la recta normal a la curva en A"
          ],
          "correctIndex": 1,
          "explain": "El cociente incremental es la $\\operatorname{tg}\\alpha$ de la recta secante AX. La tangente aparece recién cuando $x \\to a$ y la secante se transforma en tangente."
        },
        {
          "id": "mc2-7-2",
          "q": "Según la interpretación geométrica, ¿en qué se convierte la recta secante cuando $x$ se acerca a $a$?",
          "options": [
            "En la recta normal a la curva en ese punto",
            "En una recta horizontal de pendiente nula",
            "En la recta tangente a la curva en $(a, f(a))$",
            "En el eje de simetría de la parábola dada"
          ],
          "correctIndex": 2,
          "explain": "Cuando $x \\to a$ la secante se acerca cada vez más al punto y se transforma en la recta tangente en $(a, f(a))$, cuya pendiente es $f'(a)$."
        },
        {
          "id": "mc2-7-3",
          "q": "Aplicando la definición a $f(x) = x^2$, ¿cuál es la función derivada $f'(x)$?",
          "options": [
            "La función constante igual a dos",
            "La función lineal $f'(x) = 2x$",
            "La función cuadrática $x^2$ otra vez",
            "La función $f'(x) = x^2 - 1$"
          ],
          "correctIndex": 1,
          "explain": "Desarrollando el límite del cociente incremental para $x^2$ queda $2x$. Por eso $f'(1) = 2$, $f'(0) = 0$ y $f'(-4) = -8$."
        },
        {
          "id": "mc2-7-4",
          "q": "¿Qué dice el teorema que relaciona derivabilidad y continuidad?",
          "options": [
            "Si $f$ es continua en $a$, entonces existe $f'(a)$",
            "Si existe $f'(a)$, entonces $f$ es continua en $a$",
            "Si $f$ no es derivable, entonces no es continua",
            "Si existe $f'(a)$, entonces $f$ es discontinua en $a$"
          ],
          "correctIndex": 1,
          "explain": "El teorema dice: si admite derivada en un punto, entonces es continua ahí. La derivabilidad implica continuidad, no al revés."
        },
        {
          "id": "mc2-7-5",
          "q": "Según la tabla de derivadas, ¿cuál es la derivada de $a^x$?",
          "options": [
            "El producto $a^x \\ln a$ entre potencia y logaritmo",
            "La potencia $x \\cdot a^{x-1}$ bajando el exponente al frente",
            "El cociente $\\frac{1}{x}$ propio del logaritmo natural de base $a$",
            "La misma potencia $a^x$ multiplicada por el exponente $x$"
          ],
          "correctIndex": 0,
          "explain": "Según la tabla, la derivada de $a^x$ es $a^x \\ln a$. El $a^x$ a secas es la derivada de $e^x$, y $\\frac{1}{x}$ la de $\\ln x$."
        }
      ],
      "ms": [
        {
          "id": "ms2-7-1",
          "q": "¿Cuáles de estas afirmaciones sobre la derivada en un punto son correctas según el texto?",
          "options": [
            "La derivada en $a$, si existe, es un número real",
            "Cuanto mayor el valor absoluto de $f'(a)$, más rápido varía $f$",
            "Da la rapidez con que la función varía en ese punto",
            "El cociente incremental es la pendiente de la secante",
            "La derivada siempre vale cero en todos los puntos"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son del texto: la derivada es un real, mide rapidez de cambio, crece con $|f'|$ y el cociente incremental es la pendiente de la secante. La última es disparate."
        },
        {
          "id": "ms2-7-2",
          "q": "Según la tabla de derivadas del texto, ¿cuáles de estas igualdades son correctas?",
          "options": [
            "La derivada de la función $\\operatorname{sen} x$ es igual a $\\cos x$",
            "La derivada del logaritmo $\\ln(x)$ es igual a $\\frac{1}{x}$",
            "La derivada de la potencia $x^n$ es igual a $n \\cdot x^{n-1}$",
            "La derivada de la exponencial $e^x$ es igual a $e^x \\ln x$",
            "La derivada del coseno $\\cos x$ es igual a $\\operatorname{sen} x$"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras están bien. La de $e^x$ es $e^x$ (sin el $\\ln x$) y la de $\\cos x$ es $-\\operatorname{sen} x$ (con el menos). Esas dos están mal."
        },
        {
          "id": "ms2-7-3",
          "q": "Sobre el Ejemplo 2 de derivabilidad: $g(x) = x^2$ si $x \\geq 0$ y $g(x) = x$ si $x < 0$, en $x = 0$. ¿Qué es verdadero?",
          "options": [
            "La función $g$ es continua en $x = 0$ porque los laterales coinciden",
            "El límite del cociente por izquierda en cero da uno",
            "El límite del cociente por derecha en cero da cero",
            "Como los cocientes laterales difieren, no existe la derivada",
            "La función resulta continua y además derivable en cero"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son correctas: $g$ es continua, los cocientes laterales dan $1$ y $0$, distintos, así que no existe la derivada. La quinta está mal: es continua pero NO derivable."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-7-1",
        "front": "Definición de derivada en un punto",
        "back": "$f'(a) = \\lim_{\\Delta x \\to 0} \\frac{f(a+\\Delta x) - f(a)}{\\Delta x}$, el límite finito del cociente incremental con $\\Delta x \\to 0$."
      },
      {
        "id": "fc2-7-2",
        "front": "Cociente incremental",
        "back": "$\\frac{\\Delta f}{\\Delta x} = \\frac{f(x)-f(a)}{x-a}$: variación media de la función, igual a la pendiente de la recta secante."
      },
      {
        "id": "fc2-7-3",
        "front": "Interpretación geométrica de la derivada",
        "back": "$f'(a)$ es la pendiente de la recta tangente al gráfico en el punto $(a, f(a))$."
      },
      {
        "id": "fc2-7-4",
        "front": "Teorema derivabilidad-continuidad",
        "back": "Si existe $f'(a)$ entonces $f$ es continua en $a$. El recíproco no vale: continua no implica derivable."
      },
      {
        "id": "fc2-7-5",
        "front": "Pendiente de la recta normal",
        "back": "Es la opuesta e inversa de la tangente: $-\\frac{1}{f'(x_0)}$, ya que la normal es perpendicular a la tangente."
      },
      {
        "id": "fc2-7-6",
        "front": "Derivadas: $\\operatorname{sen} x$, $\\cos x$, $\\operatorname{tg} x$",
        "back": "$(\\operatorname{sen} x)' = \\cos x$; $(\\cos x)' = -\\operatorname{sen} x$; $(\\operatorname{tg} x)' = \\sec^2 x = \\frac{1}{\\cos^2 x}$."
      },
      {
        "id": "fc2-7-7",
        "front": "Regla del producto",
        "back": "$[f(x) \\cdot g(x)]' = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$: derivada de la primera por la segunda, más la primera por la derivada de la segunda."
      },
      {
        "id": "fc2-7-8",
        "front": "Regla del cociente",
        "back": "$\\left[\\frac{f}{g}\\right]' = \\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{g^2(x)}$."
      }
    ]
  },
  "8": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-8-1",
          "q": "La composición $f(g(x))$ se obtiene aplicando primero $g$ a la variable $x$ y luego $f$ al resultado.",
          "a": true,
          "explain": "Sí: el orden es $x \\to g \\to g(x) \\to f \\to f(g(x))$. Primero la de adentro ($g$), después la de afuera ($f$)."
        },
        {
          "id": "tf2-8-2",
          "q": "La regla de la cadena establece que $[f(g(x))]' = f'(g(x)) \\cdot g'(x)$.",
          "a": true,
          "explain": "Correcto: se deriva la función externa evaluada en la interna, y se multiplica por la derivada de la interna. Es derivar de afuera hacia adentro."
        },
        {
          "id": "tf2-8-3",
          "q": "Para derivar bien una compuesta conviene empezar por la primera función que se aplicó a la variable.",
          "a": false,
          "explain": "Falso: hay que empezar por la ÚLTIMA función aplicada (la de afuera) e ir hasta la primera. El texto lo marca como clave."
        },
        {
          "id": "tf2-8-4",
          "q": "Una función potencial exponencial es aquella en la que la variable aparece tanto en la base como en el exponente.",
          "a": true,
          "explain": "Tal cual: es una función elevada a otra función, como $x^x$ o $(\\operatorname{tg} x)^{\\ln x}$. La variable está en la base y en el exponente."
        },
        {
          "id": "tf2-8-5",
          "q": "Para $f(x) = 2x^6$, la derivada de orden siete $f^{(7)}(x)$ es igual a $1440$.",
          "a": false,
          "explain": "Falso: $f^{(6)}(x) = 1440$ (constante), y al derivar una constante da cero, así que $f^{(7)}(x) = 0$. El $1440$ es la sexta derivada, no la séptima."
        }
      ],
      "mc": [
        {
          "id": "mc2-8-1",
          "q": "En $h(x) = \\operatorname{sen}(\\sqrt{x})$, ¿cuál es la correspondencia con la notación $f(g(x))$?",
          "options": [
            "$g(x) = \\operatorname{sen} x$ por fuera y $f(x) = \\sqrt{x}$ por dentro",
            "$f(x) = \\operatorname{sen} x$ y $g(x) = \\sqrt{x}$ aplicada primero",
            "Ambas funciones son el seno aplicado dos veces seguidas",
            "$f(x) = x^2$ por fuera y $g(x) = \\operatorname{sen} x$ por dentro"
          ],
          "correctIndex": 1,
          "explain": "La interna es $g(x) = \\sqrt{x}$ (se aplica primero a $x$) y la externa es $f(x) = \\operatorname{sen} x$. Por eso $h = f(g(x))$."
        },
        {
          "id": "mc2-8-2",
          "q": "Para $f(x) = (4 - 5x)^8$, ¿cuál es la derivada aplicando la regla de la cadena?",
          "options": [
            "$8(4-5x)^7$ sin multiplicar por nada más",
            "$8(4-5x)^7 \\cdot (-5)$ por la cadena completa",
            "$8(4-5x)^8 \\cdot (-5)$ manteniendo el exponente",
            "$(4-5x)^7 \\cdot (-5)$ olvidando el factor ocho"
          ],
          "correctIndex": 1,
          "explain": "Bajás el $8$, restás uno al exponente y multiplicás por la derivada de lo de adentro: $(4-5x)' = -5$. Queda $8(4-5x)^7 \\cdot (-5)$."
        },
        {
          "id": "mc2-8-3",
          "q": "¿Qué procedimiento se usa para derivar una función potencial exponencial $[f(x)]^{g(x)}$?",
          "options": [
            "Se deriva la base y el exponente por separado y se suman los dos resultados",
            "Se aplica solo la regla del producto entre la base y el exponente de la función",
            "Se aplica logaritmo natural a ambos miembros y luego se deriva",
            "Se baja el exponente al frente como en una potencia común y se resta uno"
          ],
          "correctIndex": 2,
          "explain": "El truco es tomar $\\ln$ a ambos lados, usar la propiedad del log para bajar el exponente, y recién ahí derivar. Así sale la fórmula del texto."
        },
        {
          "id": "mc2-8-4",
          "q": "¿Qué es la derivada segunda $f''(x)$ de una función?",
          "options": [
            "La derivada de la función derivada $f'(x)$",
            "La función original elevada al cuadrado",
            "El doble del valor de la primera derivada",
            "La integral de la derivada primera $f'(x)$"
          ],
          "correctIndex": 0,
          "explain": "Si $f'(x)$ es derivable, su derivada $(f'(x))'$ es la derivada segunda $f''(x)$. Y así seguís con órdenes superiores: $f^{(n)}(x)$."
        },
        {
          "id": "mc2-8-5",
          "q": "Para $f(x) = 2x^6$, ¿cuál es la derivada primera $f'(x)$?",
          "options": [
            "La expresión $12x^5$ bajando el exponente",
            "La expresión $60x^4$ que es la segunda",
            "La expresión $2x^5$ restando uno al grado",
            "La expresión $6x^5$ sin tocar el coeficiente"
          ],
          "correctIndex": 0,
          "explain": "Bajás el $6$, lo multiplicás por el $2$ y restás uno al exponente: $2 \\cdot 6 x^5 = 12x^5$. El $60x^4$ ya es la segunda derivada."
        }
      ],
      "ms": [
        {
          "id": "ms2-8-1",
          "q": "¿Cuáles de estas afirmaciones sobre la regla de la cadena y la composición son correctas según el texto?",
          "options": [
            "En $f(g(x))$ se aplica primero $g$ y después $f$ al resultado",
            "La regla dice $[f(g(x))]' = f'(g(x)) \\cdot g'(x)$ multiplicando",
            "Conviene derivar desde la última función aplicada hacia la primera",
            "Reconocer el orden de las funciones es clave para derivar bien",
            "Se debe empezar siempre derivando la función interna primero"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son del texto. La quinta está mal: se empieza por la última función aplicada (la externa), no por la interna."
        },
        {
          "id": "ms2-8-2",
          "q": "Sobre las derivadas de distintos órdenes de $f(x) = 2x^6$, ¿cuáles igualdades son correctas?",
          "options": [
            "La derivada primera es $f'(x) = 12x^5$",
            "La derivada segunda es $f''(x) = 60x^4$",
            "La derivada sexta es $f^{(6)}(x) = 1440$",
            "La derivada séptima es $f^{(7)}(x) = 1440$",
            "La derivada quinta es $f^{(5)}(x) = 1440x$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Las correctas son la primera ($12x^5$), segunda ($60x^4$), sexta ($1440$) y quinta ($1440x$). La séptima da cero, no $1440$."
        },
        {
          "id": "ms2-8-3",
          "q": "¿Cuáles de los siguientes enunciados contradicen lo que dice el texto sobre la función potencial exponencial?",
          "options": [
            "Es una función en la que la variable está solo en la base",
            "Se deriva bajando el exponente como una potencia simple",
            "La derivada no requiere usar el logaritmo natural en ningún paso",
            "Un ejemplo válido es $f(x) = (\\operatorname{tg} x)^{\\ln x}$",
            "La variable aparece en la base y en el exponente a la vez"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras contradicen al texto: la variable está en base Y exponente (no solo base), no se deriva como potencia simple y SÍ se usa $\\ln$. Las dos últimas son correctas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-8-1",
        "front": "¿Qué es la composición $f(g(x))$?",
        "back": "Aplicar primero $g$ a la variable $x$ y luego $f$ al resultado obtenido $g(x)$."
      },
      {
        "id": "fc2-8-2",
        "front": "Regla de la cadena",
        "back": "$[f(g(x))]' = f'(g(x)) \\cdot g'(x)$: se deriva la externa evaluada en la interna, por la derivada de la interna."
      },
      {
        "id": "fc2-8-3",
        "front": "¿En qué orden se deriva una compuesta?",
        "back": "Desde la última función aplicada (la externa) hasta la primera que se aplicó a la variable."
      },
      {
        "id": "fc2-8-4",
        "front": "Función potencial exponencial",
        "back": "Una función elevada a otra función, $[f(x)]^{g(x)}$: la variable aparece en la base y en el exponente (ej. $x^x$)."
      },
      {
        "id": "fc2-8-5",
        "front": "Fórmula de derivación potencial exponencial",
        "back": "$\\left([f]^{g}\\right)' = [f]^{g}\\left(g'\\ln[f] + \\frac{g \\cdot f'}{f}\\right)$, obtenida tomando $\\ln$ y derivando."
      },
      {
        "id": "fc2-8-6",
        "front": "Ejemplo: derivada de $(4-5x)^8$",
        "back": "$8(4-5x)^7 \\cdot (-5)$, bajando el exponente y multiplicando por la derivada de la base $(4-5x)' = -5$."
      },
      {
        "id": "fc2-8-7",
        "front": "Derivada de orden $n$",
        "back": "Se obtiene derivando sucesivamente; la derivada segunda es $(f'(x))' = f''(x)$, y la general se nota $f^{(n)}(x)$."
      },
      {
        "id": "fc2-8-8",
        "front": "Derivadas sucesivas de $f(x) = 2x^6$",
        "back": "$f'=12x^5$, $f''=60x^4$, ..., $f^{(6)}=1440$ y $f^{(7)}=0$ (y todas las siguientes también cero)."
      }
    ]
  },
  "9": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-9-1",
          "q": "La pendiente de la recta tangente a $f$ en $a$ coincide con $\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$, que es la derivada en $a$.",
          "a": true,
          "explain": "Tal cual: el cociente incremental al tomar límite cuando $x \\to a$ deja de ser secante y pasa a ser tangente, y ese límite es justo $f'(a)$, la pendiente buscada."
        },
        {
          "id": "tf2-9-2",
          "q": "La recta normal a la curva en $x_0$ tiene la misma pendiente que la recta tangente en ese punto.",
          "a": false,
          "explain": "Falso: la normal es perpendicular a la tangente, así que su pendiente es la opuesta e inversa, $-\\frac{1}{f'(x_0)}$, no la misma."
        },
        {
          "id": "tf2-9-3",
          "q": "Una recta secante al gráfico de $f$ pasa por los puntos $(x, f(x))$ y $(a, f(a))$, y su pendiente es el cociente incremental.",
          "a": true,
          "explain": "Correcto: la secante une dos puntos del gráfico y su pendiente es $\\frac{f(x)-f(a)}{x-a}$, el cociente incremental que después limitamos."
        },
        {
          "id": "tf2-9-4",
          "q": "En el ejemplo resuelto con $f(x) = \\frac{e^{-2x} + 5x^3}{\\cos x}$, el punto de tangencia en $x=0$ resultó ser $(0;\\, 1)$.",
          "a": true,
          "explain": "Sí: $f(0) = \\frac{1+0}{1} = 1$, así que el punto de tangencia es $(0;\\,1)$, como dice la resolución."
        },
        {
          "id": "tf2-9-5",
          "q": "La recta tangente se define en un punto $x_0$ anguloso, donde la curva cambia repentinamente de dirección.",
          "a": false,
          "explain": "Falso: justamente se define en un punto NO anguloso. Donde hay un quiebre brusco no hay una única dirección, así que no queda definida la tangente."
        }
      ],
      "mc": [
        {
          "id": "mc2-9-1",
          "q": "¿Qué representa geométricamente la derivada de una función en un punto?",
          "options": [
            "La pendiente de la recta secante que une dos puntos del gráfico",
            "La pendiente de la recta tangente en ese punto",
            "La ordenada al origen de la recta normal perpendicular a la curva",
            "El área encerrada bajo la curva hasta ese punto de abscisa"
          ],
          "correctIndex": 1,
          "explain": "La derivada en un punto es la pendiente de la recta tangente ahí. La secante usa dos puntos, no es la derivada en uno solo."
        },
        {
          "id": "mc2-9-2",
          "q": "Si la pendiente de la tangente en $x_0$ es $f'(x_0)$, ¿cuál es la pendiente de la recta normal en ese punto?",
          "options": [
            "La misma pendiente $f'(x_0)$ sin cambios",
            "La inversa de la pendiente $\\frac{1}{f'(x_0)}$",
            "La opuesta e inversa $-\\frac{1}{f'(x_0)}$",
            "La opuesta de la pendiente $-f'(x_0)$"
          ],
          "correctIndex": 2,
          "explain": "Por ser perpendicular, la normal tiene pendiente opuesta e inversa: $-\\frac{1}{f'(x_0)}$. Ni solo opuesta ni solo inversa."
        },
        {
          "id": "mc2-9-3",
          "q": "En el ejemplo resuelto, ¿cuánto vale $f'(0)$ y por ende la pendiente de la tangente?",
          "options": [
            "Vale $-2$ según la evaluación",
            "Vale $1$ por la regla del cociente",
            "Vale $0$ por anularse el numerador",
            "Vale $5$ por el término cúbico"
          ],
          "correctIndex": 0,
          "explain": "Al evaluar la derivada en $0$ queda $\\frac{-2+0}{1} = -2$, así que la pendiente de la tangente es $-2$."
        },
        {
          "id": "mc2-9-4",
          "q": "¿Cuál fue la ecuación final de la recta tangente en el ejemplo resuelto?",
          "options": [
            "La recta $y_t = -2x + 1$ obtenida",
            "La recta $y_t = -2x - 1$ obtenida",
            "La recta $y_t = 2x + 1$ obtenida",
            "La recta $y_t = -x + 1$ obtenida"
          ],
          "correctIndex": 0,
          "explain": "Con pendiente $-2$ y punto $(0;1)$, se despeja $b=1$, dando $y_t = -2x + 1$."
        },
        {
          "id": "mc2-9-5",
          "q": "¿Qué problema histórico motivó el estudio de la pendiente de la recta tangente?",
          "options": [
            "El problema del área bajo una figura de borde curvo",
            "El problema de la suma infinita de una serie",
            "El problema del crecimiento con interés compuesto",
            "El problema de la velocidad instantánea de un cuerpo"
          ],
          "correctIndex": 3,
          "explain": "Según el texto, surgió para describir la velocidad de un cuerpo en movimiento, o sea el problema de la velocidad instantánea."
        }
      ],
      "ms": [
        {
          "id": "ms2-9-1",
          "q": "¿Cuáles de estas formas corresponden a ecuaciones válidas dadas en el texto para la recta tangente o la normal?",
          "options": [
            "$y - y_0 = f'(x_0)(x - x_0)$ para la tangente",
            "$y = f'(x_0)x + b$ para la recta tangente",
            "$y = -\\frac{1}{f'(x_0)}x + b$ para la normal",
            "$y - y_0 = -\\frac{1}{f'(x_0)}(x - x_0)$ normal",
            "$y = f'(x_0) \\cdot f(x_0)$ para la tangente"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras figuran textualmente como ecuaciones de tangente y normal. La última, $y=f'(x_0)\\cdot f(x_0)$, es un invento sin sentido geométrico."
        },
        {
          "id": "ms2-9-2",
          "q": "Según el texto, ¿cuáles afirmaciones sobre la recta tangente y su origen son correctas?",
          "options": [
            "Describe localmente la curva en un punto",
            "Define la dirección del movimiento en cada instante",
            "Sirvió para diseñar pendientes de una montaña rusa",
            "Conserva la misma dirección que la curva en $x_0$",
            "Siempre cruza la curva en dos puntos distintos"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro están en el texto. La última es falsa: la tangente toca conservando la dirección, no necesariamente cruza en dos puntos."
        },
        {
          "id": "ms2-9-3",
          "q": "¿Cuáles de los pasos siguientes son rectas con pendiente $+2$ en el ejemplo resuelto de la sección?",
          "options": [
            "La pendiente de la tangente hallada",
            "La pendiente de la normal asociada",
            "La recta secante usada en el límite",
            "El cociente incremental evaluado",
            "El punto de tangencia obtenido"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: la tangente tuvo pendiente $-2$, no $+2$, y los demás items ni siquiera son rectas con esa pendiente. Es un caso de cero correctas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-9-1",
        "front": "¿Qué es la recta tangente en un punto no anguloso?",
        "back": "Es la recta que, al pasar por $x_0$, conserva la misma dirección que la curva; su pendiente es $f'(x_0)$."
      },
      {
        "id": "fc2-9-2",
        "front": "¿Cómo se obtiene la pendiente de la tangente a partir de la secante?",
        "back": "Tomando $\\lim_{x \\to a} \\frac{f(x)-f(a)}{x-a}$: el punto móvil se acerca al fijo y la secante se vuelve tangente."
      },
      {
        "id": "fc2-9-3",
        "front": "¿Qué es la recta normal?",
        "back": "La recta perpendicular a la tangente en $x_0$; su pendiente es la opuesta e inversa, $-\\frac{1}{f'(x_0)}$."
      },
      {
        "id": "fc2-9-4",
        "front": "Ecuación punto-pendiente de la tangente",
        "back": "$y - y_0 = f'(x_0)(x - x_0)$, usando la derivada como pendiente y el punto de tangencia."
      },
      {
        "id": "fc2-9-5",
        "front": "Ecuación de la recta normal",
        "back": "$y - y_0 = -\\frac{1}{f'(x_0)}(x - x_0)$, con pendiente opuesta e inversa a la tangente."
      },
      {
        "id": "fc2-9-6",
        "front": "Pasos para hallar la tangente (ejemplo del texto)",
        "back": "Calcular $f'(x)$, evaluar $f'(x_0)$ (pendiente), hallar $f(x_0)$ (punto) y armar la ecuación."
      },
      {
        "id": "fc2-9-7",
        "front": "Resultado del ejemplo: tangente a $\\frac{e^{-2x}+5x^3}{\\cos x}$ en $x=0$",
        "back": "$f'(0)=-2$ y $f(0)=1$, entonces $y_t = -2x + 1$."
      },
      {
        "id": "fc2-9-8",
        "front": "¿Por qué la tangente no se define en un punto anguloso?",
        "back": "Porque ahí la curva cambia repentinamente de dirección y no hay una única dirección que conservar."
      }
    ]
  },
  "10": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-10-1",
          "q": "La regla de L'Hôpital permite salvar la indeterminación derivando numerador y denominador por separado.",
          "a": true,
          "explain": "Exacto: se deriva arriba y abajo (no es la derivada del cociente) y se vuelve a evaluar el límite."
        },
        {
          "id": "tf2-10-2",
          "q": "El recíproco del teorema de L'Hôpital es siempre válido: si existe $\\lim \\frac{f(x)}{g(x)}$, entonces existe $\\lim \\frac{f'(x)}{g'(x)}$.",
          "a": false,
          "explain": "Falso: el texto aclara que el recíproco no vale. Puede existir el límite del cociente y no existir el de las derivadas."
        },
        {
          "id": "tf2-10-3",
          "q": "La regla de L'Hôpital también es válida para $x \\to +\\infty$ y $x \\to -\\infty$.",
          "a": true,
          "explain": "Sí, el texto lo dice y lo ejemplifica con $\\lim_{x \\to +\\infty} \\frac{5x}{e^{2x-1}} = 0$."
        },
        {
          "id": "tf2-10-4",
          "q": "Una indeterminación $0 \\cdot \\infty$ se resuelve directamente sin transformarla, aplicando L'Hôpital al producto.",
          "a": false,
          "explain": "Falso: primero hay que transformar el producto en cociente ($\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$) y recién ahí aplicar la regla."
        },
        {
          "id": "tf2-10-5",
          "q": "Las formas $0^0$, $\\infty^0$ y $1^\\infty$ se resuelven aplicando logaritmo a ambos miembros para reducirlas a $0 \\cdot \\infty$.",
          "a": true,
          "explain": "Correcto: se toma $\\ln$, queda $\\ln l = \\lim g(x)\\cdot\\ln[f(x)]$, que es un $0\\cdot\\infty$ ya manejable."
        }
      ],
      "mc": [
        {
          "id": "mc2-10-1",
          "q": "¿Cuál de estas NO es una condición para aplicar L'Hôpital en el caso $\\frac{0}{0}$?",
          "options": [
            "Que $f$ y $g$ sean infinitésimos en $a$",
            "Que $f$ y $g$ sean derivables cerca de $a$",
            "Que $f$ y $g$ tengan el mismo signo",
            "Que exista $\\lim \\frac{f'(x)}{g'(x)} = l$ finito"
          ],
          "correctIndex": 2,
          "explain": "El mismo signo no es condición. Sí lo son: ser infinitésimos, ser derivables con $g'\\neq 0$ y que exista el límite de las derivadas."
        },
        {
          "id": "mc2-10-2",
          "q": "Aplicando L'Hôpital, ¿cuánto vale $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$?",
          "options": [
            "Da $3$ tras derivar",
            "Da $9$ tras derivar",
            "Da $6$ tras derivar",
            "Da $0$ tras derivar"
          ],
          "correctIndex": 2,
          "explain": "Derivando queda $\\lim_{x\\to 3} \\frac{2x}{1} = 6$, como muestra el ejemplo."
        },
        {
          "id": "mc2-10-3",
          "q": "En la aplicación reiterada $\\lim_{x \\to 0} \\frac{x^2 - x^3}{e^x - x - 1}$, ¿cuál es el resultado final?",
          "options": [
            "Resulta $1$ tras aplicar la regla",
            "Resulta $0$ tras aplicar la regla",
            "Resulta $2$ tras aplicar la regla",
            "Resulta $\\infty$ tras aplicar la regla"
          ],
          "correctIndex": 2,
          "explain": "Aplicando L'Hôpital dos veces se llega a $\\lim \\frac{2-6x}{e^x} = 2$."
        },
        {
          "id": "mc2-10-4",
          "q": "¿Cómo se transforma una indeterminación $0 \\cdot \\infty$ para aplicar la regla?",
          "options": [
            "Expresando el producto como un cociente",
            "Aplicando logaritmo a ambos miembros",
            "Sacando común denominador entre factores",
            "Elevando ambos factores al cuadrado"
          ],
          "correctIndex": 0,
          "explain": "Se escribe $f \\cdot g$ como $\\frac{f}{1/g}$ o $\\frac{g}{1/f}$, llevándola a $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$."
        },
        {
          "id": "mc2-10-5",
          "q": "Para la indeterminación $+\\infty - \\infty$, ¿qué estrategia conviene según el texto?",
          "options": [
            "Aplicar el logaritmo directamente sobre toda la resta",
            "Sacar común denominador o factor común",
            "Derivar de una sola vez la diferencia completa",
            "Elevar la diferencia entera a una potencia conocida"
          ],
          "correctIndex": 1,
          "explain": "Conviene sacar común denominador (cociente) o factor común para llevarla a $0\\cdot\\infty$ y de ahí a un cociente."
        }
      ],
      "ms": [
        {
          "id": "ms2-10-1",
          "q": "¿Cuáles de estos límites se resuelven, según los ejemplos del texto, dando el valor indicado?",
          "options": [
            "$\\lim_{x \\to 0} \\frac{x}{\\ln(x+1)} = 1$",
            "$\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x} = 0$",
            "$\\lim_{x \\to +\\infty} \\frac{\\ln(1+e^x)}{2x} = \\frac{1}{2}$",
            "$\\lim_{x \\to 0^+} x^x = 1$",
            "$\\lim_{x \\to 1} (x^2-1)\\ln(x-1) = 1$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Los primeros cuatro coinciden con los ejemplos. El último da $0$, no $1$, según el texto."
        },
        {
          "id": "ms2-10-2",
          "q": "¿Cuáles de estas afirmaciones sobre la aplicación reiterada y las variantes de L'Hôpital son correctas?",
          "options": [
            "Se puede aplicar hasta el orden $n$ mientras valgan las condiciones",
            "Vale si $\\lim f'(x) \\neq 0$ y $\\lim g'(x) = 0$",
            "Vale para el caso $\\frac{\\infty}{\\infty}$ además del $\\frac{0}{0}$",
            "Sirve para resolver $0 \\cdot \\infty$ tras transformar",
            "Solo puede aplicarse una única vez por límite"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro están en el texto. La última es falsa: justamente se puede aplicar reiteradas veces."
        },
        {
          "id": "ms2-10-3",
          "q": "¿Cuáles de estos límites tienen como resultado el número $e^{1/2}$ según el texto?",
          "options": [
            "$\\lim_{x \\to 0^+} x^x$",
            "$\\lim_{x \\to 0} \\frac{x}{\\ln(x+1)}$",
            "$\\lim_{x \\to 3} \\frac{x^2-9}{x-3}$",
            "$\\lim_{x \\to +\\infty} \\frac{5x}{e^{2x-1}}$",
            "$\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x}$"
          ],
          "correctIndexes": [],
          "explain": "Ninguno: el que da $e^{1/2}$ es $\\lim_{x\\to\\infty}(\\frac{2x+1}{2x+3})^{x+2}$, que no aparece entre estas opciones. Los listados dan $1$, $1$, $6$, $0$ y $0$."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-10-1",
        "front": "¿Para qué sirve la regla de L'Hôpital?",
        "back": "Para salvar indeterminaciones ($\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$, etc.) derivando numerador y denominador por separado."
      },
      {
        "id": "fc2-10-2",
        "front": "Condiciones del caso $\\frac{0}{0}$",
        "back": "$f,g$ derivables cerca de $a$ con $g'\\neq 0$, ambas infinitésimos en $a$, y que exista $\\lim \\frac{f'(x)}{g'(x)}=l$ finito."
      },
      {
        "id": "fc2-10-3",
        "front": "¿Vale el recíproco del teorema?",
        "back": "No: puede existir $\\lim \\frac{f}{g}$ y no existir $\\lim \\frac{f'}{g'}$."
      },
      {
        "id": "fc2-10-4",
        "front": "¿Se puede aplicar L'Hôpital varias veces?",
        "back": "Sí, en forma reiterada hasta el orden $n$ mientras $f'$ y $g'$ sigan siendo infinitésimos y se cumplan las hipótesis."
      },
      {
        "id": "fc2-10-5",
        "front": "¿Cómo se trata la indeterminación $0 \\cdot \\infty$?",
        "back": "Se pasa el producto a cociente: $\\frac{f}{1/g}$ o $\\frac{g}{1/f}$, quedando $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$."
      },
      {
        "id": "fc2-10-6",
        "front": "¿Cómo se trata $+\\infty - \\infty$?",
        "back": "Sacando común denominador (cociente) o factor común para volverla $0\\cdot\\infty$ y luego cociente."
      },
      {
        "id": "fc2-10-7",
        "front": "Formas $0^0$, $\\infty^0$, $1^\\infty$",
        "back": "Se aplica $\\ln$ a ambos miembros: $\\ln l = \\lim g(x)\\ln[f(x)]$, reduciéndolas a $0\\cdot\\infty$."
      },
      {
        "id": "fc2-10-8",
        "front": "Resultado de $\\lim_{x \\to \\infty}(\\frac{2x+1}{2x+3})^{x+2}$",
        "back": "Es del tipo $1^\\infty$; aplicando $\\ln$ se obtiene $\\ln l = \\frac{1}{2}$, por lo que $l = e^{1/2}$."
      }
    ]
  },
  "11": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-11-1",
          "q": "En el Ejercicio 1 se pide, entre otras cosas, determinar la ordenada al origen, la pendiente y la raíz de cada función lineal.",
          "a": true,
          "explain": "Sí: el enunciado del Ejercicio 1 pide graficar, clasificar crecimiento y hallar ordenada al origen, pendiente y raíz (cero)."
        },
        {
          "id": "tf2-11-2",
          "q": "En el Ejercicio 2, la recta que pasa por $A=(4,-3)$ y $B=(5,-3)$ es una recta de pendiente positiva.",
          "a": false,
          "explain": "Falso: como ambos puntos tienen la misma ordenada $-3$, la recta es horizontal, o sea pendiente cero, no positiva."
        },
        {
          "id": "tf2-11-3",
          "q": "El Ejercicio 7 afirma que todas las funciones del tipo $f(x)=a^x$ con $0<a<1$ son decrecientes.",
          "a": true,
          "explain": "Tal cual lo plantea el enunciado: con base entre $0$ y $1$ la exponencial es decreciente. Es una de las afirmaciones a justificar."
        },
        {
          "id": "tf2-11-4",
          "q": "En el Ejercicio 8, la función partida $i(x)$ vale $2^x$ para $x > 1$ y vale $x - 3$ para $x < 1$.",
          "a": true,
          "explain": "Correcto: así está definida $i(x)$ en el enunciado, con $2^x$ si $x>1$ y $x-3$ si $x<1$."
        },
        {
          "id": "tf2-11-5",
          "q": "El Ejercicio 4 pide identificar, entre las rectas dadas, cuáles son paralelas y cuáles perpendiculares entre sí.",
          "a": true,
          "explain": "Sí: el Ejercicio 4 da cinco rectas y pide asignarlas a gráficos indicando paralelas y perpendiculares."
        }
      ],
      "mc": [
        {
          "id": "mc2-11-1",
          "q": "En el Ejercicio 1, ¿cómo se expresa la función del item b)?",
          "options": [
            "Mediante la fórmula $f(x) = -x + 4$",
            "Mediante la ecuación $r: 2x - 3y = 6$",
            "Mediante la igualdad $x - 2 = y + 3$",
            "Mediante la expresión $y = 2x + 3$"
          ],
          "correctIndex": 1,
          "explain": "El item b) es la recta $r: 2x - 3y = 6$. El a) es $-x+4$ y el c) es $x-2=y+3$."
        },
        {
          "id": "mc2-11-2",
          "q": "Según el Ejercicio 2, ¿qué datos definen la recta que pasa por $N=(8,0)$?",
          "options": [
            "Un punto y la pendiente $2$",
            "Dos puntos del plano dados",
            "Un punto y ordenada al origen",
            "La pendiente y la raíz dada"
          ],
          "correctIndex": 0,
          "explain": "Para $N=(8,0)$ se da el punto y la pendiente $2$. La de los dos puntos es la de $A$ y $B$, y la de ordenada al origen es la de $P$."
        },
        {
          "id": "mc2-11-3",
          "q": "En el Ejercicio 5, ¿qué caracteriza al Gráfico 1 según el enunciado?",
          "options": [
            "Función logarítmica decreciente con asíntota vertical",
            "Función creciente exponencial con asíntota en $y=-1$",
            "Función decreciente definida solo para $x>0$",
            "Función cuadrática con ramas hacia arriba"
          ],
          "correctIndex": 1,
          "explain": "El Gráfico 1 es exponencial creciente, con asíntota horizontal en $y=-1$ y definida para todo $x$ real."
        },
        {
          "id": "mc2-11-4",
          "q": "En el Ejercicio 8, para la función $m(x)$, ¿qué valor toma cuando $x \\leq -3$?",
          "options": [
            "El valor parabólico $x^2 - 4$ del tramo",
            "El valor lineal $3x - 4$ del tramo",
            "El valor exponencial $2^x$ del tramo",
            "El valor constante igual a $5$"
          ],
          "correctIndex": 3,
          "explain": "Para $x \\leq -3$, $m(x)=5$ (tramo constante). El $x^2-4$ es para $-3<x<3$ y $3x-4$ para $x\\geq 3$."
        },
        {
          "id": "mc2-11-5",
          "q": "En el Ejercicio 3, ¿cómo se describe el Gráfico 1 que hay que asociar a una cuadrática?",
          "options": [
            "Ramas hacia arriba con vértice en $(-1,0)$",
            "Ramas hacia abajo con raíces en $1$ y $3$",
            "Ramas hacia arriba cerca del origen",
            "Ramas hacia abajo con vértice en eje $y$"
          ],
          "correctIndex": 1,
          "explain": "El Gráfico 1 tiene ramas hacia abajo, raíces en $x=1$ y $x=3$, y vértice en el segundo cuadrante."
        }
      ],
      "ms": [
        {
          "id": "ms2-11-1",
          "q": "¿Cuáles de estas funciones cuadráticas del Ejercicio 3 tienen ramas hacia abajo (coeficiente principal negativo)?",
          "options": [
            "$d(x) = -4x^2 - 3$",
            "$e(x) = -x^2 - 6x - 9$",
            "$f(x) = -2x^2 + 6x - 4$",
            "$a(x) = 2x^2 + 1$",
            "$b(x) = 4x^2 + 8x + 4$"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "$d$, $e$ y $f$ tienen coeficiente principal negativo (ramas hacia abajo). $a$ y $b$ tienen coeficiente positivo, ramas hacia arriba."
        },
        {
          "id": "ms2-11-2",
          "q": "Según los Ejercicios 6 y 7, ¿cuáles afirmaciones se proponen como enunciados a analizar en la guía?",
          "options": [
            "$\\log_3(x)-1$ corta el eje $y$ y tiene asíntota en $x=-1$",
            "$4^x+3$ tiene asíntota horizontal $y=-3$",
            "$(2/3)^x - 1$ es creciente y no corta el eje $x$",
            "$\\log_2(x+4)-1$ corta el eje $x$ en $(-4,0)$",
            "Toda $a^x$ con $0<a<1$ es decreciente"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son enunciados que aparecen textualmente en los Ejercicios 6 y 7 para decidir si son V o F. Acá solo se pregunta cuáles figuran en la guía: las cinco."
        },
        {
          "id": "ms2-11-3",
          "q": "¿Cuáles de estas funciones aparecen en el Ejercicio 5 de funciones exponenciales y logarítmicas?",
          "options": [
            "$f(x) = \\log(x-1) + 3$",
            "$g(x) = 3^x - 1$",
            "$h(x) = (1/3)^x - 1$",
            "$i(x) = \\log_{1/3}(x-2) + 1$",
            "$j(x) = \\ln(x) + 5$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son las del Ejercicio 5. La $j(x)=\\ln(x)+5$ no figura en el enunciado."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-11-1",
        "front": "¿Qué se pide en el Ejercicio 1 sobre las funciones lineales?",
        "back": "Graficar, decir si crecen/decrecen/son constantes, y hallar ordenada al origen, pendiente y raíz de cada una."
      },
      {
        "id": "fc2-11-2",
        "front": "Recta por $A=(4,-3)$ y $B=(5,-3)$ (Ej. 2)",
        "back": "Tiene la misma ordenada en ambos puntos, así que es horizontal: pendiente cero, $y = -3$."
      },
      {
        "id": "fc2-11-3",
        "front": "¿Qué pide el Ejercicio 4?",
        "back": "Asignar cinco rectas a sus gráficos, indicando cuáles son paralelas y cuáles perpendiculares entre sí."
      },
      {
        "id": "fc2-11-4",
        "front": "Gráfico 1 del Ejercicio 5",
        "back": "Función creciente de tipo exponencial, con asíntota horizontal en $y=-1$, definida para todo $x$ real."
      },
      {
        "id": "fc2-11-5",
        "front": "Función partida $m(x)$ del Ejercicio 8",
        "back": "$5$ si $x\\leq -3$; $x^2-4$ si $-3<x<3$; $3x-4$ si $x\\geq 3$."
      },
      {
        "id": "fc2-11-6",
        "front": "¿Qué se analiza en el Ejercicio 8?",
        "back": "Dominio, imagen, ordenada al origen, conjunto de positividad y de negatividad de funciones partidas."
      },
      {
        "id": "fc2-11-7",
        "front": "Afirmación del Ejercicio 7 sobre base $0<a<1$",
        "back": "Toda función $f(x)=a^x$ con $0<a<1$ es decreciente (enunciado a justificar como V/F)."
      },
      {
        "id": "fc2-11-8",
        "front": "¿Qué tipos de funciones recorre toda la guía?",
        "back": "Lineales, cuadráticas, exponenciales, logarítmicas y partidas, con gráfico y análisis de generalidades."
      }
    ]
  },
  "12": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-12-1",
          "q": "El Ejercicio 1 de la guía pide leer límites laterales y al infinito a partir de gráficos de $y=f(x)$.",
          "a": true,
          "explain": "Sí: el Ejercicio 1 da gráficos y pide determinar límites laterales en puntos y en $\\pm\\infty$."
        },
        {
          "id": "tf2-12-2",
          "q": "En el Ejercicio 8, la cantidad de enfermos se modela con $Q(t) = \\frac{20}{1 + 19e^{-1{,}2t}}$ cientos de personas.",
          "a": true,
          "explain": "Tal cual: ese es el modelo de epidemia del Ejercicio 8, donde $Q(t)$ está en cientos de personas tras $t$ semanas."
        },
        {
          "id": "tf2-12-3",
          "q": "El Ejercicio 5 plantea $f(x) = ax^2 - 5x + 1$ con $a=0$ para analizar su comportamiento.",
          "a": false,
          "explain": "Falso: el enunciado aclara $a$ distinto de $0$. Si fuera $0$ no sería cuadrática."
        },
        {
          "id": "tf2-12-4",
          "q": "En el Ejercicio 9 hay que calcular los límites laterales en $x_0 = 3$ de una función definida a pedazos.",
          "a": true,
          "explain": "Correcto: el Ejercicio 9 da una función partida y pide los límites laterales en $x_0=3$ y si existe el límite ahí."
        },
        {
          "id": "tf2-12-5",
          "q": "El Ejercicio 7 informa que la cuadrática $P(x)$ cumple $\\lim_{x \\to +\\infty} P(x) = +\\infty$ y tiene ceros en $\\{-2, 5\\}$.",
          "a": false,
          "explain": "Falso: el Ejercicio 7 dice que $\\lim_{x\\to+\\infty}P(x)=-\\infty$ (ramas hacia abajo), con $C^0=\\{-2,5\\}$."
        }
      ],
      "mc": [
        {
          "id": "mc2-12-1",
          "q": "En el Ejercicio 5, si $\\lim_{x \\to +\\infty} f(x) = +\\infty$ para $f(x)=ax^2-5x+1$, ¿qué se deduce sobre $a$?",
          "options": [
            "Que $a$ es negativo $(a<0)$",
            "Que $a$ es positivo $(a>0)$",
            "Que $a$ vale exactamente cero",
            "Que $a$ no puede determinarse"
          ],
          "correctIndex": 1,
          "explain": "Si la cuadrática tiende a $+\\infty$ por la derecha, las ramas van hacia arriba, así que $a>0$."
        },
        {
          "id": "mc2-12-2",
          "q": "En el Ejercicio 8, ¿qué se busca al estudiar $Q(t)$ cuando $t \\to +\\infty$?",
          "options": [
            "La cantidad inicial de enfermos",
            "El comportamiento a largo plazo",
            "La pendiente del contagio inicial",
            "El instante de máximo contagio"
          ],
          "correctIndex": 1,
          "explain": "El item b) pide cómo evoluciona la enfermedad con el tiempo, o sea el comportamiento de $Q(t)$ a largo plazo."
        },
        {
          "id": "mc2-12-3",
          "q": "En el Ejercicio 3, ¿cuál de estos límites se plantea para calcular?",
          "options": [
            "El límite clásico $\\lim_{x \\to 0} \\frac{\\sin x}{x}$",
            "El límite racional $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$",
            "El límite al infinito $\\lim_{x \\to \\infty} \\frac{x^2 + 1}{x}$",
            "El límite $\\lim_{x \\to -1} \\frac{2x^3 + 4x + 1}{3x - 2}$"
          ],
          "correctIndex": 3,
          "explain": "El item a) del Ejercicio 3 es $\\lim_{x\\to -1}\\frac{2x^3+4x+1}{3x-2}$. Los otros no figuran en esa lista."
        },
        {
          "id": "mc2-12-4",
          "q": "El Ejercicio 4 pide calcular límites laterales de funciones, ¿de qué tipo principalmente?",
          "options": [
            "De funciones polinómicas enteras",
            "De funciones exponenciales",
            "De funciones logarítmicas puras",
            "De funciones trigonométricas"
          ],
          "correctIndex": 1,
          "explain": "El Ejercicio 4 da funciones exponenciales como $(2/5)^{1/(x-3)}$ y $e^{1/x}$ para sus límites laterales."
        },
        {
          "id": "mc2-12-5",
          "q": "En el Ejercicio 6, ¿qué datos se asumen sobre los límites de $f$ y $g$ en $x=1$?",
          "options": [
            "Que $\\lim f = 4$ y $\\lim g = 2$ ahí",
            "Que $\\lim f = 2$ y $\\lim g = 4$",
            "Que ambos límites valen cero ahí",
            "Que los dos límites se vuelven infinitos"
          ],
          "correctIndex": 1,
          "explain": "El enunciado del Ejercicio 6 fija $\\lim_{x\\to 1}f(x)=2$ y $\\lim_{x\\to 1}g(x)=4$."
        }
      ],
      "ms": [
        {
          "id": "ms2-12-1",
          "q": "¿Cuáles de estas funciones aparecen en el Ejercicio 4 para calcular límites laterales?",
          "options": [
            "$f(x) = (2/5)^{1/(x-3)}$ para $x \\to 3$",
            "$g(x) = (4/3)^{3/(2x+4)}$ para $x \\to -2$",
            "$h(x) = e^{1/x}$ para $x \\to 0$",
            "$p(x) = \\ln(x-1)$ para $x \\to 1$",
            "$q(x) = \\tan(x)$ para $x \\to 0$"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son las del Ejercicio 4. La logarítmica y la tangente no figuran ahí."
        },
        {
          "id": "ms2-12-2",
          "q": "Según el Ejercicio 5 con $\\lim_{x \\to +\\infty} f(x) = +\\infty$, ¿cuáles afirmaciones son correctas?",
          "options": [
            "$a > 0$",
            "$\\lim_{x \\to -\\infty} f(x) = +\\infty$",
            "$a < 0$",
            "$\\lim_{x \\to -\\infty} f(x) = -\\infty$",
            "La función no tiene vértice"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "Con ramas hacia arriba ($a>0$) y simetría de la parábola, también $\\lim_{x\\to-\\infty}f(x)=+\\infty$. Las demás contradicen eso o son falsas."
        },
        {
          "id": "ms2-12-3",
          "q": "¿Cuáles de estos límites del Ejercicio 1 se pueden leer como $-\\infty$ en cualquier gráfico dado?",
          "options": [
            "$\\lim_{x \\to 1^+} f(x)$ del item a)",
            "$\\lim_{x \\to 2} f(x)$ del item b)",
            "$\\lim_{x \\to -1} f(x)$ del item c)",
            "$\\lim_{x \\to +\\infty} f(x)$ del item a)",
            "$\\lim_{x \\to -\\infty} f(x)$ del item b)"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: el texto no da los gráficos ni sus valores, así que no se puede afirmar que ningún límite valga $-\\infty$ a partir del enunciado solo. Caso de cero correctas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-12-1",
        "front": "¿Qué pide el Ejercicio 1 de la guía de límites?",
        "back": "Leer desde gráficos los límites laterales en puntos y los límites en $+\\infty$ y $-\\infty$."
      },
      {
        "id": "fc2-12-2",
        "front": "¿Qué tipo de funciones trabaja el Ejercicio 4?",
        "back": "Funciones exponenciales como $(2/5)^{1/(x-3)}$, $(4/3)^{3/(2x+4)}$ y $e^{1/x}$, calculando límites laterales."
      },
      {
        "id": "fc2-12-3",
        "front": "Ejercicio 5: ¿qué implica $\\lim_{x \\to +\\infty}(ax^2-5x+1)=+\\infty$?",
        "back": "Que $a>0$ (ramas hacia arriba), y por simetría $\\lim_{x\\to-\\infty}f(x)$ también es $+\\infty$."
      },
      {
        "id": "fc2-12-4",
        "front": "Datos del Ejercicio 6 sobre $f$ y $g$",
        "back": "$\\lim_{x\\to 1}f(x)=2$ y $\\lim_{x\\to 1}g(x)=4$, para decidir V/F o completar expresiones."
      },
      {
        "id": "fc2-12-5",
        "front": "Ejercicio 7: condiciones sobre la cuadrática $P(x)$",
        "back": "$\\lim_{x\\to+\\infty}P(x)=-\\infty$ y $C^0=\\{-2,5\\}$; se pide el conjunto de negatividad."
      },
      {
        "id": "fc2-12-6",
        "front": "Modelo del Ejercicio 8 (epidemia)",
        "back": "$Q(t)=\\frac{20}{1+19e^{-1{,}2t}}$ cientos de personas, $t$ semanas tras el brote."
      },
      {
        "id": "fc2-12-7",
        "front": "¿Qué pide el Ejercicio 9?",
        "back": "Calcular los límites laterales en $x_0=3$ de una función a pedazos y decidir si existe el límite ahí."
      },
      {
        "id": "fc2-12-8",
        "front": "¿Qué pide el Ejercicio 2?",
        "back": "Graficar una función $y=f(x)$ que verifique ciertas condiciones de límites laterales e infinitos."
      }
    ]
  },
  "13": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-13-1",
          "q": "El Ejercicio 1 de la guía trabaja indeterminaciones del tipo $\\frac{0}{0}$ que se resuelven factorizando y cancelando el factor común.",
          "a": true,
          "explain": "Tal cual: el criollo del Ejercicio 1 dice \\\"Indeterminaciones $\\frac{0}{0}$: factorizá y cancelá\\\". Esos límites racionales evaluados en el punto te dan $\\frac{0}{0}$ y se levantan factorizando."
        },
        {
          "id": "tf2-13-2",
          "q": "El Ejercicio 2 se titula límites laterales y pide verificar la existencia del límite desde cada lado.",
          "a": false,
          "explain": "Ojo, eso es el Ejercicio 3. El Ejercicio 2 es de límites al infinito, donde el truco es comparar grados del numerador y el denominador."
        },
        {
          "id": "tf2-13-3",
          "q": "En el Ejercicio 3 aparecen funciones definidas por partes (a trozos) que hay que analizar en puntos como $x=0$, $x=-2$ y $x=2$.",
          "a": true,
          "explain": "Sí: tanto $f(x)$ en $x=0$ como $g(x)$ en $x=-2$ y $x=2$ son funciones por casos, y por eso se piden los límites laterales en esos puntos."
        },
        {
          "id": "tf2-13-4",
          "q": "El Ejercicio 5 pide hallar un parámetro $a \\in \\mathbb{R}$ para que $\\lim_{x \\to 0} \\frac{\\sqrt{x^2-ax+1}-1}{x} = 2$.",
          "a": true,
          "explain": "Exacto, es ingeniería inversa del límite: en vez de calcular el resultado, te dan el resultado ($2$) y buscás el $a$ que lo hace cumplir."
        },
        {
          "id": "tf2-13-5",
          "q": "El Ejercicio 4 contiene únicamente límites de funciones racionales, sin radicales ni exponenciales.",
          "a": false,
          "explain": "Para nada: el criollo del Ejercicio 4 dice \\\"mezcla de tipos\\\" e incluye racionales, radicales, exponenciales como $4^{-x}$ y potencias como $(\\dots)^{x^2}$."
        }
      ],
      "mc": [
        {
          "id": "mc2-13-1",
          "q": "¿Qué técnica menciona el criollo del Ejercicio 1 para levantar las indeterminaciones $\\frac{0}{0}$?",
          "options": [
            "Comparar los grados del numerador y el denominador",
            "Aplicar el límite del seno sobre su argumento",
            "Factorizar el numerador y el denominador y cancelar",
            "Multiplicar por el conjugado de la expresión radical"
          ],
          "correctIndex": 2,
          "explain": "El criollo del Ejercicio 1 dice literalmente \\\"factorizá y cancelá\\\". Comparar grados es del Ejercicio 2 y el conjugado aparece en los casos con radicales."
        },
        {
          "id": "mc2-13-2",
          "q": "Según el criollo, ¿cuál es la estrategia central del Ejercicio 2 (límites al infinito)?",
          "options": [
            "Comparar los grados de las potencias",
            "Verificar los dos límites laterales",
            "Despejar un parámetro desconocido",
            "Factorizar y cancelar el factor común"
          ],
          "correctIndex": 0,
          "explain": "El criollo del Ejercicio 2 dice \\\"compará grados\\\": en cocientes de polinomios al infinito el resultado depende de qué grado domina arriba y abajo."
        },
        {
          "id": "mc2-13-3",
          "q": "En el Ejercicio 3a, ¿en qué punto se pide analizar la existencia del límite de $f(x)$?",
          "options": [
            "En $x = 2$",
            "En $x = -2$",
            "En $x = 0$",
            "En $x = -3$"
          ],
          "correctIndex": 2,
          "explain": "El apartado a) del Ejercicio 3 dice \\\"Analizar en $x=0$\\\". Los puntos $x=-2$ y $x=2$ son del apartado b) con la función $g(x)$."
        },
        {
          "id": "mc2-13-4",
          "q": "¿Cuál de estos límites pertenece al Ejercicio 4 según el texto de la guía?",
          "options": [
            "$\\lim_{x \\to 2} \\frac{x^2-4}{2x^2-6}$",
            "$\\lim_{x \\to +\\infty} 4^{-x}$",
            "$\\lim_{x \\to 0} \\frac{\\operatorname{sen}(5x)}{\\operatorname{sen}(3x)}$",
            "$\\lim_{x \\to +\\infty} \\frac{2x^2-3x-4}{x^4-5}$"
          ],
          "correctIndex": 1,
          "explain": "$\\lim_{x \\to +\\infty} 4^{-x}$ figura como primer ítem del Ejercicio 4. El de $\\frac{x^2-4}{2x^2-6}$ es del Ejercicio 1 y el de $\\frac{2x^2-3x-4}{x^4-5}$ del Ejercicio 2."
        },
        {
          "id": "mc2-13-5",
          "q": "¿Qué valor debe tomar el límite del Ejercicio 5 para hallar el parámetro $a$?",
          "options": [
            "El límite debe valer $0$",
            "El límite debe valer $1$",
            "El límite debe valer $2$",
            "El límite debe valer $-1$"
          ],
          "correctIndex": 2,
          "explain": "El enunciado del Ejercicio 5 fija $\\lim_{x \\to 0} \\frac{\\sqrt{x^2-ax+1}-1}{x} = 2$, así que buscás el $a$ que hace que ese cociente tienda a $2$."
        }
      ],
      "ms": [
        {
          "id": "ms2-13-1",
          "q": "¿Cuáles de los siguientes límites aparecen explícitamente en el Ejercicio 1 de la guía?",
          "options": [
            "$\\lim_{x \\to 2} \\frac{2x-4}{2x^2-3x-2}$",
            "$\\lim_{x \\to -3} \\frac{3x^2-8x+2}{x^2-9}$",
            "$\\lim_{x \\to 0} \\frac{\\operatorname{sen}(kx)}{x}$",
            "$\\lim_{x \\to 1} \\frac{2x^3-5x^2+3}{2-\\sqrt{5-x}}$",
            "$\\lim_{x \\to \\infty} \\left(\\frac{1+5x}{3+5x}\\right)^{2x-1}$"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Los tres primeros marcados están en el Ejercicio 1. El del seno y el de la potencia $1^\\infty$ no figuran en esta sección (son de otra guía)."
        },
        {
          "id": "ms2-13-2",
          "q": "¿Cuáles de estas afirmaciones sobre la estructura del Ejercicio 3 son correctas?",
          "options": [
            "Pide calcular límites laterales",
            "Analiza la existencia del límite en puntos dados",
            "Usa funciones definidas por partes",
            "Trabaja con $f(x)$ en $x=0$ y $g(x)$ en $x=\\pm 2$",
            "Solo contiene límites al infinito"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro describen bien el Ejercicio 3: laterales, existencia, funciones por casos y los puntos $0$, $-2$ y $2$. La última es falsa: los límites al infinito son del Ejercicio 2."
        },
        {
          "id": "ms2-13-3",
          "q": "¿Cuáles de estos límites con radicales aparecen tal cual en el Ejercicio 1?",
          "options": [
            "$\\lim_{x \\to -2} \\frac{4x^2+2x-12}{3-\\sqrt{5-2x}}$",
            "$\\lim_{x \\to 0} \\frac{\\sqrt{1-\\operatorname{sen}x}-\\sqrt{1+\\operatorname{sen}x}}{x}$",
            "$\\lim_{x \\to +\\infty} \\left(\\sqrt{x^2+1}-\\sqrt{x^2-4x}\\right)$",
            "$\\lim_{x \\to 0} 2^{\\frac{1}{x}}$",
            "$\\lim_{x \\to 4} \\frac{x^3-3x^2-16}{3-\\sqrt{5+x}}$"
          ],
          "correctIndexes": [
            0
          ],
          "explain": "Solo el primero está en el Ejercicio 1. El del seno es de otra guía, el de las dos raíces es del Ejercicio 2, y el de $\\sqrt{5+x}$ es del Ejercicio 4."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-13-1",
        "front": "¿Qué tipos de indeterminación trabaja esta guía?",
        "back": "Las del tipo $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$ y $1^\\infty$, usando factorización, racionalización, límites laterales y límites al infinito."
      },
      {
        "id": "fc2-13-2",
        "front": "Técnica del Ejercicio 1",
        "back": "Ante una indeterminación $\\frac{0}{0}$, factorizar numerador y denominador y cancelar el factor común que produce el cero."
      },
      {
        "id": "fc2-13-3",
        "front": "Estrategia del Ejercicio 2",
        "back": "En límites al infinito de cocientes de polinomios, comparar los grados del numerador y el denominador para decidir el resultado."
      },
      {
        "id": "fc2-13-4",
        "front": "¿Qué pide el Ejercicio 3?",
        "back": "Calcular los límites laterales de funciones definidas por partes y determinar la existencia del límite en los puntos indicados ($x=0$, $x=-2$, $x=2$)."
      },
      {
        "id": "fc2-13-5",
        "front": "Objetivo del Ejercicio 5",
        "back": "Hallar $a \\in \\mathbb{R}$ para que $\\lim_{x \\to 0} \\frac{\\sqrt{x^2-ax+1}-1}{x} = 2$ y justificarlo."
      },
      {
        "id": "fc2-13-6",
        "front": "¿Qué mezcla el Ejercicio 4?",
        "back": "Distintos tipos de límites: racionales, radicales, exponenciales (como $4^{-x}$) y potencias (como $\\left(\\dots\\right)^{x^2}$)."
      },
      {
        "id": "fc2-13-7",
        "front": "Para racionalizar un límite con radicales se usa...",
        "back": "La multiplicación por el conjugado de la expresión radical, para transformar la diferencia de raíces en algo factorizable."
      },
      {
        "id": "fc2-13-8",
        "front": "¿Dónde están las resoluciones completas?",
        "back": "En la pestaña Ver PDFs → Resultados · Indeterminaciones del límite."
      }
    ]
  },
  "14": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-14-1",
          "q": "El Ejercicio 1 de esta segunda tanda trabaja principalmente límites trigonométricos con la función seno.",
          "a": true,
          "explain": "Sí, el criollo dice \\\"el 1 es puro seno\\\": son límites del estilo $\\frac{\\operatorname{sen}(\\cdot)}{\\cdot}$ que se apoyan en el límite notable del seno."
        },
        {
          "id": "tf2-14-2",
          "q": "El criollo recomienda mezclar la técnica del seno con la técnica de $1^\\infty$ porque son equivalentes.",
          "a": false,
          "explain": "Al contrario: el criollo avisa \\\"no las mezclés\\\", son dos técnicas bien distintas. El seno usa el límite notable y la $1^\\infty$ usa el número $e$."
        },
        {
          "id": "tf2-14-3",
          "q": "El Ejercicio 2 pide hallar $b \\in \\mathbb{R}$ tal que $\\lim_{x \\to 0} \\frac{\\operatorname{sen}(3bx)}{\\operatorname{sen}(4x)} = 12$.",
          "a": true,
          "explain": "Tal cual el enunciado: es un ejercicio de parámetro donde ajustás $b$ para que ese cociente de senos tienda a $12$."
        },
        {
          "id": "tf2-14-4",
          "q": "El Ejercicio 3 trabaja la indeterminación $1^\\infty$ con potencias del tipo $\\left(\\frac{ax+b}{cx+d}\\right)^{\\text{exponente}}$.",
          "a": true,
          "explain": "Sí, todos los ítems del Ejercicio 3 son potencias de cocientes que tienden a $1$ elevadas a algo que crece, o sea indeterminación $1^\\infty$."
        },
        {
          "id": "tf2-14-5",
          "q": "Según el criollo, conviene hacer los ejercicios salteados, empezando por el Ejercicio 3.",
          "a": false,
          "explain": "No: el criollo dice \\\"Hacé los ejercicios en orden\\\". Primero el 1 (seno), después el 2 (parámetro) y recién al final el 3 (exponentes)."
        }
      ],
      "mc": [
        {
          "id": "mc2-14-1",
          "q": "¿Cuáles son las dos técnicas distintas que el criollo pide no mezclar?",
          "options": [
            "La factorización y la racionalización de radicales",
            "La comparación de grados y la regla de L'Hôpital",
            "El límite notable del seno y la $1^\\infty$",
            "Los límites laterales y la continuidad a trozos"
          ],
          "correctIndex": 2,
          "explain": "El criollo contrasta los límites trigonométricos del seno con la indeterminación $1^\\infty$ y advierte que son \\\"bien distintas\\\", que no las mezclés."
        },
        {
          "id": "mc2-14-2",
          "q": "¿Qué valor debe alcanzar el límite del Ejercicio 2 para despejar $b$?",
          "options": [
            "El límite debe valer $3$",
            "El límite debe valer $40$",
            "El límite debe valer $0$",
            "El límite debe valer $12$"
          ],
          "correctIndex": 3,
          "explain": "El enunciado fija $\\lim_{x \\to 0} \\frac{\\operatorname{sen}(3bx)}{\\operatorname{sen}(4x)} = 12$, así que buscás el $b$ real que produce ese $12$."
        },
        {
          "id": "mc2-14-3",
          "q": "¿Cuál de estos límites pertenece al Ejercicio 1 (puro seno)?",
          "options": [
            "$\\lim_{x \\to \\infty} \\left(\\frac{2x-1}{2x+3}\\right)^{x+5}$",
            "$\\lim_{x \\to +\\infty} \\left(\\sqrt{x^2+1}-\\sqrt{x^2-4x}\\right)$",
            "$\\lim_{x \\to 0} \\frac{\\operatorname{sen}^2 x}{3x}$",
            "$\\lim_{x \\to 2} \\frac{x^2-4}{2x^2-6x+1}$"
          ],
          "correctIndex": 2,
          "explain": "$\\frac{\\operatorname{sen}^2 x}{3x}$ es uno de los ítems del Ejercicio 1 (puro seno). La potencia es del Ejercicio 3 y los otros dos no figuran en esta guía."
        },
        {
          "id": "mc2-14-4",
          "q": "¿Qué caracteriza a todos los límites del Ejercicio 3?",
          "options": [
            "Son cocientes de senos cerca de cero",
            "Son potencias con base que tiende a $1$",
            "Son límites laterales de funciones a trozos",
            "Son cocientes de polinomios al infinito"
          ],
          "correctIndex": 1,
          "explain": "Todos tienen la forma $\\left(\\frac{ax+b}{cx+d}\\right)^{\\text{exponente}}$ donde la base tiende a $1$ y el exponente crece: la clásica $1^\\infty$."
        },
        {
          "id": "mc2-14-5",
          "q": "Según el criollo, ¿en qué orden conviene encarar los tres ejercicios?",
          "options": [
            "Primero el 3, después el 1, al final el 2",
            "Primero el 2, después el 3, al final el 1",
            "Primero el 1, después el 2, al final el 3",
            "En cualquier orden, da lo mismo cuál"
          ],
          "correctIndex": 2,
          "explain": "El criollo dice hacerlos en orden: el 1 es puro seno, el 2 es de parámetro y el 3 te mete exponentes hasta el cuello."
        }
      ],
      "ms": [
        {
          "id": "ms2-14-1",
          "q": "¿Cuáles de estos límites figuran en el Ejercicio 1 de esta guía?",
          "options": [
            "$\\lim_{x \\to 0} \\frac{\\operatorname{sen}^2 x}{3x}$",
            "$\\lim_{x \\to 0} \\frac{\\operatorname{sen}(kx)}{x}$",
            "$\\lim_{x \\to 3} \\frac{x^2-9}{\\operatorname{sen}(x-3)}$",
            "$\\lim_{x \\to \\infty} \\left(\\frac{3x+1}{3x-2}\\right)^{2x+1}$",
            "$\\lim_{x \\to 2} \\frac{x^2-4}{2x^2-6}$"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Los tres primeros están en el Ejercicio 1 (todos con seno). La potencia es del Ejercicio 3 y el último no aparece en esta guía."
        },
        {
          "id": "ms2-14-2",
          "q": "¿Cuáles de estas potencias del tipo $1^\\infty$ aparecen en el Ejercicio 3?",
          "options": [
            "$\\lim_{x \\to \\infty} \\left(\\frac{1+5x}{3+5x}\\right)^{2x-1}$",
            "$\\lim_{x \\to \\infty} \\left(\\frac{2x-1}{2x+3}\\right)^{x+5}$",
            "$\\lim_{x \\to \\infty} \\left(\\frac{3x-5}{3x+4}\\right)^{5x-3}$",
            "$\\lim_{x \\to \\infty} \\left(\\frac{1+3x}{3x+4}\\right)^{2x+1}$",
            "$\\lim_{x \\to \\infty} \\left(\\frac{-6+5x}{4+5x}\\right)^{3x-5}$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco están en el Ejercicio 3: ese ejercicio es íntegramente de potencias con base que tiende a $1$."
        },
        {
          "id": "ms2-14-3",
          "q": "¿Cuáles de estas afirmaciones sobre el Ejercicio 2 son correctas según el texto?",
          "options": [
            "Pide hallar un parámetro $a$ en una raíz",
            "El cociente involucra $\\operatorname{sen}(3bx)$ y $\\operatorname{sen}(4x)$",
            "El límite debe igualar a $4$",
            "Es un límite cuando $x \\to \\infty$",
            "El parámetro buscado es un número complejo"
          ],
          "correctIndexes": [
            1
          ],
          "explain": "Solo la segunda es correcta. El parámetro es $b$ (no $a$), el límite vale $12$ (no $4$), es cuando $x \\to 0$ y $b \\in \\mathbb{R}$, real."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-14-1",
        "front": "¿Qué dos técnicas trabaja esta segunda tanda?",
        "back": "Los límites trigonométricos con $\\frac{\\operatorname{sen}(x)}{x}$ y la indeterminación $1^\\infty$. Son técnicas distintas y no conviene mezclarlas."
      },
      {
        "id": "fc2-14-2",
        "front": "Tema del Ejercicio 1",
        "back": "Límites trigonométricos: cocientes con seno como $\\frac{\\operatorname{sen}(5x)}{\\operatorname{sen}(3x)}$, resueltos con el límite notable del seno."
      },
      {
        "id": "fc2-14-3",
        "front": "Tema del Ejercicio 2",
        "back": "Hallar $b \\in \\mathbb{R}$ tal que $\\lim_{x \\to 0} \\frac{\\operatorname{sen}(3bx)}{\\operatorname{sen}(4x)} = 12$. Es un ejercicio de parámetro."
      },
      {
        "id": "fc2-14-4",
        "front": "Tema del Ejercicio 3",
        "back": "Indeterminación $1^\\infty$: potencias de cocientes que tienden a $1$ elevadas a un exponente que crece, como $\\left(\\frac{1+5x}{3+5x}\\right)^{2x-1}$."
      },
      {
        "id": "fc2-14-5",
        "front": "¿Por qué no mezclar las dos técnicas?",
        "back": "Porque el límite del seno se apoya en el límite notable trigonométrico y la $1^\\infty$ se apoya en el número $e$; son procedimientos diferentes."
      },
      {
        "id": "fc2-14-6",
        "front": "Orden sugerido de los ejercicios",
        "back": "En orden: el 1 (puro seno), el 2 (parámetro) y el 3 (potencias con exponentes)."
      },
      {
        "id": "fc2-14-7",
        "front": "Forma típica de un límite $1^\\infty$ del Ejercicio 3",
        "back": "$\\left(\\frac{ax+b}{cx+d}\\right)^{\\text{exponente}}$ con la base tendiendo a $1$ cuando $x \\to \\infty$."
      },
      {
        "id": "fc2-14-8",
        "front": "¿Dónde están las resoluciones de esta guía?",
        "back": "En la pestaña Ver PDFs → Resultados · Indeterminaciones (parte 2)."
      }
    ]
  },
  "15": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-15-1",
          "q": "El Ejercicio 1 pide, para $f(x) = \\frac{2x^2+3x-5}{x-1}$, determinar el dominio, la asíntota oblicua y las asíntotas verticales si existen.",
          "a": true,
          "explain": "Sí, esos son los tres ítems del Ejercicio 1: dominio, asíntota oblicua y asíntotas verticales de esa función racional."
        },
        {
          "id": "tf2-15-2",
          "q": "El Ejercicio 2 pide escribir una función cuyo gráfico admita dos asíntotas verticales y una horizontal.",
          "a": true,
          "explain": "Correcto, el Ejercicio 2 te pide construir (escribir) una función con esas características: dos verticales y una horizontal."
        },
        {
          "id": "tf2-15-3",
          "q": "Según el Ejercicio 9, si $a \\notin A$ (no pertenece al dominio) entonces necesariamente $x=a$ es asíntota.",
          "a": false,
          "explain": "Esa es una de las afirmaciones a justificar, y es falsa: que $a$ no esté en el dominio no garantiza una asíntota vertical; puede ser una discontinuidad evitable, por ejemplo."
        },
        {
          "id": "tf2-15-4",
          "q": "En el Ejercicio 7, el modelo de Juana es $f(t) = \\frac{24e^t}{3e^t+1} - 2$ y se pide probar que no podrá adelgazar más de $6$ kg.",
          "a": true,
          "explain": "Tal cual: hay que probar que aunque siga el régimen para siempre, el límite acota lo que adelgaza en $6$ kg (relacionado con una asíntota horizontal)."
        },
        {
          "id": "tf2-15-5",
          "q": "En el Ejercicio 8, el costo promedio $\\overline{C(x)} = \\frac{C(x)}{x}$ con $C(x) = 12000 + 7x$ tiende a $12000$ cuando la producción crece.",
          "a": false,
          "explain": "No: $\\frac{12000+7x}{x} = \\frac{12000}{x} + 7$, que tiende a $7$ (el costo variable). El $12000$ es el costo fijo que se diluye; la asíntota horizontal es $y=7$."
        }
      ],
      "mc": [
        {
          "id": "mc2-15-1",
          "q": "En el Ejercicio 1, ¿qué tres cosas se piden para la función $f(x) = \\frac{2x^2+3x-5}{x-1}$?",
          "options": [
            "La imagen, los ceros y la asíntota horizontal",
            "La derivada, los máximos y los puntos de inflexión",
            "El dominio, la asíntota oblicua y las verticales",
            "La continuidad, la paridad y la asíntota horizontal"
          ],
          "correctIndex": 2,
          "explain": "Los tres ítems del Ejercicio 1 son: determinar el dominio, hallar la asíntota oblicua y determinar las asíntotas verticales si existen."
        },
        {
          "id": "mc2-15-2",
          "q": "En el Ejercicio 4, ¿qué se pide respecto de $f(x) = \\frac{x^3-1}{3x^2+1}$ y su asíntota oblicua?",
          "options": [
            "Calcular su pendiente y su ordenada al origen",
            "Probar que la función no admite asíntota oblicua",
            "Indicar en qué puntos el gráfico la corta",
            "Hallar el dominio de definición de la función"
          ],
          "correctIndex": 2,
          "explain": "El Ejercicio 4 pide indicar en qué puntos el gráfico de $f$ corta a su asíntota oblicua, o sea resolver $f(x)$ igual a la recta asíntota."
        },
        {
          "id": "mc2-15-3",
          "q": "En el Ejercicio 5, sabiendo que $y=-2$ es asíntota cuando $x \\to -\\infty$, ¿cuánto vale $\\lim_{x \\to -\\infty} \\frac{2f(x)-5}{3}$?",
          "options": [
            "Vale $-\\frac{4}{3}$",
            "Vale $-2$",
            "Vale $-3$",
            "Vale $-\\frac{9}{3}$"
          ],
          "correctIndex": 2,
          "explain": "Si $f(x) \\to -2$, entonces $\\frac{2(-2)-5}{3} = \\frac{-9}{3} = -3$. Reemplazás el límite de $f$ y operás."
        },
        {
          "id": "mc2-15-4",
          "q": "En el Ejercicio 8, ¿hacia qué valor de estabilidad tiende el costo promedio cuando la producción crece sin parar?",
          "options": [
            "Hacia $\\$7$, el costo variable",
            "Hacia $\\$12000$, el costo fijo",
            "Hacia $\\$12007$, la suma de ambos",
            "Hacia $\\$0$, sin costo alguno"
          ],
          "correctIndex": 0,
          "explain": "$\\frac{12000+7x}{x} = \\frac{12000}{x}+7 \\to 7$. El costo fijo se reparte entre cada vez más unidades y queda el variable $\\$7$ como asíntota horizontal."
        },
        {
          "id": "mc2-15-5",
          "q": "En el Ejercicio 6, ¿qué describe la asíntota horizontal $y = 2$ para $x \\to +\\infty$?",
          "options": [
            "La recta oblicua que sigue por izquierda",
            "El valor de $f$ en el punto $x=0$",
            "La recta a la que se acerca por derecha",
            "El salto de la función en $x=0$"
          ],
          "correctIndex": 2,
          "explain": "Una asíntota horizontal $y=2$ para $x \\to +\\infty$ significa que la función se acerca al valor $2$ cuando $x$ crece, por la derecha del gráfico."
        }
      ],
      "ms": [
        {
          "id": "ms2-15-1",
          "q": "Según el Ejercicio 9, ¿cuáles de las siguientes afirmaciones (que hay que justificar) son verdaderas?",
          "options": [
            "Si $x=a$ es asíntota, entonces existe $f(a)$",
            "Si $a \\notin A$, entonces $x=a$ es asíntota",
            "Si $y=b$ es asíntota, no existe $x_0$ con $f(x_0)=b$",
            "Si $\\lim_{x \\to \\infty} f(x)=\\infty$, no hay oblicuas",
            "Toda función racional tiene siempre asíntota vertical"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es verdadera tal como está: una asíntota vertical $x=a$ implica que $f(a)$ NO existe; $a \\notin A$ no obliga a asíntota; una función puede cruzar su horizontal; un límite infinito no descarta oblicua; y no toda racional tiene vertical."
        },
        {
          "id": "ms2-15-2",
          "q": "¿Cuáles de estas funciones aparecen en el Ejercicio 3 (determinar dominio y asíntotas)?",
          "options": [
            "$f(x) = x + \\frac{x-1}{x^2-5x+4}$",
            "$f(x) = \\frac{x^2}{x-4}$",
            "$f(x) = \\frac{x+3}{x^2-9}$",
            "$f(x) = \\frac{2x^2+3x-5}{x-1}$",
            "$f(x) = \\frac{x^3-1}{3x^2+1}$"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son ítems del Ejercicio 3. La cuarta es del Ejercicio 1 y la quinta es del Ejercicio 4 (el de cortar la asíntota oblicua)."
        },
        {
          "id": "ms2-15-3",
          "q": "¿Cuáles de estos datos sobre el modelo de Juana (Ejercicio 7) son correctos?",
          "options": [
            "El modelo es $f(t) = \\frac{24e^t}{3e^t+1} - 2$",
            "Vale para todo $t \\geq 0$",
            "Cuanto más tiempo persiste, más adelgaza",
            "No podrá adelgazar más de $6$ kg",
            "El modelo decrece con el tiempo"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro están en el enunciado: la fórmula, el dominio $t \\geq 0$, que adelgaza más con el tiempo y el tope de $6$ kg. La última es falsa: el modelo crece, no decrece."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-15-1",
        "front": "¿Qué tres tipos de asíntotas cubre esta guía?",
        "back": "Verticales, horizontales y oblicuas. Se calculan dividiendo y resolviendo límites para ver qué rectas persigue la función."
      },
      {
        "id": "fc2-15-2",
        "front": "Ejercicio 1: ¿qué se pide para $f(x)=\\frac{2x^2+3x-5}{x-1}$?",
        "back": "Determinar el dominio, hallar la asíntota oblicua y determinar las asíntotas verticales si existen."
      },
      {
        "id": "fc2-15-3",
        "front": "Ejercicio 4: ¿qué pide sobre $f(x)=\\frac{x^3-1}{3x^2+1}$?",
        "back": "Indicar en qué puntos el gráfico de $f$ corta a su asíntota oblicua."
      },
      {
        "id": "fc2-15-4",
        "front": "Ejercicio 8: límite del costo promedio",
        "back": "$\\overline{C(x)} = \\frac{12000+7x}{x} = \\frac{12000}{x}+7 \\to 7$. El valor de estabilidad es $\\$7$, que es una asíntota horizontal."
      },
      {
        "id": "fc2-15-5",
        "front": "Ejercicio 7: ¿qué se prueba con el modelo de Juana?",
        "back": "Que cuanto más tiempo persiste más adelgaza, y que aunque nunca deje el régimen no podrá adelgazar más de $6$ kg."
      },
      {
        "id": "fc2-15-6",
        "front": "Ejercicio 5: usar asíntotas para calcular límites",
        "back": "Con $y=-2$ para $x \\to -\\infty$ se reemplaza $f(x) \\to -2$ en expresiones como $\\frac{2f(x)-5}{3}$, que da $-3$."
      },
      {
        "id": "fc2-15-7",
        "front": "Asíntota vertical $x=a$: ¿existe $f(a)$?",
        "back": "No. Si $x=a$ es asíntota vertical, la función no está definida en $a$ (o tiende a infinito ahí); $f(a)$ no existe."
      },
      {
        "id": "fc2-15-8",
        "front": "¿Dónde están las resoluciones de la guía de asíntotas?",
        "back": "En la pestaña Ver PDFs → Resultados · Asíntotas."
      }
    ]
  },
  "16": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-16-1",
          "q": "El Ejercicio 1 pide decidir, a partir de gráficos, si la función es continua o discontinua en $x=a$ y clasificar la discontinuidad si la hay.",
          "a": true,
          "explain": "Sí: el Ejercicio 1 es \\\"continuidad desde gráficos\\\", mirás el dibujito y decidís si corta o no, clasificando la discontinuidad cuando exista."
        },
        {
          "id": "tf2-16-2",
          "q": "El Ejercicio 5 pide hallar el valor de $a$ para que $f(x)=\\frac{a-4x}{6-2x}$ presente una discontinuidad evitable en $x=3$.",
          "a": true,
          "explain": "Correcto: en $x=3$ el denominador se anula, y se busca el $a$ que también anule el numerador para que la discontinuidad sea evitable."
        },
        {
          "id": "tf2-16-3",
          "q": "Una discontinuidad evitable es lo mismo que una asíntota vertical.",
          "a": false,
          "explain": "No: la evitable es un \\\"huequito\\\" que se podría tapar redefiniendo el punto. La asíntota vertical es una discontinuidad esencial donde la función se va a infinito."
        },
        {
          "id": "tf2-16-4",
          "q": "El Ejercicio 6 busca valores de $a$, $b$ y $c$ para que la función por partes sea continua en $\\mathbb{R}$ y la recta $y=3$ sea asíntota cuando $x \\to +\\infty$.",
          "a": true,
          "explain": "Tal cual el enunciado: tres incógnitas para pegar las ramas (continuidad en todo $\\mathbb{R}$) y además forzar la asíntota horizontal $y=3$."
        },
        {
          "id": "tf2-16-5",
          "q": "Los Ejercicios 4, 7 y 8 piden calcular límites laterales de funciones racionales sin graficar nada.",
          "a": false,
          "explain": "Al revés: los tres piden GRAFICAR una función que verifique condiciones dadas (límites, asíntotas, valores puntuales). Son ejercicios de dibujar, no de calcular."
        }
      ],
      "mc": [
        {
          "id": "mc2-16-1",
          "q": "¿En qué tipos clasifica el Ejercicio 1 las discontinuidades de una función?",
          "options": [
            "Lineal o cuadrática",
            "Evitable o esencial",
            "Creciente o decreciente",
            "Acotada o no acotada"
          ],
          "correctIndex": 1,
          "explain": "La clasificación que se pide es entre discontinuidad evitable y esencial; las esenciales suelen corresponder a asíntotas."
        },
        {
          "id": "mc2-16-2",
          "q": "En el Ejercicio 5, ¿qué condición sobre $f(x)=\\frac{a-4x}{6-2x}$ produce una discontinuidad evitable en $x=3$?",
          "options": [
            "Que el denominador valga exactamente $6$ en $x=3$",
            "Que el numerador también se anule en $x=3$",
            "Que la función crezca sin ninguna cota cerca de ahí",
            "Que el parámetro $a$ resulte un número negativo"
          ],
          "correctIndex": 1,
          "explain": "Para que sea evitable, en $x=3$ se debe anular también el numerador $a-4x$, dejando un $\\frac{0}{0}$ salvable en vez de una asíntota."
        },
        {
          "id": "mc2-16-3",
          "q": "En el Ejercicio 6, ¿qué papel cumple la condición de que $y=3$ sea asíntota cuando $x \\to +\\infty$?",
          "options": [
            "Define enteramente la rama del medio de la función",
            "Fija el valor del parámetro $c$ de la última rama",
            "Obliga a que la función valga $3$ justo en $x=0$",
            "Vuelve evitable la discontinuidad ubicada en $x=-1$"
          ],
          "correctIndex": 1,
          "explain": "La rama para $x>2$ es $\\frac{3x}{x^2-1}-c$, que tiende a $-c$ al infinito; para que la asíntota sea $y=3$ se necesita $-c=3$, fijando $c$."
        },
        {
          "id": "mc2-16-4",
          "q": "¿Cuál de estas funciones aparece en el Ejercicio 2 (clasificar discontinuidades analíticamente)?",
          "options": [
            "$f(x)=\\frac{2x^2+3x-5}{x-1}$",
            "$i(x)=\\frac{x^2-9}{x+3}$",
            "$f(x)=\\frac{x^2(3-2x)}{x^2-1}$",
            "$f(x)=\\frac{24e^t}{3e^t+1}-2$"
          ],
          "correctIndex": 1,
          "explain": "$i(x)=\\frac{x^2-9}{x+3}$ es uno de los ítems del Ejercicio 2 (tiene discontinuidad evitable en $x=-3$). Las otras son de otras guías o del Ejercicio 3."
        },
        {
          "id": "mc2-16-5",
          "q": "¿Qué tienen en común los Ejercicios 4, 7 y 8 de la guía de continuidad?",
          "options": [
            "Piden hallar tres parámetros para asegurar continuidad",
            "Piden clasificar discontinuidades a partir de fórmulas",
            "Piden graficar una función con las condiciones dadas",
            "Piden calcular límites trigonométricos con el seno"
          ],
          "correctIndex": 2,
          "explain": "Los tres dan una lista de condiciones (límites, asíntotas, valores) y piden graficar una función que las verifique. Son ejercicios de dibujo."
        }
      ],
      "ms": [
        {
          "id": "ms2-16-1",
          "q": "¿Cuáles de estas condiciones figuran en el Ejercicio 4 (graficar función)?",
          "options": [
            "$\\lim_{x \\to +\\infty} f(x) = 2$",
            "$\\lim_{x \\to -\\infty} f(x) = +\\infty$",
            "$f$ es discontinua en $x=0$",
            "$x=0$ es una asíntota vertical",
            "$f(2)=3$ y $f(4)=0$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro están en el Ejercicio 4. Lo de $f(2)=3$ y $f(4)=0$ es del Ejercicio 8, no del 4."
        },
        {
          "id": "ms2-16-2",
          "q": "¿Cuáles de estas afirmaciones sobre el Ejercicio 6 son correctas?",
          "options": [
            "Busca tres parámetros reales $a$, $b$ y $c$",
            "Exige continuidad de $f$ en todo $\\mathbb{R}$",
            "Pide que $y=3$ sea asíntota para $x \\to +\\infty$",
            "La función está definida por tres ramas",
            "La función es un único polinomio sin ramas"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro describen el Ejercicio 6: tres incógnitas, continuidad en $\\mathbb{R}$, asíntota $y=3$ y función a trozos de tres ramas. La última se contradice con eso."
        },
        {
          "id": "ms2-16-3",
          "q": "¿Cuáles de estas funciones se analizan en el Ejercicio 3 (dominio, asíntotas y discontinuidades)?",
          "options": [
            "$f(x)=\\frac{x^2(3-2x)}{x^2-1}$",
            "$g(x)=\\ln(3x-5)$",
            "$j(x)=3^x$",
            "$k(x)=3^{-x}-1$",
            "$i(x)=\\frac{x^2-9}{x+3}$"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "Los dos primeros son del Ejercicio 3. En cambio $3^x$, $3^{-x}-1$ y $\\frac{x^2-9}{x+3}$ pertenecen al Ejercicio 2."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-16-1",
        "front": "¿Qué practica la guía de continuidad?",
        "back": "Identificar discontinuidades desde gráficos y fórmulas, clasificarlas (evitable o esencial), encontrar asíntotas y hallar parámetros para que una función sea continua."
      },
      {
        "id": "fc2-16-2",
        "front": "Discontinuidad evitable vs. esencial",
        "back": "La evitable es un punto suelto o hueco que se podría redefinir; la esencial no se puede arreglar y suele corresponder a un salto o a una asíntota."
      },
      {
        "id": "fc2-16-3",
        "front": "Ejercicio 5: discontinuidad evitable en $x=3$",
        "back": "Para $f(x)=\\frac{a-4x}{6-2x}$, se elige $a$ de modo que el numerador también se anule en $x=3$, transformando la asíntota en un hueco salvable."
      },
      {
        "id": "fc2-16-4",
        "front": "Ejercicio 6: ¿qué se busca?",
        "back": "Los valores reales de $a$, $b$ y $c$ que hacen a la función por partes continua en $\\mathbb{R}$ y con la recta $y=3$ como asíntota para $x \\to +\\infty$."
      },
      {
        "id": "fc2-16-5",
        "front": "Ejercicios 4, 7 y 8: ¿qué piden?",
        "back": "Graficar una función que verifique condiciones dadas: límites en el infinito, límites laterales, asíntotas, discontinuidades y valores puntuales."
      },
      {
        "id": "fc2-16-6",
        "front": "Ejercicio 1: ¿de dónde se decide la continuidad?",
        "back": "Desde gráficos: se mira el dibujo en $x=a$ para decidir si la función es continua o discontinua y, en ese caso, clasificar la discontinuidad."
      },
      {
        "id": "fc2-16-7",
        "front": "Ejercicio 2 vs. Ejercicio 3",
        "back": "El 2 clasifica discontinuidades analíticamente (sin gráficos); el 3 pide el paquete completo: dominio, ecuaciones de asíntotas y clasificación de puntos."
      },
      {
        "id": "fc2-16-8",
        "front": "¿Dónde están las resoluciones de continuidad?",
        "back": "En la pestaña Ver PDFs → Resultados · Continuidad."
      }
    ]
  },
  "17": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-17-1",
          "q": "La función $f(x) = |x|$ es continua en $x=0$ pero no es derivable en dicho punto.",
          "a": true,
          "explain": "Justo eso pide verificar el Ejercicio 2: con la definición se ve que el límite del cociente incremental no coincide por izquierda y por derecha, así que es continua pero no derivable en cero."
        },
        {
          "id": "tf2-17-2",
          "q": "La recta tangente a $h(x)$ en un punto tiene una pendiente distinta a la pendiente de $h(x)$ en ese punto.",
          "a": false,
          "explain": "Falso. La recta tangente toca la curva y comparte su pendiente en ese punto; ese es justamente el dato que el Ejercicio 1 te manda a determinar."
        },
        {
          "id": "tf2-17-3",
          "q": "Para el Ejercicio 4, hay que hallar valores de $a$ y $b$ reales tales que la derivada de $f(x) = (ax+b)\\operatorname{sen}x + \\cos x$ sea $x\\cos x$.",
          "a": true,
          "explain": "Tal cual lo plantea el enunciado: buscás $a, b \\in \\mathbb{R}$ para que $f'(x) = x\\cos x$. Es un problema de parámetros con derivada de producto."
        },
        {
          "id": "tf2-17-4",
          "q": "Derivar $f(x) = x^3 - 9x + x^2 + 20$ requiere usar la regla del cociente.",
          "a": false,
          "explain": "Falso. Es un polinomio: se deriva término a término con la regla de la potencia, sin cociente ninguno. Te da $3x^2 + 2x - 9$."
        },
        {
          "id": "tf2-17-5",
          "q": "En el Ejercicio 3 figura derivar la función $f(x) = x\\cos x$, que es un producto.",
          "a": true,
          "explain": "Sí, está en la lista del Ejercicio 3 y es un producto, así que se ataca con la regla del producto."
        }
      ],
      "mc": [
        {
          "id": "mc2-17-1",
          "q": "¿Cuál de estas funciones aparece en la lista del Ejercicio 3 para derivar?",
          "options": [
            "$f(x) = \\dfrac{e^x}{x^3}$",
            "$f(x) = \\dfrac{\\cos x}{x^2}$",
            "$f(x) = \\dfrac{x^4}{\\ln x}$",
            "$f(x) = \\dfrac{\\ln x}{x^4}$"
          ],
          "correctIndex": 3,
          "explain": "La que figura es $\\dfrac{\\ln x}{x^4}$. Las otras tres son variantes plausibles que no están en el listado del enunciado."
        },
        {
          "id": "mc2-17-2",
          "q": "Según el Ejercicio 2, ¿qué hay que usar para verificar la no derivabilidad de $|x|$ en $x=0$?",
          "options": [
            "La regla de la cadena para compuestas",
            "La definición de derivada",
            "La regla del producto de funciones",
            "La regla de L'Hôpital para cocientes"
          ],
          "correctIndex": 1,
          "explain": "El enunciado pide explícitamente verificarlo usando la definición de derivada, o sea el límite del cociente incremental, no una regla de derivación."
        },
        {
          "id": "mc2-17-3",
          "q": "En el Ejercicio 1, ¿qué se pide determinar respecto de la recta tangente a $h(x)$?",
          "options": [
            "Si es creciente o decreciente",
            "El área bajo su curva",
            "Su pendiente en el punto",
            "Su asíntota horizontal"
          ],
          "correctIndex": 2,
          "explain": "El enunciado pide determinar la pendiente de la recta tangente en dicho punto, además de identificar si la tangente es $f(x)$ o $g(x)$."
        },
        {
          "id": "mc2-17-4",
          "q": "¿Cuál de las siguientes funciones del Ejercicio 3 contiene una raíz cuarta?",
          "options": [
            "$f(x) = 2 - \\sqrt{x} + 3x - e^x$",
            "$f(x) = \\sqrt[4]{x} + 2x - e^x$",
            "$f(x) = x^{\\frac{5}{2}} + 4x - \\ln x$",
            "$f(x) = \\dfrac{4}{x} + 2^x - \\cos x$"
          ],
          "correctIndex": 1,
          "explain": "La que tiene raíz cuarta es $\\sqrt[4]{x} + 2x - e^x$. Las otras tienen raíz cuadrada, potencia fraccionaria o un cociente simple."
        },
        {
          "id": "mc2-17-5",
          "q": "Para derivar $f(x) = 3x^3 e^x$ del Ejercicio 3, ¿qué regla conviene aplicar?",
          "options": [
            "La regla del cociente entre dos",
            "La regla de la cadena anidada",
            "La regla del producto",
            "La regla de la suma de términos"
          ],
          "correctIndex": 2,
          "explain": "Es un producto entre $3x^3$ y $e^x$, así que va con la regla del producto. Te queda $9x^2 e^x + 3x^3 e^x$."
        }
      ],
      "ms": [
        {
          "id": "ms2-17-1",
          "q": "¿Cuáles de estas funciones aparecen en la lista del Ejercicio 3 para derivar?",
          "options": [
            "$f(x) = x\\cos x$",
            "$f(x) = x^5 \\ln x$",
            "$f(x) = \\tan x \\cdot x^2$",
            "$f(x) = 3x^3 e^x$",
            "$f(x) = e^x \\ln x$"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Están en el listado $x\\cos x$, $x^5\\ln x$ y $3x^3 e^x$. Las opciones con $\\tan x \\cdot x^2$ y $e^x \\ln x$ no figuran en el enunciado."
        },
        {
          "id": "ms2-17-2",
          "q": "¿Cuáles de estas afirmaciones sobre la guía son correctas según el texto?",
          "options": [
            "El Ejercicio 4 trabaja con parámetros $a$ y $b$",
            "El Ejercicio 2 usa la definición de derivada",
            "El Ejercicio 1 se apoya en un gráfico",
            "El Ejercicio 3 pide calcular integrales",
            "El Ejercicio 4 pide hallar una asíntota"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son fieles al texto. El Ejercicio 3 es de derivar funciones (no integrar) y el Ejercicio 4 busca parámetros para una derivada, no una asíntota."
        },
        {
          "id": "ms2-17-3",
          "q": "¿Cuáles de estas funciones del Ejercicio 3 son cocientes tal como están escritas en el enunciado?",
          "options": [
            "$f(x) = x^3 - 9x + x^2 + 20$",
            "$f(x) = \\sqrt[4]{x} + 2x - e^x$",
            "$f(x) = 3^x + 6x + 9$",
            "$f(x) = x \\cdot x \\cdot x^3$",
            "$f(x) = e^x \\operatorname{arctg}x + e^2$"
          ],
          "correctIndexes": [],
          "explain": "Ninguna de las cinco es un cociente: son un polinomio, una suma con raíz, una suma exponencial, un producto de potencias y una suma con producto. Los cocientes de la guía son otros, como $\\dfrac{4}{x}$ o $\\dfrac{x+2}{x^2+2}$."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-17-1",
        "front": "¿Qué pide el Ejercicio 1 sobre la recta tangente a $h(x)$?",
        "back": "Identificar si la tangente es $f(x)$ o $g(x)$ y en qué punto, y determinar la pendiente de esa recta tangente en dicho punto."
      },
      {
        "id": "fc2-17-2",
        "front": "¿Qué hay que verificar sobre $f(x)=|x|$ en $x=0$ (Ejercicio 2)?",
        "back": "Que es continua en $x=0$ pero no es derivable en ese punto, usando la definición de derivada."
      },
      {
        "id": "fc2-17-3",
        "front": "Derivada de $f(x)=2-\\sqrt{x}$",
        "back": "$f'(x) = -\\dfrac{1}{2\\sqrt{x}}$, ya que $\\sqrt{x}=x^{1/2}$ y se aplica la regla de la potencia."
      },
      {
        "id": "fc2-17-4",
        "front": "¿Qué método se usa para $f(x)=x\\cos x$?",
        "back": "La regla del producto: derivada del primero por el segundo más el primero por la derivada del segundo, dando $\\cos x - x\\operatorname{sen}x$."
      },
      {
        "id": "fc2-17-5",
        "front": "¿Qué pide el Ejercicio 4 de la guía?",
        "back": "Hallar $a, b \\in \\mathbb{R}$ tales que la derivada de $f(x)=(ax+b)\\operatorname{sen}x+\\cos x$ sea $f'(x)=x\\cos x$."
      },
      {
        "id": "fc2-17-6",
        "front": "Derivada de un polinomio como $x^3-9x+x^2+20$",
        "back": "Se deriva término a término con la regla de la potencia: $3x^2 + 2x - 9$. La constante 20 desaparece."
      },
      {
        "id": "fc2-17-7",
        "front": "¿Dónde están las resoluciones completas de esta guía?",
        "back": "En la pestaña Ver PDFs, en Resultados · Derivada de una función."
      },
      {
        "id": "fc2-17-8",
        "front": "¿Qué relación hay entre la tangente y la pendiente de la función en el punto?",
        "back": "La recta tangente comparte con la curva el punto de contacto y la pendiente: su pendiente es el valor de la derivada en ese punto."
      }
    ]
  },
  "18": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-18-1",
          "q": "La regla de la cadena se usa para derivar una función compuesta, es decir una función dentro de otra.",
          "a": true,
          "explain": "Tal cual: el Ejercicio 1 es puro entrenamiento de regla de la cadena, identificando función exterior e interior, como $f(x)=(3+5x)^8$."
        },
        {
          "id": "tf2-18-2",
          "q": "Para derivar $f(x)=x^x$ (Ejercicio 2) alcanza con la regla de la potencia común.",
          "a": false,
          "explain": "Falso. Como la variable está en la base y en el exponente, hay que usar el logaritmo implícito (derivación logarítmica), no la regla de la potencia."
        },
        {
          "id": "tf2-18-3",
          "q": "El Ejercicio 4 pide verificar que $f(x)=e^{2x}\\operatorname{sen}(5x)$ satisface $f''(x)-4f'(x)+29f(x)=0$.",
          "a": true,
          "explain": "Exacto, ese es el enunciado: calculás $f'$ y $f''$ y comprobás que la combinación da cero."
        },
        {
          "id": "tf2-18-4",
          "q": "El Ejercicio 7 trata sobre la rapidez de variación de la concentración de $\\text{CO}_2$ dentro de 3 años.",
          "a": true,
          "explain": "Sí, el problema da $C(t)$ y pide con qué rapidez varía la concentración dentro de 3 años, o sea evaluar $C'(3)$."
        },
        {
          "id": "tf2-18-5",
          "q": "El Ejercicio 5 pide hallar $k$ para que la recta tangente al gráfico tenga pendiente $-\\dfrac{1}{8}$.",
          "a": false,
          "explain": "Falso. Lo que tiene que tener pendiente $-\\dfrac{1}{8}$ es la recta normal en $x_0=2$, no la tangente."
        }
      ],
      "mc": [
        {
          "id": "mc2-18-1",
          "q": "¿Qué técnica conviene para derivar $f(x)=(\\operatorname{sen}x)^{\\ln x}$ del Ejercicio 2?",
          "options": [
            "La derivación logarítmica",
            "La regla del cociente directo",
            "La regla de la potencia simple",
            "La derivada del producto usual"
          ],
          "correctIndex": 0,
          "explain": "Hay variable en la base y en el exponente, así que se aplica logaritmo y se deriva implícitamente. Por eso el Ejercicio 2 se llama del logaritmo implícito."
        },
        {
          "id": "mc2-18-2",
          "q": "¿Qué pide el Ejercicio 6 de la guía?",
          "options": [
            "La concentración de $\\text{CO}_2$ dentro de tres años",
            "El dominio de una función racional con logaritmo",
            "La pendiente de la recta normal en $x_0=0$",
            "Los valores reales de los parámetros $a$ y $b$"
          ],
          "correctIndex": 2,
          "explain": "El Ejercicio 6 pide la pendiente de la recta normal a $f(x)=e^{\\operatorname{sen}x}\\sqrt{e^{4x}+3}$ en el punto de abscisa $x_0=0$."
        },
        {
          "id": "mc2-18-3",
          "q": "¿Cuál de estas funciones figura en el Ejercicio 1 (regla de la cadena)?",
          "options": [
            "$f(x) = (2x+5)^{-5}$",
            "$f(x) = (3x+5)^{-2}$",
            "$f(x) = (5x+2)^{-4}$",
            "$f(x) = (2x-5)^{-3}$"
          ],
          "correctIndex": 0,
          "explain": "La que aparece en el listado es $(2x+5)^{-5}$. Las otras son potencias negativas parecidas pero inventadas."
        },
        {
          "id": "mc2-18-4",
          "q": "En el Ejercicio 3, ¿qué ecuación debe satisfacer $f(t)=\\dfrac{1}{2}+\\dfrac{3}{2}e^{1-t^2}$?",
          "options": [
            "$f''(t) + 2t\\,f(t) = t$",
            "$f'(t) - 2t\\,f(t) = 1$",
            "$f'(t) + 2t\\,f(t) = t$",
            "$f'(t) + t^2\\,f(t) = 0$"
          ],
          "correctIndex": 2,
          "explain": "La ecuación del enunciado es $f'(t)+2t\\,f(t)=t$. Las otras cambian el orden de derivada, el signo o el término independiente."
        },
        {
          "id": "mc2-18-5",
          "q": "¿De qué trata el Ejercicio 7 de esta guía?",
          "options": [
            "La derivada de una compuesta exponencial con regla de la cadena",
            "La rapidez de variación de la concentración de $\\text{CO}_2$",
            "La pendiente de una recta normal en el punto de abscisa cero",
            "Los valores reales de $k$ para que una recta resulte tangente"
          ],
          "correctIndex": 1,
          "explain": "Es el problema aplicado del monóxido: con $C(t)$ dada, hay que hallar con qué rapidez varía la concentración dentro de 3 años."
        }
      ],
      "ms": [
        {
          "id": "ms2-18-1",
          "q": "¿Cuáles de estas funciones aparecen en el Ejercicio 2 (variable en el exponente)?",
          "options": [
            "$f(x) = x^x$",
            "$f(x) = x^{3x+1}$",
            "$f(x) = x^{\\sqrt{x}}$",
            "$f(x) = x^{1/x}$",
            "$f(x) = 7^{3x-12}$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Están en el listado $x^x$, $x^{3x+1}$, $x^{\\sqrt{x}}$ y $7^{3x-12}$. La que no figura es $x^{1/x}$, que metimos como distractor plausible."
        },
        {
          "id": "ms2-18-2",
          "q": "¿Cuáles de estas afirmaciones sobre la guía son correctas según el texto?",
          "options": [
            "El Ejercicio 4 verifica una ecuación con $f''$",
            "El Ejercicio 5 busca valores de $k$",
            "El Ejercicio 3 usa la función $f(t)$",
            "El Ejercicio 6 calcula una integral",
            "El Ejercicio 7 modela población con CO$_2$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Cuatro son fieles al texto. La falsa es la del Ejercicio 6: ese pide la pendiente de la recta normal, no calcular una integral."
        },
        {
          "id": "ms2-18-3",
          "q": "¿Cuáles de estas funciones del Ejercicio 1 son cocientes tal como están escritas?",
          "options": [
            "$f(x) = \\dfrac{\\cos^4 x}{5x^3+2}$",
            "$f(x) = \\dfrac{e^x - e^{-x}}{e^x + e^{-2x}}$",
            "$f(x) = (3+5x)^8$",
            "$f(x) = e^{4-3x}$",
            "$f(x) = \\arccos(x^3)$"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "Solo las dos primeras son cocientes. Las otras son una potencia, una exponencial y una composición con arcocoseno."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-18-1",
        "front": "¿Para qué sirve la regla de la cadena?",
        "back": "Para derivar funciones compuestas, donde hay una función adentro de otra: se deriva la exterior por la derivada de la interior."
      },
      {
        "id": "fc2-18-2",
        "front": "¿Cómo se deriva $f(x)=x^x$?",
        "back": "Con derivación logarítmica (logaritmo implícito): se toma $\\ln$ en ambos lados y se deriva, porque la variable está en la base y en el exponente."
      },
      {
        "id": "fc2-18-3",
        "front": "¿Qué pide el Ejercicio 5?",
        "back": "Encontrar los $k$ reales para que la recta normal a $f(x)=\\ln(8-x^2)+3kx-2$ en $x_0=2$ tenga pendiente $-\\dfrac{1}{8}$."
      },
      {
        "id": "fc2-18-4",
        "front": "¿Qué pide el Ejercicio 6?",
        "back": "Hallar la pendiente de la recta normal a $f(x)=e^{\\operatorname{sen}x}\\sqrt{e^{4x}+3}$ en el punto de abscisa $x_0=0$."
      },
      {
        "id": "fc2-18-5",
        "front": "¿Qué verifica el Ejercicio 4?",
        "back": "Que $f(x)=e^{2x}\\operatorname{sen}(5x)$ satisface la ecuación diferencial $f''(x)-4f'(x)+29f(x)=0$."
      },
      {
        "id": "fc2-18-6",
        "front": "¿Qué modela el Ejercicio 7?",
        "back": "El nivel medio diario de $\\text{CO}_2$ en ppm según $C(t)$, y pide la rapidez de variación de la concentración dentro de 3 años."
      },
      {
        "id": "fc2-18-7",
        "front": "¿Cómo identificás exterior e interior en una compuesta?",
        "back": "La exterior es la operación que se aplica al final (la potencia, el seno, el log); la interior es lo que queda adentro de esa operación."
      },
      {
        "id": "fc2-18-8",
        "front": "¿Qué ecuación verifica $f(t)=\\dfrac{1}{2}+\\dfrac{3}{2}e^{1-t^2}$ en el Ejercicio 3?",
        "back": "La ecuación $f'(t)+2t\\,f(t)=t$."
      }
    ]
  },
  "19": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-19-1",
          "q": "La recta normal a una curva en un punto tiene pendiente $-\\dfrac{1}{f'(x_0)}$.",
          "a": true,
          "explain": "Sí, la normal es perpendicular a la tangente, así que su pendiente es el opuesto del inverso de $f'(x_0)$."
        },
        {
          "id": "tf2-19-2",
          "q": "La ecuación $y - y_0 = f'(x_0)(x - x_0)$ corresponde a la recta tangente en $(x_0, y_0)$.",
          "a": true,
          "explain": "Esa es la fórmula punto-pendiente con la pendiente igual a la derivada en el punto: la recta tangente."
        },
        {
          "id": "tf2-19-3",
          "q": "Una recta tangente horizontal aparece donde la derivada de la función vale uno.",
          "a": false,
          "explain": "Falso. La tangente es horizontal donde la pendiente es cero, o sea donde $f'(x)=0$, no donde vale uno."
        },
        {
          "id": "tf2-19-4",
          "q": "El Ejercicio 4 da que la tangente a $g(x)$ en $(5;2)$ pasa por $(9;0)$ y pide hallar $g(5)$ y $g'(5)$.",
          "a": true,
          "explain": "Tal cual el enunciado: con esos dos puntos sacás la pendiente (que es $g'(5)$) y el valor $g(5)=2$."
        },
        {
          "id": "tf2-19-5",
          "q": "El Ejercicio 8 pide la ecuación de una recta que pasa por $(0,1)$ y es tangente a una parábola.",
          "a": false,
          "explain": "Falso. Al revés: pide la ecuación de la parábola $f(x)=ax^2+bx+c$ que pasa por $(0,1)$ y es tangente a la recta $y=x-1$ en $(1;0)$."
        }
      ],
      "mc": [
        {
          "id": "mc2-19-1",
          "q": "¿Cuál es la pendiente de la recta normal si la tangente tiene pendiente $f'(x_0)$?",
          "options": [
            "$f'(x_0)$ multiplicado por dos",
            "$-\\dfrac{1}{f'(x_0)}$",
            "$\\dfrac{1}{f'(x_0)}$ con signo más",
            "$f'(x_0)$ sin cambios"
          ],
          "correctIndex": 1,
          "explain": "La normal es perpendicular, así que su pendiente es el opuesto del recíproco: $-\\dfrac{1}{f'(x_0)}$."
        },
        {
          "id": "mc2-19-2",
          "q": "¿Qué busca el Ejercicio 5 de esta guía?",
          "options": [
            "La recta normal a varias gráficas",
            "Una tangente paralela a una recta dada",
            "Los puntos con tangente horizontal",
            "El valor de $k$ para una parábola"
          ],
          "correctIndex": 2,
          "explain": "El Ejercicio 5 pide determinar los puntos, si los hay, donde la función tiene recta tangente horizontal, o sea donde $f'(x)=0$."
        },
        {
          "id": "mc2-19-3",
          "q": "En el Ejercicio 3, ¿qué condición debe cumplir la recta tangente buscada?",
          "options": [
            "Ser paralela a la recta $r$ dada",
            "Pasar por el origen de coordenadas",
            "Ser perpendicular o normal a la curva",
            "Tener pendiente exactamente igual a cero"
          ],
          "correctIndex": 0,
          "explain": "Pide la tangente a $f(x)=\\dfrac{1}{\\sqrt{x}}$ que sea paralela a $r: x+2y-6=0$, así que comparten pendiente."
        },
        {
          "id": "mc2-19-4",
          "q": "¿En cuál de estos puntos se pide la tangente a $f(x)=x^2+1$ en el Ejercicio 1?",
          "options": [
            "En el punto $(0,1)$",
            "En el punto $(1,0)$",
            "En el punto $(-1,1)$",
            "En el punto $(2,5)$"
          ],
          "correctIndex": 3,
          "explain": "El enunciado da $f(x)=x^2+1$ en $(2,5)$. Los otros puntos corresponden a otras funciones del listado."
        },
        {
          "id": "mc2-19-5",
          "q": "¿Qué pide el Ejercicio 6 de la guía?",
          "options": [
            "Hallar $k$ para una tangente dada",
            "Hallar la recta normal a $g(x)$",
            "Hallar el dominio de una racional",
            "Hallar una parábola por dos puntos"
          ],
          "correctIndex": 0,
          "explain": "Pide encontrar $k$ para que la recta $y=-4x-9$ sea tangente a $f(x)=x^2+kx$ en el punto $(-3,3)$."
        }
      ],
      "ms": [
        {
          "id": "ms2-19-1",
          "q": "¿En cuáles de estas funciones del Ejercicio 1 el punto indicado es el correcto según el enunciado?",
          "options": [
            "$f(x)=x^2+1$ en $(2,5)$",
            "$f(x)=(2x+1)^2$ en $(0;1)$",
            "$f(x)=x^4-3x^2+2$ en $(1;0)$",
            "$f(x)=\\dfrac{x}{x-1}$ en $(3,2)$",
            "$f(x)=(2x^3+1)^2$ en $(-1,1)$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Cuatro coinciden con el texto. La errada es $\\dfrac{x}{x-1}$: en la guía el punto es $(2,2)$, no $(3,2)$."
        },
        {
          "id": "ms2-19-2",
          "q": "¿Cuáles de estas afirmaciones sobre tangente y normal son correctas?",
          "options": [
            "La normal es perpendicular a la tangente",
            "La tangente comparte pendiente con $f'(x_0)$",
            "La fórmula punto-pendiente es $y-y_0=f'(x_0)(x-x_0)$",
            "La normal tiene pendiente $f'(x_0)$",
            "La tangente horizontal ocurre donde $f'(x)=0$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "La única falsa es que la normal tenga pendiente $f'(x_0)$: esa es la tangente; la normal tiene $-\\dfrac{1}{f'(x_0)}$."
        },
        {
          "id": "ms2-19-3",
          "q": "¿Cuáles de estos ejercicios de la guía piden hallar un parámetro ($k$, $a$, $b$ o $c$)?",
          "options": [
            "El Ejercicio 6, con la recta $y=-4x-9$",
            "El Ejercicio 7, con $f(x)=\\dfrac{k}{x}$",
            "El Ejercicio 8, con la parábola $ax^2+bx+c$",
            "El Ejercicio 2, con la recta normal",
            "El Ejercicio 5, con tangente horizontal"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Los Ejercicios 6, 7 y 8 buscan parámetros. El 2 pide rectas normales y el 5 puntos con tangente horizontal, sin parámetros."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-19-1",
        "front": "¿Qué pendiente tiene la recta tangente en $x_0$?",
        "back": "La pendiente es $f'(x_0)$: la recta tangente toca la curva y comparte su pendiente en ese punto."
      },
      {
        "id": "fc2-19-2",
        "front": "¿Qué pendiente tiene la recta normal en $x_0$?",
        "back": "La normal es perpendicular a la tangente, así que su pendiente es $-\\dfrac{1}{f'(x_0)}$."
      },
      {
        "id": "fc2-19-3",
        "front": "Fórmula de la recta tangente (punto-pendiente)",
        "back": "$y - y_0 = f'(x_0)(x - x_0)$, donde $(x_0,y_0)$ es el punto de contacto y $f'(x_0)$ la pendiente."
      },
      {
        "id": "fc2-19-4",
        "front": "¿Cómo se hallan puntos con tangente horizontal?",
        "back": "Resolviendo $f'(x)=0$: donde la derivada se anula, la pendiente es cero y la tangente es horizontal."
      },
      {
        "id": "fc2-19-5",
        "front": "¿Qué pide el Ejercicio 3?",
        "back": "La ecuación de la recta tangente a $f(x)=\\dfrac{1}{\\sqrt{x}}$ que sea paralela a la recta $r: x+2y-6=0$."
      },
      {
        "id": "fc2-19-6",
        "front": "¿Qué datos da el Ejercicio 4 sobre $g(x)$?",
        "back": "Que la tangente a $g(x)$ en $(5;2)$ pasa por $(9;0)$, y pide hallar $g(5)$ y $g'(5)$."
      },
      {
        "id": "fc2-19-7",
        "front": "¿Qué busca el Ejercicio 8?",
        "back": "La parábola $f(x)=ax^2+bx+c$ que pasa por $(0,1)$ y es tangente a la recta $y=x-1$ en el punto $(1;0)$."
      },
      {
        "id": "fc2-19-8",
        "front": "¿Dos rectas paralelas qué comparten?",
        "back": "Comparten la pendiente: por eso una tangente paralela a una recta dada debe tener la misma pendiente que esa recta."
      }
    ]
  },
  "20": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-20-1",
          "q": "La regla de L'Hôpital se aplica ante indeterminaciones del tipo $\\dfrac{0}{0}$ o $\\dfrac{\\infty}{\\infty}$.",
          "a": true,
          "explain": "Justo eso: cuando hay esa indeterminación, derivás numerador y denominador por separado y volvés a intentar el límite."
        },
        {
          "id": "tf2-20-2",
          "q": "Para aplicar L'Hôpital se deriva el cociente completo usando la regla del cociente.",
          "a": false,
          "explain": "Falso. No se deriva el cociente como tal: se derivan por separado el numerador y el denominador, y se rehace el límite del nuevo cociente."
        },
        {
          "id": "tf2-20-3",
          "q": "Antes de aplicar L'Hôpital conviene verificar que efectivamente haya una indeterminación.",
          "a": true,
          "explain": "Sí, el propio criollo lo recalca: siempre chequeá que haya indeterminación antes de aplicar la regla, sino te mandás cualquiera."
        },
        {
          "id": "tf2-20-4",
          "q": "El Ejercicio 2 pide resolver un límite nuevo aplicando L'Hôpital paso a paso.",
          "a": false,
          "explain": "Falso. El Ejercicio 2 pide encontrar el error en un desarrollo ya hecho, no resolver un límite desde cero."
        },
        {
          "id": "tf2-20-5",
          "q": "El Ejercicio 6 pide hallar dominio y asíntotas de $f(x)=\\dfrac{4-x}{\\ln(x-4)}$.",
          "a": true,
          "explain": "Tal cual: primero el dominio y después las asíntotas de esa función racional con logaritmo en el denominador."
        }
      ],
      "mc": [
        {
          "id": "mc2-20-1",
          "q": "¿Qué se hace al aplicar la regla de L'Hôpital a un límite indeterminado?",
          "options": [
            "Se factoriza y se simplifica el cociente original completo",
            "Se derivan numerador y denominador por separado",
            "Se multiplica y divide por el conjugado correspondiente",
            "Se reemplaza directamente el valor del límite buscado"
          ],
          "correctIndex": 1,
          "explain": "La esencia de la regla: derivás arriba y abajo por separado y volvés a calcular el límite del nuevo cociente."
        },
        {
          "id": "mc2-20-2",
          "q": "¿Qué pide el Ejercicio 3 de la guía?",
          "options": [
            "Calcular el valor del parámetro $n$ del límite dado",
            "Hallar $a$ y $b$ reales para que el límite sea 0",
            "Encontrar el error en un desarrollo ya resuelto",
            "Hallar el dominio y las asíntotas de la función $f$"
          ],
          "correctIndex": 1,
          "explain": "El Ejercicio 3 pide los valores reales de $a$ y $b$ para que el límite del cociente con $\\operatorname{sen}(3x)+ax+bx^3$ sobre $x^3$ sea cero."
        },
        {
          "id": "mc2-20-3",
          "q": "¿Cuál es el resultado del límite $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\operatorname{sen}x}{x}$ del Ejercicio 1?",
          "options": [
            "Vale $1$",
            "Vale $0$",
            "No existe",
            "Tiende a $\\infty$"
          ],
          "correctIndex": 0,
          "explain": "Es el límite notable por excelencia: $\\dfrac{\\operatorname{sen}x}{x}\\to 1$ cuando $x\\to 0$, y L'Hôpital lo confirma derivando arriba y abajo."
        },
        {
          "id": "mc2-20-4",
          "q": "En el Ejercicio 5, ¿qué datos de $f$ se usan para justificar el límite?",
          "options": [
            "Que $f(0)=1$ y $f'(0)=0$",
            "Que $f$ es continua pero no derivable",
            "Que $f(-1)=3$ y $f'(-1)=2$",
            "Que $f$ tiene una asíntota vertical"
          ],
          "correctIndex": 2,
          "explain": "El enunciado dice que $f$ es derivable con $f(-1)=3$ y $f'(-1)=2$, y con eso justificás qué indeterminación tenés en $x\\to -1$."
        },
        {
          "id": "mc2-20-5",
          "q": "¿Qué pide el Ejercicio 4 de la guía?",
          "options": [
            "Calcular $n$ sabiendo que el límite vale 9",
            "Hallar $a$ y $b$ reales para anular el límite",
            "Resolver un límite aplicando la regla de L'Hôpital",
            "Encontrar el error cometido en el desarrollo previo"
          ],
          "correctIndex": 0,
          "explain": "El Ejercicio 4 da que cierto límite de la forma exponencial vale $9$ y pide calcular el valor de $n$."
        }
      ],
      "ms": [
        {
          "id": "ms2-20-1",
          "q": "¿Cuáles de estas indeterminaciones o casos justifican o aparecen en esta guía de L'Hôpital?",
          "options": [
            "La indeterminación $\\dfrac{0}{0}$",
            "La indeterminación $\\dfrac{\\infty}{\\infty}$",
            "Una resta de fracciones tipo $\\dfrac{x}{x-1}-\\dfrac{1}{\\ln x}$",
            "Una forma exponencial como $\\left(\\dfrac{1}{x}\\right)^{\\operatorname{tg}x}$",
            "Un límite de una sucesión recursiva"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras están en la guía: las dos indeterminaciones base más casos de resta y exponenciales del Ejercicio 1. Las sucesiones recursivas no aparecen."
        },
        {
          "id": "ms2-20-2",
          "q": "¿Cuáles de estos límites figuran en el listado del Ejercicio 1?",
          "options": [
            "$\\displaystyle\\lim_{x\\to 0}\\dfrac{2^x-3^x}{x}$",
            "$\\displaystyle\\lim_{x\\to 3}\\dfrac{x-3}{\\operatorname{sen}(x-3)}$",
            "$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\ln(1+x)-x}{x^2}$",
            "$\\displaystyle\\lim_{x\\to 2}\\dfrac{x^2-4}{x-2}$",
            "$\\displaystyle\\lim_{x\\to +\\infty}\\left(\\dfrac{x^2+1}{x^2}\\right)^x$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Cuatro están en el listado. El que no figura es $\\dfrac{x^2-4}{x-2}$, que metimos como distractor con pinta de límite típico."
        },
        {
          "id": "ms2-20-3",
          "q": "¿Cuáles de estos ejercicios de la guía piden hallar o calcular un valor numérico o paramétrico?",
          "options": [
            "El Ejercicio 3, los reales $a$ y $b$",
            "El Ejercicio 4, el valor de $n$",
            "El Ejercicio 2, encontrar el error",
            "El Ejercicio 6, dominio y asíntotas",
            "El Ejercicio 1, resolver los límites"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "Solo el 3 (busca $a$ y $b$) y el 4 (busca $n$) piden un valor paramétrico. El 2 busca un error, el 6 dominio y asíntotas, y el 1 resuelve límites."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-20-1",
        "front": "¿Cuándo se aplica la regla de L'Hôpital?",
        "back": "Ante indeterminaciones del tipo $\\dfrac{0}{0}$ o $\\dfrac{\\infty}{\\infty}$: se derivan numerador y denominador por separado y se reintenta el límite."
      },
      {
        "id": "fc2-20-2",
        "front": "¿Qué hay que chequear antes de aplicar L'Hôpital?",
        "back": "Que efectivamente exista una indeterminación. Si no la hay, la regla no aplica y te puede dar un resultado equivocado."
      },
      {
        "id": "fc2-20-3",
        "front": "Valor de $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\operatorname{sen}x}{x}$",
        "back": "Vale $1$. Es el límite notable clásico, y L'Hôpital lo confirma derivando arriba y abajo."
      },
      {
        "id": "fc2-20-4",
        "front": "¿Qué pide el Ejercicio 2?",
        "back": "Encontrar el error en el cálculo de un límite donde se aplicó L'Hôpital de forma incorrecta."
      },
      {
        "id": "fc2-20-5",
        "front": "¿Qué pide el Ejercicio 3?",
        "back": "Hallar los reales $a$ y $b$ tales que $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\operatorname{sen}(3x)+ax+bx^3}{x^3}=0$."
      },
      {
        "id": "fc2-20-6",
        "front": "¿Qué pide el Ejercicio 4?",
        "back": "Calcular $n$ sabiendo que $\\displaystyle\\lim_{x\\to +\\infty}\\left(\\dfrac{nx+1}{nx-1}\\right)^x=9$."
      },
      {
        "id": "fc2-20-7",
        "front": "¿Qué datos da el Ejercicio 5 sobre $f$?",
        "back": "Que $f$ es derivable, con $f(-1)=3$ y $f'(-1)=2$, para justificar el tipo de indeterminación del límite en $x\\to -1$."
      },
      {
        "id": "fc2-20-8",
        "front": "¿Qué pide el Ejercicio 6?",
        "back": "Hallar dominio y asíntotas de $f(x)=\\dfrac{4-x}{\\ln(x-4)}$: primero el dominio y después las asíntotas."
      }
    ]
  },
  "21": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-21-1",
          "q": "En $\\lim_{x \\to +\\infty} \\left( \\dfrac{3 + 2x}{3x + 1} \\right)^{4x}$ la base tiende a $\\frac{2}{3}$, de modo que el caso es una indeterminación $1^{\\infty}$ que se salva con el número $e$.",
          "a": false,
          "explain": "Es una trampa clásica: como la base tiende a $\\frac{2}{3}$ y no a 1, NO hay indeterminación $1^{\\infty}$. Queda $\\left(\\tfrac{2}{3}\\right)^{\\infty}$, que da 0. La técnica del número $e$ se reserva para cuando la base tiende a 1."
        },
        {
          "id": "tf2-21-2",
          "q": "En $\\lim_{x \\to +\\infty} \\dfrac{\\sqrt{4x^2 - x + 1} - 2x}{1 - x^2}$ el numerador presenta una indeterminación del tipo $\\infty - \\infty$ que se salva racionalizando.",
          "a": true,
          "explain": "Tal cual: $\\sqrt{4x^2 - x + 1}$ crece como $2x$, así que la resta es $\\infty - \\infty$. Multiplicás por el conjugado y el numerador queda $-x+1$. El límite final da 0."
        },
        {
          "id": "tf2-21-3",
          "q": "En $\\lim_{x \\to 1} \\operatorname{sen}(x-1)\\,\\ln(x-1)$ hay una indeterminación $0 \\cdot \\infty$ y el límite vale $0$.",
          "a": true,
          "explain": "Cerca de 1, $\\operatorname{sen}(x-1)\\to 0$ y $\\ln(x-1)\\to -\\infty$: indeterminación $0\\cdot\\infty$. Usando $\\operatorname{sen}(x-1)\\sim(x-1)$ queda $t\\ln t\\to 0$. El límite es 0."
        },
        {
          "id": "tf2-21-4",
          "q": "Si al reemplazar el valor al que tiende $x$ obtenés un número concreto, ese número es el límite y no hay indeterminación.",
          "a": true,
          "explain": "Es el primer paso del librito mental: reemplazás, y si te da un número, listo, ese es el límite. La indeterminación aparece solo con las formas raras como $\\frac{0}{0}$ o $\\infty-\\infty$."
        },
        {
          "id": "tf2-21-5",
          "q": "Que $\\lim_{x \\to 2} \\dfrac{4}{f(x) - 4} = \\infty$ indica que el denominador $f(x) - 4$ tiende a un número grande.",
          "a": false,
          "explain": "Al revés: para que un cociente con constante arriba se vaya a infinito, el de abajo tiene que irse a CERO. O sea $f(x)-4\\to 0$, así que $f(x)\\to 4$. Esa lectura inversa es la clave del ejercicio."
        }
      ],
      "mc": [
        {
          "id": "mc2-21-1",
          "q": "¿Qué técnica se usa para salvar la indeterminación $\\infty - \\infty$ del numerador en el ejemplo a?",
          "options": [
            "Sacar factor común del término de mayor grado en numerador y denominador",
            "Racionalizar usando el conjugado de la resta con raíz",
            "Aplicar la regla de L'Hôpital derivando arriba y abajo varias veces",
            "Reescribir la base como una potencia del número $e$ con el exponente"
          ],
          "correctIndex": 1,
          "explain": "Cuando hay una resta con raíz, el conjugado es tu amigo: multiplicás y dividís por $\\sqrt{4x^2-x+1}+2x$ y el numerador queda $-x+1$. Eso es racionalizar."
        },
        {
          "id": "mc2-21-2",
          "q": "En el ejemplo b, ¿a cuánto tiende la base $\\dfrac{3+2x}{3x+1}$ cuando $x \\to +\\infty$?",
          "options": [
            "A $\\dfrac{2}{3}$, mandando los de mayor grado",
            "A $1$, apareciendo la indeterminación clásica del caso",
            "A $+\\infty$, porque el numerador domina ampliamente al crecer",
            "A $3$, según el cociente de los términos constantes sueltos"
          ],
          "correctIndex": 0,
          "explain": "Mandan los de mayor grado: $\\frac{2x}{3x}=\\frac23$. Como es menor que 1 y el exponente se va a $+\\infty$, el límite total da 0."
        },
        {
          "id": "mc2-21-3",
          "q": "En el ejemplo c, ¿qué equivalente se usa para salvar la indeterminación $0 \\cdot \\infty$?",
          "options": [
            "Que $\\ln(x-1)$ se comporta como su argumento $(x-1)$ cerca de $1$",
            "Que $\\operatorname{sen}(x-1)$ se comporta como $(x-1)$",
            "Que el producto $(x-1)\\ln(x-1)$ se comporta como $(x-1)^2$",
            "Que el producto entero crece como $\\ln(x-1)$ al acercarse a $1$"
          ],
          "correctIndex": 1,
          "explain": "El seno es equivalente a su argumento cerca de 0: $\\operatorname{sen}(x-1)\\sim(x-1)$. Así el producto se parece a $(x-1)\\ln(x-1)$, que tiende a 0."
        },
        {
          "id": "mc2-21-4",
          "q": "En el ejemplo de función continua, si $f(2) = 4$, ¿cuánto vale $\\lim_{x \\to 2} \\dfrac{4}{f^{2}(x) - 4}$?",
          "options": [
            "$\\dfrac{1}{4}$, ya que el denominador tiende a $16$",
            "$\\infty$, porque el denominador se vuelve a anular ahí",
            "$\\dfrac{1}{3}$, el denominador tiende a $12$",
            "$0$, dado que el numerador se mantiene siempre constante"
          ],
          "correctIndex": 2,
          "explain": "Si $f(x)\\to 4$, entonces $f^2(x)\\to 16$ y el denominador $f^2(x)-4\\to 12$. Queda $\\frac{4}{12}=\\frac13$."
        },
        {
          "id": "mc2-21-5",
          "q": "Según el librito mental, ¿qué hay que hacer después de identificar el tipo de indeterminación?",
          "options": [
            "Nombrar la técnica con la que se salva",
            "Concluir que el límite no existe por quedar indeterminado",
            "Reemplazar de nuevo el valor para confirmar el número obtenido",
            "Cambiar los datos del enunciado por otros valores más simples"
          ],
          "correctIndex": 0,
          "explain": "El paso final es nombrar el tipo y cómo lo salvás: racionalizar, factor común, número $e$, L'Hôpital, equivalentes, etc. En el oral eso es lo que te piden."
        }
      ],
      "ms": [
        {
          "id": "ms2-21-1",
          "q": "¿Cuáles de las siguientes son formas indeterminadas mencionadas en el librito mental?",
          "options": [
            "$\\dfrac{0}{0}$ como cociente de dos cantidades que se anulan a la vez",
            "$\\dfrac{5}{2}$ como cociente de dos números concretos, conocidos y finitos",
            "$\\infty - \\infty$ como resta de cantidades infinitas",
            "$1^{\\infty}$ como base que tiende a uno elevada al infinito",
            "$0 \\cdot \\infty$ como producto de cero por infinito"
          ],
          "correctIndexes": [
            0,
            2,
            3,
            4
          ],
          "explain": "El texto lista $\\frac00$, $\\frac{\\infty}{\\infty}$, $\\infty-\\infty$, $0\\cdot\\infty$ y $1^\\infty$ como formas raras. $\\frac52$ es un número común y corriente, no indetermina nada."
        },
        {
          "id": "ms2-21-2",
          "q": "Sobre el ejemplo b, ¿cuáles afirmaciones son correctas?",
          "options": [
            "La base tiende a $\\frac{2}{3}$ al ir $x$ a $+\\infty$",
            "El límite final del ejemplo b vale $0$",
            "Hay indeterminación $1^{\\infty}$ que pide el número $e$",
            "El exponente $4x$ tiende a $+\\infty$ con $x$",
            "Conviene aplicar L'Hôpital directo sobre la potencia"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "La base va a $\\frac23$ (menor que 1), el exponente a $+\\infty$ y el resultado es 0. NO es $1^\\infty$ ni se usa $e$. Y no se aplica L'Hôpital acá: con mirar base y exponente alcanza."
        },
        {
          "id": "ms2-21-3",
          "q": "¿Cuáles de estos límites del lote dan un resultado distinto de $0$?",
          "options": [
            "El límite del ejemplo a con la raíz racionalizada",
            "El límite del ejemplo b con la base elevada a $4x$",
            "El límite del ejemplo c con el seno por el logaritmo",
            "El primer dato del ejemplo continuo, igual a infinito",
            "El producto $t\\ln t$ cuando $t$ tiende a cero por derecha"
          ],
          "correctIndexes": [
            3
          ],
          "explain": "Los ejemplos a, b y c dan todos 0, igual que $t\\ln t\\to 0$. El único distinto de 0 es el DATO del ejemplo continuo, que vale infinito (de ahí deducís $f(2)=4$)."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-21-1",
        "front": "¿Cuándo NO hay indeterminación al reemplazar?",
        "back": "Cuando al reemplazar el valor al que tiende $x$ te queda un número concreto: ese número es directamente el límite."
      },
      {
        "id": "fc2-21-2",
        "front": "Técnica para $\\infty - \\infty$ con raíz",
        "back": "Racionalizar: multiplicar y dividir por el conjugado de la resta. En el ejemplo a el numerador queda $-x+1$ y el límite da 0."
      },
      {
        "id": "fc2-21-3",
        "front": "¿Cuándo es realmente $1^{\\infty}$?",
        "back": "Solo cuando la base tiende a 1. Si tiende a otro número (como $\\frac23$), no hay indeterminación y no se usa el número $e$."
      },
      {
        "id": "fc2-21-4",
        "front": "Equivalente del seno cerca de 0",
        "back": "$\\operatorname{sen}(x-1)\\sim(x-1)$ cerca de $x=1$. Sirve para salvar el $0\\cdot\\infty$ del ejemplo c, que da 0."
      },
      {
        "id": "fc2-21-5",
        "front": "Indeterminación $0\\cdot\\infty$: ¿cómo se salva?",
        "back": "Con un equivalente (seno por su argumento) o reescribiendo como cociente para aplicar L'Hôpital. En el ejemplo c el límite es 0."
      },
      {
        "id": "fc2-21-6",
        "front": "Lectura de $\\dfrac{cte}{algo}\\to\\infty$",
        "back": "Si un cociente con constante arriba se va a infinito, es porque el de abajo se va a 0. Así deducís $f(x)\\to 4$ y $f(2)=4$."
      },
      {
        "id": "fc2-21-7",
        "front": "$\\lim_{x\\to 2}\\dfrac{4}{f^2(x)-4}$ con $f(2)=4$",
        "back": "$f^2(x)\\to 16$, el denominador $\\to 12$, y el límite vale $\\frac{4}{12}=\\frac13$."
      },
      {
        "id": "fc2-21-8",
        "front": "Dominio del $\\ln$ en el ejemplo c",
        "back": "El logaritmo obliga a $x>1$, por eso el límite se analiza con $x\\to 1^+$."
      }
    ]
  },
  "22": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-22-1",
          "q": "Una de las tres condiciones de continuidad en $x=a$ es que existan los dos límites laterales y que coincidan entre sí.",
          "a": true,
          "explain": "Es la condición 2: que exista $\\lim_{x\\to a}f(x)$, lo que significa que los límites por izquierda y por derecha existan y sean iguales. Más existir $f(a)$ y que ambos coincidan."
        },
        {
          "id": "tf2-22-2",
          "q": "La función partida del ejemplo es continua en $x=-3$ tal como está definida.",
          "a": false,
          "explain": "No lo es: $f(-3)=2$ pero $\\lim_{x\\to -3^+}\\frac{3}{x-1}=-\\frac34\\neq 2$. Hay un salto. La pregunta apunta a qué valor haría falta para que fuera continua."
        },
        {
          "id": "tf2-22-3",
          "q": "En la función del ejemplo, el tramo $2^{-x}$ genera una asíntota horizontal $y=0$ cuando $x \\to +\\infty$.",
          "a": true,
          "explain": "Sí: $2^{-x}=\\frac{1}{2^x}\\to 0$ cuando $x$ crece. Por eso hacia $+\\infty$ la asíntota horizontal es $y=0$."
        },
        {
          "id": "tf2-22-4",
          "q": "Una misma función nunca puede tener dos asíntotas horizontales distintas en cada extremo.",
          "a": false,
          "explain": "Sí puede: en el ejemplo hay $y=2$ hacia $-\\infty$ y $y=0$ hacia $+\\infty$. Una AH distinta en cada extremo es perfectamente posible."
        },
        {
          "id": "tf2-22-5",
          "q": "En una discontinuidad evitable el límite existe (es finito) aunque no coincida con $f(a)$ o falte $f(a)$.",
          "a": true,
          "explain": "Exacto: en la evitable el límite existe y se \"arregla\" redefiniendo el punto. En la esencial el límite directamente no existe (salto o infinito) y no hay arreglo."
        }
      ],
      "mc": [
        {
          "id": "mc2-22-1",
          "q": "¿Cuánto debería valer $\\lim_{x \\to -3^{+}} f(x)$ para que la función sea continua en $x=-3$?",
          "options": [
            "$-\\dfrac{3}{4}$, que es el valor real del tramo racional",
            "$2$, para coincidir con el valor de la función ahí",
            "$0$, igual que la asíntota del tramo exponencial",
            "$-\\infty$, según el comportamiento del tramo medio"
          ],
          "correctIndex": 1,
          "explain": "$f(-3)=2$ y el límite por izquierda también es 2. Para no tener salto, el límite por derecha debe valer 2. Con la fórmula real da $-\\frac34$, por eso NO es continua."
        },
        {
          "id": "mc2-22-2",
          "q": "¿Dónde tiene asíntota vertical la función del ejemplo?",
          "options": [
            "En $x=-3$, donde se juntan dos tramos distintos",
            "En $x=1$, donde el tramo racional se indefine",
            "En $x=0$, donde la exponencial cambia de signo",
            "En $x=2$, donde la función constante deja de valer"
          ],
          "correctIndex": 1,
          "explain": "El tramo $\\frac{3}{x-1}$ se indefine en $x=1$, y por izquierda $\\frac{3}{0^-}=-\\infty$. Ahí está la asíntota vertical."
        },
        {
          "id": "mc2-22-3",
          "q": "Cuando $x \\to -\\infty$, ¿qué asíntota horizontal tiene la función?",
          "options": [
            "$y=0$, porque el tramo exponencial se anula",
            "$y=-\\dfrac{3}{4}$, según el valor del tramo medio",
            "$y=1$, por el cociente de los coeficientes",
            "$y=2$, porque la función vale constantemente $2$"
          ],
          "correctIndex": 3,
          "explain": "Para $x\\le -3$ la función vale 2 fijo, así que hacia $-\\infty$ la asíntota horizontal es $y=2$."
        },
        {
          "id": "mc2-22-4",
          "q": "¿Qué caracteriza a una discontinuidad esencial en $x=a$?",
          "options": [
            "Que el límite finito de $f$ en $a$ no existe",
            "Que existe el límite pero no coincide con $f(a)$",
            "Que falta solo el valor $f(a)$ en ese punto",
            "Que la función está definida pero no es derivable"
          ],
          "correctIndex": 0,
          "explain": "En la esencial $\\lim_{x\\to a}f(x)$ no existe como número finito: o un lateral es infinito, o los laterales existen pero son distintos. La opción del límite que existe describe la evitable."
        },
        {
          "id": "mc2-22-5",
          "q": "Al acercarse a $x=1$ por izquierda, ¿hacia dónde tiende $\\dfrac{3}{x-1}$?",
          "options": [
            "Hacia $-\\infty$, porque el denominador es $0^{-}$",
            "Hacia $+\\infty$, porque el numerador resulta positivo",
            "Hacia $0$, porque el denominador se vuelve cada vez más grande",
            "Hacia $3$, según el valor del numerador fijo"
          ],
          "correctIndex": 0,
          "explain": "Por izquierda $x-1$ es un negativo chiquito ($0^-$), así que $\\frac{3}{0^-}=-\\infty$. De ahí sale la asíntota vertical."
        }
      ],
      "ms": [
        {
          "id": "ms2-22-1",
          "q": "¿Cuáles son las tres condiciones de continuidad de $f$ en $x=a$?",
          "options": [
            "Que exista $f(a)$ como valor de la función",
            "Que exista el límite de $f$ cuando $x\\to a$",
            "Que $f$ sea derivable en el punto $a$ del dominio",
            "Que el límite y $f(a)$ sean iguales",
            "Que la función esté acotada en un entorno de $a$"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Las tres son: existe $f(a)$, existe el límite (laterales que coinciden) y ambos son iguales. La derivabilidad y la acotación no figuran entre las condiciones de continuidad."
        },
        {
          "id": "ms2-22-2",
          "q": "Sobre las asíntotas de la función partida del ejemplo, ¿cuáles afirmaciones son correctas?",
          "options": [
            "Tiene asíntota vertical en $x=1$ por izquierda",
            "Tiene asíntota horizontal $y=2$ hacia $-\\infty$",
            "Tiene asíntota horizontal $y=0$ hacia $+\\infty$",
            "Tiene una asíntota oblicua marcada en el tramo exponencial",
            "Tiene asíntota vertical en $x=-3$ por el salto"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "AV en $x=1$, AH $y=2$ hacia $-\\infty$ y AH $y=0$ hacia $+\\infty$. No hay oblicua, y en $x=-3$ hay un salto pero NO una asíntota vertical."
        },
        {
          "id": "ms2-22-3",
          "q": "¿Cuáles de estas afirmaciones sobre la función del ejemplo son verdaderas?",
          "options": [
            "La función es continua en todo su dominio sin saltos",
            "La discontinuidad en $x=-3$ se debe a un límite infinito",
            "El tramo constante vale $2$ para todo $x\\ge 1$",
            "La asíntota vertical aparece hacia $+\\infty$ del eje",
            "El tramo medio se indefine en $x=-3$ y no en $x=1$"
          ],
          "correctIndexes": [],
          "explain": "Ninguna va: hay salto en $x=-3$ (no es continua), ese salto NO es por límite infinito sino por valores laterales distintos, el tramo constante es para $x\\le -3$, la AV es en $x=1$ (no hacia $+\\infty$) y el tramo medio se indefine en $x=1$."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-22-1",
        "front": "Tres condiciones de continuidad en $x=a$",
        "back": "(1) existe $f(a)$; (2) existe $\\lim_{x\\to a}f(x)$ (laterales que coinciden); (3) $\\lim_{x\\to a}f(x)=f(a)$."
      },
      {
        "id": "fc2-22-2",
        "front": "¿Es continua la función del ejemplo en $x=-3$?",
        "back": "No: $f(-3)=2$ pero $\\lim_{x\\to -3^+}\\frac{3}{x-1}=-\\frac34\\neq 2$. Hay un salto."
      },
      {
        "id": "fc2-22-3",
        "front": "Asíntota vertical de la función del ejemplo",
        "back": "En $x=1$: el tramo $\\frac{3}{x-1}$ se indefine y por izquierda tiende a $-\\infty$."
      },
      {
        "id": "fc2-22-4",
        "front": "Asíntotas horizontales del ejemplo",
        "back": "$y=2$ hacia $-\\infty$ (tramo constante) y $y=0$ hacia $+\\infty$ (porque $2^{-x}\\to 0$)."
      },
      {
        "id": "fc2-22-5",
        "front": "Discontinuidad evitable vs esencial",
        "back": "Evitable: el límite existe (finito) pero no coincide con $f(a)$ o falta $f(a)$; se arregla redefiniendo. Esencial: el límite no existe (salto o infinito)."
      },
      {
        "id": "fc2-22-6",
        "front": "¿Una función puede tener dos AH distintas?",
        "back": "Sí: puede tener una asíntota horizontal distinta en cada extremo, como $y=2$ hacia $-\\infty$ y $y=0$ hacia $+\\infty$."
      },
      {
        "id": "fc2-22-7",
        "front": "$\\lim_{x\\to 1^-}\\frac{3}{x-1}$",
        "back": "Vale $-\\infty$: el denominador es $0^-$ (negativo chiquito) y el numerador positivo, así que $\\frac{3}{0^-}=-\\infty$."
      },
      {
        "id": "fc2-22-8",
        "front": "Comportamiento de $2^{-x}$ hacia $+\\infty$",
        "back": "$2^{-x}=\\frac{1}{2^x}\\to 0$, generando la asíntota horizontal $y=0$."
      }
    ]
  },
  "23": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-23-1",
          "q": "Para derivar $\\sqrt[5]{(3\\cos x - 5)^{3}}$ conviene escribirlo como $(3\\cos x - 5)^{3/5}$ y aplicar la regla de la cadena.",
          "a": true,
          "explain": "Tal cual: pasás la raíz a potencia $\\frac35$ y, como es función compuesta, derivás la potencia y multiplicás por la derivada de lo de adentro ($-3\\operatorname{sen}x$)."
        },
        {
          "id": "tf2-23-2",
          "q": "La derivada del término $-2\\,e^{6x}$ es $-2\\,e^{6x}$, sin factor adicional.",
          "a": false,
          "explain": "Falta la cadena: $\\frac{d}{dx}e^u=e^u\\cdot u'$ con $u=6x$, $u'=6$. Da $-2\\cdot 6\\,e^{6x}=-12\\,e^{6x}$."
        },
        {
          "id": "tf2-23-3",
          "q": "Si la recta tangente a $f$ en $(x_0;y_0)$ tiene pendiente cero, su ecuación es la horizontal $y=y_0$.",
          "a": true,
          "explain": "Pendiente 0 significa $f'(x_0)=0$, que es una recta horizontal: $y=y_0$. La pendiente de la tangente es justamente $f'(x_0)$, su significado geométrico."
        },
        {
          "id": "tf2-23-4",
          "q": "Cuando $f'(x_0)=0$, la recta normal no existe porque su pendiente sería división por cero.",
          "a": false,
          "explain": "Sí existe: si la tangente es horizontal, la normal es vertical, $x=x_0$. La fórmula $-\\frac{1}{f'(x_0)}$ no se puede aplicar, pero la normal vertical sigue estando."
        },
        {
          "id": "tf2-23-5",
          "q": "La constante $+7$ de la función $g(x)$ aporta un término a la derivada $g'(x)$.",
          "a": false,
          "explain": "No: la derivada de una constante es 0. El $+7$ desaparece al derivar."
        }
      ],
      "mc": [
        {
          "id": "mc2-23-1",
          "q": "¿Cuál es la derivada del primer término, $(3\\cos x - 5)^{3/5}$?",
          "options": [
            "$\\dfrac{3}{5}(3\\cos x - 5)^{-2/5}\\cdot 3\\operatorname{sen}x$ exactamente",
            "$\\dfrac{-9\\operatorname{sen} x}{5\\,\\sqrt[5]{(3\\cos x - 5)^{2}}}$",
            "$\\dfrac{3}{5}(3\\cos x - 5)^{2/5}\\cdot(-\\operatorname{sen}x)$ sin más",
            "$\\dfrac{-3\\operatorname{sen} x}{\\sqrt[5]{(3\\cos x - 5)^{3}}}$ directamente"
          ],
          "correctIndex": 1,
          "explain": "Derivás la potencia $\\frac35(3\\cos x-5)^{-2/5}$ y multiplicás por la derivada de adentro $-3\\operatorname{sen}x$. Junto da $\\frac{-9\\operatorname{sen}x}{5\\sqrt[5]{(3\\cos x-5)^2}}$."
        },
        {
          "id": "mc2-23-2",
          "q": "¿Qué regla se aplica para derivar el término $-2\\,e^{6x}$?",
          "options": [
            "La regla de la exponencial compuesta $e^{u}\\cdot u'$",
            "La regla del producto entre el $-2$ y la exponencial",
            "La regla de la potencia bajando el exponente $6x$ entero",
            "La regla del cociente aplicada al denominador implícito"
          ],
          "correctIndex": 0,
          "explain": "Es exponencial compuesta: $\\frac{d}{dx}e^u=e^u\\cdot u'$ con $u=6x$. Por eso aparece el factor 6 y queda $-12\\,e^{6x}$."
        },
        {
          "id": "mc2-23-3",
          "q": "Si la recta tangente en $(x_0;y_0)$ es horizontal, ¿cuál es la ecuación de la recta normal?",
          "options": [
            "$y=y_0$, paralela a la propia recta tangente",
            "$y=-\\dfrac{1}{f'(x_0)}\\,(x-x_0)$, según la fórmula",
            "$x=x_0$, una recta vertical en ese punto",
            "$y=x_0$, intercambiando las coordenadas dadas"
          ],
          "correctIndex": 2,
          "explain": "La normal es perpendicular a la tangente. Si la tangente es horizontal, la normal es vertical: $x=x_0$. La fórmula con $-\\frac{1}{f'(x_0)}$ no aplica porque $f'(x_0)=0$."
        },
        {
          "id": "mc2-23-4",
          "q": "¿Cuál es la expresión completa de $g'(x)$?",
          "options": [
            "$\\dfrac{-9\\operatorname{sen} x}{5\\,\\sqrt[5]{(3\\cos x - 5)^{2}}} - 12\\,e^{6x}$",
            "$\\dfrac{-9\\operatorname{sen} x}{5\\,\\sqrt[5]{(3\\cos x - 5)^{2}}} - 2\\,e^{6x}$ sin el factor",
            "$\\dfrac{3\\operatorname{sen} x}{5\\,\\sqrt[5]{(3\\cos x - 5)^{2}}} - 12\\,e^{6x}$",
            "$\\dfrac{-9\\operatorname{sen} x}{5\\,\\sqrt[5]{(3\\cos x - 5)^{3}}} - 12\\,e^{6x}$"
          ],
          "correctIndex": 0,
          "explain": "Sumando las derivadas de cada término: el primero da $\\frac{-9\\operatorname{sen}x}{5\\sqrt[5]{(3\\cos x-5)^2}}$ y el segundo $-12\\,e^{6x}$. El $+7$ desaparece."
        },
        {
          "id": "mc2-23-5",
          "q": "¿Por qué la pendiente de la tangente en un punto es $f'(x_0)$?",
          "options": [
            "Porque es el promedio de los valores cercanos de la función",
            "Por el significado geométrico de la derivada",
            "Porque toda recta tangente tiene pendiente constante igual a uno",
            "Porque la normal y la tangente comparten siempre la misma pendiente"
          ],
          "correctIndex": 1,
          "explain": "Ese es el significado geométrico de la derivada: $f'(x_0)$ ES la pendiente de la recta tangente en el punto. Si vale 0, la tangente es horizontal."
        }
      ],
      "ms": [
        {
          "id": "ms2-23-1",
          "q": "¿Qué reglas de derivación aparecen al derivar $g(x)$?",
          "options": [
            "La regla de la cadena en la raíz quinta",
            "La regla de la cadena en la exponencial",
            "La regla de la potencia al bajar el exponente",
            "La derivada de $e^{u}$ como $e^{u}\\cdot u'$",
            "La regla del cociente entre los dos términos sumados"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Aparecen cadena (en la raíz y en la exponencial), regla de la potencia y derivada de $e^u$. La del cociente no: los términos están sumados/restados, no divididos."
        },
        {
          "id": "ms2-23-2",
          "q": "Sobre la recta tangente y la normal cuando $f'(x_0)=0$, ¿cuáles afirmaciones son correctas?",
          "options": [
            "La tangente es horizontal con ecuación $y=y_0$",
            "La normal es vertical con ecuación $x=x_0$",
            "La normal directamente no existe en ese punto",
            "La fórmula $-\\frac{1}{f'(x_0)}$ no aplica",
            "La tangente y la normal terminan siendo exactamente la misma recta"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Con $f'(x_0)=0$: tangente horizontal $y=y_0$, normal vertical $x=x_0$, y la fórmula $-\\frac{1}{f'(x_0)}$ no aplica (división por cero). La normal SÍ existe y no es la misma recta."
        },
        {
          "id": "ms2-23-3",
          "q": "¿Cuáles de estas derivadas parciales del cálculo de $g'(x)$ son correctas?",
          "options": [
            "La derivada de adentro $3\\cos x - 5$ es $-3\\operatorname{sen}x$",
            "La derivada de la potencia es $\\frac{3}{5}(3\\cos x-5)^{-2/5}$",
            "La derivada de $-2\\,e^{6x}$ es $-12\\,e^{6x}$",
            "La derivada de la constante $+7$ es $0$",
            "La derivada de adentro $3\\cos x - 5$ daría el valor $3\\operatorname{sen}x$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras van: $\\frac{d}{dx}(3\\cos x-5)=-3\\operatorname{sen}x$, la potencia da $\\frac35(\\cdot)^{-2/5}$, $-2e^{6x}$ deriva a $-12e^{6x}$ y la constante a 0. La última tiene el signo cambiado."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-23-1",
        "front": "Raíz quinta como potencia",
        "back": "$\\sqrt[5]{(3\\cos x - 5)^{3}}=(3\\cos x - 5)^{3/5}$. Se deriva con regla de la cadena: potencia por derivada de adentro."
      },
      {
        "id": "fc2-23-2",
        "front": "Derivada de $e^{u}$",
        "back": "$\\frac{d}{dx}e^u=e^u\\cdot u'$. Para $-2\\,e^{6x}$ da $-2\\cdot 6\\,e^{6x}=-12\\,e^{6x}$."
      },
      {
        "id": "fc2-23-3",
        "front": "$g'(x)$ completa",
        "back": "$g'(x)=\\dfrac{-9\\operatorname{sen} x}{5\\,\\sqrt[5]{(3\\cos x - 5)^{2}}} - 12\\,e^{6x}$. El $+7$ deriva a 0."
      },
      {
        "id": "fc2-23-4",
        "front": "Significado geométrico de $f'(x_0)$",
        "back": "Es la pendiente de la recta tangente a $f$ en el punto $(x_0;y_0)$."
      },
      {
        "id": "fc2-23-5",
        "front": "Recta tangente con pendiente cero",
        "back": "Si $f'(x_0)=0$ la tangente es horizontal: $y=y_0$."
      },
      {
        "id": "fc2-23-6",
        "front": "Recta normal cuando la tangente es horizontal",
        "back": "La normal es perpendicular: vertical, $x=x_0$. La fórmula $-\\frac{1}{f'(x_0)}$ no aplica porque $f'(x_0)=0$."
      },
      {
        "id": "fc2-23-7",
        "front": "Pendiente de la normal (regla general)",
        "back": "$-\\dfrac{1}{f'(x_0)}$: opuesta e inversa de la tangente. No vale cuando $f'(x_0)=0$."
      },
      {
        "id": "fc2-23-8",
        "front": "Derivada de adentro de $(3\\cos x - 5)$",
        "back": "$-3\\operatorname{sen}x$, que multiplica a la derivada de la potencia en la regla de la cadena."
      }
    ]
  }
};
