---
name: diseno-de-modulos
description: Principios para diseñar módulos profundos, evaluar interfaces, separación de responsabilidades y puntos de separación. Usar al analizar arquitectura, rediseñar interfaces o cuando otra skill lo indique.
---

# Diseño de módulos

Diseñá **módulos profundos**: mucho comportamiento útil detrás de una interfaz pequeña, ubicada en un punto de separación claro y fácil de comprobar.

Usá estos principios con criterio: evitá tanto las abstracciones innecesarias como los desvíos silenciosos respecto a la arquitectura vigente del proyecto. Si la estructura actual tiene sentido por consistencia, mantenibilidad y separación clara de responsabilidades, respetala; si la evidencia justifica cambiarla, proponelo explícitamente con sus motivos y trade-offs.

## Conceptos clave

Respetá los nombres reales del proyecto y su framework (`Service`, `Repository`, `Component`, `API`), usando estos conceptos para razonar sobre el diseño:

- **Módulo:** unidad con una interfaz y una implementación (función, clase, paquete o slice que atraviesa capas).
- **Interfaz:** todo lo que el consumidor necesita saber para usar el módulo correctamente: tipos, invariantes, orden de llamadas, errores y restricciones relevantes.
- **Profundidad:** aprovechamiento que ofrece la interfaz. Un módulo es **profundo** si oculta complejidad real tras una interfaz pequeña; es **superficial** si su interfaz expone casi tanta complejidad como su implementación o si solo delega llamadas sin aportar aislamiento ni claridad.
- **Punto de separación** (*seam*): lugar donde se puede sustituir o variar comportamiento sin modificar a sus consumidores; es la ubicación de la interfaz.
- **Adaptador:** implementación concreta que satisface una interfaz en un punto de separación (por ejemplo, Postgres en producción y un sustituto en memoria en pruebas).
- **Aprovechamiento:** beneficio para los consumidores (más capacidad por cada detalle que deben conocer).
- **Localidad:** beneficio para quien mantiene el código (cambios, invariantes y errores se concentran en un solo lugar).

## Principios

- **Simplificá la superficie:** al diseñar una interfaz, preguntate si podés reducir métodos, simplificar parámetros u ocultar más complejidad dentro del módulo.
- **La profundidad es una propiedad de la interfaz, no de la implementación.** Un módulo profundo puede componerse internamente de piezas pequeñas con **puntos de separación internos** sin exponerlos en su interfaz pública.
- **Prueba de eliminación (con contexto):** imaginá quitar un módulo o capa. Si la complejidad reaparece en múltiples consumidores, aporta valor real. Si solo delega, evaluá si cumple una función deliberada de consistencia o aislamiento del proyecto antes de mantenerlo o proponer eliminarlo.
- **La interfaz es la superficie de prueba:** consumidores y pruebas deberían cruzar el mismo punto de separación. Si probar requiere inspeccionar detalles internos, revisá la forma del módulo.
- **Justificá cada punto de separación:** dos adaptadores demuestran necesidad de sustitución; uno solo también se justifica si aísla un contrato externo, protege a los consumidores de complejidad real, mantiene una separación de responsabilidades coherente en el repo o habilita pruebas fiables. Evitá crear capas especulativas por escenarios hipotéticos.

## Guía complementaria

- **Consolidar módulos y clasificar dependencias:** consultá [DEEPENING.md](DEEPENING.md).
- Para comparar soluciones técnicas de forma interactiva con el usuario, sugerí usar `disenar-solucion`.
