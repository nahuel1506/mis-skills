# Prototipo de interfaz

Usá esta guía para evaluar una interacción o comparar alternativas de interfaz. Para una duda centrada en lógica o estados, consultá [LOGIC.md](LOGIC.md).

## Prepará la evaluación

- **Elegí dónde mostrarlo.** Si importa el contexto real, usá la pantalla, el diseño y los componentes del proyecto. Conservá la autenticación y el comportamiento habitual de esa pantalla. Si una demo aislada alcanza, usá el mecanismo de prototipos del repo o una ruta descartable.
- **Representá casos comparables.** Usá datos de prueba con densidad y estados representativos. Si la interacción necesita escribir algo, simulá el efecto con datos descartables.
- **Hacé variantes cuando la pregunta requiera elegir.** Que difieran en algo que pueda cambiar la experiencia, como el orden de los pasos, la jerarquía o cómo se completa la acción. Una sola demo alcanza si querés observar una interacción concreta.

Habilitá la ruta, las variantes y sus controles solo en desarrollo. En una pantalla existente, comprobá que la versión habitual siga siendo la que se usa en producción.

## Ejemplo de comparación

Si querés que se puedan abrir y compartir dos alternativas en la misma pantalla, podés usar `?variant=A` y `?variant=B`. Un selector sencillo puede mostrar la alternativa activa y cambiar ese parámetro. Si agregás atajos de teclado, respetá el foco de campos editables. Si el repo ya tiene un patrón de comparación, aprovechalo.

## Entrega

Indicá cómo abrir la demo y qué interacción o variante conviene probar. Resumí lo observado y qué queda por evaluar. Si el usuario elige una variante, registrá cuál y por qué. Para incorporar la decisión al código real o conservar el experimento, seguí el cierre de [prototipar](SKILL.md).
