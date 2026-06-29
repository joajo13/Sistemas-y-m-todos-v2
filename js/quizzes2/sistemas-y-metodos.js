/**
 * Banco NUEVO (anti-spoiler) — sistemas-y-metodos
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
          "q": "Un proyecto es un esfuerzo temporal y único que se emprende para crear un producto, servicio o resultado específico.",
          "a": true,
          "explain": "Esa es la definición central: temporal (con inicio y fin) y único (resultado distinto de otros), con un objetivo claro."
        },
        {
          "id": "tf2-1-2",
          "q": "El mantenimiento diario de un edificio ya construido es un ejemplo de proyecto.",
          "a": false,
          "explain": "Falso. Construir el edificio es un proyecto; su mantenimiento diario es una operación: tarea continua y rutinaria, no finita."
        },
        {
          "id": "tf2-1-3",
          "q": "La administración de proyectos busca cumplir los objetivos dentro de las restricciones de alcance, tiempo y costo.",
          "a": true,
          "explain": "Tal cual: es la disciplina que planifica, organiza y gestiona los recursos para llegar a destino dentro de esos límites."
        },
        {
          "id": "tf2-1-4",
          "q": "Una característica de los proyectos es que se le asignan presupuesto, personal y equipamiento específicos.",
          "a": true,
          "explain": "Sí: los recursos definidos son una de las características clave. Cada proyecto tiene sus recursos asignados para ejecutarse."
        },
        {
          "id": "tf2-1-5",
          "q": "Las operaciones continuas y rutinarias de la empresa, como la facturación, se consideran proyectos.",
          "a": false,
          "explain": "Falso. Lo continuo y rutinario es operación, no proyecto. El proyecto es finito: tiene comienzo y final definidos."
        }
      ],
      "mc": [
        {
          "id": "mc2-1-1",
          "q": "¿Cuál es la característica que define la naturaleza finita de un proyecto?",
          "options": [
            "Su resultado específico",
            "Sus recursos definidos",
            "Su carácter temporal",
            "Su condición de único"
          ],
          "correctIndex": 2,
          "explain": "Temporal significa que tiene comienzo y final definidos: no es una operación continua. Esa es la naturaleza finita del proyecto."
        },
        {
          "id": "mc2-1-2",
          "q": "¿Por qué construir un nuevo edificio se considera un proyecto y no una operación?",
          "options": [
            "Porque tiene ubicación, diseño y equipo propios",
            "Porque es una tarea continua y rutinaria de la empresa",
            "Porque se repite igual a los edificios anteriores",
            "Porque no requiere ningún recurso ni objetivo"
          ],
          "correctIndex": 0,
          "explain": "Es único: aunque haya otros edificios, este tiene ubicación, diseño y equipo propios. Eso lo hace proyecto, no operación rutinaria."
        },
        {
          "id": "mc2-1-3",
          "q": "¿Cuáles son las restricciones dentro de las que la administración de proyectos debe cumplir los objetivos?",
          "options": [
            "Calidad, riesgo y comunicación",
            "Personal, equipamiento y presupuesto",
            "Alcance, tiempo y costo",
            "Inicio, ejecución y cierre"
          ],
          "correctIndex": 2,
          "explain": "El texto define las restricciones como alcance, tiempo y costo: dentro de esos límites hay que cumplir los objetivos del proyecto."
        },
        {
          "id": "mc2-1-4",
          "q": "¿En qué radica la importancia de la administración de proyectos?",
          "options": [
            "En eliminar por completo las restricciones de tiempo y costo",
            "En subir las chances de éxito y optimizar recursos",
            "En convertir las operaciones rutinarias en proyectos finitos",
            "En reemplazar la planificación por la pura ejecución directa"
          ],
          "correctIndex": 1,
          "explain": "Su importancia está en que sube las chances de éxito, optimiza el uso de recursos y da un marco de trabajo claro al equipo."
        },
        {
          "id": "mc2-1-5",
          "q": "¿Qué describe mejor a la administración de proyectos como disciplina?",
          "options": [
            "Repite tareas rutinarias dentro de la operación continua diaria",
            "Planifica, organiza y gestiona recursos para cumplir objetivos",
            "Asigna presupuesto solo a las operaciones continuas de la empresa",
            "Define el resultado único del proyecto sin atender restricciones"
          ],
          "correctIndex": 1,
          "explain": "Es la disciplina que planifica, organiza, asegura y gestiona los recursos para hacer el trabajo y cumplir los objetivos dentro de las restricciones."
        }
      ],
      "ms": [
        {
          "id": "ms2-1-1",
          "q": "¿Cuáles de estas son características clave de un proyecto según el texto?",
          "options": [
            "Temporal, con comienzo y final definidos",
            "Único, con un resultado diferente de otros",
            "Recursos definidos: presupuesto y personal",
            "Resultado específico, con objetivo tangible",
            "Continuo y rutinario como la facturación"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son las características clave. La última describe una operación, que es justo lo contrario de un proyecto."
        },
        {
          "id": "ms2-1-2",
          "q": "¿Cuáles de estos ejemplos son operaciones (no proyectos) según el texto?",
          "options": [
            "El mantenimiento diario de un edificio",
            "La facturación de la empresa",
            "El soporte técnico continuo",
            "La construcción de un nuevo edificio",
            "El lanzamiento de un producto nuevo"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Mantenimiento, facturación y soporte son operaciones: continuas y rutinarias. Construir un edificio sí es proyecto; el quinto no figura en este texto como ejemplo."
        },
        {
          "id": "ms2-1-3",
          "q": "¿Qué afirmaciones sobre la administración de proyectos son correctas?",
          "options": [
            "Planifica, organiza, asegura y gestiona los recursos",
            "Trabaja dentro de las restricciones definidas",
            "Aumenta las probabilidades de éxito del proyecto",
            "Optimiza el uso de los recursos disponibles",
            "Proporciona un marco de trabajo claro al equipo"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son correctas: así define el texto a la disciplina y los motivos de su importancia. Planificar, gestionar, dentro de límites, con éxito y marco claro."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-1-1",
        "front": "Proyecto (definición)",
        "back": "Esfuerzo temporal y único que se emprende para crear un producto, servicio o resultado específico. No es una operación continua ni rutinaria de la empresa."
      },
      {
        "id": "fc2-1-2",
        "front": "Característica: temporal",
        "back": "Todo proyecto tiene un comienzo y un final definidos. No es una operación continua (como la facturación o el soporte técnico): su naturaleza es finita."
      },
      {
        "id": "fc2-1-3",
        "front": "Característica: único",
        "back": "El producto o resultado es diferente de otros. Aunque se hayan construido edificios antes, este tendrá ubicación, diseño y equipo específicos que lo hacen único."
      },
      {
        "id": "fc2-1-4",
        "front": "Proyecto vs. operación",
        "back": "Construir un edificio es un proyecto (finito y único); su mantenimiento diario es una operación (continua y rutinaria). Lo que distingue al proyecto es ser temporal y único."
      },
      {
        "id": "fc2-1-5",
        "front": "Administración de proyectos (definición)",
        "back": "Disciplina que consiste en planificar, organizar, asegurar y gestionar los recursos para llevar a cabo el trabajo requerido y cumplir los objetivos dentro de las restricciones definidas."
      },
      {
        "id": "fc2-1-6",
        "front": "Restricciones del proyecto",
        "back": "Alcance, tiempo y costo. La administración de proyectos debe cumplir los objetivos del proyecto dentro de estos límites."
      },
      {
        "id": "fc2-1-7",
        "front": "Importancia de la administración de proyectos",
        "back": "Aumenta las probabilidades de éxito, optimiza el uso de recursos y proporciona un marco de trabajo claro para todo el equipo."
      }
    ]
  },
  "2": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-2-1",
          "q": "Los proyectos surgen de necesidades y oportunidades que se evalúan y filtran antes de ser aprobados.",
          "a": true,
          "explain": "Tal cual: el texto dice que los proyectos no salen de la nada, nacen de necesidades y oportunidades que pasan por un embudo de selección antes de la aprobación."
        },
        {
          "id": "tf2-2-2",
          "q": "Un cambio regulatorio, como una nueva ley de protección de datos, puede ser fuente de un proyecto.",
          "a": true,
          "explain": "Sí, los cambios regulatorios figuran entre las fuentes: leyes o normativas nuevas que obligan a la empresa a hacer cambios."
        },
        {
          "id": "tf2-2-3",
          "q": "El business case es el documento que se elabora recién después de aprobar el estudio de factibilidad.",
          "a": false,
          "explain": "Al revés: el business case es el primer documento formal. Justifica la razón de ser del proyecto antes del estudio de factibilidad."
        },
        {
          "id": "tf2-2-4",
          "q": "El comité directivo (steering committee) está compuesto por altos ejecutivos y se enfoca en la alineación estratégica.",
          "a": true,
          "explain": "Correcto: el steering committee son altos ejecutivos que miran la alineación estratégica y aprueban los grandes presupuestos."
        },
        {
          "id": "tf2-2-5",
          "q": "La factibilidad económica evalúa si la empresa cuenta con la tecnología y los conocimientos necesarios.",
          "a": false,
          "explain": "Eso es la factibilidad técnica. La económica mira si los beneficios superan los costos, o sea, si es rentable."
        }
      ],
      "mc": [
        {
          "id": "mc2-2-1",
          "q": "¿Cuál de estas instancias corresponde al primer documento formal del proceso de selección?",
          "options": [
            "El estudio de factibilidad operativa",
            "El business case o caso de negocio",
            "El comité del grupo de usuarios",
            "El plan estratégico de la dirección"
          ],
          "correctIndex": 1,
          "explain": "El business case es el primer documento formal: justifica la razón de ser y analiza beneficios, costos y alineación estratégica."
        },
        {
          "id": "mc2-2-2",
          "q": "¿Qué pregunta responde específicamente la factibilidad operativa?",
          "options": [
            "¿Los beneficios del proyecto superan a los costos?",
            "¿Disponemos de la tecnología adecuada?",
            "¿Se integra con las operaciones actuales?",
            "¿El proyecto apoya el plan estratégico?"
          ],
          "correctIndex": 2,
          "explain": "La operativa pregunta si el proyecto encaja con las operaciones actuales de la empresa. La rentabilidad es la económica y la tecnología es la técnica."
        },
        {
          "id": "mc2-2-3",
          "q": "¿Qué comité evalúa la factibilidad técnica y la integración con los sistemas existentes?",
          "options": [
            "El comité de sistemas de información",
            "El comité directivo o steering",
            "El comité del grupo de usuarios",
            "El comité de oportunidades de negocio"
          ],
          "correctIndex": 0,
          "explain": "El comité de sistemas de información son gerentes y expertos de TI que miran la viabilidad técnica y la integración con lo que ya existe."
        },
        {
          "id": "mc2-2-4",
          "q": "¿Cuál de las siguientes se menciona como una fuente de proyectos?",
          "options": [
            "La aprobación formal final del comité directivo",
            "El procedimiento de gestión de cambios",
            "El cierre de proyectos anteriores",
            "Las ideas innovadoras de los empleados"
          ],
          "correctIndex": 3,
          "explain": "Las ideas innovadoras de los empleados son una de las fuentes citadas, junto con oportunidades, requerimientos, regulaciones y plan estratégico."
        },
        {
          "id": "mc2-2-5",
          "q": "Según el texto, ¿quién aporta la visión del \"cliente\" final en la evaluación?",
          "options": [
            "El comité directivo de ejecutivos",
            "El comité del grupo de usuarios",
            "El comité de sistemas de información",
            "El responsable del business case"
          ],
          "correctIndex": 1,
          "explain": "El comité del grupo de usuarios son representantes de las áreas afectadas y aportan la visión del cliente final."
        }
      ],
      "ms": [
        {
          "id": "ms2-2-1",
          "q": "¿Cuáles de las siguientes se mencionan como fuentes de proyectos?",
          "options": [
            "Oportunidades de negocio del mercado",
            "Requerimientos del cliente interno o externo",
            "Cambios regulatorios y nuevas leyes",
            "Lecciones aprendidas del cierre previo",
            "Plan estratégico de la alta dirección"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Las lecciones aprendidas pertenecen al cierre del proyecto, no a las fuentes. Las otras cuatro sí figuran como entradas al embudo de selección."
        },
        {
          "id": "ms2-2-2",
          "q": "Sobre las perspectivas del estudio de factibilidad, ¿cuáles son correctas?",
          "options": [
            "La técnica evalúa la tecnología y los conocimientos",
            "La económica evalúa la rentabilidad del proyecto",
            "La operativa evalúa la integración con las operaciones",
            "La legal evalúa los contratos con proveedores",
            "La financiera evalúa el cronograma de pagos"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "El texto nombra tres perspectivas: técnica, económica y operativa. La legal y la financiera no aparecen en el apunte."
        },
        {
          "id": "ms2-2-3",
          "q": "¿Cuáles de estos comités forman parte de la planificación detallada posterior a la aprobación, según el texto?",
          "options": [
            "El comité de planificación detallada",
            "El comité de scope creep",
            "El comité de auditoría externa",
            "El comité de cierre y lecciones",
            "El comité de adquisiciones obligatorias"
          ],
          "correctIndexes": [],
          "explain": "Ninguno. El texto solo nombra tres comités de revisión (directivo, de sistemas de información y de usuarios); estos cinco son inventados, ojo con eso."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-2-1",
        "front": "Business case",
        "back": "Primer documento formal del proyecto. Justifica su razón de ser y analiza beneficios esperados, costos estimados y alineación con la estrategia de la empresa."
      },
      {
        "id": "fc2-2-2",
        "front": "Estudio de factibilidad",
        "back": "Análisis que determina si el proyecto es viable desde tres perspectivas: técnica, económica y operativa."
      },
      {
        "id": "fc2-2-3",
        "front": "Factibilidad técnica",
        "back": "Evalúa si se cuenta con la tecnología y los conocimientos necesarios para realizar el proyecto."
      },
      {
        "id": "fc2-2-4",
        "front": "Factibilidad económica",
        "back": "Evalúa si los beneficios superan los costos, es decir, si el proyecto es rentable."
      },
      {
        "id": "fc2-2-5",
        "front": "Comité directivo (steering committee)",
        "back": "Compuesto por altos ejecutivos. Se enfoca en la alineación estratégica y la aprobación de grandes presupuestos."
      },
      {
        "id": "fc2-2-6",
        "front": "Comité del grupo de usuarios",
        "back": "Representantes de las áreas afectadas o que usarán el resultado del proyecto. Aportan la visión del cliente final."
      },
      {
        "id": "fc2-2-7",
        "front": "Fuentes de proyectos",
        "back": "Oportunidades de negocio, requerimientos del cliente, cambios regulatorios, plan estratégico e ideas innovadoras de los empleados."
      }
    ]
  },
  "3": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-3-1",
          "q": "El monitoreo y control es una fase que comienza una vez finalizada por completo la ejecución.",
          "a": false,
          "explain": "No: el monitoreo y control se hace en paralelo a la ejecución, no después. El texto lo aclara expresamente."
        },
        {
          "id": "tf2-3-2",
          "q": "La fase de planificación es la más intensiva y su resultado es el plan de proyecto.",
          "a": true,
          "explain": "Sí, es la fase más intensiva: se detallan alcance, cronograma, presupuesto, riesgos, recursos y comunicaciones, y sale el plan de proyecto."
        },
        {
          "id": "tf2-3-3",
          "q": "La fase de ejecución es donde se consume la mayor parte del tiempo y del presupuesto.",
          "a": true,
          "explain": "Correcto: en la ejecución el equipo hace el trabajo planificado y ahí se va la mayor parte del tiempo y la plata."
        },
        {
          "id": "tf2-3-4",
          "q": "Las áreas de conocimiento del PMBOK son fases sucesivas que se ejecutan una después de la otra.",
          "a": false,
          "explain": "No son fases: son dimensiones que el director de proyecto gestiona de forma integrada a lo largo de todo el ciclo de vida."
        },
        {
          "id": "tf2-3-5",
          "q": "El project charter y la identificación de stakeholders se realizan en la fase de inicio.",
          "a": true,
          "explain": "Tal cual: en el inicio se define el proyecto a nivel general, se elabora el project charter y se identifican los stakeholders clave."
        }
      ],
      "mc": [
        {
          "id": "mc2-3-1",
          "q": "¿Cuál es el orden correcto de las cinco fases del ciclo de vida?",
          "options": [
            "Planificación, inicio, ejecución, control y cierre",
            "Inicio, ejecución, planificación, control y cierre",
            "Inicio, planificación, ejecución, monitoreo, cierre",
            "Inicio, planificación, control, ejecución y cierre"
          ],
          "correctIndex": 2,
          "explain": "El orden es inicio, planificación, ejecución, monitoreo y control (en paralelo), y cierre."
        },
        {
          "id": "mc2-3-2",
          "q": "¿Qué se formaliza en la fase de cierre del proyecto?",
          "options": [
            "La elaboración del project charter inicial",
            "La aceptación y las lecciones aprendidas",
            "El detalle del cronograma y presupuesto",
            "La creación de los entregables del trabajo"
          ],
          "correctIndex": 1,
          "explain": "En el cierre se formaliza la aceptación, se liberan los recursos y se documentan las lecciones aprendidas."
        },
        {
          "id": "mc2-3-3",
          "q": "¿Qué área de conocimiento coordina a todas las demás para que el proyecto funcione como un todo?",
          "options": [
            "La gestión del alcance del proyecto",
            "La gestión de las comunicaciones",
            "La gestión de la integración",
            "La gestión de la calidad final"
          ],
          "correctIndex": 2,
          "explain": "La gestión de la integración es la que coordina todas las demás áreas para que el proyecto sea un todo cohesivo."
        },
        {
          "id": "mc2-3-4",
          "q": "¿Qué organización publica la Guía del PMBOK®?",
          "options": [
            "El Project Management Institute (PMI)",
            "El comité directivo de la alta dirección",
            "La oficina interna de gestión de calidad",
            "El instituto de estudios de factibilidad"
          ],
          "correctIndex": 0,
          "explain": "El PMI (Project Management Institute) es la organización líder mundial y publica la Guía del PMBOK."
        },
        {
          "id": "mc2-3-5",
          "q": "La gestión del alcance se asegura de que el proyecto incluya...",
          "options": [
            "los costos planificados y su control",
            "el trabajo requerido, y solo ese trabajo",
            "los riesgos identificados y sus respuestas",
            "las comunicaciones oportunas del equipo"
          ],
          "correctIndex": 1,
          "explain": "La gestión del alcance vela por que se haga todo el trabajo requerido y solo ese, ni más ni menos."
        }
      ],
      "ms": [
        {
          "id": "ms2-3-1",
          "q": "¿Cuáles de estas son fases del ciclo de vida del proyecto según el texto?",
          "options": [
            "Inicio",
            "Planificación",
            "Adquisición",
            "Ejecución",
            "Cierre"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Adquisición no es una fase del ciclo de vida (sí es un área de conocimiento). Las fases son inicio, planificación, ejecución, monitoreo y cierre."
        },
        {
          "id": "ms2-3-2",
          "q": "¿Cuáles de las siguientes son áreas de conocimiento del PMBOK?",
          "options": [
            "Gestión de los riesgos",
            "Gestión de las adquisiciones",
            "Gestión de la integración",
            "Gestión de los recursos humanos",
            "Gestión de la calidad"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son áreas de conocimiento del PMBOK. El texto lista nueve áreas en total y estas están todas incluidas."
        },
        {
          "id": "ms2-3-3",
          "q": "Sobre la fase de monitoreo y control, ¿qué afirmaciones son correctas?",
          "options": [
            "Se realiza en paralelo a la ejecución",
            "Mide el progreso real contra el planificado",
            "Identifica desviaciones del plan",
            "Solo se hace al cerrar el proyecto",
            "Toma acciones correctivas cuando hace falta"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "El monitoreo va en paralelo a la ejecución, mide progreso, detecta desvíos y aplica correcciones. La opción de que solo se hace al cierre es falsa."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-3-1",
        "front": "Ciclo de vida del proyecto",
        "back": "Serie de fases que atraviesa todo proyecto: inicio, planificación, ejecución, monitoreo y control, y cierre."
      },
      {
        "id": "fc2-3-2",
        "front": "Fase de inicio",
        "back": "Se define el proyecto a nivel general, se elabora el project charter y se identifican los stakeholders clave."
      },
      {
        "id": "fc2-3-3",
        "front": "Fase de planificación",
        "back": "La más intensiva. Se detallan alcance, cronograma, presupuesto, riesgos, recursos y comunicaciones. Su resultado es el plan de proyecto."
      },
      {
        "id": "fc2-3-4",
        "front": "Monitoreo y control",
        "back": "Se realiza en paralelo a la ejecución. Mide el progreso real contra el planificado, detecta desviaciones y toma acciones correctivas."
      },
      {
        "id": "fc2-3-5",
        "front": "PMI",
        "back": "Project Management Institute: organización líder mundial en dirección de proyectos. Publica la Guía del PMBOK®."
      },
      {
        "id": "fc2-3-6",
        "front": "Áreas de conocimiento del PMBOK",
        "back": "Dimensiones que el director gestiona de forma integrada: integración, alcance, tiempo, costos, calidad, RR.HH., comunicaciones, riesgos y adquisiciones."
      },
      {
        "id": "fc2-3-7",
        "front": "Gestión de la integración",
        "back": "Área que coordina a todas las demás para que el proyecto funcione como un todo cohesivo."
      },
      {
        "id": "fc2-3-8",
        "front": "Gestión del alcance",
        "back": "Asegura que el proyecto incluya todo el trabajo requerido, y solo el trabajo requerido."
      }
    ]
  },
  "4": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-4-1",
          "q": "Una planificación sólida ayuda a minimizar la repetición de tareas y a aumentar la predictibilidad.",
          "a": true,
          "explain": "Sí, entre los beneficios figuran mejorar la comunicación, minimizar repetición, aumentar predictibilidad y entregar calidad a tiempo."
        },
        {
          "id": "tf2-4-2",
          "q": "En SMART, la letra M corresponde a que el objetivo debe ser motivador.",
          "a": false,
          "explain": "La M es de Medible (Measurable): el objetivo tiene que ser cuantificable, como un aumento de ventas del 20 %."
        },
        {
          "id": "tf2-4-3",
          "q": "El esfuerzo se mide en horas de trabajo, mientras que la duración se mide en días laborales.",
          "a": true,
          "explain": "Correcto: el esfuerzo es el total de horas-persona y la duración son los días hábiles que toma completar la tarea."
        },
        {
          "id": "tf2-4-4",
          "q": "El tiempo calendario excluye fines de semana y feriados.",
          "a": false,
          "explain": "Al contrario: el tiempo calendario incluye los días no laborables como fines de semana y feriados."
        },
        {
          "id": "tf2-4-5",
          "q": "En el ejemplo del apunte, una tarea de 16 horas-persona con un programador de 8 horas/día tiene una duración de 2 días laborales.",
          "a": true,
          "explain": "Bien: 16 / 8 = 2 días laborales de duración. Si arranca un viernes, el tiempo calendario son 4 días por el fin de semana."
        }
      ],
      "mc": [
        {
          "id": "mc2-4-1",
          "q": "¿Qué significa la letra A en el acrónimo SMART?",
          "options": [
            "Que el objetivo sea ambicioso al máximo",
            "Que el objetivo sea alcanzable y posible",
            "Que el objetivo sea aprobado por el comité",
            "Que el objetivo sea analizado por el equipo"
          ],
          "correctIndex": 1,
          "explain": "La A es de Alcanzable: posible con los recursos y el tiempo disponibles, un desafío pero no una utopía."
        },
        {
          "id": "mc2-4-2",
          "q": "Según el ejemplo del apunte, si la tarea de 2 días empieza un viernes, ¿cuál es el tiempo calendario?",
          "options": [
            "2 días, igual que la duración estimada",
            "3 días contando solamente hasta el lunes",
            "4 días incluyendo el fin de semana",
            "5 días por sumar también un feriado"
          ],
          "correctIndex": 2,
          "explain": "Son 4 días: viernes, sábado, domingo y lunes, porque el trabajo se frena el fin de semana."
        },
        {
          "id": "mc2-4-3",
          "q": "¿Cuál es la definición correcta de \"esfuerzo\" en planificación?",
          "options": [
            "Los días hábiles que toma la tarea",
            "El total de horas de trabajo necesarias",
            "El tiempo calendario hasta el final de todo",
            "Los días corridos que incluyen los feriados"
          ],
          "correctIndex": 1,
          "explain": "El esfuerzo (tiempo/persona) es la cantidad total de horas de trabajo para completar la tarea, por ejemplo 40 horas de programación."
        },
        {
          "id": "mc2-4-4",
          "q": "¿A qué letra de SMART corresponde definir una fecha límite para el objetivo?",
          "options": [
            "A la S de específico",
            "A la M de medible",
            "A la R de relevante",
            "A la T de oportuno"
          ],
          "correctIndex": 3,
          "explain": "La T es de Oportuno/Limitado en el tiempo (Time-bound): pide una fecha límite, como estar operativo antes del 30 de noviembre."
        },
        {
          "id": "mc2-4-5",
          "q": "¿Cuál de estos NO es un beneficio de la planificación mencionado en el texto?",
          "options": [
            "Mejora la comunicación del equipo",
            "Aumenta la predictibilidad del proyecto",
            "Elimina por completo todos los riesgos",
            "Minimiza la repetición de tareas"
          ],
          "correctIndex": 2,
          "explain": "Eliminar todos los riesgos no es un beneficio citado: la planificación ayuda con comunicación, predictibilidad, repetición y calidad a tiempo."
        }
      ],
      "ms": [
        {
          "id": "ms2-4-1",
          "q": "¿Cuáles son beneficios de una planificación sólida según el texto?",
          "options": [
            "Mejora la comunicación",
            "Minimiza la repetición de tareas",
            "Garantiza beneficios económicos",
            "Aumenta la predictibilidad",
            "Ayuda a entregar calidad a tiempo"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Garantizar beneficios económicos no figura. Los beneficios citados son comunicación, menos repetición, más predictibilidad y calidad a tiempo."
        },
        {
          "id": "ms2-4-2",
          "q": "¿Cuáles de las siguientes letras de SMART están bien emparejadas con su significado?",
          "options": [
            "S — Específico",
            "M — Medible",
            "A — Alcanzable",
            "R — Realista/Relevante",
            "T — Oportuno/en el tiempo"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco están bien: específico, medible, alcanzable, realista/relevante y oportuno/limitado en el tiempo."
        },
        {
          "id": "ms2-4-3",
          "q": "Sobre los conceptos de esfuerzo, duración y tiempo calendario, ¿qué afirmaciones son correctas?",
          "options": [
            "El esfuerzo se mide en horas-persona",
            "La duración cuenta los días hábiles",
            "El tiempo calendario excluye feriados",
            "Los tres conceptos son sinónimos",
            "El tiempo calendario incluye fines de semana"
          ],
          "correctIndexes": [
            0,
            1,
            4
          ],
          "explain": "El esfuerzo va en horas, la duración en días hábiles y el calendario incluye fines de semana. Que excluya feriados o que sean sinónimos es falso."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-4-1",
        "front": "Objetivos SMART",
        "back": "Acrónimo para definir objetivos sin ambigüedad: Específico, Medible, Alcanzable, Realista/Relevante y Oportuno/limitado en el tiempo."
      },
      {
        "id": "fc2-4-2",
        "front": "SMART: la S y la M",
        "back": "S de Específico (claro, sin ambigüedades) y M de Medible (cuantificable, por ejemplo aumentar ventas un 20 %)."
      },
      {
        "id": "fc2-4-3",
        "front": "Esfuerzo (tiempo/persona)",
        "back": "Cantidad total de horas de trabajo necesarias para completar una tarea. Ejemplo: 40 horas de programación."
      },
      {
        "id": "fc2-4-4",
        "front": "Duración (días laborales)",
        "back": "Número de días hábiles que toma completar la tarea, considerando la disponibilidad de los recursos."
      },
      {
        "id": "fc2-4-5",
        "front": "Tiempo calendario",
        "back": "Tiempo total que transcurre desde el inicio hasta el fin de la tarea, incluyendo días no laborables como fines de semana o feriados."
      },
      {
        "id": "fc2-4-6",
        "front": "Ejemplo: 16 horas-persona, 1 programador de 8 h/día",
        "back": "Duración = 16 / 8 = 2 días laborales. Si empieza un viernes, el tiempo calendario es de 4 días por el fin de semana."
      },
      {
        "id": "fc2-4-7",
        "front": "Beneficios de la planificación",
        "back": "Mejora la comunicación, minimiza la repetición de tareas, aumenta la predictibilidad y ayuda a entregar productos de calidad a tiempo."
      }
    ]
  },
  "5": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-5-1",
          "q": "El Project Charter es el documento que autoriza formalmente el proyecto.",
          "a": true,
          "explain": "Sí, el Project Charter es la partida de nacimiento: autoriza el proyecto y define el qué, por qué, quién y cuándo."
        },
        {
          "id": "tf2-5-2",
          "q": "El WBS organiza las tareas en una línea de tiempo indicando cuándo se harán.",
          "a": false,
          "explain": "No: el WBS dice qué hay que hacer, no cuándo. La línea de tiempo con fechas es el cronograma Gantt."
        },
        {
          "id": "tf2-5-3",
          "q": "El plan de proyecto integra todos los planes secundarios, como alcance, cronograma, costos y calidad.",
          "a": true,
          "explain": "Tal cual: el plan de proyecto es el documento maestro que integra todos los planes secundarios, no es solo el cronograma."
        },
        {
          "id": "tf2-5-4",
          "q": "La gestión de riesgos y cambios son documentos únicos que se firman al inicio.",
          "a": false,
          "explain": "Son procesos, no documentos únicos: un plan para identificar y mitigar riesgos y un procedimiento formal para gestionar cambios."
        },
        {
          "id": "tf2-5-5",
          "q": "El scope creep o corrupción del alcance se evita con un procedimiento formal para gestionar cambios.",
          "a": true,
          "explain": "Correcto: sin un procedimiento formal de cambios, el alcance crece sin control y aparece el scope creep."
        }
      ],
      "mc": [
        {
          "id": "mc2-5-1",
          "q": "¿Qué herramienta es una descomposición jerárquica del alcance que no indica fechas?",
          "options": [
            "El cronograma Gantt del proyecto",
            "El WBS o estructura de desglose",
            "El plan maestro de proyecto",
            "El Project Charter de constitución"
          ],
          "correctIndex": 1,
          "explain": "El WBS desglosa los entregables en paquetes de trabajo más chicos. Dice qué hay que hacer, no cuándo."
        },
        {
          "id": "mc2-5-2",
          "q": "¿Cuál es la herramienta visual por excelencia para representar el cronograma?",
          "options": [
            "El cronograma Gantt",
            "El Project Charter",
            "La estructura WBS",
            "El business case"
          ],
          "correctIndex": 0,
          "explain": "El Gantt muestra las tareas en una línea de tiempo con duraciones, dependencias y progreso. Es la visual del cronograma."
        },
        {
          "id": "mc2-5-3",
          "q": "¿Qué documento define de manera concisa el qué, por qué, quién y cuándo, y autoriza el proyecto?",
          "options": [
            "El plan de proyecto maestro",
            "El cronograma Gantt detallado",
            "El Project Charter de constitución",
            "El WBS de paquetes de trabajo"
          ],
          "correctIndex": 2,
          "explain": "El Project Charter autoriza formalmente el proyecto e incluye objetivos, gerente, stakeholders, presupuesto preliminar y entregables."
        },
        {
          "id": "mc2-5-4",
          "q": "¿Cómo se denomina la corrupción del alcance que se busca evitar?",
          "options": [
            "El gold plating del proyecto",
            "El scope creep del alcance",
            "El time-boxing del cronograma",
            "El overhead de recursos"
          ],
          "correctIndex": 1,
          "explain": "Scope creep es la corrupción del alcance: el proyecto crece sin control. Se evita con un procedimiento formal de cambios."
        },
        {
          "id": "mc2-5-5",
          "q": "Según el texto, ¿qué herramienta es el documento maestro que guía la ejecución y el control?",
          "options": [
            "El Project Charter inicial",
            "La estructura de desglose WBS",
            "El cronograma Gantt visual",
            "El plan de proyecto integrador"
          ],
          "correctIndex": 3,
          "explain": "El plan de proyecto es el documento maestro y formal que guía tanto la ejecución como el control e integra los planes secundarios."
        }
      ],
      "ms": [
        {
          "id": "ms2-5-1",
          "q": "¿Qué información incluye el Project Charter según el texto?",
          "options": [
            "Los objetivos del proyecto",
            "El gerente del proyecto asignado",
            "Los stakeholders clave",
            "El presupuesto preliminar",
            "El detalle día por día de las tareas"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "El charter incluye objetivos, gerente, stakeholders, presupuesto preliminar y entregables principales. El detalle día por día es del Gantt, no del charter."
        },
        {
          "id": "ms2-5-2",
          "q": "Sobre el cronograma Gantt, ¿qué afirmaciones son correctas?",
          "options": [
            "Muestra las tareas en una línea de tiempo",
            "Indica las duraciones de las tareas",
            "Refleja las dependencias entre tareas",
            "Muestra el progreso general",
            "Autoriza formalmente el proyecto"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "El Gantt muestra tareas, duraciones, dependencias y progreso. Autorizar el proyecto es función del Project Charter."
        },
        {
          "id": "ms2-5-3",
          "q": "¿Cuáles de estas herramientas desarrolla el apunte de esta unidad como parte de la gestión de proyectos?",
          "options": [
            "El diagrama PERT de redes",
            "La matriz RACI de responsabilidades",
            "El OBS de desglose organizacional",
            "El diagrama de Ishikawa de causas",
            "El tablero Kanban de tareas"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: el apunte aclara que el OBS se menciona en el PDF pero no se desarrolla, y las otras cuatro ni siquiera aparecen en esta unidad."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-5-1",
        "front": "Project Charter (Acta de constitución)",
        "back": "Documento que autoriza formalmente el proyecto. Define el qué, por qué, quién y cuándo, e incluye objetivos, gerente, stakeholders, presupuesto preliminar y entregables."
      },
      {
        "id": "fc2-5-2",
        "front": "WBS (Work Breakdown Structure)",
        "back": "Descomposición jerárquica del alcance total del trabajo en paquetes más pequeños y manejables. Dice qué hay que hacer, no cuándo."
      },
      {
        "id": "fc2-5-3",
        "front": "Cronograma Gantt",
        "back": "Herramienta visual por excelencia del cronograma. Muestra las tareas en una línea de tiempo, sus duraciones, dependencias y progreso general."
      },
      {
        "id": "fc2-5-4",
        "front": "Plan de proyecto",
        "back": "Documento maestro y formal que guía la ejecución y el control. Integra todos los planes secundarios: alcance, cronograma, costos, calidad, entre otros."
      },
      {
        "id": "fc2-5-5",
        "front": "Gestión de riesgos y cambios",
        "back": "No son documentos únicos sino procesos: un plan para identificar y mitigar riesgos y un procedimiento formal para gestionar cambios al alcance."
      },
      {
        "id": "fc2-5-6",
        "front": "Scope creep",
        "back": "Corrupción del alcance: el proyecto crece sin control. Se evita con un procedimiento formal de gestión de cambios."
      },
      {
        "id": "fc2-5-7",
        "front": "WBS vs. Gantt",
        "back": "El WBS dice qué hay que hacer (sin fechas); el Gantt muestra cuándo, con tareas en una línea de tiempo, duraciones y dependencias."
      }
    ]
  },
  "6": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-6-1",
          "q": "Un buen gerente de proyectos trabaja proactivamente para mitigar los desafíos desde el inicio, en lugar de reaccionar una vez que los problemas ya ocurrieron.",
          "a": true,
          "explain": "Tal cual: el apunte dice que el gerente se anticipa a los problemas y los ataca desde el arranque, no cuando ya explotó todo."
        },
        {
          "id": "tf2-6-2",
          "q": "Asignar personas a demasiados proyectos a la vez (recursos saturados) mejora la productividad porque mantiene al equipo ocupado.",
          "a": false,
          "explain": "Al revés: saturar recursos reduce la productividad y aumenta el riesgo de errores. Estar en diez proyectos a la vez no ayuda a nadie."
        },
        {
          "id": "tf2-6-3",
          "q": "La comunicación deficiente es una de las principales causas de problemas en los proyectos.",
          "a": true,
          "explain": "Sí, el apunte la marca como una de las causas principales: si nadie se habla, el proyecto se complica."
        },
        {
          "id": "tf2-6-4",
          "q": "Si la dirección cambia de prioridades constantemente, el equipo gana foco y el proyecto avanza más rápido.",
          "a": false,
          "explain": "Falso. Las prioridades cambiantes hacen que el equipo pierda el foco y el proyecto se estanque."
        },
        {
          "id": "tf2-6-5",
          "q": "Tener objetivos poco claros aumenta la probabilidad de que el equipo no llegue a buen puerto.",
          "a": true,
          "explain": "Correcto: si el equipo no sabe con precisión a dónde va, es muy probable que no llegue."
        }
      ],
      "mc": [
        {
          "id": "mc2-6-1",
          "q": "Según el apunte, ¿cuántos desafíos recurrentes debe anticipar y mitigar el gerente de proyectos?",
          "options": [
            "Tres problemas recurrentes habituales",
            "Cinco problemas recurrentes habituales",
            "Cuatro problemas recurrentes habituales",
            "Seis problemas recurrentes habituales"
          ],
          "correctIndex": 1,
          "explain": "El apunte identifica cinco problemas recurrentes que el gerente debe anticipar desde el inicio."
        },
        {
          "id": "mc2-6-2",
          "q": "¿Qué consecuencia genera fijar planes y calendarios irreales por la presión de terminar rápido?",
          "options": [
            "Mejora la calidad y sube la motivación",
            "Desmotivación del equipo y baja calidad",
            "Saturación total de los recursos disponibles",
            "Cambio constante de las prioridades fijadas"
          ],
          "correctIndex": 1,
          "explain": "Los cronogramas imposibles de cumplir generan desmotivación y baja calidad del trabajo."
        },
        {
          "id": "mc2-6-3",
          "q": "¿Cuál de estos describe el problema de 'objetivos poco claros'?",
          "options": [
            "El equipo no sabe con precisión a dónde va",
            "La dirección cambia de opinión a cada rato",
            "Las personas están en demasiados proyectos",
            "Falta comunicación clara y constante hoy"
          ],
          "correctIndex": 0,
          "explain": "Objetivos poco claros es exactamente eso: el equipo no sabe con precisión a dónde va, y así no llega a buen puerto."
        },
        {
          "id": "mc2-6-4",
          "q": "¿Cuál es la actitud que el apunte recomienda al gerente frente a estos desafíos?",
          "options": [
            "Reaccionar recién cuando ya ocurrieron",
            "Delegarlos por completo a la dirección",
            "Anticiparse y mitigarlos desde el inicio",
            "Esperar a que el equipo los resuelva solo"
          ],
          "correctIndex": 2,
          "explain": "La idea central es trabajar proactivamente: anticiparse y mitigar desde el inicio, no reaccionar tarde."
        }
      ],
      "ms": [
        {
          "id": "ms2-6-1",
          "q": "¿Cuáles de los siguientes figuran entre los cinco desafíos recurrentes que menciona el apunte?",
          "options": [
            "Objetivos poco claros del proyecto",
            "Planes y calendarios irreales",
            "Presupuesto sobrante sin ejecutar",
            "Recursos saturados en proyectos",
            "Comunicación deficiente del equipo"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Cuatro de las cinco están: objetivos poco claros, planes irreales, recursos saturados y comunicación deficiente. La quinta es prioridades cambiantes; el presupuesto sobrante no aparece."
        },
        {
          "id": "ms2-6-2",
          "q": "¿Cuáles de estas afirmaciones sobre la gestión de los desafíos son correctas según el apunte?",
          "options": [
            "El gerente debe actuar de forma proactiva",
            "Los desafíos se atacan desde el inicio",
            "Conviene esperar a que el problema realmente explote",
            "Anticiparse evita reaccionar tarde",
            "El gerente solo asigna tareas y nada más"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Las tres correctas hablan de proactividad, atacar desde el inicio y anticiparse. Esperar a que explote o reducir el rol a solo asignar son lo contrario de lo que dice el apunte."
        },
        {
          "id": "ms2-6-3",
          "q": "¿Cuáles de estos son desafíos NUEVOS que el apunte agrega además de los cinco clásicos mencionados?",
          "options": [
            "Falta de presupuesto inicial aprobado",
            "Rotación alta del personal técnico",
            "Conflictos legales con proveedores externos",
            "Tecnología obsoleta en la empresa",
            "Riesgo cambiario en las compras"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta: ninguno de estos figura en el apunte. Los desafíos que menciona son objetivos poco claros, planes irreales, recursos saturados, prioridades cambiantes y comunicación deficiente."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-6-1",
        "front": "Objetivos poco claros (como desafío)",
        "back": "Cuando el equipo no sabe con precisión a dónde va; así es muy probable que no llegue a buen puerto."
      },
      {
        "id": "fc2-6-2",
        "front": "Planes y calendarios irreales",
        "back": "Cronogramas imposibles de cumplir por la presión de terminar rápido; generan desmotivación y baja calidad."
      },
      {
        "id": "fc2-6-3",
        "front": "Recursos saturados",
        "back": "Asignar personas a demasiados proyectos a la vez; reduce su productividad y aumenta el riesgo de errores."
      },
      {
        "id": "fc2-6-4",
        "front": "Prioridades cambiantes",
        "back": "Cuando la dirección cambia de opinión constantemente; el equipo pierde el foco y el proyecto se estanca."
      },
      {
        "id": "fc2-6-5",
        "front": "Comunicación deficiente",
        "back": "Falta de comunicación clara y constante; es una de las principales causas de problemas en los proyectos."
      },
      {
        "id": "fc2-6-6",
        "front": "Actitud del buen gerente frente a los desafíos",
        "back": "Trabajar proactivamente para mitigarlos desde el inicio, anticipándose a los problemas en lugar de reaccionar tarde."
      },
      {
        "id": "fc2-6-7",
        "front": "¿Cuántos desafíos recurrentes identifica el apunte?",
        "back": "Cinco: objetivos poco claros, planes irreales, recursos saturados, prioridades cambiantes y comunicación deficiente."
      }
    ]
  },
  "7": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-7-1",
          "q": "Los proyectos de sistemas deben estar correctamente planeados en conformidad con el grupo de usuarios.",
          "a": true,
          "explain": "Sí: la coordinación con el usuario es desde el día uno; sin ellos no podés planear ni investigar nada."
        },
        {
          "id": "tf2-7-2",
          "q": "El tiempo de investigación del sistema se determina únicamente por la cantidad de líneas de código a escribir.",
          "a": false,
          "explain": "Falso. Se determina por la cantidad de personas a entrevistar, el tiempo necesario para el desarrollo y las interconsultas entre usuarios."
        },
        {
          "id": "tf2-7-3",
          "q": "Para el project leader es primordial controlar que todas las personas asignadas estén disponibles para concretar el plan de trabajo.",
          "a": true,
          "explain": "Tal cual: su rol no es solo asignar tareas, sino asegurarse de que cuando alguien tiene que estar, esté."
        },
        {
          "id": "tf2-7-4",
          "q": "El desarrollo de sistemas y la actividad de programación se consideran una única actividad indivisible.",
          "a": false,
          "explain": "Falso: el apunte las considera actividades individuales, aunque el project leader deba controlar la disponibilidad de todos."
        },
        {
          "id": "tf2-7-5",
          "q": "Los requerimientos de tiempo del proyecto se refieren al tiempo necesario para llevar a cabo una investigación clara y profunda del sistema a desarrollar.",
          "a": true,
          "explain": "Correcto, así lo define el apunte: el tiempo del proyecto apunta a investigar bien el sistema."
        }
      ],
      "mc": [
        {
          "id": "mc2-7-1",
          "q": "¿A partir de qué se determina el tiempo de investigación del sistema?",
          "options": [
            "Del presupuesto total asignado y aprobado para el proyecto",
            "De la cantidad de servidores y equipos a configurar",
            "De personas a entrevistar, tiempo de desarrollo e interconsultas",
            "Del número de manuales y documentos técnicos a redactar"
          ],
          "correctIndex": 2,
          "explain": "El apunte lo dice claro: cantidad de personas a entrevistar, tiempo necesario para el desarrollo y las interconsultas entre usuarios."
        },
        {
          "id": "mc2-7-2",
          "q": "Según el apunte, ¿con quién deben estar en conformidad los proyectos de sistemas al planearse?",
          "options": [
            "Con el grupo de usuarios involucrado",
            "Con el directorio financiero general",
            "Con los proveedores de hardware",
            "Con el área de marketing externa"
          ],
          "correctIndex": 0,
          "explain": "Deben estar correctamente planeados en conformidad con el grupo de usuarios: coordinación desde el día uno."
        },
        {
          "id": "mc2-7-3",
          "q": "¿Cuál es el rol primordial del project leader según el apunte?",
          "options": [
            "Redactar personalmente el código de la aplicación",
            "Controlar la disponibilidad de las personas asignadas",
            "Aprobar el presupuesto detallado de cada etapa",
            "Entrevistar uno por uno a todos los usuarios"
          ],
          "correctIndex": 1,
          "explain": "Lo primordial es controlar que todas las personas asignadas estén disponibles para concretar el plan de trabajo."
        },
        {
          "id": "mc2-7-4",
          "q": "¿Qué debe asegurar el desarrollo además de asignar y administrar bien al personal?",
          "options": [
            "Reducir los costos del proyecto al mínimo",
            "Acortar los plazos sin entrevistar usuarios",
            "Eliminar las interconsultas entre los usuarios",
            "Seguir los lineamientos de calidad y efectividad"
          ],
          "correctIndex": 3,
          "explain": "El apunte pide cumplir y seguir los lineamientos para asegurar la calidad y efectividad de la aplicación a implementar."
        }
      ],
      "ms": [
        {
          "id": "ms2-7-1",
          "q": "¿Qué factores intervienen en la determinación del tiempo de investigación del sistema?",
          "options": [
            "La cantidad de personas a entrevistar",
            "El tiempo necesario para el desarrollo",
            "El precio de las licencias de software",
            "Las interconsultas entre los usuarios",
            "El color de la interfaz de la aplicación"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Los tres factores que el apunte menciona son personas a entrevistar, tiempo de desarrollo e interconsultas. El precio de licencias y el color de la interfaz no figuran."
        },
        {
          "id": "ms2-7-2",
          "q": "¿Cuáles de estas afirmaciones sobre la gestión de proyectos de sistemas son correctas según el apunte?",
          "options": [
            "Deben planearse junto al grupo de usuarios",
            "El personal debe asignarse y administrarse bien",
            "El project leader controla la disponibilidad",
            "La programación y el desarrollo son una sola tarea",
            "Los lineamientos de calidad pueden ignorarse"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son correctas. La programación y el desarrollo son actividades individuales, no una sola; y los lineamientos de calidad hay que seguirlos, no ignorarlos."
        },
        {
          "id": "ms2-7-3",
          "q": "¿Cuáles de estas tareas asigna el apunte explícitamente al rol del project leader?",
          "options": [
            "Diseñar la arquitectura de la base de datos",
            "Negociar el contrato con el cliente final",
            "Definir el lenguaje de programación a usar",
            "Aprobar el plan de marketing del producto",
            "Auditar la seguridad informática del sistema"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: el apunte solo le asigna controlar que las personas asignadas estén disponibles para concretar el plan. Lo demás no aparece."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-7-1",
        "front": "Planeamiento de proyectos de sistemas",
        "back": "Deben estar correctamente planeados, en conformidad con el grupo de usuarios; la coordinación es desde el día uno."
      },
      {
        "id": "fc2-7-2",
        "front": "Requerimientos de tiempo del proyecto",
        "back": "Se refieren al tiempo necesario para llevar a cabo una investigación clara y profunda del sistema a desarrollar."
      },
      {
        "id": "fc2-7-3",
        "front": "¿Cómo se determina el tiempo de investigación?",
        "back": "Por la cantidad de personas a entrevistar, el tiempo necesario para el desarrollo y las interconsultas entre los usuarios."
      },
      {
        "id": "fc2-7-4",
        "front": "Asignación del personal de desarrollo",
        "back": "Debe ser asignado y administrado adecuadamente, y el desarrollo debe seguir los lineamientos de calidad y efectividad."
      },
      {
        "id": "fc2-7-5",
        "front": "Rol primordial del project leader",
        "back": "Controlar que todas las personas asignadas se encuentren disponibles para la concreción del plan de trabajo."
      },
      {
        "id": "fc2-7-6",
        "front": "Desarrollo vs. programación",
        "back": "Se consideran actividades individuales, aunque el project leader deba coordinar la disponibilidad de todos."
      }
    ]
  },
  "8": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-8-1",
          "q": "La WBS está orientada a los entregables: se enfoca en 'qué' se va a entregar, no en 'cómo' ni 'cuándo'.",
          "a": true,
          "explain": "Exacto: la WBS responde al qué, descompuesto en paquetes de trabajo, sin meterse en el cómo ni el cuándo."
        },
        {
          "id": "tf2-8-2",
          "q": "La regla del 100% indica que la WBS debe incluir solo las tareas más importantes del proyecto.",
          "a": false,
          "explain": "Falso: la regla del 100% dice que la WBS incluye el 100% del trabajo del alcance, ni más ni menos."
        },
        {
          "id": "tf2-8-3",
          "q": "La OBS es un organigrama del proyecto que muestra las unidades organizativas y cómo se relacionan.",
          "a": true,
          "explain": "Sí: la OBS define el 'quién', mostrando departamentos, equipos y sus relaciones."
        },
        {
          "id": "tf2-8-4",
          "q": "Al cruzar la WBS con la OBS se obtiene una matriz que asigna la responsabilidad de cada paquete de trabajo.",
          "a": true,
          "explain": "Tal cual: cruzarlas asigna cada paquete a un equipo o departamento, dándole un dueño claro."
        },
        {
          "id": "tf2-8-5",
          "q": "La WBS es una descomposición jerárquica que va desde los paquetes de trabajo en la cima hasta el proyecto general en la base.",
          "a": false,
          "explain": "Está al revés: el proyecto general va en la cima y los paquetes de trabajo individuales en la base."
        }
      ],
      "mc": [
        {
          "id": "mc2-8-1",
          "q": "¿Qué define la WBS dentro de un proyecto?",
          "options": [
            "El quién se encarga de cada tarea",
            "El qué hay que hacer descompuesto",
            "El cuándo arranca cada actividad",
            "El cuánto cuesta cada entregable"
          ],
          "correctIndex": 1,
          "explain": "La WBS define el 'qué': descompone el alcance en paquetes de trabajo. El 'quién' lo define la OBS."
        },
        {
          "id": "mc2-8-2",
          "q": "¿Cómo se llaman las partes pequeñas y manejables en que la WBS divide las tareas grandes?",
          "options": [
            "Unidades organizativas básicas",
            "Paquetes de trabajo definidos",
            "Caminos críticos del plan",
            "Niveles de esfuerzo previstos"
          ],
          "correctIndex": 1,
          "explain": "Se llaman 'paquetes de trabajo': las piezas chiquitas y ejecutables en que se rompe el proyecto."
        },
        {
          "id": "mc2-8-3",
          "q": "¿Qué establece la 'regla del 100%' de la WBS?",
          "options": [
            "Debe incluir el 100% del trabajo del alcance",
            "Debe cubrir el 100% del presupuesto fijado",
            "Debe asignar el 100% del personal disponible",
            "Debe usar el 100% del tiempo calendario"
          ],
          "correctIndex": 0,
          "explain": "La regla del 100% dice que la WBS incluye todo el trabajo del alcance del proyecto: ni más, ni menos."
        },
        {
          "id": "mc2-8-4",
          "q": "¿Qué se obtiene al combinar la WBS con la OBS?",
          "options": [
            "Un diagrama de Gantt del cronograma",
            "Un cálculo del esfuerzo total previsto",
            "Una matriz de asignación de responsabilidades",
            "Una lista de los riesgos del proyecto"
          ],
          "correctIndex": 2,
          "explain": "Cruzarlas crea una matriz de asignación de responsabilidades, donde cada paquete tiene un dueño claro."
        }
      ],
      "ms": [
        {
          "id": "ms2-8-1",
          "q": "¿Cuáles son características clave de la WBS según el apunte?",
          "options": [
            "Está orientada a los entregables",
            "Es jerárquica por niveles",
            "Debe cumplir la regla del 100%",
            "Define quién ejecuta cada una de las tareas",
            "Muestra las dependencias temporales del plan"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son las características clave de la WBS. Definir el 'quién' es tarea de la OBS, y las dependencias temporales son del Gantt."
        },
        {
          "id": "ms2-8-2",
          "q": "¿Cuáles de estos elementos aparecen en la WBS simplificada del ejemplo 'Organizar una conferencia académica'?",
          "options": [
            "Planificación y gestión",
            "Logística del evento",
            "Análisis de riesgo financiero",
            "Marketing y difusión",
            "Contenido académico"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Cuatro de las cinco están en el ejemplo: planificación, logística, marketing y contenido académico. El análisis de riesgo financiero no figura."
        },
        {
          "id": "ms2-8-3",
          "q": "¿Cuáles de estas afirmaciones describen correctamente a la OBS?",
          "options": [
            "Es un organigrama del proyecto",
            "Muestra las unidades organizativas",
            "Define el alcance total del trabajo",
            "Indica cómo se relacionan los equipos",
            "Reemplaza por completo a la WBS"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "La OBS es el organigrama que muestra las unidades y sus relaciones. Definir el alcance es de la WBS, y la OBS no la reemplaza: se combinan."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-8-1",
        "front": "WBS (sigla y significado)",
        "back": "Work Breakdown Structure / Estructura de desglose del trabajo: descomposición jerárquica de todo el alcance en paquetes de trabajo."
      },
      {
        "id": "fc2-8-2",
        "front": "Propósito de la WBS",
        "back": "Organizar y definir el alcance total, dividiendo tareas grandes y complejas en partes más pequeñas y manejables."
      },
      {
        "id": "fc2-8-3",
        "front": "Paquetes de trabajo",
        "back": "Las partes más pequeñas y manejables en que la WBS divide las tareas grandes y complejas."
      },
      {
        "id": "fc2-8-4",
        "front": "Regla del 100% (WBS)",
        "back": "La WBS debe incluir el 100% del trabajo definido en el alcance del proyecto: ni más, ni menos."
      },
      {
        "id": "fc2-8-5",
        "front": "OBS (sigla y significado)",
        "back": "Organization Breakdown Structure / Estructura de desglose de la organización: organigrama del proyecto que define el 'quién'."
      },
      {
        "id": "fc2-8-6",
        "front": "Características clave de la WBS",
        "back": "Orientada a los entregables (el qué), jerárquica por niveles y debe cumplir la regla del 100%."
      },
      {
        "id": "fc2-8-7",
        "front": "¿Qué surge al cruzar WBS y OBS?",
        "back": "Una matriz de asignación de responsabilidades: cada paquete de trabajo queda asignado a un equipo o departamento con dueño claro."
      }
    ]
  },
  "9": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-9-1",
          "q": "El esfuerzo es la cantidad total de horas de trabajo que una tarea requiere.",
          "a": true,
          "explain": "Sí: el esfuerzo son las 'horas hombre', como 'diseñar el logo tomará 16 horas de trabajo'."
        },
        {
          "id": "tf2-9-2",
          "q": "El camino crítico es la secuencia de tareas más corta y más flexible de todo el proyecto.",
          "a": false,
          "explain": "Falso: el camino crítico es la secuencia más larga y MENOS flexible; su duración determina la del proyecto."
        },
        {
          "id": "tf2-9-3",
          "q": "El tiempo calendario incluye los días no laborables, como fines de semana y feriados.",
          "a": true,
          "explain": "Correcto: el tiempo calendario es lo que dice el almanaque entre inicio y fin, con fines de semana incluidos."
        },
        {
          "id": "tf2-9-4",
          "q": "Para acortar la duración total del proyecto alcanza con acortar cualquier tarea, esté o no en el camino crítico.",
          "a": false,
          "explain": "Falso: la única forma real de acortar el proyecto es acortar tareas del camino crítico."
        },
        {
          "id": "tf2-9-5",
          "q": "El diagrama de Gantt es un gráfico de barras horizontales que muestra las tareas a lo largo del tiempo.",
          "a": true,
          "explain": "Tal cual: el Gantt es la herramienta visual de barras horizontales para ver tareas, duraciones y dependencias."
        }
      ],
      "mc": [
        {
          "id": "mc2-9-1",
          "q": "Si una tarea tiene 16 horas de esfuerzo y un diseñador trabaja 8 horas al día, ¿cuál es su duración?",
          "options": [
            "1 día laborable de trabajo",
            "4 días laborables de trabajo",
            "2 días laborables de trabajo",
            "3 días laborables de trabajo"
          ],
          "correctIndex": 2,
          "explain": "16 horas / 8 horas por día = 2 días de duración. La duración considera los recursos asignados."
        },
        {
          "id": "mc2-9-2",
          "q": "Una tarea de 2 días de duración comienza un viernes. ¿Cuál es su tiempo calendario?",
          "options": [
            "2 días (viernes y lunes)",
            "4 días (viernes a lunes)",
            "3 días (viernes a domingo)",
            "5 días (viernes a martes)"
          ],
          "correctIndex": 1,
          "explain": "Tiempo calendario incluye los no laborables: viernes, sábado, domingo y lunes = 4 días, y termina el lunes."
        },
        {
          "id": "mc2-9-3",
          "q": "¿Por qué el camino crítico recibe la máxima atención de los gerentes de proyecto?",
          "options": [
            "Porque agrupa las tareas de menor costo del plan",
            "Porque un retraso allí demora todo el proyecto",
            "Porque tiene la mayor cantidad de recursos humanos",
            "Porque concentra los entregables más visibles del plan"
          ],
          "correctIndex": 1,
          "explain": "Cualquier retraso en una tarea del camino crítico retrasa inevitablemente la finalización de todo el proyecto."
        },
        {
          "id": "mc2-9-4",
          "q": "¿Qué concepto define 'el número de días laborables que toma completar la tarea con los recursos asignados'?",
          "options": [
            "El tiempo calendario total",
            "El esfuerzo de la tarea",
            "La duración de la tarea",
            "El camino crítico previsto"
          ],
          "correctIndex": 2,
          "explain": "Esa es la definición de duración: días laborables considerando los recursos asignados."
        }
      ],
      "ms": [
        {
          "id": "ms2-9-1",
          "q": "¿Cuáles de estos puntos clave del camino crítico menciona el apunte?",
          "options": [
            "Es la secuencia más larga y menos flexible",
            "Cualquier retraso en él demora el proyecto",
            "Acortarlo es la única forma de acortar el plan",
            "Concentra la máxima atención del management",
            "Siempre incluye la mitad de las tareas"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Los cuatro primeros son exactamente los puntos que resume el apunte. Que incluya 'la mitad de las tareas' es inventado."
        },
        {
          "id": "ms2-9-2",
          "q": "¿Qué permite ver de un vistazo el diagrama de Gantt según el apunte?",
          "options": [
            "Qué tareas hay que hacer",
            "Cuándo comienza y termina cada tarea",
            "El costo monetario de cada tarea",
            "Cuánto dura cada tarea",
            "Cómo se superponen y sus dependencias"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "El Gantt muestra qué tareas hay, cuándo empiezan y terminan, cuánto duran y cómo se superponen o dependen. El costo monetario no está en la lista."
        },
        {
          "id": "ms2-9-3",
          "q": "¿Cuáles de estas son fórmulas o reglas de cálculo que el apunte indica explícitamente?",
          "options": [
            "Esfuerzo = duración multiplicada por el costo",
            "Tiempo calendario = duración menos los feriados",
            "Camino crítico = suma de todas las tareas",
            "Duración = esfuerzo dividido por la jornada diaria",
            "Esfuerzo = recursos multiplicados por el calendario"
          ],
          "correctIndexes": [
            3
          ],
          "explain": "Solo una es correcta: duración = esfuerzo / horas por día (16/8 = 2 días). Las otras combinaciones no figuran en el apunte."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-9-1",
        "front": "Esfuerzo",
        "back": "Cantidad total de horas de trabajo que una tarea requiere (las 'horas hombre'). Ej: diseñar el logo tomará 16 horas."
      },
      {
        "id": "fc2-9-2",
        "front": "Duración",
        "back": "Número de días laborables que toma completar la tarea, considerando los recursos asignados. Ej: 16h / 8h por día = 2 días."
      },
      {
        "id": "fc2-9-3",
        "front": "Tiempo calendario",
        "back": "Lapso total en el almanaque entre inicio y fin, incluyendo días no laborables. Una tarea de 2 días que arranca viernes = 4 días."
      },
      {
        "id": "fc2-9-4",
        "front": "Diagrama de Gantt",
        "back": "Gráfico de barras horizontales que muestra las tareas a lo largo del tiempo: qué hay, cuándo empieza/termina cada una, duración y dependencias."
      },
      {
        "id": "fc2-9-5",
        "front": "Camino crítico (critical path)",
        "back": "Secuencia de tareas más larga y menos flexible del proyecto; su duración total determina la duración total del proyecto."
      },
      {
        "id": "fc2-9-6",
        "front": "¿Por qué el camino crítico es 'crítico'?",
        "back": "Porque cualquier retraso en una de sus tareas retrasa inevitablemente la fecha de finalización de todo el proyecto."
      },
      {
        "id": "fc2-9-7",
        "front": "¿Cómo se acorta la duración total del proyecto?",
        "back": "Es obligatorio acortar la duración de las tareas del camino crítico; es la única forma real de acortar el plan."
      }
    ]
  },
  "10": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-10-1",
          "q": "La gestión de riesgos busca eliminar por completo la incertidumbre del proyecto.",
          "a": false,
          "explain": "Ojo con esto: la gestión de riesgos no busca eliminar la incertidumbre, sino gestionarla. Los riesgos pueden impactar para bien o para mal, y de lo que se trata es de tener un plan."
        },
        {
          "id": "tf2-10-2",
          "q": "Contratar un seguro para cubrir accidentes en un evento es un ejemplo de la estrategia de transferir el riesgo.",
          "a": true,
          "explain": "Tal cual: transferir es trasladar el impacto a un tercero. El riesgo sigue existiendo, pero las consecuencias financieras pasan a la aseguradora."
        },
        {
          "id": "tf2-10-3",
          "q": "El aseguramiento de la calidad (QA) se enfoca en inspeccionar los productos para detectar defectos.",
          "a": false,
          "explain": "Cuidado, eso es QC. El QA se enfoca en los procesos: hace auditorías para verificar que el equipo siga los procedimientos y prevenir defectos. QC mira los productos."
        },
        {
          "id": "tf2-10-4",
          "q": "En el proceso formal de gestión de cambios, el gerente de proyecto evalúa cómo el cambio afecta al alcance, cronograma, costo y calidad.",
          "a": true,
          "explain": "Sí, ese es el paso de evaluación del impacto: el PM analiza cómo el cambio pega en alcance, cronograma, costo y calidad antes de que el comité decida."
        },
        {
          "id": "tf2-10-5",
          "q": "Aceptar un riesgo implica tomar acciones para reducir su probabilidad de ocurrencia.",
          "a": false,
          "explain": "No: aceptar es justamente NO tomar ninguna acción y asumir las consecuencias. Reducir la probabilidad o el impacto es anticipar (mitigar), que es otra estrategia."
        }
      ],
      "mc": [
        {
          "id": "mc2-10-1",
          "q": "¿Cuál de estas estrategias de riesgo consiste en modificar el plan para eliminar la amenaza por completo?",
          "options": [
            "Aceptar el riesgo asumiendo todas sus consecuencias finales",
            "Transferir el riesgo a un tercero mediante un contrato",
            "Anticipar el riesgo reduciendo su probabilidad de impacto",
            "Evitar el riesgo cambiando el plan del proyecto"
          ],
          "correctIndex": 3,
          "explain": "Evitar es modificar el plan para sacar la amenaza por completo, como contratar a un proveedor conocido en vez de uno nuevo. Las otras tres no eliminan el riesgo, lo manejan de otra forma."
        },
        {
          "id": "mc2-10-2",
          "q": "Instalar carpas ante el riesgo de lluvia en un evento al aire libre es un ejemplo de:",
          "options": [
            "Anticipar o mitigar el riesgo",
            "Transferir el riesgo a otro",
            "Aceptar el riesgo sin actuar",
            "Evitar el riesgo por completo"
          ],
          "correctIndex": 0,
          "explain": "Anticipar o mitigar es tomar acciones para reducir la probabilidad o el impacto del riesgo. Las carpas no sacan la lluvia, pero bajan el impacto: clavado mitigar."
        },
        {
          "id": "mc2-10-3",
          "q": "Según el apunte, ¿qué se decide cuando el control de calidad (QC) encuentra un producto defectuoso?",
          "options": [
            "Se transfiere la responsabilidad al proveedor externo",
            "Se acepta, se rechaza o se debe retrabajar",
            "Se audita nuevamente el proceso de producción",
            "Se ajusta el estándar de calidad del plan"
          ],
          "correctIndex": 1,
          "explain": "QC inspecciona los entregables y, si encuentra algo defectuoso, se decide entre aceptar, rechazar o retrabajar el producto. Esa es la terna textual del apunte."
        },
        {
          "id": "mc2-10-4",
          "q": "En la gestión de cambios, ¿qué órgano aprueba o rechaza el cambio junto con su análisis de impacto?",
          "options": [
            "El sponsor que financia el proyecto",
            "El analista que detecta la necesidad",
            "El comité de control de cambios",
            "El gerente de proyecto a cargo"
          ],
          "correctIndex": 2,
          "explain": "El cambio, con su análisis de impacto, se presenta a un comité de control de cambios para aprobación o rechazo. El PM evalúa el impacto, pero quien aprueba es el comité."
        },
        {
          "id": "mc2-10-5",
          "q": "¿Qué herramientas se usan en la planificación de la calidad según el apunte?",
          "options": [
            "La inspección y medición detallada de los entregables",
            "Las auditorías periódicas de los procedimientos definidos",
            "El análisis costo/beneficio y el benchmarking",
            "El comité formal de control de cambios del proyecto"
          ],
          "correctIndex": 2,
          "explain": "En planificación de la calidad se definen estándares y se usan herramientas como el análisis costo/beneficio y el benchmarking (compararse con los mejores). La inspección es QC y las auditorías son QA."
        }
      ],
      "ms": [
        {
          "id": "ms2-10-1",
          "q": "¿Cuáles son estrategias clásicas para tratar los riesgos negativos según el apunte?",
          "options": [
            "Evitar la amenaza modificando el plan",
            "Transferir el impacto a un tercero",
            "Anticipar reduciendo probabilidad o impacto",
            "Aceptar asumiendo las consecuencias",
            "Auditar los procesos para prevenir fallas"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro estrategias son evitar, transferir, anticipar (mitigar) y aceptar. Auditar procesos es parte de QA, no una estrategia de riesgo, por eso queda afuera."
        },
        {
          "id": "ms2-10-2",
          "q": "¿Cuáles de estas afirmaciones sobre QA y QC son correctas?",
          "options": [
            "QA se enfoca en los procesos para prevenir defectos",
            "QC inspecciona y mide los entregables",
            "QA realiza auditorías de procedimientos",
            "QC se enfoca en los productos para detectar defectos",
            "QA transfiere el riesgo a un seguro contratado"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son todas correctas: QA mira procesos y previene con auditorías, QC mira productos e inspecciona. Lo del seguro es estrategia de riesgo, nada que ver con QA."
        },
        {
          "id": "ms2-10-3",
          "q": "¿Cuáles de estos son pasos del proceso formal de gestión de calidad QC (no de cambios)?",
          "options": [
            "Solicitud formal del cambio por un cliente",
            "Aprobación del comité de control de cambios",
            "Evaluación del impacto por el gerente",
            "Ajuste del plan y comunicación a involucrados",
            "Notificación a la aseguradora del proyecto"
          ],
          "correctIndexes": [],
          "explain": "Tranqui con esta: todas las opciones son pasos de gestión de CAMBIOS (o un invento), no de QC. Por eso la respuesta correcta es ninguna: correctIndexes vacío."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-10-1",
        "front": "¿Qué es un riesgo en un proyecto?",
        "back": "Un evento incierto que, si ocurre, tendrá un impacto positivo o negativo en el proyecto. La gestión de riesgos no busca eliminar la incertidumbre, sino gestionarla."
      },
      {
        "id": "fc2-10-2",
        "front": "Estrategia de riesgo: Evitar",
        "back": "Modificar el plan del proyecto para eliminar la amenaza por completo. Ej: contratar un proveedor conocido y confiable en lugar de uno nuevo."
      },
      {
        "id": "fc2-10-3",
        "front": "Estrategia de riesgo: Transferir",
        "back": "Trasladar el impacto del riesgo a un tercero. Ej: contratar un seguro. El riesgo sigue, pero las consecuencias financieras pasan a la aseguradora."
      },
      {
        "id": "fc2-10-4",
        "front": "Estrategia de riesgo: Anticipar (mitigar)",
        "back": "Tomar acciones para reducir la probabilidad de que el riesgo ocurra o su impacto. Ej: instalar carpas ante el riesgo de lluvia."
      },
      {
        "id": "fc2-10-5",
        "front": "Diferencia entre QA y QC",
        "back": "QA mira los procesos para prevenir defectos (auditorías). QC mira los productos para detectar defectos (inspección/medición). Uno previene, el otro inspecciona."
      },
      {
        "id": "fc2-10-6",
        "front": "Tres procesos de la gestión de calidad",
        "back": "Planificación de la calidad (definir estándares y cómo cumplirlos), aseguramiento (QA) y control (QC)."
      },
      {
        "id": "fc2-10-7",
        "front": "Pasos del proceso formal de gestión de cambios",
        "back": "Solicitud del cambio, evaluación del impacto por el PM, aprobación del comité de control de cambios, y ajuste del plan con comunicación a los involucrados."
      },
      {
        "id": "fc2-10-8",
        "front": "¿Dónde suelen aterrizar los cambios de un proyecto?",
        "back": "En el alcance, el cronograma o actividades, el presupuesto, los indicadores de calidad y los integrantes del proyecto."
      }
    ]
  },
  "11": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-11-1",
          "q": "El informe de avance es el documento principal para comunicar el estado del proyecto a los interesados.",
          "a": true,
          "explain": "Sí, ese es su rol: comunicar el estado a los interesados. Suele tener resumen ejecutivo, estado de actividades, riesgos/problemas y análisis de atrasos vs presupuesto."
        },
        {
          "id": "tf2-11-2",
          "q": "El acta de certificación de hitos la firma el gerente de proyecto para autorizar el inicio del proyecto.",
          "a": false,
          "explain": "No: la firma el cliente o sponsor para aceptar un entregable o cerrar una fase. Y eso libera al equipo a seguir con la etapa siguiente, no inicia el proyecto."
        },
        {
          "id": "tf2-11-3",
          "q": "La sección más valiosa del acta de cierre son las lecciones aprendidas.",
          "a": true,
          "explain": "Tal cual lo enfatiza el apunte: las lecciones aprendidas (qué salió bien, qué mal y qué mejorar) son lo más valioso, porque sirven para que el próximo proyecto arranque mejor."
        },
        {
          "id": "tf2-11-4",
          "q": "El cierre administrativo incluye finalizar contratos, pagar las últimas facturas y archivar la documentación.",
          "a": true,
          "explain": "Correcto: el cierre administrativo se ocupa de los contratos, las últimas facturas y archivar toda la documentación del proyecto."
        },
        {
          "id": "tf2-11-5",
          "q": "El reconocimiento y la celebración del equipo es un trámite menor sin impacto en proyectos futuros.",
          "a": false,
          "explain": "Al revés: reconocer el esfuerzo y celebrar es crucial para la moral y la motivación futura. No es un detalle, importa para los próximos proyectos."
        }
      ],
      "mc": [
        {
          "id": "mc2-11-1",
          "q": "¿Qué documento firma el cliente o sponsor para aceptar un entregable o el fin de una fase?",
          "options": [
            "El informe de avance del proyecto",
            "El acta de cierre del proyecto",
            "El acta de certificación de hitos",
            "El resumen ejecutivo de gerencia"
          ],
          "correctIndex": 2,
          "explain": "El acta de certificación de hitos es el documento formal que firma el cliente o sponsor para aceptar un entregable o cerrar una fase, lo que libera al equipo a continuar."
        },
        {
          "id": "mc2-11-2",
          "q": "Dentro del informe de avance, ¿qué componente es una vista rápida para la alta gerencia?",
          "options": [
            "El análisis de atrasos del proyecto",
            "El estado de las actividades en curso",
            "La actualización de riesgos y problemas",
            "El resumen ejecutivo del informe"
          ],
          "correctIndex": 3,
          "explain": "El resumen ejecutivo es justamente esa vista rápida para la alta gerencia. Los otros componentes existen, pero apuntan al detalle, no a la mirada veloz de arriba."
        },
        {
          "id": "mc2-11-3",
          "q": "¿Cuál de estas actividades del cierre compara los resultados finales con los objetivos originales?",
          "options": [
            "La revisión post-implementación final",
            "El cierre administrativo de contratos y facturas pendientes",
            "El reconocimiento y la celebración del equipo de trabajo",
            "La certificación formal de cada uno de los hitos"
          ],
          "correctIndex": 0,
          "explain": "La revisión post-implementación evalúa el éxito y compara resultados finales con objetivos originales. El cierre administrativo es de contratos y facturas, otra cosa."
        },
        {
          "id": "mc2-11-4",
          "q": "¿Qué es un hito en un proyecto, según el apunte?",
          "options": [
            "El documento que comunica desviaciones de presupuesto",
            "Un punto o evento importante del proyecto",
            "La fase final de cierre administrativo total",
            "El comité que aprueba o rechaza cambios"
          ],
          "correctIndex": 1,
          "explain": "Un hito es un punto o evento importante del proyecto. El acta de certificación de hitos formaliza su aceptación, pero el hito en sí es ese evento clave."
        },
        {
          "id": "mc2-11-5",
          "q": "¿Qué documento formaliza el fin del proyecto y contiene las lecciones aprendidas?",
          "options": [
            "El acta de certificación de hitos firmada",
            "El informe de avance para interesados",
            "La revisión post-implementación final",
            "El acta de cierre del proyecto"
          ],
          "correctIndex": 3,
          "explain": "El acta de cierre de proyecto formaliza el fin, y su sección más valiosa son las lecciones aprendidas. El acta de hitos cierra fases, no el proyecto completo."
        }
      ],
      "ms": [
        {
          "id": "ms2-11-1",
          "q": "¿Cuáles son actividades clave del proceso formal de cierre del proyecto?",
          "options": [
            "Cierre administrativo de contratos y facturas",
            "Revisión post-implementación de resultados",
            "Acta de cierre con lecciones aprendidas",
            "Reconocimiento y celebración del equipo",
            "Evaluación del impacto de un cambio nuevo"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro actividades del cierre son cierre administrativo, revisión post-implementación, acta de cierre y reconocimiento. Evaluar el impacto de un cambio es de gestión de cambios, no del cierre."
        },
        {
          "id": "ms2-11-2",
          "q": "¿Cuáles de estos componentes suele incluir un informe de avance según el apunte?",
          "options": [
            "Resumen ejecutivo para la alta gerencia",
            "Estado de actividades completadas y en curso",
            "Riesgos y problemas que surgieron",
            "Análisis de atrasos y presupuesto",
            "Acta de cierre con lecciones aprendidas"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "El informe de avance trae resumen ejecutivo, estado de actividades, riesgos/problemas y atrasos vs presupuesto. El acta de cierre es del fin del proyecto, no del informe de avance."
        },
        {
          "id": "ms2-11-3",
          "q": "¿Cuáles de estas afirmaciones describen correctamente el acta de certificación de hitos?",
          "options": [
            "La firma el cliente o el sponsor del proyecto",
            "Acepta un entregable o el fin de una fase",
            "Libera al equipo a continuar la etapa siguiente",
            "Documenta las lecciones aprendidas del cierre",
            "Reemplaza al informe de avance mensual"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son correctas: la firma el cliente/sponsor, acepta entregable o fin de fase y libera al equipo. Las lecciones aprendidas son del acta de cierre, no de la de hitos."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-11-1",
        "front": "¿Qué es el informe de avance?",
        "back": "El documento principal para comunicar el estado del proyecto a los interesados. Incluye resumen ejecutivo, estado de actividades, riesgos/problemas y análisis de atrasos y presupuesto."
      },
      {
        "id": "fc2-11-2",
        "front": "Resumen ejecutivo (en el informe de avance)",
        "back": "Una vista rápida del estado del proyecto pensada para la alta gerencia."
      },
      {
        "id": "fc2-11-3",
        "front": "¿Qué es un hito?",
        "back": "Un punto o evento importante en el proyecto."
      },
      {
        "id": "fc2-11-4",
        "front": "Acta de certificación de hitos",
        "back": "Documento formal donde el cliente o sponsor firma la aceptación de un entregable o el fin de una fase, lo que libera al equipo a continuar con la siguiente etapa."
      },
      {
        "id": "fc2-11-5",
        "front": "Cierre administrativo",
        "back": "Actividad del cierre donde se finalizan los contratos, se pagan las últimas facturas y se archiva toda la documentación del proyecto."
      },
      {
        "id": "fc2-11-6",
        "front": "Revisión post-implementación",
        "back": "Se evalúa el éxito del proyecto y se comparan los resultados finales con los objetivos originales."
      },
      {
        "id": "fc2-11-7",
        "front": "Acta de cierre de proyecto",
        "back": "Documento que formaliza el fin del proyecto. Su sección más valiosa son las lecciones aprendidas: qué salió bien, qué mal y qué mejorar."
      },
      {
        "id": "fc2-11-8",
        "front": "¿Por qué importa el reconocimiento del equipo al cerrar?",
        "back": "Porque reconocer el esfuerzo y celebrar el trabajo es crucial para la moral y la motivación futura del equipo."
      }
    ]
  },
  "12": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-12-1",
          "q": "Un dato, por sí solo y sin contexto, es suficiente para tomar decisiones acertadas.",
          "a": false,
          "explain": "No: el dato es la materia prima, hechos en bruto sin contexto. Por sí solo no sirve para decidir. Recién con contexto se convierte en información útil."
        },
        {
          "id": "tf2-12-2",
          "q": "La información reduce la incertidumbre y sirve de base para la toma de decisiones.",
          "a": true,
          "explain": "Exacto: la información es el resultado de procesar y organizar datos para darles significado; reduce la incertidumbre y es base para decidir."
        },
        {
          "id": "tf2-12-3",
          "q": "El procedimiento es la implementación detallada de un método, con pasos explícitos.",
          "a": true,
          "explain": "Tal cual: el método es el qué y cómo a nivel general, y el procedimiento es su implementación detallada, paso a paso, para hacerlo siempre igual."
        },
        {
          "id": "tf2-12-4",
          "q": "Todo sistema tiene entrada, proceso de transformación, salida y retroalimentación.",
          "a": true,
          "explain": "Sí: entra algo (input), se transforma, sale algo (output) y la retroalimentación (feedback) permite el control y el ajuste. Esas son las cuatro piezas de todo sistema."
        },
        {
          "id": "tf2-12-5",
          "q": "El área de organización y métodos se ocupa únicamente de comprar el hardware de la empresa.",
          "a": false,
          "explain": "Para nada: analiza los problemas de estructura y procedimientos de la empresa para optimizar la infraestructura organizativa y el logro de objetivos. No es comprar fierros."
        }
      ],
      "mc": [
        {
          "id": "mc2-12-1",
          "q": "Según el apunte, ¿qué es un dato?",
          "options": [
            "La materia prima: hechos en bruto sin contexto",
            "El resultado de organizar los hechos dándoles sentido",
            "Un plan general y ordenado para alcanzar un fin común",
            "La serie de pasos explícitos y estandarizados de una tarea"
          ],
          "correctIndex": 0,
          "explain": "El dato es la materia prima: hechos en bruto, símbolos o registros sin contexto que les dé sentido. Lo segundo describe a la información, no al dato."
        },
        {
          "id": "mc2-12-2",
          "q": "\"Se vendieron 150 unidades del producto X en Palermo en agosto\" es un ejemplo de:",
          "options": [
            "Un dato suelto sin ningún contexto",
            "Información valiosa para un gerente",
            "Un procedimiento estandarizado de venta",
            "Un método general de cálculo final"
          ],
          "correctIndex": 1,
          "explain": "Acá el dato \"150\" se contextualizó (producto, sucursal, mes) y se convirtió en información valiosa para un gerente de ventas. Eso es información, no un dato suelto."
        },
        {
          "id": "mc2-12-3",
          "q": "¿Cuál es la diferencia entre método y procedimiento?",
          "options": [
            "El método es el paso a paso; el procedimiento el plan",
            "El método es un dato; el procedimiento información",
            "El método es general; el procedimiento es el detalle",
            "El método es la salida; el procedimiento la entrada"
          ],
          "correctIndex": 2,
          "explain": "El método es el qué hacer y cómo a nivel general; el procedimiento es su implementación detallada, con pasos explícitos. La primera opción los invierte."
        },
        {
          "id": "mc2-12-4",
          "q": "En un sistema de calefacción, el termostato que mide la temperatura y ajusta la caldera cumple la función de:",
          "options": [
            "Entrada del sistema de calor",
            "Salida del sistema de calor",
            "Proceso de transformación interno",
            "Retroalimentación del sistema"
          ],
          "correctIndex": 3,
          "explain": "El termostato mide la temperatura ambiente y manda señales para que la caldera siga o se apague: eso es retroalimentación (feedback), que permite el control y el ajuste."
        },
        {
          "id": "mc2-12-5",
          "q": "¿Cómo define el apunte a un sistema?",
          "options": [
            "Un dato en bruto registrado sin ningún contexto definido",
            "Un conjunto de componentes que se interrelacionan por un objetivo",
            "Una serie de pasos explícitos y detallados para una tarea común",
            "El área que optimiza la infraestructura organizativa de la empresa"
          ],
          "correctIndex": 1,
          "explain": "Un sistema es un conjunto de componentes que se interrelacionan entre sí para lograr un objetivo común, dentro de un entorno específico. Las otras describen otros conceptos del apunte."
        }
      ],
      "ms": [
        {
          "id": "ms2-12-1",
          "q": "¿Cuáles de estos son elementos que tiene todo sistema según el apunte?",
          "options": [
            "Una entrada o input",
            "Un proceso de transformación",
            "Una salida u output",
            "Un mecanismo de retroalimentación",
            "Un comité de control de cambios"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Todo sistema tiene entrada, proceso, salida y retroalimentación. El comité de control de cambios es de gestión de cambios de proyectos, nada que ver con la anatomía de un sistema."
        },
        {
          "id": "ms2-12-2",
          "q": "¿Cuáles de estas afirmaciones sobre dato e información son correctas?",
          "options": [
            "El dato es la materia prima en bruto",
            "La información reduce la incertidumbre",
            "El dato por sí solo basta para decidir",
            "La información surge de procesar datos con contexto",
            "El dato y la información son sinónimos exactos"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Correctas: el dato es materia prima, la información reduce incertidumbre y surge de procesar datos con contexto. El dato solo NO basta para decidir y no son sinónimos."
        },
        {
          "id": "ms2-12-3",
          "q": "¿Cuáles de estos pasos pertenecen al PROCEDIMIENTO para calcular la nota final del ejemplo?",
          "options": [
            "Ingresar al sistema de gestión académica",
            "Sumar Parcial 1, Parcial 2 y Trabajo Práctico",
            "Dividir el resultado por 3",
            "Registrar el valor en la casilla Nota final",
            "Definir los estándares de calidad del curso"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son pasos del procedimiento del ejemplo. Definir estándares de calidad es de gestión de calidad de proyectos, no tiene nada que ver con calcular una nota."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-12-1",
        "front": "Área de organización y métodos",
        "back": "Área de las TIC que analiza los problemas de estructura y procedimientos de una empresa para optimizar la infraestructura organizativa y el logro de los objetivos."
      },
      {
        "id": "fc2-12-2",
        "front": "¿Qué es un dato?",
        "back": "La materia prima: hechos en bruto, símbolos o registros discretos que describen un evento, pero sin contexto que les dé sentido. Por sí solo no sirve para decidir."
      },
      {
        "id": "fc2-12-3",
        "front": "¿Qué es la información?",
        "back": "El resultado de procesar, organizar y estructurar datos para darles significado y relevancia. Reduce la incertidumbre y es base para la toma de decisiones."
      },
      {
        "id": "fc2-12-4",
        "front": "¿Qué es un método?",
        "back": "Una forma ordenada y sistemática de realizar una acción o alcanzar un fin. Es el qué hacer y cómo hacerlo a nivel general."
      },
      {
        "id": "fc2-12-5",
        "front": "¿Qué es un procedimiento?",
        "back": "La implementación detallada de un método: una serie de pasos o instrucciones explícitas que deben seguirse para completar una tarea de manera estandarizada."
      },
      {
        "id": "fc2-12-6",
        "front": "¿Qué es un sistema?",
        "back": "Un conjunto de componentes que se interrelacionan entre sí para lograr un objetivo común, operando dentro de un entorno específico."
      },
      {
        "id": "fc2-12-7",
        "front": "Los cuatro elementos de todo sistema",
        "back": "Entrada (input), proceso de transformación, salida (output) y mecanismo de retroalimentación (feedback) que permite el control y el ajuste."
      },
      {
        "id": "fc2-12-8",
        "front": "Retroalimentación en el sistema de calefacción",
        "back": "El termostato mide la temperatura ambiente; si está por debajo de la deseada manda seguir, y si la alcanza apaga la caldera."
      }
    ]
  },
  "13": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-13-1",
          "q": "Un sistema de información se reduce únicamente a la computadora y su software.",
          "a": false,
          "explain": "No: el SI es todo el combo: personas, hardware, software, redes de comunicación y datos funcionando juntos. No es solo la máquina."
        },
        {
          "id": "tf2-13-2",
          "q": "El propósito de un SI es apoyar las operaciones, la gestión y la toma de decisiones de la organización.",
          "a": true,
          "explain": "Sí: su propósito fundamental es apoyar las operaciones, la gestión (coordinación y control) y la toma de decisiones dentro de la organización."
        },
        {
          "id": "tf2-13-3",
          "q": "Los sistemas que reciben entradas y producen salidas interactuando con su medioambiente se llaman sistemas abiertos.",
          "a": true,
          "explain": "Correcto: los sistemas que interactúan con su medioambiente, reciben entradas y producen salidas, se denominan sistemas abiertos. Ninguno vive aislado."
        },
        {
          "id": "tf2-13-4",
          "q": "Según el apunte, los procesos NO forman parte de los componentes clave de un SI.",
          "a": false,
          "explain": "Falso: los procesos sí son una de las cinco patas. Los componentes clave son hardware, software, datos, personas y procesos."
        },
        {
          "id": "tf2-13-5",
          "q": "Los sistemas trabajan mejor cuando operan dentro de niveles de desempeño tolerables.",
          "a": true,
          "explain": "Tal cual lo dice el apunte: los sistemas andan mejor cuando se mantienen dentro de niveles de desempeño tolerables."
        }
      ],
      "mc": [
        {
          "id": "mc2-13-1",
          "q": "¿Cuáles son los cinco componentes clave de un sistema de información?",
          "options": [
            "Entrada, proceso, salida, retroalimentación y entorno",
            "Hardware, software, datos, personas y procesos",
            "Operaciones, gestión, control, distribución y redes",
            "Riesgos, calidad, cambios, alcance y presupuesto"
          ],
          "correctIndex": 1,
          "explain": "Las cinco patas del SI son hardware, software, datos, personas y procesos. Las otras opciones mezclan conceptos de otros temas (anatomía de un sistema general, gestión de proyectos)."
        },
        {
          "id": "mc2-13-2",
          "q": "Según la definición de Laudon y Laudon, un SI apoya los procesos de:",
          "options": [
            "Compra, venta y archivo de la documentación",
            "Estructura, métodos y procedimientos internos",
            "Toma de decisión, coordinación y control",
            "Entrada, transformación, salida y feedback"
          ],
          "correctIndex": 2,
          "explain": "Para Laudon y Laudon, el SI recolecta, procesa, almacena y distribuye información para apoyar la toma de decisión, la coordinación y el control de la organización."
        },
        {
          "id": "mc2-13-3",
          "q": "¿Qué es el medioambiente de un sistema?",
          "options": [
            "Todos los objetos que están fuera de las fronteras del sistema",
            "El conjunto de hechos y datos en bruto que el sistema va a procesar",
            "Los programas y aplicaciones que dirigen el funcionamiento del hardware",
            "La razón de existir y la finalidad última que persigue el sistema"
          ],
          "correctIndex": 0,
          "explain": "El medioambiente está formado por todos los objetos que se encuentran fuera de las fronteras del sistema. Con ese entorno el sistema intercambia entradas y salidas."
        },
        {
          "id": "mc2-13-4",
          "q": "Según el apunte, ¿cuál es la finalidad de un sistema?",
          "options": [
            "Procesar los datos en bruto que recibe",
            "La razón de su existencia",
            "Mantener archivos de la organización",
            "Producir reportes para la gerencia"
          ],
          "correctIndex": 1,
          "explain": "La finalidad de un sistema es la razón de su existencia. Procesar datos, mantener archivos y producir reportes son finalidades específicas de los SI, no la definición de finalidad."
        }
      ],
      "ms": [
        {
          "id": "ms2-13-1",
          "q": "¿Cuáles son componentes clave de un sistema de información según el apunte?",
          "options": [
            "Hardware: equipos físicos como servidores",
            "Software: programas que dirigen el hardware",
            "Datos: los hechos en bruto a procesar",
            "Personas: usuarios, operadores y analistas",
            "Riesgos: eventos inciertos del proyecto"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Hardware, software, datos y personas son cuatro de las cinco patas (falta procesos). Los riesgos pertenecen a la gestión de proyectos, no son un componente del SI."
        },
        {
          "id": "ms2-13-2",
          "q": "¿Cuáles de estas son finalidades de los sistemas de información según el apunte?",
          "options": [
            "Procesar las entradas que recibe",
            "Mantener archivos de datos de la organización",
            "Producir información, reportes y otras salidas",
            "Eliminar por completo la incertidumbre del entorno",
            "Transferir los riesgos a un tercero"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las finalidades del SI son procesar entradas, mantener archivos de datos de la organización y producir información/reportes. Eliminar incertidumbre y transferir riesgos son de otros temas."
        },
        {
          "id": "ms2-13-3",
          "q": "¿Cuáles de estas afirmaciones describen a un sistema abierto?",
          "options": [
            "No intercambia nada con su medioambiente",
            "Recibe entradas desde su entorno",
            "Produce salidas hacia su entorno",
            "Vive completamente aislado de todo objeto externo",
            "Funciona sin ninguna frontera definida"
          ],
          "correctIndexes": [
            1,
            2
          ],
          "explain": "Un sistema abierto recibe entradas y produce salidas interactuando con su medioambiente. Lo de no intercambiar nada o vivir aislado es justo lo contrario de abierto."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-13-1",
        "front": "¿Qué es un sistema de información (SI)?",
        "back": "Un conjunto organizado de componentes (personas, hardware, software, redes y datos) que interactúan para recolectar, procesar, almacenar y distribuir información."
      },
      {
        "id": "fc2-13-2",
        "front": "Propósito fundamental de un SI",
        "back": "Apoyar las operaciones, la gestión (coordinación y control) y la toma de decisiones dentro de una organización."
      },
      {
        "id": "fc2-13-3",
        "front": "Los cinco componentes clave de un SI",
        "back": "Hardware (equipos físicos), software (programas), datos (hechos en bruto), personas (usuarios y analistas) y procesos (procedimientos y reglas de negocio)."
      },
      {
        "id": "fc2-13-4",
        "front": "Definición de SI de Laudon y Laudon",
        "back": "Conjunto de componentes interrelacionados que recolectan, procesan, almacenan y distribuyen información para apoyar la toma de decisión, coordinación y control de la organización."
      },
      {
        "id": "fc2-13-5",
        "front": "¿Qué es un sistema abierto?",
        "back": "Un sistema que interactúa con su medioambiente: recibe entradas y produce salidas. Ningún sistema vive aislado."
      },
      {
        "id": "fc2-13-6",
        "front": "Medioambiente de un sistema",
        "back": "Todos los objetos que se encuentran fuera de las fronteras del sistema, con los que interactúa para alcanzar sus objetivos."
      },
      {
        "id": "fc2-13-7",
        "front": "Finalidad de un sistema",
        "back": "La razón de su existencia. Los sistemas interactúan con su medioambiente para alcanzar sus objetivos y trabajan mejor dentro de niveles de desempeño tolerables."
      },
      {
        "id": "fc2-13-8",
        "front": "Finalidades de los sistemas de información",
        "back": "Procesar entradas, mantener archivos de datos relacionados con la organización y producir información, reportes y otras salidas."
      }
    ]
  },
  "14": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-14-1",
          "q": "La reducción de costos operacionales se logra optimizando el uso de recursos, minimizando errores y reduciendo la mano de obra necesaria para ciertas tareas.",
          "a": true,
          "explain": "Tal cual lo dice el texto: ese es uno de los beneficios de eficiencia operativa. La máquina hace lo rutinario, se gastan menos recursos y hay menos errores."
        },
        {
          "id": "tf2-14-2",
          "q": "El análisis de tendencias, que permite identificar patrones de mercado y comportamiento de clientes, se ubica dentro del área de eficiencia operativa.",
          "a": false,
          "explain": "No, ojo. El análisis de tendencias está en el soporte a la toma de decisiones, no en eficiencia operativa. Ahí va lo de productividad, costos y control de gastos."
        },
        {
          "id": "tf2-14-3",
          "q": "Los CRM (Customer Relationship Management) se mencionan como herramienta para personalizar la atención y fidelizar a los clientes.",
          "a": true,
          "explain": "Correcto: el texto pone al CRM dentro de la ventaja estratégica, justamente para mejorar la relación con el cliente y fidelizarlo."
        },
        {
          "id": "tf2-14-4",
          "q": "Servicios como el streaming o la banca online se mencionan como ejemplos de nuevos productos y servicios basados en la información.",
          "a": true,
          "explain": "Sí, esos son los ejemplos que da el texto de nuevos modelos de negocio basados en información, dentro de la ventaja estratégica."
        },
        {
          "id": "tf2-14-5",
          "q": "El control de gastos se describe como la capacidad de crear nuevos modelos de negocio a partir de la información disponible.",
          "a": false,
          "explain": "Mezclaste dos cosas. El control de gastos es seguimiento preciso de costos y evitar desvíos presupuestarios (eficiencia). Los nuevos modelos de negocio son ventaja estratégica."
        }
      ],
      "mc": [
        {
          "id": "mc2-14-1",
          "q": "¿En cuántas grandes áreas agrupa el texto los beneficios de los sistemas de información?",
          "options": [
            "En dos áreas claramente diferenciadas entre sí",
            "En tres áreas que cubren todo",
            "En cuatro áreas según el nivel jerárquico usado",
            "En cinco áreas ordenadas por su importancia"
          ],
          "correctIndex": 1,
          "explain": "Son tres: eficiencia operativa, soporte a la toma de decisiones y ventaja estratégica. Acordate de las tres patas."
        },
        {
          "id": "mc2-14-2",
          "q": "¿A qué área de beneficios pertenece el aumento de la productividad por automatización de tareas repetitivas?",
          "options": [
            "A la ventaja estratégica de la firma actual",
            "Al soporte a la toma de decisiones gerenciales",
            "A la eficiencia operativa",
            "A la mejora de la relación con los clientes"
          ],
          "correctIndex": 2,
          "explain": "La productividad por automatizar lo repetitivo cae en eficiencia operativa: la gente se libera para tareas de mayor valor."
        },
        {
          "id": "mc2-14-3",
          "q": "Según el texto, ¿qué aporta el sistema a los gerentes para mejorar la calidad de las decisiones?",
          "options": [
            "Información oportuna, precisa y relevante",
            "Modelos de simulación interactivos varios",
            "Reducción directa de los costos fijos",
            "Automatización total de tareas manuales"
          ],
          "correctIndex": 0,
          "explain": "El texto dice que mejora la calidad de las decisiones aportando información oportuna, precisa y relevante a los gerentes."
        },
        {
          "id": "mc2-14-4",
          "q": "¿Qué permite hacer el análisis de grandes volúmenes de datos según el texto?",
          "options": [
            "Eliminar por completo la mano de obra rutinaria",
            "Crear nuevos servicios de streaming y banca online",
            "Identificar patrones de mercado y clientes",
            "Personalizar la atención con un sistema CRM propio"
          ],
          "correctIndex": 2,
          "explain": "El análisis de tendencias permite identificar patrones de mercado, comportamiento de clientes o problemas internos. Eso está en soporte a decisiones."
        }
      ],
      "ms": [
        {
          "id": "ms2-14-1",
          "q": "¿Cuáles de los siguientes son beneficios ubicados por el texto dentro de la eficiencia operativa?",
          "options": [
            "Aumento de la productividad laboral",
            "Reducción de costos operacionales",
            "Control de gastos y desvíos del presupuesto",
            "Creación de nuevos modelos de negocio",
            "Mejora de la relación con los clientes"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Los tres primeros son eficiencia operativa. Los dos últimos pertenecen a la ventaja estratégica, no te confundas."
        },
        {
          "id": "ms2-14-2",
          "q": "¿Cuáles de estas afirmaciones corresponden al área de ventaja estratégica según el texto?",
          "options": [
            "Facilitar nuevos productos y modelos de negocio",
            "Mejorar la relación y fidelización del cliente",
            "Minimizar errores en las tareas rutinarias",
            "Generar informes para evitar desvíos presupuestarios",
            "Analizar tendencias para ver patrones de mercado"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "Ventaja estratégica son los nuevos productos/servicios y la mejora de relación con el cliente (CRM). El resto cae en otras áreas."
        },
        {
          "id": "ms2-14-3",
          "q": "Según el texto, ¿cuáles de estos beneficios pertenecen al soporte a la toma de decisiones?",
          "options": [
            "La reducción de la mano de obra necesaria",
            "El aumento directo de la productividad",
            "El seguimiento preciso de costos operativos",
            "La fidelización de clientes mediante CRM",
            "La creación de servicios de banca online"
          ],
          "correctIndexes": [],
          "explain": "Ninguna. Soporte a decisiones son la mejora en calidad de decisiones y el análisis de tendencias. Las cinco opciones pertenecen a eficiencia o a ventaja estratégica."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-14-1",
        "front": "Tres grandes áreas de beneficios de un SI",
        "back": "Eficiencia operativa, soporte a la toma de decisiones y ventaja estratégica."
      },
      {
        "id": "fc2-14-2",
        "front": "Aumento de la productividad (eficiencia operativa)",
        "back": "Automatizan tareas repetitivas y permiten que los empleados se centren en actividades de mayor valor."
      },
      {
        "id": "fc2-14-3",
        "front": "Reducción de costos operacionales",
        "back": "Optimizan el uso de recursos, minimizan errores y reducen la necesidad de mano de obra para ciertas tareas."
      },
      {
        "id": "fc2-14-4",
        "front": "Control de gastos",
        "back": "Permite un seguimiento más preciso de los costos y evita desviaciones presupuestarias."
      },
      {
        "id": "fc2-14-5",
        "front": "Análisis de tendencias (soporte a decisiones)",
        "back": "Analizar grandes volúmenes de datos para identificar patrones de mercado, comportamiento de clientes o problemas internos."
      },
      {
        "id": "fc2-14-6",
        "front": "Nuevos productos y servicios (ventaja estratégica)",
        "back": "Facilitan nuevos modelos de negocio basados en la información, como servicios de streaming o banca online."
      },
      {
        "id": "fc2-14-7",
        "front": "CRM (Customer Relationship Management)",
        "back": "Sistema que permite personalizar la atención y fidelizar a los clientes; ejemplo de mejora de la relación con el cliente."
      }
    ]
  },
  "15": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-15-1",
          "q": "El TPS opera en el nivel operativo y atiende a trabajadores de primera línea como cajeros, operarios y administrativos.",
          "a": true,
          "explain": "Sí. El TPS es el de nivel operativo, el que registra el movimiento diario y atiende a la primera línea."
        },
        {
          "id": "tf2-15-2",
          "q": "El MIS utiliza como principal fuente de entrada los datos generados por los sistemas DSS.",
          "a": false,
          "explain": "Falso: el MIS se alimenta de los datos generados por el TPS, no del DSS. El DSS es el de arriba, el de la alta gerencia."
        },
        {
          "id": "tf2-15-3",
          "q": "El DSS apoya decisiones únicas, complejas y no estructuradas donde no existen procedimientos claros para llegar a una solución.",
          "a": true,
          "explain": "Tal cual. El DSS es para los problemas raros y complejos de la alta gerencia, sin receta previa, con escenarios tipo qué pasaría si."
        },
        {
          "id": "tf2-15-4",
          "q": "Una característica clave del MIS es su alta interactividad para que el usuario manipule datos y modelos a voluntad.",
          "a": false,
          "explain": "Falso. La interactividad para explorar escenarios es del DSS. El MIS tiene poca flexibilidad analítica y se basa en informes predefinidos."
        },
        {
          "id": "tf2-15-5",
          "q": "Según el cuadro comparativo, el horizonte temporal del DSS es el futuro, mientras que el del TPS es el pasado y presente inmediato.",
          "a": true,
          "explain": "Correcto. El cuadro lo deja claro: TPS mira pasado/presente inmediato, MIS pasado/presente y DSS apunta al futuro."
        }
      ],
      "mc": [
        {
          "id": "mc2-15-1",
          "q": "¿Cuál es el objetivo principal del TPS según el texto?",
          "options": [
            "Simular escenarios económicos a futuro mediato",
            "Generar informes resumidos para los jefes de área",
            "Registrar el gran volumen de transacciones",
            "Apoyar decisiones complejas y no estructuradas hoy"
          ],
          "correctIndex": 2,
          "explain": "El TPS registra y procesa el gran volumen de transacciones diarias, sustituyendo lo manual por procesos computarizados."
        },
        {
          "id": "mc2-15-2",
          "q": "¿A qué nivel organizacional sirve el MIS?",
          "options": [
            "Al nivel táctico de la organización",
            "Al nivel operativo de primera línea",
            "Al nivel estratégico de la dirección",
            "Al nivel externo de los proveedores"
          ],
          "correctIndex": 0,
          "explain": "El MIS es de nivel táctico: sirve a los gerentes de nivel medio, jefes de departamento y gerentes regionales."
        },
        {
          "id": "mc2-15-3",
          "q": "¿Cuál de estos es un ejemplo de TPS mencionado en el texto?",
          "options": [
            "El informe mensual comparativo de ventas",
            "El análisis de rentabilidad de un pozo",
            "La evaluación del riesgo crediticio",
            "El sistema de punto de venta (POS)"
          ],
          "correctIndex": 3,
          "explain": "El POS es TPS: cada artículo escaneado registra la venta, actualiza inventario y procesa el pago. Los otros son MIS o DSS."
        },
        {
          "id": "mc2-15-4",
          "q": "¿Qué tipo de decisión asocia el cuadro comparativo al MIS?",
          "options": [
            "Una decisión completamente no estructurada",
            "Una decisión estructurada y previsible",
            "Ninguna decisión, solo registra datos",
            "Una decisión semiestructurada con modelos"
          ],
          "correctIndex": 1,
          "explain": "El MIS apoya decisiones estructuradas y previsibles, con criterios de decisión claros. El TPS no decide y el DSS va a lo no estructurado."
        },
        {
          "id": "mc2-15-5",
          "q": "Según el texto, ¿qué incorpora el DSS para apoyar decisiones?",
          "options": [
            "Modelos estadísticos, de optimización o simulación",
            "Solo informes ya predefinidos, diarios o semanales",
            "Procesos de captura rápida y masiva de transacciones",
            "Registros muy detallados de las operaciones pasadas"
          ],
          "correctIndex": 0,
          "explain": "El DSS usa modelos analíticos: estadísticos, de optimización o de simulación. Esa flexibilidad es lo que lo distingue."
        }
      ],
      "ms": [
        {
          "id": "ms2-15-1",
          "q": "¿Cuáles de las siguientes son características clave del TPS según el texto?",
          "options": [
            "Alta velocidad para procesar miles de transacciones",
            "Confiabilidad y consistencia de los datos",
            "Eficiencia en la captura de datos",
            "Flexibilidad para definir consultas propias",
            "Uso de modelos de simulación interactivos"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son del TPS. La flexibilidad de consultas y los modelos de simulación son rasgos del DSS, no del TPS."
        },
        {
          "id": "ms2-15-2",
          "q": "¿Cuáles de estos ejemplos corresponden a un DSS según el texto?",
          "options": [
            "Análisis de rentabilidad de un nuevo pozo petrolero",
            "Planificación financiera ante distintos escenarios",
            "Evaluación de riesgo crediticio de un cliente",
            "Sistema de nómina que procesa recibos de sueldo",
            "Informe mensual que compara ventas con períodos previos"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Los tres primeros son ejemplos de DSS. La nómina es TPS y el informe mensual de ventas es MIS."
        },
        {
          "id": "ms2-15-3",
          "q": "Según el texto, ¿cuáles de estas afirmaciones sobre el MIS son correctas?",
          "options": [
            "Su salida principal son informes predefinidos",
            "Tiene poca flexibilidad analítica para el usuario",
            "Apoya decisiones estructuradas y rutinarias",
            "Usa los datos del TPS como fuente principal",
            "Sirve a la alta gerencia en decisiones únicas"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras describen al MIS. La última es falsa: servir a la alta gerencia en decisiones únicas es propio del DSS."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-15-1",
        "front": "TPS (Sistema de procesamiento de transacciones)",
        "back": "SI de nivel operativo que registra y procesa el gran volumen de transacciones diarias; sustituye procedimientos manuales por procesos computarizados."
      },
      {
        "id": "fc2-15-2",
        "front": "MIS (Sistema de información administrativa)",
        "back": "SI de nivel táctico que entrega informes y resúmenes del desempeño a gerentes medios; usa datos del TPS como entrada principal."
      },
      {
        "id": "fc2-15-3",
        "front": "DSS (Sistema de soporte a decisiones)",
        "back": "SI de nivel estratégico que ayuda a la alta gerencia en decisiones únicas, complejas y no estructuradas, mediante modelos y escenarios."
      },
      {
        "id": "fc2-15-4",
        "front": "Características clave del TPS",
        "back": "Alta velocidad, confiabilidad y consistencia de los datos, y eficiencia en la captura de datos."
      },
      {
        "id": "fc2-15-5",
        "front": "Características clave del DSS",
        "back": "Interactividad (qué pasaría si), flexibilidad para definir consultas propias y uso de modelos analíticos (estadísticos, optimización, simulación)."
      },
      {
        "id": "fc2-15-6",
        "front": "Horizonte temporal de TPS, MIS y DSS",
        "back": "TPS: pasado y presente inmediato. MIS: pasado y presente. DSS: futuro."
      },
      {
        "id": "fc2-15-7",
        "front": "Ejemplos clave del cuadro comparativo",
        "back": "TPS: sistema de facturación. MIS: informe semanal de ventas. DSS: simulador de lanzamiento de producto."
      },
      {
        "id": "fc2-15-8",
        "front": "Tipo de decisión por sistema",
        "back": "TPS: ninguna (registra datos). MIS: estructurada. DSS: no estructurada o semiestructurada."
      }
    ]
  },
  "16": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-16-1",
          "q": "Según la cita de Laudon y Laudon (2012), las empresas exitosas son las que aprenden cómo usar las tecnologías para sacar provecho en sus negocios.",
          "a": true,
          "explain": "Esa es textual la cita de Laudon y Laudon (2012) que abre la sección. La tecnología sola no alcanza: hay que saber usarla."
        },
        {
          "id": "tf2-16-2",
          "q": "El texto sostiene que lo único que diferencia a empresas como Mercado Libre, Netflix o Amazon es la calidad de su producto.",
          "a": false,
          "explain": "Falso. El texto dice que NO es solo el producto, sino su dominio magistral de los sistemas de información lo que las diferencia."
        },
        {
          "id": "tf2-16-3",
          "q": "El texto propone como ejemplo de negocio tradicional a transformar un restaurante de barrio o un taller mecánico.",
          "a": true,
          "explain": "Sí, esos son los dos ejemplos que el texto da para pensar cómo un SI podría transformar un negocio tradicional."
        },
        {
          "id": "tf2-16-4",
          "q": "La referencia citada corresponde a la obra Sistemas de información gerencial: Administración de la empresa digital, en su 12.ª edición.",
          "a": true,
          "explain": "Correcto: esa es la referencia completa, Laudon y Laudon (2012), 12.ª edición, Pearson Educación, México."
        }
      ],
      "mc": [
        {
          "id": "mc2-16-1",
          "q": "Según el texto, ¿qué distingue a empresas como Mercado Libre, Netflix o Amazon del resto?",
          "options": [
            "Su capacidad de bajar todos los precios al máximo",
            "Su dominio de los sistemas de información",
            "Su gran cantidad de sucursales físicas en el país",
            "Su larga antigüedad dentro del mercado local"
          ],
          "correctIndex": 1,
          "explain": "Lo que las diferencia es su dominio magistral de los SI para entender al cliente, optimizar la logística y decidir con datos."
        },
        {
          "id": "mc2-16-2",
          "q": "¿Para qué usan el dominio de los SI estas empresas exitosas, según el texto?",
          "options": [
            "Para reemplazar por completo a todo su personal",
            "Para evitar el pago de los impuestos nacionales",
            "Para entender al cliente y optimizar logística",
            "Para copiar la estrategia de la competencia directa"
          ],
          "correctIndex": 2,
          "explain": "El texto dice que lo usan para entender al cliente, optimizar su logística y tomar decisiones estratégicas basadas en datos."
        },
        {
          "id": "mc2-16-3",
          "q": "¿A qué autores se atribuye la cita que abre la sección?",
          "options": [
            "A Porter y Millar de Harvard",
            "A Kotler y Keller de marketing",
            "A Laudon y Laudon del año 2012",
            "A Davenport y Short de procesos"
          ],
          "correctIndex": 2,
          "explain": "La cita y la referencia son de Laudon y Laudon (2012). Los demás autores no aparecen en el texto."
        },
        {
          "id": "mc2-16-4",
          "q": "¿Qué pregunta para llevarse propone el texto al lector?",
          "options": [
            "Cómo un SI transformaría un negocio tradicional",
            "Cuánto cuesta implementar un sistema ERP completo",
            "Qué lenguaje conviene para programar bien el SI",
            "Cuándo conviene tercerizar toda el área de tecnología"
          ],
          "correctIndex": 0,
          "explain": "La pregunta para llevarse es cómo un SI podría transformar un negocio tradicional, como un restaurante de barrio o un taller mecánico."
        }
      ],
      "ms": [
        {
          "id": "ms2-16-1",
          "q": "Según el texto, ¿en qué usan su dominio de los SI las empresas mencionadas como exitosas?",
          "options": [
            "En entender mejor al cliente",
            "En optimizar su logística",
            "En tomar decisiones estratégicas con datos",
            "En eliminar por completo a sus proveedores",
            "En cerrar todas sus tiendas físicas"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son las que da el texto. Eliminar proveedores y cerrar tiendas no aparecen, son inventos."
        },
        {
          "id": "ms2-16-2",
          "q": "¿Cuáles de estas afirmaciones son correctas según la sección Para reflexionar?",
          "options": [
            "La tecnología sola no hace la diferencia",
            "La diferencia la hacen las empresas que aprenden a usarla",
            "Solo importa tener el mejor producto del mercado",
            "La cita es atribuida a Laudon y Laudon (2012)",
            "El SI no puede transformar negocios tradicionales"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "La 1, 2 y 4 son correctas. La 3 contradice el texto (no es solo el producto) y la 5 también (justamente invita a pensar esa transformación)."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-16-1",
        "front": "Idea central de la cita de Laudon y Laudon (2012)",
        "back": "Las empresas exitosas son las que aprenden cómo usar las tecnologías para sacar provecho en sus negocios."
      },
      {
        "id": "fc2-16-2",
        "front": "¿Qué diferencia a Mercado Libre, Netflix o Amazon?",
        "back": "No solo su producto, sino su dominio magistral de los sistemas de información."
      },
      {
        "id": "fc2-16-3",
        "front": "¿Para qué usan los SI estas empresas?",
        "back": "Para entender al cliente, optimizar su logística y tomar decisiones estratégicas basadas en datos."
      },
      {
        "id": "fc2-16-4",
        "front": "Pregunta para llevarse de la sección",
        "back": "Cómo un sistema de información podría transformar un negocio tradicional, como un restaurante de barrio o un taller mecánico."
      },
      {
        "id": "fc2-16-5",
        "front": "Referencia bibliográfica de la sección",
        "back": "Laudon, K. C. y Laudon, J. P. (2012). Sistemas de información gerencial: Administración de la empresa digital (12.ª ed.). México: Pearson Educación."
      },
      {
        "id": "fc2-16-6",
        "front": "Mensaje de cierre de la unidad",
        "back": "La tecnología sola no hace la diferencia; la hacen las empresas que aprenden a usarla y dominan sus sistemas de información."
      }
    ]
  },
  "17": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-17-1",
          "q": "Un sistema de información es solo el software que utiliza la organización para sus tareas diarias.",
          "a": false,
          "explain": "Falso. El texto recalca que un SI es mucho más que software: es un conjunto de componentes interrelacionados que recolectan, procesan, almacenan y distribuyen información."
        },
        {
          "id": "tf2-17-2",
          "q": "Un sistema de información es eficaz solo si logra soportar, optimizar o transformar los procesos de negocio.",
          "a": true,
          "explain": "Tal cual lo dice el texto. Si el SI no soporta, optimiza o transforma los procesos, no sirve de nada."
        },
        {
          "id": "tf2-17-3",
          "q": "En el ejemplo de gestión de un pedido de venta, el proceso queda contenido únicamente dentro del área de ventas.",
          "a": false,
          "explain": "Falso. El pedido cruza cuatro áreas: ventas, logística/almacén, contabilidad y envíos. Por eso un ERP integrado es clave."
        },
        {
          "id": "tf2-17-4",
          "q": "El CSO o CISO es el responsable de implementar la política de seguridad de la información en la empresa.",
          "a": true,
          "explain": "Correcto. El CSO/CISO está a cargo de la seguridad de los SI y es quien implementa la política de seguridad de la información."
        },
        {
          "id": "tf2-17-5",
          "q": "Según el texto, la infraestructura de TI se limita exclusivamente al hardware y al software de la empresa.",
          "a": false,
          "explain": "Falso. La infraestructura de TI es un ecosistema: hardware, software, almacenamiento de datos, redes/telecomunicaciones y recursos humanos."
        }
      ],
      "mc": [
        {
          "id": "mc2-17-1",
          "q": "Según el texto, ¿qué es un sistema de información (SI)?",
          "options": [
            "Un programa que registra las ventas diarias",
            "Un conjunto de componentes interrelacionados",
            "Un servidor con su base de datos asociada en red",
            "Un equipo de técnicos del área digital de la firma"
          ],
          "correctIndex": 1,
          "explain": "Un SI es un conjunto de componentes interrelacionados que recolectan, procesan, almacenan y distribuyen información para apoyar decisiones, coordinación y control."
        },
        {
          "id": "mc2-17-2",
          "q": "¿Qué tipo de sistema integra procesos como manufactura, finanzas, ventas y marketing en un solo software?",
          "options": [
            "El sistema TPS de transacciones",
            "El sistema DSS de soporte",
            "El sistema ESS de ejecutivos",
            "El sistema ERP de recursos"
          ],
          "correctIndex": 3,
          "explain": "El ERP (planificación de recursos empresariales) integra procesos de negocio como manufactura, producción, finanzas, ventas y marketing en un solo sistema."
        },
        {
          "id": "mc2-17-3",
          "q": "Según el texto, ¿qué define a un proceso de negocio?",
          "options": [
            "Un conjunto de actividades lógicamente relacionadas",
            "Un grupo de servidores conectados a la misma red local",
            "Un informe resumido y periódico para la gerencia media",
            "Un modelo estadístico de simulación analítica avanzada"
          ],
          "correctIndex": 0,
          "explain": "Un proceso de negocio es un conjunto de actividades lógicamente relacionadas que definen cómo se realizan tareas para producir un producto o servicio."
        },
        {
          "id": "mc2-17-4",
          "q": "Según la tabla de roles, ¿qué hace un analista de sistemas?",
          "options": [
            "Escribe las instrucciones de software de los equipos",
            "Supervisa el uso de la tecnología en toda la empresa",
            "Traduce problemas y requerimientos del negocio",
            "Implementa la política de seguridad de los datos"
          ],
          "correctIndex": 2,
          "explain": "El analista de sistemas traduce los problemas y requerimientos de negocios y sistemas de información. Escribir código es del programador."
        },
        {
          "id": "mc2-17-5",
          "q": "¿Cuál de estos roles supervisa el uso de la tecnología en toda la empresa?",
          "options": [
            "El CIO (Director de información)",
            "El CSO o CISO de seguridad",
            "El programador de aplicaciones",
            "El gerente de SI del equipo"
          ],
          "correctIndex": 0,
          "explain": "El CIO (Director de información) supervisa el uso de tecnología en la empresa. El CSO/CISO se ocupa específicamente de la seguridad."
        }
      ],
      "ms": [
        {
          "id": "ms2-17-1",
          "q": "Según el texto, ¿cuáles de estos elementos forman parte de la infraestructura de TI como ecosistema?",
          "options": [
            "Hardware: servidores y dispositivos de red",
            "Software: sistemas operativos y SGBD",
            "Almacenamiento: bases de datos y data warehouses",
            "Redes y telecomunicaciones como Internet y LAN",
            "Recursos humanos que administran la infraestructura"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son correctas. El texto define la infraestructura de TI como ecosistema que incluye hardware, software, almacenamiento, redes y recursos humanos."
        },
        {
          "id": "ms2-17-2",
          "q": "En el ejemplo de gestión de un pedido de venta, ¿cuáles de estas áreas intervienen según el texto?",
          "options": [
            "Ventas, donde el vendedor ingresa el pedido",
            "Logística/Almacén, que prepara los productos",
            "Contabilidad, que genera y envía la factura",
            "Marketing, que diseña la campaña del producto",
            "Envíos, que despacha el pedido al cliente"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Intervienen ventas, logística/almacén, contabilidad y envíos. Marketing no figura en ese proceso de ejemplo."
        },
        {
          "id": "ms2-17-3",
          "q": "Según el texto, ¿cuáles de estos sistemas se mencionan al describir los tipos de SI por nivel gerencial?",
          "options": [
            "TPS de procesamiento de transacciones",
            "MIS de información gerencial",
            "DSS de soporte a decisiones",
            "ESS de apoyo a ejecutivos",
            "ERP de planificación de recursos"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Los cinco están: TPS, MIS, DSS, ESS y ERP. El texto los nombra a todos al enfocar los tipos por nivel gerencial."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-17-1",
        "front": "Definición de sistema de información (SI)",
        "back": "Conjunto de componentes interrelacionados que recolectan, procesan, almacenan y distribuyen información para apoyar la toma de decisiones, la coordinación y el control."
      },
      {
        "id": "fc2-17-2",
        "front": "Proceso de negocio",
        "back": "Conjunto de actividades lógicamente relacionadas que definen cómo se realizan tareas específicas para producir un producto o servicio."
      },
      {
        "id": "fc2-17-3",
        "front": "¿Cuándo es eficaz un SI?",
        "back": "Solo si logra soportar, optimizar o transformar los procesos de negocio de la organización."
      },
      {
        "id": "fc2-17-4",
        "front": "ESS (Sistema de apoyo a ejecutivos)",
        "back": "Ayuda al nivel superior a tomar decisiones no rutinarias que requieren juicio de valor y perspectiva, sin un procedimiento acordado de antemano."
      },
      {
        "id": "fc2-17-5",
        "front": "ERP (Planificación de recursos empresariales)",
        "back": "Integra procesos de negocio como manufactura, producción, finanzas, ventas y marketing en un solo sistema de software."
      },
      {
        "id": "fc2-17-6",
        "front": "Componentes de la infraestructura de TI",
        "back": "Hardware, software, almacenamiento de datos, redes y telecomunicaciones, y los recursos humanos que la administran y operan."
      },
      {
        "id": "fc2-17-7",
        "front": "Rol del CIO vs CSO/CISO",
        "back": "El CIO (Director de información) supervisa el uso de tecnología en la empresa; el CSO/CISO está a cargo de la seguridad de la información."
      },
      {
        "id": "fc2-17-8",
        "front": "Roles de programador y analista de sistemas",
        "back": "El programador escribe las instrucciones de software; el analista de sistemas traduce los problemas y requerimientos de negocios y sistemas."
      }
    ]
  },
  "18": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-18-1",
          "q": "El desarrollo de un sistema de información es un acto único y espontáneo, no un proceso estructurado.",
          "a": false,
          "explain": "Al revés: el texto arranca diciendo que NO es un acto único, sino un proceso estructurado conocido como CVDS. Justamente la gracia es que sea ordenado y controlado."
        },
        {
          "id": "tf2-18-2",
          "q": "Según el CVDS, la determinación de requerimientos consiste en recopilar y documentar las necesidades específicas.",
          "a": true,
          "explain": "Tal cual lo define el texto: esa fase responde a juntar y dejar por escrito las necesidades puntuales del negocio."
        },
        {
          "id": "tf2-18-3",
          "q": "La fase de análisis es la más crítica del ciclo, y un error ahí casi con seguridad conduce al fracaso del proyecto.",
          "a": true,
          "explain": "Es la idea central de la sección: si arrancás mal el análisis, todo lo que venga después se construye sobre una base equivocada."
        },
        {
          "id": "tf2-18-4",
          "q": "La fase de diseño del sistema responde a la pregunta sobre qué problema se necesita resolver.",
          "a": false,
          "explain": "Esa pregunta corresponde a la investigación preliminar. El diseño responde al 'cómo se resolverá el problema', mediante la creación de modelos."
        },
        {
          "id": "tf2-18-5",
          "q": "El mantenimiento y seguimiento es la fase de operación y mejora continua del sistema.",
          "a": true,
          "explain": "Es la última etapa del ciclo: una vez que el sistema corre, se lo mantiene y se lo mejora de forma continua."
        }
      ],
      "mc": [
        {
          "id": "mc2-18-1",
          "q": "¿Qué asegura el ciclo de vida del desarrollo de sistemas (CVDS)?",
          "options": [
            "Que el software se construya siempre con la menor cantidad de líneas de código posible y barato",
            "Que el proyecto se realice de manera ordenada, controlada y cumpla los objetivos del negocio",
            "Que la tecnología elegida sea siempre la más moderna y costosa del mercado disponible al momento",
            "Que el presupuesto total del proyecto se reduzca a la mitad exacta en cada una de las fases sucesivas"
          ],
          "correctIndex": 1,
          "explain": "El texto lo dice expreso: el ciclo asegura un proceso ordenado, controlado y alineado con los objetivos del negocio. Lo demás son inventos que no figuran."
        },
        {
          "id": "mc2-18-2",
          "q": "¿Cuál de estas fases responde a la pregunta '¿cómo se resolverá el problema?' mediante modelos?",
          "options": [
            "Determinación de requerimientos del proyecto",
            "Investigación preliminar y análisis",
            "Diseño del sistema de información",
            "Prueba del sistema y verificación"
          ],
          "correctIndex": 2,
          "explain": "El diseño es la fase del 'cómo', y se apoya en la creación de modelos. El 'qué se necesita' es la investigación preliminar."
        },
        {
          "id": "mc2-18-3",
          "q": "Dentro de 'definir necesidades', ¿qué actividad NO se menciona en el texto?",
          "options": [
            "Estimar el costo total del hardware necesario",
            "Entender cómo se genera el problema a resolver",
            "Definir la forma de obtener la información",
            "Lograr una definición adecuada del problema"
          ],
          "correctIndex": 0,
          "explain": "El texto lista definir el problema, entender cómo se genera, definir info/acciones y la forma de obtenerla. La estimación del costo de hardware no aparece ahí."
        },
        {
          "id": "mc2-18-4",
          "q": "Según el texto, ¿por qué la fase de análisis merece la mayor atención?",
          "options": [
            "Porque es la fase más larga en cantidad total de horas de trabajo invertidas",
            "Porque un error ahí construye lo demás sobre una base equivocada",
            "Porque es la única fase donde participa el usuario final del nuevo sistema",
            "Porque consume por lejos la mayor parte del presupuesto total del proyecto"
          ],
          "correctIndex": 1,
          "explain": "La clave es esa: si la base está mal, diseño, desarrollo y pruebas quedan parados sobre algo equivocado. Por eso es la fase más crítica."
        },
        {
          "id": "mc2-18-5",
          "q": "¿Cuál es la fase que viene inmediatamente después de la prueba del sistema?",
          "options": [
            "Mantenimiento y seguimiento del sistema",
            "Determinación de los requerimientos",
            "Desarrollo del software del sistema",
            "Implantación o puesta en marcha"
          ],
          "correctIndex": 3,
          "explain": "El orden es: prueba, después implantación (puesta en marcha) y recién al final mantenimiento. La implantación es la que sigue justo después de probar."
        }
      ],
      "ms": [
        {
          "id": "ms2-18-1",
          "q": "¿Cuáles de las siguientes son fases del CVDS según el texto?",
          "options": [
            "Diseño del sistema",
            "Auditoría externa de seguridad",
            "Prueba del sistema",
            "Mantenimiento y seguimiento",
            "Determinación de requerimientos"
          ],
          "correctIndexes": [
            0,
            2,
            3,
            4
          ],
          "explain": "Diseño, prueba, mantenimiento y determinación de requerimientos son fases reales del ciclo. La auditoría externa de seguridad no figura entre las etapas."
        },
        {
          "id": "ms2-18-2",
          "q": "Sobre 'definir necesidades', ¿qué puntos menciona el texto?",
          "options": [
            "Definición adecuada del problema",
            "Entender cómo se genera el problema",
            "Definición de la información y acciones que lo resuelven",
            "Definición de la forma de obtener la información",
            "Selección del lenguaje de programación a utilizar"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Los primeros cuatro están textuales en la lista de definir necesidades. El lenguaje de programación es decisión técnica posterior, no figura ahí."
        },
        {
          "id": "ms2-18-3",
          "q": "¿Cuáles de estas afirmaciones sobre el CVDS son correctas según el texto?",
          "options": [
            "El CVDS permite saltear pasos según convenga al equipo",
            "El análisis es la fase menos importante de todas",
            "El CVDS garantiza que el costo sea siempre mínimo",
            "El orden de las fases puede invertirse libremente",
            "Cada fase del ciclo puede ejecutarse en cualquier orden sin riesgo"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. El texto compara el CVDS con una receta: no se saltean pasos ni se hacen en cualquier orden, y el análisis es la fase MÁS crítica, no la menos."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-18-1",
        "front": "¿Qué es el CVDS?",
        "back": "El ciclo de vida del desarrollo de sistemas: un proceso estructurado que asegura que el proyecto se realice de forma ordenada, controlada y cumpliendo los objetivos del negocio."
      },
      {
        "id": "fc2-18-2",
        "front": "¿Cuál es la fase más crítica del CVDS y por qué?",
        "back": "La fase de análisis (investigación preliminar y comprensión del problema). Un error ahí casi con seguridad conduce al fracaso, porque todo lo demás se construye sobre una base equivocada."
      },
      {
        "id": "fc2-18-3",
        "front": "¿Qué pregunta responde la fase de diseño del sistema?",
        "back": "¿Cómo se resolverá el problema? Se concreta mediante la creación de modelos."
      },
      {
        "id": "fc2-18-4",
        "front": "¿Qué responde la investigación preliminar y análisis?",
        "back": "¿Cuál es el problema y qué se necesita?"
      },
      {
        "id": "fc2-18-5",
        "front": "¿En qué consiste la determinación de requerimientos?",
        "back": "En recopilar y documentar las necesidades específicas del negocio."
      },
      {
        "id": "fc2-18-6",
        "front": "¿Qué incluye el paso de 'definir necesidades'?",
        "back": "Definir adecuadamente el problema, entender cómo se genera, definir la información y acciones que lo resuelven, y definir la forma de obtener la información."
      },
      {
        "id": "fc2-18-7",
        "front": "¿Qué es la fase de implantación?",
        "back": "La puesta en marcha del sistema dentro de la organización."
      },
      {
        "id": "fc2-18-8",
        "front": "¿Qué pasa en mantenimiento y seguimiento?",
        "back": "Es la fase de operación y mejora continua del sistema una vez puesto en marcha."
      }
    ]
  },
  "19": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-19-1",
          "q": "Las técnicas de relevamiento se usan porque los analistas no conocen los detalles de trabajo de la organización y los usuarios no saben qué información es relevante para los analistas.",
          "a": true,
          "explain": "Esa doble brecha es justamente el motivo: cada lado sabe lo suyo y le falta lo del otro. Las técnicas son el puente entre ambos."
        },
        {
          "id": "tf2-19-2",
          "q": "La entrevista no estructurada usa una lista de preguntas predefinidas para obtener datos específicos y comparables.",
          "a": false,
          "explain": "Eso describe a la estructurada. La no estructurada es una conversación abierta, ideal para las primeras etapas cuando todavía entendés el panorama general."
        },
        {
          "id": "tf2-19-3",
          "q": "El efecto Hawthorne indica que una persona observada actúa de forma diferente, especialmente en las observaciones directas.",
          "a": true,
          "explain": "Tal cual: la gente cambia su comportamiento cuando se sabe observada, y el analista tiene que tenerlo en cuenta al relevar."
        },
        {
          "id": "tf2-19-4",
          "q": "Una desventaja clave del cuestionario es que, una vez enviado, no podés repreguntar ni aclarar si algo se entiende mal.",
          "a": true,
          "explain": "Ese es el warning del texto: si la pregunta se interpreta mal, la respuesta sale mal y no tenés cómo corregir sobre la marcha."
        },
        {
          "id": "tf2-19-5",
          "q": "Los cuestionarios cerrados piden respuestas libres y cualitativas, con consignas como describa o explique.",
          "a": false,
          "explain": "Al revés: eso son los abiertos. Los cerrados ofrecen opciones limitadas y fáciles de cuantificar, como múltiple choice, sí/no o semáforo."
        }
      ],
      "mc": [
        {
          "id": "mc2-19-1",
          "q": "¿Cuándo conviene especialmente usar cuestionarios en lugar de entrevistas?",
          "options": [
            "Cuando hace falta explorar a fondo un problema todavía bastante poco definido",
            "Cuando los usuarios son muchos y están distribuidos geográficamente",
            "Cuando se necesita observar de cerca el comportamiento real del personal",
            "Cuando hay que revisar los manuales y comprobantes ya existentes de la empresa"
          ],
          "correctIndex": 1,
          "explain": "El cuestionario escala donde la entrevista no: muchos usuarios, dispersos, cuando querés cuantificar o necesitás anonimato. Lo demás corresponde a otras técnicas."
        },
        {
          "id": "mc2-19-2",
          "q": "¿Qué caracteriza a la observación indirecta?",
          "options": [
            "El analista contempla situaciones espontáneas no planificadas",
            "El analista planifica observar durante un período determinado",
            "El analista participa activamente realizando las tareas del usuario",
            "El analista revisa la documentación histórica de la organización"
          ],
          "correctIndex": 0,
          "explain": "La indirecta es la espontánea, sin planificar. La planificada y por un período es la directa. Revisar documentación ya es revisión de registros."
        },
        {
          "id": "mc2-19-3",
          "q": "¿Cuál es una ventaja del cuestionario mencionada en el texto?",
          "options": [
            "Permite repreguntar y aclarar dudas en el momento",
            "Su anonimato favorece respuestas más sinceras",
            "Garantiza obtener gran cantidad de información detallada",
            "Crea un vínculo personal cercano con el entrevistado"
          ],
          "correctIndex": 1,
          "explain": "El anonimato que da el cuestionario hace que la gente conteste más sincera. Repreguntar y el vínculo personal son justamente lo que NO permite."
        },
        {
          "id": "mc2-19-4",
          "q": "¿Cuál de estos es un problema típico de las entrevistas según el texto?",
          "options": [
            "Entrevistar a la persona correcta en el momento erróneo",
            "Eliminar por completo toda influencia del analista sobre el usuario",
            "Relevar un alto volumen de respuestas a bajo costo y rápido",
            "Permitir el anonimato total de cada uno de los entrevistados"
          ],
          "correctIndex": 0,
          "explain": "Entrevistar a la persona correcta pero en mal momento es uno de los problemas listados. Las otras opciones son ventajas del cuestionario, no de la entrevista."
        },
        {
          "id": "mc2-19-5",
          "q": "La revisión de comprobantes incluye, según el texto, documentos como:",
          "options": [
            "Manuales de operación e instalación de sistemas",
            "Expedientes, legajos, minutas y circulares",
            "Facturas, remitos, recibos y órdenes de compra",
            "Sitios web de la empresa y artículos periodísticos"
          ],
          "correctIndex": 2,
          "explain": "Los comprobantes son facturas, remitos, recibos, órdenes de compra, solicitudes y formularios. Los manuales, expedientes y sitios web caen en otras categorías."
        }
      ],
      "ms": [
        {
          "id": "ms2-19-1",
          "q": "¿Cuáles son barreras que impiden una comunicación eficaz entre usuarios y analistas según el texto?",
          "options": [
            "Diferentes vocabularios",
            "Choque de personalidades y caracteres",
            "Falta de presupuesto del proyecto",
            "Ausencia de hardware adecuado",
            "Incompatibilidad de software entre áreas"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "El texto nombra distintos vocabularios y choque de personalidades/caracteres como barreras. Presupuesto, hardware y software no figuran como obstáculos de comunicación."
        },
        {
          "id": "ms2-19-2",
          "q": "¿Cuáles de estas son pautas para las entrevistas mencionadas en el texto?",
          "options": [
            "Utilizar un organigrama",
            "Obtener la aprobación para realizar las entrevistas",
            "Programarlas con antelación",
            "Garantizar el anonimato de las respuestas",
            "Enviar un detalle de lo relevado al entrevistado"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Organigrama, aprobación, programar con antelación y enviar el detalle son pautas de entrevista. El anonimato es una ventaja del cuestionario, no una pauta de entrevista."
        },
        {
          "id": "ms2-19-3",
          "q": "¿Cuáles de estas son categorías de la revisión de registros?",
          "options": [
            "Revisión de manuales",
            "Revisión de comprobantes",
            "Revisión de entrevistas grabadas",
            "Revisión de sistemas actuales",
            "Revisión de reportes y gráficos"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Manuales, comprobantes, sistemas actuales y reportes/gráficos son categorías reales. 'Revisión de entrevistas grabadas' no aparece en la tabla de registros."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-19-1",
        "front": "¿Por qué se usan las técnicas de relevamiento?",
        "back": "Porque hay una doble brecha: los analistas no conocen los detalles del trabajo de la organización y los usuarios no saben qué información es relevante para los analistas. Sirven de puente."
      },
      {
        "id": "fc2-19-2",
        "front": "Entrevista estructurada vs. no estructurada",
        "back": "La no estructurada es conversación abierta, ideal para etapas iniciales. La estructurada usa una lista de preguntas predefinidas, útil para datos específicos y comparables."
      },
      {
        "id": "fc2-19-3",
        "front": "¿Cuándo conviene usar cuestionarios?",
        "back": "Cuando hay gran cantidad de usuarios, están distribuidos geográficamente, se necesita cuantificar respuestas o se busca anonimato."
      },
      {
        "id": "fc2-19-4",
        "front": "Cuestionarios abiertos vs. cerrados",
        "back": "Abiertos: respuestas libres y cualitativas (describa, explique, detalle). Cerrados: opciones limitadas y cuantificables (múltiple choice, sí/no, semáforo)."
      },
      {
        "id": "fc2-19-5",
        "front": "¿Qué es el efecto Hawthorne?",
        "back": "Una persona observada actúa de forma diferente, especialmente en las observaciones directas. La gente cambia su comportamiento al saberse observada."
      },
      {
        "id": "fc2-19-6",
        "front": "Observación directa vs. indirecta",
        "back": "Directa: el analista observa de forma planificada durante un período. Indirecta: contempla situaciones espontáneas, sin haberlas planificado."
      },
      {
        "id": "fc2-19-7",
        "front": "Desventaja clave del cuestionario",
        "back": "Una vez enviado no podés repreguntar ni aclarar. Si la pregunta se entiende mal, la respuesta sale mal. Además son impersonales y limitados a lo que preguntaste."
      },
      {
        "id": "fc2-19-8",
        "front": "¿Qué es la revisión de registros?",
        "back": "Analizar la documentación existente de la organización: manuales, documentos, comprobantes, reportes y gráficos, sistemas actuales y otras fuentes."
      }
    ]
  },
  "20": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-20-1",
          "q": "El modelo lógico describe qué hará el sistema sin importar cómo se implementará tecnológicamente, y funciona como lenguaje común entre usuario y analista.",
          "a": true,
          "explain": "Ese es el rol del modelo lógico: el QUÉ conceptual, sin meterse en tecnología. Es el plano arquitectónico, no los planos de ingeniería."
        },
        {
          "id": "tf2-20-2",
          "q": "El modelo físico define los flujos de información, los procesos y los almacenes de datos a nivel conceptual.",
          "a": false,
          "explain": "Eso lo define el modelo lógico. El físico baja a tecnología: interfaz, base de datos con tablas y campos, y especificaciones de procesos como algoritmos."
        },
        {
          "id": "tf2-20-3",
          "q": "La normalización busca reducir la redundancia de datos y mejorar su integridad en bases relacionales.",
          "a": true,
          "explain": "Es la definición exacta: un proceso formal para diseñar bases relacionales con menos redundancia y mejor integridad."
        },
        {
          "id": "tf2-20-4",
          "q": "La segunda forma normal (2FN) elimina las dependencias transitivas de la clave primaria.",
          "a": false,
          "explain": "La 2FN elimina dependencias parciales (datos que no dependen de la clave completa). Las transitivas las elimina la 3FN."
        },
        {
          "id": "tf2-20-5",
          "q": "En el ejemplo de pedidos, borrar el pedido 102 podría hacer perder la información de que el producto P55 es un 'Teclado'.",
          "a": true,
          "explain": "Ese es el problema de la tabla sin normalizar: como todo vive mezclado, al borrar un pedido te llevás puesta info del producto que debería existir aparte."
        }
      ],
      "mc": [
        {
          "id": "mc2-20-1",
          "q": "¿Cuál es el objetivo del modelo lógico?",
          "options": [
            "Traducir todo el diseño lógico a especificaciones técnicas detalladas",
            "Representar la solución conceptualmente describiendo qué hará",
            "Definir el calibre del cableado eléctrico y el tipo de cimientos",
            "Detallar todas las tablas, campos y tipos de datos de la base"
          ],
          "correctIndex": 1,
          "explain": "El lógico es el QUÉ conceptual, sin tecnología. Traducir a especificaciones técnicas y detallar tablas/campos es trabajo del modelo físico."
        },
        {
          "id": "mc2-20-2",
          "q": "Según la analogía del texto, el modelo físico equivale a:",
          "options": [
            "El plano arquitectónico que muestra las habitaciones",
            "La lista de necesidades del cliente todavía sin resolver",
            "El organigrama de la empresa que solicita el sistema",
            "Los planos de construcción e ingeniería detallados"
          ],
          "correctIndex": 3,
          "explain": "El físico son los planos de ingeniería: cimientos, calibre del cableado, material de tuberías. El plano arquitectónico es la analogía del modelo lógico."
        },
        {
          "id": "mc2-20-3",
          "q": "En el ejemplo, ¿qué problema resuelve pasar a tercera forma normal (3FN)?",
          "options": [
            "Una dependencia parcial respecto de la clave compuesta del registro",
            "La existencia de varios grupos repetitivos en la tabla original sin tocar",
            "Una dependencia transitiva: NombreCliente depende de ClienteID",
            "La falta de una clave primaria bien definida en la tabla de detalle"
          ],
          "correctIndex": 2,
          "explain": "La 3FN ataca la transitiva: NombreCliente depende de ClienteID, que a su vez depende de PedidoID. Por eso se separa la tabla clientes."
        },
        {
          "id": "mc2-20-4",
          "q": "¿Cuál de estos NO es un tipo de archivo mencionado en el almacenamiento?",
          "options": [
            "Archivos de configuración",
            "Archivos maestros del sistema general",
            "Archivos de las transacciones diarias",
            "Archivos de resguardo o backup completo"
          ],
          "correctIndex": 0,
          "explain": "El texto lista maestros, transacciones, reportes y resguardo. 'Archivos de configuración' no aparece entre los tipos."
        },
        {
          "id": "mc2-20-5",
          "q": "En el análisis de hechos, ¿qué aspecto puede conducir a problemas en los otros tres?",
          "options": [
            "La capacidad disponible del sistema actualmente existente",
            "La accesibilidad de la información en formato útil",
            "Los mecanismos de control de las actividades del sistema",
            "La complejidad por número de tareas o interrelaciones"
          ],
          "correctIndex": 3,
          "explain": "La tabla dice que la complejidad conduce a problemas en capacidad, control y accesibilidad. Por eso sus estrategias son simplificar, dividir o cambiar la secuencia."
        }
      ],
      "ms": [
        {
          "id": "ms2-20-1",
          "q": "¿Qué elementos define el modelo lógico según el texto?",
          "options": [
            "Flujos de información",
            "Procesos",
            "Almacenes de datos",
            "Diseño de la interfaz de pantallas",
            "Especificaciones de algoritmos"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "El lógico define flujos, procesos y almacenes de datos. La interfaz y los algoritmos ya son cosa del modelo físico."
        },
        {
          "id": "ms2-20-2",
          "q": "¿Cuáles son razones para normalizar mencionadas en el texto?",
          "options": [
            "Estructurar los datos para representar las relaciones",
            "Permitir la recuperación sencilla de los datos",
            "Aumentar la velocidad del procesador del servidor",
            "Simplificar el mantenimiento de los datos",
            "Reducir la necesidad de reestructuración"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Estructurar, recuperar fácil, simplificar mantenimiento y reducir reestructuración son las razones. La velocidad del procesador no figura como motivo."
        },
        {
          "id": "ms2-20-3",
          "q": "¿Cuáles de estos son elementos que el diseño debe especificar según el texto?",
          "options": [
            "Flujo de datos",
            "Almacenes de datos",
            "Procedimientos",
            "Controles",
            "Funciones del personal"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Acá están todos: el texto lista flujo de datos, almacenes, procesos, procedimientos, controles y funciones del personal como los elementos a especificar."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-20-1",
        "front": "Modelo lógico vs. modelo físico",
        "back": "El lógico describe QUÉ hará el sistema sin importar la tecnología (plano arquitectónico). El físico traduce eso a especificaciones técnicas: CÓMO se construye (planos de ingeniería)."
      },
      {
        "id": "fc2-20-2",
        "front": "¿Qué define el modelo lógico?",
        "back": "Flujos de información (de dónde viene y a dónde va), procesos (transformaciones) y almacenes de datos (qué se guarda)."
      },
      {
        "id": "fc2-20-3",
        "front": "¿Qué define el modelo físico?",
        "back": "Diseño de la interfaz (pantallas y reportes), diseño de la base de datos (tablas, campos, tipos, relaciones) y especificaciones de procesos (lógica de programación, algoritmos)."
      },
      {
        "id": "fc2-20-4",
        "front": "¿Qué es la normalización?",
        "back": "Un proceso formal para diseñar bases de datos relacionales, con el objetivo de reducir la redundancia de datos y mejorar su integridad."
      },
      {
        "id": "fc2-20-5",
        "front": "¿Qué hace cada forma normal (1FN, 2FN, 3FN)?",
        "back": "1FN: estructura bidimensional sin grupos repetitivos. 2FN: elimina dependencias parciales (datos que no dependen de la clave completa). 3FN: elimina dependencias transitivas."
      },
      {
        "id": "fc2-20-6",
        "front": "Tipos de archivos en el almacenamiento",
        "back": "Maestros, transacciones, reportes y resguardo."
      },
      {
        "id": "fc2-20-7",
        "front": "Aspectos del análisis de hechos",
        "back": "Capacidad, control, accesibilidad de la información y complejidad. La complejidad conduce a problemas en los otros tres."
      },
      {
        "id": "fc2-20-8",
        "front": "¿Cuál es el objetivo de la fase de diseño?",
        "back": "Refinar los modelos hasta crear especificaciones completas para construir el sistema, según el diseño lógico y físico. Un área clave es el diseño de la base de datos."
      }
    ]
  },
  "21": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-21-1",
          "q": "La prueba White box examina la lógica interna del código para asegurar que cada rama y bucle funcione como se espera.",
          "a": true,
          "explain": "Exacto: White box (prueba de código) mira el programa por dentro, revisando ramas y bucles. Es la prueba de la lógica del programa."
        },
        {
          "id": "tf2-21-2",
          "q": "En la prueba Black box el tester examina el código interno para verificar cada condición del sistema.",
          "a": false,
          "explain": "Black box es justamente lo contrario: verifica resultados SIN conocer el código interno. Se fija si el sistema cumple los requerimientos funcionales."
        },
        {
          "id": "tf2-21-3",
          "q": "La conversión en paralelo es la más segura pero también la más costosa.",
          "a": true,
          "explain": "Tal cual el tradeoff del texto: corren el viejo y el nuevo a la vez, lo que da seguridad pero sale caro mantener los dos andando."
        },
        {
          "id": "tf2-21-4",
          "q": "La conversión abrupta o Big bang es la más segura porque permite volver atrás fácilmente.",
          "a": false,
          "explain": "Es la más rápida pero la más riesgosa: apagás el viejo y prendés el nuevo en una fecha. No tiene la red de seguridad del paralelo."
        },
        {
          "id": "tf2-21-5",
          "q": "Capacitar a supervisores y operadores forma parte de las tareas de preimplementación.",
          "a": true,
          "explain": "Sí: junto con planificar, hacer las pruebas de usuarios/QA y desarrollar documentación, la capacitación va antes de lanzar el sistema."
        }
      ],
      "mc": [
        {
          "id": "mc2-21-1",
          "q": "¿Qué verifica la prueba de especificación (Black box)?",
          "options": [
            "La lógica interna de cada una de las ramas y bucles del código",
            "Los resultados del sistema sin conocer el código interno",
            "El calibre del cableado y la capacidad real del hardware usado",
            "La cantidad total de líneas de código escritas por el equipo"
          ],
          "correctIndex": 1,
          "explain": "Black box mira resultados desde afuera, sin ver el código, fijándose en si cumple los requerimientos. La lógica interna es lo que mira White box."
        },
        {
          "id": "mc2-21-2",
          "q": "¿Cuál de estas estrategias implementa el sistema completo en una pequeña parte de la organización?",
          "options": [
            "Conversión gradual o por fases",
            "Conversión en paralelo continua",
            "Conversión piloto controlada",
            "Conversión abrupta o Big bang"
          ],
          "correctIndex": 2,
          "explain": "La piloto pone el sistema completo en una porción chica; si funciona, se expande. La gradual va por módulos, no el sistema completo en una parte."
        },
        {
          "id": "mc2-21-3",
          "q": "La prueba 'de carga máxima' busca verificar:",
          "options": [
            "El tiempo de respuesta justo en el momento de mayor carga",
            "La capacidad total disponible para almacenar toda la información",
            "El correcto funcionamiento de los backups y los reinicios del sistema",
            "Si el sistema soporta el volumen en el nivel más alto de demanda"
          ],
          "correctIndex": 3,
          "explain": "La de carga máxima chequea que el sistema aguante el volumen de procesamiento en el pico de demanda. El tiempo de respuesta es la de tiempo de ejecución."
        },
        {
          "id": "mc2-21-4",
          "q": "¿Cuál de estas es una tarea de la puesta en marcha (no de preimplementación)?",
          "options": [
            "Capacitar con tiempo a los supervisores y a los operadores del sistema",
            "Efectuar las pruebas previas de los usuarios y del equipo de QA",
            "Desarrollar toda la documentación pensada para usuarios y operadores",
            "Poner en marcha el sistema y completar su documentación"
          ],
          "correctIndex": 3,
          "explain": "Poner en marcha el sistema y completar la documentación son tareas de la puesta en marcha. Capacitar, probar y desarrollar documentación son de preimplementación."
        },
        {
          "id": "mc2-21-5",
          "q": "¿Qué prueba especial corresponde a la 'prueba de usabilidad'?",
          "options": [
            "La prueba de factores humanos",
            "La prueba de recuperación de datos",
            "La prueba de los procedimientos",
            "La prueba de almacenamiento masivo"
          ],
          "correctIndex": 0,
          "explain": "La de factores humanos es la prueba de usabilidad. La de procedimientos prueba la documentación y la de recuperación los backups o reinicios."
        }
      ],
      "ms": [
        {
          "id": "ms2-21-1",
          "q": "¿Cuáles de las siguientes son estrategias de conversión mencionadas en el texto?",
          "options": [
            "En paralelo",
            "Gradual o por fases",
            "Piloto",
            "Por simulación virtual",
            "Abrupta o Big bang"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Paralelo, gradual, piloto y abrupta son las cuatro estrategias. 'Por simulación virtual' no aparece en el texto."
        },
        {
          "id": "ms2-21-2",
          "q": "¿Cuáles de estas son tareas de la preimplementación?",
          "options": [
            "Planificar la implementación y la puesta en marcha",
            "Efectuar las pruebas de los usuarios y de QA",
            "Desarrollar documentación para usuarios y operadores",
            "Capacitar a supervisores y operadores",
            "Poner en marcha el sistema propiamente dicho"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son tareas previas al lanzamiento. Poner en marcha el sistema ya es tarea de la puesta en marcha, no de preimplementación."
        },
        {
          "id": "ms2-21-3",
          "q": "Sobre las pruebas especiales, ¿cuáles de estas afirmaciones son correctas según el texto?",
          "options": [
            "La de almacenamiento prueba la documentación",
            "La de recuperación testea la capacidad de almacenar información",
            "La de tiempo de ejecución mide el soporte de carga máxima",
            "La de procedimientos mide el tiempo de respuesta en el pico",
            "La de carga máxima testea backups y reinicios"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta: están todas cruzadas. Almacenamiento testea capacidad de guardar; recuperación prueba backups/reinicios; tiempo de ejecución mide respuesta en el pico; procedimientos prueba la documentación; y carga máxima mide el volumen en demanda alta."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-21-1",
        "front": "White box vs. Black box",
        "back": "White box (prueba de código): examina la lógica interna del programa, cada rama y bucle. Black box (prueba de especificación): verifica resultados sin conocer el código, según los requerimientos funcionales."
      },
      {
        "id": "fc2-21-2",
        "front": "¿Cuáles son las cuatro estrategias de conversión?",
        "back": "En paralelo, gradual (por fases), piloto y abrupta (Big bang)."
      },
      {
        "id": "fc2-21-3",
        "front": "Tradeoff entre paralelo y Big bang",
        "back": "La conversión en paralelo es la más segura pero la más costosa. La abrupta (Big bang) es la más rápida pero la más riesgosa."
      },
      {
        "id": "fc2-21-4",
        "front": "¿Qué es la conversión piloto?",
        "back": "Se implementa el sistema completo en una pequeña parte de la organización. Si funciona, se expande al resto."
      },
      {
        "id": "fc2-21-5",
        "front": "Los seis tipos de pruebas especiales",
        "back": "De carga máxima, de almacenamiento, de tiempo de ejecución, de recuperación, de procedimientos y de factores humanos."
      },
      {
        "id": "fc2-21-6",
        "front": "¿Qué prueba la de recuperación y la de procedimientos?",
        "back": "Recuperación: prueba de backups o de reinicio. Procedimientos: prueba la documentación."
      },
      {
        "id": "fc2-21-7",
        "front": "Tareas de preimplementación",
        "back": "Planificar la implementación y puesta en marcha, efectuar pruebas de usuarios y QA, desarrollar documentación para usuarios y operadores, y capacitar a supervisores y operadores."
      },
      {
        "id": "fc2-21-8",
        "front": "Tareas de la puesta en marcha",
        "back": "Finalizar la conversión de HW y SW (en paralelo, gradual, piloto o abrupta), poner en marcha el sistema y completar la documentación del sistema."
      }
    ]
  },
  "22": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-22-1",
          "q": "El mantenimiento es la fase más larga del sistema y representa la mayor parte del costo total de propiedad.",
          "a": true,
          "explain": "Tal cual: una vez implementado, el sistema entra en mantenimiento, que es lo que más dura y lo que más plata se come del costo total de propiedad."
        },
        {
          "id": "tf2-22-2",
          "q": "El mantenimiento correctivo es el que más peso tiene de los tres, con cerca del 60 %.",
          "a": false,
          "explain": "Falso. El que se lleva el 60 % es el perfectivo. El correctivo está cerca del 20 %."
        },
        {
          "id": "tf2-22-3",
          "q": "En el entorno de Producción (PROD) trabajan los usuarios finales y debe ser estable y estar protegido.",
          "a": true,
          "explain": "Sí, PROD es el sistema en vivo donde labura el usuario final. Ahí no se experimenta."
        },
        {
          "id": "tf2-22-4",
          "q": "El entorno de Desarrollo (DEV) es una réplica del entorno real donde los testers hacen pruebas formales.",
          "a": false,
          "explain": "Falso: esa descripción es la de QA. DEV es el ambiente local del programador, inestable, donde se rompe y arregla todo el tiempo."
        },
        {
          "id": "tf2-22-5",
          "q": "El objetivo del seguimiento y control es mantener el sistema en observación para verificar que satisface las necesidades de información y detectar modificaciones.",
          "a": true,
          "explain": "Correcto. El seguimiento deja el sistema en observación para chequear que cumpla y para detectar qué hay que ajustar al entorno."
        }
      ],
      "mc": [
        {
          "id": "mc2-22-1",
          "q": "¿Cuál de estos describe al mantenimiento adaptativo?",
          "options": [
            "Arreglar bugs no detectados en las pruebas con ajustes de emergencia y depuración",
            "Adaptar el sistema a cambios del entorno, como un nuevo sistema operativo",
            "Agregar funcionalidades nuevas pedidas por los usuarios y mejorar la documentación",
            "Optimizar el rendimiento del sistema recodificando para mejorar la performance"
          ],
          "correctIndex": 1,
          "explain": "El adaptativo modifica el sistema para que se adapte a cambios del entorno (nuevo SO, cambios de legislación, HW y SW). Las otras describen correctivo y perfectivo."
        },
        {
          "id": "mc2-22-2",
          "q": "¿Qué porcentaje aproximado del mantenimiento se lleva el tipo perfectivo?",
          "options": [
            "Cerca del 20 % del trabajo total de mantenimiento",
            "Cerca del 40 % del trabajo total de mantenimiento",
            "Cerca del 60 % del trabajo total de mantenimiento",
            "Cerca del 80 % del trabajo total de mantenimiento"
          ],
          "correctIndex": 2,
          "explain": "El perfectivo es el que más pesa: ~60 %. Correctivo y adaptativo rondan el 20 % cada uno."
        },
        {
          "id": "mc2-22-3",
          "q": "¿Cuál es el rol del entorno de Calidad (QA) en el pasaje del código?",
          "options": [
            "Es el ambiente local e inestable donde el programador escribe el código",
            "Es el entorno en vivo y protegido donde trabajan los usuarios finales",
            "Es la réplica del entorno real donde se valida con pruebas formales",
            "Es el repositorio central donde se guarda el historial de versiones"
          ],
          "correctIndex": 2,
          "explain": "QA es una réplica del entorno real, el filtro donde los testers validan que los cambios funcionan y no rompen nada antes de pasar a PROD."
        },
        {
          "id": "mc2-22-4",
          "q": "Según la jerarquía de tres niveles del equipo de desarrollo, ¿quién está en la base?",
          "options": [
            "El nivel Senior, que ocupa el medio de la pirámide",
            "El nivel Líder, que ocupa la cima de la pirámide",
            "El nivel Tester, externo a la pirámide del equipo",
            "El nivel Junior, que ocupa la base de la pirámide"
          ],
          "correctIndex": 3,
          "explain": "La pirámide va Junior en la base, Senior en el medio y Líder en la cima."
        },
        {
          "id": "mc2-22-5",
          "q": "¿Cuál de estas tareas corresponde a la etapa de seguimiento y control?",
          "options": [
            "Definir el cronograma inicial y el presupuesto del proyecto",
            "Preparar el informe final de posimplementación del sistema",
            "Traducir las especificaciones de diseño al lenguaje elegido",
            "Determinar cómo se pasará del sistema anterior al nuevo"
          ],
          "correctIndex": 1,
          "explain": "El seguimiento cierra con el informe final de posimplementación, más las revisiones administrativa, de HW/SW y de documentación."
        }
      ],
      "ms": [
        {
          "id": "ms2-22-1",
          "q": "¿Cuáles de estas actividades entran dentro del mantenimiento perfectivo?",
          "options": [
            "Agregar nuevas funcionalidades solicitadas por los usuarios",
            "Optimizar el rendimiento recodificando para mejorar la performance",
            "Mejorar la documentación del sistema",
            "Adaptar el sistema a un cambio en la legislación vigente",
            "Hacer ajustes de emergencia por un bug detectado en vivo"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "El perfectivo abarca nuevas funcionalidades, optimización de rendimiento y mejora de documentación. Adaptarse a la legislación es adaptativo y los ajustes de emergencia son correctivo."
        },
        {
          "id": "ms2-22-2",
          "q": "¿Cuáles de estas revisiones se llevan adelante en la etapa de seguimiento y control?",
          "options": [
            "Revisión administrativa",
            "Revisión de hardware y software",
            "Revisión de la documentación",
            "Revisión preliminar de viabilidad del negocio",
            "Revisión del cronograma de capacitación inicial"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las revisiones del seguimiento son administrativa, de HW y SW y de documentación, y se cierra con el informe de posimplementación. Las otras dos no figuran en esta etapa."
        },
        {
          "id": "ms2-22-3",
          "q": "¿Cuáles de estas afirmaciones sobre el entorno de Producción (PROD) son correctas según el texto?",
          "options": [
            "Es un entorno inestable donde se rompe y arregla el código",
            "Es donde se realizan las pruebas formales de los testers",
            "Es el ambiente local de cada programador del equipo",
            "Se permite experimentar libremente con los datos reales",
            "Es el repositorio central de control de versiones del código"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. PROD es el entorno real, estable y protegido, donde no se experimenta. Las dos primeras describen DEV y QA, y las últimas son inventadas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-22-1",
        "front": "Mantenimiento correctivo",
        "back": "Arreglar errores y fallos (bugs) no detectados en las pruebas; incluye ajustes de emergencia y depuración rutinaria. Ronda el 20 %."
      },
      {
        "id": "fc2-22-2",
        "front": "Mantenimiento adaptativo",
        "back": "Modificar el sistema para adaptarlo a cambios del entorno (nuevo SO, cambios de legislación, datos/archivos, HW y SW). Ronda el 20 %."
      },
      {
        "id": "fc2-22-3",
        "front": "Mantenimiento perfectivo",
        "back": "Mejorar el sistema: agregar funcionalidades pedidas por los usuarios, optimizar el rendimiento y mejorar la documentación. Es el de mayor peso, ~60 %."
      },
      {
        "id": "fc2-22-4",
        "front": "Entorno de Desarrollo (DEV)",
        "back": "Ambiente local de los programadores donde escriben y prueban su código. Es inestable: las cosas se rompen y arreglan todo el tiempo."
      },
      {
        "id": "fc2-22-5",
        "front": "Entorno de Calidad (QA)",
        "back": "Réplica del entorno real donde los testers hacen pruebas formales para validar que los cambios funcionan y no rompen nada existente."
      },
      {
        "id": "fc2-22-6",
        "front": "Entorno de Producción (PROD)",
        "back": "Entorno real donde trabajan los usuarios finales; el sistema en vivo, que debe ser estable y estar protegido. Acá no se experimenta."
      },
      {
        "id": "fc2-22-7",
        "front": "Jerarquía del equipo de desarrollo",
        "back": "Tres niveles: Junior en la base, Senior en el medio y Líder en la cima."
      },
      {
        "id": "fc2-22-8",
        "front": "Objetivo del seguimiento y control",
        "back": "Mantener el sistema en observación y operación controlada para verificar si satisface las necesidades de información y detectar modificaciones para adaptarlo al entorno."
      }
    ]
  },
  "23": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-23-1",
          "q": "El CVDS es una metodología estructurada que ordena el desarrollo en fases, desde la idea inicial hasta el mantenimiento.",
          "a": true,
          "explain": "Sí, el ciclo de vida del desarrollo de sistemas es como el plano de un edificio: fases ordenadas desde la idea hasta que el sistema funciona y se mantiene."
        },
        {
          "id": "tf2-23-2",
          "q": "El modelo secuencial permite empezar una actividad antes de terminar la anterior, trabajando todo en paralelo.",
          "a": false,
          "explain": "Falso. El secuencial es una fila india: terminás una actividad y arrancás la siguiente. Lo de trabajar en paralelo no es el modelo secuencial."
        },
        {
          "id": "tf2-23-3",
          "q": "En el modelo secuencial, la etapa de prueba busca detectar cada error antes de la entrega del producto al cliente.",
          "a": true,
          "explain": "Correcto. La prueba trata de cazar todos los errores antes de entregar el producto al cliente."
        },
        {
          "id": "tf2-23-4",
          "q": "El modelo secuencial es el único modelo de desarrollo posible y no existen variantes posteriores.",
          "a": false,
          "explain": "Falso. Existen otros modelos surgidos después, y la selección depende del tipo y la magnitud del sistema a desarrollar."
        },
        {
          "id": "tf2-23-5",
          "q": "La etapa de análisis y especificación de requerimientos se centra en entender el \"qué\" se requiere y finaliza documentándolo.",
          "a": true,
          "explain": "Tal cual: el análisis de requerimientos busca entender qué se requiere y cierra con la documentación de esos requisitos."
        }
      ],
      "mc": [
        {
          "id": "mc2-23-1",
          "q": "En el modelo secuencial, ¿qué etapa determina cómo se pasará del sistema anterior al nuevo?",
          "options": [
            "La etapa de diseño de la solución",
            "La etapa de prueba del producto",
            "La etapa de conversión del sistema",
            "La etapa de codificación de procesos"
          ],
          "correctIndex": 2,
          "explain": "La conversión es la que determina cómo se pasa del sistema viejo al nuevo."
        },
        {
          "id": "mc2-23-2",
          "q": "¿Cuál de estas etapas del modelo secuencial se ocupa de mostrar el \"cómo\" se llevará a cabo la solución?",
          "options": [
            "El análisis de los requerimientos",
            "El diseño de la solución",
            "La conversión hacia el nuevo sistema",
            "La producción y el mantenimiento"
          ],
          "correctIndex": 1,
          "explain": "El diseño es el que muestra el cómo; el análisis se ocupa del qué."
        },
        {
          "id": "mc2-23-3",
          "q": "¿Cuántas fases principales tiene el ciclo de vida (CVDS) según el texto?",
          "options": [
            "Cuatro fases principales",
            "Cinco fases principales",
            "Seis fases principales",
            "Siete fases principales"
          ],
          "correctIndex": 2,
          "explain": "Son seis: investigación preliminar y análisis, determinación de requerimientos, desarrollo, prueba, implantación y seguimiento y control."
        },
        {
          "id": "mc2-23-4",
          "q": "¿Qué hace la etapa de programación/codificación en el modelo secuencial?",
          "options": [
            "Toma las especificaciones del diseño y las traduce al lenguaje elegido",
            "Investiga la necesidad del negocio y evalúa su viabilidad inicial",
            "Pone el sistema en producción y atiende los cambios que se requieran",
            "Detecta cada error del producto antes de la entrega al cliente final"
          ],
          "correctIndex": 0,
          "explain": "La codificación toma las especificaciones de la etapa de diseño sobre los procesos y las traduce al lenguaje especificado."
        },
        {
          "id": "mc2-23-5",
          "q": "¿Cuál es la última de las fases principales del CVDS?",
          "options": [
            "La implantación del nuevo sistema en la organización",
            "La prueba completa del sistema antes de entregarlo",
            "El seguimiento y control posimplementación",
            "La determinación detallada de los requerimientos"
          ],
          "correctIndex": 2,
          "explain": "El ciclo cierra con el seguimiento y control (posimplementación), después de la implantación."
        }
      ],
      "ms": [
        {
          "id": "ms2-23-1",
          "q": "¿Cuáles de estas son fases principales del ciclo de vida (CVDS)?",
          "options": [
            "Investigación preliminar y análisis",
            "Determinación de requerimientos",
            "Prueba del sistema",
            "Implantación",
            "Auditoría externa obligatoria"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son fases del CVDS junto con desarrollo y seguimiento y control. La auditoría externa obligatoria no figura entre las fases."
        },
        {
          "id": "ms2-23-2",
          "q": "¿Cuáles de estas actividades forman parte del modelo secuencial de desarrollo?",
          "options": [
            "Análisis y especificación de requerimientos",
            "Diseño de la solución",
            "Programación o codificación",
            "Conversión al nuevo sistema",
            "Producción y mantenimiento"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Todas. El modelo secuencial encadena análisis, diseño, codificación, prueba, conversión y producción/mantenimiento."
        },
        {
          "id": "ms2-23-3",
          "q": "¿Cuáles de estas afirmaciones sobre el modelo secuencial son correctas según el texto?",
          "options": [
            "Es el único modelo que existe para desarrollar sistemas",
            "Sus etapas pueden saltearse sin consecuencias",
            "Permite trabajar todas las actividades simultáneamente",
            "Garantiza el éxito sin necesidad de documentar requisitos",
            "Obliga a terminar una etapa antes de empezar la siguiente sin orden lógico"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. Hay otros modelos, las etapas tienen un orden lógico que no conviene saltear, es secuencial (no simultáneo) y los requerimientos sí se documentan."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-23-1",
        "front": "CVDS",
        "back": "Ciclo de vida del desarrollo de sistemas: metodología estructurada con fases ordenadas que guían desde la idea inicial hasta que el sistema funciona y se mantiene."
      },
      {
        "id": "fc2-23-2",
        "front": "Modelo secuencial",
        "back": "Forma de desarrollo en la que las actividades se dan una a continuación de la otra: terminás una y arrancás la siguiente hasta lograr el objetivo."
      },
      {
        "id": "fc2-23-3",
        "front": "Análisis y especificación de requerimientos",
        "back": "Etapa que busca entender el \"qué\" se requiere, cuáles son los requisitos, y finaliza con la documentación de estos."
      },
      {
        "id": "fc2-23-4",
        "front": "Etapa de diseño",
        "back": "Etapa del modelo secuencial que muestra el \"cómo\" se llevará a cabo la solución."
      },
      {
        "id": "fc2-23-5",
        "front": "Etapa de prueba",
        "back": "Trata de detectar cada error antes de la entrega del producto al cliente."
      },
      {
        "id": "fc2-23-6",
        "front": "Etapa de conversión",
        "back": "Determina cómo se pasará del sistema anterior al nuevo."
      },
      {
        "id": "fc2-23-7",
        "front": "Las seis fases del CVDS",
        "back": "Investigación preliminar y análisis; determinación de requerimientos; desarrollo del sistema; prueba; implantación; seguimiento y control (posimplementación)."
      }
    ]
  },
  "24": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-24-1",
          "q": "Definir qué NO hará el sistema es tan importante como definir qué hará, porque evita que el proyecto crezca descontroladamente.",
          "a": true,
          "explain": "Sí, marcar el alcance (lo que no hace) frena el famoso \"ya que estamos, agreguemos esto otro\" que descontrola el proyecto."
        },
        {
          "id": "tf2-24-2",
          "q": "Las entrevistas son la técnica más útil para recopilar datos cuantitativos de un gran número de personas.",
          "a": false,
          "explain": "Falso. Para muchas personas y datos cuantificables sirven los cuestionarios. Las entrevistas dan información cualitativa y profunda."
        },
        {
          "id": "tf2-24-3",
          "q": "La observación permite ver el flujo real de las tareas, y a veces lo que la gente hace difiere de lo que dice que hace.",
          "a": true,
          "explain": "Tal cual: mirar cómo trabajan revela el flujo real, que no siempre coincide con lo que cuentan."
        },
        {
          "id": "tf2-24-4",
          "q": "El relevamiento preliminar es una primera investigación para entender la necesidad del negocio, su viabilidad y los posibles riesgos.",
          "a": true,
          "explain": "Correcto. El relevamiento preliminar arranca entendiendo la necesidad del negocio, qué tan viable es y qué riesgos hay."
        },
        {
          "id": "tf2-24-5",
          "q": "La revisión de registros consiste en conversaciones directas con los involucrados para obtener información cualitativa.",
          "a": false,
          "explain": "Falso. Eso son las entrevistas. La revisión de registros analiza documentación existente (manuales, reportes, formularios)."
        }
      ],
      "mc": [
        {
          "id": "mc2-24-1",
          "q": "¿Qué técnica de relevamiento conviene para cuantificar datos de un gran número de personas?",
          "options": [
            "Las entrevistas directas con cada uno de los involucrados",
            "Los cuestionarios con preguntas específicas para muchos",
            "La observación directa del trabajo diario de cada usuario",
            "La revisión de los registros y manuales existentes"
          ],
          "correctIndex": 1,
          "explain": "Los cuestionarios, con formularios de preguntas específicas, sirven para recopilar datos de mucha gente, como cuantificar tiempos entre 150 vendedores."
        },
        {
          "id": "mc2-24-2",
          "q": "¿Cuál de estas tareas pertenece a la etapa de relevamiento y planificación?",
          "options": [
            "Traducir el diseño detallado al lenguaje de programación elegido",
            "Normalizar las entradas del sistema y cerrar el modelo de datos",
            "Crear el cronograma, asignar recursos y definir el presupuesto",
            "Validar los cambios con pruebas formales en el entorno de QA"
          ],
          "correctIndex": 2,
          "explain": "El plan de trabajo arma el cronograma inicial, asigna recursos y define el presupuesto. Las otras son de etapas posteriores."
        },
        {
          "id": "mc2-24-3",
          "q": "¿Qué busca principalmente la técnica de la entrevista?",
          "options": [
            "Recopilar datos masivos de un gran número de personas a la vez",
            "Analizar los manuales y reportes formales que tiene la empresa",
            "Mirar el flujo real de las tareas de los usuarios en el día a día",
            "Obtener información cualitativa y profunda de los involucrados"
          ],
          "correctIndex": 3,
          "explain": "La entrevista es una conversación directa para sacar información cualitativa y profunda, como entender el proceso de decisión de un gerente."
        },
        {
          "id": "mc2-24-4",
          "q": "¿Cuál de estos es uno de los requerimientos que la etapa busca encontrar?",
          "options": [
            "El lenguaje de programación que se va a utilizar",
            "La marca del servidor donde correrá el sistema",
            "La frecuencia y volumen de los procesos",
            "El diseño detallado de las pantallas y reportes"
          ],
          "correctIndex": 2,
          "explain": "Entre los requerimientos a encontrar está la frecuencia y volumen de los procesos, junto con controles, transacciones y decisiones de los usuarios. Lo técnico es de etapas posteriores."
        },
        {
          "id": "mc2-24-5",
          "q": "¿Para qué sirve la definición de objetivos y alcance del proyecto?",
          "options": [
            "Para traducir las especificaciones del diseño al lenguaje elegido",
            "Para establecer qué se espera lograr y qué no hará el sistema",
            "Para detectar cada uno de los errores antes de entregar el producto",
            "Para definir las vistas lógicas y cerrar el modelo de datos del sistema"
          ],
          "correctIndex": 1,
          "explain": "Definir objetivos y alcance fija qué se espera lograr y, muy importante, qué no hará el sistema, para que no crezca descontroladamente."
        }
      ],
      "ms": [
        {
          "id": "ms2-24-1",
          "q": "¿Cuáles de estas son técnicas que usan los analistas para descubrir requerimientos?",
          "options": [
            "Entrevistas",
            "Cuestionarios",
            "Observación",
            "Revisión de registros",
            "Recodificación para mejorar la performance"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son técnicas de relevamiento. Recodificar para mejorar la performance es mantenimiento perfectivo, no una técnica para descubrir requerimientos."
        },
        {
          "id": "ms2-24-2",
          "q": "¿Qué incluye la etapa inicial de relevamiento y planificación?",
          "options": [
            "Relevamiento preliminar de la necesidad del negocio",
            "Definición de objetivos y alcance del sistema",
            "Plan de trabajo con cronograma, recursos y presupuesto",
            "Diseño detallado de las tablas y relaciones de la base de datos",
            "Puesta en producción del sistema nuevo"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "La etapa inicial implica relevamiento preliminar, definición de objetivos y alcance, y plan de trabajo. El diseño de tablas y la puesta en producción son de fases posteriores."
        },
        {
          "id": "ms2-24-3",
          "q": "¿Cuáles de estos aspectos abarcan los requerimientos a encontrar en esta etapa?",
          "options": [
            "La comprensión del proceso",
            "La frecuencia y volumen de los procesos",
            "La identificación de controles",
            "Los requisitos de transacciones de los usuarios",
            "Los requerimientos de decisión de los usuarios"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Todas. Los requerimientos abarcan comprensión del proceso, frecuencia y volumen, controles, transacciones y decisiones de los usuarios."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-24-1",
        "front": "Relevamiento preliminar",
        "back": "Primera investigación para entender la necesidad del negocio, su viabilidad y los posibles riesgos."
      },
      {
        "id": "fc2-24-2",
        "front": "Definición de objetivos y alcance",
        "back": "Establece qué se espera lograr con el sistema y, muy importante, qué NO hará; evita que el proyecto crezca descontroladamente."
      },
      {
        "id": "fc2-24-3",
        "front": "Plan de trabajo",
        "back": "Crea un cronograma inicial, asigna recursos y define un presupuesto."
      },
      {
        "id": "fc2-24-4",
        "front": "Requerimientos",
        "back": "Descripción detallada de las necesidades que el sistema debe satisfacer, planteadas por los usuarios o el cliente."
      },
      {
        "id": "fc2-24-5",
        "front": "Entrevistas (técnica)",
        "back": "Conversaciones directas con los involucrados para obtener información cualitativa y profunda."
      },
      {
        "id": "fc2-24-6",
        "front": "Cuestionarios (técnica)",
        "back": "Formularios con preguntas específicas, útiles para recopilar datos de un gran número de personas."
      },
      {
        "id": "fc2-24-7",
        "front": "Observación (técnica)",
        "back": "Mirar directamente cómo trabajan los usuarios para entender el flujo real; a veces lo que hacen difiere de lo que dicen hacer."
      },
      {
        "id": "fc2-24-8",
        "front": "Revisión de registros (técnica)",
        "back": "Analizar documentación existente (manuales, reportes, formularios) para comprender los procesos formales de la empresa."
      }
    ]
  },
  "25": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-25-1",
          "q": "El modelo lógico representa la solución sin preocuparse por la tecnología y funciona como puente entre usuarios y técnicos.",
          "a": true,
          "explain": "Sí, el modelo lógico es conceptual: muestra el qué sin meterse con la tecnología y comunica a usuarios con técnicos enfocándose en el negocio."
        },
        {
          "id": "tf2-25-2",
          "q": "El modelo físico es independiente de la tecnología y no considera el hardware ni el software a emplear.",
          "a": false,
          "explain": "Falso. Es al revés: el modelo físico sí toma en cuenta la tecnología (HW, SW, bases de datos) y las limitaciones reales."
        },
        {
          "id": "tf2-25-3",
          "q": "En la etapa de análisis se describe lo que debe hacer el sistema, y en la de diseño se determina cómo se cumplirá con los objetivos.",
          "a": true,
          "explain": "Correcto. Análisis = qué debe hacer; diseño = cómo se cumple con los objetivos."
        },
        {
          "id": "tf2-25-4",
          "q": "El diseño nunca puede dividirse: siempre se realiza como una única etapa indivisible.",
          "a": false,
          "explain": "Falso. En algunas oportunidades el diseño puede dividirse en diseño general y diseño detallado."
        },
        {
          "id": "tf2-25-5",
          "q": "Las consideraciones de performance y tiempos de respuesta son uno de los aspectos que define el modelo físico.",
          "a": true,
          "explain": "Tal cual: el físico define performance y tiempos de respuesta, junto con entradas, salidas, archivos, procesos, control/seguridad y el HW/SW."
        }
      ],
      "mc": [
        {
          "id": "mc2-25-1",
          "q": "¿Cuál de estos aspectos define el modelo lógico?",
          "options": [
            "El hardware y software que se van a emplear",
            "Las fuentes y destinos de la información",
            "La estructura exacta de las tablas y campos",
            "Los aspectos de control, seguridad y confidencialidad"
          ],
          "correctIndex": 1,
          "explain": "El modelo lógico define fuentes y destinos, información a almacenar, flujos, procesos de transformación y formato de los datos. Lo demás es del físico."
        },
        {
          "id": "mc2-25-2",
          "q": "Según la analogía del texto, ¿a qué se compara el modelo lógico?",
          "options": [
            "Al plano del arquitecto, que muestra habitaciones y funciones",
            "Al plano del ingeniero, que especifica el calibre de los cables",
            "Al presupuesto que define los recursos y el cronograma",
            "Al manual de usuario que se entrega al final del proyecto"
          ],
          "correctIndex": 0,
          "explain": "El lógico es como el plano del arquitecto: muestra habitaciones y cómo se conectan, sin decir si las paredes son de ladrillo o yeso. El ingeniero es el físico."
        },
        {
          "id": "mc2-25-3",
          "q": "¿Cuál de estos es uno de los tres bloques encadenados del análisis y diseño?",
          "options": [
            "La conversión al nuevo sistema",
            "El análisis de datos",
            "La implantación en producción",
            "El seguimiento posimplementación"
          ],
          "correctIndex": 1,
          "explain": "Los tres bloques son relevamiento y análisis global (S1), análisis de datos (S2) y análisis funcional (S3). Los otros son etapas distintas del ciclo."
        },
        {
          "id": "mc2-25-4",
          "q": "¿Qué tarea corresponde al bloque de análisis de datos?",
          "options": [
            "Preparar el modelo físico y lógico de la situación actual del sistema",
            "Evaluar el impacto del nuevo sistema sobre la organización",
            "Identificar y normalizar entradas y definir las vistas lógicas",
            "Identificar los requerimientos de entrada y salida del sistema"
          ],
          "correctIndex": 2,
          "explain": "El análisis de datos revisa el modelo original, identifica y normaliza entradas, define vistas lógicas y cierra el modelo de datos. Las otras son de los bloques S1 y S3."
        },
        {
          "id": "mc2-25-5",
          "q": "¿Qué traduce el modelo físico en especificaciones técnicas detalladas?",
          "options": [
            "El plan de trabajo y el presupuesto del proyecto",
            "El modelo lógico previamente definido",
            "Los registros y manuales de la empresa",
            "El informe final de posimplementación"
          ],
          "correctIndex": 1,
          "explain": "El modelo físico traduce el modelo lógico en especificaciones técnicas detalladas, ya considerando la tecnología y las limitaciones reales."
        }
      ],
      "ms": [
        {
          "id": "ms2-25-1",
          "q": "¿Cuáles de estos aspectos define en detalle el modelo físico?",
          "options": [
            "Las salidas y entradas del sistema (pantallas, reportes, formularios)",
            "Los archivos, bases de datos y estructuras de datos",
            "Las consideraciones de performance y tiempos de respuesta",
            "Los aspectos de control, seguridad y confidencialidad",
            "El hardware y software a emplear"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Todas. El modelo físico define entradas/salidas, archivos/BBDD, procesos, performance, control/seguridad y el HW/SW a emplear."
        },
        {
          "id": "ms2-25-2",
          "q": "¿Cuáles de estos son objetivos de la etapa de análisis y diseño?",
          "options": [
            "Efectuar el relevamiento detallado",
            "Formular y evaluar alternativas de solución",
            "Formular el modelo lógico",
            "Formular el modelo físico",
            "Evaluar el riesgo de la aplicación"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Todas. Los objetivos de la etapa son relevamiento detallado, formular y evaluar alternativas, formular modelo lógico y físico, y evaluar el riesgo de la aplicación."
        },
        {
          "id": "ms2-25-3",
          "q": "¿Cuáles de estas afirmaciones sobre el modelo lógico son correctas según el texto?",
          "options": [
            "Especifica la marca de las bases de datos y servidores",
            "Detalla el calibre de los cables y el tipo de ladrillos",
            "Define la estructura exacta de tablas, campos y relaciones",
            "Considera las limitaciones tecnológicas reales del sistema",
            "Establece los lenguajes de programación que se usarán"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. Todas esas son cosas del modelo físico. El lógico es conceptual e independiente de la tecnología."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-25-1",
        "front": "Modelo lógico (el \"qué\")",
        "back": "Modelo conceptual que representa la solución sin preocuparse por la tecnología; puente de comunicación entre usuarios y técnicos, enfocado en los requisitos del negocio."
      },
      {
        "id": "fc2-25-2",
        "front": "Qué define el modelo lógico",
        "back": "Fuentes y destinos de la información, información a almacenar, flujos de información, procesos de transformación y formato de los datos."
      },
      {
        "id": "fc2-25-3",
        "front": "Modelo físico (el \"cómo\")",
        "back": "Traduce el modelo lógico en especificaciones técnicas detalladas, tomando en cuenta la tecnología (HW, SW, bases de datos) y las limitaciones reales."
      },
      {
        "id": "fc2-25-4",
        "front": "Analogía de los modelos",
        "back": "El modelo lógico es el plano del arquitecto (habitaciones y funciones); el modelo físico es el plano del ingeniero (ladrillos, cables, tuberías)."
      },
      {
        "id": "fc2-25-5",
        "front": "Análisis vs. diseño",
        "back": "En el análisis se describe lo que debe hacer el sistema (qué); en el diseño se determina cómo se cumplirá con los objetivos (cómo)."
      },
      {
        "id": "fc2-25-6",
        "front": "Tres bloques del análisis y diseño",
        "back": "Relevamiento y análisis global (S1), análisis de datos (S2) y análisis funcional (S3), encadenados; producen el nuevo modelo lógico y físico."
      },
      {
        "id": "fc2-25-7",
        "front": "Objetivos de la etapa de análisis y diseño",
        "back": "Relevamiento detallado, formular y evaluar alternativas de solución, formular el modelo lógico, formular el modelo físico y evaluar el riesgo de la aplicación."
      }
    ]
  },
  "26": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-26-1",
          "q": "En la etapa de desarrollo, el sistema se construye en partes más pequeñas llamadas módulos que se prueban individualmente.",
          "a": true,
          "explain": "Tal cual: se arman módulos chiquitos y cada uno se prueba por separado antes de juntarlos. Eso es el corazón del diseño y prueba de módulos."
        },
        {
          "id": "tf2-26-2",
          "q": "Las pruebas de aceptación del usuario (UAT) las realiza el equipo de desarrollo sin intervención del usuario final.",
          "a": false,
          "explain": "Al revés: la UAT la hace el usuario final, que prueba el sistema para darle su aprobación antes de la implementación. Si la hiciera el equipo, no sería 'de aceptación del usuario'."
        },
        {
          "id": "tf2-26-3",
          "q": "Preparar la interfaz de usuario incluye crear los menús y pantallas con los que interactuará el usuario final.",
          "a": true,
          "explain": "Sí, la interfaz son los menús y pantallas que va a usar la persona. Por eso entre las tareas figura preparar menús y sentencias de control (CL)."
        },
        {
          "id": "tf2-26-4",
          "q": "Las pruebas de integración consisten en probar cada módulo por separado, antes que cualquier otra prueba.",
          "a": false,
          "explain": "Eso describe las pruebas unitarias. La integración verifica que los módulos funcionen bien juntos, que es un paso posterior al unitario."
        },
        {
          "id": "tf2-26-5",
          "q": "El diseño detallado incluye diseñar controles y procedimientos de resguardo y recuperación.",
          "a": true,
          "explain": "Sí, está listado entre las tareas del diseño detallado, junto con diseñar entradas, salidas y cálculos."
        }
      ],
      "mc": [
        {
          "id": "mc2-26-1",
          "q": "¿En qué consiste principalmente la etapa a menudo llamada 'Desarrollo'?",
          "options": [
            "Reemplazar el sistema anterior por el nuevo en toda la organización",
            "Codificar programas, armar y probar módulos y preparar la interfaz",
            "Monitorear el sistema ya en operación durante un período prolongado",
            "Relevar los requerimientos junto a los usuarios de cada área"
          ],
          "correctIndex": 1,
          "explain": "El desarrollo es escribir el código, construir y probar los módulos y preparar las pantallas. Las otras son fases distintas (conversión, seguimiento, relevamiento)."
        },
        {
          "id": "mc2-26-2",
          "q": "¿Qué nivel de prueba verifica que el sistema completo cumpla con todos los requerimientos?",
          "options": [
            "Pruebas unitarias de cada componente",
            "Pruebas de integración entre módulos",
            "Pruebas del sistema en su conjunto",
            "Pruebas de aceptación del usuario"
          ],
          "correctIndex": 2,
          "explain": "Las pruebas del sistema chequean el sistema entero contra todos los requerimientos. Las unitarias miran un módulo; la UAT busca la aprobación del usuario."
        },
        {
          "id": "mc2-26-3",
          "q": "¿En qué se basan los desarrolladores para escribir el código fuente?",
          "options": [
            "En las especificaciones definidas",
            "En la retroalimentación de un estudio piloto",
            "En el informe final de la posimplementación",
            "En los simulacros previos del plan de contingencia"
          ],
          "correctIndex": 0,
          "explain": "El código se escribe basándose en las especificaciones. Las otras pertenecen a fases posteriores (conversión, seguimiento, contingencia)."
        },
        {
          "id": "mc2-26-4",
          "q": "¿Cuál de estas tareas corresponde al diseño detallado?",
          "options": [
            "Apagar el sistema viejo en una fecha previamente fijada",
            "Medir el grado de satisfacción que tienen los usuarios",
            "Distribuir el plan de contingencia ante toda la organización",
            "Desarrollar los diagramas de estructura"
          ],
          "correctIndex": 3,
          "explain": "Desarrollar los diagramas de estructura es una tarea del diseño detallado. Las demás son de conversión, seguimiento o contingencia."
        },
        {
          "id": "mc2-26-5",
          "q": "¿Qué busca asegurar el sometimiento del sistema a pruebas rigurosas antes de entregarlo?",
          "options": [
            "La continuidad ante posibles desastres naturales",
            "La calidad del sistema antes de implementarlo",
            "El reemplazo directo del sistema anterior",
            "La conformidad de los proveedores de software"
          ],
          "correctIndex": 1,
          "explain": "Las pruebas rigurosas apuntan a asegurar la calidad antes de entregar. La continuidad ante desastres es del plan de contingencia, no de las pruebas."
        }
      ],
      "ms": [
        {
          "id": "ms2-26-1",
          "q": "¿Cuáles de los siguientes son niveles de prueba mencionados en la práctica?",
          "options": [
            "Pruebas unitarias de cada módulo",
            "Pruebas de integración entre módulos",
            "Pruebas paralelas de conversión",
            "Pruebas del sistema completo",
            "Pruebas de aceptación del usuario"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Los niveles son unitarias, integración, del sistema y de aceptación. 'Pruebas paralelas' no existe como nivel: lo paralelo es una estrategia de conversión, no de testing."
        },
        {
          "id": "ms2-26-2",
          "q": "¿Cuáles de estas son tareas explícitas del diseño detallado según el texto?",
          "options": [
            "Diseñar entradas, salidas y cálculos",
            "Describir los procesos manuales",
            "Identificar productos de software y definir criterios",
            "Preparar menús y sentencias de control",
            "Capacitar al usuario en el sistema final"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras están listadas como tareas del diseño detallado. Capacitar al usuario no figura entre esas tareas en este texto."
        },
        {
          "id": "ms2-26-3",
          "q": "¿Cuáles de las siguientes son estrategias de conversión descritas en esta sección sobre desarrollo y pruebas?",
          "options": [
            "Estrategia paralela de operación",
            "Estrategia de reemplazo directo",
            "Estrategia de estudio piloto",
            "Estrategia de pruebas unitarias",
            "Estrategia de revisión técnica"
          ],
          "correctIndexes": [],
          "explain": "Ojo, ninguna: esta sección trata desarrollo y pruebas, no conversión. Las estrategias de conversión se explican en otra sección, así que acá la respuesta correcta es 'ninguna'."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-26-1",
        "front": "¿Qué se hace en la etapa de 'Desarrollo'?",
        "back": "Se escribe el código, se arman y prueban los módulos, y se prepara la interfaz de usuario (menús y pantallas)."
      },
      {
        "id": "fc2-26-2",
        "front": "Pruebas unitarias",
        "back": "Probar cada módulo por separado, de forma individual."
      },
      {
        "id": "fc2-26-3",
        "front": "Pruebas de integración",
        "back": "Verificar que los módulos funcionan bien juntos."
      },
      {
        "id": "fc2-26-4",
        "front": "Pruebas del sistema",
        "back": "Probar el sistema completo para asegurar que cumple con todos los requerimientos."
      },
      {
        "id": "fc2-26-5",
        "front": "Pruebas de aceptación del usuario (UAT)",
        "back": "El usuario final prueba el sistema para darle su aprobación antes de la implementación."
      },
      {
        "id": "fc2-26-6",
        "front": "¿Qué encadena el diseño detallado?",
        "back": "El diseño detallado, las instalaciones de software y la programación."
      },
      {
        "id": "fc2-26-7",
        "front": "Codificar los programas",
        "back": "Los desarrolladores escriben el código fuente basándose en las especificaciones."
      },
      {
        "id": "fc2-26-8",
        "front": "Interfaz de usuario",
        "back": "Los menús y pantallas con los que interactuará el usuario final."
      }
    ]
  },
  "27": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-27-1",
          "q": "La conversión es el proceso de reemplazar el sistema antiguo por el nuevo.",
          "a": true,
          "explain": "Exacto, esa es la definición de conversión: pasar del sistema viejo al nuevo. Y es un momento crítico, por eso hay estrategias para bajar el riesgo."
        },
        {
          "id": "tf2-27-2",
          "q": "En la estrategia paralela, el sistema viejo se apaga en una fecha determinada y se enciende el nuevo de inmediato.",
          "a": false,
          "explain": "Eso es el reemplazo directo. En la paralela los dos sistemas operan juntos durante un tiempo para tener red por si el nuevo falla."
        },
        {
          "id": "tf2-27-3",
          "q": "La estrategia de estudio piloto introduce el sistema en un área limitada, como una sola sucursal, antes de extenderlo.",
          "a": true,
          "explain": "Sí, el piloto prueba en chico (una sucursal) y, con la retroalimentación, se hacen los cambios para después implementarlo en toda la organización."
        },
        {
          "id": "tf2-27-4",
          "q": "El reemplazo directo es la estrategia más segura porque siempre se puede volver al sistema anterior.",
          "a": false,
          "explain": "Justo al revés: el reemplazo directo es el más riesgoso, 'a todo o nada', no hay vuelta atrás. La más segura es la paralela."
        },
        {
          "id": "tf2-27-5",
          "q": "La principal desventaja de la estrategia paralela es que resulta muy costosa y requiere doble trabajo.",
          "a": true,
          "explain": "Correcto: la paralela da máxima seguridad pero te hace pagar doble, porque los empleados tienen que operar los dos sistemas a la vez."
        }
      ],
      "mc": [
        {
          "id": "mc2-27-1",
          "q": "¿Qué caracteriza a la estrategia de reemplazo directo?",
          "options": [
            "El viejo y el nuevo operan a la vez durante un tiempo",
            "Se prueba primero en una sola sucursal limitada",
            "Se apaga el viejo y se enciende el nuevo en una fecha",
            "Se revisa el hardware y el software de forma periódica"
          ],
          "correctIndex": 2,
          "explain": "El reemplazo directo apaga el viejo y prende el nuevo en una fecha fija. Operar a la vez es la paralela; probar en una sucursal es el piloto."
        },
        {
          "id": "mc2-27-2",
          "q": "¿Cuál es la principal ventaja de la estrategia paralela?",
          "options": [
            "Máxima seguridad ante una falla del nuevo",
            "Rapidez y menor costo de implementación",
            "Implementación total más veloz que el resto",
            "Eliminación completa del doble trabajo"
          ],
          "correctIndex": 0,
          "explain": "La paralela da máxima seguridad: si el nuevo falla, el viejo sigue operando. Rápida y barata es el reemplazo directo, no esta."
        },
        {
          "id": "mc2-27-3",
          "q": "¿Por qué se dice que la estrategia piloto es el equilibrio entre las demás?",
          "options": [
            "Porque es la más barata de todas las opciones",
            "Porque prueba en chico antes de jugarse en grande",
            "Porque elimina por completo cualquier riesgo posible",
            "Porque apaga el sistema viejo de forma inmediata"
          ],
          "correctIndex": 1,
          "explain": "El piloto te deja probar en un entorno real pero controlado (una sucursal) antes de ir a toda la empresa. Por eso equilibra riesgo y costo."
        },
        {
          "id": "mc2-27-4",
          "q": "¿Cuál es la desventaja señalada de la estrategia piloto?",
          "options": [
            "No deja ninguna red de respaldo si el sistema llega a fallar",
            "Obliga a sostener un doble trabajo de forma permanente",
            "Resulta la estrategia más costosa de todas las opciones",
            "El proceso total de implementación es más lento"
          ],
          "correctIndex": 3,
          "explain": "La contra del piloto es que la implementación total se hace más lenta. El 'sin red' es del directo y el 'doble trabajo/costosa' es de la paralela."
        },
        {
          "id": "mc2-27-5",
          "q": "Según el texto, ¿qué estrategia es la más barata y rápida pero 'a todo o nada'?",
          "options": [
            "La estrategia de operación paralela",
            "La estrategia de estudio piloto",
            "La estrategia de reemplazo directo",
            "La estrategia de revisión técnica"
          ],
          "correctIndex": 2,
          "explain": "El reemplazo directo es el más barato y rápido, pero si el nuevo falla no tenés red: por eso es 'a todo o nada'."
        }
      ],
      "ms": [
        {
          "id": "ms2-27-1",
          "q": "¿Cuáles de las siguientes son estrategias de conversión mencionadas en el texto?",
          "options": [
            "Estrategia paralela",
            "Estrategia de reemplazo directo",
            "Estrategia de estudio piloto",
            "Estrategia de prueba unitaria",
            "Estrategia de integración modular"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres estrategias de conversión son paralela, reemplazo directo y piloto. Unitaria e integración son niveles de prueba, no estrategias de conversión."
        },
        {
          "id": "ms2-27-2",
          "q": "¿Cuáles de estas afirmaciones describen correctamente la estrategia paralela?",
          "options": [
            "Los dos sistemas funcionan a la vez un tiempo",
            "Ofrece máxima seguridad ante fallas",
            "Requiere doble trabajo para los empleados",
            "Es la más rápida y barata de aplicar",
            "Resulta una estrategia muy costosa"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "La paralela: opera ambos a la vez, da máxima seguridad, exige doble trabajo y es costosa. Lo de 'rápida y barata' es del reemplazo directo."
        },
        {
          "id": "ms2-27-3",
          "q": "¿Cuáles de estas son ventajas de la estrategia de reemplazo directo?",
          "options": [
            "Es rápida de implementar",
            "Es menos costosa que la paralela",
            "Permite volver atrás sin problemas",
            "Prueba en un entorno controlado primero",
            "Mantiene el sistema viejo como respaldo"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "El reemplazo directo es rápido y menos costoso. No deja volver atrás ni mantiene respaldo (eso es su riesgo), y no prueba en chico (eso es el piloto)."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-27-1",
        "front": "¿Qué es la conversión?",
        "back": "El proceso de reemplazar el sistema antiguo por el nuevo. Es un momento crítico con estrategias para minimizar el riesgo."
      },
      {
        "id": "fc2-27-2",
        "front": "Estrategia paralela",
        "back": "El sistema viejo y el nuevo operan juntos durante un tiempo. Máxima seguridad, pero costosa y con doble trabajo."
      },
      {
        "id": "fc2-27-3",
        "front": "Estrategia de reemplazo directo",
        "back": "Se apaga el viejo y se enciende el nuevo en una fecha determinada. Rápida y barata, pero muy riesgosa: no hay vuelta atrás."
      },
      {
        "id": "fc2-27-4",
        "front": "Estrategia de estudio piloto",
        "back": "Se implementa en un área pequeña o sucursal; con la retroalimentación se ajusta y luego se extiende a toda la organización."
      },
      {
        "id": "fc2-27-5",
        "front": "Ventaja del piloto",
        "back": "Permite probar el sistema en un entorno real pero controlado."
      },
      {
        "id": "fc2-27-6",
        "front": "Desventaja del piloto",
        "back": "El proceso total de implementación es más lento."
      },
      {
        "id": "fc2-27-7",
        "front": "Desventaja del reemplazo directo",
        "back": "Muy riesgosa: no hay vuelta atrás si algo sale mal."
      }
    ]
  },
  "28": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-28-1",
          "q": "El trabajo de un sistema termina en el momento en que se enciende y entra en operación.",
          "a": false,
          "explain": "No: el trabajo no termina ahí. Es vital monitorear el sistema en operación para ver si cumple objetivos y si el usuario está conforme."
        },
        {
          "id": "tf2-28-2",
          "q": "Las revisiones técnicas incluyen revisar periódicamente el hardware, el software y la documentación.",
          "a": true,
          "explain": "Sí, las revisiones técnicas miran HW, SW y documentación cada cierto tiempo para que todo esté actualizado y funcionando bien."
        },
        {
          "id": "tf2-28-3",
          "q": "Un plan de contingencia busca asegurar la continuidad del negocio ante emergencias.",
          "a": true,
          "explain": "Tal cual: el plan de contingencia apunta a que las operaciones y servicios críticos sigan funcionando aunque pase algo grave."
        },
        {
          "id": "tf2-28-4",
          "q": "La prueba del plan de contingencia consiste en distribuirlo entre todos los empleados de la organización.",
          "a": false,
          "explain": "No: probar el plan es hacer simulacros para asegurar que funciona. La distribución es otra etapa distinta dentro del armado del plan."
        },
        {
          "id": "tf2-28-5",
          "q": "Un aumento inesperado de la carga de trabajo figura entre las eventualidades que prevé un plan de contingencia.",
          "a": true,
          "explain": "Sí, está listado como ejemplo, junto con desastres naturales, fallas de equipamiento, intrusiones y otros peligros."
        }
      ],
      "mc": [
        {
          "id": "mc2-28-1",
          "q": "¿Cuál es uno de los objetivos de monitorear el sistema en operación?",
          "options": [
            "Reemplazar el sistema anterior por el nuevo",
            "Verificar el cumplimiento de los objetivos",
            "Codificar y probar los módulos del sistema",
            "Definir las especificaciones del modelo físico"
          ],
          "correctIndex": 1,
          "explain": "El seguimiento busca verificar si el sistema realmente cumple los objetivos para los que fue creado. Las otras son tareas de fases anteriores."
        },
        {
          "id": "mc2-28-2",
          "q": "¿Qué se revisa en las revisiones técnicas del seguimiento?",
          "options": [
            "La satisfacción emocional de los proveedores",
            "Las estrategias de conversión del sistema",
            "El hardware, el software y la documentación",
            "Los criterios de evaluación de los productos"
          ],
          "correctIndex": 2,
          "explain": "Las revisiones técnicas revisan HW, SW y documentación para que todo esté actualizado y óptimo. Las demás no son lo que se revisa acá."
        },
        {
          "id": "mc2-28-3",
          "q": "¿Cuál es el primer paso al crear un plan de contingencia robusto?",
          "options": [
            "Distribuir el plan a las áreas",
            "Realizar el análisis de riesgo",
            "Aplicar el plan en emergencia",
            "Revisar el plan de forma continua"
          ],
          "correctIndex": 1,
          "explain": "Arranca con el análisis de riesgo: identificar qué podría salir mal. Recién después se crea, se prueba, se distribuye, se aplica y se revisa."
        },
        {
          "id": "mc2-28-4",
          "q": "¿Qué objetivo persigue la evaluación del sistema?",
          "options": [
            "Apagar el sistema viejo en una fecha que se haya determinado de antemano",
            "Escribir el código fuente de los programas del sistema según especificaciones",
            "Armar y probar de manera individual cada uno de los módulos por separado",
            "Detectar a tiempo hechos que deriven en actitudes negativas"
          ],
          "correctIndex": 3,
          "explain": "La evaluación busca detectar oportunamente hechos que puedan derivar en actitudes negativas y tomar acciones correctivas a tiempo. Las otras son de desarrollo o conversión."
        },
        {
          "id": "mc2-28-5",
          "q": "¿Qué salida produce el proceso de seguimiento y control?",
          "options": [
            "La información posimplementación",
            "El modelo físico detallado del diseño",
            "El código fuente de cada uno de los módulos",
            "Las estrategias de conversión del sistema"
          ],
          "correctIndex": 0,
          "explain": "La salida del seguimiento es la información posimplementación, junto con el informe final. Las otras pertenecen a otras fases del proyecto."
        }
      ],
      "ms": [
        {
          "id": "ms2-28-1",
          "q": "¿Cuáles de los siguientes son objetivos de la evaluación del sistema?",
          "options": [
            "Detectar a tiempo hechos que deriven en actitudes negativas",
            "Verificar el cumplimiento de los objetivos iniciales",
            "Medir el grado de satisfacción de los usuarios",
            "Identificar necesidades de entrenamiento y capacitación",
            "Reducir el costo del hardware comprado"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Los cuatro primeros son objetivos de la evaluación. Reducir el costo del hardware no figura entre los objetivos del texto."
        },
        {
          "id": "ms2-28-2",
          "q": "¿Cuáles de estas son etapas para crear un plan de contingencia robusto?",
          "options": [
            "Análisis de riesgo",
            "Creación del plan de contingencia",
            "Prueba del plan mediante simulacros",
            "Distribución y aplicación del plan",
            "Revisión continua del plan"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Acá todas valen: análisis de riesgo, creación, prueba, distribución, aplicación y revisión continua son las etapas listadas en el texto."
        },
        {
          "id": "ms2-28-3",
          "q": "¿Cuáles de las siguientes son tareas del relevamiento inicial de requerimientos según esta sección de seguimiento?",
          "options": [
            "Entrevistar a los usuarios para captar necesidades",
            "Definir el alcance del proyecto nuevo",
            "Construir el diagrama de flujo de datos lógico",
            "Elegir la estrategia de conversión a usar",
            "Redactar la propuesta inicial del sistema"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: esta sección habla de seguimiento, control y planes de contingencia, no de relevamiento de requerimientos. Todas son de otra fase, así que va vacío."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-28-1",
        "front": "¿Por qué es vital monitorear el sistema en operación?",
        "back": "Para verificar el cumplimiento de objetivos, medir la satisfacción del usuario y realizar revisiones técnicas."
      },
      {
        "id": "fc2-28-2",
        "front": "Revisiones técnicas",
        "back": "Revisar periódicamente el hardware, el software y la documentación, para que todo esté actualizado y funcionando de forma óptima."
      },
      {
        "id": "fc2-28-3",
        "front": "¿Qué busca un plan de contingencia?",
        "back": "Asegurar la continuidad del negocio y de las operaciones y servicios críticos ante emergencias o eventualidades."
      },
      {
        "id": "fc2-28-4",
        "front": "Ejemplos de eventualidades",
        "back": "Desastres naturales, interrupción de suministros, intrusiones/vandalismo/terrorismo, aumento de carga, fallas de equipamiento, entre otros."
      },
      {
        "id": "fc2-28-5",
        "front": "Etapas del plan de contingencia",
        "back": "Análisis de riesgo, creación del plan, prueba (simulacros), distribución, aplicación y revisión continua."
      },
      {
        "id": "fc2-28-6",
        "front": "Análisis de riesgo",
        "back": "Identificar qué podría salir mal. Es la primera etapa del plan de contingencia."
      },
      {
        "id": "fc2-28-7",
        "front": "Salida del seguimiento y control",
        "back": "La información posimplementación y el informe final de posimplementación."
      },
      {
        "id": "fc2-28-8",
        "front": "Objetivo de la evaluación del sistema",
        "back": "Detectar a tiempo hechos que deriven en actitudes negativas y tomar acciones correctivas, verificando objetivos y satisfacción."
      }
    ]
  },
  "29": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-29-1",
          "q": "La base material de la lengua es el sonido, y el sentido al que impresiona predominantemente es el oído.",
          "a": true,
          "explain": "Sí: la lengua es en el fondo sonido y le entra al otro por el oído. La escritura, que entra por la vista, es una forma secundaria."
        },
        {
          "id": "tf2-29-2",
          "q": "La escritura es la forma primaria de la lengua y el sonido es una forma secundaria.",
          "a": false,
          "explain": "Al revés: el sonido es la base material primaria y la escritura es la forma secundaria, que se percibe por la vista."
        },
        {
          "id": "tf2-29-3",
          "q": "En la comunicación oral, muchas veces las frases se dejan truncas y se completa el mensaje con un gesto.",
          "a": true,
          "explain": "Exacto: hablando captamos que el otro ya entendió, así que dejamos la frase a medias y la cerramos con un gesto."
        },
        {
          "id": "tf2-29-4",
          "q": "En la comunicación escrita, la entonación se transcribe mediante signos de puntuación.",
          "a": true,
          "explain": "Sí: como no hay voz, la entonación se reemplaza por signos de puntuación al escribir."
        },
        {
          "id": "tf2-29-5",
          "q": "En la comunicación escrita está permitido dejar frases incompletas porque el lector siempre repregunta.",
          "a": false,
          "explain": "No: justamente al escribir no hay feedback inmediato, así que las frases deben ser completas y sin ambigüedades. El lector no puede repreguntar en el momento."
        }
      ],
      "mc": [
        {
          "id": "mc2-29-1",
          "q": "¿Cuál es la base material de la lengua según el texto?",
          "options": [
            "La escritura percibida por la vista",
            "El sonido percibido por el oído",
            "Los signos de puntuación del texto",
            "Los gestos que acompañan al habla"
          ],
          "correctIndex": 1,
          "explain": "La base material de la lengua es el sonido, que impresiona al oído. La escritura es secundaria y entra por la vista."
        },
        {
          "id": "mc2-29-2",
          "q": "¿Cómo se reemplaza la entonación en la comunicación escrita?",
          "options": [
            "Con signos de puntuación",
            "Con gestos del interlocutor",
            "Con repeticiones del mensaje",
            "Con énfasis en las palabras"
          ],
          "correctIndex": 0,
          "explain": "Al escribir, la entonación se transcribe por signos de puntuación, ya que no hay voz que la transmita."
        },
        {
          "id": "mc2-29-3",
          "q": "¿Por qué en la comunicación escrita las frases deben ser completas?",
          "options": [
            "Porque el lector siempre interpreta el tono de voz",
            "Porque la escritura es la forma primaria de la lengua",
            "Porque los gestos refuerzan el mensaje escrito",
            "Porque no se puede constatar lo que no escribimos"
          ],
          "correctIndex": 3,
          "explain": "Como no hay feedback en el momento, no podés saber si el lector interpretó lo que no escribiste; por eso hay que ser completo y sin ambigüedades."
        },
        {
          "id": "mc2-29-4",
          "q": "Si el interlocutor no comprende en la comunicación oral, ¿qué se puede hacer?",
          "options": [
            "Agregar más signos de puntuación al enunciado",
            "Repetir el mensaje o explicarlo de otra manera",
            "Dejar la frase trunca y continuar hablando igual",
            "Transcribir la entonación usando énfasis y giros"
          ],
          "correctIndex": 1,
          "explain": "Hablando hay feedback inmediato: si no te entendieron, repetís el mensaje o lo explicás de otra forma. Eso no se puede al escribir."
        },
        {
          "id": "mc2-29-5",
          "q": "Además de las palabras, ¿qué interpreta el interlocutor en la comunicación oral?",
          "options": [
            "La entonación y el énfasis dados",
            "Los signos de puntuación del enunciado",
            "Las ambigüedades propias del lenguaje escrito",
            "Los giros característicos del texto formal"
          ],
          "correctIndex": 0,
          "explain": "Oralmente importa también la entonación y el énfasis, que el interlocutor interpreta a su manera. La puntuación es cosa de lo escrito."
        }
      ],
      "ms": [
        {
          "id": "ms2-29-1",
          "q": "¿Cuáles de estas afirmaciones describen la comunicación oral según el texto?",
          "options": [
            "Importan la entonación y el énfasis",
            "Las frases a veces se dejan truncas",
            "El mensaje se cierra con algún gesto",
            "Si no se entiende, se puede repetir",
            "La entonación se reemplaza con puntuación"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son de la oral. Reemplazar la entonación con puntuación es propio de la escrita, no de la oral."
        },
        {
          "id": "ms2-29-2",
          "q": "¿Cuáles de estas características corresponden a la comunicación escrita?",
          "options": [
            "La entonación se transcribe con signos de puntuación",
            "Las frases deben ser completas",
            "Se deben evitar ambigüedades",
            "Hay que cuidar los giros del lenguaje",
            "El interlocutor interpreta el tono a su manera"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son de la escrita. Que el interlocutor interprete el tono a su manera es de la comunicación oral."
        },
        {
          "id": "ms2-29-3",
          "q": "¿Cuáles de los siguientes son niveles de prueba de un sistema mencionados en esta sección sobre comunicación?",
          "options": [
            "Pruebas unitarias de módulos",
            "Pruebas de integración",
            "Pruebas del sistema completo",
            "Pruebas de aceptación del usuario",
            "Pruebas de regresión automatizada"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: esta sección habla de comunicación oral y escrita, no de pruebas de sistemas. Todo este listado es de otro tema, así que va vacío."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-29-1",
        "front": "¿Cuál es la base material de la lengua?",
        "back": "El sonido, que impresiona predominantemente al oído."
      },
      {
        "id": "fc2-29-2",
        "front": "¿Qué es la escritura respecto de la lengua?",
        "back": "Una forma secundaria de la lengua, que se percibe por la vista."
      },
      {
        "id": "fc2-29-3",
        "front": "En la comunicación oral, ¿qué interpreta el interlocutor además de las palabras?",
        "back": "La entonación y el énfasis que les damos a los términos, que interpreta a su manera."
      },
      {
        "id": "fc2-29-4",
        "front": "¿Qué pasa cuando el interlocutor no comprende en la comunicación oral?",
        "back": "Se puede repetir el mensaje o explicarlo de otra manera."
      },
      {
        "id": "fc2-29-5",
        "front": "En la comunicación escrita, ¿con qué se transcribe la entonación?",
        "back": "Con signos de puntuación."
      },
      {
        "id": "fc2-29-6",
        "front": "¿Por qué las frases escritas deben ser completas?",
        "back": "Porque no se puede constatar si el lector interpretó lo que no escribimos."
      },
      {
        "id": "fc2-29-7",
        "front": "¿Qué se debe evitar en la comunicación escrita?",
        "back": "Las ambigüedades, y hay que tener cuidado con los giros del lenguaje."
      }
    ]
  },
  "30": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-30-1",
          "q": "La comunicación se describe como un proceso dinámico y circular en el que se intercambia información entre dos o más partes.",
          "a": true,
          "explain": "Tal cual lo plantea el texto: es dinámico y circular, y para que sea efectiva todos sus componentes tienen que funcionar en armonía."
        },
        {
          "id": "tf2-30-2",
          "q": "Según el material, el receptor es un agente pasivo que solo recibe la información sin interpretarla.",
          "a": false,
          "explain": "Justo al revés: el receptor no es pasivo, decodifica e interpreta el mensaje según sus conocimientos, experiencias y percepciones."
        },
        {
          "id": "tf2-30-3",
          "q": "La retroalimentación cierra el círculo de la comunicación y se apoya en la habilidad de saber escuchar.",
          "a": true,
          "explain": "El feedback es la respuesta del receptor; cierra el círculo y se basa en una habilidad clave que es saber escuchar."
        },
        {
          "id": "tf2-30-4",
          "q": "La elección del medio o canal es indistinta y no influye en cómo llega el mensaje.",
          "a": false,
          "explain": "La elección del medio es estratégica: no es lo mismo comunicar un despido en persona que anunciar un evento por mail. Un medio inadecuado distorsiona el mensaje."
        },
        {
          "id": "tf2-30-5",
          "q": "El emisor codifica un pensamiento o idea en un lenguaje comprensible y tiene una intención comunicativa.",
          "a": true,
          "explain": "El emisor origina el mensaje, codifica la idea en lenguaje comprensible y siempre tiene una intención: informar, persuadir, solicitar, etc."
        }
      ],
      "mc": [
        {
          "id": "mc2-30-1",
          "q": "¿Qué componente del proceso de comunicación origina el mensaje y codifica la idea?",
          "options": [
            "El receptor, que interpreta el contenido recibido",
            "El emisor, que es la fuente de la información",
            "El medio, que traslada el contenido al destino",
            "La retroalimentación, que responde al contenido"
          ],
          "correctIndex": 1,
          "explain": "El emisor es quien origina el mensaje y la fuente de la información; codifica el pensamiento en lenguaje comprensible."
        },
        {
          "id": "mc2-30-2",
          "q": "Según el ejemplo del texto, en un correo donde un gerente envía a su equipo las instrucciones para el nuevo reporte, ¿qué cumple la función de mensaje?",
          "options": [
            "El correo electrónico utilizado como vehículo",
            "El gerente que origina la comunicación interna",
            "Las instrucciones para el reporte de ventas",
            "El equipo de trabajo que recibe el comunicado"
          ],
          "correctIndex": 2,
          "explain": "El medio es el correo, el emisor el gerente, el receptor el equipo; el mensaje son las instrucciones para el nuevo reporte de ventas."
        },
        {
          "id": "mc2-30-3",
          "q": "¿Cómo define el material a la retroalimentación dentro del proceso?",
          "options": [
            "El vehículo material por el cual viaja la información",
            "La intención comunicativa que persigue el emisor",
            "La codificación inicial de la idea original",
            "La respuesta del receptor al mensaje"
          ],
          "correctIndex": 3,
          "explain": "La retroalimentación es la respuesta del receptor al mensaje del emisor; permite saber si fue recibido y comprendido."
        },
        {
          "id": "mc2-30-4",
          "q": "Según el principio clave del texto, ¿qué pasa si una de las partes no está dispuesta a escuchar?",
          "options": [
            "El producto de la comunicación es nulo",
            "El emisor debe cambiar el medio elegido",
            "El mensaje se vuelve mucho más persuasivo",
            "El receptor pasa a cumplir el rol de emisor"
          ],
          "correctIndex": 0,
          "explain": "El principio es textual: si no estás dispuesto a escuchar, el producto de la comunicación es nulo. Es diálogo, no monólogo."
        },
        {
          "id": "mc2-30-5",
          "q": "¿Por qué se afirma que el receptor no es un agente pasivo?",
          "options": [
            "Porque elige siempre el canal donde viaja el mensaje",
            "Porque codifica la idea original antes de enviarla",
            "Porque interpreta según lo que sabe y vivió",
            "Porque define la intención previa del comunicado"
          ],
          "correctIndex": 2,
          "explain": "El receptor decodifica e interpreta el mensaje basándose en sus conocimientos, experiencias y percepciones; por eso no es pasivo."
        }
      ],
      "ms": [
        {
          "id": "ms2-30-1",
          "q": "¿Cuáles de los siguientes son componentes del proceso de comunicación según el diagrama del texto?",
          "options": [
            "Emisor",
            "Medio o canal",
            "Mensaje",
            "Receptor",
            "Retroalimentación"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "El diagrama incluye los cuatro componentes (emisor, medio, mensaje, receptor) más la retroalimentación central de escuchar: están todos."
        },
        {
          "id": "ms2-30-2",
          "q": "Según el texto, ¿qué medios o canales se mencionan para que viaje el mensaje?",
          "options": [
            "Canales orales y presenciales",
            "Canales escritos en papel",
            "Canales digitales y por correo",
            "Canales telepáticos y mentales",
            "Canales virtuales o intranet"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "El material habla de medios orales, escritos, digitales, virtuales e intranet. Lo telepático no aparece en ningún lado, es un distractor."
        },
        {
          "id": "ms2-30-3",
          "q": "¿Cuáles de estas afirmaciones sobre el emisor son correctas según el texto?",
          "options": [
            "Solo se limita a hablar sin codificar nada",
            "Es un componente que nunca tiene intención previa",
            "Recibe el mensaje y lo decodifica al final",
            "Responde al mensaje para cerrar el círculo",
            "Es la fuente que adapta el mensaje al contexto"
          ],
          "correctIndexes": [
            4
          ],
          "explain": "La única correcta es que el emisor es la fuente y adapta el mensaje al receptor y contexto. Las demás describen mal su rol o son del receptor/feedback."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-30-1",
        "front": "Emisor",
        "back": "Quien origina el mensaje y es la fuente de la información; codifica una idea en lenguaje comprensible y tiene una intención comunicativa (informar, persuadir, solicitar)."
      },
      {
        "id": "fc2-30-2",
        "front": "Mensaje",
        "back": "La información misma que se transmite: puede ser una instrucción, una solicitud, una pieza publicitaria o una capacitación."
      },
      {
        "id": "fc2-30-3",
        "front": "Medio o canal",
        "back": "El vehículo a través del cual viaja el mensaje (oral, escrito, digital o virtual). Su elección es estratégica; uno inadecuado puede distorsionar el mensaje."
      },
      {
        "id": "fc2-30-4",
        "front": "Receptor",
        "back": "Quien recibe y decodifica la información. No es pasivo: interpreta el mensaje según sus conocimientos, experiencias y percepciones."
      },
      {
        "id": "fc2-30-5",
        "front": "Retroalimentación (feedback)",
        "back": "La respuesta del receptor al mensaje del emisor. Cierra el círculo de la comunicación y se apoya en saber escuchar."
      },
      {
        "id": "fc2-30-6",
        "front": "Principio clave de la escucha",
        "back": "Si no está dispuesto a escuchar, el producto de la comunicación es nulo. La comunicación es un diálogo, no un monólogo."
      },
      {
        "id": "fc2-30-7",
        "front": "¿Por qué la comunicación es circular?",
        "back": "Porque el receptor responde mediante la retroalimentación, lo que permite al emisor saber si el mensaje fue recibido y comprendido correctamente."
      }
    ]
  },
  "31": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-31-1",
          "q": "La oratoria es el arte de hablar con elocuencia para persuadir, convencer o conmover a un auditorio.",
          "a": true,
          "explain": "Es la definición textual: elocuencia es expresarse de manera eficaz para persuadir, convencer o conmover al público."
        },
        {
          "id": "tf2-31-2",
          "q": "Según el material, un buen orador confía en la improvisación más que en la preparación.",
          "a": false,
          "explain": "Al contrario: un buen orador no improvisa, se prepara. La preparación se considera el 90 % del éxito."
        },
        {
          "id": "tf2-31-3",
          "q": "La concisión consiste en expresar las ideas con el menor número de palabras posible, yendo a lo esencial.",
          "a": true,
          "explain": "Exacto: en vez de dar vueltas, vas directo. Por ejemplo, cambiar el rodeo por un simple Propongo que consideremos."
        },
        {
          "id": "tf2-31-4",
          "q": "La estructura del contenido de un discurso se organiza en introducción, cuerpo y conclusión.",
          "a": true,
          "explain": "El esquema de redacción es de tres partes: introducción (captás atención), cuerpo (desarrollás ideas) y conclusión (resumís y cerrás)."
        },
        {
          "id": "tf2-31-5",
          "q": "El texto recomienda que la exposición incluya manifestaciones de interés personal y refleje las emociones del orador.",
          "a": false,
          "explain": "Justo lo contrario: la exposición debe ser objetiva, evitando manifestaciones de interés personal y reflejar emociones; se busca claridad y exactitud."
        }
      ],
      "mc": [
        {
          "id": "mc2-31-1",
          "q": "Según el texto, ¿qué porcentaje del éxito de un discurso se atribuye a la preparación?",
          "options": [
            "El 50 % del resultado final",
            "El 90 % del éxito logrado",
            "El 75 % del impacto total",
            "El 100 % del rendimiento"
          ],
          "correctIndex": 1,
          "explain": "El material lo dice tal cual: la preparación es el 90 % del éxito. Un buen orador no improvisa, se prepara."
        },
        {
          "id": "mc2-31-2",
          "q": "¿Cuál de estas bases del estilo oratorio se refiere a usar un lenguaje directo y sin adornos innecesarios?",
          "options": [
            "La coherencia del discurso",
            "El impacto del mensaje",
            "La sencillez del lenguaje",
            "La fluidez expresiva"
          ],
          "correctIndex": 2,
          "explain": "La sencillez es lenguaje directo y sin adornos; el texto aclara que sencillez no es simpleza, es elegancia comunicativa."
        },
        {
          "id": "mc2-31-3",
          "q": "Dentro de los pasos de preparación, ¿qué implica el análisis del auditorio y contexto?",
          "options": [
            "Repetir el discurso midiendo el tiempo",
            "Recopilar datos de fuentes fiables",
            "Definir de qué hablar y qué lograr",
            "Saber quiénes escuchan y qué saben"
          ],
          "correctIndex": 3,
          "explain": "Analizar el auditorio es preguntarse quiénes escuchan, qué saben, su actitud, y en qué lugar y situación se da la charla."
        },
        {
          "id": "mc2-31-4",
          "q": "¿Cuál de las siguientes es una técnica de respiración mencionada para la comunicación hablada?",
          "options": [
            "La respiración diafragmática",
            "La memorización completa del texto",
            "El uso de jerga técnica abundante",
            "La improvisación bajo presión"
          ],
          "correctIndex": 0,
          "explain": "El texto menciona la respiración diafragmática, además de relajación, no respirar por la boca y vestir ropa cómoda."
        },
        {
          "id": "mc2-31-5",
          "q": "Según el esquema de redacción, ¿qué corresponde hacer en la introducción de un discurso?",
          "options": [
            "Resumir lo dicho y cerrar el tema",
            "Desarrollar ideas con datos y ejemplos",
            "Captar la atención y presentar el tema",
            "Investigar fuentes y organizar datos"
          ],
          "correctIndex": 2,
          "explain": "La introducción capta la atención y presenta el tema central u objetivo; el desarrollo y el cierre son cuerpo y conclusión."
        }
      ],
      "ms": [
        {
          "id": "ms2-31-1",
          "q": "¿Cuáles de las siguientes son bases para un estilo oratorio eficaz según el texto?",
          "options": [
            "Claridad",
            "Concisión",
            "Improvisación",
            "Naturalidad",
            "Impacto"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Claridad, sencillez, concisión, coherencia, fluidez, naturalidad e impacto son las bases. La improvisación no figura: el orador se prepara, no improvisa."
        },
        {
          "id": "ms2-31-2",
          "q": "¿Cuáles de estos son pasos de la preparación metódica de un discurso?",
          "options": [
            "Elección del tema y del objetivo a lograr",
            "Análisis del auditorio y contexto",
            "Investigación y organización del contenido",
            "Práctica del discurso midiendo el tiempo",
            "Cobro anticipado de honorarios al cliente"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Los pasos son elegir tema y objetivo, analizar auditorio y contexto, investigar y organizar, y practicar. Lo del cobro no aparece, es un distractor."
        },
        {
          "id": "ms2-31-3",
          "q": "¿Cuáles de las siguientes formas de pago concretas para un discurso menciona el texto como obligatorias?",
          "options": [
            "Pago por transferencia",
            "Pago en efectivo",
            "Pago con tarjeta",
            "Pago en cuotas",
            "Pago anticipado"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: el texto no habla de formas de pago de discursos. Todas son distractores ajenos al contenido, así que va vacío."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-31-1",
        "front": "Oratoria",
        "back": "Arte de hablar con elocuencia, es decir, expresarse de manera eficaz para persuadir, convencer o conmover a un auditorio. Se concreta en discursos, conferencias, exposiciones, disertaciones y debates."
      },
      {
        "id": "fc2-31-2",
        "front": "Claridad (base oratoria)",
        "back": "Las ideas deben ser transparentes y fáciles de entender; se evita el lenguaje excesivamente técnico o la jerga si la audiencia no la conoce."
      },
      {
        "id": "fc2-31-3",
        "front": "Concisión (base oratoria)",
        "back": "Expresar las ideas con el menor número de palabras posible, yendo a lo esencial."
      },
      {
        "id": "fc2-31-4",
        "front": "La preparación: el 90 % del éxito",
        "back": "Un buen orador no improvisa, se prepara. Los pasos: elegir tema y objetivo, analizar auditorio y contexto, investigar y organizar, y practicar midiendo el tiempo."
      },
      {
        "id": "fc2-31-5",
        "front": "Esquema de redacción de tres partes",
        "back": "Introducción (captar atención y presentar el tema), cuerpo (desarrollar ideas con argumentos, datos y ejemplos) y conclusión (resumir y cerrar con llamada a la acción o reflexión)."
      },
      {
        "id": "fc2-31-6",
        "front": "Técnicas de respiración para hablar en público",
        "back": "Respiración diafragmática, relajación adecuada, no respirar por la boca, ropa cómoda y no ajustada, y practicar el script varias veces."
      },
      {
        "id": "fc2-31-7",
        "front": "Exposición objetiva",
        "back": "Debe ser una exposición objetiva de razonamientos y juicios, evitando manifestaciones de interés personal o emociones; se busca claridad y exactitud."
      },
      {
        "id": "fc2-31-8",
        "front": "Análisis del auditorio y contexto",
        "back": "Preguntarse quiénes escuchan, qué saben del tema, cuál es su actitud, y en qué lugar y situación se dará la charla, para adaptar el mensaje."
      }
    ]
  },
  "32": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-32-1",
          "q": "La comunicación escrita exige un rigor particular porque no cuenta con el lenguaje gestual ni el tono de voz para aclarar ambigüedades.",
          "a": true,
          "explain": "Tal cual: al escribir no tenés gestos ni tono que ayuden, así que el rigor lo aporta la propia redacción."
        },
        {
          "id": "tf2-32-2",
          "q": "El manual de procedimientos describe la estructura y funciones de la empresa mediante un diseño funcional.",
          "a": false,
          "explain": "Eso es el manual de organización. El de procedimientos detalla paso a paso cómo realizar las operaciones (circuitos y procesos)."
        },
        {
          "id": "tf2-32-3",
          "q": "Los memorándums, boletines, informes y actas de reuniones son ejemplos de comunicación interna formal.",
          "a": true,
          "explain": "Correcto: la interna formal incluye memorándums, boletines, informes y actas de reuniones."
        },
        {
          "id": "tf2-32-4",
          "q": "Los documentos comerciales tienen un propósito legal y contable específico y deben redactarse con máxima precisión.",
          "a": true,
          "explain": "Sí: factura, pagaré, remito, cheque y demás son la base de las transacciones y cada uno tiene su propósito legal y contable."
        },
        {
          "id": "tf2-32-5",
          "q": "Según el texto, la cualidad de breve y concisa implica agregar la mayor cantidad de detalles posibles a cada párrafo.",
          "a": false,
          "explain": "Al revés: breve y concisa es ir al grano y eliminar palabras, frases y párrafos que no aporten valor."
        }
      ],
      "mc": [
        {
          "id": "mc2-32-1",
          "q": "¿Cuál de estos manuales administrativos guía para utilizar un sistema o proceso automatizado?",
          "options": [
            "El manual de organización",
            "El manual de procedimientos",
            "El manual de usuario",
            "El manual de funciones"
          ],
          "correctIndex": 2,
          "explain": "El manual de usuario es la guía para utilizar un sistema o proceso automatizado; contiene instrucciones de sistemas y procesos automatizados."
        },
        {
          "id": "mc2-32-2",
          "q": "Dentro de la planificación de un informe, ¿qué tarea corresponde a la elaboración de la agenda?",
          "options": [
            "Confeccionar el cronograma y fecha de presentación",
            "Analizar el problema y definir sus alcances o límites",
            "Concretar las ideas centrales en frases clave del esquema",
            "Examinar y analizar los estudios previos del tema"
          ],
          "correctIndex": 0,
          "explain": "La agenda es el cronograma de tiempos, la carga horaria diaria y el target-date o fecha de presentación. Lo demás es definición del problema o bosquejo."
        },
        {
          "id": "mc2-32-3",
          "q": "¿Cómo clasifica el texto a las comunicaciones dirigidas a clientes, proveedores o el público general?",
          "options": [
            "Comunicación interna formal",
            "Comunicación externa",
            "Comunicación interna informal",
            "Documentación técnica"
          ],
          "correctIndex": 1,
          "explain": "La externa es la dirigida a clientes, proveedores o público; incluye relaciones públicas, comunicación institucional, promoción y publicidad."
        },
        {
          "id": "mc2-32-4",
          "q": "Según el material, ¿qué define a una redacción clara y precisa?",
          "options": [
            "Que use frases largas y muy adornadas al escribir",
            "Que las ideas sean inequívocas y exactas",
            "Que evite toda planificación previa del texto",
            "Que repita los conceptos centrales varias veces"
          ],
          "correctIndex": 1,
          "explain": "Clara y precisa significa que las ideas sean inequívocas, usando la palabra exacta para cada concepto."
        },
        {
          "id": "mc2-32-5",
          "q": "¿Cuál de los siguientes se menciona como documento comercial en el texto?",
          "options": [
            "El acta de reunión interna",
            "El boletín de novedades",
            "El remito de la operación",
            "El memorándum del área"
          ],
          "correctIndex": 2,
          "explain": "El remito es un documento comercial, junto con factura, nota de débito y crédito, pagaré, cheque, orden de compra, etc. Las otras opciones son comunicación interna."
        }
      ],
      "ms": [
        {
          "id": "ms2-32-1",
          "q": "¿Cuáles de los siguientes son los tres manuales administrativos clásicos que menciona el texto?",
          "options": [
            "Manual de organización",
            "Manual de procedimientos",
            "Manual de usuario",
            "Manual de marketing comercial",
            "Manual de contabilidad general"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Los tres clásicos son organización, procedimientos y usuario. Marketing y contabilidad no figuran como manuales administrativos en el apunte."
        },
        {
          "id": "ms2-32-2",
          "q": "Según el texto, ¿cuáles son los tres pilares o cualidades centrales de una buena redacción?",
          "options": [
            "Clara y precisa",
            "Breve y concisa",
            "Sencilla y natural",
            "Larga y detallada",
            "Técnica y compleja"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "El corazón son tres: clara y precisa, breve y concisa, y sencilla y natural. Larga/detallada y técnica/compleja contradicen lo que pide el texto."
        },
        {
          "id": "ms2-32-3",
          "q": "¿Cuáles de estos se enumeran como documentos comerciales en el texto?",
          "options": [
            "Pagaré comercial",
            "Orden de compra",
            "Recibo de sueldo",
            "Memorándum interno",
            "Cheque bancario"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Pagaré, orden de compra, recibo de sueldo y cheque son documentos comerciales. El memorándum es comunicación interna formal, no comercial."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-32-1",
        "front": "¿Por qué la comunicación escrita exige rigor particular?",
        "back": "Porque, a diferencia de la oral, no cuenta con el lenguaje gestual ni el tono de voz para aclarar ambigüedades; todo lo aclara la redacción."
      },
      {
        "id": "fc2-32-2",
        "front": "Tres pilares de una buena redacción",
        "back": "Clara y precisa (ideas inequívocas), breve y concisa (ir al grano, sin lo que no aporta) y sencilla y natural (directa y honesta)."
      },
      {
        "id": "fc2-32-3",
        "front": "Pasos de planificación de un informe",
        "back": "Definición del problema (alcances, antecedentes, estudios previos), confección del bosquejo o esquema (ideas en frases clave) y elaboración de la agenda (cronograma y fecha de presentación)."
      },
      {
        "id": "fc2-32-4",
        "front": "Comunicación interna vs. externa",
        "back": "Interna: dentro de la organización, puede ser formal (memorándums, boletines, informes, actas) o informal (reuniones, deportes, eventos). Externa: hacia clientes, proveedores o público general."
      },
      {
        "id": "fc2-32-5",
        "front": "Manual de organización",
        "back": "Describe la estructura y funciones de la empresa (diseño funcional)."
      },
      {
        "id": "fc2-32-6",
        "front": "Manual de procedimientos",
        "back": "Detalla paso a paso cómo realizar las operaciones (circuitos y procesos de las operaciones)."
      },
      {
        "id": "fc2-32-7",
        "front": "Manual de usuario",
        "back": "Guía para utilizar un sistema o proceso automatizado; contiene instrucciones de sistemas y procesos automatizados."
      },
      {
        "id": "fc2-32-8",
        "front": "Documentos comerciales",
        "back": "Base de las transacciones con propósito legal y contable: contratos, factura, nota de débito y crédito, recibo comercial y de sueldo, pagaré, cheque, boleta de depósito, orden de compra, orden de pago, remito."
      }
    ]
  },
  "33": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-33-1",
          "q": "Un procedimiento es un método estándar de operaciones que consiste en una serie detallada de instrucciones para ejecutar acciones que se presentan con frecuencia o regularidad.",
          "a": true,
          "explain": "Tal cual lo define el texto: el procedimiento es el paso a paso estandarizado para algo que se repite seguido."
        },
        {
          "id": "tf2-33-2",
          "q": "El dato es información ya procesada en forma significativa para el receptor, con valor para tomar decisiones.",
          "a": false,
          "explain": "Al revés: el dato es la materia prima cruda (hechos desagregados sin procesar). La información es el dato ya procesado y con sentido."
        },
        {
          "id": "tf2-33-3",
          "q": "Un sistema abierto se ve influenciado por un entorno cambiante que muchas veces no puede ser alterado desde adentro de la organización.",
          "a": true,
          "explain": "El texto lo dice así: el entorno cambia y desde adentro muchas veces no lo podés controlar."
        },
        {
          "id": "tf2-33-4",
          "q": "La función de Organización y Métodos se ocupa únicamente de las finanzas y la rentabilidad de la empresa.",
          "a": false,
          "explain": "No: O&M analiza los problemas de estructura y los procedimientos para optimizar la infraestructura administrativa, no las finanzas."
        },
        {
          "id": "tf2-33-5",
          "q": "Según el texto, existen dos maneras de método: el analítico y el sintético.",
          "a": true,
          "explain": "El texto menciona explícitamente esas dos maneras, con antecedente clásico en el Discurso del método de Descartes."
        }
      ],
      "mc": [
        {
          "id": "mc2-33-1",
          "q": "¿Cómo define el texto a la información?",
          "options": [
            "Hechos desagregados que todavía no fueron procesados de modo útil",
            "Datos procesados en forma significativa con valor para decisiones",
            "Conjunto de máquinas dedicadas al cálculo numérico veloz",
            "Serie detallada de instrucciones para acciones repetitivas"
          ],
          "correctIndex": 1,
          "explain": "La información son datos procesados con sentido para el receptor; lo demás describe dato, hardware o procedimiento."
        },
        {
          "id": "mc2-33-2",
          "q": "¿Qué caracteriza a un sistema abierto según el texto?",
          "options": [
            "Procesa lotes de datos solo durante la madrugada nocturna",
            "Mantiene siempre una entropía estrictamente positiva interna",
            "Intercambia entradas y salidas mediante transformación",
            "Funciona aislado sin recibir ninguna influencia del entorno externo"
          ],
          "correctIndex": 2,
          "explain": "El sistema abierto tiene entradas y salidas con transformación, y parte de la salida vuelve como retroinformación."
        },
        {
          "id": "mc2-33-3",
          "q": "¿Cuál es el objetivo de un sistema de información según el texto?",
          "options": [
            "Entregar a la organización la información para operar",
            "Reemplazar por completo a las personas de la organización entera",
            "Optimizar la estructura física de las plantas industriales grandes",
            "Encontrar la verdad científica y luego enseñarla con orden"
          ],
          "correctIndex": 0,
          "explain": "Es un conjunto de personas y máquinas que le da a la organización la información para operaciones, administración y decisiones."
        },
        {
          "id": "mc2-33-4",
          "q": "Según el texto, ¿de qué se ocupa la función de Organización y Métodos?",
          "options": [
            "De vender los productos y captar nuevos clientes externos",
            "De estructura y procedimientos para optimizar la gestión",
            "De fabricar los bienes tangibles que se guardan en depósito",
            "De controlar el cumplimiento legal de cada contrato firmado"
          ],
          "correctIndex": 1,
          "explain": "O&M analiza problemas de estructura y procedimientos para optimizar la infraestructura administrativa y lograr los objetivos."
        }
      ],
      "ms": [
        {
          "id": "ms2-33-1",
          "q": "¿Cuáles de las siguientes afirmaciones coinciden con las definiciones del texto?",
          "options": [
            "El método es la manera de proceder u obrar con orden",
            "En la ciencia, el método sirve para encontrar la verdad",
            "El dato ya es información lista para decidir de inmediato",
            "Una organización representa un sistema de personas que se interrelacionan",
            "El procedimiento es una acción que ocurre una sola vez"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Método, su uso en la ciencia y la organización como sistema están en el texto. El dato NO es información, y el procedimiento es para acciones frecuentes."
        },
        {
          "id": "ms2-33-2",
          "q": "Según el [info] del texto, ¿qué debe hacer la información de los sistemas de información gerencial?",
          "options": [
            "Servir de apoyo a las operaciones de la organización",
            "Brindar datos para la administración general",
            "Apoyar la toma de decisiones de la alta dirección",
            "Permitir el planeamiento y control adecuados",
            "Garantizar por sí sola la rentabilidad financiera anual"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro están textuales en el [info]. La rentabilidad garantizada no figura: es un distractor."
        },
        {
          "id": "ms2-33-3",
          "q": "¿Cuáles de estos elementos menciona el texto como soporte de los sistemas de información gerencial?",
          "options": [
            "Telégrafos analógicos punto a punto",
            "Manuales artesanales sin método formal",
            "Estrategias de marketing emocional",
            "Diseños arquitectónicos de planta",
            "Discursos motivacionales del gerente"
          ],
          "correctIndexes": [],
          "explain": "Ninguna corresponde: el texto habla de equipos de computación, comunicaciones, software, bases de datos y manuales administrativos. Todas estas son inventadas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-33-1",
        "front": "Procedimiento",
        "back": "Método estándar de operaciones: serie detallada de instrucciones para ejecutar una secuencia de acciones que se presentan con frecuencia o regularidad."
      },
      {
        "id": "fc2-33-2",
        "front": "Método",
        "back": "Manera de proceder u obrar con orden; en las ciencias sirve para encontrar la verdad y enseñarla. Puede ser analítico o sintético."
      },
      {
        "id": "fc2-33-3",
        "front": "Dato",
        "back": "Hechos desagregados que aún no han sido procesados para convertirse en información útil."
      },
      {
        "id": "fc2-33-4",
        "front": "Información",
        "back": "Datos procesados en forma significativa para el receptor, con valor real y perceptible para decisiones presentes o futuras."
      },
      {
        "id": "fc2-33-5",
        "front": "Sistema abierto",
        "back": "Conjunto de elementos en un entorno cambiante que comprende entradas y salidas con un proceso de transformación, cuya salida puede generar retroinformación (feedback)."
      },
      {
        "id": "fc2-33-6",
        "front": "Sistema de información",
        "back": "Conjunto integrado de personas y máquinas cuyo objetivo es entregar a la organización la información requerida para operaciones, administración y toma de decisiones."
      },
      {
        "id": "fc2-33-7",
        "front": "Función de Organización y Métodos",
        "back": "Área que analiza los problemas de estructura y los procedimientos de la empresa para optimizar la infraestructura administrativa y lograr los objetivos."
      }
    ]
  },
  "34": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-34-1",
          "q": "La Teoría General de los Sistemas, desarrollada por Ludwig von Bertalanffy, propone una visión orientada hacia el todo, más interesada en unir las cosas que en separarlas.",
          "a": true,
          "explain": "Así la describe el texto: visión integradora, interesada en unir más que en separar."
        },
        {
          "id": "tf2-34-2",
          "q": "La sinergia implica que el todo equivale exactamente a la suma aritmética de sus partes.",
          "a": false,
          "explain": "Justo lo contrario: la sinergia es el 2+2=5, el todo es distinto (y mayor) que la simple suma de las partes."
        },
        {
          "id": "tf2-34-3",
          "q": "La entropía es el desgaste que el sistema presenta por el transcurso del tiempo o por su funcionamiento.",
          "a": true,
          "explain": "Tal cual el texto: la entropía es ese desgaste, y los sistemas muy entrópicos tienden a desaparecer."
        },
        {
          "id": "tf2-34-4",
          "q": "En un sistema cerrado la entropía puede transformarse libremente en neguentropía.",
          "a": false,
          "explain": "No: en el sistema cerrado la entropía siempre debe ser positiva. La neguentropía es propia de los sistemas abiertos, biológicos o sociales."
        },
        {
          "id": "tf2-34-5",
          "q": "Según Peter Senge, son necesarias cuatro disciplinas para construir una organización inteligente.",
          "a": true,
          "explain": "Sí: dominio personal, modelos mentales, visión compartida y aprendizaje en equipo."
        }
      ],
      "mc": [
        {
          "id": "mc2-34-1",
          "q": "Según Fuller, ¿cuándo existe sinergia?",
          "options": [
            "Cuando cada parte aislada explica perfectamente todo el conjunto",
            "Cuando una parte aislada no logra explicar la conducta del todo",
            "Cuando el sistema se cierra al intercambio con su entorno",
            "Cuando la entropía del sistema crece sin ningún tipo de freno"
          ],
          "correctIndex": 1,
          "explain": "Para Fuller hay sinergia cuando examinar las partes por separado no permite explicar ni predecir la conducta del todo."
        },
        {
          "id": "mc2-34-2",
          "q": "¿Qué hace la información de retroalimentación negativa cuando el sistema se desvía?",
          "options": [
            "Acelera el desvío para alcanzar un nuevo estado más fijo",
            "Elimina del sistema la totalidad de su entropía interna",
            "Avisa a los centros decisionales para corregir el rumbo",
            "Cierra el sistema para evitar todo contacto con su entorno externo"
          ],
          "correctIndex": 2,
          "explain": "La retroalimentación negativa advierte el desvío a los centros decisionales, que corrigen para volver al camino original."
        },
        {
          "id": "mc2-34-3",
          "q": "¿Qué diferencia al enfoque sistémico del reduccionista?",
          "options": [
            "Estudia solo las partes componentes de modo aislado",
            "Niega que exista cualquier interrelación entre los objetos",
            "Reemplaza al subsistema por un único sistema indivisible",
            "Destaca la interacción entre las partes, no solo su suma"
          ],
          "correctIndex": 3,
          "explain": "El sistémico no se queda en sumar partes: resalta la interacción entre ellas. De ahí surgen sistema y subsistema."
        },
        {
          "id": "mc2-34-4",
          "q": "Según el texto, ¿qué es la neguentropía (entropía negativa)?",
          "options": [
            "Un proceso de organización más completa de recursos",
            "El estado de máximo caos y total desorden de un sistema físico",
            "Una fuerza que impulsa cambios bruscos sobre el equilibrio",
            "La pérdida total de información dentro de un sistema cerrado"
          ],
          "correctIndex": 0,
          "explain": "La neguentropía es un proceso de organización más completa y de capacidad para transformar recursos, propio de sistemas abiertos."
        },
        {
          "id": "mc2-34-5",
          "q": "¿Cómo define el texto a las organizaciones inteligentes?",
          "options": [
            "Empresas que solo automatizan tareas repetitivas con máquinas",
            "Estructuras cerradas que evitan cualquier cambio en su entorno",
            "Aquellas donde la gente aprende a aprender en conjunto",
            "Sistemas físicos que tienden siempre al estado más probable"
          ],
          "correctIndex": 2,
          "explain": "Son aquellas donde la gente expande su aptitud para crear lo que desea y continuamente aprende a aprender en conjunto."
        }
      ],
      "ms": [
        {
          "id": "ms2-34-1",
          "q": "¿Cuáles son las cuatro disciplinas de Senge para una organización inteligente?",
          "options": [
            "Dominio personal",
            "Modelos mentales",
            "Visión compartida",
            "Aprendizaje en equipo",
            "Reducción de la entropía"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro disciplinas son las primeras cuatro. La reducción de la entropía no es una disciplina de Senge."
        },
        {
          "id": "ms2-34-2",
          "q": "¿Cuáles de estas afirmaciones sobre equilibrio y entropía coinciden con el texto?",
          "options": [
            "Sobre el equilibrio actúan dos fuerzas opuestas",
            "Una fuerza impulsa el cambio lento y evolutivo",
            "El estado más probable de los sistemas físicos es el caos",
            "Los sistemas altamente entrópicos tienden a desaparecer",
            "La información es un aumento de la incertidumbre"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro están en el texto. La última es falsa: la información es una disminución de la incertidumbre, no un aumento."
        },
        {
          "id": "ms2-34-3",
          "q": "Según el [info] del texto, ¿cuáles de estas afirmaciones sobre los sistemas de información son correctas?",
          "options": [
            "Permiten reemplazar a Bertalanffy en su teoría",
            "Convierten toda entropía en sinergia automáticamente",
            "Eliminan la necesidad de modelos mentales",
            "Hacen innecesaria la planificación del negocio",
            "Excluyen a los usuarios del diseño del sistema"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. El [info] dice que los sistemas sirven para decisiones, planificación y control, y que los usuarios SÍ deben colaborar en el diseño y la prueba del usuario."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-34-1",
        "front": "Teoría General de los Sistemas",
        "back": "Teoría interdisciplinaria (1950-1968) de Ludwig von Bertalanffy: visión orientada hacia el todo, más interesada en unir las cosas que en separarlas."
      },
      {
        "id": "fc2-34-2",
        "front": "Sinergia",
        "back": "Característica de los sistemas según la cual la suma de las partes es diferente del todo (2+2=5). Caracteriza y justifica la existencia del sistema."
      },
      {
        "id": "fc2-34-3",
        "front": "Enfoque reduccionista vs. sistémico",
        "back": "El reduccionista estudia el fenómeno por sus partes; el sistémico destaca además la interacción entre ellas. De ahí surgen sistema y subsistema."
      },
      {
        "id": "fc2-34-4",
        "front": "Retroalimentación negativa",
        "back": "Cuando el sistema se desvía, advierte el cambio a los centros decisionales, que toman las medidas correctivas para volver al camino original."
      },
      {
        "id": "fc2-34-5",
        "front": "Entropía",
        "back": "Desgaste que el sistema presenta por el transcurso del tiempo o por su funcionamiento. Los sistemas altamente entrópicos tienden a desaparecer."
      },
      {
        "id": "fc2-34-6",
        "front": "Neguentropía",
        "back": "Entropía negativa, propia de sistemas abiertos, biológicos o sociales: proceso de organización más completa y capacidad para transformar los recursos."
      },
      {
        "id": "fc2-34-7",
        "front": "Organizaciones inteligentes",
        "back": "Aquellas donde la gente expande su aptitud para crear lo que desea, cultiva nuevos patrones de pensamiento y aprende a aprender en conjunto."
      },
      {
        "id": "fc2-34-8",
        "front": "Cuatro disciplinas de Senge",
        "back": "Dominio personal, modelos mentales, visión compartida y aprendizaje en equipo."
      }
    ]
  },
  "35": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-35-1",
          "q": "Las TIC son el conjunto de tecnologías que permiten acceder, producir, almacenar y comunicar información.",
          "a": true,
          "explain": "Esa es la definición del texto, y su evolución fue exponencial."
        },
        {
          "id": "tf2-35-2",
          "q": "En el proceso por lotes (batch) el usuario introduce los datos y el sistema responde de inmediato.",
          "a": false,
          "explain": "Eso es el proceso en línea. En el batch los datos se acumulan y se procesan juntos, generalmente en momentos de baja demanda."
        },
        {
          "id": "tf2-35-3",
          "q": "El producto de la ciencia es el conocimiento, mientras que el de la tecnología son cosas artificiales que modifican el entorno.",
          "a": true,
          "explain": "Tal cual: la ciencia busca conocer y la tecnología busca resolver creando cosas que cambian el entorno."
        },
        {
          "id": "tf2-35-4",
          "q": "El paradigma orientado a objetos surgió antes que el desarrollo estructurado.",
          "a": false,
          "explain": "No: el estructurado es de los 70-80 y el orientado a objetos de los 90 en adelante. Vino después."
        },
        {
          "id": "tf2-35-5",
          "q": "La homeostasis es la capacidad de mantener un equilibrio dinámico mediante la autorregulación.",
          "a": true,
          "explain": "Sí, como un termostato; y la retroalimentación es el mecanismo de control que la permite."
        }
      ],
      "mc": [
        {
          "id": "mc2-35-1",
          "q": "Según el texto, ¿cuál es la clave de un sistema?",
          "options": [
            "La cantidad de componentes físicos que lo integran",
            "La interacción de las partes hacia un objetivo común",
            "La capacidad de funcionar sin ningún tipo de entorno",
            "El predominio de la comunicación analógica heredada"
          ],
          "correctIndex": 1,
          "explain": "La clave está en la interacción y el objetivo: las partes solas no logran lo que sí logra el sistema coordinado."
        },
        {
          "id": "mc2-35-2",
          "q": "¿Qué caracteriza al proceso en línea o interactivo?",
          "options": [
            "Acumula los datos para procesarlos juntos de madrugada",
            "Funciona sin ninguna intervención del operador humano",
            "Procesa los datos de inmediato con respuesta instantánea",
            "Modela los datos siempre antes que los procesos del sistema"
          ],
          "correctIndex": 2,
          "explain": "En el procesamiento en línea cada acción del usuario desencadena una reacción inmediata del sistema, como una compra en e-commerce."
        },
        {
          "id": "mc2-35-3",
          "q": "¿Cómo describe el texto la relación entre ciencia y tecnología?",
          "options": [
            "Son disciplinas idénticas con el mismo producto final",
            "Son campos totalmente independientes y sin contacto",
            "La tecnología antecede siempre a todo conocimiento",
            "Es simbiótica: se necesitan y se retroalimentan entre sí"
          ],
          "correctIndex": 3,
          "explain": "Relación simbiótica: no hay tecnología sin conocimiento científico ni ciencia sin las herramientas que la tecnología aporta."
        },
        {
          "id": "mc2-35-4",
          "q": "Según el texto, ¿qué es una metodología de desarrollo de sistemas?",
          "options": [
            "Conjunto de procedimientos, técnicas y herramientas guía",
            "Una etapa de pruebas finales antes del lanzamiento público total",
            "Un único lenguaje de programación usado por toda la empresa",
            "El hardware necesario para almacenar grandes volúmenes"
          ],
          "correctIndex": 0,
          "explain": "Es el combo de procedimientos, técnicas y herramientas que guía a los desarrolladores de manera sistemática."
        },
        {
          "id": "mc2-35-5",
          "q": "¿Qué caracteriza al desarrollo estructurado (años 70-80)?",
          "options": [
            "Unifica procesos y datos dentro de objetos reutilizables",
            "Se basa en ciclos cortos e iteraciones incrementales",
            "Se centra en procesos (Top-Down) y luego en los datos",
            "Es artesanal y sin ningún método formal definido"
          ],
          "correctIndex": 2,
          "explain": "El estructurado tiene orientación a procesos (Top-Down) y, como evolución, orientación a datos. Lo demás es objetos, ágiles o convencional."
        }
      ],
      "ms": [
        {
          "id": "ms2-35-1",
          "q": "¿Cuáles de estas características de un sistema menciona el texto?",
          "options": [
            "Finalidad o razón de ser",
            "Componentes o subsistemas",
            "Interacción con el entorno",
            "Homeostasis y retroalimentación",
            "Rentabilidad financiera garantizada"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son características del sistema según el texto. La rentabilidad garantizada no figura entre ellas."
        },
        {
          "id": "ms2-35-2",
          "q": "Sobre la evolución de las TIC, ¿cuáles afirmaciones coinciden con el texto?",
          "options": [
            "Hasta 1950 dominó la comunicación analógica",
            "Entre 1970 y 1980 la digitalización ganó terreno",
            "En los 90 explotó la conectividad (correo, telemática)",
            "El teléfono fue el primer paradigma orientado a objetos",
            "La televisión por satélite apareció en los 70-80"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Las afirmaciones sobre las etapas históricas son correctas. El teléfono como paradigma orientado a objetos es un disparate inventado."
        },
        {
          "id": "ms2-35-3",
          "q": "¿Cuáles de estos enfoques de desarrollo aparecen en el texto con su época correcta?",
          "options": [
            "Desarrollo convencional artesanal en los años 50-60",
            "Orientación a objetos en los años 90 en adelante",
            "Metodologías ágiles en el siglo XXI (Scrum, Kanban)",
            "Procesamiento por lotes como paradigma de los 90",
            "Enfoque reduccionista como metodología ágil"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras están bien ubicadas. El batch no es un paradigma de desarrollo de los 90 y el reduccionista no es una metodología ágil."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-35-1",
        "front": "TIC",
        "back": "Tecnologías de la información y la comunicación: conjunto de tecnologías que permiten acceder, producir, almacenar y comunicar información. Su evolución fue exponencial."
      },
      {
        "id": "fc2-35-2",
        "front": "Sistema (características)",
        "back": "Conjunto de componentes que interactúan para un objetivo común. Tiene finalidad, componentes/subsistemas, interacción con el entorno, homeostasis y retroalimentación."
      },
      {
        "id": "fc2-35-3",
        "front": "Ciencia vs. tecnología",
        "back": "La ciencia busca conocer (su producto es el conocimiento); la tecnología busca resolver (su producto son cosas artificiales que modifican el entorno). Relación simbiótica."
      },
      {
        "id": "fc2-35-4",
        "front": "Proceso por lotes (batch)",
        "back": "Los datos de entrada se acumulan y se procesan en grandes lotes, en momentos de baja demanda (ej. de noche). No requiere intervención continua del operador."
      },
      {
        "id": "fc2-35-5",
        "front": "Proceso en línea (interactivo)",
        "back": "El usuario introduce los datos y el sistema los procesa de inmediato, con respuesta instantánea. Cada acción del usuario desencadena una reacción del sistema."
      },
      {
        "id": "fc2-35-6",
        "front": "Metodología de desarrollo",
        "back": "Conjunto de procedimientos, técnicas y herramientas que guían a los desarrolladores en la creación de software de manera sistemática."
      },
      {
        "id": "fc2-35-7",
        "front": "Paradigma orientado a objetos",
        "back": "Enfoque de los años 90 en adelante: unifica procesos y datos en objetos (entidades del mundo real); facilita la reutilización de código y la gestión de sistemas complejos."
      },
      {
        "id": "fc2-35-8",
        "front": "Homeostasis y retroalimentación",
        "back": "Homeostasis: capacidad de mantener un equilibrio dinámico mediante autorregulación. Retroalimentación: mecanismo de control donde la salida vuelve como información para ajustar."
      }
    ]
  },
  "36": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-36-1",
          "q": "Una organización de producción genera bienes tangibles que se pueden producir en masa y guardar para su consumo posterior.",
          "a": true,
          "explain": "Así lo define el texto: los bienes tangibles se almacenan para consumirse después."
        },
        {
          "id": "tf2-36-2",
          "q": "Una organización de servicios produce bienes intangibles que se pueden almacenar fácilmente sin la participación del consumidor.",
          "a": false,
          "explain": "No: los servicios son intangibles, requieren la participación del consumidor y NO se pueden almacenar."
        },
        {
          "id": "tf2-36-3",
          "q": "La simbología de los circuitos administrativos puede acordarse con el usuario o usar la Norma IRAM 34.501.",
          "a": true,
          "explain": "Correcto: o se acuerda con el usuario para que se entienda, o se usan los símbolos de esa norma IRAM."
        },
        {
          "id": "tf2-36-4",
          "q": "Los manuales de procedimientos describen la organización formal de cada puesto, sus objetivos, derechos y obligaciones.",
          "a": false,
          "explain": "Eso describe a los manuales de organización. Los de procedimientos detallan circuitos, operaciones, formularios y controles."
        },
        {
          "id": "tf2-36-5",
          "q": "La administración de operaciones incluye planificar la producción, organizar recursos, dirigir operaciones y controlar la actuación del sistema.",
          "a": true,
          "explain": "Tal cual: es una actividad compleja que abarca esas cuatro funciones sobre el sistema de operaciones."
        }
      ],
      "mc": [
        {
          "id": "mc2-36-1",
          "q": "¿Cómo define el texto a las operaciones?",
          "options": [
            "Las actividades de transformación de una organización",
            "Los bienes intangibles que no se pueden almacenar",
            "La representación gráfica de un proceso con símbolos",
            "Las instrucciones de los sistemas ya automatizados"
          ],
          "correctIndex": 0,
          "explain": "Operaciones son las actividades de transformación que se realizan en la organización; lo demás describe servicios, circuitos o manuales."
        },
        {
          "id": "mc2-36-2",
          "q": "¿Qué representan los circuitos administrativos?",
          "options": [
            "El diseño funcional formal de cada puesto de trabajo",
            "En forma gráfica, los procesos de una organización",
            "Las instrucciones técnicas de los sistemas automatizados",
            "Los recursos financieros disponibles para producir"
          ],
          "correctIndex": 1,
          "explain": "Los circuitos representan gráficamente los procesos usando símbolos acordados con el usuario o de la Norma IRAM 34.501."
        },
        {
          "id": "mc2-36-3",
          "q": "¿Qué contienen los manuales de organización?",
          "options": [
            "Cursogramas, formularios y los controles a efectuar siempre",
            "Instrucciones de operación de cada sistema ya automatizado",
            "El diseño funcional y la organización de los puestos",
            "Las actividades de transformación del área productiva"
          ],
          "correctIndex": 2,
          "explain": "Los manuales de organización reflejan el diseño funcional y describen la organización formal de cada puesto: objetivos, autoridad y responsabilidad."
        },
        {
          "id": "mc2-36-4",
          "q": "Según el texto, ¿qué detallan los manuales de procedimientos?",
          "options": [
            "La autoridad y la responsabilidad propia de cada puesto",
            "Los circuitos y operaciones, con formularios y control",
            "El régimen de atribuciones y el organigrama general",
            "Las metodologías ágiles para el desarrollo del software"
          ],
          "correctIndex": 1,
          "explain": "Los manuales de procedimientos detallan circuitos y operaciones, definen funciones, formularios, archivos y controles (incluyen cursogramas)."
        }
      ],
      "ms": [
        {
          "id": "ms2-36-1",
          "q": "¿Cuáles de estas funciones incluye la administración de operaciones según el texto?",
          "options": [
            "Planificar la producción",
            "Organizar los recursos",
            "Dirigir las operaciones y el personal",
            "Controlar la actuación del sistema",
            "Definir la teoría general de los sistemas"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son las funciones de la administración de operaciones. La teoría general de los sistemas no forma parte de esa definición."
        },
        {
          "id": "ms2-36-2",
          "q": "Sobre los tres tipos de manuales, ¿cuáles afirmaciones coinciden con el texto?",
          "options": [
            "Los de organización reflejan el diseño funcional",
            "Los de procedimientos detallan circuitos y operaciones",
            "Los de usuario especifican instrucciones de sistemas",
            "Los de organización incluyen organigramas y jerarquía",
            "Los de usuario reemplazan a la Norma IRAM 34.501"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son correctas. Los manuales de usuario no reemplazan a la norma IRAM (que es para la simbología de circuitos)."
        },
        {
          "id": "ms2-36-3",
          "q": "¿Cuáles de estos elementos menciona el texto como contenido de los manuales de procedimientos?",
          "options": [
            "Telégrafos analógicos punto a punto",
            "Cuatro disciplinas de Peter Senge",
            "Línea de tiempo exponencial de las TIC",
            "Definición de neguentropía",
            "Disciplinas del pensamiento sistémico"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: los manuales de procedimientos incluyen cursogramas, normas, políticas, formularios y diagramas de flujo. Todo lo listado es de otras secciones."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-36-1",
        "front": "Operaciones",
        "back": "Las actividades de transformación que se realizan en una organización."
      },
      {
        "id": "fc2-36-2",
        "front": "Organización de producción",
        "back": "Organización que produce bienes tangibles que se pueden producir en masa y guardar para su consumo posterior."
      },
      {
        "id": "fc2-36-3",
        "front": "Organización de servicios",
        "back": "Organización que produce bienes intangibles que requieren la participación del consumidor y que no se pueden almacenar."
      },
      {
        "id": "fc2-36-4",
        "front": "Administración de operaciones",
        "back": "Actividad administrativa compleja que incluye planificar la producción, organizar los recursos, dirigir las operaciones y el personal, y controlar la actuación del sistema."
      },
      {
        "id": "fc2-36-5",
        "front": "Circuitos administrativos",
        "back": "Representación gráfica de los procesos de una organización mediante símbolos, acordados con el usuario o según la Norma IRAM 34.501."
      },
      {
        "id": "fc2-36-6",
        "front": "Manuales de organización",
        "back": "Reflejan el diseño funcional y describen la organización formal de cada puesto: objetivos, derechos, obligaciones, autoridad, misión, funciones y organigramas."
      },
      {
        "id": "fc2-36-7",
        "front": "Manuales de procedimientos",
        "back": "Detallan los circuitos y operaciones de la empresa: funciones, formularios, archivos y controles. Incluyen cursogramas, normas, políticas y diagramas de flujo."
      },
      {
        "id": "fc2-36-8",
        "front": "Manuales de usuario",
        "back": "Especifican las instrucciones de los sistemas automatizados y los procesos de cada tarea (manual técnico de sistemas, de productos, del supervisor, para especialistas)."
      }
    ]
  },
  "37": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-37-1",
          "q": "La productividad relaciona las salidas producidas con las entradas o recursos utilizados.",
          "a": true,
          "explain": "Tal cual: la productividad es una medida de eficiencia que vincula los outputs producidos con los inputs usados. La idea es producir más con menos."
        },
        {
          "id": "tf2-37-2",
          "q": "La calidad es un valor absoluto que no depende de las expectativas del cliente.",
          "a": false,
          "explain": "Justo al revés: la calidad es un término relativo, se define por qué tan bien el producto o servicio satisface las expectativas del cliente. Solo tiene sentido al compararla con necesidades o especificaciones."
        },
        {
          "id": "tf2-37-3",
          "q": "Deming demostró que mejorar la calidad reduce los costos a largo plazo.",
          "a": true,
          "explain": "Exacto. Deming dio vuelta la idea vieja: al mejorar la calidad bajan los desperdicios, reprocesos y errores, lo que reduce costos y encima sube la productividad."
        },
        {
          "id": "tf2-37-4",
          "q": "La palabra calidad deriva del latín qualitas, que se refiere a la condición o propiedades de algo.",
          "a": true,
          "explain": "Sí, el texto lo dice expresamente: qualitas alude a la condición o propiedades de algo."
        },
        {
          "id": "tf2-37-5",
          "q": "Históricamente se creía que aumentar la calidad reducía los costos y subía la productividad de inmediato.",
          "a": false,
          "explain": "No: la creencia histórica era la contraria, que más calidad subía los costos y bajaba la productividad. Recién Deming demostró que mejorar la calidad termina bajando costos."
        }
      ],
      "mc": [
        {
          "id": "mc2-37-1",
          "q": "¿Qué expresa la fórmula de la productividad?",
          "options": [
            "El cociente entre las salidas y las entradas usadas",
            "La resta entre los costos fijos y los costos variables totales del período",
            "El producto entre la calidad lograda y el tiempo total invertido en producir",
            "La suma de todos los recursos humanos y materiales disponibles en la planta"
          ],
          "correctIndex": 0,
          "explain": "Productividad = salidas / entradas. Es un cociente entre lo que producís y los recursos que usaste, no una resta ni una suma."
        },
        {
          "id": "mc2-37-2",
          "q": "Una fábrica pasa de producir 100 pares con 10 empleados a producir 120 pares con esos mismos 10 empleados. ¿Qué ocurrió con la productividad?",
          "options": [
            "Se mantuvo igual porque no cambió el plantel",
            "Bajó porque el costo por par fue mayor",
            "Aumentó un 20 % al subir las salidas",
            "No puede calcularse sin saber los costos"
          ],
          "correctIndex": 2,
          "explain": "Pasó de 10 a 12 pares por empleado con los mismos recursos: subió un 20 %. La productividad mejora cuando producís más con lo mismo."
        },
        {
          "id": "mc2-37-3",
          "q": "Según el texto, ¿cómo se define la calidad?",
          "options": [
            "Por la cantidad de controles y verificaciones aplicados al producto",
            "Por la capacidad de satisfacer las expectativas del cliente",
            "Por el precio final que termina pagando el consumidor en góndola",
            "Por el volumen total de unidades producidas en cada jornada laboral"
          ],
          "correctIndex": 1,
          "explain": "La calidad es relativa y se define por la capacidad del producto o servicio de satisfacer las expectativas del cliente, no por controles, precio ni volumen."
        },
        {
          "id": "mc2-37-4",
          "q": "¿Por qué, según Deming, mejorar la calidad reduce los costos a largo plazo?",
          "options": [
            "Porque permite subir bastante el precio de venta al público",
            "Porque aumenta la cantidad de controles finales en cada lote",
            "Porque incorpora siempre materiales bastante más económicos",
            "Porque disminuye desperdicios, reprocesos y errores"
          ],
          "correctIndex": 3,
          "explain": "La clave es que menos desperdicios, reprocesos y errores significan menos plata tirada, y eso baja costos mientras sube la productividad."
        },
        {
          "id": "mc2-37-5",
          "q": "En el ejemplo de la app llena de bugs, ¿qué pasa con la productividad real?",
          "options": [
            "Se desploma por las horas en corregir fallos",
            "Se mantiene alta porque salió bien rápido al mercado",
            "Sube gracias a la enorme cantidad de quejas recibidas",
            "Queda igual porque la calidad no la afecta para nada"
          ],
          "correctIndex": 0,
          "explain": "La sacaron rápido (alta productividad inicial), pero la baja calidad obliga a quemar horas corrigiendo bugs y atendiendo quejas, así que la productividad real se desploma."
        }
      ],
      "ms": [
        {
          "id": "ms2-37-1",
          "q": "¿Cuáles de las siguientes son formas de mejorar la productividad según el texto?",
          "options": [
            "Producir más con los mismos recursos",
            "Producir lo mismo con menos recursos",
            "Producir mucho más con menos recursos",
            "Producir menos usando más recursos cada vez",
            "Mantener fijas las salidas duplicando las entradas"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "El texto plantea tres caminos: más con lo mismo, lo mismo con menos, o el ideal de mucho más con menos. Las otras dos empeoran la relación salidas/entradas."
        },
        {
          "id": "ms2-37-2",
          "q": "¿Cuáles de estas afirmaciones sobre la calidad son correctas según el texto?",
          "options": [
            "Es un término relativo, no un valor absoluto",
            "Se vincula con necesidades, expectativas o especificaciones",
            "Deriva del latín qualitas, que alude a condición",
            "Mejorarla siempre encarece el producto de forma permanente",
            "Solo se mide en bienes físicos y nunca en servicios"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras salen textuales. La cuarta es la creencia vieja que Deming refutó, y la quinta no aparece: el texto habla de producto o servicio."
        },
        {
          "id": "ms2-37-3",
          "q": "¿Cuáles de estas opciones describen la fórmula de productividad como una multiplicación entre calidad y costos?",
          "options": [
            "La productividad es calidad por costo unitario",
            "La productividad es expectativas por insumos",
            "La productividad es ventas por satisfacción del cliente",
            "La productividad es controles por reprocesos evitados",
            "La productividad es desperdicios por tiempo de entrega"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: la productividad es salidas dividido entradas, un cociente. No es ninguna multiplicación de esas. Acá la respuesta correcta es que no hay correctas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-37-1",
        "front": "Productividad",
        "back": "Medida de eficiencia que relaciona los bienes o servicios producidos (salidas) con los recursos usados (entradas). Busca producir más con menos."
      },
      {
        "id": "fc2-37-2",
        "front": "Fórmula de productividad",
        "back": "Productividad = salidas (outputs) / entradas (inputs)."
      },
      {
        "id": "fc2-37-3",
        "front": "Calidad",
        "back": "Término relativo definido por la capacidad de un producto o servicio de satisfacer las expectativas del cliente. Solo tiene sentido al compararla con necesidades o especificaciones."
      },
      {
        "id": "fc2-37-4",
        "front": "Origen de la palabra calidad",
        "back": "Deriva del latín qualitas, que se refiere a la condición o propiedades de algo."
      },
      {
        "id": "fc2-37-5",
        "front": "Aporte de W. Edwards Deming",
        "back": "Demostró que mejorar la calidad reduce los costos a largo plazo, al disminuir desperdicios, reprocesos y errores, lo que aumenta la productividad y la satisfacción del cliente."
      },
      {
        "id": "fc2-37-6",
        "front": "Creencia histórica sobre calidad y costos",
        "back": "Se pensaba que aumentar la calidad (más controles, mejores materiales) subía inevitablemente los costos y bajaba la productividad. Deming la refutó."
      },
      {
        "id": "fc2-37-7",
        "front": "Ejemplo de aumento de productividad",
        "back": "Pasar de 100 pares con 10 empleados a 120 pares con los mismos 10 empleados: la productividad sube de 10 a 12 pares por empleado (un 20 % más)."
      }
    ]
  },
  "38": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-38-1",
          "q": "El estudio de tiempos busca establecer un tiempo estándar para una tarea hecha a ritmo normal.",
          "a": true,
          "explain": "Sí: mide cuánto tarda un trabajador calificado en hacer una tarea con un método preestablecido y a ritmo normal, para fijar un tiempo estándar."
        },
        {
          "id": "tf2-38-2",
          "q": "El Diagrama de Gantt es un cronograma que distribuye las actividades en el tiempo.",
          "a": true,
          "explain": "Correcto. El Gantt es la herramienta visual típica para distribuir actividades en el tiempo y detectar tiempos muertos o cuellos de botella."
        },
        {
          "id": "tf2-38-3",
          "q": "La meta de Six Sigma es alcanzar no más de 34 defectos por millón de oportunidades.",
          "a": false,
          "explain": "Ojo con el número: la meta es 3,4 defectos por millón (no 34), lo que equivale a una eficiencia del 99,9996 %."
        },
        {
          "id": "tf2-38-4",
          "q": "En el ciclo DMAIC, la fase Analizar busca identificar la causa raíz de los defectos.",
          "a": true,
          "explain": "Tal cual: Analizar trabaja sobre los datos recopilados en Medir para encontrar la causa raíz del problema."
        },
        {
          "id": "tf2-38-5",
          "q": "El cycle time mide solo el tiempo muerto de un proceso, sin contar las operaciones que agregan valor.",
          "a": false,
          "explain": "No: el cycle time es el tiempo total para completar una tarea de principio a fin, no solo las esperas. El tiempo muerto es otra cosa."
        }
      ],
      "mc": [
        {
          "id": "mc2-38-1",
          "q": "¿Qué es el cycle time de un proceso?",
          "options": [
            "El tiempo para completar una tarea de inicio a fin",
            "El tiempo perdido en esperas y traslados innecesarios del operario",
            "El promedio de defectos detectados en cada lote de producción",
            "El intervalo que transcurre entre dos controles de calidad seguidos"
          ],
          "correctIndex": 0,
          "explain": "El cycle time es cuánto tarda una tarea desde que arranca hasta que termina. Sirve para estimar la capacidad de producción, como los 20 lattes por hora."
        },
        {
          "id": "mc2-38-2",
          "q": "Si el cycle time de un café latte es de 3 minutos, ¿cuántos puede producir un barista en una hora, teóricamente?",
          "options": [
            "Unos 12 lattes por hora de trabajo",
            "Unos 15 lattes por hora de trabajo",
            "Unos 20 lattes por hora de trabajo",
            "Unos 30 lattes por hora de trabajo"
          ],
          "correctIndex": 2,
          "explain": "60 minutos divididos por 3 minutos da 20 lattes por hora. Es el ejemplo que usa el texto para mostrar la capacidad de producción."
        },
        {
          "id": "mc2-38-3",
          "q": "¿A qué equivale la meta de 3,4 defectos por millón de oportunidades de Six Sigma?",
          "options": [
            "A una eficiencia cercana al 93,5 % del proceso",
            "A una eficiencia del 99,9996 %",
            "A una eficiencia muy próxima al 99,0 % del proceso",
            "A una eficiencia que ronda el 95,4 % del proceso"
          ],
          "correctIndex": 1,
          "explain": "Esos 3,4 defectos por millón equivalen a una eficiencia del 99,9996 %, casi la perfección. Por eso Six Sigma es tan exigente."
        },
        {
          "id": "mc2-38-4",
          "q": "En el ejemplo de medición de tiempos del apunte, ¿qué porcentaje del total representa el tiempo muerto?",
          "options": [
            "Cerca del 10 % del tiempo total medido",
            "Cerca del 15 % del tiempo total medido",
            "Cerca del 40 % del tiempo total medido",
            "Cerca del 25 % del tiempo total medido"
          ],
          "correctIndex": 3,
          "explain": "Los 23,5 minutos de tiempo muerto (4,5 buscando herramienta + 19 esperando el montacargas) son casi el 25 % de los 95,9 minutos totales."
        },
        {
          "id": "mc2-38-5",
          "q": "¿Cuál es la última fase del ciclo DMAIC de Six Sigma?",
          "options": [
            "Controlar, para sostener la mejora lograda",
            "Analizar, para hallar la causa del problema",
            "Definir, para fijar el alcance del proyecto",
            "Medir, para obtener datos del desempeño actual"
          ],
          "correctIndex": 0,
          "explain": "DMAIC termina en Controlar: se ponen controles para que la mejora se mantenga y no se vuelva al estado anterior."
        }
      ],
      "ms": [
        {
          "id": "ms2-38-1",
          "q": "¿Cuáles de estas son fases del ciclo DMAIC de Six Sigma?",
          "options": [
            "Definir el problema y el alcance",
            "Medir el desempeño actual del proceso",
            "Analizar los datos para hallar la causa raíz",
            "Negociar el presupuesto con la dirección",
            "Controlar para sostener la mejora lograda"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "DMAIC es Definir, Medir, Analizar, Mejorar y Controlar. Cuatro de estas calzan; Negociar el presupuesto no es una fase del ciclo."
        },
        {
          "id": "ms2-38-2",
          "q": "Según el ejemplo de medición de tiempos, ¿cuáles de estos pasos fueron clasificados como tiempo muerto?",
          "options": [
            "Buscar la herramienta",
            "Esperar el montacargas",
            "Proceso de corte",
            "Ensamblar las piezas",
            "Verificar la materia prima"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "En la tabla, solo Buscar herramienta (4,5 min) y Esperar montacarga (19 min) figuran como tiempo muerto. Los demás son operaciones del proceso."
        },
        {
          "id": "ms2-38-3",
          "q": "¿Cuáles de estas afirmaciones sobre el estudio de tiempos y los cronogramas son correctas?",
          "options": [
            "El estudio de tiempos fija un tiempo estándar de la tarea",
            "El tiempo estándar sirve para planificar y calcular costos",
            "Los cronogramas ayudan a detectar cuellos de botella",
            "El estudio de tiempos elimina por sí solo todo defecto",
            "El Gantt mide los defectos por millón de oportunidades"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras salen del texto. El estudio de tiempos no elimina defectos por sí mismo, y el Gantt distribuye actividades, no mide defectos (eso es Six Sigma)."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-38-1",
        "front": "Estudio de tiempos",
        "back": "Técnica para medir el tiempo que un trabajador calificado necesita para hacer una tarea con un método preestablecido y a ritmo normal. Busca fijar un tiempo estándar para planificar, calcular costos y evaluar desempeño."
      },
      {
        "id": "fc2-38-2",
        "front": "Cronograma / Diagrama de Gantt",
        "back": "Herramienta visual que distribuye las actividades de un proceso en el tiempo. Permite ver la duración de cada tarea y detectar tiempos muertos o cuellos de botella."
      },
      {
        "id": "fc2-38-3",
        "front": "Cycle time (tiempo de ciclo)",
        "back": "Tiempo total para completar una tarea de un proceso, desde que comienza hasta que termina. Métrica clave para entender la capacidad de producción."
      },
      {
        "id": "fc2-38-4",
        "front": "Six Sigma",
        "back": "Metodología rigurosa de mejora de procesos que usa herramientas estadísticas para reducir defectos y variabilidad. Su meta: no más de 3,4 defectos por millón de oportunidades (99,9996 % de eficiencia)."
      },
      {
        "id": "fc2-38-5",
        "front": "Ciclo DMAIC",
        "back": "Las 5 fases de Six Sigma: Definir, Medir, Analizar, Mejorar (Improve) y Controlar."
      },
      {
        "id": "fc2-38-6",
        "front": "Fase Mejorar (Improve) del DMAIC",
        "back": "Se diseñan, prueban e implementan soluciones para eliminar la causa raíz de los defectos identificada en la fase Analizar."
      },
      {
        "id": "fc2-38-7",
        "front": "Tiempo muerto en el ejemplo del apunte",
        "back": "23,5 minutos (4,5 buscando herramienta + 19 esperando el montacargas) sobre 95,9 minutos totales: casi el 25 % del tiempo. Se optimiza reduciendo esas esperas."
      },
      {
        "id": "fc2-38-8",
        "front": "Fase Definir del DMAIC",
        "back": "Se define el problema, el alcance del proyecto y los objetivos a alcanzar."
      }
    ]
  },
  "39": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-39-1",
          "q": "En el sistema de operaciones, los insumos son provistos por los proveedores.",
          "a": true,
          "explain": "Correcto: los insumos (recursos humanos, materias primas, equipos, información, etc.) los aportan los proveedores y entran al sistema para ser transformados."
        },
        {
          "id": "tf2-39-2",
          "q": "El sistema de información y control cumple la función de retroalimentación (feedback) del proceso.",
          "a": true,
          "explain": "Sí: es el mecanismo de feedback que monitorea todo el sistema y permite hacer ajustes para cumplir los objetivos."
        },
        {
          "id": "tf2-39-3",
          "q": "En la simbología del flujograma, el rombo representa una operación que agrega valor.",
          "a": false,
          "explain": "No: el rombo es una decisión (el flujo se bifurca según una condición). La operación que agrega valor es el óvalo."
        },
        {
          "id": "tf2-39-4",
          "q": "Visualizar un proceso con un flujograma ayuda a detectar deficiencias y controles débiles.",
          "a": true,
          "explain": "Tal cual: el flujograma o cursograma deja a la vista deficiencias, controles débiles, duplicación de tareas y fallas de relevamiento."
        },
        {
          "id": "tf2-39-5",
          "q": "Los formularios son el principal vehículo de la información formal en una empresa.",
          "a": true,
          "explain": "Sí, así los define el texto. Por eso un buen diseño es clave para capturar datos de forma clara y sin errores."
        }
      ],
      "mc": [
        {
          "id": "mc2-39-1",
          "q": "En el modelo del sistema de operaciones, ¿qué son los procesos (transformation)?",
          "options": [
            "Los bienes o servicios finales que se entregan al cliente externo",
            "Los recursos que aportan los proveedores al sistema de operaciones",
            "Las actividades que transforman los insumos",
            "El mecanismo de feedback que monitorea todo el sistema de operaciones"
          ],
          "correctIndex": 2,
          "explain": "Los procesos son las actividades que transforman los insumos en algo de mayor valor. Lo final son los productos; lo que entra, los insumos."
        },
        {
          "id": "mc2-39-2",
          "q": "¿Qué representa el símbolo de rectángulo en un flujograma?",
          "options": [
            "Una operación que agrega valor real al proceso",
            "Un control contra un estándar",
            "Una demora o interrupción que frena el flujo",
            "Un punto de decisión donde el flujo se bifurca"
          ],
          "correctIndex": 1,
          "explain": "El rectángulo es el control: una verificación o comparación contra un estándar. La operación es el óvalo y la demora es la D."
        },
        {
          "id": "mc2-39-3",
          "q": "¿Qué es un circuito administrativo?",
          "options": [
            "La distribución física del espacio físico de las oficinas",
            "El cálculo del tiempo estándar normal de una tarea",
            "El diseño visual y la estética de un formulario digital",
            "La secuencia que sigue un documento"
          ],
          "correctIndex": 3,
          "explain": "Es la secuencia de operaciones que sigue un documento o información por la organización, incorporando sus componentes y la ubicación funcional de cada uno."
        },
        {
          "id": "mc2-39-4",
          "q": "En la simbología del flujograma, ¿qué indica el triángulo?",
          "options": [
            "Que un documento se archiva o almacena",
            "Que el flujo se bifurca según una condición",
            "Que hay una espera o demora en el proceso",
            "Que se realiza una operación con valor agregado"
          ],
          "correctIndex": 0,
          "explain": "El triángulo es el archivo: hacia abajo es definitivo y hacia arriba, transitorio. La decisión es el rombo y la demora, la D."
        },
        {
          "id": "mc2-39-5",
          "q": "Según el texto, ¿por qué importa el lay-out de oficinas?",
          "options": [
            "Porque define la secuencia que siguen los documentos",
            "Porque impacta en la funcionalidad y comunicación",
            "Porque reemplaza por completo al sistema de información",
            "Porque establece el tiempo estándar normal de las tareas"
          ],
          "correctIndex": 1,
          "explain": "El layout no es solo estético: impacta en la funcionalidad operativa, facilita la comunicación y minimiza traslados innecesarios."
        }
      ],
      "ms": [
        {
          "id": "ms2-39-1",
          "q": "¿Cuáles de estos son componentes del modelo del sistema de operaciones?",
          "options": [
            "Insumos provistos por los proveedores",
            "Procesos que transforman los insumos",
            "Productos entregados a los clientes",
            "Sistema de información y control (feedback)",
            "Tiempo estándar de cada operación"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "El modelo tiene insumos, procesos, productos y el sistema de información y control. El tiempo estándar pertenece al estudio de tiempos, no a este modelo."
        },
        {
          "id": "ms2-39-2",
          "q": "¿Para qué sirve visualizar un proceso con un flujograma o cursograma?",
          "options": [
            "Detectar deficiencias del proceso",
            "Identificar controles débiles",
            "Evitar la duplicación de tareas",
            "Encontrar fallas de relevamiento",
            "Garantizar 3,4 defectos por millón"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "El flujograma sirve para las cuatro primeras. Lo de 3,4 defectos por millón es la meta de Six Sigma, no una función del cursograma."
        },
        {
          "id": "ms2-39-3",
          "q": "¿Cuáles de estas asociaciones símbolo-significado del flujograma son correctas?",
          "options": [
            "Óvalo equivale a un control hecho contra el estándar",
            "Rectángulo equivale a una demora o espera en el flujo",
            "Rombo equivale a un archivo de tipo definitivo del documento",
            "D equivale a una operación que agrega valor al proceso",
            "Rectángulo de base curva equivale a documento"
          ],
          "correctIndexes": [
            4
          ],
          "explain": "Solo la última es correcta: el rectángulo con base curva es un documento. Las otras están cruzadas (óvalo=operación, rectángulo=control, rombo=decisión, D=demora)."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-39-1",
        "front": "Sistema de operaciones",
        "back": "Modelo que ve a la empresa como una máquina de transformar: entran insumos de los proveedores, se procesan, salen productos para los clientes, y un sistema de información y control retroalimenta todo."
      },
      {
        "id": "fc2-39-2",
        "front": "Insumos (inputs)",
        "back": "Todos los recursos que la organización necesita para operar (recursos humanos, materias primas, materiales, servicios, equipos, instalaciones, información). Los proveen los proveedores."
      },
      {
        "id": "fc2-39-3",
        "front": "Sistema de información y control",
        "back": "Mecanismo de retroalimentación (feedback) que monitorea todo el sistema de operaciones y permite hacer ajustes para cumplir los objetivos."
      },
      {
        "id": "fc2-39-4",
        "front": "Circuito administrativo",
        "back": "Secuencia de operaciones que sigue un documento o información a través de la organización, incorporando sus componentes y la ubicación funcional de cada uno."
      },
      {
        "id": "fc2-39-5",
        "front": "Flujograma / cursograma",
        "back": "Mapa visual de un proceso. Permite detectar deficiencias, identificar controles débiles, evitar duplicación de tareas y encontrar fallas de relevamiento."
      },
      {
        "id": "fc2-39-6",
        "front": "Simbología del flujograma",
        "back": "Óvalo = operación; rectángulo = control; D = demora; rombo = decisión; rectángulo con base curva = documento; triángulo = archivo (abajo definitivo, arriba transitorio)."
      },
      {
        "id": "fc2-39-7",
        "front": "Diseño de formularios",
        "back": "Los formularios son el principal vehículo de la información formal. Un buen diseño captura datos de forma clara y sin errores; los digitales suman seguridad, almacenamiento y mejor experiencia de usuario."
      },
      {
        "id": "fc2-39-8",
        "front": "Lay-out de oficinas",
        "back": "Disposición física del espacio de trabajo. No es solo estético: impacta en la funcionalidad operativa, facilita la comunicación, minimiza traslados innecesarios y crea un ambiente adecuado."
      }
    ]
  },
  "40": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-40-1",
          "q": "Planificar consiste simplemente en predecir el futuro de la organización.",
          "a": false,
          "explain": "No: planificar no es predecir, sino construir el futuro deseado, definiendo a dónde se quiere llegar y cómo."
        },
        {
          "id": "tf2-40-2",
          "q": "La planificación es el primer paso de la administración estratégica.",
          "a": true,
          "explain": "Correcto: la administración estratégica es más amplia y engloba a la planificación, que es su primer paso."
        },
        {
          "id": "tf2-40-3",
          "q": "La misión describe lo que la organización aspira a ser en el futuro.",
          "a": false,
          "explain": "Eso es la visión. La misión es la razón de ser actual: qué hace, para quién y cómo."
        },
        {
          "id": "tf2-40-4",
          "q": "Las metas son resultados concretos y medibles en un plazo determinado.",
          "a": true,
          "explain": "Sí: las metas y objetivos son fines específicos, concretos y medibles, que guían decisiones y sirven para evaluar el desempeño."
        },
        {
          "id": "tf2-40-5",
          "q": "La estrategia a nivel funcional se formula para supervisar corporaciones con múltiples negocios.",
          "a": false,
          "explain": "Eso es la estrategia corporativa. La funcional se formula para un área específica, para poner en práctica la estrategia de la unidad de negocios."
        }
      ],
      "mc": [
        {
          "id": "mc2-40-1",
          "q": "Según el texto, ¿qué es la planificación organizacional?",
          "options": [
            "El arte de predecir con exactitud el futuro del mercado",
            "El proceso de establecer objetivos y trazar el camino",
            "La imagen inspiradora del destino deseado a futuro",
            "La razón de ser que indica qué hace la organización"
          ],
          "correctIndex": 1,
          "explain": "Es el proceso sistemático de establecer objetivos y trazar el camino para alcanzarlos, considerando recursos y entorno. Un proceso continuo de decisiones."
        },
        {
          "id": "mc2-40-2",
          "q": "¿Qué es la misión de una organización?",
          "options": [
            "Lo que la empresa aspira a ser en el futuro",
            "Su razón de ser: qué hace y cómo",
            "El resultado concreto y medible fijado en cierto plazo",
            "El plan multifuncional que define la alta dirección"
          ],
          "correctIndex": 1,
          "explain": "La misión es la razón de ser: describe qué hace la organización, para quién y cómo. Lo de aspirar al futuro es la visión."
        },
        {
          "id": "mc2-40-3",
          "q": "¿Cuál de estos es un nivel de estrategia mencionado en el texto?",
          "options": [
            "Estrategia de la unidad de negocios",
            "Estrategia a nivel de los proveedores externos",
            "Estrategia a nivel de los clientes finales del mercado",
            "Estrategia a nivel del sistema de información y control"
          ],
          "correctIndex": 0,
          "explain": "Los tres niveles son corporativo, de unidad de negocios y funcional. Las otras opciones no figuran como niveles de estrategia."
        },
        {
          "id": "mc2-40-4",
          "q": "Según el texto, ¿cuál NO es uno de los cuatro motivos por los que las metas son importantes?",
          "options": [
            "Proporcionan a la organización un claro sentido de dirección",
            "Permiten enfocar mejor los esfuerzos de toda la organización",
            "Garantizan eliminar los riesgos del entorno",
            "Sirven para evaluar el avance de los objetivos a lograr en el tiempo"
          ],
          "correctIndex": 2,
          "explain": "Los cuatro motivos son dar dirección, enfocar esfuerzos, guiar planes y decisiones, y evaluar el avance. Eliminar todos los riesgos no aparece."
        },
        {
          "id": "mc2-40-5",
          "q": "¿En qué consiste la administración estratégica?",
          "options": [
            "En diseñar los formularios y los circuitos administrativos de la empresa",
            "En medir el tiempo estándar normal de cada una de las tareas del proceso",
            "En distribuir físicamente el espacio de trabajo de las oficinas del personal",
            "En formular, implementar y evaluar decisiones multifuncionales"
          ],
          "correctIndex": 3,
          "explain": "Es el arte y la ciencia de formular, implementar y evaluar decisiones multifuncionales que permiten alcanzar los objetivos. La planificación es su primer paso."
        }
      ],
      "ms": [
        {
          "id": "ms2-40-1",
          "q": "¿Cuáles son los tres niveles de estrategia según el texto?",
          "options": [
            "Estrategia a nivel corporativo",
            "Estrategia de la unidad de negocios",
            "Estrategia a nivel funcional",
            "Estrategia a nivel de proveedores",
            "Estrategia a nivel de retroalimentación"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Los tres niveles son corporativo, de unidad de negocios y funcional. Proveedores y retroalimentación no son niveles de estrategia."
        },
        {
          "id": "ms2-40-2",
          "q": "Según el texto, ¿por qué motivos son importantes las metas?",
          "options": [
            "Proporcionan un sentido de dirección",
            "Permiten enfocar los esfuerzos de la organización",
            "Guían los planes y las decisiones",
            "Sirven para evaluar el avance de los objetivos",
            "Reemplazan a la misión y a la visión"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las metas dan dirección, enfocan esfuerzos, guían planes y decisiones, y sirven para evaluar el avance. No reemplazan a la misión ni a la visión."
        },
        {
          "id": "ms2-40-3",
          "q": "¿Cuáles de estas afirmaciones describen correctamente la planificación como un acto de mera adivinación del futuro?",
          "options": [
            "Es solo predecir lo que va a pasar en el mercado",
            "Consiste en esperar pasivamente los cambios del entorno",
            "Es adivinar resultados sin definir objetivos previos",
            "Se limita a anticipar sin trazar ningún camino",
            "Excluye toda toma de decisiones sobre recursos"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: el texto dice que planificar no es predecir el futuro, sino construir el futuro deseado, definiendo objetivos y el cómo. Todas estas la describen mal."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-40-1",
        "front": "Planificación organizacional",
        "back": "Proceso sistemático de establecer objetivos y trazar el camino para alcanzarlos, considerando los recursos disponibles y el entorno. Es un proceso continuo de toma de decisiones."
      },
      {
        "id": "fc2-40-2",
        "front": "¿Planificar es predecir el futuro?",
        "back": "No. Planificar es construir el futuro deseado de la organización: definir a dónde se quiere llegar (objetivos) y cómo llegar (estrategias y planes)."
      },
      {
        "id": "fc2-40-3",
        "front": "Administración estratégica",
        "back": "Arte y ciencia de formular, implementar y evaluar decisiones multifuncionales que permiten alcanzar los objetivos. Engloba a la planificación, que es su primer paso. Adapta los recursos internos al entorno cambiante."
      },
      {
        "id": "fc2-40-4",
        "front": "Misión",
        "back": "La razón de ser de la organización: describe qué hace, para quién y cómo. Ejemplo (Google): organizar la información mundial y hacerla accesible y útil."
      },
      {
        "id": "fc2-40-5",
        "front": "Visión",
        "back": "Lo que la organización aspira a ser en el futuro; una imagen inspiradora del destino deseado. Ejemplo (LinkedIn): crear oportunidades económicas para cada profesional del mercado laboral mundial."
      },
      {
        "id": "fc2-40-6",
        "front": "Metas y objetivos",
        "back": "Fines específicos hacia los que se dirige la acción: resultados concretos y medibles, en un plazo determinado, que guían decisiones, enfocan esfuerzos y sirven para evaluar el desempeño."
      },
      {
        "id": "fc2-40-7",
        "front": "Cuatro motivos de importancia de las metas",
        "back": "(1) Dan sentido de dirección; (2) enfocan los esfuerzos; (3) guían los planes y decisiones; (4) sirven para evaluar el avance de los objetivos."
      },
      {
        "id": "fc2-40-8",
        "front": "Los tres niveles de estrategia",
        "back": "Corporativo (varios negocios, alta dirección), de unidad de negocios (un negocio concreto) y funcional (un área específica que ejecuta la estrategia del negocio)."
      }
    ]
  },
  "41": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-41-1",
          "q": "El nivel estratégico de planificación tiene un horizonte de largo plazo, típicamente de 3 a 5 años o más.",
          "a": true,
          "explain": "Tal cual: el estratégico es el plan maestro de largo plazo, de 3 a 5 años o más, y lo arma la alta dirección."
        },
        {
          "id": "tf2-41-2",
          "q": "El nivel táctico está a cargo de los supervisores y jefes de equipo de primera línea.",
          "a": false,
          "explain": "No. Los supervisores y jefes de equipo son del nivel operativo. El táctico lo manejan los gerentes de división o de área (nivel medio)."
        },
        {
          "id": "tf2-41-3",
          "q": "Las decisiones del nivel operativo son mayormente programadas y se basan en reglas y procedimientos.",
          "a": true,
          "explain": "Sí: el operativo es el día a día, muy detallado y con decisiones programadas basadas en reglas y procedimientos."
        },
        {
          "id": "tf2-41-4",
          "q": "El nivel táctico traduce los planes estratégicos en planes más específicos para las distintas áreas o departamentos.",
          "a": true,
          "explain": "Correcto: el táctico baja la estrategia a planes por área (Marketing, Finanzas, etc.), a mediano plazo."
        },
        {
          "id": "tf2-41-5",
          "q": "El horizonte temporal del nivel táctico es de corto plazo, generalmente diario o semanal.",
          "a": false,
          "explain": "Falso: el corto plazo (diario, semanal) es del operativo. El táctico es de mediano plazo, de 1 a 3 años."
        }
      ],
      "mc": [
        {
          "id": "mc2-41-1",
          "q": "¿Quién es el responsable del nivel estratégico de planificación?",
          "options": [
            "El gerente de división o de área de cada departamento involucrado",
            "El nivel superior, como la alta dirección o el directorio",
            "El supervisor a cargo de la línea de ensamblaje diaria",
            "El jefe de equipo de primera línea de la operación cotidiana"
          ],
          "correctIndex": 1,
          "explain": "El estratégico lo define el nivel superior: alta dirección, CEO, directorio. Es el plan maestro."
        },
        {
          "id": "mc2-41-2",
          "q": "El plan de Marketing para lanzar la nueva línea de vehículos eléctricos en los próximos 2 años es un ejemplo de planificación de nivel:",
          "options": [
            "Operativo, del día a día concreto",
            "Estratégico, plan maestro a largo plazo",
            "Táctico, por área a mediano plazo",
            "Directivo, de la cima jerárquica"
          ],
          "correctIndex": 2,
          "explain": "Es táctico: baja la estrategia a un área (Marketing) con horizonte de mediano plazo, 2 años."
        },
        {
          "id": "mc2-41-3",
          "q": "¿Qué caracteriza a los planes del nivel operativo?",
          "options": [
            "Son muy detallados, específicos y orientados a la acción",
            "Son amplios, genéricos y enfocados en la organización entera",
            "Definen el posicionamiento competitivo de la empresa entera",
            "Coordinan los recursos entre las distintas áreas grandes"
          ],
          "correctIndex": 0,
          "explain": "El operativo es el cómo hacer del día a día: muy detallado, específico y orientado a la acción."
        },
        {
          "id": "mc2-41-4",
          "q": "La decisión de una automotriz de entrar en el mercado de vehículos eléctricos y ser líder en 10 años corresponde al nivel:",
          "options": [
            "Táctico, de mediano plazo por área",
            "Operativo, de corto plazo cotidiano",
            "De primera línea, con cronogramas",
            "Estratégico, de largo plazo global"
          ],
          "correctIndex": 3,
          "explain": "Es estratégico: una decisión amplia, compleja y de largo plazo sobre la organización como un todo."
        },
        {
          "id": "mc2-41-5",
          "q": "¿Qué horizonte temporal corresponde al nivel operativo?",
          "options": [
            "Mediano plazo, de uno a tres años",
            "Largo plazo, de tres a cinco años o más",
            "Corto plazo, diario, semanal o mensual",
            "Plazo indefinido, sin cronograma fijo"
          ],
          "correctIndex": 2,
          "explain": "El operativo trabaja en el corto plazo: diario, semanal, mensual, hasta un año."
        }
      ],
      "ms": [
        {
          "id": "ms2-41-1",
          "q": "¿Cuáles de las siguientes son características del nivel estratégico?",
          "options": [
            "Planes amplios y genéricos",
            "Enfocado en la organización como un todo",
            "Decisiones complejas y no programadas",
            "Horizonte de largo plazo",
            "A cargo de los supervisores de línea"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "El estratégico es amplio, genérico, abarca el todo, con decisiones complejas no programadas y largo plazo. Los supervisores son del operativo, no del estratégico."
        },
        {
          "id": "ms2-41-2",
          "q": "¿Cuáles de estos elementos pertenecen al nivel táctico?",
          "options": [
            "Responsables del nivel técnico de base",
            "Horizonte de mediano plazo",
            "Planes más detallados que los estratégicos",
            "Coordinación de recursos para la estrategia",
            "Decisiones siempre no programadas únicamente"
          ],
          "correctIndexes": [
            1,
            2,
            3
          ],
          "explain": "El táctico es mediano plazo, más detallado que el estratégico y coordina recursos. Sus responsables son del nivel medio, no de base, y sus decisiones pueden ser programadas o no programadas."
        },
        {
          "id": "ms2-41-3",
          "q": "Según el texto, ¿cuáles de estas afirmaciones son correctas sobre el horizonte de cinco años del nivel operativo?",
          "options": [
            "El operativo planifica a cinco años fijos",
            "El operativo abarca de tres a cinco años",
            "El operativo equivale al horizonte táctico",
            "El operativo se mide en lustros completos",
            "El operativo cubre de tres a cinco años o más"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: el operativo es de corto plazo (diario, semanal, mensual, hasta un año). El de tres a cinco años o más es el estratégico."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-41-1",
        "front": "Nivel estratégico de planificación",
        "back": "Plan maestro de la organización: define objetivos generales a largo plazo y el posicionamiento competitivo. A cargo de la alta dirección, horizonte de 3 a 5 años o más."
      },
      {
        "id": "fc2-41-2",
        "front": "Nivel táctico de planificación",
        "back": "Traduce los planes estratégicos en planes específicos por área o departamento. A cargo de gerentes medios, horizonte de mediano plazo (1 a 3 años)."
      },
      {
        "id": "fc2-41-3",
        "front": "Nivel operativo de planificación",
        "back": "Se enfoca en el cómo hacer: procedimientos, procesos y cronogramas para tareas cotidianas. A cargo de supervisores y jefes de equipo, horizonte de corto plazo."
      },
      {
        "id": "fc2-41-4",
        "front": "Responsables de cada nivel de planificación",
        "back": "Estratégico: alta dirección y directorio. Táctico: gerentes de división o área (nivel medio). Operativo: supervisores y jefes de equipo (primera línea)."
      },
      {
        "id": "fc2-41-5",
        "front": "Tipo de decisiones por nivel",
        "back": "Estratégico: complejas y no programadas. Táctico: programadas o no programadas. Operativo: mayormente programadas, basadas en reglas y procedimientos."
      },
      {
        "id": "fc2-41-6",
        "front": "Ejemplo de plan operativo",
        "back": "El plan de un supervisor para organizar los turnos de la próxima semana en la línea de ensamblaje de baterías."
      },
      {
        "id": "fc2-41-7",
        "front": "Característica del nivel estratégico",
        "back": "Planes amplios, genéricos, enfocados en la organización como un todo, con decisiones complejas y no programadas."
      }
    ]
  },
  "42": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-42-1",
          "q": "En el análisis FODA, las fortalezas y las debilidades son factores internos de la empresa.",
          "a": true,
          "explain": "Correcto: fortalezas y debilidades son internas; oportunidades y amenazas son externas (del entorno)."
        },
        {
          "id": "tf2-42-2",
          "q": "El crecimiento de la demanda y los tratados de libre comercio se clasifican como amenazas en el FODA.",
          "a": false,
          "explain": "No: esos son oportunidades (factores del entorno que se pueden aprovechar). Las amenazas serían crisis o nuevos competidores."
        },
        {
          "id": "tf2-42-3",
          "q": "En la cadena de valor de Porter, el margen es la diferencia entre el valor creado y el costo.",
          "a": true,
          "explain": "Tal cual: el margen es lo que queda entre el valor que se genera y el costo de generarlo."
        },
        {
          "id": "tf2-42-4",
          "q": "La gestión de recursos humanos y el desarrollo de tecnología son actividades primarias de la cadena de valor.",
          "a": false,
          "explain": "Falso: RR. HH. y tecnología son actividades de soporte. Las primarias tocan directamente el producto (logística, operaciones, ventas, posventa)."
        },
        {
          "id": "tf2-42-5",
          "q": "El objetivo del FODA no es solo listar factores, sino formular estrategias combinando los cuadrantes.",
          "a": true,
          "explain": "Exacto: la gracia del FODA es cruzar fortalezas/debilidades con oportunidades/amenazas para armar estrategias."
        }
      ],
      "mc": [
        {
          "id": "mc2-42-1",
          "q": "¿Cuáles son los dos factores externos del análisis FODA?",
          "options": [
            "Las fortalezas y las debilidades",
            "Las oportunidades y las amenazas",
            "Las fortalezas y las oportunidades",
            "Las debilidades y las amenazas"
          ],
          "correctIndex": 1,
          "explain": "Los externos (del entorno) son oportunidades y amenazas. Fortalezas y debilidades son internos."
        },
        {
          "id": "mc2-42-2",
          "q": "¿Quién desarrolló el modelo de la cadena de valor?",
          "options": [
            "Blake y Mouton, con su rejilla",
            "Henry Mintzberg, en sus estudios",
            "Michael Porter, en su modelo",
            "Frederick Taylor, con su método"
          ],
          "correctIndex": 2,
          "explain": "La cadena de valor la desarrolló Michael Porter para describir cómo la empresa crea valor."
        },
        {
          "id": "mc2-42-3",
          "q": "¿Cuál de las siguientes es una actividad primaria de la cadena de valor?",
          "options": [
            "La logística externa de distribución",
            "La infraestructura de la empresa",
            "El abastecimiento o las compras",
            "La gestión de recursos humanos"
          ],
          "correctIndex": 0,
          "explain": "La logística externa (distribución del producto) es una actividad primaria. Las otras tres son de soporte."
        },
        {
          "id": "mc2-42-4",
          "q": "Un producto de alta calidad y una marca reconocida son ejemplos, en el FODA, de:",
          "options": [
            "Oportunidades externas del entorno",
            "Amenazas del mercado competitivo",
            "Debilidades internas de la firma",
            "Fortalezas internas de la empresa"
          ],
          "correctIndex": 3,
          "explain": "Son fortalezas: atributos internos que dan ventaja competitiva."
        },
        {
          "id": "mc2-42-5",
          "q": "Dentro de las actividades de soporte, ¿qué incluye la infraestructura de la empresa?",
          "options": [
            "Recepción y gestión de los insumos",
            "Planificación, finanzas y contabilidad",
            "Transformación de las materias primas",
            "Distribución externa del producto"
          ],
          "correctIndex": 1,
          "explain": "La infraestructura como actividad de soporte incluye planificación, finanzas y contabilidad. Las otras son actividades primarias."
        }
      ],
      "ms": [
        {
          "id": "ms2-42-1",
          "q": "¿Cuáles de las siguientes son actividades primarias en la cadena de valor de Porter?",
          "options": [
            "Logística interna",
            "Operaciones",
            "Desarrollo de tecnología",
            "Marketing y ventas",
            "Servicios posventa"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Primarias: logística interna, operaciones, logística externa, marketing y ventas, posventa. El desarrollo de tecnología es una actividad de soporte."
        },
        {
          "id": "ms2-42-2",
          "q": "¿Cuáles de estos factores son ejemplos de amenazas en el FODA?",
          "options": [
            "Nuevos competidores en el mercado",
            "Una crisis económica generalizada",
            "Mayor poder de los distribuidores",
            "Producto propio de alta calidad",
            "Marca propia muy reconocida"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Amenazas: nuevos competidores, crisis económica y mayor poder de los distribuidores. La calidad y la marca propias son fortalezas."
        },
        {
          "id": "ms2-42-3",
          "q": "¿Cuáles de estas opciones son actividades de soporte de la cadena de valor?",
          "options": [
            "Infraestructura de la empresa",
            "Gestión de recursos humanos",
            "Desarrollo de tecnología",
            "Compras o abastecimiento",
            "Operaciones de transformación"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "De soporte: infraestructura, RR. HH., tecnología y compras. Las operaciones (transformación) son una actividad primaria."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-42-1",
        "front": "Análisis FODA",
        "back": "Metodología que analiza la situación competitiva cruzando factores internos (fortalezas y debilidades) con externos (oportunidades y amenazas)."
      },
      {
        "id": "fc2-42-2",
        "front": "Factores internos vs. externos del FODA",
        "back": "Internos: fortalezas y debilidades. Externos (del entorno): oportunidades y amenazas."
      },
      {
        "id": "fc2-42-3",
        "front": "Objetivo real del FODA",
        "back": "No solo listar, sino formular estrategias: usar fortalezas para aprovechar oportunidades o mitigar amenazas, y superar o reducir debilidades."
      },
      {
        "id": "fc2-42-4",
        "front": "Cadena de valor de Porter",
        "back": "Modelo de Michael Porter que describe el conjunto de actividades que la empresa realiza para crear valor; se divide en actividades primarias y de soporte."
      },
      {
        "id": "fc2-42-5",
        "front": "Actividades primarias",
        "back": "Logística interna, operaciones, logística externa, marketing y ventas, y servicios posventa. Tocan directamente el producto."
      },
      {
        "id": "fc2-42-6",
        "front": "Actividades de soporte",
        "back": "Infraestructura de la empresa, gestión de recursos humanos, desarrollo de tecnología y compras (abastecimiento)."
      },
      {
        "id": "fc2-42-7",
        "front": "Margen en la cadena de valor",
        "back": "La diferencia entre el valor creado para el cliente y el costo de las actividades realizadas."
      },
      {
        "id": "fc2-42-8",
        "front": "Utilidad de analizar la cadena de valor",
        "back": "Entender dónde y cómo crea valor la empresa, identificar fuentes de ventaja competitiva y optimizar procesos para ser más eficiente o diferenciarse."
      }
    ]
  },
  "43": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-43-1",
          "q": "El control es el proceso que asegura que las actividades reales se ajusten a las planificadas.",
          "a": true,
          "explain": "Sí: el control mide el desempeño y aplica acciones correctivas para que lo real se ajuste a lo planificado."
        },
        {
          "id": "tf2-43-2",
          "q": "Los parámetros de medición o indicadores deben derivar de los objetivos de la planificación.",
          "a": true,
          "explain": "Correcto: la primera fase es fijar indicadores, y esos estándares salen de los objetivos planteados."
        },
        {
          "id": "tf2-43-3",
          "q": "El balanced scorecard se limita exclusivamente a los indicadores financieros del desempeño.",
          "a": false,
          "explain": "Falso: justamente el balanced scorecard va más allá de lo financiero y suma tres perspectivas más."
        },
        {
          "id": "tf2-43-4",
          "q": "El estado de resultados muestra los activos, pasivos y patrimonio de la empresa en un momento dado.",
          "a": false,
          "explain": "No: eso es el balance general. El estado de resultados muestra ingresos y egresos de un período para sacar utilidad o pérdida."
        },
        {
          "id": "tf2-43-5",
          "q": "Las auditorías externas son realizadas por auditores independientes que verifican la exactitud de los estados financieros.",
          "a": true,
          "explain": "Tal cual: las externas las hacen auditores independientes; las internas las hace personal de la empresa."
        }
      ],
      "mc": [
        {
          "id": "mc2-43-1",
          "q": "¿Cuál es la primera fase del proceso de control?",
          "options": [
            "Medir los resultados reales del período",
            "Evaluar y comparar contra el estándar",
            "Establecer los parámetros de medición",
            "Retroalimentar con medidas correctivas"
          ],
          "correctIndex": 2,
          "explain": "El ciclo arranca estableciendo los parámetros (indicadores), que derivan de los objetivos de la planificación."
        },
        {
          "id": "mc2-43-2",
          "q": "Si el objetivo es aumentar las ventas un 10 % y al cierre crecieron un 8 %, ¿qué fase identifica la desviación de -2 %?",
          "options": [
            "Establecer parámetros de medición",
            "Evaluar el resultado o comparación",
            "Medir los resultados del período",
            "Retroalimentar con acciones correctivas"
          ],
          "correctIndex": 1,
          "explain": "Comparar lo real (8 %) contra el estándar (10 %) y detectar el desvío de -2 % es la fase de evaluación."
        },
        {
          "id": "mc2-43-3",
          "q": "¿Qué muestra el balance general?",
          "options": [
            "Los ingresos y egresos de todo el período",
            "Las proyecciones financieras presupuestadas",
            "Las desviaciones respecto del estándar",
            "Los activos, pasivos y patrimonio puntuales"
          ],
          "correctIndex": 3,
          "explain": "El balance general muestra activos, pasivos y patrimonio en un momento dado."
        },
        {
          "id": "mc2-43-4",
          "q": "¿A qué pregunta orientadora responde la perspectiva del cliente en el balanced scorecard?",
          "options": [
            "¿Cómo deberíamos ser vistos por nuestros clientes?",
            "¿Cómo deberíamos aparecer ante los inversionistas?",
            "¿En qué procesos internos debemos sobresalir hoy?",
            "¿Cómo mantenemos la habilidad de cambiar y crecer?"
          ],
          "correctIndex": 0,
          "explain": "La perspectiva del cliente se pregunta cómo deberíamos ser vistos por los clientes (satisfacción, cuota de mercado)."
        },
        {
          "id": "mc2-43-5",
          "q": "¿Qué comparan los controles presupuestarios?",
          "options": [
            "Los activos contra los pasivos contables",
            "Los resultados reales contra las proyecciones",
            "El desempeño actual contra la competencia",
            "La eficiencia interna contra las políticas"
          ],
          "correctIndex": 1,
          "explain": "Los controles presupuestarios comparan los resultados reales con las proyecciones financieras (presupuestos)."
        }
      ],
      "ms": [
        {
          "id": "ms2-43-1",
          "q": "¿Cuáles son las cuatro fases del proceso de control?",
          "options": [
            "Establecer parámetros de medición",
            "Medir los resultados reales",
            "Evaluar el resultado o comparar",
            "Retroalimentar con medidas correctivas",
            "Auditar de forma externa el plan"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro fases son: establecer parámetros, medir, evaluar (comparar) y retroalimentar. La auditoría es un tipo de control, no una fase del ciclo."
        },
        {
          "id": "ms2-43-2",
          "q": "¿Cuáles son las cuatro perspectivas del balanced scorecard?",
          "options": [
            "Perspectiva financiera",
            "Perspectiva del cliente",
            "Perspectiva de procesos internos",
            "Perspectiva de aprendizaje y crecimiento",
            "Perspectiva de la competencia directa"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro son: financiera, del cliente, de procesos internos y de aprendizaje y crecimiento. La de la competencia no figura."
        },
        {
          "id": "ms2-43-3",
          "q": "¿Cuáles de estas afirmaciones describen correctamente el balance general?",
          "options": [
            "Muestra ingresos y egresos del período",
            "Refleja una foto en un momento dado",
            "Incluye activos, pasivos y patrimonio",
            "Determina la utilidad o la pérdida",
            "Es un control presupuestario proyectado"
          ],
          "correctIndexes": [
            1,
            2
          ],
          "explain": "El balance general es una foto en un momento dado con activos, pasivos y patrimonio. Ingresos/egresos y utilidad/pérdida son del estado de resultados; el presupuesto es otro control."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-43-1",
        "front": "El control (definición)",
        "back": "Proceso que asegura que las actividades reales se ajusten a las planificadas; mide el desempeño y toma acciones correctivas si es necesario."
      },
      {
        "id": "fc2-43-2",
        "front": "Las cuatro fases del control",
        "back": "1) Establecer parámetros (indicadores), 2) medir los resultados, 3) evaluar (comparar contra el estándar), 4) retroalimentar con medidas correctivas."
      },
      {
        "id": "fc2-43-3",
        "front": "Balance general vs. estado de resultados",
        "back": "Balance general: activos, pasivos y patrimonio en un momento dado. Estado de resultados: ingresos y egresos de un período, para determinar utilidad o pérdida."
      },
      {
        "id": "fc2-43-4",
        "front": "Controles presupuestarios",
        "back": "Comparan los resultados reales con las proyecciones financieras (presupuestos) para controlar ingresos, egresos, compras y utilidades."
      },
      {
        "id": "fc2-43-5",
        "front": "Auditorías externas vs. internas",
        "back": "Externas: auditores independientes verifican la exactitud de los estados financieros. Internas: personal de la empresa evalúa la eficiencia de procesos y el cumplimiento de políticas."
      },
      {
        "id": "fc2-43-6",
        "front": "Balanced scorecard (cuadro de mando integral)",
        "back": "Herramienta de control estratégico que va más allá de lo financiero y mide cuatro perspectivas balanceadas derivadas de la visión y la estrategia."
      },
      {
        "id": "fc2-43-7",
        "front": "Las cuatro perspectivas del balanced scorecard",
        "back": "Financiera, del cliente, de procesos internos, y de aprendizaje y crecimiento."
      },
      {
        "id": "fc2-43-8",
        "front": "Perspectiva de procesos internos",
        "back": "Se pregunta en qué procesos debemos sobresalir para satisfacer a los clientes (calidad, eficiencia operativa, innovación)."
      }
    ]
  },
  "44": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-44-1",
          "q": "Según el texto, la delegación no es pasar trabajo, sino empoderar y desarrollar a otros.",
          "a": true,
          "explain": "Correcto: delegar es asignar autoridad y responsabilidad para empoderar y desarrollar al equipo, no descargar tareas."
        },
        {
          "id": "tf2-44-2",
          "q": "El liderazgo gerencial implica una distribución igualitaria del poder entre el líder y los miembros.",
          "a": false,
          "explain": "Falso: entraña una distribución desigual del poder; los miembros no carecen de poder, pero el líder suele tener más."
        },
        {
          "id": "tf2-44-3",
          "q": "En la rejilla de Blake y Mouton, el estilo de dirección de equipo (9.9) es considerado el ideal.",
          "a": true,
          "explain": "Sí: el 9.9 integra máxima preocupación por la producción y por la gente; es el estilo ideal."
        },
        {
          "id": "tf2-44-4",
          "q": "La dirección de tareas o autoritaria (9.1) prioriza el ambiente agradable por encima de la producción.",
          "a": false,
          "explain": "No: el 9.1 es máxima preocupación por la producción y mínima por la gente. El ambiente agradable es propio del club campestre (1.9)."
        },
        {
          "id": "tf2-44-5",
          "q": "La motivación, según el texto, consiste en entender y canalizar los factores que impulsan el comportamiento de las personas.",
          "a": true,
          "explain": "Tal cual lo define el texto: motivación es entender y canalizar lo que mueve a la gente."
        }
      ],
      "mc": [
        {
          "id": "mc2-44-1",
          "q": "¿Qué estilo de la rejilla corresponde a mínima preocupación tanto por la producción como por la gente?",
          "options": [
            "Dirección de tareas (9.1)",
            "Dirección empobrecida (1.1)",
            "Club campestre (1.9)",
            "Mitad de camino (5.5)"
          ],
          "correctIndex": 1,
          "explain": "El 1.1 es la dirección empobrecida: mínimo esfuerzo, apatía e indiferencia en ambos ejes."
        },
        {
          "id": "mc2-44-2",
          "q": "El lema sé justo, pero firme y un equilibrio intermedio corresponden al estilo:",
          "options": [
            "De equipo (9.9) integrador",
            "De tareas (9.1) autoritario",
            "De club campestre (1.9)",
            "De mitad de camino (5.5)"
          ],
          "correctIndex": 3,
          "explain": "El péndulo amortiguado o mitad de camino (5.5) busca un rendimiento adecuado sin presionar demasiado."
        },
        {
          "id": "mc2-44-3",
          "q": "Según el texto, ¿cómo se define el liderazgo?",
          "options": [
            "Capacidad de influir en un grupo para que logre las metas",
            "Proceso de compartir significados a través de distintos mensajes",
            "Asignación de autoridad y responsabilidad a los colaboradores",
            "Manejo de los conflictos para llegar a acuerdos satisfactorios"
          ],
          "correctIndex": 0,
          "explain": "El liderazgo es la capacidad de influir en un grupo para que logre las metas; va más allá de dar órdenes."
        },
        {
          "id": "mc2-44-4",
          "q": "¿Cuál de los dos ejes de la rejilla de Blake y Mouton corresponde al eje vertical?",
          "options": [
            "La preocupación por la producción",
            "La preocupación por la gente",
            "El nivel de autoridad ejercida",
            "El horizonte temporal del plan"
          ],
          "correctIndex": 1,
          "explain": "El eje vertical (Y) es la preocupación por la gente; el horizontal (X) es la preocupación por la producción."
        },
        {
          "id": "mc2-44-5",
          "q": "El estilo que prioriza el ambiente agradable y la armonía, aunque baje la productividad, es:",
          "options": [
            "La dirección de equipo (9.9)",
            "La dirección empobrecida (1.1)",
            "El club campestre (1.9)",
            "La dirección de tareas (9.1)"
          ],
          "correctIndex": 2,
          "explain": "El club campestre (1.9) tiene alta preocupación por la gente y baja por la producción: prioriza el clima agradable."
        }
      ],
      "ms": [
        {
          "id": "ms2-44-1",
          "q": "¿Cuáles de las siguientes son habilidades interconectadas que debe dominar un líder eficaz, según el texto?",
          "options": [
            "Liderazgo",
            "Motivación",
            "Delegación",
            "Negociación",
            "Contabilidad de costos"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "El texto lista liderazgo, motivación, comunicación, delegación, negociación y toma de decisiones. La contabilidad de costos no aparece."
        },
        {
          "id": "ms2-44-2",
          "q": "¿Cuáles son las cuatro implicaciones del liderazgo gerencial?",
          "options": [
            "Involucra a otras personas o colaboradores",
            "Entraña una distribución desigual del poder",
            "Usa esas diferencias de poder para influir",
            "Se combina con una cuestión de valores",
            "Elimina por completo el poder de los seguidores"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro son: involucra a otros, poder desigual, usar esas diferencias para influir, y valores. Los seguidores no carecen de poder."
        },
        {
          "id": "ms2-44-3",
          "q": "Según el texto, ¿cuáles de estos estilos de la rejilla muestran máxima preocupación por la gente y máxima por la producción a la vez, salvo el 9.9?",
          "options": [
            "Dirección de tareas (9.1)",
            "Club campestre (1.9)",
            "Dirección empobrecida (1.1)",
            "Mitad de camino (5.5)",
            "Dirección de equipo (9.9)"
          ],
          "correctIndexes": [],
          "explain": "Ninguna: el único estilo con máxima preocupación por ambos ejes es el 9.9, y la pregunta lo excluye expresamente. Los demás no cumplen las dos condiciones."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-44-1",
        "front": "Habilidades del líder eficaz",
        "back": "Liderazgo, motivación, comunicación, delegación, negociación y toma de decisiones: un conjunto de habilidades interconectadas."
      },
      {
        "id": "fc2-44-2",
        "front": "Liderazgo (definición)",
        "back": "Capacidad de influir en un grupo para que logre las metas propuestas; va más allá de dar órdenes: crear una visión y motivar a otros."
      },
      {
        "id": "fc2-44-3",
        "front": "Delegación",
        "back": "Asignar autoridad y responsabilidad. No es pasar trabajo, sino empoderar y desarrollar a otros."
      },
      {
        "id": "fc2-44-4",
        "front": "Liderazgo gerencial: cuatro implicaciones",
        "back": "1) Involucra a otras personas, 2) entraña distribución desigual del poder, 3) usa esas diferencias para influir, 4) se combina con una cuestión de valores."
      },
      {
        "id": "fc2-44-5",
        "front": "Ejes de la rejilla de Blake y Mouton",
        "back": "Eje horizontal (X): preocupación por la producción. Eje vertical (Y): preocupación por la gente. Del 1 al 9 cada uno."
      },
      {
        "id": "fc2-44-6",
        "front": "Estilos de la rejilla de Blake y Mouton",
        "back": "1.1 empobrecida, 9.1 de tareas o autoritaria, 1.9 club campestre, 9.9 de equipo (ideal) y 5.5 mitad de camino."
      },
      {
        "id": "fc2-44-7",
        "front": "Dirección de equipo (9.9)",
        "back": "Máxima preocupación por la producción y por la gente. Estilo ideal: integra las tareas con las necesidades humanas (compromiso, respeto y confianza)."
      },
      {
        "id": "fc2-44-8",
        "front": "Dirección de tareas (9.1) y club campestre (1.9)",
        "back": "9.1 autoritaria: máxima producción, mínima gente (cumple el objetivo cueste lo que cueste). 1.9 club campestre: alta gente, baja producción (prioriza la armonía)."
      }
    ]
  },
  "45": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-45-1",
          "q": "El ciclo de la motivación arranca con una necesidad insatisfecha que genera un estado de tensión.",
          "a": true,
          "explain": "Tal cual: la necesidad (privación) es una carencia que genera tensión, y de ahí sale el impulso. Es el primer eslabón del ciclo."
        },
        {
          "id": "tf2-45-2",
          "q": "En la pirámide de Maslow las necesidades de estima ocupan la base, por debajo de las fisiológicas.",
          "a": false,
          "explain": "Al revés: la base son las fisiológicas. La estima está más arriba (cuarto nivel), entre las sociales y la autorrealización."
        },
        {
          "id": "tf2-45-3",
          "q": "Según Vroom, si uno de los tres factores (expectativa, instrumentalidad o valencia) vale cero, la motivación resultante es nula.",
          "a": true,
          "explain": "La motivación es el producto de los tres. Como es una multiplicación, cualquier factor en cero deja todo el resultado en cero."
        },
        {
          "id": "tf2-45-4",
          "q": "Las recompensas intrínsecas son las que da un tercero de forma tangible, como el dinero o un ascenso.",
          "a": false,
          "explain": "Eso describe las extrínsecas. Las intrínsecas son la satisfacción personal de hacer la tarea (logro, orgullo), que viene de adentro."
        },
        {
          "id": "tf2-45-5",
          "q": "Para Skinner, la conducta seguida de consecuencias positivas tiende a repetirse.",
          "a": true,
          "explain": "Esa es la idea del reforzamiento: el comportamiento es función de sus consecuencias, y lo que trae premio se repite."
        }
      ],
      "mc": [
        {
          "id": "mc2-45-1",
          "q": "¿Cómo se define la motivación en el texto?",
          "options": [
            "El conjunto de factores que ocasionan, canalizan y sostienen la conducta",
            "El estado de tensión que aparece justo tras alcanzar la meta más deseada",
            "La capacidad de un líder para imponer ciertas metas a su equipo de trabajo",
            "El método racional con el cual se evalúan las distintas alternativas posibles"
          ],
          "correctIndex": 0,
          "explain": "La definición exacta es esa: factores que ocasionan, canalizan y sostienen la conducta, el por qué de lo que hacemos."
        },
        {
          "id": "mc2-45-2",
          "q": "En el ciclo de la motivación, ¿qué etapa convierte la tensión en un motivo que moviliza a actuar?",
          "options": [
            "La acción concreta dirigida a la meta",
            "La satisfacción al reducirse la tensión",
            "El impulso que nace de la necesidad",
            "La privación que origina la carencia"
          ],
          "correctIndex": 2,
          "explain": "El impulso es justo eso: la tensión se transforma en un motivo que te moviliza. Después vienen las acciones y la satisfacción."
        },
        {
          "id": "mc2-45-3",
          "q": "¿Cuál es el nivel más alto de la pirámide de Maslow?",
          "options": [
            "La estima propia y el reconocimiento de los demás",
            "El desarrollo del máximo potencial personal",
            "La pertenencia y el afecto dentro de un grupo",
            "La estabilidad del empleo y de los recursos básicos"
          ],
          "correctIndex": 1,
          "explain": "La cima es la autorrealización: desarrollar el máximo potencial, con tareas desafiantes, autonomía y crecimiento."
        },
        {
          "id": "mc2-45-4",
          "q": "Según la teoría de las expectativas de Vroom, ¿qué evalúa la valencia?",
          "options": [
            "Si el esfuerzo realizado alcanzará el objetivo buscado",
            "Si al lograr la meta se recibirá una recompensa",
            "Cuánto se valora la recompensa que se ofrece",
            "Cuántas veces se repetirá la conducta premiada"
          ],
          "correctIndex": 2,
          "explain": "La valencia es cuánto valorás esa recompensa. La expectativa mira el esfuerzo, y la instrumentalidad si lograr la meta trae premio."
        },
        {
          "id": "mc2-45-5",
          "q": "Un ascenso, un premio o un elogio responden sobre todo a qué necesidad de Maslow.",
          "options": [
            "A la necesidad social de afiliación grupal",
            "A la necesidad fisiológica del salario base",
            "A la necesidad de seguridad y estabilidad",
            "A la necesidad de estima y reconocimiento"
          ],
          "correctIndex": 3,
          "explain": "El ascenso, el premio y el elogio son reconocimiento: tocan la estima (propia y ajena), el cuarto nivel de la pirámide."
        }
      ],
      "ms": [
        {
          "id": "ms2-45-1",
          "q": "¿Cuáles son etapas del ciclo de la motivación según el texto?",
          "options": [
            "Necesidad o privación",
            "Impulso que moviliza",
            "Negociación de la meta",
            "Acciones hacia la meta",
            "Satisfacción de la necesidad"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "El ciclo es necesidad, impulso, acciones y satisfacción. La negociación no aparece en el ciclo motivacional, es un distractor de otro tema."
        },
        {
          "id": "ms2-45-2",
          "q": "¿Cuáles de estos niveles forman parte de la pirámide de Maslow?",
          "options": [
            "Fisiológicas",
            "De seguridad",
            "De instrumentalidad",
            "De estima",
            "De autorrealización"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Los cinco niveles son fisiológicas, seguridad, sociales, estima y autorrealización. La instrumentalidad es de Vroom, no de Maslow."
        },
        {
          "id": "ms2-45-3",
          "q": "¿Cuáles de estas afirmaciones sobre Skinner son correctas según el texto?",
          "options": [
            "Mide la motivación como producto de tres factores distintos",
            "Sostiene que un buen líder solo usa recompensas intrínsecas",
            "Ordena las necesidades humanas en una pirámide de cinco niveles",
            "Afirma que la conducta sin consecuencias positivas tiende a desaparecer",
            "Plantea que toda recompensa debe ser siempre tangible y externa"
          ],
          "correctIndexes": [],
          "explain": "Ninguna pega: la primera es Vroom, la tercera es Maslow, y las otras dos no las dice el texto. De Skinner solo se afirma que la conducta es función de sus consecuencias."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-45-1",
        "front": "Motivación",
        "back": "Conjunto de factores que ocasionan, canalizan y sostienen la conducta de una persona; el por qué de nuestras acciones."
      },
      {
        "id": "fc2-45-2",
        "front": "Etapas del ciclo de la motivación",
        "back": "Necesidad (privación) → impulso → acciones → satisfacción, que reduce la tensión hasta que surge una nueva necesidad."
      },
      {
        "id": "fc2-45-3",
        "front": "Niveles de la pirámide de Maslow (de base a cima)",
        "back": "Fisiológicas, de seguridad, sociales (afiliación), de estima (reconocimiento) y de autorrealización."
      },
      {
        "id": "fc2-45-4",
        "front": "Teoría de las expectativas (Vroom)",
        "back": "La motivación es el producto de expectativa (¿lograré el objetivo?), instrumentalidad (¿habrá recompensa?) y valencia (¿la valoro?). Si uno es cero, la motivación es nula."
      },
      {
        "id": "fc2-45-5",
        "front": "Teoría del reforzamiento (Skinner)",
        "back": "El comportamiento es función de sus consecuencias: lo seguido de consecuencias positivas se repite; lo seguido de negativas o ninguna tiende a no repetirse."
      },
      {
        "id": "fc2-45-6",
        "front": "Recompensas extrínsecas",
        "back": "Tangibles y dadas por un tercero, como el dinero o un ascenso."
      },
      {
        "id": "fc2-45-7",
        "front": "Recompensas intrínsecas",
        "back": "La satisfacción personal de realizar la tarea (sentimiento de logro, orgullo). Un buen líder equilibra ambas con las extrínsecas."
      }
    ]
  },
  "46": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-46-1",
          "q": "La comunicación es el proceso mediante el cual se comparten significados a través de mensajes simbólicos.",
          "a": true,
          "explain": "Esa es la definición textual. Por eso necesita personas, significados compartidos y símbolos."
        },
        {
          "id": "tf2-46-2",
          "q": "La comunicación formal surge espontáneamente de las relaciones sociales, sin canales oficiales.",
          "a": false,
          "explain": "Eso describe la informal (charlas de pasillo, rumores). La formal sigue la estructura jerárquica oficial."
        },
        {
          "id": "tf2-46-3",
          "q": "La comunicación informal solo desinforma y nunca aporta nada útil a la organización.",
          "a": false,
          "explain": "El texto dice que puede desinformar, pero también agiliza la comunicación y fortalece las relaciones. No es solo negativa."
        },
        {
          "id": "tf2-46-4",
          "q": "La retroalimentación le permite al emisor saber si el mensaje fue comprendido.",
          "a": true,
          "explain": "Justo eso: la retroalimentación es la respuesta del receptor que cierra el círculo y le avisa al emisor si se entendió."
        },
        {
          "id": "tf2-46-5",
          "q": "La comunicación vertical es la que sube o baja por la cadena de mando.",
          "a": true,
          "explain": "Tal cual lo define el texto: vertical es la que circula hacia arriba o hacia abajo por la cadena de mando."
        }
      ],
      "mc": [
        {
          "id": "mc2-46-1",
          "q": "¿Cuáles son los tres puntos esenciales en los que se centra la comunicación?",
          "options": [
            "Emisor, mensaje y medio de transmisión oficial",
            "Personas, significados compartidos y símbolos",
            "Comunicación formal, informal y vertical jerárquica",
            "Definir, analizar y aplicar la decisión correcta"
          ],
          "correctIndex": 1,
          "explain": "Los tres puntos son: participación de personas, compartir significados y necesitar símbolos (tipos de lenguaje)."
        },
        {
          "id": "mc2-46-2",
          "q": "Dentro del proceso de comunicación, ¿qué elemento representa el canal utilizado?",
          "options": [
            "El emisor que origina todo",
            "El receptor que lo recibe",
            "El mensaje que se transmite",
            "El medio oral o escrito"
          ],
          "correctIndex": 3,
          "explain": "El medio es el canal: oral, escrito o digital. Responde a la pregunta en qué forma se transmite el mensaje."
        },
        {
          "id": "mc2-46-3",
          "q": "¿Qué caracteriza a la comunicación formal en la organización?",
          "options": [
            "Sigue la estructura jerárquica oficial",
            "Nace de los rumores entre los compañeros",
            "Se da solo en las charlas de pasillo",
            "Circula siempre sin ningún control gerencial"
          ],
          "correctIndex": 0,
          "explain": "La formal sigue la estructura jerárquica oficial (correos institucionales, informes, reuniones) y suele estar controlada por los gerentes."
        },
        {
          "id": "mc2-46-4",
          "q": "En el modelo del proceso, ¿quién es el receptor?",
          "options": [
            "La persona que origina el mensaje",
            "La persona que recibe el mensaje",
            "El canal por el que viaja todo",
            "La respuesta que cierra el círculo"
          ],
          "correctIndex": 1,
          "explain": "El receptor es a quién va dirigido: la persona que recibe el mensaje. El que lo origina es el emisor."
        }
      ],
      "ms": [
        {
          "id": "ms2-46-1",
          "q": "¿Cuáles son elementos del proceso de comunicación según el texto?",
          "options": [
            "Emisor",
            "Mensaje",
            "Conflicto",
            "Receptor",
            "Retroalimentación"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "El proceso es emisor, mensaje, medio, receptor y retroalimentación. El conflicto pertenece a la negociación, no a este modelo."
        },
        {
          "id": "ms2-46-2",
          "q": "¿Cuáles de estas afirmaciones sobre la comunicación informal son correctas?",
          "options": [
            "Surge espontáneamente de las relaciones sociales",
            "Está respaldada y controlada por los gerentes",
            "Incluye conversaciones de pasillo y rumores",
            "Puede agilizar la comunicación entre las personas",
            "Fortalece las relaciones dentro de la organización"
          ],
          "correctIndexes": [
            0,
            2,
            3,
            4
          ],
          "explain": "La informal surge sola, incluye pasillo y rumores, agiliza y une. La controlada por gerentes es la formal, no esta."
        },
        {
          "id": "ms2-46-3",
          "q": "¿Cuáles de estos rasgos describen correctamente la comunicación formal?",
          "options": [
            "Surge sin canales oficiales de manera espontánea",
            "Usa correos institucionales, informes y reuniones",
            "Puede ser interna o también externa hacia clientes",
            "Se basa únicamente en rumores de pasillo",
            "Nace de manera informal entre los compañeros de trabajo"
          ],
          "correctIndexes": [
            1,
            2
          ],
          "explain": "La formal usa canales oficiales (correos, informes, reuniones) y puede ser interna o externa. El resto describe la informal."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-46-1",
        "front": "Comunicación",
        "back": "Proceso mediante el cual se comparten significados a través de mensajes simbólicos. Vital para coordinar acciones, motivar y ejercer el liderazgo."
      },
      {
        "id": "fc2-46-2",
        "front": "Tres puntos esenciales de la comunicación",
        "back": "Necesita personas, implica compartir significados y requiere símbolos (tipos de lenguaje)."
      },
      {
        "id": "fc2-46-3",
        "front": "Comunicación formal",
        "back": "Sigue la estructura jerárquica oficial (correos institucionales, informes, reuniones). Puede ser interna o externa."
      },
      {
        "id": "fc2-46-4",
        "front": "Comunicación informal",
        "back": "Surge espontáneamente de las relaciones sociales, sin canales oficiales (pasillo, rumores). Puede desinformar, pero también agiliza y fortalece relaciones."
      },
      {
        "id": "fc2-46-5",
        "front": "Comunicación vertical",
        "back": "La que sube o baja por la cadena de mando."
      },
      {
        "id": "fc2-46-6",
        "front": "Elementos del proceso de comunicación",
        "back": "Emisor (quién), mensaje (qué), medio (en qué forma), receptor (a quién) y retroalimentación (con qué efecto)."
      },
      {
        "id": "fc2-46-7",
        "front": "Retroalimentación",
        "back": "La respuesta del receptor que le permite al emisor saber si el mensaje fue comprendido; cierra el circuito."
      }
    ]
  },
  "47": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-47-1",
          "q": "La negociación surge a raíz de un conflicto, entendido como un desacuerdo sobre recursos, metas o valores.",
          "a": true,
          "explain": "Tal cual: el conflicto es ese desacuerdo, y negociar es aplicar comunicación y liderazgo para resolverlo de forma satisfactoria."
        },
        {
          "id": "tf2-47-2",
          "q": "En el enfoque suave de negociación se adopta una posición rígida y el único objetivo es ganar.",
          "a": false,
          "explain": "Eso es el enfoque duro. El suave busca evitar el conflicto a toda costa, cediendo fácilmente para llegar a un acuerdo."
        },
        {
          "id": "tf2-47-3",
          "q": "El enfoque de Harvard se centra en los intereses subyacentes de las partes y no en sus posiciones rígidas.",
          "a": true,
          "explain": "El enfoque basado en principios busca el ganar-ganar mirando los intereses de fondo, no las posiciones fijas."
        },
        {
          "id": "tf2-47-4",
          "q": "La primera etapa del proceso racional de toma de decisiones es aplicar la decisión elegida.",
          "a": false,
          "explain": "Aplicar es la última. La primera es definir el problema: identificar clara y precisamente la situación a resolver."
        },
        {
          "id": "tf2-47-5",
          "q": "Evaluar las alternativas implica generar distintos cursos de acción y valorar sus pros y contras.",
          "a": true,
          "explain": "Esa es la etapa de evaluación: generás opciones y las pesás antes de elegir la más efectiva y eficiente."
        }
      ],
      "mc": [
        {
          "id": "mc2-47-1",
          "q": "¿Qué busca el enfoque basado en principios (Harvard)?",
          "options": [
            "Imponer una posición rígida desde el primer momento",
            "Soluciones beneficiosas para ambas partes",
            "Evitar el conflicto cediendo con mucha facilidad",
            "Desconfiar de la otra parte con tal de ganar"
          ],
          "correctIndex": 1,
          "explain": "El de Harvard apunta al ganar-ganar: soluciones que beneficien a ambas partes, mirando los intereses y no las posiciones."
        },
        {
          "id": "mc2-47-2",
          "q": "¿Cuál es la primera etapa del proceso racional de toma de decisiones?",
          "options": [
            "Evaluar las alternativas disponibles",
            "Elegir la opción más conveniente",
            "Definir con precisión el problema",
            "Analizar las causas y el alcance"
          ],
          "correctIndex": 2,
          "explain": "Primero se define el problema: identificar clara y precisamente la situación. Recién después se analiza, evalúa, elige y aplica."
        },
        {
          "id": "mc2-47-3",
          "q": "¿Qué caracteriza al enfoque duro de negociación?",
          "options": [
            "Cede fácilmente con tal de cerrar el trato pronto",
            "Busca el beneficio mutuo entre ambas partes",
            "Se centra en los intereses comunes de fondo",
            "Posición rígida y desconfianza para ganar"
          ],
          "correctIndex": 3,
          "explain": "El duro adopta una posición rígida, desconfía de la otra parte y su único objetivo es ganar."
        },
        {
          "id": "mc2-47-4",
          "q": "En el proceso de toma de decisiones, ¿qué se hace al analizar el problema?",
          "options": [
            "Recopilar información y comprender las causas",
            "Seleccionar la opción más eficiente y posible",
            "Poner en marcha el curso de acción ya elegido",
            "Identificar la situación puntual que se resolverá"
          ],
          "correctIndex": 0,
          "explain": "Analizar el problema es recopilar información y entender sus causas y alcance. Identificarlo es definirlo (la etapa anterior)."
        },
        {
          "id": "mc2-47-5",
          "q": "¿Qué es negociar según el texto?",
          "options": [
            "Imponer las propias metas sobre la otra parte siempre",
            "Ceder las posiciones propias para evitar todo conflicto",
            "Aplicar comunicación y liderazgo ante un conflicto",
            "Definir con cuidado y alcanzar los objetivos correctos"
          ],
          "correctIndex": 2,
          "explain": "Negociar es aplicar habilidades de comunicación y liderazgo para resolver conflictos de manera satisfactoria para las partes."
        }
      ],
      "ms": [
        {
          "id": "ms2-47-1",
          "q": "¿Cuáles son enfoques de negociación mencionados en el texto?",
          "options": [
            "Enfoque duro",
            "Enfoque suave",
            "Enfoque vertical",
            "Enfoque basado en principios",
            "Enfoque de reforzamiento"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Los tres enfoques son duro, suave y basado en principios (Harvard). Vertical es de comunicación y reforzamiento es de Skinner."
        },
        {
          "id": "ms2-47-2",
          "q": "¿Cuáles son etapas del proceso racional de toma de decisiones?",
          "options": [
            "Definir el problema",
            "Analizar el problema",
            "Negociar con la competencia",
            "Evaluar las alternativas",
            "Aplicar la decisión"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Las etapas son definir, analizar, evaluar, elegir y aplicar. Negociar con la competencia no forma parte de este proceso."
        },
        {
          "id": "ms2-47-3",
          "q": "¿Cuáles de estas afirmaciones sobre la negociación son correctas?",
          "options": [
            "El conflicto es un desacuerdo sobre recursos, metas o valores",
            "Buenas estrategias pueden reducir problemas de comunicación rota",
            "El enfoque suave adopta una posición rígida para ganar",
            "El enfoque de Harvard se centra en posiciones rígidas y fijas",
            "Negociar aplica habilidades de comunicación y liderazgo"
          ],
          "correctIndexes": [
            0,
            1,
            4
          ],
          "explain": "Las correctas: conflicto como desacuerdo, las estrategias reducen problemas, y negociar usa comunicación y liderazgo. Las otras dos invierten lo que dice el texto."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-47-1",
        "front": "Conflicto",
        "back": "Desacuerdo sobre recursos, metas o valores, que da origen a la negociación."
      },
      {
        "id": "fc2-47-2",
        "front": "Negociación",
        "back": "Aplicar habilidades de comunicación y liderazgo para resolver conflictos de manera satisfactoria para las partes."
      },
      {
        "id": "fc2-47-3",
        "front": "Enfoque duro de negociación",
        "back": "Posición rígida, desconfianza de la otra parte y un único objetivo: ganar."
      },
      {
        "id": "fc2-47-4",
        "front": "Enfoque suave de negociación",
        "back": "Busca evitar el conflicto a toda costa, cediendo fácilmente para llegar a un acuerdo."
      },
      {
        "id": "fc2-47-5",
        "front": "Enfoque basado en principios (Harvard)",
        "back": "Busca soluciones mutuamente beneficiosas (ganar-ganar), centrándose en los intereses subyacentes y no en las posiciones rígidas."
      },
      {
        "id": "fc2-47-6",
        "front": "Etapas del proceso racional de toma de decisiones",
        "back": "Definir el problema, analizarlo, evaluar las alternativas, elegir la alternativa y aplicar la decisión."
      },
      {
        "id": "fc2-47-7",
        "front": "Etapa de evaluar las alternativas",
        "back": "Generar distintos cursos de acción y valorar sus pros y contras."
      }
    ]
  },
  "48": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-48-1",
          "q": "Una organización es un sistema social compuesto por dos o más personas que trabajan coordinadas hacia una meta.",
          "a": true,
          "explain": "Esa es la definición textual: sistema social de dos o más personas trabajando de forma coordinada y estructurada por metas específicas."
        },
        {
          "id": "tf2-48-2",
          "q": "La eficacia consiste en usar la menor cantidad de recursos posibles para obtener un resultado.",
          "a": false,
          "explain": "Eso es la eficiencia (hacer las cosas bien, al menor costo). La eficacia es definir y alcanzar los objetivos correctos."
        },
        {
          "id": "tf2-48-3",
          "q": "El microambiente incluye fuerzas económicas, político-legales, socioculturales, tecnológicas y ecológicas.",
          "a": false,
          "explain": "Esas son del macroambiente. El microambiente son los actores cercanos: clientes, proveedores, competencia y reguladores."
        },
        {
          "id": "tf2-48-4",
          "q": "Toda organización, con o sin fines de lucro, comparte tener una meta, un plan y recursos asignados.",
          "a": true,
          "explain": "Las tres características fundamentales: propósito/meta definida, un plan o método, y adquirir y asignar recursos."
        },
        {
          "id": "tf2-48-5",
          "q": "En las cinco fuerzas de Porter, los productos sustitutos provienen de otros sectores y satisfacen la misma necesidad.",
          "a": true,
          "explain": "Tal cual: el sustituto viene de otro sector pero cubre la misma necesidad, como la videoconferencia frente a los viajes de negocios."
        }
      ],
      "mc": [
        {
          "id": "mc2-48-1",
          "q": "¿Qué significa ser eficiente según el texto?",
          "options": [
            "Definir y alcanzar los objetivos más correctos",
            "Usar la menor cantidad de recursos posible",
            "Cumplir las metas sin importar el costo final",
            "Vender un producto que el mercado siempre desea"
          ],
          "correctIndex": 1,
          "explain": "Eficiencia es hacer las cosas bien con menos recursos. Definir los objetivos correctos es eficacia."
        },
        {
          "id": "mc2-48-2",
          "q": "Una app muy avanzada que el mercado no necesita y no se vende fue, según el texto:",
          "options": [
            "Eficiente pero no eficaz",
            "Eficaz pero no eficiente",
            "Ni eficiente ni eficaz",
            "Eficiente y eficaz a la vez"
          ],
          "correctIndex": 0,
          "explain": "Se hizo bien (eficiente) pero apuntó al objetivo equivocado: nadie la necesita, así que no fue eficaz."
        },
        {
          "id": "mc2-48-3",
          "q": "¿Cuál de estos actores pertenece al microambiente de la organización?",
          "options": [
            "Las fuerzas tecnológicas generales",
            "Los proveedores más cercanos",
            "El contexto político-legal amplio",
            "Las tendencias socioculturales"
          ],
          "correctIndex": 1,
          "explain": "El microambiente son los actores cercanos: clientes, proveedores, competencia y reguladores. Lo tecnológico y sociocultural es macroambiente."
        },
        {
          "id": "mc2-48-4",
          "q": "En las cinco fuerzas de Porter, las aerolíneas low-cost que entran al sector son un ejemplo de:",
          "options": [
            "Productos y servicios sustitutos",
            "Poder de negociación de clientes",
            "Amenaza de nuevos participantes",
            "Rivalidad entre competidores actuales"
          ],
          "correctIndex": 2,
          "explain": "Las low-cost que ingresan ilustran la amenaza de nuevos participantes: empresas nuevas que entran al sector."
        },
        {
          "id": "mc2-48-5",
          "q": "¿Qué fuerza de Porter ilustra Walmart exigiendo precios más bajos a sus proveedores?",
          "options": [
            "El poder de negociación de los clientes",
            "La rivalidad entre competidores tradicionales",
            "La amenaza de productos sustitutos nuevos",
            "El poder de negociación de los proveedores"
          ],
          "correctIndex": 0,
          "explain": "Walmart como gran cadena ejerce poder de negociación de los clientes: exige precios más bajos o mayor calidad a sus proveedores."
        }
      ],
      "ms": [
        {
          "id": "ms2-48-1",
          "q": "¿Cuáles son las tres características que comparte toda organización?",
          "options": [
            "Tener un propósito o meta definida",
            "Tener un plan o método para lograrlo",
            "Cotizar siempre en el mercado bursátil",
            "Adquirir y asignar recursos a sus objetivos",
            "Perseguir obligatoriamente un fin de lucro"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Las tres son meta definida, plan o método, y recursos asignados. Cotizar y tener fin de lucro no son obligatorios (sirve con o sin lucro)."
        },
        {
          "id": "ms2-48-2",
          "q": "¿Cuáles de estas son las cinco fuerzas de Porter?",
          "options": [
            "Competidores tradicionales",
            "Nuevos participantes",
            "Productos y servicios sustitutos",
            "Proveedores",
            "Clientes"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son justo esas: competidores tradicionales, nuevos participantes, sustitutos, proveedores y clientes. Acá van todas."
        },
        {
          "id": "ms2-48-3",
          "q": "¿Cuáles de estas fuerzas pertenecen al macroambiente (ambiente general)?",
          "options": [
            "Las fuerzas económicas del contexto",
            "Los clientes directos de la empresa",
            "Las fuerzas político-legales vigentes",
            "Los proveedores más inmediatos",
            "Las fuerzas tecnológicas y ecológicas"
          ],
          "correctIndexes": [
            0,
            2,
            4
          ],
          "explain": "El macroambiente son las fuerzas amplias: económicas, político-legales, socioculturales, tecnológicas y ecológicas. Clientes y proveedores son microambiente."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-48-1",
        "front": "Organización",
        "back": "Sistema social de dos o más personas que trabajan de manera coordinada y estructurada para alcanzar una o varias metas específicas."
      },
      {
        "id": "fc2-48-2",
        "front": "Tres características de toda organización",
        "back": "Tener un propósito o meta definida, un plan o método para alcanzarla, y adquirir y asignar recursos para lograr sus objetivos."
      },
      {
        "id": "fc2-48-3",
        "front": "Eficiencia",
        "back": "Capacidad de usar la menor cantidad de recursos posible para obtener un resultado: hacer las cosas bien o al menor costo."
      },
      {
        "id": "fc2-48-4",
        "front": "Eficacia",
        "back": "Capacidad de definir y alcanzar los objetivos correctos: hacer las cosas que se deben hacer."
      },
      {
        "id": "fc2-48-5",
        "front": "Microambiente vs. macroambiente",
        "back": "Micro: actores cercanos (clientes, proveedores, competencia, reguladores). Macro: fuerzas amplias (económicas, político-legales, socioculturales, tecnológicas, ecológicas)."
      },
      {
        "id": "fc2-48-6",
        "front": "Las cinco fuerzas de Porter",
        "back": "Competidores tradicionales, nuevos participantes, productos y servicios sustitutos, proveedores y clientes."
      },
      {
        "id": "fc2-48-7",
        "front": "Productos sustitutos (Porter)",
        "back": "Productos de otros sectores que satisfacen la misma necesidad, como la videoconferencia frente a los viajes de negocios."
      },
      {
        "id": "fc2-48-8",
        "front": "Gerente",
        "back": "La persona responsable de dirigir las actividades de la organización para que cumpla sus metas de manera racional y eficiente."
      }
    ]
  },
  "49": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-49-1",
          "q": "El diseño organizacional es el proceso de tomar decisiones para crear la estructura de la organización.",
          "a": true,
          "explain": "Tal cual: la estructura es la forma en que el trabajo se divide, agrupa y coordina; el diseño es el proceso de decidir cómo va a quedar esa estructura."
        },
        {
          "id": "tf2-49-2",
          "q": "Según el texto, la división del trabajo consiste en que cada persona realice la tarea completa de principio a fin para dominarla.",
          "a": false,
          "explain": "Es justo al revés: dividir el trabajo es descomponer una tarea compleja en subtareas simples para que cada uno se especialice en una parte limitada, no en hacer todo."
        },
        {
          "id": "tf2-49-3",
          "q": "Adam Smith describió en La riqueza de las naciones cómo la especialización en una fábrica de alfileres aumentaba la productividad.",
          "a": true,
          "explain": "Sí, fue el ejemplo de Smith: diez personas coordinadas, cada una con una parte, llegaban a unos 48.000 alfileres por día."
        },
        {
          "id": "tf2-49-4",
          "q": "La departamentalización por procesos no figura entre las formas comunes de agrupar tareas mencionadas en el texto.",
          "a": false,
          "explain": "Falso: el texto sí lista procesos entre las formas comunes, junto con funciones, productos, clientes y área geográfica."
        },
        {
          "id": "tf2-49-5",
          "q": "A mayor especialización y división del trabajo (diferenciación), mayor es la necesidad de coordinación (integración).",
          "a": true,
          "explain": "Ese es el punto clave: cuanto más se divide, más hay que coordinar. Dividir sin coordinar genera caos."
        }
      ],
      "mc": [
        {
          "id": "mc2-49-1",
          "q": "¿Qué define mejor a la estructura organizacional según el texto?",
          "options": [
            "El proceso de tomar decisiones gerenciales para enfrentar la competencia del mercado",
            "La forma en que el trabajo se divide, agrupa y coordina formalmente",
            "El conjunto de relaciones sociales que surge de manera espontánea entre la gente",
            "La capacidad de un individuo para modificar la conducta de los demás miembros"
          ],
          "correctIndex": 1,
          "explain": "La estructura es cómo se divide, agrupa y coordina el trabajo de forma formal. Las otras describen el diseño, la informalidad o el poder."
        },
        {
          "id": "mc2-49-2",
          "q": "En el ejemplo de Adam Smith, ¿cuántos alfileres por día producían las diez personas trabajando de forma coordinada?",
          "options": [
            "Unos 4.800 alfileres por día entre las diez personas coordinadas",
            "Unos 480.000 alfileres por día entre las diez personas coordinadas",
            "Unos 48.000 alfileres por día entre las diez personas coordinadas",
            "Unos 18.000 alfileres por día entre las diez personas coordinadas"
          ],
          "correctIndex": 2,
          "explain": "El dato exacto del texto es unos 48.000 alfileres por día gracias a la especialización coordinada."
        },
        {
          "id": "mc2-49-3",
          "q": "¿Cuál de estos elementos define la línea de autoridad y responsabilidad, es decir, quién reporta a quién?",
          "options": [
            "La coordinación entre los distintos departamentos de la empresa",
            "La departamentalización lógica de tareas y puestos de trabajo",
            "La división del trabajo en subtareas simples y especializadas",
            "La jerarquía que establece los niveles de mando"
          ],
          "correctIndex": 3,
          "explain": "La jerarquía es la línea de autoridad y responsabilidad: define quién reporta a quién y los niveles de mando."
        },
        {
          "id": "mc2-49-4",
          "q": "¿Qué principio le permitió a Henry Ford imaginar su línea de montaje para el Ford T?",
          "options": [
            "La coordinación de las metas entre los distintos departamentos lógicos",
            "La división del trabajo y la especialización descrita por Adam Smith",
            "La departamentalización por área geográfica de los puestos de trabajo",
            "La jerarquía clara que ordenaba los niveles de mando de la planta"
          ],
          "correctIndex": 1,
          "explain": "Fue el principio de división del trabajo y especialización (el de los alfileres de Smith) lo que inspiró la línea de montaje del Ford T."
        }
      ],
      "ms": [
        {
          "id": "ms2-49-1",
          "q": "¿Cuáles de las siguientes son formas comunes de departamentalización mencionadas en el texto?",
          "options": [
            "Por funciones de la organización",
            "Por nivel salarial de los empleados",
            "Por productos de la organización",
            "Por área geográfica de operación",
            "Por antigüedad del personal contratado"
          ],
          "correctIndexes": [
            0,
            2,
            3
          ],
          "explain": "El texto lista funciones, productos, clientes, área geográfica y procesos. Nivel salarial y antigüedad no aparecen como criterios de departamentalización."
        },
        {
          "id": "ms2-49-2",
          "q": "¿Cuáles de estos son elementos de la estructura organizacional descritos además de la división del trabajo?",
          "options": [
            "La departamentalización de tareas y puestos",
            "La jerarquía o línea de autoridad",
            "La coordinación entre los departamentos",
            "La especialización de cada operario",
            "La integración de las actividades"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Departamentalización, jerarquía y coordinación (que es integración) son los otros elementos. La especialización es parte de la división del trabajo, no un elemento aparte."
        },
        {
          "id": "ms2-49-3",
          "q": "¿Cuáles de estas afirmaciones contradicen lo que dice el texto sobre división y coordinación?",
          "options": [
            "Dividir el trabajo aumenta la productividad según Adam Smith",
            "La coordinación integra las actividades de los departamentos",
            "A mayor diferenciación, menor necesidad de integración",
            "La división del trabajo elimina la necesidad de coordinar",
            "La departamentalización agrupa tareas en departamentos lógicos"
          ],
          "correctIndexes": [
            2,
            3
          ],
          "explain": "Las opciones C y D contradicen el texto: a más diferenciación, MÁS integración hace falta, y dividir sin coordinar genera caos. Las otras tres son correctas según el texto."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-49-1",
        "front": "Estructura organizacional",
        "back": "Forma en que el trabajo de una organización se divide, agrupa y coordina formalmente."
      },
      {
        "id": "fc2-49-2",
        "front": "Diseño organizacional",
        "back": "Proceso de tomar decisiones para crear la estructura de la organización."
      },
      {
        "id": "fc2-49-3",
        "front": "División del trabajo (especialización)",
        "back": "Descomponer una tarea compleja en subtareas más simples para que cada persona se especialice en una actividad limitada."
      },
      {
        "id": "fc2-49-4",
        "front": "Aporte de Adam Smith (alfileres)",
        "back": "En La riqueza de las naciones mostró que la especialización coordinada disparaba la productividad: diez personas producían unos 48.000 alfileres por día."
      },
      {
        "id": "fc2-49-5",
        "front": "Departamentalización",
        "back": "Agrupar tareas y puestos en departamentos lógicos: por funciones, productos, clientes, área geográfica o procesos."
      },
      {
        "id": "fc2-49-6",
        "front": "Jerarquía",
        "back": "Línea de autoridad y responsabilidad que define quién reporta a quién y establece los niveles de mando."
      },
      {
        "id": "fc2-49-7",
        "front": "Coordinación",
        "back": "Proceso de integrar las actividades de los distintos departamentos para que trabajen sincronizados hacia las metas."
      },
      {
        "id": "fc2-49-8",
        "front": "Diferenciación vs. integración",
        "back": "A medida que aumenta la especialización (diferenciación), crece la necesidad de coordinación (integración): dividir sin coordinar genera caos."
      }
    ]
  },
  "50": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-50-1",
          "q": "En la estructura lineal o piramidal, la autoridad y la comunicación fluyen de manera directa, sin tramos administrativos complejos.",
          "a": true,
          "explain": "Sí: la lineal es la más simple, con líneas de autoridad directas. Es clara y rápida, aunque rígida."
        },
        {
          "id": "tf2-50-2",
          "q": "La estructura funcional es la más recomendada para entornos complejos y dinámicos como agencias de publicidad o la NASA.",
          "a": false,
          "explain": "Falso: para entornos complejos y dinámicos el texto recomienda la matricial. La funcional es ideal para organizaciones medianas con pocos productos."
        },
        {
          "id": "tf2-50-3",
          "q": "En la estructura matricial el empleado responde a dos jefes: un gerente funcional y un gerente de proyecto.",
          "a": true,
          "explain": "Exacto: la matricial es un sistema de mando múltiple con jefe funcional (vertical) y jefe de proyecto (horizontal)."
        },
        {
          "id": "tf2-50-4",
          "q": "La organización informal es la estructura oficial planificada por la dirección y representada en el organigrama.",
          "a": false,
          "explain": "Eso es la organización formal. La informal es la red de relaciones sociales que surge espontáneamente entre la gente."
        },
        {
          "id": "tf2-50-5",
          "q": "Una desventaja de la estructura divisional es la duplicación de recursos y costos entre las distintas divisiones.",
          "a": true,
          "explain": "Sí: cada división casi autónoma tiene su propio marketing, etc., y eso duplica recursos y costos."
        }
      ],
      "mc": [
        {
          "id": "mc2-50-1",
          "q": "¿Qué estructura agrupa a los empleados según su función o especialidad, como Finanzas, Marketing y Operaciones?",
          "options": [
            "La estructura divisional, organizada por producto o región",
            "La estructura matricial, con su sistema de mando múltiple",
            "La estructura lineal, con autoridad directa por la pirámide",
            "La estructura funcional, agrupada por especialidad"
          ],
          "correctIndex": 3,
          "explain": "La funcional agrupa por función o especialidad (Finanzas, Marketing, RR. HH., Operaciones)."
        },
        {
          "id": "mc2-50-2",
          "q": "¿Cuál es una desventaja típica de la estructura funcional según el texto?",
          "options": [
            "La creación de silos que se comunican mal entre sí",
            "La duplicación de recursos y costos entre divisiones",
            "La ruptura del principio de unidad de mando",
            "La sobrecarga de los directivos en la cima"
          ],
          "correctIndex": 0,
          "explain": "La funcional puede crear silos (departamentos que no se hablan) y dar respuesta lenta al mercado. Las otras son desventajas de divisional, matricial y lineal."
        },
        {
          "id": "mc2-50-3",
          "q": "¿Qué estructura organiza la empresa en divisiones semiautónomas, cada una casi como una empresa independiente?",
          "options": [
            "La estructura matricial, que cruza funciones con proyectos",
            "La estructura funcional, agrupada por áreas de especialidad",
            "La estructura por producto o mercado, llamada divisional",
            "La estructura lineal, con la autoridad bajando por la pirámide"
          ],
          "correctIndex": 2,
          "explain": "La divisional organiza en divisiones semiautónomas por producto, mercado, cliente o región, cada una con su propio gerente."
        },
        {
          "id": "mc2-50-4",
          "q": "¿Cuál de estas es una desventaja propia de la estructura matricial?",
          "options": [
            "Rompe el principio de unidad de mando entre jefes",
            "Es rígida y no fomenta la especialización del personal",
            "Genera silos que responden con lentitud a los cambios",
            "Duplica recursos y costos entre las distintas divisiones"
          ],
          "correctIndex": 0,
          "explain": "La matricial rompe la unidad de mando (dos jefes) y puede generar confusión y conflictos de poder. Las otras pertenecen a lineal, funcional y divisional."
        },
        {
          "id": "mc2-50-5",
          "q": "¿Para qué tipo de empresa es ideal la estructura lineal según el texto?",
          "options": [
            "Grandes corporaciones con una cartera de productos diversificada",
            "Empresas muy pequeñas, como una tienda familiar o un taller",
            "Organizaciones medianas con un número limitado de productos",
            "Entornos complejos y dinámicos como consultoras o agencias"
          ],
          "correctIndex": 1,
          "explain": "La lineal es ideal para empresas muy pequeñas (tienda familiar, pequeño taller). Las otras corresponden a divisional, funcional y matricial."
        }
      ],
      "ms": [
        {
          "id": "ms2-50-1",
          "q": "¿Cuáles de estas son ventajas de la estructura divisional según el texto?",
          "options": [
            "Mayor enfoque en resultados específicos",
            "Mayor adaptabilidad al entorno",
            "Libera a la alta dirección de la gestión diaria",
            "Evita por completo la duplicación de recursos",
            "Garantiza la unidad de mando del empleado"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son ventajas reales de la divisional. La duplicación de recursos es una desventaja suya, y la unidad de mando no es un atributo destacado de la divisional."
        },
        {
          "id": "ms2-50-2",
          "q": "¿Cuáles de las siguientes son características de la organización informal?",
          "options": [
            "Surge de forma espontánea entre la gente",
            "Se representa formalmente en el organigrama",
            "Tiene líderes informales y valores de grupo",
            "Mejora la comunicación por el radiopasillo",
            "Se basa en reglas predefinidas por la dirección"
          ],
          "correctIndexes": [
            0,
            2,
            3
          ],
          "explain": "La informal surge sola, tiene líderes informales y mejora la comunicación por radiopasillo. El organigrama y las reglas predefinidas son de la organización formal."
        },
        {
          "id": "ms2-50-3",
          "q": "¿Cuáles de estas estructuras describe el texto como un sistema de mando múltiple o doble jefatura?",
          "options": [
            "La estructura lineal o piramidal",
            "La estructura funcional por especialidad",
            "La estructura divisional por producto",
            "La estructura informal de relaciones",
            "La estructura por funciones agrupadas"
          ],
          "correctIndexes": [],
          "explain": "Ninguna de estas es de mando múltiple. La única con doble jefe (mando múltiple) es la matricial, que no figura entre las opciones."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-50-1",
        "front": "Estructura lineal (piramidal)",
        "back": "La más simple: autoridad y comunicación directas por la pirámide. Clara y rápida, pero rígida; ideal para empresas muy pequeñas."
      },
      {
        "id": "fc2-50-2",
        "front": "Estructura funcional",
        "back": "Agrupa empleados por función o especialidad. Fomenta la especialización, pero puede crear silos y responder lento al mercado."
      },
      {
        "id": "fc2-50-3",
        "front": "Estructura divisional (por producto/mercado)",
        "back": "Divisiones semiautónomas por producto, mercado o región, cada una casi una empresa propia. Más enfoque, pero duplica recursos."
      },
      {
        "id": "fc2-50-4",
        "front": "Estructura matricial",
        "back": "Combina funcional con producto/proyecto; el empleado tiene dos jefes (mando múltiple). Muy flexible, pero rompe la unidad de mando."
      },
      {
        "id": "fc2-50-5",
        "front": "Organización formal",
        "back": "Estructura oficial planificada por la dirección, basada en división del trabajo, autoridad formal y reglas; se ve en el organigrama."
      },
      {
        "id": "fc2-50-6",
        "front": "Organización informal",
        "back": "Red de relaciones sociales que surge espontáneamente; tiene líderes informales y mejora la comunicación por el radiopasillo, pero genera rumores."
      },
      {
        "id": "fc2-50-7",
        "front": "Silos (funcional)",
        "back": "Departamentos que no se comunican bien entre sí; desventaja típica de la estructura funcional."
      },
      {
        "id": "fc2-50-8",
        "front": "Actitud del buen gerente ante la informal",
        "back": "No la elimina: la entiende, la alinea con los objetivos formales y usa sus canales de comunicación a favor de la organización."
      }
    ]
  },
  "51": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-51-1",
          "q": "El poder es la capacidad potencial de modificar el comportamiento de otros y requiere ocupar un cargo formal para existir.",
          "a": false,
          "explain": "Falso: el poder es la capacidad potencial, pero NO requiere cargo formal. Un técnico indispensable tiene poder sin ser jefe."
        },
        {
          "id": "tf2-51-2",
          "q": "La influencia es la manifestación activa del poder, su ejercicio que produce un cambio real en la conducta de otra persona.",
          "a": true,
          "explain": "Tal cual: si el poder es la capacidad, la influencia es el verbo, el poder en acción que cambia algo de verdad."
        },
        {
          "id": "tf2-51-3",
          "q": "La autoridad es un tipo de poder legitimado por la estructura formal, que fluye de arriba hacia abajo por la cadena de mando.",
          "a": true,
          "explain": "Sí: la autoridad es poder institucionalizado, jerárquico, conferido por el cargo, que baja por la cadena de mando."
        },
        {
          "id": "tf2-51-4",
          "q": "El poder coercitivo se basa en distribuir recompensas tangibles como aumentos, bonos y ascensos.",
          "a": false,
          "explain": "Falso: eso es el poder de recompensa. El coercitivo es la contracara, basado en castigos y miedo."
        },
        {
          "id": "tf2-51-5",
          "q": "El poder de experto depende exclusivamente del cargo jerárquico que ocupa la persona en la organización.",
          "a": false,
          "explain": "Falso: el experto viene del conocimiento, no del cargo. Un programador junior puede tener más poder experto que su gerente."
        }
      ],
      "mc": [
        {
          "id": "mc2-51-1",
          "q": "Según el texto, ¿cuál es la diferencia clave entre poder y autoridad?",
          "options": [
            "El poder es multidireccional y la autoridad deriva del cargo",
            "El poder lo da el carisma personal y la autoridad la da el miedo al castigo",
            "El poder se ejerce hacia abajo y la autoridad fluye en todas las direcciones",
            "El poder requiere un cargo formal y la autoridad surge de cualquier parte"
          ],
          "correctIndex": 0,
          "explain": "La diferencia clave: el poder es multidireccional y surge de cualquier lado; la autoridad es jerárquica y deriva del cargo."
        },
        {
          "id": "mc2-51-2",
          "q": "¿Qué fuente de poder se basa en aplicar castigos y consecuencias negativas, con el miedo como motor?",
          "options": [
            "El poder de recompensa por bonos y ascensos",
            "El poder legítimo derivado del cargo formal",
            "El poder de referencia basado en el carisma",
            "El poder coercitivo basado en el castigo"
          ],
          "correctIndex": 3,
          "explain": "El coercitivo se basa en castigos y su motor es el miedo. Es efectivo a corto plazo, pero su abuso genera resentimiento."
        },
        {
          "id": "mc2-51-3",
          "q": "¿Qué fuente de poder está asociada al liderazgo transformacional, por carisma e integridad que inspiran lealtad?",
          "options": [
            "El poder de referencia o referente",
            "El poder de experto basado en la pericia técnica",
            "El poder legítimo derivado de la jerarquía formal",
            "El poder de recompensa por premios y reconocimiento"
          ],
          "correctIndex": 0,
          "explain": "El poder de referencia se basa en cualidades personales (carisma, integridad) y se asocia al liderazgo transformacional."
        },
        {
          "id": "mc2-51-4",
          "q": "Un programador junior que sabe más de un lenguaje que su gerente ejerce principalmente cuál tipo de poder?",
          "options": [
            "Poder legítimo, por su posición en la jerarquía formal de la empresa",
            "Poder de recompensa, por dar reconocimiento y bonos a su equipo",
            "Poder de experto, por su conocimiento y pericia",
            "Poder coercitivo, por la amenaza de tareas desagradables"
          ],
          "correctIndex": 2,
          "explain": "Es poder de experto: viene del conocimiento y la pericia, no del cargo. Por eso un junior puede tener más que su jefe."
        },
        {
          "id": "mc2-51-5",
          "q": "¿Quiénes clasificaron las cinco fuentes del poder mencionadas en el texto?",
          "options": [
            "Adam Smith y David Ricardo en sus teorías",
            "Henry Mintzberg en sus mecanismos de coordinación",
            "Henry Ford y Frederick Taylor en sus estudios",
            "French y Raven en su clasificación sociológica"
          ],
          "correctIndex": 3,
          "explain": "Fueron los sociólogos French y Raven quienes clasificaron las cinco fuentes del poder."
        }
      ],
      "ms": [
        {
          "id": "ms2-51-1",
          "q": "¿Cuáles de estas son fuentes del poder según la clasificación de French y Raven?",
          "options": [
            "Poder de recompensa",
            "Poder coercitivo",
            "Poder de negociación",
            "Poder de experto",
            "Poder de referencia"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Las cinco fuentes son recompensa, coercitivo, legítimo, experto y referente. El poder de negociación no figura entre ellas; sí falta el legítimo, que no estaba en la lista."
        },
        {
          "id": "ms2-51-2",
          "q": "¿Cuáles de estas afirmaciones sobre el poder de recompensa son correctas según el texto?",
          "options": [
            "Se basa en distribuir recompensas que otros valoran",
            "Las recompensas pueden ser tangibles como bonos y ascensos",
            "Las recompensas pueden ser intangibles como el reconocimiento",
            "Su motor principal es el miedo a las sanciones",
            "Deriva siempre de la posición formal en la jerarquía"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son del poder de recompensa. El miedo es del coercitivo y la posición formal es del legítimo."
        },
        {
          "id": "ms2-51-3",
          "q": "¿Cuáles de estas afirmaciones confunden poder, influencia y autoridad respecto del texto?",
          "options": [
            "El poder es la capacidad potencial de modificar conductas",
            "La influencia es el ejercicio del poder que cambia algo real",
            "La autoridad surge del carisma y no del cargo ocupado",
            "El poder solo existe si hay un cargo formal de por medio",
            "La autoridad es poder legitimado por la estructura formal"
          ],
          "correctIndexes": [
            2,
            3
          ],
          "explain": "C y D están mal: la autoridad deriva del cargo (no del carisma) y el poder NO necesita cargo formal. Las otras tres son correctas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-51-1",
        "front": "Poder",
        "back": "Capacidad potencial de un individuo o grupo para modificar el comportamiento o las actitudes de otros; no requiere cargo formal."
      },
      {
        "id": "fc2-51-2",
        "front": "Influencia",
        "back": "Manifestación activa del poder, su ejercicio; el verbo del poder, que produce un cambio real en la conducta de otra persona."
      },
      {
        "id": "fc2-51-3",
        "front": "Autoridad",
        "back": "Poder legitimado por la estructura formal; derecho a dar órdenes conferido por el cargo, que fluye de arriba hacia abajo."
      },
      {
        "id": "fc2-51-4",
        "front": "Poder de recompensa",
        "back": "Se basa en distribuir recompensas valoradas, tangibles (aumentos, bonos, ascensos) o intangibles (reconocimiento, proyectos interesantes)."
      },
      {
        "id": "fc2-51-5",
        "front": "Poder coercitivo",
        "back": "Se basa en castigos y consecuencias negativas; su motor es el miedo. Efectivo a corto plazo, pero su abuso genera resentimiento."
      },
      {
        "id": "fc2-51-6",
        "front": "Poder legítimo",
        "back": "Deriva de la posición formal en la jerarquía; es sinónimo de autoridad (ej.: el CEO fija la dirección estratégica)."
      },
      {
        "id": "fc2-51-7",
        "front": "Poder de experto",
        "back": "Proviene del conocimiento, las habilidades o la pericia especial; no depende del cargo."
      },
      {
        "id": "fc2-51-8",
        "front": "Poder de referencia (referente)",
        "back": "Se basa en cualidades personales que inspiran admiración y lealtad (carisma, integridad); asociado al liderazgo transformacional."
      }
    ]
  },
  "52": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-52-1",
          "q": "La autoridad de staff brinda asesoramiento y servicios a la línea, pero no da órdenes directas.",
          "a": true,
          "explain": "Sí: el staff aconseja y recomienda (RR. HH., Jurídico, I+D), pero no manda directamente."
        },
        {
          "id": "tf2-52-2",
          "q": "La autoridad funcional respeta plenamente el principio de unidad de mando.",
          "a": false,
          "explain": "Falso: justamente la autoridad funcional rompe la unidad de mando, porque un staff controla un tema específico en otras áreas."
        },
        {
          "id": "tf2-52-3",
          "q": "La centralización concentra la toma de decisiones en los niveles más altos y permite control estricto y uniformidad.",
          "a": true,
          "explain": "Tal cual: centralizar concentra arriba, da control y uniformidad (útil en crisis), pero ralentiza y puede desmotivar."
        },
        {
          "id": "tf2-52-4",
          "q": "En la estandarización de resultados se especifica al detalle cómo el trabajador debe hacer la tarea.",
          "a": false,
          "explain": "Falso: en resultados se especifica QUÉ se logra, no el cómo (al vendedor se le da una cuota y elige cómo). Especificar el cómo es estandarizar procesos."
        },
        {
          "id": "tf2-52-5",
          "q": "Mintzberg describió cinco mecanismos de coordinación, entre ellos el ajuste mutuo y la supervisión directa.",
          "a": true,
          "explain": "Correcto: Mintzberg planteó cinco mecanismos, e incluyen el ajuste mutuo y la supervisión directa."
        }
      ],
      "mc": [
        {
          "id": "mc2-52-1",
          "q": "¿Qué tipo de autoridad fluye directamente por la cadena de mando y toma decisiones para los objetivos principales?",
          "options": [
            "La autoridad de staff, que asesora y da servicios a la línea",
            "La autoridad funcional, que controla temas puntuales en otras áreas",
            "La autoridad lineal, columna vertebral de la jerarquía",
            "La autoridad informal, surgida del radiopasillo entre la gente"
          ],
          "correctIndex": 2,
          "explain": "La autoridad lineal baja por la cadena de mando y toma decisiones directas; es la columna vertebral de la jerarquía."
        },
        {
          "id": "mc2-52-2",
          "q": "Cuando el director de Finanzas exige a todas las áreas un formato y fecha para los informes de gastos, ejerce autoridad...",
          "options": [
            "De staff, porque asesora sin dar órdenes directas",
            "Funcional, porque controla un tema en otras áreas",
            "Lineal, porque baja por su propia cadena de mando",
            "Informal, porque usa la red espontánea de contactos"
          ],
          "correctIndex": 1,
          "explain": "Es autoridad funcional: un miembro del staff controla una actividad específica (los informes) en otros departamentos, rompiendo la unidad de mando."
        },
        {
          "id": "mc2-52-3",
          "q": "¿Qué mecanismo de coordinación se logra por comunicación informal, típico de equipos muy simples o muy complejos?",
          "options": [
            "La estandarización de los procesos de trabajo",
            "La supervisión directa de un gerente a cargo",
            "La estandarización de habilidades del trabajador",
            "El ajuste mutuo entre las personas del equipo"
          ],
          "correctIndex": 3,
          "explain": "El ajuste mutuo coordina por comunicación informal: sirve tanto en lo muy simple (dos remando) como en lo muy complejo (científicos de alto nivel)."
        },
        {
          "id": "mc2-52-4",
          "q": "Que un cirujano y un anestesista sepan qué esperar el uno del otro sin comunicación constante es ejemplo de...",
          "options": [
            "Estandarización de resultados u outputs esperados",
            "Estandarización de habilidades por la formación",
            "Estandarización de los procesos de trabajo",
            "Supervisión directa de un jefe sobre el equipo"
          ],
          "correctIndex": 1,
          "explain": "Es estandarización de habilidades (skills): la coordinación viene de la formación y el conocimiento compartido, sin charla constante."
        },
        {
          "id": "mc2-52-5",
          "q": "¿Qué describe mejor a la descentralización horizontal según el texto?",
          "options": [
            "El poder de decisión baja por la cadena formal de mando vertical",
            "Las decisiones se concentran en un único punto en la cima de todo",
            "El poder fluye hacia analistas o especialistas fuera de la línea",
            "Un gerente asume el control directo del trabajo de los demás"
          ],
          "correctIndex": 2,
          "explain": "La descentralización horizontal lleva el poder hacia analistas o especialistas fuera de la línea de mando. Bajar por la cadena es la vertical."
        }
      ],
      "ms": [
        {
          "id": "ms2-52-1",
          "q": "¿Cuáles de estos son mecanismos de coordinación descritos por Mintzberg?",
          "options": [
            "Ajuste mutuo",
            "Supervisión directa",
            "Estandarización de procesos de trabajo",
            "Estandarización de resultados",
            "Estandarización de habilidades"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son los mecanismos de coordinación de Mintzberg: ajuste mutuo, supervisión directa y estandarización de procesos, resultados y habilidades."
        },
        {
          "id": "ms2-52-2",
          "q": "¿Cuáles de estas afirmaciones sobre la centralización son correctas según el texto?",
          "options": [
            "Concentra las decisiones en los niveles más altos",
            "Permite control estricto y uniformidad",
            "Resulta útil en situaciones de crisis",
            "Agiliza siempre la toma de decisiones",
            "Aumenta la motivación de los niveles bajos"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son de la centralización. Agilizar decisiones y aumentar la motivación son ventajas de la descentralización, no de centralizar."
        },
        {
          "id": "ms2-52-3",
          "q": "Sobre la autoridad de staff, ¿cuáles de estas afirmaciones son falsas según el texto?",
          "options": [
            "Da órdenes directas a los gerentes de línea",
            "Brinda asesoramiento, servicios y apoyo",
            "Reemplaza por completo a la autoridad lineal",
            "Aconseja y recomienda a la línea",
            "Su objetivo es aumentar la eficacia de la línea"
          ],
          "correctIndexes": [
            0,
            2
          ],
          "explain": "Son falsas A y C: el staff NO da órdenes directas ni reemplaza a la línea; asesora y apoya. Las otras tres describen bien al staff."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-52-1",
        "front": "Autoridad lineal",
        "back": "Fluye directamente por la cadena de mando; toma decisiones y da órdenes para los objetivos principales. Columna vertebral de la jerarquía."
      },
      {
        "id": "fc2-52-2",
        "front": "Autoridad de staff",
        "back": "Asesora, da servicios y apoyo a la línea (RR. HH., Jurídico, I+D); no da órdenes directas, aconseja y recomienda."
      },
      {
        "id": "fc2-52-3",
        "front": "Autoridad funcional",
        "back": "Forma especializada que rompe la unidad de mando: un staff controla actividades específicas en otros departamentos para garantizar uniformidad."
      },
      {
        "id": "fc2-52-4",
        "front": "Centralización",
        "back": "Las decisiones se concentran en los niveles más altos. Da control y uniformidad (útil en crisis), pero ralentiza y desmotiva."
      },
      {
        "id": "fc2-52-5",
        "front": "Descentralización",
        "back": "Transfiere la autoridad de decisión a niveles más bajos. Puede ser vertical (baja por la cadena) u horizontal (hacia especialistas fuera de la línea)."
      },
      {
        "id": "fc2-52-6",
        "front": "Ajuste mutuo (Mintzberg)",
        "back": "Coordinación por comunicación informal; típica en organizaciones muy simples (dos remando) o muy complejas (científicos de alto nivel)."
      },
      {
        "id": "fc2-52-7",
        "front": "Estandarización de resultados vs. de procesos",
        "back": "Resultados: se especifica QUÉ lograr, no el cómo (cuota del vendedor). Procesos: se especifica el contenido del trabajo (manuales, línea de ensamblaje)."
      },
      {
        "id": "fc2-52-8",
        "front": "Estandarización de habilidades (skills)",
        "back": "Se especifica la formación y el conocimiento del trabajador; el cirujano y el anestesista se coordinan por su formación, sin comunicación constante."
      }
    ]
  },
  "53": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-53-1",
          "q": "Sofía influye sobre el equipo porque ocupa el cargo de Directora General de Cuentas, no por sus cualidades personales.",
          "a": true,
          "explain": "Tal cual: el equipo le obedece por la posición formal en la jerarquía, no por cómo es ella. Eso es poder legítimo, que viene del cargo."
        },
        {
          "id": "tf2-53-2",
          "q": "El poder de Elena proviene de la autoridad formal que le otorga su puesto dentro de la agencia.",
          "a": false,
          "explain": "Falso. Elena no manda por cargo: la escuchan por lo que sabe. Es redactora galardonada con mucha experiencia, o sea poder de experto."
        },
        {
          "id": "tf2-53-3",
          "q": "Ricardo ejerce su influencia amenazando con informar a la dirección y oponerse al bono, generando presión por el miedo.",
          "a": true,
          "explain": "Exacto: castigos y consecuencias negativas mueven al equipo por temor. Eso es poder coercitivo."
        },
        {
          "id": "tf2-53-4",
          "q": "Mateo logra que lo sigan porque tiene autoridad formal y capacidad de premiar o castigar al equipo.",
          "a": false,
          "explain": "Falso. Mateo no tiene cargo ni premia ni castiga: lo siguen por carisma, actitud positiva y admiración. Eso es poder de referencia."
        },
        {
          "id": "tf2-53-5",
          "q": "Javier basa su influencia en ofrecer un bono extra y días libres como incentivo para que el equipo cumpla.",
          "a": true,
          "explain": "Sí: promete algo valioso para motivar. Premiar para influir es poder de recompensa."
        }
      ],
      "mc": [
        {
          "id": "mc2-53-1",
          "q": "¿Qué tipo de poder representa Sofía en el caso?",
          "options": [
            "Poder de experto, por su pericia reconocida",
            "Poder legítimo, por su posición formal",
            "Poder de referencia, por su gran carisma",
            "Poder coercitivo, por sus duras amenazas"
          ],
          "correctIndex": 1,
          "explain": "Sofía manda porque es la Directora: su influencia sale del cargo en la jerarquía. Eso define al poder legítimo."
        },
        {
          "id": "mc2-53-2",
          "q": "La amenaza de Ricardo de informar a la dirección y oponerse al bono ilustra el poder...",
          "options": [
            "de recompensa, por el incentivo",
            "de referencia, por la admiración",
            "coercitivo, por el castigo temido",
            "legítimo, por el cargo jerárquico"
          ],
          "correctIndex": 2,
          "explain": "Castigo y miedo: si no cumplen, hay consecuencias negativas. Ese es el poder coercitivo."
        },
        {
          "id": "mc2-53-3",
          "q": "¿Por qué el equipo, incluida la directora, respeta y escucha a Elena?",
          "options": [
            "Por su conocimiento y experiencia",
            "Por su autoridad formal en el organigrama",
            "Por su capacidad de premiar al equipo",
            "Por su carisma y su actitud admirada"
          ],
          "correctIndex": 0,
          "explain": "A Elena la escuchan por lo que sabe, no por cargo: es una redactora galardonada. Eso es poder de experto."
        },
        {
          "id": "mc2-53-4",
          "q": "La promesa de Javier de un bono extra y días libres corresponde al poder...",
          "options": [
            "coercitivo, por el miedo aplicado",
            "de experto, por su saber valorado",
            "de referencia, por la lealtad sentida",
            "de recompensa, por el incentivo"
          ],
          "correctIndex": 3,
          "explain": "Javier influye prometiendo algo bueno. Premiar para motivar es, justamente, poder de recompensa."
        },
        {
          "id": "mc2-53-5",
          "q": "¿En qué se basa la influencia de Mateo sobre sus compañeros?",
          "options": [
            "En cualidades personales como el carisma",
            "En la posición formal que le da el cargo",
            "En castigos que el equipo busca evitar",
            "En recompensas materiales que puede ofrecer"
          ],
          "correctIndex": 0,
          "explain": "A Mateo lo siguen porque lo admiran: carisma, buena actitud, respeto. Sin cargo ni premios ni castigos: poder de referencia."
        }
      ],
      "ms": [
        {
          "id": "ms2-53-1",
          "q": "¿Cuáles de estos personajes ejercen un poder que NO deriva de su cargo formal?",
          "options": [
            "Elena, por su pericia reconocida",
            "Sofía, como Directora General de Cuentas",
            "Mateo, por la admiración que inspira",
            "Ricardo, por sus amenazas a la dirección",
            "Javier, por prometer bonos al equipo"
          ],
          "correctIndexes": [
            0,
            2
          ],
          "explain": "Elena (experto) y Mateo (referente) no mandan por cargo. Sofía sí es por cargo (legítimo); Ricardo y Javier usan castigo y premio respectivamente."
        },
        {
          "id": "ms2-53-2",
          "q": "Según el truco para reconocer las fuentes de poder, ¿qué asociaciones son correctas?",
          "options": [
            "Influencia desde el cargo, es legítimo",
            "Influencia por premiar, es recompensa",
            "Influencia por castigar, es coercitivo",
            "Influencia por lo que sabe, es experto",
            "Influencia por admiración, es referente"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son las equivalencias exactas del truco del cierre: cargo, premio, castigo, saber y admiración mapean a los cinco tipos."
        },
        {
          "id": "ms2-53-3",
          "q": "¿Cuáles de estos personajes basa su influencia en aplicar castigos o consecuencias negativas?",
          "options": [
            "Sofía, por su posición jerárquica",
            "Javier, por ofrecer días libres",
            "Elena, por su experiencia galardonada",
            "Mateo, por el respeto que genera",
            "Javier, por motivar con incentivos"
          ],
          "correctIndexes": [],
          "explain": "Ninguno de los listados castiga: el del castigo es Ricardo, que no aparece como opción. Los cinco mostrados usan cargo, premio, saber o admiración."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-53-1",
        "front": "Poder legítimo (caso de Sofía)",
        "back": "Influencia que proviene de la posición formal en la jerarquía. Como Directora General de Cuentas, Sofía tiene autoridad reconocida para dar órdenes; le obedecen por el cargo, no por sus cualidades."
      },
      {
        "id": "fc2-53-2",
        "front": "Poder de recompensa (caso de Javier)",
        "back": "Capacidad de influir ofreciendo algo valioso. La promesa de un bono extra y días libres actúa como incentivo positivo para motivar al equipo a cumplir el objetivo."
      },
      {
        "id": "fc2-53-3",
        "front": "Poder coercitivo (caso de Ricardo)",
        "back": "Influencia basada en aplicar castigos o consecuencias negativas. Amenazar con informar a la dirección y oponerse al bono genera presión por el miedo."
      },
      {
        "id": "fc2-53-4",
        "front": "Poder de experto (caso de Elena)",
        "back": "Influencia que deriva del conocimiento, la habilidad y la experiencia, no del cargo. A Elena la respetan —incluida la directora— por su pericia como redactora publicitaria galardonada."
      },
      {
        "id": "fc2-53-5",
        "front": "Poder de referencia (caso de Mateo)",
        "back": "Influencia basada en cualidades personales: carisma, actitud positiva y respeto. Lo siguen por admiración y lealtad, sin autoridad formal ni capacidad de premiar o castigar."
      },
      {
        "id": "fc2-53-6",
        "front": "Truco para reconocer las fuentes de poder",
        "back": "Si la influencia viene del cargo, es legítimo; de premiar, recompensa; de castigar o amenazar, coercitivo; de lo que sabe, experto; de cómo es la persona (admiración), referente."
      },
      {
        "id": "fc2-53-7",
        "front": "¿Cuántas personas presionan al equipo en el caso y qué representan?",
        "back": "Cinco personas, cada una representando un tipo de poder de French y Raven: Sofía (legítimo), Javier (recompensa), Ricardo (coercitivo), Elena (experto) y Mateo (referencia)."
      }
    ]
  },
  "54": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-54-1",
          "q": "El puesto de trabajo es la unidad fundamental de la estructura de la organización.",
          "a": true,
          "explain": "Sí: es la célula de la organización, una posición específica y formal dentro del organigrama con tareas, deberes y responsabilidades asignadas."
        },
        {
          "id": "tf2-54-2",
          "q": "La autoridad de un puesto se refiere a la obligación de responder por los resultados de las tareas realizadas.",
          "a": false,
          "explain": "Falso. Eso es la responsabilidad (rendir cuentas). La autoridad es el grado de autonomía para decidir, usar recursos y dar órdenes sin consultar."
        },
        {
          "id": "tf2-54-3",
          "q": "El rol es la dimensión dinámica y conductual: cómo cada persona vive e interpreta su puesto en la interacción diaria.",
          "a": true,
          "explain": "Exacto. El puesto es lo formal y estático; el rol es cómo lo vivís, con comportamientos y expectativas que no siempre están escritos."
        },
        {
          "id": "tf2-54-4",
          "q": "En el ejemplo, dos personas con el mismo puesto de vendedor de salón cumplen siempre el mismo rol y generan el mismo impacto.",
          "a": false,
          "explain": "Falso. El Vendedor A cumple lo justo y el B es proactivo (se acerca a indecisos, avisa promos, colabora con stock). Mismo puesto, distinto rol e impacto."
        },
        {
          "id": "tf2-54-5",
          "q": "El puesto es la descripción formal y estática que detalla lo que se espera de la posición.",
          "a": true,
          "explain": "Tal cual: el puesto es el documento que detalla lo esperado, la parte formal y estática frente al rol dinámico."
        }
      ],
      "mc": [
        {
          "id": "mc2-54-1",
          "q": "¿Cuáles son los tres componentes del puesto de trabajo?",
          "options": [
            "Funciones, jerarquía y supervisión",
            "Tareas, responsabilidad y autoridad",
            "Objetivos, recursos y resultados",
            "Cargo, sueldo y antigüedad"
          ],
          "correctIndex": 1,
          "explain": "Las tres patas son tareas (qué hacés), responsabilidad (de qué rendís cuentas) y autoridad (qué podés decidir)."
        },
        {
          "id": "mc2-54-2",
          "q": "El componente que indica el grado de autonomía para usar recursos y decidir sin consultar es...",
          "options": [
            "la responsabilidad asignada",
            "el conjunto de tareas",
            "la autoridad del puesto",
            "el rol desempeñado"
          ],
          "correctIndex": 2,
          "explain": "La autoridad es el qué decisiones se pueden tomar: la autonomía para usar recursos, dar órdenes y decidir sin pasar por un superior."
        },
        {
          "id": "mc2-54-3",
          "q": "Que el analista de marketing responda por aumentar un 15 % la interacción en Instagram es un ejemplo de...",
          "options": [
            "la autoridad del puesto",
            "el rol que interpreta",
            "el conjunto de tareas",
            "la responsabilidad del puesto"
          ],
          "correctIndex": 3,
          "explain": "Responder por un resultado concreto es responsabilidad: la obligación de rendir cuentas por los objetivos de las tareas."
        },
        {
          "id": "mc2-54-4",
          "q": "¿Qué distingue al rol del puesto?",
          "options": [
            "El rol es la dimensión dinámica del puesto",
            "El rol es el documento formal y estático de la posición",
            "El rol fija las decisiones que el ocupante puede tomar",
            "El rol enumera las tareas concretas que hay que ejecutar"
          ],
          "correctIndex": 0,
          "explain": "El rol es la parte dinámica: cómo cada persona interpreta y vive el puesto. El puesto es lo formal y estático y enmarca tareas y decisiones."
        },
        {
          "id": "mc2-54-5",
          "q": "En el ejemplo de los vendedores, ¿qué muestra el Vendedor B respecto del A?",
          "options": [
            "Que ocupa un puesto distinto al del Vendedor A",
            "Que su autoridad formal supera la del Vendedor A",
            "Que desempeña un rol más proactivo en el mismo puesto",
            "Que sus tareas escritas son más amplias que las del A"
          ],
          "correctIndex": 2,
          "explain": "Mismo puesto, distinto rol: el B se acerca a indecisos, recuerda nombres, avisa promos y colabora con stock. Cambia el rol, no el puesto."
        }
      ],
      "ms": [
        {
          "id": "ms2-54-1",
          "q": "¿Cuáles de estas afirmaciones describen correctamente al puesto de trabajo?",
          "options": [
            "Es la unidad fundamental de la estructura",
            "Es una posición formal del organigrama",
            "Implica tareas y responsabilidades asignadas",
            "Es la forma personal de vivir la posición",
            "Coincide siempre con el rol del ocupante"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son el puesto (unidad formal con tareas y responsabilidades). La cuarta y la quinta describen el rol, que puede diferir entre personas."
        },
        {
          "id": "ms2-54-2",
          "q": "Sobre las tareas del puesto, ¿qué opciones son correctas según el texto?",
          "options": [
            "Son las acciones y actividades concretas que se ejecutan",
            "Responden a la pregunta del qué se hace",
            "Incluyen gestionar redes y redactar copys, en el ejemplo",
            "Definen el grado de autonomía para decidir",
            "Son la obligación de rendir cuentas por resultados"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Tareas son el qué se hace: acciones concretas como gestionar redes y redactar copys. La autonomía es autoridad y rendir cuentas es responsabilidad."
        },
        {
          "id": "ms2-54-3",
          "q": "¿Cuáles de estas opciones corresponden a la definición de rol, según el texto?",
          "options": [
            "La descripción formal y estática del puesto",
            "El documento que detalla lo que se espera",
            "El conjunto predefinido de tareas asignadas",
            "El presupuesto y los recursos de la posición",
            "La jerarquía formal dentro del organigrama"
          ],
          "correctIndexes": [],
          "explain": "Ninguna describe el rol: todas son del puesto o cosas ajenas. El rol es la dimensión dinámica de cómo se vive el puesto, que acá no figura."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-54-1",
        "front": "Puesto de trabajo",
        "back": "Unidad fundamental de la estructura: una posición específica y formal dentro del organigrama, que implica un conjunto predefinido de tareas, deberes y responsabilidades asignadas a quien lo ocupa."
      },
      {
        "id": "fc2-54-2",
        "front": "Componente: tareas",
        "back": "El qué se hace: las acciones y actividades concretas que ejecuta el ocupante. Ej.: un analista de marketing digital gestiona redes, redacta copys, analiza métricas y genera reportes."
      },
      {
        "id": "fc2-54-3",
        "front": "Componente: responsabilidad",
        "back": "El sobre qué se rinde cuentas: la obligación de responder por los resultados de las tareas. Ej.: el analista responde por aumentar un 15 % la interacción en Instagram."
      },
      {
        "id": "fc2-54-4",
        "front": "Componente: autoridad",
        "back": "El qué decisiones se pueden tomar: el grado de autonomía para usar recursos, dar órdenes y decidir sin consultar a un superior. Ej.: decidir el contenido diario, pero pedir aprobación para campañas de gran presupuesto."
      },
      {
        "id": "fc2-54-5",
        "front": "Puesto vs. rol",
        "back": "El puesto es la descripción formal y estática (lo que se espera de la posición). El rol es la dimensión dinámica y conductual: cómo cada persona vive e interpreta ese puesto, con comportamientos no siempre escritos."
      },
      {
        "id": "fc2-54-6",
        "front": "Ejemplo del vendedor de salón",
        "back": "Dos personas en el mismo puesto: el Vendedor A cumple estrictamente (atiende, vende, ordena); el Vendedor B es proactivo (se acerca a indecisos, recuerda nombres, avisa promos, colabora con stock). Mismo puesto, distinto rol e impacto."
      }
    ]
  },
  "55": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-55-1",
          "q": "En un grupo de trabajo el rendimiento equivale a la suma de los esfuerzos individuales de sus miembros.",
          "a": true,
          "explain": "Sí: en el grupo cada uno rema para su lado y comparte info para mejorar su propio laburo. El resultado es la suma, sin sinergia."
        },
        {
          "id": "tf2-55-2",
          "q": "La sinergia del equipo (1 + 1 = 3) significa que el esfuerzo colectivo genera un resultado mayor que la suma de los aportes.",
          "a": true,
          "explain": "Exacto: esa es la clave del equipo. Habilidades complementarias y meta común producen más que la suma de las partes."
        },
        {
          "id": "tf2-55-3",
          "q": "Las task force figuran en el organigrama y tienen duración permanente dentro de la organización.",
          "a": false,
          "explain": "Falso. Las task force NO figuran en el organigrama y son temporales: se disuelven al cumplir su misión."
        },
        {
          "id": "tf2-55-4",
          "q": "Los comités son equipos formales orientados al gobierno, la supervisión y el asesoramiento.",
          "a": true,
          "explain": "Tal cual: los comités se ocupan de asuntos estratégicos, operativos o legales, y suelen integrarlos la gerencia media y alta."
        },
        {
          "id": "tf2-55-5",
          "q": "Un grupo de trabajo (work group) tiene composición multifuncional, con miembros de distintas áreas.",
          "a": false,
          "explain": "Falso. El work group es unifuncional: todos de la misma área. La composición multifuncional es de las task force y los comités."
        }
      ],
      "mc": [
        {
          "id": "mc2-55-1",
          "q": "¿Qué caracteriza al grupo de trabajo frente al equipo?",
          "options": [
            "Tiene metas colectivas y plena responsabilidad mutua",
            "Su rendimiento es la suma de esfuerzos individuales",
            "Se basa en la fuerte sinergia entre sus integrantes",
            "Comparte el liderazgo y un mismo propósito común"
          ],
          "correctIndex": 1,
          "explain": "En el grupo cada uno persigue su meta individual y el resultado es la suma. Sinergia, meta colectiva y responsabilidad mutua son del equipo."
        },
        {
          "id": "mc2-55-2",
          "q": "Las task force se caracterizan por ser...",
          "options": [
            "permanentes y unifuncionales del organigrama",
            "de gobierno, supervisión y asesoramiento",
            "temporales y multifuncionales para un proyecto",
            "unidades fijas de una sola área continua"
          ],
          "correctIndex": 2,
          "explain": "Las task force son temporales (se disuelven al cumplir su misión) y multifuncionales, armadas para resolver un problema específico."
        },
        {
          "id": "mc2-55-3",
          "q": "El Departamento de Contabilidad, como un gerente con los empleados que le reportan, es un ejemplo de...",
          "options": [
            "comité de gobierno",
            "task force temporal",
            "equipo con sinergia",
            "grupo de trabajo"
          ],
          "correctIndex": 3,
          "explain": "Es un work group: un gerente y sus reportes directos, unidad del organigrama, permanente y unifuncional."
        },
        {
          "id": "mc2-55-4",
          "q": "¿Cuál es la clave que distingue a un equipo de trabajo?",
          "options": [
            "La sinergia que da más que la suma",
            "La meta individual de cada integrante",
            "El liderazgo único y fuerte del responsable",
            "La responsabilidad exclusivamente individual"
          ],
          "correctIndex": 0,
          "explain": "El equipo se define por la sinergia: habilidades complementarias y meta común que rinden más que la suma. Lo individual y el líder único son del grupo."
        },
        {
          "id": "mc2-55-5",
          "q": "Según el texto, ¿qué representa para un participante pertenecer a un comité?",
          "options": [
            "Una obligación rotativa entre todas las áreas",
            "Un reconocimiento a sus aptitudes",
            "Una tarea temporal de muy corta duración",
            "Un claro descenso en la jerarquía formal"
          ],
          "correctIndex": 1,
          "explain": "El texto lo dice claro: integrar un comité es un reconocimiento a las aptitudes y la experiencia del participante."
        }
      ],
      "ms": [
        {
          "id": "ms2-55-1",
          "q": "¿Qué rasgos corresponden al equipo de trabajo (y no al grupo)?",
          "options": [
            "Habilidades complementarias entre miembros",
            "Meta colectiva de rendimiento",
            "Responsabilidad mutua entre integrantes",
            "Liderazgo a menudo compartido",
            "Rendimiento igual a la suma individual"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras son del equipo. La última (rendimiento como suma) es del grupo, donde no hay sinergia."
        },
        {
          "id": "ms2-55-2",
          "q": "Sobre los tipos de equipos formales, ¿qué afirmaciones son correctas?",
          "options": [
            "Los work groups son permanentes y unifuncionales",
            "Las task force son temporales y multifuncionales",
            "Los comités se orientan al gobierno y asesoramiento",
            "Las task force figuran en el organigrama",
            "Los work groups operan una función específica continua"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Solo es falsa la cuarta: las task force NO figuran en el organigrama. Las demás describen bien a cada tipo de equipo formal."
        },
        {
          "id": "ms2-55-3",
          "q": "¿Cuáles de estas opciones describen al grupo de trabajo según el texto?",
          "options": [
            "La sinergia 1 + 1 = 3 entre los miembros",
            "El propósito común con metas compartidas",
            "La responsabilidad mutua por el resultado",
            "El liderazgo compartido entre integrantes",
            "Las habilidades complementarias del conjunto"
          ],
          "correctIndexes": [],
          "explain": "Ninguna describe al grupo: las cinco son rasgos del equipo. El grupo tiene metas individuales, responsabilidad individual y liderazgo único y fuerte."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-55-1",
        "front": "Grupo de trabajo (concepto)",
        "back": "Conjunto cuyos miembros interactúan para compartir información y decisiones que ayuden a cada uno a desempeñar mejor su labor individual. Rendimiento = suma de esfuerzos individuales. Metas y responsabilidad individuales, liderazgo único y fuerte."
      },
      {
        "id": "fc2-55-2",
        "front": "Equipo de trabajo (concepto)",
        "back": "Personas con habilidades complementarias, comprometidas con un propósito común y metas por las que se sienten mutuamente responsables. Clave: la sinergia, donde el esfuerzo colectivo rinde más que la suma. Meta colectiva, liderazgo a menudo compartido."
      },
      {
        "id": "fc2-55-3",
        "front": "Sinergia (1 + 1 = 3)",
        "back": "Propiedad del equipo: el esfuerzo colectivo genera un resultado mayor que la suma de los aportes individuales gracias a las habilidades complementarias y la meta común."
      },
      {
        "id": "fc2-55-4",
        "front": "Grupos de trabajo (work groups)",
        "back": "Un gerente y los empleados que le reportan directamente; forman una unidad del organigrama. Propósito: operar una función específica y continua. Duración permanente, composición unifuncional. Ej.: Departamento de Contabilidad."
      },
      {
        "id": "fc2-55-5",
        "front": "Task force (fuerzas de tarea)",
        "back": "Equipos para un proyecto de alcance temporal, para resolver un problema específico. Temporales (se disuelven al cumplir su misión), multifuncionales, no figuran en el organigrama. Ej.: equipo para el lanzamiento de un producto."
      },
      {
        "id": "fc2-55-6",
        "front": "Comités",
        "back": "Equipos formales de gobierno, supervisión y asesoramiento sobre asuntos estratégicos, operativos o legales. Permanentes o temporales (suelen ser de largo plazo), multifuncionales, integrados por gerencia media y alta. Ej.: Comité de Ética o de Presupuesto."
      },
      {
        "id": "fc2-55-7",
        "front": "¿Qué representa pertenecer a un comité?",
        "back": "Un reconocimiento a las aptitudes y la experiencia del participante. Aunque no figuren en el organigrama, los comités son importantes para la discusión y la toma de decisiones."
      }
    ]
  }
};
