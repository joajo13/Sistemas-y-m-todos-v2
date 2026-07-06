/**
 * Materia: Administración de GNU/Linux (Universidad de Palermo, 0306).
 *
 * Contenido transcripto de los apuntes de la cátedra. Unidades:
 *   '1' — Fundamentos de GNU/Linux (historia, virtualización, shell, FHS, comandos, editores, gestor de software)
 *   '2' — Permisos y administración de usuarios (octal/simbólico, permisos especiales, umask, sudo, usuarios)
 *   '3' — Procesamiento de texto en la shell (redirecciones y pipes, streams y filtros, expresiones regulares)
 *   '4' — Redes y servicios (redes, DNS/DHCP, SSH)
 *
 * Incluye quiz (V/F + MC + MS) y flashcards por sección, resumen final navegable
 * y dos parciales de práctica. Archivo generado a partir de los PDFs fuente.
 */

export default {
  "id": "administracion-gnu-linux",
  "title": "Administración de GNU/Linux",
  "subtitle": "Sistemas operativos — apuntes",
  "tagline": "Historia y shell · FHS y comandos · Permisos, umask y sudo · Usuarios · Redirecciones, filtros y regex · Redes, DNS/DHCP y SSH",
  "units": {
    "1": "Fundamentos de GNU/Linux",
    "2": "Permisos y administración de usuarios",
    "3": "Procesamiento de texto en la shell",
    "4": "Redes y servicios"
  },
  "sections": [
    {
      "id": "1",
      "unit": "1",
      "title": "Historia, origen y evolución de GNU/Linux",
      "criollo": "Acá va la historia de cómo nació el software libre: Stallman se calentó porque no lo dejaban tocar el código de una impresora y armó GNU. Después venís de Multics a Unix, y al final Linus Torvalds mete el kernel Linux que se casa con las herramientas GNU. De ahí sale el GNU/Linux que hoy corre media internet.",
      "blocks": [
        {
          "type": "h3",
          "text": "Richard Stallman y el nacimiento del software libre",
          "criollo": "El pibe del MIT que se dio cuenta de que cerrar el código era un quilombo para la libertad."
        },
        {
          "type": "p",
          "text": "La historia comienza con <strong>Richard Stallman</strong>, clave para comprender los inicios del software libre y su impacto en la informática. Stallman, nacido en 1953 en Nueva York, mostró desde joven un interés profundo por la programación y la tecnología. Cuando era estudiante en el <strong>MIT</strong> (Instituto Tecnológico de Massachusetts) en los años 70, formó parte de la comunidad de programadores del laboratorio de inteligencia artificial, un entorno donde se compartían y colaboraban los programas de manera abierta."
        },
        {
          "type": "p",
          "text": "A lo largo de esa década, Stallman comenzó a notar un cambio: lo que antes era una cultura de compartir libremente software se estaba transformando en una industria en la que las compañías empezaban a cerrar el código fuente y licenciar el uso de los programas. Uno de los momentos clave fue cuando quiso modificar un programa de una impresora <strong>Xerox</strong> que no funcionaba bien, pero se le negó acceso al código fuente, ya que estaba protegido por una licencia propietaria."
        },
        {
          "type": "p",
          "text": "Sucesos como este lo convencieron de que el <strong>software propietario era una amenaza a la libertad de los usuarios</strong>. Por ello, en <strong>1983</strong> anunció la creación del proyecto <strong>GNU</strong>, con el objetivo de crear un sistema operativo completamente libre que permitiera a los usuarios modificar, compartir y distribuir el software sin restricciones. El nombre \"GNU\" es un juego de palabras que significa que, aunque se parecía a Unix, no estaba basado en ese sistema operativo propietario (<strong>GNU's not Unix</strong>)."
        },
        {
          "type": "p",
          "text": "El proyecto GNU fue el primer paso hacia el movimiento del software libre. Stallman también escribió la <strong>Licencia Pública General de GNU (GPL)</strong>, una licencia que garantiza que cualquier software publicado bajo ella debe seguir siendo libre y disponible para su modificación y distribución, incluso si es modificado o redistribuido por otros. Stallman dedicó su vida a promover la libertad del software, y su visión fue crucial para la creación de herramientas que aún hoy son fundamentales, como el compilador <code>GCC</code> y el editor de texto <code>Emacs</code>."
        },
        {
          "type": "h3",
          "text": "Origen: de Multics a Unix",
          "criollo": "Multics era caro y complicado, así que de ahí salió Unix, más simple. Después Unix se volvió propietario y se fragmentó en mil versiones."
        },
        {
          "type": "p",
          "text": "El origen de GNU como sistema operativo se remonta a la evolución de varios proyectos que sirvieron de base a la filosofía del software libre. Todo comienza en los años 60, cuando el MIT, junto con <strong>General Electric</strong> y <strong>Bell Labs</strong>, desarrollaron <strong>Multics</strong> (Multiplexed Information and Computing Service). Multics fue uno de los primeros sistemas operativos de tiempo compartido, diseñado para permitir que múltiples usuarios ejecutaran programas en una misma computadora simultáneamente. Aunque innovador, el proyecto era complejo y costoso. Bell Labs decidió abandonar Multics en 1969, pero las ideas generadas allí no se perderían."
        },
        {
          "type": "p",
          "text": "Uno de los ingenieros que trabajaba en Bell Labs, <strong>Ken Thompson</strong>, aprovechó conceptos de Multics para crear <strong>Unix</strong>, un sistema operativo más simple y eficiente, que se lanzó en <strong>1971</strong>. Unix rápidamente se popularizó entre académicos y desarrolladores por su portabilidad y facilidad de uso. Sin embargo, con el tiempo Unix se convirtió en un sistema propietario, con <strong>AT&amp;T</strong> (dueña en ese momento de Bell Labs) controlando su licencia y comercialización."
        },
        {
          "type": "h3",
          "text": "La línea de tiempo de Unix",
          "criollo": "De Unix salieron un montón de versiones (BSD, System V, Solaris, AIX...) hasta que GNU/Linux se las comió a casi todas."
        },
        {
          "type": "p",
          "text": "Desde entonces, Unix fue pasando por diferentes etapas que lo llevaron a convertirse en la base de muchos sistemas operativos modernos:"
        },
        {
          "type": "table",
          "caption": "Etapas y bifurcaciones de Unix",
          "headers": [
            "Año",
            "Hito"
          ],
          "rows": [
            [
              "1973",
              "Unix se reescribe en el lenguaje C (también desarrollado por Bell Labs), lo que lo hizo más fácil de portar a diferentes máquinas y aceleró su adopción en universidades y laboratorios."
            ],
            [
              "1975",
              "Unix se distribuye a universidades a bajo costo. Surge la primera bifurcación importante: la Universidad de California en Berkeley desarrolla su versión conocida como BSD (Berkeley Software Distribution)."
            ],
            [
              "1980",
              "Unix comienza a fragmentarse: AT&T (Bell Labs) lanza System V; Sun Microsystems lanza SunOS; IBM lanza AIX; Hewlett Packard lanza HP-UX."
            ],
            [
              "1983",
              "Richard Stallman desarrolla el proyecto GNU con el objetivo de crear un sistema operativo libre basado en Unix."
            ],
            [
              "1984",
              "Surge la Open Software Foundation (OSF) como respuesta a la proliferación de versiones incompatibles de Unix, buscando estandarizarlo. No tuvo mucho éxito."
            ],
            [
              "1991",
              "La fragmentación sigue creciendo, pero comienzan a asentarse versiones como Solaris de Sun Microsystems y AIX de IBM."
            ],
            [
              "2000s",
              "La fragmentación de Unix y el auge de GNU/Linux contribuyen a la disminución del uso de Unix en la industria."
            ],
            [
              "2001",
              "Apple lanza macOS, basado en Unix (específicamente en una variante de BSD)."
            ],
            [
              "2010",
              "Las versiones comerciales de Unix habían perdido gran parte de su cuota de mercado frente a GNU/Linux. Solaris (de Oracle) comienza a decaer y muchas empresas migran a GNU/Linux por su menor costo y su amplia comunidad."
            ]
          ]
        },
        {
          "type": "p",
          "text": "Aunque Unix sigue existiendo en varias formas, su uso quedó mayormente relegado a sistemas heredados y aplicaciones críticas en empresas que no han podido o no han querido migrar a Linux. macOS, el sistema de Apple, sigue estando oficialmente certificado como un sistema Unix, aunque su uso es principalmente en computadoras personales y no en servidores."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "<strong>GNU/Linux ha superado a Unix en casi todos los aspectos</strong>, especialmente en servidores, supercomputadoras y dispositivos móviles (a través de Android, basado en el kernel de Linux). En servidores y centros de cómputos es el <strong>estándar de facto</strong>, y la mayor parte de la infraestructura de internet corre sobre servidores Linux."
        },
        {
          "type": "h3",
          "text": "Evolución: Linus Torvalds y el kernel Linux",
          "criollo": "Un estudiante finlandés se compró una PC, se hartó de Minix y armó su propio kernel. Lo liberó y se le sumó todo el mundo."
        },
        {
          "type": "p",
          "text": "En <strong>1991</strong>, <strong>Linus Torvalds</strong>, un estudiante finlandés de informática, comenzó a desarrollar un kernel inspirado en Unix como proyecto personal para su computadora. Linus compró su primera computadora personal, una <strong>IBM PC con procesador Intel 80386</strong>, y decidió que quería usar un sistema operativo basado en Unix en su propia máquina."
        },
        {
          "type": "p",
          "text": "Para su proyecto utilizó <strong>Minix</strong>, una de las tantas variantes de Unix desarrollada por <strong>Andrew Tanenbaum</strong> con fines educativos. Si bien Minix tenía buen comportamiento, para Linus seguía estando limitado. Entonces decidió crear su propio kernel con el fin de potenciar lo que Minix podía hacer con el hardware que había comprado. El <strong>25 de agosto de 1991</strong>, Linus publicó un mensaje en un grupo de noticias de Usenet que pasaría a la historia:"
        },
        {
          "type": "callout",
          "tone": "criollo",
          "text": "\"Hola a todos los que están usando Minix. Estoy desarrollando un sistema operativo gratuito solo como hobby, no será grande ni profesional como GNU para clones AT386(486). Esto se viene gestando desde abril, y empieza a estar listo. Me gustaría recibir algún feedback si les gusta o no…\""
        },
        {
          "type": "p",
          "text": "Al liberar su kernel bajo una licencia de código abierto, Linus permitió que otros programadores contribuyeran, mejoraran y distribuyeran su trabajo. Esto fue crucial para su éxito, ya que la comunidad global de desarrolladores se unió para colaborar. Torvalds no estaba particularmente interesado en el aspecto filosófico del software libre; su enfoque era más práctico: quería crear un kernel que pudiera correr en su computadora personal y fuera útil. Cuando lanzó Linux bajo la <strong>GPL</strong>, los desarrolladores de todo el mundo comenzaron a contribuir, y fue entonces cuando <strong>el kernel Linux y las herramientas GNU encontraron su compatibilidad natural</strong>."
        },
        {
          "type": "h3",
          "text": "Qué es el kernel y de dónde viene el nombre GNU/Linux"
        },
        {
          "type": "p",
          "text": "El <strong>kernel</strong> es un conjunto de programas con control completo sobre el sistema, que facilita las interacciones entre los componentes de hardware y software. En la mayoría de los sistemas es uno de los primeros programas en ser cargados. Maneja solicitudes de memoria y periféricos como teclados, monitores e impresoras."
        },
        {
          "type": "p",
          "text": "El término <strong>GNU/Linux</strong> deviene de la unión de <strong>GNU</strong> (proyecto creado por Richard Stallman) y <strong>Linux</strong>, el núcleo o kernel del sistema operativo (creado por Linus Torvalds)."
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-1-1",
            "q": "El nombre \"GNU\" significa \"GNU's not Unix\", indicando que se parecía a Unix pero no estaba basado en ese sistema propietario.",
            "a": true,
            "explain": "Es un juego de palabras recursivo: aunque GNU se parecía a Unix, no estaba basado en él."
          },
          {
            "id": "tf-1-2",
            "q": "Linus Torvalds inició el proyecto GNU en 1983 para crear un sistema operativo libre.",
            "a": false,
            "explain": "El proyecto GNU lo anunció Richard Stallman en 1983. Torvalds recién en 1991 comenzó a desarrollar el kernel Linux."
          },
          {
            "id": "tf-1-3",
            "q": "Unix fue creado por Ken Thompson en Bell Labs y se lanzó en 1971, aprovechando conceptos de Multics.",
            "a": true,
            "explain": "Thompson tomó ideas de Multics (que Bell Labs abandonó en 1969) para crear Unix, un sistema más simple y eficiente, lanzado en 1971."
          },
          {
            "id": "tf-1-4",
            "q": "Torvalds estaba profundamente interesado en el aspecto filosófico del software libre por sobre lo práctico.",
            "a": false,
            "explain": "Al contrario: su enfoque era práctico, quería un kernel que corriera en su PC y fuera útil. No le interesaba particularmente la faceta filosófica."
          },
          {
            "id": "tf-1-5",
            "q": "macOS, el sistema de Apple lanzado en 2001, está basado en Unix, específicamente en una variante de BSD.",
            "a": true,
            "explain": "macOS se basa en una variante de BSD y sigue estando oficialmente certificado como sistema Unix."
          }
        ],
        "mc": [
          {
            "id": "mc-1-1",
            "q": "¿Qué hecho puntual convenció a Stallman de que el software propietario era una amenaza a la libertad?",
            "options": [
              "No poder acceder al código fuente de un programa de una impresora Xerox",
              "Que le negaran el ingreso al MIT",
              "La aparición de Linux en 1991",
              "El abandono de Multics por parte de Bell Labs"
            ],
            "correctIndex": 0,
            "explain": "Quiso modificar el programa de una impresora Xerox que no andaba bien y se le negó el acceso al código fuente por estar bajo licencia propietaria."
          },
          {
            "id": "mc-1-2",
            "q": "¿Qué sistema operativo educativo, desarrollado por Andrew Tanenbaum, usó Linus antes de crear su propio kernel?",
            "options": [
              "System V",
              "Minix",
              "BSD",
              "Solaris"
            ],
            "correctIndex": 1,
            "explain": "Linus usó Minix, una variante de Unix creada por Tanenbaum con fines educativos, pero le resultaba limitado y decidió armar su propio kernel."
          },
          {
            "id": "mc-1-3",
            "q": "¿Qué licencia escribió Stallman para garantizar que el software siguiera libre incluso al ser modificado o redistribuido?",
            "options": [
              "La licencia BSD",
              "La licencia MIT",
              "La Licencia Pública General de GNU (GPL)",
              "La licencia Apache"
            ],
            "correctIndex": 2,
            "explain": "Stallman escribió la GPL, que garantiza que cualquier software publicado bajo ella siga siendo libre y disponible para su modificación y distribución."
          },
          {
            "id": "mc-1-4",
            "q": "En 1975 surge la primera bifurcación importante de Unix. ¿Cuál fue?",
            "options": [
              "System V de AT&T",
              "BSD, desarrollada por la Universidad de California en Berkeley",
              "AIX de IBM",
              "HP-UX de Hewlett Packard"
            ],
            "correctIndex": 1,
            "explain": "Al distribuirse Unix a las universidades a bajo costo, Berkeley desarrolló su propia versión: BSD (Berkeley Software Distribution)."
          }
        ],
        "ms": [
          {
            "id": "ms-1-1",
            "q": "¿Cuáles de las siguientes fueron versiones o variantes propietarias de Unix mencionadas en el apunte?",
            "options": [
              "System V (AT&T)",
              "SunOS (Sun Microsystems)",
              "AIX (IBM)",
              "Emacs",
              "HP-UX (Hewlett Packard)"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "System V, SunOS, AIX y HP-UX son versiones de Unix. Emacs es un editor de texto escrito por Stallman, no una versión de Unix."
          },
          {
            "id": "ms-1-2",
            "q": "¿Cuáles afirmaciones sobre el proyecto GNU y Stallman son correctas según el apunte?",
            "options": [
              "Fue anunciado en 1983",
              "Su objetivo era crear un sistema operativo completamente libre",
              "Stallman escribió el compilador GCC y el editor Emacs",
              "GNU estaba basado directamente en el código de Unix",
              "Fue el primer paso hacia el movimiento del software libre"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "GNU se anunció en 1983, buscaba un SO libre, y Stallman creó GCC y Emacs. NO estaba basado en Unix: \"GNU's not Unix\". Sí fue el primer paso hacia el movimiento del software libre."
          },
          {
            "id": "ms-1-3",
            "q": "¿Cuáles son funciones o características del kernel según el apunte?",
            "options": [
              "Tiene control completo sobre el sistema",
              "Facilita las interacciones entre hardware y software",
              "Suele ser uno de los primeros programas en cargarse",
              "Maneja solicitudes de memoria y periféricos",
              "Es el editor de texto principal del sistema"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              3
            ],
            "explain": "El kernel controla el sistema, media entre hardware y software, se carga entre los primeros y gestiona memoria y periféricos. No es un editor de texto."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-1-1",
          "front": "¿Quién fundó el proyecto GNU?",
          "back": "Richard Stallman, en 1983, con el objetivo de crear un sistema operativo completamente libre."
        },
        {
          "id": "fc-1-2",
          "front": "Significado de GNU",
          "back": "\"GNU's not Unix\": un juego de palabras recursivo que indica que se parecía a Unix pero no estaba basado en ese sistema propietario."
        },
        {
          "id": "fc-1-3",
          "front": "¿Qué es la GPL?",
          "back": "La Licencia Pública General de GNU, escrita por Stallman. Garantiza que el software publicado bajo ella siga siendo libre para modificar y distribuir, incluso si otros lo redistribuyen."
        },
        {
          "id": "fc-1-4",
          "front": "Origen de Unix",
          "back": "Creado por Ken Thompson en Bell Labs, lanzado en 1971, aprovechando conceptos de Multics. Luego se volvió propietario bajo AT&T."
        },
        {
          "id": "fc-1-5",
          "front": "¿Qué es Multics?",
          "back": "Sistema operativo de tiempo compartido desarrollado en los 60 por MIT, General Electric y Bell Labs. Innovador pero complejo y costoso; Bell Labs lo abandonó en 1969."
        },
        {
          "id": "fc-1-6",
          "front": "¿Quién creó el kernel Linux?",
          "back": "Linus Torvalds, estudiante finlandés, en 1991, sobre una IBM PC con procesador Intel 80386. Lo anunció en Usenet el 25 de agosto de 1991."
        },
        {
          "id": "fc-1-7",
          "front": "¿Qué es el kernel?",
          "back": "Conjunto de programas con control completo sobre el sistema. Media entre hardware y software, suele cargarse de los primeros y maneja memoria y periféricos."
        },
        {
          "id": "fc-1-8",
          "front": "Origen del nombre GNU/Linux",
          "back": "Unión de GNU (proyecto de Stallman con las herramientas) y Linux, el kernel creado por Torvalds. Encontraron su compatibilidad natural bajo la GPL."
        },
        {
          "id": "fc-1-9",
          "front": "Minix y Andrew Tanenbaum",
          "back": "Minix era una variante educativa de Unix creada por Tanenbaum. Linus la usó pero la encontró limitada, lo que lo llevó a crear su propio kernel."
        }
      ]
    },
    {
      "id": "2",
      "unit": "1",
      "title": "Virtualización",
      "criollo": "Acá va la posta de cómo corrés varios sistemas operativos en un mismo fierro físico usando máquinas virtuales. El que hace la magia es el hipervisor, que puede ser tipo 1 (corre pelado sobre el hardware) o tipo 2 (arriba de un SO estándar como Windows o Linux). Poco choclo, conceptual.",
      "blocks": [
        {
          "type": "p",
          "text": "La <strong>virtualización</strong> es la tecnología que permite ejecutar múltiples sistemas operativos y aplicaciones en el mismo hardware físico de manera eficiente. Esto se logra creando <strong>máquinas virtuales</strong> que trabajan en un entorno simulado."
        },
        {
          "type": "p",
          "text": "El software que permite virtualizar servidores imita las funciones del hardware físico, recreando sus componentes y convirtiéndolos en lógicos para que la máquina virtual pueda utilizarlos (disco, red, CPU, video, etc.)."
        },
        {
          "type": "p",
          "text": "La utilización de entornos virtuales permite mayor flexibilidad al momento de administrar los recursos. En la medida que el hardware físico tenga la potencialidad de permitirlo, podríamos <strong>escalar horizontal y verticalmente</strong> el hardware de nuestras máquinas virtuales, tanto en capacidad como en cantidad."
        },
        {
          "type": "h3",
          "text": "Componentes",
          "criollo": "El fierro de abajo manda: los recursos de cada VM salen del anfitrión."
        },
        {
          "type": "p",
          "text": "La disponibilidad y los recursos de cada máquina virtual dependen del hardware anfitrión que tenga como base. A los servidores que realizan este trabajo les llamamos <strong>hipervisores</strong>."
        },
        {
          "type": "p",
          "text": "El concepto de hipervisor viene desde fines de los años ‘60 y principios de los ‘70 con el uso del <strong>mainframe</strong>. Un mainframe es un tipo de computadora diseñada por IBM utilizada para procesamientos de datos masivos, que algunos bancos en la Argentina aún siguen usando. Se diseñó para que múltiples usuarios tengan acceso a una parte del mainframe simulando un sistema operativo para cada uno de ellos. El primer modelo con esta capacidad fue el <strong>IBM S/360 Modelo 67</strong>."
        },
        {
          "type": "p",
          "text": "En tiempos más modernos, la empresa <strong>VMware</strong> desarrolló los primeros hipervisores a finales de los años ‘90. Esto fue posible porque los fabricantes de microprocesadores Intel y AMD desarrollaron extensiones en sus procesadores llamadas <strong>IVT</strong> (Intel Virtualization Technology) y <strong>AMD-V</strong> (AMD Virtualization) respectivamente, permitiendo un uso eficiente de los procesadores y pudiendo generar así entornos emulados."
        },
        {
          "type": "p",
          "text": "Existen 2 tipos de hipervisores más comunes:"
        },
        {
          "type": "h3",
          "text": "Hipervisor de tipo 1 (BareMetal)"
        },
        {
          "type": "p",
          "text": "Este tipo de hipervisor corre un sistema operativo directamente sobre su hardware, y las máquinas virtuales que se alojen en él tienen acceso directo a los componentes administrados por el mismo sistema operativo. Algunas de las empresas/tecnologías que utilizan esta tecnología son:"
        },
        {
          "type": "ul",
          "items": [
            "Proxmox VE",
            "Xen",
            "KVM",
            "MS Hyper-V",
            "VMware ESXi"
          ]
        },
        {
          "type": "h3",
          "text": "Hipervisor tipo 2 (Hosted)"
        },
        {
          "type": "p",
          "text": "En este caso, sobre el hardware que se utiliza para la virtualización corre un <strong>sistema operativo estándar</strong> que puede ser Windows o GNU/Linux, y sobre éstos un software dedicado a la virtualización que cumpla con la función de administrar máquinas virtuales. Algunas de las tecnologías que desarrollan esto son:"
        },
        {
          "type": "ul",
          "items": [
            "VMware Workstation / VMware Player",
            "Parallels Desktop",
            "UTM",
            "VirtualBox",
            "QEMU"
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Diferencia clave: el <strong>tipo 1 (BareMetal)</strong> corre directamente sobre el hardware; el <strong>tipo 2 (Hosted)</strong> corre encima de un sistema operativo estándar ya instalado."
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-2-1",
            "q": "La virtualización permite ejecutar múltiples sistemas operativos en el mismo hardware físico.",
            "a": true,
            "explain": "Exacto: se logra creando máquinas virtuales que trabajan en un entorno simulado sobre el mismo hardware físico."
          },
          {
            "id": "tf-2-2",
            "q": "Un hipervisor de tipo 2 (Hosted) corre directamente sobre el hardware, sin sistema operativo de por medio.",
            "a": false,
            "explain": "Falso: ese es el tipo 1 (BareMetal). El tipo 2 corre sobre un sistema operativo estándar como Windows o GNU/Linux."
          },
          {
            "id": "tf-2-3",
            "q": "Las extensiones IVT (Intel) y AMD-V (AMD) permitieron generar entornos emulados de forma eficiente.",
            "a": true,
            "explain": "Correcto: esas extensiones de los procesadores Intel y AMD hicieron posible que VMware desarrollara los primeros hipervisores a fines de los ‘90."
          },
          {
            "id": "tf-2-4",
            "q": "El concepto de hipervisor es reciente, nació con VMware en los años ‘90.",
            "a": false,
            "explain": "Falso: el concepto viene desde fines de los ‘60 y principios de los ‘70 con el mainframe. VMware desarrolló los primeros hipervisores modernos en los ‘90, pero la idea es previa."
          },
          {
            "id": "tf-2-5",
            "q": "Los recursos y la disponibilidad de cada máquina virtual dependen del hardware anfitrión.",
            "a": true,
            "explain": "Sí: la disponibilidad y los recursos de cada VM dependen del hardware anfitrión que tenga como base."
          }
        ],
        "mc": [
          {
            "id": "mc-2-1",
            "q": "¿Cómo se llama al servidor/software que administra las máquinas virtuales y del cual dependen sus recursos?",
            "options": [
              "Mainframe",
              "Hipervisor",
              "Máquina anfitriona lógica",
              "Emulador BareMetal"
            ],
            "correctIndex": 1,
            "explain": "A los servidores que realizan este trabajo se les llama hipervisores."
          },
          {
            "id": "mc-2-2",
            "q": "¿Cuál fue el primer modelo de mainframe con capacidad de simular un sistema operativo para cada usuario?",
            "options": [
              "IBM S/360 Modelo 67",
              "VMware ESXi",
              "Intel IVT",
              "IBM Modelo 360-V"
            ],
            "correctIndex": 0,
            "explain": "El primer modelo con esa capacidad fue el IBM S/360 Modelo 67."
          },
          {
            "id": "mc-2-3",
            "q": "¿Cuál de estos es un hipervisor de tipo 1 (BareMetal)?",
            "options": [
              "VirtualBox",
              "Parallels Desktop",
              "VMware ESXi",
              "QEMU"
            ],
            "correctIndex": 2,
            "explain": "VMware ESXi es tipo 1 (BareMetal). VirtualBox, Parallels Desktop y QEMU son tipo 2 (Hosted)."
          },
          {
            "id": "mc-2-4",
            "q": "¿Qué empresa desarrolló los primeros hipervisores modernos a finales de los años ‘90?",
            "options": [
              "IBM",
              "Intel",
              "AMD",
              "VMware"
            ],
            "correctIndex": 3,
            "explain": "VMware desarrolló los primeros hipervisores a finales de los ‘90, apoyándose en las extensiones IVT y AMD-V."
          }
        ],
        "ms": [
          {
            "id": "ms-2-1",
            "q": "¿Cuáles de las siguientes son tecnologías de hipervisor de tipo 1 (BareMetal)?",
            "options": [
              "Proxmox VE",
              "VirtualBox",
              "Xen",
              "KVM",
              "Parallels Desktop"
            ],
            "correctIndexes": [
              0,
              2,
              3
            ],
            "explain": "Tipo 1 (BareMetal): Proxmox VE, Xen, KVM, MS Hyper-V y VMware ESXi. VirtualBox y Parallels Desktop son tipo 2."
          },
          {
            "id": "ms-2-2",
            "q": "¿Cuáles de las siguientes son tecnologías de hipervisor de tipo 2 (Hosted)?",
            "options": [
              "VMware ESXi",
              "VirtualBox",
              "QEMU",
              "UTM",
              "KVM"
            ],
            "correctIndexes": [
              1,
              2,
              3
            ],
            "explain": "Tipo 2 (Hosted): VMware Workstation/Player, Parallels Desktop, UTM, VirtualBox y QEMU. VMware ESXi y KVM son tipo 1."
          },
          {
            "id": "ms-2-3",
            "q": "¿Qué afirmaciones sobre la virtualización son correctas según el apunte?",
            "options": [
              "Permite ejecutar múltiples sistemas operativos en el mismo hardware físico",
              "El software recrea componentes del hardware convirtiéndolos en lógicos",
              "Permite escalar horizontal y verticalmente las máquinas virtuales",
              "El concepto de hipervisor nació recién en el año 2010",
              "Los recursos de cada VM dependen del hardware anfitrión"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "Todas son correctas salvo la del año 2010: el concepto de hipervisor viene desde fines de los ‘60 y principios de los ‘70 con el mainframe."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-2-1",
          "front": "¿Qué es la virtualización?",
          "back": "Tecnología que permite ejecutar múltiples sistemas operativos y aplicaciones en el mismo hardware físico de manera eficiente, creando máquinas virtuales en un entorno simulado."
        },
        {
          "id": "fc-2-2",
          "front": "Hipervisor",
          "back": "Servidor/software que administra las máquinas virtuales. La disponibilidad y los recursos de cada VM dependen del hardware anfitrión que tenga como base."
        },
        {
          "id": "fc-2-3",
          "front": "Hipervisor tipo 1 (BareMetal)",
          "back": "Corre un sistema operativo directamente sobre el hardware; las VMs tienen acceso directo a los componentes. Ej: Proxmox VE, Xen, KVM, MS Hyper-V, VMware ESXi."
        },
        {
          "id": "fc-2-4",
          "front": "Hipervisor tipo 2 (Hosted)",
          "back": "Corre sobre un sistema operativo estándar (Windows o GNU/Linux) mediante un software dedicado a administrar VMs. Ej: VMware Workstation/Player, Parallels Desktop, UTM, VirtualBox, QEMU."
        },
        {
          "id": "fc-2-5",
          "front": "IVT y AMD-V",
          "back": "Extensiones de los procesadores Intel (Intel Virtualization Technology) y AMD (AMD Virtualization) que permitieron un uso eficiente del procesador y generar entornos emulados."
        },
        {
          "id": "fc-2-6",
          "front": "Mainframe e hipervisores",
          "back": "El concepto de hipervisor viene desde fines de los ‘60 y principios de los ‘70 con el mainframe de IBM. El primer modelo con esa capacidad fue el IBM S/360 Modelo 67."
        },
        {
          "id": "fc-2-7",
          "front": "Escalabilidad en virtualización",
          "back": "Si el hardware físico lo permite, se puede escalar horizontal y verticalmente el hardware de las máquinas virtuales, tanto en capacidad como en cantidad."
        }
      ]
    },
    {
      "id": "3",
      "unit": "1",
      "title": "Shell: introducción a la terminal",
      "criollo": "Acá vas a ver qué es la terminal de texto (la famosa CLI) y por qué en Linux es la posta para administrar el sistema. Después el shell, que es el programa que interpreta lo que escribís, y el repaso de los sabores que hay: sh, Bash, Zsh, Csh y Ksh.",
      "blocks": [
        {
          "type": "h3",
          "text": "Terminal de texto",
          "criollo": "La ventanita negra donde tipeás comandos: control directo y sin vueltas."
        },
        {
          "type": "p",
          "text": "La terminal de texto es una <strong>interfaz de línea de comandos</strong> (<code>CLI</code> - Command Line Interface), donde los usuarios pueden interactuar con el sistema operativo a través de comandos de texto."
        },
        {
          "type": "p",
          "text": "Para la administración de GNU/Linux es una herramienta fundamental, ya que permite un control más directo y preciso del sistema, en comparación con las interfaces gráficas (<code>GUI</code> - Graphic User Interface). Si bien la GUI permite realizar muchas de las tareas que se hacen por la CLI, esta última le da al administrador de sistemas algo más de <strong>flexibilidad y rapidez</strong>."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "CLI = línea de comandos (texto); GUI = interfaz gráfica. La CLI da control más directo y preciso; la GUI, más comodidad visual."
        },
        {
          "type": "h3",
          "text": "Shell",
          "criollo": "El intérprete: traduce lo que escribís y se lo pasa al sistema operativo."
        },
        {
          "type": "p",
          "text": "El <strong>shell</strong> es el programa que interpreta los comandos que el usuario escribe en la terminal. Actúa como <strong>intermediario</strong> entre el usuario y el sistema operativo. Existen varios shell en la actualidad."
        },
        {
          "type": "table",
          "caption": "Shells más conocidos",
          "headers": [
            "Shell",
            "Descripción"
          ],
          "rows": [
            [
              "sh (Bourne Shell)",
              "Fue el primer shell creado para Unix por Stephen Bourne en los años 70."
            ],
            [
              "Bash (Bourne Again Shell)",
              "El más común en los sistemas GNU/Linux; es la evolución de sh y suele venir predeterminado en muchas distribuciones."
            ],
            [
              "Zsh (Z Shell)",
              "Uno de los shells más potentes y flexibles, basado en sh pero con características avanzadas."
            ],
            [
              "Csh (C Shell)",
              "Desarrollado por Bill Joy, está basado en la sintaxis del lenguaje de programación C."
            ],
            [
              "Ksh (Korn Shell)",
              "Evolución de Csh; incluye funciones avanzadas para quienes programan en C y es una combinación de sh y csh."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "criollo",
          "text": "Regla mnemotécnica: en Linux, si no sabés qué shell tenés, casi seguro es Bash. Es el que viene por defecto en la mayoría de las distros."
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-3-1",
            "q": "La CLI (línea de comandos) permite un control más directo y preciso del sistema que la GUI.",
            "a": true,
            "explain": "El apunte destaca que para administrar GNU/Linux la CLI es fundamental porque da control más directo y preciso que las interfaces gráficas."
          },
          {
            "id": "tf-3-2",
            "q": "El shell es el hardware que ejecuta físicamente los comandos.",
            "a": false,
            "explain": "El shell es un programa que interpreta los comandos que el usuario escribe, actuando como intermediario entre el usuario y el sistema operativo."
          },
          {
            "id": "tf-3-3",
            "q": "Bash es la evolución de sh y suele venir predeterminado en muchas distribuciones GNU/Linux.",
            "a": true,
            "explain": "Bash (Bourne Again Shell) es el más común en GNU/Linux, es la evolución de sh y viene por defecto en muchas distros."
          },
          {
            "id": "tf-3-4",
            "q": "La GUI no puede realizar ninguna de las tareas que se hacen por la CLI.",
            "a": false,
            "explain": "El apunte dice que la GUI permite realizar muchas de las tareas que se hacen por la CLI; la diferencia es que la CLI da más flexibilidad y rapidez."
          }
        ],
        "mc": [
          {
            "id": "mc-3-1",
            "q": "¿Qué significa la sigla CLI?",
            "options": [
              "Command Line Interface",
              "Common Linux Interpreter",
              "Central Login Interface",
              "Command Line Installer"
            ],
            "correctIndex": 0,
            "explain": "CLI es Command Line Interface, la interfaz de línea de comandos donde se interactúa con el sistema por texto."
          },
          {
            "id": "mc-3-2",
            "q": "¿Quién creó el primer shell (sh) para Unix en los años 70?",
            "options": [
              "Bill Joy",
              "Linus Torvalds",
              "Stephen Bourne",
              "David Korn"
            ],
            "correctIndex": 2,
            "explain": "El sh (Bourne Shell) fue el primer shell creado para Unix por Stephen Bourne en los años 70."
          },
          {
            "id": "mc-3-3",
            "q": "¿Cuál es el rol del shell?",
            "options": [
              "Interpretar los comandos del usuario, actuando como intermediario con el sistema operativo",
              "Dibujar las ventanas de la interfaz gráfica",
              "Administrar la memoria RAM del equipo",
              "Reemplazar al núcleo del sistema operativo"
            ],
            "correctIndex": 0,
            "explain": "El shell es el programa que interpreta los comandos escritos en la terminal y hace de intermediario entre el usuario y el sistema operativo."
          },
          {
            "id": "mc-3-4",
            "q": "¿Qué shell está basado en la sintaxis del lenguaje de programación C y fue desarrollado por Bill Joy?",
            "options": [
              "Csh (C Shell)",
              "Bash",
              "Zsh",
              "Ksh"
            ],
            "correctIndex": 0,
            "explain": "Csh (C Shell) fue desarrollado por Bill Joy y está basado en la sintaxis del lenguaje de programación C."
          }
        ],
        "ms": [
          {
            "id": "ms-3-1",
            "q": "¿Cuáles de los siguientes son shells mencionados en el apunte?",
            "options": [
              "Bash",
              "Zsh",
              "Ksh",
              "Grub",
              "Systemd"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explain": "El apunte nombra sh, Bash, Zsh, Csh y Ksh como shells. Grub (gestor de arranque) y Systemd (init) no son shells."
          },
          {
            "id": "ms-3-2",
            "q": "¿Qué afirmaciones son correctas según el apunte?",
            "options": [
              "La CLI da más flexibilidad y rapidez al administrador de sistemas",
              "El shell actúa como intermediario entre el usuario y el sistema operativo",
              "Bash es la evolución de sh",
              "La GUI no permite hacer ninguna tarea de la CLI",
              "sh fue el primer shell creado, en los años 70"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "Todas son textuales del apunte salvo la de la GUI: la GUI sí permite realizar muchas de las tareas de la CLI."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-3-1",
          "front": "¿Qué es la CLI?",
          "back": "Command Line Interface: la interfaz de línea de comandos donde el usuario interactúa con el sistema operativo mediante comandos de texto."
        },
        {
          "id": "fc-3-2",
          "front": "CLI vs GUI",
          "back": "La CLI da control más directo, preciso, flexible y rápido. La GUI (interfaz gráfica) permite muchas de las mismas tareas pero con menos flexibilidad."
        },
        {
          "id": "fc-3-3",
          "front": "¿Qué es el shell?",
          "back": "El programa que interpreta los comandos escritos en la terminal y actúa como intermediario entre el usuario y el sistema operativo."
        },
        {
          "id": "fc-3-4",
          "front": "sh (Bourne Shell)",
          "back": "El primer shell creado para Unix, por Stephen Bourne, en los años 70."
        },
        {
          "id": "fc-3-5",
          "front": "Bash",
          "back": "Bourne Again Shell: el más común en GNU/Linux, evolución de sh y predeterminado en muchas distribuciones."
        },
        {
          "id": "fc-3-6",
          "front": "Zsh",
          "back": "Z Shell: uno de los shells más potentes y flexibles, basado en sh pero con características avanzadas."
        },
        {
          "id": "fc-3-7",
          "front": "Csh (C Shell)",
          "back": "Desarrollado por Bill Joy, basado en la sintaxis del lenguaje de programación C."
        },
        {
          "id": "fc-3-8",
          "front": "Ksh (Korn Shell)",
          "back": "Evolución de Csh con funciones avanzadas para programadores en C; combinación de sh y csh."
        }
      ]
    },
    {
      "id": "4",
      "unit": "1",
      "title": "El estándar FHS",
      "criollo": "Acá se explica el FHS, o sea el mapa oficial de cómo se ordenan los directorios en Linux para que todo el mundo se maneje igual. Repasás qué guarda cada carpeta (<code>/</code>, <code>/etc</code>, <code>/home</code>, etc.), cómo se clasifican los directorios y qué tipos de archivos existen, porque en Linux todo es un archivo, hasta el mouse.",
      "blocks": [
        {
          "type": "p",
          "text": "El <strong>FHS (Filesystem Hierarchy Standard)</strong> es un estándar que define la estructura de directorios y el contenido de los sistemas operativos tipo Unix, como Linux. Su propósito es mantener la consistencia en la organización de archivos y directorios, de modo que los desarrolladores de software y los administradores del sistema puedan trabajar de manera uniforme en diferentes sistemas."
        },
        {
          "type": "p",
          "text": "El proyecto FHS comenzó en <strong>1993</strong> con el objetivo de llegar a un acuerdo sobre cómo deberían organizarse los directorios y qué archivos deberían almacenarse y en dónde. Esto buscaba que las distribuciones que fueran saliendo pudieran tener un punto de referencia único."
        },
        {
          "type": "h3",
          "text": "Directorios principales",
          "criollo": "Cada carpeta tiene su laburo asignado; no es que están tiradas al azar."
        },
        {
          "type": "p",
          "text": "Existen diferentes tipos de directorios; algunos incluso pueden estar ocultos, y se los identifica por el punto delante de su nombre (ejemplo: <code>/root/.shh</code>). Otros son totalmente visibles. Los más importantes y sus funciones:"
        },
        {
          "type": "table",
          "caption": "Directorios más importantes según el FHS",
          "headers": [
            "Directorio",
            "Función"
          ],
          "rows": [
            [
              "/",
              "El directorio de mayor importancia, del que dependen jerárquicamente el resto de los directorios. Si se llenara en su totalidad, el sistema podría sufrir interferencias catastróficas en su funcionamiento. De él se desprenden todos los demás."
            ],
            [
              "/boot",
              "Contiene los archivos que corresponden al gestor de arranque. El gestor de arranque es el GRUB, que se instala en los pasos finales del proceso de instalación."
            ],
            [
              "/dev",
              "Archivos de dispositivo. Como todo en Linux es un archivo, cada pieza de hardware está representada como un archivo: discos, particiones, la representación del mouse o el teclado."
            ],
            [
              "/etc",
              "Almacena archivos de configuración del sistema. No se deberían guardar aquí archivos binarios ni datos de usuarios. Para configurar las opciones de un servicio o programa, es donde hay que buscar."
            ],
            [
              "/home",
              "Cada directorio se nombra con el nombre de un usuario creado en el sistema. En PC personales se lo reconoce como \"desktop\" o \"escritorio\". Cada usuario es propietario de todo lo que produzca dentro del suyo. Suele generarse una partición aparte para controlar su crecimiento."
            ],
            [
              "/bin y /sbin",
              "Almacenan archivos ejecutables binarios críticos, necesarios para iniciar el sistema. La diferencia es que /sbin contiene archivos que sólo los administradores pueden utilizar."
            ],
            [
              "/opt",
              "Destinado a que los usuarios instalen software fuera de las distribuciones."
            ],
            [
              "/usr/local",
              "Tiene su propia estructura interna (/bin, /lib, /sbin) para que, al igual que /opt, los usuarios instalen su propio software fuera de la distribución sin sobrescribir ningún archivo importante."
            ],
            [
              "/mnt y /media",
              "Puntos de montaje para USB o directorios por NFS (red). /media se diseñó para discos de uso temporal (cd-rom, pendrives); /mnt para discos de uso más prolongado (discos externos o vistas de red)."
            ],
            [
              "/proc",
              "Guarda información sobre el estado del sistema y de los procesos en ejecución. No contiene archivos reales: se genera dinámicamente en memoria."
            ],
            [
              "/root",
              "Es como el /home de los usuarios, pero como pertenece al superusuario \"root\" está diferenciado en otro lado, directamente del /."
            ],
            [
              "/var",
              "Diseñado para almacenar archivos que puedan variar en su tamaño."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Jerarquías de directorios",
          "criollo": "Según cómo cambian y quién los toca, los directorios se clasifican en cuatro grupos."
        },
        {
          "type": "p",
          "text": "Existen directorios que poseen funciones de almacenamiento diferente, y se clasifican en:"
        },
        {
          "type": "ul",
          "items": [
            "<strong>Directorios estáticos</strong>: contienen archivos que no cambian sin la intervención de root, pero pueden ser leídos por cualquier usuario (<code>/bin</code>, <code>/sbin</code>, <code>/opt</code>, <code>/boot</code>, <code>/usr</code>).",
            "<strong>Directorios dinámicos</strong>: contienen archivos que pueden cambiar, como documentos o configuración. Es recomendable que tengan una partición diferente.",
            "<strong>Directorios compartidos</strong>: podrían estar en un servidor diferente y utilizarse de forma local, como si fueran propios.",
            "<strong>Directorios restringidos</strong>: contienen archivos que no se pueden compartir, sólo modificables por el administrador (<code>/etc</code>, <code>/boot</code>, <code>/run</code>, <code>/lock</code>)."
          ]
        },
        {
          "type": "h3",
          "text": "Tipos de archivos",
          "criollo": "En Linux todo es un archivo, y con ls -l ves de qué tipo es mirando la primera letra de los permisos."
        },
        {
          "type": "p",
          "text": "Como se dijo, en Linux todo es un archivo: no sólo los documentos y programas, sino también los dispositivos de hardware, directorios, enlaces, etc. A partir de este concepto se pueden clasificar e identificar distintos tipos de archivos dentro de la estructura de directorios. En cada caso se los reconoce por el primer carácter de la columna de permisos en la salida de <code>ls -l</code>."
        },
        {
          "type": "table",
          "caption": "Tipos de archivos y su identificador en ls -l",
          "headers": [
            "Tipo",
            "Identificador",
            "Descripción"
          ],
          "rows": [
            [
              "Archivos regulares",
              "-",
              "Los más comunes: documentos, imágenes, programas, scripts. Almacenan información como un texto o instrucciones de un programa."
            ],
            [
              "Directorios",
              "d",
              "Almacenan archivos regulares o no, e incluso otros directorios. Cada entrada se compone del nombre del archivo y un número que identifica la dirección donde está alojado."
            ],
            [
              "Archivos de caracteres",
              "c",
              "Archivo de dispositivo en el que la información se transmite de a un carácter a la vez."
            ],
            [
              "Archivos de bloques",
              "b",
              "Archivo de dispositivo en el que la información se transfiere en bloques grandes de tamaño fijo."
            ],
            [
              "Pipes",
              "p",
              "Vinculan comandos mediante una canalización (tubería) que funciona como archivo temporal, existente sólo mientras se ejecuta el comando."
            ],
            [
              "Links",
              "l",
              "Enlaces simbólicos que hacen referencia a otros archivos del sistema de archivos; pueden ser softlinks o hardlinks."
            ]
          ]
        },
        {
          "type": "p",
          "text": "Los <strong>archivos de dispositivos</strong> representan un dispositivo físico real, como una impresora o una interfaz de red, y generalmente se usan para operaciones de I/O (entrada y salida - Input / Output). De ellos existen, a su vez, dos tipos especiales: los archivos de caracteres y los archivos de bloques."
        },
        {
          "type": "p",
          "text": "En el caso de los <strong>pipes</strong>, la canalización conecta dos comandos: el primero se ejecuta guardando la información en la \"tubería\", y el segundo accede a esa información temporal para su ejecución."
        },
        {
          "type": "code",
          "code": "-rw-r--r-- 1 root root 0 Sep 15 19:02 nota.log          # regular ( - )\ndrwxr-xr-x 12 root root 4096 Sep 15 14:38 var             # directorio ( d )\ncrw-rw-rw- 1 root tty 5, 0 Sep 15 14:59 tty               # caracteres ( c )\nbrw-rw---- 1 root disk 8, 1 Sep 15 14:59 sda1             # bloques ( b )\nprw------- 1 root root 0 Sep 15 14:59 /run/initctl        # pipe ( p )\nlrwxrwxrwx 1 root root 8 Sep 15 19:25 slink_notas -> nota.log   # link ( l )"
        },
        {
          "type": "callout",
          "tone": "criollo",
          "text": "Truco para el parcial: la primera letra del <code>ls -l</code> te canta el tipo de archivo. <code>-</code> regular, <code>d</code> directorio, <code>c</code> caracteres, <code>b</code> bloques, <code>p</code> pipe, <code>l</code> link. Memorizá esas seis y zafás."
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-4-1",
            "q": "El proyecto FHS comenzó en 1993 con el objetivo de acordar cómo organizar los directorios y qué archivos guardar en cada lugar.",
            "a": true,
            "explain": "El apunte indica que el proyecto FHS comenzó en 1993 para llegar a un acuerdo sobre la organización de directorios y dar un punto de referencia único a las distribuciones."
          },
          {
            "id": "tf-4-2",
            "q": "El directorio /proc contiene archivos reales guardados en disco de forma permanente.",
            "a": false,
            "explain": "Falso: /proc no contiene archivos reales, se genera dinámicamente en memoria con información del estado del sistema y de los procesos en ejecución."
          },
          {
            "id": "tf-4-3",
            "q": "La diferencia entre /bin y /sbin es que /sbin contiene archivos que sólo los administradores pueden utilizar.",
            "a": true,
            "explain": "Ambos almacenan ejecutables binarios críticos, pero /sbin contiene archivos de uso exclusivo de los administradores."
          },
          {
            "id": "tf-4-4",
            "q": "En la salida de ls -l, un archivo de tipo directorio se identifica con una \"d\" al inicio de la columna de permisos.",
            "a": true,
            "explain": "Correcto: los directorios se reconocen por la \"d\" inicial (ej: drwxr-xr-x), mientras que los regulares llevan \"-\"."
          },
          {
            "id": "tf-4-5",
            "q": "El directorio /etc está pensado para almacenar archivos binarios y datos de usuarios.",
            "a": false,
            "explain": "Falso: /etc almacena archivos de configuración del sistema; allí no se deberían guardar ni archivos binarios ni datos de usuarios."
          }
        ],
        "mc": [
          {
            "id": "mc-4-1",
            "q": "¿Qué representa el directorio raíz \"/\" dentro de la jerarquía FHS?",
            "options": [
              "Un directorio temporal para montar pendrives",
              "El directorio de mayor importancia, del que dependen jerárquicamente todos los demás",
              "El directorio personal del superusuario root",
              "El directorio de configuración del gestor de arranque"
            ],
            "correctIndex": 1,
            "explain": "/ es el directorio de mayor importancia; de él se desprenden todos los demás y si se llenara podría causar interferencias catastróficas al sistema."
          },
          {
            "id": "mc-4-2",
            "q": "¿En qué directorio se encuentran los archivos del gestor de arranque GRUB?",
            "options": [
              "/dev",
              "/etc",
              "/boot",
              "/var"
            ],
            "correctIndex": 2,
            "explain": "En /boot se encuentran los archivos que corresponden al gestor de arranque, que es el GRUB."
          },
          {
            "id": "mc-4-3",
            "q": "En un archivo de tipo pipe, ¿qué carácter aparece al inicio de la columna de permisos en ls -l?",
            "options": [
              "\"l\"",
              "\"c\"",
              "\"p\"",
              "\"b\""
            ],
            "correctIndex": 2,
            "explain": "Los pipes se identifican con una \"p\" al inicio de la columna de permisos (ej: prw------- ... /run/initctl)."
          },
          {
            "id": "mc-4-4",
            "q": "¿Cuál es la diferencia entre /media y /mnt según el FHS?",
            "options": [
              "/media es para configuración y /mnt para binarios",
              "/media es para discos de uso temporal (cd-rom, pendrives) y /mnt para discos de uso más prolongado",
              "/media es sólo para root y /mnt para cualquier usuario",
              "/media guarda procesos y /mnt guarda dispositivos"
            ],
            "correctIndex": 1,
            "explain": "/media se diseñó para discos de uso temporal como cd-rom o pendrives, mientras que /mnt se usa para discos de uso más prolongado, como discos externos o vistas de red."
          }
        ],
        "ms": [
          {
            "id": "ms-4-1",
            "q": "¿Cuáles de los siguientes se clasifican como directorios estáticos según el apunte?",
            "options": [
              "/bin",
              "/home",
              "/opt",
              "/boot",
              "/var"
            ],
            "correctIndexes": [
              0,
              2,
              3
            ],
            "explain": "Los directorios estáticos citados son /bin, /sbin, /opt, /boot y /usr: no cambian sin intervención de root pero pueden ser leídos por cualquier usuario. /home y /var son dinámicos."
          },
          {
            "id": "ms-4-2",
            "q": "¿Cuáles afirmaciones sobre los tipos de archivos en Linux son correctas?",
            "options": [
              "Un directorio se identifica con \"d\" en ls -l",
              "Los archivos de caracteres transmiten la información de a un carácter a la vez",
              "Los links simbólicos pueden ser softlinks o hardlinks",
              "Los archivos regulares se identifican con \"r\" en ls -l",
              "Los archivos de bloques transfieren la información en bloques grandes de tamaño fijo"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "Todo correcto salvo que los archivos regulares se identifican con \"-\" (guion), no con \"r\". Los enlaces simbólicos sí pueden ser softlinks o hardlinks."
          },
          {
            "id": "ms-4-3",
            "q": "¿Cuáles de estos directorios figuran como directorios restringidos, sólo modificables por el administrador?",
            "options": [
              "/etc",
              "/home",
              "/boot",
              "/run",
              "/opt"
            ],
            "correctIndexes": [
              0,
              2,
              3
            ],
            "explain": "Los directorios restringidos citados son /etc, /boot, /run y /lock. /home y /opt no pertenecen a ese grupo."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-4-1",
          "front": "¿Qué es el FHS?",
          "back": "Filesystem Hierarchy Standard: estándar que define la estructura de directorios y el contenido de sistemas tipo Unix como Linux, para mantener consistencia entre distribuciones. Comenzó en 1993."
        },
        {
          "id": "fc-4-2",
          "front": "Directorio /",
          "back": "El directorio raíz, el de mayor importancia, del que dependen jerárquicamente todos los demás. Si se llenara podría causar interferencias catastróficas."
        },
        {
          "id": "fc-4-3",
          "front": "/etc",
          "back": "Almacena archivos de configuración del sistema. No se guardan allí binarios ni datos de usuarios."
        },
        {
          "id": "fc-4-4",
          "front": "/bin vs /sbin",
          "back": "Ambos guardan ejecutables binarios críticos para iniciar el sistema. /sbin contiene archivos que sólo los administradores pueden usar."
        },
        {
          "id": "fc-4-5",
          "front": "/proc",
          "back": "Guarda información del estado del sistema y de los procesos en ejecución. No contiene archivos reales: se genera dinámicamente en memoria."
        },
        {
          "id": "fc-4-6",
          "front": "Directorios estáticos vs dinámicos",
          "back": "Estáticos: no cambian sin intervención de root, legibles por todos (/bin, /sbin, /opt, /boot, /usr). Dinámicos: sus archivos pueden cambiar (documentos, configuración) y conviene partición aparte."
        },
        {
          "id": "fc-4-7",
          "front": "Identificadores en ls -l",
          "back": "- regular, d directorio, c caracteres, b bloques, p pipe, l link. Es el primer carácter de la columna de permisos."
        },
        {
          "id": "fc-4-8",
          "front": "Pipes",
          "back": "Vinculan comandos mediante una canalización (tubería) que actúa como archivo temporal: el primer comando guarda la info y el segundo la lee. Se identifican con \"p\"."
        },
        {
          "id": "fc-4-9",
          "front": "/media vs /mnt",
          "back": "/media para discos de uso temporal (cd-rom, pendrives); /mnt para discos de uso más prolongado (discos externos, vistas de red)."
        }
      ]
    },
    {
      "id": "5",
      "unit": "1",
      "title": "Comandos",
      "criollo": "Acá arranca lo groso: la terminal. Un comando es una orden que le tirás al sistema, con su estructura de opciones y argumentos. Ojo que Linux es case-sensitive (no es lo mismo ls que LS) y tenés el tab para autocompletar. Después viene el catálogo de comandos básicos para moverte, crear, copiar y borrar cosas.",
      "blocks": [
        {
          "type": "h3",
          "text": "¿Qué es un comando en GNU/Linux?",
          "criollo": "Una instrucción que le da laburo al sistema, desde algo re simple hasta gestionar usuarios y permisos."
        },
        {
          "type": "p",
          "text": "Un <strong>comando</strong> en Linux es una instrucción que le dice al sistema que realice una operación. Los comandos pueden ser tan simples como mostrar el contenido de un archivo, o tan complejos como la gestión de usuarios y/o permisos."
        },
        {
          "type": "p",
          "text": "Si pensamos en la <strong>sintaxis</strong> de un comando, generalmente tiene la siguiente estructura:"
        },
        {
          "type": "code",
          "code": "$ comando [opciones] [argumentos]"
        },
        {
          "type": "p",
          "text": "Tomemos como ejemplo el comando <code>ls</code>, que devuelve, como listado, el contenido de un directorio."
        },
        {
          "type": "ul",
          "items": [
            "Las <strong>[opciones]</strong> son parámetros que modifican el comportamiento del comando. En <code>ls -l</code>, el <code>-l</code> cambia la forma en la que el listado es presentado.",
            "El <strong>[argumento]</strong> es el objeto sobre el que se ejecuta el comando. En <code>ls -l /var</code>, el argumento sería <code>/var</code>."
          ]
        },
        {
          "type": "callout",
          "tone": "warning",
          "text": "Linux es <strong>case-sensitive</strong>: no se usan mayúsculas y minúsculas por igual. Para Linux, <code>ARCHIVO</code>, <code>Archivo</code> y <code>archivo</code> son objetos diferentes. Igual con los comandos: no es lo mismo ejecutar <code>ls</code> que <code>LS</code> (en mayúsculas da error, porque no es un comando reconocido)."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Mientras memorizás los comandos, Linux cuenta con una función de <strong>autocompletado</strong>: escribiendo solo una parte del comando y presionando la tecla <code>tab</code>, te auto rellena el resto."
        },
        {
          "type": "h3",
          "text": "Catálogo de comandos",
          "criollo": "La lista base para arrancar a moverte por el sistema."
        },
        {
          "type": "p",
          "text": "<code>man</code>: muestra el manual del comando. Si no sabés cómo usar un comando, obtenés ayuda con <code>man</code> (por ejemplo <code>man ls</code>). Con las teclas te movés entre sus páginas, y te muestra las opciones que podés utilizar y sus combinaciones si quisieras agregar más de una."
        },
        {
          "type": "ul",
          "items": [
            "<code>pwd</code>: muestra el directorio actual en el que estás trabajando.",
            "<code>whatis</code>: da una breve descripción de un comando (ej: <code>whatis ls</code>).",
            "<code>whereis</code>: muestra la ubicación del binario.",
            "<code>logout</code>: cierra la sesión actual."
          ]
        },
        {
          "type": "h3",
          "text": "ls: listar contenido",
          "criollo": "Lista lo que hay en un directorio, con varias opciones para ordenar y ver detalles."
        },
        {
          "type": "table",
          "caption": "Opciones del comando ls",
          "headers": [
            "Opción",
            "Qué hace"
          ],
          "rows": [
            [
              "-l",
              "muestra detalles, como permisos, propietario y tamaño"
            ],
            [
              "-a",
              "muestra archivos ocultos"
            ],
            [
              "-t",
              "ordena por fecha de modificación"
            ],
            [
              "-r",
              "ordena en orden inverso"
            ],
            [
              "-h",
              "muestra tamaños en formato legible (KB, MB)"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Moverse y crear archivos"
        },
        {
          "type": "ul",
          "items": [
            "<code>cd</code>: cambia de directorio. <code>cd /home</code> entra al directorio <code>/home</code>; <code>cd ..</code> sube de nivel.",
            "<code>touch</code>: crea un archivo vacío. <code>touch lista.txt</code> crea el archivo llamado <code>lista.txt</code> vacío.",
            "<code>mkdir</code>: crea un directorio. <code>mkdir documentos</code> crea el directorio; <code>mkdir -p directorio1/directorio2/directorio3</code> crea 3 directorios, uno dentro de otro.",
            "<code>cat</code>: muestra el contenido de un archivo en la terminal. <code>cat lista.txt</code> muestra el contenido por pantalla."
          ]
        },
        {
          "type": "h3",
          "text": "Copiar, mover y borrar"
        },
        {
          "type": "p",
          "text": "<code>cp</code>: copia archivos o directorios. <code>-r</code> copia directorios de forma recursiva; <code>-v</code> muestra lo que se está copiando."
        },
        {
          "type": "p",
          "text": "<code>mv</code>: mueve o renombra archivos o directorios. <code>mv lista.txt /documentos</code> mueve el archivo al directorio documentos; <code>mv lista.txt nueva_lista.txt</code> renombra <code>lista.txt</code> por <code>nueva_lista.txt</code>."
        },
        {
          "type": "p",
          "text": "<code>rm</code>: elimina archivos. <code>rm lista.txt</code> elimina el archivo; <code>-r</code> elimina directorios de forma recursiva; <code>-f</code> fuerza la eliminación sin preguntar."
        },
        {
          "type": "code",
          "code": "rm -rf /directorio1"
        },
        {
          "type": "callout",
          "tone": "criollo",
          "text": "Ojo con <code>rm -rf</code>, che: borra todo de forma recursiva y sin preguntar nada. Un dedazo ahí y te comés un garrón bárbaro. 💀"
        },
        {
          "type": "p",
          "text": "<code>rmdir</code>: elimina un directorio vacío. <code>rmdir /directorio1</code> borra el directorio1, <strong>solo si está vacío</strong>."
        },
        {
          "type": "h3",
          "text": "Apagar y reiniciar"
        },
        {
          "type": "p",
          "text": "<code>shutdown</code>: apaga o reinicia el sistema. <code>shutdown -r now</code> reinicia; <code>shutdown -h now</code> apaga."
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-5-1",
            "q": "En Linux, ejecutar \"ls\" y \"LS\" es exactamente lo mismo.",
            "a": false,
            "explain": "Linux es case-sensitive: \"LS\" en mayúsculas da error porque no es un comando reconocido."
          },
          {
            "id": "tf-5-2",
            "q": "El comando rmdir borra un directorio solo si está vacío.",
            "a": true,
            "explain": "rmdir elimina un directorio únicamente si está vacío; para borrar directorios con contenido se usa rm -r."
          },
          {
            "id": "tf-5-3",
            "q": "La tecla tab sirve para autocompletar comandos escribiendo solo una parte.",
            "a": true,
            "explain": "Linux cuenta con una función de autocompletado que auto rellena el comando al presionar tab."
          },
          {
            "id": "tf-5-4",
            "q": "En el comando \"ls -l /var\", el argumento es \"-l\".",
            "a": false,
            "explain": "\"-l\" es una opción que modifica el comportamiento; el argumento es \"/var\", el objeto sobre el que se ejecuta el comando."
          },
          {
            "id": "tf-5-5",
            "q": "El comando pwd muestra el directorio actual en el que estás trabajando.",
            "a": true,
            "explain": "pwd (print working directory) muestra el directorio actual de trabajo."
          }
        ],
        "mc": [
          {
            "id": "mc-5-1",
            "q": "¿Cuál es la estructura general de la sintaxis de un comando en Linux?",
            "options": [
              "$ comando [opciones] [argumentos]",
              "$ [argumentos] comando [opciones]",
              "$ [opciones] [argumentos] comando",
              "$ argumentos comando"
            ],
            "correctIndex": 0,
            "explain": "La estructura es: comando, luego opciones, luego argumentos."
          },
          {
            "id": "mc-5-2",
            "q": "¿Qué comando muestra el manual de otro comando?",
            "options": [
              "whatis",
              "man",
              "whereis",
              "pwd"
            ],
            "correctIndex": 1,
            "explain": "man muestra el manual completo del comando; con las teclas te movés entre sus páginas."
          },
          {
            "id": "mc-5-3",
            "q": "¿Qué hace la opción \"-a\" del comando ls?",
            "options": [
              "Ordena por fecha de modificación",
              "Muestra tamaños en formato legible",
              "Muestra archivos ocultos",
              "Muestra permisos y propietario"
            ],
            "correctIndex": 2,
            "explain": "ls -a muestra los archivos ocultos."
          },
          {
            "id": "mc-5-4",
            "q": "¿Qué comando crea tres directorios anidados, uno dentro de otro, en una sola línea?",
            "options": [
              "mkdir directorio1 directorio2 directorio3",
              "mkdir -p directorio1/directorio2/directorio3",
              "touch directorio1/directorio2/directorio3",
              "cd -p directorio1/directorio2/directorio3"
            ],
            "correctIndex": 1,
            "explain": "mkdir -p directorio1/directorio2/directorio3 crea los 3 directorios, uno dentro de otro."
          }
        ],
        "ms": [
          {
            "id": "ms-5-1",
            "q": "¿Cuáles de las siguientes son opciones válidas del comando ls según el apunte?",
            "options": [
              "-l (detalles)",
              "-a (archivos ocultos)",
              "-t (ordena por fecha)",
              "-p (crea padres)",
              "-h (tamaños legibles)"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "ls tiene -l, -a, -t, -r y -h. La opción -p (crear directorios padres) pertenece a mkdir, no a ls."
          },
          {
            "id": "ms-5-2",
            "q": "¿Qué afirmaciones sobre rm son correctas?",
            "options": [
              "rm elimina archivos",
              "-r elimina directorios de forma recursiva",
              "-f fuerza la eliminación sin preguntar",
              "rm solo borra directorios vacíos",
              "rm -rf borra de forma recursiva y sin preguntar"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "rm elimina archivos; -r es recursivo y -f fuerza sin preguntar; rm -rf combina ambos. El que borra solo directorios vacíos es rmdir, no rm."
          },
          {
            "id": "ms-5-3",
            "q": "¿Cuáles de estas afirmaciones sobre los comandos son verdaderas según el apunte?",
            "options": [
              "shutdown -r now reinicia el sistema",
              "cd .. sube de nivel",
              "touch crea un archivo vacío",
              "cat crea un directorio",
              "whatis da una breve descripción de un comando"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "shutdown -r now reinicia, cd .. sube de nivel, touch crea archivos vacíos y whatis da una descripción breve. cat NO crea directorios: muestra el contenido de un archivo."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-5-1",
          "front": "Sintaxis de un comando",
          "back": "La estructura general es: $ comando [opciones] [argumentos]. Las opciones modifican el comportamiento y el argumento es el objeto sobre el que se ejecuta."
        },
        {
          "id": "fc-5-2",
          "front": "Case-sensitive",
          "back": "Linux distingue mayúsculas de minúsculas. ARCHIVO, Archivo y archivo son objetos diferentes, y \"LS\" en mayúsculas da error."
        },
        {
          "id": "fc-5-3",
          "front": "man",
          "back": "Muestra el manual de un comando (ej: man ls). Con las teclas te movés entre sus páginas y ves las opciones disponibles."
        },
        {
          "id": "fc-5-4",
          "front": "pwd",
          "back": "Muestra el directorio actual en el que estás trabajando."
        },
        {
          "id": "fc-5-5",
          "front": "Opciones de ls",
          "back": "-l muestra detalles (permisos, propietario, tamaño), -a los ocultos, -t ordena por fecha, -r invierte el orden y -h muestra tamaños legibles."
        },
        {
          "id": "fc-5-6",
          "front": "rm vs rmdir",
          "back": "rm elimina archivos (con -r recursivo y -f forzado); rmdir borra un directorio solo si está vacío."
        },
        {
          "id": "fc-5-7",
          "front": "mkdir -p",
          "back": "Crea directorios anidados uno dentro de otro en una sola línea, ej: mkdir -p directorio1/directorio2/directorio3."
        },
        {
          "id": "fc-5-8",
          "front": "cp y mv",
          "back": "cp copia archivos o directorios (-r recursivo, -v verboso); mv mueve o renombra archivos y directorios."
        },
        {
          "id": "fc-5-9",
          "front": "shutdown",
          "back": "Apaga o reinicia el sistema: shutdown -r now reinicia y shutdown -h now apaga."
        }
      ]
    },
    {
      "id": "6",
      "unit": "1",
      "title": "Editores de texto",
      "criollo": "Un editor de texto es la herramienta que usás en la terminal para crear, ver y modificar archivos de texto plano, que son los que manejan la configuración del sistema y los scripts. Acá repasamos los editores más comunes de Linux (Pico, Nano, Emacs, VI, VIM) y, sobre todo, cómo se maneja VIM con sus tres modos y su guía básica de comandos.",
      "blocks": [
        {
          "type": "p",
          "text": "Un <strong>editor de texto</strong> es una herramienta que corre en la terminal y permite a los usuarios crear, ver y modificar archivos. Este tipo de archivos carecen de formato especial: no cuentan con personalización de estilos ni jerarquías en el texto. Son una herramienta esencial para interactuar con el sistema operativo, ya que muchos archivos de configuración y scripts se manejan en <strong>texto plano</strong>."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "A diferencia de un procesador de texto (por ejemplo, Microsoft Word), los editores de texto <strong>no añaden metadatos</strong> en los archivos de texto."
        },
        {
          "type": "h3",
          "text": "Editores populares",
          "criollo": "Los clásicos que te vas a cruzar sí o sí en Linux."
        },
        {
          "type": "p",
          "text": "Entre los editores más populares que podemos encontrar en Linux tenemos: Pico, Nano, Emacs, VI y VIM."
        },
        {
          "type": "ul",
          "items": [
            "<strong>Pico</strong>: originalmente fue parte del cliente de correo electrónico Pine. Es conocido por ser sencillo y minimalista. Su control es completamente mediante el teclado, y tiene una barra inferior con los comandos claves.",
            "<strong>Nano</strong>: es un clon de Pico, pero con características adicionales. Viene preinstalado en muchas distribuciones, lo que lo vuelve una opción común para editar archivos. Su interfaz es sencilla y también cuenta con una barra de comandos en la parte inferior.",
            "<strong>Emacs</strong>: es uno de los editores de texto más poderosos y extensibles. Fue creado por Richard Stallman durante el desarrollo del proyecto GNU. Si bien su aprendizaje no es tan sencillo, su flexibilidad es incomparable.",
            "<strong>VI</strong>: es el editor de texto estándar presente en casi todas las distribuciones de Linux y también de Unix. Su creador fue Bill Joy, uno de los cofundadores de Sun Microsystems, quien lo desarrolló en 1976 como parte original de Unix. Es ligero y eficiente, ya que no consume grandes recursos del sistema.",
            "<strong>VIM</strong>: es una versión mejorada de VI, creada en 1991 por Bram Moolenaar, que buscaba agregar nuevas funcionalidades para hacerlo versátil y flexible sin perder la eficiencia de VI. Su concepción venía con el lema \"editor para programadores\"."
          ]
        },
        {
          "type": "h3",
          "text": "Los tres modos de VIM",
          "criollo": "Entender los modos es la clave para no volverte loco con VIM."
        },
        {
          "type": "p",
          "text": "VIM tiene 3 modos de uso: modo comando, modo texto (inserción) y modo EX o última línea."
        },
        {
          "type": "ul",
          "items": [
            "<strong>Modo comando</strong>: las teclas ejecutan acciones, permitiendo desplazar el cursor dentro del texto y ejecutar comandos de acción sobre el texto. Cuando abrimos un archivo con VIM, el programa se inicia en este modo.",
            "<strong>Modo texto o modo escritura (inserción)</strong>: presionando la letra <code>i</code> pasamos al modo de inserción de texto, donde se puede escribir y agregar caracteres.",
            "<strong>Modo EX o última línea</strong>: estando en modo comando y presionando los dos puntos <code>:</code>, el cursor se va al final de la pantalla, permitiendo agregar comandos de acción o de búsqueda."
          ]
        },
        {
          "type": "h3",
          "text": "Abrir VI o VIM"
        },
        {
          "type": "p",
          "text": "Para ejecutar VI o VIM y crear un archivo nuevo o modificar uno existente, lo hacemos de la siguiente forma. Luego de que se abra el editor podemos empezar a modificar o escribir en él."
        },
        {
          "type": "code",
          "code": "$ vi archivo_nuevo"
        },
        {
          "type": "h3",
          "text": "Guía básica de comandos",
          "criollo": "La chuleta mínima para sobrevivir a VI/VIM."
        },
        {
          "type": "table",
          "caption": "Comandos básicos de VI / VIM",
          "headers": [
            "Comando",
            "Acción"
          ],
          "rows": [
            [
              "i",
              "Inserta texto a la izquierda del cursor"
            ],
            [
              "Esc",
              "Vuelve al modo comando"
            ],
            [
              "x",
              "Borra el carácter bajo el cursor"
            ],
            [
              "dd",
              "Borra la línea / corta la línea"
            ],
            [
              ": + w",
              "Salva el archivo"
            ],
            [
              ": + q",
              "Sale del editor sin guardar"
            ],
            [
              ": + set nu",
              "Numera las líneas"
            ],
            [
              "yy",
              "Copia la línea"
            ],
            [
              "5 + yy",
              "Copia las siguientes 5 líneas"
            ],
            [
              "5 + dd",
              "Corta las siguientes 5 líneas"
            ],
            [
              "p",
              "Pega la/s línea/s copiada/s o cortada/s debajo del cursor"
            ],
            [
              "P",
              "Pega la/s línea/s copiada/s o cortada/s sobre el cursor"
            ],
            [
              "u",
              "Deshace el último cambio"
            ],
            [
              "/",
              "Abre un campo al final del editor para buscar palabras"
            ]
          ]
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-6-1",
            "q": "A diferencia de un procesador de texto como Microsoft Word, los editores de texto no añaden metadatos a los archivos.",
            "a": true,
            "explain": "El apunte remarca justamente esa diferencia: los editores de texto no añaden metadatos ni formato especial al archivo."
          },
          {
            "id": "tf-6-2",
            "q": "VIM se inicia por defecto en modo inserción cuando abrimos un archivo.",
            "a": false,
            "explain": "Cuando abrimos un archivo con VIM, el programa se inicia en modo comando, no en modo inserción."
          },
          {
            "id": "tf-6-3",
            "q": "VI fue desarrollado por Bill Joy en 1976 como parte original de Unix.",
            "a": true,
            "explain": "El apunte indica que su creador fue Bill Joy, cofundador de Sun Microsystems, y que lo desarrolló en 1976 como parte original de Unix."
          },
          {
            "id": "tf-6-4",
            "q": "Nano es un clon de Pico con características adicionales y viene preinstalado en muchas distribuciones.",
            "a": true,
            "explain": "Así lo describe el apunte: Nano es un clon de Pico con funciones extra y preinstalado en muchas distribuciones."
          },
          {
            "id": "tf-6-5",
            "q": "Para pasar al modo EX o última línea en VIM se presiona la letra \"i\".",
            "a": false,
            "explain": "La letra \"i\" pasa al modo inserción. Al modo EX o última línea se llega, desde modo comando, presionando los dos puntos \":\"."
          }
        ],
        "mc": [
          {
            "id": "mc-6-1",
            "q": "¿Quién creó VIM y en qué año?",
            "options": [
              "Bill Joy, en 1976",
              "Bram Moolenaar, en 1991",
              "Richard Stallman, durante el proyecto GNU",
              "Bram Moolenaar, en 1976"
            ],
            "correctIndex": 1,
            "explain": "VIM fue creado en 1991 por Bram Moolenaar como una versión mejorada de VI."
          },
          {
            "id": "mc-6-2",
            "q": "En VIM, ¿qué comando numera las líneas?",
            "options": [
              ": + w",
              ": + q",
              ": + set nu",
              "yy"
            ],
            "correctIndex": 2,
            "explain": "Según la guía básica, \": + set nu\" numera las líneas."
          },
          {
            "id": "mc-6-3",
            "q": "¿Qué editor fue creado por Richard Stallman durante el desarrollo del proyecto GNU?",
            "options": [
              "Pico",
              "Emacs",
              "VI",
              "Nano"
            ],
            "correctIndex": 1,
            "explain": "Emacs fue creado por Richard Stallman durante el desarrollo del proyecto GNU; es de los más poderosos y extensibles."
          },
          {
            "id": "mc-6-4",
            "q": "¿Qué comando de VI/VIM borra el carácter que está bajo el cursor?",
            "options": [
              "dd",
              "x",
              "u",
              "p"
            ],
            "correctIndex": 1,
            "explain": "El comando \"x\" borra el carácter bajo el cursor. \"dd\" borra la línea entera."
          }
        ],
        "ms": [
          {
            "id": "ms-6-1",
            "q": "¿Cuáles de los siguientes son editores de texto populares mencionados en el apunte?",
            "options": [
              "Pico",
              "Nano",
              "Microsoft Word",
              "Emacs",
              "VIM"
            ],
            "correctIndexes": [
              0,
              1,
              3,
              4
            ],
            "explain": "Pico, Nano, Emacs, VI y VIM son los editores populares del apunte. Microsoft Word es un procesador de texto, usado como contraejemplo."
          },
          {
            "id": "ms-6-2",
            "q": "¿Cuáles son los tres modos de uso de VIM?",
            "options": [
              "Modo comando",
              "Modo texto o inserción",
              "Modo gráfico",
              "Modo EX o última línea",
              "Modo administrador"
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explain": "VIM tiene 3 modos: modo comando, modo texto (inserción) y modo EX o última línea. \"Modo gráfico\" y \"modo administrador\" no existen en el apunte."
          },
          {
            "id": "ms-6-3",
            "q": "¿Cuáles de estas afirmaciones sobre los comandos de VI/VIM son correctas?",
            "options": [
              "\"yy\" copia la línea",
              "\"u\" deshace el último cambio",
              "\"p\" sale del editor sin guardar",
              "\"5 + dd\" corta las siguientes 5 líneas",
              "\"Esc\" vuelve al modo comando"
            ],
            "correctIndexes": [
              0,
              1,
              3,
              4
            ],
            "explain": "yy copia la línea, u deshace el último cambio, 5 + dd corta 5 líneas y Esc vuelve al modo comando. \"p\" pega líneas, no sale del editor (para salir sin guardar es \": + q\")."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-6-1",
          "front": "¿Qué es un editor de texto?",
          "back": "Una herramienta que corre en la terminal y permite crear, ver y modificar archivos de texto plano, sin formato ni metadatos. Es esencial para editar configuración y scripts del sistema."
        },
        {
          "id": "fc-6-2",
          "front": "Editor vs procesador de texto",
          "back": "A diferencia de un procesador como Microsoft Word, los editores de texto no añaden metadatos ni estilos a los archivos."
        },
        {
          "id": "fc-6-3",
          "front": "Nano",
          "back": "Clon de Pico con características adicionales. Viene preinstalado en muchas distribuciones y tiene una barra de comandos en la parte inferior."
        },
        {
          "id": "fc-6-4",
          "front": "VI: creador y año",
          "back": "Editor estándar de Linux y Unix, creado por Bill Joy en 1976 como parte original de Unix. Es ligero y eficiente."
        },
        {
          "id": "fc-6-5",
          "front": "VIM: origen",
          "back": "Versión mejorada de VI, creada en 1991 por Bram Moolenaar bajo el lema \"editor para programadores\". Suma funcionalidades sin perder la eficiencia de VI."
        },
        {
          "id": "fc-6-6",
          "front": "Los 3 modos de VIM",
          "back": "Modo comando (las teclas ejecutan acciones, es el modo inicial), modo texto o inserción (con \"i\", para escribir) y modo EX o última línea (con \":\", para comandos y búsqueda)."
        },
        {
          "id": "fc-6-7",
          "front": "Comandos yy y dd",
          "back": "En VI/VIM, \"yy\" copia la línea y \"dd\" borra o corta la línea. Con un número delante (5 + yy, 5 + dd) actúan sobre esa cantidad de líneas."
        },
        {
          "id": "fc-6-8",
          "front": "Guardar y salir en VIM",
          "back": "\": + w\" salva el archivo y \": + q\" sale del editor sin guardar. \"u\" deshace el último cambio."
        }
      ]
    },
    {
      "id": "7",
      "unit": "1",
      "title": "Gestor de software",
      "criollo": "Acá va toda la posta de cómo Linux maneja el software: los gestores de paquetes (APT, YUM, PACMAN), el sources.list de Debian, la diferencia entre APT y dpkg, y cómo instalar, buscar y hasta hacer un upgrade completo de distro sin reinstalar nada. Si laburás con Debian, esto es pan de todos los días.",
      "blocks": [
        {
          "type": "h3",
          "text": "¿Qué es un gestor de paquetes?",
          "criollo": "Es el que te instala, actualiza y borra programas sin que tengas que andar a mano."
        },
        {
          "type": "p",
          "text": "Un <strong>gestor de paquetes</strong> es una herramienta que permite a usuarios y administradores gestionar el software de manera eficiente. Automatiza el proceso de instalación, actualización, configuración y eliminación de programas."
        },
        {
          "type": "p",
          "text": "Cada distribución de Linux usa su propio gestor de paquetes, y cada uno tiene su archivo de configuración asociado que apunta a repositorios propios."
        },
        {
          "type": "table",
          "caption": "Gestores de paquetes por distribución",
          "headers": [
            "Distribución",
            "Gestor",
            "Archivo de configuración"
          ],
          "rows": [
            [
              "RedHat",
              "YUM",
              "/etc/yum.conf"
            ],
            [
              "ArchLinux",
              "PACMAN",
              "/etc/pacman.conf"
            ],
            [
              "Debian",
              "APT",
              "/etc/apt/sources.list"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Distribución de Linux"
        },
        {
          "type": "p",
          "text": "Una <strong>distribución de Linux</strong>, comúnmente llamada “distro”, es un sistema operativo basado en el Kernel de Linux, pero con herramientas y configuraciones específicas para diferentes usuarios según sus necesidades. En su gran mayoría pueden variar su interfaz, el modo en que manejan sus actualizaciones e incluso sus archivos de configuración."
        },
        {
          "type": "h3",
          "text": "Rolling Release vs Standard Release"
        },
        {
          "type": "p",
          "text": "En <strong>Rolling Release</strong> el sistema se actualiza de forma continua. No hay versiones fijas: los paquetes se renuevan constantemente, permitiendo tener siempre el software más reciente, pero esto aumenta el riesgo de inestabilidad. Ejemplos: Arch Linux, OpenSUSE."
        },
        {
          "type": "p",
          "text": "En <strong>Standard Release</strong> (o Point Release) las actualizaciones se agrupan en versiones estables que se publican periódicamente. Este modelo prioriza la estabilidad y es común en entornos de producción. Ejemplos: Debian, Ubuntu LTS, Fedora."
        },
        {
          "type": "h3",
          "text": "El archivo sources.list"
        },
        {
          "type": "p",
          "text": "Durante la instalación del sistema operativo se crea el archivo <code>sources.list</code>, donde se almacenan los repositorios que contienen la lista de paquetes que Debian tiene a disposición del usuario. Un usuario con permisos puede editarlo para agregar o remover repositorios si es necesario. Cada distribución cuenta con repositorios oficiales mientras la versión siga soportada en términos de mantenimiento y parches de seguridad."
        },
        {
          "type": "code",
          "code": "deb http://deb.debian.org/debian bullseye main\ndeb http://security.debian.org/debian-security bullseye-security main\ndeb http://deb.debian.org/debian bullseye-updates main"
        },
        {
          "type": "p",
          "text": "Cada línea del repositorio debe seguir el formato: <code>deb [ opcion1=valor1 opcion2=valor2 ] uri distro [componente1] [componente2] [...]</code>"
        },
        {
          "type": "ul",
          "items": [
            "<strong>deb o deb-src</strong>: la primera palabra debe ser una de las dos. <code>deb</code> indica que el repositorio contiene paquetes binarios precompilados <code>.deb</code>; <code>deb-src</code> se refiere a paquetes fuente, que son los originales del programa más archivos de control y diferenciales necesarios para empaquetar el programa.",
            "<strong>uri</strong>: la URL del repositorio desde donde se van a descargar los paquetes.",
            "<strong>distro</strong>: el nombre de la distribución a la que pertenece el repositorio (jessie, stretch, buster, bullseye, bookworm).",
            "<strong>componente</strong>: de forma excluyente puede haber 3 opciones (main, contrib, non-free)."
          ]
        },
        {
          "type": "table",
          "caption": "Componentes de un repositorio Debian",
          "headers": [
            "Componente",
            "Qué contiene"
          ],
          "rows": [
            [
              "main",
              "Paquetes libres que cumplen con las DFSG (directrices de software libre)."
            ],
            [
              "contrib",
              "Paquetes libres compatibles con la DFSG, pero con dependencias que podrían no ser gratuitas."
            ],
            [
              "non-free",
              "Paquetes que tienen un costo (por ejemplo drivers, codecs) y que no cumplen con la DFSG."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "APT y dpkg",
          "criollo": "APT es el que resuelve el quilombo de dependencias; dpkg maneja los .deb crudos y no te resuelve nada."
        },
        {
          "type": "p",
          "text": "Cuando un usuario solicita un paquete usando el gestor de paquetes, lo que utiliza principalmente es el sistema <strong>APT (Advanced Package Tool)</strong>. APT facilita la interacción: obtiene todos los archivos y dependencias necesarias desde los repositorios de software para cumplir con el requerimiento del usuario."
        },
        {
          "type": "p",
          "text": "APT es una capa superior a <code>dpkg</code>, que funciona como capa inferior. A diferencia de APT, <code>dpkg</code> no se encarga de resolver dependencias: si intentás instalar un paquete con <code>dpkg</code> que requiera paquetes adicionales, no los descargará automáticamente."
        },
        {
          "type": "table",
          "caption": "APT vs dpkg (cuadro de elaboración propia)",
          "headers": [
            "Característica",
            "APT",
            "dpkg"
          ],
          "rows": [
            [
              "Nivel",
              "Alto nivel",
              "Bajo nivel"
            ],
            [
              "Manejo de dependencias",
              "Resuelve y descarga dependencias automáticamente",
              "No resuelve dependencias automáticamente"
            ],
            [
              "Uso típico",
              "Instalar, actualizar y eliminar paquetes desde repositorios",
              "Instalar y eliminar paquetes locales .deb"
            ],
            [
              "Función principal",
              "Interactúa con repositorios, maneja dependencias",
              "Gestiona directamente archivos .deb"
            ],
            [
              "Facilidad de uso",
              "Más amigable y automatizado",
              "Requiere más intervención manual"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Diferencia entre apt y apt-get"
        },
        {
          "type": "p",
          "text": "<code>apt</code> y <code>apt-get</code> son herramientas relacionadas, pero con algunas diferencias. <code>apt</code> fue introducido en versiones más recientes de Debian (a partir de Debian 8 “Jessie”) como una interfaz más fácil de usar que combina varias funciones de <code>apt-get</code> y de otras herramientas como <code>apt-cache</code>. Ambos comandos siguen existiendo y funcionan bien, por lo que al momento no existe una diferencia que justifique el uso de uno u otro."
        },
        {
          "type": "h3",
          "text": "Instalación de paquetes"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "La administración de paquetes dentro del sistema operativo requiere permisos de administrador, o bien tener <code>sudo</code> instalado y pertenecer al sudoers."
        },
        {
          "type": "ol",
          "items": [
            "El usuario busca instalar una aplicación: <code>sudo apt-get install [nombre de aplicación]</code>.",
            "El gestor de paquetes consulta localmente la disponibilidad de la aplicación buscada.",
            "El resultado de la búsqueda devuelve los paquetes que serán descargados.",
            "Con la información de qué descargar, el gestor de paquetes va a los repositorios listados en el <code>sources.list</code> a buscar lo necesario.",
            "El repositorio se encarga de gestionar los paquetes almacenados.",
            "Luego son entregados al gestor de paquetes que los solicitó.",
            "Se instalan de forma local."
          ]
        },
        {
          "type": "h3",
          "text": "Búsqueda y actualización de índice"
        },
        {
          "type": "p",
          "text": "Con el comando <code>apt-cache search [nombre de la aplicación]</code> se realiza una búsqueda en el índice local."
        },
        {
          "type": "p",
          "text": "Cuando ejecutamos <code>apt-get update</code>, el gestor de paquetes actualiza los índices locales comparándolos con lo que encuentra en los repositorios indicados en el <code>sources.list</code>. Esta acción debe repetirse cada cierto tiempo para mantener el índice actualizado, y también cuando el <code>sources.list</code> fue modificado, así garantizamos que el gestor lea la nueva configuración."
        },
        {
          "type": "h3",
          "text": "Upgrade de sistema operativo",
          "criollo": "Podés saltar de una versión mayor a otra sin reinstalar de cero: cambiás repos y actualizás."
        },
        {
          "type": "p",
          "text": "Debian permite actualizar a versiones mayores del sistema de forma directa, sin necesidad de reinstalar todo. Este procedimiento se conoce como <strong>upgrade de distribución</strong> y consiste en reemplazar los paquetes de la versión actual por los de la nueva versión estable. El ejemplo del apunte va desde Debian 11 – Bullseye hacia Debian 12 – Bookworm."
        },
        {
          "type": "p",
          "text": "Para ver la versión actual podemos usar alguno de estos dos comandos:"
        },
        {
          "type": "code",
          "code": "lsb_release -a\ncat /etc/debian_version"
        },
        {
          "type": "p",
          "text": "Los primeros pasos de la actualización son:"
        },
        {
          "type": "code",
          "code": "# 1. Actualizar lista de repositorios\napt update\n\n# 2. Actualizar paquetes instalados\napt upgrade\n\n# 3. Limpiar paquetes residuales\napt autoremove"
        },
        {
          "type": "p",
          "text": "Como los repositorios para descargar los nuevos paquetes también deben actualizarse: actualmente todo apunta a repositorios identificados como Bullseye, pero si queremos ir a Bookworm debemos modificarlos con los repositorios correspondientes."
        },
        {
          "type": "code",
          "code": "deb http://deb.debian.org/debian bookworm main contrib non-free-firmware\ndeb http://security.debian.org/ bookworm-security main contrib non-free-firmware\ndeb http://deb.debian.org/debian bookworm-updates main contrib non-free-firmware"
        },
        {
          "type": "p",
          "text": "Una vez actualizados los repositorios, actualizamos nuevamente la lista con <code>apt update</code> y, finalmente, para actualizar el sistema operativo completo ejecutamos <code>apt full-upgrade</code>."
        },
        {
          "type": "p",
          "text": "Durante el <code>full-upgrade</code>, el sistema:"
        },
        {
          "type": "ul",
          "items": [
            "Actualiza componentes del sistema operativo.",
            "Reemplaza bibliotecas.",
            "Actualiza servicios instalados.",
            "Puede modificar configuraciones, previo aviso."
          ]
        },
        {
          "type": "callout",
          "tone": "warning",
          "text": "Durante el proceso pueden aparecer mensajes con avisos: es necesario revisarlos, recorrerlos y seguir las indicaciones correspondientes (por ejemplo, presionar “Yes” o “Enter”)."
        },
        {
          "type": "p",
          "text": "Por último reiniciamos el sistema con <code>reboot</code> y comprobamos la versión nuevamente con <code>lsb_release -a</code> o <code>cat /etc/debian_version</code>. En este punto deberíamos ver la versión ya actualizada:"
        },
        {
          "type": "code",
          "code": "lsb_release -a\nNo LSB modules are available.\nDistributor ID: Debian\nDescription:    Debian GNU/Linux 12 (bookworm)\nRelease:        12\nCodename:       bookworm"
        },
        {
          "type": "h3",
          "text": "Comandos principales"
        },
        {
          "type": "table",
          "caption": "Comandos de gestión de paquetes",
          "headers": [
            "Comando",
            "Qué hace"
          ],
          "rows": [
            [
              "apt-get update",
              "Descarga la información más reciente y actualiza el índice local de paquetes."
            ],
            [
              "apt-get install [aplicación]",
              "Instala la aplicación especificada."
            ],
            [
              "apt-get upgrade",
              "Actualiza los paquetes instalados a sus versiones más recientes."
            ],
            [
              "apt-get remove [aplicación]",
              "Elimina la aplicación, pero conserva los archivos de configuración."
            ],
            [
              "apt-get purge [aplicación]",
              "Elimina la aplicación y todos sus archivos de configuración."
            ],
            [
              "apt-cache search [aplicación]",
              "Busca la aplicación especificada en el índice local."
            ],
            [
              "apt show [aplicación]",
              "Muestra versión, dependencias, tamaño y descripción de la aplicación."
            ]
          ]
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-7-1",
            "q": "dpkg resuelve y descarga automáticamente las dependencias de un paquete.",
            "a": false,
            "explain": "dpkg no resuelve dependencias automáticamente. Si el paquete requiere otros, dpkg no los descarga; para eso está APT, que es la capa superior."
          },
          {
            "id": "tf-7-2",
            "q": "En un esquema Rolling Release el sistema se actualiza de forma continua, sin versiones fijas.",
            "a": true,
            "explain": "Correcto. Rolling Release renueva los paquetes constantemente (siempre el software más reciente), a costa de un mayor riesgo de inestabilidad. Arch Linux y OpenSUSE lo usan."
          },
          {
            "id": "tf-7-3",
            "q": "El componente non-free contiene solamente paquetes libres que cumplen con las DFSG.",
            "a": false,
            "explain": "Al revés: non-free son paquetes con costo (drivers, codecs) que NO cumplen con la DFSG. Los que cumplen son los de main."
          },
          {
            "id": "tf-7-4",
            "q": "El comando apt full-upgrade es el que actualiza el sistema operativo completo hacia la nueva versión estable.",
            "a": true,
            "explain": "Correcto. Tras actualizar los repositorios y correr apt update, apt full-upgrade actualiza componentes del SO, reemplaza bibliotecas y actualiza servicios instalados."
          },
          {
            "id": "tf-7-5",
            "q": "apt-get remove elimina la aplicación junto con todos sus archivos de configuración.",
            "a": false,
            "explain": "apt-get remove conserva los archivos de configuración. El que borra la aplicación y todos sus archivos de configuración es apt-get purge."
          }
        ],
        "mc": [
          {
            "id": "mc-7-1",
            "q": "¿Cuál es el archivo de configuración del gestor de paquetes en Debian?",
            "options": [
              "/etc/yum.conf",
              "/etc/pacman.conf",
              "/etc/apt/sources.list",
              "/etc/debian_version"
            ],
            "correctIndex": 2,
            "explain": "Debian usa APT y su archivo de configuración de repositorios es /etc/apt/sources.list. /etc/yum.conf es de RedHat y /etc/pacman.conf de ArchLinux."
          },
          {
            "id": "mc-7-2",
            "q": "En una línea del sources.list, ¿qué indica la palabra deb-src?",
            "options": [
              "Que el repositorio contiene paquetes binarios precompilados .deb",
              "Que se refiere a paquetes fuente, con archivos de control y diferenciales para empaquetar el programa",
              "Que el repositorio es de seguridad",
              "Que los paquetes tienen un costo"
            ],
            "correctIndex": 1,
            "explain": "deb-src apunta a paquetes fuente (los originales del programa más archivos de control y diferenciales necesarios para empaquetarlo). deb es el que indica binarios precompilados .deb."
          },
          {
            "id": "mc-7-3",
            "q": "¿Qué hace el comando apt-get update?",
            "options": [
              "Instala la aplicación especificada",
              "Actualiza los paquetes instalados a sus versiones más recientes",
              "Actualiza el índice local comparándolo con los repositorios del sources.list",
              "Elimina la aplicación y sus archivos de configuración"
            ],
            "correctIndex": 2,
            "explain": "apt-get update actualiza los índices locales comparándolos con lo que encuentra en los repositorios del sources.list. No instala ni actualiza paquetes en sí (eso es upgrade)."
          },
          {
            "id": "mc-7-4",
            "q": "¿A partir de qué versión de Debian se introdujo apt como interfaz más fácil de usar?",
            "options": [
              "Debian 8 “Jessie”",
              "Debian 11 “Bullseye”",
              "Debian 12 “Bookworm”",
              "Debian 6 “Squeeze”"
            ],
            "correctIndex": 0,
            "explain": "apt se introdujo a partir de Debian 8 “Jessie”, combinando funciones de apt-get y otras herramientas como apt-cache en una interfaz más amigable."
          }
        ],
        "ms": [
          {
            "id": "ms-7-1",
            "q": "¿Cuáles de los siguientes son gestores de paquetes mencionados con su distribución correspondiente?",
            "options": [
              "YUM en RedHat",
              "PACMAN en ArchLinux",
              "APT en Debian",
              "DPKG en RedHat",
              "YUM en ArchLinux"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explain": "RedHat usa YUM, ArchLinux usa PACMAN y Debian usa APT. Las combinaciones DPKG en RedHat y YUM en ArchLinux son inventadas."
          },
          {
            "id": "ms-7-2",
            "q": "¿Qué caracteriza a APT frente a dpkg según el cuadro comparativo?",
            "options": [
              "APT es de alto nivel",
              "APT resuelve y descarga dependencias automáticamente",
              "APT interactúa con repositorios",
              "APT gestiona directamente archivos .deb sin repositorios",
              "APT requiere más intervención manual que dpkg"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explain": "APT es de alto nivel, resuelve dependencias automáticamente e interactúa con repositorios. Gestionar directamente los .deb y requerir intervención manual son características de dpkg."
          },
          {
            "id": "ms-7-3",
            "q": "Durante apt full-upgrade, ¿qué acciones realiza el sistema?",
            "options": [
              "Actualiza componentes del sistema operativo",
              "Reemplaza bibliotecas",
              "Actualiza servicios instalados",
              "Puede modificar configuraciones, previo aviso",
              "Formatea el disco y reinstala desde cero"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              3
            ],
            "explain": "El full-upgrade actualiza componentes del SO, reemplaza bibliotecas, actualiza servicios y puede modificar configuraciones previo aviso. Justamente NO reinstala desde cero: por eso se llama upgrade de distribución."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-7-1",
          "front": "Gestor de paquetes",
          "back": "Herramienta que permite gestionar el software de manera eficiente, automatizando la instalación, actualización, configuración y eliminación de programas."
        },
        {
          "id": "fc-7-2",
          "front": "APT vs dpkg",
          "back": "APT es la capa superior de alto nivel que resuelve dependencias e interactúa con repositorios. dpkg es la capa inferior que gestiona archivos .deb locales y no resuelve dependencias automáticamente."
        },
        {
          "id": "fc-7-3",
          "front": "Rolling vs Standard Release",
          "back": "Rolling Release actualiza de forma continua sin versiones fijas (Arch, OpenSUSE), más riesgo de inestabilidad. Standard Release agrupa updates en versiones estables periódicas (Debian, Ubuntu LTS, Fedora), prioriza estabilidad."
        },
        {
          "id": "fc-7-4",
          "front": "sources.list",
          "back": "Archivo de Debian (/etc/apt/sources.list) que almacena los repositorios con la lista de paquetes disponibles. Se crea al instalar el SO y puede editarse con permisos."
        },
        {
          "id": "fc-7-5",
          "front": "Componentes: main, contrib, non-free",
          "back": "main: paquetes libres que cumplen las DFSG. contrib: libres compatibles con DFSG pero con dependencias no gratuitas. non-free: paquetes con costo (drivers, codecs) que no cumplen la DFSG."
        },
        {
          "id": "fc-7-6",
          "front": "remove vs purge",
          "back": "apt-get remove elimina la aplicación pero conserva los archivos de configuración. apt-get purge elimina la aplicación y también todos sus archivos de configuración."
        },
        {
          "id": "fc-7-7",
          "front": "Upgrade de distribución",
          "back": "Actualizar a una versión mayor de Debian sin reinstalar, reemplazando paquetes de la versión actual por los de la nueva estable. Pasos: cambiar repos, apt update y apt full-upgrade."
        },
        {
          "id": "fc-7-8",
          "front": "Ver versión de Debian",
          "back": "Con lsb_release -a o cat /etc/debian_version se comprueba la versión actual del sistema."
        }
      ]
    },
    {
      "id": "8",
      "unit": "2",
      "title": "Formato octal y formato simbólico",
      "criollo": "Acá va cómo se asignan permisos en Linux: en formato octal (números) o simbólico (letras y operadores). Aprendés que r=4, w=2, x=1 y que sumando esos valores armás el permiso de owner, grupo y otros. Todo con chmod, más chown y chgrp para cambiar dueño y grupo.",
      "blocks": [
        {
          "type": "p",
          "text": "Cada archivo y cada directorio del sistema operativo tiene asignado un grupo de permisos para establecer quién puede o no acceder a esa información. Algunos permisos determinan qué usuario o grupos de usuarios pueden <strong>Leer, escribir o ejecutar</strong> ese archivo, o bien solo alguno de ellos."
        },
        {
          "type": "p",
          "text": "Existen 2 formas de asignar permisos a los archivos o directorios: en <strong>formato octal</strong> y en <strong>formato simbólico</strong>. Además, existen 3 tipos de permisos especiales que refuerzan estos permisos: <strong>SetUID</strong>, <strong>SetGID</strong> y <strong>StickyBit</strong>."
        },
        {
          "type": "h3",
          "text": "Formato octal",
          "criollo": "Los permisos hechos número: sumás pesos binarios y listo."
        },
        {
          "type": "p",
          "text": "El formato octal es una forma numérica de representar los permisos de archivos y directorios en Linux. Cada conjunto de permisos (lectura, escritura y ejecución) para el usuario, el grupo y otros se traduce a un valor numérico que permite una forma más concisa y precisa de manipularlos con comandos en la terminal."
        },
        {
          "type": "p",
          "text": "Los permisos se dividen en 3 grupos para cada archivo o directorio:"
        },
        {
          "type": "ol",
          "items": [
            "<strong>Usuario (Owner):</strong> el propietario del archivo.",
            "<strong>Grupo (Group):</strong> los miembros del grupo asociado al archivo.",
            "<strong>Otros (Others):</strong> todos los demás usuarios del sistema."
          ]
        },
        {
          "type": "p",
          "text": "Los permisos se representan como una cadena de caracteres de <strong>10 posiciones</strong>. Por ejemplo: <code>-rwxr-xr--</code>. El primer carácter indica el tipo de archivo: <code>-</code> para archivos regulares y <code>d</code> para directorios."
        },
        {
          "type": "p",
          "text": "Las siguientes posiciones se agrupan de tres en tres:"
        },
        {
          "type": "ol",
          "items": [
            "<code>rwx</code>: permisos de Lectura (read), Escritura (write) y Ejecución (execute) para el usuario propietario (owner) del archivo.",
            "<code>r-x</code>: permisos de Lectura (read) y Ejecución (execute) para el grupo (group) asociado al archivo.",
            "<code>r--</code>: permisos de Lectura (read) para otros (other)."
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "La forma de listar archivos y ver los permisos es con el comando <code>ls -l</code>."
        },
        {
          "type": "h3",
          "text": "Peso binario de cada permiso",
          "criollo": "r vale 4, w vale 2, x vale 1. Sumá y tenés el octal."
        },
        {
          "type": "p",
          "text": "A cada uno de estos permisos se le asigna un valor numérico basado en su peso binario:"
        },
        {
          "type": "ul",
          "items": [
            "$r = 4$",
            "$w = 2$",
            "$x = 1$"
          ]
        },
        {
          "type": "p",
          "text": "Esto quiere decir que la asignación de permisos en número octal es la <strong>suma de los valores</strong> de los permisos que posee. Por ejemplo:"
        },
        {
          "type": "ul",
          "items": [
            "$rwx = 4 + 2 + 1 = 7$",
            "$rw- = 4 + 2 = 6$",
            "$r-x = 4 + 1 = 5$",
            "$r-- = 4$"
          ]
        },
        {
          "type": "p",
          "text": "Salvo por el primer espacio, de las nueve posiciones de permisos que administramos, cada una es en realidad un bit que está encendido o apagado: si está encendido muestra la letra que lo representa, de lo contrario un guión. La combinación de bits encendidos o apagados en cada grupo da <strong>ocho posibles combinaciones</strong> de valores ($2^3 = 8$), es decir, la suma de los bits encendidos."
        },
        {
          "type": "table",
          "caption": "Las 8 combinaciones posibles por grupo de permisos",
          "headers": [
            "Representación",
            "Binario",
            "Valor octal",
            "Descripción"
          ],
          "rows": [
            [
              "---",
              "000",
              "0",
              "Sin permisos"
            ],
            [
              "--x",
              "001",
              "1",
              "Ejecución"
            ],
            [
              "-w-",
              "010",
              "2",
              "Escritura"
            ],
            [
              "-wx",
              "011",
              "3",
              "Escritura y ejecución"
            ],
            [
              "r--",
              "100",
              "4",
              "Lectura"
            ],
            [
              "r-x",
              "101",
              "5",
              "Lectura y ejecución"
            ],
            [
              "rw-",
              "110",
              "6",
              "Lectura y escritura"
            ],
            [
              "rwx",
              "111",
              "7",
              "Lectura, escritura y ejecución"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Asignar permisos en formato octal"
        },
        {
          "type": "p",
          "text": "El comando que utilizamos para la asignación de los permisos es <code>chmod</code>:"
        },
        {
          "type": "code",
          "code": "chmod 754 archivo"
        },
        {
          "type": "h3",
          "text": "Formato simbólico",
          "criollo": "Con letras y +/-/= vas sumando o sacando permisos sin hacer cuentas."
        },
        {
          "type": "p",
          "text": "Otra forma de asignar permisos es por medio del formato simbólico a través de una cadena de caracteres. Esta representación es muy visual y ayuda a darle una comprensión más sencilla a la asignación de los permisos."
        },
        {
          "type": "p",
          "text": "El comando para establecer los permisos en formato simbólico sigue siendo <code>chmod</code>, pero se agrega a quién se le asigna el permiso y los operadores <code>+</code>, <code>-</code> y <code>=</code> (más, menos e igual) para añadir o quitar el permiso representado en valor <code>r</code>, <code>w</code> o <code>x</code>."
        },
        {
          "type": "code",
          "code": "chmod \"quién\" \"operador\" \"permiso\" archivo"
        },
        {
          "type": "p",
          "text": "<strong>quién:</strong>"
        },
        {
          "type": "ul",
          "items": [
            "<code>u</code>: owner",
            "<code>g</code>: grupo",
            "<code>o</code>: otros"
          ]
        },
        {
          "type": "p",
          "text": "<strong>operador:</strong>"
        },
        {
          "type": "ul",
          "items": [
            "<code>+</code>: añadir",
            "<code>-</code>: quitar",
            "<code>=</code>: establecer permiso específico"
          ]
        },
        {
          "type": "p",
          "text": "Ejemplos:"
        },
        {
          "type": "code",
          "code": "chmod u+rw archivo\nchmod g-w archivo\nchmod a=rx archivo"
        },
        {
          "type": "h3",
          "text": "Cambio de propietario y grupo",
          "criollo": "chown cambia el dueño, chgrp cambia el grupo. Root los cambia juntos."
        },
        {
          "type": "p",
          "text": "Cada archivo o directorio tiene un owner y un grupo con derechos. Estos dos componentes (usuario y grupo) pueden ser reemplazados por otros según la necesidad utilizando los comandos <code>chown</code> y <code>chgrp</code>."
        },
        {
          "type": "code",
          "code": "-rw-r--r-- 1 root  root   65 Oct  6 11:34 salida.txt\n-rw-r--r-- 1 root  root   45 Oct  6 14:52 frutas.txt"
        },
        {
          "type": "p",
          "text": "Ejemplos de uso:"
        },
        {
          "type": "code",
          "code": "chown \"usuarios\" archivo\nchgrp \"grupo\" archivo"
        },
        {
          "type": "p",
          "text": "El resultado sería, por ejemplo:"
        },
        {
          "type": "code",
          "code": "-rw-r--r-- 1 alumno alumno       65 Oct  6 11:34 salida.txt\n-rw-r--r-- 1 alumno Tecnologia   45 Oct  6 14:52 frutas.txt"
        },
        {
          "type": "p",
          "text": "El usuario <strong>root</strong> podría cambiar ambos en una sola sentencia pasando usuario y grupo separados por dos puntos, de la siguiente forma:"
        },
        {
          "type": "code",
          "code": "chown alumno:alumno salida.txt"
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-8-1",
            "q": "En el peso binario de los permisos, la escritura (w) vale 2.",
            "a": true,
            "explain": "Los valores son r = 4, w = 2 y x = 1."
          },
          {
            "id": "tf-8-2",
            "q": "El permiso octal rwx equivale al número 7.",
            "a": true,
            "explain": "Se suman los tres valores: 4 + 2 + 1 = 7."
          },
          {
            "id": "tf-8-3",
            "q": "La cadena de permisos se representa con 8 posiciones.",
            "a": false,
            "explain": "Se representa con 10 posiciones: 1 para el tipo de archivo y 9 de permisos (3 grupos de 3)."
          },
          {
            "id": "tf-8-4",
            "q": "El comando chgrp se usa para cambiar el grupo de un archivo.",
            "a": true,
            "explain": "chgrp cambia el grupo y chown cambia el propietario (o ambos, si es root)."
          },
          {
            "id": "tf-8-5",
            "q": "Cada grupo de permisos tiene 8 combinaciones posibles porque 2³ = 8.",
            "a": true,
            "explain": "Cada grupo tiene 3 bits que pueden estar encendidos o apagados, dando 2³ = 8 combinaciones."
          }
        ],
        "mc": [
          {
            "id": "mc-8-1",
            "q": "¿A qué valor octal equivale el permiso r-x?",
            "options": [
              "4",
              "5",
              "6",
              "7"
            ],
            "correctIndex": 1,
            "explain": "r-x = r (4) + x (1) = 5."
          },
          {
            "id": "mc-8-2",
            "q": "¿Qué comando se usa para asignar permisos, tanto en formato octal como simbólico?",
            "options": [
              "chown",
              "chgrp",
              "chmod",
              "ls -l"
            ],
            "correctIndex": 2,
            "explain": "chmod se usa en ambos formatos; cambia únicamente la forma de expresar los permisos."
          },
          {
            "id": "mc-8-3",
            "q": "En formato simbólico, ¿qué representa la letra u?",
            "options": [
              "El grupo",
              "Otros",
              "El owner (propietario)",
              "Todos los usuarios"
            ],
            "correctIndex": 2,
            "explain": "u = owner, g = grupo, o = otros."
          },
          {
            "id": "mc-8-4",
            "q": "¿Qué hace el operador = en formato simbólico?",
            "options": [
              "Añade un permiso",
              "Quita un permiso",
              "Establece un permiso específico",
              "Lista los permisos"
            ],
            "correctIndex": 2,
            "explain": "El operador = establece un permiso específico; + añade y - quita."
          }
        ],
        "ms": [
          {
            "id": "ms-8-1",
            "q": "¿Cuáles son los tres grupos en que se dividen los permisos de un archivo o directorio?",
            "options": [
              "Usuario (Owner)",
              "Grupo (Group)",
              "Root",
              "Otros (Others)",
              "Administrador"
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explain": "Los tres grupos son Usuario (Owner), Grupo (Group) y Otros (Others)."
          },
          {
            "id": "ms-8-2",
            "q": "¿Cuáles de los siguientes son permisos especiales que refuerzan los permisos?",
            "options": [
              "SetUID",
              "SetGID",
              "ChmodBit",
              "StickyBit",
              "RootBit"
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explain": "Los tres permisos especiales son SetUID, SetGID y StickyBit."
          },
          {
            "id": "ms-8-3",
            "q": "¿Cuáles de estas equivalencias octales son correctas?",
            "options": [
              "rwx = 7",
              "rw- = 6",
              "r-x = 5",
              "r-- = 3",
              "--- = 0"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "r-- vale 4 (solo lectura), no 3. Las demás son correctas."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-8-1",
          "front": "Pesos binarios de permisos",
          "back": "r = 4, w = 2, x = 1. El valor octal es la suma de los permisos presentes."
        },
        {
          "id": "fc-8-2",
          "front": "Formato octal",
          "back": "Representación numérica de los permisos. Cada grupo (usuario, grupo, otros) se traduce a un valor de 0 a 7."
        },
        {
          "id": "fc-8-3",
          "front": "chmod 754",
          "back": "Asigna permisos en formato octal: 7 (rwx) al owner, 5 (r-x) al grupo y 4 (r--) a otros."
        },
        {
          "id": "fc-8-4",
          "front": "Formato simbólico",
          "back": "Asigna permisos con chmod usando quién (u/g/o), operador (+/-/=) y permiso (r/w/x). Ej: chmod u+rw archivo."
        },
        {
          "id": "fc-8-5",
          "front": "Operadores simbólicos",
          "back": "+ añade, - quita y = establece un permiso específico."
        },
        {
          "id": "fc-8-6",
          "front": "chown y chgrp",
          "back": "chown cambia el propietario de un archivo y chgrp cambia el grupo. Root puede cambiar ambos con chown usuario:grupo."
        },
        {
          "id": "fc-8-7",
          "front": "Cadena de 10 posiciones",
          "back": "El primer carácter indica el tipo (- archivo, d directorio) y los 9 restantes son 3 grupos rwx para owner, grupo y otros."
        },
        {
          "id": "fc-8-8",
          "front": "ls -l",
          "back": "Comando para listar archivos mostrando sus permisos, propietario, grupo y demás datos."
        }
      ]
    },
    {
      "id": "9",
      "unit": "2",
      "title": "Permisos especiales",
      "criollo": "Además de los permisos clásicos rwx, Linux tiene tres bits especiales para ejecutables y directorios: SETuid, SETgid y StickyBit. Cada uno cambia con qué permisos corre algo o quién puede borrar qué, y se setean agregando un dígito octal adelante (4, 2 o 1) o con letras s/t en formato simbólico.",
      "blocks": [
        {
          "type": "p",
          "text": "Existen, en Linux, <strong>3 bits de permisos especiales</strong> que pueden ser asignados a los archivos ejecutables o directorios: <strong>SETuid</strong>, <strong>SETgid</strong> y <strong>StickyBit</strong>."
        },
        {
          "type": "h3",
          "text": "SETuid",
          "criollo": "El ejecutable corre como si fueras el dueño del archivo, no como quien lo ejecuta."
        },
        {
          "type": "p",
          "text": "Permite que un archivo ejecutable se ejecute con los <strong>permisos del propietario</strong> del archivo. En formato octal se agrega un <strong>4</strong> delante del permiso, y en formato simbólico el valor referencial es una <code>s</code> para usuario."
        },
        {
          "type": "h3",
          "text": "SETgid",
          "criollo": "En ejecutables corre con permisos del grupo; en directorios, todo lo que se cree adentro hereda el grupo del directorio."
        },
        {
          "type": "p",
          "text": "En el caso de los archivos, permite que se ejecute con los <strong>permisos del grupo propietario</strong>, pero para el caso de los directorios, todos los archivos creados dentro <strong>heredan el grupo del directorio</strong>. En formato octal se agrega un <strong>2</strong> delante del permiso, y en formato simbólico el valor referencial es una <code>s</code> para grupo."
        },
        {
          "type": "h3",
          "text": "StickyBit",
          "criollo": "Sirve para directorios compartidos: aunque todos puedan escribir, cada uno solo puede borrar lo suyo."
        },
        {
          "type": "p",
          "text": "Permite que solo el <strong>propietario de un archivo o root</strong> pueda eliminarlo, aunque esté en un directorio con permisos de escritura para todos. En formato octal se agrega un <strong>1</strong> delante del permiso, y en formato simbólico el valor referencial es una <code>t</code> para usuario."
        },
        {
          "type": "table",
          "caption": "Comandos para asignar cada permiso especial en formato octal y simbólico",
          "headers": [
            "Permiso especial",
            "Comando en formato octal",
            "Comando en formato simbólico"
          ],
          "rows": [
            [
              "setuid",
              "chmod 4755 archivo",
              "chmod u+s archivo"
            ],
            [
              "setgid",
              "chmod 2755 archivo",
              "chmod g+s archivo"
            ],
            [
              "stickybit",
              "chmod 1755 directorio",
              "chmod +t directorio"
            ]
          ]
        },
        {
          "type": "code",
          "code": "chmod 4755 archivo    # setuid\nchmod 2755 archivo    # setgid\nchmod 1755 directorio # stickybit"
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-9-1",
            "q": "SETuid permite que un archivo ejecutable se ejecute con los permisos del propietario del archivo.",
            "a": true,
            "explain": "Esa es exactamente la función de SETuid: el ejecutable corre con los permisos del propietario del archivo."
          },
          {
            "id": "tf-9-2",
            "q": "En formato octal, el StickyBit se asigna agregando un 4 delante del permiso.",
            "a": false,
            "explain": "El StickyBit agrega un 1 delante del permiso en formato octal. El 4 corresponde a SETuid."
          },
          {
            "id": "tf-9-3",
            "q": "Con SETgid aplicado a un directorio, todos los archivos creados dentro heredan el grupo del directorio.",
            "a": true,
            "explain": "Para directorios, SETgid hace que los archivos creados adentro hereden el grupo del directorio."
          },
          {
            "id": "tf-9-4",
            "q": "El StickyBit permite que cualquier usuario con permiso de escritura elimine cualquier archivo del directorio.",
            "a": false,
            "explain": "Al revés: el StickyBit hace que solo el propietario del archivo o root puedan eliminarlo, aunque el directorio tenga escritura para todos."
          },
          {
            "id": "tf-9-5",
            "q": "En formato simbólico, SETuid se representa con una \"s\" para usuario.",
            "a": true,
            "explain": "El valor referencial simbólico de SETuid es una \"s\" para usuario (chmod u+s archivo)."
          }
        ],
        "mc": [
          {
            "id": "mc-9-1",
            "q": "¿Qué comando en formato octal asigna el permiso setgid?",
            "options": [
              "chmod 4755 archivo",
              "chmod 2755 archivo",
              "chmod 1755 directorio",
              "chmod g+t archivo"
            ],
            "correctIndex": 1,
            "explain": "setgid se asigna en octal con chmod 2755 archivo (se agrega el 2 delante del permiso)."
          },
          {
            "id": "mc-9-2",
            "q": "¿Cuántos bits de permisos especiales existen en Linux para archivos ejecutables o directorios?",
            "options": [
              "2",
              "3",
              "4",
              "5"
            ],
            "correctIndex": 1,
            "explain": "Son 3 bits especiales: SETuid, SETgid y StickyBit."
          },
          {
            "id": "mc-9-3",
            "q": "En formato simbólico, ¿cómo se asigna el StickyBit a un directorio?",
            "options": [
              "chmod +t directorio",
              "chmod u+s directorio",
              "chmod g+s directorio",
              "chmod +s directorio"
            ],
            "correctIndex": 0,
            "explain": "El StickyBit se asigna en simbólico con chmod +t directorio; su valor referencial es una \"t\"."
          },
          {
            "id": "mc-9-4",
            "q": "¿Qué permite específicamente el StickyBit?",
            "options": [
              "Que un ejecutable corra con los permisos del propietario",
              "Que los archivos hereden el grupo del directorio",
              "Que solo el propietario del archivo o root puedan eliminarlo",
              "Que cualquiera pueda ejecutar el archivo como root"
            ],
            "correctIndex": 2,
            "explain": "El StickyBit hace que solo el propietario del archivo o root puedan eliminarlo, aun en un directorio con escritura para todos."
          }
        ],
        "ms": [
          {
            "id": "ms-9-1",
            "q": "¿Cuáles de las siguientes son bits de permisos especiales de Linux mencionados en el apunte?",
            "options": [
              "SETuid",
              "SETgid",
              "StickyBit",
              "SETroot",
              "ChownBit"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explain": "Los tres bits especiales son SETuid, SETgid y StickyBit. \"SETroot\" y \"ChownBit\" no existen en el apunte."
          },
          {
            "id": "ms-9-2",
            "q": "¿Cuáles afirmaciones sobre los dígitos octales de los permisos especiales son correctas?",
            "options": [
              "SETuid agrega un 4 delante del permiso",
              "SETgid agrega un 2 delante del permiso",
              "StickyBit agrega un 1 delante del permiso",
              "SETuid agrega un 1 delante del permiso",
              "StickyBit agrega un 2 delante del permiso"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explain": "SETuid=4, SETgid=2, StickyBit=1. Las otras dos mezclan mal los dígitos."
          },
          {
            "id": "ms-9-3",
            "q": "¿Cuáles comandos simbólicos aparecen en la tabla del apunte?",
            "options": [
              "chmod u+s archivo",
              "chmod g+s archivo",
              "chmod +t directorio",
              "chmod u+t archivo",
              "chmod g+t directorio"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explain": "La tabla lista chmod u+s (setuid), chmod g+s (setgid) y chmod +t directorio (stickybit)."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-9-1",
          "front": "SETuid",
          "back": "Permite que un archivo ejecutable se ejecute con los permisos del propietario del archivo."
        },
        {
          "id": "fc-9-2",
          "front": "SETgid en archivos",
          "back": "Hace que el ejecutable corra con los permisos del grupo propietario del archivo."
        },
        {
          "id": "fc-9-3",
          "front": "SETgid en directorios",
          "back": "Todos los archivos creados dentro del directorio heredan el grupo del directorio."
        },
        {
          "id": "fc-9-4",
          "front": "StickyBit",
          "back": "Solo el propietario del archivo o root pueden eliminarlo, aunque el directorio tenga escritura para todos."
        },
        {
          "id": "fc-9-5",
          "front": "Dígitos octales especiales",
          "back": "SETuid = 4, SETgid = 2, StickyBit = 1, agregados delante del permiso."
        },
        {
          "id": "fc-9-6",
          "front": "setuid en octal y simbólico",
          "back": "Octal: chmod 4755 archivo. Simbólico: chmod u+s archivo (valor referencial \"s\" para usuario)."
        },
        {
          "id": "fc-9-7",
          "front": "setgid en octal y simbólico",
          "back": "Octal: chmod 2755 archivo. Simbólico: chmod g+s archivo (valor referencial \"s\" para grupo)."
        },
        {
          "id": "fc-9-8",
          "front": "stickybit en octal y simbólico",
          "back": "Octal: chmod 1755 directorio. Simbólico: chmod +t directorio (valor referencial \"t\")."
        }
      ]
    },
    {
      "id": "10",
      "unit": "2",
      "title": "Umask",
      "criollo": "Umask es el filtro que decide qué permisos van a tener por defecto los archivos y directorios nuevos que vas creando. Arranca de un valor base (666 para archivos, 777 para directorios) y le resta lo que vos definís con el comando umask. Podés calcularlo restando o con operaciones binarias, y setearlo temporal o permanente.",
      "blocks": [
        {
          "type": "p",
          "text": "<strong>Umask</strong> es un mecanismo que define los permisos predeterminados para archivos y directorios nuevos. Por definición, los permisos predeterminados para archivos es <strong>666</strong>, y para directorios, <strong>777</strong>. Umask actúa como un filtro que resta ciertos permisos de los valores predeterminados para generar los permisos de los archivos y directorios que se van creando."
        },
        {
          "type": "h3",
          "text": "Cálculo mediante resta",
          "criollo": "Restás lo que querés conseguir al valor por default, y ese resultado es lo que le pasás a umask."
        },
        {
          "type": "p",
          "text": "Estableciendo que el valor predeterminado es <strong>666</strong> (<code>rw-rw-rw-</code>) para los archivos, y <strong>777</strong> (<code>rwxrwxrwx</code>) para los directorios, supongamos que queremos conseguir que los archivos tengan permisos <strong>644</strong> al momento de crearse. Para lograr que todos los archivos nuevos obtengan este permiso, debemos restar al valor predeterminado el valor que queremos conseguir. Ese resultado es el que debemos establecer con el comando <code>umask</code>."
        },
        {
          "type": "code",
          "code": "0666 - 0644 = 0022\n\numask 0022\n\n-rw-r--r-- 1 alumno alumno 0 oct 28 18:38 archivo_nuevo"
        },
        {
          "type": "h3",
          "text": "Cálculo mediante operación binaria",
          "criollo": "La otra forma: pasás todo a binario, negás los permisos que querés y hacés un AND bit a bit."
        },
        {
          "type": "p",
          "text": "Otra forma de entender umask es mediante operaciones binarias. Cada número en los permisos octales corresponde a un conjunto de bits. Por ejemplo, $7 = 111$ (rwx), $6 = 110$ (rw)."
        },
        {
          "type": "table",
          "caption": "Correspondencia decimal / binario / permiso",
          "headers": [
            "Decimal",
            "Binario",
            "Valor"
          ],
          "rows": [
            [
              "0",
              "000",
              "Sin permisos"
            ],
            [
              "1",
              "001",
              "Ejecución"
            ],
            [
              "2",
              "010",
              "Escritura"
            ],
            [
              "3",
              "011",
              "Escritura + Ejecución"
            ],
            [
              "4",
              "100",
              "Lectura"
            ],
            [
              "5",
              "101",
              "Lectura + Ejecución"
            ],
            [
              "6",
              "110",
              "Lectura + Escritura"
            ],
            [
              "7",
              "111",
              "Lectura + Escritura + Ejecución"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Cuando configuramos umask, convertimos el valor en su representación binaria y restamos los permisos correspondientes. Los pasos son:"
        },
        {
          "type": "ol",
          "items": [
            "Al número que viene por default como valor predeterminado, convertirlo en binario: <strong>666 = 110 110 110</strong>.",
            "El valor que queremos obtener como permisos (en este caso <strong>644 = 110 100 100</strong>) también lo pasamos a binario y realizamos una operación llamada <strong>NOT Binary</strong>, que implica negar el número obtenido: <code>not binary = 001 011 011</code>. La operación consiste en invertir el número binario y generar su inverso.",
            "Finalmente, realizamos una operación <strong>AND bit a bit</strong> entre el valor predeterminado y la negación de los permisos finales."
          ]
        },
        {
          "type": "code",
          "code": "110 110 110   (valor predeterminado, 666)\n001 011 011   (negación de los permisos finales)\n-----------------\n000 010 010   (resultado en binario)"
        },
        {
          "type": "p",
          "text": "Esto nos va a dar como resultado en octal el número <strong>022</strong>, que deberemos usar con el comando <code>umask</code>."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "La operación <strong>NOT Binary</strong> toma un número binario y niega cada uno de sus bits: cambia los bits de 1 a 0 y de 0 a 1. La operación <strong>AND bit a bit</strong> compara dos números binarios bit a bit y el resultado es 1 solo si ambos bits comparados son 1; en caso contrario, es 0."
        },
        {
          "type": "h3",
          "text": "Umask temporal y permanente",
          "criollo": "Si lo tirás en la terminal dura solo esa sesión; para que quede fijo hay que configurarlo en archivos de entorno."
        },
        {
          "type": "p",
          "text": "Si utilizamos el comando <code>umask</code> directamente en la terminal, estaremos estableciendo su valor de forma <strong>temporal</strong> y únicamente para la sesión activa en ese momento. Si deseamos que el valor de umask sea <strong>permanente</strong> en todo el sistema, es necesario configurarlo en los archivos de administración global de entornos de usuarios."
        },
        {
          "type": "ul",
          "items": [
            "Para definir el umask de manera específica para un usuario individual, se agrega la configuración en su archivo <code>~/.bashrc</code> o <code>~/.profile</code>.",
            "Para aplicar la configuración de forma global para todos los usuarios del sistema, lo recomendable es establecerla en <code>/etc/profile</code> o <code>/etc/login.defs</code>."
          ]
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-10-1",
            "q": "Los permisos predeterminados para archivos nuevos son 666 y para directorios nuevos son 777.",
            "a": true,
            "explain": "Umask parte de esos valores base: 666 (rw-rw-rw-) para archivos y 777 (rwxrwxrwx) para directorios."
          },
          {
            "id": "tf-10-2",
            "q": "Umask suma permisos a los valores predeterminados.",
            "a": false,
            "explain": "Umask actúa como un filtro que RESTA ciertos permisos de los valores predeterminados."
          },
          {
            "id": "tf-10-3",
            "q": "Para conseguir archivos con permisos 644 se debe usar umask 0022.",
            "a": true,
            "explain": "0666 - 0644 = 0022, por lo tanto umask 0022 da como resultado archivos -rw-r--r--."
          },
          {
            "id": "tf-10-4",
            "q": "Ejecutar umask directamente en la terminal establece su valor de forma permanente en todo el sistema.",
            "a": false,
            "explain": "Usado directamente en la terminal el valor es temporal y solo aplica a la sesión activa. Para hacerlo permanente hay que configurarlo en archivos de entorno."
          },
          {
            "id": "tf-10-5",
            "q": "En la operación AND bit a bit el resultado es 1 solo si ambos bits comparados son 1.",
            "a": true,
            "explain": "Esa es la regla básica del AND bit a bit: 1 solo si ambos bits son 1, en caso contrario 0."
          }
        ],
        "mc": [
          {
            "id": "mc-10-1",
            "q": "¿Cuál es el valor de umask que hay que restar de 0666 para obtener permisos 0644 en archivos?",
            "options": [
              "0044",
              "0022",
              "0644",
              "0755"
            ],
            "correctIndex": 1,
            "explain": "0666 - 0644 = 0022."
          },
          {
            "id": "mc-10-2",
            "q": "En la representación binaria de permisos octales, ¿a qué corresponde el número 6?",
            "options": [
              "111 (rwx)",
              "100 (r)",
              "110 (rw)",
              "010 (w)"
            ],
            "correctIndex": 2,
            "explain": "El 6 es 110, es decir Lectura + Escritura (rw)."
          },
          {
            "id": "mc-10-3",
            "q": "¿En qué archivo se recomienda configurar el umask de forma global para todos los usuarios del sistema?",
            "options": [
              "~/.bashrc",
              "~/.profile",
              "/etc/profile",
              "~/umask.conf"
            ],
            "correctIndex": 2,
            "explain": "Para aplicar la configuración global se recomienda /etc/profile o /etc/login.defs. Los archivos ~/.bashrc y ~/.profile son por usuario."
          },
          {
            "id": "mc-10-4",
            "q": "¿Qué hace la operación NOT Binary sobre un número binario?",
            "options": [
              "Suma 1 a cada bit",
              "Niega cada uno de sus bits, cambiando 1 a 0 y 0 a 1",
              "Compara dos números y devuelve 1 si ambos son 1",
              "Convierte el número a decimal"
            ],
            "correctIndex": 1,
            "explain": "NOT Binary niega cada bit: cambia los 1 a 0 y los 0 a 1."
          }
        ],
        "ms": [
          {
            "id": "ms-10-1",
            "q": "¿Cuáles de las siguientes afirmaciones sobre umask son correctas?",
            "options": [
              "Actúa como un filtro que resta permisos de los valores predeterminados",
              "El valor predeterminado para archivos es 666",
              "El valor predeterminado para directorios es 777",
              "Suma permisos a los archivos nuevos",
              "Solo funciona sobre directorios, nunca sobre archivos"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explain": "Umask resta permisos, parte de 666 para archivos y 777 para directorios. No suma permisos ni se limita a directorios."
          },
          {
            "id": "ms-10-2",
            "q": "¿Cuáles de estos pares decimal → binario son correctos según la tabla?",
            "options": [
              "7 = 111",
              "4 = 100",
              "2 = 010",
              "6 = 011",
              "3 = 101"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explain": "7=111, 4=100 y 2=010 son correctos. En cambio 6=110 (no 011) y 3=011 (no 101)."
          },
          {
            "id": "ms-10-3",
            "q": "¿En qué archivos se puede configurar umask según su alcance?",
            "options": [
              "~/.bashrc para un usuario individual",
              "~/.profile para un usuario individual",
              "/etc/profile de forma global",
              "/etc/login.defs de forma global",
              "/dev/null para todos los procesos"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              3
            ],
            "explain": "Para un usuario individual se usa ~/.bashrc o ~/.profile; para todos los usuarios (global) se recomienda /etc/profile o /etc/login.defs. /dev/null no cumple ningún rol acá."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-10-1",
          "front": "¿Qué es umask?",
          "back": "Un mecanismo que define los permisos predeterminados para archivos y directorios nuevos, actuando como un filtro que resta permisos de los valores base."
        },
        {
          "id": "fc-10-2",
          "front": "Permisos base por default",
          "back": "Archivos: 666 (rw-rw-rw-). Directorios: 777 (rwxrwxrwx)."
        },
        {
          "id": "fc-10-3",
          "front": "Umask para permisos 644",
          "back": "0666 - 0644 = 0022. Se usa umask 0022 y los archivos nuevos quedan -rw-r--r--."
        },
        {
          "id": "fc-10-4",
          "front": "NOT Binary",
          "back": "Operación lógica que niega cada bit de un número binario: cambia los 1 a 0 y los 0 a 1."
        },
        {
          "id": "fc-10-5",
          "front": "AND bit a bit",
          "back": "Compara dos números binarios bit a bit; el resultado es 1 solo si ambos bits comparados son 1, en caso contrario es 0."
        },
        {
          "id": "fc-10-6",
          "front": "Umask temporal",
          "back": "Ejecutar umask directamente en la terminal establece el valor solo para la sesión activa en ese momento."
        },
        {
          "id": "fc-10-7",
          "front": "Umask permanente por usuario",
          "back": "Se agrega la configuración en ~/.bashrc o ~/.profile del usuario."
        },
        {
          "id": "fc-10-8",
          "front": "Umask permanente global",
          "back": "Para todos los usuarios del sistema se configura en /etc/profile o /etc/login.defs."
        }
      ]
    },
    {
      "id": "11",
      "unit": "2",
      "title": "SUDO",
      "criollo": "SUDO viene de \"Superuser DO\" y te deja correr comandos como admin sin loguearte como root, sumando control y seguridad. Toda la config vive en /etc/sudoers, que editás con visudo para no cagarla con la sintaxis. Ahí definís quién puede ejecutar qué, con Defaults, alias y reglas por usuario o grupo.",
      "blocks": [
        {
          "type": "p",
          "text": "<strong>SUDO</strong>, que viene de \"Superuser DO\", es una herramienta que permite ejecutar comandos con privilegios de administrador sin tener que iniciar sesión como <code>root</code>. Esto se realiza sin la necesidad de cambiar directamente al usuario <code>root</code>, añadiendo una capa de seguridad y control. Es crucial para la administración segura del sistema operativo."
        },
        {
          "type": "h3",
          "text": "Características"
        },
        {
          "type": "ul",
          "items": [
            "<strong>Control de acceso</strong>: permite otorgar permisos granulares, asignando quién puede ejecutar qué comandos como <code>root</code> o como otros usuarios.",
            "<strong>Registro de actividad</strong>: mantiene un registro de los comandos ejecutados a través de SUDO, lo cual facilita auditorías y seguimientos de acciones.",
            "<strong>Temporalidad</strong>: la configuración de permisos puede ser temporal o específica para ciertos usuarios, comandos o grupos de usuarios.",
            "<strong>Minimiza riesgos</strong>: reduce la necesidad de que los usuarios accedan directamente a la cuenta de <code>root</code>, minimizando el riesgo de errores o accesos indebidos."
          ]
        },
        {
          "type": "h3",
          "text": "SUDOERS",
          "criollo": "El archivo donde se define todo. Nunca lo edites a mano directo: usá visudo que te chequea la sintaxis antes de guardar."
        },
        {
          "type": "p",
          "text": "La configuración de SUDO se maneja principalmente a través del archivo <code>/etc/sudoers</code>. Este archivo define qué usuarios y grupos tienen permisos para usar SUDO y qué comandos pueden ejecutar con él."
        },
        {
          "type": "p",
          "text": "Para editar el archivo <code>sudoers</code>, se recomienda utilizar el comando <code>visudo</code>, ya que este comando verifica la sintaxis antes de guardar los cambios."
        },
        {
          "type": "callout",
          "tone": "warning",
          "text": "Editá siempre <code>sudoers</code> con <code>visudo</code>: si guardás un archivo con sintaxis rota podés quedarte sin acceso administrativo al sistema."
        },
        {
          "type": "h3",
          "text": "Configuraciones globales (Defaults)"
        },
        {
          "type": "p",
          "text": "La directiva <code>Defaults</code> configura el comportamiento predeterminado para SUDO. Estas configuraciones afectan a todos los usuarios que utilicen SUDO."
        },
        {
          "type": "table",
          "caption": "Opciones de Defaults",
          "headers": [
            "Opción",
            "Qué hace"
          ],
          "rows": [
            [
              "env_reset",
              "Restablece todas las variables de entorno del usuario antes de ejecutar un comando con SUDO."
            ],
            [
              "mail_badpass",
              "Envía un correo al administrador si un usuario ingresa una contraseña incorrecta al ejecutar un comando con SUDO."
            ],
            [
              "secure_path",
              "Define una ruta de búsqueda (PATH) segura para los comandos que se ejecutan como superusuario."
            ],
            [
              "timestamp_timeout",
              "Determina el tiempo en minutos que se recordará la contraseña de un usuario antes de requerirla nuevamente. Puede variar según la distribución, pero el default es de 5 min."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Alias",
          "criollo": "Atajos para no repetir listas de hosts, usuarios o comandos y que la config quede más legible."
        },
        {
          "type": "p",
          "text": "Los alias se utilizan para simplificar y hacer más legible la configuración de SUDO. Se pueden definir alias para usuarios, comandos y host."
        },
        {
          "type": "ul",
          "items": [
            "<code>host_alias</code>: agrupa hosts.",
            "<code>user_alias</code>: agrupa usuarios.",
            "<code>cmnd_alias</code>: agrupa comandos."
          ]
        },
        {
          "type": "code",
          "code": "host_Alias SERVIDORES = server1, server2\nuser_alias ADMIN = alumno, jperez\ncmnd_alias REBOOT_CMDS = /sbin/reboot, /sbin/shutdown"
        },
        {
          "type": "h3",
          "text": "Permisos para usuarios y grupos"
        },
        {
          "type": "p",
          "text": "Finalmente, tenemos una sección en la que podremos configurar los permisos para usuarios y/o grupos. Por ejemplo, la regla del usuario <code>alumno</code>:"
        },
        {
          "type": "code",
          "code": "alumno   ALL = (ALL:ALL) ALL\n1er         (2do:3ro) 4to"
        },
        {
          "type": "p",
          "text": "El usuario <code>alumno</code> puede ejecutar cualquier comando (<code>ALL</code>) en cualquier máquina (<code>ALL</code>) como cualquier usuario (<code>ALL:ALL</code>):"
        },
        {
          "type": "ul",
          "items": [
            "<strong>1er</strong> <code>ALL=</code>: se refiere a las máquinas en las que la regla es válida. <code>ALL</code> indica todas las máquinas.",
            "<strong>2do</strong> primer <code>ALL</code> de <code>(ALL:ALL)</code>: indica que el usuario puede ejecutar el comando como cualquier usuario.",
            "<strong>3ro</strong> segundo <code>ALL</code> después de los dos puntos: indica que el comando puede ejecutarse en cualquier grupo.",
            "<strong>4to</strong> <code>ALL</code> final: especifica qué comandos puede ejecutar el usuario. <code>ALL</code> significa que puede ejecutar cualquier comando."
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "En el caso de los privilegios por grupo, deben agregarse con el símbolo <code>%</code> delante del grupo, teniendo en cuenta la misma configuración que para los usuarios."
        },
        {
          "type": "p",
          "text": "Otra forma de configurar el <code>sudoers</code> es a través del directorio <code>sudoers.d</code>. En este directorio se pueden crear configuraciones adicionales en un archivo separado, permitiendo una mejor organización y modularidad, pero dicha práctica no pertenece a esta cursada."
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-11-1",
            "q": "SUDO permite ejecutar comandos con privilegios de administrador sin necesidad de iniciar sesión directamente como root.",
            "a": true,
            "explain": "Esa es justamente su función: correr comandos con privilegios sin cambiar directamente al usuario root, sumando una capa de seguridad y control."
          },
          {
            "id": "tf-11-2",
            "q": "Se recomienda editar el archivo /etc/sudoers directamente con un editor de texto común en lugar de visudo.",
            "a": false,
            "explain": "Se recomienda usar visudo porque verifica la sintaxis antes de guardar los cambios, evitando romper la configuración."
          },
          {
            "id": "tf-11-3",
            "q": "La opción env_reset restablece todas las variables de entorno del usuario antes de ejecutar un comando con SUDO.",
            "a": true,
            "explain": "Correcto, env_reset limpia el entorno del usuario antes de correr el comando con SUDO."
          },
          {
            "id": "tf-11-4",
            "q": "El valor default de timestamp_timeout es siempre de 15 minutos en todas las distribuciones.",
            "a": false,
            "explain": "Puede variar según la distribución, pero el default indicado es de 5 minutos, no 15."
          },
          {
            "id": "tf-11-5",
            "q": "Los privilegios por grupo se configuran agregando el símbolo % delante del nombre del grupo.",
            "a": true,
            "explain": "En el caso de privilegios por grupo deben agregarse con el símbolo % delante del grupo, con la misma configuración que para usuarios."
          }
        ],
        "mc": [
          {
            "id": "mc-11-1",
            "q": "¿De qué proviene el nombre \"SUDO\"?",
            "options": [
              "Super User DO",
              "System User Domain",
              "Substitute User DO",
              "Secure User Directory"
            ],
            "correctIndex": 0,
            "explain": "SUDO viene de \"Superuser DO\"."
          },
          {
            "id": "mc-11-2",
            "q": "¿Cuál es el archivo principal donde se maneja la configuración de SUDO?",
            "options": [
              "/etc/passwd",
              "/etc/sudoers",
              "/etc/sudo.conf",
              "/var/sudoers"
            ],
            "correctIndex": 1,
            "explain": "La configuración de SUDO se maneja principalmente a través del archivo /etc/sudoers."
          },
          {
            "id": "mc-11-3",
            "q": "¿Qué hace la opción mail_badpass en la sección Defaults?",
            "options": [
              "Bloquea al usuario tras un intento fallido",
              "Envía un correo al administrador si un usuario ingresa una contraseña incorrecta",
              "Reinicia las variables de entorno",
              "Define un PATH seguro para el superusuario"
            ],
            "correctIndex": 1,
            "explain": "mail_badpass envía un correo al administrador si un usuario ingresa una contraseña incorrecta al ejecutar un comando con SUDO."
          },
          {
            "id": "mc-11-4",
            "q": "En la regla \"alumno ALL = (ALL:ALL) ALL\", ¿a qué se refiere el primer ALL (1er)?",
            "options": [
              "A los comandos que puede ejecutar",
              "A las máquinas en las que la regla es válida",
              "Al grupo bajo el cual corre el comando",
              "Al usuario como el cual se ejecuta"
            ],
            "correctIndex": 1,
            "explain": "El 1er ALL= se refiere a las máquinas en las que la regla es válida; ALL indica todas las máquinas."
          }
        ],
        "ms": [
          {
            "id": "ms-11-1",
            "q": "¿Cuáles de las siguientes son características de SUDO mencionadas en el apunte?",
            "options": [
              "Control de acceso granular",
              "Registro de actividad para auditorías",
              "Temporalidad de permisos",
              "Cifrado del disco por defecto",
              "Minimiza riesgos de acceso directo a root"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "El apunte lista control de acceso, registro de actividad, temporalidad y minimización de riesgos. El cifrado del disco no es una característica de SUDO."
          },
          {
            "id": "ms-11-2",
            "q": "¿Cuáles son opciones válidas de la sección Defaults del sudoers?",
            "options": [
              "env_reset",
              "mail_badpass",
              "secure_path",
              "timestamp_timeout",
              "reboot_now"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              3
            ],
            "explain": "env_reset, mail_badpass, secure_path y timestamp_timeout son opciones de Defaults. \"reboot_now\" no existe en el apunte."
          },
          {
            "id": "ms-11-3",
            "q": "¿Qué tipos de alias se pueden definir en la configuración de SUDO?",
            "options": [
              "host_alias",
              "user_alias",
              "cmnd_alias",
              "group_alias",
              "path_alias"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explain": "Se pueden definir alias para host (host_alias), usuarios (user_alias) y comandos (cmnd_alias). group_alias y path_alias no se mencionan."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-11-1",
          "front": "¿Qué significa SUDO?",
          "back": "Viene de \"Superuser DO\". Permite ejecutar comandos con privilegios de administrador sin iniciar sesión directamente como root."
        },
        {
          "id": "fc-11-2",
          "front": "Archivo de configuración de SUDO",
          "back": "La configuración se maneja principalmente en /etc/sudoers, que define qué usuarios y grupos pueden usar SUDO y qué comandos ejecutar."
        },
        {
          "id": "fc-11-3",
          "front": "¿Por qué usar visudo?",
          "back": "Porque verifica la sintaxis del archivo sudoers antes de guardar los cambios, evitando dejar la configuración rota."
        },
        {
          "id": "fc-11-4",
          "front": "env_reset",
          "back": "Opción de Defaults que restablece todas las variables de entorno del usuario antes de ejecutar un comando con SUDO."
        },
        {
          "id": "fc-11-5",
          "front": "timestamp_timeout",
          "back": "Tiempo en minutos que se recuerda la contraseña antes de pedirla de nuevo. El default es 5 min, aunque puede variar según la distribución."
        },
        {
          "id": "fc-11-6",
          "front": "Tipos de alias en SUDO",
          "back": "host_alias (agrupa hosts), user_alias (agrupa usuarios) y cmnd_alias (agrupa comandos), para hacer la config más legible."
        },
        {
          "id": "fc-11-7",
          "front": "alumno ALL = (ALL:ALL) ALL",
          "back": "El usuario alumno puede ejecutar cualquier comando en cualquier máquina, como cualquier usuario y en cualquier grupo."
        },
        {
          "id": "fc-11-8",
          "front": "Privilegios por grupo",
          "back": "Se configuran agregando el símbolo % delante del nombre del grupo, con la misma sintaxis que para los usuarios."
        }
      ]
    },
    {
      "id": "12",
      "unit": "2",
      "title": "Administración de usuarios",
      "criollo": "Linux es multiusuario, así que administrar bien las cuentas no es opcional: es seguridad. Acá ves los tres tipos de usuario (root, especiales y normales), los tres archivos clave en <code>/etc</code> (passwd, shadow, group) y los comandos para crear, modificar y borrar. De yapa, cómo recuperar la clave de root desde GRUB cuando quedaste afuera.",
      "blocks": [
        {
          "type": "p",
          "text": "GNU/Linux es un sistema <strong>multiusuario</strong>: el sistema operativo puede proveer servicio y procesamiento a múltiples usuarios en simultáneo. En general cada usuario solo tiene acceso a sus espacios de trabajo y permisos plenos sobre estos, pero dependiendo de las necesidades algunos pueden adquirir privilegios más elevados según el rol asignado. Por eso la administración de usuarios es fundamental: no solo para que cada uno cumpla sus funciones, sino en el aspecto de seguridad, ya que una mala administración puede provocar vulnerabilidades en el sistema."
        },
        {
          "type": "h3",
          "text": "Tipos de usuarios",
          "criollo": "Cada usuario tiene su DNI numérico (UID) y arranca en un grupo con su mismo nombre (GID)."
        },
        {
          "type": "p",
          "text": "En Linux los usuarios se identifican con un ID único por usuario llamado <strong>UID</strong> (User ID). Cada usuario pertenece a un grupo principal identificado con el mismo nombre del usuario. Los grupos también tienen su identificador único, conocido como <strong>GID</strong> (Group ID). Además de su grupo principal, un usuario puede pertenecer a más de un grupo."
        },
        {
          "type": "p",
          "text": "Dentro del sistema operativo se identifican tres tipos de usuarios:"
        },
        {
          "type": "ol",
          "items": [
            "Usuario root.",
            "Usuarios especiales.",
            "Usuarios normales."
          ]
        },
        {
          "type": "h3",
          "text": "Usuario root"
        },
        {
          "type": "p",
          "text": "El usuario <strong>root</strong> es el superusuario del sistema y tiene acceso ilimitado. Puede realizar cualquier operación, incluyendo leer, escribir y ejecutar en todos los archivos y directorios, y hacer configuraciones críticas. Su <strong>UID es 0</strong>, ya que es el primer usuario creado al momento de la instalación. El uso indebido de root puede provocar daños irreparables si no se lo utiliza responsablemente, por lo que es buena práctica desaconsejar su uso directo en tareas diarias."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Si se requieren tareas administrativas, lo aconsejable es usar el programa <code>sudo</code> en lugar de operar directamente como root."
        },
        {
          "type": "h3",
          "text": "Usuarios especiales (o no-login)"
        },
        {
          "type": "p",
          "text": "Existen usuarios del sistema que no están destinados a iniciar sesión, conocidos como <strong>usuarios especiales</strong> o <strong>no-login</strong> (también usuarios de servicio). Su propósito es ejecutar servicios o tareas automatizadas como apache, mysql, postfix, sshd, entre otros. Sus UID o GID suelen estar entre el número reservado <strong>1 y 100</strong>, definidos en <code>/etc/login.defs</code>. No tienen privilegios de root, pero dependiendo de la cuenta asumen distintos privilegios. Habitualmente encontramos usuarios como <code>www-data</code>, <code>sshd</code>, <code>daemon</code>, <code>nobody</code>, etc."
        },
        {
          "type": "h3",
          "text": "Usuarios normales"
        },
        {
          "type": "p",
          "text": "Son creados por los administradores para ser utilizados por personas con necesidades de acceso e interacción con el sistema. Sus UID están en el rango comúnmente <strong>superior a 1000</strong> y tienen permisos plenos sobre sus espacios de trabajo. A cada usuario normal se le crea un <strong>home</strong> con su nombre de login en el directorio <code>/home</code>, donde puede almacenar sus archivos y configuraciones. Es importante mencionar que para el usuario root su home está ubicado en <code>/</code> (llamado <code>/root</code>), y no en los mismos directorios que los usuarios normales."
        },
        {
          "type": "h3",
          "text": "Archivos importantes",
          "criollo": "Toda la data de las cuentas vive en tres archivos de texto en /etc."
        },
        {
          "type": "p",
          "text": "La configuración de los usuarios se almacena en tres archivos fundamentales que se ubican en el directorio <code>/etc</code>: <code>passwd</code>, <code>shadow</code> y <code>group</code>."
        },
        {
          "type": "h3",
          "text": "/etc/passwd"
        },
        {
          "type": "p",
          "text": "Todos los usuarios se almacenan en este archivo, con una línea por usuario que contiene la información específica para su constitución en el sistema."
        },
        {
          "type": "code",
          "code": "root:x:0:0:root:/root:/bin/bash\nalumno:x:1000:1000:Usuario Alumno:/home/alumno:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin"
        },
        {
          "type": "p",
          "text": "La información de cada usuario está dividida en <strong>siete campos</strong> separados por dos puntos (<code>:</code>):"
        },
        {
          "type": "ol",
          "items": [
            "<strong>Login de usuario</strong>: la cuenta con la que entrará al sistema.",
            "<strong>x</strong>: indica que la contraseña está almacenada y encriptada en el archivo <code>shadow</code>.",
            "<strong>UID</strong>: identificador de usuario único.",
            "<strong>GID</strong>: identificador de grupo único.",
            "<strong>Descripción del usuario</strong>: campo informativo, por ejemplo el nombre completo del usuario.",
            "<strong>Home</strong>: el directorio home asignado al usuario para guardar sus archivos.",
            "<strong>Shell predeterminado</strong>: shell que se asigna al usuario al inicio de sesión."
          ]
        },
        {
          "type": "h3",
          "text": "/etc/shadow"
        },
        {
          "type": "p",
          "text": "El archivo <code>shadow</code> contiene información confidencial sobre las contraseñas de los usuarios y configuraciones relacionadas con la expiración. Cada línea corresponde a un usuario."
        },
        {
          "type": "code",
          "code": "root:$y$j9T$thJFLbRmvGCqv4bXL1OWWtBk/WIUEBOlxug83:19992:0:99999:7:::\nalumno:$y$j9T$iGXw1AS5pSsngSgule7VjJgQUWZvLn7597H5:19985:0:99999:7:::\nwww-data:*:19981:0:99999:7:::"
        },
        {
          "type": "p",
          "text": "La información de cada usuario está dividida en <strong>nueve campos</strong> delimitados por dos puntos (<code>:</code>):"
        },
        {
          "type": "ol",
          "items": [
            "<strong>Login de usuario</strong>: nombre de la cuenta.",
            "<strong>Hash alfanumérico</strong>: el password encriptado. Un <code>*</code> indica cuenta de no-login.",
            "<strong>Último cambio</strong>: días transcurridos desde el 01/01/1970 hasta la fecha en que la contraseña fue cambiada por última vez.",
            "<strong>Mínimo de días</strong>: días mínimos que deben transcurrir antes de poder cambiar la contraseña de nuevo.",
            "<strong>Máximo de días</strong>: días máximos que se permite usar una contraseña antes de que sea necesario cambiarla.",
            "<strong>Días de aviso</strong>: días antes de la expiración en que se advierte al usuario que su contraseña caducará.",
            "<strong>Días de inactividad</strong>: días de inactividad tras la expiración de la contraseña antes de desactivarla.",
            "<strong>Días de expiración</strong>: días desde el 01/01/1970 tras los cuales la cuenta se desactivará. Generalmente vacío, o con un valor numérico si hay una fecha de expiración especificada.",
            "<strong>Reservado</strong>: campo reservado para uso futuro."
          ]
        },
        {
          "type": "h3",
          "text": "/etc/group"
        },
        {
          "type": "p",
          "text": "El archivo <code>group</code> contiene la información sobre los grupos del sistema. Cada línea corresponde a un grupo."
        },
        {
          "type": "code",
          "code": "root:x:0:\nalumno:x:1000:\nwww-data:x:33:\nTecnologia:x:1002:alumno,jperez"
        },
        {
          "type": "p",
          "text": "A diferencia del resto de los archivos, la información está dividida en <strong>3 campos</strong>, y el último se separa por comas (<code>,</code>) para listar los miembros:"
        },
        {
          "type": "ol",
          "items": [
            "<strong>Login de usuario</strong>: nombre de la cuenta (del grupo).",
            "<strong>x</strong>: indica que la contraseña del grupo no existe; si hubiera, se mostraría un hash encriptado.",
            "<strong>ID del grupo (GID)</strong>: ID de identificación único del grupo.",
            "<strong>Grupos</strong>: almacena el o los usuarios, separados por comas, que pertenecen al grupo."
          ]
        },
        {
          "type": "h3",
          "text": "Comandos de administración",
          "criollo": "La caja de herramientas para crear, tocar y borrar usuarios y grupos."
        },
        {
          "type": "p",
          "text": "Comandos principales para la administración de usuarios y grupos."
        },
        {
          "type": "h3",
          "text": "useradd (o adduser)"
        },
        {
          "type": "p",
          "text": "Comando para crear un nuevo usuario. Sus opciones principales:"
        },
        {
          "type": "table",
          "caption": "Flags de useradd",
          "headers": [
            "Flag",
            "Descripción"
          ],
          "rows": [
            [
              "-c",
              "Añade un comentario al crear al usuario. Ejemplo: nombre completo."
            ],
            [
              "-d",
              "Define dónde generar el home del usuario."
            ],
            [
              "-G",
              "Grupos a los que puede pertenecer el usuario, separados por comas."
            ],
            [
              "-r",
              "Crea cuentas de usuarios especiales."
            ],
            [
              "-s",
              "Define el shell por defecto del usuario cuando ingresa al sistema."
            ],
            [
              "-u",
              "Define el UID del usuario; si no se especifica, asigna uno automáticamente."
            ],
            [
              "-m",
              "Genera el directorio home del usuario automáticamente."
            ]
          ]
        },
        {
          "type": "code",
          "code": "useradd -m -s /bin/bash -c \"Juan Perez\" jperez\n\ncat /etc/passwd\njperez:x:1002:1003:Juan Perez:/home/jperez:/bin/bash"
        },
        {
          "type": "h3",
          "text": "usermod"
        },
        {
          "type": "p",
          "text": "Permite modificar las propiedades de un usuario:"
        },
        {
          "type": "table",
          "caption": "Flags de usermod",
          "headers": [
            "Flag",
            "Descripción"
          ],
          "rows": [
            [
              "-c",
              "Modifica la descripción."
            ],
            [
              "-d",
              "Modifica el directorio home del usuario."
            ],
            [
              "-G",
              "Establece otros grupos a los que puede pertenecer el usuario."
            ],
            [
              "-L",
              "Bloquea la cuenta del usuario."
            ],
            [
              "-U",
              "Desbloquea la cuenta del usuario."
            ],
            [
              "-s",
              "Modifica el shell por defecto del usuario."
            ]
          ]
        },
        {
          "type": "code",
          "code": "usermod -aG Tecnologia jperez\n\ncat /etc/group\nTecnologia:x:1002:,alumno,jperez"
        },
        {
          "type": "h3",
          "text": "Otros comandos"
        },
        {
          "type": "ul",
          "items": [
            "<code>userdel</code>: elimina un usuario del sistema. Sin opción, solo elimina la cuenta y deja los archivos personales. Con <code>-r</code> elimina la cuenta y el directorio de trabajo (home).",
            "<code>passwd</code>: permite ingresar una nueva contraseña.",
            "<code>groupadd</code>: crea un grupo nuevo.",
            "<code>groupdel</code>: elimina grupos del sistema.",
            "<code>groupmod</code>: modifica grupos del sistema.",
            "<code>groups</code>: muestra los grupos a los que pertenece el usuario."
          ]
        },
        {
          "type": "h3",
          "text": "Recuperación de la contraseña de root desde GRUB",
          "criollo": "Quedaste afuera sin la clave de root: booteás en un shell mínimo con permisos de superusuario y la reseteás."
        },
        {
          "type": "p",
          "text": "En ciertas situaciones puede ser necesario restablecer la contraseña de root, especialmente cuando se perdió o no se tiene acceso directo. En sistemas basados en Debian es posible hacerlo desde el gestor de arranque <strong>GRUB</strong>, iniciando el sistema en un entorno mínimo y con permisos de superusuario."
        },
        {
          "type": "ol",
          "items": [
            "Reiniciar la máquina virtual (o física, si fuera el caso).",
            "En el menú de GRUB, antes de que el contador llegue a 0, presionar la letra <code>E</code> para editar temporalmente las opciones de arranque.",
            "Dentro del editor, localizar la línea que comienza con <code>linux /boot/vmlinuz-… ro quiet</code>.",
            "Sobre esa línea, al final, borrar <code>ro quiet</code> y agregar <code>rw init=/bin/bash</code>; luego presionar <code>F10</code>.",
            "Una vez con el prompt disponible, establecer la nueva contraseña de root con el comando <code>passwd</code>.",
            "Por último, reiniciar la máquina con <code>exec /sbin/init</code> (a diferencia de un arranque normal)."
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "El parámetro <code>init=/bin/bash</code> indica que, en lugar de iniciar el proceso normal del sistema, se use directamente el intérprete de comandos bash como proceso inicial, otorgando acceso directo al shell con privilegios de root. El sistema arranca en un shell muy básico donde el directorio raíz <code>/</code> queda montado en modo lectura-escritura (read and write)."
        },
        {
          "type": "callout",
          "tone": "criollo",
          "text": "Ojo con esto: si cualquiera con acceso físico puede editar GRUB, puede resetear la clave de root. Por eso en entornos serios se protege el propio GRUB con contraseña."
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-12-1",
            "q": "El usuario root tiene UID 0 porque es el primer usuario creado durante la instalación.",
            "a": true,
            "explain": "El apunte indica que root es el superusuario, con acceso ilimitado y UID 0 por ser el primer usuario creado al instalar el sistema."
          },
          {
            "id": "tf-12-2",
            "q": "El home del usuario root está ubicado dentro de /home, igual que el de los usuarios normales.",
            "a": false,
            "explain": "Falso: el home de root está en /root (bajo /), no en /home como los usuarios normales."
          },
          {
            "id": "tf-12-3",
            "q": "En el archivo /etc/shadow, un asterisco (*) en el campo del hash indica una cuenta de no-login.",
            "a": true,
            "explain": "El hash alfanumérico representa el password encriptado; si hubiera un * indicaría una cuenta de no-login."
          },
          {
            "id": "tf-12-4",
            "q": "La opción -r del comando userdel elimina únicamente la cuenta y conserva el directorio home.",
            "a": false,
            "explain": "Falso: sin opción, userdel deja los archivos personales; con -r elimina la cuenta y también el directorio home."
          },
          {
            "id": "tf-12-5",
            "q": "Los UID de los usuarios normales suelen estar en un rango superior a 1000.",
            "a": true,
            "explain": "Los usuarios normales tienen UID comúnmente superior a 1000, mientras que los especiales suelen ubicarse entre 1 y 100."
          }
        ],
        "mc": [
          {
            "id": "mc-12-1",
            "q": "¿En cuántos campos está dividida la información de cada usuario en el archivo /etc/passwd?",
            "options": [
              "Tres campos",
              "Siete campos",
              "Nueve campos",
              "Cinco campos"
            ],
            "correctIndex": 1,
            "explain": "passwd divide la info en siete campos separados por dos puntos; shadow usa nueve y group usa tres."
          },
          {
            "id": "mc-12-2",
            "q": "¿Qué comando se usa para agregar un usuario a un grupo adicional sin quitarlo de los que ya tenía?",
            "options": [
              "useradd -G",
              "usermod -aG",
              "groupadd -m",
              "userdel -r"
            ],
            "correctIndex": 1,
            "explain": "El ejemplo del apunte usa usermod -aG Tecnologia jperez para añadir al usuario a un grupo adicional."
          },
          {
            "id": "mc-12-3",
            "q": "Al recuperar la contraseña de root desde GRUB, ¿qué se agrega al final de la línea que comienza con linux tras borrar \"ro quiet\"?",
            "options": [
              "rw init=/bin/bash",
              "ro single mode",
              "rw recovery=root",
              "init=/sbin/init"
            ],
            "correctIndex": 0,
            "explain": "Se borra \"ro quiet\" y se agrega \"rw init=/bin/bash\", que arranca directamente en bash con root y el raíz montado en lectura-escritura."
          },
          {
            "id": "mc-12-4",
            "q": "¿Dónde suelen estar definidos los números reservados (1 a 100) para los UID/GID de usuarios especiales?",
            "options": [
              "/etc/passwd",
              "/etc/group",
              "/etc/login.defs",
              "/root/.bashrc"
            ],
            "correctIndex": 2,
            "explain": "El apunte indica que los UID/GID de usuarios especiales suelen estar entre 1 y 100, definidos en /etc/login.defs."
          }
        ],
        "ms": [
          {
            "id": "ms-12-1",
            "q": "¿Cuáles son los tres archivos fundamentales de configuración de usuarios ubicados en /etc?",
            "options": [
              "passwd",
              "shadow",
              "login.defs",
              "group",
              "sudoers"
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explain": "Los tres archivos fundamentales son passwd, shadow y group. login.defs define rangos de UID pero no es uno de los tres archivos de configuración de usuarios citados."
          },
          {
            "id": "ms-12-2",
            "q": "¿Cuáles de los siguientes son tipos de usuarios descritos en el apunte?",
            "options": [
              "Usuario root",
              "Usuarios especiales (o no-login)",
              "Usuarios normales",
              "Usuarios invitados",
              "Usuarios anónimos"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explain": "El apunte identifica tres tipos: root, especiales (no-login) y normales. Invitados y anónimos no figuran."
          },
          {
            "id": "ms-12-3",
            "q": "¿Qué acciones permite realizar el comando usermod según los flags del apunte?",
            "options": [
              "Bloquear la cuenta del usuario (-L)",
              "Desbloquear la cuenta del usuario (-U)",
              "Modificar el shell por defecto (-s)",
              "Crear un grupo nuevo",
              "Modificar la descripción (-c)"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "usermod permite bloquear (-L), desbloquear (-U), modificar el shell (-s) y la descripción (-c). Crear un grupo nuevo corresponde a groupadd."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-12-1",
          "front": "UID de root",
          "back": "El usuario root tiene UID 0 por ser el primer usuario creado en la instalación. Es el superusuario con acceso ilimitado al sistema."
        },
        {
          "id": "fc-12-2",
          "front": "UID vs GID",
          "back": "UID (User ID) identifica de forma única a cada usuario; GID (Group ID) identifica de forma única a cada grupo. Cada usuario pertenece a un grupo principal con su mismo nombre."
        },
        {
          "id": "fc-12-3",
          "front": "Usuarios especiales (no-login)",
          "back": "Cuentas del sistema no destinadas a iniciar sesión, usadas para ejecutar servicios (apache, mysql, sshd, www-data). Sus UID/GID suelen estar entre 1 y 100."
        },
        {
          "id": "fc-12-4",
          "front": "Home de usuarios normales",
          "back": "A cada usuario normal se le crea un home con su nombre de login en /home. El de root, en cambio, está en /root bajo la raíz."
        },
        {
          "id": "fc-12-5",
          "front": "Campos de /etc/passwd",
          "back": "Siete campos separados por dos puntos: login, x (password en shadow), UID, GID, descripción, home y shell predeterminado."
        },
        {
          "id": "fc-12-6",
          "front": "Campos de /etc/group",
          "back": "Tres campos separados por dos puntos: nombre del grupo, x (sin contraseña), GID; y una lista de miembros separados por comas al final."
        },
        {
          "id": "fc-12-7",
          "front": "useradd -m -s -c",
          "back": "-m genera el home automáticamente, -s define el shell por defecto y -c añade un comentario (ej. nombre completo). Ejemplo: useradd -m -s /bin/bash -c \"Juan Perez\" jperez."
        },
        {
          "id": "fc-12-8",
          "front": "userdel -r",
          "back": "Sin opción, userdel elimina solo la cuenta y deja los archivos personales. Con -r elimina también el directorio home del usuario."
        },
        {
          "id": "fc-12-9",
          "front": "Reset de clave root en GRUB",
          "back": "Presionar E en GRUB, reemplazar \"ro quiet\" por \"rw init=/bin/bash\", F10, ejecutar passwd para la nueva clave y reiniciar con exec /sbin/init."
        }
      ]
    },
    {
      "id": "13",
      "unit": "3",
      "title": "Redirecciones y pipes",
      "criollo": "Acá va toda la magia de agarrar la salida de un comando y mandarla a un archivo en vez de la pantalla, o al revés, leer desde un archivo. Con los símbolos <code>&gt;</code>, <code>&gt;&gt;</code>, <code>&lt;</code> y el pipe <code>|</code> encadenás comandos y filtrás como un capo. De yapa, cómo buscar archivos con find y locate.",
      "blocks": [
        {
          "type": "p",
          "text": "Con el manejo de streams en Linux se comprende de forma más precisa el uso del redireccionamiento. Al poder manejar los flujos de entrada o de salida de los comandos o programas, Linux nos permite almacenar el resultado en un archivo para luego analizarlo, o enviar los errores a otro archivo. Incluso podríamos enviar la salida de un comando como entrada de otro para obtener un resultado eficaz."
        },
        {
          "type": "p",
          "text": "Existen cuatro tipos de redireccionamiento:"
        },
        {
          "type": "table",
          "headers": [
            "Símbolo",
            "Nombre"
          ],
          "rows": [
            [
              "<code>&gt;</code>",
              "Mayor"
            ],
            [
              "<code>&gt;&gt;</code>",
              "Doble mayor"
            ],
            [
              "<code>&lt;</code>",
              "Menor"
            ],
            [
              "<code>|</code>",
              "Pipe"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "> Mayor",
          "criollo": "Manda la salida a un archivo en vez de a la pantalla, pero pisa lo que había."
        },
        {
          "type": "p",
          "text": "El <code>&gt;</code> (mayor) permite que, en vez de que el resultado de un comando se muestre en pantalla, se pueda almacenar en un archivo u otro dispositivo."
        },
        {
          "type": "code",
          "code": "ls -l /etc > archivo_ls"
        },
        {
          "type": "p",
          "text": "Si el archivo no existiese, este se crea automáticamente y se rellena con lo que le enviamos. Si, por el contrario, el archivo ya estuviera creado, este sería eliminado y vuelto a generar con el nuevo contenido."
        },
        {
          "type": "h3",
          "text": ">> Doble mayor",
          "criollo": "Igual que el mayor pero agrega al final sin borrar nada."
        },
        {
          "type": "p",
          "text": "El <code>&gt;&gt;</code> (doble mayor) permite añadir el contenido de la salida a un archivo ya existente, o crearlo en caso de no existir."
        },
        {
          "type": "code",
          "code": "ls -l /var >> archivo_ls"
        },
        {
          "type": "p",
          "text": "En este caso, al final del archivo llamado <code>archivo_ls</code> (donde antes direccionamos la salida del contenido de <code>/etc</code>) se añade, a continuación de la última línea, la salida del comando <code>ls -l</code> que muestra el contenido del directorio <code>/var</code>."
        },
        {
          "type": "h3",
          "text": "< Menor",
          "criollo": "Al revés: el comando lee desde un archivo en vez del teclado."
        },
        {
          "type": "p",
          "text": "El <code>&lt;</code> (menor) permite al comando leer la información a procesar desde un archivo u otro dispositivo, en lugar de leer los datos directamente desde el teclado o el <code>stdin</code>."
        },
        {
          "type": "code",
          "code": "cat < archivo_ls"
        },
        {
          "type": "p",
          "text": "Esto indica que el comando <code>cat</code> debe leer desde <code>archivo_ls</code> en lugar del teclado."
        },
        {
          "type": "h3",
          "text": "Redireccionamiento de stderr (Standard Error)",
          "criollo": "El error tiene su propio canal, el número 2, y lo podés mandar aparte."
        },
        {
          "type": "p",
          "text": "El stream correspondiente al <strong>StdErr</strong> está identificado con el número <strong>2</strong>, y podemos utilizarlo para redirigir los errores hacia un archivo. Para esto agregamos el número del stderr a la redirección del mayor. Por ejemplo, si queremos listar un directorio inexistente obtendremos un mensaje de error:"
        },
        {
          "type": "code",
          "code": "ls /directorio_nuevo\nls: cannot access '/directorio_nuevo': No such file or directory"
        },
        {
          "type": "p",
          "text": "Pero si redirigimos el stderr de la siguiente forma, no obtendremos el mensaje por el stdout, sino que lo enviaremos al archivo recién creado llamado <code>error.log</code>:"
        },
        {
          "type": "code",
          "code": "ls /directorio_nuevo 2> error.log\ncat error.log\nls: cannot access '/directorio_nuevo': No such file or directory"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Cuando usamos el símbolo <code>&gt;</code> para redirigir el stdout a un archivo, implícitamente asumimos la colocación del número <strong>1</strong> delante del mayor: <code>ls /directorio_nuevo 1&gt; salida.log</code>."
        },
        {
          "type": "h3",
          "text": "Otros tipos de redireccionamiento",
          "criollo": "El /dev/null es el agujero negro donde tirás lo que no querés ver."
        },
        {
          "type": "p",
          "text": "Dentro de Linux hay un dispositivo conocido como <strong>null</strong>, que se encuentra en el directorio <code>/dev</code>. Este dispositivo actúa como un <strong>agujero negro</strong> dentro del sistema operativo: cualquier cosa enviada ahí se pierde para siempre. Es útil cuando queremos descartar los errores y quedarnos solo con los mensajes que nos interesan."
        },
        {
          "type": "p",
          "text": "Ejemplos de redireccionamiento múltiple:"
        },
        {
          "type": "ul",
          "items": [
            "<code>ls /directorio_nuevo &gt;&gt; salida.txt 2&gt; error.log</code>: stdout es enviado a <code>salida.txt</code> y stderr a <code>error.log</code>.",
            "<code>ls /directorio_nuevo &gt;&gt; salida.txt 2&gt; /dev/null</code>: stdout es enviado a <code>salida.txt</code> y stderr es descartado.",
            "<code>ls /directorio_nuevo &amp;&gt; salida.txt</code>: stdout y stderr son enviados a <code>salida.txt</code> (en versiones de bash 4.0 en adelante).",
            "<code>ls /directorio_nuevo &gt; salida.txt 2&gt;&amp;1</code>: stdout y stderr a <code>salida.txt</code> (compatibilidad con versiones anteriores de bash y otros shells)."
          ]
        },
        {
          "type": "h3",
          "text": "Pipes",
          "criollo": "La salida de uno es la entrada del otro: encadenás comandos como quieras."
        },
        {
          "type": "p",
          "text": "El <strong>pipe</strong> <code>|</code> permite enviar la salida de un comando como entrada de otro, encadenando comandos como sea necesario. De esta manera, la salida de cada comando (<code>stdout</code>) se convierte en la entrada del siguiente (<code>stdin</code>)."
        },
        {
          "type": "p",
          "text": "Cuando se analizan logs o cualquier archivo con múltiples líneas, es muy útil combinar pipes con filtros para obtener información de forma más eficiente. Algunos ejemplos:"
        },
        {
          "type": "code",
          "code": "cat /var/log/dpkg.log | grep \"installed\"\ncat archivo_ls | head -n 2"
        },
        {
          "type": "ul",
          "items": [
            "<code>cat /var/log/dpkg.log | grep \"installed\"</code>: busca en el archivo <code>dpkg.log</code> toda línea que cumpla con el patrón <code>installed</code>.",
            "<code>cat archivo_ls | head -n 2</code>: muestra las 2 primeras líneas del archivo llamado <code>archivo_ls</code>."
          ]
        },
        {
          "type": "h3",
          "text": "Buscar en Linux: find",
          "criollo": "Busca en serio, recorriendo todo el sistema con mil criterios."
        },
        {
          "type": "p",
          "text": "Para realizar búsquedas dentro de la estructura de archivos y directorios en Linux, podemos utilizar buscadores como <code>find</code> o <code>locate</code>. El comando <code>find</code> permite buscar archivos y directorios dentro del sistema de archivos de manera exhaustiva. Es muy versátil y flexible: permite buscar en función de varios criterios como el nombre, la fecha de modificación, el tipo de archivo, el tamaño, entre otras opciones. Además, puede ejecutar acciones específicas teniendo como parámetros los archivos encontrados."
        },
        {
          "type": "code",
          "code": "find [ruta] [opciones] [acción]"
        },
        {
          "type": "ul",
          "items": [
            "<strong>ruta</strong>: directorio donde comienza la búsqueda; si no se especifica, comienza en el lugar donde estemos posicionados.",
            "<strong>opciones</strong>: controlan la búsqueda.",
            "<strong>acción</strong>: qué hacer con los archivos encontrados (eliminarlos, moverlos, comprimirlos, etc.)."
          ]
        },
        {
          "type": "table",
          "caption": "Opciones de find",
          "headers": [
            "Opción",
            "Qué hace"
          ],
          "rows": [
            [
              "<code>-name</code>",
              "Busca archivos por nombre específicamente."
            ],
            [
              "<code>-iname</code>",
              "Busca archivos por nombre, ignorando mayúsculas y minúsculas."
            ],
            [
              "<code>-type f</code>",
              "Busca archivos (files)."
            ],
            [
              "<code>-type d</code>",
              "Busca directorios (directory)."
            ],
            [
              "<code>-size</code>",
              "Busca por tamaño (ej: <code>-size +100M</code> mayores a 100 MB; <code>-size -500k</code> menores a 500 KB)."
            ],
            [
              "<code>-mtime</code>",
              "Busca por días modificados (ej: <code>-mtime -7</code> últimos 7 días; <code>-mtime +30</code> hace más de 30 días)."
            ],
            [
              "<code>-perm</code>",
              "Busca archivos con permisos específicos (ej: <code>-perm 755</code>)."
            ]
          ]
        },
        {
          "type": "p",
          "text": "Entre las acciones, <code>-exec</code> ejecuta un comando sobre cada archivo encontrado. Se debe utilizar <code>{}</code> como marcador de posición para el nombre del archivo. Y <code>-delete</code> elimina los archivos encontrados."
        },
        {
          "type": "code",
          "code": "find /home/alumno -name \"*.txt\" -exec cp {} /backup/ \\;\nfind /var/log -name \"*.log\" -delete"
        },
        {
          "type": "ul",
          "items": [
            "El primer ejemplo copia los archivos con extensión <code>.txt</code> del directorio especificado al directorio <code>backup</code>.",
            "El segundo ejemplo borra del directorio especificado los archivos <code>.log</code>."
          ]
        },
        {
          "type": "h3",
          "text": "Buscar en Linux: locate",
          "criollo": "Mucho más rápido que find, pero depende de una base de datos que hay que actualizar."
        },
        {
          "type": "p",
          "text": "El comando <code>locate</code> es parte de un programa llamado <strong>mlocate</strong>. Es mucho más rápido que <code>find</code> porque utiliza una base de datos propia, previamente indexada, de los archivos del sistema. Esto permite obtener resultados en cuestión de segundos, pero depende de la actualización de la base de datos."
        },
        {
          "type": "callout",
          "tone": "warning",
          "text": "<strong>mlocate</strong> generalmente no está instalado por defecto. Para usarlo hay que instalarlo previamente. Luego se debe actualizar la base con el comando <code>updatedb</code> (siendo root o teniendo permisos de administrador)."
        },
        {
          "type": "code",
          "code": "locate [nombre del archivo]"
        },
        {
          "type": "table",
          "caption": "Comparación: find y locate",
          "headers": [
            "Comando",
            "Ventaja principal",
            "Desventaja"
          ],
          "rows": [
            [
              "find",
              "Búsqueda exhaustiva, permite usar criterios avanzados y ejecutar acciones.",
              "Más lento, ya que busca en tiempo real en el sistema de archivos."
            ],
            [
              "locate",
              "Muy rápido, útil para búsquedas generales.",
              "Depende de una base de datos que debe actualizarse para estar al día."
            ]
          ]
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-13-1",
            "q": "El símbolo > añade la salida al final de un archivo existente sin borrar su contenido.",
            "a": false,
            "explain": "Falso. El > pisa el archivo: si ya existía, es eliminado y vuelto a generar. Para añadir al final se usa >>."
          },
          {
            "id": "tf-13-2",
            "q": "El stream de StdErr está identificado con el número 2.",
            "a": true,
            "explain": "Verdadero. Por eso se redirige con 2>, por ejemplo: ls /directorio_nuevo 2> error.log."
          },
          {
            "id": "tf-13-3",
            "q": "Cualquier cosa enviada a /dev/null se pierde para siempre.",
            "a": true,
            "explain": "Verdadero. /dev/null actúa como un agujero negro; sirve para descartar errores y quedarnos solo con los mensajes útiles."
          },
          {
            "id": "tf-13-4",
            "q": "El comando locate es más lento que find porque busca en tiempo real en el sistema de archivos.",
            "a": false,
            "explain": "Falso. locate es mucho más rápido porque usa una base de datos previamente indexada; find es el que busca en tiempo real."
          },
          {
            "id": "tf-13-5",
            "q": "Al usar > para redirigir el stdout, implícitamente se asume el número 1 delante del mayor.",
            "a": true,
            "explain": "Verdadero. ls /directorio_nuevo > salida.log equivale a ls /directorio_nuevo 1> salida.log."
          }
        ],
        "mc": [
          {
            "id": "mc-13-1",
            "q": "¿Qué hace el pipe |?",
            "options": [
              "Envía la salida de un comando como entrada de otro, encadenando comandos",
              "Descarta la salida de error de un comando",
              "Lee la entrada desde un archivo en lugar del teclado",
              "Añade la salida al final de un archivo existente"
            ],
            "correctIndex": 0,
            "explain": "El pipe | permite que la salida (stdout) de un comando se convierta en la entrada (stdin) del siguiente."
          },
          {
            "id": "mc-13-2",
            "q": "¿Qué símbolo permite que un comando lea desde un archivo en lugar del teclado o stdin?",
            "options": [
              ">",
              ">>",
              "<",
              "|"
            ],
            "correctIndex": 2,
            "explain": "El < (menor) permite al comando leer la información desde un archivo u otro dispositivo en lugar del stdin."
          },
          {
            "id": "mc-13-3",
            "q": "¿Qué opción de find se usa para ejecutar un comando sobre cada archivo encontrado?",
            "options": [
              "-delete",
              "-exec",
              "-perm",
              "-name"
            ],
            "correctIndex": 1,
            "explain": "-exec ejecuta un comando sobre cada archivo encontrado, usando {} como marcador de posición del nombre del archivo."
          },
          {
            "id": "mc-13-4",
            "q": "¿Qué comando descarta el stderr y envía el stdout a salida.txt?",
            "options": [
              "ls /directorio_nuevo >> salida.txt 2> /dev/null",
              "ls /directorio_nuevo 2> salida.txt",
              "ls /directorio_nuevo < salida.txt",
              "ls /directorio_nuevo | salida.txt"
            ],
            "correctIndex": 0,
            "explain": "Con >> salida.txt se guarda el stdout y con 2> /dev/null se descarta el stderr enviándolo al agujero negro."
          }
        ],
        "ms": [
          {
            "id": "ms-13-1",
            "q": "¿Cuáles son tipos de redireccionamiento mencionados en el apunte?",
            "options": [
              "> (mayor)",
              ">> (doble mayor)",
              "< (menor)",
              "| (pipe)",
              "&& (doble ampersand)"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              3
            ],
            "explain": "El apunte lista cuatro tipos: >, >>, < y el pipe |. El && no figura como tipo de redireccionamiento."
          },
          {
            "id": "ms-13-2",
            "q": "¿Cuáles son opciones válidas de find según el apunte?",
            "options": [
              "-name",
              "-size",
              "-mtime",
              "-type f",
              "-updatedb"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              3
            ],
            "explain": "-name, -size, -mtime y -type f son opciones de find. updatedb es un comando aparte para actualizar la base de datos de locate, no una opción de find."
          },
          {
            "id": "ms-13-3",
            "q": "¿Qué afirmaciones sobre locate son correctas?",
            "options": [
              "Es parte de un programa llamado mlocate",
              "Usa una base de datos previamente indexada",
              "Generalmente no está instalado por defecto",
              "Su base se actualiza con updatedb",
              "Busca en tiempo real recorriendo todo el sistema de archivos"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              3
            ],
            "explain": "locate es parte de mlocate, usa una base de datos indexada, no viene instalado por defecto y se actualiza con updatedb. El que busca en tiempo real es find."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-13-1",
          "front": "Símbolo > (mayor)",
          "back": "Almacena la salida de un comando en un archivo en vez de mostrarla en pantalla. Si el archivo existe, lo pisa; si no, lo crea."
        },
        {
          "id": "fc-13-2",
          "front": "Símbolo >> (doble mayor)",
          "back": "Añade el contenido de la salida al final de un archivo existente, o lo crea si no existe."
        },
        {
          "id": "fc-13-3",
          "front": "Símbolo < (menor)",
          "back": "Permite que un comando lea la información desde un archivo u otro dispositivo en lugar del teclado o stdin."
        },
        {
          "id": "fc-13-4",
          "front": "Redirección de stderr",
          "back": "El StdErr está identificado con el número 2. Se redirige con 2>, por ejemplo: ls /directorio_nuevo 2> error.log."
        },
        {
          "id": "fc-13-5",
          "front": "/dev/null",
          "back": "Dispositivo que actúa como agujero negro: todo lo que se envía ahí se pierde. Útil para descartar errores."
        },
        {
          "id": "fc-13-6",
          "front": "Pipe |",
          "back": "Envía la salida (stdout) de un comando como entrada (stdin) de otro, encadenando comandos. Muy útil junto con filtros como grep o head."
        },
        {
          "id": "fc-13-7",
          "front": "Comando find",
          "back": "Busca archivos y directorios de manera exhaustiva y flexible por nombre, fecha, tipo, tamaño, etc. Puede ejecutar acciones con -exec o -delete. Es más lento porque busca en tiempo real."
        },
        {
          "id": "fc-13-8",
          "front": "Comando locate",
          "back": "Parte del programa mlocate. Es muy rápido porque usa una base de datos indexada, pero depende de que se actualice con updatedb. No viene instalado por defecto."
        }
      ]
    },
    {
      "id": "14",
      "unit": "3",
      "title": "Streams y filtros",
      "criollo": "Acá va todo el tema de cómo entra y sale la data en Linux: los tres streams (stdin, stdout, stderr) y los filtros que te procesan ese flujo. La estrella es <code>grep</code>, pero también están <code>tail</code>, <code>sort</code>, <code>wc</code> y compañía. Nada de magia, es plomería de datos.",
      "blocks": [
        {
          "type": "p",
          "text": "Un <strong>stream</strong> es un flujo de datos que puede ser de entrada (<strong>input</strong>) o de salida (<strong>output</strong>). Linux en particular tiene 3 (tres) streams predefinidos que los programas usan para interactuar con el sistema y con otros programas."
        },
        {
          "type": "h3",
          "text": "Los tres streams predefinidos",
          "criollo": "Cero para entrar, uno para salir, dos para los errores. Fácil de acordarse."
        },
        {
          "type": "p",
          "text": "<strong>stdin (Standard Input)</strong>: este canal está identificado con el número <strong>0</strong>, y por default el flujo de información que recibe generalmente viene desde el teclado. Pero no necesariamente lo recibe siempre desde ahí: también podría hacerlo desde otro comando o desde un archivo. Cuando ejecutamos un comando y lo escribimos por teclado, estamos usando el stdin (o sea, el teclado)."
        },
        {
          "type": "p",
          "text": "<strong>stdout (Standard Output)</strong>: este canal está identificado con el número <strong>1</strong>. Por default, el flujo de salida de este dispositivo es el monitor. Todo lo que un programa imprime o genera como resultado se lo envía a stdout. Por ejemplo, cuando ejecutamos el comando <code>ls</code>, la lista de archivos se imprime en stdout."
        },
        {
          "type": "code",
          "code": "alumno@debian11-CA:~$ ls\narchivo  archivo2  archivo_000  archivo_001  archivo_666  directorio"
        },
        {
          "type": "p",
          "text": "<strong>stderr (Standard Error)</strong>: este canal está identificado con el número <strong>2</strong>, es el flujo donde se envían los mensajes de error generados por un programa. Se mantiene separado del stdout para que los errores no se mezclen con la salida normal. Por ejemplo, si intentás listar el contenido de una carpeta y escribís mal el comando <code>la</code> en lugar de <code>ls</code>, recibís un mensaje que se imprime por stderr."
        },
        {
          "type": "code",
          "code": "alumno@debian11-CA:~$ la\n-bash: la: command not found"
        },
        {
          "type": "table",
          "caption": "Los tres streams predefinidos de Linux",
          "headers": [
            "Stream",
            "Número",
            "Descripción"
          ],
          "rows": [
            [
              "stdin (Standard Input)",
              "0",
              "Entrada, por default desde el teclado (o desde otro comando o archivo)"
            ],
            [
              "stdout (Standard Output)",
              "1",
              "Salida normal, por default al monitor"
            ],
            [
              "stderr (Standard Error)",
              "2",
              "Mensajes de error, separados de la salida normal"
            ]
          ]
        },
        {
          "type": "p",
          "text": "El objetivo de estos tres streams es separar la entrada, la salida normal y la salida con errores para tener un mayor control sobre cómo se gestionan los datos. Esto permite:"
        },
        {
          "type": "ul",
          "items": [
            "Redirigir la salida estándar a un archivo u otro comando, sin capturar errores.",
            "Capturar y gestionar los errores de manera separada.",
            "Automatizar procesos en scripts y comandos sin intervención manual."
          ]
        },
        {
          "type": "h3",
          "text": "Filtros",
          "criollo": "Comandos que agarran un flujo de texto y te lo procesan: cortan, ordenan, cuentan, paginan."
        },
        {
          "type": "p",
          "text": "Los <strong>filtros</strong> son comandos que procesan el contenido de un archivo o entrada estándar (<code>stdin</code>) y permiten manipular la salida estándar (<code>stdout</code>) con diversas funciones."
        },
        {
          "type": "ul",
          "items": [
            "<code>tail</code>: muestra las últimas 10 líneas de un archivo. Con <code>-f</code> sigue mostrando las nuevas líneas a medida que se añaden, muy útil para ver logs en tiempo real; con <code>-n xx</code> se puede definir un número de líneas a mostrar (xx = número).",
            "<code>more</code>: permite visualizar archivos grandes por secciones, paginando por pantallas, sólo hacia adelante.",
            "<code>less</code>: permite visualizar archivos grandes por secciones, pero a diferencia de <code>more</code>, permite desplazarse tanto hacia adelante como hacia atrás.",
            "<code>sort</code>: ordena las líneas de un archivo alfabética o numéricamente. Con <code>-r</code> ordena en reversa; con <code>-n</code> ordena numéricamente.",
            "<code>wc</code>: cuenta el número de líneas, palabras o caracteres de un archivo de entrada. Con <code>-m</code> cuenta caracteres, con <code>-l</code> cuenta líneas y con <code>-w</code> cuenta palabras.",
            "<code>cut</code>: extrae partes específicas de cada línea."
          ]
        },
        {
          "type": "h3",
          "text": "grep, el filtro",
          "criollo": "El buscador por excelencia: le tirás un patrón y te encuentra las líneas que coinciden."
        },
        {
          "type": "p",
          "text": "<code>grep</code> permite buscar dentro de archivos o del stdout palabras que coincidan con una expresión regular o un patrón de texto. Su sintaxis es:"
        },
        {
          "type": "code",
          "code": "grep [opción] [patrón] [archivo]"
        },
        {
          "type": "table",
          "caption": "Opciones de grep",
          "headers": [
            "Opción",
            "Función"
          ],
          "rows": [
            [
              "-i",
              "grep no distingue entre mayúsculas y minúsculas"
            ],
            [
              "-n",
              "muestra el número de la línea donde aparece el patrón"
            ],
            [
              "-r",
              "busca recursivamente en directorios"
            ],
            [
              "-c",
              "cuenta las líneas que coinciden"
            ],
            [
              "-E",
              "busca múltiples patrones"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "criollo",
          "text": "Truco mental: stdin=0, stdout=1, stderr=2. Y ojo con <code>less</code> vs <code>more</code>: <code>less</code> va para los dos lados, <code>more</code> solo pa'delante. Sí, el nombre es al revés de lo que uno pensaría."
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-14-1",
            "q": "El stream stderr está identificado con el número 2 y se mantiene separado del stdout.",
            "a": true,
            "explain": "stderr (Standard Error) usa el número 2 y se mantiene separado del stdout para que los errores no se mezclen con la salida normal."
          },
          {
            "id": "tf-14-2",
            "q": "El comando more permite desplazarse tanto hacia adelante como hacia atrás en un archivo.",
            "a": false,
            "explain": "more sólo permite avanzar hacia adelante. El que permite ir hacia adelante y hacia atrás es less."
          },
          {
            "id": "tf-14-3",
            "q": "El stdin solo puede recibir información desde el teclado.",
            "a": false,
            "explain": "Por default el stdin recibe desde el teclado, pero también podría hacerlo desde otro comando o desde un archivo."
          },
          {
            "id": "tf-14-4",
            "q": "La opción -f de tail sirve para ver logs en tiempo real, mostrando las nuevas líneas a medida que se añaden.",
            "a": true,
            "explain": "tail -f sigue mostrando las nuevas líneas a medida que se añaden, muy útil para ver logs en tiempo real."
          },
          {
            "id": "tf-14-5",
            "q": "La opción -i de grep hace que distinga entre mayúsculas y minúsculas.",
            "a": false,
            "explain": "Al revés: con -i grep NO distingue entre mayúsculas y minúsculas."
          }
        ],
        "mc": [
          {
            "id": "mc-14-1",
            "q": "¿Con qué número está identificado el stdout (Standard Output)?",
            "options": [
              "0",
              "1",
              "2",
              "3"
            ],
            "correctIndex": 1,
            "explain": "stdout está identificado con el número 1; su flujo de salida por default es el monitor."
          },
          {
            "id": "mc-14-2",
            "q": "¿Qué filtro cuenta el número de líneas, palabras o caracteres de un archivo?",
            "options": [
              "cut",
              "wc",
              "sort",
              "grep"
            ],
            "correctIndex": 1,
            "explain": "wc cuenta líneas (-l), palabras (-w) o caracteres (-m) de un archivo de entrada."
          },
          {
            "id": "mc-14-3",
            "q": "¿Qué opción de grep muestra el número de la línea donde aparece el patrón?",
            "options": [
              "-i",
              "-c",
              "-n",
              "-r"
            ],
            "correctIndex": 2,
            "explain": "La opción -n muestra el número de la línea donde aparece el patrón. -c cuenta líneas coincidentes y -r busca recursivamente."
          },
          {
            "id": "mc-14-4",
            "q": "¿Cuál es la sintaxis general del comando grep?",
            "options": [
              "grep [archivo] [patrón] [opción]",
              "grep [opción] [patrón] [archivo]",
              "grep [patrón] [opción] [archivo]",
              "grep [archivo] [opción] [patrón]"
            ],
            "correctIndex": 1,
            "explain": "La sintaxis es grep [opción] [patrón] [archivo]."
          }
        ],
        "ms": [
          {
            "id": "ms-14-1",
            "q": "¿Cuáles son características o funciones correctas de los streams en Linux?",
            "options": [
              "stdin está identificado con el número 0",
              "stderr está identificado con el número 2",
              "stdout envía su salida por default al monitor",
              "stderr comparte el mismo canal que stdout",
              "stdin recibe por default desde el teclado"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "stderr se mantiene SEPARADO del stdout, no comparte canal. El resto es correcto: stdin=0, stderr=2, stdout al monitor, stdin desde el teclado por default."
          },
          {
            "id": "ms-14-2",
            "q": "¿Qué permite lograr la separación de los tres streams?",
            "options": [
              "Redirigir la salida estándar a un archivo u otro comando, sin capturar errores",
              "Capturar y gestionar los errores de manera separada",
              "Automatizar procesos en scripts y comandos sin intervención manual",
              "Eliminar automáticamente los archivos de log",
              "Encriptar la salida estándar por seguridad"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explain": "La separación permite redirigir stdout sin capturar errores, gestionar los errores por separado y automatizar procesos en scripts. Eliminar logs y encriptar la salida no se mencionan."
          },
          {
            "id": "ms-14-3",
            "q": "¿Cuáles de estas afirmaciones sobre los filtros son correctas?",
            "options": [
              "sort -r ordena en reversa",
              "wc -l cuenta líneas",
              "less permite desplazarse hacia adelante y hacia atrás",
              "tail muestra las primeras 10 líneas de un archivo",
              "cut extrae partes específicas de cada línea"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "tail muestra las ÚLTIMAS 10 líneas, no las primeras. El resto es correcto: sort -r reversa, wc -l líneas, less va en ambos sentidos, cut extrae partes de cada línea."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-14-1",
          "front": "¿Qué es un stream?",
          "back": "Un flujo de datos que puede ser de entrada (input) o de salida (output). Linux tiene 3 streams predefinidos."
        },
        {
          "id": "fc-14-2",
          "front": "stdin, stdout, stderr — números",
          "back": "stdin = 0 (entrada, por default teclado), stdout = 1 (salida, por default monitor), stderr = 2 (mensajes de error)."
        },
        {
          "id": "fc-14-3",
          "front": "¿Por qué se separa stderr de stdout?",
          "back": "Para que los errores no se mezclen con la salida normal y así tener mayor control sobre cómo se gestionan los datos."
        },
        {
          "id": "fc-14-4",
          "front": "¿Qué son los filtros?",
          "back": "Comandos que procesan el contenido de un archivo o del stdin y permiten manipular la salida estándar (stdout) con diversas funciones."
        },
        {
          "id": "fc-14-5",
          "front": "more vs less",
          "back": "Ambos paginan archivos grandes por secciones. more sólo avanza hacia adelante; less permite desplazarse hacia adelante y hacia atrás."
        },
        {
          "id": "fc-14-6",
          "front": "tail y sus opciones",
          "back": "Muestra las últimas 10 líneas de un archivo. -f sigue mostrando nuevas líneas (logs en tiempo real); -n xx define cuántas líneas mostrar."
        },
        {
          "id": "fc-14-7",
          "front": "Opciones de wc",
          "back": "Cuenta líneas, palabras o caracteres. -m caracteres, -l líneas, -w palabras."
        },
        {
          "id": "fc-14-8",
          "front": "¿Qué hace grep?",
          "back": "Busca dentro de archivos o del stdout palabras que coincidan con una expresión regular o patrón. Sintaxis: grep [opción] [patrón] [archivo]."
        },
        {
          "id": "fc-14-9",
          "front": "Opciones de grep",
          "back": "-i ignora mayúsculas/minúsculas, -n muestra el número de línea, -r busca recursivamente, -c cuenta coincidencias, -E busca múltiples patrones."
        }
      ]
    },
    {
      "id": "15",
      "unit": "3",
      "title": "Expresiones regulares",
      "criollo": "Las regex son reglas para armar patrones de búsqueda copados sobre texto, re usadas en Linux con comandos como grep y find. Acá vas a ver los tipos: alternación, cuantificación, agrupación y los caracteres especiales, con ejemplos reales sobre un archivo de gerencias.",
      "blocks": [
        {
          "type": "p",
          "text": "Las <strong>expresiones regulares</strong> son un conjunto de reglas que permiten definir patrones de búsqueda complejos en cadenas de texto. En Linux, son ampliamente usadas en comandos como <code>grep</code> o <code>find</code>, entre otros. Las expresiones regulares, también conocidas como <strong>regex</strong>, permiten encontrar, validar o manipular textos de manera eficiente."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Para probar los ejemplos se crea un archivo llamado <code>Gerencias</code>, y dentro se incluyen diferentes áreas de una empresa."
        },
        {
          "type": "code",
          "code": "echo -e \"Tecnologia\\nFinanzas\\nContaduria\\nRecursosHumanos\\nVentas\\nDeposito\" > Gerencias"
        },
        {
          "type": "p",
          "text": "Las expresiones regulares se clasifican en: alternación, cuantificación y agrupación."
        },
        {
          "type": "h3",
          "text": "Alternación",
          "criollo": "El pipe funciona como un \"o\": matcheás una cosa o la otra."
        },
        {
          "type": "p",
          "text": "Expresiones del tipo <strong>a o b</strong> en las que se utiliza el pipe <code>|</code> como operador OR."
        },
        {
          "type": "ul",
          "items": [
            "<code>/a|b/</code>: coincide con el caracter a o el b",
            "<code>/perra|o/</code>: coincide con perra o perro"
          ]
        },
        {
          "type": "code",
          "code": "cat Gerencias | grep -E \"Tecnologia|Deposito\"\nTecnologia\nDeposito"
        },
        {
          "type": "h3",
          "text": "Cuantificación",
          "criollo": "Sirve para decir cuántas veces se repite un patrón."
        },
        {
          "type": "p",
          "text": "Permite controlar cuántas veces se repite un patrón:"
        },
        {
          "type": "table",
          "headers": [
            "Cuantificador",
            "Significado"
          ],
          "rows": [
            [
              "<code>*</code>",
              "cero o más veces"
            ],
            [
              "<code>+</code>",
              "una o más veces"
            ],
            [
              "<code>?</code>",
              "cero o una vez"
            ],
            [
              "<code>{n}</code>",
              "exactamente “n” veces"
            ],
            [
              "<code>{n,m}</code>",
              "que concuerde n veces y no más de m veces"
            ]
          ]
        },
        {
          "type": "ul",
          "items": [
            "<code>/ab+c/</code> coincide con abc y abbc, pero no con ac",
            "<code>/ab?c/</code> coincide con ac y abc",
            "<code>/pepe*/</code> coincide con pep, pepe y pepeeeee",
            "<code>/a{1,2}/</code> coincide con a y aa, pero no con aaa"
          ]
        },
        {
          "type": "code",
          "code": "cat Gerencias | grep -E \"*gia\"\nTecnologia\n\ncat Gerencias | grep -E \"ur*\"\nContaduria\nRecursosHumanos"
        },
        {
          "type": "h3",
          "text": "Agrupación",
          "criollo": "Paréntesis para agrupar subexpresiones, corchetes para conjuntos de caracteres."
        },
        {
          "type": "p",
          "text": "Los grupos permiten aplicar cuantificadores a un conjunto de caracteres o alternaciones específicas. Los paréntesis <code>()</code> permiten agrupar una expresión regular para trabajarla como subexpresiones. Los corchetes <code>[]</code> permiten poner un grupo de caracteres que se desee encontrar."
        },
        {
          "type": "ul",
          "items": [
            "<code>(abc)+</code>: coincide al menos una vez con toda la expresión abc",
            "<code>[aeiou]</code>: coincide con cualquier vocal",
            "<code>[a-z0-9]</code>: coincide con el rango de “a” hasta “z” y cualquier número"
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "El símbolo <code>^</code> (circunflejo) dentro de un grupo es la negación: <code>[^aeiou]</code> coincide con cualquier caracter que no sea una vocal."
        },
        {
          "type": "p",
          "text": "Por ejemplo, se puede pedir que agrupe y coloree palabras que contengan letras de “a” hasta “m” usando un rango como <code>[a-m]</code>."
        },
        {
          "type": "h3",
          "text": "Caracteres especiales",
          "criollo": "Algunos caracteres no son literales: tienen un significado propio en regex."
        },
        {
          "type": "p",
          "text": "Algunos caracteres tienen significados especiales en las expresiones regulares, por ejemplo:"
        },
        {
          "type": "ul",
          "items": [
            "<code>.</code> (punto): coincide con cualquier caracter, excepto una nueva línea",
            "<code>^</code> (circunflejo): coincide con el inicio de la línea (salvo que esté dentro de <code>[]</code>)",
            "<code>$</code> (signo pesos): coincide con el final de la línea"
          ]
        },
        {
          "type": "code",
          "code": "cat Gerencias | grep -E s$"
        },
        {
          "type": "h3",
          "text": "Algunos ejemplos reales",
          "criollo": "Con egrep o grep -E podés probar cualquier regex contra un texto que imprimís por stdout."
        },
        {
          "type": "p",
          "text": "Estos ejemplos pueden ser probados por medio de los comandos <code>egrep</code> o <code>grep -E</code>:"
        },
        {
          "type": "code",
          "code": "echo '<expresion a verificar>' | egrep '<expresion regular>'"
        },
        {
          "type": "p",
          "text": "Repitiendo los ejemplos, usando <code>echo</code> para imprimir por stdout una expresión a verificar (un correo, y 2 objetos cualquiera) y completando la expresión regular que comprueba su contenido, se obtiene como resultado solo aquello que coincida con la expresión regular."
        },
        {
          "type": "code",
          "code": "echo -e \"alumno@palermo.edu.ar\\nauto\\nmanzana\" | grep -E \"^([0-9A-Za-z._%-]+@[0-9A-Za-z._-]+\\.[A-Za-z]{2,6})*$\""
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "El sitio <code>https://regex101.com/</code> permite verificar cada expresión regular con el mismo ejemplo. El verificador sólo pinta aquello que concuerda con la expresión regular."
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-15-1",
            "q": "En una expresión de alternación, el pipe <code>|</code> funciona como operador OR.",
            "a": true,
            "explain": "La alternación usa el pipe como operador OR: <code>/a|b/</code> coincide con el caracter a o el b."
          },
          {
            "id": "tf-15-2",
            "q": "El cuantificador <code>+</code> significa cero o más veces.",
            "a": false,
            "explain": "<code>+</code> significa una o más veces. El que significa cero o más veces es <code>*</code>."
          },
          {
            "id": "tf-15-3",
            "q": "El caracter <code>$</code> coincide con el final de la línea.",
            "a": true,
            "explain": "El signo pesos <code>$</code> coincide con el final de la línea, mientras que <code>^</code> coincide con el inicio."
          },
          {
            "id": "tf-15-4",
            "q": "Dentro de un grupo <code>[]</code>, el símbolo <code>^</code> actúa como negación.",
            "a": true,
            "explain": "El circunflejo dentro de un grupo niega: <code>[^aeiou]</code> coincide con cualquier caracter que no sea una vocal."
          },
          {
            "id": "tf-15-5",
            "q": "El punto <code>.</code> coincide con cualquier caracter, incluida la nueva línea.",
            "a": false,
            "explain": "El punto coincide con cualquier caracter EXCEPTO una nueva línea."
          }
        ],
        "mc": [
          {
            "id": "mc-15-1",
            "q": "¿Qué cuantificador indica exactamente “n” veces?",
            "options": [
              "<code>{n}</code>",
              "<code>{n,m}</code>",
              "<code>+</code>",
              "<code>?</code>"
            ],
            "correctIndex": 0,
            "explain": "<code>{n}</code> concuerda exactamente “n” veces; <code>{n,m}</code> concuerda n veces y no más de m."
          },
          {
            "id": "mc-15-2",
            "q": "¿Qué expresión coincide con cualquier vocal?",
            "options": [
              "<code>(aeiou)</code>",
              "<code>[aeiou]</code>",
              "<code>a|e|i|o|u+</code>",
              "<code>{aeiou}</code>"
            ],
            "correctIndex": 1,
            "explain": "Los corchetes <code>[aeiou]</code> definen un grupo de caracteres; coincide con cualquier vocal."
          },
          {
            "id": "mc-15-3",
            "q": "¿Con qué comandos se pueden probar los ejemplos de regex del apunte?",
            "options": [
              "<code>sed</code> o <code>awk</code>",
              "<code>cut</code> o <code>tr</code>",
              "<code>egrep</code> o <code>grep -E</code>",
              "<code>find</code> o <code>locate</code>"
            ],
            "correctIndex": 2,
            "explain": "El apunte indica que los ejemplos pueden probarse con <code>egrep</code> o <code>grep -E</code>."
          },
          {
            "id": "mc-15-4",
            "q": "Según el ejemplo, ¿con qué NO coincide <code>/ab+c/</code>?",
            "options": [
              "abc",
              "abbc",
              "ac",
              "abbbc"
            ],
            "correctIndex": 2,
            "explain": "<code>/ab+c/</code> coincide con abc y abbc, pero no con ac, porque <code>+</code> exige al menos una b."
          }
        ],
        "ms": [
          {
            "id": "ms-15-1",
            "q": "¿Cuáles de estas afirmaciones sobre cuantificadores son correctas?",
            "options": [
              "<code>*</code>: cero o más veces",
              "<code>+</code>: una o más veces",
              "<code>?</code>: cero o una vez",
              "<code>?</code>: exactamente una vez",
              "<code>{n,m}</code>: concuerda n veces y no más de m"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "<code>?</code> significa cero o una vez, no exactamente una. El resto coincide con el apunte."
          },
          {
            "id": "ms-15-2",
            "q": "¿Cuáles son las tres clasificaciones de expresiones regulares que menciona el apunte?",
            "options": [
              "Alternación",
              "Cuantificación",
              "Agrupación",
              "Sustitución",
              "Compilación"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explain": "El apunte clasifica las regex en alternación, cuantificación y agrupación."
          },
          {
            "id": "ms-15-3",
            "q": "¿Cuáles de estos caracteres especiales aparecen en el apunte con su significado?",
            "options": [
              "<code>.</code> coincide con cualquier caracter excepto nueva línea",
              "<code>^</code> coincide con el inicio de la línea",
              "<code>$</code> coincide con el final de la línea",
              "<code>&</code> coincide con el medio de la línea",
              "<code>%</code> coincide con espacios"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explain": "El apunte describe el punto, el circunflejo y el signo pesos. <code>&</code> y <code>%</code> no figuran como caracteres especiales."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-15-1",
          "front": "Expresión regular",
          "back": "Conjunto de reglas que permiten definir patrones de búsqueda complejos en cadenas de texto. También conocidas como regex."
        },
        {
          "id": "fc-15-2",
          "front": "Alternación",
          "back": "Expresiones del tipo a o b usando el pipe <code>|</code> como operador OR. Ejemplo: <code>/a|b/</code>."
        },
        {
          "id": "fc-15-3",
          "front": "Cuantificadores * y +",
          "back": "<code>*</code> significa cero o más veces; <code>+</code> significa una o más veces."
        },
        {
          "id": "fc-15-4",
          "front": "Cuantificadores ? y {n,m}",
          "back": "<code>?</code> es cero o una vez; <code>{n,m}</code> concuerda n veces y no más de m veces."
        },
        {
          "id": "fc-15-5",
          "front": "Paréntesis vs corchetes",
          "back": "Los paréntesis <code>()</code> agrupan una expresión como subexpresión; los corchetes <code>[]</code> definen un grupo de caracteres a encontrar."
        },
        {
          "id": "fc-15-6",
          "front": "Negación en un grupo",
          "back": "El <code>^</code> dentro de <code>[]</code> niega: <code>[^aeiou]</code> coincide con cualquier caracter que no sea vocal."
        },
        {
          "id": "fc-15-7",
          "front": "Caracteres especiales . ^ $",
          "back": "<code>.</code> cualquier caracter salvo nueva línea; <code>^</code> inicio de línea; <code>$</code> final de línea."
        },
        {
          "id": "fc-15-8",
          "front": "egrep / grep -E",
          "back": "Comandos con los que se pueden probar las expresiones regulares del apunte contra un texto por stdout."
        },
        {
          "id": "fc-15-9",
          "front": "regex101.com",
          "back": "Sitio que verifica una expresión regular con un ejemplo; sólo pinta aquello que concuerda con la regex."
        }
      ]
    },
    {
      "id": "16",
      "unit": "4",
      "title": "Redes",
      "criollo": "Acá va todo lo de redes: qué es una red, los tipos (LAN, WAN, PAN, MAN), cómo funcionan las direcciones IP con su máscara y clases, y las cosas clave como gateway, DNS y DHCP. Cerramos con cómo se configura la red en Debian tocando el archivo interfaces, ya sea con IP fija o por DHCP.",
      "blocks": [
        {
          "type": "p",
          "text": "Cuando hablamos de <strong>redes</strong> nos referimos a dispositivos conectados entre sí con el objetivo de compartir recursos e intercambiar información. Pueden ser tan simples como dos computadoras conectadas por un cable, o tan complejas como la red de redes (internet), que conecta millones de dispositivos a nivel mundial."
        },
        {
          "type": "p",
          "text": "Como mínimo debe haber 2 dispositivos, y la comunicación se establece entre un <strong>cliente</strong>, que genera las peticiones, y un <strong>servidor</strong>, que escucha al cliente y espera que se conecten a él. Por ejemplo, una computadora que aloja el sitio <code>http://www.ejemplo.com</code> funciona como servidor, y otra computadora con un usuario intentando acceder al sitio por medio de un navegador web sería el cliente."
        },
        {
          "type": "h3",
          "text": "Tipos de redes",
          "criollo": "Se clasifican por el área que abarcan: de la más chica (PAN) a la más grande (WAN)."
        },
        {
          "type": "p",
          "text": "La clasificación de los tipos de redes se da en función del área que comprenden:"
        },
        {
          "type": "table",
          "caption": "Tipos de redes según su alcance",
          "headers": [
            "Tipo",
            "Nombre",
            "Alcance"
          ],
          "rows": [
            [
              "LAN",
              "Local Area Network",
              "Áreas pequeñas como hogares, oficinas o edificios. Permiten compartir recursos como archivos y dispositivos de impresión."
            ],
            [
              "WAN",
              "Wide Area Network",
              "Áreas geográficas amplias, como ciudades, países o continentes. El ejemplo más común es internet."
            ],
            [
              "PAN",
              "Personal Area Network",
              "Redes personales de corto alcance, para conectar dispositivos como teléfonos o auriculares a una computadora, usando tecnologías como bluetooth."
            ],
            [
              "MAN",
              "Metropolitan Area Network",
              "Cubren áreas metropolitanas, como una ciudad. Más grandes que las LAN, pero no tanto como las WAN."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Dirección IP",
          "criollo": "Es como la dirección de tu casa, pero para dispositivos en una red."
        },
        {
          "type": "p",
          "text": "Una <strong>dirección IP</strong> (Internet Protocol) es un número único asignado a cada dispositivo en una red. Es similar a la dirección de una casa en el mundo físico: permite que los dispositivos se identifiquen y se comuniquen entre sí. Existen 2 versiones de direccionamiento IP."
        },
        {
          "type": "ul",
          "items": [
            "<strong>IPv4</strong> (versión 4): la más utilizada hasta el momento. Tiene un tamaño de <strong>32 bits</strong> y se expresa en notación decimal separada por puntos. Es la que usamos en la cursada. Ejemplo: <code>192.168.1.1</code>.",
            "<strong>IPv6</strong> (versión 6): desarrollada para superar las limitaciones de IPv4. Usa <strong>128 bits</strong> y se expresa en notación hexadecimal separada por dos puntos. Ejemplo: <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>."
          ]
        },
        {
          "type": "p",
          "text": "Una dirección IPv4 de 32 bits está organizada en cuatro <strong>octetos</strong> de 8 bits cada uno, lo que permite escribirla como cuatro números decimales separados por puntos. Cada número puede tomar valores entre 0 y 255."
        },
        {
          "type": "code",
          "code": "IP en decimal: 192.168.1.1\nIP en binario: 11000000.10101000.00000001.00000001"
        },
        {
          "type": "h3",
          "text": "Clases de direcciones IPv4",
          "criollo": "Las direcciones se dividen en clases que definen cuántas redes y hosts entran."
        },
        {
          "type": "p",
          "text": "Las direcciones IPv4 se dividen en <strong>clases</strong>, que definen cómo se distribuyen las redes y los hosts (dispositivos en la red)."
        },
        {
          "type": "table",
          "caption": "Clases de direcciones IPv4",
          "headers": [
            "Clase",
            "Desde",
            "Hasta",
            "Formato",
            "Cant. Redes",
            "Cant. Host",
            "Aplicación"
          ],
          "rows": [
            [
              "A",
              "0.0.0.0",
              "127.255.255.255",
              "red.host.host.host",
              "128",
              "16777214",
              "Redes Grandes"
            ],
            [
              "B",
              "128.0.0.0",
              "191.255.255.255",
              "red.red.host.host",
              "16384",
              "65534",
              "Redes Medianas"
            ],
            [
              "C",
              "192.0.0.0",
              "223.255.255.255",
              "red.red.red.host",
              "2097152",
              "254",
              "Redes Pequeñas"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Existen 2 clases más: la <strong>D</strong>, que se utiliza para multicast, y la <strong>E</strong>, reservada para investigación y uso experimental."
        },
        {
          "type": "h3",
          "text": "Máscara de red",
          "criollo": "Los unos marcan la parte de red, los ceros la parte de hosts."
        },
        {
          "type": "p",
          "text": "La <strong>máscara de red</strong> (netmask) define qué parte de la dirección IP corresponde a la red y qué parte a los hosts. Está compuesta por una serie de unos (1) seguidos por ceros (0): los unos definen la parte que corresponde a la red y los ceros la parte que corresponde a los hosts."
        },
        {
          "type": "code",
          "code": "Dirección IP: 192.168.1.1\nMáscara de red: 255.255.255.0\nEn binario: 11111111.11111111.11111111.00000000"
        },
        {
          "type": "p",
          "text": "En este caso la máscara indica que los primeros 24 bits (3 octetos) se utilizan para la red y los últimos 8 bits (1 octeto) para los hosts. La red sería <code>192.168.1</code> y los hosts podrían variar entre 1 y 254, quedando el rango desde <code>192.168.1.1</code> a <code>192.168.1.254</code>."
        },
        {
          "type": "p",
          "text": "Existe una forma abreviada de escribir la dirección IP y la máscara llamada <strong>CIDR</strong> (Classless Inter-Domain Routing), en la que se usa un sufijo que indica el número de bits utilizados para la red. Por ejemplo, una dirección con máscara de 24 bits (o sea <code>255.255.255.0</code>) se puede escribir <code>192.168.1.1/24</code>: los primeros 24 bits son para la red y los 8 restantes para los hosts."
        },
        {
          "type": "h3",
          "text": "Gateway, DNS y DHCP",
          "criollo": "Los tres actores clave: el gateway te saca a otras redes, el DNS traduce nombres a IPs y el DHCP reparte configuración sola."
        },
        {
          "type": "p",
          "text": "La <strong>puerta de enlace predeterminada (Gateway)</strong> es el dispositivo que actúa como punto de acceso a otras redes, incluyendo internet. Los paquetes que no están destinados a un dispositivo dentro de la red local se envían al gateway para que sean redirigidos al destino correspondiente. En una red hogareña, la IP de la puerta de enlace suele estar asignada en el router del proveedor de internet."
        },
        {
          "type": "p",
          "text": "El <strong>DNS</strong> (Domain Name System) es el sistema que traduce los nombres de dominio como <code>www.starwars.com</code> en direcciones IP como <code>200.125.79.219</code>. Los dispositivos en una red sólo entienden direcciones IP; sin un DNS tendríamos que memorizar la IP de cada sitio web al que queremos acceder."
        },
        {
          "type": "p",
          "text": "El <strong>DHCP</strong> (Dynamic Host Configuration Protocol) es un protocolo que asigna automáticamente configuraciones de red a los dispositivos. Cuando un dispositivo se conecta, solicita una dirección IP y el servidor DHCP se encarga de asignarla, junto con otros detalles como la máscara de red y la puerta de enlace predeterminada."
        },
        {
          "type": "h3",
          "text": "Configuración de red en GNU/Linux",
          "criollo": "En Debian todo se toca en /etc/network/interfaces: o ponés los datos a mano (static) o dejás que el DHCP te los dé."
        },
        {
          "type": "p",
          "text": "En Linux, y particularmente en <strong>Debian</strong> (la distribución utilizada aquí), la configuración de red se gestiona principalmente a través del archivo <code>interfaces</code> que está dentro del directorio <code>/etc/network</code>. Para configurar una IP en nuestra placa de red tenemos 2 opciones."
        },
        {
          "type": "ul",
          "items": [
            "<strong>Asignación estática</strong>: nosotros seleccionamos y completamos los datos requeridos para la configuración (address, netmask, gateway).",
            "<strong>Asignación automática (DHCP)</strong>: dejamos la placa como viene por default y esperamos que un DHCP (debe haber uno previamente configurado en la red para que esto funcione) asigne de forma autónoma todos los datos necesarios."
          ]
        },
        {
          "type": "p",
          "text": "El archivo se puede ver con <code>cat /etc/network/interfaces</code>. Las directivas principales son:"
        },
        {
          "type": "ul",
          "items": [
            "<code>auto</code>: indica qué interfaces de red deben iniciarse automáticamente cuando el sistema arranca. Es útil para asegurarse de que ciertas interfaces estén activas sin intervención manual.",
            "<code>allow-hotplug</code>: habilita la interfaz de red cuando el dispositivo correspondiente se detecta automáticamente (por ejemplo, cuando se conecta un cable ethernet).",
            "<code>iface</code>: define una interfaz de red y especifica cómo se configurará."
          ]
        },
        {
          "type": "p",
          "text": "La directiva <code>iface</code> debe ser seguida por tres parámetros:"
        },
        {
          "type": "ol",
          "items": [
            "El <strong>nombre de la interfaz</strong>: <code>eth0</code>, <code>enp0s3</code>, <code>wlan0</code>, <code>lo</code>.",
            "El <strong>tipo de conexión</strong>: <code>inet</code> para IPv4 o <code>inet6</code> para IPv6.",
            "El <strong>método de configuración</strong>: <code>static</code> para configurar la IP manualmente, o <code>dhcp</code> para obtener una IP automáticamente."
          ]
        },
        {
          "type": "p",
          "text": "En una configuración <strong>static</strong> se completan estos datos: <code>address</code> (la dirección IP asignada al dispositivo), <code>netmask</code> (la máscara de red) y <code>gateway</code> (la puerta de enlace predeterminada)."
        },
        {
          "type": "code",
          "code": "address: 192.168.0.10\nnetmask: 255.255.255.0\ngateway: 192.168.0.1"
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-16-1",
            "q": "Una dirección IPv4 tiene un tamaño de 128 bits.",
            "a": false,
            "explain": "IPv4 tiene 32 bits (cuatro octetos de 8 bits). Los 128 bits corresponden a IPv6."
          },
          {
            "id": "tf-16-2",
            "q": "En una máscara de red, los unos definen la parte de la dirección que corresponde a la red y los ceros la parte que corresponde a los hosts.",
            "a": true,
            "explain": "La netmask está compuesta por una serie de unos seguidos de ceros: los unos marcan la red y los ceros los hosts."
          },
          {
            "id": "tf-16-3",
            "q": "El DNS asigna automáticamente direcciones IP, máscara y gateway a los dispositivos cuando se conectan a la red.",
            "a": false,
            "explain": "Eso lo hace el DHCP. El DNS traduce nombres de dominio en direcciones IP."
          },
          {
            "id": "tf-16-4",
            "q": "En Debian, la configuración de red se gestiona principalmente a través del archivo interfaces dentro de /etc/network.",
            "a": true,
            "explain": "El archivo interfaces en /etc/network es el punto principal de configuración de red en Debian."
          },
          {
            "id": "tf-16-5",
            "q": "La notación CIDR 192.168.1.1/24 significa que los primeros 24 bits son para la red y los 8 restantes para los hosts.",
            "a": true,
            "explain": "El sufijo /24 en CIDR indica que 24 bits corresponden a la red, equivalente a la máscara 255.255.255.0."
          }
        ],
        "mc": [
          {
            "id": "mc-16-1",
            "q": "¿Qué tipo de red abarca áreas geográficas amplias como países o continentes, siendo internet su ejemplo más común?",
            "options": [
              "LAN",
              "PAN",
              "WAN",
              "MAN"
            ],
            "correctIndex": 2,
            "explain": "La WAN (Wide Area Network) abarca áreas amplias como ciudades, países o continentes; internet es el ejemplo más común."
          },
          {
            "id": "mc-16-2",
            "q": "¿Cuál es la clase de dirección IPv4 destinada a redes pequeñas, con formato red.red.red.host?",
            "options": [
              "Clase A",
              "Clase B",
              "Clase C",
              "Clase D"
            ],
            "correctIndex": 2,
            "explain": "La clase C usa el formato red.red.red.host, admite 254 hosts y se aplica a redes pequeñas."
          },
          {
            "id": "mc-16-3",
            "q": "¿Qué directiva del archivo interfaces habilita la interfaz cuando el dispositivo de red se detecta automáticamente, por ejemplo al conectar un cable ethernet?",
            "options": [
              "auto",
              "allow-hotplug",
              "iface",
              "inet"
            ],
            "correctIndex": 1,
            "explain": "allow-hotplug habilita la interfaz cuando el dispositivo correspondiente se detecta automáticamente, como al conectar un cable ethernet."
          },
          {
            "id": "mc-16-4",
            "q": "En la comunicación de red, ¿quién genera las peticiones?",
            "options": [
              "El servidor",
              "El cliente",
              "El gateway",
              "El DNS"
            ],
            "correctIndex": 1,
            "explain": "El cliente genera las peticiones, mientras que el servidor escucha y espera que se conecten a él."
          }
        ],
        "ms": [
          {
            "id": "ms-16-1",
            "q": "¿Cuáles de las siguientes son tipos de redes clasificadas según el área que comprenden?",
            "options": [
              "LAN",
              "DHCP",
              "WAN",
              "PAN",
              "MAN"
            ],
            "correctIndexes": [
              0,
              2,
              3,
              4
            ],
            "explain": "LAN, WAN, PAN y MAN son tipos de redes según su alcance. DHCP es un protocolo de asignación de configuración, no un tipo de red."
          },
          {
            "id": "ms-16-2",
            "q": "¿Qué afirmaciones sobre IPv4 son correctas según el apunte?",
            "options": [
              "Tiene un tamaño de 32 bits",
              "Se expresa en notación hexadecimal",
              "Está organizada en cuatro octetos de 8 bits",
              "Cada número puede tomar valores entre 0 y 255",
              "Usa 128 bits"
            ],
            "correctIndexes": [
              0,
              2,
              3
            ],
            "explain": "IPv4 tiene 32 bits, se organiza en cuatro octetos de 8 bits y cada número va de 0 a 255. La notación hexadecimal y los 128 bits son de IPv6."
          },
          {
            "id": "ms-16-3",
            "q": "¿Cuáles son los tres parámetros que debe seguir a la directiva iface?",
            "options": [
              "El nombre de la interfaz (eth0, wlan0, lo)",
              "El tipo de conexión (inet o inet6)",
              "La cantidad de hosts de la red",
              "El método de configuración (static o dhcp)",
              "La clase de la dirección IP"
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explain": "iface debe ser seguida por el nombre de la interfaz, el tipo de conexión (inet/inet6) y el método de configuración (static/dhcp)."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-16-1",
          "front": "Cliente vs servidor",
          "back": "El cliente genera las peticiones; el servidor escucha al cliente y espera que se conecten a él."
        },
        {
          "id": "fc-16-2",
          "front": "LAN, WAN, PAN, MAN",
          "back": "Tipos de redes según su área: LAN (local), WAN (amplia, ej. internet), PAN (personal, corto alcance) y MAN (metropolitana)."
        },
        {
          "id": "fc-16-3",
          "front": "IPv4 vs IPv6",
          "back": "IPv4 usa 32 bits en notación decimal separada por puntos. IPv6 usa 128 bits en notación hexadecimal separada por dos puntos."
        },
        {
          "id": "fc-16-4",
          "front": "Máscara de red",
          "back": "Define qué parte de la IP es red y qué parte es hosts. Los unos marcan la red, los ceros los hosts."
        },
        {
          "id": "fc-16-5",
          "front": "CIDR",
          "back": "Forma abreviada de escribir IP y máscara con un sufijo que indica los bits de red. Ej: 192.168.1.1/24 equivale a máscara 255.255.255.0."
        },
        {
          "id": "fc-16-6",
          "front": "Gateway",
          "back": "Puerta de enlace: dispositivo que actúa como punto de acceso a otras redes. Redirige los paquetes que no van a la red local."
        },
        {
          "id": "fc-16-7",
          "front": "DNS",
          "back": "Domain Name System: traduce nombres de dominio (www.starwars.com) en direcciones IP."
        },
        {
          "id": "fc-16-8",
          "front": "DHCP",
          "back": "Protocolo que asigna automáticamente IP, máscara y gateway a los dispositivos cuando se conectan a la red."
        },
        {
          "id": "fc-16-9",
          "front": "Archivo interfaces en Debian",
          "back": "Ubicado en /etc/network/interfaces, gestiona la configuración de red. Admite asignación static (manual) o dhcp (automática)."
        }
      ]
    },
    {
      "id": "17",
      "unit": "4",
      "title": "DNS y DHCP",
      "criollo": "Acá va cómo internet traduce nombres lindos como www.google.com a la IP real que entienden las máquinas (eso es el DNS) y cómo tu dispositivo consigue una IP automáticamente sin que la configures a mano (eso es el DHCP). Dos protocolos que laburan atrás de escena para que todo funcione.",
      "blocks": [
        {
          "type": "h3",
          "text": "DNS - Domain Name System",
          "criollo": "La agenda de contactos de internet: traduce nombres a IPs."
        },
        {
          "type": "p",
          "text": "El <strong>Sistema de Nombres de Dominio</strong> es un protocolo fundamental en las redes informáticas en general, desde internet hasta redes más pequeñas como las de empresas. Un DNS traduce los nombres de dominio legibles por humanos (como <code>www.google.com</code>) en direcciones IP (como <code>192.168.1.1</code>), que las computadoras y otros dispositivos utilizan para localizar y comunicarse entre sí."
        },
        {
          "type": "h3",
          "text": "Dominios"
        },
        {
          "type": "p",
          "text": "Los nombres de dominio están organizados en jerarquías. Por ejemplo, en <code>mail.ejemplo.com</code>:"
        },
        {
          "type": "ul",
          "items": [
            "<code>.com</code>: es el dominio de nivel superior (<strong>TLD - Top Level Domain</strong>).",
            "<code>ejemplo</code>: es el dominio secundario.",
            "<code>mail</code>: es un subdominio."
          ]
        },
        {
          "type": "h3",
          "text": "Método de consulta y tipos de servidores DNS",
          "criollo": "La consulta va escalando de servidor en servidor hasta que alguien sabe la respuesta."
        },
        {
          "type": "p",
          "text": "Cuando un usuario escribe una URL en su navegador, la computadora primero revisa si ya conoce la dirección IP de ese dominio en su caché local. Si la dirección IP no está en la caché, la computadora hace una consulta a un <strong>servidor DNS Recursivo</strong> para obtener la dirección IP."
        },
        {
          "type": "ul",
          "items": [
            "<strong>Servidor DNS Recursivo</strong>: recibe la consulta y, si no tiene la IP en su propio caché, comienza a preguntar a otros servidores DNS, recorriendo jerárquicamente y subiendo la consulta hasta obtener respuesta. El siguiente paso es consultarle a un Servidor Raíz.",
            "<strong>Servidor Raíz (Root DNS Server)</strong>: cuando recibe la consulta del Recursivo, revisa su propio caché. Si no lo sabe, puede consultar a otros Root DNS Server, pero si aún no consigue respuesta, traslada la consulta a los Servidores TLD.",
            "<strong>Servidores TLD (Top-Level Domain)</strong>: gestionan los dominios del tipo <code>.com</code>, <code>.net</code>, <code>.org</code>, <code>.edu</code>, o dominios <code>.es</code>, <code>.mx</code>, <code>.ar</code> (también conocidos como <strong>cc-TLD</strong>, Country Code Top-Level Domain). Si no tienen la información necesaria, trasladan la consulta a un Servidor DNS autoritativo.",
            "<strong>Servidor DNS Autoritativo</strong>: es la entidad máxima que debería dar la respuesta definitiva sobre la IP del dominio ingresado. Devuelve la IP al Servidor Recursivo que inició la consulta. Si no tuviese un registro DNS asociado a una IP, la respuesta sería un mensaje de error indicando que el registro no existe."
          ]
        },
        {
          "type": "p",
          "text": "El servidor Recursivo ahora tiene la respuesta (la dirección IP) y la devuelve al navegador. La computadora que recibió el registro guarda esta respuesta en su caché para no tener que repetir la consulta la próxima vez que necesite visitar el mismo dominio."
        },
        {
          "type": "callout",
          "tone": "criollo",
          "text": "La cadena es: tu compu → Recursivo → Raíz → TLD → Autoritativo. Cada uno pregunta al de arriba si no sabe, y la respuesta baja de vuelta. Encima todos cachean para no repetir el laburo."
        },
        {
          "type": "h3",
          "text": "Tipos de registros en un DNS"
        },
        {
          "type": "p",
          "text": "En un Servidor DNS, los nombres de los hosts o de los dominios se almacenan por medio de registros, de los cuales hay varios tipos:"
        },
        {
          "type": "table",
          "caption": "Tipos de registros DNS",
          "headers": [
            "Registro",
            "Función"
          ],
          "rows": [
            [
              "A",
              "Asocia un nombre de host o dominio a una dirección de IPv4."
            ],
            [
              "AAAA",
              "Asocia un nombre de host o dominio a una dirección de IPv6."
            ],
            [
              "CNAME (Canonical-Name)",
              "Asocia un dominio contra otro dominio."
            ],
            [
              "MX",
              "Define los servidores de correo electrónico para un dominio."
            ],
            [
              "NS",
              "Define los servidores de nombre (DNS) autorizados para un dominio."
            ],
            [
              "TXT",
              "Almacena texto para verificaciones o políticas de seguridad."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "DHCP - Dynamic Host Configuration Protocol",
          "criollo": "El que te tira una IP automáticamente apenas te enchufás a la red."
        },
        {
          "type": "p",
          "text": "DHCP es un protocolo que automáticamente asigna direcciones IP a una computadora en la configuración de su placa de red. También puede brindar información adicional necesaria, previamente configurada en el Servidor DHCP, como puerta de enlace, DNS, máscara de red, etc."
        },
        {
          "type": "p",
          "text": "Las operaciones de DHCP se dividen en <strong>4 fases</strong>:"
        },
        {
          "type": "ol",
          "items": [
            "<strong>El cliente solicita una dirección IP (DHCP Discover)</strong>: cuando un dispositivo (computadora, teléfono, impresora, etc.) se conecta a la red y no tiene una dirección IP, envía una solicitud llamada <strong>DHCP Discover</strong>. Este mensaje se envía en modo broadcast a toda la red, porque el cliente aún no sabe la dirección IP del servidor DHCP.",
            "<strong>DHCP ofrece una dirección IP (DHCP Offer)</strong>: un servidor DHCP recibe la solicitud, revisa su base de datos interna y, si tiene direcciones IP disponibles, responde con un mensaje llamado <strong>DHCP Offer</strong> ofreciendo una IP libre de su rango, junto con la máscara de red, la puerta de enlace, los servidores DNS de la red y el tiempo de alquiler de la IP (si el cliente no vuelve a solicitar la IP durante un tiempo establecido, la misma queda liberada para otro cliente).",
            "<strong>El cliente recibe la oferta (DHCP Request)</strong>: cuando el cliente recibe la oferta, responde con un mensaje llamado <strong>DHCP Request</strong> indicando que acepta la dirección IP ofrecida. Este mensaje también se envía en modo broadcast para que, si hay otros servidores DHCP en la red, registren que la IP fue aceptada.",
            "<strong>DHCP confirma (DHCP ACK)</strong>: el servidor DHCP responde con un mensaje llamado <strong>DHCP ACK</strong> (Acknowledgement), confirmando que la dirección IP ha sido asignada y ahora es válida para el cliente. A partir de este momento, el cliente puede usar la dirección IP para comunicarse en la red."
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Truco para acordarse de las 4 fases del DHCP: DORA — Discover, Offer, Request, ACK."
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-17-1",
            "q": "El DNS traduce nombres de dominio legibles por humanos en direcciones IP.",
            "a": true,
            "explain": "Esa es su función central: convertir nombres como www.google.com en direcciones IP como 192.168.1.1."
          },
          {
            "id": "tf-17-2",
            "q": "En mail.ejemplo.com, \"mail\" es el dominio de nivel superior (TLD).",
            "a": false,
            "explain": "El TLD es \".com\". \"ejemplo\" es el dominio secundario y \"mail\" es un subdominio."
          },
          {
            "id": "tf-17-3",
            "q": "El mensaje DHCP Discover se envía en modo broadcast porque el cliente todavía no conoce la IP del servidor DHCP.",
            "a": true,
            "explain": "Al no tener IP ni saber dónde está el servidor, el cliente difunde la solicitud a toda la red."
          },
          {
            "id": "tf-17-4",
            "q": "El Servidor DNS Autoritativo es la entidad máxima que da la respuesta definitiva sobre la IP de un dominio.",
            "a": true,
            "explain": "Es el que finalmente devuelve la IP al Servidor Recursivo, o un error si no existe el registro."
          },
          {
            "id": "tf-17-5",
            "q": "El registro DNS tipo CNAME asocia un nombre de dominio a una dirección IPv4.",
            "a": false,
            "explain": "CNAME asocia un dominio contra otro dominio. El que asocia a una IPv4 es el registro tipo A."
          }
        ],
        "mc": [
          {
            "id": "mc-17-1",
            "q": "¿Cuál es el orden correcto de las 4 fases del DHCP?",
            "options": [
              "Discover, Offer, Request, ACK",
              "Request, Offer, Discover, ACK",
              "Offer, Discover, ACK, Request",
              "ACK, Request, Offer, Discover"
            ],
            "correctIndex": 0,
            "explain": "El cliente descubre (Discover), el servidor ofrece (Offer), el cliente pide (Request) y el servidor confirma (ACK)."
          },
          {
            "id": "mc-17-2",
            "q": "¿Qué tipo de registro DNS define los servidores de correo electrónico de un dominio?",
            "options": [
              "MX",
              "NS",
              "TXT",
              "AAAA"
            ],
            "correctIndex": 0,
            "explain": "El registro MX define los servidores de correo electrónico para un dominio."
          },
          {
            "id": "mc-17-3",
            "q": "Cuando el Servidor Raíz no conoce la respuesta ni la obtiene de otros Root DNS Server, ¿a quién traslada la consulta?",
            "options": [
              "A los Servidores TLD",
              "Al navegador del cliente",
              "Directamente al Servidor Autoritativo",
              "Al Servidor DHCP"
            ],
            "correctIndex": 0,
            "explain": "El Root DNS Server traslada la consulta del Recursivo a los Servidores TLD, que gestionan .com, .net, etc."
          },
          {
            "id": "mc-17-4",
            "q": "¿Qué información adicional puede entregar un servidor DHCP junto con la IP?",
            "options": [
              "Máscara de red, puerta de enlace y DNS",
              "Solo la dirección MAC del cliente",
              "El registro CNAME del dominio",
              "La contraseña de la red WiFi"
            ],
            "correctIndex": 0,
            "explain": "El DHCP Offer incluye máscara de red, puerta de enlace, servidores DNS y el tiempo de alquiler de la IP."
          }
        ],
        "ms": [
          {
            "id": "ms-17-1",
            "q": "¿Cuáles de los siguientes son tipos de servidores DNS mencionados en el proceso de consulta?",
            "options": [
              "Servidor Recursivo",
              "Servidor Raíz (Root)",
              "Servidor TLD",
              "Servidor Autoritativo",
              "Servidor DHCP Broadcast"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              3
            ],
            "explain": "Los cuatro tipos de servidores DNS son Recursivo, Raíz, TLD y Autoritativo. El \"Servidor DHCP Broadcast\" no existe como tal."
          },
          {
            "id": "ms-17-2",
            "q": "¿Cuáles de estos registros DNS existen según el apunte?",
            "options": [
              "Registro A (IPv4)",
              "Registro AAAA (IPv6)",
              "Registro NS (servidores de nombre)",
              "Registro TXT (texto/seguridad)",
              "Registro DHCP (asignación de IP)"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              3
            ],
            "explain": "A, AAAA, NS y TXT son tipos de registro DNS. DHCP es un protocolo distinto, no un registro DNS."
          },
          {
            "id": "ms-17-3",
            "q": "¿Qué afirmaciones sobre el DHCP son correctas?",
            "options": [
              "Asigna direcciones IP automáticamente",
              "El DHCP Request se envía en broadcast",
              "La IP tiene un tiempo de alquiler y puede liberarse",
              "El DHCP ACK confirma que la IP es válida",
              "El DHCP traduce dominios a direcciones IP"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              3
            ],
            "explain": "Las primeras cuatro describen el DHCP. Traducir dominios a IPs es tarea del DNS, no del DHCP."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-17-1",
          "front": "¿Qué hace el DNS?",
          "back": "Traduce nombres de dominio legibles por humanos (www.google.com) en direcciones IP (192.168.1.1) que usan las máquinas para comunicarse."
        },
        {
          "id": "fc-17-2",
          "front": "Jerarquía de mail.ejemplo.com",
          "back": ".com es el TLD (dominio de nivel superior), ejemplo es el dominio secundario y mail es un subdominio."
        },
        {
          "id": "fc-17-3",
          "front": "Servidor DNS Recursivo",
          "back": "Recibe la consulta del cliente y, si no la tiene en caché, va preguntando a otros servidores (Raíz, TLD, Autoritativo) hasta obtener la IP."
        },
        {
          "id": "fc-17-4",
          "front": "Servidor DNS Autoritativo",
          "back": "La entidad máxima que da la respuesta definitiva sobre la IP de un dominio. Si no existe el registro, devuelve un error."
        },
        {
          "id": "fc-17-5",
          "front": "Registros A vs AAAA",
          "back": "A asocia un nombre a una dirección IPv4; AAAA lo asocia a una dirección IPv6."
        },
        {
          "id": "fc-17-6",
          "front": "Registros MX y NS",
          "back": "MX define los servidores de correo de un dominio; NS define los servidores de nombre (DNS) autorizados."
        },
        {
          "id": "fc-17-7",
          "front": "¿Qué hace el DHCP?",
          "back": "Asigna automáticamente direcciones IP y datos de red (puerta de enlace, DNS, máscara) a los dispositivos al conectarse."
        },
        {
          "id": "fc-17-8",
          "front": "4 fases del DHCP (DORA)",
          "back": "Discover (cliente pide), Offer (servidor ofrece), Request (cliente acepta) y ACK (servidor confirma)."
        },
        {
          "id": "fc-17-9",
          "front": "Tiempo de alquiler de IP",
          "back": "Si el cliente no vuelve a solicitar la IP durante un tiempo establecido, la misma queda liberada para otro cliente."
        }
      ]
    },
    {
      "id": "18",
      "unit": "4",
      "title": "SSH",
      "criollo": "SSH es el protocolo (y el programa) para meterte a servidores de forma remota y administrarlos desde una consola, todo cifrado. Podés autenticarte con contraseña o, mejor todavía, con un par de claves pública/privada así no tenés que escribir la clave cada vez. Acá vas a ver cómo se instala, se configura y cómo generás y copiás las llaves.",
      "blocks": [
        {
          "type": "p",
          "text": "<strong>SSH</strong> es el nombre de un protocolo y del programa que lo implementa. Se utiliza para acceder a servidores de forma remota y permite administrarlos por medio de un intérprete de comandos."
        },
        {
          "type": "p",
          "text": "SSH se utiliza de 2 formas:"
        },
        {
          "type": "ul",
          "items": [
            "<strong>Cliente SSH</strong>: es el equipo o dispositivo desde el cual se desea establecer una conexión remota segura.",
            "<strong>Servidor SSH</strong>: es el equipo o servidor al que se conecta el cliente SSH."
          ]
        },
        {
          "type": "p",
          "text": "Además de permitir la administración remota de otros dispositivos, SSH permite copiar datos de forma segura, gestionar claves RSA para no escribir claves al conectar a los dispositivos y pasar los datos de cualquier otra aplicación por un canal seguro tunelizado mediante SSH."
        },
        {
          "type": "h3",
          "text": "Instalación y configuración",
          "criollo": "El cliente casi siempre ya viene; el servidor a veces lo tenés que instalar vos."
        },
        {
          "type": "p",
          "text": "Generalmente, el cliente de SSH ya viene instalado en la mayoría de las distribuciones, por lo que podríamos establecer una conexión hacia servidores remotos inmediatamente al finalizar la instalación del sistema operativo. Sin embargo, SSH como servidor puede no venir instalado; para eso deberemos descargar e instalar el paquete <code>openssh-server</code> con el comando:"
        },
        {
          "type": "code",
          "code": "apt-get install openssh-server"
        },
        {
          "type": "p",
          "text": "Los archivos de configuración de OpenSSH se encuentran en <code>/etc/ssh</code>. Este tiene 2 archivos de configuración: <code>sshd_config</code> (SSH como servidor) y <code>ssh_config</code> (SSH como cliente)."
        },
        {
          "type": "h3",
          "text": "sshd_config (configuración del servidor)"
        },
        {
          "type": "p",
          "text": "En este archivo se describe la configuración de SSH como servidor. Líneas importantes a tener en cuenta:"
        },
        {
          "type": "ul",
          "items": [
            "<code>port</code>: especifica el puerto TCP que se utilizará. Por default viene comentado y usa el puerto 22; si se descomenta, suele ser para ponerle otro puerto de uso. Las buenas prácticas recomiendan cambiar este puerto por otro para evitar ataques o intentos de ingreso no autorizados.",
            "<code>PubkeyAuthentication</code>: permite la autenticación mediante clave privada.",
            "<code>AuthorizedKeysFile</code>: indica al servidor dónde están almacenadas las claves públicas de los usuarios. Por default es <code>.ssh/authorized_keys</code> (directorio y archivo que se encuentran en el home del usuario).",
            "<code>PasswordAuthentication</code>: permite la autenticación mediante contraseñas.",
            "<code>PermitRootLogin</code>: por default, y por seguridad, viene configurado con <code>Prohibit-password</code>. Para fines prácticos, se cambia por <code>yes</code> quedando sin comentario (o sea, sacándole el numeral <code>#</code> de adelante)."
          ]
        },
        {
          "type": "code",
          "code": "PermitRootLogin yes"
        },
        {
          "type": "h3",
          "text": "ssh_config (configuración del cliente)"
        },
        {
          "type": "p",
          "text": "En este archivo se describe la configuración de SSH como cliente:"
        },
        {
          "type": "ul",
          "items": [
            "<code>Host</code>: su valor puede ser una lista de patrones y determina que las opciones subsiguientes sean aplicadas a las conexiones realizadas a los hosts especificados.",
            "<code>port</code>: es el puerto TCP que utiliza el servidor al que nos vamos a conectar.",
            "<code>PubkeyAuthentication</code>: autenticación mediante clave pública (se recomienda dejar en <code>yes</code>).",
            "<code>IdentityFile</code>: archivo que contiene la clave privada.",
            "<code>PasswordAuthentication</code>: si se permite la autenticación mediante contraseña."
          ]
        },
        {
          "type": "h3",
          "text": "Forma de uso"
        },
        {
          "type": "p",
          "text": "Existen 2 formas de utilizar el comando:"
        },
        {
          "type": "ul",
          "items": [
            "<code>ssh &lt;host&gt;</code>: autentica en el servidor de destino con el mismo usuario con el que se está logueando en el origen.",
            "<code>ssh &lt;usuario@host&gt;</code>: autentica en el servidor de destino con el usuario que se especifica a la izquierda del <code>@</code>."
          ]
        },
        {
          "type": "h3",
          "text": "Conexión paso a paso"
        },
        {
          "type": "ol",
          "items": [
            "<strong>Conexión inicial</strong>: el cliente se conecta al servidor en el puerto 22 (o el puerto configurado para SSH).",
            "<strong>Intercambio de claves</strong>: el servidor envía su clave pública al cliente para identificarse.",
            "<strong>Verificación</strong>: el cliente verifica si ya conoce la clave pública del servidor; si no, pide confirmación al usuario.",
            "<strong>Establecimiento de una clave de sesión</strong>: el cliente genera una clave de sesión, la cifra con la clave pública del servidor y la envía. Esta clave se usará para cifrar toda la comunicación posterior.",
            "<strong>Autenticación</strong>: el cliente se autentica (mediante contraseña o clave pública).",
            "<strong>Inicio de sesión</strong>: una vez autenticado, la conexión está segura y el usuario puede interactuar con el servidor."
          ]
        },
        {
          "type": "h3",
          "text": "Métodos de autenticación"
        },
        {
          "type": "p",
          "text": "SSH soporta diversos métodos de autenticación, entre los que se incluyen:"
        },
        {
          "type": "ul",
          "items": [
            "Autenticación por contraseña.",
            "Autenticación por clave pública/privada.",
            "Autenticación mediante certificados.",
            "Autenticación con Kerberos.",
            "Autenticación basada en teclado interactivo o challenge-response.",
            "Autenticación por agente."
          ]
        },
        {
          "type": "h3",
          "text": "Autenticación por contraseña"
        },
        {
          "type": "p",
          "text": "Es el método más básico y común. El cliente intenta conectarse al servidor SSH y se le solicita ingresar su nombre de usuario y contraseña. El servidor verifica si las credenciales coinciden con las almacenadas previamente en el sistema remoto. Aunque es fácil de usar, es <strong>menos seguro</strong> que otros métodos porque las contraseñas pueden ser vulnerables a ataques de fuerza bruta o robo."
        },
        {
          "type": "ol",
          "items": [
            "El cliente envía el nombre de usuario al servidor.",
            "El servidor solicita la contraseña.",
            "El cliente ingresa la contraseña, que se transmite de manera cifrada al servidor.",
            "El servidor verifica si la contraseña es correcta, y si lo es, concede acceso."
          ]
        },
        {
          "type": "h3",
          "text": "Autenticación por clave pública/privada"
        },
        {
          "type": "p",
          "text": "Es el método más seguro y ampliamente recomendado. El cliente genera un par de claves: una <strong>clave privada</strong> que se guarda en su sistema y una <strong>clave pública</strong> que se copia en el servidor. Al intentar conectarse, el servidor usa la clave pública para cifrar un mensaje, y el cliente debe descifrarlo con su clave privada. Si la descodificación es correcta, la autenticación es exitosa."
        },
        {
          "type": "ol",
          "items": [
            "El cliente genera un par de claves (pública y privada).",
            "La clave pública se almacena en el servidor (en <code>~/.ssh/authorized_keys</code>).",
            "Durante la conexión, el servidor cifra un desafío con la clave pública del cliente.",
            "El cliente utiliza su clave privada para descifrar el desafío.",
            "Si el cliente descifra correctamente el mensaje, la autenticación se considera válida, y no es necesario el uso de contraseñas."
          ]
        },
        {
          "type": "p",
          "text": "Con este método se garantiza que solo quien posee la clave privada puede autenticarse, y no requiere intercambiar ni enviar contraseñas."
        },
        {
          "type": "h3",
          "text": "¿Cómo se generan las claves pública/privada?",
          "criollo": "Un solo comando: ssh-keygen. Ojo con la frase (passphrase)."
        },
        {
          "type": "p",
          "text": "El procedimiento incluye la generación de ambas llaves; para esto se debe ejecutar el comando:"
        },
        {
          "type": "code",
          "code": "ssh-keygen"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Se recomienda leer el <code>man</code>ual del comando, ya que puede ser útil investigar cuestiones como el tamaño de la clave, el tipo de claves que se pueden utilizar o el uso de contraseñas en la misma."
        },
        {
          "type": "p",
          "text": "Al ejecutar el comando, el generador de claves preguntará dónde deseamos guardarlas. Si no indicamos un lugar diferente, se generarán por default en el home del usuario, dentro del directorio <code>.ssh</code>, con el nombre <code>id_rsa</code> para la clave privada e <code>id_rsa.pub</code> para la clave pública. Luego preguntará si queremos establecer una frase (passphrase) como contraseña de las claves; en la cursada se deja en blanco presionando enter (aunque dejarlo vacío ya es una forma de establecerle contraseña, por lo que pedirá repetirlo)."
        },
        {
          "type": "code",
          "code": "Generating public/private rsa key pair.\nEnter file in which to save the key (/root/.ssh/id_rsa):\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:"
        },
        {
          "type": "p",
          "text": "El proceso genera los 2 archivos ya mencionados:"
        },
        {
          "type": "ul",
          "items": [
            "<code>id_rsa</code>: esta clave <strong>NO SE DEBE COMPARTIR</strong>.",
            "<code>id_rsa.pub</code>: esta clave es la que <strong>SÍ SE DEBE compartir</strong> con el servidor remoto."
          ]
        },
        {
          "type": "code",
          "code": "Your identification has been saved in /root/.ssh/id_rsa\nYour public key has been saved in /root/.ssh/id_rsa.pub\nThe key fingerprint is:\nSHA256:Dov8cjwUdek9xEr8NQVF5vSI2gBW14NkXipwl051rTk root@debian11-CA"
        },
        {
          "type": "h3",
          "text": "¿Cómo copiar la clave pública al servidor remoto?"
        },
        {
          "type": "p",
          "text": "Para que el servidor acepte el ingreso por medio de llaves, primero debemos copiar la clave pública que generamos dentro del archivo <code>authorized_keys</code> del servidor al que deseamos conectarnos. Para esto utilizaremos el comando <code>ssh-copy-id</code>:"
        },
        {
          "type": "code",
          "code": "ssh-copy-id usuario@servidor_remoto\nssh-copy-id root@192.168.0.201"
        },
        {
          "type": "p",
          "text": "Al intentar copiar la clave, mostrará un mensaje indicando lo que queremos realizar y se quedará esperando la contraseña del usuario (en este caso, root), que es con el que queremos realizar la conexión."
        },
        {
          "type": "code",
          "code": "/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed\n/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys\nroot@192.168.0.201's password:\n\nNumber of key(s) added: 1\nNow try logging into the machine, with:   \"ssh 'root@192.168.0.201'\"\nand check to make sure that only the key(s) you wanted were added."
        },
        {
          "type": "p",
          "text": "Luego de introducir la contraseña, se copiará la llave pública y nos invitará a volver a probar la conexión, para comprobar que las tareas realizadas fueron correctas. Si todo salió bien, la próxima conexión no debería pedir contraseña. De esta forma, ahora podemos conectarnos de acá en más por medio de las claves pública y privada."
        },
        {
          "type": "p",
          "text": "Para desloguearnos de una conexión SSH establecida, debemos ejecutar el comando:"
        },
        {
          "type": "code",
          "code": "exit"
        }
      ],
      "quiz": {
        "tf": [
          {
            "id": "tf-18-1",
            "q": "El cliente SSH suele venir ya instalado en la mayoría de las distribuciones, pero el servidor puede requerir instalar el paquete openssh-server.",
            "a": true,
            "explain": "El cliente viene instalado casi siempre; el servidor a veces hay que instalarlo con apt-get install openssh-server."
          },
          {
            "id": "tf-18-2",
            "q": "La clave privada (id_rsa) es la que se debe compartir con el servidor remoto.",
            "a": false,
            "explain": "La que se comparte es la clave pública (id_rsa.pub). La privada id_rsa NO se debe compartir."
          },
          {
            "id": "tf-18-3",
            "q": "Por default, la línea port de sshd_config viene comentada y usa el puerto 22.",
            "a": true,
            "explain": "Viene comentada usando el puerto 22; las buenas prácticas recomiendan cambiarlo para evitar ataques."
          },
          {
            "id": "tf-18-4",
            "q": "La autenticación por contraseña es más segura que la autenticación por clave pública/privada.",
            "a": false,
            "explain": "Es menos segura: las contraseñas son vulnerables a fuerza bruta o robo. La de clave pública/privada es la más segura y recomendada."
          },
          {
            "id": "tf-18-5",
            "q": "El comando ssh-copy-id sirve para copiar la clave pública al archivo authorized_keys del servidor remoto.",
            "a": true,
            "explain": "ssh-copy-id usuario@servidor_remoto copia la clave pública dentro del authorized_keys del servidor."
          }
        ],
        "mc": [
          {
            "id": "mc-18-1",
            "q": "¿Dónde se encuentran los archivos de configuración de OpenSSH?",
            "options": [
              "/home/ssh",
              "/etc/ssh",
              "/usr/ssh",
              "/var/ssh"
            ],
            "correctIndex": 1,
            "explain": "Los archivos de configuración de OpenSSH están en /etc/ssh (sshd_config y ssh_config)."
          },
          {
            "id": "mc-18-2",
            "q": "¿Qué comando se ejecuta para generar el par de claves pública/privada?",
            "options": [
              "ssh-copy-id",
              "ssh-keygen",
              "openssh-server",
              "ssh-add"
            ],
            "correctIndex": 1,
            "explain": "ssh-keygen genera ambas llaves; por default id_rsa (privada) e id_rsa.pub (pública) en ~/.ssh."
          },
          {
            "id": "mc-18-3",
            "q": "En sshd_config, ¿qué opción se cambia a \"yes\" para permitir el login de root en el ejemplo práctico?",
            "options": [
              "PubkeyAuthentication",
              "PasswordAuthentication",
              "PermitRootLogin",
              "AuthorizedKeysFile"
            ],
            "correctIndex": 2,
            "explain": "PermitRootLogin viene con Prohibit-password por seguridad; para fines prácticos se pone PermitRootLogin yes."
          },
          {
            "id": "mc-18-4",
            "q": "¿Qué hace ssh usuario@host?",
            "options": [
              "Autentica con el mismo usuario del origen",
              "Autentica con el usuario especificado a la izquierda del @",
              "Copia la clave pública al servidor",
              "Genera un nuevo par de claves"
            ],
            "correctIndex": 1,
            "explain": "ssh usuario@host autentica en el destino con el usuario indicado a la izquierda del @."
          }
        ],
        "ms": [
          {
            "id": "ms-18-1",
            "q": "¿Cuáles de los siguientes son métodos de autenticación que soporta SSH según el apunte?",
            "options": [
              "Autenticación por contraseña",
              "Autenticación por clave pública/privada",
              "Autenticación mediante certificados",
              "Autenticación con Kerberos",
              "Autenticación por huella dactilar"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              3
            ],
            "explain": "El apunte lista contraseña, clave pública/privada, certificados, Kerberos, teclado interactivo/challenge-response y por agente. La huella dactilar no figura."
          },
          {
            "id": "ms-18-2",
            "q": "¿Cuáles de estas afirmaciones sobre las claves generadas por ssh-keygen son correctas?",
            "options": [
              "id_rsa es la clave privada y no se debe compartir",
              "id_rsa.pub es la clave pública que se comparte",
              "Por default se guardan en el directorio .ssh del home",
              "La passphrase es obligatoria en la cursada",
              "La clave pública se guarda en ~/.ssh/authorized_keys del servidor"
            ],
            "correctIndexes": [
              0,
              1,
              2,
              4
            ],
            "explain": "id_rsa (privada, no compartir), id_rsa.pub (pública, se comparte), se guardan por default en .ssh, y la pública va a authorized_keys del servidor. La passphrase se deja en blanco en la cursada, no es obligatoria."
          },
          {
            "id": "ms-18-3",
            "q": "¿Qué opciones aparecen en el archivo ssh_config (configuración del cliente)?",
            "options": [
              "Host",
              "IdentityFile",
              "PermitRootLogin",
              "PubkeyAuthentication",
              "AuthorizedKeysFile"
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explain": "ssh_config incluye Host, port, PubkeyAuthentication, IdentityFile y PasswordAuthentication. PermitRootLogin y AuthorizedKeysFile pertenecen a sshd_config (servidor)."
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-18-1",
          "front": "¿Qué es SSH?",
          "back": "Es el nombre de un protocolo y del programa que lo implementa. Se usa para acceder a servidores de forma remota y administrarlos por medio de un intérprete de comandos, todo por un canal seguro."
        },
        {
          "id": "fc-18-2",
          "front": "Cliente vs Servidor SSH",
          "back": "El cliente SSH es el equipo desde el cual se establece la conexión remota; el servidor SSH es el equipo al que se conecta el cliente."
        },
        {
          "id": "fc-18-3",
          "front": "Archivos de config de OpenSSH",
          "back": "Están en /etc/ssh. sshd_config configura SSH como servidor y ssh_config como cliente."
        },
        {
          "id": "fc-18-4",
          "front": "PermitRootLogin",
          "back": "Opción de sshd_config que por seguridad viene en Prohibit-password. Para fines prácticos se pone en yes para permitir el login de root."
        },
        {
          "id": "fc-18-5",
          "front": "ssh-keygen",
          "back": "Comando que genera el par de claves. Por default crea id_rsa (privada) e id_rsa.pub (pública) dentro de ~/.ssh."
        },
        {
          "id": "fc-18-6",
          "front": "id_rsa vs id_rsa.pub",
          "back": "id_rsa es la clave privada y NO se debe compartir. id_rsa.pub es la clave pública y es la que SÍ se comparte con el servidor remoto."
        },
        {
          "id": "fc-18-7",
          "front": "ssh-copy-id",
          "back": "Copia la clave pública dentro del archivo authorized_keys del servidor remoto, para permitir el ingreso por llaves sin contraseña."
        },
        {
          "id": "fc-18-8",
          "front": "ssh host vs ssh usuario@host",
          "back": "ssh host autentica con el mismo usuario del origen; ssh usuario@host autentica con el usuario indicado a la izquierda del @."
        },
        {
          "id": "fc-18-9",
          "front": "Salir de una sesión SSH",
          "back": "Se ejecuta el comando exit para desloguearse de una conexión SSH establecida."
        }
      ]
    }
  ],
  "pdfs": [
    {
      "key": "01-historia-gnu-linux",
      "label": "01 — Historia, origen y evolución de GNU/Linux",
      "path": "pdfs/administracion-gnu-linux/01-historia-gnu-linux.pdf"
    },
    {
      "key": "02-virtualizacion",
      "label": "02 — Virtualización",
      "path": "pdfs/administracion-gnu-linux/02-virtualizacion.pdf"
    },
    {
      "key": "03-shell-terminal",
      "label": "03 — Shell: introducción a la terminal",
      "path": "pdfs/administracion-gnu-linux/03-shell-terminal.pdf"
    },
    {
      "key": "04-estandar-fhs",
      "label": "04 — El estándar FHS",
      "path": "pdfs/administracion-gnu-linux/04-estandar-fhs.pdf"
    },
    {
      "key": "05-comandos",
      "label": "05 — Comandos",
      "path": "pdfs/administracion-gnu-linux/05-comandos.pdf"
    },
    {
      "key": "06-editores-de-texto",
      "label": "06 — Editores de texto",
      "path": "pdfs/administracion-gnu-linux/06-editores-de-texto.pdf"
    },
    {
      "key": "07-gestor-de-software",
      "label": "07 — Gestor de software",
      "path": "pdfs/administracion-gnu-linux/07-gestor-de-software.pdf"
    },
    {
      "key": "08-octal-simbolico",
      "label": "08 — Formato octal y formato simbólico",
      "path": "pdfs/administracion-gnu-linux/08-octal-simbolico.pdf"
    },
    {
      "key": "09-permisos-especiales",
      "label": "09 — Permisos especiales",
      "path": "pdfs/administracion-gnu-linux/09-permisos-especiales.pdf"
    },
    {
      "key": "10-umask",
      "label": "10 — Umask",
      "path": "pdfs/administracion-gnu-linux/10-umask.pdf"
    },
    {
      "key": "11-sudo",
      "label": "11 — SUDO",
      "path": "pdfs/administracion-gnu-linux/11-sudo.pdf"
    },
    {
      "key": "12-usuarios",
      "label": "12 — Administración de usuarios",
      "path": "pdfs/administracion-gnu-linux/12-usuarios.pdf"
    },
    {
      "key": "13-redirecciones-pipes",
      "label": "13 — Redirecciones y pipes",
      "path": "pdfs/administracion-gnu-linux/13-redirecciones-pipes.pdf"
    },
    {
      "key": "14-streams-filtros",
      "label": "14 — Streams y filtros",
      "path": "pdfs/administracion-gnu-linux/14-streams-filtros.pdf"
    },
    {
      "key": "15-expresiones-regulares",
      "label": "15 — Expresiones regulares",
      "path": "pdfs/administracion-gnu-linux/15-expresiones-regulares.pdf"
    },
    {
      "key": "16-redes",
      "label": "16 — Redes",
      "path": "pdfs/administracion-gnu-linux/16-redes.pdf"
    },
    {
      "key": "17-dns-dhcp",
      "label": "17 — DNS y DHCP",
      "path": "pdfs/administracion-gnu-linux/17-dns-dhcp.pdf"
    },
    {
      "key": "18-ssh",
      "label": "18 — SSH",
      "path": "pdfs/administracion-gnu-linux/18-ssh.pdf"
    }
  ],
  "resumen": {
    "intro": "Toda la materia condensada para el final: desde la historia del sistema y el manejo de la shell, pasando por permisos, umask, sudo y usuarios, hasta el procesamiento de texto (pipes, filtros, regex) y las redes con DNS, DHCP y SSH.",
    "units": [
      {
        "unit": "1",
        "sections": [
          {
            "id": "1",
            "title": "Historia, origen y evolución de GNU/Linux",
            "blocks": [
              {
                "type": "p",
                "text": "<strong>Richard Stallman</strong> (MIT, años 70) vio cómo la cultura de compartir software se cerraba con licencias propietarias. El caso que lo detonó: no pudo modificar el programa de una impresora <strong>Xerox</strong> porque el código estaba cerrado. Concluyó que el <strong>software propietario era una amenaza a la libertad</strong>."
              },
              {
                "type": "p",
                "text": "En <strong>1983</strong> anunció el proyecto <strong>GNU</strong> (<strong>GNU's not Unix</strong>) para crear un sistema operativo completamente libre. Escribió la <strong>GPL (Licencia Pública General)</strong>, que garantiza que el software siga libre incluso al ser modificado o redistribuido, y herramientas clave como <code>GCC</code> y <code>Emacs</code>."
              },
              {
                "type": "p",
                "text": "Origen técnico: en los 60, MIT + General Electric + Bell Labs desarrollan <strong>Multics</strong>, primer SO de tiempo compartido, pero complejo y costoso (Bell Labs lo abandona en 1969). <strong>Ken Thompson</strong> aprovecha sus ideas y crea <strong>Unix</strong> (1971), más simple y portable, que luego se vuelve propietario bajo <strong>AT&amp;T</strong>."
              },
              {
                "type": "table",
                "caption": "Hitos de Unix",
                "headers": [
                  "Año",
                  "Hito"
                ],
                "rows": [
                  [
                    "1973",
                    "Unix se reescribe en C: más portable, se adopta en universidades."
                  ],
                  [
                    "1975",
                    "Se distribuye a universidades; Berkeley crea su versión: BSD."
                  ],
                  [
                    "1980",
                    "Fragmentación: System V (AT&T), SunOS (Sun), AIX (IBM), HP-UX (HP)."
                  ],
                  [
                    "1983",
                    "Stallman inicia el proyecto GNU."
                  ],
                  [
                    "2001",
                    "Apple lanza macOS, basado en Unix (variante de BSD)."
                  ],
                  [
                    "2010",
                    "Unix comercial pierde mercado frente a GNU/Linux por costo y comunidad."
                  ]
                ]
              },
              {
                "type": "callout",
                "tone": "info",
                "text": "<strong>GNU/Linux superó a Unix</strong> en servidores, supercomputadoras y móviles (Android). En servidores y centros de cómputo es el <strong>estándar de facto</strong>: la mayor parte de internet corre sobre Linux."
              },
              {
                "type": "p",
                "text": "En <strong>1991</strong>, <strong>Linus Torvalds</strong>, estudiante finlandés, empezó a desarrollar un kernel inspirado en Unix para su IBM PC (Intel 80386), harto de las limitaciones de <strong>Minix</strong> (variante educativa de Unix de Andrew Tanenbaum). El 25 de agosto de 1991 lo anunció en Usenet. Su enfoque era práctico, no filosófico. Al liberarlo bajo la <strong>GPL</strong>, la comunidad mundial se sumó y <strong>el kernel Linux y las herramientas GNU encontraron su compatibilidad natural</strong>."
              },
              {
                "type": "p",
                "text": "El <strong>kernel</strong> es un conjunto de programas con control completo sobre el sistema: media entre hardware y software, suele cargarse de los primeros y gestiona memoria y periféricos. El nombre <strong>GNU/Linux</strong> une <strong>GNU</strong> (Stallman, las herramientas) y <strong>Linux</strong> (Torvalds, el kernel)."
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "Resumido: Stallman puso las herramientas y la filosofía, Torvalds puso el kernel, y juntos se comieron a Unix."
              }
            ]
          },
          {
            "id": "2",
            "title": "Virtualización",
            "blocks": [
              {
                "type": "p",
                "text": "La <strong>virtualización</strong> permite ejecutar múltiples sistemas operativos y aplicaciones sobre el mismo hardware físico, creando <strong>máquinas virtuales</strong> en un entorno simulado. El software recrea los componentes del hardware (disco, red, CPU, video) como lógicos, y permite <strong>escalar horizontal y verticalmente</strong> según lo que el fierro físico permita."
              },
              {
                "type": "p",
                "text": "Los servidores que administran las VMs se llaman <strong>hipervisores</strong>; los recursos de cada VM dependen del hardware anfitrión. El concepto viene desde fines de los 60 con el <strong>mainframe</strong> de IBM (primer modelo con esa capacidad: <strong>IBM S/360 Modelo 67</strong>). En los 90, <strong>VMware</strong> desarrolló los primeros hipervisores modernos, apoyándose en las extensiones <strong>IVT</strong> (Intel) y <strong>AMD-V</strong> (AMD)."
              },
              {
                "type": "table",
                "caption": "Los dos tipos de hipervisor",
                "headers": [
                  "Tipo",
                  "Cómo corre",
                  "Ejemplos"
                ],
                "rows": [
                  [
                    "Tipo 1 (BareMetal)",
                    "Corre directamente sobre el hardware; las VMs acceden directo a los componentes.",
                    "Proxmox VE, Xen, KVM, MS Hyper-V, VMware ESXi"
                  ],
                  [
                    "Tipo 2 (Hosted)",
                    "Corre sobre un SO estándar (Windows o GNU/Linux) mediante software dedicado.",
                    "VMware Workstation/Player, Parallels Desktop, UTM, VirtualBox, QEMU"
                  ]
                ]
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "La clave del parcial: tipo 1 pega directo al fierro, tipo 2 va montado arriba de un SO ya instalado."
              }
            ]
          },
          {
            "id": "3",
            "title": "Shell: introducción a la terminal",
            "blocks": [
              {
                "type": "p",
                "text": "La <strong>terminal de texto</strong> es una interfaz de línea de comandos (<code>CLI</code> - Command Line Interface) donde se interactúa con el SO por texto. En GNU/Linux es fundamental porque da control más directo, preciso, flexible y rápido que la interfaz gráfica (<code>GUI</code>), aunque la GUI también permite muchas de esas tareas."
              },
              {
                "type": "p",
                "text": "El <strong>shell</strong> es el programa que interpreta los comandos que el usuario escribe, actuando como <strong>intermediario</strong> entre el usuario y el sistema operativo."
              },
              {
                "type": "table",
                "caption": "Shells más conocidos",
                "headers": [
                  "Shell",
                  "Descripción"
                ],
                "rows": [
                  [
                    "sh (Bourne Shell)",
                    "El primer shell de Unix, creado por Stephen Bourne en los 70."
                  ],
                  [
                    "Bash (Bourne Again Shell)",
                    "El más común en GNU/Linux; evolución de sh y predeterminado en muchas distros."
                  ],
                  [
                    "Zsh (Z Shell)",
                    "De los más potentes y flexibles, basado en sh con características avanzadas."
                  ],
                  [
                    "Csh (C Shell)",
                    "De Bill Joy, basado en la sintaxis del lenguaje C."
                  ],
                  [
                    "Ksh (Korn Shell)",
                    "Evolución de Csh con funciones avanzadas; combinación de sh y csh."
                  ]
                ]
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "Si no sabés qué shell tenés en Linux, casi seguro es Bash: viene por defecto en la mayoría de las distros."
              }
            ]
          },
          {
            "id": "4",
            "title": "El estándar FHS",
            "blocks": [
              {
                "type": "p",
                "text": "El <strong>FHS (Filesystem Hierarchy Standard)</strong> define la estructura de directorios y el contenido de los sistemas tipo Unix como Linux, para mantener consistencia entre distribuciones. Comenzó en <strong>1993</strong> como punto de referencia único sobre dónde va cada cosa."
              },
              {
                "type": "table",
                "caption": "Directorios principales del FHS",
                "headers": [
                  "Directorio",
                  "Función"
                ],
                "rows": [
                  [
                    "/",
                    "Raíz: el de mayor importancia, del que dependen todos los demás. Si se llena, el sistema puede fallar catastróficamente."
                  ],
                  [
                    "/boot",
                    "Archivos del gestor de arranque (GRUB)."
                  ],
                  [
                    "/dev",
                    "Archivos de dispositivo: como todo en Linux es un archivo, cada hardware (discos, mouse, teclado) se representa aquí."
                  ],
                  [
                    "/etc",
                    "Archivos de configuración del sistema. No van binarios ni datos de usuarios."
                  ],
                  [
                    "/home",
                    "Directorio personal de cada usuario; suele ir en partición aparte."
                  ],
                  [
                    "/bin y /sbin",
                    "Ejecutables binarios críticos para iniciar el sistema. /sbin es solo para administradores."
                  ],
                  [
                    "/opt y /usr/local",
                    "Para instalar software fuera de la distribución sin sobrescribir archivos del sistema."
                  ],
                  [
                    "/mnt y /media",
                    "Puntos de montaje: /media para uso temporal (cd-rom, pendrives), /mnt para uso prolongado (discos externos, red)."
                  ],
                  [
                    "/proc",
                    "Estado del sistema y procesos en ejecución. No tiene archivos reales: se genera en memoria."
                  ],
                  [
                    "/root",
                    "El \"home\" del superusuario root, colgado directo del /."
                  ],
                  [
                    "/var",
                    "Archivos que pueden variar en tamaño."
                  ]
                ]
              },
              {
                "type": "ul",
                "items": [
                  "<strong>Estáticos</strong>: no cambian sin root pero cualquiera los lee (<code>/bin</code>, <code>/sbin</code>, <code>/opt</code>, <code>/boot</code>, <code>/usr</code>).",
                  "<strong>Dinámicos</strong>: sus archivos cambian (documentos, config); conviene partición aparte.",
                  "<strong>Compartidos</strong>: pueden estar en otro servidor y usarse como locales.",
                  "<strong>Restringidos</strong>: solo los toca el administrador (<code>/etc</code>, <code>/boot</code>, <code>/run</code>, <code>/lock</code>)."
                ]
              },
              {
                "type": "p",
                "text": "En Linux <strong>todo es un archivo</strong> (dispositivos, directorios, enlaces). El tipo se reconoce por el primer carácter de los permisos en <code>ls -l</code>."
              },
              {
                "type": "table",
                "caption": "Tipos de archivos en ls -l",
                "headers": [
                  "Identificador",
                  "Tipo"
                ],
                "rows": [
                  [
                    "-",
                    "Archivo regular (documentos, programas, scripts)."
                  ],
                  [
                    "d",
                    "Directorio."
                  ],
                  [
                    "c",
                    "Dispositivo de caracteres (info de a un carácter por vez)."
                  ],
                  [
                    "b",
                    "Dispositivo de bloques (info en bloques grandes de tamaño fijo)."
                  ],
                  [
                    "p",
                    "Pipe: canaliza dos comandos por una tubería temporal."
                  ],
                  [
                    "l",
                    "Link: enlace simbólico (softlink o hardlink)."
                  ]
                ]
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "Para el parcial memorizá las seis letras del <code>ls -l</code>: <code>-</code> regular, <code>d</code> dir, <code>c</code> caracteres, <code>b</code> bloques, <code>p</code> pipe, <code>l</code> link."
              }
            ]
          },
          {
            "id": "5",
            "title": "Comandos",
            "blocks": [
              {
                "type": "p",
                "text": "Un <strong>comando</strong> es una instrucción que le dice al sistema que haga una operación. Su sintaxis general:"
              },
              {
                "type": "code",
                "code": "$ comando [opciones] [argumentos]"
              },
              {
                "type": "ul",
                "items": [
                  "Las <strong>[opciones]</strong> modifican el comportamiento (en <code>ls -l</code>, el <code>-l</code>).",
                  "El <strong>[argumento]</strong> es el objeto sobre el que actúa (en <code>ls -l /var</code>, el <code>/var</code>)."
                ]
              },
              {
                "type": "callout",
                "tone": "warning",
                "text": "Linux es <strong>case-sensitive</strong>: <code>archivo</code>, <code>Archivo</code> y <code>ARCHIVO</code> son distintos, y <code>LS</code> en mayúsculas da error. Usá <code>tab</code> para autocompletar."
              },
              {
                "type": "ul",
                "items": [
                  "<code>man</code>: muestra el manual de un comando (ej: <code>man ls</code>).",
                  "<code>pwd</code>: muestra el directorio actual.",
                  "<code>whatis</code>: descripción breve de un comando. <code>whereis</code>: ubicación del binario. <code>logout</code>: cierra sesión."
                ]
              },
              {
                "type": "table",
                "caption": "Opciones de ls",
                "headers": [
                  "Opción",
                  "Qué hace"
                ],
                "rows": [
                  [
                    "-l",
                    "Detalles: permisos, propietario, tamaño"
                  ],
                  [
                    "-a",
                    "Muestra archivos ocultos"
                  ],
                  [
                    "-t",
                    "Ordena por fecha de modificación"
                  ],
                  [
                    "-r",
                    "Orden inverso"
                  ],
                  [
                    "-h",
                    "Tamaños en formato legible (KB, MB)"
                  ]
                ]
              },
              {
                "type": "ul",
                "items": [
                  "<code>cd</code>: cambia de directorio (<code>cd ..</code> sube de nivel).",
                  "<code>touch</code>: crea un archivo vacío.",
                  "<code>mkdir</code>: crea un directorio; <code>mkdir -p a/b/c</code> crea anidados.",
                  "<code>cat</code>: muestra el contenido de un archivo.",
                  "<code>cp</code>: copia (<code>-r</code> recursivo, <code>-v</code> verboso).",
                  "<code>mv</code>: mueve o renombra archivos y directorios.",
                  "<code>rm</code>: elimina archivos (<code>-r</code> recursivo, <code>-f</code> forzado). <code>rmdir</code>: borra directorio solo si está vacío.",
                  "<code>shutdown -r now</code> reinicia; <code>shutdown -h now</code> apaga."
                ]
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "Ojo con <code>rm -rf</code>: borra todo recursivo y sin preguntar. Un dedazo ahí y te comés un garrón. 💀"
              }
            ]
          },
          {
            "id": "6",
            "title": "Editores de texto",
            "blocks": [
              {
                "type": "p",
                "text": "Un <strong>editor de texto</strong> corre en la terminal y permite crear, ver y modificar archivos de <strong>texto plano</strong>, sin formato ni metadatos (a diferencia de un procesador como Word). Es esencial porque la configuración del sistema y los scripts se manejan en texto plano."
              },
              {
                "type": "ul",
                "items": [
                  "<strong>Pico</strong>: sencillo y minimalista, parte original del cliente de correo Pine; barra de comandos abajo.",
                  "<strong>Nano</strong>: clon de Pico con extras, preinstalado en muchas distros.",
                  "<strong>Emacs</strong>: de los más poderosos y extensibles, creado por Stallman en el proyecto GNU.",
                  "<strong>VI</strong>: editor estándar de Linux y Unix, creado por Bill Joy en 1976; ligero y eficiente.",
                  "<strong>VIM</strong>: versión mejorada de VI, creada en 1991 por Bram Moolenaar, \"editor para programadores\"."
                ]
              },
              {
                "type": "ul",
                "items": [
                  "<strong>Modo comando</strong>: las teclas ejecutan acciones; es el modo inicial al abrir VIM.",
                  "<strong>Modo texto (inserción)</strong>: con <code>i</code>, para escribir caracteres.",
                  "<strong>Modo EX o última línea</strong>: con <code>:</code>, para comandos y búsqueda."
                ]
              },
              {
                "type": "table",
                "caption": "Comandos básicos de VI / VIM",
                "headers": [
                  "Comando",
                  "Acción"
                ],
                "rows": [
                  [
                    "i",
                    "Inserta texto a la izquierda del cursor"
                  ],
                  [
                    "Esc",
                    "Vuelve al modo comando"
                  ],
                  [
                    "x",
                    "Borra el carácter bajo el cursor"
                  ],
                  [
                    "dd / yy",
                    "Corta / copia la línea (con número delante: 5dd, 5yy)"
                  ],
                  [
                    "p / P",
                    "Pega debajo / sobre el cursor"
                  ],
                  [
                    ": + w",
                    "Guarda el archivo"
                  ],
                  [
                    ": + q",
                    "Sale sin guardar"
                  ],
                  [
                    ": + set nu",
                    "Numera las líneas"
                  ],
                  [
                    "u",
                    "Deshace el último cambio"
                  ],
                  [
                    "/",
                    "Busca palabras"
                  ]
                ]
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "La regla de oro de VIM: entendé los modos primero, o vas a quedar atrapado sin poder ni salir del editor."
              }
            ]
          },
          {
            "id": "7",
            "title": "Gestor de software",
            "blocks": [
              {
                "type": "p",
                "text": "Un <strong>gestor de paquetes</strong> automatiza la instalación, actualización, configuración y eliminación de software. Cada distro usa el suyo, con su archivo de configuración que apunta a repositorios propios."
              },
              {
                "type": "table",
                "caption": "Gestores por distribución",
                "headers": [
                  "Distribución",
                  "Gestor",
                  "Config"
                ],
                "rows": [
                  [
                    "RedHat",
                    "YUM",
                    "/etc/yum.conf"
                  ],
                  [
                    "ArchLinux",
                    "PACMAN",
                    "/etc/pacman.conf"
                  ],
                  [
                    "Debian",
                    "APT",
                    "/etc/apt/sources.list"
                  ]
                ]
              },
              {
                "type": "p",
                "text": "Una <strong>distribución</strong> (\"distro\") es un SO basado en el kernel de Linux con herramientas y configuraciones propias. Según su modelo de actualización: <strong>Rolling Release</strong> se actualiza de forma continua sin versiones fijas (Arch, OpenSUSE), más riesgo de inestabilidad; <strong>Standard Release</strong> agrupa updates en versiones estables periódicas (Debian, Ubuntu LTS, Fedora), prioriza estabilidad."
              },
              {
                "type": "p",
                "text": "El <code>sources.list</code> almacena los repositorios con la lista de paquetes disponibles. Formato de cada línea: <code>deb [opciones] uri distro [componentes]</code>."
              },
              {
                "type": "ul",
                "items": [
                  "<strong>deb</strong>: paquetes binarios precompilados <code>.deb</code>. <strong>deb-src</strong>: paquetes fuente (originales + control y diferenciales).",
                  "<strong>uri</strong>: URL del repositorio. <strong>distro</strong>: nombre (bullseye, bookworm, etc.).",
                  "<strong>componentes</strong>: <code>main</code> (libres, cumplen DFSG), <code>contrib</code> (libres pero con dependencias no gratuitas), <code>non-free</code> (con costo: drivers, codecs)."
                ]
              },
              {
                "type": "p",
                "text": "<strong>APT (Advanced Package Tool)</strong> es la capa de alto nivel: resuelve y descarga dependencias e interactúa con repositorios. <code>dpkg</code> es la capa inferior: gestiona archivos <code>.deb</code> locales y <strong>no resuelve dependencias</strong>. <code>apt</code> (desde Debian 8 \"Jessie\") es una interfaz más amigable que combina <code>apt-get</code> y <code>apt-cache</code>; hoy ambos funcionan bien."
              },
              {
                "type": "p",
                "text": "La gestión de paquetes requiere permisos de administrador o <code>sudo</code>. Al instalar, el gestor consulta el índice local, busca en los repos del <code>sources.list</code>, descarga y los instala localmente."
              },
              {
                "type": "table",
                "caption": "Comandos principales",
                "headers": [
                  "Comando",
                  "Qué hace"
                ],
                "rows": [
                  [
                    "apt-get update",
                    "Actualiza el índice local comparándolo con los repos del sources.list"
                  ],
                  [
                    "apt-get install [app]",
                    "Instala la aplicación"
                  ],
                  [
                    "apt-get upgrade",
                    "Actualiza paquetes instalados a sus últimas versiones"
                  ],
                  [
                    "apt-get remove [app]",
                    "Elimina la app, conserva la configuración"
                  ],
                  [
                    "apt-get purge [app]",
                    "Elimina la app y toda su configuración"
                  ],
                  [
                    "apt-cache search [app]",
                    "Busca la app en el índice local"
                  ],
                  [
                    "apt show [app]",
                    "Muestra versión, dependencias, tamaño y descripción"
                  ]
                ]
              },
              {
                "type": "p",
                "text": "Debian permite el <strong>upgrade de distribución</strong> (versión mayor sin reinstalar): se cambian los repos del <code>sources.list</code> a la nueva distro (ej: Bullseye → Bookworm), se corre <code>apt update</code> y finalmente <code>apt full-upgrade</code>, que actualiza componentes del SO, reemplaza bibliotecas, actualiza servicios y puede modificar configuraciones previo aviso. Después <code>reboot</code>. La versión se verifica con <code>lsb_release -a</code> o <code>cat /etc/debian_version</code>."
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "Regla clave: APT resuelve el quilombo de dependencias, dpkg no. Y podés saltar de Debian 11 a 12 sin reinstalar de cero."
              }
            ]
          }
        ]
      },
      {
        "unit": "2",
        "sections": [
          {
            "id": "8",
            "title": "Formato octal y formato simbólico",
            "blocks": [
              {
                "type": "p",
                "text": "Cada archivo y directorio tiene permisos que definen quién puede <strong>leer, escribir o ejecutar</strong>. Hay 2 formas de asignarlos: <strong>formato octal</strong> (números) y <strong>formato simbólico</strong> (letras y operadores), más 3 permisos especiales: <strong>SetUID</strong>, <strong>SetGID</strong> y <strong>StickyBit</strong>."
              },
              {
                "type": "p",
                "text": "Los permisos se dividen en 3 grupos: <strong>Usuario (owner)</strong>, <strong>Grupo (group)</strong> y <strong>Otros (others)</strong>. Se representan con una cadena de <strong>10 posiciones</strong>, ej: <code>-rwxr-xr--</code>. El primer carácter indica el tipo (<code>-</code> archivo, <code>d</code> directorio) y los 9 restantes son 3 grupos de <code>rwx</code>. Se listan con <code>ls -l</code>."
              },
              {
                "type": "h3",
                "text": "Peso binario de cada permiso"
              },
              {
                "type": "p",
                "text": "Cada permiso tiene un valor: <strong>r = 4</strong>, <strong>w = 2</strong>, <strong>x = 1</strong>. El valor octal es la suma de los presentes. Ej: <code>rwx = 7</code>, <code>rw- = 6</code>, <code>r-x = 5</code>, <code>r-- = 4</code>. Cada grupo de 3 bits da $2^3 = 8$ combinaciones posibles (0 a 7)."
              },
              {
                "type": "h3",
                "text": "Asignar permisos en formato octal"
              },
              {
                "type": "p",
                "text": "Se usa el comando <code>chmod</code> con los tres dígitos (owner, grupo, otros):"
              },
              {
                "type": "code",
                "code": "chmod 754 archivo"
              },
              {
                "type": "h3",
                "text": "Formato simbólico"
              },
              {
                "type": "p",
                "text": "También con <code>chmod</code>, indicando <strong>quién</strong> (<code>u</code> owner, <code>g</code> grupo, <code>o</code> otros), el <strong>operador</strong> (<code>+</code> añadir, <code>-</code> quitar, <code>=</code> establecer) y el <strong>permiso</strong> (<code>r</code>/<code>w</code>/<code>x</code>)."
              },
              {
                "type": "code",
                "code": "chmod u+rw archivo\nchmod g-w archivo\nchmod a=rx archivo"
              },
              {
                "type": "h3",
                "text": "Cambio de propietario y grupo"
              },
              {
                "type": "p",
                "text": "<code>chown</code> cambia el propietario y <code>chgrp</code> el grupo. El usuario <strong>root</strong> puede cambiar ambos en una sola sentencia con <code>usuario:grupo</code>."
              },
              {
                "type": "code",
                "code": "chown alumno archivo\nchgrp grupo archivo\nchown alumno:alumno salida.txt"
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "r=4, w=2, x=1: sumás y tenés el octal; con letras y +/-/= ni hacés cuentas."
              }
            ]
          },
          {
            "id": "9",
            "title": "Permisos especiales",
            "blocks": [
              {
                "type": "p",
                "text": "Existen <strong>3 bits de permisos especiales</strong> para ejecutables o directorios: <strong>SETuid</strong>, <strong>SETgid</strong> y <strong>StickyBit</strong>. Se setean agregando un dígito octal adelante (4, 2 o 1) o con letras en formato simbólico."
              },
              {
                "type": "ul",
                "items": [
                  "<strong>SETuid</strong>: el ejecutable corre con los <strong>permisos del propietario</strong>. Octal: se agrega un <strong>4</strong>; simbólico: <code>s</code> para usuario.",
                  "<strong>SETgid</strong>: en archivos corre con los <strong>permisos del grupo</strong>; en directorios, todo lo creado adentro <strong>hereda el grupo del directorio</strong>. Octal: <strong>2</strong>; simbólico: <code>s</code> para grupo.",
                  "<strong>StickyBit</strong>: solo el <strong>propietario o root</strong> pueden eliminar el archivo, aunque el directorio tenga escritura para todos. Octal: <strong>1</strong>; simbólico: <code>t</code>."
                ]
              },
              {
                "type": "table",
                "caption": "Asignación de permisos especiales",
                "headers": [
                  "Permiso",
                  "Octal",
                  "Simbólico"
                ],
                "rows": [
                  [
                    "setuid",
                    "chmod 4755 archivo",
                    "chmod u+s archivo"
                  ],
                  [
                    "setgid",
                    "chmod 2755 archivo",
                    "chmod g+s archivo"
                  ],
                  [
                    "stickybit",
                    "chmod 1755 directorio",
                    "chmod +t directorio"
                  ]
                ]
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "SETuid corre como el dueño, SETgid hereda grupo y StickyBit te deja borrar solo lo tuyo."
              }
            ]
          },
          {
            "id": "10",
            "title": "Umask",
            "blocks": [
              {
                "type": "p",
                "text": "<strong>Umask</strong> define los permisos predeterminados de archivos y directorios nuevos. Actúa como un <strong>filtro que resta</strong> permisos de los valores base: <strong>666</strong> (<code>rw-rw-rw-</code>) para archivos y <strong>777</strong> (<code>rwxrwxrwx</code>) para directorios."
              },
              {
                "type": "h3",
                "text": "Cálculo mediante resta"
              },
              {
                "type": "p",
                "text": "Se resta al valor por default el permiso que se quiere conseguir; el resultado es lo que se pasa a <code>umask</code>. Ej, para archivos con permiso 644:"
              },
              {
                "type": "code",
                "code": "0666 - 0644 = 0022\numask 0022   # -> -rw-r--r--"
              },
              {
                "type": "h3",
                "text": "Cálculo mediante operación binaria"
              },
              {
                "type": "p",
                "text": "La otra forma: se pasa el valor default a binario, se hace <strong>NOT Binary</strong> del permiso deseado (negar cada bit) y luego un <strong>AND bit a bit</strong> entre ambos. El resultado en octal es lo que se usa con <code>umask</code>."
              },
              {
                "type": "code",
                "code": "110 110 110   (666, valor default)\n001 011 011   (negación de los permisos finales)\n-----------------\n000 010 010   (= 022)"
              },
              {
                "type": "callout",
                "tone": "info",
                "text": "<strong>NOT Binary</strong> invierte cada bit (1↔0). <strong>AND bit a bit</strong> da 1 solo si ambos bits comparados son 1."
              },
              {
                "type": "h3",
                "text": "Umask temporal y permanente"
              },
              {
                "type": "p",
                "text": "Usado directamente en la terminal el valor es <strong>temporal</strong> (solo la sesión activa). Para hacerlo <strong>permanente</strong>:"
              },
              {
                "type": "ul",
                "items": [
                  "Por usuario: en <code>~/.bashrc</code> o <code>~/.profile</code>.",
                  "Global (todos los usuarios): en <code>/etc/profile</code> o <code>/etc/login.defs</code>."
                ]
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "Umask es el filtro que le resta permisos a lo que vas creando; en la terminal dura una sesión nomás."
              }
            ]
          },
          {
            "id": "11",
            "title": "SUDO",
            "blocks": [
              {
                "type": "p",
                "text": "<strong>SUDO</strong> (\"Superuser DO\") permite ejecutar comandos con privilegios de administrador sin iniciar sesión como <code>root</code>, sumando una capa de seguridad y control. Es clave para la administración segura del sistema."
              },
              {
                "type": "h3",
                "text": "Características"
              },
              {
                "type": "ul",
                "items": [
                  "<strong>Control de acceso</strong> granular: quién puede ejecutar qué comandos.",
                  "<strong>Registro de actividad</strong> para auditorías.",
                  "<strong>Temporalidad</strong>: permisos temporales o específicos por usuario/comando/grupo.",
                  "<strong>Minimiza riesgos</strong> de acceso directo a root."
                ]
              },
              {
                "type": "h3",
                "text": "SUDOERS"
              },
              {
                "type": "p",
                "text": "La configuración se maneja en <code>/etc/sudoers</code>, que define qué usuarios y grupos pueden usar SUDO y qué comandos. Se edita con <code>visudo</code>, que verifica la sintaxis antes de guardar."
              },
              {
                "type": "callout",
                "tone": "warning",
                "text": "Editá siempre <code>sudoers</code> con <code>visudo</code>: una sintaxis rota puede dejarte sin acceso administrativo."
              },
              {
                "type": "h3",
                "text": "Configuraciones globales (Defaults)"
              },
              {
                "type": "p",
                "text": "La directiva <code>Defaults</code> configura el comportamiento predeterminado para todos los usuarios."
              },
              {
                "type": "table",
                "caption": "Opciones de Defaults",
                "headers": [
                  "Opción",
                  "Qué hace"
                ],
                "rows": [
                  [
                    "env_reset",
                    "Restablece las variables de entorno del usuario antes de ejecutar el comando."
                  ],
                  [
                    "mail_badpass",
                    "Envía un correo al admin si un usuario ingresa una contraseña incorrecta."
                  ],
                  [
                    "secure_path",
                    "Define un PATH seguro para los comandos ejecutados como superusuario."
                  ],
                  [
                    "timestamp_timeout",
                    "Minutos que se recuerda la contraseña antes de pedirla de nuevo (default 5 min)."
                  ]
                ]
              },
              {
                "type": "h3",
                "text": "Alias"
              },
              {
                "type": "p",
                "text": "Los alias simplifican la config agrupando <code>host_alias</code> (hosts), <code>user_alias</code> (usuarios) y <code>cmnd_alias</code> (comandos)."
              },
              {
                "type": "code",
                "code": "user_alias ADMIN = alumno, jperez\ncmnd_alias REBOOT_CMDS = /sbin/reboot, /sbin/shutdown"
              },
              {
                "type": "h3",
                "text": "Permisos para usuarios y grupos"
              },
              {
                "type": "code",
                "code": "alumno   ALL = (ALL:ALL) ALL\n1er         (2do:3ro) 4to"
              },
              {
                "type": "ul",
                "items": [
                  "<strong>1er</strong> <code>ALL=</code>: máquinas en las que la regla es válida.",
                  "<strong>2do</strong> <code>ALL</code>: usuario como el cual puede ejecutar.",
                  "<strong>3ro</strong> <code>ALL</code> (tras <code>:</code>): grupo bajo el cual ejecuta.",
                  "<strong>4to</strong> <code>ALL</code>: comandos que puede ejecutar."
                ]
              },
              {
                "type": "callout",
                "tone": "info",
                "text": "Para privilegios por grupo se agrega el símbolo <code>%</code> delante del grupo, con la misma sintaxis que para usuarios."
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "Todo vive en /etc/sudoers y se toca con visudo: guardar con la sintaxis rota es pegarte un tiro en el pie."
              }
            ]
          },
          {
            "id": "12",
            "title": "Administración de usuarios",
            "blocks": [
              {
                "type": "p",
                "text": "GNU/Linux es <strong>multiusuario</strong>: da servicio a muchos usuarios a la vez, cada uno con acceso a sus espacios y, según el rol, privilegios más elevados. Una mala administración genera vulnerabilidades, por eso es un tema de seguridad."
              },
              {
                "type": "h3",
                "text": "Tipos de usuarios"
              },
              {
                "type": "p",
                "text": "Cada usuario se identifica con un <strong>UID</strong> único y pertenece a un grupo principal (con su mismo nombre) identificado por <strong>GID</strong>. Hay tres tipos:"
              },
              {
                "type": "ul",
                "items": [
                  "<strong>root</strong>: superusuario con acceso ilimitado. <strong>UID 0</strong>, primer usuario creado. Su home está en <code>/root</code>. Se desaconseja su uso directo; mejor <code>sudo</code>.",
                  "<strong>Especiales (no-login)</strong>: cuentas de servicio (apache, mysql, sshd, www-data) que no inician sesión. UID/GID entre <strong>1 y 100</strong>, definidos en <code>/etc/login.defs</code>.",
                  "<strong>Normales</strong>: creados para personas. UID <strong>superior a 1000</strong>, con home propio en <code>/home</code>."
                ]
              },
              {
                "type": "h3",
                "text": "Archivos importantes"
              },
              {
                "type": "p",
                "text": "La configuración de usuarios se guarda en tres archivos de texto en <code>/etc</code>: <code>passwd</code>, <code>shadow</code> y <code>group</code>."
              },
              {
                "type": "h3",
                "text": "/etc/passwd"
              },
              {
                "type": "p",
                "text": "Una línea por usuario con <strong>siete campos</strong> separados por <code>:</code> — login, <code>x</code> (password en shadow), UID, GID, descripción, home y shell predeterminado."
              },
              {
                "type": "code",
                "code": "root:x:0:0:root:/root:/bin/bash\nalumno:x:1000:1000:Usuario Alumno:/home/alumno:/bin/bash"
              },
              {
                "type": "h3",
                "text": "/etc/shadow"
              },
              {
                "type": "p",
                "text": "Info confidencial de contraseñas y expiración, en <strong>nueve campos</strong>: login, hash (un <code>*</code> indica no-login), último cambio, mínimo de días, máximo de días, días de aviso, días de inactividad, días de expiración y campo reservado."
              },
              {
                "type": "h3",
                "text": "/etc/group"
              },
              {
                "type": "p",
                "text": "Un grupo por línea en <strong>3 campos</strong>: nombre, <code>x</code> (sin contraseña), GID; y una lista de miembros separados por comas al final."
              },
              {
                "type": "code",
                "code": "Tecnologia:x:1002:alumno,jperez"
              },
              {
                "type": "h3",
                "text": "Comandos de administración"
              },
              {
                "type": "p",
                "text": "<code>useradd</code> (o <code>adduser</code>) crea usuarios. Flags: <code>-c</code> comentario, <code>-d</code> home, <code>-G</code> grupos, <code>-r</code> usuario especial, <code>-s</code> shell, <code>-u</code> UID, <code>-m</code> genera el home."
              },
              {
                "type": "code",
                "code": "useradd -m -s /bin/bash -c \"Juan Perez\" jperez"
              },
              {
                "type": "p",
                "text": "<code>usermod</code> modifica usuarios. Flags: <code>-c</code> descripción, <code>-d</code> home, <code>-G</code> grupos, <code>-L</code> bloquea, <code>-U</code> desbloquea, <code>-s</code> shell."
              },
              {
                "type": "code",
                "code": "usermod -aG Tecnologia jperez"
              },
              {
                "type": "ul",
                "items": [
                  "<code>userdel</code>: elimina un usuario. Con <code>-r</code> borra también el home.",
                  "<code>passwd</code>: cambia la contraseña.",
                  "<code>groupadd</code> / <code>groupdel</code> / <code>groupmod</code>: crear, eliminar y modificar grupos.",
                  "<code>groups</code>: muestra los grupos del usuario."
                ]
              },
              {
                "type": "h3",
                "text": "Recuperación de la contraseña de root desde GRUB"
              },
              {
                "type": "p",
                "text": "En Debian se puede resetear la clave de root desde <strong>GRUB</strong>, arrancando en un entorno mínimo con privilegios de superusuario:"
              },
              {
                "type": "ol",
                "items": [
                  "Reiniciar y, en el menú de GRUB, presionar <code>E</code> para editar el arranque.",
                  "En la línea <code>linux /boot/vmlinuz-… ro quiet</code>, borrar <code>ro quiet</code> y agregar <code>rw init=/bin/bash</code>; luego <code>F10</code>.",
                  "En el prompt, cambiar la clave con <code>passwd</code>.",
                  "Reiniciar con <code>exec /sbin/init</code>."
                ]
              },
              {
                "type": "callout",
                "tone": "info",
                "text": "<code>init=/bin/bash</code> usa bash como proceso inicial en vez del arranque normal, dando shell con privilegios de root y el raíz <code>/</code> montado en lectura-escritura."
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "Ojo: si cualquiera con acceso físico edita GRUB, te resetea la clave de root. Por eso en serio se protege el propio GRUB con contraseña."
              }
            ]
          }
        ]
      },
      {
        "unit": "3",
        "sections": [
          {
            "id": "13",
            "title": "Redirecciones y pipes",
            "blocks": [
              {
                "type": "p",
                "text": "El redireccionamiento permite manejar los flujos de entrada y salida de los comandos: almacenar el resultado en un archivo, enviar los errores a otro archivo, o usar la salida de un comando como entrada de otro."
              },
              {
                "type": "table",
                "headers": [
                  "Símbolo",
                  "Nombre",
                  "Qué hace"
                ],
                "rows": [
                  [
                    "<code>&gt;</code>",
                    "Mayor",
                    "Manda la salida a un archivo; si existe, lo <strong>pisa</strong> (lo crea si no existe)."
                  ],
                  [
                    "<code>&gt;&gt;</code>",
                    "Doble mayor",
                    "Añade la salida al <strong>final</strong> de un archivo existente (o lo crea)."
                  ],
                  [
                    "<code>&lt;</code>",
                    "Menor",
                    "El comando <strong>lee</strong> desde un archivo en lugar del teclado/stdin."
                  ],
                  [
                    "<code>|</code>",
                    "Pipe",
                    "Envía la salida de un comando como entrada de otro."
                  ]
                ]
              },
              {
                "type": "code",
                "code": "ls -l /etc > archivo_ls\nls -l /var >> archivo_ls\ncat < archivo_ls"
              },
              {
                "type": "h3",
                "text": "Redireccionamiento de stderr"
              },
              {
                "type": "p",
                "text": "El <strong>stderr</strong> está identificado con el número <strong>2</strong>; se redirige con <code>2&gt;</code>. El <strong>stdout</strong> es el número <strong>1</strong> (implícito al usar <code>&gt;</code>). El dispositivo <code>/dev/null</code> es un <strong>agujero negro</strong>: todo lo que se envía ahí se pierde, útil para descartar errores."
              },
              {
                "type": "ul",
                "items": [
                  "<code>ls /dir 2&gt; error.log</code>: envía el error a un archivo.",
                  "<code>ls /dir &gt;&gt; salida.txt 2&gt; /dev/null</code>: guarda stdout y descarta stderr.",
                  "<code>ls /dir &amp;&gt; salida.txt</code>: stdout y stderr al mismo archivo (bash 4.0+)."
                ]
              },
              {
                "type": "h3",
                "text": "Pipes"
              },
              {
                "type": "p",
                "text": "El pipe <code>|</code> encadena comandos: el <code>stdout</code> de uno se vuelve el <code>stdin</code> del siguiente. Muy útil combinado con filtros para analizar logs."
              },
              {
                "type": "code",
                "code": "cat /var/log/dpkg.log | grep \"installed\""
              },
              {
                "type": "h3",
                "text": "Buscar en Linux: find y locate"
              },
              {
                "type": "p",
                "text": "<code>find</code> busca archivos y directorios de manera exhaustiva y flexible (por nombre, fecha, tipo, tamaño) y puede ejecutar acciones sobre lo encontrado. Es más lento porque busca en tiempo real. Sintaxis: <code>find [ruta] [opciones] [acción]</code>."
              },
              {
                "type": "table",
                "caption": "Opciones de find",
                "headers": [
                  "Opción",
                  "Qué hace"
                ],
                "rows": [
                  [
                    "<code>-name</code> / <code>-iname</code>",
                    "Busca por nombre (iname ignora mayúsculas/minúsculas)."
                  ],
                  [
                    "<code>-type f</code> / <code>-type d</code>",
                    "Busca archivos / directorios."
                  ],
                  [
                    "<code>-size</code>",
                    "Por tamaño (ej: <code>-size +100M</code>)."
                  ],
                  [
                    "<code>-mtime</code>",
                    "Por días modificados (ej: <code>-mtime -7</code>)."
                  ],
                  [
                    "<code>-exec</code>",
                    "Ejecuta un comando sobre cada archivo, con <code>{}</code> como marcador."
                  ],
                  [
                    "<code>-delete</code>",
                    "Elimina los archivos encontrados."
                  ]
                ]
              },
              {
                "type": "p",
                "text": "<code>locate</code> (parte de <strong>mlocate</strong>) es mucho más rápido porque usa una base de datos indexada, pero depende de que se actualice con <code>updatedb</code>. Generalmente no viene instalado por defecto."
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "Regla de oro: <code>&gt;</code> pisa, <code>&gt;&gt;</code> agrega, y lo que no querés ver lo tirás a <code>/dev/null</code>."
              }
            ]
          },
          {
            "id": "14",
            "title": "Streams y filtros",
            "blocks": [
              {
                "type": "p",
                "text": "Un <strong>stream</strong> es un flujo de datos de entrada (input) o salida (output). Linux tiene 3 streams predefinidos que los programas usan para interactuar con el sistema y entre sí."
              },
              {
                "type": "table",
                "caption": "Los tres streams predefinidos",
                "headers": [
                  "Stream",
                  "Número",
                  "Descripción"
                ],
                "rows": [
                  [
                    "stdin (Standard Input)",
                    "0",
                    "Entrada, por default desde el teclado (o desde otro comando o archivo)."
                  ],
                  [
                    "stdout (Standard Output)",
                    "1",
                    "Salida normal, por default al monitor."
                  ],
                  [
                    "stderr (Standard Error)",
                    "2",
                    "Mensajes de error, separados de la salida normal."
                  ]
                ]
              },
              {
                "type": "p",
                "text": "Separar entrada, salida normal y errores da mayor control: permite redirigir el stdout sin capturar errores, gestionar los errores por separado y automatizar procesos en scripts."
              },
              {
                "type": "h3",
                "text": "Filtros"
              },
              {
                "type": "p",
                "text": "Los <strong>filtros</strong> son comandos que procesan el contenido de un archivo o del stdin y manipulan la salida estándar."
              },
              {
                "type": "ul",
                "items": [
                  "<code>tail</code>: últimas 10 líneas; <code>-f</code> sigue las nuevas (logs en tiempo real), <code>-n xx</code> define cuántas.",
                  "<code>more</code> / <code>less</code>: paginan archivos grandes; <code>more</code> solo avanza, <code>less</code> va hacia adelante y hacia atrás.",
                  "<code>sort</code>: ordena líneas; <code>-r</code> reversa, <code>-n</code> numérico.",
                  "<code>wc</code>: cuenta; <code>-l</code> líneas, <code>-w</code> palabras, <code>-m</code> caracteres.",
                  "<code>cut</code>: extrae partes específicas de cada línea."
                ]
              },
              {
                "type": "h3",
                "text": "grep, el filtro"
              },
              {
                "type": "p",
                "text": "<code>grep</code> busca dentro de archivos o del stdout palabras que coincidan con un patrón o expresión regular. Sintaxis: <code>grep [opción] [patrón] [archivo]</code>."
              },
              {
                "type": "table",
                "caption": "Opciones de grep",
                "headers": [
                  "Opción",
                  "Función"
                ],
                "rows": [
                  [
                    "<code>-i</code>",
                    "No distingue mayúsculas/minúsculas."
                  ],
                  [
                    "<code>-n</code>",
                    "Muestra el número de línea donde aparece el patrón."
                  ],
                  [
                    "<code>-r</code>",
                    "Busca recursivamente en directorios."
                  ],
                  [
                    "<code>-c</code>",
                    "Cuenta las líneas que coinciden."
                  ],
                  [
                    "<code>-E</code>",
                    "Busca múltiples patrones (expresiones regulares extendidas)."
                  ]
                ]
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "Truco mental: stdin=0, stdout=1, stderr=2. Y ojo, <code>less</code> va pa' los dos lados, <code>more</code> solo pa'delante — al revés de lo que pensarías."
              }
            ]
          },
          {
            "id": "15",
            "title": "Expresiones regulares",
            "blocks": [
              {
                "type": "p",
                "text": "Las <strong>expresiones regulares</strong> (regex) son un conjunto de reglas para definir patrones de búsqueda complejos en cadenas de texto. En Linux se usan mucho con comandos como <code>grep</code> o <code>find</code> para encontrar, validar o manipular textos. Se clasifican en alternación, cuantificación y agrupación."
              },
              {
                "type": "h3",
                "text": "Alternación"
              },
              {
                "type": "p",
                "text": "Expresiones del tipo <strong>a o b</strong> usando el pipe <code>|</code> como operador OR. Ejemplo: <code>/perra|o/</code> coincide con perra o perro."
              },
              {
                "type": "h3",
                "text": "Cuantificación"
              },
              {
                "type": "p",
                "text": "Controla cuántas veces se repite un patrón."
              },
              {
                "type": "table",
                "headers": [
                  "Cuantificador",
                  "Significado"
                ],
                "rows": [
                  [
                    "<code>*</code>",
                    "cero o más veces"
                  ],
                  [
                    "<code>+</code>",
                    "una o más veces"
                  ],
                  [
                    "<code>?</code>",
                    "cero o una vez"
                  ],
                  [
                    "<code>{n}</code>",
                    "exactamente n veces"
                  ],
                  [
                    "<code>{n,m}</code>",
                    "entre n y m veces"
                  ]
                ]
              },
              {
                "type": "p",
                "text": "Ejemplo: <code>/ab+c/</code> coincide con abc y abbc, pero no con ac."
              },
              {
                "type": "h3",
                "text": "Agrupación"
              },
              {
                "type": "p",
                "text": "Los paréntesis <code>()</code> agrupan una expresión como subexpresión; los corchetes <code>[]</code> definen un grupo de caracteres a encontrar. Ejemplos: <code>[aeiou]</code> cualquier vocal, <code>[a-z0-9]</code> rango de a-z y números. El <code>^</code> dentro de <code>[]</code> niega: <code>[^aeiou]</code> coincide con lo que no sea vocal."
              },
              {
                "type": "h3",
                "text": "Caracteres especiales"
              },
              {
                "type": "ul",
                "items": [
                  "<code>.</code> (punto): cualquier caracter excepto nueva línea.",
                  "<code>^</code> (circunflejo): inicio de línea (salvo dentro de <code>[]</code>).",
                  "<code>$</code> (signo pesos): final de línea."
                ]
              },
              {
                "type": "p",
                "text": "Los ejemplos se pueden probar con <code>egrep</code> o <code>grep -E</code>, imprimiendo por stdout con <code>echo</code>. El sitio <code>regex101.com</code> permite verificar cada regex y pinta solo lo que concuerda."
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "Acordate: <code>*</code> es cero o más y <code>+</code> es una o más — el que se confunde ahí después putea contra el grep sin razón."
              }
            ]
          }
        ]
      },
      {
        "unit": "4",
        "sections": [
          {
            "id": "16",
            "title": "Redes",
            "blocks": [
              {
                "type": "p",
                "text": "Una <strong>red</strong> son dispositivos conectados entre sí para compartir recursos e intercambiar información (desde dos PCs por cable hasta internet). La comunicación se da entre un <strong>cliente</strong>, que genera las peticiones, y un <strong>servidor</strong>, que escucha y espera conexiones."
              },
              {
                "type": "table",
                "caption": "Tipos de redes según su alcance",
                "headers": [
                  "Tipo",
                  "Nombre",
                  "Alcance"
                ],
                "rows": [
                  [
                    "LAN",
                    "Local Area Network",
                    "Áreas pequeñas: hogares, oficinas, edificios."
                  ],
                  [
                    "WAN",
                    "Wide Area Network",
                    "Áreas amplias: ciudades, países, continentes. Ej: internet."
                  ],
                  [
                    "PAN",
                    "Personal Area Network",
                    "Corto alcance personal (bluetooth, auriculares)."
                  ],
                  [
                    "MAN",
                    "Metropolitan Area Network",
                    "Área metropolitana, una ciudad."
                  ]
                ]
              },
              {
                "type": "p",
                "text": "<strong>Dirección IP</strong>: número único asignado a cada dispositivo, como la dirección de una casa. Hay dos versiones:"
              },
              {
                "type": "ul",
                "items": [
                  "<strong>IPv4</strong>: <strong>32 bits</strong>, notación decimal separada por puntos (ej: <code>192.168.1.1</code>). Es la que se usa en la cursada. Se organiza en cuatro <strong>octetos</strong> de 8 bits, cada uno de 0 a 255.",
                  "<strong>IPv6</strong>: <strong>128 bits</strong>, notación hexadecimal separada por dos puntos."
                ]
              },
              {
                "type": "p",
                "text": "Las IPv4 se dividen en <strong>clases</strong> que definen la distribución de redes y hosts:"
              },
              {
                "type": "table",
                "caption": "Clases de direcciones IPv4",
                "headers": [
                  "Clase",
                  "Rango",
                  "Formato",
                  "Aplicación"
                ],
                "rows": [
                  [
                    "A",
                    "0.0.0.0 – 127.255.255.255",
                    "red.host.host.host",
                    "Redes grandes"
                  ],
                  [
                    "B",
                    "128.0.0.0 – 191.255.255.255",
                    "red.red.host.host",
                    "Redes medianas"
                  ],
                  [
                    "C",
                    "192.0.0.0 – 223.255.255.255",
                    "red.red.red.host",
                    "Redes pequeñas"
                  ]
                ]
              },
              {
                "type": "p",
                "text": "También existen la <strong>D</strong> (multicast) y la <strong>E</strong> (experimental)."
              },
              {
                "type": "p",
                "text": "La <strong>máscara de red</strong> (netmask) define qué parte de la IP es red y qué parte son hosts: los <strong>unos</strong> marcan la red y los <strong>ceros</strong> los hosts. Ej: <code>255.255.255.0</code> reserva los primeros 24 bits para la red. En notación <strong>CIDR</strong> se abrevia con un sufijo: <code>192.168.1.1/24</code> equivale a máscara <code>255.255.255.0</code>."
              },
              {
                "type": "p",
                "text": "Tres actores clave de una red:"
              },
              {
                "type": "ul",
                "items": [
                  "<strong>Gateway</strong> (puerta de enlace): punto de acceso a otras redes; redirige los paquetes que no van a la red local.",
                  "<strong>DNS</strong>: traduce nombres de dominio (<code>www.starwars.com</code>) en direcciones IP.",
                  "<strong>DHCP</strong>: asigna automáticamente IP, máscara y gateway a los dispositivos al conectarse."
                ]
              },
              {
                "type": "p",
                "text": "En <strong>Debian</strong> la red se configura en el archivo <code>/etc/network/interfaces</code>. Dos opciones: <strong>static</strong> (completás address, netmask y gateway a mano) o <strong>dhcp</strong> (los asigna un servidor DHCP). Directivas principales: <code>auto</code> (inicia la interfaz al arrancar), <code>allow-hotplug</code> (la activa al detectar el dispositivo) e <code>iface</code>."
              },
              {
                "type": "p",
                "text": "La directiva <code>iface</code> lleva tres parámetros: nombre de la interfaz (<code>eth0</code>, <code>enp0s3</code>, <code>wlan0</code>, <code>lo</code>), tipo de conexión (<code>inet</code> IPv4 / <code>inet6</code> IPv6) y método (<code>static</code> o <code>dhcp</code>)."
              },
              {
                "type": "code",
                "code": "address: 192.168.0.10\nnetmask: 255.255.255.0\ngateway: 192.168.0.1"
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "Regla mnemotécnica: los unos de la máscara son la red, los ceros los hosts. No lo confundas más."
              }
            ]
          },
          {
            "id": "17",
            "title": "DNS y DHCP",
            "blocks": [
              {
                "type": "p",
                "text": "El <strong>DNS (Domain Name System)</strong> traduce nombres de dominio legibles por humanos (<code>www.google.com</code>) en direcciones IP que las máquinas usan para comunicarse. Es fundamental en cualquier red, desde internet hasta redes de empresas."
              },
              {
                "type": "p",
                "text": "Los dominios son jerárquicos. En <code>mail.ejemplo.com</code>: <code>.com</code> es el <strong>TLD</strong> (Top Level Domain), <code>ejemplo</code> el dominio secundario y <code>mail</code> un subdominio."
              },
              {
                "type": "p",
                "text": "Cuando pedís una URL, la compu revisa su caché local; si no está, consulta a un servidor DNS y la respuesta va escalando por la jerarquía:"
              },
              {
                "type": "ul",
                "items": [
                  "<strong>Recursivo</strong>: recibe la consulta del cliente y, si no la tiene, va preguntando a los demás servidores hasta obtener la IP.",
                  "<strong>Raíz (Root)</strong>: si no sabe, traslada la consulta a los servidores TLD.",
                  "<strong>TLD</strong>: gestionan dominios <code>.com</code>, <code>.net</code>, <code>.ar</code>, etc. (cc-TLD por país). Derivan al Autoritativo.",
                  "<strong>Autoritativo</strong>: entidad máxima que da la respuesta definitiva sobre la IP del dominio (o error si no existe el registro)."
                ]
              },
              {
                "type": "p",
                "text": "La respuesta baja de vuelta hasta el navegador y cada nodo la cachea para no repetir el laburo."
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "La cadena: tu compu → Recursivo → Raíz → TLD → Autoritativo, y la respuesta vuelve para abajo."
              },
              {
                "type": "p",
                "text": "Los datos en un DNS se guardan como <strong>registros</strong>:"
              },
              {
                "type": "table",
                "caption": "Tipos de registros DNS",
                "headers": [
                  "Registro",
                  "Función"
                ],
                "rows": [
                  [
                    "A",
                    "Nombre → dirección IPv4."
                  ],
                  [
                    "AAAA",
                    "Nombre → dirección IPv6."
                  ],
                  [
                    "CNAME",
                    "Asocia un dominio contra otro dominio."
                  ],
                  [
                    "MX",
                    "Servidores de correo electrónico del dominio."
                  ],
                  [
                    "NS",
                    "Servidores de nombre (DNS) autorizados del dominio."
                  ],
                  [
                    "TXT",
                    "Texto para verificaciones o políticas de seguridad."
                  ]
                ]
              },
              {
                "type": "p",
                "text": "El <strong>DHCP (Dynamic Host Configuration Protocol)</strong> asigna automáticamente la IP a la placa de red y datos adicionales (gateway, DNS, máscara). Opera en <strong>4 fases</strong>:"
              },
              {
                "type": "ol",
                "items": [
                  "<strong>Discover</strong>: el cliente sin IP envía una solicitud en broadcast, porque aún no sabe dónde está el servidor DHCP.",
                  "<strong>Offer</strong>: el servidor ofrece una IP libre de su rango junto con máscara, gateway, DNS y el tiempo de alquiler.",
                  "<strong>Request</strong>: el cliente acepta la IP ofrecida (también en broadcast).",
                  "<strong>ACK</strong>: el servidor confirma que la IP es válida y el cliente ya puede usarla."
                ]
              },
              {
                "type": "callout",
                "tone": "info",
                "text": "Truco para las 4 fases del DHCP: DORA — Discover, Offer, Request, ACK."
              }
            ]
          },
          {
            "id": "18",
            "title": "SSH",
            "blocks": [
              {
                "type": "p",
                "text": "<strong>SSH</strong> es un protocolo (y el programa que lo implementa) para acceder a servidores de forma remota y administrarlos por consola, todo por un canal cifrado. También sirve para copiar datos de forma segura y tunelizar otras aplicaciones. Se usa entre un <strong>cliente SSH</strong> (desde donde te conectás) y un <strong>servidor SSH</strong> (al que te conectás)."
              },
              {
                "type": "p",
                "text": "El cliente suele venir instalado; el servidor a veces hay que instalarlo:"
              },
              {
                "type": "code",
                "code": "apt-get install openssh-server"
              },
              {
                "type": "p",
                "text": "La configuración de OpenSSH vive en <code>/etc/ssh</code>: <code>sshd_config</code> (servidor) y <code>ssh_config</code> (cliente)."
              },
              {
                "type": "p",
                "text": "Líneas clave de <code>sshd_config</code> (servidor):"
              },
              {
                "type": "ul",
                "items": [
                  "<code>port</code>: puerto TCP (default 22, comentado); se recomienda cambiarlo por buenas prácticas.",
                  "<code>PubkeyAuthentication</code>: habilita autenticación por clave.",
                  "<code>AuthorizedKeysFile</code>: dónde están las claves públicas (default <code>.ssh/authorized_keys</code>).",
                  "<code>PasswordAuthentication</code>: habilita autenticación por contraseña.",
                  "<code>PermitRootLogin</code>: default <code>Prohibit-password</code>; para fines prácticos se pone en <code>yes</code>."
                ]
              },
              {
                "type": "p",
                "text": "Líneas clave de <code>ssh_config</code> (cliente): <code>Host</code> (patrones de hosts), <code>port</code>, <code>PubkeyAuthentication</code>, <code>IdentityFile</code> (archivo de clave privada) y <code>PasswordAuthentication</code>."
              },
              {
                "type": "p",
                "text": "Formas de uso: <code>ssh &lt;host&gt;</code> autentica con el mismo usuario del origen; <code>ssh &lt;usuario@host&gt;</code> autentica con el usuario indicado a la izquierda del <code>@</code>."
              },
              {
                "type": "p",
                "text": "SSH soporta varios métodos de autenticación (contraseña, clave pública/privada, certificados, Kerberos, teclado interactivo/challenge-response, por agente). Los dos principales:"
              },
              {
                "type": "ul",
                "items": [
                  "<strong>Por contraseña</strong>: el más básico. El servidor verifica usuario y contraseña (transmitida cifrada). Es <strong>menos seguro</strong>: vulnerable a fuerza bruta o robo.",
                  "<strong>Por clave pública/privada</strong>: el más seguro y recomendado. El cliente genera un par de claves; la <strong>pública</strong> se copia al servidor y la <strong>privada</strong> queda en su sistema. El servidor cifra un desafío con la pública y el cliente lo descifra con la privada. Solo quien tiene la privada se autentica, sin enviar contraseñas."
                ]
              },
              {
                "type": "p",
                "text": "Las claves se generan con un solo comando:"
              },
              {
                "type": "code",
                "code": "ssh-keygen"
              },
              {
                "type": "p",
                "text": "Por default se guardan en <code>~/.ssh</code> con nombre <code>id_rsa</code> (privada) e <code>id_rsa.pub</code> (pública). Pregunta por una <strong>passphrase</strong>, que en la cursada se deja en blanco con enter."
              },
              {
                "type": "ul",
                "items": [
                  "<code>id_rsa</code>: clave privada, <strong>NO se comparte</strong>.",
                  "<code>id_rsa.pub</code>: clave pública, <strong>SÍ se comparte</strong> con el servidor remoto."
                ]
              },
              {
                "type": "p",
                "text": "Para que el servidor acepte el ingreso por llaves, se copia la clave pública a su <code>authorized_keys</code> con:"
              },
              {
                "type": "code",
                "code": "ssh-copy-id root@192.168.0.201"
              },
              {
                "type": "p",
                "text": "Pide la contraseña del usuario destino una única vez; luego de copiarla, las próximas conexiones ya no piden contraseña. Para salir de una sesión SSH se usa <code>exit</code>."
              },
              {
                "type": "callout",
                "tone": "criollo",
                "text": "La privada no se comparte NUNCA; la que viaja al servidor es la .pub. No las mezcles."
              }
            ]
          }
        ]
      }
    ]
  },
  "partials": [
    {
      "id": "1",
      "title": "Parcial de práctica N.º 1",
      "blurb": "Fundamentos de GNU/Linux (historia, virtualización, shell, FHS, comandos, editores y gestión de software) y administración de permisos y usuarios (octal/simbólico, permisos especiales, umask, sudo y cuentas).",
      "questions": [
        {
          "kind": "mc",
          "q": "¿Qué hecho puntual convenció a Richard Stallman de que el software propietario era una amenaza a la libertad de los usuarios?",
          "options": [
            "No poder acceder al código fuente del programa de una impresora Xerox que quería modificar",
            "Que Bell Labs abandonara el proyecto Multics en 1969",
            "La aparición del kernel Linux de Torvalds en 1991",
            "Que AT&T comercializara Unix bajo licencia"
          ],
          "correctIndex": 0,
          "explain": "Stallman quiso modificar el programa de una impresora Xerox que no andaba bien y se le negó el acceso al código fuente por estar bajo licencia propietaria. Eso lo llevó a anunciar el proyecto GNU en 1983."
        },
        {
          "kind": "tf",
          "q": "El proyecto GNU fue iniciado por Linus Torvalds en 1983 para crear un sistema operativo libre.",
          "a": false,
          "explain": "Falso: el proyecto GNU lo anunció Richard Stallman en 1983. Linus Torvalds recién en 1991 comenzó a desarrollar el kernel Linux, que después se unió a las herramientas GNU bajo la GPL."
        },
        {
          "kind": "mc",
          "q": "Un hipervisor de tipo 1 (BareMetal) se diferencia de uno de tipo 2 (Hosted) en que:",
          "options": [
            "El tipo 1 corre sobre un sistema operativo estándar ya instalado (Windows o GNU/Linux)",
            "El tipo 1 corre directamente sobre el hardware, sin un SO estándar de por medio",
            "El tipo 1 solo puede alojar una única máquina virtual a la vez",
            "El tipo 1 no requiere las extensiones IVT ni AMD-V del procesador"
          ],
          "correctIndex": 1,
          "explain": "El tipo 1 (BareMetal), como VMware ESXi, Proxmox VE, Xen o KVM, corre directamente sobre el hardware. El tipo 2 (Hosted), como VirtualBox o QEMU, corre encima de un SO estándar ya instalado."
        },
        {
          "kind": "open",
          "q": "Explicá qué es el shell y en qué se diferencia de la terminal. Nombrá al menos dos shells de los mencionados en el apunte.",
          "model": "La terminal es la interfaz de línea de comandos (CLI) donde el usuario interactúa con el sistema escribiendo texto. El shell, en cambio, es el programa que interpreta esos comandos y actúa como intermediario entre el usuario y el sistema operativo. Es decir, la terminal es el entorno y el shell es el intérprete que corre adentro. Ejemplos de shells: sh (Bourne Shell, el primero), Bash (el más común en GNU/Linux, evolución de sh), Zsh, Csh y Ksh."
        },
        {
          "kind": "mc",
          "q": "En la salida de <code>ls -l</code>, ¿qué tipo de archivo indica una <code>p</code> como primer carácter de la columna de permisos?",
          "options": [
            "Un archivo de bloques",
            "Un enlace simbólico (link)",
            "Un pipe (canalización o tubería)",
            "Un directorio protegido"
          ],
          "correctIndex": 2,
          "explain": "La primera letra de ls -l canta el tipo: - regular, d directorio, c caracteres, b bloques, p pipe y l link. La p corresponde a un pipe, que vincula comandos mediante una tubería temporal."
        },
        {
          "kind": "tf",
          "q": "El directorio <code>/etc</code> está pensado para almacenar archivos binarios y datos de usuarios del sistema.",
          "a": false,
          "explain": "Falso: /etc almacena archivos de configuración del sistema. Allí no se deberían guardar ni archivos binarios ni datos de usuarios. Los binarios críticos van en /bin y /sbin, y los datos de usuario en /home."
        },
        {
          "kind": "mc",
          "q": "Querés crear tres directorios anidados, uno dentro de otro, en una sola línea. ¿Qué comando usás?",
          "options": [
            "<code>mkdir directorio1 directorio2 directorio3</code>",
            "<code>mkdir -p directorio1/directorio2/directorio3</code>",
            "<code>touch -r directorio1/directorio2/directorio3</code>",
            "<code>cd -p directorio1/directorio2/directorio3</code>"
          ],
          "correctIndex": 1,
          "explain": "La opción <code>-p</code> de mkdir crea la ruta completa de directorios anidados. Sin -p, mkdir crearía tres directorios hermanos (uno al lado del otro), no anidados."
        },
        {
          "kind": "open",
          "q": "Un compañero quiere borrar un directorio que todavía tiene archivos adentro y ejecuta <code>rmdir proyecto</code>, pero le da error. Explicá por qué falla y qué comando debería usar, aclarando los riesgos.",
          "model": "rmdir solo elimina directorios que estén vacíos, por eso falla si el directorio todavía tiene contenido. Para borrar un directorio con archivos adentro hay que usar rm de forma recursiva: <code>rm -r proyecto</code>. La opción -r borra recursivamente todo el contenido y -f fuerza sin preguntar. Hay que tener mucho cuidado con <code>rm -rf</code> porque borra todo sin pedir confirmación y un error de tipeo puede eliminar datos importantes de forma irreversible."
        },
        {
          "kind": "mc",
          "q": "En Debian, ¿cuál es la diferencia entre APT y dpkg?",
          "options": [
            "dpkg resuelve dependencias automáticamente y APT solo gestiona archivos .deb locales",
            "Son exactamente lo mismo, solo cambia el nombre según la versión de Debian",
            "APT es la capa superior que resuelve dependencias e interactúa con repositorios; dpkg es la capa inferior que gestiona archivos .deb locales y no resuelve dependencias",
            "APT sirve para RedHat y dpkg para Debian"
          ],
          "correctIndex": 2,
          "explain": "APT (Advanced Package Tool) es la capa de alto nivel: obtiene paquetes y resuelve dependencias desde los repositorios del sources.list. dpkg es la capa de bajo nivel que instala archivos .deb locales pero no resuelve dependencias por sí solo."
        },
        {
          "kind": "tf",
          "q": "El comando <code>apt-get remove</code> elimina la aplicación junto con todos sus archivos de configuración.",
          "a": false,
          "explain": "Falso: <code>apt-get remove</code> elimina la aplicación pero conserva los archivos de configuración. El que borra también la configuración es <code>apt-get purge</code>."
        },
        {
          "kind": "mc",
          "q": "Tenés un archivo con permisos <code>rw-r-----</code>. ¿Cuál es su representación en formato octal?",
          "options": [
            "750",
            "640",
            "644",
            "760"
          ],
          "correctIndex": 1,
          "explain": "Con r=4, w=2, x=1: owner rw- = 4+2 = 6; grupo r-- = 4; otros --- = 0. Resultado: 640."
        },
        {
          "kind": "open",
          "q": "Tenés un directorio compartido donde varios usuarios pueden escribir, pero querés que cada uno solo pueda borrar sus propios archivos. ¿Qué permiso especial aplicás, con qué valor octal delante y qué comando usarías?",
          "model": "Se aplica el StickyBit, que hace que solo el propietario del archivo (o root) pueda eliminarlo, aunque el directorio tenga permiso de escritura para todos. En formato octal se agrega un 1 delante del permiso, por ejemplo <code>chmod 1755 directorio</code>. En formato simbólico se usa <code>chmod +t directorio</code>, y su valor referencial es una t."
        },
        {
          "kind": "mc",
          "q": "Querés que los archivos nuevos se creen con permisos 644. Sabiendo que la base de archivos es 666, ¿qué valor de umask corresponde?",
          "options": [
            "umask 0644",
            "umask 0044",
            "umask 0022",
            "umask 0755"
          ],
          "correctIndex": 2,
          "explain": "Umask resta del valor base: 0666 - 0644 = 0022. Con <code>umask 0022</code> los archivos nuevos quedan -rw-r--r-- (644)."
        },
        {
          "kind": "tf",
          "q": "Se recomienda editar el archivo <code>/etc/sudoers</code> con el comando <code>visudo</code> porque verifica la sintaxis antes de guardar los cambios.",
          "a": true,
          "explain": "Verdadero: visudo chequea la sintaxis antes de guardar. Si se editara a mano y se guardara con la sintaxis rota, se podría quedar sin acceso administrativo al sistema."
        },
        {
          "kind": "mc",
          "q": "En el archivo <code>/etc/passwd</code>, la información de cada usuario se divide en siete campos separados por dos puntos. ¿Qué indica la <code>x</code> en el segundo campo?",
          "options": [
            "Que el usuario no tiene shell asignado",
            "Que la contraseña está almacenada y encriptada en el archivo <code>/etc/shadow</code>",
            "Que es una cuenta de tipo no-login",
            "Que el usuario tiene UID 0"
          ],
          "correctIndex": 1,
          "explain": "La x en el segundo campo de /etc/passwd indica que la contraseña está guardada de forma encriptada en /etc/shadow, no en passwd. Los siete campos son: login, x, UID, GID, descripción, home y shell."
        }
      ]
    },
    {
      "id": "2",
      "title": "Parcial de práctica N.º 2",
      "blurb": "Procesamiento de texto en la shell (redirecciones, pipes, streams, filtros y regex) más redes, DNS/DHCP y SSH sobre GNU/Linux.",
      "questions": [
        {
          "kind": "mc",
          "q": "Estás capturando la salida de <code>ls -l /etc</code> en un archivo pero notás que <code>ls -l /var > archivo_ls</code> te borró lo anterior. ¿Qué operador deberías haber usado para agregar al final sin pisar el contenido?",
          "options": [
            "<code>></code>",
            "<code>>></code>",
            "<code><</code>",
            "<code>|</code>"
          ],
          "correctIndex": 1,
          "explain": "El <code>></code> pisa el archivo (lo elimina y lo vuelve a generar); el <code>>></code> (doble mayor) añade la salida al final de un archivo existente, o lo crea si no existe."
        },
        {
          "kind": "tf",
          "q": "El comando <code>ls /directorio_nuevo 2> error.log</code> envía los mensajes de error a <code>error.log</code> en lugar de mostrarlos por pantalla.",
          "a": true,
          "explain": "Verdadero. El StdErr está identificado con el número 2, así que <code>2></code> redirige los errores hacia el archivo indicado."
        },
        {
          "kind": "mc",
          "q": "Querés listar un directorio inexistente guardando el stdout en <code>salida.txt</code> pero descartando por completo los errores. ¿Cuál corresponde?",
          "options": [
            "<code>ls /directorio_nuevo >> salida.txt 2> /dev/null</code>",
            "<code>ls /directorio_nuevo 2> salida.txt</code>",
            "<code>ls /directorio_nuevo < salida.txt</code>",
            "<code>ls /directorio_nuevo | salida.txt</code>"
          ],
          "correctIndex": 0,
          "explain": "El stdout va a <code>salida.txt</code> con <code>>></code> y el stderr se descarta enviándolo a <code>/dev/null</code>, el agujero negro del sistema."
        },
        {
          "kind": "tf",
          "q": "En Linux, el stream stdin está identificado con el número 0, el stdout con el 1 y el stderr con el 2.",
          "a": true,
          "explain": "Verdadero. stdin=0 (entrada, por default el teclado), stdout=1 (salida, por default el monitor) y stderr=2 (mensajes de error, separados de la salida normal)."
        },
        {
          "kind": "open",
          "q": "Explicá para qué sirve el pipe <code>|</code> y dando un ejemplo concreto mostrá cómo lo combinarías con un filtro para encontrar solo las líneas que contienen la palabra \"installed\" dentro de <code>/var/log/dpkg.log</code>.",
          "model": "El pipe <code>|</code> envía la salida (stdout) de un comando como entrada (stdin) del siguiente, permitiendo encadenar comandos. Es muy útil junto con filtros para procesar logs. Por ejemplo: <code>cat /var/log/dpkg.log | grep \"installed\"</code> toma el contenido del log y con grep filtra únicamente las líneas que coinciden con el patrón \"installed\". Así se obtiene información de forma más eficiente sin abrir el archivo entero."
        },
        {
          "kind": "mc",
          "q": "Necesitás buscar todos los archivos <code>.txt</code> dentro de <code>/home/alumno</code> y copiarlos a <code>/backup/</code>. ¿Qué opción de <code>find</code> ejecuta un comando sobre cada archivo encontrado usando <code>{}</code> como marcador?",
          "options": [
            "<code>-name</code>",
            "<code>-perm</code>",
            "<code>-exec</code>",
            "<code>-delete</code>"
          ],
          "correctIndex": 2,
          "explain": "<code>-exec</code> ejecuta un comando sobre cada archivo encontrado, con <code>{}</code> como marcador del nombre. Ej: <code>find /home/alumno -name \"*.txt\" -exec cp {} /backup/ \\;</code>."
        },
        {
          "kind": "tf",
          "q": "El comando <code>locate</code> es más lento que <code>find</code> porque recorre el sistema de archivos en tiempo real.",
          "a": false,
          "explain": "Falso. <code>locate</code> (parte de mlocate) es mucho más rápido porque usa una base de datos indexada previamente; el que busca en tiempo real es <code>find</code>. La contra de locate es que la base debe actualizarse con <code>updatedb</code>."
        },
        {
          "kind": "mc",
          "q": "Tenés un archivo <code>Gerencias</code> y querés mostrar solo las líneas que terminan con la letra \"s\". ¿Qué expresión regular usarías con <code>grep -E</code>?",
          "options": [
            "<code>^s</code>",
            "<code>s$</code>",
            "<code>.s</code>",
            "<code>s*</code>"
          ],
          "correctIndex": 1,
          "explain": "El signo pesos <code>$</code> coincide con el final de la línea, así que <code>s$</code> matchea las líneas que terminan en \"s\". El <code>^</code> sería para el inicio de línea."
        },
        {
          "kind": "tf",
          "q": "El cuantificador <code>+</code> significa \"cero o más veces\", mientras que <code>*</code> significa \"una o más veces\".",
          "a": false,
          "explain": "Falso, está invertido. <code>*</code> es cero o más veces y <code>+</code> es una o más veces. Por eso <code>/ab+c/</code> coincide con abc y abbc, pero no con ac."
        },
        {
          "kind": "open",
          "q": "Un dispositivo se conecta a una red con DHCP configurado. Describí brevemente las 4 fases del proceso DHCP en orden, mencionando el nombre de cada mensaje.",
          "model": "Las 4 fases son DORA. 1) DHCP Discover: el cliente, que aún no tiene IP, envía una solicitud en broadcast a toda la red porque no conoce la dirección del servidor. 2) DHCP Offer: un servidor DHCP responde ofreciendo una IP libre de su rango junto con la máscara, la puerta de enlace, los DNS y el tiempo de alquiler. 3) DHCP Request: el cliente responde (también en broadcast) aceptando la IP ofrecida. 4) DHCP ACK: el servidor confirma que la IP fue asignada y ya es válida, y el cliente puede empezar a comunicarse."
        },
        {
          "kind": "mc",
          "q": "En un router hogareño querés que los paquetes destinados fuera de la red local salgan hacia internet. ¿Qué elemento cumple ese rol de punto de acceso a otras redes?",
          "options": [
            "El DNS",
            "El DHCP",
            "La puerta de enlace (gateway)",
            "La máscara de red"
          ],
          "correctIndex": 2,
          "explain": "El gateway (puerta de enlace predeterminada) es el dispositivo que actúa como punto de acceso a otras redes: los paquetes que no van a la red local se envían a él para que los redirija."
        },
        {
          "kind": "tf",
          "q": "La notación CIDR <code>192.168.1.1/24</code> indica que los primeros 24 bits corresponden a la red y los 8 restantes a los hosts, equivalente a la máscara <code>255.255.255.0</code>.",
          "a": true,
          "explain": "Verdadero. El sufijo /24 en CIDR marca 24 bits de red (tres octetos en unos) y 8 bits de hosts, o sea la máscara 255.255.255.0."
        },
        {
          "kind": "mc",
          "q": "Configurás SSH con autenticación por llaves y ejecutás <code>ssh-keygen</code>. ¿Cuál de los dos archivos generados NO se debe compartir nunca?",
          "options": [
            "<code>id_rsa.pub</code>",
            "<code>id_rsa</code>",
            "<code>authorized_keys</code>",
            "<code>known_hosts</code>"
          ],
          "correctIndex": 1,
          "explain": "<code>id_rsa</code> es la clave privada y NO se debe compartir. La que se copia al servidor (a <code>~/.ssh/authorized_keys</code>) es la clave pública <code>id_rsa.pub</code>."
        },
        {
          "kind": "open",
          "q": "Querés habilitar el ingreso por SSH sin escribir contraseña hacia el servidor <code>root@192.168.0.201</code>. Explicá qué comando usás para copiar tu clave pública al servidor y qué hace ese comando internamente.",
          "model": "Se usa <code>ssh-copy-id root@192.168.0.201</code>. Ese comando copia tu clave pública (<code>id_rsa.pub</code>) dentro del archivo <code>~/.ssh/authorized_keys</code> del servidor remoto. Al ejecutarlo pide por única vez la contraseña del usuario root para poder instalar la llave; una vez copiada, las conexiones siguientes con <code>ssh root@192.168.0.201</code> se autentican con el par de claves pública/privada y ya no piden contraseña."
        }
      ]
    }
  ]
};
