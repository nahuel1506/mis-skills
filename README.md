# Mis skills

Skills en español para agentes de programación (Codex, Claude, Antigravity/Gemini y compatibles con el estándar `SKILL.md`). Podés entrar en cualquier etapa, desde aclarar una idea hasta revisar el resultado.

## Instalar y actualizar

### Ingeniería por carpetas

Ejecutá este bloque en PowerShell desde la raíz del proyecto, con GitHub CLI y una sesión iniciada (`gh auth login`). Instala las dos categorías en `.agents/skills/ingenieria/` y `.agents/skills/referencias/`. Ajustá `$categorias` para instalar otras carpetas de la colección. [Instalación con GitHub CLI](https://cli.github.com/manual/gh_skill_install)

```powershell
$origen = 'nahuel1506/mis-skills'
$categorias = 'ingenieria', 'referencias'
$rutas = gh api "repos/$origen/git/trees/main?recursive=1" --jq '.tree[].path'
if ($LASTEXITCODE -ne 0) { throw 'No se pudo consultar la colección' }

foreach ($ruta in ($rutas -match '^skills/[^/]+/[^/]+/SKILL\.md$')) {
  $categoria, $nombre = ($ruta -split '/')[1, 2]
  if ($categoria -notin $categorias) { continue }
  $destino = ".agents/skills/$categoria"
  if (Test-Path -LiteralPath "$destino/$nombre/SKILL.md") { continue }
  gh skill install $origen $ruta --dir $destino
  if ($LASTEXITCODE -ne 0) { throw "No se pudo instalar $nombre" }
}
```

Para actualizar las dos categorías desde la raíz del proyecto, ejecutá estos comandos.

```powershell
gh skill update --all --dir .agents/skills/ingenieria
gh skill update --all --dir .agents/skills/referencias
```

Volvé a ejecutar el bloque de instalación para sumar skills nuevas a esas carpetas. Si una skill se elimina o fusiona en la colección (por ejemplo, `aclarar-con-registro`, ahora integrada en `aclarar-idea`), borrá su carpeta local después de actualizar porque `gh skill update` no elimina directorios quitados del origen. [Actualización con GitHub CLI](https://cli.github.com/manual/gh_skill_update)

Si migrás desde una instalación plana de Skills CLI, retirala primero con `npx skills remove nahuel1506/mis-skills` en la raíz de ese proyecto.

### Instalación plana y uso multi-agente (Skills CLI)

```bash
npx skills add nahuel1506/mis-skills -a codex --skill disenar-solucion -y
```

Requiere Node.js 22.20 o posterior. Usá `npx.cmd` en PowerShell si hace falta. Podés indicar varios nombres, elegir `--skill "*"` para toda la colección o agregar `-g` para instalar en todos tus proyectos. [Skills CLI](https://github.com/vercel-labs/skills/blob/main/docs/commands.md#skills-add)

Si trabajás con varios agentes sobre los mismos repositorios (Codex, Antigravity/Gemini, Claude Code u otros compatibles con `SKILL.md`):

- La estructura plana `.agents/skills/<nombre>/SKILL.md` (por defecto en Skills CLI) tiene la mayor compatibilidad directa entre herramientas; la estructura agrupada por carpetas (`.agents/skills/ingenieria/`, `.agents/skills/referencias/`) funciona en agentes con descubrimiento recursivo como Codex.
- Con Skills CLI podés pasar varios agentes en un mismo comando (o elegirlos de forma interactiva) y mantener todo sincronizado con `npx skills update --project` (o `--global` si instalaste con `-g`).

### Mantenimiento y validación

Si editás o agregás una skill en esta colección, validá frontmatter, paridad entre `SKILL.md` / `agents/openai.yaml` / `README.md` y enlaces relativos antes de publicar:

```bash
node scripts/validate-skills.mjs
```

## Usar

Invocá una skill por su nombre según tu entorno (por ejemplo, `$nombre` en Codex o `/nombre` en Claude/compatibles). Las skills marcadas **Auto** también se pueden activar por contexto o desde otras skills.

Para un pedido claro, podés empezar con `$implementar`. Si querés participar en la decisión técnica, usá `$disenar-solucion` y probá una hipótesis con `$prototipar` si hace falta. `$elegir-flujo` te ayuda a decidir por dónde seguir.

## Catálogo

### Ingeniería

| Skill | Para qué sirve | Invocación |
| --- | --- | --- |
| [$elegir-flujo](./skills/ingenieria/elegir-flujo/SKILL.md) | Elegir el recorrido más corto para la tarea. | Manual |
| [$aclarar-idea](./skills/ingenieria/aclarar-idea/SKILL.md) | Poner a prueba una idea en el chat y registrar glosario o ADR si hace falta. | Manual |
| [$disenar-solucion](./skills/ingenieria/disenar-solucion/SKILL.md) | Comparar soluciones técnicas y elegir junto al agente. | Manual |
| [$prototipar](./skills/ingenieria/prototipar/SKILL.md) | Responder una duda con un experimento reproducible. | Auto |
| [$especificar](./skills/ingenieria/especificar/SKILL.md) | Convertir los acuerdos en una especificación verificable. | Manual |
| [$dividir-en-tareas](./skills/ingenieria/dividir-en-tareas/SKILL.md) | Dividir una entrega en tickets con criterios y dependencias. | Manual |
| [$implementar](./skills/ingenieria/implementar/SKILL.md) | Construir y verificar un pedido, una especificación o un ticket. | Manual |
| [$pruebas-primero](./skills/ingenieria/pruebas-primero/SKILL.md) | Cambiar un comportamiento con ciclos de prueba, implementación y refactorización. | Auto |
| [$revisar-codigo](./skills/ingenieria/revisar-codigo/SKILL.md) | Contrastar cambios, una rama o un PR con sus requisitos y estándares. | Auto |
| [$retrospectiva](./skills/ingenieria/retrospectiva/SKILL.md) | Proponer mejoras al flujo a partir de lo que pasó en una sesión. | Manual |
| [$diagnosticar-errores](./skills/ingenieria/diagnosticar-errores/SKILL.md) | Aislar la causa de un fallo o una regresión. | Auto |
| [$mejorar-arquitectura](./skills/ingenieria/mejorar-arquitectura/SKILL.md) | Priorizar mejoras estructurales con evidencia del código. | Manual |
| [$configurar-repositorio](./skills/ingenieria/configurar-repositorio/SKILL.md) | Acordar gestor de issues, documentación de dominio y convenciones clave en `AGENTS.md`. | Manual |

### Referencias

| Skill | Para qué sirve |
| --- | --- |
| [$entrevista-critica](./skills/referencias/entrevista-critica/SKILL.md) | Entrevistar por rondas y verificar los supuestos relevantes. |
| [$modelar-dominio](./skills/referencias/modelar-dominio/SKILL.md) | Acordar vocabulario y registrar el glosario y los ADR. |
| [$diseno-de-modulos](./skills/referencias/diseno-de-modulos/SKILL.md) | Evaluar interfaces, responsabilidades y puntos de prueba. |
| [$escribir-para-agentes](./skills/referencias/escribir-para-agentes/SKILL.md) | Redactar instrucciones para agentes, como `AGENTS.md` o una skill. |

### Productividad

[$transferir-contexto](./skills/productividad/transferir-contexto/SKILL.md) prepara el traspaso de trabajo a otra sesión o persona.

### Aprendizaje

[$aprender](./skills/aprendizaje/aprender/SKILL.md) organiza un estudio de varias sesiones con lecciones, recursos y registro de progreso.

<details>
<summary>Dependencias al instalar por nombre</summary>

| Si instalás… | Incluí también… |
| --- | --- |
| `aclarar-idea` | `entrevista-critica` (y `modelar-dominio` si registrás glosario o ADR) |
| `disenar-solucion` | `diseno-de-modulos` si evaluás interfaces o límites de módulos |
| `implementar` | `pruebas-primero` y `revisar-codigo` |
| `diagnosticar-errores` | `pruebas-primero` y `revisar-codigo` si aplicás y revisás la corrección |
| `pruebas-primero` o `mejorar-arquitectura` | `diseno-de-modulos` si evaluás interfaces o puntos de separación |
| `retrospectiva` | `escribir-para-agentes` si redactás instrucciones |

</details>

## Frontend y UX/UI

- **Diseño.** Impeccable puede ayudarte a definir una interacción (`shape`) o evaluar una pantalla existente (`critique`). Para explorar la identidad visual de una pantalla, `frontend-design` de Anthropic también cubre dirección visual, tipografía y composición. En una misma tarea, elegí una como guía principal de diseño. [Impeccable](https://impeccable.style/docs/) · [Anthropic](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)
- **Implementación.** Combiná `$implementar` con Modern Web Guidance cuando necesites consultar patrones de HTML, CSS, accesibilidad o compatibilidad. [Chrome for Developers](https://developer.chrome.com/docs/modern-web-guidance)
- **Verificación.** Probá el flujo en el navegador y sumá `$revisar-codigo` si querés contrastar el cambio con sus requisitos. `webapp-testing` de Anthropic es una opción para probar una app local con Playwright. [Web App Testing](https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md)

En `AGENTS.md` indicá las convenciones de arquitectura clave del proyecto (por ejemplo, separación de capas o límites que no conviene saltar), comandos de verificación, qué componentes o estilos reutilizar y cuándo verificar una pantalla en el navegador. Si el proyecto tiene un `DESIGN.md`, enlazalo ahí para que las skills usen la misma referencia visual. [Guía de AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
