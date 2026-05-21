/**
 * Materia: Sistemas y Métodos (UP).
 * Unidades 8.1 y 8.2 (Administración de Proyectos) y 9 (Sistemas de Información).
 *
 * Tipos conceptuales (ver js/content.js para Subject/Section/ContentBlock).
 */

export default {
  id: 'sistemas-y-metodos',
  title: 'Sistemas y Métodos',
  subtitle: 'Unidades 8 y 9 — Apuntes',
  tagline: 'Administración de proyectos · Sistemas de información',
  units: {
    '8.1': 'Fundamentos de la Administración de Proyectos',
    '8.2': 'Herramientas y procesos para la administración de proyectos',
    '9': 'Sistemas de Información',
  },
  sections: [
  // ---------- SECCIÓN 1 ----------
  {
    id: '1',
    unit: '8.1',
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
    unit: '8.1',
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
    unit: '8.1',
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
    unit: '8.1',
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
    unit: '8.1',
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
    unit: '8.1',
    title: 'Desafíos comunes en la gestión de proyectos',
    criollo:
      'Acá van las cinco cagadas clásicas que hacen fracasar proyectos: no saber para dónde van, ponerse plazos imposibles, tener al equipo repartido en mil proyectos, cambiar prioridades a cada rato y no comunicarse. Un buen gerente las trabaja desde el inicio, no cuando ya todo explotó.',
    blocks: [
      {
        type: 'p',
        text:
          'Todo proyecto enfrenta desafíos que, si no se gestionan proactivamente, pueden llevar al fracaso. El apunte identifica cinco problemas recurrentes que el gerente de proyectos debe anticipar y mitigar desde el inicio.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Objetivos poco claros:</strong> si el equipo no sabe con precisión a dónde va, es muy probable que no llegue a buen puerto.',
          '<strong>Planes y calendarios irreales:</strong> la presión por terminar rápido puede llevar a cronogramas imposibles de cumplir, lo que genera desmotivación y baja calidad.',
          '<strong>Recursos saturados:</strong> asignar personas a demasiados proyectos a la vez reduce su productividad y aumenta el riesgo de errores.',
          '<strong>Prioridades cambiantes:</strong> si la dirección cambia de opinión constantemente, el equipo pierde el foco y el proyecto se estanca.',
          '<strong>Comunicación deficiente:</strong> la falta de comunicación clara y constante es una de las principales causas de problemas en los proyectos.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'En criollo: si nadie sabe qué se está haciendo, los plazos son una fantasía, todo el mundo está en diez proyectos al mismo tiempo, la dirección cambia de idea cada lunes y nadie se habla — el proyecto está frito. El gerente tiene que atacar estas cinco cosas antes de que se transformen en problema.',
      },
      {
        type: 'p',
        text:
          'Un buen gerente de proyectos trabaja proactivamente para mitigar estos desafíos desde el inicio, anticipándose a los problemas en lugar de reaccionar cuando ya ocurrieron.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-6-1',
          q: 'Los planes y calendarios irreales generan desmotivación y baja calidad en el equipo.',
          a: true,
          explain:
            'Verdadero. El apunte señala que la presión por terminar rápido puede llevar a cronogramas imposibles de cumplir, lo que genera desmotivación y baja calidad.',
        },
        {
          id: 'tf-6-2',
          q: 'Asignar personas a muchos proyectos simultáneos aumenta la productividad del equipo.',
          a: false,
          explain:
            'Falso. El apunte indica que asignar personas a demasiados proyectos a la vez reduce su productividad y aumenta el riesgo de errores.',
        },
        {
          id: 'tf-6-3',
          q: 'La comunicación deficiente es una de las principales causas de problemas en los proyectos.',
          a: true,
          explain:
            'Verdadero. El apunte lo menciona explícitamente como uno de los cinco desafíos clave.',
        },
        {
          id: 'tf-6-4',
          q: 'Un buen gerente de proyectos trabaja reactivamente para resolver los desafíos cuando ya ocurrieron.',
          a: false,
          explain:
            'Falso. El apunte indica que un buen gerente trabaja proactivamente para mitigar los desafíos desde el inicio, no de manera reactiva.',
        },
      ],
      mc: [
        {
          id: 'mc-6-1',
          q: '¿Cuál de estos NO es un desafío mencionado en el apunte como causa de fracaso de proyectos?',
          options: [
            'Objetivos poco claros',
            'Recursos saturados',
            'Falta de herramientas tecnológicas',
            'Prioridades cambiantes',
          ],
          correctIndex: 2,
          explain:
            'La falta de herramientas tecnológicas no aparece en el apunte. Los cinco desafíos son: objetivos poco claros, planes irreales, recursos saturados, prioridades cambiantes y comunicación deficiente.',
        },
        {
          id: 'mc-6-2',
          q: '¿Qué consecuencia genera el cambio constante de prioridades por parte de la dirección?',
          options: [
            'El equipo se adapta mejor y gana flexibilidad',
            'El equipo pierde el foco y el proyecto se estanca',
            'Se generan cronogramas más realistas',
            'Se reduce el riesgo de scope creep',
          ],
          correctIndex: 1,
          explain:
            'El apunte señala que si la dirección cambia de opinión constantemente, el equipo pierde el foco y el proyecto se estanca.',
        },
        {
          id: 'mc-6-3',
          q: '¿Cómo aborda los desafíos un buen gerente de proyectos según el apunte?',
          options: [
            'Reactivamente, resolviendo los problemas cuando ya impactaron el proyecto',
            'Delegando la gestión de problemas al equipo técnico',
            'Proactivamente, mitigando los desafíos desde el inicio del proyecto',
            'Documentando los problemas al cierre del proyecto para futura referencia',
          ],
          correctIndex: 2,
          explain:
            'El apunte concluye la sección indicando que un buen gerente de proyectos trabaja proactivamente para mitigar estos desafíos desde el inicio.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-6-1',
        front: 'Desafío: Objetivos poco claros',
        back:
          'Si el equipo no sabe con precisión a dónde va, es muy probable que el proyecto no llegue a buen puerto. La claridad de objetivos es fundamental para orientar el trabajo.',
      },
      {
        id: 'fc-6-2',
        front: 'Desafío: Planes y calendarios irreales',
        back:
          'La presión por terminar rápido puede llevar a cronogramas imposibles de cumplir, lo que genera desmotivación y baja calidad en el equipo.',
      },
      {
        id: 'fc-6-3',
        front: 'Desafío: Recursos saturados',
        back:
          'Asignar personas a demasiados proyectos a la vez reduce su productividad y aumenta el riesgo de errores. El foco importa.',
      },
      {
        id: 'fc-6-4',
        front: 'Desafío: Prioridades cambiantes',
        back:
          'Si la dirección cambia de opinión constantemente, el equipo pierde el foco y el proyecto se estanca. La estabilidad de prioridades es clave.',
      },
      {
        id: 'fc-6-5',
        front: 'Desafío: Comunicación deficiente',
        back:
          'La falta de comunicación clara y constante es una de las principales causas de problemas en los proyectos. Comunicar bien, siempre.',
      },
      {
        id: 'fc-6-6',
        front: 'Rol del gerente ante los desafíos del proyecto',
        back:
          'Un buen gerente de proyectos trabaja proactivamente para mitigar los cinco desafíos comunes desde el inicio, anticipándose a los problemas antes de que ocurran.',
      },
    ],
  },

  // ---------- SECCIÓN 7 ----------
  {
    id: '7',
    unit: '8.1',
    title: 'Consideraciones generales (proyectos de sistemas)',
    criollo:
      'Para proyectos de sistemas hay que planificar bien de entrada y arrancar con una investigación seria del sistema a desarrollar. El tiempo lo marcás vos según cuántas personas entrevistás y cuánto dura el desarrollo. Y lo más importante: el project leader tiene que asegurarse de que todo el mundo esté disponible cuando tiene que estar.',
    blocks: [
      {
        type: 'p',
        text:
          'Los proyectos de desarrollo de sistemas tienen consideraciones específicas que los distinguen de otros tipos de proyectos. A continuación se enumeran cinco puntos clave que orientan su correcta gestión y planificación.',
      },
      {
        type: 'ol',
        items: [
          'Los proyectos de sistemas deben estar correctamente planeados, en conformidad con el grupo de usuarios.',
          'Los requerimientos de tiempo del proyecto se refieren al tiempo necesario para llevar a cabo una investigación clara y profunda del sistema a desarrollar.',
          'El tiempo de investigación del sistema se determina a partir de la cantidad de personas a entrevistar, la cantidad de tiempo necesaria para el desarrollo y la realización de las interconsultas entre los usuarios.',
          'El personal afectado al desarrollo debe ser asignado y administrado adecuadamente. Al mismo tiempo, es necesario que el desarrollo cumpla específicamente y siga los lineamientos para asegurar la calidad y efectividad de la aplicación a implementar.',
          'El desarrollo de sistemas y la actividad de la programación se consideran actividades individuales, pero desde la mirada del project leader es primordial controlar que todas las personas asignadas se encuentren disponibles para la concreción del plan de trabajo.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'En criollo: la coordinación con el usuario es desde el día uno — sin ellos no podés planear ni investigar nada. El tiempo de investigación depende de cuánta gente tenés que entrevistar y cuánto lleva el desarrollo. Y el rol del project leader no es solo asignar tareas: es asegurarse de que cuando alguien tiene que estar, esté.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-7-1',
          q: 'Los proyectos de sistemas deben planearse en conformidad con el grupo de usuarios.',
          a: true,
          explain:
            'Verdadero. El primer punto del apunte establece que los proyectos de sistemas deben estar correctamente planeados en conformidad con el grupo de usuarios.',
        },
        {
          id: 'tf-7-2',
          q: 'El tiempo de investigación del sistema se determina exclusivamente por la cantidad de personas a entrevistar.',
          a: false,
          explain:
            'Falso. El apunte indica que el tiempo de investigación se determina a partir de tres factores: la cantidad de personas a entrevistar, el tiempo necesario para el desarrollo y la realización de las interconsultas entre usuarios.',
        },
        {
          id: 'tf-7-3',
          q: 'El desarrollo de sistemas se considera una actividad puramente colectiva, nunca individual.',
          a: false,
          explain:
            'Falso. El apunte señala que el desarrollo de sistemas y la programación se consideran actividades individuales, aunque el project leader debe controlar la disponibilidad de todo el equipo.',
        },
        {
          id: 'tf-7-4',
          q: 'El project leader debe controlar que todas las personas asignadas estén disponibles para la concreción del plan de trabajo.',
          a: true,
          explain:
            'Verdadero. El quinto punto del apunte establece que desde la mirada del project leader es primordial controlar que todas las personas asignadas se encuentren disponibles para la concreción del plan de trabajo.',
        },
      ],
      mc: [
        {
          id: 'mc-7-1',
          q: '¿De qué depende el tiempo de investigación del sistema según el apunte?',
          options: [
            'Únicamente de la complejidad técnica del sistema',
            'De la cantidad de personas a entrevistar, el tiempo de desarrollo y las interconsultas entre usuarios',
            'Del presupuesto disponible y los plazos del cliente',
            'Solo de la cantidad de desarrolladores asignados al proyecto',
          ],
          correctIndex: 1,
          explain:
            'El apunte establece que el tiempo de investigación del sistema se determina a partir de la cantidad de personas a entrevistar, el tiempo necesario para el desarrollo y la realización de las interconsultas entre los usuarios.',
        },
        {
          id: 'mc-7-2',
          q: '¿Cuál es la responsabilidad primordial del project leader según el quinto punto del apunte?',
          options: [
            'Escribir el código de los módulos más complejos',
            'Definir los requerimientos junto con los usuarios',
            'Controlar que todas las personas asignadas estén disponibles para el plan de trabajo',
            'Elaborar el presupuesto y el cronograma del proyecto',
          ],
          correctIndex: 2,
          explain:
            'El apunte indica que desde la mirada del project leader es primordial controlar que todas las personas asignadas se encuentren disponibles para la concreción del plan de trabajo.',
        },
        {
          id: 'mc-7-3',
          q: '¿Con quién deben estar en conformidad los proyectos de sistemas al momento de planearlos?',
          options: [
            'Con el directorio de la empresa',
            'Con el grupo de usuarios',
            'Con el equipo de desarrollo técnico',
            'Con los proveedores de infraestructura',
          ],
          correctIndex: 1,
          explain:
            'El primer punto del apunte establece explícitamente que los proyectos de sistemas deben estar correctamente planeados en conformidad con el grupo de usuarios.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-7-1',
        front: 'Planificación de proyectos de sistemas',
        back:
          'Deben estar correctamente planeados en conformidad con el grupo de usuarios. La participación del usuario es clave desde la planificación.',
      },
      {
        id: 'fc-7-2',
        front: 'Requerimientos de tiempo en proyectos de sistemas',
        back:
          'Se refieren al tiempo necesario para llevar a cabo una investigación clara y profunda del sistema a desarrollar, no solo al tiempo de programación.',
      },
      {
        id: 'fc-7-3',
        front: 'Factores que determinan el tiempo de investigación del sistema',
        back:
          'La cantidad de personas a entrevistar, el tiempo necesario para el desarrollo y la realización de las interconsultas entre los usuarios.',
      },
      {
        id: 'fc-7-4',
        front: 'Gestión del personal en desarrollo de sistemas',
        back:
          'El personal debe ser asignado y administrado adecuadamente. El desarrollo debe seguir los lineamientos para asegurar calidad y efectividad de la aplicación.',
      },
      {
        id: 'fc-7-5',
        front: 'Naturaleza del desarrollo de sistemas como actividad',
        back:
          'Se considera una actividad individual (programación), pero el project leader debe controlar que todos los asignados estén disponibles para el plan de trabajo.',
      },
      {
        id: 'fc-7-6',
        front: 'Rol del project leader en proyectos de sistemas',
        back:
          'Es primordial que controle la disponibilidad de todas las personas asignadas para la concreción del plan de trabajo, asegurando la coordinación del equipo.',
      },
    ],
  },

  // ====================================================================
  // UNIDAD 8.2 — Herramientas y procesos para la administración de proyectos
  // ====================================================================

  // ---------- SECCIÓN 8 ----------
  {
    id: '8',
    unit: '8.2',
    title: 'Estructurando el trabajo (WBS y OBS)',
    criollo:
      'Antes de planificar tiempo o plata, primero tenés que saber qué hay que hacer y quién lo va a hacer. La WBS es el "qué" descompuesto en pedazos manejables; la OBS es el "quién" (el organigrama del proyecto). Cuando cruzás las dos, cada paquete de trabajo tiene un dueño claro.',
    blocks: [
      {
        type: 'p',
        text:
          'Antes de poder planificar el tiempo o el costo, es fundamental definir con precisión todo el trabajo que se debe realizar. Para esto, utilizamos dos herramientas estructurales clave: la WBS y la OBS.',
      },
      {
        type: 'h3',
        text: 'WBS (Work Breakdown Structure / Estructura de desglose del trabajo)',
        criollo:
          'Es como el índice de un libro: rompés el proyecto entero en piezas cada vez más chiquitas hasta llegar a "paquetes de trabajo" que se pueden ejecutar. Tres cosas a tener en cuenta: está orientada al qué (no al cómo ni al cuándo), es jerárquica y tiene que cubrir el 100% del alcance.',
      },
      {
        type: 'p',
        text:
          'La WBS es una descomposición jerárquica de todo el alcance del trabajo que el equipo del proyecto debe ejecutar para lograr los objetivos y crear los entregables. Su propósito principal es organizar y definir el alcance total del proyecto, dividir tareas grandes y complejas en partes más pequeñas y manejables, llamadas "paquetes de trabajo".',
      },
      {
        type: 'p',
        text: 'Características clave:',
      },
      {
        type: 'ul',
        items: [
          'Orientada a los entregables: se enfoca en "qué" se va a entregar, no en "cómo" o "cuándo".',
          'Jerárquica: tiene diferentes niveles de detalle, desde el proyecto general en la cima hasta los paquetes de trabajo individuales en la base.',
          'Regla del 100%: la WBS debe incluir el 100% del trabajo definido en el alcance del proyecto. Ni más, ni menos.',
        ],
      },
      {
        type: 'p',
        text: 'Ejemplo práctico: si el proyecto es "Organizar una conferencia académica", una WBS simplificada podría verse así:',
      },
      {
        type: 'ul',
        items: [
          '1.0 Organización de Conferencia',
          '1.1 Planificación y gestión',
          '1.2 Logística del evento — 1.2.1 Búsqueda y contratación del lugar; 1.2.2 Gestión de catering',
          '1.3 Marketing y difusión — 1.3.1 Creación de sitio web; 1.3.2 Campaña en redes sociales',
          '1.4 Contenido académico — 1.4.1 Selección de oradores; 1.4.2 Agenda del evento',
        ],
      },
      {
        type: 'h3',
        text: 'OBS (Organization Breakdown Structure / Estructura de desglose de la organización)',
        criollo:
          'Mientras la WBS dice qué hay que hacer, la OBS dice quién lo hace. Es el organigrama del proyecto: departamentos, equipos y cómo se relacionan. Sola sirve, pero la magia aparece cuando la cruzás con la WBS.',
      },
      {
        type: 'p',
        text:
          'Mientras que la WBS define el "qué", la OBS define el "quién". Es un organigrama del proyecto que muestra las distintas unidades organizativas (departamentos, equipos, etc.) y cómo se relacionan entre sí.',
      },
      {
        type: 'p',
        text:
          'La verdadera potencia de estas herramientas se ve cuando se combinan. Al cruzar la WBS con la OBS, podemos asignar la responsabilidad de cada paquete de trabajo a un equipo o departamento específico. Esto crea una matriz de asignación de responsabilidades, lo que asegura que cada parte del proyecto tenga un dueño claro.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-8-1',
          q: 'La WBS se enfoca en "cómo" se hacen las cosas y "cuándo", no en "qué" se entrega.',
          a: false,
          explain:
            'Falso. Es al revés: la WBS está orientada a los entregables — se enfoca en el "qué" se va a entregar, no en el "cómo" ni el "cuándo".',
        },
        {
          id: 'tf-8-2',
          q: 'La WBS debe incluir el 100% del trabajo definido en el alcance del proyecto, ni más ni menos.',
          a: true,
          explain:
            'Verdadero. Esa es la "regla del 100%": la WBS abarca todo el alcance, sin agregar ni omitir trabajo.',
        },
        {
          id: 'tf-8-3',
          q: 'La OBS muestra las unidades organizativas del proyecto (departamentos, equipos) y cómo se relacionan.',
          a: true,
          explain:
            'Verdadero. La OBS define el "quién": es el organigrama del proyecto que ordena equipos y áreas.',
        },
        {
          id: 'tf-8-4',
          q: 'Cruzar la WBS con la OBS sirve para asignar la responsabilidad de cada paquete de trabajo a un equipo o departamento específico.',
          a: true,
          explain:
            'Verdadero. El cruce arma una matriz de asignación de responsabilidades, así cada paquete tiene un dueño claro.',
        },
        {
          id: 'tf-8-5',
          q: 'Los "paquetes de trabajo" son los niveles más altos y generales de la WBS.',
          a: false,
          explain:
            'Falso. Son al revés: los paquetes de trabajo son las divisiones más pequeñas y manejables de la WBS, en la base de la jerarquía.',
        },
      ],
      mc: [
        {
          id: 'mc-8-1',
          q: '¿Qué es la WBS?',
          options: [
            'El cronograma con fechas y duraciones del proyecto',
            'Una descomposición jerárquica del trabajo orientada a entregables',
            'El organigrama del proyecto con departamentos y equipos',
            'El plan de comunicación con interesados',
          ],
          correctIndex: 1,
          explain:
            'La WBS es una descomposición jerárquica de todo el alcance del trabajo, orientada a entregables. El organigrama es la OBS.',
        },
        {
          id: 'mc-8-2',
          q: 'La "regla del 100%" aplicada a la WBS significa que:',
          options: [
            'El equipo debe trabajar al 100% sin descansos',
            'El presupuesto se debe usar al 100%',
            'La WBS debe incluir el 100% del trabajo definido en el alcance, ni más ni menos',
            'El proyecto debe completarse al 100% antes de cerrar',
          ],
          correctIndex: 2,
          explain:
            'La regla del 100% es una característica de la WBS: debe contener todo el alcance del proyecto, sin agregar trabajo extra ni omitir partes.',
        },
        {
          id: 'mc-8-3',
          q: 'Cuando se cruzan la WBS y la OBS se obtiene:',
          options: [
            'Un diagrama de Gantt',
            'Una matriz de asignación de responsabilidades',
            'Un registro de riesgos',
            'El acta de cierre del proyecto',
          ],
          correctIndex: 1,
          explain:
            'El cruce de WBS (qué) con OBS (quién) genera una matriz de asignación de responsabilidades, donde cada paquete de trabajo queda asignado a un equipo o departamento.',
        },
        {
          id: 'mc-8-4',
          q: '¿Cuál de estas NO es una característica clave de la WBS?',
          options: [
            'Orientada a los entregables',
            'Jerárquica',
            'Regla del 100%',
            'Asigna fechas y duración a cada tarea',
          ],
          correctIndex: 3,
          explain:
            'La WBS no asigna fechas ni duraciones: se enfoca en el "qué". Las fechas y duración son parte del cronograma (Gantt), no de la WBS.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-8-1',
        front: 'WBS (Work Breakdown Structure)',
        back:
          'Descomposición jerárquica de todo el alcance del trabajo del proyecto. Divide tareas grandes en partes más pequeñas y manejables llamadas "paquetes de trabajo".',
      },
      {
        id: 'fc-8-2',
        front: 'Paquete de trabajo',
        back:
          'La división más pequeña y manejable de la WBS, en la base de la jerarquía. Es la unidad ejecutable de trabajo.',
      },
      {
        id: 'fc-8-3',
        front: 'Característica "orientada a entregables" de la WBS',
        back:
          'Se enfoca en "qué" se va a entregar, no en "cómo" o "cuándo". Por eso no incluye fechas ni recursos.',
      },
      {
        id: 'fc-8-4',
        front: 'Regla del 100% (WBS)',
        back:
          'La WBS debe incluir el 100% del trabajo definido en el alcance del proyecto. Ni más, ni menos.',
      },
      {
        id: 'fc-8-5',
        front: 'OBS (Organization Breakdown Structure)',
        back:
          'Organigrama del proyecto: muestra las distintas unidades organizativas (departamentos, equipos, etc.) y cómo se relacionan entre sí. Define el "quién".',
      },
      {
        id: 'fc-8-6',
        front: 'Matriz de asignación de responsabilidades',
        back:
          'Resultado de cruzar la WBS con la OBS. Asigna cada paquete de trabajo a un equipo o departamento específico, garantizando que cada parte tenga un dueño claro.',
      },
      {
        id: 'fc-8-7',
        front: 'WBS vs OBS',
        back:
          'La WBS define el "qué" (trabajo descompuesto en entregables). La OBS define el "quién" (estructura organizacional). Su cruce arma la matriz de responsabilidades.',
      },
    ],
  },

  // ---------- SECCIÓN 9 ----------
  {
    id: '9',
    unit: '8.2',
    title: 'Planificación y gestión del tiempo',
    criollo:
      'Una vez que sabés qué hay que hacer, toca planificar cuándo. No mezcles esfuerzo (horas de trabajo), duración (días laborables con los recursos asignados) y tiempo calendario (lo que se ve en el almanaque, con fines de semana incluidos). El Gantt es la herramienta visual estrella, y el camino crítico es la secuencia más larga: si se atrasa una tarea ahí, se atrasa todo el proyecto.',
    blocks: [
      {
        type: 'p',
        text:
          'Una vez que sabemos qué hay que hacer, debemos planificar cuándo se hará. La gestión del cronograma es uno de los pilares de la dirección de proyectos.',
      },
      {
        type: 'h3',
        text: 'Conceptos fundamentales del tiempo',
        criollo:
          'Tres cosas que parecen iguales pero NO lo son: esfuerzo es la cantidad total de horas de trabajo que la tarea requiere; duración son los días laborables que toma con los recursos asignados; tiempo calendario es lo que pasa entre el inicio y el fin en el almanaque (con fines de semana y feriados incluidos).',
      },
      {
        type: 'p',
        text: 'Es crucial no confundir los siguientes términos:',
      },
      {
        type: 'ul',
        items: [
          'Esfuerzo: es la cantidad total de horas de trabajo que una tarea requiere. Por ejemplo, "diseñar el logo tomará 16 horas de trabajo".',
          'Duración: es el número de días laborables que tomará completar la tarea, considerando los recursos asignados. Si asignamos a un diseñador que trabaja 8 horas al día, la duración será de 2 días (16 horas / 8 horas/día).',
          'Tiempo calendario: es el lapso total en el calendario, desde que la tarea comienza hasta que termina, incluyendo los días no laborables. Si la tarea de 2 días de duración comienza un viernes, su tiempo calendario será de 4 días (viernes, sábado, domingo, lunes), y termina el lunes.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Truco para distinguirlos: pensá esfuerzo como "horas hombre", duración como "cuántos días laborables va a llevar con los recursos que tengo", y tiempo calendario como "qué dice el almanaque entre la fecha de inicio y la de fin".',
      },
      {
        type: 'h3',
        text: 'Diagrama de Gantt',
        criollo:
          'El gráfico de barras horizontales que muestra cada tarea a lo largo del tiempo. De un vistazo ves qué tareas hay, cuándo empieza y termina cada una, cuánto dura y cómo se superponen o dependen entre sí.',
      },
      {
        type: 'p',
        text:
          'El diagrama de Gantt es la herramienta visual por excelencia para la planificación. Consiste en un gráfico de barras horizontales que muestra las tareas del proyecto a lo largo del tiempo.',
      },
      {
        type: 'p',
        text: 'Permite ver de un vistazo:',
      },
      {
        type: 'ul',
        items: [
          'Qué tareas hay que hacer.',
          'Cuándo comienza y termina cada tarea.',
          'Cuánto dura cada tarea.',
          'Cómo se superponen las tareas y si hay dependencias entre ellas.',
        ],
      },
      {
        type: 'h3',
        text: 'Camino crítico (critical path)',
        criollo:
          'La secuencia de tareas más larga y menos flexible del proyecto. Si una tarea del camino crítico se atrasa, se atrasa TODO el proyecto. Por eso concentra la atención del gerente: si querés acortar el proyecto, la única forma real es acortar tareas del camino crítico.',
      },
      {
        type: 'p',
        text:
          'Dentro de un proyecto, algunas tareas no pueden comenzar hasta que otras terminen, lo que crea una secuencia. El camino crítico es la secuencia de tareas más larga y menos flexible de todo el proyecto. Su duración total determina la duración total del proyecto.',
      },
      {
        type: 'ul',
        items: [
          '¿Por qué es "crítico"? Porque cualquier retraso en cualquier tarea que forme parte de este camino retrasará inevitablemente la fecha de finalización de todo el proyecto.',
          'Foco de gestión: por esta razón, el camino crítico concentra la máxima atención de los gerentes de proyecto. Para acortar la duración total del proyecto, es obligatorio acortar la duración de las tareas del camino crítico.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'El apunte resume cuatro puntos clave del camino crítico: (1) es la secuencia más larga y menos flexible; (2) cualquier retraso en él demora el proyecto; (3) la única forma de acortar la programación es acortar el camino crítico; (4) concentra la atención del management.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-9-1',
          q: 'El esfuerzo y la duración de una tarea siempre tienen el mismo valor.',
          a: false,
          explain:
            'Falso. El esfuerzo son horas de trabajo (ej: 16 horas); la duración son días laborables con los recursos asignados (ej: 2 días si trabaja 8 h/día). Son conceptos distintos.',
        },
        {
          id: 'tf-9-2',
          q: 'El tiempo calendario incluye los fines de semana y feriados.',
          a: true,
          explain:
            'Verdadero. El tiempo calendario es el lapso total en el almanaque desde el inicio hasta el fin de la tarea, incluyendo días no laborables.',
        },
        {
          id: 'tf-9-3',
          q: 'El camino crítico es la secuencia de tareas más corta del proyecto.',
          a: false,
          explain:
            'Falso. Es la secuencia más larga y menos flexible. Por eso es la que determina la duración total del proyecto.',
        },
        {
          id: 'tf-9-4',
          q: 'Cualquier retraso en una tarea del camino crítico retrasa la fecha de finalización de todo el proyecto.',
          a: true,
          explain:
            'Verdadero. Esa es justamente la razón por la que el camino se llama "crítico" y concentra la atención del gerente.',
        },
        {
          id: 'tf-9-5',
          q: 'El diagrama de Gantt permite ver dependencias entre tareas y cómo se superponen.',
          a: true,
          explain:
            'Verdadero. El apunte lo lista entre las cosas que se ven de un vistazo en un Gantt.',
        },
      ],
      mc: [
        {
          id: 'mc-9-1',
          q: 'Si una tarea requiere 16 horas de esfuerzo y un recurso trabaja 8 horas al día, su duración es:',
          options: ['1 día', '2 días', '4 días', 'Depende del calendario laboral'],
          correctIndex: 1,
          explain:
            'La duración resulta de dividir esfuerzo entre la dedicación diaria del recurso: 16 h / 8 h/día = 2 días laborables. Es exactamente el ejemplo del apunte.',
        },
        {
          id: 'mc-9-2',
          q: 'Si una tarea con 2 días de duración comienza un viernes, su tiempo calendario es:',
          options: ['2 días', '3 días', '4 días', '5 días'],
          correctIndex: 2,
          explain:
            '4 días: viernes (día 1 laborable), sábado, domingo y lunes (día 2 laborable). Termina el lunes. El sábado y domingo cuentan en el tiempo calendario pero no en la duración.',
        },
        {
          id: 'mc-9-3',
          q: '¿Por qué el camino crítico concentra la atención del gerente de proyecto?',
          options: [
            'Porque tiene los recursos más caros',
            'Porque cualquier retraso en él demora el proyecto entero',
            'Porque es la secuencia más corta',
            'Porque ahí se concentra el presupuesto',
          ],
          correctIndex: 1,
          explain:
            'Cualquier demora en una tarea del camino crítico retrasa la fecha de fin del proyecto. Por eso el management tiene que vigilarlo de cerca.',
        },
        {
          id: 'mc-9-4',
          q: 'Para acortar la duración total del proyecto es obligatorio:',
          options: [
            'Sumar más gente a cualquier tarea',
            'Eliminar tareas del Gantt',
            'Acortar tareas que estén en el camino crítico',
            'Pedir una extensión de plazo',
          ],
          correctIndex: 2,
          explain:
            'Como el camino crítico determina la duración total, la única forma efectiva de acortar el proyecto es acortar tareas que estén dentro de él.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-9-1',
        front: 'Esfuerzo',
        back:
          'Cantidad total de horas de trabajo que una tarea requiere. Ej: "diseñar el logo tomará 16 horas".',
      },
      {
        id: 'fc-9-2',
        front: 'Duración',
        back:
          'Número de días laborables que toma completar una tarea, considerando los recursos asignados. Ej: 16 horas con un recurso de 8 h/día = 2 días.',
      },
      {
        id: 'fc-9-3',
        front: 'Tiempo calendario',
        back:
          'Lapso total en el calendario entre inicio y fin de la tarea, incluyendo días no laborables (fines de semana, feriados).',
      },
      {
        id: 'fc-9-4',
        front: 'Diagrama de Gantt',
        back:
          'Gráfico de barras horizontales que muestra las tareas a lo largo del tiempo. Permite ver qué tareas hay, cuándo empieza y termina cada una, cuánto dura y cómo se superponen o dependen entre sí.',
      },
      {
        id: 'fc-9-5',
        front: 'Camino crítico (definición)',
        back:
          'Secuencia de tareas más larga y menos flexible del proyecto. Su duración total determina la duración total del proyecto.',
      },
      {
        id: 'fc-9-6',
        front: '¿Por qué el camino crítico es "crítico"?',
        back:
          'Porque cualquier retraso en cualquier tarea que forme parte de él retrasará inevitablemente la fecha de finalización de todo el proyecto.',
      },
      {
        id: 'fc-9-7',
        front: 'Foco de gestión del camino crítico',
        back:
          'Concentra la máxima atención del gerente de proyecto. Para acortar la duración total del proyecto, es obligatorio acortar tareas del camino crítico.',
      },
      {
        id: 'fc-9-8',
        front: 'Acortar la duración total del proyecto',
        back:
          'La única forma es acortar la duración de tareas que estén en el camino crítico. Acortar tareas fuera del camino crítico no cambia la fecha de fin.',
      },
    ],
  },

  // ---------- SECCIÓN 10 ----------
  {
    id: '10',
    unit: '8.2',
    title: 'Gestión de incertidumbre y calidad',
    criollo:
      'Acá entran tres patas que un buen plan tiene que cubrir: los riesgos (qué puede salir mal y qué hacés al respecto, con cuatro estrategias clásicas), la calidad (planificar estándares + QA en los procesos + QC en los productos) y los cambios (porque sí o sí van a aparecer, mejor tener un proceso formal para manejarlos).',
    blocks: [
      {
        type: 'p',
        text:
          'Un buen plan no solo define el trabajo y el tiempo, sino que también se anticipa a los problemas y asegura que el resultado final sea el esperado.',
      },
      {
        type: 'h3',
        text: 'Gestión de riesgos',
        criollo:
          'Un riesgo es algo incierto que, SI pasa, va a impactar al proyecto (para bien o para mal). La gestión de riesgos no busca eliminar la incertidumbre, sino gestionarla. Para los riesgos negativos hay cuatro estrategias clásicas: evitar, transferir, anticipar (mitigar) y aceptar.',
      },
      {
        type: 'p',
        text:
          'Un riesgo es un evento incierto que, si ocurre, tendrá un impacto (positivo o negativo) en el proyecto. La gestión de riesgos no busca eliminar la incertidumbre, sino gestionarla. Las cuatro estrategias básicas para tratar los riesgos negativos son:',
      },
      {
        type: 'ul',
        items: [
          'Evitar: modificar el plan del proyecto para eliminar la amenaza por completo. Ejemplo: si el riesgo es que un proveedor nuevo no cumpla, se decide contratar a un proveedor conocido y confiable, aunque sea más caro.',
          'Transferir: trasladar el impacto del riesgo a un tercero. Ejemplo: contratar un seguro para cubrir posibles accidentes en un evento. El riesgo sigue existiendo, pero las consecuencias financieras se transfieren a la aseguradora.',
          'Anticipar (o mitigar): tomar acciones para reducir la probabilidad de que el riesgo ocurra o el impacto que tendría. Ejemplo: si existe el riesgo de lluvia en un evento al aire libre, se puede mitigar instalando carpas.',
          'Aceptar: no tomar ninguna acción y asumir las consecuencias si el riesgo se materializa. Generalmente, se hace para riesgos de bajo impacto o probabilidad. Ejemplo: aceptar el riesgo de que un orador se demore 10 minutos en llegar.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/8-2/estrategias-riesgo.png',
        alt: 'Diagrama con las cuatro estrategias de riesgo: Anticipar, Evitar, Transferir, Aceptar.',
        caption: 'Las cuatro estrategias clásicas para tratar riesgos negativos.',
      },
      {
        type: 'h3',
        text: 'Gestión de calidad',
        criollo:
          'Asegurar que el proyecto cumpla los requisitos para los que fue creado. Tres procesos: planificación (definir qué estándares aplican y cómo se cumplen), aseguramiento o QA (auditar procesos para prevenir defectos) y control o QC (inspeccionar productos para detectar defectos).',
      },
      {
        type: 'p',
        text:
          'La gestión de calidad asegura que el proyecto cumpla con los requisitos para los cuales fue emprendido. Se divide en tres procesos principales:',
      },
      {
        type: 'ol',
        items: [
          'Planificación de la calidad: definir cuáles son los estándares de calidad relevantes para el proyecto y cómo se van a cumplir. Se utilizan herramientas como el análisis costo/beneficio y el benchmarking (compararse con los mejores).',
          'Aseguramiento de la calidad (QA): es un proceso enfocado en los procesos. Se realizan auditorías para verificar que el equipo esté siguiendo los procedimientos y estándares definidos en el plan. El objetivo es mejorar los procesos para prevenir defectos.',
          'Control de calidad (QC): es un proceso enfocado en los productos. Se realiza la inspección y medición de los entregables para identificar defectos. Si se encuentra un producto defectuoso, se decide si se acepta, se rechaza o se debe retrabajar.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Truco para no confundir QA y QC: QA mira los PROCESOS para prevenir defectos. QC mira los PRODUCTOS para detectar defectos. Uno previene, el otro inspecciona.',
      },
      {
        type: 'h3',
        text: 'Gestión de cambios',
        criollo:
          'Los cambios son inevitables. Lo que NO es opcional es tener un proceso formal: alguien solicita, el PM evalúa el impacto, un comité aprueba o rechaza, y si se aprueba se ajusta el plan y se comunica a todos los involucrados.',
      },
      {
        type: 'p',
        text:
          'Los cambios son inevitables en cualquier proyecto. La clave no es evitarlos, sino gestionarlos de forma controlada para que no descarrilen el proyecto. Un proceso formal de gestión de cambios es vital y suele seguir estos pasos:',
      },
      {
        type: 'ol',
        items: [
          'Solicitud del cambio: alguien (un cliente, un miembro del equipo) solicita formalmente un cambio.',
          'Evaluación del impacto: el gerente de proyecto analiza cómo el cambio afectaría al alcance, cronograma, costo y calidad del proyecto.',
          'Aprobación del comité: el cambio, junto con su análisis de impacto, se presenta a un comité de control de cambios para su aprobación o rechazo.',
          'Ajuste del plan y comunicación: si se aprueba, se actualizan formalmente el plan del proyecto y las líneas base, y se notifica a todos los involucrados.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/8-2/cambios-proceso.png',
        alt: 'Diagrama del proceso de gestión de cambios en pasos secuenciales.',
        caption: 'Flujo del proceso formal de gestión de cambios.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'El apunte muestra dónde suelen aterrizar los cambios: en la descripción del alcance, en el cronograma o actividades del proyecto, en el presupuesto, en los indicadores de calidad y en los integrantes del proyecto.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/8-2/cambios-categorias.png',
        alt: 'Diagrama con las categorías donde suelen aplicar los cambios: alcance, cronograma, presupuesto, calidad, integrantes.',
        caption: 'Las áreas del proyecto que típicamente se ven afectadas por un cambio.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-10-1',
          q: 'La gestión de riesgos busca eliminar toda la incertidumbre del proyecto.',
          a: false,
          explain:
            'Falso. La gestión de riesgos no busca eliminar la incertidumbre, sino gestionarla con estrategias específicas para cada riesgo.',
        },
        {
          id: 'tf-10-2',
          q: 'Transferir un riesgo significa trasladar su impacto a un tercero, como contratar un seguro.',
          a: true,
          explain:
            'Verdadero. El ejemplo del apunte es contratar un seguro: el riesgo sigue existiendo, pero las consecuencias financieras se trasladan a la aseguradora.',
        },
        {
          id: 'tf-10-3',
          q: 'El aseguramiento de la calidad (QA) se enfoca en inspeccionar los productos terminados para detectar defectos.',
          a: false,
          explain:
            'Falso. Esa es la función del Control de Calidad (QC). El QA se enfoca en los procesos, auditando que se sigan los procedimientos para PREVENIR defectos.',
        },
        {
          id: 'tf-10-4',
          q: 'La estrategia "Aceptar" un riesgo significa no tomar ninguna acción y asumir las consecuencias si se materializa.',
          a: true,
          explain:
            'Verdadero. Aceptar se usa para riesgos de bajo impacto o baja probabilidad, donde no vale la pena gastar recursos en mitigarlos.',
        },
        {
          id: 'tf-10-5',
          q: 'En el proceso formal de gestión de cambios, los cambios se aplican apenas son solicitados, sin pasar por evaluación ni comité.',
          a: false,
          explain:
            'Falso. El proceso formal incluye solicitud, evaluación del impacto, aprobación por comité y recién después ajuste del plan y comunicación.',
        },
      ],
      mc: [
        {
          id: 'mc-10-1',
          q: 'Las cuatro estrategias clásicas para tratar riesgos negativos son:',
          options: [
            'Eliminar, Reducir, Ignorar, Aceptar',
            'Evitar, Transferir, Anticipar (mitigar), Aceptar',
            'Planificar, Ejecutar, Controlar, Cerrar',
            'Anticipar, Asumir, Resolver, Documentar',
          ],
          correctIndex: 1,
          explain:
            'Las cuatro estrategias del apunte son: Evitar, Transferir, Anticipar (o mitigar) y Aceptar.',
        },
        {
          id: 'mc-10-2',
          q: 'Contratar un seguro para cubrir accidentes en un evento es un ejemplo de:',
          options: ['Evitar', 'Transferir', 'Anticipar', 'Aceptar'],
          correctIndex: 1,
          explain:
            'Es Transferir: el riesgo sigue existiendo, pero las consecuencias financieras se trasladan a la aseguradora.',
        },
        {
          id: 'mc-10-3',
          q: '¿Cuál es el foco principal del Aseguramiento de la Calidad (QA)?',
          options: [
            'Inspeccionar los productos terminados para encontrar defectos',
            'Aceptar o rechazar entregables',
            'Mejorar los procesos para prevenir defectos',
            'Definir los estándares iniciales de calidad',
          ],
          correctIndex: 2,
          explain:
            'QA mira los procesos: hace auditorías para verificar que el equipo siga los procedimientos definidos, con el objetivo de prevenir defectos. Inspeccionar productos es QC.',
        },
        {
          id: 'mc-10-4',
          q: '¿Cuál NO es un paso del proceso formal de gestión de cambios?',
          options: [
            'Solicitud del cambio',
            'Evaluación del impacto en alcance, cronograma, costo y calidad',
            'Aprobación por un comité de control de cambios',
            'Implementación inmediata sin revisión',
          ],
          correctIndex: 3,
          explain:
            'Justamente lo opuesto: el proceso formal evita la implementación inmediata. Pasa por solicitud, evaluación del impacto, aprobación del comité y recién después ajuste del plan y comunicación.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-10-1',
        front: 'Riesgo',
        back:
          'Evento incierto que, si ocurre, tendrá un impacto (positivo o negativo) en el proyecto.',
      },
      {
        id: 'fc-10-2',
        front: 'Objetivo de la gestión de riesgos',
        back:
          'No busca eliminar la incertidumbre, sino gestionarla con estrategias específicas para cada riesgo identificado.',
      },
      {
        id: 'fc-10-3',
        front: 'Estrategia "Evitar"',
        back:
          'Modificar el plan del proyecto para eliminar la amenaza por completo. Ej: cambiar a un proveedor conocido y confiable en vez de uno nuevo.',
      },
      {
        id: 'fc-10-4',
        front: 'Estrategia "Transferir"',
        back:
          'Trasladar el impacto del riesgo a un tercero. Ej: contratar un seguro. El riesgo sigue existiendo, pero las consecuencias financieras se transfieren.',
      },
      {
        id: 'fc-10-5',
        front: 'Estrategia "Anticipar" (o mitigar)',
        back:
          'Tomar acciones para reducir la probabilidad de que el riesgo ocurra o el impacto que tendría. Ej: instalar carpas ante el riesgo de lluvia.',
      },
      {
        id: 'fc-10-6',
        front: 'Estrategia "Aceptar"',
        back:
          'No tomar acciones y asumir las consecuencias si el riesgo se materializa. Se usa generalmente para riesgos de bajo impacto o probabilidad.',
      },
      {
        id: 'fc-10-7',
        front: 'Planificación de la calidad',
        back:
          'Definir cuáles son los estándares de calidad relevantes y cómo se van a cumplir. Usa herramientas como análisis costo/beneficio y benchmarking.',
      },
      {
        id: 'fc-10-8',
        front: 'Aseguramiento de calidad (QA)',
        back:
          'Proceso enfocado en los procesos. Auditorías para verificar que el equipo siga los procedimientos. Objetivo: prevenir defectos.',
      },
      {
        id: 'fc-10-9',
        front: 'Control de calidad (QC)',
        back:
          'Proceso enfocado en los productos. Inspección y medición de entregables para identificar defectos. Si hay defecto, se decide aceptar, rechazar o retrabajar.',
      },
      {
        id: 'fc-10-10',
        front: 'Pasos del proceso formal de gestión de cambios',
        back:
          '1) Solicitud del cambio. 2) Evaluación del impacto (alcance, cronograma, costo, calidad). 3) Aprobación del comité. 4) Ajuste del plan y comunicación.',
      },
    ],
  },

  // ---------- SECCIÓN 11 ----------
  {
    id: '11',
    unit: '8.2',
    title: 'Seguimiento y cierre del proyecto',
    criollo:
      'Una vez que el proyecto arrancó, hay que monitorear cómo va e ir comunicando a los interesados con informes y actas. Y cuando termina, no alcanza con decir "listo": hay un cierre formal con cierre administrativo, revisión post-implementación, acta de cierre (donde lo más valioso son las lecciones aprendidas) y reconocimiento al equipo.',
    blocks: [
      {
        type: 'p',
        text:
          'Finalmente, es fundamental monitorear el progreso y cerrar el proyecto de manera ordenada.',
      },
      {
        type: 'h3',
        text: 'Informe de avance',
        criollo:
          'El documento principal para comunicar el estado del proyecto a los interesados. Suele tener resumen ejecutivo, estado de actividades, riesgos/problemas y análisis de atrasos vs presupuesto.',
      },
      {
        type: 'p',
        text:
          'El informe de avance es el documento principal para comunicar el estado del proyecto a los interesados. Típicamente, incluye:',
      },
      {
        type: 'ul',
        items: [
          'Resumen ejecutivo: una vista rápida para la alta gerencia.',
          'Estado de actividades: qué se ha completado y qué está en progreso.',
          'Riesgos y problemas: actualización sobre los principales riesgos y los problemas que han surgido.',
          'Atrasos y presupuesto: análisis de las desviaciones respecto al plan original.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/8-2/informe-avance.png',
        alt: 'Diagrama con los componentes típicos de un informe de avance: resumen ejecutivo, estado de actividades, próximas actividades, riesgos/problemas, atrasos, avances de desembolsos, tablero de control.',
        caption: 'Componentes típicos de un informe de avance.',
      },
      {
        type: 'h3',
        text: 'Acta de certificación de hitos',
        criollo:
          'Un hito es un punto o evento importante del proyecto. El acta es el documento formal donde el cliente o sponsor firma la aceptación de un entregable o el cierre de una fase. Esa firma habilita al equipo a seguir con la etapa siguiente.',
      },
      {
        type: 'p',
        text:
          'Un hito es un punto o evento importante en el proyecto. Esta acta es un documento formal, donde el cliente o sponsor firma la aceptación de un entregable o la finalización de una fase importante, lo que libera al equipo para continuar con la siguiente etapa.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/8-2/acta-hitos.png',
        alt: 'Ejemplo real de acta de certificación de hitos con campos como ID del entregable, descripción del trabajo, duración, requerimientos de calidad y criterios de aceptación.',
        caption: 'Ejemplo de acta de certificación de hitos del apunte.',
      },
      {
        type: 'h3',
        text: 'Proceso de cierre del proyecto',
        criollo:
          'Cerrar no es solo decir "terminamos". Es una fase formal con cuatro actividades: cierre administrativo (contratos, facturas, archivo), revisión post-implementación (comparar resultados vs objetivos), acta de cierre (con lecciones aprendidas, lo más valioso) y reconocimiento al equipo (clave para la moral en futuros proyectos).',
      },
      {
        type: 'p',
        text:
          'El cierre no es simplemente decir "terminamos". Es una fase formal con actividades clave:',
      },
      {
        type: 'ul',
        items: [
          'Cierre administrativo: se finalizan los contratos, se pagan las últimas facturas y se archiva toda la documentación del proyecto.',
          'Revisión post-implementación: se evalúa el éxito del proyecto y se comparan los resultados finales con los objetivos originales.',
          'Acta de cierre de proyecto: es el documento que formaliza el fin del proyecto. Su sección más valiosa son las lecciones aprendidas, donde el equipo documenta qué salió bien, qué salió mal y qué se podría mejorar en futuros proyectos.',
          'Reconocimiento y celebración: se reconoce el esfuerzo del equipo y se celebra el trabajo realizado, lo que es crucial para la moral y la motivación futura.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'El apunte enfatiza que la sección más valiosa del acta de cierre son las lecciones aprendidas: qué salió bien, qué salió mal y qué se podría mejorar en futuros proyectos. Por eso el cierre no es trámite: es la fuente para que el próximo proyecto arranque mejor.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-11-1',
          q: 'El informe de avance solo incluye el resumen ejecutivo.',
          a: false,
          explain:
            'Falso. Típicamente incluye resumen ejecutivo, estado de actividades, riesgos/problemas y análisis de atrasos y presupuesto.',
        },
        {
          id: 'tf-11-2',
          q: 'Un hito es un punto o evento importante en el proyecto.',
          a: true,
          explain:
            'Verdadero. Esa es la definición textual del apunte. Por eso existe el acta de certificación de hitos.',
        },
        {
          id: 'tf-11-3',
          q: 'El acta de certificación de hitos la firma el equipo de desarrollo internamente, sin participación del cliente.',
          a: false,
          explain:
            'Falso. El acta la firma el cliente o el sponsor, aceptando formalmente un entregable o el fin de una fase. Eso libera al equipo para seguir.',
        },
        {
          id: 'tf-11-4',
          q: 'El cierre del proyecto se reduce a comunicar que se terminó, sin actividades formales adicionales.',
          a: false,
          explain:
            'Falso. El cierre es una fase formal con cierre administrativo, revisión post-implementación, acta de cierre y reconocimiento al equipo.',
        },
        {
          id: 'tf-11-5',
          q: 'Las lecciones aprendidas son la sección más valiosa del acta de cierre del proyecto.',
          a: true,
          explain:
            'Verdadero. El apunte lo dice explícitamente: ahí se documenta qué salió bien, qué salió mal y qué se podría mejorar en proyectos futuros.',
        },
      ],
      mc: [
        {
          id: 'mc-11-1',
          q: '¿Cuál de estos NO es un componente típico de un informe de avance?',
          options: [
            'Resumen ejecutivo',
            'Estado de actividades',
            'Cierre administrativo de contratos',
            'Riesgos y problemas',
          ],
          correctIndex: 2,
          explain:
            'El cierre administrativo es una actividad del proceso de cierre del proyecto, no parte del informe de avance. El informe de avance reporta estado, no cierra contratos.',
        },
        {
          id: 'mc-11-2',
          q: 'Una vez firmada el acta de certificación de un hito, ¿qué se habilita?',
          options: [
            'Se cierra el proyecto entero',
            'Se libera al equipo para continuar con la siguiente etapa',
            'Se renegocian todos los contratos',
            'Se cambia el alcance del proyecto',
          ],
          correctIndex: 1,
          explain:
            'La firma del cliente o sponsor en el acta acepta formalmente el entregable o el cierre de fase, y eso libera al equipo para empezar la siguiente etapa.',
        },
        {
          id: 'mc-11-3',
          q: 'Según el apunte, la sección más valiosa del acta de cierre del proyecto es:',
          options: [
            'El presupuesto final ejecutado',
            'El listado completo de entregables',
            'Las lecciones aprendidas',
            'La firma de aceptación del cliente',
          ],
          correctIndex: 2,
          explain:
            'El apunte lo destaca: las lecciones aprendidas (qué salió bien, qué salió mal, qué mejorar) son lo más valioso porque alimentan los próximos proyectos.',
        },
        {
          id: 'mc-11-4',
          q: '¿Cuál NO es una actividad típica del cierre formal de un proyecto?',
          options: [
            'Cierre administrativo (contratos, facturas, archivo)',
            'Revisión post-implementación',
            'Reconocimiento y celebración del equipo',
            'Re-planificación del alcance del proyecto',
          ],
          correctIndex: 3,
          explain:
            'Re-planificar el alcance corresponde a la gestión de cambios durante la ejecución, no al cierre. El cierre incluye actividades formales para terminar de forma ordenada.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-11-1',
        front: 'Informe de avance',
        back:
          'Documento principal para comunicar el estado del proyecto a los interesados. Incluye resumen ejecutivo, estado de actividades, riesgos/problemas y análisis de atrasos vs presupuesto.',
      },
      {
        id: 'fc-11-2',
        front: 'Hito',
        back: 'Punto o evento importante en el proyecto. Marca el fin de una fase o un entregable clave.',
      },
      {
        id: 'fc-11-3',
        front: 'Acta de certificación de hitos',
        back:
          'Documento formal donde el cliente o sponsor firma la aceptación de un entregable o el fin de una fase. Su firma libera al equipo para continuar con la siguiente etapa.',
      },
      {
        id: 'fc-11-4',
        front: 'Cierre administrativo',
        back:
          'Finalización de contratos, pago de últimas facturas y archivado de toda la documentación del proyecto.',
      },
      {
        id: 'fc-11-5',
        front: 'Revisión post-implementación',
        back:
          'Se evalúa el éxito del proyecto comparando los resultados finales con los objetivos originales.',
      },
      {
        id: 'fc-11-6',
        front: 'Acta de cierre de proyecto',
        back:
          'Documento que formaliza el fin del proyecto. Su sección más valiosa son las lecciones aprendidas.',
      },
      {
        id: 'fc-11-7',
        front: 'Lecciones aprendidas',
        back:
          'Sección más valiosa del acta de cierre. Documenta qué salió bien, qué salió mal y qué se podría mejorar en futuros proyectos.',
      },
      {
        id: 'fc-11-8',
        front: 'Reconocimiento y celebración (cierre)',
        back:
          'Se reconoce el esfuerzo del equipo y se celebra el trabajo realizado. Es crucial para la moral y la motivación de futuros proyectos.',
      },
    ],
  },

  // ========== UNIDAD 9 — SISTEMAS DE INFORMACIÓN ==========

  // ---------- SECCIÓN 12 ----------
  {
    id: '12',
    unit: '9',
    title: 'Conceptos fundamentales',
    criollo:
      'Antes de hablar de sistemas de información, hay que tener claros los ladrillos: qué es un dato y en qué se diferencia de la información, qué es un método y qué un procedimiento, y qué es un sistema. Con esas piezas en la mano, lo demás se entiende solo.',
    blocks: [
      {
        type: 'p',
        text:
          'Para comprender qué es un sistema de información, primero debemos dominar una serie de términos básicos que constituyen sus cimientos.',
      },
      {
        type: 'h3',
        text: 'El área de organización y métodos',
        criollo:
          'Es el área que mira cómo está organizada la empresa y cómo hace las cosas, para acomodar la estructura y los procedimientos de modo que todo apunte a los objetivos. De ahí el nombre de la materia: sistemas y métodos.',
      },
      {
        type: 'p',
        text:
          'El área de organización y métodos de las TIC se encarga de analizar los problemas de estructura y procedimientos de una empresa, con el fin de optimizar la infraestructura organizativa y el logro de los objetivos definidos.',
      },
      {
        type: 'h3',
        text: 'Dato vs. Información',
        criollo:
          'El dato es el ladrillo suelto; la información es la pared ya construida. Un número solo no te dice nada; ese mismo número con contexto te sirve para decidir.',
      },
      {
        type: 'p',
        text:
          '<strong>Dato</strong>: es la materia prima. Son hechos en bruto, símbolos o registros discretos que describen un evento, pero sin un contexto que les dé sentido. Por sí solos, no son útiles para tomar decisiones. Por ejemplo, el número “150”: sin contexto, podría ser un precio, una cantidad o una medida.',
      },
      {
        type: 'p',
        text:
          '<strong>Información</strong>: es el resultado de procesar, organizar y estructurar los datos de una manera que les otorgue significado y relevancia para quien la recibe. La información reduce la incertidumbre y sirve de base para la toma de decisiones. Siguiendo el ejemplo: “Se vendieron 150 unidades del producto X en la sucursal de Palermo durante el mes de agosto”. Acá el dato “150” se contextualizó y se convirtió en información valiosa para un gerente de ventas.',
      },
      {
        type: 'h3',
        text: 'Método y Procedimiento',
        criollo:
          'El método es el plan general (qué hacer y cómo, a grandes rasgos); el procedimiento es el paso a paso detallado para ejecutarlo siempre igual.',
      },
      {
        type: 'p',
        text:
          '<strong>Método</strong>: es una forma ordenada y sistemática de realizar una acción o alcanzar un fin. Es el “qué hacer” y “cómo hacerlo” a un nivel general. Por ejemplo, el método para calcular la nota final de un curso podría ser “promediar las calificaciones de los parciales y el trabajo práctico”.',
      },
      {
        type: 'p',
        text:
          '<strong>Procedimiento</strong>: es la implementación detallada de un método. Consiste en una serie de pasos o instrucciones explícitas que deben seguirse para completar una tarea de manera estandarizada. Siguiendo el método anterior, el procedimiento sería:',
      },
      {
        type: 'ol',
        items: [
          'Ingresar al sistema de gestión académica.',
          'Seleccionar el curso “Sistemas de Información”.',
          'Sumar la nota del “Parcial 1”, la del “Parcial 2” y la del “Trabajo Práctico”.',
          'Dividir el resultado por 3.',
          'Registrar el valor obtenido en la casilla “Nota final”.',
        ],
      },
      {
        type: 'h3',
        text: 'Sistema',
        criollo:
          'Un sistema es un conjunto de partes que laburan juntas para un objetivo. Siempre tiene lo mismo: entra algo, se transforma, sale algo, y hay un control que avisa si hay que ajustar.',
      },
      {
        type: 'p',
        text:
          'Un <strong>sistema</strong> es un conjunto de componentes o elementos que se interrelacionan entre sí para lograr un objetivo común, operando dentro de un entorno específico. Todo sistema tiene una entrada (input), un proceso de transformación, una salida (output) y un mecanismo de retroalimentación (feedback) que permite el control y el ajuste.',
      },
      {
        type: 'p',
        text: 'Por ejemplo, un sistema de calefacción:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Entrada</strong>: el gas o la electricidad, y la temperatura deseada en el termostato.',
          '<strong>Proceso</strong>: la caldera quema el gas para calentar el agua.',
          '<strong>Salida</strong>: el calor emitido por los radiadores.',
          '<strong>Retroalimentación</strong>: el termostato mide la temperatura ambiente; si es inferior a la deseada, envía una señal para que la caldera siga funcionando; si la alcanza, la apaga.',
        ],
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-12-1',
          q: 'Un dato, por sí solo y sin contexto, ya constituye información útil para tomar decisiones.',
          a: false,
          explain:
            'Falso. El dato es la materia prima (hechos en bruto). Recién cuando se procesa y se contextualiza se convierte en información.',
        },
        {
          id: 'tf-12-2',
          q: 'El procedimiento es la implementación detallada y paso a paso de un método.',
          a: true,
          explain:
            'Verdadero. El método es el “qué/cómo” general; el procedimiento son los pasos explícitos para ejecutarlo de forma estandarizada.',
        },
        {
          id: 'tf-12-3',
          q: 'Todo sistema tiene entrada, proceso de transformación, salida y un mecanismo de retroalimentación.',
          a: true,
          explain:
            'Verdadero. Esos cuatro elementos (input, proceso, output y feedback) están presentes en cualquier sistema.',
        },
        {
          id: 'tf-12-4',
          q: 'La retroalimentación (feedback) de un sistema sirve para permitir el control y el ajuste.',
          a: true,
          explain:
            'Verdadero. El feedback compara la salida con lo deseado y permite corregir; en la calefacción, el termostato prende o apaga la caldera.',
        },
      ],
      mc: [
        {
          id: 'mc-12-1',
          q: '¿Cuál es la diferencia entre dato e información?',
          options: [
            'No hay diferencia: son sinónimos',
            'El dato es un hecho en bruto sin contexto; la información es el dato procesado y con significado',
            'La información es más antigua que el dato',
            'El dato sirve para decidir y la información no',
          ],
          correctIndex: 1,
          explain:
            'El dato es la materia prima sin contexto; al procesarlo y contextualizarlo se vuelve información, que sí sirve para decidir.',
        },
        {
          id: 'mc-12-2',
          q: '“Promediar las calificaciones de los parciales y el trabajo práctico” es un ejemplo de:',
          options: ['Un dato', 'Un procedimiento', 'Un método', 'Una salida (output)'],
          correctIndex: 2,
          explain:
            'Es un método: el “qué hacer / cómo” a nivel general. El procedimiento serían los pasos detallados para ejecutarlo.',
        },
        {
          id: 'mc-12-3',
          q: 'En un sistema de calefacción, el termostato que mide la temperatura y prende o apaga la caldera cumple la función de:',
          options: ['Entrada', 'Proceso', 'Salida', 'Retroalimentación'],
          correctIndex: 3,
          explain:
            'Es la retroalimentación (feedback): compara la temperatura real con la deseada y ajusta el funcionamiento del sistema.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-12-1',
        front: 'Dato',
        back:
          'Materia prima: hechos en bruto, símbolos o registros sin contexto. Por sí solos no sirven para decidir (ej.: el número “150”).',
      },
      {
        id: 'fc-12-2',
        front: 'Información',
        back:
          'Datos procesados, organizados y estructurados de forma que tengan significado y relevancia. Reduce la incertidumbre y permite decidir.',
      },
      {
        id: 'fc-12-3',
        front: 'Método',
        back:
          'Forma ordenada y sistemática de realizar una acción o alcanzar un fin: el “qué hacer” y “cómo” a nivel general.',
      },
      {
        id: 'fc-12-4',
        front: 'Procedimiento',
        back:
          'Implementación detallada de un método: serie de pasos explícitos que se siguen para hacer una tarea de forma estandarizada.',
      },
      {
        id: 'fc-12-5',
        front: 'Sistema',
        back:
          'Conjunto de componentes interrelacionados que operan en un entorno para lograr un objetivo común. Tiene entrada, proceso, salida y retroalimentación.',
      },
      {
        id: 'fc-12-6',
        front: 'Área de organización y métodos',
        back:
          'Analiza los problemas de estructura y procedimientos de una empresa para optimizar la infraestructura organizativa y el logro de los objetivos.',
      },
    ],
  },

  // ---------- SECCIÓN 13 ----------
  {
    id: '13',
    unit: '9',
    title: 'El sistema de información (SI)',
    criollo:
      'Ahora juntamos todo: un sistema de información es gente, máquinas, software, redes y datos trabajando juntos para que la información llegue a donde tiene que llegar. Y, como todo sistema, vive metido en un entorno con el que intercambia entradas y salidas.',
    blocks: [
      {
        type: 'h3',
        text: 'Definición de sistema de información',
        criollo:
          'No es solo “la computadora”. Es todo el combo —personas, hardware, software, redes y datos— funcionando para recolectar, procesar, guardar y repartir información que sirva para operar y decidir.',
      },
      {
        type: 'p',
        text:
          'Un <strong>sistema de información (SI)</strong> es un conjunto organizado de componentes (personas, hardware, software, redes de comunicación y datos) que interactúan para recolectar, procesar, almacenar y distribuir información. Su propósito fundamental es apoyar las operaciones, la gestión (coordinación y control) y la toma de decisiones dentro de una organización.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Otra forma de definirlo (Laudon y Laudon): “Es un conjunto de componentes interrelacionados que recolectan (o recuperan), procesan, almacenan y distribuyen información para apoyar los procesos de toma de decisión, coordinación y control de la organización.”',
      },
      {
        type: 'h3',
        text: 'Componentes clave de un SI',
        criollo:
          'Cinco patas: el fierro (hardware), los programas (software), los datos, la gente y los procesos. Si falta una, el sistema cojea.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Hardware</strong>: equipos físicos (computadoras, servidores, periféricos).',
          '<strong>Software</strong>: programas y aplicaciones que dirigen el funcionamiento del hardware.',
          '<strong>Datos</strong>: los hechos en bruto que el sistema procesará.',
          '<strong>Personas</strong>: usuarios, operadores, analistas y administradores del sistema.',
          '<strong>Procesos</strong>: los procedimientos y reglas de negocio que gobiernan el funcionamiento del sistema.',
        ],
      },
      {
        type: 'h3',
        text: 'Sistemas abiertos y su entorno',
        criollo:
          'Ningún sistema vive aislado. Recibe cosas de afuera y devuelve cosas afuera; eso lo hace un sistema abierto. Y anda mejor cuando se mantiene dentro de niveles de desempeño tolerables.',
      },
      {
        type: 'p',
        text:
          'La <strong>finalidad</strong> de un sistema es la razón de su existencia. Para alcanzar sus objetivos, los sistemas interaccionan con su medioambiente, que está formado por todos los objetos que se encuentran fuera de las fronteras del sistema. Los sistemas que interactúan con su medioambiente (reciben entradas y producen salidas) se denominan <strong>sistemas abiertos</strong>.',
      },
      {
        type: 'p',
        text:
          'Los sistemas trabajan mejor cuando operan dentro de niveles de desempeño tolerables. Las organizaciones están formadas por muchos sistemas, cada uno con las características propias del sistema general.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Las finalidades de los sistemas de información son procesar entradas, mantener archivos de datos relacionados con la organización y producir información, reportes y otras salidas.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-13-1',
          q: 'Un sistema de información se compone únicamente de hardware y software.',
          a: false,
          explain:
            'Falso. Sus componentes clave son hardware, software, datos, personas y procesos. La gente y los procesos también son parte del SI.',
        },
        {
          id: 'tf-13-2',
          q: 'El propósito de un SI es apoyar las operaciones, la gestión y la toma de decisiones de la organización.',
          a: true,
          explain:
            'Verdadero. Recolecta, procesa, almacena y distribuye información justamente con ese fin.',
        },
        {
          id: 'tf-13-3',
          q: 'Un sistema abierto es el que interactúa con su medioambiente recibiendo entradas y produciendo salidas.',
          a: true,
          explain:
            'Verdadero. El medioambiente son los objetos fuera de las fronteras del sistema; el sistema abierto intercambia con él.',
        },
        {
          id: 'tf-13-4',
          q: 'Las personas (usuarios, operadores, analistas) no se consideran un componente del sistema de información.',
          a: false,
          explain:
            'Falso. Las personas son uno de los cinco componentes clave, junto con hardware, software, datos y procesos.',
        },
      ],
      mc: [
        {
          id: 'mc-13-1',
          q: '¿Cuáles son los cinco componentes clave de un sistema de información?',
          options: [
            'Hardware, software, datos, personas y procesos',
            'Entrada, proceso, salida, feedback y entorno',
            'TPS, MIS, DSS, ERP y CRM',
            'Gerentes, empleados, clientes, proveedores y Estado',
          ],
          correctIndex: 0,
          explain:
            'El apunte los enumera así: hardware, software, datos, personas y procesos.',
        },
        {
          id: 'mc-13-2',
          q: 'El “medioambiente” de un sistema se define como:',
          options: [
            'El conjunto de datos que procesa',
            'Todos los objetos que están fuera de las fronteras del sistema',
            'Las personas que lo operan',
            'El hardware y el software',
          ],
          correctIndex: 1,
          explain:
            'El medioambiente está formado por todos los objetos que se encuentran fuera de las fronteras del sistema; los sistemas abiertos interactúan con él.',
        },
        {
          id: 'mc-13-3',
          q: '¿Cuál NO es una finalidad de un sistema de información según el apunte?',
          options: [
            'Procesar entradas',
            'Mantener archivos de datos de la organización',
            'Producir información, reportes y otras salidas',
            'Reemplazar por completo a las personas de la organización',
          ],
          correctIndex: 3,
          explain:
            'Las finalidades son procesar entradas, mantener archivos de datos y producir información/reportes/salidas. Reemplazar a las personas no es una finalidad del SI.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-13-1',
        front: 'Sistema de información (SI)',
        back:
          'Conjunto organizado de personas, hardware, software, redes y datos que interactúan para recolectar, procesar, almacenar y distribuir información.',
      },
      {
        id: 'fc-13-2',
        front: 'Propósito de un SI',
        back:
          'Apoyar las operaciones, la gestión (coordinación y control) y la toma de decisiones de la organización.',
      },
      {
        id: 'fc-13-3',
        front: 'Componentes clave de un SI',
        back: 'Hardware, software, datos, personas y procesos.',
      },
      {
        id: 'fc-13-4',
        front: 'Sistema abierto',
        back: 'Sistema que interactúa con su medioambiente: recibe entradas y produce salidas.',
      },
      {
        id: 'fc-13-5',
        front: 'Medioambiente de un sistema',
        back: 'Todos los objetos que se encuentran fuera de las fronteras del sistema.',
      },
      {
        id: 'fc-13-6',
        front: 'Finalidades de un SI',
        back:
          'Procesar entradas, mantener archivos de datos de la organización y producir información, reportes y otras salidas.',
      },
    ],
  },

  // ---------- SECCIÓN 14 ----------
  {
    id: '14',
    unit: '9',
    title: 'Beneficios de los sistemas de información',
    criollo:
      '¿Para qué le sirve un SI a una empresa? Básicamente para tres cosas: hacer más con menos (eficiencia), decidir mejor (soporte a decisiones) y diferenciarse de la competencia (ventaja estratégica).',
    blocks: [
      {
        type: 'p',
        text:
          'Más allá de los puntos vistos en clase, los beneficios de los sistemas de información se pueden agrupar en tres grandes áreas.',
      },
      {
        type: 'h3',
        text: 'Eficiencia operativa',
        criollo:
          'Menos laburo repetitivo y a mano, menos errores y menos costos. La máquina se encarga de lo rutinario y la gente se dedica a lo que vale.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Aumento de la productividad</strong>: automatizan tareas repetitivas y permiten que los empleados se centren en actividades de mayor valor.',
          '<strong>Reducción de costos operacionales</strong>: optimizan el uso de recursos, minimizan errores y reducen la necesidad de mano de obra para ciertas tareas.',
          '<strong>Control de gastos</strong>: permiten un seguimiento más preciso de los costos y evitan desviaciones presupuestarias.',
        ],
      },
      {
        type: 'h3',
        text: 'Soporte a la toma de decisiones',
        criollo:
          'Te dan los números a tiempo y bien, y te dejan ver patrones que a ojo no se ven. Decidís con data, no con corazonada.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Mejora en la calidad de las decisiones</strong>: proporcionan información oportuna, precisa y relevante a los gerentes.',
          '<strong>Análisis de tendencias</strong>: permiten analizar grandes volúmenes de datos para identificar patrones de mercado, comportamiento de clientes o problemas internos.',
        ],
      },
      {
        type: 'h3',
        text: 'Ventaja estratégica',
        criollo:
          'Acá el SI no solo te ahorra plata: te abre negocios nuevos y te acerca al cliente. Pensá en Netflix o en el home banking.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Nuevos productos y servicios</strong>: facilitan la creación de nuevos modelos de negocio basados en la información (por ejemplo, servicios de streaming o banca online).',
          '<strong>Mejora de la relación con el cliente</strong>: sistemas como los CRM (Customer Relationship Management) permiten personalizar la atención y fidelizar a los clientes.',
        ],
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-14-1',
          q: 'Los beneficios de los SI se agrupan en eficiencia operativa, soporte a la toma de decisiones y ventaja estratégica.',
          a: true,
          explain:
            'Verdadero. Esas son las tres grandes áreas de beneficios que plantea el apunte.',
        },
        {
          id: 'tf-14-2',
          q: 'Un CRM es un ejemplo de sistema que ayuda a mejorar la relación con el cliente.',
          a: true,
          explain:
            'Verdadero. El CRM (Customer Relationship Management) permite personalizar la atención y fidelizar clientes; es parte de la ventaja estratégica.',
        },
        {
          id: 'tf-14-3',
          q: 'El “análisis de tendencias” pertenece al área de eficiencia operativa.',
          a: false,
          explain:
            'Falso. El análisis de tendencias es parte del soporte a la toma de decisiones (identificar patrones en grandes volúmenes de datos).',
        },
        {
          id: 'tf-14-4',
          q: 'La automatización de tareas repetitivas contribuye al aumento de la productividad.',
          a: true,
          explain:
            'Verdadero. Al automatizar lo rutinario, los empleados se enfocan en actividades de mayor valor.',
        },
      ],
      mc: [
        {
          id: 'mc-14-1',
          q: 'Los servicios de streaming y la banca online se mencionan como ejemplo de:',
          options: [
            'Eficiencia operativa',
            'Reducción de costos',
            'Nuevos productos y servicios (ventaja estratégica)',
            'Análisis de tendencias',
          ],
          correctIndex: 2,
          explain:
            'Son nuevos modelos de negocio basados en la información: parte de la ventaja estratégica.',
        },
        {
          id: 'mc-14-2',
          q: '¿Cuál de estos es un beneficio dentro de la “eficiencia operativa”?',
          options: [
            'Mejora de la relación con el cliente',
            'Reducción de costos operacionales',
            'Creación de nuevos modelos de negocio',
            'Análisis de tendencias de mercado',
          ],
          correctIndex: 1,
          explain:
            'La eficiencia operativa incluye aumento de productividad, reducción de costos operacionales y control de gastos.',
        },
        {
          id: 'mc-14-3',
          q: 'El aporte principal del SI al “soporte a la toma de decisiones” es:',
          options: [
            'Eliminar la necesidad de gerentes',
            'Proporcionar información oportuna, precisa y relevante, y permitir analizar tendencias',
            'Reducir el presupuesto a cero',
            'Reemplazar a los clientes',
          ],
          correctIndex: 1,
          explain:
            'Mejora la calidad de las decisiones con información oportuna y precisa, y permite el análisis de tendencias.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-14-1',
        front: 'Tres áreas de beneficios de un SI',
        back: 'Eficiencia operativa, soporte a la toma de decisiones y ventaja estratégica.',
      },
      {
        id: 'fc-14-2',
        front: 'Eficiencia operativa',
        back:
          'Aumento de productividad, reducción de costos operacionales y control de gastos (automatizando tareas repetitivas).',
      },
      {
        id: 'fc-14-3',
        front: 'Soporte a la toma de decisiones',
        back:
          'Información oportuna y precisa para los gerentes, y análisis de tendencias sobre grandes volúmenes de datos.',
      },
      {
        id: 'fc-14-4',
        front: 'Ventaja estratégica',
        back:
          'Nuevos productos y servicios basados en información (streaming, banca online) y mejora de la relación con el cliente (CRM).',
      },
      {
        id: 'fc-14-5',
        front: 'CRM (Customer Relationship Management)',
        back:
          'Sistema que permite personalizar la atención y fidelizar a los clientes. Ejemplo de ventaja estratégica.',
      },
      {
        id: 'fc-14-6',
        front: 'Análisis de tendencias',
        back:
          'Análisis de grandes volúmenes de datos para identificar patrones de mercado, comportamiento de clientes o problemas internos.',
      },
    ],
  },

  // ---------- SECCIÓN 15 ----------
  {
    id: '15',
    unit: '9',
    title: 'Clasificación de los sistemas de información',
    criollo:
      'Los SI se ordenan según a quién sirven y qué tipo de decisiones ayudan a tomar. De abajo hacia arriba: TPS (lo operativo, el día a día), MIS (informes para los jefes) y DSS (análisis para la alta gerencia). Cada uno se alimenta del de abajo.',
    blocks: [
      {
        type: 'p',
        text:
          'Los sistemas de información se pueden clasificar según el nivel jerárquico de la organización al que sirven y el tipo de problemas que resuelven. Se presentan tres tipos principales.',
      },
      {
        type: 'h3',
        text: 'TPS — Sistema de procesamiento de transacciones',
        criollo:
          'Es el que registra el movimiento diario: cada venta, cada retiro, cada sueldo. Tiene que ser rápido y no perder un dato. Es la base que alimenta a todos los demás.',
      },
      {
        type: 'p',
        text:
          '<strong>Nivel organizacional</strong>: operativo. Atiende a los trabajadores de primera línea (cajeros, operarios, administrativos). <strong>Objetivo</strong>: registrar y procesar el gran volumen de transacciones diarias necesarias para que la empresa funcione, sustituyendo procedimientos manuales por procesos computarizados en tareas rutinarias y bien estructuradas.',
      },
      {
        type: 'p',
        text: 'Características clave:',
      },
      {
        type: 'ul',
        items: [
          'Alta velocidad: deben procesar miles de transacciones en poco tiempo.',
          'Confiabilidad y consistencia: la pérdida de un dato transaccional puede ser crítica; los procesos son estandarizados para garantizar la integridad.',
          'Eficiencia: diseñados para ser rápidos y eficaces en la captura de datos.',
        ],
      },
      {
        type: 'p',
        text: 'Ejemplos:',
      },
      {
        type: 'ul',
        items: [
          'Sistema de punto de venta (POS): cada artículo escaneado registra la venta, actualiza el inventario y procesa el pago.',
          'Cajeros automáticos (ATM): cada retiro, depósito o consulta es una transacción procesada en tiempo real.',
          'Sistema de nómina: procesa los pagos a empleados (horas trabajadas, ausencias, impuestos) para generar los recibos de sueldo.',
          'Sistema de reservas de vuelos: gestiona la compra de boletos, la asignación de asientos y el check-in.',
        ],
      },
      {
        type: 'h3',
        text: 'MIS — Sistema de información administrativa',
        criollo:
          'Agarra los datos que generó el TPS y los convierte en informes resumidos para los gerentes de nivel medio. Sirve para situaciones de decisión bien estructuradas y previsibles.',
      },
      {
        type: 'p',
        text:
          '<strong>Nivel organizacional</strong>: táctico. Sirve a los gerentes de nivel medio (jefes de departamento, gerentes regionales). <strong>Objetivo</strong>: proporcionar informes y resúmenes sobre el desempeño actual e histórico de la organización, para apoyar el control y la toma de decisiones a mediano plazo. Usa los datos generados por los TPS como su principal fuente de entrada.',
      },
      {
        type: 'p',
        text: 'Características clave:',
      },
      {
        type: 'ul',
        items: [
          'Orientado a informes: su salida principal son informes predefinidos (diarios, semanales, mensuales).',
          'Poca flexibilidad analítica: los usuarios no suelen crear nuevas consultas o informes complejos por sí mismos.',
          'Apoyo a decisiones estructuradas: ayuda a resolver problemas rutinarios, donde los criterios de decisión están claros.',
        ],
      },
      {
        type: 'p',
        text: 'Ejemplos:',
      },
      {
        type: 'ul',
        items: [
          'Informe mensual de ventas: compara las ventas actuales con las del mes anterior y con las del mismo mes del año pasado.',
          'Sistema de control de inventario: alerta al jefe de almacén cuando el stock cae por debajo del nivel mínimo.',
          'Informe de desempeño de empleados: analiza asistencia, productividad y horas extras para un gerente de RR. HH.',
        ],
      },
      {
        type: 'h3',
        text: 'DSS — Sistema de soporte a decisiones',
        criollo:
          'Es el que usa la alta gerencia para problemas raros y complejos, donde no hay receta. Te deja jugar con los datos y los modelos: “¿qué pasaría si...?”.',
      },
      {
        type: 'p',
        text:
          '<strong>Nivel organizacional</strong>: estratégico. Apoya a la alta gerencia (directores, CEO) en decisiones complejas. <strong>Objetivo</strong>: ayudar a los directivos a tomar decisiones únicas, complejas y no estructuradas, donde no existen procedimientos claros para llegar a una solución.',
      },
      {
        type: 'p',
        text: 'Características clave:',
      },
      {
        type: 'ul',
        items: [
          'Interactividad: el usuario puede manipular datos y modelos para explorar escenarios (“¿qué pasaría si...?”).',
          'Flexibilidad: permite definir las propias consultas y análisis, en lugar de depender de informes predefinidos.',
          'Uso de modelos analíticos: incorpora modelos estadísticos, de optimización o de simulación.',
        ],
      },
      {
        type: 'p',
        text: 'Ejemplos:',
      },
      {
        type: 'ul',
        items: [
          'Análisis de rentabilidad de un nuevo pozo petrolero: combina datos geológicos, costos y precios del petróleo para simular dónde conviene perforar.',
          'Planificación financiera: simula el impacto de distintos escenarios económicos (inflación, tipo de cambio) en los resultados.',
          'Evaluación de riesgo crediticio: analiza variables del cliente para sugerir si aprobar un préstamo y bajo qué condiciones.',
        ],
      },
      {
        type: 'h3',
        text: 'Cuadro comparativo',
        criollo:
          'Para tenerlo de un vistazo: en qué se diferencian TPS, MIS y DSS según usuarios, tipo de decisión, entradas, procesamiento, salida y horizonte temporal.',
      },
      {
        type: 'table',
        caption: 'Comparación entre TPS, MIS y DSS',
        headers: ['Característica', 'TPS', 'MIS', 'DSS'],
        rows: [
          ['Usuarios principales', 'Personal operativo', 'Gerentes de nivel medio', 'Alta gerencia, analistas'],
          ['Tipo de decisión', 'Ninguna (registra datos)', 'Estructurada', 'No estructurada o semiestructurada'],
          ['Entrada de datos', 'Transacciones diarias', 'Resúmenes de datos del TPS', 'Datos internos y externos, modelos'],
          ['Procesamiento', 'Clasificación, listado, actualización', 'Informes de rutina, resúmenes', 'Interactivo, simulaciones, análisis'],
          ['Salida de información', 'Registros detallados', 'Informes resumidos', 'Análisis de escenarios, proyecciones'],
          ['Horizonte temporal', 'Pasado y presente inmediato', 'Pasado y presente', 'Futuro'],
          ['Ejemplo clave', 'Sistema de facturación', 'Informe semanal de ventas', 'Simulador de lanzamiento de producto'],
        ],
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-15-1',
          q: 'El TPS (sistema de procesamiento de transacciones) opera a nivel estratégico, sirviendo a la alta gerencia.',
          a: false,
          explain:
            'Falso. El TPS opera a nivel operativo (cajeros, operarios). El que sirve a la alta gerencia es el DSS.',
        },
        {
          id: 'tf-15-2',
          q: 'El MIS utiliza como principal fuente de entrada los datos generados por el TPS.',
          a: true,
          explain:
            'Verdadero. El MIS toma los datos del TPS y genera informes y resúmenes para los gerentes de nivel medio.',
        },
        {
          id: 'tf-15-3',
          q: 'El DSS genera informes predefinidos y no permite al usuario explorar escenarios.',
          a: false,
          explain:
            'Falso. Al revés: el DSS es interactivo y flexible; permite manipular datos y modelos para simular “¿qué pasaría si...?”. Los informes predefinidos son del MIS.',
        },
        {
          id: 'tf-15-4',
          q: 'Un cajero automático (ATM) es un ejemplo de TPS.',
          a: true,
          explain:
            'Verdadero. Cada retiro, depósito o consulta es una transacción que el TPS procesa en tiempo real.',
        },
        {
          id: 'tf-15-5',
          q: 'El MIS apoya decisiones bien estructuradas y rutinarias; el DSS apoya decisiones no estructuradas y complejas.',
          a: true,
          explain:
            'Verdadero. Esa es la diferencia central: el MIS para lo estructurado y previsible, el DSS para lo complejo y sin procedimiento claro.',
        },
      ],
      mc: [
        {
          id: 'mc-15-1',
          q: '¿Qué tipo de sistema usaría un gerente regional para ver un informe mensual de ventas comparado con el año anterior?',
          options: ['TPS', 'MIS', 'DSS', 'Ninguno: eso no lo hace un SI'],
          correctIndex: 1,
          explain:
            'Es un MIS: genera informes resumidos y predefinidos para gerentes de nivel medio, a partir de los datos del TPS.',
        },
        {
          id: 'mc-15-2',
          q: 'El sistema que ayuda a una petrolera a decidir dónde perforar combinando datos geológicos, costos y modelos de riesgo es un:',
          options: ['TPS', 'MIS', 'DSS', 'POS'],
          correctIndex: 2,
          explain:
            'Es un DSS: apoya decisiones complejas y no estructuradas mediante modelos y simulación de escenarios.',
        },
        {
          id: 'mc-15-3',
          q: 'Según el cuadro comparativo, el horizonte temporal del DSS es:',
          options: [
            'Pasado y presente inmediato',
            'Pasado y presente',
            'Futuro',
            'No tiene horizonte temporal',
          ],
          correctIndex: 2,
          explain:
            'El DSS se orienta al futuro (proyecciones, escenarios). El TPS al presente inmediato y el MIS al pasado y presente.',
        },
        {
          id: 'mc-15-4',
          q: '¿Qué criterio usa el apunte para clasificar los SI en TPS, MIS y DSS?',
          options: [
            'El precio del software',
            'El nivel jerárquico al que sirven y el tipo de problemas que resuelven',
            'La marca del fabricante',
            'La cantidad de usuarios conectados',
          ],
          correctIndex: 1,
          explain:
            'Se clasifican según el nivel jerárquico de la organización al que sirven y el tipo de problemas/decisiones que resuelven.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-15-1',
        front: 'TPS (Transaction Processing System)',
        back:
          'Sistema de nivel operativo que registra y procesa el gran volumen de transacciones diarias. Rápido, confiable y eficiente.',
      },
      {
        id: 'fc-15-2',
        front: 'MIS (Management Information System)',
        back:
          'Sistema de nivel táctico que genera informes y resúmenes (a partir de los datos del TPS) para los gerentes de nivel medio.',
      },
      {
        id: 'fc-15-3',
        front: 'DSS (Decision Support System)',
        back:
          'Sistema de nivel estratégico, interactivo y flexible, que ayuda a la alta gerencia a tomar decisiones complejas y no estructuradas con modelos.',
      },
      {
        id: 'fc-15-4',
        front: 'Criterio de clasificación de los SI',
        back: 'El nivel jerárquico de la organización al que sirven y el tipo de problemas/decisiones que resuelven.',
      },
      {
        id: 'fc-15-5',
        front: 'Fuente de datos del MIS',
        back: 'Los datos generados por el TPS (más otras fuentes), que el MIS resume en informes.',
      },
      {
        id: 'fc-15-6',
        front: 'Ejemplos de TPS',
        back: 'Punto de venta (POS), cajero automático (ATM), sistema de nómina, reservas de vuelos.',
      },
      {
        id: 'fc-15-7',
        front: 'Decisiones que apoya el DSS',
        back:
          'Únicas, complejas y no estructuradas, donde no hay procedimiento claro. Permite simular escenarios “¿qué pasaría si...?”.',
      },
      {
        id: 'fc-15-8',
        front: 'Tipo de decisión por sistema',
        back: 'TPS: ninguna (registra datos). MIS: estructurada. DSS: no estructurada o semiestructurada.',
      },
    ],
  },

  // ---------- SECCIÓN 16 ----------
  {
    id: '16',
    unit: '9',
    title: 'Para reflexionar',
    criollo:
      'Cierre para pensar: la tecnología sola no hace la diferencia; la hacen las empresas que aprenden a usarla. Las que dominan sus sistemas de información se comen el mercado.',
    blocks: [
      {
        type: 'callout',
        tone: 'info',
        text:
          '“Las empresas exitosas son las que aprenden cómo usar las tecnologías, para sacar provecho en sus negocios.” — Laudon y Laudon (2012)',
      },
      {
        type: 'h3',
        text: '¿Qué hace la diferencia?',
        criollo:
          'No es solo tener un buen producto: es saber usar los datos para entender al cliente, afinar la logística y decidir con cabeza.',
      },
      {
        type: 'p',
        text:
          '¿Qué diferencia a empresas como Mercado Libre, Netflix o Amazon del resto? No es solo su producto, sino su dominio magistral de los sistemas de información para entender al cliente, optimizar su logística y tomar decisiones estratégicas basadas en datos.',
      },
      {
        type: 'p',
        text:
          'Una pregunta para llevarse: ¿cómo podría un sistema de información transformar un negocio tradicional que conozcas, como un restaurante de barrio o un taller mecánico?',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Referencia: Laudon, K. C. y Laudon, J. P. (2012). <strong>Sistemas de información gerencial: Administración de la empresa digital</strong> (12.ª ed.). México: Pearson Educación.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-16-1',
          q: 'Según Laudon y Laudon, las empresas exitosas son las que aprenden a usar las tecnologías para sacar provecho en sus negocios.',
          a: true,
          explain:
            'Verdadero. Esa es la frase que cierra el apunte y resume su idea central.',
        },
        {
          id: 'tf-16-2',
          q: 'Lo que distingue a empresas como Mercado Libre, Netflix o Amazon es exclusivamente su producto, no su uso de los sistemas de información.',
          a: false,
          explain:
            'Falso. El apunte remarca que la diferencia está en su dominio de los SI para entender al cliente, optimizar la logística y decidir con datos.',
        },
        {
          id: 'tf-16-3',
          q: 'Un sistema de información solo sirve para grandes empresas tecnológicas, no para un negocio tradicional.',
          a: false,
          explain:
            'Falso. El apunte invita justamente a pensar cómo un SI podría transformar un negocio tradicional (un restaurante de barrio, un taller mecánico).',
        },
      ],
      mc: [
        {
          id: 'mc-16-1',
          q: 'Según el apunte, ¿qué tienen en común Mercado Libre, Netflix y Amazon?',
          options: [
            'Venden el mismo producto',
            'Su dominio de los sistemas de información para entender al cliente y decidir con datos',
            'Son empresas pequeñas',
            'No usan tecnología',
          ],
          correctIndex: 1,
          explain:
            'Su diferencial es el dominio magistral de los SI: entender al cliente, optimizar la logística y tomar decisiones basadas en datos.',
        },
        {
          id: 'mc-16-2',
          q: 'La frase “las empresas exitosas son las que aprenden cómo usar las tecnologías…” pertenece a:',
          options: ['Bill Gates', 'Laudon y Laudon (2012)', 'Steve Jobs', 'Henry Ford'],
          correctIndex: 1,
          explain: 'Es de Laudon y Laudon (2012), los autores de referencia del apunte.',
        },
        {
          id: 'mc-16-3',
          q: 'La obra de referencia citada en el apunte es:',
          options: [
            '“Sistemas de información gerencial: Administración de la empresa digital” (Laudon y Laudon, 2012)',
            '“El arte de la guerra” (Sun Tzu)',
            '“Reingeniería” (Hammer y Champy)',
            '“El método Lean Startup” (Ries)',
          ],
          correctIndex: 0,
          explain:
            'La referencia bibliográfica es Laudon y Laudon (2012), Sistemas de información gerencial: Administración de la empresa digital, Pearson.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-16-1',
        front: 'Frase central (Laudon y Laudon, 2012)',
        back:
          '“Las empresas exitosas son las que aprenden cómo usar las tecnologías, para sacar provecho en sus negocios.”',
      },
      {
        id: 'fc-16-2',
        front: '¿Qué diferencia a Mercado Libre, Netflix o Amazon?',
        back:
          'Su dominio de los sistemas de información para entender al cliente, optimizar la logística y tomar decisiones estratégicas basadas en datos.',
      },
      {
        id: 'fc-16-3',
        front: 'Pregunta de reflexión del apunte',
        back:
          '¿Cómo podría un sistema de información transformar un negocio tradicional, como un restaurante de barrio o un taller mecánico?',
      },
      {
        id: 'fc-16-4',
        front: 'Obra de referencia',
        back:
          'Laudon, K. C. y Laudon, J. P. (2012). Sistemas de información gerencial: Administración de la empresa digital (12.ª ed.). Pearson.',
      },
      {
        id: 'fc-16-5',
        front: 'Idea de cierre de la unidad',
        back:
          'La tecnología sola no da ventaja; la dan las organizaciones que aprenden a usar sus sistemas de información.',
      },
    ],
  },
  ],
  pdfs: [
    { key: 'fundamentos', label: 'Fundamentos', path: 'pdfs/fundamentos.pdf' },
    { key: 'consideraciones', label: 'Consideraciones', path: 'pdfs/consideraciones.pdf' },
    { key: 'presentacion', label: 'Presentación', path: 'pdfs/presentacion.pdf' },
    { key: 'si-introduccion', label: 'Sistemas de información (apunte)', path: 'pdfs/si-introduccion.pdf' },
    { key: 'si-presentacion', label: 'Sistemas de información (presentación)', path: 'pdfs/si-presentacion.pdf' },
    { key: 'si-definiciones', label: 'Sistemas de información (definiciones)', path: 'pdfs/si-definiciones.pdf' },
  ],
};
