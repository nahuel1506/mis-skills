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

Si hay opciones definidas, dales nombres cortos y explicá qué cambia con cada una para responder por letra o proponer otra. El usuario decide el producto, pero sin complacencia: si la idea inicial o una elección genera una contradicción, complejidad desproporcionada, un problema de UX o un hueco claro de negocio, advertilo en breve con la consecuencia concreta y una alternativa más simple antes de aceptarla (si confirma, seguí adelante).

Incluí una vista visual sobria (UI visual/interactiva inline si el entorno la soporta, o Mermaid/esquema compacto) cuando aparezcan **estados con transiciones**, **relaciones entre entidades del dominio** o **dos opciones de negocio en contraste** —y al cerrar si lo acordado conecta varias reglas—. Omitila en preguntas lineales o puntuales.

## 3. Cerrá y evaluá glosario / ADR

Cuando la frontera quede vacía (o el usuario quiera cerrar), resumí los acuerdos con sus condiciones, excepciones y dudas abiertas, y verificá que coincidan con lo que entendió.

Antes de cerrar, **evaluá proactivamente** si surgieron términos nuevos de dominio o decisiones difíciles de revertir (`modelar-dominio`); si corresponde, proponé los términos o el borrador breve del ADR para confirmar si se guardan ahora (no esperes a que el usuario lo pida). Al registrar, indicá qué documentos se actualizaron y qué acuerdos quedaron en el chat. Pasá a diseñar (`disenar-solucion`), especificar (`especificar`) o implementar solo cuando el usuario lo pida.
