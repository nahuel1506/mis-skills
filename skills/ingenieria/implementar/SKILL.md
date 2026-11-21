---
name: implementar
description: Implementa y verifica un pedido directo, una especificación o tickets siguiendo los estándares del repositorio.
disable-model-invocation: true
---

1. **Tomá el alcance del pedido, la spec o los tickets.** Si el usuario referencia un ticket, consultalo e indicá su título. Aclará una referencia ambigua. Respetá los criterios y las decisiones ya tomadas. Elegí los detalles que el usuario delegó y consultá si la evidencia obliga a cambiar un acuerdo.
2. **Implementá y verificá.** Seguí los estándares del repo y mantené coherencia con su estructura, separación de responsabilidades y ADR vigentes, sin agregar abstracciones innecesarias. Si detectás evidencia concreta de que conviene cambiar una convención estructural del proyecto, proponelo con sus motivos y trade-offs en lugar de divergir en silencio. Para cambios de comportamiento, usá `pruebas-primero` por defecto —ajustando la granularidad del ciclo al riesgo— y pasale los límites de prueba ya acordados. Para cambios mecánicos, usá las comprobaciones pertinentes. Ejecutá las verificaciones que exige el repo y ampliá según los consumidores, contratos o migraciones afectados. Probá manualmente los flujos que lo requieran.
3. **Revisá el resultado.** Pasá a `revisar-codigo` el alcance de la tarea, incluidos sus cambios sin commit y archivos nuevos, y los criterios de aceptación disponibles. Si la skill no está disponible, revisá ese mismo alcance contra el pedido y los estándares del repo. Corregí los hallazgos verificados dentro del alcance y repetí las comprobaciones afectadas. Al cerrar, indicá qué verificaste y qué quedó pendiente.

Creá un commit si el usuario lo pide o si el flujo del repositorio lo establece. Incluí en él los cambios de la tarea.
