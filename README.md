# Mis skills

Skills en español para Codex. Podés entrar en cualquier etapa, desde aclarar una idea hasta revisar el resultado.

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

Volvé a ejecutar el bloque de instalación para sumar skills nuevas a esas carpetas. [Actualización con GitHub CLI](https://cli.github.com/manual/gh_skill_update)

Si migrás desde una instalación plana de Skills CLI, retirala primero con `npx skills remove nahuel1506/mis-skills` en la raíz de ese proyecto.

### Instalación por nombre con Skills CLI

```bash
npx skills add nahuel1506/mis-skills -a codex --skill disenar-solucion -y
```

Requiere Node.js 22.20 o posterior. Usá `npx.cmd` en PowerShell si hace falta. Podés indicar varios nombres, elegir `--skill "*"` para toda la colección o agregar `-g` para instalar en todos tus proyectos. [Skills CLI](https://github.com/vercel-labs/skills/blob/main/docs/commands.md#skills-add)

Para actualizar esta instalación, usá `npx skills update --project` o `npx skills update --global` si instalaste con `-g`.

Si mantenés la colección, editá el `SKILL.md` enlazado en el catálogo, publicá el cambio y actualizá desde los proyectos que lo usen.

## Usar

Escribí `$nombre` en el chat de Codex. Las skills marcadas **Auto** también se pueden activar por contexto.

Para un pedido claro, podés empezar con `$implementar`. Si querés participar en la decisión técnica, usá `$disenar-solucion` y probá una hipótesis con `$prototipar` si hace falta. `$elegir-flujo` te ayuda a decidir por dónde seguir.

## Catálogo

### Ingeniería

| Skill | Para qué sirve | Invocación |
| --- | --- | --- |
| [$elegir-flujo](./skills/ingenieria/elegir-flujo/SKILL.md) | Elegir el recorrido más corto para la tarea. | Manual |
| [$aclarar-idea](./skills/ingenieria/aclarar-idea/SKILL.md) | Poner a prueba una idea y acordar detalles en el chat. | Manual |
| [$aclarar-con-registro](./skills/ingenieria/aclarar-con-registro/SKILL.md) | Aclarar una idea y registrar términos o decisiones de arquitectura. | Manual |
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
| [$configurar-repositorio](./skills/ingenieria/configurar-repositorio/SKILL.md) | Acordar dónde se gestionan issues, etiquetas y documentación de dominio. | Manual |

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
| `aclarar-idea` | `entrevista-critica` |
| `aclarar-con-registro` | `entrevista-critica` y `modelar-dominio` |
| `implementar` | `pruebas-primero` y `revisar-codigo` |
| `diagnosticar-errores` | `pruebas-primero` e `implementar` si querés aplicar sus criterios al corregir. |
| `pruebas-primero` o `mejorar-arquitectura` | `diseno-de-modulos` si evaluás interfaces o puntos de prueba. |
| `retrospectiva` | `escribir-para-agentes` si redactás instrucciones. |

</details>

## Frontend y UX/UI

- **Diseño.** Impeccable puede ayudarte a definir una interacción (`shape`) o evaluar una pantalla existente (`critique`). Para explorar la identidad visual de una pantalla, `frontend-design` de Anthropic también cubre dirección visual, tipografía y composición. En una misma tarea, elegí una como guía principal de diseño. [Impeccable](https://impeccable.style/docs/) · [Anthropic](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)
- **Implementación.** Combiná `$implementar` con Modern Web Guidance cuando necesites consultar patrones de HTML, CSS, accesibilidad o compatibilidad. [Chrome for Developers](https://developer.chrome.com/docs/modern-web-guidance)
- **Verificación.** Probá el flujo en el navegador y sumá `$revisar-codigo` si querés contrastar el cambio con sus requisitos. `webapp-testing` de Anthropic es una opción para probar una app local con Playwright. [Web App Testing](https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md)

En `AGENTS.md` indicá qué componentes o estilos del proyecto reutilizar y cuándo verificar una pantalla en el navegador. Si el proyecto tiene un `DESIGN.md`, enlazalo ahí para que las skills usen la misma referencia visual. [Guía de AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
