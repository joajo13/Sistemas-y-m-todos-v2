# Parcial de práctica N.º 4 — Introducción a la Ingeniería de Software

**Materia:** Introducción a la Ingeniería de Software (Módulos 7 a 12)
**Dificultad:** Media
**Modalidad:** 12 preguntas (3 V/F · 6 opción múltiple · 3 desarrollo). Leé con atención.
**Nota:** Las soluciones están en `soluciones.md` para que puedas practicar sin spoilearte.

---

### 1. (Opción múltiple) — marcá una sola opción

Una organización solicita a varios proveedores que coticen el desarrollo de un sistema y, para ello, redacta un SRS. Según el apunte, ¿cómo debe encararse la redacción de los requerimientos en ese SRS respecto de uno destinado a guiar la construcción interna?

- A) Se describen de forma más general, para abarcar más alternativas disponibles en el mercado.
- B) Se detallan al máximo cada requerimiento, para que ningún proveedor pueda desviarse del diseño previsto.
- C) Se incluyen también los costos y el cronograma, porque son la base de la comparación entre proveedores.
- D) Se reemplaza la descripción funcional por el diseño técnico, ya que el proveedor solo necesita conocer la arquitectura.

---

### 2. (Verdadero / Falso) — justificá brevemente

El requerimiento 'el sistema deberá atender 500 transacciones por hora en condiciones normales y 5000 por hora en condiciones de pico' corresponde a un requisito estático y, por lo tanto, podría ubicarse en el apartado titulado 'capacidad'.

`( ) Verdadero    ( ) Falso`

Justificación: ____________________________________________

---

### 3. (Opción múltiple) — marcá una sola opción

Un analista revisa el requerimiento 'el sistema usualmente no debe demorar más de 30 segundos en una consulta'. Según los atributos de una buena SRS, ¿qué problema presenta este requerimiento?

- A) No es verificable, porque la palabra 'usualmente' introduce una cantidad no mensurable que impide comprobar de forma concreta y finita si se cumple.
- B) No es trazable, porque no se indica el documento previo del cual proviene.
- C) No es modificable, porque no está incorporado en una tabla de contenidos con índice.
- D) No es consistente, porque entra en conflicto temporal con otro requerimiento del documento.

---

### 4. [Desarrollo]

Un equipo enfrenta un proyecto en el que el cliente cambia sus requerimientos constantemente y nadie del equipo conoce bien el área de aplicación. Explique por qué en este escenario conviene recurrir a un prototipo y cuál es su principal desventaja según el apunte.

*Respuesta del alumno:*

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________

---

### 5. (Opción múltiple) — marcá una sola opción

En el modelo de casos de uso de una biblioteca, una misma persona registra préstamos cuando actúa como 'empleado' y carga libros nuevos cuando actúa como 'bibliotecario' (rol con ese permiso). ¿Cómo debe representarse esta situación en el modelo y por qué?

- A) Como dos actores distintos según el rol, porque cuando el actor es una persona en el modelo se coloca el rol y no su nombre, ya que la misma persona puede interactuar desde roles diferentes.
- B) Como un único actor con el nombre de la persona, porque físicamente se trata del mismo individuo.
- C) Como un único actor que inicia ambos casos de uso, agregando una relación de uso entre los dos casos.
- D) Como dos actores secundarios, porque la persona solo recibe notificaciones del sistema en ambos casos.

---

### 6. [Desarrollo]

Un equipo agrega al backlog la siguiente historia: 'Como administrador del sistema quiero rehacer por completo el módulo de facturación, incluyendo emisión, anulación, reportes fiscales e integración contable, para cumplir con la nueva normativa'. Identifique qué problema tiene esta historia según INVEST y qué debería hacerse con ella.

*Respuesta del alumno:*

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________

---

### 7. (Verdadero / Falso) — justificá brevemente

Durante una prueba de aceptación se trabaja con datos reales del cliente y no con datos ficticios, lo que puede disparar errores que no aparecieron en pruebas anteriores, tanto en el sistema como en los propios requerimientos.

`( ) Verdadero    ( ) Falso`

Justificación: ____________________________________________

---

### 8. (Opción múltiple) — marcá una sola opción

Un equipo que adopta testing ágil afirma que ya no necesita una etapa separada y posterior dedicada exclusivamente a las pruebas. Según el apunte, ¿por qué esta afirmación es correcta?

- A) Porque en un equipo ágil todos los individuos tienen habilidades de probadores y las pruebas se diseñan durante el análisis, por lo que la fase de pruebas tradicional desaparece.
- B) Porque las pruebas se delegan por completo a una herramienta de automatización que las ejecuta sin intervención humana.
- C) Porque en las metodologías ágiles solo se realizan pruebas de unidad, eliminando la integración y la de sistema.
- D) Porque el cliente es quien realiza todas las pruebas al final de cada iteración, reemplazando al equipo de desarrollo.

---

### 9. (Opción múltiple) — marcá una sola opción

En un sistema de venta de productos, durante el modelo de análisis se identifica un objeto que recibe la solicitud de la pantalla, opera sobre los objetos Producto y Stock, calcula la disponibilidad y devuelve el resultado a la pantalla. ¿Qué tipo de objeto del modelo de análisis es?

- A) Objeto de control, porque modela funcionalidad que no se asigna naturalmente ni a la interfaz ni a la información, operando sobre varios objetos entidad y retornando el resultado a un objeto de interfaz.
- B) Objeto de entidad, porque maneja información (Producto y Stock) que el sistema debe conservar a lo largo del tiempo.
- C) Objeto de interfaz, porque su tarea es comunicar la pantalla con el actor que realiza la consulta.
- D) Objeto de entidad, porque se corresponde con un concepto del mundo real como es la disponibilidad.

---

### 10. [Desarrollo]

Un estudiante sostiene que, dado que todo sistema de información procesa datos rápidamente, todo sistema de información es también un sistema de tiempo real. A partir de las definiciones de la sección 'Definiciones y tipos de sistemas', explique por qué esa afirmación es incorrecta.

*Respuesta del alumno:*

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________

---

### 11. (Verdadero / Falso) — justificá brevemente

En un sistema de tiempo real, un resultado de cómputo correcto pero entregado fuera del intervalo de tiempo requerido entre la entrada y la salida se considera, de todos modos, un resultado eficiente.

`( ) Verdadero    ( ) Falso`

Justificación: ____________________________________________

---

### 12. (Opción múltiple) — marcá una sola opción

Una empresa cuyo sistema crítico está funcionando evalúa si reescribirlo desde cero o aplicar reingeniería. Según el apunte, ¿cuál es la justificación correcta para preferir la reingeniería en este caso?

- A) Disminuye el riesgo, sobre todo en sistemas críticos de los que la empresa depende para mantenerse operativa, y su costo siempre será menor que desarrollar un sistema completamente nuevo.
- B) Permite cambiar la funcionalidad y la arquitectura del sistema sin afectar su operación, algo imposible al desarrollar desde cero.
- C) Elimina por completo la necesidad de mantenimiento futuro, ya que el sistema reestructurado deja de degradarse.
- D) Garantiza que no se introducirán defectos al incorporar nuevas funcionalidades, a diferencia del desarrollo nuevo.

---
