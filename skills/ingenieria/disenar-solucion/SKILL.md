---
name: disenar-solucion
description: Diseña una solución técnica junto con el usuario. Compara alternativas y deja acuerdos verificables que se pueden retomar al implementar.
disable-model-invocation: true
---

1. **Ubicá la decisión.** Partí del objetivo, las restricciones y lo ya acordado. Consultá el código, los contratos o los ADR que pueden cambiar la discusión. Si el usuario trae una propuesta, partí de ella. Si quiere razonar primero, planteá una pregunta neutral y esperá antes de sugerir un enfoque.
2. **Explorá las alternativas.** Contrastá opciones que cambien compromisos reales (responsabilidad, ubicación del punto de separación o lo que debe conocer el consumidor), incluyendo conservar lo que existe cuando sea viable. Si la decisión gira en torno a interfaces o separación de responsabilidades, consultá `diseno-de-modulos` y mostrá un ejemplo desde la perspectiva del consumidor. Si la decisión gana con miradas independientes y el entorno lo permite, podés explorar alternativas en contextos separados con las mismas restricciones y prioridades distintas. Si una idea falla, mostrale el escenario y la consecuencia. Después recomendá una opción con su motivo y explicá qué evidencia podría cambiar la recomendación. Usá un diagrama si ayuda a entender un flujo, un contrato o un estado.
3. **Cerrá el diseño con el usuario.** Dejá que decida los puntos que cambian la solución. Si falta evidencia, identificá la pregunta que respondería un prototipo o una prueba corta. Resumí lo decidido, por qué y qué se debe observar para verificarlo. Distinguí lo que queda abierto de los detalles delegados al implementador.

La sesión puede terminar con ese resumen en el chat. Redactá un documento, prototipá o implementá cuando el usuario te pida avanzar.
