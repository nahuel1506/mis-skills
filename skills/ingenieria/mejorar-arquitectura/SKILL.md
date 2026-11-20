---
name: mejorar-arquitectura
description: Revisa el código para encontrar mejoras estructurales, explicar su impacto y priorizar cuáles conviene explorar.
disable-model-invocation: true
---

# Mejorar la arquitectura del código

## 1. Delimitá la revisión

Partí del módulo, servicio o problema indicado. Si el alcance es el repositorio en general, empezá por áreas con cambios frecuentes, comportamientos difíciles de probar o fricción que se vea en el código o su historial. Consultá el glosario y los ADR del área según las rutas del proyecto. Usá `diseno-de-modulos` como referencia cuando ayude a evaluar una interfaz o un punto de separación.

Buscá oportunidades donde una interfaz clara pueda ocultar complejidad que hoy manejan los consumidores. Fijate, por ejemplo, si cambiar una regla obliga a tocar varios módulos, si los consumidores necesitan conocer un orden de llamadas delicado o si una prueba tiene que depender de detalles internos para observar el resultado. Si un módulo parece solo delegar, considerá qué complejidad reaparecería en los consumidores si lo quitaras.

## 2. Priorizá candidatos con evidencia

Para cada candidato, incluí:

- **Evidencia.** Qué regla, contrato o caso muestra la dificultad y en qué archivos se puede comprobar.
- **Beneficio.** Qué cambio futuro sería más fácil o qué comportamiento pasaría a poder verificarse.
- **Costo y riesgo.** Qué consumidores, contratos o datos habría que migrar y qué compatibilidad habría que conservar. Si un ADR justifica la estructura actual, evaluá su motivo y explicá qué evidencia justificaría revisarlo.
- **Verificación.** Qué prueba o flujo mostraría que el cambio conserva el comportamiento.

Priorizá el candidato con el beneficio mejor respaldado. Si la estructura actual se justifica o el costo supera el beneficio, explicá por qué puede convenir conservarla. Un hallazgo describe una dirección que vale la pena explorar.

## 3. Presentá el resultado y dejá elegir cómo seguir

Entregá los hallazgos priorizados en el chat con referencias al código. Agregá un diagrama si aclara, por ejemplo, una dependencia, un flujo o el antes y después de un límite. Si el alcance o el uso del informe justifican un artefacto visual aparte, consultá [HTML-REPORT.md](HTML-REPORT.md) y aprovechá los patrones que sirvan al caso.

La revisión puede terminar con la recomendación. Si el usuario quiere diseñar una mejora en conjunto, pasá el hallazgo, sus restricciones y cómo verificarlo a `disenar-solucion`. Si pide delegar la ejecución, pasá ese contexto a `implementar`.
