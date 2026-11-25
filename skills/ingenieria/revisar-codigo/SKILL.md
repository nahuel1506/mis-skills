---
name: revisar-codigo
description: Revisa cambios de una tarea, el árbol de trabajo, una rama o un PR contra las normas del repositorio y sus requisitos de origen.
---

## 1. Fijá el alcance

- **Tarea en curso:** cambios de la tarea (con o sin commit y archivos nuevos), excluyendo cambios ajenos aunque compartan archivo.
- **Árbol sin commit:** inspeccioná lo preparado y lo sin preparar por separado si hay ambos estados.
- **Rama o PR:** compará el destino con su base (o ancestro común del PR).

Preguntá solo si una ambigüedad cambia qué entra en la revisión.

## 2. Evaluá dos criterios

- **Normas:** contrastá el diff contra los estándares, ADR vigentes y código vecino del proyecto. Señalá defectos, riesgos, abstracciones innecesarias, desvíos silenciosos de arquitectura o documentación afectada que quedó desactualizada. Si un linter/check fiable ya cubre estilo, priorizá su resultado.
- **Especificación:** contrastá contra la spec, ticket o criterios acordados (buscá el origen vinculado si no se indicó). Señalá requisitos omitidos, implementaciones parciales/incorrectas o cambios fuera de alcance. Si falta la fuente, revisá normas e indicá qué quedó sin verificar.

Si el hilo actual ya acumuló mucho contexto (por ejemplo, tras una implementación larga) o el cambio toca varios módulos, delegá la revisión a un subagente independiente sobre el diff y las fuentes concretas cuando el entorno lo permita, pidiéndole revisar directamente sin volver a delegar. Contrastá cada hallazgo devuelto contra el diff antes de reportarlo.

## 3. Presentá hallazgos verificables

Ordenalos por impacto dentro de cada criterio. Ubicá el problema en el diff (o el requisito faltante), explicá su consecuencia verificable y citá la norma o requisito. Separá hallazgos respaldados de comprobaciones pendientes.
