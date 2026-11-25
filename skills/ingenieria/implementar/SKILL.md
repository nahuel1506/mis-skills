---
name: implementar
description: Implementa y verifica un pedido directo, una especificación o un ticket manteniendo coherencia arquitectónica e higiene de contexto.
disable-model-invocation: true
---

1. **Delimitá alcance y contexto.** Si el usuario referencia un ticket o spec, consultalo e indicá su título; aclará cualquier ambigüedad antes de editar. Leé solo el código, glosario y ADR necesarios para el alcance (buscá antes de abrir archivos enteros; si hace falta explorar muchas áreas del repo, delegá ese barrido a un subagente de solo lectura cuando el entorno lo permita). Respetá criterios y decisiones tomadas; elegí los detalles delegados y consultá si la evidencia obliga a cambiar un acuerdo.
2. **Implementá y verificá.** Seguí los estándares del repo y mantené coherencia con su arquitectura, separación de responsabilidades y ADR vigentes, sin agregar abstracciones innecesarias. Si detectás evidencia concreta de que conviene cambiar una convención estructural, proponelo con sus motivos y trade-offs en lugar de divergir en silencio. Si el cambio altera una regla, contrato o decisión documentada (como un ADR o guía de área), actualizala o proponé ajustarla para evitar documentación en conflicto. Para cambios de comportamiento usá `pruebas-primero` (ajustando la granularidad al riesgo); para cambios mecánicos usá las comprobaciones pertinentes. Ejecutá las verificaciones exigidas por el repo y probá manualmente los flujos que lo requieran.
3. **Revisá y cerrá.** Aplicá `revisar-codigo` sobre el alcance de la tarea (cambios sin commit y archivos nuevos) y los criterios de aceptación; si el hilo ya acumuló mucho contexto o el cambio es amplio, delegá la revisión a un subagente limpio sobre el diff cuando esté disponible. Corregí hallazgos verificados y repetí las comprobaciones afectadas. Al cerrar, indicá qué verificaste y qué quedó pendiente.

Creá un commit solo si el usuario lo pide o el flujo del repo lo establece. Si sigue otro ticket independiente, sugerí iniciar una sesión nueva o compactar antes de continuar.
