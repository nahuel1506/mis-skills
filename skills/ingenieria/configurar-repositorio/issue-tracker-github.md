# Gestor de incidencias: GitHub

Las incidencias y especificaciones se registran como issues de GitHub. Utilizá la CLI `gh` para todas las operaciones.

## Convenciones

- **Crear incidencia:** `gh issue create --title "..." --body "..."`. Para cuerpos de varias líneas, utilizá un heredoc.
- **Leer incidencia:** `gh issue view <number> --json number,title,body,labels,comments`.
- **Enumerar incidencias:** `gh issue list --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'`, con los filtros `--label` y `--state` apropiados.
- **Crear una subtarea de una incidencia principal:** `gh issue create --parent <parent> ...` o, después, `gh issue edit <parent> --add-sub-issue <child>` (`gh` 2.94+). En versiones anteriores: `gh api --method POST repos/<owner>/<repo>/issues/<parent>/sub_issues -F sub_issue_id=<child-db-id>` (identificador de base de datos, como se explica en **Bloqueos**). Sin subtareas nativas, colocá `Part of #<parent>` al comienzo del cuerpo de la tarea hija.
- **Bloqueos:** utilizá las **dependencias nativas de GitHub**, visibles en su interfaz. Agregá una dependencia con `gh issue create --blocked-by <n>,<n> ...` o `gh issue edit <child> --add-blocked-by <blocker>` (`gh` 2.94+). En versiones anteriores: `gh api --method POST repos/<owner>/<repo>/issues/<child>/dependencies/blocked_by -F issue_id=<blocker-db-id>`, donde `<blocker-db-id>` es el **ID numérico de base de datos** (`gh api repos/<owner>/<repo>/issues/<n> --jq .id`), **no** el número `#number` ni `node_id`. Cuando no haya dependencias disponibles, escribí `Blocked by: #<n>, #<n>` al inicio del cuerpo. Una tarea queda desbloqueada cuando se cierran todos sus bloqueos.
- **Contar bloqueos abiertos:** `gh api repos/<owner>/<repo>/issues/<n> --jq .issue_dependencies_summary.blocked_by` (solo bloqueos abiertos; 0 indica que puede iniciarse). `gh issue view <n> --json blockedBy` también muestra bloqueos cerrados; filtrá con `--jq '[.blockedBy.nodes[] | select(.state == "OPEN")] | length'`.
- **Comentar:** `gh issue comment <number> --body "..."`.
- **Agregar/quitar etiquetas:** `gh issue edit <number> --add-label "..."` / `--remove-label "..."`.
- **Cerrar:** publicá primero la explicación con `gh issue comment <number> --body "..."` y después ejecutá `gh issue close <number>`. En una incidencia ya cerrada, `gh issue close --comment` descarta el comentario aunque termine con código 0.

Inferí el repositorio con `git remote -v`; `gh` lo hace automáticamente dentro de una copia local.

**Creá incidencias solo en repositorios del usuario.** Nunca las publiques en `mattpocock/skills` salvo que el usuario sea su propietario. En un fork, `gh` podría apuntar al repositorio original. Antes del primer `gh issue create` de la sesión, comprobá el destino con `gh repo view --json nameWithOwner` y confirmalo con el usuario si no es suyo.

## Cuando una skill indique «publicar en el gestor de incidencias»

Creá una incidencia de GitHub.

## Cuando indique «obtener la tarea correspondiente»

Leela como se explica en **Leer incidencia**.
