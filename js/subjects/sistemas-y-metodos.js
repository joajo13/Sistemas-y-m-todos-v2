/**
 * Materia: Sistemas y Métodos (UP).
 * Unidades 8.1 y 8.2 (Administración de Proyectos), 9 (Sistemas de Información),
 * 10 (Desarrollo de sistemas de información), 11 (Proceso de desarrollo de
 * sistemas de información) y 12 (Comunicación oral y escrita).
 *
 * Tipos conceptuales (ver js/content.js para Subject/Section/ContentBlock).
 */

export default {
  id: 'sistemas-y-metodos',
  title: 'Sistemas y Métodos',
  subtitle: 'Unidades 8 a 12 — Apuntes',
  tagline: 'Administración de proyectos · Sistemas de información · Desarrollo de sistemas · Proceso de desarrollo · Comunicación oral y escrita',
  units: {
    '8.1': 'Fundamentos de la Administración de Proyectos',
    '8.2': 'Herramientas y procesos para la administración de proyectos',
    '9': 'Sistemas de Información',
    '10': 'Desarrollo de sistemas de información',
    '11': 'Proceso de desarrollo de sistemas de información',
    '12': 'Comunicación oral y escrita',
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
      ms: [
        {
          id: 'ms-1-1',
          q: '¿Cuáles son las características clave de un proyecto según el apunte?',
          options: [
            'Temporal: comienzo y final definidos',
            'Único: el producto o resultado es diferente de otros',
            'Recursos definidos: presupuesto, personal y equipamiento específicos',
            'Resultado específico: busca alcanzar un objetivo claro y tangible',
            'Continuo: actividad rutinaria sostenida en el tiempo',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Lo continuo y rutinario es propio de una operación, no de un proyecto.',
        },
        {
          id: 'ms-1-2',
          q: '¿Cuáles son las restricciones dentro de las cuales la administración de proyectos cumple sus objetivos?',
          options: [
            'Alcance',
            'Tiempo',
            'Costo',
            'Calidad del equipo',
            'Estrategia corporativa',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'El apunte menciona explícitamente alcance, tiempo y costo. Calidad del equipo y estrategia corporativa no son las restricciones definitorias.',
        },
        {
          id: 'ms-1-3',
          q: '¿Qué afirmaciones diferencian un proyecto de una operación?',
          options: [
            'Construir un nuevo edificio es proyecto; mantenerlo a diario es operación',
            'El proyecto tiene fechas de inicio y fin acotadas',
            'El proyecto entrega un producto, servicio o resultado específico',
            'La operación es repetitiva y continua',
            'La operación tiene la misma naturaleza finita que el proyecto',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. La quinta es lo opuesto: la operación NO es finita, justamente eso la distingue del proyecto.',
        },
        {
          id: 'ms-1-4',
          q: '¿Por qué importa la administración de proyectos según el apunte?',
          options: [
            'Aumenta las probabilidades de éxito',
            'Optimiza el uso de recursos',
            'Proporciona un marco de trabajo claro al equipo',
            'Garantiza el éxito al 100%',
            'Elimina la necesidad de planificación',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son textuales. No garantiza éxito al 100% ni reemplaza la planificación: es la disciplina que planifica.',
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
      ms: [
        {
          id: 'ms-2-1',
          q: '¿Cuáles son fuentes de proyectos mencionadas en el apunte?',
          options: [
            'Oportunidades de negocio',
            'Requerimientos del cliente',
            'Cambios regulatorios',
            'Plan estratégico de la alta dirección',
            'Análisis exhaustivo de la competencia directa',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'El apunte lista oportunidades, requerimientos, cambios regulatorios, plan estratégico e ideas innovadoras. El análisis de la competencia directa no es una de las cinco fuentes.',
        },
        {
          id: 'ms-2-2',
          q: 'Sobre el proceso de selección y aprobación de un proyecto, ¿qué etapas se incluyen?',
          options: [
            'Business case (caso de negocio)',
            'Estudio de factibilidad',
            'Comités de revisión',
            'Auditoría externa obligatoria',
            'Aprobación automática si excede cierto presupuesto',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las tres etapas formales son business case, estudio de factibilidad y comités. Las otras dos no figuran en el apunte.',
        },
        {
          id: 'ms-2-3',
          q: '¿Cuáles son las dimensiones del estudio de factibilidad?',
          options: [
            'Factibilidad técnica (tecnología y conocimientos)',
            'Factibilidad económica (beneficios vs costos, rentabilidad)',
            'Factibilidad operativa (integración con las operaciones actuales)',
            'Factibilidad jurídica (cumplimiento legal absoluto)',
            'Factibilidad ambiental (impacto ecológico)',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las tres dimensiones son técnica, económica y operativa. Las otras dos no aparecen como dimensiones del estudio.',
        },
        {
          id: 'ms-2-4',
          q: '¿Qué afirmaciones sobre los comités de revisión son correctas?',
          options: [
            'El comité directivo está compuesto por altos ejecutivos',
            'El comité directivo se enfoca en la alineación estratégica y los grandes presupuestos',
            'El comité de sistemas de información evalúa la factibilidad técnica y la integración',
            'El comité del grupo de usuarios aporta la visión del "cliente" final',
            'Todos los comités son obligatoriamente externos a la empresa',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. Los comités son internos a la empresa — el apunte no menciona ningún comité externo obligatorio.',
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
      ms: [
        {
          id: 'ms-3-1',
          q: '¿Cuáles son las cinco fases del ciclo de vida del proyecto?',
          options: [
            'Inicio',
            'Planificación',
            'Ejecución',
            'Monitoreo y control',
            'Cierre',
          ],
          correctIndexes: [0, 1, 2, 3, 4],
          explain:
            'Las cinco fases son justamente esas. Recordá que monitoreo y control va EN PARALELO a la ejecución, no después.',
        },
        {
          id: 'ms-3-2',
          q: '¿Qué afirmaciones sobre las fases del ciclo de vida son correctas?',
          options: [
            'En el inicio se elabora el project charter y se identifican los stakeholders',
            'La planificación es la fase más intensiva',
            'La ejecución consume la mayor parte del tiempo y del presupuesto',
            'El monitoreo y control se realiza después del cierre',
            'En el cierre se documentan las lecciones aprendidas',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las primeras cuatro afirmaciones correctas son textuales. El monitoreo y control va en paralelo a la ejecución, no después del cierre.',
        },
        {
          id: 'ms-3-3',
          q: '¿Cuáles de las siguientes son áreas de conocimiento del PMBOK®?',
          options: [
            'Gestión de la integración',
            'Gestión del alcance',
            'Gestión de los riesgos',
            'Gestión de las adquisiciones',
            'Gestión del marketing del proyecto',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las nueve áreas son integración, alcance, tiempo, costos, calidad, recursos humanos, comunicaciones, riesgos y adquisiciones. El marketing del proyecto no es un área del PMBOK®.',
        },
        {
          id: 'ms-3-4',
          q: '¿Qué afirmaciones sobre el PMI y la Guía del PMBOK® son correctas?',
          options: [
            'El PMI es la organización líder mundial en dirección de proyectos',
            'La Guía del PMBOK® recopila las mejores prácticas reconocidas en la industria',
            'Las áreas de conocimiento se gestionan de forma integrada a lo largo de todo el ciclo de vida',
            'Las áreas de conocimiento son fases del proyecto',
            'La Guía del PMBOK® es publicada por una agencia gubernamental',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las áreas de conocimiento son DIMENSIONES, no fases. La Guía la publica el PMI, no una agencia gubernamental.',
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
      ms: [
        {
          id: 'ms-4-1',
          q: '¿Qué letras componen el acrónimo SMART para definir objetivos?',
          options: [
            'S — Específico',
            'M — Medible',
            'A — Alcanzable',
            'R — Realista/Relevante',
            'P — Productivo',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'SMART es Específico, Medible, Alcanzable, Realista/Relevante y Oportuno (Time-bound). La P no es parte del acrónimo.',
        },
        {
          id: 'ms-4-2',
          q: '¿Qué beneficios atribuye el apunte a una planificación sólida?',
          options: [
            'Mejora la comunicación',
            'Minimiza la repetición de tareas',
            'Aumenta la predictibilidad',
            'Ayuda a entregar productos de calidad a tiempo',
            'Garantiza la satisfacción de todos los stakeholders sin excepción',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Garantizar satisfacción universal no es un beneficio que el apunte atribuya a la planificación.',
        },
        {
          id: 'ms-4-3',
          q: '¿Qué afirmaciones sobre esfuerzo, duración y tiempo calendario son correctas?',
          options: [
            'El esfuerzo se mide en horas de trabajo (tiempo/persona)',
            'La duración se mide en días hábiles considerando la disponibilidad de recursos',
            'El tiempo calendario incluye fines de semana y feriados',
            'Una tarea de 16 hs con 1 programador a 8 hs/día tiene 2 días de duración',
            'El esfuerzo, la duración y el tiempo calendario siempre son iguales',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. Los tres conceptos están relacionados, pero rara vez coinciden — esa es justamente la confusión que el apunte busca evitar.',
        },
        {
          id: 'ms-4-4',
          q: '¿Qué factores influyen en cómo el esfuerzo se traduce en duración?',
          options: [
            'La disponibilidad de la persona',
            'La naturaleza del trabajo (si requiere colaboración de otros)',
            'El tamaño del equipo',
            'El color del logo del cliente',
            'El nombre del project manager',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son textuales del apunte. Color y nombre no son factores: son detalles cosméticos sin relación con la conversión esfuerzo→duración.',
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
      ms: [
        {
          id: 'ms-5-1',
          q: '¿Qué elementos forman parte del Project Charter según el apunte?',
          options: [
            'Los objetivos del proyecto',
            'El gerente del proyecto asignado',
            'Los stakeholders clave',
            'El presupuesto preliminar',
            'El código fuente de los entregables',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Los primeros cuatro están textualmente listados (junto con los entregables principales). El código fuente no es contenido del Project Charter — pertenece a la ejecución.',
        },
        {
          id: 'ms-5-2',
          q: '¿Qué afirmaciones sobre el WBS son correctas?',
          options: [
            'Es una descomposición jerárquica del alcance total del trabajo',
            'Desglosa los grandes entregables en paquetes de trabajo más pequeños',
            'Indica qué hay que hacer, no cuándo',
            'Sus paquetes de trabajo son manejables',
            'Su función principal es mostrar las dependencias en una línea de tiempo',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. La línea de tiempo con dependencias es función del cronograma Gantt, no del WBS.',
        },
        {
          id: 'ms-5-3',
          q: '¿Qué afirmaciones sobre el plan de proyecto y el cronograma Gantt son correctas?',
          options: [
            'El plan de proyecto es el documento maestro y formal',
            'El plan de proyecto integra planes secundarios (alcance, cronograma, costos, calidad, etc.)',
            'El Gantt es la herramienta visual por excelencia para representar el cronograma',
            'El Gantt muestra tareas, duraciones, dependencias y progreso',
            'El plan de proyecto y el Gantt son sinónimos',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. El Gantt es UNA herramienta dentro del plan; no es el plan completo.',
        },
        {
          id: 'ms-5-4',
          q: 'Sobre la gestión de riesgos y cambios, ¿qué es correcto?',
          options: [
            'Son procesos, no documentos únicos',
            'Se debe tener un plan para identificar y mitigar riesgos',
            'Se debe contar con un procedimiento formal para gestionar cambios al alcance original',
            'Buscan evitar el scope creep (corrupción del alcance)',
            'Se ejecutan una sola vez al inicio del proyecto',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. Justamente porque son procesos (no documentos únicos), se aplican a lo largo del proyecto — no una sola vez.',
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
      ms: [
        {
          id: 'ms-6-1',
          q: '¿Cuáles son los cinco desafíos comunes que el apunte identifica como causas de fracaso?',
          options: [
            'Objetivos poco claros',
            'Planes y calendarios irreales',
            'Recursos saturados',
            'Prioridades cambiantes',
            'Falta de herramientas tecnológicas',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Los cinco son: objetivos poco claros, planes irreales, recursos saturados, prioridades cambiantes y comunicación deficiente. La falta de herramientas tecnológicas no figura en el apunte.',
        },
        {
          id: 'ms-6-2',
          q: '¿Qué afirmaciones sobre el desafío de recursos saturados son correctas?',
          options: [
            'Ocurre al asignar personas a demasiados proyectos a la vez',
            'Reduce la productividad de las personas',
            'Aumenta el riesgo de errores',
            'Mejora la flexibilidad del equipo',
            'Es positivo porque diversifica el conocimiento',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son textuales. La saturación es un problema, no una ventaja: el apunte la identifica como uno de los cinco desafíos críticos.',
        },
        {
          id: 'ms-6-3',
          q: '¿Qué consecuencias tienen los planes y calendarios irreales según el apunte?',
          options: [
            'Generan desmotivación en el equipo',
            'Generan baja calidad de los entregables',
            'Surgen de la presión por terminar rápido',
            'Mejoran la predictibilidad de la entrega',
            'Reducen el costo del proyecto',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son textuales. La predictibilidad y la reducción de costos son lo opuesto: cronogramas irreales rompen ambas.',
        },
        {
          id: 'ms-6-4',
          q: '¿Qué afirmaciones sobre el rol del gerente ante los desafíos son correctas?',
          options: [
            'Trabaja proactivamente desde el inicio del proyecto',
            'Anticipa los problemas en lugar de reaccionar cuando ya ocurrieron',
            'La comunicación deficiente es una de las principales causas de problemas',
            'Las prioridades cambiantes hacen que el equipo pierda el foco y el proyecto se estanque',
            'Resuelve los problemas únicamente al cierre del proyecto, documentándolos como lecciones aprendidas',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Resolver solo al cierre es lo opuesto al enfoque proactivo que pide el apunte.',
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
      ms: [
        {
          id: 'ms-7-1',
          q: '¿Qué factores determinan el tiempo de investigación del sistema?',
          options: [
            'La cantidad de personas a entrevistar',
            'El tiempo necesario para el desarrollo',
            'La realización de las interconsultas entre los usuarios',
            'La cantidad de líneas de código estimadas',
            'El presupuesto del cliente',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Los tres primeros están explícitamente listados en el apunte. Líneas de código y presupuesto no son factores que el apunte mencione para determinar el tiempo de investigación.',
        },
        {
          id: 'ms-7-2',
          q: '¿Qué afirmaciones sobre los proyectos de sistemas son correctas?',
          options: [
            'Deben estar correctamente planeados en conformidad con el grupo de usuarios',
            'El personal afectado debe ser asignado y administrado adecuadamente',
            'El desarrollo debe seguir los lineamientos para asegurar calidad y efectividad',
            'El project leader debe controlar la disponibilidad de las personas asignadas',
            'El project leader se ocupa principalmente de codificar los módulos críticos',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El project leader coordina y controla disponibilidad — no se ocupa de codificar.',
        },
        {
          id: 'ms-7-3',
          q: '¿Qué afirmaciones sobre el desarrollo de sistemas como actividad son correctas según el apunte?',
          options: [
            'El desarrollo de sistemas y la programación se consideran actividades individuales',
            'Desde la mirada del project leader, es primordial controlar la disponibilidad de todo el equipo',
            'El proyecto no requiere coordinación entre las actividades individuales',
            'La disponibilidad de las personas asignadas es clave para concretar el plan de trabajo',
            'Las interconsultas entre usuarios no son parte del proceso',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las primeras dos y la cuarta son textuales. La coordinación sí es necesaria (la actividad individual coexiste con la coordinación), y las interconsultas son parte del tiempo de investigación.',
        },
        {
          id: 'ms-7-4',
          q: '¿Qué se busca con los lineamientos del desarrollo según el apunte?',
          options: [
            'Asegurar la calidad de la aplicación',
            'Asegurar la efectividad de la aplicación a implementar',
            'Permitir que cada programador trabaje sin reglas',
            'Que el personal sea asignado y administrado adecuadamente',
            'Sustituir la participación de los usuarios',
          ],
          correctIndexes: [0, 1, 3],
          explain:
            'Las primeras dos y la cuarta son textuales del apunte. Los lineamientos justamente apuntan a lo opuesto del trabajo sin reglas, y no sustituyen la conformidad con los usuarios.',
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
      ms: [
        {
          id: 'ms-8-1',
          q: '¿Cuáles son características clave de la WBS según el apunte?',
          options: [
            'Orientada a los entregables',
            'Jerárquica',
            'Cumple la regla del 100%',
            'Define el "qué", no el "cómo" ni el "cuándo"',
            'Asigna fechas y duración a cada paquete de trabajo',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Fechas y duración son del Gantt, no de la WBS.',
        },
        {
          id: 'ms-8-2',
          q: '¿Qué afirmaciones sobre la OBS son correctas?',
          options: [
            'Es un organigrama del proyecto',
            'Muestra las distintas unidades organizativas (departamentos, equipos)',
            'Define el "quién"',
            'Sus unidades se relacionan entre sí',
            'Reemplaza a la WBS',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. La OBS no reemplaza a la WBS: son complementarias y su cruce arma la matriz de responsabilidades.',
        },
        {
          id: 'ms-8-3',
          q: '¿Qué se obtiene al cruzar la WBS con la OBS?',
          options: [
            'Una matriz de asignación de responsabilidades',
            'Cada paquete de trabajo queda asignado a un equipo o departamento',
            'Garantiza que cada parte del proyecto tenga un dueño claro',
            'Un cronograma con fechas y dependencias',
            'El registro de riesgos del proyecto',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son textuales del apunte. Cronograma y registro de riesgos son otros artefactos distintos.',
        },
        {
          id: 'ms-8-4',
          q: '¿Qué afirmaciones sobre los paquetes de trabajo y la jerarquía de la WBS son correctas?',
          options: [
            'Los paquetes de trabajo son las divisiones más pequeñas y manejables',
            'En la cima de la jerarquía está el proyecto general',
            'En la base están los paquetes de trabajo individuales',
            'La WBS se enfoca en organizar y definir el alcance total del proyecto',
            'Los paquetes de trabajo son los niveles más altos y generales',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Los paquetes están en la BASE, no en la cima — son las unidades ejecutables más chicas.',
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
      ms: [
        {
          id: 'ms-9-1',
          q: 'Sobre esfuerzo, duración y tiempo calendario, ¿qué es correcto?',
          options: [
            'Esfuerzo: cantidad total de horas de trabajo que la tarea requiere',
            'Duración: días laborables que toma la tarea con los recursos asignados',
            'Tiempo calendario: lapso total en el almanaque, incluye fines de semana y feriados',
            'Una tarea de 16 hs con 1 recurso a 8 hs/día tiene duración de 2 días',
            'Esfuerzo, duración y tiempo calendario son siempre iguales',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. La quinta es el error clásico que el apunte advierte explícitamente.',
        },
        {
          id: 'ms-9-2',
          q: '¿Qué permite ver de un vistazo el diagrama de Gantt?',
          options: [
            'Qué tareas hay que hacer',
            'Cuándo comienza y termina cada tarea',
            'Cuánto dura cada tarea',
            'Cómo se superponen las tareas y si hay dependencias',
            'El presupuesto detallado de cada paquete',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El presupuesto detallado no se representa en el Gantt — se gestiona en costos.',
        },
        {
          id: 'ms-9-3',
          q: '¿Qué afirmaciones sobre el camino crítico son correctas?',
          options: [
            'Es la secuencia de tareas más larga y menos flexible del proyecto',
            'Su duración total determina la duración total del proyecto',
            'Cualquier retraso en una tarea del camino crítico retrasa todo el proyecto',
            'Concentra la máxima atención del gerente de proyecto',
            'Es la secuencia más corta del proyecto',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Justamente por ser la MÁS LARGA, es crítico.',
        },
        {
          id: 'ms-9-4',
          q: '¿Qué es necesario para acortar la duración total del proyecto?',
          options: [
            'Acortar la duración de tareas que estén en el camino crítico',
            'Reducir tareas que NO están en el camino crítico',
            'Eliminar dependencias entre tareas no críticas',
            'Atacar las tareas con holgura',
            'No hay otra forma efectiva: hay que tocar el camino crítico',
          ],
          correctIndexes: [0, 4],
          explain:
            'Para acortar la duración total HAY que acortar tareas del camino crítico. Las otras opciones no mueven la duración total porque las tareas no críticas tienen holgura.',
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
      ms: [
        {
          id: 'ms-10-1',
          q: '¿Cuáles son las cuatro estrategias clásicas para tratar riesgos negativos?',
          options: [
            'Evitar',
            'Transferir',
            'Anticipar (mitigar)',
            'Aceptar',
            'Ignorar permanentemente',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las cuatro estrategias son Evitar, Transferir, Anticipar y Aceptar. Ignorar no es una estrategia válida del apunte — Aceptar implica reconocer el riesgo, no ignorarlo.',
        },
        {
          id: 'ms-10-2',
          q: '¿Qué afirmaciones sobre la gestión de riesgos son correctas?',
          options: [
            'Un riesgo es un evento incierto con impacto positivo o negativo si ocurre',
            'La gestión no busca eliminar la incertidumbre, sino gestionarla',
            'Transferir un riesgo traslada las consecuencias a un tercero (ej.: seguro)',
            'Aceptar se usa generalmente para riesgos de bajo impacto o probabilidad',
            'Evitar significa simplemente no hablar del riesgo en las reuniones',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Evitar significa MODIFICAR el plan para eliminar la amenaza, no esconder el problema.',
        },
        {
          id: 'ms-10-3',
          q: '¿Qué afirmaciones sobre QA vs QC son correctas?',
          options: [
            'QA está enfocado en los procesos',
            'QC está enfocado en los productos',
            'QA busca prevenir defectos mediante auditorías',
            'QC busca detectar defectos mediante inspección',
            'QA inspecciona productos terminados',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. Inspeccionar productos terminados es función del QC, no del QA.',
        },
        {
          id: 'ms-10-4',
          q: '¿Cuáles son los pasos del proceso formal de gestión de cambios según el apunte?',
          options: [
            'Solicitud del cambio',
            'Evaluación del impacto en alcance, cronograma, costo y calidad',
            'Aprobación por un comité de control de cambios',
            'Ajuste del plan y comunicación a todos los involucrados',
            'Implementación inmediata sin revisión',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son los pasos formales. La implementación inmediata es exactamente lo que el proceso busca evitar.',
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
      ms: [
        {
          id: 'ms-11-1',
          q: '¿Qué componentes típicos incluye un informe de avance según el apunte?',
          options: [
            'Resumen ejecutivo',
            'Estado de actividades (completadas y en progreso)',
            'Riesgos y problemas',
            'Atrasos y análisis de presupuesto',
            'Pseudocódigo de los módulos pendientes',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El pseudocódigo no forma parte del informe de avance.',
        },
        {
          id: 'ms-11-2',
          q: '¿Qué afirmaciones sobre el acta de certificación de hitos son correctas?',
          options: [
            'Un hito es un punto o evento importante del proyecto',
            'Es un documento formal donde el cliente o sponsor firma la aceptación',
            'Puede aceptar un entregable o el fin de una fase importante',
            'Su firma libera al equipo para continuar con la siguiente etapa',
            'Se firma una sola vez al inicio del proyecto',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El acta de hitos se firma cada vez que se acepta un entregable o se cierra una fase, no una sola vez al inicio.',
        },
        {
          id: 'ms-11-3',
          q: '¿Cuáles son actividades del cierre formal del proyecto?',
          options: [
            'Cierre administrativo (contratos, facturas, archivo)',
            'Revisión post-implementación',
            'Acta de cierre con lecciones aprendidas',
            'Reconocimiento y celebración del equipo',
            'Re-planificación del alcance del proyecto',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las cuatro primeras son las actividades del cierre. Re-planificar el alcance pertenece a la gestión de cambios durante la ejecución, no al cierre.',
        },
        {
          id: 'ms-11-4',
          q: '¿Qué afirmaciones sobre las lecciones aprendidas son correctas?',
          options: [
            'Son la sección más valiosa del acta de cierre',
            'Documentan qué salió bien',
            'Documentan qué salió mal',
            'Documentan qué se podría mejorar en futuros proyectos',
            'Se elaboran únicamente cuando el proyecto fracasa',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Se documentan SIEMPRE — tanto éxitos como fallos sirven a futuros proyectos.',
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
      ms: [
        {
          id: 'ms-12-1',
          q: '¿Qué elementos posee todo sistema según el apunte?',
          options: [
            'Entrada (input)',
            'Proceso de transformación',
            'Salida (output)',
            'Mecanismo de retroalimentación (feedback)',
            'Stakeholders externos',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Los cuatro elementos canónicos del sistema son input, proceso, output y feedback. Los stakeholders están fuera del sistema, en el medioambiente.',
        },
        {
          id: 'ms-12-2',
          q: '¿Qué afirmaciones sobre dato e información son correctas?',
          options: [
            'El dato es la materia prima: hechos en bruto sin contexto',
            'La información es el resultado de procesar y estructurar datos para darles significado',
            'La información reduce la incertidumbre',
            'La información sirve de base para la toma de decisiones',
            'El dato por sí solo es información útil',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El dato AISLADO no es información: necesita procesamiento y contexto.',
        },
        {
          id: 'ms-12-3',
          q: '¿Qué afirmaciones sobre método y procedimiento son correctas?',
          options: [
            'El método es una forma ordenada y sistemática de realizar una acción',
            'El método responde a "qué hacer" y "cómo" a nivel general',
            'El procedimiento es la implementación detallada de un método',
            'El procedimiento es una serie de pasos explícitos para una tarea estandarizada',
            'Método y procedimiento son sinónimos',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Justamente el apunte los distingue: método es general, procedimiento es detallado.',
        },
        {
          id: 'ms-12-4',
          q: '¿Qué afirmaciones sobre el área de organización y métodos son correctas?',
          options: [
            'Se encarga de analizar problemas de estructura y procedimientos de una empresa',
            'Busca optimizar la infraestructura organizativa',
            'Apoya el logro de los objetivos definidos',
            'Solo se ocupa del hardware del sistema',
            'Es parte de las TIC (Tecnologías de la Información y la Comunicación)',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las primeras dos, la tercera y la quinta son textuales. El área no se limita al hardware — analiza estructura y procedimientos.',
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
      ms: [
        {
          id: 'ms-13-1',
          q: '¿Cuáles son los cinco componentes clave de un sistema de información?',
          options: [
            'Hardware',
            'Software',
            'Datos',
            'Personas',
            'Procesos',
          ],
          correctIndexes: [0, 1, 2, 3, 4],
          explain:
            'Los cinco componentes textuales son hardware, software, datos, personas y procesos. Todos son correctos.',
        },
        {
          id: 'ms-13-2',
          q: '¿Qué actividades realiza un sistema de información según el apunte y Laudon & Laudon?',
          options: [
            'Recolectar (o recuperar)',
            'Procesar',
            'Almacenar',
            'Distribuir información',
            'Reemplazar a la alta gerencia en la decisión final',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El SI apoya la toma de decisiones, no la reemplaza.',
        },
        {
          id: 'ms-13-3',
          q: '¿Qué afirmaciones sobre sistemas abiertos y entorno son correctas?',
          options: [
            'Los sistemas abiertos interactúan con su medioambiente',
            'Los sistemas abiertos reciben entradas y producen salidas',
            'El medioambiente está formado por todos los objetos fuera de las fronteras del sistema',
            'Los sistemas trabajan mejor dentro de niveles de desempeño tolerables',
            'Un sistema cerrado interactúa libremente con el entorno',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Un sistema CERRADO es justamente lo opuesto a uno abierto — no interactúa con el entorno.',
        },
        {
          id: 'ms-13-4',
          q: '¿Cuáles son finalidades de un sistema de información según el apunte?',
          options: [
            'Procesar entradas',
            'Mantener archivos de datos relacionados con la organización',
            'Producir información, reportes y otras salidas',
            'Apoyar las operaciones, la gestión y la toma de decisiones',
            'Reemplazar a los stakeholders externos',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El SI no reemplaza stakeholders — interactúa con ellos.',
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
      ms: [
        {
          id: 'ms-14-1',
          q: '¿Cuáles son las tres grandes áreas de beneficios de los SI?',
          options: [
            'Eficiencia operativa',
            'Soporte a la toma de decisiones',
            'Ventaja estratégica',
            'Reducción del horizonte temporal',
            'Eliminación total de la incertidumbre',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las tres áreas son eficiencia operativa, soporte a la toma de decisiones y ventaja estratégica. Las otras opciones no son áreas que el apunte mencione.',
        },
        {
          id: 'ms-14-2',
          q: '¿Cuáles beneficios pertenecen a la eficiencia operativa?',
          options: [
            'Aumento de la productividad',
            'Reducción de costos operacionales',
            'Control de gastos',
            'Mejora de la relación con el cliente',
            'Creación de nuevos productos y servicios',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Productividad, reducción de costos y control de gastos pertenecen a la eficiencia operativa. La relación con el cliente y los nuevos productos son ventaja estratégica.',
        },
        {
          id: 'ms-14-3',
          q: '¿Qué afirmaciones sobre el soporte a la toma de decisiones son correctas?',
          options: [
            'Proporciona información oportuna, precisa y relevante a los gerentes',
            'Permite el análisis de tendencias',
            'Permite identificar patrones de mercado, comportamiento de clientes o problemas internos',
            'Reemplaza por completo el juicio de los gerentes',
            'Trabaja sobre grandes volúmenes de datos',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las primeras dos, la tercera y la quinta son textuales. El SI APOYA la decisión gerencial, no la reemplaza.',
        },
        {
          id: 'ms-14-4',
          q: '¿Qué ejemplos o componentes pertenecen a la ventaja estratégica?',
          options: [
            'Nuevos modelos de negocio basados en información (streaming, banca online)',
            'CRM para personalizar la atención y fidelizar clientes',
            'Mejora de la relación con el cliente',
            'Optimización del uso de recursos minimizando errores',
            'Automatización de tareas rutinarias',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son ventaja estratégica. Optimización de recursos y automatización pertenecen a eficiencia operativa.',
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
      ms: [
        {
          id: 'ms-15-1',
          q: '¿Qué afirmaciones sobre el TPS (Transaction Processing System) son correctas?',
          options: [
            'Opera a nivel operativo',
            'Atiende a los trabajadores de primera línea',
            'Tiene alta velocidad: procesa miles de transacciones en poco tiempo',
            'Es confiable y consistente',
            'Apoya decisiones no estructuradas de la alta gerencia',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El TPS no toma decisiones — registra transacciones. La alta gerencia y las decisiones no estructuradas son del DSS.',
        },
        {
          id: 'ms-15-2',
          q: '¿Qué afirmaciones sobre el MIS (Management Information System) son correctas?',
          options: [
            'Opera a nivel táctico',
            'Sirve a gerentes de nivel medio',
            'Su salida principal son informes predefinidos',
            'Apoya decisiones estructuradas',
            'Usa los datos generados por los TPS como principal fuente de entrada',
          ],
          correctIndexes: [0, 1, 2, 3, 4],
          explain:
            'Las cinco son textuales del apunte. El MIS es la capa intermedia que consume datos del TPS para informar a gerentes medios.',
        },
        {
          id: 'ms-15-3',
          q: '¿Qué afirmaciones sobre el DSS (Decision Support System) son correctas?',
          options: [
            'Opera a nivel estratégico',
            'Es interactivo: el usuario puede manipular datos y modelos',
            'Es flexible: permite definir las propias consultas y análisis',
            'Usa modelos analíticos (estadísticos, optimización, simulación)',
            'Su horizonte temporal es el pasado y presente inmediato',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El horizonte del DSS es el FUTURO; el del TPS es el presente inmediato.',
        },
        {
          id: 'ms-15-4',
          q: 'Según el cuadro comparativo, ¿qué correspondencias son correctas?',
          options: [
            'TPS · horizonte: pasado y presente inmediato',
            'MIS · horizonte: pasado y presente',
            'DSS · horizonte: futuro',
            'TPS · tipo de decisión: ninguna (registra datos)',
            'MIS · tipo de decisión: no estructurada',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del cuadro. El MIS apoya decisiones ESTRUCTURADAS; las NO estructuradas son del DSS.',
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
      ms: [
        {
          id: 'ms-16-1',
          q: '¿Qué diferencia, según el apunte, a empresas como Mercado Libre, Netflix o Amazon?',
          options: [
            'Su dominio magistral de los sistemas de información',
            'Su capacidad de entender al cliente',
            'La optimización de su logística',
            'La toma de decisiones estratégicas basada en datos',
            'El hecho de no usar tecnología',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El apunte plantea exactamente lo opuesto a "no usar tecnología".',
        },
        {
          id: 'ms-16-2',
          q: '¿Qué afirmaciones derivadas de Laudon y Laudon (2012) son correctas según el apunte?',
          options: [
            'Las empresas exitosas son las que aprenden cómo usar las tecnologías',
            'El propósito es sacar provecho de la tecnología en sus negocios',
            'La obra es "Sistemas de información gerencial: Administración de la empresa digital"',
            'Es la 12.ª edición publicada por Pearson Educación',
            'Postula que la tecnología por sí sola garantiza el éxito empresarial',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. La idea de cierre es justamente la opuesta: la tecnología sola NO da ventaja; la dan las organizaciones que aprenden a usarla.',
        },
        {
          id: 'ms-16-3',
          q: '¿Qué reflexiones plantea el apunte como cierre de la unidad?',
          options: [
            'Pensar cómo un SI podría transformar un negocio tradicional',
            'Considerar ejemplos como un restaurante de barrio o un taller mecánico',
            'Reconocer que el dominio de los SI marca la diferencia competitiva',
            'Asumir que los SI solo aplican a grandes corporaciones',
            'Concluir que la tecnología vuelve irrelevantes a las personas',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son textuales. El apunte rechaza las dos últimas: invita a pensar SI en negocios chicos y NO afirma que la tecnología desplace a las personas.',
        },
        {
          id: 'ms-16-4',
          q: '¿Qué afirmaciones sobre el rol estratégico de los SI son correctas según el cierre?',
          options: [
            'Permiten entender al cliente',
            'Permiten optimizar la logística',
            'Permiten tomar decisiones basadas en datos',
            'Son útiles tanto para grandes empresas como para negocios tradicionales',
            'Por sí solos garantizan ventaja competitiva sin esfuerzo organizacional',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El apunte enfatiza que la ventaja la dan las organizaciones que aprenden a usar los SI, no la mera tenencia de tecnología.',
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

  // ---------- SECCIÓN 17 (Unidad 10) ----------
  {
    id: '17',
    unit: '10',
    title: 'Los SI en las empresas y el rol estratégico de la TI',
    criollo: 'Acá arrancás con lo grande: por qué una empresa necesita ordenar su información y cómo los sistemas de información (SI) la ayudan a tomar mejores decisiones. La idea es que un SI no es solo software, y que la TI es la herramienta que lo hace posible. También vas a ver quiénes son los que mueven los hilos en el área de tecnología.',
    blocks: [
      {
        type: 'h3',
        text: 'Por qué las empresas necesitan organizar su información',
        criollo: 'Si la info está hecha un quilombo, el negocio opera mal. Ordenarla es el primer paso.',
      },
      {
        type: 'p',
        text: 'Las empresas necesitan <strong>organizar su información</strong> para poder operar en forma eficiente y mejorar su desempeño. Identificar los procesos que lleva a cabo el negocio, diseñarlos y optimizarlos puede marcar una <strong>diferencia competitiva</strong>.',
      },
      {
        type: 'p',
        text: 'En este punto, los sistemas de información pueden ayudar <em>automatizando</em> actividades que se llevan a cabo en forma manual y permitiendo <em>compartir</em> esa información a los sectores de la empresa que lo requieran, en forma rápida, para agilizar la toma de decisiones. Introducir las tecnologías de la información en las organizaciones puede implicar un cambio en su funcionamiento y mejorar sus procesos.',
      },
      {
        type: 'h3',
        text: 'Qué es un sistema de información (SI)',
        criollo: 'Ojo: un SI es mucho más que el programita. Es todo un conjunto de piezas trabajando juntas.',
      },
      {
        type: 'p',
        text: 'Un sistema de información (SI) es <strong>mucho más que solo software</strong>; es un conjunto de componentes interrelacionados que <strong>recolectan, procesan, almacenan y distribuyen</strong> información para apoyar la <em>toma de decisiones</em>, la <em>coordinación</em> y el <em>control</em> en una organización.',
      },
      {
        type: 'h3',
        text: 'Tipos de sistemas según el nivel gerencial',
        criollo: 'Una empresa tiene varios tipos de SI, cada uno apoya decisiones de un nivel distinto. Acá van cortitos.',
      },
      {
        type: 'p',
        text: 'Una empresa puede tener diferentes tipos de sistemas que brinden apoyo a la toma de decisiones a <strong>diferentes niveles gerenciales</strong>. Nos enfocamos en estos:',
      },
      {
        type: 'ul',
        items: [
          '<strong>TPS</strong> (Sistemas de procesamiento de transacciones): sustituyen los procedimientos manuales por otros basados en computadoras.',
          '<strong>MIS</strong> (Sistemas de información gerencial): proporcionan información base para las decisiones administrativas.',
          '<strong>DSS</strong> (Sistemas de soporte a las decisiones): brindan apoyo a la toma de decisiones que no son de rutina, enfocándose en problemas únicos que cambian con rapidez.',
          '<strong>ESS</strong> (Sistemas de apoyo a ejecutivos): ayudan al nivel superior a tomar decisiones no rutinarias que requieren juicio de valor y perspectiva, porque no se cuenta con un procedimiento acordado de antemano para la solución.',
          '<strong>ERP</strong> (Sistemas de planificación de recursos empresariales): integran procesos de negocio, como manufactura, producción, finanzas, ventas y marketing, en un solo sistema de software.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'La comparación detallada de TPS, MIS, DSS, ESS y ERP (a qué nivel apunta cada uno y para qué sirve) ya está desarrollada en la Unidad 9. Acá solo los nombramos para ubicarlos.',
      },
      {
        type: 'h3',
        text: 'Procesos de negocio',
        criollo: 'La base de toda empresa son sus procesos. Un SI sirve de verdad solo si los soporta, los optimiza o los transforma.',
      },
      {
        type: 'p',
        text: 'La base de toda organización son sus <strong>procesos de negocio</strong>. Estos son conjuntos de <em>actividades lógicamente relacionadas</em> que definen cómo se realizan tareas específicas para producir un producto o servicio. Un sistema de información es eficaz <strong>solo si</strong> logra soportar, optimizar o transformar estos procesos.',
      },
      {
        type: 'p',
        text: 'Ejemplo de proceso de negocio: <em>"Gestión de un pedido de venta"</em>. Fijate cómo cruza varias áreas funcionales:',
      },
      {
        type: 'ol',
        items: [
          '<strong>Ventas</strong>: un cliente realiza un pedido. El vendedor ingresa el pedido en el sistema.',
          '<strong>Logística/Almacén</strong>: el sistema notifica al almacén. El personal del almacén prepara los productos.',
          '<strong>Contabilidad</strong>: el sistema genera la factura correspondiente y la envía al cliente.',
          '<strong>Envíos</strong>: el área de logística despacha el pedido.',
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Como ves, un solo pedido toca cuatro áreas. Por eso un SI integrado tipo ERP es clave: coordina todas esas actividades de manera eficiente, sin que cada sector trabaje en su propia isla.',
      },
      {
        type: 'h3',
        text: 'Infraestructura de TI',
        criollo: 'La TI es la herramienta que habilita todo. Y no es solo el hardware: es un ecosistema completo.',
      },
      {
        type: 'p',
        text: 'La tecnología de la información (TI) es la <strong>herramienta que habilita</strong> a los sistemas de información modernos. Las tecnologías de la información les sirven a los gerentes para diseñar y ofrecer nuevos productos, y para redirigir y rediseñar las organizaciones. Su infraestructura no es solo hardware y software, sino un <strong>ecosistema</strong> que incluye:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Hardware</strong>: servidores, computadoras, dispositivos de red.',
          '<strong>Software</strong>: sistemas operativos, sistemas de gestión de bases de datos (SGBD) y aplicaciones de negocio.',
          '<strong>Almacenamiento de datos</strong>: bases de datos y data warehouses.',
          '<strong>Redes y telecomunicaciones</strong>: Internet, intranets, redes locales (LAN).',
          '<strong>Recursos humanos</strong>: el personal técnico que administra y opera toda la infraestructura (DBA, administradores de sistemas, desarrolladores).',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Tendencias actuales que están redefiniendo la infraestructura, haciéndola más flexible y escalable: la computación en la nube (cloud computing), el crecimiento de las plataformas digitales y el uso de software como servicio (SaaS).',
      },
      {
        type: 'h3',
        text: 'Roles del área de tecnología',
        criollo: 'Detrás de los sistemas hay gente con roles bien definidos. Estos son los que aparecen en el apunte.',
      },
      {
        type: 'p',
        text: 'La infraestructura de TI está constituida por el hardware, el software, la tecnología de almacenamiento de datos, la tecnología de redes y telecomunicaciones, junto al <strong>personal que administra y opera</strong> esto. Además del <strong>CEO</strong> (Chief executive officer), máximo responsable de la organización, hay otros roles relevantes en el área de tecnología:',
      },
      {
        type: 'table',
        caption: 'Roles del área de tecnología',
        headers: [
          'Rol',
          'Qué hace',
        ],
        rows: [
          [
            'Programadores',
            'Especialistas técnicos que escriben las instrucciones de software para las computadoras.',
          ],
          [
            'Analistas de sistemas',
            'Traducen los problemas y requerimientos de negocios y sistemas de información.',
          ],
          [
            'Gerentes de SI',
            'Son líderes de equipo.',
          ],
          [
            'CIO (Director de información)',
            'Supervisa el uso de tecnología en la empresa.',
          ],
          [
            'CSO o CISO (Director de seguridad de la información)',
            'A cargo de la seguridad de los SI; responsable de implementar la política de seguridad de la información.',
          ],
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Resumen rápido: el CEO manda en toda la organización, el CIO se ocupa de la tecnología en general y el CSO/CISO es el que vela por la seguridad de la información. No los confundas en el parcial.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-17-1',
          q: 'Un sistema de información (SI) es básicamente solo el software que usa la empresa.',
          a: false,
          explain: 'Falso. El apunte aclara que un SI es mucho más que solo software: es un conjunto de componentes interrelacionados que recolectan, procesan, almacenan y distribuyen información.',
        },
        {
          id: 'tf-17-2',
          q: 'Identificar, diseñar y optimizar los procesos de un negocio puede marcar una diferencia competitiva.',
          a: true,
          explain: 'Verdadero. Es justamente lo que plantea el apunte: trabajar sobre los procesos puede dar ventaja competitiva.',
        },
        {
          id: 'tf-17-3',
          q: 'Un sistema de información es eficaz solo si logra soportar, optimizar o transformar los procesos de negocio.',
          a: true,
          explain: 'Verdadero. El apunte señala que la base de toda organización son sus procesos y que un SI es eficaz solo si los soporta, optimiza o transforma.',
        },
        {
          id: 'tf-17-4',
          q: 'Los data warehouses forman parte de la categoría de redes y telecomunicaciones dentro de la infraestructura de TI.',
          a: false,
          explain: 'Falso. Las bases de datos y los data warehouses pertenecen a almacenamiento de datos. Redes y telecomunicaciones incluye Internet, intranets y LAN.',
        },
        {
          id: 'tf-17-5',
          q: 'El CISO es el responsable de implementar la política de seguridad de la información.',
          a: true,
          explain: 'Verdadero. El CSO o CISO (Director de seguridad de la información) está a cargo de la seguridad de los SI y es responsable de implementar la política de seguridad.',
        },
      ],
      mc: [
        {
          id: 'mc-17-1',
          q: 'Según el apunte, ¿qué es un sistema de información (SI)?',
          options: [
            'Un programa de computadora que automatiza tareas administrativas.',
            'Un conjunto de componentes interrelacionados que recolectan, procesan, almacenan y distribuyen información para apoyar decisiones, coordinación y control.',
            'El hardware y las redes que conectan a la empresa con Internet.',
            'El conjunto de roles técnicos que administran la tecnología.',
          ],
          correctIndex: 1,
          explain: 'El apunte define al SI como un conjunto de componentes interrelacionados que recolectan, procesan, almacenan y distribuyen información para apoyar la toma de decisiones, la coordinación y el control.',
        },
        {
          id: 'mc-17-2',
          q: 'En el ejemplo "Gestión de un pedido de venta", ¿en qué orden cruzan las áreas funcionales?',
          options: [
            'Contabilidad → Ventas → Envíos → Logística/Almacén.',
            'Logística/Almacén → Ventas → Contabilidad → Envíos.',
            'Ventas → Logística/Almacén → Contabilidad → Envíos.',
            'Ventas → Contabilidad → Logística/Almacén → Envíos.',
          ],
          correctIndex: 2,
          explain: 'Según el apunte: Ventas (el vendedor ingresa el pedido), Logística/Almacén (preparan los productos), Contabilidad (genera la factura) y Envíos (despachan el pedido).',
        },
        {
          id: 'mc-17-3',
          q: '¿Cuál de estos sistemas integra procesos de negocio como manufactura, finanzas, ventas y marketing en un solo software?',
          options: [
            'TPS',
            'DSS',
            'ESS',
            'ERP',
          ],
          correctIndex: 3,
          explain: 'El ERP (Sistema de planificación de recursos empresariales) integra procesos de negocio en un solo sistema de software, según el apunte.',
        },
        {
          id: 'mc-17-4',
          q: '¿Qué rol del área de tecnología supervisa el uso de tecnología en toda la empresa?',
          options: [
            'CIO (Director de información).',
            'Programador.',
            'Analista de sistemas.',
            'CSO o CISO (Director de seguridad de la información).',
          ],
          correctIndex: 0,
          explain: 'El apunte indica que el CIO (Director de información) supervisa el uso de tecnología en la empresa. El CSO/CISO se ocupa específicamente de la seguridad.',
        },
      ],
      ms: [
        {
          id: 'ms-17-1',
          q: '¿Cuáles de los siguientes son componentes de la infraestructura de TI según el apunte?',
          options: [
            'Hardware (servidores, computadoras, dispositivos de red).',
            'Software (sistemas operativos, SGBD, aplicaciones de negocio).',
            'Almacenamiento de datos (bases de datos, data warehouses).',
            'La diferencia competitiva del negocio.',
            'Redes y telecomunicaciones (Internet, intranets, LAN).',
          ],
          correctIndexes: [
            0,
            1,
            2,
            4,
          ],
          explain: 'El apunte enumera hardware, software, almacenamiento de datos, redes y telecomunicaciones, y recursos humanos. La "diferencia competitiva" es un resultado de optimizar procesos, no un componente de la infraestructura.',
        },
        {
          id: 'ms-17-2',
          q: '¿Cuáles son tendencias actuales que están redefiniendo la infraestructura de TI?',
          options: [
            'Computación en la nube (cloud computing).',
            'Plataformas digitales.',
            'Software como servicio (SaaS).',
            'Procesamiento manual de transacciones.',
            'Entrevistas no estructuradas.',
          ],
          correctIndexes: [
            0,
            1,
            2,
          ],
          explain: 'El apunte menciona el cloud computing, el crecimiento de las plataformas digitales y el SaaS como tendencias que hacen la infraestructura más flexible y escalable. Las otras dos opciones no figuran como tendencias de infraestructura.',
        },
        {
          id: 'ms-17-3',
          q: '¿Qué acciones realiza un sistema de información, según la definición del apunte?',
          options: [
            'Recolecta información.',
            'Procesa información.',
            'Almacena información.',
            'Distribuye información.',
            'Elimina información obsoleta automáticamente.',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'La definición dice que un SI recolecta, procesa, almacena y distribuye información. "Eliminar información obsoleta automáticamente" no aparece en el apunte.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-17-1',
        front: 'Sistema de información (SI)',
        back: 'Es mucho más que solo software: un conjunto de componentes interrelacionados que recolectan, procesan, almacenan y distribuyen información para apoyar la toma de decisiones, la coordinación y el control en una organización.',
      },
      {
        id: 'fc-17-2',
        front: 'Proceso de negocio',
        back: 'Conjunto de actividades lógicamente relacionadas que definen cómo se realizan tareas específicas para producir un producto o servicio. Un SI es eficaz solo si logra soportar, optimizar o transformar estos procesos.',
      },
      {
        id: 'fc-17-3',
        front: 'ERP',
        back: 'Sistema de planificación de recursos empresariales. Integra procesos de negocio (manufactura, producción, finanzas, ventas, marketing) en un solo sistema de software, lo que permite coordinar actividades que cruzan varias áreas.',
      },
      {
        id: 'fc-17-4',
        front: 'Infraestructura de TI',
        back: 'Ecosistema que incluye hardware, software, almacenamiento de datos, redes y telecomunicaciones, y los recursos humanos técnicos que la administran y operan.',
      },
      {
        id: 'fc-17-5',
        front: 'Tendencias de infraestructura',
        back: 'Cloud computing (computación en la nube), plataformas digitales y SaaS (software como servicio) están redefiniendo la infraestructura, haciéndola más flexible y escalable.',
      },
      {
        id: 'fc-17-6',
        front: 'CIO',
        back: 'Director de información. Supervisa el uso de tecnología en la empresa.',
      },
      {
        id: 'fc-17-7',
        front: 'CSO / CISO',
        back: 'Director de seguridad de la información. Está a cargo de la seguridad de los sistemas de información y es responsable de implementar la política de seguridad de la información.',
      },
      {
        id: 'fc-17-8',
        front: 'Analista de sistemas',
        back: 'Rol técnico que traduce los problemas y requerimientos de negocios y sistemas de información.',
      },
    ],
  },

  // ---------- SECCIÓN 18 (Unidad 10) ----------
  {
    id: '18',
    unit: '10',
    title: 'El ciclo de vida del desarrollo de sistemas (CVDS)',
    criollo: 'Mirá, armar un sistema no es sentarse a tirar código y listo. Es un proceso ordenado, paso a paso, que se llama CVDS. La idea es que arranque con orden, no se te descontrole y termine cumpliendo lo que el negocio necesita. Y ojo: la fase de análisis es la posta, si la embarrás ahí el proyecto se va al tacho casi seguro.',
    blocks: [
      {
        type: 'p',
        text: 'El desarrollo de un sistema de información <strong>no es un acto único</strong>, sino un proceso estructurado, conocido como el <strong>ciclo de vida del desarrollo de sistemas (CVDS)</strong>. Este ciclo asegura que el proyecto se realice de manera <em>ordenada, controlada</em> y cumpla con los <strong>objetivos del negocio</strong>.',
      },
      {
        type: 'h3',
        text: 'Las fases principales del CVDS',
        criollo: 'Son siete etapas, en orden. Cada una responde a una pregunta distinta.',
      },
      {
        type: 'ol',
        items: [
          '<strong>Investigación preliminar y análisis</strong>: ¿cuál es el problema y qué se necesita?',
          '<strong>Determinación de requerimientos</strong>: recopilar y documentar las necesidades específicas.',
          '<strong>Diseño del sistema</strong>: ¿cómo se resolverá el problema? (creación de modelos).',
          '<strong>Desarrollo del sistema</strong>: construcción del software.',
          '<strong>Prueba del sistema</strong>: verificación de que el sistema funciona correctamente.',
          '<strong>Implantación</strong>: puesta en marcha del sistema.',
          '<strong>Mantenimiento y seguimiento</strong>: operación y mejora continua.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/10/cvds-rueda.png',
        alt: 'Rueda dividida en seis sectores que representan las actividades del desarrollo de un sistema: Investigación preliminar y análisis, Determinación de requerimientos, Diseño del sistema, Desarrollo del sistema, Prueba del sistema e Implantación.',
        caption: 'Actividades en el desarrollo de un sistema de información (CVDS). Fuente: elaboración propia (UP).',
      },
      {
        type: 'h3',
        text: 'Definir necesidades',
        criollo: 'Antes de salir corriendo a construir, primero hay que tener claro qué problema estás resolviendo.',
      },
      {
        type: 'p',
        text: 'Para encarar bien el desarrollo, hay que <strong>definir las necesidades</strong>. Esto implica entender a fondo qué se quiere resolver antes de poner manos a la obra.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Definición adecuada del problema.</strong>',
          '<strong>Entender cómo se genera</strong> el problema.',
          '<strong>Definición de la información y acciones</strong> que lo resuelven.',
          '<strong>Definición de la forma de obtener la información.</strong>',
        ],
      },
      {
        type: 'h3',
        text: 'La fase de análisis es la más crítica',
        criollo: 'Acá está la clave: si arrancás mal el análisis, no hay forma de que el proyecto termine bien.',
      },
      {
        type: 'p',
        text: 'La fase de análisis (investigación preliminar y comprensión del problema) es la <strong>más crítica</strong> de todo el ciclo. Un <em>error en el análisis</em>, casi con seguridad, conducirá al <strong>fracaso del proyecto</strong>.',
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Si la cagás en el análisis, todo lo que venga después (diseño, desarrollo, pruebas) va a estar construido sobre una base equivocada. Por eso esta fase es la que más atención merece.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Pensalo así: el CVDS es como una receta. No te salteás pasos ni los hacés en cualquier orden. Y el \'leer bien la receta\' (el análisis) es lo que te salva de hornear cualquier cosa.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-18-1',
          q: 'El desarrollo de un sistema de información es un acto único que se resuelve de una sola vez.',
          a: false,
          explain: 'Falso. El apunte dice explícitamente que NO es un acto único, sino un proceso estructurado conocido como CVDS.',
        },
        {
          id: 'tf-18-2',
          q: 'El CVDS asegura que el proyecto se realice de manera ordenada, controlada y cumpla con los objetivos del negocio.',
          a: true,
          explain: 'Verdadero. Esa es justamente la función del ciclo de vida del desarrollo de sistemas según el apunte.',
        },
        {
          id: 'tf-18-3',
          q: 'La fase de análisis es la más crítica, y un error en ella casi con seguridad conduce al fracaso del proyecto.',
          a: true,
          explain: 'Verdadero. El apunte remarca que el análisis es la fase más crítica y que un error ahí conduce, casi seguro, al fracaso.',
        },
        {
          id: 'tf-18-4',
          q: 'El mantenimiento y seguimiento es la primera fase del CVDS.',
          a: false,
          explain: 'Falso. El mantenimiento y seguimiento es la última fase (operación y mejora continua); la primera es la investigación preliminar y análisis.',
        },
        {
          id: 'tf-18-5',
          q: 'Definir las necesidades incluye la definición adecuada del problema y entender cómo se genera.',
          a: true,
          explain: 'Verdadero. El apunte enumera la definición adecuada del problema y entender cómo se genera entre los puntos de definir necesidades.',
        },
      ],
      mc: [
        {
          id: 'mc-18-1',
          q: '¿Qué pregunta responde la fase de Investigación preliminar y análisis?',
          options: [
            '¿Cómo se construirá el software?',
            '¿Cuál es el problema y qué se necesita?',
            '¿Cómo se pondrá en marcha el sistema?',
            '¿Qué errores hay que corregir?',
          ],
          correctIndex: 1,
          explain: 'Según el apunte, la investigación preliminar y análisis responde a \'¿cuál es el problema y qué se necesita?\'.',
        },
        {
          id: 'mc-18-2',
          q: 'La fase que se ocupa de \'¿cómo se resolverá el problema? (creación de modelos)\' es:',
          options: [
            'Determinación de requerimientos',
            'Diseño del sistema',
            'Desarrollo del sistema',
            'Prueba del sistema',
          ],
          correctIndex: 1,
          explain: 'El apunte asocia el Diseño del sistema con la pregunta \'¿cómo se resolverá el problema?\' y la creación de modelos.',
        },
        {
          id: 'mc-18-3',
          q: '¿Cuál es la última fase del CVDS según el apunte?',
          options: [
            'Implantación',
            'Prueba del sistema',
            'Mantenimiento y seguimiento',
            'Desarrollo del sistema',
          ],
          correctIndex: 2,
          explain: 'La séptima y última fase es Mantenimiento y seguimiento: operación y mejora continua.',
        },
        {
          id: 'mc-18-4',
          q: 'La fase de Determinación de requerimientos consiste en:',
          options: [
            'Construir el software',
            'Recopilar y documentar las necesidades específicas',
            'Verificar que el sistema funciona',
            'Poner en marcha el sistema',
          ],
          correctIndex: 1,
          explain: 'El apunte define la Determinación de requerimientos como recopilar y documentar las necesidades específicas.',
        },
      ],
      ms: [
        {
          id: 'ms-18-1',
          q: '¿Cuáles de las siguientes son fases del CVDS según el apunte?',
          options: [
            'Investigación preliminar y análisis',
            'Determinación de requerimientos',
            'Normalización de datos',
            'Prueba del sistema',
            'Negociación contractual',
          ],
          correctIndexes: [
            0,
            1,
            3,
          ],
          explain: 'Investigación preliminar y análisis, Determinación de requerimientos y Prueba del sistema son fases del CVDS. La normalización y la negociación contractual no figuran como fases del ciclo en esta sección.',
        },
        {
          id: 'ms-18-2',
          q: '¿Qué implica \'definir las necesidades\' según el apunte?',
          options: [
            'Definición adecuada del problema',
            'Entender cómo se genera el problema',
            'Definición de la información y acciones que lo resuelven',
            'Definición de la forma de obtener la información',
            'Definición del presupuesto de hardware',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Los cuatro primeros puntos son los que el apunte lista para definir necesidades. El presupuesto de hardware no aparece en esa enumeración.',
        },
        {
          id: 'ms-18-3',
          q: '¿Qué afirmaciones sobre el CVDS son correctas según el apunte?',
          options: [
            'Es un proceso estructurado, no un acto único',
            'Asegura que el proyecto se realice de manera ordenada y controlada',
            'Busca cumplir con los objetivos del negocio',
            'Se salta la fase de análisis para ir más rápido',
            'La fase de análisis es la menos importante',
          ],
          correctIndexes: [
            0,
            1,
            2,
          ],
          explain: 'El CVDS es un proceso estructurado, ordenado y controlado, orientado a los objetivos del negocio. No se saltea el análisis (al contrario, es la fase más crítica), por lo que las dos últimas son falsas.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-18-1',
        front: 'CVDS',
        back: 'Ciclo de vida del desarrollo de sistemas: el proceso estructurado para desarrollar un sistema de información de manera ordenada, controlada y cumpliendo los objetivos del negocio.',
      },
      {
        id: 'fc-18-2',
        front: '¿El desarrollo es un acto único?',
        back: 'No. El desarrollo de un sistema de información no es un acto único, sino un proceso estructurado conocido como CVDS.',
      },
      {
        id: 'fc-18-3',
        front: 'Investigación preliminar y análisis',
        back: 'Primera fase del CVDS. Responde a la pregunta: ¿cuál es el problema y qué se necesita?',
      },
      {
        id: 'fc-18-4',
        front: 'Determinación de requerimientos',
        back: 'Fase del CVDS en la que se recopilan y documentan las necesidades específicas.',
      },
      {
        id: 'fc-18-5',
        front: 'Diseño del sistema',
        back: 'Fase del CVDS que responde a \'¿cómo se resolverá el problema?\' mediante la creación de modelos.',
      },
      {
        id: 'fc-18-6',
        front: 'Mantenimiento y seguimiento',
        back: 'Última fase del CVDS: operación y mejora continua del sistema.',
      },
      {
        id: 'fc-18-7',
        front: 'Fase más crítica',
        back: 'La fase de análisis. Un error en el análisis casi con seguridad conduce al fracaso del proyecto.',
      },
      {
        id: 'fc-18-8',
        front: 'Definir necesidades',
        back: 'Implica definir adecuadamente el problema, entender cómo se genera, definir la información y acciones que lo resuelven, y la forma de obtener esa información.',
      },
    ],
  },

  // ---------- SECCIÓN 19 (Unidad 10) ----------
  {
    id: '19',
    unit: '10',
    title: 'Fase de análisis: técnicas de relevamiento',
    criollo: 'Acá arranca lo bueno del análisis: antes de diseñar nada tenés que entender qué necesita la organización. El tema es que vos como analista no conocés cómo laburan ellos, y ellos no saben explicarte qué información necesitás en términos técnicos. Las técnicas de relevamiento son el puente para salvar esa brecha: entrevistas, cuestionarios, observación y revisión de registros.',
    blocks: [
      {
        type: 'h3',
        text: 'Técnicas de relevamiento: ¿por qué se utilizan?',
        criollo: 'Las usás porque hay un bache de comunicación de los dos lados.',
      },
      {
        type: 'p',
        text: 'Para entender las necesidades, el analista de sistemas debe recopilar información. Esto es vital porque <strong>los analistas no conocen los detalles de trabajo de la organización</strong>, en particular si son externos a esta; y, por el otro lado, <strong>los usuarios/clientes no saben qué información es necesaria o relevante</strong> para los analistas.',
      },
      {
        type: 'p',
        text: 'Son un medio para <em>mejorar la comunicación</em> y facilitar la colaboración entre usuarios/clientes y los analistas de sistemas, ya que existen diversas barreras que impiden lograr una comunicación eficaz entre ambos: <strong>diferentes vocabularios</strong>, <strong>choque de personalidades y caracteres</strong>.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Pensalo como un puente: de un lado el que sabe del negocio pero no de sistemas, del otro el que sabe de sistemas pero no del negocio. Las técnicas son para que se entiendan.',
      },
      {
        type: 'h3',
        text: 'Entrevistas',
        criollo: 'Hay dos sabores: estructurada y no estructurada. Cada una sirve para un momento distinto.',
      },
      {
        type: 'p',
        text: '<strong>No estructurada:</strong> es una conversación abierta para explorar problemas y oportunidades. Es ideal para las primeras etapas, cuando todavía estás entendiendo el panorama general.',
      },
      {
        type: 'p',
        text: '<strong>Estructurada:</strong> se utiliza una lista de preguntas predefinidas. Es útil para obtener <em>datos específicos y comparables</em> entre varios entrevistados.',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Ejemplo práctico: arrancás con una entrevista no estructurada al gerente de ventas, para entender su visión general, y después seguís con entrevistas estructuradas a los vendedores, para detallar los pasos que siguen al cargar un pedido.',
      },
      {
        type: 'h3',
        text: 'Problemas en las entrevistas',
        criollo: 'No todo es color de rosa: la entrevista tiene varias formas de salir mal.',
      },
      {
        type: 'ul',
        items: [
          'Entrevistar a las personas equivocadas.',
          'Entrevistar a la persona correcta, pero en el momento erróneo.',
          'Hacer las preguntas equivocadas.',
          'Obtener las respuestas equivocadas.',
          'Crear fricciones con el entrevistado.',
          'El tiempo que llevan.',
          'No sirven para obtener gran cantidad de información.',
        ],
      },
      {
        type: 'h3',
        text: 'Pautas para las entrevistas',
        criollo: 'Para que la entrevista no sea un desastre, armá un plan global antes.',
      },
      {
        type: 'ol',
        items: [
          'Utilizar un organigrama.',
          'Definir a quiénes entrevistar y en qué orden.',
          'Obtener la aprobación para realizar las entrevistas.',
          'Programarlas con antelación.',
          'Registrar adecuadamente la información que se releva.',
          'Enviar un detalle de lo relevado al entrevistado.',
          'Coordinar la próxima cita, si es necesaria.',
        ],
      },
      {
        type: 'h3',
        text: 'Cuestionarios',
        criollo: 'Cuando son muchos usuarios o están desparramados por todos lados, la entrevista no escala. Ahí entra el cuestionario.',
      },
      {
        type: 'p',
        text: '¿Cuándo conviene usar cuestionarios? En estos casos:',
      },
      {
        type: 'ul',
        items: [
          'Cantidad de usuarios grande.',
          'Usuarios distribuidos geográficamente.',
          'Necesidad de cuantificar respuestas.',
          'Anonimato de las respuestas.',
        ],
      },
      {
        type: 'p',
        text: 'En cuanto a los <strong>medios</strong>, podés usar formularios en papel o formularios digitales.',
      },
      {
        type: 'h3',
        text: 'Cuestionarios: abiertos vs. cerrados',
      },
      {
        type: 'p',
        text: 'Los <strong>abiertos</strong> piden respuestas libres (cualitativas), con consignas del tipo: <em>describa</em>, <em>explique</em>, <em>detalle</em>. Los <strong>cerrados</strong> ofrecen opciones limitadas y son fáciles de cuantificar: <em>múltiple choice</em>, <em>sí/no</em>, <em>semáforo</em>.',
      },
      {
        type: 'table',
        caption: 'Tipos de preguntas en un cuestionario',
        headers: [
          'Abiertos',
          'Cerrados',
        ],
        rows: [
          [
            'Describa',
            'Múltiple choice',
          ],
          [
            'Explique',
            'Sí/No',
          ],
          [
            'Detalle',
            'Semáforo',
          ],
        ],
      },
      {
        type: 'h3',
        text: 'Cuestionarios: ventajas',
      },
      {
        type: 'ul',
        items: [
          'Permiten relevar un alto volumen de respuestas a bajo costo y en poco tiempo.',
          'Eliminan la influencia del analista sobre el entrevistado.',
          'El anonimato favorece respuestas más sinceras.',
          'Son de uso rápido y eficiente.',
        ],
      },
      {
        type: 'h3',
        text: 'Cuestionarios: desventajas',
      },
      {
        type: 'ul',
        items: [
          'Son impersonales.',
          'A casi nadie le gusta contestarlos.',
          'Tienen limitaciones en las preguntas (lo que no preguntaste, no lo averiguás).',
          'Pueden surgir problemas de interpretación.',
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Ojo con la desventaja clave del cuestionario: una vez que lo mandaste, no podés repreguntar ni aclarar. Si la pregunta se entiende mal, la respuesta te va a salir mal.',
      },
      {
        type: 'h3',
        text: 'Observaciones',
        criollo: 'A veces lo que la gente dice que hace no es lo que realmente hace. Por eso mirás cómo trabajan de verdad.',
      },
      {
        type: 'p',
        text: '<strong>Directas:</strong> el analista adquiere la posición de observador de forma <em>planificada</em>, durante un cierto período de tiempo.',
      },
      {
        type: 'p',
        text: '<strong>Indirectas:</strong> el analista contempla procesos y situaciones que transcurren en el momento, <em>sin haber planificado</em> dicha observación (son espontáneas).',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Efecto Hawthorne: una persona observada actúa de forma diferente, especialmente en las observaciones directas. La gente cambia su comportamiento cuando se sabe observada, y el analista tiene que tenerlo en cuenta.',
      },
      {
        type: 'h3',
        text: 'Pautas para las observaciones',
      },
      {
        type: 'ul',
        items: [
          'Que no interfiera en el proceso o situación observada (pasar desapercibido), salvo que el objetivo sea experimentar por uno mismo las actividades del usuario.',
          'Que tenga en cuenta que una persona observada actúa de forma diferente (especialmente en observaciones directas).',
          'Que elija el momento adecuado para la observación.',
        ],
      },
      {
        type: 'h3',
        text: 'Revisión de registros',
        criollo: 'Antes de molestar a nadie, fijate qué papeles, manuales y sistemas ya existen. Mucha info ya está escrita.',
      },
      {
        type: 'p',
        text: 'Consiste en analizar la documentación existente de la organización. Se puede dividir en varias categorías.',
      },
      {
        type: 'table',
        caption: 'Categorías de la revisión de registros',
        headers: [
          'Categoría',
          'Qué incluye',
        ],
        rows: [
          [
            'Revisión de manuales',
            'Manuales administrativos o de procedimiento; manuales de administración, operación e instalación de sistemas; manuales de calidad; estándares y políticas de la empresa (en especial de TI).',
          ],
          [
            'Revisión de documentos',
            'Expedientes, legajos, minutas, circulares, informes, etc.',
          ],
          [
            'Revisión de comprobantes',
            'Facturas, remitos, recibos, órdenes de compra, solicitudes, formularios.',
          ],
          [
            'Revisión de reportes y gráficos',
            'Listados y gráficos de sistemas o de confección manual.',
          ],
          [
            'Revisión de sistemas actuales',
            'Observación del sistema actual, para evaluar aspectos funcionales y no funcionales.',
          ],
          [
            'Revisión de otras fuentes',
            'Sitio web de la empresa, sitio web de la corporación, información en Internet, folletería de la empresa, artículos periodísticos, papers, libros, etc.',
          ],
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'En resumen: entrevistás para charlar cara a cara, mandás cuestionarios cuando son un montón, observás para ver qué pasa de verdad y revisás registros para no inventar la rueda. Las cuatro se complementan.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-19-1',
          q: 'Las técnicas de relevamiento se usan, en parte, porque los analistas no siempre conocen los detalles de trabajo de la organización.',
          a: true,
          explain: 'El apunte lo dice explícitamente: los analistas no conocen los detalles de trabajo, sobre todo si son externos, y los usuarios no saben qué información es relevante.',
        },
        {
          id: 'tf-19-2',
          q: 'La entrevista estructurada es la ideal para las primeras etapas, cuando todavía estás explorando el panorama general.',
          a: false,
          explain: 'Al revés: la ideal para las primeras etapas es la no estructurada (conversación abierta). La estructurada sirve para datos específicos y comparables.',
        },
        {
          id: 'tf-19-3',
          q: 'El anonimato de los cuestionarios puede generar respuestas más sinceras.',
          a: true,
          explain: 'Es una de las ventajas que menciona el apunte: el anonimato favorece respuestas más sinceras.',
        },
        {
          id: 'tf-19-4',
          q: 'Según el efecto Hawthorne, una persona observada actúa exactamente igual que cuando no se siente observada.',
          a: false,
          explain: 'El efecto Hawthorne dice lo contrario: la persona observada actúa de forma diferente, especialmente en observaciones directas.',
        },
        {
          id: 'tf-19-5',
          q: 'La revisión de registros incluye fuentes externas como el sitio web de la empresa, papers y folletería.',
          a: true,
          explain: 'Dentro de la revisión de otras fuentes el apunte lista el sitio web, información en Internet, folletería, artículos periodísticos, papers y libros.',
        },
      ],
      mc: [
        {
          id: 'mc-19-1',
          q: '¿Cuál es la barrera de comunicación que el apunte menciona entre analistas y usuarios?',
          options: [
            'Falta de presupuesto',
            'Diferentes vocabularios y choque de personalidades',
            'Distancia geográfica únicamente',
            'Falta de hardware adecuado',
          ],
          correctIndex: 1,
          explain: 'El apunte cita como barreras los diferentes vocabularios y el choque de personalidades y caracteres.',
        },
        {
          id: 'mc-19-2',
          q: '¿Cuándo conviene usar cuestionarios en lugar de entrevistas?',
          options: [
            'Cuando hay pocos usuarios concentrados en un solo lugar',
            'Cuando se necesita una conversación abierta y exploratoria',
            'Cuando hay muchos usuarios, dispersos geográficamente, y se busca cuantificar o dar anonimato',
            'Cuando el analista quiere experimentar por sí mismo las tareas del usuario',
          ],
          correctIndex: 2,
          explain: 'El cuestionario se usa con cantidad grande de usuarios, distribución geográfica, necesidad de cuantificar respuestas y anonimato.',
        },
        {
          id: 'mc-19-3',
          q: 'En el ejemplo práctico del apunte, ¿en qué orden se hacen las entrevistas?',
          options: [
            'Estructurada al gerente y luego no estructurada a los vendedores',
            'No estructurada al gerente de ventas y luego estructurada a los vendedores',
            'Solo cuestionarios a todos por igual',
            'Observación directa primero y entrevistas después',
          ],
          correctIndex: 1,
          explain: 'El ejemplo arranca con una no estructurada al gerente (visión general) y sigue con estructuradas a los vendedores (detalle de los pasos al cargar un pedido).',
        },
        {
          id: 'mc-19-4',
          q: '¿Cuál de estos es un tipo de pregunta CERRADA según el apunte?',
          options: [
            'Describa',
            'Explique',
            'Detalle',
            'Semáforo',
          ],
          correctIndex: 3,
          explain: 'Describa, explique y detalle son consignas de preguntas abiertas. Semáforo (junto con múltiple choice y sí/no) es una pregunta cerrada.',
        },
      ],
      ms: [
        {
          id: 'ms-19-1',
          q: '¿Cuáles de los siguientes son problemas de las entrevistas según el apunte?',
          options: [
            'Entrevistar a las personas equivocadas',
            'El tiempo que llevan',
            'Permiten el anonimato',
            'Crear fricciones con el entrevistado',
            'No sirven para obtener gran cantidad de información',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'El anonimato es una ventaja de los cuestionarios, no un problema de las entrevistas. Las otras cuatro están en la lista de problemas.',
        },
        {
          id: 'ms-19-2',
          q: '¿Cuáles son ventajas de los cuestionarios?',
          options: [
            'Alto volumen a bajo costo y poco tiempo',
            'Eliminan la influencia del analista sobre el entrevistado',
            'Son muy personales y cálidos',
            'El anonimato favorece respuestas sinceras',
            'Uso rápido y eficiente',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Que sean impersonales es una desventaja, no una ventaja. Las otras cuatro son ventajas que lista el apunte.',
        },
        {
          id: 'ms-19-3',
          q: '¿Cuáles de estas son pautas para realizar entrevistas?',
          options: [
            'Utilizar un organigrama',
            'Obtener la aprobación para realizar las entrevistas',
            'Mandar el cuestionario por correo',
            'Programarlas con antelación',
            'Enviar un detalle de lo relevado al entrevistado',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Mandar un cuestionario es otra técnica distinta. Las demás (organigrama, aprobación, programar con antelación y enviar detalle) son pautas del plan global de entrevistas.',
        },
        {
          id: 'ms-19-4',
          q: '¿Cuáles de estas categorías pertenecen a la revisión de registros?',
          options: [
            'Revisión de manuales',
            'Revisión de comprobantes',
            'Efecto Hawthorne',
            'Revisión de reportes y gráficos',
            'Revisión de otras fuentes',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'El efecto Hawthorne pertenece a las observaciones, no a la revisión de registros. Las otras cuatro son categorías de revisión de registros.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-19-1',
        front: 'Para qué sirven las técnicas de relevamiento',
        back: 'Son un medio para mejorar la comunicación entre usuarios y analistas, salvando barreras como los diferentes vocabularios y el choque de personalidades, porque ninguno conoce del todo el mundo del otro.',
      },
      {
        id: 'fc-19-2',
        front: 'Entrevista no estructurada',
        back: 'Es una conversación abierta para explorar problemas y oportunidades. Es ideal para las primeras etapas del relevamiento.',
      },
      {
        id: 'fc-19-3',
        front: 'Entrevista estructurada',
        back: 'Usa una lista de preguntas predefinidas. Sirve para obtener datos específicos y comparables entre varios entrevistados.',
      },
      {
        id: 'fc-19-4',
        front: 'Cuándo usar cuestionarios',
        back: 'Cuando hay muchos usuarios, están dispersos geográficamente, se necesita cuantificar las respuestas o se busca el anonimato.',
      },
      {
        id: 'fc-19-5',
        front: 'Preguntas abiertas vs. cerradas',
        back: 'Las abiertas piden respuestas libres (describa, explique, detalle). Las cerradas ofrecen opciones limitadas y fáciles de cuantificar (múltiple choice, sí/no, semáforo).',
      },
      {
        id: 'fc-19-6',
        front: 'Observación directa e indirecta',
        back: 'La directa la hace el analista de forma planificada durante un período. La indirecta es espontánea: observa procesos que transcurren en el momento sin haberlo planificado.',
      },
      {
        id: 'fc-19-7',
        front: 'Efecto Hawthorne',
        back: 'Las personas cambian su comportamiento cuando saben que están siendo observadas, sobre todo en las observaciones directas. El analista debe tenerlo en cuenta.',
      },
      {
        id: 'fc-19-8',
        front: 'Revisión de registros',
        back: 'Es el análisis de documentación existente: manuales, documentos, comprobantes, reportes y gráficos, sistemas actuales y otras fuentes como sitios web, Internet o papers.',
      },
    ],
  },

  // ---------- SECCIÓN 20 (Unidad 10) ----------
  {
    id: '20',
    unit: '10',
    title: 'Modelos lógico y físico, y fase de diseño',
    criollo: 'Acá la idea es que primero modelás QUÉ va a hacer el sistema (modelo lógico, el plano arquitectónico) y después CÓMO se construye (modelo físico, los planos de ingeniería). Después entramos a la fase de diseño, que aterriza todo eso en especificaciones concretas, con foco en la base de datos y la normalización. Tranqui que el ejemplo de los pedidos te lo desgloso paso a paso.',
    blocks: [
      {
        type: 'h3',
        text: 'Creación de modelos: lógico y físico',
        criollo: 'Una vez que relevaste la info, tenés que modelar la solución. Y ojo, hay que distinguir bien entre lo lógico y lo físico.',
      },
      {
        type: 'p',
        text: 'Una vez recopilada la información, el analista debe modelar la solución. Es fundamental distinguir entre el <strong>modelo lógico</strong> y el <strong>modelo físico</strong>.',
      },
      {
        type: 'h3',
        text: 'Modelo lógico',
        criollo: 'El QUÉ, sin meterte todavía en tecnología.',
      },
      {
        type: 'p',
        text: 'Su objetivo es <strong>representar la solución conceptualmente</strong>, describiendo <em>qué</em> hará el sistema, sin importar cómo se implementará tecnológicamente. Es un <strong>lenguaje común</strong> entre el usuario y el analista.',
      },
      {
        type: 'p',
        text: 'El modelo lógico define:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Flujos de información</strong>: de dónde viene y a dónde va.',
          '<strong>Procesos</strong>: qué transformaciones sufre la información.',
          '<strong>Almacenes de datos</strong>: qué información se debe guardar.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Analogía: el modelo lógico es el plano arquitectónico de una casa. Muestra las habitaciones, sus tamaños y cómo se conectan, pero no especifica el tipo de ladrillos o cables a usar.',
      },
      {
        type: 'h3',
        text: 'Modelo físico',
        criollo: 'El CÓMO, ya bajando a la tecnología real y sus limitaciones.',
      },
      {
        type: 'p',
        text: 'Su objetivo es <strong>traducir el modelo lógico en especificaciones técnicas detalladas</strong>. Describe <em>cómo</em> se construirá el sistema, considerando las limitaciones de hardware, software y tecnología.',
      },
      {
        type: 'p',
        text: 'El modelo físico define:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Diseño de la interfaz</strong>: cómo serán las pantallas y los reportes.',
          '<strong>Diseño de la base de datos</strong>: las tablas, campos, tipos de datos y relaciones.',
          '<strong>Especificaciones de procesos</strong>: la lógica de programación, los algoritmos.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Analogía: el modelo físico son los planos de construcción e ingeniería. Detallan el tipo de cimientos, el calibre del cableado eléctrico, el material de las tuberías, etc.',
      },
      {
        type: 'h3',
        text: 'Fase de diseño: construyendo la solución',
        criollo: 'Acá los modelos se refinan hasta tener especificaciones completas. Una pata clave es el diseño de la base de datos.',
      },
      {
        type: 'p',
        text: 'En esta fase, los modelos se refinan para crear especificaciones completas. Su objetivo es la <strong>construcción del sistema de información</strong>, de acuerdo con el diseño lógico y el diseño físico definidos en las etapas anteriores. Un área clave es el diseño de la base de datos.',
      },
      {
        type: 'h3',
        text: 'Objetivo del diseño',
        criollo: 'Estos son los objetivos que el diseño tiene que cumplir sí o sí.',
      },
      {
        type: 'p',
        text: '<strong>Especificar los elementos del diseño lógico</strong>: especificaciones detalladas de diseño que describen las características de un sistema: entrada, salida, archivos, BBDD y procedimientos.',
      },
      {
        type: 'p',
        text: '<strong>Actividades de soporte para la empresa</strong>:',
      },
      {
        type: 'ul',
        items: [
          'Los resultados del empleo del sistema serán útiles para mejorar el desempeño de la empresa.',
          'El diseño debe ajustarse a la forma en la que la compañía conduce las actividades.',
          'La tecnología es secundaria respecto al resultado de uso.',
        ],
      },
      {
        type: 'p',
        text: '<strong>Satisfacer los requerimientos de los usuarios</strong>:',
      },
      {
        type: 'ul',
        items: [
          'Efectuar en forma correcta los procedimientos apropiados.',
          'Presentar en forma apropiada la información.',
          'Proporcionar resultados exactos.',
          'Utilizar los métodos de interacción apropiados.',
          'Proporcionar confiabilidad total.',
        ],
      },
      {
        type: 'p',
        text: '<strong>Fácil de usar</strong>: ingeniería de usabilidad. El diseño ergonómico debe ser físicamente cómodo y contribuir a la efectividad y eficiencia del usuario.',
      },
      {
        type: 'p',
        text: '<strong>Proporcionar las especificaciones del software</strong>: especificar los componentes y funciones, con suficiente detalle, para construir el software de aplicación.',
      },
      {
        type: 'p',
        text: '<strong>Ajustarse a los estándares de diseño</strong>: el diseño y su especificación deben estar en concordancia con las reglas y prácticas establecidas por la organización.',
      },
      {
        type: 'h3',
        text: 'Análisis de hechos',
        criollo: 'Cuatro aspectos que mirás del sistema actual, cada uno con su estrategia de diseño.',
      },
      {
        type: 'table',
        caption: 'Aspectos del análisis de hechos y su estrategia de diseño',
        headers: [
          'Aspecto',
          'Descripción',
          'Estrategia de diseño',
        ],
        rows: [
          [
            'Capacidad',
            'Capacidad del sistema existente.',
            'Aumentar la capacidad / Reducir las expectativas / Volver a definir la naturaleza de la tarea.',
          ],
          [
            'Control',
            'Mecanismos para aumentar la probabilidad de que las actividades se lleven a cabo en forma apropiada.',
            'Diseño para evitar fallas de control / Detección y notificación de fallas / Detección y corrección de fallas.',
          ],
          [
            'Accesibilidad de la información',
            'Disponibilidad de la información en un formato útil para alcanzar un objetivo.',
            'Eliminar la necesidad de la información / Facilitar el acceso / Eliminar la necesidad de procesamiento / Cambiar el método de presentación.',
          ],
          [
            'Complejidad',
            'Número grande de tareas o interrelaciones que traen como consecuencia un rendimiento inaceptable. Conduce a problemas en los tres anteriores.',
            'Simplificar / Dividir / Cambiar la secuencia de actividades.',
          ],
        ],
      },
      {
        type: 'h3',
        text: 'Elementos del diseño',
        criollo: 'Las piezas que el diseño tiene que dejar definidas: por dónde fluyen los datos, dónde se guardan, qué procesos y controles hay y quién hace qué.',
      },
      {
        type: 'p',
        text: 'El diseño debe especificar los siguientes elementos:',
      },
      {
        type: 'ul',
        items: [
          'Flujo de datos.',
          'Almacenes de datos.',
          'Procesos.',
          'Procedimientos.',
          'Controles.',
          'Funciones del personal.',
        ],
      },
      {
        type: 'h3',
        text: 'Almacenamiento',
        criollo: 'Cómo se piensa el guardado de datos: clave, entidad, archivo y base de datos. Y los tipos de archivo.',
      },
      {
        type: 'p',
        text: 'Los conceptos base del almacenamiento son: <strong>clave</strong>, <strong>entidad</strong>, <strong>archivo</strong> y <strong>base de datos</strong>.',
      },
      {
        type: 'p',
        text: 'Tipos de archivos:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Maestros</strong>.',
          '<strong>Transacciones</strong>.',
          '<strong>Reportes</strong>.',
          '<strong>Resguardo</strong>.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Sobre el diseño de interacciones con la BBDD, el apunte indica: evaluar la conveniencia de la solicitud del analista, describir los métodos para interactuar con la BBDD y asegurar la integridad de los datos.',
      },
      {
        type: 'h3',
        text: 'Normalización',
        criollo: 'Es el proceso formal para diseñar bases relacionales sin redundancia y con buena integridad. Te lo muestro con el ejemplo de los pedidos.',
      },
      {
        type: 'p',
        text: 'La <strong>normalización</strong> es un proceso formal para diseñar bases de datos relacionales, con el objetivo de <strong>reducir la redundancia de datos y mejorar su integridad</strong>.',
      },
      {
        type: 'p',
        text: 'Razones para normalizar:',
      },
      {
        type: 'ul',
        items: [
          'Estructurar los datos, de forma que se puedan representar las relaciones.',
          'Permitir la recuperación sencilla de los datos.',
          'Simplificar el mantenimiento de los datos.',
          'Reducir la necesidad de reestructuración.',
        ],
      },
      {
        type: 'h3',
        text: 'Ejemplo práctico de normalización',
        criollo: 'Partimos de una tabla de pedidos que mezcla todo. La vamos separando forma normal por forma normal.',
      },
      {
        type: 'p',
        text: 'Imaginemos una tabla simple para registrar pedidos:',
      },
      {
        type: 'table',
        caption: 'Tabla de pedidos sin normalizar',
        headers: [
          'PedidoID',
          'Fecha',
          'ClienteID',
          'Nombre cliente',
          'ProductoID',
          'Nombre producto',
          'Cantidad',
          'Precio unitario',
        ],
        rows: [
          [
            '101',
            '01/10/25',
            'C01',
            'Juan Pérez',
            'P55',
            'Teclado',
            '2',
            '1500',
          ],
          [
            '101',
            '01/10/25',
            'C01',
            'Juan Pérez',
            'P62',
            'Mouse',
            '2',
            '800',
          ],
          [
            '102',
            '02/10/25',
            'C05',
            'Ana López',
            'P55',
            'Teclado',
            '1',
            '1500',
          ],
        ],
      },
      {
        type: 'p',
        text: 'Esta tabla tiene problemas: si Juan Pérez cambia su nombre, hay que actualizarlo en <strong>múltiples filas</strong>. Si borramos el pedido 102, <strong>perdemos la información</strong> de que el producto P55 es un \'Teclado\'.',
      },
      {
        type: 'p',
        text: '<strong>Primera forma normal (1FN)</strong>: la tabla ya es <em>bidimensional</em> y no tiene grupos repetitivos, por lo que cumple 1FN.',
      },
      {
        type: 'p',
        text: '<strong>Segunda forma normal (2FN)</strong>: elimina <strong>dependencias parciales</strong>. Los datos que no dependen de la clave completa se mueven a otra tabla. La clave aquí es (PedidoID, ProductoID).',
      },
      {
        type: 'ul',
        items: [
          'Problema: Fecha, ClienteID y NombreCliente dependen solo de PedidoID, no de la clave completa.',
          'Solución: dividimos las tablas. Tabla pedidos: PedidoID (PK), Fecha, ClienteID, NombreCliente. Tabla detalle pedido: PedidoID (FK), ProductoID (FK), Cantidad.',
        ],
      },
      {
        type: 'p',
        text: '<strong>Tercera forma normal (3FN)</strong>: elimina <strong>dependencias transitivas</strong>.',
      },
      {
        type: 'ul',
        items: [
          'Problema: en la nueva tabla Pedidos, NombreCliente depende de ClienteID, que a su vez depende de PedidoID. Esto es una dependencia transitiva.',
          'Solución: volvemos a dividir. Tabla clientes: ClienteID (PK), NombreCliente. Tabla productos: ProductoID (PK), NombreProducto, PrecioUnitario. Tabla pedidos: PedidoID (PK), Fecha, ClienteID (FK). Tabla detalle pedido: PedidoID (FK), ProductoID (FK), Cantidad.',
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Listo: ahora los datos están organizados, sin redundancia, y son mucho más fáciles de mantener. Cada cosa vive en su tabla y se relaciona por las claves.',
      },
      {
        type: 'table',
        caption: 'Resumen de las formas normales',
        headers: [
          'Forma normal',
          'Qué hace',
        ],
        rows: [
          [
            'Primera forma normal (1FN)',
            'Cambiar todas las estructuras que no sean bidimensionales (sin grupos repetitivos).',
          ],
          [
            'Segunda forma normal (2FN)',
            'Eliminar los datos que no dependan de las claves de los registros (dependencias parciales).',
          ],
          [
            'Tercera forma normal (3FN)',
            'Eliminar los datos que dependan transitivamente de las claves primarias (dependencias transitivas).',
          ],
        ],
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-20-1',
          q: 'El modelo lógico describe cómo se construirá el sistema, detallando hardware, pantallas y algoritmos.',
          a: false,
          explain: 'Falso. Eso es el modelo físico. El modelo lógico representa la solución conceptualmente, describiendo qué hará el sistema sin importar cómo se implementa tecnológicamente.',
        },
        {
          id: 'tf-20-2',
          q: 'La analogía del apunte compara el modelo lógico con el plano arquitectónico de una casa.',
          a: true,
          explain: 'Verdadero. El modelo lógico es el plano arquitectónico: muestra habitaciones, tamaños y conexiones, pero no el tipo de ladrillos ni cables.',
        },
        {
          id: 'tf-20-3',
          q: 'Según el objetivo del diseño, la tecnología es secundaria respecto al resultado de uso.',
          a: true,
          explain: 'Verdadero. Dentro de las actividades de soporte para la empresa, el apunte dice explícitamente que la tecnología es secundaria respecto al resultado de uso.',
        },
        {
          id: 'tf-20-4',
          q: 'La normalización busca aumentar la redundancia de datos para tener copias de seguridad en cada tabla.',
          a: false,
          explain: 'Falso. La normalización busca reducir la redundancia de datos y mejorar su integridad, no aumentarla.',
        },
        {
          id: 'tf-20-5',
          q: 'En el ejemplo, la tabla original ya cumple la primera forma normal (1FN) porque es bidimensional y no tiene grupos repetitivos.',
          a: true,
          explain: 'Verdadero. El apunte aclara que la tabla ya es bidimensional y sin grupos repetitivos, por lo que cumple 1FN.',
        },
      ],
      mc: [
        {
          id: 'mc-20-1',
          q: '¿Qué define el modelo físico según el apunte?',
          options: [
            'Flujos de información, procesos y almacenes de datos.',
            'Diseño de la interfaz, diseño de la base de datos y especificaciones de procesos.',
            'Solo las técnicas de relevamiento como entrevistas y cuestionarios.',
            'Las razones para normalizar una base de datos relacional.',
          ],
          correctIndex: 1,
          explain: 'El modelo físico define el diseño de la interfaz (pantallas y reportes), el diseño de la base de datos (tablas, campos, tipos, relaciones) y las especificaciones de procesos (lógica de programación, algoritmos). Los flujos, procesos y almacenes son del modelo lógico.',
        },
        {
          id: 'mc-20-2',
          q: '¿Qué elimina la segunda forma normal (2FN)?',
          options: [
            'Las dependencias transitivas.',
            'Los grupos repetitivos.',
            'Las dependencias parciales.',
            'Las claves primarias duplicadas.',
          ],
          correctIndex: 2,
          explain: 'La 2FN elimina las dependencias parciales: mueve a otra tabla los datos que no dependen de la clave completa. Las transitivas las elimina la 3FN.',
        },
        {
          id: 'mc-20-3',
          q: 'En el ejemplo de normalización, ¿por qué Fecha, ClienteID y NombreCliente se separan al aplicar 2FN?',
          options: [
            'Porque dependen transitivamente de la clave primaria.',
            'Porque dependen solo de PedidoID, no de la clave completa (PedidoID, ProductoID).',
            'Porque son grupos repetitivos que rompen la 1FN.',
            'Porque son claves foráneas hacia la tabla productos.',
          ],
          correctIndex: 1,
          explain: 'La clave es (PedidoID, ProductoID). Fecha, ClienteID y NombreCliente dependen solo de PedidoID, es decir de una parte de la clave: eso es una dependencia parcial, que la 2FN elimina.',
        },
        {
          id: 'mc-20-4',
          q: 'Según el aspecto \'Complejidad\' del análisis de hechos, ¿cuáles son sus estrategias de diseño?',
          options: [
            'Aumentar la capacidad, reducir las expectativas, redefinir la tarea.',
            'Eliminar la necesidad de la información, facilitar el acceso, cambiar la presentación.',
            'Simplificar, dividir, cambiar la secuencia de actividades.',
            'Detección, notificación y corrección de fallas de control.',
          ],
          correctIndex: 2,
          explain: 'Para la Complejidad (número grande de tareas o interrelaciones con rendimiento inaceptable), las estrategias son simplificar, dividir y cambiar la secuencia de actividades. Las otras opciones corresponden a Capacidad, Accesibilidad y Control respectivamente.',
        },
      ],
      ms: [
        {
          id: 'ms-20-1',
          q: '¿Cuáles de los siguientes son objetivos del diseño según el apunte?',
          options: [
            'Especificar los elementos del diseño lógico (entrada, salida, archivos, BBDD, procedimientos).',
            'Que sea fácil de usar (ingeniería de usabilidad y ergonomía).',
            'Maximizar la cantidad de tablas para guardar más copias de los datos.',
            'Ajustarse a los estándares de diseño de la organización.',
            'Proporcionar las especificaciones del software con suficiente detalle.',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Son objetivos del diseño: especificar los elementos del diseño lógico, ser fácil de usar, soportar a la empresa, satisfacer requerimientos de usuarios, proporcionar las especificaciones del software y ajustarse a los estándares. Maximizar tablas para copiar datos contradice la normalización, que busca reducir redundancia.',
        },
        {
          id: 'ms-20-2',
          q: '¿Cuáles son razones para normalizar una base de datos, según el apunte?',
          options: [
            'Estructurar los datos para representar las relaciones.',
            'Permitir la recuperación sencilla de los datos.',
            'Simplificar el mantenimiento de los datos.',
            'Reducir la necesidad de reestructuración.',
            'Aumentar la redundancia para acelerar las consultas.',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Las razones son: estructurar datos para representar relaciones, recuperación sencilla, simplificar el mantenimiento y reducir la necesidad de reestructuración. Aumentar la redundancia es justo lo contrario al objetivo de la normalización.',
        },
        {
          id: 'ms-20-3',
          q: '¿Cuáles de estos son tipos de archivos mencionados en Almacenamiento?',
          options: [
            'Maestros.',
            'Transacciones.',
            'Reportes.',
            'Resguardo.',
            'Transitivos.',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Los tipos de archivos son maestros, de transacciones, reportes y resguardo. \'Transitivos\' no es un tipo de archivo; lo transitivo aparece en las dependencias de la 3FN.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-20-1',
        front: 'Modelo lógico',
        back: 'Representa la solución conceptualmente: describe qué hará el sistema sin importar cómo se implementa. Define flujos de información, procesos y almacenes de datos. Es el plano arquitectónico de la casa.',
      },
      {
        id: 'fc-20-2',
        front: 'Modelo físico',
        back: 'Traduce el modelo lógico en especificaciones técnicas detalladas: cómo se construye el sistema con sus limitaciones de hardware y software. Define interfaz, base de datos y especificaciones de procesos. Son los planos de construcción e ingeniería.',
      },
      {
        id: 'fc-20-3',
        front: 'Objetivo del diseño',
        back: 'Especificar los elementos del diseño lógico (entrada, salida, archivos, BBDD, procedimientos), soportar a la empresa, satisfacer requerimientos de usuarios, ser fácil de usar, dar las especificaciones del software y ajustarse a los estándares.',
      },
      {
        id: 'fc-20-4',
        front: 'Normalización',
        back: 'Proceso formal para diseñar bases de datos relacionales, con el objetivo de reducir la redundancia de datos y mejorar su integridad.',
      },
      {
        id: 'fc-20-5',
        front: 'Primera forma normal (1FN)',
        back: 'Cambiar todas las estructuras que no sean bidimensionales: la tabla queda bidimensional y sin grupos repetitivos.',
      },
      {
        id: 'fc-20-6',
        front: 'Segunda forma normal (2FN)',
        back: 'Elimina las dependencias parciales: los datos que no dependen de la clave completa se mueven a otra tabla. En el ejemplo separa pedidos de detalle de pedido.',
      },
      {
        id: 'fc-20-7',
        front: 'Tercera forma normal (3FN)',
        back: 'Elimina las dependencias transitivas: los datos que dependen transitivamente de la clave primaria se separan. En el ejemplo crea las tablas clientes y productos.',
      },
      {
        id: 'fc-20-8',
        front: 'Tipos de archivos',
        back: 'En el almacenamiento se distinguen archivos maestros, de transacciones, reportes y de resguardo.',
      },
      {
        id: 'fc-20-9',
        front: 'Análisis de hechos: aspectos',
        back: 'Cuatro aspectos con su estrategia de diseño: capacidad, control, accesibilidad de la información y complejidad. La complejidad conduce a problemas en los otros tres.',
      },
    ],
  },

  // ---------- SECCIÓN 21 (Unidad 10) ----------
  {
    id: '21',
    unit: '10',
    title: 'Fases de prueba e implementación',
    criollo: 'Acá ves cómo se prueba un sistema antes de soltarlo y cómo se pone en marcha sin romper todo. Distinguís White box (mirás el código por dentro) de Black box (mirás resultados sin ver el código), las pruebas especiales y las estrategias para pasar del sistema viejo al nuevo. La idea es que entiendas qué arriesgás según cómo hagas la conversión.',
    blocks: [
      {
        type: 'p',
        text: 'Probar es fundamental para garantizar la calidad. Una vez probado, viene la puesta en marcha, que es la estrategia con la que lanzás el nuevo sistema en la organización.',
      },
      {
        type: 'h3',
        text: 'Estrategias de prueba',
        criollo: 'Dos enfoques clásicos: uno mira el código por dentro, el otro mira los resultados desde afuera.',
      },
      {
        type: 'p',
        text: '<strong>Prueba de código (White box)</strong>: el programador examina la lógica interna del código, para asegurarse de que cada rama y bucle funcione como se espera. Examina la lógica del programa.',
      },
      {
        type: 'p',
        text: '<strong>Prueba de especificación (Black box)</strong>: el tester verifica los resultados del sistema, <em>sin conocer el código interno</em>. Se enfoca en si el sistema cumple con los requerimientos funcionales, examinando los resultados según la condición o conjunto de condiciones.',
      },
      {
        type: 'h3',
        text: 'Pruebas especiales',
        criollo: 'El apunte lista seis tipos, cada uno apuntando a un aspecto distinto del sistema.',
      },
      {
        type: 'table',
        caption: 'Seis tipos diferentes de pruebas para un sistema',
        headers: [
          'Tipo de prueba',
          'Descripción',
        ],
        rows: [
          [
            'De carga máxima',
            'Probar si el sistema soporta el volumen de procesamiento en el nivel más alto de demanda.',
          ],
          [
            'De almacenamiento',
            'Testear la capacidad de almacenar la información.',
          ],
          [
            'De tiempo de ejecución',
            'Tiempo de respuesta en el momento de mayor carga.',
          ],
          [
            'De recuperación',
            'Prueba de backups o de reinicio.',
          ],
          [
            'De procedimientos',
            'Probar la documentación.',
          ],
          [
            'De factores humanos',
            'Prueba de usabilidad.',
          ],
        ],
      },
      {
        type: 'h3',
        text: 'Puesta en marcha (Implementación)',
        criollo: 'Cuatro estrategias de conversión para pasar del sistema viejo al nuevo. Elegís según cuánto riesgo y cuánta plata podés bancar.',
      },
      {
        type: 'p',
        text: 'Existen diferentes estrategias para lanzar el nuevo sistema:',
      },
      {
        type: 'ul',
        items: [
          '<strong>En paralelo</strong>: el sistema viejo y el nuevo funcionan a la vez, durante un período. Es la <em>más segura</em>, pero la más costosa.',
          '<strong>Gradual (o por fases)</strong>: se implementa el nuevo sistema por módulos o departamentos.',
          '<strong>Piloto</strong>: se implementa el sistema completo en una pequeña parte de la organización. Si funciona, se expande al resto.',
          '<strong>Abrupta (o Big bang)</strong>: se apaga el sistema viejo y se enciende el nuevo en una fecha determinada. Es la <em>más riesgosa</em> pero la más rápida.',
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Ojo con el tradeoff: la conversión en paralelo es la más segura pero la más costosa, mientras que la abrupta (Big bang) es la más rápida pero la más riesgosa.',
      },
      {
        type: 'h3',
        text: 'Implementación: preimplementación y puesta en marcha',
        criollo: 'El apunte divide la implementación en dos momentos: lo que hacés antes de arrancar y lo que hacés al lanzar.',
      },
      {
        type: 'p',
        text: '<strong>Preimplementación</strong>: incluye las tareas previas a lanzar el sistema.',
      },
      {
        type: 'ul',
        items: [
          'Planificar la implementación y la puesta en marcha.',
          'Efectuar las pruebas de los usuarios y de QA.',
          'Desarrollar documentación para usuarios y operadores.',
          'Capacitar a supervisores y operadores.',
        ],
      },
      {
        type: 'p',
        text: '<strong>Puesta en marcha</strong>: las tareas de lanzar el sistema propiamente dicho.',
      },
      {
        type: 'ul',
        items: [
          'Finalizar con la conversión de HW y SF (en paralelo, gradual, por piloto, abrupta).',
          'Poner en marcha el sistema.',
          'Completar la documentación del sistema.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'La etapa de implementación abarca planificación y puesta en marcha (con UAT y control de calidad), documentación (manual de usuario y manual de operaciones), capacitación a usuarios, supervisores y operadores, el documento de aprobación final, la tarea de conversión de archivos, el entorno de producción y la instalación.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Resumiendo: White box mira el código por dentro, Black box mira resultados desde afuera. Para lanzar, en paralelo es lo seguro y caro, Big bang es lo rápido y arriesgado. Y nunca arranques sin capacitar y documentar antes.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-21-1',
          q: 'En la prueba White box el programador examina la lógica interna del código, revisando que cada rama y bucle funcione como se espera.',
          a: true,
          explain: 'Correcto. La prueba de código (White box) examina la lógica del programa, verificando cada rama y bucle.',
        },
        {
          id: 'tf-21-2',
          q: 'En la prueba Black box (de especificación) el tester conoce y revisa el código interno del sistema.',
          a: false,
          explain: 'Falso. En Black box el tester verifica los resultados sin conocer el código interno; se enfoca en los requerimientos funcionales.',
        },
        {
          id: 'tf-21-3',
          q: 'La conversión en paralelo es la estrategia más segura pero la más costosa.',
          a: true,
          explain: 'Verdadero. En paralelo el sistema viejo y el nuevo funcionan a la vez durante un período: es la más segura pero la más costosa.',
        },
        {
          id: 'tf-21-4',
          q: 'La conversión Abrupta o Big bang es la más rápida pero también la más riesgosa.',
          a: true,
          explain: 'Verdadero. En la abrupta se apaga el viejo y se enciende el nuevo en una fecha determinada: es la más riesgosa pero la más rápida.',
        },
        {
          id: 'tf-21-5',
          q: 'Capacitar a supervisores y operadores es una tarea de la puesta en marcha, no de la preimplementación.',
          a: false,
          explain: 'Falso. Según el apunte, capacitar a supervisores y operadores forma parte de la preimplementación.',
        },
      ],
      mc: [
        {
          id: 'mc-21-1',
          q: '¿Qué describe la prueba de recuperación según las pruebas especiales del apunte?',
          options: [
            'Probar si el sistema soporta el volumen de procesamiento en el nivel más alto de demanda',
            'Prueba de backups o de reinicio',
            'Tiempo de respuesta en el momento de mayor carga',
            'Prueba de usabilidad',
          ],
          correctIndex: 1,
          explain: 'La prueba de recuperación se describe como prueba de backups o de reinicio. Las otras opciones corresponden a carga máxima, tiempo de ejecución y factores humanos.',
        },
        {
          id: 'mc-21-2',
          q: 'En la conversión Gradual (o por fases), ¿cómo se implementa el nuevo sistema?',
          options: [
            'En una pequeña parte de la organización y luego se expande',
            'Apagando el viejo y encendiendo el nuevo en una fecha determinada',
            'Por módulos o departamentos',
            'Manteniendo viejo y nuevo funcionando a la vez',
          ],
          correctIndex: 2,
          explain: 'La gradual o por fases implementa el nuevo sistema por módulos o departamentos. La opción A es piloto, la B es abrupta y la D es en paralelo.',
        },
        {
          id: 'mc-21-3',
          q: '¿Cuál de estas tareas corresponde a la puesta en marcha según el apunte?',
          options: [
            'Planificar la implementación y la puesta en marcha',
            'Efectuar las pruebas de los usuarios y de QA',
            'Capacitar a supervisores y operadores',
            'Completar la documentación del sistema',
          ],
          correctIndex: 3,
          explain: 'Completar la documentación del sistema es tarea de la puesta en marcha. Las otras tres pertenecen a la preimplementación.',
        },
        {
          id: 'mc-21-4',
          q: '¿Qué testea la prueba de procedimientos?',
          options: [
            'La capacidad de almacenar la información',
            'La documentación',
            'El tiempo de respuesta en el momento de mayor carga',
            'Si el sistema es intuitivo y fácil de usar',
          ],
          correctIndex: 1,
          explain: 'La prueba de procedimientos consiste en probar la documentación. Almacenar info es la de almacenamiento, el tiempo de respuesta es la de tiempo de ejecución y la usabilidad es la de factores humanos.',
        },
      ],
      ms: [
        {
          id: 'ms-21-1',
          q: '¿Cuáles de las siguientes son estrategias de conversión / puesta en marcha mencionadas en el apunte?',
          options: [
            'En paralelo',
            'Gradual (o por fases)',
            'Correctiva',
            'Piloto',
            'Abrupta (o Big bang)',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'En paralelo, gradual, piloto y abrupta son las cuatro estrategias de conversión. "Correctiva" no es una estrategia de conversión, es un tipo de mantenimiento.',
        },
        {
          id: 'ms-21-2',
          q: '¿Cuáles de estas tareas pertenecen a la preimplementación?',
          options: [
            'Planificar la implementación y la puesta en marcha',
            'Efectuar las pruebas de los usuarios y de QA',
            'Poner en marcha el sistema',
            'Desarrollar documentación para usuarios y operadores',
            'Capacitar a supervisores y operadores',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Planificar, hacer pruebas de usuarios y QA, desarrollar documentación y capacitar son de la preimplementación. Poner en marcha el sistema pertenece a la puesta en marcha.',
        },
        {
          id: 'ms-21-3',
          q: '¿Cuáles de estos son tipos de pruebas especiales según la tabla del apunte?',
          options: [
            'De carga máxima',
            'De almacenamiento',
            'De normalización',
            'De tiempo de ejecución',
            'De factores humanos',
          ],
          correctIndexes: [
            0,
            1,
            3,
            4,
          ],
          explain: 'Carga máxima, almacenamiento, tiempo de ejecución y factores humanos figuran en la tabla de pruebas especiales. "De normalización" no aparece en esa lista.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-21-1',
        front: 'Prueba White box',
        back: 'Prueba de código en la que el programador examina la lógica interna del código, asegurándose de que cada rama y bucle funcione como se espera.',
      },
      {
        id: 'fc-21-2',
        front: 'Prueba Black box',
        back: 'Prueba de especificación: el tester verifica los resultados del sistema sin conocer el código interno, enfocándose en si cumple con los requerimientos funcionales.',
      },
      {
        id: 'fc-21-3',
        front: 'Conversión en paralelo',
        back: 'El sistema viejo y el nuevo funcionan a la vez durante un período. Es la más segura, pero la más costosa.',
      },
      {
        id: 'fc-21-4',
        front: 'Conversión Abrupta (Big bang)',
        back: 'Se apaga el sistema viejo y se enciende el nuevo en una fecha determinada. Es la más riesgosa pero la más rápida.',
      },
      {
        id: 'fc-21-5',
        front: 'Conversión Piloto',
        back: 'Se implementa el sistema completo en una pequeña parte de la organización. Si funciona, se expande al resto.',
      },
      {
        id: 'fc-21-6',
        front: 'Conversión Gradual (por fases)',
        back: 'Se implementa el nuevo sistema por módulos o departamentos.',
      },
      {
        id: 'fc-21-7',
        front: 'Prueba de recuperación',
        back: 'Prueba de backups o de reinicio: verifica que se puedan restaurar los datos, por ejemplo si el servidor se apaga.',
      },
      {
        id: 'fc-21-8',
        front: 'Preimplementación',
        back: 'Etapa previa al lanzamiento: planificar, hacer las pruebas de usuarios y de QA, desarrollar documentación para usuarios y operadores, y capacitar a supervisores y operadores.',
      },
      {
        id: 'fc-21-9',
        front: 'Puesta en marcha',
        back: 'Etapa de lanzamiento: finalizar la conversión de HW y SW, poner en marcha el sistema y completar la documentación. Incluye el documento de aprobación final, el entorno de producción y la instalación.',
      },
    ],
  },

  // ---------- SECCIÓN 22 (Unidad 10) ----------
  {
    id: '22',
    unit: '10',
    title: 'Mantenimiento, entornos y seguimiento',
    criollo: 'Che, el sistema no termina cuando lo prendés: ahí recién arranca la fase más larga y la que más plata se come, el mantenimiento. Acá ves los tres tipos de mantenimiento, los entornos por donde pasa el código (DEV, QA, PROD), quién labura en el equipo y cómo se le hace seguimiento una vez que está en la calle.',
    blocks: [
      {
        type: 'h3',
        text: 'Mantenimiento: la fase más larga',
        criollo: 'Una vez implementado, el sistema entra en mantenimiento. Es lo que más dura y lo que más cuesta.',
      },
      {
        type: 'p',
        text: 'Una vez implementado, el sistema entra en su <strong>fase más larga</strong>: el mantenimiento. Representa la <strong>mayor parte del costo total de propiedad</strong> de un sistema. Hay tres tipos, y entre ellos se reparten el trabajo de forma bastante desigual.',
      },
      {
        type: 'h3',
        text: 'Tipos de mantenimiento',
      },
      {
        type: 'p',
        text: 'El <strong>mantenimiento correctivo</strong> (~20 %) es arreglar errores y fallos (los famosos <em>bugs</em>) que no se detectaron en las pruebas. Incluye <strong>ajustes de emergencia</strong> y <strong>depuración rutinaria</strong>.',
      },
      {
        type: 'p',
        text: 'El <strong>mantenimiento adaptativo</strong> (~20 %) es modificar el sistema para que se adapte a cambios en el entorno, como un <strong>nuevo sistema operativo</strong> o <strong>cambios en la legislación</strong>. También entran acá la inclusión de cambios a los datos y archivos, y los cambios en el hardware y el software.',
      },
      {
        type: 'p',
        text: 'El <strong>mantenimiento perfectivo</strong> (~60 %) es mejorar el sistema agregando <strong>nuevas funcionalidades solicitadas por los usuarios</strong>, optimizando su rendimiento (recodificar para mejorar la performance) y mejorando la documentación. Es el que más peso tiene de los tres.',
      },
      {
        type: 'table',
        caption: 'Tipos de mantenimiento de un sistema',
        headers: [
          'Tipo',
          'Qué incluye',
          '%',
        ],
        rows: [
          [
            'Correctivo',
            'Arreglar errores y fallos (bugs) no detectados en pruebas: ajustes de emergencia y depuración rutinaria.',
            '~20 %',
          ],
          [
            'Adaptativo',
            'Adaptar el sistema a cambios del entorno (nuevo SO, cambios de legislación), cambios en datos y archivos, y cambios en HW y SW.',
            '~20 %',
          ],
          [
            'Perfectivo',
            'Agregar funcionalidades pedidas por los usuarios, optimizar el rendimiento (recodificar) y mejorar la documentación.',
            '~60 %',
          ],
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Ojo con el dato: el perfectivo se lleva el 60 %. O sea, la mayor parte del mantenimiento no es apagar incendios, es seguir agregando mejoras y funcionalidades que pide la gente.',
      },
      {
        type: 'h3',
        text: 'Entornos de sistemas',
        criollo: 'Para laburar profesional y seguro, el código pasa por tres ambientes separados antes de llegar a manos del usuario final.',
      },
      {
        type: 'p',
        text: 'Para un desarrollo profesional y seguro, es indispensable trabajar con <strong>múltiples entornos</strong>. La idea es que el código no salte directo de la compu del programador a producción: pasa por etapas controladas.',
      },
      {
        type: 'h3',
        text: 'Desarrollo (DEV)',
      },
      {
        type: 'p',
        text: 'El entorno de <strong>Desarrollo (DEV)</strong> es el ambiente local de los programadores, donde escriben y prueban su código. Es un <strong>entorno inestable</strong>: acá las cosas se rompen y se arreglan todo el tiempo, y está bien que así sea.',
      },
      {
        type: 'h3',
        text: 'Calidad (QA - Quality assurance)',
      },
      {
        type: 'p',
        text: 'El entorno de <strong>Calidad (QA)</strong> es una <strong>réplica del entorno real</strong>, donde los testers realizan pruebas formales para validar que los cambios <strong>funcionan y no rompen nada existente</strong>. Es el filtro antes de salir a la cancha.',
      },
      {
        type: 'h3',
        text: 'Producción (PROD)',
      },
      {
        type: 'p',
        text: 'El entorno de <strong>Producción (PROD)</strong> es el entorno real, donde los usuarios finales trabajan. Es el sistema <strong>en vivo</strong> y debe ser <strong>estable y estar protegido</strong>. Acá no se experimenta.',
      },
      {
        type: 'p',
        text: 'El pasaje de código de <strong>DEV a QA y luego a PROD</strong> sigue un <strong>proceso controlado para minimizar los riesgos</strong>.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/10/entornos-sistemas.png',
        alt: 'Diagrama de Venn de tres círculos que se solapan, etiquetados Desarrollo, Producción y Calidad, representando los entornos de sistemas.',
        caption: 'Entornos de sistemas: Desarrollo (DEV), Calidad (QA) y Producción (PROD).',
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Nunca toques producción a mano ni pruebes ahí. Si algo no pasó por QA, no debería llegar a PROD. El proceso controlado existe justamente para no romperle el sistema en vivo a los usuarios.',
      },
      {
        type: 'h3',
        text: 'Equipos de trabajo para el desarrollo',
        criollo: 'El equipo que arma el sistema tiene una jerarquía de tres niveles.',
      },
      {
        type: 'p',
        text: 'Los equipos de trabajo para el desarrollo de sistemas se organizan en una jerarquía de tres niveles: <strong>Junior</strong> en la base, <strong>Senior</strong> en el medio y <strong>Líder</strong> en la cima.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/10/equipos-trabajo.png',
        alt: 'Pirámide de tres niveles que representa la jerarquía de un equipo de desarrollo: en la base "Junior", en el medio "Senior" y en la cima "Líder".',
        caption: 'Equipos de trabajo para el desarrollo de sistemas: niveles Junior, Senior y Líder.',
      },
      {
        type: 'h3',
        text: 'Seguimiento y control',
        criollo: 'Después de implementar, el sistema queda en observación para chequear que cumpla y para detectar qué hay que ajustar.',
      },
      {
        type: 'p',
        text: 'El objetivo del seguimiento y control es <strong>mantener el sistema en observación y operación controlada</strong>, para verificar si satisface las necesidades de información para las cuales fue generado, y <strong>detectar posibles modificaciones</strong> para adaptarlo a las condiciones del entorno en el cual opera.',
      },
      {
        type: 'p',
        text: 'En esta etapa hay que llevar adelante una serie de revisiones y cerrar con un informe:',
      },
      {
        type: 'ul',
        items: [
          'Efectuar <strong>revisión administrativa</strong>.',
          'Efectuar <strong>revisión de hardware y software (HW y SW)</strong>.',
          'Efectuar <strong>revisión de la documentación</strong>.',
          'Preparar el <strong>informe final de posimplementación</strong>.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'El seguimiento no es opcional: es lo que te dice si el sistema realmente resolvió el problema o si todavía le falta. De ahí salen las próximas modificaciones (que después caen como mantenimiento).',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-22-1',
          q: 'El mantenimiento es la fase más larga del sistema y representa la mayor parte del costo total de propiedad.',
          a: true,
          explain: 'Tal cual el apunte: una vez implementado, el sistema entra en su fase más larga, el mantenimiento, que representa la mayor parte del costo total de propiedad.',
        },
        {
          id: 'tf-22-2',
          q: 'El mantenimiento correctivo es el que se lleva el mayor porcentaje del trabajo (~60 %).',
          a: false,
          explain: 'Falso. El correctivo es ~20 %. El que se lleva ~60 % es el perfectivo (nuevas funcionalidades, optimización y documentación).',
        },
        {
          id: 'tf-22-3',
          q: 'En el entorno de Producción (PROD) trabajan los testers haciendo pruebas formales.',
          a: false,
          explain: 'Falso. Los testers hacen pruebas formales en QA (réplica del entorno real). PROD es el sistema en vivo donde trabajan los usuarios finales.',
        },
        {
          id: 'tf-22-4',
          q: 'Adaptar el sistema a un nuevo sistema operativo o a cambios en la legislación es mantenimiento adaptativo.',
          a: true,
          explain: 'Correcto. El adaptativo modifica el sistema para adaptarlo a cambios del entorno, como un nuevo SO o cambios en la legislación.',
        },
        {
          id: 'tf-22-5',
          q: 'El pasaje de código de DEV a QA y luego a PROD sigue un proceso controlado para minimizar los riesgos.',
          a: true,
          explain: 'Tal cual lo dice el apunte: el pasaje DEV → QA → PROD sigue un proceso controlado para minimizar los riesgos.',
        },
      ],
      mc: [
        {
          id: 'mc-22-1',
          q: '¿Qué tipo de mantenimiento incluye agregar nuevas funcionalidades pedidas por los usuarios y optimizar el rendimiento?',
          options: [
            'Correctivo',
            'Adaptativo',
            'Perfectivo',
            'Preventivo',
          ],
          correctIndex: 2,
          explain: 'El perfectivo (~60 %) mejora el sistema agregando funcionalidades solicitadas por los usuarios, optimizando el rendimiento y mejorando la documentación.',
        },
        {
          id: 'mc-22-2',
          q: '¿Cuál es el entorno descripto como inestable, donde los programadores escriben y prueban su código localmente?',
          options: [
            'Calidad (QA)',
            'Desarrollo (DEV)',
            'Producción (PROD)',
            'Preimplementación',
          ],
          correctIndex: 1,
          explain: 'Desarrollo (DEV) es el ambiente local de los programadores, donde escriben y prueban su código. El apunte lo describe como un entorno inestable.',
        },
        {
          id: 'mc-22-3',
          q: '¿Qué porcentaje aproximado le corresponde al mantenimiento correctivo?',
          options: [
            '~20 %',
            '~40 %',
            '~60 %',
            '~80 %',
          ],
          correctIndex: 0,
          explain: 'El correctivo es ~20 % (igual que el adaptativo). El perfectivo se lleva ~60 %.',
        },
        {
          id: 'mc-22-4',
          q: 'En la jerarquía del equipo de desarrollo, ¿cuál es el nivel que está en la cima de la pirámide?',
          options: [
            'Junior',
            'Senior',
            'Líder',
            'Tester',
          ],
          correctIndex: 2,
          explain: 'La jerarquía es Junior (base), Senior (medio) y Líder (cima).',
        },
      ],
      ms: [
        {
          id: 'ms-22-1',
          q: '¿Cuáles de las siguientes son revisiones o tareas del seguimiento y control?',
          options: [
            'Efectuar revisión administrativa',
            'Efectuar revisión de HW y SW',
            'Efectuar revisión de la documentación',
            'Preparar el informe final de posimplementación',
            'Diseñar la base de datos en 3FN',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'El seguimiento y control incluye revisión administrativa, de HW y SW, de la documentación, y preparar el informe final de posimplementación. El diseño de la base de datos en 3FN pertenece a otra fase (diseño), no al seguimiento.',
        },
        {
          id: 'ms-22-2',
          q: '¿Cuáles de estos son los entornos de sistemas mencionados en el apunte?',
          options: [
            'Desarrollo (DEV)',
            'Calidad (QA)',
            'Producción (PROD)',
            'Preproducción (PRE)',
            'Pruebas de carga (LOAD)',
          ],
          correctIndexes: [
            0,
            1,
            2,
          ],
          explain: 'El apunte menciona tres entornos: Desarrollo (DEV), Calidad (QA) y Producción (PROD). Preproducción y un entorno de pruebas de carga no figuran como entornos en esta fuente.',
        },
        {
          id: 'ms-22-3',
          q: '¿Qué actividades corresponden al mantenimiento correctivo según el apunte?',
          options: [
            'Ajustes de emergencia',
            'Depuración rutinaria',
            'Mejoras en la documentación',
            'Recodificación para mejorar la performance',
            'Cambios en el HW y SW',
          ],
          correctIndexes: [
            0,
            1,
          ],
          explain: 'El correctivo incluye ajustes de emergencia y depuración rutinaria. Las mejoras en la documentación y la recodificación son perfectivas; los cambios en HW y SW son adaptativos.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-22-1',
        front: 'Fase de mantenimiento',
        back: 'Es la fase más larga del ciclo de vida del sistema y representa la mayor parte del costo total de propiedad. Arranca una vez que el sistema está implementado.',
      },
      {
        id: 'fc-22-2',
        front: 'Mantenimiento correctivo (~20 %)',
        back: 'Arreglar errores y fallos (bugs) que no se detectaron en las pruebas. Incluye ajustes de emergencia y depuración rutinaria.',
      },
      {
        id: 'fc-22-3',
        front: 'Mantenimiento adaptativo (~20 %)',
        back: 'Modificar el sistema para adaptarlo a cambios del entorno, como un nuevo sistema operativo o cambios en la legislación, además de cambios en datos, archivos, HW y SW.',
      },
      {
        id: 'fc-22-4',
        front: 'Mantenimiento perfectivo (~60 %)',
        back: 'Mejorar el sistema agregando funcionalidades pedidas por los usuarios, optimizando el rendimiento (recodificar) y mejorando la documentación. Es el de mayor porcentaje.',
      },
      {
        id: 'fc-22-5',
        front: 'Entorno DEV',
        back: 'Desarrollo: ambiente local de los programadores donde escriben y prueban su código. Es un entorno inestable.',
      },
      {
        id: 'fc-22-6',
        front: 'Entorno QA',
        back: 'Calidad (Quality assurance): réplica del entorno real donde los testers hacen pruebas formales para validar que los cambios funcionan y no rompen nada existente.',
      },
      {
        id: 'fc-22-7',
        front: 'Entorno PROD',
        back: 'Producción: el entorno real en vivo donde trabajan los usuarios finales. Debe ser estable y estar protegido. El pasaje DEV → QA → PROD es controlado para minimizar riesgos.',
      },
      {
        id: 'fc-22-8',
        front: 'Equipos de trabajo',
        back: 'Jerarquía de tres niveles para el desarrollo de sistemas: Junior en la base, Senior en el medio y Líder en la cima.',
      },
      {
        id: 'fc-22-9',
        front: 'Seguimiento y control',
        back: 'Mantener el sistema en observación y operación controlada para verificar que satisface las necesidades y detectar modificaciones. Incluye revisión administrativa, de HW/SW y de documentación, y preparar el informe final de posimplementación.',
      },
    ],
  },

  // ========================================================================
  // UNIDAD 11 — Proceso de desarrollo de sistemas de información
  // ========================================================================

  // ---------- SECCIÓN 23 ----------
  {
    id: '23',
    unit: '11',
    title: 'El proceso de desarrollo y el ciclo de vida (CVDS)',
    criollo:
      'Crear o mejorar un sistema no es algo que se improvise. Se sigue una receta ordenada con etapas: el ciclo de vida del desarrollo de sistemas (CVDS). Pensalo como el plano de construcción de un edificio: vas de la idea inicial hasta que el sistema está funcionando y se mantiene en el tiempo.',
    blocks: [
      {
        type: 'p',
        text: 'Crear o mejorar un sistema de información no es un proceso improvisado. Para garantizar el éxito, se sigue una metodología estructurada, conocida como el <strong>ciclo de vida del desarrollo de sistemas (CVDS)</strong>. Imaginalo como el plano de construcción de un edificio: una serie de fases ordenadas que nos guían desde la idea inicial hasta que el sistema está en pleno funcionamiento y se mantiene en el tiempo.',
      },
      {
        type: 'h3',
        text: 'El modelo secuencial',
        criollo:
          'En su versión más clásica, el proceso es una fila india de actividades: terminás una y arrancás la siguiente, hasta llegar al objetivo.',
      },
      {
        type: 'p',
        text: 'El proceso de desarrollo del sistema se puede llevar a cabo de manera secuencial, a través de una serie de actividades para lograr el objetivo:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Análisis y especificación de requerimientos</strong>: se centra en tratar de entender “qué” se requiere, cuáles son los requisitos, y finaliza con la documentación de estos.',
          '<strong>Diseño</strong>: que mostrará “cómo” llevaremos a cabo la solución.',
          '<strong>Programación/Codificación</strong>: toma las especificaciones obtenidas en la etapa de diseño sobre los procesos y los traduce al lenguaje especificado.',
          '<strong>Prueba</strong>: trata de detectar cada error, antes de la entrega del producto al cliente.',
          '<strong>Conversión</strong>: determina cómo se pasará del sistema anterior al nuevo.',
          '<strong>Producción y mantenimiento</strong>: se pone en producción el nuevo sistema y se lleva a cabo, mediante el mantenimiento, cualquier cambio o modificación requerida una vez que el sistema ya se encuentra funcionando.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Si bien mostramos un modelo secuencial, que se basa en una serie de etapas que se dan una a continuación de la otra, existe otra variedad de modelos que surgieron en forma posterior a este, cuya selección depende del tipo de sistema a desarrollar y la magnitud de este.',
      },
      {
        type: 'h3',
        text: 'Las fases del CVDS',
        criollo:
          'Mirado como ciclo de vida completo, el desarrollo se ordena en seis fases grandes, de la investigación inicial hasta el seguimiento posterior.',
      },
      {
        type: 'p',
        text: 'Las fases principales de este ciclo son:',
      },
      {
        type: 'ol',
        items: [
          'Investigación preliminar y análisis.',
          'Determinación de requerimientos.',
          'Desarrollo del sistema (diseño y programación).',
          'Prueba del sistema.',
          'Implantación.',
          'Seguimiento y control (posimplementación).',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/11/actividades-desarrollo.png',
        alt: 'Diagrama circular en seis sectores etiquetados Investigación preliminar y análisis, Determinación de requerimientos, Diseño del sistema, Desarrollo del sistema, Prueba del sistema e Implantación.',
        caption: 'Actividades en el desarrollo de sistemas, representadas como un ciclo de seis sectores. Fuente: elaboración propia (UP).',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'La idea es entender que hay un orden lógico: primero averiguás qué se necesita, después definís cómo, recién ahí programás, probás, lo ponés en marcha y lo seguís cuidando. Saltarte etapas es lo que después te explota en la cara.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-23-1',
          q: 'El ciclo de vida del desarrollo de sistemas (CVDS) es una metodología estructurada de fases ordenadas.',
          a: true,
          explain: 'Tal cual el apunte: crear o mejorar un sistema no es improvisado; se sigue una metodología estructurada, el CVDS, que es una serie de fases ordenadas.',
        },
        {
          id: 'tf-23-2',
          q: 'En el modelo secuencial, la etapa de diseño se centra en entender “qué” se requiere.',
          a: false,
          explain: 'Falso. El “qué” lo define el análisis y especificación de requerimientos. El diseño muestra el “cómo” se llevará a cabo la solución.',
        },
        {
          id: 'tf-23-3',
          q: 'La conversión determina cómo se pasará del sistema anterior al nuevo.',
          a: true,
          explain: 'Correcto. La conversión es la actividad que determina cómo se realizará el pasaje del sistema anterior al nuevo.',
        },
        {
          id: 'tf-23-4',
          q: 'El modelo secuencial es el único modelo de desarrollo posible.',
          a: false,
          explain: 'Falso. El apunte aclara que existe otra variedad de modelos posteriores, cuya selección depende del tipo de sistema a desarrollar y su magnitud.',
        },
      ],
      mc: [
        {
          id: 'mc-23-1',
          q: '¿Con qué se compara el CVDS en el apunte?',
          options: [
            'Con una receta de cocina',
            'Con el plano de construcción de un edificio',
            'Con un partido de fútbol',
            'Con un árbol genealógico',
          ],
          correctIndex: 1,
          explain: 'El apunte lo compara con el plano de construcción de un edificio: una serie de fases ordenadas desde la idea inicial hasta el funcionamiento y el mantenimiento.',
        },
        {
          id: 'mc-23-2',
          q: 'En el modelo secuencial, ¿qué etapa toma las especificaciones de diseño y las traduce al lenguaje especificado?',
          options: [
            'Análisis y especificación de requerimientos',
            'Prueba',
            'Programación/Codificación',
            'Conversión',
          ],
          correctIndex: 2,
          explain: 'La programación/codificación toma las especificaciones obtenidas en el diseño sobre los procesos y las traduce al lenguaje especificado.',
        },
        {
          id: 'mc-23-3',
          q: '¿Cuál es la primera fase del CVDS según el apunte?',
          options: [
            'Determinación de requerimientos',
            'Investigación preliminar y análisis',
            'Implantación',
            'Prueba del sistema',
          ],
          correctIndex: 1,
          explain: 'Las fases del CVDS arrancan con la investigación preliminar y análisis, seguida de la determinación de requerimientos.',
        },
      ],
      ms: [
        {
          id: 'ms-23-1',
          q: '¿Cuáles de las siguientes son actividades del modelo secuencial de desarrollo?',
          options: [
            'Análisis y especificación de requerimientos',
            'Diseño',
            'Programación/Codificación',
            'Conversión',
            'Tercerización del soporte',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'El modelo secuencial incluye análisis y especificación de requerimientos, diseño, programación/codificación, prueba, conversión y producción y mantenimiento. La tercerización del soporte no figura como actividad del modelo.',
        },
        {
          id: 'ms-23-2',
          q: '¿Cuáles de estas son fases principales del CVDS?',
          options: [
            'Investigación preliminar y análisis',
            'Determinación de requerimientos',
            'Prueba del sistema',
            'Seguimiento y control (posimplementación)',
            'Venta del sistema a terceros',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Las fases del CVDS son: investigación preliminar y análisis, determinación de requerimientos, desarrollo, prueba, implantación y seguimiento y control. La venta a terceros no es una fase del ciclo.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-23-1',
        front: 'CVDS',
        back: 'Ciclo de vida del desarrollo de sistemas: metodología estructurada de fases ordenadas que guían desde la idea inicial hasta el funcionamiento y el mantenimiento. Se lo compara con el plano de construcción de un edificio.',
      },
      {
        id: 'fc-23-2',
        front: 'Modelo secuencial',
        back: 'Modelo donde las etapas se dan una a continuación de la otra: análisis y especificación de requerimientos, diseño, programación, prueba, conversión, y producción y mantenimiento.',
      },
      {
        id: 'fc-23-3',
        front: 'Análisis de requerimientos (el “qué”)',
        back: 'Etapa que se centra en entender qué se requiere y cuáles son los requisitos; finaliza con la documentación de estos.',
      },
      {
        id: 'fc-23-4',
        front: 'Diseño (el “cómo”)',
        back: 'Etapa que muestra cómo se llevará a cabo la solución.',
      },
      {
        id: 'fc-23-5',
        front: 'Conversión',
        back: 'Actividad que determina cómo se pasará del sistema anterior al nuevo.',
      },
      {
        id: 'fc-23-6',
        front: 'Producción y mantenimiento',
        back: 'Se pone en producción el nuevo sistema y, mediante el mantenimiento, se realiza cualquier cambio o modificación una vez que el sistema ya está funcionando.',
      },
      {
        id: 'fc-23-7',
        front: 'Fases del CVDS',
        back: 'Investigación preliminar y análisis, determinación de requerimientos, desarrollo (diseño y programación), prueba, implantación, y seguimiento y control (posimplementación).',
      },
    ],
  },

  // ---------- SECCIÓN 24 ----------
  {
    id: '24',
    unit: '11',
    title: 'Fases iniciales: relevamiento, planificación y requerimientos',
    criollo:
      'Esta es la etapa de cimientos. Antes de escribir una sola línea de código tenés que entender el problema, definir qué va a hacer (y qué NO) el sistema, y averiguar bien qué necesitan los usuarios. Un error acá te sale carísimo más adelante.',
    blocks: [
      {
        type: 'p',
        text: 'Esta es la fase de cimentación del proyecto. Un error aquí puede costar muy caro más adelante.',
      },
      {
        type: 'h3',
        text: 'Relevamiento y planificación',
        criollo:
          'Primero investigás el problema, definís el alcance (qué hace y qué no) y armás un plan de trabajo con cronograma, recursos y presupuesto.',
      },
      {
        type: 'p',
        text: 'Antes de escribir una sola línea de código, debemos entender el problema. Esta etapa inicial implica:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Relevamiento preliminar</strong>: una primera investigación para entender la necesidad del negocio, su viabilidad y los posibles riesgos.',
          '<strong>Definición de objetivos y alcance</strong>: se establece qué se espera lograr con el sistema y, muy importante, qué no hará. Esto evita que el proyecto crezca descontroladamente.',
          '<strong>Plan de trabajo</strong>: se crea un cronograma inicial, se asignan recursos y se define un presupuesto.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/11/relevamiento-planificacion.png',
        alt: 'Diagrama de la actividad "Definición de requerimientos y planificación" con entradas (evaluación preliminar de riesgo, seguridad y criticidad, objetivos y alcances del proyecto), tareas internas y salidas (requerimientos de alto nivel, plan de trabajo, especificaciones de requerimientos).',
        caption: 'Relevamiento y planificación: entradas, tareas y salidas de la definición de requerimientos. Fuente: elaboración propia (UP).',
      },
      {
        type: 'h3',
        text: 'Determinación de requerimientos',
        criollo:
          'Los requerimientos son lo que el sistema tiene que cumplir, según lo que piden los usuarios o el cliente. Para descubrirlos, el analista usa varias técnicas.',
      },
      {
        type: 'p',
        text: 'Los requerimientos son la descripción detallada de las necesidades que el sistema debe satisfacer, planteadas por los usuarios o el cliente. Para descubrirlos, los analistas utilizan varias técnicas:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Entrevistas</strong>: conversaciones directas con los involucrados, para obtener información cualitativa y profunda. Ejemplo: entrevistar al gerente de finanzas para entender su proceso de toma de decisiones al aprobar un pago.',
          '<strong>Cuestionarios</strong>: formularios con preguntas específicas, útiles para recopilar datos de un gran número de personas. Ejemplo: enviar un cuestionario a 150 vendedores para cuantificar cuánto tiempo tardan en registrar un pedido con el sistema actual.',
          '<strong>Observación</strong>: mirar directamente cómo los usuarios trabajan en su día a día, para entender el flujo real de sus tareas. A veces, lo que la gente hace es diferente de lo que dice que hace.',
          '<strong>Revisión de registros</strong>: analizar documentación existente (manuales, reportes, formularios), para comprender los procesos formales de la empresa.',
        ],
      },
      {
        type: 'p',
        text: 'Los <strong>requerimientos a encontrar</strong> abarcan: la comprensión del proceso, la frecuencia y volumen de los procesos, la identificación de controles, los requisitos de transacciones de los usuarios y los requerimientos de decisión de los usuarios. El objetivo final de la etapa es especificar los requerimientos.',
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Ojo con el alcance: definir qué NO hará el sistema es tan importante como definir qué hará. Es lo que evita que el proyecto crezca descontroladamente (el famoso “ya que estamos, agreguemos esto otro”).',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-24-1',
          q: 'Definir qué NO hará el sistema ayuda a evitar que el proyecto crezca descontroladamente.',
          a: true,
          explain: 'Correcto. El apunte resalta que definir el alcance (qué se espera lograr y, muy importante, qué no hará) evita que el proyecto crezca descontroladamente.',
        },
        {
          id: 'tf-24-2',
          q: 'Los cuestionarios son la mejor técnica para obtener información cualitativa y profunda de pocos involucrados.',
          a: false,
          explain: 'Falso. Para información cualitativa y profunda sirven las entrevistas. Los cuestionarios son útiles para recopilar datos de un gran número de personas.',
        },
        {
          id: 'tf-24-3',
          q: 'La observación se usa porque a veces lo que la gente hace difiere de lo que dice que hace.',
          a: true,
          explain: 'Tal cual: la observación mira cómo trabajan los usuarios en su día a día, y a veces lo que hacen es diferente de lo que dicen que hacen.',
        },
        {
          id: 'tf-24-4',
          q: 'Los requerimientos son definidos exclusivamente por el equipo técnico, sin participación de los usuarios.',
          a: false,
          explain: 'Falso. Los requerimientos son las necesidades planteadas por los usuarios o el cliente; el analista las descubre y documenta.',
        },
      ],
      mc: [
        {
          id: 'mc-24-1',
          q: '¿Qué técnica de relevamiento consiste en analizar manuales, reportes y formularios existentes?',
          options: [
            'Entrevistas',
            'Cuestionarios',
            'Observación',
            'Revisión de registros',
          ],
          correctIndex: 3,
          explain: 'La revisión de registros analiza la documentación existente (manuales, reportes, formularios) para comprender los procesos formales de la empresa.',
        },
        {
          id: 'mc-24-2',
          q: '¿Cuál de estas NO es parte del relevamiento y la planificación inicial?',
          options: [
            'Relevamiento preliminar',
            'Definición de objetivos y alcance',
            'Plan de trabajo con cronograma y presupuesto',
            'Codificación de los módulos',
          ],
          correctIndex: 3,
          explain: 'La codificación de módulos pertenece a la fase de construcción. El relevamiento y planificación incluye relevamiento preliminar, definición de objetivos y alcance, y plan de trabajo.',
        },
        {
          id: 'mc-24-3',
          q: 'Enviar un formulario con preguntas a 150 vendedores para cuantificar tiempos corresponde a la técnica de…',
          options: [
            'Cuestionarios',
            'Entrevistas',
            'Observación',
            'Revisión de registros',
          ],
          correctIndex: 0,
          explain: 'Es el ejemplo textual de cuestionarios: formularios con preguntas específicas, útiles para recopilar datos de un gran número de personas.',
        },
      ],
      ms: [
        {
          id: 'ms-24-1',
          q: '¿Cuáles son técnicas para descubrir requerimientos según el apunte?',
          options: [
            'Entrevistas',
            'Cuestionarios',
            'Observación',
            'Revisión de registros',
            'Pruebas de estrés del servidor',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Las técnicas son entrevistas, cuestionarios, observación y revisión de registros. Las pruebas de estrés del servidor no son una técnica de relevamiento de requerimientos.',
        },
        {
          id: 'ms-24-2',
          q: '¿Qué incluye el relevamiento y la planificación inicial?',
          options: [
            'Relevamiento preliminar (necesidad, viabilidad, riesgos)',
            'Definición de objetivos y alcance',
            'Plan de trabajo (cronograma, recursos, presupuesto)',
            'Conversión al sistema nuevo',
            'Pruebas de aceptación del usuario',
          ],
          correctIndexes: [
            0,
            1,
            2,
          ],
          explain: 'El relevamiento y planificación inicial incluye relevamiento preliminar, definición de objetivos y alcance, y plan de trabajo. La conversión y las pruebas de aceptación pertenecen a fases posteriores.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-24-1',
        front: 'Relevamiento preliminar',
        back: 'Primera investigación para entender la necesidad del negocio, su viabilidad y los posibles riesgos.',
      },
      {
        id: 'fc-24-2',
        front: 'Definición de objetivos y alcance',
        back: 'Establecer qué se espera lograr con el sistema y, muy importante, qué no hará. Evita que el proyecto crezca descontroladamente.',
      },
      {
        id: 'fc-24-3',
        front: 'Requerimientos',
        back: 'Descripción detallada de las necesidades que el sistema debe satisfacer, planteadas por los usuarios o el cliente.',
      },
      {
        id: 'fc-24-4',
        front: 'Entrevistas',
        back: 'Conversaciones directas con los involucrados para obtener información cualitativa y profunda.',
      },
      {
        id: 'fc-24-5',
        front: 'Cuestionarios',
        back: 'Formularios con preguntas específicas, útiles para recopilar datos de un gran número de personas.',
      },
      {
        id: 'fc-24-6',
        front: 'Observación',
        back: 'Mirar directamente cómo los usuarios trabajan en su día a día. Sirve porque a veces lo que hacen difiere de lo que dicen.',
      },
      {
        id: 'fc-24-7',
        front: 'Revisión de registros',
        back: 'Analizar documentación existente (manuales, reportes, formularios) para comprender los procesos formales de la empresa.',
      },
    ],
  },

  // ---------- SECCIÓN 25 ----------
  {
    id: '25',
    unit: '11',
    title: 'El corazón del proceso: análisis y diseño',
    criollo:
      'Ya sabés qué se necesita; ahora definís cómo lo vas a construir. Para eso armás dos “planos”: el modelo lógico (el qué, sin tecnología) y el modelo físico (el cómo, con toda la tecnología y los detalles técnicos). Esta distinción es clave en ingeniería de software.',
    blocks: [
      {
        type: 'p',
        text: 'Una vez que sabemos qué se necesita, debemos definir cómo lo vamos a construir. Para esto, se crean dos tipos de “planos” o modelos. Esta distinción es fundamental en la ingeniería de software. En la etapa de diseño se determina cómo se cumplirá con los objetivos, ya que en la etapa de análisis se describió lo que debe hacer el sistema. En algunas oportunidades, el diseño puede dividirse en diseño general y diseño detallado.',
      },
      {
        type: 'h3',
        text: 'El modelo lógico (el “qué”)',
        criollo:
          'Es el plano conceptual: muestra la solución sin meterse con la tecnología. Es el puente de comunicación entre los usuarios y los técnicos.',
      },
      {
        type: 'p',
        text: 'El modelo lógico es un modelo conceptual que representa la solución, sin preocuparse por la tecnología. Es un puente de comunicación entre los usuarios y los técnicos, ya que se enfoca en los requisitos del negocio. A través de una representación gráfica, con apoyo escrito, define:',
      },
      {
        type: 'ul',
        items: [
          'Fuentes y destinos de la información: ¿de dónde vienen los datos y a quién se le entregan?',
          'Información que debe ser almacenada.',
          'Flujos de información: ¿cómo se mueven los datos a través del sistema?',
          'Procesos de transformación: ¿qué cálculos o cambios se le aplican a la información?',
          'Formato de los datos que componen la información.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Analogía: el modelo lógico es como el plano de un arquitecto. Muestra las habitaciones, sus funciones y cómo se conectan entre sí, pero no dice si las paredes serán de ladrillo o de yeso. Su objetivo es construir un modelo conceptual, entre el usuario y el especialista, que represente la solución propuesta, independientemente de los aspectos físicos del sistema.',
      },
      {
        type: 'h3',
        text: 'El modelo físico (el “cómo”)',
        criollo:
          'Traduce el modelo lógico a especificaciones técnicas concretas: acá sí entra la tecnología (hardware, software, bases de datos) y las limitaciones reales.',
      },
      {
        type: 'p',
        text: 'El modelo físico traduce el modelo lógico en especificaciones técnicas detalladas. Aquí sí se toma en cuenta la tecnología (hardware, software, bases de datos) y otras limitaciones reales. Define en detalle:',
      },
      {
        type: 'ul',
        items: [
          'Las salidas del sistema y las entradas del sistema (diseño de pantallas, reportes y formularios).',
          'Los archivos, bases de datos y estructuras de datos: la estructura exacta de las tablas, campos y relaciones.',
          'Los procesos computacionales, los procedimientos y tipos de procesos.',
          'Consideraciones de performance y tiempos de respuesta.',
          'Aspectos de control, seguridad y confidencialidad: cómo se protegerá la información y se asegurará su integridad.',
          'El hardware y software a emplear: qué servidores, sistemas operativos o lenguajes de programación se usarán.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/11/modelo-fisico.png',
        alt: 'Conjunto de ocho recuadros con los aspectos que define el modelo físico: salidas del sistema, entradas del sistema, procedimientos y tipos de proceso, procesos computacionales, archivos/BBDD y estructura de datos, consideraciones de performance y tiempos de respuesta, aspectos de control/seguridad/confidencialidad, y consideración del HW y SW a emplear.',
        caption: 'El modelo físico define en detalle salidas, entradas, procesos, archivos/BBDD, performance, control y el HW/SW a emplear. Fuente: elaboración propia (UP).',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Analogía: el modelo físico es como el plano de un ingeniero o constructor. Especifica el tipo de ladrillos, el calibre de los cables, la marca de las tuberías y todos los detalles necesarios para construir la casa que el arquitecto diseñó. Su objetivo es generar las especificaciones completas para poder construir el sistema y atender los aspectos relacionados con las limitaciones tecnológicas o humanas.',
      },
      {
        type: 'h3',
        text: 'El flujo de análisis y diseño',
        criollo:
          'El trabajo de análisis y diseño se encadena: relevás y analizás globalmente, después analizás los datos, y por último el análisis funcional. Cada paso alimenta al siguiente.',
      },
      {
        type: 'p',
        text: 'El análisis y diseño se desarrolla encadenando tres bloques de trabajo —relevamiento y análisis global, análisis de datos y análisis funcional— que toman como entrada los objetivos y alcances del proyecto, el plan de trabajo y los requerimientos, y producen el nuevo modelo lógico y físico:',
      },
      {
        type: 'table',
        caption: 'Tareas de cada bloque del análisis y diseño (elaboración propia, UP).',
        headers: ['Relevamiento y análisis global', 'Análisis de datos', 'Análisis funcional'],
        rows: [
          [
            'Preparar modelo físico y lógico de la situación actual.',
            'Revisar el modelo de datos original.',
            'Desarrollar el nuevo modelo físico.',
          ],
          [
            'Identificar requerimientos de entrada y salida.',
            'Identificar y normalizar entradas.',
            'Comparación con el análisis de datos.',
          ],
          [
            'Desarrollar el nuevo modelo lógico.',
            'Definir las vistas lógicas.',
            'Evaluar impacto del sistema.',
          ],
          [
            'Identificar y evaluar las alternativas de diseño.',
            'Cerrar el modelo de datos.',
            '—',
          ],
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/11/analisis-diseno.png',
        alt: 'Diagrama de tres procesos encadenados (Relevamiento y análisis global S1, Análisis de datos S2, Análisis funcional S3) con sus entradas y salidas y un cuadro de tareas debajo de cada uno.',
        caption: 'Análisis y diseño: relevamiento y análisis global (S1), análisis de datos (S2) y análisis funcional (S3). Fuente: elaboración propia (UP).',
      },
      {
        type: 'p',
        text: 'Los <strong>objetivos</strong> de esta etapa son: efectuar el relevamiento detallado, formular y evaluar alternativas de solución, formular el modelo lógico, formular el modelo físico y evaluar el riesgo de la aplicación.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-25-1',
          q: 'El modelo lógico representa la solución sin preocuparse por la tecnología.',
          a: true,
          explain: 'Correcto. El modelo lógico es un modelo conceptual que representa la solución sin preocuparse por la tecnología; es el puente entre usuarios y técnicos.',
        },
        {
          id: 'tf-25-2',
          q: 'El modelo físico se compara con el plano de un arquitecto.',
          a: false,
          explain: 'Falso. El plano del arquitecto es la analogía del modelo lógico. El modelo físico se compara con el plano de un ingeniero o constructor.',
        },
        {
          id: 'tf-25-3',
          q: 'El modelo físico define el hardware y software a emplear, performance y aspectos de seguridad.',
          a: true,
          explain: 'Tal cual: el modelo físico define salidas, entradas, procesos, archivos/BBDD, performance y tiempos de respuesta, control/seguridad/confidencialidad, considerando el HW y SW a emplear.',
        },
        {
          id: 'tf-25-4',
          q: 'En el diseño se describe lo que el sistema debe hacer; en el análisis se determina cómo se cumplirán los objetivos.',
          a: false,
          explain: 'Falso, está invertido. En el análisis se describe lo que el sistema debe hacer; en el diseño se determina cómo se cumplirá con los objetivos.',
        },
      ],
      mc: [
        {
          id: 'mc-25-1',
          q: '¿Cuál de estos aspectos define el modelo lógico?',
          options: [
            'La estructura exacta de tablas, campos y relaciones',
            'Las fuentes y destinos de la información y los flujos de información',
            'El calibre de los cables y la marca de las tuberías',
            'Los servidores y sistemas operativos a usar',
          ],
          correctIndex: 1,
          explain: 'El modelo lógico define fuentes y destinos de la información, información a almacenar, flujos, procesos de transformación y formato de los datos. La estructura física y la tecnología son del modelo físico.',
        },
        {
          id: 'mc-25-2',
          q: '¿Cuál es uno de los objetivos de la etapa de análisis y diseño?',
          options: [
            'Capacitar a los usuarios finales',
            'Evaluar el riesgo de la aplicación',
            'Apagar el sistema anterior',
            'Preparar el informe de posimplementación',
          ],
          correctIndex: 1,
          explain: 'Entre los objetivos están: relevamiento detallado, formular y evaluar alternativas, formular el modelo lógico, formular el modelo físico y evaluar el riesgo de la aplicación.',
        },
        {
          id: 'mc-25-3',
          q: 'En el flujo de análisis y diseño, “revisar el modelo de datos original, normalizar entradas y definir las vistas lógicas” corresponde a…',
          options: [
            'Relevamiento y análisis global',
            'Análisis de datos',
            'Análisis funcional',
            'Conversión',
          ],
          correctIndex: 1,
          explain: 'Esas tareas son del bloque de análisis de datos: revisar el modelo de datos original, identificar y normalizar entradas, definir las vistas lógicas y cerrar el modelo de datos.',
        },
      ],
      ms: [
        {
          id: 'ms-25-1',
          q: '¿Qué define el modelo físico?',
          options: [
            'Las salidas y entradas del sistema',
            'Los archivos, BBDD y estructuras de datos',
            'Consideraciones de performance y tiempos de respuesta',
            'El HW y SW a emplear',
            'La estrategia de marketing del producto',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'El modelo físico define salidas, entradas, procesos computacionales, archivos/BBDD, performance, control/seguridad y el HW/SW a emplear. La estrategia de marketing no forma parte del modelo físico.',
        },
        {
          id: 'ms-25-2',
          q: '¿Cuáles son objetivos de la etapa de análisis y diseño?',
          options: [
            'Efectuar el relevamiento detallado',
            'Formular y evaluar alternativas de solución',
            'Formular el modelo lógico y el modelo físico',
            'Evaluar el riesgo de la aplicación',
            'Realizar la conversión al sistema nuevo',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Los objetivos son: relevamiento detallado, formular y evaluar alternativas, formular el modelo lógico, formular el modelo físico y evaluar el riesgo. La conversión es una fase posterior.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-25-1',
        front: 'Modelo lógico',
        back: 'Modelo conceptual que representa la solución sin preocuparse por la tecnología. Puente entre usuarios y técnicos. Analogía: plano del arquitecto.',
      },
      {
        id: 'fc-25-2',
        front: 'Modelo físico',
        back: 'Traduce el modelo lógico a especificaciones técnicas detalladas, considerando tecnología y limitaciones reales. Analogía: plano del ingeniero/constructor.',
      },
      {
        id: 'fc-25-3',
        front: 'Análisis vs. diseño',
        back: 'En el análisis se describe lo que el sistema debe hacer; en el diseño se determina cómo se cumplirán los objetivos.',
      },
      {
        id: 'fc-25-4',
        front: 'Define el modelo lógico',
        back: 'Fuentes y destinos de la información, información a almacenar, flujos, procesos de transformación y formato de los datos.',
      },
      {
        id: 'fc-25-5',
        front: 'Define el modelo físico',
        back: 'Salidas y entradas, archivos/BBDD y estructuras, procesos computacionales, performance, control/seguridad y el HW/SW a emplear.',
      },
      {
        id: 'fc-25-6',
        front: 'Bloques del análisis y diseño',
        back: 'Relevamiento y análisis global (S1), análisis de datos (S2) y análisis funcional (S3).',
      },
      {
        id: 'fc-25-7',
        front: 'Objetivos del análisis y diseño',
        back: 'Relevamiento detallado, formular y evaluar alternativas, formular el modelo lógico y el físico, y evaluar el riesgo de la aplicación.',
      },
    ],
  },

  // ---------- SECCIÓN 26 ----------
  {
    id: '26',
    unit: '11',
    title: 'Fase de construcción: desarrollo y pruebas',
    criollo:
      'Con los planos detallados (modelo físico) en mano, llega la hora de construir: codificar, armar módulos chiquitos, probarlos, y preparar las pantallas con las que va a trabajar el usuario. Y antes de entregar, pruebas rigurosas en varios niveles.',
    blocks: [
      {
        type: 'p',
        text: 'Con los planos detallados (modelo físico) en mano, es hora de construir.',
      },
      {
        type: 'h3',
        text: 'Diseño detallado y programación',
        criollo:
          'En esta etapa, a menudo llamada simplemente “Desarrollo”, se escribe el código, se arman y prueban los módulos, y se prepara la interfaz de usuario.',
      },
      {
        type: 'p',
        text: 'Esta etapa, a menudo llamada "Desarrollo", consiste en:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Codificar los programas</strong>: los desarrolladores escriben el código fuente, basándose en las especificaciones.',
          '<strong>Diseñar y probar módulos</strong>: el sistema se construye en partes más pequeñas (módulos) que se prueban individualmente.',
          '<strong>Preparar la interfaz de usuario</strong>: se crean los menús y pantallas con los que interactuará el usuario final.',
        ],
      },
      {
        type: 'p',
        text: 'El diseño detallado encadena, a su vez, el <strong>diseño detallado</strong>, las <strong>instalaciones de software</strong> y la <strong>programación</strong>. Entre sus tareas figuran: desarrollar los diagramas de estructura; diseñar entradas, salidas y cálculos; diseñar controles y procedimientos de resguardo y recuperación; describir procesos manuales; identificar los posibles productos de software y definir criterios de evaluación; planificar la adaptación; y, finalmente, codificar y probar los programas, revisar la lógica, efectuar prueba de módulos y preparar menús y sentencias de control (CL).',
      },
      {
        type: 'figure',
        src: 'images/diagrams/11/diseno-detallado.png',
        alt: 'Diagrama de tres procesos encadenados (Diseño detallado S1, Instalaciones de software S2, Programación S3) con sus entradas, salidas y cuadros de tareas.',
        caption: 'Diseño detallado, instalaciones de software y programación, con sus tareas. Fuente: elaboración propia (UP).',
      },
      {
        type: 'h3',
        text: 'Pruebas del sistema',
        criollo:
          'Antes de entregar, hay que probar en serio. Aunque el apunte breve no las detalla, en la práctica hay varios niveles de prueba, de lo más chico (un módulo) a lo más grande (todo el sistema y la aceptación del usuario).',
      },
      {
        type: 'p',
        text: 'Antes de entregar el sistema, es crucial someterlo a pruebas rigurosas para asegurar su calidad. Aunque el documento no las detalla, en la práctica existen varios niveles de prueba:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Pruebas unitarias</strong>: probar cada módulo por separado.',
          '<strong>Pruebas de integración</strong>: verificar que los módulos funcionan bien juntos.',
          '<strong>Pruebas del sistema</strong>: probar el sistema completo, para asegurar que cumple con todos los requerimientos.',
          '<strong>Pruebas de aceptación del usuario (UAT)</strong>: el usuario final prueba el sistema, para darle su aprobación antes de la implementación.',
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Es lo mismo que armar un mueble: primero chequeás que cada pieza esté bien (unitarias), después que encajen entre sí (integración), después que el mueble entero se banque el peso (sistema), y al final que al que lo va a usar le sirva (aceptación).',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-26-1',
          q: 'En la fase de construcción, el sistema se construye en módulos más pequeños que se prueban individualmente.',
          a: true,
          explain: 'Correcto. Diseñar y probar módulos implica construir el sistema en partes más pequeñas que se prueban individualmente.',
        },
        {
          id: 'tf-26-2',
          q: 'Las pruebas de integración verifican que cada módulo funciona por separado.',
          a: false,
          explain: 'Falso. Eso son las pruebas unitarias. Las de integración verifican que los módulos funcionan bien juntos.',
        },
        {
          id: 'tf-26-3',
          q: 'En las pruebas de aceptación del usuario (UAT) es el usuario final quien prueba el sistema y da su aprobación.',
          a: true,
          explain: 'Tal cual: en las UAT el usuario final prueba el sistema para darle su aprobación antes de la implementación.',
        },
        {
          id: 'tf-26-4',
          q: 'Preparar la interfaz de usuario significa crear los menús y pantallas con los que interactúa el usuario final.',
          a: true,
          explain: 'Correcto. Preparar la interfaz de usuario consiste en crear los menús y pantallas con los que interactuará el usuario final.',
        },
      ],
      mc: [
        {
          id: 'mc-26-1',
          q: '¿Qué nivel de prueba consiste en probar el sistema completo para asegurar que cumple todos los requerimientos?',
          options: [
            'Pruebas unitarias',
            'Pruebas de integración',
            'Pruebas del sistema',
            'Pruebas de aceptación del usuario',
          ],
          correctIndex: 2,
          explain: 'Las pruebas del sistema prueban el sistema completo para asegurar que cumple con todos los requerimientos.',
        },
        {
          id: 'mc-26-2',
          q: '¿Cómo se llama a menudo la etapa de diseño detallado y programación?',
          options: [
            '"Análisis"',
            '"Desarrollo"',
            '"Conversión"',
            '"Implantación"',
          ],
          correctIndex: 1,
          explain: 'La etapa de diseño detallado y programación se llama a menudo simplemente "Desarrollo".',
        },
        {
          id: 'mc-26-3',
          q: 'Escribir el código fuente basándose en las especificaciones es…',
          options: [
            'Diseñar módulos',
            'Codificar los programas',
            'Preparar la interfaz de usuario',
            'Revisar registros',
          ],
          correctIndex: 1,
          explain: 'Codificar los programas es escribir el código fuente basándose en las especificaciones.',
        },
      ],
      ms: [
        {
          id: 'ms-26-1',
          q: '¿Cuáles son niveles de prueba del sistema mencionados?',
          options: [
            'Pruebas unitarias',
            'Pruebas de integración',
            'Pruebas del sistema',
            'Pruebas de aceptación del usuario (UAT)',
            'Pruebas de mercado',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Los niveles son: unitarias, de integración, del sistema y de aceptación del usuario (UAT). Las pruebas de mercado no figuran como nivel de prueba.',
        },
        {
          id: 'ms-26-2',
          q: '¿Qué tareas componen la etapa de "Desarrollo" (diseño detallado y programación)?',
          options: [
            'Codificar los programas',
            'Diseñar y probar módulos',
            'Preparar la interfaz de usuario',
            'Definir el presupuesto del proyecto',
            'Realizar el relevamiento preliminar',
          ],
          correctIndexes: [
            0,
            1,
            2,
          ],
          explain: 'La etapa de desarrollo incluye codificar los programas, diseñar y probar módulos y preparar la interfaz de usuario. El presupuesto y el relevamiento preliminar son de fases iniciales.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-26-1',
        front: 'Etapa de "Desarrollo"',
        back: 'Diseño detallado y programación: codificar los programas, diseñar y probar módulos, y preparar la interfaz de usuario.',
      },
      {
        id: 'fc-26-2',
        front: 'Codificar los programas',
        back: 'Los desarrolladores escriben el código fuente basándose en las especificaciones.',
      },
      {
        id: 'fc-26-3',
        front: 'Diseñar y probar módulos',
        back: 'El sistema se construye en partes más pequeñas (módulos) que se prueban individualmente.',
      },
      {
        id: 'fc-26-4',
        front: 'Pruebas unitarias',
        back: 'Probar cada módulo por separado.',
      },
      {
        id: 'fc-26-5',
        front: 'Pruebas de integración',
        back: 'Verificar que los módulos funcionan bien juntos.',
      },
      {
        id: 'fc-26-6',
        front: 'Pruebas del sistema',
        back: 'Probar el sistema completo para asegurar que cumple con todos los requerimientos.',
      },
      {
        id: 'fc-26-7',
        front: 'Pruebas de aceptación del usuario (UAT)',
        back: 'El usuario final prueba el sistema para darle su aprobación antes de la implementación.',
      },
    ],
  },

  // ---------- SECCIÓN 27 ----------
  {
    id: '27',
    unit: '11',
    title: 'Puesta en marcha: implantación y conversión',
    criollo:
      'Llegó el momento de reemplazar el sistema viejo por el nuevo: eso es la conversión. Es un momento crítico, así que hay distintas estrategias según cuánto riesgo querés correr y cuánta plata estás dispuesto a poner.',
    blocks: [
      {
        type: 'p',
        text: 'La conversión es el proceso de reemplazar el sistema antiguo por el nuevo. Es un momento crítico y existen diferentes estrategias para minimizar el riesgo.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Estrategia paralela</strong>: el sistema anterior y el nuevo operan juntos durante un tiempo.',
          '<strong>Estrategia de reemplazo directo</strong>: se reemplaza al sistema anterior en su totalidad por el nuevo sistema (se apaga el viejo y se enciende el nuevo en una fecha determinada).',
          '<strong>Estrategia de estudio piloto</strong>: se introduce una parte del sistema en solo un área limitada de la organización, por ejemplo en una sola sucursal, y, basándose en la retroalimentación, se efectúan los cambios para luego implementarlos en toda la organización.',
        ],
      },
      {
        type: 'table',
        caption: 'Estrategias de conversión: ventajas y desventajas (apunte UP).',
        headers: ['Estrategia', 'Descripción', 'Ventajas', 'Desventajas'],
        rows: [
          [
            'Paralela',
            'El sistema viejo y el nuevo funcionan a la vez durante un tiempo.',
            'Máxima seguridad: si el nuevo falla, el viejo sigue operando.',
            'Muy costosa. Requiere doble trabajo para los empleados.',
          ],
          [
            'Reemplazo directo',
            'Se apaga el sistema viejo y se enciende el nuevo en una fecha determinada.',
            'Rápida y menos costosa.',
            'Muy riesgosa: no hay vuelta atrás si algo sale mal.',
          ],
          [
            'Piloto',
            'Se implementa el sistema en un área pequeña o sucursal de la empresa.',
            'Permite probar el sistema en un entorno real pero controlado.',
            'El proceso total de implementación es más lento.',
          ],
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'El reemplazo directo es el más barato y rápido, pero es “a todo o nada”: si el sistema nuevo falla, no tenés red. La paralela es la más segura pero te hace pagar doble. El piloto es el equilibrio: probás en chico antes de jugártela en grande.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-27-1',
          q: 'La conversión es el proceso de reemplazar el sistema antiguo por el nuevo.',
          a: true,
          explain: 'Correcto. La conversión es el proceso de reemplazar el sistema antiguo por el nuevo, y es un momento crítico.',
        },
        {
          id: 'tf-27-2',
          q: 'La estrategia paralela es la más rápida y la menos costosa.',
          a: false,
          explain: 'Falso. La paralela es muy costosa y requiere doble trabajo. La rápida y menos costosa es el reemplazo directo.',
        },
        {
          id: 'tf-27-3',
          q: 'La principal desventaja del reemplazo directo es que no hay vuelta atrás si algo sale mal.',
          a: true,
          explain: 'Tal cual: el reemplazo directo es muy riesgoso porque no hay vuelta atrás si algo sale mal.',
        },
        {
          id: 'tf-27-4',
          q: 'La estrategia piloto implementa el sistema en toda la organización al mismo tiempo.',
          a: false,
          explain: 'Falso. El piloto se implementa en un área pequeña o sucursal; según la retroalimentación se ajusta y luego se extiende a toda la organización.',
        },
      ],
      mc: [
        {
          id: 'mc-27-1',
          q: '¿Cuál es la ventaja principal de la estrategia paralela?',
          options: [
            'Es la más rápida',
            'Máxima seguridad: si el nuevo falla, el viejo sigue operando',
            'No requiere trabajo extra',
            'Implementa todo de una sola vez',
          ],
          correctIndex: 1,
          explain: 'La ventaja de la paralela es la máxima seguridad: si el nuevo sistema falla, el viejo sigue operando.',
        },
        {
          id: 'mc-27-2',
          q: '¿Qué estrategia permite probar el sistema en un entorno real pero controlado?',
          options: [
            'Paralela',
            'Reemplazo directo',
            'Piloto',
            'Ninguna',
          ],
          correctIndex: 2,
          explain: 'El estudio piloto permite probar el sistema en un entorno real pero controlado, a costa de un proceso total de implementación más lento.',
        },
        {
          id: 'mc-27-3',
          q: '¿Cuál es la desventaja de la estrategia paralela?',
          options: [
            'Es muy riesgosa',
            'Es muy costosa y requiere doble trabajo',
            'Es muy lenta de implementar en total',
            'No permite vuelta atrás',
          ],
          correctIndex: 1,
          explain: 'La paralela es muy costosa y requiere doble trabajo para los empleados, porque hay que operar los dos sistemas a la vez.',
        },
      ],
      ms: [
        {
          id: 'ms-27-1',
          q: '¿Cuáles son estrategias de conversión mencionadas en el apunte?',
          options: [
            'Paralela',
            'Reemplazo directo',
            'Estudio piloto',
            'Migración en la nube',
            'Tercerización total',
          ],
          correctIndexes: [
            0,
            1,
            2,
          ],
          explain: 'Las estrategias son: paralela, reemplazo directo y estudio piloto. La migración en la nube y la tercerización no figuran como estrategias de conversión.',
        },
        {
          id: 'ms-27-2',
          q: '¿Qué afirmaciones son correctas sobre las estrategias de conversión?',
          options: [
            'La paralela ofrece máxima seguridad',
            'El reemplazo directo es rápido y menos costoso',
            'El piloto se prueba en un área limitada',
            'El reemplazo directo es el más seguro',
            'La paralela es la más barata',
          ],
          correctIndexes: [
            0,
            1,
            2,
          ],
          explain: 'La paralela da máxima seguridad pero es costosa; el reemplazo directo es rápido y barato pero muy riesgoso; el piloto se prueba en un área limitada. El reemplazo directo NO es el más seguro y la paralela NO es la más barata.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-27-1',
        front: 'Conversión',
        back: 'Proceso de reemplazar el sistema antiguo por el nuevo. Es un momento crítico y existen distintas estrategias para minimizar el riesgo.',
      },
      {
        id: 'fc-27-2',
        front: 'Estrategia paralela',
        back: 'El sistema viejo y el nuevo funcionan a la vez un tiempo. Máxima seguridad, pero muy costosa y con doble trabajo.',
      },
      {
        id: 'fc-27-3',
        front: 'Reemplazo directo',
        back: 'Se apaga el viejo y se enciende el nuevo en una fecha. Rápido y barato, pero muy riesgoso: no hay vuelta atrás.',
      },
      {
        id: 'fc-27-4',
        front: 'Estudio piloto',
        back: 'Se implementa en un área pequeña o sucursal; según la retroalimentación se ajusta y luego se extiende a toda la organización. Entorno real pero controlado; total más lento.',
      },
    ],
  },

  // ---------- SECCIÓN 28 ----------
  {
    id: '28',
    unit: '11',
    title: 'Seguimiento, control y planes de contingencia',
    criollo:
      'El trabajo no termina cuando el sistema se enciende. Hay que monitorearlo para ver si realmente resuelve el problema, si los usuarios están conformes, y revisar la parte técnica. Y además tener un plan B (contingencia) para cuando algo se vaya al carajo.',
    blocks: [
      {
        type: 'p',
        text: 'El trabajo no termina cuando el sistema se enciende. Es vital monitorear el sistema en operación.',
      },
      {
        type: 'h3',
        text: 'Seguimiento, control y evaluación',
        criollo:
          'Mantenés el sistema bajo observación para verificar que cumple objetivos, medir si el usuario está conforme y revisar lo técnico, para corregir a tiempo.',
      },
      {
        type: 'p',
        text: 'Es vital monitorear el sistema en operación para:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Verificar el cumplimiento de objetivos</strong>: ¿el sistema realmente soluciona el problema para el cual fue creado?',
          '<strong>Medir la satisfacción del usuario</strong>: ¿están los usuarios contentos y usando el sistema correctamente?',
          '<strong>Realizar revisiones técnicas</strong>: se revisa periódicamente el hardware, el software y la documentación, para asegurar que todo esté actualizado y funcionando de manera óptima.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/11/seguimiento-control.png',
        alt: 'Diagrama del proceso "Seguimiento y control" con entradas (sistema en operación, documentación actualizada), salida (información posimplementación) y un cuadro de tareas: efectuar revisión administrativa, de hardware y software, de la documentación, y preparar el informe final de posimplementación.',
        caption: 'Seguimiento y control: revisión administrativa, de HW/SW y de documentación, e informe final de posimplementación. Fuente: elaboración propia (UP).',
      },
      {
        type: 'p',
        text: 'La <strong>evaluación del sistema</strong> tiene como objetivos: detectar oportunamente los hechos que pueden derivar en actitudes negativas; verificar el cumplimiento de los objetivos iniciales; medir el grado de satisfacción de los usuarios; identificar oportunamente necesidades de entrenamiento y capacitación; y tomar acciones correctivas “a tiempo”.',
      },
      {
        type: 'h3',
        text: 'Planes de contingencia',
        criollo:
          'Toda organización tiene que estar preparada para lo inesperado. El plan de contingencia busca que el negocio siga funcionando aunque pase algo grave.',
      },
      {
        type: 'p',
        text: 'Toda organización debe estar preparada para lo inesperado. Un plan de contingencia busca asegurar la continuidad del negocio ante emergencias y prever continuidad a las operaciones y servicios críticos de cada negocio, en caso de eventualidades que las pudieran afectar. Ejemplos de eventualidades:',
      },
      {
        type: 'ul',
        items: [
          'Desastres naturales.',
          'Interrupción de suministros básicos.',
          'Intrusiones, vandalismo y terrorismo.',
          'Aumento inesperado de la carga de trabajo.',
          'Fallas de equipamiento.',
          'Otros peligros.',
        ],
      },
      {
        type: 'p',
        text: 'Las <strong>etapas</strong> para crear un plan de contingencia robusto incluyen:',
      },
      {
        type: 'ol',
        items: [
          'Análisis de riesgo: identificar qué podría salir mal.',
          'Creación del plan de contingencia: definir los pasos a seguir en caso de emergencia.',
          'Prueba del plan: realizar simulacros para asegurar que el plan funciona.',
          'Distribución del plan.',
          'Aplicación.',
          'Revisión continua: mantener el plan actualizado.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'El seguimiento no es opcional: es lo que te confirma si el sistema realmente resolvió el problema o todavía le falta. Y el plan de contingencia es el seguro contra catástrofes: no sirve de nada tenerlo guardado si nunca lo probaste con un simulacro.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-28-1',
          q: 'El seguimiento y control busca verificar el cumplimiento de objetivos y medir la satisfacción del usuario.',
          a: true,
          explain: 'Correcto. Monitorear el sistema en operación sirve para verificar el cumplimiento de objetivos, medir la satisfacción del usuario y realizar revisiones técnicas.',
        },
        {
          id: 'tf-28-2',
          q: 'Un plan de contingencia busca asegurar la continuidad del negocio ante emergencias.',
          a: true,
          explain: 'Tal cual: el plan de contingencia busca asegurar la continuidad de las operaciones y servicios críticos ante eventualidades y emergencias.',
        },
        {
          id: 'tf-28-3',
          q: 'Probar el plan de contingencia mediante simulacros no es necesario si el plan está bien escrito.',
          a: false,
          explain: 'Falso. La prueba del plan (simulacros) es una etapa explícita para asegurar que el plan realmente funciona.',
        },
        {
          id: 'tf-28-4',
          q: 'Un aumento inesperado de la carga de trabajo es un ejemplo de eventualidad que cubre un plan de contingencia.',
          a: true,
          explain: 'Correcto. Entre las eventualidades figuran desastres naturales, interrupción de suministros, intrusiones, aumento inesperado de la carga de trabajo y fallas de equipamiento.',
        },
      ],
      mc: [
        {
          id: 'mc-28-1',
          q: '¿Cuál es la primera etapa para crear un plan de contingencia robusto?',
          options: [
            'Aplicación',
            'Análisis de riesgo',
            'Distribución del plan',
            'Prueba del plan',
          ],
          correctIndex: 1,
          explain: 'La primera etapa es el análisis de riesgo: identificar qué podría salir mal.',
        },
        {
          id: 'mc-28-2',
          q: '¿Cuál de estos NO es un objetivo de la evaluación del sistema?',
          options: [
            'Verificar el cumplimiento de los objetivos iniciales',
            'Medir el grado de satisfacción de los usuarios',
            'Identificar necesidades de entrenamiento y capacitación',
            'Definir el presupuesto del proyecto',
          ],
          correctIndex: 3,
          explain: 'Definir el presupuesto es de las fases iniciales. La evaluación del sistema busca detectar hechos negativos, verificar objetivos, medir satisfacción, identificar necesidades de capacitación y tomar acciones correctivas a tiempo.',
        },
        {
          id: 'mc-28-3',
          q: 'Las revisiones técnicas del seguimiento y control abarcan periódicamente…',
          options: [
            'Solo el hardware',
            'El hardware, el software y la documentación',
            'Solo la base de datos',
            'Solo la interfaz de usuario',
          ],
          correctIndex: 1,
          explain: 'Las revisiones técnicas revisan periódicamente el hardware, el software y la documentación, para asegurar que todo esté actualizado y funcionando óptimamente.',
        },
      ],
      ms: [
        {
          id: 'ms-28-1',
          q: '¿Cuáles son etapas para crear un plan de contingencia?',
          options: [
            'Análisis de riesgo',
            'Creación del plan',
            'Prueba del plan (simulacros)',
            'Revisión continua',
            'Venta del plan a un tercero',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Las etapas son: análisis de riesgo, creación del plan, prueba del plan, distribución, aplicación y revisión continua. La venta del plan a un tercero no es una etapa.',
        },
        {
          id: 'ms-28-2',
          q: '¿Qué objetivos tiene la evaluación del sistema?',
          options: [
            'Detectar hechos que puedan derivar en actitudes negativas',
            'Verificar el cumplimiento de los objetivos iniciales',
            'Medir el grado de satisfacción de los usuarios',
            'Tomar acciones correctivas a tiempo',
            'Elegir el lenguaje de programación',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'La evaluación busca detectar hechos negativos, verificar objetivos, medir satisfacción, identificar necesidades de capacitación y tomar acciones correctivas a tiempo. Elegir el lenguaje es de la etapa de diseño.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-28-1',
        front: 'Seguimiento y control',
        back: 'Monitorear el sistema en operación para verificar el cumplimiento de objetivos, medir la satisfacción del usuario y realizar revisiones técnicas (HW, SW y documentación).',
      },
      {
        id: 'fc-28-2',
        front: 'Tareas del seguimiento y control',
        back: 'Revisión administrativa, revisión de HW y SW, revisión de la documentación y preparar el informe final de posimplementación.',
      },
      {
        id: 'fc-28-3',
        front: 'Evaluación del sistema',
        back: 'Detectar hechos negativos a tiempo, verificar objetivos iniciales, medir satisfacción de usuarios, identificar necesidades de capacitación y tomar acciones correctivas a tiempo.',
      },
      {
        id: 'fc-28-4',
        front: 'Plan de contingencia',
        back: 'Busca asegurar la continuidad del negocio y de los servicios críticos ante eventualidades y emergencias (desastres, fallas de equipo, intrusiones, etc.).',
      },
      {
        id: 'fc-28-5',
        front: 'Etapas del plan de contingencia',
        back: 'Análisis de riesgo, creación del plan, prueba del plan (simulacros), distribución, aplicación y revisión continua.',
      },
      {
        id: 'fc-28-6',
        front: 'Eventualidades cubiertas',
        back: 'Desastres naturales, interrupción de suministros básicos, intrusiones/vandalismo/terrorismo, aumento inesperado de carga de trabajo, fallas de equipamiento y otros peligros.',
      },
    ],
  },

  // ========================================================================
  // UNIDAD 12 — Comunicación oral y escrita
  // ========================================================================

  // ---------- SECCIÓN 29 ----------
  {
    id: '29',
    unit: '12',
    title: 'La comunicación oral y escrita: la base de la lengua',
    criollo:
      'La lengua, en el fondo, es sonido: le entra al otro por el oído. La escritura es una forma secundaria que entra por la vista. Hablando te podés dar el lujo de dejar frases a medias porque el otro te entiende con un gesto; escribiendo no, ahí tenés que ser completo y claro porque no hay nadie para repreguntarte.',
    blocks: [
      {
        type: 'p',
        text: 'La base material de la lengua es el sonido, y el sentido al que predominantemente impresiona es el oído. A través de otro sentido, que es la vista, se percibe una forma secundaria de la lengua: la escritura.',
      },
      {
        type: 'h3',
        text: 'La comunicación oral',
        criollo:
          'Hablando, no solo importan las palabras: también la entonación y el énfasis, que el otro interpreta a su manera. Y si no te entendió, repetís o lo explicás de otra forma.',
      },
      {
        type: 'p',
        text: 'Nos hacemos comprender por las palabras, los enunciados, las frases, pero también por la entonación y el énfasis que les damos a los términos y que el interlocutor interpreta a su manera. Las frases, muchas veces, se dejan truncas y se termina el mensaje con algún gesto, porque captamos que el interlocutor ya nos entendió. Si el interlocutor no nos ha comprendido, podemos repetir el mensaje o explicarlo de otra manera.',
      },
      {
        type: 'h3',
        text: 'La comunicación escrita',
        criollo:
          'Escribiendo, la entonación la reemplazás con signos de puntuación. Y como no hay feedback en el momento, las frases tienen que estar completas y sin ambigüedades.',
      },
      {
        type: 'p',
        text: 'En la comunicación escrita, transcribimos la entonación por signos de puntuación. Las frases deben ser completas, pues no se puede constatar si el lector interpretó lo que no escribimos. Es por esta misma razón que se deben evitar ambigüedades y tener cuidado con los giros del lenguaje.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Resumen fácil: hablando, el gesto y el tono te salvan; escribiendo, estás solo con tus palabras. Por eso lo escrito tiene que ser más prolijo, completo y sin doble sentido.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-29-1',
          q: 'La base material de la lengua es el sonido y el sentido al que impresiona predominantemente es el oído.',
          a: true,
          explain: 'Tal cual el apunte: la base material de la lengua es el sonido, y el sentido al que predominantemente impresiona es el oído.',
        },
        {
          id: 'tf-29-2',
          q: 'La escritura es la forma primaria de la lengua y se percibe por el oído.',
          a: false,
          explain: 'Falso. La escritura es una forma secundaria de la lengua y se percibe a través de la vista.',
        },
        {
          id: 'tf-29-3',
          q: 'En la comunicación escrita la entonación se transcribe mediante signos de puntuación.',
          a: true,
          explain: 'Correcto. En la comunicación escrita transcribimos la entonación por signos de puntuación.',
        },
        {
          id: 'tf-29-4',
          q: 'En la comunicación oral nunca se dejan frases truncas.',
          a: false,
          explain: 'Falso. En la oral las frases muchas veces se dejan truncas y se cierra el mensaje con un gesto, porque captamos que el interlocutor ya entendió.',
        },
      ],
      mc: [
        {
          id: 'mc-29-1',
          q: '¿Por qué en la comunicación escrita las frases deben ser completas?',
          options: [
            'Porque es más elegante',
            'Porque no se puede constatar si el lector interpretó lo que no escribimos',
            'Porque lo exige la gramática',
            'Porque el papel es caro',
          ],
          correctIndex: 1,
          explain: 'Las frases deben ser completas porque no se puede constatar si el lector interpretó lo que no escribimos; por eso hay que evitar ambigüedades.',
        },
        {
          id: 'mc-29-2',
          q: 'Además de las palabras, ¿qué interpreta el interlocutor a su manera en la comunicación oral?',
          options: [
            'La ortografía',
            'La entonación y el énfasis',
            'Los signos de puntuación',
            'El formato del texto',
          ],
          correctIndex: 1,
          explain: 'Nos hacemos comprender por las palabras, pero también por la entonación y el énfasis que damos a los términos, que el interlocutor interpreta a su manera.',
        },
        {
          id: 'mc-29-3',
          q: 'En la comunicación oral, si el interlocutor no comprende, ¿qué podemos hacer?',
          options: [
            'Repetir el mensaje o explicarlo de otra manera',
            'Nada, ya es tarde',
            'Cambiar de tema',
            'Escribirlo obligatoriamente',
          ],
          correctIndex: 0,
          explain: 'Si el interlocutor no comprendió, podemos repetir el mensaje o explicarlo de otra manera. Esa posibilidad de corrección inmediata distingue a la comunicación oral.',
        },
      ],
      ms: [
        {
          id: 'ms-29-1',
          q: '¿Qué afirmaciones son correctas sobre la comunicación escrita?',
          options: [
            'La entonación se transcribe por signos de puntuación',
            'Las frases deben ser completas',
            'Se deben evitar ambigüedades',
            'Hay que cuidar los giros del lenguaje',
            'El gesto reemplaza a las palabras',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'En la escrita la entonación se transcribe por signos de puntuación, las frases deben ser completas, se evitan ambigüedades y se cuidan los giros del lenguaje. El gesto pertenece a la comunicación oral.',
        },
        {
          id: 'ms-29-2',
          q: '¿Qué caracteriza a la comunicación oral según el apunte?',
          options: [
            'Importa la entonación y el énfasis',
            'A veces las frases se dejan truncas y se cierran con un gesto',
            'Si no se entendió, se puede repetir o explicar de otra manera',
            'El sentido predominante es el oído',
            'No admite ninguna corrección posterior',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'La oral se apoya en entonación y énfasis, permite frases truncas cerradas con gestos, admite repetir o reexplicar, e impresiona predominantemente al oído. Justamente SÍ admite corrección inmediata.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-29-1',
        front: 'Base material de la lengua',
        back: 'El sonido; el sentido al que impresiona predominantemente es el oído.',
      },
      {
        id: 'fc-29-2',
        front: 'La escritura',
        back: 'Forma secundaria de la lengua, percibida a través de la vista.',
      },
      {
        id: 'fc-29-3',
        front: 'Entonación en lo escrito',
        back: 'Se transcribe mediante signos de puntuación.',
      },
      {
        id: 'fc-29-4',
        front: 'Frases en lo escrito',
        back: 'Deben ser completas, porque no se puede constatar si el lector interpretó lo que no escribimos. Hay que evitar ambigüedades y cuidar los giros del lenguaje.',
      },
      {
        id: 'fc-29-5',
        front: 'Frases en lo oral',
        back: 'Muchas veces se dejan truncas y se cierran con un gesto, porque captamos que el interlocutor ya entendió. Si no entendió, se repite o reexplica.',
      },
    ],
  },

  // ---------- SECCIÓN 30 ----------
  {
    id: '30',
    unit: '12',
    title: 'El proceso de comunicación',
    criollo:
      'Comunicar no es solo hablar: es un proceso circular entre dos o más partes. Alguien arma un mensaje (emisor), lo manda por un canal (medio), y otro lo recibe e interpreta (receptor). Y lo más importante: el receptor responde (retroalimentación). Si nadie escucha, la comunicación vale cero.',
    blocks: [
      {
        type: 'p',
        text: 'La comunicación es un proceso dinámico y circular, en el que se intercambia información entre dos o más partes. Para que sea efectiva, todos sus componentes deben funcionar en armonía.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/12/proceso-comunicacion.png',
        alt: 'Diagrama del proceso de comunicación con cuatro columnas (Emisor: quién habla; Medio: virtuales, intranet, orales, escritos, digitales; Mensaje: información, publicidad, solicitud, instrucción, corrección, capacitación; Receptor: el que recibe la información) y una flecha doble central de Retroalimentación/Escuchar.',
        caption: 'El proceso de comunicación: emisor, medio, mensaje, receptor y la retroalimentación (escuchar). “Si no está dispuesto a escuchar, el producto de la comunicación es nulo.” Fuente: elaboración propia (UP).',
      },
      {
        type: 'h3',
        text: 'Emisor',
        criollo: 'Es quien arranca el mensaje. No solo “habla”: codifica una idea en un lenguaje que el otro pueda entender.',
      },
      {
        type: 'p',
        text: 'El <strong>emisor</strong> es quien origina el mensaje, la fuente de la información. No solo “habla”, sino que codifica un pensamiento o una idea en un lenguaje comprensible. El emisor tiene una intención comunicativa (informar, persuadir, solicitar, etc.). El éxito de la comunicación depende, en gran medida, de su habilidad para adaptar el mensaje al receptor y al contexto.',
      },
      {
        type: 'h3',
        text: 'Mensaje',
        criollo: 'Es la información en sí: puede ser una instrucción, una solicitud, una pieza publicitaria o una capacitación.',
      },
      {
        type: 'p',
        text: 'El <strong>mensaje</strong> es la información misma que se transmite. Puede ser una instrucción, una solicitud, una pieza publicitaria o una capacitación. Ejemplo: en un correo electrónico (medio), un gerente (emisor) envía a su equipo las “Instrucciones para el nuevo reporte de ventas” (mensaje).',
      },
      {
        type: 'h3',
        text: 'Medio (o canal)',
        criollo: 'Es el vehículo por donde viaja el mensaje. Elegirlo bien es estratégico: no comunicás igual un despido que un asado de la empresa.',
      },
      {
        type: 'p',
        text: 'El <strong>medio</strong> (o canal) es el vehículo a través del cual viaja el mensaje. Puede ser oral, escrito, digital o virtual. La elección del medio es estratégica: no es lo mismo comunicar un despido (idealmente, oral y en persona) que anunciar un evento social de la empresa (un correo electrónico o la intranet son adecuados). Un medio inadecuado puede distorsionar el mensaje.',
      },
      {
        type: 'h3',
        text: 'Receptor',
        criollo: 'Es quien recibe y decodifica. No es pasivo: interpreta el mensaje según lo que sabe, vivió y percibe.',
      },
      {
        type: 'p',
        text: 'El <strong>receptor</strong> es quien recibe y decodifica la información. El receptor no es un agente pasivo: interpreta el mensaje basándose en sus conocimientos, experiencias y percepciones.',
      },
      {
        type: 'h3',
        text: 'Retroalimentación (feedback)',
        criollo: 'Es la respuesta del receptor. Cierra el círculo y te dice si el mensaje llegó bien. Y se apoya en una habilidad clave: saber escuchar.',
      },
      {
        type: 'p',
        text: 'La <strong>retroalimentación</strong> (feedback) es la respuesta del receptor al mensaje del emisor. Este elemento es crucial porque cierra el círculo de la comunicación y le permite al emisor saber si su mensaje fue recibido y comprendido correctamente. La retroalimentación se basa en una habilidad fundamental: saber escuchar.',
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Principio clave: “Si no está dispuesto a escuchar, el producto de la comunicación es nulo”. La comunicación es un diálogo, no un monólogo. Sin escucha activa no hay retroalimentación, y sin retroalimentación no podemos saber si la comunicación fue exitosa.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-30-1',
          q: 'La comunicación es un proceso dinámico y circular entre dos o más partes.',
          a: true,
          explain: 'Correcto. El apunte define la comunicación como un proceso dinámico y circular en el que se intercambia información entre dos o más partes.',
        },
        {
          id: 'tf-30-2',
          q: 'El receptor es un agente pasivo que solo recibe el mensaje sin interpretarlo.',
          a: false,
          explain: 'Falso. El receptor NO es pasivo: interpreta el mensaje basándose en sus conocimientos, experiencias y percepciones.',
        },
        {
          id: 'tf-30-3',
          q: 'La retroalimentación cierra el círculo de la comunicación y se basa en saber escuchar.',
          a: true,
          explain: 'Tal cual: la retroalimentación cierra el círculo y le permite al emisor saber si el mensaje se comprendió; se basa en la habilidad de saber escuchar.',
        },
        {
          id: 'tf-30-4',
          q: 'La elección del medio es indistinta: cualquier canal sirve igual para cualquier mensaje.',
          a: false,
          explain: 'Falso. La elección del medio es estratégica; un medio inadecuado puede distorsionar el mensaje (no es lo mismo comunicar un despido que un evento social).',
        },
      ],
      mc: [
        {
          id: 'mc-30-1',
          q: '¿Qué componente codifica un pensamiento o idea en un lenguaje comprensible?',
          options: [
            'El receptor',
            'El emisor',
            'El canal',
            'La retroalimentación',
          ],
          correctIndex: 1,
          explain: 'El emisor origina el mensaje y codifica un pensamiento o idea en un lenguaje comprensible; tiene una intención comunicativa.',
        },
        {
          id: 'mc-30-2',
          q: 'En el ejemplo del apunte, el correo electrónico que usa el gerente es el…',
          options: [
            'Mensaje',
            'Emisor',
            'Medio',
            'Receptor',
          ],
          correctIndex: 2,
          explain: 'En el ejemplo, el correo electrónico es el medio; el gerente es el emisor y las “Instrucciones para el nuevo reporte de ventas” son el mensaje.',
        },
        {
          id: 'mc-30-3',
          q: 'Según el principio clave del apunte, si no se está dispuesto a escuchar…',
          options: [
            'La comunicación es más rápida',
            'El producto de la comunicación es nulo',
            'El mensaje se refuerza',
            'El emisor ahorra tiempo',
          ],
          correctIndex: 1,
          explain: 'El principio clave dice: “Si no está dispuesto a escuchar, el producto de la comunicación es nulo”. Sin escucha no hay retroalimentación.',
        },
      ],
      ms: [
        {
          id: 'ms-30-1',
          q: '¿Cuáles son componentes del proceso de comunicación?',
          options: [
            'Emisor',
            'Mensaje',
            'Medio (o canal)',
            'Receptor',
            'Presupuesto',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Los componentes son emisor, mensaje, medio (o canal), receptor y retroalimentación. El presupuesto no es un componente del proceso de comunicación.',
        },
        {
          id: 'ms-30-2',
          q: '¿Qué afirmaciones son correctas sobre la retroalimentación (feedback)?',
          options: [
            'Es la respuesta del receptor al mensaje del emisor',
            'Cierra el círculo de la comunicación',
            'Se basa en saber escuchar',
            'Le permite al emisor saber si el mensaje se comprendió',
            'Es exclusiva de la comunicación escrita',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'La retroalimentación es la respuesta del receptor, cierra el círculo, se basa en saber escuchar y le permite al emisor confirmar la comprensión. No es exclusiva de lo escrito.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-30-1',
        front: 'Comunicación',
        back: 'Proceso dinámico y circular en el que se intercambia información entre dos o más partes. Para ser efectiva, todos sus componentes deben funcionar en armonía.',
      },
      {
        id: 'fc-30-2',
        front: 'Emisor',
        back: 'Quien origina el mensaje; codifica un pensamiento o idea en lenguaje comprensible. Tiene una intención comunicativa (informar, persuadir, solicitar).',
      },
      {
        id: 'fc-30-3',
        front: 'Mensaje',
        back: 'La información misma que se transmite: una instrucción, solicitud, pieza publicitaria o capacitación.',
      },
      {
        id: 'fc-30-4',
        front: 'Medio (o canal)',
        back: 'El vehículo por el que viaja el mensaje (oral, escrito, digital o virtual). Su elección es estratégica; uno inadecuado distorsiona el mensaje.',
      },
      {
        id: 'fc-30-5',
        front: 'Receptor',
        back: 'Quien recibe y decodifica la información. No es pasivo: interpreta según sus conocimientos, experiencias y percepciones.',
      },
      {
        id: 'fc-30-6',
        front: 'Retroalimentación (feedback)',
        back: 'Respuesta del receptor al emisor. Cierra el círculo de la comunicación y se basa en saber escuchar.',
      },
      {
        id: 'fc-30-7',
        front: 'Principio clave',
        back: '“Si no está dispuesto a escuchar, el producto de la comunicación es nulo.” La comunicación es un diálogo, no un monólogo.',
      },
    ],
  },

  // ---------- SECCIÓN 31 ----------
  {
    id: '31',
    unit: '12',
    title: 'Oratoria: el arte de hablar en público',
    criollo:
      'Oratoria es el arte de hablar con elocuencia para persuadir, convencer o conmover a un auditorio. Y ojo: un buen orador no improvisa, se prepara. Dicen que la preparación es el 90 % del éxito. Acá van las bases del estilo y los pasos para preparar un discurso que se recuerde.',
    blocks: [
      {
        type: 'p',
        text: 'La oratoria es el arte de hablar con elocuencia, es decir, con la capacidad de expresarse de manera eficaz para persuadir, convencer o conmover a un auditorio. Es un género que se concreta en distintas formas: discursos, conferencias, exposiciones, disertaciones y debates. La utilización del lenguaje puede ser oral, escrita, gestual y gráfica.',
      },
      {
        type: 'h3',
        text: 'Bases para un estilo oratorio eficaz',
        criollo:
          'Para que un discurso quede en la memoria y cumpla su objetivo, se apoya en varios principios. Resumido: que se entienda, que sea simple, que vaya al grano, que tenga hilo, que fluya, que sea natural y que pegue.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Claridad</strong>: las ideas deben ser transparentes y fáciles de entender. Evitá el lenguaje excesivamente técnico o la jerga si tu audiencia no está familiarizada con ella.',
          '<strong>Sencillez</strong>: usá un lenguaje directo y sin adornos innecesarios. La sencillez no es simpleza, es elegancia comunicativa.',
          '<strong>Concisión</strong>: expresá las ideas con el menor número de palabras posible, yendo a lo esencial. En lugar de “El punto que estoy tratando de hacer es que debemos considerar la posibilidad de...”, decí directamente: “Propongo que consideremos...”.',
          '<strong>Coherencia</strong>: el discurso debe tener un hilo conductor claro, donde cada parte se conecte lógicamente con la anterior.',
          '<strong>Fluidez</strong>: mantené la expresividad a lo largo de todo el discurso.',
          '<strong>Naturalidad</strong>: sé vos mismo. Un orador auténtico y espontáneo genera más confianza y conexión con el público.',
          '<strong>Impacto</strong>: buscá que tu mensaje deje una impresión duradera. Se logra con un buen comienzo, un final potente, historias relevantes o datos sorprendentes.',
        ],
      },
      {
        type: 'h3',
        text: 'La preparación del discurso: el 90 % del éxito',
        criollo:
          'Un buen orador no improvisa. Elegís el tema y el objetivo, analizás a quién le hablás y el contexto, investigás, organizás el contenido y practicás midiendo el tiempo.',
      },
      {
        type: 'p',
        text: 'Un buen orador no improvisa, se prepara. Los pasos para una preparación metódica son:',
      },
      {
        type: 'ol',
        items: [
          '<strong>Elección del tema y objetivo</strong>: ¿de qué voy a hablar y qué quiero lograr con ello (informar, motivar, vender)?',
          '<strong>Análisis del auditorio y contexto</strong>: ¿quiénes me van a escuchar? ¿Qué saben del tema? ¿Cuál es su actitud? ¿En qué lugar y situación se dará la charla? Adaptar el mensaje a la audiencia es clave.',
          '<strong>Investigación y organización</strong>: recopilá información de fuentes fiables (experiencia personal y ajena, bibliografía) y estructurá el contenido en introducción, cuerpo y conclusión.',
          '<strong>Práctica</strong>: repetí el discurso varias veces, medí el tiempo y familiarizate con el contenido. Esto te dará fluidez y confianza.',
        ],
      },
      {
        type: 'p',
        text: 'La estructura del contenido se organiza en un esquema de redacción de tres partes:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Introducción</strong>: captá la atención y presentá el tema central / el objetivo.',
          '<strong>Cuerpo</strong>: desarrollá las ideas principales y secundarias con argumentos, datos y ejemplos.',
          '<strong>Conclusión</strong>: resumí lo más importante y cerrá con una llamada a la acción o una reflexión final (perspectivas, cierre).',
        ],
      },
      {
        type: 'h3',
        text: 'La comunicación hablada: respiración y objetividad',
        criollo:
          'Para hablar en público también cuenta el cuerpo: respirar bien y estar relajado. Y la exposición conviene que sea objetiva, clara y exacta, sin andar metiendo emociones personales.',
      },
      {
        type: 'p',
        text: 'Las técnicas de respiración son importantes: respiración diafragmática, desarrollar una adecuada relajación, no respirar por la boca, vestir ropa cómoda y no ajustada, y practicar el script (guion) varias veces.',
      },
      {
        type: 'p',
        text: 'La exposición debe ser una <strong>exposición objetiva de razonamientos y juicios</strong>, evitando manifestaciones de interés personal o reflejar emociones. Se busca esencialmente la claridad y exactitud en la exposición de los temas, y brindar información objetiva.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text: 'Moraleja: el talento ayuda, pero lo que de verdad te salva es preparar. Tema y objetivo claros, conocer a tu público, investigar, armar intro-cuerpo-conclusión y ensayar con cronómetro. Eso es el 90 % del éxito.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-31-1',
          q: 'La oratoria es el arte de hablar con elocuencia para persuadir, convencer o conmover a un auditorio.',
          a: true,
          explain: 'Correcto, es la definición textual del apunte.',
        },
        {
          id: 'tf-31-2',
          q: 'Según el apunte, un buen orador improvisa en el momento para sonar más natural.',
          a: false,
          explain: 'Falso. Un buen orador NO improvisa, se prepara. La preparación se describe como el 90 % del éxito.',
        },
        {
          id: 'tf-31-3',
          q: 'La concisión consiste en expresar las ideas con el menor número de palabras posible, yendo a lo esencial.',
          a: true,
          explain: 'Tal cual: la concisión es expresar las ideas con el menor número de palabras, yendo a lo esencial.',
        },
        {
          id: 'tf-31-4',
          q: 'La exposición debe reflejar las emociones e intereses personales del orador.',
          a: false,
          explain: 'Falso. La exposición debe ser objetiva, evitando manifestaciones de interés personal o reflejar emociones; se busca claridad y exactitud.',
        },
      ],
      mc: [
        {
          id: 'mc-31-1',
          q: '¿Cuál de estas es una de las bases del estilo oratorio?',
          options: [
            'Improvisación',
            'Claridad',
            'Ambigüedad',
            'Extensión',
          ],
          correctIndex: 1,
          explain: 'Entre las bases del estilo oratorio están claridad, sencillez, concisión, coherencia, fluidez, naturalidad e impacto.',
        },
        {
          id: 'mc-31-2',
          q: '¿Cómo se estructura el contenido de un discurso?',
          options: [
            'Inicio, nudo y desenlace',
            'Introducción, cuerpo y conclusión',
            'Tesis, antítesis y síntesis',
            'Apertura, debate y votación',
          ],
          correctIndex: 1,
          explain: 'El esquema de redacción se organiza en introducción (capta la atención y presenta el tema), cuerpo (desarrolla ideas) y conclusión (resume y cierra).',
        },
        {
          id: 'mc-31-3',
          q: '¿Qué técnica de respiración recomienda el apunte para la comunicación hablada?',
          options: [
            'Respiración por la boca',
            'Respiración diafragmática',
            'Contener la respiración',
            'Respiración acelerada',
          ],
          correctIndex: 1,
          explain: 'Recomienda la respiración diafragmática, adecuada relajación, no respirar por la boca, ropa cómoda y practicar el guion varias veces.',
        },
        {
          id: 'mc-31-4',
          q: 'En la preparación del discurso, analizar quiénes escuchan, qué saben y su actitud corresponde a…',
          options: [
            'Elección del tema y objetivo',
            'Análisis del auditorio y contexto',
            'Práctica',
            'Conclusión',
          ],
          correctIndex: 1,
          explain: 'El análisis del auditorio y contexto evalúa quiénes escuchan, qué saben del tema, su actitud y el lugar/situación de la charla, para adaptar el mensaje.',
        },
      ],
      ms: [
        {
          id: 'ms-31-1',
          q: '¿Cuáles son bases del estilo oratorio según el apunte?',
          options: [
            'Claridad',
            'Sencillez',
            'Concisión',
            'Coherencia',
            'Improvisación',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Las bases son claridad, sencillez, concisión, coherencia, fluidez, naturalidad e impacto. La improvisación no es una base; de hecho el apunte recomienda preparar el discurso.',
        },
        {
          id: 'ms-31-2',
          q: '¿Qué pasos forman parte de la preparación metódica del discurso?',
          options: [
            'Elección del tema y objetivo',
            'Análisis del auditorio y contexto',
            'Investigación y organización del contenido',
            'Práctica (repetir y medir el tiempo)',
            'Esperar la inspiración del momento',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'La preparación incluye elección de tema/objetivo, análisis del auditorio y contexto, investigación y organización, y práctica. Esperar la inspiración contradice la idea de prepararse.',
        },
        {
          id: 'ms-31-3',
          q: '¿Qué recomienda el apunte para la comunicación hablada?',
          options: [
            'Respiración diafragmática',
            'Adecuada relajación',
            'No respirar por la boca',
            'Vestir ropa cómoda, no ajustada',
            'Hablar lo más rápido posible',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Recomienda respiración diafragmática, relajación, no respirar por la boca, ropa cómoda y practicar el guion. Hablar lo más rápido posible no figura entre las recomendaciones.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-31-1',
        front: 'Oratoria',
        back: 'Arte de hablar con elocuencia para persuadir, convencer o conmover a un auditorio. Se concreta en discursos, conferencias, exposiciones, disertaciones y debates.',
      },
      {
        id: 'fc-31-2',
        front: 'Bases del estilo oratorio',
        back: 'Claridad, sencillez, concisión, coherencia, fluidez, naturalidad e impacto.',
      },
      {
        id: 'fc-31-3',
        front: 'Concisión',
        back: 'Expresar las ideas con el menor número de palabras posible, yendo a lo esencial.',
      },
      {
        id: 'fc-31-4',
        front: 'Preparación del discurso',
        back: 'El 90 % del éxito. Pasos: elección del tema y objetivo, análisis del auditorio y contexto, investigación y organización, y práctica.',
      },
      {
        id: 'fc-31-5',
        front: 'Esquema del discurso',
        back: 'Introducción (capta la atención y presenta el tema), cuerpo (desarrolla ideas con argumentos y ejemplos) y conclusión (resume y cierra con llamada a la acción).',
      },
      {
        id: 'fc-31-6',
        front: 'Técnicas de respiración',
        back: 'Respiración diafragmática, adecuada relajación, no respirar por la boca, ropa cómoda no ajustada y practicar el guion varias veces.',
      },
      {
        id: 'fc-31-7',
        front: 'Exposición objetiva',
        back: 'Exponer razonamientos y juicios evitando intereses personales o emociones; buscar claridad y exactitud, y brindar información objetiva.',
      },
    ],
  },

  // ---------- SECCIÓN 32 ----------
  {
    id: '32',
    unit: '12',
    title: 'Comunicación escrita: redacción, informes y documentación técnica',
    criollo:
      'Escribir bien en el laburo pide rigor: no tenés gestos ni tono para aclarar. Una buena redacción es clara, breve y natural. Y en la empresa hay distintos tipos de comunicación escrita (interna/externa), manuales administrativos y documentos comerciales, cada uno con su propósito.',
    blocks: [
      {
        type: 'p',
        text: 'La comunicación escrita, desde un correo electrónico hasta un informe técnico, exige un rigor particular. A diferencia de la comunicación oral, no contamos con el lenguaje gestual o el tono de voz para aclarar ambigüedades.',
      },
      {
        type: 'h3',
        text: 'Cualidades de una buena redacción',
        criollo:
          'Tres pilares: que sea clara y precisa, breve y concisa, y sencilla y natural. El apunte agrega otras cualidades, pero estas tres son el corazón.',
      },
      {
        type: 'p',
        text: 'Una redacción profesional debe ser:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Clara y precisa</strong>: las ideas deben ser inequívocas. Usá la palabra exacta para cada concepto.',
          '<strong>Breve y concisa</strong>: andá al grano. Eliminá palabras, frases y párrafos que no aporten valor.',
          '<strong>Sencilla y natural</strong>: escribí de forma directa y honesta, como si se lo estuvieras explicando a una persona, de forma clara y respetuosa.',
        ],
      },
      {
        type: 'p',
        text: 'El apunte enumera, además, otras cualidades de la redacción: naturalidad, claridad, exactitud, brevedad, sencillez, originalidad, concisión, fluidez, precisión, corrección y estilo personal.',
      },
      {
        type: 'h3',
        text: 'Redacción de informes',
        criollo:
          'Para armar un informe, primero planificás: definís bien el problema, hacés un bosquejo y armás una agenda con fechas. Recién ahí te ponés a escribir.',
      },
      {
        type: 'p',
        text: 'Los informes y manuales son herramientas fundamentales en el mundo profesional, y su redacción requiere una planificación cuidadosa del proyecto:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Definición del problema</strong>: analizar el problema, definir sus alcances o límites, relacionar antecedentes históricos, examinar y analizar estudios previos, y hacer un estudio preliminar y genérico.',
          '<strong>Confección del bosquejo o esquema</strong>: concretar ideas en frases clave, establecer gráfica y analíticamente el contenido y los límites del trabajo, y proporcionar una guía para el acopio de información.',
          '<strong>Elaboración de la agenda</strong>: confeccionar el cronograma de tiempos, determinar la carga horaria diaria al proyecto y establecer el target-date o fecha de presentación.',
        ],
      },
      {
        type: 'h3',
        text: 'Tipos de comunicación escrita en una empresa',
        criollo:
          'En una empresa lo escrito se divide en interna (dentro de la organización) y externa (hacia afuera). Y la interna puede ser formal o informal.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Interna formal</strong>: memorándums, boletines, informes y actas de reuniones.',
          '<strong>Interna informal</strong>: comunicaciones sobre reuniones, deportes, eventos y temas personales.',
          '<strong>Externa</strong>: comunicaciones dirigidas a clientes, proveedores o el público general; incluye relaciones públicas, comunicación institucional, promoción y publicidad (de productos o imagen institucional).',
        ],
      },
      {
        type: 'h3',
        text: 'Documentación técnica: manuales administrativos',
        criollo:
          'Los manuales administrativos estandarizan cómo funciona la empresa. Hay tres clásicos: el de organización, el de procedimientos y el del usuario.',
      },
      {
        type: 'p',
        text: 'Los manuales administrativos reflejan las normas de la compañía que deben ser contempladas en los diferentes procesos y actividades de la empresa; son documentos que estandarizan su funcionamiento:',
      },
      {
        type: 'ul',
        items: [
          '<strong>Manual de organización</strong>: describe la estructura y funciones de la empresa (diseño funcional).',
          '<strong>Manual de procedimientos</strong>: detalla paso a paso cómo realizar las operaciones (circuitos y procesos de las operaciones).',
          '<strong>Manual de usuario</strong>: guía para utilizar un sistema o proceso automatizado; contiene instrucciones de sistemas y procesos automatizados.',
        ],
      },
      {
        type: 'h3',
        text: 'Documentos comerciales',
        criollo:
          'Son la base de las transacciones de la empresa. Cada uno tiene un propósito legal y contable, así que hay que redactarlos con máxima precisión.',
      },
      {
        type: 'p',
        text: 'Los documentos comerciales son la base de las transacciones de una empresa. Cada uno tiene un propósito legal y contable específico, y debe ser redactado con máxima precisión. Incluyen, entre otros:',
      },
      {
        type: 'ul',
        items: [
          'Contratos comerciales.',
          'Factura, nota de débito, nota de crédito, recibo comercial y recibo de sueldo.',
          'Pagaré.',
          'Cheque y boleta de depósito.',
          'Solicitud o pedido de venta.',
          'Orden de compra y orden de pago.',
          'Remito.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Clave: lo escrito en la empresa no es solo “mandar un mail”. Hay una pirámide que va de lo informal (un aviso de un asado) a lo formal y legal (una factura o un contrato), y cuanto más formal, más precisión necesita la redacción.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-32-1',
          q: 'La comunicación escrita exige más rigor que la oral porque no contamos con gestos ni tono de voz para aclarar ambigüedades.',
          a: true,
          explain: 'Correcto. A diferencia de la oral, en la escrita no hay lenguaje gestual ni tono de voz para aclarar ambigüedades, por eso exige un rigor particular.',
        },
        {
          id: 'tf-32-2',
          q: 'El manual de procedimientos describe la estructura y funciones de la empresa.',
          a: false,
          explain: 'Falso. Eso lo hace el manual de organización. El manual de procedimientos detalla paso a paso cómo realizar las operaciones (circuitos y procesos).',
        },
        {
          id: 'tf-32-3',
          q: 'Una factura es un ejemplo de documento comercial con propósito legal y contable.',
          a: true,
          explain: 'Tal cual: los documentos comerciales (factura, notas de débito/crédito, recibos, órdenes, remito, etc.) tienen un propósito legal y contable y deben redactarse con máxima precisión.',
        },
        {
          id: 'tf-32-4',
          q: 'Los memorándums, informes y actas de reuniones son comunicación interna formal.',
          a: true,
          explain: 'Correcto. La comunicación interna formal incluye memorándums, boletines, informes y actas de reuniones.',
        },
      ],
      mc: [
        {
          id: 'mc-32-1',
          q: '¿Cuál de estas es una cualidad de una buena redacción según el apunte?',
          options: [
            'Ambigua y extensa',
            'Clara y precisa',
            'Técnica y rebuscada',
            'Larga y detallista',
          ],
          correctIndex: 1,
          explain: 'Una buena redacción debe ser clara y precisa, breve y concisa, y sencilla y natural.',
        },
        {
          id: 'mc-32-2',
          q: '¿Qué manual administrativo contiene instrucciones de sistemas y procesos automatizados?',
          options: [
            'Manual de organización',
            'Manual de procedimientos',
            'Manual de usuario',
            'Manual de marca',
          ],
          correctIndex: 2,
          explain: 'El manual de usuario es la guía para utilizar un sistema o proceso automatizado; contiene instrucciones de sistemas y procesos automatizados.',
        },
        {
          id: 'mc-32-3',
          q: 'En la redacción de informes, establecer el cronograma de tiempos y la fecha de presentación (target-date) corresponde a…',
          options: [
            'Definición del problema',
            'Confección del bosquejo',
            'Elaboración de la agenda',
            'Conclusión',
          ],
          correctIndex: 2,
          explain: 'La elaboración de la agenda confecciona el cronograma de tiempos, determina la carga horaria diaria y establece el target-date o fecha de presentación.',
        },
        {
          id: 'mc-32-4',
          q: 'La promoción y la publicidad institucional son parte de la comunicación…',
          options: [
            'Interna formal',
            'Interna informal',
            'Externa',
            'Privada',
          ],
          correctIndex: 2,
          explain: 'La comunicación externa incluye relaciones públicas, comunicación institucional, promoción y publicidad (de productos o imagen institucional).',
        },
      ],
      ms: [
        {
          id: 'ms-32-1',
          q: '¿Cuáles son cualidades de una buena redacción mencionadas en el apunte?',
          options: [
            'Claridad',
            'Concisión',
            'Precisión',
            'Naturalidad',
            'Ambigüedad',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'El apunte enumera naturalidad, claridad, exactitud, brevedad, sencillez, originalidad, concisión, fluidez, precisión, corrección y estilo personal. La ambigüedad es justamente lo que hay que evitar.',
        },
        {
          id: 'ms-32-2',
          q: '¿Cuáles son los manuales administrativos descriptos?',
          options: [
            'Manual de organización',
            'Manual de procedimientos',
            'Manual de usuario',
            'Manual de ventas',
            'Manual de contingencia',
          ],
          correctIndexes: [
            0,
            1,
            2,
          ],
          explain: 'Los manuales administrativos descriptos son: de organización (estructura y funciones), de procedimientos (cómo hacer las operaciones) y de usuario (uso de sistemas automatizados).',
        },
        {
          id: 'ms-32-3',
          q: '¿Cuáles de estos son documentos comerciales según el apunte?',
          options: [
            'Factura',
            'Nota de crédito',
            'Orden de compra',
            'Remito',
            'Acta de reunión',
          ],
          correctIndexes: [
            0,
            1,
            2,
            3,
          ],
          explain: 'Son documentos comerciales: factura, notas de débito/crédito, recibos, pagaré, cheque, boleta de depósito, solicitud de venta, órdenes de compra/pago y remito. El acta de reunión es comunicación interna formal, no un documento comercial.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-32-1',
        front: 'Rigor de lo escrito',
        back: 'La comunicación escrita exige más rigor que la oral porque no hay gestos ni tono de voz para aclarar ambigüedades.',
      },
      {
        id: 'fc-32-2',
        front: 'Cualidades de la redacción (núcleo)',
        back: 'Clara y precisa, breve y concisa, y sencilla y natural.',
      },
      {
        id: 'fc-32-3',
        front: 'Planificación de un informe',
        back: 'Definición del problema, confección del bosquejo o esquema, y elaboración de la agenda (cronograma y target-date).',
      },
      {
        id: 'fc-32-4',
        front: 'Comunicación interna vs. externa',
        back: 'Interna: formal (memos, informes, actas) e informal (eventos, reuniones, personal). Externa: clientes, proveedores y público (relaciones públicas, institucional, promoción, publicidad).',
      },
      {
        id: 'fc-32-5',
        front: 'Manual de organización',
        back: 'Describe la estructura y funciones de la empresa (diseño funcional).',
      },
      {
        id: 'fc-32-6',
        front: 'Manual de procedimientos',
        back: 'Detalla paso a paso cómo realizar las operaciones (circuitos y procesos).',
      },
      {
        id: 'fc-32-7',
        front: 'Manual de usuario',
        back: 'Guía para utilizar un sistema o proceso automatizado; contiene instrucciones de sistemas automatizados.',
      },
      {
        id: 'fc-32-8',
        front: 'Documentos comerciales',
        back: 'Base de las transacciones, con propósito legal y contable: factura, notas de débito/crédito, recibos, pagaré, cheque, boleta de depósito, órdenes de compra/pago y remito.',
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
    { key: 'si-empresas', label: 'Los SI en las empresas (apunte)', path: 'pdfs/si-empresas.pdf' },
    { key: 'si-parte2-apunte', label: 'Sistemas de información — Parte 2 (apunte)', path: 'pdfs/si-parte2-apunte.pdf' },
    { key: 'si-parte2-presentacion', label: 'Sistemas de información — Parte 2 (presentación)', path: 'pdfs/si-parte2-presentacion.pdf' },
    { key: 'proceso-de-desarrollo', label: 'Proceso de desarrollo (apunte)', path: 'pdfs/proceso-de-desarrollo.pdf' },
    { key: 'desarrollo-de-si-apunte', label: 'Desarrollo de sistemas de información (apunte)', path: 'pdfs/desarrollo-de-si-apunte.pdf' },
    { key: 'desarrollo-de-los-si', label: 'Desarrollo de los sistemas de información (presentación)', path: 'pdfs/desarrollo-de-los-si.pdf' },
    { key: 'comunicacion-oral-escrita', label: 'La comunicación oral y escrita (apunte)', path: 'pdfs/comunicacion-oral-escrita.pdf' },
    { key: 'habilidades-comunicacion', label: 'Habilidades de comunicación oral y escrita (apunte)', path: 'pdfs/habilidades-comunicacion.pdf' },
    { key: 'comunicacion-presentacion', label: 'Comunicación oral y escrita (presentación)', path: 'pdfs/comunicacion-presentacion.pdf' },
  ],
};
