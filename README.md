# Mis skills

Colección de skills en español para agentes de programación (Codex, Claude, Antigravity/Gemini y compatibles con `SKILL.md`).

## Instalar y actualizar

### Con Skills CLI (recomendado, multi-agente)

Instalá todas las skills en el proyecto (requiere Node.js 22.20+; en PowerShell usá `npx.cmd` si hace falta):

```bash
npx skills add nahuel1506/mis-skills --skill "*" -y
```

Para actualizar después:

```bash
npx skills update --project
```

Usá `--skill <nombre>` para instalar solo algunas, `-g` para instalarlas globalmente (`npx skills update --global` para actualizar) o `-a <agente>` para elegir entornos específicos. [Docs de Skills CLI](https://github.com/vercel-labs/skills/blob/main/docs/commands.md#skills-add)

<details>
<summary>Alternativa: instalar por carpetas con GitHub CLI (<code>gh</code>)</summary>

Útil si preferís agruparlas en `.agents/skills/ingenieria/` y `.agents/skills/referencias/` (requiere `gh auth login`).

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

Para actualizar las carpetas instaladas:

```powershell
gh skill update --all --dir .agents/skills/ingenieria
gh skill update --all --dir .agents/skills/referencias
```

Si una skill se elimina o fusiona en el origen, borrá su carpeta local después de actualizar.

</details>

## Uso rápido

Invocá una skill por su nombre según tu entorno (`$nombre` en Codex, `/nombre` en Claude/compatibles). Las marcadas **Auto** también se activan por contexto o desde otras skills.

- **Pedido claro:** empezá directo con `$implementar`.
- **Decisión técnica:** usá `$disenar-solucion` (y `$prototipar` si falta evidencia).
- **Idea verde o dudas sobre por dónde arrancar:** usá `$aclarar-idea` o `$elegir-flujo`.

## Catálogo

### Ingeniería

| Skill | Para qué sirve | Invocación |
| --- | --- | --- |
| [$elegir-flujo](./skills/ingenieria/elegir-flujo/SKILL.md) | Elegir el recorrido más corto para la tarea. | Manual |
| [$aclarar-idea](./skills/ingenieria/aclarar-idea/SKILL.md) | Entrevistar una idea y registrar glosario o ADR si hace falta. | Manual |
| [$disenar-solucion](./skills/ingenieria/disenar-solucion/SKILL.md) | Comparar soluciones técnicas y elegir junto al agente. | Manual |
| [$prototipar](./skills/ingenieria/prototipar/SKILL.md) | Resolver una duda con un experimento reproducible. | Auto |
| [$especificar](./skills/ingenieria/especificar/SKILL.md) | Convertir acuerdos en una especificación verificable. | Manual |
| [$dividir-en-tareas](./skills/ingenieria/dividir-en-tareas/SKILL.md) | Dividir una entrega en tickets verificables con dependencias. | Manual |
| [$implementar](./skills/ingenieria/implementar/SKILL.md) | Construir y verificar un pedido, spec o ticket. | Manual |
| [$pruebas-primero](./skills/ingenieria/pruebas-primero/SKILL.md) | Desarrollar o corregir con ciclos rojo, verde y refactorización. | Auto |
| [$revisar-codigo](./skills/ingenieria/revisar-codigo/SKILL.md) | Revisar cambios, una rama o un PR contra normas y requisitos. | Auto |
| [$retrospectiva](./skills/ingenieria/retrospectiva/SKILL.md) | Proponer mejoras al flujo a partir de una sesión. | Manual |
| [$diagnosticar-errores](./skills/ingenieria/diagnosticar-errores/SKILL.md) | Aislar la causa de un fallo o regresión con evidencia. | Auto |
| [$mejorar-arquitectura](./skills/ingenieria/mejorar-arquitectura/SKILL.md) | Priorizar mejoras estructurales con evidencia del código. | Manual |
| [$configurar-repositorio](./skills/ingenieria/configurar-repositorio/SKILL.md) | Configurar gestor de issues, dominio y convenciones en `AGENTS.md`. | Manual |

### Referencias, productividad y aprendizaje

| Skill | Categoría | Para qué sirve |
| --- | --- | --- |
| [$entrevista-critica](./skills/referencias/entrevista-critica/SKILL.md) | Referencia | Entrevistar por rondas y verificar supuestos. |
| [$modelar-dominio](./skills/referencias/modelar-dominio/SKILL.md) | Referencia | Acordar vocabulario, glosario y ADR. |
| [$diseno-de-modulos](./skills/referencias/diseno-de-modulos/SKILL.md) | Referencia | Evaluar interfaces, responsabilidades y puntos de separación. |
| [$escribir-para-agentes](./skills/referencias/escribir-para-agentes/SKILL.md) | Referencia | Redactar `AGENTS.md` o skills efectivas. |
| [$transferir-contexto](./skills/productividad/transferir-contexto/SKILL.md) | Productividad | Preparar el traspaso de contexto a otra sesión. |
| [$aprender](./skills/aprendizaje/aprender/SKILL.md) | Aprendizaje | Organizar un estudio guiado de varias sesiones. |

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

## Complementos útiles

- **Frontend / UX:** [Impeccable](https://impeccable.style/docs/) o [frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) (diseño), [Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance) (HTML/CSS/accesibilidad) y [webapp-testing](https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md) (pruebas en navegador).
- **`AGENTS.md` del proyecto:** definí ahí solo las convenciones clave (separación de capas, comandos de verificación, componentes reutilizables y enlace a `DESIGN.md` si existe).

## Validar la colección

Antes de publicar cambios en este repositorio:

```bash
node scripts/validate-skills.mjs
```
