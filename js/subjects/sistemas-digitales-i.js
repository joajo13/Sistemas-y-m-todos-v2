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
  ],
  pdfs: [
    { key: 'u1-numeracion', label: 'U1 · Sistemas de numeración y aritmética binaria', path: 'pdfs/sistemas-digitales-i/1-sistemas-numeracion.pdf' },
  ],
};
