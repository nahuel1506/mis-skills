---
name: prototipar
description: Construye un experimento descartable y ejecutable para resolver una duda de diseño, comportamiento técnico o interacción.
---

# Prototipo

Definí la pregunta y qué observar permitiría responderla. Elegí el artefacto más simple que pueda producir esa evidencia. Un script o una simulación puede alcanzar para una duda técnica. Consultá [LOGIC.md](LOGIC.md) para explorar estados de forma interactiva y [UI.md](UI.md) si hace falta evaluar una interfaz o comparar alternativas visuales.

Hacé el experimento reconocible como descartable y fácil de ejecutar. Mostrá los datos de entrada, las acciones y los cambios de estado que importan para poder repetir la observación. Usá datos de prueba y estado en memoria por defecto. Si la persistencia es parte de la pregunta, usá un entorno temporal. Si hace falta el contexto de la aplicación real, seguí las convenciones del repo y habilitá el prototipo solo en desarrollo.

Al cerrar, indicá dónde quedó el artefacto, cómo ejecutar el caso y qué se observó. Separá las conclusiones respaldadas de lo que todavía queda por probar o decidir. Si el usuario pide conservar la evidencia para otra sesión, devolvé una referencia recuperable al artefacto y al caso. Pasá a producción, creá una rama o commit o actualizá un ticket cuando el usuario lo pida.
