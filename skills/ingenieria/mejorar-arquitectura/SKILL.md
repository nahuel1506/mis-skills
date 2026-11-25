---
name: mejorar-arquitectura
description: Audita el código para proponer mejoras estructurales priorizadas con evidencia, beneficio, riesgo y verificación.
disable-model-invocation: true
---

# Mejorar la arquitectura del código

## 1. Delimitá y explorá sin saturar el contexto

Partí del módulo, problema o alcance indicado. Si abarca todo el repo, empezá por áreas con cambios frecuentes, fricción visible o dificultad para probar. Consultá el glosario y los ADR vigentes para entender qué decisiones son deliberadas. Cuando haya que auditar múltiples módulos, delegá lecturas amplias a subagentes de solo lectura (si el entorno lo permite) para que el hilo principal reciba hallazgos con evidencia en vez de decenas de archivos crudos.

Buscá oportunidades reales donde una interfaz más clara oculte complejidad hoy dispersa en consumidores, donde cambiar una regla obligue a tocar varios módulos o donde probar exija acoplarse a detalles internos. Si una capa o módulo parece solo delegar, evaluá qué complejidad o acoplamiento reaparecería al quitarlo y si responde a una separación de responsabilidades deliberada del proyecto.

## 2. Priorizá candidatos con evidencia

Para cada candidato, incluí:

- **Evidencia:** qué regla, contrato o caso muestra el problema y en qué archivos comprobarlo.
- **Beneficio:** qué cambio futuro se simplifica, qué rendimiento mejora o qué garantía pasa a poder probarse.
- **Costo y riesgo:** qué consumidores, contratos o datos migrar. Si un ADR respalda la estructura actual, evaluá su motivo y qué evidencia justifica revisarlo.
- **Verificación:** cómo comprobar que conserva comportamiento. Si consolida una frontera entre capas o módulos, considerá blindarla con un check determinista (linter o test de arquitectura) y limpiar documentación obsoleta.

Si la estructura actual se justifica o el costo supera el beneficio, explicalo explícitamente en lugar de forzar un refactor.

## 3. Presentá y cerrá

Entregá los hallazgos priorizados en el chat con referencias al código (y un diagrama si aclara). Si el volumen o uso justifica un informe visual aparte, consultá [HTML-REPORT.md](HTML-REPORT.md).

La revisión termina con la recomendación. Para diseñar una mejora en detalle sugerí `disenar-solucion`, o para ejecutarla sugerí `implementar` (idealmente en una sesión limpia por bloque aprobado).
