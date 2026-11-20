---
name: especificar
description: Convierte acuerdos en una especificación verificable y la publica en el gestor configurado o la guarda localmente.
disable-model-invocation: true
---

1. **Sintetizá lo acordado.** Usá la conversación y las referencias indicadas. Consultá el código, el glosario y los ADR pertinentes para comprobar el contexto. Conservá condiciones exactas, ejemplos, excepciones y decisiones de alcance que puedan cambiar lo que se construye. Señalá los detalles delegados al implementador.
2. **Definí cómo comprobarlo.** Reutilizá los límites de prueba acordados o un punto de prueba existente que cubra lo pedido. Si la elección cambia qué garantías se pueden verificar, explicá las opciones y confirmala. Si queda abierta una decisión sobre comportamiento, alcance o verificación, planteá esa duda puntual antes de publicar.
3. **Redactá y publicá.** Usá la plantilla como base y seguí el formato de issues que indique el proyecto. Mostrá una vista previa si el usuario la pide o si el formato requiere una decisión. Cuando la spec esté lista, usá el destino indicado. En su defecto, publicala en el gestor configurado o, si no hay uno, guardala en `.scratch/<feature-slug>/spec.md`. Aplicá el estado o etiqueta que use el proyecto para especificaciones listas. Si `ready-for-agent` desencadena la implementación de tickets y la spec solo será su referencia, conservá esa distinción al etiquetar. Devolvé un enlace o la ruta de la spec.

## Plantilla adaptable

- **Problema y objetivo.** Qué se quiere resolver, para quién y qué cambia al resolverlo.
- **Comportamiento y criterios de aceptación.** Resultados observables y casos límite acordados. Usá historias de usuario si aclaran quién necesita el comportamiento y para qué.
- **Decisiones de implementación.** Contratos, datos, interfaces o decisiones de arquitectura acordados. Enlazá los ADR o la evidencia del prototipo si ayudan a entender una decisión. Incluí un esquema, una transición de estados o un fragmento del prototipo si representa el acuerdo con más precisión que la prosa.
- **Decisiones de pruebas.** Dónde se observa cada garantía y qué resultado hay que comprobar. Citá pruebas existentes si ayudan a continuar.
- **Fuera de alcance y detalles delegados.** Qué queda fuera y qué puede decidir el implementador.

Conservá referencias a contratos o documentos estables cuando ayuden a verificar o continuar el trabajo. Los detalles de implementación que puedan cambiar pertenecen al código o a los tickets pertinentes.
