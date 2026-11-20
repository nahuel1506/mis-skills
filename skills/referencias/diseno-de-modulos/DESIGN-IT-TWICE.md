# Diseñalo dos veces

Usá esta guía cuando comparar diseños ayude a decidir cómo debería ser una interfaz. La idea de Ousterhout es explorar más de una forma viable del problema antes de elegir.

## 1. Delimitá el problema

Explicá qué necesita hacer el consumidor, qué restricciones deben cumplir todas las alternativas y dónde están las dependencias relevantes. Consultá [DEEPENING.md](DEEPENING.md) si su ubicación o sustitución cambia el diseño. Mostrá un ejemplo de uso si aclara la decisión. Si el usuario quiere pensar un enfoque primero, dale espacio para plantearlo.

## 2. Explorá alternativas distintas

Elegí alternativas que cambien la responsabilidad del módulo, la ubicación del punto de separación o lo que el consumidor tiene que saber. Por ejemplo, podés explorar una interfaz pequeña para el caso común, otra que preserve flexibilidad útil y otra que aísle una dependencia externa. Elegí cuántas hacen falta según la decisión.

Podés explorar las opciones en la misma sesión. Si la decisión se beneficia de una lectura independiente y el entorno lo permite, delegá alternativas con contextos separados. Compartí las mismas restricciones, rutas relevantes y vocabulario del dominio. Asigná a cada alternativa una prioridad distinta para que la comparación revele compromisos reales.

Para cada alternativa, incluí lo que ayude a decidir:

- La interfaz y sus garantías, incluidos los errores o el orden de llamadas si importan.
- Un ejemplo desde la perspectiva del consumidor.
- Qué detalles oculta, qué dependencias cruza y cómo se comprobaría su comportamiento.
- Qué cambio futuro resultaría más fácil y qué costo o limitación seguiría existiendo.

## 3. Compará y recomendá

Contrastá las alternativas por lo que ofrecen a sus consumidores, dónde quedarían los cambios y qué consecuencias trae el punto de separación elegido. Explicá por qué recomendarías una, cuándo el costo favorece conservar el diseño actual o qué combinación preservaría las ventajas pertinentes. Usá el vocabulario de [SKILL.md](SKILL.md) para precisar diferencias que importen al proyecto.
