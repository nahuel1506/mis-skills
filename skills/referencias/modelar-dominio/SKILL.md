---
name: modelar-dominio
description: Precisa el vocabulario del negocio (glosario) y registra decisiones deliberadas de arquitectura (ADR). Usar al acordar términos, registrar decisiones o cuando otra skill lo indique.
---

# Modelado del dominio

El **código** es la verdad viva de *cómo funciona* el sistema hoy. Esta skill mantiene los dos artefactos que el código por sí solo no puede expresar:

- **Glosario (`GLOSSARY.md`):** fija el lenguaje compartido del negocio (qué es exactamente cada concepto del dominio y qué sinónimos evitar) para que código, interfaz, specs y agentes nombren igual las mismas cosas.
- **ADR (`docs/adr/`):** registra el **norte y la intención** de las decisiones deliberadas (*qué* se eligió, *por qué* y *qué alternativas se descartaron*), distinguiendo decisiones intencionales de deuda técnica accidental.

Ninguno de los dos duplica detalles de implementación (clases, métodos o flujos internos).

## Ubicación

Seguí las rutas declaradas en el proyecto o en `docs/agents/domain.md` (si existe). Si hay varios contextos, consultá `GLOSSARY-MAP.md`. Por defecto: `GLOSSARY.md` y `docs/adr/` en la raíz ([GLOSSARY-FORMAT.md](GLOSSARY-FORMAT.md), [ADR-FORMAT.md](ADR-FORMAT.md)).

## Precisá términos y reglas

Contrastá el vocabulario con el glosario vigente. Aclará enseguida toda ambigüedad que cambie una regla o alcance usando casos concretos (y distinguí sentidos distintos entre contextos). Si una descripción contradice el código actual, señalá qué pasa hoy y preguntá cuál debe ser el comportamiento objetivo.

## Registrá lo acordado

- **Glosario:** actualizalo cuando un término de dominio y su significado estén acordados (creá el archivo solo al registrar el primero). No incluyas conceptos genéricos de programación.
- **ADR:** proponelo solo cuando la decisión esté tomada y cumpla **los tres criterios**:
  1. Cambiarla después tiene un costo relevante.
  2. Su motivo sería difícil de entender leyendo solo el código.
  3. Hubo una elección real entre alternativas.

Consultá los ADR vigentes del área: si un acuerdo nuevo cambia el norte anterior, marcá el ADR previo como `superseded by ADR-NNNN` y enlazá la relación para no dejar decisiones en conflicto.
