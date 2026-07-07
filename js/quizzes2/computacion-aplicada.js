/**
 * Banco NUEVO (anti-spoiler) — computacion-aplicada
 *
 * Mapa { [sectionId]: { quiz2: { tf, mc, ms }, flashcards2: [...] } }.
 * content.js lo mergea sobre las secciones por id. Opciones homogéneas, sin pistas de forma.
 */
export default {
  "1": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-1-1",
          "q": "Bell Labs abandonó el proyecto Multics en 1969, pero las ideas generadas ahí sirvieron de base para Unix.",
          "a": true,
          "explain": "Bell Labs dejó Multics en 1969; Ken Thompson aprovechó esos conceptos para crear Unix."
        },
        {
          "id": "tf2-1-2",
          "q": "Unix se reescribió en el lenguaje C en 1973, lo que lo hizo más fácil de portar a diferentes máquinas.",
          "a": true,
          "explain": "En 1973 Unix se reescribió en C (también de Bell Labs), acelerando su adopción en universidades y laboratorios."
        },
        {
          "id": "tf2-1-3",
          "q": "La Open Software Foundation (OSF), surgida en 1984 para estandarizar Unix, logró frenar con éxito la fragmentación.",
          "a": false,
          "explain": "La OSF nació en 1984 para estandarizar Unix frente a la proliferación de versiones incompatibles, pero no tuvo mucho éxito."
        },
        {
          "id": "tf2-1-4",
          "q": "Stallman nació en 1953 en Nueva York y de estudiante integró la comunidad del laboratorio de inteligencia artificial del MIT.",
          "a": true,
          "explain": "Nació en 1953 en Nueva York y en los años 70, como estudiante del MIT, formó parte de esa comunidad donde se compartía el software abiertamente."
        },
        {
          "id": "tf2-1-5",
          "q": "Linus Torvalds desarrolló su kernel sobre una IBM PC con procesador Intel 80386.",
          "a": true,
          "explain": "Compró una IBM PC con procesador Intel 80386 y sobre ese hardware empezó a desarrollar su propio kernel."
        }
      ],
      "mc": [
        {
          "id": "mc2-1-1",
          "q": "¿En qué año se lanzó macOS, basado en una variante de BSD?",
          "options": [
            "1991",
            "2001",
            "2010",
            "1984"
          ],
          "correctIndex": 1,
          "explain": "Apple lanzó macOS en 2001, basado en Unix, específicamente en una variante de BSD."
        },
        {
          "id": "mc2-1-2",
          "q": "¿Qué herramientas fundamentales escribió Stallman, según el apunte?",
          "options": [
            "El kernel Linux y el sistema Minix",
            "El compilador GCC y el editor de texto Emacs",
            "El sistema BSD y el sistema Solaris",
            "El sistema Multics y el lenguaje C"
          ],
          "correctIndex": 1,
          "explain": "Stallman creó herramientas aún hoy fundamentales como el compilador GCC y el editor de texto Emacs."
        },
        {
          "id": "mc2-1-3",
          "q": "¿En qué red publicó Torvalds, el 25 de agosto de 1991, su histórico mensaje anunciando el kernel?",
          "options": [
            "Un grupo de noticias de Usenet",
            "La lista de correo de GNU",
            "El foro del MIT",
            "El boletín de Bell Labs"
          ],
          "correctIndex": 0,
          "explain": "El 25 de agosto de 1991 Linus publicó su mensaje en un grupo de noticias de Usenet, dirigido a los usuarios de Minix."
        },
        {
          "id": "mc2-1-4",
          "q": "Según el apunte, ¿por qué muchas empresas migraron de Unix a GNU/Linux hacia 2010?",
          "options": [
            "Porque Unix dejó de recibir soporte por completo",
            "Por su menor costo y su amplia comunidad de desarrolladores",
            "Porque GNU/Linux era el único sistema certificado como Unix",
            "Porque AT&T obligó a discontinuar las versiones comerciales"
          ],
          "correctIndex": 1,
          "explain": "Las versiones comerciales de Unix perdieron cuota de mercado; muchas empresas migraron a GNU/Linux por su menor costo y su amplia comunidad."
        }
      ],
      "ms": [
        {
          "id": "ms2-1-1",
          "q": "¿Cuáles instituciones participaron en el desarrollo de Multics en los años 60?",
          "options": [
            "MIT",
            "General Electric",
            "Bell Labs",
            "Sun Microsystems",
            "Universidad de Berkeley"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Multics lo desarrollaron el MIT junto con General Electric y Bell Labs. Sun Microsystems y Berkeley aparecen más tarde, ligadas a versiones de Unix."
        },
        {
          "id": "ms2-1-2",
          "q": "¿Cuáles de estos hitos ocurrieron efectivamente en el año 1991 según el apunte?",
          "options": [
            "Torvalds comienza a desarrollar su kernel",
            "Se asientan versiones como Solaris y AIX",
            "Torvalds publica su mensaje en Usenet",
            "Se reescribe Unix en lenguaje C",
            "Surge la primera bifurcación de Unix (BSD)"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "1991: Torvalds arranca su kernel, publica el mensaje en Usenet y se asientan Solaris y AIX. El C fue en 1973 y BSD en 1975."
        },
        {
          "id": "ms2-1-3",
          "q": "¿En cuáles de estos ámbitos superó GNU/Linux a Unix, según el apunte?",
          "options": [
            "Servidores",
            "Supercomputadoras",
            "Dispositivos móviles (vía Android)",
            "Certificación oficial como sistema Unix",
            "Infraestructura de internet"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "GNU/Linux domina en servidores, supercomputadoras, móviles (Android) e infraestructura de internet. La certificación oficial como Unix la conserva macOS."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-1-1",
        "front": "¿Qué fue Multics y cuándo lo abandonó Bell Labs?",
        "back": "Un sistema operativo de tiempo compartido de los años 60 (MIT, General Electric y Bell Labs). Innovador pero complejo y costoso; Bell Labs lo abandonó en 1969."
      },
      {
        "id": "fc2-1-2",
        "front": "¿Qué pasó con Unix en 1973?",
        "back": "Se reescribió en el lenguaje C (también de Bell Labs), lo que lo hizo mucho más portable entre máquinas y aceleró su adopción."
      },
      {
        "id": "fc2-1-3",
        "front": "Primera bifurcación importante de Unix (1975)",
        "back": "Al distribuirse a las universidades a bajo costo, Berkeley creó su propia versión: BSD (Berkeley Software Distribution)."
      },
      {
        "id": "fc2-1-4",
        "front": "Versiones de Unix que surgen hacia 1980",
        "back": "System V (AT&T), SunOS (Sun Microsystems), AIX (IBM) y HP-UX (Hewlett Packard)."
      },
      {
        "id": "fc2-1-5",
        "front": "¿Qué fue la OSF (1984)?",
        "back": "La Open Software Foundation, creada como respuesta a la proliferación de versiones incompatibles de Unix para estandarizarlo. No tuvo mucho éxito."
      },
      {
        "id": "fc2-1-6",
        "front": "¿Por qué Torvalds dejó Minix?",
        "back": "Minix (variante educativa de Tanenbaum) tenía buen comportamiento pero le resultaba limitado; quiso potenciar lo que podía hacer con su hardware y creó su propio kernel."
      },
      {
        "id": "fc2-1-7",
        "front": "Postura de Torvalds frente al software libre",
        "back": "No le interesaba particularmente el aspecto filosófico; su enfoque era práctico: quería un kernel que corriera en su PC y fuera útil. Lo lanzó bajo la GPL."
      }
    ]
  },
  "2": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-2-1",
          "q": "El software de virtualización recrea componentes del hardware físico (disco, red, CPU, video) convirtiéndolos en lógicos para que la máquina virtual los use.",
          "a": true,
          "explain": "Correcto: el software imita las funciones del hardware físico recreando sus componentes y convirtiéndolos en lógicos para que la VM pueda utilizarlos."
        },
        {
          "id": "tf2-2-2",
          "q": "En un hipervisor de tipo 1 (BareMetal), las máquinas virtuales tienen acceso directo a los componentes administrados por el sistema operativo que corre sobre el hardware.",
          "a": true,
          "explain": "Sí: el tipo 1 corre un SO directamente sobre el hardware y las VMs alojadas tienen acceso directo a los componentes administrados por ese mismo SO."
        },
        {
          "id": "tf2-2-3",
          "q": "KVM es una tecnología de hipervisor de tipo 2 (Hosted).",
          "a": false,
          "explain": "Falso: KVM es tipo 1 (BareMetal), junto con Proxmox VE, Xen, MS Hyper-V y VMware ESXi."
        },
        {
          "id": "tf2-2-4",
          "q": "La escalabilidad horizontal y vertical de las máquinas virtuales es posible sin importar las limitaciones del hardware físico anfitrión.",
          "a": false,
          "explain": "Falso: se puede escalar horizontal y verticalmente sólo en la medida que el hardware físico tenga la potencialidad de permitirlo."
        },
        {
          "id": "tf2-2-5",
          "q": "El mainframe fue diseñado por IBM para procesamientos de datos masivos y permitía que múltiples usuarios accedieran simulando un sistema operativo para cada uno.",
          "a": true,
          "explain": "Correcto: el mainframe es una computadora de IBM para procesamientos masivos, diseñada para que múltiples usuarios accedan a una parte simulando un SO para cada uno."
        }
      ],
      "mc": [
        {
          "id": "mc2-2-1",
          "q": "¿Sobre qué corre un hipervisor de tipo 2 (Hosted) antes de administrar las máquinas virtuales?",
          "options": [
            "Directamente sobre el hardware físico",
            "Un sistema operativo estándar como Windows o GNU/Linux",
            "Otro hipervisor de tipo 1 anidado",
            "El microcódigo del procesador Intel o AMD"
          ],
          "correctIndex": 1,
          "explain": "En el tipo 2 corre un sistema operativo estándar (Windows o GNU/Linux) y sobre éste un software dedicado a administrar las VMs."
        },
        {
          "id": "mc2-2-2",
          "q": "¿Qué nombre reciben las extensiones que Intel y AMD desarrollaron en sus procesadores para virtualizar de forma eficiente?",
          "options": [
            "IVT y AMD-V",
            "ESXi y KVM",
            "S/360 y AMD-X",
            "BareMetal y Hosted"
          ],
          "correctIndex": 0,
          "explain": "Intel desarrolló IVT (Intel Virtualization Technology) y AMD desarrolló AMD-V (AMD Virtualization)."
        },
        {
          "id": "mc2-2-3",
          "q": "¿En qué época sitúa el apunte el origen del concepto de hipervisor?",
          "options": [
            "A finales de los años ‘90 con VMware",
            "A comienzos de los años 2000 con Intel y AMD",
            "A fines de los ‘60 y principios de los ‘70 con el mainframe",
            "En la década de 1980 con las primeras PC"
          ],
          "correctIndex": 2,
          "explain": "El concepto de hipervisor viene desde fines de los ‘60 y principios de los ‘70 con el uso del mainframe."
        },
        {
          "id": "mc2-2-4",
          "q": "¿Cuál de estas tecnologías corresponde a un hipervisor de tipo 2 (Hosted)?",
          "options": [
            "MS Hyper-V",
            "Proxmox VE",
            "UTM",
            "Xen"
          ],
          "correctIndex": 2,
          "explain": "UTM es tipo 2 (Hosted). MS Hyper-V, Proxmox VE y Xen son tipo 1 (BareMetal)."
        }
      ],
      "ms": [
        {
          "id": "ms2-2-1",
          "q": "¿Cuáles de estas tecnologías son hipervisores de tipo 1 (BareMetal)?",
          "options": [
            "MS Hyper-V",
            "QEMU",
            "VMware ESXi",
            "VMware Workstation",
            "Xen"
          ],
          "correctIndexes": [
            0,
            2,
            4
          ],
          "explain": "Tipo 1 (BareMetal): Proxmox VE, Xen, KVM, MS Hyper-V y VMware ESXi. QEMU y VMware Workstation son tipo 2."
        },
        {
          "id": "ms2-2-2",
          "q": "¿Cuáles de las siguientes afirmaciones sobre el hipervisor y sus recursos son correctas según el apunte?",
          "options": [
            "A los servidores que administran las máquinas virtuales se los llama hipervisores",
            "La disponibilidad y los recursos de cada VM dependen del hardware anfitrión",
            "El primer mainframe con capacidad de simular un SO por usuario fue el IBM S/360 Modelo 67",
            "VMware desarrolló los primeros hipervisores modernos a finales de los ‘90",
            "Los hipervisores fueron inventados por Intel junto con la extensión IVT"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro son correctas. La última es falsa: Intel desarrolló la extensión IVT en el procesador, pero los primeros hipervisores modernos los desarrolló VMware."
        },
        {
          "id": "ms2-2-3",
          "q": "¿Cuáles de estas tecnologías son hipervisores de tipo 2 (Hosted)?",
          "options": [
            "Parallels Desktop",
            "KVM",
            "VMware Player",
            "Proxmox VE",
            "VMware ESXi"
          ],
          "correctIndexes": [
            0,
            2
          ],
          "explain": "Tipo 2 (Hosted): VMware Workstation/Player, Parallels Desktop, UTM, VirtualBox y QEMU. KVM, Proxmox VE y VMware ESXi son tipo 1."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-2-1",
        "front": "¿Qué hace el software que permite virtualizar servidores?",
        "back": "Imita las funciones del hardware físico, recreando sus componentes (disco, red, CPU, video, etc.) y convirtiéndolos en lógicos para que la máquina virtual pueda utilizarlos."
      },
      {
        "id": "fc2-2-2",
        "front": "¿De qué depende la disponibilidad y los recursos de cada máquina virtual?",
        "back": "Del hardware anfitrión que tenga como base. Los servidores que realizan este trabajo se llaman hipervisores."
      },
      {
        "id": "fc2-2-3",
        "front": "Escalabilidad de las máquinas virtuales",
        "back": "Si el hardware físico tiene la potencialidad de permitirlo, se puede escalar horizontal y verticalmente el hardware de las VMs, tanto en capacidad como en cantidad."
      },
      {
        "id": "fc2-2-4",
        "front": "¿Qué caracteriza al hipervisor de tipo 1 (BareMetal)?",
        "back": "Corre un SO directamente sobre el hardware y las VMs alojadas tienen acceso directo a los componentes administrados por ese SO. Ej: Proxmox VE, Xen, KVM, MS Hyper-V, VMware ESXi."
      },
      {
        "id": "fc2-2-5",
        "front": "¿Qué caracteriza al hipervisor de tipo 2 (Hosted)?",
        "back": "Sobre el hardware corre un SO estándar (Windows o GNU/Linux) y encima un software dedicado a administrar VMs. Ej: VMware Workstation/Player, Parallels Desktop, UTM, VirtualBox, QEMU."
      },
      {
        "id": "fc2-2-6",
        "front": "¿Por qué VMware pudo desarrollar los primeros hipervisores a fines de los ‘90?",
        "back": "Porque Intel y AMD desarrollaron extensiones en sus procesadores —IVT (Intel Virtualization Technology) y AMD-V (AMD Virtualization)— que permitieron un uso eficiente del procesador y generar entornos emulados."
      },
      {
        "id": "fc2-2-7",
        "front": "¿Qué es un mainframe y qué modelo inauguró la virtualización?",
        "back": "Una computadora de IBM para procesamientos de datos masivos, diseñada para que múltiples usuarios accedan simulando un SO para cada uno. El primer modelo con esa capacidad fue el IBM S/360 Modelo 67."
      }
    ]
  },
  "3": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-3-1",
          "q": "La sigla <code>GUI</code> corresponde a Graphic User Interface, la interfaz gráfica del sistema.",
          "a": true,
          "explain": "El apunte define GUI como Graphic User Interface, en contraste con la CLI (Command Line Interface) de texto."
        },
        {
          "id": "tf2-3-2",
          "q": "Zsh fue el primer shell creado para Unix por Stephen Bourne en los años 70.",
          "a": false,
          "explain": "El primer shell creado para Unix fue sh (Bourne Shell), por Stephen Bourne. Zsh es posterior, basado en sh pero con características avanzadas."
        },
        {
          "id": "tf2-3-3",
          "q": "Ksh (Korn Shell) se describe como una combinación de sh y csh.",
          "a": true,
          "explain": "El apunte indica que Ksh es una evolución de Csh, incluye funciones avanzadas para quienes programan en C y es una combinación de sh y csh."
        },
        {
          "id": "tf2-3-4",
          "q": "La CLI le da al administrador de sistemas más flexibilidad y rapidez que la interfaz gráfica.",
          "a": true,
          "explain": "El apunte destaca que, si bien la GUI permite muchas tareas, la CLI le da al administrador algo más de flexibilidad y rapidez."
        },
        {
          "id": "tf2-3-5",
          "q": "El shell reemplaza al sistema operativo y ejecuta los comandos por sí mismo.",
          "a": false,
          "explain": "El shell no reemplaza al sistema operativo: es un programa que interpreta los comandos y actúa como intermediario entre el usuario y el sistema operativo."
        }
      ],
      "mc": [
        {
          "id": "mc2-3-1",
          "q": "¿Cuál de estos shells es descripto como el más común y predeterminado en muchas distribuciones GNU/Linux?",
          "options": [
            "Csh (C Shell)",
            "Bash (Bourne Again Shell)",
            "sh (Bourne Shell)",
            "Ksh (Korn Shell)"
          ],
          "correctIndex": 1,
          "explain": "Bash (Bourne Again Shell) es el más común en GNU/Linux, evolución de sh y predeterminado en muchas distribuciones."
        },
        {
          "id": "mc2-3-2",
          "q": "Según el apunte, ¿cómo se describe la relación entre el shell y el sistema operativo?",
          "options": [
            "El shell administra la memoria RAM del equipo",
            "El shell actúa como intermediario entre el usuario y el sistema operativo",
            "El shell dibuja las ventanas de la interfaz gráfica",
            "El shell es el núcleo que ejecuta los procesos"
          ],
          "correctIndex": 1,
          "explain": "El shell interpreta los comandos escritos en la terminal y actúa como intermediario entre el usuario y el sistema operativo."
        },
        {
          "id": "mc2-3-3",
          "q": "¿Qué shell está basado en sh pero incorpora características avanzadas y se lo señala como muy potente y flexible?",
          "options": [
            "Zsh (Z Shell)",
            "Csh (C Shell)",
            "sh (Bourne Shell)",
            "Ksh (Korn Shell)"
          ],
          "correctIndex": 0,
          "explain": "Zsh (Z Shell) está basado en sh pero con características avanzadas, y es uno de los shells más potentes y flexibles."
        },
        {
          "id": "mc2-3-4",
          "q": "La terminal de texto se define principalmente como una...",
          "options": [
            "interfaz gráfica de usuario para administrar el sistema",
            "evolución del Bourne Shell orientada a C",
            "interfaz de línea de comandos para interactuar con el sistema operativo",
            "herramienta que reemplaza al kernel de GNU/Linux"
          ],
          "correctIndex": 2,
          "explain": "La terminal de texto es una interfaz de línea de comandos (CLI) donde el usuario interactúa con el sistema operativo mediante comandos de texto."
        }
      ],
      "ms": [
        {
          "id": "ms2-3-1",
          "q": "¿Qué afirmaciones sobre sh y Bash son correctas según el apunte?",
          "options": [
            "sh fue el primer shell creado para Unix por Stephen Bourne",
            "Bash es la evolución de sh",
            "sh fue desarrollado por Bill Joy basado en C",
            "Bash suele venir predeterminado en muchas distribuciones",
            "sh se creó en los años 70"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "Todas son textuales salvo la de Bill Joy: quien desarrolló un shell basado en C (Csh) fue Bill Joy, no sh."
        },
        {
          "id": "ms2-3-2",
          "q": "¿Cuáles de las siguientes personas figuran en el apunte asociadas a la creación de un shell?",
          "options": [
            "Stephen Bourne",
            "Bill Joy",
            "Linus Torvalds",
            "Richard Stallman",
            "David Korn"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "El apunte menciona a Stephen Bourne (sh) y a Bill Joy (Csh). Linus Torvalds, Richard Stallman y David Korn no aparecen nombrados."
        },
        {
          "id": "ms2-3-3",
          "q": "¿Qué características se atribuyen a la CLI frente a la GUI en el apunte?",
          "options": [
            "Es fundamental para administrar GNU/Linux",
            "Permite un control más directo y preciso",
            "Da más flexibilidad y rapidez al administrador",
            "Impide realizar tareas que sí hace la GUI",
            "Es una interfaz basada en imágenes y ventanas"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "La CLI es fundamental, da control directo y preciso, y aporta flexibilidad y rapidez. No impide tareas de la GUI, y no es una interfaz de ventanas (esa es la GUI)."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-3-1",
        "front": "¿Qué diferencia hay entre CLI y GUI?",
        "back": "La CLI (Command Line Interface) es la interfaz de texto por comandos; la GUI (Graphic User Interface) es la interfaz gráfica. La CLI da control más directo, preciso, flexible y rápido."
      },
      {
        "id": "fc2-3-2",
        "front": "¿Por qué la CLI es fundamental para administrar GNU/Linux?",
        "back": "Porque permite un control más directo y preciso del sistema, con más flexibilidad y rapidez que las interfaces gráficas."
      },
      {
        "id": "fc2-3-3",
        "front": "¿Qué rol cumple el shell?",
        "back": "Es el programa que interpreta los comandos escritos en la terminal y actúa como intermediario entre el usuario y el sistema operativo."
      },
      {
        "id": "fc2-3-4",
        "front": "¿Quién creó sh y cuándo?",
        "back": "Stephen Bourne creó sh (Bourne Shell), el primer shell para Unix, en los años 70."
      },
      {
        "id": "fc2-3-5",
        "front": "¿Qué es Bash y por qué es tan usado?",
        "back": "Bourne Again Shell: evolución de sh, el más común en GNU/Linux y predeterminado en muchas distribuciones."
      },
      {
        "id": "fc2-3-6",
        "front": "¿Quién desarrolló Csh y en qué se basa?",
        "back": "Bill Joy desarrolló Csh (C Shell), basado en la sintaxis del lenguaje de programación C."
      },
      {
        "id": "fc2-3-7",
        "front": "¿Cómo se describe a Ksh (Korn Shell)?",
        "back": "Evolución de Csh con funciones avanzadas para quienes programan en C; es una combinación de sh y csh."
      }
    ]
  },
  "4": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-4-1",
          "q": "El propósito del FHS es que desarrolladores y administradores puedan trabajar de forma uniforme en distintos sistemas tipo Unix.",
          "a": true,
          "explain": "El FHS busca mantener la consistencia en la organización de archivos y directorios para que se pueda trabajar de manera uniforme en diferentes sistemas."
        },
        {
          "id": "tf2-4-2",
          "q": "El directorio /root es el mismo que /home, ya que el superusuario también tiene su carpeta dentro de /home.",
          "a": false,
          "explain": "Falso: /root funciona como el /home de los usuarios, pero al pertenecer al superusuario está diferenciado y cuelga directamente del /."
        },
        {
          "id": "tf2-4-3",
          "q": "Los directorios compartidos podrían estar en un servidor diferente y utilizarse de forma local, como si fueran propios.",
          "a": true,
          "explain": "El apunte define así a los directorios compartidos: pueden residir en otro servidor y usarse localmente como si fueran propios."
        },
        {
          "id": "tf2-4-4",
          "q": "En Linux sólo los documentos y programas son archivos; el hardware se gestiona por fuera del sistema de archivos.",
          "a": false,
          "explain": "Falso: en Linux todo es un archivo, incluidos los dispositivos de hardware, directorios y enlaces."
        },
        {
          "id": "tf2-4-5",
          "q": "Un enlace simbólico puede ser softlink o hardlink y se identifica con una \"l\" al inicio de la columna de permisos.",
          "a": true,
          "explain": "Correcto: los links referencian otros archivos, pueden ser softlinks o hardlinks y en ls -l se reconocen por la \"l\" inicial."
        }
      ],
      "mc": [
        {
          "id": "mc2-4-1",
          "q": "¿Qué tipo de información almacena el directorio /dev?",
          "options": [
            "Archivos de configuración de servicios y programas",
            "Archivos de dispositivo que representan cada pieza de hardware",
            "Información dinámica sobre los procesos en ejecución",
            "Ejecutables binarios críticos para iniciar el sistema"
          ],
          "correctIndex": 1,
          "explain": "En /dev están los archivos de dispositivo: como todo en Linux es un archivo, cada pieza de hardware (discos, particiones, mouse, teclado) se representa allí."
        },
        {
          "id": "mc2-4-2",
          "q": "¿Para qué se diseñó el directorio /usr/local?",
          "options": [
            "Para guardar los archivos del gestor de arranque GRUB",
            "Para montar discos externos de uso prolongado",
            "Para que los usuarios instalen su propio software sin sobrescribir archivos importantes",
            "Para almacenar archivos que puedan variar en su tamaño"
          ],
          "correctIndex": 2,
          "explain": "/usr/local tiene su propia estructura (/bin, /lib, /sbin) para que, igual que /opt, los usuarios instalen software fuera de la distribución sin sobrescribir archivos importantes."
        },
        {
          "id": "mc2-4-3",
          "q": "Según la salida de ls -l, ¿qué carácter inicial corresponde a un archivo de bloques?",
          "options": [
            "\"c\"",
            "\"b\"",
            "\"p\"",
            "\"d\""
          ],
          "correctIndex": 1,
          "explain": "Los archivos de bloques, donde la información se transfiere en bloques grandes de tamaño fijo, se identifican con una \"b\" al inicio (ej: brw-rw---- ... sda1)."
        },
        {
          "id": "mc2-4-4",
          "q": "¿Por qué suele generarse una partición aparte para el directorio /home?",
          "options": [
            "Para controlar el crecimiento de ese espacio",
            "Para impedir que los usuarios lean sus propios archivos",
            "Para acelerar el arranque del sistema con GRUB",
            "Para guardar allí los archivos de configuración del sistema"
          ],
          "correctIndex": 0,
          "explain": "Se suele crear una partición aparte para /home con el fin de tener controlado el crecimiento de ese espacio, donde cada usuario es propietario de lo que produce."
        }
      ],
      "ms": [
        {
          "id": "ms2-4-1",
          "q": "¿Cuáles de las siguientes afirmaciones sobre directorios del FHS son correctas?",
          "options": [
            "/etc no debería guardar archivos binarios ni datos de usuarios",
            "/boot contiene los archivos del gestor de arranque GRUB",
            "/proc contiene archivos reales almacenados en disco",
            "/var fue diseñado para almacenar archivos que puedan variar en su tamaño",
            "/opt está destinado a instalar software dentro de la distribución oficial"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "/etc guarda configuración (no binarios ni datos de usuarios), /boot tiene el GRUB y /var almacena archivos variables. /proc se genera en memoria (no son archivos reales) y /opt es para software fuera de las distribuciones."
        },
        {
          "id": "ms2-4-2",
          "q": "¿Cuáles de estos directorios aparecen listados como estáticos en el apunte?",
          "options": [
            "/usr",
            "/sbin",
            "/etc",
            "/opt",
            "/run"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Los estáticos citados son /bin, /sbin, /opt, /boot y /usr. /etc y /run figuran como restringidos, no estáticos."
        },
        {
          "id": "ms2-4-3",
          "q": "¿Cuáles de estos identificadores de tipo de archivo en ls -l son correctos?",
          "options": [
            "\"-\" para archivos regulares",
            "\"c\" para archivos de caracteres",
            "\"d\" para archivos de bloques",
            "\"p\" para pipes",
            "\"s\" para links simbólicos"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Regular es \"-\", caracteres \"c\" y pipe \"p\". Los bloques son \"b\" (no \"d\", que es directorio) y los links son \"l\" (no \"s\")."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-4-1",
        "front": "¿En qué año comenzó el proyecto FHS y para qué?",
        "back": "En 1993, para acordar cómo organizar los directorios y qué archivos guardar en cada lugar, dando a las distribuciones un punto de referencia único."
      },
      {
        "id": "fc2-4-2",
        "front": "/dev",
        "back": "Contiene los archivos de dispositivo. Como todo en Linux es un archivo, cada pieza de hardware (discos, particiones, mouse, teclado) está representada allí."
      },
      {
        "id": "fc2-4-3",
        "front": "/boot",
        "back": "Contiene los archivos del gestor de arranque, que es el GRUB, instalado en los pasos finales de la instalación."
      },
      {
        "id": "fc2-4-4",
        "front": "/opt y /usr/local",
        "back": "Ambos permiten a los usuarios instalar software fuera de las distribuciones. /usr/local tiene su propia estructura (/bin, /lib, /sbin) para no sobrescribir archivos importantes."
      },
      {
        "id": "fc2-4-5",
        "front": "Directorios compartidos vs restringidos",
        "back": "Compartidos: pueden estar en otro servidor y usarse localmente como propios. Restringidos: no se pueden compartir, sólo los modifica el administrador (/etc, /boot, /run, /lock)."
      },
      {
        "id": "fc2-4-6",
        "front": "Archivos de caracteres vs de bloques",
        "back": "Ambos son archivos de dispositivo para I/O. Caracteres (\"c\"): la info se transmite de a un carácter. Bloques (\"b\"): se transfiere en bloques grandes de tamaño fijo."
      },
      {
        "id": "fc2-4-7",
        "front": "¿Qué es un archivo de dispositivo?",
        "back": "Representa un dispositivo físico real (impresora, interfaz de red) y se usa para operaciones de I/O. Tiene dos tipos especiales: de caracteres y de bloques."
      }
    ]
  },
  "5": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-5-1",
          "q": "En el comando <code>ls -l /var</code>, la parte <code>-l</code> es una opción que modifica cómo se presenta el listado.",
          "a": true,
          "explain": "Las opciones son parámetros que modifican el comportamiento del comando; <code>-l</code> cambia la forma en que se presenta el listado."
        },
        {
          "id": "tf2-5-2",
          "q": "El comando <code>cat</code> se usa para crear un directorio nuevo.",
          "a": false,
          "explain": "<code>cat</code> muestra el contenido de un archivo por pantalla. El que crea directorios es <code>mkdir</code>."
        },
        {
          "id": "tf2-5-3",
          "q": "Para Linux, <code>Archivo</code> y <code>archivo</code> hacen referencia a dos objetos distintos.",
          "a": true,
          "explain": "Linux es case-sensitive: <code>ARCHIVO</code>, <code>Archivo</code> y <code>archivo</code> son objetos diferentes."
        },
        {
          "id": "tf2-5-4",
          "q": "La opción <code>-h</code> del comando <code>ls</code> ordena los archivos por fecha de modificación.",
          "a": false,
          "explain": "<code>-h</code> muestra los tamaños en formato legible (KB, MB). La que ordena por fecha de modificación es <code>-t</code>."
        },
        {
          "id": "tf2-5-5",
          "q": "El comando <code>whereis</code> muestra la ubicación del binario de un comando.",
          "a": true,
          "explain": "<code>whereis</code> muestra la ubicación del binario; <code>whatis</code> en cambio da una breve descripción del comando."
        }
      ],
      "mc": [
        {
          "id": "mc2-5-1",
          "q": "¿Qué comando renombra <code>lista.txt</code> a <code>nueva_lista.txt</code>?",
          "options": [
            "cp lista.txt nueva_lista.txt",
            "mv lista.txt nueva_lista.txt",
            "touch lista.txt nueva_lista.txt",
            "rm lista.txt nueva_lista.txt"
          ],
          "correctIndex": 1,
          "explain": "<code>mv</code> mueve o renombra archivos: <code>mv lista.txt nueva_lista.txt</code> cambia el nombre del archivo."
        },
        {
          "id": "mc2-5-2",
          "q": "¿Qué opción de <code>ls</code> muestra los detalles como permisos, propietario y tamaño?",
          "options": [
            "-a",
            "-t",
            "-l",
            "-r"
          ],
          "correctIndex": 2,
          "explain": "<code>-l</code> muestra detalles como permisos, propietario y tamaño del contenido."
        },
        {
          "id": "mc2-5-3",
          "q": "¿Qué comando apaga el sistema de forma inmediata?",
          "options": [
            "shutdown -h now",
            "shutdown -r now",
            "logout -h now",
            "shutdown -a now"
          ],
          "correctIndex": 0,
          "explain": "<code>shutdown -h now</code> apaga el sistema; <code>shutdown -r now</code> lo reinicia."
        },
        {
          "id": "mc2-5-4",
          "q": "En la estructura <code>$ comando [opciones] [argumentos]</code>, ¿qué representa el argumento?",
          "options": [
            "El parámetro que modifica el comportamiento del comando",
            "El objeto sobre el que se ejecuta el comando",
            "La función de autocompletado que rellena el resto",
            "El manual con las combinaciones disponibles"
          ],
          "correctIndex": 1,
          "explain": "El argumento es el objeto sobre el que se ejecuta el comando; en <code>ls -l /var</code> el argumento es <code>/var</code>."
        }
      ],
      "ms": [
        {
          "id": "ms2-5-1",
          "q": "¿Cuáles de estos comandos crean algo nuevo en el sistema de archivos según el apunte?",
          "options": [
            "<code>touch</code> crea un archivo vacío",
            "<code>mkdir</code> crea un directorio",
            "<code>pwd</code> crea el directorio actual",
            "<code>cat</code> crea un archivo con contenido",
            "<code>mkdir -p</code> crea directorios anidados"
          ],
          "correctIndexes": [
            0,
            1,
            4
          ],
          "explain": "<code>touch</code> crea un archivo vacío, <code>mkdir</code> crea un directorio y <code>mkdir -p</code> crea directorios anidados. <code>pwd</code> solo muestra el directorio actual y <code>cat</code> muestra contenido, no crea archivos."
        },
        {
          "id": "ms2-5-2",
          "q": "¿Qué afirmaciones sobre <code>cp</code> y sus opciones son correctas?",
          "options": [
            "<code>cp</code> copia archivos o directorios",
            "<code>-r</code> copia directorios de forma recursiva",
            "<code>-v</code> muestra lo que se está copiando",
            "<code>cp</code> elimina el archivo original al copiar",
            "<code>-f</code> es la opción de <code>cp</code> para copiar sin preguntar"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "<code>cp</code> copia archivos o directorios; <code>-r</code> es recursivo y <code>-v</code> muestra lo copiado. No elimina el original (eso sería <code>mv</code>) y el apunte no menciona un <code>-f</code> para <code>cp</code>."
        },
        {
          "id": "ms2-5-3",
          "q": "Según el apunte, ¿cuáles de estas opciones pertenecen efectivamente al comando <code>ls</code>?",
          "options": [
            "<code>-a</code> muestra archivos ocultos",
            "<code>-r</code> ordena en orden inverso",
            "<code>-p</code> muestra el manual del comando",
            "<code>-f</code> fuerza el listado sin preguntar",
            "<code>-t</code> ordena por fecha de modificación"
          ],
          "correctIndexes": [
            0,
            1,
            4
          ],
          "explain": "<code>ls</code> tiene <code>-a</code>, <code>-r</code> y <code>-t</code> (además de <code>-l</code> y <code>-h</code>). No existe <code>-p</code> ni <code>-f</code> para <code>ls</code> en el apunte: <code>-p</code> es de <code>mkdir</code> y <code>-f</code> de <code>rm</code>."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-5-1",
        "front": "¿Qué es un comando en Linux?",
        "back": "Una instrucción que le dice al sistema que realice una operación, desde mostrar el contenido de un archivo hasta gestionar usuarios y permisos."
      },
      {
        "id": "fc2-5-2",
        "front": "Opciones vs argumentos",
        "back": "Las opciones son parámetros que modifican el comportamiento del comando (ej: -l); el argumento es el objeto sobre el que se ejecuta (ej: /var)."
      },
      {
        "id": "fc2-5-3",
        "front": "Tecla tab",
        "back": "Función de autocompletado: escribís solo una parte del comando, presionás tab y Linux rellena el resto."
      },
      {
        "id": "fc2-5-4",
        "front": "whatis vs whereis",
        "back": "whatis da una breve descripción de un comando; whereis muestra la ubicación del binario."
      },
      {
        "id": "fc2-5-5",
        "front": "cd",
        "back": "Cambia de directorio. cd /home entra a /home; cd .. sube un nivel."
      },
      {
        "id": "fc2-5-6",
        "front": "mv",
        "back": "Mueve o renombra archivos y directorios. mv lista.txt /documentos lo mueve; mv lista.txt nueva_lista.txt lo renombra."
      },
      {
        "id": "fc2-5-7",
        "front": "rm -rf",
        "back": "Combina -r (recursivo) y -f (forzado): borra todo sin preguntar. Peligroso, un dedazo y te comés un garrón."
      }
    ]
  },
  "6": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-6-1",
          "q": "Los archivos de texto plano cuentan con jerarquías en el texto y personalización de estilos.",
          "a": false,
          "explain": "El apunte aclara que los archivos de texto plano carecen de formato especial: no tienen estilos ni jerarquías en el texto."
        },
        {
          "id": "tf2-6-2",
          "q": "Pico fue originalmente parte del cliente de correo electrónico Pine.",
          "a": true,
          "explain": "El apunte indica que Pico nació como parte del cliente de correo Pine, y que es sencillo y minimalista."
        },
        {
          "id": "tf2-6-3",
          "q": "Estando en modo comando, al presionar los dos puntos <code>:</code> el cursor se va al final de la pantalla.",
          "a": true,
          "explain": "Así se accede al modo EX o última línea: desde modo comando, con <code>:</code> el cursor baja al final para agregar comandos de acción o búsqueda."
        },
        {
          "id": "tf2-6-4",
          "q": "El comando <code>dd</code> copia la línea sobre la que está el cursor.",
          "a": false,
          "explain": "El que copia la línea es <code>yy</code>. El comando <code>dd</code> borra o corta la línea."
        },
        {
          "id": "tf2-6-5",
          "q": "VIM fue concebido bajo el lema \"editor para programadores\".",
          "a": true,
          "explain": "El apunte menciona que la concepción de VIM venía con el lema \"editor para programadores\"."
        }
      ],
      "mc": [
        {
          "id": "mc2-6-1",
          "q": "¿Qué editor es descripto como el estándar presente en casi todas las distribuciones de Linux y de Unix?",
          "options": [
            "VIM",
            "Emacs",
            "VI",
            "Nano"
          ],
          "correctIndex": 2,
          "explain": "VI es el editor estándar en casi todas las distribuciones de Linux y también de Unix, ligero y eficiente."
        },
        {
          "id": "mc2-6-2",
          "q": "En la guía básica, ¿qué comando pega la/s línea/s copiada/s o cortada/s sobre el cursor?",
          "options": [
            "p",
            "P",
            "yy",
            "u"
          ],
          "correctIndex": 1,
          "explain": "La <code>P</code> mayúscula pega sobre el cursor; la <code>p</code> minúscula pega debajo del cursor."
        },
        {
          "id": "mc2-6-3",
          "q": "¿Con qué tecla se pasa desde el modo comando al modo de inserción de texto?",
          "options": [
            ":",
            "Esc",
            "i",
            "x"
          ],
          "correctIndex": 2,
          "explain": "Presionando la letra <code>i</code> se pasa al modo de inserción, donde se puede escribir y agregar caracteres."
        },
        {
          "id": "mc2-6-4",
          "q": "¿Qué comando de VI/VIM abre un campo al final del editor para buscar palabras?",
          "options": [
            "/",
            ": + w",
            "u",
            "x"
          ],
          "correctIndex": 0,
          "explain": "La barra <code>/</code> abre un campo al final del editor para buscar palabras."
        }
      ],
      "ms": [
        {
          "id": "ms2-6-1",
          "q": "¿Cuáles de estas afirmaciones sobre los editores populares son correctas según el apunte?",
          "options": [
            "Pico se controla completamente mediante el teclado",
            "Emacs fue creado por Bram Moolenaar",
            "VI es ligero y no consume grandes recursos del sistema",
            "Nano viene preinstalado en muchas distribuciones",
            "VIM es una versión mejorada de VI"
          ],
          "correctIndexes": [
            0,
            2,
            3,
            4
          ],
          "explain": "Pico es solo por teclado, VI es ligero, Nano viene preinstalado y VIM mejora a VI. Emacs fue creado por Richard Stallman, no por Bram Moolenaar."
        },
        {
          "id": "ms2-6-2",
          "q": "¿Cuáles de los siguientes comandos actúan sobre varias líneas a la vez?",
          "options": [
            "5 + yy",
            "x",
            "5 + dd",
            "Esc",
            "i"
          ],
          "correctIndexes": [
            0,
            2
          ],
          "explain": "<code>5 + yy</code> copia las siguientes 5 líneas y <code>5 + dd</code> corta las siguientes 5 líneas. <code>x</code> borra un carácter, y Esc e <code>i</code> son cambios de modo."
        },
        {
          "id": "ms2-6-3",
          "q": "¿Cuáles de estas afirmaciones sobre el modo comando de VIM son correctas?",
          "options": [
            "Es el modo en el que se inicia VIM al abrir un archivo",
            "Permite desplazar el cursor dentro del texto",
            "Las teclas ejecutan acciones sobre el texto",
            "Se accede a él presionando la letra i",
            "Permite escribir y agregar caracteres directamente"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "El modo comando es el modo inicial, permite desplazar el cursor y ejecutar acciones. Con <code>i</code> se pasa al modo inserción, que es el que permite escribir caracteres."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-6-1",
        "front": "Pico",
        "back": "Editor originado como parte del cliente de correo Pine. Sencillo y minimalista, control completamente por teclado y con una barra inferior con los comandos claves."
      },
      {
        "id": "fc2-6-2",
        "front": "Emacs: creador y rasgo",
        "back": "Uno de los editores más poderosos y extensibles. Creado por Richard Stallman durante el proyecto GNU. Su aprendizaje no es sencillo pero su flexibilidad es incomparable."
      },
      {
        "id": "fc2-6-3",
        "front": "Modo EX o última línea",
        "back": "Desde el modo comando, presionando los dos puntos \":\" el cursor va al final de la pantalla y permite agregar comandos de acción o de búsqueda."
      },
      {
        "id": "fc2-6-4",
        "front": "¿Cómo se abre un archivo con VI/VIM?",
        "back": "Con el comando \"$ vi archivo_nuevo\". Crea un archivo nuevo o modifica uno existente; al abrirse el editor ya se puede escribir o modificar."
      },
      {
        "id": "fc2-6-5",
        "front": "Comandos p y P",
        "back": "\"p\" pega la/s línea/s copiada/s o cortada/s debajo del cursor; \"P\" (mayúscula) las pega sobre el cursor."
      },
      {
        "id": "fc2-6-6",
        "front": "Comandos x y u",
        "back": "\"x\" borra el carácter bajo el cursor; \"u\" deshace el último cambio."
      },
      {
        "id": "fc2-6-7",
        "front": "Buscar palabras en VI/VIM",
        "back": "La barra \"/\" abre un campo al final del editor para buscar palabras dentro del texto."
      }
    ]
  },
  "7": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-7-1",
          "q": "APT funciona como capa superior a dpkg y se encarga de obtener las dependencias necesarias desde los repositorios.",
          "a": true,
          "explain": "Correcto. APT (Advanced Package Tool) es la capa superior sobre dpkg y obtiene todos los archivos y dependencias necesarias desde los repositorios para cumplir con el pedido del usuario."
        },
        {
          "id": "tf2-7-2",
          "q": "El esquema Standard Release (o Point Release) prioriza la estabilidad y agrupa las actualizaciones en versiones estables publicadas periódicamente.",
          "a": true,
          "explain": "Correcto. Standard Release agrupa las updates en versiones estables periódicas, prioriza la estabilidad y es común en producción. Lo usan Debian, Ubuntu LTS y Fedora."
        },
        {
          "id": "tf2-7-3",
          "q": "El comando apt-cache search realiza la búsqueda descargando el índice actualizado directamente desde los repositorios remotos.",
          "a": false,
          "explain": "apt-cache search busca en el índice local, no en los repositorios remotos. El que actualiza el índice local comparándolo con los repositorios es apt-get update."
        },
        {
          "id": "tf2-7-4",
          "q": "El componente contrib contiene paquetes libres compatibles con la DFSG, pero cuyas dependencias podrían no ser gratuitas.",
          "a": true,
          "explain": "Correcto. contrib son paquetes libres compatibles con la DFSG, pero con dependencias que podrían no ser gratuitas. Distinto de main (todo libre) y non-free (con costo, no cumple DFSG)."
        },
        {
          "id": "tf2-7-5",
          "q": "Para hacer el upgrade de distribución de Debian 11 a Debian 12 es necesario reinstalar el sistema desde cero.",
          "a": false,
          "explain": "Falso. El upgrade de distribución reemplaza los paquetes de la versión actual por los de la nueva estable sin reinstalar: se cambian los repos, se corre apt update y luego apt full-upgrade."
        }
      ],
      "mc": [
        {
          "id": "mc2-7-1",
          "q": "¿Qué comando elimina la aplicación pero conserva sus archivos de configuración?",
          "options": [
            "apt-get purge [aplicación]",
            "apt-get remove [aplicación]",
            "apt-get autoremove",
            "apt-get upgrade"
          ],
          "correctIndex": 1,
          "explain": "apt-get remove elimina la aplicación pero conserva los archivos de configuración. El que borra también la configuración es apt-get purge."
        },
        {
          "id": "mc2-7-2",
          "q": "¿Qué gestor de paquetes y archivo de configuración corresponden a ArchLinux?",
          "options": [
            "YUM y /etc/yum.conf",
            "APT y /etc/apt/sources.list",
            "PACMAN y /etc/pacman.conf",
            "DPKG y /etc/dpkg.conf"
          ],
          "correctIndex": 2,
          "explain": "ArchLinux usa PACMAN con su archivo /etc/pacman.conf. YUM y /etc/yum.conf son de RedHat; APT y sources.list son de Debian."
        },
        {
          "id": "mc2-7-3",
          "q": "En el formato de una línea del sources.list, ¿qué representa el campo distro?",
          "options": [
            "La URL del repositorio desde donde se descargan los paquetes",
            "El nombre de la distribución del repositorio (jessie, stretch, buster, bullseye, bookworm)",
            "El componente del repositorio (main, contrib, non-free)",
            "El tipo de paquete, binario o fuente"
          ],
          "correctIndex": 1,
          "explain": "distro es el nombre de la distribución a la que pertenece el repositorio: jessie, stretch, buster, bullseye, bookworm. La URL es el uri y el tipo de paquete es deb/deb-src."
        },
        {
          "id": "mc2-7-4",
          "q": "¿Cuál es el paso final para actualizar el sistema operativo completo hacia la nueva versión estable?",
          "options": [
            "apt autoremove",
            "apt upgrade",
            "apt full-upgrade",
            "apt update"
          ],
          "correctIndex": 2,
          "explain": "Tras cambiar los repos y correr apt update, el paso final es apt full-upgrade, que actualiza el SO completo, reemplaza bibliotecas y actualiza servicios."
        }
      ],
      "ms": [
        {
          "id": "ms2-7-1",
          "q": "¿Cuáles de las siguientes son distribuciones asociadas al esquema Standard Release según el apunte?",
          "options": [
            "Debian",
            "Arch Linux",
            "Ubuntu LTS",
            "OpenSUSE",
            "Fedora"
          ],
          "correctIndexes": [
            0,
            2,
            4
          ],
          "explain": "Standard Release: Debian, Ubuntu LTS y Fedora. Arch Linux y OpenSUSE son ejemplos de Rolling Release."
        },
        {
          "id": "ms2-7-2",
          "q": "¿Cuáles de estas afirmaciones sobre dpkg son correctas según el cuadro comparativo?",
          "options": [
            "Es de bajo nivel",
            "No resuelve dependencias automáticamente",
            "Gestiona directamente archivos .deb locales",
            "Interactúa con los repositorios para descargar paquetes",
            "Es más amigable y automatizado que APT"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "dpkg es de bajo nivel, no resuelve dependencias automáticamente y gestiona directamente los .deb locales. Interactuar con repos y ser más amigable/automatizado son características de APT."
        },
        {
          "id": "ms2-7-3",
          "q": "¿Cuáles de los siguientes son pasos previos indicados en el apunte antes de modificar los repositorios para el upgrade de distribución?",
          "options": [
            "apt update (actualizar lista de repositorios)",
            "apt upgrade (actualizar paquetes instalados)",
            "apt autoremove (limpiar paquetes residuales)",
            "apt-get purge de todos los paquetes instalados",
            "reboot antes de tocar los repositorios"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Los primeros pasos son apt update, apt upgrade y apt autoremove. El purge masivo y el reboot previo no forman parte del procedimiento; el reboot se hace recién al final."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-7-1",
        "front": "¿Qué hace apt-get update?",
        "back": "Actualiza los índices locales de paquetes comparándolos con lo que encuentra en los repositorios listados en el sources.list. No instala ni actualiza paquetes; conviene correrlo tras modificar el sources.list."
      },
      {
        "id": "fc2-7-2",
        "front": "deb vs deb-src en sources.list",
        "back": "deb indica paquetes binarios precompilados .deb. deb-src se refiere a paquetes fuente: los originales del programa más archivos de control y diferenciales necesarios para empaquetarlo."
      },
      {
        "id": "fc2-7-3",
        "front": "apt vs apt-get",
        "back": "apt se introdujo a partir de Debian 8 “Jessie” como interfaz más amigable que combina funciones de apt-get y apt-cache. Ambos siguen existiendo y no hay una diferencia que justifique preferir uno u otro."
      },
      {
        "id": "fc2-7-4",
        "front": "Formato de una línea del sources.list",
        "back": "deb [opciones] uri distro [componente1] [componente2]. Primero deb o deb-src, luego la URL (uri), el nombre de la distro (bullseye, bookworm…) y los componentes (main, contrib, non-free)."
      },
      {
        "id": "fc2-7-5",
        "front": "¿Qué hace apt full-upgrade?",
        "back": "Actualiza el SO completo hacia la nueva versión estable: actualiza componentes del sistema, reemplaza bibliotecas, actualiza servicios instalados y puede modificar configuraciones previo aviso. No reinstala desde cero."
      },
      {
        "id": "fc2-7-6",
        "front": "apt-cache search vs apt show",
        "back": "apt-cache search busca una aplicación en el índice local. apt show muestra versión, dependencias, tamaño y descripción de la aplicación especificada."
      },
      {
        "id": "fc2-7-7",
        "front": "Permisos para administrar paquetes",
        "back": "La administración de paquetes requiere permisos de administrador, o bien tener sudo instalado y pertenecer al sudoers."
      }
    ]
  },
  "8": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-8-1",
          "q": "El permiso de lectura (r) tiene un peso binario de 4.",
          "a": true,
          "explain": "Los pesos son r = 4, w = 2 y x = 1."
        },
        {
          "id": "tf2-8-2",
          "q": "El valor octal 6 corresponde a la combinación rw-.",
          "a": true,
          "explain": "rw- = 4 + 2 = 6, es decir lectura y escritura sin ejecución."
        },
        {
          "id": "tf2-8-3",
          "q": "En una cadena de permisos, el carácter d en la primera posición indica un archivo regular.",
          "a": false,
          "explain": "La d indica un directorio; el guión (-) es el que representa un archivo regular."
        },
        {
          "id": "tf2-8-4",
          "q": "El comando chown puede cambiar propietario y grupo a la vez separándolos con dos puntos.",
          "a": true,
          "explain": "El usuario root puede hacer chown usuario:grupo archivo para cambiar ambos en una sola sentencia."
        },
        {
          "id": "tf2-8-5",
          "q": "El operador + del formato simbólico se usa para quitar un permiso.",
          "a": false,
          "explain": "El + añade un permiso; el que quita es el operador -, y = establece un permiso específico."
        }
      ],
      "mc": [
        {
          "id": "mc2-8-1",
          "q": "¿Qué combinación de permisos representa el valor octal 3?",
          "options": [
            "-wx",
            "r-x",
            "rw-",
            "--x"
          ],
          "correctIndex": 0,
          "explain": "3 = w (2) + x (1) = -wx, escritura y ejecución."
        },
        {
          "id": "mc2-8-2",
          "q": "En la cadena -rwxr-xr--, ¿qué permisos tiene el grupo?",
          "options": [
            "rwx",
            "r--",
            "r-x",
            "-wx"
          ],
          "correctIndex": 2,
          "explain": "El segundo bloque de tres (r-x) corresponde al grupo: lectura y ejecución."
        },
        {
          "id": "mc2-8-3",
          "q": "¿Qué comando cambia únicamente el grupo asociado a un archivo?",
          "options": [
            "chmod",
            "chown",
            "chgrp",
            "ls -l"
          ],
          "correctIndex": 2,
          "explain": "chgrp cambia el grupo; chown cambia el propietario (o ambos si es root)."
        },
        {
          "id": "mc2-8-4",
          "q": "En formato simbólico, ¿a quién se le asigna el permiso con la letra o?",
          "options": [
            "Al owner",
            "Al grupo",
            "A otros",
            "A todos"
          ],
          "correctIndex": 2,
          "explain": "o = otros, u = owner y g = grupo."
        }
      ],
      "ms": [
        {
          "id": "ms2-8-1",
          "q": "¿Cuáles de estas equivalencias entre representación y valor octal son correctas?",
          "options": [
            "--x = 1",
            "-w- = 2",
            "r-x = 6",
            "rwx = 7",
            "rw- = 5"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "r-x vale 5 (no 6) y rw- vale 6 (no 5). Las otras tres son correctas."
        },
        {
          "id": "ms2-8-2",
          "q": "¿Cuáles de los siguientes son operadores válidos del formato simbólico?",
          "options": [
            "+",
            "*",
            "-",
            "=",
            "/"
          ],
          "correctIndexes": [
            0,
            2,
            3
          ],
          "explain": "Los operadores son + (añadir), - (quitar) y = (establecer). * y / no existen en este formato."
        },
        {
          "id": "ms2-8-3",
          "q": "¿Cuáles de estas afirmaciones sobre la cadena de permisos son correctas?",
          "options": [
            "Tiene 10 posiciones en total",
            "Las 9 posiciones de permisos se agrupan de a 3",
            "El primer carácter indica el tipo de archivo",
            "Cada grupo admite 16 combinaciones",
            "Se lista con el comando ls -l"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "Cada grupo admite 8 combinaciones (2³ = 8), no 16. Las demás afirmaciones son correctas."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-8-1",
        "front": "¿Qué valor octal corresponde a rw-?",
        "back": "6, porque r (4) + w (2) = 6: lectura y escritura sin ejecución."
      },
      {
        "id": "fc2-8-2",
        "front": "¿Cuántas combinaciones admite cada grupo de permisos y por qué?",
        "back": "8 combinaciones, porque son 3 bits (r, w, x) que pueden estar encendidos o apagados: 2³ = 8."
      },
      {
        "id": "fc2-8-3",
        "front": "¿Qué significan los caracteres - y d en la primera posición de la cadena?",
        "back": "- indica un archivo regular y d indica un directorio."
      },
      {
        "id": "fc2-8-4",
        "front": "¿Qué permisos otorga chmod 754?",
        "back": "7 (rwx) al owner, 5 (r-x) al grupo y 4 (r--) a otros."
      },
      {
        "id": "fc2-8-5",
        "front": "¿Qué hace chmod a=rx archivo?",
        "back": "Establece (=) para todos (a) exactamente los permisos de lectura y ejecución (rx), quitando cualquier otro."
      },
      {
        "id": "fc2-8-6",
        "front": "¿Cuáles son los 3 permisos especiales que refuerzan los permisos?",
        "back": "SetUID, SetGID y StickyBit."
      },
      {
        "id": "fc2-8-7",
        "front": "¿Qué representan las letras u, g y o en formato simbólico?",
        "back": "u = owner (propietario), g = grupo y o = otros."
      }
    ]
  },
  "9": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-9-1",
          "q": "El dígito octal 2 delante del permiso corresponde a SETgid.",
          "a": true,
          "explain": "SETgid se asigna en octal agregando un 2 delante del permiso (por ejemplo chmod 2755)."
        },
        {
          "id": "tf2-9-2",
          "q": "SETgid aplicado a un archivo hace que este se ejecute con los permisos del propietario del archivo.",
          "a": false,
          "explain": "En archivos, SETgid hace que se ejecute con los permisos del grupo propietario. Correr con los permisos del propietario es función de SETuid."
        },
        {
          "id": "tf2-9-3",
          "q": "En formato simbólico, el StickyBit se representa con una \"t\".",
          "a": true,
          "explain": "El valor referencial simbólico del StickyBit es una \"t\" (chmod +t directorio)."
        },
        {
          "id": "tf2-9-4",
          "q": "Los bits de permisos especiales solo pueden asignarse a directorios, nunca a archivos ejecutables.",
          "a": false,
          "explain": "Los 3 bits especiales pueden asignarse tanto a archivos ejecutables como a directorios."
        },
        {
          "id": "tf2-9-5",
          "q": "Con StickyBit activo, un usuario distinto del propietario no puede eliminar el archivo aunque el directorio tenga escritura para todos.",
          "a": true,
          "explain": "El StickyBit hace que solo el propietario del archivo o root puedan eliminarlo, aun con escritura para todos en el directorio."
        }
      ],
      "mc": [
        {
          "id": "mc2-9-1",
          "q": "¿Qué bit especial hace que un ejecutable corra con los permisos del propietario del archivo?",
          "options": [
            "SETgid",
            "StickyBit",
            "SETuid",
            "SETroot"
          ],
          "correctIndex": 2,
          "explain": "SETuid permite que el ejecutable corra con los permisos del propietario del archivo."
        },
        {
          "id": "mc2-9-2",
          "q": "En formato octal, ¿qué comando asigna el setuid?",
          "options": [
            "chmod 4755 archivo",
            "chmod 2755 archivo",
            "chmod 1755 directorio",
            "chmod 7755 archivo"
          ],
          "correctIndex": 0,
          "explain": "setuid se asigna en octal con chmod 4755 archivo (el 4 delante del permiso)."
        },
        {
          "id": "mc2-9-3",
          "q": "En formato simbólico, ¿cómo se asigna el setgid a un archivo?",
          "options": [
            "chmod u+s archivo",
            "chmod +t archivo",
            "chmod g+s archivo",
            "chmod g+t archivo"
          ],
          "correctIndex": 2,
          "explain": "setgid se asigna en simbólico con chmod g+s archivo; su valor referencial es una \"s\" para grupo."
        },
        {
          "id": "mc2-9-4",
          "q": "¿Qué efecto tiene SETgid sobre un directorio?",
          "options": [
            "Que solo el propietario o root puedan borrar su contenido",
            "Que los archivos creados dentro hereden el grupo del directorio",
            "Que el directorio se ejecute con los permisos del propietario",
            "Que cualquier usuario pueda cambiar el grupo del directorio"
          ],
          "correctIndex": 1,
          "explain": "En directorios, SETgid hace que todos los archivos creados adentro hereden el grupo del directorio."
        }
      ],
      "ms": [
        {
          "id": "ms2-9-1",
          "q": "¿Cuáles de estos comandos en formato octal aparecen en la tabla del apunte?",
          "options": [
            "chmod 4755 archivo",
            "chmod 2755 archivo",
            "chmod 1755 directorio",
            "chmod 3755 archivo",
            "chmod 5755 directorio"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "La tabla lista 4755 (setuid), 2755 (setgid) y 1755 (stickybit). Las otras dos no figuran."
        },
        {
          "id": "ms2-9-2",
          "q": "¿Cuáles afirmaciones sobre los valores referenciales simbólicos son correctas?",
          "options": [
            "SETuid usa una \"s\" para usuario",
            "SETgid usa una \"s\" para grupo",
            "StickyBit usa una \"t\"",
            "SETuid usa una \"t\" para usuario",
            "SETgid usa una \"t\" para grupo"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "SETuid → \"s\" (usuario), SETgid → \"s\" (grupo), StickyBit → \"t\". Las otras dos son incorrectas."
        },
        {
          "id": "ms2-9-3",
          "q": "¿Cuáles de las siguientes afirmaciones sobre SETuid son correctas según el apunte?",
          "options": [
            "Se ejecuta con los permisos del propietario del archivo",
            "En octal se agrega un 4 delante del permiso",
            "En simbólico se usa chmod u+s archivo",
            "Hace que los archivos hereden el grupo del directorio",
            "Impide que el propietario elimine el archivo"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "SETuid corre con permisos del propietario, octal 4 y simbólico chmod u+s. Heredar grupo es SETgid y la última es incorrecta."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-9-1",
        "front": "¿Cuántos bits de permisos especiales hay en Linux y cuáles son?",
        "back": "3 bits: SETuid, SETgid y StickyBit, para archivos ejecutables o directorios."
      },
      {
        "id": "fc2-9-2",
        "front": "¿Qué dígito octal corresponde a cada bit especial?",
        "back": "SETuid = 4, SETgid = 2, StickyBit = 1, agregados delante del permiso."
      },
      {
        "id": "fc2-9-3",
        "front": "¿Qué hace SETgid en un archivo ejecutable?",
        "back": "Hace que el ejecutable corra con los permisos del grupo propietario del archivo."
      },
      {
        "id": "fc2-9-4",
        "front": "¿Qué hace SETgid en un directorio?",
        "back": "Todos los archivos creados dentro heredan el grupo del directorio."
      },
      {
        "id": "fc2-9-5",
        "front": "¿Para qué sirve el StickyBit?",
        "back": "Solo el propietario del archivo o root pueden eliminarlo, aunque el directorio tenga escritura para todos."
      },
      {
        "id": "fc2-9-6",
        "front": "Comandos del setuid (octal y simbólico)",
        "back": "Octal: chmod 4755 archivo. Simbólico: chmod u+s archivo (valor referencial \"s\" para usuario)."
      },
      {
        "id": "fc2-9-7",
        "front": "Comandos del stickybit (octal y simbólico)",
        "back": "Octal: chmod 1755 directorio. Simbólico: chmod +t directorio (valor referencial \"t\")."
      }
    ]
  },
  "10": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-10-1",
          "q": "Umask genera los permisos finales de un archivo nuevo restando permisos al valor base, no agregándolos.",
          "a": true,
          "explain": "Umask funciona como filtro: parte del valor predeterminado y le resta permisos; nunca suma."
        },
        {
          "id": "tf2-10-2",
          "q": "Para archivos nuevos el valor base es 777 y para directorios nuevos es 666.",
          "a": false,
          "explain": "Es al revés: 666 (rw-rw-rw-) para archivos y 777 (rwxrwxrwx) para directorios."
        },
        {
          "id": "tf2-10-3",
          "q": "Con umask 0022 un archivo recién creado queda con permisos -rw-r--r--.",
          "a": true,
          "explain": "0666 - 0022 = 0644, que corresponde a -rw-r--r--."
        },
        {
          "id": "tf2-10-4",
          "q": "Configurar umask en ~/.bashrc lo hace permanente para todos los usuarios del sistema.",
          "a": false,
          "explain": "~/.bashrc es por usuario individual. Para hacerlo global se usa /etc/profile o /etc/login.defs."
        },
        {
          "id": "tf2-10-5",
          "q": "En la operación NOT Binary cada bit se invierte: los 1 pasan a 0 y los 0 pasan a 1.",
          "a": true,
          "explain": "Esa es exactamente la definición de NOT Binary: niega cada bit del número."
        }
      ],
      "mc": [
        {
          "id": "mc2-10-1",
          "q": "Según la tabla de correspondencia, ¿qué permiso representa el binario 101?",
          "options": [
            "Lectura + Escritura",
            "Escritura + Ejecución",
            "Lectura + Ejecución",
            "Lectura + Escritura + Ejecución"
          ],
          "correctIndex": 2,
          "explain": "101 es el decimal 5, que corresponde a Lectura + Ejecución."
        },
        {
          "id": "mc2-10-2",
          "q": "En el cálculo binario de umask, luego de negar los permisos deseados, ¿qué operación se realiza contra el valor predeterminado?",
          "options": [
            "Una suma bit a bit",
            "Un AND bit a bit",
            "Un OR bit a bit",
            "Otra negación NOT Binary"
          ],
          "correctIndex": 1,
          "explain": "Se hace un AND bit a bit entre el valor predeterminado y la negación de los permisos finales."
        },
        {
          "id": "mc2-10-3",
          "q": "Si ejecutás <code>umask 0022</code> directamente en la terminal, ¿hasta cuándo dura ese valor?",
          "options": [
            "De forma permanente en todo el sistema",
            "Solo durante la sesión activa en ese momento",
            "Hasta que se reinicie el servicio de red",
            "Para todos los usuarios hasta el próximo login"
          ],
          "correctIndex": 1,
          "explain": "Usado directo en la terminal el valor es temporal y aplica únicamente a la sesión activa."
        },
        {
          "id": "mc2-10-4",
          "q": "La representación binaria de 644 según el apunte es 110 100 100. ¿Cuál es su negación (NOT Binary)?",
          "options": [
            "001 011 011",
            "110 100 100",
            "000 010 010",
            "011 001 001"
          ],
          "correctIndex": 0,
          "explain": "Negando cada bit de 110 100 100 se obtiene 001 011 011."
        }
      ],
      "ms": [
        {
          "id": "ms2-10-1",
          "q": "¿Cuáles de estas correspondencias decimal → binario son correctas según la tabla del apunte?",
          "options": [
            "0 = 000",
            "1 = 001",
            "5 = 110",
            "3 = 011",
            "4 = 010"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "0=000, 1=001 y 3=011 son correctos. En cambio 5=101 (no 110) y 4=100 (no 010)."
        },
        {
          "id": "ms2-10-2",
          "q": "¿Cuáles de las siguientes afirmaciones describen correctamente el cálculo mediante operación binaria?",
          "options": [
            "El valor predeterminado 666 se convierte a 110 110 110",
            "Se aplica NOT Binary sobre los permisos que se quieren obtener",
            "Se hace un AND bit a bit entre el valor base y la negación",
            "El resultado 000 010 010 equivale al octal 022",
            "El resultado se obtiene sumando ambos números en decimal"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "666=110 110 110, se niega el permiso deseado, se hace AND bit a bit y el resultado 000 010 010 es 022 en octal. No hay suma decimal."
        },
        {
          "id": "ms2-10-3",
          "q": "¿Cuáles de estos archivos sirven para configurar umask de forma permanente por usuario individual?",
          "options": [
            "~/.bashrc",
            "~/.profile",
            "/etc/profile",
            "/etc/login.defs",
            "/etc/fstab"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "Por usuario individual se usan ~/.bashrc o ~/.profile. /etc/profile y /etc/login.defs son globales y /etc/fstab no tiene relación con umask."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-10-1",
        "front": "¿Umask suma o resta permisos?",
        "back": "Resta: actúa como filtro que quita permisos del valor base para obtener los permisos finales de los archivos y directorios nuevos."
      },
      {
        "id": "fc2-10-2",
        "front": "¿Qué umask da como resultado archivos 644?",
        "back": "umask 0022, porque 0666 - 0022 = 0644 (-rw-r--r--)."
      },
      {
        "id": "fc2-10-3",
        "front": "Binario 110 → ¿qué permiso y qué decimal?",
        "back": "Decimal 6, permiso Lectura + Escritura (rw)."
      },
      {
        "id": "fc2-10-4",
        "front": "Pasos del cálculo binario de umask",
        "back": "1) Pasar el valor base a binario (666 = 110 110 110). 2) Negar el permiso deseado con NOT Binary. 3) AND bit a bit entre base y la negación."
      },
      {
        "id": "fc2-10-5",
        "front": "¿Qué octal da el binario 000 010 010?",
        "back": "022, el valor que se usa con el comando umask."
      },
      {
        "id": "fc2-10-6",
        "front": "Regla del AND bit a bit",
        "back": "El resultado de cada bit es 1 solo si ambos bits comparados son 1; en cualquier otro caso es 0."
      },
      {
        "id": "fc2-10-7",
        "front": "Umask global vs. por usuario",
        "back": "Por usuario: ~/.bashrc o ~/.profile. Global (todos los usuarios): /etc/profile o /etc/login.defs."
      }
    ]
  },
  "11": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-11-1",
          "q": "La directiva <code>Defaults</code> del sudoers afecta el comportamiento de un único usuario a la vez.",
          "a": false,
          "explain": "Las configuraciones de <code>Defaults</code> definen el comportamiento predeterminado y afectan a todos los usuarios que utilicen SUDO."
        },
        {
          "id": "tf2-11-2",
          "q": "La opción <code>secure_path</code> define una ruta de búsqueda (PATH) segura para los comandos que se ejecutan como superusuario.",
          "a": true,
          "explain": "Correcto: <code>secure_path</code> establece un PATH seguro para los comandos ejecutados como superusuario."
        },
        {
          "id": "tf2-11-3",
          "q": "Configurar el sudoers a través del directorio <code>sudoers.d</code> es el método obligatorio dentro de esta cursada.",
          "a": false,
          "explain": "El apunte aclara que el uso de <code>sudoers.d</code> permite mayor modularidad, pero dicha práctica no pertenece a esta cursada."
        },
        {
          "id": "tf2-11-4",
          "q": "El alias <code>cmnd_alias</code> se utiliza para agrupar comandos.",
          "a": true,
          "explain": "Correcto: <code>cmnd_alias</code> agrupa comandos, por ejemplo <code>cmnd_alias REBOOT_CMDS = /sbin/reboot, /sbin/shutdown</code>."
        },
        {
          "id": "tf2-11-5",
          "q": "Una de las ventajas de SUDO es que minimiza la necesidad de acceder directamente a la cuenta root.",
          "a": true,
          "explain": "SUDO reduce la necesidad de que los usuarios accedan directamente a root, minimizando el riesgo de errores o accesos indebidos."
        }
      ],
      "mc": [
        {
          "id": "mc2-11-1",
          "q": "En la regla <code>alumno ALL = (ALL:ALL) ALL</code>, ¿qué especifica el ALL final (4to)?",
          "options": [
            "Las máquinas donde la regla es válida",
            "El grupo bajo el cual se ejecuta el comando",
            "Los comandos que el usuario puede ejecutar",
            "El usuario como el cual se corre el comando"
          ],
          "correctIndex": 2,
          "explain": "El 4to <code>ALL</code> especifica qué comandos puede ejecutar el usuario; <code>ALL</code> significa cualquier comando."
        },
        {
          "id": "mc2-11-2",
          "q": "¿Qué determina la opción <code>timestamp_timeout</code> en la sección Defaults?",
          "options": [
            "El tiempo en minutos que se recuerda la contraseña antes de volver a pedirla",
            "El tiempo máximo que puede durar la ejecución de un comando",
            "El intervalo entre envíos de correo al administrador",
            "El tiempo de bloqueo tras varios intentos fallidos"
          ],
          "correctIndex": 0,
          "explain": "<code>timestamp_timeout</code> determina los minutos que se recuerda la contraseña antes de requerirla nuevamente; el default es de 5 min."
        },
        {
          "id": "mc2-11-3",
          "q": "¿Cómo deben agregarse los privilegios cuando se configuran por grupo en lugar de por usuario?",
          "options": [
            "Anteponiendo el símbolo <code>@</code> al nombre del grupo",
            "Anteponiendo el símbolo <code>%</code> al nombre del grupo",
            "Encerrando el grupo entre paréntesis",
            "Agregando la palabra <code>GROUP</code> antes del nombre"
          ],
          "correctIndex": 1,
          "explain": "Los privilegios por grupo se agregan con el símbolo <code>%</code> delante del grupo, con la misma configuración que para usuarios."
        },
        {
          "id": "mc2-11-4",
          "q": "¿Cuál es la ventaja principal de usar <code>visudo</code> para editar el archivo sudoers?",
          "options": [
            "Verifica la sintaxis antes de guardar los cambios",
            "Cifra el archivo para protegerlo de lectura",
            "Crea una copia de respaldo automática en sudoers.d",
            "Reinicia el servicio SUDO tras cada cambio"
          ],
          "correctIndex": 0,
          "explain": "Se recomienda <code>visudo</code> porque verifica la sintaxis antes de guardar, evitando dejar la configuración rota."
        }
      ],
      "ms": [
        {
          "id": "ms2-11-1",
          "q": "¿Cuáles de las siguientes son opciones de la sección <code>Defaults</code> del sudoers?",
          "options": [
            "env_reset",
            "mail_badpass",
            "secure_path",
            "host_alias",
            "timestamp_timeout"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "<code>env_reset</code>, <code>mail_badpass</code>, <code>secure_path</code> y <code>timestamp_timeout</code> son opciones de Defaults. <code>host_alias</code> es un tipo de alias, no una opción de Defaults."
        },
        {
          "id": "ms2-11-2",
          "q": "Según el apunte, ¿qué afirmaciones sobre el archivo <code>/etc/sudoers</code> son correctas?",
          "options": [
            "Define qué usuarios y grupos pueden usar SUDO",
            "Define qué comandos pueden ejecutar con SUDO",
            "Se recomienda editarlo con visudo",
            "Reemplaza por completo al archivo /etc/passwd",
            "Es el archivo principal de configuración de SUDO"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "El sudoers define usuarios/grupos y comandos permitidos, se edita con visudo y es el archivo principal de configuración. No reemplaza a /etc/passwd."
        },
        {
          "id": "ms2-11-3",
          "q": "¿Cuáles de los siguientes son ejemplos de alias válidos mencionados en el apunte?",
          "options": [
            "<code>host_Alias SERVIDORES = server1, server2</code>",
            "<code>user_alias ADMIN = alumno, jperez</code>",
            "<code>cmnd_alias REBOOT_CMDS = /sbin/reboot, /sbin/shutdown</code>",
            "<code>group_alias STAFF = docentes, tutores</code>",
            "<code>path_alias BIN = /usr/bin, /sbin</code>"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "El apunte ejemplifica host_alias, user_alias y cmnd_alias. group_alias y path_alias no se mencionan."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-11-1",
        "front": "¿Sin necesidad de qué permite SUDO ejecutar comandos con privilegios?",
        "back": "Sin tener que iniciar sesión ni cambiar directamente al usuario root, sumando una capa de seguridad y control."
      },
      {
        "id": "fc2-11-2",
        "front": "¿Qué riesgo hay si guardás el sudoers con sintaxis rota?",
        "back": "Podés quedarte sin acceso administrativo al sistema. Por eso se edita con visudo, que valida la sintaxis antes de guardar."
      },
      {
        "id": "fc2-11-3",
        "front": "mail_badpass",
        "back": "Opción de Defaults que envía un correo al administrador si un usuario ingresa una contraseña incorrecta al ejecutar un comando con SUDO."
      },
      {
        "id": "fc2-11-4",
        "front": "secure_path",
        "back": "Opción de Defaults que define una ruta de búsqueda (PATH) segura para los comandos ejecutados como superusuario."
      },
      {
        "id": "fc2-11-5",
        "front": "¿Para qué sirven los alias en SUDO?",
        "back": "Para simplificar y hacer más legible la configuración, agrupando hosts (host_alias), usuarios (user_alias) y comandos (cmnd_alias)."
      },
      {
        "id": "fc2-11-6",
        "front": "En \"alumno ALL = (ALL:ALL) ALL\", ¿qué es el 2do ALL?",
        "back": "El primer ALL de (ALL:ALL): indica que el usuario puede ejecutar el comando como cualquier usuario. El segundo, tras los dos puntos, es cualquier grupo."
      },
      {
        "id": "fc2-11-7",
        "front": "¿Qué es el directorio sudoers.d?",
        "back": "Otra forma de configurar sudoers creando archivos separados para mayor organización y modularidad, aunque esa práctica no pertenece a la cursada."
      }
    ]
  },
  "12": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-12-1",
          "q": "Para tareas administrativas puntuales, el apunte recomienda operar directamente como root en lugar de usar <code>sudo</code>.",
          "a": false,
          "explain": "Falso: es al revés. Se desaconseja el uso directo de root en tareas diarias y se aconseja usar <code>sudo</code> para las tareas administrativas."
        },
        {
          "id": "tf2-12-2",
          "q": "En <code>/etc/group</code> el último campo puede listar varios usuarios miembros del grupo separados por comas.",
          "a": true,
          "explain": "A diferencia del resto, group tiene 3 campos y el último se separa por comas para listar los miembros (ej. <code>Tecnologia:x:1002:alumno,jperez</code>)."
        },
        {
          "id": "tf2-12-3",
          "q": "Los usuarios especiales o no-login tienen exactamente los mismos privilegios que root.",
          "a": false,
          "explain": "Falso: los usuarios especiales no tienen privilegios de root, aunque según la cuenta asumen distintos privilegios. Su propósito es ejecutar servicios."
        },
        {
          "id": "tf2-12-4",
          "q": "Tras editar GRUB para recuperar la clave de root, el sistema se reinicia con <code>exec /sbin/init</code> en vez de un arranque normal.",
          "a": true,
          "explain": "El último paso indica reiniciar la máquina con <code>exec /sbin/init</code>, a diferencia de un arranque normal."
        },
        {
          "id": "tf2-12-5",
          "q": "En <code>/etc/passwd</code> el segundo campo contiene el hash de la contraseña encriptada del usuario.",
          "a": false,
          "explain": "Falso: en passwd el segundo campo es una <code>x</code> que indica que la contraseña está almacenada y encriptada en <code>shadow</code>; el hash real vive en shadow."
        }
      ],
      "mc": [
        {
          "id": "mc2-12-1",
          "q": "¿Cuál es el propósito de los usuarios especiales o no-login?",
          "options": [
            "Ejecutar servicios o tareas automatizadas",
            "Administrar los permisos de root",
            "Almacenar archivos personales en /home",
            "Iniciar sesión interactiva de personas"
          ],
          "correctIndex": 0,
          "explain": "Los usuarios especiales no inician sesión; su propósito es ejecutar servicios o tareas automatizadas como apache, mysql, sshd, etc."
        },
        {
          "id": "mc2-12-2",
          "q": "¿Qué flag de <code>useradd</code> genera automáticamente el directorio home del usuario?",
          "options": [
            "-c",
            "-r",
            "-u",
            "-m"
          ],
          "correctIndex": 3,
          "explain": "La opción <code>-m</code> genera el directorio home del usuario automáticamente. <code>-c</code> añade comentario, <code>-r</code> crea usuarios especiales y <code>-u</code> define el UID."
        },
        {
          "id": "mc2-12-3",
          "q": "¿En cuántos campos separados por dos puntos se divide cada línea de <code>/etc/shadow</code>?",
          "options": [
            "Tres campos",
            "Cinco campos",
            "Nueve campos",
            "Siete campos"
          ],
          "correctIndex": 2,
          "explain": "shadow divide la info en nueve campos delimitados por dos puntos; passwd usa siete y group usa tres."
        },
        {
          "id": "mc2-12-4",
          "q": "Durante la recuperación de la clave de root, ¿qué provoca el parámetro <code>init=/bin/bash</code>?",
          "options": [
            "Monta el raíz en modo solo lectura",
            "Usa bash como proceso inicial con acceso de root",
            "Protege GRUB con una contraseña",
            "Inicia el proceso normal del sistema"
          ],
          "correctIndex": 1,
          "explain": "Indica que, en lugar del proceso normal, se use bash como proceso inicial, otorgando acceso directo al shell con privilegios de root y el raíz montado en lectura-escritura."
        }
      ],
      "ms": [
        {
          "id": "ms2-12-1",
          "q": "¿Cuáles de estas afirmaciones sobre el usuario root son correctas según el apunte?",
          "options": [
            "Su UID es 0",
            "Su home está en /root, bajo la raíz",
            "Tiene acceso ilimitado al sistema",
            "Su UID suele ser superior a 1000",
            "Es una cuenta de no-login sin privilegios"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "root tiene UID 0, home en /root y acceso ilimitado. El rango superior a 1000 es de usuarios normales y no-login sin privilegios describe a los especiales."
        },
        {
          "id": "ms2-12-2",
          "q": "¿Cuáles de estos comandos operan sobre grupos del sistema?",
          "options": [
            "groupadd",
            "groupdel",
            "groupmod",
            "passwd",
            "userdel"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "groupadd crea, groupdel elimina y groupmod modifica grupos. passwd cambia contraseñas y userdel elimina usuarios."
        },
        {
          "id": "ms2-12-3",
          "q": "¿Cuáles de los siguientes campos forman parte de <code>/etc/passwd</code>?",
          "options": [
            "Login de usuario",
            "Shell predeterminado",
            "Días de aviso de expiración",
            "Home del usuario",
            "Días de inactividad"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "passwd contiene login, x, UID, GID, descripción, home y shell. Los días de aviso y de inactividad pertenecen a shadow."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-12-1",
        "front": "Rango de UID de usuarios especiales",
        "back": "Los UID/GID de los usuarios especiales (no-login) suelen estar entre el número reservado 1 y 100, definidos en <code>/etc/login.defs</code>."
      },
      {
        "id": "fc2-12-2",
        "front": "¿Multiusuario en Linux?",
        "back": "El sistema operativo puede proveer servicio y procesamiento a múltiples usuarios en simultáneo. Por eso administrar bien las cuentas es clave para la seguridad."
      },
      {
        "id": "fc2-12-3",
        "front": "Segundo campo de /etc/passwd",
        "back": "Una <code>x</code> que indica que la contraseña está almacenada y encriptada en el archivo <code>shadow</code>."
      },
      {
        "id": "fc2-12-4",
        "front": "usermod -aG",
        "back": "Agrega al usuario a grupos adicionales sin quitarlo de los que ya tenía. Ej: <code>usermod -aG Tecnologia jperez</code>. Con <code>-L</code>/<code>-U</code> bloquea/desbloquea la cuenta."
      },
      {
        "id": "fc2-12-5",
        "front": "Hash con * en /etc/shadow",
        "back": "En el segundo campo de shadow, un <code>*</code> en lugar del hash alfanumérico indica una cuenta de no-login."
      },
      {
        "id": "fc2-12-6",
        "front": "Pasos clave de reset root en GRUB",
        "back": "Presionar E, borrar <code>ro quiet</code> y agregar <code>rw init=/bin/bash</code>, F10, ejecutar <code>passwd</code>, y reiniciar con <code>exec /sbin/init</code>."
      },
      {
        "id": "fc2-12-7",
        "front": "¿Por qué proteger GRUB con contraseña?",
        "back": "Porque cualquiera con acceso físico que pueda editar GRUB puede resetear la clave de root. En entornos serios se protege el propio GRUB con contraseña."
      }
    ]
  },
  "13": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-13-1",
          "q": "Si redirigís con <code>&gt;</code> hacia un archivo que ya existe, su contenido anterior se conserva y la nueva salida queda arriba.",
          "a": false,
          "explain": "Falso. El <code>&gt;</code> elimina el archivo existente y lo vuelve a generar con el nuevo contenido; no conserva nada."
        },
        {
          "id": "tf2-13-2",
          "q": "El comando <code>cat &lt; archivo_ls</code> indica que <code>cat</code> lea desde <code>archivo_ls</code> en lugar del teclado.",
          "a": true,
          "explain": "Verdadero. El <code>&lt;</code> (menor) hace que el comando lea la información a procesar desde un archivo en vez del stdin."
        },
        {
          "id": "tf2-13-3",
          "q": "El comando <code>find</code> puede ejecutar acciones sobre los archivos encontrados, como copiarlos o borrarlos.",
          "a": true,
          "explain": "Verdadero. Con <code>-exec</code> ejecuta un comando sobre cada archivo (usando <code>{}</code>) y con <code>-delete</code> los elimina."
        },
        {
          "id": "tf2-13-4",
          "q": "El comando <code>locate</code> viene instalado por defecto en el sistema y no necesita configuración previa.",
          "a": false,
          "explain": "Falso. mlocate generalmente no está instalado por defecto: hay que instalarlo y actualizar su base con <code>updatedb</code>."
        },
        {
          "id": "tf2-13-5",
          "q": "La opción <code>-iname</code> de find busca por nombre ignorando mayúsculas y minúsculas.",
          "a": true,
          "explain": "Verdadero. A diferencia de <code>-name</code>, <code>-iname</code> no distingue entre mayúsculas y minúsculas."
        }
      ],
      "mc": [
        {
          "id": "mc2-13-1",
          "q": "¿Qué símbolo añade la salida al final de un archivo existente sin borrar su contenido?",
          "options": [
            "<code>&lt;</code>",
            "<code>&gt;&gt;</code>",
            "<code>&gt;</code>",
            "<code>|</code>"
          ],
          "correctIndex": 1,
          "explain": "El <code>&gt;&gt;</code> (doble mayor) añade el contenido a continuación de la última línea, o crea el archivo si no existe."
        },
        {
          "id": "mc2-13-2",
          "q": "¿Cuál es la sintaxis general del comando find?",
          "options": [
            "find [opciones] [ruta] [acción]",
            "find [ruta] [opciones] [acción]",
            "find [acción] [ruta] [opciones]",
            "find [ruta] [acción] [opciones]"
          ],
          "correctIndex": 1,
          "explain": "La estructura es <code>find [ruta] [opciones] [acción]</code>: dónde buscar, cómo buscar y qué hacer con lo encontrado."
        },
        {
          "id": "mc2-13-3",
          "q": "¿Qué representa el número 1 en la redirección <code>ls /dir 1&gt; salida.log</code>?",
          "options": [
            "El stream del stderr",
            "El stream del stdin",
            "El stream del stdout",
            "El número de líneas a redirigir"
          ],
          "correctIndex": 2,
          "explain": "El stdout se identifica con el número 1; al usar <code>&gt;</code> solo, ese 1 se asume implícitamente."
        },
        {
          "id": "mc2-13-4",
          "q": "¿Qué hace <code>cat archivo_ls | head -n 2</code>?",
          "options": [
            "Muestra las 2 primeras líneas del archivo archivo_ls",
            "Muestra las 2 últimas líneas del archivo archivo_ls",
            "Copia las 2 primeras líneas a otro archivo",
            "Borra las 2 primeras líneas del archivo archivo_ls"
          ],
          "correctIndex": 0,
          "explain": "El pipe manda la salida de <code>cat</code> a <code>head -n 2</code>, que muestra las 2 primeras líneas del archivo."
        }
      ],
      "ms": [
        {
          "id": "ms2-13-1",
          "q": "¿Cuáles de estas formas envían tanto el stdout como el stderr a un mismo archivo según el apunte?",
          "options": [
            "<code>ls /dir &amp;&gt; salida.txt</code>",
            "<code>ls /dir &gt; salida.txt 2&gt;&amp;1</code>",
            "<code>ls /dir &gt;&gt; salida.txt 2&gt; error.log</code>",
            "<code>ls /dir &gt;&gt; salida.txt 2&gt; /dev/null</code>",
            "<code>ls /dir 2&gt; salida.txt</code>"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "La forma <code>&amp;&gt;</code> (bash 4.0+) y la forma <code>2&gt;&amp;1</code> mandan ambos flujos al mismo archivo. Las demás separan los flujos o descartan/redirigen solo uno."
        },
        {
          "id": "ms2-13-2",
          "q": "¿Cuáles de estas afirmaciones sobre los pipes y filtros son correctas según el apunte?",
          "options": [
            "El pipe se representa con el símbolo <code>|</code>",
            "La salida de un comando se convierte en la entrada del siguiente",
            "Se pueden encadenar varios comandos según sea necesario",
            "Son útiles junto con filtros como <code>grep</code> para analizar logs",
            "El pipe descarta automáticamente los errores del comando"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "El pipe <code>|</code> encadena comandos pasando stdout a stdin y es muy útil con filtros como <code>grep</code> o <code>head</code>. No descarta errores: eso es tarea de <code>/dev/null</code>."
        },
        {
          "id": "ms2-13-3",
          "q": "¿Qué ventajas o características corresponden a find (y no a locate) según la comparación del apunte?",
          "options": [
            "Permite usar criterios avanzados como tamaño, fecha o tipo",
            "Puede ejecutar acciones sobre los archivos encontrados",
            "Realiza una búsqueda exhaustiva en tiempo real",
            "Es muy rápido porque usa una base de datos indexada",
            "Depende de actualizar una base con updatedb"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "find hace búsqueda exhaustiva en tiempo real, con criterios avanzados y acciones. La rapidez por base indexada y la dependencia de <code>updatedb</code> son de locate."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-13-1",
        "front": "¿Qué pasa con <code>&gt;</code> si el archivo destino ya existe?",
        "back": "Se elimina y se vuelve a generar con el nuevo contenido: pisa lo anterior. Para conservar y añadir al final se usa <code>&gt;&gt;</code>."
      },
      {
        "id": "fc2-13-2",
        "front": "¿Cómo redirigís solo los errores a un archivo?",
        "back": "Con <code>2&gt;</code>, ya que el stderr se identifica con el número 2. Ejemplo: <code>ls /directorio_nuevo 2&gt; error.log</code>."
      },
      {
        "id": "fc2-13-3",
        "front": "¿Para qué sirve enviar la salida a <code>/dev/null</code>?",
        "back": "Para descartarla por completo: /dev/null es un agujero negro donde todo lo enviado se pierde. Útil para descartar errores y quedarse solo con lo útil."
      },
      {
        "id": "fc2-13-4",
        "front": "¿Qué diferencia hay entre <code>-name</code> e <code>-iname</code> en find?",
        "back": "<code>-name</code> busca por nombre respetando mayúsculas y minúsculas; <code>-iname</code> busca por nombre ignorándolas."
      },
      {
        "id": "fc2-13-5",
        "front": "¿Qué hacen <code>-type f</code> y <code>-type d</code> en find?",
        "back": "<code>-type f</code> busca archivos (files) y <code>-type d</code> busca directorios (directory)."
      },
      {
        "id": "fc2-13-6",
        "front": "Ejemplo de find con acción -exec",
        "back": "<code>find /home/alumno -name \"*.txt\" -exec cp {} /backup/ \\;</code> copia los .txt al directorio backup. El <code>{}</code> es el marcador del nombre de cada archivo."
      },
      {
        "id": "fc2-13-7",
        "front": "¿Cuál es la principal desventaja de locate frente a find?",
        "back": "Depende de una base de datos que debe actualizarse (con <code>updatedb</code>) para estar al día; si no, los resultados quedan desactualizados."
      }
    ]
  },
  "14": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-14-1",
          "q": "El stdin puede recibir su flujo de información desde otro comando o desde un archivo, no sólo desde el teclado.",
          "a": true,
          "explain": "Por default el stdin recibe desde el teclado, pero también podría hacerlo desde otro comando o desde un archivo."
        },
        {
          "id": "tf2-14-2",
          "q": "La opción <code>-r</code> de <code>sort</code> sirve para ordenar numéricamente las líneas.",
          "a": false,
          "explain": "Con <code>-r</code> sort ordena en reversa. La que ordena numéricamente es <code>-n</code>."
        },
        {
          "id": "tf2-14-3",
          "q": "El stdout está identificado con el número 1 y por default envía su salida al monitor.",
          "a": true,
          "explain": "stdout (Standard Output) usa el número 1 y su flujo de salida por default es el monitor."
        },
        {
          "id": "tf2-14-4",
          "q": "El comando <code>less</code> sólo permite avanzar hacia adelante dentro de un archivo.",
          "a": false,
          "explain": "El que sólo avanza hacia adelante es <code>more</code>. <code>less</code> permite desplazarse tanto hacia adelante como hacia atrás."
        },
        {
          "id": "tf2-14-5",
          "q": "La opción <code>-c</code> de <code>grep</code> cuenta las líneas que coinciden con el patrón.",
          "a": true,
          "explain": "Efectivamente, <code>-c</code> cuenta las líneas que coinciden con el patrón buscado."
        }
      ],
      "mc": [
        {
          "id": "mc2-14-1",
          "q": "¿Qué filtro extrae partes específicas de cada línea?",
          "options": [
            "wc",
            "cut",
            "sort",
            "tail"
          ],
          "correctIndex": 1,
          "explain": "<code>cut</code> extrae partes específicas de cada línea. <code>wc</code> cuenta, <code>sort</code> ordena y <code>tail</code> muestra las últimas líneas."
        },
        {
          "id": "mc2-14-2",
          "q": "¿Con qué número está identificado el stderr (Standard Error)?",
          "options": [
            "0",
            "1",
            "2",
            "3"
          ],
          "correctIndex": 2,
          "explain": "stderr está identificado con el número 2 y se mantiene separado del stdout."
        },
        {
          "id": "mc2-14-3",
          "q": "¿Qué opción de <code>grep</code> hace que la búsqueda sea recursiva en directorios?",
          "options": [
            "-r",
            "-i",
            "-n",
            "-c"
          ],
          "correctIndex": 0,
          "explain": "La opción <code>-r</code> busca recursivamente en directorios. <code>-i</code> ignora mayúsculas/minúsculas, <code>-n</code> muestra el número de línea y <code>-c</code> cuenta coincidencias."
        },
        {
          "id": "mc2-14-4",
          "q": "¿Qué opción de <code>wc</code> se usa para contar palabras?",
          "options": [
            "-l",
            "-m",
            "-w",
            "-n"
          ],
          "correctIndex": 2,
          "explain": "Con <code>-w</code> se cuentan palabras. <code>-l</code> cuenta líneas y <code>-m</code> cuenta caracteres."
        }
      ],
      "ms": [
        {
          "id": "ms2-14-1",
          "q": "¿Cuáles de estas opciones de <code>grep</code> están descriptas correctamente?",
          "options": [
            "<code>-i</code> no distingue entre mayúsculas y minúsculas",
            "<code>-n</code> muestra el número de la línea donde aparece el patrón",
            "<code>-E</code> busca múltiples patrones",
            "<code>-c</code> ordena las coincidencias alfabéticamente",
            "<code>-r</code> busca recursivamente en directorios"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "<code>-c</code> cuenta las líneas que coinciden, no las ordena. El resto es correcto: <code>-i</code> ignora capitalización, <code>-n</code> muestra número de línea, <code>-E</code> múltiples patrones, <code>-r</code> recursivo."
        },
        {
          "id": "ms2-14-2",
          "q": "¿Cuáles de estas afirmaciones sobre los filtros son correctas?",
          "options": [
            "<code>tail -f</code> sigue mostrando nuevas líneas, útil para logs en tiempo real",
            "<code>tail -n xx</code> define cuántas líneas mostrar",
            "<code>more</code> permite desplazarse hacia adelante y hacia atrás",
            "<code>sort -n</code> ordena numéricamente",
            "<code>wc -m</code> cuenta caracteres"
          ],
          "correctIndexes": [
            0,
            1,
            3,
            4
          ],
          "explain": "<code>more</code> sólo avanza hacia adelante; el que va en ambos sentidos es <code>less</code>. El resto es correcto."
        },
        {
          "id": "ms2-14-3",
          "q": "¿Cuáles de estas afirmaciones sobre los streams de Linux son verdaderas?",
          "options": [
            "Linux tiene 3 streams predefinidos",
            "stdout está identificado con el número 0",
            "stderr se mantiene separado del stdout para que los errores no se mezclen con la salida normal",
            "La separación de streams permite automatizar procesos en scripts sin intervención manual",
            "stdin encripta la información que recibe desde el teclado"
          ],
          "correctIndexes": [
            0,
            2,
            3
          ],
          "explain": "stdout está identificado con el 1 (no el 0), y stdin no encripta nada. El resto es correcto: 3 streams, stderr separado y la separación permite automatizar procesos."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-14-1",
        "front": "¿Cuántos streams predefinidos tiene Linux y para qué sirven?",
        "back": "Tres: stdin (entrada), stdout (salida normal) y stderr (errores). Los programas los usan para interactuar con el sistema y con otros programas."
      },
      {
        "id": "fc2-14-2",
        "front": "Número de cada stream",
        "back": "stdin = 0, stdout = 1, stderr = 2."
      },
      {
        "id": "fc2-14-3",
        "front": "¿Qué es un filtro en Linux?",
        "back": "Un comando que procesa el contenido de un archivo o del stdin y permite manipular la salida estándar (stdout) con diversas funciones."
      },
      {
        "id": "fc2-14-4",
        "front": "Opciones de sort",
        "back": "<code>-r</code> ordena en reversa; <code>-n</code> ordena numéricamente. Por default ordena alfabética o numéricamente las líneas."
      },
      {
        "id": "fc2-14-5",
        "front": "¿Para qué sirve cut?",
        "back": "Extrae partes específicas de cada línea de la entrada."
      },
      {
        "id": "fc2-14-6",
        "front": "Sintaxis de grep",
        "back": "<code>grep [opción] [patrón] [archivo]</code>. Busca en archivos o en el stdout palabras que coincidan con una expresión regular o patrón."
      },
      {
        "id": "fc2-14-7",
        "front": "¿Qué permite lograr separar los tres streams?",
        "back": "Redirigir stdout a un archivo u otro comando sin capturar errores, gestionar los errores por separado y automatizar procesos en scripts sin intervención manual."
      }
    ]
  },
  "15": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-15-1",
          "q": "El cuantificador <code>*</code> indica que el patrón se repite cero o más veces.",
          "a": true,
          "explain": "<code>*</code> significa cero o más veces; <code>+</code> es el que exige una o más."
        },
        {
          "id": "tf2-15-2",
          "q": "La expresión <code>/a{1,2}/</code> coincide con a, aa y también con aaa.",
          "a": false,
          "explain": "<code>/a{1,2}/</code> coincide con a y aa, pero NO con aaa, porque m fija el máximo en 2."
        },
        {
          "id": "tf2-15-3",
          "q": "Los paréntesis <code>()</code> permiten agrupar una expresión regular para trabajarla como subexpresión.",
          "a": true,
          "explain": "Los paréntesis agrupan; los corchetes <code>[]</code> definen un grupo de caracteres a encontrar."
        },
        {
          "id": "tf2-15-4",
          "q": "El circunflejo <code>^</code> siempre coincide con el inicio de la línea, incluso dentro de <code>[]</code>.",
          "a": false,
          "explain": "<code>^</code> coincide con el inicio de línea salvo que esté dentro de <code>[]</code>, donde actúa como negación."
        },
        {
          "id": "tf2-15-5",
          "q": "En el apunte, las expresiones regulares se prueban con el archivo <code>Gerencias</code> que contiene áreas de una empresa.",
          "a": true,
          "explain": "Se crea <code>Gerencias</code> con echo -e incluyendo Tecnologia, Finanzas, Contaduria, etc."
        }
      ],
      "mc": [
        {
          "id": "mc2-15-1",
          "q": "¿Qué cuantificador concuerda n veces y no más de m veces?",
          "options": [
            "<code>{n}</code>",
            "<code>{n,m}</code>",
            "<code>*</code>",
            "<code>+</code>"
          ],
          "correctIndex": 1,
          "explain": "<code>{n,m}</code> concuerda n veces y no más de m; <code>{n}</code> es exactamente n veces."
        },
        {
          "id": "mc2-15-2",
          "q": "Según el apunte, ¿qué coincide con el rango de “a” hasta “z” y cualquier número?",
          "options": [
            "<code>(a-z0-9)</code>",
            "<code>{a-z0-9}</code>",
            "<code>[a-z0-9]</code>",
            "<code>/a-z0-9/</code>"
          ],
          "correctIndex": 2,
          "explain": "Los corchetes <code>[a-z0-9]</code> definen el rango de a a z y cualquier dígito."
        },
        {
          "id": "mc2-15-3",
          "q": "En la alternación <code>/perra|o/</code>, ¿con qué coincide?",
          "options": [
            "solo con perra",
            "con perra o perro",
            "con perr seguido de a y o",
            "con perrao literal"
          ],
          "correctIndex": 1,
          "explain": "El pipe funciona como OR: <code>/perra|o/</code> coincide con perra o perro."
        },
        {
          "id": "mc2-15-4",
          "q": "¿Qué caracter especial coincide con el final de la línea?",
          "options": [
            "<code>.</code>",
            "<code>^</code>",
            "<code>$</code>",
            "<code>*</code>"
          ],
          "correctIndex": 2,
          "explain": "El signo pesos <code>$</code> coincide con el final de la línea; <code>^</code> con el inicio."
        }
      ],
      "ms": [
        {
          "id": "ms2-15-1",
          "q": "¿Cuáles de estas correspondencias de cuantificadores figuran en el apunte?",
          "options": [
            "<code>+</code>: una o más veces",
            "<code>?</code>: cero o una vez",
            "<code>{n}</code>: exactamente n veces",
            "<code>*</code>: exactamente una vez",
            "<code>+</code>: cero o más veces"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "<code>*</code> es cero o más (no exactamente una) y <code>+</code> es una o más (no cero o más)."
        },
        {
          "id": "ms2-15-2",
          "q": "¿Cuáles de estas afirmaciones sobre agrupación son correctas según el apunte?",
          "options": [
            "<code>(abc)+</code> coincide al menos una vez con toda la expresión abc",
            "<code>[aeiou]</code> coincide con cualquier vocal",
            "<code>[^aeiou]</code> coincide con cualquier caracter que no sea vocal",
            "<code>()</code> definen un grupo de caracteres a encontrar",
            "<code>[]</code> agrupan subexpresiones para aplicarles cuantificadores"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "Los paréntesis agrupan subexpresiones y los corchetes definen grupos de caracteres; las opciones 4 y 5 invierten esos roles."
        },
        {
          "id": "ms2-15-3",
          "q": "¿Cuáles de estos comandos aparecen en el apunte para probar expresiones regulares?",
          "options": [
            "<code>egrep</code>",
            "<code>grep -E</code>",
            "<code>awk</code>",
            "<code>sed</code>",
            "<code>locate</code>"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "El apunte indica que los ejemplos se prueban con <code>egrep</code> o <code>grep -E</code>; los demás no figuran."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-15-1",
        "front": "¿Para qué sirven las expresiones regulares en Linux?",
        "back": "Definir patrones de búsqueda complejos sobre texto; se usan en comandos como <code>grep</code> o <code>find</code> para encontrar, validar o manipular texto de manera eficiente."
      },
      {
        "id": "fc2-15-2",
        "front": "Cuantificador <code>?</code>",
        "back": "Coincide cero o una vez. Ejemplo: <code>/ab?c/</code> coincide con ac y abc."
      },
      {
        "id": "fc2-15-3",
        "front": "Cuantificador <code>{n}</code>",
        "back": "Coincide exactamente “n” veces con el patrón."
      },
      {
        "id": "fc2-15-4",
        "front": "¿Qué hace el pipe <code>|</code> en una regex?",
        "back": "Funciona como operador OR (alternación): matchea una expresión o la otra. Ejemplo: <code>/a|b/</code>."
      },
      {
        "id": "fc2-15-5",
        "front": "Punto <code>.</code> como caracter especial",
        "back": "Coincide con cualquier caracter, excepto una nueva línea."
      },
      {
        "id": "fc2-15-6",
        "front": "Negación <code>[^aeiou]</code>",
        "back": "El <code>^</code> dentro de <code>[]</code> niega el grupo: coincide con cualquier caracter que no sea una vocal."
      },
      {
        "id": "fc2-15-7",
        "front": "¿Qué hace el verificador de regex101.com?",
        "back": "Verifica cada expresión regular con un ejemplo y sólo pinta aquello que concuerda con la expresión."
      }
    ]
  },
  "16": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-16-1",
          "q": "Para que exista una red debe haber como mínimo dos dispositivos conectados.",
          "a": true,
          "explain": "El apunte establece que como mínimo debe haber 2 dispositivos, comunicándose un cliente con un servidor."
        },
        {
          "id": "tf2-16-2",
          "q": "IPv6 se expresa en notación decimal separada por puntos.",
          "a": false,
          "explain": "IPv6 usa 128 bits y se expresa en notación hexadecimal separada por dos puntos. La notación decimal por puntos es de IPv4."
        },
        {
          "id": "tf2-16-3",
          "q": "La clase A de direcciones IPv4 tiene el formato red.host.host.host y se aplica a redes grandes.",
          "a": true,
          "explain": "La clase A usa el formato red.host.host.host, admite 16777214 hosts y está destinada a redes grandes."
        },
        {
          "id": "tf2-16-4",
          "q": "En una configuración iface, <code>inet6</code> corresponde al tipo de conexión IPv4.",
          "a": false,
          "explain": "<code>inet</code> corresponde a IPv4 e <code>inet6</code> a IPv6."
        },
        {
          "id": "tf2-16-5",
          "q": "El gateway redirige hacia otras redes los paquetes que no están destinados a un dispositivo de la red local.",
          "a": true,
          "explain": "La puerta de enlace es el punto de acceso a otras redes: los paquetes que no van a la red local se envían al gateway para su redirección."
        }
      ],
      "mc": [
        {
          "id": "mc2-16-1",
          "q": "¿Qué clase de red se usa típicamente para conectar un teléfono o auriculares a una computadora mediante bluetooth?",
          "options": [
            "PAN",
            "LAN",
            "MAN",
            "WAN"
          ],
          "correctIndex": 0,
          "explain": "La PAN (Personal Area Network) es de corto alcance y conecta dispositivos personales como teléfonos o auriculares, usando tecnologías como bluetooth."
        },
        {
          "id": "mc2-16-2",
          "q": "¿Cuántos bits reserva para la red la notación CIDR <code>192.168.1.1/24</code>?",
          "options": [
            "8 bits",
            "32 bits",
            "24 bits",
            "16 bits"
          ],
          "correctIndex": 2,
          "explain": "El sufijo /24 indica 24 bits para la red y los 8 restantes para los hosts, equivalente a la máscara 255.255.255.0."
        },
        {
          "id": "mc2-16-3",
          "q": "¿Qué componente traduce un nombre de dominio como www.starwars.com en su dirección IP?",
          "options": [
            "DHCP",
            "Gateway",
            "Netmask",
            "DNS"
          ],
          "correctIndex": 3,
          "explain": "El DNS (Domain Name System) traduce los nombres de dominio en direcciones IP."
        },
        {
          "id": "mc2-16-4",
          "q": "En el archivo interfaces, ¿qué directiva indica qué interfaces deben iniciarse automáticamente al arrancar el sistema?",
          "options": [
            "auto",
            "allow-hotplug",
            "iface",
            "static"
          ],
          "correctIndex": 0,
          "explain": "La directiva <code>auto</code> indica qué interfaces de red deben iniciarse automáticamente cuando el sistema arranca."
        }
      ],
      "ms": [
        {
          "id": "ms2-16-1",
          "q": "¿Cuáles de estos datos se completan en una asignación estática (static) en el archivo interfaces?",
          "options": [
            "address",
            "DNS primario",
            "netmask",
            "gateway",
            "hostname"
          ],
          "correctIndexes": [
            0,
            2,
            3
          ],
          "explain": "En una configuración static se completan address, netmask y gateway. DNS primario y hostname no figuran entre esos parámetros en el apunte."
        },
        {
          "id": "ms2-16-2",
          "q": "¿Qué afirmaciones sobre las clases de direcciones IPv4 son correctas según el apunte?",
          "options": [
            "La clase C admite 254 hosts",
            "La clase D se usa para multicast",
            "La clase B se aplica a redes pequeñas",
            "La clase E está reservada para investigación y uso experimental",
            "La clase A tiene formato red.red.host.host"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "La clase C admite 254 hosts, la D es multicast y la E es experimental. La clase B es para redes medianas y la A tiene formato red.host.host.host."
        },
        {
          "id": "ms2-16-3",
          "q": "¿Cuáles de las siguientes son funciones que cumple el servidor DHCP al conectarse un dispositivo?",
          "options": [
            "Asigna una dirección IP",
            "Traduce nombres de dominio a IPs",
            "Asigna la máscara de red",
            "Asigna la puerta de enlace predeterminada",
            "Enruta paquetes hacia otras redes"
          ],
          "correctIndexes": [
            0,
            2,
            3
          ],
          "explain": "El DHCP asigna automáticamente la IP, la máscara y el gateway. Traducir nombres es tarea del DNS y enrutar hacia otras redes es tarea del gateway."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-16-1",
        "front": "¿Qué es una red?",
        "back": "Dispositivos conectados entre sí para compartir recursos e intercambiar información. Como mínimo debe haber 2 dispositivos."
      },
      {
        "id": "fc2-16-2",
        "front": "MAN",
        "back": "Metropolitan Area Network: cubre áreas metropolitanas como una ciudad. Más grande que una LAN pero menor que una WAN."
      },
      {
        "id": "fc2-16-3",
        "front": "Octetos en IPv4",
        "back": "Una IPv4 de 32 bits se organiza en cuatro octetos de 8 bits cada uno; cada número decimal va de 0 a 255."
      },
      {
        "id": "fc2-16-4",
        "front": "Clase A (IPv4)",
        "back": "Rango 0.0.0.0 a 127.255.255.255, formato red.host.host.host, hasta 16777214 hosts. Redes grandes."
      },
      {
        "id": "fc2-16-5",
        "front": "Clases D y E",
        "back": "La clase D se usa para multicast y la clase E está reservada para investigación y uso experimental."
      },
      {
        "id": "fc2-16-6",
        "front": "Directivas auto y allow-hotplug",
        "back": "auto: inicia interfaces automáticamente al arrancar. allow-hotplug: habilita la interfaz al detectar el dispositivo (ej. conectar cable ethernet)."
      },
      {
        "id": "fc2-16-7",
        "front": "Parámetros de iface",
        "back": "Nombre de la interfaz (eth0, wlan0, lo), tipo de conexión (inet/inet6) y método de configuración (static/dhcp)."
      }
    ]
  },
  "17": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-17-1",
          "q": "Antes de consultar a un servidor DNS Recursivo, la computadora primero revisa si ya tiene la IP del dominio en su caché local.",
          "a": true,
          "explain": "El primer paso es mirar la caché local; recién si la IP no está ahí se hace la consulta al servidor Recursivo."
        },
        {
          "id": "tf2-17-2",
          "q": "El mensaje DHCP Offer lo envía el cliente para pedir una dirección IP a la red.",
          "a": false,
          "explain": "El DHCP Offer lo envía el servidor ofreciendo una IP libre. El cliente pide con DHCP Discover."
        },
        {
          "id": "tf2-17-3",
          "q": "Los dominios como <code>.ar</code>, <code>.mx</code> o <code>.es</code> se conocen como cc-TLD (Country Code Top-Level Domain).",
          "a": true,
          "explain": "Los TLD de código de país se denominan cc-TLD, gestionados por los servidores TLD."
        },
        {
          "id": "tf2-17-4",
          "q": "El registro DNS tipo TXT almacena texto para verificaciones o políticas de seguridad.",
          "a": true,
          "explain": "Exactamente: el registro TXT guarda texto usado para verificaciones o políticas de seguridad."
        },
        {
          "id": "tf2-17-5",
          "q": "El DHCP solo entrega la dirección IP y ningún otro dato de configuración de red.",
          "a": false,
          "explain": "Además de la IP, el DHCP puede brindar máscara de red, puerta de enlace, servidores DNS y el tiempo de alquiler."
        }
      ],
      "mc": [
        {
          "id": "mc2-17-1",
          "q": "¿Qué mensaje DHCP envía el servidor para confirmar que la IP ya es válida para el cliente?",
          "options": [
            "DHCP Request",
            "DHCP Discover",
            "DHCP ACK",
            "DHCP Offer"
          ],
          "correctIndex": 2,
          "explain": "El DHCP ACK (Acknowledgement) confirma que la dirección quedó asignada y es válida para el cliente."
        },
        {
          "id": "mc2-17-2",
          "q": "En la jerarquía <code>mail.ejemplo.com</code>, ¿qué parte es el dominio secundario?",
          "options": [
            "mail",
            "ejemplo",
            ".com",
            "www"
          ],
          "correctIndex": 1,
          "explain": "\"ejemplo\" es el dominio secundario; \".com\" es el TLD y \"mail\" el subdominio."
        },
        {
          "id": "mc2-17-3",
          "q": "¿Qué tipo de registro DNS asocia un dominio contra otro dominio?",
          "options": [
            "CNAME",
            "AAAA",
            "MX",
            "NS"
          ],
          "correctIndex": 0,
          "explain": "El registro CNAME (Canonical-Name) asocia un dominio contra otro dominio."
        },
        {
          "id": "mc2-17-4",
          "q": "¿Qué hace el Servidor Recursivo una vez que obtiene la dirección IP definitiva?",
          "options": [
            "La devuelve al navegador y la computadora la guarda en caché",
            "La reenvía al Servidor Raíz para validarla",
            "La descarta si el TLD no responde",
            "La entrega al Servidor DHCP para asignarla"
          ],
          "correctIndex": 0,
          "explain": "El Recursivo devuelve la IP al navegador; la computadora la cachea para no repetir la consulta."
        }
      ],
      "ms": [
        {
          "id": "ms2-17-1",
          "q": "¿Cuáles de estos datos puede incluir un servidor DHCP en su oferta al cliente?",
          "options": [
            "Puerta de enlace",
            "Servidores DNS de la red",
            "Tiempo de alquiler de la IP",
            "Máscara de red",
            "Registro MX del dominio"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "El DHCP Offer incluye puerta de enlace, DNS, tiempo de alquiler y máscara de red. El registro MX es cosa del DNS."
        },
        {
          "id": "ms2-17-2",
          "q": "¿Qué mensajes DHCP se envían en modo broadcast según el apunte?",
          "options": [
            "DHCP Discover",
            "DHCP Request",
            "DHCP Offer",
            "DHCP ACK",
            "DHCP Release"
          ],
          "correctIndexes": [
            0,
            1
          ],
          "explain": "El apunte indica broadcast para Discover (el cliente no sabe dónde está el servidor) y Request (para que otros servidores registren que la IP fue aceptada)."
        },
        {
          "id": "ms2-17-3",
          "q": "¿Cuáles de estas afirmaciones sobre la cadena de consulta DNS son correctas?",
          "options": [
            "El Recursivo consulta al Servidor Raíz si no tiene la IP",
            "El Root DNS Server puede trasladar la consulta a los TLD",
            "El Autoritativo devuelve un error si no existe el registro",
            "El TLD gestiona dominios como .com, .net y .org",
            "El navegador consulta directamente al Autoritativo sin pasar por el Recursivo"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            3
          ],
          "explain": "Las primeras cuatro describen la cadena tu compu → Recursivo → Raíz → TLD → Autoritativo. El navegador nunca salta directo al Autoritativo."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-17-1",
        "front": "¿Qué revisa la computadora antes de consultar al servidor DNS?",
        "back": "Su caché local: si ya conoce la IP del dominio la usa directo; si no está, consulta al servidor Recursivo."
      },
      {
        "id": "fc2-17-2",
        "front": "¿Qué son los cc-TLD?",
        "back": "Country Code Top-Level Domain: los TLD de código de país como .ar, .mx o .es, gestionados por los servidores TLD."
      },
      {
        "id": "fc2-17-3",
        "front": "Registro DNS tipo CNAME",
        "back": "Asocia un dominio contra otro dominio (Canonical-Name)."
      },
      {
        "id": "fc2-17-4",
        "front": "Registro DNS tipo TXT",
        "back": "Almacena texto para verificaciones o políticas de seguridad."
      },
      {
        "id": "fc2-17-5",
        "front": "DHCP Offer: ¿quién lo envía y qué incluye?",
        "back": "Lo envía el servidor DHCP: ofrece una IP libre de su rango junto con máscara de red, puerta de enlace, DNS y tiempo de alquiler."
      },
      {
        "id": "fc2-17-6",
        "front": "¿Por qué el DHCP Request va en broadcast?",
        "back": "Para que, si hay otros servidores DHCP en la red, registren que la IP ofrecida fue aceptada."
      },
      {
        "id": "fc2-17-7",
        "front": "Tiempo de alquiler de la IP en DHCP",
        "back": "La IP se asigna por un tiempo establecido; si el cliente no la vuelve a solicitar, queda liberada para otro cliente."
      }
    ]
  },
  "18": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-18-1",
          "q": "SSH designa tanto a un protocolo como al programa que lo implementa para acceder a servidores de forma remota.",
          "a": true,
          "explain": "El apunte define SSH como el nombre de un protocolo y del programa que lo implementa, usado para administrar servidores remotos por un intérprete de comandos."
        },
        {
          "id": "tf2-18-2",
          "q": "El archivo <code>ssh_config</code> describe la configuración de SSH actuando como servidor.",
          "a": false,
          "explain": "Es al revés: ssh_config configura SSH como cliente, mientras que sshd_config configura SSH como servidor."
        },
        {
          "id": "tf2-18-3",
          "q": "Además de la administración remota, SSH permite copiar datos de forma segura y tunelizar el tráfico de otras aplicaciones por un canal seguro.",
          "a": true,
          "explain": "El apunte menciona que SSH permite copiar datos seguros, gestionar claves RSA y pasar datos de otras aplicaciones por un canal seguro tunelizado."
        },
        {
          "id": "tf2-18-4",
          "q": "Durante el intercambio inicial, el cliente envía su clave pública al servidor para que este se identifique.",
          "a": false,
          "explain": "Es el servidor el que envía su clave pública al cliente para identificarse en el paso de intercambio de claves."
        },
        {
          "id": "tf2-18-5",
          "q": "Para cerrar una sesión SSH ya establecida se utiliza el comando <code>exit</code>.",
          "a": true,
          "explain": "El apunte indica que para desloguearse de una conexión SSH establecida se ejecuta exit."
        }
      ],
      "mc": [
        {
          "id": "mc2-18-1",
          "q": "En la autenticación por clave pública/privada, ¿qué hace el servidor durante la conexión?",
          "options": [
            "Descifra un desafío con su clave privada",
            "Cifra un desafío con la clave pública del cliente",
            "Envía la clave privada del cliente al origen",
            "Compara la contraseña con la almacenada"
          ],
          "correctIndex": 1,
          "explain": "El servidor cifra un desafío con la clave pública del cliente; el cliente lo descifra con su clave privada para autenticarse."
        },
        {
          "id": "mc2-18-2",
          "q": "Según sshd_config, ¿qué opción indica dónde están almacenadas las claves públicas de los usuarios?",
          "options": [
            "IdentityFile",
            "PubkeyAuthentication",
            "AuthorizedKeysFile",
            "PermitRootLogin"
          ],
          "correctIndex": 2,
          "explain": "AuthorizedKeysFile indica al servidor dónde están las claves públicas; por default es .ssh/authorized_keys en el home del usuario."
        },
        {
          "id": "mc2-18-3",
          "q": "¿Qué comando se usa para instalar SSH como servidor?",
          "options": [
            "apt-get install openssh-server",
            "ssh-keygen openssh-server",
            "ssh-copy-id openssh-server",
            "apt-get install ssh-client"
          ],
          "correctIndex": 0,
          "explain": "El servidor puede no venir instalado; se agrega con apt-get install openssh-server."
        },
        {
          "id": "mc2-18-4",
          "q": "Al ejecutar ssh-keygen sin indicar otra ubicación, ¿con qué nombre se guarda por default la clave privada?",
          "options": [
            "id_rsa.pub",
            "authorized_keys",
            "id_rsa",
            "ssh_config"
          ],
          "correctIndex": 2,
          "explain": "Por default la clave privada se guarda como id_rsa en ~/.ssh, y la pública como id_rsa.pub."
        }
      ],
      "ms": [
        {
          "id": "ms2-18-1",
          "q": "¿Cuáles de estos pasos forman parte de la conexión SSH paso a paso descrita en el apunte?",
          "options": [
            "El cliente se conecta al servidor en el puerto 22 o el configurado",
            "El servidor envía su clave pública al cliente para identificarse",
            "El cliente genera una clave de sesión y la cifra con la clave pública del servidor",
            "El cliente reinicia el servicio openssh-server tras conectarse",
            "Una vez autenticado, la conexión queda segura y se puede interactuar con el servidor"
          ],
          "correctIndexes": [
            0,
            1,
            2,
            4
          ],
          "explain": "La conexión incluye conexión inicial, intercambio de claves, verificación, clave de sesión, autenticación e inicio de sesión. Reiniciar el servicio no es parte del flujo."
        },
        {
          "id": "ms2-18-2",
          "q": "¿Cuáles de las siguientes opciones pertenecen al archivo sshd_config (servidor)?",
          "options": [
            "port",
            "PermitRootLogin",
            "AuthorizedKeysFile",
            "IdentityFile",
            "Host"
          ],
          "correctIndexes": [
            0,
            1,
            2
          ],
          "explain": "port, PermitRootLogin y AuthorizedKeysFile son de sshd_config. IdentityFile y Host pertenecen a ssh_config (cliente)."
        },
        {
          "id": "ms2-18-3",
          "q": "¿Cuáles de estas afirmaciones sobre la autenticación por contraseña son correctas según el apunte?",
          "options": [
            "Es el método más básico y común",
            "La contraseña se transmite de manera cifrada al servidor",
            "Es más segura que la autenticación por clave pública/privada",
            "Es vulnerable a ataques de fuerza bruta o robo",
            "No requiere que el cliente envíe su nombre de usuario"
          ],
          "correctIndexes": [
            0,
            1,
            3
          ],
          "explain": "Es el método más básico y común, la contraseña viaja cifrada y es vulnerable a fuerza bruta o robo. Es MENOS segura que la de clave pública/privada, y el cliente sí envía su nombre de usuario."
        }
      ]
    },
    "flashcards2": [
      {
        "id": "fc2-18-1",
        "front": "¿Para qué sirve SSH además de la administración remota?",
        "back": "Permite copiar datos de forma segura, gestionar claves RSA para no escribir claves al conectar, y pasar datos de otras aplicaciones por un canal seguro tunelizado."
      },
      {
        "id": "fc2-18-2",
        "front": "¿Dónde viven los archivos de configuración de OpenSSH y cuáles son?",
        "back": "En /etc/ssh. Son sshd_config (SSH como servidor) y ssh_config (SSH como cliente)."
      },
      {
        "id": "fc2-18-3",
        "front": "¿Qué hace la opción port en sshd_config?",
        "back": "Especifica el puerto TCP a usar. Por default viene comentada y usa el 22; las buenas prácticas recomiendan cambiarlo para evitar ataques."
      },
      {
        "id": "fc2-18-4",
        "front": "IdentityFile (ssh_config)",
        "back": "Opción del archivo de cliente que indica el archivo que contiene la clave privada."
      },
      {
        "id": "fc2-18-5",
        "front": "¿Por qué la autenticación por clave pública/privada es la más segura?",
        "back": "Garantiza que solo quien posee la clave privada puede autenticarse, y no requiere intercambiar ni enviar contraseñas."
      },
      {
        "id": "fc2-18-6",
        "front": "¿Qué pregunta ssh-keygen tras elegir dónde guardar las claves?",
        "back": "Si querés establecer una frase (passphrase) como contraseña de las claves. En la cursada se deja en blanco con enter, pero igual pide repetirla."
      },
      {
        "id": "fc2-18-7",
        "front": "¿Qué muestra ssh-copy-id al ejecutarse y qué espera?",
        "back": "Informa que intenta loguearse con la nueva clave y se queda esperando la contraseña del usuario destino (ej: root); tras ingresarla copia la clave pública al authorized_keys."
      }
    ]
  },
  "19": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-19-1",
          "q": "Un filesystem actúa como un puente entre los datos físicos y el sistema operativo, permitiendo leer, escribir, modificar y eliminar archivos.",
          "a": true,
          "explain": "Tal cual lo define el texto: el filesystem organiza cómo se almacenan y acceden los datos, y media entre el disco físico y el SO para todas esas operaciones."
        },
        {
          "id": "tf2-19-2",
          "q": "NTFS es un filesystem nativo de Linux que ofrece mejor rendimiento que ext4 o XFS en ese sistema.",
          "a": false,
          "explain": "Al revés: NTFS sirve para la interoperabilidad con Windows y justamente tiene rendimiento menor en Linux comparado con los FS nativos como ext4 o XFS."
        },
        {
          "id": "tf2-19-3",
          "q": "Btrfs ofrece snapshots y compresión, lo que lo hace ideal para copias de seguridad y versiones.",
          "a": true,
          "explain": "Esa es la ventaja que destaca la tabla para Btrfs: snapshots y compresión, pensado para backups y versionado, aunque todavía está en fase de optimización."
        },
        {
          "id": "tf2-19-4",
          "q": "XFS se caracteriza por su alta eficiencia y escalabilidad con archivos grandes y grandes volúmenes.",
          "a": true,
          "explain": "Sí: la ventaja de XFS según el cuadro es escalar muy bien y rendir con archivos enormes; su contra es que redimensionarlo es más complejo."
        },
        {
          "id": "tf2-19-5",
          "q": "Los cuatro filesystems comparados en la sección (ext4, XFS, Btrfs, NTFS) comparten la característica de ser journalizados.",
          "a": true,
          "explain": "El criollo lo aclara: los cuatro de la tabla figuran como journalizados, y ese tema se desarrolla aparte en la sección siguiente."
        }
      ],
      "mc": [
        {
          "id": "mc2-19-1",
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
          "id": "mc2-19-2",
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
          "id": "mc2-19-3",
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
          "id": "mc2-19-4",
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
          "id": "ms2-19-1",
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
          "id": "ms2-19-2",
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
          "id": "ms2-19-3",
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
        "id": "fc2-19-1",
        "front": "¿Qué es un filesystem?",
        "back": "Una estructura que organiza cómo se almacenan y acceden los datos en un disco o dispositivo, actuando como puente entre los datos físicos y el sistema operativo."
      },
      {
        "id": "fc2-19-2",
        "front": "Operaciones que permite un filesystem",
        "back": "Leer, escribir, modificar y eliminar archivos."
      },
      {
        "id": "fc2-19-3",
        "front": "ext4: ventajas y desventaja",
        "back": "Ventajas: rápido y confiable (journalizado, soporta archivos grandes). Desventaja: no es compatible con Windows sin software adicional."
      },
      {
        "id": "fc2-19-4",
        "front": "XFS: para qué se destaca",
        "back": "Journalizado y eficiente con archivos grandes; escala muy bien en grandes volúmenes. Su contra es el redimensionado más complejo."
      },
      {
        "id": "fc2-19-5",
        "front": "Btrfs: rasgo distintivo",
        "back": "Journalizado con snapshots y compresión; ideal para copias de seguridad y versiones. Todavía en fase de optimización."
      },
      {
        "id": "fc2-19-6",
        "front": "NTFS: para qué sirve",
        "back": "Compatibilidad con Windows e interoperabilidad Linux-Windows. Soporta archivos grandes, pero rinde menos en Linux que los FS nativos."
      },
      {
        "id": "fc2-19-7",
        "front": "¿Qué tienen en común ext4, XFS, Btrfs y NTFS?",
        "back": "Los cuatro son filesystems journalizados, característica que les da fiabilidad."
      }
    ]
  },
  "20": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-20-1",
          "q": "Un filesystem journalizado registra cada cambio en un área especial llamada journal antes de aplicarlo al sistema de archivos principal.",
          "a": true,
          "explain": "Esa es la esencia del journaling: primero anota la operación en el diario y recién después la aplica al filesystem principal."
        },
        {
          "id": "tf2-20-2",
          "q": "El journaling busca reducir el tiempo de recuperación frente a fallos como un corte de energía.",
          "a": true,
          "explain": "Sí, su finalidad es proteger la integridad de los datos y achicar el tiempo de recuperación ante cortes o errores del sistema."
        },
        {
          "id": "tf2-20-3",
          "q": "El journaling de metadatos es más lento y consume más recursos que el journaling completo.",
          "a": false,
          "explain": "Es al revés: el journaling completo es el más lento y el que más recursos consume; el de metadatos es más rápido (aunque menos seguro para los datos en sí)."
        },
        {
          "id": "tf2-20-4",
          "q": "El journaling completo registra tanto los datos de las operaciones como la estructura de los metadatos.",
          "a": true,
          "explain": "Correcto: el completo anota datos y metadatos, y por eso es el más pesado y lento de los tres."
        },
        {
          "id": "tf2-20-5",
          "q": "El journaling de metadatos solo registra cambios en los metadatos, como la ubicación o el nombre de un archivo.",
          "a": true,
          "explain": "Tal cual: anota solo lo estructural (ubicación, nombre), por eso va más rápido pero protege menos los datos del archivo en sí."
        }
      ],
      "mc": [
        {
          "id": "mc2-20-1",
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
          "id": "mc2-20-2",
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
          "id": "mc2-20-3",
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
          "id": "mc2-20-4",
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
          "id": "ms2-20-1",
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
          "id": "ms2-20-2",
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
          "id": "ms2-20-3",
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
        "id": "fc2-20-1",
        "front": "¿Qué es un filesystem journalizado?",
        "back": "Una tecnología que registra cada cambio en un área especial (el journal o diario) antes de aplicarlo al filesystem principal, para mejorar la integridad y fiabilidad de los datos."
      },
      {
        "id": "fc2-20-2",
        "front": "Finalidad del journaling",
        "back": "Proteger la integridad de los datos y reducir el tiempo de recuperación en caso de fallo (corte de energía, error del sistema)."
      },
      {
        "id": "fc2-20-3",
        "front": "¿Cómo trabaja el journal?",
        "back": "Primero registra la operación en el journal y recién después la aplica al filesystem principal. La acción se concreta solo si el cambio quedó registrado correctamente."
      },
      {
        "id": "fc2-20-4",
        "front": "¿Qué pasa ante un fallo o apagado inesperado?",
        "back": "Al reiniciar, el journal permite reconstruir los cambios pendientes y dejarlos en el estado correcto, minimizando el riesgo de archivos corruptos."
      },
      {
        "id": "fc2-20-5",
        "front": "Journaling completo",
        "back": "Registra tanto los datos de las operaciones como la estructura de los metadatos. Es el más seguro pero el que más recursos consume y el más lento."
      },
      {
        "id": "fc2-20-6",
        "front": "Journaling de metadatos",
        "back": "Solo registra cambios en los metadatos (ubicación, nombre del archivo). Es más rápido, aunque menos seguro para los datos de los archivos en sí."
      },
      {
        "id": "fc2-20-7",
        "front": "Journaling asíncrono o sincrónico",
        "back": "Define cómo se escriben los cambios en el journal, priorizando entre la integridad de los datos o la velocidad de escritura."
      },
      {
        "id": "fc2-20-8",
        "front": "¿De qué depende elegir un tipo de journaling?",
        "back": "Del compromiso entre rendimiento y resistencia a fallos que se necesite en cada caso."
      }
    ]
  },
  "21": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-21-1",
          "q": "El procedimiento para incorporar un disco en VirtualBox debe hacerse con la máquina virtual apagada.",
          "a": true,
          "explain": "Sí, el texto es claro: el procedimiento se sigue desde la interfaz con la máquina apagada, y recién al final se vuelve a encender."
        },
        {
          "id": "tf2-21-2",
          "q": "Al crear el disco en VirtualBox conviene dejar marcado el casillero \"pre-allocate Full Size\".",
          "a": false,
          "explain": "No: ese casillero debe quedar destildado. Si lo dejás marcado, el VDI ocupa el tamaño total desde el principio en vez de crecer a demanda."
        },
        {
          "id": "tf2-21-3",
          "q": "El tipo de extensión que se indica al crear el disco en el procedimiento es VDI.",
          "a": true,
          "explain": "Correcto: en las opciones del disco a crear se indica el tipo de extensión VDI antes de presionar Finish."
        },
        {
          "id": "tf2-21-4",
          "q": "Agregar el disco en VirtualBox ya deja el dispositivo listo para guardar datos apenas se enciende la VM.",
          "a": false,
          "explain": "Falso: al arrancar, el kernel ve el disco pero está vacío. Para usarlo todavía hay que inicializarlo, formatearlo y montarlo."
        },
        {
          "id": "tf2-21-5",
          "q": "La opción del menú de VirtualBox donde se agrega el disco es Storage (Almacenamiento), parándose sobre el Controller.",
          "a": true,
          "explain": "Tal cual: dentro de Settings vas a la sección Storage, te posicionás sobre Controller y agregás el nuevo disco."
        }
      ],
      "mc": [
        {
          "id": "mc2-21-1",
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
          "id": "mc2-21-2",
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
          "id": "mc2-21-3",
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
          "id": "mc2-21-4",
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
          "id": "ms2-21-1",
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
          "id": "ms2-21-2",
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
          "id": "ms2-21-3",
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
        "id": "fc2-21-1",
        "front": "¿Con qué estado de la VM se incorpora un disco en VirtualBox?",
        "back": "Con la máquina virtual apagada; recién al final del procedimiento se la vuelve a encender."
      },
      {
        "id": "fc2-21-2",
        "front": "Ruta dentro de Settings para agregar el disco",
        "back": "Settings → sección Storage (Almacenamiento) → posicionarse sobre Controller → agregar nuevo disco."
      },
      {
        "id": "fc2-21-3",
        "front": "¿Qué se indica al crear el disco antes de Finish?",
        "back": "El path por defecto, el tamaño y el tipo de extensión VDI."
      },
      {
        "id": "fc2-21-4",
        "front": "Casillero \"pre-allocate Full Size\"",
        "back": "Debe quedar destildado. Si se deja marcado, el VDI ocupa el tamaño total desde el principio en vez de crecer a demanda."
      },
      {
        "id": "fc2-21-5",
        "front": "Pasos finales para confirmar el disco",
        "back": "Volver al Selector de Discos, parado sobre el disco nuevo presionar Choose (Seleccionar), y luego confirmar con OK. Encender la máquina."
      },
      {
        "id": "fc2-21-6",
        "front": "¿Qué falta tras encender la VM con el disco agregado?",
        "back": "El kernel lo ve pero está vacío. Para usarlo hay que inicializarlo, formatearlo y montarlo."
      },
      {
        "id": "fc2-21-7",
        "front": "¿Qué significa agregar el disco \"a nivel virtualizador\"?",
        "back": "Que se suma el disco desde VirtualBox; recién después el SO invitado lo reconoce como dispositivo de bloque."
      }
    ]
  },
  "22": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-22-1",
          "q": "El comando lsblk lista los dispositivos de bloque conectados al sistema, como discos, SSDs y particiones.",
          "a": true,
          "explain": "Sí, lsblk lista los dispositivos de bloque: discos, unidades SSD, particiones y otros dispositivos de almacenamiento."
        },
        {
          "id": "tf2-22-2",
          "q": "En la salida de lsblk, la columna RM con valor 1 indica que el dispositivo es removible.",
          "a": true,
          "explain": "Correcto: RM marca si es removible, donde 1 = removible y 0 = no removible."
        },
        {
          "id": "tf2-22-3",
          "q": "Dentro del menú de fdisk, se presiona la tecla p para crear una partición nueva.",
          "a": false,
          "explain": "No: n es para una partición nueva. La p indica que la partición es del tipo primaria (y también imprime el resumen al revisar)."
        },
        {
          "id": "tf2-22-4",
          "q": "En fdisk, para asignar un sector final de 10 GB en el ejemplo se escribe +10G.",
          "a": true,
          "explain": "Tal cual: conviene indicar el sector final en unidades, y en el ejemplo se asignan 10 GB escribiendo +10G."
        },
        {
          "id": "tf2-22-5",
          "q": "En fdisk, si no presionás w los cambios igual se guardan automáticamente al salir.",
          "a": false,
          "explain": "Falso: w (Write) es lo que guarda los cambios. Si te equivocás y no escribís con w, no pasó nada."
        }
      ],
      "mc": [
        {
          "id": "mc2-22-1",
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
          "id": "mc2-22-2",
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
          "id": "mc2-22-3",
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
          "id": "mc2-22-4",
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
          "id": "mc2-22-5",
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
          "id": "ms2-22-1",
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
          "id": "ms2-22-2",
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
          "id": "ms2-22-3",
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
        "id": "fc2-22-1",
        "front": "¿Qué hace el comando lsblk?",
        "back": "Lista los dispositivos de bloque conectados (discos, SSDs, particiones, removibles) y sirve para confirmar que el kernel reconoció el disco."
      },
      {
        "id": "fc2-22-2",
        "front": "Columna RM en lsblk",
        "back": "Indica si el dispositivo es removible: 1 = removible, 0 = no removible."
      },
      {
        "id": "fc2-22-3",
        "front": "Columna MOUNTPOINT en lsblk",
        "back": "El punto de montado: el directorio al que está asociado el dispositivo o partición."
      },
      {
        "id": "fc2-22-4",
        "front": "Los 4 pasos para disponibilizar un disco",
        "back": "1) Inicializarlo (fdisk), 2) Formatearlo (mkfs), 3) Montarlo (mount), 4) Agregarlo al /etc/fstab para que persista al reiniciar."
      },
      {
        "id": "fc2-22-5",
        "front": "Origen del prefijo sd* (sda, sdb...)",
        "back": "Viene de \"SCSI DISK\", aunque hoy se aplica a otros dispositivos. El asterisco es una letra asignada en orden (a, b, c...) según los dispositivos detectados."
      },
      {
        "id": "fc2-22-6",
        "front": "Secuencia de teclas en fdisk para crear la partición",
        "back": "n (nueva), p (primaria), 1 (número), Enter en el sector inicial, +10G en el final, y w (Write) para guardar."
      },
      {
        "id": "fc2-22-7",
        "front": "¿Cómo se confirma que la partición quedó creada?",
        "back": "Entrando de nuevo con fdisk y presionando p (imprime un resumen), o ejecutando lsblk para ver la nueva partición listada bajo el disco."
      },
      {
        "id": "fc2-22-8",
        "front": "¿Para qué sirve la tecla w en fdisk?",
        "back": "Para escribir (Write) y guardar los cambios. Si no la presionás, no se guarda nada: podés salir sin riesgo si te equivocaste."
      }
    ]
  },
  "23": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-23-1",
          "q": "El comando <code>mkfs</code> con la opción <code>-t</code> sirve para indicar el tipo de filesystem que se le da a la partición.",
          "a": true,
          "explain": "Tal cual: <code>mkfs -t ext4 /dev/sdd1</code> formatea la partición con el filesystem indicado por <code>-t</code>, en el ejemplo ext4. Sin filesystem la partición no puede recibir datos."
        },
        {
          "id": "tf2-23-2",
          "q": "Un montaje hecho con <code>mount</code> se mantiene activo automáticamente después de reiniciar la máquina aunque no toques <code>/etc/fstab</code>.",
          "a": false,
          "explain": "El montaje con <code>mount</code> dura hasta que reinicies la VM. Para que persista en cada arranque hay que dejar la línea anotada en <code>/etc/fstab</code>."
        },
        {
          "id": "tf2-23-3",
          "q": "En el campo <code>options</code> de fstab, <code>ro</code> y <code>rw</code> son excluyentes entre sí.",
          "a": true,
          "explain": "Sí: <code>ro</code> monta en solo lectura y <code>rw</code> en lectura y escritura, son opciones excluyentes, no las podés tener juntas."
        },
        {
          "id": "tf2-23-4",
          "q": "En el campo <code>pass-num</code> de fstab, el valor 0 hace que la partición se revise primero con fsck durante el arranque.",
          "a": false,
          "explain": "Al revés: <code>pass-num</code> indica el orden en que fsck revisará la partición, y si es 0 el dispositivo NO se revisa."
        },
        {
          "id": "tf2-23-5",
          "q": "El comando <code>df -h</code> muestra el uso de espacio en disco de cada partición en formato legible para humanos.",
          "a": true,
          "explain": "Correcto: <code>df</code> muestra el uso de espacio por partición, y el <code>-h</code> (human-readable) lo muestra en formato cómodo de leer y en qué partición está montado cada cosa."
        }
      ],
      "mc": [
        {
          "id": "mc2-23-1",
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
          "id": "mc2-23-2",
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
          "id": "mc2-23-3",
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
          "id": "mc2-23-4",
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
          "id": "mc2-23-5",
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
          "id": "ms2-23-1",
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
          "id": "ms2-23-2",
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
          "id": "ms2-23-3",
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
        "id": "fc2-23-1",
        "front": "¿Qué hace <code>mkfs</code>?",
        "back": "Crea un filesystem sobre una partición para que pueda recibir datos. La opción <code>-t</code> indica el tipo (por ejemplo ext4)."
      },
      {
        "id": "fc2-23-2",
        "front": "¿Qué significa montar un disco?",
        "back": "Conectar el dispositivo de almacenamiento a una ubicación dentro del sistema de archivos, permitiendo acceder a su contenido a través de ese directorio. Se hace con <code>mount</code>."
      },
      {
        "id": "fc2-23-3",
        "front": "¿Para qué sirve <code>df -h</code>?",
        "back": "Muestra el uso de espacio en disco por cada partición en formato legible (human-readable), incluyendo en qué partición está montado cada cosa."
      },
      {
        "id": "fc2-23-4",
        "front": "¿Para qué sirve <code>/etc/fstab</code>?",
        "back": "Configura la lista de discos y puntos de montaje del sistema. Los comandos mount y umount lo leen para determinar las opciones de montaje, y permite que las particiones se monten solas en cada arranque."
      },
      {
        "id": "fc2-23-5",
        "front": "Seis columnas de /etc/fstab",
        "back": "filesystem, mount point, type, options, dump-freq y pass-num."
      },
      {
        "id": "fc2-23-6",
        "front": "<code>ro</code> vs <code>rw</code> en fstab",
        "back": "Son opciones excluyentes: <code>ro</code> monta en solo lectura y <code>rw</code> en lectura y escritura."
      },
      {
        "id": "fc2-23-7",
        "front": "¿Qué indica <code>pass-num</code> en fstab?",
        "back": "El orden en que fsck revisará la partición buscando errores durante el inicio. Si es 0, el dispositivo no se revisa."
      },
      {
        "id": "fc2-23-8",
        "front": "¿Por qué se pierde el montaje al reiniciar?",
        "back": "El montaje hecho con <code>mount</code> dura hasta el reinicio. Para que persista hay que agregar la línea correspondiente al final de /etc/fstab."
      }
    ]
  },
  "24": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-24-1",
          "q": "Un hard link crea una referencia directa a los datos físicos de un archivo, identificados por un número de inodo único.",
          "a": true,
          "explain": "Exacto: el hard link apunta directo al dato físico, identificado por el inodo, no por el nombre del archivo."
        },
        {
          "id": "tf2-24-2",
          "q": "El inodo almacena el nombre del archivo junto con su propietario, permisos y tamaño.",
          "a": false,
          "explain": "El inodo guarda la metadata (propietario, permisos, tamaño, etc.) pero NO el nombre. El nombre se guarda aparte, como etiqueta, en la estructura de directorio."
        },
        {
          "id": "tf2-24-3",
          "q": "Si se elimina el archivo original, un hard link que apuntaba a él deja de funcionar inmediatamente.",
          "a": false,
          "explain": "El hard link sigue funcionando: los datos no se eliminan hasta que no quede ningún link apuntando al inodo."
        },
        {
          "id": "tf2-24-4",
          "q": "Un hard link puede apuntar a un directorio sin problema.",
          "a": false,
          "explain": "Una de las limitaciones del hard link es que no puede apuntar a directorios; solo a archivos dentro del mismo filesystem."
        },
        {
          "id": "tf2-24-5",
          "q": "Para crear un hard link se usa el comando <code>ln</code> indicando el archivo origen y el nombre del link.",
          "a": true,
          "explain": "Tal cual: <code>ln archivo.txt hl_archivo.txt</code> crea el hard link, y con <code>ls -li</code> vas a ver que ambos comparten el mismo inodo."
        }
      ],
      "mc": [
        {
          "id": "mc2-24-1",
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
          "id": "mc2-24-2",
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
          "id": "mc2-24-3",
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
          "id": "mc2-24-4",
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
          "id": "ms2-24-1",
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
          "id": "ms2-24-2",
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
        "id": "fc2-24-1",
        "front": "¿Qué es un link en Linux?",
        "back": "Un tipo de archivo especial que apunta o referencia a otro archivo del sistema, útil para administrar archivos sin duplicar contenido. Hay dos tipos: hard links y soft links."
      },
      {
        "id": "fc2-24-2",
        "front": "¿Qué es un hard link?",
        "back": "Un enlace que crea una referencia directa a los datos físicos de un archivo, identificados por un número único de inodo."
      },
      {
        "id": "fc2-24-3",
        "front": "¿Qué es un inodo?",
        "back": "Una estructura de datos con la información esencial del archivo (propietario, permisos, tamaño, etc.), que no almacena el nombre. Cada archivo tiene un número de inodo único."
      },
      {
        "id": "fc2-24-4",
        "front": "¿Dónde se guarda el nombre del archivo?",
        "back": "El nombre es una etiqueta almacenada en la estructura de directorio, separada del inodo. Por eso más de un nombre puede asociarse al mismo archivo."
      },
      {
        "id": "fc2-24-5",
        "front": "Tres limitaciones del hard link",
        "back": "Solo referencia datos del mismo filesystem, no puede apuntar a directorios, y el archivo sobrevive mientras quede al menos un link apuntando al inodo."
      },
      {
        "id": "fc2-24-6",
        "front": "¿Cómo se crea un hard link?",
        "back": "Con <code>ln \"archivo origen\" \"nombre del link\"</code>. Ejemplo: <code>ln archivo.txt hl_archivo.txt</code>."
      },
      {
        "id": "fc2-24-7",
        "front": "¿Cómo verifico que dos nombres son hard links del mismo archivo?",
        "back": "Con <code>ls -li</code>: ambos muestran el mismo número de inodo en la primera columna."
      },
      {
        "id": "fc2-24-8",
        "front": "¿Qué pasa con el contador de links al crear un hard link?",
        "back": "Pasa de 1 a 2 (la columna después de los permisos), reflejando que hay dos nombres apuntando al mismo inodo."
      }
    ]
  },
  "25": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-25-1",
          "q": "Un soft link apunta al nombre del archivo, a diferencia del hard link que apunta al inodo.",
          "a": true,
          "explain": "Correcto: el soft link es como un acceso directo, apunta al nombre del archivo; el hard link apunta directo al inodo."
        },
        {
          "id": "tf2-25-2",
          "q": "Si se elimina el archivo original, el soft link sigue funcionando sin problema.",
          "a": false,
          "explain": "No: si se borra el original, el soft link pierde su referencia y queda huérfano (roto). El que sobrevive al borrado del original es el hard link."
        },
        {
          "id": "tf2-25-3",
          "q": "Los soft links pueden apuntar a directorios y fuera del filesystem.",
          "a": true,
          "explain": "Esas son justamente las dos ventajas del soft link: puede apuntar a directorios y cruzar filesystems, cosas que el hard link no puede."
        },
        {
          "id": "tf2-25-4",
          "q": "En la salida de <code>ls -l</code>, un soft link se identifica con la letra <code>d</code> como primer carácter.",
          "a": false,
          "explain": "El soft link se identifica con la <code>l</code> (link) como primer carácter, más una flecha -> hacia el archivo físico. La <code>d</code> sería un directorio."
        },
        {
          "id": "tf2-25-5",
          "q": "Al comparar con <code>ls -li</code>, el soft link y el archivo original tienen el mismo número de inodo.",
          "a": false,
          "explain": "El soft link tiene un inodo DISTINTO al original (1931 vs 1970 en el ejemplo). El que comparte inodo con el original es el hard link."
        }
      ],
      "mc": [
        {
          "id": "mc2-25-1",
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
          "id": "mc2-25-2",
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
          "id": "mc2-25-3",
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
          "id": "mc2-25-4",
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
          "id": "ms2-25-1",
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
          "id": "ms2-25-2",
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
          "id": "ms2-25-3",
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
        "id": "fc2-25-1",
        "front": "¿Qué es un soft link?",
        "back": "Un link simbólico parecido a un acceso directo: en lugar de apuntar al inodo como el hard link, apunta al nombre del archivo."
      },
      {
        "id": "fc2-25-2",
        "front": "¿Qué pasa con un soft link si se borra el original?",
        "back": "Pierde su referencia y queda huérfano (roto). Si en cambio se borra el soft link, el archivo original sigue existiendo."
      },
      {
        "id": "fc2-25-3",
        "front": "Dos ventajas del soft link sobre el hard link",
        "back": "Puede apuntar fuera del filesystem (cruzar filesystems) y puede apuntar a directorios."
      },
      {
        "id": "fc2-25-4",
        "front": "¿Cómo se crea un soft link?",
        "back": "Con <code>ln -s \"archivo al que apunto\" \"nombre del soft link\"</code>. La opción <code>-s</code> lo hace simbólico."
      },
      {
        "id": "fc2-25-5",
        "front": "¿Cómo se identifica un soft link en <code>ls -l</code>?",
        "back": "Por el primer carácter, que pasa a ser <code>l</code> (link), y por la flecha -> que muestra hacia qué archivo físico apunta."
      },
      {
        "id": "fc2-25-6",
        "front": "¿Comparten inodo el soft link y el original?",
        "back": "No: el soft link tiene un inodo distinto (1931 vs 1970 en el ejemplo). El hard link sí comparte inodo con el original."
      },
      {
        "id": "fc2-25-7",
        "front": "Hard vs soft: ¿cuál resiste el movimiento del original?",
        "back": "El hard link resiste el movimiento (sí). El soft link puede romperse al moverse el original (no)."
      },
      {
        "id": "fc2-25-8",
        "front": "Regla rápida hard vs soft",
        "back": "Cruzar filesystems o apuntar a directorio -> soft link. Sobrevivir al borrado del original con todo en el mismo filesystem -> hard link."
      }
    ]
  },
  "26": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-26-1",
          "q": "El gestor de arranque se ejecuta inmediatamente después de que la BIOS o UEFI inicializa el hardware, y al terminar transfiere el control al kernel.",
          "a": true,
          "explain": "Exacto: el gestor de arranque corre justo después de la BIOS/UEFI, permite elegir el SO y al terminar le pasa la posta al kernel."
        },
        {
          "id": "tf2-26-2",
          "q": "LILO contaba con interfaz gráfica y permitía cambiar su configuración sin reinstalarlo.",
          "a": false,
          "explain": "Falso: LILO no tenía interfaz gráfica y cualquier cambio en su configuración requería reinstalarlo, lo que lo hacía poco flexible. Su ventaja era ser ligero y rápido."
        },
        {
          "id": "tf2-26-3",
          "q": "El MBR tiene un tamaño de 512 bytes y es la primera sección del disco, también conocida como sector 0.",
          "a": true,
          "explain": "Correcto: el MBR (Master Boot Record) es el sector 0 del disco, mide 512 bytes y es crucial en el arranque."
        },
        {
          "id": "tf2-26-4",
          "q": "El MBR soporta discos de cualquier tamaño y un máximo de 4 particiones primarias.",
          "a": false,
          "explain": "El MBR solo admite discos de hasta 2 TB por usar direcciones de 32 bits. Lo de las 4 particiones primarias sí es cierto, pero el tamaño está mal."
        },
        {
          "id": "tf2-26-5",
          "q": "El comando <code>update-grub</code> genera el archivo grub.cfg basándose en los cambios de /etc/default/grub y /etc/grub.d/.",
          "a": true,
          "explain": "Tal cual: <code>update-grub</code> regenera grub.cfg tomando los cambios hechos en /etc/default/grub y en los scripts de /etc/grub.d/."
        }
      ],
      "mc": [
        {
          "id": "mc2-26-1",
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
          "id": "mc2-26-2",
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
          "id": "mc2-26-3",
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
          "id": "mc2-26-4",
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
          "id": "mc2-26-5",
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
          "id": "ms2-26-1",
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
          "id": "ms2-26-2",
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
          "id": "ms2-26-3",
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
        "id": "fc2-26-1",
        "front": "¿Qué es un gestor de arranque?",
        "back": "Software que corre justo después de que la BIOS/UEFI inicializa el hardware. Permite seleccionar entre distintos sistemas operativos y luego transfiere el control al kernel."
      },
      {
        "id": "fc2-26-2",
        "front": "¿Cuáles son los principales gestores de arranque en Linux?",
        "back": "LILO (Linux Loader, el más viejo) y GRUB (Grand Unified Bootloader, el que se usa hoy)."
      },
      {
        "id": "fc2-26-3",
        "front": "Características de LILO",
        "back": "Confiable pero limitado: sin interfaz gráfica y había que reinstalarlo ante cualquier cambio de config. Su ventaja era ser ligero y rápido."
      },
      {
        "id": "fc2-26-4",
        "front": "¿Qué es el MBR y cuánto mide?",
        "back": "El Master Boot Record es la primera sección del disco (sector 0), mide 512 bytes y es crucial en el proceso de arranque."
      },
      {
        "id": "fc2-26-5",
        "front": "Distribución de los 512 bytes del MBR",
        "back": "446 bytes para el código del gestor de arranque, 64 bytes para la tabla de particiones y 2 bytes para la firma que indica que el disco es arrancable."
      },
      {
        "id": "fc2-26-6",
        "front": "Las tres etapas de GRUB sobre el MBR",
        "back": "Etapa 1 en los primeros 446 bytes del MBR; Etapa 1.5 en el espacio entre el MBR y la primera partición (controladores de filesystems); Etapa 2 en el filesystem (config y menú, en /boot/grub)."
      },
      {
        "id": "fc2-26-7",
        "front": "Archivos importantes de GRUB 2",
        "back": "/etc/default/grub (config editable por el usuario), /boot/grub/grub.cfg (lista los SO, reemplaza al viejo menu.lst) y /etc/grub.d/ (scripts que arman grub.cfg)."
      },
      {
        "id": "fc2-26-8",
        "front": "<code>update-grub</code> vs <code>grub-install</code>",
        "back": "<code>update-grub</code> genera grub.cfg según los cambios en /etc/default/grub y /etc/grub.d/. <code>grub-install</code> instala GRUB en el MBR o partición y sirve para recuperarlo cuando falla."
      }
    ]
  },
  "27": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-27-1",
          "q": "El POST es un diagnóstico del hardware que ejecuta el firmware de la BIOS o de UEFI al encender la máquina.",
          "a": true,
          "explain": "Tal cual: POST significa Power-On Self-Test y lo corre el firmware apenas apretás el botón. Si el chequeo del hardware pasa, recién ahí la BIOS llama al disco de arranque."
        },
        {
          "id": "tf2-27-2",
          "q": "El kernel es el primer proceso que se lanza en el booteo, antes de que GRUB cargue su imagen.",
          "a": false,
          "explain": "Al revés: primero GRUB carga la imagen del kernel y el initramfs, y después el kernel toma el control y lanza Init. El kernel no corre antes que el gestor de arranque."
        },
        {
          "id": "tf2-27-3",
          "q": "El initramfs es un sistema de archivos temporal que se monta durante la carga del kernel.",
          "a": true,
          "explain": "Cuando GRUB carga el kernel, este detecta dispositivos y monta el initramfs, un FS temporal, antes de pasarle el control al proceso Init."
        },
        {
          "id": "tf2-27-4",
          "q": "El montaje del filesystem en modo read-write según /etc/fstab ocurre antes de que arranquen los servicios básicos.",
          "a": false,
          "explain": "Es al revés: primero se activan los servicios y demonios, y una vez operativos los servicios básicos, recién ahí se monta el FS en read-write activando las particiones de /etc/fstab."
        },
        {
          "id": "tf2-27-5",
          "q": "Para mostrar la pantalla de login en consola se puede usar agetty, y en entorno gráfico gdm o lightdm.",
          "a": true,
          "explain": "Exacto: el paso 7 lanza el programa de inicio de sesión. En consola suele ser agetty y en gráfico gdm o lightdm."
        }
      ],
      "mc": [
        {
          "id": "mc2-27-1",
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
          "id": "mc2-27-2",
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
          "id": "mc2-27-3",
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
          "id": "mc2-27-4",
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
          "id": "mc2-27-5",
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
          "id": "ms2-27-1",
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
          "id": "ms2-27-2",
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
          "id": "ms2-27-3",
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
        "id": "fc2-27-1",
        "front": "¿Qué significa POST y quién lo ejecuta?",
        "back": "Power-On Self-Test: un diagnóstico del hardware que ejecuta el firmware de la BIOS o de UEFI al encender la máquina. Si tiene éxito, la BIOS llama al disco de arranque."
      },
      {
        "id": "fc2-27-2",
        "front": "Función de GRUB en el booteo",
        "back": "Es el gestor de arranque. La BIOS localiza el MBR o GPT, GRUB recorre las etapas del bootloader, presenta el menú de SOs y carga la imagen del kernel."
      },
      {
        "id": "fc2-27-3",
        "front": "¿Qué es el initramfs?",
        "back": "Un sistema de archivos temporal que el kernel monta durante su carga, antes de transferir el control al proceso Init."
      },
      {
        "id": "fc2-27-4",
        "front": "Primer proceso del sistema (PID 1)",
        "back": "El kernel lanza Init (tradicional) o systemd (distros modernas). Ejecuta scripts de arranque y configura runlevels o targets."
      },
      {
        "id": "fc2-27-5",
        "front": "¿Cuándo se monta el filesystem en read-write?",
        "back": "Una vez que los servicios básicos están operativos. Se montan las particiones adicionales definidas en /etc/fstab en modo read-write."
      },
      {
        "id": "fc2-27-6",
        "front": "Programas que muestran la pantalla de login",
        "back": "En consola: agetty. En entorno gráfico: gdm o lightdm."
      },
      {
        "id": "fc2-27-7",
        "front": "¿Cómo ver el log del último booteo?",
        "back": "Con journalctl -b. Durante el arranque también podés presionar Esc o Shift para ver el output del kernel en tiempo real."
      },
      {
        "id": "fc2-27-8",
        "front": "Los 8 pasos del booteo en orden",
        "back": "POST, carga de GRUB, carga del kernel, Init/systemd, activación de servicios, montaje del filesystem, inicio de la interfaz de login e inicio de sesión del usuario."
      }
    ]
  },
  "28": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-28-1",
          "q": "Init es el primer proceso que arranca el sistema operativo y por eso su PID es 1.",
          "a": true,
          "explain": "Init se inicia ni bien arranca el SO y sigue corriendo hasta que se apaga. Por ser el primer proceso, su PID es 1."
        },
        {
          "id": "tf2-28-2",
          "q": "Init nació con Linux y luego UNIX lo adoptó bajo el diseño de System V.",
          "a": false,
          "explain": "Es al revés: Init nació con UNIX bajo el diseño de System V (sysv init), y Linux lo heredó."
        },
        {
          "id": "tf2-28-3",
          "q": "El runlevel predeterminado en Debian es el 2 (multiusuario sin red).",
          "a": true,
          "explain": "El texto indica que el runlevel por defecto en Debian es el 2, que corresponde a multiusuario sin red."
        },
        {
          "id": "tf2-28-4",
          "q": "El archivo /etc/inittab define el runlevel predeterminado y qué procesos deben iniciarse, y queda obsoleto en sistemas con systemd.",
          "a": true,
          "explain": "Tal cual: /etc/inittab es el archivo principal de configuración de Init, define el runlevel por defecto y los procesos a iniciar, y queda obsoleto cuando hay systemd."
        },
        {
          "id": "tf2-28-5",
          "q": "El comando init 6 sirve para apagar el sistema.",
          "a": false,
          "explain": "init 6 reinicia el sistema (equivale a reboot o shutdown -r now). El apagado es init 0 o shutdown -h now."
        }
      ],
      "mc": [
        {
          "id": "mc2-28-1",
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
          "id": "mc2-28-2",
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
          "id": "mc2-28-3",
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
          "id": "mc2-28-4",
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
          "id": "mc2-28-5",
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
          "id": "ms2-28-1",
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
          "id": "ms2-28-2",
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
          "id": "ms2-28-3",
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
        "id": "fc2-28-1",
        "front": "¿Qué es Init y cuál es su PID?",
        "back": "Proceso (de Initialization) que arranca ni bien inicia el SO y corre hasta que se apaga. Inicia todos los servicios necesarios. Por ser el primer proceso, su PID es 1."
      },
      {
        "id": "fc2-28-2",
        "front": "Origen de Init",
        "back": "Nació con UNIX bajo el diseño de System V (sysv init) y Linux lo heredó. Ejecuta scripts de inicio de forma secuencial."
      },
      {
        "id": "fc2-28-3",
        "front": "¿Qué es un runlevel?",
        "back": "Un modo de operación del sistema; cada runlevel define un conjunto de servicios que se ejecutan. En Debian el predeterminado es el 2."
      },
      {
        "id": "fc2-28-4",
        "front": "¿Para qué sirve /etc/inittab?",
        "back": "Archivo principal de configuración de Init: define el runlevel predeterminado y qué procesos deben iniciarse. Queda obsoleto en sistemas con systemd."
      },
      {
        "id": "fc2-28-5",
        "front": "/etc/init.d/ vs /etc/rcX.d/",
        "back": "/etc/init.d/ contiene los scripts de inicio de servicios y su administración de estado. /etc/rcX.d/ (X = runlevel) tiene enlaces simbólicos a esos scripts."
      },
      {
        "id": "fc2-28-6",
        "front": "Opciones del comando service",
        "back": "status, start, stop, restart, enable (arranca en el booteo) y disable (lo deshabilita)."
      },
      {
        "id": "fc2-28-7",
        "front": "Comandos para cambiar de runlevel",
        "back": "init 3 (multiusuario sin GUI), init 1 (monousuario), init 0 (apagar, o shutdown -h now), init 6 (reiniciar, o reboot / shutdown -r now)."
      },
      {
        "id": "fc2-28-8",
        "front": "¿Init sigue funcionando en distros modernas?",
        "back": "Sí, por retrocompatibilidad: comandos como service apache2 start funcionan, pero por debajo invocan a systemctl."
      }
    ]
  },
  "29": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-29-1",
          "q": "Por convención UNIX, el nombre de los daemons termina en \"d\" para reconocerlos rápido, como en systemd.",
          "a": true,
          "explain": "Exacto: la convención UNIX es agregar una \"d\" al final de los daemons. Por eso systemd lleva esa d al final."
        },
        {
          "id": "tf2-29-2",
          "q": "Systemd sustituyó a Init a partir de Debian 8 \"Jessie\" en 2015.",
          "a": true,
          "explain": "Tal cual lo dice el texto: systemd reemplazó a init desde Debian 8 \"Jessie\", lanzada en 2015."
        },
        {
          "id": "tf2-29-3",
          "q": "A diferencia de Init, systemd no es el padre de los demás procesos ni recibe el PID 1.",
          "a": false,
          "explain": "Al contrario: igual que Init, systemd es el padre de todos los demás procesos y es el primero en arrancar, por lo que generalmente recibe PID 1."
        },
        {
          "id": "tf2-29-4",
          "q": "El emergency.target levanta solo una consola raíz, sin servicios.",
          "a": true,
          "explain": "Correcto: emergency.target es el modo emergencia, con solo consola raíz y sin servicios. El de mantenimiento más amplio es rescue.target."
        },
        {
          "id": "tf2-29-5",
          "q": "La opción -u de journalctl muestra el registro del arranque actual.",
          "a": false,
          "explain": "-u muestra los registros de un servicio específico. El registro del arranque actual se ve con -b."
        }
      ],
      "mc": [
        {
          "id": "mc2-29-1",
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
          "id": "mc2-29-2",
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
          "id": "mc2-29-3",
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
          "id": "mc2-29-4",
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
          "id": "mc2-29-5",
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
          "id": "ms2-29-1",
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
          "id": "ms2-29-2",
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
          "id": "ms2-29-3",
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
        "id": "fc2-29-1",
        "front": "¿Qué es systemd y por qué termina en \"d\"?",
        "back": "Es un daemon de gestión del sistema. La \"d\" final sigue la convención UNIX de marcar los daemons. Igual que Init, es padre de los demás procesos y suele tener PID 1."
      },
      {
        "id": "fc2-29-2",
        "front": "¿Desde cuándo systemd reemplaza a Init?",
        "back": "Desde Debian 8 \"Jessie\" (2015), pensado como solución más eficiente para la inicialización del sistema."
      },
      {
        "id": "fc2-29-3",
        "front": "¿Qué son los targets?",
        "back": "Objetivos o estados del sistema en systemd que agrupan servicios y configuraciones para un propósito. Permiten manejar dependencias entre servicios; reemplazan a los runlevels."
      },
      {
        "id": "fc2-29-4",
        "front": "multi-user.target vs graphical.target",
        "back": "multi-user.target es el sistema completo en modo texto (similar al runlevel 3). graphical.target es el modo gráfico con escritorio (similar al runlevel 5)."
      },
      {
        "id": "fc2-29-5",
        "front": "rescue.target vs emergency.target",
        "back": "rescue.target es el modo rescate para mantenimiento. emergency.target es el modo emergencia: solo consola raíz, sin servicios."
      },
      {
        "id": "fc2-29-6",
        "front": "/etc/systemd/system/ vs /lib/systemd/system/",
        "back": "/etc/systemd/system/ es donde se habilitan, deshabilitan o modifican los servicios. /lib/systemd/system/ guarda las unidades y servicios predeterminados del SO y los paquetes."
      },
      {
        "id": "fc2-29-7",
        "front": "journald vs logind",
        "back": "journald (journald.conf) gestiona los logs del sistema. logind (logind.conf) maneja las sesiones de los usuarios."
      },
      {
        "id": "fc2-29-8",
        "front": "Opciones de journalctl",
        "back": "-u ver registros de un servicio específico, -b ver el registro del arranque actual, -f ver registros en tiempo real (modo follow)."
      }
    ]
  },
  "30": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-30-1",
          "q": "Los alias sirven para reemplazar comandos simples o complejos por otros más cortos.",
          "a": true,
          "explain": "Esa es justamente la idea del alias: cambiar comandos largos por uno corto para ahorrar tiempo y evitar errores de tipeo."
        },
        {
          "id": "tf2-30-2",
          "q": "Un alias definido directamente en la terminal queda permanente aunque cierres la sesión.",
          "a": false,
          "explain": "No: definir un alias en la terminal es temporal, dura hasta que cierres la sesión. Para que sea permanente hay que ponerlo en un archivo de configuración como .bashrc."
        },
        {
          "id": "tf2-30-3",
          "q": "Tras editar .bashrc, ejecutar source ~/.bashrc recarga la configuración sin tener que reabrir la sesión.",
          "a": true,
          "explain": "Tal cual: source ~/.bashrc hace que la sesión actual recargue la configuración sin necesidad de cerrar y volver a abrir la terminal."
        },
        {
          "id": "tf2-30-4",
          "q": "Los archivos de configuración de usuario se ubican en /etc y afectan a todos los usuarios.",
          "a": false,
          "explain": "Los de usuario están en el home, arrancan con punto (ocultos) y son específicos de cada uno. Los que viven en /etc y afectan a todos son los archivos del sistema."
        },
        {
          "id": "tf2-30-5",
          "q": "El archivo /etc/environment solo define variables de entorno globales, sin ejecutar comandos ni scripts.",
          "a": true,
          "explain": "Correcto: a diferencia de los otros archivos globales, /etc/environment únicamente define variables de entorno; no ejecuta comandos ni scripts."
        }
      ],
      "mc": [
        {
          "id": "mc2-30-1",
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
          "id": "mc2-30-2",
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
          "id": "mc2-30-3",
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
          "id": "mc2-30-4",
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
          "id": "mc2-30-5",
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
          "id": "ms2-30-1",
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
          "id": "ms2-30-2",
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
          "id": "ms2-30-3",
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
        "id": "fc2-30-1",
        "front": "¿Para qué sirve un alias?",
        "back": "Para reemplazar comandos simples o complejos por otros más cortos. Ahorra tiempo, minimiza errores tipográficos y permite personalizar comandos predeterminados."
      },
      {
        "id": "fc2-30-2",
        "front": "Ejemplos de alias del texto",
        "back": "alias ll='ls -lh', alias oculto='ls -la' y alias actualizar='sudo apt update && sudo apt upgrade' (comandos encadenados)."
      },
      {
        "id": "fc2-30-3",
        "front": "¿Por qué un alias de la terminal es temporal?",
        "back": "Porque dura solo hasta que cierres la sesión. Para hacerlo permanente hay que ponerlo en un archivo de configuración del usuario o del sistema, como .bashrc."
      },
      {
        "id": "fc2-30-4",
        "front": "¿Qué hace source ~/.bashrc?",
        "back": "Hace que la sesión actual recargue la configuración de .bashrc sin necesidad de cerrar y volver a abrir la terminal."
      },
      {
        "id": "fc2-30-5",
        "front": "Archivos de configuración de usuario",
        "back": "Están en el home, empiezan con punto (ocultos). .bashrc (config de bash: alias, funciones, variables), .profile (cualquier shell, al iniciar sesión) y .bash_profile (específico de bash, preferido sobre .profile si existe)."
      },
      {
        "id": "fc2-30-6",
        "front": "Archivos de configuración del sistema",
        "back": "Afectan a todos los usuarios y viven en /etc: /etc/bash.bashrc (global de bash), /etc/profile (global equivalente a .profile) y /etc/environment (solo variables de entorno globales)."
      },
      {
        "id": "fc2-30-7",
        "front": "Particularidad de /etc/environment",
        "back": "Solo define variables de entorno globales para todos los usuarios y procesos; no ejecuta comandos ni scripts. Ejemplo típico: JAVA_HOME=\"/usr/lib/jvm/java-8-openjdk-amd64\"."
      },
      {
        "id": "fc2-30-8",
        "front": "Regla mental para elegir archivo",
        "back": "Alias/funciones solo para vos → ~/.bashrc. Variable global para todo el sistema → /etc/environment. Algo al iniciar sesión que corra cualquier shell → .profile."
      }
    ]
  },
  "31": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-31-1",
          "q": "El comando <code>kill</code> dispone de un total de 64 señales distintas.",
          "a": true,
          "explain": "Tal cual: aunque se llame kill, maneja 64 señales en total, y varias ni siquiera terminan procesos."
        },
        {
          "id": "tf2-31-2",
          "q": "SIGTERM (15) es la señal predeterminada que envía <code>kill</code> cuando no se especifica ninguna.",
          "a": true,
          "explain": "Correcto. Si tirás kill PID a secas, va SIGTERM: le pide al proceso que termine ordenado y libere recursos."
        },
        {
          "id": "tf2-31-3",
          "q": "SIGKILL (9) le da al proceso la oportunidad de realizar tareas de limpieza antes de cerrarse.",
          "a": false,
          "explain": "Falso. Justamente SIGKILL es el mazazo: fuerza la finalización inmediata sin chance de limpiar nada, por eso puede traer problemas."
        },
        {
          "id": "tf2-31-4",
          "q": "SIGSTOP (19) puede ser ignorada o bloqueada por el programa que la recibe.",
          "a": false,
          "explain": "Falso. SIGSTOP no se puede ignorar ni bloquear: detiene el proceso sí o sí, libera CPU pero lo deja en memoria."
        },
        {
          "id": "tf2-31-5",
          "q": "El comando <code>killall</code> envía una señal a todos los procesos que coincidan con un nombre de programa.",
          "a": true,
          "explain": "Así es. En vez de cazar el PID, killall le manda la señal a todos los procesos que se llamen igual, por ejemplo killall -9 chrome."
        }
      ],
      "mc": [
        {
          "id": "mc2-31-1",
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
          "id": "mc2-31-2",
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
          "id": "mc2-31-3",
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
          "id": "mc2-31-4",
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
          "id": "mc2-31-5",
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
          "id": "ms2-31-1",
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
          "id": "ms2-31-2",
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
          "id": "ms2-31-3",
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
        "id": "fc2-31-1",
        "front": "¿Para qué sirve el comando kill?",
        "back": "Para enviar señales a procesos en ejecución, que pueden terminarlos, suspenderlos o continuarlos. Cuenta con 64 señales distintas."
      },
      {
        "id": "fc2-31-2",
        "front": "SIGTERM (15)",
        "back": "Solicita al proceso que termine de forma ordenada liberando recursos. Es la señal predeterminada si no se especifica ninguna."
      },
      {
        "id": "fc2-31-3",
        "front": "SIGKILL (9)",
        "back": "Fuerza la finalización inmediata del proceso sin permitirle limpiar nada. Se usa cuando no responde a SIGTERM. Se invoca con kill -9 o kill -KILL."
      },
      {
        "id": "fc2-31-4",
        "front": "SIGHUP (1)",
        "back": "Hace que el proceso relea su configuración sin detenerse del todo. Típica de daemons. Se invoca con kill -1 o kill -HUP."
      },
      {
        "id": "fc2-31-5",
        "front": "SIGSTOP (19) vs SIGTSTP (20)",
        "back": "Ambas suspenden sin terminar. SIGSTOP no se puede ignorar y libera CPU manteniéndolo en memoria; SIGTSTP es el equivalente a Ctrl+Z sobre un proceso en primer plano."
      },
      {
        "id": "fc2-31-6",
        "front": "SIGCONT (18)",
        "back": "Reanuda un proceso que había sido detenido previamente con SIGSTOP. Se invoca con kill -CONT o kill -18."
      },
      {
        "id": "fc2-31-7",
        "front": "¿Qué hace killall?",
        "back": "Envía una señal a todos los procesos que coincidan con un nombre de programa, en lugar de apuntar a un PID específico (ej. killall -9 chrome)."
      },
      {
        "id": "fc2-31-8",
        "front": "¿Qué es un demonio (daemon)?",
        "back": "Un programa que se ejecuta en segundo plano. Por eso señales como SIGHUP, que recargan configuración, tienen sentido sobre todo para ellos."
      }
    ]
  },
  "32": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-32-1",
          "q": "En Linux la extensión <code>.sh</code> es obligatoria para que el sistema pueda ejecutar un script.",
          "a": false,
          "explain": "Falso. Linux usa los 2 primeros bytes del archivo para clasificarlo; la extensión .sh es solo una convención para reconocerlo a simple vista."
        },
        {
          "id": "tf2-32-2",
          "q": "El shebang son los 2 primeros bytes del archivo y consisten en #! seguido del intérprete.",
          "a": true,
          "explain": "Correcto. Por ejemplo #!/bin/bash: esos primeros bytes le dicen a Linux qué intérprete usar para ejecutar el script."
        },
        {
          "id": "tf2-32-3",
          "q": "Invocar un script con <code>bash control.sh</code> requiere que el archivo tenga permisos de ejecución.",
          "a": false,
          "explain": "Falso. Al pasarle el script al intérprete con bash control.sh no hacen falta permisos de ejecución sobre el archivo."
        },
        {
          "id": "tf2-32-4",
          "q": "En BASH las variables son dinámicas: no hace falta declarar su tipo antes de usarlas.",
          "a": true,
          "explain": "Tal cual. En BASH definís la variable y le asignás un valor sin declarar tipo. La buena práctica es nombrarlas en mayúsculas."
        },
        {
          "id": "tf2-32-5",
          "q": "Las comillas simples permiten la expansión de variables igual que las comillas dobles.",
          "a": false,
          "explain": "Falso. Las comillas simples desactivan todos los caracteres especiales: todo queda literal. Las que expanden $variables son las comillas dobles."
        }
      ],
      "mc": [
        {
          "id": "mc2-32-1",
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
          "id": "mc2-32-2",
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
          "id": "mc2-32-3",
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
          "id": "mc2-32-4",
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
          "id": "mc2-32-5",
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
          "id": "ms2-32-1",
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
          "id": "ms2-32-2",
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
          "id": "ms2-32-3",
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
        "id": "fc2-32-1",
        "front": "¿Qué es un script?",
        "back": "Un archivo con una sucesión de comandos de Shell que se ejecutan en el orden en que se escriben, para automatizar tareas repetitivas o administrar el sistema."
      },
      {
        "id": "fc2-32-2",
        "front": "¿Qué es el shebang?",
        "back": "Los 2 primeros bytes del archivo (#! seguido del intérprete, ej. #!/bin/bash). Linux los usa para clasificar el archivo como script."
      },
      {
        "id": "fc2-32-3",
        "front": "¿Para qué sirve la extensión .sh en Linux?",
        "back": "Es solo convención para reconocer el script a simple vista. El SO no la necesita: clasifica por los 2 primeros bytes, no por la extensión."
      },
      {
        "id": "fc2-32-4",
        "front": "Permiso mínimo recomendado para un script",
        "back": "755 (rwx dueño, r-x grupo, r-x otros): el dueño lee/modifica/ejecuta y el resto puede leer y ejecutar."
      },
      {
        "id": "fc2-32-5",
        "front": "¿Cómo se define e invoca una variable en BASH?",
        "back": "Se define sin tipo asignando un valor (ej. SALUDO=Bienvenido) y se invoca anteponiendo $ al nombre (ej. echo $SALUDO). Buena práctica: nombres en mayúsculas."
      },
      {
        "id": "fc2-32-6",
        "front": "Variables intrínsecas comunes",
        "back": "$HOME (directorio del usuario), $USER (nombre del usuario), $PATH (directorios de búsqueda de comandos) y $PWD (directorio de trabajo actual)."
      },
      {
        "id": "fc2-32-7",
        "front": "Variables especiales: $0, $1…$n, $#, $?, $$, $!",
        "back": "$0 nombre del script, $1…$n argumentos, $# total de argumentos, $? return code del comando anterior, $$ PID del script, $! último proceso en background."
      },
      {
        "id": "fc2-32-8",
        "front": "Comillas dobles vs simples vs acento invertido",
        "back": "Dobles: expanden $variables. Simples: todo literal, no expanden nada. Acento invertido: corre el comando y reemplaza con su salida."
      }
    ]
  },
  "33": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-33-1",
          "q": "La palabra clave <code>fi</code> es \"if\" invertido y marca el cierre de la estructura condicional.",
          "a": true,
          "explain": "Correcto. fi cierra el if, igual que esac cierra el case y done cierra los bucles."
        },
        {
          "id": "tf2-33-2",
          "q": "El bucle <code>until</code> ejecuta su bloque mientras la condición sea verdadera y se detiene cuando es falsa.",
          "a": false,
          "explain": "Falso. Eso es el while. El until es al revés: repite HASTA que la condición sea verdadera, o sea se detiene cuando se cumple."
        },
        {
          "id": "tf2-33-3",
          "q": "En BASH los índices de los vectores arrancan en 0.",
          "a": true,
          "explain": "Tal cual. Por eso ${PERSONAJES[0]} accede al primer elemento del vector."
        },
        {
          "id": "tf2-33-4",
          "q": "El corchete doble <code>[[ ]]</code> permite usar operadores de comparación aritmética como &lt; y &gt;, además de los clásicos -eq, -lt.",
          "a": true,
          "explain": "Correcto. El doble corchete es más flexible: suma <, >, etc. El simple es más viejo y obliga a usar -eq, -lt y compañía."
        },
        {
          "id": "tf2-33-5",
          "q": "El operador <code>-d</code> sirve para comprobar que un archivo o directorio tiene permisos de lectura.",
          "a": false,
          "explain": "Falso. -d verifica que sea un directorio. El de permisos de lectura es -r."
        }
      ],
      "mc": [
        {
          "id": "mc2-33-1",
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
          "id": "mc2-33-2",
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
          "id": "mc2-33-3",
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
          "id": "mc2-33-4",
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
          "id": "mc2-33-5",
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
          "id": "ms2-33-1",
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
          "id": "ms2-33-2",
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
          "id": "ms2-33-3",
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
        "id": "fc2-33-1",
        "front": "¿Para qué sirven las estructuras de control?",
        "back": "Permiten que un script tome decisiones según condiciones evaluadas mediante comparaciones, manejando el flujo de ejecución de forma dinámica."
      },
      {
        "id": "fc2-33-2",
        "front": "Palabras clave del IF",
        "back": "if (si), elif (también si), else (de cualquier otra manera), then (entonces) y fi (if invertido, marca el cierre). Las imprescindibles son las 3 últimas."
      },
      {
        "id": "fc2-33-3",
        "front": "WHILE vs UNTIL",
        "back": "WHILE repite mientras la condición sea verdadera. UNTIL es lo opuesto: repite hasta que la condición sea verdadera, deteniéndose cuando se cumple."
      },
      {
        "id": "fc2-33-4",
        "front": "Corchete simple [ ] vs doble [[ ]]",
        "back": "El simple es más antiguo y menos flexible (solo -eq, -lt, -d, etc.). El doble suma operadores aritméticos como <, >, >=, <=."
      },
      {
        "id": "fc2-33-5",
        "front": "¿Qué hace CASE?",
        "back": "Evalúa una variable o cadena contra múltiples patrones y ejecuta el bloque correspondiente. Se cierra con esac. Más claro que un if-elif largo."
      },
      {
        "id": "fc2-33-6",
        "front": "Formas de usar el bucle FOR",
        "back": "Recorre listas de números, rangos como {1..5}, rangos con paso {1..10..2} o la salida de un comando con $(...)."
      },
      {
        "id": "fc2-33-7",
        "front": "Vectores (arrays) en BASH",
        "back": "Colecciones de datos indexados desde 0. Se accede con ${VECTOR[i]} y se recorren con un bucle usando ${VECTOR[@]}, donde @ indica todo el contenido."
      },
      {
        "id": "fc2-33-8",
        "front": "¿Qué es una función en BASH?",
        "back": "Un bloque de comandos agrupados bajo un nombre que puede invocarse múltiples veces, evitando repetir código."
      }
    ]
  },
  "34": {
    "quiz2": {
      "tf": [
        {
          "id": "tf2-34-1",
          "q": "Cron es un demonio que permite programar la ejecución automática de tareas como scripts o comandos.",
          "a": true,
          "explain": "Correcto. El servicio se llama crond (cron daemon) y sirve para calendarizar backups, reportes, limpieza, etc."
        },
        {
          "id": "tf2-34-2",
          "q": "El comando <code>crontab -r</code> lista el crontab actual del usuario.",
          "a": false,
          "explain": "Falso. crontab -r ELIMINA el crontab del usuario. El que lista es crontab -l."
        },
        {
          "id": "tf2-34-3",
          "q": "En el campo de día de la semana del crontab, tanto el 0 como el 7 representan al domingo.",
          "a": true,
          "explain": "Tal cual. El día de la semana va de 0 a 7, y tanto 0 como 7 son domingo."
        },
        {
          "id": "tf2-34-4",
          "q": "Los scripts colocados en /etc/cron.daily se ejecutan aunque no tengan permisos de ejecución.",
          "a": false,
          "explain": "Falso. El apunte avisa que esos scripts necesitan permisos de ejecución; si no los tienen, cron los ignora."
        },
        {
          "id": "tf2-34-5",
          "q": "Si no existen ni cron.allow ni cron.deny, no hay restricciones de acceso para nadie.",
          "a": true,
          "explain": "Correcto. Sin esos archivos no hay lista blanca ni negra, así que cualquiera puede usar cron."
        }
      ],
      "mc": [
        {
          "id": "mc2-34-1",
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
          "id": "mc2-34-2",
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
          "id": "mc2-34-3",
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
          "id": "mc2-34-4",
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
          "id": "mc2-34-5",
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
          "id": "ms2-34-1",
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
          "id": "ms2-34-2",
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
          "id": "ms2-34-3",
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
        "id": "fc2-34-1",
        "front": "¿Qué es cron?",
        "back": "Un demonio (crond) que programa la ejecución automática de tareas: backups, reportes, limpieza, control de espacio o cualquier cosa que se quiera calendarizar."
      },
      {
        "id": "fc2-34-2",
        "front": "Comandos crontab -e / -l / -r",
        "back": "-e abre el editor del crontab del usuario (lo crea si no existe), -l lista el crontab actual y -r elimina el crontab del usuario."
      },
      {
        "id": "fc2-34-3",
        "front": "Los 5 campos de tiempo del crontab",
        "back": "Minuto (0-59), Hora (0-23), Día del mes (1-31), Mes (1-12 o nombre en inglés) y Día de la semana (0-7, donde 0 y 7 son domingo), seguidos del comando."
      },
      {
        "id": "fc2-34-4",
        "front": "Caracteres especiales del crontab",
        "back": "* = todo, - = rango (1-5), , = lista (1,15), / = incremento cada N (*/15 = cada 15 minutos)."
      },
      {
        "id": "fc2-34-5",
        "front": "¿Qué hace la expresión 15 8 * * *?",
        "back": "Ejecuta el comando a las 8:15 a.m. de cada día (minuto 15, hora 8, cualquier día del mes, mes y día de la semana)."
      },
      {
        "id": "fc2-34-6",
        "front": "Directorios predefinidos de cron",
        "back": "/etc/cron.hourly (cada hora), /etc/cron.daily (diario), /etc/cron.weekly (semanal) y /etc/cron.monthly (mensual). Los scripts deben tener permisos de ejecución."
      },
      {
        "id": "fc2-34-7",
        "front": "cron.allow vs cron.deny",
        "back": "cron.deny es lista negra (bloquea usuarios); cron.allow es lista blanca (solo los listados pueden usar cron). Si no existe ninguno, no hay restricciones."
      },
      {
        "id": "fc2-34-8",
        "front": "¿Por qué una tarea funciona en la terminal pero no en cron?",
        "back": "Porque cron usa el shell y el PATH definidos en el crontab, no los del usuario. La solución suele ser usar rutas absolutas o setear el PATH al inicio del script."
      }
    ]
  }
};
