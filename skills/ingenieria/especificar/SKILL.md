---
name: especificar
description: Convierte acuerdos en una especificación verificable y autosuficiente, lista para dividir en tickets o implementar en una sesión limpia.
disable-model-invocation: true
---

1. **Sintetizá lo acordado.** Usá la conversación y las referencias indicadas; consultá el código, el glosario y los ADR solo para comprobar hechos. Conservá condiciones exactas, ejemplos, excepciones y alcance. Señalá explícitamente los detalles delegados al implementador.
2. **Definí cómo comprobarlo.** Reutilizá los límites de prueba acordados o un punto de prueba existente. Si la elección cambia qué garantías se verifican, explicá las opciones y confirmala. Planteá cualquier duda abierta sobre comportamiento, alcance o verificación antes de publicar.
3. **Redactá y publicá.** Seguí la plantilla base y el destino configurado en el proyecto (o, por defecto, `.scratch/<feature-slug>/spec.md`). Respetá las etiquetas del proyecto (distinguiendo una spec de referencia de tickets `ready-for-agent`) y devolvé el enlace o la ruta.

## Plantilla adaptable

- **Problema y objetivo.** Qué se resuelve, para quién y qué cambia.
- **Comportamiento y criterios de aceptación.** Resultados observables y casos límite acordados.
- **Decisiones de diseño.** Contratos, datos, interfaces o decisiones acordadas, enlazando ADR, evidencia de prototipo y los archivos o puntos de entrada relevantes ya identificados.
- **Verificación.** Dónde se observa cada garantía y qué resultado comprobar.
- **Fuera de alcance y detalles delegados.** Qué queda fuera y qué decide el implementador.

Escribí la spec para que pueda ejecutarse en una **sesión nueva** sin depender del historial de este chat. Conservá intención y contratos estables; los detalles internos de código pertenecen a la implementación.
