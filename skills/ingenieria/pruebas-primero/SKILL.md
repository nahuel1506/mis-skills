---
name: pruebas-primero
description: Implementa un comportamiento o corrige un error con pruebas primero (rojo, verde y refactorización). Usar cuando lo pida el usuario o lo indique otra skill.
---

# Desarrollo guiado por pruebas (TDD)

Probá el comportamiento observable desde la interfaz pública que usan sus consumidores, no detalles internos ni llamadas entre colaboradores internos. Obtené el resultado esperado de la especificación, un ejemplo resuelto u otra fuente independiente de la implementación (evitá pruebas tautológicas). Si el cambio es mecánico y no introduce comportamiento nuevo, usá la verificación adecuada al cambio.

## Dónde probar

Reutilizá el límite acordado o un punto de prueba existente que dé una señal fiable. Si el repo no tiene infraestructura de pruebas para ese límite, consultá antes de introducirla o acordá qué verificación alternativa usar. Si la elección cambia qué garantías se verifican, explicá qué detecta cada opción y confirmala con el usuario.

## Ciclo proporcional al riesgo

- **Lógica compleja, casos límite delicados o bugs:** avanzá un comportamiento pequeño a la vez.
- **Flujos claros con criterios definidos:** agrupá pruebas por criterio o recorrido para evitar rondas redundantes de compilación y ejecución.

1. **Rojo.** Escribí primero las pruebas del incremento y ejecutalas; confirmá que fallen por el motivo correcto (si ya pasan, verificá si el comportamiento ya existe o si la prueba no distingue el caso).
2. **Verde.** Implementá lo necesario para que pasen y volvé a ejecutarlas.
3. **Refactorización.** Limpiá duplicaciones o legibilidad local y repetí la verificación. Tratá aparte rediseños o cambios de contrato.

Consultá [mocking.md](mocking.md) cuando necesites decidir si sustituir una dependencia según el límite bajo prueba.
