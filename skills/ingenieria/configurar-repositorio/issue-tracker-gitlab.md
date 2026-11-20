# Gestor de incidencias: GitLab

Las incidencias y especificaciones se guardan como issues de GitLab. Usá la CLI [`glab`](https://gitlab.com/gitlab-org/cli) para todas las operaciones.

## Convenciones

- **Crear incidencia:** `glab issue create --title "..." --description "..."`. Para descripciones extensas, usá un heredoc. Con `--description -` se abre un editor.
- **Leer incidencia:** `glab issue view <number> --comments`. Usá `-F json` para obtener datos legibles por máquina.
- **Enumerar incidencias:** `glab issue list -O json` con los filtros `--label` necesarios.
- **Comentar:** `glab issue note <number> --message "..."`. GitLab llama *notes* a los comentarios.
- **Agregar o quitar etiquetas:** `glab issue update <number> --label "..."` / `--unlabel "..."`. Podés separar varias etiquetas por comas o repetir el argumento.
- **Cerrar:** `glab issue close <number>`. No admite comentar durante el cierre: primero publicá la explicación con `glab issue note <number> --message "..."` y después cerrá.
- **Solicitudes de incorporación:** GitLab las llama *merge requests* (MR). Utilizá `glab mr create`, `glab mr view`, `glab mr note`, etc., de forma análoga a `gh pr ...`, sustituyendo `pr` por `mr` y `comment`/`--body` por `note`/`--message`.

Inferí el repositorio con `git remote -v`; `glab` también lo hace automáticamente al ejecutarse dentro de una copia local.

## Cuando una skill indique «publicar en el gestor de incidencias»

Creá una incidencia de GitLab.

## Cuando indique «obtener la tarea correspondiente»

Ejecutá `glab issue view <number> --comments`.
