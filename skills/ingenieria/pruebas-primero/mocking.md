# Cuándo sustituir una dependencia

Elegí el límite que define la prueba. Para comprobar el comportamiento de un módulo o servicio, mantené sus colaboradores internos reales cuando sirvan para ejercer ese comportamiento. Sustituí una dependencia si está del otro lado del límite elegido y controlarla hace la prueba más fiable o permite reproducir un caso que de otro modo sería difícil.

- Un proveedor de pagos, el reloj o la aleatoriedad se pueden sustituir para controlar escenarios concretos.
- Un microservicio del mismo equipo puede ser una dependencia externa para esta prueba. Si el criterio exige verificar el contrato real entre servicios, usá una prueba de contrato o de integración que cubra esa garantía.
- Si la garantía depende de semántica de persistencia, una base de datos de prueba puede ser más representativa que una simulación.

## Diseño que facilita las simulaciones

Aprovechá los puntos de sustitución del repo. Si hace falta crear uno, una interfaz pequeña para la operación externa permite configurar respuestas concretas sin replicar la lógica de la aplicación dentro del mock.

Por ejemplo, si querés verificar qué pasa cuando el proveedor rechaza un pago, pasá un cliente de prueba que devuelva ese rechazo y comprobá el resultado observable de la operación. Si parte del contrato es emitir exactamente un cargo al repetir una solicitud, verificá esa interacción en el límite con el proveedor. El orden de métodos internos pertenece a la implementación.
