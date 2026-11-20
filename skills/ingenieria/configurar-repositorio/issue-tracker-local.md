# Gestor de incidencias: Markdown local

Las incidencias y especificaciones del repositorio se guardan como archivos Markdown en `.scratch/`.

## Convenciones

- Una funcionalidad por directorio: `.scratch/<feature-slug>/`.
- La especificación se guarda en `.scratch/<feature-slug>/spec.md`.
- Las tareas de implementación se guardan como un archivo por incidencia en `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, numerados desde `01`; nunca en un solo archivo que combine todas las tareas.
- Escribí el estado en `Status:` y los IDs de los tickets bloqueantes en `Blocked by:`, cerca del comienzo del archivo. Usá estas claves en inglés para mantener compatibilidad con el flujo local.
- Los comentarios y antecedentes de conversación se agregan al final, debajo de `## Comments`.

## Cuando una skill indique «publicar en el gestor de incidencias»

Creá un nuevo archivo dentro de `.scratch/<feature-slug>/` y, si no existe, creá el directorio.

## Cuando una skill indique «obtener la tarea correspondiente»

Leé el archivo de la ruta referenciada. Normalmente el usuario proporcionará la ruta o el número de la incidencia.
