/**
 * Banco NUEVO (anti-spoiler) — introduccion-ing-software
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
          "q": "Un prototipo simula los aspectos más visuales del sistema, como entradas, salidas y elementos gráficos participantes.",
          "a": true,
          "explain": "Tal cual lo dice el texto: el prototipo simula lo más visual del sistema, sus entradas y salidas, los componentes gráficos y los conceptos a tratar. Es la maqueta que se parece lo más posible al producto real."
        },
        {
          "id": "tf2-1-2",
          "q": "La principal desventaja del prototipo es que requiere conocer con exactitud, desde el comienzo, todos los requerimientos del cliente.",
          "a": false,
          "explain": "Es al revés: la desventaja es que desde el arranque no podés saber cuánto va a tardar lograr un producto aceptable, porque no sabés cuántas iteraciones del ida y vuelta van a hacer falta. Justamente sirve cuando los requerimientos NO están del todo claros."
        },
        {
          "id": "tf2-1-3",
          "q": "Un mockup es una representación visual estática que muestra estructura y contenidos, pero sin la interacción real del sistema.",
          "a": true,
          "explain": "Eso es el mockup: una representación visual pero estática del diseño. Muestra cómo se estructura la info y qué funciones habrá, pero no tiene la interactividad real. Por eso un video se representa con una imagen y un ícono de play."
        },
        {
          "id": "tf2-1-4",
          "q": "Según el texto, los errores por comunicación deficiente entre usuario y analista son baratos de corregir porque se detectan de inmediato.",
          "a": false,
          "explain": "Son de los más caros de corregir, justamente porque se visualizan en forma tardía y pueden multiplicar varias veces el costo inicial de su corrección. Nada de baratos ni inmediatos."
        },
        {
          "id": "tf2-1-5",
          "q": "Una de las pautas para desarrollar un prototipo es obstaculizar la selección de acciones que puedan ser destructivas de datos o información.",
          "a": true,
          "explain": "Está entre las pautas listadas: hay que poner trabas a las acciones destructivas para que el usuario no borre datos sin querer. Va junto con mostrar estados, agrupar funciones y usar términos familiares."
        }
      ],
      "mc": [
        {
          "id": "mc2-1-1",
          "q": "Según el texto, ¿qué es un prototipo?",
          "options": [
            "Un documento contractual que fija el alcance definitivo y cerrado del sistema",
            "Una versión final del sistema, ya codeada y lista para entregar al cliente",
            "Un listado completo y validado de todos los requerimientos del proyecto",
            "Un modelo o maqueta que muestra las interfaces entre el sistema y el usuario"
          ],
          "correctIndex": 3,
          "explain": "El texto lo define como un modelo o maqueta que muestra las interfaces entre el sistema y el usuario, simulando lo más visual. No es ni la versión final ni un documento de requerimientos cerrado."
        },
        {
          "id": "mc2-1-2",
          "q": "¿Cuándo resulta especialmente útil confeccionar un prototipo?",
          "options": [
            "Cuando los requerimientos van cambiando rápidamente o el cliente da poca info",
            "Cuando el cliente ya entregó una lista completa, cerrada y validada de requerimientos",
            "Cuando el área de aplicación es perfectamente conocida y dominada por todo el equipo",
            "Cuando ya no se esperan cambios ni iteraciones de ningún tipo durante el desarrollo"
          ],
          "correctIndex": 0,
          "explain": "El [info] del texto dice que sirve sobre todo cuando los requerimientos cambian rápido, cuando el cliente está poco abierto a dar la lista completa, o si ni el cliente ni nosotros conocemos bien el área. Las otras opciones son justo los escenarios donde menos lo necesitás."
        },
        {
          "id": "mc2-1-3",
          "q": "Según el estudio de Gordon y Bieman (1995) sobre 39 proyectos, ¿cuál fue uno de los beneficios del prototipado?",
          "options": [
            "Aumento del esfuerzo necesario para el desarrollo completo del sistema",
            "Disminución del esfuerzo requerido en el desarrollo del sistema",
            "Mayor cantidad de errores tardíos detectados durante la producción",
            "Menor coherencia entre las reales necesidades del usuario y el sistema"
          ],
          "correctIndex": 1,
          "explain": "Entre los beneficios que midieron está la disminución del esfuerzo de desarrollo, junto con mejor usabilidad, mejor calidad de diseño y más coherencia con lo que el usuario necesita. Las otras opciones invierten esos resultados."
        },
        {
          "id": "mc2-1-4",
          "q": "En el diseño centrado en el usuario, ¿por dónde se arranca el proceso de determinación de requerimientos?",
          "options": [
            "Por la arquitectura interna de la base de datos relacional del sistema",
            "Por la documentación técnica detallada y completa de cada módulo del sistema",
            "Por los aspectos más visibles del sistema, trabajando con los usuarios",
            "Por la codificación de las funciones internas más críticas y complejas del sistema"
          ],
          "correctIndex": 2,
          "explain": "El texto dice que primero se revisan los aspectos más visibles y se trabaja con los usuarios, por eso es clave su colaboración. Recién después se baja a lo interno; no se arranca codeando ni por la base de datos."
        }
      ],
      "ms": [
        {
          "id": "ms2-1-1",
          "q": "¿Cuáles de las siguientes son pautas mencionadas para desarrollar un prototipo?",
          "options": [
            "Emplear conceptos, términos y simbología familiares para los usuarios",
            "Mantener la coherencia dentro del sistema y con otros sistemas existentes",
            "Ocultar siempre el estado de ejecución de las funciones al usuario final",
            "Agrupar las funciones del sistema de forma lógica entre sí",
            "Facilitar al máximo la selección de acciones destructivas de datos"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Las pautas reales son usar términos familiares, mantener coherencia y agrupar funciones por lógica. Las otras dos están al revés: hay que MOSTRAR el estado de ejecución y OBSTACULIZAR las acciones destructivas, no ocultarlo ni facilitarlas."
        },
        {
          "id": "ms2-1-2",
          "q": "Según Gordon y Bieman (1995), ¿cuáles fueron beneficios concretos del uso de prototipos?",
          "options": [
            "Perfeccionamiento en la usabilidad del nuevo sistema construido",
            "Mayor coherencia entre las necesidades de los usuarios y el sistema",
            "Un diseño final de mejor calidad para el producto desarrollado",
            "Mejora en el proceso de mantenimiento posterior del sistema",
            "Aumento del esfuerzo total requerido durante el desarrollo"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Los cuatro primeros son beneficios listados: usabilidad, coherencia con las necesidades, calidad de diseño y mejor mantenimiento. El último está mal: el estudio reportó DISMINUCIÓN del esfuerzo, no aumento."
        },
        {
          "id": "ms2-1-3",
          "q": "¿Cuáles de estas afirmaciones sobre el mockup son correctas según el texto?",
          "options": [
            "Es una representación visual y dinámica con interacción real completa",
            "Reemplaza por completo a las pruebas con usuarios finales del sistema",
            "Garantiza por sí solo que el sistema final no tendrá errores de diseño",
            "Permite estimar con exactitud cuántas iteraciones tomará el desarrollo",
            "Incluye animaciones y transacciones funcionales de extremo a extremo"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. El mockup es estático (no dinámico ni con interacción real), no reemplaza pruebas con usuarios, no garantiza ausencia de errores, no sirve para estimar iteraciones (esa incertidumbre es la desventaja del prototipo) y no tiene transacciones funcionales. Es solo una representación visual estática."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-1-1",
        "front": "¿Qué es un prototipo?",
        "back": "Un modelo o maqueta que muestra las interfaces entre el sistema y el usuario, simulando los aspectos más visuales (entradas, salidas, elementos gráficos) y la interactividad, lo más parecido posible al sistema final."
      },
      {
        "id": "fc2-1-2",
        "front": "¿Qué es un mockup (prototipo de pantalla)?",
        "back": "Una representación visual pero estática de un diseño. Muestra cómo se estructura la información, cómo se visualizan los contenidos y las funciones básicas disponibles, pero sin interacción real."
      },
      {
        "id": "fc2-1-3",
        "front": "Principal desventaja del prototipo",
        "back": "Desde el comienzo es imposible saber cuánto tiempo tomará lograr un producto aceptable para el cliente, porque no se sabe cuántas iteraciones del ida y vuelta harán falta."
      },
      {
        "id": "fc2-1-4",
        "front": "¿Cuándo es especialmente útil prototipar?",
        "back": "Cuando los requerimientos cambian rápidamente, cuando el cliente está poco abierto a entregar una lista completa de requerimientos, o cuando ni el cliente ni el equipo conocen bien el área de aplicación."
      },
      {
        "id": "fc2-1-5",
        "front": "Beneficios del prototipado según Gordon y Bieman (1995)",
        "back": "Sobre 39 proyectos: mejor usabilidad, mayor coherencia con las necesidades del usuario, diseño de mejor calidad, mejora del mantenimiento y disminución del esfuerzo de desarrollo."
      },
      {
        "id": "fc2-1-6",
        "front": "¿Por qué son caros los errores por mala comunicación usuario-analista?",
        "back": "Porque se visualizan en forma tardía y pueden multiplicar varias veces lo que hubiera sido el costo inicial de su corrección."
      },
      {
        "id": "fc2-1-7",
        "front": "Diseño centrado en el usuario",
        "back": "Se arranca revisando los aspectos más visibles del sistema y trabajando con los usuarios, para obtener feedback temprano y acordar cuáles son los requerimientos antes de codear."
      },
      {
        "id": "fc2-1-8",
        "front": "Problemas habituales en la comprensión de requisitos",
        "back": "Que estén incompletos en su definición, que presenten ambigüedades o que sean inconsistentes entre ellos, y por eso resulten incorrectos al no definir las reales necesidades del usuario."
      }
    ]
  },
  "2": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-2-1",
          "q": "Los casos de uso fueron presentados por Ivar Jacobson en 1987 con su método OOSE.",
          "a": true,
          "explain": "Exacto: Jacobson los presentó en el 87 con OOSE (Object Oriented Software Engineering) y de ahí terminaron siendo uno de los diagramas de UML."
        },
        {
          "id": "tf2-2-2",
          "q": "Si el actor es una persona, en el modelo se coloca su nombre propio en lugar de su rol.",
          "a": false,
          "explain": "Al revés: nunca se pone el nombre, sino el rol que representa, porque la misma persona puede interactuar con el sistema desde roles distintos (como el bibliotecario que a veces actúa como empleado y a veces carga libros)."
        },
        {
          "id": "tf2-2-3",
          "q": "Un caso de uso permite dejar claro qué hará un sistema y, por omisión intencional, también lo que no hará.",
          "a": true,
          "explain": "Tal cual: la gracia del caso de uso es delimitar el alcance, dejando explícito lo que el sistema hace y, por lo que deja afuera a propósito, lo que no hace."
        },
        {
          "id": "tf2-2-4",
          "q": "Un mismo caso de uso puede ser iniciado por varios actores distintos al mismo tiempo, sin necesidad de resolverlo de ninguna manera.",
          "a": false,
          "explain": "No: cada caso de uso puede ser iniciado únicamente por UN actor. Si más de un actor podría iniciarlo, eso se resuelve con una relación de herencia entre actores."
        },
        {
          "id": "tf2-2-5",
          "q": "El nombre de un caso de uso comienza con un verbo en infinitivo seguido del principal objeto o entidad afectado.",
          "a": true,
          "explain": "Así es: se expresa desde el punto de vista de quien lo realiza, arrancando con verbo en infinitivo más el objeto principal, como \"Registrar préstamo\"."
        }
      ],
      "mc": [
        {
          "id": "mc2-2-1",
          "q": "Según Jacobson, Rumbaugh y Booch, ¿qué es un caso de uso?",
          "options": [
            "Una descripción de secuencias de acciones que ejecuta el sistema para dar valor a un actor",
            "Un diagrama estático que representa la estructura de datos y entidades internas del sistema",
            "Un listado de los componentes físicos y de red que integran la infraestructura del sistema",
            "Una tarjeta breve y narrativa que describe la historia de un usuario en un par de oraciones"
          ],
          "correctIndex": 0,
          "explain": "La definición canónica habla de un conjunto de secuencias de acciones, con variantes, que ejecuta el sistema para producir un resultado observable de valor para un actor. No es estructura de datos ni hardware ni una historia de usuario."
        },
        {
          "id": "mc2-2-2",
          "q": "¿Cómo se representa gráficamente un caso de uso en el diagrama?",
          "options": [
            "Como un rectángulo con el nombre del sistema en el borde",
            "Como un muñeco de palo ubicado fuera del sistema",
            "Como una elipse con el nombre del caso en su interior",
            "Como una caja pequeña que agrupa varios subsistemas"
          ],
          "correctIndex": 2,
          "explain": "El caso de uso es la elipse con su nombre adentro. El muñeco de palo es el actor, y el rectángulo es la frontera del sistema. No los mezcles."
        },
        {
          "id": "mc2-2-3",
          "q": "¿Qué caracteriza al actor secundario de un caso de uso?",
          "options": [
            "Es quien inicia el caso de uso para lograr su propio objetivo personal concreto",
            "Es siempre una persona física y nunca otro sistema o aplicación externa al modelo",
            "Es el único actor que tiene permiso para ejecutar la totalidad del caso de uso",
            "Es requerido por el caso, por ejemplo para notificarlo, pero no lo inició"
          ],
          "correctIndex": 3,
          "explain": "El actor secundario es usado por el caso de uso: se le notifica o se le envía info como resultado, pero no fue quien lo inició. El que inicia para lograr un objetivo es el primario."
        },
        {
          "id": "mc2-2-4",
          "q": "Según el texto, ¿qué puede ser un actor?",
          "options": [
            "Únicamente una persona que opera directamente el sistema",
            "Una organización, una unidad, una persona u otro sistema",
            "Solo otro sistema o aplicación que se conecta de manera automática",
            "Exclusivamente un módulo interno del propio sistema modelado"
          ],
          "correctIndex": 1,
          "explain": "El texto dice que los actores pueden ser organizaciones, unidades o personas, e incluso otros sistemas o aplicaciones. No se limita ni solo a personas ni solo a sistemas."
        }
      ],
      "ms": [
        {
          "id": "ms2-2-1",
          "q": "¿Cuáles de estas preguntas ayudan a identificar a los actores de un sistema?",
          "options": [
            "¿Quién usa el sistema en su operación cotidiana?",
            "¿Quién necesita que el sistema le brinde información?",
            "¿Cuántas líneas de código tendrá cada módulo del sistema?",
            "¿Quién provee al sistema de la información que procesa?",
            "¿Quién instala, prepara y mantiene el sistema funcionando?"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Las preguntas del texto apuntan a quién usa, quién necesita info, quién provee info, qué otros sistemas interactúan y quién instala/mantiene. La de las líneas de código no tiene nada que ver con identificar actores."
        },
        {
          "id": "ms2-2-2",
          "q": "Según el texto, ¿qué afirmaciones sobre actores y casos de uso son correctas?",
          "options": [
            "Cada caso de uso puede ser iniciado únicamente por un actor",
            "Si el actor es persona, se modela su rol y no su nombre propio",
            "Los actores solo pueden ser personas físicas que usan pantallas",
            "El actor primario inicia el caso para lograr un objetivo concreto",
            "Un caso de uso nunca puede producir resultado de valor para un actor"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Verdaderas: un solo actor inicia cada caso, se modela el rol y no el nombre, y el primario inicia para lograr un objetivo. Falsas: los actores también pueden ser organizaciones o sistemas, y el caso justamente produce un resultado de valor para el actor."
        },
        {
          "id": "ms2-2-3",
          "q": "¿Cuáles de las siguientes afirmaciones sobre los casos de uso son verdaderas según el texto?",
          "options": [
            "Fueron creados por Bill Wake en el año 2003 junto con INVEST",
            "Son parte del lenguaje COBOL para programación estructurada antigua",
            "Reemplazan por completo a la fase de codificación del sistema",
            "Sirven para modelar la estructura física del hardware del servidor",
            "Solo aplican a sistemas de inteligencia artificial avanzada"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. Los casos de uso los presentó Jacobson en 1987 (no Wake, que hizo INVEST), no son parte de COBOL, no reemplazan la codificación, no modelan hardware y aplican a sistemas de software en general, no solo a IA."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-2-1",
        "front": "¿Quién y cuándo presentó los casos de uso?",
        "back": "Ivar Jacobson, en 1987, con su método OOSE (Object Oriented Software Engineering) para el modelado y desarrollo de sistemas orientados a objetos."
      },
      {
        "id": "fc2-2-2",
        "front": "Definición de caso de uso (Jacobson, Rumbaugh y Booch)",
        "back": "Descripción de un conjunto de secuencias de acciones, incluyendo variantes, que ejecuta un sistema para producir un resultado observable de valor para un actor."
      },
      {
        "id": "fc2-2-3",
        "front": "¿Qué es un actor?",
        "back": "Alguien o algo que interactúa con el sistema. Puede ser una organización, unidad, persona u otro sistema/aplicación. Representa un conjunto coherente de roles que juegan los usuarios."
      },
      {
        "id": "fc2-2-4",
        "front": "¿Por qué se modela el rol y no el nombre del actor?",
        "back": "Porque si el actor es una persona, la misma persona puede interactuar con el sistema desde roles diferentes; por eso se coloca el rol que representa y nunca su nombre propio."
      },
      {
        "id": "fc2-2-5",
        "front": "Actor primario vs. actor secundario",
        "back": "El primario inicia el caso de uso y lo usa para lograr un objetivo. El secundario es requerido por el caso (por ejemplo, para notificarlo o enviarle información), pero no fue quien lo inició."
      },
      {
        "id": "fc2-2-6",
        "front": "¿Cómo se nombra un caso de uso?",
        "back": "Desde el punto de vista de quien lo realiza: verbo en infinitivo seguido del principal objeto o entidad afectado (ej.: \"Registrar préstamo\")."
      },
      {
        "id": "fc2-2-7",
        "front": "¿Cuántos actores pueden iniciar un mismo caso de uso?",
        "back": "Únicamente uno. Si más de un actor pudiera iniciar el mismo caso, se resuelve mediante una relación de herencia entre actores."
      },
      {
        "id": "fc2-2-8",
        "front": "Representación gráfica: caso de uso y actor",
        "back": "El caso de uso se dibuja como una elipse con su nombre adentro; el actor se representa como un muñeco de palo."
      }
    ]
  },
  "3": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-3-1",
          "q": "En el cuadro descriptivo, el curso normal describe la secuencia numerada en condiciones donde todo sale bien, incluyendo lo que hace el actor y lo que hace el sistema.",
          "a": true,
          "explain": "Sí: el curso normal es el camino feliz, numerado, donde se describe tanto lo que hace el actor como lo que hace el sistema cuando todos los controles salen bien."
        },
        {
          "id": "tf2-3-2",
          "q": "Las relaciones de extensión y uso pueden darse tanto entre casos de uso como entre un caso de uso y un actor.",
          "a": false,
          "explain": "No: las relaciones de extensión y uso se dan únicamente entre casos de uso, nunca con actores. Además, cada parte involucrada tiene que ser un caso de uso en sí mismo."
        },
        {
          "id": "tf2-3-3",
          "q": "Si una alternativa aparece en el paso 3 del curso normal, se indica como curso alternativo numerado, por ejemplo 3.1.",
          "a": true,
          "explain": "Correcto: el curso alternativo se numera indicando en qué paso se desvía. Si la alternativa surge en el paso 3, se anota como 3.1 en la segunda columna."
        },
        {
          "id": "tf2-3-4",
          "q": "En el diagrama de casos de uso se puede usar un rectángulo para indicar la frontera entre el sistema y su entorno.",
          "a": true,
          "explain": "Tal cual: el rectángulo marca la frontera del sistema, con el nombre del sistema en un borde interno, y adentro van las elipses y las relaciones."
        },
        {
          "id": "tf2-3-5",
          "q": "En la relación de extensión, la parte que extiende a otro caso siempre ocurre de manera obligatoria en cada ejecución.",
          "a": false,
          "explain": "Justo al revés: un caso extiende a otro cuando tiene una parte de la funcionalidad que NO siempre ocurre (podría darse o no), como tomar café después de cenar. Eso no es obligatorio ni un error."
        }
      ],
      "mc": [
        {
          "id": "mc2-3-1",
          "q": "¿Por dónde se empieza a describir las interacciones en el cuadro de un caso de uso?",
          "options": [
            "Por los cursos alternativos de la segunda columna del cuadro",
            "Por las excepciones de la versión extendida del cuadro descriptivo",
            "Por el curso normal, donde todas las condiciones salen bien",
            "Por la postcondición que debe cumplirse al finalizar el caso"
          ],
          "correctIndex": 2,
          "explain": "Siempre se arranca por el curso normal (el camino donde todo sale bien) y recién después se ven los cursos alternativos. Postcondición y excepciones son de la versión extendida y van después."
        },
        {
          "id": "mc2-3-2",
          "q": "¿En qué consiste la relación de uso entre casos de uso?",
          "options": [
            "Un caso incluye a otro porque es un escenario común a más de un caso",
            "Un caso agrega una funcionalidad opcional adicional que podría darse o no darse",
            "Un actor reutiliza el mismo caso entrando desde dos roles distintos del sistema",
            "Un caso se conecta con un actor secundario para notificarlo del resultado obtenido"
          ],
          "correctIndex": 0,
          "explain": "La relación de uso es cuando un caso está incluido en otro y se trata de un escenario común a varios casos (como Consultar socio dentro de Registrar préstamo y Registrar devolución). Lo opcional que podría darse o no es la extensión, no el uso."
        },
        {
          "id": "mc2-3-3",
          "q": "En el ejemplo del apunte, ¿qué caso de uso es común tanto a Registrar préstamo como a Registrar devolución?",
          "options": [
            "Registrar un socio nuevo dentro del padrón general de la biblioteca",
            "Tomar café, agregado como extensión opcional del caso principal",
            "Consultar socio, funcionalidad compartida por ambos casos",
            "Reponer los libros con mayor demanda registrada en la biblioteca"
          ],
          "correctIndex": 2,
          "explain": "El ejemplo muestra que Consultar socio es funcionalidad común a Registrar préstamo y Registrar devolución, y cumple por sí misma la definición de caso de uso. Por eso es una relación de uso."
        },
        {
          "id": "mc2-3-4",
          "q": "¿Qué muestra el diagrama de casos de uso?",
          "options": [
            "Solamente las elipses de los casos, sin incluir actores ni relaciones algunas",
            "Únicamente la frontera del sistema con su nombre asignado en el borde interno",
            "El paso a paso numerado del curso normal de cada uno de los casos del sistema",
            "El conjunto de casos de uso, los actores y las relaciones entre ellos"
          ],
          "correctIndex": 3,
          "explain": "El diagrama modela la vista de casos de uso mostrando los casos, los actores y las relaciones. El paso a paso va en el cuadro descriptivo, no en el diagrama."
        }
      ],
      "ms": [
        {
          "id": "ms2-3-1",
          "q": "¿Qué campos forman parte del cuadro descriptivo básico de un caso de uso?",
          "options": [
            "Nombre del caso de uso, que coincide con el del diagrama",
            "El actor que inicia el caso de uso descripto",
            "Precondición: lo que debe ser cierto antes de ejecutar el caso",
            "Curso normal: secuencia numerada donde todo sale bien",
            "Diagrama de clases con todos los atributos y métodos del sistema"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "El cuadro básico tiene nombre, actor, precondición, curso normal y curso alternativo. El diagrama de clases con atributos y métodos no es parte de este cuadro descriptivo."
        },
        {
          "id": "ms2-3-2",
          "q": "Según el texto, ¿qué afirmaciones sobre las relaciones entre casos de uso son correctas?",
          "options": [
            "Las relaciones de extensión y uso se dan únicamente entre casos de uso",
            "La extensión modela funcionalidad que no siempre ocurre",
            "La relación de uso aparece tras especificar varios casos comunes",
            "Cada parte de la relación debe ser un caso de uso en sí mismo",
            "Las relaciones de uso y extensión se establecen entre actores"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son verdaderas: las relaciones son solo entre casos de uso, la extensión es lo que no siempre ocurre, el uso surge de funcionalidad común, y cada parte debe ser un caso de uso. La última es falsa: no se dan entre actores."
        },
        {
          "id": "ms2-3-3",
          "q": "¿Cuáles de estos campos pertenecen exclusivamente al cuadro descriptivo extendido (y no al básico)?",
          "options": [
            "Identificador del requerimiento asociado al caso",
            "Postcondición del caso de uso una vez ejecutado",
            "Excepciones descriptas paso a paso para el caso",
            "Nivel de importancia asignado al requerimiento",
            "Nombre del caso de uso que coincide con el diagrama"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Identificador, postcondición, excepciones e importancia son propios del cuadro extendido. El nombre del caso, en cambio, también está en el básico, así que no es exclusivo del extendido."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-3-1",
        "front": "¿Qué es el cuadro descriptivo de un caso de uso?",
        "back": "El cuadro donde se detalla la secuencia de interacciones entre el sistema y sus actores. El básico incluye nombre, actor, precondición, curso normal y curso alternativo."
      },
      {
        "id": "fc2-3-2",
        "front": "¿Qué es el curso normal en un caso de uso?",
        "back": "La secuencia numerada de interacciones cuando todas las condiciones o controles salen bien, describiendo tanto lo que hace el actor como lo que hace el sistema."
      },
      {
        "id": "fc2-3-3",
        "front": "¿Cómo se numera un curso alternativo?",
        "back": "Indicando el paso del curso normal donde se desvía. Si la alternativa surge en el paso 3, se anota como 3.1 en la segunda columna."
      },
      {
        "id": "fc2-3-4",
        "front": "Campos del cuadro descriptivo extendido",
        "back": "Identificador, Nombre, Actor principal, Actor secundario, Descripción, Precondición, Secuencia Normal, Postcondición, Excepciones, Importancia y Comentarios."
      },
      {
        "id": "fc2-3-5",
        "front": "Relación de extensión entre casos de uso",
        "back": "Un caso extiende a otro cuando tiene una parte de la funcionalidad que no siempre ocurre (podría darse o no), pero ambos deben ser casos de uso en sí mismos. Ej.: Cenar extendido por Tomar café."
      },
      {
        "id": "fc2-3-6",
        "front": "Relación de uso entre casos de uso",
        "back": "Cuando un caso está incluido en otro por ser un escenario común a más de un caso. Aparece tras especificar varios casos. Ej.: Consultar socio usado por Registrar préstamo y Registrar devolución."
      },
      {
        "id": "fc2-3-7",
        "front": "¿Entre qué elementos se dan las relaciones de extensión y uso?",
        "back": "Únicamente entre casos de uso (nunca con actores), y cada parte involucrada debe cumplir por sí misma con la definición de caso de uso."
      },
      {
        "id": "fc2-3-8",
        "front": "¿Qué muestra el diagrama de casos de uso?",
        "back": "El conjunto de casos de uso, los actores y las relaciones. Puede usar un rectángulo para la frontera del sistema y cajas más pequeñas para agrupar casos por subsistemas."
      }
    ]
  },
  "4": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-4-1",
          "q": "Los Casos de Uso 2.0 de Jacobson fueron diseñados para alivianar el proceso y llevarse bien con las historias de usuario.",
          "a": true,
          "explain": "Sí: Jacobson armó los Casos de Uso 2.0 más livianos justamente para sugerir narrativas más ligeras que capturen lo necesario para generar historias de usuario, hasta en tarjetas pequeñas."
        },
        {
          "id": "tf2-4-2",
          "q": "Una historia de usuario debe responder tres preguntas: quién es el beneficiario, qué se quiere hacer y cuál es el beneficio.",
          "a": true,
          "explain": "Tal cual: la historia responde quién es el beneficiario (rol/actor), qué se quiere hacer (la funcionalidad) y cuál es el beneficio (el valor de negocio, el por qué)."
        },
        {
          "id": "tf2-4-3",
          "q": "Un épico es una historia de usuario tan pequeña que ya no se puede dividir en historias menores.",
          "a": false,
          "explain": "Es al revés: un épico es una historia tan GRANDE que difícilmente entre en una sola iteración, y por eso hay que desagregarla en historias de usuario menores."
        },
        {
          "id": "tf2-4-4",
          "q": "El criterio INVEST fue creado por Bill Wake en el año 2003 para juzgar la calidad de las historias de usuario.",
          "a": true,
          "explain": "Correcto: INVEST es la checklist de Bill Wake (2003) con los atributos de una buena historia de usuario: Independiente, Negociable, Valorable, Estimable, Pequeña y Comprobable."
        },
        {
          "id": "tf2-4-5",
          "q": "Según INVEST, una buena historia de usuario debe ser independiente, es decir, autosuficiente y sin depender de otra historia.",
          "a": true,
          "explain": "Sí: la I de INVEST es Independiente, lo que significa que la historia debe ser autosuficiente para no depender de ninguna otra historia."
        }
      ],
      "mc": [
        {
          "id": "mc2-4-1",
          "q": "¿Qué es una historia de usuario?",
          "options": [
            "La descripción de una funcionalidad desde el punto de vista del usuario o cliente",
            "El cuadro descriptivo extendido con identificador, precondición, postcondición y excepciones",
            "Un diagrama formal y completo que muestra todos los actores y sus relaciones de herencia",
            "La especificación técnica detallada y exhaustiva de cada módulo interno del sistema final"
          ],
          "correctIndex": 0,
          "explain": "Una historia es la descripción breve de una funcionalidad desde el punto de vista del usuario o cliente, idealmente en dos oraciones y cargada en una tarjeta. No es el cuadro extendido ni un diagrama formal."
        },
        {
          "id": "mc2-4-2",
          "q": "¿Cuál es el formato recomendado para escribir una historia de usuario?",
          "options": [
            "Verbo en infinitivo seguido del objeto principal afectado",
            "Como (rol) yo quiero (algo) para (beneficiarme)",
            "Si (condición) entonces el sistema realiza la acción",
            "Identificador, nombre, actor, precondición y postcondición"
          ],
          "correctIndex": 1,
          "explain": "El formato recomendado es \"Como (rol) yo quiero (algo) para (beneficiarme)\", que responde quién, qué y para qué. El verbo en infinitivo es para nombrar casos de uso, no historias."
        },
        {
          "id": "mc2-4-3",
          "q": "Según INVEST, ¿qué significa que una historia sea Comprobable (Testable)?",
          "options": [
            "Que siempre se pueda estimar de antemano el esfuerzo que demanda la historia",
            "Que pueda cambiarse y negociarse hasta que sea parte de una iteración planificada",
            "Que brinde la información necesaria para poder probar su desarrollo",
            "Que entregue un valor concreto y medible al cliente o usuario final del sistema"
          ],
          "correctIndex": 2,
          "explain": "La T de Testable significa que la historia o su descripción debe dar la info necesaria para probar que se desarrolló efectivamente. Estimar el esfuerzo es la E, poder cambiarla es la N y entregar valor es la V."
        },
        {
          "id": "mc2-4-4",
          "q": "¿Para qué sirven las historias de usuario en relación con el caso de uso?",
          "options": [
            "Para reemplazar por completo al diagrama de casos de uso del sistema",
            "Para fijar el alcance contractual definitivo e inmodificable del proyecto",
            "Para entender el caso de uso e implementarlo porción por porción",
            "Para documentar la estructura física del hardware donde corre el sistema"
          ],
          "correctIndex": 2,
          "explain": "Las historias ayudan a entender el caso de uso y permiten implementarlo porción por porción, en lugar de describir todo de una vez. No reemplazan el diagrama ni documentan hardware."
        }
      ],
      "ms": [
        {
          "id": "ms2-4-1",
          "q": "¿Cuáles de las siguientes letras y atributos de INVEST están correctamente emparejados?",
          "options": [
            "I = Independiente: autosuficiente, sin depender de otra historia",
            "N = Negociable: puede cambiarse hasta ser parte de una iteración",
            "V = Valorable: debe entregar valor al cliente o usuario final",
            "E = Estimable: siempre debería poder estimarse su esfuerzo",
            "S = Estática: la historia nunca puede modificarse una vez escrita"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras están bien: Independiente, Negociable, Valorable y Estimable. La S es de Pequeña (Small), no de \"Estática\": una historia nunca debe ser tan grande que no se pueda planificar ni priorizar."
        },
        {
          "id": "ms2-4-2",
          "q": "Según el texto, ¿qué tres preguntas debe responder una historia de usuario?",
          "options": [
            "¿Quién es el beneficiario de la historia de usuario?",
            "¿Qué se quiere hacer, a alto nivel, con esa funcionalidad?",
            "¿Cuál es el beneficio o valor de negocio que aporta?",
            "¿Cuántas líneas de código exactas requerirá implementarla?",
            "¿Qué hardware específico necesitará el servidor para correrla?"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres preguntas son quién es el beneficiario, qué se quiere hacer y cuál es el beneficio. Las líneas de código y el hardware no forman parte de lo que define una historia de usuario."
        },
        {
          "id": "ms2-4-3",
          "q": "¿Cuáles de estas afirmaciones sobre épicos e historias son correctas según el texto?",
          "options": [
            "Un épico es una historia grande que no entra en una sola iteración",
            "El épico se resuelve desagregándolo en historias de usuario menores",
            "Una historia se carga en una tarjeta, idealmente en hasta dos oraciones",
            "Los Casos de Uso 2.0 buscan alivianar el proceso de narración",
            "Un épico es siempre más fácil de estimar que una historia pequeña"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son verdaderas. La última es falsa: justamente un épico es difícil de planificar/estimar por su tamaño, por eso se lo desagrega; no es más fácil de estimar que una historia chica."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-4-1",
        "front": "¿Qué es una historia de usuario?",
        "back": "La descripción breve de una funcionalidad desde el punto de vista del usuario o cliente, idealmente en hasta dos oraciones, cargada en una tarjeta."
      },
      {
        "id": "fc2-4-2",
        "front": "Tres preguntas que responde una historia de usuario",
        "back": "¿Quién es el beneficiario? (rol/actor), ¿Qué se quiere hacer? (la funcionalidad de alto nivel) y ¿Cuál es el beneficio? (el valor de negocio, el por qué)."
      },
      {
        "id": "fc2-4-3",
        "front": "Formato recomendado de una historia de usuario",
        "back": "Como (rol) yo quiero (algo) para (beneficiarme). Ej.: Como bibliotecario, quiero revisar el historial de préstamos para identificar los libros más demandados y reponerlos."
      },
      {
        "id": "fc2-4-4",
        "front": "¿Qué es un épico?",
        "back": "Una historia de usuario tan grande que difícilmente pueda implementarse en una única iteración. Se resuelve desagregándola en historias de usuario menores."
      },
      {
        "id": "fc2-4-5",
        "front": "¿Qué son los Casos de Uso 2.0 de Jacobson?",
        "back": "Una versión pensada para alivianar el proceso: sugiere narrativas de casos de uso más ligeras que capturen solo lo necesario para generar historias de usuario, hasta en tarjetas pequeñas."
      },
      {
        "id": "fc2-4-6",
        "front": "¿Qué significa INVEST y quién lo creó?",
        "back": "Es el criterio de Bill Wake (2003) con los atributos de una buena historia: Independiente, Negociable, Valorable, Estimable, Pequeña (Small) y Comprobable (Testable)."
      },
      {
        "id": "fc2-4-7",
        "front": "INVEST: ¿qué significan I, N y V?",
        "back": "I = Independiente (autosuficiente, sin depender de otra historia). N = Negociable (puede cambiarse hasta ser parte de una iteración). V = Valorable (debe entregar valor al cliente o usuario)."
      },
      {
        "id": "fc2-4-8",
        "front": "INVEST: ¿qué significan E, S y T?",
        "back": "E = Estimable (siempre debería poder estimarse su esfuerzo). S = Pequeña/Small (nunca tan grande que no se pueda planificar ni priorizar). T = Comprobable/Testable (debe dar info para probar su desarrollo)."
      }
    ]
  },
  "5": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-5-1",
          "q": "La trazabilidad puede presentarse partiendo del SRS (Software Requirement Specification).",
          "a": true,
          "explain": "Tal cual: el apunte dice que la trazabilidad puede presentarse partiendo del SRS y, si se establece de dónde se originó cada requerimiento, sirve para referenciar en etapas futuras."
        },
        {
          "id": "tf2-5-2",
          "q": "Cuando el producto pasa a ser operado y mantenido, la trazabilidad remota pierde relevancia.",
          "a": false,
          "explain": "Al revés: el apunte dice que en la etapa de operación y mantenimiento la trazabilidad remota cobra MÁS importancia, porque al tocar diseño o código necesitás identificar qué requerimientos se ven afectados."
        },
        {
          "id": "tf2-5-3",
          "q": "La trazabilidad futura exige que cada requerimiento tenga un nombre o referencia única.",
          "a": true,
          "explain": "Claro: la futura apunta a las fases posteriores, y para eso es imprescindible que cada requerimiento tenga referencia única que lo identifique."
        },
        {
          "id": "tf2-5-4",
          "q": "La trazabilidad remota hace referencia a las fases posteriores al desarrollo.",
          "a": false,
          "explain": "No: la remota mira las fases PREVIAS, referenciando el origen o fuente del requerimiento. La que mira las fases posteriores es la futura."
        },
        {
          "id": "tf2-5-5",
          "q": "La trazabilidad hacia atrás desde los requerimientos permite conocer por qué cada requerimiento del SRS existe.",
          "a": true,
          "explain": "Sí: según la tabla del apunte, ese tipo te permite entender la razón de existir de cada requerimiento del SRS."
        }
      ],
      "mc": [
        {
          "id": "mc2-5-1",
          "q": "¿Para qué sirve la trazabilidad si se establece de dónde se originó cada requerimiento?",
          "options": [
            "Para referenciarlo luego en las futuras etapas del desarrollo",
            "Para eliminar requerimientos repetidos antes de aprobar el SRS definitivo",
            "Para asignar prioridad económica y técnica a cada requerimiento del proyecto",
            "Para distribuir las tareas de prueba entre los miembros del equipo ágil"
          ],
          "correctIndex": 0,
          "explain": "El apunte dice que si se establece de forma clara dónde se originó cada requerimiento, eso sirve luego para referenciarlo en las futuras etapas del desarrollo. Las otras son inventos."
        },
        {
          "id": "mc2-5-2",
          "q": "¿Qué hace la trazabilidad hacia adelante desde los requerimientos?",
          "options": [
            "Referencia los documentos previos al SRS contra el SRS aprobado",
            "Conoce por qué cada requerimiento del SRS existe en el sistema",
            "Entiende qué componentes del software satisfacen cada uno",
            "Indica el comportamiento concreto que satisface a cada requerimiento"
          ],
          "correctIndex": 2,
          "explain": "Según la tabla, hacia adelante DESDE los requerimientos te deja entender cuáles componentes del software satisfacen cada requerimiento. Las otras corresponden a los demás tipos."
        },
        {
          "id": "mc2-5-3",
          "q": "¿Qué tipo de trazabilidad implica que cada comportamiento del software refiera explícitamente los requerimientos que satisface?",
          "options": [
            "Trazabilidad hacia adelante desde los requerimientos",
            "Trazabilidad hacia atrás hasta los requerimientos",
            "Trazabilidad hacia adelante hasta los requerimientos",
            "Trazabilidad hacia atrás desde los requerimientos"
          ],
          "correctIndex": 1,
          "explain": "La tabla la define así: hacia atrás HASTA los requerimientos = cada comportamiento del software refiere explícitamente aquellos requerimientos que satisface."
        },
        {
          "id": "mc2-5-4",
          "q": "Según la lectura criolla del apunte, ¿qué significa que un tipo sea \"desde los requerimientos\"?",
          "options": [
            "Que llegás finalmente al requerimiento desde otra fase distinta",
            "Que arrancás en el requerimiento como punto de partida",
            "Que mirás siempre las fases previas al desarrollo del producto",
            "Que referenciás los documentos que preceden al SRS aprobado"
          ],
          "correctIndex": 1,
          "explain": "El criollo lo aclara: \"desde los requerimientos\" = arrancás en el requerimiento; \"hasta los requerimientos\" = llegás al requerimiento. La dirección atrás/adelante te dice si vas a fases previas o posteriores."
        }
      ],
      "ms": [
        {
          "id": "ms2-5-1",
          "q": "¿Cuáles afirmaciones sobre la trazabilidad remota y futura coinciden con el apunte?",
          "options": [
            "La remota referencia el origen o fuente del requerimiento",
            "La futura apunta a las fases posteriores del desarrollo",
            "La futura no necesita ninguna referencia única por requerimiento",
            "La remota refiere a las fases previas al desarrollo del sistema",
            "La remota pierde importancia durante la operación y el mantenimiento"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "La remota referencia el origen y mira fases previas; la futura mira fases posteriores. La 3 es falsa (la futura SÍ exige referencia única) y la 5 también (la remota gana importancia en mantenimiento)."
        },
        {
          "id": "ms2-5-2",
          "q": "¿Cuáles de estos son tipos de trazabilidad listados explícitamente en la tabla del apunte?",
          "options": [
            "Trazabilidad hacia atrás desde los requerimientos",
            "Trazabilidad hacia adelante hasta los requerimientos",
            "Trazabilidad hacia atrás hasta los requerimientos",
            "Trazabilidad hacia adelante desde los requerimientos",
            "Trazabilidad lateral entre requerimientos del mismo SRS"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son los cuatro tipos de la tabla. La \"trazabilidad lateral\" no existe en el apunte: es un distractor inventado."
        },
        {
          "id": "ms2-5-3",
          "q": "¿Cuáles de estas afirmaciones sobre el SRS aparecen tal cual en esta sección?",
          "options": [
            "El SRS define los criterios de aceptación del cliente final",
            "El SRS asigna automáticamente prioridades a cada requerimiento",
            "El SRS reemplaza la necesidad de pruebas de regresión continuas",
            "El SRS exige que cada requerimiento tenga un costo estimado",
            "El SRS contiene siempre exactamente cuatro requerimientos"
          ],
          "correctIndexes": [],
          "explain": "Ninguna está en el texto: criterios de aceptación, prioridades, regresión, costos y cantidades fijas no se mencionan en esta sección de trazabilidad. Es una MS sin correctas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-5-1",
        "front": "¿Qué es el SRS?",
        "back": "Software Requirement Specification: el documento desde el cual puede partir la trazabilidad de requerimientos."
      },
      {
        "id": "fc2-5-2",
        "front": "Trazabilidad remota",
        "back": "Hace referencia a las fases previas al desarrollo, referenciando el origen o fuente del requerimiento (mira para atrás del SRS)."
      },
      {
        "id": "fc2-5-3",
        "front": "Trazabilidad futura",
        "back": "Apunta a las fases posteriores del desarrollo; exige que cada requerimiento tenga un nombre o referencia única."
      },
      {
        "id": "fc2-5-4",
        "front": "¿Por qué importa la trazabilidad en operación y mantenimiento?",
        "back": "Porque al modificar diseño o código se vuelve fundamental identificar los requerimientos afectados por ese cambio para actualizarlos."
      },
      {
        "id": "fc2-5-5",
        "front": "Trazabilidad hacia atrás desde los requerimientos",
        "back": "Permite conocer por qué cada requerimiento del SRS existe."
      },
      {
        "id": "fc2-5-6",
        "front": "Trazabilidad hacia adelante hasta los requerimientos",
        "back": "Todos los documentos que preceden al SRS pueden referenciarse al SRS."
      },
      {
        "id": "fc2-5-7",
        "front": "Trazabilidad hacia atrás hasta los requerimientos",
        "back": "Cada comportamiento del software refiere explícitamente aquellos requerimientos que satisface."
      },
      {
        "id": "fc2-5-8",
        "front": "Trazabilidad hacia adelante desde los requerimientos",
        "back": "Permite entender cuáles componentes del software satisfacen cada requerimiento."
      }
    ]
  },
  "6": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-6-1",
          "q": "Según Boehm (1979), la validación pregunta si estamos construyendo el producto correctamente.",
          "a": false,
          "explain": "Está cruzado: para Boehm la validación pregunta si construimos el producto CORRECTO, y la verificación si lo construimos correctamente. Acá te dieron vuelta la pareja."
        },
        {
          "id": "tf2-6-2",
          "q": "La prueba de aceptación es una técnica de caja negra.",
          "a": true,
          "explain": "Sí: la realiza el usuario, los casos salen de la especificación de requerimientos y es de caja negra (no mira el interior del código)."
        },
        {
          "id": "tf2-6-3",
          "q": "En la prueba de aceptación se trabaja con datos ficticios para no comprometer información real.",
          "a": false,
          "explain": "No: el apunte aclara que en la aceptación se usan datos REALES del cliente, y eso puede disparar errores que no salieron en pruebas anteriores."
        },
        {
          "id": "tf2-6-4",
          "q": "Según el ISTQB, las pruebas de aceptación basadas en requerimientos son pruebas de validación, no de detección de defectos.",
          "a": true,
          "explain": "Exacto: son pruebas de validación; lo que buscan es demostrar que el sistema implementó correctamente los requerimientos, no cazar defectos."
        },
        {
          "id": "tf2-6-5",
          "q": "La verificación implica comprobar que el software está de acuerdo a la especificación de requerimientos generada previamente.",
          "a": true,
          "explain": "Sí: esa es la definición del apunte. Verificación = el producto se ajusta a la especificación que ya armaste."
        }
      ],
      "mc": [
        {
          "id": "mc2-6-1",
          "q": "Según Boehm (1979), ¿qué pregunta responde la validación?",
          "options": [
            "¿Estamos construyendo el producto de forma correcta?",
            "¿El código respeta la especificación generada antes?",
            "¿Estamos construyendo el producto correcto?",
            "¿El diseño cumple cada criterio formal definido?"
          ],
          "correctIndex": 2,
          "explain": "Validación = ¿estamos construyendo el producto correcto? (el que el usuario necesita). La de \"forma correcta\" es la verificación; las otras dos son distractores del mismo palo."
        },
        {
          "id": "mc2-6-2",
          "q": "¿En qué se basan los casos de prueba de la prueba de aceptación?",
          "options": [
            "En la especificación de requerimientos del sistema",
            "En el código fuente revisado línea por línea por el equipo",
            "En el diseño interno de los módulos ya integrados entre sí",
            "En los criterios de finalización definidos para cada fase"
          ],
          "correctIndex": 0,
          "explain": "El apunte es claro: los casos de prueba de aceptación se basan en la especificación de requerimientos, y por eso es técnica de caja negra."
        },
        {
          "id": "mc2-6-3",
          "q": "¿Cuál de estos NO es un paso del proceso de aceptación según el apunte?",
          "options": [
            "Determinar el rol del usuario en el proceso",
            "Desarrollar un plan formal de aceptación",
            "Optimizar el rendimiento del código fuente",
            "Definir los criterios de aceptación claros"
          ],
          "correctIndex": 2,
          "explain": "Los pasos son: rol del usuario, criterios, plan, ejecutar plan y decidir aceptación. Optimizar el rendimiento del código no figura entre ellos."
        },
        {
          "id": "mc2-6-4",
          "q": "¿Cómo define el ISTQB a las pruebas de aceptación?",
          "options": [
            "Pruebas internas que revisan el código contra el diseño aprobado del sistema",
            "Pruebas formales respecto a necesidades, requisitos y procesos comerciales",
            "Pruebas de detección de defectos enfocadas en hallar fallos ocultos del código",
            "Pruebas de integración entre los módulos ya construidos y conectados entre sí"
          ],
          "correctIndex": 1,
          "explain": "El ISTQB las define como pruebas formales respecto a necesidades del usuario, requisitos y procesos comerciales, para decidir si se acepta o no el sistema."
        },
        {
          "id": "mc2-6-5",
          "q": "¿Cuándo se inicia la tarea de V&V (verificación y validación)?",
          "options": [
            "Únicamente sobre el producto final que se entrega al cliente",
            "Solo durante la fase de pruebas de sistema completo",
            "Recién en la etapa de mantenimiento posterior del software",
            "Con la comprobación de los requerimientos al inicio"
          ],
          "correctIndex": 3,
          "explain": "El apunte dice que V&V inicia comprobando los requerimientos, luego el diseño, el código y finalmente el producto final. No es solo al final."
        }
      ],
      "ms": [
        {
          "id": "ms2-6-1",
          "q": "¿Cuáles son pasos del proceso de aceptación según el apunte?",
          "options": [
            "Determinar el rol del usuario",
            "Definir los criterios de aceptación",
            "Desarrollar un plan de aceptación",
            "Ejecutar el plan de aceptación",
            "Automatizar las pruebas de regresión"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Los pasos son rol del usuario, criterios, plan, ejecución y decisión. Automatizar regresión pertenece al testing ágil, no a este proceso."
        },
        {
          "id": "ms2-6-2",
          "q": "¿Cuáles afirmaciones sobre verificación y validación son correctas?",
          "options": [
            "La validación corrobora que la definición de requerimientos corresponda al sistema que el usuario espera",
            "Es importante que el cliente valide la especificación de requerimientos generada",
            "La verificación comprueba el software contra la especificación previa",
            "V&V se aplica solo después de tener el producto terminado",
            "La validación se refiere a probar el código contra la implementación"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son del apunte. V&V se aplica en cada etapa (no solo al final) y la validación no es \"código contra implementación\": esos dos son falsos."
        },
        {
          "id": "ms2-6-3",
          "q": "Para el requerimiento \"el usuario podrá consultar los datos de un producto indicando un dato\", ¿qué pruebas menciona el ejemplo del apunte?",
          "options": [
            "Buscar un producto que exista",
            "Buscar un producto que no exista",
            "Buscar con un dato que coincida con varios productos",
            "Modificar los datos de un producto existente",
            "Eliminar un producto del catálogo del sistema"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "El ejemplo lista esas tres pruebas posibles. Modificar y eliminar no aparecen: el requerimiento es de consulta, no de edición."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-6-1",
        "front": "Validación (Boehm, 1979)",
        "back": "¿Estamos construyendo el producto correcto? Demuestra que los requerimientos generados se corresponden con el sistema que el usuario necesita."
      },
      {
        "id": "fc2-6-2",
        "front": "Verificación (Boehm, 1979)",
        "back": "¿Estamos construyendo el producto correctamente? Comprueba que el software esté de acuerdo a la especificación de requerimientos previa."
      },
      {
        "id": "fc2-6-3",
        "front": "¿Qué es V&V?",
        "back": "Verificación y validación: tarea de revisión y pruebas que inicia con los requerimientos y sigue en diseño, código y producto final."
      },
      {
        "id": "fc2-6-4",
        "front": "Prueba de aceptación",
        "back": "La realiza el usuario para verificar que el sistema se ajusta a sus requerimientos; es de caja negra y sus casos salen de la especificación."
      },
      {
        "id": "fc2-6-5",
        "front": "Pasos del proceso de aceptación",
        "back": "Determinar rol del usuario, definir criterios de aceptación, desarrollar el plan, ejecutar el plan y determinar decisiones de aceptación."
      },
      {
        "id": "fc2-6-6",
        "front": "¿Con qué datos se trabaja en la aceptación?",
        "back": "Con datos reales del cliente, no ficticios; eso puede disparar errores que no aparecieron en pruebas anteriores."
      },
      {
        "id": "fc2-6-7",
        "front": "Pruebas de aceptación según ISTQB",
        "back": "Pruebas formales respecto a necesidades del usuario, requisitos y procesos comerciales, para determinar si se acepta o no el sistema."
      },
      {
        "id": "fc2-6-8",
        "front": "Aceptación basada en requerimientos: ¿qué tipo de prueba es?",
        "back": "Es prueba de validación, no de detección de defectos: busca demostrar que el sistema implementó correctamente los requerimientos."
      }
    ]
  },
  "7": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-7-1",
          "q": "La estrategia de prueba define el enfoque y los objetivos generales de las actividades de prueba.",
          "a": true,
          "explain": "Sí: la estrategia define enfoque, objetivos, fases, clases de prueba por fase, técnicas, herramientas y criterios de finalización."
        },
        {
          "id": "tf2-7-2",
          "q": "La prueba de unidad generalmente la realiza una persona distinta de quien construyó el módulo.",
          "a": false,
          "explain": "No: según la tabla, la prueba de unidad la realiza generalmente quien construyó el módulo o componente."
        },
        {
          "id": "tf2-7-3",
          "q": "En el testing ágil todos los individuos del equipo tienen habilidades de probadores.",
          "a": true,
          "explain": "Tal cual: en un equipo ágil todos los integrantes son testers; desaparece la fase de pruebas separada que existía en los métodos tradicionales."
        },
        {
          "id": "tf2-7-4",
          "q": "La prueba de integración detecta fallos en la interacción entre los componentes.",
          "a": true,
          "explain": "Sí: prueba las respuestas de grupos de módulos interconectados y detecta fallos en cómo interactúan entre sí."
        },
        {
          "id": "tf2-7-5",
          "q": "El factor de éxito del testing ágil es evitar automatizar las pruebas de regresión.",
          "a": false,
          "explain": "Al revés: el factor de éxito es justamente saber AUTOMATIZAR las pruebas de regresión (y también las de aceptación)."
        }
      ],
      "mc": [
        {
          "id": "mc2-7-1",
          "q": "¿Qué prueba la fase de sistema?",
          "options": [
            "Un único módulo aislado del resto del sistema",
            "Las respuestas de grupos de módulos interconectados",
            "El sistema completo en un ambiente similar al real",
            "La interacción puntual entre dos componentes nuevos"
          ],
          "correctIndex": 2,
          "explain": "La fase de sistema prueba el sistema completo en un ambiente similar al real, considerando que puede ser parte de un sistema mayor."
        },
        {
          "id": "mc2-7-2",
          "q": "¿Qué paradigma de diseño enfatiza el testing ágil según el ISTQB?",
          "options": [
            "El diseño de prueba primero (prueba antes que código)",
            "El diseño exhaustivo previo de todos los módulos",
            "El diseño de pruebas solo en la fase final del proyecto",
            "El diseño separado entre testers y desarrolladores"
          ],
          "correctIndex": 0,
          "explain": "El testing ágil incorpora XP y enfatiza el paradigma de diseño de \"prueba primero\", tratando el desarrollo como cliente de las pruebas."
        },
        {
          "id": "mc2-7-3",
          "q": "Según la tabla, ¿qué describe al rol de \"Interesado\" en el testing ágil?",
          "options": [
            "Persona experta que arma el sistema en iteraciones cortas",
            "Persona del equipo que desempeña varios roles de testing",
            "Quien automatiza las pruebas de regresión del producto",
            "Quien se apoya en un analista para proponer una solución"
          ],
          "correctIndex": 3,
          "explain": "El interesado se apoya en un analista para proponer solución a un problema y elabora el discurso de los requisitos que encamina esa solución."
        },
        {
          "id": "mc2-7-4",
          "q": "¿Cuál de estos NO figura entre los tipos (opciones) de prueba listados?",
          "options": [
            "De recuperación frente a fallas inesperadas del sistema",
            "De resistencia o stress del sistema bajo carga muy alta",
            "De compatibilidad entre distintos navegadores",
            "De rendimiento del sistema completo en operación real"
          ],
          "correctIndex": 2,
          "explain": "Los tipos listados son recuperación, seguridad, resistencia/stress, rendimiento, aceptación y regresión. La de compatibilidad no aparece en el apunte."
        },
        {
          "id": "mc2-7-5",
          "q": "¿Cuándo se diseñan las pruebas del sistema en un enfoque ágil?",
          "options": [
            "Después de codificar por completo el sistema entero",
            "Conjuntamente mientras se lleva a cabo el análisis",
            "Solo cuando el cliente aprueba la versión final entregada",
            "Únicamente en una fase de pruebas separada del desarrollo"
          ],
          "correctIndex": 1,
          "explain": "En ágil las pruebas las obtiene el equipo de desarrollo: mientras hacen el análisis, conjuntamente van diseñando las pruebas del sistema."
        }
      ],
      "ms": [
        {
          "id": "ms2-7-1",
          "q": "¿Cuáles son fases de prueba descritas en la tabla del apunte?",
          "options": [
            "De unidad",
            "De integración",
            "De sistema",
            "De regresión",
            "De recuperación"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las fases son unidad, integración y sistema. Regresión y recuperación son TIPOS de prueba, no fases: van en otra lista."
        },
        {
          "id": "ms2-7-2",
          "q": "¿Cuáles afirmaciones sobre el probador ágil y los roles son correctas?",
          "options": [
            "El probador ágil integra las necesidades del interesado al equipo",
            "Transforma las historias de usuario en parámetros de prueba",
            "El tester puede desempeñar varios roles en el proyecto",
            "El equipo ágil trabaja en ciclos llamados iteraciones",
            "El probador ágil trabaja aislado del resto del equipo"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son del apunte. La última es falsa: el tester sobresale justamente por colaborar con todos los integrantes del equipo."
        },
        {
          "id": "ms2-7-3",
          "q": "¿Cuáles de estos elementos debería contemplar una estrategia de prueba según el apunte?",
          "options": [
            "Las fases de prueba a seguir",
            "Las clases de prueba en cada fase",
            "Las técnicas y herramientas de pruebas",
            "Los criterios de satisfacción y finalización",
            "El presupuesto exacto asignado a cada tester"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "La estrategia incluye fases, clases por fase, técnicas, herramientas y criterios de satisfacción/finalización. El presupuesto por tester no se menciona."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-7-1",
        "front": "¿Qué define una estrategia de prueba?",
        "back": "El enfoque y los objetivos generales; incluye fases, clases de prueba por fase, técnicas, herramientas y criterios de satisfacción y finalización."
      },
      {
        "id": "fc2-7-2",
        "front": "Prueba de unidad",
        "back": "Prueba un módulo o componente; generalmente la realiza quien lo construyó."
      },
      {
        "id": "fc2-7-3",
        "front": "Prueba de integración",
        "back": "Prueba las respuestas de grupos de módulos interconectados y detecta fallos en la interacción entre componentes."
      },
      {
        "id": "fc2-7-4",
        "front": "Prueba de sistema",
        "back": "Prueba el sistema completo en un ambiente similar al real, considerando que puede ser parte de un sistema mayor."
      },
      {
        "id": "fc2-7-5",
        "front": "Tipos (opciones) de prueba",
        "back": "De recuperación, de seguridad, de resistencia o stress, de rendimiento, de aceptación y de regresión."
      },
      {
        "id": "fc2-7-6",
        "front": "Testing ágil",
        "back": "Práctica de prueba con metodologías ágiles; incorpora XP, trata el desarrollo como cliente de las pruebas y enfatiza el diseño de prueba primero (ISTQB)."
      },
      {
        "id": "fc2-7-7",
        "front": "Probador ágil",
        "back": "Además de habilidades técnicas, integra las necesidades del interesado al equipo y transforma historias de usuario en parámetros de prueba; colabora con todos."
      },
      {
        "id": "fc2-7-8",
        "front": "Factor de éxito del testing ágil",
        "back": "Saber automatizar las pruebas de regresión (aseguran calidad en todo el comportamiento) y también automatizar las de aceptación."
      }
    ]
  },
  "8": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-8-1",
          "q": "El diagrama de secuencia muestra la interacción entre los objetos desde un punto de vista temporal.",
          "a": true,
          "explain": "Sí: describe cómo colaboran un grupo de objetos en el tiempo, generalmente atrapando el comportamiento de un caso de uso."
        },
        {
          "id": "tf2-8-2",
          "q": "El modelo de análisis se empieza a desarrollar antes de aprobar el modelo de requerimientos.",
          "a": false,
          "explain": "No: el modelo de análisis arranca una vez preparado y APROBADO el modelo de requerimientos."
        },
        {
          "id": "tf2-8-3",
          "q": "Los objetos de entidad modelan información que sobrevive a los casos de uso.",
          "a": true,
          "explain": "Tal cual: las entidades modelan la información que el sistema maneja a lo largo del tiempo, información que sobrevive a los casos de uso."
        },
        {
          "id": "tf2-8-4",
          "q": "Los objetos de interfaz son difíciles de identificar y no surgen de la descripción del caso de uso.",
          "a": false,
          "explain": "Al revés: se identifican fácilmente por la descripción del caso de uso, ya que ahí aparece la interacción del actor con el sistema."
        },
        {
          "id": "tf2-8-5",
          "q": "El modelo de análisis estructura el sistema dependiendo del ambiente de implementación actual.",
          "a": false,
          "explain": "No: el modelo es INDEPENDIENTE del ambiente de implementación; se enfoca en la estructura lógica del sistema."
        }
      ],
      "mc": [
        {
          "id": "mc2-8-1",
          "q": "¿Qué suele atrapar un diagrama de secuencia?",
          "options": [
            "El comportamiento descripto por un caso de uso particular",
            "La estructura estática de todas las clases del sistema",
            "El diseño físico de la base de datos relacional del sistema",
            "La distribución de los módulos sobre el hardware real disponible"
          ],
          "correctIndex": 0,
          "explain": "Generalmente atrapa el comportamiento descripto por un caso de uso, representando la secuencia de mensajes entre emisor y receptor."
        },
        {
          "id": "mc2-8-2",
          "q": "¿Cuándo se empieza a desarrollar el modelo de análisis?",
          "options": [
            "Después de terminar todo el código del sistema final",
            "Durante la ejecución de las pruebas de aceptación con el usuario",
            "Una vez preparado y aprobado el modelo de requerimientos",
            "Al mismo tiempo que se eligen las herramientas y técnicas de prueba"
          ],
          "correctIndex": 2,
          "explain": "El apunte lo dice claro: arranca una vez preparado y aprobado el modelo de requerimientos."
        },
        {
          "id": "mc2-8-3",
          "q": "¿Qué función cumplen los objetos de interfaz?",
          "options": [
            "Modelar información que sobrevive a los casos de uso",
            "Permitir la comunicación entre los actores y el sistema",
            "Operar sobre varios objetos entidad y retornar resultados",
            "Estructurar el sistema de forma lógica e independiente"
          ],
          "correctIndex": 1,
          "explain": "Los objetos de interfaz permiten la comunicación entre los actores y el sistema (y viceversa), y se identifican por la descripción del caso de uso."
        },
        {
          "id": "mc2-8-4",
          "q": "¿Qué caracteriza a los objetos de control?",
          "options": [
            "Conectan al actor con el sistema en cada uno de los casos de uso",
            "Modelan la información que el sistema mantiene a lo largo del tiempo",
            "Se corresponden siempre con algún concepto claro del mundo real",
            "Modelan funcionalidad no asignada a otro objeto naturalmente"
          ],
          "correctIndex": 3,
          "explain": "Los de control modelan la funcionalidad que no es naturalmente de interfaz ni de entidad; operan sobre varios objetos entidad y devuelven el resultado a una interfaz."
        },
        {
          "id": "mc2-8-5",
          "q": "¿Con qué suelen corresponderse generalmente los objetos de entidad?",
          "options": [
            "Con conceptos del mundo real, aunque no siempre",
            "Con la comunicación entre el actor y el sistema",
            "Con operaciones sobre múltiples objetos de control",
            "Con el ambiente de implementación actual elegido"
          ],
          "correctIndex": 0,
          "explain": "El apunte dice que las entidades generalmente se corresponden con conceptos del mundo real, aunque no siempre sucede."
        }
      ],
      "ms": [
        {
          "id": "ms2-8-1",
          "q": "¿Cuáles son los tres tipos de objetos usados en esta etapa de análisis?",
          "options": [
            "Objetos de interfaz",
            "Objetos de entidad",
            "Objetos de control",
            "Objetos de persistencia",
            "Objetos de despliegue"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Los tres tipos son interfaz, entidad y control. Persistencia y despliegue no figuran en el apunte: son distractores."
        },
        {
          "id": "ms2-8-2",
          "q": "¿Cuáles afirmaciones sobre el diagrama de secuencia son correctas según el apunte?",
          "options": [
            "Muestra la interacción entre objetos desde un punto temporal",
            "Describe cómo colaboran objetos para realizar una actividad",
            "Representa la secuencia de mensajes con emisor y receptor",
            "Atrapa el comportamiento de un caso de uso en particular",
            "Define el costo de implementar cada caso de uso"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras describen el diagrama de secuencia. El costo de implementación no tiene nada que ver: es inventado."
        },
        {
          "id": "ms2-8-3",
          "q": "¿Cuáles de estas afirmaciones aparecen literalmente sobre los objetos de control en esta sección?",
          "options": [
            "Permiten la comunicación directa entre actores y el sistema",
            "Sobreviven a los casos de uso como información persistente",
            "Se identifican fácilmente leyendo la descripción del caso de uso",
            "Se corresponden siempre con conceptos claros del mundo real",
            "Reemplazan a los objetos de interfaz en la etapa de análisis"
          ],
          "correctIndexes": [],
          "explain": "Ninguna corresponde a los objetos de control: esas frases describen interfaz o entidad, o son inventos. Los de control modelan funcionalidad y operan sobre entidades. MS sin correctas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-8-1",
        "front": "Diagrama de secuencia",
        "back": "Muestra la interacción entre objetos desde un punto de vista temporal; describe cómo colaboran para realizar una actividad y suele atrapar un caso de uso."
      },
      {
        "id": "fc2-8-2",
        "front": "¿Qué representa la secuencia de mensajes en este diagrama?",
        "back": "La secuencia de mensajes, incluyendo objeto emisor y receptor, para realizar una tarea."
      },
      {
        "id": "fc2-8-3",
        "front": "¿Cuándo arranca el modelo de análisis?",
        "back": "Una vez preparado y aprobado el modelo de requerimientos."
      },
      {
        "id": "fc2-8-4",
        "front": "¿Cómo estructura el sistema el modelo de análisis?",
        "back": "De forma independiente del ambiente de implementación actual, enfocándose en su estructura lógica."
      },
      {
        "id": "fc2-8-5",
        "front": "Objetos de interfaz",
        "back": "Permiten la comunicación entre los actores y el sistema (y viceversa); se identifican fácilmente por la descripción del caso de uso."
      },
      {
        "id": "fc2-8-6",
        "front": "Objetos de entidad",
        "back": "Modelan la información que el sistema maneja a lo largo del tiempo (sobrevive a los casos de uso); suelen corresponderse con conceptos del mundo real."
      },
      {
        "id": "fc2-8-7",
        "front": "Objetos de control",
        "back": "Modelan funcionalidad no asignada naturalmente a otro objeto; operan sobre varios objetos entidad y retornan el resultado a un objeto de interfaz."
      },
      {
        "id": "fc2-8-8",
        "front": "Tres tipos de objetos del modelo de análisis",
        "back": "Objetos de interfaz, objetos de entidad y objetos de control."
      }
    ]
  },
  "9": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-9-1",
          "q": "La línea de vida de un objeto es una línea vertical punteada hacia abajo que representa su existencia en el tiempo.",
          "a": true,
          "explain": "Tal cual: cada objeto lleva su línea vertical por debajo, llamada línea de vida, que muestra su existencia a lo largo del tiempo."
        },
        {
          "id": "tf2-9-2",
          "q": "El orden temporal de los mensajes se determina por el color de cada flecha.",
          "a": false,
          "explain": "No es el color: el orden lo da la altura. Las flechas más altas se ejecutan antes que las que están más abajo."
        },
        {
          "id": "tf2-9-3",
          "q": "El período de actividad de un objeto se representa con un espacio rectangular sobre su línea de vida.",
          "a": true,
          "explain": "Correcto. El rectángulo sobre la línea de vida marca el tiempo en que el objeto está ejecutando una acción, o sea está activo."
        },
        {
          "id": "tf2-9-4",
          "q": "Una condición se escribe entre corchetes y el mensaje solo se ejecuta si esa condición es verdadera.",
          "a": true,
          "explain": "Sí. La condición va entre corchetes, por ejemplo [hay producto], y el mensaje solo corre si resulta verdadera."
        },
        {
          "id": "tf2-9-5",
          "q": "El símbolo * antepuesto a la condición indica que el mensaje se ejecuta una sola vez aunque la condición siga siendo verdadera.",
          "a": false,
          "explain": "Al revés: el * indica iteración, o sea que la acción se repite mientras la condición sea verdadera."
        }
      ],
      "mc": [
        {
          "id": "mc2-9-1",
          "q": "¿Cómo queda determinado el orden temporal en el cual ocurren los mensajes?",
          "options": [
            "Por el grosor de la flecha que conecta a los dos objetos",
            "Por cuán arriba está ubicada cada flecha",
            "Por el número de parámetros que incluye el nombre del mensaje",
            "Por la longitud horizontal del trazo dibujado para cada flecha"
          ],
          "correctIndex": 1,
          "explain": "El orden lo da la altura: las flechas más altas se ejecutan antes que las que están debajo. Por eso se leen de arriba hacia abajo."
        },
        {
          "id": "mc2-9-2",
          "q": "¿Qué representa un período de actividad en el diagrama de secuencia?",
          "options": [
            "El nombre del mensaje que el objeto recibe del emisor",
            "La condición coloquial que habilita un mensaje saliente",
            "El tiempo que tarda un objeto en ejecutar una acción",
            "La existencia del objeto a lo largo de toda la línea"
          ],
          "correctIndex": 2,
          "explain": "El período de actividad es el tiempo que el objeto tarda en ejecutar una acción, y se dibuja como un rectángulo sobre su línea de vida."
        },
        {
          "id": "mc2-9-3",
          "q": "¿Cómo se representa la transmisión de mensajes recursivos?",
          "options": [
            "Mediante la duplicación de un rectángulo de actividad",
            "Mediante una flecha punteada que apunta hacia el actor externo",
            "Mediante un asterisco colocado delante del nombre del mensaje",
            "Mediante un corchete que lleva la palabra recursivo adentro"
          ],
          "correctIndex": 0,
          "explain": "La recursión se nota duplicando el rectángulo de actividad: el objeto aparece como si estuviera varias veces activado."
        },
        {
          "id": "mc2-9-4",
          "q": "Según la notación vista, ¿qué significa <code>*[condición] Mensaje</code>?",
          "options": [
            "Que el mensaje se envía únicamente al actor principal",
            "Que el mensaje retorna siempre un valor al objeto emisor",
            "Que el mensaje se ignora por completo si la condición es falsa",
            "Que la acción se repite mientras la condición valga"
          ],
          "correctIndex": 3,
          "explain": "El * indica iteración: el mensaje se repite mientras la condición sea verdadera. Sin el *, sería solo una condición simple."
        },
        {
          "id": "mc2-9-5",
          "q": "¿Qué información puede incluir el nombre de cada flecha de mensaje?",
          "options": [
            "Solamente el identificador único asignado al objeto receptor",
            "Parámetros, restricciones y valor de retorno",
            "Únicamente la altura relativa respecto de las demás flechas",
            "El color asignado al período de actividad del objeto emisor"
          ],
          "correctIndex": 1,
          "explain": "Cada flecha lleva el nombre del mensaje, que puede incluir parámetros, restricciones y valor de retorno."
        }
      ],
      "ms": [
        {
          "id": "ms2-9-1",
          "q": "¿Cuáles de los siguientes son elementos del diagrama de secuencia mencionados en el texto?",
          "options": [
            "La línea de vida vertical de cada objeto del diagrama",
            "El período de actividad sobre la línea de vida",
            "La numeración obligatoria de cada uno de los mensajes",
            "Los mensajes representados como flechas del emisor",
            "La tabla de costos asociada a cada objeto entidad"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Línea de vida, período de actividad y mensajes como flechas sí aparecen. La numeración obligatoria es del diagrama de colaboración, y la tabla de costos no existe en el texto."
        },
        {
          "id": "ms2-9-2",
          "q": "Sobre la condición y la iteración, ¿cuáles afirmaciones son correctas?",
          "options": [
            "La condición puede escribirse en lenguaje coloquial",
            "La condición va siempre después del nombre del mensaje",
            "La iteración se nota con el símbolo * antes de la condición",
            "El mensaje con condición corre solo si esta es verdadera",
            "La iteración elimina la línea de vida del objeto receptor"
          ],
          "correctIndexes": [
            0,
            2,
            3
          ],
          "explain": "La condición se escribe coloquial entre corchetes adelante (no después) del mensaje y corre solo si es verdadera; la iteración usa el *. La condición va delante, no detrás, y la iteración no borra ninguna línea de vida."
        },
        {
          "id": "ms2-9-3",
          "q": "¿Cuáles de estas afirmaciones sobre el diagrama de secuencia son incorrectas?",
          "options": [
            "La flecha más alta se ejecuta antes que la más baja",
            "El rectángulo marca el tiempo de actividad del objeto",
            "El mensaje recursivo se nota duplicando el rectángulo",
            "La condición habilita el mensaje cuando es verdadera",
            "Cada flecha puede incluir parámetros y valor de retorno"
          ],
          "correctIndexes": [],
          "explain": "Ojo con esta: todas las afirmaciones listadas son verdaderas según el texto, así que ninguna es incorrecta. La respuesta correcta es no marcar nada."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-9-1",
        "front": "Línea de vida",
        "back": "Línea vertical punteada por debajo de cada objeto que representa su existencia a lo largo del tiempo."
      },
      {
        "id": "fc2-9-2",
        "front": "¿Qué da el orden temporal de los mensajes?",
        "back": "La altura de las flechas: las más altas se ejecutan antes que las que están más abajo."
      },
      {
        "id": "fc2-9-3",
        "front": "¿Qué puede llevar el nombre de un mensaje?",
        "back": "Puede incluir parámetros, restricciones y el valor de retorno."
      },
      {
        "id": "fc2-9-4",
        "front": "Período de actividad",
        "back": "Tiempo que tarda un objeto en ejecutar una acción; se representa con un rectángulo sobre su línea de vida."
      },
      {
        "id": "fc2-9-5",
        "front": "Mensaje recursivo",
        "back": "Mensaje que un objeto se manda a sí mismo; se nota duplicando el rectángulo de actividad."
      },
      {
        "id": "fc2-9-6",
        "front": "Condición en un mensaje",
        "back": "Se escribe entre corchetes (ej. [hay producto]); el mensaje solo se ejecuta si la condición es verdadera."
      },
      {
        "id": "fc2-9-7",
        "front": "Notación de iteración",
        "back": "El símbolo * antes de la condición: <code>*[condición] Mensaje</code>, indica repetir mientras la condición sea verdadera."
      },
      {
        "id": "fc2-9-8",
        "front": "Ejemplo completo de Conallen (1999)",
        "back": "Diagrama de secuencia de un checkout de tienda online que combina actores, interfaces, control, entidades, mensajes ordenados, actividad e iteración."
      }
    ]
  },
  "10": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-10-1",
          "q": "El diagrama de colaboración muestra la misma información que el diagrama de secuencia.",
          "a": true,
          "explain": "Exacto. Cuentan la misma historia: la diferencia entre ambos es solo gráfica, no de contenido."
        },
        {
          "id": "tf2-10-2",
          "q": "En el diagrama de colaboración no hace falta numerar los mensajes porque el orden lo da la altura.",
          "a": false,
          "explain": "Justamente al revés: como los objetos van únicos con links, hay que numerar los mensajes para indicar la secuencia de ejecución."
        },
        {
          "id": "tf2-10-3",
          "q": "La condición y la iteración se denotan de igual manera en el diagrama de colaboración que en el de secuencia.",
          "a": true,
          "explain": "Sí. La selección (condición) y la iteración se notan igual en ambos diagramas."
        },
        {
          "id": "tf2-10-4",
          "q": "Los diagramas de secuencia y de colaboración se agrupan bajo el nombre de diagramas de interacción.",
          "a": true,
          "explain": "Correcto. Los dos tipos de diagramas de interacción que existen son el de secuencia y el de colaboración."
        },
        {
          "id": "tf2-10-5",
          "q": "El diagrama de colaboración enfatiza el tiempo mediante la altura de las flechas.",
          "a": false,
          "explain": "Eso es la secuencia. La colaboración enfatiza la estructura con links entre objetos; el tiempo por altura es del diagrama de secuencia."
        }
      ],
      "mc": [
        {
          "id": "mc2-10-1",
          "q": "¿Cuál es la diferencia principal entre el diagrama de colaboración y el de secuencia?",
          "options": [
            "La cantidad total de objetos que cada uno admite",
            "El tipo de actor que puede iniciar la interacción",
            "Es una diferencia gráfica, no de la información",
            "El lenguaje de programación con el que se implementan"
          ],
          "correctIndex": 2,
          "explain": "Muestran la misma información; lo que cambia es la forma gráfica de representarla, no el contenido."
        },
        {
          "id": "mc2-10-2",
          "q": "En el diagrama de colaboración, ¿cómo se indica la secuencia de ejecución de los mensajes?",
          "options": [
            "Numerando los mensajes que van sobre los links",
            "Ubicando las flechas más arriba en el dibujo",
            "Coloreando de distinto modo cada objeto activo",
            "Duplicando el rectángulo de cada objeto emisor"
          ],
          "correctIndex": 0,
          "explain": "Como los objetos van únicos conectados por links, la secuencia se indica numerando los mensajes (1, 2, 3...)."
        },
        {
          "id": "mc2-10-3",
          "q": "¿Cómo se representan los objetos en un diagrama de colaboración?",
          "options": [
            "Con líneas de vida verticales punteadas hacia abajo",
            "Como objetos únicos conectados por links",
            "Repetidos una vez en cada nivel temporal del proceso",
            "Agrupados todos dentro de un único rectángulo central"
          ],
          "correctIndex": 1,
          "explain": "Los objetos se representan únicos y se conectan con links, y sobre esos links van los mensajes."
        },
        {
          "id": "mc2-10-4",
          "q": "¿Quién decide cuál de los dos diagramas de interacción se emplea?",
          "options": [
            "El estándar UML lo fija de forma obligatoria",
            "La cantidad de objetos define el formato a usar",
            "El usuario elige cuál de los dos desea utilizar",
            "El tipo de actor determina el diagrama válido"
          ],
          "correctIndex": 2,
          "explain": "El usuario elige cuál usar: ambos describen lo mismo desde ángulos distintos."
        }
      ],
      "ms": [
        {
          "id": "ms2-10-1",
          "q": "¿Cuáles afirmaciones sobre el diagrama de colaboración son correctas?",
          "options": [
            "Muestra la misma información que el de secuencia",
            "Requiere numerar los mensajes para dar la secuencia",
            "Representa los objetos como únicos unidos por links",
            "Denota la iteración distinto que el de secuencia",
            "Elimina por completo la noción de condición coloquial"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Misma info, mensajes numerados y objetos únicos con links: todo correcto. La iteración se nota igual que en secuencia, y la condición no desaparece."
        },
        {
          "id": "ms2-10-2",
          "q": "Sobre los diagramas de interacción, ¿cuáles enunciados son verdaderos?",
          "options": [
            "Son los diagramas de secuencia y de colaboración",
            "La secuencia enfatiza el tiempo por altura de flechas",
            "La colaboración enfatiza la estructura con links",
            "Solo existe el de secuencia como tipo válido",
            "El usuario elige cuál de los dos prefiere emplear"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Existen dos tipos (secuencia y colaboración), uno enfatiza tiempo, el otro estructura, y el usuario elige. Lo falso es decir que solo existe el de secuencia."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-10-1",
        "front": "Diagrama de colaboración vs. secuencia",
        "back": "Muestran la misma información; la diferencia es solo gráfica."
      },
      {
        "id": "fc2-10-2",
        "front": "¿Cómo se indica la secuencia en colaboración?",
        "back": "Numerando los mensajes (1, 2, 3...) que van sobre los links, ya que los objetos van únicos."
      },
      {
        "id": "fc2-10-3",
        "front": "Representación de objetos en colaboración",
        "back": "Objetos únicos conectados entre sí por links, con los mensajes sobre esos links."
      },
      {
        "id": "fc2-10-4",
        "front": "Condición e iteración en colaboración",
        "back": "Se denotan de igual manera que en el diagrama de secuencia."
      },
      {
        "id": "fc2-10-5",
        "front": "Diagramas de interacción",
        "back": "Conjunto formado por los diagramas de secuencia y de colaboración; el usuario elige cuál usar."
      },
      {
        "id": "fc2-10-6",
        "front": "¿Qué enfatiza cada diagrama de interacción?",
        "back": "Secuencia enfatiza el tiempo (altura de flechas); colaboración enfatiza la estructura (links entre objetos)."
      },
      {
        "id": "fc2-10-7",
        "front": "¿Quién elige el diagrama de interacción?",
        "back": "El usuario, según le convenga, porque ambos describen lo mismo desde ángulos distintos."
      }
    ]
  },
  "11": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-11-1",
          "q": "Un sistema es un conjunto de elementos que se relacionan para alcanzar un fin.",
          "a": true,
          "explain": "Esa es la definición amplia de sistema: cosas relacionadas que apuntan a un mismo objetivo."
        },
        {
          "id": "tf2-11-2",
          "q": "Según Schach, un sistema de información solo recopila datos pero no genera reportes.",
          "a": false,
          "explain": "No: además de recopilar, también manipula, almacena y crea reportes de información de las actividades de negocio."
        },
        {
          "id": "tf2-11-3",
          "q": "Un sistema de información tiene como fin ayudar a la administración de una empresa en el manejo de sus operaciones de negocios.",
          "a": true,
          "explain": "Tal cual lo define Schach: logra un resultado empresarial para ayudar a manejar las operaciones del negocio."
        },
        {
          "id": "tf2-11-4",
          "q": "El apunte sostiene que existe una única clasificación posible de sistemas.",
          "a": false,
          "explain": "Falso: dice que hay diversas clasificaciones, pero se enfoca en tres tipos puntuales."
        },
        {
          "id": "tf2-11-5",
          "q": "Los sistemas de tiempo real, distribuidos y embebidos son los tres tipos en los que se enfoca el apunte.",
          "a": true,
          "explain": "Exacto, esos son los tres tipos elegidos entre todas las clasificaciones posibles."
        }
      ],
      "mc": [
        {
          "id": "mc2-11-1",
          "q": "¿Cuál es la definición de sistema según el apunte?",
          "options": [
            "Un programa que genera reportes para el negocio",
            "Un conjunto de elementos relacionados para un fin",
            "Una plataforma que da soporte a todos los procesos",
            "Un dispositivo que responde dentro de un plazo dado"
          ],
          "correctIndex": 1,
          "explain": "La definición amplia es la de un conjunto de elementos que se relacionan para alcanzar un fin."
        },
        {
          "id": "mc2-11-2",
          "q": "Según Schach, ¿qué logra un sistema de información?",
          "options": [
            "Un resultado empresarial para la organización",
            "Una respuesta dentro de un plazo muy ajustado",
            "Una conexión directa con sensores externos",
            "Una planificación temporal de cada tarea"
          ],
          "correctIndex": 0,
          "explain": "Schach define que un sistema de información es aquel que logra un resultado empresarial."
        },
        {
          "id": "mc2-11-3",
          "q": "¿Cuáles son las cuatro acciones que realiza un sistema de información según Schach?",
          "options": [
            "Programa, mide, planifica y luego ejecuta tareas",
            "Acopla, interrumpe, sincroniza y comunica procesos",
            "Detecta, controla, ajusta y retroalimenta señales",
            "Recopila, manipula, almacena y crea reportes"
          ],
          "correctIndex": 3,
          "explain": "Según Schach, recopila, manipula, almacena y crea reportes de información de las actividades de negocio."
        },
        {
          "id": "mc2-11-4",
          "q": "¿En qué tres tipos de sistemas se enfoca el apunte?",
          "options": [
            "De tiempo real, distribuidos y embebidos",
            "De tiempo real, batch y transaccionales locales",
            "Distribuidos, embebidos y de escritorio remoto",
            "Embebidos, transaccionales y alojados en la nube"
          ],
          "correctIndex": 0,
          "explain": "El apunte se concentra en sistemas de tiempo real, distribuidos y embebidos."
        }
      ],
      "ms": [
        {
          "id": "ms2-11-1",
          "q": "¿Cuáles de las siguientes acciones forman parte de la definición de sistema de información de Schach?",
          "options": [
            "Recopilar información de las actividades de negocio",
            "Manipular la información de la empresa",
            "Almacenar la información que procesa",
            "Crear reportes de información de negocio",
            "Medir el tiempo de cómputo de cada tarea"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Recopilar, manipular, almacenar y crear reportes están en la definición de Schach. Medir el tiempo de cómputo es propio del diseño de sistemas de tiempo real, no de esta definición."
        },
        {
          "id": "ms2-11-2",
          "q": "¿Cuáles de estos son tipos de sistemas en los que el apunte se enfoca?",
          "options": [
            "Sistemas de tiempo real",
            "Sistemas distribuidos",
            "Sistemas embebidos",
            "Sistemas transaccionales",
            "Sistemas batch"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "El apunte se enfoca en tiempo real, distribuidos y embebidos. Transaccionales y batch no figuran entre los tres elegidos."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-11-1",
        "front": "Definición de sistema",
        "back": "Conjunto de elementos que se relacionan para alcanzar un fin."
      },
      {
        "id": "fc2-11-2",
        "front": "Sistema de información (Schach)",
        "back": "Sistema que logra un resultado empresarial: recopila, manipula, almacena y crea reportes de información de las actividades de negocio."
      },
      {
        "id": "fc2-11-3",
        "front": "¿Para qué sirve un sistema de información?",
        "back": "Para ayudar a la administración de la empresa en el manejo de sus operaciones de negocios."
      },
      {
        "id": "fc2-11-4",
        "front": "Cuatro acciones de un sistema de información",
        "back": "Recopila, manipula, almacena y crea reportes de información."
      },
      {
        "id": "fc2-11-5",
        "front": "Tipos de sistemas del apunte",
        "back": "Sistemas de tiempo real, distribuidos y embebidos."
      },
      {
        "id": "fc2-11-6",
        "front": "¿Hay una sola clasificación de sistemas?",
        "back": "No, existen diversas clasificaciones; el apunte se enfoca en tres tipos puntuales."
      }
    ]
  },
  "12": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-12-1",
          "q": "En un sistema de tiempo real, la eficiencia depende solo de la exactitud del resultado y no del momento de entrega.",
          "a": false,
          "explain": "Falso: la eficiencia no se basa solo en la exactitud, sino también en el momento en que entrega los resultados."
        },
        {
          "id": "tf2-12-2",
          "q": "La predictibilidad es una característica principal de los sistemas de tiempo real.",
          "a": true,
          "explain": "Sí, la predictibilidad es una de sus características principales: tiene que responder a tiempo de forma previsible."
        },
        {
          "id": "tf2-12-3",
          "q": "El intervalo de tiempo entre la entrada y la salida en un sistema de tiempo real suele ser muy pequeño.",
          "a": true,
          "explain": "Correcto. Esa ventana chiquita entre entrada y salida es una característica típica de estos sistemas."
        },
        {
          "id": "tf2-12-4",
          "q": "En un sistema operativo de tiempo real lo más importante es el usuario y no los procesos.",
          "a": false,
          "explain": "Al revés: en los SOTR no tiene importancia el usuario, sino los procesos."
        },
        {
          "id": "tf2-12-5",
          "q": "Un sistema de tiempo real suele ser más simple de lo que se cree.",
          "a": false,
          "explain": "No: suele ser más complejo de lo que se cree, porque hay que tener presentes todas las interacciones entre componentes."
        }
      ],
      "mc": [
        {
          "id": "mc2-12-1",
          "q": "¿En qué se basa la eficiencia de un sistema de tiempo real?",
          "options": [
            "Solo en la exactitud de los resultados del cómputo realizado",
            "En la cantidad de sensores que están conectados al entorno",
            "En la exactitud y el momento en que entrega",
            "En la simplicidad de las interacciones internas del sistema"
          ],
          "correctIndex": 2,
          "explain": "Se basa tanto en la exactitud de los resultados como en el momento en que los entrega: tiene que llegar a tiempo."
        },
        {
          "id": "mc2-12-2",
          "q": "¿Cuál es una característica principal de los sistemas de tiempo real?",
          "options": [
            "La portabilidad entre distintos lenguajes",
            "La predictibilidad de su comportamiento",
            "La independencia respecto del hardware",
            "La centralidad del usuario final humano"
          ],
          "correctIndex": 1,
          "explain": "La predictibilidad es la característica principal: además de ser correcto, el resultado tiene que llegar a tiempo de forma previsible."
        },
        {
          "id": "mc2-12-3",
          "q": "¿Cuál es la primera fase del diseño de un sistema de tiempo real?",
          "options": [
            "Codificar los programas que se encargan de ejecutar las tareas",
            "Medir el tiempo de cómputo que consume cada una de las tareas",
            "Identificar las tareas y sus restricciones",
            "Realizar un análisis completo y detallado de la planificación"
          ],
          "correctIndex": 2,
          "explain": "Primero identificás todas las tareas a realizar y sus restricciones temporales; después codificás y al final medís y planificás."
        },
        {
          "id": "mc2-12-4",
          "q": "Según el texto, ¿qué se afirma sobre los sistemas operativos de tiempo real (SOTR)?",
          "options": [
            "Son la plataforma para establecer un STR",
            "Eliminan por completo la necesidad de manejar interrupciones",
            "Se enfocan ante todo en la comodidad del usuario humano",
            "Solo corren sobre hardware de propósito general estándar"
          ],
          "correctIndex": 0,
          "explain": "Los SOTR son la plataforma para establecer un sistema de tiempo real; en ellos importan los procesos, no el usuario."
        },
        {
          "id": "mc2-12-5",
          "q": "¿Cuál de los siguientes es un ejemplo de sistema operativo de tiempo real mencionado?",
          "options": [
            "Windows, macOS, Android e iOS móvil",
            "VxWorks, Solaris, Lynx OS y Spectra",
            "Oracle, MySQL, Postgres y MongoDB",
            "Apache, Nginx, Tomcat y Node server"
          ],
          "correctIndex": 1,
          "explain": "Los ejemplos de SOTR que da el texto son VxWorks, Solaris, Lynx OS y Spectra."
        }
      ],
      "ms": [
        {
          "id": "ms2-12-1",
          "q": "¿Cuáles son fases del diseño de un sistema de tiempo real?",
          "options": [
            "Identificar las tareas y sus restricciones temporales",
            "Codificar los programas que ejecutarán las tareas",
            "Medir el tiempo de cómputo y analizar la planificación",
            "Eliminar el acoplamiento con el mundo externo",
            "Sustituir los sensores por procesos de usuario"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres fases son identificar tareas y restricciones, codificar los programas y medir el tiempo de cómputo con análisis de planificación. Las otras dos no figuran."
        },
        {
          "id": "ms2-12-2",
          "q": "¿Cuáles de los siguientes son elementos que componen un sistema de tiempo real (STR)?",
          "options": [
            "Manejo de interrupciones",
            "Bases de datos de tiempo real",
            "Sistemas operativos de tiempo real",
            "Lenguajes de tiempo real",
            "Sincronización y comunicación de tareas"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Todos los listados son elementos del STR según el texto: integración y rendimiento, interrupciones, bases de datos, SOTR, lenguajes y sincronización/comunicación de tareas."
        },
        {
          "id": "ms2-12-3",
          "q": "¿Cuáles de estas afirmaciones sobre los sistemas de tiempo real son falsas según el texto?",
          "options": [
            "Se acoplan al mundo externo del problema que resuelven",
            "Operan siempre en condiciones de rendimiento muy rigurosas",
            "Su uso más habitual fue el control de distintos entornos",
            "La predictibilidad no es una característica",
            "Se ven afectados por el hardware, el software y el diseño"
          ],
          "correctIndexes": [
            3
          ],
          "explain": "La única falsa es decir que la predictibilidad no es una característica: justamente es la principal. Las demás son verdaderas según el texto."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-12-1",
        "front": "Sistema de tiempo real",
        "back": "Sistema informático que interactúa con el entorno y debe responder en el tiempo dictado por el problema."
      },
      {
        "id": "fc2-12-2",
        "front": "¿En qué se basa su eficiencia?",
        "back": "No solo en la exactitud de los resultados, sino también en el momento en que los entrega."
      },
      {
        "id": "fc2-12-3",
        "front": "Característica principal del STR",
        "back": "La predictibilidad de su comportamiento temporal."
      },
      {
        "id": "fc2-12-4",
        "front": "Fases del diseño de un STR",
        "back": "Identificar tareas y restricciones temporales, codificar los programas, y medir el tiempo de cómputo con análisis de planificación."
      },
      {
        "id": "fc2-12-5",
        "front": "¿Por qué un STR es más complejo de lo que parece?",
        "back": "Hay que tener presentes todas las interacciones entre componentes, porque cualquier cambio puede generar alteraciones impensadas en los tiempos."
      },
      {
        "id": "fc2-12-6",
        "front": "Elementos que componen un STR",
        "back": "Integración y rendimiento, manejo de interrupciones, bases de datos y SO de tiempo real, lenguajes de tiempo real, y sincronización/comunicación de tareas."
      },
      {
        "id": "fc2-12-7",
        "front": "Sistema operativo de tiempo real (SOTR)",
        "back": "Plataforma para establecer un STR donde no importa el usuario sino los procesos. Ejemplos: VxWorks, Solaris, Lynx OS, Spectra."
      },
      {
        "id": "fc2-12-8",
        "front": "Generalidades del STR",
        "back": "Se acopla al mundo externo, opera con rendimiento riguroso y se ve afectado por hardware, software, SO, requisitos y diseño."
      }
    ]
  },
  "13": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-13-1",
          "q": "En un sistema distribuido el procesamiento de información se reparte sobre varias computadoras en vez de estar confinado en una única máquina.",
          "a": true,
          "explain": "Tal cual lo define Sommerville: la info se distribuye entre varias máquinas. De eso se trata, no vive todo en una sola."
        },
        {
          "id": "tf2-13-2",
          "q": "En un sistema distribuido, el fallo de una de las computadoras de la red implica la caída del sistema completo.",
          "a": false,
          "explain": "Justo al revés: si se cae una máquina, el resto sigue andando, capaz con un servicio medio degradado, pero anda. Esa es la gracia."
        },
        {
          "id": "tf2-13-3",
          "q": "Los sistemas distribuidos suelen estar basados en sistemas abiertos que emplean protocolos estándares.",
          "a": true,
          "explain": "Sí, usan protocolos estándares y eso te deja combinar equipos y software de distintos proveedores."
        },
        {
          "id": "tf2-13-4",
          "q": "Aunque las computadoras estén separadas físicamente, en el diseño el sistema distribuido se evalúa como un sistema único.",
          "a": true,
          "explain": "Desde afuera lo ves como uno solo, aunque por dentro sean varias máquinas con su propio hardware y software conectadas por red."
        },
        {
          "id": "tf2-13-5",
          "q": "Según el texto, la escalabilidad de un sistema distribuido es total e independiente de la red que conecta las computadoras.",
          "a": false,
          "explain": "Suelen ser escalables, pero eso depende de las posibilidades de la red que las conecte. No es ilimitado ni independiente."
        }
      ],
      "mc": [
        {
          "id": "mc2-13-1",
          "q": "¿Qué afirma Sommerville respecto de los grandes sistemas informáticos actuales?",
          "options": [
            "Que la mayoría todavía corre en una única máquina central",
            "Que prácticamente todos son sistemas distribuidos",
            "Que se confinan en un solo servidor por seguridad",
            "Que dependen de un único procesador compartido"
          ],
          "correctIndex": 1,
          "explain": "La cita dice que hoy prácticamente todos los grandes sistemas informáticos son distribuidos. Las otras van en sentido contrario."
        },
        {
          "id": "mc2-13-2",
          "q": "¿Cuál es una ventaja de los sistemas distribuidos mencionada en el texto?",
          "options": [
            "Reducen a cero el costo de la red de comunicaciones",
            "Eliminan por completo la necesidad de mantenimiento",
            "Permiten compartir hardware y software de la red",
            "Garantizan que nunca habrá fallos en ninguna máquina"
          ],
          "correctIndex": 2,
          "explain": "Permiten compartir recursos como impresoras o discos entre las máquinas. Las otras prometen cosas que el texto no dice."
        },
        {
          "id": "mc2-13-3",
          "q": "¿Por qué la tolerancia a fallos suele ser mayor en un sistema distribuido?",
          "options": [
            "Porque el fallo de una computadora no tira toda la red",
            "Porque cada computadora tiene su propio servicio aislado",
            "Porque la red impide físicamente cualquier tipo de fallo",
            "Porque todas las máquinas usan el mismo proveedor único"
          ],
          "correctIndex": 0,
          "explain": "Que se caiga una no implica la caída de toda la red; el sistema sigue, capaz degradado. Por eso se banca mejor las caídas."
        },
        {
          "id": "mc2-13-4",
          "q": "¿Qué facilita el hecho de que los sistemas distribuidos estén basados en sistemas abiertos?",
          "options": [
            "Reducir el número total de computadoras conectadas a la red",
            "Combinar equipos y software de diferentes proveedores",
            "Confinar el procesamiento en una sola máquina central rápida",
            "Evitar por completo el uso de una red de comunicaciones"
          ],
          "correctIndex": 1,
          "explain": "Al usar protocolos estándares podés mezclar equipos y software de distintos fabricantes. Esa es la idea de sistema abierto."
        }
      ],
      "ms": [
        {
          "id": "ms2-13-1",
          "q": "¿Cuáles de las siguientes son ventajas de los sistemas distribuidos según el texto?",
          "options": [
            "Permiten compartir hardware y software de la red",
            "Están basados en sistemas abiertos con protocolos estándares",
            "Permiten ejecutar procesos concurrentes en una computadora",
            "Suelen ser escalables según las posibilidades de la red",
            "Garantizan una tolerancia a fallos total y absoluta en toda la red siempre"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro están listadas como ventajas. La última miente: la tolerancia es mayor, pero no total ni absoluta."
        },
        {
          "id": "ms2-13-2",
          "q": "¿Cuáles de estas afirmaciones describen correctamente un sistema distribuido?",
          "options": [
            "Cada computadora contiene su propio software y hardware",
            "Una red de comunicaciones conecta las máquinas separadas",
            "Se diseña como un sistema único con múltiples destinatarios",
            "El procesamiento vive confinado en una sola máquina central",
            "Solo funciona si todas las computadoras son del mismo proveedor"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son del texto. Lo de la máquina única es lo contrario, y lo del mismo proveedor lo inventan: justamente combinan proveedores."
        },
        {
          "id": "ms2-13-3",
          "q": "¿Cuáles de estas afirmaciones sobre sistemas distribuidos son FALSAS según el texto?",
          "options": [
            "El fallo de una máquina derriba todo el sistema completo",
            "Comparten recursos como impresoras o discos de la red",
            "Permiten ejecutar procesos concurrentes en una computadora",
            "La escalabilidad no depende en nada de la red de conexión",
            "Usan protocolos estándares propios de sistemas abiertos"
          ],
          "correctIndexes": [
            0,
            3
          ],
          "explain": "La 0 y la 3 son falsas: el fallo de una no tira todo, y la escalabilidad sí depende de la red. Las demás son ventajas reales del texto."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-13-1",
        "front": "¿Qué es un sistema distribuido?",
        "back": "Un sistema donde el procesamiento de información se reparte sobre varias computadoras conectadas por una red, en vez de estar confinado en una única máquina."
      },
      {
        "id": "fc2-13-2",
        "front": "¿Por qué tienen mayor tolerancia a fallos?",
        "back": "Porque el fallo de una computadora de la red no implica la caída de toda la red; el sistema sigue funcionando, aunque brinde un servicio un poco degradado."
      },
      {
        "id": "fc2-13-3",
        "front": "¿Qué significa que estén basados en sistemas abiertos?",
        "back": "Que emplean protocolos estándares, lo que facilita combinar equipos y software de diferentes proveedores."
      },
      {
        "id": "fc2-13-4",
        "front": "¿Cómo se evalúa un sistema distribuido en el diseño?",
        "back": "Como un sistema único, aunque sea una red con múltiples computadoras separadas físicamente y con múltiples destinatarios."
      },
      {
        "id": "fc2-13-5",
        "front": "¿De qué depende la escalabilidad de un sistema distribuido?",
        "back": "De las posibilidades de la red que conecta las computadoras; suelen ser escalables, pero esa capacidad de sumar recursos depende de la red."
      },
      {
        "id": "fc2-13-6",
        "front": "¿Qué recursos se pueden compartir en un sistema distribuido?",
        "back": "Hardware y software de las máquinas de la red, como impresoras o discos."
      },
      {
        "id": "fc2-13-7",
        "front": "¿Qué dice Sommerville sobre los grandes sistemas actuales?",
        "back": "Que en la actualidad prácticamente todos los grandes sistemas informáticos son sistemas distribuidos."
      }
    ]
  },
  "14": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-14-1",
          "q": "En los sistemas embebidos las funciones del software no suelen estar a la vista del usuario.",
          "a": true,
          "explain": "Sí, el software queda escondido adentro del aparato. Ni lo ves: está en el microondas o en el reloj del taxi."
        },
        {
          "id": "tf2-14-2",
          "q": "Los sistemas embebidos se diseñan para realizar una gran cantidad de funciones de propósito general.",
          "a": false,
          "explain": "Al revés: hacen una o algunas pocas funciones muy específicas, no son de propósito general."
        },
        {
          "id": "tf2-14-3",
          "q": "Los sistemas embebidos suelen funcionar como sistemas de tiempo real.",
          "a": true,
          "explain": "Generalmente operan dentro de un sistema de tiempo real. Esa es la pinta típica de un embebido."
        },
        {
          "id": "tf2-14-4",
          "q": "Ante el fallo de un elemento de un sistema embebido, alcanza con reemplazar solo ese elemento sin tocar la placa.",
          "a": false,
          "explain": "No: un fallo en un elemento implica reparar o reemplazar la placa íntegramente. Si se rompe algo, cambiás la placa entera."
        },
        {
          "id": "tf2-14-5",
          "q": "Los sistemas embebidos suelen fabricarse en forma masiva para reducir el costo de producción.",
          "a": true,
          "explain": "Sí, producción masiva justamente para abaratar el costo de fabricación."
        }
      ],
      "mc": [
        {
          "id": "mc2-14-1",
          "q": "¿En qué lenguaje suelen programarse los sistemas embebidos?",
          "options": [
            "En un lenguaje orientado a objetos de alto nivel",
            "En lenguaje ensamblador sobre el microprocesador",
            "En un lenguaje interpretado para desarrollo rápido",
            "En un lenguaje funcional con base matemática"
          ],
          "correctIndex": 1,
          "explain": "El texto dice que generalmente se programan en ensamblador sobre el microprocesador. Las otras suenan bien pero no son del texto."
        },
        {
          "id": "mc2-14-2",
          "q": "¿Qué característica tiene el hardware de un sistema embebido?",
          "options": [
            "Procesador y memoria relativamente pequeños",
            "Procesador potente con gran memoria de respaldo",
            "Múltiples procesadores en paralelo y redundantes",
            "Memoria expandible y almacenamiento masivo"
          ],
          "correctIndex": 0,
          "explain": "Usan un procesador chico y una memoria también chica. La idea es hardware reducido para bajar costos."
        },
        {
          "id": "mc2-14-3",
          "q": "¿Cuántas funciones suele realizar un sistema embebido?",
          "options": [
            "Una gran variedad de funciones cambiantes",
            "Todas las funciones de una computadora personal",
            "Una o algunas pocas funciones específicas",
            "Ninguna función fija, se reconfigura siempre"
          ],
          "correctIndex": 2,
          "explain": "Están diseñados para una o pocas funciones puntuales. No son polifuncionales como una PC."
        },
        {
          "id": "mc2-14-4",
          "q": "¿Por qué los controladores de un sistema embebido pueden ser más lentos que los de una PC?",
          "options": [
            "Porque corren siempre en tiempo real diferido",
            "Porque el ensamblador limita la velocidad del reloj",
            "Porque la placa base no admite procesadores rápidos",
            "Porque buscan reducir los costos de producción"
          ],
          "correctIndex": 3,
          "explain": "En busca de reducir costos, puede que los controladores sean más lentos que los de una PC. Es una decisión de plata, no técnica forzada."
        }
      ],
      "ms": [
        {
          "id": "ms2-14-1",
          "q": "¿Cuáles de las siguientes son características de los sistemas embebidos según el texto?",
          "options": [
            "Se fabrican en forma masiva para reducir costos",
            "Emplean un procesador y una memoria pequeños",
            "Un fallo en un elemento obliga a reemplazar la placa",
            "Sus controladores pueden ser más lentos que los de una PC",
            "Siempre son más rápidos que cualquier computadora personal"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son del texto. La última es mentira: los controladores pueden ser más lentos, no más rápidos."
        },
        {
          "id": "ms2-14-2",
          "q": "¿Cuáles de estos ejemplos o rasgos corresponden a sistemas embebidos según el texto?",
          "options": [
            "El reloj que utilizan los taxis",
            "El microondas de la cocina",
            "Componentes incluidos en una placa base",
            "Funciones de software a la vista del usuario",
            "Pueden no verse como computadoras"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Reloj de taxi, microondas, componentes en placa base y que no se ven como computadoras: todo del texto. Lo de estar a la vista del usuario es lo contrario."
        },
        {
          "id": "ms2-14-3",
          "q": "¿Cuáles de estas afirmaciones sobre sistemas embebidos son verdaderas?",
          "options": [
            "Sus funciones suelen estar bien a la vista del usuario",
            "Se diseñan para muchísimas funciones de propósito general",
            "Nunca operan dentro de un sistema de tiempo real",
            "Siempre usan el procesador más potente del mercado",
            "Requieren expandir la memoria de forma constante"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es verdadera: el software no se ve, hacen pocas funciones, suelen ser de tiempo real, usan procesador chico y memoria chica. Todas falsas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-14-1",
        "front": "¿Qué es un sistema embebido (o empotrado)?",
        "back": "Un sistema cuyo software no suele estar a la vista del usuario, diseñado para realizar una o algunas pocas funciones, generalmente dentro de un sistema de tiempo real."
      },
      {
        "id": "fc2-14-2",
        "front": "¿Dónde suelen estar los componentes de un sistema embebido?",
        "back": "Incluidos en una placa base, y pueden no verse como computadoras; por ejemplo, los relojes de los taxis o el microondas."
      },
      {
        "id": "fc2-14-3",
        "front": "¿En qué lenguaje suelen programarse los sistemas embebidos?",
        "back": "Generalmente en lenguaje ensamblador sobre el microprocesador."
      },
      {
        "id": "fc2-14-4",
        "front": "¿Por qué se fabrican en forma masiva?",
        "back": "Porque se busca reducir el coste en su producción."
      },
      {
        "id": "fc2-14-5",
        "front": "¿Qué pasa ante un fallo en un elemento de un sistema embebido?",
        "back": "Implica que debe repararse o reemplazarse la placa íntegramente."
      },
      {
        "id": "fc2-14-6",
        "front": "¿Cómo es el hardware típico de un sistema embebido?",
        "back": "Emplea un procesador relativamente pequeño y una memoria también pequeña."
      },
      {
        "id": "fc2-14-7",
        "front": "¿Por qué los controladores pueden ser más lentos que los de una PC?",
        "back": "Porque en busca de la reducción de costos puede que se usen controladores más lentos que los de las computadoras personales."
      }
    ]
  },
  "15": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-15-1",
          "q": "La reingeniería de software, según se la presenta, generalmente se realiza sin cambiar la funcionalidad ni la arquitectura del sistema.",
          "a": true,
          "explain": "Exacto: redocumentás, reestructurás, modernizás el lenguaje y ajustás datos, pero funcionalidad y arquitectura quedan iguales."
        },
        {
          "id": "tf2-15-2",
          "q": "Adaptar un sistema a un entorno cambiante hace que su estructura se vaya degradando en forma paulatina.",
          "a": true,
          "explain": "Sí, cada modificación le va comiendo la estructura. Por eso después se necesita reingeniería para ordenarla."
        },
        {
          "id": "tf2-15-3",
          "q": "Incorporar una nueva funcionalidad durante el mantenimiento es más barato que hacerlo durante el desarrollo.",
          "a": false,
          "explain": "Al revés: es mucho más caro meter funcionalidad con el sistema ya funcionando que durante el desarrollo original."
        },
        {
          "id": "tf2-15-4",
          "q": "El mantenimiento solo abarca corregir errores simples de una línea de código, no la incorporación de nuevos requerimientos.",
          "a": false,
          "explain": "El mantenimiento va desde un fix de una línea hasta corregir errores de diseño o incorporar requerimientos nuevos. Abarca todo eso."
        },
        {
          "id": "tf2-15-5",
          "q": "La reingeniería siempre tiene un costo mayor que desarrollar un sistema completamente nuevo.",
          "a": false,
          "explain": "No: aunque la reingeniería cuesta, siempre será menor que el costo de desarrollar un sistema completamente nuevo."
        }
      ],
      "mc": [
        {
          "id": "mc2-15-1",
          "q": "¿Cómo debe entenderse la reingeniería de software?",
          "options": [
            "Como rehacer el sistema entero partiendo desde cero",
            "Como un proceso que busca mejorar un software existente",
            "Como un cambio total de la arquitectura y la funcionalidad",
            "Como el reemplazo del sistema viejo por uno nuevo y mejor"
          ],
          "correctIndex": 1,
          "explain": "Es un proceso para mejorar lo que ya hay, sin tirarlo a la basura. Las otras describen rehacer todo, que es justo lo que evita."
        },
        {
          "id": "mc2-15-2",
          "q": "Según Sommerville, ¿qué puede implicar la reingeniería de software?",
          "options": [
            "Cambiar la arquitectura y duplicar la funcionalidad",
            "Reducir el sistema a un único módulo más simple",
            "Redocumentar y reestructurar el sistema existente",
            "Reemplazar todo el hardware sobre el que corre"
          ],
          "correctIndex": 2,
          "explain": "Redocumentar, reestructurar, traducir a un lenguaje más moderno y actualizar datos. Eso es lo que dice la cita de Sommerville."
        },
        {
          "id": "mc2-15-3",
          "q": "¿Por qué la reingeniería disminuye el riesgo frente a desarrollar de cero?",
          "options": [
            "Porque elimina todos los defectos del sistema original",
            "Porque no requiere ninguna inversión extra de la empresa",
            "Porque acelera la entrega del sistema a la mitad del tiempo",
            "Porque evita retrasos riesgosos en sistemas críticos"
          ],
          "correctIndex": 3,
          "explain": "En sistemas críticos un retraso del nuevo sistema puede causar daños severos; la reingeniería baja ese riesgo. Las otras prometen de más."
        },
        {
          "id": "mc2-15-4",
          "q": "¿Qué define al mantenimiento de software?",
          "options": [
            "Cambiar algo en el sistema luego de entregarlo",
            "Diseñar la arquitectura inicial antes de programar el sistema",
            "Documentar todos los requerimientos en la etapa de análisis",
            "Probar a fondo el sistema antes de su primera entrega"
          ],
          "correctIndex": 0,
          "explain": "Mantenimiento es cambiar algo en el sistema en forma posterior a haberlo entregado al cliente. Las otras son etapas previas a la entrega."
        }
      ],
      "ms": [
        {
          "id": "ms2-15-1",
          "q": "Según la cita de Sommerville, ¿qué puede implicar la reingeniería de software?",
          "options": [
            "Redocumentar el sistema",
            "Organizar y reestructurar el sistema",
            "Traducir el sistema a un lenguaje más moderno",
            "Modificar y actualizar la estructura de los datos",
            "Cambiar por completo la funcionalidad original del sistema entero"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro están en la cita. Cambiar la funcionalidad NO: justamente se hace sin tocar funcionalidad ni arquitectura."
        },
        {
          "id": "ms2-15-2",
          "q": "¿Cuáles son ventajas de la reingeniería frente a desarrollar un sistema nuevo?",
          "options": [
            "Disminuir el riesgo de desarrollar desde cero",
            "Menor costo que un sistema completamente nuevo",
            "Reducir el riesgo en sistemas críticos de la empresa",
            "Eliminar para siempre toda necesidad futura de mantenimiento",
            "Garantizar que jamás se introduzca ningún defecto nuevo en él"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Bajar riesgo, menor costo y reducir riesgo en sistemas críticos: todas del texto. Las dos últimas prometen cosas que el texto nunca dice."
        },
        {
          "id": "ms2-15-3",
          "q": "¿Cuáles de estas afirmaciones sobre evolución y mantenimiento son correctas?",
          "options": [
            "Los sistemas se modifican para seguir siendo útiles",
            "Cada adaptación degrada paulatinamente la estructura del sistema",
            "Mantener el sistema no requiere ninguna inversión de la organización",
            "Introducir cambios inevitablemente introduce defectos en el sistema",
            "Los costos de mantenimiento son altos con el sistema funcionando"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Cuatro son del texto. La falsa es la del medio: las organizaciones necesitan seguir invirtiendo para mantener o evolucionar el sistema."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-15-1",
        "front": "¿Qué es la reingeniería de software?",
        "back": "Un proceso mediante el cual se busca la mejora de un software existente, generalmente sin cambiar su funcionalidad ni su arquitectura."
      },
      {
        "id": "fc2-15-2",
        "front": "¿Qué puede implicar la reingeniería según Sommerville?",
        "back": "Redocumentar el sistema, organizar y reestructurarlo, traducirlo a un lenguaje de programación más moderno, y modificar y actualizar la estructura y valores de los datos."
      },
      {
        "id": "fc2-15-3",
        "front": "¿Qué es el mantenimiento de software?",
        "back": "Cambiar algo en el sistema en forma posterior a haber sido entregado al cliente, desde corregir un error de una línea hasta incorporar nuevos requerimientos."
      },
      {
        "id": "fc2-15-4",
        "front": "¿Por qué son altos los costos de mantenimiento?",
        "back": "Porque es mucho más costoso incorporar una nueva funcionalidad con el sistema funcionando que hacerlo durante el desarrollo, y además introducir cambios introduce defectos."
      },
      {
        "id": "fc2-15-5",
        "front": "¿Por qué se degrada la estructura de un sistema con el tiempo?",
        "back": "Porque si el sistema es útil se le pide adaptarse a un entorno cambiante, y esa adaptación hace que su estructura se vaya degradando en forma paulatina."
      },
      {
        "id": "fc2-15-6",
        "front": "¿Cuáles son las dos ventajas de hacer reingeniería frente a desarrollar de cero?",
        "back": "Disminuir el riesgo (sobre todo en sistemas críticos) y un menor costo, que siempre será menor al de desarrollar un sistema completamente nuevo."
      },
      {
        "id": "fc2-15-7",
        "front": "¿Por qué la evolución del software es relevante para una organización?",
        "back": "Porque muchas veces su operatoria depende de esos sistemas, que requieren inversión, por lo que necesita seguir invirtiendo para mantenerlos o evolucionarlos."
      }
    ]
  },
  "16": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-16-1",
          "q": "Los métodos formales son técnicas con bases matemáticas para describir las propiedades del sistema.",
          "a": true,
          "explain": "Sí, esa es la definición: técnicas con base matemática para especificar, desarrollar y verificar sistemas de forma menos ad hoc."
        },
        {
          "id": "tf2-16-2",
          "q": "Según el texto, los métodos formales son escalables y se controlan bien aunque la aplicación crezca mucho de tamaño.",
          "a": false,
          "explain": "Mentira: no son escalables. Andan bien en aplicaciones críticas pequeñas, pero si crece el tamaño se descontrola la realización."
        },
        {
          "id": "tf2-16-3",
          "q": "Las especificaciones formales son aptas para los desarrollos rápidos y la interfaz con el usuario.",
          "a": false,
          "explain": "Justo lo contrario: no sirven ni para interfaces de usuario ni para desarrollos rápidos, y eso pesó para que no se popularizaran."
        },
        {
          "id": "tf2-16-4",
          "q": "Los métodos formales fuerzan a analizar los requerimientos en una etapa inicial, donde corregir un error sale más barato.",
          "a": true,
          "explain": "Sí, te obligan a mirar los requerimientos temprano, que es donde corregir un error cuesta menos. Esa es una de sus ventajas."
        },
        {
          "id": "tf2-16-5",
          "q": "En ingenierías como la electrónica o la civil el desarrollo emplea técnicas matemáticas.",
          "a": true,
          "explain": "Sí, en esas ingenierías las técnicas matemáticas son de cajón. En software, en cambio, no terminó de pegar."
        }
      ],
      "mc": [
        {
          "id": "mc2-16-1",
          "q": "¿Para qué sirve la aproximación algebraica al redactar especificaciones?",
          "options": [
            "Para describir el sistema con conjuntos y con sucesiones",
            "Para mostrar el estado del sistema y todo su comportamiento",
            "Para describir el sistema con operaciones y relaciones",
            "Para definir precondiciones y postcondiciones del estado"
          ],
          "correctIndex": 2,
          "explain": "La algebraica describe el sistema con operaciones y sus relaciones. Lo de conjuntos, estado y precondiciones es de la basada en modelos."
        },
        {
          "id": "mc2-16-2",
          "q": "¿En qué se basa la aproximación basada en modelos?",
          "options": [
            "En describir solo operaciones y sus relaciones mutuas",
            "En construir un modelo con conjuntos y sucesiones",
            "En ocultar el estado del sistema por completo siempre",
            "En usar exclusivamente lenguajes como Larch y OBJ"
          ],
          "correctIndex": 1,
          "explain": "La basada en modelos arma un modelo con construcciones matemáticas como conjuntos y sucesiones, y define las operaciones por cómo cambian el estado."
        },
        {
          "id": "mc2-16-3",
          "q": "¿Cuál es una de las razones por las que los métodos formales no se incorporaron en todos los desarrollos?",
          "options": [
            "Que no existen lenguajes de especificación formal",
            "Que fueron prohibidos por las normas de calidad actuales",
            "Que ninguna otra ingeniería usa técnicas matemáticas",
            "Que no son aptos para interfaces ni desarrollos rápidos"
          ],
          "correctIndex": 3,
          "explain": "Un aspecto crítico hoy es la interfaz de usuario y el desarrollo rápido, y las especificaciones formales no sirven para ninguno de los dos."
        },
        {
          "id": "mc2-16-4",
          "q": "Según la tabla, ¿qué lenguajes corresponden a la aproximación basada en modelos para sistemas secuenciales?",
          "options": [
            "Larch y OBJ",
            "Lotos y Brinksma",
            "Z, VDM y B",
            "CSP y redes de Petri"
          ],
          "correctIndex": 2,
          "explain": "Basada en modelos, sistema secuencial: Z, VDM y B. Larch/OBJ son algebraica secuencial, y CSP/redes de Petri son basada en modelos concurrente."
        }
      ],
      "ms": [
        {
          "id": "ms2-16-1",
          "q": "¿Cuáles de estas son razones por las que los métodos formales no se incorporaron en todos los desarrollos?",
          "options": [
            "Otras herramientas y técnicas lograron avances en la calidad",
            "No son aptos para la interfaz ni los desarrollos rápidos",
            "No son escalables cuando crece el tamaño de la aplicación",
            "Son obligatorios por norma en toda la industria del software actual moderno",
            "Eliminan por completo la necesidad de cualquier verificación"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son las razones del texto. Las dos últimas son inventadas: ni son obligatorios ni eliminan la verificación."
        },
        {
          "id": "ms2-16-2",
          "q": "¿Cuáles son puntos clave o ventajas de los métodos de especificación formal?",
          "options": [
            "Complementan a las especificaciones informales por precisos",
            "Fuerzan a analizar los requerimientos en una etapa inicial",
            "Son una excelente herramienta para sistemas críticos",
            "Eliminan dudas y problemas de interpretación",
            "Son escalables sin ningún tipo de límite para aplicaciones de gran tamaño"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son ventajas del texto. La escalabilidad sin límite es falsa: justamente no son escalables."
        },
        {
          "id": "ms2-16-3",
          "q": "Según la tabla de lenguajes, ¿cuáles de estas asignaciones son correctas?",
          "options": [
            "Larch y OBJ son algebraica para sistemas secuenciales",
            "Lotos y Brinksma son algebraica para sistemas concurrentes",
            "Z, VDM y B son basada en modelos para secuenciales",
            "CSP y redes de Petri son basada en modelos concurrentes",
            "Larch es basada en modelos para sistemas concurrentes y distribuidos"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras coinciden con la tabla. La última es falsa: Larch es algebraica secuencial, no basada en modelos concurrente."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-16-1",
        "front": "¿Qué son los métodos formales?",
        "back": "Técnicas con bases matemáticas para describir las propiedades del sistema, que dan marcos para especificar, desarrollar y verificar los sistemas en vez de hacerlo ad hoc."
      },
      {
        "id": "fc2-16-2",
        "front": "¿Cuáles son las dos aproximaciones para redactar especificaciones formales?",
        "back": "La algebraica (describe el sistema con operaciones y sus relaciones) y la basada en modelos (modelo con conjuntos y sucesiones, con operaciones que cambian el estado)."
      },
      {
        "id": "fc2-16-3",
        "front": "¿Por qué los métodos formales no son escalables?",
        "back": "Porque son exitosos en aplicaciones críticas pequeñas, pero si el tamaño aumenta se descontrola su realización."
      },
      {
        "id": "fc2-16-4",
        "front": "¿Cuándo conviene usar la técnica algebraica?",
        "back": "Para especificar interfaces (conjuntos de clases de objetos o tipos abstractos de datos), porque oculta el estado y especifica en base a las relaciones entre operaciones."
      },
      {
        "id": "fc2-16-5",
        "front": "¿Cuándo conviene usar la técnica basada en modelos?",
        "back": "Cuando querés mostrar el estado del sistema y simplificar el comportamiento, definiendo precondiciones y postcondiciones sobre el estado del sistema."
      },
      {
        "id": "fc2-16-6",
        "front": "Lenguajes de especificación formal según la tabla",
        "back": "Algebraica: Larch y OBJ (secuencial), Lotos y Brinksma (concurrente). Basada en modelos: Z, VDM y B (secuencial), CSP y redes de Petri (concurrente)."
      },
      {
        "id": "fc2-16-7",
        "front": "¿Cuáles son los tres puntos clave (ventajas) de las especificaciones formales?",
        "back": "Complementan a las informales por precisas y no ambiguas, fuerzan a analizar requerimientos temprano (donde corregir es barato) y son excelentes para sistemas críticos."
      },
      {
        "id": "fc2-16-8",
        "front": "¿Desde cuándo y por qué no pegaron los métodos formales en software?",
        "back": "Desde los 80 se marcaron como el único camino para la calidad, pero no pegaron por otras técnicas que avanzaron, por no servir para interfaces ni desarrollos rápidos, y por no ser escalables."
      }
    ]
  },
  "1.1": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-1.1-1",
          "q": "El término \"crisis del software\" se acuñó en 1968, durante la primera conferencia de la OTAN sobre desarrollo de software.",
          "a": true,
          "explain": "Tal cual: en el 68 la OTAN hizo esa conferencia y ahí nacieron tanto \"crisis del software\" como \"ingeniería del software\"."
        },
        {
          "id": "tf2-1.1-2",
          "q": "El producto de software es únicamente el código objeto y el manual del usuario que se le entrega al cliente.",
          "a": false,
          "explain": "Error clásico: el producto incluye también la documentación de requerimientos, diseño, código fuente, datos de prueba, etc. No es solo el ejecutable."
        },
        {
          "id": "tf2-1.1-3",
          "q": "Según el apunte, la definición de Boehm es una de las que parece más completa entre las definiciones clásicas.",
          "a": true,
          "explain": "Sí, el apunte marca la de Boehm como una de las más completas: habla de aplicar conocimiento científico al diseño, construcción, documentación, operación y mantenimiento."
        },
        {
          "id": "tf2-1.1-4",
          "q": "Un alto costo de mantenimiento, a veces equiparable al del desarrollo, fue uno de los problemas detectados en la crisis del software.",
          "a": true,
          "explain": "Exacto: de los sistemas que se completaban, muchos tenían un mantenimiento carísimo, a veces igual a lo que costó hacerlos. Eso ayudó a motivar la disciplina."
        },
        {
          "id": "tf2-1.1-5",
          "q": "Sommerville define el producto de software como un conjunto de actividades cuya meta es el desarrollo o evolución del software.",
          "a": false,
          "explain": "Ojo: esa es la definición de Sommerville del proceso, no del producto. El proceso es el conjunto de actividades que llevan de los requerimientos al producto."
        }
      ],
      "mc": [
        {
          "id": "mc2-1.1-1",
          "q": "¿En qué año y en qué ámbito se acuñaron los términos \"crisis del software\" e \"ingeniería del software\"?",
          "options": [
            "En 1968, durante la primera conferencia de la OTAN sobre software",
            "En 1968, en un congreso anual organizado por la IEEE en Estados Unidos",
            "En 1993, durante la definición formal de calidad publicada por la IEEE",
            "En 1980, en la primera conferencia internacional sobre modelos de proceso"
          ],
          "correctIndex": 0,
          "explain": "Fue en 1968 en la conferencia de la OTAN. La IEEE recién en 1993 dio su definición de ingeniería de software, así que esa opción te quiere despistar con la fecha."
        },
        {
          "id": "mc2-1.1-2",
          "q": "¿A quién corresponde la definición original de ingeniería de software citada en el apunte?",
          "options": [
            "A Barry W. Boehm, marcada como la más completa por el apunte",
            "A Ian F. Sommerville, centrada en las actividades del proceso",
            "A Fritz Bauer, sobre principios de ingeniería y eficiencia",
            "A la IEEE, sobre métodos sistemáticos, disciplinados y cuantificables"
          ],
          "correctIndex": 2,
          "explain": "La original es de Fritz Bauer: principios de ingeniería para obtener software económico que trabaje eficiente en máquinas reales. Boehm e IEEE vinieron después."
        },
        {
          "id": "mc2-1.1-3",
          "q": "¿Cuál de estos elementos NO forma parte del producto de software según el apunte?",
          "options": [
            "La documentación de los requerimientos generada durante el proceso de software",
            "El conjunto de actividades que transforma los requerimientos en producto",
            "El código fuente que se produce a lo largo del desarrollo del sistema",
            "Los datos de prueba elaborados para verificar y validar el producto final"
          ],
          "correctIndex": 1,
          "explain": "Ese conjunto de actividades es el proceso, no el producto. El producto incluye documentación, código fuente, datos de prueba, manual, etc."
        },
        {
          "id": "mc2-1.1-4",
          "q": "Según el apunte, ¿qué se espera idealmente de un buen ingeniero de software además de programar?",
          "options": [
            "Que evite el trabajo en equipo para no diluir su responsabilidad técnica",
            "Que use siempre vocabulario técnico, incluso al hablar con el usuario final",
            "Que trabaje en un solo nivel de abstracción a lo largo del proyecto",
            "Que traduzca requerimientos y deseos vagos en una especificación clara"
          ],
          "correctIndex": 3,
          "explain": "Una clave del rol es convertir deseos vagos en specs claras y precisas. Las otras van contra lo que dice el apunte: hay que laburar en equipo, adaptar el vocabulario y moverse en varios niveles de abstracción."
        },
        {
          "id": "mc2-1.1-5",
          "q": "¿Cómo define el apunte el \"proceso\" de software?",
          "options": [
            "Lo que se usa para generar el producto a partir de los requerimientos",
            "El conjunto formado por el código objeto y el manual entregado al cliente final",
            "La combinación de atributos deseados que el usuario percibe como cumplida",
            "La aplicación de principios de ingeniería para obtener software económico"
          ],
          "correctIndex": 0,
          "explain": "El proceso es lo que se usa para generar el producto a partir de los requerimientos del usuario. Las otras mezclan producto, calidad o la definición de Bauer."
        }
      ],
      "ms": [
        {
          "id": "ms2-1.1-1",
          "q": "¿Cuáles de los siguientes fueron problemas asociados a la crisis del software?",
          "options": [
            "Proyectos que se extendían más allá de los costos planificados",
            "Proyectos que se extendían más allá de los tiempos planificados",
            "Proyectos que a veces se debían cancelar sin concluir",
            "Sistemas con alto costo de mantenimiento tras completarse",
            "Imposibilidad técnica de ejecutar software en máquinas reales"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son del apunte: sobrecostos, sobretiempos, cancelaciones y mantenimiento carísimo. La última te la inventaron: lo de \"máquinas reales\" es de la definición de Bauer, no un problema de la crisis."
        },
        {
          "id": "ms2-1.1-2",
          "q": "¿Cuáles de estas afirmaciones sobre las definiciones clásicas son correctas según el apunte?",
          "options": [
            "La IEEE dio su definición en 1993, hablando de métodos sistemáticos",
            "Bauer aportó la definición que el apunte considera la más completa",
            "Boehm habla de diseño, construcción y documentación asociada",
            "La definición de la IEEE contempla el estudio de la aplicación de los métodos",
            "Sommerville define el proceso como un conjunto de actividades"
          ],
          "correctIndexes": [
            0,
            2,
            3,
            4
          ],
          "explain": "Casi todas son correctas salvo la de Bauer: la \"más completa\" según el apunte es la de Boehm, no la de Bauer (que es la original). El resto coincide con el texto."
        },
        {
          "id": "ms2-1.1-3",
          "q": "¿Cuáles de estas habilidades pide el apunte para un buen ingeniero de software?",
          "options": [
            "Garantizar matemáticamente la ausencia total de errores del sistema",
            "Trabajar siempre de forma individual, sin depender de otras personas",
            "Imponer la tecnología más reciente sin consultar al cliente del proyecto",
            "Eliminar por completo la documentación para acelerar la entrega final",
            "Certificar formalmente la portabilidad de todo producto que desarrolle"
          ],
          "correctIndexes": [],
          "explain": "Ninguna está en el apunte. Lo que sí pide es traducir requerimientos vagos, manejar varios vocabularios, moverse entre niveles de abstracción y trabajar con otros. Todo lo de arriba es verso."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-1.1-1",
        "front": "Crisis del software (1968)",
        "back": "Término acuñado en la conferencia de la OTAN para los problemas del desarrollo: proyectos que excedían costos y tiempos, cancelaciones y alto costo de mantenimiento."
      },
      {
        "id": "fc2-1.1-2",
        "front": "Definición de ingeniería de software de Fritz Bauer",
        "back": "Establecimiento y uso de principios de ingeniería para obtener software económico que trabaje de forma eficiente en máquinas reales. Es la definición original."
      },
      {
        "id": "fc2-1.1-3",
        "front": "Definición de la IEEE (1993)",
        "back": "Aplicación de métodos sistemáticos, disciplinados y cuantificables al desarrollo, operación y mantenimiento del software; también contempla el estudio de esos métodos."
      },
      {
        "id": "fc2-1.1-4",
        "front": "Definición de Boehm",
        "back": "Aplicación práctica del conocimiento científico al diseño y construcción de programas y la documentación asociada para desarrollarlos, operarlos y mantenerlos. El apunte la marca como una de las más completas."
      },
      {
        "id": "fc2-1.1-5",
        "front": "Producto de software",
        "back": "No es solo el ejecutable: incluye código objeto, manual de usuario y los documentos del proceso (requerimientos, diseño, código fuente, datos de prueba)."
      },
      {
        "id": "fc2-1.1-6",
        "front": "Proceso de software (Sommerville)",
        "back": "Conjunto de actividades cuya meta es el desarrollo o evolución del software; es lo que se usa para generar el producto a partir de los requerimientos."
      },
      {
        "id": "fc2-1.1-7",
        "front": "Rol del ingeniero de software",
        "back": "Más que programar: traducir deseos vagos en specs, manejar vocabulario técnico y de negocio, moverse entre niveles de abstracción, modelar y comunicarse en equipo."
      }
    ]
  },
  "1.2": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-1.2-1",
          "q": "Según el IEEE Standard 610.12-1990, un sistema es una colección de componentes organizados para cumplir una función o conjunto de funciones específicas.",
          "a": true,
          "explain": "Sí, esa es la definición textual de sistema que cita el apunte. La clave es \"componentes organizados\" para cumplir funciones."
        },
        {
          "id": "tf2-1.2-2",
          "q": "El software es el único componente de un sistema basado en computadoras.",
          "a": false,
          "explain": "Para nada: un sistema basado en computadoras tiene software, hardware, gente, base de datos, documentación y procedimientos. El software es solo uno de varios."
        },
        {
          "id": "tf2-1.2-3",
          "q": "A diferencia del hardware, que es físico, el software es un componente lógico que no se toca.",
          "a": true,
          "explain": "Tal cual: el hardware es físico y el software es lógico. Esa es la distinción central de la sección."
        },
        {
          "id": "tf2-1.2-4",
          "q": "Un sistema de software siempre es un sistema independiente y nunca puede ser un sub-sistema de algo mayor.",
          "a": false,
          "explain": "Falso: puede ser independiente (corre solo en un ordenador) o ser un sub-sistema dentro de un sistema mayor. El GPS del celular, por ejemplo, es un sub-sistema del software del celu."
        },
        {
          "id": "tf2-1.2-5",
          "q": "El GPS del celular se presenta en el apunte como un ejemplo de sub-sistema del software del celular.",
          "a": true,
          "explain": "Sí, ese es el ejemplo que da el apunte para mostrar que un software puede ser un sub-sistema dentro de un sistema más grande."
        }
      ],
      "mc": [
        {
          "id": "mc2-1.2-1",
          "q": "¿Cuál de los siguientes NO figura entre los componentes de un sistema basado en computadoras según el apunte?",
          "options": [
            "La base de datos donde se almacena la información que maneja el software",
            "Los procedimientos que indican el uso de cada elemento del sistema",
            "El presupuesto financiero asignado al mantenimiento del sistema",
            "La documentación con los manuales para operar el sistema"
          ],
          "correctIndex": 2,
          "explain": "El presupuesto no está en la lista. Los componentes son software, hardware, gente, base de datos, documentación y procedimientos."
        },
        {
          "id": "mc2-1.2-2",
          "q": "¿Cómo define el apunte al software dentro de un sistema?",
          "options": [
            "Como el dispositivo electrónico necesario para procesar la información",
            "Como un componente lógico formado por programas y documentación",
            "Como el conjunto de usuarios que operan e interactúan con el sistema",
            "Como los procedimientos que indican el uso de cada elemento"
          ],
          "correctIndex": 1,
          "explain": "El software es el componente lógico: una colección de programas y documentación que en conjunto satisfacen ciertos requisitos. El dispositivo electrónico es el hardware."
        },
        {
          "id": "mc2-1.2-3",
          "q": "¿Qué distingue al software del hardware según esta sección?",
          "options": [
            "El software es físico mientras que el hardware es puramente lógico",
            "El software es lógico y el hardware es físico (electrónico)",
            "El software solo existe dentro de sistemas independientes, no mayores",
            "El software incluye a la gente que opera todo el sistema completo"
          ],
          "correctIndex": 1,
          "explain": "El software es lógico (no se toca) y el hardware es físico/electrónico. Las otras invierten la idea o mezclan componentes que no van."
        },
        {
          "id": "mc2-1.2-4",
          "q": "Cuando un sistema de software forma parte de un sistema mayor, ¿cómo se lo considera?",
          "options": [
            "Como un sistema totalmente independiente del sistema mayor que lo contiene",
            "Como el hardware físico y electrónico que sostiene al sistema completo",
            "Como un sub-sistema de software dentro de ese sistema mayor",
            "Como la documentación y los manuales que acompañan al sistema principal"
          ],
          "correctIndex": 2,
          "explain": "En ese caso es un sub-sistema de software. Si en cambio cumpliera su objetivo solo, sería un sistema independiente."
        }
      ],
      "ms": [
        {
          "id": "ms2-1.2-1",
          "q": "¿Cuáles de los siguientes son componentes de un sistema basado en computadoras según el apunte?",
          "options": [
            "Software: los programas de computadora",
            "Hardware: los dispositivos electrónicos necesarios",
            "Gente: los usuarios y quienes operan el sistema",
            "Procedimientos: indican el uso de cada elemento",
            "Presupuesto: el dinero asignado al proyecto"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Software, hardware, gente y procedimientos sí están. El presupuesto te lo agregaron de prepo: no figura entre los componentes que lista el apunte."
        },
        {
          "id": "ms2-1.2-2",
          "q": "¿Cuáles de estas afirmaciones sobre la relación entre sistema y software son correctas?",
          "options": [
            "El sistema es el todo e incluye gente, fierros y datos",
            "El software es la parte lógica del sistema",
            "Un software puede ser autónomo o un sub-sistema de algo mayor",
            "El software es siempre el único componente físico del sistema",
            "Un sistema solo puede existir si corre en un único ordenador"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son correctas. La cuarta es falsa (el software es lógico, no físico) y la quinta también: un sistema puede ser parte de algo mayor, no necesita un único ordenador."
        },
        {
          "id": "ms2-1.2-3",
          "q": "¿Cuáles de estas opciones describen correctamente la definición de sistema del IEEE Standard 610.12-1990?",
          "options": [
            "Es una colección de componentes que están organizados",
            "Su fin es cumplir una función o conjunto de funciones",
            "Excluye de forma explícita a la gente como componente del sistema",
            "Se limita exclusivamente a los programas de computadora y a sus datos",
            "Requiere siempre que el sistema esté conectado a internet para operar"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "La definición es \"colección de componentes organizados para cumplir una función o conjunto de funciones\". Las otras tres son inventos: no excluye a la gente, no se limita a programas ni exige internet."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-1.2-1",
        "front": "Definición de sistema (IEEE 610.12-1990)",
        "back": "Colección de componentes organizados para cumplir una función o conjunto de funciones específicas."
      },
      {
        "id": "fc2-1.2-2",
        "front": "Componentes de un sistema basado en computadoras",
        "back": "Software, hardware, gente, base de datos, documentación y procedimientos."
      },
      {
        "id": "fc2-1.2-3",
        "front": "Software (como componente)",
        "back": "Componente lógico del sistema (no físico): colección de programas y documentación que en conjunto satisfacen ciertos requisitos."
      },
      {
        "id": "fc2-1.2-4",
        "front": "Diferencia software vs. hardware",
        "back": "El hardware es físico (dispositivos electrónicos); el software es lógico, no se toca."
      },
      {
        "id": "fc2-1.2-5",
        "front": "Sistema independiente vs. sub-sistema de software",
        "back": "El software puede ser un sistema independiente (cumple su objetivo solo) o un sub-sistema dentro de un sistema mayor."
      },
      {
        "id": "fc2-1.2-6",
        "front": "Ejemplo de sub-sistema de software",
        "back": "El GPS del celular es, en realidad, un sub-sistema del software del celular."
      },
      {
        "id": "fc2-1.2-7",
        "front": "Sistema vs. software (moraleja)",
        "back": "El sistema es el todo (incluye gente, fierros, datos, etc.); el software es solo la parte lógica."
      }
    ]
  },
  "1.3": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-1.3-1",
          "q": "Para los profesionales de la ingeniería de software, calidad significa simplemente \"excelencia\".",
          "a": false,
          "explain": "No: calidad implica excelencia de algún tipo, pero ese no es el significado que le dan los profesionales. Para la IEEE es tener buena combinación de atributos deseados y que el cliente perciba que cumple."
        },
        {
          "id": "tf2-1.3-2",
          "q": "Según el apunte, la calidad del proceso tiene una influencia significativa en la calidad del producto.",
          "a": true,
          "explain": "Sí: aunque el software no se fabrica como el hardware, la experiencia muestra que un buen proceso influye fuerte en la calidad del producto, minimizando defectos."
        },
        {
          "id": "tf2-1.3-3",
          "q": "A todos los productos de software se les exigen todas las cualidades por igual.",
          "a": false,
          "explain": "Falso: no todas las cualidades se le piden a cada producto. Hay que identificar cuáles son relevantes; por ejemplo, no todos necesitan ser portables."
        },
        {
          "id": "tf2-1.3-4",
          "q": "Según Brooks, las dificultades esenciales del software siguen presentes pese al progreso tecnológico.",
          "a": true,
          "explain": "Tal cual: las esenciales (complejidad, conformidad, variabilidad e invisibilidad) son inherentes y no se van con la tecnología. Las accidentales sí cambian."
        },
        {
          "id": "tf2-1.3-5",
          "q": "Los principios de la ingeniería de software se aplican solo en una fase aislada del ciclo de vida.",
          "a": false,
          "explain": "Al revés: a diferencia de las cualidades, los principios se aplican durante todo el proceso y la evolución del software. Son la piedra angular de la disciplina."
        }
      ],
      "mc": [
        {
          "id": "mc2-1.3-1",
          "q": "Según la clasificación de Ghezzi, las cualidades del software se dividen en:",
          "options": [
            "Esenciales (inherentes al software) y accidentales (cambian con la tecnología)",
            "Internas (relevantes para los desarrolladores) y externas (para los usuarios)",
            "Del producto (visibles para el cliente) y del proceso (de gestión interna)",
            "Rígidas (fijadas al inicio del proyecto) y flexibles (ajustables en el avance)"
          ],
          "correctIndex": 1,
          "explain": "Ghezzi las clasifica en internas (les importan a los devs) y externas (las ven los usuarios). Lo esencial/accidental es de Brooks, no de Ghezzi."
        },
        {
          "id": "mc2-1.3-2",
          "q": "¿Qué cualidad describe que el software se comporta razonablemente aun en circunstancias no anticipadas en la especificación?",
          "options": [
            "Correctitud, comportarse según las funciones especificadas en el contrato",
            "Confiabilidad, operar como se espera dentro de un intervalo de tiempo dado",
            "Robustez, comportarse bien ante lo no previsto",
            "Performance, utilizar los recursos disponibles en forma económica y eficiente"
          ],
          "correctIndex": 2,
          "explain": "Esa es la robustez: aguanta circunstancias no anticipadas, como no colgarse irrecuperablemente al apretar una tecla errónea. Las otras son cualidades distintas."
        },
        {
          "id": "mc2-1.3-3",
          "q": "¿Qué características debe tener un buen diseño de módulos según el principio de modularidad?",
          "options": [
            "Alta cohesión interna y bajo acoplamiento entre los módulos",
            "Bajo acoplamiento interno y alta cohesión entre módulos distintos",
            "Alta cohesión externa y alto acoplamiento entre los módulos",
            "Bajo nivel de abstracción y alta formalidad matemática interna"
          ],
          "correctIndex": 0,
          "explain": "Modularidad bien hecha = alta cohesión (componentes internos del módulo bien relacionados) y bajo acoplamiento (módulos poco atados entre sí). Las otras cruzan los términos."
        },
        {
          "id": "mc2-1.3-4",
          "q": "Según el principio de rigor y formalidad, ¿qué representa la formalidad?",
          "options": [
            "El descubrimiento de un problema más general detrás del tratado",
            "El nivel más alto del rigor, basado en leyes matemáticas",
            "La identificación de subconjuntos para entregas al usuario",
            "La separación de aspectos del problema para tratarlos aparte"
          ],
          "correctIndex": 1,
          "explain": "La formalidad es el nivel más alto del rigor: conducir y evaluar el proceso mediante leyes matemáticas. Las otras describen generalización, incrementalidad y separación de incumbencias."
        },
        {
          "id": "mc2-1.3-5",
          "q": "¿De qué principio de la ingeniería de software se ocupa la Administración de configuraciones?",
          "options": [
            "De la generalización de los problemas tratados en el proyecto",
            "De la separación de incumbencias entre los distintos equipos",
            "De la abstracción de los aspectos importantes del fenómeno",
            "De la anticipación al cambio mediante control de versiones"
          ],
          "correctIndex": 3,
          "explain": "La Administración de configuraciones (control de versiones y revisiones) se ocupa de la anticipación al cambio. Las otras opciones nombran principios distintos."
        }
      ],
      "ms": [
        {
          "id": "ms2-1.3-1",
          "q": "Según Brooks en \"No silver bullet\", ¿cuáles son dificultades esenciales del software?",
          "options": [
            "Complejidad",
            "Conformidad",
            "Variabilidad o mutabilidad",
            "Invisibilidad",
            "Limitaciones de velocidad de los dispositivos"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las esenciales son complejidad, conformidad, variabilidad/mutabilidad e invisibilidad. La velocidad de los dispositivos es una dificultad accidental (cambia con la tecnología), así que esa no va."
        },
        {
          "id": "ms2-1.3-2",
          "q": "¿Cuáles de los siguientes son principios de la ingeniería de software según el apunte?",
          "options": [
            "Rigor y formalidad",
            "Separación de incumbencias o responsabilidades",
            "Modularidad",
            "Anticipación al cambio",
            "Confiabilidad"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Los cuatro primeros son principios. La confiabilidad es una cualidad del software, no un principio: te la pusieron para hacerte dudar."
        },
        {
          "id": "ms2-1.3-3",
          "q": "¿Cuáles de estas afirmaciones sobre las cualidades del software son correctas?",
          "options": [
            "La portabilidad permite correr en distintos ambientes o sistemas operativos",
            "La integridad controla los accesos no autorizados a datos o software",
            "La reusabilidad se aplica más a una parte que al producto entero",
            "La visibilidad es una cualidad del proceso ligada a documentar sus pasos",
            "La oportunidad mide la cantidad de defectos hallados tras la entrega"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras coinciden con la tabla del apunte. La oportunidad NO mide defectos: es la habilidad de entregar el producto a tiempo. Por eso esa queda afuera."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-1.3-1",
        "front": "Calidad del software (IEEE)",
        "back": "El software posee una buena combinación de atributos deseados y el cliente o usuario percibe que el producto cumple con sus expectativas."
      },
      {
        "id": "fc2-1.3-2",
        "front": "Calidad del proceso vs. del producto",
        "back": "La calidad del proceso afecta directamente la del producto. En software, aunque no se \"fabrica\" como el hardware, la experiencia muestra que el proceso influye fuerte en el producto."
      },
      {
        "id": "fc2-1.3-3",
        "front": "Cualidades internas vs. externas (Ghezzi)",
        "back": "Internas: relevantes para los desarrolladores. Externas: visibles o relevantes para los usuarios."
      },
      {
        "id": "fc2-1.3-4",
        "front": "Robustez",
        "back": "El software se comporta razonablemente aun en circunstancias no anticipadas en la especificación (ej.: no falla irrecuperablemente ante una tecla errónea)."
      },
      {
        "id": "fc2-1.3-5",
        "front": "Modularidad (alta cohesión / bajo acoplamiento)",
        "back": "Dividir un sistema complejo en módulos. Buen diseño: alta cohesión (relación interna del módulo) y bajo acoplamiento (relación entre módulos)."
      },
      {
        "id": "fc2-1.3-6",
        "front": "Principios vs. cualidades",
        "back": "Las cualidades son atributos del producto/proceso; los principios se aplican durante TODO el proceso y la evolución, son la piedra angular de la disciplina."
      },
      {
        "id": "fc2-1.3-7",
        "front": "Dificultades esenciales vs. accidentales (Brooks)",
        "back": "Esenciales: inherentes al software (complejidad, conformidad, variabilidad e invisibilidad), no se van. Accidentales: del momento, cambian con la tecnología."
      },
      {
        "id": "fc2-1.3-8",
        "front": "Anticipación al cambio",
        "back": "Principio que identifica necesidades de reparación o evolución; de él se ocupa la Administración de configuraciones (control de versiones y revisiones)."
      }
    ]
  },
  "2.1": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-2.1-1",
          "q": "El ciclo de vida abarca desde que surge la necesidad inicial de un sistema hasta que el mismo sale de uso.",
          "a": true,
          "explain": "Sí, por eso se llama ciclo de \"vida\": va de la necesidad inicial hasta que el sistema deja de usarse."
        },
        {
          "id": "tf2-2.1-2",
          "q": "En el modelo de cascada, las actividades se solapan y todo el grupo puede estar en etapas distintas a la vez.",
          "a": false,
          "explain": "Falso: en cascada las etapas se suceden escalonadas, sin solapamiento, y todo el grupo está en la misma etapa. Por eso no requiere personal muy experto en administración."
        },
        {
          "id": "tf2-2.1-3",
          "q": "El gran aporte del modelo espiral fue incorporar el análisis de riesgos al ciclo de vida.",
          "a": true,
          "explain": "Exacto: el espiral de Boehm (años 80) metió el análisis de riesgos, que antes no estaba contemplado, y piensa el proyecto como una suma de mini proyectos."
        },
        {
          "id": "tf2-2.1-4",
          "q": "El modelo incremental le quita flexibilidad al modelo de cascada y oculta los avances al cliente.",
          "a": false,
          "explain": "Al revés: el incremental le SUMA flexibilidad a la cascada y justamente le da al cliente signos visibles del avance con subsistemas operativos."
        },
        {
          "id": "tf2-2.1-5",
          "q": "El prototipo descartable original se desechaba una vez definidas bien las entradas, salidas y procesos.",
          "a": true,
          "explain": "Sí: el prototipo descartable se usaba para definir entradas/salidas/procesos y después se tiraba para desarrollar el producto en la arquitectura definida. Eso generaba conflictos y por eso pasó a ser evolutivo."
        }
      ],
      "mc": [
        {
          "id": "mc2-2.1-1",
          "q": "¿Por qué el modelo de cascada se considera muy rígido?",
          "options": [
            "Porque cada etapa debe terminar entera antes de iniciar la siguiente",
            "Porque incorpora un análisis de riesgos en cada uno de sus cuatro cuadrantes",
            "Porque entrega subsistemas operativos al cliente en períodos cortos de tiempo",
            "Porque desarrolla un prototipo evolutivo montado sobre la arquitectura elegida"
          ],
          "correctIndex": 0,
          "explain": "La rigidez viene de que las etapas son secuenciales y una debe terminar entera para arrancar la siguiente. Las otras describen el espiral, el incremental y el de prototipos."
        },
        {
          "id": "mc2-2.1-2",
          "q": "En el modelo clásico, ¿qué etapa está asociada a determinar el \"qué\" se debe hacer?",
          "options": [
            "El diseño, que define los algoritmos y la estructura de datos del sistema",
            "El análisis y especificación de requerimientos",
            "La codificación, que traduce lo definido al lenguaje de programación elegido",
            "La integración, que combina los módulos para conformar el sistema completo"
          ],
          "correctIndex": 1,
          "explain": "El análisis y especificación de requerimientos se asocia al \"qué\". El diseño es el \"cómo\"; codificación e integración vienen después."
        },
        {
          "id": "mc2-2.1-3",
          "q": "¿Qué representa cada uno de los cuatro cuadrantes del modelo espiral?",
          "options": [
            "Análisis, diseño, codificación y pruebas del sistema completo de información",
            "Especificación, prototipo ligero, prototipo operativo y entrega incremental",
            "Planificación, análisis de riesgos, ingeniería y evaluación del cliente",
            "Requerimientos, integración, operación y mantenimiento posterior a la entrega"
          ],
          "correctIndex": 2,
          "explain": "Los cuatro cuadrantes del espiral son planificación, análisis de riesgos, ingeniería y evaluación del cliente. Las otras mezclan etapas de cascada o categorías de prototipos."
        },
        {
          "id": "mc2-2.1-4",
          "q": "¿En qué consiste la variante \"Diseño por planificación\" del modelo incremental?",
          "options": [
            "Las entregas se fijan por prioridad del cliente en orden decreciente",
            "Las entregas se descartan una vez validadas las interfaces de usuario",
            "Las entregas se posponen hasta tener toda la documentación completa",
            "Las entregas se definen según el análisis de riesgos de cada ciclo"
          ],
          "correctIndex": 0,
          "explain": "En \"Diseño por planificación\" las entregas van por prioridad del cliente en orden decreciente, así lo más prioritario queda implementado primero por si el proyecto se cancela o demora."
        },
        {
          "id": "mc2-2.1-5",
          "q": "¿Cuándo resulta especialmente útil el modelo de prototipos?",
          "options": [
            "Cuando los requisitos están completamente definidos y no se esperan cambios",
            "Cuando el cliente no puede describir claramente qué desea",
            "Cuando se busca minimizar el volumen de documentación final",
            "Cuando todo el grupo debe estar siempre en la misma etapa"
          ],
          "correctIndex": 1,
          "explain": "El de prototipos brilla cuando el cliente no sabe describir qué quiere, o cuando el desarrollador no conoce el negocio. La primera opción describe más bien a la cascada."
        }
      ],
      "ms": [
        {
          "id": "ms2-2.1-1",
          "q": "¿Cuáles de los siguientes son modelos de ciclo de vida abordados por el apunte?",
          "options": [
            "Ciclo de vida clásico (cascada)",
            "Modelo espiral",
            "Modelo incremental",
            "Modelo de prototipos",
            "Modelo evolutivo UP"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Los cinco están: el apunte aborda cascada, espiral, incremental, prototipos y evolutivo UP. Esta vez todas son correctas, no te confíes con que siempre hay alguna falsa."
        },
        {
          "id": "ms2-2.1-2",
          "q": "¿Cuáles de estas afirmaciones sobre el modelo de cascada son correctas según el apunte?",
          "options": [
            "Fue el primer modelo y base de muchos posteriores",
            "No requiere personal muy experto en administración ni planificación",
            "Conviene cuando los requisitos están definidos y no se esperan cambios",
            "Con el tiempo se le agregó el retorno a etapas anteriores",
            "Le muestra al cliente los avances desde las primeras etapas"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son del apunte. La última es falsa: la cascada NO le deja ver al cliente los avances hasta etapas muy avanzadas, como las pruebas."
        },
        {
          "id": "ms2-2.1-3",
          "q": "¿Cuáles de estas afirmaciones sobre el modelo de prototipos son correctas?",
          "options": [
            "Su objetivo principal es obtener retroalimentación para definir requisitos",
            "Los prototipos ligeros son bocetos de pantallas con dibujos de navegación",
            "Los prototipos operativos crean módulos que cubren parte de las funcionalidades",
            "El prototipo descartable nunca generó conflictos entre cliente y desarrollador",
            "Incorpora el análisis de riesgos en cuatro cuadrantes cartesianos"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras van. La cuarta es falsa (el descartable SÍ generaba conflictos, por eso se pasó al evolutivo) y la quinta describe el espiral, no los prototipos."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-2.1-1",
        "front": "Ciclo de vida del software",
        "back": "Conjunto de actividades para producir software; abarca desde que surge la necesidad inicial del sistema hasta que sale de uso. También se lo llama paradigma de proceso."
      },
      {
        "id": "fc2-2.1-2",
        "front": "Ciclo de vida clásico (cascada)",
        "back": "Primer modelo y base de los demás. Lineal/secuencial: cada etapa debe terminar antes de iniciar la siguiente. Muy rígido."
      },
      {
        "id": "fc2-2.1-3",
        "front": "Etapas del modelo clásico",
        "back": "Análisis y especificación de requerimientos, diseño, codificación, pruebas, integración, operación y mantenimiento."
      },
      {
        "id": "fc2-2.1-4",
        "front": "Qué vs. cómo en la cascada",
        "back": "El análisis y especificación de requerimientos define el \"qué\"; el diseño define el \"cómo\"."
      },
      {
        "id": "fc2-2.1-5",
        "front": "Modelo espiral (Boehm, años 80)",
        "back": "Incorpora el análisis de riesgos al ciclo de vida. Plantea el proyecto como suma de mini proyectos, cada uno centrado en uno o más riesgos."
      },
      {
        "id": "fc2-2.1-6",
        "front": "Cuadrantes del modelo espiral",
        "back": "Planificación, análisis de riesgos, ingeniería y evaluación del cliente. En cada giro se hace una parte del desarrollo pasando por los cuatro."
      },
      {
        "id": "fc2-2.1-7",
        "front": "Modelo incremental",
        "back": "Le suma flexibilidad a la cascada: descompone el desarrollo en partes y entrega subsistemas operativos, dándole al cliente avances visibles."
      },
      {
        "id": "fc2-2.1-8",
        "front": "Modelo de prototipos",
        "back": "Un prototipo simula el funcionamiento del sistema. Útil cuando el cliente no sabe qué quiere o el desarrollador no conoce el negocio. Su fin: retroalimentación para definir requisitos."
      }
    ]
  },
  "2.2": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-2.2-1",
          "q": "En el modelo evolutivo, cada ciclo de desarrollo genera un sistema completo que el cliente puede operar.",
          "a": true,
          "explain": "Tal cual. El evolutivo enlaza especificación, desarrollo y validación en cada ciclo, y cada uno entrega un sistema operable. Por eso el cliente puede usarlo y de ahí salen los pedidos para la próxima versión."
        },
        {
          "id": "tf2-2.2-2",
          "q": "El modelo evolutivo conviene cuando ya se conocen con precisión todos los requerimientos desde el arranque.",
          "a": false,
          "explain": "Al revés: el evolutivo brilla justo cuando hay desconocimiento de las necesidades (área nueva, urgencia, entorno cambiante). Si ya sabés todo de entrada, no necesitás ir refinando."
        },
        {
          "id": "tf2-2.2-3",
          "q": "El Proceso Unificado (UP/RUP) está asociado al Lenguaje Unificado de Modelado (UML).",
          "a": true,
          "explain": "Sí. El RUP nace del Proceso Unificado de Desarrollo de Jacobson, Booch y Rumbaugh, y va de la mano de UML. Es el ejemplo clásico de modelo híbrido."
        },
        {
          "id": "tf2-2.2-4",
          "q": "En el UP, la fase de Construcción finaliza con el modelo de requerimientos y la descripción de la arquitectura.",
          "a": false,
          "explain": "Eso es la Elaboración. La Construcción abarca diseño, programación y pruebas, y termina con un sistema operativo y su documentación. Ojo con no mezclar las fases."
        },
        {
          "id": "tf2-2.2-5",
          "q": "En el UP, los flujos de trabajo se corresponden con las etapas del modelo de cascada: requisitos, análisis, diseño, implementación y pruebas.",
          "a": true,
          "explain": "Correcto. Cada iteración del UP pasa por esos flujos de trabajo (las filas del gráfico), que son las etapas de toda la vida de cascada."
        }
      ],
      "mc": [
        {
          "id": "mc2-2.2-1",
          "q": "¿Qué actividades enlaza cada ciclo del modelo evolutivo?",
          "options": [
            "Especificación, desarrollo y validación",
            "Planificación, estimación de costos y mantenimiento",
            "Análisis, codificación y documentación final",
            "Relevamiento, contratación y capacitación del usuario"
          ],
          "correctIndex": 0,
          "explain": "El evolutivo enlaza especificación, desarrollo y validación en cada ciclo, y cada uno genera un sistema completo operable. Las otras mezclan etapas de otros contextos."
        },
        {
          "id": "mc2-2.2-2",
          "q": "¿Cuál de estas situaciones NO es típica para aplicar el modelo evolutivo?",
          "options": [
            "No se posee experiencia previa en el área del nuevo sistema",
            "El sistema operará en un entorno legal sujeto a cambios",
            "Ya se conocen todos los requisitos detallados de antemano",
            "Se requiere el sistema con extremada urgencia y poco tiempo"
          ],
          "correctIndex": 2,
          "explain": "El evolutivo sirve cuando hay desconocimiento de necesidades. Si ya tenés todo documentado al detalle, no es el escenario donde brilla. Las otras tres sí son casos típicos del texto."
        },
        {
          "id": "mc2-2.2-3",
          "q": "¿Quiénes son los autores del Proceso Unificado de Desarrollo de Software?",
          "options": [
            "Kent Beck, Ward Cunningham y Martin Fowler",
            "Ken Schwaber, Mike Beedle y Jeff Sutherland",
            "Ivar Jacobson, Grady Booch y James Rumbaugh",
            "Alan Davis, Alistair Cockburn y Jim Highsmith"
          ],
          "correctIndex": 2,
          "explain": "El UP surge del Proceso Unificado de Jacobson, Booch y Rumbaugh. Los otros nombres son de métodos ágiles o de otros autores que aparecen en otras secciones."
        },
        {
          "id": "mc2-2.2-4",
          "q": "¿Con qué finaliza la fase de Transición en el UP?",
          "options": [
            "Con el marco arquitectónico definido y el plan del proyecto armado",
            "Con los procesos de negocio descritos y los actores identificados",
            "Con el diseño, la programación y las pruebas del sistema completas",
            "Con el software operando correctamente en el entorno operativo"
          ],
          "correctIndex": 3,
          "explain": "En la Transición el sistema pasa del desarrollo al entorno real y termina cuando opera bien ahí con su documentación. Las otras describen Elaboración, Inicio y Construcción."
        },
        {
          "id": "mc2-2.2-5",
          "q": "¿Cómo se caracteriza el UP en su definición central?",
          "options": [
            "Iterativo e incremental, integrado por fases, ciclos y flujos",
            "Lineal y secuencial, sin vuelta atrás entre las etapas definidas",
            "Basado en historias de usuario y en la programación en pares",
            "Centrado en sprints de una a cuatro semanas con tres roles fijos"
          ],
          "correctIndex": 0,
          "explain": "La clave del UP es que es iterativo e incremental, integrado por fases, ciclos y flujos de trabajo. Las otras describen cascada, XP y Scrum respectivamente."
        }
      ],
      "ms": [
        {
          "id": "ms2-2.2-1",
          "q": "¿Cuáles de estas son fases del Proceso Unificado?",
          "options": [
            "Inicio",
            "Elaboración",
            "Construcción",
            "Transición",
            "Validación"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro fases del UP son Inicio, Elaboración, Construcción y Transición. \"Validación\" suena bien pero no es una fase del UP: es una actividad que aparece en otros modelos."
        },
        {
          "id": "ms2-2.2-2",
          "q": "Según el texto, ¿qué condiciones hacen útil al modelo evolutivo?",
          "options": [
            "No hay experiencia previa en el área",
            "Se trata de un nuevo entorno para el sistema",
            "Hay extremada urgencia y poco tiempo para detallar requisitos",
            "El entorno es cambiante (normas aún en definición)",
            "El equipo es muy numeroso y el sistema permanece años vigente"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son las que lista el texto para el evolutivo. La de equipo numeroso y vigencia de años describe los sistemas grandes de los modelos tradicionales, no el evolutivo."
        },
        {
          "id": "ms2-2.2-3",
          "q": "¿Cuáles de estas afirmaciones sobre las fases del UP son incorrectas?",
          "options": [
            "La fase de Inicio finaliza con un sistema operativo y su documentación",
            "La Elaboración establece el plan de proyecto y los riesgos",
            "La Construcción identifica con quién interactúa el sistema",
            "La Transición comprende el dominio del problema y la arquitectura",
            "El Inicio entrega un modelo de requerimientos con casos de uso"
          ],
          "correctIndexes": [
            0,
            2,
            3,
            4
          ],
          "explain": "Casi todas están cruzadas a propósito. Solo la opción de Elaboración (plan de proyecto y riesgos) es correcta; las demás asignan a una fase lo que le toca a otra, así que son las incorrectas que pedía la pregunta."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-2.2-1",
        "front": "Modelo evolutivo: idea central",
        "back": "Arranca con un sistema inicial rápido a partir de una lista de especificaciones y lo va refinando con las nuevas peticiones del cliente, hasta cubrir todas sus necesidades."
      },
      {
        "id": "fc2-2.2-2",
        "front": "¿Cuándo conviene el modelo evolutivo?",
        "back": "Cuando hay desconocimiento de las necesidades: sin experiencia previa, entorno nuevo, urgencia extrema sin tiempo de detallar, o entorno cambiante (normas aún en definición)."
      },
      {
        "id": "fc2-2.2-3",
        "front": "UP / RUP: ¿qué es?",
        "back": "Proceso Unificado de Rational, asociado a UML, surgido del Proceso Unificado de Jacobson, Booch y Rumbaugh. Es un ejemplo clásico de modelo híbrido."
      },
      {
        "id": "fc2-2.2-4",
        "front": "Las cuatro fases del UP",
        "back": "Inicio, Elaboración, Construcción y Transición. Cada una concluye con objetivos específicos y un entregable (modelo o documentación)."
      },
      {
        "id": "fc2-2.2-5",
        "front": "Fase de Elaboración (UP)",
        "back": "Comprende el dominio del problema, genera el marco arquitectónico, establece el plan de proyecto y los riesgos. Termina con modelo de requerimientos (casos de uso), descripción de arquitectura y plan de desarrollo."
      },
      {
        "id": "fc2-2.2-6",
        "front": "Fase de Construcción (UP)",
        "back": "Abarca el diseño del sistema, su programación y pruebas. Finaliza con un sistema operativo y su documentación."
      },
      {
        "id": "fc2-2.2-7",
        "front": "Flujos de trabajo del UP",
        "back": "Cada iteración pasa por requisitos, análisis, diseño, implementación y pruebas, que se corresponden con las etapas del modelo de cascada."
      },
      {
        "id": "fc2-2.2-8",
        "front": "UP: definición en una frase",
        "back": "Modelo iterativo e incremental, integrado por fases, ciclos y flujos de trabajo."
      }
    ]
  },
  "3.1": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-3.1-1",
          "q": "Los métodos ágiles surgieron porque los modelos rígidos no se adaptaban bien a proyectos pequeños y entornos cambiantes.",
          "a": true,
          "explain": "Exacto. En proyectos chicos, definir todo de antemano tardaba más que programar, y meter cambios en un modelo rígido era carísimo. De ahí el giro hacia lo iterativo e incremental."
        },
        {
          "id": "tf2-3.1-2",
          "q": "Kent Beck es uno de los precursores de los métodos ágiles con su libro sobre XP.",
          "a": true,
          "explain": "Sí. Kent Beck escribió Extreme Programming Explained y fue uno de los firmantes del Manifiesto Ágil de 2001."
        },
        {
          "id": "tf2-3.1-3",
          "q": "En XP, la práctica de la semana laboral de 40h busca sumar horas extra para acelerar las entregas.",
          "a": false,
          "explain": "Al revés. Las 40h son justamente para NO agregar tiempo extra y evitar el agotamiento de los programadores. Quemar gente no es la idea."
        },
        {
          "id": "tf2-3.1-4",
          "q": "En Scrum, durante el sprint el equipo, la calidad y el alcance se mantienen inalterables.",
          "a": true,
          "explain": "Tal cual. Una vez arrancado el sprint, equipo, calidad y alcance quedan fijos: el equipo se compromete a concluir lo seleccionado en el tiempo pautado."
        },
        {
          "id": "tf2-3.1-5",
          "q": "El Scrum Master y el Product Owner pueden ser la misma persona si el equipo es chico.",
          "a": false,
          "explain": "Nunca. El texto lo marca explícito: el Scrum Master y el Product Owner JAMÁS pueden ser la misma persona, sin importar el tamaño del equipo."
        }
      ],
      "mc": [
        {
          "id": "mc2-3.1-1",
          "q": "¿Cuál de estos NO figura entre los principios de los métodos ágiles?",
          "options": [
            "Documentar todo en detalle antes de empezar",
            "Participación del cliente en el proceso de desarrollo",
            "Aceptar que los requerimientos del sistema cambian",
            "Mantener la simplicidad en el producto y el proceso"
          ],
          "correctIndex": 0,
          "explain": "La documentación exhaustiva previa es de los modelos rígidos. Los ágiles priorizan software funcional, cliente metido, cambios aceptados y simplicidad. Los otros tres son principios del texto."
        },
        {
          "id": "mc2-3.1-2",
          "q": "¿Quiénes proponen Scrum según el apunte?",
          "options": [
            "Ivar Jacobson y Grady Booch",
            "Alistair Cockburn y Jim Highsmith",
            "Ken Schwaber y Mike Beedle",
            "Jennifer Stapleton y Jeff De Luca"
          ],
          "correctIndex": 2,
          "explain": "Scrum se atribuye a Ken Schwaber y Mike Beedle (2001). Los otros pares corresponden al UP, a Crystal Clear, y a ASD/FDD respectivamente."
        },
        {
          "id": "mc2-3.1-3",
          "q": "¿Cuál es la duración típica de un sprint en Scrum?",
          "options": [
            "Entre uno y tres días corridos",
            "Entre una y cuatro semanas",
            "Entre dos y seis meses fijos",
            "Exactamente treinta días naturales"
          ],
          "correctIndex": 1,
          "explain": "El sprint dura entre una y cuatro semanas. Las otras cifras son plausibles pero no son las que da el texto."
        },
        {
          "id": "mc2-3.1-4",
          "q": "¿Qué describe la práctica de XP llamada \"liberación limitada\"?",
          "options": [
            "Restringir el acceso del cliente al código fuente del sistema",
            "Limitar la cantidad de historias de usuario por cada iteración",
            "Entregar desarrollos rápido aun sin estar completos del todo",
            "Acotar todas las funciones a un único módulo central del sistema"
          ],
          "correctIndex": 2,
          "explain": "Liberación limitada es entregar rápido aunque falte completar, porque el cliente lo necesita con urgencia; lo que falta se incorpora después. Las otras suenan parecido pero no son eso."
        },
        {
          "id": "mc2-3.1-5",
          "q": "¿Cuál es la responsabilidad central del Product Owner?",
          "options": [
            "Hacer coaching y remover impedimentos del equipo de trabajo",
            "Construir el producto durante cada uno de los sprints pautados",
            "Asignar títulos y jerarquías a los integrantes del equipo",
            "Administrar el product Backlog y definir las prioridades"
          ],
          "correctIndex": 3,
          "explain": "El Product Owner administra el product Backlog y define las prioridades de las funcionalidades. El coaching es del Scrum Master, construir es del Equipo, y jerarquías no hay (el equipo es autogestionado)."
        }
      ],
      "ms": [
        {
          "id": "ms2-3.1-1",
          "q": "¿Cuáles son las cuatro prácticas básicas de XP?",
          "options": [
            "Liberación limitada",
            "Semana laboral de 40 horas",
            "Cliente en el sitio",
            "Programación en pares",
            "Sprints de duración fija"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro prácticas de XP son liberación limitada, 40h, cliente en sitio y programación en pares. Los sprints son de Scrum, no de XP."
        },
        {
          "id": "ms2-3.1-2",
          "q": "¿Cuáles de estas afirmaciones sobre el Equipo de Scrum son correctas?",
          "options": [
            "Es multidisciplinario y autogestionado",
            "Tiene un líder fijo que asigna las tareas",
            "Sus roles pueden intercambiarse según necesidad",
            "Está formado por siete personas, más o menos dos",
            "Define las prioridades de las funcionalidades"
          ],
          "correctIndexes": [
            0,
            2,
            3
          ],
          "explain": "El Equipo es multidisciplinario, autogestionado, sin jefe ni jerarquías, con roles intercambiables y de siete personas (±2). No tiene líder fijo y las prioridades las define el Product Owner."
        },
        {
          "id": "ms2-3.1-3",
          "q": "¿Cuáles de estos métodos ágiles fueron creados o liderados por Kent Beck?",
          "options": [
            "Scrum",
            "Crystal Clear",
            "Adaptative Software Development (ASD)",
            "Feature Driven Development (FDD)",
            "Extreme Programming (XP)"
          ],
          "correctIndexes": [
            4
          ],
          "explain": "Solo XP es de Kent Beck. Scrum es de Schwaber y Beedle, Crystal Clear de Cockburn y Highsmith, ASD de Stapleton y FDD de De Luca."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-3.1-1",
        "front": "¿Por qué surgieron los métodos ágiles?",
        "back": "Porque los modelos rígidos no se adaptaban a proyectos chicos ni a entornos cambiantes: definir todo de antemano tardaba más que programar y los cambios eran muy difíciles de incorporar."
      },
      {
        "id": "fc2-3.1-2",
        "front": "Manifiesto Ágil (2001)",
        "back": "Surge de una reunión de críticos de los modelos tradicionales. Firmado por figuras como Kent Beck, Mike Beedle, Cockburn, Cunningham, Fowler, Robert C. Martin, Schwaber y Sutherland, entre otros."
      },
      {
        "id": "fc2-3.1-3",
        "front": "Principios de los métodos ágiles",
        "back": "Participación del cliente, desarrollo incremental, priorizar personas sobre procesos, aceptar que los requerimientos cambian y mantener la simplicidad en producto y proceso."
      },
      {
        "id": "fc2-3.1-4",
        "front": "Las cuatro prácticas básicas de XP",
        "back": "Liberación limitada, semana laboral de 40h, cliente en el sitio y programación en pares. Creada por Kent Beck."
      },
      {
        "id": "fc2-3.1-5",
        "front": "Historias de usuario (XP)",
        "back": "En vez de listar funciones, el cliente describe escenarios con sus necesidades y cómo priorizarlas. Esas historias se dividen en tareas, se planifican, desarrollan, prueban y entregan."
      },
      {
        "id": "fc2-3.1-6",
        "front": "Scrum: enfoque y sprints",
        "back": "Proceso ágil que busca agregar valor al negocio en el menor tiempo, con desarrollo iterativo e incremental. Avanza por sprints de una a cuatro semanas; equipo, calidad y alcance quedan fijos en el sprint."
      },
      {
        "id": "fc2-3.1-7",
        "front": "Los tres roles de Scrum",
        "back": "Product Owner (administra el backlog y define prioridades), Equipo (construye, multidisciplinario y autogestionado, sin jefe, 7±2 personas) y Scrum Master (coach, resuelve impedimentos)."
      },
      {
        "id": "fc2-3.1-8",
        "front": "Regla de oro de los roles de Scrum",
        "back": "El Scrum Master y el Product Owner NUNCA pueden ser la misma persona."
      }
    ]
  },
  "4.1": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-4.1-1",
          "q": "Un modelo se construye usando mecanismos de abstracción que realzan los detalles importantes y minimizan los irrelevantes.",
          "a": true,
          "explain": "Sí. Esa es la gracia del modelo: una representación de la realidad que destaca lo importante y deja de lado el ruido."
        },
        {
          "id": "tf2-4.1-2",
          "q": "La diferencia fundamental del diagrama de actividad frente a un diagrama de flujo es que puede mostrar procesamiento en paralelo.",
          "a": true,
          "explain": "Tal cual. Gráficamente se parece al diagrama de flujo, pero su distintivo es que muestra cosas en paralelo, ideal para workflow y multihilo."
        },
        {
          "id": "tf2-4.1-3",
          "q": "El estado inicial de un diagrama de actividad se representa con un círculo que tiene un punto en el centro de su interior.",
          "a": false,
          "explain": "Ojo: el inicial es el círculo pintado de negro. El que tiene un punto en el centro es el estado final. Es un cambio fácil de confundir."
        },
        {
          "id": "tf2-4.1-4",
          "q": "El diagrama de actividad muestra con total claridad los enlaces entre las acciones y los objetos.",
          "a": false,
          "explain": "Justo esa es su debilidad: NO muestra claramente esos enlaces. Para eso es mucho más apropiado el diagrama de secuencia, por eso conviene combinarlo."
        },
        {
          "id": "tf2-4.1-5",
          "q": "La versión vigente de BPMN es la 2.0, surgida en 2009.",
          "a": true,
          "explain": "Correcto. BPMN tuvo su primera versión en mayo de 2004, y la que sigue vigente es BPMN 2.0, de 2009."
        }
      ],
      "mc": [
        {
          "id": "mc2-4.1-1",
          "q": "Según Alan Davis, ¿para qué se emplea un modelo?",
          "options": [
            "Para responder un conjunto definido de preguntas sobre la realidad",
            "Para reemplazar por completo a la realidad que está siendo estudiada",
            "Para documentar de forma exhaustiva cada detalle del sistema real",
            "Para garantizar que no exista ningún error en el diseño propuesto"
          ],
          "correctIndex": 0,
          "explain": "Davis dice que el modelo responde a un conjunto bien definido de preguntas sobre la realidad modelada, dentro de una tolerancia adecuada. No reemplaza la realidad ni garantiza cero errores."
        },
        {
          "id": "mc2-4.1-2",
          "q": "¿Cómo se representa una Decisión en el diagrama de actividad?",
          "options": [
            "Con un rombo de varias salidas con guardas excluyentes",
            "Con una barra que divide la transición en hilos paralelos",
            "Con un círculo pintado de negro entero en su interior",
            "Con una caja de extremos redondeados con una descripción"
          ],
          "correctIndex": 0,
          "explain": "La Decisión es un rombo: una o más entradas y dos o más salidas, cada una con condición de guarda de exclusión mutua. Las otras describen barra, estado inicial y actividad."
        },
        {
          "id": "mc2-4.1-3",
          "q": "¿Qué hace la \"unión\" (merge) en una barra de sincronización?",
          "options": [
            "Divide una transición en dos o más hilos paralelos distintos",
            "Coloca una condición de guarda escrita entre corchetes",
            "Espera que todos los hilos activos lleguen para seguir",
            "Marca el punto exacto donde finaliza toda la actividad"
          ],
          "correctIndex": 2,
          "explain": "La unión (merge) espera que todos los hilos activos lleguen para generar las transiciones salientes. Dividir es el split; la guarda y el final son otros elementos."
        },
        {
          "id": "mc2-4.1-4",
          "q": "¿Qué es BPM según la guía CBOK de la ABPMP?",
          "options": [
            "Una notación gráfica para diagramar los procesos del negocio de la empresa",
            "Un lenguaje de programación visual gráfica de alto nivel para procesos",
            "Un tipo de diagrama que muestra el procesamiento en paralelo de tareas",
            "Un enfoque sistemático para gestionar procesos de punta a punta"
          ],
          "correctIndex": 3,
          "explain": "BPM es un enfoque sistemático para identificar, documentar, ejecutar, medir y controlar procesos, manuales y automatizados, alineados con la estrategia. La notación es BPMN, no BPM."
        },
        {
          "id": "mc2-4.1-5",
          "q": "¿Cuál fue el objetivo principal al crear BPMN?",
          "options": [
            "Lograr una notación que entiendan negocio e ingeniería",
            "Reemplazar al lenguaje UML en el modelado de software",
            "Acelerar la programación con código fuente autogenerado",
            "Definir la arquitectura interna de los sistemas distribuidos"
          ],
          "correctIndex": 0,
          "explain": "BPMN buscaba una notación comprensible tanto para profesionales del negocio como para Ingenieros de Software, un lenguaje común entre diseño e implementación. No reemplaza UML ni autogenera código."
        }
      ],
      "ms": [
        {
          "id": "ms2-4.1-1",
          "q": "¿Cuáles de estas son características de los modelos según el texto?",
          "options": [
            "No es la realidad, sino la realidad que se está modelando",
            "Respeta una cierta forma de construcción",
            "Debe permitir mostrar o predecir características de la realidad",
            "Su uso es más económico que el de la realidad misma",
            "Reemplaza definitivamente a la realidad que representa"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son las características del texto. La última es falsa: el modelo no reemplaza la realidad, es una representación de ella."
        },
        {
          "id": "ms2-4.1-2",
          "q": "¿Cuáles de estos son usos comunes del diagrama de actividad?",
          "options": [
            "Describir acciones de una operación y su efecto en los objetos",
            "Mostrar cómo se realiza un caso de uso por pasos de ejecución",
            "Representar cómo funciona un dominio (roles, tareas, organización)",
            "Describir la dinámica de procesos concurrentes",
            "Definir la estructura de la base de datos relacional"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son los usos que lista el texto. Modelar la base de datos relacional no es uno de ellos: el diagrama de actividad va sobre comportamiento, no sobre datos."
        },
        {
          "id": "ms2-4.1-3",
          "q": "¿Cuáles de estos son elementos de conexión de BPMN?",
          "options": [
            "Pool",
            "Lane",
            "Gateway",
            "Evento",
            "Actividad"
          ],
          "correctIndexes": [],
          "explain": "Ninguno es de conexión. Pool y lane son contenedores (swimlanes); gateway, evento y actividad son elementos de flujo. Los de conexión son flujo de secuencia, flujo de mensaje y asociación."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-4.1-1",
        "front": "¿Qué es un modelo?",
        "back": "Una representación de la realidad (o una porción) que intenta reflejar su apariencia y comportamiento, construido con abstracción para realzar lo importante y minimizar lo irrelevante."
      },
      {
        "id": "fc2-4.1-2",
        "front": "Modelo según Alan Davis",
        "back": "Se emplea para responder a un conjunto bien definido de preguntas sobre la realidad modelada, dentro de una tolerancia adecuada para el propósito establecido."
      },
      {
        "id": "fc2-4.1-3",
        "front": "Modelado del negocio: ¿para qué?",
        "back": "Es describir los procesos de una empresa para comprender los negocios del cliente, y así poder recomendarle qué informatizar o cómo acoplar nuevas funcionalidades a lo existente."
      },
      {
        "id": "fc2-4.1-4",
        "front": "Diagrama de actividad vs. diagrama de flujo",
        "back": "Se parecen gráficamente, pero la diferencia fundamental es que el de actividad puede mostrar procesamiento en paralelo. Detalla cómo se ejecutan las acciones, cuándo y qué rol las realiza."
      },
      {
        "id": "fc2-4.1-5",
        "front": "Estados inicial y final (diagrama de actividad)",
        "back": "Inicial: círculo pintado de negro en su interior. Final: círculo con un punto en el centro de su interior."
      },
      {
        "id": "fc2-4.1-6",
        "front": "Decisión y barra de sincronización",
        "back": "Decisión: rombo con salidas de guarda excluyente. Barra: split (divide en hilos paralelos) y merge (espera a todos los hilos para seguir)."
      },
      {
        "id": "fc2-4.1-7",
        "front": "Debilidad del diagrama de actividad",
        "back": "No muestra claramente los enlaces entre acciones y objetos; para eso es mejor el diagrama de secuencia. Conviene combinarlo con otras técnicas."
      },
      {
        "id": "fc2-4.1-8",
        "front": "BPM vs. BPMN",
        "back": "BPM (Business Process Management) es el enfoque sistemático para gestionar procesos de punta a punta. BPMN es la notación gráfica estándar (versión vigente 2.0, de 2009)."
      }
    ]
  },
  "5.1": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-5.1-1",
          "q": "La extracción de requerimientos es el primer paso del proceso de desarrollo.",
          "a": true,
          "explain": "Sí. Antes de cualquier cosa hay que sacarle al cliente qué necesita, y para eso están técnicas como la entrevista, el cuestionario y la observación directa."
        },
        {
          "id": "tf2-5.1-2",
          "q": "Las preguntas cerradas permiten que el entrevistado se explaye y muestre su vocabulario.",
          "a": false,
          "explain": "Eso es de las preguntas abiertas. Las cerradas limitan la respuesta (sí/no o un dato puntual) y acortan el tiempo, pero pierden riqueza de detalle."
        },
        {
          "id": "tf2-5.1-3",
          "q": "La estructura piramidal arranca con preguntas cerradas y luego amplía con preguntas abiertas.",
          "a": true,
          "explain": "Correcto. La pirámide es inductiva: empieza cerrada (detallada) y abre, ideal para involucrar al entrevistado poco participativo."
        },
        {
          "id": "tf2-5.1-4",
          "q": "La duración máxima recomendada de una entrevista ronda entre 45 minutos y una hora.",
          "a": true,
          "explain": "Tal cual. El texto sugiere que la entrevista dure como máximo entre 45 minutos y una hora."
        },
        {
          "id": "tf2-5.1-5",
          "q": "Grabar la entrevista siempre es la mejor opción y nunca incomoda al entrevistado.",
          "a": false,
          "explain": "No. Grabar da un registro completo, pero puede poner nervioso al entrevistado; si lo notás incómodo, mejor cortar la grabación y pasar a tomar notas."
        }
      ],
      "mc": [
        {
          "id": "mc2-5.1-1",
          "q": "¿Cuál de estas es la definición de entrevista en el texto?",
          "options": [
            "Conversación dirigida con un propósito específico",
            "Visita presencial para ver cómo se ejecuta el trabajo",
            "Conjunto de preguntas con un objetivo en particular",
            "Muestreo de los integrantes de la organización"
          ],
          "correctIndex": 0,
          "explain": "La entrevista es una conversación dirigida con un propósito específico, en formato de preguntas y respuestas. La visita es observación directa y el conjunto de preguntas es el cuestionario."
        },
        {
          "id": "mc2-5.1-2",
          "q": "¿Qué busca una pregunta de sondeo o exploratoria?",
          "options": [
            "Ir más allá de la respuesta inicial para ampliar o aclarar",
            "Acotar la respuesta del entrevistado a un sí o un no concreto",
            "Cerrar la entrevista directamente con una conclusión definitiva",
            "Obtener un único dato puntual y bien específico del proceso"
          ],
          "correctIndex": 0,
          "explain": "Las de sondeo buscan ir más allá de la respuesta inicial, ampliar o clarificar (\"¿por qué?\", \"¿un ejemplo?\"). Acotar a sí/no o pedir un dato puntual es de las cerradas."
        },
        {
          "id": "mc2-5.1-3",
          "q": "¿Cuál es una desventaja de las preguntas abiertas?",
          "options": [
            "Resultan aburridas y poco profundas para el entrevistado",
            "Acortan demasiado el escaso tiempo disponible de la charla",
            "El entrevistador puede perder el control con info irrelevante",
            "Hacen perder la riqueza del detalle aportado por el entrevistado"
          ],
          "correctIndex": 2,
          "explain": "Con las abiertas el entrevistador puede perder el control al aparecer información irrelevante. Lo de aburridas y perder riqueza es desventaja de las cerradas."
        },
        {
          "id": "mc2-5.1-4",
          "q": "¿Cuántos objetivos principales se recomienda definir para la entrevista?",
          "options": [
            "Entre uno y dos puntos centrales",
            "Entre cuatro y seis puntos principales",
            "Entre ocho y diez puntos detallados",
            "Tantos como roles haya en la organización"
          ],
          "correctIndex": 1,
          "explain": "El texto recomienda definir entre cuatro y seis puntos principales a cubrir. Las otras cifras son inventadas o no figuran."
        },
        {
          "id": "mc2-5.1-5",
          "q": "¿Cómo es la estructura en diamante?",
          "options": [
            "Abre con preguntas generales y luego cierra con preguntas cerradas",
            "Arranca cerrada y solamente amplía con preguntas abiertas al final",
            "Usa únicamente preguntas de sondeo desde el principio hasta el fin",
            "Cierra, abre y vuelve a cerrar con preguntas específicas"
          ],
          "correctIndex": 3,
          "explain": "El diamante combina: empieza con cerradas específicas, pasa a abiertas generales, y termina con cerradas específicas. Es lo mejor de la pirámide y el embudo juntos."
        }
      ],
      "ms": [
        {
          "id": "ms2-5.1-1",
          "q": "¿Cuáles son las tres técnicas básicas de extracción de requerimientos del apunte?",
          "options": [
            "Entrevista",
            "Cuestionario",
            "Observación directa",
            "Encuesta telefónica",
            "Prototipado rápido"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres básicas son entrevista, cuestionario y observación directa. La encuesta telefónica y el prototipado no figuran como técnicas básicas en esta sección."
        },
        {
          "id": "ms2-5.1-2",
          "q": "¿Cuáles de estos son pasos de la planificación de la entrevista?",
          "options": [
            "Lectura de antecedentes de la organización",
            "Determinar los objetivos de la entrevista",
            "Seleccionar a quién se entrevistará",
            "Preparación del entrevistado (avisar y acordar momento)",
            "Redactar el contrato de servicios con el cliente"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Los primeros cuatro son pasos de la planificación (junto con determinar tipo y estructura de preguntas). Redactar el contrato no es parte de planificar la entrevista."
        },
        {
          "id": "ms2-5.1-3",
          "q": "¿Cuáles de estas afirmaciones sobre las estructuras de entrevista son correctas?",
          "options": [
            "La piramidal tiene enfoque inductivo",
            "El embudo arranca con cerradas y termina con abiertas",
            "El embudo sirve cuando el entrevistado necesita expresarse",
            "El diamante tiene enfoque combinado",
            "La piramidal sirve para el entrevistado poco participativo"
          ],
          "correctIndexes": [
            0,
            2,
            3,
            4
          ],
          "explain": "Todas son correctas salvo la del embudo: el embudo es deductivo, arranca con abiertas generales y reduce con cerradas (no al revés). Esa está dada vuelta a propósito."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-5.1-1",
        "front": "Las tres técnicas básicas de extracción de requerimientos",
        "back": "Entrevista (conversación dirigida con propósito), cuestionario (preguntas con un objetivo) y observación directa (visita presencial para ver cómo se trabaja)."
      },
      {
        "id": "fc2-5.1-2",
        "front": "¿Qué es la entrevista?",
        "back": "Una conversación dirigida con un propósito específico, en formato de preguntas y respuestas, para recopilar información sobre opiniones, metas, procedimientos y cultura de la organización."
      },
      {
        "id": "fc2-5.1-3",
        "front": "Tipos de preguntas en la entrevista",
        "back": "Abiertas (el entrevistado se explaya), cerradas (limitan la respuesta a sí/no o dato puntual) y de sondeo/exploratorias (van más allá para ampliar o clarificar)."
      },
      {
        "id": "fc2-5.1-4",
        "front": "Ventajas y desventajas de preguntas abiertas",
        "back": "Ventaja: muestran vocabulario, dan riqueza y detalle, simplifican la charla. Desventaja: el entrevistador puede perder el control con información irrelevante."
      },
      {
        "id": "fc2-5.1-5",
        "front": "Pasos de la planificación de la entrevista",
        "back": "Lectura de antecedentes, determinar objetivos (4 a 6 puntos), seleccionar a quién entrevistar, preparar al entrevistado, y determinar el tipo y estructura de las preguntas."
      },
      {
        "id": "fc2-5.1-6",
        "front": "Estructura piramidal",
        "back": "Enfoque inductivo. Arranca con preguntas cerradas (detalladas) y luego amplía con abiertas. Sirve para involucrar al entrevistado poco participativo."
      },
      {
        "id": "fc2-5.1-7",
        "front": "Estructura en embudo",
        "back": "Enfoque deductivo. Comienza con preguntas abiertas generales y luego reduce con cerradas. Se usa cuando el entrevistado necesita expresarse."
      },
      {
        "id": "fc2-5.1-8",
        "front": "Estructura en diamante",
        "back": "Enfoque combinado. Empieza con cerradas específicas, pasa a abiertas generales y termina con cerradas específicas: lo mejor de la pirámide y el embudo."
      }
    ]
  },
  "5.2": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-5.2-1",
          "q": "El cuestionario sirve para conocer la opinión sobre un proyecto cuando hay tantas personas involucradas que entrevistarlas a todas sería imposible.",
          "a": true,
          "explain": "Tal cual lo dice el texto: uno de los usos del cuestionario es justamente sondear a un montón de gente que no podrías entrevistar una por una."
        },
        {
          "id": "tf2-5.2-2",
          "q": "Las preguntas de mayor controversia conviene ubicarlas al principio del cuestionario para sacarlas de encima rápido.",
          "a": false,
          "explain": "Es al revés: las controvertidas van al final. Al principio van las importantes para quien contesta, pero no las más polémicas."
        },
        {
          "id": "tf2-5.2-3",
          "q": "La observación directa permite detectar procedimientos informales que pueden no estar documentados.",
          "a": true,
          "explain": "Sí: yendo a mirar cómo se labura de verdad aparecen esos procedimientos informales que en una entrevista nadie te menciona."
        },
        {
          "id": "tf2-5.2-4",
          "q": "Una pregunta tendenciosa es aquella en la que ponés dos preguntas juntas y se te escapa media respuesta.",
          "a": false,
          "explain": "Eso es la pregunta doble. La tendenciosa es cuando metés tu opinión y condicionás al que responde, como '¿qué opina de este obsoleto modo de trabajo?'."
        },
        {
          "id": "tf2-5.2-5",
          "q": "El vocabulario del cuestionario debe ser el mismo que el del destinatario, específico, con preguntas cortas pero precisas.",
          "a": true,
          "explain": "Exacto: el texto recomienda usar el vocabulario del destinatario, ser específico y hacer preguntas cortas pero precisas."
        }
      ],
      "mc": [
        {
          "id": "mc2-5.2-1",
          "q": "Según el texto, ¿qué define a una pregunta tendenciosa?",
          "options": [
            "Reunir dos consultas distintas dentro de un mismo enunciado demasiado largo",
            "Mostrar la opinión propia sobre algún proceso evaluado",
            "Usar vocabulario distinto al que maneja la persona que tiene que responder",
            "Ubicar los temas más controvertidos al inicio en vez de dejarlos al final"
          ],
          "correctIndex": 1,
          "explain": "La tendenciosa es cuando dejás ver tu opinión sobre el proceso y limitás al entrevistado a exponer otro punto de vista."
        },
        {
          "id": "mc2-5.2-2",
          "q": "¿Qué busca aportar específicamente la observación directa frente a las entrevistas?",
          "options": [
            "Recoger por escrito las opiniones de las personas ubicadas en áreas separadas entre sí",
            "Fijar una fecha límite y dar instrucciones para el envío de las respuestas pendientes",
            "Ver cómo se trabaja sin limitarse solo a lo que dicen las respuestas",
            "Dejar un buzón en horario laboral para que el personal entregue lo completado luego"
          ],
          "correctIndex": 2,
          "explain": "La observación directa es ir y mirar cómo se labura de verdad, sin quedarte solo con lo que te cuentan en las entrevistas."
        },
        {
          "id": "mc2-5.2-3",
          "q": "¿Cuál de estas NO figura como forma de aplicar un cuestionario en el texto?",
          "options": [
            "Entregarlo en persona y recogerlo una vez que esté completo",
            "Reunir a las personas en un espacio para que respondan todas allí",
            "Grabar en audio las respuestas para transcribirlas más tarde",
            "Enviarlo por email a filiales lejanas con una fecha límite"
          ],
          "correctIndex": 2,
          "explain": "Lo de grabar en audio no aparece. Las formas que sí lista son reunir, entregar en persona, dejar buzón en horario laboral y enviar por email."
        },
        {
          "id": "mc2-5.2-4",
          "q": "Según las recomendaciones finales, ¿cómo conviene ordenar las preguntas?",
          "options": [
            "Saltando entre temas variados para no aburrir al entrevistado",
            "Empezando por las más controvertidas para destrabarlas temprano",
            "Con secuencia lógica, cubriendo cada tema sin ir y volver",
            "Priorizando siempre las preguntas más cortas sobre las largas"
          ],
          "correctIndex": 2,
          "explain": "El texto pide ser prolijo y mantener secuencia lógica, cubriendo cada tema sin andar yendo y volviendo sobre distintos aspectos."
        }
      ],
      "ms": [
        {
          "id": "ms2-5.2-1",
          "q": "¿Cuáles de los siguientes son usos válidos del cuestionario según el texto?",
          "options": [
            "Entrevistar a personas ubicadas en áreas separadas entre sí",
            "Conocer opinión en proyectos con muchísima gente involucrada",
            "Reemplazar por completo a la observación directa del trabajo",
            "Servir como estudio exploratorio o preliminar de un proyecto",
            "Sondear problemas del sistema actual para luego solucionarlos"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Los cuatro usos del texto son áreas separadas, mucha gente, estudio exploratorio y sondeo de problemas. Reemplazar a la observación directa no figura como uso."
        },
        {
          "id": "ms2-5.2-2",
          "q": "¿Cuáles de estas son ventajas que el texto atribuye explícitamente a la observación directa?",
          "options": [
            "Identificar relaciones entre quienes toman decisiones y otros miembros",
            "Entender por qué se hace de determinada manera el trabajo",
            "Detectar procedimientos informales quizá no documentados",
            "Calcular tiempos y costos exactos del proyecto completo",
            "Observar elementos físicos no detectados previamente"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "El texto lista relaciones, el porqué, los procedimientos informales y los elementos físicos. Calcular tiempos y costos no aparece como ventaja de la observación."
        },
        {
          "id": "ms2-5.2-3",
          "q": "¿Cuáles de estas afirmaciones describen correctamente a las preguntas dobles según el texto?",
          "options": [
            "Consisten en mostrar tu opinión sobre un proceso evaluado",
            "Hacen sentir limitado al entrevistado para dar su punto de vista",
            "Son la forma recomendada de cubrir varios temas a la vez",
            "Conviene ubicarlas siempre al final del cuestionario completo",
            "Mejoran la precisión al juntar dos consultas en un enunciado"
          ],
          "correctIndexes": [],
          "explain": "Ninguna sirve. La doble es poner dos preguntas juntas (problema, no recomendación); las descripciones acá mezclan la tendenciosa o inventan ventajas que el texto no da."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-5.2-1",
        "front": "¿Qué es un cuestionario?",
        "back": "Técnica para recoger opiniones, creencias, posturas, conductas y características de personas clave involucradas en un sistema actual o uno nuevo."
      },
      {
        "id": "fc2-5.2-2",
        "front": "Vocabulario del cuestionario",
        "back": "Debe ser el mismo que el del destinatario, específico y con preguntas cortas pero precisas."
      },
      {
        "id": "fc2-5.2-3",
        "front": "¿Dónde van las preguntas controvertidas?",
        "back": "Al final. Al principio van las importantes para quien contesta, pero no las de mayor controversia."
      },
      {
        "id": "fc2-5.2-4",
        "front": "Observación directa",
        "back": "Recorrer la organización para ver cómo es el trabajo en los sectores afectados, sin limitarse a lo que dicen las entrevistas."
      },
      {
        "id": "fc2-5.2-5",
        "front": "Pregunta tendenciosa",
        "back": "Cuando mostrás tu opinión sobre un proceso (ej: '¿qué opina de este obsoleto modo de trabajo?'), limitando al entrevistado."
      },
      {
        "id": "fc2-5.2-6",
        "front": "Pregunta doble",
        "back": "Poner dos preguntas juntas: el que responde se concentra en una y omite la otra, y el entrevistador puede olvidar que falta parte."
      },
      {
        "id": "fc2-5.2-7",
        "front": "Forma de aplicar por email",
        "back": "Enviarlo a empleados de filiales más lejanas, fijando una fecha límite e instrucciones para el envío."
      }
    ]
  },
  "6.1": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-6.1-1",
          "q": "Según el estudio del Standish Group sobre proyectos del año 2000, solo el 28% de los proyectos de software se realizaron con éxito.",
          "a": true,
          "explain": "Sí: 28% exitosos, 23% cancelados y 49% completados pero con demoras, sobrecostos o funcionalidades faltantes."
        },
        {
          "id": "tf2-6.1-2",
          "q": "Un error en el requerimiento detectado recién en la fase de prueba puede multiplicar su costo hasta por 5.000.",
          "a": true,
          "explain": "Tal cual: cuanto más tarde lo detectás, más caro sale. En requerimientos es imperceptible; en prueba puede multiplicarse hasta por 5.000."
        },
        {
          "id": "tf2-6.1-3",
          "q": "La validación de requerimientos la realiza el desarrollador sin necesidad de que el cliente confirme nada.",
          "a": false,
          "explain": "Al revés: la validación la hace el cliente, que debe indicar si lo especificado son los requerimientos que espera del nuevo sistema."
        },
        {
          "id": "tf2-6.1-4",
          "q": "Según el estudio citado, el 23% de los proyectos se canceló antes de ser completado o nunca se implementó.",
          "a": true,
          "explain": "Correcto: 23% cancelados o nunca implementados, junto al 28% exitoso y el 49% completado con problemas."
        },
        {
          "id": "tf2-6.1-5",
          "q": "Si los requerimientos son ambiguos, igual garantizan una única interpretación compartida entre usuarios y desarrolladores.",
          "a": false,
          "explain": "Justamente la ambigüedad genera interpretaciones diferentes entre usuarios y desarrolladores, creando desacuerdo entre las partes."
        }
      ],
      "mc": [
        {
          "id": "mc2-6.1-1",
          "q": "Según Pfleeger, ¿cómo se define un requerimiento?",
          "options": [
            "Un documento formal que reemplaza por completo a la validación final del cliente",
            "Una restricción técnica que limita la elección de la plataforma y el lenguaje",
            "Una característica o descripción de algo que el sistema puede hacer",
            "Una etapa del proceso donde se analiza toda la información ya recopilada"
          ],
          "correctIndex": 2,
          "explain": "Para Pfleeger, un requerimiento es una característica del sistema o descripción de algo que puede hacer para satisfacer su propósito."
        },
        {
          "id": "mc2-6.1-2",
          "q": "¿Cuál es el orden correcto de las etapas de la ingeniería de requerimientos?",
          "options": [
            "Validación, extracción, análisis y especificación formal final",
            "Análisis, especificación, extracción y validación posterior del cliente",
            "Especificación, validación, extracción y análisis técnico previo",
            "Extracción, análisis, especificación y validación del cliente"
          ],
          "correctIndex": 3,
          "explain": "Primero extraés (entrevistas, cuestionarios), después analizás, luego especificás en un documento formal y al final el cliente valida."
        },
        {
          "id": "mc2-6.1-3",
          "q": "¿Qué es la ingeniería de requerimientos?",
          "options": [
            "El proceso de programar las funciones que el nuevo sistema deberá ejecutar",
            "El proceso de elaborar las ideas y necesidades iniciales del usuario",
            "El proceso de validar el código final contra el presupuesto que se fijó",
            "El proceso de cancelar los proyectos que superan ampliamente el costo estimado"
          ],
          "correctIndex": 1,
          "explain": "Es el proceso de elaborar las ideas y necesidades iniciales de los usuarios, expresándolas en una especificación de requerimientos."
        },
        {
          "id": "mc2-6.1-4",
          "q": "¿Cuál de estos figura como criterio de un proyecto terminado satisfactoriamente?",
          "options": [
            "El producto final cubrió las expectativas y necesidades del cliente",
            "El equipo aplicó metodologías ágiles reconocidas durante todo el desarrollo",
            "Los requisitos cambiaron varias veces para adaptarse mejor al mercado",
            "La planificación se ajustó sobre la marcha sin basarse en los requisitos"
          ],
          "correctIndex": 0,
          "explain": "Entre los criterios están: no hubo desviaciones de fechas, se mantuvieron costos, el producto cubrió expectativas y funcionó correctamente."
        }
      ],
      "ms": [
        {
          "id": "ms2-6.1-1",
          "q": "¿Cuáles de estas son razones que da el texto para hacer ingeniería de requerimientos?",
          "options": [
            "Muchos errores en los requerimientos se descubren en esta etapa",
            "Los errores detectados más adelante suelen ser más costosos",
            "Sin especificación podríamos obtener el producto incorrecto",
            "Garantiza que ningún proyecto supere jamás su presupuesto",
            "Los requerimientos ambiguos generan desacuerdo entre las partes"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Las cuatro razones del texto son esas. Garantizar que ningún proyecto supere el presupuesto no se afirma; sería una promesa exagerada."
        },
        {
          "id": "ms2-6.1-2",
          "q": "Según el texto, ¿cuáles son causas de problemas en proyectos?",
          "options": [
            "Requisitos deficientes, incompletos o cambiantes durante el proyecto",
            "Planificación y estimaciones no realizadas en base a los requisitos",
            "Validación temprana y exhaustiva por parte del cliente final",
            "Estimaciones poco realistas de los tiempos y los costos",
            "Falta de implicancia del usuario en el proceso de desarrollo"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "La validación temprana y exhaustiva es lo opuesto a un problema. Las causas son requisitos deficientes, mala planificación, estimaciones irreales y falta de usuario."
        },
        {
          "id": "ms2-6.1-3",
          "q": "Según el estudio del Standish Group, ¿cuáles de estas cifras son correctas?",
          "options": [
            "28% de los proyectos se realizaron con éxito",
            "23% se cancelaron o nunca se implementaron",
            "49% se completó pero con demoras o sobrecostos",
            "Se analizaron 280.000 proyectos del año 2000",
            "El 70% terminó dentro del presupuesto previsto"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cifras del estudio son 28% éxito, 23% cancelados, 49% con problemas, sobre 280.000 proyectos. Lo del 70% dentro de presupuesto es inventado."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-6.1-1",
        "front": "Requerimiento según Pfleeger",
        "back": "Característica del sistema o descripción de algo que el sistema puede hacer para satisfacer su propósito."
      },
      {
        "id": "fc2-6.1-2",
        "front": "Ingeniería de requerimientos",
        "back": "Proceso de elaborar las ideas y necesidades iniciales de los usuarios y expresarlas en una especificación de requerimientos del sistema."
      },
      {
        "id": "fc2-6.1-3",
        "front": "Etapas de la ingeniería de requerimientos",
        "back": "Extracción, análisis, especificación en documento formal y validación por parte del cliente."
      },
      {
        "id": "fc2-6.1-4",
        "front": "¿Quién valida los requerimientos?",
        "back": "El cliente: debe indicar si lo especificado son los requerimientos que espera del nuevo sistema."
      },
      {
        "id": "fc2-6.1-5",
        "front": "Resultados del estudio Standish Group (2000)",
        "back": "Sobre 280.000 proyectos: 28% exitosos, 23% cancelados, 49% completados con demoras, sobrecostos o funcionalidades faltantes."
      },
      {
        "id": "fc2-6.1-6",
        "front": "Costo del error según la fase",
        "back": "En la fase de requerimientos es casi imperceptible; el mismo error detectado en la fase de prueba puede multiplicar el costo hasta por 5.000."
      },
      {
        "id": "fc2-6.1-7",
        "front": "Consecuencia de requerimientos ambiguos",
        "back": "Generan interpretaciones diferentes entre usuarios y desarrolladores, creando desacuerdo entre las partes."
      }
    ]
  },
  "6.2": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-6.2-1",
          "q": "Definir claramente los límites del sistema permite calcular los tiempos y costos que el proceso insumirá.",
          "a": true,
          "explain": "Sí: tener claros los límites te deja estimar tiempos y costos. Si no sabés qué entra y qué no, no podés calcular nada."
        },
        {
          "id": "tf2-6.2-2",
          "q": "El dominio de la aplicación representa cómo va a ser construido el producto de software.",
          "a": false,
          "explain": "Eso es el dominio del software. El dominio de la aplicación representa qué hay que hacer, donde existe el requerimiento del cliente."
        },
        {
          "id": "tf2-6.2-3",
          "q": "Un requerimiento no funcional describe una restricción que limita la elección al construir la solución, como performance o seguridad.",
          "a": true,
          "explain": "Correcto: el no funcional pone restricciones (plataforma, lenguaje, eficiencia, seguridad). Es el 'cómo de bien' lo hace."
        },
        {
          "id": "tf2-6.2-4",
          "q": "Las áreas grises en la frontera del sistema se buscan maximizar para tener más flexibilidad en la negociación.",
          "a": false,
          "explain": "Al revés: se buscan minimizar para evitar inconvenientes posteriores. Las áreas grises son justamente lo que no queda claro."
        },
        {
          "id": "tf2-6.2-5",
          "q": "Incluir requisitos innecesarios que el usuario no pidió ni emplea figura como un defecto común que genera costo adicional.",
          "a": true,
          "explain": "Sí: la inclusión de requisitos innecesarios es uno de los defectos listados, porque suma funcionalidades que nadie usa pero cuestan."
        }
      ],
      "mc": [
        {
          "id": "mc2-6.2-1",
          "q": "¿Qué representa el dominio del software?",
          "options": [
            "El lugar donde existe el requerimiento original del cliente",
            "El qué hay que hacer para reconocer y entender el problema",
            "La solución al problema que interactúa con la aplicación",
            "El conjunto de stakeholders que negocian las áreas grises"
          ],
          "correctIndex": 2,
          "explain": "El dominio del software provee la solución al problema e interactúa con el dominio de aplicación: representa cómo se construye el producto."
        },
        {
          "id": "mc2-6.2-2",
          "q": "¿Cuál de estos es un ejemplo de requerimiento no funcional según la tabla del texto?",
          "options": [
            "Registrar pedidos especificando entradas, proceso y salidas",
            "Las consultas deben responderse dentro de los cinco segundos",
            "Controlar y verificar los datos antes de actualizar registros",
            "Definir la función de transformación de entradas en salidas"
          ],
          "correctIndex": 1,
          "explain": "Responder en cinco segundos es una restricción de performance: requerimiento no funcional. Lo de registrar pedidos es el ejemplo funcional."
        },
        {
          "id": "mc2-6.2-3",
          "q": "Según el [info] del texto, ¿qué puede influir en la definición de los límites del sistema?",
          "options": [
            "Únicamente las preferencias personales del analista que está a cargo",
            "El orden en que se redactan las preguntas del cuestionario inicial",
            "Factores técnicos a respetar o cuestiones económicas de presupuesto",
            "La cantidad de stakeholders que estén presentes en cada reunión inicial"
          ],
          "correctIndex": 2,
          "explain": "El texto dice que los límites no son arbitrarios: pueden verse influidos por factores técnicos o cuestiones económicas como el presupuesto."
        },
        {
          "id": "mc2-6.2-4",
          "q": "¿Por qué la ingeniería de requerimientos es tan clave según 'el problema de la abstracción'?",
          "options": [
            "Porque el software se visualiza fácilmente con un plano detallado como una casa",
            "Porque el cliente recién con el producto ve que no era lo que quería",
            "Porque los prototipos garantizan que el cliente siempre quede conforme y satisfecho",
            "Porque permite saltear los detalles y trabajar con descripciones bien genéricas"
          ],
          "correctIndex": 1,
          "explain": "El software no es tangible como una casa: aun con prototipos, el cliente puede darse cuenta con el producto terminado de que no era lo que esperaba."
        }
      ],
      "ms": [
        {
          "id": "ms2-6.2-1",
          "q": "¿Cuáles de estos figuran como defectos comunes en los requisitos?",
          "options": [
            "Cliente/usuarios poco involucrados en definir las necesidades",
            "Cambios en los requerimientos sin gestionar el impacto",
            "Inclusión de requisitos innecesarios que generan costo extra",
            "Definición de requisitos ambiguos con dos interpretaciones",
            "Omisión de necesidades de algún grupo de usuarios distinto"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Todos son defectos listados en el texto: poca implicación, cambios sin gestionar, requisitos innecesarios, ambigüedad e insuficiencia, y omisión de grupos."
        },
        {
          "id": "ms2-6.2-2",
          "q": "¿Cuáles de estos son beneficios de los buenos requisitos según el texto?",
          "options": [
            "Permiten acordar el trabajo entre desarrolladores, usuarios y clientes",
            "Dan base objetiva para estimar recursos como personal y costos",
            "Eliminan por completo la necesidad de validar con el cliente",
            "Permiten acordar los criterios para validar lo especificado",
            "Evitan trabajar a prueba y error reduciendo costos y cambios"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Los beneficios son acuerdo, criterios de validación, base para estimar recursos y evitar prueba y error. Eliminar la validación del cliente no figura."
        },
        {
          "id": "ms2-6.2-3",
          "q": "¿Cuáles de estas afirmaciones sobre el dominio de la aplicación son correctas según el texto?",
          "options": [
            "Es donde existe el requerimiento del cliente del problema",
            "Representa qué hay que hacer y permite reconocer el problema",
            "Su separación del dominio del software es absoluta y fija",
            "Provee la solución técnica interactuando con el hardware",
            "Todo lo relevante para los requerimientos debe aparecer en él"
          ],
          "correctIndexes": [
            0,
            1,
            4
          ],
          "explain": "El dominio de aplicación es el qué, donde está el requerimiento, y ahí debe aparecer todo lo relevante. Su separación es relativa al problema, no absoluta; proveer la solución es del software."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-6.2-1",
        "front": "Límites del sistema",
        "back": "Determinar qué cosas son parte del sistema y cuáles no, definiendo qué eventos del entorno deben tener respuesta. Se trabaja con los stakeholders."
      },
      {
        "id": "fc2-6.2-2",
        "front": "Áreas grises en la frontera",
        "back": "Cuestiones que no queda claro si están dentro de los límites; suelen ser motivo de negociación y se busca minimizarlas."
      },
      {
        "id": "fc2-6.2-3",
        "front": "Dominio de la aplicación",
        "back": "Donde existe el requerimiento del cliente. Representa qué hay que hacer y permite comenzar a reconocer el problema."
      },
      {
        "id": "fc2-6.2-4",
        "front": "Dominio del software",
        "back": "Provee la solución al problema, interactuando con el dominio de aplicación. Representa cómo se construye el producto de software."
      },
      {
        "id": "fc2-6.2-5",
        "front": "Requerimiento funcional",
        "back": "Describe qué hace el sistema: entradas, salidas, interacción con el ambiente y cómo se comporta ante cada estímulo. Define la función de transformación."
      },
      {
        "id": "fc2-6.2-6",
        "front": "Requerimiento no funcional",
        "back": "Restricción sobre el sistema que limita la elección al construir la solución: performance, plataforma, lenguaje, eficiencia, seguridad, portabilidad."
      },
      {
        "id": "fc2-6.2-7",
        "front": "El problema de la abstracción",
        "back": "El software no se visualiza con un plano como una casa; aun con prototipos, el cliente puede ver recién con el producto terminado que no era lo que quería."
      }
    ]
  },
  "7.1": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-7.1-1",
          "q": "El SRS contiene una descripción completa del comportamiento externo del software y debe especificar tanto requerimientos funcionales como no funcionales.",
          "a": true,
          "explain": "Sí: el SRS describe el comportamiento externo del software e incluye tanto los funcionales como los no funcionales."
        },
        {
          "id": "tf2-7.1-2",
          "q": "Los costos, cronogramas y fechas de conclusión del proyecto deben incluirse dentro del SRS.",
          "a": false,
          "explain": "Justamente NO: los requerimientos del proyecto (costos, cronogramas, fechas) quedan fuera del SRS. El SRS describe el qué, no el cuánto sale."
        },
        {
          "id": "tf2-7.1-3",
          "q": "Lo recomendable es que el SRS se redacte con la participación tanto del proveedor como del usuario o cliente.",
          "a": true,
          "explain": "Correcto: puede hacerlo el proveedor o el usuario, pero lo recomendable es que sea con la participación de ambas partes."
        },
        {
          "id": "tf2-7.1-4",
          "q": "Los diseños deben incluirse en el SRS porque comparten la misma audiencia que los requerimientos.",
          "a": false,
          "explain": "Al revés: los diseños se excluyen del SRS porque tienen audiencias diferentes y particionan la documentación."
        },
        {
          "id": "tf2-7.1-5",
          "q": "Cuando el SRS sirve como base para un pedido de cotización, conviene describir los requerimientos de forma más general para abarcar más alternativas.",
          "a": true,
          "explain": "Tal cual: en ese caso no se detalla tanto cada requerimiento, sino que se describe más general para abarcar más opciones del mercado."
        }
      ],
      "mc": [
        {
          "id": "mc2-7.1-1",
          "q": "¿Qué significa la sigla SRS?",
          "options": [
            "System Requirement Standard, el estándar internacional de requerimientos",
            "Software Requirement Specification, la especificación de requerimientos",
            "Software Review Schedule, el cronograma de revisión técnica del software",
            "System Reference Sheet, la hoja de referencia del sistema externo completo"
          ],
          "correctIndex": 1,
          "explain": "SRS es Software Requirement Specification: la especificación de requerimientos de software, con la descripción del comportamiento externo."
        },
        {
          "id": "mc2-7.1-2",
          "q": "¿Cuál de estos aspectos básicos DEBE incluir el SRS?",
          "options": [
            "El cronograma de tiempos con las fechas de conclusión previstas del plan",
            "El plan de administración de configuraciones del producto que se entregará",
            "Las interfaces externas con usuarios, hardware y otros sistemas",
            "El diseño detallado de los módulos internos que se van a programar luego"
          ],
          "correctIndex": 2,
          "explain": "Entre los aspectos que debe incluir están las interfaces externas. Cronogramas, planes de configuración y diseños quedan explícitamente afuera."
        },
        {
          "id": "mc2-7.1-3",
          "q": "¿Qué estándar se menciona para la especificación de requerimientos de software?",
          "options": [
            "El estándar IEEE Std. 830-1998 para especificar requerimientos",
            "El estándar IEEE 610-1990 usado para las definiciones de requerimientos",
            "El estándar del Standish Group basado en los 280.000 proyectos analizados",
            "El estándar de Pfleeger sobre teoría y práctica de la ingeniería de software"
          ],
          "correctIndex": 0,
          "explain": "El estándar para la especificación de requerimientos de software es el IEEE Std. 830-1998, que se recomienda leer."
        },
        {
          "id": "mc2-7.1-4",
          "q": "Según el texto, ¿qué pasa habitualmente con el estándar IEEE 830-1998 en el ámbito laboral?",
          "options": [
            "Se aplica al pie de la letra tal como lo indica la IEEE siempre",
            "Las organizaciones lo ignoran y crean su propio estándar nuevo",
            "Se usa como base haciendo una adaptación según las necesidades",
            "Se reemplazó por la especificación funcional tradicional vigente"
          ],
          "correctIndex": 2,
          "explain": "El texto dice que probablemente no se aplique tal cual, pero es habitual que las organizaciones se basen en él y lo adapten a sus necesidades."
        }
      ],
      "ms": [
        {
          "id": "ms2-7.1-1",
          "q": "¿Cuáles de estos son aspectos básicos que el SRS DEBE incluir?",
          "options": [
            "Funcionalidad: qué debe hacer el software del producto",
            "Interfaces externas con usuarios, hardware y otros sistemas",
            "Rendimiento: velocidad, tiempos de respuesta y recuperación",
            "Cronograma con las fechas de conclusión del proyecto",
            "Restricciones de diseño impuestas como lenguajes y plataformas"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Funcionalidad, interfaces externas, rendimiento, atributos y restricciones de diseño van adentro. El cronograma con fechas es de proyecto y queda afuera."
        },
        {
          "id": "ms2-7.1-2",
          "q": "¿Cuáles de estos elementos NO deben incluirse en el SRS?",
          "options": [
            "Requerimientos del proyecto como costos y cronogramas de tiempos",
            "Diseños, porque tienen audiencias diferentes y particionan la doc",
            "Planes de aseguramiento como el plan de pruebas o configuración",
            "La funcionalidad que describe qué debe hacer el software",
            "Las fechas de conclusión del proyecto a desarrollar"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Quedan afuera los costos/cronogramas, los diseños, los planes de aseguramiento y las fechas de conclusión. La funcionalidad SÍ debe incluirse."
        },
        {
          "id": "ms2-7.1-3",
          "q": "¿Cuáles de estas afirmaciones sobre el SRS son correctas según el texto?",
          "options": [
            "Describe el comportamiento externo completo del software",
            "Una estrategia es analizar todo primero y luego escribirlo",
            "Otra estrategia es ir escribiéndolo a medida que se avanza",
            "Solo puede redactarlo el proveedor, nunca el usuario",
            "Puede servir de base para un pedido de cotización a proveedores"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Lo correcto: describe el comportamiento externo, hay dos estrategias para escribirlo y sirve de base para cotizaciones. Lo del proveedor exclusivo es falso: lo recomendable es ambas partes."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-7.1-1",
        "front": "¿Qué es el SRS?",
        "back": "Software Requirement Specification: documento con la descripción completa del comportamiento externo del software, funcional y no funcional."
      },
      {
        "id": "fc2-7.1-2",
        "front": "Estrategias para escribir el SRS",
        "back": "Una: completar el análisis del problema y luego escribirlo. Otra: ir descomponiéndolo y escribiendo cada sección a medida que se avanza."
      },
      {
        "id": "fc2-7.1-3",
        "front": "¿Quién redacta el SRS?",
        "back": "Puede hacerlo el proveedor (desarrollador) o el usuario/cliente, pero lo recomendable es con la participación de ambas partes."
      },
      {
        "id": "fc2-7.1-4",
        "front": "Aspectos básicos que el SRS DEBE incluir",
        "back": "Funcionalidad, interfaces externas, rendimiento, atributos (portabilidad, seguridad, exactitud) y restricciones de diseño."
      },
      {
        "id": "fc2-7.1-5",
        "front": "Lo que el SRS NO debe incluir",
        "back": "Requerimientos del proyecto (costos, cronogramas, fechas), diseños y planes de aseguramiento del producto (configuración, pruebas)."
      },
      {
        "id": "fc2-7.1-6",
        "front": "El SRS como base para cotización",
        "back": "Puede servir de base para un pedido de cotización; ahí se describe de forma más general para abarcar más alternativas del mercado."
      },
      {
        "id": "fc2-7.1-7",
        "front": "Estándar IEEE Std. 830-1998",
        "back": "Estándar para la especificación de requerimientos de software. En el ámbito laboral suele usarse como base con adaptaciones, no al pie de la letra."
      }
    ]
  },
  "7.2": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-7.2-1",
          "q": "En la etapa de requerimientos, además de saber qué tenemos que hacer, también debemos saber cuánto tenemos que hacer.",
          "a": true,
          "explain": "Tal cual: el texto arranca con eso. Un mismo problema con distintos volúmenes lleva a soluciones distintas, por eso hay que cuantificar."
        },
        {
          "id": "tf2-7.2-2",
          "q": "Diseñar una solución para un pico de 20 autorizaciones por día es equivalente a diseñarla para 5000 por hora, porque la funcionalidad es la misma.",
          "a": false,
          "explain": "Falso. La moraleja del ejemplo de las tarjetas es justo lo contrario: con la misma funcionalidad, el volumen te cambia el diseño de la solución."
        },
        {
          "id": "tf2-7.2-3",
          "q": "Los requisitos estáticos pueden identificarse en un apartado separado de la especificación bajo el título capacidad.",
          "a": true,
          "explain": "Sí, el texto dice que ese tipo de requisitos pueden ir bajo el título capacidad."
        },
        {
          "id": "tf2-7.2-4",
          "q": "Una condición mensurable es la que se puede medir y verificar objetivamente, como un porcentaje y un tiempo de respuesta concretos.",
          "a": true,
          "explain": "Correcto. El ejemplo del texto es 95% de las transacciones en menos de 1 seg: un porcentaje y un tiempo concretos."
        },
        {
          "id": "tf2-7.2-5",
          "q": "Los volúmenes siempre son un problema, por eso conviene asumir que lo son antes de analizarlos.",
          "a": false,
          "explain": "Falso. El texto aclara que los volúmenes no siempre son un problema, pero para saber si lo son o no, deben analizarse."
        }
      ],
      "mc": [
        {
          "id": "mc2-7.2-1",
          "q": "¿Cuál es el propósito de la cuantificación según el texto?",
          "options": [
            "Especificar los requerimientos estáticos y dinámicos vinculados al software o a su interacción humana",
            "Eliminar todo requerimiento dinámico que dependa fuertemente del tiempo de procesamiento de cada lote",
            "Reemplazar por completo los requisitos funcionales por una lista de volúmenes ya medidos y validados",
            "Definir de antemano el presupuesto exacto de hardware necesario para el sistema en plena producción"
          ],
          "correctIndex": 0,
          "explain": "El propósito es especificar los requerimientos estáticos y/o dinámicos vinculados al software o a la interacción humana con él. Las otras tres no figuran."
        },
        {
          "id": "mc2-7.2-2",
          "q": "¿Cuál de los siguientes es un ejemplo de requisito estático?",
          "options": [
            "El número de transacciones procesadas por cada hora de trabajo pico",
            "La cantidad de datos procesados en condiciones de trabajo máximas",
            "El porcentaje de tareas completadas dentro de un período de tiempo",
            "El número de usuarios que se conectarán en simultáneo al sistema"
          ],
          "correctIndex": 3,
          "explain": "El número de usuarios conectados en simultáneo es estático. Las otras tres hablan de transacciones, datos o tareas por período de tiempo, que son dinámicos."
        },
        {
          "id": "mc2-7.2-3",
          "q": "¿Qué caracteriza a los requisitos dinámicos?",
          "options": [
            "Que cuentan terminales y usuarios sin depender de ningún período",
            "Que se agrupan siempre bajo el título capacidad en el documento",
            "Que incluyen transacciones, tareas y datos dentro de ciertos períodos",
            "Que solo aplican a condiciones de trabajo normales y nunca a las máximas"
          ],
          "correctIndex": 2,
          "explain": "Los dinámicos incluyen números de transacciones, tareas y cantidad de datos dentro de ciertos períodos, tanto en condiciones normales como máximas."
        },
        {
          "id": "mc2-7.2-4",
          "q": "En el cuadro de cuantificación de entidades, ¿qué columna indica cuándo una entidad deja de ser útil?",
          "options": [
            "La columna de condición de obsolescencia de la entidad",
            "La columna de crecimiento anual esperado para la entidad",
            "La columna de volumen máximo que la entidad puede alcanzar",
            "La columna de volumen inicial registrado para esa entidad"
          ],
          "correctIndex": 0,
          "explain": "La condición de obsolescencia es la que marca cuándo la entidad deja de ser útil (por ejemplo, 1 año sin pedidos para Clientes)."
        },
        {
          "id": "mc2-7.2-5",
          "q": "Según el cuadro de entidades, ¿cuál es la condición de obsolescencia de las Autorizaciones?",
          "options": [
            "1 año sin pedidos registrados en el sistema",
            "2 meses de hecha la autorización",
            "3000 autorizaciones acumuladas en total",
            "15 autorizaciones nuevas por cada año"
          ],
          "correctIndex": 1,
          "explain": "Para Autorizaciones, la condición de obsolescencia es 2 meses de hecha. El 1 año sin pedidos es de Clientes."
        }
      ],
      "ms": [
        {
          "id": "ms2-7.2-1",
          "q": "¿Cuáles de los siguientes se mencionan como requisitos estáticos?",
          "options": [
            "El número de terminales a ser consideradas",
            "El número de usuarios conectados en simultáneo",
            "La cantidad y tipo de información que se manejará",
            "El número de transacciones procesadas por hora",
            "El porcentaje de transacciones bajo cierto tiempo"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Los estáticos son terminales, usuarios simultáneos e información manejada. Las transacciones por hora y los porcentajes por tiempo son dinámicos."
        },
        {
          "id": "ms2-7.2-2",
          "q": "Según el cuadro de cuantificación de entidades, ¿cuáles de estos valores corresponden a la entidad Clientes?",
          "options": [
            "Volumen inicial de 25 unidades",
            "Crecimiento esperado de 25 por año",
            "Volumen máximo de 500 unidades",
            "Volumen máximo de 3000 unidades",
            "Condición de obsolescencia de 2 meses"
          ],
          "correctIndexes": [
            1,
            2
          ],
          "explain": "Clientes tiene volumen inicial 150, crecimiento 25 por año, máximo 500 y obsolescencia 1 año sin pedidos. El inicial 25, el máximo 3000 y los 2 meses son de Autorizaciones."
        },
        {
          "id": "ms2-7.2-3",
          "q": "¿Cuáles de las siguientes afirmaciones figuran textualmente en la sección?",
          "options": [
            "La cuantificación reemplaza al análisis de requerimientos funcionales",
            "El volumen nunca afecta el diseño de la solución elegida",
            "Los requisitos estáticos siempre deben omitirse de la especificación",
            "Toda entidad debe descartarse al llegar a su volumen inicial",
            "El crecimiento esperado es opcional y no se cuantifica jamás"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. Todas contradicen al texto: la cuantificación complementa (no reemplaza), el volumen sí cambia el diseño, los estáticos pueden ir bajo capacidad, y el cuadro usa crecimiento y volumen máximo, no el inicial, como obsolescencia."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-7.2-1",
        "front": "¿Por qué hay que cuantificar los requerimientos?",
        "back": "Porque un mismo problema, con distintos volúmenes, lleva a soluciones distintas. Además de saber qué hacer, hay que saber cuánto."
      },
      {
        "id": "fc2-7.2-2",
        "front": "Propósito de la cuantificación",
        "back": "Especificar los requerimientos estáticos y/o dinámicos vinculados al software o a la interacción humana con el software en conjunto."
      },
      {
        "id": "fc2-7.2-3",
        "front": "Requisitos estáticos: ejemplos",
        "back": "Número de terminales, número de usuarios conectados en simultáneo, y cantidad y tipo de información a manejar. Pueden ir bajo el título capacidad."
      },
      {
        "id": "fc2-7.2-4",
        "front": "Requisitos dinámicos",
        "back": "Números de transacciones, tareas y cantidad de datos a procesar dentro de ciertos períodos de tiempo, para condiciones normales y máximas."
      },
      {
        "id": "fc2-7.2-5",
        "front": "Condición mensurable (ejemplo)",
        "back": "Una condición que se puede medir y verificar objetivamente. Ejemplo: 95% de las transacciones se procesarán en menos de 1 seg."
      },
      {
        "id": "fc2-7.2-6",
        "front": "Columnas del cuadro de cuantificación de entidades",
        "back": "Entidad, Volumen inicial, Crecimiento esperado, Volumen máximo y Condición de obsolescencia."
      },
      {
        "id": "fc2-7.2-7",
        "front": "Apartado capacidad",
        "back": "Título separado en la especificación donde pueden identificarse los requisitos estáticos."
      }
    ]
  },
  "7.3": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-7.3-1",
          "q": "El cuadro jerárquico de cualidades de un producto de software fue confeccionado por Barry Boehm en 1976.",
          "a": true,
          "explain": "Sí, Boehm estableció en 1976 esa lista jerárquica de cualidades de un producto de software."
        },
        {
          "id": "tf2-7.3-2",
          "q": "Como el cuadro de Boehm es muy completo, todos los sistemas que desarrollemos deben especificar toda la lista de cualidades.",
          "a": false,
          "explain": "Falso. El texto dice que no todos los sistemas requieren toda la lista: depende de los requisitos del cliente o los usuarios para cada aplicación."
        },
        {
          "id": "tf2-7.3-3",
          "q": "Los requerimientos no funcionales habitualmente se expresan en lenguaje natural, lo que suele generar un alto nivel de ambigüedad.",
          "a": true,
          "explain": "Tal cual el warning: como van en lenguaje natural, suelen ser ambiguos, y esa ambigüedad hay que evitarla para poder verificarlos."
        },
        {
          "id": "tf2-7.3-4",
          "q": "En el criterio SMART, la M corresponde a que el requerimiento debe poder medirse y probarse si se cumple o no.",
          "a": true,
          "explain": "Correcto. Medible (Measurable) implica que el requerimiento debe poder medirse y probarse si lo cumple o no."
        },
        {
          "id": "tf2-7.3-5",
          "q": "Para validar un requerimiento por escenarios, la entrada define la respuesta que provoca el estímulo junto con su métrica.",
          "a": false,
          "explain": "Falso. Eso son los resultados. La entrada define quién produce el estímulo y el estímulo que se produce."
        }
      ],
      "mc": [
        {
          "id": "mc2-7.3-1",
          "q": "¿A qué refieren los requerimientos no funcionales?",
          "options": [
            "A las restricciones del cliente y a los atributos de calidad de los usuarios",
            "A las funciones principales que el sistema debe ejecutar en cada uno de sus casos de uso",
            "A los volúmenes estáticos y dinámicos que el software debe poder procesar por período",
            "A las pruebas unitarias que validan cada módulo del producto una vez ya terminado"
          ],
          "correctIndex": 0,
          "explain": "Los no funcionales son restricciones (impuestas por el cliente) y atributos de calidad (propiedades relevantes para los usuarios). Lo demás es otra cosa."
        },
        {
          "id": "mc2-7.3-2",
          "q": "Según el ejemplo del texto, ¿qué cualidad se vuelve crítica en un controlador de vuelo del que dependen vidas humanas?",
          "options": [
            "La portabilidad a la mayor cantidad de plataformas",
            "La eficiencia en el consumo de hardware del equipo",
            "La comprensibilidad del código para no especialistas",
            "La confiabilidad como requerimiento importante"
          ],
          "correctIndex": 3,
          "explain": "En el controlador de vuelo, la confiabilidad se vuelve un requerimiento importante. La portabilidad es la crítica en el ejemplo del juego masivo."
        },
        {
          "id": "mc2-7.3-3",
          "q": "En el criterio SMART, ¿qué significa que un requerimiento sea Rastreable (Traceable)?",
          "options": [
            "Que sea perfectamente factible llevarlo a cabo con el equipo de trabajo actual",
            "Que esté expresado siempre sin ninguna ambigüedad, de forma simple y muy clara",
            "Que se pueda determinar su origen y dónde está",
            "Que se pueda cumplir holgadamente con toda la infraestructura tecnológica disponible"
          ],
          "correctIndex": 2,
          "explain": "Rastreable es poder determinar su origen, quién lo solicitó, dónde está especificado, su diseño e implementación. Las otras son Alcanzable, Específico y Realizable."
        },
        {
          "id": "mc2-7.3-4",
          "q": "En la validación por escenarios, ¿qué define el componente llamado condiciones?",
          "options": [
            "Quién produce concretamente el estímulo y el estímulo puntual que se genera en el sistema",
            "En qué estado está el sistema y qué componente recibe el estímulo",
            "La respuesta que provoca el estímulo recibido y la métrica concreta usada para poder medirla",
            "El análisis costo/beneficio asociado a cada uno de los requerimientos no funcionales críticos"
          ],
          "correctIndex": 1,
          "explain": "Las condiciones definen en qué estado está el sistema y qué componente recibe el estímulo. La primera es la entrada y la tercera son los resultados."
        },
        {
          "id": "mc2-7.3-5",
          "q": "Según el texto, ¿qué se recomienda hacer cuando el cliente especifica requerimientos no funcionales?",
          "options": [
            "Generalizar las cualidades para todas las aplicaciones futuras",
            "Eliminar las restricciones impuestas por el propio cliente",
            "Llevar a cabo un análisis costo/beneficio para ellos",
            "Expresarlos siempre en notación formal sin lenguaje natural"
          ],
          "correctIndex": 2,
          "explain": "Se recomienda hacer un análisis costo/beneficio para esos requerimientos no funcionales."
        }
      ],
      "ms": [
        {
          "id": "ms2-7.3-1",
          "q": "¿Cuáles son las cinco letras del criterio SMART según el texto?",
          "options": [
            "Specific (Específico)",
            "Measurable (Medible)",
            "Attainable (Alcanzable)",
            "Realizable (Realizable)",
            "Traceable (Rastreable)"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son correctas: Specific, Measurable, Attainable, Realizable y Traceable. El texto las lista a todas."
        },
        {
          "id": "ms2-7.3-2",
          "q": "¿Cuáles de estos elementos forman parte de la definición de un escenario de validación?",
          "options": [
            "La entrada: quién produce el estímulo y el estímulo",
            "Las condiciones: estado del sistema y componente receptor",
            "Los resultados: la respuesta y su métrica de medición",
            "El presupuesto asignado a cada requerimiento del sistema",
            "La firma formal del cliente aprobando cada estímulo"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Un escenario se parte en entrada, condiciones y resultados. El presupuesto y la firma formal no figuran en el texto."
        },
        {
          "id": "ms2-7.3-3",
          "q": "¿Cuáles de las siguientes afirmaciones sobre los requerimientos no funcionales son verdaderas según el texto?",
          "options": [
            "Solo los sistemas de alta complejidad tienen no funcionales",
            "Las restricciones son atributos relevantes solo para usuarios",
            "Conviene generalizar las cualidades para no perder tiempo",
            "El lenguaje natural elimina por completo la ambigüedad",
            "Todo requerimiento crítico debe definirse sin ningún análisis"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. Todos los sistemas (no solo los complejos) tienen no funcionales, las restricciones las impone el cliente, no hay que generalizar, el lenguaje natural invita a la ambigüedad y se recomienda análisis costo/beneficio."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-7.3-1",
        "front": "¿Qué son los requerimientos no funcionales?",
        "back": "Requerimientos adicionales que refieren a restricciones o atributos que el sistema debe cumplir, presentes en todos los sistemas, simples o complejos."
      },
      {
        "id": "fc2-7.3-2",
        "front": "Cuadro de Barry Boehm (1976)",
        "back": "Lista jerárquica de cualidades presentes en un producto de software, que guía la especificación de requerimientos no funcionales."
      },
      {
        "id": "fc2-7.3-3",
        "front": "Restricciones vs. atributos de calidad",
        "back": "Restricciones: características impuestas por el cliente. Atributos de calidad: propiedades relevantes para los usuarios."
      },
      {
        "id": "fc2-7.3-4",
        "front": "Criterio SMART",
        "back": "Specific (Específico), Measurable (Medible), Attainable (Alcanzable), Realizable (Realizable) y Traceable (Rastreable)."
      },
      {
        "id": "fc2-7.3-5",
        "front": "SMART: Específico y Medible",
        "back": "Específico: expresado sin ambigüedad, simple y claro. Medible: que pueda medirse y probarse si lo cumple o no."
      },
      {
        "id": "fc2-7.3-6",
        "front": "Validación por escenarios: tres partes",
        "back": "Entrada (quién produce el estímulo y el estímulo), condiciones (estado del sistema y componente receptor) y resultados (respuesta y su métrica)."
      },
      {
        "id": "fc2-7.3-7",
        "front": "¿Por qué cada caso pide lo suyo?",
        "back": "Hay que determinar para cada aplicación cuáles son los requerimientos críticos, sin generalizar, para no malgastar tiempo y recursos."
      },
      {
        "id": "fc2-7.3-8",
        "front": "¿Por qué los no funcionales suelen ser ambiguos?",
        "back": "Porque habitualmente se expresan en lenguaje natural, lo que genera alto nivel de ambigüedad que hay que evitar para poder verificarlos."
      }
    ]
  },
  "7.4": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-7.4-1",
          "q": "Una SRS es correcta si, y solo si, todos y cada uno de los requisitos indicados representa algo requerido por el sistema a construirse.",
          "a": true,
          "explain": "Esa es la definición exacta de correcta. No hay herramienta que garantice la corrección, pero el cliente puede confirmar si refleja sus necesidades."
        },
        {
          "id": "tf2-7.4-2",
          "q": "Una SRS completa puede contener algunas siglas en inglés de la frase to be determined, siempre que sean pocas.",
          "a": false,
          "explain": "Falso. Una SRS completa no puede contener ninguna de esas siglas sueltas: justamente marcan un requerimiento cuya descripción está incompleta."
        },
        {
          "id": "tf2-7.4-3",
          "q": "El requerimiento el sistema debe tener una interfaz amigable es un buen ejemplo de requisito verificable.",
          "a": false,
          "explain": "Falso. Es el ejemplo de lo contrario: los requisitos ambiguos no son verificables, y amigable es ambiguo."
        },
        {
          "id": "tf2-7.4-4",
          "q": "Cada término con múltiples significados debe aparecer en un glosario para que la SRS sea no ambigua.",
          "a": true,
          "explain": "Sí. Como el lenguaje natural invita a la ambigüedad, los términos con varios significados deben ir en un glosario."
        },
        {
          "id": "tf2-7.4-5",
          "q": "La modificabilidad de una SRS generalmente requiere una tabla de contenidos y un índice en la documentación.",
          "a": true,
          "explain": "Correcto. Para ser modificable, su estilo y estructura deben permitir cambios fáciles, y eso suele requerir tabla de contenidos e índice."
        }
      ],
      "mc": [
        {
          "id": "mc2-7.4-1",
          "q": "¿Qué significa que una SRS sea no ambigua?",
          "options": [
            "Que ningún requerimiento del documento referencie figuras o tablas que estén numeradas",
            "Que cada requerimiento establecido tenga una única interpretación",
            "Que todos los requerimientos del documento estén catalogados desde el inicio como esenciales",
            "Que su estructura general permita incorporar cualquier tipo de cambio de forma muy sencilla"
          ],
          "correctIndex": 1,
          "explain": "No ambigua es que cada requerimiento tenga una única interpretación. Lo de los cambios es modificable y lo de catalogar es la anotación."
        },
        {
          "id": "mc2-7.4-2",
          "q": "Según el atributo completa, ¿qué deben tener definido las respuestas del software?",
          "options": [
            "Solo las respuestas para los datos de entrada considerados válidos",
            "Solo las respuestas que afecten a páginas, figuras y tablas",
            "Las respuestas a todas las entradas, tanto válidas como inválidas",
            "Las respuestas que el cliente haya catalogado como esenciales"
          ],
          "correctIndex": 2,
          "explain": "Completa exige definir las respuestas a todas las posibles entradas, tanto válidas como inválidas. Es importante cubrir ambas."
        },
        {
          "id": "mc2-7.4-3",
          "q": "¿Cuál de estos es uno de los tres tipos de conflicto que rompen la consistencia de una SRS?",
          "options": [
            "Conflicto entre el cliente y el equipo de desarrollo",
            "Conflicto de presupuesto entre módulos del sistema",
            "Conflicto entre la SRS y la documentación externa",
            "Inconsistencia temporal entre partes de la SRS"
          ],
          "correctIndex": 3,
          "explain": "Los tres tipos son términos conflictivos, características conflictivas e inconsistencia temporal. Las otras opciones no figuran."
        },
        {
          "id": "mc2-7.4-4",
          "q": "En la notación de necesidad relativa, ¿con qué letras puede catalogarse cada requerimiento?",
          "options": [
            "E (esencial), D (deseable) u O (opcional)",
            "C (crítico), N (normal) o B (bajo riesgo)",
            "F (funcional), N (no funcional) o M (mixto)",
            "A (alto), M (medio) o B (baja prioridad)"
          ],
          "correctIndex": 0,
          "explain": "La necesidad relativa cataloga cada requerimiento como E (esencial), D (deseable) u O (opcional). Las otras siglas son inventadas."
        },
        {
          "id": "mc2-7.4-5",
          "q": "¿Qué describe la trazabilidad hacia atrás desde los requerimientos?",
          "options": [
            "Que cada componente del software satisface un requerimiento",
            "Que podemos conocer por qué cada requerimiento del SRS existe",
            "Que todos los documentos previos se referencian al SRS final",
            "Que cada comportamiento refiere los requerimientos que satisface"
          ],
          "correctIndex": 1,
          "explain": "Trazabilidad hacia atrás desde los requerimientos es conocer por qué cada requerimiento del SRS existe. Las otras son las demás trazabilidades."
        }
      ],
      "ms": [
        {
          "id": "ms2-7.4-1",
          "q": "¿Cuáles de los siguientes son atributos de una buena SRS mencionados en el texto?",
          "options": [
            "No ambigua y completa",
            "Verificable y consistente",
            "Modificable y trazable",
            "Anotada y entendible por no especialistas",
            "Rentable y autodocumentada por hardware"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Los atributos son correcta, no ambigua, completa, verificable, consistente, entendible por no especialistas, modificable, trazable y anotada. Rentable y autodocumentada por hardware no figuran."
        },
        {
          "id": "ms2-7.4-2",
          "q": "¿Cuáles de estos son los tres tipos de conflicto posibles que afectan la consistencia?",
          "options": [
            "Términos conflictivos entre distintos contextos",
            "Características conflictivas con comportamientos contradictorios",
            "Inconsistencia temporal entre partes de la SRS",
            "Conflictos de presupuesto entre los módulos",
            "Conflictos entre el cliente y los usuarios finales"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Los tres son términos conflictivos, características conflictivas e inconsistencia temporal. El presupuesto y el conflicto cliente/usuarios no figuran."
        },
        {
          "id": "ms2-7.4-3",
          "q": "Sobre la sigla de to be determined (a determinar), ¿qué se recomienda incluir cuando aparece?",
          "options": [
            "La causa por la cual el requerimiento está incompleto",
            "La persona responsable de llevarlo a cabo",
            "Una fecha estipulada para cumplirse",
            "El costo exacto de completar el requerimiento",
            "El nombre del glosario donde se define el término"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Cuando aparece, se recomienda incluir la causa de la incompletitud, el responsable y una fecha estipulada. El costo y el glosario no se mencionan ahí."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-7.4-1",
        "front": "SRS correcta",
        "back": "Si, y solo si, todos y cada uno de los requisitos indicados representa algo requerido por el sistema a construirse."
      },
      {
        "id": "fc2-7.4-2",
        "front": "SRS no ambigua",
        "back": "Si, y solo si, cada requerimiento tiene una única interpretación. Los términos con múltiples significados deben ir en un glosario."
      },
      {
        "id": "fc2-7.4-3",
        "front": "SRS completa y la sigla TBD",
        "back": "Incluye todo lo que el software debe hacer y todas las respuestas a entradas válidas e inválidas. No puede tener sueltas las siglas de to be determined (a determinar)."
      },
      {
        "id": "fc2-7.4-4",
        "front": "SRS verificable",
        "back": "Existe un proceso concreto y finito para comprobar si el software cumple el requisito. Los requisitos ambiguos o no mensurables no son verificables."
      },
      {
        "id": "fc2-7.4-5",
        "front": "Tres tipos de conflicto (consistencia)",
        "back": "Términos conflictivos, características conflictivas e inconsistencia temporal entre partes de la SRS."
      },
      {
        "id": "fc2-7.4-6",
        "front": "Tipos de trazabilidad de una SRS",
        "back": "Hacia atrás desde los requerimientos, hacia adelante hasta los requerimientos, hacia atrás hasta los requerimientos y hacia adelante desde los requerimientos."
      },
      {
        "id": "fc2-7.4-7",
        "front": "SRS anotada: tipos de notación",
        "back": "Necesidad relativa (E esencial, D deseable, O opcional) y estabilidad relativa (estable o volátil)."
      },
      {
        "id": "fc2-7.4-8",
        "front": "SRS modificable",
        "back": "Su estilo y estructura permiten hacer cambios de forma fácil, completa y consistente. Suele requerir tabla de contenidos e índice."
      }
    ]
  },
  "7.5": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-7.5-1",
          "q": "La revisión regular de la definición de los requerimientos puede ayudar a su mejor gestión y a la detección de errores.",
          "a": true,
          "explain": "Sí. Revisar seguido los requerimientos ayuda a gestionarlos mejor y a cazar errores temprano."
        },
        {
          "id": "tf2-7.5-2",
          "q": "La validación de los requerimientos la deben realizar exclusivamente los desarrolladores del sistema.",
          "a": false,
          "explain": "Falso. La validación la deben hacer el cliente y los usuarios, porque son los que saben qué esperan del sistema."
        },
        {
          "id": "tf2-7.5-3",
          "q": "El prototipado es una técnica de gran utilidad al momento de validar los requerimientos.",
          "a": true,
          "explain": "Tal cual lo dice el texto: el prototipado es muy útil para validar requerimientos."
        },
        {
          "id": "tf2-7.5-4",
          "q": "Como los requerimientos son una foto fija, no hace falta planear cambios mientras se desarrolla el sistema.",
          "a": false,
          "explain": "Falso. Los requerimientos cambian con el tiempo, así que es importante planear los posibles cambios al desarrollar y al usar el sistema."
        },
        {
          "id": "tf2-7.5-5",
          "q": "Todos los cambios en los requerimientos deben actualizarse en el SRS generando una nueva versión.",
          "a": true,
          "explain": "Correcto. Cada cambio se actualiza en el SRS generando una nueva versión, por eso el documento debe permitir incorporar cambios fácilmente."
        }
      ],
      "mc": [
        {
          "id": "mc2-7.5-1",
          "q": "¿De qué dos formas puede realizarse la revisión de la especificación de requerimientos?",
          "options": [
            "Manual, hecha siempre por el cliente, o bien automática mediante herramientas de software",
            "Formal, con documentación completa, o informal durante su producción",
            "Interna, dentro del propio equipo, o externa, con auditores especialmente contratados",
            "Inicial, antes de empezar el diseño, o bien final, después de toda la implementación"
          ],
          "correctIndex": 1,
          "explain": "Las dos formas son formal (con la documentación completa) o informal (durante su producción). Las otras divisiones no figuran."
        },
        {
          "id": "mc2-7.5-2",
          "q": "Según el texto, ¿quién debe realizar la validación de los requerimientos?",
          "options": [
            "Únicamente el equipo de desarrolladores del sistema",
            "Solo los auditores externos a la organización",
            "Exclusivamente el responsable del documento SRS",
            "El cliente y los usuarios del sistema a construir"
          ],
          "correctIndex": 3,
          "explain": "La validación la deben hacer el cliente y los usuarios, para confirmar que los requerimientos coinciden con lo que esperan del sistema."
        },
        {
          "id": "mc2-7.5-3",
          "q": "¿Por qué es importante validar temprano los requerimientos?",
          "options": [
            "Porque así se evita tener que documentar por completo el SRS del sistema",
            "Porque los costos de los errores en requerimientos son altos",
            "Porque elimina por completo la necesidad de revisar la especificación",
            "Porque permite saltear directamente la etapa de prototipado del sistema"
          ],
          "correctIndex": 1,
          "explain": "Validar temprano importa porque los errores de requerimientos son caros: cuanto antes se detectan, más barato salen de corregir."
        },
        {
          "id": "mc2-7.5-4",
          "q": "¿Qué puede provocar un cambio en los requerimientos según la sección?",
          "options": [
            "La detección de errores durante la revisión informal",
            "La modificación de los objetivos de la organización",
            "La generación de una nueva versión del documento SRS",
            "El uso del prototipado como técnica de validación"
          ],
          "correctIndex": 1,
          "explain": "Así como los objetivos de la organización pueden modificarse, eso puede implicar un cambio en los requerimientos."
        },
        {
          "id": "mc2-7.5-5",
          "q": "¿Cómo debe estar organizado el documento SRS frente a la evolución de los requerimientos?",
          "options": [
            "De forma tal que los cambios puedan incorporarse fácilmente",
            "De modo tal que solo el cliente pueda modificar sus secciones internas",
            "Con una única versión cerrada que no admita ningún tipo de modificación",
            "Sin ninguna tabla de contenidos, para así agilizar su lectura inicial"
          ],
          "correctIndex": 0,
          "explain": "El SRS debe organizarse para que los cambios se incorporen fácilmente; si no, cada modificación se vuelve un parto."
        }
      ],
      "ms": [
        {
          "id": "ms2-7.5-1",
          "q": "¿Cuáles de las siguientes afirmaciones sobre la gestión de requerimientos son correctas según el texto?",
          "options": [
            "La revisión regular ayuda a detectar errores",
            "En la revisión se involucran desarrolladores y cliente",
            "La buena comunicación previene problemas tempranos",
            "La revisión solo puede ser formal, nunca informal",
            "La validación la hacen únicamente los desarrolladores"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "La revisión regular detecta errores, involucra a desarrolladores y cliente, y la buena comunicación previene problemas. La revisión también puede ser informal y la validación la hacen cliente y usuarios."
        },
        {
          "id": "ms2-7.5-2",
          "q": "Según la línea de tiempo de la evolución de los requerimientos, ¿cuáles de estas etapas aparecen?",
          "options": [
            "Comprensión inicial del problema",
            "Requerimientos iniciales",
            "Comprensión de los cambios en el problema",
            "Requerimientos cambiados",
            "Validación final firmada por el cliente"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "La línea de tiempo va de comprensión inicial del problema a requerimientos iniciales, comprensión de los cambios y requerimientos cambiados. La validación firmada no figura en ese diagrama."
        },
        {
          "id": "ms2-7.5-3",
          "q": "¿Cuáles de las siguientes afirmaciones figuran tal cual en la sección?",
          "options": [
            "El prototipado no sirve para validar requerimientos",
            "Los errores de requerimientos son baratos de corregir",
            "Los requerimientos nunca cambian una vez definidos",
            "El SRS debe tener una sola versión inmodificable",
            "La validación la realizan exclusivamente los auditores"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. El prototipado sí sirve, los errores de requerimientos son caros, los requerimientos cambian con el tiempo, el SRS genera nuevas versiones y validan el cliente y los usuarios."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-7.5-1",
        "front": "¿Para qué sirve revisar los requerimientos en forma regular?",
        "back": "Ayuda a su mejor gestión y a la detección de errores. Involucra tanto a los desarrolladores como al cliente."
      },
      {
        "id": "fc2-7.5-2",
        "front": "Revisión formal vs. informal",
        "back": "Formal: cuando se cuenta con la documentación completa. Informal: durante la producción de la especificación."
      },
      {
        "id": "fc2-7.5-3",
        "front": "¿Quién valida los requerimientos?",
        "back": "El cliente y los usuarios, para confirmar que coinciden con lo que se desea o espera del sistema."
      },
      {
        "id": "fc2-7.5-4",
        "front": "¿Por qué es importante la validación?",
        "back": "Porque los costos de los errores en los requerimientos son altos: cuanto antes se detectan, más pronto y barato se corrigen."
      },
      {
        "id": "fc2-7.5-5",
        "front": "Técnica útil para validar requerimientos",
        "back": "El prototipado es una técnica de gran utilidad al momento de validar los requerimientos."
      },
      {
        "id": "fc2-7.5-6",
        "front": "¿Por qué evolucionan los requerimientos?",
        "back": "Porque los objetivos de la organización pueden ir modificándose, y eso puede implicar un cambio en los requerimientos."
      },
      {
        "id": "fc2-7.5-7",
        "front": "Etapas de la evolución de los requerimientos",
        "back": "Comprensión inicial del problema → requerimientos iniciales → comprensión de los cambios en el problema → requerimientos cambiados."
      },
      {
        "id": "fc2-7.5-8",
        "front": "¿Cómo debe organizarse el SRS frente a los cambios?",
        "back": "De forma tal que los cambios puedan incorporarse fácilmente, generando una nueva versión por cada modificación."
      }
    ]
  },
  "tp.1": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-tp.1-1",
          "q": "El caso elige el modelo incremental porque permite construir el sistema en partes funcionales que ya entregan valor antes de tener el sistema completo.",
          "a": true,
          "explain": "Tal cual: la idea del incremental es ir entregando incrementos funcionales (stock, ventas, pedidos) que dan valor al cliente sin esperar a que esté todo terminado."
        },
        {
          "id": "tf2-tp.1-2",
          "q": "El modelo espiral se descarta porque el proyecto tiene alto riesgo tecnológico que no se justifica analizar por ciclo.",
          "a": false,
          "explain": "Al revés: el espiral se descarta justamente porque NO hay alto riesgo. Es un sistema de gestión con tecnología estándar, así que el análisis de riesgos por ciclo sería overhead innecesario."
        },
        {
          "id": "tf2-tp.1-3",
          "q": "La gestión de pagos queda fuera del sistema porque la maneja exclusivamente el sector Contable.",
          "a": true,
          "explain": "Sí, ese es un punto clave del relevamiento: los pagos los maneja Contable aparte, así el alcance del sistema queda perfectamente delimitado."
        },
        {
          "id": "tf2-tp.1-4",
          "q": "Los modelos de prototipos y evolutivo se descartan porque hay alta incertidumbre en los requisitos.",
          "a": false,
          "explain": "Es al revés: prototipos y evolutivo sirven cuando hay incertidumbre. Acá los requisitos están definidos y el dominio es concreto, por eso se descartan."
        },
        {
          "id": "tf2-tp.1-5",
          "q": "Scrum acompaña bien al modelo incremental porque organiza el desarrollo en iteraciones cortas y revisa avances de forma periódica con el cliente.",
          "a": true,
          "explain": "Exacto: Scrum encaja con el incremental porque cada módulo se planifica, desarrolla y revisa junto al cliente en iteraciones cortas antes de seguir con el siguiente."
        }
      ],
      "mc": [
        {
          "id": "mc2-tp.1-1",
          "q": "¿Cuál es la restricción tecnológica del proyecto presente desde el día cero?",
          "options": [
            "El hardware ya está comprado y se debe usar ese mismo equipo",
            "El sistema debe correr en la nube de un proveedor externo a contratar",
            "La empresa exige migrar a un lenguaje de programación nuevo",
            "El software debe integrarse con un ERP heredado del sector"
          ],
          "correctIndex": 0,
          "explain": "El hardware ya está comprado y quieren usar ese: es una restricción inamovible desde el inicio que permite planificar cada incremento dentro de ese límite técnico."
        },
        {
          "id": "mc2-tp.1-2",
          "q": "Según el TP, ¿por qué se descarta el modelo de prototipos para este caso?",
          "options": [
            "Porque el proyecto es grande y tiene muchos riesgos por evaluar en cada ciclo",
            "Porque los requisitos ya están definidos y no hace falta explorar",
            "Porque el hardware todavía no estaba definido al arrancar",
            "Porque el cliente no puede usar avances de forma temprana"
          ],
          "correctIndex": 1,
          "explain": "Prototipos sirve cuando el cliente no sabe qué necesita. Acá los requisitos ya están claros, así que no hace falta construir versiones exploratorias."
        },
        {
          "id": "mc2-tp.1-3",
          "q": "¿En cuántas razones se apoya la justificación de elegir el modelo incremental?",
          "options": [
            "En tres razones bien diferenciadas entre sí",
            "En cuatro razones ordenadas por prioridad",
            "En cinco razones que defienden la elección",
            "En seis razones agrupadas por área de negocio"
          ],
          "correctIndex": 2,
          "explain": "Son cinco razones: requisitos divisibles, valor temprano, hardware como condicionante conocido, baja incertidumbre y bajo riesgo tecnológico."
        },
        {
          "id": "mc2-tp.1-4",
          "q": "¿Cuál de estas áreas de la librería puede convertirse naturalmente en un incremento independiente?",
          "options": [
            "La gestión de pagos que realiza el sector Contable",
            "La facturación fiscal de las ventas mayoristas",
            "La gestión de stock con entrega de valor temprana",
            "El cálculo de impuestos sobre cada operación diaria"
          ],
          "correctIndex": 2,
          "explain": "La gestión de stock, los pedidos a proveedores y las ventas pueden volverse incrementos. Los pagos quedan fuera del sistema, así que no cuentan."
        }
      ],
      "ms": [
        {
          "id": "ms2-tp.1-1",
          "q": "¿Cuáles de las siguientes son razones que el TP da para elegir el modelo incremental?",
          "options": [
            "El cliente puede ver y usar avances funcionales rápidamente",
            "La restricción de hardware es un condicionante conocido desde el inicio",
            "Hay alta incertidumbre que obliga a versiones exploratorias",
            "El sistema puede dividirse en partes funcionales independientes",
            "Es un proyecto de alto riesgo que exige análisis por ciclo"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Valor temprano, hardware conocido y divisibilidad en módulos son razones reales. La incertidumbre alta y el alto riesgo son justo lo que NO ocurre, por eso se descartan espiral, prototipos y evolutivo."
        },
        {
          "id": "ms2-tp.1-2",
          "q": "¿Cuáles de estos modelos de ciclo de vida fueron evaluados y descartados para el caso?",
          "options": [
            "El modelo de prototipos por requisitos ya definidos",
            "El modelo evolutivo por la baja incertidumbre del dominio",
            "El modelo en cascada por su rigidez documental excesiva",
            "El modelo espiral por el bajo riesgo tecnológico del caso",
            "El modelo de prototipado desechable por costos elevados"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "El TP descarta explícitamente prototipos, evolutivo y espiral. La cascada y el prototipado desechable como tales no aparecen mencionados en el texto."
        },
        {
          "id": "ms2-tp.1-3",
          "q": "¿Cuáles de estas afirmaciones describen correctamente al sector Contable según el caso?",
          "options": [
            "Define los incrementos prioritarios del sistema a construir",
            "Aprueba el modelo de ciclo de vida que se va a usar",
            "Selecciona los proveedores con los que trabaja la librería",
            "Decide la restricción de hardware del proyecto entero",
            "Coordina la entrega de mercadería hacia el showroom"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. Del Contable el caso solo dice que maneja los pagos, que quedan fuera del sistema. Nada de incrementos, modelos, proveedores, hardware ni entregas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-tp.1-1",
        "front": "¿Qué sistema se modela en el caso?",
        "back": "Un sistema para una librería de compra y reventa de artículos, con ventas minoristas (particulares) y mayoristas (empresas), showroom en el microcentro y depósito."
      },
      {
        "id": "fc2-tp.1-2",
        "front": "¿Qué modelo de ciclo de vida se eligió?",
        "back": "El modelo incremental: se construye el sistema en partes funcionales (incrementos), donde cada uno entrega valor al cliente antes de completar el sistema total."
      },
      {
        "id": "fc2-tp.1-3",
        "front": "¿Por qué se descarta el modelo espiral?",
        "back": "Porque está pensado para proyectos grandes con muchos riesgos. Este es un sistema de gestión para una empresa mediana con tecnología estándar, así que el análisis de riesgos por ciclo es overhead innecesario."
      },
      {
        "id": "fc2-tp.1-4",
        "front": "¿Por qué se descartan prototipos y evolutivo?",
        "back": "Porque sirven cuando hay alta incertidumbre y el cliente no sabe qué necesita. Acá los requisitos ya están definidos y el dominio es concreto, así que no se justifican versiones exploratorias."
      },
      {
        "id": "fc2-tp.1-5",
        "front": "¿Cómo se separan las características del proyecto?",
        "back": "En dos lados: las de la organización (la empresa, el showroom, los proveedores, el hardware) y las de los requerimientos (ventas, stock, pedidos, alcance delimitado)."
      },
      {
        "id": "fc2-tp.1-6",
        "front": "¿Qué queda fuera del alcance del sistema y por qué?",
        "back": "La gestión de pagos, porque la maneja exclusivamente el sector Contable. Eso deja el alcance perfectamente delimitado."
      },
      {
        "id": "fc2-tp.1-7",
        "front": "¿Qué marco de trabajo acompaña al modelo incremental?",
        "back": "Scrum: organiza el desarrollo en iteraciones cortas y permite revisar avances de manera periódica junto con el cliente antes de seguir con el siguiente incremento."
      },
      {
        "id": "fc2-tp.1-8",
        "front": "¿Cuántos proveedores tiene hoy la librería y cuándo les pasa los pedidos?",
        "back": "Trabaja con un grupo chico de proveedores (solo 4) y les pasa los pedidos todos los viernes."
      }
    ]
  },
  "tp.2": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-tp.2-1",
          "q": "En el organigrama, el vínculo con los Proveedores se dibuja con línea punteada porque es una relación externa y no una dependencia jerárquica interna.",
          "a": true,
          "explain": "Sí: la línea punteada hacia Proveedores marca un vínculo externo. Compras se relaciona con ellos, pero no son parte de la jerarquía interna de la empresa."
        },
        {
          "id": "tf2-tp.2-2",
          "q": "Los pedidos a proveedores se arman todos los días a medida que se detectan faltantes de stock.",
          "a": false,
          "explain": "No: los pedidos a proveedores se hacen una vez por semana, los viernes, después de revisar lo vendido y los niveles de stock de la semana."
        },
        {
          "id": "tf2-tp.2-3",
          "q": "El cobro de las ventas, tanto minoristas como mayoristas, lo maneja Contaduría aparte del proceso de Ventas.",
          "a": true,
          "explain": "Correcto: en los dos casos el cobro lo cierra Contaduría. Ventas solo genera el comprobante de la venta y el remito de salida."
        },
        {
          "id": "tf2-tp.2-4",
          "q": "En la venta minorista el proceso es más largo porque el cliente manda el pedido por mail y hay que armar un presupuesto antes de cerrar.",
          "a": false,
          "explain": "Eso es la mayorista. La minorista es directa: la persona llega al showroom, elige, el vendedor consulta stock y si hay, cierra en el momento."
        },
        {
          "id": "tf2-tp.2-5",
          "q": "Las tres entrevistas coinciden en que hace falta un sistema único donde la venta descuente stock sola y todos vean la misma información.",
          "a": true,
          "explain": "Sí: Ventas, Compras y Depósito terminan pidiendo lo mismo. Esa necesidad común es la que justifica todo el proyecto."
        }
      ],
      "mc": [
        {
          "id": "mc2-tp.2-1",
          "q": "¿De quién dependen directamente las cuatro áreas de la librería en el organigrama?",
          "options": [
            "Del Gerente de ventas que coordina las demás áreas",
            "Del Gerente General del que cuelgan las cuatro áreas",
            "Del Jefe de depósito que centraliza la operación diaria",
            "Del Gerente de contaduría que aprueba cada movimiento"
          ],
          "correctIndex": 1,
          "explain": "La estructura arranca en el Gerente General, del que dependen Comercial, Logística y depósito, Compras y Contable."
        },
        {
          "id": "mc2-tp.2-2",
          "q": "¿Qué comprobante acompaña a la mercadería al salir del depósito en una venta mayorista?",
          "options": [
            "Un ticket que se entrega solo si lo pide el cliente",
            "Una orden de compra dirigida al proveedor del artículo",
            "Un remito que acompaña la mercadería al salir",
            "Una planilla de Excel con la venta del día cargada"
          ],
          "correctIndex": 2,
          "explain": "En mayorista se emite factura más un remito que acompaña la mercadería al salir del depósito. Lo fiscal y el cobro lo cierra Contaduría aparte."
        },
        {
          "id": "mc2-tp.2-3",
          "q": "Según Compras, ¿en qué se basan para decidir qué productos pedir y en qué cantidad?",
          "options": [
            "En los productos bajo stock mínimo y los de mayor rotación",
            "En las sugerencias informales que mandan los cuatro proveedores",
            "En el historial de reclamos por mercadería fallada recibida",
            "En el presupuesto mensual que define el sector Contable"
          ],
          "correctIndex": 0,
          "explain": "Se basan en dos cosas: los productos por debajo del stock mínimo y los de mayor rotación. Con eso arman el informe de faltantes y definen cantidades."
        },
        {
          "id": "mc2-tp.2-4",
          "q": "¿Qué hace el depósito cuando llega mercadería de un proveedor?",
          "options": [
            "La ingresa directamente al stock apenas llega sin control previo",
            "Controla el remito contra la orden y luego revisa la calidad",
            "La deriva al sector Contable para verificar el pago hecho",
            "La envía sin abrir al showroom para su exhibición rápida"
          ],
          "correctIndex": 1,
          "explain": "Reciben y controlan el remito contra la orden de compra (que coincidan productos y cantidades) y después hacen un control de calidad de lo recibido."
        },
        {
          "id": "mc2-tp.2-5",
          "q": "¿Por qué la planilla de Excel de ventas a veces queda desactualizada o con errores?",
          "options": [
            "Porque el sistema la sincroniza tarde con el depósito central",
            "Porque solo el gerente puede editarla una vez por semana",
            "Porque la cargan varios a mano y hay errores de tipeo",
            "Porque los proveedores la modifican al confirmar pedidos"
          ],
          "correctIndex": 2,
          "explain": "Las ventas se cargan a mano en una planilla compartida que tocan varios, así que a veces queda desactualizada o con errores de tipeo."
        }
      ],
      "ms": [
        {
          "id": "ms2-tp.2-1",
          "q": "¿Cuáles de estos son problemas comunes que detectan las tres entrevistas?",
          "options": [
            "Información dispersa en planillas, otra planilla y el mail",
            "Carga manual con errores de tipeo según quién la toque",
            "Falta de proveedores que cubran los artículos solicitados",
            "Stock desactualizado que lleva a pedir de más o de menos",
            "Cobros duplicados generados por el sector Contaduría"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Los tres problemas comunes son información dispersa, carga manual y stock desactualizado. La falta de proveedores y los cobros duplicados no aparecen como problemas del relevamiento."
        },
        {
          "id": "ms2-tp.2-2",
          "q": "Según la tabla, ¿qué afirmaciones corresponden a la venta mayorista?",
          "options": [
            "Se vende por volumen alto de unidades",
            "Usa el precio de lista sin descuentos aplicados",
            "El cliente es recurrente y está fichado",
            "La entrega es inmediata desde el mostrador",
            "Casi siempre exige verificar stock antes de confirmar"
          ],
          "correctIndexes": [
            0,
            2,
            4
          ],
          "explain": "La mayorista es por volumen, con cliente recurrente y fichado, y exige verificar stock antes de confirmar. El precio de lista y la entrega inmediata son de la minorista."
        },
        {
          "id": "ms2-tp.2-3",
          "q": "¿Cuáles de estas tareas realiza el Jefe de depósito según su entrevista?",
          "options": [
            "Define la lista de precios mayorista de los productos",
            "Negocia las condiciones de pago con los proveedores",
            "Aprueba las órdenes de compra antes de enviarlas",
            "Genera las facturas fiscales de las ventas cerradas",
            "Decide qué modelo de ciclo de vida usar en el proyecto"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es del depósito. El Jefe de depósito controla stock, recibe mercadería, controla remito y calidad, y actualiza el stock. Precios, pagos, órdenes y facturas no son tarea suya."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-tp.2-1",
        "front": "¿Quién está en la cima del organigrama y qué áreas dependen de él?",
        "back": "El Gerente General, del que dependen cuatro áreas: Comercial, Logística y depósito, Compras y Contable."
      },
      {
        "id": "fc2-tp.2-2",
        "front": "¿Por qué los Proveedores van con línea punteada en el organigrama?",
        "back": "Porque marca un vínculo externo (Compras se relaciona con ellos), no una relación jerárquica interna de la empresa."
      },
      {
        "id": "fc2-tp.2-3",
        "front": "¿Cómo es el proceso de venta minorista?",
        "back": "Directo: la persona llega al showroom, elige los productos, el vendedor consulta el stock y, si hay, cierra la venta en el momento."
      },
      {
        "id": "fc2-tp.2-4",
        "front": "¿Cómo es el proceso de venta mayorista?",
        "back": "Más largo: la empresa manda el pedido por mail o WhatsApp, se verifica stock contra el depósito, se arma presupuesto con precio mayorista y se cierra cuando el cliente confirma."
      },
      {
        "id": "fc2-tp.2-5",
        "front": "¿Cuándo y por qué se hacen los pedidos a proveedores?",
        "back": "Una vez por semana, los viernes. Antes se revisa lo vendido en la semana y los niveles de stock para saber qué reponer."
      },
      {
        "id": "fc2-tp.2-6",
        "front": "¿En base a qué decide Compras qué pedir?",
        "back": "En los productos que quedaron por debajo del stock mínimo y los de mayor rotación. Con eso arma el informe de faltantes y define cantidades."
      },
      {
        "id": "fc2-tp.2-7",
        "front": "¿Qué controla el depósito al recibir mercadería?",
        "back": "Controla el remito contra la orden de compra (que coincidan productos y cantidades) y después hace un control de calidad de lo recibido."
      },
      {
        "id": "fc2-tp.2-8",
        "front": "¿Cuáles son los tres problemas comunes que justifican el sistema?",
        "back": "Información dispersa (cada área mira su fuente), carga manual (con errores de tipeo) y stock desactualizado (que lleva a pedir de más o de menos y frenar ventas)."
      }
    ]
  },
  "tp.3": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-tp.3-1",
          "q": "El proceso general se organiza en cuatro pools: Cliente, Proceso General, Proveedor y Contaduría.",
          "a": false,
          "explain": "No: los cuatro pools son Cliente, Proceso General (con sus carriles), Proveedor... pero el cuarto no es Contaduría. En realidad son Cliente, Proceso General y Proveedor; los carriles internos son Comercial, Compras y Depósito."
        },
        {
          "id": "tf2-tp.3-2",
          "q": "En el subproceso de venta, si el gateway de stock da que no hay stock suficiente, se informa la falta y el cliente recibe el rechazo, terminando el flujo.",
          "a": true,
          "explain": "Tal cual: el gateway '¿hay stock suficiente?' parte el flujo. Por el camino No se informa la falta, el cliente recibe el rechazo y la venta no sigue."
        },
        {
          "id": "tf2-tp.3-3",
          "q": "En el subproceso de pedidos a proveedor, las consultas de productos más vendidos y de stock se hacen una después de la otra de forma secuencial.",
          "a": false,
          "explain": "No: hay un gateway paralelo que lanza las dos consultas a la vez (más vendidos a Comercial y stock a Depósito). Recién después las ramas se unen en un join."
        },
        {
          "id": "tf2-tp.3-4",
          "q": "En el ingreso de mercadería hay dos controles en cadena: primero el control de remito y después el control de calidad.",
          "a": true,
          "explain": "Sí: primero se compara la factura con la orden de compra (control de remito) y después el control de calidad. La mercadería entra al stock solo si pasa los dos."
        },
        {
          "id": "tf2-tp.3-5",
          "q": "En el proceso general, el Área de Compras se dispara con un evento temporal del tipo 'una vez a la semana'.",
          "a": true,
          "explain": "Correcto: Compras arranca con un evento temporal 'Una vez a la semana', y desde ahí ejecuta el subproceso de compras hasta su fin."
        }
      ],
      "mc": [
        {
          "id": "mc2-tp.3-1",
          "q": "En el subproceso de venta, ¿qué dos gateways de decisión aparecen?",
          "options": [
            "Uno de aprobación de compra y otro de control de calidad",
            "Uno de minorista o mayorista y otro de stock suficiente",
            "Uno de pago confirmado y otro de remito coincidente",
            "Uno de proveedor disponible y otro de envío realizado"
          ],
          "correctIndex": 1,
          "explain": "El subproceso de venta tiene dos gateways: uno que separa minorista de mayorista y otro que decide según haya o no stock suficiente."
        },
        {
          "id": "mc2-tp.3-2",
          "q": "En el subproceso de ingreso de mercadería, ¿qué pasa si el control de remito falla?",
          "options": [
            "Se ingresa igual al stock y se reclama luego al proveedor",
            "Se registra error, se notifica al proveedor y se rechaza",
            "Se pasa directo al control de calidad para reintentar",
            "Se deriva la mercadería al showroom como excedente"
          ],
          "correctIndex": 1,
          "explain": "Si la factura no coincide con la orden de compra, se registra el error, se notifica al proveedor y se rechaza la mercadería, terminando el flujo."
        },
        {
          "id": "mc2-tp.3-3",
          "q": "¿Qué dispara cada área en el proceso general?",
          "options": [
            "Comercial el pedido del cliente, Compras un temporizador, Depósito el ingreso",
            "Las tres áreas se disparan con el mismo pedido del cliente inicial",
            "Compras el pedido del cliente y Comercial el temporizador semanal",
            "Depósito el temporizador semanal y Compras el ingreso de mercadería"
          ],
          "correctIndex": 0,
          "explain": "Cada área tiene su disparador: Comercial el pedido del cliente, Compras el evento temporal semanal y Depósito el ingreso de mercadería. No van en fila india."
        },
        {
          "id": "mc2-tp.3-4",
          "q": "En el subproceso de venta, ¿cuándo se actualiza el stock?",
          "options": [
            "Apenas el cliente selecciona los productos en el catálogo inicial",
            "Antes de confirmar el pedido, al consultar el stock",
            "Después de enviar el producto desde logística y depósito",
            "En el mismo momento en que se informa la falta de stock"
          ],
          "correctIndex": 2,
          "explain": "El stock se actualiza recién después: logística prepara, envía el producto y ahí actualiza el stock. No es ni al seleccionar ni al consultar."
        },
        {
          "id": "mc2-tp.3-5",
          "q": "En el subproceso de pedidos a proveedor, ¿qué ocurre si el gateway '¿se aprueba la compra?' da que no?",
          "options": [
            "Se registra la compra igual en la planilla de Excel",
            "Se genera la orden y se envía a otro proveedor distinto",
            "Se vuelve a consultar el stock al área de depósito",
            "El flujo termina ahí porque no se realiza la compra"
          ],
          "correctIndex": 3,
          "explain": "Si no se aprueba, se corta y listo: el flujo termina sin compra. Solo si se aprueba se registra en Excel, se genera la orden y se manda al proveedor."
        }
      ],
      "ms": [
        {
          "id": "ms2-tp.3-1",
          "q": "¿Cuáles de estos subprocesos detallados se modelan en esta parte del TP?",
          "options": [
            "El subproceso de ventas al cliente",
            "El subproceso de gestión de pedidos a proveedor",
            "El subproceso de gestión de pagos y cobranzas",
            "El subproceso de ingreso de mercadería",
            "El subproceso de liquidación de sueldos del personal"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Los tres subprocesos son ventas, gestión de pedidos a proveedor e ingreso de mercadería. Pagos/cobranzas y sueldos no se modelan (los pagos quedan fuera del alcance)."
        },
        {
          "id": "ms2-tp.3-2",
          "q": "¿Qué afirmaciones sobre el subproceso de ingreso de mercadería son correctas?",
          "options": [
            "Tiene dos gateways en cadena: remito primero y calidad después",
            "Cada gateway fallido registra error y notifica al proveedor",
            "El primer control compara la factura con la orden de compra",
            "La mercadería entra al stock apenas el proveedor la envía",
            "Ambos caminos de error confluyen en el rechazo de la mercadería"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Son correctas todas menos la del ingreso inmediato: la mercadería entra al stock recién cuando pasa los dos controles, no apenas el proveedor la envía."
        },
        {
          "id": "ms2-tp.3-3",
          "q": "Según los diagramas, ¿qué elementos BPMN se usan para representar quién hace qué?",
          "options": [
            "Los pools representan a los participantes del proceso",
            "Los carriles representan las áreas internas",
            "Los gateways representan los puntos de decisión",
            "Las bases de datos representan el almacenamiento físico",
            "Los mensajes SQL representan las consultas al sistema"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Pools (participantes), carriles (áreas internas) y gateways (decisiones) son los elementos usados. Bases de datos y mensajes SQL no son notación BPMN del TP."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-tp.3-1",
        "front": "¿Qué notación se usa para modelar los procesos de la librería?",
        "back": "BPMN: un proceso general de alto nivel más tres subprocesos detallados (ventas, gestión de pedidos a proveedor e ingreso de mercadería)."
      },
      {
        "id": "fc2-tp.3-2",
        "front": "¿Qué representan pools y carriles en BPMN?",
        "back": "Los pools son los participantes del proceso y los carriles son las áreas internas; juntos muestran quién hace qué."
      },
      {
        "id": "fc2-tp.3-3",
        "front": "¿En qué pools se organiza el proceso general?",
        "back": "Cliente, Proceso General (con carriles Área Comercial, Área de Compras y Área de Depósito) y Proveedor. Cada área tiene su disparador y su fin."
      },
      {
        "id": "fc2-tp.3-4",
        "front": "¿Qué dispara cada área en el proceso general?",
        "back": "Comercial: el pedido del cliente. Compras: un evento temporal 'una vez a la semana'. Depósito: el ingreso de mercadería. El Proveedor recibe la orden y despacha."
      },
      {
        "id": "fc2-tp.3-5",
        "front": "¿Cuál es el punto crítico del subproceso de venta?",
        "back": "El gateway '¿hay stock suficiente?'. Sin stock se informa la falta y el cliente recibe el rechazo; con stock se confirma, registra, prepara, envía y actualiza el stock."
      },
      {
        "id": "fc2-tp.3-6",
        "front": "¿Qué hace el gateway paralelo en el subproceso de pedidos a proveedor?",
        "back": "Lanza dos consultas a la vez: productos más vendidos (Comercial) y stock bajo mínimo (Depósito). Después las ramas se unen en un join para decidir la compra."
      },
      {
        "id": "fc2-tp.3-7",
        "front": "¿Cuáles son los dos controles del ingreso de mercadería?",
        "back": "Primero el control de remito (¿coincide la factura con la orden de compra?) y después el control de calidad. Cada uno frena el ingreso si falla."
      },
      {
        "id": "fc2-tp.3-8",
        "front": "¿Qué pasa con la mercadería que falla algún control de ingreso?",
        "back": "Se registra el error, se notifica al proveedor y ambos caminos de error confluyen en el rechazo de la mercadería. Solo si pasa los dos controles entra al stock y se almacena."
      }
    ]
  },
  "tp.4": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-tp.4-1",
          "q": "Los requerimientos se dividen en tres grupos: funcionales, no funcionales y de negocio, cada uno con un código fijo de trazabilidad.",
          "a": true,
          "explain": "Sí: funcionales (RFx, qué hace), no funcionales (RNFx, cómo se comporta) y de negocio (RNx, reglas y límites). Los códigos sirven de trazabilidad."
        },
        {
          "id": "tf2-tp.4-2",
          "q": "Por la regla de negocio RN2, el sistema sí incluye la gestión de pagos dentro de su alcance.",
          "a": false,
          "explain": "Al revés: RN2 dice que el sistema NO debe incluir la gestión de pagos. Por eso cobros y facturación de pagos quedan fuera del alcance."
        },
        {
          "id": "tf2-tp.4-3",
          "q": "El requerimiento no funcional RNF3 exige que el sistema sea compatible con el hardware existente.",
          "a": true,
          "explain": "Correcto: RNF3 pide compatibilidad con el hardware existente, así no hace falta cambiar las máquinas que ya tienen."
        },
        {
          "id": "tf2-tp.4-4",
          "q": "El requerimiento RF7 establece que el sistema debe descontar stock automáticamente al registrarse una venta.",
          "a": true,
          "explain": "Sí: RF7 es justamente ese, el descuento automático de stock al registrar una venta, de la mano de RF6 que mantiene el stock actualizado."
        },
        {
          "id": "tf2-tp.4-5",
          "q": "La regla de negocio RN3 indica que el sistema debe contemplar la gestión de cientos de proveedores en simultáneo.",
          "a": false,
          "explain": "No: RN3 dice un conjunto reducido de proveedores. Si en la defensa preguntan por cientos de proveedores, eso quedó fuera del alcance por decisión de negocio."
        }
      ],
      "mc": [
        {
          "id": "mc2-tp.4-1",
          "q": "¿Qué describen los requerimientos no funcionales (RNFx)?",
          "options": [
            "Qué funciones concretas debe ejecutar el sistema agrupadas por área",
            "Cómo debe comportarse el sistema: rendimiento, seguridad, etc.",
            "Las reglas y límites de alcance que define el negocio dueño",
            "El orden en que se construyen los incrementos del producto"
          ],
          "correctIndex": 1,
          "explain": "Los RNFx describen cómo se comporta el sistema: rendimiento, seguridad, usabilidad, compatibilidad, consistencia. El 'qué hace' son los funcionales y los límites son de negocio."
        },
        {
          "id": "mc2-tp.4-2",
          "q": "¿Cuál de estos es un requerimiento funcional del grupo de Stock?",
          "options": [
            "RF3: verificar la disponibilidad de stock antes de una venta mayorista",
            "RF8: incrementar stock automáticamente al ingresar mercadería",
            "RF13: generar órdenes de compra a los proveedores",
            "RF22: gestionar usuarios con distintos roles de acceso"
          ],
          "correctIndex": 1,
          "explain": "RF8 (incrementar stock al ingreso de mercadería) es del grupo Stock. RF3 es de Ventas, RF13 de Compras y RF22 de Usuarios."
        },
        {
          "id": "mc2-tp.4-3",
          "q": "¿Qué garantiza el requerimiento no funcional RNF5?",
          "options": [
            "El control de acceso basado en roles de usuario",
            "La compatibilidad con el hardware ya existente",
            "La consistencia de la información, evitando discrepancias",
            "Los tiempos de respuesta adecuados en consultas"
          ],
          "correctIndex": 2,
          "explain": "RNF5 garantiza la consistencia de la información, evitando discrepancias en el stock. El de roles es RNF2, el de hardware RNF3 y el de tiempos RNF1."
        },
        {
          "id": "mc2-tp.4-4",
          "q": "Según el truco del TP, ¿cómo están agrupados los requerimientos funcionales?",
          "options": [
            "Por prioridad de implementación de cada incremento",
            "Por el rol del usuario que ejecuta cada función",
            "Por orden cronológico de aparición en las entrevistas",
            "Por área del negocio: Ventas, Stock, Compras y más"
          ],
          "correctIndex": 3,
          "explain": "Van por área del negocio: Ventas, Stock, Compras, Ingreso de mercadería, Información y Usuarios. Si te acordás de las áreas, reconstruís casi todos los RFx."
        }
      ],
      "ms": [
        {
          "id": "ms2-tp.4-1",
          "q": "¿Cuáles de estos son requerimientos de negocio (RNx) del sistema?",
          "options": [
            "El sistema debe soportar ventas minoristas y mayoristas",
            "El sistema no debe incluir la gestión de pagos",
            "El sistema debe generar comprobantes de venta al cerrar",
            "El sistema debe contemplar un conjunto reducido de proveedores",
            "El sistema debe descontar stock al registrarse una venta"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Los de negocio son RN1 (ventas minoristas y mayoristas), RN2 (sin pagos) y RN3 (proveedores reducidos). Generar comprobantes y descontar stock son funcionales (RF5 y RF7)."
        },
        {
          "id": "ms2-tp.4-2",
          "q": "¿Cuáles de estas afirmaciones sobre los requerimientos no funcionales son correctas?",
          "options": [
            "RNF1 pide tiempos de respuesta adecuados en consulta de stock",
            "RNF2 garantiza el control de acceso basado en roles",
            "RNF4 pide una interfaz de uso simple e intuitiva",
            "RNF3 exige migrar el hardware a equipos más nuevos",
            "RNF5 garantiza la consistencia evitando discrepancias de stock"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Las cuatro primeras menos RNF3 son correctas. RNF3 pide compatibilidad con el hardware existente, no migrar a equipos nuevos."
        },
        {
          "id": "ms2-tp.4-3",
          "q": "¿Cuáles de estos requerimientos funcionales pertenecen al grupo de Compras (RF10 a RF15)?",
          "options": [
            "Registrar pedidos a proveedores",
            "Generar comprobantes de venta al cliente",
            "Generar órdenes de compra a proveedores",
            "Consultar el historial de ventas del sistema",
            "Soporte para la decisión de compra según stock y ventas"
          ],
          "correctIndexes": [
            0,
            2,
            4
          ],
          "explain": "Del grupo Compras son RF10 (registrar pedidos), RF13 (generar órdenes) y RF12 (soporte a la decisión de compra). Comprobantes (RF5) es de Ventas e historial de ventas (RF20) es de Información."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-tp.4-1",
        "front": "¿En qué tres grupos se dividen los requerimientos?",
        "back": "Funcionales (RFx: qué debe hacer, por área), no funcionales (RNFx: cómo debe comportarse) y de negocio (RNx: reglas y límites del alcance). Cada uno con código fijo de trazabilidad."
      },
      {
        "id": "fc2-tp.4-2",
        "front": "¿Qué dicen las tres reglas de negocio RN1, RN2 y RN3?",
        "back": "RN1: soportar ventas minoristas y mayoristas. RN2: NO incluir la gestión de pagos. RN3: contemplar un conjunto reducido de proveedores."
      },
      {
        "id": "fc2-tp.4-3",
        "front": "¿Qué queda fuera del alcance por las reglas de negocio?",
        "back": "Por RN2, la gestión de pagos (cobros, facturación de pagos). Por RN3, los cientos de proveedores: solo se contempla un conjunto reducido. Fue decisión de negocio."
      },
      {
        "id": "fc2-tp.4-4",
        "front": "¿Qué pide cada requerimiento no funcional (RNF1 a RNF5)?",
        "back": "RNF1: tiempos de respuesta en consulta de stock. RNF2: control de acceso por roles. RNF3: compatibilidad con hardware existente. RNF4: interfaz simple e intuitiva. RNF5: consistencia de la información."
      },
      {
        "id": "fc2-tp.4-5",
        "front": "¿Por qué áreas se agrupan los requerimientos funcionales?",
        "back": "Ventas, Stock, Compras, Ingreso de mercadería, Información y Usuarios. Acordándote de las áreas reconstruís casi todos los RFx."
      },
      {
        "id": "fc2-tp.4-6",
        "front": "¿Qué establecen RF7 y RF8 sobre el stock?",
        "back": "RF7: descontar stock automáticamente al registrarse una venta. RF8: incrementar stock automáticamente al registrarse el ingreso de mercadería."
      },
      {
        "id": "fc2-tp.4-7",
        "front": "¿Para qué sirven los códigos RFx, RNFx y RNx?",
        "back": "Son códigos fijos que sirven de trazabilidad: identifican cada requerimiento de forma unívoca dentro de su grupo (funcional, no funcional o de negocio)."
      },
      {
        "id": "fc2-tp.4-8",
        "front": "¿Qué funcional centraliza la información hoy dispersa?",
        "back": "RF19: el sistema debe centralizar la información actualmente distribuida en planillas y correos electrónicos. Es del grupo Información (RF19 a RF21)."
      }
    ]
  },
  "tp.5": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-tp.5-1",
          "q": "El Administrador es el único de los seis actores que no se corresponde con un cargo del organigrama operativo de la librería.",
          "a": true,
          "explain": "Tal cual: el TP aclara que el Administrador es un rol funcional de sistema (gestión de cuentas y permisos) y no figura en el organigrama. Los otros cinco sí salen de cargos reales."
        },
        {
          "id": "tf2-tp.5-2",
          "q": "En la relación «include», un caso de uso ejecuta a otro solo bajo cierta condición particular.",
          "a": false,
          "explain": "Eso es «extend». «Include» significa que siempre se ejecuta como parte obligada del flujo; «extend» es el condicional (pasa solo a veces)."
        },
        {
          "id": "tf2-tp.5-3",
          "q": "En CU1 Registrar venta minorista, el sistema gestiona el cobro del pago antes de descontar el inventario.",
          "a": false,
          "explain": "No: el propio caso aclara que el sistema no gestiona pagos. El Vendedor confirma, el sistema descuenta inventario y genera el comprobante, pero no cobra."
        },
        {
          "id": "tf2-tp.5-4",
          "q": "Tanto CU1 Registrar venta minorista como CU2 Registrar pedido mayorista incluyen Verificar disponibilidad de stock y Generar comprobante de venta.",
          "a": true,
          "explain": "Correcto: los dos casos de venta comparten esos dos «include» obligatorios, verificar stock y generar el comprobante."
        },
        {
          "id": "tf2-tp.5-5",
          "q": "CU8 Confirmar orden de compra es el único caso de uso disparado por un actor externo, el Proveedor.",
          "a": true,
          "explain": "Sí: el Proveedor es entidad externa y entra por un portal a confirmar, rechazar o aceptar parcialmente la OC, notificando luego al Gerente de Compras."
        }
      ],
      "mc": [
        {
          "id": "mc2-tp.5-1",
          "q": "¿Qué dos casos de uso tiene asignados el Vendedor según la correspondencia con el organigrama?",
          "options": [
            "CU3 Consultar stock en tiempo real y CU4 Registrar ingreso de mercadería al depósito",
            "CU1 Registrar venta minorista y CU2 Registrar pedido mayorista al sistema",
            "CU5 Generar la orden de compra a proveedores y CU7 Consultar historial de movimientos",
            "CU6 Gestionar usuarios y roles del sistema y CU8 Confirmar la orden de compra externa"
          ],
          "correctIndex": 1,
          "explain": "El Vendedor (Comercial) dispara CU1 y CU2. CU3/CU4 son del Jefe de depósito, CU5 del Gerente de Compras, CU7 del Gerente General, CU6 del Administrador y CU8 del Proveedor."
        },
        {
          "id": "mc2-tp.5-2",
          "q": "En CU4 Registrar ingreso de mercadería, ¿qué dispara la relación «extend» hacia Registrar inconsistencias?",
          "options": [
            "Que el proveedor confirme la fecha estimada de entrega en su portal",
            "Que el usuario no esté autenticado con el rol de Jefe de depósito",
            "Que las cantidades físicas recibidas difieran de las de la orden",
            "Que la orden de compra todavía no haya sido generada ni enviada"
          ],
          "correctIndex": 2,
          "explain": "El «extend» a Registrar inconsistencias salta cuando las cantidades físicas no coinciden con la OC (faltantes o sobrantes); ahí la orden queda en estado parcial o con diferencias."
        },
        {
          "id": "mc2-tp.5-3",
          "q": "¿Cuál es la precondición de CU2 Registrar pedido mayorista que lo diferencia de CU1?",
          "options": [
            "Que exista una orden de compra previamente enviada al proveedor",
            "Que el cliente mayorista ya esté registrado en la base de datos",
            "Que el Administrador haya asignado el rol de Compras al usuario",
            "Que el stock mínimo del producto esté configurado en el sistema"
          ],
          "correctIndex": 1,
          "explain": "CU2 exige que el cliente mayorista ya esté registrado en la base (además de Vendedor autenticado). En CU1, al ser cliente presencial, no hace falta tener al cliente cargado."
        },
        {
          "id": "mc2-tp.5-4",
          "q": "¿Qué actor tiene como caso de uso CU6 Gestionar usuarios y roles?",
          "options": [
            "El Administrador, que es un rol del sistema",
            "El Gerente General desde el área de Dirección general",
            "El Jefe de depósito del área de Logística y depósito",
            "El Gerente de Compras desde el área de Compras de la librería"
          ],
          "correctIndex": 0,
          "explain": "CU6 es del Administrador (TI/Sistema), que hace altas, bajas, modificaciones y asignación de roles. Es el único actor sin cargo real en el organigrama."
        },
        {
          "id": "mc2-tp.5-5",
          "q": "En CU5 Generar orden de compra, ¿qué hace el «extend» Generar pedido periódico cuando el Gerente lo elige?",
          "options": [
            "Confirma de forma automática la orden ante el proveedor elegido",
            "Registra el ingreso físico de la mercadería contra la orden",
            "Crea un borrador automático según parámetros de tiempo predefinidos",
            "Notifica al Gerente General el historial de las compras del período"
          ],
          "correctIndex": 2,
          "explain": "El pedido periódico arma un borrador automático según parámetros de tiempo predefinidos, que el Gerente revisa, ajusta y confirma; no parte de cero."
        }
      ],
      "ms": [
        {
          "id": "ms2-tp.5-1",
          "q": "¿Cuáles de las siguientes afirmaciones sobre los actores y su correspondencia con el organigrama son correctas?",
          "options": [
            "El Proveedor figura como una entidad externa sin área asignada",
            "El Gerente General tiene asignado el caso de uso CU7",
            "El Jefe de depósito pertenece al área de Logística",
            "El Vendedor pertenece al área de Compras de la librería junto al Gerente",
            "El Administrador aparece como un cargo del organigrama de TI"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Verdaderas: el Proveedor es entidad externa sin área (—), el Gerente General hace CU7 y el Jefe de depósito está en Logística. Falsas: el Vendedor es de Comercial (no Compras) y el Administrador NO figura en el organigrama."
        },
        {
          "id": "ms2-tp.5-2",
          "q": "Según las relaciones del diagrama, ¿cuáles de estos casos de uso son «include» (siempre se ejecutan como parte del flujo)?",
          "options": [
            "Verificar disponibilidad de stock dentro de CU1 y CU2",
            "Registrar inconsistencias dentro de CU4 cuando hay diferencias",
            "Generar comprobante de venta dentro de CU1 y CU2",
            "Generar pedido periódico dentro de CU5 al elegir esa opción",
            "Confirmar la orden de compra por parte del Proveedor externo"
          ],
          "correctIndexes": [
            0,
            2
          ],
          "explain": "Los «include» (obligatorios) son Verificar stock y Generar comprobante en CU1/CU2. Registrar inconsistencias y Generar pedido periódico son «extend» (condicionales), y confirmar la OC es CU8, un caso aparte."
        },
        {
          "id": "ms2-tp.5-3",
          "q": "¿Cuáles de los siguientes flujos alternativos se describen explícitamente para el caso CU3 Consultar stock en tiempo real?",
          "options": [
            "Si las cantidades difieren, registra la inconsistencia automáticamente",
            "Si el código es incorrecto, pide volver a ingresar el producto buscado",
            "Si el usuario duplica el correo, exige un identificador único",
            "Si el período no tiene registros, avisa que no hay movimientos",
            "Si el stock es insuficiente, bloquea la carga del artículo pedido"
          ],
          "correctIndexes": [],
          "explain": "Ninguna corresponde a CU3: su único alternativo es «Producto no encontrado» con el mensaje «El producto buscado no existe». Las otras son de CU4, CU6, CU7 y CU1/CU2 respectivamente."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-tp.5-1",
        "front": "¿Cuáles son los seis actores del sistema?",
        "back": "Vendedor, Jefe de depósito, Gerente de Compras, Gerente General, Proveedor y Administrador. Cinco salen del organigrama y el Administrador es puramente del sistema."
      },
      {
        "id": "fc2-tp.5-2",
        "front": "Relación «include» vs «extend»",
        "back": "«Include»: el caso siempre ejecuta a otro como parte obligada del flujo. «Extend»: el caso se ejecuta solo bajo cierta condición."
      },
      {
        "id": "fc2-tp.5-3",
        "front": "CU1 Registrar venta minorista: actor y RFs",
        "back": "Actor principal: Vendedor. Cubre RF1, RF4, RF5, RF7, RNF1, RNF2. Registra una venta presencial, valida y descuenta stock y genera el comprobante (sin gestionar pagos)."
      },
      {
        "id": "fc2-tp.5-4",
        "front": "CU4 Registrar ingreso de mercadería: ¿qué extiende y cuándo?",
        "back": "Extiende a Registrar inconsistencias, solo si las cantidades físicas recibidas no coinciden con la orden de compra. Ahí la OC queda en estado parcial o con diferencias."
      },
      {
        "id": "fc2-tp.5-5",
        "front": "¿Por qué el Administrador no tiene cargo en el organigrama?",
        "back": "Es un rol funcional del sistema (gestión de cuentas y permisos, CU6) y no se corresponde con un cargo del organigrama operativo de la librería."
      },
      {
        "id": "fc2-tp.5-6",
        "front": "CU8 Confirmar orden de compra: ¿qué tiene de particular?",
        "back": "Es el único caso disparado por un actor externo, el Proveedor, que desde un portal confirma, rechaza o acepta parcialmente la OC y notifica al Gerente de Compras."
      },
      {
        "id": "fc2-tp.5-7",
        "front": "Mapeo actor → caso(s) de uso",
        "back": "Vendedor → CU1 y CU2; Jefe de depósito → CU3 y CU4; Gerente de Compras → CU5; Administrador → CU6; Gerente General → CU7; Proveedor → CU8."
      },
      {
        "id": "fc2-tp.5-8",
        "front": "Formato de las Historias de Usuario",
        "back": "Mismo contenido que los casos de uso pero en formato «Como… Quiero… Para…». Hay una HU por cada uno de los 8 casos de uso, con el mismo actor."
      }
    ]
  },
  "tp.6": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-tp.6-1",
          "q": "Ninguna de las cuatro subfunciones (S1 a S4) es iniciada directamente por un actor; se ejecutan dentro de su caso de uso principal.",
          "a": true,
          "explain": "Correcto: al ser casos «incluidos» o «extendidos», no los arranca un actor directo, sino que corren adentro del CU principal que las llama."
        },
        {
          "id": "tf2-tp.6-2",
          "q": "La subfunción S1 Verificar disponibilidad de stock modifica el stock del producto como parte de su ejecución.",
          "a": false,
          "explain": "No: S1 es solo una consulta. Su postcondición es saber si hay stock suficiente, pero NO cambia ningún dato."
        },
        {
          "id": "tf2-tp.6-3",
          "q": "S4 Generar pedido periódico arma directamente una orden de compra definitiva, sin pasar por revisión del Gerente.",
          "a": false,
          "explain": "Falso: S4 arma solo un borrador con reglas configuradas y se lo muestra al Gerente de Compras para que lo revise y ajuste antes de seguir."
        },
        {
          "id": "tf2-tp.6-4",
          "q": "En el modelo de datos, una Venta puede tener varios Detalles de Venta y cada Detalle corresponde a un Producto.",
          "a": true,
          "explain": "Tal cual: una Venta agrupa varios Detalles de Venta, y cada Detalle apunta a un Producto. Lo mismo pasa con la Orden de Compra y sus detalles."
        },
        {
          "id": "tf2-tp.6-5",
          "q": "Los requerimientos RF19 y RF23 pertenecen a un único caso de uso específico de la trazabilidad.",
          "a": false,
          "explain": "No: RF19 (centralizar la información) y RF23 (que varias áreas usen el sistema a la vez) son generales y no pertenecen a un solo caso de uso."
        }
      ],
      "mc": [
        {
          "id": "mc2-tp.6-1",
          "q": "¿Cuáles son las cuatro subfunciones descritas en la Parte 6?",
          "options": [
            "Verificar stock, generar comprobante, registrar inconsistencias y generar pedido",
            "Registrar la venta minorista, el pedido mayorista, el ingreso y la consulta de stock real",
            "Gestionar usuarios, consultar el historial, confirmar la orden y generar la compra final",
            "Crear el cliente, generar la venta, descontar el stock disponible y emitir la factura final"
          ],
          "correctIndex": 0,
          "explain": "Las cuatro subfunciones son S1 Verificar disponibilidad de stock, S2 Generar comprobante de venta, S3 Registrar inconsistencias y S4 Generar pedido periódico."
        },
        {
          "id": "mc2-tp.6-2",
          "q": "Según la tabla, ¿qué tipo de relación tienen S1 Verificar stock y S2 Generar comprobante con CU1 y CU2?",
          "options": [
            "Son subfunciones que «extienden» de modo condicional",
            "Son casos principales que reemplazan a CU1 y CU2",
            "Son entidades del modelo de datos preliminar nuevo",
            "Son subfunciones que «incluye» CU1 y también CU2"
          ],
          "correctIndex": 3,
          "explain": "S1 y S2 son «incluye» (incluidas) en CU1 y CU2: se ejecutan siempre como parte de cada venta. S3 y S4 son las que «extienden»."
        },
        {
          "id": "mc2-tp.6-3",
          "q": "En el diagrama de secuencia de CU3, ¿qué participantes intervienen?",
          "options": [
            "Vendedor, Pantalla de Ventas, Gestor de Ventas y la entidad Venta del sistema",
            "Administrador, Pantalla de Usuarios, Gestor de Usuarios, Usuario y la entidad Rol",
            "Jefe de depósito, Pantalla de Consulta de Stock, Gestor de Stock y Producto",
            "Gerente General, Pantalla de Reportes, Gestor de Reportes, la Venta y la Compra"
          ],
          "correctIndex": 2,
          "explain": "CU3 Consultar stock involucra al Jefe de depósito, la Pantalla de Consulta de Stock, el Gestor de Stock y el Producto; si no existe, avisa."
        },
        {
          "id": "mc2-tp.6-4",
          "q": "Según la trazabilidad, ¿qué entidades usa CU4 Registrar ingreso de mercadería?",
          "options": [
            "Usuario, Rol y los datos de acceso del perfil del empleado",
            "Orden de Compra, Ingreso de Mercadería y Producto del depósito",
            "Cliente, Venta, Detalle de Venta y el comprobante de la operación",
            "Producto, Proveedor, Orden de Compra y su detalle correspondiente"
          ],
          "correctIndex": 1,
          "explain": "CU4 usa Orden de Compra, Ingreso de Mercadería y Producto (RF8, RF16, RF17). Las de la última opción son de CU5, y Cliente/Venta/Detalle son de CU1 y CU2."
        },
        {
          "id": "mc2-tp.6-5",
          "q": "En el diagrama de secuencia de CU6, ¿qué hace el Gestor de Usuarios antes de guardar un alta?",
          "options": [
            "Verifica que el usuario no exista y luego asigna el rol",
            "Descuenta el stock del producto comprado por el usuario",
            "Genera el comprobante de venta y lo deja para imprimir",
            "Compara las cantidades recibidas contra la orden de compra"
          ],
          "correctIndex": 0,
          "explain": "En CU6, el Gestor verifica que el usuario no exista; si no existe, asigna el rol y guarda. Si ya existe, avisa que el usuario ya existe."
        }
      ],
      "ms": [
        {
          "id": "ms2-tp.6-1",
          "q": "¿Cuáles de estas afirmaciones sobre las relaciones «incluye» y «extiende» de las subfunciones son correctas?",
          "options": [
            "S1 Verificar stock «incluye» en CU1 y en CU2 siempre",
            "S3 Registrar inconsistencias «extiende» a CU4 si hay diferencias",
            "S2 Generar comprobante de venta «extiende» a CU7 al filtrar fechas del período",
            "S4 Generar pedido periódico «extiende» a CU5 si el Gerente lo elige",
            "S1 Verificar stock «extiende» a CU6 al crear un usuario nuevo"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Verdaderas: S1 «incluye» en CU1/CU2 (siempre), S3 «extiende» a CU4 si hay diferencias y S4 «extiende» a CU5 si lo eligen. Falsas: S2 «incluye» (no extiende) en ventas, y S1 no toca CU6."
        },
        {
          "id": "ms2-tp.6-2",
          "q": "Según el modelo de datos preliminar, ¿cuáles de estos datos guarda la entidad Producto?",
          "options": [
            "Stock actual y stock mínimo del producto",
            "Precio minorista y precio mayorista",
            "Número de comprobante, fecha y total de la venta registrada",
            "Código y descripción del producto",
            "CUIT y datos de contacto del proveedor"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Producto guarda Código, Descripción, Precio minorista, Precio mayorista, Stock actual y Stock mínimo. Número de comprobante es de Venta y el CUIT del Proveedor es de Proveedor."
        },
        {
          "id": "ms2-tp.6-3",
          "q": "¿Cuáles de los siguientes participan en el diagrama de secuencia de CU8 Confirmar orden de compra?",
          "options": [
            "El Proveedor que entra desde el Portal del Proveedor externo",
            "El Gestor de Órdenes que obtiene y marca las órdenes pendientes",
            "El Vendedor que ingresa el código y la cantidad de cada producto del pedido",
            "La entidad Orden de Compra que cambia de estado al confirmar",
            "El Gerente de Compras que recibe el aviso de la confirmación"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "En CU8 participan el Proveedor, el Portal del Proveedor, el Gestor de Órdenes, la Orden de Compra y el Gerente de Compras (recibe la notificación). El Vendedor no interviene acá."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-tp.6-1",
        "front": "¿Cuáles son las tres cosas que hace la Parte 6?",
        "back": "(a) Describir los casos de uso que faltaban (las subfunciones), (b) mostrar cada CU por dentro con un diagrama de secuencia y (c) armar un modelo de datos preliminar."
      },
      {
        "id": "fc2-tp.6-2",
        "front": "Las 4 subfunciones (S1–S4)",
        "back": "S1 Verificar disponibilidad de stock, S2 Generar comprobante de venta («incluye» en CU1/CU2), S3 Registrar inconsistencias («extiende» CU4) y S4 Generar pedido periódico («extiende» CU5)."
      },
      {
        "id": "fc2-tp.6-3",
        "front": "¿Qué hace S1 Verificar disponibilidad de stock y qué NO hace?",
        "back": "Recibe producto y cantidad, busca el stock y compara; avisa si alcanza. Es solo consulta: su postcondición es saber si hay stock, pero NO modifica ningún dato."
      },
      {
        "id": "fc2-tp.6-4",
        "front": "Regla de oro «incluye» vs «extiende»",
        "back": "«Incluye» = siempre pasa (S1 y S2 son obligatorios en cada venta). «Extiende» = pasa solo a veces (S3 si hay diferencias, S4 si el Gerente elige el pedido periódico)."
      },
      {
        "id": "fc2-tp.6-5",
        "front": "Entidad Venta: ¿qué datos guarda?",
        "back": "Número de venta, Fecha, Tipo (minorista/mayorista), Cliente, Vendedor, Total y Número de comprobante. El comprobante se guarda como parte de la Venta."
      },
      {
        "id": "fc2-tp.6-6",
        "front": "Entidad Inconsistencia: ¿qué datos guarda?",
        "back": "Ingreso, Producto, Cantidad pedida, Cantidad recibida, Diferencia y Tipo (faltante/sobrante). Surge cuando lo recibido no coincide con la orden de compra."
      },
      {
        "id": "fc2-tp.6-7",
        "front": "¿Para qué sirve la tabla de trazabilidad?",
        "back": "Conecta cada caso de uso con los requerimientos funcionales que cumple y las entidades que usa, mostrando que nada quedó colgado."
      },
      {
        "id": "fc2-tp.6-8",
        "front": "RF19 y RF23 en la trazabilidad",
        "back": "Son generales (RF19 centralizar la información; RF23 que varias áreas usen el sistema a la vez) y no pertenecen a un solo caso de uso."
      }
    ]
  }
};
