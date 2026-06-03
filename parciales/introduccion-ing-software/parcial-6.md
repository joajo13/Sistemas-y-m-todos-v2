# Parcial de práctica N.º 6 — Introducción a la Ingeniería de Software

**Materia:** Introducción a la Ingeniería de Software (Módulos 7 a 12)
**Dificultad:** Alta
**Modalidad:** 12 preguntas (1 V/F · 6 opción múltiple · 5 desarrollo). Leé con atención.
**Nota:** Las soluciones están en `soluciones.md` para que puedas practicar sin spoilearte.

---

### 1. (Opción múltiple) — marcá una sola opción

Un equipo modela un caso de uso y necesita representar la funcionalidad que ejecuta operaciones sobre varios objetos entidad, realiza un cómputo y devuelve el resultado a la interfaz, pero que no encaja naturalmente ni en la interfaz ni en la información persistente. ¿Qué tipo de objeto del modelo de análisis corresponde?

- A) Objeto de control.
- B) Objeto de entidad, porque opera sobre la información que sobrevive a los casos de uso.
- C) Objeto de interfaz, porque retorna el resultado a la interfaz.
- D) Objeto de frontera, porque media entre las entidades y la interfaz.

---

### 2. [Desarrollo]

El modelo de análisis y el modelo de requerimientos no son lo mismo ni se construyen en el mismo momento. Explica la relación temporal entre ambos y por qué se dice que el modelo de análisis es independiente del ambiente de implementación.

*Respuesta del alumno:*

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________

---

### 3. (Verdadero / Falso) — justificá brevemente

En un diagrama de secuencia, un mensaje recursivo se representa mediante una flecha que parte de un objeto y llega a otro objeto distinto, mientras que el período de actividad se representa con la duplicación de un rectángulo sobre la línea de vida.

`( ) Verdadero    ( ) Falso`

Justificación: ____________________________________________

---

### 4. (Opción múltiple) — marcá una sola opción

En un diagrama de colaboración, el orden de ejecución de los mensajes se determina mediante su numeración. En el diagrama de secuencia, en cambio, ese mismo orden temporal se infiere de:

- A) La altura de las flechas: las flechas más altas se ejecutan antes que las que están debajo.
- B) La numeración de los links entre los objetos únicos.
- C) El orden en que aparecen escritos los nombres de los objetos de izquierda a derecha.
- D) El tamaño del rectángulo de período de actividad de cada objeto.

---

### 5. [Desarrollo]

Según el apunte, la definición de sistema y la de sistema de información (Schach) tienen distinto alcance. Explica esa diferencia de alcance y aclara si el apunte exige que un sistema de información sea de tiempo real, distribuido o embebido.

*Respuesta del alumno:*

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________

---

### 6. (Opción múltiple) — marcá una sola opción

En un sistema de tiempo real se obtiene un resultado de cómputo perfectamente exacto, pero entregado fuera del intervalo de tiempo especificado por el problema. Según el criterio de eficiencia del apunte, ese resultado debe considerarse:

- A) Insatisfactorio, porque la eficiencia de un STR no se basa solo en la exactitud, sino también en el momento en que se entregan los resultados.
- B) Satisfactorio, porque en un STR lo único que se evalúa es la exactitud de los resultados de cómputo.
- C) Satisfactorio, porque el intervalo entre entrada y salida en un STR suele ser muy grande y admite demoras.
- D) Insatisfactorio, porque en un STR el usuario tiene prioridad por encima de los procesos.

---

### 7. [Desarrollo]

Un sistema operativo de tiempo real (SOTR) se distingue de un sistema operativo de propósito general orientado al usuario. Explica esa distinción y nombra dos ejemplos de SOTR mencionados en el apunte. Indica además qué rol cumple el SOTR respecto del sistema de tiempo real.

*Respuesta del alumno:*

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________

---

### 8. (Opción múltiple) — marcá una sola opción

¿Cuál de las siguientes afirmaciones sobre la tolerancia a fallos y la escalabilidad de un sistema distribuido es correcta según el apunte?

- A) La tolerancia a fallos suele ser mayor porque la caída de una computadora no tumba toda la red, aunque el servicio puede quedar un poco degradado; y suele ser escalable, sujeto a las posibilidades de la red que lo conecta.
- B) Garantiza una disponibilidad del 100% porque el fallo de una máquina nunca afecta en absoluto al servicio.
- C) No es escalable, ya que no se pueden sumar nuevos recursos una vez desplegada la red.
- D) El procesamiento está confinado en una única máquina central, lo que lo vuelve más tolerante a fallos.

---

### 9. (Opción múltiple) — marcá una sola opción

Un dispositivo realiza una o pocas funciones, sus componentes están en una placa base y pueden no verse como una computadora, se fabrica en forma masiva para reducir costos y, ante el fallo de un elemento, hay que reparar o reemplazar la placa íntegra. ¿Qué tipo de sistema describe y en qué tipo de sistema suele operar?

- A) Un sistema embebido (o empotrado), que generalmente funciona dentro de un sistema de tiempo real.
- B) Un sistema distribuido, que funciona repartido sobre varias máquinas de una red.
- C) Un sistema de información, que recopila, manipula, almacena y reporta datos de negocio.
- D) Un sistema operativo de tiempo real, en el que importan los procesos y no el usuario.

---

### 10. [Desarrollo]

Una empresa duda entre desarrollar un sistema desde cero o aplicar reingeniería sobre el sistema existente, del cual depende su operatoria. Explica qué es la reingeniería según el apunte, por qué tiene sentido elegirla en este escenario (sus ventajas) y aclara qué es lo que la reingeniería generalmente no modifica.

*Respuesta del alumno:*

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________

---

### 11. (Opción múltiple) — marcá una sola opción

Existen dos aproximaciones para redactar especificaciones formales de sistemas industriales. ¿Cuál de las siguientes contrasta correctamente la aproximación algebraica con la basada en modelos?

- A) La algebraica describe el sistema mediante operaciones y sus relaciones, ocultando el estado (útil para especificar interfaces); la basada en modelos construye un modelo con conjuntos y sucesiones, muestra el estado y se basa en precondiciones y postcondiciones.
- B) La algebraica muestra el estado del sistema con conjuntos y funciones, mientras que la basada en modelos lo oculta describiendo solo operaciones.
- C) La algebraica usa precondiciones y postcondiciones sobre el estado, mientras que la basada en modelos describe operaciones y sus relaciones.
- D) Ambas ocultan el estado del sistema y solo se diferencian en el lenguaje de programación empleado para implementarlas.

---

### 12. [Desarrollo]

Se afirma que los métodos formales son un complemento de las especificaciones informales y no un reemplazo total. Justifica esa afirmación explicando dos puntos clave a favor de los métodos formales y, al mismo tiempo, dos razones por las que no se adoptaron masivamente en la ingeniería de software.

*Respuesta del alumno:*

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________

---
