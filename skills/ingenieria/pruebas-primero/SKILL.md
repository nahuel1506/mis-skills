---
name: pruebas-primero
description: Implementa un comportamiento o corrige un error mediante pruebas primero, con ciclos de rojo, verde y refactorización local.
---

# Desarrollo guiado por pruebas (TDD)

Probá el comportamiento observable desde la interfaz que usan sus consumidores. Obtené el resultado esperado de la especificación, un ejemplo resuelto u otra fuente independiente de la implementación. Cuando el cambio sea mecánico y no haya un comportamiento nuevo que comprobar, usá la verificación adecuada al cambio.

## Dónde probar

Reutilizá el límite acordado. Si no hay uno, preferí un punto de prueba existente que cubra lo pedido y dé una señal fiable. Si la elección afecta qué garantías se pueden verificar, explicá qué detecta cada opción y qué queda fuera, y confirmá la elección con el usuario.

## Ciclo

Trabajá un comportamiento pequeño a la vez, usando el resultado de cada ciclo para decidir el siguiente.

1. **Rojo.** Escribí primero la prueba y ejecutala. Comprobá que falle por el comportamiento que falta o es incorrecto. Si ya pasa, averiguá si el comportamiento ya existe o si la prueba no distingue el caso.
2. **Verde.** Implementá lo necesario para que pase y volvé a ejecutarla.
3. **Refactorización.** Si aparece una duplicación o un problema local de lectura, podés limpiarlo y ejecutar de nuevo la prueba. Tratá por separado los rediseños o cambios de contrato.

## Referencias

- Consultá el glosario y los ADR del área cuando sean pertinentes. Seguí las rutas del repositorio y su mapa de glosarios si existe.
- Consultá [tests.md](tests.md) si necesitás ejemplos para comprobar comportamiento en vez de detalles internos.
- Consultá [mocking.md](mocking.md) si necesitás sustituir una dependencia y elegí según el límite bajo prueba y los estándares del repo.
- Consultá `diseno-de-modulos` si está en discusión la forma de la interfaz o qué debe exponer.
