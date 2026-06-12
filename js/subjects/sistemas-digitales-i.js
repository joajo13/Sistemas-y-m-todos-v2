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

    // ===================================================================
    // UNIDAD 4 — Hardware digital
    // ===================================================================
    {
      id: '16',
      unit: '4',
      title: 'Señales analógicas, digitales y niveles de tensión',
      criollo: 'La diferencia de fondo: una señal analógica puede tomar infinitos valores (es continua), una digital toma una cantidad finita (es discreta). Las digitales binarias son las que solo valen 0 o 1. Y esos 0 y 1 no son un voltaje exacto sino un rango de tensión.',
      blocks: [
        { type: 'p', text: 'Los circuitos electrónicos pueden dividirse en <strong>analógicos</strong> y <strong>digitales</strong>, según el tipo de señales o magnitudes que manipulen.' },
        { type: 'h3', text: 'Señales analógicas y digitales', criollo: 'Continua vs discreta: la analógica es una curva suave, la digital son escalones.' },
        { type: 'ul', items: [
          '<strong>Señales analógicas</strong>: pueden tomar infinitos valores, por lo que su gráfica es <strong>continua</strong>.',
          '<strong>Señales digitales</strong>: pueden tomar una cantidad finita de valores, por lo que su gráfica es <strong>discontinua</strong>.',
        ] },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u4-senal-analogica-p01.jpeg', alt: 'Gráfico de una señal analógica continua, amplitud en voltios sobre el eje vertical y tiempo en el horizontal, con forma de onda ondulada e irregular.', caption: 'Señal analógica: varía de forma continua en el tiempo.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u4-senal-digital-p01.png', alt: 'Gráfico de una señal digital escalonada, con pulsos rectangulares de dos niveles.', caption: 'Señal digital: toma solo valores discretos, alto o bajo.' },
        { type: 'h3', text: 'Señales digitales binarias', criollo: 'Las que más nos importan: solo dos estados, 0 y 1. Como el interruptor que prende o apaga la lámpara.' },
        { type: 'p', text: 'Los sistemas o dispositivos digitales (una computadora, un celular, una calculadora) son aquellos en los que la información se representa mediante cantidades físicas que toman únicamente una cantidad finita de valores, es decir, señales discretas (señales digitales).' },
        { type: 'p', text: 'En particular, se conoce como <strong>señales digitales binarias</strong> a las que pueden tomar solamente dos valores o estados ($0$ y $1$). Un ejemplo son las señales eléctricas, como la tensión o la corriente.' },
        { type: 'p', text: 'En un circuito con un interruptor (o llave) conectado a una fuente de tensión y a una lámpara: si el interruptor está abierto se indica con $0$, y si está cerrado con $1$. Del mismo modo, si la lámpara está apagada toma el valor $0$, y si está encendida toma el valor $1$.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u4-tension-tiempo-niveles-p03.png', alt: 'Diagrama de tensión contra tiempo con un pulso que pasa del nivel bajo L al nivel alto H y vuelve a bajo, con los intervalos 1 y 2 marcados.', caption: 'Tensión en función del tiempo: el tiempo 1 es nivel bajo (VL) y el tiempo 2 es nivel alto (VH).' },
        { type: 'h3', text: 'Niveles lógicos de tensión', criollo: 'Clave: el 0 y el 1 no son un voltaje puntual, son rangos. Entre medio queda una zona indeterminada donde el nivel no está definido.' },
        { type: 'p', text: 'En la <strong>lógica positiva</strong>, al nivel bajo de tensión $V_L$ (Low) se lo representa con el $0$ (cero lógico), y al nivel alto $V_H$ (High) con el $1$ (uno lógico).' },
        { type: 'p', text: 'Estos estados representan un <strong>rango de valores</strong> de tensión contenidos en ellos. Por ejemplo, el $0$ (nivel bajo) puede representar tensiones desde $0\\,V$ hasta $1{,}5\\,V$, mientras que el $1$ (nivel alto) puede representar tensiones desde $3{,}3\\,V$ hasta $5\\,V$.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u4-niveles-logicos-tension-p04.png', alt: 'Gráfico de niveles lógicos por rangos de tensión: nivel alto 1 entre 3,3 V y 5 V, zona indeterminada entre 1,5 V y 3,3 V, y nivel bajo 0 entre 0 V y 1,5 V.', caption: 'Rangos de tensión para el 0, el 1 y la zona indeterminada entre ambos.' },
        { type: 'callout', tone: 'info', text: 'El <strong>rango indeterminado</strong> de tensión corresponde a la zona de transición: ahí no está definido el nivel lógico. El nivel lógico de tensión es una de las características de los circuitos integrados.' },
      ],
      quiz: {
        tf: [
          { id: 'tf-16-1', q: 'Una señal analógica puede tomar infinitos valores y su gráfica es continua.', a: true, explain: 'Correcto. Esa es justamente la diferencia con la digital, que toma una cantidad finita de valores (gráfica discontinua).' },
          { id: 'tf-16-2', q: 'Las señales digitales binarias pueden tomar tres valores distintos.', a: false, explain: 'Falso. Las binarias toman solamente dos valores o estados: 0 y 1.' },
          { id: 'tf-16-3', q: 'En lógica positiva, el nivel alto de tensión (High) se representa con el 1.', a: true, explain: 'Correcto. Low (bajo) es 0 y High (alto) es 1 en lógica positiva.' },
          { id: 'tf-16-4', q: 'El 0 y el 1 lógicos corresponden a un único valor exacto de tensión.', a: false, explain: 'Falso. Cada nivel lógico representa un rango de tensiones (ej: el 0 de 0 a 1,5 V, el 1 de 3,3 a 5 V), no un valor puntual.' },
        ],
        mc: [
          { id: 'mc-16-1', q: '¿Qué caracteriza a una señal digital?', options: ['Toma infinitos valores', 'Su gráfica es siempre una recta', 'Toma una cantidad finita de valores (gráfica discontinua)', 'No puede representarse en el tiempo'], correctIndex: 2, explain: 'La señal digital toma una cantidad finita de valores, por eso su gráfica es discontinua (escalonada).' },
          { id: 'mc-16-2', q: 'En el ejemplo del apunte, ¿qué rango de tensión puede representar el nivel bajo (0)?', options: ['De 3,3 V a 5 V', 'De 0 V a 1,5 V', 'De 1,5 V a 3,3 V', 'Exactamente 0 V'], correctIndex: 1, explain: 'Según el apunte, el 0 (nivel bajo) puede representar tensiones desde 0 V hasta 1,5 V. El de 3,3 a 5 V es el nivel alto.' },
          { id: 'mc-16-3', q: '¿Qué es la zona de transición o rango indeterminado?', options: ['El rango donde el nivel lógico no está definido', 'El nivel alto de tensión', 'El nivel bajo de tensión', 'El valor exacto del 1 lógico'], correctIndex: 0, explain: 'El rango indeterminado (entre el nivel bajo y el alto) es la zona de transición, donde el nivel lógico no está definido.' },
        ],
      },
      flashcards: [
        { id: 'fc-16-1', front: 'Señal analógica', back: 'Señal que puede tomar infinitos valores; su gráfica es continua.' },
        { id: 'fc-16-2', front: 'Señal digital', back: 'Señal que toma una cantidad finita de valores; su gráfica es discontinua.' },
        { id: 'fc-16-3', front: 'Señal digital binaria', back: 'Señal que toma solamente dos valores o estados: 0 y 1.' },
        { id: 'fc-16-4', front: 'Lógica positiva', back: 'Convención donde el nivel bajo de tensión (Low, VL) es 0 y el nivel alto (High, VH) es 1.' },
        { id: 'fc-16-5', front: '¿El 0 y el 1 son un voltaje exacto?', back: 'No: cada nivel lógico representa un rango de tensiones (ej: 0 de 0 a 1,5 V, 1 de 3,3 a 5 V).' },
        { id: 'fc-16-6', front: 'Zona de transición / rango indeterminado', back: 'El rango de tensión entre el nivel bajo y el alto donde el nivel lógico no está definido.' },
      ],
    },
    {
      id: '17',
      unit: '4',
      title: 'Circuitos integrados, propagación y familias lógicas',
      criollo: 'Las compuertas no andan sueltas: vienen empaquetadas dentro de un chip, el circuito integrado. Según cuántas compuertas mete el chip hay distintas escalas (de SSI a ULSI). Y ojo: las señales no cambian de 0 a 1 al instante, siempre hay un retardo.',
      blocks: [
        { type: 'h3', text: 'Circuito integrado (CI)', criollo: 'Un chip que adentro tiene compuertas y demás elementos del sistema digital.' },
        { type: 'p', text: 'Las compuertas lógicas son los elementos básicos de los sistemas digitales. Estas, al igual que el resto de los elementos que conforman los sistemas digitales, se encuentran disponibles dentro de un chip conocido como <strong>circuito integrado</strong> (CI).' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u4-circuito-integrado-7400-p04.jpeg', alt: 'Diagrama de pines del circuito integrado 7400 con sus cuatro compuertas NAND, alimentación VCC y GND, junto a una fotografía del chip real rotulado SN7400N.', caption: 'El circuito integrado 7400: cuatro compuertas NAND empaquetadas en un chip.' },
        { type: 'h3', text: 'Escala de integración', criollo: 'Cuantas más compuertas mete el chip, mayor la escala. Va de SSI (hasta 10) a ULSI (más de 100.000).' },
        { type: 'p', text: 'Los circuitos integrados se clasifican según su complejidad, que depende de la cantidad de compuertas que integra un mismo chip.' },
        { type: 'table', caption: 'Escala de integración de circuitos lógicos', headers: ['Nivel de integración', 'Cantidad de compuertas', 'Función'], rows: [
          ['SSI (Small) — pequeña escala', 'Hasta 10', 'Compuertas lógicas'],
          ['MSI (Medium) — mediana escala', '10 a 100', 'Sumadores, multiplexores'],
          ['LSI (Large) — grande escala', '100 a 10.000', 'Microcontroladores, memorias'],
          ['VLSI (Very Large) — muy grande escala', '10.000 a 100.000', 'Microprocesadores, memorias'],
          ['ULSI (Ultra Large) — ultra grande escala', 'Más de 100.000', 'Microcomputadores, memorias'],
        ] },
        { type: 'h3', text: 'Tiempos de propagación', criollo: 'La representación de señales cuadradas perfectas es ideal: en la realidad el cambio de nivel no es instantáneo, y la salida tarda un toque respecto de la entrada.' },
        { type: 'p', text: 'Otra característica de los circuitos integrados es el <strong>tiempo de propagación</strong>. Solemos representar las señales de tensión con cambios instantáneos de $0$ a $1$, pero esa es una representación <strong>ideal</strong>: el cambio de nivel lógico no es instantáneo, y tampoco lo es la salida respecto de las entradas al pasar por un circuito.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u4-retardo-propagacion-not-p06.png', alt: 'Gráfico de las señales de entrada y salida de una compuerta NOT en el tiempo, marcando el desfasaje entre ambas que representa el retardo de propagación.', caption: 'Retardo de propagación en una NOT: la salida tarda unos momentos en cambiar respecto de la entrada.' },
        { type: 'p', text: 'En el caso de una compuerta NOT que recibe un $0$ y luego un $1$: a la salida tendrá un $1$ primero y luego cambiará a $0$. Pero la salida tarda unos momentos en cambiar respecto de la señal de entrada. Ese retardo que experimentan las señales al pasar por una compuerta es el <strong>retardo de propagación</strong>.' },
        { type: 'callout', tone: 'info', text: 'Todas las características de los circuitos integrados (niveles lógicos, tiempos de propagación, etc.) las brindan los fabricantes en lo que se conoce como <strong>hoja de datos</strong> (datasheet).' },
        { type: 'h3', text: 'Familias lógicas', criollo: 'Componentes fabricados con la misma tecnología (a base de transistores), por eso son compatibles entre sí. Las dos clásicas: TTL y CMOS.' },
        { type: 'p', text: 'Las <strong>familias lógicas</strong> son componentes lógicos que comparten características en común porque están fabricados con la misma tecnología (basada en transistores), lo que los hace compatibles entre sí.' },
        { type: 'ul', items: [
          '<strong>TTL</strong>: basadas en transistores bipolares.',
          '<strong>CMOS</strong>: basadas en transistores unipolares (efecto de campo).',
        ] },
      ],
      quiz: {
        tf: [
          { id: 'tf-17-1', q: 'Un circuito integrado es un chip que contiene compuertas y otros elementos del sistema digital.', a: true, explain: 'Correcto. Las compuertas y demás elementos están disponibles dentro de un chip llamado circuito integrado.' },
          { id: 'tf-17-2', q: 'La escala SSI (Small) integra más de 100.000 compuertas en un chip.', a: false, explain: 'Falso. SSI integra hasta 10 compuertas. La de más de 100.000 es la ULSI (Ultra Large).' },
          { id: 'tf-17-3', q: 'El cambio de nivel lógico de 0 a 1 en un circuito real es instantáneo.', a: false, explain: 'Falso. Esa es una representación ideal: en la realidad hay un retardo (tiempo de propagación), el cambio no es instantáneo.' },
          { id: 'tf-17-4', q: 'TTL y CMOS son dos familias lógicas fabricadas con tecnología basada en transistores.', a: true, explain: 'Correcto. TTL usa transistores bipolares y CMOS transistores unipolares (efecto de campo).' },
        ],
        mc: [
          { id: 'mc-17-1', q: '¿Qué determina la escala de integración de un circuito integrado?', options: ['El tamaño físico del chip', 'La cantidad de compuertas que integra', 'El color del encapsulado', 'La marca del fabricante'], correctIndex: 1, explain: 'La escala (SSI, MSI, LSI, VLSI, ULSI) depende de la cantidad de compuertas que integra un mismo chip.' },
          { id: 'mc-17-2', q: '¿Qué es el retardo de propagación?', options: ['El tiempo que tarda en encenderse el chip', 'El retardo que experimentan las señales al pasar por una compuerta', 'La diferencia entre el nivel alto y el bajo', 'El consumo de energía del circuito'], correctIndex: 1, explain: 'El retardo de propagación es el tiempo que tardan las señales en cambiar a la salida respecto de la entrada al pasar por una compuerta.' },
          { id: 'mc-17-3', q: '¿Dónde brindan los fabricantes las características de un circuito integrado?', options: ['En la hoja de datos (datasheet)', 'En el sistema operativo', 'En la zona de transición', 'En el bit de signo'], correctIndex: 0, explain: 'Las características (niveles lógicos, tiempos de propagación, etc.) las brindan los fabricantes en la hoja de datos o datasheet.' },
          { id: 'mc-17-4', q: '¿En qué se basan las familias lógicas TTL y CMOS respectivamente?', options: ['Ambas en transistores bipolares', 'TTL en bipolares y CMOS en unipolares (efecto de campo)', 'TTL en unipolares y CMOS en bipolares', 'Ninguna usa transistores'], correctIndex: 1, explain: 'TTL se basa en transistores bipolares y CMOS en transistores unipolares (de efecto de campo).' },
        ],
      },
      flashcards: [
        { id: 'fc-17-1', front: 'Circuito integrado (CI)', back: 'Chip que contiene las compuertas lógicas y demás elementos de un sistema digital.' },
        { id: 'fc-17-2', front: 'Escala de integración', back: 'Clasificación de los CI según la cantidad de compuertas que integran: SSI, MSI, LSI, VLSI y ULSI.' },
        { id: 'fc-17-3', front: 'SSI vs ULSI', back: 'SSI (Small) integra hasta 10 compuertas; ULSI (Ultra Large) integra más de 100.000.' },
        { id: 'fc-17-4', front: 'Tiempo / retardo de propagación', back: 'El retardo que experimentan las señales al pasar por una compuerta: el cambio de nivel no es instantáneo.' },
        { id: 'fc-17-5', front: 'Hoja de datos (datasheet)', back: 'Documento del fabricante con todas las características del circuito integrado.' },
        { id: 'fc-17-6', front: 'Familias lógicas', back: 'Componentes fabricados con la misma tecnología (a base de transistores), compatibles entre sí. Ej: TTL y CMOS.' },
        { id: 'fc-17-7', front: 'TTL vs CMOS', back: 'TTL se basa en transistores bipolares; CMOS en transistores unipolares (efecto de campo).' },
      ],
    },

    // ===================================================================
    // UNIDAD 5 — Circuitos combinatorios
    // ===================================================================
    {
      id: '18', unit: '5', title: 'Decodificadores y codificadores',
      criollo: 'Acá entran los circuitos combinacionales, esos donde la salida depende solo de lo que tenés en la entrada en ese momento. El deco agarra un número binario y prende una sola salida; el codificador hace justo lo contrario, compacta. Si entendés que adentro del deco hay puras AND, después armás cualquier función con una OR y listo.',
      blocks: [
        { type: 'h3', text: 'Códigos' },
        { type: 'p', text: 'Los <strong>códigos</strong> son representaciones numéricas utilizadas, en los sistemas digitales, para transmitir información. Mediante estos se pueden representar distintos tipos de datos digitales, como números, caracteres, instrucciones, etc. La representación de los diferentes tipos de datos se podrá hacer mediante un conjunto de $n$ cantidad de bits, que se corresponderá con un dato específico.' },
        { type: 'p', text: 'Algunos códigos muy comunes son el <strong>BCD</strong> (Binary Coded Decimal), <strong>Gray</strong>, <strong>AIKEN</strong>, <strong>ASCII</strong>, etc.' },
        { type: 'p', text: 'El código <strong>BCD</strong> (Binary Coded Decimal), es decir, el decimal codificado en binario, codifica los números del 0 (0000) al 9 (1001) en binario, sin signo, con 4 bits.' },
        { type: 'table', caption: 'Codificación BCD de los dígitos decimales 0 a 9.', headers: ['Decimal', 'BCD'], rows: [['0', '0000'], ['1', '0001'], ['2', '0010'], ['3', '0011'], ['4', '0100'], ['5', '0101'], ['6', '0110'], ['7', '0111'], ['8', '1000'], ['9', '1001']] },
        { type: 'p', text: 'Si se quiere representar el número $15_d$ en BCD, solo bastará con ver el código correspondiente al 1 y el correspondiente al 5 en esta codificación y ponerlos uno al lado del otro. Entonces, el número 15 en BCD será <strong>0001 0101</strong>.' },
        { type: 'h3', text: 'Circuitos combinacionales' },
        { type: 'p', text: 'Los <strong>circuitos combinacionales</strong> (o combinatorios) son aquellos en los que las salidas dependen únicamente del estado actual de las entradas.' },
        { type: 'h3', text: 'Decodificador (decoder)' },
        { type: 'p', text: 'El <strong>decodificador</strong> es un circuito combinacional que se utiliza para convertir una forma de representación codificada en binario en una forma más comprensible.' },
        { type: 'p', text: 'Un código de $n$ bits puede representar hasta $2^n$ cantidad de información codificada. Por lo que un decodificador convierte información binaria de $n$ cantidad de líneas de entrada a un máximo de $2^n$ cantidad de salidas. Entonces, en general, se cumple:' },
        { type: 'math', latex: 'S \\leq 2^{E}', display: true },
        { type: 'p', text: 'siendo $E$ la cantidad de entradas y $S$ la de salidas.' },
        { type: 'callout', tone: 'info', text: 'Según el código recibido en las entradas, será la salida que se activará. <strong>Solo una salida puede estar activa a la vez.</strong>' },
        { type: 'h3', text: 'Decodificador binario 2×4' },
        { type: 'p', text: 'Este es un decodificador binario de 2 entradas (en las que recibe la información codificada) y 4 salidas. Además, tiene la <strong>habilitación</strong> que, como su nombre lo indica, permite que el integrado funcione o no según la habilitación de este.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-decodificador-2x4-simbolo-p02.png', alt: 'Símbolo lógico de un decodificador con dos entradas E1 y E0, habilitación H y cuatro salidas S3 a S0.', caption: 'Símbolo del decodificador 2×4 con habilitación.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-decodificador-2x4-diagrama-logico-p03.png', alt: 'Diagrama lógico interno de un decodificador 2×4 con cuatro compuertas AND, inversores en E1 y E0 y línea de habilitación H.', caption: 'Diagrama lógico interno del decodificador 2×4.' },
        { type: 'p', text: 'A partir del diagrama lógico se podrá ver la correspondencia de la siguiente tabla con el funcionamiento de este decodificador.' },
        { type: 'table', caption: 'Tabla de verdad del decodificador 2×4 (X = indistinto).', headers: ['H', 'E1', 'E0', 'S0', 'S1', 'S2', 'S3'], rows: [['0', 'X', 'X', '0', '0', '0', '0'], ['1', '0', '0', '1', '0', '0', '0'], ['1', '0', '1', '0', '1', '0', '0'], ['1', '1', '0', '0', '0', '1', '0'], ['1', '1', '1', '0', '0', '0', '1']] },
        { type: 'p', text: 'A partir de la tabla, mirando los <strong>minitérminos</strong> (la salida activa o «1»), se podrá llegar a las siguientes expresiones correspondientes a cada salida.' },
        { type: 'math', latex: 'S_0 = H \\cdot \\overline{E_1} \\cdot \\overline{E_0}', display: true },
        { type: 'math', latex: 'S_1 = H \\cdot \\overline{E_1} \\cdot E_0', display: true },
        { type: 'math', latex: 'S_2 = H \\cdot E_1 \\cdot \\overline{E_0}', display: true },
        { type: 'math', latex: 'S_3 = H \\cdot E_1 \\cdot E_0', display: true },
        { type: 'h3', text: 'Expansión de decodificadores' },
        { type: 'p', text: 'Muchas veces se quieren utilizar decodificadores más grandes de los que se disponen. Para solucionar esto, se busca implementar una <strong>expansión de decodificadores</strong>, utilizando unos de menor cantidad de entradas para lograr implementar uno de mayor cantidad de entradas.' },
        { type: 'p', text: 'Ejemplo: implementación de un decodificador de 3×8 (3 entradas, 8 salidas) utilizando decodificadores de 2×4. Se quiere llegar a implementar un decodificador de 3 entradas y 8 salidas, con habilitación.' },
        { type: 'table', caption: 'Tabla de verdad del decodificador 3×8 (X = indistinto).', headers: ['H', 'E2', 'E1', 'E0', 'S0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'], rows: [['0', 'X', 'X', 'X', '0', '0', '0', '0', '0', '0', '0', '0'], ['1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0'], ['1', '0', '0', '1', '0', '1', '0', '0', '0', '0', '0', '0'], ['1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0'], ['1', '0', '1', '1', '0', '0', '0', '1', '0', '0', '0', '0'], ['1', '1', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0'], ['1', '1', '0', '1', '0', '0', '0', '0', '0', '1', '0', '0'], ['1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '1', '0'], ['1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '1']] },
        { type: 'p', text: 'Si se analiza la tabla, se podrá ver que en el caso en que $E_2 = 0$ tenemos un comportamiento igual al del decodificador de 2 entradas. Cuando $E_2 = 1$, también se puede apreciar un comportamiento similar al del decodificador de 2 entradas, con la diferencia de que las salidas activas son de $S_4$ a $S_7$.' },
        { type: 'p', text: 'Entonces, con dos decodificadores de 2 entradas y alguna lógica adicional (alguna compuerta lógica), se podrá implementar el decodificador de 3 entradas. La lógica adicional que se agregue buscará activar solo un decodificador cuando $E_2 = 0$ y luego solo el otro decodificador cuando $E_2 = 1$.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-decodificador-3x8-expansion-dos-2x4-p06.png', alt: 'Expansión que arma un decodificador 3×8 a partir de dos decodificadores 2×4, con E2 controlando la habilitación de cada bloque.', caption: 'Decodificador 3×8 armado con dos 2×4.' },
        { type: 'h3', text: 'Implementación de funciones con decodificadores' },
        { type: 'p', text: 'Se tiene la siguiente función lógica:' },
        { type: 'math', latex: 'f(A, B, C) = \\sum m(0, 2, 3, 5)', display: true },
        { type: 'p', text: 'Escrita en la forma canónica:' },
        { type: 'math', latex: 'f(A, B, C) = \\overline{A}\\,\\overline{B}\\,\\overline{C} + \\overline{A}\\,B\\,\\overline{C} + \\overline{A}\\,B\\,C + A\\,\\overline{B}\\,C', display: true },
        { type: 'p', text: '¿Puede implementarse la función mediante el uso de decodificadores? Sí. Si se tiene en cuenta que la entrada de los decodificadores se corresponde con las variables de la función y que en la tabla de verdad, en ambos casos, se contemplan todas las posibilidades, se podría decir que es posible.' },
        { type: 'p', text: 'Además, hay que tener en cuenta que el decodificador está internamente integrado todo por compuertas <strong>AND</strong>, que también coincide con la expresión de cada término de la función canónica. Por lo tanto, lo único que le falta al decodificador es una compuerta <strong>OR</strong> que recibe todas las salidas que dan como resultado «1» en la tabla de verdad (es decir, los minitérminos).' },
        { type: 'p', text: 'Teniendo en cuenta esto, la implementación a la función lógica anterior será un decodificador de 3 entradas y una compuerta OR que recibe las salidas correspondientes a cada minitérmino de la función.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-decodificador-implementacion-funcion-or-p07.png', alt: 'Decodificador 3×8 con entradas A, B, C cuyas salidas seleccionadas se combinan en una compuerta OR para generar la función F.', caption: 'Implementación de una función con decodificador y una OR.' },
        { type: 'h3', text: 'Decodificador BCD a 7 segmentos' },
        { type: 'p', text: 'El <strong>display 7 segmentos</strong> es muy utilizado, por ejemplo, en relojes. Este se compone de 7 segmentos de led que cuando se les indica se encienden formando los números del 0 al 9.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-display-7-segmentos-segmentos-p08.png', alt: 'Esquema de un display de 7 segmentos con cada segmento etiquetado A a G y el punto decimal.', caption: 'Nomenclatura de los segmentos A a G y el punto decimal.' },
        { type: 'p', text: 'El decodificador BCD a 7 segmentos será el intermediario que, según el código binario que le llega a las entradas, activará las salidas que correspondan. Este es un <strong>caso especial</strong> dentro de los decodificadores, dado que puede activar <strong>más de una salida</strong> según la combinación de las entradas. A este integrado se lo llama también <strong>conversor de código</strong>, pues cambia del código BCD al código del 7 segmentos.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-decodificador-bcd-7-segmentos-tabla-verdad-p08.png', alt: 'Tabla de verdad del decodificador BCD a 7 segmentos que mapea cada entrada a los segmentos a-g y al dígito mostrado.', caption: 'Tabla de verdad del decodificador BCD a 7 segmentos.' },
        { type: 'h3', text: 'Codificador (encoder)' },
        { type: 'p', text: 'El <strong>codificador</strong> es un circuito combinacional que, opuestamente al decodificador, se encarga de codificar o compactar la información que luego será transmitida.' },
        { type: 'p', text: 'Es decir, a cada línea de entrada le asignará una combinación binaria, correspondiente a cierto código, que se verá en las salidas del integrado. En este caso, se cumple que la cantidad de entradas es igual a $2^s$, siendo $s$ la cantidad de salidas.' },
        { type: 'h3', text: 'Codificador binario 4×2' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-codificador-4x2-simbolo-p09.png', alt: 'Símbolo lógico de un codificador con cuatro entradas E3 a E0, habilitación H y dos salidas S1 y S0.', caption: 'Símbolo del codificador 4×2.' },
        { type: 'table', caption: 'Tabla de verdad del codificador 4×2 (X = indistinto).', headers: ['H', 'E0', 'E1', 'E2', 'E3', 'S1', 'S0'], rows: [['0', 'X', 'X', 'X', 'X', '0', '0'], ['1', '1', '0', '0', '0', '0', '0'], ['1', '0', '1', '0', '0', '0', '1'], ['1', '0', '0', '1', '0', '1', '0'], ['1', '0', '0', '0', '1', '1', '1']] },
      ],
      quiz: {
        tf: [
          { id: 'tf-18-1', q: 'En un circuito combinacional las salidas dependen únicamente del estado actual de las entradas.', a: true, explain: 'Esa es justamente la definición de circuito combinacional o combinatorio.' },
          { id: 'tf-18-2', q: 'En un decodificador puede haber varias salidas activas a la vez según el código de entrada.', a: false, explain: 'En el decodificador común solo una salida puede estar activa a la vez. La excepción es el BCD a 7 segmentos, que es un caso especial.' },
          { id: 'tf-18-3', q: 'El código BCD codifica los números del 0 al 9 en binario, sin signo, con 4 bits.', a: true, explain: 'BCD (Binary Coded Decimal) usa 4 bits por dígito: 0=0000 hasta 9=1001.' },
          { id: 'tf-18-4', q: 'El codificador hace lo opuesto al decodificador: codifica o compacta la información.', a: true, explain: 'El codificador (encoder) compacta la información, opuestamente al decodificador.' },
          { id: 'tf-18-5', q: 'En un decodificador se cumple que la cantidad de salidas es como máximo 2 elevado a la cantidad de entradas.', a: true, explain: 'Se cumple S menor o igual que 2 elevado a E, con E entradas y S salidas.' },
        ],
        mc: [
          { id: 'mc-18-1', q: '¿Cómo se representa el número 15 decimal en BCD?', options: ['1111', '0001 0101', '0000 1111', '1 5'], correctIndex: 1, explain: 'Se toma el código del 1 (0001) y el del 5 (0101) y se ponen uno al lado del otro: 0001 0101.' },
          { id: 'mc-18-2', q: '¿Cuál es la expresión lógica de la salida S0 del decodificador 2×4?', options: ['S0 = H·E1·E0', 'S0 = H·(NOT E1)·E0', 'S0 = H·(NOT E1)·(NOT E0)', 'S0 = H·E1·(NOT E0)'], correctIndex: 2, explain: 'S0 se activa con H=1, E1=0 y E0=0, por eso S0 = H·(NOT E1)·(NOT E0).' },
          { id: 'mc-18-3', q: 'Para implementar una función canónica con un decodificador, ¿qué hay que agregarle?', options: ['Una compuerta AND a la entrada', 'Una compuerta OR que reciba los minitérminos', 'Un inversor en la habilitación', 'Otro decodificador en cascada'], correctIndex: 1, explain: 'El deco ya tiene las AND internas (los minitérminos); solo falta una OR que junte las salidas que dan 1 en la tabla.' },
          { id: 'mc-18-4', q: 'En la expansión de un decodificador 3×8 con dos 2×4, ¿qué rol cumple la entrada E2?', options: ['Es la salida de la función', 'Elige cuál de los dos decodificadores se activa', 'Es la habilitación general apagada', 'No interviene en la lógica'], correctIndex: 1, explain: 'Con E2=0 se activa un deco (salidas S0 a S3) y con E2=1 el otro (S4 a S7).' },
        ],
      },
      flashcards: [
        { id: 'fc-18-1', front: '¿Qué es un código en sistemas digitales?', back: 'Una representación numérica usada para transmitir información (números, caracteres, instrucciones). Ejemplos: BCD, Gray, AIKEN, ASCII.' },
        { id: 'fc-18-2', front: '¿Qué codifica el código BCD y con cuántos bits?', back: 'BCD (Binary Coded Decimal) codifica los dígitos del 0 (0000) al 9 (1001) en binario, sin signo, con 4 bits por dígito.' },
        { id: 'fc-18-3', front: '¿Qué es un circuito combinacional?', back: 'Aquel en el que las salidas dependen únicamente del estado actual de las entradas.' },
        { id: 'fc-18-4', front: '¿Qué hace un decodificador y qué regla cumple?', back: 'Convierte información codificada en binario (n entradas) a un máximo de 2^n salidas, con una sola salida activa a la vez. Cumple S menor o igual que 2 elevado a E.' },
        { id: 'fc-18-5', front: '¿Cómo se implementa una función lógica con un decodificador?', back: 'El deco internamente son compuertas AND (los minitérminos). Se agrega una compuerta OR que reciba las salidas correspondientes a los minitérminos de la función.' },
        { id: 'fc-18-6', front: '¿Qué tiene de especial el decodificador BCD a 7 segmentos?', back: 'Es un conversor de código (BCD a 7 segmentos) y es un caso especial porque puede activar más de una salida según la combinación de entradas.' },
        { id: 'fc-18-7', front: '¿Qué hace un codificador y qué regla cumple?', back: 'Hace lo opuesto al decodificador: codifica o compacta la información. Cumple que la cantidad de entradas es igual a 2^s, siendo s la cantidad de salidas.' },
      ],
    },
    {
      id: '19', unit: '5', title: 'Multiplexores y demultiplexores',
      criollo: 'Pensá el mux como una llave selectora: tenés varios canales de datos entrando y elegís cuál sale por el único cable de salida, todo según lo que le pongas en las entradas de control. El demux es el revés exacto: un solo dato entrando y vos elegís a cuál salida lo mandás. Y el bonus copado es que con un mux podés implementar cualquier función lógica casi sin pensar.',
      blocks: [
        { type: 'h3', text: 'El multiplexor (MUX)' },
        { type: 'p', text: 'Un <strong>multiplexor</strong> es un circuito combinacional que permite seleccionar cuál de los datos que se encuentran en sus entradas será transmitido hacia su <strong>única salida</strong>. La idea es: tenés varias fuentes o vías de datos y necesitás transmitir una de ellas a través de un único canal en un momento dado. El multiplexor te permite elegir, mediante sus <strong>entradas de control</strong> (o selección), cuál es el dato que se va a transmitir hacia la salida.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-mux-4x1-analogia-llave-p01.png', alt: 'Analogía del multiplexor como una llave selectora que conecta una de las entradas D0 a D3 a la salida según la posición de selección.', caption: 'El mux como una llave selectora de canales.' },
        { type: 'p', text: 'El multiplexor consta de $D$ entradas de datos, $C$ entradas de control o selección y una única salida $S$. Cada entrada de datos tiene asociada una combinación específica de valores en las entradas de control: cuando esa combinación se da, ese dato es el seleccionado para pasar hacia la salida. Por eso se cumple la relación entre cantidad de entradas de datos y de control:' },
        { type: 'math', latex: 'D = 2^{C}', display: true },
        { type: 'p', text: 'siendo $C$ la cantidad de entradas de control y $D$ la cantidad de entradas de datos.' },
        { type: 'h3', text: 'Multiplexor de 4 a 1' },
        { type: 'p', text: 'Es un multiplexor de <strong>2 entradas de control</strong> o selección, <strong>4 entradas de datos</strong> y <strong>1 salida</strong>. Además tiene la <strong>habilitación</strong> ($H$) que, como su nombre lo indica, permite que el integrado funcione o no según su valor.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-mux-4x1-simbolo-p02.png', alt: 'Símbolo lógico de un multiplexor con cuatro entradas de datos D0 a D3, habilitación H, selección C1 y C0 y una salida S.', caption: 'Símbolo del multiplexor 4×1.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-mux-4x1-diagrama-logico-p02.png', alt: 'Diagrama lógico interno de un multiplexor 4×1 con cuatro compuertas AND, inversores en C1 y C0 y una compuerta OR de salida.', caption: 'Diagrama lógico interno del mux 4×1.' },
        { type: 'p', text: 'A partir del diagrama lógico se llega a la siguiente <strong>tabla de verdad reducida</strong>. Se llama reducida porque muestra cómo la salida depende exclusivamente del dato que fue seleccionado por las entradas de control: la salida es igual al dato que corresponde a la entrada seleccionada según los valores de $C_1$ y $C_0$.' },
        { type: 'table', caption: 'Tabla de verdad reducida del mux 4×1 (X = indistinto).', headers: ['H', 'C1', 'C0', 'S'], rows: [['0', 'X', 'X', '0'], ['1', '0', '0', 'D0'], ['1', '0', '1', 'D1'], ['1', '1', '0', 'D2'], ['1', '1', '1', 'D3']] },
        { type: 'p', text: 'Por ejemplo, si las entradas de control son $C_1 = 0$ y $C_0 = 0$, la salida muestra el dato que está en la entrada $D_0$, sin importar qué valores tengan las demás entradas de datos. Si en ese caso $D_0 = 0$ entonces $S = 0$; y si $D_0 = 1$ entonces $S = 1$.' },
        { type: 'p', text: 'De ese diagrama lógico también sale la expresión correspondiente a la salida:' },
        { type: 'math', latex: 'S = H \\cdot \\overline{C_1} \\cdot \\overline{C_0} \\cdot D_0 + H \\cdot \\overline{C_1} \\cdot C_0 \\cdot D_1 + H \\cdot C_1 \\cdot \\overline{C_0} \\cdot D_2 + H \\cdot C_1 \\cdot C_0 \\cdot D_3', display: true },
        { type: 'h3', text: 'Expansión de multiplexores' },
        { type: 'p', text: 'Muchas veces se quiere usar multiplexores más grandes de los que se dispone. Para resolver esto se implementa una <strong>expansión de multiplexores</strong>: se usan varios multiplexores de menor cantidad de entradas para armar uno de mayor cantidad de entradas.' },
        { type: 'p', text: 'Ejemplo: implementar un multiplexor de <strong>8 a 1</strong> (8 entradas de datos, 3 entradas de control, 1 salida, con habilitación) usando multiplexores de 4 a 1. Su tabla de verdad es:' },
        { type: 'table', caption: 'Tabla de verdad del mux 8×1.', headers: ['H', 'C2', 'C1', 'C0', 'S'], rows: [['0', 'X', 'X', 'X', '0'], ['1', '0', '0', '0', 'D0'], ['1', '0', '0', '1', 'D1'], ['1', '0', '1', '0', 'D2'], ['1', '0', '1', '1', 'D3'], ['1', '1', '0', '0', 'D4'], ['1', '1', '0', '1', 'D5'], ['1', '1', '1', '0', 'D6'], ['1', '1', '1', '1', 'D7']] },
        { type: 'p', text: 'Si analizás la tabla, cuando $C_2 = 0$ el comportamiento es igual al de un mux de 4 entradas de datos y 2 de control. Cuando $C_2 = 1$ el comportamiento es similar, con la diferencia de que la salida ahora puede ser $D_4$, $D_5$, $D_6$ o $D_7$. Entonces con <strong>dos mux de 4 a 1 más algo de lógica adicional</strong> (alguna compuerta) podés armar el mux de 8 a 1: esa lógica adicional se encarga de activar un solo multiplexor cuando $C_2 = 0$ y el otro cuando $C_2 = 1$.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-mux-8x1-expansion-dos-4x1-p06.png', alt: 'Expansión que forma un multiplexor 8×1 a partir de dos multiplexores 4×1, una OR de salida y la línea C2 habilitando cada bloque.', caption: 'Mux 8×1 armado con dos mux 4×1.' },
        { type: 'h3', text: 'Implementación de funciones con multiplexores' },
        { type: 'p', text: 'Algo muy copado del mux es que sirve para implementar cualquier función lógica. Tomemos esta función:' },
        { type: 'math', latex: 'f(A, B, C) = \\sum m(0, 2, 3, 5)', display: true },
        { type: 'p', text: 'cuya tabla de verdad es:' },
        { type: 'table', caption: 'Tabla de verdad de f(A,B,C) y su asociación dato-a-dato.', headers: ['A', 'B', 'C', 'f', 'Dato'], rows: [['0', '0', '0', '1', 'D0'], ['0', '0', '1', '0', 'D1'], ['0', '1', '0', '1', 'D2'], ['0', '1', '1', '1', 'D3'], ['1', '0', '0', '0', 'D4'], ['1', '0', '1', '1', 'D5'], ['1', '1', '0', '0', 'D6'], ['1', '1', '1', '0', 'D7']] },
        { type: 'p', text: '¿Se puede implementar con un mux? Sí. La clave es que las <strong>entradas de control</strong> se corresponden con las <strong>variables de la función</strong> y que <strong>cada entrada de dato vale lo que toma la salida de la función</strong> en esa fila de la tabla. Además, internamente el mux está armado con compuertas $AND$ y una $OR$ que recibe todas las salidas de las $AND$, lo que coincide con una de las formas de implementar el circuito lógico de la función.' },
        { type: 'p', text: 'Como la función tiene 3 variables, se usa un mux de <strong>3 entradas de control</strong> y, por lo tanto, 8 entradas de datos, fijando $D_0 = 1$, $D_1 = 0$, $D_2 = 1$, $D_3 = 1$, $D_4 = 0$, $D_5 = 1$, $D_6 = 0$, $D_7 = 0$.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-mux-8x1-implementacion-funcion-p07.png', alt: 'Multiplexor 8×1 con entradas de datos fijadas en unos y ceros y selección A, B, C usado para implementar una función lógica F.', caption: 'Implementación de una función con un mux 8×1.' },
        { type: 'h3', text: 'La misma función con un mux de 2 entradas de control' },
        { type: 'p', text: '¿Se puede implementar la misma función con un único mux de 2 entradas de control? Sí. Para eso conviene armar una <strong>tabla modificada</strong>, eligiendo 2 variables (en este caso $A$ y $B$) como entradas de control del multiplexor, y expresar la salida en función de la tercera variable ($C$).' },
        { type: 'p', text: 'Para armar la tabla nueva, se mira cómo es la salida de la función respecto de $C$. Por ejemplo: si $A = 0$ y $B = 0$, la salida vale 1 cuando $C = 0$ y vale 0 cuando $C = 1$, así que la salida es lo inverso de $C$, es decir $f = \\overline{C}$. Si $A = 0$ y $B = 1$, la salida es 1 sin importar el valor de $C$, así que $f = 1$.' },
        { type: 'table', caption: 'Tabla modificada: salida expresada en función de C.', headers: ['A', 'B', 'f', 'Dato'], rows: [['0', '0', '$\\overline{C}$', 'D0'], ['0', '1', '1', 'D1'], ['1', '0', '$C$', 'D2'], ['1', '1', '0', 'D3']] },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-mux-4x1-implementacion-funcion-p08.png', alt: 'Multiplexor 4×1 con entradas de datos fijadas a constantes y a una variable y selección A, B para implementar una función F.', caption: 'La misma función con un mux 4×1 y la tabla modificada.' },
        { type: 'h3', text: 'La misma función con mux de 1 entrada de control' },
        { type: 'p', text: '¿Y se puede con multiplexores de 1 entrada de control sin lógica adicional? También. Se hace una <strong>expansión de multiplexores</strong>: para obtener las 4 entradas de datos se usan dos mux de 2 entradas de datos, y se agrega otro multiplexor (un <strong>MUX máster</strong>) que selecciona la entrada del primero o del segundo según el valor de su entrada de control.' },
        { type: 'table', caption: 'Reparto de la tabla modificada entre los dos mux esclavos.', headers: ['A', 'B', 'f', 'Bloque'], rows: [['0', '0', '$\\overline{C}$', 'MUX1'], ['0', '1', '1', 'MUX1'], ['1', '0', '$C$', 'MUX2'], ['1', '1', '0', 'MUX2']] },
        { type: 'h3', text: 'El demultiplexor (DEMUX)' },
        { type: 'p', text: 'El <strong>demultiplexor</strong> es un circuito combinacional que, de manera opuesta al multiplexor, se encarga de seleccionar cuál de sus salidas recibirá la información que está en su <strong>única entrada</strong>. Es decir, las entradas de control eligen a qué canal de salida se envía el dato. En este caso se cumple que la cantidad de salidas es igual a $2^{C}$, siendo $C$ la cantidad de entradas de control.' },
        { type: 'h3', text: 'Demultiplexor de 1 a 4' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-demultiplexor-1x4-simbolo-p10.png', alt: 'Símbolo lógico de un demultiplexor con una entrada de datos D, habilitación H, selección C1 y C0 y cuatro salidas S0 a S3.', caption: 'Símbolo del demultiplexor 1×4.' },
        { type: 'table', caption: 'Tabla de verdad del demux 1×4 (X = indistinto, D = dato de entrada).', headers: ['H', 'C1', 'C0', 'S0', 'S1', 'S2', 'S3'], rows: [['0', 'X', 'X', '0', '0', '0', '0'], ['1', '0', '0', 'D', '0', '0', '0'], ['1', '0', '1', '0', 'D', '0', '0'], ['1', '1', '0', '0', '0', 'D', '0'], ['1', '1', '1', '0', '0', '0', 'D']] },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-demultiplexor-1x4-diagrama-logico-p11.png', alt: 'Diagrama lógico interno de un demultiplexor 1×4 con cuatro compuertas AND, inversores en la selección y la entrada D distribuida a las salidas.', caption: 'Diagrama lógico interno del demux 1×4.' },
        { type: 'p', text: 'A partir del diagrama lógico se obtienen las expresiones de cada salida:' },
        { type: 'math', latex: 'S_0 = H \\cdot \\overline{C_1} \\cdot \\overline{C_0} \\cdot D', display: true },
        { type: 'math', latex: 'S_1 = H \\cdot \\overline{C_1} \\cdot C_0 \\cdot D', display: true },
        { type: 'math', latex: 'S_2 = H \\cdot C_1 \\cdot \\overline{C_0} \\cdot D', display: true },
        { type: 'math', latex: 'S_3 = H \\cdot C_1 \\cdot C_0 \\cdot D', display: true }
      ],
      quiz: {
        tf: [
          { id: 'tf-19-1', q: 'Un multiplexor tiene varias entradas de datos pero una única salida.', a: true, explain: 'El mux selecciona cuál de sus varias entradas de datos se transmite hacia su única salida, según las entradas de control.' },
          { id: 'tf-19-2', q: 'En un multiplexor se cumple que la cantidad de entradas de datos D es igual a 2 elevado a la cantidad de entradas de control C.', a: true, explain: 'D = 2^C: cada combinación de las C entradas de control selecciona una entrada de datos distinta.' },
          { id: 'tf-19-3', q: 'En el mux 4 a 1, cuando la habilitación H vale 0 la salida toma el valor del dato D0.', a: false, explain: 'Con H = 0 el integrado queda deshabilitado y la salida es 0, sin importar las entradas de control ni los datos.' },
          { id: 'tf-19-4', q: 'El demultiplexor distribuye el dato de su única entrada hacia una de sus varias salidas según las entradas de control.', a: true, explain: 'El demux es el opuesto del mux: una sola entrada de datos y varias salidas, eligiendo a cuál salida mandar el dato.' }
        ],
        mc: [
          { id: 'mc-19-1', q: 'En un mux 4 a 1, si H=1, C1=1 y C0=0, ¿qué dato aparece en la salida S?', options: ['D0', 'D1', 'D2', 'D3'], correctIndex: 2, explain: 'La combinación C1=1, C0=0 (binario 10) selecciona la entrada D2, así que S = D2.' },
          { id: 'mc-19-2', q: 'Para implementar una función lógica de 3 variables con un solo multiplexor, ¿qué mux se necesita y cómo se cargan los datos?', options: ['Un mux 4 a 1, cargando los datos con las variables', 'Un mux de 3 control / 8 datos, cargando cada dato con el valor de la función en la tabla de verdad', 'Un demux 1 a 4, usando las variables como salidas', 'Un mux de 1 control, sin cargar datos'], correctIndex: 1, explain: 'Con 3 variables se usa un mux de 3 control y 8 datos; cada entrada de dato toma el valor que da la salida de la función en esa fila de la tabla de verdad.' },
          { id: 'mc-19-3', q: 'Al implementar f(A,B,C)=suma m(0,2,3,5) con un mux de 2 control eligiendo A y B, ¿qué se carga en el dato correspondiente a A=0, B=0?', options: ['1', '0', 'C', 'C negado'], correctIndex: 3, explain: 'Con A=0 y B=0 la función vale 1 cuando C=0 y 0 cuando C=1, o sea es lo inverso de C: f = C negado.' },
          { id: 'mc-19-4', q: '¿Cómo se arma un mux 8 a 1 a partir de mux más chicos?', options: ['Con dos mux 4 a 1 más lógica adicional, donde C2 elige cuál se activa', 'Con un solo mux 4 a 1 y un inversor', 'Con cuatro demux 1 a 4 en cascada', 'Con dos mux 2 a 1 sin lógica adicional'], correctIndex: 0, explain: 'Se usan dos mux 4 a 1: la lógica adicional activa uno cuando C2=0 y el otro cuando C2=1, cubriendo las 8 entradas.' }
        ]
      },
      flashcards: [
        { id: 'fc-19-1', front: '¿Qué hace un multiplexor (MUX)?', back: 'Es un circuito combinacional que selecciona cuál de sus varias entradas de datos se transmite hacia su única salida, mediante las entradas de control o selección.' },
        { id: 'fc-19-2', front: '¿Qué relación cumple un mux entre entradas de datos (D) y de control (C)?', back: 'D = 2^C: cada combinación de las C entradas de control selecciona una de las D entradas de datos.' },
        { id: 'fc-19-3', front: 'En un mux 4 a 1, ¿qué pasa con la salida según H y la selección?', back: 'Si H=0 la salida es 0. Si H=1, la salida es igual al dato seleccionado por C1C0: 00→D0, 01→D1, 10→D2, 11→D3.' },
        { id: 'fc-19-4', front: '¿Cómo se implementa una función lógica con un mux de 3 control / 8 datos?', back: 'Las entradas de control son las variables de la función y cada entrada de dato se carga con el valor que toma la salida de la función en esa fila de la tabla de verdad.' },
        { id: 'fc-19-5', front: '¿Qué es un demultiplexor (DEMUX)?', back: 'Es el opuesto del mux: distribuye el dato de su única entrada hacia una de sus varias salidas según las entradas de control. Cumple salidas = 2^C.' }
      ]
    },
    {
      id: '20', unit: '5', title: 'Comparador de magnitudes, semisumador y sumador completo',
      criollo: 'Acá vemos tres circuitos combinacionales re útiles: uno que compara dos números (si son iguales, uno menor o uno mayor) y dos que suman. El semisumador suma dos bits y el sumador completo suma tres bits metiendo el carry de entrada. Spoiler: el sumador completo lo armás con dos semisumadores y una OR, así de fácil.',
      blocks: [
        { type: 'h3', text: 'Comparador de magnitudes' },
        { type: 'p', text: 'Un <strong>comparador de magnitudes</strong> es un circuito combinacional que, como su nombre lo indica, compara la magnitud de dos números e indica la relación entre ellos. Es decir, si uno es igual al otro, es menor que el otro, o mayor.' },
        { type: 'p', text: 'Supongamos que se tienen dos números $A$ y $B$ de un bit cada uno. A continuación se muestra cada caso.' },
        { type: 'h3', text: 'Igualdad de magnitudes' },
        { type: 'p', text: 'Para verificar si dos números tienen la misma magnitud, se arma una tabla de verdad donde $A$ y $B$ son las entradas y la salida se indica con un \'1\' cuando estos números son iguales.' },
        { type: 'table', caption: 'Tabla de verdad de la igualdad (A = B).', headers: ['A', 'B', 'A = B'], rows: [['0', '0', '1'], ['0', '1', '0'], ['1', '0', '0'], ['1', '1', '1']] },
        { type: 'p', text: 'A partir de la tabla se observa que es equivalente al comportamiento de una compuerta <strong>XNOR</strong>, por lo que la expresión lógica será:' },
        { type: 'math', latex: 'S_{A=B} = \\overline{A \\oplus B}', display: true },
        { type: 'h3', text: 'Magnitud A menor que B' },
        { type: 'p', text: 'De manera similar, en este caso se indica con un \'1\' en la salida cuando $A$ es menor que $B$ ($A \\lt B$).' },
        { type: 'table', caption: 'Tabla de verdad de A menor que B.', headers: ['A', 'B', '$A \\lt B$'], rows: [['0', '0', '0'], ['0', '1', '1'], ['1', '0', '0'], ['1', '1', '0']] },
        { type: 'p', text: 'A partir de la tabla se puede llegar a la siguiente expresión lógica:' },
        { type: 'math', latex: 'S_{A \\lt B} = \\overline{A} \\cdot B', display: true },
        { type: 'h3', text: 'Magnitud A mayor que B' },
        { type: 'p', text: 'En este caso se indica con un \'1\' en la salida cuando $A$ es mayor que $B$ ($A \\gt B$).' },
        { type: 'table', caption: 'Tabla de verdad de A mayor que B.', headers: ['A', 'B', '$A \\gt B$'], rows: [['0', '0', '0'], ['0', '1', '0'], ['1', '0', '1'], ['1', '1', '0']] },
        { type: 'p', text: 'A partir de la tabla se puede llegar a la siguiente expresión lógica:' },
        { type: 'math', latex: 'S_{A \\gt B} = A \\cdot \\overline{B}', display: true },
        { type: 'h3', text: 'Comparador de magnitudes completo' },
        { type: 'p', text: 'Uniendo todos los resultados anteriores, se obtiene un comparador de 2 números de un bit, que indica con un \'1\' cuando se da dicha relación (ya sea igual a, menor a, o mayor a).' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-comparador-magnitud-circuito-p03.png', alt: 'Circuito completo del comparador de magnitud de un bit con las tres salidas A menor, A igual y A mayor que B.', caption: 'Circuito completo del comparador de magnitud.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-comparador-magnitud-simbolo-p04.png', alt: 'Símbolo del comparador de magnitud con entradas A y B y tres salidas: A menor que B, A igual a B y A mayor que B.', caption: 'Símbolo del comparador de magnitud con sus tres salidas.' },
        { type: 'h3', text: 'Sumadores' },
        { type: 'p', text: 'Los <strong>sumadores</strong> son circuitos combinacionales capaces de realizar sumas aritméticas. Estos son utilizados, por ejemplo, en las computadoras, para el procesamiento de datos, como también en otros sistemas digitales. A continuación se ven dos circuitos sumadores capaces de realizar la suma aritmética entre dos números de un bit y entre tres números de un bit.' },
        { type: 'h3', text: 'Semisumador (Half Adder)' },
        { type: 'p', text: 'El <strong>semisumador</strong>, o <em>half adder</em> en inglés (HA), es un circuito combinacional que puede sumar dos números de un bit cada uno; es decir, que puede sumar dos bits.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-semisumador-simbolo-p04.png', alt: 'Símbolo del semisumador con entradas A y B y salidas C de acarreo y S de suma.', caption: 'Símbolo del semisumador (half adder).' },
        { type: 'p', text: 'Recordando las reglas de la suma en binario ($0+0=0$, $1+0=1$, $1+1=10$, donde el 1 corresponde al carry o acarreo), se puede armar la tabla de verdad del semisumador. Acá $A$ y $B$ son las entradas (dos números de 1 bit), $C$ es el carry de la suma y $S$ el resultado de la suma.' },
        { type: 'table', caption: 'Tabla de verdad del semisumador.', headers: ['A', 'B', 'C', 'S'], rows: [['0', '0', '0', '0'], ['0', '1', '0', '1'], ['1', '0', '0', '1'], ['1', '1', '1', '0']] },
        { type: 'p', text: 'A partir de la tabla se puede llegar a las siguientes expresiones:' },
        { type: 'math', latex: 'C = A \\cdot B', display: true },
        { type: 'math', latex: 'S = A \\oplus B', display: true },
        { type: 'p', text: 'El circuito correspondiente a la tabla y a las expresiones lógicas usa una compuerta XOR para la suma y una AND para el carry.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-semisumador-circuito-p05.png', alt: 'Circuito del semisumador formado por una compuerta XOR que da la suma y una AND que da el acarreo.', caption: 'Circuito del semisumador: XOR para la suma y AND para el carry.' },
        { type: 'h3', text: 'Sumador completo (Full Adder)' },
        { type: 'p', text: 'El <strong>sumador completo</strong>, o <em>full adder</em> en inglés (FA), es un circuito combinacional que puede sumar tres números de un bit cada uno; es decir, que puede sumar tres bits.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-sumador-completo-simbolo-p06.png', alt: 'Símbolo del sumador completo con entradas A, B y C-1 y salidas C de acarreo y S de suma.', caption: 'Símbolo del sumador completo (full adder).' },
        { type: 'p', text: 'Al igual que con el semisumador, se arma la tabla de verdad. Acá $A$, $B$ y $C_{-1}$ son las entradas (tres números de 1 bit), $C$ es el carry de la suma y $S$ el resultado de la suma.' },
        { type: 'table', caption: 'Tabla de verdad del sumador completo.', headers: ['A', 'B', 'C-1', 'C', 'S'], rows: [['0', '0', '0', '0', '0'], ['0', '0', '1', '0', '1'], ['0', '1', '0', '0', '1'], ['0', '1', '1', '1', '0'], ['1', '0', '0', '0', '1'], ['1', '0', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '1', '1', '1']] },
        { type: 'p', text: 'Minimizando las expresiones del $C$ (carry) y de la $S$ (suma) mediante el uso de mapas de Karnaugh, se llega a las siguientes expresiones simplificadas.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-sumador-completo-karnaugh-carry-p07.png', alt: 'Mapa de Karnaugh de la salida de acarreo del sumador completo con las agrupaciones marcadas.', caption: 'Mapa de Karnaugh del carry del sumador completo.' },
        { type: 'p', text: 'Carry ($C$):' },
        { type: 'math', latex: 'C = A \\cdot B + A \\cdot C_{-1} + B \\cdot C_{-1}', display: true },
        { type: 'p', text: 'Suma ($S$):' },
        { type: 'math', latex: 'S = \\overline{A} \\cdot \\overline{B} \\cdot C_{-1} + \\overline{A} \\cdot B \\cdot \\overline{C_{-1}} + A \\cdot \\overline{B} \\cdot \\overline{C_{-1}} + A \\cdot B \\cdot C_{-1}', display: true },
        { type: 'p', text: 'Trabajando esta última expresión, se puede ver que corresponde a una compuerta <strong>XOR de tres entradas</strong>. Se utiliza la propiedad distributiva y luego se reemplaza una expresión por la de la XOR:' },
        { type: 'math', latex: 'S = C_{-1} \\cdot (\\overline{A} \\cdot \\overline{B} + A \\cdot B) + \\overline{C_{-1}} \\cdot (\\overline{A} \\cdot B + A \\cdot \\overline{B})', display: true },
        { type: 'math', latex: 'S = C_{-1} \\cdot \\overline{(A \\oplus B)} + \\overline{C_{-1}} \\cdot (A \\oplus B)', display: true },
        { type: 'math', latex: 'S = A \\oplus B \\oplus C_{-1}', display: true },
        { type: 'p', text: 'Aunque con esas dos expresiones ya es posible armar el diagrama interno, es interesante ver otra expresión equivalente del carry. Partiendo de la expresión canónica como suma de productos del carry, aplicando distributiva, complemento e identidad, se llega a:' },
        { type: 'math', latex: 'C = C_{-1} \\cdot (A \\oplus B) + A \\cdot B', display: true },
        { type: 'p', text: 'A partir de las expresiones $C = C_{-1} \\cdot (A \\oplus B) + A \\cdot B$ y $S = A \\oplus B \\oplus C_{-1}$ es posible armar el diagrama lógico interno del sumador completo.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-sumador-completo-circuito-p08.png', alt: 'Circuito del sumador completo a nivel de compuertas con dos XOR, dos AND y una OR para la suma y el acarreo.', caption: 'Circuito del sumador completo con compuertas.' },
        { type: 'callout', tone: 'criollo', text: 'Mirá el detalle copado: al haber trabajado la expresión del carry, se puede ver que a partir de <strong>dos semisumadores y una compuerta OR</strong> es posible armar un sumador completo. O sea, reutilizás un bloque que ya conocés.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-sumador-completo-dos-semisumadores-p09.png', alt: 'Sumador completo construido con dos semisumadores encadenados y una compuerta OR para combinar los acarreos.', caption: 'Sumador completo armado con dos semisumadores y una OR.' }
      ],
      quiz: {
        tf: [
          { id: 'tf-20-1', q: 'La salida de igualdad de un comparador de un bit (A = B) se comporta como una compuerta XNOR.', a: true, explain: 'La salida vale 1 cuando A y B son iguales, que es exactamente el comportamiento de la XNOR: S = NOT(A XOR B).' },
          { id: 'tf-20-2', q: 'En un comparador de un bit, la salida "A menor que B" vale 1 cuando A = 1 y B = 0.', a: false, explain: 'La salida "A menor que B" vale 1 solo cuando A = 0 y B = 1. La expresión es S = NOT(A)·B.' },
          { id: 'tf-20-3', q: 'El semisumador (half adder) puede sumar tres bits a la vez.', a: false, explain: 'El semisumador suma solo dos bits (A y B). El que suma tres bits, incluyendo el carry de entrada, es el sumador completo.' },
          { id: 'tf-20-4', q: 'Un sumador completo se puede construir a partir de dos semisumadores y una compuerta OR.', a: true, explain: 'Al trabajar la expresión del carry se ve que el full adder se arma encadenando dos half adders y combinando los acarreos con una OR.' },
          { id: 'tf-20-5', q: 'La suma S del sumador completo equivale a una XOR de tres entradas: S = A XOR B XOR C-1.', a: true, explain: 'Minimizando la expresión de la suma con propiedades de las XOR se llega a S = A XOR B XOR C-1.' }
        ],
        mc: [
          { id: 'mc-20-1', q: '¿Cuál es la expresión lógica de la salida A mayor que B en un comparador de un bit?', options: ['S = NOT(A)·B', 'S = A·NOT(B)', 'S = NOT(A XOR B)', 'S = A·B'], correctIndex: 1, explain: 'A mayor que B vale 1 solo cuando A = 1 y B = 0, lo que da S = A·NOT(B).' },
          { id: 'mc-20-2', q: 'En el semisumador, ¿cuáles son las expresiones del carry C y de la suma S?', options: ['C = A XOR B y S = A·B', 'C = A·B y S = A XOR B', 'C = A + B y S = A·B', 'C = NOT(A XOR B) y S = A + B'], correctIndex: 1, explain: 'El carry es el AND (C = A·B) y la suma es la XOR (S = A XOR B).' },
          { id: 'mc-20-3', q: '¿Cuál es la expresión minimizada del carry del sumador completo obtenida con Karnaugh?', options: ['C = A·B·C-1', 'C = A·B + A·C-1 + B·C-1', 'C = A XOR B XOR C-1', 'C = A + B + C-1'], correctIndex: 1, explain: 'Minimizando con Karnaugh el carry queda C = A·B + A·C-1 + B·C-1.' },
          { id: 'mc-20-4', q: '¿Cuál es la expresión alternativa del carry del sumador completo usando la XOR?', options: ['C = C-1·(A XOR B) + A·B', 'C = C-1·(A·B) + A XOR B', 'C = (A XOR B) XOR C-1', 'C = A·B·C-1 + NOT(C-1)'], correctIndex: 0, explain: 'Reemplazando con la expresión de la XOR se obtiene C = C-1·(A XOR B) + A·B, la forma que permite armarlo con dos semisumadores.' }
        ]
      },
      flashcards: [
        { id: 'fc-20-1', front: '¿Qué es un comparador de magnitudes?', back: 'Un circuito combinacional que compara dos números e indica si son iguales, si uno es menor o si uno es mayor que el otro.' },
        { id: 'fc-20-2', front: 'Expresiones de las tres salidas del comparador de un bit', back: 'Igualdad: S = NOT(A XOR B) (XNOR). A menor que B: S = NOT(A)·B. A mayor que B: S = A·NOT(B).' },
        { id: 'fc-20-3', front: '¿Qué hace un semisumador (half adder) y cuáles son sus expresiones?', back: 'Suma dos bits A y B. Carry C = A·B (AND) y suma S = A XOR B (XOR). Se arma con una AND y una XOR.' },
        { id: 'fc-20-4', front: '¿Qué hace un sumador completo (full adder)?', back: 'Suma tres bits: A, B y el carry de entrada C-1. Tiene tabla de 8 filas y salidas carry C y suma S.' },
        { id: 'fc-20-5', front: 'Expresiones del sumador completo', back: 'Carry: C = A·B + A·C-1 + B·C-1 (o C = C-1·(A XOR B) + A·B). Suma: S = A XOR B XOR C-1.' },
        { id: 'fc-20-6', front: '¿Cómo se puede construir un sumador completo a partir de bloques más simples?', back: 'Con dos semisumadores encadenados y una compuerta OR que combina los dos acarreos.' }
      ]
    },
    {
      id: '21', unit: '5', title: 'Sumadores y restadores de varios bits',
      criollo: 'Acá agarramos el sumador completo y lo encadenamos: ponés varios en paralelo y pasás el carry de uno al otro en serie, y listo, sumás números de varios bits. Con un par de NOT y XOR el mismo fierro te suma o te resta usando complemento a 2. Y al final asomamos el carry anticipado, que es el primo más rápido.',
      blocks: [
        { type: 'h3', text: 'El sumador completo como punto de partida' },
        { type: 'p', text: 'El <strong>sumador completo</strong> o <strong>full adder (FA)</strong> es un circuito combinacional que puede sumar tres números de un bit cada uno; es decir, suma tres bits. Generalizando los resultados, sus expresiones lógicas genéricas son las del carry de salida y la suma.' },
        { type: 'math', latex: 'C_n = C_{n-1} \\cdot (A_n \\oplus B_n) + A_n \\cdot B_n', display: true },
        { type: 'math', latex: 'S_n = A_n \\oplus B_n \\oplus C_{n-1}', display: true },
        { type: 'callout', tone: 'info', text: 'Ojo con la diferencia entre los dos carry: $C_{n-1}$ es el <strong>carry de entrada</strong> (el acarreo anterior) y $C_n$ es el <strong>carry de salida</strong>.' },
        { type: 'p', text: '¿Y cómo hacemos si queremos sumar dos números que tengan más de un bit cada uno? Ahí entra la idea de encadenar varios FA.' },

        { type: 'h3', text: 'Sumador en paralelo con carry en serie' },
        { type: 'p', text: 'Para sumar dos números de $n$ bits se usan $n$ sumadores completos ubicados en <strong>paralelo</strong>, donde el carry de entrada de cada uno toma el carry del sumador anterior. Es decir, los sumadores que están en paralelo pasan su carry de uno al siguiente <strong>en serie</strong>.' },
        { type: 'p', text: 'Cada columna de la suma corresponde a un sumador completo, donde se suman los dos números $A$ y $B$. Los carry pasan a la columna siguiente y, por lo tanto, al siguiente sumador: el carry de salida de un FA pasa al próximo de la izquierda.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-sumador-ripple-carry-p03.png', alt: 'Sumador de tres bits formado por tres sumadores completos encadenados por el acarreo (ripple carry).', caption: 'Sumador de varios bits: FA en paralelo encadenados por el carry en serie.' },

        { type: 'h3', text: 'Ejemplo 1: 5d + 1d' },
        { type: 'p', text: 'Queremos implementar la operación $5d + 1d$ en binario. Primero hacemos la suma aritmética: $5d = 101b$ y $1d = 001b$. Como son tres columnas, necesitamos tres sumadores completos con los carry conectados en serie.' },
        { type: 'p', text: 'Reemplazando los valores, con $C_{-1} = 0$ (no hay carry anterior al sumar dos positivos), columna por columna queda:' },
        { type: 'ul', items: [
          '$1 + 0 + 0 = 01$',
          '$0 + 0 + 1 = 01$',
          '$1 + 1 + 0 = 10$'
        ] },
        { type: 'p', text: 'Las salidas $S_n$ dan el resultado: $S = S_2 S_1 S_0 = 110$, que es $6$ en decimal, el valor esperado. El último carry obtenido es $C_2 = 0$, lo que indica que <strong>no hay desbordamiento (overflow)</strong>.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-sumador-ripple-carry-ejemplo-p03.png', alt: 'Sumador de tres bits con valores aplicados sumando 5 más 1 y propagando los acarreos.', caption: 'Ejemplo: 5 + 1 con el carry propagándose FA por FA (resultado 6, sin overflow).' },

        { type: 'h3', text: 'Ejemplo 2: 5d + 7d (overflow)' },
        { type: 'p', text: 'Ahora queremos $5d + 7d$ en binario, con el mismo planteo. Reemplazando las entradas, el último carry de la cuenta es $C_2 = 1$, lo que indica que hay <strong>desbordamiento (overflow)</strong>. Esto significa que podría hacer falta al menos un sumador completo más para hacer la cuenta sin desbordamiento.' },
        { type: 'p', text: 'Sin embargo, como podemos considerar que es una cuenta <strong>sin signo</strong>, tomamos el último carry como parte del resultado. Así, $S = C_2 S_2 S_1 S_0 = 1100$, que pasado a decimal es $12$, el resultado esperado porque $5 + 7 = 12$.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-sumador-ripple-carry-overflow-p04.png', alt: 'Sumador de tres bits sumando 5 más 7 con acarreo final de salida en 1.', caption: 'Ejemplo: 5 + 7 deja carry de salida en 1 (resultado 12 tomando el carry, sin signo).' },

        { type: 'h3', text: 'Restador a partir del sumador' },
        { type: 'p', text: 'Para restar dos números $A - B$ podemos hacer esa cuenta sumando números con signo: $(+A) + (-B)$. Esto sugiere que podemos armar el restador a partir de sumadores completos. De las distintas representaciones de números con signo, la más conveniente es el <strong>complemento a 2</strong>, así que hay que ver cómo implementar una suma en complemento a 2 con FA.' },
        { type: 'callout', tone: 'info', text: 'El complemento a 2 es la representación más conveniente porque es la única donde el cero tiene un solo equivalente (el elemento nulo es único), por lo que su rango de representación es mayor: $[-(2^{n-1}); (2^{n-1} - 1)]$.' },
        { type: 'p', text: 'Para pasar el número $B$ a complemento a 2 hay que <strong>invertir todos sus bits</strong> y luego <strong>sumarle 1</strong>. La inversión se logra agregando una compuerta <strong>NOT</strong> a cada entrada de $B$ (un NOT cambia 0 por 1 y viceversa). El "+1" del complemento a 2 se consigue entrando con el carry inicial $C_{-1} = 1$.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-restador-4bits-p07.png', alt: 'Restador de cuatro bits con inversores sobre las entradas B y carry inicial en 1, usando cuatro sumadores completos.', caption: 'Restador de 4 bits: se invierte B (NOT) y se entra con carry inicial en 1 (complemento a 2).' },

        { type: 'h3', text: 'Ejemplo: 5d − 2d' },
        { type: 'p', text: 'Tomamos $A$ como el positivo ($+5$) y $B$ como el negativo ($-2$), ambos en binario con la misma cantidad de bits: $5d = 101b$ y $2d = 010b$. Al $+5$ solo le agregamos el bit de signo: $+5d = 0101$. Al $-2$ le agregamos el bit de signo, invertimos todos los bits y le sumamos 1: $-2d = 1110$.' },
        { type: 'p', text: 'Como la cuenta tiene tres columnas más la del bit de signo, usamos <strong>4 sumadores completos</strong>, con $C_{-1} = 1$. En complemento a 2 el último bit de carry se <strong>descarta</strong>. El bit de signo $S_3 = 0$ indica resultado positivo y el resto da la magnitud $3$ ($011$). El resultado es el esperado: $5d - 2d = 3d$.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-restador-4bits-ejemplo-p08.png', alt: 'Restador de cuatro bits realizando la resta 5 menos 2 con las señales activas.', caption: 'Ejemplo del restador: 5 menos 2 da resultado positivo (3).' },
        { type: 'p', text: 'En el caso $2d - 7d$, con $2d = 0010b$ y $7d = 0111b$ y $C_{-1} = 1$, el bit de signo da $S_3 = 1$, o sea negativo. Para saber la magnitud antes de pasar a decimal hay que complementar: $011 \\rightarrow 101$, que es $5d$. Entonces $S = S_3 S_2 S_1 S_0$ es $-5d$, el resultado esperado porque $2d - 7d = -5d$.' },

        { type: 'h3', text: 'Sumador − restador (con carry en serie)' },
        { type: 'p', text: 'El <strong>sumador − restador</strong> es una única implementación que puede sumar o restar dos números solo cambiando los valores de las entradas. Tomamos $A$ como el número positivo y $B$ como el que es positivo o negativo según la operación deseada.' },
        { type: 'p', text: 'Las dos operaciones se diferencian en dos cosas. Por un lado, $C_{-1} = 0$ si se suman dos positivos, mientras que en la resta $C_{-1} = 1$. Por otro lado, hace falta una lógica que deje pasar $B_n$ tal cual cuando se suma, pero lo invierta cuando se resta. El NOT solo no alcanza para los dos casos.' },
        { type: 'table', caption: 'Comportamiento buscado en la entrada de B según se sume o reste (I es el valor que entra al sumador).', headers: ['Operación', 'C-1', 'B', 'I'], rows: [
          ['Suma', '0', '0', '0'],
          ['Suma', '0', '1', '1'],
          ['Resta', '1', '0', '1'],
          ['Resta', '1', '1', '0']
        ] },
        { type: 'p', text: 'Si mirás la tabla con atención, se corresponde con el comportamiento de la compuerta <strong>XOR (OR exclusiva)</strong>. Por eso se agrega a la entrada de cada $B_n$ una compuerta XOR, cuyas entradas son el valor de $B_n$ y la línea de control $C_{-1}$ (que vale 1 o 0 según se reste o se sume).' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-sumador-restador-xor-p11.png', alt: 'Sumador-restador de cuatro bits que usa compuertas XOR controladas por una línea de modo sobre las entradas B.', caption: 'Sumador-restador de 4 bits: las XOR sobre B eligen entre sumar y restar.' },
        { type: 'p', text: 'En modo suma ($5d + 7d$) se pone $C_{-1} = 0$ y las XOR dejan pasar $B_n$ tal cual. Considerando la cuenta sin signo, $S = S_3 S_2 S_1 S_0 = 1100b = 12d$, el resultado esperado.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-sumador-restador-modo-suma-p12.png', alt: 'Sumador-restador de cuatro bits con la línea de control en cero operando en modo suma.', caption: 'El mismo circuito en modo suma (control C-1 en 0).' },
        { type: 'callout', tone: 'warning', text: 'En la suma $5 + 7 = 12$, si se la considerara con signo en complemento a 2, el bit de signo da 1 (negativo) cuando se esperaba positivo: eso sería un <strong>overflow</strong>. Se resuelve agregando un sumador más o planteándola como suma sin signo para quedarse dentro del rango.' },
        { type: 'p', text: 'En modo resta ($5d - 7d$) se pone $C_{-1} = 1$ y las XOR invierten $B_n$. En complemento a 2 el último carry se descarta. El bit de signo $S_3 = 1$ indica resultado negativo; complementando la magnitud $110 \\rightarrow 010 = 2d$, queda $S = 1110$ que es $-2d$, el resultado esperado porque $5d - 7d = -2d$.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u5-sumador-restador-modo-resta-p13.png', alt: 'Sumador-restador de cuatro bits con la línea de control en uno operando en modo resta.', caption: 'El mismo circuito en modo resta (control C-1 en 1).' },

        { type: 'h3', text: 'Sumador en paralelo con carry anticipado' },
        { type: 'p', text: 'El sumador en paralelo con carry en serie no es la única forma de armar esto, y tampoco es tan veloz: cada FA debe esperar el carry del anterior, así que el retardo se va acumulando y depende de la cantidad de bits (de sumadores).' },
        { type: 'callout', tone: 'info', text: 'El <strong>sumador en paralelo con carry anticipado</strong> lleva una lógica más compleja que calcula los carry de manera anticipada (en paralelo), de modo que no se acumula el retardo de cada sumador. Así <strong>independiza el retardo de la cantidad de bits</strong> y resulta más veloz y eficiente que el de carry en serie.' }
      ],
      quiz: {
        tf: [
          { id: 'tf-21-1', q: 'En el sumador en paralelo con carry en serie, el carry de salida de cada sumador completo se conecta al carry de entrada del siguiente.', a: true, explain: 'Los FA están en paralelo pero pasan el carry de uno al siguiente en serie.' },
          { id: 'tf-21-2', q: 'En la suma 5 + 7 con tres FA, el último carry C2 vale 0 e indica que no hubo overflow.', a: false, explain: 'En 5 + 7 el último carry es C2 = 1, lo que indica overflow; como es sin signo se toma el carry como parte del resultado (1100 = 12).' },
          { id: 'tf-21-3', q: 'Para restar A − B con sumadores en complemento a 2 se invierten los bits de B y se entra con C-1 = 1.', a: true, explain: 'El NOT sobre B hace la inversión y el carry inicial en 1 aporta el +1 del complemento a 2.' },
          { id: 'tf-21-4', q: 'En el sumador-restador, la compuerta que se coloca a la entrada de cada Bn para elegir entre sumar y restar es una AND.', a: false, explain: 'Es una XOR: la tabla C-1/B/I se corresponde con el comportamiento de la OR exclusiva.' },
          { id: 'tf-21-5', q: 'El sumador con carry anticipado independiza el retardo de la cantidad de bits calculando los carry en paralelo.', a: true, explain: 'Por eso es más veloz que el de carry en serie, que acumula retardo a medida que crecen los bits.' }
        ],
        mc: [
          { id: 'mc-21-1', q: 'La expresión del carry de salida del sumador completo es:', options: ['Cn = C(n-1)·(An XOR Bn) + An·Bn', 'Cn = An XOR Bn XOR C(n-1)', 'Cn = An·Bn·C(n-1)', 'Cn = An + Bn + C(n-1)'], correctIndex: 0, explain: 'Esa es la expresión genérica del carry de salida; la otra (An XOR Bn XOR C(n-1)) corresponde a la suma Sn.' },
          { id: 'mc-21-2', q: 'En la suma 5d + 1d con tres FA, el resultado de las salidas es:', options: ['S = 110 = 6d con C2 = 0 (sin overflow)', 'S = 1100 = 12d con C2 = 1', 'S = 101 = 5d con C2 = 1', 'S = 011 = 3d con C2 = 0'], correctIndex: 0, explain: 'S2 S1 S0 = 110 = 6d y el último carry C2 = 0 indica que no hubo desbordamiento.' },
          { id: 'mc-21-3', q: '¿Cómo se obtiene el +1 necesario para pasar B a complemento a 2 en un restador con sumadores?', options: ['Entrando con el carry inicial C-1 = 1', 'Agregando un FA extra al final', 'Poniendo C-1 = 0', 'Usando una compuerta AND en la salida'], correctIndex: 0, explain: 'Los NOT invierten los bits de B y el carry inicial C-1 = 1 aporta el +1 del complemento a 2.' },
          { id: 'mc-21-4', q: 'En el sumador-restador, ¿qué valor toma C-1 en modo resta y qué hace la XOR con Bn?', options: ['C-1 = 1 y la XOR invierte Bn', 'C-1 = 0 y la XOR invierte Bn', 'C-1 = 1 y la XOR deja pasar Bn tal cual', 'C-1 = 0 y la XOR deja pasar Bn tal cual'], correctIndex: 0, explain: 'En resta C-1 = 1 controla las XOR, que invierten Bn; en suma C-1 = 0 y dejan pasar Bn sin cambios.' },
          { id: 'mc-21-5', q: '¿Por qué el sumador con carry anticipado es más rápido que el de carry en serie?', options: ['Porque calcula los carry de forma anticipada en paralelo, sin acumular retardo por bit', 'Porque usa menos sumadores completos', 'Porque descarta el último carry', 'Porque suma sin signo en lugar de con signo'], correctIndex: 0, explain: 'Al anticipar los carry en paralelo independiza el retardo de la cantidad de bits, a diferencia del de serie que lo acumula.' }
        ]
      },
      flashcards: [
        { id: 'fc-21-1', front: 'Expresiones genéricas del sumador completo (FA)', back: 'Carry de salida: Cn = C(n-1)·(An XOR Bn) + An·Bn. Suma: Sn = An XOR Bn XOR C(n-1). C(n-1) es el carry de entrada y Cn el de salida.' },
        { id: 'fc-21-2', front: '¿Cómo se suman dos números de n bits con FA?', back: 'Con n sumadores completos en paralelo, pasando el carry de salida de cada uno al carry de entrada del siguiente (carry en serie).' },
        { id: 'fc-21-3', front: '¿Qué indica el último carry en una suma sin signo (ej. 5 + 7)?', back: 'Si C2 = 1 hay overflow; como es sin signo, se toma el carry como parte del resultado: S = C2 S2 S1 S0 = 1100 = 12d.' },
        { id: 'fc-21-4', front: 'Restador con sumadores en complemento a 2', back: 'Se invierten los bits de B con compuertas NOT y se entra con carry inicial C-1 = 1 (el +1 del Ca2). El último carry se descarta y el bit de signo Sn indica el signo.' },
        { id: 'fc-21-5', front: '¿Qué compuerta usa el sumador-restador en la entrada de Bn y cómo se controla?', back: 'Una XOR controlada por C-1: si C-1 = 0 suma y pasa Bn tal cual; si C-1 = 1 resta e invierte Bn.' },
        { id: 'fc-21-6', front: 'Sumador con carry anticipado vs. carry en serie', back: 'El anticipado calcula los carry en paralelo (de forma anticipada), independiza el retardo de la cantidad de bits y es más veloz; el de serie acumula retardo FA por FA.' }
      ],
    },

    // ===================================================================
    // UNIDAD 6 — Circuitos secuenciales
    // ===================================================================
    {
      id: '22', unit: '6', title: 'Biestables: el latch RS y el biestable D',
      criollo: 'Acá arrancan los circuitos con memoria, che. Hasta ahora la salida dependía solo de las entradas; ahora va a depender también de lo que pasó antes. El biestable es el ladrillito que guarda un bit, y de ahí salen el latch RS y el biestable D. Rico.',
      blocks: [
        { type: 'h3', text: 'Combinacionales vs. secuenciales' },
        { type: 'p', text: 'Hasta ahora vimos circuitos <strong>combinacionales</strong>: la salida depende únicamente de los valores en las entradas. No son capaces de memorizar resultados. Por ejemplo, en una compuerta OR la salida $S$ es una función que depende solo de las entradas $A$ y $B$.' },
        { type: 'math', latex: 'S = f(A, B)', display: true },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-combinacional-or-simbolo-p01.png', alt: 'Símbolo de una compuerta OR como ejemplo de circuito combinacional sin memoria.', caption: 'Una OR común, sin memoria: la salida depende solo de las entradas.' },
        { type: 'p', text: 'Un circuito <strong>secuencial</strong>, en cambio, es aquel en el que su salida depende tanto del estado actual de la entrada como del estado anterior. Para esto usan un <strong>lazo de retroalimentación</strong>, lo que les permite guardar información (bits). En el ejemplo de abajo, la salida $S$ depende tanto de la entrada $A$ como del valor anterior de su salida $S$.' },
        { type: 'math', latex: 'S_{n+1} = f(A, S_n)', display: true },
        { type: 'ul', items: [
          '$S_n$: estado actual de la salida.',
          '$S_{n+1}$: estado futuro de la salida (depende del actual).'
        ] },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-secuencial-realimentacion-or-p01.png', alt: 'Compuerta OR con la salida realimentada a una de sus entradas, ilustrando un circuito secuencial.', caption: 'Acá la salida se realimenta: eso ya es secuencial (tiene memoria).' },
        { type: 'h3', text: 'Sincrónicos, asincrónicos y la señal de reloj' },
        { type: 'p', text: 'Los circuitos secuenciales pueden ser sincrónicos o asincrónicos. Los <strong>sincrónicos</strong> tienen todos sus elementos sincronizados mediante una señal de <strong>reloj (clock)</strong>, que es la que les permite cambiar de estado. La señal de clock es una señal cuadrada periódica (un tren de pulsos) que toma valor alto y bajo. Los <strong>asincrónicos</strong>, en cambio, no dependen del reloj: en cuanto reciben un cambio en sus entradas, cambian su estado.' },
        { type: 'h3', text: 'Flancos del reloj' },
        { type: 'p', text: 'En la señal de clock se distinguen dos momentos clave, los <strong>flancos</strong> (transiciones o bordes): el flanco <strong>ascendente</strong> (transición de 0 a 1) y el flanco <strong>descendente</strong> (transición de 1 a 0). Esto vale para todos los pulsos del clock.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-flancos-clock-cronograma-p03.png', alt: 'Cronograma de la señal de reloj señalando el flanco ascendente y el descendente.', caption: 'Flanco ascendente y descendente, los momentos clave del reloj.' },
        { type: 'h3', text: 'Biestable: latch y flip-flop' },
        { type: 'p', text: 'Los <strong>biestables</strong> son los elementos más básicos de los circuitos secuenciales: son la memoria más chica, capaz de mantener o almacenar un bit. Como su nombre lo indica, pueden tomar dos estados estables: 0 y 1. Dentro de los biestables se diferencian dos tipos: <strong>latch</strong> y <strong>flip-flop</strong>.' },
        { type: 'ul', items: [
          'Un <strong>latch</strong> es un elemento de memoria de un bit que cambia de estado cuando cambian sus entradas (idealmente). Si tiene una entrada de control (habilitación o enable), solo cambia mientras esté habilitado. Por eso se dice que cambian por <strong>nivel</strong> (cuando la habilitación está en 1 o nivel alto). Se suelen usar en circuitos asincrónicos.',
          'Un <strong>flip-flop</strong> es un elemento de memoria de un bit que cambia de estado según la señal del reloj, por flanco ascendente o descendente. Esto es más conveniente que el latch, porque cambiar solo en el flanco resuelve problemas de estados transitorios inestables. Se usan en circuitos sincrónicos.'
        ] },
        { type: 'callout', tone: 'info', text: 'Se diferenciarán cuatro tipos de biestables según su funcionamiento: SR, D, JK y T. En esta sección vemos el SR y el D; el JK y el T quedan para más adelante.' },
        { type: 'h3', text: 'Latch SR (Set – Reset)' },
        { type: 'p', text: 'El latch SR es un circuito que en su estado <strong>SET</strong> ("setea") le asigna un 1 a la salida, en su estado <strong>RESET</strong> ("resetea") le asigna un 0, y en otro caso retiene el valor de su salida. Se arma con dos compuertas <strong>NOR cruzadas</strong> (también se puede plantear con NAND). Tiene entradas $R$ (reset) y $S$ (set), y salidas $Q$ y $\\overline{Q}$.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-rs-nor-circuito-p03.png', alt: 'Diagrama lógico interno de un biestable RS con dos compuertas NOR cruzadas, entradas R y S y salidas Q y Q negada.', caption: 'El RS por dentro: dos NOR cruzadas, el biestable más básico.' },
        { type: 'p', text: 'Repasando la NOR: si alguna de sus entradas está en 1, la salida es 0; y si ambas entradas son 0, la salida es 1. Con eso analizamos cada caso:' },
        { type: 'ul', items: [
          'Con $S=0$ y $R=0$: el estado futuro $Q_{n+1}$ es igual a $Q_n$ (el estado inicial). O sea, <strong>mantiene</strong>.',
          'Con $S=0$ y $R=1$: la salida queda en 0 ($Q_{n+1}=0$), sin importar el valor inicial. <strong>Resetea</strong>.',
          'Con $S=1$ y $R=0$: la salida queda en 1 ($Q_{n+1}=1$), sin importar el valor inicial. <strong>Setea</strong>.',
          'Con $S=1$ y $R=1$: ambas NOR tienen una entrada en 1, así que las dos salidas quedan en 0; $Q$ y $\\overline{Q}$ valen lo mismo.'
        ] },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-rs-nor-set-p05.png', alt: 'Biestable RS con NOR mostrando R=0, S=1 que lleva a Q=1.', caption: 'S=1 setea: Q se va a 1.' },
        { type: 'callout', tone: 'warning', text: 'Como Q y Q negada deben ser complementarias (si una es 0, la otra debe ser 1), el caso S=1 y R=1 es el estado PROHIBIDO: las dos salidas quedan en 0 y eso no es válido. En la tabla se marca con una X.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-rs-nor-prohibido-p05.png', alt: 'Biestable RS con NOR mostrando R=1 y S=1 simultáneos con Q y Q negada en 0, estado prohibido.', caption: 'R=1 y S=1 juntos: el estado prohibido.' },
        { type: 'table', caption: 'Tabla de verdad reducida del latch SR', headers: ['S', 'R', 'Q(n+1)'], rows: [
          ['0', '0', 'Q(n)'],
          ['0', '1', '0'],
          ['1', '0', '1'],
          ['1', '1', 'X']
        ] },
        { type: 'p', text: 'A partir de la tabla se simplifica y se obtiene la ecuación característica del biestable SR:' },
        { type: 'math', latex: 'Q_{n+1} = S + \\overline{R} \\cdot Q_n', display: true },
        { type: 'callout', tone: 'info', text: 'La ecuación característica sale de simplificar la tabla de verdad mediante mapas de Karnaugh, la herramienta que vimos en la unidad de minimización lógica.' },
        { type: 'h3', text: 'Latch SR con habilitación (Latch Enable)' },
        { type: 'p', text: 'Al circuito anterior se le agrega la <strong>habilitación</strong> o Latch Enable ($LE$), una entrada de control que indica si puede o no cambiar de estado. Cuando $LE=1$ (nivel alto), permite el cambio según el valor de las entradas. Cuando $LE=0$, no importa el valor de $R$ y $S$: la salida mantiene su estado.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-rs-clock-circuito-p07.png', alt: 'Circuito del biestable RS con reloj, dos NAND de entrada gobernadas por la habilitación alimentando un latch RS con NOR.', caption: 'El RS con habilitación: solo cambia cuando la habilitación lo permite.' },
        { type: 'table', caption: 'Tabla de verdad reducida del latch SR con habilitación', headers: ['LE', 'S', 'R', 'Q(n+1)'], rows: [
          ['0', 'X', 'X', 'Q(n)'],
          ['1', '0', '0', 'Q(n)'],
          ['1', '0', '1', '0'],
          ['1', '1', '0', '1'],
          ['1', '1', '1', 'X']
        ] },
        { type: 'h3', text: 'Latch D (Data) con habilitación' },
        { type: 'p', text: 'El latch D recibe su nombre de su entrada de datos. Se usa para almacenar datos (bits de información). En el fondo es un <strong>RS con habilitación pero con una sola entrada de dato $D$</strong>: a $S$ le va $D$ y a $R$ le va $\\overline{D}$ (vía un inversor). Así se <strong>evita el estado prohibido</strong>, porque $S$ y $R$ nunca pueden valer 1 al mismo tiempo.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-d-latch-circuito-p09.png', alt: 'Circuito interno del biestable D tipo latch, con inversor en D, dos compuertas habilitadas y un latch de NOR cruzadas.', caption: 'El D por dentro: un RS con habilitación pero una sola entrada de dato.' },
        { type: 'ul', items: [
          'Si $D=0$, entonces $S=0$ y $R=1$, por lo que la salida será 0, sin importar el estado inicial.',
          'Si $D=1$, entonces $S=1$ y $R=0$, por lo que la salida será 1, sin importar el estado inicial.'
        ] },
        { type: 'p', text: 'O sea, cuando está habilitado, la salida <strong>sigue a $D$</strong>.' },
        { type: 'table', caption: 'Tabla de verdad reducida del latch D con habilitación', headers: ['LE', 'D', 'Q(n+1)'], rows: [
          ['0', 'X', 'Q(n)'],
          ['1', '0', '0'],
          ['1', '1', '1']
        ] },
        { type: 'p', text: 'Simplificando la tabla (otra vez con mapas de Karnaugh) se obtiene la ecuación característica del biestable D, la más simple de todas:' },
        { type: 'math', latex: 'Q_{n+1} = D', display: true },
        { type: 'h3', text: 'Flip-flop D maestro – esclavo' },
        { type: 'p', text: 'Este flip-flop se compone de <strong>dos latches D en cascada</strong> con el reloj invertido entre ellos. Uno es el <strong>maestro</strong> (recibe el dato de entrada) y le pasa el valor al <strong>esclavo</strong>, que a su salida muestra el dato. Esta estructura elimina condiciones transitorias inestables de los circuitos vistos hasta acá.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-d-maestro-esclavo-circuito-p11.png', alt: 'Estructura maestro-esclavo de dos latches D en cascada con el reloj e inversor que controla las habilitaciones.', caption: 'Maestro-esclavo: dos latches D en cascada con el clock invertido entre ellos.' },
        { type: 'ul', items: [
          'Recién cuando el clock está en 1 se habilita el maestro, que toma el dato $D$ y lo deja en su salida (y por lo tanto en la entrada del esclavo).',
          'Cuando el clock pasa a 0, la NOT entrega un 1 a la habilitación del esclavo, que recién entonces puede cambiar y muestra el dato a la salida.'
        ] },
        { type: 'p', text: 'En el diagrama temporal se ve que, aunque la entrada cambie en un instante, el cambio en la salida $Q_e$ recién se aprecia cuando llega la transición descendente próxima. Cabe destacar que esta conexión no es la única forma de lograr este funcionamiento, ni la óptima.' },
        { type: 'h3', text: 'Flip-flop D por flanco' },
        { type: 'p', text: 'Según su configuración, se pueden tener dos tipos de flip-flop D por flanco: por <strong>flanco descendente</strong> o por <strong>flanco ascendente</strong> del clock. En el símbolo lógico, la entrada dinámica (a la que se conecta el clock) se indica con un <strong>triángulo</strong>; si además lleva un <strong>círculo (burbuja)</strong> en el CLK, es por flanco descendente. Esta distinción del símbolo vale para todos los tipos de flip-flop.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-flip-flop-d-simbolos-flancos-p13.png', alt: 'Dos símbolos del flip-flop D, uno disparado por flanco descendente (con burbuja en el reloj) y otro por flanco ascendente.', caption: 'Flip-flop D: por flanco descendente (con burbujita) y por flanco ascendente.' },
        { type: 'table', caption: 'Tabla de verdad reducida del flip-flop D por flanco (descendente)', headers: ['CLK', 'D', 'Q(n+1)'], rows: [
          ['0', 'X', 'Q(n)'],
          ['1', 'X', 'Q(n)'],
          ['flanco descendente', '0', '0'],
          ['flanco descendente', '1', '1']
        ] }
      ],
      quiz: {
        tf: [
          { id: 'tf-22-1', q: 'En un circuito combinacional la salida depende únicamente de los valores de las entradas.', a: true, explain: 'Exacto: el combinacional no tiene memoria, su salida es función solo de las entradas actuales.' },
          { id: 'tf-22-2', q: 'Un circuito secuencial usa un lazo de retroalimentación y puede guardar información.', a: true, explain: 'Su salida depende del estado actual de la entrada y del estado anterior, gracias a la realimentación.' },
          { id: 'tf-22-3', q: 'En el latch SR con NOR, el estado con S=1 y R=1 es un estado válido y recomendado.', a: false, explain: 'Es el estado PROHIBIDO: Q y Q negada quedan ambas en 0, y deberían ser complementarias.' },
          { id: 'tf-22-4', q: 'El biestable D evita el estado prohibido del SR porque a R le llega D negado.', a: true, explain: 'El D es un RS con habilitación con una sola entrada: a S va D y a R va D negado, así S y R nunca valen 1 a la vez.' },
          { id: 'tf-22-5', q: 'En el flip-flop D, una burbuja (círculo) en la entrada de reloj indica disparo por flanco ascendente.', a: false, explain: 'La burbuja indica flanco descendente. Sin burbuja, es por flanco ascendente.' }
        ],
        mc: [
          { id: 'mc-22-1', q: 'En el latch SR con NOR, ¿qué pasa con S=0 y R=0?', options: ['Setea: Q=1', 'Resetea: Q=0', 'Mantiene el estado anterior (Q siguiente = Q actual)', 'Es el estado prohibido'], correctIndex: 2, explain: 'Con ambas entradas en 0, el estado futuro Q(n+1) es igual a Q(n): mantiene.' },
          { id: 'mc-22-2', q: '¿Cuál es la ecuación característica del biestable D?', options: ['Q siguiente = D', 'Q siguiente = S + R negado por Q', 'Q siguiente = D negado', 'Q siguiente = Q anterior'], correctIndex: 0, explain: 'La más simple de todas: la salida sigue al dato, Q(n+1) = D.' },
          { id: 'mc-22-3', q: '¿Qué diferencia a un flip-flop de un latch?', options: ['El flip-flop cambia por nivel y el latch por flanco', 'El flip-flop cambia según el flanco del reloj y el latch por nivel de la habilitación', 'El flip-flop no tiene memoria', 'No hay ninguna diferencia'], correctIndex: 1, explain: 'El flip-flop cambia por flanco del clock (resuelve estados transitorios); el latch cambia por nivel mientras esté habilitado.' },
          { id: 'mc-22-4', q: 'La estructura maestro-esclavo del flip-flop D se arma con...', options: ['Dos compuertas NOR cruzadas', 'Dos latches D en cascada con el reloj invertido entre ellos', 'Un latch SR y un inversor', 'Tres flip-flops en serie'], correctIndex: 1, explain: 'Son dos latches D en cascada, maestro y esclavo, con el clock invertido entre ambos para controlar el cambio.' }
        ]
      },
      flashcards: [
        { id: 'fc-22-1', front: 'Combinacional vs. secuencial', back: 'Combinacional: la salida depende solo de las entradas actuales (sin memoria). Secuencial: depende también del estado anterior, mediante un lazo de retroalimentación (con memoria).' },
        { id: 'fc-22-2', front: 'Flancos del reloj', back: 'Flanco ascendente: transición de 0 a 1. Flanco descendente: transición de 1 a 0. Son los momentos en que un flip-flop puede cambiar de estado.' },
        { id: 'fc-22-3', front: 'Latch SR con NOR: los cuatro casos', back: 'S=0 R=0: mantiene. S=0 R=1: resetea (Q=0). S=1 R=0: setea (Q=1). S=1 R=1: estado PROHIBIDO (Q y Q negada quedan en 0).' },
        { id: 'fc-22-4', front: 'Ecuación característica del SR', back: 'Q siguiente = S + (R negado) por Q anterior.' },
        { id: 'fc-22-5', front: 'Biestable D: por qué no tiene estado prohibido', back: 'Es un RS con habilitación de una sola entrada D: a S va D y a R va D negado (vía inversor). Así S y R nunca valen 1 a la vez. Su ecuación es Q siguiente = D.' },
        { id: 'fc-22-6', front: 'Maestro-esclavo', back: 'Dos latches D en cascada con el reloj invertido entre ellos. El maestro toma el dato; el esclavo lo muestra a la salida. Elimina condiciones transitorias inestables.' },
        { id: 'fc-22-7', front: 'Símbolo del flip-flop D por flanco', back: 'La entrada de reloj lleva un triángulo. Si además tiene burbuja (círculo) en el CLK, es por flanco descendente; sin burbuja, por flanco ascendente.' }
      ]
    },
    {
      id: '23', unit: '6', title: 'Biestables JK y T, excitación y diagramas de estado',
      criollo: 'Acá viene la posta: el JK es el SR pero arreglado, sin el estado prohibido al pedo. Y cuando le metés J=1 y K=1 conmuta solo, que es lo que aprovecha el T. Después le sumamos los diagramas de estado y las tablas de excitación, que son la tabla dada vuelta: en vez de mirar las entradas para saber la salida, mirás la transición que querés y averiguás qué entradas la producen.',
      blocks: [
        { type: 'h3', text: 'Flip Flop JK: el SR pero sin el estado prohibido' },
        { type: 'p', text: 'El flip flop <strong>JK</strong> recibe su nombre por Jack Kilby, ingeniero e inventor de los circuitos integrados. Es análogo al flip flop <strong>SR</strong>, pero resuelve el cambio de estado cuando ambas entradas valen 1, ese caso que en el SR era estado prohibido.' },
        { type: 'p', text: 'A partir del flip flop SR es posible armar el JK: se trata de un <strong>RS realimentado</strong>, donde las salidas Q y Q negada vuelven a las compuertas AND de entrada. Esa realimentación es justo lo que elimina el estado prohibido.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-jk-circuito-p15.png', alt: 'Circuito del biestable JK con dos AND de entrada realimentadas desde Q y Q negada hacia un latch RS con reloj.', caption: 'El JK por dentro: un RS realimentado que elimina el estado prohibido.' },
        { type: 'p', text: 'Las entradas son <strong>J</strong> (cumple el rol de Set) y <strong>K</strong> (cumple el rol de Reset). De hecho, J es equivalente a S y K es equivalente a R. Su funcionamiento:' },
        { type: 'ul', items: [
          'Con J=0 y K=0, <strong>mantiene</strong> el estado (Q siguiente = Q actual).',
          'Con J=1 y K=0, <strong>setea</strong> (Q siguiente = 1).',
          'Con J=0 y K=1, <strong>resetea</strong> (Q siguiente = 0).',
          'Con J=1 y K=1, <strong>conmuta</strong> (toggle): la salida se invierte, Q siguiente = Q negada actual.'
        ] },
        { type: 'p', text: 'Acá está la gracia: el SR con S=1 y R=1 era estado prohibido, pero el JK aprovecha ese caso para conmutar. Por eso se lo considera una mejora del SR.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-jk-simbolo-p15.png', alt: 'Símbolo de bloque del biestable JK con entradas J, K y reloj, y salidas Q y Q negada.', caption: 'El símbolo del JK.' },
        { type: 'p', text: 'El símbolo mostrado corresponde al JK por flanco ascendente. Si fuera por flanco descendente, bastaría con agregar el círculo de negación en la entrada dinámica (la del reloj), tal como se hace con el flip flop D.' },
        { type: 'table', caption: 'Tabla de verdad reducida del biestable JK', headers: ['J', 'K', 'Q siguiente'], rows: [
          ['0', '0', 'Q actual (mantiene)'],
          ['0', '1', '0 (resetea)'],
          ['1', '0', '1 (setea)'],
          ['1', '1', 'Q negada (conmuta)']
        ] },
        { type: 'p', text: 'Simplificando la tabla de verdad se obtiene la ecuación característica del JK:' },
        { type: 'math', latex: 'Q_{n+1} = J \\cdot \\overline{Q_n} + \\overline{K} \\cdot Q_n', display: true },
        { type: 'h3', text: 'JK por flanco ascendente y descendente' },
        { type: 'p', text: 'Como todo flip flop, el JK cambia de estado según la señal de reloj. Según la configuración, dispara por flanco ascendente (subida del clock) o por flanco descendente (bajada). El cronograma deja ver cómo Q solo cambia en el flanco correspondiente, no en cualquier momento.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-flip-flop-jk-cronograma-ascendente-p19.png', alt: 'Cronograma del flip flop JK por flanco ascendente con señales de reloj, J, K y Q.', caption: 'Cronograma del JK por flanco ascendente.' },
        { type: 'h3', text: 'Flip Flop T: conmutar o mantener' },
        { type: 'p', text: 'El flip flop <strong>T</strong> recibe su nombre del inglés <em>toggle</em>, es decir conmutar o alternar. Mantiene o invierte su estado, nada más. Se arma <strong>a partir de un flip flop JK</strong>, uniendo las entradas J y K a una sola entrada que llamamos T.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-t-simbolo-jk-p17.png', alt: 'Símbolo del biestable T formado a partir de un JK, con J y K unidos a la entrada T y el reloj.', caption: 'El T armado con un JK: J y K juntas hacen de T.' },
        { type: 'p', text: 'Al unir J y K, los únicos casos posibles son T=0 (que en el JK equivale a J=0, K=0) y T=1 (que equivale a J=1, K=1). Por eso:' },
        { type: 'ul', items: [
          'Con T=0, <strong>mantiene</strong> su estado (Q siguiente = Q actual).',
          'Con T=1, <strong>conmuta</strong>: alterna o invierte su estado (Q siguiente = Q negada actual).'
        ] },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-t-simbolo-p17.png', alt: 'Símbolo de bloque del biestable T con entrada T y reloj y salidas Q y Q negada.', caption: 'El símbolo del T.' },
        { type: 'table', caption: 'Tabla de verdad reducida del biestable T', headers: ['T', 'Q siguiente'], rows: [
          ['0', 'Q actual (mantiene)'],
          ['1', 'Q negada (conmuta)']
        ] },
        { type: 'p', text: 'Su ecuación característica es:' },
        { type: 'math', latex: 'Q_{n+1} = \\overline{T} \\cdot Q_n + T \\cdot \\overline{Q_n}', display: true },
        { type: 'h3', text: 'Diagramas de estado: pensar en transiciones' },
        { type: 'p', text: 'Hasta ahora trabajamos con las tablas de funcionamiento (entradas hacia salida). A veces es más cómodo trabajar al revés: con los <strong>diagramas y tablas de transiciones</strong>, que plantean qué pasa según el estado actual Q actual y el estado siguiente Q siguiente. A partir de la transición que querés lograr, averiguás qué valor deberían tener las entradas.' },
        { type: 'p', text: 'El diagrama de transiciones del <strong>T</strong> tiene los cuatro casos de Q actual a Q siguiente, indicando qué valor de T los produce: cuando el estado se mantiene (0 a 0, o 1 a 1) hace falta T=0, y cuando cambia (0 a 1, o 1 a 0) hace falta T=1.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-t-diagrama-estado-p21.png', alt: 'Diagrama de transiciones del biestable T con los cuatro casos de Qn a Qn+1 indicando el valor de T en cada uno.', caption: 'Las transiciones del T: T=1 conmuta, T=0 mantiene.' },
        { type: 'p', text: 'El diagrama de transiciones del <strong>JK</strong> es parecido, pero aparecen las <strong>condiciones de indiferencia</strong> (marcadas con X), porque una misma transición se puede lograr con más de una combinación de J y K.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-jk-diagrama-estado-p22.png', alt: 'Diagrama de transiciones del biestable JK con los cuatro casos de Qn a Qn+1 indicando los valores de J y K con condiciones de indiferencia.', caption: 'Las transiciones del JK, con sus condiciones de indiferencia (X).' },
        { type: 'h3', text: 'Tablas de excitación' },
        { type: 'p', text: 'Las <strong>tablas de excitación</strong> (o de transiciones) indican qué valores deben tener las entradas (J, K, T, D) para producir cada transición de Q actual a Q siguiente. Son la herramienta clave cuando diseñás un circuito a partir del comportamiento que querés.' },
        { type: 'table', caption: 'Tabla de excitación del biestable T', headers: ['Q actual', 'Q siguiente', 'T'], rows: [
          ['0', '0', '0'],
          ['0', '1', '1'],
          ['1', '0', '1'],
          ['1', '1', '0']
        ] },
        { type: 'table', caption: 'Tabla de excitación del biestable D', headers: ['Q actual', 'Q siguiente', 'D'], rows: [
          ['0', '0', '0'],
          ['0', '1', '1'],
          ['1', '0', '0'],
          ['1', '1', '1']
        ] },
        { type: 'table', caption: 'Tabla de excitación del biestable JK (X = indiferencia)', headers: ['Q actual', 'Q siguiente', 'J', 'K'], rows: [
          ['0', '0', '0', 'X'],
          ['0', '1', '1', 'X'],
          ['1', '0', 'X', '1'],
          ['1', '1', 'X', '0']
        ] },
        { type: 'callout', tone: 'info', text: 'De dónde sale la X: cuando Q actual = 0 y Q siguiente = 0, en la tabla ampliada del JK hay dos filas que cumplen. En ambas J=0, pero en una K=0 y en la otra K=1. Como K puede tomar cualquiera de los dos valores, se anota K=X (indiferencia).' },
        { type: 'h3', text: 'Armar un JK a partir de un flip flop D' },
        { type: 'p', text: 'Se puede construir un flip flop JK partiendo de un flip flop D más algo de lógica. La idea: a la tabla del JK se le agrega una columna D, que se completa mirando cada transición de Q actual a Q siguiente y usando la tabla de transiciones del D.' },
        { type: 'p', text: 'Simplificando la columna D obtenida (con variables J, K y Q actual) se llega a:' },
        { type: 'math', latex: 'D = J \\cdot \\overline{Q_n} + \\overline{K} \\cdot Q_n', display: true },
        { type: 'p', text: 'Que es exactamente la ecuación característica del JK. Con esa expresión se arma la lógica (AND, OR e inversor) que alimenta la entrada D del flip flop, y listo: tenés un JK construido con un D.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-jk-mapa-k-excitacion-p24.png', alt: 'Mapa de Karnaugh de excitación del biestable JK con las agrupaciones marcadas.', caption: 'El mapa de Karnaugh de excitación del JK.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-biestable-jk-construccion-flip-flop-d-p24.png', alt: 'Circuito que construye un biestable JK a partir de un flip-flop D, con AND, OR e inversor formando la entrada D.', caption: 'Cómo armar un JK usando un flip-flop D y algo de lógica.' }
      ],
      quiz: {
        tf: [
          { id: 'tf-23-1', q: 'El flip flop JK elimina el estado prohibido del SR aprovechando el caso J=1, K=1 para conmutar la salida.', a: true, explain: 'Donde el SR tenía estado prohibido (S=1, R=1), el JK hace toggle: invierte la salida.' },
          { id: 'tf-23-2', q: 'En el JK, con J=0 y K=0 la salida se invierte en cada flanco de reloj.', a: false, explain: 'Con J=0 y K=0 el JK mantiene su estado. El que invierte (conmuta) es J=1, K=1.' },
          { id: 'tf-23-3', q: 'El flip flop T se arma a partir de un JK uniendo las entradas J y K en una sola entrada T.', a: true, explain: 'Al unir J y K, solo quedan T=0 (mantiene) y T=1 (conmuta).' },
          { id: 'tf-23-4', q: 'En la tabla de excitación del JK, la X representa una condición de indiferencia: la entrada puede valer 0 o 1.', a: true, explain: 'Como una misma transición se logra con más de una combinación, esa entrada queda indiferente y se marca con X.' },
          { id: 'tf-23-5', q: 'Una tabla de excitación parte de las entradas para calcular la salida siguiente.', a: false, explain: 'Es al revés: parte de la transición de Q actual a Q siguiente para averiguar qué entradas la producen.' }
        ],
        mc: [
          { id: 'mc-23-1', q: 'En el flip flop JK, ¿qué hace la combinación J=1, K=1 en cada flanco de reloj?', options: ['Mantiene el estado', 'Setea la salida en 1', 'Resetea la salida en 0', 'Conmuta: invierte la salida'], correctIndex: 3, explain: 'J=1, K=1 produce el toggle: Q siguiente = Q negada actual.' },
          { id: 'mc-23-2', q: 'Por dentro, el JK es esencialmente:', options: ['Un latch D con habilitación', 'Un RS realimentado, con Q y Q negada volviendo a las AND de entrada', 'Dos compuertas OR en serie', 'Un sumador completo'], correctIndex: 1, explain: 'La realimentación de las salidas hacia las AND de entrada es lo que elimina el estado prohibido.' },
          { id: 'mc-23-3', q: 'En el flip flop T, ¿qué pasa con T=0?', options: ['Conmuta la salida', 'Mantiene el estado', 'Setea en 1', 'Es un estado prohibido'], correctIndex: 1, explain: 'Con T=0 mantiene (equivale a J=0, K=0 del JK). Con T=1 conmuta.' },
          { id: 'mc-23-4', q: 'En la tabla de excitación del JK, para la transición Q actual = 1 a Q siguiente = 0, ¿qué valores corresponden?', options: ['J=0, K=0', 'J=1, K=X', 'J=X, K=1', 'J=X, K=0'], correctIndex: 2, explain: 'Para pasar de 1 a 0 hace falta K=1, y J queda indiferente (X).' },
          { id: 'mc-23-5', q: 'Para construir un JK a partir de un flip flop D, ¿qué expresión alimenta la entrada D?', options: ['D = T', 'D = J por Q negada actual, mas K negada por Q actual', 'D = J mas K', 'D = Q actual'], correctIndex: 1, explain: 'Es exactamente la ecuación característica del JK, que se arma con AND, OR e inversor.' }
        ]
      },
      flashcards: [
        { id: 'fc-23-1', front: '¿Qué problema del SR resuelve el flip flop JK?', back: 'Elimina el estado prohibido (S=1, R=1). El JK aprovecha ese caso (J=1, K=1) para conmutar la salida en vez de quedar indefinido.' },
        { id: 'fc-23-2', front: 'JK: ¿qué hace cada combinación de J y K?', back: 'J=0,K=0 mantiene; J=1,K=0 setea (Q=1); J=0,K=1 resetea (Q=0); J=1,K=1 conmuta (invierte la salida).' },
        { id: 'fc-23-3', front: 'Por dentro, ¿qué es el JK?', back: 'Un RS realimentado: las salidas Q y Q negada vuelven a las compuertas AND de entrada. Esa realimentación elimina el estado prohibido.' },
        { id: 'fc-23-4', front: '¿Cómo se arma un flip flop T y qué hace?', back: 'Se arma a partir de un JK uniendo J y K en una sola entrada T. Con T=1 conmuta (invierte) y con T=0 mantiene el estado.' },
        { id: 'fc-23-5', front: '¿Qué es una tabla de excitación?', back: 'Indica qué valores deben tener las entradas (J, K, T, D) para producir cada transición de Q actual a Q siguiente. Es la tabla de verdad pensada al revés.' },
        { id: 'fc-23-6', front: '¿Qué significa la X en la tabla de excitación del JK?', back: 'Condición de indiferencia: esa entrada puede valer 0 o 1 sin afectar la transición, porque varias combinaciones producen el mismo cambio de estado.' },
        { id: 'fc-23-7', front: '¿Cómo se construye un JK con un flip flop D?', back: 'Se completa la columna D según las transiciones, se simplifica y queda D = J por Q negada actual + K negada por Q actual. Esa lógica (AND, OR, inversor) alimenta la entrada D.' },
        { id: 'fc-23-8', front: 'Diagrama de transiciones del T: ¿cuándo T=1 y cuándo T=0?', back: 'T=1 cuando el estado cambia (0 a 1 o 1 a 0). T=0 cuando el estado se mantiene (0 a 0 o 1 a 1).' },
        { id: 'fc-23-9', front: 'Tabla de excitación del D: ¿qué valor toma D?', back: 'D siempre vale lo mismo que Q siguiente, porque la ecuación característica del D es Q siguiente = D.' }
      ],
    },
    {
      id: '24', unit: '6', title: 'Contadores síncronos',
      criollo: 'Un contador síncrono es un montón de flip-flops colgados todos del mismo reloj, así cambian de estado al mismo tiempo y recorren una secuencia. El truco está en el método: armás el diagrama de estados, la tabla de transición con J y K, minimizás con Karnaugh y dibujás el circuito. Re mecánico una vez que le agarrás la mano.',
      blocks: [
        { type: 'p', text: 'Antes vimos los flip-flops, que son los elementos básicos de los circuitos secuenciales sincrónicos: su comportamiento, sus tablas de funcionamiento y de transición. Acá vemos una aplicación que conecta varios entre sí.' },
        { type: 'callout', tone: 'info', text: 'Cambio de notación: como ahora trabajamos con más de un flip-flop, Qn ya no indica el tiempo. Llamamos Qn al estado actual del flip-flop número n, y Qn+ (Q con un más) al estado futuro de ese mismo flip-flop n.' },
        { type: 'h3', text: '¿Qué es un contador?' },
        { type: 'p', text: 'Un <strong>contador</strong> es un dispositivo de memoria que cambia de estado según una secuencia establecida. Es decir, una combinación de biestables conectados de forma tal que pueda cumplir con esa secuencia.' },
        { type: 'p', text: 'La cantidad de estados por los que pasa el contador se llama <strong>módulo</strong>: es la cantidad de pulsos que debe recibir el biestable en su entrada de activación (dinámica) para lograr una secuencia completa. La cantidad de estados y la secuencia quedan determinadas por la cantidad de biestables y la forma en la que se conectan.' },
        { type: 'h3', text: 'Contador síncrono' },
        { type: 'p', text: 'Según el modo en que se aplique la señal de reloj, los contadores se clasifican en sincrónicos o asincrónicos. En los <strong>contadores síncronos</strong>, todos los flip-flops se conectan a una misma señal de clock, de forma que todos pueden cambiar de estado en un mismo momento.' },
        { type: 'h3', text: 'Contador síncrono de 3 bits' },
        { type: 'p', text: 'Vamos a implementar un contador síncrono de 3 bits que arranca en 000, incrementa la cuenta de a uno hasta llegar a 111 y luego vuelve a 000.' },
        { type: 'h3', text: '1) Diagrama de estados' },
        { type: 'p', text: 'El diagrama de estados muestra la progresión de estados (000, 001, …, 111) por los que pasa el contador con cada pulso de clock, y las transiciones indicadas con flechas.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-contador-diagrama-estado-octal-p02.png', alt: 'Diagrama de estados circular de un contador de 3 bits que recorre 000 a 111 y vuelve a 000.', caption: 'Diagrama de estados del contador binario de 3 bits.' },
        { type: 'p', text: 'Como es un contador de 3 bits, la cantidad máxima de estados es $2^3 = 8$. Como pasa por los 8, se dice que el módulo del contador es ocho ($M = 8$).' },
        { type: 'h3', text: '2) Tabla de estados (actual y futuro)' },
        { type: 'p', text: 'El <strong>estado futuro</strong> es el estado al que el contador pasa, al aplicar un pulso de reloj, desde su estado actual. El primer bit corresponde al $Q$ del flip-flop 2 ($Q_2$), el segundo al del flip-flop 1 ($Q_1$) y el tercero al del flip-flop 0 ($Q_0$). Lo mismo con los bits del estado futuro: $Q_2^+$, $Q_1^+$ y $Q_0^+$. Por ejemplo, si el estado actual es 000, el futuro será el siguiente del diagrama, es decir 001.' },
        { type: 'table', caption: 'Tabla de estados del contador de 3 bits: estado actual y estado futuro.', headers: ['Q2', 'Q1', 'Q0', 'Q2+', 'Q1+', 'Q0+'], rows: [['0', '0', '0', '0', '0', '1'], ['0', '0', '1', '0', '1', '0'], ['0', '1', '0', '0', '1', '1'], ['0', '1', '1', '1', '0', '0'], ['1', '0', '0', '1', '0', '1'], ['1', '0', '1', '1', '1', '0'], ['1', '1', '0', '1', '1', '1'], ['1', '1', '1', '0', '0', '0']] },
        { type: 'h3', text: 'Cantidad y tipo de biestables' },
        { type: 'p', text: 'Un flip-flop almacena un bit. Como el contador es de 3 bits, necesitamos 3 flip-flops. Al ser síncrono, todos van conectados a la misma señal de clock. Se puede trabajar con flip-flops JK, D o T (obviamos el RS porque el JK funciona parecido pero sin estados prohibidos).' },
        { type: 'callout', tone: 'info', text: '¿Hay uno mejor? Con flip-flops JK el procedimiento puede ser un poco más largo porque cada uno tiene dos entradas. Con T o D el procedimiento es menor, pero las funciones lógicas y las conexiones pueden ser más complejas. Acá se eligió trabajar con flip-flops JK.' },
        { type: 'h3', text: 'Tabla de excitación (transiciones JK)' },
        { type: 'p', text: 'Para completar las entradas miramos el estado actual y el estado futuro de un mismo flip-flop, y según la tabla de transiciones del JK obtenemos qué valores de $J$ y $K$ se necesitan. La X indica condición indiferente (don\'t care).' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-contador-transicion-estado-actual-futuro-p03.png', alt: 'Transición entre dos estados de un contador, del estado actual al estado futuro.', caption: 'Transición de estado actual a estado futuro.' },
        { type: 'table', caption: 'Tabla de transiciones (excitación) del flip-flop JK.', headers: ['Qn', 'Qn+', 'J', 'K'], rows: [['0', '0', '0', 'X'], ['0', '1', '1', 'X'], ['1', '0', 'X', '1'], ['1', '1', 'X', '0']] },
        { type: 'p', text: 'Por ejemplo, en la primera línea $Q_2 = 0$ y $Q_2^+ = 0$: cuando actual y futuro son ambos cero, $J = 0$ y $K = X$. Aplicando esto a cada flip-flop en cada fila se completa la tabla de estados y entradas.' },
        { type: 'table', caption: 'Tabla de estados y entradas de los flip-flops del contador de 3 bits.', headers: ['Q2', 'Q1', 'Q0', 'Q2+', 'Q1+', 'Q0+', 'J2', 'K2', 'J1', 'K1', 'J0', 'K0'], rows: [['0', '0', '0', '0', '0', '1', '0', 'X', '0', 'X', '1', 'X'], ['0', '0', '1', '0', '1', '0', '0', 'X', '1', 'X', 'X', '1'], ['0', '1', '0', '0', '1', '1', '0', 'X', 'X', '0', '1', 'X'], ['0', '1', '1', '1', '0', '0', '1', 'X', 'X', '1', 'X', '1'], ['1', '0', '0', '1', '0', '1', 'X', '0', '0', 'X', '1', 'X'], ['1', '0', '1', '1', '1', '0', 'X', '0', '1', 'X', 'X', '1'], ['1', '1', '0', '1', '1', '1', 'X', '0', 'X', '0', '1', 'X'], ['1', '1', '1', '0', '0', '0', 'X', '1', 'X', '1', 'X', '1']] },
        { type: 'h3', text: '3) Minimización con mapas de Karnaugh' },
        { type: 'p', text: 'A partir de la tabla se pueden escribir las expresiones de $J$ y $K$, pero conviene minimizarlas con mapas de Karnaugh. Se hace un mapa por cada entrada de cada flip-flop (por cada columna $J$ y cada columna $K$), usando como variables los estados actuales $Q_2$, $Q_1$, $Q_0$.' },
        { type: 'callout', tone: 'info', text: 'Recordá que al agrupar para abarcar todos los unos podés incluir, según convenga, celdas con X. Así las expresiones quedan menos complejas.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-contador-karnaugh-jq2-p06.png', alt: 'Mapa de Karnaugh para la entrada J del flip-flop Q2 con una agrupación marcada.', caption: 'Mapa de Karnaugh para J de Q2.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-contador-karnaugh-kq2-p06.png', alt: 'Mapa de Karnaugh para la entrada K del flip-flop Q2 con una agrupación marcada.', caption: 'Mapa de Karnaugh para K de Q2.' },
        { type: 'p', text: 'Las funciones lógicas obtenidas para cada flip-flop son:' },
        { type: 'math', latex: 'J_2 = Q_1 \\cdot Q_0 \\qquad K_2 = Q_1 \\cdot Q_0', display: true },
        { type: 'math', latex: 'J_1 = Q_0 \\qquad K_1 = Q_0', display: true },
        { type: 'math', latex: 'J_0 = 1 \\qquad K_0 = 1', display: true },
        { type: 'h3', text: '4) Circuito lógico' },
        { type: 'p', text: 'A partir de las funciones lógicas se arma el circuito con los tres flip-flops JK, el reloj común y la compuerta AND que produce $Q_1 \\cdot Q_0$ para las entradas del flip-flop 2.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-contador-circuito-jk-3bits-p07.png', alt: 'Circuito de un contador síncrono de 3 bits con tres flip-flops JK, una compuerta AND y reloj común.', caption: 'Circuito del contador síncrono de 3 bits con flip-flops JK.' },
        { type: 'h3', text: 'Diagrama temporal (cronograma)' },
        { type: 'p', text: 'A partir del circuito (o de las funciones lógicas) se puede armar el diagrama temporal, que muestra cómo se comportan las señales de salida y el clock en el tiempo. Las salidas $Q_2$, $Q_1$ y $Q_0$ van cambiando con cada pulso de reloj.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-contador-cronograma-3bits-p08.png', alt: 'Cronograma del contador de 3 bits con las señales de reloj, Q2, Q1 y Q0.', caption: 'Cronograma del contador de 3 bits.' },
        { type: 'h3', text: 'Contador con secuencia no consecutiva (estados no permitidos)' },
        { type: 'p', text: 'Supongamos que queremos un contador síncrono que siga la secuencia 0, 5, 9, 12 y 2, y vuelva a empezar. A diferencia del anterior, este tiene <strong>estados no permitidos</strong>: combinaciones por las que no pasa (1, 3, 4, 6, 7, 8, 10, 11, 13, 14, 15). Para el diseño se eligen flip-flops JK por flanco descendente, todos con el mismo clock.' },
        { type: 'p', text: 'El mayor número de la secuencia es $12_d = 1100_b$. Como en binario se escribe con al menos 4 bits, cada estado se escribe con 4 bits. Primero se plantea el diagrama de estados en binario (con el decimal como referencia).' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-contador-diagrama-estado-decimal-binario-p09.png', alt: 'Diagramas de estados de un contador de secuencia no consecutiva, en decimal y en binario.', caption: 'Contador de secuencia no consecutiva (decimal y binario).' },
        { type: 'p', text: 'Es un contador cíclico, porque reinicia su secuencia indefinidamente. Su módulo es 5, ya que tras 5 pulsos de reloj la secuencia se reinicia.' },
        { type: 'p', text: 'Se vuelcan los estados en una tabla y, usando la tabla de transiciones del JK, se agregan las entradas $J$ y $K$ de los cuatro flip-flops (uno por cada bit). Los estados por los que el contador no pasa se completan con X (don\'t care), lo que permite agrupaciones de unos más grandes en Karnaugh.' },
        { type: 'table', caption: 'Tabla de estados y entradas del contador de secuencia no consecutiva (0, 5, 9, 12, 2).', headers: ['Q3', 'Q2', 'Q1', 'Q0', 'Q3+', 'Q2+', 'Q1+', 'Q0+', 'J3', 'K3', 'J2', 'K2', 'J1', 'K1', 'J0', 'K0'], rows: [['0', '0', '0', '0', '0', '1', '0', '1', '0', 'X', '1', 'X', '0', 'X', '1', 'X'], ['0', '1', '0', '1', '1', '0', '0', '1', '1', 'X', 'X', '1', '0', 'X', 'X', '0'], ['1', '0', '0', '1', '1', '1', '0', '0', 'X', '0', '1', 'X', '0', 'X', 'X', '1'], ['1', '1', '0', '0', '0', '0', '1', '0', 'X', '1', 'X', '1', '1', 'X', '0', 'X'], ['0', '0', '1', '1', '0', '0', '0', '0', '0', 'X', '0', 'X', 'X', '1', '0', 'X']] },
        { type: 'p', text: 'Si se quisiera, se puede completar la tabla con el resto de los estados, llenándolos con redundancias (don\'t care). Por ejemplo, el estado 1 (0001) iría todo con X, y lo mismo con los demás estados no usados.' },
        { type: 'p', text: 'Haciendo un mapa de Karnaugh por cada entrada (variables $Q_3$, $Q_2$, $Q_1$, $Q_0$) y aprovechando las X, las funciones lógicas obtenidas son:' },
        { type: 'math', latex: 'J_3 = Q_2 \\qquad K_3 = Q_2', display: true },
        { type: 'math', latex: 'J_2 = \\overline{Q_1} \\qquad K_2 = 1', display: true },
        { type: 'math', latex: 'J_1 = Q_3 \\cdot Q_2 \\qquad K_1 = 1', display: true },
        { type: 'math', latex: 'J_0 = \\overline{Q_3} \\cdot \\overline{Q_1} \\qquad K_0 = Q_3', display: true },
        { type: 'callout', tone: 'info', text: 'En Karnaugh a veces hay más de una agrupación válida que abarca todos los unos. Por ejemplo, en vez de J3 = Q2 se podía usar J3 = Q0. Cambia el diseño pero no el comportamiento: el contador igual recorre los estados en el orden pedido.' },
        { type: 'p', text: 'Con esas funciones se arma el circuito con cuatro flip-flops JK por flanco descendente, dos compuertas AND y reloj común, y se obtiene el diagrama temporal correspondiente.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-contador-circuito-jk-4bits-p14.png', alt: 'Circuito de un contador síncrono de 4 bits con cuatro flip-flops JK, dos compuertas AND y reloj común.', caption: 'Circuito del contador síncrono de 4 bits.' },
        { type: 'h3', text: '¿Y si cae en un estado no permitido?' },
        { type: 'p', text: 'Si por ruido el contador cae en un estado no previsto (por ejemplo 0001), conviene que en el siguiente pulso vuelva a la secuencia. Evaluando las funciones con $Q_3 = 0$, $Q_2 = 0$, $Q_1 = 0$, $Q_0 = 1$ se obtiene el estado futuro 0101, que sí pertenece a la secuencia. Verificando con los demás estados no permitidos, en algún momento todos regresan a la secuencia original.' },
        { type: 'callout', tone: 'warning', text: 'Si no fuera así, el contador podría quedarse atrapado en una secuencia no deseada de forma indefinida. Para solventarlo, podría ser necesario agregar algunas compuertas que aseguren el regreso a la secuencia original.' }
      ],
      quiz: {
        tf: [
          { id: 'tf-24-1', q: 'En un contador síncrono todos los flip-flops comparten la misma señal de clock.', a: true, explain: 'Por eso es síncrono: todos los flip-flops cambian de estado en el mismo momento al conectarse a un único clock.' },
          { id: 'tf-24-2', q: 'El módulo de un contador es la cantidad de estados por los que pasa para completar su secuencia.', a: true, explain: 'El módulo es la cantidad de pulsos (estados) necesarios para lograr una secuencia completa. El contador de 3 bits que recorre los 8 estados tiene módulo 8.' },
          { id: 'tf-24-3', q: 'Para diseñar el contador conviene escribir las expresiones de J y K directamente de la tabla, sin minimizarlas.', a: false, explain: 'Conviene minimizar con mapas de Karnaugh, un mapa por cada entrada J y K de cada flip-flop, para obtener expresiones menos complejas.' },
          { id: 'tf-24-4', q: 'En un contador con estados no permitidos, esos estados se completan con X (don\'t care) en los mapas de Karnaugh.', a: true, explain: 'Los estados por los que el contador no pasa se completan con X, lo que permite agrupaciones de unos más grandes y simplifica más las expresiones.' }
        ],
        mc: [
          { id: 'mc-24-1', q: '¿Cuál es el primer paso del método de diseño de un contador síncrono?', options: ['Armar el circuito con los flip-flops', 'Minimizar con mapas de Karnaugh', 'Armar el diagrama de estados con la secuencia deseada', 'Calcular el diagrama temporal'], correctIndex: 2, explain: 'El método arranca planteando el diagrama de estados con la secuencia deseada; recién después se arma la tabla de transición, se minimiza y se dibuja el circuito.' },
          { id: 'mc-24-2', q: 'En la tabla de transiciones del flip-flop JK, si Qn = 1 y Qn+ = 0, ¿qué valores toman J y K?', options: ['J = 0, K = X', 'J = X, K = 1', 'J = 1, K = X', 'J = X, K = 0'], correctIndex: 1, explain: 'Para pasar de 1 a 0 hace falta K = 1 (resetear) y J es indiferente (X).' },
          { id: 'mc-24-3', q: 'En el contador de 3 bits, ¿cuáles son las funciones de J y K del flip-flop 0?', options: ['J0 = Q1 y K0 = Q1', 'J0 = 1 y K0 = 1', 'J0 = Q0 y K0 = Q0', 'J0 = Q1 por Q0 y K0 = Q1 por Q0'], correctIndex: 1, explain: 'El flip-flop menos significativo conmuta en cada pulso, por eso J0 = 1 y K0 = 1 (modo toggle).' },
          { id: 'mc-24-4', q: 'El contador de secuencia 0, 5, 9, 12, 2 que vuelve a empezar es un contador cíclico de módulo:', options: ['16', '4', '5', '8'], correctIndex: 2, explain: 'Pasa por 5 estados y tras 5 pulsos de reloj reinicia la secuencia, por lo que su módulo es 5.' }
        ]
      },
      flashcards: [
        { id: 'fc-24-1', front: '¿Qué es un contador síncrono?', back: 'Un circuito secuencial donde todos los flip-flops comparten el mismo clock y cambian de estado a la vez, recorriendo una secuencia de estados establecida.' },
        { id: 'fc-24-2', front: '¿Qué es el módulo de un contador?', back: 'La cantidad de estados por los que pasa para completar su secuencia (cantidad de pulsos de reloj). Un contador de 3 bits que recorre los 8 estados tiene módulo 8.' },
        { id: 'fc-24-3', front: '¿Cuáles son los 4 pasos del método de diseño?', back: '1) Diagrama de estados con la secuencia. 2) Tabla de transición/excitación: J y K de cada flip-flop según la tabla del JK. 3) Minimizar J y K con mapas de Karnaugh. 4) Armar el circuito con los flip-flops JK y las compuertas.' },
        { id: 'fc-24-4', front: 'Tabla de transiciones del JK: ¿qué J y K se necesitan para cada transición de Qn a Qn+?', back: '0 a 0: J=0, K=X. 0 a 1: J=1, K=X. 1 a 0: J=X, K=1. 1 a 1: J=X, K=0.' },
        { id: 'fc-24-5', front: 'En un contador con estados no permitidos, ¿cómo se completan esos estados en Karnaugh?', back: 'Con X (don\'t care o redundancias). Permite agrupaciones de unos más grandes y simplifica más las expresiones lógicas de J y K.' },
        { id: 'fc-24-6', front: '¿Qué problema puede tener un contador con estados no permitidos y cómo se soluciona?', back: 'Por ruido puede caer en un estado no previsto. Hay que verificar que el estado futuro lo devuelva a la secuencia; si no lo hace, se agregan compuertas que aseguren el regreso a la secuencia original.' }
      ]
    },
    {
      id: '25', unit: '6', title: 'Contadores asíncronos y registros de desplazamiento',
      criollo: 'Acá los flip flops dejan de marchar todos juntos: cada uno le pasa el reloj al siguiente, así que cambian en cadena, como un dominó. De yapa, eso mismo sirve para dividir frecuencias a la mitad en cada etapa. Y después aparecen los registros de desplazamiento, que son básicamente memorias chiquitas que van corriendo los bits con cada pulso.',
      blocks: [
        { type: 'p', text: 'Dependiendo del modo en que se aplique la señal de reloj, los contadores se pueden clasificar en <strong>sincrónicos</strong> o <strong>asincrónicos</strong>. En los sincrónicos todos los flip flops se conectan a una misma señal de clock, de forma que todos pueden cambiar de estado en un mismo momento.' },
        { type: 'p', text: 'En los <strong>contadores asincrónicos</strong>, en cambio, los flip flops no están todos conectados a una misma señal de clock, por lo que los cambios no ocurren al mismo tiempo. Es decir, un contador asincrónico es aquel en el que los flip flops no cambian de estado en un mismo momento, dado que no todos dependen del mismo pulso de clock.' },
        { type: 'h3', text: 'El armado con flip flops T' },
        { type: 'p', text: 'En el circuito de ejemplo, el primer flip flop T está conectado a una señal de clock, pero los siguientes dependen de la <strong>salida negada del anterior</strong>. Este es un contador asíncrono que va desde 0000 al 1001 (del 0 al 9).' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-contador-asincronico-circuito-t-p03.png', alt: 'Circuito de un contador asincrónico con flip-flops T encadenados, donde la salida de cada uno alimenta el reloj del siguiente.', caption: 'Contador asincrónico: la salida de cada flip-flop es el reloj del siguiente.' },
        { type: 'p', text: 'Cuando entre un pulso de clock al primer flip flop, este cambiará de estado en el flanco ascendente del pulso. Recién cuando en su salida negada haya una transición de cero a uno, el segundo flip flop podrá cambiar su estado. Lo mismo ocurre con el tercero y el cuarto, que deben esperar a que las salidas negadas de los anteriores pasen de cero a uno para cambiar de estado.' },
        { type: 'callout', tone: 'info', text: 'Debido al retardo de propagación que se produce a través de los flip flops, el cual se va acumulando de flip flop a flip flop, a los contadores asíncronos también se los conoce como <strong>contadores con propagación</strong> (o de rizado / ripple). Esta acumulación es una de sus desventajas.' },
        { type: 'p', text: 'Para lograr que la secuencia sea desde 0000 al 1001 (del 0 al 9), se utiliza lógica adicional para que el contador se reinicie cuando llegue al 10: cuando $Q_2$ y $Q_0$ sean uno, se resetean de forma asíncrona todos los flip flops poniéndolos en cero.' },
        { type: 'callout', tone: 'warning', text: 'Como debe pasar unos nanosegundos por el estado 1010 para que se reinicie, esto produce lo que se conoce como <strong>glitch</strong>: un pico de tensión de corta duración no deseado, resultado de los retardos de propagación. Los glitches suelen darse en los contadores asíncronos.' },
        { type: 'h3', text: 'Divisor de frecuencia' },
        { type: 'p', text: 'Los contadores tienen diversas aplicaciones, entre ellas: contador de sucesos, secuenciador cíclico y <strong>divisor de frecuencia</strong>. Los divisores de frecuencia se utilizan para obtener frecuencias menores a partir de una frecuencia dada (como la del clock).' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-contador-asincronico-cronograma-frecuencias-p03.png', alt: 'Cronograma del contador asincrónico con reloj de 100 Hz y salidas que dividen la frecuencia hasta 12,5 Hz.', caption: 'El contador asincrónico como divisor de frecuencia.' },
        { type: 'p', text: 'En el diagrama temporal se puede ver que la frecuencia de $Q_3$ es la mitad que la del clock, pues necesita que pasen dos períodos de clock para generar un período de $Q_3$. La frecuencia de $Q_2$ será la mitad de la de $Q_3$ y, por lo tanto, $\\frac{1}{4}$ de la del clock. La frecuencia de $Q_1$ será la mitad de la de $Q_2$ y, por lo tanto, $\\frac{1}{8}$ de la del clock.' },
        { type: 'p', text: 'Entonces, si la frecuencia del clock fuera de 100 Hz, cada etapa la va dividiendo a la mitad: 100, 50, 25 y 12,5 Hz. Por ejemplo, la frecuencia de $Q_1$ sería $\\frac{100}{8} = 12{,}5$ Hz.' },
        { type: 'math', latex: 'f = \\frac{1}{2^{n}}', display: true },
        { type: 'callout', tone: 'info', text: 'Una aplicación típica de los divisores de frecuencia es, por ejemplo, en un reloj digital.' },
        { type: 'h3', text: 'Registros de desplazamiento' },
        { type: 'p', text: 'Los <strong>registros</strong> son circuitos secuenciales que consisten en un grupo de $n$ flip flops capaces de almacenar $n$ bits de información. A diferencia de los contadores, en general no siguen una secuencia específica de estados.' },
        { type: 'p', text: 'Un registro capaz de desplazar su información binaria en una dirección u otra se llama <strong>registro de desplazamiento</strong> (shift register). Están conformados por flip flops, generalmente <strong>D</strong>, conectados en serie (la salida de uno entra al siguiente) y, según el caso, con alguna lógica adicional que permita los diferentes movimientos de los datos. El funcionamiento es sincrónico: todos los flip flops están conectados a la misma señal de clock.' },
        { type: 'p', text: 'La capacidad de almacenamiento dependerá de la cantidad de flip flops, y el desplazamiento dependerá de cómo estén conectados y de cómo se dispongan sus salidas.' },
        { type: 'h3', text: 'Tipos de registros según entrada / salida' },
        { type: 'p', text: 'Según cómo entren y salgan los datos, hay distintos tipos de registros de 4 bits con diferentes movimientos:' },
        { type: 'ul', items: ['<strong>Serie / serie</strong>: los datos entran de a un bit y salen de a un bit.', '<strong>Serie / paralelo</strong>: los datos entran de a un bit y salen todos juntos.', '<strong>Paralelo / serie</strong>: los datos entran todos juntos y salen de a un bit.', '<strong>Paralelo / paralelo</strong>: los datos entran y salen todos juntos.', '<strong>De rotación</strong>: desplazan rotando los bits, a derecha o a izquierda.'] },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-registro-desplazamiento-tipos-p04.jpeg', alt: 'Esquema de los tipos de registros de desplazamiento: serie/serie, serie/paralelo, paralelo/serie, paralelo/paralelo y de rotación.', caption: 'Los tipos de registros de desplazamiento.' },
        { type: 'h3', text: 'Paso a paso: un dato entrando' },
        { type: 'p', text: 'Veamos la implementación de un registro de desplazamiento de 4 bits hacia la derecha con entrada y salida en serie. Cuando llegue un dato a la entrada D del primer flip flop, este se irá desplazando hacia la derecha, flip flop a flip flop, con cada pulso de clock, hasta llegar a la salida.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-registro-desplazamiento-circuito-d-p05.png', alt: 'Circuito de un registro de desplazamiento de 4 bits con cuatro flip-flops D en cascada, entrada serie, salida serie y reloj común.', caption: 'Registro de desplazamiento con flip-flops D en cascada.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-registro-desplazamiento-paso1-p05.png', alt: 'Registro de desplazamiento con un 1 en la entrada y todas las salidas en 0, primer paso.', caption: 'Registro de desplazamiento, paso 1.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-registro-desplazamiento-paso5-p05.png', alt: 'Registro de desplazamiento con todas las etapas en 1 y el primer bit saliendo por la salida serie, quinto paso.', caption: 'Registro de desplazamiento, paso 5: el dato ya recorrió todas las etapas.' },
        { type: 'callout', tone: 'criollo', text: 'Pensalo así: los flip flops son memorias que guardan un bit cada uno, y un registro de desplazamiento es una memoria a pequeña escala. Con cada pulso de clock el dato pega un salto a la derecha, como una fila de gente que va pasando una pelota.' },
        { type: 'h3', text: 'Lectura de memoria con decodificador de direcciones' },
        { type: 'p', text: 'Si los flip flops son memorias chiquitas, las memorias de mayor capacidad (como la RAM y la ROM) almacenan la información de manera estructurada. Una <strong>unidad de memoria</strong> es un conjunto de celdas (matriz de celdas) donde cada celda almacena un bit. La <strong>dirección</strong> hace referencia a la posición de una palabra (fila de la matriz) en memoria, y el acceso a la información se realiza a través de un <strong>decodificador</strong>.' },
        { type: 'p', text: 'En una operación de lectura intervienen el <strong>registro de direcciones</strong>, el <strong>decodificador de direcciones</strong>, la <strong>matriz de memoria</strong> y el <strong>registro de datos</strong>.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u6-memoria-lectura-decodificador-direcciones-p07.jpeg', alt: 'Esquema de lectura de una memoria con registro de direcciones, decodificador de direcciones, matriz de memoria y registro de datos.', caption: 'Lectura de una memoria con decodificador de direcciones.' },
      ],
      quiz: {
        tf: [
          { id: 'tf-25-1', q: 'En un contador asincrónico todos los flip flops cambian de estado al mismo tiempo porque comparten la misma señal de clock.', a: false, explain: 'Eso pasa en los sincrónicos. En el asincrónico cada flip flop depende de la salida del anterior, así que los cambios no ocurren al mismo tiempo.' },
          { id: 'tf-25-2', q: 'A los contadores asíncronos también se los conoce como contadores con propagación o de rizado.', a: true, explain: 'Por el retardo de propagación que se va acumulando de flip flop a flip flop.' },
          { id: 'tf-25-3', q: 'En un divisor de frecuencia cada etapa multiplica por dos la frecuencia del clock.', a: false, explain: 'Al revés: cada etapa divide la frecuencia a la mitad. De 100 Hz se pasa a 50, 25 y 12,5 Hz.' },
          { id: 'tf-25-4', q: 'Los registros de desplazamiento funcionan de manera sincrónica, con todos los flip flops conectados al mismo clock.', a: true, explain: 'Aunque desplacen los bits, todos los flip flops comparten la misma señal de reloj.' },
          { id: 'tf-25-5', q: 'Un glitch es un estado estable y deseado que el contador mantiene durante varios pulsos de clock.', a: false, explain: 'Un glitch es un pico de tensión de corta duración no deseado, producto de los retardos de propagación.' },
        ],
        mc: [
          { id: 'mc-25-1', q: 'En el contador asíncrono con flip flops T del ejemplo, ¿qué hace de reloj para cada flip flop a partir del segundo?', options: ['La señal de clock principal', 'La salida negada del flip flop anterior', 'Una entrada T externa', 'El registro de direcciones'], correctIndex: 1, explain: 'El primero va al clock, pero los siguientes dependen de la salida negada del anterior.' },
          { id: 'mc-25-2', q: 'Si el clock es de 100 Hz y cada etapa divide la frecuencia a la mitad, ¿qué frecuencia tiene la salida que está a 1/8 del clock?', options: ['50 Hz', '25 Hz', '12,5 Hz', '6,25 Hz'], correctIndex: 2, explain: '100 dividido 8 es igual a 12,5 Hz, según la fórmula f = 1 / (2 elevado a n).' },
          { id: 'mc-25-3', q: 'En un registro de desplazamiento serie/paralelo, ¿cómo entran y cómo salen los datos?', options: ['Entran todos juntos y salen de a un bit', 'Entran de a un bit y salen de a un bit', 'Entran de a un bit y salen todos juntos', 'Entran y salen todos juntos'], correctIndex: 2, explain: 'Serie en la entrada (de a un bit) y paralelo en la salida (todos juntos).' },
          { id: 'mc-25-4', q: '¿Qué elementos intervienen en una operación de lectura de memoria con decodificador?', options: ['Solo la matriz de memoria', 'Registro de direcciones, decodificador, matriz de memoria y registro de datos', 'Un único flip flop T', 'Un divisor de frecuencia y un contador'], correctIndex: 1, explain: 'La dirección se carga en el registro de direcciones, el decodificador selecciona la palabra en la matriz y el dato pasa al registro de datos.' },
        ],
      },
      flashcards: [
        { id: 'fc-25-1', front: 'Diferencia entre contador sincrónico y asincrónico', back: 'En el sincrónico todos los flip flops comparten el mismo clock y cambian a la vez. En el asincrónico la salida de cada flip flop hace de reloj del siguiente, así que cambian en cadena, no todos a la vez.' },
        { id: 'fc-25-2', front: '¿Por qué se llama contador con propagación (rizado/ripple)?', back: 'Por el retardo de propagación que se va acumulando de flip flop a flip flop. Es una de sus desventajas.' },
        { id: 'fc-25-3', front: '¿Qué es un glitch en un contador asíncrono?', back: 'Un pico de tensión de corta duración no deseado, resultado de los retardos de propagación. Aparece, por ejemplo, al pasar fugazmente por un estado intermedio antes de reiniciarse.' },
        { id: 'fc-25-4', front: 'Contador como divisor de frecuencia', back: 'Cada etapa divide la frecuencia a la mitad. Si el clock es de 100 Hz: 50, 25, 12,5 Hz. La fórmula general es f = 1 / (2 elevado a n). Se usa, por ejemplo, en relojes digitales.' },
        { id: 'fc-25-5', front: '¿Qué es un registro de desplazamiento?', back: 'Un grupo de flip flops D en cascada (la salida de uno entra al siguiente) con clock común, que desplaza los bits una posición en cada pulso. Sirve para almacenar y desplazar datos.' },
        { id: 'fc-25-6', front: 'Tipos de registros según entrada/salida', back: 'Serie/serie, serie/paralelo, paralelo/serie, paralelo/paralelo y de rotación (a derecha o a izquierda).' },
        { id: 'fc-25-7', front: 'Elementos de la lectura de memoria con decodificador', back: 'Registro de direcciones, decodificador de direcciones, matriz de memoria (celdas, una por bit) y registro de datos. La dirección apunta a una palabra (fila) y el decodificador da acceso a ella.' },
      ],
    },

    // ===================================================================
    // UNIDAD 7 — Máquinas de estados
    // ===================================================================
    {
      id: '26',
      unit: '7',
      title: 'Máquinas de estados',
      criollo: 'Una máquina de estados es un modelo para diseñar circuitos secuenciales: el sistema va saltando entre un conjunto finito de estados según el reloj y las entradas. La gran división es Moore vs Mealy, y la diferencia está en de qué depende la salida.',
      blocks: [
        { type: 'p', text: 'Una <strong>máquina de estados finita</strong> (FSM) es un modelo utilizado en el diseño de circuitos lógicos secuenciales, principalmente aquellos que funcionan de manera sincronizada. Las máquinas de estados proporcionan un enfoque estructurado y eficiente para representar el comportamiento de un sistema digital.' },
        { type: 'p', text: 'El concepto se refiere a un circuito que avanza secuencialmente a través de un conjunto predefinido de estados, cuya cantidad es <strong>finita</strong>. Este progreso es controlado por una señal de <strong>clock</strong> y otras entradas externas. Es decir, modela cómo se comporta un sistema a lo largo de diferentes situaciones (representadas como estados) y cómo transcurren las transiciones entre ellos.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u7-estructura-secuencial-p01.png', alt: 'Diagrama de bloques de un circuito secuencial con lógica combinacional, elementos de memoria y señal de clock, mostrando entradas y salidas.', caption: 'Estructura general: lógica combinacional realimentada por memoria, sincronizada con el clock.' },
        { type: 'h3', text: 'Estados y transiciones', criollo: 'Estás en un estado por vez, con su nombre propio. Las flechas (transiciones) dicen cuándo y por qué saltás a otro, según las entradas.' },
        { type: 'ul', items: [
          'Cada <strong>estado</strong> refleja una condición o modo específico del sistema. Tiene un nombre único y no se puede estar en más de un estado a la vez. Al estado en el que se encuentra el sistema se lo llama <strong>estado actual</strong>.',
          'Las <strong>transiciones</strong> definen las condiciones bajo las cuales el sistema cambia de un estado a otro. Están asociadas a condiciones externas, como las señales de entrada.',
          'Las <strong>salidas</strong> pueden depender del estado actual y/o de las entradas actuales.',
        ] },
        { type: 'callout', tone: 'info', text: 'Un contador es, en rigor, una máquina de estados. Pero el término se usa más para otros circuitos secuenciales: al contador se lo piensa como un circuito para <strong>contar eventos</strong>, mientras que una máquina de estados se usa para <strong>controlar eventos</strong>.' },
        { type: 'h3', text: 'Clasificación: Moore y Mealy', criollo: 'Las dos familias. La diferencia es de qué depende la salida: en Moore, solo del estado; en Mealy, del estado y de las entradas.' },
        { type: 'p', text: 'Según cómo se manejan las salidas en función de las transiciones y los estados, se diferencian dos tipos de máquinas de estados.' },
        { type: 'p', text: '<strong>Máquina de Moore</strong>: las salidas dependen solo del estado actual. La salida en un estado dado es constante durante toda la duración de ese estado y solo depende del estado en sí; cuando el estado cambia, la salida cambia. Por eso las salidas de Moore son deterministas y más estables.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u7-bloques-moore-p02.png', alt: 'Diagrama de bloques de una máquina de Moore donde la lógica de salida depende solo del estado actual y no de las entradas.', caption: 'Modelo Moore: la salida sale únicamente del estado; las entradas no llegan a la lógica de salida.' },
        { type: 'p', text: '<strong>Máquina de Mealy</strong>: las salidas pueden depender tanto del estado actual como de las entradas actuales en ese instante. Es decir, si el sistema cambia de estado la salida cambia, pero incluso manteniéndose en un mismo estado la salida también puede cambiar debido a las entradas.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u7-bloques-mealy-p03.png', alt: 'Diagrama de bloques de una máquina de Mealy donde la lógica de salida depende del estado actual y también de las entradas.', caption: 'Modelo Mealy: la salida depende del estado y de las entradas, que se conectan a la lógica de salida.' },
        { type: 'callout', tone: 'criollo', text: 'La elección entre Moore y Mealy depende de las necesidades del sistema y las características del problema. No hay una "mejor": son herramientas distintas.' },
        { type: 'h3', text: 'Diagrama de estados', criollo: 'La forma clásica de dibujar una FSM, igual que viste en los contadores. El truco para distinguir Moore de Mealy: mirá dónde está la salida.' },
        { type: 'p', text: 'Una manera de modelar una máquina de estados finitos es mediante los <strong>diagramas de estados</strong>, como se vio en los contadores. La diferencia clave: en la máquina de Moore la salida está asociada al <strong>estado</strong> (va dentro del nodo), mientras que en la máquina de Mealy la salida está asociada a la <strong>transición</strong> (va sobre la flecha, junto a la entrada).' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u7-diagrama-estados-moore-mealy-p03.png', alt: 'Comparación de diagramas de estado: en Moore la salida figura dentro del nodo del estado y en Mealy figura sobre la flecha de transición junto a la entrada.', caption: 'Diagrama de estados Moore vs Mealy: en Moore la salida va en el nodo, en Mealy va sobre la transición.' },
        { type: 'h3', text: 'Diagrama ASM (máquina de estados algorítmico)', criollo: 'Otra forma de modelar la misma FSM, con pinta de diagrama de flujo: bloques de estado y rombos de decisión sobre las entradas.' },
        { type: 'p', text: 'Otra manera de modelar una máquina de estados finitos es mediante el <strong>diagrama máquina de estados algorítmico</strong> (ASM). Un algoritmo es un conjunto ordenado y finito de operaciones que permite encontrar la solución de un problema mediante una secuencia de pasos bien definidos.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u7-asm-moore-p04.png', alt: 'Diagrama ASM de tipo Moore con un bloque de estado que contiene la salida y un rombo de decisión sobre la entrada con ramas 0 y 1.', caption: 'Carta ASM Moore: la salida queda asociada al bloque de estado y la decisión sobre la entrada define el camino.' },
        { type: 'figure', src: 'images/diagrams/sistemas-digitales-i/u7-asm-mealy-p04.png', alt: 'Diagrama ASM de tipo Mealy con un bloque de estado, un rombo de decisión sobre la entrada y salidas condicionales en las ramas 0 y 1.', caption: 'Carta ASM Mealy: las salidas cuelgan de las ramas de decisión, dependiendo de la entrada.' },
        { type: 'h3', text: 'Aplicaciones', criollo: 'Están en todos lados donde haya que controlar una secuencia de acciones.' },
        { type: 'ul', items: [
          '<strong>Sistemas de comunicación</strong>: codificar y decodificar datos para una transmisión y recepción precisas; y protocolos de comunicación, donde aseguran que las acciones se realicen en el orden correcto.',
          '<strong>Sistemas embebidos y de control</strong>: controlar dispositivos y actuar en respuesta a eventos externos, como interruptores y sensores.',
        ] },
      ],
      quiz: {
        tf: [
          { id: 'tf-26-1', q: 'Una máquina de estados finita tiene una cantidad finita de estados y avanza controlada por una señal de clock y entradas externas.', a: true, explain: 'Esa es la definición: un circuito que avanza secuencialmente por un conjunto finito de estados, controlado por el clock y las entradas.' },
          { id: 'tf-26-2', q: 'En una máquina de estados, el sistema puede estar en varios estados a la vez.', a: false, explain: 'No: cada estado tiene nombre único y no se puede estar en más de un estado a la vez. Al estado vigente se lo llama estado actual.' },
          { id: 'tf-26-3', q: 'En una máquina de Moore, las salidas dependen solo del estado actual.', a: true, explain: 'Correcto. Por eso la salida es constante durante todo el estado y solo cambia cuando cambia el estado: son deterministas y más estables.' },
          { id: 'tf-26-4', q: 'En una máquina de Mealy, la salida solo puede cambiar cuando se cambia de estado.', a: false, explain: 'Falso. En Mealy la salida depende del estado Y de las entradas, así que puede cambiar incluso quedándose en el mismo estado, por efecto de las entradas.' },
          { id: 'tf-26-5', q: 'Un contador puede considerarse una máquina de estados.', a: true, explain: 'Sí. El contador es una máquina de estados, aunque el término se reserva más para otros secuenciales: el contador cuenta eventos y la máquina de estados controla eventos.' },
        ],
        mc: [
          { id: 'mc-26-1', q: '¿De qué dependen las salidas en una máquina de Moore?', options: ['Solo del estado actual', 'Solo de las entradas', 'Del estado actual y de las entradas', 'Únicamente del clock'], correctIndex: 0, explain: 'En Moore las salidas dependen solo del estado actual, lo que las hace deterministas y estables.' },
          { id: 'mc-26-2', q: 'En un diagrama de estados, ¿dónde se ubica la salida en una máquina de Mealy?', options: ['Dentro del nodo del estado', 'Sobre la flecha de transición, junto a la entrada', 'No se representa', 'En el clock'], correctIndex: 1, explain: 'En Mealy la salida está asociada a la transición (va sobre la flecha). En Moore, en cambio, va dentro del nodo del estado.' },
          { id: 'mc-26-3', q: '¿Qué es un diagrama ASM?', options: ['Un diagrama de tiempo de los flip-flops', 'El diagrama máquina de estados algorítmico, otra forma de modelar una FSM', 'Un mapa de Karnaugh', 'Una tabla de excitación'], correctIndex: 1, explain: 'El ASM (algorithmic state machine) es otra manera de modelar una máquina de estados finitos, con bloques de estado y decisiones sobre las entradas.' },
          { id: 'mc-26-4', q: '¿Cuál es una aplicación típica de las máquinas de estados?', options: ['Amplificar señales analógicas', 'Controlar protocolos de comunicación y sistemas de control', 'Rectificar corriente alterna', 'Almacenar imágenes'], correctIndex: 1, explain: 'Se usan en sistemas de comunicación (codificar/decodificar, protocolos) y en sistemas embebidos y de control que responden a eventos externos.' },
        ],
      },
      flashcards: [
        { id: 'fc-26-1', front: '¿Qué es una máquina de estados finita (FSM)?', back: 'Un modelo para diseñar circuitos secuenciales sincronizados: un circuito que avanza por un conjunto finito de estados, controlado por el clock y las entradas externas.' },
        { id: 'fc-26-2', front: 'Estado vs transición', back: 'El estado es una condición o modo del sistema (nombre único, uno por vez). La transición define cuándo el sistema cambia de un estado a otro, según las entradas.' },
        { id: 'fc-26-3', front: 'Máquina de Moore', back: 'Las salidas dependen solo del estado actual. La salida es constante durante el estado y solo cambia al cambiar de estado. Deterministas y estables.' },
        { id: 'fc-26-4', front: 'Máquina de Mealy', back: 'Las salidas dependen del estado actual Y de las entradas actuales. La salida puede cambiar incluso sin cambiar de estado, por efecto de las entradas.' },
        { id: 'fc-26-5', front: 'Moore vs Mealy en el diagrama de estados', back: 'En Moore la salida va dentro del nodo (asociada al estado); en Mealy la salida va sobre la flecha de transición (asociada a la transición y la entrada).' },
        { id: 'fc-26-6', front: 'Diagrama ASM', back: 'Diagrama máquina de estados algorítmico: otra forma de modelar una FSM, con bloques de estado y rombos de decisión sobre las entradas.' },
        { id: 'fc-26-7', front: 'Contador vs máquina de estados', back: 'El contador es una máquina de estados, pero se lo usa para contar eventos; el término máquina de estados se reserva para circuitos que controlan eventos.' },
        { id: 'fc-26-8', front: 'Aplicaciones de las FSM', back: 'Sistemas de comunicación (codificación/decodificación, protocolos) y sistemas embebidos y de control (responder a interruptores, sensores y otros eventos).' },
      ],
    },

  ],
  pdfs: [
    { key: 'u1-numeracion', label: 'U1 · Sistemas de numeración y aritmética binaria', path: 'pdfs/sistemas-digitales-i/1-sistemas-numeracion.pdf' },
    { key: 'u2-compuertas', label: 'U2 · Compuertas lógicas y álgebra de Boole', path: 'pdfs/sistemas-digitales-i/2c-compuertas-logicas.pdf' },
    { key: 'u2-funciones', label: 'U2 · Funciones lógicas con álgebra de Boole', path: 'pdfs/sistemas-digitales-i/2b-funciones-logicas.pdf' },
    { key: 'u2-tabla-boole', label: 'U2 · Tabla del álgebra de Boole', path: 'pdfs/sistemas-digitales-i/2a-tabla-algebra-boole.pdf' },
    { key: 'u3-karnaugh', label: 'U3 · Mapas de Karnaugh', path: 'pdfs/sistemas-digitales-i/3-mapas-karnaugh.pdf' },
    { key: 'u4-hardware', label: 'U4 · Hardware digital', path: 'pdfs/sistemas-digitales-i/4-hardware-digital.pdf' },
    { key: 'u5-decodificadores', label: 'U5 · Circuitos combinatorios — Decodificadores', path: 'pdfs/sistemas-digitales-i/5a-decodificadores.pdf' },
    { key: 'u5-multiplexores', label: 'U5 · Circuitos combinatorios — Multiplexores', path: 'pdfs/sistemas-digitales-i/5b-multiplexores.pdf' },
    { key: 'u5-sumadores-restadores', label: 'U5 · Circuitos combinatorios — Sumadores y restadores', path: 'pdfs/sistemas-digitales-i/5c-sumadores-restadores.pdf' },
    { key: 'u5-comparador-sumador', label: 'U5 · Circuitos combinatorios — Comparador y sumador', path: 'pdfs/sistemas-digitales-i/5d-comparador-sumador.pdf' },
    { key: 'u6-biestables', label: 'U6 · Circuitos secuenciales — Biestables', path: 'pdfs/sistemas-digitales-i/6a-biestables.pdf' },
    { key: 'u6-contador', label: 'U6 · Circuitos secuenciales — Contador síncrono', path: 'pdfs/sistemas-digitales-i/6b-contador-sincronico.pdf' },
    { key: 'u6-parte3', label: 'U6 · Circuitos secuenciales — Parte 3', path: 'pdfs/sistemas-digitales-i/6c-secuenciales-parte3.pdf' },
    { key: 'u7-maquina-estados', label: 'U7 · Máquinas de estados', path: 'pdfs/sistemas-digitales-i/7-maquina-estados.pdf' },
  ],
};
