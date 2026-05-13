/**
 * Data central de la app.
 *
 * Tipos conceptuales (documentación, no enforced):
 *
 *   ContentBlock =
 *     | { type: "h3"; text: string; criollo?: string }
 *     | { type: "p"; text: string }
 *     | { type: "ul"; items: string[] }
 *     | { type: "ol"; items: string[] }
 *     | { type: "callout"; tone: "info" | "warning" | "criollo"; text: string }
 *     | { type: "figure"; src: string; alt: string; caption: string }
 *
 *   TFQuestion = { id, q, a: bool, explain }
 *   MCQuestion = { id, q, options: string[], correctIndex: number, explain }
 *   Flashcard  = { id, front, back }
 *
 *   Section = { id, title, criollo, blocks, quiz: { tf, mc }, flashcards }
 *
 * Regla: todo el contenido sale de los 3 PDFs. Nada inventado.
 */

export const SECTIONS = [
  // ---------- SECCIÓN 1 ----------
  {
    id: '1',
    title: '¿Qué es un proyecto y por qué necesita gestión?',
    criollo:
      'Básicamente: un proyecto es algo que arrancás, hacés y terminás, con un objetivo concreto y recursos que tenés que cuidar. No es la rutina del trabajo de todos los días. Y la administración de proyectos es la disciplina que se encarga de que eso salga bien.',
    blocks: [
      {
        type: 'p',
        text:
          'Para comenzar, debemos tener una definición clara y compartida de qué es un proyecto y por qué la disciplina que lo gestiona importa.',
      },
      {
        type: 'h3',
        text: 'Definición de proyecto',
        criollo:
          'Un proyecto es algo único, con fecha de inicio y de fin, con plata y gente asignadas, y con un objetivo claro de lo que hay que entregar. Si es una tarea continua y rutinaria, no es proyecto: es operación.',
      },
      {
        type: 'p',
        text:
          'Un proyecto es, fundamentalmente, un esfuerzo temporal y único que se emprende para crear un producto, servicio o resultado específico.',
      },
      {
        type: 'p',
        text: 'Sus características clave:',
      },
      {
        type: 'ul',
        items: [
          'Temporal: todo proyecto tiene un comienzo y un final definidos. No es una operación continua o rutinaria de la empresa (como la facturación o el soporte técnico). Su naturaleza es finita.',
          'Único: el producto o resultado del proyecto es diferente de otros. Por ejemplo, construir un nuevo edificio es un proyecto; el mantenimiento diario de este es una operación. Aunque se hayan construido otros edificios antes, este tendrá una ubicación, diseño y equipo de trabajo específicos que lo hacen único.',
          'Recursos definidos: se le asigna un presupuesto, personal y equipamiento específicos para su ejecución.',
          'Resultado específico: busca alcanzar un objetivo claro y tangible.',
        ],
      },
      {
        type: 'h3',
        text: 'La administración de proyectos (project management)',
        criollo:
          'Es la disciplina que planifica, organiza y controla todo lo que pasa en un proyecto para que llegue a destino dentro de los límites de alcance, tiempo y costo. Aumenta las chances de que salga bien.',
      },
      {
        type: 'p',
        text:
          'Es la disciplina que consiste en planificar, organizar, asegurar y gestionar los recursos para llevar a cabo el trabajo requerido y cumplir con los objetivos del proyecto dentro de las restricciones definidas (alcance, tiempo y costo).',
      },
      {
        type: 'p',
        text:
          'Su importancia radica en que aumenta las probabilidades de éxito, optimiza el uso de recursos y proporciona un marco de trabajo claro para todo el equipo.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-1-1',
          q: 'Un proyecto es una operación continua y rutinaria de la empresa.',
          a: false,
          explain:
            'Falso. El proyecto es temporal, tiene comienzo y final definidos. Una operación continua, como la facturación, no es un proyecto.',
        },
        {
          id: 'tf-1-2',
          q: 'Todo proyecto tiene un comienzo y un final definidos.',
          a: true,
          explain:
            'Verdadero. La característica "temporal" implica exactamente eso: el proyecto tiene fechas de inicio y fin acotadas.',
        },
        {
          id: 'tf-1-3',
          q: 'El mantenimiento diario de un edificio es un proyecto.',
          a: false,
          explain:
            'Falso. Construir el edificio es un proyecto (único, temporal). El mantenimiento diario es una operación rutinaria.',
        },
        {
          id: 'tf-1-4',
          q: 'La administración de proyectos garantiza el éxito al 100%.',
          a: false,
          explain:
            'Falso. Aumenta las probabilidades de éxito y optimiza recursos, pero no garantiza el éxito automáticamente.',
        },
      ],
      mc: [
        {
          id: 'mc-1-1',
          q: '¿Cuál NO es una característica de un proyecto?',
          options: ['Temporal', 'Único', 'Repetitivo y continuo', 'Recursos definidos'],
          correctIndex: 2,
          explain:
            'La característica opuesta es la verdad: un proyecto es temporal y único, no repetitivo ni continuo. Eso lo distingue de una operación.',
        },
        {
          id: 'mc-1-2',
          q: 'Las tres restricciones principales que la administración de proyectos busca respetar son:',
          options: [
            'Alcance, tiempo y costo',
            'Alcance, calidad y equipo',
            'Tiempo, equipo y presupuesto',
            'Costo, calidad y recursos',
          ],
          correctIndex: 0,
          explain:
            'El apunte menciona explícitamente que la administración cumple los objetivos dentro de las restricciones de alcance, tiempo y costo.',
        },
        {
          id: 'mc-1-3',
          q: '¿Por qué importa la administración de proyectos?',
          options: [
            'Reemplaza la necesidad de un equipo de trabajo',
            'Aumenta las probabilidades de éxito y optimiza recursos',
            'Garantiza el éxito del proyecto al 100%',
            'Solo aplica a proyectos de gran escala',
          ],
          correctIndex: 1,
          explain:
            'Su importancia radica en que aumenta las probabilidades de éxito, optimiza el uso de recursos y da un marco claro al equipo.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-1-1',
        front: 'Proyecto',
        back:
          'Esfuerzo temporal y único que se emprende para crear un producto, servicio o resultado específico.',
      },
      {
        id: 'fc-1-2',
        front: 'Característica "Temporal" de un proyecto',
        back:
          'Tiene un comienzo y un final definidos. No es operación continua o rutinaria.',
      },
      {
        id: 'fc-1-3',
        front: 'Característica "Único" de un proyecto',
        back:
          'El producto o resultado es diferente de otros. Aun cuando se hayan hecho cosas similares, esta es distinta por ubicación, diseño o equipo.',
      },
      {
        id: 'fc-1-4',
        front: 'Característica "Recursos definidos"',
        back:
          'Se asigna un presupuesto, personal y equipamiento específicos para la ejecución del proyecto.',
      },
      {
        id: 'fc-1-5',
        front: 'Característica "Resultado específico"',
        back: 'Busca alcanzar un objetivo claro y tangible.',
      },
      {
        id: 'fc-1-6',
        front: 'Administración de proyectos (project management)',
        back:
          'Disciplina que planifica, organiza, asegura y gestiona los recursos para cumplir los objetivos dentro de las restricciones de alcance, tiempo y costo.',
      },
      {
        id: 'fc-1-7',
        front: 'Las 3 restricciones del proyecto',
        back: 'Alcance, tiempo y costo.',
      },
    ],
  },

  // ---------- SECCIÓN 2 ----------
  {
    id: '2',
    title: 'El nacimiento de un proyecto (fase conceptual)',
    criollo:
      'Básicamente, los proyectos no caen del cielo: alguien tiene una idea, alguien la evalúa y alguien la aprueba antes de arrancar. Hay un filtro con varias etapas —business case, estudio de factibilidad, comités— para que no se gaste plata en proyectos que no convienen. Dale, veamos cómo funciona ese proceso.',
    blocks: [
      {
        type: 'p',
        text:
          'Los proyectos no surgen de la nada. Nacen de necesidades y oportunidades que se evalúan y filtran antes de ser aprobados.',
      },
      {
        type: 'h3',
        text: 'Fuentes de proyectos',
        criollo:
          'Las ideas para proyectos vienen de todos lados: del mercado, de los clientes, de las leyes, de la estrategia de la empresa o de los propios empleados. Todas esas ideas entran a un embudo de selección.',
      },
      {
        type: 'p',
        text:
          'Las ideas para nuevos proyectos provienen de diversas fuentes, que actúan como "entradas" a un embudo de selección:',
      },
      {
        type: 'ul',
        items: [
          'Oportunidades de negocio: detectar un nuevo nicho de mercado, la posibilidad de mejorar la eficiencia, etc.',
          'Requerimientos del cliente: un cliente (interno o externo) solicita un nuevo producto o una nueva funcionalidad.',
          'Cambios regulatorios: nuevas leyes o normativas que obligan a la empresa a realizar cambios (por ej. una nueva ley de protección de datos).',
          'Plan estratégico: la alta dirección define metas a largo plazo que se desglosan en proyectos específicos para alcanzarlas.',
          'Ideas innovadoras: propuestas de los propios empleados para mejorar procesos o productos.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/embudo-fuentes.png',
        alt: 'Embudo: fuentes de proyectos pasan por business case y estudio de factibilidad hasta llegar a aprobación',
        caption: 'Las fuentes entran al embudo y se filtran hasta llegar a proyecto aprobado.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/proceso-fuentes.png',
        alt: 'Proceso de fuentes hasta estudio de factibilidad',
        caption: 'Flujo: ideas → oportunidades → requerimientos → cambios → plan estratégico → estudio de factibilidad.',
      },
      {
        type: 'h3',
        text: 'El proceso de selección y aprobación',
        criollo:
          'Una vez que surge la idea, hay que formalizarla y evaluarla. No alcanza con decir "che, tenemos una idea buenísima"; hay que demostrar que tiene sentido técnico, económico y operativo.',
      },
      {
        type: 'p',
        text:
          'Una vez que surge una idea, esta debe ser formalizada y evaluada. El proceso incluye tres instancias principales:',
      },
      {
        type: 'ol',
        items: [
          'Business case (caso de negocio): es el primer documento formal. Justifica la razón de ser del proyecto, y analiza los beneficios esperados, los costos estimados y su alineación con la estrategia de la empresa.',
          'Estudio de factibilidad: se realiza un análisis para determinar si el proyecto es viable desde distintas perspectivas: factibilidad técnica (¿contamos con la tecnología y los conocimientos necesarios?), factibilidad económica (¿los beneficios superan los costos? ¿Es rentable?) y factibilidad operativa (¿el proyecto se integra con las operaciones actuales de la empresa?).',
          'Comités de revisión: la decisión de aprobar o rechazar un proyecto suele recaer en comités especializados.',
        ],
      },
      {
        type: 'h3',
        text: 'Comités de revisión',
        criollo:
          'Hay distintos comités que evalúan el proyecto desde distintas perspectivas: los ejecutivos ven si va con la estrategia, los de TI ven si es técnicamente viable, y los usuarios finales ven si les sirve.',
      },
      {
        type: 'ul',
        items: [
          'Comité directivo (steering committee): compuesto por altos ejecutivos, se enfoca en la alineación estratégica y la aprobación de grandes presupuestos.',
          'Comité de sistemas de información: gerentes y expertos del área de TI que evalúan la factibilidad técnica y la integración con los sistemas existentes.',
          'Comité del grupo de usuarios: representantes de las áreas que se verán afectadas o que utilizarán el resultado del proyecto. Aportan la visión del "cliente" final.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Si el proyecto supera estas fases, se obtiene la aprobación formal y se puede proceder a su planificación detallada.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-2-1',
          q: 'El business case es el primer documento formal que justifica la razón de ser del proyecto.',
          a: true,
          explain:
            'Verdadero. El business case analiza beneficios esperados, costos estimados y alineación estratégica, y es el primer documento formal del proceso de aprobación.',
        },
        {
          id: 'tf-2-2',
          q: 'La factibilidad económica analiza si el proyecto se integra con las operaciones actuales de la empresa.',
          a: false,
          explain:
            'Falso. Eso es la factibilidad operativa. La factibilidad económica analiza si los beneficios superan los costos y si el proyecto es rentable.',
        },
        {
          id: 'tf-2-3',
          q: 'Los cambios regulatorios pueden ser una fuente de proyectos.',
          a: true,
          explain:
            'Verdadero. Nuevas leyes o normativas que obligan a la empresa a realizar cambios son una de las fuentes de proyectos mencionadas en el apunte.',
        },
        {
          id: 'tf-2-4',
          q: 'El comité directivo está compuesto por representantes de los usuarios finales del proyecto.',
          a: false,
          explain:
            'Falso. El comité directivo está compuesto por altos ejecutivos. Los usuarios finales son representados por el comité del grupo de usuarios.',
        },
        {
          id: 'tf-2-5',
          q: 'Un proyecto puede ser aprobado sin pasar por un estudio de factibilidad.',
          a: false,
          explain:
            'Falso. El proceso formal incluye el business case, el estudio de factibilidad y los comités de revisión. Saltear alguna instancia va en contra del proceso descripto en el apunte.',
        },
      ],
      mc: [
        {
          id: 'mc-2-1',
          q: '¿Cuáles son las tres dimensiones del estudio de factibilidad?',
          options: [
            'Estratégica, financiera y organizacional',
            'Técnica, económica y operativa',
            'Legal, técnica y presupuestaria',
            'Económica, social y ambiental',
          ],
          correctIndex: 1,
          explain:
            'El apunte menciona explícitamente tres dimensiones: factibilidad técnica (tecnología y conocimientos), económica (rentabilidad) y operativa (integración con operaciones actuales).',
        },
        {
          id: 'mc-2-2',
          q: '¿Qué comité evalúa la factibilidad técnica y la integración con los sistemas existentes?',
          options: [
            'Comité directivo',
            'Comité del grupo de usuarios',
            'Comité de sistemas de información',
            'Comité de aprobación estratégica',
          ],
          correctIndex: 2,
          explain:
            'El comité de sistemas de información está integrado por gerentes y expertos de TI, y se enfoca en factibilidad técnica e integración con sistemas existentes.',
        },
        {
          id: 'mc-2-3',
          q: '¿Cuál de las siguientes NO es una fuente de proyectos mencionada en el apunte?',
          options: [
            'Oportunidades de negocio',
            'Ideas innovadoras de empleados',
            'Análisis de la competencia directa',
            'Cambios regulatorios',
          ],
          correctIndex: 2,
          explain:
            'El análisis de la competencia directa no aparece en el listado de fuentes del apunte. Las fuentes mencionadas son: oportunidades de negocio, requerimientos del cliente, cambios regulatorios, plan estratégico e ideas innovadoras.',
        },
        {
          id: 'mc-2-4',
          q: '¿Cuál es el foco principal del comité directivo (steering committee)?',
          options: [
            'Evaluar la experiencia del usuario final',
            'Revisar la integración técnica con sistemas existentes',
            'Alineación estratégica y aprobación de grandes presupuestos',
            'Elaborar el business case del proyecto',
          ],
          correctIndex: 2,
          explain:
            'El comité directivo, compuesto por altos ejecutivos, se enfoca en la alineación estratégica y la aprobación de grandes presupuestos.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-2-1',
        front: 'Business case (caso de negocio)',
        back:
          'Primer documento formal del proyecto. Justifica la razón de ser del proyecto analizando beneficios esperados, costos estimados y alineación estratégica.',
      },
      {
        id: 'fc-2-2',
        front: 'Factibilidad técnica',
        back: '¿Contamos con la tecnología y los conocimientos necesarios para llevar adelante el proyecto?',
      },
      {
        id: 'fc-2-3',
        front: 'Factibilidad económica',
        back: '¿Los beneficios superan los costos? ¿El proyecto es rentable?',
      },
      {
        id: 'fc-2-4',
        front: 'Factibilidad operativa',
        back: '¿El proyecto se integra con las operaciones actuales de la empresa?',
      },
      {
        id: 'fc-2-5',
        front: 'Comité directivo (steering committee)',
        back:
          'Compuesto por altos ejecutivos. Se enfoca en la alineación estratégica y la aprobación de grandes presupuestos.',
      },
      {
        id: 'fc-2-6',
        front: 'Comité de sistemas de información',
        back:
          'Gerentes y expertos de TI que evalúan la factibilidad técnica y la integración con los sistemas existentes.',
      },
      {
        id: 'fc-2-7',
        front: 'Comité del grupo de usuarios',
        back:
          'Representantes de las áreas afectadas o que usarán el resultado del proyecto. Aportan la visión del "cliente" final.',
      },
      {
        id: 'fc-2-8',
        front: 'Cambios regulatorios como fuente de proyectos',
        back:
          'Nuevas leyes o normativas que obligan a la empresa a realizar cambios, por ejemplo una nueva ley de protección de datos.',
      },
      {
        id: 'fc-2-9',
        front: 'Plan estratégico como fuente de proyectos',
        back:
          'La alta dirección define metas a largo plazo que se desglosan en proyectos específicos para alcanzarlas.',
      },
    ],
  },

  // ---------- SECCIÓN 3 ----------
  {
    id: '3',
    title: 'Ciclo de vida y áreas de conocimiento PMBOK',
    criollo:
      'Todo proyecto, sea grande o chico, pasa por las mismas fases: arranca, se planifica, se ejecuta, se controla y se cierra. Y el PMI —la organización mundial de project management— le puso nombre a eso y lo organizó en áreas de conocimiento en la guía PMBOK. Básicamente, es el "manual de instrucciones" del project manager.',
    blocks: [
      {
        type: 'p',
        text:
          'Todo proyecto, sin importar su tamaño o complejidad, atraviesa una serie de fases, conocidas como el ciclo de vida del proyecto.',
      },
      {
        type: 'h3',
        text: 'Las cinco fases del ciclo de vida',
        criollo:
          'Inicio, planificación, ejecución, monitoreo y control, cierre. Ojo: el monitoreo va en paralelo a la ejecución, no es una fase que empieza después.',
      },
      {
        type: 'ol',
        items: [
          'Inicio: se define el proyecto a un nivel general. Se elabora el project charter y se identifica a los interesados clave (stakeholders).',
          'Planificación: es la fase más intensiva. Se detallan el alcance, el cronograma, el presupuesto, los riesgos, los recursos y las comunicaciones. El resultado es el plan de proyecto.',
          'Ejecución: el equipo realiza el trabajo planificado para crear los entregables del proyecto. Es donde se consume la mayor parte del tiempo y del presupuesto.',
          'Monitoreo y control: se realiza en paralelo a la ejecución. Se mide el progreso real contra el planificado, se identifican desviaciones y se toman acciones correctivas.',
          'Cierre: una vez completados todos los entregables, se formaliza la aceptación del proyecto, se liberan los recursos y se documentan las lecciones aprendidas.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/ciclo-de-vida.png',
        alt: 'Diagrama del ciclo de vida del proyecto: Inicio → Planificación → Ejecución ↔ Monitoreo → Cierre',
        caption: 'Las cinco fases del ciclo de vida, con monitoreo y control en paralelo a la ejecución.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'La fase de planificación es la más intensiva y su resultado es el plan de proyecto. La fase de ejecución es donde se consume la mayor parte del tiempo y del presupuesto.',
      },
      {
        type: 'h3',
        text: 'El PMI y la Guía del PMBOK®',
        criollo:
          'El PMI es la organización mundial de project managers. Su libro más importante, la Guía del PMBOK, reúne las mejores prácticas de la industria y las organiza en áreas de conocimiento que todo director de proyecto tiene que manejar.',
      },
      {
        type: 'p',
        text:
          'El Project Management Institute (PMI) es la organización líder a nivel mundial en la profesión de dirección de proyectos. Su publicación más importante es la "Guía de los fundamentos para la dirección de proyectos" (Guía del PMBOK®), que recopila las mejores prácticas reconocidas en la industria.',
      },
      {
        type: 'h3',
        text: 'Áreas de conocimiento del PMBOK®',
        criollo:
          'Son las nueve áreas que un director de proyecto tiene que gestionar de forma integrada. No son fases, son dimensiones del proyecto que se atienden a lo largo de todo el ciclo de vida.',
      },
      {
        type: 'p',
        text:
          'La guía del PMBOK® organiza el conocimiento de la gestión de proyectos en las siguientes áreas que un director de proyecto debe gestionar de forma integrada a lo largo del ciclo de vida:',
      },
      {
        type: 'ul',
        items: [
          'Gestión de la integración: coordina todas las demás áreas para que el proyecto funcione como un todo cohesivo.',
          'Gestión del alcance: se asegura de que el proyecto incluya todo el trabajo requerido, y solo el trabajo requerido.',
          'Gestión del tiempo (cronograma): administra el tiempo para asegurar que el proyecto se complete en el plazo previsto.',
          'Gestión de los costos: se ocupa de la planificación, estimación, presupuesto y control de los costos.',
          'Gestión de la calidad: asegura que el proyecto y su resultado cumplan con los requisitos de calidad definidos.',
          'Gestión de los recursos humanos: organiza y dirige al equipo del proyecto.',
          'Gestión de las comunicaciones: garantiza que la información del proyecto se genere, distribuya y almacene de manera oportuna y adecuada.',
          'Gestión de los riesgos: identifica, analiza y responde a los riesgos del proyecto.',
          'Gestión de las adquisiciones: gestiona la compra de bienes o servicios a proveedores externos.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/pm-wheel.png',
        alt: 'Rueda alrededor de Project Management con manejo del ciclo, plan de desarrollo, calidad, auditorías',
        caption: 'El project management coordina múltiples áreas en simultáneo.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-3-1',
          q: 'La fase de monitoreo y control se realiza en paralelo a la ejecución.',
          a: true,
          explain:
            'Verdadero. El monitoreo y control no es una fase posterior a la ejecución: se realiza en simultáneo, midiendo el progreso real contra el planificado.',
        },
        {
          id: 'tf-3-2',
          q: 'La fase de ejecución es la más intensiva en términos de planificación.',
          a: false,
          explain:
            'Falso. La fase más intensiva es la planificación. La ejecución es donde se consume la mayor parte del tiempo y del presupuesto, pero el trabajo intelectual de planificar es más intensivo.',
        },
        {
          id: 'tf-3-3',
          q: 'La guía PMBOK® es publicada por el PMI.',
          a: true,
          explain:
            'Verdadero. El Project Management Institute (PMI) es la organización que publica la Guía del PMBOK®.',
        },
        {
          id: 'tf-3-4',
          q: 'La gestión del alcance se ocupa de planificar, estimar y controlar los costos.',
          a: false,
          explain:
            'Falso. Eso es la gestión de los costos. La gestión del alcance se asegura de que el proyecto incluya todo el trabajo requerido, y solo el trabajo requerido.',
        },
        {
          id: 'tf-3-5',
          q: 'En la fase de cierre se documentan las lecciones aprendidas.',
          a: true,
          explain:
            'Verdadero. En el cierre se formaliza la aceptación del proyecto, se liberan los recursos y se documentan las lecciones aprendidas.',
        },
      ],
      mc: [
        {
          id: 'mc-3-1',
          q: '¿En qué fase del ciclo de vida se elabora el project charter?',
          options: ['Planificación', 'Ejecución', 'Inicio', 'Cierre'],
          correctIndex: 2,
          explain:
            'En la fase de inicio se define el proyecto a un nivel general, se elabora el project charter y se identifican los stakeholders.',
        },
        {
          id: 'mc-3-2',
          q: '¿Cuál área del PMBOK® coordina todas las demás para que el proyecto funcione como un todo cohesivo?',
          options: [
            'Gestión del alcance',
            'Gestión de la integración',
            'Gestión de las comunicaciones',
            'Gestión de la calidad',
          ],
          correctIndex: 1,
          explain:
            'La gestión de la integración es la que coordina todas las demás áreas para que el proyecto funcione como un todo cohesivo.',
        },
        {
          id: 'mc-3-3',
          q: '¿Cuántas áreas de conocimiento organiza la guía PMBOK® según el apunte?',
          options: ['Siete', 'Ocho', 'Nueve', 'Diez'],
          correctIndex: 2,
          explain:
            'El apunte lista nueve áreas de conocimiento: integración, alcance, tiempo, costos, calidad, recursos humanos, comunicaciones, riesgos y adquisiciones.',
        },
        {
          id: 'mc-3-4',
          q: '¿Qué resultado se obtiene al completar la fase de planificación?',
          options: [
            'El project charter',
            'Los entregables del proyecto',
            'El plan de proyecto',
            'El informe de lecciones aprendidas',
          ],
          correctIndex: 2,
          explain:
            'La planificación es la fase más intensiva y su resultado es el plan de proyecto, que detalla alcance, cronograma, presupuesto, riesgos, recursos y comunicaciones.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-3-1',
        front: 'Ciclo de vida del proyecto',
        back:
          'Serie de fases que atraviesa todo proyecto: Inicio, Planificación, Ejecución, Monitoreo y Control, Cierre.',
      },
      {
        id: 'fc-3-2',
        front: 'Fase de inicio',
        back:
          'Se define el proyecto a nivel general, se elabora el project charter y se identifican los stakeholders.',
      },
      {
        id: 'fc-3-3',
        front: 'Fase de planificación',
        back:
          'Fase más intensiva. Se detallan alcance, cronograma, presupuesto, riesgos, recursos y comunicaciones. Resultado: el plan de proyecto.',
      },
      {
        id: 'fc-3-4',
        front: 'Fase de ejecución',
        back:
          'El equipo realiza el trabajo planificado para crear los entregables. Se consume la mayor parte del tiempo y del presupuesto.',
      },
      {
        id: 'fc-3-5',
        front: 'Monitoreo y control',
        back:
          'Se realiza en paralelo a la ejecución. Mide el progreso real contra el planificado, identifica desviaciones y toma acciones correctivas.',
      },
      {
        id: 'fc-3-6',
        front: 'Fase de cierre',
        back:
          'Se formaliza la aceptación del proyecto, se liberan los recursos y se documentan las lecciones aprendidas.',
      },
      {
        id: 'fc-3-7',
        front: 'PMI (Project Management Institute)',
        back:
          'Organización líder mundial en la profesión de dirección de proyectos. Publica la Guía del PMBOK®.',
      },
      {
        id: 'fc-3-8',
        front: 'Gestión del alcance',
        back:
          'Área PMBOK que se asegura de que el proyecto incluya todo el trabajo requerido, y solo el trabajo requerido.',
      },
      {
        id: 'fc-3-9',
        front: 'Gestión de la integración',
        back:
          'Área PMBOK que coordina todas las demás áreas para que el proyecto funcione como un todo cohesivo.',
      },
    ],
  },

  // ---------- SECCIÓN 4 ----------
  {
    id: '4',
    title: 'Fundamentos de la planificación',
    criollo:
      'Básicamente: planificar no es burocracia, es la razón por la que el proyecto no se te va a las manos. Una planificación sólida mejora la comunicación, evita que repitas tareas, aumenta la predictibilidad y ayuda a entregar algo de calidad a tiempo. Y para que los objetivos sean útiles de verdad, usamos el criterio SMART — porque "mejorar la página web" no le dice nada a nadie. También, ojo: esfuerzo, duración y tiempo calendario no son la misma cosa, dale.',
    blocks: [
      {
        type: 'p',
        text:
          'Una planificación sólida es la base del éxito de un proyecto. Sus beneficios son múltiples: mejora la comunicación, minimiza la repetición de tareas, aumenta la predictibilidad y ayuda a entregar productos de calidad a tiempo.',
      },
      {
        type: 'h3',
        text: 'Objetivos SMART',
        criollo:
          'Un error re común es tener objetivos ambiguos. "Mejorar la página web" no le dice nada a nadie. SMART es el acrónimo que te fuerza a pensar bien el objetivo antes de largarte a trabajar.',
      },
      {
        type: 'p',
        text:
          'Un error común es tener objetivos ambiguos. Para evitarlo, se utiliza el acrónimo SMART para definirlos correctamente:',
      },
      {
        type: 'ul',
        items: [
          'S — Específico (Specific): ¿qué se quiere lograr exactamente? Debe ser claro y sin ambigüedades. Ejemplo incorrecto: "Mejorar la página web". Ejemplo correcto: "Implementar un nuevo sistema de carrito de compras en la página web".',
          'M — Medible (Measurable): ¿cómo sabremos que lo hemos logrado? Debe ser cuantificable. Ejemplo: "Aumentar las ventas online en un 20 % en los primeros seis meses tras el lanzamiento".',
          'A — Alcanzable (Achievable): ¿es posible lograr el objetivo con los recursos y el tiempo disponibles? Debe ser un desafío, pero no una utopía.',
          'R — Realista/Relevante (Realistic/Relevant): ¿está el objetivo alineado con las metas de la organización? ¿Es el momento adecuado? Ejemplo: "Este objetivo apoya la estrategia de la empresa de expandir su canal de e-commerce".',
          'T — Oportuno/Limitado en el Tiempo (Timely/Time-bound): ¿cuál es la fecha límite para cumplir el objetivo? Ejemplo: "El nuevo sistema debe estar operativo antes del 30 de noviembre para la campaña navideña".',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/smart-cards.png',
        alt: 'Desglose visual de SMART: S, M, A, R, T en tarjetas con bullets',
        caption: 'SMART: específico, medible, alcanzable, realista, oportuno.',
      },
      {
        type: 'h3',
        text: 'Esfuerzo vs. Duración vs. Tiempo calendario',
        criollo:
          'Acá hay que ser preciso porque es re fácil mezclarlos y armar un cronograma que no cierra. Esfuerzo es horas de trabajo; duración es días hábiles; tiempo calendario incluye fines de semana y feriados.',
      },
      {
        type: 'p',
        text:
          'Es crucial entender la diferencia entre estos tres conceptos para crear cronogramas realistas:',
      },
      {
        type: 'ul',
        items: [
          'Esfuerzo (tiempo/persona): es la cantidad total de horas de trabajo necesarias para completar una tarea. Por ejemplo, "esta tarea requiere 40 horas de programación".',
          'Duración (días laborales): es el número de días hábiles que tomará completar la tarea, considerando la disponibilidad de los recursos.',
          'Tiempo calendario: es el tiempo total que transcurre desde el inicio hasta el fin de la tarea, incluyendo días no laborables como fines de semana o feriados.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/esfuerzo-duracion-1.png',
        alt: 'Relación entre Esfuerzo (tiempo/persona), Duración (días laborales) y Tiempo calendario',
        caption: 'Los tres conceptos están conectados pero no son lo mismo.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Ejemplo práctico del apunte — Tarea: desarrollar el módulo de registro de usuarios. Esfuerzo estimado: 16 horas-persona. Recurso: 1 programador que trabaja 8 horas/día. Duración: 16 / 8 = 2 días laborales. Si la tarea comienza un viernes, el tiempo calendario es 4 días (viernes + sábado + domingo + lunes), porque el trabajo se detiene durante el fin de semana.',
      },
      {
        type: 'p',
        text:
          'Factores como la disponibilidad de la persona, la naturaleza del trabajo (si requiere colaboración de otros) y el tamaño del equipo influyen en cómo el esfuerzo se traduce en duración.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/esfuerzo-duracion-2.png',
        alt: 'El software de PM combina los factores para calcular la duración de la tarea',
        caption: 'El PM se nutre de esfuerzo, duración y tiempo calendario para imputar la duración real.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-4-1',
          q: '"Mejorar la página web" es un ejemplo de objetivo SMART bien definido.',
          a: false,
          explain:
            'Falso. Es un ejemplo de objetivo ambiguo. El apunte lo usa como caso incorrecto. Un objetivo SMART específico sería "Implementar un nuevo sistema de carrito de compras en la página web".',
        },
        {
          id: 'tf-4-2',
          q: 'La duración de una tarea se mide en horas de trabajo necesarias para completarla.',
          a: false,
          explain:
            'Falso. Eso es el esfuerzo (tiempo/persona). La duración se mide en días hábiles (laborales), considerando la disponibilidad de los recursos.',
        },
        {
          id: 'tf-4-3',
          q: 'El tiempo calendario puede ser mayor que la duración en días laborales de una tarea.',
          a: true,
          explain:
            'Verdadero. El tiempo calendario incluye días no laborables (fines de semana, feriados). En el ejemplo del apunte, una tarea de 2 días laborales tiene 4 días de tiempo calendario si empieza un viernes.',
        },
        {
          id: 'tf-4-4',
          q: 'La planificación sólida, entre otros beneficios, minimiza la repetición de tareas.',
          a: true,
          explain:
            'Verdadero. El apunte menciona explícitamente que una planificación sólida minimiza la repetición de tareas y mejora la comunicación, la predictibilidad y la calidad.',
        },
        {
          id: 'tf-4-5',
          q: 'La "R" de SMART significa únicamente "Realista" y no tiene relación con la relevancia del objetivo.',
          a: false,
          explain:
            'Falso. El apunte define la "R" como "Realista/Relevante" (Realistic/Relevant). Incluye ambos conceptos: que sea posible y que esté alineado con las metas de la organización.',
        },
      ],
      mc: [
        {
          id: 'mc-4-1',
          q: '¿Qué representa la letra "M" en el acrónimo SMART?',
          options: [
            'Manejable: que el equipo lo pueda gestionar sin problemas',
            'Medible: que sea cuantificable y permita saber si se logró',
            'Motivador: que inspire al equipo a trabajar',
            'Multidisciplinario: que involucre distintas áreas',
          ],
          correctIndex: 1,
          explain:
            'La "M" de SMART es Medible (Measurable): el objetivo debe ser cuantificable para poder saber si se ha logrado. Ejemplo del apunte: "Aumentar las ventas online en un 20 %".',
        },
        {
          id: 'mc-4-2',
          q: 'Un programador trabaja 8 horas por día. Una tarea requiere 16 horas de esfuerzo. ¿Cuál es su duración?',
          options: [
            '1 día laboral',
            '2 días laborales',
            '4 días laborales',
            '16 días laborales',
          ],
          correctIndex: 1,
          explain:
            'Duración = Esfuerzo / Horas diarias = 16 / 8 = 2 días laborales. Ese mismo ejemplo aparece en el apunte.',
        },
        {
          id: 'mc-4-3',
          q: 'Si una tarea de 2 días laborales comienza el viernes, ¿cuál es su tiempo calendario?',
          options: [
            '2 días',
            '3 días',
            '4 días',
            '5 días',
          ],
          correctIndex: 2,
          explain:
            'Son 4 días de tiempo calendario (viernes + sábado + domingo + lunes), porque el trabajo se detiene durante el fin de semana. Ese es el ejemplo literal del apunte.',
        },
        {
          id: 'mc-4-4',
          q: '¿Cuál de estas afirmaciones sobre la "T" de SMART es correcta según el apunte?',
          options: [
            'Indica que el objetivo debe ser técnico',
            'Significa que el objetivo debe tener una fecha límite definida',
            'Implica que el objetivo debe poder transferirse entre áreas',
            'Refiere a que el objetivo debe ser transparente para el equipo',
          ],
          correctIndex: 1,
          explain:
            'La "T" es Oportuno/Limitado en el Tiempo (Timely/Time-bound): debe tener una fecha límite. Ejemplo del apunte: "operativo antes del 30 de noviembre para la campaña navideña".',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-4-1',
        front: 'S de SMART',
        back:
          'Específico (Specific): el objetivo debe ser claro y sin ambigüedades, indicando exactamente qué se quiere lograr. Ejemplo correcto: "Implementar un nuevo sistema de carrito de compras en la página web".',
      },
      {
        id: 'fc-4-2',
        front: 'M de SMART',
        back:
          'Medible (Measurable): el objetivo debe ser cuantificable para saber si se ha logrado. Ejemplo: "Aumentar las ventas online en un 20 % en los primeros seis meses".',
      },
      {
        id: 'fc-4-3',
        front: 'A de SMART',
        back:
          'Alcanzable (Achievable): el objetivo debe ser posible con los recursos y el tiempo disponibles. Un desafío, pero no una utopía.',
      },
      {
        id: 'fc-4-4',
        front: 'R de SMART',
        back:
          'Realista/Relevante (Realistic/Relevant): el objetivo debe estar alineado con las metas de la organización y ser pertinente en el momento actual.',
      },
      {
        id: 'fc-4-5',
        front: 'T de SMART',
        back:
          'Oportuno/Limitado en el Tiempo (Timely/Time-bound): el objetivo debe tener una fecha límite definida. Ejemplo: "operativo antes del 30 de noviembre para la campaña navideña".',
      },
      {
        id: 'fc-4-6',
        front: 'Esfuerzo (en planificación de proyectos)',
        back:
          'Cantidad total de horas de trabajo (tiempo/persona) necesarias para completar una tarea. Por ejemplo: "esta tarea requiere 40 horas de programación".',
      },
      {
        id: 'fc-4-7',
        front: 'Duración (en planificación de proyectos)',
        back:
          'Número de días hábiles (laborales) que tomará completar una tarea, considerando la disponibilidad de los recursos.',
      },
      {
        id: 'fc-4-8',
        front: 'Tiempo calendario (en planificación de proyectos)',
        back:
          'Tiempo total que transcurre desde el inicio hasta el fin de una tarea, incluyendo días no laborables como fines de semana y feriados.',
      },
      {
        id: 'fc-4-9',
        front: 'Ejemplo: esfuerzo → duración → tiempo calendario',
        back:
          'Esfuerzo: 16 hs-persona. Recurso: 1 programador, 8 hs/día. Duración: 2 días laborales. Si empieza el viernes: tiempo calendario = 4 días (viernes + sábado + domingo + lunes).',
      },
    ],
  },

  // ---------- SECCIÓN 5 ----------
  {
    id: '5',
    title: 'Herramientas esenciales de gestión de proyectos',
    criollo:
      'Básicamente: para gestionar un proyecto no alcanza con la buena voluntad. Hay documentos y procesos estandarizados que te dan estructura. El Project Charter es la "partida de nacimiento" del proyecto; el WBS te dice qué hay que hacer; el Gantt te muestra cuándo; el Plan de proyecto es el documento maestro; y la gestión de riesgos y cambios son los procesos que evitan que todo se desborde. Dale que las vemos.',
    blocks: [
      {
        type: 'p',
        text:
          'Existen herramientas y documentos estandarizados que nos ayudan a gestionar el proyecto de manera efectiva.',
      },
      {
        type: 'h3',
        text: 'Project Charter (Acta de constitución del proyecto)',
        criollo:
          'Es la "partida de nacimiento" del proyecto: el documento que lo autoriza formalmente. Sin project charter, el proyecto no existe oficialmente.',
      },
      {
        type: 'p',
        text:
          'El Project Charter es el documento que autoriza formalmente el proyecto. Define de manera concisa el qué, por qué, quién y cuándo del proyecto. Incluye los objetivos, el gerente del proyecto asignado, los stakeholders clave, el presupuesto preliminar y los entregables principales.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/project-charter-illustration.jpeg',
        alt: 'Ilustración de un Project Charter sobre un escritorio con anteojos y laptop',
        caption: 'El Project Charter formaliza el qué, por qué, quién y cuándo del proyecto.',
      },
      {
        type: 'h3',
        text: 'WBS (Work Breakdown Structure / Estructura de desglose del trabajo)',
        criollo:
          'El WBS te dice qué hay que hacer, pero no cuándo. Es una descomposición jerárquica: agarrás el gran entregable y lo partís en pedazos más manejables (paquetes de trabajo). Nada de fechas acá.',
      },
      {
        type: 'p',
        text:
          'El WBS es una descomposición jerárquica del alcance total del trabajo a realizar por el equipo. Desglosa los grandes entregables en paquetes de trabajo más pequeños y manejables. No dice cuándo se harán las cosas, solo qué hay que hacer.',
      },
      {
        type: 'h3',
        text: 'Cronograma Gantt',
        criollo:
          'El Gantt es la herramienta visual por excelencia. En una línea de tiempo ves las tareas, cuánto duran, de qué dependen y cómo viene el progreso. Es lo primero que te piden cuando querés mostrar "el plan".',
      },
      {
        type: 'p',
        text:
          'El cronograma Gantt es la herramienta visual por excelencia para representar el cronograma del proyecto. Muestra las tareas en una línea de tiempo, sus duraciones, dependencias y el progreso general.',
      },
      {
        type: 'h3',
        text: 'Plan de proyecto',
        criollo:
          'Es el documento maestro, el que integra todo. No es solo el cronograma: incluye todos los planes secundarios (alcance, costos, calidad, etc.). Si el project charter es la "partida de nacimiento", el plan de proyecto es el "manual de vuelo".',
      },
      {
        type: 'p',
        text:
          'El plan de proyecto es el documento maestro y formal que guía tanto la ejecución como el control del proyecto. Integra todos los planes secundarios: alcance, cronograma, costos, calidad, entre otros.',
      },
      {
        type: 'h3',
        text: 'Gestión de riesgos y cambios',
        criollo:
          'No son documentos, son procesos. Tenés que tener un plan para identificar y mitigar riesgos antes de que exploten, y un procedimiento formal para cualquier cambio al alcance original. Sin ese procedimiento, aparece el "scope creep" — que es cuando el proyecto crece sin control porque todos piden cositas extra.',
      },
      {
        type: 'p',
        text:
          'La gestión de riesgos y cambios no son documentos únicos, sino procesos. Se debe tener un plan para identificar y mitigar los riesgos, y un procedimiento formal para gestionar cualquier cambio que se solicite al alcance original, para evitar el "scope creep" (corrupción del alcance).',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'El PDF de presentación lista OBS (Organization Breakdown Structure) entre las herramientas de gestión de proyectos, pero el apunte de esta unidad no la desarrolla.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-5-1',
          q: 'El WBS indica cuándo se realizará cada tarea del proyecto.',
          a: false,
          explain:
            'Falso. El WBS dice qué hay que hacer (descomposición del alcance en paquetes de trabajo), pero no cuándo. El cuándo lo muestra el cronograma Gantt.',
        },
        {
          id: 'tf-5-2',
          q: 'El Project Charter incluye el gerente del proyecto asignado y los stakeholders clave.',
          a: true,
          explain:
            'Verdadero. El apunte indica que el Project Charter incluye los objetivos, el gerente del proyecto asignado, los stakeholders clave, el presupuesto preliminar y los entregables principales.',
        },
        {
          id: 'tf-5-3',
          q: 'El plan de proyecto es el cronograma Gantt.',
          a: false,
          explain:
            'Falso. El plan de proyecto es el documento maestro que integra todos los planes secundarios (alcance, cronograma, costos, calidad, etc.). El Gantt es solo una de las herramientas que puede integrarse en él.',
        },
        {
          id: 'tf-5-4',
          q: 'El "scope creep" es la corrupción del alcance que ocurre cuando no se gestiona formalmente los cambios.',
          a: true,
          explain:
            'Verdadero. El apunte define el scope creep (corrupción del alcance) como lo que se busca evitar mediante un procedimiento formal para gestionar cualquier cambio al alcance original.',
        },
        {
          id: 'tf-5-5',
          q: 'La gestión de riesgos y cambios son documentos únicos que se elaboran una sola vez en el proyecto.',
          a: false,
          explain:
            'Falso. El apunte explica que la gestión de riesgos y cambios no son documentos únicos, sino procesos que se aplican a lo largo del proyecto.',
        },
      ],
      mc: [
        {
          id: 'mc-5-1',
          q: '¿Cuál es la función principal del Project Charter?',
          options: [
            'Descomponer el trabajo en paquetes manejables',
            'Autorizar formalmente el proyecto y definir el qué, por qué, quién y cuándo',
            'Mostrar el cronograma del proyecto en una línea de tiempo',
            'Integrar todos los planes secundarios del proyecto',
          ],
          correctIndex: 1,
          explain:
            'El Project Charter es el documento que autoriza formalmente el proyecto y define de manera concisa el qué, por qué, quién y cuándo. Es la "partida de nacimiento" del proyecto.',
        },
        {
          id: 'mc-5-2',
          q: '¿Qué herramienta muestra las tareas en una línea de tiempo con sus duraciones y dependencias?',
          options: [
            'WBS',
            'Project Charter',
            'Cronograma Gantt',
            'Plan de proyecto',
          ],
          correctIndex: 2,
          explain:
            'El cronograma Gantt es la herramienta visual por excelencia para representar el cronograma del proyecto, mostrando tareas, duraciones, dependencias y progreso general.',
        },
        {
          id: 'mc-5-3',
          q: '¿Qué distingue al WBS del cronograma Gantt?',
          options: [
            'El WBS muestra el presupuesto; el Gantt muestra los riesgos',
            'El WBS dice qué hay que hacer (sin fechas); el Gantt muestra cuándo en una línea de tiempo',
            'El WBS es para proyectos pequeños; el Gantt para proyectos grandes',
            'El WBS es un proceso; el Gantt es un documento único',
          ],
          correctIndex: 1,
          explain:
            'El apunte es explícito: el WBS desglosa el alcance en paquetes de trabajo y "no dice cuándo se harán las cosas, solo qué hay que hacer". El Gantt muestra las tareas en una línea de tiempo con sus duraciones.',
        },
        {
          id: 'mc-5-4',
          q: '¿Qué problema se busca evitar con un procedimiento formal de gestión de cambios?',
          options: [
            'El gold plating (agregar funciones extra sin pedido del cliente)',
            'El scope creep (corrupción del alcance)',
            'El burnout del equipo de proyecto',
            'La falta de comunicación entre stakeholders',
          ],
          correctIndex: 1,
          explain:
            'El apunte indica que el procedimiento formal de gestión de cambios busca evitar el "scope creep" (corrupción del alcance), que ocurre cuando se van incorporando cambios sin control al alcance original.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-5-1',
        front: 'Project Charter (Acta de constitución del proyecto)',
        back:
          'Documento que autoriza formalmente el proyecto. Define el qué, por qué, quién y cuándo. Incluye objetivos, gerente asignado, stakeholders clave, presupuesto preliminar y entregables principales. Es la "partida de nacimiento" del proyecto.',
      },
      {
        id: 'fc-5-2',
        front: 'WBS (Work Breakdown Structure)',
        back:
          'Descomposición jerárquica del alcance total del trabajo. Desglosa los grandes entregables en paquetes de trabajo más pequeños y manejables. Indica qué hay que hacer, no cuándo.',
      },
      {
        id: 'fc-5-3',
        front: 'Cronograma Gantt',
        back:
          'Herramienta visual por excelencia para representar el cronograma del proyecto. Muestra las tareas en una línea de tiempo, sus duraciones, dependencias y el progreso general.',
      },
      {
        id: 'fc-5-4',
        front: 'Plan de proyecto',
        back:
          'Documento maestro y formal que guía la ejecución y el control del proyecto. Integra todos los planes secundarios: alcance, cronograma, costos, calidad, etc.',
      },
      {
        id: 'fc-5-5',
        front: 'Scope creep (corrupción del alcance)',
        back:
          'Crecimiento descontrolado del alcance del proyecto por incorporar cambios sin un procedimiento formal. Se evita con una gestión de cambios estructurada.',
      },
      {
        id: 'fc-5-6',
        front: 'Gestión de riesgos',
        back:
          'Proceso (no documento único) para identificar y mitigar los riesgos del proyecto a lo largo de su ciclo de vida.',
      },
      {
        id: 'fc-5-7',
        front: 'Gestión de cambios',
        back:
          'Proceso (no documento único) para gestionar formalmente cualquier cambio solicitado al alcance original del proyecto, evitando el scope creep.',
      },
      {
        id: 'fc-5-8',
        front: 'OBS en el contexto de las herramientas del PDF3',
        back:
          'El PDF de presentación lista OBS (Organization Breakdown Structure) entre las herramientas, pero el apunte de esta unidad no la desarrolla.',
      },
    ],
  },

  // ---------- SECCIÓN 6 ----------
  {
    id: '6',
    title: 'Desafíos comunes en la gestión de proyectos',
    criollo: 'TBD — Task 14',
    blocks: [],
    quiz: { tf: [], mc: [] },
    flashcards: [],
  },

  // ---------- SECCIÓN 7 ----------
  {
    id: '7',
    title: 'Consideraciones generales (proyectos de sistemas)',
    criollo: 'TBD — Task 14',
    blocks: [],
    quiz: { tf: [], mc: [] },
    flashcards: [],
  },
];

export function getSection(id) {
  return SECTIONS.find((s) => s.id === id);
}
