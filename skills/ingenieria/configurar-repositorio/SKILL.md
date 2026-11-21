---
name: configurar-repositorio
description: "Configura el repositorio para las skills de ingeniería: gestor de incidencias, etiquetas de clasificación, documentación de dominio y convenciones estructurales clave en AGENTS.md o CLAUDE.md."
disable-model-invocation: true
---

# Configuración del repositorio para las skills

Prepará la configuración por repositorio que usan las skills de ingeniería:

- **Gestor de incidencias:** dónde se administran las especificaciones y tickets (GitHub, GitLab, Markdown local u otro).
- **Etiquetas de clasificación (opcional):** correspondencia de etiquetas si el proyecto usa triage en GitHub/GitLab.
- **Documentación del dominio:** ubicación de `GLOSSARY.md` y los ADR, y reglas para consultarlos.
- **Convenciones de arquitectura y verificación:** resumen breve en `AGENTS.md` / `CLAUDE.md` con los límites estructurales que conviene mantener coherentes y los comandos de verificación del proyecto.

Esta skill se guía por preguntas, no es un script determinista. Explorá, presentá tus hallazgos, confirmá con el usuario y recién entonces escribí los archivos.

## Proceso

### 1. Explorar

Examiná el repositorio actual para conocer su estado inicial sin suposiciones:

- `git remote -v` y `.git/config`: ¿hay remoto en GitHub o GitLab?
- `AGENTS.md` y `CLAUDE.md` en la raíz: ¿cuál existe? ¿Ya hay una sección `## Agent skills` o convenciones documentadas?
- Estructura del código y herramientas: capas o carpetas principales (por ejemplo, `Controllers`/`Services`/`Repositories`, módulos por feature, etc.) y comandos reales de build, test y lint.
- `GLOSSARY.md` y `GLOSSARY-MAP.md` en la raíz (y nombres heredados `CONTEXT.md` / `CONTEXT-MAP.md`; si aparecen, ofrecé renombrarlos con `git mv` y actualizar `docs/agents/domain.md`).
- `docs/adr/` y posibles `src/*/docs/adr/`.
- `docs/agents/` y `.scratch/` (y si `.scratch/` está en `.gitignore`).
- Señales de monorepositorio: `pnpm-workspace.yaml`, `workspaces` en `package.json` o `packages/*` con `src/` propios. Si no aparecen, asumí un solo contexto.

### 2. Presentar resultados y preguntar

Resumí qué existe y qué falta. Abordá solo las secciones con una decisión pendiente, en orden (una sección por respuesta), encabezando cada una con la opción recomendada para poder aceptarla rápido.

**Sección A: gestor de incidencias.**
Explicá brevemente que skills como `especificar` y `dividir-en-tareas` leen y escriben allí. Recomendá GitHub o GitLab si el remoto apunta a ellos, o Markdown local (`.scratch/<feature>/`) para proyectos individuales o sin remoto. También admití **Otro** (Jira, Linear, etc.) en texto libre.

Si elige GitHub o GitLab sin remoto accesible, pedí la URL, configuralo y verificá con `gh repo view` o `glab repo view`. Si elige Markdown local y `.scratch/` no está ignorado, ofrecé agregarlo a `.gitignore`. Registrá la decisión en `docs/agents/issue-tracker.md`.

**Sección B: etiquetas de clasificación (opcional).**
Omitila por defecto en proyectos individuales o con gestor local, salvo que el usuario pida configurarla o el repo ya use etiquetas de triage. Si aplica, preguntá si conserva los roles predeterminados (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) o si quiere mapearlos a etiquetas existentes en `docs/agents/triage-labels.md`.

**Sección C: documentación del dominio.**
Usá **un solo contexto** (`GLOSSARY.md` y `docs/adr/` en la raíz) por defecto sin preguntar. Ofrecé **varios contextos** (`GLOSSARY-MAP.md`) solo si encontraste señales claras de monorepositorio.

**Sección D: convenciones de arquitectura y verificación.**
Si `AGENTS.md` / `CLAUDE.md` todavía no las declara, proponé un borrador breve (5–8 líneas como máximo) basado en el código real:
- Separación de responsabilidades y límites estructurales que conviene mantener consistentes (por ejemplo, flujo entre capas y dependencias permitidas).
- Comandos principales de verificación (build, tests, lint) cuando no sean triviales o tengan requisitos particulares.
- Si existe una decisión deliberada que a primera vista podría parecer redundante (como mantener una capa de repositorios sobre un ORM), sugerí documentar el *por qué* en un ADR corto en `docs/adr/`.

### 3. Confirmar antes de editar

Mostrá el borrador de los cambios en `AGENTS.md` / `CLAUDE.md` y de los archivos en `docs/agents/` que vas a crear o actualizar. Dejá que el usuario los ajuste antes de escribir.

### 4. Escribir

**Elegí el archivo raíz que vas a modificar:**

- Si existe solo `AGENTS.md` o solo `CLAUDE.md`, editá el existente sin crear el otro.
- Si existen ambos, preguntá cuál es la fuente de verdad para evitar duplicaciones.
- Si no existe ninguno, recomendá `AGENTS.md` (compatible con múltiples agentes) y confirmá si el usuario prefiere `CLAUDE.md`.

Si el archivo ya tiene `## Agent skills`, actualizalo en el mismo lugar conservando el resto del contenido.

```markdown
## Agent skills

### Gestor de incidencias

[Resumen de una línea sobre dónde se gestionan los tickets]. Consultar `docs/agents/issue-tracker.md`.

### Etiquetas de clasificación

[Resumen de una línea de los nombres de etiquetas]. Consultar `docs/agents/triage-labels.md`.

### Documentación del dominio

[Resumen de una línea de la estructura: «un contexto» o «varios contextos»]. Consultar `docs/agents/domain.md`.
```

Incluí `### Etiquetas de clasificación` y `docs/agents/triage-labels.md` solo si se usó la sección B (y creá las etiquetas faltantes con `gh label create` / `glab label create` si corresponde). Agregá las convenciones acordadas en la sección D en su sección correspondiente del archivo raíz.

Generá los archivos de `docs/agents/` usando las plantillas de esta carpeta:

- [issue-tracker-github.md](./issue-tracker-github.md)
- [issue-tracker-gitlab.md](./issue-tracker-gitlab.md)
- [issue-tracker-local.md](./issue-tracker-local.md)
- [triage-labels.md](./triage-labels.md) (si corresponde)
- [domain.md](./domain.md)

Para otros gestores, redactá `docs/agents/issue-tracker.md` según lo descrito por el usuario.

### 5. Finalización

Informá qué archivos quedaron configurados y qué skills empezarán a usarlos. Indicá que puede editar `AGENTS.md` / `CLAUDE.md` y `docs/agents/*.md` directamente cuando evolucionen las convenciones del proyecto.
