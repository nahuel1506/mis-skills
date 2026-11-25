---
name: disenar-solucion
description: Decide CÓMO construir una solución técnica comparando alternativas reales, trade-offs y criterios de verificación.
disable-model-invocation: true
---

# Diseñar cómo construirlo

1. **Ubicá la decisión.** Partí del objetivo, las restricciones y los acuerdos vigentes (qué construir). Consultá solo el código, contratos y ADR que puedan cambiar la discusión. Si el usuario trae una propuesta, partí de ella. Si quiere razonar primero, planteá una pregunta neutral y esperá antes de sugerir un enfoque.
2. **Explorá alternativas reales.** Contrastá opciones que cambien compromisos concretos (responsabilidades, ubicación de límites entre módulos o complejidad expuesta al consumidor), incluyendo conservar lo que existe cuando sea viable. Evaluá si cada capa o abstracción oculta complejidad real o solo delega sin valor, mostrando un ejemplo desde la perspectiva del consumidor cuando importe la interfaz. Si la decisión gana con miradas independientes y el entorno lo permite, explorá alternativas en subagentes separados con las mismas restricciones y prioridades distintas. Si una idea falla, mostrá el escenario y la consecuencia. Recomendá una opción con su motivo y qué evidencia cambiaría esa recomendación. Usá un diagrama si aclara un flujo, contrato o estado.
3. **Cerrá el diseño.** Dejá que el usuario decida los puntos que cambian la solución. Si falta evidencia, definí la pregunta exacta que respondería un prototipo (`prototipar`). Resumí lo decidido, por qué y cómo verificarlo, distinguiendo lo abierto de lo delegado al implementador. Si la decisión es difícil de revertir y no evidente desde el código, ofrecé registrarla en un ADR (`modelar-dominio`).

Terminá con ese resumen en el chat. Si el hilo acumuló mucha exploración, sugerí bajar lo acordado a una spec/ADR y continuar la implementación en una sesión limpia.
