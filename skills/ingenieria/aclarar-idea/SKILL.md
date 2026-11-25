---
name: aclarar-idea
description: Define QUÉ construir mediante una entrevista por rondas sobre alcance, reglas de negocio y casos límite, registrando glosario o ADR cuando corresponda.
disable-model-invocation: true
---

# Aclarar qué construir

## 1. Conducí la entrevista por rondas

Delimitá la idea, las reglas de negocio, los casos límite y el alcance armando un árbol de decisiones. Cada ronda cubre la **frontera** (preguntas que ya se pueden responder con los hechos disponibles); dejá para la siguiente ronda las que dependan de respuestas pendientes. Recalculá la frontera con cada respuesta y retomá solo los acuerdos afectados si aparece una contradicción. Si el usuario pide avanzar pregunta por pregunta, seguí ese ritmo.

Comprobá hechos en el código o la documentación del repo antes de preguntar lo que ya está resuelto (delegá investigaciones amplias a un subagente de solo lectura si el entorno lo permite). Si decidir requiere observar un comportamiento, explicá qué evidencia resolvería la duda y dejala abierta hasta tenerla.

## 2. Formulá preguntas fáciles de responder

Si la ronda es extensa, agrupala por tema con numeración única. Conservá las condiciones y excepciones que cambian la respuesta y usá el vocabulario del glosario del proyecto.

```
❓ **P1 — <título del caso o decisión>**

<situación concreta, si hace falta>

<pregunta directa y puntos que debe cubrir la respuesta>

➡️ **Mi recomendación:** <respuesta y motivo>
```

Planteá la pregunta antes de recomendar. Si hay opciones definidas, dales nombres cortos y explicá qué cambia con cada una para responder por letra o proponer otra. Las decisiones corresponden al usuario.

## 3. Cerrá y registrá si corresponde

Cuando la frontera quede vacía (o el usuario quiera cerrar), resumí los acuerdos con sus condiciones, excepciones y dudas abiertas, y verificá que coincidan con lo que entendió.

Si el usuario pide registrar vocabulario o decisiones —o si durante la entrevista surgieron términos de dominio o decisiones de norte/arquitectura relevantes y confirma guardarlos—, aplicá `modelar-dominio` para actualizar el glosario y los ADR. Indicá qué documentos se actualizaron y qué acuerdos quedaron solo en el chat. Pasá a diseñar (`disenar-solucion`), especificar (`especificar`) o implementar solo cuando el usuario lo pida.
