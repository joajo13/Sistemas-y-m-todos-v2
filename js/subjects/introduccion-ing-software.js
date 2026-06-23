/**
 * Materia: Introducción a la Ingeniería de Software (UP).
 * Módulos 1 a 6 — Conceptos, ciclo de vida, metodologías ágiles, modelado de
 * procesos de negocio, extracción y fundamentos de ingeniería de requerimientos.
 * Módulos 7 a 12 — Especificación, modelado y pruebas de requerimientos,
 * diagramas de secuencia, tipos de sistemas, reingeniería y métodos formales.
 *
 * Tipos conceptuales (ver js/content.js para Subject/Section/ContentBlock).
 */

export default {
  id: 'introduccion-ing-software',
  title: 'Introducción a la Ingeniería de Software',
  subtitle: 'Módulos 1 a 12 — Apuntes',
  tagline: 'Conceptos y ciclo de vida · Metodologías ágiles · Modelado de procesos de negocio · Ingeniería de requerimientos · Especificación, modelado y pruebas · Diagramas de secuencia · Tipos de sistemas · Reingeniería',
  units: {
    '1': 'Conceptos de ingeniería de software',
    '2': 'El ciclo de vida del desarrollo de software',
    '3': 'Metodologías ágiles',
    '4': 'Modelado de los procesos de negocio',
    '5': 'Extracción de requerimientos',
    '6': 'Fundamentos de la ingeniería de requerimientos',
    '7': 'Especificación de requerimientos',
    '8': 'Modelado de requerimientos',
    '9': 'Pruebas de los requerimientos',
    '10': 'Diagramas de secuencia',
    '11': 'Tipos de sistemas',
    '12': 'Reingeniería y métodos formales',
    'tp': 'TP Integrador — Sistema para librería',
  },
  sections: [
// ---------- UNIDAD 1 · SECCIÓN 1.1 ----------
{
  id: '1.1',
  unit: '1',
  title: '¿Qué es la ingeniería de software?',
  criollo: 'Básicamente, la ingeniería de software nace en 1968 cuando se dieron cuenta de que los proyectos de software se iban a la mierda en tiempo y plata: la famosa "crisis del software". Acá vemos las definiciones clásicas, qué es el proceso, qué es el producto y qué tiene que saber un buen ingeniero.',
  blocks: [
    {
      type: 'h3',
      text: 'El origen: la crisis del software (1968)',
    },
    {
      type: 'p',
      text: 'En 1968, año en el que la <strong>OTAN</strong> (Organización del Tratado del Atlántico Norte) desarrolló la primera conferencia sobre desarrollo de software, se acuñaron los términos <strong>crisis del software</strong>, para definir los problemas que surgían en el desarrollo de sistemas de software, e <strong>ingeniería del software</strong>, para describir el conjunto de conocimientos que existían en aquel estado inicial.',
    },
    {
      type: 'p',
      text: 'La <strong>crisis del software</strong> fue el resultado de proyectos de desarrollo que se extendían más allá de los costos y los tiempos planificados (si es que se lograban concluir, ya que a veces se debía cancelar el proyecto). De los sistemas que lograban completarse, se detectó que tenían un <strong>alto costo de mantenimiento</strong>, en ocasiones equiparable al costo que había insumido su desarrollo. Esto motivó la necesidad de una disciplina que pudiera aportar mejoras a los procesos, incluyendo <strong>métodos, técnicas y herramientas</strong>. La ingeniería de software contempla todos los aspectos referentes a la producción de software.',
    },
    {
      type: 'h3',
      text: 'Las definiciones clásicas',
      criollo: 'Tres autores, tres definiciones. La de Boehm es la que el apunte considera más completa.',
    },
    {
      type: 'p',
      text: '<strong>Fritz Bauer</strong> acuñó la definición original: "Establecimiento y uso de principios de ingeniería para obtener software económico que trabaje de forma eficiente en máquinas reales".',
    },
    {
      type: 'p',
      text: 'La <strong>IEEE</strong> (Institute of Electrical and Electronics Engineers), en 1993, la definió como: "La aplicación de métodos sistemáticos, disciplinados y cuantificables para el desarrollo, operación y mantenimiento de software; esto es, la aplicación de la ingeniería al software". Esta definición también contempla el estudio de la aplicación de estos métodos.',
    },
    {
      type: 'p',
      text: 'Una de las definiciones que parece más completas fue aportada por <strong>Barry W. Boehm</strong>: "la aplicación práctica del conocimiento científico al diseño y construcción de programas y la documentación asociada requerida para desarrollar, operar y mantenerlos".',
    },
    {
      type: 'h3',
      text: 'El producto de software',
    },
    {
      type: 'p',
      text: 'Cuando hablamos de un <strong>producto de software</strong> es común asociarlo a los programas ejecutables, aunque esto es erróneo. No solo es el código objeto y el manual del usuario que se entrega al cliente, sino también los <strong>documentos asociados</strong> producidos durante el proceso: la documentación de los requerimientos, el diseño, el código fuente, los datos de prueba, etc.',
    },
    {
      type: 'h3',
      text: 'El proceso de software',
    },
    {
      type: 'p',
      text: 'El <strong>proceso</strong> es el que se usa para generar un producto de software a partir de los requerimientos del usuario. <strong>Ian F. Sommerville</strong> define el proceso del software como "un conjunto de actividades cuya meta es el desarrollo o evolución del software".',
    },
    {
      type: 'h3',
      text: 'El rol del ingeniero de software',
      criollo: 'No alcanza con saber programar: hay que traducir deseos vagos en specs, hablar varios idiomas (técnico y de negocio) y laburar en equipo.',
    },
    {
      type: 'p',
      text: 'Idealmente, un buen ingeniero de software debe prepararse para enfrentar varios desafíos. Para poder hacerlo debería:',
    },
    {
      type: 'ul',
      items: [
        'Poseer <strong>experiencia en programación</strong>.',
        'Conocer de <strong>estructuras de datos</strong>.',
        'Contar con capacidad para <strong>traducir requerimientos y deseos vagos</strong> en una especificación clara y precisa de requerimientos.',
        'Poder manejar <strong>diferente vocabulario</strong>: usar conceptos técnicos con el equipo de desarrollo, pero en términos de la aplicación al interactuar con un usuario.',
        'Contar con habilidad para moverse en <strong>diferentes niveles de abstracción</strong> en las distintas etapas del proyecto.',
        'Conocer acerca de <strong>modelado de procesos y de datos</strong> para poder construirlos, usarlos y comprenderlos.',
        'Tener habilidad para la <strong>comunicación interpersonal y la administración del trabajo</strong>, ya que es una disciplina que se lleva a cabo en interacción con otros, no en forma individual.',
      ],
    },
    {
      type: 'callout',
      tone: 'criollo',
      text: 'Resumen: el producto NO es solo el ejecutable (incluye toda la documentación), el proceso es el conjunto de actividades que llevan de los requerimientos al producto, y el ingeniero es mucho más que un programador.',
    },
  ],
  quiz: {
    tf: [
      {
        id: 'tf-1.1-1',
        q: 'El término "crisis del software" se acuñó en 1968 durante la primera conferencia de la OTAN sobre desarrollo de software.',
        a: true,
        explain: 'Verdadero. En 1968, en esa conferencia de la OTAN, se acuñaron los términos "crisis del software" e "ingeniería del software".',
      },
      {
        id: 'tf-1.1-2',
        q: 'El producto de software es únicamente el código ejecutable y el manual de usuario.',
        a: false,
        explain: 'Falso. Esa asociación es errónea: el producto incluye también los documentos asociados como requerimientos, diseño, código fuente, datos de prueba, etc.',
      },
      {
        id: 'tf-1.1-3',
        q: 'Según el apunte, la definición de Boehm es una de las más completas para comprender la disciplina.',
        a: true,
        explain: 'Verdadero. El apunte presenta la definición de Barry W. Boehm como una de las más completas.',
      },
      {
        id: 'tf-1.1-4',
        q: 'Sommerville define el proceso del software como un conjunto de actividades cuya meta es el desarrollo o evolución del software.',
        a: true,
        explain: 'Verdadero. Esa es exactamente la definición de proceso que aporta Ian F. Sommerville.',
      },
      {
        id: 'tf-1.1-5',
        q: 'La ingeniería de software es una disciplina que se lleva a cabo de forma individual.',
        a: false,
        explain: 'Falso. El apunte destaca que no se lleva a cabo en forma individual, sino en interacción con otros, por eso importa la comunicación interpersonal.',
      },
    ],
    mc: [
      {
        id: 'mc-1.1-1',
        q: '¿Qué organización desarrolló en 1968 la primera conferencia sobre desarrollo de software?',
        options: [
          'IEEE',
          'OTAN',
          'ISO',
          'American Heritage',
        ],
        correctIndex: 1,
        explain: 'Fue la OTAN (Organización del Tratado del Atlántico Norte) la que desarrolló esa primera conferencia en 1968.',
      },
      {
        id: 'mc-1.1-2',
        q: '¿Quién acuñó la definición original de ingeniería de software citada en el apunte?',
        options: [
          'Barry W. Boehm',
          'Ian F. Sommerville',
          'Fritz Bauer',
          'Frederick Brooks',
        ],
        correctIndex: 2,
        explain: 'Fritz Bauer acuñó la definición original: "Establecimiento y uso de principios de ingeniería para obtener software económico que trabaje de forma eficiente en máquinas reales".',
      },
      {
        id: 'mc-1.1-3',
        q: '¿Cuál de los siguientes NO forma parte del producto de software según el apunte?',
        options: [
          'El código fuente',
          'Los datos de prueba',
          'La documentación de requerimientos',
          'El cronograma de costos del proyecto',
        ],
        correctIndex: 3,
        explain: 'El apunte enumera código objeto, manual, requerimientos, diseño, código fuente y datos de prueba como parte del producto. El cronograma de costos no se menciona como parte del producto.',
      },
      {
        id: 'mc-1.1-4',
        q: 'Según Sommerville, el proceso del software es:',
        options: [
          'El código ejecutable entregado al cliente',
          'Un conjunto de actividades cuya meta es el desarrollo o evolución del software',
          'La aplicación de leyes matemáticas al desarrollo',
          'Una colección de componentes organizados',
        ],
        correctIndex: 1,
        explain: 'Sommerville define el proceso del software como un conjunto de actividades cuya meta es el desarrollo o evolución del software.',
      },
    ],
    ms: [
      {
        id: 'ms-1.1-1',
        q: '¿Cuáles de los siguientes forman parte del producto de software según el apunte?',
        options: [
          'El código objeto y el manual de usuario',
          'La documentación de los requerimientos',
          'El diseño y el código fuente',
          'Los costos y tiempos planificados del proyecto',
          'Los datos de prueba',
        ],
        correctIndexes: [
          0,
          1,
          2,
          4,
        ],
        explain: 'El producto incluye código objeto, manual, requerimientos, diseño, código fuente y datos de prueba. Los costos y tiempos planificados son parte de la gestión del proyecto, no del producto.',
      },
      {
        id: 'ms-1.1-2',
        q: '¿Qué habilidades o conocimientos debería tener idealmente un buen ingeniero de software?',
        options: [
          'Experiencia en programación',
          'Conocer estructuras de datos',
          'Capacidad de traducir requerimientos vagos en una especificación clara',
          'Habilidad para la comunicación interpersonal y la administración del trabajo',
          'Trabajar siempre de forma individual y aislada',
        ],
        correctIndexes: [
          0,
          1,
          2,
          3,
        ],
        explain: 'El apunte lista experiencia en programación, estructuras de datos, traducir requerimientos vagos y comunicación interpersonal. Lo contrario al trabajo aislado: la disciplina se da en interacción con otros.',
      },
    ],
  },
  flashcards: [
    {
      id: 'fc-1.1-1',
      front: 'Crisis del software',
      back: 'Término acuñado en 1968 para definir los problemas en el desarrollo de software: proyectos que se pasaban de costos y tiempos, a veces se cancelaban, y los terminados tenían alto costo de mantenimiento.',
    },
    {
      id: 'fc-1.1-2',
      front: 'Año y conferencia clave',
      back: '1968, primera conferencia de la OTAN sobre desarrollo de software, donde se acuñaron los términos "crisis del software" e "ingeniería del software".',
    },
    {
      id: 'fc-1.1-3',
      front: 'Definición de Boehm',
      back: 'La aplicación práctica del conocimiento científico al diseño y construcción de programas y la documentación asociada requerida para desarrollar, operar y mantenerlos. El apunte la considera una de las más completas.',
    },
    {
      id: 'fc-1.1-4',
      front: 'Definición de la IEEE (1993)',
      back: 'La aplicación de métodos sistemáticos, disciplinados y cuantificables para el desarrollo, operación y mantenimiento de software; esto es, la aplicación de la ingeniería al software.',
    },
    {
      id: 'fc-1.1-5',
      front: 'Producto de software',
      back: 'No es solo el ejecutable: incluye el código objeto, el manual de usuario y los documentos asociados (requerimientos, diseño, código fuente, datos de prueba, etc.).',
    },
    {
      id: 'fc-1.1-6',
      front: 'Proceso de software (Sommerville)',
      back: 'Un conjunto de actividades cuya meta es el desarrollo o evolución del software. Es lo que lleva de los requerimientos del usuario al producto.',
    },
    {
      id: 'fc-1.1-7',
      front: 'Rol del ingeniero de software',
      back: 'Más que programar: traducir requerimientos vagos en specs claras, manejar distintos niveles de abstracción y vocabularios, modelar procesos y datos, y comunicarse y trabajar en equipo.',
    },
  ],
},
// ---------- UNIDAD 1 · SECCIÓN 1.2 ----------
{
  id: '1.2',
  unit: '1',
  title: 'Sistemas vs. software',
  criollo: 'Acá la idea es no confundir el todo con la parte. Un sistema basado en computadoras tiene un montón de componentes (hardware, gente, datos, procedimientos...) y el software es solo uno de ellos: el lógico, el que no podés tocar.',
  blocks: [
    {
      type: 'h3',
      text: '¿Qué es un sistema?',
    },
    {
      type: 'p',
      text: 'La definición de sistema indica que se trata de una "<strong>colección de componentes organizados para cumplir una función o conjunto de funciones específicas</strong>" (IEEE Standard 610.12-1990).',
    },
    {
      type: 'p',
      text: 'Los elementos componentes de un <strong>sistema basado en computadoras</strong> involucran no solo los programas (software), sino también:',
    },
    {
      type: 'ul',
      items: [
        '<strong>Software</strong>: los programas de computadora.',
        '<strong>Hardware</strong>: los dispositivos electrónicos necesarios.',
        '<strong>Gente</strong>: los usuarios y quienes operan el sistema.',
        '<strong>Base de datos</strong>: donde está la información que maneja el software.',
        '<strong>Documentación</strong>: los manuales para operar.',
        '<strong>Procedimientos</strong>: indican el uso de cada elemento del sistema.',
      ],
    },
    {
      type: 'callout',
      tone: 'info',
      text: 'El apunte acompaña esto con un gráfico de un sistema que recibe entradas y produce salidas, mostrando todos sus componentes (software, hardware, gente, base de datos, documentos y procedimientos). El gráfico se nombra pero el texto no lo desarrolla en detalle.',
    },
    {
      type: 'h3',
      text: '¿Qué es el software?',
      criollo: 'A diferencia del hardware (físico), el software es lógico: no lo tocás.',
    },
    {
      type: 'p',
      text: 'El software es un elemento componente de un sistema que, a diferencia del hardware (físico), es <strong>lógico</strong>. Es un sistema, o sub-sistema, formado por una <strong>colección de programas y documentación</strong> que de forma conjunta satisfacen unos determinados requisitos.',
    },
    {
      type: 'h3',
      text: 'Sistema independiente vs. sub-sistema de software',
    },
    {
      type: 'p',
      text: 'Un sistema de software puede ser en sí mismo un <strong>sistema independiente</strong> que, por ejemplo, realiza su objetivo en un ordenador independiente. También puede formar parte de un <strong>sistema mayor</strong>, en cuyo caso se trata en realidad de un <strong>sub-sistema de software</strong>.',
    },
    {
      type: 'callout',
      tone: 'info',
      text: 'Ejemplo del apunte: el sistema de GPS del celular es, en realidad, un sub-sistema del software del celular.',
    },
    {
      type: 'callout',
      tone: 'criollo',
      text: 'Moraleja: sistema es el todo (incluye gente, fierros, datos, etc.); el software es la parte lógica. Y un software puede ser autónomo o ser un sub-sistema dentro de algo más grande.',
    },
  ],
  quiz: {
    tf: [
      {
        id: 'tf-1.2-1',
        q: 'Un sistema es una colección de componentes organizados para cumplir una función o conjunto de funciones específicas.',
        a: true,
        explain: 'Verdadero. Esa es la definición de sistema según el IEEE Standard 610.12-1990 que cita el apunte.',
      },
      {
        id: 'tf-1.2-2',
        q: 'El software es un componente físico de un sistema, igual que el hardware.',
        a: false,
        explain: 'Falso. A diferencia del hardware (físico), el software es lógico.',
      },
      {
        id: 'tf-1.2-3',
        q: 'La gente (usuarios y operadores) es uno de los componentes de un sistema basado en computadoras.',
        a: true,
        explain: 'Verdadero. La gente es uno de los componentes, junto con software, hardware, base de datos, documentación y procedimientos.',
      },
      {
        id: 'tf-1.2-4',
        q: 'Un sistema de software siempre es un sistema independiente y nunca puede ser parte de un sistema mayor.',
        a: false,
        explain: 'Falso. Puede ser independiente o formar parte de un sistema mayor, en cuyo caso es un sub-sistema de software.',
      },
    ],
    mc: [
      {
        id: 'mc-1.2-1',
        q: '¿Qué estándar define al sistema como "colección de componentes organizados para cumplir una función o conjunto de funciones específicas"?',
        options: [
          'IEEE Std. 830-1998',
          'IEEE Standard 610.12-1990',
          'ISO 9001',
          'IEEE 802.11',
        ],
        correctIndex: 1,
        explain: 'Esa definición corresponde al IEEE Standard 610.12-1990.',
      },
      {
        id: 'mc-1.2-2',
        q: 'Según el apunte, ¿qué ejemplifica un sub-sistema de software?',
        options: [
          'El sistema operativo de una PC de escritorio',
          'El sistema de GPS del celular',
          'Una base de datos relacional',
          'El manual de usuario',
        ],
        correctIndex: 1,
        explain: 'El apunte usa el sistema de GPS del celular como ejemplo de sub-sistema del software del celular.',
      },
      {
        id: 'mc-1.2-3',
        q: 'El componente "procedimientos" de un sistema basado en computadoras:',
        options: [
          'Contiene la información que maneja el software',
          'Indica el uso de cada elemento del sistema',
          'Son los dispositivos electrónicos necesarios',
          'Son los usuarios que operan el sistema',
        ],
        correctIndex: 1,
        explain: 'Los procedimientos indican el uso de cada elemento del sistema. La información va en la base de datos, los dispositivos son el hardware y los usuarios son la gente.',
      },
    ],
    ms: [
      {
        id: 'ms-1.2-1',
        q: '¿Cuáles de los siguientes son componentes de un sistema basado en computadoras según el apunte?',
        options: [
          'Software',
          'Hardware',
          'Gente',
          'Base de datos',
          'Procedimientos',
        ],
        correctIndexes: [
          0,
          1,
          2,
          3,
          4,
        ],
        explain: 'Todos lo son. El apunte enumera software, hardware, gente, base de datos, documentación y procedimientos como componentes del sistema.',
      },
      {
        id: 'ms-1.2-2',
        q: '¿Qué afirmaciones sobre el software son correctas según el apunte?',
        options: [
          'Es un elemento lógico, a diferencia del hardware que es físico',
          'Es una colección de programas y documentación que satisfacen ciertos requisitos',
          'Puede ser un sistema independiente',
          'Puede ser un sub-sistema de un sistema mayor',
          'Es siempre un componente físico tangible',
        ],
        correctIndexes: [
          0,
          1,
          2,
          3,
        ],
        explain: 'El software es lógico (no físico), es una colección de programas y documentación, y puede ser tanto un sistema independiente como un sub-sistema. Lo de "componente físico tangible" es falso.',
      },
    ],
  },
  flashcards: [
    {
      id: 'fc-1.2-1',
      front: 'Definición de sistema',
      back: 'Colección de componentes organizados para cumplir una función o conjunto de funciones específicas (IEEE Standard 610.12-1990).',
    },
    {
      id: 'fc-1.2-2',
      front: 'Componentes de un sistema',
      back: 'Software, hardware, gente (usuarios y operadores), base de datos, documentación y procedimientos.',
    },
    {
      id: 'fc-1.2-3',
      front: 'Software vs. hardware',
      back: 'El hardware es físico; el software es lógico. El software es una colección de programas y documentación que en conjunto satisfacen ciertos requisitos.',
    },
    {
      id: 'fc-1.2-4',
      front: 'Sub-sistema de software',
      back: 'Cuando un sistema de software forma parte de un sistema mayor. Ejemplo del apunte: el GPS del celular es un sub-sistema del software del celular.',
    },
    {
      id: 'fc-1.2-5',
      front: 'Procedimientos (componente)',
      back: 'Indican el uso de cada elemento del sistema.',
    },
    {
      id: 'fc-1.2-6',
      front: 'Base de datos (componente)',
      back: 'Es donde está la información que maneja el software dentro del sistema.',
    },
  ],
},
// ---------- UNIDAD 1 · SECCIÓN 1.3 ----------
{
  id: '1.3',
  unit: '1',
  title: 'Calidad, cualidades, principios y esencia/accidente',
  criollo: 'Calidad no es "excelencia" a secas: es que el software tenga la combinación de atributos deseados y que el cliente sienta que cumple. Acá van las cualidades (correctitud, confiabilidad, robustez...), los principios que se aplican durante todo el proceso, y la idea de Brooks sobre dificultades esenciales y accidentales.',
  blocks: [
    {
      type: 'h3',
      text: 'Calidad del software y sus vistas',
    },
    {
      type: 'p',
      text: 'Calidad implica excelencia de algún tipo, pero ese no es el significado que le dan los profesionales de la ingeniería de software. El <strong>American Heritage Dictionary</strong> define la calidad como "una característica o atributo de algo". El software, como entidad intelectual, es más difícil de caracterizar que los objetos físicos.',
    },
    {
      type: 'p',
      text: 'Según la <strong>IEEE</strong>: "Es cuando el software posee una <strong>buena combinación de atributos deseados</strong> y el cliente o usuario percibe que el producto <strong>cumple con sus expectativas</strong>".',
    },
    {
      type: 'p',
      text: 'Cada involucrado tiene una <strong>vista diferente</strong> de la calidad: para el <strong>usuario</strong> puede ser que el producto sea confiable, eficiente y fácil de usar; para el <strong>desarrollador</strong>, que sea fácil de verificar o mantener; para el <strong>administrador del proyecto</strong>, un buen nivel de productividad y eficiencia en el proceso de desarrollo.',
    },
    {
      type: 'callout',
      tone: 'info',
      text: 'Conclusión del apunte: la calidad es la totalidad de características de un producto o servicio que se refieren a su habilidad para satisfacer necesidades establecidas o implicadas.',
    },
    {
      type: 'h3',
      text: 'Calidad del proceso vs. calidad del producto',
      criollo: 'El software no se fabrica como el hardware: es más creativo que mecánico, así que la relación proceso-producto es más enroscada.',
    },
    {
      type: 'p',
      text: 'La gestión de calidad propone que la <strong>calidad del proceso afecta directamente la calidad del producto</strong>. En el hardware el vínculo es claro: buen diseño y luego la producción casi no presenta problemas. Pero el software <strong>no se fabrica</strong>: es un proceso más creativo que mecánico, donde la experiencia y habilidades individuales son importantes, y la calidad se ve afectada por factores externos. Aun así, la experiencia demuestra que la calidad del proceso tiene una influencia significativa en la calidad del producto, minimizando los defectos.',
    },
    {
      type: 'h3',
      text: 'Cualidades del software',
      criollo: 'Las cualidades son atributos de calidad. Internas (le importan a los devs) o externas (las ven los usuarios). Ojo: no todas se le piden a cada producto.',
    },
    {
      type: 'p',
      text: 'Las cualidades del software son características que se presentan en el producto o en su proceso de desarrollo. Según <strong>Ghezzi</strong> pueden clasificarse en <strong>internas</strong> (relevantes para los desarrolladores) y <strong>externas</strong> (visibles o relevantes para los usuarios). El producto de software se diferencia por su <strong>maleabilidad</strong>: puede modificarse con facilidad.',
    },
    {
      type: 'table',
      caption: 'Cualidades del producto y del proceso',
      headers: ['Cualidad', 'Significado'],
      rows: [
        ['Correctitud', 'Es "funcionalmente correcto" si se comporta de acuerdo a la especificación de funciones que debería proveer.'],
        ['Confiabilidad', 'El usuario puede depender de él. Formalmente, la probabilidad de que opere como se esperaba dentro de un intervalo de tiempo especificado.'],
        ['Robustez', 'Se comporta razonablemente aun en circunstancias no anticipadas en la especificación (ej.: no falla irrecuperablemente al presionar una tecla errónea).'],
        ['Performance', 'Eficiencia: utiliza los recursos en forma económica (tiempo, memoria).'],
        ['Amigabilidad', 'El usuario lo encuentra fácil de usar. Es más que la interfaz; la correctitud y la performance también la afectan.'],
        ['Verificabilidad', 'Facilidad de prueba: sus propiedades pueden comprobarse fácilmente. Aporta el diseño modular y la codificación disciplinada.'],
        ['Mantenibilidad', 'Modificaciones hechas tras la entrega inicial: arreglar errores e incorporar mejoras o cambios.'],
        ['Reusabilidad', 'Se aplica más a una parte que al producto entero. Difícil de lograr a posteriori; hay que pensarla al desarrollar los componentes.'],
        ['Portabilidad', 'Puede "correr" en distintos ambientes (plataforma de hardware, ambiente de software o sistema operativo).'],
        ['Interoperabilidad', 'Habilidad de coexistir y cooperar con otros sistemas (ej.: importar/exportar datos). Importa la estandarización de interfaces.'],
        ['Productividad', 'Eficiencia del proceso de producción según los recursos requeridos. Las rutinas reusables la mejoran.'],
        ['Oportunidad', 'Cualidad del proceso: habilidad de entregar un producto a tiempo. Requiere buena programación, estimación y metas claras.'],
        ['Visibilidad', 'El proceso es visible si todos sus pasos y su estado actual están documentados y accesibles para examinación externa.'],
        ['Integridad', 'Atributo que controla los accesos no autorizados a datos o software.'],
      ],
    },
    {
      type: 'callout',
      tone: 'warning',
      text: 'No todas las cualidades se le piden a cada producto o proceso: hay que identificar cuáles son relevantes al establecer los requisitos. Por ejemplo, no todos los productos necesitan ser portables; depende de quiénes sean sus clientes.',
    },
    {
      type: 'h3',
      text: 'Principios de la ingeniería de software',
      criollo: 'A diferencia de las cualidades, los principios se aplican durante todo el proceso y la evolución del software. Son la piedra angular de la disciplina.',
    },
    {
      type: 'p',
      text: 'A diferencia de las cualidades, los principios se aplican <strong>a través de todo el proceso de desarrollo y la evolución del software</strong>. Por su aplicabilidad general, constituyen la piedra angular de la ingeniería del software, más que de una fase aislada del ciclo de vida.',
    },
    {
      type: 'ul',
      items: [
        '<strong>Rigor y formalidad</strong>: el rigor complementa a la creatividad y permite productos más confiables y controlar costos. Su nivel más alto es la formalidad, que requiere conducir y evaluar el proceso mediante leyes matemáticas.',
        '<strong>Separación de incumbencias o responsabilidades</strong>: tratar aspectos individuales de un problema por separado para concentrarse en cada uno (ej.: equipos de desarrollo, testing & QA, redes, etc.).',
        '<strong>Modularidad</strong>: dividir un sistema complejo en partes más sencillas (módulos), reduciendo la complejidad y facilitando la modificación o corrección. Un buen diseño de módulos debe tener <strong>alta cohesión</strong> (interrelación entre componentes internos del módulo) y <strong>bajo acoplamiento</strong> (relación entre módulos).',
        '<strong>Abstracción</strong>: identificar los aspectos importantes de un fenómeno e ignorar los no relevantes para su comprensión.',
        '<strong>Anticipación al cambio</strong>: identificar necesidades de reparación o evolución a medida que surgen o se modifican requerimientos. De esto se ocupa la Administración de configuraciones (control de versiones y revisiones).',
        '<strong>Generalización</strong>: descubrir un problema más general oculto detrás del que se trata.',
        '<strong>Incrementalidad</strong>: identificar subconjuntos de la aplicación para hacer entregas al usuario y obtener pronta realimentación. Los productos intermedios pueden ser prototipos del final.',
      ],
    },
    {
      type: 'h3',
      text: 'Esencia y accidente (Brooks, "No silver bullet")',
      criollo: 'Brooks divide las dificultades en dos: las esenciales son inherentes al software y no se van; las accidentales son del momento y van cambiando con la tecnología.',
    },
    {
      type: 'p',
      text: 'Como indica <strong>Frederick Brooks</strong> en su artículo "<strong>No silver bullet</strong>", todo proceso de construcción de software involucra dificultades que pueden clasificarse en <strong>esenciales</strong> y <strong>accidentales</strong>.',
    },
    {
      type: 'p',
      text: 'Citando a Aristóteles, las <strong>dificultades esenciales</strong> son inherentes a la naturaleza del software: <strong>complejidad, conformidad, variabilidad o mutabilidad e invisibilidad</strong>; factores que pese al progreso tecnológico siguen presentes. Las <strong>dificultades accidentales</strong> asisten a la producción pero no son inherentes, por lo que con los avances tecnológicos pueden ir variando (por ejemplo, lenguajes de programación, limitaciones en espacio o velocidad de los dispositivos).',
    },
    {
      type: 'callout',
      tone: 'criollo',
      text: 'Clave: cualidades = atributos del producto/proceso; principios = se aplican durante todo el proceso. Y de las dificultades de Brooks, las esenciales no se las saca nadie, las accidentales sí mejoran con la tecnología.',
    },
  ],
  quiz: {
    tf: [
      {
        id: 'tf-1.3-1',
        q: 'Para la ingeniería de software, calidad significa simplemente "excelencia".',
        a: false,
        explain: 'Falso. El apunte aclara que ese no es el significado que le dan los profesionales: la calidad es una buena combinación de atributos deseados que cumple las expectativas del cliente.',
      },
      {
        id: 'tf-1.3-2',
        q: 'Según Ghezzi, las cualidades internas son relevantes para los desarrolladores y las externas para los usuarios.',
        a: true,
        explain: 'Verdadero. Esa es exactamente la clasificación de Ghezzi entre cualidades internas y externas.',
      },
      {
        id: 'tf-1.3-3',
        q: 'Un buen diseño de módulos debe tener alta cohesión y bajo acoplamiento.',
        a: true,
        explain: 'Verdadero. La cohesión mide la interrelación interna del módulo y el acoplamiento la relación entre módulos: se busca alta cohesión y bajo acoplamiento.',
      },
      {
        id: 'tf-1.3-4',
        q: 'Las dificultades accidentales de Brooks son inherentes a la naturaleza del software y no varían con la tecnología.',
        a: false,
        explain: 'Falso. Las inherentes son las esenciales. Las accidentales asisten a la producción pero no son inherentes y pueden variar con los avances tecnológicos.',
      },
      {
        id: 'tf-1.3-5',
        q: 'Todas las cualidades deben pedirse siempre a cada producto de software.',
        a: false,
        explain: 'Falso. No todas se le piden a cada producto; hay que identificar cuáles son relevantes (por ejemplo, no todo producto necesita ser portable).',
      },
    ],
    mc: [
      {
        id: 'mc-1.3-1',
        q: '¿Cuál de estas cualidades se refiere a que el software "se comporta razonablemente aun en circunstancias no anticipadas en la especificación"?',
        options: [
          'Correctitud',
          'Robustez',
          'Portabilidad',
          'Verificabilidad',
        ],
        correctIndex: 1,
        explain: 'Esa es la definición de robustez (ej.: que no falle irrecuperablemente al presionar una tecla errónea).',
      },
      {
        id: 'mc-1.3-2',
        q: 'El principio que consiste en "descubrir un problema más general oculto detrás del que se trata" es:',
        options: [
          'Abstracción',
          'Modularidad',
          'Generalización',
          'Incrementalidad',
        ],
        correctIndex: 2,
        explain: 'Esa es la definición del principio de generalización.',
      },
      {
        id: 'mc-1.3-3',
        q: '¿En qué artículo Frederick Brooks plantea las dificultades esenciales y accidentales?',
        options: [
          'The Mythical Man-Month',
          'No silver bullet',
          'Software Engineering Economics',
          'The Cathedral and the Bazaar',
        ],
        correctIndex: 1,
        explain: 'El apunte cita el artículo "No silver bullet" de Frederick Brooks.',
      },
      {
        id: 'mc-1.3-4',
        q: 'La cualidad que controla los accesos no autorizados a datos o software es:',
        options: [
          'Confiabilidad',
          'Integridad',
          'Visibilidad',
          'Interoperabilidad',
        ],
        correctIndex: 1,
        explain: 'La integridad es el atributo que controla los accesos no autorizados a datos o software.',
      },
    ],
    ms: [
      {
        id: 'ms-1.3-1',
        q: '¿Cuáles de las siguientes son dificultades ESENCIALES según Brooks?',
        options: [
          'Complejidad',
          'Conformidad',
          'Lenguajes de programación',
          'Variabilidad o mutabilidad',
          'Invisibilidad',
        ],
        correctIndexes: [
          0,
          1,
          3,
          4,
        ],
        explain: 'Las esenciales son complejidad, conformidad, variabilidad/mutabilidad e invisibilidad. Los lenguajes de programación son una dificultad accidental.',
      },
      {
        id: 'ms-1.3-2',
        q: '¿Cuáles de los siguientes son principios de la ingeniería de software según el apunte?',
        options: [
          'Rigor y formalidad',
          'Separación de incumbencias',
          'Modularidad',
          'Abstracción',
          'Confiabilidad',
        ],
        correctIndexes: [
          0,
          1,
          2,
          3,
        ],
        explain: 'Rigor y formalidad, separación de incumbencias, modularidad y abstracción son principios. La confiabilidad es una cualidad, no un principio.',
      },
      {
        id: 'ms-1.3-3',
        q: '¿Qué afirmaciones sobre la modularidad son correctas?',
        options: [
          'Divide un sistema complejo en partes más sencillas llamadas módulos',
          'Busca alta cohesión',
          'Busca bajo acoplamiento',
          'Reduce la complejidad y facilita la modificación o corrección',
          'Busca alto acoplamiento entre módulos',
        ],
        correctIndexes: [
          0,
          1,
          2,
          3,
        ],
        explain: 'La modularidad divide el sistema en módulos, busca alta cohesión y bajo acoplamiento, y reduce la complejidad. Lo del alto acoplamiento es falso: se busca lo contrario.',
      },
    ],
  },
  flashcards: [
    {
      id: 'fc-1.3-1',
      front: 'Calidad (IEEE)',
      back: 'Cuando el software posee una buena combinación de atributos deseados y el cliente o usuario percibe que el producto cumple con sus expectativas.',
    },
    {
      id: 'fc-1.3-2',
      front: 'Cualidades internas vs. externas (Ghezzi)',
      back: 'Internas: relevantes para los desarrolladores. Externas: visibles o relevantes para los usuarios.',
    },
    {
      id: 'fc-1.3-3',
      front: 'Correctitud',
      back: 'Un producto es funcionalmente correcto si se comporta de acuerdo a la especificación de funciones que debería proveer.',
    },
    {
      id: 'fc-1.3-4',
      front: 'Robustez',
      back: 'El producto se comporta razonablemente aun en circunstancias no anticipadas en la especificación (ej.: no falla irrecuperablemente al presionar una tecla errónea).',
    },
    {
      id: 'fc-1.3-5',
      front: 'Cohesión y acoplamiento',
      back: 'Cohesión: interrelación entre los componentes internos de un módulo. Acoplamiento: relación o comunicación entre módulos. Buen diseño = alta cohesión y bajo acoplamiento.',
    },
    {
      id: 'fc-1.3-6',
      front: 'Principios vs. cualidades',
      back: 'Las cualidades son atributos del producto/proceso; los principios se aplican durante todo el proceso de desarrollo y la evolución del software, son la piedra angular de la disciplina.',
    },
    {
      id: 'fc-1.3-7',
      front: 'Anticipación al cambio',
      back: 'Principio que identifica necesidades de reparación o evolución a medida que surgen o cambian requerimientos. De esto se ocupa la Administración de configuraciones (control de versiones y revisiones).',
    },
    {
      id: 'fc-1.3-8',
      front: 'Dificultades esenciales (Brooks)',
      back: 'Inherentes a la naturaleza del software: complejidad, conformidad, variabilidad o mutabilidad e invisibilidad. Siguen presentes pese al progreso tecnológico.',
    },
    {
      id: 'fc-1.3-9',
      front: 'Dificultades accidentales (Brooks)',
      back: 'Asisten a la producción pero no son inherentes; con los avances tecnológicos pueden variar (ej.: lenguajes de programación, limitaciones de espacio o velocidad de los dispositivos).',
    },
  ],
},

  // ---------- UNIDAD 2 · SECCIÓN 2.1 ----------
  {
    id: '2.1',
    unit: '2',
    title: 'El ciclo de vida y los modelos tradicionales',
    criollo: 'El ciclo de vida es el orden en que hacés las cosas para fabricar un software, desde que aparece la necesidad hasta que el sistema deja de usarse. Acá ves los modelos más tradicionales: el clásico (cascada), el espiral, el incremental y el de prototipos. Elegir bien el modelo no es un detalle: te puede salvar o hundir el proyecto.',
    blocks: [
      {
        type: 'h3',
        text: 'El ciclo de vida del desarrollo de software',
      },
      {
        type: 'p',
        text: 'El proceso de desarrollo del software involucra llevar a cabo un conjunto de actividades para su producción. Este proceso se denomina <strong>ciclo de vida</strong> porque abarca <strong>desde que surge la necesidad inicial de un sistema hasta que el mismo sale de uso</strong>.',
      },
      {
        type: 'p',
        text: 'Existen varios modelos de ciclos de vida, también llamados <strong>paradigmas de proceso</strong>, que tienen que ver con la forma específica en que se realizan las tareas y la secuencia de actividades que involucran. El ciclo de vida busca establecer el orden en que un proyecto se especifica, se prototipea, diseña, prueba e implementa.',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Seleccionar el ciclo de vida correcto ayuda a cumplir objetivos como productividad en el desarrollo, calidad del producto, disminución de riesgos o un mejor acercamiento al cliente.',
      },
      {
        type: 'p',
        text: 'El apunte aborda <strong>cinco modelos</strong> de ciclos de vida: ciclo de vida clásico, modelo espiral, modelo incremental, prototipos y modelo evolutivo UP.',
      },
      {
        type: 'h3',
        text: 'Ciclo de vida clásico (cascada)',
        criollo: 'El primero de todos y la base de los demás. Una etapa atrás de la otra, y no avanzás hasta terminar la anterior. Re rígido.',
      },
      {
        type: 'p',
        text: 'Es el <strong>primer modelo</strong> de ciclo de vida, pero se sigue empleando y fue la base para muchos de los modelos que le siguieron. También es llamado <strong>modelo de cascada o lineal</strong>, porque las actividades se dan en forma <strong>secuencial</strong> y cada etapa debe estar completamente finalizada para habilitar el inicio de la siguiente, lo que lo transforma en un <strong>modelo muy rígido</strong> de seguir.',
      },
      {
        type: 'p',
        text: 'Está conformado por las siguientes actividades: <strong>análisis y especificación de requerimientos, diseño, codificación, pruebas, integración, operación y mantenimiento</strong>. El nombre de las etapas puede variar según la bibliografía (por ejemplo, la prueba puede separarse en prueba unitaria y pruebas de integración).',
      },
      {
        type: 'h3',
        text: 'Las etapas del modelo clásico',
      },
      {
        type: 'ul',
        items: [
          '<strong>Análisis y especificación de requerimientos</strong>: relevar requerimientos, características, normas, políticas y procedimientos, y analizarlos para concluir en una especificación formal. Está asociada a determinar el "qué" se debe hacer.',
          '<strong>Diseño</strong>: se ocupa del "cómo". El sistema se suele dividir en piezas más pequeñas (módulos); se describen algoritmos, estructura de datos, arquitectura del software, procedimientos e interfaces.',
          '<strong>Codificación</strong>: se entrega al equipo de programación lo especificado en el diseño para que lo traduzcan al lenguaje de programación definido.',
          '<strong>Pruebas</strong>: se constata que el código responda a los requerimientos, de modo que las entradas generen las salidas esperadas.',
          '<strong>Integración</strong>: los módulos o componentes se combinan (integran) para conformar el sistema de información.',
          '<strong>Operación y mantenimiento</strong>: la operación es la puesta en funcionamiento y uso por el cliente; el mantenimiento es cualquier modificación posterior a la entrega (corregir errores, adaptarse a cambios del entorno o incorporar nuevas funcionalidades).',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Según Gane y Sarson, "el diseño es el proceso (iterativo) de tomar un modelo lógico de un sistema con un conjunto de objetivos fuertemente establecidos para este sistema, y producir la especificación de un sistema físico que satisfaga dichos objetivos".',
      },
      {
        type: 'p',
        text: 'Como las etapas se suceden en forma escalonada, <strong>no habrá solapamiento de actividades</strong> y todo el grupo está en la misma etapa del desarrollo en un momento dado. Por eso no requiere personal muy experto en administración ni planificación.',
      },
      {
        type: 'p',
        text: 'Por ser un modelo <strong>extremadamente rígido</strong>, debería aplicarse a desarrollos donde los <strong>requisitos estén completamente definidos al inicio y no se esperen cambios</strong>. Permite armar un cronograma, pero <strong>no le deja ver al cliente los avances hasta etapas muy avanzadas</strong> (como las pruebas).',
      },
      {
        type: 'p',
        text: 'Con el tiempo se incluyó el <strong>retorno a etapas anteriores</strong> para corregir errores producidos previamente, lo que lo amolda más a la realidad de la práctica. Además, para dar por culminada una etapa y pasar a la siguiente es necesario <strong>completar toda la documentación</strong> de esa etapa, lo que ocasiona finalizar el proyecto con un gran volumen de documentación.',
      },
      {
        type: 'h3',
        text: 'Modelo espiral',
        criollo: 'El gran aporte: meterle análisis de riesgos al ciclo de vida. El proyecto se piensa como un montón de mini proyectos, cada uno enfocado en uno o más riesgos.',
      },
      {
        type: 'p',
        text: 'El modelo en espiral surge en los <strong>años 80</strong>, propuesto originalmente por <strong>Barry Boehm</strong>. Plantea un cambio importante: incorpora el <strong>análisis de riesgos</strong> al ciclo de vida del proyecto, que hasta el momento no estaba contemplado. Se plantea al proyecto como una <strong>sumatoria de mini proyectos</strong>, cada uno centrado en uno o más riesgos.',
      },
      {
        type: 'p',
        text: 'Los <strong>cuatro cuadrantes</strong> representan cuatro actividades por las que pasa el desarrollo:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Planificación</strong>: definir objetivos específicos y alternativas, teniendo en cuenta las restricciones del proceso y del producto. Se decide qué parte del desarrollo se abordará en el ciclo.',
          '<strong>Análisis de riesgos</strong>: análisis de alternativas, se selecciona la más ventajosa, y se identifican y previenen los posibles riesgos.',
          '<strong>Ingeniería</strong>: desarrollo del producto basado en la planificación inicial y el análisis de riesgos. Se aplica algún modelo, como el de cascada.',
          '<strong>Evaluación del cliente</strong>: el cliente valora lo realizado para determinar cómo se procede a continuación.',
        ],
      },
      {
        type: 'p',
        text: 'Se grafica como una <strong>espiral sobre ejes cartesianos</strong> que comienza cerca del cruce de los ejes y va creciendo con los giros que pasan por los distintos cuadrantes. En cada ciclo de la espiral se lleva a cabo una parte del desarrollo total atravesando las cuatro actividades.',
      },
      {
        type: 'h3',
        text: 'Modelo incremental',
        criollo: 'Le agrega flexibilidad a la cascada: parte el sistema en pedazos y va entregando subsistemas que funcionan. Así el cliente ve avances de verdad.',
      },
      {
        type: 'p',
        text: 'El modelo incremental le <strong>suma flexibilidad al modelo de cascada</strong>, subsanando una de sus grandes desventajas: no permitirle al cliente tener signos visibles del avance. Parte de una especificación de requerimientos y <strong>descompone el desarrollo en una serie de partes</strong>, aplicándole un ciclo de desarrollo a cada una, generando <strong>subsistemas operativos</strong> que le permiten al cliente disponer del producto en forma incremental.',
      },
      {
        type: 'p',
        text: 'Las entregas parciales en períodos más cortos permiten que los <strong>requisitos puedan completarse o corregirse durante el desarrollo</strong>. La definición de los subsistemas requiere algo más de experiencia del grupo, ya que cada entrega debe ser una <strong>versión operativa</strong> usable por los usuarios.',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Una modificación de este modelo se llama "Diseño por planificación": las entregas se fijan según la prioridad del cliente en orden decreciente, de modo que si el proyecto se cancela o demora, los requisitos más prioritarios ya estén implementados en los primeros subsistemas.',
      },
      {
        type: 'p',
        text: 'Es muy apropiado cuando el cliente necesita disponer al menos de una parte de la funcionalidad en poco tiempo, y ayuda a <strong>calmar la ansiedad del cliente</strong> que quiere ver resultados rápidos de su inversión.',
      },
      {
        type: 'h3',
        text: 'Modelo de prototipos',
        criollo: 'Un prototipo simula cómo debería funcionar el sistema. Sirve cuando el cliente no sabe bien qué quiere o cuando el desarrollador no conoce el negocio.',
      },
      {
        type: 'p',
        text: 'Un <strong>prototipo</strong> es un modelo que trata de <strong>simular el funcionamiento que debería tener el sistema</strong>. Es de gran utilidad cuando el cliente no puede describir claramente qué desea, o cuando el desarrollador desconoce las actividades que lleva a cabo la organización.',
      },
      {
        type: 'p',
        text: 'Originalmente algunos desarrolladores generaban un software piloto o "borrador" centrado en la interfaz (a veces con mínima funcionalidad). Era un <strong>prototipo descartable</strong>: una vez definidos bien entradas, salidas y procesos, se descartaba y se desarrollaba el producto en la arquitectura definida.',
      },
      {
        type: 'p',
        text: 'Esto generaba conflictos: el cliente no entendía que se descartara el trabajo, o el desarrollador no quería rehacer la interfaz. Por eso el plan cambió para desarrollar el prototipo sobre la arquitectura elegida, y el prototipo pasó a ser <strong>evolutivo</strong> (no se descarta lo ya realizado).',
      },
      {
        type: 'p',
        text: 'Los prototipos pueden categorizarse en: <strong>Ligeros</strong> (bocetos de pantallas, simulando enlaces con dibujos de navegación) y <strong>Operativos</strong> (se crean módulos del software cubriendo partes de las funcionalidades requeridas).',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'No te olvides: el objetivo principal del modelo de prototipos es trabajar con el cliente y los usuarios para obtener retroalimentación que ayude a definir los requisitos.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-2.1-1',
          q: 'El ciclo de vida abarca desde que surge la necesidad inicial de un sistema hasta que el mismo sale de uso.',
          a: true,
          explain: 'Tal cual lo define el apunte: el proceso se denomina ciclo de vida porque abarca desde la necesidad inicial hasta que el sistema sale de uso.',
        },
        {
          id: 'tf-2.1-2',
          q: 'En el ciclo de vida clásico las etapas se solapan y el grupo trabaja en varias etapas a la vez.',
          a: false,
          explain: 'Falso. En el modelo clásico no hay solapamiento de actividades: todo el grupo se encuentra en la misma etapa del desarrollo en un momento dado.',
        },
        {
          id: 'tf-2.1-3',
          q: 'El modelo espiral incorpora el análisis de riesgos al ciclo de vida del proyecto.',
          a: true,
          explain: 'Verdadero. Ese es justamente el cambio importante que plantea el modelo espiral de Barry Boehm.',
        },
        {
          id: 'tf-2.1-4',
          q: 'El modelo incremental no le permite al cliente ver signos visibles del avance del proyecto.',
          a: false,
          explain: 'Falso. Al revés: el modelo incremental subsana esa desventaja de la cascada generando subsistemas operativos que el cliente puede ir disponiendo.',
        },
        {
          id: 'tf-2.1-5',
          q: 'El prototipo es útil cuando el cliente no puede describir claramente qué desea del sistema.',
          a: true,
          explain: 'Verdadero. El modelo de prototipos es de gran utilidad cuando el cliente no puede describir claramente qué desea, o cuando el desarrollador desconoce las actividades de la organización.',
        },
      ],
      mc: [
        {
          id: 'mc-2.1-1',
          q: '¿Por qué al ciclo de vida clásico también se lo llama modelo de cascada o lineal?',
          options: [
            'Porque incorpora el análisis de riesgos',
            'Porque las actividades se dan en forma secuencial y cada etapa debe finalizar para iniciar la siguiente',
            'Porque genera subsistemas operativos parciales',
            'Porque permite descartar el trabajo ya hecho',
          ],
          correctIndex: 1,
          explain: 'Se llama cascada o lineal porque las actividades son secuenciales y cada etapa debe estar completamente finalizada para habilitar el inicio de la siguiente.',
        },
        {
          id: 'mc-2.1-2',
          q: '¿Quién propuso originalmente el modelo espiral?',
          options: [
            'Ivar Jacobson',
            'Gane y Sarson',
            'Barry Boehm',
            'Grady Booch',
          ],
          correctIndex: 2,
          explain: 'El modelo en espiral surge en los 80 y fue propuesto originalmente por Barry Boehm.',
        },
        {
          id: 'mc-2.1-3',
          q: '¿Cuál de las siguientes NO es una de las cuatro actividades (cuadrantes) del modelo espiral?',
          options: [
            'Planificación',
            'Análisis de riesgos',
            'Codificación',
            'Evaluación del cliente',
          ],
          correctIndex: 2,
          explain: 'Los cuatro cuadrantes del espiral son Planificación, Análisis de riesgos, Ingeniería y Evaluación del cliente. La codificación no figura como cuadrante.',
        },
        {
          id: 'mc-2.1-4',
          q: 'Según el apunte, ¿en qué categorías pueden clasificarse los prototipos?',
          options: [
            'Funcionales y no funcionales',
            'Ligeros y operativos',
            'Internos y externos',
            'Descartables e iterativos',
          ],
          correctIndex: 1,
          explain: 'El apunte categoriza los prototipos en Ligeros (bocetos de pantallas) y Operativos (módulos que cubren partes de la funcionalidad).',
        },
      ],
      ms: [
        {
          id: 'ms-2.1-1',
          q: '¿Cuáles de las siguientes son actividades del ciclo de vida clásico (cascada)?',
          options: [
            'Análisis y especificación de requerimientos',
            'Análisis de riesgos',
            'Diseño',
            'Codificación',
            'Evaluación del cliente',
          ],
          correctIndexes: [
            0,
            2,
            3,
          ],
          explain: 'El modelo clásico incluye análisis y especificación de requerimientos, diseño, codificación, pruebas, integración, operación y mantenimiento. Análisis de riesgos y evaluación del cliente son cuadrantes del modelo espiral.',
        },
        {
          id: 'ms-2.1-2',
          q: '¿Cuáles de estas afirmaciones sobre el modelo incremental son correctas según el apunte?',
          options: [
            'Le suma flexibilidad al modelo de cascada',
            'Genera subsistemas operativos que el cliente puede ir disponiendo',
            'Incorpora el análisis de riesgos como cuadrante',
            'Permite que los requisitos se completen o corrijan durante el desarrollo',
            'Cada entrega debe ser una versión operativa usable por los usuarios',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Todas son correctas salvo la del análisis de riesgos como cuadrante, que corresponde al modelo espiral, no al incremental.',
        },
        {
          id: 'ms-2.1-3',
          q: '¿Cuáles son los cuatro cuadrantes (actividades) del modelo espiral?',
          options: [
            'Planificación',
            'Análisis de riesgos',
            'Ingeniería',
            'Evaluación del cliente',
            'Mantenimiento',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Los cuatro cuadrantes son Planificación, Análisis de riesgos, Ingeniería y Evaluación del cliente. El mantenimiento no es un cuadrante del espiral.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-2.1-1',
        front: 'Ciclo de vida del software',
        back: 'Conjunto de actividades para producir software. Abarca desde que surge la necesidad inicial del sistema hasta que sale de uso. También se llama paradigma de proceso.',
      },
      {
        id: 'fc-2.1-2',
        front: 'Ciclo de vida clásico (cascada)',
        back: 'Primer modelo y base de los demás. Etapas secuenciales y rígidas: cada una debe finalizar antes de iniciar la siguiente. Sin solapamiento de actividades.',
      },
      {
        id: 'fc-2.1-3',
        front: 'Etapas del modelo clásico',
        back: 'Análisis y especificación de requerimientos, diseño, codificación, pruebas, integración, operación y mantenimiento.',
      },
      {
        id: 'fc-2.1-4',
        front: 'Análisis vs. diseño',
        back: 'El análisis está asociado a determinar el "qué" se debe hacer. El diseño se ocupa del "cómo", dividiendo el sistema en módulos.',
      },
      {
        id: 'fc-2.1-5',
        front: 'Modelo espiral',
        back: 'Surge en los 80, propuesto por Barry Boehm. Incorpora el análisis de riesgos al ciclo de vida y plantea el proyecto como una sumatoria de mini proyectos.',
      },
      {
        id: 'fc-2.1-6',
        front: 'Cuadrantes del espiral',
        back: 'Planificación, Análisis de riesgos, Ingeniería y Evaluación del cliente. En cada ciclo de la espiral se atraviesan las cuatro actividades.',
      },
      {
        id: 'fc-2.1-7',
        front: 'Modelo incremental',
        back: 'Le suma flexibilidad a la cascada. Descompone el desarrollo en partes y genera subsistemas operativos que el cliente puede disponer en forma incremental.',
      },
      {
        id: 'fc-2.1-8',
        front: 'Diseño por planificación',
        back: 'Variante del incremental donde las entregas se fijan por prioridad del cliente en orden decreciente, para que los requisitos más prioritarios se implementen primero.',
      },
      {
        id: 'fc-2.1-9',
        front: 'Tipos de prototipos',
        back: 'Ligeros (bocetos de pantallas simulando navegación) y Operativos (módulos del software que cubren partes de la funcionalidad). El objetivo es obtener retroalimentación del cliente.',
      },
    ],
  },
  // ---------- UNIDAD 2 · SECCIÓN 2.2 ----------
  {
    id: '2.2',
    unit: '2',
    title: 'Modelo evolutivo y Proceso Unificado (UP)',
    criollo: 'Acá cerramos con los dos modelos más flexibles: el evolutivo, que arranca con un sistema chico y lo va refinando con cada pedido del cliente, y el Proceso Unificado (UP/RUP), un modelo híbrido que organiza todo en fases, iteraciones y flujos de trabajo.',
    blocks: [
      {
        type: 'h3',
        text: 'Modelo evolutivo',
        criollo: 'Arrancás con un sistema rapidito y lo vas haciendo crecer con lo que el cliente te va pidiendo mientras lo usa. Ideal cuando ni vos ni el cliente saben bien qué se necesita.',
      },
      {
        type: 'p',
        text: 'El modelo evolutivo está conformado por <strong>varios ciclos de desarrollo</strong>, donde se enlazan las actividades de <strong>especificación, desarrollo y validación</strong>, y cada uno genera un <strong>sistema completo</strong> que el cliente puede operar.',
      },
      {
        type: 'p',
        text: 'Parte del desarrollo <strong>rápido de un sistema inicial</strong> a partir de una lista de especificaciones, que se irá <strong>refinando mediante las nuevas peticiones del cliente</strong> para generar un sistema que satisfaga todas sus necesidades. A medida que el cliente opera la versión entregada, surge la información para el nuevo desarrollo: se amplían los requisitos iniciales y se genera el diseño de la próxima versión.',
      },
      {
        type: 'p',
        text: 'En la práctica, es útil cuando hay <strong>desconocimiento sobre las necesidades</strong> que debe cubrir el nuevo sistema. Esto puede pasar cuando:',
      },
      {
        type: 'ul',
        items: [
          'No se posee experiencia previa en el área.',
          'Se trata de un nuevo entorno para dicho sistema.',
          'Se requiere un sistema con extremada urgencia y no hay tiempo suficiente para identificar detalladamente todos los requerimientos.',
          'El sistema operará en un entorno cambiante (por ejemplo, sujeto a normas jurídicas aún en proceso de definición).',
        ],
      },
      {
        type: 'h3',
        text: 'Modelo UP (Proceso Unificado)',
        criollo: 'El RUP: un modelo híbrido pegado a UML. Organiza el laburo en cuatro fases, y cada fase puede partirse en iteraciones (incrementos) que pasan por los flujos de trabajo de siempre.',
      },
      {
        type: 'p',
        text: 'El <strong>Proceso Unificado de Rational</strong>, también conocido como <strong>Rational Unified Process (RUP)</strong>, está asociado al <strong>Lenguaje Unificado de Modelado (UML)</strong> y surge del Proceso Unificado de Desarrollo de Software, propuesto por sus autores <strong>Ivar Jacobson, Grady Booch y James Rumbaugh</strong>. Se trata de un claro ejemplo de un <strong>modelo híbrido</strong>.',
      },
      {
        type: 'p',
        text: 'Este modelo define <strong>cuatro fases</strong> representadas en columnas. Cada una concluye con el cumplimiento de una serie de objetivos específicos: un <strong>entregable</strong>, que puede ser un modelo o documentación.',
      },
      {
        type: 'table',
        caption: 'Las cuatro fases del Proceso Unificado',
        headers: ['Fase', 'En qué consiste'],
        rows: [
          ['Inicio', 'Se establecen los procesos de negocio, se identifica con quién interactuará el sistema y las interacciones.'],
          ['Elaboración', 'Comprender el dominio del problema, generar el marco arquitectónico, establecer el plan de proyecto y los riesgos. Finaliza con un modelo de requerimientos (con casos de uso), la descripción de la arquitectura y el plan para el desarrollo.'],
          ['Construcción', 'Abarca el diseño del sistema, su programación y pruebas. Finaliza con un sistema operativo y su documentación.'],
          ['Transición', 'El sistema pasa del ámbito de desarrollo al entorno real. Finaliza cuando el software está operando correctamente en el entorno operativo con su documentación.'],
        ],
      },
      {
        type: 'p',
        text: 'Cada una de estas fases, según su complejidad, puede dividirse en <strong>iteraciones</strong>, cada una representando un <strong>incremento</strong>. A su vez, cada iteración pasa por una serie de <strong>flujos de trabajo</strong> (representados como filas en la gráfica), que se corresponden con las etapas del modelo de cascada: <strong>requisitos, análisis, diseño, implementación y pruebas</strong>.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'La clave del UP: es un modelo iterativo e incremental, integrado por fases, ciclos y flujos de trabajo.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-2.2-1',
          q: 'En el modelo evolutivo cada ciclo de desarrollo genera un sistema completo que el cliente puede operar.',
          a: true,
          explain: 'Verdadero. El modelo evolutivo se conforma de varios ciclos y cada uno genera un sistema completo operable por el cliente.',
        },
        {
          id: 'tf-2.2-2',
          q: 'El modelo evolutivo es apropiado cuando hay desconocimiento sobre las necesidades que debe cubrir el sistema.',
          a: true,
          explain: 'Verdadero. Es útil cuando no se conocen bien las necesidades: sin experiencia previa, nuevo entorno, urgencia extrema o entorno cambiante.',
        },
        {
          id: 'tf-2.2-3',
          q: 'El Proceso Unificado (UP) es un modelo puramente secuencial, no iterativo.',
          a: false,
          explain: 'Falso. El proceso unificado es un modelo iterativo e incremental, integrado por fases, ciclos y flujos de trabajo.',
        },
        {
          id: 'tf-2.2-4',
          q: 'El RUP está asociado al Lenguaje Unificado de Modelado (UML).',
          a: true,
          explain: 'Verdadero. El Proceso Unificado de Rational está asociado a UML.',
        },
        {
          id: 'tf-2.2-5',
          q: 'La fase de Transición del UP consiste en establecer los procesos de negocio y las interacciones del sistema.',
          a: false,
          explain: 'Falso. Eso corresponde a la fase de Inicio. La Transición es cuando el sistema pasa del ámbito de desarrollo al entorno real.',
        },
      ],
      mc: [
        {
          id: 'mc-2.2-1',
          q: '¿Qué actividades se enlazan en cada ciclo del modelo evolutivo?',
          options: [
            'Planificación, riesgos e ingeniería',
            'Especificación, desarrollo y validación',
            'Inicio, elaboración y construcción',
            'Requisitos, integración y mantenimiento',
          ],
          correctIndex: 1,
          explain: 'En el modelo evolutivo se enlazan las actividades de especificación, desarrollo y validación, y cada ciclo genera un sistema completo.',
        },
        {
          id: 'mc-2.2-2',
          q: '¿Quiénes son los autores del Proceso Unificado de Desarrollo de Software?',
          options: [
            'Barry Boehm, Gane y Sarson',
            'Ivar Jacobson, Grady Booch y James Rumbaugh',
            'Booch, Boehm y Sarson',
            'Jacobson, Boehm y Rumbaugh',
          ],
          correctIndex: 1,
          explain: 'Los autores son Ivar Jacobson, Grady Booch y James Rumbaugh.',
        },
        {
          id: 'mc-2.2-3',
          q: '¿Con qué finaliza la fase de Construcción del UP?',
          options: [
            'Con un modelo de requerimientos y la descripción de la arquitectura',
            'Con el sistema operando en el entorno real',
            'Con un sistema operativo y su documentación',
            'Con la identificación de los procesos de negocio',
          ],
          correctIndex: 2,
          explain: 'La Construcción abarca diseño, programación y pruebas, y finaliza con un sistema operativo y su documentación.',
        },
        {
          id: 'mc-2.2-4',
          q: 'Según el apunte, el UP (RUP) es un claro ejemplo de:',
          options: [
            'Un modelo secuencial puro',
            'Un modelo híbrido',
            'Un prototipo descartable',
            'Un modelo de cascada modificado',
          ],
          correctIndex: 1,
          explain: 'El apunte indica que el RUP se trata de un claro ejemplo de un modelo híbrido.',
        },
      ],
      ms: [
        {
          id: 'ms-2.2-1',
          q: '¿En qué situaciones resulta útil el modelo evolutivo según el apunte?',
          options: [
            'Cuando no se posee experiencia previa en el área',
            'Cuando los requisitos están completamente definidos al inicio',
            'Cuando se trata de un nuevo entorno para el sistema',
            'Cuando se requiere el sistema con extremada urgencia',
            'Cuando el sistema operará en un entorno cambiante',
          ],
          correctIndexes: [
            0,
            2,
            3,
            4,
          ],
          explain: 'El evolutivo sirve ante desconocimiento de necesidades: sin experiencia, nuevo entorno, urgencia o entorno cambiante. Tener los requisitos completamente definidos al inicio es propio del modelo clásico (cascada).',
        },
        {
          id: 'ms-2.2-2',
          q: '¿Cuáles son las cuatro fases del Proceso Unificado (UP)?',
          options: [
            'Inicio',
            'Elaboración',
            'Planificación',
            'Construcción',
            'Transición',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Las cuatro fases del UP son Inicio, Elaboración, Construcción y Transición. La Planificación es un cuadrante del modelo espiral, no una fase del UP.',
        },
        {
          id: 'ms-2.2-3',
          q: '¿Qué flujos de trabajo atraviesa cada iteración del UP (correspondientes a las etapas del modelo de cascada)?',
          options: [
            'Requisitos',
            'Análisis',
            'Diseño',
            'Implementación',
            'Pruebas',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
            4,
          ],
          explain: 'Cada iteración pasa por los flujos de trabajo que cubren requisitos, análisis, diseño, implementación y pruebas, correspondientes a las etapas del modelo de cascada.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-2.2-1',
        front: 'Modelo evolutivo',
        back: 'Varios ciclos de desarrollo que enlazan especificación, desarrollo y validación. Cada ciclo genera un sistema completo operable por el cliente.',
      },
      {
        id: 'fc-2.2-2',
        front: 'Cómo arranca el evolutivo',
        back: 'Con el desarrollo rápido de un sistema inicial a partir de una lista de especificaciones, que se va refinando con las nuevas peticiones del cliente.',
      },
      {
        id: 'fc-2.2-3',
        front: 'Cuándo usar el evolutivo',
        back: 'Cuando hay desconocimiento de las necesidades: sin experiencia previa, nuevo entorno, urgencia extrema o entorno cambiante (ej. normas jurídicas en definición).',
      },
      {
        id: 'fc-2.2-4',
        front: 'Proceso Unificado (UP / RUP)',
        back: 'Proceso Unificado de Rational, asociado a UML. Propuesto por Ivar Jacobson, Grady Booch y James Rumbaugh. Es un claro ejemplo de modelo híbrido.',
      },
      {
        id: 'fc-2.2-5',
        front: 'Las cuatro fases del UP',
        back: 'Inicio, Elaboración, Construcción y Transición. Cada una concluye con un entregable (modelo o documentación).',
      },
      {
        id: 'fc-2.2-6',
        front: 'Fase de Elaboración',
        back: 'Comprende el dominio del problema, genera el marco arquitectónico, el plan y los riesgos. Finaliza con el modelo de requerimientos (casos de uso), la arquitectura y el plan de desarrollo.',
      },
      {
        id: 'fc-2.2-7',
        front: 'Fases de Construcción y Transición',
        back: 'Construcción: diseño, programación y pruebas; finaliza con un sistema operativo y documentación. Transición: el sistema pasa al entorno real y opera correctamente.',
      },
      {
        id: 'fc-2.2-8',
        front: 'UP: iteraciones y flujos de trabajo',
        back: 'Cada fase puede dividirse en iteraciones (incrementos). Cada iteración pasa por flujos de trabajo: requisitos, análisis, diseño, implementación y pruebas. Es iterativo e incremental.',
      },
    ],
  },

  // ---------- UNIDAD 3 · SECCIÓN 3.1 ----------
  {
    id: '3.1',
    unit: '3',
    title: 'Metodologías ágiles: XP y Scrum',
    criollo: 'Los modelos rígidos (cascada, evolutivo) andaban bien para sistemas grandes, pero en proyectos chicos definir todo de antemano tardaba más que programar. Por eso en los 90 aparecieron los métodos ágiles: software funcional rápido, requisitos que cambian, y las personas por encima de los procesos. Acá vemos los principios, XP (de Kent Beck) y Scrum con sus tres roles.',
    blocks: [
      {
        type: 'h3',
        text: 'Por qué surgieron los métodos ágiles',
      },
      {
        type: 'p',
        text: 'Los modelos de ciclo de vida tradicionales (como <strong>cascada</strong> o <strong>evolutivo</strong>) se presentaron como soluciones para planificar correctamente el proyecto y como un aseguramiento de la calidad. Esto tenía relación con el tipo de sistemas que se generaban: <strong>sistemas grandes</strong>, con muchos recursos, equipos numerosos, muchos programas, que permanecían mucho tiempo vigentes en las organizaciones.',
      },
      {
        type: 'p',
        text: 'El problema surgía al aplicarlos a <strong>pequeños proyectos</strong> y empresas más pequeñas: definir las acciones a tener en cuenta llevaba mucho más tiempo que la programación del sistema. Los <strong>modelos rígidos</strong>, donde una modificación era muy difícil de incorporar, no se adaptaban a esos entornos cambiantes. La incorporación del modelo <strong>iterativo e incremental</strong> mostró el avance hacia una nueva generación de modelos.',
      },
      {
        type: 'p',
        text: 'Así, para la década del 90, surgieron desarrollos que propusieron <strong>métodos ágiles</strong> basados en enfoques iterativos, centrados en generar <strong>software funcional de manera rápida</strong>, donde el diseño y la documentación acompañan ese proceso. <strong>Kent Beck</strong> fue uno de los precursores con su libro <em>Extreme Programming Explained</em>, donde se refiere al método ágil <strong>XP (Extreme Programming)</strong>.',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Otros métodos ágiles populares: Scrum (Ken Schwaber y Mike Beedle, 2001), Crystal Clear (Alistair Cockburn y Jim Highsmith, 2001), Adaptative Software Development (ASD, Jennifer Stapleton, 1997) y Feature Driven Development (FDD, Jeff De Luca), entre otros.',
      },
      {
        type: 'p',
        text: 'Para el <strong>2001</strong>, varios críticos de los modelos tradicionales se reunieron para buscar la mejora en los procesos de desarrollo. De esa reunión surgió el <strong>Manifiesto Ágil</strong>, firmado por figuras como Kent Beck, Mike Beedle, Alistair Cockburn, Ward Cunningham, Martin Fowler, Robert C. Martin, Ken Schwaber y Jeff Sutherland, entre otros.',
      },
      {
        type: 'h3',
        text: 'Principios de los métodos ágiles',
      },
      {
        type: 'ul',
        items: [
          '<strong>Participación del cliente</strong> en el proceso de desarrollo.',
          'Desarrollo de software en forma <strong>incremental</strong>.',
          'Priorizar <strong>personas y no procesos</strong>, para que lleven a cabo sus propias formas de trabajo.',
          'Aceptar que los <strong>requerimientos del sistema cambian</strong>.',
          'Mantener la <strong>simplicidad</strong> en el producto y en el proceso de desarrollo.',
        ],
      },
      {
        type: 'p',
        text: 'Las metodologías ágiles surgieron de la experiencia de <strong>desarrollos rápidos</strong> y el uso de <strong>prototipados</strong>, tratando de alinearse a los entornos cambiantes provocados por el avance en las tecnologías de información y comunicaciones, con la programación resurgiendo más como un <strong>arte que una ciencia</strong>.',
      },
      {
        type: 'h3',
        text: 'Programación Extrema (XP)',
        criollo: 'Creada por Kent Beck. Cuatro prácticas básicas y trabajo a partir de historias de usuario.',
      },
      {
        type: 'p',
        text: 'Creada por <strong>Kent Beck</strong>, <strong>Extreme Programming (XP)</strong> plantea cuatro prácticas básicas:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Liberación limitada</strong>: entregar rápidamente desarrollos aun cuando no estén completos, porque el cliente lo requiere con urgencia; las mejoras o faltantes se incorporan luego.',
          '<strong>Semana laboral de 40h</strong>: sin agregar tiempo extra de trabajo, para evitar el agotamiento de los programadores.',
          '<strong>Cliente en el sitio</strong>: su presencia es fundamental para determinar los requerimientos del sistema. Debe estar involucrado en el proceso.',
          '<strong>Programación en pares</strong>: dos programadores trabajan juntos para hacerlo de forma más eficiente y eficaz.',
        ],
      },
      {
        type: 'p',
        text: 'En lugar de definir una lista de funciones requeridas, se describen <strong>escenarios (historias de usuario)</strong>: el cliente (muy involucrado) describe sus necesidades y determina cómo priorizarlas. El cliente y el equipo describen los escenarios para comprender las necesidades y definir las <strong>historias a implementar</strong> en la entrega.',
      },
      {
        type: 'p',
        text: 'Flujo de XP: esas historias se <strong>dividen en tareas</strong>, se planifica su entrega, se desarrolla, se prueba y se entrega el software. El cliente <strong>evalúa la entrega</strong> y allí se vuelve a repetir el proceso, seleccionando las historias de usuario para la siguiente entrega.',
      },
      {
        type: 'h3',
        text: 'Scrum',
        criollo: 'Proceso ágil enfocado en agregar valor al negocio en el menor tiempo posible. Trabaja por sprints y define tres roles.',
      },
      {
        type: 'p',
        text: 'Scrum propone un proceso ágil <strong>focalizándose en agregarle valor al negocio en el menor tiempo posible</strong>, favoreciendo el desarrollo <strong>iterativo e incremental</strong> para la mejora de proyectos y productos.',
      },
      {
        type: 'p',
        text: 'El proyecto avanza a través de ciclos de trabajo llamados <strong>sprints</strong>, cuya duración varía entre <strong>una y cuatro semanas</strong>. Al iniciarse el sprint, cada equipo <strong>multidisciplinar y autogestionado</strong> selecciona una serie de requisitos del cliente de una <strong>lista priorizada</strong>, a los que se aboca y se compromete a concluir en el tiempo pautado. <strong>Equipo, calidad y alcance se mantienen inalterables</strong> durante el proceso. Se centra en la <strong>gestión</strong>, no en la "ingeniería".',
      },
      {
        type: 'h3',
        text: 'Los tres roles de Scrum',
      },
      {
        type: 'table',
        headers: ['Rol', 'Responsabilidad'],
        rows: [
          ['Product Owner (dueño del producto)', 'Única persona responsable de administrar el product Backlog y de asegurar que el equipo agregue valor a la compañía. Define las prioridades de las funcionalidades para la lista de sprints. Sus decisiones deben ser respetadas.'],
          ['Equipo', 'Construye el producto a través de los sprints. Multidisciplinario (analistas, arquitectos, programadores, diseñadores de interfaz, testers, etc.) y autogestionado. No tiene líder ni jefe: no existen títulos ni jerarquías. Los roles pueden intercambiarse según las necesidades. Cantidad: siete personas, más o menos dos.'],
          ['Scrum Master', 'Ayuda al equipo y a la organización a usar Scrum, comprenderlo y seguirlo, destacando la autogestión y la multidisciplinariedad. No es el jefe: es responsable de realizar coaching para lograr productividad y calidad, y de resolver impedimentos o amenazas que pongan en riesgo la efectividad del Product Owner y el equipo.'],
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'El Scrum Master y el Product Owner NUNCA pueden ser la misma persona.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Resumen: ágil = entregas rápidas, incrementales, cliente metido y requisitos que cambian. XP te da cuatro prácticas (liberación limitada, 40h, cliente en sitio, pares) y trabaja por historias de usuario. Scrum laburás por sprints de 1 a 4 semanas con tres roles: Product Owner manda prioridades, el Equipo construye sin jefe, y el Scrum Master hace de coach. PO y Scrum Master jamás son la misma persona.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-3.1-1',
          q: 'Los métodos ágiles se centran en generar software funcional de manera rápida.',
          a: true,
          explain: 'Verdadero. Los métodos ágiles, basados en enfoques iterativos, se centran en generar software funcional de manera rápida, con el diseño y la documentación acompañando el proceso.',
        },
        {
          id: 'tf-3.1-2',
          q: 'Uno de los principios ágiles es priorizar los procesos por encima de las personas.',
          a: false,
          explain: 'Falso. Es exactamente al revés: hay que priorizar personas y no procesos, para que lleven a cabo sus propias formas de trabajo.',
        },
        {
          id: 'tf-3.1-3',
          q: 'En Scrum, el Scrum Master y el Product Owner pueden ser la misma persona.',
          a: false,
          explain: 'Falso. El apunte aclara que el Scrum Master y el Product Owner nunca pueden ser la misma persona.',
        },
        {
          id: 'tf-3.1-4',
          q: 'En XP, la práctica de programación en pares consiste en que dos programadores trabajan juntos.',
          a: true,
          explain: 'Verdadero. La programación en pares es que dos programadores trabajan juntos para hacerlo de forma más eficiente y eficaz.',
        },
        {
          id: 'tf-3.1-5',
          q: 'Los sprints de Scrum tienen una duración que varía entre una y cuatro semanas.',
          a: true,
          explain: 'Verdadero. El proyecto avanza a través de sprints, cuya duración varía entre una y cuatro semanas.',
        },
      ],
      mc: [
        {
          id: 'mc-3.1-1',
          q: '¿Quién fue uno de los precursores de XP, con su libro Extreme Programming Explained?',
          options: [
            'Ken Schwaber',
            'Kent Beck',
            'Alistair Cockburn',
            'Jeff De Luca',
          ],
          correctIndex: 1,
          explain: 'Kent Beck fue precursor de XP y publicó Extreme Programming Explained. Schwaber se asocia a Scrum, Cockburn a Crystal Clear y De Luca a FDD.',
        },
        {
          id: 'mc-3.1-2',
          q: '¿Cuál de estas NO es una de las cuatro prácticas básicas de XP?',
          options: [
            'Liberación limitada',
            'Semana laboral de 40h',
            'Programación en pares',
            'Administrar el product Backlog',
          ],
          correctIndex: 3,
          explain: 'Administrar el product Backlog es responsabilidad del Product Owner en Scrum, no una práctica de XP. Las cuatro prácticas de XP son liberación limitada, semana de 40h, cliente en el sitio y programación en pares.',
        },
        {
          id: 'mc-3.1-3',
          q: '¿Quién es responsable de administrar el product Backlog y definir las prioridades de las funcionalidades?',
          options: [
            'El Scrum Master',
            'El Equipo',
            'El Product Owner',
            'El cliente en el sitio',
          ],
          correctIndex: 2,
          explain: 'El Product Owner es la única persona responsable de administrar el product Backlog y define las prioridades de las funcionalidades para la lista de sprints.',
        },
        {
          id: 'mc-3.1-4',
          q: 'Según el apunte, ¿de cuántos integrantes puede ser el equipo en Scrum?',
          options: [
            'De tres personas, más o menos dos',
            'De siete personas, más o menos dos',
            'De diez personas exactas',
            'De cinco personas, más o menos cinco',
          ],
          correctIndex: 1,
          explain: 'La cantidad de integrantes de cada equipo puede ser de siete personas, más o menos dos.',
        },
      ],
      ms: [
        {
          id: 'ms-3.1-1',
          q: '¿Cuáles son principios de los métodos ágiles según el apunte?',
          options: [
            'Participación del cliente en el desarrollo',
            'Desarrollo de software en forma incremental',
            'Documentación exhaustiva antes de programar',
            'Aceptar que los requerimientos cambian',
            'Mantener la simplicidad en producto y proceso',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Los principios ágiles son: participación del cliente, desarrollo incremental, priorizar personas sobre procesos, aceptar que los requerimientos cambian y mantener la simplicidad. La documentación exhaustiva previa es justamente lo contrario al enfoque ágil.',
        },
        {
          id: 'ms-3.1-2',
          q: '¿Cuáles son las cuatro prácticas básicas de XP?',
          options: [
            'Liberación limitada',
            'Semana laboral de 40h',
            'Sprints de una a cuatro semanas',
            'Cliente en el sitio',
            'Programación en pares',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Las cuatro prácticas de XP son liberación limitada, semana laboral de 40h, cliente en el sitio y programación en pares. Los sprints de una a cuatro semanas pertenecen a Scrum.',
        },
        {
          id: 'ms-3.1-3',
          q: '¿Cuáles son los tres roles que se definen en Scrum?',
          options: [
            'Product Owner',
            'Scrum Master',
            'Project Manager',
            'Equipo',
            'Cliente en el sitio',
          ],
          correctIndexes: [
            0,
            1,
            3,
          ],
          explain: 'Los tres roles de Scrum son Product Owner, Equipo y Scrum Master. Project Manager no es un rol Scrum, y "cliente en el sitio" es una práctica de XP.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-3.1-1',
        front: 'Métodos ágiles',
        back: 'Métodos basados en enfoques iterativos, centrados en generar software funcional de manera rápida, con el diseño y la documentación acompañando el proceso. Surgieron en los 90.',
      },
      {
        id: 'fc-3.1-2',
        front: 'Manifiesto Ágil',
        back: 'Documento surgido en 2001 de la reunión de críticos de los modelos tradicionales, firmado por figuras como Kent Beck, Ken Schwaber, Martin Fowler y Robert C. Martin, entre otros.',
      },
      {
        id: 'fc-3.1-3',
        front: 'Principios ágiles',
        back: 'Participación del cliente, desarrollo incremental, priorizar personas sobre procesos, aceptar que los requerimientos cambian y mantener la simplicidad.',
      },
      {
        id: 'fc-3.1-4',
        front: 'XP (Extreme Programming)',
        back: 'Método ágil creado por Kent Beck. Plantea cuatro prácticas básicas y trabaja con historias de usuario en lugar de listas de funciones.',
      },
      {
        id: 'fc-3.1-5',
        front: 'Cuatro prácticas de XP',
        back: 'Liberación limitada, semana laboral de 40h, cliente en el sitio y programación en pares.',
      },
      {
        id: 'fc-3.1-6',
        front: 'Sprint (Scrum)',
        back: 'Ciclo de trabajo de Scrum, con duración de una a cuatro semanas. El equipo selecciona requisitos de una lista priorizada y se compromete a concluirlos en ese tiempo.',
      },
      {
        id: 'fc-3.1-7',
        front: 'Product Owner',
        back: 'Única persona responsable de administrar el product Backlog y de asegurar que el equipo agregue valor. Define las prioridades de las funcionalidades.',
      },
      {
        id: 'fc-3.1-8',
        front: 'Equipo (Scrum)',
        back: 'Construye el producto a través de los sprints. Multidisciplinario y autogestionado, sin líder ni jerarquías. Cantidad: siete personas, más o menos dos.',
      },
      {
        id: 'fc-3.1-9',
        front: 'Scrum Master',
        back: 'Ayuda al equipo y a la organización a usar Scrum. No es el jefe: hace coaching para lograr productividad y resolver impedimentos. Nunca puede ser la misma persona que el Product Owner.',
      },
    ],
  },

  // ---------- UNIDAD 4 · SECCIÓN 4.1 ----------
  {
    id: '4.1',
    unit: '4',
    title: 'Modelado de los procesos de negocio',
    criollo: 'Antes de programar nada, conviene dibujar cómo funciona el negocio del cliente. Acá vemos qué es modelar y para qué sirve, cómo se arma un diagrama de actividad (con sus círculos, rombos y barritas) y dos siglas que aparecen siempre: BPM y BPMN.',
    blocks: [
      {
        type: 'h3',
        text: '¿Qué es modelado? ¿Por qué modelamos?',
      },
      {
        type: 'p',
        text: 'Un <strong>modelo</strong> es una <strong>representación de la realidad o una porción de ella</strong>, creado para tratar de representar la apariencia y el comportamiento de lo que queremos modelar. Se construyen utilizando <strong>mecanismos de abstracción</strong> que se enfocan en realzar los detalles importantes y minimizar los irrelevantes.',
      },
      {
        type: 'p',
        text: '<strong>Alan Davis</strong> dice que un modelo se emplea para responder a un <strong>conjunto bien definido de preguntas</strong> acerca de la realidad modelada, dentro de una <strong>tolerancia adecuada</strong> para el propósito establecido.',
      },
      {
        type: 'h3',
        text: 'Características de los modelos',
      },
      {
        type: 'ul',
        items: [
          'No es la realidad modelada, sino que es la realidad que se está modelando.',
          'Respeta una cierta "forma" de construcción.',
          'Tiene que permitir mostrar o predecir características de la realidad que está modelando.',
          'Su uso es más económico que el uso de la realidad misma.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Trabajar con modelos permite detectar errores en forma temprana y ajustar los aspectos del diseño que sean necesarios.',
      },
      {
        type: 'h3',
        text: 'Modelado del negocio',
        criollo: 'Entender cómo labura el cliente para después poder recomendarle qué informatizar.',
      },
      {
        type: 'p',
        text: 'El <strong>modelo de negocio</strong> es una <strong>descripción de los procesos de una empresa</strong>; por ejemplo, en una entidad bancaria como podrían ser cuentas de clientes, inversiones, préstamos, etc. Su modelado ayuda a <strong>comprender los negocios del cliente</strong>, y con esto es más factible poder realizarle recomendaciones sobre lo que podría informatizar, o —en caso de querer incorporar nuevas funcionalidades— comprender mejor cómo acoplar eso nuevo a lo existente.',
      },
      {
        type: 'h3',
        text: 'Diagrama de actividad',
        criollo: 'Parecido a un diagrama de flujo, pero con una gracia: puede mostrar cosas en paralelo.',
      },
      {
        type: 'p',
        text: 'Una forma de modelar el proceso de negocio es a través de un <strong>diagrama de actividad</strong>. Es útil para comprender el <strong>comportamiento de alto nivel</strong> de la ejecución de un sistema, sin profundizar en los detalles internos. Gráficamente es parecido a un diagrama de flujo, pero la <strong>diferencia fundamental</strong> es que los diagramas de actividad pueden mostrar <strong>procesamiento en paralelo</strong>. Permiten detallar cómo se ejecutan las acciones, cuándo (secuencia de acciones) y qué rol las realiza.',
      },
      {
        type: 'h3',
        text: 'Usos más comunes del diagrama de actividad',
      },
      {
        type: 'ul',
        items: [
          'Describir las acciones que serán realizadas en la implementación de una operación y cómo afectan a los objetos sobre los que actúan.',
          'Mostrar cómo un caso de uso puede ser realizado en término de los pasos de ejecución de sus escenarios.',
          'Representar cómo funciona un dominio en términos de roles, tareas, organización, etc.',
          'Describir la dinámica de procesos concurrentes.',
        ],
      },
      {
        type: 'h3',
        text: 'Elementos que lo componen',
      },
      {
        type: 'p',
        text: 'Una <strong>actividad</strong> produce alguna acción que genera algún cambio en el sistema o retorna un valor.',
      },
      {
        type: 'table',
        caption: 'Elementos del diagrama de actividad',
        headers: ['Elemento', 'Descripción'],
        rows: [
          ['Estado inicial', 'Se indica con un círculo que se encuentra pintado de negro en su interior.'],
          ['Estado final', 'Se indica con otro círculo, pero esta vez con un punto en el centro de su interior.'],
          ['Actividad', 'Produce alguna acción que genera un cambio en el sistema o retorna un valor. Se representa como una caja con los extremos redondeados que contiene una descripción de la actividad.'],
          ['Transición', 'Muestra la salida de una actividad e ingreso a otra. Se grafica como líneas con flechas. Pueden tener condición de guarda, que se coloca entre corchetes sobre ella.'],
          ['Decisión', 'Permite visualizar flujos alternativos. Se representa con un rombo: una o más transiciones de entrada y dos o más salientes, cada una con una condición de guarda de exclusión mutua.'],
          ['Barra de sincronización', 'División (split): una transición se divide en dos o más hilos paralelos. Unión (merge): espera que todos los hilos activos lleguen para generar las transiciones salientes.'],
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Es muy útil dividir las actividades en grupos graficados en calles o carriles, donde cada carril indica quién es el responsable de las actividades que aparecen.',
      },
      {
        type: 'h3',
        text: 'Fortalezas y debilidades del diagrama de actividad',
      },
      {
        type: 'p',
        text: 'Su principal aporte es que permite <strong>modelar el comportamiento paralelo</strong>, lo que resulta adecuado para el modelado de flujo de trabajo (<em>workflow</em>) y programación multihilo (<em>multi-thread</em>). Su <strong>desventaja</strong> es que no permite visualizar en forma clara los enlaces entre las acciones y los objetos, siendo mucho más apropiado para esto el <strong>diagrama de secuencia</strong>. Por eso conviene usarlo en combinación con otras técnicas.',
      },
      {
        type: 'h3',
        text: 'BPM (Business Process Model)',
        criollo: 'Un enfoque sistemático para gestionar los procesos del negocio de punta a punta.',
      },
      {
        type: 'p',
        text: 'Según la guía de referencia <strong>CBOK</strong> (Common Body of Knowledge) de la <strong>ABPMP</strong> (Association of BPM Professionals): «<strong>Business Process Management (BPM)</strong> es un enfoque sistemático para identificar, levantar, documentar, diseñar, ejecutar, medir y controlar tanto los procesos manuales como automatizados, con la finalidad de lograr en forma consistente los objetivos de negocio alineados con la estrategia de la organización». BPM abarca el apoyo creciente de TI con el objetivo de mejorar, innovar y gestionar los procesos de principio a fin.',
      },
      {
        type: 'p',
        text: 'El Business Process Model se origina en los <strong>workflows tradicionales</strong>, pero ha progresado mucho y muestra varias ventajas:',
      },
      {
        type: 'ul',
        items: [
          'Permite acotar el ámbito a los requerimientos de negocio: los expertos de negocio modelan los procesos y luego el departamento de IT provee la infraestructura para ejecutarlos.',
          'Incrementa la flexibilidad y agilidad corporativa separando la lógica del proceso de otras reglas de negocio, lo que absorbe mejor los cambios en los requerimientos.',
          'Reduce los costos de desarrollo con lenguajes de programación gráfica de alto nivel.',
          'Facilita definir, administrar y ejecutar procesos de negocio como un activo corporativo.',
        ],
      },
      {
        type: 'h3',
        text: 'BPMN (Business Process Model and Notation)',
        criollo: 'La notación gráfica de BPM, pensada para que la entiendan tanto el del negocio como el ingeniero.',
      },
      {
        type: 'p',
        text: 'El <strong>Business Process Model and Notation</strong> fue una iniciativa del Grupo de Gestión de Procesos, que luego se integró al <strong>OMG</strong> (Object Management Group). Su primera versión fue liberada en <strong>mayo de 2004</strong>. El objetivo principal era lograr una notación <strong>comprensible para profesionales del negocio y para Ingenieros de Software</strong>. La versión surgida en <strong>2009</strong>, aún vigente, es <strong>BPMN 2.0</strong>, disponible en la mayoría de las herramientas de soporte a BPM.',
      },
      {
        type: 'p',
        text: 'BPMN sirve para tener un <strong>lenguaje común</strong> que mejora las dificultades de comunicación entre el diseño de procesos de negocio y su implementación. Una de sus grandes ventajas es que es <strong>simple de aprender y fácil de leer</strong>, aún para personal no experto.',
      },
      {
        type: 'h3',
        text: 'Categorías de elementos gráficos de BPMN',
      },
      {
        type: 'ul',
        items: [
          '<strong>Elementos de flujo</strong>: eventos, actividades, gateways (objetos de control de flujo).',
          '<strong>Elementos de conexión</strong>: flujo de secuencia, flujo de mensaje, asociación.',
          '<strong>Contenedores</strong> (swimlanes o andariveles): pool, lane.',
          '<strong>Artefactos</strong>: objetos de datos, grupo, anotación.',
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Resumen rápido: modelás para entender el negocio antes de tocar código. El diagrama de actividad te muestra el flujo (y lo que va en paralelo). BPM es el enfoque para gestionar procesos, y BPMN es la notación gráfica estándar (versión vigente: 2.0) que entienden todos.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-4.1-1',
          q: 'Un modelo es una representación de la realidad o una porción de ella.',
          a: true,
          explain: 'Verdadero. El apunte define el modelo exactamente así: una representación de la realidad o una porción de ella.',
        },
        {
          id: 'tf-4.1-2',
          q: 'El uso de un modelo es más costoso que el uso de la realidad misma.',
          a: false,
          explain: 'Falso. Una de las características de los modelos es que su uso es más económico que el uso de la realidad misma.',
        },
        {
          id: 'tf-4.1-3',
          q: 'La diferencia fundamental entre un diagrama de actividad y un diagrama de flujo es que el de actividad puede mostrar procesamiento en paralelo.',
          a: true,
          explain: 'Verdadero. Aunque gráficamente se parecen, la diferencia fundamental es que el diagrama de actividad puede mostrar procesamiento en paralelo.',
        },
        {
          id: 'tf-4.1-4',
          q: 'El estado inicial de un diagrama de actividad se indica con un círculo pintado de negro en su interior.',
          a: true,
          explain: 'Verdadero. El estado inicial es un círculo pintado de negro; el estado final es un círculo con un punto en el centro.',
        },
        {
          id: 'tf-4.1-5',
          q: 'La versión vigente de BPMN es la 1.0, liberada en 2004.',
          a: false,
          explain: 'Falso. La primera versión fue de mayo de 2004, pero la versión vigente es BPMN 2.0, surgida en 2009.',
        },
      ],
      mc: [
        {
          id: 'mc-4.1-1',
          q: 'Según Alan Davis, ¿para qué se emplea un modelo?',
          options: [
            'Para reemplazar por completo a la realidad modelada',
            'Para responder a un conjunto bien definido de preguntas acerca de la realidad modelada',
            'Para documentar el plan de pruebas del software',
            'Para detallar los costos del proyecto',
          ],
          correctIndex: 1,
          explain: 'Davis dice que un modelo se emplea para responder a un conjunto bien definido de preguntas acerca de la realidad modelada, dentro de una tolerancia adecuada para el propósito establecido.',
        },
        {
          id: 'mc-4.1-2',
          q: '¿Cómo se representa gráficamente una actividad en un diagrama de actividad?',
          options: [
            'Con un rombo',
            'Con un círculo pintado de negro',
            'Con una caja de extremos redondeados que contiene su descripción',
            'Con una línea recta con flecha',
          ],
          correctIndex: 2,
          explain: 'La actividad se representa como una caja con los extremos redondeados que contiene una descripción de la actividad. El rombo es la decisión y el círculo negro es el estado inicial.',
        },
        {
          id: 'mc-4.1-3',
          q: '¿Cuál es el principal aporte del diagrama de actividad?',
          options: [
            'Visualizar claramente los enlaces entre acciones y objetos',
            'Permitir modelar el comportamiento paralelo (workflow y multihilo)',
            'Reemplazar al diagrama de secuencia',
            'Calcular los costos de desarrollo',
          ],
          correctIndex: 1,
          explain: 'Su principal aporte es modelar el comportamiento paralelo, adecuado para workflow y programación multihilo. Justamente NO permite visualizar bien los enlaces entre acciones y objetos (para eso sirve el diagrama de secuencia).',
        },
        {
          id: 'mc-4.1-4',
          q: '¿A qué organización se integró la iniciativa que dio origen a BPMN?',
          options: [
            'IEEE',
            'OMG (Object Management Group)',
            'ISO',
            'ABPMP',
          ],
          correctIndex: 1,
          explain: 'BPMN fue una iniciativa del Grupo de Gestión de Procesos que luego se integró al OMG (Object Management Group).',
        },
      ],
      ms: [
        {
          id: 'ms-4.1-1',
          q: '¿Cuáles de las siguientes son características de los modelos según el apunte?',
          options: [
            'No es la realidad modelada, sino la realidad que se está modelando',
            'Respeta una cierta "forma" de construcción',
            'Su uso es más caro que el de la realidad misma',
            'Permite mostrar o predecir características de la realidad que modela',
            'Siempre reemplaza a la realidad por completo',
          ],
          correctIndexes: [
            0,
            1,
            3,
          ],
          explain: 'Las características son: no es la realidad sino una representación, respeta una forma de construcción, permite mostrar/predecir características y su uso es más económico (no más caro) que la realidad misma.',
        },
        {
          id: 'ms-4.1-2',
          q: '¿Cuáles son elementos del diagrama de actividad?',
          options: [
            'Estado inicial y estado final',
            'Decisión (rombo)',
            'Barra de sincronización (split / merge)',
            'Gateway de mensaje',
            'Transición',
          ],
          correctIndexes: [
            0,
            1,
            2,
            4,
          ],
          explain: 'Estado inicial/final, decisión, barra de sincronización y transición son elementos del diagrama de actividad. El "gateway" pertenece a la notación BPMN, no al diagrama de actividad.',
        },
        {
          id: 'ms-4.1-3',
          q: '¿Cuáles son las cuatro categorías básicas de elementos gráficos de BPMN?',
          options: [
            'Elementos de flujo (eventos, actividades, gateways)',
            'Elementos de conexión (flujo de secuencia, de mensaje, asociación)',
            'Contenedores o swimlanes (pool, lane)',
            'Artefactos (objetos de datos, grupo, anotación)',
            'Estados de sincronización',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Las cuatro categorías de BPMN son: elementos de flujo, elementos de conexión, contenedores (swimlanes) y artefactos. "Estados de sincronización" no es una de ellas.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-4.1-1',
        front: 'Modelo',
        back: 'Representación de la realidad o una porción de ella, construida con mecanismos de abstracción que realzan lo importante y minimizan lo irrelevante.',
      },
      {
        id: 'fc-4.1-2',
        front: 'Modelo según Alan Davis',
        back: 'Se emplea para responder a un conjunto bien definido de preguntas acerca de la realidad modelada, dentro de una tolerancia adecuada para el propósito establecido.',
      },
      {
        id: 'fc-4.1-3',
        front: 'Modelo de negocio',
        back: 'Descripción de los procesos de una empresa. Ayuda a comprender el negocio del cliente y a recomendar qué informatizar o cómo acoplar nuevas funcionalidades.',
      },
      {
        id: 'fc-4.1-4',
        front: 'Diagrama de actividad',
        back: 'Forma de modelar un proceso de negocio, parecida a un diagrama de flujo. Su diferencia clave es que puede mostrar procesamiento en paralelo.',
      },
      {
        id: 'fc-4.1-5',
        front: 'Estado inicial vs. final',
        back: 'El inicial es un círculo pintado de negro; el final es un círculo con un punto en el centro de su interior.',
      },
      {
        id: 'fc-4.1-6',
        front: 'Barra de sincronización',
        back: 'División (split): una transición se divide en varios hilos paralelos. Unión (merge): espera que todos los hilos activos lleguen para generar las salientes.',
      },
      {
        id: 'fc-4.1-7',
        front: 'Carriles (swimlanes)',
        back: 'Calles donde se grafican grupos de actividades; cada carril indica quién es el responsable de las actividades que aparecen en él.',
      },
      {
        id: 'fc-4.1-8',
        front: 'BPM',
        back: 'Business Process Management: enfoque sistemático para identificar, documentar, diseñar, ejecutar, medir y controlar procesos manuales y automatizados, alineados a la estrategia de la organización.',
      },
      {
        id: 'fc-4.1-9',
        front: 'BPMN 2.0',
        back: 'Business Process Model and Notation. Notación gráfica estándar de BPM, integrada al OMG; primera versión en 2004 y versión vigente (2.0) desde 2009. Simple de aprender y leer.',
      },
    ],
  },

  // ---------- UNIDAD 5 · SECCIÓN 5.1 ----------
  {
    id: '5.1',
    unit: '5',
    title: 'La entrevista',
    criollo: 'La extracción de requerimientos es el primer paso del desarrollo. Acá arrancamos con la técnica estrella: la entrevista, que es una charla con un objetivo claro. Vemos cómo prepararla, qué tipos de preguntas hacés y las tres estructuras (pirámide, embudo, diamante) según el perfil del que tenés enfrente.',
    blocks: [
      {
        type: 'h3',
        text: 'Las tres técnicas básicas',
      },
      {
        type: 'p',
        text: 'La <strong>extracción de requerimientos</strong> es el primer paso del proceso de desarrollo, y existen diversas técnicas para llevarlo a cabo. El apunte se enfoca en tres técnicas básicas.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Entrevista</strong>: conversación dirigida con un propósito específico.',
          '<strong>Cuestionario</strong>: técnica compuesta de preguntas con un objetivo en particular.',
          '<strong>Observación directa</strong>: refiere a llevar a cabo la visita presencial para ver cómo se ejecuta el trabajo en la organización.',
        ],
      },
      {
        type: 'h3',
        text: 'Qué es la entrevista',
      },
      {
        type: 'p',
        text: 'La entrevista se emplea para la <strong>recopilación de información</strong>. Es una conversación dirigida con un propósito específico, en un formato de <strong>preguntas y respuestas</strong>. No solo se espera obtener información sobre las opiniones o sentimientos sobre el estado actual del sistema, sino también ahondar en las <strong>metas de la organización</strong>, los <strong>procedimientos formales e informales</strong> y la <strong>cultura de la organización</strong>.',
      },
      {
        type: 'h3',
        text: 'Puntos a definir en la preparación',
        criollo: 'Antes de sentarte a charlar, tenés que tener claras estas cuatro cosas.',
      },
      {
        type: 'ul',
        items: [
          'Analizar cuál es el motivo de la entrevista.',
          'Qué preguntas se realizarán.',
          'Considerar a quién se entrevistará.',
          'Prever que la entrevista sea exitosa tanto para el entrevistado como para el entrevistador.',
        ],
      },
      {
        type: 'h3',
        text: 'Tipos de preguntas',
        criollo: 'Se clasifican según cuánta libertad le das al otro para responder.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Abiertas</strong>: el entrevistado puede explayarse al responder. Ejemplo: ¿podría explicarme cómo es el proceso de reposición de mercadería?',
          '<strong>Cerradas</strong>: limitan o acotan la posible respuesta. Son preguntas concretas y específicas (sí/no o un dato puntual). Ejemplo: ¿solicitan presupuesto a los proveedores?',
          '<strong>De sondeo o exploratorias</strong>: buscan ir más allá de la respuesta inicial, ampliar o clarificar algún punto. Ejemplo: ¿por qué? ¿Puede brindarme un ejemplo?',
        ],
      },
      {
        type: 'table',
        caption: 'Ventajas y desventajas de preguntas abiertas y cerradas',
        headers: ['Tipo', 'Ventajas', 'Desventajas'],
        rows: [
          ['Abiertas', 'Permiten ver el vocabulario del entrevistado, simplifican la entrevista al poder explayarse, ofrecen riqueza y detalle.', 'El entrevistador puede perder el control al generar información irrelevante.'],
          ['Cerradas', 'Acortan el tiempo porque abordan el punto de interés rápidamente.', 'Se pierde la riqueza del detalle o ideas importantes, y pueden resultar aburridas para el entrevistado.'],
        ],
      },
      {
        type: 'h3',
        text: 'Pasos de la planificación',
      },
      {
        type: 'ol',
        items: [
          '<strong>Lectura de antecedentes</strong>: buscar y comprender la mayor cantidad de antecedentes de la organización y de quien entrevistaremos (internet, informes recientes, boletines), y familiarizarse con el vocabulario del negocio para aprovechar el tiempo y no parecer un improvisado.',
          '<strong>Determinar los objetivos de la entrevista</strong>: definir entre <strong>cuatro y seis puntos principales</strong> que se esperan cubrir.',
          '<strong>Seleccionar a quién se entrevistará</strong>: incluir personas de todos los niveles involucrados; puede hacerse un muestreo de los integrantes de la organización.',
          '<strong>Preparación del entrevistado</strong>: avisar con suficiente anticipación y acordar el momento. La duración debería rondar como máximo entre 45 minutos y una hora.',
          '<strong>Determinar el tipo y estructura de las preguntas</strong>: cubrir los aspectos más relevantes del proceso y la toma de decisiones, teniendo en cuenta que la entrevista es un proceso dinámico que puede requerir un cambio de enfoque no planificado.',
        ],
      },
      {
        type: 'h3',
        text: 'Estructuras de la entrevista',
        criollo: 'Tres formas de ordenar las preguntas, cada una para un perfil distinto de entrevistado.',
      },
      {
        type: 'table',
        caption: 'Estructuras de la entrevista',
        headers: ['Estructura', 'Enfoque', 'Cómo es'],
        rows: [
          ['Piramidal', 'Inductivo', 'Busca involucrar al entrevistado poco participativo. Inicia con preguntas cerradas (detalladas) y luego amplía con preguntas abiertas.'],
          ['Embudo', 'Deductivo', 'Comienza con preguntas abiertas generales y luego reduce con preguntas cerradas. Se usa cuando el entrevistado necesita expresarse, plantear sus sentimientos.'],
          ['Diamante', 'Combinada', 'Comienza con preguntas cerradas específicas, luego aborda aspectos generales (abiertas), y finalmente llega a una conclusión con preguntas cerradas específicas.'],
        ],
      },
      {
        type: 'h3',
        text: 'Registro de la entrevista',
      },
      {
        type: 'p',
        text: 'El registro puede realizarse mediante <strong>grabación</strong> para tener un detalle más completo y preciso, lo que libera al entrevistador de tomar notas y le permite mantener mejor contacto visual. Ojo: esto puede poner nervioso al entrevistado, así que si lo notás nervioso o que cambia su actitud, quizás sea mejor no seguir grabando y empezar a tomar notas.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Regla rápida de estructuras: pirámide = arranca cerrado, abre (para el callado); embudo = arranca abierto, cierra (para el que se quiere desahogar); diamante = cierra, abre, cierra (lo mejor de las dos).',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-5.1-1',
          q: 'La entrevista es una conversación dirigida con un propósito específico, en formato de preguntas y respuestas.',
          a: true,
          explain: 'Verdadero. El apunte la define exactamente así: una conversación dirigida con un propósito específico, en un formato de preguntas y respuestas.',
        },
        {
          id: 'tf-5.1-2',
          q: 'Los objetivos de la entrevista deberían definirse en entre cuatro y seis puntos principales.',
          a: true,
          explain: 'Verdadero. En el paso de determinar los objetivos se recomienda definir entre cuatro y seis puntos principales a cubrir.',
        },
        {
          id: 'tf-5.1-3',
          q: 'La estructura embudo comienza con preguntas cerradas y luego pasa a preguntas abiertas.',
          a: false,
          explain: 'Falso. El embudo es al revés: comienza con preguntas abiertas generales y luego reduce con preguntas cerradas. La que va de cerradas a abiertas es la piramidal.',
        },
        {
          id: 'tf-5.1-4',
          q: 'La duración de una entrevista debería rondar como máximo entre 45 minutos y una hora.',
          a: true,
          explain: 'Verdadero. El apunte indica que la duración debería rondar como máximo entre 45 minutos y una hora.',
        },
        {
          id: 'tf-5.1-5',
          q: 'Las preguntas abiertas acortan el tiempo de la entrevista porque abordan el punto de interés rápidamente.',
          a: false,
          explain: 'Falso. Esa es una ventaja de las preguntas cerradas. Las abiertas, en cambio, pueden hacer perder el control al generar información irrelevante.',
        },
      ],
      mc: [
        {
          id: 'mc-5.1-1',
          q: '¿Cuál de estas NO es una de las tres técnicas básicas de extracción de requerimientos del apunte?',
          options: [
            'Entrevista',
            'Cuestionario',
            'Observación directa',
            'Prototipado',
          ],
          correctIndex: 3,
          explain: 'El apunte se enfoca en tres técnicas básicas: entrevista, cuestionario y observación directa. El prototipado no figura.',
        },
        {
          id: 'mc-5.1-2',
          q: 'La estructura piramidal de la entrevista se caracteriza por:',
          options: [
            'Ser un enfoque deductivo que va de abierto a cerrado',
            'Ser un enfoque inductivo que inicia con preguntas cerradas y luego amplía con abiertas',
            'Combinar cerrado, abierto y cerrado',
            'Usar solo preguntas de sondeo',
          ],
          correctIndex: 1,
          explain: 'La piramidal es un enfoque inductivo: inicia con preguntas cerradas detalladas y luego amplía con preguntas abiertas. Sirve para involucrar al entrevistado poco participativo.',
        },
        {
          id: 'mc-5.1-3',
          q: '¿Cuál es un ejemplo de pregunta de sondeo o exploratoria?',
          options: [
            '¿Solicitan presupuesto a los proveedores?',
            '¿Podría explicarme cómo es el proceso de reposición?',
            '¿Por qué? ¿Puede brindarme un ejemplo?',
            '¿Qué cantidad de ejemplares emiten?',
          ],
          correctIndex: 2,
          explain: 'Las de sondeo buscan ir más allá de la respuesta inicial, ampliar o clarificar. El ejemplo del apunte es: ¿por qué? ¿Puede brindarme un ejemplo?',
        },
        {
          id: 'mc-5.1-4',
          q: 'Sobre el registro por grabación, el apunte recomienda:',
          options: [
            'Grabar siempre sin avisar al entrevistado',
            'Nunca grabar, solo tomar notas',
            'Si el entrevistado se pone nervioso o cambia su actitud, dejar de grabar y tomar notas',
            'Grabar únicamente las preguntas cerradas',
          ],
          correctIndex: 2,
          explain: 'La grabación da más detalle y libera al entrevistador, pero si nota al entrevistado nervioso o con actitud cambiada, conviene no seguir grabando y empezar a tomar notas.',
        },
      ],
      ms: [
        {
          id: 'ms-5.1-1',
          q: '¿Cuáles son pasos de la planificación de la entrevista según el apunte?',
          options: [
            'Lectura de antecedentes',
            'Determinar los objetivos de la entrevista',
            'Enviar el cuestionario por email',
            'Preparación del entrevistado',
            'Determinar el tipo y estructura de las preguntas',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Los pasos son: lectura de antecedentes, determinar objetivos, seleccionar a quién entrevistar, preparación del entrevistado y determinar el tipo y estructura de preguntas. Enviar el cuestionario por email es una alternativa de aplicación de cuestionarios, no de la entrevista.',
        },
        {
          id: 'ms-5.1-2',
          q: '¿Cuáles de las siguientes son estructuras de entrevista descritas en el apunte?',
          options: [
            'Piramidal',
            'Embudo',
            'Lineal',
            'Diamante',
            'Circular',
          ],
          correctIndexes: [
            0,
            1,
            3,
          ],
          explain: 'Las tres estructuras del apunte son piramidal, embudo y diamante. Lineal y circular no existen como tales.',
        },
        {
          id: 'ms-5.1-3',
          q: '¿Cuáles son ventajas de las preguntas abiertas?',
          options: [
            'Permiten ver el vocabulario del entrevistado',
            'Acortan el tiempo de la entrevista',
            'Ofrecen riqueza y detalle',
            'El entrevistado puede explayarse',
            'Evitan que se genere información irrelevante',
          ],
          correctIndexes: [
            0,
            2,
            3,
          ],
          explain: 'Las abiertas dejan ver el vocabulario, ofrecen riqueza y detalle y permiten explayarse. Acortar el tiempo es ventaja de las cerradas, y las abiertas justamente pueden generar información irrelevante.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-5.1-1',
        front: 'Entrevista',
        back: 'Conversación dirigida con un propósito específico, en formato de preguntas y respuestas, usada para recopilar información.',
      },
      {
        id: 'fc-5.1-2',
        front: 'Tres técnicas básicas',
        back: 'Entrevista, cuestionario y observación directa.',
      },
      {
        id: 'fc-5.1-3',
        front: 'Pregunta abierta',
        back: 'El entrevistado puede explayarse al responder. Ofrece riqueza y detalle, pero puede generar información irrelevante.',
      },
      {
        id: 'fc-5.1-4',
        front: 'Pregunta cerrada',
        back: 'Limita o acota la respuesta (sí/no o un dato puntual). Acorta el tiempo pero pierde riqueza de detalle.',
      },
      {
        id: 'fc-5.1-5',
        front: 'Pregunta de sondeo',
        back: 'Busca ir más allá de la respuesta inicial para ampliar o clarificar. Ejemplo: ¿por qué? ¿Puede darme un ejemplo?',
      },
      {
        id: 'fc-5.1-6',
        front: 'Estructura piramidal',
        back: 'Enfoque inductivo: inicia con preguntas cerradas y luego abre. Sirve para el entrevistado poco participativo.',
      },
      {
        id: 'fc-5.1-7',
        front: 'Estructura embudo',
        back: 'Enfoque deductivo: comienza con preguntas abiertas y luego reduce con cerradas. Para el que necesita expresarse.',
      },
      {
        id: 'fc-5.1-8',
        front: 'Estructura diamante',
        back: 'Combina las dos: cerradas específicas, luego abiertas generales, y cierra con cerradas específicas para concluir.',
      },
      {
        id: 'fc-5.1-9',
        front: 'Duración de la entrevista',
        back: 'Debería rondar como máximo entre 45 minutos y una hora.',
      },
    ],
  },
  // ---------- UNIDAD 5 · SECCIÓN 5.2 ----------
  {
    id: '5.2',
    unit: '5',
    title: 'Cuestionarios, observación directa y recomendaciones',
    criollo: 'Cerramos las técnicas: el cuestionario (cuando no podés entrevistar a todos), la observación directa (ir y ver cómo se laburua de verdad) y dos errores clásicos que tenés que evitar sí o sí: preguntas tendenciosas y preguntas dobles.',
    blocks: [
      {
        type: 'h3',
        text: 'Qué son los cuestionarios',
      },
      {
        type: 'p',
        text: 'Los cuestionarios son una técnica de recopilación de información que permite a los analistas recoger <strong>opiniones, creencias, posturas, conductas y características</strong> de las personas claves de una organización involucradas en la operación de un sistema actual o en la implantación de uno nuevo.',
      },
      {
        type: 'h3',
        text: 'Para qué se emplean',
      },
      {
        type: 'ul',
        items: [
          'Entrevistar a personas que se encuentran en ubicaciones separadas (por ejemplo, en diferentes áreas).',
          'Conocer la opinión sobre un proyecto donde hay muchas personas involucradas y sería imposible entrevistarlas a todas.',
          'Emplearla como estudio exploratorio o preliminar antes de iniciar un proyecto.',
          'Sondear problemas del sistema actual para identificarlos y luego darles solución.',
        ],
      },
      {
        type: 'h3',
        text: 'Cómo redactar las preguntas',
        criollo: 'El vocabulario y el orden importan un montón.',
      },
      {
        type: 'p',
        text: 'La <strong>elección del vocabulario</strong> es muy importante: debe usarse el mismo que el de nuestro destinatario, ser específico y hacer preguntas <strong>cortas pero precisas</strong>. Las preguntas de importancia para quien contesta deberían ir <strong>primero</strong>, pero que no sean las de mayor controversia, ya que esas se dejan para el <strong>final</strong>.',
      },
      {
        type: 'h3',
        text: 'Cómo aplicar el cuestionario',
      },
      {
        type: 'ul',
        items: [
          'Reunir a las personas en un espacio para que respondan todos allí.',
          'Entregar personalmente el cuestionario a completar y recogerlo cuando esté completo.',
          'Permitir que se realice durante las horas de trabajo y dejar un buzón para que lo entreguen luego.',
          'Enviarlo por email a empleados de filiales más lejanas, fijando una fecha límite e instrucciones para el envío.',
        ],
      },
      {
        type: 'h3',
        text: 'Observación directa',
        criollo: 'A veces lo que te cuentan no es lo que pasa de verdad. Ir y mirar te muestra lo que las entrevistas no dicen.',
      },
      {
        type: 'p',
        text: 'La <strong>observación directa</strong> consiste en recorrer la organización para observar cómo es el trabajo en los sectores afectados por el proyecto, sin limitarse solo a lo que se recibe en las respuestas de las entrevistas. Permite identificar relaciones entre quienes toman decisiones y otros miembros, entender por qué se hace de determinada manera, detectar <strong>procedimientos informales</strong> que pueden no estar documentados, y observar <strong>elementos físicos</strong> que se emplean en la operatoria y no fueron detectados previamente.',
      },
      {
        type: 'h3',
        text: 'Recomendaciones finales: errores a evitar',
      },
      {
        type: 'ul',
        items: [
          '<strong>Preguntas tendenciosas</strong>: cuando mostrás tu opinión sobre algún proceso o circunstancia. Ejemplo: "¿Qué opina de este obsoleto modo de trabajo?". Esto hace que el entrevistado se sienta limitado a exponer otro punto de vista.',
          '<strong>Preguntas dobles</strong>: no poner dos preguntas juntas. El entrevistado puede concentrarse en responder una y omitir la otra, e incluso el entrevistador puede olvidar que falta parte de la respuesta.',
        ],
      },
      {
        type: 'p',
        text: 'Tanto para las entrevistas como para la confección de los cuestionarios, conviene ser <strong>prolijo</strong>, mantener un orden en las preguntas y que tengan una <strong>secuencia lógica</strong>, cubriendo cada tema sin ir y volver sobre diversos aspectos todo el tiempo.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Los dos pecados capitales: la tendenciosa (le metés tu opinión y lo condicionás) y la doble (dos preguntas pegadas y se te escapa media respuesta). Evitalas y ordená todo con secuencia lógica.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-5.2-1',
          q: 'Los cuestionarios sirven para conocer la opinión de muchas personas cuando sería imposible entrevistarlas a todas.',
          a: true,
          explain: 'Verdadero. Es uno de los usos que menciona el apunte: proyectos donde hay muchas personas involucradas y no se puede entrevistar a todas.',
        },
        {
          id: 'tf-5.2-2',
          q: 'En un cuestionario, las preguntas de mayor controversia deberían ir primero.',
          a: false,
          explain: 'Falso. Las preguntas de importancia van primero, pero las de mayor controversia se dejan para el final.',
        },
        {
          id: 'tf-5.2-3',
          q: 'La observación directa permite detectar procedimientos informales que pueden no estar documentados en ningún lugar.',
          a: true,
          explain: 'Verdadero. Es justamente uno de los beneficios: detectar procedimientos informales no documentados y elementos físicos no detectados previamente.',
        },
        {
          id: 'tf-5.2-4',
          q: 'Una pregunta tendenciosa es aquella donde el entrevistador muestra su opinión sobre un proceso o circunstancia.',
          a: true,
          explain: 'Verdadero. La tendenciosa muestra la opinión del entrevistador, limitando al entrevistado a exponer otro punto de vista.',
        },
        {
          id: 'tf-5.2-5',
          q: 'Al redactar un cuestionario conviene usar un vocabulario técnico distinto al del destinatario.',
          a: false,
          explain: 'Falso. Debe usarse el mismo vocabulario que el del destinatario, ser específico y hacer preguntas cortas pero precisas.',
        },
      ],
      mc: [
        {
          id: 'mc-5.2-1',
          q: '¿Cuál de las siguientes NO es una forma de aplicar un cuestionario según el apunte?',
          options: [
            'Reunir a las personas en un espacio para que respondan allí',
            'Entregarlo personalmente y recogerlo al completarse',
            'Grabar las respuestas en video',
            'Enviarlo por email a filiales lejanas con fecha límite',
          ],
          correctIndex: 2,
          explain: 'Grabar en video no figura. Las alternativas son: reunir a todos, entregar y recoger, dejar buzón durante horas de trabajo, o enviar por email con fecha límite.',
        },
        {
          id: 'mc-5.2-2',
          q: 'El error de "preguntas dobles" consiste en:',
          options: [
            'Repetir la misma pregunta dos veces',
            'Poner dos preguntas juntas, lo que puede hacer que se omita responder una',
            'Hacer preguntas demasiado largas',
            'Mostrar la opinión del entrevistador',
          ],
          correctIndex: 1,
          explain: 'Las preguntas dobles son dos preguntas juntas; el entrevistado puede concentrarse en una y omitir la otra. Mostrar la opinión es el error de preguntas tendenciosas.',
        },
        {
          id: 'mc-5.2-3',
          q: '¿Qué permite recoger un cuestionario sobre las personas claves de una organización?',
          options: [
            'Solo datos demográficos',
            'Opiniones, creencias, posturas, conductas y características',
            'Únicamente el organigrama',
            'Solo el rendimiento del sistema',
          ],
          correctIndex: 1,
          explain: 'El apunte indica que el cuestionario permite recoger opiniones, creencias, posturas, conductas y características de las personas claves.',
        },
        {
          id: 'mc-5.2-4',
          q: 'Una ventaja propia de la observación directa frente a la entrevista es que permite:',
          options: [
            'Acortar la duración del proyecto',
            'Profundizar en cómo se hacen las cosas sin limitarse a las respuestas de las entrevistas',
            'Evitar visitar la organización',
            'Reemplazar por completo a los cuestionarios',
          ],
          correctIndex: 1,
          explain: 'La observación directa permite profundizar en cómo se hacen las cosas sin limitarse solo a lo que se recibe en las respuestas de las entrevistas.',
        },
      ],
      ms: [
        {
          id: 'ms-5.2-1',
          q: '¿Para qué se pueden emplear los cuestionarios según el apunte?',
          options: [
            'Entrevistar a personas en ubicaciones separadas',
            'Conocer la opinión cuando hay muchas personas involucradas',
            'Como estudio exploratorio o preliminar antes de un proyecto',
            'Sondear problemas del sistema actual',
            'Diseñar la arquitectura del software',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Los cuestionarios sirven para personas en ubicaciones separadas, opiniones de muchos involucrados, estudio exploratorio y sondear problemas del sistema actual. Diseñar la arquitectura no es un uso del cuestionario.',
        },
        {
          id: 'ms-5.2-2',
          q: '¿Qué permite descubrir la observación directa?',
          options: [
            'Relaciones entre quienes toman decisiones y otros miembros',
            'Entender por qué se hace de determinada manera',
            'Procedimientos informales no documentados',
            'Elementos físicos de la operatoria no detectados antes',
            'El presupuesto exacto del proyecto',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'La observación directa revela relaciones, el porqué de las cosas, procedimientos informales no documentados y elementos físicos no detectados. El presupuesto no es algo que detecte la observación.',
        },
        {
          id: 'ms-5.2-3',
          q: '¿Cuáles son recomendaciones finales / errores a tener en cuenta en entrevistas y cuestionarios?',
          options: [
            'Evitar preguntas tendenciosas',
            'Evitar preguntas dobles',
            'Ser prolijo y mantener un orden lógico',
            'Cubrir cada tema sin ir y volver sobre los aspectos',
            'Dejar las preguntas importantes para el final',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Las recomendaciones son: evitar tendenciosas y dobles, ser prolijo con orden lógico y cubrir cada tema sin ir y volver. Las preguntas importantes en realidad van primero (no las controvertidas, esas al final).',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-5.2-1',
        front: 'Cuestionario',
        back: 'Técnica de recopilación que permite recoger opiniones, creencias, posturas, conductas y características de personas claves de una organización.',
      },
      {
        id: 'fc-5.2-2',
        front: 'Cuándo usar cuestionarios',
        back: 'Personas en ubicaciones separadas, muchos involucrados imposibles de entrevistar, estudio exploratorio previo y sondeo de problemas del sistema actual.',
      },
      {
        id: 'fc-5.2-3',
        front: 'Vocabulario del cuestionario',
        back: 'Usar el mismo vocabulario que el destinatario, ser específico y hacer preguntas cortas pero precisas.',
      },
      {
        id: 'fc-5.2-4',
        front: 'Orden de las preguntas',
        back: 'Las importantes van primero (pero no las controvertidas); las de mayor controversia se dejan para el final.',
      },
      {
        id: 'fc-5.2-5',
        front: 'Observación directa',
        back: 'Recorrer la organización para ver cómo se trabaja en los sectores afectados, sin limitarse a las respuestas de las entrevistas.',
      },
      {
        id: 'fc-5.2-6',
        front: 'Qué revela la observación directa',
        back: 'Relaciones entre decisores y miembros, procedimientos informales no documentados y elementos físicos de la operatoria no detectados antes.',
      },
      {
        id: 'fc-5.2-7',
        front: 'Pregunta tendenciosa',
        back: 'Error donde el entrevistador muestra su opinión, limitando al entrevistado a exponer otro punto de vista.',
      },
      {
        id: 'fc-5.2-8',
        front: 'Pregunta doble',
        back: 'Error de poner dos preguntas juntas; el entrevistado puede omitir responder una de ellas.',
      },
    ],
  },

  // ---------- UNIDAD 6 · SECCIÓN 6.1 ----------
  {
    id: '6.1',
    unit: '6',
    title: 'Qué es la ingeniería de requerimientos y por qué hacerla',
    criollo: 'Antes de programar una línea tenés que entender qué necesita el cliente. Eso es la ingeniería de requerimientos: sacar las ideas de la cabeza del usuario y ponerlas en un papel claro. Acá vemos qué es un requerimiento, las etapas, y por qué si te equivocás temprano sale barato pero si te das cuenta tarde te puede salir 5.000 veces más caro.',
    blocks: [
      {
        type: 'h3',
        text: 'Qué es un requerimiento',
      },
      {
        type: 'p',
        text: 'Según <strong>Shari Lawrence Pfleeger</strong> (<em>Ingeniería de Software. Teoría y práctica</em>), un requerimiento es una <strong>característica del sistema o una descripción de algo que el sistema es capaz de hacer</strong> con el objeto de satisfacer el propósito del sistema.',
      },
      {
        type: 'p',
        text: 'Según el estándar <strong>IEEE 610-1990</strong>, un requerimiento es:',
      },
      {
        type: 'ol',
        items: [
          'Condición o capacidad que <strong>necesita el usuario</strong> para resolver un problema o alcanzar un objetivo.',
          'Condición o capacidad que <strong>debe satisfacer o poseer un sistema</strong> o componente de un sistema para satisfacer un contrato, un estándar, una especificación u otro documento formalmente impuesto.',
          'Representación <strong>documentada</strong> de una condición o capacidad como 1 o 2.',
        ],
      },
      {
        type: 'h3',
        text: 'Qué es la ingeniería de requerimientos',
      },
      {
        type: 'p',
        text: 'La <strong>ingeniería de requerimientos</strong> es el proceso de elaborar las ideas y necesidades iniciales de los usuarios, expresándolas en una <strong>especificación de requerimientos de sistemas</strong>.',
      },
      {
        type: 'h3',
        text: 'Etapas de la ingeniería de requerimientos',
        criollo: 'Cuatro pasos: sacás info, la analizás, la escribís formal y se la mostrás al cliente para que confirme.',
      },
      {
        type: 'ol',
        items: [
          '<strong>Extracción</strong> de requerimientos: se lleva a cabo con entrevistas, cuestionarios, etc.',
          '<strong>Análisis</strong> de requerimientos: mediante el análisis de toda la información obtenida previamente.',
          '<strong>Especificación</strong> en un documento formal.',
          '<strong>Validación</strong> por parte del cliente, quien deberá indicar si lo especificado son los requerimientos que espera del nuevo sistema.',
        ],
      },
      {
        type: 'h3',
        text: 'Por qué hacer ingeniería de requerimientos',
      },
      {
        type: 'ul',
        items: [
          'Muchos errores en los requerimientos son <strong>descubiertos en esta etapa</strong>.',
          'Los errores detectados más adelante suelen ser <strong>más costosos de reparar</strong>.',
          'De no llevar a cabo una especificación, podríamos obtener el <strong>producto incorrecto</strong>.',
          'Si los requerimientos son <strong>ambiguos</strong>, pueden generar interpretaciones diferentes entre usuarios y desarrolladores, creando desacuerdo entre las partes.',
        ],
      },
      {
        type: 'h3',
        text: 'El costo de la detección de un error',
        criollo: 'El estudio del Standish Group sobre 280.000 proyectos del año 2000 dejó números feos.',
      },
      {
        type: 'p',
        text: 'La empresa de investigación <strong>Standish Group</strong> analizó <strong>280.000 proyectos</strong> de desarrollo completados en el año 2000 y concluyó que:',
      },
      {
        type: 'ul',
        items: [
          'Solo el <strong>28%</strong> de los proyectos de software se realizaron con éxito.',
          'El <strong>23%</strong> se cancelaron antes de ser completados o nunca se implementaron.',
          'El <strong>49%</strong> restante fue completado e instalado en el cliente, pero con demoras, por encima del presupuesto asignado o con funcionalidades faltantes.',
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Cuanto más avanzado en el ciclo de desarrollo se detecta el error, mayor es el costo de corregirlo. Un error en el requerimiento detectado en la fase de requerimientos puede tener un costo apenas imperceptible; el mismo error detectado en la fase de prueba puede multiplicar ese costo hasta por 5.000.',
      },
      {
        type: 'h3',
        text: 'Causas de problemas en proyectos',
      },
      {
        type: 'ul',
        items: [
          '<strong>Requisitos deficientes</strong>, incompletos o cambiantes.',
          'La planificación de agendas y estimaciones de costes <strong>no se realizaron en base a los requisitos</strong>.',
          'Deficiencias en la aplicación de procesos y <strong>desconocimiento del ciclo de vida</strong> del proyecto.',
          'Estimaciones <strong>poco realistas</strong>.',
          'Falta de <strong>implicancia del usuario</strong> en el proceso.',
        ],
      },
      {
        type: 'h3',
        text: 'Criterios de un proyecto terminado satisfactoriamente',
      },
      {
        type: 'ul',
        items: [
          'No hubo desviaciones en las <strong>fechas previstas</strong>.',
          'Se mantuvieron los <strong>costes estimados</strong>.',
          'El producto final cubrió las <strong>expectativas y necesidades</strong> del cliente.',
          'El producto <strong>funcionó correctamente</strong>.',
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Moraleja: invertí tiempo en entender bien qué te piden ANTES de arrancar. Equivocarte en un papel sale gratis; equivocarte cuando ya está todo programado sale una fortuna.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-6.1-1',
          q: 'Según Pfleeger, un requerimiento es una característica del sistema o una descripción de algo que el sistema es capaz de hacer para satisfacer su propósito.',
          a: true,
          explain: 'Verdadero, esa es exactamente la definición de Pfleeger en su libro Ingeniería de Software. Teoría y práctica.',
        },
        {
          id: 'tf-6.1-2',
          q: 'La validación de los requerimientos la realiza el equipo de desarrollo sin participación del cliente.',
          a: false,
          explain: 'Falso. La validación la hace el cliente, que debe indicar si lo especificado son los requerimientos que espera del nuevo sistema.',
        },
        {
          id: 'tf-6.1-3',
          q: 'Cuanto más avanzado en el ciclo de desarrollo se detecta un error, mayor es el costo de corregirlo.',
          a: true,
          explain: 'Verdadero. Un error detectado en la fase de prueba puede costar hasta 5.000 veces más que detectado en la fase de requerimientos.',
        },
        {
          id: 'tf-6.1-4',
          q: 'Según el estudio del Standish Group, el 28% de los proyectos de software se realizaron con éxito.',
          a: true,
          explain: 'Verdadero. El Standish Group analizó 280.000 proyectos del año 2000 y solo el 28% fue exitoso.',
        },
        {
          id: 'tf-6.1-5',
          q: 'La etapa de extracción de requerimientos se lleva a cabo mediante entrevistas y cuestionarios.',
          a: true,
          explain: 'Verdadero. La extracción se realiza con entrevistas, cuestionarios, etc.',
        },
      ],
      mc: [
        {
          id: 'mc-6.1-1',
          q: '¿Cuál es la primera etapa de la ingeniería de requerimientos?',
          options: [
            'Validación',
            'Especificación',
            'Extracción',
            'Análisis',
          ],
          correctIndex: 2,
          explain: 'El orden es: extracción, análisis, especificación y validación. La extracción es la primera, con entrevistas y cuestionarios.',
        },
        {
          id: 'mc-6.1-2',
          q: 'Según el estándar IEEE 610-1990, ¿qué es un requerimiento?',
          options: [
            'Únicamente el código fuente que implementa una función',
            'Una condición o capacidad que necesita el usuario para resolver un problema o alcanzar un objetivo',
            'El cronograma de tiempos del proyecto',
            'Una herramienta de testing automatizado',
          ],
          correctIndex: 1,
          explain: 'El IEEE 610-1990 define el requerimiento como una condición o capacidad que necesita el usuario para resolver un problema o alcanzar un objetivo (entre otras acepciones).',
        },
        {
          id: 'mc-6.1-3',
          q: '¿Cuántos proyectos analizó el Standish Group en su estudio del año 2000?',
          options: [
            '28.000',
            '280.000',
            '2.800',
            '2.800.000',
          ],
          correctIndex: 1,
          explain: 'El Standish Group analizó 280.000 proyectos de desarrollo completados en el año 2000.',
        },
        {
          id: 'mc-6.1-4',
          q: '¿Cuál de las siguientes es una causa de problemas en proyectos según el apunte?',
          options: [
            'Exceso de documentación de requisitos',
            'Falta de implicancia del usuario en el proceso',
            'Demasiada participación del cliente',
            'Estimaciones excesivamente conservadoras',
          ],
          correctIndex: 1,
          explain: 'La falta de implicancia del usuario en el proceso es una de las principales causas de problemas en proyectos.',
        },
      ],
      ms: [
        {
          id: 'ms-6.1-1',
          q: '¿Cuáles son las etapas de la ingeniería de requerimientos?',
          options: [
            'Extracción',
            'Análisis',
            'Compilación',
            'Especificación',
            'Validación',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Las etapas son extracción, análisis, especificación y validación. La compilación no es una etapa de la ingeniería de requerimientos.',
        },
        {
          id: 'ms-6.1-2',
          q: '¿Cuáles son causas de problemas en proyectos según el apunte?',
          options: [
            'Requisitos deficientes, incompletos o cambiantes',
            'Estimaciones poco realistas',
            'Uso de metodologías ágiles',
            'Desconocimiento del ciclo de vida del proyecto',
            'Falta de implicancia del usuario',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Las causas son requisitos deficientes, planificación no basada en requisitos, desconocimiento del ciclo de vida, estimaciones poco realistas y falta de implicancia del usuario. El uso de metodologías ágiles no figura como causa.',
        },
        {
          id: 'ms-6.1-3',
          q: '¿Qué criterios cumplió un proyecto considerado terminado satisfactoriamente?',
          options: [
            'No hubo desviaciones en las fechas previstas',
            'Se mantuvieron los costes estimados',
            'Se incluyeron funcionalidades extra no pedidas',
            'El producto final cubrió las expectativas y necesidades del cliente',
            'El producto funcionó correctamente',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Los criterios son: sin desviaciones en fechas, costes mantenidos, expectativas cubiertas y funcionamiento correcto. Incluir funcionalidades extra no pedidas no es un criterio de éxito.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-6.1-1',
        front: 'Requerimiento (Pfleeger)',
        back: 'Una característica del sistema o una descripción de algo que el sistema es capaz de hacer con el objeto de satisfacer su propósito.',
      },
      {
        id: 'fc-6.1-2',
        front: 'Ingeniería de requerimientos',
        back: 'Proceso de elaborar las ideas y necesidades iniciales de los usuarios, expresándolas en una especificación de requerimientos de sistemas.',
      },
      {
        id: 'fc-6.1-3',
        front: 'Etapas de la ing. de requerimientos',
        back: 'Extracción, análisis, especificación y validación.',
      },
      {
        id: 'fc-6.1-4',
        front: 'IEEE 610-1990 (requerimiento)',
        back: 'Condición o capacidad que necesita el usuario, que debe poseer un sistema para satisfacer un contrato/estándar, o su representación documentada.',
      },
      {
        id: 'fc-6.1-5',
        front: 'Costo de detectar un error tarde',
        back: 'Cuanto más avanzado el ciclo, más caro corregir. Un error detectado en prueba puede costar hasta 5.000 veces más que en la fase de requerimientos.',
      },
      {
        id: 'fc-6.1-6',
        front: 'Estudio Standish Group (2000)',
        back: 'Sobre 280.000 proyectos: solo 28% exitosos, 23% cancelados y 49% con demoras, sobrecostos o funcionalidades faltantes.',
      },
      {
        id: 'fc-6.1-7',
        front: 'Causas de problemas en proyectos',
        back: 'Requisitos deficientes o cambiantes, planificación no basada en requisitos, desconocimiento del ciclo de vida, estimaciones poco realistas y falta de implicancia del usuario.',
      },
    ],
  },
  // ---------- UNIDAD 6 · SECCIÓN 6.2 ----------
  {
    id: '6.2',
    unit: '6',
    title: 'Contexto y límites del sistema, defectos y tipos de requerimientos',
    criollo: 'Acá la clave es decidir qué entra y qué no entra en el sistema (los límites), entender el problema en sus dos dominios, y conocer los errores típicos que arruinan un proyecto. Cerramos con la clasificación más usada: funcionales (qué hace) vs no funcionales (restricciones).',
    blocks: [
      {
        type: 'h3',
        text: 'Contexto, alcance y límite del sistema',
        criollo: 'Lo más difícil al arrancar es decidir qué cosas son parte del sistema y qué cosas no.',
      },
      {
        type: 'p',
        text: 'Una de las cuestiones más difíciles al iniciar el desarrollo es determinar <strong>qué cosas son parte del sistema y qué cosas no</strong>: definir los <strong>límites del sistema</strong>. Hay que determinar cuáles de los eventos que ocurren en el entorno deben tener una respuesta. Para esto es importante trabajar con los <strong>stakeholders</strong> y establecer qué es el sistema y qué conforma su entorno.',
      },
      {
        type: 'p',
        text: 'Definir claramente los límites permite <strong>calcular los tiempos y costos</strong> que el proceso insumirá. Si el nuevo sistema reemplaza a uno existente, suele ser más sencillo porque podemos basarnos en lo existente; en otros casos hay más flexibilidad y la complejidad puede aumentar.',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'La definición de los límites no es arbitraria: puede verse influenciada por factores técnicos que deban respetarse o por cuestiones económicas (por ejemplo, que ciertos requerimientos o interfaces no se incluyan por superar el presupuesto asignado).',
      },
      {
        type: 'p',
        text: 'Al determinar la frontera del sistema es habitual que existan <strong>áreas grises</strong>: cuestiones que no queda claro si están dentro de los límites y que suelen ser motivo de negociaciones. Se busca <strong>minimizarlas</strong> para evitar inconvenientes posteriores.',
      },
      {
        type: 'h3',
        text: 'Descripción del problema: dos dominios',
        criollo: 'Todo problema tiene un "qué hay que hacer" y un "cómo se construye". Son mundos distintos.',
      },
      {
        type: 'table',
        caption: 'Dominios de la descripción del problema',
        headers: ['Dominio', 'Qué representa'],
        rows: [
          ['Dominio de la aplicación', 'Donde existe el requerimiento del cliente. Representa <strong>qué</strong> hay que hacer. Permite comenzar a reconocer el problema.'],
          ['Dominio del software', 'Provee una solución al problema, interactuando con el dominio de aplicación. Representa <strong>cómo</strong> va a ser construido el producto de software.'],
        ],
      },
      {
        type: 'p',
        text: 'La identificación del dominio de aplicación y su separación del dominio del software <strong>no son absolutos sino relativos al problema</strong> a resolver. El primer paso es el análisis del problema y estructurar el dominio de la aplicación. El analista trata con distintos dominios, donde cada uno puede pensarse como un mundo separado; <strong>todo lo relevante para los requerimientos debe aparecer en alguna parte del dominio de la aplicación</strong>.',
      },
      {
        type: 'h3',
        text: 'El problema de la abstracción',
        criollo: 'A diferencia de una casa, el software no se ve con un plano. Recién con el producto terminado el cliente puede darse cuenta de que no era lo que quería.',
      },
      {
        type: 'p',
        text: 'La ingeniería de software es una disciplina cuyos modelos <strong>no son tan tangibles o fáciles de visualizar</strong> como en la construcción de una casa. Aunque se desarrollen prototipos, no es extraño que el cliente, con el producto terminado, indique que no cumple con sus expectativas. Por eso la ingeniería de requerimientos es clave para el éxito.',
      },
      {
        type: 'ul',
        items: [
          'Evitar quedarse con <strong>descripciones genéricas</strong> sin ahondar en los detalles.',
          'Evitar las <strong>ambigüedades</strong>.',
          'Conocer el <strong>entorno del problema</strong>, no dar nada por supuesto.',
          'Dedicar el <strong>tiempo necesario</strong> para obtener una especificación de los requerimientos.',
        ],
      },
      {
        type: 'h3',
        text: 'Defectos comunes en los requisitos',
      },
      {
        type: 'ul',
        items: [
          '<strong>Cliente/usuarios no se involucraron lo suficiente</strong> en la definición de las necesidades.',
          '<strong>Cambios o crecimiento</strong> en los requerimientos sin gestionar el impacto en la planificación.',
          'Definición de <strong>requisitos ambiguos</strong>: dos interpretaciones diferentes del mismo requerimiento.',
          'Inclusión de <strong>requisitos innecesarios</strong>: funcionalidades que el usuario no pidió ni emplea, pero generan costo adicional.',
          'Definición de <strong>requisitos insuficientes</strong>: solo una definición inicial sin más detalle.',
          '<strong>Omisión de necesidades</strong> de algún grupo de usuarios con perfiles o requerimientos diferenciados.',
        ],
      },
      {
        type: 'h3',
        text: 'Beneficios de los buenos requisitos',
      },
      {
        type: 'ul',
        items: [
          'Permite llegar a un <strong>acuerdo</strong> entre desarrolladores, usuarios y clientes sobre el trabajo a desarrollar.',
          'Permite acordar los <strong>criterios para validar</strong> los requerimientos especificados.',
          'Da una <strong>base objetiva para estimar recursos</strong> (personal, competencias, costos, equipamientos).',
          'Permite cumplir con los <strong>atributos de calidad</strong>, incluyendo restricciones como eficiencia y seguridad.',
          'Evita trabajar a <strong>prueba y error</strong>, reduciendo costos y modificaciones.',
        ],
      },
      {
        type: 'h3',
        text: 'Tipos de requerimientos y restricciones',
        criollo: 'La clasificación más usada: funcionales (qué hace) vs no funcionales (restricciones del cómo).',
      },
      {
        type: 'table',
        caption: 'Requerimientos funcionales vs no funcionales',
        headers: ['Tipo', 'Descripción', 'Ejemplo'],
        rows: [
          ['Funcional (de comportamiento / behavioral)', 'Describe <strong>qué hace</strong> el sistema: entradas, salidas, interacción con el ambiente y cómo se comporta ante cada estímulo. Define la función de transformación.', 'Registrar pedidos de clientes especificando datos de entrada, proceso (controles, verificaciones, actualizaciones) y salida válida o inválida.'],
          ['No funcional (de no comportamiento)', 'Describe una <strong>restricción</strong> sobre el sistema que limita la elección al construir la solución. Atributos como performance, plataforma, lenguaje, eficiencia, seguridad, portabilidad.', 'El sistema debe desarrollarse en arquitectura ARM, o las consultas deben responderse dentro de los cinco segundos.'],
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Trucazo para no olvidarte: funcional = QUÉ hace el sistema; no funcional = CÓMO de bien lo hace y bajo qué restricciones (rápido, seguro, en tal plataforma).',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-6.2-1',
          q: 'El dominio de la aplicación representa cómo va a ser construido el producto de software.',
          a: false,
          explain: 'Falso. El dominio de la aplicación representa QUÉ hay que hacer. El que representa el CÓMO va a ser construido es el dominio del software.',
        },
        {
          id: 'tf-6.2-2',
          q: 'Un requerimiento no funcional describe una restricción sobre el sistema.',
          a: true,
          explain: 'Verdadero. El requerimiento no funcional describe una restricción que limita la elección al construir la solución (performance, plataforma, seguridad, etc.).',
        },
        {
          id: 'tf-6.2-3',
          q: 'Las áreas grises en la frontera del sistema deben maximizarse para dar más flexibilidad.',
          a: false,
          explain: 'Falso. Las áreas grises se buscan minimizar en la medida de lo posible para evitar inconvenientes posteriores.',
        },
        {
          id: 'tf-6.2-4',
          q: 'La definición de los límites del sistema puede verse influenciada por cuestiones económicas, como dejar fuera requerimientos por superar el presupuesto.',
          a: true,
          explain: 'Verdadero. La definición de los límites no es arbitraria y puede verse afectada por factores técnicos o económicos.',
        },
      ],
      mc: [
        {
          id: 'mc-6.2-1',
          q: '¿Qué describe un requerimiento funcional?',
          options: [
            'Una restricción de plataforma o lenguaje',
            'Qué hace el sistema: entradas, salidas e interacción con el ambiente',
            'El cronograma del proyecto',
            'El nivel de seguridad requerido',
          ],
          correctIndex: 1,
          explain: 'El requerimiento funcional (o de comportamiento) describe qué hace el sistema: entradas, salidas, interacción y comportamiento ante cada estímulo.',
        },
        {
          id: 'mc-6.2-2',
          q: '"Las consultas al sistema deben ser respondidas dentro de los cinco segundos" es un ejemplo de:',
          options: [
            'Requerimiento funcional',
            'Requerimiento no funcional',
            'Dominio de la aplicación',
            'Área gris',
          ],
          correctIndex: 1,
          explain: 'Es un requerimiento no funcional: impone una restricción de performance sobre el sistema.',
        },
        {
          id: 'mc-6.2-3',
          q: '¿Cuál es uno de los defectos comunes en los requisitos?',
          options: [
            'Documentar en exceso cada cambio',
            'Inclusión de requisitos innecesarios que el usuario no pidió',
            'Validar los requerimientos con el cliente',
            'Trabajar con los stakeholders',
          ],
          correctIndex: 1,
          explain: 'La inclusión de requisitos innecesarios (funcionalidades no pedidas que generan costo adicional) es un defecto común en los requisitos.',
        },
        {
          id: 'mc-6.2-4',
          q: 'En la descripción del problema, el dominio donde existe el requerimiento del cliente se llama:',
          options: [
            'Dominio del software',
            'Dominio del hardware',
            'Dominio de la aplicación',
            'Dominio de validación',
          ],
          correctIndex: 2,
          explain: 'El dominio de la aplicación es donde existe el requerimiento del cliente y representa qué hay que hacer.',
        },
      ],
      ms: [
        {
          id: 'ms-6.2-1',
          q: '¿Cuáles son defectos comunes en los requisitos según el apunte?',
          options: [
            'Cliente/usuarios poco involucrados',
            'Requisitos ambiguos',
            'Exceso de validación con el cliente',
            'Requisitos innecesarios',
            'Omisión de necesidades de algún grupo de usuarios',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Los defectos son: poca participación del cliente, cambios mal gestionados, ambigüedad, requisitos innecesarios, insuficientes y omisión de necesidades. El exceso de validación no es un defecto.',
        },
        {
          id: 'ms-6.2-2',
          q: '¿Cuáles son beneficios de los buenos requisitos?',
          options: [
            'Acuerdo entre desarrolladores, usuarios y clientes',
            'Base objetiva para estimar recursos',
            'Eliminar la necesidad de validación',
            'Cumplir con los atributos de calidad',
            'Evitar trabajar a prueba y error',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Los beneficios son: acuerdo entre las partes, criterios de validación, base para estimar recursos, cumplir atributos de calidad y evitar prueba y error. Eliminar la validación no es un beneficio.',
        },
        {
          id: 'ms-6.2-3',
          q: '¿Qué recomendaciones surgen para evitar el problema de la abstracción?',
          options: [
            'Evitar descripciones genéricas sin detalles',
            'Evitar las ambigüedades',
            'Dar por supuesto el entorno del problema',
            'Conocer el entorno del problema',
            'Dedicar el tiempo necesario a la especificación',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Las recomendaciones son: evitar descripciones genéricas, evitar ambigüedades, conocer el entorno (NO dar nada por supuesto) y dedicar el tiempo necesario a la especificación.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-6.2-1',
        front: 'Límites del sistema',
        back: 'Definición de qué cosas son parte del sistema y qué cosas no. Permite calcular tiempos y costos; se trabaja con los stakeholders.',
      },
      {
        id: 'fc-6.2-2',
        front: 'Áreas grises',
        back: 'Cuestiones que no queda claro si están dentro de los límites del sistema. Suelen ser motivo de negociación y se busca minimizarlas.',
      },
      {
        id: 'fc-6.2-3',
        front: 'Dominio de la aplicación',
        back: 'Donde existe el requerimiento del cliente. Representa QUÉ hay que hacer y permite reconocer el problema.',
      },
      {
        id: 'fc-6.2-4',
        front: 'Dominio del software',
        back: 'Provee la solución interactuando con el dominio de aplicación. Representa CÓMO va a construirse el producto de software.',
      },
      {
        id: 'fc-6.2-5',
        front: 'Problema de la abstracción',
        back: 'Los modelos del software no son tan tangibles como un plano de una casa, por eso el cliente puede no darse cuenta hasta tener el producto terminado.',
      },
      {
        id: 'fc-6.2-6',
        front: 'Requerimiento funcional',
        back: 'Describe qué hace el sistema: entradas, salidas, interacción y comportamiento ante cada estímulo. Define la función de transformación.',
      },
      {
        id: 'fc-6.2-7',
        front: 'Requerimiento no funcional',
        back: 'Describe una restricción sobre el sistema: performance, plataforma, lenguaje, eficiencia, seguridad, portabilidad, etc.',
      },
      {
        id: 'fc-6.2-8',
        front: 'Requisitos innecesarios',
        back: 'Defecto común: incluir funcionalidades que el usuario no pidió ni emplea, generando un costo adicional innecesario.',
      },
    ],
  },

  // ---------- UNIDAD 7 · SECCIÓN 7.1 ----------
  {
    id: '7.1',
    unit: '7',
    title: 'Especificación de requerimientos (SRS)',
    criollo: 'El SRS es el documento donde describís todo lo que el software tiene que hacer de cara afuera, sin meterte todavía en cómo lo vas a programar. Acá vemos qué va, qué NO va, quién lo escribe y el estándar que casi nadie sigue al pie de la letra pero todos usan de base.',
    blocks: [
      {
        type: 'h3',
        text: 'Qué es el SRS',
      },
      {
        type: 'p',
        text: 'La <strong>especificación de requerimientos de software</strong> (SRS: <em>Software Requirement Specification</em>) contiene una <strong>descripción completa del comportamiento externo del software</strong>. El SRS son las especificaciones para un producto de software en particular, programa o conjunto de programas que realizan ciertas funciones en un determinado entorno. Deben especificarse tanto <strong>requerimientos funcionales como no funcionales</strong>.',
      },
      {
        type: 'h3',
        text: 'Estrategias para escribirlo',
        criollo: 'Dos caminos: o terminás de entender todo primero, o vas escribiendo de a partes mientras avanzás.',
      },
      {
        type: 'p',
        text: 'Una alternativa es <strong>completar el análisis del problema y luego escribir el SRS</strong>. Otra es <strong>ir descomponiéndolo</strong> e ir escribiendo la sección correspondiente en la medida que se va avanzando.',
      },
      {
        type: 'h3',
        text: 'Quién lo redacta',
      },
      {
        type: 'p',
        text: 'El documento SRS puede ser llevado a cabo por personal representativo del <strong>proveedor</strong>, es decir, el desarrollador del producto, o podría ser realizado por el <strong>usuario o potencial cliente</strong>. Lo recomendable es que fuera con la <strong>participación de ambas partes</strong>.',
      },
      {
        type: 'h3',
        text: 'Aspectos básicos que DEBE incluir',
      },
      {
        type: 'ul',
        items: [
          '<strong>Funcionalidad</strong>: qué debe hacer el software.',
          '<strong>Interfaces externas</strong>: cómo interactúa con usuarios, hardware y otros sistemas.',
          '<strong>Rendimiento</strong>: velocidad, tiempos de respuesta, recuperación, etc.',
          '<strong>Atributos</strong>: portabilidad, seguridad, exactitud, etc.',
          '<strong>Restricciones impuestas al diseño</strong>: lenguajes, plataformas, etc.',
        ],
      },
      {
        type: 'h3',
        text: 'Lo que NO debe incluir',
        criollo: 'Ojo con meter cosas del proyecto o del diseño acá adentro: tienen otra audiencia y mezclan la documentación.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Requerimientos referentes al proyecto</strong>, como por ejemplo: costos, cronogramas de tiempos, fechas de conclusión, etc.',
          '<strong>Diseños</strong>: deben ser excluidos porque tienen audiencias diferentes, y particionan la documentación.',
          '<strong>Planes de aseguramiento del producto</strong>, como por ejemplo: plan de administración de configuraciones, plan de pruebas, etc.',
        ],
      },
      {
        type: 'h3',
        text: 'El SRS como base para pedido de cotización',
      },
      {
        type: 'p',
        text: 'La especificación de requerimientos, algunas veces, puede servir como <strong>base para un pedido de cotización</strong> a distintos proveedores. En ese caso <strong>no se detalla tanto cada requerimiento</strong>, sino que se describe en forma más general, para poder <strong>abarcar más alternativas disponibles en el mercado</strong>.',
      },
      {
        type: 'h3',
        text: 'El estándar IEEE Std. 830-1998',
      },
      {
        type: 'p',
        text: 'Tradicionalmente, esta especificación fue considerada igual a la <strong>especificación funcional</strong>, con lo cual dejaba de lado los objetivos, los requerimientos no funcionales y las restricciones de desarrollo. Existe un estándar generado para la especificación de requerimientos de software (se recomienda leerlo): <strong>IEEE Std. 830 – 1998</strong>.',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Si bien es probable que en el ámbito laboral no se lleve a cabo el estándar tal como lo indica la IEEE, es habitual que las organizaciones se basen en él y hagan una adaptación acorde a sus necesidades.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Resumen: el SRS describe el "qué" hacia afuera (funcional y no funcional), no el "cómo" ni el "cuánto sale". El costo, el cronograma y el diseño van en otro lado.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-7.1-1',
          q: 'El SRS contiene una descripción completa del comportamiento externo del software.',
          a: true,
          explain: 'El apunte lo define exactamente así: el SRS contiene una descripción completa del comportamiento externo del software.',
        },
        {
          id: 'tf-7.1-2',
          q: 'El SRS debe especificar solamente los requerimientos funcionales.',
          a: false,
          explain: 'Falso. Deben especificarse tanto requerimientos funcionales como no funcionales.',
        },
        {
          id: 'tf-7.1-3',
          q: 'Los costos y cronogramas del proyecto deben incluirse dentro del SRS.',
          a: false,
          explain: 'Falso. El apunte aclara que el SRS NO debe incluir requerimientos referentes al proyecto como costos, cronogramas o fechas de conclusión.',
        },
        {
          id: 'tf-7.1-4',
          q: 'Lo recomendable es que el SRS se redacte con la participación tanto del proveedor como del usuario o cliente.',
          a: true,
          explain: 'Verdadero. Puede hacerlo el proveedor o el usuario, pero lo recomendable es con la participación de ambas partes.',
        },
        {
          id: 'tf-7.1-5',
          q: 'Cuando el SRS sirve como base para un pedido de cotización, se detalla cada requerimiento con el máximo nivel de precisión.',
          a: false,
          explain: 'Falso. En ese caso no se detalla tanto cada requerimiento, sino que se describe en forma más general para abarcar más alternativas del mercado.',
        },
      ],
      mc: [
        {
          id: 'mc-7.1-1',
          q: '¿Qué significa la sigla SRS?',
          options: [
            'System Requirement Standard',
            'Software Requirement Specification',
            'Software Resource System',
            'Specification Requirement Statement',
          ],
          correctIndex: 1,
          explain: 'SRS es Software Requirement Specification, la especificación de requerimientos de software.',
        },
        {
          id: 'mc-7.1-2',
          q: '¿Cuál de los siguientes es un aspecto básico que el SRS DEBE incluir?',
          options: [
            'El plan de pruebas',
            'El cronograma de tiempos',
            'Las interfaces externas',
            'El plan de administración de configuraciones',
          ],
          correctIndex: 2,
          explain: 'Las interfaces externas (cómo interactúa con usuarios, hardware y otros sistemas) son uno de los aspectos básicos que el SRS debe incluir. Los otros tres son cosas que el apunte indica que NO van en el SRS.',
        },
        {
          id: 'mc-7.1-3',
          q: 'Según el apunte, ¿cuál es el estándar generado para la especificación de requerimientos de software?',
          options: [
            'ISO 9001',
            'IEEE Std. 830 – 1998',
            'IEEE 802.11',
            'ISO/IEC 12207',
          ],
          correctIndex: 1,
          explain: 'El estándar que menciona el apunte es el IEEE Std. 830 – 1998, y recomienda leerlo.',
        },
        {
          id: 'mc-7.1-4',
          q: 'El aspecto "Rendimiento" dentro del SRS se refiere a:',
          options: [
            'Lenguajes y plataformas a usar',
            'Velocidad, tiempos de respuesta, recuperación, etc.',
            'Portabilidad, seguridad y exactitud',
            'Costos y fechas de conclusión',
          ],
          correctIndex: 1,
          explain: 'El apunte define Rendimiento como velocidad, tiempos de respuesta, recuperación, etc. Lenguajes/plataformas son Restricciones de diseño y portabilidad/seguridad/exactitud son Atributos.',
        },
      ],
      ms: [
        {
          id: 'ms-7.1-1',
          q: '¿Cuáles de los siguientes son aspectos básicos que el SRS DEBE incluir?',
          options: [
            'Funcionalidad',
            'Costos del proyecto',
            'Rendimiento',
            'Restricciones impuestas al diseño',
            'Plan de pruebas',
          ],
          correctIndexes: [
            0,
            2,
            3,
          ],
          explain: 'Funcionalidad, Rendimiento y Restricciones impuestas al diseño son aspectos que el SRS debe incluir. Los costos y el plan de pruebas son cosas que el apunte indica que NO deben incluirse.',
        },
        {
          id: 'ms-7.1-2',
          q: '¿Qué cosas indica el apunte que el SRS NO debe incluir?',
          options: [
            'Requerimientos del proyecto como costos y cronogramas',
            'Atributos como portabilidad y seguridad',
            'Diseños',
            'Planes de aseguramiento del producto',
            'Interfaces externas',
          ],
          correctIndexes: [
            0,
            2,
            3,
          ],
          explain: 'El SRS no debe incluir requerimientos del proyecto (costos, cronogramas), diseños ni planes de aseguramiento del producto. Atributos e interfaces externas sí son aspectos que debe incluir.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-7.1-1',
        front: 'SRS',
        back: 'Software Requirement Specification. Documento que contiene una descripción completa del comportamiento externo del software, especificando requerimientos funcionales y no funcionales.',
      },
      {
        id: 'fc-7.1-2',
        front: 'Quién redacta el SRS',
        back: 'Puede hacerlo el proveedor (desarrollador del producto) o el usuario / potencial cliente. Lo recomendable es que participen ambas partes.',
      },
      {
        id: 'fc-7.1-3',
        front: 'Funcionalidad (en el SRS)',
        back: 'Aspecto básico del SRS que define qué debe hacer el software.',
      },
      {
        id: 'fc-7.1-4',
        front: 'Interfaces externas',
        back: 'Aspecto del SRS que describe cómo el software interactúa con usuarios, hardware y otros sistemas.',
      },
      {
        id: 'fc-7.1-5',
        front: 'Restricciones impuestas al diseño',
        back: 'Aspecto del SRS que especifica condicionantes como lenguajes y plataformas a utilizar.',
      },
      {
        id: 'fc-7.1-6',
        front: 'Qué NO va en el SRS',
        back: 'Requerimientos del proyecto (costos, cronogramas, fechas de conclusión), diseños y planes de aseguramiento del producto (administración de configuraciones, plan de pruebas).',
      },
      {
        id: 'fc-7.1-7',
        front: 'IEEE Std. 830 – 1998',
        back: 'Estándar generado para la especificación de requerimientos de software. En la práctica las organizaciones suelen basarse en él y adaptarlo a sus necesidades.',
      },
      {
        id: 'fc-7.1-8',
        front: 'SRS para cotización',
        back: 'Cuando sirve de base para un pedido de cotización, no se detalla tanto cada requerimiento, sino que se describe en forma más general para abarcar más alternativas del mercado.',
      },
      {
        id: 'fc-7.1-9',
        front: 'Estrategias para escribir el SRS',
        back: 'Completar primero el análisis del problema y luego escribirlo, o ir descomponiendo el problema y escribiendo cada sección a medida que se avanza.',
      },
    ],
  },

  // ---------- UNIDAD 7 · SECCIÓN 7.2 ----------
  {
    id: '7.2',
    unit: '7',
    title: 'Cuantificación de los requerimientos',
    criollo: 'En la etapa de requerimientos no alcanza con saber QUÉ tenés que hacer: también necesitás saber CUÁNTO. El mismo problema con distintos volúmenes pide soluciones distintas, así que hay que medir todo. Acá te muestro qué se cuantifica y cómo se arma el cuadro de entidades.',
    blocks: [
      {
        type: 'h3',
        text: 'Por qué cuantificar',
        criollo: 'No es lo mismo un sistema que procesa 20 cosas por día que uno que procesa 5000 por hora.',
      },
      {
        type: 'p',
        text: 'En toda etapa de requerimientos, además de saber <strong>qué</strong> tenemos que hacer, debemos saber <strong>cuánto</strong> tenemos que hacer. Esto se debe a que un mismo problema, con distintos volúmenes, lleva a <strong>soluciones distintas</strong>.',
      },
      {
        type: 'p',
        text: 'Los volúmenes no siempre son un problema, pero para saber si lo son o no, deben <em>analizarse</em>. Por ejemplo: si mi sistema procesa autorizaciones de compras para tarjetas de crédito, diseñar una solución para un pico de 20 autorizaciones por día, 500 autorizaciones por hora o 5000 autorizaciones por hora, no será lo mismo.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'La moraleja del ejemplo de las tarjetas: con la misma funcionalidad, el volumen te cambia el diseño de la solución. Por eso primero se mide.',
      },
      {
        type: 'h3',
        text: 'Propósito de la cuantificación',
      },
      {
        type: 'p',
        text: 'El propósito de la cuantificación es especificar para los requerimientos <strong>estáticos</strong> y/o <strong>dinámicos</strong> vinculados al software o a la interacción humana con el software en conjunto.',
      },
      {
        type: 'h3',
        text: 'Requisitos estáticos',
        criollo: 'Son los números más o menos fijos: cuánta gente, cuántas terminales, cuánta info.',
      },
      {
        type: 'p',
        text: 'Los requisitos estáticos pueden incluir lo siguiente:',
      },
      {
        type: 'ul',
        items: [
          'El número de terminales a ser consideradas.',
          'El número de usuarios que se conectarán en simultáneo.',
          'La cantidad y tipo de información que se manejará.',
        ],
      },
      {
        type: 'p',
        text: 'Pueden identificarse este tipo de requisitos estáticos en un apartado separado en la especificación de requerimientos, bajo el título: <strong>capacidad</strong>.',
      },
      {
        type: 'h3',
        text: 'Requisitos dinámicos',
        criollo: 'Son los que dependen del tiempo: cuántas transacciones, tareas y datos por período.',
      },
      {
        type: 'p',
        text: 'Los requisitos dinámicos pueden incluir los números de <strong>transacciones</strong>, <strong>tareas</strong> y la cantidad de <strong>datos</strong> a ser procesados dentro de ciertos períodos de tiempo, para condiciones del trabajo <em>normales</em> y <em>máximas</em>.',
      },
      {
        type: 'p',
        text: 'Todos estos requisitos deben declararse en <strong>condiciones mensurables</strong>. Por ejemplo, 95% de las transacciones se procesarán en menos de 1 seg.',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Una condición mensurable es la que se puede medir y verificar objetivamente, como un porcentaje y un tiempo de respuesta concretos (95% en menos de 1 seg).',
      },
      {
        type: 'h3',
        text: 'Cuadro de cuantificación de entidades',
        criollo: 'Se podrían armar cuadros como este para cuantificar las entidades que toca el software a desarrollar.',
      },
      {
        type: 'p',
        text: 'Se podrían realizar cuadros como el siguiente para cuantificar entidades involucradas en el software a desarrollar:',
      },
      {
        type: 'table',
        caption: 'Cuantificación de entidades involucradas en el software',
        headers: [
          'Entidad',
          'Volumen inicial',
          'Crecimiento esperado',
          'Volumen máximo',
          'Condición de obsolescencia',
        ],
        rows: [
          [
            'Clientes',
            '150',
            '25 por año',
            '500',
            '1 año sin pedidos',
          ],
          [
            'Autorizaciones',
            '25',
            '15 por año',
            '3000',
            '2 meses de hecha',
          ],
        ],
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-7.2-1',
          q: 'En la etapa de requerimientos, además de saber qué tenemos que hacer, debemos saber cuánto tenemos que hacer.',
          a: true,
          explain: 'El apunte lo dice textual: un mismo problema, con distintos volúmenes, lleva a soluciones distintas.',
        },
        {
          id: 'tf-7.2-2',
          q: 'El número de usuarios que se conectarán en simultáneo es un requisito dinámico.',
          a: false,
          explain: 'Es un requisito estático. Los estáticos incluyen número de terminales, usuarios simultáneos y cantidad/tipo de información.',
        },
        {
          id: 'tf-7.2-3',
          q: 'Los requisitos estáticos pueden identificarse en un apartado separado bajo el título "capacidad".',
          a: true,
          explain: 'El apunte indica que este tipo de requisitos estáticos puede ir en un apartado separado bajo el título: capacidad.',
        },
        {
          id: 'tf-7.2-4',
          q: 'Todos los requisitos deben declararse en condiciones mensurables, como "95% de las transacciones se procesarán en menos de 1 seg".',
          a: true,
          explain: 'Ese es el ejemplo exacto de condición mensurable que da el apunte.',
        },
        {
          id: 'tf-7.2-5',
          q: 'Como los volúmenes nunca son un problema, no hace falta analizarlos.',
          a: false,
          explain: 'El apunte dice que los volúmenes no siempre son un problema, pero que para saber si lo son o no, deben analizarse.',
        },
      ],
      mc: [
        {
          id: 'mc-7.2-1',
          q: '¿Cuál es el propósito de la cuantificación según el apunte?',
          options: [
            'Estimar el costo y el cronograma del proyecto',
            'Especificar los requerimientos estáticos y/o dinámicos vinculados al software o a la interacción humana con el software',
            'Definir el lenguaje de programación y la plataforma',
            'Documentar únicamente los requerimientos funcionales',
          ],
          correctIndex: 1,
          explain: 'El propósito de la cuantificación es especificar los requerimientos estáticos y/o dinámicos vinculados al software o a la interacción humana con el software en conjunto.',
        },
        {
          id: 'mc-7.2-2',
          q: 'En el ejemplo de las autorizaciones de compras para tarjetas de crédito, ¿qué demuestra comparar 20 por día, 500 por hora o 5000 por hora?',
          options: [
            'Que la funcionalidad cambia según el volumen',
            'Que el volumen no influye en la solución',
            'Que un mismo problema con distintos volúmenes lleva a soluciones distintas',
            'Que siempre conviene diseñar para el pico máximo',
          ],
          correctIndex: 2,
          explain: 'El ejemplo ilustra que con distintos volúmenes diseñar la solución no será lo mismo: un mismo problema con distintos volúmenes lleva a soluciones distintas.',
        },
        {
          id: 'mc-7.2-3',
          q: '¿Cuál de estos es un ejemplo de requisito dinámico?',
          options: [
            'El número de terminales a ser consideradas',
            'El número de usuarios que se conectarán en simultáneo',
            'La cantidad y tipo de información que se manejará',
            'El número de transacciones a procesar dentro de ciertos períodos de tiempo',
          ],
          correctIndex: 3,
          explain: 'Los requisitos dinámicos incluyen números de transacciones, tareas y datos procesados dentro de ciertos períodos de tiempo. Las otras opciones son requisitos estáticos.',
        },
        {
          id: 'mc-7.2-4',
          q: 'Según el cuadro de cuantificación, ¿cuál es el volumen máximo de la entidad Autorizaciones?',
          options: [
            '500',
            '3000',
            '25',
            '150',
          ],
          correctIndex: 1,
          explain: 'En el cuadro, Autorizaciones tiene volumen inicial 25 y volumen máximo 3000. El 500 corresponde al volumen máximo de Clientes.',
        },
      ],
      ms: [
        {
          id: 'ms-7.2-1',
          q: '¿Cuáles de los siguientes son requisitos estáticos según el apunte?',
          options: [
            'El número de terminales a ser consideradas',
            'El número de transacciones por período de tiempo',
            'El número de usuarios que se conectarán en simultáneo',
            'La cantidad y tipo de información que se manejará',
            'La cantidad de tareas a procesar en condiciones máximas',
          ],
          correctIndexes: [
            0,
            2,
            3,
          ],
          explain: 'Los requisitos estáticos son: número de terminales, usuarios simultáneos y cantidad/tipo de información. Las transacciones y tareas por período de tiempo son requisitos dinámicos.',
        },
        {
          id: 'ms-7.2-2',
          q: '¿Qué columnas tiene el cuadro de cuantificación de entidades?',
          options: [
            'Volumen inicial',
            'Costo estimado',
            'Crecimiento esperado',
            'Volumen máximo',
            'Condición de obsolescencia',
          ],
          correctIndexes: [
            0,
            2,
            3,
            4,
          ],
          explain: 'El cuadro tiene las columnas Entidad, Volumen inicial, Crecimiento esperado, Volumen máximo y Condición de obsolescencia. "Costo estimado" no figura.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-7.2-1',
        front: 'Por qué cuantificar',
        back: 'Además de saber qué tenemos que hacer, debemos saber cuánto, porque un mismo problema con distintos volúmenes lleva a soluciones distintas.',
      },
      {
        id: 'fc-7.2-2',
        front: 'Propósito de la cuantificación',
        back: 'Especificar los requerimientos estáticos y/o dinámicos vinculados al software o a la interacción humana con el software en conjunto.',
      },
      {
        id: 'fc-7.2-3',
        front: 'Requisitos estáticos',
        back: 'Incluyen el número de terminales, el número de usuarios que se conectarán en simultáneo y la cantidad y tipo de información que se manejará. Pueden ir en un apartado llamado "capacidad".',
      },
      {
        id: 'fc-7.2-4',
        front: 'Requisitos dinámicos',
        back: 'Incluyen los números de transacciones, tareas y la cantidad de datos a procesar dentro de ciertos períodos de tiempo, para condiciones de trabajo normales y máximas.',
      },
      {
        id: 'fc-7.2-5',
        front: 'Apartado "capacidad"',
        back: 'Título de un apartado separado en la especificación de requerimientos donde se identifican los requisitos estáticos.',
      },
      {
        id: 'fc-7.2-6',
        front: 'Condición mensurable',
        back: 'Forma en que deben declararse los requisitos para poder medirse. Ejemplo: 95% de las transacciones se procesarán en menos de 1 seg.',
      },
      {
        id: 'fc-7.2-7',
        front: 'Cuadro de cuantificación',
        back: 'Tabla para cuantificar entidades del software con columnas: Entidad, Volumen inicial, Crecimiento esperado, Volumen máximo y Condición de obsolescencia.',
      },
      {
        id: 'fc-7.2-8',
        front: 'Ejemplo entidad Clientes',
        back: 'Volumen inicial 150, crecimiento esperado 25 por año, volumen máximo 500 y condición de obsolescencia 1 año sin pedidos.',
      },
    ],
  },

  // ---------- UNIDAD 7 · SECCIÓN 7.3 ----------
  {
    id: '7.3',
    unit: '7',
    title: 'Requerimientos no funcionales: técnicas',
    criollo: 'Especificar lo funcional es solo la mitad de la pega. Te falta lo no funcional: las restricciones y atributos de calidad que el sistema también tiene que cumplir. Acá ves el árbol de cualidades de Boehm, el criterio SMART para escribirlos bien y cómo validarlos con escenarios.',
    blocks: [
      {
        type: 'h3',
        text: 'Por qué los requerimientos no funcionales',
        criollo: 'Todo sistema, del más simple al más complejo, tiene estos requerimientos extra.',
      },
      {
        type: 'p',
        text: 'Especificar los requerimientos funcionales para nuestro sistema de software es solo una parte de la tarea a realizar. Nos falta otra parte relevante que es enfocarnos en requerimientos no funcionales. Todos los sistemas, desde los más simples hasta los que presentan alta complejidad, tienen requerimientos adicionales que refieren a <strong>restricciones</strong> o <strong>atributos</strong> que deben también cumplir.',
      },
      {
        type: 'h3',
        text: 'El cuadro de Barry Boehm (1976)',
      },
      {
        type: 'p',
        text: 'El siguiente cuadro fue confeccionado por <strong>Barry Boehm</strong>, un reconocido autor en el área de ingeniería del software, que estableció en 1976 una <strong>lista jerárquica de cualidades</strong> presentes en un producto de software.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/7-arbol-calidad-software.jpeg',
        alt: 'Árbol jerárquico de las características de calidad del software (Boehm, 1976): "Utilidades Generales" se ramifica en "Para el uso" (Portabilidad, Confiabilidad, Eficiencia, Ingeniería Humana) y "Para el mantenimiento" (Testeable, Comprensible, Modificable), que a su vez derivan en cualidades como Independiente del HW, Autocontenido, Seguro, Completo, Íntegro/Robusto, Consistente, Trazable, Eficiente con el HW, Accesible, Comunicativo, Autodescriptivo, Estructurado, Conciso, Legible y Escalable.',
        caption: 'Árbol de las características de calidad del software (Boehm, 1976): una lista jerárquica de cualidades para guiar la especificación de requerimientos no funcionales.',
      },
      {
        type: 'p',
        text: 'Si bien el cuadro es muy completo, <strong>no todos los sistemas de software que desarrollemos van a requerir que se especifique toda la lista de cualidades</strong>. Esto dependerá de los requisitos planteados por el cliente o los usuarios para cada aplicación en particular.',
      },
      {
        type: 'h3',
        text: 'Cada caso pide lo suyo',
        criollo: 'No generalices: fijate qué es crítico para cada aplicación puntual.',
      },
      {
        type: 'p',
        text: 'Por ejemplo, si se trata de un <strong>controlador de vuelo</strong> del que dependen vidas humanas, la <strong>confiabilidad</strong> se transformará en un requerimiento importante; mientras que si se trata de un producto que se comercializará en forma masiva, como un <strong>juego para niños</strong>, quizás la <strong>portabilidad</strong> sea un factor más crítico para poder alcanzar a la mayor cantidad de usuarios.',
      },
      {
        type: 'p',
        text: 'Lo más relevante a tener en cuenta es que debe determinarse para cada aplicación y cada situación particular cuáles son los <strong>requerimientos críticos necesarios</strong>, sin generalizar, para evitar malgastar tiempo y recursos en cuestiones que no son imprescindibles.',
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Los requerimientos no funcionales habitualmente son expresados en lenguaje natural. Esto implica que suelan tener un alto nivel de ambigüedad, que debe ser evitado para poder ser verificados.',
      },
      {
        type: 'h3',
        text: 'A qué refieren los no funcionales',
      },
      {
        type: 'ul',
        items: [
          '<strong>Restricciones:</strong> características impuestas por el cliente.',
          '<strong>Atributos de calidad:</strong> propiedades relevantes para los usuarios.',
        ],
      },
      {
        type: 'p',
        text: 'Cuando el cliente o los usuarios especifican requerimientos no funcionales, se recomienda llevar a cabo un <strong>análisis costo/beneficio</strong> para ellos.',
      },
      {
        type: 'h3',
        text: 'El criterio SMART',
        criollo: 'Sirve para evaluar si describiste bien el requerimiento. Una sigla por letra.',
      },
      {
        type: 'p',
        text: 'La correcta descripción puede evaluarse con las siglas del término <strong>SMART</strong> (Specific, Measurable, Attainable, Realizable, Traceable), que implica:',
      },
      {
        type: 'table',
        caption: 'El criterio SMART para describir requerimientos no funcionales',
        headers: [
          'Término',
          'Significado',
        ],
        rows: [
          [
            'Específico (Specific)',
            'El requerimiento debe estar expresado sin ambigüedad, en forma simple y clara.',
          ],
          [
            'Medible (Measurable)',
            'El requerimiento debe poder medirse, probarse si lo cumple o no.',
          ],
          [
            'Alcanzable (Attainable)',
            'Que sea factible llevarlo a cabo.',
          ],
          [
            'Realizable (Realizable)',
            'Se puede cumplir con los recursos disponibles: infraestructura, tecnología, personal, etc.',
          ],
          [
            'Rastreable (Traceable)',
            'Se puede determinar su origen, quién lo solicitó, dónde se encuentra especificado, su diseño e implementación.',
          ],
        ],
      },
      {
        type: 'h3',
        text: 'Validación por escenarios',
        criollo: 'Para validar un requerimiento armás un escenario y lo partís en tres: entrada, condiciones y resultados.',
      },
      {
        type: 'p',
        text: 'Para validar un requerimiento puede emplearse la <strong>definición de escenarios</strong>, donde debe definirse:',
      },
      {
        type: 'ul',
        items: [
          '<strong>La entrada:</strong> quién produce el estímulo y el estímulo que se produce.',
          '<strong>Las condiciones:</strong> en qué estado se encuentra el sistema y qué componente recibe el estímulo.',
          '<strong>Los resultados:</strong> la respuesta que provoca ese estímulo, junto con la métrica para medirlo.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/7-escenario-validacion.png',
        alt: 'Diagrama de validación por escenarios: a la izquierda "Entradas" (un usuario que produce un Estímulo), en el centro "Entorno" (las Condiciones) y a la derecha "Medida de Respuesta" (los Resultados). Flechas Estímulo → Entorno → Respuesta.',
        caption: 'Validación de un requerimiento mediante escenarios: entrada (estímulo), condiciones del sistema y resultados con su métrica.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Resumiendo: árbol de Boehm para saber qué cualidades existen, SMART para escribir cada requerimiento sin ambigüedad, y escenarios para validar que de verdad se cumpla. Y siempre con un análisis costo/beneficio atrás.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-7.3-1',
          q: 'Especificar los requerimientos funcionales es solo una parte de la tarea: también hay que enfocarse en los no funcionales.',
          a: true,
          explain: 'El apunte arranca aclarando que lo funcional es solo una parte y que falta enfocarse en los requerimientos no funcionales.',
        },
        {
          id: 'tf-7.3-2',
          q: 'Todo sistema de software que desarrollemos debe especificar la lista completa de cualidades del cuadro de Boehm.',
          a: false,
          explain: 'No: el apunte dice que, si bien el cuadro es muy completo, no todos los sistemas van a requerir que se especifique toda la lista. Depende de cada aplicación.',
        },
        {
          id: 'tf-7.3-3',
          q: 'Los requerimientos no funcionales suelen expresarse en lenguaje natural, lo que les da un alto nivel de ambigüedad que hay que evitar.',
          a: true,
          explain: 'Tal cual lo plantea el apunte: al estar en lenguaje natural suelen tener ambigüedad, que debe evitarse para poder verificarlos.',
        },
        {
          id: 'tf-7.3-4',
          q: 'La lista jerárquica de cualidades del software fue establecida por Barry Boehm en 1976.',
          a: true,
          explain: 'El cuadro fue confeccionado por Barry Boehm, que estableció en 1976 una lista jerárquica de cualidades de un producto de software.',
        },
        {
          id: 'tf-7.3-5',
          q: 'Cuando el cliente especifica requerimientos no funcionales, se recomienda evitar cualquier análisis costo/beneficio.',
          a: false,
          explain: 'Al revés: el apunte recomienda justamente llevar a cabo un análisis costo/beneficio para esos requerimientos.',
        },
      ],
      mc: [
        {
          id: 'mc-7.3-1',
          q: '¿A qué refieren, según el apunte, los requerimientos no funcionales?',
          options: [
            'A funciones que el software debe ejecutar paso a paso',
            'A restricciones impuestas por el cliente y atributos de calidad para los usuarios',
            'A cronogramas, costos y fechas de conclusión del proyecto',
            'Únicamente a los planes de pruebas del sistema',
          ],
          correctIndex: 1,
          explain: 'El apunte indica que los no funcionales refieren a restricciones (características impuestas por el cliente) y a atributos de calidad (propiedades relevantes para los usuarios).',
        },
        {
          id: 'mc-7.3-2',
          q: 'En un controlador de vuelo del que dependen vidas humanas, ¿qué cualidad se transforma en un requerimiento importante según el ejemplo del apunte?',
          options: [
            'La portabilidad',
            'La confiabilidad',
            'La legibilidad',
            'La concisión',
          ],
          correctIndex: 1,
          explain: 'El ejemplo del apunte señala la confiabilidad como requerimiento importante en un controlador de vuelo; la portabilidad aparece como crítica en otro caso (un juego masivo para niños).',
        },
        {
          id: 'mc-7.3-3',
          q: 'Dentro del criterio SMART, ¿qué significa que un requerimiento sea "Realizable"?',
          options: [
            'Que esté expresado sin ambigüedad, simple y claro',
            'Que se pueda determinar su origen y quién lo solicitó',
            'Que se pueda cumplir con los recursos disponibles: infraestructura, tecnología, personal, etc.',
            'Que pueda medirse y probarse si lo cumple o no',
          ],
          correctIndex: 2,
          explain: 'Realizable, según el apunte, es que se pueda cumplir con los recursos disponibles (infraestructura, tecnología, personal). Las otras opciones describen Específico, Rastreable y Medible.',
        },
        {
          id: 'mc-7.3-4',
          q: 'En la validación por escenarios, ¿qué define "la entrada"?',
          options: [
            'El estado del sistema y el componente que recibe el estímulo',
            'La respuesta que provoca el estímulo y su métrica',
            'Quién produce el estímulo y el estímulo que se produce',
            'El análisis costo/beneficio del requerimiento',
          ],
          correctIndex: 2,
          explain: 'La entrada define quién produce el estímulo y el estímulo que se produce. El estado del sistema y el componente que lo recibe son las condiciones; la respuesta y su métrica son los resultados.',
        },
      ],
      ms: [
        {
          id: 'ms-7.3-1',
          q: '¿Cuáles de los siguientes son términos del criterio SMART tal como los define el apunte?',
          options: [
            'Específico',
            'Medible',
            'Documentado',
            'Alcanzable',
            'Rastreable',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'SMART es Específico, Medible, Alcanzable, Realizable y Rastreable. "Documentado" no forma parte de la sigla.',
        },
        {
          id: 'ms-7.3-2',
          q: 'En la validación por escenarios, ¿qué elementos hay que definir?',
          options: [
            'La entrada',
            'Las condiciones',
            'El presupuesto del proyecto',
            'Los resultados',
            'El cronograma de entrega',
          ],
          correctIndexes: [
            0,
            1,
            3,
          ],
          explain: 'El apunte indica definir la entrada (estímulo y quién lo produce), las condiciones (estado del sistema y componente que recibe el estímulo) y los resultados (respuesta y métrica). El presupuesto y el cronograma no se mencionan acá.',
        },
        {
          id: 'ms-7.3-3',
          q: '¿Qué afirmaciones del apunte sobre los requerimientos no funcionales son correctas?',
          options: [
            'Todos los sistemas, simples o complejos, tienen requerimientos adicionales de este tipo',
            'Conviene especificar siempre la lista completa de cualidades de Boehm',
            'Debe determinarse para cada situación cuáles son los requerimientos críticos, sin generalizar',
            'Se recomienda un análisis costo/beneficio cuando se especifican',
            'Como están en lenguaje natural, su ambigüedad es deseable y no hay que evitarla',
          ],
          correctIndexes: [
            0,
            2,
            3,
          ],
          explain: 'Son correctas la 1, la 3 y la 4. No conviene especificar siempre toda la lista (depende del caso) y la ambigüedad del lenguaje natural debe evitarse, no fomentarse.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-7.3-1',
        front: 'Requerimientos no funcionales',
        back: 'Requerimientos adicionales que tienen todos los sistemas, simples o complejos. Refieren a restricciones impuestas por el cliente y a atributos de calidad relevantes para los usuarios.',
      },
      {
        id: 'fc-7.3-2',
        front: 'Cuadro de Boehm (1976)',
        back: 'Lista jerárquica de cualidades presentes en un producto de software, confeccionada por Barry Boehm. Es muy completa, pero no todo sistema necesita especificar la lista entera.',
      },
      {
        id: 'fc-7.3-3',
        front: 'Criterio SMART',
        back: 'Sigla para evaluar la correcta descripción de un requerimiento: Specific, Measurable, Attainable, Realizable, Traceable (Específico, Medible, Alcanzable, Realizable, Rastreable).',
      },
      {
        id: 'fc-7.3-4',
        front: 'Específico (Specific)',
        back: 'El requerimiento debe estar expresado sin ambigüedad, en forma simple y clara.',
      },
      {
        id: 'fc-7.3-5',
        front: 'Realizable vs. Alcanzable',
        back: 'Alcanzable es que sea factible llevarlo a cabo; Realizable es que se pueda cumplir con los recursos disponibles (infraestructura, tecnología, personal).',
      },
      {
        id: 'fc-7.3-6',
        front: 'Rastreable (Traceable)',
        back: 'Se puede determinar su origen: quién lo solicitó, dónde se encuentra especificado, su diseño e implementación.',
      },
      {
        id: 'fc-7.3-7',
        front: 'Validación por escenarios',
        back: 'Técnica para validar un requerimiento definiendo entrada (estímulo y quién lo produce), condiciones (estado del sistema y componente que recibe el estímulo) y resultados (respuesta y su métrica).',
      },
      {
        id: 'fc-7.3-8',
        front: 'Análisis costo/beneficio',
        back: 'Se recomienda hacerlo cuando el cliente o los usuarios especifican requerimientos no funcionales.',
      },
      {
        id: 'fc-7.3-9',
        front: 'Ambigüedad de los no funcionales',
        back: 'Como suelen expresarse en lenguaje natural, tienen alto nivel de ambigüedad, que debe evitarse para poder verificarlos.',
      },
    ],
  },

  // ---------- UNIDAD 7 · SECCIÓN 7.4 ----------
  {
    id: '7.4',
    unit: '7',
    title: 'Atributos de una buena especificación',
    criollo: 'Acá viene la checklist de qué tiene que cumplir una SRS para estar bien escrita. Son como diez atributos con nombre propio: correcta, no ambigua, completa, verificable, etc. Memorizalos porque caen en parcial casi seguro, y ojo con las trampas tipo la famosa sigla de "a determinar".',
    blocks: [
      {
        type: 'p',
        text: 'A continuación se describen brevemente los atributos que debe cumplir una <strong>SRS</strong> para ser considerada <strong>bien escrita</strong>. Cada uno apunta a una propiedad distinta del documento de requerimientos.',
      },
      {
        type: 'h3',
        text: 'Correcto',
      },
      {
        type: 'p',
        text: 'Una especificación de requisitos de software es correcta <strong>si, y solo si</strong>, todos y cada uno de los requisitos indicados representa algo requerido por el sistema a construirse. No hay una herramienta que pueda garantizar la corrección, pero sí es recomendable que el <strong>cliente</strong> determine si la especificación muestra sus necesidades.',
      },
      {
        type: 'h3',
        text: 'No ambigua',
      },
      {
        type: 'p',
        text: 'Si, y solo si, cada requerimiento establecido en la especificación tiene una <strong>única interpretación</strong>. Algo a tener en cuenta es que cada término que tenga <strong>múltiples significados</strong> debe aparecer en un <strong>glosario</strong>, sobre todo porque el lenguaje natural invita a la ambigüedad.',
      },
      {
        type: 'h3',
        text: 'Completa',
        criollo: 'Acá adentro vive la sigla de "a determinar", prestale atención.',
      },
      {
        type: 'p',
        text: 'Un documento SRS está completo <strong>si, y solo si</strong>, incluye:',
      },
      {
        type: 'ul',
        items: [
          'Todo lo que el software tiene que hacer está en el SRS. Es una condición difícil de lograr ya que, si lo olvidamos, no lo detectaremos fácilmente.',
          'Todas las posibles respuestas del software a todas las posibles entradas de datos deben estar definidas. Es importante especificar las respuestas tanto para datos de entrada <strong>válidos</strong> como <strong>inválidos</strong>.',
          'Todas las páginas, figuras y tablas numeradas y referenciadas.',
          'Ninguna sección puede contener las siglas en inglés de la frase to be determined (a determinar), que se incluyen junto a un requerimiento cuando su descripción no se encuentra completa.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'La sigla de "a determinar" (to be determined) marca un requerimiento cuya descripción está incompleta. Cuando aparece, se recomienda incluir la causa por la cual está incompleto, quién es la persona responsable de llevarlo a cabo y una fecha estipulada para cumplirse. Una SRS completa no puede tener ninguna de esas siglas suelta.',
      },
      {
        type: 'h3',
        text: 'Verificable',
      },
      {
        type: 'p',
        text: 'Un requisito es verificable <strong>si, y solo si</strong>, existe algún <strong>proceso concreto y finito</strong> en el cual una persona o máquina pueda comprobar si el software lo cumple.',
      },
      {
        type: 'p',
        text: 'En función de cómo se describe, puede ser difícil verificar el requerimiento: los requisitos <strong>ambiguos no son verificables</strong> (por ejemplo: \'el sistema debe tener una interfaz amigable\'). Lo mismo sucede cuando indican <strong>cantidades no mensurables</strong> (por ejemplo: \'el sistema usualmente no debe demorar más de 30 segundos en una consulta\') o cualquier requerimiento referente a pruebas de bloqueo (por ejemplo: \'el sistema no puede entrar en un ciclo infinito\'). Si no es posible establecer un método para comprobarlo, el requisito debe <strong>eliminarse o revisarse</strong>.',
      },
      {
        type: 'h3',
        text: 'Consistente',
      },
      {
        type: 'p',
        text: 'La documentación es <strong>internamente consistente</strong> si, y solo si, no se establecen <strong>conflictos</strong> entre requisitos individuales o grupos de requisitos. Los tres tipos de conflictos posibles son:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Términos conflictivos</strong>: dos términos en distintos contextos se emplean para significar la misma cosa.',
          '<strong>Características conflictivas</strong>: dos partes de la SRS demandan comportamientos contradictorios.',
          '<strong>Inconsistencia temporal</strong>: dos partes del SRS demandan del producto características temporales contradictorias.',
        ],
      },
      {
        type: 'h3',
        text: 'Entendible por no especialistas',
      },
      {
        type: 'p',
        text: 'Refiere a que la <strong>notación formal</strong> que se emplee debe poder ser comprendida por clientes y usuarios especialistas en todas las áreas. La idea es que sea <strong>fácil de entender</strong> para que el cliente pueda validarla.',
      },
      {
        type: 'h3',
        text: 'Modificable',
      },
      {
        type: 'p',
        text: 'Un documento de requisitos es modificable <strong>si, y solo si</strong>, su <strong>estilo y estructura</strong> permiten que puedan llevarse a cabo modificaciones en los requisitos manteniendo la estructura y el estilo, de forma fácil, completa y consistente. La modificabilidad generalmente requiere en la documentación una <strong>tabla de contenidos</strong> y un <strong>índice</strong>.',
      },
      {
        type: 'h3',
        text: 'Rastreable o trazable',
      },
      {
        type: 'p',
        text: 'Un SRS es trazable si el <strong>origen</strong> de cada uno de los requerimientos es claro y facilita su referencia en las futuras etapas del desarrollo, o en las actualizaciones de la documentación. Se recomiendan los siguientes tipos de trazabilidad:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Trazabilidad hacia atrás desde los requerimientos</strong>: podemos conocer por qué cada requerimiento en el SRS existe.',
          '<strong>Trazabilidad hacia adelante hasta los requerimientos</strong>: todos los documentos que preceden al SRS pueden referenciarse al SRS.',
          '<strong>Trazabilidad hacia atrás hasta los requerimientos</strong>: cada comportamiento del software refiere explícitamente aquellos requerimientos que satisface.',
          '<strong>Trazabilidad hacia adelante desde los requerimientos</strong>: podemos entender cuáles componentes del software satisfacen cada requerimiento.',
        ],
      },
      {
        type: 'h3',
        text: 'Anotada',
      },
      {
        type: 'p',
        text: 'Cada requerimiento lleva una <strong>anotación</strong> que provee una guía al desarrollo. Existen básicamente dos tipos de notaciones:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Necesidad relativa</strong>: es de utilidad cuando el cliente prefiere el producto a tiempo aun cuando no estén completos los requerimientos no relevantes. Así, cada requerimiento puede ser catalogado como <strong>E</strong> (esencial), <strong>D</strong> (deseable) u <strong>O</strong> (opcional).',
          '<strong>Estabilidad relativa</strong>: determina si el requerimiento es <strong>estable</strong> o <strong>volátil</strong>.',
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Truco para fijar los atributos: una buena SRS es CORRECTA y NO AMBIGUA, está COMPLETA (sin esas siglas de "a determinar" sueltas), es VERIFICABLE y CONSISTENTE, la entienden los NO ESPECIALISTAS, es MODIFICABLE, TRAZABLE y ANOTADA. Si te acordás de esos diez, tenés la pregunta.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-7.4-1',
          q: 'Una SRS es completa solo si ninguna sección contiene las siglas que marcan un requerimiento "a determinar".',
          a: true,
          explain: 'Una de las condiciones de completitud es que ninguna sección contenga esas siglas, ya que indican que la descripción del requerimiento no está completa.',
        },
        {
          id: 'tf-7.4-2',
          q: 'Un requerimiento ambiguo igualmente puede ser verificable.',
          a: false,
          explain: 'El apunte es claro: los requisitos ambiguos no son verificables (por ejemplo, \'el sistema debe tener una interfaz amigable\'). Sin un proceso concreto y finito de comprobación, no hay verificabilidad.',
        },
        {
          id: 'tf-7.4-3',
          q: 'No existe una herramienta que pueda garantizar la corrección de una SRS, por lo que se recomienda que el cliente determine si la especificación muestra sus necesidades.',
          a: true,
          explain: 'Eso dice textualmente el atributo Correcto: no hay herramienta que garantice la corrección, y se recomienda que el cliente valide que la especificación refleja sus necesidades.',
        },
        {
          id: 'tf-7.4-4',
          q: 'El atributo "Modificable" generalmente requiere que la documentación tenga una tabla de contenidos y un índice.',
          a: true,
          explain: 'La modificabilidad depende del estilo y la estructura, y generalmente requiere en la documentación una tabla de contenidos y un índice.',
        },
        {
          id: 'tf-7.4-5',
          q: 'En la anotación por necesidad relativa, los requerimientos se catalogan como estable o volátil.',
          a: false,
          explain: 'Estable o volátil corresponde a la estabilidad relativa. La necesidad relativa cataloga los requerimientos como E (esencial), D (deseable) u O (opcional).',
        },
      ],
      mc: [
        {
          id: 'mc-7.4-1',
          q: '¿Qué se recomienda hacer cuando un término tiene múltiples significados en la especificación?',
          options: [
            'Eliminar el término del documento',
            'Incluirlo en un glosario',
            'Marcarlo como "a determinar"',
            'Dejar que el cliente lo interprete',
          ],
          correctIndex: 1,
          explain: 'El atributo No ambigua indica que cada término con múltiples significados debe aparecer en un glosario, justamente porque el lenguaje natural invita a la ambigüedad.',
        },
        {
          id: 'mc-7.4-2',
          q: '¿Cuál de los siguientes NO es uno de los tres tipos de conflictos posibles del atributo Consistente?',
          options: [
            'Términos conflictivos',
            'Características conflictivas',
            'Inconsistencia temporal',
            'Trazabilidad conflictiva',
          ],
          correctIndex: 3,
          explain: 'Los tres tipos de conflictos son términos conflictivos, características conflictivas e inconsistencia temporal. La trazabilidad pertenece a otro atributo (Rastreable o trazable).',
        },
        {
          id: 'mc-7.4-3',
          q: 'Según el atributo Completa, ¿para qué tipo de datos de entrada deben definirse las respuestas del software?',
          options: [
            'Solo para datos de entrada válidos',
            'Solo para datos de entrada inválidos',
            'Tanto para datos válidos como inválidos',
            'Solo para los datos definidos por el cliente',
          ],
          correctIndex: 2,
          explain: 'La completitud exige definir todas las posibles respuestas a todas las posibles entradas, especificando tanto los datos de entrada válidos como los inválidos.',
        },
        {
          id: 'mc-7.4-4',
          q: 'En la anotación por necesidad relativa, ¿qué significan las letras E, D y O?',
          options: [
            'Estable, Dinámico, Obsoleto',
            'Esencial, Deseable, Opcional',
            'Externo, Dependiente, Original',
            'Estricto, Determinado, Obligatorio',
          ],
          correctIndex: 1,
          explain: 'En la necesidad relativa, cada requerimiento se cataloga como E (esencial), D (deseable) u O (opcional).',
        },
      ],
      ms: [
        {
          id: 'ms-7.4-1',
          q: '¿Cuáles de los siguientes son atributos de una buena especificación según el apunte?',
          options: [
            'Correcto',
            'No ambigua',
            'Rentable',
            'Verificable',
            'Anotada',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Correcto, No ambigua, Verificable y Anotada son atributos descriptos. "Rentable" no figura entre los atributos de una buena SRS.',
        },
        {
          id: 'ms-7.4-2',
          q: '¿Cuáles condiciones debe cumplir un documento SRS para ser considerado Completo?',
          options: [
            'Todo lo que el software tiene que hacer está en el SRS',
            'Las respuestas a entradas válidas e inválidas están definidas',
            'Las páginas, figuras y tablas están numeradas y referenciadas',
            'Ninguna sección contiene las siglas de "a determinar"',
            'El documento tiene un índice y una tabla de contenidos',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Las cuatro primeras son las condiciones de completitud. El índice y la tabla de contenidos pertenecen al atributo Modificable, no a Completa.',
        },
        {
          id: 'ms-7.4-3',
          q: '¿Cuáles son los tipos de trazabilidad recomendados en el atributo Rastreable o trazable?',
          options: [
            'Trazabilidad hacia atrás desde los requerimientos',
            'Trazabilidad hacia adelante hasta los requerimientos',
            'Trazabilidad cruzada entre proyectos',
            'Trazabilidad hacia atrás hasta los requerimientos',
            'Trazabilidad hacia adelante desde los requerimientos',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Los cuatro tipos recomendados son hacia atrás desde, hacia adelante hasta, hacia atrás hasta y hacia adelante desde los requerimientos. La "trazabilidad cruzada entre proyectos" no figura en el apunte.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-7.4-1',
        front: 'Correcto',
        back: 'Una SRS es correcta si, y solo si, cada requisito indicado representa algo requerido por el sistema a construirse. No hay herramienta que garantice la corrección, pero se recomienda que el cliente valide que refleja sus necesidades.',
      },
      {
        id: 'fc-7.4-2',
        front: 'No ambigua',
        back: 'Cada requerimiento tiene una única interpretación. Los términos con múltiples significados deben aparecer en un glosario, porque el lenguaje natural invita a la ambigüedad.',
      },
      {
        id: 'fc-7.4-3',
        front: 'Completa',
        back: 'Incluye todo lo que el software hace, las respuestas a entradas válidas e inválidas, las páginas/figuras/tablas numeradas y referenciadas, y ninguna sección con las siglas de "a determinar".',
      },
      {
        id: 'fc-7.4-4',
        front: 'Siglas de "a determinar"',
        back: 'Se incluyen junto a un requerimiento cuando su descripción no está completa. Conviene anotar la causa de lo incompleto, el responsable y una fecha estipulada. Una SRS completa no debe tenerlas.',
      },
      {
        id: 'fc-7.4-5',
        front: 'Verificable',
        back: 'Existe un proceso concreto y finito en el que una persona o máquina puede comprobar si el software cumple el requisito. Los requisitos ambiguos o no mensurables no son verificables.',
      },
      {
        id: 'fc-7.4-6',
        front: 'Consistente',
        back: 'No hay conflictos entre requisitos. Los tres tipos de conflicto son: términos conflictivos, características conflictivas e inconsistencia temporal.',
      },
      {
        id: 'fc-7.4-7',
        front: 'Modificable',
        back: 'Su estilo y estructura permiten incorporar cambios de forma fácil, completa y consistente. Generalmente requiere una tabla de contenidos y un índice.',
      },
      {
        id: 'fc-7.4-8',
        front: 'Rastreable o trazable',
        back: 'El origen de cada requerimiento es claro y facilita su referencia. Incluye trazabilidad hacia atrás y hacia adelante, tanto desde como hasta los requerimientos.',
      },
      {
        id: 'fc-7.4-9',
        front: 'Anotada',
        back: 'Cada requerimiento lleva una anotación que guía el desarrollo. Hay dos tipos: necesidad relativa (E esencial, D deseable, O opcional) y estabilidad relativa (estable o volátil).',
      },
    ],
  },

  // ---------- UNIDAD 7 · SECCIÓN 7.5 ----------
  {
    id: '7.5',
    unit: '7',
    title: 'Gestión y evolución de los requerimientos',
    criollo: 'Acá la idea es que los requerimientos no son una foto fija: hay que revisarlos seguido, que cliente y desarrolladores se hablen, y validar bien porque un error de requerimientos sale caro. Y ojo, que las cosas cambian: si la organización cambia sus objetivos, los requerimientos también, así que el SRS tiene que estar preparado para incorporar cambios sin volverse loco.',
    blocks: [
      {
        type: 'h3',
        text: 'Aspectos de la gestión de requerimientos',
        criollo: 'Revisar seguido y hablar entre todos te ahorra dolores de cabeza después.',
      },
      {
        type: 'p',
        text: 'La <strong>revisión, en forma regular</strong>, de la definición de los requerimientos que se va realizando puede ayudar a su mejor gestión y a la <strong>detección de errores</strong>. En esta tarea van a estar involucrados tanto los <strong>desarrolladores</strong> como el <strong>cliente</strong>.',
      },
      {
        type: 'p',
        text: 'La revisión de la especificación de requerimientos puede realizarse <strong>formalmente</strong>, es decir, cuando se cuenta con la documentación completa, o <strong>informalmente</strong> durante su producción. Mantener una <em>buena comunicación</em> entre todos los involucrados (clientes, usuarios y desarrolladores) puede ayudar a prevenir problemas en las primeras etapas del desarrollo.',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Dos formas de revisar la especificación: formal (con la documentación ya completa) o informal (mientras se la está produciendo).',
      },
      {
        type: 'h3',
        text: 'Validación de los requerimientos',
        criollo: 'Quien valida es el cliente y el usuario, porque son los que saben qué esperan del sistema.',
      },
      {
        type: 'p',
        text: 'La <strong>validación</strong> de los requerimientos la debe realizar el <strong>cliente y los usuarios</strong> para confirmar que coincidan con los definidos para el sistema, en relación a lo que se desea o espera de él.',
      },
      {
        type: 'p',
        text: 'La validación es importante porque los <strong>costos de los errores en los requerimientos son altos</strong>, por lo cual, cuanto antes se detecten, más pronto podrán corregirse. El <em>prototipado</em> es una técnica de gran utilidad al momento de validar los requerimientos.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Pensalo así: un error de requerimientos que se cuela hasta el final te sale carísimo. Si lo cazás temprano, lo arreglás barato. Por eso validar a tiempo no es perder el rato, es ahorrar plata.',
      },
      {
        type: 'h3',
        text: 'Evolución de los requerimientos',
        criollo: 'Los requerimientos cambian con el tiempo, así que el documento tiene que bancarse esos cambios.',
      },
      {
        type: 'p',
        text: 'Los requerimientos buscan <strong>comprender y cubrir las necesidades de los usuarios</strong>, pero, así como los objetivos de la organización pueden ir modificándose, esto puede implicar un <strong>cambio en los requerimientos</strong>.',
      },
      {
        type: 'p',
        text: 'Es importante <strong>planear los posibles cambios o modificaciones</strong> en los requerimientos cuando se desarrolla el sistema, y mientras se lo está utilizando.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/7-evolucion-requerimientos.png',
        alt: 'Línea de tiempo de la evolución de los requerimientos, de izquierda a derecha: "Comprensión inicial del problema" → "Requerimientos iniciales" → "Comprensión de los cambios en el problema" → "Requerimientos cambiados", con un eje "Tiempo" debajo.',
        caption: 'Evolución de los requerimientos a lo largo del tiempo: del entendimiento inicial del problema a los requerimientos cambiados.',
      },
      {
        type: 'p',
        text: 'Todos los posibles cambios en los requerimientos deben <strong>actualizarse en el documento SRS, generando una nueva versión</strong>. Por esta razón, el documento debe ser <strong>organizado</strong> de forma tal que los cambios puedan ser incorporados <em>fácilmente</em>.',
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Si el SRS no está pensado para incorporar cambios, cada modificación se vuelve un parto. Por eso conviene armarlo desde el vamos con una estructura que aguante nuevas versiones.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-7.5-1',
          q: 'La revisión regular de los requerimientos ayuda a su mejor gestión y a la detección de errores.',
          a: true,
          explain: 'El apunte indica que la revisión en forma regular de la definición de los requerimientos ayuda a su mejor gestión y a la detección de errores.',
        },
        {
          id: 'tf-7.5-2',
          q: 'La validación de los requerimientos la deben realizar exclusivamente los desarrolladores.',
          a: false,
          explain: 'Falso: según el apunte, la validación la deben realizar el cliente y los usuarios, para confirmar que los requerimientos coinciden con lo que se desea o espera del sistema.',
        },
        {
          id: 'tf-7.5-3',
          q: 'Los cambios en los requerimientos deben actualizarse en el documento SRS, generando una nueva versión.',
          a: true,
          explain: 'Verdadero: el apunte señala que todos los posibles cambios deben actualizarse en el SRS, generando una nueva versión, y que por eso el documento debe permitir incorporar cambios fácilmente.',
        },
        {
          id: 'tf-7.5-4',
          q: 'La revisión de la especificación de requerimientos solo puede hacerse de manera formal, con la documentación completa.',
          a: false,
          explain: 'Falso: la revisión puede realizarse formalmente (con la documentación completa) o informalmente durante su producción.',
        },
        {
          id: 'tf-7.5-5',
          q: 'Como los costos de los errores en los requerimientos son altos, conviene detectarlos cuanto antes.',
          a: true,
          explain: 'Verdadero: el apunte aclara que la validación es importante porque los costos de los errores son altos y, cuanto antes se detecten, más pronto podrán corregirse.',
        },
      ],
      mc: [
        {
          id: 'mc-7.5-1',
          q: '¿Quiénes deben realizar la validación de los requerimientos según el apunte?',
          options: [
            'Únicamente los desarrolladores del producto',
            'El cliente y los usuarios',
            'Solo el líder de proyecto',
            'Un auditor externo independiente',
          ],
          correctIndex: 1,
          explain: 'El apunte indica que la validación la deben realizar el cliente y los usuarios, para confirmar que los requerimientos coinciden con lo que se espera del sistema.',
        },
        {
          id: 'mc-7.5-2',
          q: '¿Qué técnica menciona el apunte como de gran utilidad al momento de validar los requerimientos?',
          options: [
            'El prototipado',
            'La trazabilidad hacia atrás',
            'El análisis costo/beneficio',
            'La cuantificación dinámica',
          ],
          correctIndex: 0,
          explain: 'El apunte señala explícitamente que el prototipado es una técnica de gran utilidad al momento de validar los requerimientos.',
        },
        {
          id: 'mc-7.5-3',
          q: '¿Por qué razón el documento SRS debe organizarse de forma tal que los cambios puedan incorporarse fácilmente?',
          options: [
            'Porque la IEEE lo exige obligatoriamente',
            'Porque los requerimientos pueden cambiar y cada cambio genera una nueva versión del SRS',
            'Porque reduce los costos del cronograma del proyecto',
            'Porque elimina la necesidad de validar con el cliente',
          ],
          correctIndex: 1,
          explain: 'El apunte explica que, como los objetivos de la organización pueden cambiar, los requerimientos pueden cambiar, y cada cambio se actualiza en el SRS generando una nueva versión; por eso el documento debe permitir incorporar cambios fácilmente.',
        },
        {
          id: 'mc-7.5-4',
          q: '¿Qué ayuda a prevenir problemas en las primeras etapas del desarrollo según el apunte?',
          options: [
            'Aumentar la cantidad de terminales del sistema',
            'Mantener una buena comunicación entre clientes, usuarios y desarrolladores',
            'Eliminar la revisión informal de la especificación',
            'Postergar la validación hasta el final del proyecto',
          ],
          correctIndex: 1,
          explain: 'El apunte indica que mantener una buena comunicación entre todos los involucrados (clientes, usuarios y desarrolladores) puede ayudar a prevenir problemas en las primeras etapas del desarrollo.',
        },
      ],
      ms: [
        {
          id: 'ms-7.5-1',
          q: '¿Cuáles de las siguientes afirmaciones sobre la gestión de requerimientos son correctas según el apunte?',
          options: [
            'En la revisión de los requerimientos están involucrados los desarrolladores y el cliente',
            'La revisión puede ser formal (con documentación completa) o informal (durante su producción)',
            'Una buena comunicación entre los involucrados ayuda a prevenir problemas tempranos',
            'La validación de los requerimientos la realiza únicamente los desarrolladores',
            'La revisión regular ayuda a la mejor gestión y a la detección de errores',
          ],
          correctIndexes: [
            0,
            1,
            2,
            4,
          ],
          explain: 'Todas son fieles al apunte salvo la cuarta: la validación la realizan el cliente y los usuarios, no únicamente los desarrolladores.',
        },
        {
          id: 'ms-7.5-2',
          q: '¿Cuáles de los siguientes enunciados sobre la evolución de los requerimientos son correctos?',
          options: [
            'Los objetivos de la organización pueden modificarse e implicar un cambio en los requerimientos',
            'Conviene planear los posibles cambios durante el desarrollo y mientras se usa el sistema',
            'Los cambios en los requerimientos se actualizan en el SRS generando una nueva versión',
            'El SRS debe organizarse para incorporar cambios fácilmente',
            'Una vez definidos, los requerimientos no pueden volver a cambiar',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Las primeras cuatro son fieles al apunte. La última es falsa: justamente el apunte plantea que los requerimientos pueden cambiar y que el documento debe estar preparado para esos cambios.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-7.5-1',
        front: 'Revisión regular de requerimientos',
        back: 'La revisión periódica de la definición de los requerimientos ayuda a su mejor gestión y a la detección de errores. Participan tanto los desarrolladores como el cliente.',
      },
      {
        id: 'fc-7.5-2',
        front: 'Revisión formal vs. informal',
        back: 'La revisión de la especificación puede ser formal, cuando se cuenta con la documentación completa, o informal, durante su producción.',
      },
      {
        id: 'fc-7.5-3',
        front: 'Validación de requerimientos',
        back: 'La realizan el cliente y los usuarios para confirmar que los requerimientos coinciden con lo que se desea o espera del sistema.',
      },
      {
        id: 'fc-7.5-4',
        front: '¿Por qué validar es clave?',
        back: 'Porque los costos de los errores en los requerimientos son altos; cuanto antes se detectan, más pronto pueden corregirse.',
      },
      {
        id: 'fc-7.5-5',
        front: 'Prototipado',
        back: 'Técnica de gran utilidad al momento de validar los requerimientos.',
      },
      {
        id: 'fc-7.5-6',
        front: 'Evolución de los requerimientos',
        back: 'Como los objetivos de la organización pueden modificarse, los requerimientos pueden cambiar. Hay que planear esos posibles cambios durante el desarrollo y mientras se usa el sistema.',
      },
      {
        id: 'fc-7.5-7',
        front: 'Cambios y versiones del SRS',
        back: 'Todos los cambios en los requerimientos se actualizan en el documento SRS, generando una nueva versión. Por eso el documento debe organizarse para incorporar cambios fácilmente.',
      },
      {
        id: 'fc-7.5-8',
        front: 'Buena comunicación entre involucrados',
        back: 'Mantener una buena comunicación entre clientes, usuarios y desarrolladores ayuda a prevenir problemas en las primeras etapas del desarrollo.',
      },
    ],
  },

  // ---------- SECCIÓN 1 ----------
  {
    id: '1',
    unit: '8',
    title: 'Prototipación de requerimientos y mockups',
    criollo:
      'Un prototipo es la maqueta del sistema: te muestra cómo se ve y cómo se interactúa con él, antes de codear todo. Sirve un montón cuando los requerimientos cambian, cuando el cliente no sabe bien qué quiere, o cuando nadie domina el dominio. El gran problema es que no sabés cuántas vueltas vas a dar hasta cerrarlo.',
    blocks: [
      {
        type: 'h3',
        text: 'Qué es un prototipo',
        criollo:
          'Un modelito que simula las pantallas y la interactividad del sistema final. Lo más parecido posible al producto real, pero todavía es maqueta.',
      },
      {
        type: 'p',
        text:
          'Un prototipo es un modelo o maqueta que muestra las interfaces entre el sistema y el usuario. El prototipo simulará los aspectos más visuales del sistema, es decir, entradas y salidas, los componentes o elementos gráficos participantes, y los conceptos a tratar.',
      },
      {
        type: 'p',
        text:
          'Los prototipos simulan la interactividad del sistema con los usuarios, y dichas interacciones deben desarrollarse con cuidado, buscando la mayor similitud al sistema final.',
      },
      {
        type: 'h3',
        text: 'Pautas para desarrollar un prototipo',
        criollo:
          'Pensá siempre en a quién va dirigido, usá términos que el usuario conozca, sé coherente, agrupá funciones por lógica, mostrá estados y cuidá las acciones destructivas.',
      },
      {
        type: 'ul',
        items: [
          'Se debe terminar a qué usuarios va dirigido el sistema y tratar de que responda a sus necesidades y preferencias.',
          'Es recomendable emplear conceptos, términos y simbología que sean familiares para los usuarios.',
          'Debe mantenerse la coherencia dentro del sistema a desarrollar y, de haberlos, también con los otros sistemas existentes.',
          'Intentar agrupar las funciones de forma lógica.',
          'Mostrar información acerca del estado de la ejecución de las funciones.',
          'Obstaculizar la selección de acciones que puedan ser destructivas de datos o información.',
          'Generar diálogos eficientes.',
        ],
      },
      {
        type: 'h3',
        text: 'Impacto en el ciclo de vida y en los requerimientos',
        criollo:
          'La mayoría de los errores caros vienen de mala comunicación entre usuario y analista. Si te das cuenta tarde, corregir cuesta varias veces más. El prototipo ayuda a bajar esa fricción.',
      },
      {
        type: 'p',
        text:
          'Muchos de los errores detectados en los sistemas provienen de una comunicación deficiente entre el usuario y el analista durante el proceso de obtención de los requisitos. Estos errores se transforman en uno de los tipos más caros de corregir porque se visualizan en forma tardía y pueden multiplicar varias veces lo que hubiera sido el costo inicial de su corrección.',
      },
      {
        type: 'p',
        text:
          'Los problemas más habituales en la comprensión de los requisitos se producen porque se encuentran incompletos en su definición, presentan ambigüedades o son inconsistentes entre ellos y, por lo tanto, incorrectos, ya que no definen las reales necesidades de los usuarios.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'La confección de un prototipo es <strong>especialmente útil</strong> cuando los requerimientos van cambiando rápidamente, cuando el cliente está poco abierto a entregar una lista completa de requerimientos, o si ni el cliente ni nosotros conocemos bien el área de aplicación.',
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'La principal desventaja del prototipo: desde el comienzo es imposible saber cuánto tiempo tomará lograr un producto aceptable para el cliente. En el ida y vuelta no sabés cuántas iteraciones harán falta.',
      },
      {
        type: 'h3',
        text: 'Beneficios del prototipado (Gordon y Bieman, 1995)',
        criollo:
          'En un estudio sobre 39 proyectos de prototipado, midieron las ventajas concretas. Spoiler: hay menos esfuerzo de desarrollo, mejor calidad y más coherencia con lo que el usuario realmente necesita.',
      },
      {
        type: 'p',
        text:
          'En un estudio realizado por Gordon y Bieman en el año 1995, y publicado en <em>Rapid prototyping: lesson learned</em> (IEEE Software), realizado sobre la base del estudio de 39 proyectos de prototipado, determinaron que los beneficios del uso de estos fueron:',
      },
      {
        type: 'ul',
        items: [
          'Perfeccionamiento en la usabilidad del nuevo sistema.',
          'Mayor coherencia entre las necesidades de los usuarios y el sistema.',
          'Un diseño de mejor calidad.',
          'Mejorar el proceso de mantenimiento.',
          'Disminución del esfuerzo requerido en el desarrollo.',
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'La forma de evitar problemas a posteriori se basa en una buena gestión del proceso de requerimientos. El prototipo es una herramienta más de esa gestión, no la solución mágica.',
      },
      {
        type: 'h3',
        text: 'Diseño centrado en el usuario',
        criollo:
          'Arrancás por lo más visible del sistema, trabajás codo a codo con los usuarios y conseguís feedback temprano para acordar los requerimientos antes de codear de verdad.',
      },
      {
        type: 'p',
        text:
          'Al iniciar el proceso de determinación de requerimientos, primero se tiende a revisar los aspectos más visibles del sistema y se trabaja con los usuarios. Por esta razón, es muy importante su colaboración durante el desarrollo. Aquí es donde se determina lo que el cliente verá y las interacciones que tendrá con el sistema; será la herramienta que nos permita obtener un feedback para acordar cuáles son los requerimientos y cómo tratarlos.',
      },
      {
        type: 'h3',
        text: 'Prototipo de pantalla (mockup)',
        criollo:
          'El mockup es la versión estática del prototipo: una representación visual que muestra estructura, contenidos y funciones disponibles, pero sin la interacción real. Sirve para validar el diseño con el equipo y con el cliente.',
      },
      {
        type: 'p',
        text:
          'Un <strong>mockup</strong> es una representación visual, pero estática, de un diseño. Son habituales en la realización de diseños web para permitirle a los miembros del equipo de desarrollo tener una idea más clara de cómo se verá el sitio web, mostrando tanto texto como imágenes e íconos.',
      },
      {
        type: 'p',
        text:
          'Este prototipo de pantallas representa, de una forma estática, cómo se estructura la información, cómo se visualizan los contenidos y muestra las funciones básicas que estarán disponibles. Por ejemplo, si quisiera mostrar qué incluirá un elemento como un video, lo que se hará es representarlo con una imagen y un icono de reproducción, por este carácter estático que indicamos que emplea.',
      },
      {
        type: 'p',
        text:
          'De todos modos, debemos destacar que no dejan de ser una herramienta útil para permitirles a los miembros del equipo visualizar el diseño a llevar a cabo, y también para poder emplearlos en la búsqueda de feedback, o comentarios, en las posibles revisiones que se desarrollen con la participación del cliente o usuarios.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-1-1',
          q: 'Un prototipo simula las entradas y salidas y la interactividad del sistema con el usuario.',
          a: true,
          explain:
            'Verdadero. El apunte lo define así: muestra interfaces entre sistema y usuario y simula la interactividad lo más parecido posible al sistema final.',
        },
        {
          id: 'tf-1-2',
          q: 'La principal ventaja del prototipo es que permite saber desde el comienzo cuánto tiempo tomará lograr un producto aceptable.',
          a: false,
          explain:
            'Falso. Justamente esa es la principal desventaja: en el ida y vuelta hasta acordar con el cliente no sabés cuántas iteraciones harán falta.',
        },
        {
          id: 'tf-1-3',
          q: 'Un mockup es una representación visual estática del diseño.',
          a: true,
          explain:
            'Verdadero. El mockup muestra estructura, contenidos y funciones, pero no incorpora la interactividad real — eso lo hace el prototipo funcional.',
        },
        {
          id: 'tf-1-4',
          q: 'Según Gordon y Bieman (1995), el prototipado tiende a aumentar el esfuerzo requerido en el desarrollo.',
          a: false,
          explain:
            'Falso. Entre los beneficios listados está justamente la <strong>disminución</strong> del esfuerzo requerido en el desarrollo.',
        },
        {
          id: 'tf-1-5',
          q: 'Los errores de comunicación entre usuario y analista son de los más caros de corregir porque se detectan tarde.',
          a: true,
          explain:
            'Verdadero. El apunte aclara que se visualizan en forma tardía y pueden multiplicar varias veces el costo inicial de corrección.',
        },
      ],
      mc: [
        {
          id: 'mc-1-1',
          q: '¿En cuál de estos escenarios el prototipo es ESPECIALMENTE útil según el apunte?',
          options: [
            'Cuando los requerimientos están perfectamente cerrados y firmados',
            'Cuando los requerimientos cambian rápido o nadie domina bien el área',
            'Cuando el sistema no tiene interfaz visual',
            'Cuando el cliente ya entregó una lista completa de requerimientos',
          ],
          correctIndex: 1,
          explain:
            'El apunte indica que el prototipo es esencial cuando los requerimientos van cambiando rápidamente, cuando el cliente no entrega una lista completa o cuando ni cliente ni equipo conocen bien el área de aplicación.',
        },
        {
          id: 'mc-1-2',
          q: '¿Cuál de estas NO es una pauta para desarrollar prototipos según el apunte?',
          options: [
            'Emplear términos familiares para los usuarios',
            'Obstaculizar acciones destructivas de datos',
            'Mostrar el estado de la ejecución de las funciones',
            'Maximizar la cantidad de diálogos para ofrecer más control',
          ],
          correctIndex: 3,
          explain:
            'El apunte pide <em>generar diálogos eficientes</em>, no maximizar cantidad. Las otras tres están textualmente en la lista de pautas.',
        },
        {
          id: 'mc-1-3',
          q: '¿Cuál es la diferencia clave entre un mockup y un prototipo funcional?',
          options: [
            'El mockup es interactivo, el prototipo es estático',
            'El mockup es estático y muestra estructura y contenidos, sin simular interactividad real',
            'El mockup solo se usa para sistemas embebidos',
            'No hay diferencia, son sinónimos',
          ],
          correctIndex: 1,
          explain:
            'El mockup es una representación <strong>estática</strong> que muestra cómo se estructura la información y las funciones básicas, pero no simula la interacción como sí lo hace un prototipo funcional.',
        },
      ],
      ms: [
        {
          id: 'ms-1-1',
          q: '¿Cuáles de las siguientes son pautas para desarrollar un prototipo según el apunte?',
          options: [
            'Emplear términos familiares para los usuarios',
            'Mantener la coherencia con otros sistemas existentes',
            'Agrupar las funciones de forma lógica',
            'Maximizar la cantidad de diálogos para ofrecer más control al usuario',
            'Obstaculizar la selección de acciones destructivas de datos',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'El apunte pide <em>generar diálogos eficientes</em>, no maximizar cantidad. Las otras cuatro están textualmente en la lista de pautas.',
        },
        {
          id: 'ms-1-2',
          q: 'Según Gordon y Bieman (1995), ¿cuáles fueron beneficios del uso de prototipado?',
          options: [
            'Perfeccionamiento en la usabilidad del nuevo sistema',
            'Mayor coherencia entre las necesidades de los usuarios y el sistema',
            'Eliminación total de los errores en producción',
            'Mejorar el proceso de mantenimiento',
            'Disminución del esfuerzo requerido en el desarrollo',
          ],
          correctIndexes: [0, 1, 3, 4],
          explain:
            'Los cuatro beneficios mencionados están en la lista del estudio. El prototipado no "elimina" errores — los baja, pero no totalmente. El quinto beneficio del estudio (no listado aquí) es el diseño de mejor calidad.',
        },
        {
          id: 'ms-1-3',
          q: '¿En cuáles de estos escenarios el apunte indica que el prototipo es ESPECIALMENTE útil?',
          options: [
            'Cuando los requerimientos están perfectamente cerrados y firmados',
            'Cuando los requerimientos van cambiando rápidamente',
            'Cuando el cliente está poco abierto a entregar una lista completa de requerimientos',
            'Cuando ni el cliente ni nosotros conocemos bien el área de aplicación',
            'Cuando el sistema no tiene interfaz visual',
          ],
          correctIndexes: [1, 2, 3],
          explain:
            'El apunte lista exactamente esas tres situaciones. Un sistema sin interfaz visual ni un set de requerimientos cerrados son justamente los escenarios donde el prototipo aporta menos.',
        },
        {
          id: 'ms-1-4',
          q: '¿Cuáles de estas afirmaciones sobre el mockup son correctas según el apunte?',
          options: [
            'Es una representación visual estática de un diseño',
            'Simula la interactividad real del sistema con el usuario',
            'Muestra estructura, contenidos y funciones básicas que estarán disponibles',
            'Es útil para que el equipo y el cliente visualicen el diseño y den feedback',
            'Reemplaza por completo al prototipo funcional',
          ],
          correctIndexes: [0, 2, 3],
          explain:
            'El mockup es estático: no simula interactividad real (esa es la diferencia con el prototipo funcional) y no lo reemplaza — es una herramienta complementaria.',
        },
        {
          id: 'ms-1-5',
          q: 'Según el apunte, ¿cuáles de estas afirmaciones describen correctamente los <strong>problemas habituales en la comprensión de los requerimientos</strong>?',
          options: [
            'Los requerimientos pueden estar incompletos en su definición',
            'Los requerimientos pueden presentar ambigüedades',
            'Los requerimientos son siempre inconsistentes entre sí pero correctos en su totalidad',
            'Los requerimientos incorrectos no definen las reales necesidades de los usuarios',
            'Los problemas de comprensión se deben exclusivamente a errores del analista, no del usuario',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'El apunte enumera tres problemas: requerimientos <em>incompletos</em>, con <em>ambigüedades</em> o <em>inconsistentes entre ellos</em>, y aclara que por eso son \'incorrectos, ya que no definen las reales necesidades de los usuarios\'. La opción 2 invierte la relación: la inconsistencia hace que sean <strong>incorrectos</strong>, no correctos. La opción 4 atribuye la culpa solo al analista, pero el apunte habla de \'comunicación deficiente entre el usuario y el analista\', es decir, ambas partes.',
        },
        {
          id: 'ms-1-6',
          q: '¿Cuáles de las siguientes son características de lo que simula o muestra un prototipo, según la definición del apunte?',
          options: [
            'Las interfaces entre el sistema y el usuario',
            'Los aspectos más visuales del sistema (entradas y salidas)',
            'El código fuente y la arquitectura interna del sistema',
            'Los componentes o elementos gráficos participantes',
            'Los conceptos a tratar en el sistema',
          ],
          correctIndexes: [0, 1, 3, 4],
          explain:
            'El apunte define el prototipo como un modelo que \'muestra las interfaces entre el sistema y el usuario\', que \'simulará los aspectos más visuales, es decir, entradas y salidas, los componentes o elementos gráficos participantes, y los conceptos a tratar\'. El código fuente y la arquitectura interna no están mencionados como parte de lo que simula un prototipo — justamente, el prototipo es una <em>maqueta</em>, no la implementación real.',
        },
        {
          id: 'ms-1-7',
          q: 'Sobre los errores que provienen de la comunicación deficiente entre usuario y analista, ¿cuáles de estas afirmaciones son correctas según el apunte?',
          options: [
            'Son de los tipos más caros de corregir',
            'Se visualizan en forma tardía',
            'Su costo de corrección es siempre idéntico al costo que hubiera tenido corregirlos desde el inicio',
            'Pueden multiplicar varias veces lo que hubiera sido el costo inicial de corrección',
            'Una buena gestión del proceso de requerimientos es la forma de evitar estos problemas a posteriori',
          ],
          correctIndexes: [0, 1, 3, 4],
          explain:
            'El apunte afirma que estos errores \'se transforman en uno de los tipos más caros de corregir porque se visualizan en forma tardía y pueden multiplicar varias veces lo que hubiera sido el costo inicial de su corrección\'. Además, el callout criollo dice que \'la forma de evitar problemas a posteriori se basa en una buena gestión del proceso de requerimientos\'. La opción 2 es falsa: el costo <strong>se multiplica</strong>, no es idéntico al costo inicial.',
        },
        {
          id: 'ms-1-8',
          q: '¿Cuáles de estas afirmaciones son correctas sobre el estudio de <strong>Gordon y Bieman (1995)</strong> según el apunte?',
          options: [
            'Fue publicado en la revista IEEE Software',
            'Se basó en el estudio de 39 proyectos de prototipado',
            'El título de la publicación es «Rapid prototyping: lesson learned»',
            'Determinó que el prototipado aumenta el esfuerzo requerido en el desarrollo',
            'Identificó la mejora del proceso de mantenimiento como uno de los beneficios',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'El apunte cita textualmente: publicado en <em>Rapid prototyping: lesson learned</em> (IEEE Software), sobre 39 proyectos. Entre los beneficios figura \'mejorar el proceso de mantenimiento\'. La opción 3 es falsa: uno de los beneficios es precisamente la <strong>disminución</strong> del esfuerzo requerido en el desarrollo, no su aumento.',
        },
        {
          id: 'ms-1-9',
          q: 'Sobre el <strong>diseño centrado en el usuario</strong> en el proceso de determinación de requerimientos, ¿cuáles de estas afirmaciones son correctas según el apunte?',
          options: [
            'Al iniciar el proceso se tiende a revisar primero los aspectos más visibles del sistema',
            'La colaboración de los usuarios durante el desarrollo es muy importante',
            'El diseño centrado en el usuario permite prescindir del feedback del cliente una vez iniciado el proyecto',
            'El prototipo es la herramienta que permite obtener un feedback para acordar cuáles son los requerimientos',
            'En esta etapa se determina lo que el cliente verá y las interacciones que tendrá con el sistema',
          ],
          correctIndexes: [0, 1, 3, 4],
          explain:
            'El apunte dice que \'primero se tiende a revisar los aspectos más visibles del sistema y se trabaja con los usuarios\', que \'es muy importante su colaboración durante el desarrollo\', y que el prototipo \'será la herramienta que nos permita obtener un feedback para acordar cuáles son los requerimientos y cómo tratarlos\' y que se determina \'lo que el cliente verá y las interacciones que tendrá con el sistema\'. La opción 2 contradice al apunte: el feedback del cliente es justamente el motor del proceso, no algo de lo que se pueda prescindir.',
        },
        {
          id: 'ms-1-10',
          q: '¿Cuáles de estas afirmaciones sobre la <strong>relación entre el prototipo, el mockup y los requerimientos</strong> son correctas según el apunte?',
          options: [
            'El prototipo es una herramienta de gestión de requerimientos, no una solución mágica por sí sola',
            'Un mockup puede emplearse para buscar feedback en revisiones con participación del cliente o usuarios',
            'El mockup reemplaza al prototipo funcional cuando el proyecto es de alta complejidad',
            'Las interacciones del prototipo con los usuarios deben desarrollarse buscando la mayor similitud al sistema final',
            'El mockup representa de forma estática cómo se estructura la información y cómo se visualizan los contenidos',
          ],
          correctIndexes: [0, 1, 3, 4],
          explain:
            'El apunte afirma que el prototipo \'es una herramienta más de esa gestión, no la solución mágica\'; que los mockups sirven \'para la búsqueda de feedback en las posibles revisiones con participación del cliente o usuarios\'; que las interacciones del prototipo \'deben desarrollarse con cuidado, buscando la mayor similitud al sistema final\'; y que el mockup \'representa de una forma estática cómo se estructura la información y cómo se visualizan los contenidos\'. La opción 2 no tiene sustento en el apunte: el mockup es una herramienta <em>complementaria</em> y no reemplaza al prototipo funcional.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-1-1',
        front: 'Prototipo',
        back:
          'Modelo o maqueta que muestra las interfaces entre el sistema y el usuario. Simula los aspectos visuales (entradas, salidas, componentes gráficos) y la interactividad.',
      },
      {
        id: 'fc-1-2',
        front: 'Mockup',
        back:
          'Representación visual estática de un diseño. Muestra estructura de información, contenidos y funciones básicas, pero sin interactividad real.',
      },
      {
        id: 'fc-1-3',
        front: 'Principal desventaja del prototipo',
        back:
          'Desde el comienzo no se puede saber cuánto tiempo tomará lograr un producto aceptable para el cliente — no se conoce cuántas iteraciones serán necesarias.',
      },
      {
        id: 'fc-1-4',
        front: 'Por qué los errores de requerimientos son caros',
        back:
          'Porque se visualizan en forma tardía. Su corrección puede multiplicar varias veces lo que hubiera sido el costo inicial.',
      },
      {
        id: 'fc-1-5',
        front: 'Beneficios del prototipado (Gordon y Bieman, 1995)',
        back:
          'Mejor usabilidad, mayor coherencia entre necesidades y sistema, mejor calidad de diseño, mejor mantenimiento y disminución del esfuerzo de desarrollo.',
      },
      {
        id: 'fc-1-6',
        front: 'Diseño centrado en el usuario',
        back:
          'Estrategia que arranca el proceso de requerimientos por los aspectos más visibles del sistema, trabajando con los usuarios para obtener feedback temprano y acordar los requerimientos.',
      },
    ],
  },

  // ---------- SECCIÓN 2 ----------
  {
    id: '2',
    unit: '8',
    title: 'Casos de uso y actores',
    criollo:
      'Un caso de uso es una manera de describir qué cosas hace el sistema cuando alguien (un actor) interactúa con él. Lo inventó Ivar Jacobson en 1987 y hoy es parte de UML. Lo importante es que deja clarito tanto lo que el sistema hará como lo que no hará.',
    blocks: [
      {
        type: 'h3',
        text: 'Origen y para qué sirven',
        criollo:
          'Jacobson los presentó en el 87 con OOSE y de ahí saltaron a UML. La gracia es estudiar las interacciones entre el sistema y su entorno y dejar bien delimitado el alcance.',
      },
      {
        type: 'p',
        text:
          'Los casos de uso se emplean para conducir el desarrollo de sistemas de software y han resultado una herramienta extraordinariamente útil en el proceso de definición de requerimientos.',
      },
      {
        type: 'p',
        text:
          'Desde su presentación inicial en el año 1987 por Ivar Jacobson, con su método <strong>OOSE</strong> (Object Oriented Software Engineering) para el modelado y desarrollo de sistemas orientados a objetos, se fue convirtiendo, con los años, en la base de muchos métodos diferentes y es uno de los diagramas incluidos en <strong>UML</strong> (Lenguaje Unificado de Modelado).',
      },
      {
        type: 'p',
        text:
          'La idea de esta herramienta es el estudio de las interacciones entre el sistema y su entorno. Los casos de uso permiten dejar bien claro qué es lo hará un sistema y, por omisión intencional, también lo que no hará.',
      },
      {
        type: 'h3',
        text: 'Definición formal (Jacobson, Rumbaugh y Booch)',
        criollo:
          'La definición canónica: secuencias de acciones que ejecuta el sistema para entregarle algo de valor a un actor.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          '<em>Un caso de uso es una descripción de un conjunto de secuencias de acciones incluyendo variantes, que ejecuta un sistema para producir un resultado observable de valor para un actor.</em> — Jacobson, Rumbaugh y Booch, <em>El lenguaje unificado de modelado</em>, p. 193.',
      },
      {
        type: 'p',
        text:
          'Así, un caso de uso representa un conjunto de situaciones o escenarios típicos que ayudan a poder estructurar, relacionar y también comprender los requerimientos esenciales del sistema que se modela.',
      },
      {
        type: 'h3',
        text: 'Representación gráfica y nombre',
        criollo:
          'En el diagrama, el caso de uso es una elipse con un nombre adentro. El nombre se escribe desde el punto de vista de quien lo realiza: verbo en infinitivo + objeto principal (ej.: "Registrar préstamo").',
      },
      {
        type: 'p',
        text:
          'Veamos un ejemplo: si pensamos en una biblioteca que presta libros a sus socios, un caso de uso seguramente será <strong>registrar el préstamo del libro</strong>. Gráficamente, el caso de uso se representará como una <strong>elipse</strong> y en su interior estará el nombre asignado al caso, que se expresa desde el punto de vista de quien lo utiliza/realiza. Comienza con verbo en infinitivo, seguido del principal objeto o entidad del sistema, afectado por el caso de uso.',
      },
      {
        type: 'h3',
        text: 'Actores: qué son y cómo se representan',
        criollo:
          'Un actor no es siempre una persona — puede ser un sistema, una organización o una unidad. Si es persona, no se pone el nombre sino el rol (porque la misma persona puede entrar con roles distintos). En el diagrama, el actor es el muñeco de palo.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          '<em>Un actor representa un conjunto coherente de roles que juegan los usuarios de los casos de uso al interactuar con estos. Los actores pueden ser personas o pueden ser sistemas mecánicos.</em> — Jacobson, Rumbaugh y Booch, p. 192.',
      },
      {
        type: 'p',
        text:
          'Un actor es alguien o algo que interactúa con el sistema. Los actores pueden ser organizaciones, unidades o personas, que es la situación normal cuando se está modelando aplicaciones típicas de sistemas de información para pymes, por ejemplo. Pero también podrían ser otros sistemas o aplicaciones.',
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'Si el actor es una persona, <strong>nunca</strong> colocamos en el modelo su nombre, sino el rol que representa, porque la misma persona puede interactuar con el sistema desde roles diferentes. Ejemplo del apunte: el bibliotecario registra entrada/salida desde el rol "empleado", pero si carga libros nuevos lo hace desde su rol de "bibliotecario", que es el que tiene el permiso.',
      },
      {
        type: 'h3',
        text: 'Preguntas para identificar actores',
        criollo:
          'Si no sabés quiénes son los actores, hacéte estas preguntas y vas a encontrarlos.',
      },
      {
        type: 'ul',
        items: [
          '¿Quién usa el sistema?',
          '¿Quién necesita que el sistema le brinde información?',
          '¿Quién provee al sistema de información?',
          '¿Qué otros sistemas interactúan o utilizan el sistema?',
          '¿Quién instala, prepara y mantiene el sistema?',
        ],
      },
      {
        type: 'h3',
        text: 'Actor primario y actor secundario',
        criollo:
          'El primario es el que arranca el caso de uso para conseguir su objetivo. El secundario es alguien al que el sistema le notifica o le manda info como resultado, pero que no inició el caso.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Actor primario</strong>: inicia el caso de uso y lo utiliza para lograr un objetivo.',
          '<strong>Actor secundario</strong>: es requerido (usado) por el caso de uso. Se emplea cuando, por ejemplo, como resultado de la ejecución del caso de uso, se requiere notificarlo o enviarle información a otro actor que no fue quien inició el caso.',
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'Cada caso de uso puede ser iniciado únicamente por <strong>UN</strong> actor. Si más de un actor puede iniciar un mismo caso, debe resolverse mediante una <strong>relación de herencia entre actores</strong>.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-2-1',
          q: 'Los casos de uso fueron presentados por Ivar Jacobson en 1987 con el método OOSE.',
          a: true,
          explain:
            'Verdadero. Después se convirtieron en uno de los diagramas estándar de UML.',
        },
        {
          id: 'tf-2-2',
          q: 'Un caso de uso puede ser iniciado por varios actores al mismo tiempo sin ningún mecanismo especial.',
          a: false,
          explain:
            'Falso. Cada caso de uso puede ser iniciado únicamente por UN actor; si hay más, hay que usar herencia entre actores.',
        },
        {
          id: 'tf-2-3',
          q: 'Un actor siempre es una persona física.',
          a: false,
          explain:
            'Falso. Un actor puede ser una persona, una organización, una unidad o incluso otro sistema o aplicación.',
        },
        {
          id: 'tf-2-4',
          q: 'En el modelo, si el actor es una persona, se coloca el nombre de la persona y no el rol.',
          a: false,
          explain:
            'Falso. Es exactamente al revés: nunca se coloca el nombre, siempre el rol — porque la misma persona puede interactuar con el sistema desde roles diferentes.',
        },
        {
          id: 'tf-2-5',
          q: 'Un actor secundario es aquel que inicia el caso de uso para lograr un objetivo.',
          a: false,
          explain:
            'Falso. El que inicia es el actor primario. El secundario es requerido por el caso de uso (por ejemplo, recibe una notificación), pero no lo inicia.',
        },
      ],
      mc: [
        {
          id: 'mc-2-1',
          q: 'Según Jacobson, Rumbaugh y Booch, ¿qué describe un caso de uso?',
          options: [
            'El código fuente del sistema',
            'La arquitectura interna de las clases',
            'Un conjunto de secuencias de acciones del sistema que produce un resultado observable de valor para un actor',
            'Las tablas de la base de datos',
          ],
          correctIndex: 2,
          explain:
            'Esa es la definición textual del apunte (p. 193 de El lenguaje unificado de modelado).',
        },
        {
          id: 'mc-2-2',
          q: 'Gráficamente, ¿cómo se representa un caso de uso en UML?',
          options: [
            'Como un rectángulo con bordes redondeados',
            'Como una elipse con el nombre adentro',
            'Como un rombo',
            'Como un círculo dividido',
          ],
          correctIndex: 1,
          explain:
            'El caso de uso se representa como una elipse, con el nombre asignado (verbo en infinitivo + objeto) escrito en su interior.',
        },
        {
          id: 'mc-2-3',
          q: '¿Cómo se debe escribir el nombre de un caso de uso?',
          options: [
            'Solo con un sustantivo (el objeto)',
            'Con el nombre del actor que lo inicia',
            'Comenzando con verbo en infinitivo seguido del principal objeto o entidad afectado',
            'Con un código numérico que indica orden de ejecución',
          ],
          correctIndex: 2,
          explain:
            'Ejemplo del apunte: <em>Registrar préstamo</em>. Verbo en infinitivo + entidad principal afectada.',
        },
        {
          id: 'mc-2-4',
          q: 'Cuando más de un actor podría iniciar el mismo caso de uso, ¿cómo se resuelve?',
          options: [
            'Se duplica el caso de uso para cada actor',
            'Se ignora la situación y se elige un actor cualquiera',
            'Se emplea una relación de herencia entre actores',
            'Se convierte el caso de uso en una historia de usuario',
          ],
          correctIndex: 2,
          explain:
            'El apunte indica explícitamente: usar una relación de herencia entre actores. Cada caso de uso puede iniciarse por UN único actor.',
        },
      ],
      ms: [
        {
          id: 'ms-2-1',
          q: '¿Qué cosas pueden ser un actor según el apunte?',
          options: [
            'Una persona',
            'Una organización',
            'Una unidad dentro de una organización',
            'Otro sistema o aplicación',
            'Una tabla de la base de datos del propio sistema',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Un actor puede ser persona, organización, unidad o sistema externo. Una tabla del sistema no es un actor — es estructura interna, no entorno.',
        },
        {
          id: 'ms-2-2',
          q: '¿Cuáles de estas preguntas sirven para identificar actores según el apunte?',
          options: [
            '¿Quién usa el sistema?',
            '¿Quién necesita que el sistema le brinde información?',
            '¿Quién provee al sistema de información?',
            '¿Qué otros sistemas interactúan o utilizan el sistema?',
            '¿Cuántas líneas de código tendrá el sistema?',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro están textuales en la lista del apunte (también está "¿Quién instala, prepara y mantiene el sistema?"). La cantidad de código no tiene nada que ver con identificar actores.',
        },
        {
          id: 'ms-2-3',
          q: '¿Cuáles de estas afirmaciones sobre actores y casos de uso son correctas?',
          options: [
            'Si el actor es una persona, se modela el rol y no el nombre',
            'Un actor representa un conjunto coherente de roles',
            'Un actor primario inicia el caso de uso para lograr un objetivo',
            'Un actor secundario es requerido por el caso (por ejemplo, para notificarlo) pero no lo inicia',
            'Un caso de uso puede ser iniciado por varios actores sin ningún mecanismo especial',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. La última es falsa: cada caso de uso puede ser iniciado por UN único actor; si hay más, se usa herencia entre actores.',
        },
        {
          id: 'ms-2-4',
          q: 'Sobre el nombre y representación gráfica del caso de uso, ¿qué es correcto?',
          options: [
            'Se representa con una elipse con el nombre adentro',
            'El nombre comienza con verbo en infinitivo',
            'El nombre va seguido del principal objeto o entidad afectado',
            'El nombre se expresa desde el punto de vista de quien lo realiza',
            'El nombre debe ser un código numérico que indique el orden de ejecución',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Ejemplo del apunte: <em>Registrar préstamo</em>. La elipse con verbo + entidad, desde el punto de vista de quien la realiza. No se usan códigos numéricos para nombrarlos.',
        },
        {
          id: 'ms-2-5',
          q: '¿Cuáles de estas afirmaciones sobre el <strong>origen y propósito</strong> de los casos de uso son correctas según el apunte?',
          options: [
            'Fueron presentados por Jacobson en 1987 con el método OOSE',
            'Se emplean para conducir el desarrollo de sistemas de software',
            'Son parte de los diagramas incluidos en UML',
            'Su idea central es estudiar las interacciones entre el sistema y su entorno',
            'Fueron creados originalmente para modelar bases de datos relacionales',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son afirmaciones textuales o directamente inferibles del apunte: Jacobson los presentó en 1987 con OOSE, se usan para conducir el desarrollo, son parte de UML, y su idea es estudiar interacciones con el entorno. La última es falsa: el apunte no dice nada de bases de datos relacionales — OOSE es para modelado orientado a objetos, no para modelado de datos.',
        },
        {
          id: 'ms-2-6',
          q: 'Según la definición canónica de Jacobson, Rumbaugh y Booch, ¿qué elementos están explícitamente presentes en la descripción de un caso de uso?',
          options: [
            'Un conjunto de secuencias de acciones',
            'Variantes de esas secuencias',
            'La ejecución de esas acciones por el sistema',
            'Un resultado observable de valor para un actor',
            'La descripción del algoritmo interno que implementa el sistema',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'La cita textual del apunte dice: \'descripción de un conjunto de secuencias de acciones <em>incluyendo variantes</em>, que ejecuta un sistema para producir un resultado observable de valor para un actor\'. Los cuatro primeros están presentes literalmente. El quinto es un distractor plausible pero incorrecto: la definición no menciona ni implica la descripción del algoritmo interno — los casos de uso modelan comportamiento externo observable, no implementación.',
        },
        {
          id: 'ms-2-7',
          q: 'Sobre la distinción entre <strong>actor primario</strong> y <strong>actor secundario</strong>, ¿cuáles afirmaciones son correctas según el apunte?',
          options: [
            'El actor primario inicia el caso de uso',
            'El actor primario lo utiliza para lograr un objetivo',
            'El actor secundario no inicia el caso de uso',
            'El actor secundario puede ser notificado o recibir información como resultado del caso',
            'El actor secundario también puede iniciar el mismo caso de uso en paralelo al primario',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'El apunte define al actor primario como el que \'inicia el caso de uso y lo utiliza para lograr un objetivo\' (opciones 0 y 1). Al secundario lo define como aquel que \'es requerido por el caso de uso\' y al que se puede \'notificar o enviarle información\' sin que lo haya iniciado (opciones 2 y 3). La última es falsa: el apunte es explícito en que cada caso puede ser iniciado por UN único actor; el secundario no lo inicia.',
        },
        {
          id: 'ms-2-8',
          q: 'Considerá la siguiente situación: <em>«La misma persona, según la tarea que realice, puede registrar entrada/salida de libros (como empleado) o cargar libros nuevos al catálogo (como bibliotecario).»</em> ¿Qué afirmaciones del apunte aplican directamente a este caso?',
          options: [
            'Si el actor es una persona, nunca se coloca su nombre en el modelo',
            'Se coloca en el modelo el rol que la persona representa',
            'La misma persona puede interactuar con el sistema desde roles diferentes',
            'Cada uno de esos roles es un actor distinto en el modelo',
            'Para unificarlos basta con crear un único caso de uso que agrupe ambas tareas',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'El apunte dice textualmente: \'nunca colocamos el nombre, sino el rol que representa, porque la misma persona puede interactuar con el sistema desde roles diferentes\'. El ejemplo del apunte es exactamente el del bibliotecario/empleado (opciones 0, 1, 2 y 3 se deducen directamente). La última opción es falsa: el apunte no propone agrupar tareas distintas en un solo caso de uso — de hecho, \'registrar entrada/salida\' y \'cargar libros nuevos\' son casos de uso separados con actores distintos.',
        },
        {
          id: 'ms-2-9',
          q: '¿Cuáles de estas preguntas están listadas <strong>textualmente</strong> en el apunte como herramientas para identificar actores?',
          options: [
            '¿Quién instala, prepara y mantiene el sistema?',
            '¿Quién provee al sistema de información?',
            '¿Qué otros sistemas interactúan o utilizan el sistema?',
            '¿Cuántos usuarios concurrentes soportará el sistema?',
            '¿Quién necesita que el sistema le brinde información?',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'El apunte lista exactamente cinco preguntas para identificar actores: \'¿Quién usa el sistema?\', \'¿Quién necesita que el sistema le brinde información?\', \'¿Quién provee al sistema de información?\', \'¿Qué otros sistemas interactúan o utilizan el sistema?\' y \'¿Quién instala, prepara y mantiene el sistema?\'. Las opciones 0, 1, 2 y 4 están en esa lista. La opción 3 (\'¿Cuántos usuarios concurrentes?\') es un requerimiento no funcional de rendimiento, no una pregunta para identificar actores.',
        },
        {
          id: 'ms-2-10',
          q: '¿Cuáles de estas afirmaciones sintetizan correctamente <strong>varias ideas</strong> de la sección sobre casos de uso y actores?',
          options: [
            'Un caso de uso deja claro tanto lo que el sistema hará como, por omisión intencional, lo que no hará',
            'Un actor representa un conjunto coherente de roles y puede ser una persona, sistema u organización',
            'El nombre del caso de uso se expresa desde el punto de vista del actor que lo realiza, con verbo en infinitivo',
            'Si más de un actor puede iniciar un caso de uso, se resuelve con herencia entre actores',
            'Los casos de uso reemplazan a UML como método de modelado independiente',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Opción 0: el apunte dice explícitamente que los casos de uso dejan claro \'qué hará el sistema y, por omisión intencional, también lo que no hará\'. Opción 1: la cita de Jacobson/Rumbaugh/Booch define al actor como \'conjunto coherente de roles\' y el texto enumera personas, sistemas y organizaciones. Opción 2: el apunte indica que el nombre va \'desde el punto de vista de quien lo realiza\' con \'verbo en infinitivo + entidad\'. Opción 3: el apunte lo dice textualmente en el callout sobre herencia. La opción 4 es falsa: los casos de uso son parte de UML, no lo reemplazan — el propio apunte lo aclara.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-2-1',
        front: 'Caso de uso (definición)',
        back:
          'Descripción de un conjunto de secuencias de acciones, incluyendo variantes, que ejecuta un sistema para producir un resultado observable de valor para un actor (Jacobson, Rumbaugh, Booch).',
      },
      {
        id: 'fc-2-2',
        front: 'OOSE',
        back:
          'Object Oriented Software Engineering — método de Ivar Jacobson (1987) que introdujo los casos de uso. Base de muchos métodos posteriores e incorporado a UML.',
      },
      {
        id: 'fc-2-3',
        front: 'Cómo nombrar un caso de uso',
        back:
          'Verbo en infinitivo + objeto/entidad principal afectado, desde el punto de vista de quien lo realiza. Ej.: "Registrar préstamo".',
      },
      {
        id: 'fc-2-4',
        front: 'Actor',
        back:
          'Conjunto coherente de roles que juegan los usuarios al interactuar con los casos de uso. Puede ser persona, organización, unidad o sistema. Si es persona, se modela el rol, no el nombre.',
      },
      {
        id: 'fc-2-5',
        front: 'Actor primario vs. secundario',
        back:
          'Primario: inicia el caso de uso para lograr un objetivo. Secundario: es requerido por el caso de uso (por ejemplo, recibe una notificación), pero no lo inicia.',
      },
      {
        id: 'fc-2-6',
        front: 'Regla de iniciador de caso de uso',
        back:
          'Cada caso de uso puede ser iniciado por UN solo actor. Si varios pueden iniciarlo, se modela con una relación de herencia entre actores.',
      },
      {
        id: 'fc-2-7',
        front: 'Preguntas para hallar actores',
        back:
          '¿Quién usa el sistema? ¿Quién necesita información del sistema? ¿Quién provee información? ¿Qué otros sistemas interactúan? ¿Quién instala y mantiene el sistema?',
      },
    ],
  },

  // ---------- SECCIÓN 3 ----------
  {
    id: '3',
    unit: '8',
    title: 'Descripción, relaciones y diagrama de casos de uso',
    criollo:
      'Tener la elipse y los actores no alcanza: necesitás describir, paso por paso, cómo se desarrolla el caso. Eso va en un cuadro con curso normal y alternativas. Después armás relaciones de extensión y uso entre casos, y todo se junta en un diagrama con la frontera del sistema.',
    blocks: [
      {
        type: 'h3',
        text: 'Cuadro descriptivo del caso de uso',
        criollo:
          'Cada caso describe la secuencia de interacciones entre el sistema y sus actores para alcanzar un objetivo. Eso lo capturás en un cuadro: nombre, actor, precondición, curso normal numerado y, en columna aparte, los cursos alternativos.',
      },
      {
        type: 'p',
        text:
          'Podemos decir que cada caso de uso es, básicamente, una descripción de posibles secuencias de interacciones entre el sistema y sus actores externos, con la finalidad de alcanzar un objetivo determinado.',
      },
      {
        type: 'p',
        text:
          'Hemos visto cómo representar cada caso de uso y, si bien son muy claros en esta vista gráfica, nos falta conocer un poco más en detalle cómo lleva a cabo cada caso de uso esa secuencia de interacciones. Es por ello que cada caso de uso cuenta con un cuadro descriptivo.',
      },
      {
        type: 'table',
        caption: 'Cuadro descriptivo básico de un caso de uso',
        headers: ['Campo', 'Contenido'],
        rows: [
          ['Nombre del caso de uso', 'Debe coincidir con el indicado en el diagrama de casos de uso'],
          ['Actor', 'El actor que inicia el caso'],
          ['Precondición', 'Lo que debe ser cierto antes de ejecutar el caso'],
          ['Curso normal', 'Secuencia numerada: lo que hace el actor y lo que hace el sistema, en condiciones donde todo sale bien'],
          ['Curso alternativo', 'Variantes del curso normal, numeradas indicando en qué paso se desvían (ej.: 3.1)'],
        ],
      },
      {
        type: 'h3',
        text: 'Pasos para completar el cuadro',
        criollo:
          'Primero identificás a qué caso corresponde (el nombre coincide con la elipse). Después decís quién es el actor que lo inicia. Recién ahí describís las interacciones del curso normal (numeradas) y, finalmente, los cursos alternativos en la segunda columna.',
      },
      {
        type: 'p',
        text:
          'Primero, identificaremos a qué caso de uso corresponde el cuadro de descripción, indicando su nombre (debe coincidir con el indicado en la elipse). Luego, llegará el momento de indicar quién es el actor que inició ese caso de uso.',
      },
      {
        type: 'p',
        text:
          'Una vez completado esto, debemos comenzar a describir las interacciones. Siempre comenzaremos por el <strong>curso normal</strong>, es decir, cómo sería si todas las condiciones o controles salieran bien. En esta descripción debe incluirse tanto lo que hará el actor como lo que hará el sistema. Estos pasos deben numerarse.',
      },
      {
        type: 'p',
        text:
          'Una vez concluida la descripción del curso normal, comenzaremos a ver si en algún paso surgió alguna alternativa que me obligue a cambiar el curso de acción. Será en ese paso donde aparecerá el <strong>curso alternativo</strong>, que numeraremos en la segunda columna. Por ejemplo: si la alternativa sucedió en el paso 3, se indica como <code>3.1</code>.',
      },
      {
        type: 'h3',
        text: 'Cuadro descriptivo extendido',
        criollo:
          'Para casos más complejos, hay una versión más completa con identificador, postcondición, excepciones (paso a paso) e importancia. Igual de útil para casos críticos del sistema.',
      },
      {
        type: 'table',
        caption: 'Cuadro descriptivo extendido',
        headers: ['Campo', 'Contenido'],
        rows: [
          ['Identificador', '&lt;identificador del requerimiento&gt;'],
          ['Nombre', '&lt;nombre del requerimiento funcional&gt;'],
          ['Actor principal', 'Aquel que protagoniza el caso de uso'],
          ['Actor secundario', 'Aquel que siendo actor, no lo inicia'],
          ['Descripción', 'El sistema deberá comportarse tal como se describe'],
          ['Precondición', '&lt;precondición del caso de uso&gt;'],
          ['Secuencia Normal', 'Paso a paso: el <em>actor / sistema</em> realiza la acción descripta'],
          ['Postcondición', '&lt;postcondición del caso de uso&gt;'],
          ['Excepciones', 'Si &lt;condición de excepción&gt;, el <em>actor / sistema</em> realiza la acción correspondiente; se ejecuta el caso de uso CU-x; este caso de uso {continua, aborta}'],
          ['Importancia', '&lt;nivel de importancia&gt;'],
          ['Comentarios', '&lt;comentarios adicionales&gt;'],
        ],
      },
      {
        type: 'h3',
        text: 'Relaciones entre casos de uso: extensión y uso',
        criollo:
          'Una vez que tenés los casos principales, refinás el modelo identificando funcionalidad que se extiende o que se reutiliza. Ojo: estas relaciones se dan SOLO entre casos de uso (no con actores), y cada parte tiene que ser un caso de uso en sí mismo.',
      },
      {
        type: 'p',
        text:
          'Una vez que hayamos identificado los casos de uso principales, comenzaremos a refinar el modelo, tratando de identificar nuevos casos de uso que surgen a partir de los existentes. Las relaciones de extensión y uso se pueden presentar únicamente entre casos de uso.',
      },
      {
        type: 'h3',
        text: 'Relación de extensión',
        criollo:
          'Un caso extiende a otro cuando tiene una parte de la funcionalidad que no siempre ocurre — es algo que podría o no darse, pero ambas partes son casos de uso por derecho propio.',
      },
      {
        type: 'p',
        text:
          'Un caso de uso <strong>extiende</strong> a otro cuando tiene una parte de la funcionalidad que no siempre ocurre. Pero aun así, ambos deben ser casos de uso en sí mismos (cumplir con la definición de caso de uso).',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'El ejemplo clásico de Jacobson: si tenemos el caso <em>Cenar</em>, podría extenderse a un caso <em>Tomar café</em>. Que te tomes un cafecito después de la cena no es un error ni una excepción: simplemente, podría darse o no.',
      },
      {
        type: 'h3',
        text: 'Relación de uso',
        criollo:
          'Cuando un caso está incluido en otro porque es funcionalidad común a varios. Aparece tras especificar varios casos y darte cuenta de que comparten algo. Igual que en extensión, lo incluido tiene que ser un caso de uso por sí mismo.',
      },
      {
        type: 'p',
        text:
          'Las <strong>relaciones de uso</strong> se dan cuando un caso de uso está incluido en otro, y se trata en realidad de un escenario común a más de un caso. Al igual que mencionamos previamente, tiene que ser un caso de uso en sí mismo (es decir, que debe cumplir con la definición de caso de uso). Este tipo de relaciones suelen aparecer después de haber especificado varios casos de uso, y se muestran como una funcionalidad común a más de uno.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Ejemplo del apunte: <em>Registrar préstamo</em> y <em>Registrar devolución</em> usan ambos <em>Consultar socio</em>. <em>Consultar socio</em> es funcionalidad común a los dos casos, y cumple por sí misma con la definición de caso de uso.',
      },
      {
        type: 'h3',
        text: 'Diagrama de casos de uso',
        criollo:
          'El diagrama es donde juntás todo: los casos (elipses), los actores (muñecos) y las relaciones entre ellos. Podés delimitar el sistema con un rectángulo y dividir el modelo en subsistemas.',
      },
      {
        type: 'p',
        text:
          'El diagrama de casos de uso se emplea para modelar la vista de los casos de uso del sistema, y muestra: el conjunto de los casos de uso, los actores y las relaciones. Gráficamente puede emplearse un rectángulo para indicar la frontera entre el sistema y su entorno, e indicar el nombre del sistema en un borde interno de dicho rectángulo. También podrían emplearse cajas rectangulares más pequeñas para agrupar los casos de uso por subsistemas.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-3-1',
          q: 'En el cuadro descriptivo, el curso normal describe la secuencia cuando todos los controles salen bien.',
          a: true,
          explain:
            'Verdadero. El curso normal asume que todas las condiciones se cumplen y las cosas salen como deberían.',
        },
        {
          id: 'tf-3-2',
          q: 'Las relaciones de extensión y uso pueden darse entre actores y casos de uso indistintamente.',
          a: false,
          explain:
            'Falso. Esas relaciones se presentan únicamente entre casos de uso, no entre actores.',
        },
        {
          id: 'tf-3-3',
          q: 'En una relación de uso, la parte incluida tiene que cumplir con la definición de caso de uso por sí misma.',
          a: true,
          explain:
            'Verdadero. Tanto en extensión como en uso, ambas partes deben ser casos de uso por derecho propio.',
        },
        {
          id: 'tf-3-4',
          q: 'En el diagrama de casos de uso, el rectángulo representa al actor principal.',
          a: false,
          explain:
            'Falso. El rectángulo se usa para indicar la frontera del sistema con su entorno (o para agrupar subsistemas). El actor se representa como muñeco de palo.',
        },
      ],
      mc: [
        {
          id: 'mc-3-1',
          q: 'Si en el paso 3 del curso normal aparece una alternativa, ¿cómo se numera ese curso alternativo?',
          options: ['3a', '3.1', '4', 'A3'],
          correctIndex: 1,
          explain:
            'El apunte indica explícitamente: si la alternativa sucede en el paso 3, se identifica como <code>3.1</code>.',
        },
        {
          id: 'mc-3-2',
          q: '¿Cuál es el ejemplo de Jacobson para una relación de extensión?',
          options: [
            'Registrar préstamo extiende a Consultar socio',
            'Cenar extiende a Tomar café',
            'Iniciar sesión extiende a Cerrar sesión',
            'Crear usuario extiende a Eliminar usuario',
          ],
          correctIndex: 1,
          explain:
            'Cenar puede extenderse a Tomar café: la extensión es funcionalidad que puede o no ocurrir, no un error ni una excepción.',
        },
        {
          id: 'mc-3-3',
          q: 'En el cuadro descriptivo extendido, ¿qué información NO suele incluirse explícitamente?',
          options: [
            'Precondición y postcondición',
            'Importancia',
            'Pseudocódigo de implementación',
            'Excepciones paso a paso',
          ],
          correctIndex: 2,
          explain:
            'El cuadro extendido cubre identificador, nombre, actores, descripción, precondición, secuencia normal, postcondición, excepciones, importancia y comentarios — no incluye implementación.',
        },
        {
          id: 'mc-3-4',
          q: 'En el diagrama, ¿qué se puede usar para agrupar casos de uso por subsistemas?',
          options: [
            'Líneas punteadas que conectan elipses',
            'Cajas rectangulares más pequeñas dentro del rectángulo del sistema',
            'Etiquetas de colores',
            'Una nube con texto',
          ],
          correctIndex: 1,
          explain:
            'El apunte sugiere emplear cajas rectangulares más pequeñas para agrupar los casos de uso por subsistemas dentro del rectángulo principal del sistema.',
        },
      ],
      ms: [
        {
          id: 'ms-3-1',
          q: '¿Cuáles de los siguientes campos aparecen en el cuadro descriptivo básico de un caso de uso?',
          options: [
            'Nombre del caso de uso',
            'Actor que inicia el caso',
            'Precondición',
            'Curso normal numerado',
            'Código fuente de implementación del caso',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Los cuatro primeros forman el cuadro básico (más el curso alternativo en la segunda columna). El código fuente no se documenta en el cuadro descriptivo — es lo opuesto al nivel de abstracción del caso de uso.',
        },
        {
          id: 'ms-3-2',
          q: '¿Qué campos suma el cuadro descriptivo EXTENDIDO respecto del básico?',
          options: [
            'Identificador del requerimiento',
            'Postcondición',
            'Excepciones paso a paso',
            'Importancia',
            'Pseudocódigo de implementación',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'El extendido suma identificador, postcondición, excepciones, importancia (y comentarios). El pseudocódigo no entra — el cuadro describe interacciones, no implementación.',
        },
        {
          id: 'ms-3-3',
          q: '¿Cuáles de estas afirmaciones sobre las relaciones de extensión y uso son correctas?',
          options: [
            'Se presentan únicamente entre casos de uso',
            'En la relación de uso, la parte incluida debe cumplir con la definición de caso de uso',
            'En la relación de extensión, ambas partes deben ser casos de uso por sí mismas',
            'Pueden darse entre actores y casos de uso indistintamente',
            'Suelen aparecer al refinar el modelo después de haber identificado los casos principales',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Estas relaciones se dan SOLO entre casos de uso (no con actores), y todas las partes deben cumplir con la definición de caso de uso. Aparecen al refinar el modelo, cuando ves funcionalidad común o extendible.',
        },
        {
          id: 'ms-3-4',
          q: 'Sobre el diagrama de casos de uso, ¿qué afirmaciones son correctas?',
          options: [
            'Muestra el conjunto de casos de uso, los actores y las relaciones',
            'Se puede emplear un rectángulo para indicar la frontera entre sistema y entorno',
            'El nombre del sistema se indica en un borde interno del rectángulo',
            'Se pueden usar cajas rectangulares más pequeñas para agrupar casos por subsistemas',
            'El rectángulo grande del diagrama representa al actor principal',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. El rectángulo NO es el actor — el actor se representa como un muñeco de palo; el rectángulo delimita el sistema.',
        },
        {
          id: 'ms-3-5',
          q: 'En el cuadro descriptivo básico, ¿cuáles de las siguientes afirmaciones sobre el <strong>curso alternativo</strong> son correctas según el apunte?',
          options: [
            'Se numera haciendo referencia al paso del curso normal donde ocurre la desviación (ej.: <code>3.1</code>)',
            'Se documenta en una segunda columna, separada del curso normal',
            'Describe lo que ocurre cuando algún paso del curso normal no se puede completar o surge una variante',
            'Siempre comienza en el paso 1 del curso normal, independientemente de dónde surja la alternativa',
            'Reemplaza al curso normal cuando el actor decide no completar el caso de uso',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las opciones 0, 1 y 2 son correctas: el curso alternativo se numera indicando el paso donde se desvía (ej.: <code>3.1</code>), va en la segunda columna del cuadro, y describe las variantes respecto del curso normal. La opción 3 es falsa: no siempre comienza en el paso 1, sino en el paso donde se produce la alternativa. La opción 4 es falsa: el curso alternativo es una variante del curso normal, no lo reemplaza completamente ni implica abandono del caso.',
        },
        {
          id: 'ms-3-6',
          q: '¿Cuáles de estas diferencias entre el cuadro descriptivo <strong>básico</strong> y el <strong>extendido</strong> son correctas según el apunte?',
          options: [
            'El extendido incluye un campo de <em>Postcondición</em> que el básico no tiene',
            'El extendido distingue entre actor principal y actor secundario; el básico solo menciona \'el actor que inicia\'',
            'El extendido incluye un campo de <em>Importancia</em> que el básico no contempla',
            'El básico incluye <em>Excepciones</em> paso a paso igual que el extendido',
            'El extendido incorpora un <em>Identificador</em> del requerimiento que el básico no tiene',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las opciones 0, 1, 2 y 4 son correctas: el extendido agrega Postcondición, diferencia actor principal de secundario, incluye Importancia e Identificador del requerimiento. La opción 3 es falsa: las Excepciones paso a paso son exclusivas del cuadro extendido; el básico solo contempla Curso alternativo, no Excepciones con esa estructura formal.',
        },
        {
          id: 'ms-3-7',
          q: 'Según el apunte, ¿cuáles de las siguientes afirmaciones sobre la <strong>relación de extensión</strong> son precisas?',
          options: [
            'La funcionalidad que extiende puede o no ocurrir; no es obligatoria en cada ejecución del caso base',
            'Ambas partes de la relación deben ser casos de uso en sí mismos',
            'La relación de extensión es apropiada para modelar comportamientos que siempre ocurren como parte del flujo principal',
            'El ejemplo de Jacobson usa <em>Cenar</em> extendido por <em>Tomar café</em>',
            'La extensión representa una excepción o un error dentro del caso base',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 son correctas según el apunte: la extensión modela algo que <em>podría o no darse</em>, ambas partes deben cumplir la definición de caso de uso, y el ejemplo de Jacobson es exactamente Cenar/Tomar café. La opción 2 es falsa: si la funcionalidad ocurre siempre en el flujo, no es extensión sino parte del curso normal o, eventualmente, una relación de uso. La opción 4 es falsa: el apunte aclara explícitamente que la extensión no es un error ni una excepción.',
        },
        {
          id: 'ms-3-8',
          q: 'Sobre la <strong>relación de uso</strong> (<em>include</em>) según el apunte, ¿cuáles son afirmaciones correctas?',
          options: [
            'La parte incluida debe ser un caso de uso en sí misma',
            'Surge cuando se identifica funcionalidad común a más de un caso de uso',
            'Suele descubrirse al inicio del modelado, antes de especificar los casos principales',
            'El ejemplo del apunte es <em>Consultar socio</em>, usado tanto por <em>Registrar préstamo</em> como por <em>Registrar devolución</em>',
            'La relación de uso puede darse entre un actor y un caso de uso cuando el actor participa en varios casos',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 son correctas: la parte incluida debe cumplir la definición de caso de uso, aparece cuando hay funcionalidad compartida, y el ejemplo textual del apunte es Consultar socio usado por Registrar préstamo y Registrar devolución. La opción 2 es falsa: el apunte dice que estas relaciones <em>suelen aparecer después de haber especificado varios casos de uso</em>, no al inicio. La opción 4 es falsa: las relaciones de extensión y uso se dan únicamente entre casos de uso, no entre actores y casos de uso.',
        },
        {
          id: 'ms-3-9',
          q: 'En el cuadro descriptivo extendido, ¿cuáles de los siguientes campos describen con exactitud su contenido según el apunte?',
          options: [
            'El campo <em>Excepciones</em> especifica la condición de excepción, la acción a realizar y si el caso continúa o aborta',
            'El campo <em>Actor secundario</em> es aquel que siendo actor, no inicia el caso de uso',
            'El campo <em>Descripción</em> indica que \'el sistema deberá comportarse tal como se describe\'',
            'El campo <em>Secuencia Normal</em> solo registra las acciones del actor, omitiendo las del sistema',
            'El campo <em>Postcondición</em> especifica lo que debe ser cierto antes de que comience el caso de uso',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las opciones 0, 1 y 2 son correctas y textuales del apunte. La opción 3 es falsa: la Secuencia Normal incluye tanto lo que realiza el actor como lo que realiza el sistema, igual que en el básico. La opción 4 es falsa e invierte los conceptos: la <em>Precondición</em> es lo que debe ser cierto antes de ejecutar el caso; la <em>Postcondición</em> describe el estado resultante después de su ejecución.',
        },
        {
          id: 'ms-3-10',
          q: '¿Cuáles de estas afirmaciones sobre la construcción del modelo de casos de uso (cuadro + relaciones + diagrama) reflejan correctamente lo que plantea el apunte?',
          options: [
            'El cuadro descriptivo es necesario porque la vista gráfica sola no muestra cómo se desarrolla la secuencia de interacciones',
            'Las relaciones de extensión y uso sirven para refinar el modelo a partir de los casos de uso ya identificados',
            'En el diagrama, el nombre del sistema se coloca en un borde interno del rectángulo que delimita la frontera',
            'El curso normal se documenta primero y los cursos alternativos después, nunca al revés',
            'Los cursos alternativos se documentan en la misma columna que el curso normal, usando sangría para diferenciarlos',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las opciones 0, 1, 2 y 3 son correctas según el apunte: la necesidad del cuadro descriptivo se justifica porque la vista gráfica no alcanza; la extensión y el uso refinan el modelo; el nombre del sistema va en el borde interno del rectángulo; y el orden de documentación es siempre curso normal primero, alternativas después. La opción 4 es falsa: el apunte indica que los cursos alternativos se documentan en una <strong>segunda columna</strong> separada, no en la misma columna que el curso normal.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-3-1',
        front: 'Curso normal',
        back:
          'Secuencia numerada de interacciones del caso de uso que describe qué hace el actor y qué hace el sistema cuando todos los controles y condiciones salen bien.',
      },
      {
        id: 'fc-3-2',
        front: 'Curso alternativo',
        back:
          'Variante del curso normal, numerada según el paso donde se desvía (ej.: 3.1). Va en una segunda columna del cuadro descriptivo.',
      },
      {
        id: 'fc-3-3',
        front: 'Relación de extensión',
        back:
          'Un caso de uso extiende a otro cuando tiene funcionalidad que no siempre ocurre. Ambos deben ser casos de uso completos. Ej.: Cenar → Tomar café.',
      },
      {
        id: 'fc-3-4',
        front: 'Relación de uso',
        back:
          'Un caso de uso está incluido en otro porque es escenario común a más de un caso. La parte incluida debe ser un caso de uso por sí misma. Ej.: Registrar préstamo y Registrar devolución usan Consultar socio.',
      },
      {
        id: 'fc-3-5',
        front: 'Restricción de las relaciones extensión/uso',
        back:
          'Solo pueden presentarse entre casos de uso (no con actores), y todas las partes involucradas deben cumplir con la definición de caso de uso.',
      },
      {
        id: 'fc-3-6',
        front: 'Frontera del sistema en el diagrama',
        back:
          'Rectángulo grande que delimita lo que está dentro y fuera del sistema. El nombre del sistema se coloca en un borde interno. Se pueden usar cajas internas para agrupar subsistemas.',
      },
      {
        id: 'fc-3-7',
        front: 'Postcondición',
        back:
          'Lo que debe ser cierto al finalizar el caso de uso. Se incluye en el cuadro descriptivo extendido junto con la precondición y las excepciones.',
      },
    ],
  },

  // ---------- SECCIÓN 4 ----------
  {
    id: '4',
    unit: '8',
    title: 'Historias de usuario, INVEST y épicos',
    criollo:
      'La historia de usuario es la forma corta y narrativa de capturar lo que un usuario quiere y por qué. Jacobson armó los Casos de Uso 2.0 más livianos justamente para que se lleven bien con las historias. Una buena historia cumple el criterio INVEST (Bill Wake, 2003) y si te queda gigante se llama épico.',
    blocks: [
      {
        type: 'h3',
        text: 'Para qué sirven las historias de usuario',
        criollo:
          'Sirven para narrar cómo se alcanza el objetivo del caso de uso y qué pasa si las cosas no salen bien. Te permiten implementar el caso por porciones, en vez de tirar todo de una vez.',
      },
      {
        type: 'p',
        text:
          'Para poder comprender un caso de uso, narramos historias. Estas cubren la forma en que se alcanza el objetivo del caso de uso en forma exitosa, así como también cómo se manejará ante cualquier problema que pudiera ocurrir en el camino.',
      },
      {
        type: 'p',
        text:
          'Los <strong>casos de uso 2.0</strong>, desarrollados por Ivar Jacobson, fueron diseñados con la intención de alivianar el proceso. Por esa razón, él sugiere escribir narrativas de casos de uso más ligeras que capturen lo que sea estrictamente necesario para poder generar las historias de usuario, a tal punto que podrían describirse en tarjetas pequeñas y luego bajar detalle en los casos de uso que lo requieran.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/8-historias-usuario-jacobson.jpeg',
        alt: 'Esquema de Jacobson: el cuadro completo de casos de uso versión 1, porciones listas y porciones verificadas, con tarjetas de historias.',
        caption: 'Casos de uso 2.0 — Jacobson. Las historias de usuario se gestionan como tarjetas que avanzan por etapas. Fuente: ivarjacobson.com.',
      },
      {
        type: 'p',
        text:
          'Las historias de usuario sirven para ayudar a entender el caso de uso y permiten implementarlo porción por porción. Así, en lugar de describir el sistema de una sola vez, podemos ir haciéndolo por cada caso de uso, narrando las historias que cada uno capture. Tomamos la narración de las historias como parte de la narrativa del caso de uso.',
      },
      {
        type: 'h3',
        text: 'Definición y formato',
        criollo:
          'Una historia es la descripción breve de una funcionalidad desde el punto de vista del usuario o cliente. Idealmente, no más de dos oraciones, en tarjeta, respondiendo tres cosas: quién, qué y para qué.',
      },
      {
        type: 'p',
        text:
          'Una historia de usuario es la descripción de una funcionalidad desde el punto de vista del usuario o cliente. Se suelen expresar en párrafos breves, idealmente hasta dos oraciones, que se cargan en tarjetas, y deben responder tres preguntas:',
      },
      {
        type: 'ul',
        items: [
          '<strong>¿Quién es el beneficiario?</strong> Interesados/actores que se beneficiarán de la historia de usuario.',
          '<strong>¿Qué se quiere hacer?</strong> Descripción/visión de alto nivel de la funcionalidad para el usuario.',
          '<strong>¿Cuál es el beneficio?</strong> El "por qué" / cuál es el valor de negocio que la historia proporciona.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Formato recomendado: <em>Como (rol) yo quiero (algo) para (beneficiarme)</em>.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Ejemplo del apunte (biblioteca): <em>Como bibliotecario de la institución, yo quiero revisar el historial de préstamos para identificar los libros con mayor demanda para reponer.</em>',
      },
      {
        type: 'h3',
        text: 'Épicos: cuando la historia se va de largo',
        criollo:
          'Si una historia es tan grande que no entra en una sola iteración, es un épico. La solución es desagregarla en historias más chicas hasta que sean implementables.',
      },
      {
        type: 'p',
        text:
          'Cuando se habla de historias de usuario surge el concepto de <strong>épicos</strong>, que se refiere a cuando las historias de usuario son grandes y difícilmente puedan llegar a ser implementadas en una única iteración, es necesario desagregarla en historias de usuario menores.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/8-historias-epicos-jacobson.jpeg',
        alt: 'Diagrama de Jacobson: un único caso de uso a la izquierda con pasos y alternativas (ALT 1, 2, 3) que se descompone en muchas historias a la derecha.',
        caption: 'De un caso de uso a muchas historias: alternativas (ALT) y pasos se reordenan como historias independientes. Fuente: ivarjacobson.com.',
      },
      {
        type: 'h3',
        text: 'Criterio INVEST (Bill Wake, 2003)',
        criollo:
          'INVEST es la checklist clásica para juzgar si una historia está sana. Cada letra es un atributo, y todos importan.',
      },
      {
        type: 'p',
        text:
          'Los atributos de las buenas historias de usuario, según el criterio <strong>INVEST</strong> creado por Bill Wake en el año 2003, son los siguientes:',
      },
      {
        type: 'table',
        caption: 'INVEST — atributos de una buena historia de usuario',
        headers: ['Letra', 'Atributo', 'Significado'],
        rows: [
          ['I', 'Independiente', 'La historia debe ser autosuficiente para no presentar dependencia de ninguna otra historia.'],
          ['N', 'Negociable', 'Las historias pueden ser cambiadas hasta tanto sean parte de una iteración.'],
          ['V', 'Valorable', 'Debe entregar valor al cliente o usuario final.'],
          ['E', 'Estimable', 'Siempre debería poder estimarse cuál es el esfuerzo de la historia.'],
          ['S', 'Pequeña (Small)', 'Nunca debe ser tan grande como para resultar imposible de planificarse o priorizarse.'],
          ['T', 'Comprobable (Testable)', 'La historia, o su descripción, debe brindar la información necesaria para poder probar su desarrollo efectivo.'],
        ],
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-4-1',
          q: 'Las historias de usuario permiten implementar el caso de uso porción por porción en lugar de todo de una vez.',
          a: true,
          explain:
            'Verdadero. Esa es justamente la ventaja: narrar por historias deja que el caso de uso se entregue por partes.',
        },
        {
          id: 'tf-4-2',
          q: 'Un épico es una historia de usuario tan chica que se implementa en una sola iteración.',
          a: false,
          explain:
            'Falso. Un épico es lo contrario: una historia tan grande que no puede implementarse en una sola iteración y se debe desagregar.',
        },
        {
          id: 'tf-4-3',
          q: 'INVEST fue creado por Bill Wake en 2003.',
          a: true,
          explain:
            'Verdadero. Es el criterio canónico para evaluar la calidad de las historias de usuario.',
        },
        {
          id: 'tf-4-4',
          q: 'Una historia "Negociable" significa que ya no puede modificarse una vez escrita.',
          a: false,
          explain:
            'Falso. Negociable significa exactamente lo contrario: las historias <strong>pueden</strong> cambiarse hasta que se vuelvan parte de una iteración.',
        },
        {
          id: 'tf-4-5',
          q: 'Los casos de uso 2.0 buscan alivianar el proceso para integrarse mejor con historias de usuario.',
          a: true,
          explain:
            'Verdadero. Jacobson diseñó casos de uso 2.0 para que la narrativa sea más ligera y se pueda generar historias de usuario en tarjetas pequeñas.',
        },
      ],
      mc: [
        {
          id: 'mc-4-1',
          q: '¿Cuál es el formato recomendado para escribir una historia de usuario?',
          options: [
            'Si X ocurre, el sistema hace Y',
            'Como (rol) yo quiero (algo) para (beneficiarme)',
            'Dado que..., cuando..., entonces...',
            'CU-NN: descripción técnica detallada',
          ],
          correctIndex: 1,
          explain:
            'Ese es el formato textual del apunte. Tres preguntas: quién es el beneficiario, qué quiere hacer, cuál es el beneficio.',
        },
        {
          id: 'mc-4-2',
          q: '¿Qué letra del criterio INVEST exige que la historia pueda probarse?',
          options: ['I', 'V', 'E', 'T'],
          correctIndex: 3,
          explain:
            'La T (Testable / Comprobable): la historia debe brindar la información necesaria para poder probar su desarrollo efectivo.',
        },
        {
          id: 'mc-4-3',
          q: 'En una historia de usuario, ¿qué responde la pregunta "para beneficiarme"?',
          options: [
            'El beneficiario',
            'La descripción de alto nivel',
            'El valor de negocio o el por qué',
            'La iteración asignada',
          ],
          correctIndex: 2,
          explain:
            'El "para" responde el por qué — cuál es el valor de negocio que la historia proporciona.',
        },
        {
          id: 'mc-4-4',
          q: '¿Qué se debe hacer cuando una historia de usuario es un épico?',
          options: [
            'Implementarla tal cual aunque tarde varias iteraciones',
            'Descartarla por exceso de alcance',
            'Desagregarla en historias de usuario menores',
            'Convertirla en un caso de uso',
          ],
          correctIndex: 2,
          explain:
            'El apunte indica explícitamente: cuando es difícil implementarla en una sola iteración, es necesario desagregarla en historias de usuario menores.',
        },
      ],
      ms: [
        {
          id: 'ms-4-1',
          q: '¿Cuáles de los siguientes atributos forman parte del criterio INVEST de Bill Wake (2003)?',
          options: [
            'Independiente',
            'Negociable',
            'Iterativa',
            'Estimable',
            'Comprobable (Testable)',
          ],
          correctIndexes: [0, 1, 3, 4],
          explain:
            'INVEST = Independiente, Negociable, Valorable, Estimable, Pequeña (Small) y Comprobable (Testable). "Iterativa" no es una letra del criterio.',
        },
        {
          id: 'ms-4-2',
          q: '¿Qué preguntas debe responder una historia de usuario?',
          options: [
            '¿Quién es el beneficiario?',
            '¿Qué se quiere hacer?',
            '¿Cuál es el beneficio (valor de negocio)?',
            '¿Qué tecnología se va a usar?',
            '¿Cuántos sprints requiere?',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las historias responden tres preguntas: quién, qué y para qué (beneficio). La tecnología y la estimación de sprints son decisiones posteriores, fuera del formato narrativo.',
        },
        {
          id: 'ms-4-3',
          q: '¿Cuáles de estas afirmaciones sobre los casos de uso 2.0 de Jacobson son correctas?',
          options: [
            'Fueron diseñados con la intención de alivianar el proceso',
            'Sugieren narrativas más ligeras que las clásicas',
            'Las historias se pueden describir en tarjetas pequeñas',
            'Se baja a detalle solo en los casos de uso que lo requieran',
            'Reemplazan por completo a los casos de uso clásicos',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Los casos de uso 2.0 son una propuesta para hacerlos más livianos y compatibles con historias de usuario, no para reemplazar a los clásicos.',
        },
        {
          id: 'ms-4-4',
          q: '¿Qué afirmaciones sobre los épicos son correctas según el apunte?',
          options: [
            'Son historias de usuario tan grandes que no pueden implementarse en una única iteración',
            'Deben desagregarse en historias de usuario menores',
            'Son historias chicas que se implementan en pocos minutos',
            'Reemplazan al caso de uso original',
            'Son sinónimos de criterio de aceptación',
          ],
          correctIndexes: [0, 1],
          explain:
            'Un épico es lo contrario de chico: una historia grande que no entra en una iteración. La acción canónica es desagregarlo, no reemplazar nada ni confundirlo con criterios de aceptación.',
        },
        {
          id: 'ms-4-5',
          q: 'Según el apunte, ¿cuáles de las siguientes afirmaciones sobre el atributo <strong>Negociable</strong> del criterio INVEST son correctas?',
          options: [
            'Las historias pueden cambiarse hasta que se vuelvan parte de una iteración',
            'Negociable implica que la historia puede modificarse en cualquier momento, incluso durante su implementación en la iteración',
            'Si una historia ya fue incluida en una iteración, deja de ser negociable',
            'Negociable significa que el cliente puede rechazar la historia sin ninguna consecuencia',
            'El atributo Negociable es parte del criterio INVEST creado por Bill Wake en 2003',
          ],
          correctIndexes: [0, 2, 4],
          explain:
            'Según el apunte, las historias <strong>pueden ser cambiadas hasta tanto sean parte de una iteración</strong> — eso implica directamente que una vez dentro de la iteración ya no son negociables (opción 2 correcta). La opción 0 reproduce el texto casi literalmente. La opción 4 es correcta porque INVEST sí fue creado por Bill Wake en 2003. La opción 1 es un distractor plausible pero contradice el apunte: la negociabilidad tiene un límite temporal (hasta entrar a la iteración). La opción 3 inventa una consecuencia que el texto no menciona.',
        },
        {
          id: 'ms-4-6',
          q: '¿Cuáles de estas características corresponden <em>exactamente</em> a la definición de <strong>historia de usuario</strong> según el apunte, y <em>no</em> al concepto de épico?',
          options: [
            'Es la descripción de una funcionalidad desde el punto de vista del usuario o cliente',
            'Se expresa en párrafos breves, idealmente hasta dos oraciones, cargados en tarjetas',
            'Es una historia tan grande que difícilmente pueda implementarse en una única iteración',
            'Responde tres preguntas: quién, qué y para qué',
            'Debe desagregarse en unidades menores para poder planificarse',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 son la definición textual de historia de usuario del apunte: descripción de funcionalidad desde la perspectiva del usuario, expresada en hasta dos oraciones en tarjeta, respondiendo quién/qué/para qué. Las opciones 2 y 4 describen al <strong>épico</strong>, no a la historia de usuario en general.',
        },
        {
          id: 'ms-4-7',
          q: 'Bill Wake diseñó el criterio INVEST con seis atributos. ¿Cuáles de las siguientes <em>descripciones de atributo</em> son correctas <em>según el apunte</em>?',
          options: [
            'Independiente: la historia debe ser autosuficiente para no presentar dependencia de ninguna otra historia',
            'Valorable: debe entregar valor solo al equipo de desarrollo, no necesariamente al cliente',
            'Pequeña (Small): nunca debe ser tan grande como para resultar imposible de planificarse o priorizarse',
            'Estimable: siempre debería poder estimarse cuál es el esfuerzo de la historia',
            'Comprobable (Testable): la historia debe brindar la información necesaria para probar su desarrollo efectivo',
          ],
          correctIndexes: [0, 2, 3, 4],
          explain:
            'Las opciones 0, 2, 3 y 4 reproducen fielmente las definiciones del apunte para I, S, E y T del criterio INVEST. La opción 1 es el distractor: el atributo <strong>Valorable</strong> exige que la historia entregue valor al <strong>cliente o usuario final</strong>, no al equipo de desarrollo; esa formulación contradice el texto.',
        },
        {
          id: 'ms-4-8',
          q: 'Sobre los <strong>casos de uso 2.0</strong> de Ivar Jacobson y su relación con las historias de usuario, ¿cuáles de estas afirmaciones son respaldadas por el apunte?',
          options: [
            'Jacobson los desarrolló con la intención de alivianar el proceso frente a los casos de uso clásicos',
            'Sugiere escribir narrativas más ligeras que capturen solo lo estrictamente necesario para generar historias de usuario',
            'Las historias se describen en tarjetas pequeñas y se baja detalle únicamente en los casos que lo requieran',
            'En los casos de uso 2.0, la narrativa de las historias es independiente de la narrativa del caso de uso',
            'Permiten implementar el caso de uso porción por porción en lugar de describirlo todo de una sola vez',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las opciones 0, 1, 2 y 4 están respaldadas textualmente: Jacobson buscó alivianar el proceso, propone narrativas ligeras que capturen lo estrictamente necesario, las historias van en tarjetas y se profundiza donde se requiera, y el objetivo es implementar por porciones. La opción 3 es falsa: el apunte dice explícitamente que «tomamos la narración de las historias como parte de la narrativa del caso de uso», no como algo independiente.',
        },
        {
          id: 'ms-4-9',
          q: 'Una historia de usuario es un <strong>épico</strong> y el equipo decide desagregarla. Según el apunte, ¿cuáles de las siguientes afirmaciones justifican esa decisión y son coherentes con el texto?',
          options: [
            'La historia es tan grande que difícilmente pueda implementarse en una única iteración',
            'Al desagregarla se obtienen historias de usuario menores, implementables individualmente',
            'Un épico debe convertirse en un caso de uso formal antes de desagregarse',
            'La desagregación es la acción canónica ante un épico según el apunte',
            'Un épico es equivalente a varias tarjetas de historia concatenadas sin necesidad de ruptura',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 reflejan exactamente lo que dice el apunte sobre épicos: son historias grandes que no caben en una iteración, y la solución es desagregarlas en historias menores — esa es la acción canónica. La opción 2 inventa un paso intermedio (convertir en caso de uso formal) que el texto no menciona. La opción 4 contradice la premisa: un épico <em>requiere</em> ruptura, no es simplemente tarjetas concatenadas.',
        },
        {
          id: 'ms-4-10',
          q: '¿Cuáles de estas combinaciones <em>atributo INVEST — descripción</em> están <strong>mal emparejadas</strong> según el apunte? (Marcá las que son incorrectas.)',
          options: [
            'Estimable — la historia debe ser autosuficiente y no depender de otras',
            'Negociable — puede cambiarse hasta que forme parte de una iteración',
            'Valorable — siempre debería poder estimarse su esfuerzo',
            'Pequeña (Small) — nunca debe ser tan grande que resulte imposible planificarla',
            'Comprobable — es sinónimo de \'Independiente\' dentro del criterio',
          ],
          correctIndexes: [0, 2, 4],
          explain:
            'La pregunta pide identificar los pares <em>mal emparejados</em>. La opción 0 asigna la descripción de <strong>Independiente</strong> a <strong>Estimable</strong> — incorrecto. La opción 2 asigna la descripción de <strong>Estimable</strong> a <strong>Valorable</strong> — incorrecto; Valorable debe entregar valor al cliente. La opción 4 afirma que Comprobable es sinónimo de Independiente — falso, son atributos distintos. Las opciones 1 y 3 están bien emparejadas según el texto y por eso no se marcan.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-4-1',
        front: 'Historia de usuario',
        back:
          'Descripción de una funcionalidad desde el punto de vista del usuario o cliente, breve (idealmente dos oraciones), en tarjeta. Responde: quién, qué y para qué.',
      },
      {
        id: 'fc-4-2',
        front: 'Formato de historia de usuario',
        back:
          '"Como (rol) yo quiero (algo) para (beneficiarme)." Ejemplo: "Como bibliotecario, yo quiero revisar el historial de préstamos para identificar libros con mayor demanda y reponerlos."',
      },
      {
        id: 'fc-4-3',
        front: 'Épico',
        back:
          'Historia de usuario tan grande que no puede implementarse en una única iteración. Se desagrega en historias menores.',
      },
      {
        id: 'fc-4-4',
        front: 'INVEST',
        back:
          'Criterio de Bill Wake (2003) para buenas historias: Independiente, Negociable, Valorable, Estimable, Pequeña (Small) y Comprobable (Testable).',
      },
      {
        id: 'fc-4-5',
        front: 'Casos de uso 2.0',
        back:
          'Propuesta de Ivar Jacobson para alivianar la narrativa de casos de uso. Las narrativas se escriben en tarjetas pequeñas y se baja a detalle solo cuando el caso lo requiera.',
      },
      {
        id: 'fc-4-6',
        front: 'Tres preguntas de una historia',
        back:
          '¿Quién es el beneficiario? ¿Qué se quiere hacer? ¿Cuál es el beneficio (valor de negocio)?',
      },
    ],
  },

  // ---------- SECCIÓN 5 ----------
  {
    id: '5',
    unit: '9',
    title: 'Trazabilidad de requerimientos',
    criollo:
      'La trazabilidad te permite seguirle el rastro a cada requerimiento: de dónde vino, dónde se documentó, qué parte del código lo satisface. Es clave cuando hay que mantener el sistema y modificar algo sin romper otra cosa.',
    blocks: [
      {
        type: 'h3',
        text: 'Por qué importa la trazabilidad',
        criollo:
          'Cuando el sistema ya está operativo y aparece un cambio, necesitás saber qué requerimientos afecta y dónde tocar. Sin trazabilidad, jugás a la lotería.',
      },
      {
        type: 'p',
        text:
          'La trazabilidad en los requerimientos puede presentarse partiendo del <strong>SRS</strong> (Software Requirement Specification) y, si es posible establecer de forma clara dónde se ha originado cada uno de ellos, servirá luego para poder referenciar en las futuras etapas del desarrollo.',
      },
      {
        type: 'p',
        text:
          'El momento en que el producto de software pasa a ser operado y mantenido, la trazabilidad remota cobra más importancia, ya que al llevar a cabo modificaciones en el diseño o el código, se vuelve fundamental poder identificar los requerimientos afectados por dicho cambio para llevar a cabo la actualización correspondiente.',
      },
      {
        type: 'h3',
        text: 'Trazabilidad remota y trazabilidad futura',
        criollo:
          'La remota mira para atrás del SRS (de dónde viene cada requerimiento). La futura mira para adelante (qué pasa con cada requerimiento en las fases siguientes). Para que ambas funcionen, cada requerimiento necesita una referencia única.',
      },
      {
        type: 'p',
        text:
          'La <strong>trazabilidad remota</strong> hace referencia a las fases previas al desarrollo, es decir, referenciando el origen o fuente del requerimiento.',
      },
      {
        type: 'p',
        text:
          'La <strong>trazabilidad futura</strong> apunta a las fases posteriores del desarrollo, para lo que es imprescindible que cada requerimiento tenga un nombre o referencia única.',
      },
      {
        type: 'h3',
        text: 'Cuatro tipos de trazabilidad',
        criollo:
          'En realidad hablamos de dos pares: hacia atrás/hacia adelante "desde" los requerimientos y "hasta" los requerimientos. Te paso la tablita para que no te marées.',
      },
      {
        type: 'table',
        caption: 'Tipos de trazabilidad según el apunte',
        headers: ['Tipo', 'Qué permite'],
        rows: [
          [
            'Trazabilidad hacia atrás desde los requerimientos',
            'Conocer por qué cada requerimiento del SRS existe.',
          ],
          [
            'Trazabilidad hacia adelante hasta los requerimientos',
            'Todos los documentos que preceden al SRS pueden referenciarse al SRS.',
          ],
          [
            'Trazabilidad hacia atrás hasta los requerimientos',
            'Cada comportamiento del software refiere explícitamente aquellos requerimientos que satisface.',
          ],
          [
            'Trazabilidad hacia adelante desde los requerimientos',
            'Entender cuáles componentes del software satisfacen cada requerimiento.',
          ],
        ],
      },
      {
        type: 'mermaid',
        caption:
          'Las cuatro trazabilidades sobre el eje documentos previos → SRS → software construido.',
        code: `graph LR
    subgraph PREVIOS["DOCUMENTOS PREVIOS AL SRS"]
        A["Necesidades del cliente<br/>Reglas de negocio<br/>Normativa"]
    end

    subgraph SRSBOX["SRS"]
        B["Requerimientos"]
    end

    subgraph SOFT["SOFTWARE CONSTRUIDO"]
        C["Componentes<br/>y comportamientos"]
    end

    A -->|"HACIA ADELANTE hasta los requerimientos<br/>(qué requerimiento generó cada necesidad)"| B
    B -->|"HACIA ATRÁS desde los requerimientos<br/>(por qué existe cada requerimiento)"| A

    B -->|"HACIA ADELANTE desde los requerimientos<br/>(qué componente implementa cada requerimiento)"| C
    C -->|"HACIA ATRÁS hasta los requerimientos<br/>(qué requerimiento satisface cada componente)"| B

    classDef prev fill:#e8dcc0,stroke:#8a7a55,color:#3a3320,stroke-width:2px
    classDef srs fill:#c9d6c0,stroke:#5a7a55,color:#243320,stroke-width:2px
    classDef soft fill:#c0cdd6,stroke:#55707a,color:#202f33,stroke-width:2px

    class A prev
    class B srs
    class C soft`,
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Una forma de leerlo: "desde los requerimientos" = arrancás en el requerimiento; "hasta los requerimientos" = llegás al requerimiento. La dirección (atrás/adelante) te dice si te movés a fases previas o posteriores.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-5-1',
          q: 'La trazabilidad remota hace referencia a las fases previas al desarrollo, mostrando el origen del requerimiento.',
          a: true,
          explain:
            'Verdadero. La remota mira hacia atrás del SRS, hacia las fuentes que originaron el requerimiento.',
        },
        {
          id: 'tf-5-2',
          q: 'Para que la trazabilidad futura funcione, cada requerimiento debe tener un nombre o referencia única.',
          a: true,
          explain:
            'Verdadero. Sin identificador único no podés referenciar el requerimiento desde fases posteriores.',
        },
        {
          id: 'tf-5-3',
          q: 'Cuando el sistema entra en operación y mantenimiento, la trazabilidad remota pierde importancia.',
          a: false,
          explain:
            'Falso. Es justo lo opuesto: la remota cobra más importancia, porque al modificar diseño o código hay que identificar los requerimientos afectados.',
        },
        {
          id: 'tf-5-4',
          q: 'La trazabilidad hacia adelante desde los requerimientos permite saber qué componentes del software satisfacen cada requerimiento.',
          a: true,
          explain:
            'Verdadero. Esa es la definición textual de ese tipo de trazabilidad.',
        },
      ],
      mc: [
        {
          id: 'mc-5-1',
          q: '¿Qué documento es el punto de partida de la trazabilidad?',
          options: ['El backlog del equipo', 'El SRS (Software Requirement Specification)', 'El manual de usuario', 'El diagrama de Gantt'],
          correctIndex: 1,
          explain:
            'El apunte parte del SRS para establecer la trazabilidad de cada requerimiento.',
        },
        {
          id: 'mc-5-2',
          q: '¿Cuál de los siguientes tipos permite conocer "por qué cada requerimiento existe"?',
          options: [
            'Trazabilidad hacia atrás desde los requerimientos',
            'Trazabilidad hacia adelante hasta los requerimientos',
            'Trazabilidad hacia atrás hasta los requerimientos',
            'Trazabilidad hacia adelante desde los requerimientos',
          ],
          correctIndex: 0,
          explain:
            'La hacia atrás desde los requerimientos: arranca en el requerimiento y mira hacia las fases previas para entender por qué existe.',
        },
        {
          id: 'mc-5-3',
          q: '¿Qué tipo de trazabilidad permite que cada comportamiento del software refiera explícitamente a los requerimientos que satisface?',
          options: [
            'Hacia atrás desde los requerimientos',
            'Hacia adelante hasta los requerimientos',
            'Hacia atrás hasta los requerimientos',
            'Hacia adelante desde los requerimientos',
          ],
          correctIndex: 2,
          explain:
            'La hacia atrás hasta los requerimientos: cada comportamiento del software refiere explícitamente a los requerimientos satisfechos.',
        },
      ],
      ms: [
        {
          id: 'ms-5-1',
          q: '¿Cuáles de los siguientes son tipos de trazabilidad mencionados en el apunte?',
          options: [
            'Trazabilidad hacia atrás desde los requerimientos',
            'Trazabilidad hacia adelante hasta los requerimientos',
            'Trazabilidad hacia atrás hasta los requerimientos',
            'Trazabilidad hacia adelante desde los requerimientos',
            'Trazabilidad lateral entre requerimientos',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Los cuatro tipos canónicos son los dos pares: hacia atrás/hacia adelante combinados con desde/hasta los requerimientos. La "lateral" no aparece en el apunte.',
        },
        {
          id: 'ms-5-2',
          q: '¿Qué afirmaciones sobre trazabilidad remota y futura son correctas?',
          options: [
            'La remota referencia el origen o fuente del requerimiento',
            'La futura apunta a las fases posteriores del desarrollo',
            'Para la trazabilidad futura, cada requerimiento necesita una referencia o nombre único',
            'La remota pierde importancia cuando el sistema entra en operación y mantenimiento',
            'Ambas parten del SRS como documento de referencia',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'La remota GANA importancia en operación y mantenimiento, no la pierde — porque al modificar diseño o código hay que identificar los requerimientos afectados.',
        },
        {
          id: 'ms-5-3',
          q: '¿Cuáles de estas correspondencias entre tipo de trazabilidad y lo que permite son correctas?',
          options: [
            'Hacia atrás desde los requerimientos → conocer por qué cada requerimiento existe',
            'Hacia adelante hasta los requerimientos → los documentos previos al SRS pueden referenciarse al SRS',
            'Hacia atrás hasta los requerimientos → cada comportamiento del software refiere explícitamente los requerimientos que satisface',
            'Hacia adelante desde los requerimientos → entender qué componentes del software satisfacen cada requerimiento',
            'Hacia adelante desde los requerimientos → conocer el origen del requerimiento',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. La última es falsa: conocer el origen lo permite la hacia atrás DESDE los requerimientos.',
        },
        {
          id: 'ms-5-4',
          q: '¿Qué cosas son ciertas sobre el SRS y su rol en la trazabilidad?',
          options: [
            'Es el Software Requirement Specification',
            'Es el punto de partida de la trazabilidad',
            'Permite referenciar requerimientos en futuras etapas del desarrollo',
            'Sirve para identificar requerimientos afectados ante cambios en diseño o código',
            'Es opcional y solo se usa en proyectos chicos',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'El SRS es la base de la trazabilidad y se vuelve fundamental para mantenimiento; no es opcional ni depende del tamaño del proyecto.',
        },
        {
          id: 'ms-5-5',
          q: 'Según la tabla de tipos de trazabilidad del apunte, ¿cuáles afirmaciones sobre el eje <strong>hacia atrás</strong> son correctas?',
          options: [
            'La trazabilidad hacia atrás <em>desde</em> los requerimientos permite conocer por qué cada requerimiento del SRS existe',
            'La trazabilidad hacia atrás <em>hasta</em> los requerimientos implica que cada comportamiento del software refiere explícitamente a los requerimientos que satisface',
            'Ambas variantes \'hacia atrás\' apuntan a fases posteriores al SRS',
            'La trazabilidad hacia atrás <em>desde</em> los requerimientos permite entender qué componentes del software satisfacen cada requerimiento',
            'La trazabilidad hacia atrás <em>hasta</em> los requerimientos permite referenciar documentos previos al SRS desde el propio SRS',
          ],
          correctIndexes: [0, 1],
          explain:
            'Según la tabla: la <strong>hacia atrás desde los requerimientos</strong> (opción 0) sirve para conocer por qué existe cada requerimiento; la <strong>hacia atrás hasta los requerimientos</strong> (opción 1) garantiza que cada comportamiento del software referencie los requerimientos que satisface. La opción 2 es falsa: ambas variantes \'hacia atrás\' se mueven hacia fases <em>previas</em>, no posteriores. La opción 3 corresponde a la \'hacia adelante desde los requerimientos\', no a la hacia atrás. La opción 4 mezcla definiciones: los documentos previos referenciándose al SRS corresponde a \'hacia adelante <em>hasta</em> los requerimientos\'.',
        },
        {
          id: 'ms-5-6',
          q: '¿Cuáles de estas afirmaciones sobre el momento y las condiciones en que la trazabilidad es más relevante son correctas según el apunte?',
          options: [
            'La trazabilidad remota cobra más importancia cuando el producto pasa a ser operado y mantenido',
            'Para que la trazabilidad futura sea viable, cada requerimiento debe tener un nombre o referencia única',
            'La trazabilidad se vuelve fundamental al llevar a cabo modificaciones en el diseño o el código, para identificar los requerimientos afectados',
            'La trazabilidad solo es relevante durante la fase de elicitación de requerimientos, antes de redactar el SRS',
            'La trazabilidad futura es la que permite referenciar el origen o fuente del requerimiento',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las opciones 0, 1 y 2 son afirmaciones textuales del apunte: la remota gana peso en operación/mantenimiento; la futura requiere identificador único por requerimiento; y la trazabilidad es clave al modificar diseño o código para localizar los requerimientos impactados. La opción 3 es falsa: la relevancia no se limita a la elicitación, es transversal a todo el ciclo. La opción 4 invierte las definiciones: la que referencia el <em>origen</em> es la trazabilidad <strong>remota</strong>, no la futura.',
        },
        {
          id: 'ms-5-7',
          q: '¿Cuáles tipos de trazabilidad implican que algo externo al SRS <strong>apunta hacia</strong> el SRS o hacia los requerimientos como destino?',
          options: [
            'Trazabilidad hacia adelante <em>hasta</em> los requerimientos',
            'Trazabilidad hacia atrás <em>hasta</em> los requerimientos',
            'Trazabilidad hacia adelante <em>desde</em> los requerimientos',
            'Trazabilidad hacia atrás <em>desde</em> los requerimientos',
            'Trazabilidad remota',
          ],
          correctIndexes: [0, 1],
          explain:
            'El eje \'hasta los requerimientos\' indica que el destino de la referencia son los requerimientos: en la <strong>hacia adelante hasta</strong> (opción 0), los documentos que preceden al SRS pueden referenciarse <em>al</em> SRS; en la <strong>hacia atrás hasta</strong> (opción 1), cada comportamiento del software refiere explícitamente los requerimientos que satisface. En los tipos \'desde los requerimientos\' (opciones 2 y 3), el punto de partida es el requerimiento mismo, no el destino. La trazabilidad remota (opción 4) es una categoría distinta que el apunte no ubica dentro de los cuatro tipos de la tabla.',
        },
        {
          id: 'ms-5-8',
          q: 'Sobre la trazabilidad <strong>hacia adelante</strong> en sus dos variantes, ¿cuáles afirmaciones son correctas según el apunte?',
          options: [
            'La \'hacia adelante desde los requerimientos\' permite entender cuáles componentes del software satisfacen cada requerimiento',
            'La \'hacia adelante hasta los requerimientos\' permite que todos los documentos que preceden al SRS puedan referenciarse al SRS',
            'Ambas variantes \'hacia adelante\' se orientan hacia fases posteriores al SRS',
            'La \'hacia adelante desde los requerimientos\' apunta hacia las fases previas para trazar el origen del requerimiento',
            'La \'hacia adelante hasta los requerimientos\' requiere que cada requerimiento tenga una referencia única para funcionar',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las opciones 0 y 1 son definiciones textuales de la tabla. La opción 2 es correcta: \'hacia adelante\' en ambas variantes implica moverse hacia fases posteriores al SRS. La opción 3 es falsa: apuntar hacia fases previas para trazar el origen corresponde a la \'hacia atrás <em>desde</em> los requerimientos\', no a la hacia adelante. La opción 4 es incorrecta según el apunte: la condición de referencia única se menciona para la <strong>trazabilidad futura</strong> en general, no exclusivamente para el tipo \'hasta los requerimientos\'.',
        },
        {
          id: 'ms-5-9',
          q: '¿Cuáles de estas afirmaciones cruzan correctamente los conceptos de trazabilidad remota/futura con los cuatro tipos de la tabla?',
          options: [
            'La trazabilidad remota y la \'hacia atrás desde los requerimientos\' comparten la idea de mirar hacia las fases previas al SRS',
            'La trazabilidad futura se relaciona con los tipos \'hacia adelante\', dado que ambos apuntan a fases posteriores al desarrollo',
            'La \'hacia adelante hasta los requerimientos\' es equivalente a la trazabilidad remota porque los dos referencian el SRS',
            'La \'hacia atrás hasta los requerimientos\' garantiza que el código o diseño explícitamente referencie los requerimientos que satisface',
            'La trazabilidad futura y la \'hacia atrás hasta los requerimientos\' son sinónimos exactos según el apunte',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Opción 0: correcta, ambas miran hacia atrás del SRS. Opción 1: correcta, la futura apunta a fases posteriores y los tipos \'hacia adelante\' también. Opción 3: correcta, esa es la definición textual de la tabla. La opción 2 es falsa: la \'hacia adelante hasta los requerimientos\' permite que documentos <em>previos</em> al SRS se referencien <em>hacia</em> el SRS, lo cual es lo opuesto a la trazabilidad remota (que parte del SRS hacia atrás). La opción 5 es falsa: la futura y la \'hacia atrás hasta\' no son sinónimos; la futura requiere identificador único y abarca fases posteriores, mientras que la \'hasta\' es uno de los cuatro tipos estructurales de la tabla.',
        },
        {
          id: 'ms-5-10',
          q: 'Al modificar el diseño de un módulo ya operativo, el equipo quiere saber qué requerimientos del SRS se ven impactados. ¿Cuáles tipos de trazabilidad del apunte les sirven <strong>directamente</strong> para eso?',
          options: [
            'Trazabilidad hacia atrás <em>hasta</em> los requerimientos, porque cada comportamiento del software refiere explícitamente los requerimientos que satisface',
            'Trazabilidad remota, porque en operación y mantenimiento cobra importancia para identificar requerimientos afectados ante cambios',
            'Trazabilidad hacia adelante <em>hasta</em> los requerimientos, porque permite que los documentos previos se referencien al SRS',
            'Trazabilidad hacia adelante <em>desde</em> los requerimientos, porque muestra qué componentes del software satisfacen cada requerimiento',
            'Trazabilidad hacia atrás <em>desde</em> los requerimientos, porque permite conocer por qué cada requerimiento existe',
          ],
          correctIndexes: [0, 1],
          explain:
            'Para identificar qué requerimientos afecta un cambio en el diseño o código, necesitás poder ir <em>desde</em> el comportamiento/componente modificado <em>hasta</em> los requerimientos: eso lo cubre la <strong>hacia atrás hasta los requerimientos</strong> (opción 0). Además, el apunte dice explícitamente que la <strong>trazabilidad remota</strong> (opción 1) cobra más importancia en operación y mantenimiento, justamente por ese escenario. La opción 2 es incorrecta para este caso: \'hacia adelante hasta\' trata documentos previos que apuntan al SRS, no el proceso inverso. La opción 3 (\'hacia adelante desde\') muestra qué componentes satisfacen un requerimiento, útil en dirección contraria. La opción 4 (\'hacia atrás desde\') explica el origen del requerimiento, no qué componentes lo implementan.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-5-1',
        front: 'SRS',
        back:
          'Software Requirement Specification — documento que recopila los requerimientos. Es el punto de partida de la trazabilidad.',
      },
      {
        id: 'fc-5-2',
        front: 'Trazabilidad remota',
        back:
          'Trazabilidad hacia las fases previas al desarrollo. Referencia el origen o fuente del requerimiento. Gana importancia cuando el sistema está en operación y mantenimiento.',
      },
      {
        id: 'fc-5-3',
        front: 'Trazabilidad futura',
        back:
          'Trazabilidad hacia las fases posteriores del desarrollo. Para que funcione, cada requerimiento necesita una referencia o nombre único.',
      },
      {
        id: 'fc-5-4',
        front: 'Hacia atrás desde los requerimientos',
        back:
          'Permite conocer por qué cada requerimiento del SRS existe (cuál fue su fuente u origen).',
      },
      {
        id: 'fc-5-5',
        front: 'Hacia adelante hasta los requerimientos',
        back:
          'Los documentos que preceden al SRS pueden referenciarse al SRS — se conecta el material previo con el requerimiento documentado.',
      },
      {
        id: 'fc-5-6',
        front: 'Hacia atrás hasta los requerimientos',
        back:
          'Cada comportamiento del software refiere explícitamente a los requerimientos que satisface.',
      },
      {
        id: 'fc-5-7',
        front: 'Hacia adelante desde los requerimientos',
        back:
          'Permite entender cuáles componentes del software satisfacen cada requerimiento.',
      },
    ],
  },

  // ---------- SECCIÓN 6 ----------
  {
    id: '6',
    unit: '9',
    title: 'Verificación, validación y pruebas de aceptación',
    criollo:
      'Verificar es preguntarse si construimos el producto correctamente; validar es preguntarse si construimos el producto correcto. La aceptación es la prueba final con el usuario y datos reales, y se basa en los requerimientos que documentamos.',
    blocks: [
      {
        type: 'h3',
        text: 'Validación vs. verificación (Boehm, 1979)',
        criollo:
          'Boehm armó la frase clásica: validación pregunta si estás haciendo el sistema que el usuario necesita; verificación pregunta si lo estás haciendo bien (conforme a la especificación).',
      },
      {
        type: 'p',
        text:
          'El desarrollo que se lleva a cabo debe formal y técnicamente ser correcto, y satisfacer los requisitos del sistema. Esta comprobación se llevará a cabo durante cada etapa del proceso de desarrollo.',
      },
      {
        type: 'p',
        text:
          'La tarea de revisión y pruebas se denomina <strong>V&amp;V</strong> (verificación y validación), e iniciará con la comprobación de los requerimientos, luego en el diseño, el código, y finalmente en el producto final que se desarrolle.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Boehm (1979): <strong>Validación</strong> = ¿Estamos construyendo el producto correcto? · <strong>Verificación</strong> = ¿Estamos construyendo el producto correctamente?',
      },
      {
        type: 'p',
        text:
          'La diferenciación primordial es que la <strong>validación</strong> se refiere a demostrar que la definición de los requerimientos que hemos generado realmente se corresponda con el sistema que el usuario o el cliente necesitan o esperan. Por ello es muy importante que el cliente valide esa especificación de requerimientos que generemos, corroborando que no contenga errores o inconsistencias.',
      },
      {
        type: 'p',
        text:
          'Por otro lado, la <strong>verificación</strong> implica comprobar que el producto de software está de acuerdo a la especificación de requerimientos que fue generada previamente.',
      },
      {
        type: 'h3',
        text: 'Prueba de aceptación',
        criollo:
          'La prueba de aceptación la hace el usuario para confirmar que el sistema se ajusta a sus requerimientos. Es de tipo caja negra (no mira el interior del código) y los casos de prueba salen directo de la especificación.',
      },
      {
        type: 'p',
        text:
          'La prueba de aceptación es realizada por los usuarios para verificar que el sistema se ajusta a sus requerimientos. Los casos de prueba se basan en la especificación de requerimientos y es una técnica de <strong>caja negra</strong>.',
      },
      {
        type: 'h3',
        text: 'Pasos del proceso de aceptación',
        criollo:
          'Hay un mini-proceso para que la aceptación salga prolija: definir roles, criterios, plan, ejecutarlo y decidir.',
      },
      {
        type: 'ul',
        items: [
          'Determinar el rol del usuario.',
          'Definir los criterios de aceptación.',
          'Desarrollar un plan de aceptación.',
          'Ejecutar el plan de aceptación.',
          'Determinar decisiones de aceptación.',
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'En la aceptación se trabaja con <strong>datos reales del cliente</strong>, no ficticios. Eso puede disparar errores que no aparecieron en pruebas anteriores (tanto en el sistema como en los requerimientos).',
      },
      {
        type: 'h3',
        text: 'Prueba de aceptación basada en los requerimientos (ISTQB)',
        criollo:
          'La definición canónica del ISTQB la trata como prueba formal contra las necesidades del usuario y los procesos comerciales. La idea no es buscar defectos, sino validar que los requerimientos están bien implementados.',
      },
      {
        type: 'p',
        text:
          'Según el <strong>International Software Testing Qualifications Board</strong> (ISTQB), las pruebas de aceptación son pruebas formales con respecto a las necesidades del usuario, los requisitos y los procesos comerciales realizados para determinar si un sistema cumple o no con los criterios de aceptación y para permitir que el usuario, los clientes u otra entidad autorizada determinen si aceptan o no el sistema.',
      },
      {
        type: 'p',
        text:
          'Cuando referenciamos las pruebas de aceptación basadas en los requerimientos, mencionamos que los requerimientos que documentamos puedan ser probados, es decir que basándose en dichos requerimientos, se diseñarán las pruebas correspondientes para comprobar si el sistema los cumple. Este tipo de prueba son <strong>pruebas de validación</strong> y no de prueba de defectos: lo que se busca es demostrar si el sistema ha implementado en forma correcta los requerimientos establecidos.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Ejemplo del apunte: si un requerimiento dice "el usuario podrá consultar los datos de un producto indicando un dato del mismo", las pruebas posibles son: buscar un producto que exista, buscar uno que no exista, y buscar con un dato que coincida con varios productos.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-6-1',
          q: 'Según Boehm, la validación pregunta "¿estamos construyendo el producto correctamente?".',
          a: false,
          explain:
            'Falso. Esa es la verificación. Validación es "¿estamos construyendo el producto correcto?".',
        },
        {
          id: 'tf-6-2',
          q: 'La prueba de aceptación es una técnica de caja blanca.',
          a: false,
          explain:
            'Falso. Es una técnica de caja negra: se basa en la especificación de requerimientos, sin mirar el interior del código.',
        },
        {
          id: 'tf-6-3',
          q: 'V&V comienza con la comprobación de los requerimientos y luego sigue por el diseño, el código y el producto final.',
          a: true,
          explain:
            'Verdadero. El apunte indica que V&V abarca todas las etapas, arrancando por los requerimientos.',
        },
        {
          id: 'tf-6-4',
          q: 'Las pruebas de aceptación basadas en los requerimientos son pruebas de defectos, no de validación.',
          a: false,
          explain:
            'Falso. Son pruebas de validación: buscan demostrar que el sistema implementa correctamente los requerimientos, no encontrar bugs nuevos.',
        },
        {
          id: 'tf-6-5',
          q: 'La prueba de aceptación se ejecuta con datos reales del cliente, no ficticios.',
          a: true,
          explain:
            'Verdadero. Por eso es importante: las diferencias entre datos reales y simulados pueden disparar errores del sistema o en los requerimientos.',
        },
      ],
      mc: [
        {
          id: 'mc-6-1',
          q: '¿Cuál es la pregunta clave de la VALIDACIÓN según Boehm?',
          options: [
            '¿Estamos construyendo el producto correctamente?',
            '¿Estamos construyendo el producto correcto?',
            '¿El código compila sin warnings?',
            '¿La cobertura de tests supera el 80%?',
          ],
          correctIndex: 1,
          explain:
            'Validación = ¿es el producto correcto? Verificación = ¿lo estamos haciendo correctamente?',
        },
        {
          id: 'mc-6-2',
          q: '¿Cuál NO es uno de los pasos del proceso de prueba de aceptación según el apunte?',
          options: [
            'Determinar el rol del usuario',
            'Definir los criterios de aceptación',
            'Auditar el código fuente de cada módulo',
            'Ejecutar el plan de aceptación',
          ],
          correctIndex: 2,
          explain:
            'El proceso es: determinar rol del usuario, definir criterios, desarrollar el plan, ejecutar el plan y determinar decisiones de aceptación. La auditoría de código no es parte de la aceptación.',
        },
        {
          id: 'mc-6-3',
          q: '¿Quién define las pruebas de aceptación según el apunte?',
          options: [
            'El International Software Testing Qualifications Board (ISTQB)',
            'La IEEE en su norma 829',
            'Microsoft Press',
            'La Asociación Argentina de Testers',
          ],
          correctIndex: 0,
          explain:
            'El apunte cita textualmente al ISTQB para la definición canónica de las pruebas de aceptación.',
        },
        {
          id: 'mc-6-4',
          q: 'Para el requerimiento "consultar datos de un producto indicando un dato", ¿cuál NO es una prueba sugerida?',
          options: [
            'Buscar un producto existente',
            'Buscar un producto inexistente',
            'Buscar un dato que coincida con varios productos',
            'Reemplazar el motor de base de datos por uno NoSQL',
          ],
          correctIndex: 3,
          explain:
            'El apunte sugiere las tres primeras. Cambiar el motor de base de datos es otra discusión técnica, no una prueba del requerimiento.',
        },
      ],
      ms: [
        {
          id: 'ms-6-1',
          q: '¿Cuáles de los siguientes son pasos del proceso de prueba de aceptación según el apunte?',
          options: [
            'Determinar el rol del usuario',
            'Definir los criterios de aceptación',
            'Desarrollar un plan de aceptación',
            'Ejecutar el plan de aceptación',
            'Refactorizar el código del módulo más crítico',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Los pasos son: determinar rol del usuario, definir criterios, desarrollar plan, ejecutar plan y determinar decisiones de aceptación. Refactorizar código no es parte del proceso.',
        },
        {
          id: 'ms-6-2',
          q: '¿Qué afirmaciones sobre validación y verificación (Boehm) son correctas?',
          options: [
            'Validación responde a "¿estamos construyendo el producto correcto?"',
            'Verificación responde a "¿estamos construyendo el producto correctamente?"',
            'La validación demuestra que la especificación se corresponde con lo que el cliente necesita',
            'La verificación comprueba que el software cumple con la especificación de requerimientos',
            'V&V solo se aplica al producto final terminado',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las cuatro primeras son textuales de Boehm. V&V se aplica en cada etapa: requerimientos, diseño, código y producto final — no solo al final.',
        },
        {
          id: 'ms-6-3',
          q: '¿Qué afirmaciones sobre la prueba de aceptación son correctas?',
          options: [
            'La realizan los usuarios',
            'Verifica que el sistema se ajusta a sus requerimientos',
            'Los casos de prueba se basan en la especificación de requerimientos',
            'Es una técnica de caja negra',
            'Se ejecuta con datos ficticios en un ambiente de laboratorio',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'La aceptación trabaja con datos REALES del cliente, no ficticios — eso puede revelar errores del sistema o de los requerimientos que no se vieron antes.',
        },
        {
          id: 'ms-6-4',
          q: 'Sobre las pruebas de aceptación basadas en los requerimientos (ISTQB), ¿qué es correcto?',
          options: [
            'Son pruebas formales contra las necesidades del usuario y los procesos comerciales',
            'Determinan si el sistema cumple o no con los criterios de aceptación',
            'Permiten que el usuario o cliente decida si acepta o no el sistema',
            'Son pruebas de validación, no de búsqueda de defectos',
            'Son pruebas de caja blanca centradas en la cobertura de código',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Son pruebas de validación, formales, basadas en requerimientos y orientadas a la aceptación. Son caja NEGRA, no caja blanca.',
        },
        {
          id: 'ms-6-5',
          q: 'Según el apunte, ¿cuáles de las siguientes afirmaciones describen <strong>correctamente</strong> la naturaleza de las pruebas de aceptación basadas en los requerimientos (definición ISTQB)?',
          options: [
            'Son pruebas formales respecto a las necesidades del usuario y los procesos comerciales',
            'Su objetivo principal es buscar y documentar defectos del sistema',
            'Permiten que el usuario, el cliente u otra entidad autorizada decida si acepta o no el sistema',
            'Se diseñan a partir de los requerimientos documentados para comprobar si el sistema los cumple',
            'Son pruebas de caja blanca centradas en la cobertura de ramas del código',
          ],
          correctIndexes: [0, 2, 3],
          explain:
            'Correctas: (0) es la definición textual del ISTQB en el apunte; (2) el apunte indica que su fin es \'permitir que el usuario, los clientes u otra entidad autorizada determinen si aceptan o no el sistema\'; (3) el apunte afirma que \'basándose en dichos requerimientos, se diseñarán las pruebas correspondientes\'. Incorrectas: (1) el apunte es explícito — son <em>pruebas de validación</em>, no de búsqueda de defectos; (5) son caja <em>negra</em>, no caja blanca.',
        },
        {
          id: 'ms-6-6',
          q: 'V&amp;V (verificación y validación) se aplica en varias etapas del proceso de desarrollo. ¿En cuáles de las siguientes etapas indica el apunte que se lleva a cabo?',
          options: [
            'Comprobación de los requerimientos',
            'El diseño',
            'Definición del modelo de negocios de la empresa',
            'El código',
            'El producto final',
          ],
          correctIndexes: [0, 1, 3, 4],
          explain:
            'El apunte dice textualmente que V&amp;V \'iniciará con la comprobación de los requerimientos, luego en el diseño, el código, y finalmente en el producto final\'. La definición del modelo de negocios no es una etapa de V&amp;V según el texto.',
        },
        {
          id: 'ms-6-7',
          q: 'En el ejemplo del apunte sobre el requerimiento \'el usuario podrá consultar los datos de un producto indicando un dato del mismo\', ¿cuáles pruebas de aceptación se mencionan <strong>explícitamente</strong>?',
          options: [
            'Buscar un producto que exista en el sistema',
            'Buscar un producto que no exista en el sistema',
            'Verificar que la base de datos devuelva resultados en menos de 200 ms',
            'Buscar con un dato que coincida con varios productos',
            'Ingresar un dato nulo para testear la robustez del motor de base de datos',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'El apunte lista exactamente tres pruebas para ese requerimiento: buscar un producto existente, buscar uno inexistente, y buscar con un dato que coincida con varios productos. Los tiempos de respuesta (opción 2) y los datos nulos (opción 4) no se mencionan en el ejemplo; son distractores plausibles pero ajenos al texto.',
        },
        {
          id: 'ms-6-8',
          q: 'Sobre la relación entre <strong>validación</strong> y la <em>especificación de requerimientos</em>, ¿qué afirmaciones del apunte son correctas?',
          options: [
            'La validación busca demostrar que la definición de requerimientos se corresponde con lo que el usuario necesita',
            'Es importante que el <em>cliente</em> valide la especificación de requerimientos para corroborar que no contenga errores ni inconsistencias',
            'La validación comprueba que el producto de software está de acuerdo a la especificación previamente generada',
            'La validación puede revelar errores en los requerimientos al usar datos reales del cliente',
            'La validación aplica técnicas de caja blanca para analizar la estructura interna del código',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Correctas: (0) el apunte define validación como \'demostrar que la definición de los requerimientos que hemos generado realmente se corresponda con el sistema que el usuario o el cliente necesitan\'; (1) el texto dice explícitamente \'es muy importante que el cliente valide esa especificación... corroborando que no contenga errores o inconsistencias\'; (3) el callout de aceptación indica que los datos reales \'pueden disparar errores... tanto en el sistema como en los requerimientos\'. Incorrecta: (2) esa es la definición de <strong>verificación</strong>, no de validación; (4) la técnica de caja blanca no aparece en ninguna parte de la sección.',
        },
        {
          id: 'ms-6-9',
          q: '¿Cuáles de las siguientes afirmaciones permiten distinguir <strong>correctamente</strong> la verificación de la validación según Boehm y el apunte?',
          options: [
            'La verificación comprueba que el software cumple con la <em>especificación de requerimientos</em> generada previamente',
            'La validación determina si el sistema está construido de forma técnicamente correcta',
            'La verificación responde a \'¿estamos construyendo el producto <em>correctamente</em>?\'',
            'Tanto verificación como validación son actividades que se ejecutan <em>únicamente</em> al finalizar el producto',
            'La validación responde a \'¿estamos construyendo el <em>producto correcto</em>?\'',
          ],
          correctIndexes: [0, 2, 4],
          explain:
            'Correctas: (0) el apunte define verificación como \'comprobar que el producto de software está de acuerdo a la especificación\'; (2) y (4) son las frases canónicas de Boehm 1979. Incorrectas: (1) esa descripción corresponde a la verificación, no a la validación — la validación apunta al \'producto correcto\', no a la corrección técnica; (3) el apunte es claro en que V&amp;V se lleva a cabo en <em>cada etapa</em> del proceso, no solo al final.',
        },
        {
          id: 'ms-6-10',
          q: '¿Cuáles de las siguientes características corresponden <strong>específicamente</strong> a la prueba de aceptación tal como la describe el apunte?',
          options: [
            'La realizan los <em>usuarios</em> del sistema',
            'Sus casos de prueba se basan en la especificación de requerimientos',
            'Se ejecuta con datos ficticios generados por el equipo de QA para evitar riesgos de privacidad',
            'Es una técnica de <strong>caja negra</strong>',
            'Uno de sus pasos es determinar las decisiones de aceptación',
          ],
          correctIndexes: [0, 1, 3, 4],
          explain:
            'Correctas: (0) \'es realizada por los usuarios\'; (1) \'los casos de prueba se basan en la especificación de requerimientos\'; (3) \'es una técnica de caja negra\'; (4) \'determinar decisiones de aceptación\' es el quinto paso explícito del proceso. Incorrecta: (2) el apunte dice lo opuesto — se trabaja con <strong>datos reales del cliente</strong>, no ficticios, precisamente porque eso puede revelar errores que las pruebas anteriores no detectaron.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-6-1',
        front: 'Validación (Boehm, 1979)',
        back:
          '¿Estamos construyendo el producto correcto? Demuestra que la especificación de requerimientos se corresponde con lo que el cliente o usuario necesita o espera.',
      },
      {
        id: 'fc-6-2',
        front: 'Verificación (Boehm, 1979)',
        back:
          '¿Estamos construyendo el producto correctamente? Comprueba que el producto de software cumple con la especificación de requerimientos generada previamente.',
      },
      {
        id: 'fc-6-3',
        front: 'V&V',
        back:
          'Tarea de revisión y pruebas (verificación y validación) que comienza con la comprobación de requerimientos y continúa con diseño, código y producto final.',
      },
      {
        id: 'fc-6-4',
        front: 'Prueba de aceptación',
        back:
          'Realizada por el usuario para verificar que el sistema se ajusta a sus requerimientos. Caja negra; los casos de prueba se basan en la especificación.',
      },
      {
        id: 'fc-6-5',
        front: 'Pasos de aceptación',
        back:
          '1) Determinar rol del usuario · 2) Definir criterios de aceptación · 3) Desarrollar plan · 4) Ejecutar plan · 5) Determinar decisiones de aceptación.',
      },
      {
        id: 'fc-6-6',
        front: 'ISTQB (definición de aceptación)',
        back:
          'Pruebas formales contra necesidades del usuario, requisitos y procesos comerciales, que determinan si el sistema cumple los criterios de aceptación.',
      },
      {
        id: 'fc-6-7',
        front: 'Aceptación basada en requerimientos',
        back:
          'Prueba de validación (no de defectos) que busca demostrar que el sistema implementó correctamente los requerimientos establecidos.',
      },
    ],
  },

  // ---------- SECCIÓN 7 ----------
  {
    id: '7',
    unit: '9',
    title: 'Estrategias de prueba y testing ágil',
    criollo:
      'La estrategia de prueba define cómo vas a testear: qué fases, qué tipos, qué criterios. Después está el testing ágil, donde el tester se integra al equipo y todos colaboran en las pruebas. La automatización de regresión es lo que sostiene la calidad en este enfoque.',
    blocks: [
      {
        type: 'h3',
        text: 'Qué define una estrategia de prueba',
        criollo:
          'Es el plan de testing: enfoque, objetivos generales, fases, clases de prueba por fase, técnicas, herramientas y cuándo terminás de probar.',
      },
      {
        type: 'p',
        text:
          'La estrategia de prueba define el enfoque que se empleará y los objetivos generales de las actividades de prueba que se llevarán a cabo. En esta definición se deben incluir las fases de prueba que se deben seguir y también qué clases de prueba se realizarán en cada una.',
      },
      {
        type: 'h3',
        text: 'Fases de prueba',
        criollo:
          'Las tres fases clásicas: unidad (módulo aislado), integración (módulos juntos) y sistema (todo, en ambiente parecido al real).',
      },
      {
        type: 'table',
        caption: 'Fases de prueba según el apunte',
        headers: ['Fase', 'Qué prueba', 'Quién/cómo'],
        rows: [
          [
            'De unidad',
            'Un módulo o componente.',
            'Generalmente lo realiza quien lo construyó.',
          ],
          [
            'De integración',
            'Respuestas de grupos de módulos interconectados.',
            'Detecta fallos en la interacción entre los componentes.',
          ],
          [
            'De sistema',
            'El sistema completo en un ambiente similar al real.',
            'Considerar que el sistema desarrollado puede ser parte de un sistema mayor.',
          ],
        ],
      },
      {
        type: 'h3',
        text: 'Tipos (opciones) de prueba',
        criollo:
          'Sobre el sistema podés correr varios tipos según lo que quieras medir: recuperación, seguridad, estrés, rendimiento, aceptación y regresión.',
      },
      {
        type: 'ul',
        items: [
          'De recuperación.',
          'De seguridad.',
          'De resistencia o stress.',
          'De rendimiento.',
          'De aceptación.',
          'De regresión.',
        ],
      },
      {
        type: 'p',
        text:
          'La estrategia debería contemplar qué técnicas y herramientas de pruebas se van a utilizar, así como los criterios de satisfacción y finalización que se emplearán. La fase de prueba se centra fundamentalmente en asegurarse que el sistema cumpla con todos los requerimientos definidos. Por ello, al determinar la estrategia de prueba, lo que se llevará a cabo y los criterios que se aplicarán para cubrir las pruebas se basarán en lo que se determinó en la definición de requisitos.',
      },
      {
        type: 'h3',
        text: 'Testing ágil',
        criollo:
          'En un equipo ágil, las pruebas no son una fase aparte: se diseñan junto con el análisis, todos en el equipo son testers, y la comunicación es continua. Incorpora técnicas como XP y el paradigma "prueba primero".',
      },
      {
        type: 'p',
        text:
          'El <strong>testing ágil</strong> es una práctica de prueba para un proyecto utilizando metodologías de desarrollo de software ágil, incorporando técnicas y métodos como la <strong>programación extrema (XP)</strong>, tratando el desarrollo como el cliente de las pruebas y enfatizando el paradigma de <strong>diseño de prueba primero</strong>, según indica el ISTQB. Las pruebas son obtenidas por el equipo de desarrollo, ya que mientras llevan a cabo el análisis, conjuntamente se van diseñando las pruebas del sistema.',
      },
      {
        type: 'p',
        text:
          'Al aplicar un desarrollo ágil, el equipo mantiene una comunicación continua entre los integrantes, definiendo los requisitos, las pruebas y el comportamiento esperado del producto. Además, se manifiesta el concepto de roles, donde se intenta que cada miembro posea un buen número de roles para eliminar la dependencia entre individuos, promoviendo siempre a todos los principios de calidad en sus actividades diarias. En este marco, en un equipo ágil <strong>todos los individuos tienen habilidades de probadores</strong>.',
      },
      {
        type: 'h3',
        text: 'El probador ágil',
        criollo:
          'No es solo un técnico de testing: integra las necesidades del cliente al equipo, traduce historias en parámetros de prueba y colabora con todos los roles.',
      },
      {
        type: 'p',
        text:
          'Un probador ágil se caracteriza por tener, además de habilidades técnicas en testing, destreza para integrar las necesidades del interesado al equipo desarrollador, definiendo las historias del usuario en requisitos y transformándolas en parámetros de prueba cuando se codifiquen. El rol de tester o probador sobresale por colaborar con todos los integrantes del equipo.',
      },
      {
        type: 'h3',
        text: 'Roles alrededor de la prueba ágil',
        criollo:
          'Tres roles clave: el tester, el interesado (que propone la solución) y el equipo ágil (los pibes que arman todo en iteraciones).',
      },
      {
        type: 'table',
        caption: 'Roles del testing ágil',
        headers: ['Rol', 'Descripción'],
        rows: [
          [
            'Tester',
            'Persona del equipo que puede desempeñar varios roles en un proyecto de software. Tiene habilidades y destrezas para el desarrollo y ejecución de pruebas.',
          ],
          [
            'Interesado',
            'Persona o entidad que se apoya en un analista con el fin de proponer una solución a un problema. Elabora el discurso de los requisitos que encamina la solución.',
          ],
          [
            'Equipo ágil',
            'Conjunto de personas expertas en áreas de software y en el dominio del negocio que trabajan orientadas hacia un mismo fin en pequeños ciclos de tiempo, llamados iteraciones.',
          ],
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'La filosofía de calidad toma forma cuando todos los miembros del equipo son probadores: <strong>desaparece la fase de pruebas</strong> que sí existía en los métodos tradicionales.',
      },
      {
        type: 'h3',
        text: 'Automatización y factor de éxito',
        criollo:
          'En testing ágil, el secreto es automatizar las pruebas de regresión (para no romper nada al cambiar algo) y también las de aceptación (para asegurar que el sistema sigue haciendo lo que el cliente pidió).',
      },
      {
        type: 'p',
        text:
          'El diseño de pruebas y el uso de las herramientas adecuadas se vuelven vitales para asegurar el principio de calidad. La planeación y el diseño de pruebas es importante a la hora de distribuir tiempo en testing particular, arreglar bugs y realizar otro tipo de pruebas (como las de aceptación, regresión, etc.).',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'El factor de éxito del testing ágil es saber automatizar las pruebas de regresión (que aseguran calidad y precisión en todo el comportamiento del sistema). Además, se deberían automatizar las pruebas de aceptación que aseguran al cliente la funcionalidad que requirió en un principio.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-7-1',
          q: 'La prueba de unidad generalmente la realiza quien construyó el componente.',
          a: true,
          explain:
            'Verdadero. El apunte lo indica explícitamente: típicamente la hace el constructor del módulo.',
        },
        {
          id: 'tf-7-2',
          q: 'En testing ágil, la fase de pruebas tradicional desaparece y todos los integrantes del equipo son probadores.',
          a: true,
          explain:
            'Verdadero. La filosofía de calidad toma forma cuando todos los miembros del equipo son probadores y no se requiere una fase separada de pruebas.',
        },
        {
          id: 'tf-7-3',
          q: 'La prueba de integración se centra en revisar un solo módulo de manera aislada.',
          a: false,
          explain:
            'Falso. La integración revisa grupos de módulos interconectados, para detectar fallos en la interacción entre componentes. La de unidad es la que prueba módulos aislados.',
        },
        {
          id: 'tf-7-4',
          q: 'El factor de éxito del testing ágil es automatizar las pruebas de regresión.',
          a: true,
          explain:
            'Verdadero. El apunte lo dice textualmente, y suma que se deberían automatizar también las pruebas de aceptación.',
        },
        {
          id: 'tf-7-5',
          q: 'Testing ágil incorpora técnicas como XP y el paradigma "diseño de prueba primero".',
          a: true,
          explain:
            'Verdadero. Según el ISTQB, el testing ágil enfatiza el diseño de prueba primero y usa técnicas de programación extrema.',
        },
      ],
      mc: [
        {
          id: 'mc-7-1',
          q: '¿Cuál de las siguientes NO es una fase de prueba según el apunte?',
          options: ['De unidad', 'De integración', 'De sistema', 'De compilación'],
          correctIndex: 3,
          explain:
            'Las fases son unidad, integración y sistema. "De compilación" no es una fase de prueba.',
        },
        {
          id: 'mc-7-2',
          q: '¿Cuál de los siguientes NO está en la lista de tipos de prueba del apunte?',
          options: ['De recuperación', 'De regresión', 'De resistencia o stress', 'De refactor'],
          correctIndex: 3,
          explain:
            'La lista del apunte: recuperación, seguridad, resistencia/stress, rendimiento, aceptación, regresión. "De refactor" no aparece.',
        },
        {
          id: 'mc-7-3',
          q: 'En el testing ágil, ¿quién es el "interesado"?',
          options: [
            'El analista que propone la solución técnica',
            'La persona o entidad que se apoya en un analista para proponer una solución a un problema',
            'El testers automatizados',
            'El usuario final con permisos de aceptación',
          ],
          correctIndex: 1,
          explain:
            'El interesado se apoya en un analista para proponer una solución; elabora el discurso de los requisitos que guía la solución.',
        },
        {
          id: 'mc-7-4',
          q: '¿Qué prueba el equipo ágil con cada miembro asumiendo varios roles?',
          options: [
            'Que todos hagan exactamente lo mismo',
            'Eliminar la dependencia entre individuos y promover los principios de calidad',
            'Reducir el número de personas del equipo',
            'Tener tester única persona especializada',
          ],
          correctIndex: 1,
          explain:
            'La rotación de roles busca eliminar la dependencia entre individuos y promover principios de calidad en las actividades diarias.',
        },
      ],
      ms: [
        {
          id: 'ms-7-1',
          q: '¿Cuáles de los siguientes son tipos de prueba listados en el apunte?',
          options: [
            'De recuperación',
            'De seguridad',
            'De resistencia o stress',
            'De rendimiento',
            'De refactor',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'La lista textual del apunte: recuperación, seguridad, resistencia/stress, rendimiento, aceptación y regresión. "De refactor" no aparece.',
        },
        {
          id: 'ms-7-2',
          q: '¿Cuáles son las fases de prueba según el apunte?',
          options: [
            'De unidad',
            'De integración',
            'De compilación',
            'De sistema',
            'De despliegue',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las fases canónicas son unidad, integración y sistema. Compilación y despliegue no son fases de prueba en el apunte.',
        },
        {
          id: 'ms-7-3',
          q: '¿Qué características tiene el testing ágil según el ISTQB y el apunte?',
          options: [
            'Incorpora técnicas como la programación extrema (XP)',
            'Enfatiza el paradigma de diseño de prueba primero',
            'Las pruebas se diseñan durante el análisis, por el equipo de desarrollo',
            'Todos los miembros del equipo poseen habilidades de probadores',
            'Mantiene una fase de pruebas tradicional separada al final del proyecto',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'En testing ágil la fase de pruebas tradicional desaparece — todos son probadores y las pruebas se integran al desarrollo, no se separan al final.',
        },
        {
          id: 'ms-7-4',
          q: 'Sobre los roles del testing ágil, ¿qué afirmaciones son correctas?',
          options: [
            'El tester es una persona del equipo con habilidades para desarrollar y ejecutar pruebas',
            'El interesado se apoya en un analista para proponer una solución a un problema',
            'El equipo ágil trabaja en pequeños ciclos de tiempo llamados iteraciones',
            'El factor de éxito del testing ágil es automatizar las pruebas de regresión',
            'El probador ágil solo se ocupa de habilidades técnicas y evita las necesidades del interesado',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'El probador ágil hace exactamente LO OPUESTO de la última opción: integra las necesidades del interesado al equipo y traduce historias de usuario en parámetros de prueba.',
        },
        {
          id: 'ms-7-5',
          q: '¿Qué elementos <strong>debe incluir</strong> la definición de una estrategia de prueba según el apunte?',
          options: [
            'Las fases de prueba que se deben seguir',
            'Las clases de prueba que se realizarán en cada fase',
            'Los criterios de satisfacción y finalización que se emplearán',
            'El diagrama de clases del sistema a probar',
            'Las técnicas y herramientas de prueba que se van a utilizar',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'El apunte dice textualmente que la estrategia debe incluir: las fases de prueba, las clases de prueba por fase, las técnicas y herramientas a utilizar, y los criterios de satisfacción y finalización. El diagrama de clases es un artefacto de diseño, no un componente de la estrategia de prueba según el texto.',
        },
        {
          id: 'ms-7-6',
          q: 'Sobre la <strong>prueba de sistema</strong>, ¿qué afirmaciones son correctas según el apunte?',
          options: [
            'Evalúa el sistema completo en un ambiente similar al real',
            'Debe contemplar que el sistema desarrollado puede ser parte de un sistema mayor',
            'Detecta fallos en la interacción entre componentes de distintos módulos',
            'Su objetivo principal es asegurarse de que el sistema cumpla con todos los requerimientos definidos',
            'Generalmente la realiza quien construyó cada módulo de forma aislada',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'La prueba de sistema evalúa el sistema completo en un ambiente similar al real (opción 0) y debe contemplar que puede ser parte de un sistema mayor (opción 1). La fase de prueba en general apunta a asegurar que el sistema cumpla todos los requerimientos (opción 3). La opción 2 describe la prueba de <em>integración</em>, no de sistema. La opción 4 describe la prueba de <em>unidad</em>.',
        },
        {
          id: 'ms-7-7',
          q: '¿Cuáles de las siguientes afirmaciones sobre el <strong>probador ágil</strong> son correctas según el apunte?',
          options: [
            'Tiene habilidades técnicas en testing',
            'Integra las necesidades del interesado al equipo desarrollador',
            'Define las historias del usuario en requisitos y las transforma en parámetros de prueba',
            'Es el único integrante del equipo con responsabilidad sobre la calidad',
            'Colabora con todos los integrantes del equipo',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'El apunte describe al probador ágil con habilidades técnicas (0), capacidad para integrar necesidades del interesado (1), transformar historias en parámetros de prueba (2) y colaborar con todos (4). La opción 3 es falsa: en el equipo ágil <em>todos</em> tienen habilidades de probadores, no hay un responsable único de calidad.',
        },
        {
          id: 'ms-7-8',
          q: '¿Cuáles de las siguientes diferencias entre testing <strong>ágil y tradicional</strong> se desprenden del apunte?',
          options: [
            'En el enfoque ágil la fase de pruebas tradicional desaparece',
            'En el enfoque ágil las pruebas se diseñan conjuntamente durante el análisis',
            'En el enfoque tradicional todos los miembros del equipo son probadores',
            'En el enfoque ágil se mantiene comunicación continua entre los integrantes del equipo',
            'En el enfoque ágil el equipo define requisitos, pruebas y comportamiento esperado del producto en conjunto',
          ],
          correctIndexes: [0, 1, 3, 4],
          explain:
            'El callout del apunte afirma que en el ágil desaparece la fase de pruebas tradicional (0). El párrafo de testing ágil indica que las pruebas se diseñan durante el análisis (1), que se mantiene comunicación continua (3) y que el equipo define conjuntamente requisitos, pruebas y comportamiento esperado (4). La opción 2 es exactamente al revés: en el <em>ágil</em> todos son probadores, no en el tradicional.',
        },
        {
          id: 'ms-7-9',
          q: 'Según el apunte, ¿qué aspectos son <strong>centrales en la planeación y diseño de pruebas</strong> dentro del testing ágil?',
          options: [
            'Distribuir el tiempo en testing particular',
            'Arreglar bugs detectados',
            'Realizar pruebas de aceptación y de regresión',
            'Reemplazar al equipo ágil por un equipo dedicado exclusivamente a QA',
            'Usar herramientas adecuadas para asegurar el principio de calidad',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'El apunte menciona explícitamente que la planeación importa para distribuir tiempo en testing particular (0), arreglar bugs (1), realizar pruebas de aceptación y regresión entre otras (2), y que el diseño de pruebas y las herramientas adecuadas son vitales para asegurar la calidad (4). La opción 3 es contraria al espíritu ágil: el apunte dice que todos los miembros del equipo son probadores, no que haya un equipo QA separado.',
        },
        {
          id: 'ms-7-10',
          q: 'En el contexto del testing ágil, ¿qué afirmaciones sobre la <strong>automatización</strong> son correctas según el apunte?',
          options: [
            'El factor de éxito del testing ágil es automatizar las pruebas de regresión',
            'Las pruebas de regresión aseguran calidad y precisión en todo el comportamiento del sistema',
            'Se deberían automatizar también las pruebas de aceptación',
            'Las pruebas de aceptación automatizadas aseguran al cliente la funcionalidad que requirió en un principio',
            'La automatización reemplaza la necesidad de criterios de satisfacción y finalización en la estrategia',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'El callout final del apunte es textual en las opciones 0, 1, 2 y 3: el factor de éxito es automatizar regresión, las pruebas de regresión aseguran calidad en todo el comportamiento, se deben automatizar las de aceptación, y estas últimas aseguran al cliente la funcionalidad requerida. La opción 4 es falsa: la automatización no reemplaza los criterios de satisfacción y finalización; el apunte trata ambos como elementos separados y necesarios de la estrategia.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-7-1',
        front: 'Estrategia de prueba',
        back:
          'Define enfoque, objetivos generales, fases de prueba a seguir, clases de prueba por fase, técnicas, herramientas y criterios de satisfacción/finalización.',
      },
      {
        id: 'fc-7-2',
        front: 'Prueba de unidad',
        back:
          'Prueba de un módulo o componente. Generalmente la realiza quien lo construyó.',
      },
      {
        id: 'fc-7-3',
        front: 'Prueba de integración',
        back:
          'Revisa las respuestas de grupos de módulos interconectados. Objetivo: detectar fallos en la interacción entre componentes.',
      },
      {
        id: 'fc-7-4',
        front: 'Prueba de sistema',
        back:
          'Prueba el sistema completo en un ambiente similar al real. Considera que el sistema puede ser parte de un sistema mayor.',
      },
      {
        id: 'fc-7-5',
        front: 'Tipos de prueba',
        back:
          'Recuperación, seguridad, resistencia/stress, rendimiento, aceptación y regresión.',
      },
      {
        id: 'fc-7-6',
        front: 'Testing ágil',
        back:
          'Práctica de prueba en proyectos ágiles. Usa XP, "diseño de prueba primero" y las pruebas las diseña el equipo durante el análisis. Todos los miembros son probadores.',
      },
      {
        id: 'fc-7-7',
        front: 'Probador ágil',
        back:
          'Además de habilidades técnicas, integra las necesidades del interesado al equipo, traduce historias de usuario en requisitos y en parámetros de prueba al codificar.',
      },
      {
        id: 'fc-7-8',
        front: 'Factor de éxito del testing ágil',
        back:
          'Automatizar las pruebas de regresión (que aseguran calidad sobre todo el comportamiento del sistema) y las pruebas de aceptación.',
      },
      {
        id: 'fc-7-9',
        front: 'Equipo ágil',
        back:
          'Conjunto de personas expertas en software y en el dominio del negocio que trabajan orientadas a un mismo fin en pequeños ciclos de tiempo (iteraciones).',
      },
    ],
  },

  // ---------- SECCIÓN 8 ----------
  {
    id: '8',
    unit: '10',
    title: 'Diagrama de secuencia y objetos del modelo de análisis',
    criollo:
      'El diagrama de secuencia muestra cómo colaboran los objetos en el tiempo para que pase algo. Generalmente lo armás para capturar el comportamiento de un caso de uso. En la etapa de análisis usás tres tipos de objetos: interfaz, entidad y control.',
    blocks: [
      {
        type: 'h3',
        text: 'Qué es un diagrama de secuencia',
        criollo:
          'La idea es mirar la interacción entre objetos desde el ángulo temporal: quién le manda qué mensaje a quién y en qué orden. Es la radiografía animada de un caso de uso.',
      },
      {
        type: 'ul',
        items: [
          'Este diagrama muestra la interacción entre los objetos desde un punto de vista temporal.',
          'Describe cómo colaboran un grupo de objetos para realizar una actividad en particular.',
          'Generalmente, atrapa el comportamiento descripto por un caso de uso en particular.',
          'Representa la secuencia de mensajes (incluyendo objeto emisor y receptor) para realizar una tarea.',
        ],
      },
      {
        type: 'h3',
        text: 'Modelo de análisis',
        criollo:
          'El modelo de análisis arranca una vez que el modelo de requerimientos está aprobado. Mira el sistema desde su estructura lógica, sin depender del ambiente de implementación. Y describe el sistema con tres tipos de objetos.',
      },
      {
        type: 'p',
        text:
          'El modelo de análisis se empieza a desarrollar una vez preparado y aprobado el modelo de requerimientos.',
      },
      {
        type: 'p',
        text:
          'El modelo estructura el sistema, independiente del ambiente de implementación actual, lo que significa que se enfoca en su estructura lógica.',
      },
      {
        type: 'p',
        text:
          'Se describe al sistema mediante tres tipos de objetos, que son los que utilizaremos en el diagrama de secuencia de esta etapa de análisis:',
      },
      {
        type: 'ul',
        items: ['Objeto de interfaz', 'Objetos de entidad', 'Objetos de control'],
      },
      {
        type: 'h3',
        text: 'Objetos de interfaz',
        criollo:
          'Son los que conectan el sistema con el actor (y al revés). Salen casi solos al leer la descripción del caso de uso: dondequiera que un actor hable con el sistema, hay una interfaz.',
      },
      {
        type: 'ul',
        items: [
          'Los casos de uso especifican la interacción del sistema con su ambiente, y esto se especifica con los objetos de interfaz.',
          'Estos objetos son los que permiten la comunicación entre los actores y el sistema, y viceversa.',
          'Se pueden identificar fácilmente por la descripción del caso de uso.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/10-objeto-interfaz.png',
        alt: 'Representación gráfica de un objeto de interfaz: un círculo con una línea vertical pequeña a la izquierda formando una "T".',
        caption: 'Objeto de interfaz — representación gráfica en UML.',
      },
      {
        type: 'h3',
        text: 'Objetos de entidad',
        criollo:
          'Modelan la información que el sistema mantiene en el tiempo: lo que sobrevive a los casos de uso. Las entidades suelen ser obvias y mapean a conceptos del mundo real (aunque no siempre).',
      },
      {
        type: 'ul',
        items: [
          'Se emplean para modelar la información que el sistema debe manejar a lo largo del tiempo.',
          'Es información que sobrevive a los casos de uso.',
          'Los objetos entidad son identificados rápidamente y suelen ser obvios.',
          'Las entidades, generalmente, se corresponden a conceptos del mundo real, aunque no siempre sucede.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/10-objeto-entidad.png',
        alt: 'Representación gráfica de un objeto de entidad: un círculo con una línea horizontal apoyada debajo.',
        caption: 'Objeto de entidad — representación gráfica en UML.',
      },
      {
        type: 'h3',
        text: 'Objetos de control',
        criollo:
          'El cajón de la funcionalidad que no es interfaz ni entidad. Operan sobre varios objetos entidad, hacen algo y devuelven resultado a una interfaz.',
      },
      {
        type: 'ul',
        items: [
          'Modelan la funcionalidad que no es asignada naturalmente a cualquier otro objeto (es ubicado en objetos de control porque no forma parte de la interfaz ni de la información a ser utilizada).',
          'El comportamiento consiste en operaciones sobre varios objetos entidad, haciendo alguna operación y retornando el resultado a un objeto de interfaz.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/10-objeto-control.png',
        alt: 'Representación gráfica de un objeto de control: un círculo con una pequeña flecha curvada en su parte superior.',
        caption: 'Objeto de control — representación gráfica en UML.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-8-1',
          q: 'El diagrama de secuencia muestra la interacción entre los objetos desde un punto de vista temporal.',
          a: true,
          explain:
            'Verdadero. Esa es la definición del apunte: el eje del diagrama es el tiempo.',
        },
        {
          id: 'tf-8-2',
          q: 'El modelo de análisis depende del ambiente de implementación actual.',
          a: false,
          explain:
            'Falso. Es justamente al revés: el modelo de análisis estructura el sistema independientemente del ambiente de implementación, enfocándose en la estructura lógica.',
        },
        {
          id: 'tf-8-3',
          q: 'Los objetos de entidad modelan información que sobrevive a los casos de uso.',
          a: true,
          explain:
            'Verdadero. Esa es su razón de ser: persistir información a lo largo del tiempo.',
        },
        {
          id: 'tf-8-4',
          q: 'Los objetos de control suelen contener funcionalidad que no encaja naturalmente en otros objetos.',
          a: true,
          explain:
            'Verdadero. Es por eso que se llaman "de control": operan sobre varias entidades y devuelven resultado a una interfaz.',
        },
        {
          id: 'tf-8-5',
          q: 'El modelo de análisis comienza a desarrollarse antes que el modelo de requerimientos.',
          a: false,
          explain:
            'Falso. Se empieza una vez preparado y aprobado el modelo de requerimientos.',
        },
      ],
      mc: [
        {
          id: 'mc-8-1',
          q: '¿Qué describe principalmente un diagrama de secuencia?',
          options: [
            'La estructura estática de las clases del sistema',
            'Cómo colaboran un grupo de objetos para realizar una actividad y la secuencia de mensajes',
            'La distribución de hardware del sistema',
            'El árbol de dependencias entre paquetes',
          ],
          correctIndex: 1,
          explain:
            'El apunte indica que describe cómo colaboran los objetos y representa la secuencia de mensajes (con emisor y receptor) para realizar una tarea.',
        },
        {
          id: 'mc-8-2',
          q: '¿Cuáles son los tres tipos de objetos del modelo de análisis usados en el diagrama de secuencia?',
          options: [
            'Cliente, servidor y base de datos',
            'Interfaz, entidad y control',
            'Front, back y middleware',
            'Singleton, factory y observer',
          ],
          correctIndex: 1,
          explain:
            'Interfaz (comunicación con actores), entidad (información persistente) y control (funcionalidad que no encaja en los otros dos).',
        },
        {
          id: 'mc-8-3',
          q: '¿Cómo se identifican fácilmente los objetos de interfaz?',
          options: [
            'Leyendo las pruebas de regresión',
            'Mirando la descripción del caso de uso',
            'Inspeccionando los nombres de las clases finales',
            'A partir del diagrama de despliegue',
          ],
          correctIndex: 1,
          explain:
            'El apunte señala que los objetos de interfaz se identifican fácilmente por la descripción del caso de uso.',
        },
        {
          id: 'mc-8-4',
          q: '¿Qué hace un objeto de control con el resultado de sus operaciones?',
          options: [
            'Lo persiste directamente en archivo plano',
            'Lo envía al kernel del sistema operativo',
            'Lo retorna a un objeto de interfaz',
            'Lo elimina al final del caso de uso',
          ],
          correctIndex: 2,
          explain:
            'El control opera sobre objetos entidad y retorna el resultado a un objeto de interfaz, según el apunte.',
        },
      ],
      ms: [
        {
          id: 'ms-8-1',
          q: '¿Qué afirmaciones sobre el diagrama de secuencia son correctas?',
          options: [
            'Muestra la interacción entre los objetos desde un punto de vista temporal',
            'Describe cómo colaboran un grupo de objetos para realizar una actividad',
            'Generalmente atrapa el comportamiento descripto por un caso de uso particular',
            'Representa la secuencia de mensajes incluyendo emisor y receptor',
            'Muestra la distribución de hardware del sistema',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. La distribución de hardware es propia del diagrama de despliegue, no del de secuencia.',
        },
        {
          id: 'ms-8-2',
          q: '¿Cuáles son los tres tipos de objetos del modelo de análisis usados en el diagrama de secuencia?',
          options: [
            'Objetos de interfaz',
            'Objetos de entidad',
            'Objetos de control',
            'Objetos de presentación',
            'Objetos de persistencia',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'En el modelo de análisis se usan tres tipos: interfaz, entidad y control. Presentación y persistencia son conceptos posteriores, propios del diseño.',
        },
        {
          id: 'ms-8-3',
          q: '¿Qué afirmaciones sobre los objetos de interfaz son correctas?',
          options: [
            'Permiten la comunicación entre los actores y el sistema, y viceversa',
            'Surgen de la interacción del sistema con su ambiente, especificada en los casos de uso',
            'Se identifican fácilmente leyendo la descripción del caso de uso',
            'Modelan información que sobrevive a los casos de uso',
            'Modelan funcionalidad que no encaja naturalmente en otros objetos',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son textuales. Sobrevivir a los casos de uso es propio de las entidades; modelar funcionalidad inubicable es propio del control.',
        },
        {
          id: 'ms-8-4',
          q: '¿Qué afirmaciones sobre los objetos de control son correctas?',
          options: [
            'Modelan funcionalidad que no se asigna naturalmente a otros objetos',
            'No forman parte de la interfaz ni de la información a ser utilizada',
            'Operan sobre varios objetos entidad',
            'Retornan el resultado de sus operaciones a un objeto de interfaz',
            'Persisten en disco la información que manejan',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. La persistencia es responsabilidad de las entidades, no del control.',
        },
        {
          id: 'ms-8-5',
          q: '¿Cuáles de las siguientes afirmaciones caracterizan <strong>correctamente</strong> al modelo de análisis según el apunte?',
          options: [
            'Se empieza a desarrollar una vez preparado y aprobado el modelo de requerimientos',
            'Estructura el sistema independientemente del ambiente de implementación actual',
            'Se enfoca en la estructura lógica del sistema',
            'Describe el sistema mediante tres tipos de objetos usados en el diagrama de secuencia',
            'Puede iniciarse en paralelo con el relevamiento de requerimientos para ganar tiempo',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las opciones 0, 1, 2 y 3 son afirmaciones textuales del apunte: el modelo arranca <em>después</em> de que el modelo de requerimientos está aprobado, es independiente del ambiente de implementación, se foca en la estructura lógica y usa tres tipos de objetos. La opción 4 es un distractor plausible pero contradice el apunte: el modelo de análisis requiere que el modelo de requerimientos esté <strong>preparado y aprobado</strong> primero.',
        },
        {
          id: 'ms-8-6',
          q: 'Sobre los <strong>objetos de entidad</strong>, ¿cuáles afirmaciones están respaldadas por el apunte?',
          options: [
            'Se emplean para modelar la información que el sistema debe manejar a lo largo del tiempo',
            'Son información que sobrevive a los casos de uso',
            'Siempre se corresponden a conceptos del mundo real sin excepción',
            'Son identificados rápidamente y suelen ser obvios',
            'Permiten la comunicación entre los actores y el sistema',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 son correctas según el apunte. La opción 2 es un distractor: el texto dice \'generalmente se corresponden a conceptos del mundo real, <em>aunque no siempre sucede</em>\', por lo que afirmar que es sin excepción es falso. La opción 4 describe a los objetos de <strong>interfaz</strong>, no de entidad.',
        },
        {
          id: 'ms-8-7',
          q: 'Un arquitecto sostiene que el diagrama de secuencia \'captura el comportamiento de un caso de uso y representa a quién le llegan los mensajes\'. ¿Cuáles puntos de esa afirmación están <strong>explícitamente</strong> respaldados por el apunte de la sección?',
          options: [
            'Generalmente atrapa el comportamiento descripto por un caso de uso en particular',
            'Representa la secuencia de mensajes incluyendo objeto emisor y receptor',
            'Modela la información persistente del sistema',
            'Muestra la interacción entre los objetos desde un punto de vista temporal',
            'Describe la distribución física de los componentes del sistema',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 están en el apunte de forma textual. La opción 2 es responsabilidad de los <strong>objetos de entidad</strong>, no del diagrama de secuencia en sí. La opción 4 pertenece al diagrama de despliegue; no aparece en esta sección.',
        },
        {
          id: 'ms-8-8',
          q: 'Al leer la descripción de un caso de uso para construir el diagrama de secuencia, ¿qué tipos de objeto podés identificar «fácilmente» o «rápidamente» según el apunte?',
          options: [
            'Objetos de interfaz, porque se identifican fácilmente por la descripción del caso de uso',
            'Objetos de entidad, porque son identificados rápidamente y suelen ser obvios',
            'Objetos de control, porque el apunte los marca como los más simples de detectar',
            'Objetos de interfaz, porque el caso de uso especifica la interacción del sistema con su ambiente',
            'Objetos de control, porque toda funcionalidad residual queda expuesta en el texto del caso de uso',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'El apunte dice que los objetos de interfaz \'se pueden identificar fácilmente por la descripción del caso de uso\' y que los casos de uso especifican la interacción con el ambiente (opciones 0 y 3). Los objetos de entidad \'son identificados rápidamente y suelen ser obvios\' (opción 1). El apunte <strong>no</strong> dice que los objetos de control sean los más fáciles de detectar (opción 2 falsa); de hecho los define como lo que no encaja en los otros dos. La opción 4 también es falsa: el control se infiere por exclusión, no porque quede expuesto en el texto.',
        },
        {
          id: 'ms-8-9',
          q: 'Respecto a los <strong>objetos de control</strong>, ¿cuáles afirmaciones son consistentes con el apunte?',
          options: [
            'Modelan funcionalidad que no es asignada naturalmente a ningún otro objeto',
            'No forman parte de la interfaz ni de la información a ser utilizada',
            'Su comportamiento consiste en operaciones sobre varios objetos entidad',
            'Retornan el resultado de sus operaciones directamente al actor externo sin pasar por un objeto de interfaz',
            'Retornan el resultado a un objeto de interfaz',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las opciones 0, 1, 2 y 4 son afirmaciones textuales del apunte. La opción 3 es el distractor clave: el apunte indica que el resultado se retorna a un <strong>objeto de interfaz</strong>, no directamente al actor. El actor interactúa con el sistema a través de los objetos de interfaz, no de control.',
        },
        {
          id: 'ms-8-10',
          q: '¿Cuáles de estas afirmaciones representan <strong>diferencias reales</strong> entre los tres tipos de objetos del modelo de análisis, según el apunte?',
          options: [
            'Solo los objetos de interfaz median la comunicación entre actores y el sistema',
            'Solo los objetos de entidad modelan información que persiste más allá de un caso de uso',
            'Los objetos de control pueden modelar información persistente cuando no hay entidades disponibles',
            'Los objetos de control operan sobre entidades y devuelven resultado a una interfaz, nunca al revés',
            'Los objetos de interfaz y de entidad cubren toda la funcionalidad del sistema; el control es opcional',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Opción 0: correcto, la comunicación con actores es exclusiva de los objetos de interfaz. Opción 1: correcto, la información persistente es exclusiva de las entidades (\'sobrevive a los casos de uso\'). Opción 3: correcto, el flujo del apunte es entidades → control → interfaz; el apunte nunca invierte ese flujo. Opción 2 es falsa: el control <em>no</em> modela información persistente; eso lo hacen las entidades. Opción 4 es falsa: el control modela funcionalidad que no encaja en los otros dos, por lo que no es opcional, y el apunte no dice que interfaz + entidad cubran toda la funcionalidad.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-8-1',
        front: 'Diagrama de secuencia',
        back:
          'Diagrama UML que muestra la interacción entre objetos desde un punto de vista temporal. Describe cómo colaboran para una actividad y la secuencia de mensajes (emisor y receptor).',
      },
      {
        id: 'fc-8-2',
        front: 'Cuándo se usa el diagrama de secuencia',
        back:
          'Generalmente para capturar el comportamiento descripto por un caso de uso en particular.',
      },
      {
        id: 'fc-8-3',
        front: 'Modelo de análisis',
        back:
          'Se desarrolla luego de aprobar el modelo de requerimientos. Estructura el sistema desde su lógica, independiente del ambiente de implementación. Usa tres tipos de objetos: interfaz, entidad y control.',
      },
      {
        id: 'fc-8-4',
        front: 'Objeto de interfaz',
        back:
          'Permite la comunicación entre actores y sistema en ambos sentidos. Se identifica leyendo la descripción del caso de uso.',
      },
      {
        id: 'fc-8-5',
        front: 'Objeto de entidad',
        back:
          'Modela información que el sistema debe manejar a lo largo del tiempo (sobrevive a los casos de uso). Suele mapear a conceptos del mundo real.',
      },
      {
        id: 'fc-8-6',
        front: 'Objeto de control',
        back:
          'Modela funcionalidad que no es interfaz ni información. Opera sobre objetos entidad y retorna el resultado a un objeto de interfaz.',
      },
    ],
  },

  // ---------- SECCIÓN 9 ----------
  {
    id: '9',
    unit: '10',
    title: 'Línea de vida, mensajes, actividad, recursión, condición e iteración',
    criollo:
      'Estos son los ladrillos visuales del diagrama de secuencia. Cada objeto tiene su línea de vida (vertical). Los mensajes son flechas que mandan de un objeto a otro, leyéndolas de arriba hacia abajo. Los rectángulos sobre la línea indican que el objeto está activo. Y hay notaciones para recursión, condición e iteración.',
    blocks: [
      {
        type: 'h3',
        text: 'Línea de vida',
        criollo:
          'Cada objeto del diagrama tiene una línea vertical punteada hacia abajo que representa su existencia en el tiempo.',
      },
      {
        type: 'p',
        text:
          'Cada objeto posee una línea vertical por debajo denominada <strong>línea de vida</strong>.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/10-linea-de-vida.png',
        alt: 'Cuatro objetos (un actor y tres objetos del modelo de análisis: interfaz, control y entidad) con líneas de vida verticales punteadas hacia abajo.',
        caption: 'Línea de vida: cada objeto se acompaña de su línea vertical en el tiempo.',
      },
      {
        type: 'h3',
        text: 'Mensajes',
        criollo:
          'El mensaje es una flecha del emisor al receptor. Lo importante: el orden temporal está dado por la altura — flecha más arriba, mensaje más temprano. Y cada flecha lleva el nombre del mensaje (puede incluir parámetros, restricciones, retorno).',
      },
      {
        type: 'ul',
        items: [
          'Cada mensaje es representado por una flecha desde el emisor al receptor.',
          'El orden temporal en el cual van ocurriendo los mensajes está dado por cuán arriba está la flecha. Las flechas más altas se ejecutan antes que las que están debajo.',
          'Cada flecha debe llevar el nombre del mensaje (puede incluir parámetros, restricciones, valor de retorno).',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/10-mensajes-ejemplo.png',
        alt: 'Ejemplo con un actor que envía Mensaje 1 a un objeto de interfaz, este envía Mensaje 2 a un objeto de control y este Mensaje 3 a un objeto de entidad.',
        caption: 'Ejemplo de mensajes: la flecha más alta se ejecuta primero.',
      },
      {
        type: 'h3',
        text: 'Período de actividad',
        criollo:
          'Cuando un objeto está ejecutando algo, lo marcás con un rectángulo (vertical) sobre su línea de vida. Es el tiempo que está "encendido".',
      },
      {
        type: 'p',
        text:
          'Los diagramas de secuencia permiten representar <strong>períodos de actividad</strong> del objeto, que es el tiempo que tarda un objeto para ejecutar una acción.',
      },
      {
        type: 'p',
        text:
          'Los períodos de actividad son representados por espacios rectangulares sobre la línea de vida.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/10-periodo-actividad.png',
        alt: 'Mismo ejemplo de mensajes pero ahora con rectángulos verticales sobre las líneas de vida indicando el tiempo en que cada objeto está activo.',
        caption: 'Período de actividad: rectángulo sobre la línea de vida del objeto.',
      },
      {
        type: 'h3',
        text: 'Mensajes recursivos',
        criollo:
          'Cuando un objeto se manda un mensaje a sí mismo, se nota duplicando el rectángulo de actividad. Visualmente el objeto aparece "varias veces activado".',
      },
      {
        type: 'p',
        text:
          'La transmisión de mensajes recursivos es representada por la duplicación de un rectángulo.',
      },
      {
        type: 'p',
        text:
          'Los objetos aparecen como si fueran varias veces activados.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/10-mensajes-recursivos.png',
        alt: 'Objeto de control con un rectángulo de actividad y, encima, un rectángulo duplicado con una flecha curva que vuelve sobre sí mismo.',
        caption: 'Mensajes recursivos: rectángulo duplicado sobre la línea de vida.',
      },
      {
        type: 'h3',
        text: 'Condición',
        criollo:
          'Si el mensaje solo se manda cuando algo es verdadero, ponés la condición entre corchetes adelante del nombre del mensaje. Se puede escribir en lenguaje coloquial.',
      },
      {
        type: 'p',
        text:
          'El diagrama de secuencia permite representar una condición. Solo si la condición es verdadera se ejecuta el mensaje. La condición puede escribirse en lenguaje coloquial, por ej.: <code>[hay producto]</code>.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/10-condicion.png',
        alt: 'Diagrama con dos flechas saliendo de un mismo objeto de control: una etiquetada [hay producto] Mensaje hacia un objeto y otra [no hay producto] Mensaje hacia otro.',
        caption: 'Condición: el mensaje se etiqueta con [condición] y solo se ejecuta si es verdadera.',
      },
      {
        type: 'h3',
        text: 'Iteración',
        criollo:
          'Si querés que la acción se repita mientras se cumpla una condición, antepones un asterisco. Notación: <code>*[condición] Mensaje</code>.',
      },
      {
        type: 'p',
        text:
          'La iteración puede notarse con el símbolo <code>*</code> previo a la condición, lo que significa que se repetirá la acción mientras la condición sea verdadera.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/10-iteracion.png',
        alt: 'Flecha de un objeto de control a un objeto entidad etiquetada *[condición] Mensaje.',
        caption: 'Iteración: el símbolo * antes de la condición indica repetición mientras se cumpla.',
      },
      {
        type: 'h3',
        text: 'Ejemplo completo (Conallen, 1999)',
        criollo:
          'Un diagrama armado de punta a punta para un caso de uso de checkout en una tienda online. Mostrá cómo todos los elementos vistos se combinan: actores, interfaces, control, entidades, mensajes con orden, períodos de actividad e iteración sobre los ítems del carrito.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/10-ejemplo-secuencia.jpeg',
        alt: 'Diagrama de secuencia completo: Online Customer, Shopping Cart, Checkout, Cart, Cart Item, Order Summary y Process Order, con mensajes numerados de 1 a 12 (Check out, Get items, Get item props, Subtotal, Tax, Shipping, Total, Build summary, Display, Confirm, Process).',
        caption: 'Ejemplo elaborado durante el análisis. Extraído de J. Conallen (1999), Building Web Applications with UML, Addison Wesley, Cap. 9.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-9-1',
          q: 'El orden temporal de los mensajes en un diagrama de secuencia está dado por la altura: las flechas más altas se ejecutan antes.',
          a: true,
          explain:
            'Verdadero. Esa es la convención: leés de arriba hacia abajo.',
        },
        {
          id: 'tf-9-2',
          q: 'Cada flecha de mensaje debe llevar al menos su nombre, y puede incluir parámetros, restricciones y valor de retorno.',
          a: true,
          explain:
            'Verdadero. El apunte lo indica explícitamente.',
        },
        {
          id: 'tf-9-3',
          q: 'Los períodos de actividad se representan con cuadrados sobre los nombres de los objetos.',
          a: false,
          explain:
            'Falso. Se representan como espacios rectangulares sobre la línea de vida del objeto, no sobre el nombre.',
        },
        {
          id: 'tf-9-4',
          q: 'Un mensaje condicional solo se ejecuta si la condición entre corchetes es verdadera.',
          a: true,
          explain:
            'Verdadero. Notación: <code>[condición] Mensaje</code>. La condición puede escribirse en lenguaje coloquial.',
        },
        {
          id: 'tf-9-5',
          q: 'La iteración se nota con el símbolo "+" antes del nombre del mensaje.',
          a: false,
          explain:
            'Falso. El símbolo es "<code>*</code>" antes de la condición: <code>*[condición] Mensaje</code>.',
        },
      ],
      mc: [
        {
          id: 'mc-9-1',
          q: '¿Qué representa la línea vertical por debajo de cada objeto?',
          options: [
            'El stack de llamadas a métodos',
            'La línea de vida del objeto',
            'La cantidad de memoria reservada',
            'La traza de excepciones',
          ],
          correctIndex: 1,
          explain:
            'Es la línea de vida: representa la existencia del objeto en el tiempo dentro del diagrama.',
        },
        {
          id: 'mc-9-2',
          q: '¿Cómo se grafican los mensajes recursivos?',
          options: [
            'Con dos flechas paralelas',
            'Duplicando el rectángulo de actividad sobre la misma línea de vida',
            'Con una nube de pensamiento',
            'Con un asterisco doble (**)',
          ],
          correctIndex: 1,
          explain:
            'La duplicación del rectángulo indica que el objeto se "auto-activa", como si estuviera varias veces activado.',
        },
        {
          id: 'mc-9-3',
          q: '¿Cuál es la notación correcta para una iteración condicional?',
          options: [
            '<code>[condición] Mensaje*</code>',
            '<code>*[condición] Mensaje</code>',
            '<code>loop(condición) Mensaje</code>',
            '<code>while [condición] Mensaje</code>',
          ],
          correctIndex: 1,
          explain:
            'El símbolo <code>*</code> va previo a la condición, e indica que la acción se repite mientras la condición sea verdadera.',
        },
        {
          id: 'mc-9-4',
          q: '¿Qué incluye el "período de actividad" de un objeto?',
          options: [
            'El tiempo que tarda en compilar',
            'El tiempo que tarda el objeto para ejecutar una acción',
            'El intervalo entre dos sesiones del sistema',
            'La duración del caso de uso completo',
          ],
          correctIndex: 1,
          explain:
            'Es exactamente el tiempo que el objeto se mantiene activo ejecutando una acción.',
        },
      ],
      ms: [
        {
          id: 'ms-9-1',
          q: '¿Qué afirmaciones sobre los mensajes son correctas?',
          options: [
            'Se representan con una flecha desde el emisor al receptor',
            'El orden temporal está dado por la altura: más alto, más temprano',
            'Cada flecha debe llevar el nombre del mensaje',
            'Pueden incluir parámetros, restricciones y valor de retorno',
            'El orden se determina con una numeración explícita sobre cada flecha',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. La numeración explícita es propia del diagrama de colaboración, no del de secuencia.',
        },
        {
          id: 'ms-9-2',
          q: '¿Qué afirmaciones sobre el período de actividad son correctas?',
          options: [
            'Es el tiempo que tarda un objeto en ejecutar una acción',
            'Se representa con espacios rectangulares sobre la línea de vida',
            'Cada objeto tiene su línea de vida propia',
            'La línea de vida es una línea vertical por debajo del objeto',
            'Se grafica con un círculo sobre el nombre del objeto',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. La actividad se grafica con rectángulos sobre la línea de vida, no con círculos sobre el nombre.',
        },
        {
          id: 'ms-9-3',
          q: '¿Qué afirmaciones sobre condición e iteración son correctas?',
          options: [
            'Una condición se escribe entre corchetes antes del nombre del mensaje',
            'La condición puede escribirse en lenguaje coloquial (ej.: <code>[hay producto]</code>)',
            'Solo si la condición es verdadera se ejecuta el mensaje',
            'La iteración se nota con el símbolo <code>*</code> previo a la condición',
            'La iteración se nota con el símbolo <code>+</code> al final del mensaje',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El símbolo de iteración es <code>*</code> antes de la condición, no <code>+</code>.',
        },
        {
          id: 'ms-9-4',
          q: '¿Qué afirmaciones sobre los mensajes recursivos son correctas?',
          options: [
            'Son mensajes que un objeto se manda a sí mismo',
            'Se representan duplicando un rectángulo de actividad',
            'Visualmente, el objeto aparece como si estuviera varias veces activado',
            'Requieren una numeración especial separada',
            'Se grafican con una nube sobre la línea de vida',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son textuales del apunte. No hay numeración especial ni nubes; la recursión se ve por el rectángulo duplicado.',
        },
        {
          id: 'ms-9-5',
          q: 'Sobre la <strong>línea de vida</strong> en un diagrama de secuencia, ¿cuáles afirmaciones son correctas según el apunte?',
          options: [
            'Es una línea vertical punteada que corre por debajo de cada objeto',
            'Representa la existencia del objeto en el tiempo dentro del diagrama',
            'Es compartida entre varios objetos cuando colaboran en un mismo mensaje',
            'Cada objeto posee su propia línea de vida independiente',
            'Es una línea horizontal que conecta al actor con los objetos del modelo',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'El apunte establece que la línea de vida es la \'línea vertical por debajo\' de cada objeto (opción 0), que representa su existencia en el tiempo (opción 1), y que \'cada objeto posee una línea de vida\' propia (opción 3). La opción 2 es incorrecta: cada objeto tiene su línea individual, no se comparten. La opción 4 invierte la orientación: es vertical, no horizontal.',
        },
        {
          id: 'ms-9-6',
          q: 'Un diseñador afirma varias cosas sobre los <strong>períodos de actividad</strong>. ¿Cuáles son correctas según el apunte?',
          options: [
            'Representan el tiempo que tarda un objeto en ejecutar una acción',
            'Se grafican como espacios rectangulares sobre la línea de vida',
            'Se grafican como flechas bidireccionales entre objetos activos',
            'Los diagramas de secuencia permiten representar períodos de actividad',
            'Un objeto puede tener a lo sumo un único período de actividad por diagrama',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 son textuales del apunte: el período de actividad es \'el tiempo que tarda un objeto para ejecutar una acción\', se representa con \'espacios rectangulares sobre la línea de vida\' y los diagramas de secuencia \'permiten representar períodos de actividad\'. La opción 2 describe mensajes, no períodos. La opción 4 es falsa: un objeto puede tener múltiples períodos de actividad (incluso duplicados en el caso recursivo).',
        },
        {
          id: 'ms-9-7',
          q: 'Sobre la notación de <strong>condición</strong> en el diagrama de secuencia, ¿cuáles afirmaciones son correctas?',
          options: [
            'La condición se escribe entre corchetes antes del nombre del mensaje',
            'El mensaje solo se ejecuta si la condición entre corchetes es verdadera',
            'La condición debe escribirse en pseudocódigo formal, nunca en lenguaje coloquial',
            'Un mismo objeto de control puede emitir mensajes con condiciones diferentes hacia distintos receptores',
            'La condición puede expresarse en lenguaje coloquial, como <code>[hay producto]</code>',
          ],
          correctIndexes: [0, 1, 3, 4],
          explain:
            'Las opciones 0, 1 y 4 son textuales: corchetes antes del mensaje, ejecución solo si verdadera, y el propio ejemplo del apunte es <code>[hay producto]</code> en lenguaje coloquial. La opción 3 es correcta y se infiere del diagrama de la figura: de un objeto de control salen dos flechas con condiciones <em>[hay producto]</em> y <em>[no hay producto]</em> hacia receptores distintos. La opción 2 es el distractor: el apunte dice explícitamente que \'puede escribirse en lenguaje coloquial\'.',
        },
        {
          id: 'ms-9-8',
          q: 'Comparando la notación de <strong>iteración</strong> con la de <strong>condición</strong>, ¿cuáles afirmaciones son correctas según el apunte?',
          options: [
            'En la iteración, el símbolo <code>*</code> va <em>antes</em> de la condición entre corchetes',
            'En la condición simple, el mensaje se ejecuta solo si la condición es verdadera',
            'En la iteración, la acción se repite mientras la condición sea verdadera',
            'En la condición simple, el símbolo <code>*</code> también es obligatorio para marcar el inicio',
            'La notación completa de iteración es <code>*[condición] Mensaje</code>',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las opciones 0, 1, 2 y 4 son textuales del apunte. El símbolo <code>*</code> va previo a la condición (0), indica repetición mientras sea verdadera (2), y la notación es <code>*[condición] Mensaje</code> (4); la condición simple ejecuta solo si verdadera (1). La opción 3 es el distractor: el <code>*</code> es exclusivo de la iteración; la condición simple no lo lleva.',
        },
        {
          id: 'ms-9-9',
          q: 'Sobre los <strong>mensajes recursivos</strong> y su representación visual, ¿cuáles afirmaciones son correctas según el apunte?',
          options: [
            'Se representan duplicando el rectángulo de actividad sobre la línea de vida del objeto',
            'Visualmente, el objeto aparece como si estuviera varias veces activado',
            'La duplicación del rectángulo implica que interviene un segundo objeto distinto',
            'Es un objeto que se manda un mensaje a sí mismo',
            'La notación <code>*</code> antes de la condición es la forma canónica de graficar recursión',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 son textuales: duplicación del rectángulo (0), objeto \'varias veces activado\' (1), y el mensaje lo envía el objeto a sí mismo (3). La opción 2 es falsa: no interviene otro objeto, es auto-mensaje. La opción 4 confunde iteración con recursión: <code>*[condición]</code> es para iteración, no para mensajes recursivos.',
        },
        {
          id: 'ms-9-10',
          q: 'En el <strong>ejemplo completo</strong> de la Sección 9 (Conallen, 1999), ¿cuáles afirmaciones son correctas según el apunte?',
          options: [
            'El diagrama corresponde a un caso de uso de checkout en una tienda online',
            'Participan objetos como Shopping Cart, Checkout, Cart Item y Order Summary',
            'El ejemplo fue extraído de la obra de J. Conallen, <em>Building Web Applications with UML</em>',
            'El diagrama no incluye ningún actor humano, solo objetos del sistema',
            'El ejemplo integra actores, interfaces, control, entidades, mensajes y períodos de actividad',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las opciones 0, 1 y 2 son textuales de la figura: checkout en tienda online, objetos Shopping Cart/Checkout/Cart Item/Order Summary, y la referencia bibliográfica a Conallen (1999). La opción 4 es correcta: el criollo de la sección menciona explícitamente que el ejemplo muestra \'actores, interfaces, control, entidades, mensajes con orden, períodos de actividad e iteración\'. La opción 3 es el distractor: el diagrama incluye el actor <em>Online Customer</em>.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-9-1',
        front: 'Línea de vida',
        back:
          'Línea vertical por debajo de cada objeto que representa su existencia a lo largo del diagrama.',
      },
      {
        id: 'fc-9-2',
        front: 'Mensaje',
        back:
          'Flecha del objeto emisor al receptor. Lleva el nombre del mensaje y, opcionalmente, parámetros, restricciones y valor de retorno.',
      },
      {
        id: 'fc-9-3',
        front: 'Orden temporal de mensajes',
        back:
          'Dado por la altura de la flecha: las flechas más altas se ejecutan antes que las que están debajo.',
      },
      {
        id: 'fc-9-4',
        front: 'Período de actividad',
        back:
          'Tiempo que tarda un objeto en ejecutar una acción. Se grafica como un rectángulo (espacio rectangular) sobre la línea de vida.',
      },
      {
        id: 'fc-9-5',
        front: 'Mensaje recursivo',
        back:
          'Mensaje que un objeto se envía a sí mismo. Se representa duplicando el rectángulo de actividad sobre la línea de vida.',
      },
      {
        id: 'fc-9-6',
        front: 'Condición',
        back:
          'El mensaje solo se ejecuta si la condición es verdadera. Se escribe entre corchetes antes del nombre, en lenguaje coloquial. Ej.: <code>[hay producto]</code>.',
      },
      {
        id: 'fc-9-7',
        front: 'Iteración',
        back:
          'Se nota con <code>*</code> previo a la condición: <code>*[condición] Mensaje</code>. La acción se repite mientras la condición sea verdadera.',
      },
    ],
  },

  // ---------- SECCIÓN 10 ----------
  {
    id: '10',
    unit: '10',
    title: 'Diagrama de colaboración y diagramas de interacción',
    criollo:
      'El diagrama de colaboración cuenta la misma historia que el de secuencia, pero con otra estética. En lugar de mostrar el tiempo con la altura, dibuja los objetos únicos conectados por links y numera los mensajes para indicar el orden. Ambos son "diagramas de interacción" y elegís el que prefieras.',
    blocks: [
      {
        type: 'h3',
        text: 'Diagrama de colaboración: misma info, otra forma',
        criollo:
          'La info es la misma; cambia el formato. Los objetos aparecen una sola vez y se conectan con links. Los mensajes van sobre los links y se numeran (1, 2, 3...) para indicar la secuencia. Iteración y condición se notan igual que en secuencia.',
      },
      {
        type: 'ul',
        items: [
          'Muestran la misma información que un diagrama de secuencia.',
          'La diferencia es gráfica: los objetos se representan únicos con <strong>links</strong> entre ellos y sobre los mismos los mensajes, pero aquí es necesario <strong>numerar los mensajes</strong> para indicar la secuencia de ejecución.',
          'La selección (condición) y la iteración se denotan de igual manera que en el diagrama de secuencia.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/10-ejemplo-colaboracion.jpeg',
        alt: 'Diagrama de colaboración con OnlineCustomer, ShoppingCart, Checkout, Cart, CartItem, OrderSummary y ProcessOrder conectados por links, con mensajes numerados 1 a 12 (Checkout, Get items, Get item properties, Subtotal, Tax, Shipping, Total, Build summary, Display, Confirm, Display).',
        caption: 'Ejemplo de diagrama de colaboración. Extraído de J. Conallen (1999), Building Web Applications with UML, Addison Wesley, Cap. 9.',
      },
      {
        type: 'h3',
        text: 'Diagramas de interacción: secuencia o colaboración',
        criollo:
          'Estos dos diagramas son las dos formas que UML te ofrece para modelar la interacción entre objetos. Se les llama, en conjunto, "diagramas de interacción", y el usuario elige cuál usar según le convenga.',
      },
      {
        type: 'p',
        text:
          'Existen dos tipos de diagramas de interacción:',
      },
      {
        type: 'ul',
        items: ['Diagramas de secuencia', 'Diagramas de colaboración'],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'El usuario elige cuál desea emplear. Ambos describen lo mismo desde ángulos distintos: secuencia enfatiza el tiempo (altura de las flechas), colaboración enfatiza la estructura (links entre objetos).',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-10-1',
          q: 'El diagrama de colaboración muestra la misma información que el diagrama de secuencia.',
          a: true,
          explain:
            'Verdadero. Lo que cambia es la representación gráfica, no la información.',
        },
        {
          id: 'tf-10-2',
          q: 'En el diagrama de colaboración no es necesario numerar los mensajes porque el orden se infiere de la altura.',
          a: false,
          explain:
            'Falso. Es justamente al revés: como en colaboración no hay eje temporal, se requiere numerar los mensajes para indicar la secuencia.',
        },
        {
          id: 'tf-10-3',
          q: 'En el diagrama de colaboración, los objetos se representan únicos y se conectan mediante links.',
          a: true,
          explain:
            'Verdadero. Esa es la diferencia gráfica con el de secuencia: objetos únicos + links como soporte de los mensajes.',
        },
        {
          id: 'tf-10-4',
          q: 'La selección (condición) y la iteración se denotan de manera diferente en el diagrama de colaboración respecto del de secuencia.',
          a: false,
          explain:
            'Falso. El apunte indica que se denotan de igual manera en ambos diagramas.',
        },
        {
          id: 'tf-10-5',
          q: 'Existen dos tipos de diagramas de interacción: secuencia y colaboración, y el usuario elige cuál emplear.',
          a: true,
          explain:
            'Verdadero. Ambos pertenecen a la familia "diagramas de interacción".',
        },
      ],
      mc: [
        {
          id: 'mc-10-1',
          q: '¿Cuál es la principal diferencia entre el diagrama de secuencia y el de colaboración?',
          options: [
            'Sus contenidos son completamente distintos',
            'Su representación gráfica: secuencia enfatiza el tiempo; colaboración, la estructura con links y mensajes numerados',
            'Uno aplica para sistemas orientados a objetos y el otro para sistemas funcionales',
            'Uno es de UML y el otro de BPMN',
          ],
          correctIndex: 1,
          explain:
            'Ambos muestran la misma información. El de secuencia ordena por altura (tiempo); el de colaboración usa links con mensajes numerados.',
        },
        {
          id: 'mc-10-2',
          q: '¿Qué se pone sobre los links en un diagrama de colaboración?',
          options: [
            'El nombre de la clase concreta',
            'El identificador del caso de uso',
            'Los mensajes (con su número de secuencia)',
            'Las precondiciones del actor',
          ],
          correctIndex: 2,
          explain:
            'Sobre los links van los mensajes, numerados para reflejar la secuencia de ejecución.',
        },
        {
          id: 'mc-10-3',
          q: '¿Cómo se denomina al conjunto formado por los diagramas de secuencia y de colaboración?',
          options: [
            'Diagramas estructurales',
            'Diagramas de implementación',
            'Diagramas de interacción',
            'Diagramas de despliegue',
          ],
          correctIndex: 2,
          explain:
            'Ambos son diagramas de interacción. El usuario elige cuál emplear según le resulte más conveniente.',
        },
      ],
      ms: [
        {
          id: 'ms-10-1',
          q: '¿Qué afirmaciones sobre el diagrama de colaboración son correctas?',
          options: [
            'Muestra la misma información que un diagrama de secuencia',
            'Los objetos se representan únicos',
            'Los objetos se conectan mediante links',
            'Sobre los links se colocan los mensajes',
            'No es necesario numerar los mensajes porque el orden se infiere de la altura',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. SÍ es necesario numerar los mensajes en colaboración: como no hay eje temporal por altura, la numeración indica la secuencia.',
        },
        {
          id: 'ms-10-2',
          q: 'Sobre la diferencia entre el diagrama de secuencia y el de colaboración, ¿qué es correcto?',
          options: [
            'Ambos muestran la misma información',
            'La diferencia es gráfica, no de contenido',
            'En secuencia, el orden está dado por la altura de las flechas',
            'En colaboración, los mensajes se numeran sobre los links',
            'En colaboración cambian las notaciones de condición e iteración',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. La selección (condición) y la iteración se denotan de la misma manera en ambos diagramas.',
        },
        {
          id: 'ms-10-3',
          q: '¿Qué afirmaciones sobre los diagramas de interacción en UML son correctas?',
          options: [
            'Son dos tipos: secuencia y colaboración',
            'El usuario elige cuál desea emplear',
            'Ambos describen la interacción entre objetos',
            'Secuencia enfatiza el tiempo y colaboración enfatiza la estructura con links',
            'Solo el de secuencia puede usarse para casos de uso',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Ambos diagramas pueden usarse para modelar interacciones de cualquier caso de uso — son intercambiables.',
        },
        {
          id: 'ms-10-4',
          q: '¿Por qué es necesario numerar los mensajes en el diagrama de colaboración?',
          options: [
            'Porque los objetos aparecen una sola vez (no se repiten por mensaje)',
            'Porque no hay eje temporal dado por la altura de las flechas',
            'Para indicar la secuencia de ejecución de los mensajes',
            'Para indicar la cantidad de parámetros que recibe cada uno',
            'Para indicar el nivel de prioridad del mensaje',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'La numeración existe porque al no haber tiempo en la altura, hay que codificar la secuencia explícitamente. No tiene relación con parámetros ni con prioridad.',
        },
        {
          id: 'ms-10-5',
          q: 'Un colega afirma que en el diagrama de colaboración \'el orden de los mensajes se deduce de su posición espacial en el diagrama, igual que la altura en el de secuencia\'. ¿Cuáles de las siguientes refutaciones son correctas según el apunte?',
          options: [
            'Es incorrecto: en colaboración no hay eje temporal dado por la altura, por lo que la secuencia se expresa numerando los mensajes',
            'Es incorrecto: los mensajes van sobre los links y su orden solo puede inferirse a partir de esa numeración explícita',
            'Es correcto parcialmente: la posición espacial de los objetos sí codifica el orden cronológico en colaboración',
            'Es incorrecto: la posición espacial de los objetos en colaboración no refleja orden cronológico alguno',
            'Es correcto: ambos diagramas usan la posición espacial para indicar el tiempo, solo cambia el eje utilizado',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Según el apunte, en el diagrama de colaboración <strong>no existe eje temporal por altura</strong>; por eso es <em>necesario numerar los mensajes</em> para indicar la secuencia de ejecución. Los mensajes se ubican sobre los links sin que su posición espacial transmita orden cronológico. Las opciones 2 y 4 son distractores: la primera invierte la lógica (sería parcialmente correcta pero confunde \'posición\' con \'numeración\'), y la última afirma una equivalencia inexistente entre ambos diagramas.',
        },
        {
          id: 'ms-10-6',
          q: '¿Cuáles de las siguientes afirmaciones describen con precisión la relación entre los diagramas de secuencia y de colaboración, según el apunte de la Sección 10?',
          options: [
            'Ambos pertenecen a la categoría \'diagramas de interacción\' en UML',
            'El diagrama de secuencia enfatiza el tiempo mediante la altura de las flechas; el de colaboración enfatiza la estructura con links entre objetos',
            'La elección entre uno y otro cambia la información que se modela sobre el sistema',
            'Son intercambiables: el usuario elige cuál emplear según le resulte conveniente',
            'El diagrama de colaboración solo puede usarse cuando hay más de dos objetos participantes',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'El apunte establece explícitamente que ambos son <strong>diagramas de interacción</strong>, que el de secuencia enfatiza el tiempo por altura y el de colaboración enfatiza la estructura via links, y que <em>el usuario elige cuál desea emplear</em>. La opción C es falsa: la diferencia es gráfica, no de contenido. La opción E es un distractor inventado sin respaldo en el texto.',
        },
        {
          id: 'ms-10-7',
          q: 'En el ejemplo de diagrama de colaboración de la Sección 10 (OnlineCustomer, ShoppingCart, Checkout, etc.), ¿cuáles de las siguientes características son consistentes con lo que el apunte describe para este tipo de diagrama?',
          options: [
            'Cada objeto aparece una única vez en el diagrama, sin repetirse por cada mensaje que envía o recibe',
            'Los mensajes están numerados (1, 2, 3...) para indicar el orden de ejecución',
            'Los mensajes se ubican sobre los links que conectan los objetos',
            'La altura a la que aparece cada objeto en el diagrama indica en qué momento del flujo participa',
            'Los links representan las relaciones estructurales o de uso entre los objetos participantes',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'El apunte indica que los objetos se representan <strong>únicos</strong> (opción A), que los mensajes se <strong>numeran</strong> para indicar la secuencia (opción B) y que van <strong>sobre los links</strong> (opción C). La opción D describe una característica del diagrama de <em>secuencia</em>, no del de colaboración. La opción E, aunque intuitiva, no está respaldada textualmente por el apunte de esta sección.',
        },
        {
          id: 'ms-10-8',
          q: '¿Cuáles de las siguientes diferencias entre el diagrama de secuencia y el de colaboración son <em>reales</em> según el apunte, y cuál es una diferencia <em>falsa</em> que actúa como distractor? Marcá solo las diferencias reales.',
          options: [
            'En secuencia el orden temporal se expresa por la altura de las flechas; en colaboración, por la numeración de los mensajes',
            'En secuencia los objetos pueden aparecer repetidos (líneas de vida); en colaboración cada objeto aparece una sola vez',
            'En colaboración la condición y la iteración se expresan con una notación distinta que en secuencia',
            'En secuencia los mensajes van sobre flechas en el eje vertical; en colaboración van sobre links entre objetos',
            'El diagrama de colaboración puede modelar interacciones que el de secuencia no puede representar',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones A, B y D reflejan diferencias explícitas del apunte: la altura vs. numeración para el orden, los objetos únicos en colaboración vs. líneas de vida en secuencia, y la ubicación de los mensajes. La opción C es <strong>falsa</strong>: el apunte dice textualmente que \'la selección (condición) y la iteración se denotan de igual manera que en el diagrama de secuencia\'. La opción E es un distractor sin respaldo: ambos son intercambiables y no hay interacciones que uno modele y el otro no.',
        },
        {
          id: 'ms-10-9',
          q: 'Según el apunte, ¿cuáles de los siguientes enunciados sobre la numeración de mensajes en el diagrama de colaboración son correctos?',
          options: [
            'La numeración es necesaria porque sin ella no habría forma de conocer el orden de ejecución de los mensajes',
            'La numeración reemplaza la función que cumple el eje temporal por altura en el diagrama de secuencia',
            'La numeración indica la cantidad de veces que un mensaje se envía durante la iteración',
            'La numeración se coloca junto al mensaje que va sobre el link entre los objetos',
            'La numeración es opcional si los links están dibujados en orden de izquierda a derecha',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones A, B y D son correctas: sin numeración no hay forma de inferir el orden (A), la numeración reemplaza al eje temporal (B), y los mensajes —con su número— van sobre los links (D). La opción C confunde numeración con notación de iteración: el apunte no dice que el número exprese cantidad de repeticiones. La opción E es falsa: el apunte no habilita ese mecanismo alternativo; la numeración es siempre necesaria.',
        },
        {
          id: 'ms-10-10',
          q: 'Un estudiante elabora las siguientes conclusiones sobre los diagramas de interacción. ¿Cuáles son correctas según el apunte de la Sección 10?',
          options: [
            '\'Puedo modelar la misma interacción con cualquiera de los dos diagramas y el resultado semántico es equivalente\'',
            '\'Si prefiero ver claramente qué objetos se relacionan estructuralmente, el diagrama de colaboración me conviene porque enfatiza los links\'',
            '\'El diagrama de secuencia es superior al de colaboración porque muestra información adicional que el de colaboración omite\'',
            '\'Para indicar una iteración en el diagrama de colaboración debo usar una notación diferente a la del de secuencia\'',
            '\'Ambos diagramas describen lo mismo desde ángulos distintos: uno enfatiza el tiempo, el otro la estructura\'',
          ],
          correctIndexes: [0, 1, 4],
          explain:
            'La conclusión A es correcta: el apunte dice que ambos muestran la misma información. B es correcta: el diagrama de colaboración enfatiza la estructura con links entre objetos. E es correcta: es una paráfrasis directa del callout del apunte (\'Ambos describen lo mismo desde ángulos distintos: secuencia enfatiza el tiempo, colaboración enfatiza la estructura\'). La conclusión C es <strong>falsa</strong>: no hay información adicional en uno respecto al otro. La conclusión D es <strong>falsa</strong>: el apunte establece explícitamente que condición e iteración se denotan <em>de igual manera</em> en ambos diagramas.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-10-1',
        front: 'Diagrama de colaboración',
        back:
          'Diagrama UML que muestra la misma información que un diagrama de secuencia, con los objetos únicos conectados por links y los mensajes numerados para indicar la secuencia.',
      },
      {
        id: 'fc-10-2',
        front: 'Diferencia secuencia vs. colaboración',
        back:
          'Secuencia: el orden se infiere de la altura de las flechas (tiempo). Colaboración: los objetos se dibujan únicos, los mensajes van sobre los links y se numeran.',
      },
      {
        id: 'fc-10-3',
        front: 'Selección e iteración en colaboración',
        back:
          'Se denotan de igual manera que en el diagrama de secuencia (condición entre corchetes, asterisco para iteración).',
      },
      {
        id: 'fc-10-4',
        front: 'Diagramas de interacción',
        back:
          'Familia UML que agrupa los diagramas de secuencia y de colaboración. El usuario elige cuál usar.',
      },
      {
        id: 'fc-10-5',
        front: 'Numeración en colaboración',
        back:
          'Es necesaria para indicar la secuencia de ejecución de los mensajes, porque el diagrama no usa el eje temporal de la altura.',
      },
    ],
  },
  // ---------- SECCIÓN 11 ----------
  {
    id: '11',
    unit: '11',
    title: 'Definiciones y tipos de sistemas',
    criollo:
      'Antes de meternos con los tipos de sistemas, fijemos dos definiciones: qué es un sistema (cualquier conjunto de cosas que laburan juntas para un fin) y qué es un sistema de información (el que le da un resultado al negocio). Después, el apunte arranca con tres tipos puntuales: tiempo real, distribuidos y embebidos.',
    blocks: [
      {
        type: 'h3',
        text: 'Definición de sistema',
        criollo:
          'La más amplia que hay: cosas relacionadas que apuntan a un mismo objetivo. Nada más, nada menos.',
      },
      {
        type: 'p',
        text:
          'Un sistema es un <strong>conjunto de elementos que se relacionan para alcanzar un fin</strong>.',
      },
      {
        type: 'h3',
        text: 'Definición de sistema de información',
        criollo:
          'Acá ya hablamos de software al servicio del negocio: junta datos, los procesa, los guarda y arma reportes para que la empresa pueda manejar sus operaciones.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          '"Un sistema de información es aquel que logra un resultado empresarial. Dicho con más detalle, un sistema de información recopila, manipula, almacena y crea reportes de información respecto de las actividades de negocio de una empresa, con el fin de ayudar a la administración de esa empresa en el manejo de las operaciones de negocios." — Schach, S. Análisis y diseño orientado a objetos con UML y el proceso unificado.',
      },
      {
        type: 'h3',
        text: 'Tipos de sistemas',
        criollo:
          'Hay un montón de clasificaciones posibles; el apunte agarra tres y se concentra en esas.',
      },
      {
        type: 'p',
        text:
          'Existen diversas clasificaciones de sistemas, pero nos enfocaremos en las siguientes:',
      },
      {
        type: 'ul',
        items: [
          'Sistemas de tiempo real',
          'Sistemas distribuidos',
          'Sistemas embebidos',
        ],
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-11-1',
          q: 'Un sistema es un conjunto de elementos que se relacionan para alcanzar un fin.',
          a: true,
          explain:
            'Verdadero. Es la definición general de sistema que da el apunte.',
        },
        {
          id: 'tf-11-2',
          q: 'Un sistema de información solo almacena datos: no los manipula ni genera reportes.',
          a: false,
          explain:
            'Falso. Según Schach, recopila, manipula, almacena y crea reportes de la información de las actividades de negocio.',
        },
        {
          id: 'tf-11-3',
          q: 'El apunte se enfoca en tres tipos de sistemas: de tiempo real, distribuidos y embebidos.',
          a: true,
          explain:
            'Verdadero. Existen otras clasificaciones, pero el material trabaja esas tres.',
        },
        {
          id: 'tf-11-4',
          q: 'El fin de un sistema de información es ayudar a la administración de la empresa en el manejo de las operaciones de negocios.',
          a: true,
          explain:
            'Verdadero. Esa es la finalidad que plantea la definición de Schach.',
        },
      ],
      mc: [
        {
          id: 'mc-11-1',
          q: '¿Cuál es la definición de sistema según el apunte?',
          options: [
            'Un programa que automatiza una tarea de negocio',
            'Un conjunto de elementos que se relacionan para alcanzar un fin',
            'Una red de computadoras conectadas físicamente',
            'Un conjunto de datos almacenados para generar reportes',
          ],
          correctIndex: 1,
          explain:
            'La definición es amplia: elementos relacionados que persiguen un fin común.',
        },
        {
          id: 'mc-11-2',
          q: 'Según Schach, ¿qué hace un sistema de información con la información de las actividades de negocio?',
          options: [
            'Solo la almacena',
            'Solo la muestra en pantalla',
            'La recopila, manipula, almacena y crea reportes',
            'La transmite a otros sistemas de tiempo real',
          ],
          correctIndex: 2,
          explain:
            'La definición enumera esas cuatro acciones, con el fin de ayudar a administrar la empresa.',
        },
        {
          id: 'mc-11-3',
          q: '¿En qué tres tipos de sistemas se enfoca el apunte?',
          options: [
            'Operativos, de aplicación y de red',
            'De tiempo real, distribuidos y embebidos',
            'Centralizados, cliente-servidor y en la nube',
            'Transaccionales, de soporte y expertos',
          ],
          correctIndex: 1,
          explain:
            'El material aclara que hay diversas clasificaciones, pero trabaja tiempo real, distribuidos y embebidos.',
        },
      ],
      ms: [
        {
          id: 'ms-11-1',
          q: '¿Qué acciones realiza un sistema de información sobre la información del negocio, según Schach?',
          options: [
            'Recopila',
            'Manipula',
            'Almacena',
            'Crea reportes',
            'Compila código fuente',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales de Schach. Compilar código no es una acción del sistema de información — es propia del entorno de desarrollo.',
        },
        {
          id: 'ms-11-2',
          q: '¿Cuáles de estos tipos de sistemas son los que enfoca el apunte?',
          options: [
            'De tiempo real',
            'Distribuidos',
            'Embebidos',
            'En la nube',
            'Cliente-servidor',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'El apunte se concentra en tiempo real, distribuidos y embebidos. Existen otras clasificaciones, pero no se trabajan en este material.',
        },
        {
          id: 'ms-11-3',
          q: '¿Qué afirmaciones sobre la definición de sistema y sistema de información son correctas?',
          options: [
            'Un sistema es un conjunto de elementos que se relacionan para alcanzar un fin',
            'Un sistema de información logra un resultado empresarial',
            'Un sistema de información ayuda a la administración a manejar las operaciones de negocios',
            'La definición de sistema de información usada en el apunte es de Schach',
            'La definición de sistema requiere que los elementos sean computadoras',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'La definición de sistema es amplia: nunca exige que los elementos sean computadoras. Las otras cuatro son textuales del apunte.',
        },
        {
          id: 'ms-11-4',
          q: 'Sobre la información que maneja un sistema de información, ¿qué es correcto?',
          options: [
            'Refiere a las actividades de negocio de la empresa',
            'Sirve al fin de manejar las operaciones del negocio',
            'Es presentada en forma de reportes para administrar',
            'Permite que el sistema responda a su entorno en tiempo dictado',
            'Es generada solo en sistemas distribuidos',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Responder al entorno en tiempo dictado es propio de los sistemas de tiempo real; ser exclusiva de sistemas distribuidos no tiene sustento en el apunte. Las primeras tres son textuales.',
        },
        {
          id: 'ms-11-5',
          q: '¿Cuáles de las siguientes afirmaciones son <strong>verdaderas</strong> respecto de la definición de <em>sistema</em> tal como la plantea el apunte?',
          options: [
            'La definición es amplia y no restringe los elementos a componentes de software',
            'Los elementos de un sistema deben relacionarse entre sí',
            'Todo sistema persigue un fin u objetivo común',
            'La definición exige que los elementos sean hardware o software',
            'Un sistema puede estar compuesto por cualquier tipo de elementos siempre que apunten a un mismo objetivo',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Según el apunte, un sistema es \'un conjunto de elementos que se relacionan para alcanzar un fin\': la definición es deliberadamente amplia (no exige computadoras ni software), requiere relación entre elementos y un fin común. La opción correcta 0, 1, 2 y 4 reflejan eso. La opción 3 es falsa porque el apunte <strong>nunca</strong> restringe los elementos a hardware o software — esa restricción no aparece en ninguna parte del texto.',
        },
        {
          id: 'ms-11-6',
          q: 'La definición de sistema de información que usa el apunte es de <strong>Schach</strong>. ¿Cuáles de estas características le corresponden <em>textualmente</em> a esa definición?',
          options: [
            'Logra un resultado empresarial',
            'Recopila información respecto de las actividades de negocio',
            'Ayuda a la administración en el manejo de las operaciones de negocios',
            'Automatiza el ciclo de desarrollo de software de la empresa',
            'Crea reportes de información de las actividades de negocio',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las opciones 0, 1, 2 y 4 son textualmente de la definición de Schach citada en el apunte. La opción 3 (\'automatiza el ciclo de desarrollo de software\') no aparece en ningún momento en esa definición ni en la sección; es un distractor plausible pero incorrecto.',
        },
        {
          id: 'ms-11-7',
          q: 'Considerá el objetivo final de un sistema de información según Schach. ¿Cuáles opciones lo describen correctamente?',
          options: [
            'Ayudar a la administración de la empresa',
            'Manejar las operaciones de negocios de la empresa',
            'Generar código fuente a partir de los datos recopilados',
            'Proveer información para la toma de decisiones operativas',
            'Compilar y distribuir software entre los empleados',
          ],
          correctIndexes: [0, 1],
          explain:
            'La definición de Schach es explícita: el fin es \'ayudar a la administración de esa empresa en el manejo de las operaciones de negocios\'. Las opciones 0 y 1 capturan exactamente eso. La opción 3 (\'toma de decisiones operativas\') suena razonable pero <strong>no está en el texto</strong> — Schach habla de manejar operaciones, no de toma de decisiones. Las opciones 2 y 4 (generar código, compilar software) no tienen ningún anclaje en la sección.',
        },
        {
          id: 'ms-11-8',
          q: 'El apunte aclara que existen <em>diversas clasificaciones</em> de sistemas. ¿Qué podés concluir de eso, combinando ese aviso con el resto del contenido de la sección?',
          options: [
            'Los tres tipos trabajados (tiempo real, distribuidos, embebidos) no son los únicos sistemas que existen',
            'El apunte elige deliberadamente tres tipos y deja afuera otros',
            'Tiempo real, distribuidos y embebidos son los únicos tipos de sistemas reconocidos por la ingeniería de software',
            'Sistemas cliente-servidor y en la nube son tipos que el apunte descarta explícitamente',
            'El foco del material está en tiempo real, distribuidos y embebidos',
          ],
          correctIndexes: [0, 1, 4],
          explain:
            'El apunte dice literalmente \'Existen diversas clasificaciones de sistemas, pero nos enfocaremos en las siguientes\', lo que implica que hay más tipos (opción 0 correcta), que hay una elección deliberada de foco (opción 1 correcta) y que el material se centra en esos tres (opción 4 correcta). La opción 2 es falsa porque afirma que <em>solo</em> existen esos tres, lo cual contradice el aviso de \'diversas clasificaciones\'. La opción 3 es falsa porque el apunte <strong>no descarta explícitamente</strong> ningún otro tipo — simplemente no los trabaja.',
        },
        {
          id: 'ms-11-9',
          q: '¿Qué diferencia <strong>conceptual clave</strong> establece el apunte entre la definición de <em>sistema</em> y la de <em>sistema de información</em>?',
          options: [
            'La definición de sistema es amplia y aplica a cualquier conjunto de elementos con un fin; la de sistema de información está orientada al contexto empresarial',
            'La definición de sistema de información incluye acciones concretas sobre datos (recopilar, manipular, almacenar, reportar); la de sistema no especifica acciones',
            'Un sistema siempre incluye hardware; un sistema de información siempre incluye software',
            'La definición de sistema de información refiere a actividades de negocio de una empresa; la de sistema no impone ese contexto',
            'La fuente de la definición de sistema es Schach; la de sistema es del apunte sin cita',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 capturan diferencias reales y ancladas en el texto: la definición general de sistema es amplia y no impone contexto empresarial ni acciones específicas, mientras que la de sistema de información (Schach) sí especifica las cuatro acciones y el contexto de negocio. La opción 2 es falsa — el apunte nunca dice que un sistema \'siempre incluye hardware\'. La opción 4 invierte la atribución: la definición de sistema de información es la que proviene de <strong>Schach</strong>, no la de sistema.',
        },
        {
          id: 'ms-11-10',
          q: 'Un estudiante afirma: «Un sistema de información es solo un sistema distribuido que almacena datos». ¿Cuáles de estos argumentos, basados <em>estrictamente</em> en el apunte, refutan esa afirmación?',
          options: [
            'Un sistema de información no necesariamente es distribuido; son clasificaciones independientes según el apunte',
            'Un sistema de información no solo almacena: también recopila, manipula y crea reportes',
            'El apunte define sistema de información sin requerir que sea de ninguno de los tres tipos (tiempo real, distribuido, embebido)',
            'Los sistemas distribuidos son un subconjunto de los sistemas de información según el apunte',
            'La definición de Schach establece que el fin de un sistema de información es empresarial, no meramente técnico',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'La afirmación del estudiante tiene dos errores: (1) restringe el sistema de información a distribuido, y (2) reduce su función a solo almacenar. La opción 0 refuta el primer error: el apunte trata \'sistemas de información\' y \'sistemas distribuidos\' como conceptos separados, sin decir que uno implique al otro. La opción 1 refuta el segundo error directamente con Schach. La opción 2 refuta ambos: la definición de sistema de información no menciona ni exige ninguno de los tres tipos. La opción 4 agrega que el fin es empresarial, lo cual va más allá de \'solo almacenar datos\'. La opción 3 es falsa: el apunte <strong>nunca</strong> establece que los sistemas distribuidos sean subconjunto de los de información — esa relación no existe en el texto.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-11-1',
        front: 'Sistema',
        back: 'Conjunto de elementos que se relacionan para alcanzar un fin.',
      },
      {
        id: 'fc-11-2',
        front: 'Sistema de información',
        back:
          'Sistema que logra un resultado empresarial: recopila, manipula, almacena y crea reportes de la información de las actividades de negocio para ayudar a administrar la empresa (Schach).',
      },
      {
        id: 'fc-11-3',
        front: 'Tipos de sistemas (apunte)',
        back: 'De tiempo real, distribuidos y embebidos.',
      },
      {
        id: 'fc-11-4',
        front: 'Fin de un sistema de información',
        back: 'Ayudar a la administración de la empresa en el manejo de las operaciones de negocios.',
      },
      {
        id: 'fc-11-5',
        front: '¿Quién define "sistema de información" en el apunte?',
        back: 'Schach, en "Análisis y diseño orientado a objetos con UML y el proceso unificado".',
      },
    ],
  },
  // ---------- SECCIÓN 12 ----------
  {
    id: '12',
    unit: '11',
    title: 'Sistemas de tiempo real',
    criollo:
      'Un sistema de tiempo real tiene que responder dentro de un plazo sí o sí: no alcanza con que el resultado sea correcto, tiene que llegar a tiempo. Por eso la predictibilidad es lo más importante. Y ojo, son más complejos de lo que parecen: cualquier cambio puede romper los tiempos sin que te des cuenta.',
    blocks: [
      {
        type: 'h3',
        text: 'Qué es un sistema de tiempo real',
        criollo:
          'Interactúa con el entorno y tiene que responder en el tiempo que le exige el problema. La ventana entre la entrada y la salida suele ser chiquita.',
      },
      {
        type: 'p',
        text:
          'Los sistemas de tiempo real son sistemas informáticos cuya capacidad de interactuar con el entorno debe ser rápida y debe responder en ese ámbito del problema en el tiempo dictado o especificado. Una característica es que el intervalo de tiempo que se requiere entre la entrada y la salida suele ser muy pequeño para ser aceptable.',
      },
      {
        type: 'p',
        text:
          'La eficiencia de estos sistemas no se basa solo en la exactitud de los resultados de cómputo, sino también en el momento en que los entrega. La <strong>predictibilidad</strong> es una característica principal de este tipo de sistemas.',
      },
      {
        type: 'h3',
        text: 'Más complejos de lo que parecen',
        criollo:
          'Hay que tener la cabeza en todas las interacciones entre componentes, porque cualquier cambio puede generar alteraciones impensadas en los tiempos.',
      },
      {
        type: 'p',
        text:
          'Es importante destacar que un sistema de tiempo real suele ser más complejo de lo que se cree. Hay que tener presente todas las interacciones entre componentes, porque esto puede afectar el resultado temporal, así como cualquier cambio también puede generar alteraciones impensadas.',
      },
      {
        type: 'h3',
        text: 'Fases del diseño de un sistema de tiempo real',
        criollo:
          'Primero entendés qué hay que hacer y con qué límites de tiempo, después lo programás, y al final medís cuánto tarda cada tarea y planificás.',
      },
      {
        type: 'ol',
        items: [
          'Identificar todas las tareas que se tienen que realizar, así como las restricciones temporales impuestas que se deben cumplir.',
          'Codificar los programas que ejecutarán las tareas.',
          'Medir el tiempo de cómputo de cada tarea y realizar un análisis de la planificación.',
        ],
      },
      {
        type: 'h3',
        text: 'Generalidades',
        criollo:
          'Se acoplan al mundo de afuera, corren bajo exigencias duras de rendimiento y dependen de un montón de factores a la vez.',
      },
      {
        type: 'ul',
        items: [
          'Requiere técnicas de análisis, diseño y prueba que no suelen emplearse en otras áreas de aplicación.',
          'Se acopla al mundo externo.',
          'Opera en condiciones de rendimiento muy rigurosas.',
          'Se ve afectado por diversos aspectos: hardware, software, sistema operativo, requisitos de aplicación y aspectos del diseño realizado.',
          'Su uso más habitual fue para el control de entornos, a veces con sensores que generan un procesamiento de la información y una salida en respuesta a dicha entrada.',
        ],
      },
      {
        type: 'h3',
        text: 'Elementos que componen un sistema de tiempo real (STR)',
        criollo:
          'Son las piezas que hacen que el sistema cumpla con los tiempos: desde el manejo de interrupciones hasta el sistema operativo y los lenguajes pensados para tiempo real.',
      },
      {
        type: 'ul',
        items: [
          'Aspectos de integración y de rendimiento.',
          'Manejo de interrupciones.',
          'Bases de datos de tiempo real.',
          'Sistemas operativos de tiempo real.',
          'Lenguajes de tiempo real.',
          'Sincronización y comunicación de tareas.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Los sistemas operativos de tiempo real (SOTR) son la plataforma para establecer un sistema de tiempo real: en ellos no tiene importancia el usuario, sino los procesos. Algunos ejemplos son VxWorks, Solaris, Lynx OS y Spectra.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-12-1',
          q: 'En un sistema de tiempo real alcanza con que el resultado sea correcto, sin importar cuándo se entrega.',
          a: false,
          explain:
            'Falso. La eficiencia depende de la exactitud y también del momento en que se entrega el resultado.',
        },
        {
          id: 'tf-12-2',
          q: 'La predictibilidad es una característica principal de los sistemas de tiempo real.',
          a: true,
          explain:
            'Verdadero. Poder anticipar el comportamiento temporal es clave en estos sistemas.',
        },
        {
          id: 'tf-12-3',
          q: 'El intervalo de tiempo entre la entrada y la salida en un sistema de tiempo real suele ser muy pequeño.',
          a: true,
          explain:
            'Verdadero. Esa ventana chica para ser aceptable es una de sus características.',
        },
        {
          id: 'tf-12-4',
          q: 'En un sistema operativo de tiempo real (SOTR) lo importante es el usuario, no los procesos.',
          a: false,
          explain:
            'Falso. Es al revés: en los SOTR no importa el usuario, sino los procesos.',
        },
        {
          id: 'tf-12-5',
          q: 'VxWorks y Solaris son ejemplos de sistemas operativos de tiempo real.',
          a: true,
          explain:
            'Verdadero. El apunte los menciona junto con Lynx OS y Spectra.',
        },
      ],
      mc: [
        {
          id: 'mc-12-1',
          q: '¿En qué se basa la eficiencia de un sistema de tiempo real?',
          options: [
            'Solo en la exactitud de los resultados de cómputo',
            'En la exactitud de los resultados y también en el momento en que los entrega',
            'En la cantidad de usuarios que puede atender',
            'En el tamaño de la memoria disponible',
          ],
          correctIndex: 1,
          explain:
            'No alcanza con que el resultado sea correcto: también importa cuándo se entrega.',
        },
        {
          id: 'mc-12-2',
          q: '¿Cuál es la primera fase en el diseño de un sistema de tiempo real?',
          options: [
            'Codificar los programas que ejecutarán las tareas',
            'Medir el tiempo de cómputo de cada tarea',
            'Identificar las tareas y las restricciones temporales que se deben cumplir',
            'Elegir el sistema operativo de tiempo real',
          ],
          correctIndex: 2,
          explain:
            'Primero se identifican las tareas y sus restricciones temporales; recién después se codifica y se mide.',
        },
        {
          id: 'mc-12-3',
          q: '¿Cuál de los siguientes es un elemento que compone un sistema de tiempo real?',
          options: [
            'El manejo de interrupciones',
            'La interfaz gráfica de usuario',
            'El modelo entidad-relación',
            'El diagrama de casos de uso',
          ],
          correctIndex: 0,
          explain:
            'Entre sus elementos están el manejo de interrupciones, las bases de datos y los SOTR, los lenguajes de tiempo real y la sincronización de tareas.',
        },
        {
          id: 'mc-12-4',
          q: '¿Cuál fue el uso más habitual de los sistemas de tiempo real?',
          options: [
            'La gestión contable de empresas',
            'El control de entornos, a veces mediante sensores',
            'El procesamiento de texto',
            'El alojamiento de páginas web',
          ],
          correctIndex: 1,
          explain:
            'Se usaron sobre todo para controlar entornos, con sensores que procesan la información y generan una salida en respuesta.',
        },
      ],
      ms: [
        {
          id: 'ms-12-1',
          q: '¿Qué afirmaciones sobre los sistemas de tiempo real son correctas?',
          options: [
            'Su interacción con el entorno debe ser rápida y responder en el tiempo dictado',
            'El intervalo entre entrada y salida suele ser muy pequeño',
            'La predictibilidad es una de sus características principales',
            'Su eficiencia depende de la exactitud y del momento en que entrega los resultados',
            'Suelen ser más simples de diseñar de lo que se cree',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Son MÁS COMPLEJOS de lo que se cree: cualquier cambio puede generar alteraciones impensadas en los tiempos. Las otras cuatro son textuales.',
        },
        {
          id: 'ms-12-2',
          q: '¿Cuáles son las fases del diseño de un sistema de tiempo real según el apunte?',
          options: [
            'Identificar las tareas y las restricciones temporales impuestas',
            'Codificar los programas que ejecutarán las tareas',
            'Medir el tiempo de cómputo de cada tarea y analizar la planificación',
            'Elegir el sistema operativo de tiempo real antes que cualquier otra cosa',
            'Auditar la interfaz gráfica con el cliente',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las tres fases son: identificar tareas + restricciones, codificar y medir/planificar. Elegir SOTR no se menciona como una fase, y la auditoría de interfaz no aplica a STR.',
        },
        {
          id: 'ms-12-3',
          q: '¿Cuáles de los siguientes son elementos que componen un sistema de tiempo real?',
          options: [
            'Manejo de interrupciones',
            'Bases de datos de tiempo real',
            'Sistemas operativos de tiempo real',
            'Lenguajes de tiempo real',
            'Diagramas de casos de uso',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Los elementos textuales son: integración y rendimiento, interrupciones, bases de datos, SOTR, lenguajes y sincronización/comunicación de tareas. Los diagramas de casos de uso son herramientas de modelado, no componentes del STR.',
        },
        {
          id: 'ms-12-4',
          q: '¿Qué afirmaciones sobre los SOTR (sistemas operativos de tiempo real) son correctas?',
          options: [
            'Son la plataforma para establecer un sistema de tiempo real',
            'En ellos no tiene importancia el usuario, sino los procesos',
            'VxWorks, Solaris, Lynx OS y Spectra son ejemplos del apunte',
            'Comparten estructura con los SO de escritorio enfocados en el usuario',
            'Su prioridad es maximizar la experiencia gráfica del usuario',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'En SOTR mandan los procesos, no el usuario. Compartir estructura con SO de escritorio o priorizar UX gráfica va en contra de la definición.',
        },
        {
          id: 'ms-12-5',
          q: 'Según el apunte, ¿cuáles son los aspectos que pueden afectar el resultado temporal de un <strong>sistema de tiempo real</strong>?',
          options: [
            'El hardware utilizado',
            'El software del sistema',
            'El sistema operativo',
            'La interfaz gráfica de usuario',
            'Los requisitos de aplicación y aspectos del diseño realizado',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'El apunte lista textualmente: hardware, software, sistema operativo, requisitos de aplicación y aspectos del diseño. La <em>interfaz gráfica de usuario</em> no aparece en esa lista; además, en los STR el usuario no es el foco (los SOTR priorizan procesos, no usuarios), así que es el distractor.',
        },
        {
          id: 'ms-12-6',
          q: '¿Cuáles de las siguientes afirmaciones reflejan con precisión lo que el apunte dice sobre la <strong>complejidad</strong> de los sistemas de tiempo real?',
          options: [
            'Hay que tener presentes todas las interacciones entre componentes porque pueden afectar el resultado temporal',
            'Cualquier cambio puede generar alteraciones impensadas en los tiempos',
            'Un STR suele ser más complejo de lo que se cree',
            'La complejidad se reduce considerablemente si se elige un lenguaje de tiempo real adecuado',
            'Un STR con un único sensor es más simple y predecible que uno con múltiples sensores',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las tres primeras son textuales o directamente inferibles del apunte. La opción sobre el lenguaje de tiempo real es un distractor plausible: el apunte menciona los lenguajes como <em>elemento</em> del STR, pero nunca afirma que reducen la complejidad. La cantidad de sensores tampoco se menciona como factor simplificador.',
        },
        {
          id: 'ms-12-7',
          q: '¿Cuáles de los siguientes son <strong>elementos constitutivos</strong> de un sistema de tiempo real según el listado textual del apunte?',
          options: [
            'Sincronización y comunicación de tareas',
            'Aspectos de integración y de rendimiento',
            'Interfaz web de administración del sistema',
            'Manejo de interrupciones',
            'Modelo de datos relacional',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'El apunte enumera exactamente: aspectos de integración y rendimiento, manejo de interrupciones, bases de datos de tiempo real, SOTR, lenguajes de tiempo real y sincronización/comunicación de tareas. La <em>interfaz web de administración</em> y el <em>modelo de datos relacional</em> no figuran en esa lista; son distractores plausibles pero ajenos al texto.',
        },
        {
          id: 'ms-12-8',
          q: '¿Cuáles afirmaciones sobre el <strong>acoplamiento externo</strong> y las <strong>condiciones de operación</strong> de un STR son correctas según el apunte?',
          options: [
            'Se acopla al mundo externo',
            'Opera en condiciones de rendimiento muy rigurosas',
            'Requiere técnicas de análisis, diseño y prueba que no suelen emplearse en otras áreas de aplicación',
            'Su rendimiento mejora automáticamente al ejecutarse en entornos desconectados de sensores',
            'El rendimiento de un STR es independiente del hardware sobre el que corre',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las tres primeras son textuales de la sección de <em>generalidades</em>. Los entornos desconectados de sensores contradicen el uso típico descrito (control de entornos con sensores). La independencia del hardware es falsa: el apunte lista el hardware como uno de los aspectos que afectan el STR.',
        },
        {
          id: 'ms-12-9',
          q: 'Sobre el <strong>uso habitual</strong> de los sistemas de tiempo real y el rol de los sensores, ¿cuáles afirmaciones son correctas según el apunte?',
          options: [
            'El uso más habitual fue para el control de entornos',
            'A veces se incluyen sensores que generan un procesamiento de la información',
            'Los sensores producen una salida en respuesta a la entrada recibida',
            'El uso más habitual fue en la gestión contable y administrativa de empresas',
            'El apunte establece que el uso de sensores es obligatorio en todo STR',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'El apunte dice: «su uso más habitual fue para el control de entornos, a veces con sensores que generan un procesamiento de la información y una salida en respuesta a dicha entrada». La gestión contable no se menciona, y el apunte dice <em>a veces</em> con sensores, no que sean obligatorios siempre.',
        },
        {
          id: 'ms-12-10',
          q: 'Considerando la <strong>definición de eficiencia</strong>, las <strong>fases de diseño</strong> y la <strong>predictibilidad</strong> de un STR, ¿cuáles de las siguientes afirmaciones son correctas según el apunte?',
          options: [
            'La eficiencia de un STR no se basa solo en la exactitud de los resultados sino también en el momento en que los entrega',
            'La predictibilidad es una característica principal de los STR',
            'La tercera fase del diseño consiste en medir el tiempo de cómputo de cada tarea y realizar un análisis de la planificación',
            'La exactitud del resultado de cómputo es condición suficiente para considerar eficiente un STR',
            'La segunda fase del diseño es identificar las tareas y las restricciones temporales impuestas',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las opciones 0, 1 y 2 son textuales: la eficiencia depende de exactitud <em>y</em> tiempo de entrega; la predictibilidad es característica principal; y la tercera fase es medir tiempos y planificar. La opción 3 invierte la definición (la exactitud sola no es suficiente). La opción 4 confunde las fases: la <em>primera</em> es identificar tareas y restricciones, la segunda es codificar.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-12-1',
        front: 'Sistema de tiempo real',
        back:
          'Sistema informático que interactúa con el entorno y debe responder dentro del tiempo dictado por el problema; el intervalo entre entrada y salida suele ser muy pequeño.',
      },
      {
        id: 'fc-12-2',
        front: 'Predictibilidad',
        back: 'Característica principal de un sistema de tiempo real: poder anticipar su comportamiento temporal.',
      },
      {
        id: 'fc-12-3',
        front: 'Eficiencia de un STR',
        back: 'No depende solo de la exactitud del cómputo, sino también del momento en que entrega los resultados.',
      },
      {
        id: 'fc-12-4',
        front: 'Fases de diseño de un STR',
        back:
          '1) Identificar tareas y restricciones temporales; 2) codificar los programas; 3) medir el tiempo de cómputo y analizar la planificación.',
      },
      {
        id: 'fc-12-5',
        front: 'Elementos de un STR',
        back:
          'Integración y rendimiento, manejo de interrupciones, bases de datos de tiempo real, SOTR, lenguajes de tiempo real, y sincronización y comunicación de tareas.',
      },
      {
        id: 'fc-12-6',
        front: 'SOTR',
        back:
          'Sistema operativo de tiempo real: la plataforma del STR donde importan los procesos, no el usuario. Ej: VxWorks, Solaris, Lynx OS, Spectra.',
      },
      {
        id: 'fc-12-7',
        front: 'Uso habitual de un STR',
        back: 'El control de entornos, muchas veces con sensores que procesan la información y generan una salida en respuesta.',
      },
    ],
  },
  // ---------- SECCIÓN 13 ----------
  {
    id: '13',
    unit: '11',
    title: 'Sistemas distribuidos',
    criollo:
      'Un sistema distribuido reparte el laburo entre varias computadoras conectadas por red, en vez de meter todo en una sola máquina. Desde afuera lo ves como un solo sistema. La gracia: si se cae una máquina, el resto sigue andando (capaz medio degradado, pero anda).',
    blocks: [
      {
        type: 'h3',
        text: 'Qué es un sistema distribuido',
        criollo:
          'El procesamiento no vive en una sola máquina: se reparte entre varias computadoras conectadas por una red. Sommerville dice que hoy casi todos los sistemas grandes son así.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          '"Un sistema distribuido es un sistema en el que el procesamiento de información se distribuye sobre varias computadoras en vez de estar confinado en una única máquina. En la actualidad, prácticamente todos los grandes sistemas informáticos son sistemas distribuidos." — Sommerville, I. (2005). Ingeniería del software. Madrid: Pearson Educación.',
      },
      {
        type: 'p',
        text:
          'Básicamente, los sistemas distribuidos se conforman a través de la conexión de un grupo de computadoras que, aunque se encuentren separadas físicamente, cada una contiene software y hardware individual, pero se cuenta con una red de comunicaciones que las conecta a la vez. En el diseño se evalúa como un sistema único, pero con múltiples destinatarios.',
      },
      {
        type: 'p',
        text:
          'Los sistemas distribuidos tienen la particularidad de que, al ser una única red con varias computadoras conectadas, <strong>el fallo de una no implica el fallo del sistema completo</strong>.',
      },
      {
        type: 'h3',
        text: 'Ventajas',
        criollo:
          'Compartís recursos, combinás equipos de distintos fabricantes, escalás y te bancás mejor las caídas.',
      },
      {
        type: 'ul',
        items: [
          'Permite compartir hardware y software, como impresoras o discos, de las máquinas de la red.',
          'Están basados en sistemas abiertos, es decir, emplean protocolos estándares que facilitan combinar equipos y software de diferentes proveedores.',
          'Permite ejecutar procesos concurrentes sobre la misma computadora de la red.',
          'Suelen ser escalables, lo que permite sumar nuevos recursos, aunque esto dependerá de las posibilidades de la red que las conecte.',
          'La tolerancia a fallos suele ser mayor, porque el fallo en una computadora de la red no implica la caída de toda la red, aun brindando un servicio un poco degradado.',
        ],
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-13-1',
          q: 'En un sistema distribuido, el procesamiento de la información se concentra en una única máquina.',
          a: false,
          explain:
            'Falso. Justamente se distribuye sobre varias computadoras en vez de estar confinado en una sola.',
        },
        {
          id: 'tf-13-2',
          q: 'Si falla una computadora de un sistema distribuido, se cae todo el sistema.',
          a: false,
          explain:
            'Falso. El fallo de una no implica la caída de toda la red; a lo sumo el servicio queda un poco degradado.',
        },
        {
          id: 'tf-13-3',
          q: 'Los sistemas distribuidos suelen estar basados en sistemas abiertos, con protocolos estándares.',
          a: true,
          explain:
            'Verdadero. Eso facilita combinar equipos y software de distintos proveedores.',
        },
        {
          id: 'tf-13-4',
          q: 'Según Sommerville (2005), prácticamente todos los grandes sistemas informáticos son distribuidos.',
          a: true,
          explain:
            'Verdadero. Es parte de la definición que cita el apunte.',
        },
      ],
      mc: [
        {
          id: 'mc-13-1',
          q: '¿Cómo se evalúa un sistema distribuido durante su diseño?',
          options: [
            'Como varios sistemas independientes entre sí',
            'Como un sistema único, pero con múltiples destinatarios',
            'Como una única computadora con mucha memoria',
            'Como un sistema embebido de gran escala',
          ],
          correctIndex: 1,
          explain:
            'Aunque las computadoras estén separadas físicamente, en el diseño se lo trata como un sistema único con múltiples destinatarios.',
        },
        {
          id: 'mc-13-2',
          q: '¿Cuál de las siguientes es una ventaja de los sistemas distribuidos?',
          options: [
            'Eliminan la necesidad de una red de comunicaciones',
            'Garantizan que nunca se degrade el servicio',
            'Permiten compartir hardware y software entre las máquinas de la red',
            'Concentran todo el procesamiento para simplificar el diseño',
          ],
          correctIndex: 2,
          explain:
            'Entre sus ventajas está compartir recursos como impresoras o discos de las máquinas de la red.',
        },
        {
          id: 'mc-13-3',
          q: '¿Por qué los sistemas distribuidos tienen mayor tolerancia a fallos?',
          options: [
            'Porque no dependen de ninguna red',
            'Porque el fallo de una computadora no implica la caída de toda la red',
            'Porque usan un único procesador muy confiable',
            'Porque no procesan información sensible',
          ],
          correctIndex: 1,
          explain:
            'Al estar el procesamiento repartido, si una computadora falla el sistema sigue funcionando, aunque sea con servicio degradado.',
        },
      ],
      ms: [
        {
          id: 'ms-13-1',
          q: '¿Qué afirmaciones sobre la definición de Sommerville (2005) son correctas?',
          options: [
            'El procesamiento de información se distribuye sobre varias computadoras',
            'No está confinado a una única máquina',
            'Prácticamente todos los grandes sistemas informáticos actuales son distribuidos',
            'En el diseño se evalúa como un sistema único con múltiples destinatarios',
            'Solo aplica a sistemas chicos sin red',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'La definición es textual de Sommerville. La quinta opción es lo opuesto: cuanto más grande el sistema, más probable que sea distribuido.',
        },
        {
          id: 'ms-13-2',
          q: '¿Cuáles de las siguientes son ventajas listadas de los sistemas distribuidos?',
          options: [
            'Permiten compartir hardware y software (impresoras, discos)',
            'Están basados en sistemas abiertos con protocolos estándares',
            'Permiten ejecutar procesos concurrentes sobre la misma computadora de la red',
            'Suelen ser escalables (sumar nuevos recursos)',
            'Garantizan disponibilidad del 100% sin importar fallos',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. La tolerancia a fallos es mayor (no del 100%): aun con caídas, el servicio puede quedar un poco degradado.',
        },
        {
          id: 'ms-13-3',
          q: '¿Qué afirmaciones sobre la tolerancia a fallos en distribuidos son correctas?',
          options: [
            'El fallo de una computadora no implica la caída del sistema completo',
            'El servicio puede quedar un poco degradado en caso de fallo',
            'Si falla una máquina, se cae el sistema entero',
            'La tolerancia a fallos suele ser mayor que en sistemas centralizados',
            'El sistema deja de procesar información sensible al detectar un fallo',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las primeras dos son textuales y la cuarta se sigue del razonamiento del apunte. Las otras dos contradicen la definición.',
        },
        {
          id: 'ms-13-4',
          q: 'Sobre la escalabilidad y los sistemas abiertos en distribuidos, ¿qué es correcto?',
          options: [
            'Los sistemas abiertos usan protocolos estándares',
            'Eso facilita combinar equipos y software de distintos proveedores',
            'La escalabilidad permite sumar nuevos recursos a la red',
            'La capacidad de escalar depende de las posibilidades de la red que conecta las máquinas',
            'Los sistemas distribuidos eliminan la necesidad de una red de comunicaciones',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Los sistemas distribuidos DEPENDEN de la red de comunicaciones: sin red, no hay sistema distribuido.',
        },
        {
          id: 'ms-13-5',
          q: 'Según el apunte, ¿cuáles de las siguientes afirmaciones describen con precisión la <strong>estructura física y lógica</strong> de un sistema distribuido?',
          options: [
            'Las computadoras que lo forman pueden estar separadas físicamente',
            'Cada computadora del sistema contiene su propio hardware y software individual',
            'Se cuenta con una red de comunicaciones que conecta todas las máquinas',
            'Aunque físicamente separadas, en el diseño se lo evalúa como un sistema único',
            'Para que sea distribuido, todas las máquinas deben estar en el mismo edificio',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte: las máquinas están \'separadas físicamente\', cada una tiene \'software y hardware individual\', existe \'una red de comunicaciones que las conecta\' y \'en el diseño se evalúa como un sistema único\'. La quinta es un distractor: el apunte no impone ninguna restricción geográfica, la separación física puede ser de cualquier escala.',
        },
        {
          id: 'ms-13-6',
          q: '¿Cuáles de estas afirmaciones sobre la <strong>escalabilidad</strong> en sistemas distribuidos son <em>correctas según el texto</em>?',
          options: [
            'Suelen ser escalables, lo que permite sumar nuevos recursos',
            'La capacidad de escalar depende de las posibilidades de la red que conecta las máquinas',
            'La escalabilidad es ilimitada e independiente de la red',
            'Sumar nuevos recursos es siempre posible sin ninguna restricción técnica',
            'La escalabilidad es una ventaja listada explícitamente en el apunte',
          ],
          correctIndexes: [0, 1, 4],
          explain:
            'El apunte dice textualmente que \'suelen ser escalables, lo que permite sumar nuevos recursos, aunque esto dependerá de las posibilidades de la red que las conecte\'. Eso valida las opciones 0, 1 y 4. Las opciones 2 y 3 contradicen directamente la condición que impone el texto: la escalabilidad está limitada por la red, no es ilimitada ni libre de restricciones.',
        },
        {
          id: 'ms-13-7',
          q: 'Sobre los <strong>sistemas abiertos</strong> mencionados en la sección, ¿qué es correcto según el apunte?',
          options: [
            'Emplean protocolos estándares',
            'Facilitan combinar equipos de diferentes proveedores',
            'Facilitan combinar software de diferentes proveedores',
            'Eliminan la necesidad de una red de comunicaciones entre las máquinas',
            'Obligan a que todas las máquinas sean del mismo fabricante',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'El apunte dice que los sistemas abiertos \'emplean protocolos estándares que facilitan combinar equipos y software de diferentes proveedores\': eso cubre las opciones 0, 1 y 2. La opción 3 es falsa porque los distribuidos <em>dependen</em> de la red de comunicaciones. La opción 4 contradice directamente la ventaja de los sistemas abiertos: justamente permiten mezclar distintos fabricantes.',
        },
        {
          id: 'ms-13-8',
          q: 'Un colega afirma que en un sistema distribuido el fallo de una computadora <em>siempre</em> deja el servicio completamente intacto, sin ninguna degradación. ¿Cuáles de estas opciones refutan o matizan esa afirmación con base en el apunte?',
          options: [
            'El apunte dice que el servicio puede quedar \'un poco degradado\' ante un fallo',
            'La tolerancia a fallos es \'mayor\', no absoluta ni del 100%',
            'El fallo de una computadora no implica la caída <em>completa</em> del sistema, pero sí puede haber impacto',
            'Según el apunte, el sistema distribuido garantiza disponibilidad total ante cualquier fallo',
            'El apunte no menciona ningún tipo de degradación de servicio',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'El texto dice textualmente que la tolerancia a fallos \'suele ser mayor\' y que ante una caída el servicio queda \'un poco degradado\': eso valida las opciones 0, 1 y 2. Las opciones 3 y 4 son falsas porque el apunte <em>sí</em> menciona degradación y <em>no</em> promete disponibilidad del 100%.',
        },
        {
          id: 'ms-13-9',
          q: '¿Cuáles de las siguientes afirmaciones son <strong>verdaderas</strong> sobre la relación entre los sistemas distribuidos y la <em>concurrencia</em> y el <em>uso compartido de recursos</em>, según el apunte?',
          options: [
            'Permiten ejecutar procesos concurrentes sobre la misma computadora de la red',
            'Permiten compartir hardware como impresoras o discos de las máquinas de la red',
            'Permiten compartir software entre las máquinas de la red',
            'La concurrencia solo es posible si todas las máquinas tienen el mismo sistema operativo',
            'Compartir recursos requiere que las máquinas estén físicamente juntas',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'El apunte lista las tres primeras como ventajas explícitas: procesos concurrentes, compartir hardware (impresoras, discos) y compartir software. La opción 3 es un distractor: el apunte no impone restricción de sistema operativo, justamente los sistemas abiertos permiten combinar equipos y software de distintos proveedores. La opción 4 es falsa porque el texto dice que las máquinas pueden \'estar separadas físicamente\'.',
        },
        {
          id: 'ms-13-10',
          q: '¿Cuáles de estas afirmaciones representan <em>correctamente</em> la <strong>visión externa</strong> y la <strong>motivación general</strong> de los sistemas distribuidos según el apunte y Sommerville?',
          options: [
            'Desde afuera, el sistema distribuido se percibe como un sistema único',
            'Su objetivo es repartir el procesamiento entre varias computadoras conectadas por red',
            'Sommerville sostiene que prácticamente todos los grandes sistemas informáticos actuales son distribuidos',
            'Se diseñan para tener un único destinatario, a diferencia de los sistemas centralizados',
            'El procesamiento distribuido busca confinar la información en una única máquina para mayor seguridad',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las opciones 0 y 1 reflejan el concepto central del apunte (\'se evalúa como un sistema único\' y \'procesamiento distribuido sobre varias computadoras\'). La opción 2 es cita textual de Sommerville. La opción 3 es falsa: el texto dice \'múltiples destinatarios\', no uno solo. La opción 4 contradice la definición: los distribuidos hacen exactamente lo contrario, evitar confinar el procesamiento en una única máquina.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-13-1',
        front: 'Sistema distribuido',
        back:
          'Sistema en el que el procesamiento de información se distribuye sobre varias computadoras en vez de estar confinado en una única máquina (Sommerville, 2005).',
      },
      {
        id: 'fc-13-2',
        front: '¿Cómo se conforma?',
        back:
          'Un grupo de computadoras separadas físicamente, cada una con su hardware y software, conectadas por una red; en el diseño se lo trata como un sistema único con múltiples destinatarios.',
      },
      {
        id: 'fc-13-3',
        front: 'Tolerancia a fallos',
        back: 'El fallo de una computadora no tira abajo toda la red; a lo sumo el servicio queda un poco degradado.',
      },
      {
        id: 'fc-13-4',
        front: 'Sistemas abiertos',
        back: 'Usan protocolos estándares que facilitan combinar equipos y software de diferentes proveedores.',
      },
      {
        id: 'fc-13-5',
        front: 'Escalabilidad',
        back: 'Permiten sumar nuevos recursos, aunque depende de las posibilidades de la red que los conecta.',
      },
      {
        id: 'fc-13-6',
        front: 'Ventajas (resumen)',
        back:
          'Compartir hardware y software, sistemas abiertos, procesos concurrentes, escalabilidad y mayor tolerancia a fallos.',
      },
    ],
  },
  // ---------- SECCIÓN 14 ----------
  {
    id: '14',
    unit: '11',
    title: 'Sistemas embebidos',
    criollo:
      'Los sistemas embebidos (o empotrados) están metidos adentro de un aparato y hacen una o dos funciones puntuales, casi siempre en tiempo real. Ni los ves: están en el microondas, en el reloj del taxi. Se fabrican en masa, con poco procesador y poca memoria, y si se rompe algo, fuiste: hay que cambiar la placa entera.',
    blocks: [
      {
        type: 'h3',
        text: 'Qué es un sistema embebido',
        criollo:
          'El software no está a la vista del usuario y hace pocas cosas, muy específicas. Casi siempre corre como un sistema de tiempo real.',
      },
      {
        type: 'p',
        text:
          'En los sistemas embebidos o empotrados, las funciones del software no suelen estar a la vista del usuario. Estos sistemas son diseñados para realizar una o algunas pocas funciones, generalmente dentro de un sistema de tiempo real.',
      },
      {
        type: 'p',
        text:
          'Los sistemas embebidos son empleados para propósitos diferentes, pero sus componentes suelen estar incluidos en una placa base y pueden no verse como computadoras; por ejemplo, los relojes que utilizan los taxis o el microondas. Generalmente, estos sistemas se programan en lenguaje ensamblador sobre el microprocesador.',
      },
      {
        type: 'h3',
        text: 'Características',
        criollo:
          'Producción masiva para abaratar, hardware chico, y si falla un elemento se cambia la placa completa.',
      },
      {
        type: 'ul',
        items: [
          'Suelen fabricarse en forma masiva porque se busca reducir el coste en su producción.',
          'Suelen emplear un procesador relativamente pequeño, así como una memoria también pequeña.',
          'Un fallo en un elemento implica que debe repararse o reemplazarse la placa íntegramente.',
          'En busca de la reducción de costos, puede que los controladores sean más lentos que los de las computadoras personales.',
        ],
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-14-1',
          q: 'En los sistemas embebidos, las funciones del software suelen estar bien a la vista del usuario.',
          a: false,
          explain:
            'Falso. En los sistemas embebidos las funciones del software no suelen estar a la vista del usuario.',
        },
        {
          id: 'tf-14-2',
          q: 'Los sistemas embebidos se diseñan para realizar una o pocas funciones.',
          a: true,
          explain:
            'Verdadero. Están pensados para una o algunas pocas funciones, generalmente en tiempo real.',
        },
        {
          id: 'tf-14-3',
          q: 'El reloj de un taxi y el microondas son ejemplos de sistemas embebidos.',
          a: true,
          explain:
            'Verdadero. Son los ejemplos que da el apunte de componentes incluidos en una placa base.',
        },
        {
          id: 'tf-14-4',
          q: 'Si falla un elemento de un sistema embebido, normalmente alcanza con reemplazar solo ese elemento sin tocar la placa.',
          a: false,
          explain:
            'Falso. Un fallo en un elemento implica reparar o reemplazar la placa íntegramente.',
        },
      ],
      mc: [
        {
          id: 'mc-14-1',
          q: '¿En qué lenguaje se programan generalmente los sistemas embebidos?',
          options: [
            'En un lenguaje de alto nivel orientado a objetos',
            'En lenguaje ensamblador sobre el microprocesador',
            'En lenguaje de consultas SQL',
            'En código de máquina de un sistema distribuido',
          ],
          correctIndex: 1,
          explain:
            'El apunte indica que generalmente se programan en ensamblador sobre el microprocesador.',
        },
        {
          id: 'mc-14-2',
          q: '¿Por qué los sistemas embebidos suelen fabricarse en forma masiva?',
          options: [
            'Para aumentar la potencia de cálculo',
            'Para reducir el coste en su producción',
            'Para que sean visibles al usuario',
            'Para soportar más usuarios concurrentes',
          ],
          correctIndex: 1,
          explain:
            'La fabricación masiva busca reducir el coste de producción.',
        },
        {
          id: 'mc-14-3',
          q: '¿Qué relación suelen tener los sistemas embebidos con los de tiempo real?',
          options: [
            'Ninguna: son conceptos opuestos',
            'Los embebidos reemplazan a los de tiempo real',
            'Generalmente funcionan dentro de un sistema de tiempo real',
            'Los de tiempo real son un caso particular de los embebidos',
          ],
          correctIndex: 2,
          explain:
            'El apunte señala que los sistemas embebidos realizan sus funciones generalmente dentro de un sistema de tiempo real.',
        },
      ],
      ms: [
        {
          id: 'ms-14-1',
          q: '¿Qué afirmaciones sobre los sistemas embebidos (empotrados) son correctas?',
          options: [
            'Las funciones del software no suelen estar a la vista del usuario',
            'Están diseñados para realizar una o algunas pocas funciones',
            'Generalmente funcionan dentro de un sistema de tiempo real',
            'Suelen estar incluidos en una placa base y no parecen computadoras',
            'Su software suele exponer una interfaz gráfica completa al usuario',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. El software no exponiendo interfaz gráfica al usuario es justamente parte de su definición.',
        },
        {
          id: 'ms-14-2',
          q: 'Sobre ejemplos y lenguaje de programación de los embebidos, ¿qué es correcto?',
          options: [
            'El reloj de los taxis es un ejemplo',
            'El microondas es un ejemplo',
            'Se programan generalmente en lenguaje ensamblador sobre el microprocesador',
            'Sus componentes suelen estar incluidos en una placa base',
            'Se programan generalmente en lenguajes de consulta como SQL',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. SQL es un lenguaje de consultas: no tiene relación con la programación de embebidos.',
        },
        {
          id: 'ms-14-3',
          q: '¿Qué afirmaciones sobre la fabricación y características de hardware de los embebidos son correctas?',
          options: [
            'Suelen fabricarse en forma masiva para reducir el coste',
            'Suelen emplear un procesador relativamente pequeño',
            'Suelen tener una memoria también pequeña',
            'Sus controladores pueden ser más lentos que los de las PCs por la reducción de costos',
            'Usan los procesadores más potentes del mercado para garantizar rendimiento máximo',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. La quinta contradice abiertamente la lógica de reducir costos.',
        },
        {
          id: 'ms-14-4',
          q: 'Sobre el mantenimiento de un sistema embebido ante una falla, ¿qué es correcto?',
          options: [
            'Un fallo en un elemento implica reparar la placa íntegramente',
            'Un fallo puede implicar reemplazar la placa entera',
            'Alcanza con cambiar solo el elemento que falló sin tocar la placa',
            'La placa se desensambla y se cambian componentes uno por uno con SMD en campo',
            'No requiere ningún tipo de intervención ya que son sistemas autorreparables',
          ],
          correctIndexes: [0, 1],
          explain:
            'El apunte es claro: si falla un elemento, hay que reparar o reemplazar la placa íntegramente. No se cambian componentes sueltos ni hay autorreparación.',
        },
        {
          id: 'ms-14-5',
          q: '¿Cuáles de las siguientes afirmaciones describen con precisión la <strong>naturaleza funcional</strong> de un sistema embebido <em>según el apunte</em>?',
          options: [
            'Realiza una o algunas pocas funciones específicas',
            'Sus funciones no suelen estar a la vista del usuario',
            'Puede ejecutar simultáneamente decenas de aplicaciones de usuario final',
            'Generalmente opera dentro de un sistema de tiempo real',
            'Su propósito principal es exponer servicios web a través de una red',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'El apunte indica que los embebidos realizan \'una o algunas pocas funciones\', que \'no suelen estar a la vista del usuario\' y que operan \'generalmente dentro de un sistema de tiempo real\'. La opción de ejecutar decenas de aplicaciones contradice la idea de pocas funciones específicas, y exponer servicios web no es mencionado ni es coherente con su definición.',
        },
        {
          id: 'ms-14-6',
          q: 'Un estudiante afirma varias cosas sobre los <strong>componentes físicos</strong> de los sistemas embebidos. ¿Cuáles son correctas <em>según el apunte</em>?',
          options: [
            'Sus componentes suelen estar incluidos en una placa base',
            'Pueden no verse como computadoras convencionales',
            'Suelen emplear un procesador relativamente pequeño',
            'La memoria que utilizan suele ser también pequeña',
            'Incorporan necesariamente una GPU dedicada para procesamiento gráfico',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las cuatro primeras afirmaciones son textuales del apunte: componentes en placa base, apariencia no-computadora, procesador pequeño y memoria pequeña. La GPU dedicada no solo no está mencionada sino que contradice la lógica de hardware reducido y bajo costo.',
        },
        {
          id: 'ms-14-7',
          q: '¿Qué afirmaciones relacionan correctamente el <strong>modelo de producción</strong> con las <strong>consecuencias de hardware</strong> en los sistemas embebidos, <em>según el apunte</em>?',
          options: [
            'Se fabrican en forma masiva porque se busca reducir el coste de producción',
            'La búsqueda de reducción de costos puede llevar a que los controladores sean más lentos que los de las PCs',
            'La fabricación masiva implica necesariamente que cada unidad tenga hardware de última generación',
            'El procesador y la memoria son relativamente pequeños como parte de esa reducción de costos',
            'La producción masiva garantiza que no fallen nunca, eliminando la necesidad de mantenimiento',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'El apunte vincula explícitamente la fabricación masiva con la reducción de costos (opción 0), la posibilidad de controladores más lentos que los de PCs por esa misma reducción (opción 1), y el procesador/memoria pequeños (opción 3). Que el hardware sea de última generación contradice la lógica de bajo costo, y la eliminación de fallos no está mencionada — de hecho el apunte describe cómo manejar fallos.',
        },
        {
          id: 'ms-14-8',
          q: '¿Cuáles de las siguientes proposiciones sobre el <strong>lenguaje de programación y el contexto de ejecución</strong> de los embebidos son correctas <em>según el apunte</em>?',
          options: [
            'Generalmente se programan en lenguaje ensamblador sobre el microprocesador',
            'El lenguaje ensamblador se ejecuta directamente sobre el microprocesador del sistema',
            'Se programan principalmente en lenguajes orientados a objetos de alto nivel como Java',
            'Corren dentro de un sistema de tiempo real como contexto habitual de operación',
            'El uso de ensamblador se debe a que los embebidos requieren alta portabilidad entre plataformas',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'El apunte dice textualmente que \'se programan en lenguaje ensamblador sobre el microprocesador\' (opciones 0 y 1 son la misma afirmación descompuesta — ambas ciertas) y que funcionan \'dentro de un sistema de tiempo real\' (opción 3). Java de alto nivel contradice el uso de ensamblador. La portabilidad es justamente lo opuesto: el ensamblador es específico de cada arquitectura, no portable.',
        },
        {
          id: 'ms-14-9',
          q: '¿Qué afirmaciones sobre la <strong>política de mantenimiento ante fallos</strong> y la <strong>visibilidad del software</strong> en los embebidos son <em>ambas</em> correctas <em>según el apunte</em>?',
          options: [
            'Un fallo en un elemento implica reparar o reemplazar la placa íntegramente',
            'Las funciones del software no suelen estar a la vista del usuario',
            'Ante un fallo, el usuario puede actualizar el software por su cuenta para resolverlo',
            'La invisibilidad del software al usuario es una característica accidental, no definitoria',
            'El reemplazo de la placa completa es consecuencia directa de cómo están construidos estos sistemas',
          ],
          correctIndexes: [0, 1, 4],
          explain:
            'Las opciones 0 y 1 son textuales del apunte. La opción 4 es una síntesis válida: el reemplazo total de la placa ante fallos se deriva directamente de que los componentes están integrados en ella. La opción 2 no está en el apunte y contradice el modelo de hardware cerrado. La opción 3 es falsa: la invisibilidad del software es parte de la definición misma de los sistemas embebidos.',
        },
        {
          id: 'ms-14-10',
          q: 'Un equipo de desarrollo evalúa si un sistema califica como <strong>embebido</strong>. ¿Qué combinación de características, <em>según el apunte</em>, respalda esa clasificación?',
          options: [
            'El sistema realiza una función puntual dentro de un dispositivo específico sin que el usuario lo vea operar',
            'Sus componentes están montados en una placa base y el conjunto no parece una computadora',
            'El sistema corre en tiempo real y está programado en ensamblador sobre su microprocesador',
            'El sistema expone una interfaz gráfica rica y permite instalar aplicaciones de terceros',
            'Si falla, se reemplaza la placa completa porque los elementos no son reparables individualmente',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las opciones 0, 1, 2 y 4 sintetizan los rasgos definitivos del apunte: función específica invisible al usuario, componentes en placa con aspecto no-computadora, tiempo real + ensamblador, y reemplazo de placa ante fallos. La opción 3 es un distractor: la interfaz gráfica rica y las apps de terceros describen una PC o smartphone, lo opuesto a un embebido.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-14-1',
        front: 'Sistema embebido',
        back:
          'Sistema diseñado para una o pocas funciones, con el software no visible al usuario y operando generalmente dentro de un sistema de tiempo real.',
      },
      {
        id: 'fc-14-2',
        front: 'Otro nombre',
        back: 'Sistemas empotrados.',
      },
      {
        id: 'fc-14-3',
        front: 'Ejemplos',
        back: 'El reloj de los taxis y el microondas: componentes en una placa base que no parece una computadora.',
      },
      {
        id: 'fc-14-4',
        front: 'Lenguaje habitual',
        back: 'Lenguaje ensamblador, sobre el microprocesador.',
      },
      {
        id: 'fc-14-5',
        front: 'Fabricación de un embebido',
        back: 'Masiva, para reducir costos; usan procesador y memoria pequeños.',
      },
      {
        id: 'fc-14-6',
        front: 'Fallo en un embebido',
        back: 'Si falla un elemento, hay que reparar o reemplazar la placa íntegramente.',
      },
    ],
  },
  // ---------- SECCIÓN 15 ----------
  {
    id: '15',
    unit: '12',
    title: 'Reingeniería de software',
    criollo:
      'Los sistemas no se quedan quietos: el entorno cambia y los tenés que adaptar, así que con el tiempo se les rompe la estructura. La reingeniería es mejorar lo que ya hay sin tirarlo a la basura — redocumentar, reestructurar, modernizar el lenguaje — pero manteniendo la misma funcionalidad y arquitectura. Conviene cuando no querés bancar el riesgo ni el costo de empezar de cero.',
    blocks: [
      {
        type: 'h3',
        text: 'Evolución de los sistemas de software',
        criollo:
          'Los sistemas se modifican para seguir siendo útiles, pero cada modificación les va comiendo la estructura. Y la empresa depende de seguir bancando esa inversión.',
      },
      {
        type: 'p',
        text:
          'Una vez desarrollado un sistema de software, inevitablemente suele sufrir modificaciones para adaptarse a cambios en el entorno que le permita seguir siendo de utilidad para la organización.',
      },
      {
        type: 'p',
        text:
          'La evolución del software es un punto relevante para una organización, ya que muchas veces su operatoria depende de esos sistemas, que requieren una inversión. Esto significa que las organizaciones necesitan seguir invirtiendo para mantenerlos o evolucionarlos.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Uno de los problemas que se presentan es que si el sistema es de utilidad se le pedirá que se adapte a ese entorno cambiante, pero esa adaptación implica que su estructura se va <strong>degradando en forma paulatina</strong>.',
      },
      {
        type: 'h3',
        text: 'Mantenimiento',
        criollo:
          'Cambiar cosas del sistema una vez que ya está entregado. Va desde fixear una línea hasta meter requerimientos nuevos. Y siempre es más caro hacerlo acá que en el desarrollo original.',
      },
      {
        type: 'p',
        text:
          'El mantenimiento refiere a cambiar algo en el sistema en forma posterior a haber sido entregado al cliente. Los cambios pueden ser muy variados, e ir desde simples, como corregir un error en una línea de código, hasta más complejos, como corregir errores cometidos en el diseño o la incorporación de nuevos requerimientos.',
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'Los costos de mantenimiento son altos porque es mucho más costoso incorporar una nueva funcionalidad en esta etapa con el sistema funcionando, que llevarlo a cabo durante el desarrollo. Además, introducir cambios o nuevas funcionalidades a un sistema <strong>inevitablemente introduce defectos</strong> en él.',
      },
      {
        type: 'h3',
        text: 'Qué es la reingeniería',
        criollo:
          'No es rehacer todo: es agarrar el sistema que tenés, redocumentarlo, reestructurarlo, llevarlo a un lenguaje más moderno, y ajustar la estructura y los valores de los datos. Pero la funcionalidad y la arquitectura no se tocan.',
      },
      {
        type: 'p',
        text:
          'La reingeniería debe entenderse como un proceso mediante el cual se busca la mejora de un software existente.',
      },
      {
        type: 'p',
        text:
          'Las sucesivas modificaciones hacen estragos en los programas que, originalmente, puede que hayan sido pensados en optimizar los recursos utilizados. Para mejorar esa estructura y la comprensión del sistema puede emplearse reingeniería.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Según Sommerville: «La reingeniería de software puede implicar redocumentar el sistema, organizar y reestructurar el sistema, traducir el sistema a un lenguaje de programación más moderno, y modificar y actualizar la estructura y valores de los datos del sistema». Generalmente, esto se realiza <strong>sin cambiar su funcionalidad ni arquitectura</strong>.',
      },
      {
        type: 'h3',
        text: '¿Por qué hacer reingeniería?',
        criollo:
          'Dos motivos pesados: bajás el riesgo (sobre todo en sistemas críticos donde la empresa muere si no funcionan) y te sale más barato que arrancar de cero.',
      },
      {
        type: 'p',
        text:
          'La reingeniería presenta algunas ventajas ante la posibilidad de cambiar a un nuevo sistema desarrollado en forma completa:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Disminuir el riesgo</strong> que significa desarrollar un sistema desde cero, sobre todo en sistemas críticos donde la empresa depende de ellos para mantenerse operativa. Un retraso en la disponibilidad del nuevo sistema puede causar daños severos.',
          '<strong>Menor costo</strong>: aunque la reingeniería tiene un costo, siempre será menor que el requerido para desarrollar un sistema completamente nuevo.',
        ],
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-15-1',
          q: 'Una vez entregado un sistema de software, raramente recibe modificaciones para adaptarse al entorno.',
          a: false,
          explain:
            'Falso. El apunte dice que inevitablemente suele sufrir modificaciones para adaptarse a cambios en el entorno.',
        },
        {
          id: 'tf-15-2',
          q: 'Adaptar un sistema a un entorno cambiante implica que su estructura se va degradando paulatinamente.',
          a: true,
          explain:
            'Verdadero. Esa degradación paulatina es el problema que justifica aplicar reingeniería.',
        },
        {
          id: 'tf-15-3',
          q: 'Introducir cambios o nuevas funcionalidades a un sistema en mantenimiento nunca introduce defectos nuevos.',
          a: false,
          explain:
            'Falso. El apunte dice que introducir cambios inevitablemente introduce defectos en el sistema.',
        },
        {
          id: 'tf-15-4',
          q: 'La reingeniería de software generalmente cambia la funcionalidad y la arquitectura del sistema.',
          a: false,
          explain:
            'Falso. Según Sommerville, generalmente se realiza sin cambiar su funcionalidad ni arquitectura.',
        },
        {
          id: 'tf-15-5',
          q: 'La reingeniería siempre tiene un costo mayor que desarrollar un sistema completamente nuevo.',
          a: false,
          explain:
            'Falso. El apunte dice exactamente lo contrario: el costo de la reingeniería siempre será menor que desarrollar uno nuevo.',
        },
      ],
      mc: [
        {
          id: 'mc-15-1',
          q: 'Según el apunte, ¿cuál es uno de los principales problemas al adaptar un sistema a un entorno cambiante?',
          options: [
            'Aumenta automáticamente la performance del sistema',
            'Su estructura se va degradando en forma paulatina',
            'Reduce el costo de las próximas modificaciones',
            'Elimina los defectos heredados del diseño',
          ],
          correctIndex: 1,
          explain:
            'La adaptación al entorno cambiante degrada paulatinamente la estructura del sistema.',
        },
        {
          id: 'mc-15-2',
          q: 'El mantenimiento puede incluir cambios como…',
          options: [
            'Solo corregir errores de una sola línea de código',
            'Solo agregar nuevos requerimientos',
            'Desde corregir un error simple hasta incorporar nuevos requerimientos o corregir errores de diseño',
            'Únicamente cambiar la base de datos del sistema',
          ],
          correctIndex: 2,
          explain:
            'El apunte describe el mantenimiento como un espectro amplio: desde correcciones simples hasta cambios de diseño y nuevos requerimientos.',
        },
        {
          id: 'mc-15-3',
          q: 'Según Sommerville, la reingeniería de software puede implicar…',
          options: [
            'Cambiar la arquitectura y la funcionalidad del sistema',
            'Reescribir totalmente el sistema bajo una nueva metodología',
            'Redocumentar, organizar/reestructurar, traducir a un lenguaje más moderno y actualizar la estructura y valores de los datos',
            'Reemplazar el sistema por un nuevo desarrollo completo',
          ],
          correctIndex: 2,
          explain:
            'Esa es la cita textual de Sommerville en el apunte, y se hace sin cambiar funcionalidad ni arquitectura.',
        },
        {
          id: 'mc-15-4',
          q: 'Una ventaja clave de la reingeniería frente a un desarrollo nuevo es…',
          options: [
            'Permitir cambiar la arquitectura completa con menor esfuerzo',
            'Disminuir el riesgo, especialmente en sistemas críticos de los que depende la operatoria',
            'Eliminar por completo la necesidad de mantenimiento futuro',
            'Acelerar la incorporación de tecnologías que requieren cambios de funcionalidad',
          ],
          correctIndex: 1,
          explain:
            'Reducir el riesgo en sistemas críticos donde la empresa depende del sistema es la primera ventaja que cita el apunte.',
        },
      ],
      ms: [
        {
          id: 'ms-15-1',
          q: 'Según Sommerville, ¿qué acciones puede implicar la reingeniería de software?',
          options: [
            'Redocumentar el sistema',
            'Organizar y reestructurar el sistema',
            'Traducir el sistema a un lenguaje de programación más moderno',
            'Modificar y actualizar la estructura y valores de los datos',
            'Cambiar la funcionalidad y la arquitectura del sistema',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales de Sommerville. La reingeniería se realiza generalmente SIN cambiar la funcionalidad ni la arquitectura.',
        },
        {
          id: 'ms-15-2',
          q: '¿Qué afirmaciones sobre el mantenimiento y la evolución del software son correctas?',
          options: [
            'Un sistema entregado inevitablemente sufre modificaciones para adaptarse al entorno',
            'Adaptarse al entorno cambiante degrada paulatinamente la estructura del sistema',
            'El mantenimiento puede ir desde corregir un error en una línea hasta sumar nuevos requerimientos',
            'Introducir cambios o nuevas funcionalidades inevitablemente introduce defectos',
            'Mantener funcionalidades nuevas con el sistema funcionando suele costar menos que durante el desarrollo',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. La última invierte la realidad: incorporar funcionalidad en mantenimiento cuesta MÁS que en desarrollo.',
        },
        {
          id: 'ms-15-3',
          q: '¿Qué ventajas tiene la reingeniería frente a desarrollar un sistema desde cero?',
          options: [
            'Disminuye el riesgo, especialmente en sistemas críticos',
            'Un retraso en un sistema nuevo puede causar daños severos a la empresa',
            'El costo de la reingeniería siempre será menor que el de desarrollar un sistema nuevo',
            'Elimina por completo la necesidad de mantenimiento futuro',
            'Permite cambiar arquitectura y funcionalidad simultáneamente sin esfuerzo',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son textuales del apunte. Las dos últimas son inventos: la reingeniería no elimina el mantenimiento ni habilita cambios libres de arquitectura.',
        },
        {
          id: 'ms-15-4',
          q: '¿Qué afirmaciones sobre el alcance de la reingeniería son correctas?',
          options: [
            'Generalmente NO cambia la funcionalidad del sistema',
            'Generalmente NO cambia la arquitectura del sistema',
            'Busca mejorar un software existente',
            'Mejora la estructura y la comprensión del sistema deteriorado por modificaciones sucesivas',
            'Implica siempre reescribir todo el sistema desde cero',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Reingeniería es exactamente lo opuesto a reescribir desde cero — esa es justamente la alternativa a la que sustituye.',
        },
        {
          id: 'ms-15-5',
          q: '¿Qué afirmaciones describen correctamente la relación entre evolución, adaptación y estructura de un sistema de software, según el apunte?',
          options: [
            'Un sistema es modificado para adaptarse a cambios en el entorno que le permitan seguir siendo de utilidad para la organización.',
            'La evolución del software es un punto relevante porque muchas organizaciones dependen operativamente de esos sistemas y de la inversión que representan.',
            'La adaptación al entorno cambiante <strong>preserva</strong> la estructura interna del sistema, ya que las modificaciones la refuerzan.',
            'Si el sistema es de utilidad se le pedirá que se adapte, pero esa adaptación hace que su estructura se vaya degradando en forma paulatina.',
            'La degradación estructural ocurre únicamente cuando el sistema no recibe ningún tipo de mantenimiento durante años.',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 son textuales del apunte: el sistema se modifica para seguir siendo útil, eso importa porque la organización depende de él, y precisamente esa adaptación degrada su estructura paulatinamente. La opción 2 invierte la realidad: la adaptación <em>degrada</em>, no preserva. La opción 4 también es falsa: la degradación ocurre exactamente por las modificaciones (es decir, por el mantenimiento activo), no por la falta de él.',
        },
        {
          id: 'ms-15-6',
          q: '¿Qué afirmaciones sobre los costos y consecuencias del mantenimiento son correctas según el apunte?',
          options: [
            'Es más costoso incorporar una nueva funcionalidad con el sistema ya funcionando que haberlo hecho durante el desarrollo.',
            'Introducir cambios o nuevas funcionalidades a un sistema en mantenimiento <strong>inevitablemente introduce defectos</strong> en él.',
            'El alto costo del mantenimiento se debe exclusivamente a que los programadores desconocen el código original.',
            'Los cambios en mantenimiento pueden variar desde corregir un error en una línea de código hasta incorporar nuevos requerimientos o corregir errores de diseño.',
            'El mantenimiento resulta más barato que el desarrollo original porque el sistema ya está construido y funcionando.',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 son textuales. El apunte dice que incorporar funcionalidad nueva en mantenimiento cuesta más que en el desarrollo (0), que los cambios inevitablemente introducen defectos (1), y que el espectro del mantenimiento va desde lo más simple hasta lo más complejo (3). La opción 2 es un distractor plausible pero no aparece en el apunte: no se menciona el desconocimiento del código como causa. La opción 5 invierte la relación de costos que establece el apunte.',
        },
        {
          id: 'ms-15-7',
          q: '¿Qué afirmaciones sobre la reingeniería como proceso de mejora de software existente son correctas según el apunte?',
          options: [
            'La reingeniería busca la mejora de un software existente deteriorado por sucesivas modificaciones.',
            'Puede emplearse para mejorar la estructura y la comprensión de un sistema cuya estructura fue dañada por cambios acumulados.',
            'La reingeniería implica rediseñar la arquitectura del sistema para re-optimizar los recursos que las modificaciones habían malgastado.',
            'Las sucesivas modificaciones hacen estragos en programas que originalmente podían haber sido pensados para optimizar los recursos.',
            'La reingeniería es aplicable únicamente cuando el sistema nunca fue documentado de manera correcta desde su inicio.',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 son textuales del apunte. La opción 2 es un distractor que suena técnico pero es incorrecto: la reingeniería generalmente se realiza <strong>sin cambiar la arquitectura</strong>, no para rediseñarla. La opción 4 establece una restricción que el apunte no menciona en ningún momento; la reingeniería no requiere falta de documentación inicial para aplicarse.',
        },
        {
          id: 'ms-15-8',
          q: '¿Qué características distinguen a la reingeniería de un desarrollo desde cero, según Sommerville y el apunte?',
          options: [
            'La reingeniería generalmente no cambia la <strong>funcionalidad</strong> del sistema.',
            'La reingeniería generalmente no cambia la <strong>arquitectura</strong> del sistema.',
            'La reingeniería puede incluir traducir el sistema a un lenguaje de programación más moderno sin alterar su funcionalidad.',
            'La reingeniería elimina la necesidad de mantenimiento futuro porque resuelve todos los defectos estructurales acumulados.',
            'La reingeniería y el desarrollo nuevo son equivalentes en costo cuando el sistema es de gran escala, según el apunte.',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las opciones 0, 1 y 2 son correctas: el apunte y Sommerville afirman que la reingeniería se realiza sin cambiar funcionalidad ni arquitectura, y que puede incluir traducir a un lenguaje más moderno. La opción 4 es falsa: el apunte dice que la reingeniería siempre cuesta <em>menos</em> que el desarrollo nuevo, no que sean equivalentes. La opción 5 es un invento: el apunte no afirma que la reingeniería elimine el mantenimiento futuro.',
        },
        {
          id: 'ms-15-9',
          q: '¿Qué afirmaciones sobre el riesgo en sistemas críticos y su relación con la decisión de hacer reingeniería son correctas según el apunte?',
          options: [
            'Un retraso en la disponibilidad de un nuevo sistema desarrollado desde cero puede causar daños severos a la empresa.',
            'En sistemas críticos, la empresa depende de ellos para mantenerse operativa.',
            'La reingeniería elimina definitivamente el riesgo de degradación estructural futura del sistema.',
            'Desarrollar un sistema desde cero implica un riesgo mayor, lo que convierte a la reingeniería en una alternativa más segura.',
            'Solo los sistemas críticos son candidatos válidos para un proceso de reingeniería, según el apunte.',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 son correctas y textuales: el retraso en un sistema nuevo puede causar daños severos (0), los sistemas críticos sostienen la operatoria de la empresa (1), y eso hace que la reingeniería sea menos riesgosa que empezar de cero (3). La opción 3 es falsa: el apunte no afirma que la reingeniería elimine la degradación futura. La opción 5 también es falsa: la ventaja se menciona <em>especialmente</em> para sistemas críticos, pero el apunte no restringe la reingeniería solo a ellos.',
        },
        {
          id: 'ms-15-10',
          q: 'Combinando los conceptos de mantenimiento, degradación estructural y reingeniería, ¿cuáles de estas afirmaciones son verdaderas según el apunte?',
          options: [
            'Las organizaciones necesitan seguir invirtiendo para mantener o evolucionar sus sistemas de software.',
            'La reingeniería es una alternativa que busca mejorar el sistema existente en lugar de reemplazarlo por un nuevo desarrollo completo.',
            'El costo de la reingeniería <strong>siempre será menor</strong> que el requerido para desarrollar un sistema completamente nuevo.',
            'Realizar mantenimiento sostenido durante años garantiza que la estructura del sistema se mantenga íntegra a largo plazo.',
            'Redocumentar el sistema es una de las acciones que puede implicar la reingeniería según Sommerville.',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las opciones 0, 1, 2 y 4 son textuales del apunte: la organización debe seguir invirtiendo (0), la reingeniería mejora lo existente en lugar de reemplazarlo (1), su costo siempre es menor que un desarrollo nuevo (2), y redocumentar es una de las acciones que Sommerville menciona explícitamente (4). La opción 3 es <strong>falsa</strong> y es el distractor más peligroso: el mantenimiento sostenido es precisamente lo que <em>degrada</em> la estructura paulatinamente, no lo que la preserva.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-15-1',
        front: 'Evolución del software',
        back:
          'Modificaciones inevitables a lo largo del tiempo para adaptar el sistema a los cambios del entorno y mantener su utilidad.',
      },
      {
        id: 'fc-15-2',
        front: 'Problema de adaptarse al entorno',
        back: 'La estructura del sistema se va degradando en forma paulatina con cada adaptación.',
      },
      {
        id: 'fc-15-3',
        front: 'Mantenimiento',
        back:
          'Cambiar algo en el sistema después de haberlo entregado al cliente. Va desde corregir un error simple hasta sumar requerimientos o corregir errores de diseño.',
      },
      {
        id: 'fc-15-4',
        front: '¿Por qué es caro mantener?',
        back:
          'Porque incorporar funcionalidad con el sistema ya funcionando cuesta más que hacerlo durante el desarrollo, y además los cambios introducen defectos nuevos.',
      },
      {
        id: 'fc-15-5',
        front: 'Reingeniería',
        back:
          'Proceso para mejorar un software existente: redocumentar, organizar/reestructurar, traducir a un lenguaje más moderno y actualizar la estructura y valores de los datos.',
      },
      {
        id: 'fc-15-6',
        front: 'Reingeniería vs. funcionalidad/arquitectura',
        back: 'Generalmente se realiza sin cambiar la funcionalidad ni la arquitectura del sistema.',
      },
      {
        id: 'fc-15-7',
        front: 'Definición de Sommerville',
        back:
          'Implica redocumentar el sistema, organizar y reestructurarlo, traducirlo a un lenguaje más moderno y modificar/actualizar la estructura y valores de los datos.',
      },
      {
        id: 'fc-15-8',
        front: 'Ventaja 1 — riesgo',
        back:
          'Disminuye el riesgo de partir desde cero, sobre todo en sistemas críticos donde la empresa depende de ellos para operar.',
      },
      {
        id: 'fc-15-9',
        front: 'Ventaja 2 — costo',
        back: 'Aunque tiene un costo, siempre será menor que desarrollar un sistema completamente nuevo.',
      },
    ],
  },
  // ---------- SECCIÓN 16 ----------
  {
    id: '16',
    unit: '12',
    title: 'Métodos formales',
    criollo:
      'Los métodos formales son técnicas con base matemática para describir y verificar sistemas. La idea linda: especificás sin ambigüedad y atrapás errores temprano. La idea fea: no escalan, no sirven para interfaces de usuario ni para desarrollos rápidos, y por eso nunca se popularizaron pese a que varios autores los marcaron como el único camino para mejorar la calidad desde los 80.',
    blocks: [
      {
        type: 'h3',
        text: 'Qué son',
        criollo:
          'Técnicas con base matemática para describir cómo se comporta un sistema. Sirven para especificar, desarrollar y verificar de forma menos ad hoc.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          '«Los métodos formales utilizados para desarrollar sistemas de cómputo son técnicas con bases matemáticas para describir las propiedades del sistema. Tales métodos formales proporcionan marcos conceptuales dentro de los cuales las personas pueden especificar, desarrollar y verificar los sistemas más que ad hoc». — <em>The Encyclopedia of Software Engineering</em>',
      },
      {
        type: 'h3',
        text: 'Por qué no se incorporaron en todos los desarrollos',
        criollo:
          'En otras ingenierías (electrónica, civil) se usan técnicas matemáticas de cajón. En software no pegó, aunque desde los 80 se viene diciendo que es el camino para la calidad. Hay tres razones puntuales.',
      },
      {
        type: 'p',
        text:
          'En algunas ingenierías, como la electrónica o la civil, el desarrollo emplea técnicas matemáticas. Sin embargo, la ingeniería de software se ha resistido pese a que varios autores lo marcaron como el único camino para mejorar la calidad, desde los 80. Existen algunas razones para no haber incorporado las especificaciones formales en todos los desarrollos de software:',
      },
      {
        type: 'ul',
        items: [
          'En estos años se han incorporado otras herramientas y técnicas que han logrado avances en la búsqueda de la calidad, como nuevas metodologías de desarrollo, la incorporación de lenguajes orientados a objetos, la administración de configuraciones, etc.',
          'En el mercado actual, un aspecto crítico es la <strong>interfaz con el usuario</strong> y los <strong>desarrollos rápidos</strong>, y las especificaciones formales no son aptas para ninguna de las dos cosas.',
          'Los métodos formales <strong>no son escalables</strong>. Si bien son exitosos para aplicaciones críticas, se mantienen bajo control si las mismas son pequeñas; en cambio, si su tamaño aumenta, se descontrola su realización.',
        ],
      },
      {
        type: 'h3',
        text: 'Aproximaciones para redactar especificaciones',
        criollo:
          'Dos caminos para escribir especificaciones formales de sistemas industriales: el algebraico (operaciones y relaciones) y el basado en modelos (conjuntos y sucesiones, con operaciones que cambian el estado).',
      },
      {
        type: 'p',
        text:
          'Hay dos aproximaciones pensadas para realizar la redacción de las especificaciones para sistemas de software industriales:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Algebraica</strong>: se basa en que el sistema se describirá empleando operaciones y sus relaciones.',
          '<strong>Basada en modelos</strong>: se basa en la construcción de un modelo del sistema que emplea construcciones matemáticas, como los conjuntos y las sucesiones, y las operaciones del sistema se deben establecer indicando cómo se lleva a cabo la modificación del estado del sistema.',
        ],
      },
      {
        type: 'h3',
        text: 'Lenguajes de especificación formal',
        criollo:
          'Cada aproximación tiene sus lenguajes, y dentro de cada uno se separa entre sistemas secuenciales y concurrentes.',
      },
      {
        type: 'p',
        text:
          'Existen algunos lenguajes que pueden emplearse para llevar a cabo especificaciones formales, de acuerdo a la aproximación que se aplique y al tipo de sistemas que se requiera:',
      },
      {
        type: 'table',
        caption: 'Lenguajes según aproximación y tipo de sistema',
        headers: ['Aproximación', 'Sistema secuencial', 'Sistema concurrente'],
        rows: [
          ['Algebraica', 'Larch, OBJ', 'Lotos, Brinksma'],
          ['Basada en modelos', 'Z, VDM, B', 'CSP, redes de Petri'],
        ],
      },
      {
        type: 'h3',
        text: 'Puntos clave',
        criollo:
          'Tres ventajas: complementan a las especificaciones informales, te fuerzan a analizar requerimientos temprano (donde corregir es barato) y son una herramienta excelente para sistemas críticos donde mandan la seguridad y la confiabilidad.',
      },
      {
        type: 'ul',
        items: [
          'Los métodos de especificación formal sirven de <strong>complemento para las especificaciones informales</strong> por ser precisas y no ambiguas. Eliminan dudas y evitan problemas de interpretación.',
          'Fuerzan a llevar a cabo un análisis de los requerimientos del sistema en una etapa inicial, donde es <strong>menos costoso corregir un error</strong> en los requerimientos.',
          'Son una excelente herramienta para sistemas críticos donde se prioriza la <strong>seguridad y la confiabilidad</strong>.',
        ],
      },
      {
        type: 'h3',
        text: '¿Qué técnica usar?',
        criollo:
          'Si lo que querés especificar son interfaces (clases u tipos abstractos de datos), tirá por el camino algebraico. Si querés mostrar el estado del sistema y el comportamiento con precondiciones y postcondiciones, andá por el basado en modelos.',
      },
      {
        type: 'ul',
        items: [
          'Las especificaciones formales basadas en <strong>técnicas algebraicas</strong> son útiles para especificar las interfaces, definida como un conjunto de clases de objetos o tipos abstractos de datos, porque se oculta el estado del sistema y se especifica en base a las relaciones entre las operaciones de la interfaz.',
          'Las especificaciones formales basadas en <strong>modelos</strong> emplean construcciones matemáticas, como los conjuntos y las funciones, por lo que pueden mostrar el estado del sistema y sirven para simplificar la especificación del comportamiento. Estas especificaciones se basan en definir las precondiciones y postcondiciones sobre el estado del sistema.',
        ],
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-16-1',
          q: 'Los métodos formales son técnicas con bases matemáticas para describir las propiedades del sistema.',
          a: true,
          explain:
            'Verdadero. Esa es la definición de The Encyclopedia of Software Engineering que cita el apunte.',
        },
        {
          id: 'tf-16-2',
          q: 'Las especificaciones formales son adecuadas para diseñar interfaces de usuario y desarrollos rápidos.',
          a: false,
          explain:
            'Falso. El apunte indica que no son aptas para ninguna de las dos cosas, lo que explica parte de su poca adopción.',
        },
        {
          id: 'tf-16-3',
          q: 'Los métodos formales son altamente escalables: a más tamaño, mejor desempeño.',
          a: false,
          explain:
            'Falso. Son exitosos en aplicaciones críticas pequeñas, pero se descontrola su realización al aumentar el tamaño.',
        },
        {
          id: 'tf-16-4',
          q: 'La aproximación basada en modelos emplea construcciones matemáticas como conjuntos y sucesiones para modelar el sistema.',
          a: true,
          explain:
            'Verdadero. La aproximación basada en modelos construye un modelo con conjuntos y sucesiones, y describe las operaciones por cómo cambian el estado.',
        },
        {
          id: 'tf-16-5',
          q: 'Z, VDM y B son lenguajes de aproximación algebraica para sistemas concurrentes.',
          a: false,
          explain:
            'Falso. Z, VDM y B son lenguajes basados en modelos para sistemas secuenciales.',
        },
      ],
      mc: [
        {
          id: 'mc-16-1',
          q: '¿Cuál NO es una de las razones que da el apunte para que las especificaciones formales no se hayan adoptado masivamente?',
          options: [
            'Aparecieron otras herramientas y técnicas que mejoraron la calidad (OO, nuevas metodologías, administración de configuraciones)',
            'No son aptas para interfaces de usuario ni desarrollos rápidos',
            'No son escalables: se descontrolan cuando el tamaño aumenta',
            'Requieren hardware especializado de altísimo costo',
          ],
          correctIndex: 3,
          explain:
            'El apunte da las primeras tres razones. El costo de hardware no es uno de los motivos mencionados.',
        },
        {
          id: 'mc-16-2',
          q: 'En la aproximación algebraica, ¿cómo se describe el sistema?',
          options: [
            'Con conjuntos, sucesiones y operaciones que modifican el estado',
            'Con operaciones y sus relaciones',
            'Con precondiciones y postcondiciones sobre el estado del sistema',
            'Mediante un diagrama de secuencia ejecutable',
          ],
          correctIndex: 1,
          explain:
            'La aproximación algebraica describe el sistema empleando operaciones y sus relaciones.',
        },
        {
          id: 'mc-16-3',
          q: 'Para especificar interfaces (clases u tipos abstractos de datos), el apunte recomienda…',
          options: [
            'Aproximación basada en modelos con CSP',
            'Aproximación algebraica',
            'Especificaciones informales con prototipos',
            'Diagramas de secuencia en UML',
          ],
          correctIndex: 1,
          explain:
            'Las técnicas algebraicas son útiles para interfaces porque ocultan el estado y se basan en las relaciones entre operaciones.',
        },
        {
          id: 'mc-16-4',
          q: '¿Qué lenguajes lista el apunte para la aproximación basada en modelos en sistemas concurrentes?',
          options: [
            'Z, VDM, B',
            'Larch, OBJ',
            'CSP y redes de Petri',
            'Lotos y Brinksma',
          ],
          correctIndex: 2,
          explain:
            'CSP y redes de Petri son los lenguajes basados en modelos para sistemas concurrentes según el cuadro del apunte.',
        },
      ],
      ms: [
        {
          id: 'ms-16-1',
          q: '¿Cuáles son razones que da el apunte para la poca adopción de las especificaciones formales?',
          options: [
            'Aparecieron otras herramientas que mejoraron la calidad (OO, nuevas metodologías, administración de configuraciones)',
            'No son aptas para interfaces de usuario',
            'No son aptas para desarrollos rápidos',
            'No son escalables: se descontrolan al aumentar el tamaño',
            'Requieren hardware especializado de altísimo costo',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. El costo de hardware especializado no se menciona como motivo.',
        },
        {
          id: 'ms-16-2',
          q: '¿Qué afirmaciones sobre las dos aproximaciones de especificación formal son correctas?',
          options: [
            'La algebraica describe el sistema con operaciones y sus relaciones',
            'La basada en modelos construye un modelo con conjuntos y sucesiones',
            'En la basada en modelos, las operaciones se establecen indicando cómo modifican el estado',
            'La algebraica define precondiciones y postcondiciones sobre el estado del sistema',
            'Las dos aproximaciones son alternativas pensadas para sistemas industriales',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las precondiciones y postcondiciones son propias de la aproximación BASADA EN MODELOS, no de la algebraica.',
        },
        {
          id: 'ms-16-3',
          q: 'Según el cuadro del apunte, ¿qué lenguajes son correctos para cada combinación?',
          options: [
            'Algebraica · secuencial → Larch, OBJ',
            'Algebraica · concurrente → Lotos, Brinksma',
            'Basada en modelos · secuencial → Z, VDM, B',
            'Basada en modelos · concurrente → CSP, redes de Petri',
            'Basada en modelos · secuencial → Larch, OBJ',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del cuadro. Larch y OBJ son algebraicos, no basados en modelos.',
        },
        {
          id: 'ms-16-4',
          q: '¿Qué puntos clave atribuye el apunte a los métodos formales?',
          options: [
            'Complementan las especificaciones informales por ser precisos y no ambiguos',
            'Eliminan dudas y evitan problemas de interpretación',
            'Fuerzan un análisis temprano de requerimientos, donde corregir es menos costoso',
            'Son excelentes para sistemas críticos con prioridad en seguridad y confiabilidad',
            'Reemplazan por completo a cualquier otro tipo de especificación',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El apunte los presenta como complemento (no reemplazo) de las especificaciones informales.',
        },
        {
          id: 'ms-16-5',
          q: 'Según el apunte, ¿cuáles de las siguientes afirmaciones sobre la <strong>aproximación basada en modelos</strong> son correctas?',
          options: [
            'Emplea construcciones matemáticas como conjuntos y funciones',
            'Puede mostrar el estado del sistema',
            'Especifica el comportamiento mediante precondiciones y postcondiciones sobre el estado',
            'Oculta el estado del sistema y trabaja solo con relaciones entre operaciones',
            'Es útil para simplificar la especificación del comportamiento',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las opciones 0, 1, 2 y 4 son textuales del apunte: la aproximación basada en modelos usa conjuntos y funciones, <em>puede mostrar el estado</em>, define precondiciones y postcondiciones, y sirve para simplificar la especificación del comportamiento. La opción 3 describe lo contrario: <strong>ocultar el estado y trabajar con relaciones entre operaciones es la característica de la aproximación algebraica</strong>, no de la basada en modelos.',
        },
        {
          id: 'ms-16-6',
          q: '¿Qué afirmaciones son correctas sobre <strong>cuándo usar cada aproximación</strong>, según el apunte?',
          options: [
            'Si querés especificar interfaces (clases u tipos abstractos de datos), la aproximación algebraica es la indicada',
            'La aproximación algebraica es útil porque oculta el estado del sistema y trabaja con relaciones entre operaciones de la interfaz',
            'La aproximación basada en modelos sirve para sistemas donde se necesita mostrar cómo cambia el estado',
            'La aproximación basada en modelos es la recomendada para especificar interfaces de clases',
            'Ambas aproximaciones son igualmente adecuadas para especificar precondiciones y postcondiciones',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las opciones 0, 1 y 2 son textuales del apunte. La opción 3 es falsa: para interfaces se recomienda la algebraica, no la basada en modelos. La opción 4 es falsa: las precondiciones y postcondiciones son <strong>exclusivas de la aproximación basada en modelos</strong>; la algebraica trabaja con relaciones entre operaciones.',
        },
        {
          id: 'ms-16-7',
          q: 'Según el apunte, ¿cuáles de estas afirmaciones sobre los <strong>límites y el alcance</strong> de los métodos formales son correctas?',
          options: [
            'Son exitosos para aplicaciones críticas de tamaño pequeño',
            'Cuando el tamaño de la aplicación aumenta, se descontrola su realización',
            'Son aptos para desarrollos rápidos si se los combina con metodologías ágiles',
            'No son aptos para diseñar interfaces de usuario',
            'Son altamente escalables y se mantienen bajo control sin importar el tamaño',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las opciones 0, 1 y 3 son afirmaciones textuales del apunte. La opción 2 es falsa: el apunte dice que <strong>no son aptos para desarrollos rápidos</strong>, sin excepción ni condición de combinación con ágiles. La opción 4 contradice directamente el apunte, que afirma que los métodos formales <em>no son escalables</em>.',
        },
        {
          id: 'ms-16-8',
          q: 'El apunte menciona que los métodos formales <strong>no se popularizaron</strong> pese a que desde los 80 se los señala como camino a la calidad. ¿Cuáles de estas razones aparecen textualmente en el apunte?',
          options: [
            'La incorporación de lenguajes orientados a objetos y nuevas metodologías logró avances en la búsqueda de la calidad por otros caminos',
            'La administración de configuraciones es una de las herramientas alternativas que contribuyó a mejorar la calidad',
            'El mercado prioriza la interfaz con el usuario, para la cual las especificaciones formales no son aptas',
            'Los métodos formales son demasiado costosos en licencias de software especializado',
            'Los métodos formales no escalan: se descontrolan al aumentar el tamaño de la aplicación',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las opciones 0, 1, 2 y 4 corresponden a las tres razones que el apunte da explícitamente. La opción 3 (costo de licencias) <strong>no aparece en el texto</strong>; es un distractor plausible pero inventado.',
        },
        {
          id: 'ms-16-9',
          q: '¿Cuáles de las siguientes afirmaciones sobre <strong>los lenguajes de especificación formal y su clasificación</strong> son correctas según el cuadro del apunte?',
          options: [
            'Larch y OBJ son lenguajes algebraicos para sistemas secuenciales',
            'CSP es un lenguaje basado en modelos para sistemas concurrentes',
            'Lotos y Brinksma son lenguajes algebraicos para sistemas concurrentes',
            'Z y VDM son lenguajes basados en modelos para sistemas secuenciales',
            'Las redes de Petri son lenguajes algebraicos para sistemas concurrentes',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las opciones 0, 1, 2 y 3 son textuales del cuadro del apunte. La opción 4 es falsa: las redes de Petri son <strong>basadas en modelos</strong> (no algebraicas) para sistemas concurrentes, según el mismo cuadro.',
        },
        {
          id: 'ms-16-10',
          q: 'Según el apunte, ¿qué afirmaciones reflejan correctamente la <strong>relación entre métodos formales y otros tipos de especificación</strong>?',
          options: [
            'Los métodos formales sirven de complemento para las especificaciones informales por ser precisos y no ambiguos',
            'Los métodos formales eliminan dudas y evitan problemas de interpretación que sí tienen las especificaciones informales',
            'Los métodos formales reemplazan completamente a las especificaciones informales en cualquier tipo de proyecto',
            'Los métodos formales fuerzan un análisis temprano de requerimientos, donde corregir es menos costoso',
            'Los métodos formales son una excelente herramienta para sistemas críticos donde se prioriza la seguridad y la confiabilidad',
          ],
          correctIndexes: [0, 1, 3, 4],
          explain:
            'Las opciones 0, 1, 3 y 4 son textuales de la sección \'Puntos clave\' del apunte. La opción 2 es falsa: el apunte los presenta como <strong>complemento</strong> de las especificaciones informales, no como reemplazo; y además aclara que no son aptos para todos los tipos de proyectos (por ejemplo, no sirven para interfaces de usuario ni desarrollos rápidos).',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-16-1',
        front: 'Método formal',
        back:
          'Técnica con base matemática para describir las propiedades de un sistema y especificar, desarrollar y verificarlo de forma menos ad hoc.',
      },
      {
        id: 'fc-16-2',
        front: 'Razón 1 de poca adopción',
        back:
          'Otras herramientas mejoraron la calidad: nuevas metodologías, lenguajes OO, administración de configuraciones, etc.',
      },
      {
        id: 'fc-16-3',
        front: 'Razón 2 de poca adopción',
        back:
          'No son aptas para interfaces de usuario ni para desarrollos rápidos, dos aspectos críticos del mercado actual.',
      },
      {
        id: 'fc-16-4',
        front: 'Razón 3 de poca adopción',
        back:
          'No son escalables: funcionan bien en aplicaciones críticas pequeñas, pero se descontrolan cuando el tamaño aumenta.',
      },
      {
        id: 'fc-16-5',
        front: 'Aproximación algebraica',
        back:
          'Describe el sistema con operaciones y sus relaciones. Sirve para especificar interfaces porque oculta el estado interno.',
      },
      {
        id: 'fc-16-6',
        front: 'Aproximación basada en modelos',
        back:
          'Construye un modelo con conjuntos y sucesiones, y describe las operaciones indicando cómo modifican el estado. Define precondiciones y postcondiciones.',
      },
      {
        id: 'fc-16-7',
        front: 'Lenguajes algebraicos',
        back: 'Secuencial: Larch, OBJ. Concurrente: Lotos, Brinksma.',
      },
      {
        id: 'fc-16-8',
        front: 'Lenguajes basados en modelos',
        back: 'Secuencial: Z, VDM, B. Concurrente: CSP, redes de Petri.',
      },
      {
        id: 'fc-16-9',
        front: 'Tres puntos clave',
        back:
          'Complementan especificaciones informales (precisión, sin ambigüedad), fuerzan análisis temprano de requerimientos (barato corregir) y son excelentes para sistemas críticos donde mandan seguridad y confiabilidad.',
      },
    ],
  },

  // ==================== UNIDAD TP · TRABAJO PRÁCTICO INTEGRADOR ====================
  // Caso: Sistema para librería de compra y reventa de artículos (UP). 6 partes.
  // ---------- PARTE 1 ----------
  {
    id: 'tp.1',
    unit: 'tp',
    title: 'Parte 1 — Determinación del modelo de ciclo de vida',
    criollo: 'Esta es la primera parte del TP de la librería: primero leemos bien el caso y sacamos las características clave del proyecto, y después justificamos por qué elegimos el modelo incremental. Para defenderlo tenés que tener clarísimo POR QUÉ incremental y por qué descartamos espiral, prototipos y evolutivo. Acá te lo dejo machacado.',
    blocks: [
      {
        type: 'h3',
        text: 'De qué va el caso',
        criollo: 'Antes de elegir el modelo, conviene tener identificadas las características del proyecto a partir del enunciado.',
      },
      {
        type: 'p',
        text: 'El caso es el <strong>Sistema para librería de compra y reventa de artículos</strong>. Antes de elegir el modelo de ciclo de vida, lo primero que hicimos fue identificar bien las características del proyecto a partir del enunciado, separándolas en dos lados: lo que tiene que ver con la <strong>organización</strong> y lo que tiene que ver con los <strong>requerimientos</strong>.',
      },
      {
        type: 'h3',
        text: 'Características de la organización',
      },
      {
        type: 'ul',
        items: [
          'Es una librería que maneja tanto <strong>ventas minoristas</strong> (particulares) como <strong>ventas mayoristas</strong> (empresas).',
          'Tienen un <strong>showroom en el microcentro</strong> de Buenos Aires y un <strong>depósito</strong> bastante amplio.',
          'Trabajan con un grupo chico de proveedores (<strong>solo 4 hoy en día</strong>), a los que les pasan los pedidos <strong>todos los viernes</strong>.',
          'Punto clave: la parte de <strong>pagos queda fuera del sistema</strong>, porque la maneja exclusivamente el sector <strong>Contable</strong>.',
          'Ya tienen el <strong>hardware comprado</strong> y quieren usar ese, o sea que hay una <strong>restricción tecnológica inamovible desde el día cero</strong>.',
        ],
      },
      {
        type: 'h3',
        text: 'Características de los requerimientos',
      },
      {
        type: 'ul',
        items: [
          'El sistema tiene que resolver cosas muy concretas: <strong>ventas</strong>, <strong>stock</strong> de ambos lugares y los <strong>pedidos de los viernes</strong>.',
          'Los <strong>requisitos están definidos</strong>: la empresa ya existe, opera todos los días y tiene claro cómo son sus procesos.',
          'Al dejar los pagos afuera, el <strong>alcance queda perfectamente delimitado</strong>.',
          'Como el hardware ya está definido, el <strong>entorno donde va a correr el sistema se conoce de antemano</strong>.',
          'Pueden presentarse <strong>nuevos requisitos a futuro</strong>, como la generación de reportes.',
        ],
      },
      {
        type: 'h3',
        text: 'Modelo seleccionado: Incremental',
        criollo: 'Acá está el corazón del TP. El modelo incremental es el más adecuado, y estas son las 5 razones que damos para defenderlo.',
      },
      {
        type: 'p',
        text: 'Elegimos el <strong>modelo incremental</strong> porque es el más adecuado para este caso. La idea del incremental es construir el sistema en <strong>partes funcionales</strong> (incrementos), donde cada incremento ya entrega valor al cliente antes de tener el sistema completo. Lo justificamos con cinco razones:',
      },
      {
        type: 'ol',
        items: [
          '<strong>Los requisitos son conocidos pero el sistema puede dividirse en partes funcionales.</strong> La librería ya tiene procesos definidos: gestión de stock, pedidos a proveedores, ventas minoristas y ventas mayoristas. Esas áreas pueden convertirse naturalmente en <strong>incrementos independientes</strong>, cada uno entregando valor antes de completar el sistema total.',
          '<strong>El cliente puede ver y usar avances rápidamente.</strong> Al ser un negocio en funcionamiento, conviene que algunas funcionalidades (por ejemplo el control de stock o el registro de ventas) estén disponibles cuanto antes, sin esperar a que todo esté terminado. Esto también ayuda a <strong>detectar problemas en producción</strong>, que se pueden solucionar en futuras versiones.',
          '<strong>La restricción de hardware es un condicionante conocido desde el inicio.</strong> Esto permite planificar cada incremento dentro de esa restricción técnica fija, <strong>sin necesidad de revisar riesgos en cada ciclo</strong> como haría el modelo espiral.',
          '<strong>No hay alta incertidumbre en los requisitos.</strong> El modelo de <strong>prototipos</strong> o el <strong>evolutivo</strong> serían más apropiados si el cliente no supiera lo que necesita. Acá el negocio es concreto y el dominio es comprensible, así que no se justifica construir versiones exploratorias.',
          '<strong>No es un proyecto de alto riesgo tecnológico.</strong> El modelo <strong>espiral</strong> está pensado para proyectos grandes con muchos riesgos. Este es un sistema de gestión para una empresa mediana con tecnología estándar, por lo que el overhead del análisis de riesgos en cada ciclo no se justifica.',
        ],
      },
      {
        type: 'h3',
        text: 'Por qué se descartan los otros modelos',
        criollo: 'Esto es lo que más te van a preguntar al defender: por qué NO los otros.',
      },
      {
        type: 'table',
        caption: 'Comparación: por qué incremental sí y los demás no.',
        headers: ['Modelo', '¿Va o no va? Por qué'],
        rows: [
          ['Incremental', 'SÍ. Requisitos conocidos pero divisibles en partes funcionales (stock, pedidos, ventas), entrega de valor temprana y restricción de hardware conocida desde el inicio.'],
          ['Prototipos', 'NO. Sirve cuando el cliente no sabe bien qué necesita. Acá los requisitos ya están definidos, no hace falta construir versiones exploratorias.'],
          ['Evolutivo', 'NO. Igual que prototipos: apropiado cuando hay alta incertidumbre en los requisitos. Acá el dominio es concreto y comprensible.'],
          ['Espiral', 'NO. Pensado para proyectos grandes con muchos riesgos. Este es un sistema de gestión para una empresa mediana con tecnología estándar; el análisis de riesgos por ciclo es overhead innecesario.'],
        ],
      },
      {
        type: 'h3',
        text: 'Conclusión',
      },
      {
        type: 'p',
        text: 'Avanzamos con un <strong>ciclo de vida incremental</strong> para brindarle al cliente una solución funcional desde las primeras etapas, permitiendo que el showroom y el depósito operen con <strong>módulos críticos</strong> mientras se completan los restantes. Es la elección más lógica porque, si bien los requisitos y el hardware están definidos (lo que permitiría un enfoque clásico), la naturaleza del negocio requiere una <strong>entrega de valor temprana</strong>.',
      },
      {
        type: 'p',
        text: 'El enfoque incremental nos permite asegurar la <strong>estabilidad de cada proceso</strong> (ventas, stock y pedidos) de forma ordenada, minimizando el impacto en la operación diaria de la librería y facilitando la incorporación de <strong>reportes u otros requisitos a futuro</strong> sin alterar la base del sistema.',
      },
      {
        type: 'p',
        text: 'En cuanto a la forma de trabajo del equipo, <strong>Scrum</strong> acompaña bien este modelo: permite organizar el desarrollo en <strong>iteraciones cortas</strong> y revisar avances de manera periódica. Esto sirve en un proyecto donde el sistema puede dividirse en módulos concretos, así cada incremento se planifica, se desarrolla con más orden y se revisa junto con el cliente antes de seguir con el siguiente.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Para defender: incremental porque los requisitos están claros pero se parten en módulos que entregan valor rápido, con el hardware ya fijado de entrada. Prototipos y evolutivo se caen porque NO hay incertidumbre en los requisitos. Espiral se cae porque NO hay alto riesgo tecnológico. Y Scrum acompaña con iteraciones cortas.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-tp.1-1',
          q: 'El modelo de ciclo de vida elegido para el caso de la librería es el incremental.',
          a: true,
          explain: 'Verdadero. El TP selecciona el modelo incremental como el más adecuado para el caso.',
        },
        {
          id: 'tf-tp.1-2',
          q: 'La gestión de pagos forma parte del alcance del sistema a desarrollar.',
          a: false,
          explain: 'Falso. Los pagos quedan fuera del sistema porque los maneja exclusivamente el sector Contable; eso justamente ayuda a delimitar el alcance.',
        },
        {
          id: 'tf-tp.1-3',
          q: 'El hardware todavía no está definido, por eso conviene un modelo que revise riesgos tecnológicos en cada ciclo.',
          a: false,
          explain: 'Falso. El hardware ya está comprado: es una restricción tecnológica inamovible desde el día cero, conocida desde el inicio. Por eso no hace falta revisar riesgos en cada ciclo como el espiral.',
        },
        {
          id: 'tf-tp.1-4',
          q: 'Se descarta el modelo espiral porque no es un proyecto de alto riesgo tecnológico.',
          a: true,
          explain: 'Verdadero. El espiral está pensado para proyectos grandes con muchos riesgos; acá es una empresa mediana con tecnología estándar, así que el análisis de riesgos por ciclo no se justifica.',
        },
        {
          id: 'tf-tp.1-5',
          q: 'Los modelos de prototipos y evolutivo se descartan porque los requisitos del negocio están definidos y hay baja incertidumbre.',
          a: true,
          explain: 'Verdadero. Prototipos y evolutivo sirven cuando el cliente no sabe qué necesita; acá el negocio es concreto y el dominio comprensible, no se justifican versiones exploratorias.',
        },
        {
          id: 'tf-tp.1-6',
          q: 'Según el TP, Scrum no es compatible con un modelo incremental.',
          a: false,
          explain: 'Falso. El TP dice que Scrum acompaña bien el modelo incremental, organizando el desarrollo en iteraciones cortas y revisando avances de forma periódica.',
        },
      ],
      mc: [
        {
          id: 'mc-tp.1-1',
          q: '¿Cuál de estas características del caso ayuda a que el alcance quede perfectamente delimitado?',
          options: [
            'Que trabajen con 4 proveedores',
            'Que los pagos queden fuera del sistema (los maneja Contable)',
            'Que tengan showroom y depósito',
            'Que puedan aparecer reportes a futuro',
          ],
          correctIndex: 1,
          explain: 'Al dejar los pagos afuera (los maneja exclusivamente Contable), el alcance del sistema queda perfectamente delimitado.',
        },
        {
          id: 'mc-tp.1-2',
          q: '¿Por qué razón el TP descarta el modelo de prototipos (y el evolutivo)?',
          options: [
            'Porque el hardware ya está comprado',
            'Porque es un proyecto de alto riesgo tecnológico',
            'Porque no hay alta incertidumbre en los requisitos: el negocio es concreto y conocido',
            'Porque el cliente quiere ver avances rápido',
          ],
          correctIndex: 2,
          explain: 'Prototipos y evolutivo sirven cuando hay alta incertidumbre y el cliente no sabe qué necesita. Acá el negocio es concreto y el dominio comprensible, por eso no se justifican versiones exploratorias.',
        },
        {
          id: 'mc-tp.1-3',
          q: '¿Cada cuánto le pasan los pedidos a los proveedores?',
          options: [
            'Todos los días',
            'Una vez al mes',
            'Todos los viernes',
            'Cuando se queda sin stock',
          ],
          correctIndex: 2,
          explain: 'Trabajan con 4 proveedores a los que les pasan los pedidos todos los viernes.',
        },
        {
          id: 'mc-tp.1-4',
          q: 'Según la conclusión del TP, ¿qué ventaja principal aporta el enfoque incremental al negocio?',
          options: [
            'Permite no documentar los requisitos',
            'Brinda una entrega de valor temprana, con módulos críticos operativos desde las primeras etapas',
            'Elimina la necesidad de revisar avances con el cliente',
            'Permite cambiar el hardware en cada ciclo',
          ],
          correctIndex: 1,
          explain: 'La conclusión destaca la entrega de valor temprana: el showroom y el depósito operan con módulos críticos mientras se completan los restantes, minimizando el impacto en la operación diaria.',
        },
      ],
      ms: [
        {
          id: 'ms-tp.1-1',
          q: '¿Cuáles de las siguientes son razones que da el TP para elegir el modelo incremental?',
          options: [
            'Los requisitos son conocidos pero el sistema puede dividirse en partes funcionales',
            'El cliente puede ver y usar avances rápidamente',
            'El cliente no sabe lo que necesita y hay que explorar',
            'La restricción de hardware es un condicionante conocido desde el inicio',
            'Es un proyecto de alto riesgo tecnológico que necesita análisis por ciclo',
          ],
          correctIndexes: [
            0,
            1,
            3,
          ],
          explain: 'Las razones del TP son: requisitos conocidos pero divisibles en partes funcionales, el cliente ve avances rápido, y la restricción de hardware conocida desde el inicio. Las otras dos son justamente lo contrario: no hay incertidumbre en los requisitos (descarta prototipos/evolutivo) y no es de alto riesgo tecnológico (descarta espiral).',
        },
        {
          id: 'ms-tp.1-2',
          q: '¿Cuáles de estas afirmaciones sobre el caso de la librería son correctas?',
          options: [
            'Maneja ventas minoristas y mayoristas',
            'El sistema debe incluir la gestión de pagos',
            'Tiene un showroom en el microcentro y un depósito amplio',
            'El hardware ya está comprado (restricción fija desde el inicio)',
            'Trabajan con decenas de proveedores',
          ],
          correctIndexes: [
            0,
            2,
            3,
          ],
          explain: 'Correctas: ventas minoristas y mayoristas, showroom en microcentro más depósito, y hardware ya comprado. Falsas: los pagos quedan FUERA del sistema (los maneja Contable) y trabajan con solo 4 proveedores, no decenas.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-tp.1-1',
        front: 'Modelo elegido',
        back: 'El modelo incremental, por ser el más adecuado al caso de la librería: requisitos conocidos pero divisibles en partes funcionales con entrega de valor temprana.',
      },
      {
        id: 'fc-tp.1-2',
        front: '¿Por qué no espiral?',
        back: 'Porque no es un proyecto de alto riesgo tecnológico. El espiral sirve para proyectos grandes con muchos riesgos; acá es una empresa mediana con tecnología estándar.',
      },
      {
        id: 'fc-tp.1-3',
        front: '¿Por qué no prototipos ni evolutivo?',
        back: 'Porque no hay alta incertidumbre en los requisitos. Esos modelos sirven cuando el cliente no sabe qué necesita; acá el negocio es concreto y el dominio comprensible.',
      },
      {
        id: 'fc-tp.1-4',
        front: 'Restricción tecnológica del caso',
        back: 'El hardware ya está comprado: es una restricción inamovible conocida desde el día cero, lo que permite planificar cada incremento sin revisar riesgos en cada ciclo.',
      },
      {
        id: 'fc-tp.1-5',
        front: '¿Por qué los pagos no van en el sistema?',
        back: 'Porque los maneja exclusivamente el sector Contable. Al dejarlos afuera, el alcance del sistema queda perfectamente delimitado.',
      },
      {
        id: 'fc-tp.1-6',
        front: 'Posibles incrementos del sistema',
        back: 'Gestión de stock, pedidos a proveedores, ventas minoristas y ventas mayoristas: cada área puede convertirse en un incremento independiente que entrega valor.',
      },
      {
        id: 'fc-tp.1-7',
        front: 'Metodología de trabajo del equipo',
        back: 'Scrum, que acompaña bien al incremental: organiza el desarrollo en iteraciones cortas y permite revisar avances con el cliente antes de seguir con el siguiente módulo.',
      },
      {
        id: 'fc-tp.1-8',
        front: 'Requisito futuro mencionado',
        back: 'La generación de reportes. El incremental facilita incorporarlo a futuro sin alterar la base del sistema.',
      },
    ],
  },
  // ---------- PARTE 2 ----------
  // ---------- TP INTEGRADOR · PARTE 2 ----------
  {
    id: 'tp.2',
    unit: 'tp',
    title: 'Parte 2 — Organigrama y entrevistas',
    criollo: 'Acá presentamos cómo está armada la librería (el organigrama) y resumimos las tres entrevistas: Ventas, Compras y Depósito. Lo que tenés que defender es el relevamiento: cómo trabajan hoy a mano, qué comprobantes manejan, cómo (no) controlan el stock y, sobre todo, los problemas comunes que justifican el sistema único. Si te preguntan "¿por qué hace falta el sistema?", la respuesta sale toda de acá.',
    blocks: [
      {
        type: 'h3',
        text: 'El organigrama de la librería',
        criollo: 'Cómo está dividida la empresa y de quién depende cada cosa.',
      },
      {
        type: 'p',
        text: 'La estructura arranca en el <strong>Gerente General</strong>, del que dependen cuatro áreas: <strong>Comercial</strong>, <strong>Logística y depósito</strong>, <strong>Compras</strong> y <strong>Contable</strong>. En Comercial está el <strong>Gerente de ventas</strong>, que tiene a cargo a los vendedores <strong>minorista</strong> y <strong>mayorista</strong>. En Logística está el <strong>Jefe de depósito</strong> con sus <strong>operarios</strong>. Compras tiene al <strong>Gerente de Compras</strong>, que se relaciona con los <strong>Proveedores</strong> (vínculo externo, por eso va con línea punteada). Contable cuelga del <strong>Gerente de contaduría</strong>.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/tp/organigrama.png',
        alt: 'Organigrama de la librería: Gerente General arriba; debajo las áreas Comercial, Logística y depósito, Compras y Contable. Comercial deriva en Gerente de ventas y luego Vendedor minorista y mayorista; Logística en Jefe de depósito y operarios; Compras en Gerente de Compras vinculado por línea punteada a Proveedores; Contable en Gerente de contaduría.',
        caption: 'Organigrama de la librería. La línea punteada hacia Proveedores marca un vínculo externo, no una relación jerárquica interna.',
      },
      {
        type: 'h3',
        text: 'Entrevista 1 — Gerente de Ventas',
        criollo: 'La persona a cargo de las ventas mayoristas y minoristas.',
      },
      {
        type: 'p',
        text: 'El <strong>proceso de venta depende del cliente</strong>. En <strong>minorista es directo</strong>: la persona llega al showroom, elige los productos, el vendedor consulta el stock y, si hay, cierra la venta en el momento. En <strong>mayorista es más largo</strong>: la empresa manda el pedido por <strong>mail o WhatsApp</strong>, se verifica contra el depósito si están las cantidades, se arma el <strong>presupuesto con precio mayorista</strong> y recién cuando el cliente confirma se da por cerrado. El <strong>cobro, en los dos casos, lo maneja Contaduría aparte</strong>.',
      },
      {
        type: 'table',
        caption: 'Diferencias entre venta minorista y mayorista',
        headers: ['Aspecto', 'Minorista', 'Mayorista'],
        rows: [
          ['Modalidad', 'De mostrador (showroom)', 'Por volumen'],
          ['Cantidad', 'Pocas unidades', 'Volumen alto'],
          ['Precio', 'Precio de lista', 'Lista de precios más baja'],
          ['Stock', 'Se consulta al cerrar', 'Casi siempre exige verificar stock antes de confirmar'],
          ['Entrega', 'Inmediata', 'La coordina depósito'],
          ['Cliente', 'Eventual', 'Recurrente y fichado'],
        ],
      },
      {
        type: 'p',
        text: 'Hoy las ventas se <strong>registran a mano</strong>: cada venta se carga en una <strong>planilla de Excel compartida</strong> (fecha, vendedor, productos con código y cantidad, precio y, si es mayorista, el cliente). Como la tocan varios, <strong>a veces queda desactualizada o con errores de tipeo</strong>.',
      },
      {
        type: 'p',
        text: 'Sobre los <strong>comprobantes</strong>: en minorista <strong>ticket o factura</strong> según pida el cliente; en mayorista <strong>factura más un remito</strong> que acompaña la mercadería al salir del depósito. Lo fiscal y el cobro lo cierra <strong>Contaduría</strong>; Ventas solo genera el comprobante de la venta y el remito de salida.',
      },
      {
        type: 'p',
        text: 'Para <strong>verificar el stock</strong>, antes de confirmar se consulta al depósito. Si hay, se confirma el pedido y se registra la venta; depósito prepara el producto, lo entrega o despacha, y se actualiza el stock. <strong>Si no hay stock</strong>, se frena ahí: el depósito informa la falta, se le avisa al cliente y, si es algo que se vende seguido, se le pasa el dato a Compras para sumarlo al <strong>pedido del viernes</strong>. Todo eso hoy queda solo en un chat o de palabra.',
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Problemas que detecta Ventas: la información está dispersa y desactualizada (la venta en una planilla, el stock en otra, los pedidos en el mail), lo que genera errores y demoras. Quieren un sistema único donde la venta descuente stock sola y todos vean lo mismo.',
      },
      {
        type: 'h3',
        text: 'Entrevista 2 — Gerente de Compras',
        criollo: 'El que compra a los proveedores.',
      },
      {
        type: 'p',
        text: 'Los pedidos a proveedores se hacen <strong>una vez por semana, los viernes</strong>. Antes de armar el pedido se revisa lo que se vendió en la semana y cómo quedaron los niveles de stock, para saber qué reponer.',
      },
      {
        type: 'p',
        text: 'Para decidir <strong>qué se pide y en qué cantidad</strong>, se basan en dos cosas: los productos que quedaron por <strong>debajo del stock mínimo</strong> y los de <strong>mayor rotación</strong>. Con eso arman un <strong>informe de faltantes</strong> y definen cantidades. Con ese informe se genera la <strong>orden de compra</strong> (productos, cantidades y el proveedor que corresponde, porque trabajan con <strong>cuatro proveedores</strong> y cada uno cubre ciertos artículos) y se la <strong>envían por mail</strong>.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Registro</strong>: la orden queda en el mail enviado y en una planilla (qué se pidió, a quién y en qué fecha). <strong>No hay seguimiento formal del estado</strong> de cada orden.',
          '<strong>Consulta de stock</strong>: preguntan al depósito o miran la planilla de stock, que <strong>no siempre está al día</strong>, así que a veces piden de más o de menos.',
          '<strong>Confirmación del proveedor</strong>: es <strong>informal</strong> (a veces responde el mail o llama), no queda registro claro. Si el proveedor no tiene stock de algo, avisa y se le pide a otro o se espera a la semana siguiente.',
        ],
      },
      {
        type: 'h3',
        text: 'Entrevista 3 — Jefe de depósito',
        criollo: 'Encargado del stock y la logística de los productos.',
      },
      {
        type: 'p',
        text: 'El <strong>control de stock</strong> hoy es con <strong>planillas y control manual</strong>; cada tanto hacen <strong>recuentos físicos</strong> para corregir diferencias. Cuando llega mercadería de un proveedor, la reciben y <strong>controlan el remito contra la orden de compra</strong> (que coincidan productos y cantidades) y después hacen un <strong>control de calidad</strong> de lo que llegó.',
      },
      {
        type: 'p',
        text: 'Si lo recibido <strong>no coincide con la orden o viene con fallas</strong>, registran la diferencia o el problema y <strong>notifican al proveedor</strong>. Según el caso, se <strong>rechaza la mercadería</strong> o se <strong>acepta solo lo que está bien y se reclama el resto</strong>.',
      },
      {
        type: 'p',
        text: 'La <strong>actualización del stock</strong>: cuando la mercadería pasa el control, se ingresa al stock y se almacena; en las ventas se descuenta al preparar y enviar el producto. <strong>Todo se hace a mano, por eso a veces se actualiza tarde</strong>. La <strong>logística</strong> hacia showroom y mayoristas funciona así: el área comercial pide lo que necesita, depósito confirma disponibilidad, prepara el producto y lo envía.',
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Problema que detecta Depósito: los desfasajes por la carga manual hacen que el stock no siempre refleje la realidad. Lo ideal sería un sistema único donde el ingreso de mercadería y las ventas actualicen el stock automáticamente.',
      },
      {
        type: 'h3',
        text: 'Problemas comunes (lo que justifica el sistema)',
        criollo: 'Si juntás las tres entrevistas, las quejas son las mismas. Esto es lo que tenés que tener afilado para defender el TP.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Información dispersa</strong>: la venta en una planilla, el stock en otra, los pedidos en el mail. Cada área mira su propia fuente.',
          '<strong>Carga manual</strong>: ventas, compras y stock se cargan a mano en planillas, con errores de tipeo y dependencia de quién las toca.',
          '<strong>Stock desactualizado</strong>: por la carga manual y los desfasajes, el stock no refleja la realidad, lo que lleva a pedir de más o de menos y a frenar ventas.',
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Moraleja del relevamiento: las tres áreas terminan pidiendo lo mismo, un sistema único donde la venta descuente stock sola, el ingreso de mercadería lo actualice y todos vean la misma información. Esa necesidad es la que justifica todo el proyecto.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-tp.2-1',
          q: 'En la venta minorista el cliente manda el pedido por mail o WhatsApp y se le arma un presupuesto antes de cerrar.',
          a: false,
          explain: 'Falso. Eso es el proceso mayorista. El minorista es directo: la persona llega al showroom, elige, el vendedor consulta el stock y cierra en el momento.',
        },
        {
          id: 'tf-tp.2-2',
          q: 'El cobro de las ventas, tanto minorista como mayorista, lo maneja Contaduría aparte.',
          a: true,
          explain: 'Verdadero. El Gerente de Ventas aclara que en los dos casos el cobro lo maneja Contaduría; Ventas solo genera el comprobante y el remito de salida.',
        },
        {
          id: 'tf-tp.2-3',
          q: 'Los pedidos a los proveedores se arman todos los días según lo que se va vendiendo.',
          a: false,
          explain: 'Falso. Los pedidos se hacen una vez por semana, los viernes, revisando antes lo vendido y los niveles de stock.',
        },
        {
          id: 'tf-tp.2-4',
          q: 'Cuando el depósito recibe mercadería, controla el remito contra la orden de compra y después hace un control de calidad.',
          a: true,
          explain: 'Verdadero. El Jefe de depósito describe exactamente ese doble control: remito contra orden de compra (productos y cantidades) y luego control de calidad.',
        },
        {
          id: 'tf-tp.2-5',
          q: 'La confirmación de que el proveedor recibió y aceptó la orden queda registrada de forma formal y trazable.',
          a: false,
          explain: 'Falso. La confirmación es informal: a veces el proveedor responde el mail o llama, pero no queda un registro claro.',
        },
        {
          id: 'tf-tp.2-6',
          q: 'En el organigrama, el vínculo entre Compras y los Proveedores se representa con línea punteada porque es una relación externa.',
          a: true,
          explain: 'Verdadero. La línea punteada hacia Proveedores marca un vínculo externo, no una relación jerárquica interna de la librería.',
        },
      ],
      mc: [
        {
          id: 'mc-tp.2-1',
          q: '¿Sobre qué dos criterios se decide qué productos pedir y en qué cantidad?',
          options: [
            'Precio del proveedor y plazo de entrega',
            'Productos por debajo del stock mínimo y los de mayor rotación',
            'Pedidos pendientes y reclamos de clientes',
            'Antigüedad del producto y margen de ganancia',
          ],
          correctIndex: 1,
          explain: 'El Gerente de Compras se basa en los productos que quedaron por debajo del stock mínimo y los que más rotación tuvieron; con eso arma el informe de faltantes.',
        },
        {
          id: 'mc-tp.2-2',
          q: '¿Qué comprobantes se emiten en una venta mayorista?',
          options: [
            'Solo ticket',
            'Ticket o factura según pida el cliente',
            'Factura más un remito que acompaña la mercadería',
            'Únicamente la orden de compra',
          ],
          correctIndex: 2,
          explain: 'En mayorista se emite factura más un remito que acompaña la mercadería al salir del depósito. El ticket o factura "según pida el cliente" es el caso minorista.',
        },
        {
          id: 'mc-tp.2-3',
          q: '¿Qué hace el depósito si la mercadería recibida no coincide con la orden o viene con fallas?',
          options: [
            'Acepta todo igual y lo carga al stock',
            'Devuelve siempre el envío completo sin avisar',
            'Registra el problema, notifica al proveedor y rechaza o acepta solo lo que está bien reclamando el resto',
            'Lo deriva directamente a Contaduría',
          ],
          correctIndex: 2,
          explain: 'Registran la diferencia o el problema y notifican al proveedor; según el caso rechazan la mercadería o aceptan solo lo que está bien y reclaman el resto.',
        },
        {
          id: 'mc-tp.2-4',
          q: '¿Por qué el stock "se actualiza tarde" según el Jefe de depósito?',
          options: [
            'Porque el sistema se cae seguido',
            'Porque todo se hace a mano (carga manual)',
            'Porque los proveedores entregan tarde',
            'Porque Contaduría no informa los cobros',
          ],
          correctIndex: 1,
          explain: 'El ingreso de mercadería y el descuento por ventas se hacen a mano, por eso a veces el stock se actualiza tarde y aparecen los desfasajes.',
        },
        {
          id: 'mc-tp.2-5',
          q: '¿Cuántos proveedores maneja Compras y cómo se reparten?',
          options: [
            'Uno solo que cubre todo',
            'Cuatro, y cada uno cubre ciertos artículos',
            'Dos, divididos por minorista y mayorista',
            'Tantos como pida cada cliente',
          ],
          correctIndex: 1,
          explain: 'Trabajan con cuatro proveedores y cada uno cubre ciertos artículos; por eso en la orden de compra se indica el proveedor que corresponde.',
        },
      ],
      ms: [
        {
          id: 'ms-tp.2-1',
          q: '¿Cuáles son los problemas comunes detectados en las entrevistas que justifican el sistema?',
          options: [
            'Información dispersa entre planillas y mail',
            'Falta de proveedores en el mercado',
            'Carga manual de ventas, compras y stock',
            'Stock desactualizado que no refleja la realidad',
            'Exceso de personal en el depósito',
          ],
          correctIndexes: [0, 2, 3],
          explain: 'Los tres problemas comunes son la información dispersa, la carga manual y el stock desactualizado. La falta de proveedores y el exceso de personal no aparecen en las entrevistas.',
        },
        {
          id: 'ms-tp.2-2',
          q: '¿Cuáles de estas características corresponden a la venta MAYORISTA?',
          options: [
            'Pedido por mail o WhatsApp',
            'Entrega inmediata de mostrador',
            'Lista de precios más baja',
            'Casi siempre exige verificar stock antes de confirmar',
            'Cliente eventual sin ficha',
          ],
          correctIndexes: [0, 2, 3],
          explain: 'La mayorista llega por mail o WhatsApp, usa lista de precios más baja y casi siempre exige verificar stock antes de confirmar. La entrega inmediata de mostrador y el cliente eventual son de la minorista (el mayorista es recurrente y fichado).',
        },
        {
          id: 'ms-tp.2-3',
          q: '¿Qué tareas hace el depósito al recibir y manejar la mercadería?',
          options: [
            'Controlar el remito contra la orden de compra',
            'Emitir la factura fiscal de la compra',
            'Hacer control de calidad de lo recibido',
            'Hacer recuentos físicos para corregir diferencias',
            'Definir el precio mayorista de venta',
          ],
          correctIndexes: [0, 2, 3],
          explain: 'El depósito controla remito contra orden de compra, hace control de calidad y recuentos físicos. La factura fiscal es de Contaduría y el precio mayorista lo maneja Ventas.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-tp.2-1',
        front: 'Áreas del organigrama',
        back: 'Del Gerente General dependen cuatro áreas: Comercial, Logística y depósito, Compras y Contable.',
      },
      {
        id: 'fc-tp.2-2',
        front: 'Proceso de venta minorista',
        back: 'Directo: el cliente llega al showroom, elige, el vendedor consulta el stock y, si hay, cierra la venta en el momento. Entrega inmediata y precio de lista.',
      },
      {
        id: 'fc-tp.2-3',
        front: 'Proceso de venta mayorista',
        back: 'El cliente manda el pedido por mail o WhatsApp, se verifica stock contra depósito, se arma presupuesto con precio mayorista y se cierra cuando el cliente confirma. La entrega la coordina depósito.',
      },
      {
        id: 'fc-tp.2-4',
        front: 'Comprobantes de venta',
        back: 'Minorista: ticket o factura según el cliente. Mayorista: factura más remito que acompaña la mercadería. Lo fiscal y el cobro lo cierra Contaduría.',
      },
      {
        id: 'fc-tp.2-5',
        front: 'Pedidos a proveedores',
        back: 'Se hacen una vez por semana, los viernes. Se decide por stock mínimo y rotación armando un informe de faltantes; la orden de compra se envía por mail.',
      },
      {
        id: 'fc-tp.2-6',
        front: 'Informe de faltantes',
        back: 'Documento que arma Compras con los productos por debajo del stock mínimo y los de mayor rotación, para definir qué pedir y en qué cantidad.',
      },
      {
        id: 'fc-tp.2-7',
        front: 'Control de mercadería en depósito',
        back: 'Se controla el remito contra la orden de compra (productos y cantidades) y luego se hace control de calidad. Si hay diferencias o fallas, se rechaza o se acepta solo lo bueno y se reclama el resto.',
      },
      {
        id: 'fc-tp.2-8',
        front: 'Por qué el stock se actualiza tarde',
        back: 'Porque el ingreso de mercadería y el descuento por ventas se hacen a mano (carga manual), lo que genera desfasajes y que el stock no refleje la realidad.',
      },
      {
        id: 'fc-tp.2-9',
        front: 'Problemas comunes que justifican el sistema',
        back: 'Información dispersa (planillas, mail), carga manual y stock desactualizado. Las tres áreas piden un sistema único que descuente y actualice el stock automáticamente.',
      },
    ],
  },
  // ---------- PARTE 3 ----------
  {
    id: 'tp.3',
    unit: 'tp',
    title: 'Parte 3 — Procesos de negocio (BPMN)',
    criollo: 'Acá modelamos cómo funciona la librería por dentro con diagramas BPMN: un proceso general que arranca con el pedido del cliente y se ramifica en tres áreas (Comercial, Compras, Depósito), más tres subprocesos que bajan al detalle (ventas, gestión de pedidos a proveedor e ingreso de mercadería). Para defenderlo, lo clave son los gateways (las decisiones) y los caminos alternativos: qué pasa cuando NO hay stock, cuando se rechaza una compra o cuando la mercadería viene fallada. El PDF en estas páginas casi no tiene texto: todo el contenido vive en los diagramas, así que estudiá los flujos.',
    blocks: [
      {
        type: 'p',
        text: 'En esta parte modelamos los <strong>procesos de negocio</strong> de la librería con notación <strong>BPMN</strong>. Hay un <strong>proceso general</strong> que da la vista de alto nivel y <strong>tres subprocesos</strong> que detallan las actividades clave: <strong>ventas</strong>, <strong>gestión de pedidos a proveedor</strong> e <strong>ingreso de mercadería</strong>. Cada diagrama usa <em>pools</em> (los participantes) y <em>carriles</em> (las áreas internas) para mostrar quién hace qué.',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'En estas páginas (10 a 13) el TP solo presenta los títulos de los diagramas; toda la lógica de los procesos está expresada en los propios diagramas BPMN. Las descripciones de flujo de abajo reconstruyen lo que muestra cada diagrama.',
      },
      {
        type: 'h3',
        text: 'Proceso general',
        criollo: 'La foto grande: del pedido del cliente para abajo, y las tres áreas trabajando en paralelo.',
      },
      {
        type: 'p',
        text: 'El proceso general se organiza en <strong>cuatro pools</strong>: <strong>Cliente</strong>, <strong>Proceso General</strong> (con los carriles <strong>Área Comercial</strong>, <strong>Área de Compras</strong> y <strong>Área de Depósito</strong>) y <strong>Proveedor</strong>. Es la vista de alto nivel: cada área tiene su propio disparador y su propio fin, y las actividades complejas se delegan a subprocesos.',
      },
      {
        type: 'p',
        text: '<strong>Flujo del Área Comercial (venta):</strong>',
      },
      {
        type: 'ol',
        items: [
          'El <strong>Cliente</strong> realiza un pedido (evento de inicio).',
          'El Área Comercial hace la <strong>Recepción de pedido</strong>.',
          'Gateway de decisión: <strong>¿Compra Mayorista o Minorista?</strong>',
          'Según el camino, se invoca el <strong>Sub-proceso de Ventas Mayoristas</strong> o el <strong>Sub-proceso de Ventas Minoristas</strong>.',
          'Llega al evento de <strong>Fin</strong>.',
        ],
      },
      {
        type: 'p',
        text: '<strong>Flujo del Área de Compras y del Área de Depósito (corren en paralelo a la venta):</strong>',
      },
      {
        type: 'ul',
        items: [
          '<strong>Área de Compras</strong>: se dispara con un evento temporal <strong>"Una vez a la semana"</strong> → se ejecuta el <strong>Sub-proceso de compras</strong> → <strong>Fin</strong>.',
          '<strong>Área de Depósito</strong>: arranca con el <strong>Ingreso de mercadería</strong> → <strong>Sub-proceso de ingreso de mercadería</strong> → <strong>Fin de Reposición</strong>.',
          '<strong>Proveedor</strong> (pool externo): <strong>Recibe orden de compra</strong> → <strong>Despachar mercadería</strong> → <strong>Fin</strong>.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/tp/proceso-general.jpeg',
        alt: 'Diagrama BPMN del proceso general con pools Cliente, Proceso General (carriles Área Comercial, Área de Compras y Área de Depósito) y Proveedor.',
        caption: 'Proceso general: el pedido del cliente dispara la venta en el Área Comercial (gateway mayorista/minorista), mientras Compras (disparador semanal) y Depósito (ingreso de mercadería) trabajan en paralelo. El Proveedor recibe la orden y despacha.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Lo defendible del proceso general: la decisión mayorista/minorista bifurca la venta en dos subprocesos distintos, y las áreas no van en una sola fila india — Comercial, Compras y Depósito tienen cada una su disparador (pedido del cliente, temporizador semanal, ingreso de mercadería).',
      },
      {
        type: 'h3',
        text: 'Sub-proceso de venta al cliente',
        criollo: 'El detalle de cómo se concreta una venta, con el chequeo de stock como punto crítico.',
      },
      {
        type: 'p',
        text: 'Este subproceso usa tres carriles: <strong>Cliente</strong>, <strong>Área comercial</strong> y <strong>Área de logística y depósito</strong>. Tiene <strong>dos gateways</strong>: uno que separa minorista de mayorista y otro que decide según haya o no <strong>stock suficiente</strong>.',
      },
      {
        type: 'ol',
        items: [
          'El <strong>Cliente</strong> selecciona productos.',
          'Gateway <strong>¿minorista o mayorista?</strong> → minorista: <strong>atender en showroom</strong>; mayorista: <strong>recibir pedido mayorista</strong>.',
          'El Área comercial hace <strong>Consultar stock</strong> e <strong>Informar stock</strong>.',
          'Gateway <strong>¿hay stock suficiente?</strong> Camino <strong>No</strong>: <strong>Informar falta de stock</strong> → el Cliente <strong>recibe el rechazo</strong> y el flujo termina.',
          'Camino <strong>Sí</strong>: <strong>Confirmar pedido</strong> → <strong>Registrar venta</strong>.',
          'Logística/depósito: <strong>Preparar producto</strong> → <strong>Enviar producto</strong> → <strong>Actualizar stock</strong>.',
          'El Área comercial <strong>Recibe producto</strong> y lo <strong>Entrega</strong>; el Cliente <strong>recibe el producto</strong> → <strong>Fin</strong>.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/tp/subproceso-ventas.png',
        alt: 'Diagrama BPMN del subproceso de venta al cliente con carriles Cliente, Área comercial y Área de logística y depósito.',
        caption: 'Subproceso de ventas: tras seleccionar productos se decide minorista/mayorista, se consulta stock y un gateway decide. Sin stock se informa la falta y se rechaza; con stock se confirma, registra, prepara, envía y actualiza el stock.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'El punto fino para defender ventas: el gateway "¿hay stock suficiente?" es el que parte el flujo en dos. Si no hay, la venta NO sigue: se informa la falta y el cliente recibe el rechazo. La actualización de stock recién pasa después de enviar el producto.',
      },
      {
        type: 'h3',
        text: 'Sub-proceso de gestión de pedidos a proveedor',
        criollo: 'El reabastecimiento: se cruzan los más vendidos con el stock para decidir qué comprar.',
      },
      {
        type: 'p',
        text: 'Carriles <strong>Área de compras</strong>, <strong>Área de logística y depósito</strong> y <strong>Área comercial</strong>. Arranca con un <strong>disparador temporal</strong> y un <strong>gateway paralelo</strong> que lanza dos consultas a la vez; después las ramas se vuelven a unir (<em>join</em>) para decidir la compra.',
      },
      {
        type: 'ol',
        items: [
          '<strong>Disparador temporal</strong> → gateway paralelo: en simultáneo se hace <strong>Consultar a ventas los productos más vendidos</strong> y <strong>Consultar stock a depósito</strong>.',
          '<strong>Depósito</strong>: <strong>Revisar stock</strong> → <strong>Discriminar stock menor a stock mínimo</strong> → gateway <strong>¿existen productos bajo stock mínimo?</strong> → devuelve <strong>informe de faltantes</strong> o de <strong>stock completo</strong>.',
          '<strong>Comercial</strong>: <strong>Devolver informe de productos más vendidos</strong>.',
          'Las ramas se unen (<em>join</em>): el Área de compras hace <strong>Recibir informe de más vendidos</strong> y <strong>Revisar informes</strong>.',
          'Gateway <strong>¿se aprueba la compra?</strong> → camino <strong>No</strong>: <strong>fin</strong> (no se compra).',
          'Camino <strong>Sí</strong>: <strong>Registrar compra en planilla Excel</strong> → <strong>Generar orden de compra</strong> → <strong>Enviar solicitud a proveedores</strong> → <strong>Fin</strong>.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/tp/subproceso-pedidos.png',
        alt: 'Diagrama BPMN del subproceso de gestión de pedidos a proveedor con carriles Área de compras, Área de logística y depósito y Área comercial.',
        caption: 'Subproceso de gestión de pedidos: un gateway paralelo lanza la consulta de más vendidos (Comercial) y la de stock bajo mínimo (Depósito); al unirse, se revisan los informes y un gateway decide si se aprueba o no la compra al proveedor.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Para defender este subproceso fijate en el gateway paralelo (las dos consultas van juntas, no una atrás de otra) y en el gateway "¿se aprueba la compra?". Si no se aprueba, se corta y listo; si se aprueba, recién ahí se registra en Excel, se genera la orden y se manda al proveedor.',
      },
      {
        type: 'h3',
        text: 'Sub-proceso de ingreso de mercadería',
        criollo: 'La recepción: dos controles seguidos (remito y calidad), cada uno con su escape al rechazo.',
      },
      {
        type: 'p',
        text: 'Carriles <strong>Proveedor</strong> y <strong>Área de logística y depósito</strong>. Tiene <strong>dos gateways</strong> en cadena: primero compara la factura con la orden de compra y después controla la calidad. Cada gateway tiene su camino de error con notificación al proveedor.',
      },
      {
        type: 'ol',
        items: [
          'El <strong>Proveedor</strong> envía la mercadería.',
          'Depósito: <strong>Recibir mercadería</strong> → <strong>Control de remito</strong>.',
          'Gateway <strong>¿coincide la factura con la orden de compra?</strong> → camino <strong>No</strong>: <strong>Registrar error</strong> → <strong>Notificar a proveedor</strong> → <strong>Rechazo de mercadería</strong> → <strong>fin</strong>.',
          'Camino <strong>Sí</strong>: <strong>Control de calidad</strong>.',
          'Gateway <strong>¿los productos tienen buena calidad?</strong> → camino <strong>No</strong>: <strong>Registrar error</strong> → <strong>Notificar a proveedor</strong> → <strong>Rechazo de mercadería</strong> → <strong>fin</strong>.',
          'Camino <strong>Sí</strong>: <strong>Ingresar en sistema (stock)</strong> → <strong>Almacenar en el depósito</strong> → <strong>fin</strong>.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/tp/subproceso-ingreso.png',
        alt: 'Diagrama BPMN del subproceso de ingreso de mercadería con carriles Proveedor y Área de logística y depósito.',
        caption: 'Subproceso de ingreso de mercadería: tras recibir la mercadería se controla el remito (¿coincide factura con orden de compra?) y luego la calidad. Cualquiera de los dos controles fallidos registra error y notifica al proveedor; solo si pasan ambos se ingresa al stock y se almacena.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Lo defendible del ingreso: son DOS controles en cadena (remito primero, calidad después) y cada uno frena el ingreso si falla. La mercadería entra al stock recién cuando pasa los dos; cualquiera de los dos errores se registra y se notifica al proveedor, y ambos caminos de error confluyen en el rechazo de la mercadería.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-tp.3-1',
          q: 'El proceso general se organiza en cuatro pools: Cliente, Proceso General (con sus carriles), y Proveedor.',
          a: true,
          explain: 'Verdadero. El proceso general tiene los pools Cliente, Proceso General (con los carriles Área Comercial, Área de Compras y Área de Depósito) y Proveedor.',
        },
        {
          id: 'tf-tp.3-2',
          q: 'En el proceso general, el Área de Compras se dispara con el pedido del cliente.',
          a: false,
          explain: 'Falso. El Área de Compras se dispara con un evento temporal "Una vez a la semana". Quien se dispara con el pedido del cliente es el Área Comercial.',
        },
        {
          id: 'tf-tp.3-3',
          q: 'En el subproceso de ventas, si no hay stock suficiente se informa la falta de stock y el cliente recibe el rechazo.',
          a: true,
          explain: 'Verdadero. El gateway "¿hay stock suficiente?" en su camino No lleva a Informar falta de stock y el cliente recibe el rechazo, terminando el flujo.',
        },
        {
          id: 'tf-tp.3-4',
          q: 'En el subproceso de gestión de pedidos, la consulta de productos más vendidos y la consulta de stock se hacen una después de la otra, en secuencia.',
          a: false,
          explain: 'Falso. Un gateway paralelo lanza ambas consultas en simultáneo (más vendidos a Comercial y stock a Depósito); recién después las ramas se unen.',
        },
        {
          id: 'tf-tp.3-5',
          q: 'En el subproceso de ingreso de mercadería, basta con que coincida la factura con la orden de compra para ingresar los productos al stock.',
          a: false,
          explain: 'Falso. Después del control de remito hay un segundo control de calidad. Solo si se pasan AMBOS controles se ingresa al sistema y se almacena.',
        },
        {
          id: 'tf-tp.3-6',
          q: 'En el subproceso de gestión de pedidos, si no se aprueba la compra el flujo termina sin generar orden de compra.',
          a: true,
          explain: 'Verdadero. El gateway "¿se aprueba la compra?" en su camino No lleva directo al fin; solo el camino Sí registra en Excel, genera la orden y la envía a proveedores.',
        },
      ],
      mc: [
        {
          id: 'mc-tp.3-1',
          q: 'En el proceso general, ¿qué dispara el flujo del Área de Compras?',
          options: [
            'El pedido del cliente',
            'El ingreso de mercadería',
            'Un evento temporal "Una vez a la semana"',
            'La recepción de la orden de compra por el proveedor',
          ],
          correctIndex: 2,
          explain: 'El Área de Compras se dispara con un evento temporal "Una vez a la semana", que lanza el Sub-proceso de compras.',
        },
        {
          id: 'mc-tp.3-2',
          q: 'En la recepción de pedido del proceso general, ¿qué decide el primer gateway del Área Comercial?',
          options: [
            'Si hay stock suficiente o no',
            'Si la compra es Mayorista o Minorista',
            'Si se aprueba la compra al proveedor',
            'Si la factura coincide con la orden de compra',
          ],
          correctIndex: 1,
          explain: 'Tras la Recepción de pedido, el gateway decide "¿Compra Mayorista o Minorista?", invocando el subproceso de ventas correspondiente.',
        },
        {
          id: 'mc-tp.3-3',
          q: 'En el subproceso de ingreso de mercadería, si el control de remito detecta que la factura NO coincide con la orden de compra, ¿qué ocurre?',
          options: [
            'Se hace igual el control de calidad',
            'Se ingresa la mercadería al stock con una observación',
            'Se registra el error, se notifica al proveedor y se rechaza la mercadería',
            'Se almacena en depósito y se avisa al área comercial',
          ],
          correctIndex: 2,
          explain: 'El camino No del gateway "¿coincide la factura con la orden de compra?" lleva a Registrar error, Notificar a proveedor, Rechazo de mercadería y fin.',
        },
        {
          id: 'mc-tp.3-4',
          q: 'En el subproceso de ventas, ¿en qué momento se actualiza el stock?',
          options: [
            'Apenas el cliente selecciona los productos',
            'Después de enviar el producto, en el carril de logística y depósito',
            'Antes de confirmar el pedido',
            'Solo si no hay stock suficiente',
          ],
          correctIndex: 1,
          explain: 'En el camino con stock, logística prepara y envía el producto y recién después actualiza el stock.',
        },
        {
          id: 'mc-tp.3-5',
          q: 'En el subproceso de gestión de pedidos, ¿qué pasa cuando se aprueba la compra?',
          options: [
            'El flujo termina sin más acciones',
            'Se vuelve a consultar el stock a depósito',
            'Se registra la compra en planilla Excel, se genera la orden de compra y se envía la solicitud a proveedores',
            'Se rechaza la mercadería y se notifica al proveedor',
          ],
          correctIndex: 2,
          explain: 'El camino Sí del gateway "¿se aprueba la compra?" lleva a Registrar compra en planilla Excel, Generar orden de compra y Enviar solicitud a proveedores.',
        },
      ],
      ms: [
        {
          id: 'ms-tp.3-1',
          q: '¿Cuáles de los siguientes son carriles del Área del Proceso General en el diagrama general?',
          options: [
            'Área Comercial',
            'Área de Compras',
            'Área de Depósito',
            'Área de Marketing',
            'Área de Recursos Humanos',
          ],
          correctIndexes: [
            0,
            1,
            2,
          ],
          explain: 'El pool Proceso General tiene los carriles Área Comercial, Área de Compras y Área de Depósito. Marketing y Recursos Humanos no aparecen en el diagrama.',
        },
        {
          id: 'ms-tp.3-2',
          q: 'En el subproceso de ingreso de mercadería, ¿qué controles deben superarse para que los productos ingresen al stock?',
          options: [
            'Control de remito (coincidencia factura / orden de compra)',
            'Control de calidad de los productos',
            'Control de fecha de vencimiento',
            'Aprobación del gerente comercial',
            'Verificación del medio de pago del cliente',
          ],
          correctIndexes: [
            0,
            1,
          ],
          explain: 'Son dos controles en cadena: el control de remito (¿coincide la factura con la orden de compra?) y el control de calidad. Solo si se pasan ambos se ingresa al stock. Los otros no figuran en el diagrama.',
        },
        {
          id: 'ms-tp.3-3',
          q: '¿Cuáles de estas afirmaciones sobre el subproceso de gestión de pedidos a proveedor son correctas?',
          options: [
            'Arranca con un disparador temporal',
            'Usa un gateway paralelo para lanzar dos consultas en simultáneo',
            'Depósito discrimina los productos con stock menor al stock mínimo',
            'Si no se aprueba la compra, igual se genera la orden de compra',
            'La compra se registra en una planilla Excel',
          ],
          correctIndexes: [
            0,
            1,
            2,
            4,
          ],
          explain: 'El subproceso arranca con un disparador temporal, usa un gateway paralelo (más vendidos + stock), depósito discrimina stock bajo mínimo y la compra aprobada se registra en Excel. Lo falso es que si NO se aprueba se genere orden: en ese caso el flujo termina.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-tp.3-1',
        front: 'Pools del proceso general',
        back: 'Cliente, Proceso General (con carriles Área Comercial, Área de Compras y Área de Depósito) y Proveedor.',
      },
      {
        id: 'fc-tp.3-2',
        front: 'Disparadores de cada área (proceso general)',
        back: 'Área Comercial: pedido del cliente. Área de Compras: evento temporal "Una vez a la semana". Área de Depósito: ingreso de mercadería.',
      },
      {
        id: 'fc-tp.3-3',
        front: 'Gateway clave del subproceso de ventas',
        back: '"¿Hay stock suficiente?". Si no hay, se informa la falta de stock y el cliente recibe el rechazo. Si hay, se confirma, registra, prepara, envía y se actualiza el stock.',
      },
      {
        id: 'fc-tp.3-4',
        front: 'Minorista vs. mayorista (ventas)',
        back: 'Un gateway separa al cliente minorista (atender en showroom) del mayorista (recibir pedido mayorista) antes de consultar stock.',
      },
      {
        id: 'fc-tp.3-5',
        front: 'Gateway paralelo (gestión de pedidos)',
        back: 'Tras el disparador temporal, lanza en simultáneo dos consultas: productos más vendidos al Área comercial y stock al depósito. Luego las ramas se unen para decidir la compra.',
      },
      {
        id: 'fc-tp.3-6',
        front: 'Decisión de compra al proveedor',
        back: 'Gateway "¿se aprueba la compra?". No: termina el flujo. Sí: registrar compra en Excel, generar orden de compra y enviar solicitud a proveedores.',
      },
      {
        id: 'fc-tp.3-7',
        front: 'Controles del ingreso de mercadería',
        back: 'Dos en cadena: control de remito (¿coincide factura con orden de compra?) y control de calidad. Solo si se pasan ambos se ingresa al sistema y se almacena.',
      },
      {
        id: 'fc-tp.3-8',
        front: 'Camino de error en el ingreso',
        back: 'Tanto si la factura no coincide con la orden como si la calidad es mala, se registra el error y se notifica al proveedor; ambos caminos confluyen en el rechazo de la mercadería.',
      },
      {
        id: 'fc-tp.3-9',
        front: 'Subprocesos del TP',
        back: 'Tres: ventas (al cliente), gestión de pedidos (a proveedor) e ingreso de mercadería. El proceso general los invoca desde sus respectivas áreas.',
      },
    ],
  },
  // ---------- PARTE 4 ----------
  {
    id: 'tp.4',
    unit: 'tp',
    title: 'Parte 4 — Especificación de requerimientos',
    criollo: 'Acá está el listado completo de lo que el sistema tiene que hacer (funcionales), cómo lo tiene que hacer (no funcionales) y los límites que le pusimos al negocio (de negocio). Para defenderlo: aprendete los códigos RFx/RNFx/RNx y, sobre todo, los recortes de alcance (RN2 sin pagos, RN3 proveedores reducidos) porque ahí es donde más te van a apretar.',
    blocks: [
      {
        type: 'h3',
        text: 'Cómo está organizada la especificación',
        criollo: 'Tres grupos: lo que hace, cómo lo hace y hasta dónde llega.',
      },
      {
        type: 'p',
        text: 'Los requerimientos del sistema para la librería se dividen en tres grupos: <strong>requerimientos funcionales</strong> (qué debe hacer el sistema, agrupados por área), <strong>requerimientos no funcionales</strong> (cómo debe comportarse: rendimiento, seguridad, usabilidad, etc.) y <strong>requerimientos de negocio</strong> (las reglas y límites del alcance que define el negocio). Cada uno tiene un código fijo (<code>RFx</code>, <code>RNFx</code>, <code>RNx</code>) que sirve de trazabilidad.',
      },
      {
        type: 'h3',
        text: 'Funcionales — Ventas (RF1 a RF5)',
      },
      {
        type: 'ul',
        items: [
          '<strong>RF1</strong>: El sistema debe permitir registrar ventas minoristas en el momento.',
          '<strong>RF2</strong>: El sistema debe permitir registrar pedidos de venta mayorista.',
          '<strong>RF3</strong>: El sistema debe verificar la disponibilidad de stock antes de confirmar una venta mayorista.',
          '<strong>RF4</strong>: El sistema debe permitir gestionar distintos precios para ventas minoristas y mayoristas.',
          '<strong>RF5</strong>: El sistema debe generar comprobantes de venta.',
        ],
      },
      {
        type: 'h3',
        text: 'Funcionales — Stock (RF6 a RF9)',
      },
      {
        type: 'ul',
        items: [
          '<strong>RF6</strong>: El sistema debe mantener el stock actualizado.',
          '<strong>RF7</strong>: El sistema debe descontar stock automáticamente al registrarse una venta.',
          '<strong>RF8</strong>: El sistema debe incrementar el stock automáticamente al registrarse el ingreso de mercadería.',
          '<strong>RF9</strong>: El sistema debe permitir la consulta de stock en tiempo real.',
        ],
      },
      {
        type: 'h3',
        text: 'Funcionales — Compras (RF10 a RF15)',
      },
      {
        type: 'ul',
        items: [
          '<strong>RF10</strong>: El sistema debe permitir registrar pedidos a proveedores.',
          '<strong>RF11</strong>: El sistema debe permitir generar pedidos de compra de manera periódica.',
          '<strong>RF12</strong>: El sistema debe brindar soporte para la toma de decisiones de compra en base al nivel de stock y volumen de ventas.',
          '<strong>RF13</strong>: El sistema debe generar órdenes de compra a proveedores.',
          '<strong>RF14</strong>: El sistema debe permitir registrar el envío de la orden de compra al proveedor.',
          '<strong>RF15</strong>: El sistema debe registrar la confirmación o recepción de la orden por parte del proveedor.',
        ],
      },
      {
        type: 'h3',
        text: 'Funcionales — Ingreso de mercadería (RF16 a RF18)',
      },
      {
        type: 'ul',
        items: [
          '<strong>RF16</strong>: El sistema debe permitir registrar la recepción de mercadería.',
          '<strong>RF17</strong>: El sistema debe permitir verificar los productos recibidos en relación con el pedido realizado.',
          '<strong>RF18</strong>: El sistema debe registrar inconsistencias entre productos solicitados y recibidos.',
        ],
      },
      {
        type: 'h3',
        text: 'Funcionales — Información (RF19 a RF21)',
      },
      {
        type: 'ul',
        items: [
          '<strong>RF19</strong>: El sistema debe centralizar la información actualmente distribuida en planillas y correos electrónicos.',
          '<strong>RF20</strong>: El sistema debe permitir la consulta del historial de ventas.',
          '<strong>RF21</strong>: El sistema debe permitir la consulta del historial de compras.',
        ],
      },
      {
        type: 'h3',
        text: 'Funcionales — Usuarios (RF22 a RF23)',
      },
      {
        type: 'ul',
        items: [
          '<strong>RF22</strong>: El sistema debe permitir la gestión de usuarios con distintos roles.',
          '<strong>RF23</strong>: El sistema debe permitir el acceso concurrente a la información por parte de las distintas áreas.',
        ],
      },
      {
        type: 'h3',
        text: 'No funcionales (RNF1 a RNF5)',
        criollo: 'Acá está el "cómo": rendimiento, seguridad, compatibilidad, usabilidad y consistencia.',
      },
      {
        type: 'table',
        caption: 'Requerimientos no funcionales del sistema',
        headers: ['Código', 'Requerimiento'],
        rows: [
          ['RNF1', 'El sistema debe proporcionar tiempos de respuesta adecuados para la consulta de stock en tiempo real.'],
          ['RNF2', 'El sistema debe garantizar control de acceso basado en roles de usuario.'],
          ['RNF3', 'El sistema debe ser compatible con el hardware existente.'],
          ['RNF4', 'El sistema debe presentar una interfaz de uso simple e intuitiva.'],
          ['RNF5', 'El sistema debe garantizar la consistencia de la información, evitando discrepancias en el stock.'],
        ],
      },
      {
        type: 'h3',
        text: 'De negocio (RN1 a RN3)',
        criollo: 'Las reglas que marcan hasta dónde llega el sistema. Estos son los que más conviene tener afilados para la defensa.',
      },
      {
        type: 'ul',
        items: [
          '<strong>RN1</strong>: El sistema debe soportar ventas minoristas y mayoristas.',
          '<strong>RN2</strong>: El sistema no debe incluir la gestión de pagos.',
          '<strong>RN3</strong>: El sistema debe contemplar la gestión de un conjunto reducido de proveedores.',
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Límites del alcance (clave para defender): por <strong>RN2</strong> el sistema <strong>NO incluye la gestión de pagos</strong>, y por <strong>RN3</strong> solo contempla un <strong>conjunto reducido de proveedores</strong>. Si en la defensa preguntan por cobros, facturación de pagos o cientos de proveedores, la respuesta es que quedaron fuera del alcance por decisión de negocio.',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'No funcionales que conviene resaltar: <strong>RNF3</strong> exige compatibilidad con el hardware existente (no hace falta cambiar las máquinas), <strong>RNF2</strong> impone control de acceso por roles (de la mano de RF22) y <strong>RNF5</strong> garantiza la consistencia del stock, evitando discrepancias.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Truco para acordarte de los funcionales: van por área del negocio — Ventas, Stock, Compras, Ingreso de mercadería, Información y Usuarios. Si te acordás de las áreas, reconstruís casi todos los RFx.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-tp.4-1',
          q: 'El requerimiento RN2 establece que el sistema NO debe incluir la gestión de pagos.',
          a: true,
          explain: 'Verdadero. RN2 dice textual que el sistema no debe incluir la gestión de pagos: es un límite de alcance del negocio.',
        },
        {
          id: 'tf-tp.4-2',
          q: 'Según RF3, el sistema debe verificar la disponibilidad de stock antes de confirmar una venta mayorista.',
          a: true,
          explain: 'Verdadero. RF3 exige verificar la disponibilidad de stock antes de confirmar una venta mayorista.',
        },
        {
          id: 'tf-tp.4-3',
          q: 'El requerimiento RNF3 indica que el sistema debe correr únicamente sobre hardware nuevo a comprar.',
          a: false,
          explain: 'Falso. RNF3 pide justo lo contrario: que el sistema sea compatible con el hardware existente.',
        },
        {
          id: 'tf-tp.4-4',
          q: 'RN3 indica que el sistema debe contemplar la gestión de un conjunto reducido de proveedores.',
          a: true,
          explain: 'Verdadero. RN3 acota el alcance a un conjunto reducido de proveedores.',
        },
        {
          id: 'tf-tp.4-5',
          q: 'El control de acceso basado en roles de usuario es un requerimiento funcional (RF).',
          a: false,
          explain: 'Falso. El control de acceso basado en roles es el no funcional RNF2. El funcional asociado es RF22 (gestión de usuarios con distintos roles), pero la garantía de control de acceso es no funcional.',
        },
        {
          id: 'tf-tp.4-6',
          q: 'RF19 plantea centralizar la información que hoy está distribuida en planillas y correos electrónicos.',
          a: true,
          explain: 'Verdadero. RF19 busca centralizar la información actualmente distribuida en planillas y correos electrónicos.',
        },
      ],
      mc: [
        {
          id: 'mc-tp.4-1',
          q: '¿En qué categoría de requerimientos funcionales se ubica RF7 ("descontar stock automáticamente al registrarse una venta")?',
          options: [
            'Ventas',
            'Stock',
            'Compras',
            'Ingreso de mercadería',
          ],
          correctIndex: 1,
          explain: 'RF7 pertenece a la categoría Stock (RF6 a RF9): descontar stock automáticamente al registrarse una venta.',
        },
        {
          id: 'mc-tp.4-2',
          q: '¿Cuál de estos es un requerimiento de negocio (RN)?',
          options: [
            'El sistema debe generar comprobantes de venta',
            'El sistema debe ser compatible con el hardware existente',
            'El sistema no debe incluir la gestión de pagos',
            'El sistema debe permitir la consulta de stock en tiempo real',
          ],
          correctIndex: 2,
          explain: '"El sistema no debe incluir la gestión de pagos" es RN2, un requerimiento de negocio. Generar comprobantes es RF5 (funcional), la compatibilidad de hardware es RNF3 (no funcional) y la consulta de stock en tiempo real es RF9 (funcional).',
        },
        {
          id: 'mc-tp.4-3',
          q: 'El requerimiento RNF5 apunta específicamente a:',
          options: [
            'Tiempos de respuesta adecuados en la consulta de stock',
            'Una interfaz de uso simple e intuitiva',
            'El control de acceso basado en roles',
            'Garantizar la consistencia de la información, evitando discrepancias en el stock',
          ],
          correctIndex: 3,
          explain: 'RNF5 garantiza la consistencia de la información, evitando discrepancias en el stock. Los tiempos de respuesta son RNF1, la interfaz simple es RNF4 y el control de acceso por roles es RNF2.',
        },
        {
          id: 'mc-tp.4-4',
          q: '¿Cuál de los siguientes requerimientos pertenece a la categoría Compras?',
          options: [
            'RF5: generar comprobantes de venta',
            'RF13: generar órdenes de compra a proveedores',
            'RF16: registrar la recepción de mercadería',
            'RF22: gestión de usuarios con distintos roles',
          ],
          correctIndex: 1,
          explain: 'RF13 (generar órdenes de compra a proveedores) pertenece a Compras (RF10 a RF15). RF5 es Ventas, RF16 es Ingreso de mercadería y RF22 es Usuarios.',
        },
      ],
      ms: [
        {
          id: 'ms-tp.4-1',
          q: '¿Cuáles de los siguientes son requerimientos NO funcionales (RNF) del sistema?',
          options: [
            'Tiempos de respuesta adecuados para la consulta de stock en tiempo real',
            'Generar comprobantes de venta',
            'Control de acceso basado en roles de usuario',
            'Compatibilidad con el hardware existente',
            'Registrar pedidos a proveedores',
          ],
          correctIndexes: [
            0,
            2,
            3,
          ],
          explain: 'Los no funcionales son RNF1 (tiempos de respuesta), RNF2 (control de acceso por roles) y RNF3 (compatibilidad con hardware existente). Generar comprobantes es RF5 y registrar pedidos a proveedores es RF10: ambos funcionales.',
        },
        {
          id: 'ms-tp.4-2',
          q: '¿Cuáles de estas afirmaciones describen límites del alcance definidos por los requerimientos de negocio?',
          options: [
            'El sistema no debe incluir la gestión de pagos',
            'El sistema debe contemplar un conjunto reducido de proveedores',
            'El sistema debe descontar stock automáticamente al registrar una venta',
            'El sistema debe soportar ventas minoristas y mayoristas',
            'El sistema debe generar comprobantes de venta',
          ],
          correctIndexes: [
            0,
            1,
            3,
          ],
          explain: 'Los requerimientos de negocio son RN1 (soportar minoristas y mayoristas), RN2 (no incluir gestión de pagos) y RN3 (conjunto reducido de proveedores). Descontar stock (RF7) y generar comprobantes (RF5) son funcionales.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-tp.4-1',
        front: 'RN2',
        back: 'Requerimiento de negocio: el sistema no debe incluir la gestión de pagos. Es un límite del alcance.',
      },
      {
        id: 'fc-tp.4-2',
        front: 'RN3',
        back: 'Requerimiento de negocio: el sistema debe contemplar la gestión de un conjunto reducido de proveedores.',
      },
      {
        id: 'fc-tp.4-3',
        front: 'RN1',
        back: 'Requerimiento de negocio: el sistema debe soportar ventas minoristas y mayoristas.',
      },
      {
        id: 'fc-tp.4-4',
        front: 'Categorías de los RF',
        back: 'Los funcionales se agrupan por área: Ventas (RF1-RF5), Stock (RF6-RF9), Compras (RF10-RF15), Ingreso de mercadería (RF16-RF18), Información (RF19-RF21) y Usuarios (RF22-RF23).',
      },
      {
        id: 'fc-tp.4-5',
        front: 'RNF2',
        back: 'No funcional: el sistema debe garantizar control de acceso basado en roles de usuario. Va de la mano de RF22 (gestión de usuarios con roles).',
      },
      {
        id: 'fc-tp.4-6',
        front: 'RNF3',
        back: 'No funcional: el sistema debe ser compatible con el hardware existente, sin necesidad de cambiar las máquinas.',
      },
      {
        id: 'fc-tp.4-7',
        front: 'RNF5',
        back: 'No funcional: el sistema debe garantizar la consistencia de la información, evitando discrepancias en el stock.',
      },
      {
        id: 'fc-tp.4-8',
        front: 'RF3',
        back: 'Funcional (Ventas): el sistema debe verificar la disponibilidad de stock antes de confirmar una venta mayorista.',
      },
      {
        id: 'fc-tp.4-9',
        front: 'RF19',
        back: 'Funcional (Información): centralizar la información hoy distribuida en planillas y correos electrónicos.',
      },
    ],
  },
  // ---------- PARTE 5 ----------
  {
  id: 'tp.5',
  unit: 'tp',
  title: 'Parte 5 — Diagrama de casos de uso',
  criollo: 'Acá pasamos de los requerimientos a quién hace qué: definimos los 6 actores (y cómo se atan al organigrama), dibujamos el diagrama de casos de uso con sus «include» y «extend», y desarrollamos los 8 casos de uso más las 8 historias de usuario. Para defenderlo, lo más jugoso es saber qué actor dispara cada CU, qué RFs cubre cada uno y por qué hay relaciones include/extend.',
  blocks: [
    {
      type: 'h3',
      text: 'De qué va esta parte',
    },
    {
      type: 'p',
      text: 'Esta es la <strong>Parte 5</strong> del TP: a partir de los requerimientos relevados (Parte 4) y del organigrama (Parte 2), modelamos el <strong>diagrama de casos de uso</strong> del sistema. La idea es mostrar <strong>qué hace cada actor</strong> con el sistema, qué casos de uso existen y cómo se relacionan entre sí.',
    },
    {
      type: 'h3',
      text: 'Actores del sistema',
      criollo: 'Seis actores. Cinco salen del organigrama y uno (el Administrador) es puramente del sistema.',
    },
    {
      type: 'p',
      text: 'Los actores del sistema, <strong>alineados con los cargos del organigrama relevado en la Parte 2</strong>, son seis:',
    },
    {
      type: 'ul',
      items: [
        '<strong>Vendedor</strong>',
        '<strong>Jefe de depósito</strong>',
        '<strong>Gerente de Compras</strong>',
        '<strong>Gerente General</strong>',
        '<strong>Proveedor</strong>',
        '<strong>Administrador</strong>',
      ],
    },
    {
      type: 'figure',
      src: 'images/diagrams/introduccion-ing-software/tp/casos-de-uso.png',
      alt: 'Diagrama de casos de uso del Sistema de Gestión Comercial, con los seis actores conectados a sus casos de uso y las relaciones include y extend entre casos.',
      caption: 'Diagrama de casos de uso del sistema. El Vendedor dispara Registrar venta minorista y Registrar pedido mayorista (ambos «include» Verificar disponibilidad de stock y Generar comprobante de venta); el Jefe de depósito hace Consultar stock en tiempo real y Registrar ingreso de mercadería («extend» Registrar inconsistencias); el Gerente de Compras genera la orden de compra («extend» Generar pedido periódico); el Proveedor confirma la orden; el Gerente General consulta el historial; y el Administrador gestiona usuarios y roles.',
    },
    {
      type: 'h3',
      text: 'Correspondencia con el organigrama',
      criollo: 'Esta tabla es oro para defender: cada actor del sistema se mapea contra un cargo real (o se aclara que no existe en el organigrama).',
    },
    {
      type: 'table',
      caption: 'Correspondencia entre actores del sistema, cargos del organigrama (Parte 2), área y casos de uso.',
      headers: ['Actor (sistema)', 'Cargo en el organigrama', 'Área', 'Casos de uso'],
      rows: [
        ['Vendedor', 'Vendedor Minorista / Vendedor Mayorista', 'Comercial', 'CU1, CU2'],
        ['Jefe de depósito', 'Jefe de depósito', 'Logística y depósito', 'CU3, CU4'],
        ['Gerente de Compras', 'Gerente de Compras', 'Compras', 'CU5'],
        ['Gerente General', 'Gerente General', 'Dirección', 'CU7'],
        ['Proveedor', 'Proveedores (entidad externa)', '—', 'CU8'],
        ['Administrador', 'Rol de sistema (no figura en el organigrama)', 'TI / Sistema', 'CU6'],
      ],
    },
    {
      type: 'callout',
      tone: 'info',
      text: 'Nota del TP: el <strong>Administrador es un rol funcional del sistema</strong> (gestión de cuentas y permisos) y <strong>no se corresponde con un cargo del organigrama operativo</strong> de la librería. Por eso es el único actor que no tiene un cargo real detrás.',
    },
    {
      type: 'h3',
      text: 'Las relaciones del diagrama: «include» y «extend»',
      criollo: 'Include = siempre pasa, es parte obligada del flujo. Extend = solo pasa a veces, bajo cierta condición.',
    },
    {
      type: 'p',
      text: 'El diagrama usa dos tipos de relación entre casos de uso. Con <strong>«include»</strong> (incluye), un caso de uso <strong>siempre ejecuta a otro</strong> como parte de su flujo: tanto <strong>Registrar venta minorista (CU1)</strong> como <strong>Registrar pedido mayorista (CU2)</strong> incluyen <strong>Verificar disponibilidad de stock</strong> y <strong>Generar comprobante de venta</strong>. Con <strong>«extend»</strong> (extiende), un caso de uso <strong>se ejecuta solo bajo cierta condición</strong>: <strong>Registrar ingreso de mercadería (CU4)</strong> extiende a <strong>Registrar inconsistencias</strong> (solo si las cantidades no coinciden), y <strong>Generar orden de compra (CU5)</strong> extiende a <strong>Generar pedido periódico</strong> (solo si se elige esa opción).',
    },
    {
      type: 'h3',
      text: 'CU1 — Registrar venta minorista',
      criollo: 'La venta de mostrador. El vendedor carga, el sistema valida stock, descuenta y genera comprobante.',
    },
    {
      type: 'p',
      text: '<strong>Identificador (RFs que cubre):</strong> RF1, RF4, RF5, RF7, RNF1, RNF2. <strong>Actor principal:</strong> Vendedor.',
    },
    {
      type: 'p',
      text: '<strong>Descripción:</strong> permite registrar una venta realizada en el momento por un cliente presencial y actualiza el inventario. <strong>Precondición:</strong> el usuario debe estar autenticado con rol de <strong>Vendedor</strong> y los productos deben estar registrados en el sistema.',
    },
    {
      type: 'ol',
      items: [
        'El Vendedor inicia el registro de la venta e ingresa código y cantidad de cada producto.',
        'El sistema <strong>valida existencia y disponibilidad de stock</strong> de cada producto.',
        'El sistema agrega el producto al detalle aplicando automáticamente el <strong>precio minorista</strong>.',
        'El Vendedor confirma la finalización (recordando que el sistema <strong>no gestiona pagos</strong>).',
        'El sistema <strong>descuenta el inventario</strong> y <strong>genera el comprobante de venta</strong>.',
      ],
    },
    {
      type: 'ul',
      items: [
        '<strong>3a. Stock insuficiente:</strong> si la cantidad supera el stock físico, muestra advertencia y no permite agregar la línea hasta ajustar la cantidad.',
        '<strong>3b. Producto inexistente:</strong> si el código es incorrecto, informa “Producto no encontrado” y pide ingresarlo de nuevo.',
      ],
    },
    {
      type: 'h3',
      text: 'CU2 — Registrar pedido mayorista',
      criollo: 'Parecido al minorista pero con validación de stock más estricta y precio mayorista. Acá el cliente tiene que estar ya registrado.',
    },
    {
      type: 'p',
      text: '<strong>Identificador:</strong> RF2, RF3, RF4, RF5, RF7, RNF1, RNF2. <strong>Actor principal:</strong> Vendedor.',
    },
    {
      type: 'p',
      text: '<strong>Descripción:</strong> registra formalmente un pedido para un cliente mayorista, <strong>validando de forma estricta que exista stock suficiente</strong> antes de autorizar la confirmación. <strong>Precondición:</strong> Vendedor autenticado y el <strong>cliente mayorista ya registrado</strong> en la base.',
    },
    {
      type: 'ol',
      items: [
        'El Vendedor inicia el pedido y selecciona al cliente mayorista.',
        'Ingresa código y cantidad de cada artículo; el sistema <strong>verifica la disponibilidad de stock en el depósito</strong>.',
        'El sistema agrega la línea aplicando el <strong>esquema de precios mayorista</strong>.',
        'El Vendedor confirma; el sistema <strong>descuenta inventario</strong> y <strong>genera el comprobante</strong>.',
      ],
    },
    {
      type: 'ul',
      items: [
        '<strong>3a. Stock insuficiente:</strong> el sistema <strong>bloquea la carga</strong> de ese artículo, muestra el stock real y exige ajustar la cantidad para continuar.',
      ],
    },
    {
      type: 'h3',
      text: 'CU3 — Consultar stock en tiempo real',
      criollo: 'Solo lectura: mira cuánto hay de un producto, al instante y sin tocar nada.',
    },
    {
      type: 'p',
      text: '<strong>Identificador:</strong> RF6, RF9, RF23, RNF1, RNF5. <strong>Actor principal:</strong> Jefe de depósito.',
    },
    {
      type: 'p',
      text: '<strong>Descripción:</strong> permite consultar de manera inmediata y simultánea las unidades disponibles de cualquier producto, garantizando la <strong>consistencia de los datos en tiempo real</strong>. <strong>Precondición:</strong> usuario autenticado con un rol válido para consultar inventario.',
    },
    {
      type: 'ol',
      items: [
        'El usuario accede al módulo de consulta de stock e ingresa un parámetro de búsqueda (código o descripción).',
        'El sistema busca en la <strong>base de datos centralizada</strong>.',
        'Muestra el detalle del artículo y la <strong>cantidad exacta de stock actualizado</strong>.',
      ],
    },
    {
      type: 'ul',
      items: [
        '<strong>2a. Producto no encontrado:</strong> si no coincide con ningún artículo, muestra “El producto buscado no existe” y permite una nueva búsqueda.',
      ],
    },
    {
      type: 'h3',
      text: 'CU4 — Registrar ingreso de mercadería',
      criollo: 'El depósito recibe lo del proveedor, lo compara contra la orden de compra y recién ahí suma al stock. Si no coincide, dispara el «extend» de inconsistencias.',
    },
    {
      type: 'p',
      text: '<strong>Identificador:</strong> RF8, RF16, RF17, RF18. <strong>Actor principal:</strong> Jefe de depósito. <strong>Actor secundario:</strong> Áreas de Ventas y Compras.',
    },
    {
      type: 'p',
      text: '<strong>Descripción:</strong> registra la recepción física de mercadería de un proveedor, <strong>contrastándola contra la orden de compra original</strong> y registrando formalmente cualquier inconsistencia antes de actualizar el inventario. <strong>Precondición:</strong> usuario autenticado y <strong>debe existir una Orden de Compra (OC)</strong> previamente generada y enviada.',
    },
    {
      type: 'ol',
      items: [
        'El Jefe de depósito selecciona la OC correspondiente al envío recibido; el sistema muestra productos y cantidades solicitadas.',
        'Ingresa o valida las <strong>cantidades físicas que recibe</strong> realmente.',
        'El sistema verifica que productos y cantidades <strong>coincidan con el pedido</strong>.',
        'El Jefe confirma el ingreso; el sistema <strong>incrementa el stock automáticamente</strong> y marca la OC como “Completada/Recibida”.',
      ],
    },
    {
      type: 'ul',
      items: [
        '<strong>4a. Inconsistencias en la entrega:</strong> si las cantidades físicas difieren de la OC (faltantes o sobrantes), el sistema <strong>registra la inconsistencia automáticamente</strong>, notifica al Jefe, <strong>actualiza el stock solo con las cantidades reales</strong> y deja la OC en estado “Parcial” o “Con diferencias” para reclamos.',
      ],
    },
    {
      type: 'h3',
      text: 'CU5 — Generar orden de compra',
      criollo: 'Compras arma el pedido a proveedores con ayuda de sugerencias del sistema, y registra el envío. El «extend» periódico le arma un borrador solo.',
    },
    {
      type: 'p',
      text: '<strong>Identificador:</strong> RF10, RF11, RF12, RF13, RF14, RNF3. <strong>Actor principal:</strong> Gerente de Compras.',
    },
    {
      type: 'p',
      text: '<strong>Descripción:</strong> permite crear pedidos de reposición a proveedores, <strong>usando herramientas de soporte basadas en estadísticas</strong>, y registrar el envío de la orden. <strong>Precondición:</strong> usuario con rol de <strong>Compras</strong> y proveedores ya registrados.',
    },
    {
      type: 'ol',
      items: [
        'El Gerente de Compras entra al módulo; el sistema muestra <strong>sugerencias y alertas de reposición</strong> según stock actual y volumen de ventas histórico.',
        'Selecciona productos, cantidades y elige el proveedor de la lista.',
        'El sistema valida y <strong>genera formalmente la Orden de Compra (OC)</strong>.',
        'El Gerente confirma y <strong>registra el envío de la orden</strong> al proveedor.',
      ],
    },
    {
      type: 'ul',
      items: [
        '<strong>2a. Pedido periódico automatizado:</strong> en vez de crear la OC desde cero, elige “generar pedido periódico”; el sistema crea un <strong>borrador automático</strong> según parámetros de tiempo predefinidos, que el Gerente revisa, ajusta y confirma.',
      ],
    },
    {
      type: 'h3',
      text: 'CU6 — Gestionar usuarios y roles',
      criollo: 'El caso del Administrador: altas, bajas, modificaciones y asignación de roles. Pura seguridad y control de acceso.',
    },
    {
      type: 'p',
      text: '<strong>Identificador:</strong> RF22, RNF2. <strong>Actor principal:</strong> Administrador.',
    },
    {
      type: 'p',
      text: '<strong>Descripción:</strong> administra el ciclo de vida de las cuentas (altas, bajas y modificaciones) y asigna los roles a cada empleado para garantizar el <strong>control de acceso a los módulos</strong>. <strong>Precondición:</strong> usuario autenticado con el rol estricto de <strong>“Administrador”</strong>.',
    },
    {
      type: 'ol',
      items: [
        'El Administrador accede al módulo de configuración y seguridad; el sistema lista los usuarios activos.',
        'Selecciona crear un nuevo usuario (Alta), ingresa los datos y le asigna <strong>obligatoriamente un rol</strong> (Ventas, Compras, Depósito o Administrador).',
        'El sistema valida los datos y que el usuario no esté en uso, guarda el perfil y <strong>aplica las políticas de acceso</strong> del nuevo rol.',
      ],
    },
    {
      type: 'ul',
      items: [
        '<strong>3a. Modificación/Baja:</strong> al editar o eliminar, el sistema carga los datos; en la baja exige <strong>confirmación de seguridad</strong> antes de inhabilitar el acceso.',
        '<strong>5a. Usuario duplicado:</strong> si el nombre o correo ya existe, detiene el proceso y pide un identificador único.',
      ],
    },
    {
      type: 'h3',
      text: 'CU7 — Consultar historial de ventas y compras',
      criollo: 'El Gerente General mira reportes para analizar el negocio. Solo lectura, con filtros por fecha.',
    },
    {
      type: 'p',
      text: '<strong>Identificador:</strong> RF20, RF21, RF22, RNF2. <strong>Actor principal:</strong> Gerente General.',
    },
    {
      type: 'p',
      text: '<strong>Descripción:</strong> permite consultar los movimientos de compras y ventas registrados. <strong>Precondición:</strong> actor autenticado con rol de <strong>Gerente General</strong>.',
    },
    {
      type: 'ol',
      items: [
        'El actor accede al módulo de reportes y elige el tipo de histórico (compras o ventas).',
        'Define los <strong>filtros de búsqueda</strong> (rango de fechas / período).',
        'El sistema busca en la base y muestra el <strong>listado detallado</strong> de resultados.',
      ],
    },
    {
      type: 'ul',
      items: [
        '<strong>4a. Sin resultados:</strong> si no hay registros en el período, muestra “No se encontraron movimientos para las fechas ingresadas”.',
      ],
    },
    {
      type: 'h3',
      text: 'CU8 — Confirmar orden de compra',
      criollo: 'Único caso disparado por un actor externo: el Proveedor entra a un portal y confirma, rechaza o acepta parcial la orden. Notifica a Compras.',
    },
    {
      type: 'p',
      text: '<strong>Identificador:</strong> RF15, RNF2. <strong>Actor principal:</strong> Proveedor. <strong>Actor secundario:</strong> Gerente de Compras (recibe la notificación del resultado).',
    },
    {
      type: 'p',
      text: '<strong>Descripción:</strong> permite al proveedor registrar formalmente la <strong>confirmación, rechazo o aceptación parcial</strong> de una OC recibida, indicando fecha estimada de entrega o motivo, para que la librería pueda dar seguimiento. <strong>Precondición:</strong> Proveedor autenticado en el <strong>portal externo</strong> y debe existir una OC en estado “Enviada” dirigida a ese proveedor.',
    },
    {
      type: 'ol',
      items: [
        'El Proveedor entra al portal externo y ve las OC pendientes; selecciona una.',
        'El sistema muestra el detalle (productos, cantidades, precios y datos de la librería).',
        'El Proveedor <strong>confirma e indica la fecha estimada de entrega</strong>; el sistema deja la OC en “Confirmada”.',
        'El sistema <strong>notifica automáticamente al Gerente de Compras</strong>.',
      ],
    },
    {
      type: 'ul',
      items: [
        '<strong>4a. Rechazo:</strong> el Proveedor rechaza e indica el motivo (falta de stock, precio desactualizado); estado “Rechazada” y notifica a Compras.',
        '<strong>4b. Confirmación parcial:</strong> el Proveedor solo entrega parte; el sistema registra las <strong>cantidades comprometidas</strong> y notifica a Compras.',
      ],
    },
    {
      type: 'h3',
      text: 'Historias de Usuario',
      criollo: 'El mismo contenido pero en formato “Como… Quiero… Para…”. Una por cada caso de uso, mismo actor.',
    },
    {
      type: 'table',
      caption: 'Las 8 historias de usuario, alineadas con los 8 casos de uso.',
      headers: ['#', 'Como…', 'Quiero…', 'Para…'],
      rows: [
        ['HU1', 'Vendedor', 'registrar ventas minoristas', 'generar comprobantes y actualizar el stock automáticamente.'],
        ['HU2', 'Vendedor', 'registrar pedidos mayoristas', 'gestionar ventas a clientes grandes.'],
        ['HU3', 'Jefe de depósito', 'consultar el stock en tiempo real', 'conocer la disponibilidad de productos.'],
        ['HU4', 'Jefe de depósito', 'registrar ingresos de mercadería', 'mantener actualizado el inventario.'],
        ['HU5', 'Gerente de Compras', 'generar órdenes de compra', 'solicitar productos a proveedores.'],
        ['HU6', 'Administrador', 'gestionar usuarios y roles', 'controlar el acceso al sistema.'],
        ['HU7', 'Gerente General', 'consultar el historial de ventas y compras', 'analizar el rendimiento comercial de la empresa.'],
        ['HU8', 'Proveedor', 'confirmar, rechazar o aceptar parcialmente las órdenes de compra recibidas', 'informar a la librería sobre la aceptación del pedido y la fecha estimada de entrega.'],
      ],
    },
    {
      type: 'callout',
      tone: 'criollo',
      text: 'Para la defensa, clavá esto: <strong>Vendedor</strong> → CU1 y CU2; <strong>Jefe de depósito</strong> → CU3 y CU4; <strong>Gerente de Compras</strong> → CU5; <strong>Administrador</strong> → CU6; <strong>Gerente General</strong> → CU7; <strong>Proveedor</strong> → CU8. Y las relaciones: «include» son obligatorias (verificar stock + comprobante en CU1/CU2), «extend» son condicionales (inconsistencias en CU4, pedido periódico en CU5).',
    },
  ],
  quiz: {
    tf: [
      {
        id: 'tf-tp.5-1',
        q: 'El Administrador es uno de los actores del sistema aunque no figure en el organigrama de la librería.',
        a: true,
        explain: 'Verdadero. El TP aclara que el Administrador es un rol funcional del sistema (gestión de cuentas y permisos) y no se corresponde con un cargo del organigrama operativo.',
      },
      {
        id: 'tf-tp.5-2',
        q: 'El caso de uso Confirmar orden de compra (CU8) lo dispara el Gerente de Compras como actor principal.',
        a: false,
        explain: 'Falso. El actor principal de CU8 es el Proveedor; el Gerente de Compras es actor secundario que recibe la notificación del resultado.',
      },
      {
        id: 'tf-tp.5-3',
        q: 'Tanto Registrar venta minorista (CU1) como Registrar pedido mayorista (CU2) incluyen Verificar disponibilidad de stock y Generar comprobante de venta.',
        a: true,
        explain: 'Verdadero. Ambos casos de uso tienen relación «include» con esas dos subfunciones, que se ejecutan siempre como parte del flujo.',
      },
      {
        id: 'tf-tp.5-4',
        q: 'En el pedido mayorista (CU2), si no hay stock suficiente el sistema igual permite cargar el artículo y avisa después.',
        a: false,
        explain: 'Falso. En CU2 el sistema bloquea la carga del artículo, muestra el stock real y exige ajustar la cantidad para poder continuar. La validación es estricta.',
      },
      {
        id: 'tf-tp.5-5',
        q: 'Registrar inconsistencias se relaciona con Registrar ingreso de mercadería mediante una relación «extend».',
        a: true,
        explain: 'Verdadero. Es «extend» porque solo se ejecuta cuando las cantidades físicas recibidas no coinciden con la orden de compra (faltantes o sobrantes).',
      },
      {
        id: 'tf-tp.5-6',
        q: 'El sistema gestiona el cobro de las ventas al confirmar una venta minorista.',
        a: false,
        explain: 'Falso. El CU1 aclara expresamente que el sistema no gestiona pagos; solo descuenta stock y genera el comprobante de venta.',
      },
    ],
    mc: [
      {
        id: 'mc-tp.5-1',
        q: '¿Cuál es el actor principal del caso de uso Consultar stock en tiempo real (CU3)?',
        options: [
          'Gerente General',
          'Jefe de depósito',
          'Administrador',
          'Vendedor',
        ],
        correctIndex: 1,
        explain: 'El actor principal de CU3 es el Jefe de depósito, que también es el responsable de CU4 (Registrar ingreso de mercadería).',
      },
      {
        id: 'mc-tp.5-2',
        q: 'El caso de uso Gestionar usuarios y roles (CU6) cubre principalmente los requerimientos:',
        options: [
          'RF1 y RF5',
          'RF10 a RF14',
          'RF22 y RNF2',
          'RF20 y RF21',
        ],
        correctIndex: 2,
        explain: 'CU6 cubre RF22 (gestión de usuarios con distintos roles) y RNF2 (control de acceso basado en roles). Su actor es el Administrador.',
      },
      {
        id: 'mc-tp.5-3',
        q: '¿Qué significa que un caso de uso A «extiende» a un caso de uso B?',
        options: [
          'Que A siempre se ejecuta como parte obligatoria de B',
          'Que A se ejecuta solo bajo cierta condición dentro de B',
          'Que A y B tienen el mismo actor principal',
          'Que A reemplaza por completo a B',
        ],
        correctIndex: 1,
        explain: 'La relación «extend» indica ejecución condicional: por ejemplo, Registrar inconsistencias solo ocurre si hay diferencias en el ingreso, y Generar pedido periódico solo si se elige esa opción.',
      },
      {
        id: 'mc-tp.5-4',
        q: 'Según la correspondencia con el organigrama, ¿a qué área pertenece el actor Gerente General?',
        options: [
          'Comercial',
          'Compras',
          'Dirección',
          'Logística y depósito',
        ],
        correctIndex: 2,
        explain: 'El Gerente General pertenece al área de Dirección y es el actor de CU7 (Consultar historial de ventas y compras).',
      },
      {
        id: 'mc-tp.5-5',
        q: '¿Cuál es una precondición del caso de uso Registrar ingreso de mercadería (CU4)?',
        options: [
          'Que el cliente mayorista ya esté registrado',
          'Que exista una Orden de Compra previamente generada y enviada al proveedor',
          'Que el usuario tenga rol de Administrador',
          'Que haya una venta en curso',
        ],
        correctIndex: 1,
        explain: 'CU4 requiere que ya exista una Orden de Compra (OC) generada y enviada, porque el ingreso se contrasta contra esa OC antes de sumar al stock.',
      },
    ],
    ms: [
      {
        id: 'ms-tp.5-1',
        q: '¿Cuáles de los siguientes son actores del sistema según la Parte 5?',
        options: [
          'Vendedor',
          'Gerente de Compras',
          'Contador',
          'Proveedor',
          'Cliente minorista',
        ],
        correctIndexes: [0, 1, 3],
        explain: 'Los seis actores son Vendedor, Jefe de depósito, Gerente de Compras, Gerente General, Proveedor y Administrador. El Contador y el Cliente minorista no figuran entre los actores del sistema relevados en la Parte 5.',
      },
      {
        id: 'ms-tp.5-2',
        q: '¿Cuáles de estos casos de uso tienen al Vendedor como actor principal?',
        options: [
          'Registrar venta minorista (CU1)',
          'Registrar pedido mayorista (CU2)',
          'Consultar stock en tiempo real (CU3)',
          'Generar orden de compra (CU5)',
          'Confirmar orden de compra (CU8)',
        ],
        correctIndexes: [0, 1],
        explain: 'El Vendedor es actor principal de CU1 y CU2. CU3 y CU4 son del Jefe de depósito, CU5 del Gerente de Compras y CU8 del Proveedor.',
      },
      {
        id: 'ms-tp.5-3',
        q: '¿Cuáles de las siguientes relaciones del diagrama de casos de uso son correctas?',
        options: [
          'CU1 «include» Verificar disponibilidad de stock',
          'CU4 «extend» Registrar inconsistencias',
          'CU5 «extend» Generar pedido periódico',
          'CU3 «include» Generar comprobante de venta',
          'CU6 «extend» Gestionar usuarios y roles',
        ],
        correctIndexes: [0, 1, 2],
        explain: 'Correctas: CU1 incluye Verificar stock, CU4 extiende a Registrar inconsistencias y CU5 extiende a Generar pedido periódico. CU3 (consulta de stock) no genera comprobantes, y CU6 no tiene esa relación consigo mismo.',
      },
    ],
  },
  flashcards: [
    {
      id: 'fc-tp.5-1',
      front: 'Actores del sistema (6)',
      back: 'Vendedor, Jefe de depósito, Gerente de Compras, Gerente General, Proveedor y Administrador. Cinco salen del organigrama; el Administrador es solo rol del sistema.',
    },
    {
      id: 'fc-tp.5-2',
      front: 'Casos de uso del Vendedor',
      back: 'CU1 Registrar venta minorista y CU2 Registrar pedido mayorista. Ambos incluyen Verificar disponibilidad de stock y Generar comprobante de venta.',
    },
    {
      id: 'fc-tp.5-3',
      front: '«include» vs «extend»',
      back: '«include» = el caso siempre ejecuta a otro (parte obligatoria del flujo). «extend» = el caso se ejecuta solo bajo cierta condición.',
    },
    {
      id: 'fc-tp.5-4',
      front: 'Casos de uso «extend» del diagrama',
      back: 'Registrar inconsistencias extiende a CU4 (solo si hay diferencias en el ingreso) y Generar pedido periódico extiende a CU5 (solo si se elige esa opción).',
    },
    {
      id: 'fc-tp.5-5',
      front: 'CU8 Confirmar orden de compra',
      back: 'Actor principal: Proveedor (en un portal externo). Actor secundario: Gerente de Compras, que recibe la notificación. El proveedor confirma, rechaza o acepta parcial.',
    },
    {
      id: 'fc-tp.5-6',
      front: 'RFs de CU1 (venta minorista)',
      back: 'RF1, RF4, RF5, RF7, RNF1, RNF2. Cubre registrar venta, precios diferenciados, comprobante, descuento de stock y control de acceso.',
    },
    {
      id: 'fc-tp.5-7',
      front: 'Diferencia clave CU1 vs CU2',
      back: 'CU1 usa precio minorista y validación simple; CU2 usa precio mayorista, exige cliente ya registrado y valida stock de forma estricta (bloquea si no alcanza).',
    },
    {
      id: 'fc-tp.5-8',
      front: 'Actor y área del Administrador',
      back: 'Administrador → área TI / Sistema, caso de uso CU6 (Gestionar usuarios y roles). No figura en el organigrama operativo: es rol funcional del sistema.',
    },
    {
      id: 'fc-tp.5-9',
      front: 'Historia de Usuario, formato',
      back: '“Como [actor] / Quiero [acción] / Para [objetivo]”. Hay 8, una por cada caso de uso, con el mismo actor principal.',
    },
  ],
},
  // ---------- PARTE 6 ----------
  {
    id: 'tp.6',
    unit: 'tp',
    title: 'Parte 6 — Diagramas de secuencia y modelo de datos',
    criollo: 'Esta es la Parte 6 y arranca donde quedó la Parte 5: describimos las cuatro subfunciones que faltaban, mostramos cómo funciona cada CU por dentro con un diagrama de secuencia, y armamos el modelo de datos. Para defender esto tenés que tener clarísimo qué se «incluye» y qué se «extiende», quién participa en cada secuencia y la tabla de trazabilidad. Es la parte más densa, así que andá tranqui que la dividimos por subtema.',
    blocks: [
      {
        type: 'h3',
        text: 'De qué va la Parte 6',
      },
      {
        type: 'p',
        text: 'Esta es la <strong>Parte 6</strong> del trabajo y continúa lo que hicimos en la Parte 5. Ya teníamos <strong>ocho casos de uso</strong> descritos; ahora hacemos tres cosas: <strong>(a)</strong> describimos los casos de uso que faltaban, <strong>(b)</strong> mostramos cómo funciona cada caso de uso por dentro con un <strong>diagrama de secuencia</strong>, y <strong>(c)</strong> armamos un <strong>modelo de datos preliminar</strong> que muestra qué información guarda el sistema.',
      },
      {
        type: 'p',
        text: 'Los actores son los mismos que en la Parte 5: <strong>Vendedor</strong>, <strong>Jefe de depósito</strong>, <strong>Gerente de Compras</strong>, <strong>Gerente General</strong>, <strong>Proveedor</strong> y <strong>Administrador</strong>.',
      },
      {
        type: 'p',
        text: 'El sistema tiene <strong>ocho casos de uso principales</strong> (ya descritos en la Parte 5) y <strong>cuatro «subfunciones»</strong> que aparecen en el diagrama de casos de uso unidas con las relaciones <strong>«incluye»</strong> y <strong>«extiende»</strong>. Esas cuatro son los casos de uso que faltaban describir.',
      },
      {
        type: 'table',
        caption: 'Los 8 casos de uso principales (Parte 5) más las 4 subfunciones (Parte 6).',
        headers: ['ID', 'Caso de uso', 'Origen', 'Tipo'],
        rows: [
          ['CU1', 'Registrar venta minorista', 'Parte 5', 'Principal'],
          ['CU2', 'Registrar pedido mayorista', 'Parte 5', 'Principal'],
          ['CU3', 'Consultar stock en tiempo real', 'Parte 5', 'Principal'],
          ['CU4', 'Registrar ingreso de mercadería', 'Parte 5', 'Principal'],
          ['CU5', 'Generar orden de compra', 'Parte 5', 'Principal'],
          ['CU6', 'Gestionar usuarios y roles', 'Parte 5', 'Principal'],
          ['CU7', 'Consultar historial de ventas y compras', 'Parte 5', 'Principal'],
          ['CU8', 'Confirmar orden de compra', 'Parte 5', 'Principal'],
          ['S1', 'Verificar disponibilidad de stock', 'Parte 6', '«incluye» (CU1, CU2)'],
          ['S2', 'Generar comprobante de venta', 'Parte 6', '«incluye» (CU1, CU2)'],
          ['S3', 'Registrar inconsistencias', 'Parte 6', '«extiende» (CU4)'],
          ['S4', 'Generar pedido periódico', 'Parte 6', '«extiende» (CU5)'],
        ],
      },
      {
        type: 'h3',
        text: 'Las 4 subfunciones que faltaban',
        criollo: 'Ojo con esto que es re defendible: ninguna subfunción la inicia un actor directo. Se ejecutan adentro de su caso de uso principal.',
      },
      {
        type: 'p',
        text: 'Describimos las cuatro subfunciones con el mismo formato de cuadro que usamos en la Parte 5. Como son casos de uso <strong>«incluidos»</strong> o <strong>«extendidos»</strong>, <strong>no los inicia un actor directamente</strong>: se ejecutan dentro de su caso de uso principal.',
      },
      {
        type: 'p',
        text: '<strong>S1 — Verificar disponibilidad de stock</strong> (<code>RF3, RF6, RF9</code>). Se ejecuta dentro de «Registrar venta minorista» y «Registrar pedido mayorista»; no tiene actor principal. Revisa si hay suficiente stock de un producto antes de agregarlo a una venta o pedido. Precondición: hay una venta o pedido en curso y el producto existe.',
      },
      {
        type: 'ol',
        items: [
          'Recibe el producto y la cantidad pedida.',
          'Busca cuánto stock hay de ese producto.',
          'Compara el stock con la cantidad pedida.',
          'Avisa si hay stock suficiente. (3a. Si no alcanza, avisa que no hay disponible e informa cuánto queda.)',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'S1 es solo una consulta: postcondición es que se sabe si hay stock suficiente, pero NO cambia ningún dato.',
      },
      {
        type: 'p',
        text: '<strong>S2 — Generar comprobante de venta</strong> (<code>RF5</code>). Caso de uso «incluido» en «Registrar venta minorista» y «Registrar pedido mayorista»; sin actor directo. Crea el comprobante de una venta ya confirmada. <strong>El sistema no cobra</strong>: el comprobante es solo un respaldo de la venta. Precondición: la venta ya fue confirmada y el stock ya se descontó.',
      },
      {
        type: 'ol',
        items: [
          'Toma los datos de la venta (productos, cantidades, precios y total).',
          'Le pone número y fecha al comprobante.',
          'Genera el comprobante.',
          'Lo deja listo para imprimir o entregar. (Si la venta no se confirmó, el comprobante no se genera.)',
        ],
      },
      {
        type: 'p',
        text: '<strong>S3 — Registrar inconsistencias</strong> (<code>RF18</code>). Caso de uso que <strong>«extiende»</strong> a «Registrar ingreso de mercadería»; solo ocurre si hay diferencias. Anota las diferencias entre lo que se pidió en la orden de compra y lo que realmente llegó (faltantes o sobrantes). Precondición: se está registrando un ingreso y las cantidades recibidas no coinciden con la orden.',
      },
      {
        type: 'ol',
        items: [
          'Detecta la diferencia producto por producto.',
          'Anota la cantidad pedida, la recibida y la diferencia.',
          'Marca si es un faltante o un sobrante.',
          'Relaciona la diferencia con la orden de compra.',
          'Avisa al Jefe de depósito y deja la orden como «con diferencias». (El stock se actualiza con lo que realmente llegó.)',
        ],
      },
      {
        type: 'p',
        text: '<strong>S4 — Generar pedido periódico</strong> (<code>RF11, RF12</code>). Caso de uso que <strong>«extiende»</strong> a «Generar orden de compra», cuando el Gerente de Compras elige esa opción. Arma <strong>solo un borrador</strong> de orden de compra usando reglas ya configuradas, para ayudar con las compras periódicas (los pedidos se hacen los viernes). Precondición: hay reglas de reposición configuradas y el Gerente eligió «pedido periódico».',
      },
      {
        type: 'ol',
        items: [
          'Toma las reglas de reposición ya configuradas.',
          'Mira el stock actual y las ventas de cada producto.',
          'Calcula cuánto conviene pedir.',
          'Arma un borrador de orden de compra.',
          'Se lo muestra al Gerente de Compras para que lo revise. (5a. El Gerente cambia productos o cantidades del borrador antes de seguir.)',
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Regla de oro: «incluye» = siempre pasa (S1 y S2 son obligatorios en cada venta). «extiende» = pasa solo a veces (S3 si hay diferencias, S4 si el Gerente elige el pedido periódico).',
      },
      {
        type: 'h3',
        text: 'Diagramas de secuencia',
        criollo: 'Acá mostramos cómo trabaja cada CU por dentro: quién le manda mensajes a quién y en qué orden.',
      },
      {
        type: 'h3',
        text: 'CU1 — Registrar venta minorista',
      },
      {
        type: 'p',
        text: 'El <strong>Vendedor</strong> registra una venta presencial: el sistema revisa el stock, lo descuenta y emite el comprobante. Participan: <strong>Vendedor · Pantalla de Ventas · Gestor de Ventas · Producto · Venta · Detalle de Venta</strong>.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/tp/seq-cu1-venta-minorista.png',
        alt: 'Diagrama de secuencia de CU1 Registrar venta minorista, con Vendedor, Pantalla de Ventas, Gestor de Ventas, Producto, Venta y Detalle de Venta.',
        caption: 'CU1: el Gestor de Ventas verifica stock («incluye» S1) y genera el comprobante («incluye» S2).',
      },
      {
        type: 'ol',
        items: [
          'Vendedor → Pantalla de Ventas: inicia una nueva venta; la pantalla le pide al Gestor de Ventas que cree la venta.',
          'Por cada producto: el Vendedor ingresa producto y cantidad, y el Gestor busca el producto y trae sus datos.',
          'Gestor de Ventas → Producto: verifica si hay stock («incluye» S1); responde que hay disponible.',
          'Gestor de Ventas → Detalle de Venta: agrega el producto con precio minorista.',
          'Vendedor confirma la venta; el Gestor registra la venta y descuenta el stock.',
          'Gestor de Ventas → Venta: genera el comprobante («incluye» S2) y la Pantalla se lo muestra al Vendedor.',
        ],
      },
      {
        type: 'h3',
        text: 'CU2 — Registrar pedido mayorista',
      },
      {
        type: 'p',
        text: 'El <strong>Vendedor</strong> carga un pedido para un cliente mayorista; el sistema revisa bien el stock antes de confirmar. Participan: <strong>Vendedor · Pantalla de Pedido Mayorista · Gestor de Pedidos · Cliente · Producto · Venta · Detalle de Venta</strong>.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/tp/seq-cu2-pedido-mayorista.png',
        alt: 'Diagrama de secuencia de CU2 Registrar pedido mayorista, con Vendedor, Pantalla de Pedido Mayorista, Gestor de Pedidos, Cliente, Producto, Venta y Detalle de Venta.',
        caption: 'CU2: igual que CU1 pero con cliente y precio mayorista; también «incluye» S1 y S2.',
      },
      {
        type: 'ol',
        items: [
          'Vendedor → Pantalla de Pedido Mayorista: inicia un pedido mayorista; el Gestor de Pedidos crea el pedido.',
          'El Vendedor elige el cliente; el Gestor busca el cliente y trae sus datos.',
          'Por cada artículo: el Vendedor lo ingresa con su cantidad y el Gestor verifica si hay stock («incluye» S1).',
          'Gestor de Pedidos → Detalle de Venta: agrega el artículo con precio mayorista.',
          'El Vendedor confirma el pedido; el Gestor registra la venta y descuenta el stock.',
          'Gestor de Pedidos → Venta: genera el comprobante («incluye» S2) y se lo muestra al Vendedor.',
        ],
      },
      {
        type: 'h3',
        text: 'CU3 — Consultar stock en tiempo real',
      },
      {
        type: 'p',
        text: 'Un usuario consulta cuánto stock hay de un producto, al instante. Participan: <strong>Jefe de depósito · Pantalla de Consulta de Stock · Gestor de Stock · Producto</strong>.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/tp/seq-cu3-consultar-stock.png',
        alt: 'Diagrama de secuencia de CU3 Consultar stock en tiempo real, con Jefe de depósito, Pantalla de Consulta de Stock, Gestor de Stock y Producto.',
        caption: 'CU3: consulta directa de stock; si el producto no existe, avisa.',
      },
      {
        type: 'ol',
        items: [
          'Jefe de depósito → Pantalla de Consulta de Stock: busca un producto.',
          'Pantalla → Gestor de Stock: consulta el stock; el Gestor busca el producto.',
          'Si existe: Producto devuelve datos y stock, y la Pantalla muestra el stock al Jefe de depósito.',
          'Si no existe: el Gestor avisa que el producto no existe.',
        ],
      },
      {
        type: 'h3',
        text: 'CU4 — Registrar ingreso de mercadería',
      },
      {
        type: 'p',
        text: 'El <strong>Jefe de depósito</strong> compara la mercadería que llegó con la orden de compra, suma al stock y anota diferencias si las hay. Participan: <strong>Jefe de depósito · Pantalla de Ingreso · Gestor de Ingresos · Orden de Compra · Ingreso de Mercadería · Producto · Inconsistencia</strong>.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/tp/seq-cu4-ingreso-mercaderia.png',
        alt: 'Diagrama de secuencia de CU4 Registrar ingreso de mercadería, con Jefe de depósito, Pantalla de Ingreso, Gestor de Ingresos, Orden de Compra, Ingreso de Mercadería, Producto e Inconsistencia.',
        caption: 'CU4: si las cantidades no coinciden, «extiende» S3 (Registrar inconsistencias) y la orden queda parcial.',
      },
      {
        type: 'ol',
        items: [
          'Jefe de depósito elige la orden de compra; el Gestor de Ingresos la obtiene y muestra su detalle.',
          'Por cada producto: el Jefe ingresa la cantidad recibida; el Gestor registra lo recibido.',
          'El Jefe confirma el ingreso; el Gestor compara las cantidades contra la Orden de Compra.',
          'Si coinciden: suma al stock, registra el ingreso (exacto) y marca la orden como completada.',
          'Si hay diferencias: registra la diferencia en Inconsistencia («extiende» S3), suma al stock lo realmente recibido y marca la orden como parcial.',
        ],
      },
      {
        type: 'h3',
        text: 'CU5 — Generar orden de compra',
      },
      {
        type: 'p',
        text: 'El <strong>Gerente de Compras</strong> arma y envía una orden de compra a un proveedor, con ayuda de sugerencias de qué reponer. Participan: <strong>Gerente de Compras · Pantalla de Compras · Gestor de Compras · Producto · Proveedor · Orden de Compra</strong>.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/tp/seq-cu5-orden-compra.png',
        alt: 'Diagrama de secuencia de CU5 Generar orden de compra, con Gerente de Compras, Pantalla de Compras, Gestor de Compras, Producto, Proveedor y Orden de Compra.',
        caption: 'CU5: si el Gerente elige «pedido periódico», «extiende» S4 y arma un borrador automático.',
      },
      {
        type: 'ol',
        items: [
          'Gerente de Compras entra al módulo de compras; el Gestor pide sugerencias de reposición revisando stock y ventas, y las muestra.',
          'Opcional: el Gerente pide generar pedido periódico («extiende» S4) y la pantalla arma un borrador automático.',
          'El Gerente elige productos, cantidades y proveedor; el Gestor valida el proveedor.',
          'Gestor de Compras → Orden de Compra: crea la orden (pendiente).',
          'El Gerente confirma el envío; el Gestor marca la orden como enviada y devuelve la confirmación.',
        ],
      },
      {
        type: 'h3',
        text: 'CU6 — Gestionar usuarios y roles',
      },
      {
        type: 'p',
        text: 'El <strong>Administrador</strong> crea, modifica o da de baja usuarios y les asigna su rol. Participan: <strong>Administrador · Pantalla de Usuarios · Gestor de Usuarios · Usuario · Rol</strong>.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/tp/seq-cu6-usuarios-roles.png',
        alt: 'Diagrama de secuencia de CU6 Gestionar usuarios y roles, con Administrador, Pantalla de Usuarios, Gestor de Usuarios, Usuario y Rol.',
        caption: 'CU6: al dar de alta, verifica que el usuario no exista y le asigna un Rol.',
      },
      {
        type: 'ol',
        items: [
          'Administrador entra a configuración; el Gestor obtiene los usuarios y muestra la lista.',
          'El Administrador crea un usuario nuevo; el Gestor lo da de alta.',
          'Gestor de Usuarios → Usuario: verifica que no exista.',
          'Si no existe: asigna el rol y guarda el usuario.',
          'Si ya existe: avisa que el usuario ya existe.',
        ],
      },
      {
        type: 'h3',
        text: 'CU7 — Consultar historial de ventas y compras',
      },
      {
        type: 'p',
        text: 'El <strong>Gerente General</strong> mira el historial de ventas o de compras filtrando por fecha. Participan: <strong>Gerente General · Pantalla de Reportes · Gestor de Reportes · Venta · Orden de Compra</strong>.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/tp/seq-cu7-historial.png',
        alt: 'Diagrama de secuencia de CU7 Consultar historial de ventas y compras, con Gerente General, Pantalla de Reportes, Gestor de Reportes, Venta y Orden de Compra.',
        caption: 'CU7: según el tipo elegido busca en Venta o en Orden de Compra; si no hay nada, avisa.',
      },
      {
        type: 'ol',
        items: [
          'Gerente General elige tipo (ventas o compras) y fechas; el Gestor de Reportes pide el historial.',
          'Si es ventas: busca en Venta y trae los movimientos.',
          'Si es compras: busca en Orden de Compra y trae los movimientos.',
          'La Pantalla muestra el reporte; si no hay resultados, avisa que no hay movimientos.',
        ],
      },
      {
        type: 'h3',
        text: 'CU8 — Confirmar orden de compra',
      },
      {
        type: 'p',
        text: 'El <strong>Proveedor</strong> confirma, rechaza o acepta en parte una orden de compra desde su portal, y se avisa al Gerente de Compras. Participan: <strong>Proveedor · Portal del Proveedor · Gestor de Órdenes · Orden de Compra · Gerente de Compras</strong>.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/introduccion-ing-software/tp/seq-cu8-confirmar-orden.png',
        alt: 'Diagrama de secuencia de CU8 Confirmar orden de compra, con Proveedor, Portal del Proveedor, Gestor de Órdenes, Orden de Compra y Gerente de Compras.',
        caption: 'CU8: al confirmar, el Gestor avisa al Gerente de Compras; también puede marcar rechazada o parcial.',
      },
      {
        type: 'ol',
        items: [
          'Proveedor → Portal del Proveedor: ve las órdenes pendientes; el Gestor de Órdenes las obtiene y muestra.',
          'El Proveedor elige una orden y pide el detalle.',
          'El Proveedor confirma la orden e indica la fecha de entrega.',
          'Gestor de Órdenes → Orden de Compra: marca como confirmada y avisa la confirmación al Gerente de Compras.',
          'Alternativas: el Gestor puede marcar la orden como rechazada o como parcial.',
        ],
      },
      {
        type: 'h3',
        text: 'Modelo de datos preliminar',
        criollo: 'Las «cosas» de las que el sistema guarda info. Sale de las entidades que aparecen en los diagramas de secuencia.',
      },
      {
        type: 'p',
        text: 'Este modelo muestra las <strong>entidades</strong> (las «cosas» de las que el sistema guarda información) y sus datos principales. Surge de las entidades que aparecen en los diagramas de secuencia y va de la mano con los requerimientos de la Parte 4.',
      },
      {
        type: 'table',
        caption: 'Entidades del modelo de datos preliminar y los datos que guarda cada una.',
        headers: ['Entidad', 'Datos que guarda'],
        rows: [
          ['Usuario', 'Nombre de usuario, Contraseña, Nombre completo, Correo, Estado (activo / inactivo), Rol'],
          ['Rol', 'Nombre (Ventas, Compras, Depósito o Administrador), Descripción'],
          ['Producto', 'Código, Descripción, Precio minorista, Precio mayorista, Stock actual, Stock mínimo'],
          ['Cliente', 'Nombre o razón social, Tipo (minorista / mayorista), CUIT o documento, Datos de contacto'],
          ['Venta', 'Número de venta, Fecha, Tipo (minorista / mayorista), Cliente, Vendedor, Total, Número de comprobante'],
          ['Detalle de Venta', 'Venta, Producto, Cantidad, Precio unitario, Subtotal'],
          ['Proveedor', 'Nombre o razón social, CUIT, Datos de contacto, Dirección'],
          ['Orden de Compra', 'Número de orden, Fecha, Proveedor, Comprador, Estado, Fecha de envío, Fecha estimada de entrega'],
          ['Detalle de Orden de Compra', 'Orden de compra, Producto, Cantidad pedida, Cantidad recibida, Precio unitario'],
          ['Ingreso de Mercadería', 'Número de ingreso, Fecha, Orden de compra, Quién recibió, Estado (exacto / parcial / con diferencias)'],
          ['Inconsistencia', 'Ingreso, Producto, Cantidad pedida, Cantidad recibida, Diferencia, Tipo (faltante / sobrante)'],
        ],
      },
      {
        type: 'p',
        text: 'Cada entidad tiene un <strong>identificador único</strong> (por ejemplo, el número de venta o el código de producto). Además, algunas se relacionan entre sí: una <strong>Venta</strong> tiene varios <strong>Detalles de Venta</strong> y cada Detalle corresponde a un <strong>Producto</strong>; una <strong>Orden de Compra</strong> tiene varios Detalles y pertenece a un <strong>Proveedor</strong>. El comprobante se guarda como parte de la Venta y el stock como un dato del Producto.',
      },
      {
        type: 'h3',
        text: 'Trazabilidad: requerimientos, casos de uso y entidades',
        criollo: 'Esta tabla es oro para defender: muestra que todo está conectado y no quedó nada colgado.',
      },
      {
        type: 'p',
        text: 'Esta tabla muestra qué requerimiento cumple cada caso de uso y qué entidades usa. Sirve para ver que <strong>todo está conectado</strong>: cada requerimiento de la Parte 4 tiene su caso de uso y sus datos.',
      },
      {
        type: 'table',
        caption: 'Trazabilidad entre casos de uso, requerimientos funcionales y entidades.',
        headers: ['Caso de uso', 'Requerimientos que cumple', 'Entidades que usa'],
        rows: [
          ['CU1 Registrar venta minorista', 'RF1, RF4, RF5, RF7', 'Producto, Venta, Detalle de Venta, Cliente'],
          ['CU2 Registrar pedido mayorista', 'RF2, RF3, RF4, RF5, RF7', 'Cliente, Producto, Venta, Detalle de Venta'],
          ['CU3 Consultar stock en tiempo real', 'RF6, RF9', 'Producto'],
          ['CU4 Registrar ingreso de mercadería', 'RF8, RF16, RF17', 'Orden de Compra, Ingreso de Mercadería, Producto'],
          ['CU5 Generar orden de compra', 'RF10, RF12, RF13, RF14', 'Producto, Proveedor, Orden de Compra, Detalle de Orden de Compra'],
          ['CU6 Gestionar usuarios y roles', 'RF22', 'Usuario, Rol'],
          ['CU7 Consultar historial de ventas y compras', 'RF20, RF21', 'Venta, Orden de Compra'],
          ['CU8 Confirmar orden de compra', 'RF15', 'Orden de Compra, Proveedor'],
          ['S1 Verificar disponibilidad de stock', 'RF3, RF6, RF9', 'Producto'],
          ['S2 Generar comprobante de venta', 'RF5', 'Venta'],
          ['S3 Registrar inconsistencias', 'RF18', 'Inconsistencia, Ingreso de Mercadería'],
          ['S4 Generar pedido periódico', 'RF11, RF12', 'Orden de Compra, Producto'],
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Los requerimientos RF19 (centralizar la información) y RF23 (que varias áreas usen el sistema a la vez), junto con los no funcionales, son generales y no pertenecen a un solo caso de uso.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-tp.6-1',
          q: 'Las subfunciones S1, S2, S3 y S4 son iniciadas directamente por un actor.',
          a: false,
          explain: 'Falso. Como son casos de uso «incluidos» o «extendidos», no los inicia un actor directamente: se ejecutan dentro de su caso de uso principal.',
        },
        {
          id: 'tf-tp.6-2',
          q: 'S1 (Verificar disponibilidad de stock) se «incluye» tanto en CU1 como en CU2.',
          a: true,
          explain: 'Verdadero. S1 se ejecuta dentro de «Registrar venta minorista» (CU1) y «Registrar pedido mayorista» (CU2) con la relación «incluye».',
        },
        {
          id: 'tf-tp.6-3',
          q: 'S3 (Registrar inconsistencias) «incluye» a CU4 y por lo tanto se ejecuta siempre.',
          a: false,
          explain: 'Falso. S3 «extiende» a CU4 (no lo «incluye») y solo ocurre si hay diferencias entre lo pedido y lo recibido.',
        },
        {
          id: 'tf-tp.6-4',
          q: 'Al generar el comprobante de venta (S2), el sistema también cobra la venta.',
          a: false,
          explain: 'Falso. El sistema no cobra: el comprobante es solo un respaldo de la venta ya confirmada.',
        },
        {
          id: 'tf-tp.6-5',
          q: 'En el modelo de datos, una Venta tiene varios Detalles de Venta y cada Detalle corresponde a un Producto.',
          a: true,
          explain: 'Verdadero. Esa es exactamente una de las relaciones descritas: una Venta tiene varios Detalles de Venta y cada Detalle corresponde a un Producto.',
        },
        {
          id: 'tf-tp.6-6',
          q: 'Los requerimientos RF19 y RF23 pertenecen a un único caso de uso específico.',
          a: false,
          explain: 'Falso. RF19 (centralizar la información) y RF23 (varias áreas a la vez), junto con los no funcionales, son generales y no pertenecen a un solo caso de uso.',
        },
      ],
      mc: [
        {
          id: 'mc-tp.6-1',
          q: '¿Cuál de estas subfunciones «extiende» a «Generar orden de compra» (CU5)?',
          options: [
            'S1 Verificar disponibilidad de stock',
            'S2 Generar comprobante de venta',
            'S3 Registrar inconsistencias',
            'S4 Generar pedido periódico',
          ],
          correctIndex: 3,
          explain: 'S4 (Generar pedido periódico) «extiende» a CU5 cuando el Gerente de Compras elige esa opción. S3 «extiende» a CU4; S1 y S2 se «incluyen» en CU1 y CU2.',
        },
        {
          id: 'mc-tp.6-2',
          q: '¿Qué entidades NO aparecen entre los participantes del diagrama de secuencia de CU4 (Registrar ingreso de mercadería)?',
          options: [
            'Orden de Compra e Ingreso de Mercadería',
            'Cliente y Venta',
            'Producto e Inconsistencia',
            'Gestor de Ingresos y Pantalla de Ingreso',
          ],
          correctIndex: 1,
          explain: 'En CU4 participan Jefe de depósito, Pantalla de Ingreso, Gestor de Ingresos, Orden de Compra, Ingreso de Mercadería, Producto e Inconsistencia. Cliente y Venta no aparecen.',
        },
        {
          id: 'mc-tp.6-3',
          q: 'Según la trazabilidad, ¿qué entidades usa CU6 (Gestionar usuarios y roles)?',
          options: [
            'Producto y Proveedor',
            'Usuario y Rol',
            'Venta y Detalle de Venta',
            'Orden de Compra y Cliente',
          ],
          correctIndex: 1,
          explain: 'CU6 cumple RF22 y usa las entidades Usuario y Rol.',
        },
        {
          id: 'mc-tp.6-4',
          q: 'En el diagrama de secuencia de CU8 (Confirmar orden de compra), ¿a quién avisa el Gestor de Órdenes cuando la orden se confirma?',
          options: [
            'Al Jefe de depósito',
            'Al Administrador',
            'Al Gerente de Compras',
            'Al Gerente General',
          ],
          correctIndex: 2,
          explain: 'Al marcar la orden como confirmada, el Gestor de Órdenes avisa la confirmación al Gerente de Compras.',
        },
        {
          id: 'mc-tp.6-5',
          q: 'En el modelo de datos, ¿qué entidad guarda el dato "Estado (exacto / parcial / con diferencias)"?',
          options: [
            'Orden de Compra',
            'Inconsistencia',
            'Ingreso de Mercadería',
            'Detalle de Orden de Compra',
          ],
          correctIndex: 2,
          explain: 'Ingreso de Mercadería guarda Número de ingreso, Fecha, Orden de compra, Quién recibió y Estado (exacto / parcial / con diferencias).',
        },
      ],
      ms: [
        {
          id: 'ms-tp.6-1',
          q: '¿Cuáles de estas subfunciones se relacionan con su caso de uso principal mediante «incluye»?',
          options: [
            'S1 Verificar disponibilidad de stock',
            'S2 Generar comprobante de venta',
            'S3 Registrar inconsistencias',
            'S4 Generar pedido periódico',
            'CU7 Consultar historial de ventas y compras',
          ],
          correctIndexes: [0, 1],
          explain: 'S1 y S2 se «incluyen» en CU1 y CU2 (siempre pasan). S3 y S4 «extienden» (pasan solo a veces). CU7 es un caso de uso principal, no una subfunción.',
        },
        {
          id: 'ms-tp.6-2',
          q: '¿Quiénes participan en el diagrama de secuencia de CU2 (Registrar pedido mayorista)?',
          options: [
            'Vendedor',
            'Cliente',
            'Jefe de depósito',
            'Detalle de Venta',
            'Proveedor',
          ],
          correctIndexes: [0, 1, 3],
          explain: 'En CU2 participan Vendedor, Pantalla de Pedido Mayorista, Gestor de Pedidos, Cliente, Producto, Venta y Detalle de Venta. Jefe de depósito y Proveedor no participan.',
        },
        {
          id: 'ms-tp.6-3',
          q: '¿Cuáles de estas entidades forman parte del modelo de datos preliminar?',
          options: [
            'Inconsistencia',
            'Detalle de Orden de Compra',
            'Comprobante',
            'Gestor de Ventas',
            'Rol',
          ],
          correctIndexes: [0, 1, 4],
          explain: 'Inconsistencia, Detalle de Orden de Compra y Rol son entidades del modelo. El comprobante se guarda como parte de la Venta (no es entidad propia) y el Gestor de Ventas es un objeto de control de los diagramas, no una entidad de datos.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-tp.6-1',
        front: 'Las 3 cosas de la Parte 6',
        back: 'Describir los casos de uso que faltaban (las 4 subfunciones), mostrar cómo funciona cada CU por dentro con diagramas de secuencia, y armar un modelo de datos preliminar.',
      },
      {
        id: 'fc-tp.6-2',
        front: '«incluye» vs «extiende»',
        back: '«incluye» = el sub-caso siempre se ejecuta (S1 y S2 en CU1/CU2). «extiende» = se ejecuta solo a veces (S3 si hay diferencias en CU4, S4 si el Gerente elige pedido periódico en CU5).',
      },
      {
        id: 'fc-tp.6-3',
        front: 'S1 — Verificar disponibilidad de stock',
        back: 'RF3, RF6, RF9. Se «incluye» en CU1 y CU2. Revisa si hay stock suficiente antes de agregar un producto. Es solo consulta: no cambia ningún dato.',
      },
      {
        id: 'fc-tp.6-4',
        front: 'S2 — Generar comprobante de venta',
        back: 'RF5. Se «incluye» en CU1 y CU2. Crea el comprobante de una venta ya confirmada. El sistema no cobra: el comprobante es solo un respaldo.',
      },
      {
        id: 'fc-tp.6-5',
        front: 'S3 — Registrar inconsistencias',
        back: 'RF18. «extiende» a CU4 y solo ocurre si hay diferencias. Anota faltantes o sobrantes entre lo pedido y lo recibido, y deja la orden «con diferencias» / parcial.',
      },
      {
        id: 'fc-tp.6-6',
        front: 'S4 — Generar pedido periódico',
        back: 'RF11, RF12. «extiende» a CU5. Arma solo un borrador de orden de compra con reglas de reposición (los pedidos se hacen los viernes); el Gerente lo revisa.',
      },
      {
        id: 'fc-tp.6-7',
        front: 'Participantes de CU4',
        back: 'Jefe de depósito, Pantalla de Ingreso, Gestor de Ingresos, Orden de Compra, Ingreso de Mercadería, Producto e Inconsistencia.',
      },
      {
        id: 'fc-tp.6-8',
        front: 'Relaciones del modelo de datos',
        back: 'Una Venta tiene varios Detalles de Venta y cada Detalle corresponde a un Producto; una Orden de Compra tiene varios Detalles y pertenece a un Proveedor. El comprobante se guarda dentro de la Venta y el stock como dato del Producto.',
      },
      {
        id: 'fc-tp.6-9',
        front: 'Requerimientos generales (RF19, RF23)',
        back: 'RF19 (centralizar la información) y RF23 (varias áreas usan el sistema a la vez), junto con los no funcionales, son generales y no pertenecen a un solo caso de uso.',
      },
    ],
  },
  ],
  pdfs: [
    {
      key: 'modulo-1',
      label: 'Módulo 1 — Conceptos de ingeniería de software',
      path: 'pdfs/introduccion-ing-software/1-conceptos-ingenieria-software.pdf',
    },
    {
      key: 'modulo-2',
      label: 'Módulo 2 — El ciclo de vida del desarrollo de software',
      path: 'pdfs/introduccion-ing-software/2-ciclo-de-vida.pdf',
    },
    {
      key: 'modulo-3',
      label: 'Módulo 3 — Metodologías ágiles',
      path: 'pdfs/introduccion-ing-software/3-metodologias-agiles.pdf',
    },
    {
      key: 'modulo-4',
      label: 'Módulo 4 — Modelado de los procesos de negocio',
      path: 'pdfs/introduccion-ing-software/4-modelado-procesos-negocio.pdf',
    },
    {
      key: 'modulo-5',
      label: 'Módulo 5 — Extracción de requerimientos',
      path: 'pdfs/introduccion-ing-software/5-extraccion-requerimientos.pdf',
    },
    {
      key: 'modulo-6',
      label: 'Módulo 6 — Fundamentos de la ingeniería de requerimientos',
      path: 'pdfs/introduccion-ing-software/6-fundamentos-ing-requerimientos.pdf',
    },
    {
      key: 'modulo-7',
      label: 'Módulo 7 — Especificación de requerimientos',
      path: 'pdfs/introduccion-ing-software/7-especificacion-requerimientos.pdf',
    },
    {
      key: 'modulo-8',
      label: 'Módulo 8 — Modelado de requerimientos',
      path: 'pdfs/introduccion-ing-software/8-modelado-requerimientos.pdf',
    },
    {
      key: 'modulo-9',
      label: 'Módulo 9 — Pruebas de los requerimientos',
      path: 'pdfs/introduccion-ing-software/9-pruebas-requerimientos.pdf',
    },
    {
      key: 'modulo-10',
      label: 'Módulo 10 — Diagramas de secuencia',
      path: 'pdfs/introduccion-ing-software/10-diagramas-secuencia.pdf',
    },
    {
      key: 'modulo-11',
      label: 'Módulo 11 — Reingeniería y métodos formales',
      path: 'pdfs/introduccion-ing-software/11-reingenieria-metodos-formales.pdf',
    },
    {
      key: 'modulo-12',
      label: 'Módulo 12 — Tipos de sistemas',
      path: 'pdfs/introduccion-ing-software/12-tipos-de-sistemas.pdf',
    },
    {
      key: 'tp-integrador',
      label: 'TP Integrador — Sistema para librería (caso completo)',
      path: 'pdfs/introduccion-ing-software/tp-integrador.pdf',
    },
  ],
  partials: [
    // ---------- PARCIAL 1 ----------
    {
      id: '1',
      title: 'Parcial de práctica N.º 1',
      blurb: 'Requerimientos y V&V: prototipos, actores, casos de uso, INVEST, validación/verificación, aceptación y trazabilidad.',
      questions: [
        {
          kind: 'mc',
          q: '¿Cuál de las siguientes afirmaciones describe correctamente un mockup (prototipo de pantalla)?',
          options: [
            'Es una representación visual estática que muestra estructura, contenidos y funciones básicas, pero sin interactividad real.',
            'Es un modelo que simula la interactividad completa del sistema final.',
            'Es la versión final del sistema entregada al cliente para realizar las pruebas de aceptación.',
            'Es un documento textual que lista exhaustivamente los requerimientos funcionales del sistema.',
          ],
          correctIndex: 0,
          explain: 'El mockup es una representación visual estática (estructura, contenidos y funciones básicas) pero sin interactividad real. Simular la interactividad es propio del prototipo funcional: ese es el contraste clave.',
        },
        {
          kind: 'tf',
          q: 'Cuando un actor es una persona, en el diagrama de casos de uso se debe colocar el nombre de la persona que interactúa con el sistema.',
          a: false,
          explain: 'Falso. Si el actor es una persona, nunca se coloca su nombre, sino el rol que representa, porque la misma persona puede interactuar con el sistema desde roles diferentes (por ejemplo, "empleado" y "bibliotecario").',
        },
        {
          kind: 'mc',
          q: 'Según el apunte, ¿cuántos actores pueden iniciar un mismo caso de uso?',
          options: [
            'Únicamente uno; si más de un actor puede iniciarlo, se resuelve mediante una relación de herencia entre actores.',
            'Tantos como sea necesario, sin ninguna restricción.',
            'Exactamente dos: un actor primario y un actor secundario.',
            'Solo los actores secundarios pueden iniciarlo.',
          ],
          correctIndex: 0,
          explain: 'Cada caso de uso puede ser iniciado por un único actor. Si más de un actor puede iniciarlo, se resuelve mediante una relación de herencia entre actores.',
        },
        {
          kind: 'mc',
          q: 'En el criterio INVEST, ¿qué significa que una historia de usuario sea "Negociable"?',
          options: [
            'Que puede ser cambiada hasta tanto sea parte de una iteración.',
            'Que su precio debe acordarse con el cliente antes de implementarla.',
            'Que siempre debe poder estimarse el esfuerzo que demanda.',
            'Que debe entregar valor al cliente o usuario final.',
          ],
          correctIndex: 0,
          explain: 'Negociable significa que las historias pueden cambiarse hasta tanto sean parte de una iteración. Poder estimar el esfuerzo es "Estimable"; entregar valor es "Valorable".',
        },
        {
          kind: 'open',
          q: 'Describí qué es un prototipo de requerimientos y explicá en qué situaciones resulta especialmente útil. Mencioná además su principal desventaja.',
          model: 'Se espera: un prototipo es un modelo o maqueta que muestra las interfaces entre el sistema y el usuario; simula los aspectos más visuales (entradas/salidas, componentes gráficos) buscando similitud con el sistema final. Es especialmente útil cuando los requerimientos cambian rápidamente, cuando el cliente no entrega una lista completa de requerimientos, o cuando ni el cliente ni el equipo conocen bien el área de aplicación. Principal desventaja: desde el comienzo es imposible saber cuánto tiempo tomará lograr un producto aceptable.',
        },
        {
          kind: 'mc',
          q: 'La pregunta «¿estamos construyendo el producto correcto?» corresponde a:',
          options: [
            'La validación.',
            'La verificación.',
            'La prueba de regresión.',
            'La prueba de unidad.',
          ],
          correctIndex: 0,
          explain: '"¿Estamos construyendo el producto correcto?" es validación. La verificación responde a "¿estamos construyendo el producto correctamente?".',
        },
        {
          kind: 'open',
          q: 'Explicá qué es una prueba de aceptación, indicá de qué tipo de técnica se trata (caja negra o caja blanca) y por qué es importante que se realice con datos reales del cliente.',
          model: 'Se espera: la prueba de aceptación la realizan los usuarios para verificar que el sistema se ajusta a sus requerimientos. Es una técnica de caja negra (no mira el interior del código); los casos de prueba se basan en la especificación de requerimientos. Se trabaja con datos reales del cliente, no ficticios, porque los datos reales pueden disparar errores que no aparecieron antes (en el sistema o en los propios requerimientos). Es una prueba de validación, no de búsqueda de defectos.',
        },
        {
          kind: 'open',
          q: 'Una historia de usuario debe responder tres preguntas. Enumeralas, indicá el formato recomendado para redactarla y dá un ejemplo aplicado.',
          model: 'Se espera, las tres preguntas: ¿quién es el beneficiario? (interesados/actores que se benefician), ¿qué se quiere hacer? (descripción de alto nivel de la funcionalidad) y ¿cuál es el beneficio? (el "por qué" / valor de negocio). Formato recomendado: "Como (rol) yo quiero (algo) para (beneficiarme)". Ejemplo del apunte: "Como bibliotecario de la institución, yo quiero revisar el historial de préstamos para identificar los libros con mayor demanda para reponer.".',
        },
        {
          kind: 'open',
          q: 'Explicá por qué es importante la trazabilidad de requerimientos y describí la diferencia entre trazabilidad remota y trazabilidad futura.',
          model: 'Se espera: ante un cambio (o al modificar diseño/código) hay que saber qué requerimientos se ven afectados y dónde tocar; sin trazabilidad no se puede actualizar de forma consistente. Trazabilidad remota: refiere a las fases previas al desarrollo, al origen o fuente del requerimiento; cobra más importancia cuando el producto pasa a operación y mantenimiento. Trazabilidad futura: apunta a las fases posteriores; para que funcione, cada requerimiento necesita un nombre o referencia única.',
        },
        {
          kind: 'open',
          q: 'Describí las relaciones de extensión y de uso entre casos de uso. Para cada una, dá un ejemplo (puede ser uno del apunte).',
          model: 'Se espera: relación de extensión: un caso extiende a otro cuando agrega una parte de funcionalidad que no siempre ocurre (podría darse o no); no es un error ni una excepción. Ejemplo del apunte (Jacobson): "Cenar" extiende a "Tomar café". Relación de uso: un caso de uso está incluido en otro porque es funcionalidad común a varios casos, y lo incluido debe ser un caso de uso en sí mismo. Ejemplo: "Registrar préstamo" y "Registrar devolución" usan ambos "Consultar socio". Ambas relaciones se dan únicamente entre casos de uso, no con actores.',
        },
      ],
    },
    // ---------- PARCIAL 2 ----------
    {
      id: '2',
      title: 'Parcial de práctica N.º 2',
      blurb: 'UML y testing: testing ágil, fases de prueba, diagramas de secuencia y colaboración, objetos del modelo de análisis y reingeniería.',
      questions: [
        {
          kind: 'tf',
          q: 'En el testing ágil se mantiene la fase de pruebas tradicional separada al final del desarrollo, igual que en los métodos tradicionales.',
          a: false,
          explain: 'Falso. En el testing ágil desaparece la fase de pruebas tradicional que existía en los métodos tradicionales; las pruebas se diseñan durante el análisis y todos los individuos tienen habilidades de probadores.',
        },
        {
          kind: 'mc',
          q: '¿Cuál de las siguientes describe correctamente la prueba de integración?',
          options: [
            'Prueba las respuestas de grupos de módulos interconectados, detectando fallos en la interacción entre los componentes.',
            'Prueba un único módulo o componente, y generalmente la realiza quien lo construyó.',
            'Prueba el sistema completo en un ambiente similar al real.',
            'Verifica que el sistema cumple los requerimientos del usuario utilizando datos reales del cliente.',
          ],
          correctIndex: 0,
          explain: 'La prueba de integración evalúa las respuestas de grupos de módulos interconectados y detecta fallos en la interacción entre componentes. La opción B describe la prueba de unidad; la C, la de sistema; la D, la de aceptación.',
        },
        {
          kind: 'mc',
          q: '¿Qué tipo de objeto del modelo de análisis se emplea para modelar la información que el sistema debe manejar a lo largo del tiempo y que sobrevive a los casos de uso?',
          options: [
            'Objeto de entidad.',
            'Objeto de interfaz.',
            'Objeto de control.',
            'Objeto de frontera temporal.',
          ],
          correctIndex: 0,
          explain: 'El objeto de entidad modela la información que el sistema maneja a lo largo del tiempo y que sobrevive a los casos de uso. El "objeto de frontera temporal" no existe en el apunte.',
        },
        {
          kind: 'open',
          q: 'Describí qué representa un diagrama de secuencia y explicá cómo se determina el orden temporal de los mensajes en él.',
          model: 'Se espera: un diagrama de secuencia muestra la interacción entre los objetos desde un punto de vista temporal; describe cómo colaboran un grupo de objetos para realizar una actividad y suele capturar el comportamiento de un caso de uso (incluye emisor y receptor de cada mensaje). El orden temporal está dado por cuán arriba está la flecha: las flechas más altas se ejecutan antes que las que están debajo (se lee de arriba hacia abajo).',
        },
        {
          kind: 'mc',
          q: 'En un diagrama de secuencia, ¿cómo se denota que una acción se repite mientras se cumpla una condición (iteración)?',
          options: [
            'Con el símbolo * (asterisco) previo a la condición entre corchetes: *[condición].',
            'Con la condición entre corchetes, sin ningún símbolo adicional: [condición].',
            'Con una flecha que sale y vuelve al mismo objeto sobre su línea de vida.',
            'Duplicando el rectángulo del período de actividad.',
          ],
          correctIndex: 0,
          explain: 'La iteración se denota con el símbolo * previo a la condición entre corchetes: *[condición] Nombre_Mensaje. La opción B es una condición simple; la D corresponde a la representación de un mensaje recursivo.',
        },
        {
          kind: 'open',
          q: 'Describí los tres tipos de objetos del modelo de análisis (interfaz, entidad y control), indicando la función de cada uno.',
          model: 'Se espera los tres tipos: interfaz: permiten la comunicación entre los actores y el sistema (donde un actor habla con el sistema hay una interfaz); entidad: modelan la información que el sistema maneja a lo largo del tiempo, que sobrevive a los casos de uso (suelen corresponder a conceptos del mundo real, aunque no siempre); control: modelan la funcionalidad que no se asigna naturalmente a ningún otro objeto (no son interfaz ni información), operan sobre varios objetos entidad y retornan el resultado a un objeto de interfaz.',
        },
        {
          kind: 'mc',
          q: '¿Cuál de las siguientes es una diferencia entre el diagrama de colaboración y el de secuencia?',
          options: [
            'En el de colaboración los objetos aparecen únicos, conectados por links, y es necesario numerar los mensajes para indicar la secuencia de ejecución.',
            'El de colaboración muestra información distinta a la del diagrama de secuencia.',
            'En el de colaboración el orden temporal se infiere de la altura de las flechas.',
            'El de colaboración no permite representar condiciones ni iteraciones.',
          ],
          correctIndex: 0,
          explain: 'En el diagrama de colaboración los objetos aparecen únicos, conectados por links, y es necesario numerar los mensajes para indicar la secuencia. Muestra la misma información que el de secuencia, sí permite condición e iteración (misma notación) y el orden no se infiere de la altura sino de la numeración.',
        },
        {
          kind: 'open',
          q: 'Explicá qué es la reingeniería de software según el apunte y mencioná al menos dos ventajas frente a desarrollar un sistema desde cero.',
          model: 'Se espera: la reingeniería es un proceso mediante el cual se busca la mejora de un software existente: puede implicar redocumentarlo, reestructurarlo, traducirlo a un lenguaje más moderno y actualizar la estructura y valores de los datos, generalmente sin cambiar su funcionalidad ni arquitectura. Ventajas (al menos dos): disminuye el riesgo frente a desarrollar desde cero (sobre todo en sistemas críticos de los que depende la operatoria); y menor costo, ya que siempre será menor que desarrollar un sistema completamente nuevo.',
        },
        {
          kind: 'open',
          q: 'Explicá qué representa la línea de vida de un objeto y el período de actividad en un diagrama de secuencia. Describí además cómo se representa un mensaje recursivo.',
          model: 'Se espera: línea de vida: línea vertical (punteada) por debajo de cada objeto que representa su existencia en el tiempo dentro del diagrama. Período de actividad: el tiempo que tarda un objeto en ejecutar una acción; se representa con un rectángulo vertical sobre la línea de vida. Mensaje recursivo: ocurre cuando un objeto se manda un mensaje a sí mismo; se representa por la duplicación del rectángulo de período de actividad (el objeto aparece como auto-activado).',
        },
        {
          kind: 'open',
          q: 'Los diagramas de interacción en UML son de dos tipos. Indicá cuáles son, qué tienen en común y qué enfatiza cada uno.',
          model: 'Se espera: los dos tipos son diagrama de secuencia y diagrama de colaboración. En común: ambos describen la interacción entre objetos (la misma información) y el usuario elige cuál usar según le convenga. Énfasis: el de secuencia enfatiza el tiempo (altura de las flechas); el de colaboración enfatiza la estructura (links entre objetos).',
        },
      ],
    },
    // ---------- PARCIAL 3 ----------
    {
      id: '3',
      title: 'Parcial de práctica N.º 3',
      blurb: 'Tipos de sistemas: tiempo real, distribuidos y embebidos, sistemas de información (Schach), reingeniería/mantenimiento y métodos formales.',
      questions: [
        {
          kind: 'mc',
          q: '¿Cuál de las siguientes es una característica de los sistemas de tiempo real, según el apunte?',
          options: [
            'Su eficiencia no se basa solo en la exactitud de los resultados de cómputo, sino también en el momento en que los entrega.',
            'En ellos el usuario es más importante que los procesos.',
            'El intervalo de tiempo entre la entrada y la salida suele ser muy grande.',
            'La predictibilidad es irrelevante para su funcionamiento.',
          ],
          correctIndex: 0,
          explain: 'En un sistema de tiempo real la eficiencia no se basa solo en la exactitud de los resultados, sino también en el momento en que los entrega. Lo contrario de las otras opciones: en los SOTR importan los procesos (no el usuario), el intervalo entrada-salida suele ser muy pequeño y la predictibilidad es una característica principal.',
        },
        {
          kind: 'mc',
          q: '¿Cuál de las siguientes afirmaciones sobre sistemas distribuidos es correcta?',
          options: [
            'El fallo de una computadora no implica el fallo del sistema completo, aunque el servicio puede quedar un poco degradado.',
            'El procesamiento de la información se confina en una única máquina central.',
            'No pueden basarse en sistemas abiertos ni emplear protocolos estándares.',
            'El fallo de cualquier computadora provoca la caída total de la red.',
          ],
          correctIndex: 0,
          explain: 'En un sistema distribuido el fallo de una computadora no implica el fallo del sistema completo, aunque el servicio puede quedar un poco degradado. Las demás opciones contradicen al apunte: el procesamiento se distribuye, se basan en sistemas abiertos y protocolos estándares, y toleran fallos.',
        },
        {
          kind: 'tf',
          q: 'La reingeniería de software generalmente se realiza cambiando la funcionalidad y la arquitectura del sistema.',
          a: false,
          explain: 'Falso. La reingeniería generalmente se realiza sin cambiar la funcionalidad ni la arquitectura; los cambios son de redocumentación, reestructuración, traducción a un lenguaje más moderno y actualización de la estructura/valores de los datos.',
        },
        {
          kind: 'mc',
          q: '¿Por cuál de las siguientes razones, según el apunte, los métodos formales no se incorporaron masivamente a la ingeniería de software?',
          options: [
            'No son escalables: se controlan bien en aplicaciones críticas pequeñas, pero se descontrolan al aumentar su tamaño.',
            'Carecen de una base matemática para describir las propiedades del sistema.',
            'No sirven para sistemas críticos donde se prioriza la seguridad y la confiabilidad.',
            'Generan especificaciones ambiguas y poco precisas.',
          ],
          correctIndex: 0,
          explain: 'Una razón es que los métodos formales no son escalables: son exitosos en aplicaciones críticas pequeñas, pero al aumentar su tamaño se descontrola su realización. Las demás opciones contradicen el apunte (sí tienen base matemática, sí sirven para sistemas críticos y producen especificaciones precisas y no ambiguas).',
        },
        {
          kind: 'open',
          q: 'Describí qué es un sistema embebido (o empotrado) y mencioná al menos tres de sus características. Dá un ejemplo.',
          model: 'Se espera: un sistema embebido (o empotrado) es aquel en el que las funciones del software no suelen estar a la vista del usuario; está diseñado para realizar una o pocas funciones, generalmente dentro de un sistema de tiempo real. Sus componentes suelen estar en una placa base y pueden no verse como computadoras. Características (al menos tres): se fabrican en forma masiva para reducir costos; usan procesador y memoria relativamente pequeños; un fallo en un elemento implica reparar o reemplazar la placa íntegra; los controladores pueden ser más lentos que los de una PC; suelen programarse en lenguaje ensamblador. Ejemplos: el reloj de los taxis, el microondas.',
        },
        {
          kind: 'mc',
          q: 'Según la definición de Schach, un sistema de información:',
          options: [
            'Recopila, manipula, almacena y crea reportes de información respecto de las actividades de negocio de una empresa, con el fin de ayudar a su administración en el manejo de las operaciones.',
            'Es un conjunto de elementos sin relación entre sí que cumplen funciones independientes.',
            'Es un sistema cuya capacidad de respuesta debe darse en el tiempo dictado o especificado por el problema.',
            'Es un sistema diseñado para realizar una o pocas funciones, generalmente dentro de un sistema de tiempo real.',
          ],
          correctIndex: 0,
          explain: 'Es la definición de Schach. La opción C describe un sistema de tiempo real; la D, un sistema embebido.',
        },
        {
          kind: 'open',
          q: 'Enumerá y explicá las tres fases del diseño de un sistema de tiempo real.',
          model: 'Se espera las tres fases del diseño de un sistema de tiempo real: 1) identificar todas las tareas a realizar, junto con las restricciones temporales impuestas que se deben cumplir; 2) codificar los programas que ejecutarán las tareas; 3) medir el tiempo de cómputo de cada tarea y realizar un análisis de la planificación.',
        },
        {
          kind: 'open',
          q: 'Explicá qué son los métodos formales y mencioná al menos dos de sus ventajas o puntos clave según el apunte.',
          model: 'Se espera: los métodos formales son técnicas con bases matemáticas para describir las propiedades del sistema; proporcionan marcos conceptuales para especificar, desarrollar y verificar sistemas de forma más rigurosa que ad hoc. Ventajas (al menos dos): complementan las especificaciones informales por ser precisas y no ambiguas (eliminan dudas y problemas de interpretación); fuerzan un análisis temprano de los requerimientos, cuando es menos costoso corregir un error; y son excelentes para sistemas críticos donde se prioriza la seguridad y la confiabilidad.',
        },
        {
          kind: 'open',
          q: 'Explicá por qué un sistema de software requiere mantenimiento y por qué su estructura tiende a degradarse con el tiempo. Justificá por qué los costos de mantenimiento son altos.',
          model: 'Se espera: un sistema requiere mantenimiento porque, tras ser entregado, sufre modificaciones para adaptarse a un entorno cambiante y seguir siendo útil. Su estructura se degrada paulatinamente porque, al ser útil, se le pide adaptarse a ese entorno, y cada adaptación deteriora su estructura. Los costos son altos porque es mucho más costoso incorporar nueva funcionalidad con el sistema ya funcionando que durante el desarrollo; además, introducir cambios inevitablemente introduce defectos.',
        },
        {
          kind: 'open',
          q: 'Describí los campos del cuadro descriptivo básico de un caso de uso (nombre, actor, precondición, curso normal y curso alternativo) y explicá cómo se numera un curso alternativo.',
          model: 'Se espera los campos del cuadro descriptivo básico: nombre del caso de uso (coincide con el del diagrama), actor (el que inicia el caso), precondición (lo que debe ser cierto antes de ejecutarlo), curso normal (secuencia numerada de lo que hacen actor y sistema cuando todo sale bien) y curso alternativo (variantes ubicadas en una segunda columna, numeradas según el paso donde se desvían, por ejemplo 3.1).',
        },
      ],
    },
    // ---------- PARCIAL 4 (media) ----------
    {
      id: '4',
      title: 'Parcial de práctica N.º 4',
      blurb: 'Dificultad media · Integrador de todo el temario: requerimientos (SRS, cuantificación, atributos), modelado, V&V y testing, diagramas de interacción y tipos de sistemas.',
      questions: [
        {
          kind: 'mc',
          q: 'Una organización solicita a varios proveedores que coticen el desarrollo de un sistema y, para ello, redacta un SRS. Según el apunte, ¿cómo debe encararse la redacción de los requerimientos en ese SRS respecto de uno destinado a guiar la construcción interna?',
          options: [
            'Se describen de forma más general, para abarcar más alternativas disponibles en el mercado.',
            'Se detallan al máximo cada requerimiento, para que ningún proveedor pueda desviarse del diseño previsto.',
            'Se incluyen también los costos y el cronograma, porque son la base de la comparación entre proveedores.',
            'Se reemplaza la descripción funcional por el diseño técnico, ya que el proveedor solo necesita conocer la arquitectura.',
          ],
          correctIndex: 0,
          explain: 'El apunte indica que cuando el SRS sirve como base para un pedido de cotización no se detalla tanto cada requerimiento, sino que se describe en forma más general para abarcar más alternativas disponibles en el mercado. Costos y cronograma nunca van en el SRS, y el diseño se excluye porque tiene audiencias diferentes.',
        },
        {
          kind: 'tf',
          q: 'El requerimiento \'el sistema deberá atender 500 transacciones por hora en condiciones normales y 5000 por hora en condiciones de pico\' corresponde a un requisito estático y, por lo tanto, podría ubicarse en el apartado titulado \'capacidad\'.',
          a: false,
          explain: 'Falso. Al referirse a transacciones procesadas dentro de un período de tiempo y distinguir condiciones normales y máximas, se trata de un requisito dinámico. Los requisitos estáticos son números fijos (número de terminales, usuarios simultáneos, cantidad y tipo de información) y son los que pueden agruparse bajo el título \'capacidad\'.',
        },
        {
          kind: 'mc',
          q: 'Un analista revisa el requerimiento \'el sistema usualmente no debe demorar más de 30 segundos en una consulta\'. Según los atributos de una buena SRS, ¿qué problema presenta este requerimiento?',
          options: [
            'No es verificable, porque la palabra \'usualmente\' introduce una cantidad no mensurable que impide comprobar de forma concreta y finita si se cumple.',
            'No es trazable, porque no se indica el documento previo del cual proviene.',
            'No es modificable, porque no está incorporado en una tabla de contenidos con índice.',
            'No es consistente, porque entra en conflicto temporal con otro requerimiento del documento.',
          ],
          correctIndex: 0,
          explain: 'El apunte usa este mismo enunciado como ejemplo de requisito no verificable por contener una cantidad no mensurable: si no existe un proceso concreto y finito para comprobar si el software lo cumple, el requisito no es verificable. Trazabilidad, modificabilidad y consistencia son otros atributos que no aplican a este caso.',
        },
        {
          kind: 'open',
          q: 'Un equipo enfrenta un proyecto en el que el cliente cambia sus requerimientos constantemente y nadie del equipo conoce bien el área de aplicación. Explique por qué en este escenario conviene recurrir a un prototipo y cuál es su principal desventaja según el apunte.',
          model: 'Se espera que el alumno reconozca que el apunte señala tres escenarios donde el prototipo es especialmente útil: requerimientos que van cambiando rápidamente, cliente poco abierto a entregar una lista completa de requerimientos, y casos en que ni el cliente ni el equipo conocen bien el área de aplicación. El caso descripto encaja en dos de esos escenarios. El prototipo sirve porque es un modelo o maqueta que muestra las interfaces entre el sistema y el usuario y simula los aspectos más visuales del sistema (entradas, salidas, componentes gráficos y conceptos a tratar), permitiendo obtener feedback para acordar cuáles son los requerimientos y cómo tratarlos; así se reducen los errores de comunicación entre usuario y analista, que son de los más caros de corregir porque se visualizan en forma tardía y pueden multiplicar varias veces el costo inicial de su corrección. La principal desventaja, según el apunte, es que desde el comienzo es imposible saber cuánto tiempo tomará lograr un producto aceptable para el cliente.',
        },
        {
          kind: 'mc',
          q: 'En el modelo de casos de uso de una biblioteca, una misma persona registra préstamos cuando actúa como \'empleado\' y carga libros nuevos cuando actúa como \'bibliotecario\' (rol con ese permiso). ¿Cómo debe representarse esta situación en el modelo y por qué?',
          options: [
            'Como dos actores distintos según el rol, porque cuando el actor es una persona en el modelo se coloca el rol y no su nombre, ya que la misma persona puede interactuar desde roles diferentes.',
            'Como un único actor con el nombre de la persona, porque físicamente se trata del mismo individuo.',
            'Como un único actor que inicia ambos casos de uso, agregando una relación de uso entre los dos casos.',
            'Como dos actores secundarios, porque la persona solo recibe notificaciones del sistema en ambos casos.',
          ],
          correctIndex: 0,
          explain: 'El apunte establece que si el actor es una persona nunca se coloca su nombre en el modelo, sino el rol que representa, porque la misma persona puede interactuar con el sistema desde roles diferentes. El ejemplo del bibliotecario muestra exactamente dos roles distintos (\'empleado\' y \'bibliotecario\') de una misma persona. Cada rol inicia su propio caso de uso, por lo que actúa como actor primario y no como secundario.',
        },
        {
          kind: 'open',
          q: 'Un equipo agrega al backlog la siguiente historia: \'Como administrador del sistema quiero rehacer por completo el módulo de facturación, incluyendo emisión, anulación, reportes fiscales e integración contable, para cumplir con la nueva normativa\'. Identifique qué problema tiene esta historia según INVEST y qué debería hacerse con ella.',
          model: 'Se espera que el alumno identifique que la historia es en realidad un épico: una historia de usuario tan grande que difícilmente pueda implementarse en una única iteración. Según el apunte, cuando esto ocurre es necesario desagregar el épico en historias de usuario menores. En términos de INVEST, viola el atributo Pequeña (Small), que según el apunte exige que la historia nunca sea tan grande como para resultar imposible de planificarse o priorizarse; también compromete la Estimabilidad, ya que siempre debería poder estimarse el esfuerzo de la historia y un trabajo tan amplio es difícil de estimar. La acción correcta es desagregar el épico en historias más chicas (por ejemplo, una por cada funcionalidad: emisión, anulación, reportes, integración), cada una implementable y estimable dentro de una iteración. Puede mencionarse que la historia conserva el formato \'Como (rol) yo quiero (algo) para (beneficio)\', pero eso no alcanza para que sea una buena historia.',
        },
        {
          kind: 'tf',
          q: 'Durante una prueba de aceptación se trabaja con datos reales del cliente y no con datos ficticios, lo que puede disparar errores que no aparecieron en pruebas anteriores, tanto en el sistema como en los propios requerimientos.',
          a: true,
          explain: 'Verdadero. El apunte indica que en la aceptación se trabaja con datos reales del cliente, no ficticios, y que eso puede disparar errores que no se habían manifestado en pruebas previas, afectando tanto al sistema como a los requerimientos. La prueba de aceptación es una técnica de caja negra basada en la especificación de requerimientos.',
        },
        {
          kind: 'mc',
          q: 'Un equipo que adopta testing ágil afirma que ya no necesita una etapa separada y posterior dedicada exclusivamente a las pruebas. Según el apunte, ¿por qué esta afirmación es correcta?',
          options: [
            'Porque en un equipo ágil todos los individuos tienen habilidades de probadores y las pruebas se diseñan durante el análisis, por lo que la fase de pruebas tradicional desaparece.',
            'Porque las pruebas se delegan por completo a una herramienta de automatización que las ejecuta sin intervención humana.',
            'Porque en las metodologías ágiles solo se realizan pruebas de unidad, eliminando la integración y la de sistema.',
            'Porque el cliente es quien realiza todas las pruebas al final de cada iteración, reemplazando al equipo de desarrollo.',
          ],
          correctIndex: 0,
          explain: 'El apunte sostiene que en un equipo ágil todos los individuos tienen habilidades de probadores y que la fase de pruebas tradicional desaparece, ya que mientras se realiza el análisis se van diseñando conjuntamente las pruebas del sistema. La automatización de regresión y aceptación es un factor de éxito, pero no elimina la intervención humana ni los tipos de prueba, y el cliente no reemplaza al equipo.',
        },
        {
          kind: 'mc',
          q: 'En un sistema de venta de productos, durante el modelo de análisis se identifica un objeto que recibe la solicitud de la pantalla, opera sobre los objetos Producto y Stock, calcula la disponibilidad y devuelve el resultado a la pantalla. ¿Qué tipo de objeto del modelo de análisis es?',
          options: [
            'Objeto de control, porque modela funcionalidad que no se asigna naturalmente ni a la interfaz ni a la información, operando sobre varios objetos entidad y retornando el resultado a un objeto de interfaz.',
            'Objeto de entidad, porque maneja información (Producto y Stock) que el sistema debe conservar a lo largo del tiempo.',
            'Objeto de interfaz, porque su tarea es comunicar la pantalla con el actor que realiza la consulta.',
            'Objeto de entidad, porque se corresponde con un concepto del mundo real como es la disponibilidad.',
          ],
          correctIndex: 0,
          explain: 'El apunte describe que el objeto de control modela la funcionalidad que no se asigna naturalmente a otro objeto (no es interfaz ni información), y que su comportamiento consiste en operar sobre varios objetos entidad, hacer alguna operación y retornar el resultado a un objeto de interfaz. Eso es exactamente lo que hace el objeto descripto. Producto y Stock son entidades; la pantalla es la interfaz.',
        },
        {
          kind: 'open',
          q: 'Un estudiante sostiene que, dado que todo sistema de información procesa datos rápidamente, todo sistema de información es también un sistema de tiempo real. A partir de las definiciones de la sección \'Definiciones y tipos de sistemas\', explique por qué esa afirmación es incorrecta.',
          model: 'Se espera que el alumno distinga ambos conceptos usando lo que ofrece esta sección. Según Schach, un sistema de información logra un resultado empresarial: recopila, manipula, almacena y crea reportes de información respecto de las actividades de negocio de una empresa, con el fin de ayudar a la administración en el manejo de las operaciones de negocios; nada en esa definición exige que sea de tiempo real. Por otro lado, el apunte aclara que existen diversas clasificaciones de sistemas y elige enfocarse en tres tipos: tiempo real, distribuidos y embebidos. La definición de sistema de información se presenta de forma independiente y no establece que un sistema de información deba pertenecer a ninguno de esos tres tipos; por lo tanto, ser de tiempo real es una clasificación separada e independiente. El alumno debe concluir que el solo hecho de procesar datos no convierte a un sistema de información en uno de tiempo real, ya que se trata de definiciones y clasificaciones distintas dentro del apunte.',
        },
        {
          kind: 'tf',
          q: 'En un sistema de tiempo real, un resultado de cómputo correcto pero entregado fuera del intervalo de tiempo requerido entre la entrada y la salida se considera, de todos modos, un resultado eficiente.',
          a: false,
          explain: 'Falso. El apunte establece que la eficiencia de un sistema de tiempo real no se basa solo en la exactitud de los resultados de cómputo, sino también en el momento en que los entrega. Si el resultado, aunque correcto, llega fuera del tiempo dictado por el problema, no satisface la exigencia de oportunidad propia de estos sistemas.',
        },
        {
          kind: 'mc',
          q: 'Una empresa cuyo sistema crítico está funcionando evalúa si reescribirlo desde cero o aplicar reingeniería. Según el apunte, ¿cuál es la justificación correcta para preferir la reingeniería en este caso?',
          options: [
            'Disminuye el riesgo, sobre todo en sistemas críticos de los que la empresa depende para mantenerse operativa, y su costo siempre será menor que desarrollar un sistema completamente nuevo.',
            'Permite cambiar la funcionalidad y la arquitectura del sistema sin afectar su operación, algo imposible al desarrollar desde cero.',
            'Elimina por completo la necesidad de mantenimiento futuro, ya que el sistema reestructurado deja de degradarse.',
            'Garantiza que no se introducirán defectos al incorporar nuevas funcionalidades, a diferencia del desarrollo nuevo.',
          ],
          correctIndex: 0,
          explain: 'El apunte señala como ventajas de la reingeniería frente a un sistema nuevo la disminución del riesgo (especialmente en sistemas críticos donde la empresa depende de ellos para mantenerse operativa) y un menor costo, ya que el costo de la reingeniería siempre será menor que el de desarrollar uno completamente nuevo. La reingeniería generalmente se realiza sin cambiar la funcionalidad ni la arquitectura; ningún sistema queda libre de mantenimiento ni de la introducción de defectos al cambiarlo.',
        },
      ],
    },

    // ---------- PARCIAL 5 (dificil) ----------
    {
      id: '5',
      title: 'Parcial de práctica N.º 5',
      blurb: 'Dificultad alta · Requerimientos a fondo: SRS, cuantificación, requerimientos no funcionales, atributos, gestión/evolución, prototipos, casos de uso, INVEST, trazabilidad y V&V.',
      questions: [
        {
          kind: 'mc',
          q: 'Una organización redacta un SRS que será usado como base para un pedido de cotización a varios proveedores del mercado. Según el apunte, esto influye en cómo se describen los requerimientos porque:',
          options: [
            'Se incluyen los costos y cronogramas estimados, ya que el proveedor necesita esa información para cotizar.',
            'Se describen los requerimientos en forma más general, para abarcar más alternativas disponibles en el mercado.',
            'Se detalla con mayor precisión cada requerimiento, para que ningún proveedor pueda desviarse de la especificación.',
            'Se reemplazan los requerimientos no funcionales por los planes de aseguramiento del producto.',
          ],
          correctIndex: 1,
          explain: 'El apunte indica que cuando el SRS sirve como base para un pedido de cotización no se detalla tanto cada requerimiento, sino que se lo describe en forma más general para abarcar más alternativas disponibles en el mercado. La opción de costos y cronogramas es falsa porque esos son requerimientos del proyecto que el SRS NO debe incluir; la de mayor detalle invierte el criterio del apunte; y los planes de aseguramiento tampoco van en el SRS.',
        },
        {
          kind: 'open',
          q: 'Distinga los atributos \'correcto\' y \'completo\' de una buena SRS y explique por qué un documento podría ser correcto pero no completo. Mencione además qué rol cumplen, respecto del atributo de completitud, las siglas de la frase \'a determinar\' (to be determined).',
          model: 'Se espera que el alumno distinga: una SRS es CORRECTA si y sólo si todos y cada uno de los requisitos indicados representa algo realmente requerido por el sistema (no hay herramienta que garantice la corrección; se recomienda que el cliente determine si la especificación muestra sus necesidades). Una SRS es COMPLETA si y sólo si incluye todo lo que el software tiene que hacer, las respuestas a todas las entradas posibles (válidas e inválidas), todas las páginas, figuras y tablas numeradas y referenciadas, y ninguna sección con las siglas en inglés de la frase \'to be determined\' (a determinar). Un documento puede ser correcto (todo lo que figura es legítimo) pero no completo (falta especificar algo que el sistema sí requiere). Las siglas de \'a determinar\' se incluyen junto a un requerimiento cuando su descripción no se encuentra completa; su mera presencia viola la completitud, y cuando aparecen se recomienda incluir la causa por la cual está incompleto, quién es la persona responsable de llevarlo a cabo y una fecha estipulada para cumplirse.',
        },
        {
          kind: 'mc',
          q: 'Dentro del criterio SMART para describir correctamente un requerimiento, el apunte distingue \'Alcanzable\' (Attainable) de \'Realizable\'. La diferencia precisa es:',
          options: [
            'Alcanzable significa que el requerimiento se puede medir o probar; Realizable, que se puede rastrear su origen.',
            'Alcanzable significa que es factible llevarlo a cabo; Realizable, que se puede cumplir con los recursos disponibles (infraestructura, tecnología, personal, etc.).',
            'Alcanzable significa que está expresado sin ambigüedad; Realizable, que entrega valor al cliente final.',
            'Alcanzable y Realizable son sinónimos dentro de SMART y refieren ambos a que el requerimiento sea verificable.',
          ],
          correctIndex: 1,
          explain: 'El apunte define Alcanzable (Attainable) como que sea factible llevarlo a cabo, y Realizable como que se pueda cumplir con los recursos disponibles (infraestructura, tecnología, personal, etc.). Las otras opciones confunden esos términos con Medible, Rastreable o Específico, que son letras distintas de SMART, o niegan la distinción al tratarlos como sinónimos.',
        },
        {
          kind: 'tf',
          q: 'Las pruebas de aceptación basadas en los requerimientos son pruebas de prueba de defectos: su finalidad principal es encontrar la mayor cantidad posible de bugs en el sistema antes de la entrega.',
          a: false,
          explain: 'Falso. Según el apunte, las pruebas de aceptación basadas en los requerimientos son pruebas de VALIDACIÓN, no de prueba de defectos: no buscan encontrar bugs, sino demostrar si el sistema ha implementado en forma correcta los requerimientos establecidos. Es una técnica de caja negra cuyos casos se basan en la especificación y se trabaja con datos reales del cliente.',
        },
        {
          kind: 'mc',
          q: 'Un equipo modela los casos de uso de una biblioteca. Tanto \'Registrar préstamo\' como \'Registrar devolución\' necesitan \'Consultar socio\', funcionalidad común que por sí misma cumple con la definición de caso de uso. Por otro lado, el caso \'Cenar\' puede o no derivar en \'Tomar café\'. Según el apunte, estas situaciones corresponden, respectivamente, a:',
          options: [
            'Una relación de extensión (\'Consultar socio\') y una relación de uso (\'Tomar café\').',
            'Una relación de uso (\'Consultar socio\') y una relación de extensión (\'Tomar café\').',
            'Dos relaciones de uso, porque en ambos casos hay funcionalidad compartida entre casos de uso.',
            'Una relación entre actor y caso de uso (\'Consultar socio\') y una relación de extensión (\'Tomar café\').',
          ],
          correctIndex: 1,
          explain: 'El apunte define la relación de USO como funcionalidad común incluida en más de un caso (la parte incluida debe ser un caso de uso en sí misma): \'Consultar socio\' usada por \'Registrar préstamo\' y \'Registrar devolución\'. La relación de EXTENSIÓN es funcionalidad que puede o no ocurrir: \'Cenar\' se extiende a \'Tomar café\', que no es error ni excepción. Las otras opciones invierten ambas relaciones, las igualan, o introducen una relación con actores, que el apunte prohíbe (extensión y uso se dan sólo entre casos de uso).',
        },
        {
          kind: 'open',
          q: 'Diferencie actor primario de actor secundario en un caso de uso. Indique además cuántos actores pueden iniciar un mismo caso de uso y cómo se resuelve la situación en que varios actores podrían iniciarlo.',
          model: 'Se espera que el alumno explique: el actor PRIMARIO inicia el caso de uso y lo utiliza para lograr un objetivo. El actor SECUNDARIO es requerido (usado) por el caso de uso pero no lo inicia; se emplea cuando, como resultado de la ejecución del caso, se requiere notificarlo o enviarle información a otro actor que no fue quien inició el caso. Respecto del inicio: cada caso de uso puede ser iniciado únicamente por UN actor. Si más de un actor pudiera iniciarlo, la situación se resuelve mediante una relación de herencia entre actores.',
        },
        {
          kind: 'mc',
          q: 'Un producto de software ya está en operación y mantenimiento. Al modificar el diseño o el código, el equipo necesita identificar los requerimientos afectados por ese cambio para llevar a cabo la actualización correspondiente. Según el apunte, en esta etapa cobra más importancia la trazabilidad:',
          options: [
            'Futura, porque apunta a las fases posteriores del desarrollo y requiere que cada requerimiento tenga un nombre único.',
            'Remota, porque hace referencia a las fases previas al desarrollo, referenciando el origen o fuente del requerimiento.',
            'Hacia adelante desde los requerimientos, porque permite entender qué componentes del software satisfacen cada requerimiento.',
            'Hacia adelante hasta los requerimientos, porque los documentos que preceden al SRS pueden referenciarse al SRS.',
          ],
          correctIndex: 1,
          explain: 'El apunte indica que cuando el producto pasa a ser operado y mantenido, la trazabilidad REMOTA cobra más importancia, porque al modificar el diseño o el código es fundamental identificar los requerimientos afectados; la remota refiere a las fases previas al desarrollo y al origen o fuente del requerimiento. La futura mira hacia fases posteriores (distractor que invierte la dirección); las dos últimas describen tipos de trazabilidad que no son los que el texto destaca en esa situación.',
        },
        {
          kind: 'open',
          q: 'Compare prototipo y mockup según el apunte. Indique en qué se diferencian respecto de la interactividad y de la representación, y mencione la principal desventaja del prototipo.',
          model: 'Se espera que el alumno explique: un PROTOTIPO es un modelo o maqueta que muestra las interfaces entre el sistema y el usuario y SIMULA la interactividad del sistema con los usuarios (entradas y salidas, los componentes o elementos gráficos participantes, y los conceptos a tratar), buscando la mayor similitud al sistema final. Un MOCKUP es una representación visual ESTÁTICA de un diseño: representa de forma estática cómo se estructura la información, cómo se visualizan los contenidos y muestra las funciones básicas que estarán disponibles, pero NO simula la interactividad real (habitual en diseños web; por ejemplo, un video se representa con una imagen y un ícono de reproducción por su carácter estático). La diferencia central es la interactividad: el prototipo la simula, el mockup no. La principal DESVENTAJA del prototipo es que desde el comienzo es imposible saber cuánto tiempo tomará lograr un producto aceptable para el cliente.',
        },
        {
          kind: 'mc',
          q: 'En la cuantificación de requerimientos, el apunte distingue requisitos estáticos de dinámicos. ¿Cuál de las siguientes afirmaciones es CORRECTA según el texto?',
          options: [
            'Los requisitos estáticos incluyen los números de transacciones por período de tiempo y deben declararse para condiciones normales y máximas.',
            'Los requisitos estáticos pueden identificarse en un apartado bajo el título \'capacidad\' e incluyen, por ejemplo, el número de terminales o de usuarios conectados en simultáneo.',
            'Los requisitos dinámicos son números fijos que pueden agruparse bajo el título \'capacidad\'.',
            'Sólo los requisitos estáticos deben declararse en condiciones mensurables; los dinámicos pueden quedar expresados de forma general.',
          ],
          correctIndex: 1,
          explain: 'El apunte indica que los requisitos ESTÁTICOS pueden identificarse en un apartado separado bajo el título \'capacidad\' e incluyen el número de terminales, el número de usuarios conectados en simultáneo y la cantidad/tipo de información. Los números de transacciones por período son DINÁMICOS (no estáticos) y son estos los que deben declararse para condiciones normales y máximas; además, el apunte indica que TODOS los requisitos deben declararse en condiciones mensurables. Por eso las demás opciones invierten estático/dinámico o niegan que los dinámicos deban ser mensurables.',
        },
        {
          kind: 'open',
          q: 'Explique la diferencia entre una historia de usuario y un épico. Luego desarrolle a qué se refieren los atributos \'Negociable\' y \'Valorable\' del criterio INVEST, aclarando hasta cuándo una historia puede modificarse y a quién debe entregar valor.',
          model: 'Se espera que el alumno explique: una HISTORIA DE USUARIO es la descripción de una funcionalidad desde el punto de vista del usuario o cliente, breve (idealmente hasta dos oraciones, cargada en tarjetas). Un ÉPICO se refiere a cuando las historias de usuario son tan grandes que difícilmente puedan implementarse en una única iteración, por lo que es necesario desagregarlas en historias de usuario menores. Sobre INVEST (criterio creado por Bill Wake en 2003): NEGOCIABLE significa que las historias pueden ser cambiadas hasta tanto sean parte de una iteración (es decir, una vez que forman parte de la iteración dejan de ser negociables). VALORABLE significa que la historia debe entregar valor al cliente o usuario final.',
        },
        {
          kind: 'mc',
          q: 'Según el apunte, todas las siguientes afirmaciones sobre el testing ágil son correctas, EXCEPTO una. ¿Cuál es la INCORRECTA?',
          options: [
            'En un equipo ágil todos los individuos tienen habilidades de probadores y la fase de pruebas tradicional desaparece.',
            'Las pruebas son obtenidas por el equipo de desarrollo: mientras se realiza el análisis, conjuntamente se van diseñando las pruebas del sistema.',
            'El factor de éxito del testing ágil es automatizar las pruebas de regresión, que aseguran calidad y precisión en todo el comportamiento del sistema.',
            'El testing ágil mantiene una fase de pruebas separada a cargo de un equipo de probadores especializados que es independiente del resto del equipo.',
          ],
          correctIndex: 3,
          explain: 'La afirmación incorrecta es la cuarta: el apunte sostiene justamente lo contrario, en el testing ágil la fase de pruebas tradicional DESAPARECE porque todos los miembros poseen habilidades de probadores y se promueve que cada uno tenga varios roles para eliminar la dependencia entre individuos. Las otras tres reproducen fielmente el texto: equipo con habilidades de probadores, pruebas diseñadas durante el análisis y automatización de las pruebas de regresión como factor de éxito.',
        },
        {
          kind: 'open',
          q: 'En la gestión de requerimientos, el apunte distingue la \'revisión\' de la \'validación\'. Explique en qué se diferencian respecto de quiénes participan y de su propósito, y aclare la diferencia entre revisión formal y revisión informal.',
          model: 'Se espera que el alumno distinga: en la REVISIÓN (regular) de la definición de los requerimientos están involucrados tanto los desarrolladores como el cliente, y ayuda a una mejor gestión y a la detección de errores. La VALIDACIÓN la deben realizar el cliente y los usuarios, para confirmar que los requerimientos coincidan con los definidos para el sistema, en relación a lo que se desea o espera de él. Es decir, difieren en participantes (revisión: desarrolladores + cliente; validación: cliente + usuarios) y en propósito (mejor gestión y detección de errores vs. confirmar la correspondencia con lo que el usuario desea o espera). Además: la revisión FORMAL se realiza cuando se cuenta con la documentación completa, mientras que la revisión INFORMAL ocurre durante la producción de la especificación.',
        },
      ],
    },

    // ---------- PARCIAL 6 (dificil) ----------
    {
      id: '6',
      title: 'Parcial de práctica N.º 6',
      blurb: 'Dificultad alta · UML y tipos de sistemas a fondo: diagramas de secuencia y colaboración, objetos del análisis, tiempo real, distribuidos, embebidos, sistemas de información, reingeniería y métodos formales.',
      questions: [
        {
          kind: 'mc',
          q: 'Un equipo modela un caso de uso y necesita representar la funcionalidad que ejecuta operaciones sobre varios objetos entidad, realiza un cómputo y devuelve el resultado a la interfaz, pero que no encaja naturalmente ni en la interfaz ni en la información persistente. ¿Qué tipo de objeto del modelo de análisis corresponde?',
          options: [
            'Objeto de control.',
            'Objeto de entidad, porque opera sobre la información que sobrevive a los casos de uso.',
            'Objeto de interfaz, porque retorna el resultado a la interfaz.',
            'Objeto de frontera, porque media entre las entidades y la interfaz.',
          ],
          correctIndex: 0,
          explain: 'El objeto de control modela la funcionalidad que no se asigna naturalmente a ningún otro objeto (no es interfaz ni información a ser utilizada). Su comportamiento consiste en operar sobre varios objetos entidad, hacer alguna operación y retornar el resultado a un objeto de interfaz. El de entidad solo modela la información que sobrevive a los casos de uso y el de interfaz solo permite la comunicación con los actores; el objeto de frontera no figura en el apunte.',
        },
        {
          kind: 'open',
          q: 'El modelo de análisis y el modelo de requerimientos no son lo mismo ni se construyen en el mismo momento. Explica la relación temporal entre ambos y por qué se dice que el modelo de análisis es independiente del ambiente de implementación.',
          model: 'Se espera: el modelo de análisis se empieza a desarrollar recién una vez que el modelo de requerimientos está preparado y aprobado, es decir, el de requerimientos antecede al de análisis. El modelo de análisis estructura el sistema independientemente del ambiente de implementación actual: no se ata a la tecnología ni a cómo se va a implementar, sino que se enfoca en su estructura lógica. Por eso describe el sistema mediante tres tipos de objetos (interfaz, entidad y control), que son los que se utilizan en el diagrama de secuencia de esta etapa de análisis para capturar el comportamiento (generalmente el de un caso de uso particular) sin comprometer decisiones de implementación.',
        },
        {
          kind: 'tf',
          q: 'En un diagrama de secuencia, un mensaje recursivo se representa mediante una flecha que parte de un objeto y llega a otro objeto distinto, mientras que el período de actividad se representa con la duplicación de un rectángulo sobre la línea de vida.',
          a: false,
          explain: 'Falso, la afirmación invierte las dos nociones. El mensaje recursivo es el que un objeto se manda a sí mismo y se representa por la duplicación del rectángulo (el objeto aparece como si fuera activado varias veces), no por una flecha hacia otro objeto. El período de actividad es simplemente el espacio rectangular sobre la línea de vida que indica el tiempo que tarda el objeto en ejecutar una acción; no se representa por duplicación.',
        },
        {
          kind: 'mc',
          q: 'En un diagrama de colaboración, el orden de ejecución de los mensajes se determina mediante su numeración. En el diagrama de secuencia, en cambio, ese mismo orden temporal se infiere de:',
          options: [
            'La altura de las flechas: las flechas más altas se ejecutan antes que las que están debajo.',
            'La numeración de los links entre los objetos únicos.',
            'El orden en que aparecen escritos los nombres de los objetos de izquierda a derecha.',
            'El tamaño del rectángulo de período de actividad de cada objeto.',
          ],
          correctIndex: 0,
          explain: 'En el diagrama de secuencia el orden temporal está dado por cuán arriba está la flecha: las más altas se ejecutan antes que las de abajo. La numeración de mensajes es el recurso propio del diagrama de colaboración, no del de secuencia; el orden no depende de la posición horizontal de los objetos ni del tamaño del período de actividad.',
        },
        {
          kind: 'open',
          q: 'Según el apunte, la definición de sistema y la de sistema de información (Schach) tienen distinto alcance. Explica esa diferencia de alcance y aclara si el apunte exige que un sistema de información sea de tiempo real, distribuido o embebido.',
          model: 'Se espera: la definición de sistema es deliberadamente amplia, un conjunto de elementos que se relacionan para alcanzar un fin, sin restringir los elementos a hardware ni software ni imponer un contexto empresarial o acciones concretas. En cambio, la definición de sistema de información de Schach es más específica: es aquel que logra un resultado empresarial y que recopila, manipula, almacena y crea reportes de información respecto de las actividades de negocio de una empresa, con el fin de ayudar a la administración de esa empresa en el manejo de las operaciones de negocios. Es decir, especifica cuatro acciones concretas y un contexto de negocio. Además, el apunte trata los tipos de sistemas (tiempo real, distribuidos, embebidos) como clasificaciones separadas: no establece que un sistema de información deba ser de alguno de esos tres tipos.',
        },
        {
          kind: 'mc',
          q: 'En un sistema de tiempo real se obtiene un resultado de cómputo perfectamente exacto, pero entregado fuera del intervalo de tiempo especificado por el problema. Según el criterio de eficiencia del apunte, ese resultado debe considerarse:',
          options: [
            'Insatisfactorio, porque la eficiencia de un STR no se basa solo en la exactitud, sino también en el momento en que se entregan los resultados.',
            'Satisfactorio, porque en un STR lo único que se evalúa es la exactitud de los resultados de cómputo.',
            'Satisfactorio, porque el intervalo entre entrada y salida en un STR suele ser muy grande y admite demoras.',
            'Insatisfactorio, porque en un STR el usuario tiene prioridad por encima de los procesos.',
          ],
          correctIndex: 0,
          explain: 'La eficiencia de un sistema de tiempo real no se basa solo en la exactitud de los resultados de cómputo, sino también en el momento en que los entrega; un resultado correcto pero tardío no satisface el requerimiento temporal dictado por el problema. El intervalo entrada-salida suele ser muy pequeño (no grande) para ser aceptable, y en los sistemas operativos de tiempo real (SOTR) no importa el usuario, sino los procesos.',
        },
        {
          kind: 'open',
          q: 'Un sistema operativo de tiempo real (SOTR) se distingue de un sistema operativo de propósito general orientado al usuario. Explica esa distinción y nombra dos ejemplos de SOTR mencionados en el apunte. Indica además qué rol cumple el SOTR respecto del sistema de tiempo real.',
          model: 'Se espera: la distinción clave es que en los SOTR no tiene importancia el usuario, sino los procesos, a diferencia de los sistemas operativos orientados al usuario. El SOTR cumple el rol de plataforma para establecer un sistema de tiempo real (es la base sobre la que se monta el STR). Dos ejemplos del apunte (basta con dos): VxWorks, Solaris, Lynx OS y Spectra.',
        },
        {
          kind: 'mc',
          q: '¿Cuál de las siguientes afirmaciones sobre la tolerancia a fallos y la escalabilidad de un sistema distribuido es correcta según el apunte?',
          options: [
            'La tolerancia a fallos suele ser mayor porque la caída de una computadora no tumba toda la red, aunque el servicio puede quedar un poco degradado; y suele ser escalable, sujeto a las posibilidades de la red que lo conecta.',
            'Garantiza una disponibilidad del 100% porque el fallo de una máquina nunca afecta en absoluto al servicio.',
            'No es escalable, ya que no se pueden sumar nuevos recursos una vez desplegada la red.',
            'El procesamiento está confinado en una única máquina central, lo que lo vuelve más tolerante a fallos.',
          ],
          correctIndex: 0,
          explain: 'El apunte indica que la tolerancia a fallos suele ser mayor porque el fallo de una computadora no implica la caída de toda la red, aun brindando un servicio un poco degradado: no garantiza el 100% de disponibilidad. También suelen ser escalables (permiten sumar recursos), aunque esto depende de las posibilidades de la red. El procesamiento se distribuye sobre varias computadoras, no se confina en una sola.',
        },
        {
          kind: 'mc',
          q: 'Un dispositivo realiza una o pocas funciones, sus componentes están en una placa base y pueden no verse como una computadora, se fabrica en forma masiva para reducir costos y, ante el fallo de un elemento, hay que reparar o reemplazar la placa íntegra. ¿Qué tipo de sistema describe y en qué tipo de sistema suele operar?',
          options: [
            'Un sistema embebido (o empotrado), que generalmente funciona dentro de un sistema de tiempo real.',
            'Un sistema distribuido, que funciona repartido sobre varias máquinas de una red.',
            'Un sistema de información, que recopila, manipula, almacena y reporta datos de negocio.',
            'Un sistema operativo de tiempo real, en el que importan los procesos y no el usuario.',
          ],
          correctIndex: 0,
          explain: 'La descripción corresponde a un sistema embebido (o empotrado): funciones que no suelen estar a la vista del usuario, una o pocas funciones, componentes en placa base, fabricación masiva para reducir costos y reparación o reemplazo íntegro de la placa ante un fallo. Además, está diseñado para operar generalmente dentro de un sistema de tiempo real. No es distribuido, ni un sistema de información, ni un SOTR.',
        },
        {
          kind: 'open',
          q: 'Una empresa duda entre desarrollar un sistema desde cero o aplicar reingeniería sobre el sistema existente, del cual depende su operatoria. Explica qué es la reingeniería según el apunte, por qué tiene sentido elegirla en este escenario (sus ventajas) y aclara qué es lo que la reingeniería generalmente no modifica.',
          model: 'Se espera: la reingeniería es un proceso mediante el cual se busca la mejora de un software existente. Según Sommerville puede implicar redocumentar el sistema, organizarlo y reestructurarlo, traducirlo a un lenguaje de programación más moderno y modificar o actualizar la estructura y los valores de los datos del sistema. Generalmente se realiza sin cambiar la funcionalidad ni la arquitectura del sistema. En el escenario planteado conviene la reingeniería por dos ventajas frente al desarrollo nuevo: disminuye el riesgo, sobre todo en sistemas críticos de los que la empresa depende para mantenerse operativa (un retraso en la disponibilidad de un sistema nuevo puede causar daños severos), y tiene menor costo, ya que aunque tiene un costo, siempre será menor que el de desarrollar un sistema completamente nuevo.',
        },
        {
          kind: 'mc',
          q: 'Existen dos aproximaciones para redactar especificaciones formales de sistemas industriales. ¿Cuál de las siguientes contrasta correctamente la aproximación algebraica con la basada en modelos?',
          options: [
            'La algebraica describe el sistema mediante operaciones y sus relaciones, ocultando el estado (útil para especificar interfaces); la basada en modelos construye un modelo con conjuntos y sucesiones, muestra el estado y se basa en precondiciones y postcondiciones.',
            'La algebraica muestra el estado del sistema con conjuntos y funciones, mientras que la basada en modelos lo oculta describiendo solo operaciones.',
            'La algebraica usa precondiciones y postcondiciones sobre el estado, mientras que la basada en modelos describe operaciones y sus relaciones.',
            'Ambas ocultan el estado del sistema y solo se diferencian en el lenguaje de programación empleado para implementarlas.',
          ],
          correctIndex: 0,
          explain: 'La aproximación algebraica describe el sistema empleando operaciones y sus relaciones, oculta el estado y es útil para especificar interfaces (clases de objetos o tipos abstractos de datos). La basada en modelos construye un modelo con construcciones matemáticas como conjuntos y sucesiones, puede mostrar el estado del sistema y se basa en definir precondiciones y postcondiciones sobre ese estado. Las demás opciones invierten o mezclan estas características.',
        },
        {
          kind: 'open',
          q: 'Se afirma que los métodos formales son un complemento de las especificaciones informales y no un reemplazo total. Justifica esa afirmación explicando dos puntos clave a favor de los métodos formales y, al mismo tiempo, dos razones por las que no se adoptaron masivamente en la ingeniería de software.',
          model: 'Se espera, puntos clave a favor (al menos dos): complementan las especificaciones informales por ser precisos y no ambiguos, lo que elimina dudas y evita problemas de interpretación; fuerzan a realizar un análisis de los requerimientos en una etapa inicial, donde es menos costoso corregir un error; y son una excelente herramienta para sistemas críticos donde se prioriza la seguridad y la confiabilidad. Razones de poca adopción (al menos dos): se incorporaron otras herramientas y técnicas que lograron avances en la calidad (nuevas metodologías de desarrollo, lenguajes orientados a objetos, administración de configuraciones); en el mercado actual son críticas la interfaz con el usuario y los desarrollos rápidos, y las especificaciones formales no son aptas para ninguna de las dos cosas; y no son escalables, ya que son exitosos en aplicaciones críticas pequeñas pero se descontrolan al aumentar su tamaño. Por eso se los entiende como complemento (aportan precisión) y no como reemplazo total de las especificaciones informales.',
        },
      ],
    },
    // ---------- PARCIAL 7 (dificil) ----------
    {
      id: '7',
      title: 'Parcial de práctica N.º 7',
      blurb: 'Dificultad alta · Requerimientos y especificación a fondo: atributos de la SRS, INVEST e historias de usuario, redacción del SRS, cuantificación, trazabilidad, prototipos, revisión/validación, diagramas de interacción y métodos formales.',
      questions: [
        {
          kind: 'tf',
          q: 'Que una SRS sea correcta significa, según los atributos de una buena especificación, que cada requerimiento admite una única interpretación posible.',
          a: false,
          explain: 'Falso. Que cada requerimiento tenga una única interpretación es el atributo no ambigua. Una SRS es correcta si, y solo si, todos y cada uno de los requisitos indicados representa algo realmente requerido por el sistema a construir.',
        },
        {
          kind: 'mc',
          q: 'En el criterio INVEST de Bill Wake, ¿qué exige el atributo Independiente de una historia de usuario?',
          options: [
            'Que la historia sea autosuficiente, de modo que no presente dependencia de ninguna otra historia.',
            'Que la historia pueda cambiarse mientras no haya pasado a formar parte de una iteración.',
            'Que la historia entregue valor al cliente o al usuario final.',
            'Que siempre pueda estimarse el esfuerzo que la historia demanda.',
          ],
          correctIndex: 0,
          explain: 'Independiente significa que la historia debe ser autosuficiente para no depender de ninguna otra. Poder cambiarse hasta entrar en una iteración corresponde a Negociable; entregar valor, a Valorable; poder estimar el esfuerzo, a Estimable.',
        },
        {
          kind: 'open',
          q: 'Respecto del documento SRS, indique quién puede redactarlo y qué se recomienda al respecto, mencione las dos estrategias posibles para escribirlo y enumere al menos tres elementos que el SRS no debe incluir.',
          model: 'Se espera: el SRS puede ser llevado a cabo por personal representativo del proveedor (el desarrollador del producto) o por el usuario o potencial cliente; lo recomendable es que se redacte con la participación de ambas partes. Dos estrategias para escribirlo: completar primero el análisis del problema y luego escribir el SRS, o bien ir descomponiendo el problema y escribir cada sección a medida que se avanza. Elementos que el SRS no debe incluir: requerimientos referentes al proyecto (costos, cronogramas de tiempos, fechas de conclusión), los diseños (se excluyen porque tienen audiencias diferentes y particionan la documentación) y los planes de aseguramiento del producto (por ejemplo, plan de administración de configuraciones o plan de pruebas).',
        },
        {
          kind: 'mc',
          q: 'Según el apunte, ¿cuál es el criterio que define a un sistema como de tiempo real?',
          options: [
            'Que deba responder dentro del tiempo dictado o especificado por el problema, siendo la predictibilidad su característica principal.',
            'Que procese sus datos a la mayor velocidad de cómputo técnicamente posible.',
            'Que distribuya su procesamiento sobre varias computadoras conectadas por una red.',
            'Que ejecute una o pocas funciones sobre una placa base no visible para el usuario.',
          ],
          correctIndex: 0,
          explain: 'Un sistema de tiempo real debe responder en el tiempo dictado o especificado por el problema; su eficiencia no depende solo de la exactitud del cómputo, sino del momento de entrega, y la predictibilidad es su característica principal. Procesar a la máxima velocidad no es lo que lo define. Distribuir el procesamiento describe a un sistema distribuido; ejecutar pocas funciones sobre una placa, a uno embebido.',
        },
        {
          kind: 'mc',
          q: 'En un diagrama de secuencia, ¿cuál es la diferencia entre la notación de una condición y la de una iteración sobre un mensaje?',
          options: [
            'La condición se escribe entre corchetes antes del mensaje y este se ejecuta solo si la condición es verdadera; la iteración antepone un asterisco a la condición y la acción se repite mientras la condición sea verdadera.',
            'La condición antepone un asterisco al mensaje y la iteración lo escribe entre corchetes; ambas se ejecutan una sola vez.',
            'La condición se representa duplicando el rectángulo de actividad y la iteración con una flecha que regresa al mismo objeto.',
            'No existe distinción: tanto la condición como la iteración se notan numerando los mensajes.',
          ],
          correctIndex: 0,
          explain: 'La condición se escribe entre corchetes antes del mensaje, por ejemplo [hay producto], y el mensaje solo se ejecuta si es verdadera. La iteración se nota anteponiendo un asterisco a la condición, por ejemplo *[condición], lo que indica que la acción se repite mientras la condición sea verdadera. Duplicar el rectángulo corresponde al mensaje recursivo; numerar los mensajes, al diagrama de colaboración.',
        },
        {
          kind: 'open',
          q: 'El atributo de trazabilidad de una buena SRS recomienda cuatro tipos de trazabilidad, combinando la dirección (hacia atrás o hacia adelante) con el punto de referencia (desde los requerimientos o hasta los requerimientos). Describa qué permite cada uno de los cuatro.',
          model: 'Se espera: Trazabilidad hacia atrás desde los requerimientos: permite conocer por qué cada requerimiento del SRS existe (su fuente u origen). Trazabilidad hacia adelante hasta los requerimientos: todos los documentos que preceden al SRS pueden referenciarse al SRS. Trazabilidad hacia atrás hasta los requerimientos: cada comportamiento del software refiere explícitamente a aquellos requerimientos que satisface. Trazabilidad hacia adelante desde los requerimientos: permite entender cuáles componentes del software satisfacen cada requerimiento.',
        },
        {
          kind: 'tf',
          q: 'En el criterio INVEST, el atributo Valorable significa que siempre debería poder estimarse el esfuerzo que demanda la historia de usuario.',
          a: false,
          explain: 'Falso. Que siempre pueda estimarse el esfuerzo de la historia corresponde al atributo Estimable. Valorable significa que la historia debe entregar valor al cliente o usuario final.',
        },
        {
          kind: 'mc',
          q: '¿Cuál de las siguientes afirmaciones describe correctamente a un prototipo de requerimientos, en contraste con un mockup?',
          options: [
            'Simula la interactividad del sistema con los usuarios y se desarrolla buscando la mayor similitud posible con el sistema final.',
            'Es una representación visual estática que muestra la estructura de la información sin interactividad real.',
            'Es un documento que enumera de forma exhaustiva los requerimientos funcionales y no funcionales.',
            'Es la versión definitiva del sistema, entregada al cliente para realizar las pruebas de aceptación.',
          ],
          correctIndex: 0,
          explain: 'El prototipo simula la interactividad del sistema con los usuarios, y dichas interacciones se desarrollan buscando la mayor similitud con el sistema final. La representación visual estática sin interactividad es el mockup. El prototipo no es un documento de requerimientos ni la versión final del sistema.',
        },
        {
          kind: 'open',
          q: 'Defina qué es una historia de usuario y explique por qué, según el apunte, constituye una técnica distinta de un caso de uso (y no simplemente un caso de uso abreviado). Indique además cómo se relacionan ambas en la propuesta de Casos de uso 2.0 de Jacobson.',
          model: 'Se espera: una historia de usuario es la descripción de una funcionalidad desde el punto de vista del usuario o cliente; se expresa en párrafos breves (idealmente hasta dos oraciones) que se cargan en tarjetas y responde tres preguntas (quién es el beneficiario, qué se quiere hacer y cuál es el beneficio). Es una técnica distinta del caso de uso: el caso de uso es una descripción de un conjunto de secuencias de acciones que ejecuta el sistema para producir un resultado de valor para un actor, mientras que la historia narra de forma breve y desde la óptica del usuario; no es un caso de uso abreviado. En los Casos de uso 2.0, Jacobson propone alivianar la narrativa del caso de uso para que pueda capturarse en tarjetas pequeñas y generar las historias de usuario; las historias ayudan a comprender e implementar el caso de uso porción por porción. Es decir, se complementan, pero son técnicas diferentes.',
        },
        {
          kind: 'mc',
          q: 'Según los atributos de una buena SRS, ¿qué exige que el documento sea modificable y qué suele requerir para lograrlo?',
          options: [
            'Que su estilo y estructura permitan incorporar cambios en los requisitos de forma fácil, completa y consistente; generalmente requiere una tabla de contenidos y un índice.',
            'Que cada requisito represente algo realmente requerido por el sistema; generalmente requiere que el cliente valide la especificación.',
            'Que exista un proceso concreto y finito para comprobar si el software cumple cada requisito; generalmente requiere definir casos de prueba.',
            'Que no se establezcan conflictos entre los requisitos; generalmente requiere un glosario de términos.',
          ],
          correctIndex: 0,
          explain: 'Un documento es modificable si su estilo y estructura permiten llevar a cabo los cambios manteniendo la estructura y el estilo, de forma fácil, completa y consistente; para ello generalmente se requiere una tabla de contenidos y un índice. Representar algo requerido por el sistema es el atributo correcto; el proceso concreto y finito de comprobación es la verificabilidad; la ausencia de conflictos es la consistencia (el glosario, en cambio, atañe a la no ambigüedad).',
        },
        {
          kind: 'open',
          q: 'En la cuantificación de los requerimientos, distinga los requisitos estáticos de los dinámicos dando un ejemplo de cada uno, indique bajo qué título suele agruparse a los estáticos y explique qué significa que un requisito dinámico deba declararse en condiciones mensurables.',
          model: 'Se espera: los requisitos estáticos pueden incluir, por ejemplo, el número de terminales a considerar, el número de usuarios que se conectarán en simultáneo o la cantidad y tipo de información que se manejará; suelen agruparse en un apartado separado de la especificación bajo el título capacidad. Los requisitos dinámicos pueden incluir los números de transacciones, tareas y la cantidad de datos a procesar dentro de ciertos períodos de tiempo, para condiciones de trabajo normales y máximas. Que deban declararse en condiciones mensurables significa que tienen que poder medirse y verificarse objetivamente; por ejemplo, 95% de las transacciones se procesarán en menos de 1 segundo.',
        },
        {
          kind: 'mc',
          q: 'Un equipo debe redactar la especificación formal de una interfaz, definida como un conjunto de tipos abstractos de datos, de modo que se oculte el estado interno del sistema. Según el apunte, ¿qué aproximación de especificación formal resulta adecuada?',
          options: [
            'La aproximación algebraica, porque es útil para especificar interfaces: oculta el estado del sistema y se basa en las relaciones entre las operaciones.',
            'La aproximación basada en modelos, porque muestra el estado del sistema mediante precondiciones y postcondiciones.',
            'Cualquiera de las dos indistintamente, ya que ambas describen el estado interno del sistema de la misma manera.',
            'Ninguna de las dos, porque las especificaciones formales no son aptas para describir interfaces.',
          ],
          correctIndex: 0,
          explain: 'Las especificaciones formales basadas en técnicas algebraicas son útiles para especificar interfaces (definidas como un conjunto de clases u objetos o tipos abstractos de datos), porque ocultan el estado del sistema y se especifican a partir de las relaciones entre las operaciones de la interfaz. La aproximación basada en modelos, en cambio, muestra el estado del sistema y se apoya en precondiciones y postcondiciones; por eso no es la más indicada cuando justamente se busca ocultar el estado.',
        },
      ],
    },

    // ---------- PARCIAL 8 (dificil) ----------
    {
      id: '8',
      title: 'Parcial de práctica N.º 8',
      blurb: 'Dificultad alta · Distinciones finas del temario: atributos de la SRS, INVEST y épicos, historia de usuario vs caso de uso, requerimientos no funcionales, prototipo vs mockup, relaciones de casos de uso, reingeniería vs mantenimiento, sistema de información vs tiempo real y revisión/validación.',
      questions: [
        {
          kind: 'mc',
          q: 'Una SRS contiene dos requerimientos que demandan del producto comportamientos contradictorios entre sí. ¿Qué atributo de una buena especificación se está incumpliendo y a qué tipo de problema corresponde?',
          options: [
            'Incumple la consistencia; se trata de un conflicto de características, uno de los tres tipos de conflicto (junto con los términos conflictivos y la inconsistencia temporal).',
            'Incumple la corrección, porque alguno de los dos requerimientos no representa algo requerido por el sistema.',
            'Incumple la verificabilidad, porque los comportamientos contradictorios no pueden comprobarse mediante un proceso finito.',
            'Incumple la trazabilidad, porque no puede determinarse el origen de cada uno de los requerimientos.',
          ],
          correctIndex: 0,
          explain: 'La consistencia exige que no haya conflictos entre requisitos. Dos partes del SRS que demandan comportamientos contradictorios constituyen un conflicto de características; los otros dos tipos de conflicto son los términos conflictivos y la inconsistencia temporal. La corrección se refiere a que cada requerimiento represente algo requerido por el sistema; la verificabilidad, a poder comprobarlo con un proceso finito; la trazabilidad, a conocer su origen.',
        },
        {
          kind: 'tf',
          q: 'Una historia de usuario es, en esencia, un caso de uso redactado de forma más breve: se trata de la misma técnica con distinto nivel de detalle.',
          a: false,
          explain: 'Falso. La historia de usuario y el caso de uso son técnicas distintas. La historia describe una funcionalidad de forma breve y desde el punto de vista del usuario, en una tarjeta; el caso de uso describe un conjunto de secuencias de acciones que ejecuta el sistema para producir un resultado de valor para un actor. En los Casos de uso 2.0 las historias se generan a partir de narrativas de casos de uso más livianas, pero no son un caso de uso abreviado.',
        },
        {
          kind: 'open',
          q: 'El apunte presenta varias técnicas para tratar los requerimientos no funcionales. Mencione el cuadro de Barry Boehm, el criterio SMART y la validación por escenarios, explicando para qué sirve cada uno.',
          model: 'Se espera: el cuadro de Barry Boehm (1976) es una lista jerárquica de cualidades presentes en un producto de software; sirve para conocer qué cualidades existen y guiar la especificación, aunque no todo sistema necesita especificar la lista entera (depende de los requisitos de cada aplicación). El criterio SMART (Specific, Measurable, Attainable, Realizable, Traceable) sirve para evaluar la correcta descripción de cada requerimiento, de modo que quede expresado sin ambigüedad, sea medible, alcanzable, realizable y rastreable. La validación por escenarios sirve para validar un requerimiento definiendo la entrada (quién produce el estímulo y el estímulo que se produce), las condiciones (estado del sistema y componente que recibe el estímulo) y los resultados (la respuesta que provoca el estímulo y la métrica para medirla). Conviene además realizar un análisis costo/beneficio de los requerimientos no funcionales.',
        },
        {
          kind: 'mc',
          q: 'Un diseñador arma un mockup de una pantalla que incluirá un reproductor de video. Como el mockup es estático, ¿cómo representa esa función, según el apunte?',
          options: [
            'Con una imagen y un ícono de reproducción, porque el mockup es estático pero igualmente muestra las funciones básicas que estarán disponibles.',
            'Con el video reproduciéndose de verdad, ya que el mockup simula la interactividad completa de la pantalla.',
            'Omitiendo el video, porque un mockup estático no puede representar ninguna función del sistema.',
            'Con un enlace al sistema final, dado que el mockup es la última etapa del prototipado interactivo.',
          ],
          correctIndex: 0,
          explain: 'El mockup es una representación visual estática, pero de todos modos muestra las funciones básicas disponibles; por ejemplo, para indicar que una sección incluirá un video se lo representa con una imagen y un ícono de reproducción, justamente por ese carácter estático. No simula la interactividad (eso es propio del prototipo funcional) ni omite las funciones.',
        },
        {
          kind: 'mc',
          q: 'Un analista propone establecer una relación de extensión entre un actor y un caso de uso. Según el apunte, ¿es válido?',
          options: [
            'No: las relaciones de extensión y de uso solo pueden presentarse entre casos de uso, y todas las partes deben cumplir con la definición de caso de uso.',
            'Sí: la extensión vincula a un actor con el caso de uso que este podría iniciar de manera opcional.',
            'Sí, pero únicamente si el actor es secundario y no es quien inicia el caso de uso.',
            'No, porque la única relación posible entre casos de uso es la de herencia.',
          ],
          correctIndex: 0,
          explain: 'Las relaciones de extensión y de uso se presentan únicamente entre casos de uso, y todas las partes involucradas deben cumplir con la definición de caso de uso; no se establecen con actores. La relación de herencia que menciona el apunte es entre actores (cuando más de un actor podría iniciar un mismo caso), no entre casos de uso.',
        },
        {
          kind: 'open',
          q: 'Explique qué es un épico y qué debe hacerse con él. Luego desarrolle el significado de los atributos Estimable, Pequeña (Small) y Comprobable (Testable) del criterio INVEST.',
          model: 'Se espera: un épico es una historia de usuario tan grande que difícilmente pueda implementarse en una única iteración; ante un épico es necesario desagregarlo en historias de usuario menores. Estimable: siempre debería poder estimarse cuál es el esfuerzo que demanda la historia. Pequeña (Small): la historia nunca debe ser tan grande como para resultar imposible de planificar o priorizar. Comprobable (Testable): la historia, o su descripción, debe brindar la información necesaria para poder probar su desarrollo efectivo.',
        },
        {
          kind: 'mc',
          q: '¿Cuál de las siguientes distingue correctamente la reingeniería del mantenimiento, según el apunte?',
          options: [
            'El mantenimiento cambia algo en el sistema luego de entregado (desde corregir un error hasta incorporar nuevos requerimientos); la reingeniería busca mejorar el software existente y generalmente se realiza sin cambiar su funcionalidad ni su arquitectura.',
            'La reingeniería cambia la funcionalidad y la arquitectura del sistema, mientras que el mantenimiento las conserva intactas.',
            'El mantenimiento se realiza antes de la entrega del sistema, y la reingeniería únicamente después.',
            'Son sinónimos: ambos consisten en reescribir el sistema desde cero para eliminar la degradación de su estructura.',
          ],
          correctIndex: 0,
          explain: 'El mantenimiento es cambiar algo en el sistema en forma posterior a la entrega, y puede ir desde corregir un error simple hasta incorporar nuevos requerimientos o corregir errores de diseño. La reingeniería es un proceso para mejorar un software existente (redocumentar, reestructurar, traducir a un lenguaje más moderno, actualizar la estructura y los datos) y generalmente se realiza sin cambiar la funcionalidad ni la arquitectura. No son lo mismo ni implican reescribir desde cero.',
        },
        {
          kind: 'open',
          q: 'Distinga los atributos verificable, consistente y trazable de una buena SRS. Para cada uno, dé su definición precisa según el apunte.',
          model: 'Se espera: Verificable: un requisito es verificable si, y solo si, existe un proceso concreto y finito mediante el cual una persona o máquina puede comprobar si el software lo cumple; los requisitos ambiguos o que indican cantidades no mensurables no son verificables. Consistente: la documentación es internamente consistente si, y solo si, no se establecen conflictos entre requisitos individuales o grupos de requisitos (los tres tipos de conflicto son términos conflictivos, características conflictivas e inconsistencia temporal). Trazable o rastreable: una SRS es trazable si el origen de cada requerimiento es claro y facilita su referencia en las etapas futuras del desarrollo o en las actualizaciones de la documentación. Conviene no confundir ninguno de los tres con el atributo correcto, que se refiere a que cada requerimiento represente algo realmente requerido por el sistema.',
        },
        {
          kind: 'mc',
          q: '¿Cuál de las siguientes asociaciones entre un tipo de sistema y su rasgo definitorio es correcta según el apunte?',
          options: [
            'Sistema distribuido: el procesamiento de la información se reparte sobre varias computadoras en vez de estar confinado en una única máquina, de modo que el fallo de una no implica la caída del sistema completo.',
            'Sistema embebido: distribuye su procesamiento sobre varias computadoras conectadas por una red de comunicaciones.',
            'Sistema de tiempo real: ejecuta una o pocas funciones sobre una placa base y no es visible para el usuario.',
            'Sistema de información: se define por responder dentro del intervalo de tiempo dictado por el problema.',
          ],
          correctIndex: 0,
          explain: 'El sistema distribuido reparte el procesamiento sobre varias computadoras en vez de una sola, y el fallo de una no implica la caída de todo el sistema. Ejecutar una o pocas funciones sobre una placa, sin ser visible para el usuario, define al sistema embebido (no al de tiempo real). Responder dentro del tiempo dictado por el problema define al de tiempo real (no al de información). El sistema de información se define por lograr un resultado empresarial, según Schach.',
        },
        {
          kind: 'tf',
          q: 'Según el apunte, la revisión formal de la especificación de requerimientos se lleva a cabo durante su producción, mientras que la revisión informal requiere contar con la documentación ya completa.',
          a: false,
          explain: 'Falso. Es a la inversa: la revisión es formal cuando se cuenta con la documentación completa, e informal cuando se realiza durante la producción de la especificación.',
        },
        {
          kind: 'open',
          q: 'Según las definiciones del apunte, ¿qué define a un sistema de información (según Schach) y qué define a un sistema de tiempo real? Señale en qué se diferencia el criterio que determina a cada uno.',
          model: 'Se espera: un sistema de información se define por lograr un resultado empresarial; según Schach, recopila, manipula, almacena y crea reportes de información respecto de las actividades de negocio de una empresa, con el fin de ayudar a su administración en el manejo de las operaciones de negocios. Es decir, lo que lo define es la finalidad empresarial del resultado que produce. Un sistema de tiempo real se define por deber responder dentro del tiempo dictado o especificado por el problema: su eficiencia no depende solo de la exactitud de los resultados de cómputo, sino también del momento en que los entrega, y su característica principal es la predictibilidad. La diferencia de criterio es clara: al sistema de información lo determina el resultado de negocio que produce, mientras que al sistema de tiempo real lo determina el cumplimiento del plazo temporal impuesto por el problema.',
        },
        {
          kind: 'mc',
          q: 'Según el apunte, ¿cómo se asigna el nombre de un caso de uso en su representación gráfica?',
          options: [
            'Con un verbo en infinitivo seguido del principal objeto o entidad afectado, expresado desde el punto de vista de quien lo realiza.',
            'Con el nombre propio del actor que lo inicia, ubicado dentro de la elipse.',
            'Con un sustantivo que nombre el módulo del sistema donde se implementa el caso.',
            'Con un identificador numérico único que se corresponde con el requerimiento funcional.',
          ],
          correctIndex: 0,
          explain: 'El caso de uso se representa con una elipse y en su interior se coloca el nombre, que se expresa desde el punto de vista de quien lo utiliza o realiza y comienza con un verbo en infinitivo seguido del principal objeto o entidad afectado (por ejemplo, registrar préstamo). Nunca se coloca el nombre de la persona: si el actor es una persona, se modela su rol.',
        },
      ],
    },
  ],
};
