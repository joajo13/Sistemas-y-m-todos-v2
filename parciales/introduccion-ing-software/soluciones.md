# Soluciones — Parciales de práctica de Introducción a la Ingeniería de Software

> ⚠️ **Spoiler.** No abras este archivo hasta haber resuelto los parciales. Para las preguntas de desarrollo se incluye una respuesta modelo breve indicando los conceptos del apunte que se esperaban; no hace falta repetirla textual, alcanza con cubrir esas ideas.

---

## Parcial N.º 1

**1. (MC) → A.** El mockup es una representación visual estática que muestra estructura, contenidos y funciones básicas pero **sin interactividad real**. (B describe el prototipo funcional, que sí simula interactividad; ese es el contraste clave.)

**2. (V/F) → Falso.** Si el actor es una persona, **nunca se coloca su nombre, sino el rol** que representa. Esto es porque la misma persona puede interactuar con el sistema desde roles diferentes (ej.: la misma persona actúa como "empleado" al registrar entradas/salidas y como "bibliotecario" al cargar libros nuevos).

**3. (MC) → A.** Cada caso de uso puede ser iniciado por **un único actor**. Si más de un actor puede iniciarlo, se resuelve mediante una **relación de herencia entre actores**.

**4. (MC) → A.** Negociable significa que las historias **pueden ser cambiadas hasta tanto sean parte de una iteración**. (C corresponde a *Estimable*; D corresponde a *Valorable*.)

**5. (Desarrollo).** Conceptos esperados:
- Un prototipo es un **modelo o maqueta que muestra las interfaces entre el sistema y el usuario**; simula los aspectos más visuales (entradas/salidas, componentes gráficos) y los conceptos a tratar, buscando la mayor similitud con el sistema final.
- Es especialmente útil cuando: **los requerimientos cambian rápidamente**, **el cliente no entrega una lista completa de requerimientos**, o **ni el cliente ni el equipo conocen bien el área de aplicación**.
- Principal desventaja: **desde el comienzo es imposible saber cuánto tiempo tomará lograr un producto aceptable** (incertidumbre en el ida y vuelta de feedback).
- Suma puntos mencionar que sirve para obtener feedback y reducir errores por mala comunicación entre usuario y analista.

**6. (MC) → A.** «¿Estamos construyendo el producto correcto?» = **validación**. (Verificación es «¿estamos construyendo el producto correctamente?».)

**7. (Desarrollo).** Conceptos esperados:
- La prueba de aceptación la realizan **los usuarios** para verificar que el sistema **se ajusta a sus requerimientos**.
- Es una técnica de **caja negra** (no mira el interior del código); los casos de prueba se basan en la especificación de requerimientos.
- Se trabaja con **datos reales del cliente, no ficticios**, porque los datos reales pueden disparar errores que no aparecieron en pruebas anteriores (tanto en el sistema como en los propios requerimientos).
- Es una prueba de **validación**, no de búsqueda de defectos.

**8. (Desarrollo).** Conceptos esperados — las tres preguntas:
1. **¿Quién es el beneficiario?** (interesados/actores que se benefician).
2. **¿Qué se quiere hacer?** (descripción de alto nivel de la funcionalidad).
3. **¿Cuál es el beneficio?** (el "por qué" / valor de negocio).
- Formato recomendado: **"Como (rol) yo quiero (algo) para (beneficiarme)"**.
- Ejemplo (del apunte): *"Como bibliotecario de la institución, yo quiero revisar el historial de préstamos para identificar los libros con mayor demanda para reponer."* (Vale cualquier ejemplo bien armado con el formato.)

**9. (Desarrollo).** Conceptos esperados:
- Importancia: cuando aparece un cambio (o se modifica diseño/código) hay que saber **qué requerimientos se ven afectados y dónde tocar**; sin trazabilidad, no se puede actualizar de forma consistente.
- **Trazabilidad remota:** hace referencia a las **fases previas** al desarrollo; referencia el **origen o fuente** del requerimiento. Cobra más importancia cuando el producto pasa a ser operado y mantenido.
- **Trazabilidad futura:** apunta a las **fases posteriores** del desarrollo; para que funcione, cada requerimiento necesita un **nombre o referencia única**.

**10. (Desarrollo).** Conceptos esperados:
- **Relación de extensión:** un caso extiende a otro cuando agrega una **parte de funcionalidad que no siempre ocurre** (podría darse o no); no es un error ni una excepción. Ejemplo del apunte (Jacobson): *"Cenar" extiende a "Tomar café"*.
- **Relación de uso:** se da cuando un caso de uso está **incluido en otro** porque es **funcionalidad común** a varios casos. Lo incluido debe ser un caso de uso en sí mismo. Ejemplo: *"Registrar préstamo"* y *"Registrar devolución"* ambos **usan** *"Consultar socio"*.
- Aclaración válida: estas relaciones se dan **únicamente entre casos de uso** (no con actores) y ambas partes deben cumplir la definición de caso de uso.

---

## Parcial N.º 2

**1. (V/F) → Falso.** En el testing ágil **desaparece la fase de pruebas tradicional** que sí existía en los métodos tradicionales; las pruebas se diseñan durante el análisis y **todos los individuos tienen habilidades de probadores**.

**2. (MC) → A.** La prueba de integración prueba **las respuestas de grupos de módulos interconectados** y detecta fallos en la interacción entre componentes. (B = prueba de unidad; C = prueba de sistema; D = prueba de aceptación.)

**3. (MC) → A.** El **objeto de entidad** modela la información que el sistema maneja a lo largo del tiempo y que **sobrevive a los casos de uso**. (D, "objeto de frontera temporal", no existe en el apunte.)

**4. (Desarrollo).** Conceptos esperados:
- Un diagrama de secuencia muestra la **interacción entre los objetos desde un punto de vista temporal**; describe cómo colaboran un grupo de objetos para realizar una actividad y suele capturar el comportamiento de **un caso de uso** en particular (incluye emisor y receptor de cada mensaje).
- El orden temporal está dado por **cuán arriba está la flecha**: las flechas **más altas se ejecutan antes** que las que están debajo (se lee de arriba hacia abajo).

**5. (MC) → A.** La iteración se denota con el símbolo `*` previo a la condición entre corchetes: `*[condición] Nombre_Mensaje`. (B es una condición simple; D corresponde a la representación de un mensaje recursivo.)

**6. (Desarrollo).** Conceptos esperados — los tres tipos de objetos:
- **Interfaz:** permiten la **comunicación entre los actores y el sistema** (y viceversa); donde un actor habla con el sistema hay una interfaz.
- **Entidad:** modelan la **información que el sistema maneja a lo largo del tiempo**, que sobrevive a los casos de uso; suelen corresponder a conceptos del mundo real (aunque no siempre).
- **Control:** modelan la **funcionalidad que no se asigna naturalmente a ningún otro objeto**; no son interfaz ni información. Operan sobre varios objetos entidad y retornan el resultado a un objeto de interfaz.

**7. (MC) → A.** En el diagrama de colaboración los objetos aparecen **únicos**, conectados por **links**, y es **necesario numerar los mensajes** para indicar la secuencia. (Muestra la misma información que el de secuencia, sí permite condición e iteración con la misma notación, y el orden NO se infiere de la altura sino de la numeración.)

**8. (Desarrollo).** Conceptos esperados:
- La reingeniería es un **proceso mediante el cual se busca la mejora de un software existente**: puede implicar redocumentarlo, organizarlo/reestructurarlo, traducirlo a un lenguaje más moderno y actualizar la estructura y valores de los datos. Generalmente **sin cambiar su funcionalidad ni arquitectura**.
- Ventajas (al menos dos):
  1. **Disminuye el riesgo** frente a desarrollar desde cero, sobre todo en **sistemas críticos** de los que depende la operatoria de la empresa.
  2. **Menor costo:** aunque la reingeniería cuesta, **siempre será menor** que desarrollar un sistema completamente nuevo.

**9. (Desarrollo).** Conceptos esperados:
- **Línea de vida:** línea vertical (punteada) por debajo de cada objeto que representa **su existencia en el tiempo** dentro del diagrama.
- **Período de actividad:** el **tiempo que tarda un objeto en ejecutar una acción**; se representa con un **rectángulo vertical** sobre la línea de vida (objeto "activo").
- **Mensaje recursivo:** ocurre cuando un objeto **se manda un mensaje a sí mismo**; se representa por la **duplicación del rectángulo** de período de actividad (el objeto aparece como auto-activado).

**10. (Desarrollo).** Conceptos esperados:
- Los dos tipos son **diagrama de secuencia** y **diagrama de colaboración**.
- En común: **ambos describen la interacción entre objetos** (la misma información); el usuario elige cuál usar según le convenga.
- Énfasis: el **de secuencia enfatiza el tiempo** (altura de las flechas); el **de colaboración enfatiza la estructura** (links entre objetos).

---

## Parcial N.º 3

**1. (MC) → A.** En los sistemas de tiempo real la eficiencia **no se basa solo en la exactitud de los resultados, sino también en el momento en que los entrega**. (B es falso: importan los procesos, no el usuario —eso es de los SOTR—; C es falso: el intervalo suele ser muy pequeño; D es falso: la predictibilidad es una característica principal.)

**2. (MC) → A.** En un sistema distribuido el **fallo de una computadora no implica el fallo del sistema completo**, aunque el servicio puede quedar **un poco degradado**. (B describe lo contrario a un sistema distribuido; C es falso: sí se basan en sistemas abiertos y protocolos estándares; D es falso.)

**3. (V/F) → Falso.** La reingeniería generalmente se realiza **sin cambiar la funcionalidad ni la arquitectura** del sistema; los cambios son de redocumentación, reestructuración, traducción a un lenguaje más moderno y actualización de la estructura/valores de los datos.

**4. (MC) → A.** Una razón es que los métodos formales **no son escalables**: son exitosos en aplicaciones críticas pequeñas, pero al aumentar su tamaño se descontrola su realización. (B, C y D contradicen el apunte: sí tienen base matemática, sí sirven para sistemas críticos y producen especificaciones precisas y no ambiguas.)

**5. (Desarrollo).** Conceptos esperados:
- Un sistema embebido (o empotrado) es aquel en el que **las funciones del software no suelen estar a la vista del usuario**; está diseñado para realizar **una o algunas pocas funciones**, generalmente dentro de un **sistema de tiempo real**. Sus componentes suelen estar en una **placa base** y pueden no verse como computadoras.
- Características (al menos tres de):
  - Suelen **fabricarse en forma masiva** para reducir el costo de producción.
  - Usan un **procesador y memoria relativamente pequeños**.
  - Un **fallo en un elemento implica reparar o reemplazar la placa íntegramente**.
  - Por reducción de costos, los **controladores pueden ser más lentos** que los de las PC.
  - Suelen programarse en **lenguaje ensamblador** sobre el microprocesador.
- Ejemplo: el reloj que usan los taxis, el microondas.

**6. (MC) → A.** Es la definición de Schach. (C describe un sistema de tiempo real; D describe un sistema embebido; B no corresponde a la definición.)

**7. (Desarrollo).** Conceptos esperados — las tres fases del diseño de un STR:
1. **Identificar todas las tareas** a realizar, junto con las **restricciones temporales** impuestas que se deben cumplir.
2. **Codificar los programas** que ejecutarán las tareas.
3. **Medir el tiempo de cómputo de cada tarea** y realizar un **análisis de la planificación**.

**8. (Desarrollo).** Conceptos esperados:
- Los métodos formales son **técnicas con bases matemáticas para describir las propiedades del sistema**; proporcionan marcos conceptuales para **especificar, desarrollar y verificar** sistemas de forma más rigurosa que *ad hoc*.
- Ventajas / puntos clave (al menos dos):
  1. **Complementan las especificaciones informales** por ser **precisas y no ambiguas**: eliminan dudas y evitan problemas de interpretación.
  2. **Fuerzan un análisis temprano de los requerimientos**, en una etapa inicial donde **es menos costoso corregir un error**.
  3. Son una **excelente herramienta para sistemas críticos** donde se prioriza la seguridad y la confiabilidad.

**9. (Desarrollo).** Conceptos esperados:
- Un sistema requiere **mantenimiento** porque, tras ser entregado, inevitablemente sufre **modificaciones para adaptarse a un entorno cambiante** y seguir siendo útil (desde corregir un error en una línea hasta incorporar nuevos requerimientos).
- La estructura **se degrada paulatinamente** justamente porque, al ser útil, se le pide adaptarse a ese entorno cambiante, y cada adaptación deteriora su estructura.
- Los costos son altos porque **es mucho más costoso incorporar una nueva funcionalidad con el sistema ya funcionando** que hacerlo durante el desarrollo; además, introducir cambios **inevitablemente introduce defectos** en el sistema.

**10. (Desarrollo).** Conceptos esperados — campos del cuadro descriptivo básico:
- **Nombre del caso de uso:** debe coincidir con el indicado en el diagrama (la elipse).
- **Actor:** el actor que inicia el caso.
- **Precondición:** lo que debe ser cierto antes de ejecutar el caso.
- **Curso normal:** secuencia **numerada** de lo que hace el actor y lo que hace el sistema, en condiciones donde todo sale bien.
- **Curso alternativo:** variantes del curso normal, ubicadas en una segunda columna y **numeradas según el paso donde se desvían** (por ejemplo, `3.1`).

---

## Parcial N.º 4 — Dificultad Media

**1. (MC) → A.** El apunte indica que cuando el SRS sirve como base para un pedido de cotización no se detalla tanto cada requerimiento, sino que se describe en forma más general para abarcar más alternativas disponibles en el mercado. Costos y cronograma nunca van en el SRS, y el diseño se excluye porque tiene audiencias diferentes.

**2. (V/F) → Falso.** Falso. Al referirse a transacciones procesadas dentro de un período de tiempo y distinguir condiciones normales y máximas, se trata de un requisito dinámico. Los requisitos estáticos son números fijos (número de terminales, usuarios simultáneos, cantidad y tipo de información) y son los que pueden agruparse bajo el título 'capacidad'.

**3. (MC) → A.** El apunte usa este mismo enunciado como ejemplo de requisito no verificable por contener una cantidad no mensurable: si no existe un proceso concreto y finito para comprobar si el software lo cumple, el requisito no es verificable. Trazabilidad, modificabilidad y consistencia son otros atributos que no aplican a este caso.

**4. (Desarrollo).** Conceptos esperados: Se espera que el alumno reconozca que el apunte señala tres escenarios donde el prototipo es especialmente útil: requerimientos que van cambiando rápidamente, cliente poco abierto a entregar una lista completa de requerimientos, y casos en que ni el cliente ni el equipo conocen bien el área de aplicación. El caso descripto encaja en dos de esos escenarios. El prototipo sirve porque es un modelo o maqueta que muestra las interfaces entre el sistema y el usuario y simula los aspectos más visuales del sistema (entradas, salidas, componentes gráficos y conceptos a tratar), permitiendo obtener feedback para acordar cuáles son los requerimientos y cómo tratarlos; así se reducen los errores de comunicación entre usuario y analista, que son de los más caros de corregir porque se visualizan en forma tardía y pueden multiplicar varias veces el costo inicial de su corrección. La principal desventaja, según el apunte, es que desde el comienzo es imposible saber cuánto tiempo tomará lograr un producto aceptable para el cliente.

**5. (MC) → A.** El apunte establece que si el actor es una persona nunca se coloca su nombre en el modelo, sino el rol que representa, porque la misma persona puede interactuar con el sistema desde roles diferentes. El ejemplo del bibliotecario muestra exactamente dos roles distintos ('empleado' y 'bibliotecario') de una misma persona. Cada rol inicia su propio caso de uso, por lo que actúa como actor primario y no como secundario.

**6. (Desarrollo).** Conceptos esperados: Se espera que el alumno identifique que la historia es en realidad un épico: una historia de usuario tan grande que difícilmente pueda implementarse en una única iteración. Según el apunte, cuando esto ocurre es necesario desagregar el épico en historias de usuario menores. En términos de INVEST, viola el atributo Pequeña (Small), que según el apunte exige que la historia nunca sea tan grande como para resultar imposible de planificarse o priorizarse; también compromete la Estimabilidad, ya que siempre debería poder estimarse el esfuerzo de la historia y un trabajo tan amplio es difícil de estimar. La acción correcta es desagregar el épico en historias más chicas (por ejemplo, una por cada funcionalidad: emisión, anulación, reportes, integración), cada una implementable y estimable dentro de una iteración. Puede mencionarse que la historia conserva el formato 'Como (rol) yo quiero (algo) para (beneficio)', pero eso no alcanza para que sea una buena historia.

**7. (V/F) → Verdadero.** Verdadero. El apunte indica que en la aceptación se trabaja con datos reales del cliente, no ficticios, y que eso puede disparar errores que no se habían manifestado en pruebas previas, afectando tanto al sistema como a los requerimientos. La prueba de aceptación es una técnica de caja negra basada en la especificación de requerimientos.

**8. (MC) → A.** El apunte sostiene que en un equipo ágil todos los individuos tienen habilidades de probadores y que la fase de pruebas tradicional desaparece, ya que mientras se realiza el análisis se van diseñando conjuntamente las pruebas del sistema. La automatización de regresión y aceptación es un factor de éxito, pero no elimina la intervención humana ni los tipos de prueba, y el cliente no reemplaza al equipo.

**9. (MC) → A.** El apunte describe que el objeto de control modela la funcionalidad que no se asigna naturalmente a otro objeto (no es interfaz ni información), y que su comportamiento consiste en operar sobre varios objetos entidad, hacer alguna operación y retornar el resultado a un objeto de interfaz. Eso es exactamente lo que hace el objeto descripto. Producto y Stock son entidades; la pantalla es la interfaz.

**10. (Desarrollo).** Conceptos esperados: Se espera que el alumno distinga ambos conceptos usando lo que ofrece esta sección. Según Schach, un sistema de información logra un resultado empresarial: recopila, manipula, almacena y crea reportes de información respecto de las actividades de negocio de una empresa, con el fin de ayudar a la administración en el manejo de las operaciones de negocios; nada en esa definición exige que sea de tiempo real. Por otro lado, el apunte aclara que existen diversas clasificaciones de sistemas y elige enfocarse en tres tipos: tiempo real, distribuidos y embebidos. La definición de sistema de información se presenta de forma independiente y no establece que un sistema de información deba pertenecer a ninguno de esos tres tipos; por lo tanto, ser de tiempo real es una clasificación separada e independiente. El alumno debe concluir que el solo hecho de procesar datos no convierte a un sistema de información en uno de tiempo real, ya que se trata de definiciones y clasificaciones distintas dentro del apunte.

**11. (V/F) → Falso.** Falso. El apunte establece que la eficiencia de un sistema de tiempo real no se basa solo en la exactitud de los resultados de cómputo, sino también en el momento en que los entrega. Si el resultado, aunque correcto, llega fuera del tiempo dictado por el problema, no satisface la exigencia de oportunidad propia de estos sistemas.

**12. (MC) → A.** El apunte señala como ventajas de la reingeniería frente a un sistema nuevo la disminución del riesgo (especialmente en sistemas críticos donde la empresa depende de ellos para mantenerse operativa) y un menor costo, ya que el costo de la reingeniería siempre será menor que el de desarrollar uno completamente nuevo. La reingeniería generalmente se realiza sin cambiar la funcionalidad ni la arquitectura; ningún sistema queda libre de mantenimiento ni de la introducción de defectos al cambiarlo.

---

## Parcial N.º 5 — Dificultad Alta

**1. (MC) → B.** El apunte indica que cuando el SRS sirve como base para un pedido de cotización no se detalla tanto cada requerimiento, sino que se lo describe en forma más general para abarcar más alternativas disponibles en el mercado. La opción de costos y cronogramas es falsa porque esos son requerimientos del proyecto que el SRS NO debe incluir; la de mayor detalle invierte el criterio del apunte; y los planes de aseguramiento tampoco van en el SRS.

**2. (Desarrollo).** Conceptos esperados: Se espera que el alumno distinga: una SRS es CORRECTA si y sólo si todos y cada uno de los requisitos indicados representa algo realmente requerido por el sistema (no hay herramienta que garantice la corrección; se recomienda que el cliente determine si la especificación muestra sus necesidades). Una SRS es COMPLETA si y sólo si incluye todo lo que el software tiene que hacer, las respuestas a todas las entradas posibles (válidas e inválidas), todas las páginas, figuras y tablas numeradas y referenciadas, y ninguna sección con las siglas en inglés de la frase 'to be determined' (a determinar). Un documento puede ser correcto (todo lo que figura es legítimo) pero no completo (falta especificar algo que el sistema sí requiere). Las siglas de 'a determinar' se incluyen junto a un requerimiento cuando su descripción no se encuentra completa; su mera presencia viola la completitud, y cuando aparecen se recomienda incluir la causa por la cual está incompleto, quién es la persona responsable de llevarlo a cabo y una fecha estipulada para cumplirse.

**3. (MC) → B.** El apunte define Alcanzable (Attainable) como que sea factible llevarlo a cabo, y Realizable como que se pueda cumplir con los recursos disponibles (infraestructura, tecnología, personal, etc.). Las otras opciones confunden esos términos con Medible, Rastreable o Específico, que son letras distintas de SMART, o niegan la distinción al tratarlos como sinónimos.

**4. (V/F) → Falso.** Falso. Según el apunte, las pruebas de aceptación basadas en los requerimientos son pruebas de VALIDACIÓN, no de prueba de defectos: no buscan encontrar bugs, sino demostrar si el sistema ha implementado en forma correcta los requerimientos establecidos. Es una técnica de caja negra cuyos casos se basan en la especificación y se trabaja con datos reales del cliente.

**5. (MC) → B.** El apunte define la relación de USO como funcionalidad común incluida en más de un caso (la parte incluida debe ser un caso de uso en sí misma): 'Consultar socio' usada por 'Registrar préstamo' y 'Registrar devolución'. La relación de EXTENSIÓN es funcionalidad que puede o no ocurrir: 'Cenar' se extiende a 'Tomar café', que no es error ni excepción. Las otras opciones invierten ambas relaciones, las igualan, o introducen una relación con actores, que el apunte prohíbe (extensión y uso se dan sólo entre casos de uso).

**6. (Desarrollo).** Conceptos esperados: Se espera que el alumno explique: el actor PRIMARIO inicia el caso de uso y lo utiliza para lograr un objetivo. El actor SECUNDARIO es requerido (usado) por el caso de uso pero no lo inicia; se emplea cuando, como resultado de la ejecución del caso, se requiere notificarlo o enviarle información a otro actor que no fue quien inició el caso. Respecto del inicio: cada caso de uso puede ser iniciado únicamente por UN actor. Si más de un actor pudiera iniciarlo, la situación se resuelve mediante una relación de herencia entre actores.

**7. (MC) → B.** El apunte indica que cuando el producto pasa a ser operado y mantenido, la trazabilidad REMOTA cobra más importancia, porque al modificar el diseño o el código es fundamental identificar los requerimientos afectados; la remota refiere a las fases previas al desarrollo y al origen o fuente del requerimiento. La futura mira hacia fases posteriores (distractor que invierte la dirección); las dos últimas describen tipos de trazabilidad que no son los que el texto destaca en esa situación.

**8. (Desarrollo).** Conceptos esperados: Se espera que el alumno explique: un PROTOTIPO es un modelo o maqueta que muestra las interfaces entre el sistema y el usuario y SIMULA la interactividad del sistema con los usuarios (entradas y salidas, los componentes o elementos gráficos participantes, y los conceptos a tratar), buscando la mayor similitud al sistema final. Un MOCKUP es una representación visual ESTÁTICA de un diseño: representa de forma estática cómo se estructura la información, cómo se visualizan los contenidos y muestra las funciones básicas que estarán disponibles, pero NO simula la interactividad real (habitual en diseños web; por ejemplo, un video se representa con una imagen y un ícono de reproducción por su carácter estático). La diferencia central es la interactividad: el prototipo la simula, el mockup no. La principal DESVENTAJA del prototipo es que desde el comienzo es imposible saber cuánto tiempo tomará lograr un producto aceptable para el cliente.

**9. (MC) → B.** El apunte indica que los requisitos ESTÁTICOS pueden identificarse en un apartado separado bajo el título 'capacidad' e incluyen el número de terminales, el número de usuarios conectados en simultáneo y la cantidad/tipo de información. Los números de transacciones por período son DINÁMICOS (no estáticos) y son estos los que deben declararse para condiciones normales y máximas; además, el apunte indica que TODOS los requisitos deben declararse en condiciones mensurables. Por eso las demás opciones invierten estático/dinámico o niegan que los dinámicos deban ser mensurables.

**10. (Desarrollo).** Conceptos esperados: Se espera que el alumno explique: una HISTORIA DE USUARIO es la descripción de una funcionalidad desde el punto de vista del usuario o cliente, breve (idealmente hasta dos oraciones, cargada en tarjetas). Un ÉPICO se refiere a cuando las historias de usuario son tan grandes que difícilmente puedan implementarse en una única iteración, por lo que es necesario desagregarlas en historias de usuario menores. Sobre INVEST (criterio creado por Bill Wake en 2003): NEGOCIABLE significa que las historias pueden ser cambiadas hasta tanto sean parte de una iteración (es decir, una vez que forman parte de la iteración dejan de ser negociables). VALORABLE significa que la historia debe entregar valor al cliente o usuario final.

**11. (MC) → D.** La afirmación incorrecta es la cuarta: el apunte sostiene justamente lo contrario, en el testing ágil la fase de pruebas tradicional DESAPARECE porque todos los miembros poseen habilidades de probadores y se promueve que cada uno tenga varios roles para eliminar la dependencia entre individuos. Las otras tres reproducen fielmente el texto: equipo con habilidades de probadores, pruebas diseñadas durante el análisis y automatización de las pruebas de regresión como factor de éxito.

**12. (Desarrollo).** Conceptos esperados: Se espera que el alumno distinga: en la REVISIÓN (regular) de la definición de los requerimientos están involucrados tanto los desarrolladores como el cliente, y ayuda a una mejor gestión y a la detección de errores. La VALIDACIÓN la deben realizar el cliente y los usuarios, para confirmar que los requerimientos coincidan con los definidos para el sistema, en relación a lo que se desea o espera de él. Es decir, difieren en participantes (revisión: desarrolladores + cliente; validación: cliente + usuarios) y en propósito (mejor gestión y detección de errores vs. confirmar la correspondencia con lo que el usuario desea o espera). Además: la revisión FORMAL se realiza cuando se cuenta con la documentación completa, mientras que la revisión INFORMAL ocurre durante la producción de la especificación.

---

## Parcial N.º 6 — Dificultad Alta

**1. (MC) → A.** El objeto de control modela la funcionalidad que no se asigna naturalmente a ningún otro objeto (no es interfaz ni información a ser utilizada). Su comportamiento consiste en operar sobre varios objetos entidad, hacer alguna operación y retornar el resultado a un objeto de interfaz. El de entidad solo modela la información que sobrevive a los casos de uso y el de interfaz solo permite la comunicación con los actores; el objeto de frontera no figura en el apunte.

**2. (Desarrollo).** Conceptos esperados: Se espera: el modelo de análisis se empieza a desarrollar recién una vez que el modelo de requerimientos está preparado y aprobado, es decir, el de requerimientos antecede al de análisis. El modelo de análisis estructura el sistema independientemente del ambiente de implementación actual: no se ata a la tecnología ni a cómo se va a implementar, sino que se enfoca en su estructura lógica. Por eso describe el sistema mediante tres tipos de objetos (interfaz, entidad y control), que son los que se utilizan en el diagrama de secuencia de esta etapa de análisis para capturar el comportamiento (generalmente el de un caso de uso particular) sin comprometer decisiones de implementación.

**3. (V/F) → Falso.** Falso, la afirmación invierte las dos nociones. El mensaje recursivo es el que un objeto se manda a sí mismo y se representa por la duplicación del rectángulo (el objeto aparece como si fuera activado varias veces), no por una flecha hacia otro objeto. El período de actividad es simplemente el espacio rectangular sobre la línea de vida que indica el tiempo que tarda el objeto en ejecutar una acción; no se representa por duplicación.

**4. (MC) → A.** En el diagrama de secuencia el orden temporal está dado por cuán arriba está la flecha: las más altas se ejecutan antes que las de abajo. La numeración de mensajes es el recurso propio del diagrama de colaboración, no del de secuencia; el orden no depende de la posición horizontal de los objetos ni del tamaño del período de actividad.

**5. (Desarrollo).** Conceptos esperados: Se espera: la definición de sistema es deliberadamente amplia, un conjunto de elementos que se relacionan para alcanzar un fin, sin restringir los elementos a hardware ni software ni imponer un contexto empresarial o acciones concretas. En cambio, la definición de sistema de información de Schach es más específica: es aquel que logra un resultado empresarial y que recopila, manipula, almacena y crea reportes de información respecto de las actividades de negocio de una empresa, con el fin de ayudar a la administración de esa empresa en el manejo de las operaciones de negocios. Es decir, especifica cuatro acciones concretas y un contexto de negocio. Además, el apunte trata los tipos de sistemas (tiempo real, distribuidos, embebidos) como clasificaciones separadas: no establece que un sistema de información deba ser de alguno de esos tres tipos.

**6. (MC) → A.** La eficiencia de un sistema de tiempo real no se basa solo en la exactitud de los resultados de cómputo, sino también en el momento en que los entrega; un resultado correcto pero tardío no satisface el requerimiento temporal dictado por el problema. El intervalo entrada-salida suele ser muy pequeño (no grande) para ser aceptable, y en los sistemas operativos de tiempo real (SOTR) no importa el usuario, sino los procesos.

**7. (Desarrollo).** Conceptos esperados: Se espera: la distinción clave es que en los SOTR no tiene importancia el usuario, sino los procesos, a diferencia de los sistemas operativos orientados al usuario. El SOTR cumple el rol de plataforma para establecer un sistema de tiempo real (es la base sobre la que se monta el STR). Dos ejemplos del apunte (basta con dos): VxWorks, Solaris, Lynx OS y Spectra.

**8. (MC) → A.** El apunte indica que la tolerancia a fallos suele ser mayor porque el fallo de una computadora no implica la caída de toda la red, aun brindando un servicio un poco degradado: no garantiza el 100% de disponibilidad. También suelen ser escalables (permiten sumar recursos), aunque esto depende de las posibilidades de la red. El procesamiento se distribuye sobre varias computadoras, no se confina en una sola.

**9. (MC) → A.** La descripción corresponde a un sistema embebido (o empotrado): funciones que no suelen estar a la vista del usuario, una o pocas funciones, componentes en placa base, fabricación masiva para reducir costos y reparación o reemplazo íntegro de la placa ante un fallo. Además, está diseñado para operar generalmente dentro de un sistema de tiempo real. No es distribuido, ni un sistema de información, ni un SOTR.

**10. (Desarrollo).** Conceptos esperados: Se espera: la reingeniería es un proceso mediante el cual se busca la mejora de un software existente. Según Sommerville puede implicar redocumentar el sistema, organizarlo y reestructurarlo, traducirlo a un lenguaje de programación más moderno y modificar o actualizar la estructura y los valores de los datos del sistema. Generalmente se realiza sin cambiar la funcionalidad ni la arquitectura del sistema. En el escenario planteado conviene la reingeniería por dos ventajas frente al desarrollo nuevo: disminuye el riesgo, sobre todo en sistemas críticos de los que la empresa depende para mantenerse operativa (un retraso en la disponibilidad de un sistema nuevo puede causar daños severos), y tiene menor costo, ya que aunque tiene un costo, siempre será menor que el de desarrollar un sistema completamente nuevo.

**11. (MC) → A.** La aproximación algebraica describe el sistema empleando operaciones y sus relaciones, oculta el estado y es útil para especificar interfaces (clases de objetos o tipos abstractos de datos). La basada en modelos construye un modelo con construcciones matemáticas como conjuntos y sucesiones, puede mostrar el estado del sistema y se basa en definir precondiciones y postcondiciones sobre ese estado. Las demás opciones invierten o mezclan estas características.

**12. (Desarrollo).** Conceptos esperados: Se espera, puntos clave a favor (al menos dos): complementan las especificaciones informales por ser precisos y no ambiguos, lo que elimina dudas y evita problemas de interpretación; fuerzan a realizar un análisis de los requerimientos en una etapa inicial, donde es menos costoso corregir un error; y son una excelente herramienta para sistemas críticos donde se prioriza la seguridad y la confiabilidad. Razones de poca adopción (al menos dos): se incorporaron otras herramientas y técnicas que lograron avances en la calidad (nuevas metodologías de desarrollo, lenguajes orientados a objetos, administración de configuraciones); en el mercado actual son críticas la interfaz con el usuario y los desarrollos rápidos, y las especificaciones formales no son aptas para ninguna de las dos cosas; y no son escalables, ya que son exitosos en aplicaciones críticas pequeñas pero se descontrolan al aumentar su tamaño. Por eso se los entiende como complemento (aportan precisión) y no como reemplazo total de las especificaciones informales.

