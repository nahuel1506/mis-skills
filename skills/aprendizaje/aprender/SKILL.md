---
name: aprender
description: Enseña al usuario una habilidad o concepto nuevo dentro de este espacio de trabajo.
disable-model-invocation: true
argument-hint: "¿Qué te gustaría aprender?"
---

El usuario te pidió que le enseñes algo. Es una solicitud con estado: su intención es aprender el tema a lo largo de varias sesiones.

## Espacio de aprendizaje

Considerá el directorio actual como un espacio de aprendizaje. Las rutas (`./lessons/` y las demás) se resuelven respecto al directorio donde se invocó la skill; solamente los enlaces `*-FORMAT.md` se resuelven respecto a la carpeta de esta skill. El progreso de aprendizaje se almacena aquí en distintos archivos:

- `MISSION.md`: documento que registra el _motivo_ por el que el usuario quiere aprender el tema. Toda enseñanza debe fundamentarse en él. Seguí el formato de [MISSION-FORMAT.md](./MISSION-FORMAT.md).
- `./reference/*.html`: directorio de materiales de consulta. Contienen las conclusiones condensadas de las lecciones: hojas de referencia rápida, algoritmos, sintaxis, posturas de yoga y glosarios. Son unidades de conocimiento diseñadas como documentos agradables, imprimibles y fáciles de consultar.
- `RESOURCES.md`: lista de recursos de los que obtener conocimiento contextual o experiencia práctica. Seguí el formato de [RESOURCES-FORMAT.md](./RESOURCES-FORMAT.md).
- `./learning-records/*.md`: registros que documentan lo que aprendió el usuario. Son comparables a los registros de decisiones de arquitectura en desarrollo de software: recogen aprendizajes no evidentes e ideas importantes que pueden revisarse después o orientar otras sesiones. Utilizalos para estimar la zona de desarrollo próximo. Sus nombres siguen `0001-<nombre-en-kebab-case>.md`, incrementando el número secuencialmente. Seguí [LEARNING-RECORD-FORMAT.md](./LEARNING-RECORD-FORMAT.md).
- `./lessons/*.html`: directorio de lecciones. Una **lección** es un documento HTML independiente que enseña un concepto muy acotado, relacionado con la misión. Es la unidad principal de enseñanza del espacio.
- `./assets/*`: **componentes** reutilizables entre lecciones. Consultá [Recursos compartidos](#recursos-compartidos).
- `NOTES.md`: archivo de notas rápidas para guardar preferencias del usuario u observaciones de trabajo.

## Filosofía

Para aprender en profundidad, el usuario necesita tres cosas:

- **Conocimiento**, obtenido de fuentes confiables y de alta calidad.
- **Habilidades**, desarrolladas mediante lecciones interactivas pertinentes, preparadas por vos y basadas en esos conocimientos.
- **Criterio**, desarrollado al interactuar con otros estudiantes y profesionales.

Mientras `RESOURCES.md` no tenga suficientes fuentes, concentrá los esfuerzos en encontrar recursos confiables y de calidad. Nunca confíes únicamente en el conocimiento memorizado del modelo.

Algunos temas requieren más habilidades que conocimientos, y viceversa. La física teórica puede demandar más conocimiento; el yoga, más práctica.

### Fluidez frente a retención

Distinguí dos aspectos del aprendizaje:

- **Fluidez de recuperación**: facilidad para recordar una idea en el momento.
- **Fuerza de almacenamiento**: capacidad de retenerla a largo plazo.

La fluidez puede producir una falsa sensación de dominio, pero el objetivo es la retención. Diseñá lecciones que favorezcan la memoria a largo plazo mediante dificultades productivas:

- Práctica de recuperación: recordar sin consultar la respuesta.
- Práctica espaciada: distribuir los ejercicios en el tiempo.
- Práctica intercalada: mezclar habilidades distintas pero relacionadas; usala solamente para practicar habilidades.

## Lecciones

La principal entrega es una lección: la unidad con la que el usuario adquiere conocimientos y habilidades. Cada lección es un archivo HTML autónomo en `./lessons/`, con el nombre `0001-<nombre-en-kebab-case>.html` y numeración incremental.

La lección debe tener un **diseño cuidado**, con tipografía y disposición limpias, porque el usuario la consultará para repasar. Inspirate en Tufte.

Debe ser breve y poder completarse rápidamente. La memoria de trabajo es limitada: cada lección tiene que proporcionar un logro concreto y pequeño que sirva como base para seguir avanzando. Debe conectarse directamente con la misión y ajustarse a la zona de desarrollo próximo del usuario.

Si es posible, abrí el archivo de la lección con un comando de la interfaz de línea de comandos.

Enlazá cada lección con las demás y con los documentos de referencia mediante enlaces HTML.

Recomendá una fuente principal de lectura o video en cada lección: la fuente más confiable y de mayor calidad encontrada para ese tema.

Incluí un recordatorio para que el usuario haga preguntas de seguimiento al agente. El agente cumple el rol de docente y puede aclarar cualquier duda.

## Recursos compartidos

Construí las lecciones a partir de **componentes** reutilizables en `./assets/`: hojas de estilos, controles de cuestionarios, simuladores, herramientas para diagramas y cualquier elemento reutilizable.

Reutilizar es la regla. Antes de escribir una lección, examiná `./assets/` y aprovechá los componentes existentes. Cuando haga falta algo nuevo que pueda reutilizarse, crealo como componente en `./assets/` y enlazalo; no repitas código dentro de futuras lecciones.

La primera pieza compartida de cada espacio es una hoja de estilos común. Todas las lecciones deben enlazarla, de modo que parezcan parte de un curso coherente y no documentos aislados. La biblioteca de componentes debe crecer a medida que crece el espacio.

## La misión

Todas las lecciones deben conectarse con la misión: el motivo por el que el usuario quiere aprender ese tema.

Si la misión no está clara o `MISSION.md` no está completo, primero preguntale al usuario por qué quiere aprenderlo.

Sin comprender la misión, la enseñanza carecerá de objetivos reales. Las lecciones resultarán abstractas y no habrá un criterio para elegir el siguiente paso.

La misión puede cambiar cuando el usuario adquiere habilidades. Es normal: actualizá `MISSION.md` y agregá un registro de aprendizaje que explique el cambio. Antes de modificar la misión, confirmalo con el usuario.

## Zona de desarrollo próximo

En cada lección, el usuario debería sentir que el desafío es «justo lo suficientemente difícil».

Si el usuario especifica exactamente qué quiere aprender, respetalo. Si no, estimá su zona de desarrollo próximo mediante:

- La lectura de sus `learning-records`.
- La identificación del siguiente aprendizaje adecuado según su misión.
- La elección del concepto más relevante que se encuentre dentro de su zona de desarrollo próximo.

## Conocimientos

Diseñá las lecciones alrededor de una habilidad que el usuario vaya a desarrollar. Incluí solamente los conocimientos necesarios para adquirirla. Primero enseñá esos conceptos y después pedile que practique mediante un ciclo interactivo de retroalimentación.

Obtené primero la información de fuentes confiables y registralas en `RESOURCES.md`. Incorporá citas en las lecciones, con enlaces que respalden las afirmaciones. Así mejorará su confiabilidad.

Al adquirir conocimientos, la dificultad innecesaria perjudica: consume memoria de trabajo que debería dedicarse a comprender.

## Habilidades

Mientras que el conocimiento se adquiere, las habilidades requieren permanencia y flexibilidad. Hacé que lo aprendido perdure.

Para desarrollar habilidades, la dificultad productiva es una herramienta. Recuperar información con esfuerzo fortalece la retención. Enseñá mediante lecciones interactivas; podés usar, por ejemplo:

- Lecciones interactivas con cuestionarios y pequeñas tareas dentro del navegador.
- Lecciones que guíen al usuario por una serie de pasos reales (por ejemplo, posturas de yoga).

Cada actividad debe incluir un **ciclo de retroalimentación** que permita evaluar el desempeño. El ciclo debe ser lo más corto posible, con respuestas inmediatas y, si se puede, automáticas.

En los cuestionarios, procurá que todas las alternativas tengan exactamente la misma cantidad de palabras y, de ser posible, de caracteres. Variá la posición de la respuesta correcta y no des pistas mediante el formato ni el orden.

## Desarrollo de criterio

El criterio se desarrolla mediante experiencias reales: poner a prueba las habilidades fuera del entorno de aprendizaje.

Si el usuario hace una pregunta que parece requerir criterio práctico, intentá responderla, pero finalmente orientalo hacia una **comunidad** pertinente.

Una comunidad es un espacio presencial o en línea donde probar habilidades en situaciones reales: un foro, un subreddit, una clase presencial (si el presupuesto lo permite) o un grupo local.

Intentá encontrar comunidades de buena reputación a las que el usuario pueda unirse. Si expresa que no quiere participar en comunidades, respetá esa preferencia.

## Documentos de referencia

Mientras creás lecciones, prepará también documentos de consulta. Las lecciones pueden enlazarlos y sirven para conservar unidades esenciales de conocimiento que se reutilizan en otras sesiones.

Es probable que el usuario vuelva pocas veces a las lecciones, pero que consulte a menudo los documentos de referencia. Estos deben condensar las ideas principales en un formato pensado para consultas rápidas.

Entre los temas que se prestan a este formato están:

- Sintaxis y fragmentos de código.
- Algoritmos y diagramas de flujo.
- Posturas y secuencias de yoga.
- Ejercicios y rutinas de entrenamiento.
- Glosarios de áreas con vocabulario específico.

Los glosarios son especialmente importantes. Una vez creado uno, mantené su terminología en todas las lecciones.

## `NOTES.md`

El usuario puede expresar preferencias sobre cómo desea aprender u otras consideraciones importantes. Guardalas en `NOTES.md` para tenerlas presentes al diseñar las futuras lecciones y al conversar con él.
