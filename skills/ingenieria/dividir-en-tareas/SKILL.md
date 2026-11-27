---
name: dividir-en-tareas
description: Divide una spec, plan o conversación en tickets verificables y autosuficientes con bloqueos explícitos, listos para ejecutarse en sesiones limpias.
disable-model-invocation: true
---

## 1. Diseñá la división

Usá la conversación o leé la spec/plan indicado; consultá el código solo si hace falta para entender bloqueos o verificación.

- **Entregas verticales y acotadas:** cada ticket entrega un resultado verificable por separado (incluyendo las capas necesarias) y debe ser lo bastante acotado como para implementarse y verificarse en **una sola sesión limpia** sin inflar el contexto. Un solo ticket alcanza si dividirlo deja piezas que solo se comprueban juntas.
- **Autosuficiencia:** conservá en cada ticket sus criterios exactos, condiciones, excepciones, referencias a la spec/ADR, contratos y archivos/puntos de entrada relevantes para tomarlo desde un chat nuevo sin leer esta conversación. Comprobá que el conjunto cubra toda la spec.
- **Bloqueos reales:** declará solo dependencias verdaderas. Si hace falta una refactorización preparatoria, ponela como ticket previo explicando qué desbloquea.
- **Migraciones amplias:** cuando un cambio mecánico no quepa en recorridos completos, usá expandir → migrar por lotes → contraer, con un ticket final de integración si los lotes comparten rama.

## 2. Confirmá y publicá

Si la división no fue aprobada, mostrá por cada ticket: título, qué entrega, cómo se verifica y qué lo bloquea, y pedí aprobación del conjunto antes de publicar.

1. Seguí el destino indicado por el usuario, la spec o el proyecto (por defecto local: `.scratch/<feature-slug>/issues/<NN>-<slug>.md`).
2. Publicá en orden de dependencias usando bloqueos/subtareas nativas del gestor cuando existan y las etiquetas del proyecto. En local, usá:

```markdown
# <NN>: <título>

Status: ready-for-agent
Blocked by: <IDs bloqueantes, vacío si no hay>

## Qué construir
<resultado verificable>

## Origen
<spec y sección, cuando exista>

## Criterios de aceptación
- [ ] <resultado observable>

## Verificación
<límite o comprobación esperada>
```

3. Devolvé las referencias creadas e indicá qué tickets están desbloqueados para empezar primero. Conservá abierto el ticket padre.
