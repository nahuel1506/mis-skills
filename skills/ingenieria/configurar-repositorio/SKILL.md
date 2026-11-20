---
name: configurar-repositorio
description: "Configura el repositorio para las skills de ingeniería: gestor de incidencias, etiquetas de clasificación y organización de documentación del dominio. Usar cuando el repositorio necesite declarar estas convenciones."
disable-model-invocation: true
---

# Configuración de las skills de Matt Pocock

Prepará la configuración por repositorio que las skills de ingeniería dan por existente:

- **Gestor de incidencias**: dónde se administran los tickets (GitHub por defecto; también se admite Markdown local).
- **Etiquetas de clasificación**: cadenas que representan los cinco roles canónicos del proceso de clasificación.
- **Documentación del dominio**: dónde están `GLOSSARY.md` y los ADR, y qué reglas se aplican cuando otras skills los leen.

Esta skill se guía por preguntas, no es un script determinista. Explorá, presentá tus hallazgos, confirmá con el usuario y recién entonces escribí los archivos.

## Proceso

### 1. Explorar

Examiná el repositorio actual para conocer su estado inicial. Leé lo que existe, sin suposiciones:

- `git remote -v` y `.git/config`: ¿es un repositorio GitHub? ¿Cuál?
- `AGENTS.md` y `CLAUDE.md` en la raíz: ¿existe alguno? ¿Ya hay una sección `## Agent skills`?
- `GLOSSARY.md` y `GLOSSARY-MAP.md` en la raíz, y los nombres anteriores `CONTEXT.md` / `CONTEXT-MAP.md`. Si existe un archivo anterior, ofrecé renombrarlo mediante `git mv` a su equivalente `GLOSSARY` y actualizar los nombres en `docs/agents/domain.md`.
- `docs/adr/` y posibles directorios `src/*/docs/adr/`.
- `docs/agents/`: ¿ya existe contenido generado por una configuración anterior?
- `.scratch/`: indica que quizá se utilice un gestor de incidencias basado en archivos Markdown locales.
- ¿El proyecto ya tiene un mapa de etiquetas para sus incidencias? Anotá el uso de las etiquetas de publicación que indique el repo.
- Señales de monorepositorio: `pnpm-workspace.yaml`, campo `workspaces` en `package.json`, o `packages/*` con carpetas `src/` propias. Solo se consideran cuando el repositorio realmente contiene muchos paquetes. Si no aparecen, asumí un solo contexto, como en casi todos los proyectos.

### 2. Presentar resultados y preguntar

Resumí qué existe y qué falta. Después abordá las secciones en orden: una sección, una respuesta, luego la siguiente.

Encabezá cada sección con la opción recomendada para que el usuario pueda aceptarla con una palabra. Explicá las opciones en una línea solamente cuando haya una elección real; omití las secciones resueltas por la exploración (por ejemplo, la sección C si hay un solo contexto).

**Sección A: gestor de incidencias.**

> Explicación: el «gestor de incidencias» es donde se registran los tickets de este repositorio. Skills como `dividir-en-tareas` y `especificar` leen y escriben allí. Necesitan saber si deben usar `gh issue create`, guardar Markdown en `.scratch/` o seguir otro procedimiento indicado por vos. Elegí el sistema que efectivamente utiliza el proyecto.

Por defecto, estas skills fueron diseñadas para GitHub. Si `git remote` apunta a GitHub, recomendalo. Si apunta a GitLab (`gitlab.com` o una instalación propia), recomendá GitLab. En otros casos, o si el usuario lo prefiere, ofrecé:

- **GitHub**: tickets en GitHub Issues del repositorio (CLI `gh`).
- **GitLab**: tickets en GitLab Issues del repositorio (CLI [`glab`](https://gitlab.com/gitlab-org/cli)).
- **Markdown local**: tickets como archivos bajo `.scratch/<feature>/` (útil para proyectos individuales o sin remoto).
- **Otro** (Jira, Linear, etc.): pedí que describa en un párrafo el procedimiento. La skill lo registrará como texto libre.

Registrá la decisión en `docs/agents/issue-tracker.md`.

Para GitHub o GitLab hace falta un repositorio accesible. Si el usuario elige uno y no existe un remoto correspondiente, pedile la URL del repositorio y configuralo (`git init` cuando corresponda, `git remote add origin <url>`). Terminá cuando `gh repo view` o `glab repo view` pueda mostrar el proyecto desde este directorio. Si falla, detenete e informá lo que falta.

**Sección B: nombres de etiquetas de clasificación.** Usá esta sección si el proyecto necesita registrar su correspondencia de etiquetas o el usuario te pide configurarla. Reutilizá la configuración existente cuando ya resuelva la decisión. Si hace falta elegir, preguntá:

> ¿Querés conservar las etiquetas de clasificación predeterminadas? (Recomendación: **sí**).

Los cinco roles canónicos y etiquetas predeterminadas son `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human` y `wontfix`. Si responde **sí**, escribilos sin cambios. Si responde que no, normalmente porque ya usa otras etiquetas (por ejemplo `bug:triage` para `needs-triage`), pedí las correspondencias para reutilizar las existentes sin duplicarlas.

**Sección C: documentación del dominio.** Usá por defecto **un solo contexto** (un `GLOSSARY.md` y `docs/adr/` en la raíz). Es adecuado para casi todos los repositorios; configuralo sin preguntar.

Ofrecé **varios contextos** (un `GLOSSARY-MAP.md` central apuntando a glosarios por contexto) solamente si encontraste señales de monorepositorio. En ese caso, confirmá qué estructura quiere el usuario.

### 3. Confirmar antes de editar

Mostrá un borrador de:

- El bloque `## Agent skills` que agregarás al archivo `CLAUDE.md` o `AGENTS.md` elegido (ver paso 4).
- Los contenidos de `docs/agents/issue-tracker.md`, `docs/agents/domain.md` y `docs/agents/triage-labels.md` (este último si se usó la sección B).

Dejá que el usuario los edite antes de escribir.

### 4. Escribir

**Elegí el archivo que vas a modificar:**

- Si existe `CLAUDE.md`, editálo.
- Si no existe y sí existe `AGENTS.md`, editá ese.
- Si no existe ninguno, preguntá cuál quiere crear el usuario; no decidas por él.

Nunca crees `AGENTS.md` si ya existe `CLAUDE.md` (ni viceversa); modificá el existente.

Si el archivo elegido ya tiene un bloque `## Agent skills`, actualizalo en el mismo lugar en vez de duplicarlo. Conservá las modificaciones del usuario en secciones adyacentes.

El bloque:

```markdown
## Agent skills

### Gestor de incidencias

[Resumen de una línea sobre dónde se gestionan los tickets]. Consultar `docs/agents/issue-tracker.md`.

### Etiquetas de clasificación

[Resumen de una línea de los nombres de etiquetas]. Consultar `docs/agents/triage-labels.md`.

### Documentación del dominio

[Resumen de una línea de la estructura: «un contexto» o «varios contextos»]. Consultar `docs/agents/domain.md`.
```

Incluí la subsección `### Etiquetas de clasificación` y escribí `docs/agents/triage-labels.md` si se completó la sección B. Si no, omití ambos.

Si se completó la sección B con GitHub o GitLab, creá las etiquetas configuradas que falten (`gh label create` / `glab label create`).

Después generá los documentos tomando como base las plantillas de esta carpeta:

- [issue-tracker-github.md](./issue-tracker-github.md): gestor GitHub.
- [issue-tracker-gitlab.md](./issue-tracker-gitlab.md): gestor GitLab.
- [issue-tracker-local.md](./issue-tracker-local.md): gestor Markdown local.
- [triage-labels.md](./triage-labels.md): correspondencia de etiquetas (si corresponde).
- [domain.md](./domain.md): reglas para consultar la documentación del dominio y su estructura.

Para otros gestores, redactá `docs/agents/issue-tracker.md` desde cero según el procedimiento descrito por el usuario.

### 5. Finalización

Informá al usuario que la configuración terminó y qué skills de ingeniería empezarán a usar estos archivos. Mencioná que puede editar `docs/agents/*.md` directamente después; solo hace falta repetir esta skill si quiere cambiar de gestor o configurar desde cero.
