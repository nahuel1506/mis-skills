# Etiquetas de clasificación (*triage*)

Las skills trabajan con cinco roles canónicos de clasificación. Esta tabla asigna cada rol a las etiquetas concretas del gestor de incidencias del proyecto.

| Etiqueta en `mattpocock/skills` | Etiqueta en nuestro gestor | Significado |
| --- | --- | --- |
| `needs-triage` | `needs-triage` | Un mantenedor debe evaluar la incidencia. |
| `needs-info` | `needs-info` | Se espera más información de quien reportó. |
| `ready-for-agent` | `ready-for-agent` | Está completamente especificada y puede tomarla un agente sin supervisión. |
| `ready-for-human` | `ready-for-human` | Requiere implementación por una persona. |
| `wontfix` | `wontfix` | No se va a realizar. |

Cuando una skill mencione un rol (por ejemplo, «aplicar la etiqueta de lista para un agente autónomo»), utilizá la etiqueta correspondiente de esta tabla.

Modificá la columna **Etiqueta en nuestro gestor** para adaptarla a las etiquetas que utilices realmente. Los identificadores de roles canónicos no se traducen porque otras skills pueden necesitarlos exactamente así.
