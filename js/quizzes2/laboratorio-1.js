/**
 * Banco NUEVO (anti-spoiler) — laboratorio-1
 *
 * Mapa { [sectionId]: { quiz2: { tf, mc, ms }, flashcards2: [...] } }.
 * content.js mergea esto sobre las secciones por id (sec.quiz2 / sec.flashcards2).
 * Generado para autoevaluación: opciones homogéneas, sin pistas de forma.
 *
 * Cubre las secciones 21-27 (unidades 'jvm', 'jdk' y 'actividades').
 */
export default {
  '21': {
    quiz2: {
      tf: [
        { id: 'tf2-21-1', q: 'El JRE alcanza para correr programas Java, pero no trae el compilador.', a: true, explain: 'El JRE sirve para ejecutar código Java. El compilador y el motor de documentación vienen con el JDK.' },
        { id: 'tf2-21-2', q: 'La máquina virtual se ubica entre el lenguaje y el sistema operativo.', a: true, explain: 'Es la definición textual de JVM del apunte.' },
        { id: 'tf2-21-3', q: 'En Java hay que volver a compilar el código en cada plataforma donde se lo quiera ejecutar.', a: false, explain: 'Eso pasa en C. En Java se compila una vez y el resultado corre en cualquier máquina virtual de cualquier plataforma.' },
        { id: 'tf2-21-4', q: 'Instalar el kit de desarrollo implica quedarse sin entorno de ejecución.', a: false, explain: 'El JDK involucra tanto la JVM como el JRE, así que instalarlo trae el entorno de ejecución incluido.' },
        { id: 'tf2-21-5', q: 'El apunte considera a .Net como otro caso de plataforma con máquina virtual.', a: true, explain: 'Lo menciona al pasar cuando compara el modelo de compilación: "como es en el caso de Java (o .Net para el caso)".' },
      ],
      mc: [
        {
          id: 'mc2-21-1',
          q: '¿Qué elemento es distinto en cada plataforma donde corre un programa Java?',
          options: [
            'El archivo compilado que produce el compilador',
            'La máquina virtual que se instala con el JRE',
            'El código fuente escrito por el programador',
            'El lenguaje de máquina que genera el compilador',
          ],
          correctIndex: 1,
          explain: 'Lo que se instala para diferentes plataformas es la máquina virtual. El compilado se hace una sola vez y no genera lenguaje de máquina.',
        },
        {
          id: 'mc2-21-2',
          q: '¿Qué herramientas de desarrollo menciona el apunte como contenido del kit?',
          options: [
            'El compilador y el motor para hacer documentación',
            'El recolector de basura y el manejador de errores',
            'El cargador de clases y el administrador de memoria',
            'El intérprete de sintaxis y el editor de texto',
          ],
          correctIndex: 0,
          explain: 'El JDK tiene muchas herramientas de desarrollo, "como ser el compilador, el motor para hacer documentación, etc.". Los demás son módulos internos del JRE.',
        },
        {
          id: 'mc2-21-3',
          q: 'En el modelo de C que usa el apunte como contraste, ¿a qué se compila el código fuente?',
          options: [
            'Al lenguaje de una máquina virtual instalada aparte',
            'A un formato binario portable entre plataformas',
            'A lenguaje de máquina del sistema operativo destino',
            'A instrucciones en lenguaje natural en inglés',
          ],
          correctIndex: 2,
          explain: 'En C, cuando se compila se hace en lenguaje de máquina: si tengo Linux, debo compilar en C para Linux.',
        },
      ],
      ms: [
        {
          id: 'ms2-21-1',
          q: '¿Qué afirmaciones sobre las tres siglas se corresponden con el apunte?',
          options: [
            'El JDK involucra tanto la JVM como el JRE',
            'El JRE sirve para ejecutar código Java',
            'La JVM corre entre el lenguaje y el sistema operativo',
            'Cuando se instala Java se instala el JRE y la JVM',
            'La JVM se distribuye por separado del JRE en cada sistema',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain: 'El apunte dice que cuando se instala Java se instala el JRE (y la JVM): vienen juntos, no por separado.',
        },
      ],
    },
    flashcards2: [
      { id: 'fc2-21-1', front: '¿Qué sigla nombra el entorno de desarrollo completo?', back: 'El JDK, Java Development Kit, que involucra tanto la JVM como el JRE y agrega herramientas como el compilador y el motor de documentación.' },
      { id: 'fc2-21-2', front: '¿Para qué sirve el JRE?', back: 'Para ejecutar código Java, para correr programas Java. Se instala para Linux, Windows o Mac.' },
      { id: 'fc2-21-3', front: '¿Dónde se ubica la máquina virtual?', back: 'Entre el lenguaje y el sistema operativo. Por eso el código Java no se compila a código de máquina.' },
      { id: 'fc2-21-4', front: '¿Por qué Java es portable?', back: 'Porque se compila para el lenguaje de la máquina virtual, no para lenguaje de máquina. Lo que cambia en cada plataforma es la VM, no el compilado.' },
      { id: 'fc2-21-5', front: '¿Qué pasa en C cuando cambia el sistema operativo?', back: 'Hay que compilar de nuevo: en C se compila en lenguaje de máquina, así que en Linux se compila para Linux, y lo mismo con Windows o Mac.' },
    ],
  },
  '22': {
    quiz2: {
      tf: [
        { id: 'tf2-22-1', q: 'El apunte clasifica a Java junto a C dentro de los lenguajes compilados.', a: false, explain: 'C es el ejemplo de compilado y PHP o Pearl los de interpretado. Java no es ninguna de las dos cosas.' },
        { id: 'tf2-22-2', q: 'El código fuente consiste en instrucciones en lenguaje natural, en inglés.', a: true, explain: 'Es la definición del primer punto del procedimiento.' },
        { id: 'tf2-22-3', q: 'La liberación de memoria en Java hay que pedirla explícitamente al terminar de usar cada objeto.', a: false, explain: 'El Garbage Collector la libera automáticamente; por eso no hacen falta ni malloc ni liberación manual.' },
        { id: 'tf2-22-4', q: 'El módulo que atiende los errores lanzados durante la ejecución es el Exception Handler.', a: true, explain: 'Es el último módulo que enumera la segunda parte del procedimiento.' },
        { id: 'tf2-22-5', q: 'El Memory Manager puede necesitar hablar con la plataforma para paginar.', a: true, explain: 'El apunte dice que habla tanto con la memoria física de la máquina como con la plataforma si es que necesita paginar.' },
      ],
      mc: [
        {
          id: 'mc2-22-1',
          q: '¿En qué momento entra en juego el Just In Time compiler?',
          options: [
            'Al escribirse el archivo de código fuente en el editor',
            'Al analizarse la sintaxis y detectarse los errores',
            'Al empaquetarse las clases compiladas como librería',
            'Al correr el programa, sobre los archivos en Bytecode',
          ],
          correctIndex: 3,
          explain: 'Cuando el programa corre, el JRE toma los archivos en Bytecode y los pasa por el JIT para procesarlos y enviarlos al lenguaje que entiende la JVM.',
        },
        {
          id: 'mc2-22-2',
          q: '¿Qué módulo se ocupa de levantar a memoria las clases y objetos necesarios?',
          options: [
            'El ClassLoader, valiéndose del Memory Manager',
            'El Garbage Collector, antes de liberar espacio',
            'El Exception Handler, al detectar una falla',
            'El compilador del JDK, durante la traducción',
          ],
          correctIndex: 0,
          explain: 'El ClassLoader levanta a memoria todo lo necesario para poder correr el programa mediante el módulo de Memory Manager.',
        },
        {
          id: 'mc2-22-3',
          q: '¿Qué característica tiene el archivo que produce el compilador?',
          options: [
            'Es texto plano en lenguaje natural que la VM lee de a una línea',
            'Es un binario en Bytecode que la JVM no interpreta directamente',
            'Es código de máquina propio del sistema operativo destino',
            'Es un paquete comprimido en formato zip con extensión propia',
          ],
          correctIndex: 1,
          explain: 'El archivo compilado que está en Bytecode es un archivo binario; no es código de máquina y la JVM no lo interpreta directamente.',
        },
      ],
      ms: [
        {
          id: 'ms2-22-1',
          q: '¿Qué tareas están correctamente asignadas a su módulo?',
          options: [
            'JIT: procesar el Bytecode y enviarlo al lenguaje que entiende la JVM',
            'ClassLoader: levantar a memoria clases y objetos',
            'Memory Manager: hablar con la memoria física y con la plataforma',
            'Garbage Collector: eliminar automáticamente lo que ya no se usa',
            'Exception Handler: optimizar las sentencias de control ineficientes',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain: 'El Exception Handler maneja los errores lanzados durante la ejecución; no optimiza nada.',
        },
      ],
    },
    flashcards2: [
      { id: 'fc2-22-1', front: '¿En qué categoría cae Java: compilado o interpretado?', back: 'En ninguna. PHP y Pearl son interpretados, C es compilado, y el apunte aclara que Java no es un lenguaje interpretado ni compilado.' },
      { id: 'fc2-22-2', front: '¿Qué produce el compilador del JDK?', back: 'Código en Bytecode: un archivo binario que no es código de máquina y que la JVM no ejecuta ni interpreta en forma directa.' },
      { id: 'fc2-22-3', front: '¿Qué hace el JRE con el Bytecode al correr el programa?', back: 'Lo pasa por el JIT (Just In Time compiler) para procesarlo y enviarlo al lenguaje que entiende la JVM.' },
      { id: 'fc2-22-4', front: '¿Qué módulo evita tener que usar malloc?', back: 'El Garbage Collector: al liberar automáticamente lo que ya no se usa, no hace falta reserva previa ni liberación manual de memoria.' },
      { id: 'fc2-22-5', front: '¿Quién atiende los errores en tiempo de ejecución?', back: 'El Exception Handler, el módulo que maneja los posibles errores que puedan llegar a lanzarse durante la ejecución del programa.' },
    ],
  },
  '23': {
    quiz2: {
      tf: [
        { id: 'tf2-23-1', q: 'Los valores de las variables estáticas viven en el área de CLASS.', a: true, explain: 'El área de CLASS maneja los valores de variables que son "de Clase", también llamadas estáticas.' },
        { id: 'tf2-23-2', q: 'La pila de llamadas guarda solamente qué función llamó a cuál, sin los argumentos.', a: false, explain: 'El STACK guarda además los argumentos que se pasan entre funciones y los valores retornados por cada una.' },
        { id: 'tf2-23-3', q: 'Un programa Java puede acceder al disco rígido sin intervención de la máquina virtual.', a: false, explain: 'El programa nunca interactuará con los recursos directamente: siempre mediante la VM.' },
        { id: 'tf2-23-4', q: 'La variable de entorno del classpath viene con un valor por defecto.', a: true, explain: 'Por defecto su valor es el "directorio actual".' },
        { id: 'tf2-23-5', q: 'Los controladores de bases de datos figuran entre las librerías que pueden vivir en el classpath.', a: true, explain: 'El apunte los incluye junto con frameworks web, utilidades de audio, librerías de estadísticas y frameworks de persistencia.' },
      ],
      mc: [
        {
          id: 'mc2-23-1',
          q: '¿Qué área de memoria contiene los objetos que se están ejecutando en un momento dado?',
          options: [
            'El área de CLASS, junto a las variables estáticas',
            'El STACK, junto a la pila de llamadas',
            'El HEAP, definido como el "montón" de datos',
            'El classpath, definido en el sistema operativo',
          ],
          correctIndex: 2,
          explain: 'El HEAP es, como la palabra lo dice, el "montón" de objetos y demás datos que están ejecutándose en un momento determinado.',
        },
        {
          id: 'mc2-23-2',
          q: '¿Qué memoria usa efectivamente nuestro programa Java?',
          options: [
            'Un área de memoria que la máquina virtual administra',
            'La memoria física de la máquina, en forma directa',
            'La memoria que el sistema operativo pagina a disco',
            'La memoria reservada por el compilador al compilar',
          ],
          correctIndex: 0,
          explain: 'La que usa la memoria física es la VM; nuestro programa usa un área de memoria que la VM administra.',
        },
        {
          id: 'mc2-23-3',
          q: '¿Quién suele encargarse del classpath en la práctica diaria?',
          options: [
            'El compilador, que lo deduce de las dependencias',
            'Los IDE, que por lo general lo manejan por nosotros',
            'El Garbage Collector, al liberar librerías sin uso',
            'El sistema operativo, que lo fija en la instalación',
          ],
          correctIndex: 1,
          explain: 'Establecer la variable a mano no es muy práctico; existen muchas herramientas para el problema y los IDE por lo general lo manejan por nosotros.',
        },
      ],
      ms: [
        {
          id: 'ms2-23-1',
          q: '¿Qué guarda el área de STACK según el apunte?',
          options: [
            'Qué función llama a qué otra función',
            'Los argumentos que se van pasando entre funciones',
            'Los valores retornados por cada función',
            'Los objetos que están ejecutándose en ese momento',
            'Los valores de las variables de clase',
          ],
          correctIndexes: [0, 1, 2],
          explain: 'Los objetos en ejecución van al HEAP y las variables de clase al área de CLASS.',
        },
      ],
    },
    flashcards2: [
      { id: 'fc2-23-1', front: '¿En cuántas partes divide la JVM la memoria que reserva?', back: 'En tres: HEAP, el área de STACK y el área de CLASS.' },
      { id: 'fc2-23-2', front: '¿Qué guarda la pila de llamadas?', back: 'Qué función llama a qué otra función, los argumentos que se van pasando entre ellas y los valores retornados por cada una.' },
      { id: 'fc2-23-3', front: '¿Dónde viven las variables estáticas?', back: 'En el área de CLASS, que maneja los valores de las variables "de Clase" o estáticas.' },
      { id: 'fc2-23-4', front: '¿Cómo llega el programa a los recursos del sistema?', back: 'Nunca en forma directa: el JRE junto con la JVM interactúan con el disco rígido, otros recursos, el SO y la plataforma, siempre mediante la VM.' },
      { id: 'fc2-23-5', front: '¿Qué define el classpath?', back: 'El espacio del SO, accedido por el JRE, donde están todas las librerías del lenguaje y las de utilidades que agreguemos, para que corra la JVM, funcione el JRE y se ejecuten nuestros programas.' },
    ],
  },
  '24': {
    quiz2: {
      tf: [
        { id: 'tf2-24-1', q: 'El compilador de Java creado por IBM se llama jikes.', a: true, explain: 'El apunte lo usa como el mejor ejemplo de compilador que sí hace optimizaciones, a diferencia de javac.' },
        { id: 'tf2-24-2', q: 'La optimización del código termina siendo tarea de la máquina virtual, mediante el JIT.', a: true, explain: 'javac no optimiza, pero la VM, antes de ejecutar el código y mediante el JIT, sí hace optimizaciones de todo tipo.' },
        { id: 'tf2-24-3', q: 'Al ejecutar hay que indicarle al comando el nombre del archivo compilado.', a: false, explain: 'Se le pasa el nombre de la clase, no el del archivo: "java Auto" y no "java Auto.class".' },
        { id: 'tf2-24-4', q: 'El compilador puede recibir por argumento dónde tomar las fuentes y dónde dejar los compilados.', a: true, explain: 'Es lo que generalmente hacen los IDE cuando usan javac; por defecto deja los compilados donde se ejecuta.' },
        { id: 'tf2-24-5', q: 'Al usar librerías no hace falta informarle nada al compilador.', a: false, explain: 'En caso de usar librerías es necesario pasarle al compilador la ubicación de estas para evitar errores.' },
      ],
      mc: [
        {
          id: 'mc2-24-1',
          q: 'Si un programa supera el límite superior de memoria configurado, ¿qué ocurre?',
          options: [
            'Se lanza un java.lang.OutOfMemoryError',
            'El Garbage Collector amplía el heap sin avisar',
            'El compilador rechaza la clase en la próxima compilación',
            'La JVM aplica el algoritmo ergonómico y continúa',
          ],
          correctIndex: 0,
          explain: 'Si la ejecución excede el valor de Xmx, se lanza java.lang.OutOfMemoryError. El algoritmo "ergonómico" solo define valores por defecto cuando no se especifican los parámetros.',
        },
        {
          id: 'mc2-24-2',
          q: 'Si la clase Auto depende de la clase Motor, ¿qué hace el compilador?',
          options: [
            'Falla y pide compilar Motor por separado primero',
            'Compila también Motor, resolviendo las dependencias',
            'Empaqueta ambas en un único archivo con extensión jar',
            'Ignora Motor hasta que se la invoque en ejecución',
          ],
          correctIndex: 1,
          explain: 'javac compila las dependencias de cada clase según sea necesario. El resultado de compilar Auto.java es Auto.class.',
        },
        {
          id: 'mc2-24-3',
          q: '¿Qué hace concretamente el compilador con el código fuente?',
          options: [
            'Reordena las sentencias para que el resultado sea eficiente',
            'Lo traduce a lenguaje de máquina del sistema operativo',
            'Analiza la sintaxis y lo pasa a un estado "ejecutable"',
            'Lo conecta con el classpath y lo carga en el heap',
          ],
          correctIndex: 2,
          explain: 'javac hace lo que hacen todos los compiladores: analizar la sintaxis y, si es correcta, pasar el código a un estado "ejecutable"; de lo contrario muestra los errores.',
        },
      ],
      ms: [
        {
          id: 'ms2-24-1',
          q: '¿Qué parámetros del comando de ejecución destaca el apunte como los más importantes?',
          options: [
            'classpath',
            'Xms',
            'Xmx',
            '-help',
            '-X',
          ],
          correctIndexes: [0, 1, 2],
          explain: '-help y -X son opciones para consultar la configuración del compilador javac, no parámetros del comando java.',
        },
      ],
    },
    flashcards2: [
      { id: 'fc2-24-1', front: '¿Qué significa la sigla javac?', back: 'Java compiler. Toma los archivos de código fuente y los pasa a código que la máquina virtual puede utilizar.' },
      { id: 'fc2-24-2', front: '¿Qué compilador se cita como ejemplo de uno que sí optimiza?', back: 'jikes, el compilador de Java creado por IBM. javac, en cambio, no hace optimizaciones sobre el código.' },
      { id: 'fc2-24-3', front: '¿Qué se le pasa al comando de ejecución?', back: 'El nombre de la clase, no el del archivo compilado: si compilamos Auto.java y obtuvimos Auto.class, corremos con ">java Auto".' },
      { id: 'fc2-24-4', front: '¿Para qué sirven Xms y Xmx?', back: 'Controlan los límites de la memoria física del programa: Xms indica de cuánta memoria dispondrá el heap y Xmx hasta cuánto podrá crecer.' },
      { id: 'fc2-24-5', front: '¿Cómo se consultan las opciones del compilador?', back: 'Con ">javac -help" para la variedad de opciones y ">javac -X" para la serie "extendida" de configuraciones disponibles.' },
      { id: 'fc2-24-6', front: '¿Qué pasa si el código fuente es ineficiente?', back: 'El resultado compilado será ineficiente, porque javac no optimiza. Por fortuna la VM sí optimiza antes de ejecutar, mediante el JIT.' },
    ],
  },
  '25': {
    quiz2: {
      tf: [
        { id: 'tf2-25-1', q: 'Un archivo empaquetado con la herramienta de empaquetado puede abrirse con WinZip.', a: true, explain: 'El formato de empaquetado y compresión es zip estándar; solo cambia la extensión, que pasa a ser .jar.' },
        { id: 'tf2-25-2', q: 'La herramienta de análisis del kit está escrita en Java.', a: true, explain: 'El apunte lo remarca al mostrar JConsole analizando la ejecución de sí misma: "como es de esperarse, JConsole está programado en Java".' },
        { id: 'tf2-25-3', q: 'Los comentarios que empiezan con doble barra alcanzan para generar la documentación.', a: false, explain: 'Hacen falta comentarios especiales, que comienzan siempre con "/**".' },
        { id: 'tf2-25-4', q: 'La generación manual de documentación de todo un sistema puede ser compleja o tediosa.', a: true, explain: 'Por eso el apunte recomienda que lo mejor, hoy en día, es utilizar un IDE para estas tareas.' },
        { id: 'tf2-25-5', q: 'Las herramientas para firmar clases y paquetes forman parte del contenido evaluado de la materia.', a: false, explain: 'El apunte las menciona, pero aclara que escapan al scope de la materia.' },
      ],
      mc: [
        {
          id: 'mc2-25-1',
          q: '¿En qué formato entrega la documentación la herramienta correspondiente?',
          options: [
            'Un documento de texto plano con los comentarios extraídos',
            'Un sitio en HTML dividido en frames para navegarlo',
            'Un paquete comprimido listo para distribuir como librería',
            'Una vista gráfica conectada al proceso en ejecución',
          ],
          correctIndex: 1,
          explain: 'javadoc genera documentación en formato HTML y también un "sitio" con la misma, dividida en frames para facilitar la navegación.',
        },
        {
          id: 'mc2-25-2',
          q: '¿Con qué se compara al paquete generado cuando incluye la clase principal?',
          options: [
            'Con un archivo .exe de Windows que contiene todo el programa',
            'Con un archivo de código fuente listo para compilar',
            'Con una variable de entorno que apunta a las librerías',
            'Con una imagen de la máquina virtual lista para instalar',
          ],
          correctIndex: 0,
          explain: 'El apunte hace la analogía con Windows: sería como generar un ".exe" con todo nuestro programa.',
        },
        {
          id: 'mc2-25-3',
          q: '¿Qué muestra la herramienta gráfica de análisis del kit?',
          options: [
            'Los errores de sintaxis que devuelve el compilador',
            'La estructura de paquetes y clases del proyecto',
            'El uso de memoria heap, de procesador y de hilos',
            'El contenido de los paquetes empaquetados en zip',
          ],
          correctIndex: 2,
          explain: 'JConsole se conecta a un proceso java en ejecución y muestra información sobre el uso de memoria (heap), de procesador, de hilos de ejecución, etc.',
        },
      ],
      ms: [
        {
          id: 'ms2-25-1',
          q: '¿Qué usos tiene la herramienta de empaquetado según el apunte?',
          options: [
            'Empaquetar clases compiladas en forma de librerías',
            'Empaquetar todo un programa junto con su clase principal',
            'Indicar cuál es la clase que se usa para iniciar el programa',
            'Mandar a ejecutar el paquete generado',
            'Generar la documentación HTML del proyecto',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain: 'La documentación HTML es tarea de javadoc, no de jar.',
        },
      ],
    },
    flashcards2: [
      { id: 'fc2-25-1', front: '¿Qué comentarios dispara la generación de documentación?', back: 'Los "comentarios especiales": comentarios regulares que comienzan siempre con "/**". El IDE los pinta de un color distinto de los comentarios de código.' },
      { id: 'fc2-25-2', front: '¿Cómo recorre el proyecto la herramienta de documentación?', back: 'Igual que el compilador: se le pasa la clase con los comentarios y va recorriendo las otras clases que esta utiliza según sea necesario.' },
      { id: 'fc2-25-3', front: '¿Qué formato tiene por dentro un .jar?', back: 'Zip estándar (con compresión si se configura); solo cambia la extensión, así que se puede abrir con WinZip o cualquier herramienta similar.' },
      { id: 'fc2-25-4', front: 'Secuencia para compilar, empaquetar y ejecutar', back: '>javac Auto.java, luego >jar -cvf MiProgramaAuto.jar Auto.class, y por último >jar MiProgramaAuto.' },
      { id: 'fc2-25-5', front: '¿Qué es el profiling en el kit de Java?', back: 'Lo que hace JConsole: una herramienta gráfica que se conecta a un proceso java en ejecución y permite analizar aspectos básicos de la performance del programa.' },
      { id: 'fc2-25-6', front: '¿Qué herramientas quedan fuera del alcance de la materia?', back: 'Las de generar pares de claves pública/privada, firmar clases, firmar paquetes (jars generados), generar web services, entre otras.' },
    ],
  },
  '26': {
    quiz2: {
      tf: [
        { id: 'tf2-26-1', q: 'El comportamiento típico que se le pide a la rueda es girar.', a: true, explain: 'El ejercicio 1 lo pide expresamente, junto a radio, color y tipo de material.' },
        { id: 'tf2-26-2', q: 'Se pueden usar referencias entre proyectos de Eclipse para reutilizar las clases del ejercicio previo.', a: false, explain: 'La consigna dice que no se vieron referencias entre proyectos y pide copiar y pegar las clases.' },
        { id: 'tf2-26-3', q: 'El auto puede tener una o varias ruedas según el modelo del ejercicio.', a: true, explain: 'El ejercicio 4 dice que el auto está compuesto por un motor, una caja de velocidades y una o varias ruedas.' },
        { id: 'tf2-26-4', q: 'El reglamento pide realizar validaciones de valores en cada clase.', a: false, explain: 'Al contrario: el objetivo es la práctica de código y no es necesario ni recomendado hacer operaciones complejas ni validaciones.' },
        { id: 'tf2-26-5', q: 'La devolución se da en forma global a través de la plataforma de la materia.', a: true, explain: 'El punto 11 del reglamento: se hace hincapié en los puntos flojos comunes y se remarcan los puntos correctos.' },
      ],
      mc: [
        {
          id: 'mc2-26-1',
          q: '¿Qué característica del motor se ejemplifica con los valores "1600 o 1.6"?',
          options: [
            'Los caballos de fuerza del motor',
            'La cantidad de marchas disponibles',
            'La cilindrada del motor',
            'La velocidad de giro del motor',
          ],
          correctIndex: 2,
          explain: 'El ejercicio 3 pide marca, hp (caballos de fuerza) y cilindrada, y ejemplifica la cilindrada con "1600 o 1.6".',
        },
        {
          id: 'mc2-26-2',
          q: '¿Qué valores puede tomar el tipo de relación de la caja de velocidades?',
          options: [
            'Larga, mediana o corta (L-M-C)',
            'Acero, aleación u otro material',
            'Manual, automática o secuencial',
            'Alta, media o baja según la marcha',
          ],
          correctIndex: 0,
          explain: 'El enunciado especifica el tipo de relación como larga-mediana-corta o L-M-C.',
        },
        {
          id: 'mc2-26-3',
          q: '¿Qué nombres de variables ejemplifica el reglamento como aceptables?',
          options: [
            '"x", "nom" y "val", por ser breves y directos',
            '"incógnita", "nombre" y "valorDeRetorno"',
            'Los que repitan el nombre de la clase como prefijo',
            'Los escritos en mayúsculas y separados con guiones bajos',
          ],
          correctIndex: 1,
          explain: 'El reglamento pide que el código se documente por sí mismo, y contrapone "x", "nom" y "val" con "incógnita", "nombre" y "valorDeRetorno".',
        },
      ],
      ms: [
        {
          id: 'ms2-26-1',
          q: '¿Qué características se piden para el Auto del último ejercicio?',
          options: [
            'Marca',
            'Modelo',
            'Cantidad de puertas',
            'Aire acondicionado como opcional',
            'Tipo de relación de marchas',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain: 'El tipo de relación es una característica de la caja de velocidades, no del auto.',
        },
        {
          id: 'ms2-26-2',
          q: '¿Qué condiciones pueden dejar la actividad como "no entregada"?',
          options: [
            'Que los programas no compilen y corran correctamente',
            'Que se ignoren las convenciones de código de los módulos teóricos',
            'Que se use nombres de variables poco descriptivos',
            'Que se acople la salida de los métodos a la consola sin justificar',
            'Que la nota numérica quede por debajo del mínimo',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain: 'No hay nota numérica: la actividad no está calificada numéricamente y su valoración es "entregada" o "no entregada".',
        },
      ],
    },
    flashcards2: [
      { id: 'fc2-26-1', front: '¿Qué características tiene la rueda del ejercicio 1?', back: 'Radio, color y tipo de material que la compone (acero, aleación, etc.), con "girar" como comportamiento típico.' },
      { id: 'fc2-26-2', front: '¿Qué comportamiento se le pide a la caja de velocidades?', back: 'Cambiar de marcha. Sus características son fabricante, cantidad de marchas y tipo de relación (larga-mediana-corta o L-M-C).' },
      { id: 'fc2-26-3', front: '¿Qué se le debe poder hacer al motor?', back: 'Hacerlo arrancar y detener. Sus características son marca, hp (caballos de fuerza) y cilindrada (1600 o 1.6).' },
      { id: 'fc2-26-4', front: '¿Cómo se compone el auto?', back: 'Por un motor, una caja de velocidades y una o varias ruedas; además tiene marca, modelo, cantidad de puertas y el opcional de aire acondicionado.' },
      { id: 'fc2-26-5', front: '¿Cómo se organiza la entrega en el IDE?', back: 'Cada ejercicio en su propio "Java Project", copiando y pegando las clases del ejercicio anterior cuando hagan falta; la entrega es un paquete exportado desde Eclipse o del IDE que se use.' },
      { id: 'fc2-26-6', front: '¿Cómo se valora la actividad?', back: 'Sin nota numérica: "entregada" o "no entregada", con una sola entrega admitida y sin reevaluación por parte del docente.' },
    ],
  },
  '27': {
    quiz2: {
      tf: [
        { id: 'tf2-27-1', q: 'La letra L identifica a las computadoras de tipo Laptop.', a: true, explain: 'Los tipos son D para desktop, A para All-in-one y L para Laptop.' },
        { id: 'tf2-27-2', q: 'La velocidad del procesador se expresa en RPM.', a: false, explain: 'La velocidad del procesador va en gigahertz; las RPM son la velocidad de operación del disco rígido.' },
        { id: 'tf2-27-3', q: 'El ejercicio de componentes compartidos pide anotar los resultados como comentarios en el código.', a: true, explain: 'La consigna lo pide y hasta recuerda que los comentarios, tal cual en C, son con "//" o "/* ....... */".' },
        { id: 'tf2-27-4', q: 'Al implementar el apagado hay que poder consultar el estado de los componentes.', a: true, explain: 'El ejercicio 3 pide agregar los atributos y comportamientos necesarios para preguntarle a la computadora y a sus componentes si están encendidos.' },
        { id: 'tf2-27-5', q: 'Las tres características básicas de la computadora dependen de su tipo.', a: false, explain: 'El enunciado aclara que cada computadora posee 3 características básicas independientemente de su tipo: disco rígido, procesador y memoria.' },
      ],
      mc: [
        {
          id: 'mc2-27-1',
          q: '¿Qué escenario plantea el ejercicio de componentes compartidos?',
          options: [
            'Que cada computadora tenga su propio disco de igual marca',
            'Que una Laptop y una Desktop tengan el mismo disco',
            'Que una computadora cambie de disco al encenderse',
            'Que los discos se agrupen dentro de una única PC',
          ],
          correctIndex: 1,
          explain: 'La consigna dice: si tengo un Samsung de 500gb, tanto una Laptop como una Desktop tengan el mismo disco. Después hay que alterarle los valores y volver a imprimir.',
        },
        {
          id: 'mc2-27-2',
          q: '¿Qué debe ocurrir cuando la computadora ejecuta su comportamiento de encendido?',
          options: [
            'Se enciende su procesador y su disco rígido',
            'Se libera la memoria ocupada por sus componentes',
            'Se imprime automáticamente el detalle de sus valores',
            'Se construyen los componentes que aún no existen',
          ],
          correctIndex: 0,
          explain: 'El ejercicio 3 dice que cuando una computadora enciende, se enciende su procesador y su disco rígido.',
        },
        {
          id: 'mc2-27-3',
          q: '¿Qué datos tiene el disco rígido según el enunciado?',
          options: [
            'Marca, modelo y velocidad en gigahertz',
            'Marca, capacidad en gigabytes y velocidad en RPM',
            'Marca, año de fabricación y tipo asignado',
            'Capacidad en gigabytes, color y cantidad de memoria',
          ],
          correctIndex: 1,
          explain: 'Marca, modelo y velocidad en gigahertz son del procesador. El disco tiene marca, capacidad en gigabytes y velocidad de operación en RPM.',
        },
      ],
      ms: [
        {
          id: 'ms2-27-1',
          q: '¿Qué elementos aparecen en la línea de ejemplo que debe poder imprimir una computadora?',
          options: [
            'La marca y el modelo de la computadora',
            'La marca del procesador',
            'La capacidad del disco',
            'La cantidad de memoria RAM',
            'El año de fabricación',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain: 'El ejemplo es "Toshiba G480 -- Procesador: AMD -- Disco: 500gb -- Ram:4gb": no incluye el año de fabricación.',
        },
      ],
    },
    flashcards2: [
      { id: 'fc2-27-1', front: '¿Qué letras distinguen los tipos de computadora?', back: 'D para desktop, A para All-in-one y L para Laptop.' },
      { id: 'fc2-27-2', front: '¿Qué tres componentes tiene toda computadora del ejercicio?', back: 'Un disco rígido, un procesador y una cierta cantidad de memoria, independientemente de su tipo.' },
      { id: 'fc2-27-3', front: '¿Cómo se describe el disco rígido y cómo el procesador?', back: 'Disco: marca, capacidad en gigabytes y velocidad de operación en RPM. Procesador: marca, modelo y velocidad en gigahertz.' },
      { id: 'fc2-27-4', front: 'Ejemplo de configuración a construir', back: 'Una Laptop Toshiba, G480, modelo 2013, con Procesador Intel de 1,5 GHz, 4 gb de RAM y un disco de 500gb.' },
      { id: 'fc2-27-5', front: '¿Qué hay que observar al compartir un componente entre dos computadoras?', back: 'Se le alteran los valores al componente compartido, se vuelven a imprimir los valores de la computadora y se anotan los resultados como comentarios en el código.' },
      { id: 'fc2-27-6', front: '¿Qué comportamientos pide el último ejercicio?', back: 'Encender (que enciende también procesador y disco rígido) y apagar, más los atributos y comportamientos necesarios para preguntar si la computadora y sus componentes están encendidos.' },
    ],
  },
};
