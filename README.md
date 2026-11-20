# Mis skills

Veinte skills en español para trabajar con agentes. Podés aclarar una idea, diseñar la solución en conjunto, verificar una hipótesis, explicar qué tiene que cumplir la entrega, implementarla o revisar el resultado. Cada etapa se puede usar por separado o combinar con otras.

## Instalación

Desde el proyecto donde las quieras usar, listá la colección o instalá una selección para Codex. Estos comandos usan [Skills CLI](https://github.com/vercel-labs/skills) y requieren Node.js 22.20 o posterior.

```bash
npx skills add nahuel1506/mis-skills --list
npx skills add nahuel1506/mis-skills -a codex --skill disenar-solucion prototipar -y
```

Para trabajar con la colección completa en ese proyecto:

```bash
npx skills add nahuel1506/mis-skills -a codex --skill "*" -y
```

Agregá `-g` para una instalación personal disponible en tus proyectos. Si ya tenés una copia de una skill en esa ubicación, verificá cuál querés mantener antes de instalarla.

**Instalación manual.** Copiá la carpeta completa de cada skill a `.agents/skills/` dentro del proyecto o a `~/.agents/skills/` para tu usuario. Incluí los archivos de apoyo y `agents/openai.yaml` cuando esté presente. Por ejemplo, `skills/ingenieria/disenar-solucion/` pasa a `.agents/skills/disenar-solucion/`. Consultá la [documentación de skills de Codex](https://learn.chatgpt.com/docs/build-skills).

## Cómo invocarlas

En Codex, escribí `$` y seleccioná la skill, o incluí su comando en el pedido. Los comandos van sin tildes. Las marcadas **Manual** están configuradas para que las invoques explícitamente. Las marcadas **También automática** pueden activarse cuando el pedido encaja con su descripción.

Podés empezar con cualquiera de estas opciones:

- **Aclarar una idea.** `$aclarar-idea` para conversar en el chat. Con `$aclarar-con-registro` también podés conservar vocabulario y decisiones de dominio en el repo.
- **Participar en el diseño.** `$disenar-solucion Diseñemos cómo manejar eventos duplicados. Quiero plantearte mi enfoque primero.` Si una decisión depende de algo que conviene observar, podés pasar a `$prototipar` y volver al diseño con el resultado.
- **Delegar una tarea clara.** `$implementar Agregá este filtro y verificá que funcione.` La implementación puede partir del pedido, una especificación o tickets existentes.
- **Coordinar una entrega grande.** Aclará la idea, diseñá o prototipá si aporta, formalizá con `$especificar` y usá `$dividir-en-tareas` si conviene separar entregas. Después podés implementar y revisar cada cambio. `$retrospectiva` sirve si la sesión dejó una mejora concreta para el futuro.
- **Revisar código existente.** `$revisar-codigo Revisá mis cambios sin commit contra esta rúbrica.` Podés indicar una tarea, una rama o un PR y adjuntar la fuente de requisitos.
- **Estudiar un tema.** Ejecutá `$aprender` en un directorio de estudio. Ahí se guardan las lecciones y el progreso.

Si querés ayuda para elegir el recorrido, usá `$elegir-flujo`. La skill recomienda según tu objetivo y lo que ya tenés preparado.

## Catálogo

### Ingeniería

| Skill | Cuándo usarla y qué entrega | Invocación |
| --- | --- | --- |
| [$elegir-flujo](./skills/ingenieria/elegir-flujo/SKILL.md) | Sugiere la skill o la secuencia más corta que sirva para tu tarea. | Manual |
| [$aclarar-idea](./skills/ingenieria/aclarar-idea/SKILL.md) | Pone a prueba una idea por rondas. Los acuerdos quedan en el chat. | Manual |
| [$aclarar-con-registro](./skills/ingenieria/aclarar-con-registro/SKILL.md) | Conduce la misma entrevista y registra términos y decisiones de arquitectura acordados cuando corresponde. | Manual |
| [$disenar-solucion](./skills/ingenieria/disenar-solucion/SKILL.md) | Compara enfoques técnicos con vos, explica los compromisos y deja acuerdos verificables. | Manual |
| [$prototipar](./skills/ingenieria/prototipar/SKILL.md) | Crea un experimento ejecutable para responder una pregunta de diseño o comportamiento. Indica cómo repetir lo observado. | También automática |
| [$especificar](./skills/ingenieria/especificar/SKILL.md) | Convierte acuerdos en una especificación verificable. Usa el destino indicado, el gestor configurado o un archivo local. | Manual |
| [$dividir-en-tareas](./skills/ingenieria/dividir-en-tareas/SKILL.md) | Propone entregas verificables con dependencias y criterios por ticket. Publica la división aprobada. | Manual |
| [$implementar](./skills/ingenieria/implementar/SKILL.md) | Construye desde el pedido, la spec o los tickets. Verifica y revisa según el alcance del cambio. | Manual |
| [$pruebas-primero](./skills/ingenieria/pruebas-primero/SKILL.md) | Implementa o corrige un comportamiento con pruebas primero y ciclos de rojo, verde y refactorización local. | También automática |
| [$revisar-codigo](./skills/ingenieria/revisar-codigo/SKILL.md) | Evalúa cambios preparados, sin commit o de una rama o PR según el alcance pedido, los requisitos y las normas del repo. | También automática |
| [$retrospectiva](./skills/ingenieria/retrospectiva/SKILL.md) | Propone mejoras de navegación, verificaciones o instrucciones a partir de lo que pasó en una sesión. | Manual |
| [$diagnosticar-errores](./skills/ingenieria/diagnosticar-errores/SKILL.md) | Aísla un fallo difícil o una regresión. Puede entregar un diagnóstico parcial y, si pedís la corrección, verificarla. | También automática |
| [$mejorar-arquitectura](./skills/ingenieria/mejorar-arquitectura/SKILL.md) | Encuentra y prioriza mejoras estructurales con referencias al código, costo y forma de verificarlas. | Manual |
| [$configurar-repositorio](./skills/ingenieria/configurar-repositorio/SKILL.md) | Prepara las convenciones de un repo para su gestor de incidencias, etiquetas y documentación de dominio. Presenta la configuración antes de escribirla. | Manual |

### Referencias

| Skill | Cuándo usarla y qué entrega | Invocación |
| --- | --- | --- |
| [$entrevista-critica](./skills/referencias/entrevista-critica/SKILL.md) | Define cómo entrevistar por rondas, verificar hechos y presentar recomendaciones. La consultan las dos skills de aclaración. | También automática |
| [$modelar-dominio](./skills/referencias/modelar-dominio/SKILL.md) | Ayuda a resolver ambigüedades y registrar términos en el glosario y decisiones importantes en los ADR. | También automática |
| [$diseno-de-modulos](./skills/referencias/diseno-de-modulos/SKILL.md) | Da criterios para evaluar interfaces, localizar complejidad y decidir dónde probar o sustituir una dependencia. | También automática |
| [$escribir-para-agentes](./skills/referencias/escribir-para-agentes/SKILL.md) | Orienta la redacción de skills, `AGENTS.md` y otras instrucciones que consume un agente. | También automática |

### Productividad

| Skill | Cuándo usarla y qué entrega | Invocación |
| --- | --- | --- |
| [$transferir-contexto](./skills/productividad/transferir-contexto/SKILL.md) | Prepara un documento con lo necesario para continuar en otra sesión o con otra persona. | Manual |

### Aprendizaje

| Skill | Cuándo usarla y qué entrega | Invocación |
| --- | --- | --- |
| [$aprender](./skills/aprendizaje/aprender/SKILL.md) | Organiza un estudio de varias sesiones con misión, lecciones HTML, recursos y registros de aprendizaje. | Manual |

## Si instalás solo algunas

| Si instalás… | Incluí también… |
| --- | --- |
| `aclarar-idea` | `entrevista-critica` |
| `aclarar-con-registro` | `entrevista-critica` y `modelar-dominio` |
| `implementar` | `pruebas-primero` y `revisar-codigo` |
| `diagnosticar-errores` para corregir un fallo | `pruebas-primero` e `implementar` si querés usar sus criterios de prueba y cierre |
| `pruebas-primero` o `mejorar-arquitectura` | `diseno-de-modulos` si vas a discutir una interfaz o un punto de prueba |
| `retrospectiva` para redactar instrucciones | `escribir-para-agentes` |

Cuando `especificar` no recibe un destino y el repo no tiene un gestor configurado, guarda la spec en `.scratch/<feature-slug>/spec.md`. `dividir-en-tareas` sigue el destino de la spec salvo que indiques otro. Una implementación directa puede completarse sin generar esos archivos. El commit se hace si lo pedís o si el flujo del repo lo establece.

## Editar y actualizar

En el catálogo, cada comando enlaza al `SKILL.md` que define su comportamiento. Los recursos vinculados están dentro de la misma carpeta. En `agents/openai.yaml` podés editar el nombre visible o la política de invocación. Si cambiás el nombre de una skill, mantené alineados el nombre de la carpeta, el campo `name` y las referencias desde otras skills.

Guardá y publicá tus cambios en este repositorio. Para instalaciones realizadas con Skills CLI, ejecutá desde el proyecto:

```bash
npx skills check
npx skills update --project
```

Para una instalación personal, usá `npx skills update --global`. Si instalaste por copia manual, volvé a copiar la carpeta actualizada. [Referencia de Skills CLI](https://github.com/vercel-labs/skills/blob/main/docs/commands.md)

## Origen y licencia

Diecinueve skills son traducciones y adaptaciones del [repositorio de Matt Pocock](https://github.com/mattpocock/skills), con base en el [commit 5863806](https://github.com/mattpocock/skills/tree/5863806dd4e15c63174bee4e7515a4256792ecfa). Los nombres y recorridos de esta colección se adaptaron al flujo descrito arriba. `disenar-solucion` es una skill propia.

Distribuido bajo la [licencia MIT](./LICENSE).
