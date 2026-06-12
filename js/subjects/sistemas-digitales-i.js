/**
 * Materia: Sistemas Digitales I.
 *
 * Contenido transcripto de los apuntes de la cátedra (Universidad de Palermo,
 * 0560). Cada unidad cubre un apunte o grupo de apuntes:
 *   '1' — Sistemas de numeración y aritmética binaria
 *   '2' — Álgebra de Boole y compuertas lógicas
 *   '3' — Mapas de Karnaugh
 *   '4' — Hardware digital
 *   '5' — Circuitos combinatorios (decodificadores, multiplexores, sumadores, comparadores)
 *   '6' — Circuitos secuenciales (biestables, contadores)
 *   '7' — Máquinas de estado
 *   '8' — Guías de ejercicios (procedimiento + respuestas resueltas)
 *
 * Fórmulas en LaTeX entre $...$ (inline) o $$...$$ (display), render por KaTeX.
 * Diagramas extraídos de los PDFs en images/diagrams/sistemas-digitales-i/.
 */

export default {
  id: 'sistemas-digitales-i',
  title: 'Sistemas Digitales I',
  subtitle: 'Lógica digital — apuntes y ejercicios',
  tagline: 'Numeración y aritmética binaria · Álgebra de Boole y compuertas · Karnaugh · Combinatorios y secuenciales · Máquinas de estado',
  units: {
    '1': 'Sistemas de numeración y aritmética binaria',
    '2': 'Álgebra de Boole y compuertas lógicas',
    '3': 'Mapas de Karnaugh',
    '4': 'Hardware digital',
    '5': 'Circuitos combinatorios',
    '6': 'Circuitos secuenciales',
    '7': 'Máquinas de estado',
    '8': 'Guías de ejercicios',
  },
  sections: [
    // ===================================================================
    // UNIDAD 1 — Sistemas de numeración y aritmética binaria
    // ===================================================================
    {
      id: '1',
      unit: '1',
      title: 'Sistemas de numeración posicionales',
      criollo: 'Un sistema de numeración es un conjunto de símbolos más reglas para armar números. Los que nos importan son los posicionales: el valor de cada dígito depende de en qué posición está. Decimal, binario, octal y hexadecimal funcionan todos igual, solo cambia la base.',
      blocks: [
        {
          type: 'p',
          text: 'Un <strong>sistema de numeración</strong> se define como un conjunto de símbolos y reglas que permiten construir todos los números de dicho sistema. Dentro de ellos se distinguen los <strong>posicionales</strong>, en los cuales el valor del símbolo depende no solo del valor en sí mismo, sino también de la posición en la que se encuentra dentro del número.',
        },
        {
          type: 'p',
          text: 'El sistema decimal es posicional: se llama decimal porque tiene diez símbolos ($0, 1, 2, 3, 4, 5, 6, 7, 8, 9$), por lo que su base es $10$. A estos símbolos se los conoce como <strong>dígito</strong>.',
        },
        {
          type: 'p',
          text: 'Tomemos el número $347$. El dígito más a la izquierda (el $3$) es el de mayor peso, mientras que el más a la derecha (el $7$) es el de menor peso. Se descompone así:',
        },
        {
          type: 'math',
          display: true,
          latex: '347 = 300 + 40 + 7 = 3 \\times 10^2 + 4 \\times 10^1 + 7 \\times 10^0',
        },
        {
          type: 'ul',
          items: [
            '<strong>Base</strong>: cantidad de símbolos o dígitos que conforman dicho sistema de numeración.',
            '<strong>Peso</strong>: valor del dígito en función de su posición. En la potencia, la base indica el sistema y el exponente indica la posición.',
          ],
        },
        {
          type: 'p',
          text: 'El decimal no es el único posicional: todos los sistemas posicionales se estructuran igual que el de base $10$, cambiando la base y, por lo tanto, sus símbolos. Los que se estudian en sistemas digitales son:',
        },
        {
          type: 'table',
          caption: 'Sistemas de numeración usados en sistemas digitales',
          headers: ['Sistema', 'Base', 'Símbolos'],
          rows: [
            ['Decimal', '$10$', '$0, 1, 2, 3, 4, 5, 6, 7, 8, 9$'],
            ['Binario', '$2$', '$0, 1$'],
            ['Octal', '$8$', '$0, 1, 2, 3, 4, 5, 6, 7$'],
            ['Hexadecimal', '$16$', '$0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F$'],
          ],
        },
        {
          type: 'p',
          text: 'Para indicar en qué base se está trabajando se agrega un subíndice: decimal $10$ o $d$ (ejemplo: $25_{10}$ o $25_d$), binario $2$ o $b$, octal $8$ u $o$, y hexadecimal $16$ o $H$.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'En el sistema binario, al dígito binario se lo conoce como <strong>bit</strong> (binary digit). A la agrupación de 4 bits se le llama <strong>nibble</strong>, y a la de 8 bits se la conoce como <strong>byte</strong>.',
        },
        {
          type: 'h3',
          text: 'Representación de los primeros números en cada base',
          criollo: 'Fijate un detalle lindo: la combinación de dígitos "10" en cualquier base, pasada a decimal, da justo el número de la base. "10" en binario es 2, en octal es 8, en hexa es 16.',
        },
        {
          type: 'table',
          caption: 'Equivalencia de los primeros enteros positivos entre bases',
          headers: ['Decimal', 'Binario', 'Octal', 'Hexadecimal'],
          rows: [
            ['0', '0', '0', '0'],
            ['1', '1', '1', '1'],
            ['2', '10', '2', '2'],
            ['3', '11', '3', '3'],
            ['4', '100', '4', '4'],
            ['5', '101', '5', '5'],
            ['6', '110', '6', '6'],
            ['7', '111', '7', '7'],
            ['8', '1000', '10', '8'],
            ['9', '1001', '11', '9'],
            ['10', '1010', '12', 'A'],
            ['11', '1011', '13', 'B'],
            ['12', '1100', '14', 'C'],
            ['13', '1101', '15', 'D'],
            ['14', '1110', '16', 'E'],
            ['15', '1111', '17', 'F'],
            ['16', '10000', '20', '10'],
          ],
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-1-1', q: 'En un sistema posicional, el valor de un símbolo depende solo del símbolo en sí, no de su posición.', a: false, explain: 'Al revés: en los posicionales el valor depende del símbolo Y de la posición que ocupa dentro del número.' },
          { id: 'tf-1-2', q: 'La base de un sistema es la cantidad de símbolos que lo conforman.', a: true, explain: 'Exacto: decimal tiene 10 símbolos (base 10), binario tiene 2 (base 2), etc.' },
          { id: 'tf-1-3', q: 'En binario, a la agrupación de 8 bits se la llama nibble.', a: false, explain: 'La de 8 bits es el byte. El nibble es la agrupación de 4 bits.' },
          { id: 'tf-1-4', q: 'En el número 347 (decimal), el dígito de mayor peso es el 7.', a: false, explain: 'El de mayor peso es el que está más a la izquierda (el 3). El 7, más a la derecha, es el de menor peso.' },
        ],
        mc: [
          { id: 'mc-1-1', q: '¿Cuántos símbolos tiene el sistema hexadecimal?', options: ['8', '10', '16', '2'], correctIndex: 2, explain: 'Hexadecimal es base 16: del 0 al 9 más A, B, C, D, E, F.' },
          { id: 'mc-1-2', q: '¿Cómo se descompone 347 en potencias de la base?', options: ['$3 \\times 10^1 + 4 \\times 10^2 + 7 \\times 10^3$', '$3 \\times 10^2 + 4 \\times 10^1 + 7 \\times 10^0$', '$3 \\times 10^3 + 4 \\times 10^2 + 7 \\times 10^1$', '$3 \\times 2^2 + 4 \\times 2^1 + 7 \\times 2^0$'], correctIndex: 1, explain: 'La posición arranca en 0 desde la derecha: el 7 está en posición 0, el 4 en la 1 y el 3 en la 2.' },
          { id: 'mc-1-3', q: 'El subíndice $H$ (o 16) en un número indica que está escrito en base...', options: ['Binaria', 'Octal', 'Decimal', 'Hexadecimal'], correctIndex: 3, explain: 'H o 16 como subíndice indica hexadecimal. Binario es b o 2, octal o u 8, decimal d o 10.' },
        ],
      },
      flashcards: [
        { id: 'fc-1-1', front: 'Sistema de numeración', back: 'Conjunto de símbolos y reglas que permiten construir todos los números de dicho sistema.' },
        { id: 'fc-1-2', front: 'Sistema posicional', back: 'Aquel donde el valor de un símbolo depende no solo de su valor, sino también de la posición que ocupa dentro del número.' },
        { id: 'fc-1-3', front: 'Base', back: 'Cantidad de símbolos o dígitos que conforman un sistema de numeración.' },
        { id: 'fc-1-4', front: 'Peso', back: 'Valor de un dígito en función de su posición dentro del número.' },
        { id: 'fc-1-5', front: 'Bit', back: 'Binary digit: el dígito del sistema binario (0 o 1).' },
        { id: 'fc-1-6', front: 'Nibble', back: 'Agrupación de 4 bits.' },
        { id: 'fc-1-7', front: 'Byte', back: 'Agrupación de 8 bits.' },
        { id: 'fc-1-8', front: 'Bases que se estudian', back: 'Decimal (10), binario (2), octal (8) y hexadecimal (16).' },
      ],
    },
    {
      id: '2',
      unit: '1',
      title: 'Conversión entre bases',
      criollo: 'Para no llenar tablas a mano, hay métodos. De decimal a otra base: dividís sucesivamente por la base destino. De otra base a decimal: forma polinomial. Y entre binario, octal y hexa podés saltar directo agrupando bits, porque 8 y 16 son potencias de 2.',
      blocks: [
        {
          type: 'h3',
          text: 'Del sistema decimal al binario',
          criollo: 'Dividís el número por 2 una y otra vez hasta que el cociente sea menor que 2, anotando los restos. El último cociente más los restos, leídos de abajo hacia arriba, te dan el binario.',
        },
        {
          type: 'p',
          text: 'Se quiere pasar $50_d$ a binario. Se divide el $50$ por la base destino ($2$) hasta llegar a un resultado entero menor que la base, anotando los restos. El último resultado y los restos concatenados dan el equivalente binario.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/sistemas-digitales-i/u1-division-sucesiva-50-binario-p03.png',
          alt: 'Conversión de 50 decimal a binario por divisiones sucesivas entre 2, mostrando los cocientes (50, 25, 12, 6, 3, 1) y los restos (0, 1, 0, 0, 1, 1) con flechas que indican el orden de lectura del resultado.',
          caption: 'Pasamos 50 a binario dividiendo sucesivamente por 2 y leyendo el último cociente y los restos de abajo hacia arriba.',
        },
        {
          type: 'math',
          display: true,
          latex: '50_d = 110010_b',
        },
        {
          type: 'h3',
          text: 'Del sistema binario al decimal',
          criollo: 'Escribís el número en forma polinomial: cada dígito por la base elevada a su posición (de derecha a izquierda, arrancando en 0). Sumás todo y listo.',
        },
        {
          type: 'math',
          display: true,
          latex: '110010_b = 1 \\times 2^5 + 1 \\times 2^4 + 0 \\times 2^3 + 0 \\times 2^2 + 1 \\times 2^1 + 0 \\times 2^0 = 32 + 16 + 2 = 50_d',
        },
        {
          type: 'h3',
          text: 'Parte fraccionaria: decimal a binario',
          criollo: 'Para la parte de la derecha de la coma multiplicás por 2 sucesivamente, guardando la parte entera de cada paso, hasta llegar a 0 o a los dígitos que quieras.',
        },
        {
          type: 'p',
          text: 'Para pasar $50{,}375_d$ a binario se separa en parte entera ($50_d = 110010_b$, ya hecha) y parte fraccionaria ($0{,}375_d$). La fraccionaria se multiplica por la base ($2$) sucesivamente; en cada paso se guarda la parte entera del resultado y se sigue multiplicando solo la fraccionaria. Las partes enteras obtenidas dan la conversión.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/sistemas-digitales-i/u1-fraccionario-0375-decimal-a-binario-p05.png',
          alt: 'Conversión de la parte fraccionaria 0,375 decimal a binario mediante multiplicaciones sucesivas por 2: 0,375 × 2 = 0,75; 0,75 × 2 = 1,5; 0,5 × 2 = 1,0, dando como resultado 0,011 en binario.',
          caption: 'El fraccionario 0,375 se pasa a binario multiplicando por 2 y tomando la parte entera de cada paso, leída de arriba hacia abajo.',
        },
        {
          type: 'math',
          display: true,
          latex: '50{,}375_d = 110010{,}011_b',
        },
        {
          type: 'p',
          text: 'Para volver de binario a decimal con fraccionario, la posición a la derecha de la coma disminuye de a uno arrancando en $-1$:',
        },
        {
          type: 'math',
          display: true,
          latex: '0{,}011_b = 0 \\times 2^{-1} + 1 \\times 2^{-2} + 1 \\times 2^{-3} = 0 + 0{,}25 + 0{,}125 = 0{,}375_d',
        },
        {
          type: 'h3',
          text: 'De decimal a octal y hexadecimal',
          criollo: 'Es lo mismo que a binario pero cambiando el divisor: por 8 para octal, por 16 para hexa. Ojo en hexa: los restos del 10 al 15 se escriben como A, B, C, D, E, F.',
        },
        {
          type: 'p',
          text: 'Generalizando, para pasar de base $10$ a otra base se divide sucesivamente por esa base. Ejemplo con $29_d$:',
        },
        {
          type: 'figure',
          src: 'images/diagrams/sistemas-digitales-i/u1-conversion-29-binario-octal-hex-p06.png',
          alt: 'Conversión del número 29 decimal a binario (11101), octal (35) y hexadecimal (1D) por divisiones sucesivas, con la aclaración de que en hexadecimal los restos entre 10 y 15 se escriben con letras.',
          caption: 'El mismo número 29 convertido a binario, octal y hexa dividiendo sucesivamente por 2, 8 y 16.',
        },
        {
          type: 'table',
          caption: 'Equivalencias de 29 decimal',
          headers: ['Decimal', 'Binario', 'Octal', 'Hexadecimal'],
          rows: [
            ['$29_d$', '$11101_b$', '$35_o$', '$1D_H$'],
          ],
        },
        {
          type: 'p',
          text: 'Y para volver a decimal se usa la forma polinomial con la base correspondiente:',
        },
        {
          type: 'math',
          display: true,
          latex: '35_o = 3 \\times 8^1 + 5 \\times 8^0 = 24 + 5 = 29_d \\qquad 1D_H = 1 \\times 16^1 + 13 \\times 16^0 = 16 + 13 = 29_d',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Si partís de base 10 y querés una base menor (2 u 8), esperá más dígitos o dígitos más grandes. Si querés una base mayor (16), esperá menos dígitos o más chicos.',
        },
        {
          type: 'h3',
          text: 'Entre binario, octal y hexadecimal directo',
          criollo: 'Como $2^3 = 8$ y $2^4 = 16$, podés saltar sin pasar por decimal: agrupás los bits de a 3 (octal) o de a 4 (hexa), partiendo siempre desde la coma. Si faltan bits, completás con ceros.',
        },
        {
          type: 'p',
          text: 'De binario a octal: como $2^3 = 8$, cada 3 bits se escribe su equivalente en octal, agrupando desde la coma hacia los dos lados y completando con ceros si falta.',
        },
        {
          type: 'math',
          display: true,
          latex: '\\underbrace{110}_{6}\\;\\underbrace{010}_{2}\\,,\\,\\underbrace{011}_{3} \\;\\Rightarrow\\; 110010{,}011_b = 62{,}3_o',
        },
        {
          type: 'p',
          text: 'De binario a hexadecimal: como $2^4 = 16$, se agrupa de a 4 bits desde la coma, completando con ceros.',
        },
        {
          type: 'math',
          display: true,
          latex: '\\underbrace{0011}_{3}\\;\\underbrace{0010}_{2}\\,,\\,\\underbrace{0110}_{6} \\;\\Rightarrow\\; 110010{,}011_b = 32{,}6_H',
        },
        {
          type: 'callout',
          tone: 'criollo',
          text: '¿Y de octal a hexadecimal directo? No se puede en un paso: tenés que pasar primero por binario o por decimal y de ahí a la otra base.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-2-1', q: 'Para pasar de decimal a binario se divide sucesivamente por 2 y se anotan los restos.', a: true, explain: 'El último cociente y los restos concatenados (leídos de abajo hacia arriba) dan el binario.' },
          { id: 'tf-2-2', q: 'Para convertir la parte fraccionaria de decimal a binario se divide por 2 sucesivamente.', a: false, explain: 'La parte fraccionaria se MULTIPLICA por 2 sucesivamente, guardando la parte entera de cada paso. Dividir es para la parte entera.' },
          { id: 'tf-2-3', q: 'Se puede pasar directamente de octal a hexadecimal sin pasar por otra base.', a: false, explain: 'No: hay que pasar primero por binario o decimal, porque 8 y 16 no son potencia uno del otro.' },
          { id: 'tf-2-4', q: 'Para pasar de binario a hexadecimal se agrupan los bits de a 4 desde la coma.', a: true, explain: 'Como $2^4 = 16$, cada grupo de 4 bits equivale a un dígito hexadecimal.' },
        ],
        mc: [
          { id: 'mc-2-1', q: 'En la forma polinomial, ¿en qué posición arranca el primer dígito a la derecha de la coma?', options: ['$0$', '$-1$', '$1$', '$-2$'], correctIndex: 1, explain: 'A la derecha de la coma la posición disminuye de a uno arrancando en $-1$, luego $-2$, etc.' },
          { id: 'mc-2-2', q: '¿Cuál es el equivalente binario de $62{,}3_o$ agrupando de a 3 bits?', options: ['$110010{,}011_b$', '$101010{,}111_b$', '$111000{,}011_b$', '$110001{,}010_b$'], correctIndex: 0, explain: 'Cada dígito octal se escribe con 3 bits: $6 = 110$, $2 = 010$, $3 = 011$.' },
          { id: 'mc-2-3', q: '¿Por qué se puede pasar directo de binario a hexadecimal?', options: ['Porque $16 = 2 \\times 8$', 'Porque $2^4 = 16$, así cada 4 bits es un dígito hexa', 'Porque ambos son potencia de 10', 'Porque tienen los mismos símbolos'], correctIndex: 1, explain: 'La relación $2^4 = 16$ permite mapear cada grupo de 4 bits a un único dígito hexadecimal.' },
        ],
      },
      flashcards: [
        { id: 'fc-2-1', front: 'Decimal → binario (parte entera)', back: 'Dividir sucesivamente por 2 hasta cociente menor a 2; concatenar último cociente y restos de abajo hacia arriba.' },
        { id: 'fc-2-2', front: 'Binario → decimal', back: 'Forma polinomial: cada dígito por 2 elevado a su posición (desde la derecha, arrancando en 0), y sumar.' },
        { id: 'fc-2-3', front: 'Decimal → binario (fraccionario)', back: 'Multiplicar la parte fraccionaria por 2 sucesivamente, guardando la parte entera de cada paso.' },
        { id: 'fc-2-4', front: 'Binario → octal', back: 'Agrupar de a 3 bits desde la coma (porque $2^3 = 8$), completando con ceros, y escribir el equivalente octal de cada grupo.' },
        { id: 'fc-2-5', front: 'Binario → hexadecimal', back: 'Agrupar de a 4 bits desde la coma (porque $2^4 = 16$), completando con ceros, y escribir el dígito hexa de cada grupo.' },
        { id: 'fc-2-6', front: 'Octal → hexadecimal', back: 'No es directo: hay que pasar primero por binario o decimal.' },
        { id: 'fc-2-7', front: '$50_d$ en binario', back: '$110010_b$.' },
      ],
    },
    {
      id: '3',
      unit: '1',
      title: 'Operaciones aritméticas en binario',
      criollo: 'Sumar y restar en binario es igual que en decimal, columna a columna. Lo único que cambia son las reglas básicas y los nombres: cuando "te llevás" es carry (acarreo) y cuando "pedís prestado" es borrow.',
      blocks: [
        {
          type: 'h3',
          text: 'Suma',
          criollo: 'Cuatro reglas nomás. La clave es $1 + 1 = 10$: el resultado de la columna es 0 y "me llevo" un 1 (el carry) a la columna de la izquierda.',
        },
        {
          type: 'p',
          text: 'Reglas de suma en binario:',
        },
        {
          type: 'math',
          display: true,
          latex: '0 + 0 = 0 \\qquad 1 + 0 = 1 \\qquad 0 + 1 = 1 \\qquad 1 + 1 = 10',
        },
        {
          type: 'p',
          text: 'En $1 + 1 = 10$, el $1$ corresponde al <strong>carry</strong> o acarreo (“me llevo” $1$ a la columna izquierda). Para sumar $13_d + 7_d$ se pasan ambos a binario ($13_d = 1101_b$, $7_d = 111_b$) y se suma columna a columna llevando los carry.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/sistemas-digitales-i/u1-suma-binaria-13-7-p10.png',
          alt: 'Suma columna a columna comparando 13+7=20 en decimal con su equivalente binario 1101+111=10100, mostrando los acarreos (carry) en la fila superior.',
          caption: 'Suma binaria de 13+7 al lado de la decimal, con los carry marcados arriba. El resultado 10100 se verifica en decimal: 16 + 4 = 20.',
        },
        {
          type: 'h3',
          text: 'Resta',
          criollo: 'Igual de mecánico. La regla clave es $10 - 1 = 1$: cuando no te alcanza, "le pedís prestado" a la columna de la izquierda, y eso es el borrow.',
        },
        {
          type: 'p',
          text: 'Reglas de resta en binario:',
        },
        {
          type: 'math',
          display: true,
          latex: '0 - 0 = 0 \\qquad 1 - 0 = 1 \\qquad 1 - 1 = 0 \\qquad 10 - 1 = 1',
        },
        {
          type: 'p',
          text: 'El “le pido prestado” a la columna izquierda es el <strong>borrow</strong>. Para restar $37_d - 10_d$ se pasan a binario ($37_d = 100101_b$, $10_d = 1010_b$) y se resta columna a columna, pidiendo prestado cuando no alcanza.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/sistemas-digitales-i/u1-resta-binaria-37-10-p11.png',
          alt: 'Resta columna a columna comparando 37-10=27 en decimal con su equivalente binario 100101-1010, mostrando los borrow marcados en rojo, con resultado 011011.',
          caption: 'Resta binaria de 37-10 al lado de la decimal, con los borrow marcados. El resultado 11011 se verifica en decimal: 16 + 8 + 2 + 1 = 27.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'La resta $37_d - 10_d = 27_d$ es lo mismo que $+37_d + (-10)_d = 27_d$. La segunda forma usa números con signo. Sí se pueden escribir números con signo en binario: lo vemos en la sección siguiente.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-3-1', q: 'En binario, $1 + 1 = 10$: la columna queda en 0 y se lleva un 1 (carry) a la izquierda.', a: true, explain: 'Esa es la regla clave de la suma binaria: genera acarreo hacia la columna siguiente.' },
          { id: 'tf-3-2', q: 'El borrow es lo que "me llevo" hacia la izquierda al sumar.', a: false, explain: 'Eso es el carry (acarreo) de la suma. El borrow es lo que "le pido prestado" a la izquierda al restar.' },
          { id: 'tf-3-3', q: 'Restar dos números es equivalente a sumar el primero con el opuesto (negativo) del segundo.', a: true, explain: '$37 - 10$ es lo mismo que $+37 + (-10)$. Por eso conviene saber representar números con signo.' },
        ],
        mc: [
          { id: 'mc-3-1', q: '¿Cuál de estas reglas de resta binaria es correcta?', options: ['$0 - 1 = 1$', '$10 - 1 = 1$', '$1 - 1 = 1$', '$10 - 1 = 0$'], correctIndex: 1, explain: '$10 - 1 = 1$ es la regla del borrow. Las otras están mal: $1 - 1 = 0$.' },
          { id: 'mc-3-2', q: 'Sumando en binario, $13_d + 7_d$ da...', options: ['$10100_b$ ($20_d$)', '$11000_b$ ($24_d$)', '$10010_b$ ($18_d$)', '$11100_b$ ($28_d$)'], correctIndex: 0, explain: '$1101_b + 111_b = 10100_b$, que en decimal es $16 + 4 = 20$.' },
          { id: 'mc-3-3', q: 'Al restar $37_d - 10_d$ en binario, ¿cuánto da?', options: ['$11011_b$ ($27_d$)', '$10101_b$ ($21_d$)', '$11111_b$ ($31_d$)', '$11001_b$ ($25_d$)'], correctIndex: 0, explain: '$100101_b - 1010_b = 11011_b$, que en decimal es $16 + 8 + 2 + 1 = 27$.' },
        ],
      },
      flashcards: [
        { id: 'fc-3-1', front: 'Carry (acarreo)', back: 'El 1 que "me llevo" a la columna izquierda en la suma binaria, cuando $1 + 1 = 10$.' },
        { id: 'fc-3-2', front: 'Borrow', back: 'Lo que "le pido prestado" a la columna izquierda en la resta binaria, cuando no alcanza ($10 - 1 = 1$).' },
        { id: 'fc-3-3', front: 'Reglas de suma binaria', back: '$0+0=0$, $1+0=1$, $0+1=1$, $1+1=10$ (con carry).' },
        { id: 'fc-3-4', front: 'Reglas de resta binaria', back: '$0-0=0$, $1-0=1$, $1-1=0$, $10-1=1$ (con borrow).' },
        { id: 'fc-3-5', front: 'Restar = sumar el opuesto', back: '$A - B$ es equivalente a $A + (-B)$, usando representación con signo.' },
      ],
    },
    {
      id: '4',
      unit: '1',
      title: 'Números binarios con signo',
      criollo: 'Hay tres formas de meterle signo a un binario: signo y magnitud, complemento a 1 y complemento a 2. En las tres, el bit de adelante es el signo (0 positivo, 1 negativo); lo que cambia es cómo se arma la magnitud cuando el número es negativo.',
      blocks: [
        {
          type: 'p',
          text: 'Para escribir un número con signo en binario, primero se pasa el número a binario sin signo y luego se agrega adelante un <strong>bit de signo</strong>: $0$ si es positivo, $1$ si es negativo. Veamos $+10_d$ y $-10_d$ en las tres representaciones.',
        },
        {
          type: 'h3',
          text: 'a) Signo y magnitud (SyM)',
          criollo: 'La más intuitiva: dejás la magnitud igual y solo le clavás el bit de signo adelante. El problema es que el cero queda con dos representaciones (+0 y -0).',
        },
        {
          type: 'p',
          text: 'En signo y magnitud basta con agregar el bit de signo; la magnitud no cambia. $+10_d = \\mathbf{0}\\,1010$ y $-10_d = \\mathbf{1}\\,1010$ (el primer bit, en negrita, es el signo).',
        },
        {
          type: 'h3',
          text: 'b) Complemento a 1 (Ca1)',
          criollo: 'El complemento a 1 es "lo que le falta al número para llegar a la potencia de la base, menos 1". En la práctica: para el negativo, invertís todos los bits de la magnitud (los unos por ceros y los ceros por unos).',
        },
        {
          type: 'p',
          text: 'El complemento a 1 es el complemento a la base ($2$) menos $1$: lo que le falta al número $N$ para llegar a la potencia de la base de $n$ bits, menos $1$.',
        },
        {
          type: 'math',
          display: true,
          latex: 'C_1(N) = 2^n - N - 1',
        },
        {
          type: 'p',
          text: 'Donde $N$ es el número a complementar y $n$ la cantidad de bits. Un positivo en Ca1 se escribe igual que en SyM (bit de signo $0$ adelante). Para el negativo se pone bit de signo $1$ y se invierten todos los bits de la magnitud: $+10_d = \\mathbf{0}\\,1010$ y $-10_d = \\mathbf{1}\\,0101$.',
        },
        {
          type: 'h3',
          text: 'c) Complemento a 2 (Ca2)',
          criollo: 'El complemento a 2 es "lo que le falta para llegar a la potencia de la base", sin el menos 1. Truco práctico: hacés el complemento a 1 y le sumás 1.',
        },
        {
          type: 'p',
          text: 'El complemento a 2 es el complemento a la base ($2$): lo que le falta a $N$ para llegar a la potencia de la base de $n$ bits.',
        },
        {
          type: 'math',
          display: true,
          latex: 'C_2(N) = 2^n - N',
        },
        {
          type: 'p',
          text: 'Un positivo en Ca2 se escribe igual que en SyM y Ca1. Para el negativo se pone bit de signo $1$, se invierten los bits (Ca1) y se suma $1$: $+10_d = \\mathbf{0}\\,1010$ y $-10_d = \\mathbf{1}\\,0110$.',
        },
        {
          type: 'table',
          caption: 'Comparación de $+10_d$ y $-10_d$ en las tres representaciones (con bit de signo)',
          headers: ['Número', 'SyM', 'Ca1', 'Ca2'],
          rows: [
            ['$+10_d$', '$01010$', '$01010$', '$01010$'],
            ['$-10_d$', '$11010$', '$10101$', '$10110$'],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Para hacer cuentas con signo solo se usan las representaciones de complemento (Ca1 o Ca2), no signo y magnitud.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-4-1', q: 'En las tres representaciones con signo, el bit de signo es 0 para positivo y 1 para negativo.', a: true, explain: 'El bit de signo va adelante y vale 0 (positivo) o 1 (negativo) en SyM, Ca1 y Ca2.' },
          { id: 'tf-4-2', q: 'Un número positivo se escribe distinto en SyM, Ca1 y Ca2.', a: false, explain: 'Los positivos se escriben IGUAL en las tres (bit de signo 0 y la magnitud tal cual). Lo que cambia es el negativo.' },
          { id: 'tf-4-3', q: 'El complemento a 2 se obtiene haciendo el complemento a 1 y sumándole 1.', a: true, explain: 'Es el truco práctico: $C_2$ = invertir todos los bits (Ca1) y sumar 1.' },
          { id: 'tf-4-4', q: 'La fórmula del complemento a 1 es $C_1(N) = 2^n - N$.', a: false, explain: 'Esa es la del complemento a 2. La del complemento a 1 lleva un $-1$ extra: $C_1(N) = 2^n - N - 1$.' },
        ],
        mc: [
          { id: 'mc-4-1', q: 'Para escribir un negativo en complemento a 1, a la magnitud hay que...', options: ['Dejarla igual', 'Invertir todos los bits (unos por ceros y ceros por unos)', 'Invertir los bits y sumar 1', 'Sumarle 1'], correctIndex: 1, explain: 'En Ca1 el negativo se arma invirtiendo todos los bits de la magnitud. Invertir y sumar 1 sería Ca2.' },
          { id: 'mc-4-2', q: '¿Cómo se escribe $-10_d$ en complemento a 2 (5 bits)?', options: ['$10101$', '$11010$', '$10110$', '$01010$'], correctIndex: 2, explain: 'Ca1 de 10 es $10101$; sumando 1 queda $10110$. $11010$ es SyM y $10101$ es Ca1.' },
          { id: 'mc-4-3', q: '¿Qué fórmula corresponde al complemento a 2?', options: ['$C_2(N) = 2^n - N - 1$', '$C_2(N) = 2^n - N$', '$C_2(N) = 2^{n-1} - N$', '$C_2(N) = N - 2^n$'], correctIndex: 1, explain: '$C_2(N) = 2^n - N$. La que lleva $-1$ es el complemento a 1.' },
        ],
      },
      flashcards: [
        { id: 'fc-4-1', front: 'Bit de signo', back: 'Bit que se agrega adelante: 0 para positivo, 1 para negativo.' },
        { id: 'fc-4-2', front: 'Signo y magnitud (SyM)', back: 'Se agrega el bit de signo y la magnitud queda igual. El cero tiene dos representaciones (+0 y -0).' },
        { id: 'fc-4-3', front: 'Complemento a 1', back: '$C_1(N) = 2^n - N - 1$. Para el negativo: bit de signo 1 e invertir todos los bits de la magnitud.' },
        { id: 'fc-4-4', front: 'Complemento a 2', back: '$C_2(N) = 2^n - N$. Para el negativo: hacer el Ca1 y sumarle 1.' },
        { id: 'fc-4-5', front: 'Truco práctico Ca2', back: 'Invertir todos los bits (Ca1) y sumar 1.' },
        { id: 'fc-4-6', front: '$-10_d$ en SyM / Ca1 / Ca2', back: '$11010$ / $10101$ / $10110$ (con bit de signo).' },
      ],
    },
    {
      id: '5',
      unit: '1',
      title: 'Sumas y restas mediante complemento y overflow',
      criollo: 'Acá está la gracia del complemento: te permite restar sumando. Pasás todo a Ca1 o Ca2, sumás columna a columna, y según la representación tratás el carry distinto. Y ojo con el overflow: si sumás dos números del mismo signo y el resultado se va de rango, el bit de signo te miente.',
      blocks: [
        {
          type: 'h3',
          text: 'Sumas y restas en complemento a 1 (Ca1)',
          criollo: 'Igualás la cantidad de bits, pasás a Ca1, sumás. Si al final sobra un carry, se lo sumás de nuevo al resultado. Ese paso del "carry que vuelve" es lo típico del Ca1.',
        },
        {
          type: 'ol',
          items: [
            'Pasar las magnitudes (valores absolutos) a binario y verificar que ambos números tengan la misma cantidad de bits; si no, completar con ceros adelante.',
            'Escribir ambos números en complemento a 1.',
            'Sumar columna a columna. Si hay carry, sumárselo al resultado para obtener el resultado final.',
          ],
        },
        {
          type: 'p',
          text: 'Hay que diferenciar bien la columna del signo de la del último carry. Si el resultado es positivo, se pasa directo a decimal; si es negativo, conviene volver a complementar (escribirlo en SyM) para pasarlo a decimal. Ejemplo: $37_d - 10_d$ en Ca1.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/sistemas-digitales-i/u1-suma-complemento-bit-signo-carry-p14.png',
          alt: 'Suma en complemento a 1 de +37 (0100101) y -10 (1110101): el carry de salida es 1 y se vuelve a sumar al resultado, dando 0011011 con bit de signo 0 (positivo).',
          caption: 'En Ca1, el carry que sale se vuelve a sumar al resultado. El bit de signo 0 indica positivo: 011011 = +27.',
        },
        {
          type: 'p',
          text: 'Otro ejemplo, con resultado negativo: $-117_d + 46_d$ en Ca1.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/sistemas-digitales-i/u1-suma-complemento-resultado-negativo-p15.png',
          alt: 'Suma en complemento a 1 cuyo resultado tiene bit de signo 1, indicando un número negativo, con los acarreos marcados.',
          caption: 'Acá el resultado tiene bit de signo 1: es negativo. Complementando la magnitud se obtiene -71.',
        },
        {
          type: 'h3',
          text: 'Sumas y restas en complemento a 2 (Ca2)',
          criollo: 'Casi igual que Ca1, pero más simple con el carry: si sobra un carry, se descarta y listo. No se vuelve a sumar.',
        },
        {
          type: 'ol',
          items: [
            'Pasar las magnitudes a binario y verificar que ambos tengan la misma cantidad de bits; completar con ceros adelante si hace falta.',
            'Escribir ambos números en complemento a 2.',
            'Sumar columna a columna. Si hay carry, se descarta.',
          ],
        },
        {
          type: 'p',
          text: 'Como en Ca1, si el resultado es positivo se pasa directo a decimal y si es negativo se vuelve a complementar (Ca2) para pasarlo. Ejemplos: $37_d - 10_d$ da $+27_d$ y $-117_d + 46_d$ da $-71_d$.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/sistemas-digitales-i/u1-suma-complemento-bit-signo-p16.png',
          alt: 'Suma en complemento a 2 de números con signo, separando con una línea el bit de signo, con carry de salida que se descarta.',
          caption: 'En Ca2 el carry de salida simplemente se descarta. Se mira el bit de signo para saber si el resultado es positivo o negativo.',
        },
        {
          type: 'h3',
          text: 'Overflow (desbordamiento)',
          criollo: 'Si sumás dos números del mismo signo y el resultado se sale del rango que permiten los bits, el bit de signo da vuelta y te indica un signo equivocado. La solución es agregar al menos un bit más.',
        },
        {
          type: 'p',
          text: 'Al hacer $7_d + 6_d$ en Ca2 con 4 bits ($+7 = 0111$, $+6 = 0110$), el resultado da bit de signo $1$ (negativo), cuando se esperaba positivo. Hubo <strong>overflow</strong>: nos fuimos del rango de representación. Con 4 bits el rango es $[-8; 7]$, y como el resultado esperado ($13$) es mayor que $7$, necesitamos al menos un bit más.',
        },
        {
          type: 'figure',
          src: 'images/diagrams/sistemas-digitales-i/u1-suma-binaria-0111-0110-p18.png',
          alt: 'Suma binaria de 0111 + 0110 con el bit de signo separado: el resultado tiene bit de signo 1, evidenciando el overflow al sumar dos positivos con solo 4 bits.',
          caption: 'Sumando 0111 + 0110 (7+6) con 4 bits, el bit de signo da 1: overflow. Hay que agregar un bit más.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'El overflow puede aparecer al sumar dos números <strong>del mismo signo</strong>. Si el resultado esperado se sale del rango de los bits usados, el bit de signo indica un signo incorrecto. Solución: usar al menos un bit más.',
        },
        {
          type: 'h3',
          text: 'Rangos de representación',
          criollo: 'El gran motivo por el que se prefiere el complemento a 2: es el único donde el cero tiene una sola forma, así que aprovecha un valor más de rango.',
        },
        {
          type: 'table',
          caption: 'Equivalente decimal de un binario de 3 bits según la representación',
          headers: ['Binario', 'Sin signo (VA)', 'SyM', 'Ca1', 'Ca2'],
          rows: [
            ['000', '0', '+0', '+0', '+0'],
            ['001', '1', '+1', '+1', '+1'],
            ['010', '2', '+2', '+2', '+2'],
            ['011', '3', '+3', '+3', '+3'],
            ['100', '4', '−0', '−3', '−4'],
            ['101', '5', '−1', '−2', '−3'],
            ['110', '6', '−2', '−1', '−2'],
            ['111', '7', '−3', '−0', '−1'],
          ],
        },
        {
          type: 'table',
          caption: 'Rangos de representación con $n$ bits',
          headers: ['Representación', 'Rango con 3 bits', 'Rango genérico'],
          rows: [
            ['Sin signo (VA)', '$[0; 7]$', '$[0; 2^n - 1]$'],
            ['SyM', '$[-3; 3]$', '$[-(2^{n-1} - 1); (2^{n-1} - 1)]$'],
            ['Ca1', '$[-3; 3]$', '$[-(2^{n-1} - 1); (2^{n-1} - 1)]$'],
            ['Ca2', '$[-4; 3]$', '$[-(2^{n-1}); (2^{n-1} - 1)]$'],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Conviene usar complemento a 2 para números con signo: es el único caso donde el cero tiene un solo equivalente (el elemento nulo es único), por lo que el rango de representación es mayor.',
        },
      ],
      quiz: {
        tf: [
          { id: 'tf-5-1', q: 'En complemento a 1, si al sumar sobra un carry, se descarta.', a: false, explain: 'Eso es en Ca2. En Ca1, el carry que sobra se vuelve a SUMAR al resultado.' },
          { id: 'tf-5-2', q: 'En complemento a 2, el carry de salida se descarta.', a: true, explain: 'Sí: en Ca2 el carry final simplemente se descarta, no se vuelve a sumar.' },
          { id: 'tf-5-3', q: 'El overflow puede ocurrir al sumar dos números del mismo signo.', a: true, explain: 'Cuando el resultado se va del rango que permiten los bits, el bit de signo indica un signo equivocado.' },
          { id: 'tf-5-4', q: 'El complemento a 2 es preferible porque el cero tiene una única representación.', a: true, explain: 'Al ser el cero único, Ca2 aprovecha un valor más de rango (ej: $[-4; 3]$ con 3 bits).' },
          { id: 'tf-5-5', q: 'Con 4 bits, el rango en complemento a 2 alcanza para representar el 13.', a: false, explain: 'Con 4 bits el rango Ca2 es $[-8; 7]$. El 13 se sale: por eso $7 + 6$ da overflow y hay que agregar un bit.' },
        ],
        mc: [
          { id: 'mc-5-1', q: 'En complemento a 1, ¿qué se hace con el carry que sobra después de sumar?', options: ['Se descarta', 'Se suma de nuevo al resultado', 'Se invierte', 'Se mueve al bit de signo'], correctIndex: 1, explain: 'En Ca1 el carry sobrante se vuelve a sumar al resultado. Descartarlo sería Ca2.' },
          { id: 'mc-5-2', q: 'El rango genérico de representación en complemento a 2 con $n$ bits es...', options: ['$[0; 2^n - 1]$', '$[-(2^{n-1} - 1); (2^{n-1} - 1)]$', '$[-(2^{n-1}); (2^{n-1} - 1)]$', '$[-(2^n); 2^n]$'], correctIndex: 2, explain: 'Ca2 llega un valor más por el lado negativo: $[-(2^{n-1}); (2^{n-1} - 1)]$.' },
          { id: 'mc-5-3', q: 'En la suma $7_d + 6_d$ con 4 bits en Ca2, el bit de signo da 1. ¿Qué pasó?', options: ['Un error de cálculo', 'Overflow: el resultado se fue del rango $[-8; 7]$', 'El carry no se descartó', 'Los números estaban mal complementados'], correctIndex: 1, explain: 'El resultado esperado (13) supera el máximo (7) del rango de 4 bits: es overflow. Se soluciona con un bit más.' },
          { id: 'mc-5-4', q: '¿Por qué SyM y Ca1 tienen un rango más chico que Ca2?', options: ['Porque usan más bits', 'Porque el cero tiene dos representaciones, desperdiciando un valor', 'Porque no admiten negativos', 'Porque el bit de signo ocupa dos posiciones'], correctIndex: 1, explain: 'En SyM y Ca1 el cero tiene doble representación (+0 y −0), por lo que se pierde un valor de rango.' },
        ],
      },
      flashcards: [
        { id: 'fc-5-1', front: 'Carry en Ca1', back: 'Si al sumar sobra un carry, se vuelve a sumar al resultado para obtener el final.' },
        { id: 'fc-5-2', front: 'Carry en Ca2', back: 'Si al sumar sobra un carry, se descarta.' },
        { id: 'fc-5-3', front: 'Overflow', back: 'Desbordamiento: el resultado se va del rango de los bits usados y el bit de signo indica un signo equivocado. Ocurre sumando dos números del mismo signo.' },
        { id: 'fc-5-4', front: 'Solución al overflow', back: 'Usar al menos un bit más en la representación.' },
        { id: 'fc-5-5', front: 'Rango Ca2 genérico', back: '$[-(2^{n-1}); (2^{n-1} - 1)]$. Con 3 bits: $[-4; 3]$.' },
        { id: 'fc-5-6', front: '¿Por qué se prefiere Ca2?', back: 'Porque el cero tiene una sola representación (elemento nulo único), así el rango es mayor.' },
        { id: 'fc-5-7', front: 'Resultado negativo en complemento', back: 'Para pasarlo a decimal, primero hay que volver a complementarlo (escribirlo en SyM).' },
      ],
    },
    // ===================================================================
    // UNIDAD 2 — Álgebra de Boole y compuertas lógicas
    // ===================================================================
    {
      id: '6', unit: '2', title: 'Señales digitales binarias',
      criollo: 'Esta es la base de todo lo digital, che: bichos que solo entienden dos cosas, prendido o apagado, 0 o 1. La metáfora es un interruptor con una lámpara, re intuitiva. Si agarrás bien esto, después las compuertas y el álgebra de Boole te van a entrar como manteca.',
      blocks: [
        { type: 'p', text: 'Los <strong>sistemas o dispositivos digitales</strong> son aquellos en los cuales la información que manipulan se representa mediante cantidades físicas que pueden tomar únicamente una cantidad finita de valores, es decir, <strong>señales discretas</strong> (llamadas señales digitales).' },
        { type: 'h3', text: 'Qué son las señales digitales binarias', criollo: 'Binario = dos opciones y se acabó. No hay punto medio.' },
        { type: 'p', text: 'En particular, se conoce como <strong>señales digitales binarias</strong> a las señales que pueden tomar solamente dos valores o estados ($0$ y $1$). Un ejemplo son las señales eléctricas, como la tensión o la corriente.' },
        { type: 'h3', text: 'El ejemplo del circuito interruptor-lámpara', criollo: 'El clásico para que se entienda: una llave y una luz.' },
        { type: 'p', text: 'Se tiene un circuito eléctrico con un <strong>interruptor</strong> (o llave), que solo tiene dos posibles posiciones, abierto y cerrado, conectado a una <strong>fuente de tensión</strong> (por ejemplo, una batería) y a una <strong>lámpara</strong>, la cual tiene solo dos estados posibles: apagado y encendido.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-circuito-interruptor-lampara-p01.png', alt: 'Circuito eléctrico simple con fuente de tensión, interruptor y lámpara conectados en serie.', caption: 'Circuito básico interruptor-lámpara: la base física de la señal binaria.' },
        { type: 'p', text: 'Si el interruptor está abierto, se indicará con el valor $0$, mientras que si está cerrado se indicará con el valor $1$. Por otro lado, si la lámpara está apagada, tomará el valor $0$, y si está encendida tomará el valor $1$.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-interruptor-lampara-estados-p01.png', alt: 'Interruptor abierto (0) y cerrado (1) junto a lámpara apagada (0) y encendida (1).', caption: 'Los dos estados: interruptor abierto/cerrado y lámpara apagada/encendida como 0 y 1.' },
        { type: 'h3', text: 'Tiempo 1 y tiempo 2', criollo: 'Dos fotos del mismo circuito: una con la luz apagada y otra prendida.' },
        { type: 'p', text: 'En un <strong>tiempo 1</strong>, cuando el interruptor está abierto, no deja circular la corriente y no le llega tensión a la lámpara, por lo que esta estará apagada. En un <strong>tiempo 2</strong>, cuando el interruptor está cerrado, la corriente puede circular y le llega tensión a la lámpara, por lo que esta estará encendida.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-circuito-tiempo1-tiempo2-p02.png', alt: 'Mismo circuito en dos instantes, tiempo 1 con lámpara apagada y tiempo 2 con corriente circulando y lámpara encendida.', caption: 'El circuito en dos tiempos: cómo cambia el estado al cerrar el interruptor.' },
        { type: 'h3', text: 'El diagrama tensión-tiempo', criollo: 'Graficás la tensión a lo largo del tiempo y se ve clarito el escalón.' },
        { type: 'p', text: 'A continuación, se puede ver un diagrama que muestra la tensión ($V$) en la lámpara en función del tiempo ($t$). El <strong>tiempo 1</strong> corresponde a un nivel de tensión bajo ($V_L$), mientras que el <strong>tiempo 2</strong> corresponde a un nivel de tensión alto ($V_H$).' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-diagrama-tension-tiempo-p02.png', alt: 'Diagrama de tensión en función del tiempo con niveles bajo (VL) y alto (VH).', caption: 'Diagrama tensión-tiempo: el estado representado como nivel alto y bajo.' },
        { type: 'h3', text: 'Lógica positiva', criollo: 'Convención: bajo es 0 y alto es 1. Punto.' },
        { type: 'p', text: 'Las señales de tensión eléctrica podrán tomar un estado <strong>High</strong> (alto) o un estado <strong>Low</strong> (bajo). Utilizando la <strong>lógica positiva</strong>, cuando el estado sea $Low$ (bajo), se lo indicará con el valor $0$ (cero lógico), mientras que si el estado es $High$ (alto) se lo indicará con el valor $1$ (uno lógico).' },
        { type: 'table', caption: 'Lógica positiva: relación entre nivel de tensión y valor lógico', headers: ['Nivel de tensión', 'Estado', 'Valor lógico'], rows: [['Bajo ($V_L$)', 'Low', '0'], ['Alto ($V_H$)', 'High', '1']] },
        { type: 'callout', tone: 'info', text: 'El apunte introduce las señales binarias como base para las <strong>compuertas lógicas</strong>, que son los elementos básicos de los sistemas digitales y trabajan con estas señales. Las compuertas se desarrollan en las secciones siguientes.' }
      ],
      quiz: {
        tf: [
          { id: 'tf-6-1', q: 'Una señal digital binaria puede tomar solamente dos valores o estados: $0$ y $1$.', a: true, explain: 'Exacto. Esa es justamente la definición de señal digital binaria según el apunte.' },
          { id: 'tf-6-2', q: 'En el circuito de ejemplo, el interruptor abierto se indica con el valor $1$ y cerrado con el valor $0$.', a: false, explain: 'Al revés: abierto es $0$ y cerrado es $1$. Lo mismo la lámpara: apagada $0$, encendida $1$.' },
          { id: 'tf-6-3', q: 'En el tiempo 2 el interruptor está cerrado, la corriente circula y la lámpara queda encendida.', a: true, explain: 'Correcto. En tiempo 2 el interruptor cerrado deja pasar corriente, le llega tensión a la lámpara y se enciende.' },
          { id: 'tf-6-4', q: 'En la lógica positiva, el estado Low (bajo) corresponde al valor $1$ y el estado High (alto) al valor $0$.', a: false, explain: 'Es al revés: en lógica positiva Low es $0$ (cero lógico) y High es $1$ (uno lógico).' }
        ],
        mc: [
          { id: 'mc-6-1', q: '¿Qué caracteriza a un sistema o dispositivo digital?', options: ['Maneja información representada por señales discretas, con una cantidad finita de valores', 'Maneja señales que pueden tomar infinitos valores continuos', 'Solo funciona con corriente y nunca con tensión', 'No utiliza ninguna cantidad física para representar información'], correctIndex: 0, explain: 'Un sistema digital representa la información mediante cantidades físicas que toman una cantidad finita de valores, es decir, señales discretas.' },
          { id: 'mc-6-2', q: 'En el ejemplo del circuito, ¿cuándo la lámpara toma el valor $1$?', options: ['Cuando está apagada', 'Cuando está encendida', 'Cuando el interruptor está abierto', 'Siempre, sin importar el estado'], correctIndex: 1, explain: 'La lámpara encendida toma el valor $1$; apagada toma el valor $0$.' },
          { id: 'mc-6-3', q: 'En el diagrama de tensión en función del tiempo, ¿a qué nivel corresponde el tiempo 1?', options: ['Al nivel de tensión alto ($V_H$)', 'Al nivel de tensión bajo ($V_L$)', 'A un nivel intermedio entre $V_L$ y $V_H$', 'A ningún nivel de tensión'], correctIndex: 1, explain: 'El tiempo 1 (interruptor abierto, lámpara apagada) corresponde al nivel de tensión bajo $V_L$; el tiempo 2 corresponde a $V_H$.' }
        ]
      },
      flashcards: [
        { id: 'fc-6-1', front: '¿Qué es un sistema o dispositivo digital?', back: 'Aquel en el que la información se representa mediante cantidades físicas que toman únicamente una cantidad finita de valores, es decir, señales discretas (señales digitales).' },
        { id: 'fc-6-2', front: '¿Qué es una señal digital binaria?', back: 'Una señal que puede tomar solamente dos valores o estados: $0$ y $1$. Por ejemplo, señales eléctricas como la tensión o la corriente.' },
        { id: 'fc-6-3', front: 'En el circuito de ejemplo, ¿qué valores toma el interruptor?', back: 'Abierto $= 0$; cerrado $= 1$.' },
        { id: 'fc-6-4', front: 'En el circuito de ejemplo, ¿qué valores toma la lámpara?', back: 'Apagada $= 0$; encendida $= 1$.' },
        { id: 'fc-6-5', front: '¿Qué pasa en el tiempo 1 y en el tiempo 2?', back: 'Tiempo 1: interruptor abierto, no circula corriente, lámpara apagada (nivel bajo $V_L$). Tiempo 2: interruptor cerrado, circula corriente, lámpara encendida (nivel alto $V_H$).' },
        { id: 'fc-6-6', front: '¿Qué es la lógica positiva?', back: 'La convención por la cual el estado Low (bajo) se indica con $0$ (cero lógico) y el estado High (alto) se indica con $1$ (uno lógico).' },
        { id: 'fc-6-7', front: 'En el diagrama tensión-tiempo, ¿qué representan $V_L$ y $V_H$?', back: '$V_L$ es el nivel de tensión bajo (tiempo 1, lámpara apagada) y $V_H$ es el nivel de tensión alto (tiempo 2, lámpara encendida).' }
      ]
    },
    {
      id: '7', unit: '2', title: 'Compuertas lógicas: OR, AND y NOT',
      criollo: 'Acá arrancamos con los ladrillos básicos de todo sistema digital: las compuertas. Pensalas como circuitos con interruptores que prenden o no una lámpara. OR es \'con que uno alcance\', AND es \'tienen que estar los dos\', y NOT simplemente da vuelta la entrada. Fijate bien la tabla de verdad de cada una, que es lo que más cae.',
      blocks: [
        { type: 'p', text: 'Las <strong>compuertas lógicas</strong> son los elementos básicos de los sistemas digitales. Trabajan con señales digitales binarias: las señales de tensión eléctrica pueden tomar un estado <strong>High</strong> (alto) o <strong>Low</strong> (bajo).' },
        { type: 'p', text: 'Usando la <strong>lógica positiva</strong>, cuando el estado sea Low (bajo) se lo indica con el valor $0$ (cero lógico), mientras que si el estado es High (alto) se lo indica con el valor $1$ (uno lógico).' },
        { type: 'p', text: 'Para ver el funcionamiento de cada compuerta se usan las letras $A$ y $B$ para las señales de <strong>entrada</strong>, mientras que la letra $S$ hace referencia a la señal de <strong>salida</strong>.' },

        { type: 'h3', text: 'Compuerta OR', criollo: 'La de \'con que uno esté, alcanza\'.' },
        { type: 'p', text: 'La compuerta <strong>OR</strong> corresponde a la <strong>suma lógica</strong>. Para comprender su funcionamiento es más sencillo pensarla como un circuito eléctrico.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-simbolo-or-p03.png', alt: 'Símbolo lógico de la compuerta OR con entradas A y B y salida S.', caption: 'Símbolo de la compuerta OR.' },
        { type: 'math', latex: 'S = A + B', display: true },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-circuito-electrico-or-p03.png', alt: 'Dos interruptores A y B en paralelo alimentando una lámpara.', caption: 'Equivalente eléctrico de la OR: dos interruptores en paralelo.' },
        { type: 'p', text: '¿Cuándo se enciende la lámpara? La lámpara se enciende cuando el interruptor $A$ <strong>o</strong> el interruptor $B$ están cerrados. Es decir, con que uno de los dos esté cerrado basta para que la lámpara se encienda (interruptores en <strong>paralelo</strong>).' },
        { type: 'p', text: 'El único caso en que la lámpara permanece apagada es cuando ninguno de los dos interruptores está cerrado. Por lo tanto, $S$ únicamente será $0$ cuando $A$ y $B$ sean $0$; en cualquier otro caso $S$ será $1$.' },
        { type: 'table', caption: 'Tabla de verdad de la compuerta OR.', headers: ['$A$', '$B$', '$S = A + B$'], rows: [['0', '0', '0'], ['0', '1', '1'], ['1', '0', '1'], ['1', '1', '1']] },
        { type: 'callout', tone: 'warning', text: 'Es importante <strong>no confundir la suma lógica</strong> ($1 + 1 = 1$) con la <strong>suma aritmética</strong>, ya sea binaria ($1 + 1 = 10$) o en un sistema de numeración de base mayor a 2 ($1 + 1 = 2$).' },

        { type: 'h3', text: 'Compuerta AND', criollo: 'Esta es la exigente: tienen que estar los dos sí o sí.' },
        { type: 'p', text: 'La compuerta <strong>AND</strong> corresponde al <strong>producto lógico</strong>. Nuevamente, para comprender su funcionamiento se plantea como un circuito eléctrico.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-simbolo-and-p04.png', alt: 'Símbolo lógico de la compuerta AND con entradas A y B y salida S.', caption: 'Símbolo de la compuerta AND.' },
        { type: 'math', latex: 'S = A \\cdot B', display: true },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-circuito-electrico-and-p04.png', alt: 'Dos interruptores A y B en serie alimentando una lámpara.', caption: 'Equivalente eléctrico de la AND: dos interruptores en serie.' },
        { type: 'p', text: '¿Cuándo se enciende la lámpara? La lámpara se enciende cuando el interruptor $A$ <strong>y</strong> el interruptor $B$ están cerrados. Es decir, el único caso en que la lámpara se enciende es cuando los dos interruptores están cerrados (interruptores en <strong>serie</strong>); en cualquier otro caso la lámpara permanece apagada.' },
        { type: 'p', text: 'Por lo tanto, $S$ únicamente será $1$ cuando $A$ y $B$ sean $1$; en cualquier otro caso $S$ será $0$.' },
        { type: 'table', caption: 'Tabla de verdad de la compuerta AND.', headers: ['$A$', '$B$', '$S = A \\cdot B$'], rows: [['0', '0', '0'], ['0', '1', '0'], ['1', '0', '0'], ['1', '1', '1']] },

        { type: 'h3', text: 'Compuerta NOT (inversora)', criollo: 'La más simple: te da vuelta lo que entra. 0 entra, 1 sale.' },
        { type: 'p', text: 'La compuerta <strong>NOT</strong>, también conocida como compuerta <strong>inversora</strong>, corresponde al <strong>complemento lógico</strong>. Como su nombre lo indica, se encarga de invertir el estado de la señal de entrada $A$ (no A).' },
        { type: 'p', text: 'Es decir, si la señal de entrada $A$, en un determinado momento, está en un estado $0$, en ese caso la salida $S$ será $1$; por el contrario, si el estado de la señal de entrada $A$ es $1$, entonces la salida $S$ será $0$.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-simbolo-not-p05.png', alt: 'Símbolo lógico de la compuerta NOT, triángulo con círculo de inversión en la salida.', caption: 'Símbolo de la compuerta NOT (inversor).' },
        { type: 'math', latex: 'S = \\overline{A}', display: true },
        { type: 'table', caption: 'Tabla de verdad de la compuerta NOT.', headers: ['$A$', '$S = \\overline{A}$'], rows: [['0', '1'], ['1', '0']] }
      ],
      quiz: {
        tf: [
          { id: 'tf-7-1', q: 'En la compuerta OR, la salida $S$ vale $0$ únicamente cuando $A$ y $B$ valen ambas $0$.', a: true, explain: 'Correcto. En la OR, con que una entrada esté en $1$ ya alcanza para que $S = 1$; el único caso de $S = 0$ es $A = 0$ y $B = 0$.' },
          { id: 'tf-7-2', q: 'En la compuerta AND, la salida $S$ vale $1$ únicamente cuando ambas entradas valen $1$.', a: true, explain: 'Correcto. La AND es el producto lógico: $S = 1$ solo si $A$ y $B$ son ambas $1$; en cualquier otro caso $S = 0$.' },
          { id: 'tf-7-3', q: 'En la suma lógica, $1 + 1 = 10$.', a: false, explain: 'Falso. En la suma lógica $1 + 1 = 1$. El $1 + 1 = 10$ corresponde a la suma aritmética binaria, que no hay que confundir con la lógica.' },
          { id: 'tf-7-4', q: 'La compuerta OR equivale eléctricamente a dos interruptores conectados en serie.', a: false, explain: 'Falso. La OR equivale a dos interruptores en <strong>paralelo</strong> (con que uno cierre, la lámpara prende). La de interruptores en serie es la AND.' },
          { id: 'tf-7-5', q: 'La compuerta NOT invierte el estado de la señal de entrada: si entra $0$ sale $1$, y si entra $1$ sale $0$.', a: true, explain: 'Correcto. La NOT o inversora corresponde al complemento lógico $S = \\overline{A}$, dando vuelta el estado de la entrada.' }
        ],
        mc: [
          { id: 'mc-7-1', q: '¿A qué operación lógica corresponde la compuerta AND?', options: ['Suma lógica', 'Producto lógico', 'Complemento lógico', 'Suma aritmética'], correctIndex: 1, explain: 'La compuerta AND corresponde al producto lógico, $S = A \\cdot B$.' },
          { id: 'mc-7-2', q: 'Para una compuerta OR con entradas $A = 1$ y $B = 0$, ¿cuánto vale la salida $S$?', options: ['$S = 0$', '$S = 1$', '$S = 10$', 'No se puede determinar'], correctIndex: 1, explain: 'En la OR basta con que una entrada esté en $1$ para que $S = 1$. Como $A = 1$, la salida es $1$.' },
          { id: 'mc-7-3', q: '¿Cuál es la ecuación de la compuerta NOT?', options: ['$S = A + B$', '$S = A \\cdot B$', '$S = \\overline{A}$', '$S = A + \\overline{A}$'], correctIndex: 2, explain: 'La compuerta NOT (inversora) corresponde al complemento lógico: $S = \\overline{A}$.' },
          { id: 'mc-7-4', q: 'Para una compuerta AND con entradas $A = 1$ y $B = 0$, ¿cuánto vale la salida $S$?', options: ['$S = 1$', '$S = 0$', '$S = 10$', '$S = \\overline{A}$'], correctIndex: 1, explain: 'La AND solo da $S = 1$ cuando ambas entradas son $1$. Como $B = 0$, la salida es $0$.' }
        ]
      },
      flashcards: [
        { id: 'fc-7-1', front: '¿Qué son las compuertas lógicas?', back: 'Son los elementos básicos de los sistemas digitales. Trabajan con señales digitales binarias, que pueden tomar un estado High (alto, $1$) o Low (bajo, $0$) en lógica positiva.' },
        { id: 'fc-7-2', front: '¿Qué letras se usan para entradas y salida de una compuerta?', back: 'Se usan $A$ y $B$ para las señales de entrada, y $S$ para la señal de salida.' },
        { id: 'fc-7-3', front: '¿A qué operación corresponde la compuerta OR y cuál es su ecuación?', back: 'A la suma lógica. Su ecuación es $S = A + B$. Equivale a dos interruptores en paralelo.' },
        { id: 'fc-7-4', front: 'OR: ¿cuándo vale $S = 0$?', back: '$S$ vale $0$ únicamente cuando $A$ y $B$ son ambas $0$; en cualquier otro caso $S = 1$.' },
        { id: 'fc-7-5', front: '¿A qué operación corresponde la compuerta AND y cuál es su ecuación?', back: 'Al producto lógico. Su ecuación es $S = A \\cdot B$. Equivale a dos interruptores en serie.' },
        { id: 'fc-7-6', front: 'AND: ¿cuándo vale $S = 1$?', back: '$S$ vale $1$ únicamente cuando $A$ y $B$ son ambas $1$; en cualquier otro caso $S = 0$.' },
        { id: 'fc-7-7', front: '¿Qué hace la compuerta NOT (inversora) y cuál es su ecuación?', back: 'Corresponde al complemento lógico: invierte el estado de la entrada. Si $A = 0$ entonces $S = 1$, y si $A = 1$ entonces $S = 0$. Su ecuación es $S = \\overline{A}$.' },
        { id: 'fc-7-8', front: '¿Por qué no hay que confundir suma lógica con suma aritmética?', back: 'En la suma lógica $1 + 1 = 1$, mientras que en la suma aritmética binaria $1 + 1 = 10$ (y en base mayor a 2, $1 + 1 = 2$).' }
      ]
    },
    {
      id: '8', unit: '2', title: 'Compuertas derivadas: NOR, NAND, XOR y XNOR',
      criollo: 'Acá ya no estamos con las básicas: estas compuertas salen de combinar OR, AND y NOT. La posta es fácil — cada vez que veas un círculo en la salida, hay una negación dada vuelta ahí. NOR es OR negada, NAND es AND negada, y las "exclusivas" (XOR y XNOR) se fijan si las entradas son distintas o iguales.',
      blocks: [
        { type: 'p', text: 'Las compuertas derivadas se construyen a partir de las básicas (<strong>OR</strong>, <strong>AND</strong> y <strong>NOT</strong>). Cada una toma una operación lógica y le agrega o cambia algo. Igual que antes, se usan las letras $A$ y $B$ para las señales de entrada y $S$ para la señal de salida.' },
        { type: 'callout', tone: 'info', text: 'Regla práctica del apunte: siempre que se agrega el <strong>círculo</strong> en la salida del símbolo, estamos ante una negación.' },

        { type: 'h3', text: 'Compuerta NOR', criollo: 'OR pero con la salida dada vuelta.' },
        { type: 'p', text: 'La compuerta <strong>NOR</strong> corresponde al complemento de la suma lógica. Es decir, esta compuerta tiene como salida la inversa (o la negación) de la compuerta <strong>OR</strong>. Es, básicamente, una combinación de dos compuertas.' },
        { type: 'p', text: 'Por lo tanto, $S$ únicamente será $1$ cuando $A$ y $B$ sean $0$; en cualquier otro caso $S$ será $0$.' },
        { type: 'math', latex: 'S = \\overline{A + B} = (A + B)^{\\prime}', display: true },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-simbolo-nor-p05.png', alt: 'Símbolo lógico de la compuerta NOR, forma de OR con círculo de inversión en la salida.', caption: 'Símbolo de la compuerta NOR.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-construccion-nor-or-not-p05.png', alt: 'Una compuerta OR seguida de una NOT.', caption: 'La NOR como una OR seguida de un inversor.' },
        { type: 'table', caption: 'Tabla de verdad de la compuerta NOR.', headers: ['$A$', '$B$', '$S = \\overline{A + B}$'], rows: [['0', '0', '1'], ['0', '1', '0'], ['1', '0', '0'], ['1', '1', '0']] },

        { type: 'h3', text: 'Compuerta NAND', criollo: 'AND pero con la salida negada.' },
        { type: 'p', text: 'La compuerta <strong>NAND</strong> corresponde al complemento del producto lógico. Con lo cual, esta compuerta tiene como salida la inversa (o la negación) de la compuerta <strong>AND</strong>.' },
        { type: 'p', text: 'Por lo tanto, $S$ únicamente será $0$ cuando $A$ y $B$ sean $1$; en cualquier otro caso $S$ será $1$.' },
        { type: 'math', latex: 'S = \\overline{A \\cdot B} = (A \\cdot B)^{\\prime}', display: true },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-simbolo-nand-p06.png', alt: 'Símbolo lógico de la compuerta NAND, forma de AND con círculo de inversión en la salida.', caption: 'Símbolo de la compuerta NAND.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-construccion-nand-and-not-p06.png', alt: 'Una compuerta AND seguida de una NOT.', caption: 'La NAND como una AND seguida de un inversor.' },
        { type: 'table', caption: 'Tabla de verdad de la compuerta NAND.', headers: ['$A$', '$B$', '$S = \\overline{A \\cdot B}$'], rows: [['0', '0', '1'], ['0', '1', '1'], ['1', '0', '1'], ['1', '1', '0']] },

        { type: 'h3', text: 'Compuerta XOR (OR exclusiva)', criollo: 'Da 1 cuando las entradas son distintas: una o la otra, pero no las dos.' },
        { type: 'p', text: 'La compuerta <strong>XOR</strong>, también conocida como <strong>OR exclusiva</strong>, corresponde a la suma lógica exclusiva.' },
        { type: 'p', text: 'En esta compuerta, la señal de salida $S$ será $1$ cuando las señales de entrada $A$ y $B$ sean distintas; en el caso de que $A$ y $B$ tengan el mismo estado, la señal de salida $S$ será $0$ ($A$ o $B$, pero no ambas).' },
        { type: 'math', latex: 'S = A \\oplus B = \\overline{A} \\cdot B + A \\cdot \\overline{B}', display: true },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-simbolo-xor-p06.png', alt: 'Símbolo lógico de la compuerta XOR, forma de OR con doble línea curva en la entrada.', caption: 'Símbolo de la compuerta XOR (OR exclusiva).' },
        { type: 'table', caption: 'Tabla de verdad de la compuerta XOR.', headers: ['$A$', '$B$', '$S = A \\oplus B$'], rows: [['0', '0', '0'], ['0', '1', '1'], ['1', '0', '1'], ['1', '1', '0']] },
        { type: 'p', text: 'El comportamiento de la compuerta <strong>XOR</strong> también puede lograrse usando otro tipo de compuertas, por ejemplo, <strong>NOT</strong>, <strong>AND</strong> y <strong>OR</strong>. Eso se ve directamente en su ecuación: dos términos con productos ($\\overline{A} \\cdot B$ y $A \\cdot \\overline{B}$) sumados entre sí.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-circuito-logico-xor-p07.png', alt: 'Circuito que implementa la XOR con dos inversores, dos AND y una OR.', caption: 'La XOR armada con compuertas básicas: dos AND, dos NOT y una OR.' },

        { type: 'h3', text: 'Compuerta XNOR (NOR exclusiva)', criollo: 'La XOR dada vuelta: da 1 cuando las entradas son iguales.' },
        { type: 'p', text: 'La compuerta <strong>XNOR</strong>, también conocida como <strong>NOR exclusiva</strong>, corresponde al complemento de la suma lógica exclusiva. Con lo cual, esta compuerta tiene como salida la inversa (o la negación) de la compuerta <strong>XOR</strong>.' },
        { type: 'p', text: 'Por lo tanto, en esta compuerta, la señal de salida $S$ será $1$ cuando las señales de entrada $A$ y $B$ sean iguales; en el caso de que $A$ y $B$ tengan distintos estados, la señal de salida $S$ será $0$.' },
        { type: 'math', latex: 'S = \\overline{A \\oplus B} = \\overline{A} \\cdot \\overline{B} + A \\cdot B', display: true },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-simbolo-xnor-p07.png', alt: 'Símbolo lógico de la compuerta XNOR, forma de XOR con círculo de inversión en la salida.', caption: 'Símbolo de la compuerta XNOR.' },
        { type: 'table', caption: 'Tabla de verdad de la compuerta XNOR.', headers: ['$A$', '$B$', '$S = \\overline{A \\oplus B}$'], rows: [['0', '0', '1'], ['0', '1', '0'], ['1', '0', '0'], ['1', '1', '1']] },

        { type: 'callout', tone: 'criollo', text: 'Truco para no marearte: NOR y NAND son OR y AND con el círculo de negación pegado. XOR mira si las entradas son <strong>distintas</strong>, y XNOR si son <strong>iguales</strong>. Una es el complemento de la otra.' }
      ],
      quiz: {
        tf: [
          { id: 'tf-8-1', q: 'La compuerta NOR da salida $1$ únicamente cuando $A$ y $B$ valen $0$.', a: true, explain: 'Correcto. La NOR es el complemento de la OR: como la OR solo da $0$ cuando ambas entradas son $0$, la NOR da $1$ justo en ese único caso.' },
          { id: 'tf-8-2', q: 'La compuerta NAND da salida $0$ únicamente cuando ambas entradas valen $1$.', a: true, explain: 'Correcto. La NAND es el complemento de la AND. La AND da $1$ solo si ambas son $1$, así que la NAND da $0$ exactamente en ese caso y $1$ en todos los demás.' },
          { id: 'tf-8-3', q: 'La compuerta XOR da salida $1$ cuando las dos entradas son iguales.', a: false, explain: 'Falso. Es al revés: la XOR (OR exclusiva) da $1$ cuando las entradas son distintas y $0$ cuando son iguales. La que da $1$ con entradas iguales es la XNOR.' },
          { id: 'tf-8-4', q: 'El círculo en la salida del símbolo de una compuerta indica una negación.', a: true, explain: 'Correcto. Según el apunte, siempre que se agrega el círculo en la salida estamos ante una negación (por eso NOR, NAND y XNOR lo tienen).' },
          { id: 'tf-8-5', q: 'El comportamiento de la XOR no se puede lograr con compuertas básicas como NOT, AND y OR.', a: false, explain: 'Falso. El apunte indica explícitamente que el comportamiento de la XOR también puede lograrse usando NOT, AND y OR.' }
        ],
        mc: [
          { id: 'mc-8-1', q: '¿Cuál es la ecuación de la compuerta NOR?', options: ['$S = \\overline{A + B}$', '$S = \\overline{A \\cdot B}$', '$S = A \\oplus B$', '$S = A + B$'], correctIndex: 0, explain: 'La NOR es el complemento de la suma lógica: $S = \\overline{A + B}$. La opción con producto negado es la NAND.' },
          { id: 'mc-8-2', q: '¿Cuál de estas compuertas da salida $1$ cuando las entradas son iguales?', options: ['XOR', 'XNOR', 'NAND', 'OR'], correctIndex: 1, explain: 'La XNOR (NOR exclusiva) da $1$ cuando $A$ y $B$ son iguales. La XOR hace lo contrario: da $1$ cuando son distintas.' },
          { id: 'mc-8-3', q: 'La XOR responde a la ecuación $S = A \\oplus B$. ¿A cuál de estas expresiones equivale?', options: ['$\\overline{A} \\cdot \\overline{B} + A \\cdot B$', '$\\overline{A} \\cdot B + A \\cdot \\overline{B}$', '$\\overline{A + B}$', '$A \\cdot B$'], correctIndex: 1, explain: 'La XOR equivale a $\\overline{A} \\cdot B + A \\cdot \\overline{B}$. La otra suma de productos ($\\overline{A}\\cdot\\overline{B} + A\\cdot B$) es la XNOR.' },
          { id: 'mc-8-4', q: 'La NAND es la negación de la compuerta...', options: ['OR', 'AND', 'XOR', 'NOT'], correctIndex: 1, explain: 'La NAND corresponde al complemento del producto lógico, es decir, la inversa de la AND ($S = \\overline{A \\cdot B}$).' }
        ]
      },
      flashcards: [
        { id: 'fc-8-1', front: '¿Qué operación realiza la compuerta NOR y cuál es su ecuación?', back: 'El complemento de la suma lógica (la inversa de la OR). Ecuación: $S = \\overline{A + B}$. Da $1$ solo cuando $A$ y $B$ son $0$.' },
        { id: 'fc-8-2', front: '¿Qué operación realiza la compuerta NAND y cuál es su ecuación?', back: 'El complemento del producto lógico (la inversa de la AND). Ecuación: $S = \\overline{A \\cdot B}$. Da $0$ solo cuando $A$ y $B$ son $1$.' },
        { id: 'fc-8-3', front: '¿Cuándo da $1$ la salida de una compuerta XOR?', back: 'Cuando las entradas $A$ y $B$ son distintas ($A$ o $B$, pero no ambas). Si son iguales, da $0$. Ecuación: $S = A \\oplus B = \\overline{A} \\cdot B + A \\cdot \\overline{B}$.' },
        { id: 'fc-8-4', front: '¿Cuándo da $1$ la salida de una compuerta XNOR?', back: 'Cuando las entradas $A$ y $B$ son iguales. Si son distintas, da $0$. Ecuación: $S = \\overline{A \\oplus B} = \\overline{A} \\cdot \\overline{B} + A \\cdot B$.' },
        { id: 'fc-8-5', front: '¿Qué indica el círculo en la salida del símbolo de una compuerta?', back: 'Una negación. Por eso lo tienen NOR, NAND y XNOR: son las versiones invertidas de OR, AND y XOR respectivamente.' },
        { id: 'fc-8-6', front: '¿La XOR se puede construir con compuertas básicas?', back: 'Sí. Su comportamiento también se logra con NOT, AND y OR (dos NOT, dos AND y una OR), tal como muestra su ecuación $\\overline{A} \\cdot B + A \\cdot \\overline{B}$.' },
        { id: 'fc-8-7', front: '¿Qué relación hay entre XOR y XNOR?', back: 'La XNOR es el complemento (la negación) de la XOR. Donde la XOR da $1$ (entradas distintas), la XNOR da $0$, y viceversa.' },
        { id: 'fc-8-8', front: 'OR exclusiva y NOR exclusiva: ¿qué nombres comunes tienen?', back: 'La OR exclusiva es la XOR, y la NOR exclusiva es la XNOR. La primera corresponde a la suma lógica exclusiva; la segunda, a su complemento.' }
      ]
    },
    {
      id: '9', unit: '2', title: 'Álgebra de Boole: postulados',
      criollo: 'El álgebra de Boole es la matemática que está atrás de todo lo digital: junta AND, OR y NOT en un par de reglas. Los postulados son los axiomas, o sea las premisas que se aceptan sin demostración. Acá te dejamos los cinco posta (conmutativa, distributiva, identidad, complemento y asociativa) y te verificamos dos por tabla de verdad para que veas que no son verso.',
      blocks: [
        { type: 'p', text: 'El <strong>álgebra de Boole</strong> (o álgebra booleana) es la base matemática lógica empleada en los sistemas digitales. Es el conjunto de reglas o propiedades que relacionan las operaciones lógicas <strong>AND</strong>, <strong>OR</strong> y <strong>NOT</strong>.' },
        { type: 'p', text: 'El álgebra de Boole se compone de una serie de <strong>postulados o axiomas</strong>. Estos son premisas que se toman como base para un razonamiento, cuya verdad se admite sin pruebas.' },
        { type: 'callout', tone: 'info', text: 'A partir de estos postulados es posible deducir luego varios <strong>teoremas</strong> del álgebra de Boole (idempotencia, elementos nulos, involutiva, absorción, De Morgan, transposición y consenso), que el apunte trata aparte.' },

        { type: 'h3', text: 'Propiedad conmutativa', criollo: 'El orden de los factores no altera el resultado, igual que en la matemática de toda la vida.' },
        { type: 'p', text: 'El orden de los factores no afecta ni a la suma lógica ni al producto lógico.' },
        { type: 'math', latex: '\\begin{aligned} A + B &= B + A \\\\ A \\cdot B &= B \\cdot A \\end{aligned}', display: true },

        { type: 'h3', text: 'Propiedad distributiva', criollo: 'Ojo con esta: en Boole no solo el producto distribuye sobre la suma, también la suma distribuye sobre el producto. Eso en la aritmética común no pasa.' },
        { type: 'p', text: 'El producto lógico se puede distribuir respecto de la suma lógica, y la suma lógica se puede distribuir respecto del producto lógico.' },
        { type: 'math', latex: '\\begin{aligned} A \\cdot (B + C) &= A \\cdot B + A \\cdot C \\\\ A + (B \\cdot C) &= (A + B) \\cdot (A + C) \\end{aligned}', display: true },

        { type: 'h3', text: 'Verificación de la distributiva por tabla de verdad' },
        { type: 'p', text: 'Una manera de verificar que $A + (B \\cdot C)$ es equivalente a $(A + B) \\cdot (A + C)$ es comprobar que ambas expresiones corresponden a una misma tabla de verdad. Como hay tres variables ($A$, $B$, $C$), la tabla tiene $2^n = 2^3 = 8$ filas.' },
        { type: 'p', text: 'Para $A + (B \\cdot C)$ primero se resuelve el paréntesis $B \\cdot C$ (el producto lógico da $1$ solo cuando $B$ y $C$ son ambos $1$) y luego la suma lógica con $A$ (da $0$ solo cuando $B \\cdot C$ y $A$ son ambos $0$).' },
        { type: 'table', caption: 'Tabla de verdad de A + (B · C)', headers: ['$A$', '$B$', '$C$', '$B \\cdot C$', '$A + (B \\cdot C)$'], rows: [
          ['0', '0', '0', '0', '0'],
          ['0', '0', '1', '0', '0'],
          ['0', '1', '0', '0', '0'],
          ['0', '1', '1', '1', '1'],
          ['1', '0', '0', '0', '1'],
          ['1', '0', '1', '0', '1'],
          ['1', '1', '0', '0', '1'],
          ['1', '1', '1', '1', '1']
        ] },
        { type: 'p', text: 'De igual manera se arma la tabla de $(A + B) \\cdot (A + C)$. Acá primero se resuelven las dos sumas lógicas y después el producto lógico entre sus resultados.' },
        { type: 'table', caption: 'Tabla de verdad de (A + B) · (A + C)', headers: ['$A$', '$B$', '$C$', '$A + B$', '$A + C$', '$(A + B) \\cdot (A + C)$'], rows: [
          ['0', '0', '0', '0', '0', '0'],
          ['0', '0', '1', '0', '1', '0'],
          ['0', '1', '0', '1', '0', '0'],
          ['0', '1', '1', '1', '1', '1'],
          ['1', '0', '0', '1', '1', '1'],
          ['1', '0', '1', '1', '1', '1'],
          ['1', '1', '0', '1', '1', '1'],
          ['1', '1', '1', '1', '1', '1']
        ] },
        { type: 'callout', tone: 'info', text: 'Dado que las columnas de resultado de ambas tablas son <strong>iguales</strong> (0,0,0,1,1,1,1,1), se verifica la equivalencia: $A + (B \\cdot C) = (A + B) \\cdot (A + C)$.' },

        { type: 'h3', text: 'Propiedad identidad', criollo: 'El 0 es el neutro de la suma y el 1 es el neutro del producto. Sumar 0 o multiplicar por 1 no cambia nada.' },
        { type: 'math', latex: '\\begin{aligned} A + 0 &= A \\\\ A \\cdot 1 &= A \\end{aligned}', display: true },

        { type: 'h3', text: 'Propiedad complemento', criollo: 'Una variable junto a su negada cubren todo: sumadas dan 1, multiplicadas dan 0. No hay punto medio.' },
        { type: 'p', text: 'La suma lógica entre una variable y su complemento da como resultado $1$. El producto lógico entre una variable y su complemento da como resultado $0$.' },
        { type: 'math', latex: '\\begin{aligned} A + \\overline{A} &= 1 \\\\ A \\cdot \\overline{A} &= 0 \\end{aligned}', display: true },
        { type: 'p', text: 'Una manera sencilla de verificar que $A + \\overline{A}$ es $1$ es haciendo la tabla de verdad.' },
        { type: 'table', caption: 'Verificación de A + Ā = 1', headers: ['$A$', '$\\overline{A}$', '$A + \\overline{A}$'], rows: [
          ['0', '1', '1'],
          ['1', '0', '1']
        ] },
        { type: 'callout', tone: 'info', text: 'Se verifica que en <strong>todos los casos</strong> el resultado es $1$.' },

        { type: 'h3', text: 'Propiedad asociativa', criollo: 'Mientras sea la misma operación, agrupás como quieras: los paréntesis no cambian nada. Por eso podés escribir A + B + C sin paréntesis.' },
        { type: 'p', text: 'Siempre que se trate de una misma operación lógica se podrá utilizar esta propiedad.' },
        { type: 'math', latex: '\\begin{aligned} A + (B + C) &= (A + B) + C = A + B + C \\\\ A \\cdot (B \\cdot C) &= (A \\cdot B) \\cdot C = A \\cdot B \\cdot C = ABC \\end{aligned}', display: true },

        { type: 'callout', tone: 'criollo', text: 'En este apunte se demuestran solo algunas propiedades; el resto se pueden comprobar igual, ya sea armando la tabla de verdad o encadenando otros postulados. Si las columnas de resultado coinciden, las expresiones son equivalentes y listo, rico.' }
      ],
      quiz: {
        tf: [
          { id: 'tf-9-1', q: 'En el álgebra de Boole, los postulados son axiomas: premisas que se admiten sin demostración.', a: true, explain: 'Exacto. Los postulados se toman como base del razonamiento y su verdad se admite sin pruebas.' },
          { id: 'tf-9-2', q: 'La propiedad distributiva del álgebra de Boole permite que la suma lógica se distribuya respecto del producto lógico: $A + (B \\cdot C) = (A + B) \\cdot (A + C)$.', a: true, explain: 'Sí. A diferencia de la aritmética común, en Boole la suma también distribuye sobre el producto.' },
          { id: 'tf-9-3', q: 'Según la propiedad identidad, $A \\cdot 1 = A$ y $A + 0 = A$.', a: true, explain: 'Correcto: el 1 es el neutro del producto lógico y el 0 es el neutro de la suma lógica.' },
          { id: 'tf-9-4', q: 'Por la propiedad complemento, $A + \\overline{A} = 0$.', a: false, explain: 'Falso. La suma de una variable con su complemento da $1$ ($A + \\overline{A} = 1$). El que da $0$ es el producto: $A \\cdot \\overline{A} = 0$.' },
          { id: 'tf-9-5', q: 'La propiedad conmutativa solo vale para la suma lógica, no para el producto lógico.', a: false, explain: 'Falso. Vale para ambas: $A + B = B + A$ y $A \\cdot B = B \\cdot A$. El orden de los factores no afecta a ninguna de las dos.' }
        ],
        mc: [
          { id: 'mc-9-1', q: '¿Qué operaciones lógicas relacionan las reglas del álgebra de Boole?', options: ['AND, OR y NOT', 'Suma, resta y multiplicación aritméticas', 'XOR, NAND y NOR únicamente', 'Solo AND y OR'], correctIndex: 0, explain: 'El álgebra de Boole es la base matemática que relaciona las operaciones lógicas AND, OR y NOT.' },
          { id: 'mc-9-2', q: 'Para verificar por tabla de verdad la equivalencia $A + (B \\cdot C) = (A + B) \\cdot (A + C)$, ¿cuántas filas tiene la tabla?', options: ['4 filas', '6 filas', '8 filas', '16 filas'], correctIndex: 2, explain: 'Con $n = 3$ variables ($A$, $B$, $C$) la tabla tiene $2^n = 2^3 = 8$ filas.' },
          { id: 'mc-9-3', q: '¿Cuál de estas igualdades corresponde a la propiedad asociativa?', options: ['$A + B = B + A$', '$A + (B + C) = (A + B) + C = A + B + C$', '$A + \\overline{A} = 1$', '$A \\cdot 1 = A$'], correctIndex: 1, explain: 'La asociativa permite reagrupar términos de una misma operación: $A + (B + C) = (A + B) + C = A + B + C$ (y lo análogo para el producto).' },
          { id: 'mc-9-4', q: '¿Qué resultado da el producto lógico de una variable por su complemento?', options: ['$1$', '$0$', 'La variable $A$', '$\\overline{A}$'], correctIndex: 1, explain: 'Por la propiedad complemento, $A \\cdot \\overline{A} = 0$. La suma, en cambio, da $1$.' }
        ]
      },
      flashcards: [
        { id: 'fc-9-1', front: '¿Qué es el álgebra de Boole?', back: 'La base matemática lógica empleada en los sistemas digitales. Es el conjunto de reglas o propiedades que relacionan las operaciones lógicas AND, OR y NOT.' },
        { id: 'fc-9-2', front: '¿Qué es un postulado (o axioma) del álgebra de Boole?', back: 'Una premisa que se toma como base para un razonamiento, cuya verdad se admite sin pruebas.' },
        { id: 'fc-9-3', front: 'Propiedad conmutativa', back: '$A + B = B + A$ y $A \\cdot B = B \\cdot A$. El orden de los factores no afecta ni a la suma ni al producto lógico.' },
        { id: 'fc-9-4', front: 'Propiedad distributiva', back: '$A \\cdot (B + C) = A \\cdot B + A \\cdot C$ y $A + (B \\cdot C) = (A + B) \\cdot (A + C)$. En Boole tanto el producto distribuye sobre la suma como la suma sobre el producto.' },
        { id: 'fc-9-5', front: 'Propiedad identidad', back: '$A + 0 = A$ y $A \\cdot 1 = A$. El 0 es neutro de la suma y el 1 es neutro del producto lógico.' },
        { id: 'fc-9-6', front: 'Propiedad complemento', back: '$A + \\overline{A} = 1$ y $A \\cdot \\overline{A} = 0$. Sumar una variable con su complemento da 1; multiplicarla por su complemento da 0.' },
        { id: 'fc-9-7', front: 'Propiedad asociativa', back: '$A + (B + C) = (A + B) + C = A + B + C$ y $A \\cdot (B \\cdot C) = (A \\cdot B) \\cdot C = ABC$. Vale siempre que sea la misma operación lógica.' },
        { id: 'fc-9-8', front: '¿Cómo se verifica que dos expresiones lógicas son equivalentes?', back: 'Armando las tablas de verdad de ambas con todas las combinaciones de variables ($2^n$ filas). Si las columnas de resultado coinciden, las expresiones son equivalentes.' }
      ],
    },
    {
      id: '10', unit: '2', title: 'Álgebra de Boole: teoremas',
      criollo: 'Che, los postulados eran las reglas que se aceptan de una, sin demostrar. Acá arrancan los teoremas, que son las propiedades que se deducen a partir de esos postulados. La estrella es el principio de dualidad (das vuelta sumas por productos y unos por ceros y todo sigue valiendo) y joyas como De Morgan, absorción y consenso. Cerramos con una tabla resumen para tener todo a mano.',
      blocks: [
        { type: 'p', text: 'A partir de los postulados del álgebra de Boole es posible deducir algunos <strong>teoremas</strong>. Mientras los postulados se admiten como verdaderos sin pruebas, los teoremas se demuestran usando esos postulados.' },

        { type: 'h3', text: 'Principio de dualidad', criollo: 'La regla madre: das vuelta todo y sigue valiendo.' },
        { type: 'p', text: 'En cualquier propiedad del álgebra de Boole pueden invertirse las sumas lógicas por productos lógicos (y viceversa) y los unos por los ceros (y viceversa), y esta seguirá siendo válida.' },
        { type: 'callout', tone: 'criollo', text: 'Por eso casi todas las propiedades vienen de a pares: una en <strong>forma OR</strong> y otra en <strong>forma AND</strong>. Cada una es la dual de la otra.' },

        { type: 'h3', text: 'Idempotencia', criollo: 'Sumar o multiplicar una variable consigo misma no cambia nada.' },
        { type: 'math', latex: 'A + A = A \\qquad A \\cdot A = A', display: true },
        { type: 'p', text: 'Como la idempotencia es un teorema, podemos verificar que $A \\cdot A$ equivale a $A$ usando los postulados. Se parte de $A$:' },
        { type: 'ol', items: [
          'Por identidad: $A = A \\cdot 1$',
          'Por complemento: $A \\cdot 1 = A \\cdot (A + \\overline{A})$',
          'Por distributiva: $A \\cdot (A + \\overline{A}) = A \\cdot A + A \\cdot \\overline{A}$',
          'Por complemento: $A \\cdot A + A \\cdot \\overline{A} = A \\cdot A + 0$',
          'Por identidad: $A \\cdot A + 0 = A \\cdot A$'
        ] },
        { type: 'p', text: 'Se llega a comprobar entonces que $A = A \\cdot A$.' },
        { type: 'callout', tone: 'info', text: 'El apunte aclara que este puede no ser el único camino para comprobar esta equivalencia.' },

        { type: 'h3', text: 'Elementos nulos', criollo: 'El 1 manda en la OR y el 0 manda en la AND.' },
        { type: 'math', latex: 'A + 1 = 1 \\qquad A \\cdot 0 = 0', display: true },

        { type: 'h3', text: 'Involutiva', criollo: 'Negar dos veces te deja como estabas.' },
        { type: 'p', text: 'El complemento del complemento de la variable es la variable en sí misma.' },
        { type: 'math', latex: '\\overline{\\overline{A}} = A', display: true },

        { type: 'h3', text: 'Absorción', criollo: 'Una variable se come al término que la contiene.' },
        { type: 'math', latex: 'A + (A \\cdot B) = A \\qquad A \\cdot (A + B) = A', display: true },

        { type: 'h3', text: 'De Morgan', criollo: 'Negás todo el grupo y se da vuelta la operación de adentro.' },
        { type: 'p', text: 'La negación de una suma es el producto de las negaciones, y la negación de un producto es la suma de las negaciones.' },
        { type: 'math', latex: '\\overline{A + B} = \\overline{A} \\cdot \\overline{B} \\qquad \\overline{A \\cdot B} = \\overline{A} + \\overline{B}', display: true },

        { type: 'h3', text: 'Transposición', criollo: 'Reescribís una expresión de suma de productos como producto de sumas.' },
        { type: 'math', latex: 'A \\cdot B + \\overline{A} \\cdot C = (A + C) \\cdot (\\overline{A} + B)', display: true },

        { type: 'h3', text: 'Consenso', criollo: 'El término del medio sobra: lo podés borrar sin cambiar nada.' },
        { type: 'p', text: 'El término de consenso ($B \\cdot C$ en la forma OR) es redundante y puede eliminarse.' },
        { type: 'math', latex: 'A \\cdot B + \\overline{A} \\cdot C + B \\cdot C = A \\cdot B + \\overline{A} \\cdot C', display: true },
        { type: 'p', text: 'Y su dual (forma AND):' },
        { type: 'math', latex: '(A + B) \\cdot (\\overline{A} + C) \\cdot (B + C) = (A + B) \\cdot (\\overline{A} + C)', display: true },

        { type: 'callout', tone: 'info', text: 'El apunte optó por demostrar solo algunas de las propiedades. De igual manera, se pueden comprobar el resto.' },

        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-equivalencia-asociativa-or-p10.png', alt: 'Dos circuitos con compuertas OR equivalentes: uno con OR anidadas y otro con una sola OR de tres entradas.', caption: 'Equivalencia gráfica de la propiedad asociativa de la OR.' },

        { type: 'h3', text: 'Tabla resumen de propiedades', criollo: 'Todo junto, forma OR y forma AND, para tenerlo a mano.' },
        { type: 'table', caption: 'Postulados y teoremas del álgebra de Boole en forma OR y forma AND.',
          headers: ['Propiedad', 'Forma OR', 'Forma AND'],
          rows: [
            ['Conmutativa', '$A + B = B + A$', '$A \\cdot B = B \\cdot A$'],
            ['Distributiva', '$A \\cdot (B + C) = A \\cdot B + A \\cdot C$', '$A + (B \\cdot C) = (A + B) \\cdot (A + C)$'],
            ['Identidad', '$A + 0 = A$', '$A \\cdot 1 = A$'],
            ['Complemento', '$A + \\overline{A} = 1$', '$A \\cdot \\overline{A} = 0$'],
            ['Asociativa', '$A + (B + C) = (A + B) + C = A + B + C$', '$A \\cdot (B \\cdot C) = (A \\cdot B) \\cdot C = ABC$'],
            ['Idempotencia', '$A + A = A$', '$A \\cdot A = A$'],
            ['Elementos nulos', '$A + 1 = 1$', '$A \\cdot 0 = 0$'],
            ['Involutiva', '$\\overline{\\overline{A}} = A$', '$\\overline{\\overline{A}} = A$'],
            ['Absorción', '$A + (A \\cdot B) = A$', '$A \\cdot (A + B) = A$'],
            ['De Morgan', '$\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$', '$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$'],
            ['Transposición', '$A \\cdot B + \\overline{A} \\cdot C = (A + C) \\cdot (\\overline{A} + B)$', '$A \\cdot B + \\overline{A} \\cdot C = (A + C) \\cdot (\\overline{A} + B)$'],
            ['Consenso', '$A \\cdot B + \\overline{A} \\cdot C + B \\cdot C = A \\cdot B + \\overline{A} \\cdot C$', '$(A + B) \\cdot (\\overline{A} + C) \\cdot (B + C) = (A + B) \\cdot (\\overline{A} + C)$']
          ]
        }
      ],
      quiz: {
        tf: [
          { id: 'tf-10-1', q: 'Según el principio de dualidad, en cualquier propiedad del álgebra de Boole se pueden invertir las sumas por productos y los unos por los ceros, y la propiedad sigue siendo válida.', a: true, explain: 'Esa es exactamente la definición del principio de dualidad.' },
          { id: 'tf-10-2', q: 'La propiedad de idempotencia establece que $A + A = A$ y que $A \\cdot A = A$.', a: true, explain: 'Sumar o multiplicar una variable consigo misma da la misma variable.' },
          { id: 'tf-10-3', q: 'La propiedad de los elementos nulos dice que $A + 1 = A$ y $A \\cdot 0 = A$.', a: false, explain: 'Los elementos nulos son $A + 1 = 1$ y $A \\cdot 0 = 0$. El 1 absorbe en la OR y el 0 absorbe en la AND.' },
          { id: 'tf-10-4', q: 'La propiedad involutiva afirma que $\\overline{\\overline{A}} = A$.', a: true, explain: 'El complemento del complemento de la variable es la variable en sí misma.' },
          { id: 'tf-10-5', q: 'De Morgan establece que $\\overline{A + B} = \\overline{A} + \\overline{B}$.', a: false, explain: 'De Morgan da vuelta la operación: $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ (y $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$).' }
        ],
        mc: [
          { id: 'mc-10-1', q: '¿Cuál es la diferencia entre un postulado y un teorema en el álgebra de Boole?', options: ['Los postulados se demuestran y los teoremas se admiten sin pruebas', 'Los postulados se admiten como verdaderos sin pruebas y los teoremas se deducen a partir de ellos', 'Ambos se demuestran usando tablas de verdad obligatoriamente', 'No hay ninguna diferencia, son sinónimos'], correctIndex: 1, explain: 'Los postulados o axiomas se toman como base sin pruebas; los teoremas se deducen a partir de esos postulados.' },
          { id: 'mc-10-2', q: 'En la demostración de $A \\cdot A = A$, ¿qué postulado se usa para reescribir $A$ como $A \\cdot 1$?', options: ['Complemento', 'Distributiva', 'Identidad', 'Conmutativa'], correctIndex: 2, explain: 'Por identidad $A \\cdot 1 = A$, así que se parte de $A = A \\cdot 1$.' },
          { id: 'mc-10-3', q: '¿Cuál de las siguientes expresa correctamente la propiedad de absorción?', options: ['$A + (A \\cdot B) = A$ y $A \\cdot (A + B) = A$', '$A + (A \\cdot B) = B$ y $A \\cdot (A + B) = B$', '$A + (A \\cdot B) = 1$ y $A \\cdot (A + B) = 0$', '$A + (A \\cdot B) = A \\cdot B$'], correctIndex: 0, explain: 'En la absorción la variable se "come" al término que la contiene: el resultado es $A$ en ambas formas.' },
          { id: 'mc-10-4', q: 'Según la propiedad de consenso, ¿qué término es redundante en $A \\cdot B + \\overline{A} \\cdot C + B \\cdot C$?', options: ['$A \\cdot B$', '$\\overline{A} \\cdot C$', '$B \\cdot C$', 'Ninguno, todos son necesarios'], correctIndex: 2, explain: 'El término de consenso $B \\cdot C$ es redundante: $A \\cdot B + \\overline{A} \\cdot C + B \\cdot C = A \\cdot B + \\overline{A} \\cdot C$.' }
        ]
      },
      flashcards: [
        { id: 'fc-10-1', front: '¿Qué dice el principio de dualidad?', back: 'En cualquier propiedad se pueden invertir sumas por productos (y viceversa) y unos por ceros (y viceversa), y la propiedad sigue siendo válida.' },
        { id: 'fc-10-2', front: 'Propiedad de idempotencia', back: '$A + A = A$ y $A \\cdot A = A$.' },
        { id: 'fc-10-3', front: 'Propiedad de los elementos nulos', back: '$A + 1 = 1$ y $A \\cdot 0 = 0$.' },
        { id: 'fc-10-4', front: 'Propiedad involutiva', back: '$\\overline{\\overline{A}} = A$: el complemento del complemento de la variable es la variable misma.' },
        { id: 'fc-10-5', front: 'Propiedad de absorción', back: '$A + (A \\cdot B) = A$ y $A \\cdot (A + B) = A$.' },
        { id: 'fc-10-6', front: 'Teoremas de De Morgan', back: '$\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ y $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$.' },
        { id: 'fc-10-7', front: 'Propiedad de transposición', back: '$A \\cdot B + \\overline{A} \\cdot C = (A + C) \\cdot (\\overline{A} + B)$.' },
        { id: 'fc-10-8', front: 'Propiedad de consenso (forma OR)', back: '$A \\cdot B + \\overline{A} \\cdot C + B \\cdot C = A \\cdot B + \\overline{A} \\cdot C$: el término $B \\cdot C$ es redundante.' },
        { id: 'fc-10-9', front: 'En la demostración de $A \\cdot A = A$, ¿qué postulados se usan?', back: 'Identidad, complemento y distributiva: $A = A \\cdot 1 = A \\cdot (A + \\overline{A}) = A \\cdot A + A \\cdot \\overline{A} = A \\cdot A + 0 = A \\cdot A$.' }
      ]
    },
    {
      id: '11', unit: '2', title: 'Funciones lógicas y circuitos',
      criollo: 'Acá agarramos una función booleana, la dibujamos como circuito con compuertas, y después la achicamos con álgebra de Boole hasta dejarla mínima. Menos compuertas = menos costo. Y de yapa, cómo armar todo con una sola clase de compuerta (NAND o NOR).',
      blocks: [
        { type: 'h3', text: 'Qué es una función lógica', criollo: 'Una fórmula booleana con variables binarias conectadas por compuertas.' },
        { type: 'p', text: 'Una <strong>función lógica</strong> es una expresión booleana conformada por variables binarias (señales digitales binarias), las cuales están relacionadas mediante las operaciones lógicas (compuertas lógicas).' },
        { type: 'p', text: 'Por ejemplo, una función lógica de las variables $A$, $B$ y $C$:' },
        { type: 'math', latex: 'f(A, B, C) = \\overline{(A + \\overline{B})} + A \\cdot (B + C) + B \\cdot (B + \\overline{C})', display: true },
        { type: 'p', text: 'En este ejemplo, las variables son $A$, $B$ y $C$, pero podrían ser simbolizadas por otras letras o estar en otro orden, como $f(C, B, A)$.' },

        { type: 'h3', text: 'Circuitos lógicos de las funciones', criollo: 'El dibujo de la función con los símbolos de las compuertas.' },
        { type: 'p', text: 'El <strong>circuito lógico</strong> es la representación gráfica de la función, en la que se utilizan los símbolos lógicos de las compuertas para realizarlo.' },
        { type: 'p', text: 'Para armar el circuito a partir de una función conviene identificar cada tipo de compuerta dentro de ella. Si vamos marcando tramo por tramo, aparecen NOT, NOR, OR, AND y la OR final que junta todo:' },
        { type: 'math', latex: 'f(A, B, C) = \\underbrace{\\overline{(A + \\underbrace{\\overline{B}}_{NOT})}}_{NOR} + \\underbrace{A \\cdot \\underbrace{(B + C)}_{OR}}_{AND} + \\underbrace{B \\cdot \\underbrace{(B + \\underbrace{\\overline{C}}_{NOT})}_{OR}}_{AND}', display: true },
        { type: 'p', text: 'Una vez identificadas las compuertas, ya se puede armar el diagrama lógico. En el circuito se conectan las entradas y las salidas de las compuertas con líneas (cables). Cuando se quiere indicar que dos líneas están conectadas, se hace un punto (círculo relleno).' },
        { type: 'callout', tone: 'info', text: 'El apunte aclara que, para mayor claridad de lectura, el diagrama se puede dibujar de otra manera: cada entrada con la misma variable se entiende conectada como en el circuito original, aunque no se trace la línea completa.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-circuito-funcion-anotado-p02.png', alt: 'Circuito lógico de una función F a partir de A, B y C con inversores, AND, OR y NOR, anotado con las expresiones booleanas de cada nodo.', caption: 'Circuito de la función F con cada tramo anotado con su expresión booleana.' },

        { type: 'h3', text: 'Minimización con álgebra de Boole', criollo: 'Usás las propiedades para sacarle compuertas hasta que no se pueda más.' },
        { type: 'p', text: 'Las propiedades o reglas del álgebra se pueden utilizar para llegar a expresiones equivalentes de la función que tengan menor cantidad de compuertas lógicas. Se dice que la expresión es <strong>mínima</strong> cuando ya no es posible reducirla.' },
        { type: 'callout', tone: 'info', text: 'Ojo: la expresión mínima <strong>puede no ser única</strong>. Puede haber más de una forma igual de chica.' },
        { type: 'p', text: 'Vamos a encontrar una expresión mínima de la función $f(A, B, C)$ partiendo de la original. Cada paso aplica una propiedad distinta:' },
        { type: 'math', latex: 'f(A, B, C) = \\overline{(A + \\overline{B})} + A \\cdot (B + C) + B \\cdot (B + \\overline{C})', display: true },
        { type: 'ol', items: [
          'Por <strong>De Morgan</strong>: $f(A, B, C) = \\overline{A} \\cdot B + A \\cdot (B + C) + B \\cdot (B + \\overline{C})$',
          'Por <strong>distributiva</strong>: $f(A, B, C) = \\overline{A} \\cdot B + A \\cdot B + A \\cdot C + B \\cdot B + B \\cdot \\overline{C}$',
          'Por <strong>idempotencia</strong> ($B \\cdot B = B$): $f(A, B, C) = \\overline{A} \\cdot B + A \\cdot B + A \\cdot C + B + B \\cdot \\overline{C}$',
          'Por <strong>absorción</strong>: $f(A, B, C) = \\overline{A} \\cdot B + A \\cdot B + A \\cdot C + B$',
          'Por <strong>absorción</strong>: $f(A, B, C) = \\overline{A} \\cdot B + A \\cdot C + B$',
          'Por <strong>absorción</strong>: $f(A, B, C) = A \\cdot C + B$'
        ] },
        { type: 'p', text: 'Una expresión mínima de la función es entonces:' },
        { type: 'math', latex: 'f(A, B, C) = A \\cdot C + B', display: true },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-circuito-funcion-minimizada-p03.png', alt: 'Circuito lógico minimizado con una AND de A y C combinada en una OR con B.', caption: 'Versión minimizada de la función: f = B + A·C.' },
        { type: 'callout', tone: 'criollo', text: 'Fijate la diferencia: la expresión mínima minimiza la cantidad de compuertas. Cuando diseñás algo, lo querés optimizar para tener un menor costo lógico. Menos compuertas, más barato, rico.' },

        { type: 'h3', text: 'Circuitos con un solo tipo de compuerta', criollo: 'A veces conviene armar todo con NAND o todo con NOR.' },
        { type: 'p', text: 'A veces será conveniente implementar la función lógica con un solo tipo de compuerta. Se parte del resultado de la expresión mínima y se siguen una serie de pasos usando las propiedades del álgebra de Boole.' },

        { type: 'p', text: '<strong>Solo con compuertas NAND.</strong> Partimos de $f(A, B, C) = A \\cdot C + B$:' },
        { type: 'ol', items: [
          'Por <strong>involutiva</strong> (doble negación): $f(A, B, C) = \\overline{\\overline{A \\cdot C + B}}$',
          'Por <strong>De Morgan</strong>: $f(A, B, C) = \\overline{\\overline{A \\cdot C} \\cdot \\overline{B}}$',
          'Por <strong>idempotencia</strong> ($B = B \\cdot B$): $f(A, B, C) = \\overline{\\overline{A \\cdot C} \\cdot \\overline{B \\cdot B}}$, donde cada $\\overline{A \\cdot C}$ y $\\overline{B \\cdot B}$ es una NAND, y la barra exterior es otra NAND.'
        ] },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-circuito-funcion-solo-nand-p04.png', alt: 'Circuito que implementa la función usando únicamente compuertas NAND.', caption: 'La función implementada solo con compuertas NAND.' },

        { type: 'p', text: '<strong>Solo con compuertas NOR.</strong> Acá se parte de la forma como producto de sumas $f(A, B, C) = (A + B) \\cdot (B + C)$:' },
        { type: 'ol', items: [
          'Por <strong>involutiva</strong> (doble negación): $f(A, B, C) = \\overline{\\overline{(A + B) \\cdot (B + C)}}$',
          'Por <strong>De Morgan</strong>: $f(A, B, C) = \\overline{\\overline{(A + B)} + \\overline{(B + C)}}$, donde cada $\\overline{(A + B)}$ y $\\overline{(B + C)}$ es una NOR, y la barra exterior es otra NOR.'
        ] },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u2-circuito-funcion-solo-nor-p04.png', alt: 'Circuito que implementa la función usando únicamente compuertas NOR.', caption: 'La función implementada solo con compuertas NOR.' },
        { type: 'callout', tone: 'info', text: 'Los circuitos del apunte están realizados en el simulador https://www.falstad.com/circuit/.' }
      ],
      quiz: {
        tf: [
          { id: 'tf-11-1', q: 'Una función lógica es una expresión booleana de variables binarias relacionadas mediante operaciones lógicas (compuertas).', a: true, explain: 'Es la definición exacta del apunte.' },
          { id: 'tf-11-2', q: 'El circuito lógico es la representación gráfica de la función usando los símbolos de las compuertas.', a: true, explain: 'Correcto: el circuito es el dibujo de la función con los símbolos lógicos de las compuertas.' },
          { id: 'tf-11-3', q: 'La expresión mínima de una función lógica es siempre única.', a: false, explain: 'Falso. El apunte aclara que la expresión mínima puede no ser única: puede haber más de una forma igual de reducida.' },
          { id: 'tf-11-4', q: 'Minimizar una función con álgebra de Boole busca reducir la cantidad de compuertas para bajar el costo lógico.', a: true, explain: 'Así es: menos compuertas implica un menor costo lógico en el diseño.' },
          { id: 'tf-11-5', q: 'Para implementar la función solo con compuertas NAND se parte de la forma producto de sumas $(A + B) \\cdot (B + C)$.', a: false, explain: 'Falso. De $(A + B) \\cdot (B + C)$ se parte para la versión solo NOR. Para solo NAND se parte de la expresión mínima $A \\cdot C + B$.' }
        ],
        mc: [
          { id: 'mc-11-1', q: '¿Cuál es una expresión mínima de $f(A, B, C) = \\overline{(A + \\overline{B})} + A \\cdot (B + C) + B \\cdot (B + \\overline{C})$?', options: ['$A \\cdot C + B$', '$\\overline{A} \\cdot B + A \\cdot C$', '$A + B + C$', '$A \\cdot B \\cdot C$'], correctIndex: 0, explain: 'Aplicando De Morgan, distributiva, idempotencia y absorción se llega a $f = A \\cdot C + B$.' },
          { id: 'mc-11-2', q: 'En la minimización, ¿qué propiedad permite pasar de $B \\cdot B$ a $B$?', options: ['Idempotencia', 'De Morgan', 'Distributiva', 'Involutiva'], correctIndex: 0, explain: 'La idempotencia establece que $B \\cdot B = B$ (y $B + B = B$).' },
          { id: 'mc-11-3', q: '¿Qué dos propiedades se usan para llevar $A \\cdot C + B$ a una forma solo con compuertas NAND?', options: ['Involutiva y De Morgan (más idempotencia)', 'Distributiva y complemento', 'Absorción y conmutativa', 'Identidad y distributiva'], correctIndex: 0, explain: 'Se aplica involutiva (doble negación), luego De Morgan, y la idempotencia para desdoblar $B$ en $B \\cdot B$.' },
          { id: 'mc-11-4', q: 'En el circuito, ¿cómo se indica que dos líneas (cables) están conectadas?', options: ['Con un punto (círculo relleno)', 'Con una flecha', 'Con un cuadrado', 'Con un círculo vacío'], correctIndex: 0, explain: 'El apunte indica que la conexión entre dos líneas se marca con un punto, un círculo relleno.' }
        ]
      },
      flashcards: [
        { id: 'fc-11-1', front: '¿Qué es una función lógica?', back: 'Una expresión booleana conformada por variables binarias relacionadas mediante operaciones lógicas (compuertas).' },
        { id: 'fc-11-2', front: '¿Qué es un circuito lógico?', back: 'La representación gráfica de la función, usando los símbolos lógicos de las compuertas para realizarla.' },
        { id: 'fc-11-3', front: '¿Cuándo una expresión es mínima?', back: 'Cuando ya no es posible reducirla aplicando propiedades del álgebra de Boole. Puede no ser única.' },
        { id: 'fc-11-4', front: '¿Para qué sirve minimizar una función lógica?', back: 'Para llegar a una expresión equivalente con menor cantidad de compuertas, optimizando el diseño y bajando el costo lógico.' },
        { id: 'fc-11-5', front: 'Expresión mínima de $\\overline{(A + \\overline{B})} + A \\cdot (B + C) + B \\cdot (B + \\overline{C})$', back: '$f(A, B, C) = A \\cdot C + B$, obtenida con De Morgan, distributiva, idempotencia y absorción.' },
        { id: 'fc-11-6', front: '¿De qué expresión se parte para armar la función solo con NAND?', back: 'De la expresión mínima $A \\cdot C + B$, aplicando involutiva, De Morgan e idempotencia.' },
        { id: 'fc-11-7', front: '¿De qué expresión se parte para armar la función solo con NOR?', back: 'De la forma producto de sumas $(A + B) \\cdot (B + C)$, aplicando involutiva y De Morgan.' },
        { id: 'fc-11-8', front: '¿Cómo se marca en un circuito que dos cables están conectados?', back: 'Con un punto, es decir un círculo relleno, sobre la unión de las líneas.' }
      ]
    },
    {
      id: '12', unit: '2', title: 'Formas canónicas: SOP y POS',
      criollo: 'Acá la idea es escribir la función de forma "prolija y completa": que en CADA término aparezcan TODAS las variables, sí o sí. Eso te da las formas canónicas, y de paso un atajo brutal para armar la tabla de verdad o leerla al revés. Hay dos sabores: suma de productos (SOP) y producto de sumas (POS).',
      blocks: [
        { type: 'p', text: 'La <strong>forma canónica</strong> de una función lógica es aquella en la que <strong>cada uno de los términos tiene todas las variables</strong> de la función. No alcanza con que esté simplificada: lo que importa es que ningún término se quede sin alguna variable.' },
        { type: 'p', text: 'Existen dos maneras de escribir la forma canónica:' },
        { type: 'ul', items: [
          'Forma canónica como <strong>suma de productos</strong> (SOP).',
          'Forma canónica como <strong>producto de sumas</strong> (POS).'
        ] },

        { type: 'h3', text: 'Forma canónica como suma de productos (SOP)', criollo: 'Partís de una suma de productos cualquiera y vas rellenando las variables que faltan.' },
        { type: 'p', text: 'Para armar la SOP se puede partir de <strong>cualquier expresión equivalente</strong> de la función original que esté escrita como suma de productos, aunque no tenga todas las variables ni sea mínima. Por ejemplo:' },
        { type: 'math', latex: 'f(A, B, C) = A \\cdot C + B', display: true },
        { type: 'p', text: 'Con esa expresión, se siguen una serie de pasos para <strong>agregar las variables faltantes</strong> en cada término. Sobre el primer término ($A \\cdot C$, al que le falta $B$):' },
        { type: 'math', latex: '\\text{Identidad} \\rightarrow f(A,B,C) = A \\cdot C \\cdot 1 + B', display: true },
        { type: 'math', latex: '\\text{Complemento} \\rightarrow f(A,B,C) = A \\cdot C \\cdot (B + \\overline{B}) + B', display: true },
        { type: 'math', latex: '\\text{Distributiva} \\rightarrow f(A,B,C) = A \\cdot C \\cdot B + A \\cdot C \\cdot \\overline{B} + B', display: true },
        { type: 'p', text: 'Así se logró agregar la variable faltante en ese término. Repitiendo los mismos pasos sobre el otro término ($B$, al que le faltan $A$ y $C$):' },
        { type: 'math', latex: '\\text{Identidad} \\rightarrow f(A,B,C) = A \\cdot C \\cdot B + A \\cdot C \\cdot \\overline{B} + B \\cdot 1 \\cdot 1', display: true },
        { type: 'math', latex: '\\text{Complemento} \\rightarrow f(A,B,C) = A \\cdot C \\cdot B + A \\cdot C \\cdot \\overline{B} + B \\cdot (A + \\overline{A}) \\cdot (C + \\overline{C})', display: true },
        { type: 'math', latex: '\\text{Distributiva} \\rightarrow f = A C B + A C \\overline{B} + B \\cdot (AC + A\\overline{C} + \\overline{A}C + \\overline{A}\\,\\overline{C})', display: true },
        { type: 'math', latex: '\\text{Distributiva} \\rightarrow f = A C B + A C \\overline{B} + B A C + B A \\overline{C} + B \\overline{A} C + B \\overline{A}\\,\\overline{C}', display: true },
        { type: 'p', text: 'En este punto todos los términos tienen todas las variables. Es importante <strong>no olvidar ordenarlos</strong>, de manera que en todos los términos las variables queden en el mismo orden:' },
        { type: 'math', latex: '\\text{Conmutativa} \\rightarrow f = A B C + A \\overline{B} C + A B C + A B \\overline{C} + \\overline{A} B C + \\overline{A} B \\overline{C}', display: true },
        { type: 'p', text: 'Algunos términos quedan repetidos, así que se aplica <strong>idempotencia</strong> para eliminar el duplicado:' },
        { type: 'math', latex: '\\text{Idempotencia} \\rightarrow f = A B C + A \\overline{B} C + A B \\overline{C} + \\overline{A} B C + \\overline{A} B \\overline{C}', display: true },
        { type: 'p', text: 'Esa última expresión ya está en forma canónica como suma de productos.' },

        { type: 'h3', text: 'Minitérminos', criollo: 'Cada producto con todas las variables es un minitérmino. Y la regla de lectura: variable normal = 1, variable negada = 0.' },
        { type: 'p', text: 'Cada término de <strong>producto lógico que contiene todas las variables</strong> se conoce como <strong>minitérmino</strong> ($m$).' },
        { type: 'callout', tone: 'info', text: 'Cuando se trabaja con minitérminos: $A = 1$ y $\\overline{A} = 0$. Esto vale igual para todas las variables.' },
        { type: 'p', text: 'Aplicando esa regla a cada minitérmino, leemos cada término como un número binario ($A B C$):' },
        { type: 'math', latex: '\\underset{111}{A B C} + \\underset{101}{A \\overline{B} C} + \\underset{110}{A B \\overline{C}} + \\underset{011}{\\overline{A} B C} + \\underset{010}{\\overline{A} B \\overline{C}}', display: true },
        { type: 'p', text: 'Si pasamos esos binarios a decimal, cada término toma su número de minitérmino:' },
        { type: 'math', latex: '\\underset{m_7}{A B C} + \\underset{m_5}{A \\overline{B} C} + \\underset{m_6}{A B \\overline{C}} + \\underset{m_3}{\\overline{A} B C} + \\underset{m_2}{\\overline{A} B \\overline{C}}', display: true },
        { type: 'p', text: 'De forma más compacta:' },
        { type: 'math', latex: 'f(A,B,C) = m_2 + m_3 + m_5 + m_6 + m_7 = \\sum m(2, 3, 5, 6, 7)', display: true },

        { type: 'h3', text: 'Tabla de verdad a partir de la SOP', criollo: 'Cada minitérmino es un 1 en la tabla. Donde aparece un minitérmino, f vale 1; el resto, 0.' },
        { type: 'p', text: 'Cada <strong>minitérmino corresponde a un 1</strong> en la tabla de verdad de la función ($f = 1$). Y al revés: a partir de la tabla también se puede obtener la forma canónica de la función.' },
        { type: 'table', caption: 'Tabla de verdad de la SOP: $f = ABC + A\\overline{B}C + AB\\overline{C} + \\overline{A}BC + \\overline{A}B\\overline{C}$', headers: ['$A$', '$B$', '$C$', '$f$', ''], rows: [
          ['0', '0', '0', '0', ''],
          ['0', '0', '1', '0', ''],
          ['0', '1', '0', '1', '$m_2$'],
          ['0', '1', '1', '1', '$m_3$'],
          ['1', '0', '0', '0', ''],
          ['1', '0', '1', '1', '$m_5$'],
          ['1', '1', '0', '1', '$m_6$'],
          ['1', '1', '1', '1', '$m_7$']
        ] },

        { type: 'h3', text: 'Forma canónica como producto de sumas (POS)', criollo: 'Mismo juego pero al revés: partís de un producto de sumas y rellenás las variables que faltan en cada suma.' },
        { type: 'p', text: 'De manera análoga, se parte de una expresión escrita como producto de sumas. Por ejemplo:' },
        { type: 'math', latex: 'f(A, B, C) = (A + B) \\cdot (B + C)', display: true },
        { type: 'p', text: 'Se agregan las variables faltantes usando identidad, complemento y distributiva (acá el neutro de la suma es el $0$):' },
        { type: 'math', latex: '\\text{Identidad} \\rightarrow f = (A + B + 0) \\cdot (0 + B + C)', display: true },
        { type: 'math', latex: '\\text{Complemento} \\rightarrow f = ((A + B) + C \\cdot \\overline{C}) \\cdot (A \\cdot \\overline{A} + (B + C))', display: true },
        { type: 'math', latex: '\\text{Distributiva} \\rightarrow f = (A + B + C)(A + B + \\overline{C})(A + B + C)(\\overline{A} + B + C)', display: true },
        { type: 'math', latex: '\\text{Idempotencia} \\rightarrow f = (A + B + C)(A + B + \\overline{C})(\\overline{A} + B + C)', display: true },
        { type: 'p', text: 'Esa expresión ya está en forma canónica como producto de sumas.' },

        { type: 'h3', text: 'Maxitérminos', criollo: 'Cada suma con todas las variables es un maxitérmino. Ojo con la regla: acá se invierte, variable normal = 0, variable negada = 1.' },
        { type: 'p', text: 'A cada término de <strong>suma lógica que contiene todas las variables</strong> se lo conoce como <strong>maxitérmino</strong> ($M$).' },
        { type: 'callout', tone: 'warning', text: 'Cuando se trabaja con maxitérminos la regla se DA VUELTA respecto de los minitérminos: $A = 0$ y $\\overline{A} = 1$. Esto vale igual para todas las variables.' },
        { type: 'p', text: 'Aplicando esa regla, leemos cada maxitérmino como un número binario ($A B C$):' },
        { type: 'math', latex: '\\underset{000}{(A + B + C)} \\cdot \\underset{001}{(A + B + \\overline{C})} \\cdot \\underset{100}{(\\overline{A} + B + C)}', display: true },
        { type: 'p', text: 'Pasando los binarios a decimal, cada término toma su número de maxitérmino:' },
        { type: 'math', latex: '\\underset{M_0}{(A + B + C)} \\cdot \\underset{M_1}{(A + B + \\overline{C})} \\cdot \\underset{M_4}{(\\overline{A} + B + C)}', display: true },
        { type: 'p', text: 'De forma más compacta:' },
        { type: 'math', latex: 'f(A,B,C) = M_0 \\cdot M_1 \\cdot M_4 = \\prod M(0, 1, 4)', display: true },

        { type: 'h3', text: 'Tabla de verdad a partir de la POS', criollo: 'Acá es al revés que en SOP: cada maxitérmino es un 0 en la tabla.' },
        { type: 'p', text: 'Cada <strong>maxitérmino corresponde a un 0</strong> en la tabla de verdad de la función ($f = 0$). Igual que antes, a partir de la tabla también se puede obtener la forma canónica.' },
        { type: 'table', caption: 'Tabla de verdad de la POS: $f = (A+B+C) \\cdot (A+B+\\overline{C}) \\cdot (\\overline{A}+B+C)$', headers: ['$A$', '$B$', '$C$', '$f$', ''], rows: [
          ['0', '0', '0', '0', '$M_0$'],
          ['0', '0', '1', '0', '$M_1$'],
          ['0', '1', '0', '1', ''],
          ['0', '1', '1', '1', ''],
          ['1', '0', '0', '0', '$M_4$'],
          ['1', '0', '1', '1', ''],
          ['1', '1', '0', '1', ''],
          ['1', '1', '1', '1', '']
        ] },

        { type: 'callout', tone: 'criollo', text: 'Truco para no marearte: minitérmino mira los UNOS (m = 1, variable normal = 1), maxitérmino mira los CEROS (M = 0, variable normal = 0). Son la misma tabla leída desde lados opuestos.' }
      ],
      quiz: {
        tf: [
          { id: 'tf-12-1', q: 'En la forma canónica, cada término tiene todas las variables de la función.', a: true, explain: 'Esa es justamente la definición de forma canónica: cada término contiene todas las variables.' },
          { id: 'tf-12-2', q: 'Un minitérmino es un término de producto lógico que contiene todas las variables.', a: true, explain: 'Correcto. El minitérmino ($m$) es un producto con todas las variables; el maxitérmino ($M$) es una suma con todas las variables.' },
          { id: 'tf-12-3', q: 'Trabajando con minitérminos, una variable negada ($\\overline{A}$) se lee como 1.', a: false, explain: 'Al revés: en minitérminos $A = 1$ y $\\overline{A} = 0$. El criterio de leer la negada como 1 es el de los maxitérminos.' },
          { id: 'tf-12-4', q: 'Cada maxitérmino corresponde a un 0 en la tabla de verdad de la función.', a: true, explain: 'Sí. Cada maxitérmino es una fila donde $f = 0$, mientras que cada minitérmino es una fila donde $f = 1$.' },
          { id: 'tf-12-5', q: 'Para armar la SOP hay que partir obligatoriamente de la expresión mínima de la función.', a: false, explain: 'No. Se puede partir de cualquier expresión equivalente escrita como suma de productos, aunque no sea mínima ni tenga todas las variables.' }
        ],
        mc: [
          { id: 'mc-12-1', q: '¿Qué propiedades se usan para agregar una variable faltante en un término de la SOP?', options: ['De Morgan e involutiva', 'Identidad, complemento y distributiva', 'Solo absorción', 'Dualidad y consenso'], correctIndex: 1, explain: 'El procedimiento del apunte es: identidad ($\\cdot 1$), complemento ($\\cdot (B + \\overline{B})$) y luego distributiva.' },
          { id: 'mc-12-2', q: 'El minitérmino $\\overline{A} \\cdot B \\cdot \\overline{C}$ corresponde a qué número.', options: ['$m_7$', '$m_5$', '$m_2$', '$m_4$'], correctIndex: 2, explain: 'Con $\\overline{A}=0$, $B=1$, $\\overline{C}=0$ el binario es $010$, que en decimal es 2: $m_2$.' },
          { id: 'mc-12-3', q: 'La función $f = (A+B+C)(A+B+\\overline{C})(\\overline{A}+B+C)$ en notación compacta es:', options: ['$\\sum m(0,1,4)$', '$\\prod M(0,1,4)$', '$\\sum m(2,3,5,6,7)$', '$\\prod M(2,3,5,6,7)$'], correctIndex: 1, explain: 'Son maxitérminos ($M_0$, $M_1$, $M_4$) multiplicándose, por eso es un producto: $\\prod M(0,1,4)$.' },
          { id: 'mc-12-4', q: '¿Qué representa cada minitérmino de una SOP en la tabla de verdad?', options: ['Una fila donde $f = 0$', 'Una fila donde $f = 1$', 'Una columna de entrada', 'Una variable de la función'], correctIndex: 1, explain: 'Cada minitérmino corresponde a un 1 en la tabla de verdad ($f = 1$).' }
        ]
      },
      flashcards: [
        { id: 'fc-12-1', front: '¿Qué es la forma canónica de una función lógica?', back: 'Aquella en la que cada uno de los términos tiene TODAS las variables de la función.' },
        { id: 'fc-12-2', front: '¿Cuáles son las dos formas canónicas?', back: 'Suma de productos (SOP) y producto de sumas (POS).' },
        { id: 'fc-12-3', front: '¿Qué es un minitérmino ($m$)?', back: 'Un término de producto lógico que contiene todas las variables. En minitérminos $A = 1$ y $\\overline{A} = 0$.' },
        { id: 'fc-12-4', front: '¿Qué es un maxitérmino ($M$)?', back: 'Un término de suma lógica que contiene todas las variables. En maxitérminos $A = 0$ y $\\overline{A} = 1$.' },
        { id: 'fc-12-5', front: 'En la tabla de verdad, ¿a qué corresponde cada minitérmino?', back: 'A un 1 en la tabla ($f = 1$).' },
        { id: 'fc-12-6', front: 'En la tabla de verdad, ¿a qué corresponde cada maxitérmino?', back: 'A un 0 en la tabla ($f = 0$).' },
        { id: 'fc-12-7', front: '¿Qué propiedades se usan para agregar variables faltantes en SOP?', back: 'Identidad ($\\cdot 1$), complemento ($\\cdot (B + \\overline{B})$) y distributiva.' },
        { id: 'fc-12-8', front: 'Escribí en notación compacta: $f = m_2 + m_3 + m_5 + m_6 + m_7$', back: '$f(A,B,C) = \\sum m(2, 3, 5, 6, 7)$' }
      ]
    },

    // ===================================================================
    // UNIDAD 3 — Mapas de Karnaugh
    // ===================================================================
    {
      id: '13', unit: '3', title: 'Mapas de Karnaugh: de la tabla al mapa',
      criollo: 'Che, el mapa de Karnaugh es el atajo para minimizar una función sin romperte la cabeza con el álgebra de Boole. Acomodás la tabla de verdad en una grilla de celdas, agrupás los unos (o los ceros) y listo: sale la expresión mínima casi de una.',
      blocks: [
        { type: 'p', text: 'Dada una función lógica, se la puede minimizar a una expresión irreducible. Esa expresión mínima reduce los <strong>costos lógicos</strong> del circuito: disminuye la cantidad de compuertas y la cantidad de entradas de cada compuerta.' },
        { type: 'p', text: 'Para hallar una expresión mínima equivalente se pueden usar los postulados y teoremas del álgebra de Boole. Pero esa no es la única manera: existen otros métodos, como el de los <strong>mapas de Karnaugh</strong>.' },
        { type: 'callout', tone: 'info', text: 'El mapa de Karnaugh es un diagrama de celdas que ubica las filas de la tabla de verdad de manera estratégica para, con sencillos pasos, obtener una expresión mínima equivalente a la de la función.' },
        { type: 'h3', text: 'El ejemplo que vamos a usar' },
        { type: 'p', text: 'Partimos de la función:' },
        { type: 'math', latex: 'f(A, B, C) = \\overline{(A + \\overline{B})} + A \\cdot (B + C) + B \\cdot (B + \\overline{C})', display: true },
        { type: 'p', text: 'Usando las propiedades del álgebra de Boole se pudo obtener esta expresión mínima:' },
        { type: 'math', latex: 'f(A, B, C) = A \\cdot C + B', display: true },
        { type: 'p', text: 'La idea ahora es llegar a lo mismo con el mapa de Karnaugh. Su tabla de verdad es:' },
        { type: 'table', caption: 'Tabla de verdad de f(A, B, C) — cada fila numerada es un minitérmino.', headers: ['n', 'A', 'B', 'C', 'f'], rows: [['0', '0', '0', '0', '0'], ['1', '0', '0', '1', '0'], ['2', '0', '1', '0', '1'], ['3', '0', '1', '1', '1'], ['4', '1', '0', '0', '0'], ['5', '1', '0', '1', '1'], ['6', '1', '1', '0', '1'], ['7', '1', '1', '1', '1']] },
        { type: 'h3', text: 'De la tabla al mapa' },
        { type: 'p', text: 'Para armar el mapa hay que tener en cuenta cuántas variables tiene la función. Acá son 3 (<strong>A</strong>, <strong>B</strong> y <strong>C</strong>), así que el mapa tiene $2^3 = 8$ celdas.' },
        { type: 'callout', tone: 'info', text: 'En general, para una función de $n$ variables el mapa tiene $2^n$ celdas.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u3-mapa-3var-vacio-p02.png', alt: 'Mapa de Karnaugh de 3 variables vacío, A en filas (0,1) y BC en columnas en orden 00, 01, 11, 10.', caption: 'Mapa de 3 variables vacío — ojo con el orden de las columnas (00, 01, 11, 10).' },
        { type: 'callout', tone: 'warning', text: 'Los valores en los bordes del mapa (izquierdo y superior) son <strong>fijos</strong>: no se deben modificar. Esa ubicación estratégica es justamente la que hace posible usar el método para minimizar la función.' },
        { type: 'p', text: 'Para entender cómo se ubican las filas de la tabla en el mapa, conviene pensarlo como <strong>coordenadas</strong>. Veamos cómo ubicar la fila 1 (001):' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u3-tabla-verdad-a-mapa-celda-001-p03.png', alt: 'Tabla de verdad de tres variables con flechas que mapean la fila 001 a su celda del mapa de Karnaugh.', caption: 'De la tabla al mapa: la fila 001 cae en la celda A=0, BC=01.' },
        { type: 'p', text: 'En este caso $A = 0$, $B = 0$ y $C = 1$. La coordenada de <strong>A</strong> se lee en el lado izquierdo: en la primera línea A vale 0. Las coordenadas de <strong>B</strong> y <strong>C</strong> se leen en la parte superior de las columnas: B es el primer valor y C el segundo.' },
        { type: 'p', text: 'Entonces, en la primera línea, el único caso donde B vale 0 y C vale 1 es la celda de la segunda columna. De igual manera se ubican el resto de las filas en las celdas del mapa.' },
        { type: 'p', text: 'Una vez ubicada la salida de la función en el mapa, se puede minimizar de dos formas: por <strong>minitérminos</strong> (por unos) o por <strong>maxitérminos</strong> (por ceros).' },
        { type: 'h3', text: 'Minimización por minitérminos (por unos)' },
        { type: 'p', text: 'Acá ubicamos en las celdas los minitérminos, es decir, las celdas cuya salida es \'1\' (se leen de la tabla).' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u3-mapa-3var-salidas-unos-p04.png', alt: 'Mapa de 3 variables con unos en las celdas correspondientes a los minitérminos donde la función vale 1.', caption: 'Mapa con las salidas en 1 ya ubicadas.' },
        { type: 'p', text: 'Para encontrar la expresión mínima se agrupan los unos en grupos de $2^n$ celdas. Los grupos deben ser lo más grandes posibles y de forma rectangular (o cuadrada).' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u3-agrupacion-minterminos-p04.png', alt: 'Mapa de 3 variables agrupando por unos: un grupo de cuatro celdas que da B y un grupo de dos celdas que da A·C.', caption: 'Agrupación por unos: un grupo da B y el otro da A·C.' },
        { type: 'callout', tone: 'info', text: 'Al trabajar con minitérminos: $A = 1$ y $\\overline{A} = 0$ (vale para todas las variables), y los términos son <strong>productos</strong>.' },
        { type: 'p', text: 'Se mira cada agrupación por separado y se evalúa qué variables <strong>no cambian</strong> de valor.' },
        { type: 'p', text: 'En la agrupación de $m_2$, $m_3$, $m_6$ y $m_7$: A vale 0 para $m_2$ y $m_3$, y 1 para $m_6$ y $m_7$, con lo cual cambia y se descarta. En la parte superior, B se mantiene en 1 en ambas columnas, así que B va en el término (sin negar, porque $B = 1$). C cambia (1 en una columna, 0 en la otra), se descarta. El primer término es $B$.' },
        { type: 'p', text: 'En la agrupación de $m_5$ y $m_7$: A se mantiene en 1, va sin negar. C también se mantiene en 1 en ambas columnas, va sin negar. B cambia (0 en una columna, 1 en la otra), se descarta. El segundo término es $A \\cdot C$.' },
        { type: 'p', text: 'Como son minitérminos, se <strong>suman</strong> los términos y queda la expresión mínima:' },
        { type: 'math', latex: 'f(A, B, C) = A \\cdot C + B', display: true },
        { type: 'callout', tone: 'criollo', text: 'Mirá vos: coincide clavadita con la que habíamos sacado a mano con el álgebra de Boole. Rico.' },
        { type: 'h3', text: 'Minimización por maxitérminos (por ceros)' },
        { type: 'p', text: 'Ahora ubicamos los maxitérminos, es decir, las celdas cuya salida es \'0\'.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u3-mapa-3var-salidas-ceros-p05.png', alt: 'Mapa de 3 variables con ceros en las celdas donde la función vale 0.', caption: 'Mapa con las salidas en 0 ubicadas.' },
        { type: 'p', text: 'Igual que antes, se agrupan los ceros y se indica la expresión algebraica de cada término.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u3-agrupacion-maxterminos-p05.png', alt: 'Mapa de 3 variables agrupando por ceros, con dos grupos que dan los términos suma B+C y A+B.', caption: 'Agrupación por ceros: los grupos dan B+C y A+B.' },
        { type: 'callout', tone: 'info', text: 'Al trabajar con maxitérminos se da vuelta el criterio: $A = 0$ y $\\overline{A} = 1$ (vale para todas las variables), y los términos son <strong>sumas</strong>.' },
        { type: 'p', text: 'Una vez que se tienen las expresiones de todos los términos, se <strong>multiplican</strong>, y se obtiene la expresión mínima:' },
        { type: 'math', latex: 'f(A, B, C) = (A + B) \\cdot (B + C)', display: true },
        { type: 'callout', tone: 'info', text: 'Las dos expresiones son <strong>equivalentes</strong>: aplicando la propiedad distributiva sobre $(A + B) \\cdot (B + C)$ se llega a $A \\cdot C + B$.' },
      ],
      quiz: {
        tf: [
          { id: 'tf-13-1', q: 'Para una función de n variables, el mapa de Karnaugh tiene 2^n celdas.', a: true, explain: 'La cantidad de celdas es 2 elevado a la cantidad de variables. Para 3 variables son 2^3 = 8 celdas.' },
          { id: 'tf-13-2', q: 'Los valores de los bordes izquierdo y superior del mapa se pueden cambiar libremente sin afectar el método.', a: false, explain: 'Son fijos: esa ubicación estratégica es la que hace posible minimizar la función con el método.' },
          { id: 'tf-13-3', q: 'Al minimizar por minitérminos (por unos), los términos resultantes son productos que luego se suman entre sí.', a: true, explain: 'Con minitérminos A=1 y complemento de A=0, los términos son productos y se suman para formar la expresión final.' },
        ],
        mc: [
          { id: 'mc-13-1', q: 'Al agrupar minitérminos, ¿qué variables forman parte del término?', options: ['Las que cambian de valor dentro de la agrupación', 'Las que NO cambian de valor dentro de la agrupación', 'Todas las variables de la función siempre', 'Solo la variable A'], correctIndex: 1, explain: 'Se descartan las variables que cambian; quedan en el término las que se mantienen constantes en toda la agrupación.' },
          { id: 'mc-13-2', q: 'En la minimización por maxitérminos (por ceros), ¿cómo se interpretan los valores y cómo se combinan los términos?', options: ['A=1 y complemento de A=0; los términos son productos que se suman', 'A=0 y complemento de A=1; los términos son sumas que se multiplican', 'A=0 y complemento de A=1; los términos son productos que se suman', 'A=1 y complemento de A=0; los términos son sumas que se multiplican'], correctIndex: 1, explain: 'Con maxitérminos A=0 y complemento de A=1; los términos son sumas y se multiplican entre sí.' },
          { id: 'mc-13-3', q: 'Para el ejemplo f(A,B,C), ¿qué relación hay entre A·C + B (por unos) y (A+B)·(B+C) (por ceros)?', options: ['Son funciones distintas', 'Son equivalentes: aplicando distributiva una se transforma en la otra', 'La de ceros tiene un error', 'Solo coinciden para A=0'], correctIndex: 1, explain: 'Ambas son expresiones mínimas equivalentes de la misma función; aplicando distributiva se pasa de una a la otra.' },
        ],
      },
      flashcards: [
        { id: 'fc-13-1', front: '¿Qué es un mapa de Karnaugh?', back: 'Un diagrama de celdas que ubica las filas de la tabla de verdad de forma estratégica para obtener, con pocos pasos, una expresión mínima equivalente a la de la función. Es una alternativa al álgebra de Boole.' },
        { id: 'fc-13-2', front: '¿Cuántas celdas tiene el mapa de una función de n variables?', back: '2^n celdas. Por ejemplo, 3 variables dan 2^3 = 8 celdas.' },
        { id: 'fc-13-3', front: 'Minimización por minitérminos (por unos)', back: 'Se ubican las celdas con salida 1, se agrupan en grupos de 2^n lo más grandes y rectangulares posibles. A=1, complemento de A=0. Los términos son productos y se suman. Ejemplo: A·C + B.' },
        { id: 'fc-13-4', front: 'Minimización por maxitérminos (por ceros)', back: 'Se ubican las celdas con salida 0 y se agrupan. A=0, complemento de A=1. Los términos son sumas y se multiplican. Ejemplo: (A+B)·(B+C), equivalente a la expresión por unos.' },
        { id: 'fc-13-5', front: '¿Cómo se ubica la fila 001 en el mapa de 3 variables?', back: 'Como coordenadas: A=0 (borde izquierdo), B=0 y C=1 (borde superior). Cae en la primera línea, en la columna donde B=0 y C=1, es decir la celda BC=01.' },
      ],
    },
    {
      id: '14', unit: '3', title: 'Generalización, adyacencia e implicantes',
      criollo: 'Acá generalizamos el mapa según cuántas variables tenga la función y vemos las reglas para agrupar. Lo clave: celdas adyacentes, grupos de potencia de 2, formas rectangulares y siempre la agrupación más grande posible. Con eso aparecen los implicantes, los primos y los esenciales.',
      blocks: [
        {
          type: 'h3',
          text: 'Generalización'
        },
        {
          type: 'p',
          text: 'Dependiendo de la cantidad de variables que se tengan, es cómo se debe plantear el mapa de Karnaugh. Existen mapas para 2, 3 y 4 variables. Si bien es posible usarlo con más variables, solo se utiliza el mapa de Karnaugh para funciones de <strong>hasta 4 variables</strong>.'
        },
        {
          type: 'ul',
          items: [
            '<strong>2 variables</strong> $f(A,B)$: mapa de 2 filas $\\times$ 2 columnas (2x2).',
            '<strong>3 variables</strong> $f(A,B,C)$: mapa de 2 $\\times$ 4.',
            '<strong>4 variables</strong> $f(A,B,C,D)$: mapa de 4 $\\times$ 4.'
          ]
        },
        {
          type: 'figure',
          src: 'images/diagrams/sistemas-digitales-i/u3-mapa-2var-vacio-p06.png',
          alt: 'Mapa de Karnaugh de 2 variables vacío con las celdas numeradas 0 a 3.',
          caption: 'Mapa de 2 variables (2x2).'
        },
        {
          type: 'figure',
          src: 'images/diagrams/sistemas-digitales-i/u3-mapa-3var-vacio-p06.png',
          alt: 'Mapa de Karnaugh de 3 variables vacío con las celdas numeradas 0 a 7.',
          caption: 'Mapa de 3 variables (2x4).'
        },
        {
          type: 'figure',
          src: 'images/diagrams/sistemas-digitales-i/u3-mapa-4var-vacio-p06.png',
          alt: 'Mapa de Karnaugh de 4 variables vacío, AB en filas y CD en columnas, celdas numeradas 0 a 15.',
          caption: 'Mapa de 4 variables (4x4) con la numeración de las 16 celdas.'
        },
        {
          type: 'p',
          text: 'La cantidad de celdas será igual a $2^m$, siendo $m$ la cantidad de variables de la función.'
        },
        {
          type: 'math',
          latex: '\\text{cantidad de celdas} = 2^m',
          display: true
        },
        {
          type: 'h3',
          text: 'Celdas adyacentes'
        },
        {
          type: 'p',
          text: 'Dos celdas son adyacentes cuando de una a otra <strong>solo cambia el valor de una de las variables</strong>. En el mapa de Karnaugh esto se cumple cuando las celdas comparten lado, lo cual se debe a la estratégica ubicación de los valores de las variables en los bordes izquierdos y superiores.'
        },
        {
          type: 'figure',
          src: 'images/diagrams/sistemas-digitales-i/u3-adyacencias-celdas-p07.png',
          alt: 'Mapa de 4 variables con flechas en los bordes que marcan la adyacencia por envolvente entre celdas de los extremos.',
          caption: 'Adyacencias: los bordes se tocan, las celdas de los extremos son vecinas.'
        },
        {
          type: 'p',
          text: 'Por ejemplo, la celda 2 comparte lado con la celda 3, así que son adyacentes: para ambas $A$ y $B$ valen cero, $C$ vale uno en las dos y solo cambia $D$ (cero en la celda 2, uno en la celda 3). Como solo 1 de las cuatro variables cambia de valor, son adyacentes.'
        },
        {
          type: 'p',
          text: 'También la celda 2 y la celda 10 son adyacentes, aunque a primera vista no parezca: comparten lado por el efecto envolvente. Las variables $C$ y $D$ tienen el mismo valor en ambas, $B$ es cero en las dos y solo cambia $A$ (cero en la celda 2, uno en la celda 10). En cambio, la celda 2 y la celda 7 no son adyacentes, porque no comparten lado.'
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Los bordes se tocan por envolvente: la primera y la última columna son vecinas, y la primera y la última fila también. Es importante conocer cuándo dos celdas son adyacentes, porque al agrupar se debe hacer con celdas adyacentes, ya que de esa manera se disminuye la cantidad de variables del término.'
        },
        {
          type: 'h3',
          text: 'Agrupaciones de 2^n'
        },
        {
          type: 'p',
          text: 'Para minimizar la función se hacen agrupaciones de unos o de ceros (no ambas a la vez). Estas deben ser de $2^n$ celdas. Por ejemplo, en un mapa de 16 celdas (4 $\\times$ 4) se podrán hacer agrupaciones de 16, 8, 4, 2 y 1 celda.'
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'No están permitidas las agrupaciones de cantidades que no sean potencia de 2, por ejemplo, de 3 celdas.'
        },
        {
          type: 'h3',
          text: 'Agrupaciones rectangulares'
        },
        {
          type: 'p',
          text: 'Las agrupaciones deben tener forma <strong>rectangular (o cuadrada)</strong>, dado que esto, junto con el concepto de celdas adyacentes, hace posible la minimización de variables en los términos. No se pueden hacer agrupaciones tipo T, L u otras.'
        },
        {
          type: 'ul',
          items: [
            'No se puede hacer una sola agrupación de las celdas 1, 2, 3 y 6 (forma no rectangular). En ese caso se hacen agrupaciones por separado: celdas 1 y 3, y celdas 2 y 6.',
            'Sí está permitido hacer una sola agrupación de las celdas 2, 3, 6 y 7 (forma rectangular).',
            'Sí están permitidas las agrupaciones envolventes entre la primera columna (CD: 00) y la última (CD: 10), y/o entre la primera fila (AB: 00) y la última (AB: 10). Por ejemplo, es válida la agrupación de las celdas 0, 2, 8 y 10.'
          ]
        },
        {
          type: 'h3',
          text: 'Agrupaciones máximas'
        },
        {
          type: 'p',
          text: 'Siempre que se pueda hacer una agrupación, se debe optar por la de <strong>mayor cantidad de celdas posibles</strong>. Por ejemplo, si hay unos en las celdas 2, 3, 6 y 7, se realiza una sola agrupación de las 4 celdas y no dos agrupaciones de 2 celdas. Esto se debe a que cuanto mayor es la agrupación, menor será la cantidad de variables que quedan en el término, llegando así a una expresión mínima (irreducible).'
        },
        {
          type: 'h3',
          text: 'Implicante, IP e IPE'
        },
        {
          type: 'ul',
          items: [
            '<strong>Implicante</strong>: cualquier agrupación de $2^n$ celdas (de unos o de ceros).',
            '<strong>Implicante primo (IP)</strong>: cualquier agrupación máxima de ceros o unos. En los mapas de Karnaugh se deben marcar solo los implicantes primos, porque así se llega a la expresión mínima (cuanto más grande la agrupación, menos variables en el término).',
            '<strong>Implicante primo esencial (IPE)</strong>: un implicante primo que tiene al menos alguna celda (con un uno o un cero) que no está contenida en ningún otro implicante primo. Los IPE siempre estarán en la expresión mínima de la función.'
          ]
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Cuando se busca una expresión mínima, es importante recordar que esta <strong>puede no ser única</strong>. Habrá casos donde haya más de una expresión mínima, con la misma cantidad de términos y de variables en cada término.'
        }
      ],
      quiz: {
        tf: [
          {
            id: 'tf-14-1',
            q: 'Dos celdas son adyacentes cuando de una a otra cambia el valor de una sola variable.',
            a: true,
            explain: 'Esa es la definición exacta: en el mapa se cumple cuando las celdas comparten lado, incluso por envolvente entre bordes.'
          },
          {
            id: 'tf-14-2',
            q: 'Se permiten agrupaciones de 3 celdas en el mapa de Karnaugh.',
            a: false,
            explain: 'Las agrupaciones deben ser de 2 elevado a n celdas (1, 2, 4, 8, 16). La de 3 celdas no está permitida.'
          },
          {
            id: 'tf-14-3',
            q: 'La agrupación de las celdas 0, 2, 8 y 10 es válida aunque use el efecto envolvente entre la primera y la última columna y la primera y la última fila.',
            a: true,
            explain: 'Se permiten agrupaciones rectangulares envolventes entre primera/última columna y primera/última fila, como esa de las celdas 0, 2, 8 y 10.'
          },
          {
            id: 'tf-14-4',
            q: 'La expresión mínima de una función siempre es única.',
            a: false,
            explain: 'Puede no ser única: puede haber más de una expresión mínima con la misma cantidad de términos y de variables en cada término.'
          }
        ],
        mc: [
          {
            id: 'mc-14-1',
            q: 'En un mapa de Karnaugh, ¿a qué es igual la cantidad de celdas?',
            options: ['2 por la cantidad de variables', '2 elevado a m, donde m es la cantidad de variables', 'm al cuadrado, donde m es la cantidad de variables', 'La cantidad de filas de la tabla de verdad menos 1'],
            correctIndex: 1,
            explain: 'La cantidad de celdas es 2 elevado a m, siendo m la cantidad de variables de la función.'
          },
          {
            id: 'mc-14-2',
            q: '¿Qué es un implicante primo esencial (IPE)?',
            options: ['Cualquier agrupación de 2 elevado a n celdas', 'Una agrupación de 3 celdas adyacentes', 'Un implicante primo con al menos una celda no contenida en ningún otro implicante primo', 'La agrupación más chica posible del mapa'],
            correctIndex: 2,
            explain: 'El IPE es un implicante primo (agrupación máxima) que tiene al menos una celda no contenida en ningún otro IP, y siempre está en la expresión mínima.'
          },
          {
            id: 'mc-14-3',
            q: 'Si hay unos en las celdas 2, 3, 6 y 7, ¿cómo conviene agruparlos?',
            options: ['En dos agrupaciones de 2 celdas cada una', 'En una sola agrupación de las 4 celdas', 'En cuatro agrupaciones de 1 celda', 'En una agrupación tipo L de las 4 celdas'],
            correctIndex: 1,
            explain: 'Hay que elegir siempre la agrupación máxima: una sola de 4 celdas deja menos variables en el término que dos de 2 celdas.'
          }
        ]
      },
      flashcards: [
        {
          id: 'fc-14-1',
          front: '¿Hasta cuántas variables se usa el mapa de Karnaugh y qué tamaños hay?',
          back: 'Se usa hasta 4 variables. Tamaños: 2 variables (2x2), 3 variables (2x4) y 4 variables (4x4).'
        },
        {
          id: 'fc-14-2',
          front: '¿Cuándo dos celdas son adyacentes?',
          back: 'Cuando de una a otra cambia el valor de una sola variable. En el mapa, cuando comparten lado, incluyendo los bordes que se tocan por envolvente (primera y última columna, primera y última fila).'
        },
        {
          id: 'fc-14-3',
          front: '¿De qué tamaño pueden ser las agrupaciones y qué forma deben tener?',
          back: 'De 2 elevado a n celdas (1, 2, 4, 8, 16; nunca de 3). Deben ser rectangulares o cuadradas, sin formas T ni L, y siempre la mayor cantidad de celdas posible.'
        },
        {
          id: 'fc-14-4',
          front: 'Implicante vs. implicante primo (IP) vs. implicante primo esencial (IPE)',
          back: 'Implicante: cualquier agrupación de 2 elevado a n celdas. IP: una agrupación máxima. IPE: un IP con al menos una celda no contenida en ningún otro IP; los IPE siempre están en la expresión mínima.'
        }
      ]
    },
    {
      id: '15', unit: '3', title: 'Ejemplo 4×4 y funciones no totalmente definidas',
      criollo: 'Acá metemos un mapa de 4 variables y armamos la tabla de implicantes primos para sacar los esenciales sin marear. Y arrancamos con las funciones no totalmente definidas, esas donde algunas salidas te las podés inventar (las famosas X o don\'t care) para agrupar más grande y reducir más.',
      blocks: [
        { type: 'h3', text: 'Minimización de una función por mapas de Karnaugh (4×4)' },
        { type: 'p', text: 'Queremos encontrar una expresión mínima de la siguiente función de 4 variables expresada como suma de minitérminos:' },
        { type: 'math', latex: 'f(A, B, C, D) = \\sum m(3, 5, 7, 10, 11, 13)', display: true },
        { type: 'p', text: 'El procedimiento tiene tres pasos: <strong>1)</strong> ubicar los minitérminos en el mapa, <strong>2)</strong> marcar todos los implicantes primos, y <strong>3)</strong> armar una tabla para identificar cuáles son esenciales.' },
        { type: 'h3', text: 'Paso 1: ubicar los minitérminos' },
        { type: 'p', text: 'Primero ubicamos en el mapa de 16 celdas los unos correspondientes a los minitérminos 3, 5, 7, 10, 11 y 13.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u3-mapa-4x4-ejemplo-minterminos-p09.png', alt: 'Mapa de Karnaugh de 4 variables con unos en las celdas 3, 5, 7, 10, 11 y 13, sin agrupar.', caption: 'Mapa 4×4 del ejemplo con los minitérminos 3, 5, 7, 10, 11 y 13 ubicados.' },
        { type: 'h3', text: 'Paso 2: marcar todos los implicantes primos' },
        { type: 'p', text: 'Marcamos todas las agrupaciones máximas posibles. En este caso quedan cinco implicantes primos, cada uno un par de celdas (agrupación de 2).' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u3-mapa-4x4-implicantes-primos-p10.png', alt: 'Mapa de 4 variables con cinco agrupaciones de dos celdas marcadas con colores, cada una un implicante primo.', caption: 'Los cinco implicantes primos marcados, cada uno un par de celdas.' },
        { type: 'h3', text: 'Paso 3: tabla de implicantes primos contra minitérminos' },
        { type: 'p', text: 'Para identificar cuáles implicantes son esenciales y cuál es una expresión reducida, se arma una tabla que cruza cada implicante primo contra los minitérminos, marcando con un tick las celdas que cada implicante cubre.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u3-tabla-implicantes-primos-p10.png', alt: 'Tabla de implicantes primos contra los minitérminos 3, 5, 7, 10, 11, 13 con tildes en las celdas cubiertas.', caption: 'Tabla de implicantes primos contra minitérminos para ver qué cubre cada uno.' },
        { type: 'p', text: 'Las <strong>columnas que tienen un solo tick</strong> (es decir, el minitérmino está agrupado en un único implicante primo) indican un <strong>implicante primo esencial (IPE)</strong>.' },
        { type: 'ul', items: [
          'El $m_{13}$ solo está contenido en el implicante $B\\overline{C}D$, así que ese implicante es esencial.',
          'El $m_{10}$ solo está contenido en el implicante $A\\overline{B}C$, así que ese implicante también es esencial.'
        ] },
        { type: 'p', text: 'Estos dos implicantes primos esenciales son parte segura de la expresión mínima.' },
        { type: 'p', text: 'Si eliminamos las filas de los IPE y las columnas de los minitérminos que ya cubrieron, quedan sin cubrir el $m_3$ y el $m_7$. De ahí se deduce que el implicante $\\overline{A}CD$ contiene esos dos minitérminos que faltan, con lo cual, sumándolo a los IPE, se obtiene la expresión mínima.' },
        { type: 'callout', tone: 'info', text: 'Usar los otros dos implicantes primos también cubriría todos los minitérminos, pero no sería óptimo: usaría dos términos producto (dos ANDs) en lugar de uno. Por eso se elige $\\overline{A}CD$.' },
        { type: 'p', text: 'La expresión mínima de la función queda:' },
        { type: 'math', latex: 'f(A, B, C, D) = B\\overline{C}D + A\\overline{B}C + \\overline{A}CD', display: true },
        { type: 'callout', tone: 'info', text: 'El método de la tabla del paso 3 es el algoritmo de Quine-McCluskey. Es útil cuando se tienen funciones de gran cantidad de variables y se las quiere reducir.' },
        { type: 'h3', text: 'Funciones no totalmente definidas' },
        { type: 'p', text: 'Se quiere implementar un circuito que reciba 10 números, del 0 (0000) al 9 (1001), de modo que cuando lleguen los números 1, 5, 7 o 9 la salida sea \'1\'.' },
        { type: 'p', text: 'El detalle es que hay 6 números (del 10 al 15) que se espera que nunca lleguen, por lo que sus salidas <strong>no tienen valor asignado</strong>. Esas salidas se marcan con una $X$, que indica que no interesa qué valor tomarían. En inglés a estas condiciones se las llama <strong>don\'t care</strong>.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u3-tabla-verdad-dontcare-p12.png', alt: 'Tabla de verdad de cuatro variables donde las filas 10 a 15 tienen X como valor no asignado.', caption: 'Función no totalmente definida: las filas 10 a 15 no tienen valor asignado (X).' },
        { type: 'p', text: 'La función que corresponde a esa tabla se escribe sumando los minitérminos definidos y agregando aparte los términos don\'t care con la letra $d$:' },
        { type: 'math', latex: 'f(A, B, C, D) = \\sum m(1, 5, 7, 9) + d(10, 11, 12, 13, 14, 15)', display: true },
        { type: 'p', text: 'Al armar el mapa de Karnaugh se ubican tanto los <strong>1s</strong> como las <strong>X</strong>. Las X podrán tomar el valor \'1\' o \'0\' según sea más conveniente para agrupar.' },
        { type: 'callout', tone: 'warning', text: 'No se deben realizar agrupaciones de X que no contengan ningún 1. Las X solo sirven para agrandar agrupaciones que ya contienen unos.' },
        { type: 'p', text: 'Para obtener una expresión más reducida, las X de las celdas 11, 13 y 15 se consideran como \'1\'. Así las agrupaciones se hacen más grandes.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u3-funcion-no-definida-dontcare-agrupaciones-p12.png', alt: 'Mapa de 4 variables con unos y varias X agrupados en bloques que aprovechan las X.', caption: 'Mapa con las X aprovechadas en las agrupaciones.' },
        { type: 'p', text: 'Con los implicantes primos esenciales $\\overline{C}D$ y $BD$ quedan todos los 1s agrupados, por lo que la expresión mínima de la función que cumple con el circuito pedido es:' },
        { type: 'math', latex: 'f(A, B, C, D) = \\overline{C}D + BD', display: true }
      ],
      quiz: {
        tf: [
          { id: 'tf-15-1', q: 'En la tabla del paso 3, una columna con un solo tick indica que ese minitérmino está cubierto por un único implicante primo, que por lo tanto es esencial.', a: true, explain: 'Si el minitérmino está agrupado en un solo implicante primo, ese implicante es la única forma de cubrirlo, así que es esencial.' },
          { id: 'tf-15-2', q: 'En una función no totalmente definida se pueden agrupar las X libremente, incluso agrupaciones de X que no contengan ningún 1.', a: false, explain: 'No se deben hacer agrupaciones de X que no contengan 1s. Las X solo sirven para agrandar agrupaciones que ya tienen unos.' },
          { id: 'tf-15-3', q: 'La tabla de implicantes primos contra minitérminos del paso 3 corresponde al algoritmo de Quine-McCluskey.', a: true, explain: 'Ese método de la tabla es el algoritmo de Quine-McCluskey, útil para funciones de muchas variables.' },
          { id: 'tf-15-4', q: 'En el ejemplo de la función no totalmente definida, las X de las celdas 11, 13 y 15 se tomaron como 0 para reducir la expresión.', a: false, explain: 'Se tomaron como 1, justamente para agrandar las agrupaciones y reducir la expresión.' }
        ],
        mc: [
          { id: 'mc-15-1', q: 'En el ejemplo 4×4 con f = suma m(3,5,7,10,11,13), ¿cuál es la expresión mínima obtenida?', options: ['B(comp C)D + A(comp B)C + (comp A)CD', 'A·C + B', '(A+B)·(B+C)', '(comp C)D + BD'], correctIndex: 0, explain: 'Los dos IPE son B(comp C)D y A(comp B)C, y el implicante (comp A)CD cubre los m3 y m7 que faltaban.' },
          { id: 'mc-15-2', q: 'En el ejemplo 4×4, ¿por qué el implicante (comp A)CD es preferible a usar los otros dos implicantes primos para cubrir m3 y m7?', options: ['Porque cubre más minitérminos', 'Porque usa un solo término producto en vez de dos ANDs', 'Porque es esencial', 'Porque agrupa las X disponibles'], correctIndex: 1, explain: 'Usar los otros dos IP cubriría todo, pero con dos ANDs en lugar de uno; por eso no es óptimo.' },
          { id: 'mc-15-3', q: '¿Qué representa una X (don\'t care) en una función no totalmente definida?', options: ['Una salida que siempre vale 1', 'Una salida que siempre vale 0', 'Una salida sin valor asignado, que puede tomar 1 o 0 según convenga', 'Un minitérmino esencial'], correctIndex: 2, explain: 'La X marca una salida cuyo valor no interesa; puede tomar 1 o 0 según sea más conveniente para agrupar.' },
          { id: 'mc-15-4', q: 'Para f = suma m(1,5,7,9) + d(10,11,12,13,14,15), tomando las X de las celdas 11, 13 y 15 como 1, ¿cuál es la expresión mínima?', options: ['B(comp C)D + A(comp B)C', '(comp C)D + BD', 'A·C + B', 'BD + (comp A)CD'], correctIndex: 1, explain: 'Con los IPE (comp C)D y BD quedan todos los 1s agrupados, dando f = (comp C)D + BD.' }
        ]
      },
      flashcards: [
        { id: 'fc-15-1', front: '¿Cómo se detecta un implicante primo esencial en la tabla del paso 3?', back: 'Buscando columnas con un solo tick: si un minitérmino está cubierto por un único implicante primo, ese implicante es esencial y va sí o sí en la expresión mínima.' },
        { id: 'fc-15-2', front: '¿Qué es el algoritmo de Quine-McCluskey?', back: 'El método de la tabla de implicantes primos contra minitérminos (paso 3). Es útil para reducir funciones con gran cantidad de variables.' },
        { id: 'fc-15-3', front: '¿Qué es un don\'t care (X) y cómo se usa al agrupar?', back: 'Es una salida sin valor asignado (no interesa su valor). Puede tomar 1 o 0 según convenga para agrandar agrupaciones, pero nunca se agrupan X que no contengan algún 1.' }
      ]
    },

  ],
  pdfs: [
    { key: 'u1-numeracion', label: 'U1 · Sistemas de numeración y aritmética binaria', path: 'pdfs/sistemas-digitales-i/1-sistemas-numeracion.pdf' },
    { key: 'u2-compuertas', label: 'U2 · Compuertas lógicas y álgebra de Boole', path: 'pdfs/sistemas-digitales-i/2c-compuertas-logicas.pdf' },
    { key: 'u2-funciones', label: 'U2 · Funciones lógicas con álgebra de Boole', path: 'pdfs/sistemas-digitales-i/2b-funciones-logicas.pdf' },
    { key: 'u2-tabla-boole', label: 'U2 · Tabla del álgebra de Boole', path: 'pdfs/sistemas-digitales-i/2a-tabla-algebra-boole.pdf' },
    { key: 'u3-karnaugh', label: 'U3 · Mapas de Karnaugh', path: 'pdfs/sistemas-digitales-i/3-mapas-karnaugh.pdf' },
  ],
};
