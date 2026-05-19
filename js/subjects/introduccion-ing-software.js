/**
 * Materia: Introducción a la Ingeniería de Software (UP).
 * Módulos 8 — Modelado de requerimientos, 9 — Pruebas de los requerimientos,
 * 10 — Diagramas de secuencia.
 *
 * Tipos conceptuales (ver js/content.js para Subject/Section/ContentBlock).
 */

export default {
  id: 'introduccion-ing-software',
  title: 'Introducción a la Ingeniería de Software',
  subtitle: 'Módulos 8, 9 y 10 — Apuntes',
  tagline: 'Modelado de requerimientos · Pruebas de requerimientos · Diagramas de secuencia',
  units: {
    '8': 'Modelado de requerimientos',
    '9': 'Pruebas de los requerimientos',
    '10': 'Diagramas de secuencia',
  },
  sections: [
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
  ],
  pdfs: [
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
  ],
};
