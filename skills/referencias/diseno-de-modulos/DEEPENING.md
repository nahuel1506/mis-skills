# Profundización de módulos

Cómo profundizar de forma segura un conjunto de módulos superficiales teniendo en cuenta sus dependencias. Se presupone el vocabulario de [SKILL.md](SKILL.md): **módulo**, **interfaz**, **punto de separación** (*seam*) y **adaptador**.

## Categorías de dependencias

Al evaluar un candidato a profundización, usá el tipo de dependencia para decidir qué conviene ocultar y dónde probar el comportamiento.

### 1. Dentro del mismo proceso

Cálculos puros, estado en memoria y ausencia de E/S. Si comparten una responsabilidad y unirlos simplifica su uso, podés integrarlos y probarlos desde la interfaz resultante sin agregar un adaptador.

### 2. Sustituibles localmente

Dependencias con sustitutos locales para pruebas (por ejemplo, una base de datos efímera local o un sistema de archivos en memoria). Si la arquitectura del proyecto no requiere un puerto explícito en la interfaz externa, pueden integrarse con el punto de separación como detalle interno y probarse ejecutando el sustituto real.

### 3. Remotas, pero bajo nuestro control (puertos y adaptadores)

En servicios propios separados por una red, un **puerto** puede aislar el contrato del transporte. Un **adaptador** puede implementar ese contrato por HTTP, gRPC o una cola. Si necesitás aislar la lógica para probarla, un sustituto en memoria puede alcanzar. Si la garantía depende del contrato real, probala también en ese punto de separación.

Forma de recomendarlo: *«Definí un puerto en el punto de separación; implementá un adaptador HTTP para producción y otro en memoria para las pruebas. Así, la lógica queda concentrada en un módulo profundo, aunque se despliegue distribuida por la red»*.

### 4. Realmente externas (simulaciones)

Con servicios de terceros, un puerto puede evitar que el SDK, los errores o los datos del proveedor se filtren a los consumidores. Si la prueba necesita controlar respuestas del proveedor, podés sustituir la dependencia en ese punto.

## Disciplina de los puntos de separación

- **Evaluá el beneficio del punto de separación.** Dos adaptadores suelen mostrar necesidad de sustitución. Un solo adaptador también se justifica si protege a los consumidores de la complejidad de un contrato real o sostiene una separación de responsabilidades consistente en el repo. Contrastá ese beneficio con la indirección que agrega.
- **Puntos de separación internos frente a externos.** Un módulo profundo puede tener puntos de separación internos (privados de su implementación y usados por sus pruebas), además del externo de su interfaz. No expongas los internos en la interfaz pública solo porque las pruebas los utilicen.

## Estrategia de pruebas: reemplazar, no acumular capas

- Las pruebas unitarias antiguas de módulos superficiales dejan de aportar valor cuando existen pruebas sobre la interfaz del módulo profundizado; eliminalas.
- Escribí pruebas nuevas a través de la interfaz del módulo profundizado. **La interfaz es la superficie de prueba.**
- Comprobá resultados observables mediante la interfaz, no estado interno.
- Las pruebas deben sobrevivir a refactorizaciones internas porque describen comportamiento, no implementación. Si una prueba necesita cambiar cuando cambia la implementación, está comprobando detalles que quedan detrás de la interfaz.
