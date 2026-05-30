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
