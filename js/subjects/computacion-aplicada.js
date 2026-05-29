/**
 * Materia: Computación Aplicada (UP).
 * Módulo 7 — Filesystem, Links, Booteo, Shell y procesos, Automatización.
 *
 * Tipos conceptuales (ver js/content.js para Subject/Section/ContentBlock).
 */

export default {
  id: 'computacion-aplicada',
  title: 'Computación Aplicada',
  subtitle: 'Módulo 7 — Apuntes',
  tagline: 'Filesystem · Links · Booteo y systemd · Shell y procesos · Scripting y cron',
  units: {
    '1': 'Filesystem e incorporación de discos',
    '2': 'Links',
    '3': 'Booteo del sistema',
    '4': 'Shell y procesos',
    '5': 'Automatización',
  },
  sections: [
  // ---------- SECCIÓN 1 ----------
  {
    id: '1',
    unit: '1',
    title: 'Introducción a filesystem y tipos',
    criollo:
      'Un filesystem es la forma en que el SO organiza los datos en el disco: dónde está cada archivo, cómo se lee y cómo se escribe. Hay varios sabores (ext4, XFS, Btrfs, NTFS) y cada uno tiene lo suyo: algunos son rapidísimos, otros priorizan snapshots, y otros existen para hablar con Windows.',
    blocks: [
      {
        type: 'p',
        text:
          'Un filesystem es una estructura que organiza cómo se almacenan y acceden los datos en un disco o dispositivo. Este sistema de archivos actúa como un puente entre los datos físicos y el sistema operativo, permitiendo operaciones como leer, escribir, modificar y eliminar archivos.',
      },
      {
        type: 'h3',
        text: 'Tipos de filesystem más usados',
        criollo:
          'Cada uno fue pensado para algo distinto. ext4 es el caballito de batalla en Linux, XFS escala muy bien con archivos enormes, Btrfs se la juega por snapshots y compresión, y NTFS es para no pelearte con Windows.',
      },
      {
        type: 'table',
        caption: 'Cuadro comparativo de filesystems',
        headers: ['Sistema', 'Características', 'Ventajas', 'Desventajas'],
        rows: [
          [
            '<code>ext4</code>',
            'Journalizado, soporte para archivos grandes, comprobación de errores',
            'Rápido, confiable',
            'No es compatible con Windows sin software adicional',
          ],
          [
            '<code>XFS</code>',
            'Journalizado, alta eficiencia con archivos grandes',
            'Escalabilidad y rendimiento en grandes volúmenes',
            'Operaciones de redimensionado más complejas',
          ],
          [
            '<code>Btrfs</code>',
            'Journalizado, snapshots, compresión',
            'Ideal para copias de seguridad y versiones',
            'Aún en fase de optimización',
          ],
          [
            '<code>NTFS</code>',
            'Compatible con Windows, soporte para archivos grandes',
            'Interoperabilidad entre Linux y Windows',
            'Rendimiento menor en Linux comparado con otros FS nativos',
          ],
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Notá que los cuatro de la tabla son journalizados — esa parte la desarrollamos aparte en la sección siguiente porque es el truco que les da fiabilidad.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-1-1',
          q: 'Un filesystem actúa como puente entre los datos físicos del disco y el sistema operativo.',
          a: true,
          explain:
            'Verdadero. Es exactamente esa la definición: organiza el almacenamiento y permite las operaciones de leer, escribir, modificar y eliminar archivos.',
        },
        {
          id: 'tf-1-2',
          q: 'NTFS es el filesystem nativo de Linux con mejor rendimiento.',
          a: false,
          explain:
            'Falso. NTFS es de Windows; en Linux tiene rendimiento menor que los FS nativos. Sirve para interoperabilidad entre ambos.',
        },
        {
          id: 'tf-1-3',
          q: 'Btrfs ofrece snapshots y compresión.',
          a: true,
          explain:
            'Verdadero. Es uno de sus diferenciales y por eso se recomienda para copias de seguridad y manejo de versiones.',
        },
        {
          id: 'tf-1-4',
          q: 'XFS está pensado para archivos chicos y operaciones de redimensionado triviales.',
          a: false,
          explain:
            'Falso. XFS destaca por su eficiencia con archivos grandes y grandes volúmenes; las operaciones de redimensionado son más complejas.',
        },
      ],
      mc: [
        {
          id: 'mc-1-1',
          q: '¿Qué filesystem se recomienda cuando se necesita interoperabilidad entre Linux y Windows?',
          options: ['ext4', 'XFS', 'Btrfs', 'NTFS'],
          correctIndex: 3,
          explain:
            'NTFS es nativo de Windows y permite leer/escribir desde ambos sistemas; el resto son nativos de Linux y no son compatibles con Windows sin software extra.',
        },
        {
          id: 'mc-1-2',
          q: '¿Cuál es el rasgo distintivo de Btrfs según el apunte?',
          options: [
            'Compatibilidad nativa con Windows',
            'Snapshots y compresión',
            'Cero overhead por journaling',
            'No requiere comprobación de errores',
          ],
          correctIndex: 1,
          explain:
            'El apunte destaca snapshots y compresión como sus ventajas, ideales para backups y versiones.',
        },
        {
          id: 'mc-1-3',
          q: '¿Qué hace el filesystem dentro del sistema operativo?',
          options: [
            'Compila el kernel para nuevos discos',
            'Organiza cómo se almacenan y acceden los datos en el disco',
            'Reemplaza al gestor de arranque',
            'Convierte un disco en RAM',
          ],
          correctIndex: 1,
          explain:
            'Es una estructura que organiza el almacenamiento y permite las operaciones básicas sobre archivos.',
        },
      ],
      ms: [
        {
          id: 'ms-1-1',
          q: '¿Qué operaciones permite un filesystem según el apunte?',
          options: [
            'Leer archivos',
            'Escribir archivos',
            'Modificar archivos',
            'Eliminar archivos',
            'Compilar el kernel del SO',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las cuatro primeras son textuales. Compilar el kernel no es función del filesystem.',
        },
        {
          id: 'ms-1-2',
          q: '¿Qué filesystems del cuadro son journalizados?',
          options: [
            'ext4',
            'XFS',
            'Btrfs',
            'NTFS',
            'tmpfs (RAM disk)',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Los cuatro del cuadro comparativo son journalizados. tmpfs es un FS en RAM y no aparece en el apunte.',
        },
        {
          id: 'ms-1-3',
          q: '¿Qué afirmaciones sobre los filesystems del cuadro son correctas?',
          options: [
            'ext4 es rápido y confiable',
            'XFS es muy eficiente con archivos grandes',
            'Btrfs ofrece snapshots y compresión',
            'NTFS permite interoperabilidad Linux-Windows',
            'ext4 es nativo de Windows',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. ext4 es nativo de Linux y NO es compatible con Windows sin software adicional.',
        },
        {
          id: 'ms-1-4',
          q: '¿Qué desventajas menciona el apunte para los filesystems del cuadro?',
          options: [
            'ext4: no es compatible con Windows sin software adicional',
            'XFS: operaciones de redimensionado más complejas',
            'Btrfs: aún en fase de optimización',
            'NTFS: rendimiento menor en Linux comparado con FS nativos',
            'ext4: no es journalizado',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del cuadro. ext4 SÍ es journalizado.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-1-1',
        front: 'Filesystem',
        back:
          'Estructura que organiza cómo se almacenan y acceden los datos en un disco. Actúa como puente entre los datos físicos y el sistema operativo.',
      },
      {
        id: 'fc-1-2',
        front: 'ext4',
        back:
          'Filesystem journalizado, rápido y confiable, soporta archivos grandes. No es compatible con Windows sin software adicional.',
      },
      {
        id: 'fc-1-3',
        front: 'XFS',
        back:
          'Journalizado, muy eficiente con archivos grandes. Escala y rinde muy bien en grandes volúmenes, pero redimensionar es más complejo.',
      },
      {
        id: 'fc-1-4',
        front: 'Btrfs',
        back:
          'Journalizado, con snapshots y compresión. Ideal para backups y versiones, aún en fase de optimización.',
      },
      {
        id: 'fc-1-5',
        front: 'NTFS',
        back:
          'Filesystem de Windows con soporte para archivos grandes. Permite interoperabilidad Linux-Windows, pero rinde menos en Linux que los FS nativos.',
      },
    ],
  },

  // ---------- SECCIÓN 2 ----------
  {
    id: '2',
    unit: '1',
    title: 'Filesystems journalizados',
    criollo:
      'El journaling es un cuaderno aparte donde el filesystem anota lo que va a hacer antes de hacerlo. Si se corta la luz a mitad de camino, al reiniciar lee el cuaderno y termina o tira para atrás la operación: nada queda a medias. Hay tres variantes según qué se anota y con qué prioridad.',
    blocks: [
      {
        type: 'p',
        text:
          'El sistema de archivos journalizado (o con registro) es una tecnología diseñada para mejorar la integridad y fiabilidad de los datos en sistemas de almacenamiento. Registra cada cambio en un área especial llamada <strong>"journal"</strong> (o diario) antes de aplicarlo al sistema de archivos principal. La finalidad es proteger la integridad de los datos y reducir el tiempo de recuperación en caso de un fallo, como un corte de energía o un error del sistema.',
      },
      {
        type: 'h3',
        text: 'Cómo trabaja el journal',
        criollo:
          'Primero anota la operación en el journal y recién después la aplica al filesystem. Si no quedó bien anotada, la operación no se aplica. Y si el sistema se cae en el medio, al volver el journal indica qué quedó pendiente y reconstruye los cambios.',
      },
      {
        type: 'p',
        text:
          'Cuando se realiza una operación (por ejemplo, la creación, eliminación o modificación de un archivo), el filesystem journalizado primero registra la operación en el journal. Después de registrar el cambio, se aplica la operación en el sistema de archivos principal. Esto significa que la acción completa solo se lleva a cabo si se asegura que el cambio se ha registrado correctamente.',
      },
      {
        type: 'p',
        text:
          'En caso de fallo o que el sistema se apague de manera inesperada, el journal permite "reconstruir" los cambios pendientes y dejarlos en el estado correcto al reiniciar, minimizando el riesgo de archivos corruptos.',
      },
      {
        type: 'h3',
        text: 'Tipos de journaling',
        criollo:
          'Tres sabores: completo (anota todo, lento), de metadatos (anota solo lo estructural, más rápido), y asíncrono/sincrónico (decisión de cuándo escribir, integridad versus velocidad).',
      },
      {
        type: 'p',
        text: '<strong>Journaling completo.</strong> Registra tanto los datos de las operaciones como la estructura de los metadatos (información sobre archivos y directorios), pero es el que más recursos consume y el más lento.',
      },
      {
        type: 'p',
        text: '<strong>Journaling de metadatos.</strong> Solo registra los cambios en los metadatos del sistema de archivos, como la ubicación de un archivo o su nombre. Es más rápido, aunque menos seguro para los datos de los archivos en sí.',
      },
      {
        type: 'p',
        text: '<strong>Journaling asíncrono o sincrónico.</strong> Define cómo se escriben los cambios en el journal priorizando entre la integridad de datos o la velocidad de escritura.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'El apunte describe estos tres tipos a nivel concepto: cuándo elegir uno u otro depende del compromiso entre rendimiento y resistencia a fallos que necesites en cada caso.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-2-1',
          q: 'En un filesystem journalizado los cambios se aplican primero al filesystem principal y después se anotan en el journal.',
          a: false,
          explain:
            'Falso. Es al revés: primero se registran en el journal y, una vez confirmado, se aplican al filesystem principal.',
        },
        {
          id: 'tf-2-2',
          q: 'El journaling permite reconstruir los cambios pendientes al reiniciar tras un fallo.',
          a: true,
          explain:
            'Verdadero. Justamente para eso existe: para reducir corrupciones después de un corte de energía o caída del sistema.',
        },
        {
          id: 'tf-2-3',
          q: 'El journaling completo es más rápido que el de metadatos porque anota menos información.',
          a: false,
          explain:
            'Falso. El completo registra datos y metadatos, por lo que consume más recursos y es el más lento. El de metadatos es el rápido.',
        },
        {
          id: 'tf-2-4',
          q: 'El journaling de metadatos no garantiza la integridad de los datos del archivo en sí, solo de su estructura.',
          a: true,
          explain:
            'Verdadero. Es más rápido pero menos seguro para los datos: solo registra los metadatos (ubicación, nombre, etc.).',
        },
      ],
      mc: [
        {
          id: 'mc-2-1',
          q: '¿Qué objetivo persigue el journaling?',
          options: [
            'Acelerar la lectura secuencial',
            'Proteger la integridad de los datos y reducir el tiempo de recuperación ante fallos',
            'Comprimir los archivos al escribir',
            'Eliminar la necesidad de fsck en cualquier escenario',
          ],
          correctIndex: 1,
          explain:
            'El propósito es proteger la integridad y bajar el costo de recuperación tras un corte de energía u otro fallo.',
        },
        {
          id: 'mc-2-2',
          q: '¿Cuál de los tipos de journaling registra tanto datos como metadatos?',
          options: ['De metadatos', 'Asíncrono', 'Completo', 'Sincrónico'],
          correctIndex: 2,
          explain:
            'El completo registra ambos. Es el más seguro pero también el más lento y costoso.',
        },
        {
          id: 'mc-2-3',
          q: 'El journaling asíncrono/sincrónico define principalmente:',
          options: [
            'Si el journal se cifra o no',
            'Cómo se escriben los cambios priorizando integridad vs. velocidad',
            'El tamaño máximo del journal',
            'La compatibilidad con NTFS',
          ],
          correctIndex: 1,
          explain:
            'Es la decisión de cuándo escribir al journal: priorizando la integridad de los datos o la velocidad de escritura.',
        },
      ],
      ms: [
        {
          id: 'ms-2-1',
          q: '¿Cuáles son los tres tipos de journaling descritos en el apunte?',
          options: [
            'Journaling completo',
            'Journaling de metadatos',
            'Journaling asíncrono/sincrónico',
            'Journaling cifrado',
            'Journaling sin retorno',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Los tres tipos textuales son completo, de metadatos y asíncrono/sincrónico. Los otros no aparecen en el apunte.',
        },
        {
          id: 'ms-2-2',
          q: '¿Qué afirmaciones sobre cómo trabaja el journal son correctas?',
          options: [
            'Primero se registra la operación en el journal',
            'Después se aplica al filesystem principal',
            'La acción completa solo se aplica si se asegura el registro',
            'Tras un fallo, el journal permite reconstruir los cambios pendientes',
            'Primero se aplica al filesystem y después se registra en el journal',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El último orden es justamente el opuesto al que describe el apunte.',
        },
        {
          id: 'ms-2-3',
          q: 'Sobre el journaling completo, ¿qué afirmaciones son correctas?',
          options: [
            'Registra datos + metadatos',
            'Es el que más recursos consume',
            'Es el más lento de los tres tipos',
            'Es el más rápido porque registra menos información',
            'Da más garantía de integridad',
          ],
          correctIndexes: [0, 1, 2, 4],
          explain:
            'Las primeras tres y la quinta son textuales. Justamente es el MÁS LENTO, no el más rápido.',
        },
        {
          id: 'ms-2-4',
          q: 'Sobre el journaling de metadatos, ¿qué es correcto?',
          options: [
            'Solo registra cambios en los metadatos (ubicación, nombre, etc.)',
            'Es más rápido que el completo',
            'Es menos seguro para los datos de los archivos en sí',
            'Registra también los datos del archivo',
            'Su finalidad principal es proteger la integridad de los datos del archivo',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son textuales. NO registra los datos del archivo — eso es justamente lo que lo hace más rápido pero menos seguro.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-2-1',
        front: 'Journal',
        back:
          'Área especial donde un filesystem journalizado registra los cambios antes de aplicarlos al filesystem principal.',
      },
      {
        id: 'fc-2-2',
        front: 'Orden de operaciones en journaling',
        back:
          '1) Se registra el cambio en el journal. 2) Si quedó bien registrado, se aplica al filesystem principal. Si falla, se reconstruye al reiniciar.',
      },
      {
        id: 'fc-2-3',
        front: 'Journaling completo',
        back:
          'Registra datos + metadatos. Es el más seguro pero el más lento y el que más recursos consume.',
      },
      {
        id: 'fc-2-4',
        front: 'Journaling de metadatos',
        back:
          'Solo registra cambios en los metadatos (ubicación, nombre, etc.). Más rápido, menos seguro para los datos del archivo en sí.',
      },
      {
        id: 'fc-2-5',
        front: 'Journaling asíncrono o sincrónico',
        back:
          'Define cómo se escriben los cambios al journal priorizando entre integridad de datos y velocidad de escritura.',
      },
      {
        id: 'fc-2-6',
        front: '¿Para qué sirve el journal tras un fallo?',
        back:
          'Permite reconstruir los cambios pendientes al reiniciar, dejándolos en el estado correcto y minimizando archivos corruptos.',
      },
    ],
  },

  // ---------- SECCIÓN 3 ----------
  {
    id: '3',
    unit: '1',
    title: 'Incorporar un disco en la VM (VirtualBox)',
    criollo:
      'Antes de hacer cualquier cosa con el disco desde Linux, hay que enchufarlo a la máquina virtual desde el VirtualBox. Es paso a paso por la interfaz: con la VM apagada vas a Settings → Storage → Controller, creás un disco nuevo VDI, no marcás "pre-allocate Full Size" y lo confirmás.',
    blocks: [
      {
        type: 'p',
        text:
          'Para incorporar un disco nuevo al virtualizador (VirtualBox) hay que seguir un procedimiento desde la interfaz, con la máquina apagada. Esto agrega el disco a nivel virtualizador; recién después el SO invitado lo va a ver como dispositivo de bloque.',
      },
      {
        type: 'ol',
        items: [
          'Con la máquina apagada, seleccionar la opción <strong>Settings</strong> (Configuración).',
          'En la sección <strong>Storage</strong> (Almacenamiento), posicionarse sobre <strong>Controller</strong> (controlador) y hacer clic en "Agregar nuevo disco".',
          'En el selector de disco, elegir <strong>Create</strong> (Crear).',
          'En las opciones del disco a crear, indicar el path por defecto, el tamaño, y el tipo de extensión <strong>VDI</strong>. Presionar <strong>Finish</strong> (Finalizar).',
          'Al volver al Selector de Discos, quedando parados sobre el disco recién generado, seleccionar el botón <strong>Choose</strong> (Seleccionar).',
          'En el paso final, ver el disco agregado y confirmar con <strong>OK</strong>. Encender la máquina nuevamente.',
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'El casillero <strong>"pre-allocate Full Size"</strong> debe quedar <strong>destildado</strong> al crear el disco. Si lo dejás marcado, el VDI ocupa el tamaño total desde el principio en lugar de crecer a demanda.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Una vez que arrancás la VM con el disco agregado, todavía no podés guardar datos: el kernel lo va a ver pero está vacío. Para usarlo hay que inicializarlo, formatearlo y montarlo — eso lo cubrimos en las próximas secciones.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-3-1',
          q: 'Para agregar un disco nuevo a la VM en VirtualBox, conviene hacerlo con la máquina encendida.',
          a: false,
          explain:
            'Falso. El procedimiento empieza con la máquina apagada y luego se entra a Settings.',
        },
        {
          id: 'tf-3-2',
          q: 'El tipo de extensión recomendado al crear el disco en VirtualBox es VDI.',
          a: true,
          explain:
            'Verdadero. El apunte indica dejar la opción ofrecida por default, que es VDI.',
        },
        {
          id: 'tf-3-3',
          q: 'El casillero "pre-allocate Full Size" debe quedar tildado para que el disco funcione.',
          a: false,
          explain:
            'Falso. El apunte aclara explícitamente que debe quedar destildado.',
        },
      ],
      mc: [
        {
          id: 'mc-3-1',
          q: '¿Desde qué sección de Settings se agrega el disco nuevo?',
          options: ['System', 'Display', 'Storage', 'Network'],
          correctIndex: 2,
          explain:
            'En <strong>Storage</strong>, posicionado sobre el Controller, se hace clic en "Agregar nuevo disco".',
        },
        {
          id: 'mc-3-2',
          q: '¿Cuál es el orden correcto para incorporar un disco nuevo en VirtualBox?',
          options: [
            'Encender VM → Settings → Storage → Choose → Create',
            'Apagar VM → Settings → Storage → Controller → Crear disco VDI → Choose → OK',
            'Apagar VM → Storage → Pre-allocate Full Size → Finalizar',
            'Encender VM → fdisk → mount → reboot',
          ],
          correctIndex: 1,
          explain:
            'Es el flujo descripto: apagar, entrar a Settings → Storage, agregar nuevo disco desde el Controller, crear VDI, seleccionar y confirmar con OK.',
        },
      ],
      ms: [
        {
          id: 'ms-3-1',
          q: '¿Qué pasos forman parte del procedimiento para incorporar un disco a la VM en VirtualBox?',
          options: [
            'Tener la máquina apagada',
            'Entrar a Settings → Storage',
            'Pararse sobre el Controller y "Agregar nuevo disco"',
            'Crear el disco con extensión VDI',
            'Modificar el archivo /etc/fstab desde el host',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del apunte. /etc/fstab pertenece al SO invitado y se modifica recién al final del flujo, no al agregar el disco al virtualizador.',
        },
        {
          id: 'ms-3-2',
          q: '¿Qué afirmaciones sobre la configuración del disco virtual son correctas?',
          options: [
            'El tipo de extensión por defecto es VDI',
            'Se debe indicar el path por defecto y el tamaño',
            'El casillero "pre-allocate Full Size" debe quedar destildado',
            'Se confirma con OK desde el diálogo final',
            'Pre-allocate Full Size debe quedar marcado para que funcione',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El apunte advierte explícitamente: pre-allocate Full Size va DESTILDADO.',
        },
        {
          id: 'ms-3-3',
          q: 'Sobre el flujo desde el Selector de Discos, ¿qué pasos corresponden?',
          options: [
            'Quedar parados sobre el disco recién generado',
            'Hacer clic en Choose (Seleccionar)',
            'Ver el disco agregado y confirmar con OK',
            'Encender la máquina nuevamente',
            'Reiniciar el host (la PC física) antes de Choose',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. No hace falta reiniciar el host: alcanza con confirmar y encender la VM.',
        },
        {
          id: 'ms-3-4',
          q: '¿Qué afirmaciones sobre el estado del disco recién incorporado son correctas?',
          options: [
            'El kernel del SO invitado lo va a ver al iniciar la VM',
            'Antes de poder guardar datos hay que inicializarlo',
            'Luego hay que formatearlo',
            'Luego hay que montarlo',
            'Recién agregado ya tiene un filesystem listo para escribir',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del callout en criollo. Un disco recién agregado está VACÍO: hay que inicializarlo, formatearlo y montarlo.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-3-1',
        front: '¿Cuándo se incorpora un disco a la VM?',
        back: 'Con la máquina virtual <strong>apagada</strong>, desde Settings → Storage.',
      },
      {
        id: 'fc-3-2',
        front: 'Tipo de extensión por defecto en VirtualBox',
        back: 'VDI. Se deja la opción ofrecida por default.',
      },
      {
        id: 'fc-3-3',
        front: '"Pre-allocate Full Size"',
        back:
          'Casillero que debe quedar <strong>destildado</strong> al crear el disco para que crezca a demanda y no ocupe el tamaño total desde el inicio.',
      },
      {
        id: 'fc-3-4',
        front: 'Pasos clave en VirtualBox',
        back:
          'Apagar VM → Settings → Storage → Controller → "Agregar nuevo disco" → Create → tamaño + VDI → Finish → Choose → OK.',
      },
    ],
  },

  // ---------- SECCIÓN 4 ----------
  {
    id: '4',
    unit: '1',
    title: 'Inicializar y particionar el disco (lsblk, fdisk)',
    criollo:
      'Después de enchufar el disco a la VM, hay que decirle a Linux que se entere. Con <code>lsblk</code> chequeás que el kernel lo vea. Después, con <code>fdisk</code>, le creás una partición primaria respondiendo unas pocas preguntas del menú: <code>n</code> (nueva), <code>p</code> (primaria), <code>1</code> (la primera), Enter en el sector inicial, <code>+10G</code> en el final, y <code>w</code> para escribir. Listo, el disco está particionado.',
    blocks: [
      {
        type: 'p',
        text:
          'Una vez incorporado el disco a la máquina, hay que confirmar que el kernel lo reconoció y lo incorporó como dispositivo. Para eso se utiliza el comando <code>lsblk</code>, que lista todos los discos disponibles.',
      },
      {
        type: 'h3',
        text: 'Verificar con lsblk',
        criollo:
          'lsblk lista los dispositivos de bloque (discos, SSDs, particiones, removibles). Cada fila trae unas columnas que conviene saber leer.',
      },
      {
        type: 'p',
        text:
          'El comando <code>lsblk</code> lista los dispositivos de bloque conectados al sistema, como discos, unidades SSD, particiones y otros dispositivos de almacenamiento. Al ejecutarlo aparecen estas columnas:',
      },
      {
        type: 'ul',
        items: [
          '<code>NAME</code>: nombre del dispositivo, como <code>sda</code>, <code>sdb</code>, <code>nvme0n1</code>, etc.',
          '<code>MAJ</code>: identificador del dispositivo.',
          '<code>RM</code>: indica si el dispositivo es removible (<code>1</code> = removible, <code>0</code> = no removible).',
          '<code>SIZE</code>: tamaño del dispositivo o la partición.',
          '<code>RO</code>: indica si es de solo lectura.',
          '<code>TYPE</code>: tipo de dispositivo.',
          '<code>MOUNTPOINT</code>: punto de montado (el directorio al que está asociado).',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/lsblk-output.png',
        alt: 'Salida del comando lsblk mostrando el disco sda y sus 6 particiones.',
        caption: 'Salida de lsblk: el disco sda con 6 particiones (sda1, sda2, sda5–sda8) y sus tamaños, tipos y puntos de montaje.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'El prefijo <code>sd*</code> proviene de "SCSI DISK", aunque hoy se aplica también a otros dispositivos de almacenamiento. El asterisco corresponde a una letra asignada en orden (a, b, c, ...) según el número de dispositivos detectados en el sistema. En el apunte de ejemplo aparece <code>sda</code> con 6 particiones: <code>sda1</code>, <code>sda2</code>, <code>sda5</code>, <code>sda6</code>, <code>sda7</code> y <code>sda8</code>.',
      },
      {
        type: 'h3',
        text: 'Los 4 pasos para disponibilizar un disco',
        criollo:
          'Después de ver el disco con lsblk, esta es la receta entera. En esta sección hacemos el (1) inicializar; el resto va en la sección 5.',
      },
      {
        type: 'ol',
        items: [
          'Inicializarlo (crear la partición con <code>fdisk</code>).',
          'Formatearlo (darle un filesystem con <code>mkfs</code>).',
          'Montarlo (asociarlo a un directorio con <code>mount</code>).',
          'Agregarlo al <code>/etc/fstab</code> para que persista al reiniciar.',
        ],
      },
      {
        type: 'h3',
        text: 'Particionar con fdisk',
        criollo:
          'fdisk es la herramienta clásica de particionado. Te abre un menú interactivo: n (nueva), p (primaria), 1 (número), Enter en el sector inicial, +10G en el final, y w para escribir. Si te equivocás, no escribís con w y no pasó nada.',
      },
      {
        type: 'p',
        text:
          'Para inicializar el disco se utiliza el comando <code>fdisk</code>, que es la herramienta de particionado de discos. En el ejemplo se trabaja sobre un disco denominado <code>sdd</code> por su orden:',
      },
      {
        type: 'code',
        code: 'fdisk /dev/sdd',
      },
      {
        type: 'p',
        text: 'Una vez dentro del menú de fdisk, los pasos para crear la partición son:',
      },
      {
        type: 'ol',
        items: [
          'Presionar <code>n</code> para indicar que se va a generar una partición nueva.',
          'Presionar <code>p</code> para indicar que la partición es del tipo <strong>primaria</strong>.',
          'Presionar <code>1</code> para indicar que se crea una sola partición.',
          'Indicar el sector inicial: lo normal es presionar <strong>Enter</strong> para tomar el valor que ofrece fdisk por default (por ejemplo <code>2048</code>), ya que el comando conoce a partir de dónde hay disponibilidad.',
          'Indicar el sector final. Conviene hacerlo en unidades (Kbyte, Megabyte, Gigabyte, Terabyte o Petabyte) en lugar de sectores. En el ejemplo se asignan 10 GB escribiendo <code>+10G</code>.',
          'Presionar <code>w</code> (Write) para guardar los cambios.',
        ],
      },
      {
        type: 'p',
        text:
          'Si se desea confirmar que la partición está creada, se puede volver a entrar con <code>fdisk /dev/sdd</code> y presionar <code>p</code>, que imprime por pantalla un resumen:',
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/fdisk-print-summary.png',
        alt: 'Salida de fdisk al presionar p: resumen del disco con la partición sdd1 de 10 GB.',
        caption: 'Resumen impreso por fdisk con la opción p: confirma la creación de /dev/sdd1 (10 GB, tipo Linux).',
      },
      {
        type: 'p',
        text:
          'También se puede ejecutar <code>lsblk</code> nuevamente para ver la nueva partición listada bajo el disco:',
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/lsblk-after-partition.png',
        alt: 'Salida de lsblk /dev/sdd mostrando el disco sdd con la partición sdd1 de 10 GB.',
        caption: 'lsblk /dev/sdd después del particionado: el disco sdd (20G) ya tiene la partición sdd1 (10G) colgando debajo.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-4-1',
          q: 'lsblk lista los dispositivos de bloque conectados al sistema.',
          a: true,
          explain:
            'Verdadero. Muestra discos, SSDs, particiones y otros dispositivos de almacenamiento.',
        },
        {
          id: 'tf-4-2',
          q: 'En la columna RM, el valor 1 indica que el dispositivo NO es removible.',
          a: false,
          explain:
            'Falso. Al revés: 1 indica removible, 0 indica no removible.',
        },
        {
          id: 'tf-4-3',
          q: 'En el menú de fdisk, la tecla w sirve para escribir y guardar los cambios.',
          a: true,
          explain:
            'Verdadero. w (Write) confirma y persiste la partición.',
        },
        {
          id: 'tf-4-4',
          q: 'Solo se puede crear una partición indicando el sector final exacto, no se acepta una unidad como +10G.',
          a: false,
          explain:
            'Falso. El apunte recomienda usar unidades (Kbyte, Megabyte, Gigabyte, etc.) escribiendo por ejemplo +10G.',
        },
        {
          id: 'tf-4-5',
          q: 'El prefijo sd en sda viene de "SCSI DISK".',
          a: true,
          explain:
            'Verdadero. Aunque hoy se usa también para otros tipos de almacenamiento, el origen es SCSI DISK; la letra final es asignada en orden (a, b, c...).',
        },
      ],
      mc: [
        {
          id: 'mc-4-1',
          q: '¿Cuál es la secuencia correcta de teclas en fdisk para crear una partición primaria de 10 GB?',
          options: [
            'p → n → 1 → Enter → +10G → q',
            'n → p → 1 → Enter → +10G → w',
            'n → e → 1 → 10 → w',
            'fdisk -create 10G /dev/sdd',
          ],
          correctIndex: 1,
          explain:
            'n (nueva) → p (primaria) → 1 (número de partición) → Enter (sector inicial por default) → +10G (tamaño) → w (escribir).',
        },
        {
          id: 'mc-4-2',
          q: '¿Qué columna de lsblk indica el directorio al que está asociado el dispositivo?',
          options: ['NAME', 'TYPE', 'MOUNTPOINT', 'MAJ'],
          correctIndex: 2,
          explain:
            'MOUNTPOINT muestra el punto de montaje. Si el dispositivo no está montado, aparece vacío.',
        },
        {
          id: 'mc-4-3',
          q: '¿Cuáles son los 4 pasos fundamentales para disponibilizar un disco nuevo?',
          options: [
            'Encender VM, instalar drivers, montar, reiniciar',
            'Inicializar, formatear, montar y agregarlo al /etc/fstab',
            'Particionar, cifrar, comprimir y registrar en GRUB',
            'fdisk, lsblk, df, du',
          ],
          correctIndex: 1,
          explain:
            'Los 4 pasos: (1) inicializar con fdisk, (2) formatear con mkfs, (3) montar con mount, (4) agregar al /etc/fstab para que persista.',
        },
      ],
      ms: [
        {
          id: 'ms-4-1',
          q: '¿Cuáles son los 4 pasos para disponibilizar un disco nuevo en Linux?',
          options: [
            'Inicializarlo (crear la partición con fdisk)',
            'Formatearlo (con mkfs)',
            'Montarlo (con mount)',
            'Agregarlo al /etc/fstab para que persista al reiniciar',
            'Compilar el kernel con soporte para el FS',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Los cuatro pasos son textuales. Recompilar el kernel no es parte del flujo: los FS comunes ya vienen soportados.',
        },
        {
          id: 'ms-4-2',
          q: '¿Qué columnas devuelve lsblk según el apunte?',
          options: [
            'NAME',
            'SIZE',
            'TYPE',
            'MOUNTPOINT',
            'INODE',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'NAME, MAJ, RM, SIZE, RO, TYPE y MOUNTPOINT son las columnas textuales. INODE no es una columna de lsblk.',
        },
        {
          id: 'ms-4-3',
          q: 'Sobre el menú interactivo de fdisk para crear una partición primaria, ¿qué teclas corresponden?',
          options: [
            'n para indicar partición nueva',
            'p para indicar primaria',
            '1 para una sola partición (número)',
            'w para escribir y guardar los cambios',
            'q para borrar el disco',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. q es quit (sale sin escribir) — no borra el disco.',
        },
        {
          id: 'ms-4-4',
          q: '¿Qué afirmaciones sobre lsblk y los nombres de dispositivos son correctas?',
          options: [
            'El prefijo sd* proviene de "SCSI DISK"',
            'La letra final se asigna en orden (a, b, c...)',
            'lsblk muestra el punto de montaje si lo tiene',
            'lsblk lista discos, SSDs, particiones y dispositivos removibles',
            'sda es siempre el disco más nuevo agregado al sistema',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. sda es el PRIMER disco detectado, no el más nuevo — la letra avanza con cada nuevo dispositivo.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-4-1',
        front: 'lsblk',
        back:
          'Lista los dispositivos de bloque conectados al sistema (discos, SSDs, particiones, removibles).',
      },
      {
        id: 'fc-4-2',
        front: 'Columnas de lsblk',
        back:
          'NAME, MAJ, RM (removible 1/0), SIZE, RO (solo lectura), TYPE, MOUNTPOINT (directorio asociado).',
      },
      {
        id: 'fc-4-3',
        front: 'Prefijo sd*',
        back:
          'Viene de SCSI DISK. La letra final se asigna en orden (a, b, c...) según los dispositivos detectados.',
      },
      {
        id: 'fc-4-4',
        front: '4 pasos para disponibilizar un disco',
        back: '1) Inicializar (fdisk). 2) Formatear (mkfs). 3) Montar (mount). 4) Agregar al /etc/fstab.',
      },
      {
        id: 'fc-4-5',
        front: 'fdisk',
        back:
          'Herramienta de particionado de discos. Se invoca con fdisk /dev/sdX y se opera con un menú interactivo.',
      },
      {
        id: 'fc-4-6',
        front: 'Secuencia fdisk (partición primaria 10G)',
        back:
          'n (nueva) → p (primaria) → 1 (número) → Enter (sector inicial default) → +10G (tamaño) → w (escribir).',
      },
      {
        id: 'fc-4-7',
        front: '¿Cómo confirmar una partición ya creada?',
        back:
          'Volver a entrar con fdisk /dev/sdX y presionar p para ver el resumen, o ejecutar lsblk nuevamente.',
      },
    ],
  },

  // ---------- SECCIÓN 5 ----------
  {
    id: '5',
    unit: '1',
    title: 'Formatear, montar y persistir (mkfs, mount, /etc/fstab)',
    criollo:
      'Una vez que tenés la partición creada, hay que darle un filesystem con <code>mkfs</code>, montarla en un directorio con <code>mount</code>, y dejar la línea anotada en <code>/etc/fstab</code> para que se monte sola en cada arranque. Si te saltás el último paso, al reiniciar la VM perdés el montaje.',
    blocks: [
      {
        type: 'h3',
        text: 'Formateo con mkfs',
        criollo:
          'mkfs le da al disco un filesystem para que pueda recibir datos. La opción -t dice qué tipo (ext4 en el ejemplo).',
      },
      {
        type: 'p',
        text:
          'Ahora que el disco tiene una partición del tamaño deseado, hay que crear su filesystem para que pueda recibir datos. Para darle formato se utiliza el comando <code>mkfs</code> con la opción <code>-t</code> para indicar el filesystem. En el ejemplo se usa <code>ext4</code>, que es uno de los más utilizados:',
      },
      {
        type: 'code',
        code: 'mkfs -t ext4 /dev/sdd1',
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/mkfs-output.png',
        alt: 'Salida del comando mkfs creando el filesystem ext4 sobre /dev/sdd1.',
        caption: 'Salida típica de mkfs: crea bloques, inodos, journal y escribe el superblock — al final, el filesystem queda listo para recibir datos.',
      },
      {
        type: 'h3',
        text: 'Montar el disco',
        criollo:
          'Montar es enganchar el disco a un directorio del árbol "/". A partir de ahí, todo lo que escribís en ese directorio va al disco nuevo. Se usa el comando mount.',
      },
      {
        type: 'p',
        text:
          'La máquina ya tiene el disco agregado, inicializado y formateado. Ahora viene la etapa de montarlo para incluirlo al sistema de archivos. Todos los archivos y directorios están organizados en una estructura jerárquica única, denominada sistema de archivos, con raíz en el directorio <code>/</code>. Cuando se monta un disco en un directorio, se conecta el dispositivo de almacenamiento (un disco rígido o una partición) a una ubicación dentro del sistema de archivos, permitiendo que el contenido del disco sea accesible a través de ese directorio. La acción se realiza con el comando <code>mount</code>.',
      },
      {
        type: 'p',
        text:
          'Para esta práctica, primero se crea un directorio nuevo donde se va a montar la partición (no siempre es necesario: también se podría migrar un directorio existente). En el ejemplo se llama <code>VENTAS</code> y se crea en la raíz:',
      },
      {
        type: 'code',
        code: 'root@debian11-CA:/# mkdir VENTAS',
      },
      {
        type: 'p',
        text:
          'El comando <code>df</code> muestra el uso de espacio en disco en el sistema por cada partición. Agregando <code>-h</code> (human-readable) se ve el consumo y en qué partición está montado cada cosa:',
      },
      {
        type: 'code',
        code: 'df -h',
      },
      {
        type: 'p',
        text: 'Para montar <code>VENTAS</code> en la partición <code>/dev/sdd1</code>:',
      },
      {
        type: 'code',
        code: 'mount /dev/sdd1 /VENTAS/',
      },
      {
        type: 'p',
        text:
          'Si se vuelve a ejecutar <code>df -h</code>, ya se ve que el directorio creado está "montado" sobre <code>/dev/sdd1</code>:',
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/df-h-after-mount.png',
        alt: 'Salida de df -h mostrando la partición /dev/sdd1 montada en /VENTAS al final de la lista.',
        caption: 'df -h después del mount: la última línea muestra /dev/sdd1 (9.8G) montada en /VENTAS — el disco quedó disponible.',
      },
      {
        type: 'h3',
        text: 'Persistir con /etc/fstab',
        criollo:
          'El montaje hecho con mount dura hasta que reinicies la VM. Si querés que se monte solo en cada arranque, hay que dejar la línea en /etc/fstab. Los comandos mount y umount leen ese archivo.',
      },
      {
        type: 'p',
        text:
          'El archivo <code>fstab</code> se encuentra en el directorio <code>/etc</code> y se utiliza para configurar la lista de discos y puntos de montaje del sistema operativo, entre otras configuraciones. También se pueden declarar montajes hacia otros servidores que interese tener disponibles de forma local o a través de la red.',
      },
      {
        type: 'p',
        text:
          'Los comandos <code>mount</code> (para montar directorios en particiones) y <code>umount</code> (la acción contraria) leen este archivo para determinar qué opciones utilizar al momento del montaje.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/fstab-default.png',
        alt: 'Contenido por defecto del archivo /etc/fstab con las particiones del sistema declaradas por UUID.',
        caption: 'Aspecto típico de /etc/fstab: cada partición declarada en una línea con sus seis columnas (file system, mount point, type, options, dump, pass).',
      },
      {
        type: 'h3',
        text: 'Columnas del archivo /etc/fstab',
        criollo:
          'Cada línea de fstab tiene seis columnas. Las clave: qué partición/UUID, dónde montarla, qué filesystem es, con qué opciones, y dos números para backup y revisión al arrancar.',
      },
      {
        type: 'ul',
        items: [
          '<code>filesystem</code>: directorio lógico que hace referencia a una partición o recurso. Se puede declarar el path (<code>/dev/sd*</code>) o el UUID (identificador del disco).',
          '<code>mount point</code>: carpeta en la que se proyectarán los datos del sistema de archivos (cualquier directorio).',
          '<code>type</code>: tipo de filesystem en el que se formateó la partición (<code>ext2</code>, <code>ext3</code>, <code>ext4</code>, <code>xfs</code>, etc.).',
          '<code>options</code>: parámetros que <code>mount</code> utilizará al montar (<code>noauto</code>, <code>user</code>, <code>password</code>, etc.).',
          '<code>dump-freq</code>: parámetro que utiliza <code>dump</code> para hacer backup del sistema de archivos. Si es <code>0</code>, no se toma en cuenta para backup.',
          '<code>pass-num</code>: indica el orden en que <code>fsck</code> revisará la partición en busca de errores durante el inicio. Si es <code>0</code>, el dispositivo no se revisa.',
        ],
      },
      {
        type: 'h3',
        text: 'Valores típicos del campo options',
        criollo:
          'Acá se controla cómo se monta: lectura/escritura, si lo puede montar un usuario normal, si se puede ejecutar binarios desde ahí, etc.',
      },
      {
        type: 'ul',
        items: [
          '<code>defaults</code>: usa las opciones predeterminadas para el montaje.',
          '<code>ro</code> / <code>rw</code>: monta el sistema de archivos en modo solo lectura o en lectura y escritura (son excluyentes).',
          '<code>noauto</code>: evita que el sistema de archivos se monte automáticamente al inicio.',
          '<code>user</code>: permite a usuarios normales montar el sistema de archivos.',
          '<code>exec</code> / <code>noexec</code>: permite o bloquea la ejecución de archivos binarios.',
          '<code>nosuid</code>: ignora los bits de permisos especiales <code>suid</code> y <code>sgid</code> en el filesystem.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Para que la partición se monte sola en cada inicio, hay que editar <code>/etc/fstab</code> y agregar al final la línea que corresponde a la nueva partición y al directorio creado.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/fstab-edited.png',
        alt: 'Archivo /etc/fstab editado con la línea agregada para montar /dev/sdd1 en /VENTAS como ext4 con defaults.',
        caption: 'fstab editado: al final aparece la línea nueva — <code>/dev/sdd1 /VENTAS ext4 defaults 0 2</code> — para que el montaje persista en cada arranque.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-5-1',
          q: 'mkfs -t ext4 /dev/sdd1 le da formato ext4 a la partición sdd1.',
          a: true,
          explain:
            'Verdadero. La opción -t indica el tipo de filesystem y ext4 es de los más utilizados.',
        },
        {
          id: 'tf-5-2',
          q: 'El comando df muestra el uso de espacio en disco por partición.',
          a: true,
          explain:
            'Verdadero. Con -h se ve human-readable (KB/MB/GB) y muestra en qué partición está montado cada directorio.',
        },
        {
          id: 'tf-5-3',
          q: 'Si la partición se monta sólo con el comando mount, queda montada también después de reiniciar la VM.',
          a: false,
          explain:
            'Falso. El montaje hecho con mount no persiste al reinicio: hay que agregar la línea en /etc/fstab para que se monte automáticamente en cada inicio.',
        },
        {
          id: 'tf-5-4',
          q: 'En /etc/fstab, dump-freq en 0 indica que ese filesystem no se toma en cuenta para backup con dump.',
          a: true,
          explain:
            'Verdadero. Si es 0, dump no lo considera para backup.',
        },
        {
          id: 'tf-5-5',
          q: 'En /etc/fstab, las opciones ro y rw se pueden combinar en una misma línea.',
          a: false,
          explain:
            'Falso. Son excluyentes: o solo lectura o lectura y escritura.',
        },
      ],
      mc: [
        {
          id: 'mc-5-1',
          q: '¿Cuál es el comando correcto para montar la partición /dev/sdd1 en /VENTAS?',
          options: [
            'mkfs -t /dev/sdd1 /VENTAS',
            'mount /dev/sdd1 /VENTAS/',
            'fdisk /VENTAS /dev/sdd1',
            'df -h /dev/sdd1 /VENTAS/',
          ],
          correctIndex: 1,
          explain:
            'Es la sintaxis estándar de mount: dispositivo seguido del directorio destino.',
        },
        {
          id: 'mc-5-2',
          q: '¿Qué columna de /etc/fstab indica el orden en que fsck revisa la partición al iniciar?',
          options: ['dump-freq', 'options', 'pass-num', 'type'],
          correctIndex: 2,
          explain:
            'pass-num. Si vale 0, fsck no revisa el dispositivo durante el inicio.',
        },
        {
          id: 'mc-5-3',
          q: '¿Qué opción de fstab evita que un filesystem se monte automáticamente al inicio?',
          options: ['defaults', 'noauto', 'user', 'nosuid'],
          correctIndex: 1,
          explain:
            'noauto evita el montaje automático en el arranque.',
        },
        {
          id: 'mc-5-4',
          q: '¿Qué hace nosuid en las options de fstab?',
          options: [
            'Permite a cualquier usuario montar',
            'Bloquea la ejecución de binarios',
            'Ignora los bits de permisos especiales suid y sgid en el filesystem',
            'Marca al filesystem como solo lectura',
          ],
          correctIndex: 2,
          explain:
            'nosuid ignora los bits suid y sgid en el filesystem montado, por seguridad.',
        },
      ],
      ms: [
        {
          id: 'ms-5-1',
          q: '¿Cuáles son las columnas de /etc/fstab?',
          options: [
            'filesystem',
            'mount point',
            'type',
            'options',
            'dump-freq y pass-num',
          ],
          correctIndexes: [0, 1, 2, 3, 4],
          explain:
            'Las seis columnas son: filesystem, mount point, type, options, dump-freq y pass-num. La última opción engloba las dos finales.',
        },
        {
          id: 'ms-5-2',
          q: '¿Qué opciones existen en la columna options de /etc/fstab?',
          options: [
            'defaults',
            'noauto',
            'nosuid',
            'ro y rw (excluyentes)',
            'precompile',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son opciones reales. "precompile" no existe en fstab.',
        },
        {
          id: 'ms-5-3',
          q: 'Sobre el flujo formatear/montar/persistir, ¿qué es correcto?',
          options: [
            'mkfs -t ext4 /dev/sdd1 crea el filesystem en la partición',
            'mount /dev/sdd1 /VENTAS engancha la partición al directorio',
            'El montaje hecho con mount NO persiste al reinicio',
            'Para que persista hay que agregar la línea en /etc/fstab',
            'mount es suficiente para que el disco se monte solo en cada arranque',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. mount solo monta para la sesión actual: sin /etc/fstab, el reinicio pierde el montaje.',
        },
        {
          id: 'ms-5-4',
          q: '¿Qué afirmaciones sobre dump-freq y pass-num son correctas?',
          options: [
            'dump-freq en 0 indica que el FS no se considera para backup con dump',
            'pass-num define el orden en que fsck revisa el dispositivo al iniciar',
            'pass-num en 0 indica que fsck NO revisa el dispositivo',
            'ro y rw son excluyentes',
            'pass-num define el tamaño del journal',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. pass-num NO tiene relación con el tamaño del journal.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-5-1',
        front: 'mkfs -t ext4 /dev/sdd1',
        back:
          'Crea un filesystem ext4 en la partición sdd1. La opción -t indica el tipo.',
      },
      {
        id: 'fc-5-2',
        front: 'df -h',
        back:
          'Muestra el uso de espacio en disco por partición en formato human-readable (MB/GB), incluyendo el punto de montaje.',
      },
      {
        id: 'fc-5-3',
        front: 'mount /dev/sdd1 /VENTAS/',
        back:
          'Monta la partición sdd1 sobre el directorio /VENTAS. A partir de ese momento, lo que se escribe en /VENTAS va al disco.',
      },
      {
        id: 'fc-5-4',
        front: '/etc/fstab',
        back:
          'Archivo que configura la lista de discos y puntos de montaje del SO. Sirve para que los montajes persistan en cada inicio y también para declarar montajes remotos.',
      },
      {
        id: 'fc-5-5',
        front: 'Columnas de /etc/fstab',
        back:
          'filesystem | mount point | type | options | dump-freq | pass-num.',
      },
      {
        id: 'fc-5-6',
        front: 'dump-freq',
        back:
          'Columna de fstab usada por dump para backup. Si es 0, no se considera para backup.',
      },
      {
        id: 'fc-5-7',
        front: 'pass-num',
        back:
          'Columna de fstab que define el orden en que fsck revisa la partición al iniciar. Si es 0, no se revisa.',
      },
      {
        id: 'fc-5-8',
        front: 'Opción defaults',
        back: 'Usa las opciones predeterminadas para el montaje.',
      },
      {
        id: 'fc-5-9',
        front: 'Opciones ro y rw',
        back:
          'Solo lectura o lectura y escritura. Son excluyentes entre sí.',
      },
      {
        id: 'fc-5-10',
        front: 'Opción noauto',
        back: 'Evita que el filesystem se monte automáticamente al inicio.',
      },
      {
        id: 'fc-5-11',
        front: 'Opción nosuid',
        back: 'Ignora los bits de permisos especiales suid y sgid en el filesystem.',
      },
    ],
  },

  // ---------- SECCIÓN 6 ----------
  {
    id: '6',
    unit: '2',
    title: 'Hard links e inodos',
    criollo:
      'Un hard link es otro nombre para el mismo archivo. Apunta al <strong>inodo</strong>, que es donde el filesystem guarda la metadata real (propietario, permisos, tamaño, etc.). El nombre del archivo es solo una etiqueta: podés tener varias etiquetas para el mismo inodo. Si borrás una, el archivo sigue vivo mientras quede al menos una más apuntando.',
    blocks: [
      {
        type: 'p',
        text:
          'En Linux, un <strong>link</strong> o enlace es un tipo de archivo especial que permite apuntar o referenciar a otro archivo en el sistema. Los links son muy útiles para administrar archivos sin duplicar contenido y para simplificar la organización de archivos en distintos directorios. Existen dos tipos: <strong>hard links</strong> y <strong>soft links</strong>.',
      },
      {
        type: 'h3',
        text: 'Qué es un hard link',
        criollo:
          'Un link duro es una referencia directa al dato físico del archivo. Lo identifica un número único llamado inodo — no por el nombre.',
      },
      {
        type: 'p',
        text:
          'Un <strong>hard link</strong> (o link duro) es un tipo de enlace que crea una referencia directa a los datos físicos de un archivo en el sistema de archivos, identificados por un número único de <strong>inodo</strong>.',
      },
      {
        type: 'h3',
        text: 'Qué es un inodo',
        criollo:
          'El inodo es la "ficha" del archivo en el filesystem: tiene la metadata (propietario, permisos, tamaño...) pero NO el nombre. El nombre se guarda aparte, en el directorio, y por eso se puede tener varios nombres apuntando al mismo inodo.',
      },
      {
        type: 'p',
        text:
          'Un <strong>inodo</strong> es una estructura de datos que contiene la información esencial sobre un archivo, como el propietario, los permisos, el tamaño, y más; aunque <strong>no almacena el nombre del archivo</strong>. Cada archivo en el sistema tiene un número de inodo único que permite al sistema localizar y gestionar sus datos en el disco. Para ver el número de inodo se puede ejecutar el comando <code>ls</code> agregando las opciones <code>-li</code>:',
      },
      {
        type: 'code',
        code: 'ls -li\n1970 -rw-r--r-- 1 root root 0 Oct 17 21:01 archivo.txt',
      },
      {
        type: 'p',
        text:
          'El número en la primera columna (<code>1970</code>) corresponde al inodo.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/hard-link.png',
        alt: 'Diagrama de un link duro: el nombre de archivo y el link duro apuntan al mismo inodo.',
        caption: 'Diagrama de un link duro (Niklas, GNU/Linux con sabor a Debian, pág. 155). Tanto el nombre original como el hard link apuntan al mismo inodo.',
      },
      {
        type: 'h3',
        text: 'Cómo se comportan',
        criollo:
          'Cada hard link es una copia exacta — apunta al mismo dato. Por cómo funcionan tienen tres limitaciones importantes: no cruzan filesystems, no apuntan a directorios, y el archivo sobrevive mientras quede al menos un link apuntando al inodo.',
      },
      {
        type: 'p',
        text:
          'Cada hard link es una copia exacta del archivo al que apunta. El nombre asociado a un archivo es una etiqueta almacenada en una estructura de directorio, por lo tanto más de un nombre puede ser asociado al mismo archivo. Sin importar que los nombres sean diferentes, cualquier cambio afectará al mismo archivo.',
      },
      {
        type: 'ul',
        items: [
          'Solo pueden referenciar datos que estén <strong>en el mismo filesystem</strong> que el archivo al que apuntan.',
          '<strong>No pueden apuntar a directorios</strong>.',
          'Si el archivo original es eliminado, el hard link <strong>sigue funcionando</strong>: los datos no se eliminan hasta que no existan más links apuntando al inodo.',
        ],
      },
      {
        type: 'h3',
        text: 'Cómo crear un hard link',
        criollo:
          'Con el comando ln seguido del archivo origen y del nombre del link. Después, con ls -li, vas a ver que los dos tienen el mismo número de inodo.',
      },
      {
        type: 'p',
        text:
          'Para crear un hard link se utiliza el comando <code>ln</code>:',
      },
      {
        type: 'code',
        code: 'ln "archivo al que apunto" "nombre del hard link"',
      },
      {
        type: 'p',
        text:
          'Ejemplo:',
      },
      {
        type: 'code',
        code: 'ln archivo.txt hl_archivo.txt\n\nls -li\n1970 -rw-r--r-- 2 root root 0 Oct 17 21:01 archivo.txt\n1970 -rw-r--r-- 2 root root 0 Oct 17 21:01 hl_archivo.txt',
      },
      {
        type: 'p',
        text:
          'Tanto el archivo preexistente como el hard link (<code>hl_archivo.txt</code>) tienen el mismo número de inodo (<code>1970</code>). También cambia el contador de links (la columna después de los permisos): pasa de <code>1</code> a <code>2</code>.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-6-1',
          q: 'El nombre de un archivo en Linux se guarda dentro del inodo.',
          a: false,
          explain:
            'Falso. El inodo guarda metadata (propietario, permisos, tamaño...) pero NO el nombre. El nombre vive en la estructura de directorio.',
        },
        {
          id: 'tf-6-2',
          q: 'Un hard link tiene el mismo número de inodo que el archivo original al que apunta.',
          a: true,
          explain:
            'Verdadero. Por eso es una "referencia directa" al dato físico: comparten inodo.',
        },
        {
          id: 'tf-6-3',
          q: 'Un hard link puede apuntar a un directorio.',
          a: false,
          explain:
            'Falso. Los hard links no pueden apuntar a directorios; solo a archivos.',
        },
        {
          id: 'tf-6-4',
          q: 'Si elimino el archivo original, el hard link queda roto.',
          a: false,
          explain:
            'Falso. El hard link sigue funcionando: los datos no se eliminan hasta que no quede ningún link apuntando al inodo.',
        },
        {
          id: 'tf-6-5',
          q: 'Un hard link puede apuntar a un archivo que está en otro filesystem.',
          a: false,
          explain:
            'Falso. Los hard links solo pueden referenciar datos que estén en el mismo filesystem que el archivo apuntado.',
        },
      ],
      mc: [
        {
          id: 'mc-6-1',
          q: '¿Qué comando muestra el número de inodo de los archivos?',
          options: ['ls -l', 'ls -li', 'ln -s', 'df -h'],
          correctIndex: 1,
          explain:
            'ls -li lista los archivos mostrando el inodo en la primera columna.',
        },
        {
          id: 'mc-6-2',
          q: '¿Cuál es la sintaxis correcta para crear un hard link de archivo.txt llamado hl_archivo.txt?',
          options: [
            'ln -s archivo.txt hl_archivo.txt',
            'ln archivo.txt hl_archivo.txt',
            'mkfs ln archivo.txt hl_archivo.txt',
            'mount archivo.txt hl_archivo.txt',
          ],
          correctIndex: 1,
          explain:
            'Sin la opción -s es hard link. Con -s sería soft link.',
        },
        {
          id: 'mc-6-3',
          q: '¿Qué guarda el inodo de un archivo?',
          options: [
            'El nombre y el contenido',
            'El nombre y los permisos',
            'Metadata como propietario, permisos y tamaño (NO el nombre)',
            'Solo el nombre',
          ],
          correctIndex: 2,
          explain:
            'El inodo guarda la metadata esencial del archivo. El nombre vive aparte, en la estructura del directorio.',
        },
        {
          id: 'mc-6-4',
          q: '¿Cuál NO es una limitación de los hard links?',
          options: [
            'No pueden cruzar filesystems',
            'No pueden apuntar a directorios',
            'Se rompen si se elimina el archivo original',
            'Comparten inodo con el archivo apuntado',
          ],
          correctIndex: 2,
          explain:
            'Esa NO es una limitación: el hard link sigue funcionando aunque se borre el original. Las otras tres sí son limitaciones (o características).',
        },
      ],
      ms: [
        {
          id: 'ms-6-1',
          q: '¿Qué afirmaciones sobre el inodo son correctas?',
          options: [
            'Contiene metadata: propietario, permisos, tamaño',
            'NO almacena el nombre del archivo',
            'Cada archivo tiene un número de inodo único',
            'Se puede ver con ls -li',
            'Almacena el nombre del archivo además de la metadata',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El nombre del archivo NO vive en el inodo — vive en la estructura del directorio.',
        },
        {
          id: 'ms-6-2',
          q: '¿Qué afirmaciones sobre los hard links son correctas?',
          options: [
            'Crean una referencia directa a los datos físicos del archivo',
            'Comparten inodo con el archivo apuntado',
            'No pueden cruzar filesystems',
            'No pueden apuntar a directorios',
            'Se rompen al eliminar el archivo original',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El hard link SOBREVIVE al borrado del original — esa es justamente una de sus ventajas.',
        },
        {
          id: 'ms-6-3',
          q: 'Sobre el comando ln para crear un hard link, ¿qué es correcto?',
          options: [
            'Sintaxis: ln archivo-origen nombre-del-link',
            'No requiere ninguna opción',
            'Crea un link con el mismo inodo que el archivo origen',
            'Aumenta el contador de links en la columna después de los permisos',
            'Requiere la opción -s',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. La opción -s es justamente para soft links, no para hard.',
        },
        {
          id: 'ms-6-4',
          q: 'Sobre el comportamiento de los archivos enlazados, ¿qué es correcto?',
          options: [
            'Cualquier cambio en uno afecta al mismo archivo (mismo inodo)',
            'El archivo sobrevive mientras quede al menos un link apuntando al inodo',
            'Los datos se eliminan recién cuando no quedan links',
            'El nombre asociado vive en la estructura del directorio',
            'Cada hard link tiene su propio inodo independiente',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Los hard links COMPARTEN inodo — no tienen uno propio.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-6-1',
        front: 'Link (en Linux)',
        back:
          'Tipo de archivo especial que apunta o referencia a otro archivo. Permite no duplicar contenido y simplificar la organización. Hay dos tipos: hard y soft.',
      },
      {
        id: 'fc-6-2',
        front: 'Hard link',
        back:
          'Enlace que crea una referencia directa a los datos físicos de un archivo, identificada por un número único de inodo.',
      },
      {
        id: 'fc-6-3',
        front: 'Inodo',
        back:
          'Estructura de datos que contiene la metadata del archivo (propietario, permisos, tamaño, etc.). NO almacena el nombre del archivo.',
      },
      {
        id: 'fc-6-4',
        front: '¿Dónde se guarda el nombre del archivo?',
        back:
          'En la estructura de directorio, no en el inodo. Por eso varios nombres pueden apuntar al mismo inodo.',
      },
      {
        id: 'fc-6-5',
        front: 'ls -li',
        back:
          'Lista archivos mostrando el número de inodo en la primera columna.',
      },
      {
        id: 'fc-6-6',
        front: 'Crear un hard link',
        back:
          'ln "archivo origen" "nombre del link". Ej: ln archivo.txt hl_archivo.txt.',
      },
      {
        id: 'fc-6-7',
        front: 'Limitaciones del hard link',
        back:
          'Solo dentro del mismo filesystem y no puede apuntar a directorios.',
      },
      {
        id: 'fc-6-8',
        front: '¿Qué pasa si borro el archivo original de un hard link?',
        back:
          'El hard link sigue funcionando. Los datos no se eliminan hasta que no quede ningún link apuntando al inodo.',
      },
    ],
  },

  // ---------- SECCIÓN 7 ----------
  {
    id: '7',
    unit: '2',
    title: 'Soft links y comparación con hard links',
    criollo:
      'Un soft link es un acceso directo: en lugar de apuntar al inodo, apunta al <strong>nombre</strong> del archivo. Tiene dos ventajas importantes (puede cruzar filesystems y puede apuntar a directorios) y una desventaja grande: si borrás el archivo original, el link queda huérfano y no apunta a nada.',
    blocks: [
      {
        type: 'h3',
        text: 'Qué es un soft link',
        criollo:
          'El soft link (o link simbólico) es como el "acceso directo" de Windows. No apunta al inodo, apunta al nombre del archivo. Si el original se va, el link queda roto.',
      },
      {
        type: 'p',
        text:
          'Un <strong>soft link</strong> (o link simbólico) tiene semejanzas con un "acceso directo": en lugar de apuntar al inodo como el hard link, este apunta en realidad al <strong>nombre del archivo</strong>. Si bien una modificación en el link simbólico afectará al archivo en el filesystem, presenta diferencias importantes respecto al hard link.',
      },
      {
        type: 'ul',
        items: [
          'Si el archivo original es eliminado, el soft link <strong>perderá su referencia</strong> y quedará <strong>huérfano</strong>.',
          'Si en cambio se elimina el soft link, el archivo original <strong>seguirá existiendo</strong>.',
          'Los soft links <strong>pueden apuntar fuera del filesystem</strong>.',
          'Los soft links <strong>pueden apuntar a directorios</strong>.',
        ],
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/soft-link.png',
        alt: 'Diagrama de un link simbólico: el link simbólico apunta a un link duro (nombre) que a su vez apunta al inodo.',
        caption: 'Diagrama de un link simbólico (Niklas, GNU/Linux con sabor a Debian, pág. 157). El soft link apunta al nombre, no al inodo.',
      },
      {
        type: 'h3',
        text: 'Cómo crear un soft link',
        criollo:
          'Mismo comando ln pero con la opción -s. En el ls vas a ver una "l" como primer carácter y la flecha "->" mostrando a dónde apunta.',
      },
      {
        type: 'p',
        text:
          'Para crear un soft link se utiliza el comando <code>ln</code> con la opción <code>-s</code>:',
      },
      {
        type: 'code',
        code: 'ln -s "archivo al que apunto" "nombre del soft link"',
      },
      {
        type: 'p',
        text: 'Ejemplo:',
      },
      {
        type: 'code',
        code: 'ln -s archivo.txt sl_archivo.txt\n\nls -l\n-rw-r--r-- 2 root root  0 Oct 17 21:01 archivo.txt\nlrwxrwxrwx 1 root root 14 Nov  6 13:00 sl_archivo.txt -> archivo.txt',
      },
      {
        type: 'p',
        text:
          'La creación del soft link se identifica por el primer carácter, que pasa a ser <code>l</code> (link). En la descripción del nombre aparece la referencia de redirección <code>-&gt;</code> hacia el archivo físico (<code>archivo.txt</code>).',
      },
      {
        type: 'p',
        text:
          'Al comparar con <code>ls -li</code> se observa que el link simbólico y el archivo original <strong>tienen distinto inodo</strong>, mientras que el hard link comparte el inodo con el archivo:',
      },
      {
        type: 'code',
        code: 'ls -li\n1970 -rw-r--r-- 2 root root 25 Nov  6 13:05 archivo\n1970 -rw-r--r-- 2 root root 25 Nov  6 13:05 hl_archivo\n1931 lrwxrwxrwx 1 root root  7 Nov  6 13:04 sl_archivo.txt -> archivo',
      },
      {
        type: 'ul',
        items: [
          'La <strong>primera línea</strong> es el archivo original.',
          'La <strong>segunda línea</strong> es el hard link que apunta al archivo original (mismo inodo <code>1970</code>).',
          'La <strong>tercera línea</strong> es el soft link que apunta al archivo original (distinto inodo, <code>1931</code>).',
        ],
      },
      {
        type: 'h3',
        text: 'Resumen comparativo',
        criollo:
          'La tabla deja todo claro: comparten inodo o no, si pueden apuntar a directorios, si cruzan filesystems, qué pasa si se mueve o se borra el original.',
      },
      {
        type: 'table',
        caption: 'Hard link vs. soft link',
        headers: ['Característica', 'Enlace duro (hard)', 'Enlace simbólico (soft)'],
        rows: [
          ['Inodo compartido', 'Sí', 'No'],
          ['Puede apuntar a directorios', 'No', 'Sí'],
          ['Soporte entre sistemas de archivos', 'No', 'Sí'],
          ['Resistencia al movimiento del archivo original', 'Sí', 'No (puede romperse)'],
          ['Al eliminar el archivo original', 'El enlace sigue', 'El enlace se rompe'],
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Regla rápida: si tenés que cruzar filesystems o apuntar a un directorio → soft link. Si querés que el "enlace" sobreviva al borrado del original y todo está en el mismo filesystem → hard link.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-7-1',
          q: 'Un soft link apunta al nombre del archivo, no al inodo.',
          a: true,
          explain:
            'Verdadero. Esa es la diferencia clave con el hard link, que apunta directamente al inodo.',
        },
        {
          id: 'tf-7-2',
          q: 'Si se elimina el archivo original, el soft link sigue funcionando.',
          a: false,
          explain:
            'Falso. El soft link pierde la referencia y queda huérfano (roto).',
        },
        {
          id: 'tf-7-3',
          q: 'Los soft links pueden apuntar a directorios y cruzar filesystems.',
          a: true,
          explain:
            'Verdadero. Son dos de sus ventajas frente a los hard links.',
        },
        {
          id: 'tf-7-4',
          q: 'En ls -l, un soft link se identifica con el primer carácter "d".',
          a: false,
          explain:
            'Falso. El primer carácter es "l" (link). La "d" es para directorios.',
        },
        {
          id: 'tf-7-5',
          q: 'Un soft link y el archivo original comparten el mismo número de inodo.',
          a: false,
          explain:
            'Falso. Tienen distinto inodo. Quien comparte inodo con el original es el hard link.',
        },
      ],
      mc: [
        {
          id: 'mc-7-1',
          q: '¿Qué opción del comando ln crea un soft link?',
          options: ['-h', '-s', '-l', '-r'],
          correctIndex: 1,
          explain:
            'ln -s crea un soft link (simbólico). Sin -s, crea un hard link.',
        },
        {
          id: 'mc-7-2',
          q: 'Necesito un link a un archivo que está en otro filesystem. ¿Qué uso?',
          options: [
            'Hard link, porque es más rápido',
            'Hard link, porque sobrevive al borrado',
            'Soft link, porque los hard links no cruzan filesystems',
            'No se puede hacer ningún tipo de link',
          ],
          correctIndex: 2,
          explain:
            'Los hard links solo funcionan dentro del mismo filesystem; para cruzar filesystems hay que usar un soft link.',
        },
        {
          id: 'mc-7-3',
          q: '¿Qué se ve en ls -l para identificar un soft link?',
          options: [
            'Tipo de archivo "l" al principio y una flecha "->" hacia el archivo apuntado',
            'Tipo de archivo "h"',
            'El mismo inodo que el archivo apuntado',
            'Un nombre que empieza con "sl_"',
          ],
          correctIndex: 0,
          explain:
            'El primer carácter es "l" (link) y aparece la referencia "-> archivo" mostrando a dónde apunta.',
        },
        {
          id: 'mc-7-4',
          q: 'Borro el soft link sl_archivo.txt que apunta a archivo.txt. ¿Qué pasa con archivo.txt?',
          options: [
            'Se borra también, porque el link y el archivo son lo mismo',
            'Sigue existiendo sin cambios',
            'Queda corrupto y hay que recuperarlo con fsck',
            'El kernel pierde el inodo',
          ],
          correctIndex: 1,
          explain:
            'Eliminar el soft link no afecta al archivo original. Solo se borra la referencia simbólica.',
        },
      ],
      ms: [
        {
          id: 'ms-7-1',
          q: '¿Qué afirmaciones sobre los soft links (links simbólicos) son correctas?',
          options: [
            'Apuntan al nombre del archivo, no al inodo',
            'Son similares a un "acceso directo"',
            'Pueden apuntar a directorios',
            'Pueden apuntar fuera del filesystem',
            'Comparten inodo con el archivo apuntado',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Soft link y archivo original tienen DISTINTO inodo.',
        },
        {
          id: 'ms-7-2',
          q: '¿Qué pasa con los soft links según la operación que se haga?',
          options: [
            'Si se elimina el archivo original, el soft link queda huérfano',
            'Si se elimina el soft link, el archivo original sigue existiendo',
            'Si se modifica vía el soft link, afecta al archivo en el filesystem',
            'El soft link queda como un acceso "roto" si pierde su referencia',
            'Si se elimina el archivo original, el soft link sigue apuntando a datos válidos',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El soft link sí se rompe al borrar el original — esa es su gran debilidad.',
        },
        {
          id: 'ms-7-3',
          q: 'Sobre el comando ln -s y la identificación del soft link en ls, ¿qué es correcto?',
          options: [
            'Sintaxis: ln -s archivo-origen nombre-del-soft-link',
            'En ls -l, el primer carácter es "l" (link)',
            'En la descripción aparece la flecha "-> archivo" indicando a dónde apunta',
            'En ls -li tiene inodo distinto del archivo original',
            'Sin la opción -s también se crea un soft link',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Sin -s, ln crea un HARD link, no un soft link.',
        },
        {
          id: 'ms-7-4',
          q: 'Según la tabla comparativa hard vs soft, ¿qué correspondencias son correctas?',
          options: [
            'Hard link: inodo compartido = SÍ; soft link: inodo compartido = NO',
            'Hard link: puede apuntar a directorios = NO; soft link: SÍ',
            'Hard link: soporte entre filesystems = NO; soft link: SÍ',
            'Hard link: sobrevive al borrado del original = SÍ; soft link: NO',
            'Hard link: puede apuntar a directorios = SÍ',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del cuadro comparativo. El hard link NO puede apuntar a directorios.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-7-1',
        front: 'Soft link (link simbólico)',
        back:
          'Tipo de link que apunta al <strong>nombre</strong> del archivo (no al inodo). Similar a un "acceso directo".',
      },
      {
        id: 'fc-7-2',
        front: 'Crear un soft link',
        back: 'ln -s "archivo origen" "nombre del soft link". Ej: ln -s archivo.txt sl_archivo.txt.',
      },
      {
        id: 'fc-7-3',
        front: '¿Qué pasa si se borra el archivo original de un soft link?',
        back:
          'El soft link queda huérfano (roto). Pierde la referencia.',
      },
      {
        id: 'fc-7-4',
        front: '¿Qué pasa si borro el soft link?',
        back:
          'El archivo original sigue existiendo. Solo se elimina la referencia simbólica.',
      },
      {
        id: 'fc-7-5',
        front: '¿Soft link puede cruzar filesystems?',
        back: 'Sí. A diferencia del hard link, el soft link puede apuntar fuera del filesystem.',
      },
      {
        id: 'fc-7-6',
        front: '¿Soft link puede apuntar a directorios?',
        back: 'Sí. El hard link no puede, el soft link sí.',
      },
      {
        id: 'fc-7-7',
        front: 'Identificar un soft link en ls -l',
        back:
          'El primer carácter del tipo es "l" (link) y aparece la flecha "-> archivo" mostrando a dónde apunta.',
      },
      {
        id: 'fc-7-8',
        front: '¿Inodo del soft link vs. el del archivo original?',
        back:
          'Distintos. Los hard links comparten inodo con el original; los soft links no.',
      },
      {
        id: 'fc-7-9',
        front: 'Regla rápida hard vs. soft',
        back:
          'Soft: cuando hay que cruzar filesystems o apuntar a un directorio. Hard: cuando se quiere que el link sobreviva al borrado del original y todo está en el mismo filesystem.',
      },
    ],
  },
  // ---------- SECCIÓN 8 ----------
  {
    id: '8',
    unit: '3',
    title: 'Gestor de arranque (GRUB)',
    criollo:
      'El gestor de arranque es el primer software que corre después de que la BIOS/UEFI prende el hardware. Su laburo es elegir qué SO bootear y pasarle la posta al kernel. En Linux los protagonistas fueron LILO (viejo) y GRUB (el que se usa hoy).',
    blocks: [
      {
        type: 'p',
        text:
          'Un <strong>gestor de arranque</strong> es un software que se ejecuta inmediatamente después de que la BIOS o UEFI inicializa el hardware. Su función principal es permitir la selección entre diferentes sistemas operativos o configuraciones de arranque previamente definidas. Cuando termina su secuencia, transfiere el control al kernel del sistema operativo para continuar con el proceso de inicio.',
      },
      {
        type: 'p',
        text: 'Los principales gestores de arranque en Linux son <strong>LILO</strong> y <strong>GRUB</strong>.',
      },
      {
        type: 'h3',
        text: 'LILO (Linux Loader)',
        criollo: 'El abuelo del bootloader: confiable y rápido, pero hay que reinstalarlo cada vez que cambia la config. Ya no se usa.',
      },
      {
        type: 'p',
        text:
          'LILO fue uno de los primeros gestores de arranque en Linux. Era confiable pero limitado: no tenía interfaz gráfica y cualquier cambio en su configuración requería reinstalarlo, lo que lo hacía poco flexible. Su contrapartida positiva era que resultaba ligero y rápido.',
      },
      {
        type: 'h3',
        text: 'GRUB (Grand Unified Bootloader)',
        criollo: 'El que vino a reemplazar a LILO. Soporta varios SO, tiene menú interactivo y se reconfigura sin reinstalar.',
      },
      {
        type: 'p',
        text:
          'GRUB vino a reemplazar a LILO como el gestor de arranque principal en la mayoría de las distribuciones. Es compatible con múltiples sistemas operativos y cuenta con un menú interactivo que facilita configuraciones más dinámicas.',
      },
      {
        type: 'h3',
        text: 'MBR — sectores y espacio',
        criollo: 'El MBR es el SECTOR 0 del disco: 512 bytes donde vive el código de arranque, la tabla de particiones y la firma que marca al disco como arrancable.',
      },
      {
        type: 'p',
        text:
          'El <strong>MBR (Master Boot Record)</strong> es la primera sección de un disco rígido, también conocida como <strong>SECTOR 0</strong>. Tiene un tamaño de 512 bytes y es crucial en el proceso de arranque.',
      },
      {
        type: 'table',
        caption: 'Distribución de los 512 bytes del MBR',
        headers: ['Bytes', 'Contenido'],
        rows: [
          ['446', 'Código del gestor de arranque (inicia la primera etapa del gestor)'],
          ['64', 'Tabla de particiones'],
          ['2', 'Firma que indica que el disco es arrancable'],
        ],
      },
      {
        type: 'h3',
        text: 'Etapas de GRUB sobre el MBR',
        criollo: 'GRUB no entra entero en 446 bytes. Lo parten en etapas: una bien chica en el MBR que llama a otra más grande en el espacio libre, y la última en el filesystem.',
      },
      {
        type: 'ul',
        items: [
          '<strong>Etapa 1</strong>: GRUB escribe su código inicial en los primeros 446 bytes del MBR y los utiliza para cargar la Etapa 1.5.',
          '<strong>Etapa 1.5</strong>: se ubica en el espacio libre entre el MBR y el inicio de la primera partición. Almacena los controladores necesarios para reconocer sistemas de archivos.',
          '<strong>Etapa 2</strong>: el resto de GRUB (incluyendo su configuración y el menú interactivo) vive en el filesystem de una partición más grande (generalmente <code>/boot/grub</code>).',
        ],
      },
      {
        type: 'h3',
        text: 'Características del MBR',
      },
      {
        type: 'ol',
        items: [
          'Sólo admite discos de hasta <strong>2 TB</strong> debido al uso de direcciones de 32 bits.',
          'Soporta un máximo de <strong>4 particiones primarias</strong>.',
          'En sistemas más modernos el MBR está siendo reemplazado por <strong>GPT (GUID Partition Table)</strong>.',
          'Si el MBR se corrompiera, GRUB dejaría de funcionar y el sistema no arrancará.',
          'GRUB puede reinstalarse usando <code>boot-repair</code>, permitiendo que vuelva a arrancar el o los sistemas operativos.',
        ],
      },
      {
        type: 'h3',
        text: 'GRUB II',
        criollo: 'La versión actual. Soporta más filesystems, GPT (discos &gt; 2TB), configuración dinámica y arrancar desde discos encriptados, LVM y RAID.',
      },
      {
        type: 'ul',
        items: [
          'Soporta amplia variedad de sistemas de archivos: <code>ext2</code>, <code>ext3</code>, <code>ext4</code>, <code>btrfs</code>, <code>xfs</code>, <code>zfs</code>.',
          'Compatibilidad con tablas de particiones <strong>GPT</strong>, permitiendo discos mayores a 2 TB.',
          'Configuración dinámica, que permite cambios sin necesidad de reiniciar.',
          'Arranque desde discos encriptados, LVM y RAID.',
        ],
      },
      {
        type: 'h3',
        text: 'Archivos importantes de GRUB',
      },
      {
        type: 'table',
        caption: 'Ubicaciones principales de configuración de GRUB 2',
        headers: ['Ruta', 'Para qué sirve'],
        rows: [
          ['<code>/etc/default/grub</code>', 'Configuración principal editable por el usuario.'],
          ['<code>/boot/grub/grub.cfg</code>', 'Archivo de configuración que reemplaza al viejo <code>menu.lst</code>, donde se listaban los sistemas operativos disponibles.'],
          ['<code>/etc/grub.d/</code>', 'Directorio con los scripts de GRUB — bloques de construcción a partir de los cuales se arma <code>grub.cfg</code>.'],
        ],
      },
      {
        type: 'h3',
        text: 'Comandos útiles',
      },
      {
        type: 'ul',
        items: [
          '<code>update-grub</code> — genera el archivo <code>grub.cfg</code> basándose en los cambios hechos en <code>/etc/default/grub</code> y <code>/etc/grub.d/</code>.',
          '<code>grub-install</code> — instala GRUB en el MBR o en la partición deseada. Es el comando para recuperar el GRUB cuando falla.',
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Si te queda una máquina sin bootear porque rompiste el MBR, el combo es: bootear con un live USB → chroot → <code>grub-install /dev/sdX</code> → <code>update-grub</code>. Y si ni eso anda, <code>boot-repair</code> hace toda la magia.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-8-1',
          q: 'El gestor de arranque corre antes que la BIOS/UEFI.',
          a: false,
          explain: 'Falso. La BIOS o UEFI inicializa el hardware primero, y recién después se ejecuta el gestor de arranque.',
        },
        {
          id: 'tf-8-2',
          q: 'El MBR ocupa 512 bytes y vive en el sector 0 del disco.',
          a: true,
          explain: 'Verdadero. De esos 512 bytes, 446 son para el código del bootloader, 64 para la tabla de particiones y 2 para la firma de arranque.',
        },
        {
          id: 'tf-8-3',
          q: 'GRUB II soporta tablas de particiones GPT, permitiendo discos de más de 2 TB.',
          a: true,
          explain: 'Verdadero. Es una de sus ventajas frente al MBR clásico, que está limitado a 2 TB por usar direcciones de 32 bits.',
        },
        {
          id: 'tf-8-4',
          q: 'Para aplicar cambios hechos en /etc/default/grub hay que ejecutar grub-install.',
          a: false,
          explain: 'Falso. <code>grub-install</code> reinstala GRUB en el MBR/partición. Para regenerar <code>grub.cfg</code> a partir de la configuración se usa <code>update-grub</code>.',
        },
        {
          id: 'tf-8-5',
          q: 'LILO permitía editar su configuración sin necesidad de reinstalarse.',
          a: false,
          explain: 'Falso. Una de las limitaciones de LILO era justamente que cualquier cambio en su configuración requería reinstalarlo.',
        },
      ],
      mc: [
        {
          id: 'mc-8-1',
          q: '¿Cuántos bytes del MBR están reservados para el código del gestor de arranque?',
          options: ['64', '256', '446', '512'],
          correctIndex: 2,
          explain: '446 bytes para el código del bootloader, 64 para la tabla de particiones y 2 para la firma.',
        },
        {
          id: 'mc-8-2',
          q: '¿Dónde vive la Etapa 2 de GRUB?',
          options: [
            'Dentro del MBR, en los primeros 446 bytes',
            'En el espacio libre entre el MBR y la primera partición',
            'En el sistema de archivos, generalmente en /boot/grub',
            'En la memoria RAM cargada por la BIOS',
          ],
          correctIndex: 2,
          explain: 'La Etapa 2 (con la configuración y el menú interactivo) está en el filesystem, típicamente en <code>/boot/grub</code>. La 1 está en el MBR y la 1.5 en el espacio libre posterior.',
        },
        {
          id: 'mc-8-3',
          q: 'Tocaste /etc/default/grub. ¿Qué comando hace que el cambio impacte en el arranque?',
          options: ['<code>grub-install</code>', '<code>update-grub</code>', '<code>boot-repair</code>', '<code>systemctl reload grub</code>'],
          correctIndex: 1,
          explain: '<code>update-grub</code> regenera <code>/boot/grub/grub.cfg</code> a partir de los cambios en <code>/etc/default/grub</code> y <code>/etc/grub.d/</code>.',
        },
        {
          id: 'mc-8-4',
          q: '¿Cuál es una limitación del MBR clásico?',
          options: [
            'No soporta más de 256 particiones',
            'No soporta discos mayores a 2 TB y máximo 4 particiones primarias',
            'Sólo funciona con ext4',
            'No es compatible con Linux',
          ],
          correctIndex: 1,
          explain: 'El MBR limita el disco a 2 TB (direcciones de 32 bits) y a 4 particiones primarias. Por eso GPT lo está reemplazando.',
        },
      ],
      ms: [
        {
          id: 'ms-8-1',
          q: 'Sobre la estructura del MBR (Master Boot Record), ¿qué es correcto?',
          options: [
            'Vive en el sector 0 del disco',
            'Tiene 512 bytes en total',
            '446 bytes son para el código del gestor de arranque',
            '64 bytes son para la tabla de particiones',
            'Los últimos 2 bytes guardan el filesystem activo',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Los últimos 2 bytes son la firma de arranque, no el filesystem.',
        },
        {
          id: 'ms-8-2',
          q: '¿Cuáles son las etapas de GRUB sobre el MBR?',
          options: [
            'Etapa 1 en los primeros 446 bytes del MBR',
            'Etapa 1.5 en el espacio libre entre MBR y la primera partición',
            'Etapa 2 en el filesystem (típicamente /boot/grub)',
            'Una etapa 0 ejecutada por la BIOS',
            'Una etapa 3 cargada por el kernel',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las tres etapas textuales son 1, 1.5 y 2. No existen etapas 0 ni 3 en el modelo del apunte.',
        },
        {
          id: 'ms-8-3',
          q: '¿Qué características tiene GRUB II según el apunte?',
          options: [
            'Soporta ext2/3/4, btrfs, xfs, zfs',
            'Compatibilidad con tablas de particiones GPT (>2TB)',
            'Configuración dinámica sin reiniciar',
            'Arranque desde discos encriptados, LVM y RAID',
            'Único bootloader compatible con Linux moderno',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Existen otros bootloaders (LILO histórico, systemd-boot, rEFInd, etc.) — GRUB no es exclusivo.',
        },
        {
          id: 'ms-8-4',
          q: '¿Qué afirmaciones sobre LILO, GRUB y archivos de configuración son correctas?',
          options: [
            'LILO era ligero y rápido pero requería reinstalarlo ante cualquier cambio',
            'GRUB es compatible con múltiples sistemas operativos',
            '/etc/default/grub es la configuración principal editable',
            '/boot/grub/grub.cfg reemplaza al viejo menu.lst',
            'update-grub instala GRUB en el MBR',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. update-grub REGENERA grub.cfg; quien INSTALA en el MBR es grub-install.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-8-1',
        front: 'Gestor de arranque',
        back: 'Software que corre después de la BIOS/UEFI; permite elegir el SO y le transfiere el control al kernel.',
      },
      {
        id: 'fc-8-2',
        front: 'MBR',
        back: 'Master Boot Record. Sector 0 del disco, 512 bytes: 446 para el bootloader + 64 para la tabla de particiones + 2 para la firma.',
      },
      {
        id: 'fc-8-3',
        front: 'GRUB Etapa 1 / 1.5 / 2',
        back: 'Etapa 1 en el MBR; Etapa 1.5 entre el MBR y la primera partición (drivers de FS); Etapa 2 en el filesystem (<code>/boot/grub</code>), con config y menú.',
      },
      {
        id: 'fc-8-4',
        front: 'Límites del MBR',
        back: 'Disco máximo de 2 TB y hasta 4 particiones primarias. Por eso se reemplaza con GPT.',
      },
      {
        id: 'fc-8-5',
        front: '<code>update-grub</code>',
        back: 'Regenera <code>/boot/grub/grub.cfg</code> a partir de <code>/etc/default/grub</code> y <code>/etc/grub.d/</code>.',
      },
      {
        id: 'fc-8-6',
        front: '<code>grub-install</code>',
        back: 'Instala GRUB en el MBR o en la partición deseada. Comando clave para recuperar el GRUB cuando falla.',
      },
      {
        id: 'fc-8-7',
        front: 'Ventajas de GRUB II',
        back: 'Soporta ext2/3/4, btrfs, xfs, zfs; compatible con GPT (&gt;2TB); config dinámica; arranque desde encriptado, LVM y RAID.',
      },
      {
        id: 'fc-8-8',
        front: 'LILO',
        back: 'Linux Loader. Predecesor de GRUB: confiable, ligero y rápido, pero sin GUI y hay que reinstalarlo ante cada cambio de config.',
      },
    ],
  },
  // ---------- SECCIÓN 9 ----------
  {
    id: '9',
    unit: '3',
    title: 'Secuencia de booteo',
    criollo:
      'Desde que apretás el botón de power hasta que ves la pantalla de login pasan 8 pasos bien definidos: POST → GRUB → kernel → init/systemd → servicios → montar FS → login manager → sesión del usuario.',
    blocks: [
      {
        type: 'p',
        text:
          'A continuación se explican los pasos por los que pasa una máquina desde el arranque hasta el inicio del sistema operativo.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/booteo-linux.png',
        alt: 'Diagrama del proceso de booteo de Linux mostrando el flujo BIOS → MBR/GRUB → Kernel → Init.',
        caption: 'Flujo general del booteo: la BIOS carga el bootloader desde el MBR, GRUB carga el kernel, y el kernel arranca init/systemd.',
      },
      {
        type: 'h3',
        text: '1) Encendido y POST (Power-On Self-Test)',
        criollo: 'Al apretar el botón, el firmware de la BIOS/UEFI hace un chequeo del hardware. Si pasa, le toca al disco de arranque.',
      },
      {
        type: 'p',
        text:
          'Al encender la computadora, el firmware de la BIOS o de UEFI ejecuta el POST, básicamente un diagnóstico del hardware. Si el POST tiene éxito, la BIOS llama al disco marcado como arranque.',
      },
      {
        type: 'h3',
        text: '2) Carga del gestor de arranque — GRUB',
        criollo: 'La BIOS encuentra el MBR (o GPT) y va recorriendo las etapas del bootloader hasta mostrarte el menú de SOs.',
      },
      {
        type: 'p',
        text:
          'La BIOS localiza el MBR o GPT en el disco y recorre las etapas del bootloader, presentando un menú con los sistemas operativos disponibles.',
      },
      {
        type: 'h3',
        text: '3) Carga del kernel',
        criollo: 'GRUB carga la imagen del kernel y un FS temporal (initramfs), y le pasa la posta al primer proceso (Init).',
      },
      {
        type: 'p',
        text:
          'El gestor de arranque carga la imagen del kernel, detecta dispositivos y monta un sistema de archivos temporal llamado <code>initramfs</code>; después transfiere el control al proceso <strong>Init</strong>.',
      },
      {
        type: 'h3',
        text: '4) Proceso Init o systemd',
        criollo: 'El kernel lanza el primer proceso (PID 1). Tradicionalmente se llamaba init; en distros modernas es systemd. Configura runlevels o targets.',
      },
      {
        type: 'p',
        text:
          'El kernel lanza el primer proceso del sistema, tradicionalmente llamado <strong>Init</strong> (o <strong>systemd</strong> según la versión). Comienza a ejecutar scripts de arranque, llama a los procesos necesarios y configura <strong>runlevels</strong> (en sistemas Init) o <strong>targets</strong> (en systemd).',
      },
      {
        type: 'table',
        caption: 'Runlevels (Init) vs. Targets (systemd) — equivalencias rápidas',
        headers: ['Runlevel', 'Target', 'Estado'],
        rows: [
          ['0', '<code>poweroff.target</code>', 'Apagado del sistema'],
          ['1', '<code>rescue.target</code>', 'Monousuario'],
          ['2', '<code>multi-user.target</code>', 'Multiusuario sin red'],
          ['3', '<code>multi-user.target</code>', 'Multiusuario con red, sin GUI'],
          ['4', '(no utilizado)', 'Reservado para personalizar'],
          ['5', '<code>graphical.target</code>', 'Multiusuario con red, con GUI'],
          ['6', '<code>reboot.target</code>', 'Reinicio'],
        ],
      },
      {
        type: 'h3',
        text: '5) Activación de servicios y demonios',
        criollo: 'Acá arrancan placa de red, impresión, SSH, y todo lo demás que haya quedado configurado.',
      },
      {
        type: 'p',
        text:
          'Los servicios y demonios necesarios se inician (placa de red, servicios de impresión, etc.).',
      },
      {
        type: 'h3',
        text: '6) Montaje del filesystem',
        criollo: 'Cuando los servicios básicos están vivos, se montan particiones en modo read-write según el /etc/fstab.',
      },
      {
        type: 'p',
        text:
          'Una vez que los servicios básicos están operativos, el sistema de archivos se monta en modo read-write, activando las particiones adicionales definidas en <code>/etc/fstab</code>.',
      },
      {
        type: 'h3',
        text: '7) Inicio de la interfaz de usuario',
        criollo: 'Se lanza el programa que muestra el login: agetty en consola, o gdm/lightdm si hay entorno gráfico.',
      },
      {
        type: 'p',
        text:
          'Se lanza el programa definido para mostrar la pantalla de inicio de sesión. En consola puede ser <code>agetty</code>; en entorno gráfico, <code>gdm</code> o <code>lightdm</code>.',
      },
      {
        type: 'h3',
        text: '8) Inicio de sesión del usuario',
        criollo: 'Ingresás credenciales, te abre un shell (típicamente bash) o el entorno gráfico (KDE, GNOME, etc).',
      },
      {
        type: 'p',
        text:
          'El usuario ingresa sus credenciales y entra a un shell como <code>bash</code> (si es por línea de comandos) o al entorno gráfico definido (KDE, GNOME, etc.).',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Nota sobre runlevels y targets: los <strong>runlevels</strong> son estados predefinidos del sistema (SysVinit) que determinan qué servicios deben estar activos. Los <strong>targets</strong> son objetivos o estados en systemd, similares pero más flexibles y potentes.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Si querés visualizar el booteo en tiempo real, durante el arranque presioná <code>Esc</code> o <code>Shift</code> y mirá el output del kernel. Después de logueado, <code>journalctl -b</code> te muestra todo el log del último booteo.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-9-1',
          q: 'El POST lo ejecuta el sistema operativo después de bootear.',
          a: false,
          explain: 'Falso. El POST corre antes del SO: lo ejecuta el firmware de la BIOS/UEFI al encender la máquina.',
        },
        {
          id: 'tf-9-2',
          q: 'GRUB carga el kernel y un sistema de archivos temporal llamado initramfs antes de pasarle el control a Init.',
          a: true,
          explain: 'Verdadero. Esa es exactamente la etapa 3 de la secuencia.',
        },
        {
          id: 'tf-9-3',
          q: 'El proceso Init o systemd tiene PID = 1 porque es el primer proceso del sistema.',
          a: true,
          explain: 'Verdadero. Es el primer proceso de usuario y el ancestro de todos los demás.',
        },
        {
          id: 'tf-9-4',
          q: 'El montaje de las particiones adicionales se hace antes de que arranquen los servicios.',
          a: false,
          explain: 'Falso. Primero arrancan los servicios y demonios básicos; recién después se monta el resto del FS en read-write según <code>/etc/fstab</code>.',
        },
      ],
      mc: [
        {
          id: 'mc-9-1',
          q: '¿Cuál es el orden correcto de los pasos clave del booteo?',
          options: [
            'POST → Kernel → GRUB → Init → Servicios',
            'POST → GRUB → Kernel → Init → Servicios',
            'GRUB → POST → Kernel → Servicios → Init',
            'Kernel → POST → GRUB → Init → Servicios',
          ],
          correctIndex: 1,
          explain: 'El orden es: POST → GRUB (carga el kernel) → Kernel (monta initramfs) → Init/systemd → activa servicios.',
        },
        {
          id: 'mc-9-2',
          q: '¿Qué archivo define las particiones que se montan en el paso 6?',
          options: ['<code>/etc/mtab</code>', '<code>/boot/grub/grub.cfg</code>', '<code>/etc/fstab</code>', '<code>/etc/inittab</code>'],
          correctIndex: 2,
          explain: '<code>/etc/fstab</code> contiene las particiones a montar al arranque.',
        },
        {
          id: 'mc-9-3',
          q: 'Estás en consola y arranca un programa para mostrar el login. ¿Cuál es típicamente?',
          options: ['<code>gdm</code>', '<code>lightdm</code>', '<code>agetty</code>', '<code>bash</code>'],
          correctIndex: 2,
          explain: '<code>agetty</code> es el getty común para terminales virtuales. <code>gdm</code> y <code>lightdm</code> son login managers gráficos.',
        },
        {
          id: 'mc-9-4',
          q: '¿A qué target de systemd equivale el runlevel 5?',
          options: ['<code>multi-user.target</code>', '<code>graphical.target</code>', '<code>rescue.target</code>', '<code>poweroff.target</code>'],
          correctIndex: 1,
          explain: 'Runlevel 5 es multiusuario con GUI, que se mapea a <code>graphical.target</code>.',
        },
      ],
      ms: [
        {
          id: 'ms-9-1',
          q: '¿Cuáles son los 8 pasos del booteo según el apunte?',
          options: [
            'POST (Power-On Self-Test)',
            'Carga del gestor de arranque (GRUB)',
            'Kernel + initramfs',
            'Proceso Init o systemd',
            'Compilación del kernel desde el disco',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son los primeros pasos textuales del booteo. El kernel ya viene compilado: no se compila en el arranque.',
        },
        {
          id: 'ms-9-2',
          q: '¿Qué afirmaciones sobre el proceso Init/systemd son correctas?',
          options: [
            'Es el primer proceso del sistema (PID 1)',
            'Lo lanza el kernel',
            'Comienza a ejecutar scripts de arranque',
            'Configura runlevels (Init) o targets (systemd)',
            'Es el proceso de menor prioridad del sistema',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Es el ANCESTRO de todos los procesos, no el de menor prioridad.',
        },
        {
          id: 'ms-9-3',
          q: '¿Qué correspondencias entre runlevel y target son correctas según el cuadro?',
          options: [
            'Runlevel 0 → poweroff.target',
            'Runlevel 1 → rescue.target',
            'Runlevel 5 → graphical.target',
            'Runlevel 6 → reboot.target',
            'Runlevel 5 → poweroff.target',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del cuadro. Runlevel 5 es GUI (graphical.target), no poweroff.',
        },
        {
          id: 'ms-9-4',
          q: '¿Qué afirmaciones sobre los pasos finales del booteo son correctas?',
          options: [
            'El montaje del FS (read-write) se hace según /etc/fstab',
            'agetty se lanza en consola para el inicio de sesión',
            'gdm o lightdm se lanzan en entorno gráfico',
            'El usuario entra a un shell como bash o al entorno gráfico',
            'Las particiones adicionales se montan ANTES de los servicios y demonios',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Primero arrancan servicios y demonios, DESPUÉS se monta el FS adicional.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-9-1',
        front: 'POST',
        back: 'Power-On Self-Test. Diagnóstico del hardware que ejecuta la BIOS/UEFI al encender la máquina.',
      },
      {
        id: 'fc-9-2',
        front: 'initramfs',
        back: 'Sistema de archivos temporal que carga el kernel para tener drivers y poder montar el FS real.',
      },
      {
        id: 'fc-9-3',
        front: 'PID 1',
        back: 'El primer proceso del sistema: tradicionalmente <code>init</code>, en distros modernas <code>systemd</code>. Es el ancestro de todos los demás procesos.',
      },
      {
        id: 'fc-9-4',
        front: 'Orden de booteo (8 pasos)',
        back: '1) POST · 2) GRUB · 3) Kernel + initramfs · 4) Init/systemd · 5) Servicios · 6) Montaje FS · 7) Login manager · 8) Sesión del usuario.',
      },
      {
        id: 'fc-9-5',
        front: 'Runlevel 0 / 6',
        back: '0 = apagado (<code>poweroff.target</code>). 6 = reinicio (<code>reboot.target</code>).',
      },
      {
        id: 'fc-9-6',
        front: 'Runlevel 3 vs 5',
        back: '3 = multiusuario con red sin GUI. 5 = multiusuario con red con GUI. En systemd ambos van a <code>multi-user.target</code> y <code>graphical.target</code> respectivamente.',
      },
      {
        id: 'fc-9-7',
        front: '<code>/etc/fstab</code>',
        back: 'Archivo donde están definidas las particiones que se montan al arranque (paso 6).',
      },
    ],
  },
  // ---------- SECCIÓN 10 ----------
  {
    id: '10',
    unit: '3',
    title: 'Init (System V)',
    criollo:
      'Init es el sistema clásico de arranque heredado de UNIX System V. Arranca scripts de forma secuencial según el runlevel actual, y es el primer proceso del sistema (PID 1). Hoy lo reemplazó systemd en la mayoría de las distros.',
    blocks: [
      {
        type: 'p',
        text:
          '<strong>Init</strong> (abreviatura de <em>Initialization</em>) es un proceso que se inicia ni bien arranca el sistema operativo y sigue ejecutándose hasta que se apaga. Es el responsable de iniciar todos los servicios y procesos necesarios para que el sistema esté operativo. Por ser el primer proceso, su <strong>PID es 1</strong>.',
      },
      {
        type: 'p',
        text:
          'Nació con UNIX bajo el diseño de <strong>System V (sysv init)</strong>, y Linux lo heredó. Su trabajo consiste en ejecutar scripts de inicio de forma secuencial; cada nivel de ejecución se conoce como <strong>runlevel</strong> y tiene una lista de servicios que deben iniciarse o detenerse.',
      },
      {
        type: 'h3',
        text: 'Runlevels',
        criollo: 'Cada runlevel es un "modo" del sistema con un set de servicios definidos. En Debian el por defecto es el 2.',
      },
      {
        type: 'p',
        text:
          'Los runlevels representan modos de operación del sistema. Cada uno define un conjunto de servicios que se ejecutan. El predeterminado en Debian es el <strong>Runlevel 2</strong>.',
      },
      {
        type: 'table',
        caption: 'Runlevels de System V',
        headers: ['Runlevel', 'Descripción'],
        rows: [
          ['0', 'Apagado del sistema'],
          ['1', 'Monousuario'],
          ['2', 'Multiusuario sin red'],
          ['3', 'Multiusuario con red, sin GUI'],
          ['4', 'Reservado para personalizar'],
          ['5', 'Multiusuario con red, con GUI'],
          ['6', 'Reinicio'],
        ],
      },
      {
        type: 'h3',
        text: 'Archivos importantes de Init',
      },
      {
        type: 'table',
        caption: 'Rutas clave en sistemas con Init',
        headers: ['Ruta', 'Para qué sirve'],
        rows: [
          ['<code>/etc/inittab</code>', 'Archivo principal de configuración donde se define el runlevel predeterminado y qué procesos deben iniciarse. <strong>Obsoleto</strong> en sistemas con systemd.'],
          ['<code>/etc/init.d/</code>', 'Contiene los scripts de inicio para servicios individuales y la administración de estado (start, stop, status, restart).'],
          ['<code>/etc/rcX.d/</code>', 'Directorio (X = número de runlevel) con enlaces simbólicos a los scripts de <code>init.d</code>.'],
        ],
      },
      {
        type: 'h3',
        text: 'Comandos',
      },
      {
        type: 'p',
        text: 'Para gestionar servicios se usa <code>service "nombre del servicio" &lt;opción&gt;</code> con estas opciones:',
      },
      {
        type: 'ul',
        items: [
          '<code>status</code>: ver el estado del servicio.',
          '<code>start</code>: iniciar el servicio.',
          '<code>stop</code>: detener el servicio.',
          '<code>restart</code>: reiniciar el servicio.',
          '<code>enable</code>: habilitar el servicio (que arranque en el booteo).',
          '<code>disable</code>: deshabilitarlo.',
        ],
      },
      {
        type: 'p',
        text: 'Para cambiar de runlevel manualmente:',
      },
      {
        type: 'ul',
        items: [
          '<code>init 3</code>: cambia al runlevel 3 (multiusuario sin GUI).',
          '<code>init 1</code>: cambia al runlevel 1 (monousuario).',
          '<code>init 0</code>: apagado. También se puede usar <code>shutdown -h now</code>.',
          '<code>init 6</code>: reinicio. También se puede usar <code>reboot</code> o <code>shutdown -r now</code>.',
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'En la práctica, en distros modernas estos comandos siguen "funcionando" pero por debajo invocan a <code>systemctl</code>. Es retrocompatibilidad: el día que te toque una máquina vieja, <code>service apache2 start</code> sigue siendo lo mismo de siempre.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-10-1',
          q: 'Init es el primer proceso del sistema y tiene PID 1.',
          a: true,
          explain: 'Verdadero. Es el primer proceso de usuario que lanza el kernel después del booteo.',
        },
        {
          id: 'tf-10-2',
          q: 'En Debian, el runlevel predeterminado de Init es el 5.',
          a: false,
          explain: 'Falso. En Debian el runlevel predeterminado es el 2 (multiusuario sin red, según el apunte).',
        },
        {
          id: 'tf-10-3',
          q: 'El archivo /etc/inittab sigue siendo el archivo de configuración principal en sistemas con systemd.',
          a: false,
          explain: 'Falso. <code>/etc/inittab</code> es propio de SysV Init y está obsoleto en sistemas con systemd.',
        },
        {
          id: 'tf-10-4',
          q: 'Los directorios /etc/rcX.d/ contienen enlaces simbólicos a los scripts de /etc/init.d/.',
          a: true,
          explain: 'Verdadero. Cada <code>rcX.d/</code> (X = runlevel) tiene los symlinks a los scripts de servicios de ese nivel.',
        },
      ],
      mc: [
        {
          id: 'mc-10-1',
          q: '¿Qué runlevel apaga el sistema?',
          options: ['0', '1', '5', '6'],
          correctIndex: 0,
          explain: 'Runlevel 0 = apagado. Runlevel 6 = reinicio. 1 es monousuario, 5 es multiusuario con GUI.',
        },
        {
          id: 'mc-10-2',
          q: '¿Cuál es el equivalente de <code>init 0</code>?',
          options: ['<code>reboot</code>', '<code>shutdown -r now</code>', '<code>shutdown -h now</code>', '<code>poweroff.target</code>'],
          correctIndex: 2,
          explain: '<code>init 0</code> apaga el sistema, igual que <code>shutdown -h now</code>.',
        },
        {
          id: 'mc-10-3',
          q: '¿Qué opción de <code>service</code> habilita un servicio para que arranque en el booteo?',
          options: ['<code>start</code>', '<code>enable</code>', '<code>restart</code>', '<code>status</code>'],
          correctIndex: 1,
          explain: '<code>enable</code> habilita el servicio. <code>start</code> sólo lo arranca para esta sesión.',
        },
        {
          id: 'mc-10-4',
          q: '¿Dónde están los scripts de inicio para servicios individuales en SysV Init?',
          options: ['<code>/etc/inittab</code>', '<code>/etc/init.d/</code>', '<code>/lib/systemd/system/</code>', '<code>/etc/grub.d/</code>'],
          correctIndex: 1,
          explain: '<code>/etc/init.d/</code> contiene los scripts; <code>/etc/rcX.d/</code> tiene los enlaces simbólicos por runlevel.',
        },
      ],
      ms: [
        {
          id: 'ms-10-1',
          q: '¿Qué afirmaciones sobre Init (System V) son correctas?',
          options: [
            'Es el primer proceso del sistema (PID 1)',
            'Nació con UNIX bajo el diseño de System V',
            'Ejecuta scripts de inicio de forma secuencial',
            'Cada nivel de ejecución se llama runlevel',
            'Su PID es siempre el más alto del sistema',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Init tiene el PID más BAJO (1), no el más alto.',
        },
        {
          id: 'ms-10-2',
          q: '¿Cuáles son los runlevels y qué describen?',
          options: [
            '0 = Apagado del sistema',
            '1 = Monousuario',
            '2 = Multiusuario sin red (predeterminado en Debian)',
            '5 = Multiusuario con red y GUI',
            '6 = Modo gráfico minimalista',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. Runlevel 6 es REINICIO, no GUI.',
        },
        {
          id: 'ms-10-3',
          q: '¿Qué archivos/directorios importantes hay en sistemas Init?',
          options: [
            '/etc/inittab',
            '/etc/init.d/',
            '/etc/rcX.d/',
            '/etc/systemd/system/',
            '/etc/grub.d/',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son las rutas textuales de SysV Init. /etc/systemd/system/ es de systemd y /etc/grub.d/ es de GRUB.',
        },
        {
          id: 'ms-10-4',
          q: '¿Qué opciones acepta el comando service?',
          options: [
            'status',
            'start',
            'stop',
            'restart',
            'compile',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro están listadas en el apunte (junto con enable y disable). "compile" no es una opción.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-10-1',
        front: 'Init',
        back: 'Primer proceso del sistema (PID 1) en sistemas SysV. Inicia servicios según el runlevel actual.',
      },
      {
        id: 'fc-10-2',
        front: 'Runlevel 2 (Debian)',
        back: 'Multiusuario sin red. Es el predeterminado en Debian según el apunte.',
      },
      {
        id: 'fc-10-3',
        front: 'Runlevel 0 / 6',
        back: '0 = apagar el sistema. 6 = reiniciarlo.',
      },
      {
        id: 'fc-10-4',
        front: '<code>/etc/inittab</code>',
        back: 'Archivo principal de configuración de Init: define el runlevel por defecto y los procesos a iniciar. Obsoleto con systemd.',
      },
      {
        id: 'fc-10-5',
        front: '<code>/etc/init.d/</code>',
        back: 'Directorio con los scripts de inicio para servicios individuales (start, stop, status, restart).',
      },
      {
        id: 'fc-10-6',
        front: '<code>/etc/rcX.d/</code>',
        back: 'Directorio (X = runlevel) con enlaces simbólicos a los scripts de <code>init.d</code> que se ejecutan en ese runlevel.',
      },
      {
        id: 'fc-10-7',
        front: 'Comando service',
        back: '<code>service NOMBRE &lt;opción&gt;</code>. Opciones: status, start, stop, restart, enable, disable.',
      },
      {
        id: 'fc-10-8',
        front: 'Cambiar a monousuario',
        back: '<code>init 1</code> entra al runlevel 1 (monousuario), útil para tareas de mantenimiento.',
      },
    ],
  },
  // ---------- SECCIÓN 11 ----------
  {
    id: '11',
    unit: '3',
    title: 'Systemd y resumen comparativo',
    criollo:
      'Systemd reemplazó a Init desde Debian 8 (2015). En vez de runlevels usa "targets", maneja dependencias entre servicios y trae herramientas como systemctl y journalctl. Por convención UNIX, los daemons terminan en "d".',
    blocks: [
      {
        type: 'p',
        text:
          '<strong>Systemd</strong> es un daemon de gestión del sistema. El nombre sigue la convención UNIX de agregar "d" al final de los daemons para que se reconozcan rápido. Al igual que Init, systemd es el padre de todos los demás procesos (directa o indirectamente) y es el primer proceso que se inicia en el arranque, por lo que generalmente se le asigna <strong>PID = 1</strong>.',
      },
      {
        type: 'p',
        text:
          'Se pensó como una solución más eficiente para la inicialización de sistemas en Linux, sustituyendo a init a partir de <strong>Debian 8 "Jessie" (2015)</strong>.',
      },
      {
        type: 'h3',
        text: 'Targets',
        criollo: 'Los targets son como los runlevels pero más flexibles: agrupan servicios y resuelven dependencias entre ellos.',
      },
      {
        type: 'p',
        text:
          'Los <strong>targets</strong> son objetivos o estados del sistema en systemd que agrupan servicios y configuraciones necesarias para alcanzar un propósito específico. Representan una abstracción que permite manejar dependencias entre servicios.',
      },
      {
        type: 'table',
        caption: 'Targets principales en systemd',
        headers: ['Target', 'Propósito'],
        rows: [
          ['<code>basic.target</code>', 'Estado mínimo para iniciar servicios esenciales (antes de multi-user).'],
          ['<code>multi-user.target</code>', 'Sistema operativo completo en modo texto (similar al runlevel 3).'],
          ['<code>graphical.target</code>', 'Modo gráfico con entorno de escritorio (similar al runlevel 5).'],
          ['<code>rescue.target</code>', 'Modo rescate para mantenimiento del sistema.'],
          ['<code>emergency.target</code>', 'Modo emergencia (sólo consola raíz, sin servicios).'],
          ['<code>poweroff.target</code>', 'Apagar el sistema.'],
          ['<code>reboot.target</code>', 'Reiniciar el sistema.'],
          ['<code>default.target</code>', 'Target predeterminado (enlace simbólico a otro target).'],
        ],
      },
      {
        type: 'h3',
        text: 'Archivos importantes de Systemd',
      },
      {
        type: 'table',
        caption: 'Rutas clave en sistemas con systemd',
        headers: ['Ruta', 'Para qué sirve'],
        rows: [
          ['<code>/etc/systemd/system/</code>', 'Directorio donde se encuentran los archivos para habilitar, deshabilitar o modificar los servicios del sistema.'],
          ['<code>/lib/systemd/system/</code>', 'Directorio con las unidades predeterminadas y los servicios provistos por el SO o los paquetes instalados.'],
          ['<code>/etc/systemd/system/default.target</code>', 'Especifica el target predeterminado del sistema, similar al runlevel por defecto en SysV.'],
          ['<code>/etc/systemd/system/multi-user.target.wants/</code>', 'Enlaces simbólicos a unidades que arrancan cuando se entra al target <code>multi-user.target</code> (equivalente al runlevel 3).'],
          ['<code>/etc/systemd/journald.conf</code>', 'Configuración del servicio <code>journald</code>, que gestiona los logs del sistema.'],
          ['<code>/etc/systemd/logind.conf</code>', 'Configuración del servicio <code>logind</code>, que maneja las sesiones de los usuarios.'],
        ],
      },
      {
        type: 'h3',
        text: 'Comandos',
      },
      {
        type: 'p',
        text: 'Para gestionar servicios con systemd se usa <code>systemctl &lt;opción&gt; "nombre del servicio"</code>:',
      },
      {
        type: 'ul',
        items: [
          '<code>status</code>: ver el estado del servicio.',
          '<code>start</code>: iniciar el servicio.',
          '<code>stop</code>: detener el servicio.',
          '<code>restart</code>: reiniciar el servicio.',
          '<code>enable</code>: habilitar el servicio (que arranque en el booteo).',
          '<code>disable</code>: deshabilitarlo.',
        ],
      },
      {
        type: 'p',
        text: 'Para revisar logs se usa <code>journalctl</code>:',
      },
      {
        type: 'ul',
        items: [
          '<code>-u</code>: ver registros de un servicio específico.',
          '<code>-b</code>: ver el registro del arranque actual.',
          '<code>-f</code>: ver registros en tiempo real (modo follow).',
        ],
      },
      {
        type: 'h3',
        text: 'Resumen comparativo Init vs. systemd',
      },
      {
        type: 'table',
        caption: 'Equivalencias entre runlevels (SysV) y targets (systemd)',
        headers: ['Runlevel (SysV)', 'Target en systemd', 'Descripción'],
        rows: [
          ['0', '<code>poweroff.target</code>', 'Apaga el sistema.'],
          ['1', '<code>rescue.target</code>', 'Modo de rescate o monousuario (mantenimiento).'],
          ['2', '<code>multi-user.target</code>', 'Multiusuario sin entorno gráfico.'],
          ['3', '<code>multi-user.target</code>', 'Multiusuario con servicios de red, sin GUI.'],
          ['4', '(No utilizado)', 'No tiene equivalente en systemd (generalmente no se usa).'],
          ['5', '<code>graphical.target</code>', 'Multiusuario con entorno gráfico.'],
          ['6', '<code>reboot.target</code>', 'Reinicia el sistema.'],
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'En el día a día: <code>systemctl status NOMBRE</code> para ver cómo está un servicio, <code>systemctl restart NOMBRE</code> cuando lo tocaste y querés que tome los cambios, y <code>journalctl -u NOMBRE -f</code> para ver el log en vivo y entender por qué no levanta.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-11-1',
          q: 'Systemd reemplazó a Init en Debian a partir de la versión 8 "Jessie" (2015).',
          a: true,
          explain: 'Verdadero. Desde Debian 8 systemd es el sistema de inicialización por defecto.',
        },
        {
          id: 'tf-11-2',
          q: 'En systemd, el target equivalente al runlevel 5 es multi-user.target.',
          a: false,
          explain: 'Falso. Runlevel 5 = multiusuario con GUI, que en systemd es <code>graphical.target</code>. <code>multi-user.target</code> equivale al runlevel 3.',
        },
        {
          id: 'tf-11-3',
          q: 'journalctl -f permite ver registros en tiempo real (modo follow).',
          a: true,
          explain: 'Verdadero. La <code>-f</code> hace seguimiento en vivo del log.',
        },
        {
          id: 'tf-11-4',
          q: 'systemctl enable inicia el servicio inmediatamente.',
          a: false,
          explain: 'Falso. <code>enable</code> habilita el servicio para que arranque en el booteo, pero no lo inicia ahora mismo. Para arrancarlo ya, hay que usar <code>start</code> (o <code>enable --now</code>).',
        },
        {
          id: 'tf-11-5',
          q: 'default.target es un enlace simbólico que apunta al target predeterminado del sistema.',
          a: true,
          explain: 'Verdadero. Es el equivalente al runlevel predeterminado: <code>default.target</code> apunta al target que se carga al arrancar.',
        },
      ],
      mc: [
        {
          id: 'mc-11-1',
          q: '¿Cuál es el target de systemd para arranque en modo gráfico?',
          options: ['<code>basic.target</code>', '<code>multi-user.target</code>', '<code>graphical.target</code>', '<code>default.target</code>'],
          correctIndex: 2,
          explain: '<code>graphical.target</code> arranca el sistema con entorno gráfico (equivalente al runlevel 5).',
        },
        {
          id: 'mc-11-2',
          q: '¿Qué comando muestra el log del último arranque?',
          options: ['<code>journalctl -u boot</code>', '<code>journalctl -b</code>', '<code>journalctl -f</code>', '<code>dmesg --boot</code>'],
          correctIndex: 1,
          explain: '<code>journalctl -b</code> muestra el registro del arranque actual.',
        },
        {
          id: 'mc-11-3',
          q: '¿Dónde están las unidades predeterminadas y los servicios provistos por el SO o los paquetes?',
          options: [
            '<code>/etc/systemd/system/</code>',
            '<code>/lib/systemd/system/</code>',
            '<code>/etc/init.d/</code>',
            '<code>/var/lib/systemd/</code>',
          ],
          correctIndex: 1,
          explain: '<code>/lib/systemd/system/</code> tiene las units provistas por paquetes. <code>/etc/systemd/system/</code> es donde el admin pone overrides.',
        },
        {
          id: 'mc-11-4',
          q: '¿Cuál es la principal ventaja de los targets sobre los runlevels?',
          options: [
            'Son numéricos en vez de textuales',
            'Manejan dependencias entre servicios y son más flexibles',
            'Funcionan sin kernel',
            'Sólo existen 3 targets posibles',
          ],
          correctIndex: 1,
          explain: 'Los targets agrupan servicios y resuelven sus dependencias, lo que los hace más flexibles que los runlevels tradicionales.',
        },
      ],
      ms: [
        {
          id: 'ms-11-1',
          q: '¿Qué afirmaciones sobre systemd son correctas?',
          options: [
            'Es un daemon de gestión del sistema',
            'Es el padre directo o indirecto de todos los procesos',
            'Se le asigna PID = 1',
            'Reemplaza a init desde Debian 8 "Jessie" (2015)',
            'Es propio exclusivamente de distribuciones gráficas',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. systemd está en distros minimalistas también, no solo gráficas.',
        },
        {
          id: 'ms-11-2',
          q: '¿Qué targets de systemd existen según el apunte?',
          options: [
            'multi-user.target (modo texto multiusuario)',
            'graphical.target (modo gráfico)',
            'rescue.target (rescate/mantenimiento)',
            'emergency.target (consola raíz sin servicios)',
            'compile.target (compilar paquetes)',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales (junto con basic, poweroff, reboot y default). "compile.target" no existe.',
        },
        {
          id: 'ms-11-3',
          q: '¿Qué opciones de systemctl menciona el apunte?',
          options: [
            'status',
            'start / stop',
            'restart',
            'enable / disable',
            'rebuild',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. "rebuild" no es una opción de systemctl.',
        },
        {
          id: 'ms-11-4',
          q: '¿Qué opciones de journalctl describe el apunte?',
          options: [
            '-u: ver registros de un servicio específico',
            '-b: ver el registro del arranque actual',
            '-f: ver registros en tiempo real (follow)',
            '-n: limitar la cantidad de líneas mostradas',
            '-z: comprimir los logs',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son textuales. -n y -z no se mencionan en el apunte.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-11-1',
        front: 'Systemd',
        back: 'Daemon de gestión del sistema. Primer proceso (PID 1) en distros modernas. Reemplaza a Init desde Debian 8 (2015).',
      },
      {
        id: 'fc-11-2',
        front: 'Target',
        back: 'Estado del sistema en systemd que agrupa servicios y maneja sus dependencias. Equivalente flexible al runlevel.',
      },
      {
        id: 'fc-11-3',
        front: '<code>multi-user.target</code> / <code>graphical.target</code>',
        back: 'multi-user = modo texto multiusuario (runlevel 3). graphical = modo gráfico (runlevel 5).',
      },
      {
        id: 'fc-11-4',
        front: '<code>default.target</code>',
        back: 'Symlink al target que se carga por defecto al bootear. Es el equivalente al runlevel predeterminado en SysV.',
      },
      {
        id: 'fc-11-5',
        front: 'systemctl: opciones básicas',
        back: 'status, start, stop, restart, enable, disable. Mismo verbo que <code>service</code>, sintaxis ligeramente distinta.',
      },
      {
        id: 'fc-11-6',
        front: 'journalctl -u / -b / -f',
        back: '-u NOMBRE: logs de un servicio. -b: log del arranque actual. -f: seguir el log en tiempo real.',
      },
      {
        id: 'fc-11-7',
        front: '<code>/etc/systemd/system/</code> vs <code>/lib/systemd/system/</code>',
        back: '/etc es para el admin (overrides y unidades propias). /lib es para las unidades provistas por el SO o los paquetes.',
      },
      {
        id: 'fc-11-8',
        front: 'Convención de nombres de daemons',
        back: 'Terminan en "d" para reconocerse rápido (systemd, cron, sshd, journald, logind).',
      },
      {
        id: 'fc-11-9',
        front: 'Runlevel 1 ↔ ?',
        back: '<code>rescue.target</code> — modo de rescate o monousuario para mantenimiento.',
      },
    ],
  },
  // ---------- SECCIÓN 12 ----------
  {
    id: '12',
    unit: '4',
    title: 'Alias y espacios de trabajo',
    criollo:
      'Los alias te dejan reemplazar comandos largos por uno corto. La gracia es que ahorrás tiempo y evitás errores de tipeo. Si querés que duren más allá de la sesión, hay que meterlos en archivos como .bashrc.',
    blocks: [
      {
        type: 'p',
        text:
          'Los <strong>alias</strong> se utilizan para reemplazar comandos (simples o complejos) por otros más cortos.',
      },
      {
        type: 'h3',
        text: 'Ventajas de usar alias',
      },
      {
        type: 'ul',
        items: [
          'Ahorra tiempo y simplifica comandos largos.',
          'Minimiza errores tipográficos en comandos complejos y frecuentes.',
          'Permite personalizar comandos predeterminados para adaptarlos a necesidades específicas.',
        ],
      },
      {
        type: 'p',
        text:
          'Si usás habitualmente <code>ls -lh</code> para que liste el contenido de un directorio en formato extendido y con tamaños legibles, podrías reducirlo definiendo un alias:',
      },
      {
        type: 'h3',
        text: 'Ejemplos',
      },
      {
        type: 'ul',
        items: [
          '<code>alias ll=\'ls -lh\'</code>',
          '<code>alias oculto=\'ls -la\'</code>',
        ],
      },
      {
        type: 'p',
        text: 'Al ejecutar <code>ll</code> se expande al comando original. Otro ejemplo con comandos encadenados:',
      },
      {
        type: 'ul',
        items: [
          '<code>alias actualizar=\'sudo apt update &amp;&amp; sudo apt upgrade\'</code>',
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'Definir un alias así en la terminal es <strong>temporal</strong>: dura hasta que cierres la sesión. Para que sea permanente, hay que ponerlo en un archivo de configuración del sistema o del usuario.',
      },
      {
        type: 'p',
        text:
          'Si hacés cambios en <code>.bashrc</code>, ejecutá <code>source ~/.bashrc</code> para que la sesión actual recargue la configuración sin necesidad de cerrar y volver a abrir.',
      },
      {
        type: 'h3',
        text: 'Espacios de trabajo',
        criollo: 'Como Linux es multiusuario, cada uno tiene sus propios archivos de configuración (en su home) y existen archivos globales (en /etc) que afectan a todos.',
      },
      {
        type: 'p',
        text:
          'Al ser un sistema operativo multiusuario, en Linux podemos configurar nuestros propios espacios de trabajo o, si somos administradores, dejar configuraciones globales que afecten a todos. Existen <strong>2 tipos</strong> de archivos de configuración: <strong>de usuario</strong> y <strong>del sistema</strong>.',
      },
      {
        type: 'h3',
        text: 'Archivos de usuario',
        criollo: 'Están en el home y arrancan con punto (archivos ocultos).',
      },
      {
        type: 'p',
        text:
          'Son específicos de cada usuario y se ubican en su directorio de inicio. Comienzan con un punto (<code>.</code>) y se conocen como archivos ocultos.',
      },
      {
        type: 'table',
        caption: 'Archivos de configuración de usuario',
        headers: ['Archivo', 'Para qué sirve'],
        rows: [
          ['<code>.bashrc</code>', 'Configuración del shell bash. Acá se colocan los alias, funciones y variables de entorno que querés que se mantengan permanentemente.'],
          ['<code>.profile</code>', 'Puede ser ejecutado por cualquier shell. Se ejecuta al iniciar sesión y puede incluir comandos para configurar el entorno.'],
          ['<code>.bash_profile</code>', 'Específico de bash. Podría no existir (se puede crear). Si existe, bash lo prefiere por sobre <code>.profile</code>.'],
        ],
      },
      {
        type: 'h3',
        text: 'Archivos del sistema',
        criollo: 'Afectan a todos los usuarios. Viven en /etc.',
      },
      {
        type: 'p',
        text:
          'Afectan a todos los usuarios y generalmente se encuentran en el directorio <code>/etc</code>.',
      },
      {
        type: 'table',
        caption: 'Archivos de configuración globales',
        headers: ['Archivo', 'Para qué sirve'],
        rows: [
          ['<code>/etc/bash.bashrc</code>', 'Configuración global de bash, equivalente a <code>.bashrc</code>. Se ejecuta para todos los usuarios en cada sesión.'],
          ['<code>/etc/profile</code>', 'Configuración global equivalente a <code>.profile</code>. Se carga al iniciar sesión.'],
          ['<code>/etc/environment</code>', 'Define variables de entorno globales que se aplican a todos los usuarios y procesos. A diferencia de los otros, <strong>sólo define variables</strong>, no ejecuta comandos ni scripts.'],
        ],
      },
      {
        type: 'p',
        text: 'Ejemplo de uso típico de <code>/etc/environment</code>:',
      },
      {
        type: 'ul',
        items: [
          '<code>JAVA_HOME="/usr/lib/jvm/java-8-openjdk-amd64"</code>',
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Regla mental: si lo querés para vos solo y son alias/funciones → <code>~/.bashrc</code>. Si es una variable global para todo el sistema → <code>/etc/environment</code>. Si es algo al iniciar sesión y querés que corra cualquier shell → <code>.profile</code>.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-12-1',
          q: 'Un alias definido directamente en la terminal sobrevive al cierre de sesión.',
          a: false,
          explain: 'Falso. Es temporal: dura mientras la sesión esté abierta. Para que sea permanente hay que ponerlo en <code>.bashrc</code> (u otro archivo de config).',
        },
        {
          id: 'tf-12-2',
          q: 'Después de modificar .bashrc, ejecutar "source ~/.bashrc" recarga la configuración sin reabrir la terminal.',
          a: true,
          explain: 'Verdadero. <code>source</code> ejecuta el archivo en la shell actual, aplicando los cambios al toque.',
        },
        {
          id: 'tf-12-3',
          q: 'El archivo /etc/environment puede ejecutar comandos arbitrarios.',
          a: false,
          explain: 'Falso. A diferencia de <code>.profile</code> o <code>.bashrc</code>, <code>/etc/environment</code> sólo define variables de entorno; no corre comandos ni scripts.',
        },
        {
          id: 'tf-12-4',
          q: 'Los archivos de configuración personales empiezan con punto y por eso se llaman archivos ocultos.',
          a: true,
          explain: 'Verdadero. <code>.bashrc</code>, <code>.profile</code>, <code>.bash_profile</code> son ocultos por convención (los archivos que empiezan con "." no aparecen con <code>ls</code> simple).',
        },
      ],
      mc: [
        {
          id: 'mc-12-1',
          q: '¿Cuál es la sintaxis correcta para definir un alias?',
          options: [
            '<code>alias ll &gt; "ls -lh"</code>',
            '<code>alias ll=\'ls -lh\'</code>',
            '<code>set alias ll="ls -lh"</code>',
            '<code>export ll=\'ls -lh\'</code>',
          ],
          correctIndex: 1,
          explain: 'Sintaxis: <code>alias NOMBRE=\'comando\'</code>, sin espacios alrededor del <code>=</code>.',
        },
        {
          id: 'mc-12-2',
          q: '¿Dónde corresponde poner alias personales para que duren entre sesiones?',
          options: [
            '<code>/etc/profile</code>',
            '<code>/etc/environment</code>',
            '<code>~/.bashrc</code>',
            '<code>/etc/grub.d/</code>',
          ],
          correctIndex: 2,
          explain: '<code>~/.bashrc</code> es el lugar canónico para alias, funciones y variables de entorno propias del usuario.',
        },
        {
          id: 'mc-12-3',
          q: 'Si un usuario tiene tanto .profile como .bash_profile, ¿cuál usa bash al iniciar sesión?',
          options: [
            'Ejecuta primero <code>.profile</code> y después <code>.bash_profile</code>',
            'Bash prefiere <code>.bash_profile</code> sobre <code>.profile</code>',
            'Bash ignora ambos si existe <code>.bashrc</code>',
            'Bash ejecuta los dos en paralelo',
          ],
          correctIndex: 1,
          explain: 'Cuando ambos existen, bash prefiere <code>.bash_profile</code> sobre <code>.profile</code>.',
        },
        {
          id: 'mc-12-4',
          q: 'Querés que JAVA_HOME esté seteado para todos los usuarios y procesos. ¿Dónde lo ponés?',
          options: [
            '<code>~/.bashrc</code>',
            '<code>/etc/bash.bashrc</code>',
            '<code>/etc/environment</code>',
            '<code>/etc/init.d/java</code>',
          ],
          correctIndex: 2,
          explain: '<code>/etc/environment</code> aplica variables de entorno para todo el sistema (usuarios y procesos).',
        },
      ],
      ms: [
        {
          id: 'ms-12-1',
          q: '¿Cuáles son ventajas de usar alias según el apunte?',
          options: [
            'Ahorra tiempo y simplifica comandos largos',
            'Minimiza errores tipográficos',
            'Permite personalizar comandos predeterminados',
            'Reemplaza la necesidad de aprender bash',
            'Mejora el throughput de I/O del disco',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son textuales. Los alias no reemplazan bash ni cambian el rendimiento de I/O.',
        },
        {
          id: 'ms-12-2',
          q: '¿Qué afirmaciones sobre alias temporales vs permanentes son correctas?',
          options: [
            'Un alias definido en la terminal es temporal: dura hasta cerrar la sesión',
            'Para que sea permanente hay que ponerlo en un archivo de configuración',
            '~/.bashrc es el lugar habitual para alias personales',
            'source ~/.bashrc recarga la configuración sin reabrir terminal',
            'Los alias definidos en la terminal sobreviven al cierre de sesión',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. El último es justamente lo que el apunte advierte contra.',
        },
        {
          id: 'ms-12-3',
          q: '¿Qué archivos de configuración de USUARIO menciona el apunte?',
          options: [
            '.bashrc',
            '.profile',
            '.bash_profile',
            '/etc/profile',
            '/etc/environment',
          ],
          correctIndexes: [0, 1, 2],
          explain:
            'Las primeras tres son textuales de usuario. /etc/profile y /etc/environment son globales del SISTEMA.',
        },
        {
          id: 'ms-12-4',
          q: '¿Qué afirmaciones sobre archivos del sistema son correctas?',
          options: [
            'Afectan a todos los usuarios',
            'Generalmente están en /etc',
            '/etc/bash.bashrc es equivalente global a .bashrc',
            '/etc/environment solo define variables, no ejecuta comandos',
            '/etc/environment puede correr scripts complejos',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. /etc/environment NO ejecuta scripts: es la diferencia con .profile y .bashrc.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-12-1',
        front: 'Alias',
        back: 'Reemplazo corto para un comando largo. Sintaxis: <code>alias NOMBRE=\'comando\'</code>.',
      },
      {
        id: 'fc-12-2',
        front: 'Alias temporal vs permanente',
        back: 'Definido en la terminal: dura la sesión. Definido en <code>.bashrc</code>: permanente (recargar con <code>source ~/.bashrc</code>).',
      },
      {
        id: 'fc-12-3',
        front: '<code>~/.bashrc</code>',
        back: 'Configuración personal del shell bash. Acá van los alias, funciones y variables del usuario.',
      },
      {
        id: 'fc-12-4',
        front: '<code>~/.profile</code> vs <code>~/.bash_profile</code>',
        back: '.profile lo ejecuta cualquier shell al iniciar sesión. .bash_profile es específico de bash; si existe, bash lo prefiere por sobre .profile.',
      },
      {
        id: 'fc-12-5',
        front: '<code>/etc/bash.bashrc</code>',
        back: 'Equivalente global a <code>.bashrc</code>: se ejecuta para todos los usuarios en cada sesión.',
      },
      {
        id: 'fc-12-6',
        front: '<code>/etc/environment</code>',
        back: 'Variables de entorno globales. Sólo define variables, no ejecuta comandos. Aplica a todos los usuarios y procesos.',
      },
      {
        id: 'fc-12-7',
        front: 'Recargar .bashrc sin reabrir terminal',
        back: '<code>source ~/.bashrc</code> (también vale <code>. ~/.bashrc</code>).',
      },
      {
        id: 'fc-12-8',
        front: 'Archivos ocultos en Linux',
        back: 'Son los que empiezan con punto (<code>.</code>). <code>ls</code> no los muestra a menos que pidas <code>ls -a</code>.',
      },
    ],
  },
  // ---------- SECCIÓN 13 ----------
  {
    id: '13',
    unit: '4',
    title: 'Señales de los procesos (kill)',
    criollo:
      'El comando kill no siempre "mata": en realidad manda señales a los procesos. Las más usadas son SIGTERM (pedile que se vaya), SIGKILL (mátalo a la fuerza) y SIGHUP (recargá tu config). En total hay 64 señales.',
    blocks: [
      {
        type: 'p',
        text:
          'Los procesos pueden recibir señales externas mediante el comando <code>kill</code>, que alteran sus estados haciendo que modifiquen su comportamiento.',
      },
      {
        type: 'h3',
        text: 'Comando kill',
        criollo: 'A pesar del nombre, kill no siempre mata: manda señales. Algunas terminan procesos, otras los suspenden o los hacen recargar.',
      },
      {
        type: 'p',
        text:
          'El comando <code>kill</code> —que literalmente se traduce como "matar"— sirve para enviar señales a los procesos en ejecución. Entre sus funciones puede terminar o "matar" procesos, suspenderlos o continuarlos. Cuenta con <strong>64 señales</strong> distintas.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/kill-l-output.png',
        alt: 'Salida del comando "kill -l" mostrando las 64 señales disponibles (SIGHUP, SIGINT, SIGTERM, SIGKILL, etc.).',
        caption: 'Salida de <code>kill -l</code>: lista todas las señales disponibles con su número y nombre. Fuente: captura sobre Debian.',
      },
      {
        type: 'h3',
        text: 'SIGTERM (15)',
        criollo: 'La más "educada": le pedís al proceso que termine ordenadamente. Es la default si no especificás señal.',
      },
      {
        type: 'p',
        text:
          'Solicita al proceso que se termine de forma ordenada. Es la señal predeterminada que se envía si no se especifica ninguna. El proceso debería terminar liberando los recursos que estaba usando.',
      },
      {
        type: 'ul',
        items: [
          '<code>kill "PID"</code>',
        ],
      },
      {
        type: 'h3',
        text: 'SIGKILL (9)',
        criollo: 'El mazazo. Termina sí o sí, sin chance de limpiar nada. Se usa cuando SIGTERM no funcionó.',
      },
      {
        type: 'p',
        text:
          'Fuerza la finalización inmediata del proceso, sin darle oportunidad de realizar tareas de limpieza. Se usa cuando un proceso no responde a SIGTERM. Como no termina de forma ordenada, puede causar problemas en algunos casos.',
      },
      {
        type: 'ul',
        items: [
          '<code>kill -9 "PID"</code>',
          '<code>kill -KILL "PID"</code>',
        ],
      },
      {
        type: 'h3',
        text: 'SIGHUP (1)',
        criollo: 'Reload sin reiniciar. Típico de daemons: tocaste su config y querés que la relea sin matarlo.',
      },
      {
        type: 'p',
        text:
          'Se envía para reiniciar el proceso y hacer que vuelva a leer su configuración. Suele usarse con demonios que ya están corriendo. El programa debería recargar su configuración sin detenerse por completo.',
      },
      {
        type: 'ul',
        items: [
          '<code>kill -1 "PID"</code>',
          '<code>kill -HUP "PID"</code>',
        ],
      },
      {
        type: 'h3',
        text: 'SIGSTOP (19)',
        criollo: 'Pause. Detiene el proceso pero no lo termina: libera CPU pero queda en memoria. No se puede ignorar.',
      },
      {
        type: 'p',
        text:
          'Suspende (detiene) el proceso sin terminarlo. Queda en pausa y puede reanudarse más tarde. En este estado libera CPU pero sigue en memoria. <strong>No puede ser ignorada ni bloqueada por el programa.</strong> Generalmente se usa para suspender procesos en segundo plano y obligarlos a liberar CPU.',
      },
      {
        type: 'ul',
        items: [
          '<code>kill -19 "PID"</code>',
          '<code>kill -STOP "PID"</code>',
        ],
      },
      {
        type: 'h3',
        text: 'SIGTSTP (20)',
        criollo: 'El equivalente de Ctrl+Z en la terminal: pausa un proceso que está en primer plano.',
      },
      {
        type: 'p',
        text:
          'Se utiliza para suspender procesos sin terminarlos que estén en primer plano. Es el equivalente a <strong>Ctrl + Z</strong>.',
      },
      {
        type: 'ul',
        items: [
          '<code>kill -20 "PID"</code>',
          '<code>kill -TSTP "PID"</code>',
        ],
      },
      {
        type: 'h3',
        text: 'SIGCONT (18)',
        criollo: 'Resume. Reanuda un proceso que estaba pausado con SIGSTOP/SIGTSTP.',
      },
      {
        type: 'p',
        text: 'Reanuda un proceso previamente detenido con SIGSTOP.',
      },
      {
        type: 'ul',
        items: [
          '<code>kill -CONT "PID"</code>',
          '<code>kill -18 "PID"</code>',
        ],
      },
      {
        type: 'h3',
        text: 'killall — matar por nombre',
        criollo: 'En lugar de buscar el PID, le mandás señal a todos los procesos que se llamen igual.',
      },
      {
        type: 'p',
        text:
          'En lugar de enviar una señal a un PID específico, <code>killall</code> permite enviarla a todos los procesos que coincidan con un nombre de programa.',
      },
      {
        type: 'ul',
        items: [
          '<code>killall -9 chrome</code>',
        ],
      },
      {
        type: 'table',
        caption: 'Señales más usadas — resumen',
        headers: ['Señal', 'Número', 'Qué hace'],
        rows: [
          ['SIGHUP', '1', 'Recarga configuración (típico para daemons)'],
          ['SIGKILL', '9', 'Termina sí o sí, no se puede ignorar'],
          ['SIGTERM', '15', 'Pide terminar ordenadamente (default)'],
          ['SIGCONT', '18', 'Reanuda un proceso detenido'],
          ['SIGSTOP', '19', 'Detiene el proceso (no se puede ignorar)'],
          ['SIGTSTP', '20', 'Pausa desde terminal (equivale a Ctrl+Z)'],
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Recordá que <strong>demonio (daemon)</strong> es como llamamos a los programas que se ejecutan en segundo plano. Por eso señales como SIGHUP tienen sentido sobre todo para ellos.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Regla de tres: primero <code>kill PID</code> (SIGTERM). Si no se va, <code>kill -9 PID</code> (SIGKILL). Y si lo que querés es que un servicio relea su config sin reiniciarse, <code>kill -HUP PID</code>.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-13-1',
          q: 'SIGTERM (15) es la señal predeterminada del comando kill cuando no se especifica ninguna.',
          a: true,
          explain: 'Verdadero. Si hacés <code>kill PID</code> sin más, manda SIGTERM, que pide al proceso que termine ordenadamente.',
        },
        {
          id: 'tf-13-2',
          q: 'SIGKILL (9) puede ser ignorada o bloqueada por el programa.',
          a: false,
          explain: 'Falso. SIGKILL <strong>no se puede ignorar</strong>. SIGSTOP (19) tampoco. Esa es la razón por la que se usan cuando nada más funciona.',
        },
        {
          id: 'tf-13-3',
          q: 'SIGTSTP es la señal que envía la terminal cuando presionás Ctrl+Z.',
          a: true,
          explain: 'Verdadero. SIGTSTP (20) suspende un proceso en primer plano, equivalente a Ctrl+Z.',
        },
        {
          id: 'tf-13-4',
          q: 'Un proceso detenido con SIGSTOP libera CPU pero sigue ocupando memoria.',
          a: true,
          explain: 'Verdadero. El proceso queda en pausa: no consume CPU pero sigue en RAM, listo para reanudarse con SIGCONT.',
        },
        {
          id: 'tf-13-5',
          q: 'killall envía señales por PID, no por nombre del programa.',
          a: false,
          explain: 'Falso. <code>killall</code> hace exactamente lo contrario: envía la señal a todos los procesos que coincidan con un <strong>nombre</strong> de programa.',
        },
      ],
      mc: [
        {
          id: 'mc-13-1',
          q: 'Querés terminar un proceso colgado que no responde a SIGTERM. ¿Qué señal mandás?',
          options: [
            'SIGHUP (1)',
            'SIGKILL (9)',
            'SIGCONT (18)',
            'SIGTSTP (20)',
          ],
          correctIndex: 1,
          explain: 'SIGKILL (9) fuerza la finalización inmediata. Es el "último recurso" cuando SIGTERM no funciona.',
        },
        {
          id: 'mc-13-2',
          q: 'Tocaste la configuración de un daemon y querés que la relea sin reiniciarlo. ¿Qué señal usás?',
          options: ['SIGTERM', 'SIGKILL', 'SIGHUP', 'SIGSTOP'],
          correctIndex: 2,
          explain: 'SIGHUP (1) le indica al proceso que recargue su configuración sin detenerse.',
        },
        {
          id: 'mc-13-3',
          q: 'Tenés un proceso suspendido con SIGSTOP. ¿Con qué señal lo reanudás?',
          options: ['SIGCONT (18)', 'SIGTERM (15)', 'SIGHUP (1)', 'SIGTSTP (20)'],
          correctIndex: 0,
          explain: 'SIGCONT (18) reanuda procesos previamente detenidos con SIGSTOP o SIGTSTP.',
        },
        {
          id: 'mc-13-4',
          q: '¿Cuántas señales tiene en total el comando kill según el apunte?',
          options: ['9', '15', '32', '64'],
          correctIndex: 3,
          explain: 'El apunte indica que kill cuenta con 64 funciones (señales). Las más usadas son una decena.',
        },
        {
          id: 'mc-13-5',
          q: '¿Cuál es la diferencia clave entre SIGSTOP y SIGTSTP?',
          options: [
            'SIGSTOP libera memoria; SIGTSTP no',
            'SIGSTOP no se puede ignorar; SIGTSTP es el equivalente a Ctrl+Z y puede atraparse',
            'SIGSTOP es para procesos en primer plano; SIGTSTP para los de fondo',
            'No hay diferencia, son sinónimos',
          ],
          correctIndex: 1,
          explain: 'SIGSTOP no puede ser ignorada ni bloqueada. SIGTSTP es la señal que manda la terminal con Ctrl+Z y sí puede ser atrapada por el programa.',
        },
      ],
      ms: [
        {
          id: 'ms-13-1',
          q: '¿Qué afirmaciones sobre las señales SIGTERM, SIGKILL y SIGHUP son correctas?',
          options: [
            'SIGTERM (15) pide al proceso que termine ordenadamente',
            'SIGTERM es la señal predeterminada de kill',
            'SIGKILL (9) fuerza la finalización inmediata sin chance de limpieza',
            'SIGHUP (1) hace que el proceso recargue su configuración',
            'SIGKILL es la señal default si no se especifica',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. La default es SIGTERM, no SIGKILL.',
        },
        {
          id: 'ms-13-2',
          q: '¿Qué afirmaciones sobre SIGSTOP, SIGTSTP y SIGCONT son correctas?',
          options: [
            'SIGSTOP (19) suspende el proceso sin terminarlo',
            'SIGSTOP libera CPU pero el proceso sigue en memoria',
            'SIGSTOP no puede ignorarse ni bloquearse',
            'SIGTSTP (20) es el equivalente a Ctrl+Z',
            'SIGCONT (18) termina el proceso',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. SIGCONT REANUDA un proceso pausado — no lo termina.',
        },
        {
          id: 'ms-13-3',
          q: 'Sobre los comandos kill y killall, ¿qué es correcto?',
          options: [
            'kill envía señales a un PID específico',
            'killall envía señales a todos los procesos con un nombre dado',
            'kill -9 PID envía SIGKILL',
            'killall -9 chrome mata todos los procesos llamados "chrome"',
            'killall opera por PID, no por nombre',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales. killall opera por NOMBRE, esa es justamente la diferencia con kill.',
        },
        {
          id: 'ms-13-4',
          q: '¿Qué afirmaciones del cuadro de señales más usadas son correctas?',
          options: [
            'SIGHUP = 1',
            'SIGKILL = 9',
            'SIGTERM = 15',
            'SIGSTOP = 19',
            'kill cuenta con un total de 16 señales',
          ],
          correctIndexes: [0, 1, 2, 3],
          explain:
            'Las primeras cuatro son textuales del cuadro. El apunte indica 64 señales en total, no 16.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-13-1',
        front: 'SIGTERM (15)',
        back: 'Pide al proceso que termine ordenadamente. Es la señal default de <code>kill</code>.',
      },
      {
        id: 'fc-13-2',
        front: 'SIGKILL (9)',
        back: 'Termina el proceso inmediatamente y sin chance de limpiar. No puede ignorarse ni bloquearse.',
      },
      {
        id: 'fc-13-3',
        front: 'SIGHUP (1)',
        back: 'Hace que un proceso recargue su configuración sin detenerse. Típico para daemons.',
      },
      {
        id: 'fc-13-4',
        front: 'SIGSTOP (19)',
        back: 'Suspende el proceso (libera CPU pero sigue en memoria). No puede ser ignorada.',
      },
      {
        id: 'fc-13-5',
        front: 'SIGTSTP (20)',
        back: 'Suspende proceso en primer plano. Equivalente a presionar Ctrl+Z en la terminal.',
      },
      {
        id: 'fc-13-6',
        front: 'SIGCONT (18)',
        back: 'Reanuda un proceso previamente detenido con SIGSTOP o SIGTSTP.',
      },
      {
        id: 'fc-13-7',
        front: '<code>kill -9 PID</code>',
        back: 'Manda SIGKILL al PID indicado: fuerza la finalización inmediata.',
      },
      {
        id: 'fc-13-8',
        front: '<code>killall -9 chrome</code>',
        back: 'Manda SIGKILL a todos los procesos llamados "chrome". <code>killall</code> opera por nombre, no por PID.',
      },
      {
        id: 'fc-13-9',
        front: 'Daemon (demonio)',
        back: 'Programa que corre en segundo plano. Suele terminar con "d" (sshd, cron, systemd).',
      },
    ],
  },
  // ---------- SECCIÓN 14 ----------
  {
    id: '14',
    unit: '5',
    title: 'Scripting — fundamentos y variables',
    criollo:
      'Un script es un archivo con comandos que se ejecutan en orden. La primera línea (#!) le dice a Linux qué intérprete usar (bash, en general). Para correrlo necesita permiso de ejecución (chmod). Las variables se definen sin tipo y se invocan con $.',
    blocks: [
      {
        type: 'p',
        text:
          'Un <strong>script</strong> es un archivo que contiene una sucesión de comandos de Shell que pueden ejecutar diversas tareas de acuerdo al contenido del texto del script. Nos permite automatizar acciones repetitivas o administrar sistemas operativos de una forma más eficiente.',
      },
      {
        type: 'p',
        text:
          'Para que funcione, el script debe escribirse con una lógica particular, ya que Bash ejecuta el código <strong>en el orden en que se escribe</strong>.',
      },
      {
        type: 'h3',
        text: 'Shebang (#!) y extensión .sh',
        criollo: 'Linux no necesita la extensión .sh para ejecutar un script; la usamos por convención para reconocerlo a simple vista. Lo que sí importa son los primeros 2 bytes: el "shebang".',
      },
      {
        type: 'p',
        text:
          'Para que Linux distinga un archivo común de uno que es script, usa los <strong>2 primeros bytes</strong> del archivo para clasificarlo. A diferencia de otros SO donde la extensión define el tipo, en Linux es indistinto. Por convención agregamos la extensión <code>.sh</code> para identificarlo a simple vista, pero el SO no la necesita.',
      },
      {
        type: 'p',
        text:
          'Los 2 primeros bytes se llaman <strong>shebang</strong> (o sha-bang) y consisten en <code>#!</code> seguido del intérprete. Por ejemplo:',
      },
      {
        type: 'ul',
        items: [
          '<code>#!/bin/bash</code>',
        ],
      },
      {
        type: 'h3',
        text: 'Permisos y formas de ejecutar un script',
        criollo: 'Para ejecutarlo, el archivo necesita permisos de ejecución para vos o tu grupo. Lo mínimo razonable es 755.',
      },
      {
        type: 'p',
        text:
          'Para ejecutar un script, el archivo debe tener permisos de ejecución. Si tenés <code>control.sh</code>, debería tener al menos <strong>755</strong> (<code>rwx</code> owner, <code>r-x</code> group, <code>r-x</code> other) para que el dueño pueda leerlo, modificarlo y ejecutarlo. Si fuera necesario, miembros del grupo u otros podrían leer y ejecutarlo.',
      },
      {
        type: 'p',
        text: 'Hay varias formas de invocar un script:',
      },
      {
        type: 'table',
        caption: 'Formas de ejecutar un script',
        headers: ['Forma', 'Cuándo usarla'],
        rows: [
          ['<code>/home/alumno/control.sh</code>', 'Ruta absoluta — siempre funciona, no depende del directorio actual.'],
          ['<code>control.sh</code>', 'Si el script está en un directorio del <code>$PATH</code> (ej. <code>/usr/local/bin</code>), alcanza con el nombre.'],
          ['<code>bash control.sh</code>', 'Invocás al intérprete pasándole el script. No requiere permisos de ejecución sobre el archivo.'],
          ['<code>./control.sh</code>', 'Si estás dentro del directorio donde está el script. El <code>./</code> es necesario para que la shell no lo busque en el <code>$PATH</code>.'],
        ],
      },
      {
        type: 'h3',
        text: 'Variables',
        criollo: 'Una variable es un espacio en memoria con un valor. En BASH no se declara tipo: definís y listo. Buena práctica: nombres en MAYÚSCULAS.',
      },
      {
        type: 'p',
        text:
          'Una variable es un espacio reservado en memoria que se utiliza para almacenar datos o valores. En BASH las variables son <strong>dinámicas</strong>: no es necesario declarar su tipo antes de usarlas, se definen y se les asigna un valor.',
      },
      {
        type: 'h3',
        text: 'Variables creadas por el programador',
        criollo: 'Las que vos definís en el script o en la terminal.',
      },
      {
        type: 'p',
        text:
          'Son definidas por el usuario dentro de un script o en la terminal. Buena práctica: nombrarlas totalmente en mayúsculas.',
      },
      {
        type: 'p',
        text: 'Para definir una variable:',
      },
      {
        type: 'ul',
        items: [
          '<code>SALUDO=Bienvenido</code>',
        ],
      },
      {
        type: 'p',
        text:
          'Para invocarla, se usa el comando <code>echo</code> (que imprime por pantalla) anteponiendo <code>$</code> al nombre:',
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/scripting-var-saludo.png',
        alt: 'Terminal mostrando "SALUDO=Bienvenido" y "echo $SALUDO" devolviendo "Bienvenido".',
        caption: 'Ejemplo: asignar la variable <code>SALUDO</code> y mostrar su contenido con <code>echo $SALUDO</code>.',
      },
      {
        type: 'p',
        text:
          'Si dentro de la variable queremos almacenar la salida de un comando, el contenido debe encerrarse con <strong>acento invertido</strong> (<code>`</code>) — también puede usarse <code>$(comando)</code>:',
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/scripting-var-listar.png',
        alt: 'Terminal mostrando "LISTAR=`ls`" y "echo $LISTAR" devolviendo el listado de archivos.',
        caption: 'Substitución de comando: <code>LISTAR=`ls`</code> guarda en LISTAR la salida de <code>ls</code>.',
      },
      {
        type: 'h3',
        text: 'Variables intrínsecas (predefinidas)',
        criollo: 'Bash las define solo, te dan info del entorno. No hace falta crearlas.',
      },
      {
        type: 'p',
        text:
          'BASH las define automáticamente y proporcionan información del entorno o controlan el comportamiento del shell. Están siempre disponibles.',
      },
      {
        type: 'table',
        caption: 'Variables intrínsecas comunes',
        headers: ['Variable', 'Qué contiene'],
        rows: [
          ['<code>$HOME</code>', 'Ruta del directorio del usuario.'],
          ['<code>$USER</code>', 'Nombre del usuario actual.'],
          ['<code>$PATH</code>', 'Directorios donde el sistema busca comandos ejecutables.'],
          ['<code>$PWD</code>', 'Directorio de trabajo actual.'],
        ],
      },
      {
        type: 'h3',
        text: 'Variables especiales',
        criollo: 'Las que te dan info sobre la ejecución del propio script: nombre, argumentos, PID, return code.',
      },
      {
        type: 'p',
        text:
          'Predefinidas por BASH, permiten acceder a información del script y su ejecución.',
      },
      {
        type: 'table',
        caption: 'Variables especiales de BASH',
        headers: ['Variable', 'Qué representa'],
        rows: [
          ['<code>$0</code>', 'Nombre del script.'],
          ['<code>$1</code>…<code>$n</code>', 'Argumentos opcionales pasados al ejecutar el script.'],
          ['<code>$#</code>', 'Total de argumentos proporcionados.'],
          ['<code>$*</code>', 'Conjunto de los argumentos.'],
          ['<code>$?</code>', 'Valor de ejecución del comando anterior (<em>return code</em>).'],
          ['<code>$$</code>', 'PID del script.'],
          ['<code>$!</code>', 'Identifica el último proceso arrancado en background.'],
        ],
      },
      {
        type: 'h3',
        text: 'Caracteres especiales',
        criollo: 'Caracteres que en bash tienen significado propio. Hay que conocerlos para no pisar contenido sin querer.',
      },
      {
        type: 'table',
        caption: 'Caracteres especiales en BASH',
        headers: ['Carácter', 'Para qué sirve'],
        rows: [
          ['<code>\\</code>', 'La barra invertida indica a BASH que ignore el carácter especial que viene después.'],
          ['<code>" "</code>', 'Las comillas dobles encierran texto o una variable y lo toman como una cadena entera. Permiten expansión de variables.'],
          ['<code>` `</code>', 'El acento invertido convierte la salida de un comando en el contenido de una variable.'],
          ['<code>\' \'</code>', 'Las comillas simples desactivan todos los caracteres especiales encerrados dentro de ellas.'],
          ['<code>$</code>', 'Identifica lo que le sigue como una variable.'],
          ['<code>#</code>', 'El numeral desactiva el texto que le continúa — se usa para generar comentarios.'],
          ['<code>;</code>', 'El punto y coma separa la ejecución de distintos comandos en una misma línea.'],
        ],
      },
      {
        type: 'p',
        text: 'Ejemplo del impacto de las comillas:',
      },
      {
        type: 'ul',
        items: [
          '<code>SALUDO=Bienvenido Alumno</code> — son <strong>2 cadenas diferentes</strong>.',
          '<code>SALUDO="Bienvenido Alumno"</code> — es <strong>1 sola cadena</strong>.',
        ],
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Truco mental: comillas dobles → expanden <code>$variables</code>. Comillas simples → todo literal, no expanden nada. Acento invertido → corre el comando y reemplaza con su salida.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-14-1',
          q: 'En Linux, la extensión .sh es obligatoria para que un archivo se considere un script.',
          a: false,
          explain: 'Falso. La extensión es sólo una convención visual; lo que clasifica al script son los 2 primeros bytes (el shebang).',
        },
        {
          id: 'tf-14-2',
          q: 'El shebang #!/bin/bash es lo que le dice al SO qué intérprete usar para ejecutar el script.',
          a: true,
          explain: 'Verdadero. Esa primera línea con <code>#!</code> indica el intérprete a usar.',
        },
        {
          id: 'tf-14-3',
          q: 'En BASH hay que declarar el tipo de una variable antes de asignarle un valor.',
          a: false,
          explain: 'Falso. Las variables de BASH son dinámicas: se asignan y listo, sin declarar tipo.',
        },
        {
          id: 'tf-14-4',
          q: 'La variable especial $? guarda el código de retorno del comando anterior.',
          a: true,
          explain: 'Verdadero. <code>$?</code> es el return code; 0 suele indicar éxito y distinto de 0 indica error.',
        },
        {
          id: 'tf-14-5',
          q: 'Las comillas simples \' \' expanden las variables que tengan adentro.',
          a: false,
          explain: 'Falso. Las simples desactivan todos los caracteres especiales (no expanden variables). Las que sí expanden son las dobles.',
        },
      ],
      mc: [
        {
          id: 'mc-14-1',
          q: '¿Cuál es el permiso mínimo recomendado para ejecutar un script según el apunte?',
          options: ['644', '700', '755', '777'],
          correctIndex: 2,
          explain: '755: rwx para el dueño, r-x para el grupo y r-x para otros — todos pueden leer y ejecutar; sólo el dueño puede modificarlo.',
        },
        {
          id: 'mc-14-2',
          q: 'Querés guardar en una variable la salida del comando "date". ¿Cómo lo hacés?',
          options: [
            '<code>FECHA="date"</code>',
            '<code>FECHA=`date`</code>',
            '<code>FECHA=$date</code>',
            '<code>FECHA={date}</code>',
          ],
          correctIndex: 1,
          explain: 'Con acento invertido (o con <code>$(date)</code>) bash ejecuta el comando y guarda su salida en la variable.',
        },
        {
          id: 'mc-14-3',
          q: '¿Qué representa la variable especial $0 dentro de un script?',
          options: [
            'Total de argumentos pasados al script',
            'El PID del script',
            'El nombre del script',
            'El código de retorno del último comando',
          ],
          correctIndex: 2,
          explain: '<code>$0</code> es el nombre del script. <code>$#</code> es el total de args, <code>$$</code> el PID, <code>$?</code> el return code.',
        },
        {
          id: 'mc-14-4',
          q: 'Estás parado en el directorio donde está <code>control.sh</code>. ¿Por qué hay que invocarlo como <code>./control.sh</code> y no como <code>control.sh</code> a secas?',
          options: [
            'Porque bash exige el "./" para todos los scripts',
            'Porque si no, la shell lo busca solo en los directorios del $PATH',
            'Porque "./" le da permisos de ejecución',
            'Porque sin "./" se interpreta como comentario',
          ],
          correctIndex: 1,
          explain: 'Sin <code>./</code>, la shell busca el ejecutable en los directorios listados en <code>$PATH</code>. Con <code>./</code> le decís que lo busque en el directorio actual.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-14-1',
        front: 'Shebang',
        back: 'Los 2 primeros bytes de un script (<code>#!</code>) seguidos del intérprete. Ej: <code>#!/bin/bash</code>.',
      },
      {
        id: 'fc-14-2',
        front: 'Permiso mínimo para ejecutar',
        back: '755 — rwx owner, r-x group, r-x other. Sólo el dueño puede modificar.',
      },
      {
        id: 'fc-14-3',
        front: 'Definir variable en bash',
        back: '<code>NOMBRE=valor</code> (sin espacios alrededor del =). Buena práctica: en MAYÚSCULAS.',
      },
      {
        id: 'fc-14-4',
        front: 'Substitución de comando',
        back: '<code>VAR=`comando`</code> o <code>VAR=$(comando)</code> guardan la salida del comando en VAR.',
      },
      {
        id: 'fc-14-5',
        front: '$HOME / $USER / $PATH / $PWD',
        back: 'Variables intrínsecas: directorio del usuario, nombre del usuario, dirs de búsqueda de comandos, directorio actual.',
      },
      {
        id: 'fc-14-6',
        front: '$0 / $1..$n / $#',
        back: '$0 = nombre del script. $1..$n = argumentos. $# = cantidad de argumentos.',
      },
      {
        id: 'fc-14-7',
        front: '$? / $$ / $!',
        back: '$? = return code del último comando. $$ = PID del script. $! = PID del último proceso en background.',
      },
      {
        id: 'fc-14-8',
        front: 'Comillas dobles vs simples',
        back: 'Dobles ("…"): permiten expansión de <code>$variables</code>. Simples (\'…\'): todo literal, sin expansión.',
      },
      {
        id: 'fc-14-9',
        front: 'Comentarios en bash',
        back: 'Con <code>#</code>: todo lo que sigue en la línea queda desactivado.',
      },
    ],
  },
  // ---------- SECCIÓN 15 ----------
  {
    id: '15',
    unit: '5',
    title: 'Estructuras de control y funciones',
    criollo:
      'Acá viene la parte buena: if/elif/else para decidir, while/until/for para repetir, case para elegir entre varias opciones, vectores para listas y funciones para reutilizar código. Con esto ya armás scripts complejos.',
    blocks: [
      {
        type: 'p',
        text:
          'Las <strong>estructuras de control</strong> permiten que un script tome decisiones basadas en condiciones particulares que se evalúan a partir de comparaciones. Permiten manejar el flujo de ejecución de un script de manera dinámica.',
      },
      {
        type: 'h3',
        text: 'IF — condicional',
        criollo: '"Si pasa esto, hacé aquello". La estructura más clásica. Necesita if, then y fi (que es if al revés, marca el cierre).',
      },
      {
        type: 'p',
        text: 'Evalúa una condición y ejecuta un bloque si es verdadera. Ejemplo: ver si existe un archivo.',
      },
      {
        type: 'ul',
        items: [
          '<code>if [ -f archivo.txt ]; then</code>',
          '&nbsp;&nbsp;<code>echo "El archivo existe"</code>',
          '<code>fi</code>',
        ],
      },
      {
        type: 'p',
        text: 'La estructura condicional tiene 5 palabras clave (las 3 últimas son las imprescindibles):',
      },
      {
        type: 'ol',
        items: [
          '<code>if</code> = si',
          '<code>elif</code> = también si',
          '<code>else</code> = de cualquier otra manera',
          '<code>then</code> = entonces',
          '<code>fi</code> = "if" invertido, marca el cierre',
        ],
      },
      {
        type: 'p',
        text: 'Comparación de cadenas con if/else:',
      },
      {
        type: 'ul',
        items: [
          '<code>#!/bin/bash</code>',
          '<code>VAR1=HOLA</code>',
          '<code>VAR2=CHAU</code>',
          '<code>if [[ $VAR1 == $VAR2 ]]; then</code>',
          '&nbsp;&nbsp;<code>echo "son iguales"</code>',
          '<code>else</code>',
          '&nbsp;&nbsp;<code>echo "son distintas"</code>',
          '<code>fi</code>',
        ],
      },
      {
        type: 'h3',
        text: 'WHILE — bucle condicional',
        criollo: 'Repite mientras la condición sea verdadera. Como un semáforo: "seguí mientras la luz sea verde".',
      },
      {
        type: 'p',
        text: 'Ejecuta un bloque mientras la condición sea verdadera. Ejemplo: contador hasta 5.',
      },
      {
        type: 'ul',
        items: [
          '<code>#!/bin/bash</code>',
          '<code>CONTADOR=0</code>',
          '<code>while [[ $CONTADOR -lt 5 ]]; do</code>',
          '&nbsp;&nbsp;<code>echo "Contador: $CONTADOR"</code>',
          '&nbsp;&nbsp;<code>CONTADOR=$((CONTADOR + 1))</code>',
          '<code>done</code>',
        ],
      },
      {
        type: 'p',
        text: 'Palabras clave del while:',
      },
      {
        type: 'ul',
        items: [
          '<code>while</code> = mientras',
          '<code>do</code> = hacer',
          '<code>done</code> = hecho',
        ],
      },
      {
        type: 'h3',
        text: 'UNTIL — bucle condicional inverso',
        criollo: 'Lo opuesto al while: repite HASTA que la condición sea verdadera. Se detiene cuando se cumple.',
      },
      {
        type: 'p',
        text: 'Ejecuta un bloque hasta que la condición sea verdadera. Ejemplo: contador hasta que supere 25.',
      },
      {
        type: 'ul',
        items: [
          '<code>#!/bin/bash</code>',
          '<code>CONTADOR=0</code>',
          '<code>until [[ $CONTADOR -ge 25 ]]; do</code>',
          '&nbsp;&nbsp;<code>echo "Contador: $CONTADOR"</code>',
          '&nbsp;&nbsp;<code>CONTADOR=$((CONTADOR + 1))</code>',
          '<code>done</code>',
        ],
      },
      {
        type: 'h3',
        text: 'Operadores de comparación',
        criollo: 'Esto es lo que va adentro de los corchetes. Distintos para números, cadenas, archivos y comparación aritmética.',
      },
      {
        type: 'table',
        caption: 'Operadores para comparación numérica',
        headers: ['Operador', 'Significado'],
        rows: [
          ['<code>-eq</code>', 'igual a'],
          ['<code>-ne</code>', 'no igual a'],
          ['<code>-gt</code>', 'mayor que'],
          ['<code>-ge</code>', 'mayor o igual a'],
          ['<code>-lt</code>', 'menor que'],
          ['<code>-le</code>', 'menor o igual a'],
        ],
      },
      {
        type: 'table',
        caption: 'Operadores para comparación de cadenas',
        headers: ['Operador', 'Significado'],
        rows: [
          ['<code>=</code> o <code>==</code>', 'cadenas iguales'],
          ['<code>!=</code>', 'cadenas diferentes'],
          ['<code>-z</code>', 'longitud de la cadena es cero'],
          ['<code>-n</code>', 'longitud de la cadena distinta de cero'],
        ],
      },
      {
        type: 'table',
        caption: 'Operadores para archivos y directorios',
        headers: ['Operador', 'Significado'],
        rows: [
          ['<code>-e</code>', 'el archivo o directorio existe'],
          ['<code>-f</code>', 'es un archivo regular'],
          ['<code>-d</code>', 'es un directorio'],
          ['<code>-r</code>', 'tiene permisos de lectura'],
          ['<code>-w</code>', 'tiene permisos de escritura'],
          ['<code>-x</code>', 'tiene permisos de ejecución'],
        ],
      },
      {
        type: 'p',
        text: 'Para comparación aritmética dentro de <code>[[ ]]</code> también se pueden usar <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>.',
      },
      {
        type: 'h3',
        text: 'Corchete simple [ ] vs. doble [[ ]]',
        criollo: 'El simple es más viejo y menos flexible. El doble permite usar los operadores aritméticos (&lt;, &gt;) además de los clásicos -eq, -lt, etc.',
      },
      {
        type: 'p',
        text:
          'El corchete simple es más antiguo y menos flexible: hay que usar <code>-eq</code>, <code>-lt</code>, <code>-d</code>, etc. para las comparaciones. El doble corchete permite además usar los operadores de comparación aritmética <code>&lt;</code>, <code>&gt;</code>, etc.',
      },
      {
        type: 'h3',
        text: 'CASE — condicional por coincidencia',
        criollo: 'Ideal cuando una variable puede tomar varios valores y querés decidir según cada uno. Más claro que un if-elif gigante.',
      },
      {
        type: 'p',
        text: 'CASE evalúa una variable o cadena contra múltiples patrones y ejecuta el bloque correspondiente. Útil para manejar muchas condiciones de forma clara. Ejemplo: clasificar días de la semana.',
      },
      {
        type: 'ul',
        items: [
          '<code>#!/bin/bash</code>',
          '<code>read -p "Elija un dia de la semana: " DIA</code>',
          '<code>case $DIA in</code>',
          '&nbsp;&nbsp;<code>lunes | martes | miercoles ) echo "Ese dia tenes que cursar Algebra" ;;</code>',
          '&nbsp;&nbsp;<code>jueves | viernes ) echo "Ese dia tenes que cursar Computacion Aplicada" ;;</code>',
          '&nbsp;&nbsp;<code>*) echo "Ese dia no tenes que cursar pero seria bueno que estudies" ;;</code>',
          '<code>esac</code>',
        ],
      },
      {
        type: 'h3',
        text: 'FOR — bucle sobre listas',
        criollo: 'Recorre listas: números fijos, rangos, o la salida de un comando. El que más se usa para iterar.',
      },
      {
        type: 'p',
        text: 'El FOR se utiliza para recorrer una lista, iterando sobre los elementos o un rango.',
      },
      {
        type: 'p',
        text: 'Recorrer una lista de números:',
      },
      {
        type: 'ul',
        items: [
          '<code>for i in 1 2 3 4 5 6; do</code>',
          '&nbsp;&nbsp;<code>echo "Numero: $i"</code>',
          '<code>done</code>',
        ],
      },
      {
        type: 'p',
        text: 'Recorrer un rango:',
      },
      {
        type: 'ul',
        items: [
          '<code>for i in {1..5}; do</code>',
          '&nbsp;&nbsp;<code>echo "Numero: $i"</code>',
          '<code>done</code>',
        ],
      },
      {
        type: 'p',
        text: 'Recorrer un rango con paso (de 2 en 2):',
      },
      {
        type: 'ul',
        items: [
          '<code>for i in {1..10..2}; do</code>',
          '&nbsp;&nbsp;<code>echo "Numero: $i"</code>',
          '<code>done</code>',
        ],
      },
      {
        type: 'p',
        text: 'Recorrer la salida de un comando:',
      },
      {
        type: 'ul',
        items: [
          '<code>for i in $(ls -l /var/log/*.log); do</code>',
          '&nbsp;&nbsp;<code>echo "Archivos con extension log: $i"</code>',
          '<code>done</code>',
        ],
      },
      {
        type: 'h3',
        text: 'Vectores (arrays)',
        criollo: 'Una colección de valores indexados (desde 0). Se acceden con corchetes y se recorren con bucles. El @ representa todo el contenido del vector.',
      },
      {
        type: 'p',
        text:
          'En BASH los <strong>vectores</strong> son colecciones de datos indexados que permiten almacenar y acceder a múltiples valores usando un índice. Los índices arrancan en <strong>0</strong>.',
      },
      {
        type: 'p',
        text: 'Definir un vector con valores:',
      },
      {
        type: 'ul',
        items: [
          '<code>PERSONAJES=("Luke Skywalker" "Han Solo" "Obi-Wan Kenobi")</code>',
        ],
      },
      {
        type: 'p',
        text: 'Acceder a un elemento específico:',
      },
      {
        type: 'ul',
        items: [
          '<code>echo "El personaje elegido es: ${PERSONAJES[0]}"</code>',
          'Resultado: <code>El personaje elegido es: Luke Skywalker</code>',
        ],
      },
      {
        type: 'p',
        text: 'Recorrer el vector con un bucle (el <code>@</code> indica que se accede al contenido completo; también vale <code>*</code>):',
      },
      {
        type: 'ul',
        items: [
          '<code>for i in "${PERSONAJES[@]}"; do</code>',
          '&nbsp;&nbsp;<code>echo "El personaje elegido es: $i"</code>',
          '<code>done</code>',
        ],
      },
      {
        type: 'h3',
        text: 'Funciones — bloques reutilizables',
        criollo: 'Una función agrupa comandos bajo un nombre y se puede invocar las veces que quieras. Sirve para no repetir código.',
      },
      {
        type: 'p',
        text:
          'Las funciones agrupan comandos en un bloque que puede ejecutarse múltiples veces invocando su nombre.',
      },
      {
        type: 'p',
        text: 'Ejemplo: script <code>funcion.sh</code> con una función que recibe el nombre por argumento.',
      },
      {
        type: 'ul',
        items: [
          '<code>NOMBRE=$1</code>',
          '<code>saludar () {</code>',
          '&nbsp;&nbsp;<code>echo "Hola, $NOMBRE"</code>',
          '<code>}</code>',
          '<code>saludar</code>',
        ],
      },
      {
        type: 'p',
        text:
          'Al ejecutar <code>./funcion.sh "pepe"</code>, el argumento <code>"pepe"</code> queda en <code>NOMBRE</code>; la última línea llama a la función <code>saludar</code>, que imprime <code>Hola, pepe</code>.',
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'El apunte cierra con un script combinando varios conceptos (vectores, funciones, case, while con menú). La idea es ver cómo se combinan IF/WHILE/CASE/FOR + funciones + vectores en un script real.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Tip de testing: cuando armes un script, probalo en una VM antes de tirarlo en una máquina real. Si rompés algo (por ejemplo, borrás de más con un <code>rm</code> dentro de un loop), se arregla con un snapshot — en producción no tenés esa red.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-15-1',
          q: 'En un if de bash, fi marca el cierre de la estructura.',
          a: true,
          explain: 'Verdadero. <code>fi</code> es "if" al revés y cierra el bloque condicional.',
        },
        {
          id: 'tf-15-2',
          q: 'El bucle until se ejecuta mientras la condición sea verdadera.',
          a: false,
          explain: 'Falso. Es al revés: <code>until</code> se ejecuta HASTA que la condición sea verdadera (se detiene cuando se cumple). El que repite mientras es verdadera es <code>while</code>.',
        },
        {
          id: 'tf-15-3',
          q: 'En BASH, los índices de los vectores arrancan en 1.',
          a: false,
          explain: 'Falso. Los índices arrancan en <strong>0</strong>: <code>${PERSONAJES[0]}</code> es el primer elemento.',
        },
        {
          id: 'tf-15-4',
          q: 'El doble corchete [[ ]] permite usar operadores aritméticos como < y > directamente.',
          a: true,
          explain: 'Verdadero. Es una de las mejoras frente al simple [ ]: además de <code>-eq</code>, <code>-lt</code>, etc., podés usar <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>.',
        },
        {
          id: 'tf-15-5',
          q: 'Un case con el patrón *) actúa como el "default" — captura cualquier valor que no matchee los anteriores.',
          a: true,
          explain: 'Verdadero. El <code>*)</code> al final del case es el catch-all, equivalente a un <code>default</code> de otros lenguajes.',
        },
      ],
      mc: [
        {
          id: 'mc-15-1',
          q: '¿Qué operador usás dentro de [ ] para verificar que un archivo existe?',
          options: ['<code>-x</code>', '<code>-e</code>', '<code>-eq</code>', '<code>-n</code>'],
          correctIndex: 1,
          explain: '<code>-e</code> verifica existencia (archivo o directorio). <code>-f</code> es específicamente para archivo regular y <code>-d</code> para directorio.',
        },
        {
          id: 'mc-15-2',
          q: '¿Cuál es el comportamiento correcto del while?',
          options: [
            'Ejecuta el bloque una sola vez',
            'Ejecuta el bloque mientras la condición sea verdadera',
            'Ejecuta el bloque hasta que la condición sea verdadera',
            'Ejecuta el bloque solo si la condición es falsa',
          ],
          correctIndex: 1,
          explain: 'while = mientras. Ejecuta mientras la condición sea verdadera (el que es "hasta" es until).',
        },
        {
          id: 'mc-15-3',
          q: '¿Cómo recorrés un rango del 1 al 10 con un for?',
          options: [
            '<code>for i in 1-10; do ... done</code>',
            '<code>for i in {1..10}; do ... done</code>',
            '<code>for i in range(1,10); do ... done</code>',
            '<code>for i in [1..10]; do ... done</code>',
          ],
          correctIndex: 1,
          explain: 'En bash se usa la sintaxis <code>{inicio..fin}</code>. Para paso: <code>{1..10..2}</code>.',
        },
        {
          id: 'mc-15-4',
          q: 'Tenés un vector PERSONAJES con varios valores. ¿Cómo accedés a todos sus elementos en un bucle?',
          options: [
            '<code>${PERSONAJES}</code>',
            '<code>${PERSONAJES[all]}</code>',
            '<code>${PERSONAJES[@]}</code>',
            '<code>${PERSONAJES[*]&[@]}</code>',
          ],
          correctIndex: 2,
          explain: '<code>${PERSONAJES[@]}</code> o <code>${PERSONAJES[*]}</code> representan todo el contenido del vector.',
        },
        {
          id: 'mc-15-5',
          q: 'Definís una función con <code>saludar () { echo "Hola"; }</code>. ¿Cómo la invocás?',
          options: [
            '<code>call saludar</code>',
            '<code>run saludar()</code>',
            '<code>saludar</code>',
            '<code>./saludar</code>',
          ],
          correctIndex: 2,
          explain: 'Se invoca simplemente por el nombre, sin paréntesis: <code>saludar</code>.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-15-1',
        front: 'if / elif / else / then / fi',
        back: 'Palabras clave del condicional. <code>fi</code> es "if" al revés y cierra el bloque.',
      },
      {
        id: 'fc-15-2',
        front: 'while vs until',
        back: 'while = mientras la condición sea verdadera. until = hasta que la condición sea verdadera (se detiene cuando se cumple).',
      },
      {
        id: 'fc-15-3',
        front: 'Palabras clave de while',
        back: '<code>while</code> (mientras), <code>do</code> (hacer), <code>done</code> (hecho).',
      },
      {
        id: 'fc-15-4',
        front: '-eq / -ne / -gt / -lt',
        back: 'Comparación numérica: igual, distinto, mayor, menor. <code>-ge</code> y <code>-le</code> agregan el "o igual".',
      },
      {
        id: 'fc-15-5',
        front: '-e / -f / -d',
        back: 'Tests de archivos: <code>-e</code> existe, <code>-f</code> archivo regular, <code>-d</code> directorio.',
      },
      {
        id: 'fc-15-6',
        front: '[ ] vs [[ ]]',
        back: 'Simple [ ]: viejo, sólo operadores -eq/-lt/etc. Doble [[ ]]: permite además &lt;, &gt;, &lt;=, &gt;=.',
      },
      {
        id: 'fc-15-7',
        front: 'case … esac',
        back: 'Condicional por coincidencia: matchea una variable contra patrones. Cada caso cierra con <code>;;</code>. <code>*)</code> es el default.',
      },
      {
        id: 'fc-15-8',
        front: 'for con rango',
        back: '<code>for i in {1..10}; do ... done</code>. Con paso: <code>{1..10..2}</code>.',
      },
      {
        id: 'fc-15-9',
        front: 'Definir vector',
        back: '<code>VEC=("a" "b" "c")</code>. Acceder: <code>${VEC[0]}</code>. Todo: <code>${VEC[@]}</code> o <code>${VEC[*]}</code>.',
      },
      {
        id: 'fc-15-10',
        front: 'Definir e invocar función',
        back: 'Definir: <code>nombre () { comandos; }</code>. Invocar: sólo el nombre (sin paréntesis): <code>nombre</code>.',
      },
    ],
  },
  // ---------- SECCIÓN 16 ----------
  {
    id: '16',
    unit: '5',
    title: 'Cron',
    criollo:
      'Cron es el daemon que programa tareas automáticas: backups, limpieza, reportes, lo que quieras. Cada usuario tiene su crontab. La sintaxis es 5 campos (minuto, hora, día, mes, día de semana) + comando.',
    blocks: [
      {
        type: 'p',
        text:
          '<strong>Cron</strong> es un demonio que permite programar la ejecución automática de tareas (scripts o comandos). Lo usamos para evitar tareas repetitivas, controlar espacio, hacer depuración, generar backups, reportes o cualquier cosa que queramos calendarizar.',
      },
      {
        type: 'p',
        text:
          'El servicio se llama <code>crond</code> (cron daemon). En la mayoría de las distros se instala automáticamente y queda iniciado, pero conviene verificar con:',
      },
      {
        type: 'ul',
        items: [
          '<code>systemctl status cron.service</code>',
        ],
      },
      {
        type: 'p',
        text: 'Una respuesta típica del sistema:',
      },
      {
        type: 'ul',
        items: [
          '<code>● cron.service - Regular background program processing daemon</code>',
          '&nbsp;&nbsp;<code>Loaded: loaded (/lib/systemd/system/cron.service; enabled; preset: enabled)</code>',
          '&nbsp;&nbsp;<code>Active: active (running) since Wed 2024-12-11 13:32:33 -03; 1 day 22h ago</code>',
          '&nbsp;&nbsp;<code>Main PID: 496 (cron)</code>',
        ],
      },
      {
        type: 'h3',
        text: 'Formas de utilizar cron y crontab',
        criollo: 'Crontab es a la vez un comando y un archivo. Hay 2 métodos: configurarlo por usuario, o tirar scripts en directorios predefinidos para ejecución periódica.',
      },
      {
        type: 'p',
        text:
          '<strong>Crontab</strong> es tanto un comando como un archivo de configuración. Es donde se gestionan las tareas definidas para que cron las ejecute. Hay al menos 2 métodos: configurar el crontab por usuario, o utilizar directorios predefinidos para ejecución.',
      },
      {
        type: 'p',
        text:
          'Cada usuario puede tener su propio archivo de tareas. Para editarlo:',
      },
      {
        type: 'ul',
        items: [
          '<code>crontab -e</code> — abre el editor sobre el crontab del usuario (lo crea si no existe, ubicado en <code>/var/spool/cron/</code>).',
        ],
      },
      {
        type: 'p',
        text:
          'También se puede editar el archivo <code>/etc/crontab</code>, que pertenece a root y permite configurar tareas que corran con otro usuario.',
      },
      {
        type: 'p',
        text: 'Otros comandos útiles:',
      },
      {
        type: 'ul',
        items: [
          '<code>crontab -l</code>: lista el crontab actual del usuario.',
          '<code>crontab -r</code>: elimina el crontab actual del usuario.',
        ],
      },
      {
        type: 'h3',
        text: 'Archivo de configuración crontab',
        criollo: 'La línea tiene un formato fijo: minuto hora día mes día-semana comando. Cada campo tiene su rango.',
      },
      {
        type: 'figure',
        src: 'images/diagrams/computacion-aplicada/crontab-format.png',
        alt: 'Contenido del archivo /etc/crontab mostrando el formato de los 5 campos de tiempo (minuto, hora, día del mes, mes, día de la semana) seguidos del usuario y el comando.',
        caption: 'Formato de <code>/etc/crontab</code>: 5 campos de tiempo + usuario + comando.',
      },
      {
        type: 'table',
        caption: 'Campos del crontab',
        headers: ['Campo', 'Descripción'],
        rows: [
          ['<code>shell</code>', 'Shell bajo el cual se ejecuta cron. Si no se especifica, se usa el de <code>/etc/passwd</code> para ese usuario.'],
          ['<code>path</code>', 'Ruta de directorios donde cron busca el comando. Distinto al PATH global o del usuario.'],
          ['<code>Minuto</code>', 'Minuto de la hora en que se ejecuta el comando (0-59).'],
          ['<code>Hora</code>', 'Hora del día (0-23).'],
          ['<code>Día del mes</code>', 'Día del mes (1-31).'],
          ['<code>Mes</code>', 'Mes (1-12) o por nombre en inglés (jan, feb, mar, …).'],
          ['<code>Día de la semana</code>', 'Día (0-7) o nombre en inglés (sun, mon, …). <strong>0 y 7 son domingo.</strong>'],
          ['<code>Comando</code>', 'Comando o script a ejecutar.'],
        ],
      },
      {
        type: 'h3',
        text: 'Caracteres especiales',
        criollo: 'Asterisco = todo. Guion = rango. Coma = lista. Barra = cada N. Con esos 4 ya armás cualquier programación.',
      },
      {
        type: 'table',
        caption: 'Caracteres especiales en crontab',
        headers: ['Carácter', 'Significado', 'Ejemplo'],
        rows: [
          ['<code>*</code>', 'Todo (cualquier valor)', '<code>*</code> en "minuto" = se ejecuta cada minuto'],
          ['<code>-</code>', 'Rango de valores', '<code>1-5</code> en "día semana" = de lunes a viernes'],
          ['<code>,</code>', 'Lista de valores', '<code>1,15</code> en "día mes" = el día 1 y el 15'],
          ['<code>/</code>', 'Incremento (cada N)', '<code>*/15</code> en "minuto" = cada 15 minutos'],
        ],
      },
      {
        type: 'h3',
        text: 'Ejemplos de programación',
      },
      {
        type: 'table',
        caption: 'Expresiones crontab típicas',
        headers: ['Expresión', 'Cuándo se ejecuta'],
        rows: [
          ['<code>@reboot</code>', 'Cuando la computadora se reinicia.'],
          ['<code>01 * * * *</code>', 'Al minuto 1 de cada hora, todos los días.'],
          ['<code>15 8 * * *</code>', 'A las 8:15 a.m. de cada día.'],
          ['<code>15 20 * * *</code>', 'A las 8:15 p.m. de cada día.'],
          ['<code>00 5 * * 0</code>', 'A las 5 a.m. todos los domingos.'],
          ['<code>* 5 * * Sun</code>', 'Cada minuto de 5:00 a 5:59 a.m. todos los domingos.'],
          ['<code>59 11 * 1-3 1-5</code>', 'A las 11:59 a.m. de lunes a viernes, de enero a marzo.'],
          ['<code>45 * 10-25 * 6-7</code>', 'Al minuto 45 de cada hora los días 10 al 25 de cada mes, si es sábado o domingo.'],
          ['<code>10,30,50 * * * 1,3,5</code>', 'En el minuto 10, 30 y 50 de cada hora, los lunes, miércoles y viernes.'],
          ['<code>0 */5 1-10,15,20-23 * 3</code>', 'Cada 5 horas, los días 1-10, 15 y 20-23 de cada mes, si es miércoles.'],
        ],
      },
      {
        type: 'p',
        text: 'Ejemplos de uso real (en <code>/etc/crontab</code>):',
      },
      {
        type: 'ul',
        items: [
          '<code>0 22 * * *  root  /usr/respaldodiario.sh</code> — backup diario a las 22:00.',
          '<code>0 23 * * 5  root  /usr/respaldosemanal.sh</code> — backup semanal los viernes a las 23:00.',
          '<code>0 8,20 * * *  ckent  mail -s "sistema funcionando" kal-el@superfriends.gob.us</code> — mail a las 8 y a las 20, ejecutado como el usuario ckent.',
        ],
      },
      {
        type: 'h3',
        text: 'Directorios predefinidos',
        criollo: 'En lugar de armar líneas en el crontab, podés tirar un script ejecutable en /etc/cron.daily/ y se ejecuta diariamente. Lo mismo con hourly, weekly y monthly.',
      },
      {
        type: 'p',
        text:
          'Otra forma de usar cron es como motor de ejecución por medio de 4 directorios predefinidos dentro de <code>/etc</code>:',
      },
      {
        type: 'table',
        caption: 'Directorios de cron',
        headers: ['Directorio', 'Frecuencia'],
        rows: [
          ['<code>/etc/cron.hourly</code>', 'Cada hora'],
          ['<code>/etc/cron.daily</code>', 'Diariamente'],
          ['<code>/etc/cron.weekly</code>', 'Semanalmente'],
          ['<code>/etc/cron.monthly</code>', 'Mensualmente'],
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'Los scripts que metas en estos directorios deben tener permisos de <strong>ejecución</strong>. Si no, cron los ignora.',
      },
      {
        type: 'h3',
        text: 'Control de acceso',
        criollo: 'Podés decidir qué usuarios pueden usar cron con cron.allow (lista blanca) y cron.deny (lista negra).',
      },
      {
        type: 'p',
        text:
          'Cron permite controlar qué usuarios pueden utilizar su servicio. Basta agregar el nombre del usuario al archivo <code>/etc/cron.deny</code> para bloquearlo, o a <code>/etc/cron.allow</code> si la regla es inversa (sólo los listados pueden usarlo).',
      },
      {
        type: 'p',
        text: 'Ejemplo: denegar a todos y habilitar a un solo usuario.',
      },
      {
        type: 'ul',
        items: [
          '<code>echo ALL &gt;&gt; /etc/cron.deny</code> — agrega ALL al cron.deny.',
          '<code>echo SPalpatine &gt;&gt; /etc/cron.allow</code> — agrega al usuario SPalpatine al cron.allow.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Si ninguno de los archivos <code>cron.allow</code> ni <code>cron.deny</code> existe, no hay restricciones para nadie.',
      },
      {
        type: 'callout',
        tone: 'criollo',
        text:
          'Recordatorio: cron usa el shell y el PATH definidos arriba del crontab, no los tuyos. Por eso muchas tareas "funcionan en la terminal pero no en cron" — la solución suele ser usar rutas absolutas o setear el PATH al principio del script.',
      },
    ],
    quiz: {
      tf: [
        {
          id: 'tf-16-1',
          q: 'El servicio de cron se llama crond y suele estar habilitado por defecto en la mayoría de las distros.',
          a: true,
          explain: 'Verdadero. <code>cron.service</code> / <code>crond</code> viene instalado e iniciado por default. Igual conviene confirmarlo con <code>systemctl status cron.service</code>.',
        },
        {
          id: 'tf-16-2',
          q: 'En crontab, los días de la semana se numeran del 1 al 7 (1 = lunes, 7 = domingo).',
          a: false,
          explain: 'Falso. El rango es <strong>0-7</strong>, donde <strong>0 y 7 son domingo</strong>. También se aceptan nombres en inglés (sun, mon, tue, …).',
        },
        {
          id: 'tf-16-3',
          q: 'Los scripts colocados en /etc/cron.daily/ deben tener permisos de ejecución para que cron los corra.',
          a: true,
          explain: 'Verdadero. Si no son ejecutables, cron los ignora — no los corre solo por estar ahí.',
        },
        {
          id: 'tf-16-4',
          q: 'Si no existe ni cron.allow ni cron.deny, ningún usuario puede usar cron.',
          a: false,
          explain: 'Falso. Justo al revés: si no existe ninguno de los dos, no hay restricciones para nadie.',
        },
        {
          id: 'tf-16-5',
          q: '@reboot ejecuta el comando cada vez que la computadora se reinicia.',
          a: true,
          explain: 'Verdadero. Es una de las expresiones especiales que reemplazan a los 5 campos de tiempo.',
        },
      ],
      mc: [
        {
          id: 'mc-16-1',
          q: '¿Qué comando edita el crontab del usuario actual?',
          options: [
            '<code>crontab -l</code>',
            '<code>crontab -r</code>',
            '<code>crontab -e</code>',
            '<code>edit crontab</code>',
          ],
          correctIndex: 2,
          explain: '<code>-e</code> abre el editor; <code>-l</code> lista; <code>-r</code> elimina.',
        },
        {
          id: 'mc-16-2',
          q: '¿Qué hace la expresión <code>*/15 * * * *</code>?',
          options: [
            'Se ejecuta una vez a los 15 minutos de la hora 0',
            'Se ejecuta cada 15 minutos, todo el tiempo',
            'Se ejecuta a las 15:00 todos los días',
            'Se ejecuta cada 15 horas',
          ],
          correctIndex: 1,
          explain: '<code>*/15</code> en el campo minuto = cada 15 minutos. Los otros <code>*</code> dejan abierto hora/día/mes/dow.',
        },
        {
          id: 'mc-16-3',
          q: 'Querés correr un backup todos los lunes a la 1 de la mañana. ¿Cuál es la expresión correcta?',
          options: [
            '<code>1 0 * * 1 backup.sh</code>',
            '<code>0 1 * * 1 backup.sh</code>',
            '<code>0 1 1 * * backup.sh</code>',
            '<code>* 1 * * lun backup.sh</code>',
          ],
          correctIndex: 1,
          explain: '<code>0 1 * * 1</code> = minuto 0, hora 1, cualquier día/mes, día de la semana = 1 (lunes).',
        },
        {
          id: 'mc-16-4',
          q: 'Querés que un script corra cada hora sin armar línea de crontab. ¿Dónde lo metés?',
          options: [
            '<code>/etc/cron.daily</code>',
            '<code>/etc/cron.hourly</code>',
            '<code>/etc/cron.weekly</code>',
            '<code>/var/spool/cron/</code>',
          ],
          correctIndex: 1,
          explain: 'Los scripts en <code>/etc/cron.hourly/</code> se ejecutan cada hora. Tienen que ser ejecutables.',
        },
        {
          id: 'mc-16-5',
          q: 'En la línea <code>00 5 * * 0  root  /usr/respaldo.sh</code>, ¿cuándo se ejecuta?',
          options: [
            'A las 5 a.m. todos los días',
            'A las 5 p.m. los domingos',
            'A las 5 a.m. todos los domingos',
            'A las 0:05 los domingos',
          ],
          correctIndex: 2,
          explain: 'minuto=00, hora=5, día=*, mes=*, día-semana=0 (domingo). Es decir: 5 a.m. los domingos.',
        },
      ],
    },
    flashcards: [
      {
        id: 'fc-16-1',
        front: 'Cron',
        back: 'Daemon que programa la ejecución automática de scripts y comandos. Servicio: <code>cron.service</code> / <code>crond</code>.',
      },
      {
        id: 'fc-16-2',
        front: '<code>crontab -e</code>',
        back: 'Edita el crontab del usuario actual (ubicado en <code>/var/spool/cron/</code>).',
      },
      {
        id: 'fc-16-3',
        front: 'Formato crontab',
        back: '5 campos + comando: minuto (0-59), hora (0-23), día del mes (1-31), mes (1-12), día de semana (0-7, 0/7 = domingo).',
      },
      {
        id: 'fc-16-4',
        front: 'Caracteres especiales',
        back: '<code>*</code>=todo, <code>-</code>=rango, <code>,</code>=lista, <code>/</code>=cada N (ej. */15 = cada 15).',
      },
      {
        id: 'fc-16-5',
        front: '@reboot',
        back: 'Expresión especial: ejecuta el comando cada vez que el sistema arranca.',
      },
      {
        id: 'fc-16-6',
        front: '<code>/etc/cron.daily</code> & cía.',
        back: '4 directorios prefijados: hourly, daily, weekly, monthly. Tirá un script ejecutable y se corre con esa frecuencia.',
      },
      {
        id: 'fc-16-7',
        front: '<code>cron.allow</code> / <code>cron.deny</code>',
        back: 'Control de acceso. Si no existe ninguno, todos pueden usar cron. Si existen, allow es whitelist y deny es blacklist.',
      },
      {
        id: 'fc-16-8',
        front: '<code>crontab -l</code>',
        back: 'Lista las tareas programadas del usuario actual.',
      },
      {
        id: 'fc-16-9',
        front: 'Día de semana en crontab',
        back: '0-7, donde tanto 0 como 7 representan domingo. También se aceptan nombres en inglés (sun, mon, tue, …).',
      },
    ],
  },
  ],
  pdfs: [
    { key: 'intro-filesystem', label: 'Intro a filesystem (1ra parte M7)', path: 'pdfs/computacion-aplicada/1-intro-filesystem.pdf' },
    { key: 'incorporacion-discos', label: 'Incorporación de discos (2da parte M7)', path: 'pdfs/computacion-aplicada/1-incorporacion-discos.pdf' },
    { key: 'links', label: 'Links (2da parte M7)', path: 'pdfs/computacion-aplicada/2-links.pdf' },
    { key: 'gestor-arranque', label: 'Introducción al gestor de arranque (GRUB)', path: 'pdfs/computacion-aplicada/3-gestor-arranque.pdf' },
    { key: 'init-systemd', label: 'Init y Systemd', path: 'pdfs/computacion-aplicada/3-init-systemd.pdf' },
    { key: 'alias', label: 'Alias y espacios de trabajo', path: 'pdfs/computacion-aplicada/4-alias.pdf' },
    { key: 'senales-procesos', label: 'Señales de los procesos', path: 'pdfs/computacion-aplicada/4-senales-procesos.pdf' },
    { key: 'scripting', label: 'Scripting', path: 'pdfs/computacion-aplicada/5-scripting.pdf' },
    { key: 'cron', label: 'Cron', path: 'pdfs/computacion-aplicada/5-cron.pdf' },
  ],
};
