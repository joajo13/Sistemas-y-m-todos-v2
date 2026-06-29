/**
 * Banco NUEVO (anti-spoiler) — computacion-aplicada
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
          "q": "Un filesystem actúa como un puente entre los datos físicos y el sistema operativo, permitiendo leer, escribir, modificar y eliminar archivos.",
          "a": true,
          "explain": "Tal cual lo define el texto: el filesystem organiza cómo se almacenan y acceden los datos, y media entre el disco físico y el SO para todas esas operaciones."
        },
        {
          "id": "tf2-1-2",
          "q": "NTFS es un filesystem nativo de Linux que ofrece mejor rendimiento que ext4 o XFS en ese sistema.",
          "a": false,
          "explain": "Al revés: NTFS sirve para la interoperabilidad con Windows y justamente tiene rendimiento menor en Linux comparado con los FS nativos como ext4 o XFS."
        },
        {
          "id": "tf2-1-3",
          "q": "Btrfs ofrece snapshots y compresión, lo que lo hace ideal para copias de seguridad y versiones.",
          "a": true,
          "explain": "Esa es la ventaja que destaca la tabla para Btrfs: snapshots y compresión, pensado para backups y versionado, aunque todavía está en fase de optimización."
        },
        {
          "id": "tf2-1-4",
          "q": "XFS se caracteriza por su alta eficiencia y escalabilidad con archivos grandes y grandes volúmenes.",
          "a": true,
          "explain": "Sí: la ventaja de XFS según el cuadro es escalar muy bien y rendir con archivos enormes; su contra es que redimensionarlo es más complejo."
        },
        {
          "id": "tf2-1-5",
          "q": "Los cuatro filesystems comparados en la sección (ext4, XFS, Btrfs, NTFS) comparten la característica de ser journalizados.",
          "a": true,
          "explain": "El criollo lo aclara: los cuatro de la tabla figuran como journalizados, y ese tema se desarrolla aparte en la sección siguiente."
        }
      ],
      "mc": [
        {
          "id": "mc2-1-1",
          "q": "¿Qué es un filesystem según el texto?",
          "options": [
            "Una estructura que organiza cómo se almacenan y acceden los datos del disco",
            "Un programa que comprime los archivos para ocupar mucho menos espacio en el disco",
            "Un controlador físico que conecta el disco con la placa madre del equipo de escritorio",
            "Una aplicación que respalda y sincroniza los archivos del usuario en la nube remota"
          ],
          "correctIndex": 0,
          "explain": "El texto lo define como una estructura que organiza el almacenamiento y acceso a los datos, haciendo de puente entre los datos físicos y el SO. Las otras son cosas distintas."
        },
        {
          "id": "mc2-1-2",
          "q": "¿Cuál es la desventaja que el cuadro asigna a ext4?",
          "options": [
            "Tiene operaciones de redimensionado bastante más complejas de aplicar",
            "No es compatible con Windows sin software adicional",
            "Su rendimiento es menor en Linux que en los demás sistemas operativos",
            "Todavía se encuentra en una fase de optimización bastante constante"
          ],
          "correctIndex": 1,
          "explain": "La contra de ext4 según la tabla es no ser compatible con Windows sin software extra. El redimensionado complejo es de XFS, la fase de optimización es de Btrfs."
        },
        {
          "id": "mc2-1-3",
          "q": "¿Qué filesystem prioriza la interoperabilidad entre Linux y Windows?",
          "options": [
            "Btrfs por sus snapshots y la compresión integrada",
            "XFS por su escalabilidad con archivos muy grandes",
            "NTFS por su compatibilidad con Windows",
            "ext4 por ser rápido, confiable y journalizado"
          ],
          "correctIndex": 2,
          "explain": "NTFS es el que aporta interoperabilidad Linux-Windows; esa es su ventaja en el cuadro. Los demás apuntan a otras virtudes."
        },
        {
          "id": "mc2-1-4",
          "q": "Según la tabla, ¿qué desventaja tiene Btrfs?",
          "options": [
            "No resulta compatible con Windows sin agregar software",
            "Su rendimiento baja bastante cuando corre sobre Linux",
            "Sus operaciones de redimensionado son más complejas",
            "Aún se encuentra en fase de optimización del sistema"
          ],
          "correctIndex": 3,
          "explain": "La contra de Btrfs es estar todavía en fase de optimización. Las otras pertenecen a ext4, NTFS y XFS respectivamente."
        }
      ],
      "ms": [
        {
          "id": "ms2-1-1",
          "q": "¿Cuáles de los siguientes filesystems aparecen mencionados en la sección como tipos más usados?",
          "options": [
            "ext4",
            "XFS",
            "Btrfs",
            "NTFS",
            "FAT32"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "La sección lista ext4, XFS, Btrfs y NTFS como los más usados. FAT32 no aparece nombrado en el texto, así que queda afuera."
        },
        {
          "id": "ms2-1-2",
          "q": "Según el cuadro comparativo, ¿cuáles de estas afirmaciones sobre las ventajas son correctas?",
          "options": [
            "ext4 se destaca por ser muy rápido y a la vez confiable",
            "XFS sobresale por escalabilidad en grandes volúmenes",
            "Btrfs es ideal para copias de seguridad y versiones",
            "NTFS aporta interoperabilidad entre Linux y Windows",
            "FAT32 ofrece journaling completo de datos y de los metadatos"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras coinciden con las ventajas de la tabla. FAT32 ni siquiera figura en la sección, así que esa afirmación es inventada."
        },
        {
          "id": "ms2-1-3",
          "q": "¿Cuáles de estas características corresponden exclusivamente al filesystem ZFS según la sección?",
          "options": [
            "Deduplicación de bloques en tiempo real",
            "Pools de almacenamiento dinámicos integrados",
            "Verificación de integridad mediante checksums",
            "Cifrado nativo de datos en reposo",
            "Autorreparación silenciosa de errores"
          ],
          "correctIndexes": [],
          "explain": "Ojo con esta: ZFS no se menciona en ningún lado de la sección. Ninguna de estas características está en el texto, así que la respuesta correcta es que no hay ninguna correcta."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-1-1",
        "front": "¿Qué es un filesystem?",
        "back": "Una estructura que organiza cómo se almacenan y acceden los datos en un disco o dispositivo, actuando como puente entre los datos físicos y el sistema operativo."
      },
      {
        "id": "fc2-1-2",
        "front": "Operaciones que permite un filesystem",
        "back": "Leer, escribir, modificar y eliminar archivos."
      },
      {
        "id": "fc2-1-3",
        "front": "ext4: ventajas y desventaja",
        "back": "Ventajas: rápido y confiable (journalizado, soporta archivos grandes). Desventaja: no es compatible con Windows sin software adicional."
      },
      {
        "id": "fc2-1-4",
        "front": "XFS: para qué se destaca",
        "back": "Journalizado y eficiente con archivos grandes; escala muy bien en grandes volúmenes. Su contra es el redimensionado más complejo."
      },
      {
        "id": "fc2-1-5",
        "front": "Btrfs: rasgo distintivo",
        "back": "Journalizado con snapshots y compresión; ideal para copias de seguridad y versiones. Todavía en fase de optimización."
      },
      {
        "id": "fc2-1-6",
        "front": "NTFS: para qué sirve",
        "back": "Compatibilidad con Windows e interoperabilidad Linux-Windows. Soporta archivos grandes, pero rinde menos en Linux que los FS nativos."
      },
      {
        "id": "fc2-1-7",
        "front": "¿Qué tienen en común ext4, XFS, Btrfs y NTFS?",
        "back": "Los cuatro son filesystems journalizados, característica que les da fiabilidad."
      }
    ]
  },
  "2": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-2-1",
          "q": "Un filesystem journalizado registra cada cambio en un área especial llamada journal antes de aplicarlo al sistema de archivos principal.",
          "a": true,
          "explain": "Esa es la esencia del journaling: primero anota la operación en el diario y recién después la aplica al filesystem principal."
        },
        {
          "id": "tf2-2-2",
          "q": "El journaling busca reducir el tiempo de recuperación frente a fallos como un corte de energía.",
          "a": true,
          "explain": "Sí, su finalidad es proteger la integridad de los datos y achicar el tiempo de recuperación ante cortes o errores del sistema."
        },
        {
          "id": "tf2-2-3",
          "q": "El journaling de metadatos es más lento y consume más recursos que el journaling completo.",
          "a": false,
          "explain": "Es al revés: el journaling completo es el más lento y el que más recursos consume; el de metadatos es más rápido (aunque menos seguro para los datos en sí)."
        },
        {
          "id": "tf2-2-4",
          "q": "El journaling completo registra tanto los datos de las operaciones como la estructura de los metadatos.",
          "a": true,
          "explain": "Correcto: el completo anota datos y metadatos, y por eso es el más pesado y lento de los tres."
        },
        {
          "id": "tf2-2-5",
          "q": "El journaling de metadatos solo registra cambios en los metadatos, como la ubicación o el nombre de un archivo.",
          "a": true,
          "explain": "Tal cual: anota solo lo estructural (ubicación, nombre), por eso va más rápido pero protege menos los datos del archivo en sí."
        }
      ],
      "mc": [
        {
          "id": "mc2-2-1",
          "q": "¿Cuál es la finalidad principal del sistema de archivos journalizado?",
          "options": [
            "Aumentar la velocidad de lectura secuencial del disco físico",
            "Comprimir los archivos para ahorrar bastante espacio de almacenamiento",
            "Proteger la integridad de los datos y acelerar la recuperación",
            "Permitir la compatibilidad de discos entre Linux y Windows sin software"
          ],
          "correctIndex": 2,
          "explain": "El texto dice claramente que la finalidad es proteger la integridad de los datos y reducir el tiempo de recuperación ante un fallo. Las otras no son su objetivo."
        },
        {
          "id": "mc2-2-2",
          "q": "¿En qué orden trabaja el journal al realizar una operación?",
          "options": [
            "Primero registra la operación en el journal y después la aplica",
            "Primero aplica la operación al filesystem y luego la registra en el journal",
            "Aplica y registra la operación al mismo tiempo, totalmente en paralelo",
            "Solo registra la operación en el journal si antes la aplicó sin errores"
          ],
          "correctIndex": 0,
          "explain": "El procedimiento es: primero anotar en el journal, después aplicar al filesystem principal. Así, si falla a mitad, el diario indica qué quedó pendiente."
        },
        {
          "id": "mc2-2-3",
          "q": "¿Cuál de los tipos de journaling consume más recursos y es el más lento?",
          "options": [
            "El journaling de metadatos del sistema de archivos",
            "El journaling completo de datos y metadatos",
            "El journaling asíncrono priorizando velocidad",
            "El journaling sincrónico priorizando integridad"
          ],
          "correctIndex": 1,
          "explain": "El completo es el más lento y el que más recursos consume porque registra todo: datos y metadatos."
        },
        {
          "id": "mc2-2-4",
          "q": "¿Qué define el journaling asíncrono o sincrónico?",
          "options": [
            "Si se registran o no los metadatos del sistema de archivos local",
            "Cuántas copias del journal se mantienen activas en el disco",
            "El tamaño máximo que puede llegar a alcanzar el journal en disco",
            "Cómo se escriben los cambios priorizando integridad o velocidad"
          ],
          "correctIndex": 3,
          "explain": "Esta variante define cómo se escriben los cambios en el journal, eligiendo entre priorizar la integridad de datos o la velocidad de escritura."
        }
      ],
      "ms": [
        {
          "id": "ms2-2-1",
          "q": "¿Cuáles son los tipos de journaling que menciona la sección?",
          "options": [
            "Journaling completo",
            "Journaling de metadatos",
            "Journaling asíncrono o sincrónico",
            "Journaling diferencial por bloques",
            "Journaling incremental encadenado"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "La sección nombra tres: completo, de metadatos y asíncrono/sincrónico. \"Diferencial\" e \"incremental\" no aparecen en el texto."
        },
        {
          "id": "ms2-2-2",
          "q": "Según el texto, ¿qué afirmaciones sobre el journaling son correctas?",
          "options": [
            "La acción completa solo se concreta si el cambio se registró bien",
            "El journal reconstruye los cambios pendientes al reiniciar tras un fallo",
            "El journaling de metadatos es menos seguro para los datos de los archivos",
            "El journaling elimina por completo toda posibilidad de pérdida de datos del disco",
            "El journaling completo es el tipo más rápido y liviano de los tres"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras están en el texto. El journaling reduce el riesgo pero no garantiza cero pérdidas, y el completo es el más lento, no el más rápido."
        },
        {
          "id": "ms2-2-3",
          "q": "¿Qué información registra el journaling de metadatos según el texto?",
          "options": [
            "La ubicación de un archivo dentro del sistema",
            "El nombre del archivo afectado por la operación",
            "El contenido completo de cada archivo modificado",
            "Las firmas digitales criptográficas de cada archivo",
            "El historial de usuarios que accedieron al archivo"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "El de metadatos anota solo lo estructural: ubicación y nombre. No registra el contenido del archivo, ni firmas, ni historial de accesos."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-2-1",
        "front": "¿Qué es un filesystem journalizado?",
        "back": "Una tecnología que registra cada cambio en un área especial (el journal o diario) antes de aplicarlo al filesystem principal, para mejorar la integridad y fiabilidad de los datos."
      },
      {
        "id": "fc2-2-2",
        "front": "Finalidad del journaling",
        "back": "Proteger la integridad de los datos y reducir el tiempo de recuperación en caso de fallo (corte de energía, error del sistema)."
      },
      {
        "id": "fc2-2-3",
        "front": "¿Cómo trabaja el journal?",
        "back": "Primero registra la operación en el journal y recién después la aplica al filesystem principal. La acción se concreta solo si el cambio quedó registrado correctamente."
      },
      {
        "id": "fc2-2-4",
        "front": "¿Qué pasa ante un fallo o apagado inesperado?",
        "back": "Al reiniciar, el journal permite reconstruir los cambios pendientes y dejarlos en el estado correcto, minimizando el riesgo de archivos corruptos."
      },
      {
        "id": "fc2-2-5",
        "front": "Journaling completo",
        "back": "Registra tanto los datos de las operaciones como la estructura de los metadatos. Es el más seguro pero el que más recursos consume y el más lento."
      },
      {
        "id": "fc2-2-6",
        "front": "Journaling de metadatos",
        "back": "Solo registra cambios en los metadatos (ubicación, nombre del archivo). Es más rápido, aunque menos seguro para los datos de los archivos en sí."
      },
      {
        "id": "fc2-2-7",
        "front": "Journaling asíncrono o sincrónico",
        "back": "Define cómo se escriben los cambios en el journal, priorizando entre la integridad de los datos o la velocidad de escritura."
      },
      {
        "id": "fc2-2-8",
        "front": "¿De qué depende elegir un tipo de journaling?",
        "back": "Del compromiso entre rendimiento y resistencia a fallos que se necesite en cada caso."
      }
    ]
  },
  "3": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-3-1",
          "q": "El procedimiento para incorporar un disco en VirtualBox debe hacerse con la máquina virtual apagada.",
          "a": true,
          "explain": "Sí, el texto es claro: el procedimiento se sigue desde la interfaz con la máquina apagada, y recién al final se vuelve a encender."
        },
        {
          "id": "tf2-3-2",
          "q": "Al crear el disco en VirtualBox conviene dejar marcado el casillero \"pre-allocate Full Size\".",
          "a": false,
          "explain": "No: ese casillero debe quedar destildado. Si lo dejás marcado, el VDI ocupa el tamaño total desde el principio en vez de crecer a demanda."
        },
        {
          "id": "tf2-3-3",
          "q": "El tipo de extensión que se indica al crear el disco en el procedimiento es VDI.",
          "a": true,
          "explain": "Correcto: en las opciones del disco a crear se indica el tipo de extensión VDI antes de presionar Finish."
        },
        {
          "id": "tf2-3-4",
          "q": "Agregar el disco en VirtualBox ya deja el dispositivo listo para guardar datos apenas se enciende la VM.",
          "a": false,
          "explain": "Falso: al arrancar, el kernel ve el disco pero está vacío. Para usarlo todavía hay que inicializarlo, formatearlo y montarlo."
        },
        {
          "id": "tf2-3-5",
          "q": "La opción del menú de VirtualBox donde se agrega el disco es Storage (Almacenamiento), parándose sobre el Controller.",
          "a": true,
          "explain": "Tal cual: dentro de Settings vas a la sección Storage, te posicionás sobre Controller y agregás el nuevo disco."
        }
      ],
      "mc": [
        {
          "id": "mc2-3-1",
          "q": "¿En qué sección de Settings se agrega el disco nuevo dentro de VirtualBox?",
          "options": [
            "En la sección Network sobre el adaptador puente",
            "En la sección Storage sobre el Controller",
            "En la sección System sobre el orden de arranque",
            "En la sección Display sobre la memoria de video"
          ],
          "correctIndex": 1,
          "explain": "El disco se agrega en Storage (Almacenamiento), posicionándose sobre el Controller y haciendo clic en agregar nuevo disco."
        },
        {
          "id": "mc2-3-2",
          "q": "Tras elegir Create en el selector de disco, ¿qué datos se indican antes de presionar Finish?",
          "options": [
            "El path por defecto, el tamaño y el tipo de extensión VDI",
            "El nombre de la VM, la RAM asignada y el sistema invitado",
            "La dirección IP, el adaptador de red y el modo puente",
            "El punto de montaje, el filesystem y la etiqueta del disco"
          ],
          "correctIndex": 0,
          "explain": "En las opciones del disco a crear se indica el path por defecto, el tamaño y el tipo de extensión VDI, y recién ahí se presiona Finish."
        },
        {
          "id": "mc2-3-3",
          "q": "¿Qué efecto tiene dejar marcado \"pre-allocate Full Size\" al crear el VDI?",
          "options": [
            "Acelera la lectura secuencial de los archivos del disco",
            "Habilita snapshots automáticos cada vez que se apaga la VM",
            "Hace que el VDI ocupe el tamaño total desde el principio",
            "Convierte el disco en uno de solo lectura por seguridad"
          ],
          "correctIndex": 2,
          "explain": "Si lo dejás marcado, el VDI ocupa el tamaño total desde el arranque en lugar de crecer a demanda. Por eso conviene destildarlo."
        },
        {
          "id": "mc2-3-4",
          "q": "Después de agregar el disco y encender la VM, ¿qué hace falta para poder guardar datos?",
          "options": [
            "Reinstalar el sistema operativo invitado desde cero",
            "Marcar el casillero de pre-asignación de tamaño completo",
            "Cambiar el controlador de almacenamiento de la máquina",
            "Inicializarlo, formatearlo y montarlo en el sistema"
          ],
          "correctIndex": 3,
          "explain": "El kernel lo ve pero está vacío; para usarlo hay que inicializarlo, formatearlo y montarlo, tareas que se cubren en las secciones siguientes."
        }
      ],
      "ms": [
        {
          "id": "ms2-3-1",
          "q": "¿Cuáles de estos pasos forman parte del procedimiento descripto para incorporar el disco en VirtualBox?",
          "options": [
            "Seleccionar Settings con la máquina apagada",
            "Posicionarse sobre Controller en la sección Storage",
            "Elegir Create en el selector de disco",
            "Indicar el tipo de extensión VDI y presionar Finish",
            "Editar manualmente el archivo /etc/fstab del invitado"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Los cuatro primeros son pasos del procedimiento en VirtualBox. Editar /etc/fstab es una tarea posterior dentro del SO invitado, no parte de este procedimiento."
        },
        {
          "id": "ms2-3-2",
          "q": "Según el texto, ¿qué afirmaciones sobre incorporar el disco en VirtualBox son correctas?",
          "options": [
            "El procedimiento se hace con la máquina virtual apagada",
            "El casillero \"pre-allocate Full Size\" debe quedar destildado",
            "El disco se agrega a nivel del virtualizador VirtualBox",
            "Tras el procedimiento, el invitado lo ve como bloque",
            "El disco queda listo para guardar datos sin ningún paso adicional"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras están en el texto. La última es falsa: el disco se ve pero está vacío y todavía hay que inicializarlo, formatearlo y montarlo."
        },
        {
          "id": "ms2-3-3",
          "q": "¿Cuáles de estas opciones aparecen en el procedimiento al confirmar y crear el disco?",
          "options": [
            "Botón Choose (Seleccionar) parándose sobre el disco generado",
            "Confirmación final con OK para ver el disco agregado",
            "Botón Finish (Finalizar) tras indicar las opciones del disco",
            "Asistente que formatea el disco automáticamente con ext4 al crearlo",
            "Selección obligatoria del punto de montaje del disco dentro de /mnt"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Choose, OK y Finish aparecen en los pasos. No hay formateo automático ni selección de punto de montaje: eso es trabajo posterior dentro del SO."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-3-1",
        "front": "¿Con qué estado de la VM se incorpora un disco en VirtualBox?",
        "back": "Con la máquina virtual apagada; recién al final del procedimiento se la vuelve a encender."
      },
      {
        "id": "fc2-3-2",
        "front": "Ruta dentro de Settings para agregar el disco",
        "back": "Settings → sección Storage (Almacenamiento) → posicionarse sobre Controller → agregar nuevo disco."
      },
      {
        "id": "fc2-3-3",
        "front": "¿Qué se indica al crear el disco antes de Finish?",
        "back": "El path por defecto, el tamaño y el tipo de extensión VDI."
      },
      {
        "id": "fc2-3-4",
        "front": "Casillero \"pre-allocate Full Size\"",
        "back": "Debe quedar destildado. Si se deja marcado, el VDI ocupa el tamaño total desde el principio en vez de crecer a demanda."
      },
      {
        "id": "fc2-3-5",
        "front": "Pasos finales para confirmar el disco",
        "back": "Volver al Selector de Discos, parado sobre el disco nuevo presionar Choose (Seleccionar), y luego confirmar con OK. Encender la máquina."
      },
      {
        "id": "fc2-3-6",
        "front": "¿Qué falta tras encender la VM con el disco agregado?",
        "back": "El kernel lo ve pero está vacío. Para usarlo hay que inicializarlo, formatearlo y montarlo."
      },
      {
        "id": "fc2-3-7",
        "front": "¿Qué significa agregar el disco \"a nivel virtualizador\"?",
        "back": "Que se suma el disco desde VirtualBox; recién después el SO invitado lo reconoce como dispositivo de bloque."
      }
    ]
  },
  "4": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-4-1",
          "q": "El comando lsblk lista los dispositivos de bloque conectados al sistema, como discos, SSDs y particiones.",
          "a": true,
          "explain": "Sí, lsblk lista los dispositivos de bloque: discos, unidades SSD, particiones y otros dispositivos de almacenamiento."
        },
        {
          "id": "tf2-4-2",
          "q": "En la salida de lsblk, la columna RM con valor 1 indica que el dispositivo es removible.",
          "a": true,
          "explain": "Correcto: RM marca si es removible, donde 1 = removible y 0 = no removible."
        },
        {
          "id": "tf2-4-3",
          "q": "Dentro del menú de fdisk, se presiona la tecla p para crear una partición nueva.",
          "a": false,
          "explain": "No: n es para una partición nueva. La p indica que la partición es del tipo primaria (y también imprime el resumen al revisar)."
        },
        {
          "id": "tf2-4-4",
          "q": "En fdisk, para asignar un sector final de 10 GB en el ejemplo se escribe +10G.",
          "a": true,
          "explain": "Tal cual: conviene indicar el sector final en unidades, y en el ejemplo se asignan 10 GB escribiendo +10G."
        },
        {
          "id": "tf2-4-5",
          "q": "En fdisk, si no presionás w los cambios igual se guardan automáticamente al salir.",
          "a": false,
          "explain": "Falso: w (Write) es lo que guarda los cambios. Si te equivocás y no escribís con w, no pasó nada."
        }
      ],
      "mc": [
        {
          "id": "mc2-4-1",
          "q": "¿Para qué se utiliza el comando lsblk?",
          "options": [
            "Para listar los dispositivos de bloque y confirmar que el kernel reconoció el disco",
            "Para crear una partición primaria nueva sobre el disco que se indique en el comando",
            "Para dar formato al disco asignándole un determinado sistema de archivos",
            "Para montar el disco asociándolo a un directorio específico del sistema"
          ],
          "correctIndex": 0,
          "explain": "lsblk lista los dispositivos de bloque y sirve para confirmar que el kernel reconoció el disco. Crear partición, formatear y montar son otros comandos."
        },
        {
          "id": "mc2-4-2",
          "q": "¿Cuál es el orden correcto de los 4 pasos para disponibilizar un disco?",
          "options": [
            "Formatearlo, inicializarlo, agregarlo al fstab y montarlo",
            "Inicializarlo, formatearlo, montarlo y agregarlo al fstab",
            "Montarlo, formatearlo, inicializarlo y agregarlo al fstab",
            "Agregarlo al fstab, montarlo, formatearlo e inicializarlo"
          ],
          "correctIndex": 1,
          "explain": "La receta es: inicializar (fdisk), formatear (mkfs), montar (mount) y agregar al /etc/fstab para que persista al reiniciar."
        },
        {
          "id": "mc2-4-3",
          "q": "En el menú de fdisk, ¿qué se presiona para indicar que la partición es del tipo primaria?",
          "options": [
            "La tecla n del menú interactivo",
            "La tecla w del menú interactivo",
            "La tecla p del menú interactivo",
            "La tecla 1 del menú interactivo"
          ],
          "correctIndex": 2,
          "explain": "p indica partición primaria. n es nueva, 1 es el número de partición, y w guarda los cambios."
        },
        {
          "id": "mc2-4-4",
          "q": "¿De dónde proviene el prefijo sd* de los nombres de dispositivo como sda o sdb?",
          "options": [
            "De \"Solid Disk\", por las unidades modernas de estado sólido",
            "De \"Storage Device\", por el tipo genérico de almacenamiento masivo",
            "De \"System Disk\", por el disco principal de arranque del sistema",
            "De \"SCSI DISK\", aunque hoy se aplica a otros dispositivos"
          ],
          "correctIndex": 3,
          "explain": "El prefijo viene de \"SCSI DISK\", aunque hoy se usa también para otros dispositivos de almacenamiento. El asterisco es una letra asignada en orden (a, b, c...)."
        },
        {
          "id": "mc2-4-5",
          "q": "En fdisk, al indicar el sector inicial, ¿qué es lo normal hacer?",
          "options": [
            "Presionar Enter para tomar el valor por default de fdisk",
            "Escribir siempre el valor 0 para empezar desde el inicio físico del disco",
            "Indicar +10G para reservar diez gigabytes en los sectores iniciales",
            "Presionar w para que fdisk calcule el sector inicial automáticamente"
          ],
          "correctIndex": 0,
          "explain": "Lo normal es presionar Enter y tomar el default (por ejemplo 2048), porque fdisk ya conoce a partir de dónde hay disponibilidad."
        }
      ],
      "ms": [
        {
          "id": "ms2-4-1",
          "q": "¿Cuáles de estas columnas aparecen en la salida de lsblk según el texto?",
          "options": [
            "NAME (nombre del dispositivo)",
            "RM (si es removible)",
            "MOUNTPOINT (punto de montado)",
            "RO (si es de solo lectura)",
            "PERM (permisos del archivo en octal)"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "NAME, RM, MOUNTPOINT y RO están entre las columnas que lista el texto (junto con MAJ, SIZE, TYPE). \"PERM\" no aparece en ningún lado."
        },
        {
          "id": "ms2-4-2",
          "q": "En el menú interactivo de fdisk del ejemplo, ¿qué teclas se presionan para crear la partición?",
          "options": [
            "n para una partición nueva",
            "p para indicar tipo primaria",
            "1 para crear una sola partición",
            "w para guardar los cambios",
            "f para formatear con un filesystem"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "n, p, 1 y w son parte de la secuencia del ejemplo. No existe una tecla f para formatear en fdisk: eso lo hace mkfs en un paso posterior."
        },
        {
          "id": "ms2-4-3",
          "q": "Según el texto, ¿cuáles afirmaciones sobre fdisk y el particionado son correctas?",
          "options": [
            "Conviene indicar el sector final en unidades, por ejemplo +10G",
            "Presionando p dentro de fdisk se imprime un resumen del disco",
            "Se puede correr lsblk de nuevo para ver la nueva partición listada",
            "Si no se presiona la tecla w, los cambios no se guardan en disco",
            "fdisk monta automáticamente la partición recién creada dentro de /mnt"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las cuatro primeras están en el texto. fdisk no monta nada: solo particiona; el montaje es un paso aparte con mount."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-4-1",
        "front": "¿Qué hace el comando lsblk?",
        "back": "Lista los dispositivos de bloque conectados (discos, SSDs, particiones, removibles) y sirve para confirmar que el kernel reconoció el disco."
      },
      {
        "id": "fc2-4-2",
        "front": "Columna RM en lsblk",
        "back": "Indica si el dispositivo es removible: 1 = removible, 0 = no removible."
      },
      {
        "id": "fc2-4-3",
        "front": "Columna MOUNTPOINT en lsblk",
        "back": "El punto de montado: el directorio al que está asociado el dispositivo o partición."
      },
      {
        "id": "fc2-4-4",
        "front": "Los 4 pasos para disponibilizar un disco",
        "back": "1) Inicializarlo (fdisk), 2) Formatearlo (mkfs), 3) Montarlo (mount), 4) Agregarlo al /etc/fstab para que persista al reiniciar."
      },
      {
        "id": "fc2-4-5",
        "front": "Origen del prefijo sd* (sda, sdb...)",
        "back": "Viene de \"SCSI DISK\", aunque hoy se aplica a otros dispositivos. El asterisco es una letra asignada en orden (a, b, c...) según los dispositivos detectados."
      },
      {
        "id": "fc2-4-6",
        "front": "Secuencia de teclas en fdisk para crear la partición",
        "back": "n (nueva), p (primaria), 1 (número), Enter en el sector inicial, +10G en el final, y w (Write) para guardar."
      },
      {
        "id": "fc2-4-7",
        "front": "¿Cómo se confirma que la partición quedó creada?",
        "back": "Entrando de nuevo con fdisk y presionando p (imprime un resumen), o ejecutando lsblk para ver la nueva partición listada bajo el disco."
      },
      {
        "id": "fc2-4-8",
        "front": "¿Para qué sirve la tecla w en fdisk?",
        "back": "Para escribir (Write) y guardar los cambios. Si no la presionás, no se guarda nada: podés salir sin riesgo si te equivocaste."
      }
    ]
  },
  "5": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-5-1",
          "q": "El comando <code>mkfs</code> con la opción <code>-t</code> sirve para indicar el tipo de filesystem que se le da a la partición.",
          "a": true,
          "explain": "Tal cual: <code>mkfs -t ext4 /dev/sdd1</code> formatea la partición con el filesystem indicado por <code>-t</code>, en el ejemplo ext4. Sin filesystem la partición no puede recibir datos."
        },
        {
          "id": "tf2-5-2",
          "q": "Un montaje hecho con <code>mount</code> se mantiene activo automáticamente después de reiniciar la máquina aunque no toques <code>/etc/fstab</code>.",
          "a": false,
          "explain": "El montaje con <code>mount</code> dura hasta que reinicies la VM. Para que persista en cada arranque hay que dejar la línea anotada en <code>/etc/fstab</code>."
        },
        {
          "id": "tf2-5-3",
          "q": "En el campo <code>options</code> de fstab, <code>ro</code> y <code>rw</code> son excluyentes entre sí.",
          "a": true,
          "explain": "Sí: <code>ro</code> monta en solo lectura y <code>rw</code> en lectura y escritura, son opciones excluyentes, no las podés tener juntas."
        },
        {
          "id": "tf2-5-4",
          "q": "En el campo <code>pass-num</code> de fstab, el valor 0 hace que la partición se revise primero con fsck durante el arranque.",
          "a": false,
          "explain": "Al revés: <code>pass-num</code> indica el orden en que fsck revisará la partición, y si es 0 el dispositivo NO se revisa."
        },
        {
          "id": "tf2-5-5",
          "q": "El comando <code>df -h</code> muestra el uso de espacio en disco de cada partición en formato legible para humanos.",
          "a": true,
          "explain": "Correcto: <code>df</code> muestra el uso de espacio por partición, y el <code>-h</code> (human-readable) lo muestra en formato cómodo de leer y en qué partición está montado cada cosa."
        }
      ],
      "mc": [
        {
          "id": "mc2-5-1",
          "q": "¿Qué hace el comando <code>mkfs -t ext4 /dev/sdd1</code>?",
          "options": [
            "Monta la partición /dev/sdd1 en el directorio /VENTAS",
            "Crea un filesystem ext4 sobre la partición /dev/sdd1",
            "Agrega una línea de montaje permanente en /etc/fstab",
            "Muestra el espacio en disco usado por /dev/sdd1"
          ],
          "correctIndex": 1,
          "explain": "<code>mkfs -t ext4</code> le da formato a la partición creando el filesystem ext4 para que pueda recibir datos. Montar es con <code>mount</code> y persistir con fstab."
        },
        {
          "id": "mc2-5-2",
          "q": "¿Qué representa montar un disco en un directorio del sistema de archivos?",
          "options": [
            "Borrar el contenido previo del directorio raíz del sistema",
            "Crear una copia de respaldo del disco en otra partición libre",
            "Conectar el dispositivo a una ubicación para ver su contenido",
            "Definir el tipo de filesystem con que se formateó el disco"
          ],
          "correctIndex": 2,
          "explain": "Montar es enganchar el dispositivo de almacenamiento a una ubicación del árbol, así el contenido del disco queda accesible a través de ese directorio."
        },
        {
          "id": "mc2-5-3",
          "q": "En una línea de <code>/etc/fstab</code>, ¿qué indica la columna <code>mount point</code>?",
          "options": [
            "La carpeta donde se proyectan los datos del filesystem",
            "El identificador UUID único asignado al disco rígido entero",
            "El tipo de filesystem con que se formateó la partición dada",
            "El orden en que fsck revisará errores durante el arranque"
          ],
          "correctIndex": 0,
          "explain": "El <code>mount point</code> es la carpeta en la que se proyectan los datos del sistema de archivos; puede ser cualquier directorio."
        },
        {
          "id": "mc2-5-4",
          "q": "¿Cuál es la función del campo <code>type</code> en una línea de <code>/etc/fstab</code>?",
          "options": [
            "Definir los permisos con que mount accede al recurso montado",
            "Señalar el directorio del árbol donde se montará la partición",
            "Indicar el tipo de filesystem en que se formateó la partición",
            "Marcar el orden de backup que utiliza el comando dump al correr"
          ],
          "correctIndex": 2,
          "explain": "La columna <code>type</code> indica el tipo de filesystem en que se formateó la partición: ext2, ext3, ext4, xfs, etc."
        },
        {
          "id": "mc2-5-5",
          "q": "¿Qué efecto tiene la opción <code>noauto</code> en el campo <code>options</code> de fstab?",
          "options": [
            "Permite a los usuarios normales montar el filesystem solos",
            "Bloquea la ejecución de archivos binarios desde ese disco",
            "Ignora los bits de permisos especiales suid y sgid del disco",
            "Evita que el filesystem se monte automáticamente al inicio"
          ],
          "correctIndex": 3,
          "explain": "<code>noauto</code> evita que el sistema de archivos se monte automáticamente al inicio; tenés que montarlo a mano cuando lo necesites."
        }
      ],
      "ms": [
        {
          "id": "ms2-5-1",
          "q": "¿Cuáles de las siguientes son columnas válidas de una línea de <code>/etc/fstab</code>?",
          "options": [
            "filesystem (path o UUID del recurso)",
            "mount point (carpeta donde se proyectan los datos)",
            "type (tipo de filesystem de la partición)",
            "dump-freq (parámetro para backup con dump)",
            "pass-num (orden de revisión de fsck al inicio)"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las seis columnas de fstab son filesystem, mount point, type, options, dump-freq y pass-num. Las cinco que aparecen acá son todas válidas."
        },
        {
          "id": "ms2-5-2",
          "q": "Sobre los valores típicos del campo <code>options</code> en fstab, ¿cuáles afirmaciones son correctas?",
          "options": [
            "<code>defaults</code> usa las opciones predeterminadas para el montaje",
            "<code>user</code> permite a usuarios normales montar el filesystem",
            "<code>noexec</code> bloquea la ejecución de archivos binarios del disco",
            "<code>nosuid</code> ignora los bits de permisos especiales suid y sgid",
            "<code>ro</code> monta el filesystem en modo lectura y escritura plena"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son correctas. La de <code>ro</code> es falsa: <code>ro</code> monta en solo lectura, el que monta en lectura y escritura es <code>rw</code>."
        },
        {
          "id": "ms2-5-3",
          "q": "¿Cuáles de estas afirmaciones sobre los pasos para persistir un disco nuevo son correctas?",
          "options": [
            "El comando <code>mkfs</code> sirve para montar la partición en un directorio",
            "El comando <code>mount</code> deja anotada la línea en /etc/fstab solo",
            "El comando <code>umount</code> formatea la partición con un nuevo filesystem",
            "El archivo /etc/fstab solo admite discos locales, nunca montajes de red",
            "Editar /etc/fstab reemplaza la necesidad de crear la partición previa"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. <code>mkfs</code> formatea (no monta), <code>mount</code> monta (no escribe fstab), <code>umount</code> desmonta (no formatea), fstab sí admite montajes de red, y editar fstab no reemplaza la creación de la partición."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-5-1",
        "front": "¿Qué hace <code>mkfs</code>?",
        "back": "Crea un filesystem sobre una partición para que pueda recibir datos. La opción <code>-t</code> indica el tipo (por ejemplo ext4)."
      },
      {
        "id": "fc2-5-2",
        "front": "¿Qué significa montar un disco?",
        "back": "Conectar el dispositivo de almacenamiento a una ubicación dentro del sistema de archivos, permitiendo acceder a su contenido a través de ese directorio. Se hace con <code>mount</code>."
      },
      {
        "id": "fc2-5-3",
        "front": "¿Para qué sirve <code>df -h</code>?",
        "back": "Muestra el uso de espacio en disco por cada partición en formato legible (human-readable), incluyendo en qué partición está montado cada cosa."
      },
      {
        "id": "fc2-5-4",
        "front": "¿Para qué sirve <code>/etc/fstab</code>?",
        "back": "Configura la lista de discos y puntos de montaje del sistema. Los comandos mount y umount lo leen para determinar las opciones de montaje, y permite que las particiones se monten solas en cada arranque."
      },
      {
        "id": "fc2-5-5",
        "front": "Seis columnas de /etc/fstab",
        "back": "filesystem, mount point, type, options, dump-freq y pass-num."
      },
      {
        "id": "fc2-5-6",
        "front": "<code>ro</code> vs <code>rw</code> en fstab",
        "back": "Son opciones excluyentes: <code>ro</code> monta en solo lectura y <code>rw</code> en lectura y escritura."
      },
      {
        "id": "fc2-5-7",
        "front": "¿Qué indica <code>pass-num</code> en fstab?",
        "back": "El orden en que fsck revisará la partición buscando errores durante el inicio. Si es 0, el dispositivo no se revisa."
      },
      {
        "id": "fc2-5-8",
        "front": "¿Por qué se pierde el montaje al reiniciar?",
        "back": "El montaje hecho con <code>mount</code> dura hasta el reinicio. Para que persista hay que agregar la línea correspondiente al final de /etc/fstab."
      }
    ]
  },
  "6": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-6-1",
          "q": "Un hard link crea una referencia directa a los datos físicos de un archivo, identificados por un número de inodo único.",
          "a": true,
          "explain": "Exacto: el hard link apunta directo al dato físico, identificado por el inodo, no por el nombre del archivo."
        },
        {
          "id": "tf2-6-2",
          "q": "El inodo almacena el nombre del archivo junto con su propietario, permisos y tamaño.",
          "a": false,
          "explain": "El inodo guarda la metadata (propietario, permisos, tamaño, etc.) pero NO el nombre. El nombre se guarda aparte, como etiqueta, en la estructura de directorio."
        },
        {
          "id": "tf2-6-3",
          "q": "Si se elimina el archivo original, un hard link que apuntaba a él deja de funcionar inmediatamente.",
          "a": false,
          "explain": "El hard link sigue funcionando: los datos no se eliminan hasta que no quede ningún link apuntando al inodo."
        },
        {
          "id": "tf2-6-4",
          "q": "Un hard link puede apuntar a un directorio sin problema.",
          "a": false,
          "explain": "Una de las limitaciones del hard link es que no puede apuntar a directorios; solo a archivos dentro del mismo filesystem."
        },
        {
          "id": "tf2-6-5",
          "q": "Para crear un hard link se usa el comando <code>ln</code> indicando el archivo origen y el nombre del link.",
          "a": true,
          "explain": "Tal cual: <code>ln archivo.txt hl_archivo.txt</code> crea el hard link, y con <code>ls -li</code> vas a ver que ambos comparten el mismo inodo."
        }
      ],
      "mc": [
        {
          "id": "mc2-6-1",
          "q": "¿Qué es un inodo?",
          "options": [
            "Una etiqueta con el nombre del archivo guardada en el directorio",
            "Una estructura con la metadata esencial del archivo en el disco",
            "Un tipo de link que apunta al nombre de otro archivo",
            "Un comando que muestra los enlaces existentes de un archivo"
          ],
          "correctIndex": 1,
          "explain": "El inodo es una estructura de datos con la información esencial del archivo (propietario, permisos, tamaño, etc.), aunque no almacena su nombre."
        },
        {
          "id": "mc2-6-2",
          "q": "¿Qué comando muestra el número de inodo de los archivos?",
          "options": [
            "<code>ls -li</code>",
            "<code>df -h</code>",
            "<code>ln -s</code>",
            "<code>mkfs -t</code>"
          ],
          "correctIndex": 0,
          "explain": "Con <code>ls -li</code> aparece el número de inodo en la primera columna (en el ejemplo, 1970 para archivo.txt)."
        },
        {
          "id": "mc2-6-3",
          "q": "Tras crear un hard link de un archivo, ¿qué se observa con <code>ls -li</code>?",
          "options": [
            "El link tiene un inodo distinto al del archivo original",
            "El link aparece con una flecha -> apuntando al original",
            "El link y el original comparten el mismo número de inodo",
            "El link figura con una l como primer carácter de permisos"
          ],
          "correctIndex": 2,
          "explain": "El hard link y el archivo original comparten el mismo número de inodo (1970 en el ejemplo). La flecha y la l son cosas del soft link."
        },
        {
          "id": "mc2-6-4",
          "q": "Al crear un hard link, ¿qué pasa con el contador de links del archivo?",
          "options": [
            "Se reinicia a 0 porque se crea un archivo totalmente nuevo",
            "Aumenta de 1 a 2 reflejando el nuevo nombre asociado",
            "Se mantiene en 1 porque el inodo del archivo no cambia",
            "Desaparece de la salida del comando ls -li por completo"
          ],
          "correctIndex": 1,
          "explain": "El contador de links (la columna después de los permisos) pasa de 1 a 2, porque ahora hay dos nombres apuntando al mismo inodo."
        }
      ],
      "ms": [
        {
          "id": "ms2-6-1",
          "q": "¿Cuáles de estas limitaciones o comportamientos corresponden a los hard links?",
          "options": [
            "Solo referencian datos en el mismo filesystem que el archivo",
            "No pueden apuntar a directorios",
            "Si se borra el original, el link sigue funcionando",
            "Cada hard link es una copia exacta del archivo al que apunta",
            "Cualquier cambio en un nombre afecta al mismo archivo"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son ciertas: el hard link no cruza filesystems, no apunta a directorios, sobrevive al borrado del original mientras quede un link, es copia exacta del dato y cualquier cambio afecta al mismo archivo."
        },
        {
          "id": "ms2-6-2",
          "q": "Sobre la información que guarda el inodo, ¿cuáles afirmaciones son correctas?",
          "options": [
            "Contiene el propietario al que pertenece el archivo",
            "Contiene los permisos de acceso al archivo",
            "Contiene el tamaño en bytes del archivo",
            "Contiene el nombre con que se ve el archivo",
            "Tiene un número único por cada archivo del sistema"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "El inodo guarda propietario, permisos, tamaño y tiene un número único, pero NO el nombre del archivo, que se guarda aparte en el directorio."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-6-1",
        "front": "¿Qué es un link en Linux?",
        "back": "Un tipo de archivo especial que apunta o referencia a otro archivo del sistema, útil para administrar archivos sin duplicar contenido. Hay dos tipos: hard links y soft links."
      },
      {
        "id": "fc2-6-2",
        "front": "¿Qué es un hard link?",
        "back": "Un enlace que crea una referencia directa a los datos físicos de un archivo, identificados por un número único de inodo."
      },
      {
        "id": "fc2-6-3",
        "front": "¿Qué es un inodo?",
        "back": "Una estructura de datos con la información esencial del archivo (propietario, permisos, tamaño, etc.), que no almacena el nombre. Cada archivo tiene un número de inodo único."
      },
      {
        "id": "fc2-6-4",
        "front": "¿Dónde se guarda el nombre del archivo?",
        "back": "El nombre es una etiqueta almacenada en la estructura de directorio, separada del inodo. Por eso más de un nombre puede asociarse al mismo archivo."
      },
      {
        "id": "fc2-6-5",
        "front": "Tres limitaciones del hard link",
        "back": "Solo referencia datos del mismo filesystem, no puede apuntar a directorios, y el archivo sobrevive mientras quede al menos un link apuntando al inodo."
      },
      {
        "id": "fc2-6-6",
        "front": "¿Cómo se crea un hard link?",
        "back": "Con <code>ln \"archivo origen\" \"nombre del link\"</code>. Ejemplo: <code>ln archivo.txt hl_archivo.txt</code>."
      },
      {
        "id": "fc2-6-7",
        "front": "¿Cómo verifico que dos nombres son hard links del mismo archivo?",
        "back": "Con <code>ls -li</code>: ambos muestran el mismo número de inodo en la primera columna."
      },
      {
        "id": "fc2-6-8",
        "front": "¿Qué pasa con el contador de links al crear un hard link?",
        "back": "Pasa de 1 a 2 (la columna después de los permisos), reflejando que hay dos nombres apuntando al mismo inodo."
      }
    ]
  },
  "7": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-7-1",
          "q": "Un soft link apunta al nombre del archivo, a diferencia del hard link que apunta al inodo.",
          "a": true,
          "explain": "Correcto: el soft link es como un acceso directo, apunta al nombre del archivo; el hard link apunta directo al inodo."
        },
        {
          "id": "tf2-7-2",
          "q": "Si se elimina el archivo original, el soft link sigue funcionando sin problema.",
          "a": false,
          "explain": "No: si se borra el original, el soft link pierde su referencia y queda huérfano (roto). El que sobrevive al borrado del original es el hard link."
        },
        {
          "id": "tf2-7-3",
          "q": "Los soft links pueden apuntar a directorios y fuera del filesystem.",
          "a": true,
          "explain": "Esas son justamente las dos ventajas del soft link: puede apuntar a directorios y cruzar filesystems, cosas que el hard link no puede."
        },
        {
          "id": "tf2-7-4",
          "q": "En la salida de <code>ls -l</code>, un soft link se identifica con la letra <code>d</code> como primer carácter.",
          "a": false,
          "explain": "El soft link se identifica con la <code>l</code> (link) como primer carácter, más una flecha -> hacia el archivo físico. La <code>d</code> sería un directorio."
        },
        {
          "id": "tf2-7-5",
          "q": "Al comparar con <code>ls -li</code>, el soft link y el archivo original tienen el mismo número de inodo.",
          "a": false,
          "explain": "El soft link tiene un inodo DISTINTO al original (1931 vs 1970 en el ejemplo). El que comparte inodo con el original es el hard link."
        }
      ],
      "mc": [
        {
          "id": "mc2-7-1",
          "q": "¿A qué se compara habitualmente un soft link?",
          "options": [
            "A un acceso directo, como el de Windows",
            "A una copia exacta del dato físico",
            "A una partición montada en un directorio",
            "A un inodo compartido entre dos archivos"
          ],
          "correctIndex": 0,
          "explain": "El soft link (o link simbólico) se asemeja a un acceso directo: en lugar de apuntar al inodo, apunta al nombre del archivo."
        },
        {
          "id": "mc2-7-2",
          "q": "¿Con qué comando y opción se crea un soft link?",
          "options": [
            "<code>ls -li</code> seguido del archivo origen",
            "<code>ln -s</code> seguido de origen y nombre",
            "<code>mount -s</code> seguido del recurso de red",
            "<code>ln</code> sin ninguna opción adicional"
          ],
          "correctIndex": 1,
          "explain": "El soft link se crea con <code>ln -s \"archivo al que apunto\" \"nombre del soft link\"</code>. La opción <code>-s</code> es la que lo hace simbólico."
        },
        {
          "id": "mc2-7-3",
          "q": "Según la tabla comparativa, ¿en qué se diferencian hard y soft links respecto al inodo?",
          "options": [
            "Ambos comparten el inodo con el archivo original",
            "Ninguno comparte inodo con el archivo original",
            "El hard comparte inodo y el soft no lo comparte",
            "El soft comparte inodo y el hard no lo comparte"
          ],
          "correctIndex": 2,
          "explain": "El hard link comparte el inodo con el original (sí), mientras que el soft link no lo comparte (no): tiene su propio inodo."
        },
        {
          "id": "mc2-7-4",
          "q": "Según la regla rápida del resumen, ¿cuándo conviene usar un soft link?",
          "options": [
            "Cuando el enlace tiene que sobrevivir al borrado del original",
            "Cuando necesitás cruzar filesystems o apuntar a un directorio",
            "Cuando todo está en el mismo filesystem y es solo un archivo",
            "Cuando querés que comparta el mismo inodo con el original"
          ],
          "correctIndex": 1,
          "explain": "La regla dice: si tenés que cruzar filesystems o apuntar a un directorio, usá soft link. Para sobrevivir al borrado en el mismo filesystem, hard link."
        }
      ],
      "ms": [
        {
          "id": "ms2-7-1",
          "q": "Según la tabla comparativa, ¿cuáles características corresponden al enlace simbólico (soft)?",
          "options": [
            "No comparte inodo con el original",
            "Puede apuntar a directorios",
            "Tiene soporte entre sistemas de archivos",
            "Resiste el movimiento del archivo original sin romperse",
            "Al eliminar el original, el enlace se rompe"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "El soft no comparte inodo, sí puede apuntar a directorios, sí cruza filesystems y se rompe al borrar el original. La que es falsa es la de resistir el movimiento: el soft puede romperse al moverse el original."
        },
        {
          "id": "ms2-7-2",
          "q": "¿Cuáles de estas afirmaciones sobre los soft links son correctas?",
          "options": [
            "Si se elimina el soft link, el archivo original sigue existiendo",
            "Una modificación en el soft link afecta al archivo en el filesystem",
            "El soft link se identifica con una <code>l</code> en <code>ls -l</code>",
            "Muestra una flecha -> hacia el archivo físico al que apunta",
            "Comparte el mismo número de inodo que el archivo original referido"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son ciertas. La última es falsa: el soft link tiene un inodo distinto al del original; el que comparte inodo es el hard link."
        },
        {
          "id": "ms2-7-3",
          "q": "¿Cuáles de estas afirmaciones sobre los hard links son falsas (es decir, NO los describen)?",
          "options": [
            "Pueden apuntar a directorios",
            "Tienen soporte entre sistemas de archivos diferentes",
            "No comparten inodo con el archivo original",
            "Se rompen si se elimina el archivo original",
            "Quedan huérfanos al mover el archivo original"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son falsas para el hard link: el hard NO apunta a directorios, NO cruza filesystems, SÍ comparte inodo, NO se rompe al borrar el original y resiste el movimiento. Todas describen al soft, no al hard."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-7-1",
        "front": "¿Qué es un soft link?",
        "back": "Un link simbólico parecido a un acceso directo: en lugar de apuntar al inodo como el hard link, apunta al nombre del archivo."
      },
      {
        "id": "fc2-7-2",
        "front": "¿Qué pasa con un soft link si se borra el original?",
        "back": "Pierde su referencia y queda huérfano (roto). Si en cambio se borra el soft link, el archivo original sigue existiendo."
      },
      {
        "id": "fc2-7-3",
        "front": "Dos ventajas del soft link sobre el hard link",
        "back": "Puede apuntar fuera del filesystem (cruzar filesystems) y puede apuntar a directorios."
      },
      {
        "id": "fc2-7-4",
        "front": "¿Cómo se crea un soft link?",
        "back": "Con <code>ln -s \"archivo al que apunto\" \"nombre del soft link\"</code>. La opción <code>-s</code> lo hace simbólico."
      },
      {
        "id": "fc2-7-5",
        "front": "¿Cómo se identifica un soft link en <code>ls -l</code>?",
        "back": "Por el primer carácter, que pasa a ser <code>l</code> (link), y por la flecha -> que muestra hacia qué archivo físico apunta."
      },
      {
        "id": "fc2-7-6",
        "front": "¿Comparten inodo el soft link y el original?",
        "back": "No: el soft link tiene un inodo distinto (1931 vs 1970 en el ejemplo). El hard link sí comparte inodo con el original."
      },
      {
        "id": "fc2-7-7",
        "front": "Hard vs soft: ¿cuál resiste el movimiento del original?",
        "back": "El hard link resiste el movimiento (sí). El soft link puede romperse al moverse el original (no)."
      },
      {
        "id": "fc2-7-8",
        "front": "Regla rápida hard vs soft",
        "back": "Cruzar filesystems o apuntar a directorio -> soft link. Sobrevivir al borrado del original con todo en el mismo filesystem -> hard link."
      }
    ]
  },
  "8": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-8-1",
          "q": "El gestor de arranque se ejecuta inmediatamente después de que la BIOS o UEFI inicializa el hardware, y al terminar transfiere el control al kernel.",
          "a": true,
          "explain": "Exacto: el gestor de arranque corre justo después de la BIOS/UEFI, permite elegir el SO y al terminar le pasa la posta al kernel."
        },
        {
          "id": "tf2-8-2",
          "q": "LILO contaba con interfaz gráfica y permitía cambiar su configuración sin reinstalarlo.",
          "a": false,
          "explain": "Falso: LILO no tenía interfaz gráfica y cualquier cambio en su configuración requería reinstalarlo, lo que lo hacía poco flexible. Su ventaja era ser ligero y rápido."
        },
        {
          "id": "tf2-8-3",
          "q": "El MBR tiene un tamaño de 512 bytes y es la primera sección del disco, también conocida como sector 0.",
          "a": true,
          "explain": "Correcto: el MBR (Master Boot Record) es el sector 0 del disco, mide 512 bytes y es crucial en el arranque."
        },
        {
          "id": "tf2-8-4",
          "q": "El MBR soporta discos de cualquier tamaño y un máximo de 4 particiones primarias.",
          "a": false,
          "explain": "El MBR solo admite discos de hasta 2 TB por usar direcciones de 32 bits. Lo de las 4 particiones primarias sí es cierto, pero el tamaño está mal."
        },
        {
          "id": "tf2-8-5",
          "q": "El comando <code>update-grub</code> genera el archivo grub.cfg basándose en los cambios de /etc/default/grub y /etc/grub.d/.",
          "a": true,
          "explain": "Tal cual: <code>update-grub</code> regenera grub.cfg tomando los cambios hechos en /etc/default/grub y en los scripts de /etc/grub.d/."
        }
      ],
      "mc": [
        {
          "id": "mc2-8-1",
          "q": "¿Cuál es la función principal de un gestor de arranque?",
          "options": [
            "Inicializar el hardware antes que la BIOS o UEFI",
            "Permitir seleccionar entre distintos sistemas operativos",
            "Formatear las particiones del disco al iniciar el equipo",
            "Generar el archivo de configuración grub.cfg automáticamente"
          ],
          "correctIndex": 1,
          "explain": "Su función principal es permitir elegir entre distintos sistemas operativos o configuraciones de arranque, y luego transferir el control al kernel."
        },
        {
          "id": "mc2-8-2",
          "q": "Dentro de los 512 bytes del MBR, ¿cuántos bytes ocupa el código del gestor de arranque?",
          "options": [
            "64 bytes para el código del gestor de arranque",
            "446 bytes para el código del gestor",
            "512 bytes para el código del gestor entero",
            "2 bytes para el código del gestor de booteo"
          ],
          "correctIndex": 1,
          "explain": "El código del gestor de arranque ocupa 446 bytes. Los otros: 64 bytes para la tabla de particiones y 2 bytes para la firma de arrancable."
        },
        {
          "id": "mc2-8-3",
          "q": "¿Dónde vive la Etapa 1.5 de GRUB?",
          "options": [
            "En los primeros 446 bytes reservados del MBR",
            "En el filesystem de la partición montada /boot/grub",
            "En el espacio entre el MBR y la primera partición",
            "En la tabla de particiones de 64 bytes del MBR"
          ],
          "correctIndex": 2,
          "explain": "La Etapa 1.5 se ubica en el espacio libre entre el MBR y el inicio de la primera partición, y guarda los controladores para reconocer sistemas de archivos."
        },
        {
          "id": "mc2-8-4",
          "q": "¿Para qué sirve el archivo <code>/etc/default/grub</code>?",
          "options": [
            "Es la configuración principal editable por el usuario",
            "Lista los sistemas operativos disponibles al arrancar",
            "Contiene los scripts que arman grub.cfg por bloques",
            "Guarda los controladores de los sistemas de archivos"
          ],
          "correctIndex": 0,
          "explain": "<code>/etc/default/grub</code> es la configuración principal editable por el usuario. El que lista los SO es grub.cfg, y los scripts están en /etc/grub.d/."
        },
        {
          "id": "mc2-8-5",
          "q": "¿Qué comando se usa para recuperar el GRUB cuando falla, instalándolo en el MBR?",
          "options": [
            "<code>update-grub</code> en consola",
            "<code>grub-install</code>",
            "<code>mkfs -t ext4</code>",
            "<code>mount /dev/sda</code>"
          ],
          "correctIndex": 1,
          "explain": "<code>grub-install</code> instala GRUB en el MBR o en la partición deseada; es el comando para recuperar el GRUB cuando falla."
        }
      ],
      "ms": [
        {
          "id": "ms2-8-1",
          "q": "¿Cuáles de estas son características de GRUB II?",
          "options": [
            "Soporta ext2, ext3, ext4, btrfs, xfs y zfs",
            "Es compatible con tablas de particiones GPT",
            "Permite discos mayores a 2 TB",
            "Permite arranque desde discos encriptados, LVM y RAID",
            "Admite configuración dinámica sin reiniciar"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son características de GRUB II: amplia variedad de filesystems, compatibilidad GPT, discos mayores a 2 TB, arranque desde encriptados/LVM/RAID y configuración dinámica."
        },
        {
          "id": "ms2-8-2",
          "q": "Sobre las características del MBR, ¿cuáles afirmaciones son correctas?",
          "options": [
            "Solo admite discos de hasta 2 TB por direcciones de 32 bits",
            "Soporta un máximo de 4 particiones primarias",
            "Está siendo reemplazado por GPT en sistemas modernos",
            "Si se corrompe, GRUB deja de funcionar y el sistema no arranca",
            "Puede reinstalarse con boot-repair para volver a arrancar"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son correctas: límite de 2 TB, máximo 4 particiones primarias, reemplazo por GPT, falla total si se corrompe, y recuperación con boot-repair."
        },
        {
          "id": "ms2-8-3",
          "q": "¿Cuáles de estas afirmaciones sobre LILO y GRUB son falsas?",
          "options": [
            "LILO tenía un menú interactivo más dinámico que GRUB",
            "GRUB requiere reinstalarse ante cualquier cambio de config",
            "LILO soporta tablas de particiones GPT y discos cifrados",
            "GRUB fue el primer gestor de arranque de Linux, antes que LILO",
            "GRUB es incompatible con múltiples sistemas operativos"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Las cinco son falsas. El menú interactivo y dinámico es de GRUB (no LILO), el que se reinstalaba ante cambios era LILO, GPT y cifrado son de GRUB II, LILO fue anterior a GRUB, y GRUB sí es compatible con múltiples SO."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-8-1",
        "front": "¿Qué es un gestor de arranque?",
        "back": "Software que corre justo después de que la BIOS/UEFI inicializa el hardware. Permite seleccionar entre distintos sistemas operativos y luego transfiere el control al kernel."
      },
      {
        "id": "fc2-8-2",
        "front": "¿Cuáles son los principales gestores de arranque en Linux?",
        "back": "LILO (Linux Loader, el más viejo) y GRUB (Grand Unified Bootloader, el que se usa hoy)."
      },
      {
        "id": "fc2-8-3",
        "front": "Características de LILO",
        "back": "Confiable pero limitado: sin interfaz gráfica y había que reinstalarlo ante cualquier cambio de config. Su ventaja era ser ligero y rápido."
      },
      {
        "id": "fc2-8-4",
        "front": "¿Qué es el MBR y cuánto mide?",
        "back": "El Master Boot Record es la primera sección del disco (sector 0), mide 512 bytes y es crucial en el proceso de arranque."
      },
      {
        "id": "fc2-8-5",
        "front": "Distribución de los 512 bytes del MBR",
        "back": "446 bytes para el código del gestor de arranque, 64 bytes para la tabla de particiones y 2 bytes para la firma que indica que el disco es arrancable."
      },
      {
        "id": "fc2-8-6",
        "front": "Las tres etapas de GRUB sobre el MBR",
        "back": "Etapa 1 en los primeros 446 bytes del MBR; Etapa 1.5 en el espacio entre el MBR y la primera partición (controladores de filesystems); Etapa 2 en el filesystem (config y menú, en /boot/grub)."
      },
      {
        "id": "fc2-8-7",
        "front": "Archivos importantes de GRUB 2",
        "back": "/etc/default/grub (config editable por el usuario), /boot/grub/grub.cfg (lista los SO, reemplaza al viejo menu.lst) y /etc/grub.d/ (scripts que arman grub.cfg)."
      },
      {
        "id": "fc2-8-8",
        "front": "<code>update-grub</code> vs <code>grub-install</code>",
        "back": "<code>update-grub</code> genera grub.cfg según los cambios en /etc/default/grub y /etc/grub.d/. <code>grub-install</code> instala GRUB en el MBR o partición y sirve para recuperarlo cuando falla."
      }
    ]
  },
  "9": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-9-1",
          "q": "El POST es un diagnóstico del hardware que ejecuta el firmware de la BIOS o de UEFI al encender la máquina.",
          "a": true,
          "explain": "Tal cual: POST significa Power-On Self-Test y lo corre el firmware apenas apretás el botón. Si el chequeo del hardware pasa, recién ahí la BIOS llama al disco de arranque."
        },
        {
          "id": "tf2-9-2",
          "q": "El kernel es el primer proceso que se lanza en el booteo, antes de que GRUB cargue su imagen.",
          "a": false,
          "explain": "Al revés: primero GRUB carga la imagen del kernel y el initramfs, y después el kernel toma el control y lanza Init. El kernel no corre antes que el gestor de arranque."
        },
        {
          "id": "tf2-9-3",
          "q": "El initramfs es un sistema de archivos temporal que se monta durante la carga del kernel.",
          "a": true,
          "explain": "Cuando GRUB carga el kernel, este detecta dispositivos y monta el initramfs, un FS temporal, antes de pasarle el control al proceso Init."
        },
        {
          "id": "tf2-9-4",
          "q": "El montaje del filesystem en modo read-write según /etc/fstab ocurre antes de que arranquen los servicios básicos.",
          "a": false,
          "explain": "Es al revés: primero se activan los servicios y demonios, y una vez operativos los servicios básicos, recién ahí se monta el FS en read-write activando las particiones de /etc/fstab."
        },
        {
          "id": "tf2-9-5",
          "q": "Para mostrar la pantalla de login en consola se puede usar agetty, y en entorno gráfico gdm o lightdm.",
          "a": true,
          "explain": "Exacto: el paso 7 lanza el programa de inicio de sesión. En consola suele ser agetty y en gráfico gdm o lightdm."
        }
      ],
      "mc": [
        {
          "id": "mc2-9-1",
          "q": "¿Qué hace la BIOS inmediatamente después de que el POST tiene éxito?",
          "options": [
            "Lanza el primer proceso del sistema con PID 1",
            "Llama al disco marcado como arranque",
            "Monta las particiones en modo read-write",
            "Inicia la placa de red y los demonios"
          ],
          "correctIndex": 1,
          "explain": "Si el POST pasa, la BIOS llama al disco marcado como arranque para localizar ahí el bootloader. Lanzar PID 1, montar particiones e iniciar demonios son pasos muy posteriores."
        },
        {
          "id": "mc2-9-2",
          "q": "¿Cuál es el rol de GRUB en la secuencia de booteo?",
          "options": [
            "Hacer el diagnóstico del hardware al encender la PC",
            "Ingresar las credenciales del usuario al sistema",
            "Configurar los runlevels o targets del arranque",
            "Cargar la imagen del kernel y mostrar el menú"
          ],
          "correctIndex": 3,
          "explain": "GRUB es el gestor de arranque: recorre las etapas del bootloader, presenta el menú de sistemas operativos y carga la imagen del kernel. El diagnóstico lo hace el POST y los targets los maneja systemd."
        },
        {
          "id": "mc2-9-3",
          "q": "¿Qué proceso lanza el kernel como primer proceso del sistema (PID 1)?",
          "options": [
            "Init o systemd según la versión",
            "El gestor de arranque GRUB",
            "El programa agetty de la consola",
            "El servicio de placa de red"
          ],
          "correctIndex": 0,
          "explain": "El kernel lanza el primer proceso del sistema, tradicionalmente Init o systemd según la distro. GRUB ya corrió antes, y agetty y la red son pasos posteriores."
        },
        {
          "id": "mc2-9-4",
          "q": "Según la tabla de equivalencias, ¿a qué target corresponde el runlevel 5?",
          "options": [
            "el rescue.target",
            "el poweroff.target",
            "graphical.target",
            "el reboot.target"
          ],
          "correctIndex": 2,
          "explain": "El runlevel 5 es multiusuario con red y con GUI, que en systemd equivale a graphical.target. rescue es el 1, poweroff el 0 y reboot el 6."
        },
        {
          "id": "mc2-9-5",
          "q": "¿Qué comando permite ver todo el log del último booteo una vez logueado?",
          "options": [
            "service journald status",
            "init 6 para reiniciar",
            "shutdown -h now",
            "journalctl -b"
          ],
          "correctIndex": 3,
          "explain": "El texto indica que journalctl -b muestra todo el log del último booteo. Los otros comandos sirven para gestionar servicios, reiniciar o apagar, no para ver el log de arranque."
        }
      ],
      "ms": [
        {
          "id": "ms2-9-1",
          "q": "¿Cuáles de los siguientes son pasos descritos en la secuencia de booteo?",
          "options": [
            "Encendido y POST del hardware",
            "Carga del gestor de arranque GRUB",
            "Compilación del kernel desde el código fuente",
            "Activación de servicios y demonios",
            "Inicio de sesión del usuario"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "POST, carga de GRUB, activación de servicios e inicio de sesión son pasos reales de la secuencia. La compilación del kernel no aparece: GRUB carga una imagen ya compilada, no se compila durante el arranque."
        },
        {
          "id": "ms2-9-2",
          "q": "Según la tabla de runlevels y targets, ¿cuáles equivalencias son correctas?",
          "options": [
            "Runlevel 0 corresponde a poweroff.target",
            "Runlevel 1 corresponde a rescue.target",
            "Runlevel 3 corresponde a graphical.target",
            "Runlevel 6 corresponde a reboot.target",
            "Runlevel 4 está reservado para personalizar"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Las únicas correctas son: 0 es poweroff, 1 es rescue, 6 es reboot y 4 está reservado para personalizar. El runlevel 3 es multi-user.target (sin GUI), no graphical.target; ese sería el runlevel 5."
        },
        {
          "id": "ms2-9-3",
          "q": "¿Cuáles de estas afirmaciones sobre el proceso de booteo son correctas?",
          "options": [
            "El POST se ejecuta después de montar el filesystem",
            "GRUB lanza directamente la sesión gráfica del usuario",
            "El kernel hace el diagnóstico inicial del hardware",
            "El initramfs se monta antes de cargar el menú de GRUB",
            "Los servicios se inician después de montar las particiones de fstab"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. El POST es el primer paso, no posterior al montaje; GRUB carga el kernel, no la sesión gráfica; el diagnóstico lo hace el POST, no el kernel; el initramfs se monta al cargar el kernel, después del menú de GRUB; y los servicios arrancan antes del montaje read-write de fstab."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-9-1",
        "front": "¿Qué significa POST y quién lo ejecuta?",
        "back": "Power-On Self-Test: un diagnóstico del hardware que ejecuta el firmware de la BIOS o de UEFI al encender la máquina. Si tiene éxito, la BIOS llama al disco de arranque."
      },
      {
        "id": "fc2-9-2",
        "front": "Función de GRUB en el booteo",
        "back": "Es el gestor de arranque. La BIOS localiza el MBR o GPT, GRUB recorre las etapas del bootloader, presenta el menú de SOs y carga la imagen del kernel."
      },
      {
        "id": "fc2-9-3",
        "front": "¿Qué es el initramfs?",
        "back": "Un sistema de archivos temporal que el kernel monta durante su carga, antes de transferir el control al proceso Init."
      },
      {
        "id": "fc2-9-4",
        "front": "Primer proceso del sistema (PID 1)",
        "back": "El kernel lanza Init (tradicional) o systemd (distros modernas). Ejecuta scripts de arranque y configura runlevels o targets."
      },
      {
        "id": "fc2-9-5",
        "front": "¿Cuándo se monta el filesystem en read-write?",
        "back": "Una vez que los servicios básicos están operativos. Se montan las particiones adicionales definidas en /etc/fstab en modo read-write."
      },
      {
        "id": "fc2-9-6",
        "front": "Programas que muestran la pantalla de login",
        "back": "En consola: agetty. En entorno gráfico: gdm o lightdm."
      },
      {
        "id": "fc2-9-7",
        "front": "¿Cómo ver el log del último booteo?",
        "back": "Con journalctl -b. Durante el arranque también podés presionar Esc o Shift para ver el output del kernel en tiempo real."
      },
      {
        "id": "fc2-9-8",
        "front": "Los 8 pasos del booteo en orden",
        "back": "POST, carga de GRUB, carga del kernel, Init/systemd, activación de servicios, montaje del filesystem, inicio de la interfaz de login e inicio de sesión del usuario."
      }
    ]
  },
  "10": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-10-1",
          "q": "Init es el primer proceso que arranca el sistema operativo y por eso su PID es 1.",
          "a": true,
          "explain": "Init se inicia ni bien arranca el SO y sigue corriendo hasta que se apaga. Por ser el primer proceso, su PID es 1."
        },
        {
          "id": "tf2-10-2",
          "q": "Init nació con Linux y luego UNIX lo adoptó bajo el diseño de System V.",
          "a": false,
          "explain": "Es al revés: Init nació con UNIX bajo el diseño de System V (sysv init), y Linux lo heredó."
        },
        {
          "id": "tf2-10-3",
          "q": "El runlevel predeterminado en Debian es el 2 (multiusuario sin red).",
          "a": true,
          "explain": "El texto indica que el runlevel por defecto en Debian es el 2, que corresponde a multiusuario sin red."
        },
        {
          "id": "tf2-10-4",
          "q": "El archivo /etc/inittab define el runlevel predeterminado y qué procesos deben iniciarse, y queda obsoleto en sistemas con systemd.",
          "a": true,
          "explain": "Tal cual: /etc/inittab es el archivo principal de configuración de Init, define el runlevel por defecto y los procesos a iniciar, y queda obsoleto cuando hay systemd."
        },
        {
          "id": "tf2-10-5",
          "q": "El comando init 6 sirve para apagar el sistema.",
          "a": false,
          "explain": "init 6 reinicia el sistema (equivale a reboot o shutdown -r now). El apagado es init 0 o shutdown -h now."
        }
      ],
      "mc": [
        {
          "id": "mc2-10-1",
          "q": "¿De dónde proviene el nombre Init?",
          "options": [
            "De Internal Tasks",
            "De Initialization",
            "De Init Daemon",
            "De Init Table"
          ],
          "correctIndex": 1,
          "explain": "Init es abreviatura de Initialization. Los demás son inventados; el archivo de configuración se llama inittab pero el nombre del proceso viene de Initialization."
        },
        {
          "id": "mc2-10-2",
          "q": "¿Qué contiene el directorio /etc/init.d/?",
          "options": [
            "Los enlaces simbólicos por runlevel",
            "El runlevel predeterminado del sistema",
            "Las variables de entorno globales",
            "Los scripts de inicio de servicios"
          ],
          "correctIndex": 3,
          "explain": "/etc/init.d/ contiene los scripts de inicio de servicios individuales y su administración de estado. Los enlaces simbólicos por runlevel están en /etc/rcX.d/ y el runlevel por defecto en /etc/inittab."
        },
        {
          "id": "mc2-10-3",
          "q": "¿Qué hay en los directorios /etc/rcX.d/?",
          "options": [
            "Enlaces simbólicos a los scripts de init.d",
            "Las opciones de uso del comando service",
            "Los scripts originales completos de cada servicio",
            "La definición de las variables de entorno"
          ],
          "correctIndex": 0,
          "explain": "En /etc/rcX.d/ (donde X es el número de runlevel) hay enlaces simbólicos a los scripts de /etc/init.d/. Los scripts originales viven en init.d."
        },
        {
          "id": "mc2-10-4",
          "q": "¿Qué opción de service hace que un servicio arranque automáticamente en el booteo?",
          "options": [
            "start",
            "restart",
            "enable",
            "status"
          ],
          "correctIndex": 2,
          "explain": "enable habilita el servicio para que arranque en el booteo. start solo lo inicia en el momento, restart lo reinicia y status muestra su estado."
        },
        {
          "id": "mc2-10-5",
          "q": "¿Qué comando cambia manualmente al runlevel monousuario?",
          "options": [
            "init 1",
            "init 3",
            "init 0",
            "init 6"
          ],
          "correctIndex": 0,
          "explain": "init 1 cambia al runlevel 1, que es monousuario. init 3 es multiusuario sin GUI, init 0 apaga e init 6 reinicia."
        }
      ],
      "ms": [
        {
          "id": "ms2-10-1",
          "q": "¿Cuáles de estas opciones del comando service existen según el texto?",
          "options": [
            "status para ver el estado",
            "enable para habilitar en el booteo",
            "reload para recargar la configuración",
            "stop para detener el servicio",
            "disable para deshabilitarlo"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "status, enable, stop y disable están listadas (junto con start y restart). reload no aparece entre las opciones mencionadas para service."
        },
        {
          "id": "ms2-10-2",
          "q": "Según la tabla de runlevels de System V, ¿cuáles equivalencias son correctas?",
          "options": [
            "Runlevel 0 es apagado del sistema",
            "Runlevel 1 es monousuario",
            "Runlevel 4 es reservado para personalizar",
            "Runlevel 5 es multiusuario sin red",
            "Runlevel 6 es reinicio"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Correctas: 0 apagado, 1 monousuario, 4 reservado y 6 reinicio. El runlevel 5 es multiusuario con red y con GUI; multiusuario sin red es el runlevel 2."
        },
        {
          "id": "ms2-10-3",
          "q": "¿Cuáles afirmaciones sobre los archivos de Init son correctas?",
          "options": [
            "/etc/inittab es el archivo principal de configuración",
            "/etc/init.d/ guarda las variables de entorno globales",
            "/etc/rcX.d/ contiene enlaces simbólicos a init.d",
            "/etc/inittab queda obsoleto con systemd",
            "/etc/init.d/ administra estado con start, stop, status, restart"
          ],
          "correctIndexes": [
            0,
            2,
            3,
            4
          ],
          "explain": "Son correctas todas menos la de variables de entorno: /etc/init.d/ guarda scripts de inicio y administración de estado, no variables globales. El resto coincide con el texto."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-10-1",
        "front": "¿Qué es Init y cuál es su PID?",
        "back": "Proceso (de Initialization) que arranca ni bien inicia el SO y corre hasta que se apaga. Inicia todos los servicios necesarios. Por ser el primer proceso, su PID es 1."
      },
      {
        "id": "fc2-10-2",
        "front": "Origen de Init",
        "back": "Nació con UNIX bajo el diseño de System V (sysv init) y Linux lo heredó. Ejecuta scripts de inicio de forma secuencial."
      },
      {
        "id": "fc2-10-3",
        "front": "¿Qué es un runlevel?",
        "back": "Un modo de operación del sistema; cada runlevel define un conjunto de servicios que se ejecutan. En Debian el predeterminado es el 2."
      },
      {
        "id": "fc2-10-4",
        "front": "¿Para qué sirve /etc/inittab?",
        "back": "Archivo principal de configuración de Init: define el runlevel predeterminado y qué procesos deben iniciarse. Queda obsoleto en sistemas con systemd."
      },
      {
        "id": "fc2-10-5",
        "front": "/etc/init.d/ vs /etc/rcX.d/",
        "back": "/etc/init.d/ contiene los scripts de inicio de servicios y su administración de estado. /etc/rcX.d/ (X = runlevel) tiene enlaces simbólicos a esos scripts."
      },
      {
        "id": "fc2-10-6",
        "front": "Opciones del comando service",
        "back": "status, start, stop, restart, enable (arranca en el booteo) y disable (lo deshabilita)."
      },
      {
        "id": "fc2-10-7",
        "front": "Comandos para cambiar de runlevel",
        "back": "init 3 (multiusuario sin GUI), init 1 (monousuario), init 0 (apagar, o shutdown -h now), init 6 (reiniciar, o reboot / shutdown -r now)."
      },
      {
        "id": "fc2-10-8",
        "front": "¿Init sigue funcionando en distros modernas?",
        "back": "Sí, por retrocompatibilidad: comandos como service apache2 start funcionan, pero por debajo invocan a systemctl."
      }
    ]
  },
  "11": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-11-1",
          "q": "Por convención UNIX, el nombre de los daemons termina en \"d\" para reconocerlos rápido, como en systemd.",
          "a": true,
          "explain": "Exacto: la convención UNIX es agregar una \"d\" al final de los daemons. Por eso systemd lleva esa d al final."
        },
        {
          "id": "tf2-11-2",
          "q": "Systemd sustituyó a Init a partir de Debian 8 \"Jessie\" en 2015.",
          "a": true,
          "explain": "Tal cual lo dice el texto: systemd reemplazó a init desde Debian 8 \"Jessie\", lanzada en 2015."
        },
        {
          "id": "tf2-11-3",
          "q": "A diferencia de Init, systemd no es el padre de los demás procesos ni recibe el PID 1.",
          "a": false,
          "explain": "Al contrario: igual que Init, systemd es el padre de todos los demás procesos y es el primero en arrancar, por lo que generalmente recibe PID 1."
        },
        {
          "id": "tf2-11-4",
          "q": "El emergency.target levanta solo una consola raíz, sin servicios.",
          "a": true,
          "explain": "Correcto: emergency.target es el modo emergencia, con solo consola raíz y sin servicios. El de mantenimiento más amplio es rescue.target."
        },
        {
          "id": "tf2-11-5",
          "q": "La opción -u de journalctl muestra el registro del arranque actual.",
          "a": false,
          "explain": "-u muestra los registros de un servicio específico. El registro del arranque actual se ve con -b."
        }
      ],
      "mc": [
        {
          "id": "mc2-11-1",
          "q": "¿Qué son los targets en systemd?",
          "options": [
            "Scripts ejecutados secuencialmente por cada runlevel",
            "Enlaces simbólicos directos a los servicios del SO",
            "Estados que agrupan servicios y manejan dependencias",
            "Archivos de log que gestiona el demonio journald"
          ],
          "correctIndex": 2,
          "explain": "Los targets son objetivos o estados del sistema que agrupan servicios y configuraciones y permiten manejar dependencias entre ellos. Son la abstracción que reemplaza a los runlevels."
        },
        {
          "id": "mc2-11-2",
          "q": "¿Qué target equivale al sistema completo en modo texto, similar al runlevel 3?",
          "options": [
            "el graphical.target",
            "multi-user.target",
            "el rescue.target",
            "el basic.target"
          ],
          "correctIndex": 1,
          "explain": "multi-user.target es el sistema operativo completo en modo texto, similar al runlevel 3. graphical es el modo gráfico (runlevel 5) y basic es el estado mínimo previo."
        },
        {
          "id": "mc2-11-3",
          "q": "¿Qué directorio contiene las unidades predeterminadas y servicios provistos por el SO o los paquetes?",
          "options": [
            "/etc/systemd/system/",
            "/etc/systemd/journald.conf",
            "/lib/systemd/system/",
            "/etc/systemd/logind.conf"
          ],
          "correctIndex": 2,
          "explain": "/lib/systemd/system/ guarda las unidades predeterminadas y los servicios provistos por el SO o los paquetes. /etc/systemd/system/ es donde se habilitan o modifican los servicios del sistema."
        },
        {
          "id": "mc2-11-4",
          "q": "¿Qué servicio configura el archivo /etc/systemd/logind.conf?",
          "options": [
            "El que gestiona los logs del sistema",
            "El que maneja las sesiones de usuarios",
            "El que define el target predeterminado",
            "El que arranca el target multi-user"
          ],
          "correctIndex": 1,
          "explain": "logind.conf configura el servicio logind, que maneja las sesiones de los usuarios. El de los logs es journald (journald.conf)."
        },
        {
          "id": "mc2-11-5",
          "q": "¿Qué opción de journalctl muestra los registros en tiempo real (modo follow)?",
          "options": [
            "-b",
            "-u",
            "-f",
            "status"
          ],
          "correctIndex": 2,
          "explain": "-f es el modo follow: muestra los registros en tiempo real. -b es el arranque actual, -u un servicio específico y status no es opción de journalctl."
        }
      ],
      "ms": [
        {
          "id": "ms2-11-1",
          "q": "Según la tabla de targets, ¿cuáles propósitos están correctamente descritos?",
          "options": [
            "graphical.target: modo gráfico con escritorio",
            "emergency.target: solo consola raíz, sin servicios",
            "poweroff.target: apaga el sistema",
            "rescue.target: reinicia el sistema",
            "reboot.target: estado mínimo de servicios esenciales"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Correctas: graphical (modo gráfico), emergency (consola raíz sin servicios) y poweroff (apaga). rescue es modo rescate/mantenimiento, no reinicio; y reboot reinicia, no es el estado mínimo (ese es basic.target)."
        },
        {
          "id": "ms2-11-2",
          "q": "¿Cuáles de estos archivos o rutas de systemd están descritos correctamente?",
          "options": [
            "/etc/systemd/journald.conf configura los logs del sistema",
            "/etc/systemd/system/default.target especifica el target predeterminado",
            "/lib/systemd/system/ guarda solo los logs de arranque",
            "/etc/systemd/logind.conf maneja las sesiones de usuario",
            "/etc/systemd/system/ permite habilitar o modificar servicios"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Todas correctas salvo /lib/systemd/system/, que guarda las unidades y servicios predeterminados del SO, no logs de arranque. Los logs los gestiona journald."
        },
        {
          "id": "ms2-11-3",
          "q": "Según el resumen comparativo, ¿cuáles equivalencias runlevel-target son correctas?",
          "options": [
            "Runlevel 0 corresponde a graphical.target",
            "Runlevel 1 corresponde a rescue.target",
            "Runlevel 2 corresponde a multi-user.target",
            "Runlevel 5 corresponde a poweroff.target",
            "Runlevel 6 corresponde a reboot.target"
          ],
          "correctIndexes": [
            1,
            2,
            4
          ],
          "explain": "Correctas: 1 es rescue, 2 es multi-user y 6 es reboot. El runlevel 0 es poweroff.target (no graphical) y el 5 es graphical.target (no poweroff)."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-11-1",
        "front": "¿Qué es systemd y por qué termina en \"d\"?",
        "back": "Es un daemon de gestión del sistema. La \"d\" final sigue la convención UNIX de marcar los daemons. Igual que Init, es padre de los demás procesos y suele tener PID 1."
      },
      {
        "id": "fc2-11-2",
        "front": "¿Desde cuándo systemd reemplaza a Init?",
        "back": "Desde Debian 8 \"Jessie\" (2015), pensado como solución más eficiente para la inicialización del sistema."
      },
      {
        "id": "fc2-11-3",
        "front": "¿Qué son los targets?",
        "back": "Objetivos o estados del sistema en systemd que agrupan servicios y configuraciones para un propósito. Permiten manejar dependencias entre servicios; reemplazan a los runlevels."
      },
      {
        "id": "fc2-11-4",
        "front": "multi-user.target vs graphical.target",
        "back": "multi-user.target es el sistema completo en modo texto (similar al runlevel 3). graphical.target es el modo gráfico con escritorio (similar al runlevel 5)."
      },
      {
        "id": "fc2-11-5",
        "front": "rescue.target vs emergency.target",
        "back": "rescue.target es el modo rescate para mantenimiento. emergency.target es el modo emergencia: solo consola raíz, sin servicios."
      },
      {
        "id": "fc2-11-6",
        "front": "/etc/systemd/system/ vs /lib/systemd/system/",
        "back": "/etc/systemd/system/ es donde se habilitan, deshabilitan o modifican los servicios. /lib/systemd/system/ guarda las unidades y servicios predeterminados del SO y los paquetes."
      },
      {
        "id": "fc2-11-7",
        "front": "journald vs logind",
        "back": "journald (journald.conf) gestiona los logs del sistema. logind (logind.conf) maneja las sesiones de los usuarios."
      },
      {
        "id": "fc2-11-8",
        "front": "Opciones de journalctl",
        "back": "-u ver registros de un servicio específico, -b ver el registro del arranque actual, -f ver registros en tiempo real (modo follow)."
      }
    ]
  },
  "12": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-12-1",
          "q": "Los alias sirven para reemplazar comandos simples o complejos por otros más cortos.",
          "a": true,
          "explain": "Esa es justamente la idea del alias: cambiar comandos largos por uno corto para ahorrar tiempo y evitar errores de tipeo."
        },
        {
          "id": "tf2-12-2",
          "q": "Un alias definido directamente en la terminal queda permanente aunque cierres la sesión.",
          "a": false,
          "explain": "No: definir un alias en la terminal es temporal, dura hasta que cierres la sesión. Para que sea permanente hay que ponerlo en un archivo de configuración como .bashrc."
        },
        {
          "id": "tf2-12-3",
          "q": "Tras editar .bashrc, ejecutar source ~/.bashrc recarga la configuración sin tener que reabrir la sesión.",
          "a": true,
          "explain": "Tal cual: source ~/.bashrc hace que la sesión actual recargue la configuración sin necesidad de cerrar y volver a abrir la terminal."
        },
        {
          "id": "tf2-12-4",
          "q": "Los archivos de configuración de usuario se ubican en /etc y afectan a todos los usuarios.",
          "a": false,
          "explain": "Los de usuario están en el home, arrancan con punto (ocultos) y son específicos de cada uno. Los que viven en /etc y afectan a todos son los archivos del sistema."
        },
        {
          "id": "tf2-12-5",
          "q": "El archivo /etc/environment solo define variables de entorno globales, sin ejecutar comandos ni scripts.",
          "a": true,
          "explain": "Correcto: a diferencia de los otros archivos globales, /etc/environment únicamente define variables de entorno; no ejecuta comandos ni scripts."
        }
      ],
      "mc": [
        {
          "id": "mc2-12-1",
          "q": "¿Cuál de estas es una ventaja de usar alias mencionada en el texto?",
          "options": [
            "Acelera el arranque del sistema operativo entero",
            "Minimiza errores tipográficos en comandos",
            "Reemplaza por completo al gestor de servicios systemctl",
            "Define variables de entorno para todo el sistema"
          ],
          "correctIndex": 1,
          "explain": "Una ventaja listada es minimizar errores tipográficos en comandos complejos y frecuentes. Los alias no aceleran el booteo ni reemplazan a systemctl ni definen variables globales."
        },
        {
          "id": "mc2-12-2",
          "q": "¿A qué comando se expande el alias ll='ls -lh'?",
          "options": [
            "ls -la para ver archivos ocultos",
            "sudo apt update del repositorio",
            "ls -lh en formato extendido",
            "source ~/.bashrc para recargar"
          ],
          "correctIndex": 2,
          "explain": "ll se expande a ls -lh, que lista el contenido en formato extendido con tamaños legibles. ls -la sería el alias oculto y los otros son comandos distintos."
        },
        {
          "id": "mc2-12-3",
          "q": "¿Dónde conviene colocar alias, funciones y variables que querés mantener permanentemente?",
          "options": [
            "En .bashrc",
            "En /etc/environment",
            "En /etc/rcX.d/",
            "En .bash_profile"
          ],
          "correctIndex": 0,
          "explain": "El .bashrc es la configuración del shell bash donde se colocan alias, funciones y variables que querés mantener de forma permanente para tu usuario."
        },
        {
          "id": "mc2-12-4",
          "q": "¿Qué prefiere bash si el archivo .bash_profile existe?",
          "options": [
            "Ejecuta primero /etc/profile global",
            "Lo prefiere por sobre .profile",
            "Lo ignora y usa siempre .bashrc",
            "Solo lo usa en el runlevel 5"
          ],
          "correctIndex": 1,
          "explain": ".bash_profile es específico de bash; podría no existir, pero si existe, bash lo prefiere por sobre .profile."
        },
        {
          "id": "mc2-12-5",
          "q": "¿Qué archivo global se carga al iniciar sesión y equivale a .profile?",
          "options": [
            "/etc/bash.bashrc",
            "/etc/environment",
            "/etc/profile",
            "/etc/inittab"
          ],
          "correctIndex": 2,
          "explain": "/etc/profile es la configuración global equivalente a .profile, que se carga al iniciar sesión. /etc/bash.bashrc equivale a .bashrc y /etc/environment solo define variables."
        }
      ],
      "ms": [
        {
          "id": "ms2-12-1",
          "q": "¿Cuáles de estas son ventajas de usar alias según el texto?",
          "options": [
            "Ahorra tiempo y simplifica comandos largos",
            "Minimiza errores tipográficos en comandos frecuentes",
            "Permite personalizar comandos predeterminados",
            "Hace permanentes los cambios sin tocar archivos",
            "Reemplaza el archivo /etc/fstab del sistema"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres ventajas listadas son ahorrar tiempo, minimizar errores tipográficos y personalizar comandos. Los alias no se hacen permanentes solos (hay que editar archivos) ni reemplazan fstab."
        },
        {
          "id": "ms2-12-2",
          "q": "¿Cuáles afirmaciones sobre archivos de configuración de usuario son correctas?",
          "options": [
            ".bashrc es la configuración del shell bash",
            ".profile puede ejecutarse por cualquier shell",
            ".bash_profile siempre existe en todo sistema",
            "Los archivos de usuario comienzan con un punto",
            ".profile define variables sin ejecutar comandos"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Correctas: .bashrc configura bash, .profile lo puede ejecutar cualquier shell y los de usuario empiezan con punto. .bash_profile podría no existir, y el que solo define variables sin ejecutar comandos es /etc/environment, no .profile."
        },
        {
          "id": "ms2-12-3",
          "q": "¿Cuáles de estas afirmaciones sobre los archivos del sistema son correctas?",
          "options": [
            "/etc/bash.bashrc se ejecuta para todos los usuarios en cada sesión",
            "/etc/profile equivale a .profile y se carga al iniciar sesión",
            "/etc/environment ejecuta scripts al iniciar sesión",
            "Los archivos del sistema generalmente están en /etc",
            "/etc/environment puede definir variables como JAVA_HOME"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Todas correctas salvo la de scripts: /etc/environment solo define variables de entorno, no ejecuta comandos ni scripts. JAVA_HOME es justamente un ejemplo típico que se pone ahí."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-12-1",
        "front": "¿Para qué sirve un alias?",
        "back": "Para reemplazar comandos simples o complejos por otros más cortos. Ahorra tiempo, minimiza errores tipográficos y permite personalizar comandos predeterminados."
      },
      {
        "id": "fc2-12-2",
        "front": "Ejemplos de alias del texto",
        "back": "alias ll='ls -lh', alias oculto='ls -la' y alias actualizar='sudo apt update && sudo apt upgrade' (comandos encadenados)."
      },
      {
        "id": "fc2-12-3",
        "front": "¿Por qué un alias de la terminal es temporal?",
        "back": "Porque dura solo hasta que cierres la sesión. Para hacerlo permanente hay que ponerlo en un archivo de configuración del usuario o del sistema, como .bashrc."
      },
      {
        "id": "fc2-12-4",
        "front": "¿Qué hace source ~/.bashrc?",
        "back": "Hace que la sesión actual recargue la configuración de .bashrc sin necesidad de cerrar y volver a abrir la terminal."
      },
      {
        "id": "fc2-12-5",
        "front": "Archivos de configuración de usuario",
        "back": "Están en el home, empiezan con punto (ocultos). .bashrc (config de bash: alias, funciones, variables), .profile (cualquier shell, al iniciar sesión) y .bash_profile (específico de bash, preferido sobre .profile si existe)."
      },
      {
        "id": "fc2-12-6",
        "front": "Archivos de configuración del sistema",
        "back": "Afectan a todos los usuarios y viven en /etc: /etc/bash.bashrc (global de bash), /etc/profile (global equivalente a .profile) y /etc/environment (solo variables de entorno globales)."
      },
      {
        "id": "fc2-12-7",
        "front": "Particularidad de /etc/environment",
        "back": "Solo define variables de entorno globales para todos los usuarios y procesos; no ejecuta comandos ni scripts. Ejemplo típico: JAVA_HOME=\"/usr/lib/jvm/java-8-openjdk-amd64\"."
      },
      {
        "id": "fc2-12-8",
        "front": "Regla mental para elegir archivo",
        "back": "Alias/funciones solo para vos → ~/.bashrc. Variable global para todo el sistema → /etc/environment. Algo al iniciar sesión que corra cualquier shell → .profile."
      }
    ]
  },
  "13": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-13-1",
          "q": "El comando <code>kill</code> dispone de un total de 64 señales distintas.",
          "a": true,
          "explain": "Tal cual: aunque se llame kill, maneja 64 señales en total, y varias ni siquiera terminan procesos."
        },
        {
          "id": "tf2-13-2",
          "q": "SIGTERM (15) es la señal predeterminada que envía <code>kill</code> cuando no se especifica ninguna.",
          "a": true,
          "explain": "Correcto. Si tirás kill PID a secas, va SIGTERM: le pide al proceso que termine ordenado y libere recursos."
        },
        {
          "id": "tf2-13-3",
          "q": "SIGKILL (9) le da al proceso la oportunidad de realizar tareas de limpieza antes de cerrarse.",
          "a": false,
          "explain": "Falso. Justamente SIGKILL es el mazazo: fuerza la finalización inmediata sin chance de limpiar nada, por eso puede traer problemas."
        },
        {
          "id": "tf2-13-4",
          "q": "SIGSTOP (19) puede ser ignorada o bloqueada por el programa que la recibe.",
          "a": false,
          "explain": "Falso. SIGSTOP no se puede ignorar ni bloquear: detiene el proceso sí o sí, libera CPU pero lo deja en memoria."
        },
        {
          "id": "tf2-13-5",
          "q": "El comando <code>killall</code> envía una señal a todos los procesos que coincidan con un nombre de programa.",
          "a": true,
          "explain": "Así es. En vez de cazar el PID, killall le manda la señal a todos los procesos que se llamen igual, por ejemplo killall -9 chrome."
        }
      ],
      "mc": [
        {
          "id": "mc2-13-1",
          "q": "¿Qué señal conviene usar para que un demonio relea su configuración sin detenerse por completo?",
          "options": [
            "SIGTERM (15)",
            "SIGHUP (1)",
            "SIGKILL (9)",
            "SIGSTOP (19)"
          ],
          "correctIndex": 1,
          "explain": "SIGHUP (1) está pensada para reiniciar el proceso y que vuelva a leer su config, típico en daemons que ya están corriendo."
        },
        {
          "id": "mc2-13-2",
          "q": "¿Cuál es la señal recomendada cuando un proceso no responde a SIGTERM?",
          "options": [
            "SIGCONT (18)",
            "SIGHUP (1)",
            "SIGKILL (9)",
            "SIGTSTP (20)"
          ],
          "correctIndex": 2,
          "explain": "SIGKILL (9) fuerza la finalización inmediata; se usa justo cuando el proceso no se fue con el SIGTERM educado."
        },
        {
          "id": "mc2-13-3",
          "q": "¿Qué señal equivale a presionar Ctrl + Z sobre un proceso en primer plano?",
          "options": [
            "SIGTSTP (20)",
            "SIGSTOP (19)",
            "SIGCONT (18)",
            "SIGTERM (15)"
          ],
          "correctIndex": 0,
          "explain": "SIGTSTP (20) suspende procesos en primer plano y es el equivalente directo de Ctrl + Z en la terminal."
        },
        {
          "id": "mc2-13-4",
          "q": "¿Qué señal reanuda un proceso previamente detenido con SIGSTOP?",
          "options": [
            "SIGHUP (1)",
            "SIGKILL (9)",
            "SIGTERM (15)",
            "SIGCONT (18)"
          ],
          "correctIndex": 3,
          "explain": "SIGCONT (18) es el resume: retoma un proceso que estaba pausado con SIGSTOP o SIGTSTP."
        },
        {
          "id": "mc2-13-5",
          "q": "Según el apunte, ¿qué hace SIGSTOP con la CPU y la memoria del proceso?",
          "options": [
            "Termina el proceso y libera la CPU y la memoria",
            "Libera la CPU pero lo mantiene en memoria",
            "Mantiene la CPU ocupada pero libera la memoria",
            "Recarga la config sin liberar CPU ni memoria"
          ],
          "correctIndex": 1,
          "explain": "SIGSTOP deja el proceso en pausa: libera CPU pero sigue ocupando memoria, listo para reanudarse después."
        }
      ],
      "ms": [
        {
          "id": "ms2-13-1",
          "q": "¿Cuáles de las siguientes señales detienen o terminan un proceso (no lo reanudan ni recargan config)?",
          "options": [
            "SIGKILL (9)",
            "SIGCONT (18)",
            "SIGTERM (15)",
            "SIGHUP (1)",
            "SIGSTOP (19)"
          ],
          "correctIndexes": [
            0,
            2,
            4
          ],
          "explain": "SIGKILL y SIGTERM terminan, SIGSTOP detiene. SIGCONT reanuda y SIGHUP recarga configuración, así que esas dos quedan afuera."
        },
        {
          "id": "ms2-13-2",
          "q": "Según el apunte, ¿cuáles de estas señales NO pueden ser ignoradas ni bloqueadas por el programa?",
          "options": [
            "SIGTERM (15)",
            "SIGKILL (9)",
            "SIGHUP (1)",
            "SIGSTOP (19)",
            "SIGTSTP (20)"
          ],
          "correctIndexes": [
            1,
            3
          ],
          "explain": "El texto marca explícitamente que SIGKILL y SIGSTOP no se pueden ignorar. Las demás sí admiten que el proceso decida cómo manejarlas."
        },
        {
          "id": "ms2-13-3",
          "q": "¿Cuáles de estas afirmaciones sobre las señales de kill son correctas tal como las plantea el apunte?",
          "options": [
            "SIGTERM lleva el número 9",
            "killall actúa sobre un único PID",
            "SIGCONT detiene un proceso en pausa",
            "SIGHUP fuerza la finalización inmediata",
            "kill maneja un total de 32 señales"
          ],
          "correctIndexes": [],
          "explain": "Ninguna es correcta. SIGTERM es 15 (no 9), killall va por nombre (no por PID), SIGCONT reanuda (no detiene), SIGHUP recarga config (no mata) y kill maneja 64 señales, no 32."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-13-1",
        "front": "¿Para qué sirve el comando kill?",
        "back": "Para enviar señales a procesos en ejecución, que pueden terminarlos, suspenderlos o continuarlos. Cuenta con 64 señales distintas."
      },
      {
        "id": "fc2-13-2",
        "front": "SIGTERM (15)",
        "back": "Solicita al proceso que termine de forma ordenada liberando recursos. Es la señal predeterminada si no se especifica ninguna."
      },
      {
        "id": "fc2-13-3",
        "front": "SIGKILL (9)",
        "back": "Fuerza la finalización inmediata del proceso sin permitirle limpiar nada. Se usa cuando no responde a SIGTERM. Se invoca con kill -9 o kill -KILL."
      },
      {
        "id": "fc2-13-4",
        "front": "SIGHUP (1)",
        "back": "Hace que el proceso relea su configuración sin detenerse del todo. Típica de daemons. Se invoca con kill -1 o kill -HUP."
      },
      {
        "id": "fc2-13-5",
        "front": "SIGSTOP (19) vs SIGTSTP (20)",
        "back": "Ambas suspenden sin terminar. SIGSTOP no se puede ignorar y libera CPU manteniéndolo en memoria; SIGTSTP es el equivalente a Ctrl+Z sobre un proceso en primer plano."
      },
      {
        "id": "fc2-13-6",
        "front": "SIGCONT (18)",
        "back": "Reanuda un proceso que había sido detenido previamente con SIGSTOP. Se invoca con kill -CONT o kill -18."
      },
      {
        "id": "fc2-13-7",
        "front": "¿Qué hace killall?",
        "back": "Envía una señal a todos los procesos que coincidan con un nombre de programa, en lugar de apuntar a un PID específico (ej. killall -9 chrome)."
      },
      {
        "id": "fc2-13-8",
        "front": "¿Qué es un demonio (daemon)?",
        "back": "Un programa que se ejecuta en segundo plano. Por eso señales como SIGHUP, que recargan configuración, tienen sentido sobre todo para ellos."
      }
    ]
  },
  "14": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-14-1",
          "q": "En Linux la extensión <code>.sh</code> es obligatoria para que el sistema pueda ejecutar un script.",
          "a": false,
          "explain": "Falso. Linux usa los 2 primeros bytes del archivo para clasificarlo; la extensión .sh es solo una convención para reconocerlo a simple vista."
        },
        {
          "id": "tf2-14-2",
          "q": "El shebang son los 2 primeros bytes del archivo y consisten en #! seguido del intérprete.",
          "a": true,
          "explain": "Correcto. Por ejemplo #!/bin/bash: esos primeros bytes le dicen a Linux qué intérprete usar para ejecutar el script."
        },
        {
          "id": "tf2-14-3",
          "q": "Invocar un script con <code>bash control.sh</code> requiere que el archivo tenga permisos de ejecución.",
          "a": false,
          "explain": "Falso. Al pasarle el script al intérprete con bash control.sh no hacen falta permisos de ejecución sobre el archivo."
        },
        {
          "id": "tf2-14-4",
          "q": "En BASH las variables son dinámicas: no hace falta declarar su tipo antes de usarlas.",
          "a": true,
          "explain": "Tal cual. En BASH definís la variable y le asignás un valor sin declarar tipo. La buena práctica es nombrarlas en mayúsculas."
        },
        {
          "id": "tf2-14-5",
          "q": "Las comillas simples permiten la expansión de variables igual que las comillas dobles.",
          "a": false,
          "explain": "Falso. Las comillas simples desactivan todos los caracteres especiales: todo queda literal. Las que expanden $variables son las comillas dobles."
        }
      ],
      "mc": [
        {
          "id": "mc2-14-1",
          "q": "Para que el dueño pueda leer, modificar y ejecutar un script, y el grupo y otros leerlo y ejecutarlo, ¿qué permiso mínimo se recomienda?",
          "options": [
            "644",
            "777",
            "755",
            "700"
          ],
          "correctIndex": 2,
          "explain": "El apunte recomienda al menos 755: rwx para el dueño, r-x para el grupo y r-x para otros."
        },
        {
          "id": "mc2-14-2",
          "q": "¿Por qué al ejecutar un script con <code>./control.sh</code> es necesario el <code>./</code>?",
          "options": [
            "Para que la shell no lo busque en el $PATH",
            "Para darle permisos de ejecución automáticos",
            "Para indicar la ruta absoluta del archivo",
            "Para invocar al intérprete bash directamente"
          ],
          "correctIndex": 0,
          "explain": "El ./ le dice a la shell que el script está en el directorio actual y que no lo busque dentro del $PATH."
        },
        {
          "id": "mc2-14-3",
          "q": "¿Qué variable especial de BASH contiene el valor de ejecución (return code) del comando anterior?",
          "options": [
            "$$",
            "$?",
            "$#",
            "$!"
          ],
          "correctIndex": 1,
          "explain": "$? guarda el return code del comando anterior. $$ es el PID, $# el total de argumentos y $! el último proceso en background."
        },
        {
          "id": "mc2-14-4",
          "q": "¿Qué variable intrínseca contiene los directorios donde el sistema busca comandos ejecutables?",
          "options": [
            "$HOME",
            "$PWD",
            "$USER",
            "$PATH"
          ],
          "correctIndex": 3,
          "explain": "$PATH lista los directorios donde el sistema busca los ejecutables. $HOME es tu home, $PWD el directorio actual y $USER tu nombre de usuario."
        },
        {
          "id": "mc2-14-5",
          "q": "¿Qué carácter especial guarda en una variable la salida de un comando reemplazándola por su resultado?",
          "options": [
            "El acento invertido ( ` )",
            "El numeral o almohadilla ( # )",
            "El punto y coma ( ; )",
            "La barra invertida ( \\ )"
          ],
          "correctIndex": 0,
          "explain": "El acento invertido convierte la salida de un comando en el contenido de la variable (también vale $(comando)), como en LISTAR=`ls`."
        }
      ],
      "ms": [
        {
          "id": "ms2-14-1",
          "q": "¿Cuáles de las siguientes son variables especiales de BASH con el significado que indica el apunte?",
          "options": [
            "$0 = nombre del script",
            "$# = total de argumentos",
            "$HOME = directorio del usuario",
            "$$ = PID del script",
            "$? = nombre del usuario"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "$0, $# y $$ son especiales con esos significados. $HOME es intrínseca (no especial) y $? es el return code, no el nombre del usuario."
        },
        {
          "id": "ms2-14-2",
          "q": "Según el apunte, ¿cuáles de estas formas permiten ejecutar un script?",
          "options": [
            "Ruta absoluta /home/alumno/control.sh",
            "Solo el nombre si está en un directorio del $PATH",
            "bash control.sh",
            "./control.sh dentro del directorio del script",
            "run control.sh desde cualquier carpeta"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro están en la tabla de formas de ejecutar. La quinta, run control.sh, es inventada: no figura en el apunte."
        },
        {
          "id": "ms2-14-3",
          "q": "¿Cuáles de estas afirmaciones sobre caracteres especiales en BASH son correctas?",
          "options": [
            "El punto y coma separa comandos en una misma línea",
            "La barra invertida ignora el carácter especial siguiente",
            "El numeral genera comentarios dentro del script",
            "Las comillas simples expanden las variables",
            "El signo $ identifica una variable por su nombre"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Las comillas simples NO expanden: desactivan todos los caracteres especiales. Las otras cuatro son correctas según la tabla."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-14-1",
        "front": "¿Qué es un script?",
        "back": "Un archivo con una sucesión de comandos de Shell que se ejecutan en el orden en que se escriben, para automatizar tareas repetitivas o administrar el sistema."
      },
      {
        "id": "fc2-14-2",
        "front": "¿Qué es el shebang?",
        "back": "Los 2 primeros bytes del archivo (#! seguido del intérprete, ej. #!/bin/bash). Linux los usa para clasificar el archivo como script."
      },
      {
        "id": "fc2-14-3",
        "front": "¿Para qué sirve la extensión .sh en Linux?",
        "back": "Es solo convención para reconocer el script a simple vista. El SO no la necesita: clasifica por los 2 primeros bytes, no por la extensión."
      },
      {
        "id": "fc2-14-4",
        "front": "Permiso mínimo recomendado para un script",
        "back": "755 (rwx dueño, r-x grupo, r-x otros): el dueño lee/modifica/ejecuta y el resto puede leer y ejecutar."
      },
      {
        "id": "fc2-14-5",
        "front": "¿Cómo se define e invoca una variable en BASH?",
        "back": "Se define sin tipo asignando un valor (ej. SALUDO=Bienvenido) y se invoca anteponiendo $ al nombre (ej. echo $SALUDO). Buena práctica: nombres en mayúsculas."
      },
      {
        "id": "fc2-14-6",
        "front": "Variables intrínsecas comunes",
        "back": "$HOME (directorio del usuario), $USER (nombre del usuario), $PATH (directorios de búsqueda de comandos) y $PWD (directorio de trabajo actual)."
      },
      {
        "id": "fc2-14-7",
        "front": "Variables especiales: $0, $1…$n, $#, $?, $$, $!",
        "back": "$0 nombre del script, $1…$n argumentos, $# total de argumentos, $? return code del comando anterior, $$ PID del script, $! último proceso en background."
      },
      {
        "id": "fc2-14-8",
        "front": "Comillas dobles vs simples vs acento invertido",
        "back": "Dobles: expanden $variables. Simples: todo literal, no expanden nada. Acento invertido: corre el comando y reemplaza con su salida."
      }
    ]
  },
  "15": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-15-1",
          "q": "La palabra clave <code>fi</code> es \"if\" invertido y marca el cierre de la estructura condicional.",
          "a": true,
          "explain": "Correcto. fi cierra el if, igual que esac cierra el case y done cierra los bucles."
        },
        {
          "id": "tf2-15-2",
          "q": "El bucle <code>until</code> ejecuta su bloque mientras la condición sea verdadera y se detiene cuando es falsa.",
          "a": false,
          "explain": "Falso. Eso es el while. El until es al revés: repite HASTA que la condición sea verdadera, o sea se detiene cuando se cumple."
        },
        {
          "id": "tf2-15-3",
          "q": "En BASH los índices de los vectores arrancan en 0.",
          "a": true,
          "explain": "Tal cual. Por eso ${PERSONAJES[0]} accede al primer elemento del vector."
        },
        {
          "id": "tf2-15-4",
          "q": "El corchete doble <code>[[ ]]</code> permite usar operadores de comparación aritmética como &lt; y &gt;, además de los clásicos -eq, -lt.",
          "a": true,
          "explain": "Correcto. El doble corchete es más flexible: suma <, >, etc. El simple es más viejo y obliga a usar -eq, -lt y compañía."
        },
        {
          "id": "tf2-15-5",
          "q": "El operador <code>-d</code> sirve para comprobar que un archivo o directorio tiene permisos de lectura.",
          "a": false,
          "explain": "Falso. -d verifica que sea un directorio. El de permisos de lectura es -r."
        }
      ],
      "mc": [
        {
          "id": "mc2-15-1",
          "q": "¿Qué estructura de control conviene para evaluar una variable contra múltiples patrones de forma clara?",
          "options": [
            "WHILE",
            "CASE",
            "UNTIL",
            "FOR"
          ],
          "correctIndex": 1,
          "explain": "CASE compara una variable contra varios patrones y ejecuta el bloque que coincide; es más claro que un if-elif gigante."
        },
        {
          "id": "mc2-15-2",
          "q": "¿Qué operador de comparación numérica significa \"mayor o igual a\"?",
          "options": [
            "-gt",
            "-ne",
            "-ge",
            "-le"
          ],
          "correctIndex": 2,
          "explain": "-ge es mayor o igual a. -gt es solo mayor que, -le menor o igual y -ne distinto."
        },
        {
          "id": "mc2-15-3",
          "q": "En el bucle <code>for i in {1..10..2}</code>, ¿qué representa el último número?",
          "options": [
            "El paso del rango (de 2 en 2)",
            "El límite inferior del rango",
            "La cantidad de iteraciones totales",
            "El índice inicial del vector"
          ],
          "correctIndex": 0,
          "explain": "En {1..10..2} el 2 es el paso: recorre de 1 a 10 saltando de 2 en 2."
        },
        {
          "id": "mc2-15-4",
          "q": "¿Qué operador para cadenas comprueba que la longitud de la cadena sea cero?",
          "options": [
            "-n",
            "!=",
            "-z",
            "=="
          ],
          "correctIndex": 2,
          "explain": "-z verifica longitud cero. -n es lo contrario (distinta de cero), == compara cadenas iguales y != cadenas diferentes."
        },
        {
          "id": "mc2-15-5",
          "q": "Al recorrer un vector con <code>for i in \"${PERSONAJES[@]}\"</code>, ¿qué indica el símbolo @?",
          "options": [
            "El índice 0 del primer elemento agregado",
            "El contenido completo del vector",
            "La cantidad total de elementos",
            "El último elemento que se agregó"
          ],
          "correctIndex": 1,
          "explain": "El @ representa todo el contenido del vector (también vale *), por eso el bucle recorre todos los elementos."
        }
      ],
      "ms": [
        {
          "id": "ms2-15-1",
          "q": "¿Cuáles de las siguientes son palabras clave del bucle WHILE según el apunte?",
          "options": [
            "while",
            "then",
            "do",
            "done",
            "fi"
          ],
          "correctIndexes": [
            0,
            2,
            3
          ],
          "explain": "El while usa while, do y done. then y fi pertenecen a la estructura condicional if, no al bucle."
        },
        {
          "id": "ms2-15-2",
          "q": "¿Cuáles de estos operadores corresponden a archivos y directorios?",
          "options": [
            "-e (existe el archivo)",
            "-eq (numéricamente igual a)",
            "-f (archivo regular)",
            "-d (es un directorio)",
            "-z (cadena de longitud cero)"
          ],
          "correctIndexes": [
            0,
            2,
            3
          ],
          "explain": "-e, -f y -d son de archivos/directorios. -eq es comparación numérica y -z es de cadenas."
        },
        {
          "id": "ms2-15-3",
          "q": "¿Cuáles de estas afirmaciones describen un bucle FOR tal como lo plantea el apunte?",
          "options": [
            "Solo puede recorrer números fijos escritos a mano",
            "Puede recorrer un rango como {1..5}",
            "Puede iterar con paso usando {1..10..2}",
            "Puede recorrer la salida de un comando con $(...)",
            "No sirve para iterar sobre listas"
          ],
          "correctIndexes": [
            1,
            2,
            3
          ],
          "explain": "El FOR recorre listas: rangos, rangos con paso y la salida de un comando. La primera y la última afirmación lo limitan o niegan mal."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-15-1",
        "front": "¿Para qué sirven las estructuras de control?",
        "back": "Permiten que un script tome decisiones según condiciones evaluadas mediante comparaciones, manejando el flujo de ejecución de forma dinámica."
      },
      {
        "id": "fc2-15-2",
        "front": "Palabras clave del IF",
        "back": "if (si), elif (también si), else (de cualquier otra manera), then (entonces) y fi (if invertido, marca el cierre). Las imprescindibles son las 3 últimas."
      },
      {
        "id": "fc2-15-3",
        "front": "WHILE vs UNTIL",
        "back": "WHILE repite mientras la condición sea verdadera. UNTIL es lo opuesto: repite hasta que la condición sea verdadera, deteniéndose cuando se cumple."
      },
      {
        "id": "fc2-15-4",
        "front": "Corchete simple [ ] vs doble [[ ]]",
        "back": "El simple es más antiguo y menos flexible (solo -eq, -lt, -d, etc.). El doble suma operadores aritméticos como <, >, >=, <=."
      },
      {
        "id": "fc2-15-5",
        "front": "¿Qué hace CASE?",
        "back": "Evalúa una variable o cadena contra múltiples patrones y ejecuta el bloque correspondiente. Se cierra con esac. Más claro que un if-elif largo."
      },
      {
        "id": "fc2-15-6",
        "front": "Formas de usar el bucle FOR",
        "back": "Recorre listas de números, rangos como {1..5}, rangos con paso {1..10..2} o la salida de un comando con $(...)."
      },
      {
        "id": "fc2-15-7",
        "front": "Vectores (arrays) en BASH",
        "back": "Colecciones de datos indexados desde 0. Se accede con ${VECTOR[i]} y se recorren con un bucle usando ${VECTOR[@]}, donde @ indica todo el contenido."
      },
      {
        "id": "fc2-15-8",
        "front": "¿Qué es una función en BASH?",
        "back": "Un bloque de comandos agrupados bajo un nombre que puede invocarse múltiples veces, evitando repetir código."
      }
    ]
  },
  "16": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-16-1",
          "q": "Cron es un demonio que permite programar la ejecución automática de tareas como scripts o comandos.",
          "a": true,
          "explain": "Correcto. El servicio se llama crond (cron daemon) y sirve para calendarizar backups, reportes, limpieza, etc."
        },
        {
          "id": "tf2-16-2",
          "q": "El comando <code>crontab -r</code> lista el crontab actual del usuario.",
          "a": false,
          "explain": "Falso. crontab -r ELIMINA el crontab del usuario. El que lista es crontab -l."
        },
        {
          "id": "tf2-16-3",
          "q": "En el campo de día de la semana del crontab, tanto el 0 como el 7 representan al domingo.",
          "a": true,
          "explain": "Tal cual. El día de la semana va de 0 a 7, y tanto 0 como 7 son domingo."
        },
        {
          "id": "tf2-16-4",
          "q": "Los scripts colocados en /etc/cron.daily se ejecutan aunque no tengan permisos de ejecución.",
          "a": false,
          "explain": "Falso. El apunte avisa que esos scripts necesitan permisos de ejecución; si no los tienen, cron los ignora."
        },
        {
          "id": "tf2-16-5",
          "q": "Si no existen ni cron.allow ni cron.deny, no hay restricciones de acceso para nadie.",
          "a": true,
          "explain": "Correcto. Sin esos archivos no hay lista blanca ni negra, así que cualquiera puede usar cron."
        }
      ],
      "mc": [
        {
          "id": "mc2-16-1",
          "q": "¿Cuál es el orden correcto de los 5 campos de tiempo en una línea de crontab?",
          "options": [
            "Hora, minuto, mes, día del mes, día de la semana",
            "Minuto, hora, día del mes, mes, día de la semana",
            "Día de la semana, día del mes, mes, hora, minuto",
            "Minuto, hora, mes, día de la semana, día del mes"
          ],
          "correctIndex": 1,
          "explain": "El formato fijo es minuto, hora, día del mes, mes y día de la semana, seguido del comando."
        },
        {
          "id": "mc2-16-2",
          "q": "¿Qué comando abre el editor sobre el crontab del usuario, creándolo si no existe?",
          "options": [
            "crontab -l",
            "crontab -r",
            "crontab -e",
            "crontab -d"
          ],
          "correctIndex": 2,
          "explain": "crontab -e abre el editor sobre el crontab del usuario (ubicado en /var/spool/cron/) y lo crea si no existe."
        },
        {
          "id": "mc2-16-3",
          "q": "En crontab, ¿qué significa la expresión <code>*/15</code> en el campo de minuto?",
          "options": [
            "Al minuto 15 de cada hora",
            "Durante los primeros 15 minutos",
            "Cada 15 minutos",
            "Solo el día 15 del mes"
          ],
          "correctIndex": 2,
          "explain": "La barra indica incremento: */15 en minuto significa cada 15 minutos."
        },
        {
          "id": "mc2-16-4",
          "q": "¿Cuál es el rango válido para el campo Hora en el crontab?",
          "options": [
            "0-23",
            "1-24",
            "0-59",
            "1-12"
          ],
          "correctIndex": 0,
          "explain": "La hora del día va de 0 a 23. El 0-59 es el minuto y el 1-12 es el mes."
        },
        {
          "id": "mc2-16-5",
          "q": "¿Qué directorio predefinido de cron ejecuta sus scripts diariamente?",
          "options": [
            "/etc/cron.hourly",
            "/etc/cron.weekly",
            "/etc/cron.daily",
            "/etc/cron.monthly"
          ],
          "correctIndex": 2,
          "explain": "/etc/cron.daily corre diariamente. hourly es cada hora, weekly semanal y monthly mensual."
        }
      ],
      "ms": [
        {
          "id": "ms2-16-1",
          "q": "¿Cuáles de estos caracteres especiales del crontab están correctamente descritos?",
          "options": [
            "* = todo (cualquier valor)",
            "- = rango de valores",
            ", = lista de valores",
            "/ = incremento (cada N)",
            "@ = repetir indefinidamente"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Asterisco, guion, coma y barra están bien. El @ como 'repetir indefinidamente' no figura: lo único parecido es @reboot, que es otra cosa."
        },
        {
          "id": "ms2-16-2",
          "q": "¿Cuáles de los siguientes son directorios predefinidos de cron dentro de /etc?",
          "options": [
            "/etc/cron.hourly",
            "/etc/cron.minutely",
            "/etc/cron.daily",
            "/etc/cron.weekly",
            "/etc/cron.monthly"
          ],
          "correctIndexes": [
            0,
            2,
            3,
            4
          ],
          "explain": "Existen hourly, daily, weekly y monthly. No hay cron.minutely: ese está inventado."
        },
        {
          "id": "ms2-16-3",
          "q": "Según el apunte, ¿cuáles de estas afirmaciones sobre el control de acceso a cron son correctas?",
          "options": [
            "cron.deny es una lista negra de usuarios bloqueados",
            "cron.allow es una lista blanca: solo los listados pueden usarlo",
            "Agregar ALL a cron.deny deniega a todos",
            "crontab -e edita el archivo cron.allow",
            "El archivo /etc/crontab pertenece a un usuario común sin privilegios"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Las tres primeras son correctas. crontab -e edita el crontab del usuario, no cron.allow, y /etc/crontab pertenece a root, no a un usuario común."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-16-1",
        "front": "¿Qué es cron?",
        "back": "Un demonio (crond) que programa la ejecución automática de tareas: backups, reportes, limpieza, control de espacio o cualquier cosa que se quiera calendarizar."
      },
      {
        "id": "fc2-16-2",
        "front": "Comandos crontab -e / -l / -r",
        "back": "-e abre el editor del crontab del usuario (lo crea si no existe), -l lista el crontab actual y -r elimina el crontab del usuario."
      },
      {
        "id": "fc2-16-3",
        "front": "Los 5 campos de tiempo del crontab",
        "back": "Minuto (0-59), Hora (0-23), Día del mes (1-31), Mes (1-12 o nombre en inglés) y Día de la semana (0-7, donde 0 y 7 son domingo), seguidos del comando."
      },
      {
        "id": "fc2-16-4",
        "front": "Caracteres especiales del crontab",
        "back": "* = todo, - = rango (1-5), , = lista (1,15), / = incremento cada N (*/15 = cada 15 minutos)."
      },
      {
        "id": "fc2-16-5",
        "front": "¿Qué hace la expresión 15 8 * * *?",
        "back": "Ejecuta el comando a las 8:15 a.m. de cada día (minuto 15, hora 8, cualquier día del mes, mes y día de la semana)."
      },
      {
        "id": "fc2-16-6",
        "front": "Directorios predefinidos de cron",
        "back": "/etc/cron.hourly (cada hora), /etc/cron.daily (diario), /etc/cron.weekly (semanal) y /etc/cron.monthly (mensual). Los scripts deben tener permisos de ejecución."
      },
      {
        "id": "fc2-16-7",
        "front": "cron.allow vs cron.deny",
        "back": "cron.deny es lista negra (bloquea usuarios); cron.allow es lista blanca (solo los listados pueden usar cron). Si no existe ninguno, no hay restricciones."
      },
      {
        "id": "fc2-16-8",
        "front": "¿Por qué una tarea funciona en la terminal pero no en cron?",
        "back": "Porque cron usa el shell y el PATH definidos en el crontab, no los del usuario. La solución suele ser usar rutas absolutas o setear el PATH al inicio del script."
      }
    ]
  }
};
