/**
 * Materia: Introducción a la Ingeniería de Software (UP).
 * Módulos 8 — Modelado de requerimientos, 9 — Pruebas de los requerimientos,
 * 10 — Diagramas de secuencia, 12 — Tipos de sistemas (Unidad 11),
 * 11 — Reingeniería y métodos formales (Unidad 12).
 *
 * Tipos conceptuales (ver js/content.js para Subject/Section/ContentBlock).
 */

export default {
  id: 'introduccion-ing-software',
  title: 'Introducción a la Ingeniería de Software',
  subtitle: 'Módulos 8, 9, 10, 11 y 12 — Apuntes',
  tagline: 'Modelado de requerimientos · Pruebas de requerimientos · Diagramas de secuencia · Tipos de sistemas · Reingeniería y métodos formales',
  units: {
    '8': 'Modelado de requerimientos',
    '9': 'Pruebas de los requerimientos',
    '10': 'Diagramas de secuencia',
    '11': 'Tipos de sistemas',
    '12': 'Reingeniería y métodos formales',
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
  ],
};
