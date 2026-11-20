---
name: dividir-en-tareas
description: Divide una spec, plan o conversación en entregas verificables con bloqueos explícitos y publica los tickets aprobados.
disable-model-invocation: true
---

## Diseñá la división

Usá la conversación o leé la spec, el ticket o el plan indicado. Consultá el código solo si hace falta para entender el alcance, los bloqueos o cómo verificar un incremento.

- Cada ticket entrega un resultado que se pueda demostrar o verificar por separado una vez resueltos sus bloqueos. Incluí todas las capas necesarias para que ese resultado funcione. Un solo ticket alcanza si dividir el trabajo deja piezas que solo se pueden comprobar juntas.
- Conservá en cada ticket los criterios acordados que le corresponden, con sus condiciones y excepciones. Enlazá o identificá la sección de origen cuando exista una spec. Comprobá que los resultados requeridos queden cubiertos por el conjunto de tickets.
- Declará solo bloqueos reales. Si una refactorización preparatoria hace falta, proponela como ticket previo y explicá qué desbloquea.

**Migraciones amplias.** Cuando un cambio mecánico no se pueda entregar por recorridos completos, usá expandir, migrar y contraer. Agregá la forma nueva junto a la anterior. Migrá consumidores por lotes que dependan de esa ampliación. Retirá la forma anterior después de todos los lotes. Si los lotes necesitan una rama común para funcionar, planificá un ticket final de integración y verificación con las dependencias correspondientes.

## Confirmá y publicá

Si la división todavía no fue aprobada, mostrá para cada ticket el título, qué entrega, cómo se puede comprobar y qué lo bloquea. Pedí aprobación del conjunto antes de publicarlo. Si ya se aprobó, publicá directamente.

1. **Elegí el destino.** Usá el que indique el usuario. En su defecto, seguí el destino de la spec. A falta de ambos, usá el gestor configurado o archivos locales.
2. **Publicá en orden de dependencias.** En el gestor, usá relaciones nativas de bloqueo y de subtarea cuando estén disponibles y correspondan al origen. Si faltan, enlazá el origen y enumerá los bloqueantes en el ticket. Aplicá la etiqueta de listo según las convenciones del proyecto. En local, usá el directorio indicado o `issues/` junto a la spec de `.scratch/`. Si no corresponde ninguno, usá `.scratch/<feature-slug>/issues/`. Guardá un archivo `<NN>-<slug>.md` por ticket, con identificadores únicos y bloqueantes primero.
3. **Devolvé las referencias.** Indicá qué tickets quedaron creados y cuáles se pueden tomar primero. Si retomás una publicación parcial, verificá los tickets existentes y completá solo lo pendiente. Conservá abierto el ticket padre y mantené su contenido.

## Plantillas

Para una issue, seguí el formato del proyecto. Incluí **qué construir**, **criterios de aceptación verificables**, **origen** cuando exista y **bloqueos** cuando no queden representados por el gestor.

Para el formato local por defecto:

```markdown
# <NN>: <título>

Status: ready-for-agent
Blocked by: <IDs de los tickets bloqueantes, vacío si no hay>

## Qué construir
<resultado verificable que entrega el ticket>

## Origen
<spec y sección correspondiente, cuando exista>

## Criterios de aceptación
- [ ] <resultado observable>
```

Usá las claves operativas del gestor local, como `Status:` y `Blocked by:`, según la configuración del repo. Incluí referencias o fragmentos de contrato, datos de ejemplo y especificaciones de estados si son necesarios para que el ticket se pueda retomar fuera de esta conversación.
