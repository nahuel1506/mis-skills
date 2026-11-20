# Prototipo de lógica

Usá esta guía cuando un HTML autónomo con controles permita explorar la lógica de negocio, los estados o una estructura de datos sin instalar nada. Si alcanza con un script, seguí la guía principal de [prototipar](SKILL.md).

## Diseñá la demostración

1. **Pregunta visible.** Indicá qué comportamiento se está explorando y qué debería observar la persona que pruebe la demo.
2. **Lógica separada de la interfaz.** Si ayuda a entender o comprobar el modelo, usá un reductor, funciones puras o una máquina de estados según el caso. Mantené las reglas del dominio fuera de los manejadores de botones para poder razonar sobre ellas y retomarlas más adelante si corresponde.
3. **Estado legible.** Nombrá los controles con términos del dominio. Mostrá el estado inicial y lo que cambia después de cada acción. Un panel, una secuencia visual o una animación breve puede ayudar a mostrar una transición.
4. **Escenarios reproducibles.** Si la persona necesita explorar por su cuenta, agregá controles de uso libre y recorridos guiados para los casos relevantes. Hacé que cada recorrido empiece desde un estado conocido. Incluí un caso límite o una acción inválida cuando sirva para distinguir resultados.

Por ejemplo, para explorar pagos tardíos, un recorrido puede vencer una reserva antes de recibir el pago y otro puede añadir una segunda reserva entre esos dos eventos. El panel muestra quién tiene el horario y qué pasa con el pago en ambos casos.

## Entrega

Indicá cómo abrir el HTML y repetir los escenarios. Contá qué mostró el experimento y qué sigue por decidir. Si el usuario pide conservarlo en Git o llevar lo aprendido a producción, seguí el cierre de [prototipar](SKILL.md).
