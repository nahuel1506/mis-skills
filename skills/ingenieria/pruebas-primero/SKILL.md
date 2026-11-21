---
name: pruebas-primero
description: Implementa un comportamiento o corrige un error con pruebas primero (rojo, verde y refactorización). Usar cuando lo pida el usuario o lo indique otra skill.
---

# Desarrollo guiado por pruebas (TDD)

Probá el comportamiento observable desde la interfaz pública que usan sus consumidores, no detalles internos ni llamadas entre colaboradores internos. Obtené el resultado esperado de la especificación, un ejemplo resuelto u otra fuente independiente de la implementación (evitá pruebas tautológicas). Cuando el cambio sea mecánico y no haya un comportamiento nuevo que comprobar, usá la verificación adecuada al cambio.

## Dónde probar

Reutilizá el límite acordado. Si no hay uno, preferí un punto de prueba existente que cubra lo pedido y dé una señal fiable. Si el repo no tiene infraestructura de pruebas para ese límite, consultá antes de introducirla o acordá qué verificación alternativa usar. Si la elección afecta qué garantías se pueden verificar, explicá qué detecta cada opción y qué queda fuera, y confirmala con el usuario.

## Ciclo

Ajustá la granularidad del ciclo al riesgo: en lógica compleja, casos límite delicados o errores difíciles, avanzá un comportamiento pequeño a la vez; en flujos claros con criterios bien definidos, podés agrupar las pruebas por criterio o recorrido para evitar rondas redundantes de compilación y ejecución.

1. **Rojo.** Escribí primero las pruebas del incremento y ejecutalas. Comprobá que fallen por el comportamiento faltante o incorrecto. Si ya pasan, averiguá si el comportamiento ya existe o si la prueba no distingue el caso.
2. **Verde.** Implementá lo necesario para que pasen manteniendo coherencia con la estructura y convenciones del repo (sin abstracciones innecesarias) y volvé a ejecutarlas.
3. **Refactorización.** Si aparece una duplicación o un problema local de lectura, limpialo y repetí la verificación. Tratá por separado los rediseños o cambios de contrato.

## Referencias

- Consultá el glosario y los ADR del área cuando sean pertinentes. Seguí las rutas del repositorio y su mapa de glosarios si existe.
- Consultá [mocking.md](mocking.md) si necesitás sustituir una dependencia y elegí según el límite bajo prueba y los estándares del repo.
- Consultá `diseno-de-modulos` si está en discusión la forma de la interfaz o qué debe exponer.
