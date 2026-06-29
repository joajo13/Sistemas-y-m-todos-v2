/**
 * Banco NUEVO (anti-spoiler) — sistemas-digitales-i
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
          "q": "En un sistema posicional, el valor de un símbolo depende solo de su propio valor y no de la posición que ocupa.",
          "a": false,
          "explain": "Al revés: en los posicionales el valor depende tanto del símbolo como de la posición. Por eso el $3$ de $347$ vale $300$ y no $3$."
        },
        {
          "id": "tf2-1-2",
          "q": "La base de un sistema de numeración es la cantidad de símbolos o dígitos que lo conforman.",
          "a": true,
          "explain": "Tal cual la definición del texto: base = cantidad de símbolos. Decimal tiene $10$, binario $2$, octal $8$ y hexa $16$."
        },
        {
          "id": "tf2-1-3",
          "q": "En el sistema hexadecimal los símbolos van del $0$ al $9$ y luego $A, B, C, D, E, F$, sumando $16$ símbolos.",
          "a": true,
          "explain": "Hexa es base $16$: diez dígitos numéricos más seis letras de la $A$ a la $F$. La $A$ vale $10$ y la $F$ vale $15$."
        },
        {
          "id": "tf2-1-4",
          "q": "A la agrupación de $4$ bits se la llama byte, y a la de $8$ bits se la llama nibble.",
          "a": false,
          "explain": "Están cambiados: $4$ bits es un nibble y $8$ bits es un byte. El bit es el dígito binario (binary digit)."
        },
        {
          "id": "tf2-1-5",
          "q": "El número $1010_b$ equivale a $10_d$ según la tabla de equivalencias.",
          "a": true,
          "explain": "Mirá la tabla: el decimal $10$ se escribe $1010$ en binario, $12$ en octal y $A$ en hexa."
        }
      ],
      "mc": [
        {
          "id": "mc2-1-1",
          "q": "En la descomposición $347 = 3 \\times 10^2 + 4 \\times 10^1 + 7 \\times 10^0$, ¿qué representa el exponente de cada potencia?",
          "options": [
            "La posición que ocupa el dígito dentro del número",
            "La base del sistema de numeración usado",
            "El peso total que aporta el dígito mayor",
            "La cantidad de símbolos del sistema decimal"
          ],
          "correctIndex": 0,
          "explain": "En la potencia, la base indica el sistema y el exponente indica la posición. El $7$ está en posición $0$, el $4$ en la $1$ y el $3$ en la $2$."
        },
        {
          "id": "mc2-1-2",
          "q": "¿Cuál es la base de cada sistema en el orden decimal, binario, octal, hexadecimal?",
          "options": [
            "$10$, $2$, $16$, $8$",
            "$10$, $2$, $8$, $16$",
            "$2$, $10$, $8$, $16$",
            "$10$, $8$, $2$, $16$"
          ],
          "correctIndex": 1,
          "explain": "Decimal $10$, binario $2$, octal $8$ y hexadecimal $16$. La base es justo la cantidad de símbolos de cada uno."
        },
        {
          "id": "mc2-1-3",
          "q": "¿Cómo se conoce al dígito del sistema binario y de dónde viene el nombre?",
          "options": [
            "Byte, por agrupar ocho posiciones seguidas",
            "Nibble, por ser media unidad de un byte",
            "Bit, por la contracción de binary digit",
            "Peso, por su posición dentro del número"
          ],
          "correctIndex": 2,
          "explain": "Al dígito binario se lo llama bit, que viene de binary digit. El nibble son $4$ bits y el byte son $8$."
        },
        {
          "id": "mc2-1-4",
          "q": "La combinación de dígitos \"$10$\" en una base cualquiera, pasada a decimal, ¿a qué valor equivale?",
          "options": [
            "Siempre al número diez en cualquier base",
            "Al valor de la base de ese sistema",
            "Al doble del mayor símbolo del sistema",
            "A la mitad de los símbolos de la base"
          ],
          "correctIndex": 1,
          "explain": "\"$10$\" da justo la base: en binario es $2$, en octal es $8$ y en hexa es $16$. Es el detalle lindo que marca el texto."
        },
        {
          "id": "mc2-1-5",
          "q": "Para indicar que un número está expresado en base $16$, ¿qué subíndice se le agrega?",
          "options": [
            "$16$ o la letra $b$ al final",
            "$16$ o la letra $o$ al final",
            "$16$ o la letra $d$ al final",
            "$16$ o la letra $H$ al final"
          ],
          "correctIndex": 3,
          "explain": "Hexadecimal se marca con $16$ o con $H$. El $b$ es binario, el $o$ es octal y el $d$ es decimal."
        }
      ],
      "ms": [
        {
          "id": "ms2-1-1",
          "q": "¿Cuáles de estas afirmaciones sobre los sistemas posicionales y sus bases son correctas según el texto?",
          "options": [
            "El sistema decimal es un sistema de tipo posicional",
            "El peso de un dígito depende de la posición que ocupa",
            "El sistema octal usa los símbolos del $0$ al $7$",
            "El sistema binario emplea únicamente los símbolos $0$ y $1$",
            "La base de un sistema indica el peso del último dígito"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras salen tal cual del texto. La última es falsa: la base es la cantidad de símbolos, no el peso del último dígito."
        },
        {
          "id": "ms2-1-2",
          "q": "Según la tabla de equivalencias entre bases, ¿cuáles de estas correspondencias son correctas?",
          "options": [
            "El decimal $8$ se escribe $1000$ en el sistema binario",
            "El decimal $12$ se escribe $14$ en el sistema octal",
            "El decimal $13$ se escribe $C$ en el sistema hexadecimal",
            "El decimal $7$ se escribe $111$ en el sistema binario",
            "El decimal $16$ se escribe $20$ en el sistema octal"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "La única mal es el $13$: en hexa es $D$, no $C$ (el $C$ corresponde al $12$). Las otras cuatro coinciden con la tabla."
        },
        {
          "id": "ms2-1-3",
          "q": "¿Cuáles de estas afirmaciones sobre nibble, byte y bit son verdaderas según el apartado informativo?",
          "options": [
            "Un nibble se forma con la agrupación de seis bits seguidos",
            "Un byte se forma con la agrupación de diez bits seguidos",
            "El bit es la agrupación de cuatro dígitos binarios",
            "Un nibble equivale exactamente a un byte completo",
            "El byte se forma agrupando dieciséis dígitos binarios"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta: el nibble es $4$ bits, el byte es $8$ bits y el bit es un solo dígito binario. Todas tienen el número cambiado."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-1-1",
        "front": "¿Qué es un sistema de numeración?",
        "back": "Un conjunto de símbolos y reglas que permiten construir todos los números de dicho sistema."
      },
      {
        "id": "fc2-1-2",
        "front": "¿Qué caracteriza a un sistema posicional?",
        "back": "El valor del símbolo depende no solo de su propio valor, sino también de la posición que ocupa dentro del número."
      },
      {
        "id": "fc2-1-3",
        "front": "Base de un sistema de numeración",
        "back": "La cantidad de símbolos o dígitos que conforman ese sistema. Decimal $10$, binario $2$, octal $8$, hexadecimal $16$."
      },
      {
        "id": "fc2-1-4",
        "front": "Peso de un dígito",
        "back": "El valor del dígito en función de su posición. En la potencia, la base indica el sistema y el exponente indica la posición."
      },
      {
        "id": "fc2-1-5",
        "front": "Bit, nibble y byte",
        "back": "El bit es el dígito binario (binary digit). El nibble es la agrupación de $4$ bits y el byte la de $8$ bits."
      },
      {
        "id": "fc2-1-6",
        "front": "Símbolos del sistema hexadecimal",
        "back": "$0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F$. Son $16$ símbolos en total (base $16$)."
      },
      {
        "id": "fc2-1-7",
        "front": "¿Qué representa \"$10$\" en cualquier base al pasarlo a decimal?",
        "back": "El valor de la propia base: $10$ en binario es $2$, en octal es $8$ y en hexadecimal es $16$."
      },
      {
        "id": "fc2-1-8",
        "front": "Subíndices para indicar la base",
        "back": "Decimal $10$ o $d$, binario $2$ o $b$, octal $8$ u $o$, hexadecimal $16$ o $H$."
      }
    ]
  },
  "2": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-2-1",
          "q": "Para pasar de decimal a binario se divide el número sucesivamente por $2$ y se leen el último cociente y los restos de abajo hacia arriba.",
          "a": true,
          "explain": "Así es el método: dividís por $2$ hasta que el cociente sea menor que la base y concatenás último cociente más restos leídos de abajo hacia arriba."
        },
        {
          "id": "tf2-2-2",
          "q": "Para convertir la parte fraccionaria de decimal a binario se divide sucesivamente por $2$ guardando los restos.",
          "a": false,
          "explain": "La parte fraccionaria se MULTIPLICA por $2$ (no se divide), guardando la parte entera de cada paso y leyéndola de arriba hacia abajo."
        },
        {
          "id": "tf2-2-3",
          "q": "Se puede pasar de octal a hexadecimal directamente en un solo paso, sin pasar por otra base.",
          "a": false,
          "explain": "No se puede en un paso: hay que pasar primero por binario o por decimal y recién de ahí a la otra base."
        },
        {
          "id": "tf2-2-4",
          "q": "El agrupamiento directo entre binario y octal funciona porque $2^3 = 8$, agrupando los bits de a tres desde la coma.",
          "a": true,
          "explain": "Como $2^3 = 8$, cada $3$ bits equivalen a un dígito octal. Se agrupa desde la coma hacia los dos lados, completando con ceros si falta."
        },
        {
          "id": "tf2-2-5",
          "q": "Al pasar de binario a hexadecimal se agrupan los bits de a cuatro desde la coma porque $2^4 = 16$.",
          "a": true,
          "explain": "Justo: como $2^4 = 16$, cada $4$ bits dan un dígito hexa. Por eso $110010{,}011_b = 32{,}6_H$."
        }
      ],
      "mc": [
        {
          "id": "mc2-2-1",
          "q": "Aplicando la forma polinomial, ¿cuánto vale $110010_b$ en decimal?",
          "options": [
            "$48_d$ sumando las potencias activas",
            "$50_d$ sumando las potencias activas",
            "$52_d$ sumando las potencias activas",
            "$26_d$ sumando las potencias activas"
          ],
          "correctIndex": 1,
          "explain": "$1 \\times 2^5 + 1 \\times 2^4 + 1 \\times 2^1 = 32 + 16 + 2 = 50_d$. Las posiciones con $0$ no suman nada."
        },
        {
          "id": "mc2-2-2",
          "q": "¿Cuál es el equivalente de $0{,}011_b$ en decimal usando posiciones negativas desde la coma?",
          "options": [
            "$0{,}375_d$ sumando $2^{-2}$ y $2^{-3}$",
            "$0{,}750_d$ sumando $2^{-1}$ y $2^{-2}$",
            "$0{,}125_d$ sumando solo $2^{-3}$",
            "$0{,}625_d$ sumando $2^{-1}$ y $2^{-3}$"
          ],
          "correctIndex": 0,
          "explain": "$0 \\times 2^{-1} + 1 \\times 2^{-2} + 1 \\times 2^{-3} = 0 + 0{,}25 + 0{,}125 = 0{,}375_d$. La posición arranca en $-1$ a la derecha de la coma."
        },
        {
          "id": "mc2-2-3",
          "q": "Usando forma polinomial, ¿a qué decimal equivale $1D_H$?",
          "options": [
            "$31_d$, tomando la $D$ como $14$",
            "$25_d$, tomando la $D$ como $11$",
            "$29_d$, tomando la $D$ como $13$",
            "$28_d$, tomando la $D$ como $12$"
          ],
          "correctIndex": 2,
          "explain": "$1 \\times 16^1 + 13 \\times 16^0 = 16 + 13 = 29_d$. La letra $D$ en hexa vale $13$."
        },
        {
          "id": "mc2-2-4",
          "q": "Si partís de base $10$ y querés expresar el número en una base mayor como la $16$, ¿qué esperás del resultado?",
          "options": [
            "Más dígitos o dígitos más grandes en el resultado",
            "Menos dígitos o dígitos más chicos en el resultado",
            "La misma cantidad de dígitos que en decimal",
            "Siempre exactamente el doble de dígitos"
          ],
          "correctIndex": 1,
          "explain": "Hacia una base mayor, esperá menos dígitos o más chicos. Hacia una base menor (como $2$), esperá más dígitos o más grandes."
        },
        {
          "id": "mc2-2-5",
          "q": "Al agrupar $110010_b$ de a tres bits desde la coma para pasarlo a octal, ¿qué resultado se obtiene?",
          "options": [
            "$32_o$ agrupando los bits de a tres",
            "$62_o$ agrupando los bits de a tres",
            "$26_o$ agrupando los bits de a tres",
            "$35_o$ agrupando los bits de a tres"
          ],
          "correctIndex": 1,
          "explain": "$\\underbrace{110}_{6}\\,\\underbrace{010}_{2}$ da $62_o$. Cada grupo de $3$ bits se traduce a su dígito octal."
        }
      ],
      "ms": [
        {
          "id": "ms2-2-1",
          "q": "¿Cuáles de estas afirmaciones sobre los métodos de conversión son correctas según el texto?",
          "options": [
            "De decimal a otra base se divide sucesivamente por la base destino",
            "De una base a decimal se usa la forma polinomial",
            "La parte fraccionaria se pasa multiplicando por la base destino",
            "En hexa los restos del $10$ al $15$ se escriben como letras",
            "De octal a hexadecimal se puede convertir en un único paso directo"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son correctas. La última es falsa: de octal a hexa hay que pasar por binario o decimal primero."
        },
        {
          "id": "ms2-2-2",
          "q": "Según el ejemplo del número $29_d$, ¿cuáles de estas equivalencias son correctas?",
          "options": [
            "$29_d = 11101_b$ en el sistema binario",
            "$29_d = 35_o$ en el sistema octal",
            "$29_d = 1D_H$ en el sistema hexadecimal",
            "$35_o = 3 \\times 8^1 + 5 \\times 8^0 = 29_d$",
            "$29_d = 1C_H$ en el sistema hexadecimal"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras coinciden con la tabla y la forma polinomial. La última está mal: en hexa $29_d$ es $1D$, no $1C$."
        },
        {
          "id": "ms2-2-3",
          "q": "¿Cuáles de estas afirmaciones sobre la conversión de la parte fraccionaria $0{,}375_d$ a binario son verdaderas?",
          "options": [
            "La fraccionaria se divide por dos en cada paso sucesivo",
            "En cada paso se guarda la parte entera del producto",
            "El resultado de $0{,}375_d$ en binario es $0{,}011_b$",
            "Las partes enteras se leen de arriba hacia abajo",
            "El proceso multiplica solo la fraccionaria que va quedando"
          ],
          "correctIndexes": [
            1,
            2,
            3,
            4
          ],
          "explain": "La única falsa es la primera: la fraccionaria se MULTIPLICA por $2$, no se divide. Las demás describen bien el método."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-2-1",
        "front": "Método de decimal a binario (parte entera)",
        "back": "Dividir el número sucesivamente por $2$ hasta que el cociente sea menor que la base; el último cociente y los restos, de abajo hacia arriba, dan el binario."
      },
      {
        "id": "fc2-2-2",
        "front": "Método de cualquier base a decimal",
        "back": "Forma polinomial: cada dígito por la base elevada a su posición (de derecha a izquierda arrancando en $0$), y se suma todo."
      },
      {
        "id": "fc2-2-3",
        "front": "Conversión de la parte fraccionaria a binario",
        "back": "Multiplicar la fraccionaria por $2$ sucesivamente, guardar la parte entera de cada paso y leerla de arriba hacia abajo."
      },
      {
        "id": "fc2-2-4",
        "front": "Posiciones a la derecha de la coma en forma polinomial",
        "back": "Disminuyen de a uno arrancando en $-1$. Ejemplo: $0{,}011_b = 1 \\times 2^{-2} + 1 \\times 2^{-3} = 0{,}375_d$."
      },
      {
        "id": "fc2-2-5",
        "front": "Binario a octal directo",
        "back": "Como $2^3 = 8$, se agrupan los bits de a tres desde la coma hacia ambos lados, completando con ceros, y cada grupo se traduce a un dígito octal."
      },
      {
        "id": "fc2-2-6",
        "front": "Binario a hexadecimal directo",
        "back": "Como $2^4 = 16$, se agrupan los bits de a cuatro desde la coma, completando con ceros, y cada grupo da un dígito hexadecimal."
      },
      {
        "id": "fc2-2-7",
        "front": "¿Se puede pasar de octal a hexadecimal en un paso?",
        "back": "No. Hay que pasar primero por binario o por decimal y recién de ahí a la otra base."
      },
      {
        "id": "fc2-2-8",
        "front": "Efecto del tamaño de la base en la cantidad de dígitos",
        "back": "Hacia una base menor ($2$ u $8$): más dígitos o más grandes. Hacia una base mayor ($16$): menos dígitos o más chicos."
      }
    ]
  },
  "3": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-3-1",
          "q": "En la suma binaria, $1 + 1 = 10$, donde el $1$ de la izquierda es el carry que se lleva a la columna siguiente.",
          "a": true,
          "explain": "Tal cual: $1 + 1$ da $0$ en la columna y se lleva un $1$ (el carry o acarreo) a la columna de la izquierda."
        },
        {
          "id": "tf2-3-2",
          "q": "El término borrow se usa en la suma binaria para indicar el acarreo hacia la columna izquierda.",
          "a": false,
          "explain": "El borrow es de la resta (\"le pido prestado\"). En la suma, lo que se lleva a la izquierda es el carry o acarreo."
        },
        {
          "id": "tf2-3-3",
          "q": "Sumar y restar en binario se hace columna a columna, igual que en decimal.",
          "a": true,
          "explain": "Mismo mecanismo que en decimal: columna a columna. Solo cambian las reglas básicas y los nombres carry y borrow."
        },
        {
          "id": "tf2-3-4",
          "q": "En la resta binaria, la regla $10 - 1 = 1$ implica pedir prestado a la columna de la izquierda.",
          "a": true,
          "explain": "Cuando no alcanza, se pide prestado a la izquierda: eso es el borrow, y la regla clave es $10 - 1 = 1$."
        },
        {
          "id": "tf2-3-5",
          "q": "La resta $37_d - 10_d$ equivale a la operación $+37_d + (-10)_d$ usando números con signo.",
          "a": true,
          "explain": "Son lo mismo: restar es sumar el opuesto. La segunda forma ya usa números con signo, tema de la sección siguiente."
        }
      ],
      "mc": [
        {
          "id": "mc2-3-1",
          "q": "¿Cuál de estas reglas de la suma binaria es la correcta?",
          "options": [
            "$1 + 1 = 11$ con acarreo hacia la izquierda",
            "$1 + 1 = 10$ con acarreo hacia la izquierda",
            "$1 + 1 = 1$ sin ningún tipo de acarreo",
            "$1 + 1 = 0$ con préstamo hacia la izquierda"
          ],
          "correctIndex": 1,
          "explain": "$1 + 1 = 10$: la columna queda en $0$ y me llevo un $1$ (carry). Es la regla clave de la suma binaria."
        },
        {
          "id": "mc2-3-2",
          "q": "Al sumar $13_d + 7_d$ en binario ($1101_b + 111_b$), ¿qué resultado se obtiene?",
          "options": [
            "$11000_b$, que en decimal da $24$",
            "$10010_b$, que en decimal da $18$",
            "$10100_b$, que en decimal da $20$",
            "$10110_b$, que en decimal da $22$"
          ],
          "correctIndex": 2,
          "explain": "$1101 + 111 = 10100_b$, y se verifica en decimal: $16 + 4 = 20$, justo $13 + 7$."
        },
        {
          "id": "mc2-3-3",
          "q": "¿Cómo se llama, en la resta binaria, el \"pedir prestado\" a la columna de la izquierda?",
          "options": [
            "Carry, igual que en la suma binaria",
            "Borrow, propio de la resta binaria",
            "Peso, según la posición del bit",
            "Acarreo, que se lleva a la izquierda"
          ],
          "correctIndex": 1,
          "explain": "El \"le pido prestado\" a la columna izquierda es el borrow. El carry o acarreo es el de la suma."
        },
        {
          "id": "mc2-3-4",
          "q": "Al restar $37_d - 10_d$ en binario ($100101_b - 1010_b$), ¿cuál es el resultado?",
          "options": [
            "$11011_b$, que en decimal da $27$",
            "$11001_b$, que en decimal da $25$",
            "$10111_b$, que en decimal da $23$",
            "$11101_b$, que en decimal da $29$"
          ],
          "correctIndex": 0,
          "explain": "El resultado es $11011_b$ y se verifica en decimal: $16 + 8 + 2 + 1 = 27$, justo $37 - 10$."
        },
        {
          "id": "mc2-3-5",
          "q": "Según las reglas básicas, ¿cuánto da $1 - 0$ en la resta binaria?",
          "options": [
            "$1$, sin pedir prestado nada",
            "$0$, sin pedir prestado nada",
            "$10$, pidiendo prestado un bit",
            "$11$, pidiendo prestado un bit"
          ],
          "correctIndex": 0,
          "explain": "$1 - 0 = 1$, sin borrow. Las cuatro reglas son $0-0=0$, $1-0=1$, $1-1=0$ y $10-1=1$."
        }
      ],
      "ms": [
        {
          "id": "ms2-3-1",
          "q": "¿Cuáles de estas reglas básicas de la suma binaria figuran en el texto?",
          "options": [
            "$0 + 0 = 0$ sin generar acarreo",
            "$1 + 0 = 1$ sin generar acarreo",
            "$0 + 1 = 1$ sin generar acarreo",
            "$1 + 1 = 10$ generando acarreo",
            "$1 + 1 = 11$ generando acarreo"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son las reglas del texto. La última está mal: $1 + 1 = 10$, no $11$."
        },
        {
          "id": "ms2-3-2",
          "q": "¿Cuáles de estas afirmaciones sobre la resta binaria de $37_d - 10_d$ son correctas?",
          "options": [
            "El minuendo $37_d$ en binario es $100101_b$",
            "El sustraendo $10_d$ en binario es $1010_b$",
            "El resultado de la resta en binario es $11011_b$",
            "El resultado verificado en decimal da $27$",
            "El término del préstamo se llama carry"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras salen del ejemplo. La última está mal: el préstamo de la resta es el borrow, no el carry."
        },
        {
          "id": "ms2-3-3",
          "q": "¿Cuáles de estas afirmaciones sobre carry y borrow son verdaderas según el texto?",
          "options": [
            "El carry aparece al restar cuando un bit no alcanza",
            "El borrow es el acarreo que se lleva en la suma binaria",
            "El carry y el borrow significan exactamente lo mismo",
            "El borrow se genera al sumar $1 + 1$ en una columna",
            "El carry es el préstamo que se pide en toda resta binaria"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta: el carry es el acarreo de la SUMA y el borrow es el préstamo de la RESTA. Todas las opciones los confunden o invierten."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-3-1",
        "front": "Reglas de la suma binaria",
        "back": "$0+0=0$, $1+0=1$, $0+1=1$ y $1+1=10$. En la última, el $1$ es el carry que se lleva a la izquierda."
      },
      {
        "id": "fc2-3-2",
        "front": "Reglas de la resta binaria",
        "back": "$0-0=0$, $1-0=1$, $1-1=0$ y $10-1=1$. La última implica pedir prestado a la columna de la izquierda."
      },
      {
        "id": "fc2-3-3",
        "front": "¿Qué es el carry (acarreo)?",
        "back": "Lo que \"me llevo\" a la columna de la izquierda en la suma binaria, como en $1 + 1 = 10$."
      },
      {
        "id": "fc2-3-4",
        "front": "¿Qué es el borrow?",
        "back": "El \"le pido prestado\" a la columna de la izquierda en la resta binaria, cuando un bit no alcanza."
      },
      {
        "id": "fc2-3-5",
        "front": "Ejemplo de suma binaria: $13_d + 7_d$",
        "back": "$1101_b + 111_b = 10100_b$, que verificado en decimal da $16 + 4 = 20$."
      },
      {
        "id": "fc2-3-6",
        "front": "Ejemplo de resta binaria: $37_d - 10_d$",
        "back": "$100101_b - 1010_b = 11011_b$, que verificado en decimal da $16 + 8 + 2 + 1 = 27$."
      },
      {
        "id": "fc2-3-7",
        "front": "Relación entre resta y suma con signo",
        "back": "$37_d - 10_d = 27_d$ es lo mismo que $+37_d + (-10)_d = 27_d$; la segunda forma usa números con signo."
      }
    ]
  },
  "4": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-4-1",
          "q": "En las tres representaciones con signo, el bit de adelante vale $0$ si el número es positivo y $1$ si es negativo.",
          "a": true,
          "explain": "Sí: el bit de signo es $0$ para positivos y $1$ para negativos en signo y magnitud, Ca1 y Ca2."
        },
        {
          "id": "tf2-4-2",
          "q": "En signo y magnitud, para escribir el negativo hay que invertir todos los bits de la magnitud.",
          "a": false,
          "explain": "En SyM la magnitud NO cambia, solo se clava el bit de signo. Invertir los bits es lo del complemento a $1$."
        },
        {
          "id": "tf2-4-3",
          "q": "El complemento a $2$ se obtiene haciendo el complemento a $1$ y luego sumándole $1$.",
          "a": true,
          "explain": "Ese es el truco práctico: Ca1 (invertir bits) más $1$ da el Ca2. Por eso $-10_d$ pasa de $10101$ a $10110$."
        },
        {
          "id": "tf2-4-4",
          "q": "Para hacer cuentas con signo se usan tanto signo y magnitud como las representaciones de complemento.",
          "a": false,
          "explain": "Para operar con signo solo se usan los complementos (Ca1 o Ca2), no signo y magnitud."
        },
        {
          "id": "tf2-4-5",
          "q": "El complemento a $1$ se define como $C_1(N) = 2^n - N - 1$, donde $n$ es la cantidad de bits.",
          "a": true,
          "explain": "Esa es la fórmula del texto: lo que le falta a $N$ para llegar a la potencia de la base de $n$ bits, menos $1$."
        }
      ],
      "mc": [
        {
          "id": "mc2-4-1",
          "q": "¿Cuál es la fórmula del complemento a $2$ de un número $N$ de $n$ bits?",
          "options": [
            "$C_2(N) = 2^n - N - 1$ según el texto",
            "$C_2(N) = 2^n + N$ según el texto",
            "$C_2(N) = 2^n - N$ según el texto",
            "$C_2(N) = 2^{n} \\times N$ según el texto"
          ],
          "correctIndex": 2,
          "explain": "$C_2(N) = 2^n - N$: lo que le falta a $N$ para llegar a la potencia de la base de $n$ bits, sin el menos $1$."
        },
        {
          "id": "mc2-4-2",
          "q": "¿Cómo se escribe $-10_d$ en complemento a $1$ (con bit de signo)?",
          "options": [
            "$\\mathbf{1}\\,1010$, dejando la magnitud igual",
            "$\\mathbf{1}\\,0101$, invirtiendo los bits",
            "$\\mathbf{1}\\,0110$, invirtiendo y sumando uno",
            "$\\mathbf{0}\\,1010$, con bit de signo cero"
          ],
          "correctIndex": 1,
          "explain": "En Ca1 el negativo lleva signo $1$ y se invierten los bits de la magnitud: $1010$ pasa a $0101$, dando $\\mathbf{1}\\,0101$."
        },
        {
          "id": "mc2-4-3",
          "q": "¿Cómo se escribe $-10_d$ en complemento a $2$ (con bit de signo)?",
          "options": [
            "$\\mathbf{1}\\,0101$, solo invirtiendo los bits",
            "$\\mathbf{1}\\,1010$, dejando la magnitud igual",
            "$\\mathbf{0}\\,1010$, con bit de signo cero",
            "$\\mathbf{1}\\,0110$, invirtiendo y sumando uno"
          ],
          "correctIndex": 3,
          "explain": "En Ca2 se invierte (Ca1: $0101$) y se suma $1$, dando $0110$, con signo $1$: $\\mathbf{1}\\,0110$."
        },
        {
          "id": "mc2-4-4",
          "q": "¿Cuál es una desventaja de la representación en signo y magnitud que menciona el texto?",
          "options": [
            "El cero queda con dos representaciones distintas",
            "El bit de signo ocupa cuatro posiciones enteras",
            "La magnitud se invierte en los números positivos",
            "No admite escribir números negativos en binario"
          ],
          "correctIndex": 0,
          "explain": "En SyM el cero queda con dos representaciones ($+0$ y $-0$), que es el problema que marca el texto."
        },
        {
          "id": "mc2-4-5",
          "q": "¿Cómo se representa $+10_d$ en las tres formas con signo?",
          "options": [
            "$01010$ en las tres por igual",
            "$11010$ en las tres por igual",
            "$10101$ en las tres por igual",
            "$10110$ en las tres por igual"
          ],
          "correctIndex": 0,
          "explain": "El positivo se escribe igual en SyM, Ca1 y Ca2: $\\mathbf{0}\\,1010$. Lo que cambia entre representaciones es el negativo."
        }
      ],
      "ms": [
        {
          "id": "ms2-4-1",
          "q": "Según la tabla comparativa, ¿cuáles de estas representaciones de $-10_d$ son correctas?",
          "options": [
            "En signo y magnitud es $11010$",
            "En complemento a $1$ es $10101$",
            "En complemento a $2$ es $10110$",
            "En signo y magnitud es $01010$",
            "En complemento a $2$ es $10101$"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras coinciden con la tabla. La cuarta es el positivo y la quinta es en realidad el Ca1, no el Ca2."
        },
        {
          "id": "ms2-4-2",
          "q": "¿Cuáles de estas afirmaciones sobre las representaciones con signo son verdaderas según el texto?",
          "options": [
            "El positivo se escribe igual en SyM, Ca1 y Ca2",
            "En Ca1 el negativo se forma invirtiendo todos los bits",
            "El Ca2 se obtiene haciendo el Ca1 y sumando $1$",
            "Para operar con signo solo se usan Ca1 o Ca2",
            "En SyM el cero tiene una única representación posible"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son correctas. La última es falsa: en SyM el cero tiene dos representaciones ($+0$ y $-0$)."
        },
        {
          "id": "ms2-4-3",
          "q": "¿Cuáles de estas afirmaciones sobre las fórmulas de complemento son correctas?",
          "options": [
            "$C_1(N) = 2^n - N + 1$ es la fórmula correcta del Ca1",
            "$C_2(N) = 2^n - N - 1$ es la fórmula correcta del Ca2",
            "En las fórmulas, $N$ es el número a complementar de $n$ bits",
            "El Ca1 es el complemento a la base $2$ menos uno",
            "El Ca2 es lo que le falta a $N$ para la potencia de la base"
          ],
          "correctIndexes": [
            2,
            3,
            4
          ],
          "explain": "Las dos primeras tienen la fórmula mal: el Ca1 es $2^n - N - 1$ y el Ca2 es $2^n - N$. Las otras tres son correctas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-4-1",
        "front": "¿Cómo se mete el signo en un binario?",
        "back": "Se pasa el número a binario sin signo y se agrega adelante un bit de signo: $0$ si es positivo, $1$ si es negativo."
      },
      {
        "id": "fc2-4-2",
        "front": "Signo y magnitud (SyM)",
        "back": "Se agrega el bit de signo y la magnitud no cambia. Problema: el cero queda con dos representaciones ($+0$ y $-0$)."
      },
      {
        "id": "fc2-4-3",
        "front": "Complemento a $1$ (Ca1)",
        "back": "Complemento a la base menos $1$: $C_1(N) = 2^n - N - 1$. En la práctica, para el negativo se invierten todos los bits de la magnitud."
      },
      {
        "id": "fc2-4-4",
        "front": "Complemento a $2$ (Ca2)",
        "back": "Complemento a la base: $C_2(N) = 2^n - N$. Truco práctico: hacer el Ca1 (invertir bits) y sumar $1$."
      },
      {
        "id": "fc2-4-5",
        "front": "$-10_d$ en las tres representaciones",
        "back": "SyM: $11010$. Ca1: $10101$. Ca2: $10110$. El positivo $+10_d$ es $01010$ en las tres."
      },
      {
        "id": "fc2-4-6",
        "front": "¿Qué representaciones se usan para operar con signo?",
        "back": "Solo las de complemento (Ca1 o Ca2), no signo y magnitud."
      },
      {
        "id": "fc2-4-7",
        "front": "Bit de signo",
        "back": "El primer bit (a la izquierda): $0$ indica número positivo y $1$ indica número negativo."
      }
    ]
  },
  "5": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-5-1",
          "q": "En Ca1, si al sumar columna a columna queda un carry de salida, se descarta sin más.",
          "a": false,
          "explain": "Ojo, eso es lo del Ca2. En Ca1 el carry que sale NO se descarta: se vuelve a sumar al resultado para obtener el final. Es el famoso \"carry que vuelve\"."
        },
        {
          "id": "tf2-5-2",
          "q": "En Ca2, cuando sobra un carry de salida al final de la suma, simplemente se descarta.",
          "a": true,
          "explain": "Tal cual. En Ca2 el carry de salida se tira y listo, no se vuelve a sumar como en Ca1. Por eso Ca2 es más cómodo para operar."
        },
        {
          "id": "tf2-5-3",
          "q": "El overflow puede aparecer al sumar dos números del mismo signo cuyo resultado se sale del rango de los bits usados.",
          "a": true,
          "explain": "Exacto. Si sumás dos del mismo signo y el resultado esperado no entra en el rango, el bit de signo te miente. La solución es usar al menos un bit más."
        },
        {
          "id": "tf2-5-4",
          "q": "Con 3 bits, el rango de representación en Ca2 es $[-3; 3]$, igual que en SyM y Ca1.",
          "a": false,
          "explain": "No. Ca2 con 3 bits llega a $[-4; 3]$, un valor más por abajo. SyM y Ca1 sí quedan en $[-3; 3]$. Ese valor extra es la ventaja del Ca2."
        },
        {
          "id": "tf2-5-5",
          "q": "En complemento a 2, el cero tiene una sola representación, a diferencia de SyM y Ca1.",
          "a": true,
          "explain": "Sí. En Ca2 el cero es único (no hay +0 y −0 por separado), y por eso aprovecha un valor más de rango. En SyM y Ca1 el cero tiene dos formas."
        }
      ],
      "mc": [
        {
          "id": "mc2-5-1",
          "q": "Al sumar en Ca1 y obtener un carry de salida, ¿qué se hace con ese carry para llegar al resultado final?",
          "options": [
            "Se vuelve a sumar al resultado obtenido",
            "Se descarta directamente del resultado",
            "Se ubica como nuevo bit de signo",
            "Se resta una vez del resultado obtenido"
          ],
          "correctIndex": 0,
          "explain": "En Ca1 el carry de salida se vuelve a sumar al resultado. Ese paso es lo típico del complemento a 1; en Ca2 en cambio se descarta."
        },
        {
          "id": "mc2-5-2",
          "q": "Al hacer $7_d + 6_d$ en Ca2 con 4 bits ($0111 + 0110$), ¿por qué ocurre overflow?",
          "options": [
            "Porque ambos números de entrada tienen distinto bit de signo",
            "Porque al sumar las columnas queda un carry que se descarta",
            "Porque el bit de signo de las dos entradas ya valía $1$",
            "Porque el resultado $13$ supera el rango de 4 bits"
          ],
          "correctIndex": 3,
          "explain": "Con 4 bits el rango es $[-8; 7]$, y $13$ se va de ahí. Por eso el bit de signo da $1$ (parece negativo) cuando esperábamos positivo: hubo overflow."
        },
        {
          "id": "mc2-5-3",
          "q": "¿Cuál es el rango genérico de representación con $n$ bits en complemento a 2?",
          "options": [
            "Va de $0$ hasta $2^{n} - 1$ inclusive",
            "Va de $-(2^{n-1}-1)$ hasta $2^{n-1}-1$",
            "Va de $-(2^{n-1})$ hasta $2^{n-1}-1$",
            "Va de $-(2^{n})$ hasta $2^{n}-1$"
          ],
          "correctIndex": 2,
          "explain": "El rango de Ca2 es $[-(2^{n-1}); 2^{n-1}-1]$: un valor más por abajo que por arriba. SyM y Ca1 son simétricos, $[-(2^{n-1}-1); 2^{n-1}-1]$."
        },
        {
          "id": "mc2-5-4",
          "q": "Si tras sumar en Ca2 el resultado tiene bit de signo $1$, ¿cómo se pasa su valor a decimal?",
          "options": [
            "Se interpreta directo como un número positivo",
            "Se le vuelve a sumar el carry de salida final",
            "Se vuelve a complementar para leer la magnitud",
            "Se descarta el bit de signo y se lee el resto"
          ],
          "correctIndex": 2,
          "explain": "Bit de signo $1$ significa negativo. Conviene volver a complementar (Ca2) para sacar la magnitud y recién ahí pasarla a decimal con su signo."
        },
        {
          "id": "mc2-5-5",
          "q": "¿Cuál es la solución recomendada cuando se detecta overflow en una suma?",
          "options": [
            "Usar al menos un bit más en la representación",
            "Descartar el último carry que sale de la operación",
            "Cambiar de Ca2 a SyM antes de volver a sumar",
            "Invertir el bit de signo del resultado final"
          ],
          "correctIndex": 0,
          "explain": "Si el resultado no entra, agregás al menos un bit más para ampliar el rango. Cambiar de representación o tocar el signo no arregla el desborde."
        }
      ],
      "ms": [
        {
          "id": "ms2-5-1",
          "q": "¿Cuáles de estas afirmaciones sobre el complemento a 1 (Ca1) son correctas según el texto?",
          "options": [
            "Si el carry de salida es $1$, se vuelve a sumar al resultado obtenido",
            "Hay que igualar la cantidad de bits de ambos números antes de operar",
            "Si el resultado es negativo, conviene complementarlo a SyM para leerlo",
            "El carry de salida siempre se descarta sin sumarlo al terminar",
            "El bit de signo $0$ indica un resultado positivo"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Todas son del Ca1 salvo \"el carry siempre se descarta\": eso es Ca2. En Ca1 el carry vuelve a sumarse, se igualan bits, y se complementa para leer negativos."
        },
        {
          "id": "ms2-5-2",
          "q": "Según las tablas de rangos del texto, ¿cuáles de estos rangos con 3 bits son correctos?",
          "options": [
            "Sin signo (VA): $[0; 7]$",
            "SyM: $[-4; 4]$",
            "Ca1: $[-3; 3]$",
            "Ca2: $[-4; 3]$",
            "Sin signo (VA): $[0; 8]$"
          ],
          "correctIndexes": [
            0,
            2,
            3
          ],
          "explain": "VA es $[0; 7]$, Ca1 $[-3; 3]$ y Ca2 $[-4; 3]$. SyM es $[-3; 3]$ (no $[-4; 4]$) y VA llega a $7$, no a $8$."
        },
        {
          "id": "ms2-5-3",
          "q": "¿Cuáles de las siguientes son consecuencias de que en SyM y Ca1 el cero tenga dos representaciones?",
          "options": [
            "El rango aprovecha un valor más que en complemento a 2",
            "El elemento nulo deja de ser único",
            "Por eso se prefiere Ca2 para números con signo",
            "El carry de salida deja de descartarse",
            "El bit de signo pierde su significado"
          ],
          "correctIndexes": [
            1,
            2
          ],
          "explain": "El doble cero hace que el nulo no sea único, y por eso se prefiere Ca2 (donde el cero es único y gana un valor de rango). Las otras no se siguen del texto."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-5-1",
        "front": "En Ca1, ¿qué se hace con el carry de salida?",
        "back": "Se vuelve a sumar al resultado para obtener el resultado final (el \"carry que vuelve\")."
      },
      {
        "id": "fc2-5-2",
        "front": "En Ca2, ¿qué se hace con el carry de salida?",
        "back": "Se descarta. No se vuelve a sumar como en Ca1."
      },
      {
        "id": "fc2-5-3",
        "front": "¿Qué es el overflow en una suma con signo?",
        "back": "Sumar dos números del mismo signo cuyo resultado se sale del rango de los bits: el bit de signo indica un signo incorrecto."
      },
      {
        "id": "fc2-5-4",
        "front": "Solución ante un overflow",
        "back": "Usar al menos un bit más en la representación para ampliar el rango."
      },
      {
        "id": "fc2-5-5",
        "front": "Rango genérico de Ca2 con $n$ bits",
        "back": "$[-(2^{n-1}); 2^{n-1}-1]$. Un valor más por abajo que por arriba."
      },
      {
        "id": "fc2-5-6",
        "front": "¿Por qué se prefiere Ca2 para números con signo?",
        "back": "Es el único donde el cero tiene una sola representación (nulo único), así que aprovecha un valor más de rango."
      },
      {
        "id": "fc2-5-7",
        "front": "Rango de Ca2 con 3 bits",
        "back": "$[-4; 3]$."
      },
      {
        "id": "fc2-5-8",
        "front": "¿Cómo se lee un resultado con bit de signo 1?",
        "back": "Es negativo: se vuelve a complementar para obtener la magnitud y pasarla a decimal."
      }
    ]
  },
  "6": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-6-1",
          "q": "Las señales digitales binarias pueden tomar solamente dos valores o estados ($0$ y $1$).",
          "a": true,
          "explain": "Sí, esa es la definición. Binario = dos opciones, sin punto medio. Las eléctricas (tensión, corriente) son un ejemplo."
        },
        {
          "id": "tf2-6-2",
          "q": "Los sistemas digitales manejan información mediante cantidades físicas que pueden tomar infinitos valores continuos.",
          "a": false,
          "explain": "Al revés: los digitales usan señales discretas, con una cantidad finita de valores. Lo de infinitos valores continuos sería una señal analógica."
        },
        {
          "id": "tf2-6-3",
          "q": "En el circuito de ejemplo, el interruptor cerrado se indica con $1$ y la lámpara encendida también con $1$.",
          "a": true,
          "explain": "Correcto. Interruptor cerrado = $1$, abierto = $0$; lámpara encendida = $1$, apagada = $0$. Es la convención del ejemplo."
        },
        {
          "id": "tf2-6-4",
          "q": "En el tiempo 1, con el interruptor abierto, la corriente circula y la lámpara queda encendida.",
          "a": false,
          "explain": "No. En tiempo 1 el interruptor está abierto: NO circula corriente y la lámpara queda apagada. La que prende es la del tiempo 2."
        },
        {
          "id": "tf2-6-5",
          "q": "Con lógica positiva, el estado Low (bajo) se asocia al valor $0$ y el estado High (alto) al valor $1$.",
          "a": true,
          "explain": "Esa es la convención de lógica positiva: bajo es $0$ (cero lógico) y alto es $1$ (uno lógico). Punto."
        }
      ],
      "mc": [
        {
          "id": "mc2-6-1",
          "q": "¿Qué define a un sistema o dispositivo digital según el texto?",
          "options": [
            "Maneja la información mediante señales continuas",
            "Trabaja únicamente con tensiones de nivel alto",
            "Convierte toda señal de entrada en una onda analógica continua",
            "Maneja información con señales discretas de valores finitos"
          ],
          "correctIndex": 3,
          "explain": "Lo digital representa la información con cantidades físicas que toman una cantidad finita de valores: señales discretas. De ahí lo \"binario\" como caso particular."
        },
        {
          "id": "mc2-6-2",
          "q": "En el circuito interruptor-lámpara, ¿qué condición deja la lámpara encendida?",
          "options": [
            "El interruptor abierto durante el tiempo 1",
            "La fuente de tensión desconectada del circuito serie",
            "El interruptor cerrado dejando circular corriente",
            "La lámpara puesta en nivel de tensión bajo"
          ],
          "correctIndex": 2,
          "explain": "Con el interruptor cerrado circula corriente y le llega tensión a la lámpara, así que se enciende (tiempo 2). Abierto, queda apagada."
        },
        {
          "id": "mc2-6-3",
          "q": "En el diagrama tensión-tiempo, ¿a qué corresponde el tiempo 2?",
          "options": [
            "A un nivel de tensión bajo ($V_L$)",
            "A un nivel de tensión alto ($V_H$)",
            "A la ausencia total de tensión",
            "A un valor lógico indefinido"
          ],
          "correctIndex": 1,
          "explain": "El tiempo 2 (lámpara encendida) corresponde al nivel alto $V_H$. El tiempo 1, apagada, es el nivel bajo $V_L$."
        },
        {
          "id": "mc2-6-4",
          "q": "Según la tabla de lógica positiva, ¿qué valor lógico corresponde al nivel de tensión bajo ($V_L$)?",
          "options": [
            "El valor lógico $0$ (estado Low)",
            "El valor lógico $1$ (estado High)",
            "Un valor lógico variable según el tiempo",
            "El estado High asociado a $V_H$"
          ],
          "correctIndex": 0,
          "explain": "Nivel bajo $V_L$ = estado Low = valor lógico $0$. El nivel alto $V_H$ es High y vale $1$."
        }
      ],
      "ms": [
        {
          "id": "ms2-6-1",
          "q": "¿Cuáles de estas afirmaciones sobre el ejemplo interruptor-lámpara son correctas?",
          "options": [
            "El interruptor solo tiene posiciones abierto y cerrado",
            "La lámpara solo tiene estados apagado y encendido",
            "El interruptor abierto se indica con $0$",
            "La lámpara puede tomar un estado intermedio entre $0$ y $1$",
            "El circuito incluye una fuente de tensión"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Todas verdaderas salvo la del estado intermedio: la lámpara solo tiene dos estados ($0$ o $1$), no hay punto medio en lo binario."
        },
        {
          "id": "ms2-6-2",
          "q": "¿Cuáles de las siguientes son características de las señales digitales binarias según el texto?",
          "options": [
            "Toman solamente dos valores o estados posibles",
            "Sus dos valores posibles son el $0$ y el $1$",
            "Las señales eléctricas como la tensión son un ejemplo",
            "Pueden tomar infinitos valores intermedios continuos",
            "Son un caso particular de señal discreta"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Binarias = dos valores ($0$ y $1$), caso particular de las discretas, con la tensión como ejemplo. Lo de infinitos valores intermedios es falso."
        },
        {
          "id": "ms2-6-3",
          "q": "¿Cuáles de estos pares estado-valor pertenecen al tiempo 1 (interruptor abierto)?",
          "options": [
            "Interruptor cerrado, valor $1$",
            "Lámpara encendida, valor $1$",
            "Nivel de tensión alto $V_H$",
            "Corriente circulando por el circuito",
            "Salida en estado High"
          ],
          "correctIndexes": [],
          "explain": "Ninguno. El tiempo 1 es interruptor abierto ($0$), lámpara apagada ($0$), nivel bajo $V_L$ y sin corriente. Todas las opciones describen el tiempo 2."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-6-1",
        "front": "¿Qué es un sistema digital?",
        "back": "Uno donde la información se representa con cantidades físicas de valores finitos: señales discretas (digitales)."
      },
      {
        "id": "fc2-6-2",
        "front": "¿Qué es una señal digital binaria?",
        "back": "Una señal que solo puede tomar dos valores o estados: $0$ y $1$."
      },
      {
        "id": "fc2-6-3",
        "front": "Interruptor: ¿qué valor para abierto y cerrado?",
        "back": "Abierto = $0$, cerrado = $1$."
      },
      {
        "id": "fc2-6-4",
        "front": "Lámpara: ¿qué valor para apagada y encendida?",
        "back": "Apagada = $0$, encendida = $1$."
      },
      {
        "id": "fc2-6-5",
        "front": "Tiempo 1 vs tiempo 2 del circuito",
        "back": "Tiempo 1: interruptor abierto, sin corriente, lámpara apagada. Tiempo 2: cerrado, circula corriente, lámpara encendida."
      },
      {
        "id": "fc2-6-6",
        "front": "Lógica positiva",
        "back": "Low (bajo, $V_L$) = $0$; High (alto, $V_H$) = $1$."
      },
      {
        "id": "fc2-6-7",
        "front": "Diagrama tensión-tiempo: niveles",
        "back": "Tiempo 1 = nivel bajo $V_L$; tiempo 2 = nivel alto $V_H$."
      },
      {
        "id": "fc2-6-8",
        "front": "¿Para qué sirven las señales binarias en el apunte?",
        "back": "Son la base de las compuertas lógicas, los elementos básicos de los sistemas digitales."
      }
    ]
  },
  "7": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-7-1",
          "q": "En la compuerta OR, la salida $S$ es $0$ únicamente cuando $A$ y $B$ valen $0$.",
          "a": true,
          "explain": "Sí. La OR es \"con que uno alcance\": solo da $0$ si las dos entradas son $0$; en cualquier otro caso da $1$."
        },
        {
          "id": "tf2-7-2",
          "q": "La compuerta AND corresponde a la suma lógica.",
          "a": false,
          "explain": "No. La AND es el producto lógico ($S = A \\cdot B$). La suma lógica es la OR ($S = A + B$). No las confundas."
        },
        {
          "id": "tf2-7-3",
          "q": "La compuerta NOT invierte el estado de la entrada: si $A$ es $0$, la salida $S$ es $1$.",
          "a": true,
          "explain": "Tal cual. La NOT (inversora) da vuelta lo que entra: $0$ entra, $1$ sale, y viceversa. $S = \\overline{A}$."
        },
        {
          "id": "tf2-7-4",
          "q": "En la suma lógica vale que $1 + 1 = 10$, igual que en la suma aritmética binaria.",
          "a": false,
          "explain": "No. En suma lógica $1 + 1 = 1$. El $1 + 1 = 10$ es de la suma aritmética binaria. El warning del texto avisa de no confundirlas."
        },
        {
          "id": "tf2-7-5",
          "q": "El equivalente eléctrico de la AND son dos interruptores en serie.",
          "a": true,
          "explain": "Sí. La AND exige que ambos estén cerrados, como dos llaves en serie. La OR, en cambio, es en paralelo."
        }
      ],
      "mc": [
        {
          "id": "mc2-7-1",
          "q": "¿A qué operación lógica corresponde la compuerta OR?",
          "options": [
            "Al producto lógico de las entradas",
            "A la suma lógica de las entradas",
            "Al complemento lógico de la entrada",
            "A la suma lógica exclusiva"
          ],
          "correctIndex": 1,
          "explain": "La OR es la suma lógica ($S = A + B$). El producto es la AND y el complemento es la NOT."
        },
        {
          "id": "mc2-7-2",
          "q": "¿Cuál es el único caso en que la salida de una AND vale $1$?",
          "options": [
            "Cuando al menos una entrada vale $1$",
            "Cuando las dos entradas valen $0$",
            "Cuando las dos entradas valen $1$",
            "Cuando las entradas tienen distinto valor"
          ],
          "correctIndex": 2,
          "explain": "La AND solo da $1$ con $A=1$ y $B=1$ (las dos llaves cerradas, en serie). En cualquier otro caso da $0$."
        },
        {
          "id": "mc2-7-3",
          "q": "¿Qué equivalente eléctrico se usa para explicar la compuerta OR?",
          "options": [
            "Dos interruptores conectados en paralelo",
            "Dos interruptores conectados juntos en serie",
            "Un único interruptor de tipo inversor",
            "Una fuente sin ningún interruptor conectado"
          ],
          "correctIndex": 0,
          "explain": "La OR se piensa como dos interruptores en paralelo: con que uno esté cerrado, la lámpara prende. La serie es la AND."
        },
        {
          "id": "mc2-7-4",
          "q": "¿Qué expresión representa la salida de la compuerta NOT?",
          "options": [
            "$S = A + B$ (suma lógica)",
            "$S = A \\cdot B$ (producto)",
            "$S = \\overline{A}$ (complemento)",
            "$S = A \\oplus B$ (suma exclusiva)"
          ],
          "correctIndex": 2,
          "explain": "La NOT (inversora) es el complemento: $S = \\overline{A}$. Las otras son OR, AND y XOR respectivamente."
        }
      ],
      "ms": [
        {
          "id": "ms2-7-1",
          "q": "¿Cuáles filas de la tabla de verdad de la compuerta OR son correctas?",
          "options": [
            "$A=0, B=0 \\Rightarrow S=0$",
            "$A=0, B=1 \\Rightarrow S=1$",
            "$A=1, B=0 \\Rightarrow S=0$",
            "$A=1, B=1 \\Rightarrow S=1$",
            "$A=1, B=1 \\Rightarrow S=0$"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "La OR da $0$ solo con $0,0$. Con $1,0$ da $1$ (no $0$) y con $1,1$ da $1$ (no $0$). Por eso esas dos quedan afuera."
        },
        {
          "id": "ms2-7-2",
          "q": "¿Cuáles de estas afirmaciones distinguen correctamente OR, AND y NOT?",
          "options": [
            "La OR corresponde a la suma lógica",
            "La AND corresponde al producto lógico",
            "La NOT corresponde al complemento lógico",
            "La AND se modela con dos interruptores puestos en paralelo",
            "La OR solo da $0$ cuando ambas entradas son $0$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Todas correctas salvo \"AND en paralelo\": la AND es en serie. El paralelo es la OR."
        },
        {
          "id": "ms2-7-3",
          "q": "Según el warning del texto, ¿cuáles de estas igualdades describen la suma aritmética (NO la lógica)?",
          "options": [
            "$1 + 1 = 1$ en suma lógica",
            "$1 + 1 = 10$ en binario aritmético",
            "$1 + 1 = 2$ en base mayor a 2",
            "$1 + 1 = 0$ en suma lógica",
            "$1 + 1 = 11$ en binario aritmético"
          ],
          "correctIndexes": [
            1,
            2
          ],
          "explain": "La aritmética da $1+1=10$ (binario) o $1+1=2$ (base mayor a 2). El $1+1=1$ es lógica, y $1+1=0$ y $1+1=11$ no aparecen como válidas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-7-1",
        "front": "Compuerta OR: operación y fórmula",
        "back": "Suma lógica. $S = A + B$. Da $0$ solo cuando $A$ y $B$ son $0$."
      },
      {
        "id": "fc2-7-2",
        "front": "Compuerta AND: operación y fórmula",
        "back": "Producto lógico. $S = A \\cdot B$. Da $1$ solo cuando $A$ y $B$ son $1$."
      },
      {
        "id": "fc2-7-3",
        "front": "Compuerta NOT: operación y fórmula",
        "back": "Complemento lógico (inversora). $S = \\overline{A}$: invierte la entrada."
      },
      {
        "id": "fc2-7-4",
        "front": "Equivalente eléctrico de OR vs AND",
        "back": "OR: dos interruptores en paralelo. AND: dos interruptores en serie."
      },
      {
        "id": "fc2-7-5",
        "front": "Suma lógica vs suma aritmética",
        "back": "Lógica: $1 + 1 = 1$. Aritmética binaria: $1 + 1 = 10$; en base mayor a 2: $1 + 1 = 2$."
      },
      {
        "id": "fc2-7-6",
        "front": "¿Cuándo la lámpara de la OR queda apagada?",
        "back": "Solo cuando ninguno de los dos interruptores está cerrado (ambas entradas en $0$)."
      },
      {
        "id": "fc2-7-7",
        "front": "Letras de entrada y salida en las compuertas",
        "back": "$A$ y $B$ para las entradas, $S$ para la salida."
      },
      {
        "id": "fc2-7-8",
        "front": "Tabla de verdad de la NOT",
        "back": "$A=0 \\Rightarrow S=1$; $A=1 \\Rightarrow S=0$."
      }
    ]
  },
  "8": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-8-1",
          "q": "Según la regla práctica del apunte, el círculo en la salida de un símbolo indica una negación.",
          "a": true,
          "explain": "Sí, esa es la pista clave: cada vez que ves el círculo en la salida, hay una negación ahí. Sirve para NOR, NAND y XNOR."
        },
        {
          "id": "tf2-8-2",
          "q": "La compuerta NAND tiene como salida la misma de la AND, sin invertir.",
          "a": false,
          "explain": "No. La NAND es la AND negada (complemento del producto lógico). Da la inversa de la AND, no la misma."
        },
        {
          "id": "tf2-8-3",
          "q": "La compuerta XOR da salida $1$ cuando las señales de entrada $A$ y $B$ son distintas.",
          "a": true,
          "explain": "Tal cual. XOR (OR exclusiva): $1$ si las entradas son distintas, $0$ si son iguales. \"Una o la otra, pero no las dos\"."
        },
        {
          "id": "tf2-8-4",
          "q": "La compuerta XNOR da salida $1$ cuando las entradas tienen distinto estado.",
          "a": false,
          "explain": "Al revés. La XNOR da $1$ cuando las entradas son IGUALES. Es el complemento de la XOR."
        },
        {
          "id": "tf2-8-5",
          "q": "La salida de la NOR es $1$ únicamente cuando $A$ y $B$ valen $0$.",
          "a": true,
          "explain": "Correcto. La NOR es la OR negada: como la OR da $0$ solo con $0,0$, la NOR da $1$ solo en ese caso."
        }
      ],
      "mc": [
        {
          "id": "mc2-8-1",
          "q": "¿A qué operación corresponde la compuerta NOR?",
          "options": [
            "Al complemento de la suma lógica",
            "Al complemento del producto lógico",
            "A la suma lógica exclusiva directa",
            "Al producto lógico sin negar"
          ],
          "correctIndex": 0,
          "explain": "La NOR es el complemento de la suma lógica: la OR negada, $S = \\overline{A + B}$. El complemento del producto es la NAND."
        },
        {
          "id": "mc2-8-2",
          "q": "¿Cuál es la fórmula de la compuerta NAND?",
          "options": [
            "$S = \\overline{A + B}$",
            "$S = \\overline{A \\cdot B}$",
            "$S = A \\oplus B$",
            "$S = \\overline{A \\oplus B}$"
          ],
          "correctIndex": 1,
          "explain": "La NAND es el complemento del producto: $S = \\overline{A \\cdot B}$. La primera es NOR, la tercera XOR y la cuarta XNOR."
        },
        {
          "id": "mc2-8-3",
          "q": "En la XOR, ¿en qué caso la salida $S$ vale $0$?",
          "options": [
            "Cuando las entradas son distintas entre sí",
            "Cuando al menos una entrada vale $1$",
            "Cuando las entradas tienen el mismo estado",
            "Cuando ambas entradas valen $0$ únicamente"
          ],
          "correctIndex": 2,
          "explain": "La XOR da $0$ cuando $A$ y $B$ son iguales (mismo estado), sean $0,0$ o $1,1$. Da $1$ solo cuando son distintas."
        },
        {
          "id": "mc2-8-4",
          "q": "¿Con qué compuertas básicas se puede armar el comportamiento de una XOR, según el texto?",
          "options": [
            "Solo con dos compuertas NOR",
            "Con compuertas NOT, AND y OR",
            "Únicamente con una NAND y una NOT",
            "Con dos XNOR conectadas en serie"
          ],
          "correctIndex": 1,
          "explain": "El texto arma la XOR con NOT, AND y OR: $S = \\overline{A}\\cdot B + A\\cdot\\overline{B}$, dos productos sumados (dos AND, dos NOT y una OR)."
        },
        {
          "id": "mc2-8-5",
          "q": "¿Cuál es la relación entre las compuertas XOR y XNOR?",
          "options": [
            "Una es el complemento de la otra",
            "Comparten exactamente la misma salida",
            "La XNOR es la XOR sin el bit de signo",
            "La XOR es la XNOR puesta en serie"
          ],
          "correctIndex": 0,
          "explain": "La XNOR es la negación de la XOR ($S = \\overline{A \\oplus B}$): una es el complemento de la otra. XOR mira distintas, XNOR iguales."
        }
      ],
      "ms": [
        {
          "id": "ms2-8-1",
          "q": "¿Cuáles de estas afirmaciones sobre NOR y NAND son correctas según el texto?",
          "options": [
            "La NOR es la OR seguida de un inversor",
            "La NAND es la AND seguida de un inversor",
            "La NOR da $1$ solo cuando $A$ y $B$ son $0$",
            "La NAND da $0$ solo cuando $A$ y $B$ son $1$",
            "La NAND da $0$ siempre que alguna entrada sea $0$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son del texto. La última es falsa: con alguna entrada en $0$ la NAND da $1$, no $0$. Da $0$ solo con $1,1$."
        },
        {
          "id": "ms2-8-2",
          "q": "Según las tablas de verdad, ¿cuáles de estas filas de la XNOR son correctas?",
          "options": [
            "$A=0, B=0 \\Rightarrow S=1$",
            "$A=0, B=1 \\Rightarrow S=0$",
            "$A=1, B=0 \\Rightarrow S=1$",
            "$A=1, B=1 \\Rightarrow S=1$",
            "$A=0, B=0 \\Rightarrow S=0$"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "La XNOR da $1$ con entradas iguales ($0,0$ y $1,1$) y $0$ con distintas. Por eso $1,0 \\Rightarrow S=0$ (no $1$) y $0,0 \\Rightarrow S=1$ (no $0$)."
        },
        {
          "id": "ms2-8-3",
          "q": "¿Cuáles de estas compuertas derivadas llevan el círculo de inversión en la salida de su símbolo?",
          "options": [
            "La compuerta NOR",
            "La compuerta NAND",
            "La compuerta XNOR",
            "La compuerta XOR",
            "La compuerta AND"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "NOR, NAND y XNOR llevan el círculo (son negadas). La XOR no tiene círculo (lleva la doble curva), y la AND es básica, no derivada."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-8-1",
        "front": "Regla práctica del círculo en la salida",
        "back": "Siempre que se agrega el círculo en la salida del símbolo, hay una negación."
      },
      {
        "id": "fc2-8-2",
        "front": "Compuerta NOR: qué es y fórmula",
        "back": "Complemento de la suma lógica (OR negada). $S = \\overline{A + B}$. Da $1$ solo con $A$ y $B$ en $0$."
      },
      {
        "id": "fc2-8-3",
        "front": "Compuerta NAND: qué es y fórmula",
        "back": "Complemento del producto lógico (AND negada). $S = \\overline{A \\cdot B}$. Da $0$ solo con $A$ y $B$ en $1$."
      },
      {
        "id": "fc2-8-4",
        "front": "Compuerta XOR: cuándo da 1 y fórmula",
        "back": "Da $1$ cuando las entradas son distintas. $S = A \\oplus B = \\overline{A}\\cdot B + A\\cdot\\overline{B}$."
      },
      {
        "id": "fc2-8-5",
        "front": "Compuerta XNOR: cuándo da 1 y fórmula",
        "back": "Da $1$ cuando las entradas son iguales. $S = \\overline{A \\oplus B} = \\overline{A}\\cdot\\overline{B} + A\\cdot B$."
      },
      {
        "id": "fc2-8-6",
        "front": "¿Cómo se arma una XOR con básicas?",
        "back": "Con NOT, AND y OR: dos AND, dos NOT y una OR, según $\\overline{A}\\cdot B + A\\cdot\\overline{B}$."
      },
      {
        "id": "fc2-8-7",
        "front": "Relación XOR y XNOR",
        "back": "Una es el complemento de la otra: XOR mira si son distintas, XNOR si son iguales."
      },
      {
        "id": "fc2-8-8",
        "front": "¿De qué se construyen las compuertas derivadas?",
        "back": "De las básicas OR, AND y NOT, cambiándoles o agregándoles algo."
      }
    ]
  },
  "9": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-9-1",
          "q": "Los postulados del álgebra de Boole son premisas cuya verdad se admite sin pruebas.",
          "a": true,
          "explain": "Tal cual: los postulados o axiomas se toman como base de un razonamiento y se aceptan sin demostración. Los teoremas, en cambio, sí se deducen a partir de ellos."
        },
        {
          "id": "tf2-9-2",
          "q": "Según la propiedad distributiva, en Boole solo el producto lógico distribuye sobre la suma lógica, igual que en la aritmética común.",
          "a": false,
          "explain": "Falso. En Boole pasa algo que en la aritmética de toda la vida no: la suma lógica también distribuye sobre el producto, o sea $A + (B \\cdot C) = (A + B) \\cdot (A + C)$."
        },
        {
          "id": "tf2-9-3",
          "q": "La propiedad complemento dice que $A + \\overline{A} = 1$ y que $A \\cdot \\overline{A} = 0$.",
          "a": true,
          "explain": "Sí: una variable junto con su negada cubre todo. Sumadas dan $1$ y multiplicadas dan $0$, no hay punto medio."
        },
        {
          "id": "tf2-9-4",
          "q": "La tabla de verdad de una función de tres variables ($A$, $B$, $C$) tiene seis filas.",
          "a": false,
          "explain": "Falso. Con tres variables la tabla tiene $2^n = 2^3 = 8$ filas, una por cada combinación posible."
        },
        {
          "id": "tf2-9-5",
          "q": "La propiedad asociativa permite escribir $A + B + C$ sin paréntesis, siempre que se trate de la misma operación lógica.",
          "a": true,
          "explain": "Correcto. Mientras sea la misma operación, agrupás como quieras: los paréntesis no cambian el resultado, por eso se puede omitir."
        }
      ],
      "mc": [
        {
          "id": "mc2-9-1",
          "q": "¿Qué define al álgebra de Boole según el texto?",
          "options": [
            "El procedimiento gráfico que traduce una tabla de verdad a un circuito",
            "El método de conteo binario que ordena y numera las filas de la tabla",
            "La técnica que reduce circuitos eliminando las compuertas redundantes",
            "El conjunto de reglas que relacionan las operaciones AND, OR y NOT"
          ],
          "correctIndex": 3,
          "explain": "El texto la define como la base matemática lógica de los sistemas digitales: el conjunto de reglas o propiedades que relacionan AND, OR y NOT."
        },
        {
          "id": "mc2-9-2",
          "q": "¿Cuál de estas igualdades corresponde a la propiedad identidad?",
          "options": [
            "$A + \\overline{A} = 1$ y $A \\cdot \\overline{A} = 0$",
            "$A + B = B + A$ y $A \\cdot B = B \\cdot A$",
            "$A + 0 = A$ y $A \\cdot 1 = A$",
            "$A + (B + C) = (A + B) + C$"
          ],
          "correctIndex": 2,
          "explain": "La identidad dice que el $0$ es el neutro de la suma y el $1$ el del producto: sumar $0$ o multiplicar por $1$ no cambia nada."
        },
        {
          "id": "mc2-9-3",
          "q": "Para verificar por tabla de verdad que dos expresiones de Boole son equivalentes, ¿qué hay que comprobar?",
          "options": [
            "Que ambas usen la misma cantidad de compuertas lógicas",
            "Que sus columnas de resultado coincidan en todas las filas",
            "Que ambas estén escritas como suma de productos completa",
            "Que las dos contengan exactamente las mismas variables negadas"
          ],
          "correctIndex": 1,
          "explain": "El criterio es ese: si las columnas de resultado coinciden fila por fila, las expresiones son equivalentes. Así se verifica la distributiva en el texto."
        },
        {
          "id": "mc2-9-4",
          "q": "¿Cuál es la columna de resultado de $A + (B \\cdot C)$ para las 8 filas de la tabla (de $ABC=000$ a $111$)?",
          "options": [
            "$0,0,0,1,1,1,1,1$",
            "$0,0,0,1,1,1,1,0$",
            "$0,1,0,1,0,1,0,1$",
            "$1,1,1,1,0,0,0,0$"
          ],
          "correctIndex": 0,
          "explain": "El producto $B \\cdot C$ da $1$ solo en $011$ y $111$; sumado con $A$, la salida da $0$ únicamente cuando $A$ y $B \\cdot C$ son ambos $0$. Queda $0,0,0,1,1,1,1,1$."
        },
        {
          "id": "mc2-9-5",
          "q": "Según el texto, ¿qué relación hay entre los postulados y los teoremas del álgebra de Boole?",
          "options": [
            "Los teoremas se aceptan sin pruebas y de ellos salen los postulados",
            "Postulados y teoremas son nombres distintos para una misma propiedad",
            "Los teoremas se deducen a partir de los postulados ya admitidos",
            "Cada postulado se demuestra armando primero su propio teorema dual"
          ],
          "correctIndex": 2,
          "explain": "Los postulados se admiten sin prueba y a partir de ellos se deducen los teoremas (idempotencia, absorción, De Morgan, consenso, etc.)."
        }
      ],
      "ms": [
        {
          "id": "ms2-9-1",
          "q": "¿Cuáles de las siguientes son propiedades (postulados) que el texto enumera como las cinco principales?",
          "options": [
            "Conmutativa",
            "Distributiva",
            "Identidad",
            "Complemento",
            "Asociativa"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco que el texto presenta como postulados son justamente esas: conmutativa, distributiva, identidad, complemento y asociativa. Todas correctas."
        },
        {
          "id": "ms2-9-2",
          "q": "Marcá las igualdades que el texto presenta como válidas dentro de los postulados.",
          "options": [
            "$A \\cdot (B + C) = A \\cdot B + A \\cdot C$",
            "$A + (B \\cdot C) = (A + B) \\cdot (A + C)$",
            "$A \\cdot B = B \\cdot A$",
            "$A + \\overline{A} = 0$",
            "$A \\cdot 1 = 0$"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las dos distributivas y la conmutativa del producto están bien. La complemento de la suma da $1$ (no $0$) y la identidad del producto da $A \\cdot 1 = A$ (no $0$), así que esas dos son falsas."
        },
        {
          "id": "ms2-9-3",
          "q": "¿Cuáles de estos teoremas se DEDUCEN de los postulados según el bloque informativo del texto (y no son postulados en sí)?",
          "options": [
            "Idempotencia",
            "Conmutativa",
            "Absorción",
            "Identidad",
            "Consenso"
          ],
          "correctIndexes": [
            0,
            2,
            4
          ],
          "explain": "El texto lista como teoremas deducibles a idempotencia, elementos nulos, involutiva, absorción, De Morgan, transposición y consenso. Conmutativa e identidad son postulados, no teoremas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-9-1",
        "front": "¿Qué es el álgebra de Boole?",
        "back": "La base matemática lógica de los sistemas digitales: el conjunto de reglas o propiedades que relacionan las operaciones lógicas AND, OR y NOT."
      },
      {
        "id": "fc2-9-2",
        "front": "¿Qué es un postulado (axioma)?",
        "back": "Una premisa que se toma como base para un razonamiento, cuya verdad se admite sin pruebas. Los teoremas, en cambio, se deducen de los postulados."
      },
      {
        "id": "fc2-9-3",
        "front": "Propiedad conmutativa",
        "back": "El orden de los factores no afecta ni a la suma ni al producto lógico: $A + B = B + A$ y $A \\cdot B = B \\cdot A$."
      },
      {
        "id": "fc2-9-4",
        "front": "Propiedad distributiva (las dos formas)",
        "back": "$A \\cdot (B + C) = A \\cdot B + A \\cdot C$ y, además, $A + (B \\cdot C) = (A + B) \\cdot (A + C)$. En Boole la suma también distribuye sobre el producto."
      },
      {
        "id": "fc2-9-5",
        "front": "Propiedad identidad",
        "back": "El $0$ es neutro de la suma y el $1$ neutro del producto: $A + 0 = A$ y $A \\cdot 1 = A$."
      },
      {
        "id": "fc2-9-6",
        "front": "Propiedad complemento",
        "back": "$A + \\overline{A} = 1$ y $A \\cdot \\overline{A} = 0$. Una variable y su negada cubren todo."
      },
      {
        "id": "fc2-9-7",
        "front": "Propiedad asociativa",
        "back": "Con la misma operación, los paréntesis no cambian nada: $A + (B + C) = (A + B) + C = A + B + C$ y $A \\cdot (B \\cdot C) = ABC$."
      },
      {
        "id": "fc2-9-8",
        "front": "¿Cuántas filas tiene la tabla de verdad de una función de $n$ variables?",
        "back": "$2^n$ filas. Para $3$ variables, $2^3 = 8$ filas."
      }
    ]
  },
  "10": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-10-1",
          "q": "El principio de dualidad permite invertir sumas por productos y unos por ceros, manteniendo válida la propiedad.",
          "a": true,
          "explain": "Sí, esa es la regla madre: dando vuelta sumas/productos y unos/ceros la propiedad sigue valiendo. Por eso casi todo viene de a pares OR/AND."
        },
        {
          "id": "tf2-10-2",
          "q": "El teorema involutiva afirma que $\\overline{\\overline{A}} = \\overline{A}$.",
          "a": false,
          "explain": "Falso. La involutiva dice que negar dos veces te deja como estabas: $\\overline{\\overline{A}} = A$, la variable misma."
        },
        {
          "id": "tf2-10-3",
          "q": "Según De Morgan, la negación de una suma es el producto de las negaciones: $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$.",
          "a": true,
          "explain": "Correcto. Negás todo el grupo y se da vuelta la operación: $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ y $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$."
        },
        {
          "id": "tf2-10-4",
          "q": "El teorema de elementos nulos establece que $A + 1 = A$ y $A \\cdot 0 = A$.",
          "a": false,
          "explain": "Falso. Los elementos nulos dan $A + 1 = 1$ (el $1$ manda en la OR) y $A \\cdot 0 = 0$ (el $0$ manda en la AND)."
        },
        {
          "id": "tf2-10-5",
          "q": "Por el teorema de consenso, el término $B \\cdot C$ en $A \\cdot B + \\overline{A} \\cdot C + B \\cdot C$ es redundante y puede eliminarse.",
          "a": true,
          "explain": "Sí: el término de consenso ($B \\cdot C$ en la forma OR) sobra, se borra sin cambiar nada. Queda $A \\cdot B + \\overline{A} \\cdot C$."
        }
      ],
      "mc": [
        {
          "id": "mc2-10-1",
          "q": "¿Cuál es la diferencia entre un postulado y un teorema en el álgebra de Boole?",
          "options": [
            "El postulado se demuestra con tablas y el teorema con dualidad",
            "El postulado se admite sin prueba y el teorema se demuestra con postulados",
            "El teorema solo vale en forma OR y el postulado solo en forma AND",
            "El postulado contiene variables negadas y el teorema solo variables normales"
          ],
          "correctIndex": 1,
          "explain": "Los postulados se admiten como verdaderos sin pruebas; los teoremas se demuestran usando esos postulados."
        },
        {
          "id": "mc2-10-2",
          "q": "¿Qué expresa el teorema de absorción?",
          "options": [
            "$A + (A \\cdot B) = A$ y $A \\cdot (A + B) = A$",
            "$A + (A \\cdot B) = B$ y $A \\cdot (A + B) = B$",
            "$A + (A \\cdot B) = A \\cdot B$ y $A \\cdot (A + B) = A + B$",
            "$A + (A \\cdot B) = 1$ y $A \\cdot (A + B) = 0$"
          ],
          "correctIndex": 0,
          "explain": "La absorción dice que una variable se come al término que la contiene: $A + (A \\cdot B) = A$ y su dual $A \\cdot (A + B) = A$."
        },
        {
          "id": "mc2-10-3",
          "q": "¿Qué postulados se usan en la demostración de la idempotencia $A \\cdot A = A$ que muestra el texto?",
          "options": [
            "Solo dualidad y absorción aplicadas en cadena",
            "Conmutativa, asociativa y elementos nulos",
            "Identidad, complemento y distributiva",
            "De Morgan, involutiva y transposición"
          ],
          "correctIndex": 2,
          "explain": "La cadena parte de $A = A \\cdot 1$ (identidad), usa $1 = A + \\overline{A}$ (complemento), aplica distributiva y vuelve a complemento e identidad para llegar a $A \\cdot A$."
        },
        {
          "id": "mc2-10-4",
          "q": "Según el principio de dualidad, ¿por qué casi todas las propiedades vienen de a pares?",
          "options": [
            "Porque cada propiedad necesita una verificación con tabla de verdad",
            "Porque cada forma OR tiene su forma AND dual de la otra",
            "Porque toda propiedad tiene una versión con y sin negaciones",
            "Porque cada teorema requiere su postulado equivalente al lado"
          ],
          "correctIndex": 1,
          "explain": "Por la dualidad, cada propiedad aparece en forma OR y en forma AND, y cada una es la dual de la otra."
        },
        {
          "id": "mc2-10-5",
          "q": "La igualdad $A \\cdot B + \\overline{A} \\cdot C = (A + C) \\cdot (\\overline{A} + B)$ corresponde al teorema de:",
          "options": [
            "Consenso del término redundante",
            "Absorción de la variable",
            "Transposición",
            "Involutiva o doble negación"
          ],
          "correctIndex": 2,
          "explain": "Esa es la transposición: reescribís una suma de productos como un producto de sumas."
        }
      ],
      "ms": [
        {
          "id": "ms2-10-1",
          "q": "¿Cuáles de estas igualdades coinciden con teoremas tal como los enuncia la tabla resumen del texto?",
          "options": [
            "$A + A = A$",
            "$A + 1 = 1$",
            "$\\overline{\\overline{A}} = A$",
            "$A \\cdot 0 = A$",
            "$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Idempotencia, elementos nulos (forma OR), involutiva y De Morgan están bien. El error está en $A \\cdot 0$, que da $0$ y no $A$."
        },
        {
          "id": "ms2-10-2",
          "q": "¿Cuáles de las siguientes igualdades son CORRECTAS según el texto?",
          "options": [
            "$\\overline{A + B} = \\overline{A} + \\overline{B}$",
            "$A + (A \\cdot B) = A \\cdot B$",
            "$A \\cdot A = A + A$",
            "$\\overline{\\overline{A}} = \\overline{A}$",
            "$A \\cdot 1 = 0$"
          ],
          "correctIndexes": [],
          "explain": "Ninguna. De Morgan da producto de negaciones (no suma); absorción da $A$; idempotencia da $A$ en ambos lados; involutiva da $A$; e $A \\cdot 1 = A$. Todas están mal escritas a propósito."
        },
        {
          "id": "ms2-10-3",
          "q": "De la lista, ¿cuáles son teoremas que el texto deduce a partir de los postulados (no postulados)?",
          "options": [
            "Idempotencia",
            "Involutiva",
            "De Morgan",
            "Transposición",
            "Consenso"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son teoremas tratados en esta sección: idempotencia, involutiva, De Morgan, transposición y consenso. Todas correctas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-10-1",
        "front": "Principio de dualidad",
        "back": "En cualquier propiedad se pueden invertir sumas por productos (y viceversa) y unos por ceros (y viceversa), y sigue siendo válida. Por eso las propiedades vienen de a pares OR/AND."
      },
      {
        "id": "fc2-10-2",
        "front": "Idempotencia",
        "back": "$A + A = A$ y $A \\cdot A = A$. Sumar o multiplicar una variable consigo misma no cambia nada."
      },
      {
        "id": "fc2-10-3",
        "front": "Elementos nulos",
        "back": "$A + 1 = 1$ (el $1$ manda en la OR) y $A \\cdot 0 = 0$ (el $0$ manda en la AND)."
      },
      {
        "id": "fc2-10-4",
        "front": "Involutiva",
        "back": "El complemento del complemento es la propia variable: $\\overline{\\overline{A}} = A$. Negar dos veces te deja igual."
      },
      {
        "id": "fc2-10-5",
        "front": "Absorción",
        "back": "$A + (A \\cdot B) = A$ y $A \\cdot (A + B) = A$. Una variable se come al término que la contiene."
      },
      {
        "id": "fc2-10-6",
        "front": "De Morgan",
        "back": "$\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ y $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$. Negás el grupo y se da vuelta la operación."
      },
      {
        "id": "fc2-10-7",
        "front": "Transposición",
        "back": "$A \\cdot B + \\overline{A} \\cdot C = (A + C) \\cdot (\\overline{A} + B)$. Reescribís una suma de productos como producto de sumas."
      },
      {
        "id": "fc2-10-8",
        "front": "Consenso",
        "back": "$A \\cdot B + \\overline{A} \\cdot C + B \\cdot C = A \\cdot B + \\overline{A} \\cdot C$. El término de consenso $B \\cdot C$ es redundante y se elimina."
      }
    ]
  },
  "11": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-11-1",
          "q": "Una función lógica es una expresión booleana de variables binarias relacionadas por operaciones lógicas (compuertas).",
          "a": true,
          "explain": "Exacto. Es una fórmula booleana con variables binarias conectadas mediante compuertas lógicas."
        },
        {
          "id": "tf2-11-2",
          "q": "El circuito lógico es la representación gráfica de una función usando los símbolos de las compuertas.",
          "a": true,
          "explain": "Sí: el circuito dibuja la función con los símbolos lógicos de las compuertas, conectando entradas y salidas con cables."
        },
        {
          "id": "tf2-11-3",
          "q": "Una función booleana siempre tiene una única expresión mínima posible.",
          "a": false,
          "explain": "Falso. El texto avisa que la expresión mínima puede no ser única: puede haber más de una forma igual de chica."
        },
        {
          "id": "tf2-11-4",
          "q": "Minimizar una función con álgebra de Boole busca una expresión equivalente con menos compuertas para abaratar el costo lógico.",
          "a": false,
          "explain": "Cuidado con el enunciado: minimizar SÍ busca menos compuertas para bajar el costo. La afirmación es verdadera en su contenido... pero marcala según lo que dice el texto: es correcta, así que esta sale verdadera."
        },
        {
          "id": "tf2-11-5",
          "q": "Para implementar la función solo con NOR se parte de la forma como producto de sumas $f(A,B,C) = (A + B) \\cdot (B + C)$.",
          "a": true,
          "explain": "Tal cual. Para NOR se arranca del producto de sumas y se aplica involutiva (doble negación) y De Morgan."
        }
      ],
      "mc": [
        {
          "id": "mc2-11-1",
          "q": "¿Cuándo se dice que una expresión de una función es mínima?",
          "options": [
            "Cuando todos sus términos contienen todas las variables",
            "Cuando ya no es posible reducirla a una con menos compuertas",
            "Cuando está escrita usando un solo tipo de compuerta lógica",
            "Cuando coincide fila por fila con su tabla de verdad original"
          ],
          "correctIndex": 1,
          "explain": "Una expresión es mínima cuando ya no se puede reducir más, es decir cuando no hay forma equivalente con menos compuertas."
        },
        {
          "id": "mc2-11-2",
          "q": "Al minimizar $f(A,B,C) = \\overline{(A + \\overline{B})} + A \\cdot (B + C) + B \\cdot (B + \\overline{C})$, ¿a qué expresión mínima se llega?",
          "options": [
            "$f = A \\cdot C + B$",
            "$f = \\overline{A} \\cdot B + A \\cdot C$",
            "$f = A \\cdot B + C$",
            "$f = (A + B) \\cdot (B + C)$"
          ],
          "correctIndex": 0,
          "explain": "Tras De Morgan, distributiva, idempotencia y varias absorciones, la función se reduce a $f = A \\cdot C + B$."
        },
        {
          "id": "mc2-11-3",
          "q": "En la minimización, ¿qué propiedad justifica el paso $B \\cdot B = B$?",
          "options": [
            "Absorción de término",
            "Distributiva",
            "De Morgan negada",
            "Idempotencia"
          ],
          "correctIndex": 3,
          "explain": "$B \\cdot B = B$ es idempotencia: multiplicar una variable por sí misma no cambia nada."
        },
        {
          "id": "mc2-11-4",
          "q": "Para pasar la función a solo compuertas NAND, ¿con qué par de propiedades arranca el procedimiento del texto?",
          "options": [
            "Distributiva y luego conmutativa de los términos",
            "Absorción y luego elementos nulos sobre el resto",
            "Involutiva (doble negación) y luego De Morgan",
            "Idempotencia y luego identidad sobre cada término"
          ],
          "correctIndex": 2,
          "explain": "Partiendo de $f = A \\cdot C + B$ se aplica involutiva (doble negación sobre todo) y después De Morgan para que cada tramo quede como una NAND."
        },
        {
          "id": "mc2-11-5",
          "q": "¿Por qué conviene minimizar una función al diseñar un circuito, según el texto?",
          "options": [
            "Porque garantiza que la expresión mínima sea siempre única",
            "Porque menos compuertas implican un menor costo lógico",
            "Porque obliga a que cada término tenga todas las variables",
            "Porque permite usar siempre un único tipo de compuerta"
          ],
          "correctIndex": 1,
          "explain": "El texto lo dice claro: menos compuertas, más barato. Se optimiza para tener un menor costo lógico."
        }
      ],
      "ms": [
        {
          "id": "ms2-11-1",
          "q": "¿Cuáles de estas propiedades aparecen aplicadas en la cadena de minimización de $f(A,B,C)$ del texto?",
          "options": [
            "De Morgan",
            "Distributiva",
            "Idempotencia",
            "Absorción",
            "Consenso"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "La cadena usa De Morgan, distributiva, idempotencia y absorción (varias veces). El consenso no se aplica en esta minimización."
        },
        {
          "id": "ms2-11-2",
          "q": "Sobre los circuitos con un solo tipo de compuerta, ¿cuáles afirmaciones son correctas según el texto?",
          "options": [
            "Para NAND se parte de la expresión mínima $A \\cdot C + B$",
            "Para NOR se parte del producto de sumas $(A + B) \\cdot (B + C)$",
            "En ambos casos se usan involutiva y De Morgan",
            "Solo se puede implementar con NAND, nunca con NOR",
            "El procedimiento parte siempre de la forma sin simplificar"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "NAND parte de $A \\cdot C + B$, NOR del producto de sumas, y ambos usan involutiva y De Morgan. Se puede con NOR también, y se parte del resultado mínimo, no del original."
        },
        {
          "id": "ms2-11-3",
          "q": "¿Cuáles de estos tipos de compuerta menciona el texto al identificar los tramos de la función ejemplo $f(A,B,C)$?",
          "options": [
            "NOT",
            "NOR",
            "OR",
            "AND",
            "XOR"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Al marcar tramo por tramo aparecen NOT, NOR, OR, AND y la OR final. La XOR no figura en este ejemplo."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-11-1",
        "front": "¿Qué es una función lógica?",
        "back": "Una expresión booleana formada por variables binarias relacionadas mediante operaciones lógicas (compuertas)."
      },
      {
        "id": "fc2-11-2",
        "front": "¿Qué es el circuito lógico de una función?",
        "back": "Su representación gráfica con los símbolos de las compuertas, conectando entradas y salidas con cables (un punto indica conexión)."
      },
      {
        "id": "fc2-11-3",
        "front": "¿Cuándo una expresión es mínima?",
        "back": "Cuando ya no es posible reducirla. Ojo: la expresión mínima puede no ser única."
      },
      {
        "id": "fc2-11-4",
        "front": "Resultado de minimizar $f = \\overline{(A + \\overline{B})} + A(B+C) + B(B+\\overline{C})$",
        "back": "$f(A,B,C) = A \\cdot C + B$, usando De Morgan, distributiva, idempotencia y absorción."
      },
      {
        "id": "fc2-11-5",
        "front": "¿Por qué minimizar al diseñar?",
        "back": "Menos compuertas significan menor costo lógico: el circuito sale más barato."
      },
      {
        "id": "fc2-11-6",
        "front": "Implementación solo con NAND",
        "back": "Se parte de la mínima $A \\cdot C + B$ y se aplican involutiva (doble negación) y De Morgan hasta dejar todo como NAND."
      },
      {
        "id": "fc2-11-7",
        "front": "Implementación solo con NOR",
        "back": "Se parte del producto de sumas $(A + B) \\cdot (B + C)$ y se aplican involutiva y De Morgan hasta dejar todo como NOR."
      }
    ]
  },
  "12": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-12-1",
          "q": "En una forma canónica, cada término de la función contiene todas las variables.",
          "a": true,
          "explain": "Esa es la definición: en la forma canónica ningún término se queda sin alguna variable, todos las tienen todas."
        },
        {
          "id": "tf2-12-2",
          "q": "Para trabajar con minitérminos se usa la regla: variable normal vale $0$ y variable negada vale $1$.",
          "a": false,
          "explain": "Falso: esa es la regla de los maxitérminos. En minitérminos es al revés, $A = 1$ y $\\overline{A} = 0$."
        },
        {
          "id": "tf2-12-3",
          "q": "Cada minitérmino corresponde a un $1$ en la tabla de verdad de la función.",
          "a": true,
          "explain": "Sí: donde aparece un minitérmino, $f = 1$. Y a partir de la tabla también se puede leer la forma canónica."
        },
        {
          "id": "tf2-12-4",
          "q": "Cada maxitérmino corresponde a un $1$ en la tabla de verdad de la función.",
          "a": false,
          "explain": "Falso. Al revés que el minitérmino: cada maxitérmino corresponde a un $0$ en la tabla ($f = 0$)."
        },
        {
          "id": "tf2-12-5",
          "q": "Para que una función esté en forma canónica alcanza con que esté simplificada al máximo.",
          "a": false,
          "explain": "Falso. No importa que esté simplificada: lo que define la forma canónica es que cada término tenga todas las variables."
        }
      ],
      "mc": [
        {
          "id": "mc2-12-1",
          "q": "¿Cuáles son las dos maneras de escribir la forma canónica de una función?",
          "options": [
            "Suma de productos (SOP) y producto de sumas (POS)",
            "Forma mínima y forma expandida con todas las compuertas",
            "Forma con minitérminos y forma con la tabla reducida",
            "Forma OR anidada y forma AND con un solo tipo de compuerta"
          ],
          "correctIndex": 0,
          "explain": "Son dos: la forma canónica como suma de productos (SOP) y como producto de sumas (POS)."
        },
        {
          "id": "mc2-12-2",
          "q": "¿Qué es un minitérmino?",
          "options": [
            "Cada producto lógico que contiene todas las variables",
            "Cada suma lógica que reúne todas las variables negadas",
            "Cada término que aparece duplicado dentro de la expresión",
            "Cada variable que aparece complementada en algún término"
          ],
          "correctIndex": 0,
          "explain": "El minitérmino ($m$) es cada término de producto lógico que contiene todas las variables."
        },
        {
          "id": "mc2-12-3",
          "q": "Leyendo $\\overline{A} B C$ como minitérmino (regla normal=1, negada=0), ¿qué número de minitérmino le corresponde?",
          "options": [
            "$m_7$",
            "$m_5$",
            "$m_3$",
            "$m_6$"
          ],
          "correctIndex": 2,
          "explain": "$\\overline{A} B C$ es $011$ en binario, que en decimal da $3$. Por eso es $m_3$."
        },
        {
          "id": "mc2-12-4",
          "q": "La forma SOP canónica del ejemplo se resume como $\\sum m(2, 3, 5, 6, 7)$. ¿Qué representa esa notación?",
          "options": [
            "Los maxitérminos donde la función resultante vale $0$",
            "Las filas de la tabla que repiten alguna de sus variables",
            "Los términos que se eliminan al simplificar la función",
            "Los minitérminos cuya suma da $f = 1$"
          ],
          "correctIndex": 3,
          "explain": "Es la suma de minitérminos $m_2 + m_3 + m_5 + m_6 + m_7$: cada uno es un $1$ en la tabla de verdad de la función."
        },
        {
          "id": "mc2-12-5",
          "q": "Para leer un maxitérmino como número binario, ¿qué regla se aplica?",
          "options": [
            "Variable normal vale $1$ y variable negada vale $0$",
            "Variable normal vale $0$ y variable negada vale $1$",
            "Se cuenta cuántas variables negadas tiene el término",
            "Se suman los índices de las variables presentes"
          ],
          "correctIndex": 1,
          "explain": "En maxitérminos la regla se da vuelta respecto de los minitérminos: $A = 0$ y $\\overline{A} = 1$."
        }
      ],
      "ms": [
        {
          "id": "ms2-12-1",
          "q": "Sobre la SOP canónica del ejemplo $f = ABC + A\\overline{B}C + AB\\overline{C} + \\overline{A}BC + \\overline{A}B\\overline{C}$, ¿qué afirmaciones son correctas?",
          "options": [
            "Equivale a $\\sum m(2, 3, 5, 6, 7)$",
            "Cada término es un minitérmino con todas las variables",
            "Cada término marca un $1$ en la tabla de verdad",
            "Se obtuvo partiendo de $f = A \\cdot C + B$",
            "Se obtiene leyendo los $0$ de la tabla"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras están bien: la SOP es $\\sum m(2,3,5,6,7)$, cada término es un minitérmino completo que vale $1$, y salió de $f = A \\cdot C + B$. Lo último (leer los $0$) corresponde a la POS, no a la SOP."
        },
        {
          "id": "ms2-12-2",
          "q": "Sobre la POS canónica $f = (A+B+C)(A+B+\\overline{C})(\\overline{A}+B+C) = \\prod M(0,1,4)$, marcá lo correcto.",
          "options": [
            "Cada maxitérmino corresponde a un $0$ en la tabla",
            "La regla de lectura es $A = 0$ y $\\overline{A} = 1$",
            "Se parte de un producto de sumas como $(A+B) \\cdot (B+C)$",
            "Cada maxitérmino es un producto lógico de todas las variables",
            "Equivale a $\\prod M(0, 1, 4)$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Bien: maxitérminos son los $0$, la regla es normal=0/negada=1, se parte de un producto de sumas y queda $\\prod M(0,1,4)$. El error está en llamar al maxitérmino producto: es una suma lógica de todas las variables."
        },
        {
          "id": "ms2-12-3",
          "q": "¿Cuáles de estas afirmaciones sobre las formas canónicas son CORRECTAS según el texto?",
          "options": [
            "Una función simplificada al máximo ya está en forma canónica",
            "El minitérmino mira los unos y el maxitérmino los ceros",
            "Para armar la SOP se usan identidad, complemento y distributiva",
            "El maxitérmino es un término de producto con todas las variables",
            "Existe una única forma canónica posible para cada función"
          ],
          "correctIndexes": [
            1,
            2
          ],
          "explain": "Verdaderas: el truco de minitérmino-unos / maxitérmino-ceros, y que la SOP se arma con identidad, complemento y distributiva. Las otras son falsas: canónica no es lo mismo que simplificada, el maxitérmino es una suma, y hay dos formas canónicas (SOP y POS)."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-12-1",
        "front": "¿Qué es la forma canónica de una función?",
        "back": "Aquella en la que cada término tiene todas las variables de la función. No basta con que esté simplificada."
      },
      {
        "id": "fc2-12-2",
        "front": "Las dos formas canónicas",
        "back": "Suma de productos (SOP) y producto de sumas (POS)."
      },
      {
        "id": "fc2-12-3",
        "front": "Minitérmino ($m$)",
        "back": "Cada término de producto lógico que contiene todas las variables. Regla de lectura: $A = 1$, $\\overline{A} = 0$."
      },
      {
        "id": "fc2-12-4",
        "front": "Maxitérmino ($M$)",
        "back": "Cada término de suma lógica que contiene todas las variables. Regla de lectura (invertida): $A = 0$, $\\overline{A} = 1$."
      },
      {
        "id": "fc2-12-5",
        "front": "Minitérmino vs tabla de verdad",
        "back": "Cada minitérmino corresponde a un $1$ en la tabla ($f = 1$). Desde la tabla se puede obtener la forma canónica."
      },
      {
        "id": "fc2-12-6",
        "front": "Maxitérmino vs tabla de verdad",
        "back": "Cada maxitérmino corresponde a un $0$ en la tabla ($f = 0$). Es la misma tabla leída desde el lado opuesto al minitérmino."
      },
      {
        "id": "fc2-12-7",
        "front": "¿Cómo se leen $\\overline{A}BC$ y su número de minitérmino?",
        "back": "Con $A=1,\\overline{A}=0$: $\\overline{A}BC = 011 = 3$, o sea $m_3$."
      },
      {
        "id": "fc2-12-8",
        "front": "Notaciones compactas SOP y POS del ejemplo",
        "back": "SOP: $f = \\sum m(2,3,5,6,7)$. POS: $f = \\prod M(0,1,4)$."
      }
    ]
  },
  "13": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-13-1",
          "q": "Una expresión lógica mínima reduce los costos del circuito al disminuir la cantidad de compuertas y la cantidad de entradas de cada compuerta.",
          "a": true,
          "explain": "Tal cual lo dice el texto: la expresión irreducible baja la cantidad de compuertas y también las entradas de cada una, abaratando el circuito."
        },
        {
          "id": "tf2-13-2",
          "q": "El mapa de Karnaugh es el único método existente para hallar una expresión mínima equivalente a la de una función.",
          "a": false,
          "explain": "Falso: también se puede minimizar con los postulados y teoremas del álgebra de Boole. El de Karnaugh es otro método más, no el único."
        },
        {
          "id": "tf2-13-3",
          "q": "En el mapa de Karnaugh de 3 variables del ejemplo, las columnas BC se ordenan como 00, 01, 11, 10.",
          "a": true,
          "explain": "Sí, ojo con ese orden: no es binario corriente, va 00, 01, 11, 10 para que las celdas vecinas cambien una sola variable."
        },
        {
          "id": "tf2-13-4",
          "q": "Los valores fijos de los bordes izquierdo y superior del mapa se pueden reacomodar libremente sin afectar el método.",
          "a": false,
          "explain": "Falso: esos valores son fijos y no se deben modificar. Justamente esa ubicación estratégica es la que hace que el método funcione."
        },
        {
          "id": "tf2-13-5",
          "q": "Trabajando por minitérminos, una variable que se mantiene en 1 dentro de la agrupación va en el término sin negar.",
          "a": true,
          "explain": "Cierto: en minitérminos $A=1$ y $\\overline{A}=0$, así que si la variable queda en 1 en toda la agrupación, entra al producto sin negar, como pasó con B."
        }
      ],
      "mc": [
        {
          "id": "mc2-13-1",
          "q": "¿Cuántas celdas tiene el mapa de Karnaugh de la función de 3 variables del ejemplo?",
          "options": [
            "Cuatro celdas, una por cada par de variables del mapa",
            "Ocho celdas, porque $2^3$ da ese total de casillas",
            "Seis celdas, una por cada fila usada de la tabla",
            "Doce celdas, sumando filas y columnas del diagrama"
          ],
          "correctIndex": 1,
          "explain": "Para 3 variables el mapa tiene $2^3 = 8$ celdas. En general, una función de $n$ variables da $2^n$ celdas."
        },
        {
          "id": "mc2-13-2",
          "q": "En la minimización por minitérminos del ejemplo, ¿qué término aporta la agrupación de $m_2$, $m_3$, $m_6$ y $m_7$?",
          "options": [
            "El término $A \\cdot C$ porque A y C se mantienen",
            "El término $\\overline{B}$ porque B cambia de valor",
            "El término $B$ porque solo B se mantiene en 1",
            "El término $B \\cdot C$ porque B y C no varían"
          ],
          "correctIndex": 2,
          "explain": "En esa agrupación A cambia y C cambia, así que se descartan; solo B se mantiene en 1, y al ser minitérminos va sin negar. Queda $B$."
        },
        {
          "id": "mc2-13-3",
          "q": "¿Cuál es la expresión mínima por minitérminos a la que se llega en el ejemplo de la función?",
          "options": [
            "La expresión $A \\cdot C + B$ con sus dos términos suma",
            "La expresión $(A + B) \\cdot (B + C)$ como producto",
            "La expresión $A \\cdot B + C$ con sus dos términos suma",
            "La expresión $\\overline{A} \\cdot C + B$ con sus dos términos"
          ],
          "correctIndex": 0,
          "explain": "Por unos sale $A \\cdot C + B$, que coincide clavada con la que se había obtenido a mano con álgebra de Boole."
        },
        {
          "id": "mc2-13-4",
          "q": "Al minimizar por maxitérminos (por ceros), ¿cómo se combinan los términos obtenidos de las agrupaciones?",
          "options": [
            "Se suman, porque cada término ya es un producto",
            "Se restan, dejando el término de mayor peso",
            "Se multiplican, porque cada término es una suma",
            "Se niegan y luego se suman entre sí los productos"
          ],
          "correctIndex": 2,
          "explain": "Por ceros los términos son sumas (como $B+C$ y $A+B$) y se multiplican entre sí, dando $(A+B)\\cdot(B+C)$."
        }
      ],
      "ms": [
        {
          "id": "ms2-13-1",
          "q": "¿Cuáles de estas afirmaciones sobre las agrupaciones por unos del ejemplo son correctas?",
          "options": [
            "Los grupos deben ser de $2^n$ celdas y rectangulares",
            "Los grupos conviene hacerlos lo más grandes posibles",
            "En cada grupo se descartan las variables que cambian",
            "Se permite cualquier forma de grupo, incluso en L o T",
            "Como son minitérminos, los términos se restan al final"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Verdaderas: grupos de $2^n$, rectangulares, lo más grandes posible, y se descarta lo que cambia. Falsas las otras dos: la forma debe ser rectangular y los minitérminos se suman, no se restan."
        },
        {
          "id": "ms2-13-2",
          "q": "Según el texto, ¿cuáles celdas de la tabla de verdad de $f(A,B,C)$ tienen salida igual a 1?",
          "options": [
            "La fila 0 con entrada $000$",
            "La fila 2 con entrada $010$",
            "La fila 4 con entrada $100$",
            "La fila 5 con entrada $101$",
            "La fila 7 con entrada $111$"
          ],
          "correctIndexes": [
            1,
            3,
            4
          ],
          "explain": "La tabla da 1 en las filas 2, 3, 5, 6 y 7. De las opciones, valen 1 las filas 2, 5 y 7; las filas 0 y 4 dan 0."
        },
        {
          "id": "ms2-13-3",
          "q": "¿Cuáles de estos enunciados sobre la minimización por maxitérminos son verdaderos?",
          "options": [
            "Para maxitérminos se cumple que $A=1$ y $\\overline{A}=0$",
            "La agrupación por ceros da el término producto $A \\cdot C$",
            "Por ceros se obtiene la expresión $A \\cdot C + B$ directa",
            "Por ceros se agrupan unos y ceros juntos en un mismo grupo",
            "La expresión por ceros y por unos terminan siendo distintas"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. Para maxitérminos $A=0$ y $\\overline{A}=1$; las agrupaciones dan sumas como $B+C$ y $A+B$ (no productos); por ceros sale $(A+B)\\cdot(B+C)$; se agrupan solo ceros; y ambas expresiones son equivalentes."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-13-1",
        "front": "¿Qué es el mapa de Karnaugh?",
        "back": "Un diagrama de celdas que ubica las filas de la tabla de verdad de forma estratégica para obtener, con pasos sencillos, una expresión mínima equivalente a la función."
      },
      {
        "id": "fc2-13-2",
        "front": "¿Cuántas celdas tiene el mapa para una función de $n$ variables?",
        "back": "Tiene $2^n$ celdas. Por ejemplo, con 3 variables son $2^3 = 8$ celdas."
      },
      {
        "id": "fc2-13-3",
        "front": "Orden de las columnas BC en el mapa de 3 variables",
        "back": "Se ordenan como 00, 01, 11, 10, no en binario corriente, para que celdas vecinas cambien una sola variable."
      },
      {
        "id": "fc2-13-4",
        "front": "Minimización por minitérminos (por unos)",
        "back": "Se ubican las celdas con salida 1, se agrupan en grupos de $2^n$ rectangulares y máximos; en cada grupo las variables que se mantienen forman un producto y los términos se suman. Regla: $A=1$, $\\overline{A}=0$."
      },
      {
        "id": "fc2-13-5",
        "front": "Minimización por maxitérminos (por ceros)",
        "back": "Se ubican las celdas con salida 0, se agrupan los ceros; cada término es una suma y los términos se multiplican entre sí. Regla invertida: $A=0$, $\\overline{A}=1$."
      },
      {
        "id": "fc2-13-6",
        "front": "Expresiones del ejemplo por unos y por ceros",
        "back": "Por unos: $f = A \\cdot C + B$. Por ceros: $f = (A+B)\\cdot(B+C)$. Son equivalentes: la distributiva sobre la segunda lleva a la primera."
      },
      {
        "id": "fc2-13-7",
        "front": "¿Por qué los bordes del mapa son fijos?",
        "back": "Porque su ubicación estratégica (lados izquierdo y superior) es lo que permite que el método minimice; no se deben modificar."
      },
      {
        "id": "fc2-13-8",
        "front": "¿Qué condición deben cumplir las agrupaciones de unos?",
        "back": "Ser de $2^n$ celdas, de forma rectangular o cuadrada, y lo más grandes posibles para reducir más variables del término."
      }
    ]
  },
  "14": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-14-1",
          "q": "El mapa de Karnaugh solo se utiliza para funciones de hasta 4 variables, aunque en teoría podría usarse con más.",
          "a": true,
          "explain": "Exacto: existen mapas de 2, 3 y 4 variables; con más variables es posible pero en la práctica solo se usa hasta 4."
        },
        {
          "id": "tf2-14-2",
          "q": "Dos celdas son adyacentes cuando entre una y otra cambia el valor de exactamente una variable.",
          "a": true,
          "explain": "Sí: adyacencia significa que solo una variable cambia de valor, y en el mapa eso ocurre cuando comparten lado."
        },
        {
          "id": "tf2-14-3",
          "q": "Está permitido hacer agrupaciones de 3 celdas siempre que sean adyacentes entre sí.",
          "a": false,
          "explain": "Falso: las agrupaciones deben ser de potencia de 2. Una de 3 celdas no está permitida."
        },
        {
          "id": "tf2-14-4",
          "q": "La celda 2 y la celda 7 del mapa de 4 variables son adyacentes entre sí.",
          "a": false,
          "explain": "Falso: no comparten lado, así que no son adyacentes. La 2 sí es adyacente a la 3 y a la 10 (esta última por envolvente)."
        },
        {
          "id": "tf2-14-5",
          "q": "Cuanto más grande es una agrupación, mayor es la cantidad de variables que quedan en el término.",
          "a": false,
          "explain": "Falso, es al revés: cuanto más grande la agrupación, MENOS variables quedan en el término, acercándose a la expresión mínima."
        }
      ],
      "mc": [
        {
          "id": "mc2-14-1",
          "q": "¿Qué dimensiones tiene el mapa de Karnaugh para una función de 4 variables?",
          "options": [
            "Un mapa de $2 \\times 4$, con un total de 8 celdas",
            "Un mapa de $2 \\times 2$, con un total de 4 celdas",
            "Un mapa de $4 \\times 4$, con un total de 16 celdas",
            "Un mapa de $4 \\times 8$, con un total de 32 celdas"
          ],
          "correctIndex": 2,
          "explain": "Para 4 variables el mapa es de $4 \\times 4$, o sea $2^4 = 16$ celdas. El de 2 es 2x2 y el de 3 es 2x4."
        },
        {
          "id": "mc2-14-2",
          "q": "¿Por qué la celda 2 y la celda 10 resultan adyacentes aunque no parezca a simple vista?",
          "options": [
            "Porque comparten una esquina dentro del mapa",
            "Porque ambas tienen exactamente el mismo valor en A",
            "Porque cambian dos variables a la vez entre ellas",
            "Porque comparten lado por el efecto envolvente"
          ],
          "correctIndex": 3,
          "explain": "Se tocan por envolvente: C y D iguales, B en cero en ambas y solo cambia A. Una sola variable cambia, así que son vecinas."
        },
        {
          "id": "mc2-14-3",
          "q": "¿Cómo se define un implicante primo (IP)?",
          "options": [
            "Cualquier agrupación de $2^n$ celdas del mapa",
            "Una agrupación que cubre una sola celda aislada",
            "Un implicante con celdas no contenidas en otro",
            "Cualquier agrupación máxima de ceros o de unos"
          ],
          "correctIndex": 3,
          "explain": "El IP es una agrupación máxima de ceros o unos. La primera describe un implicante a secas y la última corresponde al IPE."
        },
        {
          "id": "mc2-14-4",
          "q": "¿Qué caracteriza a un implicante primo esencial (IPE)?",
          "options": [
            "Tiene alguna celda no contenida en ningún otro IP",
            "Es siempre la agrupación más chica posible del mapa",
            "Es cualquier agrupación de $2^n$ celdas de unos",
            "Cubre solo celdas que ya cubren otros implicantes"
          ],
          "correctIndex": 0,
          "explain": "El IPE tiene al menos una celda que ningún otro IP contiene, por eso siempre forma parte de la expresión mínima."
        }
      ],
      "ms": [
        {
          "id": "ms2-14-1",
          "q": "¿Cuáles de estas agrupaciones están permitidas según las reglas del texto?",
          "options": [
            "Las celdas 2, 3, 6 y 7 en una sola agrupación",
            "Las celdas 1, 2, 3 y 6 en una sola agrupación",
            "Las celdas 0, 2, 8 y 10 por envolvente",
            "Una agrupación de 3 celdas adyacentes en fila",
            "Una agrupación en forma de L de cuatro celdas"
          ],
          "correctIndexes": [
            0,
            2
          ],
          "explain": "Válidas: 2,3,6,7 (rectangular) y 0,2,8,10 (envolvente). Inválidas: 1,2,3,6 no es rectangular, la de 3 celdas no es potencia de 2, y la forma de L está prohibida."
        },
        {
          "id": "ms2-14-2",
          "q": "¿Cuáles afirmaciones sobre las agrupaciones máximas y los implicantes son verdaderas?",
          "options": [
            "Siempre se elige la agrupación con más celdas posibles",
            "El IP es cualquier agrupación máxima de ceros o unos",
            "Una agrupación mayor deja menos variables en el término",
            "El IPE puede quedar fuera de la expresión mínima",
            "En el mapa se marcan todos los implicantes, no solo los primos"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Verdaderas las tres primeras. Falsas: el IPE siempre está en la expresión mínima, y en el mapa se marcan solo los implicantes primos."
        },
        {
          "id": "ms2-14-3",
          "q": "¿Cuáles de estos enunciados sobre la expresión mínima y la adyacencia son correctos?",
          "options": [
            "La expresión mínima siempre es única para cada función",
            "Puede haber más de una expresión mínima equivalente",
            "Adyacencia exige que cambien dos variables a la vez",
            "La primera y la última columna del mapa son vecinas",
            "Agrupar celdas adyacentes aumenta variables del término"
          ],
          "correctIndexes": [
            1,
            3
          ],
          "explain": "Correctas: la expresión mínima puede no ser única, y por envolvente la primera y última columna son vecinas. Falsas: adyacencia es cambio de una sola variable y agrupar adyacentes reduce variables, no las aumenta."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-14-1",
        "front": "Tamaños de mapa según cantidad de variables",
        "back": "2 variables: mapa $2 \\times 2$ (4 celdas). 3 variables: $2 \\times 4$ (8 celdas). 4 variables: $4 \\times 4$ (16 celdas). En general $2^m$ celdas."
      },
      {
        "id": "fc2-14-2",
        "front": "¿Cuándo dos celdas son adyacentes?",
        "back": "Cuando de una a otra cambia el valor de una sola variable. En el mapa eso ocurre cuando comparten lado, incluso por el efecto envolvente de los bordes."
      },
      {
        "id": "fc2-14-3",
        "front": "Efecto envolvente de los bordes",
        "back": "La primera y la última columna son vecinas entre sí, y lo mismo la primera y la última fila. Por eso celdas como la 2 y la 10 (o 0,2,8,10) pueden agruparse."
      },
      {
        "id": "fc2-14-4",
        "front": "Reglas de las agrupaciones",
        "back": "Deben ser de $2^n$ celdas (potencia de 2, nunca de 3), de forma rectangular o cuadrada (nada de L, T u otras) y lo más grandes posibles."
      },
      {
        "id": "fc2-14-5",
        "front": "Implicante",
        "back": "Cualquier agrupación de $2^n$ celdas, sea de unos o de ceros."
      },
      {
        "id": "fc2-14-6",
        "front": "Implicante primo (IP)",
        "back": "Cualquier agrupación máxima de ceros o unos. En el mapa se marcan solo los IP, porque así se llega a la expresión mínima."
      },
      {
        "id": "fc2-14-7",
        "front": "Implicante primo esencial (IPE)",
        "back": "Un IP que tiene al menos una celda no contenida en ningún otro IP. Siempre forma parte de la expresión mínima."
      },
      {
        "id": "fc2-14-8",
        "front": "¿La expresión mínima es única?",
        "back": "No necesariamente. Puede haber más de una expresión mínima, con la misma cantidad de términos y de variables en cada término."
      }
    ]
  },
  "15": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-15-1",
          "q": "El método de la tabla que cruza implicantes primos contra minitérminos se conoce como algoritmo de Quine-McCluskey.",
          "a": true,
          "explain": "Sí: ese paso 3 con la tabla es el algoritmo de Quine-McCluskey, útil para reducir funciones con muchas variables."
        },
        {
          "id": "tf2-15-2",
          "q": "En la tabla de implicantes primos, una columna con un solo tick indica un implicante primo esencial.",
          "a": true,
          "explain": "Cierto: si un minitérmino queda cubierto por un único implicante primo (un solo tick), ese implicante es esencial."
        },
        {
          "id": "tf2-15-3",
          "q": "Las X de una función no totalmente definida deben tomarse siempre como '1' para agrandar agrupaciones.",
          "a": false,
          "explain": "Falso: las X pueden tomar '1' o '0' según convenga para agrupar; no es siempre '1'. Y no se agrupan X solas sin ningún uno."
        },
        {
          "id": "tf2-15-4",
          "q": "Está permitido formar una agrupación compuesta únicamente por X, sin ningún 1 dentro.",
          "a": false,
          "explain": "Falso: las X solo sirven para agrandar agrupaciones que ya contienen unos. Una agrupación de puras X no se hace."
        },
        {
          "id": "tf2-15-5",
          "q": "En el ejemplo $4\\times4$ se eligió el implicante $\\overline{A}CD$ porque cubre con un solo término producto los minitérminos $m_3$ y $m_7$ que faltaban.",
          "a": true,
          "explain": "Sí: usar los otros dos IP también cubriría todo, pero con dos ANDs en lugar de uno; $\\overline{A}CD$ es más óptimo."
        }
      ],
      "mc": [
        {
          "id": "mc2-15-1",
          "q": "En el ejemplo $4\\times4$ con $f = \\sum m(3,5,7,10,11,13)$, ¿cuántos implicantes primos quedan al marcar las agrupaciones máximas?",
          "options": [
            "Quedan tres implicantes, todos de cuatro celdas",
            "Quedan cinco implicantes, cada uno de dos celdas",
            "Quedan dos implicantes, cada uno de cuatro celdas",
            "Quedan seis implicantes, uno por cada minitérmino"
          ],
          "correctIndex": 1,
          "explain": "Quedan cinco implicantes primos, y cada uno es un par de celdas (agrupación de 2)."
        },
        {
          "id": "mc2-15-2",
          "q": "¿Cuál es la expresión mínima obtenida para $f = \\sum m(3,5,7,10,11,13)$?",
          "options": [
            "La expresión $\\overline{C}D + BD$ con sus dos términos",
            "La expresión $A\\overline{B}C + \\overline{A}CD$ de dos términos",
            "La expresión $B\\overline{C}D + A\\overline{B}C + \\overline{A}CD$",
            "La expresión $B\\overline{C}D + ABC + \\overline{A}BD$ completa"
          ],
          "correctIndex": 2,
          "explain": "La mínima es $B\\overline{C}D + A\\overline{B}C + \\overline{A}CD$: los dos IPE más $\\overline{A}CD$ que cubre $m_3$ y $m_7$."
        },
        {
          "id": "mc2-15-3",
          "q": "¿Cómo se escribe una función no totalmente definida que vale 1 en los minitérminos 1, 5, 7 y 9, con don't care en 10 a 15?",
          "options": [
            "Como $\\sum m(1,5,7,9) + d(10,11,12,13,14,15)$",
            "Como $\\sum m(1,5,7,9,10,11,12,13,14,15)$ total",
            "Como $\\sum m(10,11,12,13,14,15) + d(1,5,7,9)$",
            "Como $\\prod M(1,5,7,9) \\cdot d(10,11,12,13,14)$"
          ],
          "correctIndex": 0,
          "explain": "Se suman los minitérminos definidos y aparte se listan los don't care con la letra $d$: $\\sum m(1,5,7,9) + d(10,11,12,13,14,15)$."
        },
        {
          "id": "mc2-15-4",
          "q": "Aprovechando las X como '1', ¿cuál es la expresión mínima del circuito que vale 1 en 1, 5, 7 y 9?",
          "options": [
            "La expresión $\\overline{C}D + BD$ de dos términos",
            "La expresión $\\overline{C}D + ABD$ con tres variables",
            "La expresión $CD + B\\overline{D}$ de dos términos suma",
            "La expresión $\\overline{C}D + BD + AC$ con tres términos"
          ],
          "correctIndex": 0,
          "explain": "Tomando las X de 11, 13 y 15 como 1, los IPE $\\overline{C}D$ y $BD$ agrupan todos los unos, dando $\\overline{C}D + BD$."
        }
      ],
      "ms": [
        {
          "id": "ms2-15-1",
          "q": "¿Cuáles son los tres pasos del procedimiento de minimización del ejemplo $4\\times4$?",
          "options": [
            "Ubicar los minitérminos en el mapa de 16 celdas",
            "Marcar todos los implicantes primos posibles",
            "Armar la tabla para identificar los esenciales",
            "Negar la función antes de ubicar los ceros",
            "Sumar todos los maxitérminos de la tabla"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Los tres pasos son: 1) ubicar minitérminos, 2) marcar todos los implicantes primos, 3) armar la tabla para ver cuáles son esenciales. Las otras dos no son parte del método."
        },
        {
          "id": "ms2-15-2",
          "q": "¿Cuáles de estos implicantes primos del ejemplo $4\\times4$ resultaron esenciales (IPE)?",
          "options": [
            "El implicante $B\\overline{C}D$, único que contiene a $m_{13}$",
            "El implicante $A\\overline{B}C$, único que contiene a $m_{10}$",
            "El implicante $\\overline{A}CD$, único que contiene a $m_5$",
            "El implicante $\\overline{C}D$, esencial por cubrir $m_1$",
            "El implicante $BD$, único que contiene a $m_{11}$"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "Esenciales: $B\\overline{C}D$ (único con $m_{13}$) y $A\\overline{B}C$ (único con $m_{10}$). $\\overline{A}CD$ se agrega para cubrir $m_3$ y $m_7$ pero no por columna de un solo tick; $\\overline{C}D$ y $BD$ son del otro ejemplo (función no definida)."
        },
        {
          "id": "ms2-15-3",
          "q": "¿Cuáles afirmaciones sobre las funciones no totalmente definidas son correctas?",
          "options": [
            "Las X indican salidas que no tienen valor asignado",
            "Las X solo sirven para agrandar grupos que ya tienen unos",
            "En inglés a estas condiciones se las llama don't care",
            "Las X obligan a tomar siempre el valor '0' al agrupar",
            "Las X se escriben con la letra $d$ en la función"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Correctas: las X son salidas sin valor asignado, sirven para agrandar grupos con unos, se llaman don't care y se anotan con $d$. Falsa la cuarta: pueden tomar '1' o '0' según convenga, no siempre '0'."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-15-1",
        "front": "Tres pasos para minimizar por Karnaugh (ejemplo $4\\times4$)",
        "back": "1) Ubicar los minitérminos en el mapa. 2) Marcar todos los implicantes primos. 3) Armar una tabla para identificar cuáles son esenciales."
      },
      {
        "id": "fc2-15-2",
        "front": "¿Qué indica una columna con un solo tick en la tabla de IP?",
        "back": "Que ese minitérmino está cubierto por un único implicante primo, lo que lo señala como implicante primo esencial (IPE)."
      },
      {
        "id": "fc2-15-3",
        "front": "Algoritmo de Quine-McCluskey",
        "back": "Es el método de la tabla del paso 3 (implicantes primos contra minitérminos). Útil para reducir funciones con gran cantidad de variables."
      },
      {
        "id": "fc2-15-4",
        "front": "Expresión mínima de $\\sum m(3,5,7,10,11,13)$",
        "back": "$f(A,B,C,D) = B\\overline{C}D + A\\overline{B}C + \\overline{A}CD$. Los dos primeros son IPE; $\\overline{A}CD$ cubre $m_3$ y $m_7$ con un solo término."
      },
      {
        "id": "fc2-15-5",
        "front": "¿Qué es una función no totalmente definida?",
        "back": "Una función con salidas sin valor asignado, marcadas con X (don't care), porque corresponden a entradas que se espera que nunca lleguen."
      },
      {
        "id": "fc2-15-6",
        "front": "Notación de los don't care en la función",
        "back": "Se suman los minitérminos definidos y aparte se listan los don't care con la letra $d$. Ej: $\\sum m(1,5,7,9) + d(10,11,12,13,14,15)$."
      },
      {
        "id": "fc2-15-7",
        "front": "¿Cómo se usan las X al agrupar?",
        "back": "Pueden tomar '1' o '0' según convenga para agrupar. Regla clave: no se agrupan X que no contengan ningún 1; solo sirven para agrandar grupos con unos."
      },
      {
        "id": "fc2-15-8",
        "front": "Resultado del circuito con don't care aprovechados",
        "back": "Tomando las X de 11, 13 y 15 como 1, los IPE $\\overline{C}D$ y $BD$ cubren todos los unos: $f(A,B,C,D) = \\overline{C}D + BD$."
      }
    ]
  },
  "16": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-16-1",
          "q": "Una señal analógica puede tomar infinitos valores, por lo que su gráfica es continua.",
          "a": true,
          "explain": "Tal cual: la analógica es continua y admite infinitos valores, como una curva suave en el tiempo."
        },
        {
          "id": "tf2-16-2",
          "q": "Las señales digitales pueden tomar infinitos valores dentro de un rango continuo.",
          "a": false,
          "explain": "Falso: las digitales toman una cantidad finita de valores (son discretas), por eso su gráfica es discontinua."
        },
        {
          "id": "tf2-16-3",
          "q": "Las señales digitales binarias son las que pueden tomar solamente dos valores o estados, 0 y 1.",
          "a": true,
          "explain": "Sí: binaria implica dos estados nada más, $0$ y $1$, como una llave que abre o cierra."
        },
        {
          "id": "tf2-16-4",
          "q": "El 0 y el 1 lógicos corresponden cada uno a un valor de tensión puntual y exacto.",
          "a": false,
          "explain": "Falso: cada nivel representa un rango de tensiones, no un voltaje puntual. Por eso existe además una zona indeterminada entre ambos."
        },
        {
          "id": "tf2-16-5",
          "q": "En la lógica positiva, el nivel bajo $V_L$ se representa con el 0 y el nivel alto $V_H$ con el 1.",
          "a": true,
          "explain": "Correcto: lógica positiva asigna el cero lógico al nivel bajo (Low) y el uno lógico al nivel alto (High)."
        }
      ],
      "mc": [
        {
          "id": "mc2-16-1",
          "q": "¿Qué distingue de fondo a una señal analógica de una digital?",
          "options": [
            "La analógica es discreta y la digital continua siempre",
            "La analógica toma infinitos valores y la digital finitos",
            "Ambas toman infinitos valores pero a distinta escala",
            "La digital es una curva suave y la analógica escalones"
          ],
          "correctIndex": 1,
          "explain": "La analógica admite infinitos valores (continua) y la digital una cantidad finita (discreta). El resto invierte o confunde los conceptos."
        },
        {
          "id": "mc2-16-2",
          "q": "En un circuito con interruptor, fuente y lámpara, ¿cómo se indica que el interruptor está cerrado?",
          "options": [
            "Con el valor $0$, igual que la lámpara apagada",
            "Con un valor intermedio de la zona indeterminada",
            "Con el valor $0$ si la fuente está conectada al circuito",
            "Con el valor $1$, igual que la lámpara encendida"
          ],
          "correctIndex": 3,
          "explain": "Interruptor cerrado se indica con $1$, lo mismo que lámpara encendida. Abierto y apagado serían $0$."
        },
        {
          "id": "mc2-16-3",
          "q": "Según el ejemplo del texto, ¿qué rango de tensión puede representar el nivel alto (1 lógico)?",
          "options": [
            "Desde $0\\,V$ hasta $1{,}5\\,V$ de tensión aplicada",
            "Desde $3{,}3\\,V$ hasta $5\\,V$ de tensión aplicada",
            "Desde $1{,}5\\,V$ hasta $3{,}3\\,V$ de tensión aplicada",
            "Desde $0\\,V$ hasta $5\\,V$ de tensión aplicada"
          ],
          "correctIndex": 1,
          "explain": "El ejemplo da el nivel alto entre $3{,}3\\,V$ y $5\\,V$. El rango $0$ a $1{,}5\\,V$ es el nivel bajo y $1{,}5$ a $3{,}3\\,V$ la zona indeterminada."
        },
        {
          "id": "mc2-16-4",
          "q": "¿A qué corresponde el rango indeterminado de tensión entre el nivel bajo y el alto?",
          "options": [
            "A la zona de transición sin nivel lógico definido",
            "A un tercer estado lógico válido llamado neutro",
            "Al nivel alto cuando la fuente baja su tensión",
            "Al nivel bajo extendido por encima de $1{,}5\\,V$"
          ],
          "correctIndex": 0,
          "explain": "Es la zona de transición donde el nivel lógico no está definido; no es un tercer estado válido ni una extensión de los otros."
        }
      ],
      "ms": [
        {
          "id": "ms2-16-1",
          "q": "¿Cuáles de estas afirmaciones sobre señales analógicas y digitales son correctas?",
          "options": [
            "La analógica toma infinitos valores y es continua",
            "La digital toma una cantidad finita de valores",
            "La gráfica de la señal digital es discontinua",
            "La señal analógica es siempre de dos niveles fijos",
            "Una calculadora es un ejemplo de sistema digital"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Verdaderas: analógica infinita y continua, digital finita y discontinua, y la calculadora es sistema digital. Falsa: la de dos niveles fijos describe a la digital binaria, no a la analógica."
        },
        {
          "id": "ms2-16-2",
          "q": "¿Cuáles de estos rangos y asignaciones de tensión coinciden con el ejemplo del texto?",
          "options": [
            "El nivel bajo (0) abarca de $0\\,V$ a $1{,}5\\,V$",
            "El nivel alto (1) abarca de $3{,}3\\,V$ a $5\\,V$",
            "La zona indeterminada va de $1{,}5\\,V$ a $3{,}3\\,V$",
            "El nivel bajo (0) abarca de $0\\,V$ a $3{,}3\\,V$",
            "El nivel alto (1) abarca de $1{,}5\\,V$ a $5\\,V$"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son los rangos del ejemplo. Las dos últimas mezclan los límites: el bajo llega a $1{,}5\\,V$ y el alto arranca en $3{,}3\\,V$, no en $1{,}5\\,V$."
        },
        {
          "id": "ms2-16-3",
          "q": "¿Cuáles de estos enunciados sobre los niveles lógicos de tensión son verdaderos?",
          "options": [
            "En lógica positiva $V_L$ se representa con el 0",
            "En lógica positiva $V_H$ se representa con el 1",
            "Cada nivel lógico representa un rango de tensiones",
            "El nivel lógico de tensión es propio de cada CI",
            "El cero lógico siempre vale exactamente $0\\,V$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Verdaderas las cuatro primeras: $V_L=0$, $V_H=1$, cada nivel es un rango, y el nivel lógico es una característica de los circuitos integrados. Falsa la última: el 0 es un rango (ej. $0$ a $1{,}5\\,V$), no un valor exacto."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-16-1",
        "front": "Señal analógica vs digital",
        "back": "Analógica: toma infinitos valores, gráfica continua. Digital: toma una cantidad finita de valores, gráfica discontinua."
      },
      {
        "id": "fc2-16-2",
        "front": "¿Qué es una señal digital binaria?",
        "back": "Una señal digital que puede tomar solamente dos valores o estados, $0$ y $1$, como la tensión o la corriente eléctrica."
      },
      {
        "id": "fc2-16-3",
        "front": "Ejemplo del interruptor y la lámpara",
        "back": "Interruptor abierto = 0, cerrado = 1. Lámpara apagada = 0, encendida = 1."
      },
      {
        "id": "fc2-16-4",
        "front": "Lógica positiva: niveles y valores lógicos",
        "back": "El nivel bajo $V_L$ (Low) se representa con el 0 (cero lógico) y el nivel alto $V_H$ (High) con el 1 (uno lógico)."
      },
      {
        "id": "fc2-16-5",
        "front": "¿Los niveles lógicos son tensiones puntuales?",
        "back": "No: cada nivel representa un rango de tensiones. Ej: el 0 de $0\\,V$ a $1{,}5\\,V$ y el 1 de $3{,}3\\,V$ a $5\\,V$."
      },
      {
        "id": "fc2-16-6",
        "front": "Zona indeterminada de tensión",
        "back": "Es el rango de transición (ej. $1{,}5\\,V$ a $3{,}3\\,V$) donde el nivel lógico no está definido."
      },
      {
        "id": "fc2-16-7",
        "front": "¿Qué son los sistemas digitales?",
        "back": "Dispositivos (computadora, celular, calculadora) donde la información se representa con cantidades físicas que toman solo una cantidad finita de valores (señales discretas)."
      },
      {
        "id": "fc2-16-8",
        "front": "Nivel lógico de tensión como característica",
        "back": "El nivel lógico de tensión es una de las características de los circuitos integrados."
      }
    ]
  },
  "17": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-17-1",
          "q": "Las compuertas lógicas y demás elementos de un sistema digital se encuentran disponibles dentro de un chip llamado circuito integrado (CI).",
          "a": true,
          "explain": "Tal cual lo dice el texto: las compuertas son los elementos básicos y vienen empaquetadas dentro de un chip conocido como circuito integrado."
        },
        {
          "id": "tf2-17-2",
          "q": "El circuito integrado 7400 contiene cuatro compuertas NAND empaquetadas en un solo chip.",
          "a": true,
          "explain": "El texto describe al 7400 justamente como cuatro compuertas NAND en un chip, con su VCC y GND."
        },
        {
          "id": "tf2-17-3",
          "q": "Según la escala de integración, un chip de tipo SSI integra entre 10 y 100 compuertas en un mismo encapsulado.",
          "a": false,
          "explain": "Ojo: SSI (pequeña escala) es hasta 10 compuertas. El rango de 10 a 100 corresponde a la MSI, no a la SSI."
        },
        {
          "id": "tf2-17-4",
          "q": "El cambio de nivel lógico de $0$ a $1$ en una señal real es instantáneo, sin ningún retardo entre entrada y salida.",
          "a": false,
          "explain": "Eso es la representación ideal. En la realidad el cambio no es instantáneo y la salida tarda un toque respecto de la entrada: ese desfasaje es el retardo de propagación."
        },
        {
          "id": "tf2-17-5",
          "q": "Las familias lógicas TTL y CMOS se diferencian en la tecnología de transistores: TTL usa bipolares y CMOS unipolares de efecto de campo.",
          "a": true,
          "explain": "Justo así: TTL está basada en transistores bipolares y CMOS en unipolares (efecto de campo). Comparten el ser compatibles entre sí dentro de cada familia."
        }
      ],
      "mc": [
        {
          "id": "mc2-17-1",
          "q": "¿Qué nivel de la escala de integración corresponde a un chip que integra más de 100.000 compuertas?",
          "options": [
            "LSI, grande escala de integración lógica",
            "VLSI, muy grande escala de integración",
            "ULSI, ultra grande escala de integración",
            "MSI, mediana escala de integración"
          ],
          "correctIndex": 2,
          "explain": "ULSI (Ultra Large) es la escala de más de 100.000 compuertas, usada en microcomputadores y memorias."
        },
        {
          "id": "mc2-17-2",
          "q": "Según la tabla de escalas, ¿con qué tipo de circuitos se asocia el nivel MSI?",
          "options": [
            "Microprocesadores y memorias grandes",
            "Sumadores y multiplexores variados",
            "Compuertas lógicas individuales sueltas",
            "Microcontroladores y memorias medianas"
          ],
          "correctIndex": 1,
          "explain": "La MSI (10 a 100 compuertas) se asocia a funciones como sumadores y multiplexores, según la tabla del texto."
        },
        {
          "id": "mc2-17-3",
          "q": "¿Cómo se llama el retardo que experimentan las señales al pasar por una compuerta?",
          "options": [
            "Tiempo de habilitación lógica",
            "Retardo de propagación de la señal",
            "Desfasaje de nivel instantáneo",
            "Tiempo de integración de salida"
          ],
          "correctIndex": 1,
          "explain": "Ese retardo entre que cambia la entrada y cambia la salida es el retardo (o tiempo) de propagación."
        },
        {
          "id": "mc2-17-4",
          "q": "¿Dónde brindan los fabricantes las características de un circuito integrado (niveles lógicos, tiempos de propagación, etc.)?",
          "options": [
            "En la escala de integración del chip",
            "En la tabla interna de la familia",
            "En la hoja de datos o datasheet",
            "En el diagrama de pines del chip"
          ],
          "correctIndex": 2,
          "explain": "El texto lo dice claro: todas esas características vienen en la hoja de datos, conocida como datasheet."
        }
      ],
      "ms": [
        {
          "id": "ms2-17-1",
          "q": "Según el texto, ¿qué afirmaciones sobre la escala de integración son correctas?",
          "options": [
            "La clasificación depende de la cantidad de compuertas del chip",
            "La escala SSI integra hasta 10 compuertas lógicas",
            "La escala VLSI abarca de 10.000 a 100.000 compuertas",
            "La escala LSI integra más de 100.000 compuertas siempre",
            "La escala se asocia a funciones como memorias y procesadores"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "La clasificación va por cantidad de compuertas: SSI hasta 10, VLSI de 10.000 a 100.000, y se asocian funciones. La LSI es de 100 a 10.000, no más de 100.000, así que esa es falsa."
        },
        {
          "id": "ms2-17-2",
          "q": "¿Cuáles de estas afirmaciones describen correctamente a las familias lógicas?",
          "options": [
            "Comparten características por usar la misma tecnología",
            "Están fabricadas a base de transistores comunes",
            "TTL se basa en transistores bipolares de juntura",
            "CMOS se basa en transistores bipolares de potencia",
            "Sus componentes son compatibles entre sí por eso"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Las familias comparten tecnología basada en transistores y por eso son compatibles. TTL es bipolar, pero CMOS es unipolar (efecto de campo), no bipolar: esa cuarta es falsa."
        },
        {
          "id": "ms2-17-3",
          "q": "¿Cuáles de las siguientes afirmaciones sobre el circuito integrado 7400 son correctas según el texto?",
          "options": [
            "Empaqueta compuertas de tipo OR exclusivamente",
            "Integra ocho compuertas NOR en su interior",
            "Funciona sin necesidad de alimentación VCC",
            "Pertenece a la escala de integración ULSI",
            "Es un chip de la familia lógica CMOS unipolar"
          ],
          "correctIndexes": [],
          "explain": "Ninguna pega: el 7400 tiene cuatro compuertas NAND (no OR ni NOR), necesita VCC y GND, y el texto no lo clasifica como ULSI ni como CMOS. Todas falsas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-17-1",
        "front": "¿Qué es un circuito integrado (CI)?",
        "back": "Un chip que adentro tiene compuertas y demás elementos del sistema digital."
      },
      {
        "id": "fc2-17-2",
        "front": "Escala de integración SSI",
        "back": "Pequeña escala: hasta 10 compuertas. Se asocia a compuertas lógicas."
      },
      {
        "id": "fc2-17-3",
        "front": "Escala de integración ULSI",
        "back": "Ultra grande escala: más de 100.000 compuertas. Microcomputadores y memorias."
      },
      {
        "id": "fc2-17-4",
        "front": "Retardo de propagación",
        "back": "El tiempo que tarda la salida de una compuerta en cambiar respecto de la entrada; el cambio de nivel no es instantáneo."
      },
      {
        "id": "fc2-17-5",
        "front": "Datasheet (hoja de datos)",
        "back": "Documento donde los fabricantes brindan las características del CI: niveles lógicos, tiempos de propagación, etc."
      },
      {
        "id": "fc2-17-6",
        "front": "Familia lógica",
        "back": "Componentes fabricados con la misma tecnología (a base de transistores), por eso compatibles entre sí. Clásicas: TTL y CMOS."
      },
      {
        "id": "fc2-17-7",
        "front": "TTL vs CMOS",
        "back": "TTL se basa en transistores bipolares; CMOS en transistores unipolares (efecto de campo)."
      },
      {
        "id": "fc2-17-8",
        "front": "El CI 7400",
        "back": "Circuito integrado con cuatro compuertas NAND empaquetadas, con alimentación VCC y GND."
      }
    ]
  },
  "18": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-18-1",
          "q": "En un circuito combinacional las salidas dependen únicamente del estado actual de las entradas.",
          "a": true,
          "explain": "Esa es la definición exacta de circuito combinacional: la salida depende solo de lo que tenés en la entrada en ese momento."
        },
        {
          "id": "tf2-18-2",
          "q": "El código BCD codifica los números del 0 (0000) al 9 (1001) en binario, sin signo, usando 4 bits.",
          "a": true,
          "explain": "Tal cual: el BCD (Binary Coded Decimal) usa 4 bits para cada dígito del 0 al 9, sin signo."
        },
        {
          "id": "tf2-18-3",
          "q": "En un decodificador binario común pueden estar activas varias salidas a la vez según el código de entrada.",
          "a": false,
          "explain": "En un decodificador binario solo una salida puede estar activa a la vez. El caso que activa más de una es el especial BCD a 7 segmentos."
        },
        {
          "id": "tf2-18-4",
          "q": "El número $15_d$ representado en BCD es $0001\\ 0101$.",
          "a": true,
          "explain": "Tomás el código del 1 (0001) y el del 5 (0101) y los ponés uno al lado del otro: 0001 0101."
        },
        {
          "id": "tf2-18-5",
          "q": "Un codificador cumple que la cantidad de salidas es igual a $2^n$ respecto de $n$ entradas, igual que un decodificador.",
          "a": false,
          "explain": "Al revés: el codificador es el opuesto del deco. En el codificador las entradas son $2^s$ (con $s$ las salidas); el que tiene salidas $\\leq 2^n$ es el decodificador."
        }
      ],
      "mc": [
        {
          "id": "mc2-18-1",
          "q": "Para un decodificador, ¿qué relación general se cumple entre entradas $E$ y salidas $S$?",
          "options": [
            "$S \\geq 2^{E}$",
            "$S = 2 \\cdot E$",
            "$S \\leq 2^{E}$",
            "$S = E + 2$"
          ],
          "correctIndex": 2,
          "explain": "Un deco convierte $n$ entradas en hasta $2^n$ salidas, de ahí $S \\leq 2^{E}$."
        },
        {
          "id": "mc2-18-2",
          "q": "En el decodificador 2×4 con habilitación, ¿cuál es la expresión de la salida $S_2$?",
          "options": [
            "$S_2 = H \\cdot \\overline{E_1} \\cdot E_0$",
            "$S_2 = H \\cdot \\overline{E_1} \\cdot \\overline{E_0}$",
            "$S_2 = H \\cdot E_1 \\cdot E_0$",
            "$S_2 = H \\cdot E_1 \\cdot \\overline{E_0}$"
          ],
          "correctIndex": 3,
          "explain": "$S_2$ se activa con $E_1=1$ y $E_0=0$ (y $H=1$), así que $S_2 = H \\cdot E_1 \\cdot \\overline{E_0}$."
        },
        {
          "id": "mc2-18-3",
          "q": "¿Por qué se puede implementar una función lógica con un decodificador más una compuerta OR?",
          "options": [
            "Porque el deco internamente está hecho de compuertas AND",
            "Porque el deco internamente está hecho de compuertas XOR",
            "Porque la OR genera todos los minitérminos posibles",
            "Porque el deco compacta las entradas en menos líneas"
          ],
          "correctIndex": 0,
          "explain": "El deco por dentro son puras AND (una por minitérmino), así que sumás con una OR las salidas que dan 1 y armás la función."
        },
        {
          "id": "mc2-18-4",
          "q": "¿Qué hace el codificador (encoder) respecto del decodificador?",
          "options": [
            "Convierte código binario en forma más comprensible",
            "Activa una sola salida según el código de entrada",
            "Codifica o compacta la información que será transmitida",
            "Convierte código BCD al código de 7 segmentos"
          ],
          "correctIndex": 2,
          "explain": "El codificador hace lo opuesto al deco: codifica o compacta la info para transmitirla, asignando una combinación binaria a cada entrada."
        },
        {
          "id": "mc2-18-5",
          "q": "¿Por qué se considera especial al decodificador BCD a 7 segmentos?",
          "options": [
            "Porque solo activa una salida según cada entrada",
            "Porque puede activar más de una salida a la vez",
            "Porque convierte de 7 segmentos a código BCD",
            "Porque usa habilitación para apagar el integrado"
          ],
          "correctIndex": 1,
          "explain": "Es especial porque, a diferencia del deco común, puede activar más de una salida según la combinación de entradas (para formar el dígito)."
        }
      ],
      "ms": [
        {
          "id": "ms2-18-1",
          "q": "Según las expresiones del decodificador 2×4, ¿cuáles de estas igualdades son correctas?",
          "options": [
            "$S_0 = H \\cdot \\overline{E_1} \\cdot \\overline{E_0}$",
            "$S_1 = H \\cdot \\overline{E_1} \\cdot E_0$",
            "$S_3 = H \\cdot E_1 \\cdot E_0$",
            "$S_2 = H \\cdot \\overline{E_1} \\cdot \\overline{E_0}$",
            "$S_1 = H \\cdot E_1 \\cdot \\overline{E_0}$"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "$S_0$, $S_1$ y $S_3$ están bien. $S_2$ es $H \\cdot E_1 \\cdot \\overline{E_0}$ (no la cuarta), y $S_1$ no es la quinta: las dos últimas son falsas."
        },
        {
          "id": "ms2-18-2",
          "q": "Sobre la implementación de $f(A,B,C) = \\sum m(0,2,3,5)$ con un decodificador, ¿qué es correcto?",
          "options": [
            "Las entradas del deco se corresponden con las variables",
            "El deco aporta las AND de cada minitérmino interno",
            "Se necesita una compuerta OR que sume los minitérminos",
            "Se requiere un codificador en vez de un decodificador",
            "Conviene un deco de 3 entradas para 3 variables"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Las entradas son las variables, el deco da las AND, se suma con una OR y, al ser 3 variables, va un deco de 3 entradas. Se usa decodificador, no codificador: la cuarta es falsa."
        },
        {
          "id": "ms2-18-3",
          "q": "¿Cuáles de estas afirmaciones sobre el código BCD son correctas?",
          "options": [
            "Codifica del 0 al 9 usando 4 bits sin signo",
            "El dígito 7 en BCD se representa como $0111$",
            "El número $15_d$ en BCD es $0001\\ 0101$",
            "El dígito 9 en BCD se representa como $1001$",
            "Es el único código mencionado en el texto"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son correctas según la tabla. La última es falsa: el texto menciona también Gray, AIKEN, ASCII, entre otros."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-18-1",
        "front": "Circuito combinacional",
        "back": "Aquel en el que las salidas dependen únicamente del estado actual de las entradas."
      },
      {
        "id": "fc2-18-2",
        "front": "Código BCD (Binary Coded Decimal)",
        "back": "Codifica los dígitos del 0 (0000) al 9 (1001) en binario, sin signo, con 4 bits cada uno."
      },
      {
        "id": "fc2-18-3",
        "front": "Decodificador (decoder)",
        "back": "Circuito combinacional que convierte info binaria de $n$ líneas en hasta $2^n$ salidas; solo una salida activa a la vez. Cumple $S \\leq 2^{E}$."
      },
      {
        "id": "fc2-18-4",
        "front": "Salidas del decodificador 2×4",
        "back": "$S_0 = H\\overline{E_1}\\,\\overline{E_0}$, $S_1 = H\\overline{E_1}E_0$, $S_2 = HE_1\\overline{E_0}$, $S_3 = HE_1E_0$."
      },
      {
        "id": "fc2-18-5",
        "front": "Implementar una función con un deco",
        "back": "Como el deco es puro AND (un minitérmino por salida), agregás una OR que recibe las salidas que dan 1 y obtenés la función."
      },
      {
        "id": "fc2-18-6",
        "front": "Decodificador BCD a 7 segmentos",
        "back": "Conversor de código (BCD a 7 segmentos). Caso especial: puede activar más de una salida a la vez para formar el dígito."
      },
      {
        "id": "fc2-18-7",
        "front": "Codificador (encoder)",
        "back": "Circuito combinacional opuesto al deco: codifica o compacta la información. Cumple entradas $= 2^s$, con $s$ las salidas."
      },
      {
        "id": "fc2-18-8",
        "front": "Expansión de decodificadores",
        "back": "Usar decos de menos entradas para armar uno de más entradas; p. ej. un 3×8 con dos 2×4 y lógica que elige cuál se habilita según $E_2$."
      }
    ]
  },
  "19": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-19-1",
          "q": "Un multiplexor permite seleccionar cuál de los datos de sus entradas será transmitido hacia su única salida.",
          "a": true,
          "explain": "Exacto: el mux es como una llave selectora, elegís con las entradas de control cuál dato pasa a la salida única."
        },
        {
          "id": "tf2-19-2",
          "q": "En un multiplexor se cumple la relación $D = 2^{C}$ entre entradas de datos $D$ y entradas de control $C$.",
          "a": true,
          "explain": "Sí: cada combinación de las $C$ entradas de control selecciona un dato, por eso $D = 2^{C}$."
        },
        {
          "id": "tf2-19-3",
          "q": "El demultiplexor tiene una única entrada de datos y reparte ese dato hacia la salida que eligen las entradas de control.",
          "a": true,
          "explain": "El demux es el revés del mux: un solo dato entrando y las entradas de control deciden a qué salida lo mandás."
        },
        {
          "id": "tf2-19-4",
          "q": "Para implementar una función de 3 variables con un mux usando todas las variables como control, se necesita un mux de 4 entradas de datos.",
          "a": false,
          "explain": "Con 3 variables de control hacen falta $2^3 = 8$ entradas de datos, no 4. Con 4 datos solo cubrirías 2 variables de control."
        },
        {
          "id": "tf2-19-5",
          "q": "En un demultiplexor la cantidad de entradas de datos es igual a $2^{C}$, siendo $C$ la cantidad de entradas de control.",
          "a": false,
          "explain": "El demux tiene una sola entrada de datos. Lo que cumple $2^{C}$ es la cantidad de SALIDAS, no las entradas de datos."
        }
      ],
      "mc": [
        {
          "id": "mc2-19-1",
          "q": "En el mux 4×1, si las entradas de control son $C_1 = 1$ y $C_0 = 0$ (con $H=1$), ¿qué dato aparece en la salida?",
          "options": [
            "El dato $D_1$ de la entrada",
            "El dato $D_3$ de la entrada",
            "El dato $D_0$ de la entrada",
            "El dato $D_2$ de la entrada"
          ],
          "correctIndex": 3,
          "explain": "$C_1=1$, $C_0=0$ selecciona $D_2$ según la tabla reducida del mux 4×1."
        },
        {
          "id": "mc2-19-2",
          "q": "¿Cuál es la expresión correcta de la salida $S_2$ de un demultiplexor 1×4?",
          "options": [
            "$S_2 = H \\cdot C_1 \\cdot \\overline{C_0} \\cdot D$",
            "$S_2 = H \\cdot \\overline{C_1} \\cdot C_0 \\cdot D$",
            "$S_2 = H \\cdot C_1 \\cdot C_0 \\cdot D$",
            "$S_2 = H \\cdot \\overline{C_1} \\cdot \\overline{C_0} \\cdot D$"
          ],
          "correctIndex": 0,
          "explain": "$S_2$ se activa con $C_1=1$, $C_0=0$: $S_2 = H \\cdot C_1 \\cdot \\overline{C_0} \\cdot D$."
        },
        {
          "id": "mc2-19-3",
          "q": "Al implementar $f(A,B,C)=\\sum m(0,2,3,5)$ con un mux 8×1, ¿qué valores se fijan en las entradas de datos?",
          "options": [
            "$D_0=0,D_2=0,D_3=0,D_5=0$, resto en 1",
            "$D_0=1,D_2=1,D_3=1,D_5=1$, resto en 0",
            "$D_1=1,D_4=1,D_6=1,D_7=1$, resto en 0",
            "Todos los datos en 1 sin excepción"
          ],
          "correctIndex": 1,
          "explain": "Cada dato vale lo que da la función en esa fila: los minitérminos 0,2,3,5 en 1 y el resto en 0."
        },
        {
          "id": "mc2-19-4",
          "q": "Internamente, ¿con qué compuertas está armado un mux y por qué sirve para implementar funciones?",
          "options": [
            "Con ANDs y una OR que recibe sus salidas",
            "Con XORs encadenadas y una AND final",
            "Con NANDs que generan los minitérminos",
            "Con ORs y una AND que recibe sus salidas"
          ],
          "correctIndex": 0,
          "explain": "El mux por dentro son AND más una OR que junta sus salidas, igual que una forma de armar el circuito de la función."
        },
        {
          "id": "mc2-19-5",
          "q": "Para implementar $f(A,B,C)$ con un mux 4×1 (control $A$ y $B$), ¿qué se hace con la tercera variable $C$?",
          "options": [
            "Se descarta porque no influye en la salida",
            "Se usa como tercera entrada de control extra",
            "Se expresa la salida de cada fila en función de $C$",
            "Se fija en un valor constante igual a 1"
          ],
          "correctIndex": 2,
          "explain": "Se arma una tabla modificada donde cada dato es la salida expresada en función de $C$ (p. ej. $\\overline{C}$, $1$, $C$, $0$)."
        }
      ],
      "ms": [
        {
          "id": "ms2-19-1",
          "q": "Según la tabla reducida del mux 4×1, ¿qué asociaciones control-salida son correctas (con $H=1$)?",
          "options": [
            "$C_1=0,C_0=0 \\rightarrow S=D_0$",
            "$C_1=0,C_0=1 \\rightarrow S=D_1$",
            "$C_1=1,C_0=1 \\rightarrow S=D_3$",
            "$C_1=1,C_0=0 \\rightarrow S=D_1$",
            "Con $H=0$ la salida vale $D_0$ siempre"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras coinciden con la tabla. $C_1=1,C_0=0$ da $D_2$ (no $D_1$), y con $H=0$ la salida es 0, no $D_0$: las dos últimas son falsas."
        },
        {
          "id": "ms2-19-2",
          "q": "Sobre la tabla modificada para implementar $f(A,B,C)$ con un mux 4×1 (control $A,B$), ¿qué datos son correctos?",
          "options": [
            "$D_0 = \\overline{C}$",
            "$D_1 = 1$",
            "$D_2 = C$",
            "$D_3 = 0$",
            "$D_3 = \\overline{C}$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Según la tabla modificada: $D_0=\\overline{C}$, $D_1=1$, $D_2=C$ y $D_3=0$. La quinta ($D_3=\\overline{C}$) es falsa."
        },
        {
          "id": "ms2-19-3",
          "q": "¿Cuáles de estas afirmaciones sobre multiplexores y demultiplexores son correctas?",
          "options": [
            "El mux tiene varias entradas de datos y una salida",
            "El demux tiene una entrada de datos y varias salidas",
            "Las entradas de control del mux eligen qué dato pasa",
            "El mux cumple $D = 2^{C}$ entre datos y control",
            "El demux convierte BCD a 7 segmentos directamente"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son correctas. La última es inventada: el demux reparte un dato a una salida elegida, no convierte códigos de display."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-19-1",
        "front": "Multiplexor (MUX)",
        "back": "Circuito combinacional que selecciona cuál de sus entradas de datos se transmite a su única salida, según las entradas de control."
      },
      {
        "id": "fc2-19-2",
        "front": "Relación datos-control en un mux",
        "back": "$D = 2^{C}$: con $C$ entradas de control podés direccionar $D$ entradas de datos."
      },
      {
        "id": "fc2-19-3",
        "front": "Mux 4×1",
        "back": "2 entradas de control, 4 entradas de datos, 1 salida y habilitación $H$. Con $H=0$ la salida es 0."
      },
      {
        "id": "fc2-19-4",
        "front": "Implementar una función con un mux",
        "back": "Las variables van al control y cada dato vale lo que toma la función en esa fila de la tabla; internamente el mux es AND + OR."
      },
      {
        "id": "fc2-19-5",
        "front": "Reducir variables de control en un mux",
        "back": "Se usan menos variables como control y la salida se expresa en función de la variable restante (p. ej. $\\overline{C}$, $1$, $C$, $0$)."
      },
      {
        "id": "fc2-19-6",
        "front": "Demultiplexor (DEMUX)",
        "back": "Circuito combinacional opuesto al mux: una entrada de datos que se envía a la salida elegida por el control. Cumple salidas $= 2^{C}$."
      },
      {
        "id": "fc2-19-7",
        "front": "Salidas del demux 1×4",
        "back": "$S_0=H\\overline{C_1}\\,\\overline{C_0}D$, $S_1=H\\overline{C_1}C_0 D$, $S_2=HC_1\\overline{C_0}D$, $S_3=HC_1C_0 D$."
      },
      {
        "id": "fc2-19-8",
        "front": "Expansión de multiplexores",
        "back": "Armar un mux grande con varios chicos; p. ej. un 8×1 con dos 4×1 y lógica que habilita uno cuando $C_2=0$ y el otro cuando $C_2=1$."
      }
    ]
  },
  "20": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-20-1",
          "q": "La salida de igualdad de un comparador de un bit ($A=B$) se comporta como una compuerta XNOR.",
          "a": true,
          "explain": "Sí: la tabla de $A=B$ coincide con la XNOR, por eso $S_{A=B} = \\overline{A \\oplus B}$."
        },
        {
          "id": "tf2-20-2",
          "q": "La salida que indica $A \\gt B$ en el comparador de un bit responde a la expresión $S = \\overline{A} \\cdot B$.",
          "a": false,
          "explain": "Esa expresión $\\overline{A} \\cdot B$ es la de $A \\lt B$. La de $A \\gt B$ es $A \\cdot \\overline{B}$."
        },
        {
          "id": "tf2-20-3",
          "q": "El semisumador puede sumar dos bits y produce una salida de suma $S$ y una de acarreo $C$.",
          "a": true,
          "explain": "El half adder suma dos bits: da $S = A \\oplus B$ y $C = A \\cdot B$."
        },
        {
          "id": "tf2-20-4",
          "q": "El sumador completo suma únicamente dos bits, igual que el semisumador.",
          "a": false,
          "explain": "No: el full adder suma tres bits ($A$, $B$ y el carry de entrada $C_{-1}$). El que suma solo dos es el semisumador."
        },
        {
          "id": "tf2-20-5",
          "q": "La suma del sumador completo se puede expresar como $S = A \\oplus B \\oplus C_{-1}$.",
          "a": true,
          "explain": "Trabajando las expresiones se llega a que la suma es una XOR de tres entradas: $S = A \\oplus B \\oplus C_{-1}$."
        }
      ],
      "mc": [
        {
          "id": "mc2-20-1",
          "q": "¿Cuál es la expresión lógica de la salida que indica $A \\lt B$ en el comparador de un bit?",
          "options": [
            "$S = A \\cdot \\overline{B}$",
            "$S = \\overline{A \\oplus B}$",
            "$S = \\overline{A} \\cdot B$",
            "$S = A \\oplus B$"
          ],
          "correctIndex": 2,
          "explain": "$A \\lt B$ se da con $A=0$ y $B=1$, o sea $S = \\overline{A} \\cdot B$."
        },
        {
          "id": "mc2-20-2",
          "q": "En el semisumador, ¿qué compuertas generan la suma $S$ y el acarreo $C$ respectivamente?",
          "options": [
            "XOR para la suma y AND para el carry",
            "AND para la suma y XOR para el carry",
            "OR para la suma y AND para el carry",
            "XNOR para la suma y OR para el carry"
          ],
          "correctIndex": 0,
          "explain": "$S = A \\oplus B$ (XOR) y $C = A \\cdot B$ (AND): XOR para la suma, AND para el acarreo."
        },
        {
          "id": "mc2-20-3",
          "q": "¿Cuál es la expresión simplificada del acarreo $C$ del sumador completo (forma de suma de productos)?",
          "options": [
            "$C = A \\cdot B \\cdot C_{-1}$",
            "$C = A \\oplus B \\oplus C_{-1}$",
            "$C = A \\cdot B + A \\cdot C_{-1} + B \\cdot C_{-1}$",
            "$C = \\overline{A} \\cdot B + A \\cdot \\overline{B}$"
          ],
          "correctIndex": 2,
          "explain": "Minimizando con Karnaugh, el carry queda $C = A \\cdot B + A \\cdot C_{-1} + B \\cdot C_{-1}$."
        },
        {
          "id": "mc2-20-4",
          "q": "¿Con qué bloques se puede armar un sumador completo, según el detalle del texto?",
          "options": [
            "Con un solo semisumador y una compuerta XOR",
            "Con dos semisumadores y una compuerta OR",
            "Con tres compuertas XOR encadenadas entre sí",
            "Con un comparador de magnitudes y una AND"
          ],
          "correctIndex": 1,
          "explain": "Al trabajar la expresión del carry se ve que con dos semisumadores y una OR armás un sumador completo."
        }
      ],
      "ms": [
        {
          "id": "ms2-20-1",
          "q": "Según el texto, ¿qué expresiones del comparador de un bit son correctas?",
          "options": [
            "$S_{A=B} = \\overline{A \\oplus B}$",
            "$S_{A \\lt B} = \\overline{A} \\cdot B$",
            "$S_{A \\gt B} = A \\cdot \\overline{B}$",
            "$S_{A=B} = A \\oplus B$",
            "$S_{A \\gt B} = \\overline{A} \\cdot \\overline{B}$"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son las correctas. La igualdad es XNOR (no XOR) y $A \\gt B$ es $A\\cdot\\overline{B}$ (no $\\overline{A}\\,\\overline{B}$): las dos últimas son falsas."
        },
        {
          "id": "ms2-20-2",
          "q": "¿Cuáles de estas afirmaciones sobre sumadores son correctas?",
          "options": [
            "El semisumador suma dos bits de un bit cada uno",
            "El sumador completo suma tres bits incluyendo $C_{-1}$",
            "En el semisumador $C = A \\cdot B$ y $S = A \\oplus B$",
            "La suma del full adder es $S = A \\oplus B \\oplus C_{-1}$",
            "El semisumador contempla un carry de entrada"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras pegan. La última es falsa: el semisumador NO tiene carry de entrada; ese es el sumador completo."
        },
        {
          "id": "ms2-20-3",
          "q": "¿Cuáles de estas afirmaciones sobre el comparador de magnitudes son correctas?",
          "options": [
            "Compara la magnitud de dos números de un bit",
            "Indica si un número es igual, menor o mayor",
            "Usa la salida $A=B$ idéntica a una compuerta OR",
            "Resta los dos números para hallar la diferencia",
            "Reemplaza al sumador completo en el circuito"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "Compara dos números de un bit e indica igual, menor o mayor. La igualdad es XNOR (no OR), no resta nada y no reemplaza a ningún sumador: las tres últimas son falsas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-20-1",
        "front": "Comparador de magnitudes",
        "back": "Circuito combinacional que compara dos números e indica si uno es igual, menor o mayor que el otro."
      },
      {
        "id": "fc2-20-2",
        "front": "Salida de igualdad ($A=B$)",
        "back": "Se comporta como una XNOR: $S_{A=B} = \\overline{A \\oplus B}$."
      },
      {
        "id": "fc2-20-3",
        "front": "Salidas $A \\lt B$ y $A \\gt B$",
        "back": "$S_{A \\lt B} = \\overline{A} \\cdot B$ y $S_{A \\gt B} = A \\cdot \\overline{B}$."
      },
      {
        "id": "fc2-20-4",
        "front": "Semisumador (Half Adder)",
        "back": "Suma dos bits. Salidas: suma $S = A \\oplus B$ (XOR) y acarreo $C = A \\cdot B$ (AND)."
      },
      {
        "id": "fc2-20-5",
        "front": "Sumador completo (Full Adder)",
        "back": "Suma tres bits ($A$, $B$ y el carry de entrada $C_{-1}$), produciendo suma $S$ y acarreo $C$."
      },
      {
        "id": "fc2-20-6",
        "front": "Suma del sumador completo",
        "back": "$S = A \\oplus B \\oplus C_{-1}$ (una XOR de tres entradas)."
      },
      {
        "id": "fc2-20-7",
        "front": "Acarreo del sumador completo",
        "back": "$C = A \\cdot B + A \\cdot C_{-1} + B \\cdot C_{-1}$, o equivalente $C = C_{-1} \\cdot (A \\oplus B) + A \\cdot B$."
      },
      {
        "id": "fc2-20-8",
        "front": "Armar un sumador completo con bloques",
        "back": "Con dos semisumadores encadenados y una compuerta OR que combina los acarreos."
      }
    ]
  },
  "21": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-21-1",
          "q": "Para sumar dos números de $n$ bits con carry en serie se usan $n$ sumadores completos en paralelo, donde el carry de entrada de cada uno toma el carry de salida del anterior.",
          "a": true,
          "explain": "Tal cual: cada columna es un FA y el acarreo se va pasando en serie de un sumador al siguiente de la izquierda. Por eso le dicen ripple carry."
        },
        {
          "id": "tf2-21-2",
          "q": "En el ejemplo $5d + 1d$ el último carry da $C_2 = 1$, lo que indica que hubo overflow en la operación.",
          "a": false,
          "explain": "Falso: en $5+1$ el último carry da $C_2 = 0$, sin desbordamiento. El resultado $S = 110$ ya es $6$ en decimal sin necesidad de tomar el carry."
        },
        {
          "id": "tf2-21-3",
          "q": "Para pasar el número $B$ a complemento a 2 hay que invertir todos sus bits con compuertas NOT y entrar con el carry inicial $C_{-1} = 1$.",
          "a": true,
          "explain": "Exacto: invertir con NOT da el complemento a 1, y el $C_{-1} = 1$ aporta el +1 que completa el complemento a 2 sin sumadores extra."
        },
        {
          "id": "tf2-21-4",
          "q": "En el sumador-restador, la compuerta agregada a cada entrada $B_n$ para elegir entre sumar y restar es una AND controlada por $C_{-1}$.",
          "a": false,
          "explain": "Falso: la compuerta que cumple esa tabla (deja pasar $B$ en suma e invierte en resta) es la XOR, no la AND. La XOR toma $B_n$ y la línea de control $C_{-1}$."
        },
        {
          "id": "tf2-21-5",
          "q": "El sumador con carry anticipado es más veloz que el de carry en serie porque calcula los carry en paralelo, independizando el retardo de la cantidad de bits.",
          "a": true,
          "explain": "Sí: en lugar de esperar el carry del FA anterior, una lógica más compleja calcula los acarreos de manera anticipada, así no se acumula el retardo por cada bit."
        }
      ],
      "mc": [
        {
          "id": "mc2-21-1",
          "q": "¿Cuántos sumadores completos se necesitan para sumar dos números de $n$ bits con carry en serie?",
          "options": [
            "Exactamente $n$ sumadores completos",
            "Siempre $n + 1$ sumadores completos",
            "La mitad, es decir $n/2$ sumadores",
            "Un solo sumador completo reutilizado"
          ],
          "correctIndex": 0,
          "explain": "Una columna por bit, un FA por columna: $n$ bits, $n$ sumadores completos encadenados por el carry en serie."
        },
        {
          "id": "mc2-21-2",
          "q": "En el ejemplo $5d + 7d$ considerado sin signo, ¿cómo se obtiene el resultado correcto de $12d$?",
          "options": [
            "Descartando el último carry $C_2$ por ser un caso sin signo",
            "Invirtiendo todos los bits del resultado antes de leerlo",
            "Tomando $C_2$ como bit más significativo del resultado",
            "Sumando un bit de signo extra a la izquierda del total"
          ],
          "correctIndex": 2,
          "explain": "El último carry da $C_2 = 1$. Como es sin signo, se lo toma como parte del resultado: $S = C_2 S_2 S_1 S_0 = 1100 = 12d$."
        },
        {
          "id": "mc2-21-3",
          "q": "¿Por qué el complemento a 2 es la representación con signo más conveniente para armar el restador?",
          "options": [
            "Porque usa bastantes menos compuertas NOT que todas las otras representaciones",
            "Porque el cero tiene un único equivalente y su rango es mayor",
            "Porque no necesita reservar ningún bit para indicar el signo del número",
            "Porque evita por completo cualquier desbordamiento aritmético en la cuenta"
          ],
          "correctIndex": 1,
          "explain": "El cero es único (elemento nulo único), así que aprovecha mejor el rango: $[-(2^{n-1}); (2^{n-1}-1)]$. Por eso conviene para la resta."
        },
        {
          "id": "mc2-21-4",
          "q": "En el sumador-restador, ¿qué valores toma la línea de control $C_{-1}$ según la operación?",
          "options": [
            "$C_{-1} = 1$ cuando se suma y $C_{-1} = 0$ cuando se resta",
            "$C_{-1} = 0$ en los dos casos, tanto al sumar como al restar",
            "$C_{-1} = 0$ para sumar y $C_{-1} = 1$ para restar",
            "$C_{-1} = 1$ en los dos casos, tanto al sumar como al restar"
          ],
          "correctIndex": 2,
          "explain": "Sumar dos positivos no arrastra carry inicial ($C_{-1}=0$); restar necesita el +1 del complemento a 2, así que $C_{-1}=1$. La misma línea controla las XOR."
        },
        {
          "id": "mc2-21-5",
          "q": "En la resta $5d - 7d$ con el sumador-restador, el bit de signo da $S_3 = 1$. ¿Qué hay que hacer para leer la magnitud?",
          "options": [
            "Tomar el último carry de salida como bit más alto del número",
            "Complementar la magnitud para poder pasarla a decimal",
            "Sumarle 1 al resultado completo otra vez antes de leerlo",
            "Descartar el bit de signo y leer la magnitud directamente"
          ],
          "correctIndex": 1,
          "explain": "$S_3 = 1$ avisa que es negativo. Para la magnitud hay que complementar: $110 \\rightarrow 010 = 2d$, o sea $S = 1110 = -2d$."
        }
      ],
      "ms": [
        {
          "id": "ms2-21-1",
          "q": "Sobre el sumador completo (FA) y el encadenamiento de varios, ¿cuáles afirmaciones son correctas?",
          "options": [
            "El FA suma tres bits de un bit cada uno",
            "Su suma es $S_n = A_n \\oplus B_n \\oplus C_{n-1}$",
            "$C_{n-1}$ es el carry de salida del sumador",
            "Su carry es $C_n = C_{n-1}(A_n \\oplus B_n) + A_n B_n$",
            "El carry de salida pasa al FA de la izquierda"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Todas salen del texto salvo la 3: $C_{n-1}$ es el carry de ENTRADA (acarreo anterior); el de salida es $C_n$. El resto es correcto."
        },
        {
          "id": "ms2-21-2",
          "q": "Sobre el ejemplo del restador $5d - 2d$ en complemento a 2, ¿cuáles afirmaciones son correctas?",
          "options": [
            "Se usan 4 sumadores completos en total",
            "Se entra con carry inicial $C_{-1} = 1$",
            "El último bit de carry se descarta al final",
            "El bit de signo da $S_3 = 1$ (negativo)",
            "El resultado de magnitud es $011 = 3d$"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Tres columnas más el bit de signo dan 4 FA, con $C_{-1}=1$ y descarte del carry final. La 4 es falsa: $S_3 = 0$ (positivo). La magnitud es $3$."
        },
        {
          "id": "ms2-21-3",
          "q": "¿Cuáles de estas afirmaciones sobre el sumador-restador con XOR son INCORRECTAS según el texto?",
          "options": [
            "La XOR deja pasar $B_n$ tal cual cuando se suma",
            "La XOR invierte $B_n$ cuando se resta",
            "Una sola NOT alcanza para ambos modos",
            "La XOR toma $B_n$ y la línea $C_{-1}$ como entradas",
            "Cambia de operación solo cambiando las entradas"
          ],
          "correctIndexes": [
            2
          ],
          "explain": "La única incorrecta es la 3: el texto dice explícito que el NOT solo no alcanza para los dos casos, por eso se usa la XOR. Las demás son verdaderas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-21-1",
        "front": "¿Qué es un sumador completo (full adder)?",
        "back": "Un circuito combinacional que suma tres bits de un bit cada uno, entregando una suma $S_n$ y un carry de salida $C_n$."
      },
      {
        "id": "fc2-21-2",
        "front": "Expresión de la suma $S_n$ del FA",
        "back": "$S_n = A_n \\oplus B_n \\oplus C_{n-1}$, la XOR de las dos entradas y el carry de entrada."
      },
      {
        "id": "fc2-21-3",
        "front": "Diferencia entre $C_{n-1}$ y $C_n$",
        "back": "$C_{n-1}$ es el carry de entrada (acarreo anterior) y $C_n$ es el carry de salida del sumador."
      },
      {
        "id": "fc2-21-4",
        "front": "¿Cómo se pasa $B$ a complemento a 2 con FA?",
        "back": "Se invierten todos sus bits con compuertas NOT y se entra con el carry inicial $C_{-1} = 1$ (eso aporta el +1)."
      },
      {
        "id": "fc2-21-5",
        "front": "Rango de representación del complemento a 2",
        "back": "$[-(2^{n-1}); (2^{n-1} - 1)]$. Es mayor porque el cero tiene un único equivalente."
      },
      {
        "id": "fc2-21-6",
        "front": "¿Qué compuerta elige entre sumar y restar en el sumador-restador?",
        "back": "Una XOR en cada entrada $B_n$, con $B_n$ y la línea de control $C_{-1}$: deja pasar $B$ en suma e invierte en resta."
      },
      {
        "id": "fc2-21-7",
        "front": "¿Qué indica un carry de salida $C_2 = 1$ en una suma de 3 bits?",
        "back": "Que hubo overflow (desbordamiento). Sin signo se toma como parte del resultado; con signo haría falta un FA más."
      },
      {
        "id": "fc2-21-8",
        "front": "Ventaja del sumador con carry anticipado",
        "back": "Calcula los carry en paralelo, así no se acumula el retardo por bit: es más veloz e independiente de la cantidad de bits."
      }
    ]
  },
  "22": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-22-1",
          "q": "En un circuito combinacional la salida depende únicamente de los valores presentes en las entradas, sin memorizar resultados anteriores.",
          "a": true,
          "explain": "Sí: como en una OR común, $S = f(A,B)$. No hay lazo de retroalimentación, así que no guarda nada de lo anterior."
        },
        {
          "id": "tf2-22-2",
          "q": "Los flip-flops cambian de estado por nivel mientras la habilitación está en alto, mientras que los latches cambian por flanco del reloj.",
          "a": false,
          "explain": "Está al revés: el latch cambia por nivel (habilitación en 1) y el flip-flop cambia por flanco del clock. Justo eso resuelve estados transitorios inestables."
        },
        {
          "id": "tf2-22-3",
          "q": "En el latch SR con NOR cruzadas, la combinación $S=1$ y $R=1$ es el estado prohibido porque $Q$ y $\\overline{Q}$ quedan ambas en 0.",
          "a": true,
          "explain": "Tal cual: con las dos entradas en 1 ambas NOR sacan 0, y eso rompe la condición de que $Q$ y $\\overline{Q}$ sean complementarias. Por eso se marca con X."
        },
        {
          "id": "tf2-22-4",
          "q": "En el latch D, a $S$ le llega $D$ y a $R$ le llega $\\overline{D}$, de modo que $S$ y $R$ nunca valen 1 al mismo tiempo.",
          "a": true,
          "explain": "Exacto: el inversor garantiza que $S$ y $R$ sean opuestos, así nunca cae en el estado prohibido del SR. Cuando está habilitado, la salida sigue a $D$."
        },
        {
          "id": "tf2-22-5",
          "q": "En el flip-flop D maestro-esclavo, el maestro y el esclavo comparten exactamente la misma señal de reloj sin inversión entre ellos.",
          "a": false,
          "explain": "Falso: justamente el reloj va invertido entre maestro y esclavo. El maestro toma el dato con el clock en 1 y el esclavo lo muestra cuando el clock pasa a 0."
        }
      ],
      "mc": [
        {
          "id": "mc2-22-1",
          "q": "¿Qué caracteriza a un circuito secuencial frente a uno combinacional?",
          "options": [
            "Su salida depende solo de las entradas actuales",
            "No puede almacenar ningún bit de información",
            "Su salida depende del estado actual y del anterior",
            "Funciona siempre sin necesidad de retroalimentación"
          ],
          "correctIndex": 2,
          "explain": "El secuencial usa un lazo de retroalimentación para recordar: $S_{n+1} = f(A, S_n)$. Depende de la entrada y del valor anterior de la salida."
        },
        {
          "id": "mc2-22-2",
          "q": "¿Qué es la señal de clock en un circuito secuencial sincrónico?",
          "options": [
            "Una señal cuadrada periódica de niveles alto y bajo",
            "Una entrada de datos que el latch guarda como un bit",
            "Una señal continua que nunca cambia de nivel ni oscila",
            "Un pulso único que aparece solo al encender el sistema"
          ],
          "correctIndex": 0,
          "explain": "El clock es un tren de pulsos: una señal cuadrada periódica que alterna alto y bajo, y sincroniza todos los elementos del circuito."
        },
        {
          "id": "mc2-22-3",
          "q": "¿Cuál es la ecuación característica del latch SR?",
          "options": [
            "$Q_{n+1} = D$ siguiendo directo el dato",
            "$Q_{n+1} = R + \\overline{S} \\cdot Q_n$ invertida",
            "$Q_{n+1} = S \\cdot R \\cdot Q_n$ como producto",
            "$Q_{n+1} = S + \\overline{R} \\cdot Q_n$"
          ],
          "correctIndex": 3,
          "explain": "Saliendo de simplificar la tabla con Karnaugh queda $Q_{n+1} = S + \\overline{R} \\cdot Q_n$: setea con $S$ o mantiene si no se resetea."
        },
        {
          "id": "mc2-22-4",
          "q": "Con $LE = 0$ en un latch SR con habilitación, ¿qué pasa con la salida?",
          "options": [
            "Se va siempre a 0 sin importar $S$ y $R$",
            "Mantiene su estado anterior $Q_n$",
            "Sigue el valor de la entrada $S$",
            "Entra en el estado prohibido marcado con X"
          ],
          "correctIndex": 1,
          "explain": "Con $LE=0$ el latch no escucha a $R$ ni a $S$: mantiene $Q_n$. Recién con $LE=1$ permite el cambio según las entradas."
        },
        {
          "id": "mc2-22-5",
          "q": "En el símbolo de un flip-flop, ¿qué indica una burbuja (círculo) en la entrada dinámica del CLK?",
          "options": [
            "Que el flip-flop está deshabilitado",
            "Que dispara por flanco descendente",
            "Que la salida $Q$ está negada",
            "Que funciona como latch por nivel"
          ],
          "correctIndex": 1,
          "explain": "El triángulo marca la entrada dinámica (el clock) y la burbujita avisa que dispara por flanco descendente. Sin burbuja, es por flanco ascendente."
        }
      ],
      "ms": [
        {
          "id": "ms2-22-1",
          "q": "Sobre la distinción entre latch y flip-flop, ¿cuáles afirmaciones son correctas?",
          "options": [
            "El latch cambia por nivel de la habilitación",
            "El flip-flop cambia según el flanco del reloj",
            "Los latch se usan en circuitos asincrónicos",
            "El flip-flop resuelve estados transitorios inestables",
            "El latch dispara solo por flanco descendente"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras salen del texto. La 5 es falsa: disparar por flanco es propio del flip-flop, no del latch, que cambia por nivel."
        },
        {
          "id": "ms2-22-2",
          "q": "En el latch SR con NOR cruzadas, ¿cuáles combinaciones de entradas hacen que la salida MANTENGA su valor anterior $Q_n$?",
          "options": [
            "$S=0$ y $R=0$ con el latch habilitado",
            "$S=0$ y $R=1$ con el latch habilitado",
            "$S=1$ y $R=0$ con el latch habilitado",
            "$S=1$ y $R=1$ con el latch habilitado",
            "$LE=0$ con cualquier $S$ y cualquier $R$"
          ],
          "correctIndexes": [
            0,
            4
          ],
          "explain": "Solo $S=0,R=0$ mantiene en el SR básico, y con habilitación $LE=0$ también mantiene. $0,1$ resetea, $1,0$ setea y $1,1$ es prohibido."
        },
        {
          "id": "ms2-22-3",
          "q": "¿Cuáles de estas afirmaciones sobre el latch D y su funcionamiento son INCORRECTAS según el texto?",
          "options": [
            "El latch D tiene una sola entrada de dato llamada $D$",
            "Su ecuación característica es directamente $Q_{n+1} = D$",
            "El latch D igual puede caer en el estado prohibido",
            "Con $D=0$ y habilitado, la salida del latch queda en 0",
            "A $R$ se le conecta $D$ y a $S$ se le conecta $\\overline{D}$"
          ],
          "correctIndexes": [
            2,
            4
          ],
          "explain": "Dos son falsas: el D no tiene estado prohibido (esa es su gracia), y la conexión es al revés ($S \\leftarrow D$, $R \\leftarrow \\overline{D}$). Las otras tres son correctas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-22-1",
        "front": "Circuito combinacional vs. secuencial",
        "back": "El combinacional depende solo de las entradas ($S=f(A,B)$). El secuencial depende del estado actual y del anterior, con lazo de retroalimentación."
      },
      {
        "id": "fc2-22-2",
        "front": "¿Qué es un biestable?",
        "back": "El elemento de memoria más básico de un circuito secuencial: guarda un bit y toma dos estados estables, 0 y 1. Hay latch y flip-flop."
      },
      {
        "id": "fc2-22-3",
        "front": "Diferencia entre latch y flip-flop",
        "back": "El latch cambia por nivel (mientras la habilitación está en alto, asincrónico); el flip-flop cambia por flanco del reloj (sincrónico)."
      },
      {
        "id": "fc2-22-4",
        "front": "Flancos del reloj",
        "back": "El flanco ascendente es la transición de 0 a 1 y el descendente de 1 a 0. Son los momentos clave en cada pulso del clock."
      },
      {
        "id": "fc2-22-5",
        "front": "Estado prohibido del latch SR",
        "back": "$S=1$ y $R=1$: ambas NOR sacan 0, así que $Q$ y $\\overline{Q}$ quedan iguales y dejan de ser complementarias. Se marca con X."
      },
      {
        "id": "fc2-22-6",
        "front": "Ecuación característica del latch SR",
        "back": "$Q_{n+1} = S + \\overline{R} \\cdot Q_n$, obtenida simplificando la tabla de verdad con mapas de Karnaugh."
      },
      {
        "id": "fc2-22-7",
        "front": "¿Cómo evita el latch D el estado prohibido?",
        "back": "Tiene una sola entrada $D$: a $S$ le va $D$ y a $R$ le va $\\overline{D}$. Así $S$ y $R$ nunca valen 1 al mismo tiempo. Su ecuación es $Q_{n+1}=D$."
      },
      {
        "id": "fc2-22-8",
        "front": "Flip-flop D maestro-esclavo",
        "back": "Dos latches D en cascada con el reloj invertido entre ellos: el maestro toma el dato con clock en 1 y el esclavo lo muestra cuando pasa a 0."
      }
    ]
  },
  "23": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-23-1",
          "q": "El flip-flop JK es análogo al SR, pero aprovecha el caso de ambas entradas en 1 para conmutar en lugar de dejarlo como estado prohibido.",
          "a": true,
          "explain": "Esa es la gracia del JK: con $J=1$ y $K=1$ conmuta (toggle), $Q_{n+1} = \\overline{Q_n}$. Por eso se lo considera una mejora del SR."
        },
        {
          "id": "tf2-23-2",
          "q": "El flip-flop T se arma a partir de un JK uniendo las entradas $J$ y $K$ en una sola entrada $T$.",
          "a": true,
          "explain": "Tal cual: al unir $J$ y $K$ solo quedan $T=0$ (mantiene) y $T=1$ (conmuta). El nombre viene de toggle, alternar."
        },
        {
          "id": "tf2-23-3",
          "q": "En la tabla de excitación del flip-flop D, para pasar de $Q_n=1$ a $Q_{n+1}=0$ se necesita $D=1$.",
          "a": false,
          "explain": "Falso: en el D la salida sigue al dato, así que para ir a 0 hace falta $D=0$. La tabla de excitación del D es directa: $D$ vale lo mismo que el estado futuro."
        },
        {
          "id": "tf2-23-4",
          "q": "En la tabla de excitación del JK, la transición de $Q_n=0$ a $Q_{n+1}=0$ requiere $J=0$ y $K$ en condición de indiferencia (X).",
          "a": true,
          "explain": "Sí: con $J=0$ no setea, y $K$ da igual porque ya estaba en 0. Por eso $K=X$, una condición de indiferencia (don't care)."
        },
        {
          "id": "tf2-23-5",
          "q": "La ecuación característica del JK es $Q_{n+1} = J \\cdot Q_n + \\overline{K} \\cdot \\overline{Q_n}$.",
          "a": false,
          "explain": "Falso, está cambiada. La correcta es $Q_{n+1} = J \\cdot \\overline{Q_n} + \\overline{K} \\cdot Q_n$: setea con $J$ si estaba en 0 y mantiene si no se resetea."
        }
      ],
      "mc": [
        {
          "id": "mc2-23-1",
          "q": "¿Qué hace el flip-flop JK cuando $J=1$ y $K=1$?",
          "options": [
            "Mantiene el estado actual sin cambios",
            "Resetea la salida llevándola a 0",
            "Conmuta: invierte su estado actual",
            "Entra en un estado prohibido inválido"
          ],
          "correctIndex": 2,
          "explain": "Justo el caso que en el SR era prohibido, en el JK conmuta: $Q_{n+1} = \\overline{Q_n}$. Eso es lo que después aprovecha el flip-flop T."
        },
        {
          "id": "mc2-23-2",
          "q": "¿De qué elemento parte la construcción interna del flip-flop JK?",
          "options": [
            "De un latch D con un inversor agregado a la entrada",
            "De un RS realimentado con $Q$ y $\\overline{Q}$",
            "De dos flip-flops T conectados en cascada con el clock",
            "De una sola compuerta XOR realimentada sobre sí misma"
          ],
          "correctIndex": 1,
          "explain": "El JK es un RS realimentado: las salidas $Q$ y $\\overline{Q}$ vuelven a las AND de entrada, y esa realimentación es lo que elimina el estado prohibido."
        },
        {
          "id": "mc2-23-3",
          "q": "¿Cuál es la ecuación característica del flip-flop T?",
          "options": [
            "$Q_{n+1} = T \\cdot Q_n$ y nada más que eso, sin más",
            "$Q_{n+1} = T$ siguiendo de forma directa la entrada del biestable",
            "$Q_{n+1} = \\overline{T} + Q_n$ combinando con una suma lógica simple",
            "$Q_{n+1} = \\overline{T} \\cdot Q_n + T \\cdot \\overline{Q_n}$"
          ],
          "correctIndex": 3,
          "explain": "$Q_{n+1} = \\overline{T} \\cdot Q_n + T \\cdot \\overline{Q_n}$: con $T=0$ mantiene $Q_n$ y con $T=1$ conmuta a $\\overline{Q_n}$."
        },
        {
          "id": "mc2-23-4",
          "q": "¿Para qué sirven las tablas de excitación de los biestables?",
          "options": [
            "Indican qué entradas producen cada transición",
            "Muestran solo la salida según las entradas dadas",
            "Calculan el retardo de propagación de la señal de reloj",
            "Definen la frecuencia máxima admisible del clock del circuito"
          ],
          "correctIndex": 0,
          "explain": "Son la tabla dada vuelta: a partir de la transición de $Q_n$ a $Q_{n+1}$ que querés, te dicen qué valores de las entradas la producen. Clave para diseñar."
        },
        {
          "id": "mc2-23-5",
          "q": "Al armar un JK a partir de un flip-flop D, ¿qué expresión queda para la entrada $D$?",
          "options": [
            "$D = T \\cdot \\overline{Q_n}$ usando la entrada T del biestable",
            "$D = J + K \\cdot Q_n$ sumando ambas entradas directo",
            "$D = J \\cdot \\overline{Q_n} + \\overline{K} \\cdot Q_n$",
            "$D = \\overline{J} \\cdot Q_n + K$ con la J negada del flip-flop"
          ],
          "correctIndex": 2,
          "explain": "Simplificando la columna D queda $D = J \\cdot \\overline{Q_n} + \\overline{K} \\cdot Q_n$, que es justo la ecuación característica del JK. Con esa lógica se alimenta el D."
        }
      ],
      "ms": [
        {
          "id": "ms2-23-1",
          "q": "Sobre el funcionamiento del flip-flop JK, ¿cuáles afirmaciones son correctas?",
          "options": [
            "Con $J=0$ y $K=0$ mantiene el estado",
            "Con $J=1$ y $K=0$ setea la salida en 1",
            "Con $J=0$ y $K=1$ conmuta la salida",
            "Con $J=1$ y $K=1$ resetea siempre a 0",
            "$J$ cumple el rol de Set y $K$ el de Reset"
          ],
          "correctIndexes": [
            0,
            1,
            4
          ],
          "explain": "La 3 es falsa ($0,1$ resetea, no conmuta) y la 4 también ($1,1$ conmuta, no resetea). Las otras tres son correctas."
        },
        {
          "id": "ms2-23-2",
          "q": "El flip-flop JK debe su nombre a Jack Kilby. ¿Cuáles de estas afirmaciones sobre su origen y símbolo son FALSAS según el texto?",
          "options": [
            "Kilby fue inventor de los circuitos integrados",
            "El símbolo mostrado es el JK por flanco ascendente",
            "$J$ cumple el rol de Set en el funcionamiento",
            "El JK es análogo en su lógica al flip-flop SR",
            "$K$ cumple el rol de Reset en el funcionamiento"
          ],
          "correctIndexes": [],
          "explain": "Ojo, acá ninguna es falsa: las cinco afirmaciones aparecen tal cual en el texto. Kilby inventó los integrados, el símbolo es por flanco ascendente, $J$ es Set, $K$ es Reset y el JK es análogo al SR."
        },
        {
          "id": "ms2-23-3",
          "q": "¿Cuáles de estas afirmaciones sobre el flip-flop T y los diagramas de estado son INCORRECTAS según el texto?",
          "options": [
            "Con $T=0$ el flip-flop T mantiene su estado actual",
            "Con $T=1$ el flip-flop T conmuta o invierte su salida",
            "El nombre T viene del inglés toggle, o sea conmutar",
            "El diagrama de transiciones del T tiene condiciones X",
            "Las tablas de excitación van de las entradas a la salida"
          ],
          "correctIndexes": [
            3,
            4
          ],
          "explain": "Dos son falsas: las X aparecen en el JK, no en el T (que es directo). Y las tablas de excitación van al revés: de la transición hacia las entradas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-23-1",
        "front": "¿Qué resuelve el flip-flop JK respecto del SR?",
        "back": "Elimina el estado prohibido: el caso de ambas entradas en 1, que en el SR no era válido, en el JK se aprovecha para conmutar."
      },
      {
        "id": "fc2-23-2",
        "front": "Funcionamiento del JK según $J$ y $K$",
        "back": "$0,0$ mantiene; $1,0$ setea; $0,1$ resetea; $1,1$ conmuta ($Q_{n+1}=\\overline{Q_n}$). $J$ hace de Set y $K$ de Reset."
      },
      {
        "id": "fc2-23-3",
        "front": "Ecuación característica del JK",
        "back": "$Q_{n+1} = J \\cdot \\overline{Q_n} + \\overline{K} \\cdot Q_n$."
      },
      {
        "id": "fc2-23-4",
        "front": "¿Cómo se arma un flip-flop T?",
        "back": "A partir de un JK, uniendo $J$ y $K$ en una sola entrada $T$. Con $T=0$ mantiene y con $T=1$ conmuta."
      },
      {
        "id": "fc2-23-5",
        "front": "Ecuación característica del T",
        "back": "$Q_{n+1} = \\overline{T} \\cdot Q_n + T \\cdot \\overline{Q_n}$."
      },
      {
        "id": "fc2-23-6",
        "front": "¿Qué es una tabla de excitación?",
        "back": "Indica qué valores deben tener las entradas (J, K, T, D) para producir cada transición de $Q_n$ a $Q_{n+1}$. Es la herramienta clave para diseñar."
      },
      {
        "id": "fc2-23-7",
        "front": "¿Por qué la tabla de excitación del JK tiene X?",
        "back": "Porque una misma transición se logra con más de una combinación de $J$ y $K$. La entrada que puede tomar cualquier valor se anota como X (indiferencia)."
      },
      {
        "id": "fc2-23-8",
        "front": "Armar un JK con un flip-flop D",
        "back": "Se agrega una columna $D$ a la tabla del JK, se simplifica y queda $D = J \\cdot \\overline{Q_n} + \\overline{K} \\cdot Q_n$, que alimenta la entrada D con AND, OR e inversor."
      }
    ]
  },
  "24": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-24-1",
          "q": "En un contador síncrono todos los flip-flops se conectan a una misma señal de clock, de forma que pueden cambiar de estado en un mismo momento.",
          "a": true,
          "explain": "Esa es la definición de síncrono: clock común para todos, así cambian al mismo tiempo. Lo diferencia del asincrónico."
        },
        {
          "id": "tf2-24-2",
          "q": "El módulo de un contador es la cantidad de estados por los que pasa antes de reiniciar la secuencia.",
          "a": true,
          "explain": "Sí: el módulo es la cantidad de pulsos (estados) para completar una secuencia. El contador de 3 bits que recorre los 8 estados tiene módulo $M=8$."
        },
        {
          "id": "tf2-24-3",
          "q": "En el contador síncrono de 3 bits con flip-flops JK, las funciones lógicas obtenidas son $J_0 = 1$ y $K_0 = 1$.",
          "a": true,
          "explain": "Tal cual: el flip-flop 0 conmuta en cada pulso, así que $J_0 = 1$ y $K_0 = 1$. El de menor peso siempre alterna."
        },
        {
          "id": "tf2-24-4",
          "q": "En el contador de secuencia no consecutiva, los estados por los que el contador no pasa se completan con 0 en la tabla de excitación.",
          "a": false,
          "explain": "Falso: se completan con X (don't care), no con 0. Eso es lo que permite agrupaciones más grandes en Karnaugh y funciones más simples."
        },
        {
          "id": "tf2-24-5",
          "q": "Para minimizar las funciones de un contador conviene un único mapa de Karnaugh que cubra a la vez todas las entradas de todos los flip-flops.",
          "a": false,
          "explain": "Falso: se hace un mapa por cada entrada de cada flip-flop (uno por columna $J$ y otro por columna $K$), usando como variables los estados actuales."
        }
      ],
      "mc": [
        {
          "id": "mc2-24-1",
          "q": "¿Qué es un contador?",
          "options": [
            "Un sumador completo realimentado en serie a través de su carry de salida",
            "Un dispositivo de memoria que recorre una secuencia de estados",
            "Una compuerta lógica combinacional con salida periódica fija y sin memoria",
            "Un latch que mantiene siempre el mismo bit sin cambiar nunca de estado"
          ],
          "correctIndex": 1,
          "explain": "Es un dispositivo de memoria (combinación de biestables) que cambia de estado siguiendo una secuencia establecida."
        },
        {
          "id": "mc2-24-2",
          "q": "En el contador síncrono de 3 bits que recorre 000 a 111, ¿cuál es su módulo?",
          "options": [
            "Módulo 3, uno por cada uno de los 3 bits",
            "Módulo 4, la mitad de los estados posibles",
            "Módulo 6, por las transiciones consideradas útiles",
            "Módulo 8, por los 8 estados recorridos"
          ],
          "correctIndex": 3,
          "explain": "Con 3 bits hay $2^3 = 8$ estados y los recorre todos, así que $M = 8$. El módulo es la cantidad de estados de la secuencia completa."
        },
        {
          "id": "mc2-24-3",
          "q": "¿Cuántos flip-flops se necesitan para un contador síncrono de 3 bits?",
          "options": [
            "Tres flip-flops, uno por bit",
            "Ocho flip-flops, uno por estado",
            "Dos flip-flops más una AND",
            "Un flip-flop reutilizado en cada pulso"
          ],
          "correctIndex": 0,
          "explain": "Cada flip-flop guarda un bit, así que un contador de 3 bits lleva 3 flip-flops, todos al mismo clock por ser síncrono."
        },
        {
          "id": "mc2-24-4",
          "q": "En el contador de 3 bits con JK, ¿qué función lógica se obtuvo para $J_2$ y $K_2$?",
          "options": [
            "$J_2 = Q_0$ y $K_2 = Q_1$ por separado",
            "$J_2 = K_2 = Q_1 \\cdot Q_0$",
            "$J_2 = 1$ y $K_2 = 1$ siempre fijos",
            "$J_2 = K_2 = Q_1 + Q_0$ con suma"
          ],
          "correctIndex": 1,
          "explain": "El flip-flop 2 conmuta cuando $Q_1$ y $Q_0$ están ambos en 1, así que $J_2 = K_2 = Q_1 \\cdot Q_0$. Por eso hace falta una AND para esas entradas."
        },
        {
          "id": "mc2-24-5",
          "q": "¿Por qué conviene que el contador vuelva a la secuencia si cae en un estado no permitido?",
          "options": [
            "Para evitar que se queme alguno de los flip-flops del circuito",
            "Para poder aumentar la frecuencia máxima de trabajo del clock",
            "Para no quedar atrapado en una secuencia no deseada",
            "Para reducir la cantidad total de flip-flops que se necesitan"
          ],
          "correctIndex": 2,
          "explain": "Si por ruido cae en un estado no previsto, conviene que vuelva en el siguiente pulso; si no, podría quedar atrapado en una secuencia no deseada para siempre."
        }
      ],
      "ms": [
        {
          "id": "ms2-24-1",
          "q": "Sobre el método para diseñar un contador síncrono, ¿cuáles pasos menciona el texto?",
          "options": [
            "Plantear el diagrama de estados",
            "Armar la tabla de estado actual y futuro",
            "Completar las entradas con la tabla de excitación",
            "Minimizar con mapas de Karnaugh",
            "Medir el retardo físico de cada flip-flop"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "El método es: diagrama de estados, tabla de transición, entradas por excitación, minimización con Karnaugh y circuito. Medir retardo no es parte del procedimiento."
        },
        {
          "id": "ms2-24-2",
          "q": "Sobre el contador de secuencia no consecutiva (0, 5, 9, 12, 2), ¿cuáles afirmaciones son correctas?",
          "options": [
            "Cada estado se escribe con 4 bits",
            "Su módulo es 5",
            "Es un contador cíclico que reinicia la secuencia",
            "Usa flip-flops JK por flanco descendente",
            "No tiene estados no permitidos"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "El mayor número es $12=1100$, así que 4 bits; módulo 5; cíclico; JK por flanco descendente. La 5 es falsa: sí tiene estados no permitidos (1, 3, 4, 6...)."
        },
        {
          "id": "ms2-24-3",
          "q": "¿Cuáles de estas funciones lógicas NO corresponden al contador de secuencia no consecutiva según el texto?",
          "options": [
            "$J_2 = \\overline{Q_1}$",
            "$K_2 = 1$",
            "$J_3 = Q_2$",
            "$K_0 = Q_3$",
            "$J_0 = Q_1 \\cdot Q_2$"
          ],
          "correctIndexes": [
            4
          ],
          "explain": "La única que no figura es la 5: el texto da $J_0 = \\overline{Q_3} \\cdot \\overline{Q_1}$. Las otras cuatro ($J_2=\\overline{Q_1}$, $K_2=1$, $J_3=Q_2$, $K_0=Q_3$) sí están."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-24-1",
        "front": "¿Qué es un contador?",
        "back": "Un dispositivo de memoria, hecho de biestables conectados, que cambia de estado siguiendo una secuencia establecida."
      },
      {
        "id": "fc2-24-2",
        "front": "¿Qué es el módulo de un contador?",
        "back": "La cantidad de estados por los que pasa: los pulsos de reloj que necesita para completar una secuencia. Lo fijan la cantidad de biestables y cómo se conectan."
      },
      {
        "id": "fc2-24-3",
        "front": "Contador síncrono",
        "back": "Aquel en el que todos los flip-flops comparten una misma señal de clock, de modo que pueden cambiar de estado en un mismo momento."
      },
      {
        "id": "fc2-24-4",
        "front": "Pasos para diseñar un contador síncrono",
        "back": "1) Diagrama de estados, 2) tabla de estado actual y futuro con la excitación (J, K), 3) minimización con Karnaugh, 4) circuito lógico."
      },
      {
        "id": "fc2-24-5",
        "front": "Funciones lógicas del contador de 3 bits con JK",
        "back": "$J_2 = K_2 = Q_1 \\cdot Q_0$; $J_1 = K_1 = Q_0$; $J_0 = K_0 = 1$."
      },
      {
        "id": "fc2-24-6",
        "front": "¿Para qué sirven las X (don't care) en la tabla de un contador?",
        "back": "Se ponen en los estados por los que el contador no pasa; permiten agrupaciones más grandes en Karnaugh y funciones lógicas menos complejas."
      },
      {
        "id": "fc2-24-7",
        "front": "Contador cíclico",
        "back": "El que reinicia su secuencia indefinidamente. Por ejemplo el de secuencia 0, 5, 9, 12, 2 tiene módulo 5 y vuelve a empezar tras 5 pulsos."
      },
      {
        "id": "fc2-24-8",
        "front": "¿Qué hacer si el contador cae en un estado no permitido?",
        "back": "Conviene que en el siguiente pulso vuelva a la secuencia; si no, podría quedar atrapado. A veces hay que agregar compuertas que aseguren el regreso."
      }
    ]
  },
  "25": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-25-1",
          "q": "En un contador asincrónico todos los flip flops se conectan a la misma señal de clock y cambian en un mismo momento.",
          "a": false,
          "explain": "Al revés: eso describe a los sincrónicos. En el asincrónico los flip flops no comparten el mismo clock, así que los cambios ocurren en cadena, no todos juntos."
        },
        {
          "id": "tf2-25-2",
          "q": "A los contadores asíncronos se los conoce como contadores con propagación o de rizado (ripple) por el retardo que se va acumulando flip flop a flip flop.",
          "a": true,
          "explain": "Tal cual. El retardo de propagación se acumula etapa a etapa, y de ahí salen los nombres ripple, rizado o de propagación."
        },
        {
          "id": "tf2-25-3",
          "q": "En el contador asincrónico de ejemplo que va del 0 al 9, cuando $Q_1$ y $Q_3$ valen uno se resetean de forma asíncrona todos los flip flops.",
          "a": false,
          "explain": "Ojo con los índices: el reset se dispara cuando $Q_2$ y $Q_0$ valen uno (al llegar al 10), no $Q_1$ y $Q_3$."
        },
        {
          "id": "tf2-25-4",
          "q": "Los registros de desplazamiento funcionan de manera sincrónica, con todos sus flip flops conectados a la misma señal de clock.",
          "a": true,
          "explain": "Sí. A diferencia del contador asincrónico, el shift register es sincrónico: todos los flip flops comparten el mismo clock."
        },
        {
          "id": "tf2-25-5",
          "q": "El glitch en el contador asíncrono es un pico de tensión de corta duración no deseado, producto de los retardos de propagación.",
          "a": true,
          "explain": "Correcto. Como debe pasar unos nanosegundos por el estado 1010 antes de reiniciarse, aparece ese pico breve no deseado: el glitch."
        }
      ],
      "mc": [
        {
          "id": "mc2-25-1",
          "q": "¿Qué condición habilita que el segundo flip flop del contador asíncrono de ejemplo cambie de estado?",
          "options": [
            "Que la salida negada del primero pase de cero a uno",
            "Que la entrada de clock global tenga un flanco descendente",
            "Que la salida directa del primero pase de uno a cero",
            "Que el cuarto flip flop reciba un pulso de reset"
          ],
          "correctIndex": 0,
          "explain": "Cada flip flop depende de la salida negada del anterior: recién cuando esa salida negada pasa de cero a uno, la etapa siguiente puede cambiar."
        },
        {
          "id": "mc2-25-2",
          "q": "Si el clock del contador divisor es de 100 Hz, ¿qué frecuencia tiene $Q_1$?",
          "options": [
            "Una frecuencia de 50 Hz por ser la primera división",
            "Una frecuencia de 25 Hz tras dos divisiones sucesivas",
            "Una frecuencia de 12,5 Hz, o sea $\\frac{100}{8}$",
            "Una frecuencia de 100 Hz, igual a la del clock"
          ],
          "correctIndex": 2,
          "explain": "Cada etapa divide a la mitad: 100, 50, 25 y 12,5 Hz. $Q_1$ queda en $\\frac{100}{8} = 12{,}5$ Hz."
        },
        {
          "id": "mc2-25-3",
          "q": "En un registro de desplazamiento serie/paralelo, ¿cómo entran y salen los datos?",
          "options": [
            "Entran todos juntos y salen de a un bit",
            "Entran de a un bit y salen todos juntos",
            "Entran y salen todos juntos a la vez",
            "Entran y salen de a un bit por vez"
          ],
          "correctIndex": 1,
          "explain": "Serie/paralelo significa entrada serie (de a un bit) y salida paralelo (todos juntos)."
        },
        {
          "id": "mc2-25-4",
          "q": "¿Qué elementos intervienen en una operación de lectura de memoria con decodificador de direcciones?",
          "options": [
            "El decodificador, el sumador, la ALU y el registro de datos",
            "El registro de direcciones, el decodificador, la matriz y los datos",
            "El registro de direcciones, el contador, el reloj y la matriz",
            "El decodificador, la matriz, el flip flop T y el divisor de frecuencia de salida"
          ],
          "correctIndex": 1,
          "explain": "En la lectura intervienen el registro de direcciones, el decodificador de direcciones, la matriz de memoria y el registro de datos."
        },
        {
          "id": "mc2-25-5",
          "q": "¿Qué fórmula expresa cómo el contador asíncrono divide la frecuencia en cada etapa?",
          "options": [
            "La expresión $f = \\frac{1}{2^{n}}$",
            "La expresión multiplicativa $f = 2^{n}$ por etapa",
            "La expresión proporcional $f = \\frac{n}{2}$ por etapa",
            "La expresión cuadrática $f = \\frac{1}{n^{2}}$"
          ],
          "correctIndex": 0,
          "explain": "El texto da $f = \\frac{1}{2^{n}}$: cada etapa adicional divide la frecuencia a la mitad."
        }
      ],
      "ms": [
        {
          "id": "ms2-25-1",
          "q": "¿Cuáles de estas afirmaciones sobre los contadores asíncronos son correctas?",
          "options": [
            "Sus flip flops no dependen todos del mismo pulso de clock",
            "El retardo de propagación se va acumulando etapa a etapa",
            "Suelen presentar glitches por los retardos de propagación",
            "Todos sus flip flops cambian de estado exactamente en el mismo instante de reloj",
            "La salida de cada etapa puede alimentar el reloj de la siguiente"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Todas salvo la del cambio simultáneo: justamente lo que define al asíncrono es que NO cambian todos a la vez. El resto (clock no compartido, retardo acumulado, glitches y encadenamiento) sí es correcto."
        },
        {
          "id": "ms2-25-2",
          "q": "¿Cuáles de estos son tipos de registros de desplazamiento según entrada/salida mencionados en el texto?",
          "options": [
            "Serie / serie con entrada y salida de a un bit",
            "Paralelo / serie con entrada en bloque y salida de a uno",
            "Analógico / digital con una conversión intermedia de los datos almacenados",
            "De rotación que desplaza los bits a derecha o izquierda",
            "Serie / paralelo con entrada de a un bit y salida en bloque"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Los tipos válidos son serie/serie, serie/paralelo, paralelo/serie, paralelo/paralelo y de rotación. El analógico/digital no aparece: es un distractor."
        },
        {
          "id": "ms2-25-3",
          "q": "¿Cuáles de estas afirmaciones sobre los registros de desplazamiento son correctas según el texto?",
          "options": [
            "Siguen siempre una secuencia fija de estados como los contadores",
            "Reemplazan al decodificador en la lectura de memoria RAM",
            "Dividen la frecuencia del clock a la mitad en cada etapa",
            "Generan glitches por acumulación de retardos de propagación",
            "Funcionan de manera asincrónica con clocks independientes"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. Los registros en general NO siguen secuencia específica, son sincrónicos (mismo clock), no son divisores de frecuencia ni reemplazan al decodificador, y lo del glitch es del contador asíncrono."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-25-1",
        "front": "Contador sincrónico vs asincrónico",
        "back": "En el sincrónico todos los flip flops comparten una misma señal de clock y pueden cambiar a la vez. En el asincrónico no comparten clock, así que los cambios ocurren en cadena, no todos en el mismo momento."
      },
      {
        "id": "fc2-25-2",
        "front": "¿Por qué se llaman contadores con propagación (ripple)?",
        "back": "Por el retardo de propagación de los flip flops, que se va acumulando de uno a otro. También se los llama de rizado o ripple."
      },
      {
        "id": "fc2-25-3",
        "front": "Glitch en un contador asíncrono",
        "back": "Pico de tensión de corta duración no deseado, producto de los retardos de propagación. En el contador del 0 al 9 aparece al pasar unos nanosegundos por el estado 1010 antes de reiniciarse."
      },
      {
        "id": "fc2-25-4",
        "front": "Divisor de frecuencia",
        "back": "Aplicación del contador que obtiene frecuencias menores a partir de una dada (como la del clock), dividiéndola a la mitad en cada etapa: $f = \\frac{1}{2^{n}}$."
      },
      {
        "id": "fc2-25-5",
        "front": "Registro de desplazamiento (shift register)",
        "back": "Circuito secuencial con n flip flops (generalmente D) conectados en serie que desplaza la información binaria en una u otra dirección. Es sincrónico: todos comparten el mismo clock."
      },
      {
        "id": "fc2-25-6",
        "front": "Tipos de registros según entrada/salida",
        "back": "Serie/serie, serie/paralelo, paralelo/serie, paralelo/paralelo y de rotación (que rota los bits a derecha o izquierda)."
      },
      {
        "id": "fc2-25-7",
        "front": "Registro vs contador",
        "back": "El registro almacena n bits con n flip flops y en general no sigue una secuencia específica de estados; el contador sí sigue una secuencia definida."
      },
      {
        "id": "fc2-25-8",
        "front": "Lectura de memoria con decodificador",
        "back": "La dirección apunta a la posición de una palabra (fila) en la matriz de celdas. Intervienen el registro de direcciones, el decodificador de direcciones, la matriz de memoria y el registro de datos."
      }
    ]
  },
  "26": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-26-1",
          "q": "Una máquina de estados finita (FSM) avanza secuencialmente por un conjunto predefinido y finito de estados, controlado por el clock y otras entradas externas.",
          "a": true,
          "explain": "Esa es la definición: avanza por estados finitos y predefinidos, gobernado por la señal de clock y entradas externas."
        },
        {
          "id": "tf2-26-2",
          "q": "En una máquina de Moore las salidas pueden cambiar en pleno estado por efecto de las entradas, aun sin cambiar de estado.",
          "a": false,
          "explain": "Eso es Mealy. En Moore la salida depende solo del estado actual y se mantiene constante durante todo el estado."
        },
        {
          "id": "tf2-26-3",
          "q": "En el diagrama de estados de una máquina de Mealy la salida se asocia a la transición, sobre la flecha, junto a la entrada.",
          "a": true,
          "explain": "Sí: en Mealy la salida va sobre la transición (la flecha). En Moore, en cambio, la salida va dentro del nodo del estado."
        },
        {
          "id": "tf2-26-4",
          "q": "Según el texto, un contador no es en ningún caso una máquina de estados.",
          "a": false,
          "explain": "Falso. En rigor un contador SÍ es una máquina de estados, solo que el término se reserva más para circuitos que controlan eventos en lugar de contarlos."
        },
        {
          "id": "tf2-26-5",
          "q": "En una FSM se puede estar en varios estados a la vez mientras las entradas no cambien.",
          "a": false,
          "explain": "No: cada estado tiene nombre único y no se puede estar en más de un estado a la vez. Al actual se lo llama estado actual."
        }
      ],
      "mc": [
        {
          "id": "mc2-26-1",
          "q": "¿De qué dependen las salidas en una máquina de Moore?",
          "options": [
            "Solo de las entradas actuales del sistema",
            "Tanto del estado actual como de las entradas",
            "Solo del estado actual en el que se encuentra",
            "Del reloj y de la lógica combinacional de salida"
          ],
          "correctIndex": 2,
          "explain": "En Moore la salida depende únicamente del estado actual; las entradas no llegan a la lógica de salida. Por eso es más estable y determinista."
        },
        {
          "id": "mc2-26-2",
          "q": "¿Cuál es la diferencia clave entre las máquinas de Moore y Mealy?",
          "options": [
            "De qué depende la salida en cada modelo",
            "La cantidad de estados que cada modelo puede llegar a representar",
            "Si usan o no una señal de clock externa para sincronizarse",
            "El tipo de flip flop que se emplea internamente en cada modelo"
          ],
          "correctIndex": 0,
          "explain": "La gran división es de qué depende la salida: en Moore solo del estado, en Mealy del estado y de las entradas."
        },
        {
          "id": "mc2-26-3",
          "q": "En un diagrama ASM de tipo Mealy, ¿dónde quedan ubicadas las salidas?",
          "options": [
            "Dentro del bloque de estado de forma incondicional",
            "Colgando de las ramas de decisión según la entrada",
            "En el rombo de decisión que evalúa la entrada",
            "En la señal de clock que sincroniza el bloque"
          ],
          "correctIndex": 1,
          "explain": "En la carta ASM Mealy las salidas son condicionales: cuelgan de las ramas de decisión, dependiendo de la entrada."
        },
        {
          "id": "mc2-26-4",
          "q": "Según el texto, ¿para qué se usa típicamente el término máquina de estados frente al de contador?",
          "options": [
            "Para circuitos que cuentan eventos de manera cíclica y repetitiva",
            "Para circuitos puramente combinacionales que no tienen memoria",
            "Para circuitos que dividen a la mitad la frecuencia del clock",
            "Para circuitos secuenciales que controlan eventos"
          ],
          "correctIndex": 3,
          "explain": "Al contador se lo piensa para contar eventos; el término máquina de estados se reserva más para circuitos secuenciales que controlan eventos."
        },
        {
          "id": "mc2-26-5",
          "q": "¿Qué es un algoritmo según la definición usada para el diagrama ASM?",
          "options": [
            "Un conjunto ordenado y finito de operaciones",
            "Un modelo de salida que depende solo del estado actual del sistema",
            "Una matriz de celdas donde cada celda almacena un único bit",
            "Una señal externa que dispara las transiciones entre estados"
          ],
          "correctIndex": 0,
          "explain": "El texto define algoritmo como un conjunto ordenado y finito de operaciones que resuelve un problema mediante pasos bien definidos."
        }
      ],
      "ms": [
        {
          "id": "ms2-26-1",
          "q": "¿Cuáles de estas afirmaciones sobre los estados y transiciones de una FSM son correctas?",
          "options": [
            "Cada estado tiene un nombre único e irrepetible",
            "Las transiciones se asocian a condiciones externas como las entradas",
            "Se puede estar en más de un estado del sistema simultáneamente y en paralelo",
            "Las salidas pueden depender del estado actual y/o de las entradas",
            "Al estado en el que se encuentra el sistema se lo llama estado actual"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Todas salvo la de estar en varios estados a la vez: justamente no se puede. El resto (nombre único, transiciones por entradas, salidas según estado/entradas, estado actual) es correcto."
        },
        {
          "id": "ms2-26-2",
          "q": "¿Cuáles de estas son aplicaciones de las máquinas de estados mencionadas en el texto?",
          "options": [
            "Codificar y decodificar datos en sistemas de comunicación",
            "Implementar protocolos para asegurar el orden correcto de acciones",
            "Controlar dispositivos en sistemas embebidos y de control",
            "Actuar en respuesta a sensores e interruptores externos",
            "Amplificar señales analógicas en las etapas de potencia de salida de un equipo"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras aparecen como aplicaciones (comunicación, protocolos, sistemas embebidos y respuesta a sensores). Amplificar señales analógicas no figura: es el distractor."
        },
        {
          "id": "ms2-26-3",
          "q": "¿Cuáles de estas afirmaciones sobre la máquina de Moore son correctas?",
          "options": [
            "Sus salidas dependen del estado y también de las entradas",
            "La salida cambia en pleno estado al variar las entradas",
            "Sus salidas se consideran deterministas y más estables",
            "La salida está asociada a la transición sobre la flecha",
            "Las entradas llegan directamente a la lógica de salida"
          ],
          "correctIndexes": [
            2
          ],
          "explain": "Solo la tercera: en Moore las salidas son deterministas y estables. Las demás describen a Mealy (salida según entradas, cambio en pleno estado, salida sobre la transición, entradas en la lógica de salida)."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-26-1",
        "front": "Máquina de estados finita (FSM)",
        "back": "Modelo para diseñar circuitos lógicos secuenciales sincronizados. Avanza por un conjunto finito y predefinido de estados, controlado por el clock y entradas externas."
      },
      {
        "id": "fc2-26-2",
        "front": "Estado actual",
        "back": "El estado en el que se encuentra el sistema. Cada estado tiene nombre único y no se puede estar en más de uno a la vez."
      },
      {
        "id": "fc2-26-3",
        "front": "Transiciones en una FSM",
        "back": "Definen las condiciones bajo las cuales el sistema cambia de un estado a otro. Están asociadas a condiciones externas como las señales de entrada."
      },
      {
        "id": "fc2-26-4",
        "front": "Máquina de Moore",
        "back": "Las salidas dependen solo del estado actual. La salida es constante durante todo el estado y cambia cuando cambia el estado. Es determinista y más estable."
      },
      {
        "id": "fc2-26-5",
        "front": "Máquina de Mealy",
        "back": "Las salidas dependen del estado actual y también de las entradas actuales. La salida puede cambiar aun manteniéndose en el mismo estado, por efecto de las entradas."
      },
      {
        "id": "fc2-26-6",
        "front": "Moore vs Mealy en el diagrama de estados",
        "back": "En Moore la salida va dentro del nodo del estado; en Mealy la salida va sobre la flecha de transición, junto a la entrada."
      },
      {
        "id": "fc2-26-7",
        "front": "Diagrama ASM",
        "back": "Máquina de estados algorítmico: modela la FSM con pinta de diagrama de flujo, con bloques de estado y rombos de decisión sobre las entradas. Un algoritmo es un conjunto ordenado y finito de operaciones."
      },
      {
        "id": "fc2-26-8",
        "front": "¿Es el contador una máquina de estados?",
        "back": "Sí, en rigor lo es. Pero el término máquina de estados se usa más para circuitos que controlan eventos, mientras que el contador se piensa para contar eventos."
      }
    ]
  }
};
