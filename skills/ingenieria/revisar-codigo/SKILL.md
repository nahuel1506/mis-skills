---
name: revisar-codigo
description: Revisa cambios de una tarea, el árbol de trabajo, una rama o un PR según las normas del repositorio y los requisitos de origen.
---

## Fijá el alcance

- **Tarea en curso.** Revisá sus cambios, incluidos los que estén sin commit y los archivos nuevos que pertenezcan a la tarea. Excluí los cambios ajenos, incluso cuando compartan archivo con la tarea.
- **Cambios sin commit.** Inspeccioná lo preparado y lo sin preparar por separado si hay archivos en ambos estados. Incluí archivos nuevos pertinentes. Si se pidió solo lo preparado, usá ese conjunto.
- **Rama o PR.** Usá como destino la rama o commit pedido. Compará con la base indicada o, para un PR, con el ancestro común con su base. Verificá las referencias y el diff.

Preguntá si una ambigüedad cambiaría qué entra en la revisión.

## Evaluá dos criterios

- **Normas.** Leé los estándares aplicables del proyecto. Contrastá los cambios con esas reglas y señalá defectos o riesgos que puedas vincular al diff. Si un problema de estilo ya está cubierto por una comprobación fiable, priorizá el resultado de esa comprobación.
- **Especificación.** Priorizá la spec, el ticket o la rúbrica que indicó el usuario. Usá los criterios acordados en la conversación cuando formen parte de lo que se pidió revisar. Buscá el origen vinculado al PR, al ticket, a los commits o a la documentación cuando no esté indicado. Revisá requisitos omitidos, implementaciones parciales o incorrectas y cambios que amplíen el alcance. Si falta una fuente, revisá las normas e indicá qué quedó sin verificar. Pedí la fuente si esa comparación era central al pedido.

Por defecto, hacé ambas evaluaciones en la misma sesión. Si el alcance justifica una segunda lectura independiente o el usuario la pide, podés usar subagentes cuando estén disponibles. Pasales el mismo alcance y las fuentes pertinentes. Pediles realizar esa revisión directamente, sin volver a delegarla. Contrastá cada hallazgo devuelto con el diff antes de reportarlo.

## Presentá los hallazgos

Ordenalos por impacto dentro de cada criterio. Ubicá el problema en el diff o indicá el comportamiento requerido que falta. Explicá su consecuencia y citá la norma o el requisito cuando corresponda. Para una observación de diseño, identificá qué dificultad verificable introduce. Separá los hallazgos respaldados de las comprobaciones pendientes.
