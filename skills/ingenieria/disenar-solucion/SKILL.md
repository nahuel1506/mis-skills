---
name: disenar-solucion
description: Diseña en profundidad CÓMO construir una solución técnica sobre el código real, comparando alternativas, contratos, flujos y modos de fallo.
disable-model-invocation: true
---

# Diseñar cómo construirlo

1. **Anclá en el código real.** Inspeccioná los archivos, contratos, configuración y ADR reales que se verán afectados antes de proponer (no diseñes en abstracto). Si el usuario quiere razonar primero, planteá una pregunta neutral y esperá.

2. **Aterrizá el diseño técnico (evitá quedarte en titulares).** Cubrí con precisión concreta los aspectos que importan para esta tarea:
   - **Componentes y límites:** qué módulos, servicios, endpoints o infraestructura se crean o modifican y cómo encajan en la arquitectura vigente. Evaluá si cada abstracción oculta complejidad real o solo delega.
   - **Contratos, datos y configuración:** interfaces, rutas, payloads, esquemas, nombres de métricas/eventos o variables de entorno relevantes (mostrá ejemplos desde la perspectiva del consumidor cuando importe).
   - **Flujo y modos de fallo:** recorrido de extremo a extremo, estados clave, timeouts, concurrencia, seguridad/privacidad y cómo se comporta el sistema si falla una dependencia.
   - **Criterio firme, no menús tibios:** **proponé directamente la mejor solución técnica** para este repo y sus restricciones, explicando por qué supera a las alternativas descartadas (incluyendo conservar lo existente). Abrí opciones para elegir solo cuando exista un compromiso genuino que dependa de prioridades del usuario, sin poner opciones inferiores en pie de igualdad solo por listar pros y contras. En decisiones de alto impacto o si el hilo ya acumuló mucho contexto, podés delegar un análisis en contexto limpio a un subagente (pasándole solo el problema, restricciones y archivos relevantes) para contrastar tu recomendación sin sesgo acumulado.
   - **Ayuda visual para el usuario:** incluí una vista visual sobria (UI visual/interactiva inline si el entorno la soporta, o Mermaid/esquema compacto en el chat) siempre que el diseño involucre **interacción entre varias piezas/sistemas**, **estados con transiciones o fallos**, **transformación de datos paso a paso** o **contraste entre alternativas estructurales**. Omitila solo en ajustes lineales o puntuales.

3. **Iterá con franqueza y cerrá con criterio.** Defendé tu criterio técnico sin complacencia: si el usuario propone o elige una alternativa claramente inferior o con un riesgo concreto (fallo de concurrencia, acoplamiento, seguridad o costo operativo), **frenalo explícitamente** mostrando el escenario donde falla y por qué la alternativa recomendada es mejor; solo avanzá con esa opción si el usuario confirma asumir el trade-off conscientemente. Preguntá si quiere profundizar algún punto antes de dar por cerrado el diseño (si falta evidencia, definí qué respondería un prototipo con `prototipar`). Al cerrar:
   - Resumí el diseño concreto (componentes, contratos, verificación y qué queda delegado al implementador).
   - **Evaluá proactivamente glosario y ADR (`modelar-dominio`):** comprobá si surgieron decisiones difíciles de revertir y no evidentes desde el código o términos nuevos; si corresponde, proponé el borrador breve del ADR o término para confirmar si se guarda ahora (no esperes a que el usuario lo pida).
   - Si el hilo acumuló mucha exploración, sugerí bajar lo acordado a una spec (`especificar`) y ejecutar la implementación en una sesión limpia.
