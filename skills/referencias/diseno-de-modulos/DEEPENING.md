# Profundización de módulos

Cómo profundizar de forma segura un conjunto de módulos superficiales teniendo en cuenta sus dependencias. Se presupone el vocabulario de [SKILL.md](SKILL.md): **módulo**, **interfaz**, **límite de separación** (*seam*) y **adaptador**.

## Categorías de dependencias

Al evaluar un candidato a profundización, usá el tipo de dependencia para decidir qué conviene ocultar y dónde probar el comportamiento.

### 1. Dentro del mismo proceso

Cálculos puros, estado en memoria y ausencia de E/S. Si comparten una responsabilidad y unirlos simplifica su uso, podés integrarlos y probarlos desde la interfaz resultante sin agregar un adaptador.

### 2. Sustituibles localmente

Dependencias que tienen sustitutos locales para pruebas (PGLite para Postgres, sistema de archivos en memoria). Pueden integrarse si existe el sustituto. El módulo profundizado se prueba ejecutando el sustituto en la suite de pruebas. El límite es interno; no hace falta un puerto en su interfaz externa.

### 3. Remotas, pero bajo nuestro control (puertos y adaptadores)

En servicios propios separados por una red, un **puerto** puede aislar el contrato del transporte. Un **adaptador** puede implementar ese contrato por HTTP, gRPC o una cola. Si necesitás aislar la lógica para probarla, un sustituto en memoria puede alcanzar. Si la garantía depende del contrato real, probala también en ese límite.

Forma de recomendarlo: *«Definí un puerto en el límite; implementá un adaptador HTTP para producción y otro en memoria para las pruebas. Así, la lógica queda concentrada en un módulo profundo, aunque se despliegue distribuida por la red»*.

### 4. Realmente externas (simulaciones)

Con servicios de terceros, un puerto puede evitar que el SDK, los errores o los datos del proveedor se filtren a los consumidores. Si la prueba necesita controlar respuestas del proveedor, podés sustituir la dependencia en ese punto.

## Disciplina de los límites

- **Evaluá el beneficio del límite.** Dos adaptadores suelen mostrar una necesidad de sustitución. Un solo adaptador puede justificarse si protege a los consumidores de la complejidad de un contrato real. Por ejemplo, un servicio de reservas puede usar un único proveedor de colas y aun así concentrar en su adaptador la traducción de mensajes y el tratamiento de errores del SDK. Contrastá ese beneficio con la indirección que agrega.
- **Límites internos frente a externos.** Un módulo profundo puede tener límites internos (privados de su implementación y usados por sus pruebas), además del límite externo de su interfaz. No expongas los límites internos en la interfaz solo porque las pruebas los utilicen.

## Estrategia de pruebas: reemplazar, no acumular capas

- Las pruebas unitarias antiguas de módulos superficiales dejan de aportar valor cuando existen pruebas sobre la interfaz del módulo profundizado; eliminalas.
- Escribí pruebas nuevas a través de la interfaz del módulo profundizado. **La interfaz es la superficie de prueba.**
- Comprobá resultados observables mediante la interfaz, no estado interno.
- Las pruebas deben sobrevivir a refactorizaciones internas porque describen comportamiento, no implementación. Si una prueba necesita cambiar cuando cambia la implementación, está comprobando detalles que quedan detrás de la interfaz.
