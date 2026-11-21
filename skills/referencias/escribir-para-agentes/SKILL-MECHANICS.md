# Funcionamiento de las skills

Esta es la parte específica de [`escribir-para-agentes`](SKILL.md) para documentos que son skills: qué cambia en el frontmatter, cómo elegir el tipo de invocación y qué son las skills de encaminamiento (*router*). Las reglas generales de escritura están en `SKILL.md`.

## Invocación

Hay dos opciones, con distintos costos de contexto y de esfuerzo para el usuario:

- Una skill de **invocación por el modelo** conserva `description`, de modo que el agente pueda activarla por su cuenta y otras skills puedan llegar a ella. El usuario también puede escribir su nombre: permitir invocación automática **no** elimina la invocación manual. La descripción es el puntero de contexto de nivel superior de la skill y se mantiene cargada siempre: se paga una carga permanente de contexto a cambio de poder descubrirla. Una skill invocable por el modelo cuyo contenido sea solo material de referencia también puede centralizar referencias compartidas: otras skills pueden llamarla. Mecánica: omití `disable-model-invocation` y redactá una descripción dirigida al modelo que incluya las situaciones de activación (siguiendo las reglas para punteros de `SKILL.md`).
- Una skill de **invocación por el usuario** queda fuera del descubrimiento automático: solo la puede ejecutar quien escriba su nombre, y ninguna otra skill puede invocarla. No añade carga de contexto permanente, pero obliga al usuario a recordar que existe. Mecánica: establecé `disable-model-invocation: true`; `description` pasa a estar dirigida a la persona y debe ser un resumen de una línea, sin listas de activadores. Si otra skill necesita derivar a una skill manual, debe sugerirle al usuario invocarla (o expresar directamente en una línea el comportamiento mínimo necesario), sin asumir que puede cargarla automáticamente.

Elegí la invocación por el modelo solo cuando el agente deba poder activar la skill por sí mismo o cuando otra skill necesite usarla. Si siempre se activa manualmente, hacela invocable por el usuario y evitá ocupar contexto.

Las referencias compartidas que necesitan dos skills exclusivamente manuales no pueden vivir en ninguna de ellas: al carecer de descripciones accesibles, no pueden llamarse entre sí. Colocá esa referencia en un archivo normal fuera del sistema de skills, al que ambas puedan apuntar.

## Separación según la invocación

Esta es la regla de separación por activación (la separación por secuencia está en `SKILL.md`): extraé una skill invocable por el modelo cuando exista una expresión o intención diferenciada que deba activarla por sí sola (algo que realmente uses en tus pedidos), o cuando otra skill deba llegar a ella. Una descripción nueva ocupa contexto permanente, por lo que esa independencia debe justificar su costo.

## Skills de encaminamiento

Cuando tenés tantas skills manuales que no podés recordar todas, podés crear una **skill de encaminamiento** (*router*): una única skill manual que enumera las demás e indica cuándo conviene utilizarlas. Así recordás un solo nombre. El encaminador puede sugerirlas, pero no invocarlas: las skills solo manuales no exponen su descripción y únicamente el usuario puede activarlas.
