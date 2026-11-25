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

## Flujo recomendado

Invocá una skill por su nombre según tu entorno (`$nombre` en Codex, `/nombre` en Claude/compatibles). Solo **4 skills** son **Auto** para mantener mínimo el contexto fijo.

```text
[QUÉ] $aclarar-idea ──► [CÓMO] $disenar-solucion ──► $especificar / $dividir-en-tareas
                                                               │
                                                ── sesión limpia por ticket ──
                                                               ▼
                                                         $implementar
                                                  (pruebas-primero + revisar-codigo)
```

- **Pedido claro:** empezá directo con `$implementar`.
- **Duda técnica o comparación de enfoques:** usá `$disenar-solucion` (y `$prototipar` si falta evidencia).
- **Idea verde o reglas de negocio por definir:** empezá con `$aclarar-idea`.

## Catálogo

### Ingeniería

| Skill | Para qué sirve | Invocación |
| --- | --- | --- |
| [$aclarar-idea](./skills/ingenieria/aclarar-idea/SKILL.md) | Definir **qué** construir por rondas y registrar glosario o ADR si aplica. | Manual |
| [$disenar-solucion](./skills/ingenieria/disenar-solucion/SKILL.md) | Decidir **cómo** construir comparando alternativas y trade-offs. | Manual |
| [$prototipar](./skills/ingenieria/prototipar/SKILL.md) | Resolver una duda con un experimento descartable y ejecutable. | Manual |
| [$especificar](./skills/ingenieria/especificar/SKILL.md) | Bajar acuerdos a una spec verificable y autosuficiente. | Manual |
| [$dividir-en-tareas](./skills/ingenieria/dividir-en-tareas/SKILL.md) | Dividir una entrega en tickets acotados para sesiones limpias. | Manual |
| [$implementar](./skills/ingenieria/implementar/SKILL.md) | Construir y verificar un pedido, spec o ticket cuidando arquitectura y contexto. | Manual |
| [$pruebas-primero](./skills/ingenieria/pruebas-primero/SKILL.md) | Desarrollar o corregir con ciclos proporcionales rojo, verde y refactorización. | Auto |
| [$revisar-codigo](./skills/ingenieria/revisar-codigo/SKILL.md) | Auditar cambios, una rama o un PR contra normas, ADR y requisitos. | Auto |
| [$diagnosticar-errores](./skills/ingenieria/diagnosticar-errores/SKILL.md) | Aislar la causa de un fallo o regresión con evidencia reproducible. | Auto |
| [$mejorar-arquitectura](./skills/ingenieria/mejorar-arquitectura/SKILL.md) | Auditar el código para priorizar mejoras estructurales con evidencia. | Manual |
| [$retrospectiva](./skills/ingenieria/retrospectiva/SKILL.md) | Proponer mejoras al flujo a partir de problemas observados en una sesión. | Manual |
| [$configurar-repositorio](./skills/ingenieria/configurar-repositorio/SKILL.md) | Configurar gestor de issues, dominio y convenciones en `AGENTS.md`. | Manual |

### Referencias, productividad y aprendizaje

| Skill | Categoría | Invocación | Para qué sirve |
| --- | --- | --- | --- |
| [$modelar-dominio](./skills/referencias/modelar-dominio/SKILL.md) | Referencia | Auto | Fijar vocabulario del negocio (`GLOSSARY.md`) y norte de decisiones (`docs/adr/`). |
| [$escribir-para-agentes](./skills/referencias/escribir-para-agentes/SKILL.md) | Referencia | Manual | Redactar `AGENTS.md` o skills efectivas sin ruido. |
| [$transferir-contexto](./skills/productividad/transferir-contexto/SKILL.md) | Productividad | Manual | Preparar el traspaso a una sesión limpia entre fases o tickets. |
| [$aprender](./skills/aprendizaje/aprender/SKILL.md) | Aprendizaje | Manual | Estudio guiado basado en evidencia y práctica directa. |

<details>
<summary>Dependencias al instalar por nombre</summary>

| Si instalás… | Incluí también… |
| --- | --- |
| `aclarar-idea` o `disenar-solucion` | `modelar-dominio` si registrás glosario o ADR |
| `implementar` | `pruebas-primero` y `revisar-codigo` |
| `diagnosticar-errores` | `pruebas-primero` y `revisar-codigo` si aplicás y revisás la corrección |

</details>

## Complementos útiles

- **Frontend / UX:** [Impeccable](https://impeccable.style/docs/) o [frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) (diseño), [Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance) (HTML/CSS/accesibilidad) y [webapp-testing](https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md) (pruebas en navegador).
- **`AGENTS.md` del proyecto:** definí ahí solo las convenciones clave (separación de capas, comandos de verificación, componentes reutilizables y enlace a `DESIGN.md` si existe).

## Validar la colección

Antes de publicar cambios en este repositorio:

```bash
node scripts/validate-skills.mjs
```
