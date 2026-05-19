/**
 * Materia: Computación Aplicada (UP).
 * Módulo 7 — Filesystem (1ra y 2da parte) y Links.
 *
 * Tipos conceptuales (ver js/content.js para Subject/Section/ContentBlock).
 */

export default {
  id: 'computacion-aplicada',
  title: 'Computación Aplicada',
  subtitle: 'Módulo 7 — Apuntes',
  tagline: 'Filesystem e incorporación de discos · Links (hard y soft)',
  units: {
    '1': 'Filesystem e incorporación de discos',
    '2': 'Links',
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
            'ext4',
            'Journalizado, soporte para archivos grandes, comprobación de errores',
            'Rápido, confiable',
            'No es compatible con Windows sin software adicional',
          ],
          [
            'XFS',
            'Journalizado, alta eficiencia con archivos grandes',
            'Escalabilidad y rendimiento en grandes volúmenes',
            'Operaciones de redimensionado más complejas',
          ],
          [
            'Btrfs',
            'Journalizado, snapshots, compresión',
            'Ideal para copias de seguridad y versiones',
            'Aún en fase de optimización',
          ],
          [
            'NTFS',
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
          'El casillero "pre-allocate Full Size" debe quedar <strong>destildado</strong> al crear el disco. Si lo dejás marcado, el VDI ocupa el tamaño total desde el principio en lugar de crecer a demanda.',
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
      'Después de enchufar el disco a la VM, hay que decirle a Linux que se entere. Con <strong>lsblk</strong> chequeás que el kernel lo vea. Después, con <strong>fdisk</strong>, le creás una partición primaria respondiendo unas pocas preguntas del menú: n (nueva), p (primaria), 1 (la primera), Enter en el sector inicial, +10G en el final, y w para escribir. Listo, el disco está particionado.',
    blocks: [
      {
        type: 'p',
        text:
          'Una vez incorporado el disco a la máquina, hay que confirmar que el kernel lo reconoció y lo incorporó como dispositivo. Para eso se utiliza el comando <strong>lsblk</strong>, que lista todos los discos disponibles.',
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
          'El comando <strong>lsblk</strong> lista los dispositivos de bloque conectados al sistema, como discos, unidades SSD, particiones y otros dispositivos de almacenamiento. Al ejecutarlo aparecen estas columnas:',
      },
      {
        type: 'ul',
        items: [
          '<strong>NAME</strong>: nombre del dispositivo, como sda, sdb, nvme0n1, etc.',
          '<strong>MAJ</strong>: identificador del dispositivo.',
          '<strong>RM</strong>: indica si el dispositivo es removible (1 = removible, 0 = no removible).',
          '<strong>SIZE</strong>: tamaño del dispositivo o la partición.',
          '<strong>RO</strong>: indica si es de solo lectura.',
          '<strong>TYPE</strong>: tipo de dispositivo.',
          '<strong>MOUNTPOINT</strong>: punto de montado (el directorio al que está asociado).',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'El prefijo <strong>sd*</strong> proviene de "SCSI DISK", aunque hoy se aplica también a otros dispositivos de almacenamiento. El asterisco corresponde a una letra asignada en orden (a, b, c, ...) según el número de dispositivos detectados en el sistema. En el apunte de ejemplo aparece <strong>sda</strong> con 6 particiones: sda1, sda2, sda5, sda6, sda7 y sda8.',
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
          'Inicializarlo (crear la partición con fdisk).',
          'Formatearlo (darle un filesystem con mkfs).',
          'Montarlo (asociarlo a un directorio con mount).',
          'Agregarlo al <strong>/etc/fstab</strong> para que persista al reiniciar.',
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
          'Para inicializar el disco se utiliza el comando <strong>fdisk</strong>, que es la herramienta de particionado de discos. En el ejemplo se trabaja sobre un disco denominado "sdd" por su orden:',
      },
      {
        type: 'p',
        text: '<strong>fdisk /dev/sdd</strong>',
      },
      {
        type: 'p',
        text: 'Una vez dentro del menú de fdisk, los pasos para crear la partición son:',
      },
      {
        type: 'ol',
        items: [
          'Presionar <strong>n</strong> para indicar que se va a generar una partición nueva.',
          'Presionar <strong>p</strong> para indicar que la partición es del tipo <strong>primaria</strong>.',
          'Presionar <strong>1</strong> para indicar que se crea una sola partición.',
          'Indicar el sector inicial: lo normal es presionar <strong>Enter</strong> para tomar el valor que ofrece fdisk por default (por ejemplo "2048"), ya que el comando conoce a partir de dónde hay disponibilidad.',
          'Indicar el sector final. Conviene hacerlo en unidades (Kbyte, Megabyte, Gigabyte, Terabyte o Petabyte) en lugar de sectores. En el ejemplo se asignan <strong>10 GB</strong> escribiendo <strong>+10G</strong>.',
          'Presionar <strong>w</strong> (Write) para guardar los cambios.',
        ],
      },
      {
        type: 'p',
        text:
          'Si se desea confirmar que la partición está creada, se puede volver a entrar con <strong>fdisk /dev/sdd</strong> y presionar <strong>p</strong>, que imprime por pantalla un resumen. También se puede ejecutar <strong>lsblk</strong> nuevamente para ver la nueva partición listada.',
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
      'Una vez que tenés la partición creada, hay que darle un filesystem con <strong>mkfs</strong>, montarla en un directorio con <strong>mount</strong>, y dejar la línea anotada en <strong>/etc/fstab</strong> para que se monte sola en cada arranque. Si te saltás el último paso, al reiniciar la VM perdés el montaje.',
    blocks: [
      {
        type: 'h3',
        text: 'Formateo con mkfs',
        criollo:
          'mkfs le da al disco un filesystem para que pueda recibir datos. La opción <strong>-t</strong> dice qué tipo (ext4 en el ejemplo).',
      },
      {
        type: 'p',
        text:
          'Ahora que el disco tiene una partición del tamaño deseado, hay que crear su filesystem para que pueda recibir datos. Para darle formato se utiliza el comando <strong>mkfs</strong> con la opción <strong>-t</strong> para indicar el filesystem. En el ejemplo se usa <strong>ext4</strong>, que es uno de los más utilizados:',
      },
      {
        type: 'p',
        text: '<strong>mkfs -t ext4 /dev/sdd1</strong>',
      },
      {
        type: 'h3',
        text: 'Montar el disco',
        criollo:
          'Montar es enganchar el disco a un directorio del árbol "/". A partir de ahí, todo lo que escribís en ese directorio va al disco nuevo. Se usa <strong>mount</strong>.',
      },
      {
        type: 'p',
        text:
          'La máquina ya tiene el disco agregado, inicializado y formateado. Ahora viene la etapa de montarlo para incluirlo al sistema de archivos. Todos los archivos y directorios están organizados en una estructura jerárquica única, denominada sistema de archivos, con raíz en el directorio <strong>"/"</strong>. Cuando se monta un disco en un directorio, se conecta el dispositivo de almacenamiento (un disco rígido o una partición) a una ubicación dentro del sistema de archivos, permitiendo que el contenido del disco sea accesible a través de ese directorio. La acción se realiza con el comando <strong>mount</strong>.',
      },
      {
        type: 'ol',
        items: [
          'Crear un directorio nuevo donde se va a montar la partición (no siempre es necesario: también se podría migrar un directorio existente). En el ejemplo, se llama <strong>VENTAS</strong> y se crea en el "/": <strong>mkdir VENTAS</strong>.',
          'El comando <strong>df</strong> muestra el uso de espacio en disco en el sistema por cada partición. Agregando <strong>-h</strong> (human-readable) se ve el consumo y en qué partición está montado cada cosa.',
          'Montar <strong>VENTAS</strong> en la partición <strong>/dev/sdd1</strong> con: <strong>mount /dev/sdd1 /VENTAS/</strong>.',
        ],
      },
      {
        type: 'p',
        text:
          'Si se vuelve a ejecutar <strong>df -h</strong>, ya se ve que el directorio creado está "montado" sobre <strong>/dev/sdd1</strong>.',
      },
      {
        type: 'h3',
        text: 'Persistir con /etc/fstab',
        criollo:
          'El montaje hecho con <strong>mount</strong> dura hasta que reinicies la VM. Si querés que se monte solo en cada arranque, hay que dejar la línea en <strong>/etc/fstab</strong>. Los comandos mount y umount leen ese archivo.',
      },
      {
        type: 'p',
        text:
          'El archivo <strong>fstab</strong> se encuentra en el directorio <strong>/etc</strong> y se utiliza para configurar la lista de discos y puntos de montaje del sistema operativo, entre otras configuraciones. También se pueden declarar montajes hacia otros servidores que interese tener disponibles de forma local o a través de la red.',
      },
      {
        type: 'p',
        text:
          'Los comandos <strong>mount</strong> (para montar directorios en particiones) y <strong>umount</strong> (la acción contraria) leen este archivo para determinar qué opciones utilizar al momento del montaje.',
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
          '<strong>filesystem</strong>: directorio lógico que hace referencia a una partición o recurso. Se puede declarar el path (/dev/sd*) o el UUID (identificador del disco).',
          '<strong>mount point</strong>: carpeta en la que se proyectarán los datos del sistema de archivos (cualquier directorio).',
          '<strong>type</strong>: tipo de filesystem en el que se formateó la partición (ext2, ext3, ext4, xfs, etc.).',
          '<strong>options</strong>: parámetros que mount utilizará al montar (noauto, user, password, etc.).',
          '<strong>dump-freq</strong>: parámetro que utiliza <strong>dump</strong> para hacer backup del sistema de archivos. Si es 0, no se toma en cuenta para backup.',
          '<strong>pass-num</strong>: indica el orden en que <strong>fsck</strong> revisará la partición en busca de errores durante el inicio. Si es 0, el dispositivo no se revisa.',
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
          '<strong>defaults</strong>: usa las opciones predeterminadas para el montaje.',
          '<strong>ro / rw</strong>: monta el sistema de archivos en modo solo lectura o en lectura y escritura (son excluyentes).',
          '<strong>noauto</strong>: evita que el sistema de archivos se monte automáticamente al inicio.',
          '<strong>user</strong>: permite a usuarios normales montar el sistema de archivos.',
          '<strong>exec / noexec</strong>: permite o bloquea la ejecución de archivos binarios.',
          '<strong>nosuid</strong>: ignora los bits de permisos especiales suid y sgid en el filesystem.',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        text:
          'Para que la partición se monte sola en cada inicio, hay que editar <strong>/etc/fstab</strong> y agregar al final la línea que corresponde a la nueva partición y al directorio creado.',
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
          'Un link duro es una referencia directa al dato físico del archivo. Lo identifica un número único llamado <strong>inodo</strong> — no por el nombre.',
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
          'Un <strong>inodo</strong> es una estructura de datos que contiene la información esencial sobre un archivo, como el propietario, los permisos, el tamaño, y más; aunque <strong>no almacena el nombre del archivo</strong>. Cada archivo en el sistema tiene un número de inodo único que permite al sistema localizar y gestionar sus datos en el disco. Para ver el número de inodo se puede ejecutar el comando <strong>ls</strong> agregando las opciones <strong>-li</strong>:',
      },
      {
        type: 'p',
        text: '<strong>ls -li</strong> &nbsp;&nbsp;→&nbsp;&nbsp; <strong>1970</strong> -rw-r--r-- 1 root root 0 Oct 17 21:01 archivo.txt',
      },
      {
        type: 'p',
        text:
          'El número en la primera columna (<strong>1970</strong>) corresponde al inodo.',
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
          'Con el comando <strong>ln</strong> seguido del archivo origen y del nombre del link. Después, con ls -li, vas a ver que los dos tienen el mismo número de inodo.',
      },
      {
        type: 'p',
        text:
          'Para crear un hard link se utiliza el comando <strong>ln</strong>:',
      },
      {
        type: 'p',
        text: '<strong>ln</strong> "archivo al que apunto" "nombre del hard link"',
      },
      {
        type: 'p',
        text:
          'Ejemplo: <strong>ln archivo.txt hl_archivo.txt</strong>',
      },
      {
        type: 'p',
        text: 'Si luego se ejecuta <strong>ls -li</strong>:',
      },
      {
        type: 'p',
        text: '<strong>1970</strong> -rw-r--r-- 2 root root 0 Oct 17 21:01 archivo.txt',
      },
      {
        type: 'p',
        text: '<strong>1970</strong> -rw-r--r-- 2 root root 0 Oct 17 21:01 hl_archivo.txt',
      },
      {
        type: 'p',
        text:
          'Tanto el archivo preexistente como el hard link (denominado <strong>hl_archivo.txt</strong>) tienen el mismo número de inodo. También cambia el contador de links (la columna después de los permisos): pasa de 1 a 2.',
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
          'Mismo comando <strong>ln</strong> pero con la opción <strong>-s</strong>. En el ls vas a ver una "l" como primer carácter y la flecha "->" mostrando a dónde apunta.',
      },
      {
        type: 'p',
        text:
          'Para crear un soft link se utiliza el comando <strong>ln</strong> con la opción <strong>-s</strong>:',
      },
      {
        type: 'p',
        text: '<strong>ln -s</strong> "archivo al que apunto" "nombre del soft link"',
      },
      {
        type: 'p',
        text:
          'Ejemplo: <strong>ln -s archivo.txt sl_archivo.txt</strong>',
      },
      {
        type: 'p',
        text: 'Al ejecutar <strong>ls -l</strong>:',
      },
      {
        type: 'p',
        text: '-rw-r--r-- 2 root root &nbsp; 0 Oct 17 21:01 archivo.txt',
      },
      {
        type: 'p',
        text: '<strong>l</strong>rwxrwxrwx 1 root root 14 Nov 6 13:00 sl_archivo.txt <strong>-&gt;</strong> archivo.txt',
      },
      {
        type: 'p',
        text:
          'La creación del soft link se identifica por el primer carácter, que pasa a ser <strong>"l"</strong> (link). En la descripción del nombre aparece la referencia de redirección <strong>"-&gt;"</strong> hacia el archivo físico (archivo.txt).',
      },
      {
        type: 'p',
        text:
          'Al comparar con <strong>ls -li</strong> se observa que el link simbólico y el archivo original <strong>tienen distinto inodo</strong>, mientras que el hard link comparte el inodo con el archivo:',
      },
      {
        type: 'p',
        text: '<strong>1970</strong> -rw-r--r-- 2 root root 25 Nov 6 13:05 archivo',
      },
      {
        type: 'p',
        text: '<strong>1970</strong> -rw-r--r-- 2 root root 25 Nov 6 13:05 hl_archivo',
      },
      {
        type: 'p',
        text: '<strong>1931</strong> lrwxrwxrwx 1 root root &nbsp;7 Nov 6 13:04 sl_archivo.txt -&gt; archivo',
      },
      {
        type: 'ul',
        items: [
          'La <strong>primera línea</strong> es el archivo original.',
          'La <strong>segunda línea</strong> es el hard link que apunta al archivo original (mismo inodo 1970).',
          'La <strong>tercera línea</strong> es el soft link que apunta al archivo original (distinto inodo, 1931).',
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
  ],
  pdfs: [
    { key: 'intro-filesystem', label: 'Intro a filesystem (1ra parte M7)', path: 'pdfs/computacion-aplicada/1-intro-filesystem.pdf' },
    { key: 'incorporacion-discos', label: 'Incorporación de discos (2da parte M7)', path: 'pdfs/computacion-aplicada/1-incorporacion-discos.pdf' },
    { key: 'links', label: 'Links (2da parte M7)', path: 'pdfs/computacion-aplicada/2-links.pdf' },
  ],
};
