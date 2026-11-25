---
name: escribir-para-agentes
description: Principios para redactar instrucciones consumidas por agentes (skills, AGENTS.md o CLAUDE.md).
disable-model-invocation: true
---

Referencia para redactar documentos destinados a agentes: skills, `AGENTS.md`, `CLAUDE.md` o documentos auxiliares referenciados. Los mismos principios hacen predecible el procedimiento del agente sin desperdiciar contexto.

Si el documento es una skill, consultá [`SKILL-MECHANICS.md`](SKILL-MECHANICS.md) para frontmatter, tipo de invocación y skills de encaminamiento (*routers*).

## Referencias de contexto y las dos cargas

Una **referencia de contexto** nombra material externo e indica cuándo consultarlo (la `description` de una skill o un puntero en `AGENTS.md`). Su redacción determina la confiabilidad de activación; si una referencia falla, hacela más precisa antes de incrustar el contenido en línea.

- **Colocá primero la palabra guía** que activa el caso.
- **Un disparador por rama:** unificá sinónimos y conservá solo casos genuinamente distintos.
- **No repitas identificación** que ya está en el cuerpo del documento.

Cada texto consume uno de dos presupuestos:

- **Carga de contexto:** material presente en todos los turnos (`AGENTS.md`, descripciones de skills automáticas). Consume tokens y atención permanentemente.
- **Carga cognitiva:** esfuerzo humano para recordar qué existe y cuándo invocarlo. Reservala para decisiones donde importa el control humano y eliminala donde no aporta.

## Jerarquía de información y divulgación progresiva

Ubicá cada contenido según qué tan pronto se necesita:

1. **Paso dentro del archivo:** acciones ordenadas que toda ejecución necesita.
2. **Referencia dentro del archivo:** reglas o definiciones planas de consulta inmediata.
3. **Referencia diferida:** archivo separado que se carga solo cuando se cumple su condición de rama.

La **divulgación progresiva** baja a referencias diferidas aquello que solo necesitan algunas ramas, evitando la **expansión desmedida** (documentos largos donde todo es válido pero la atención se diluye). Complementala con **agrupación contextual**: mantené definición, reglas y advertencias de un mismo concepto juntas, sin dispersarlas ni duplicarlas.

## Pasos, criterios de finalización y división

Cada paso necesita un **criterio de finalización** con:

- **Claridad:** condición observable que distinga terminado de pendiente y evite la **finalización prematura** por presión de los pasos siguientes visibles. Precisá el criterio antes de dividir documentos.
- **Exigencia:** grado de rigor implícito en el verbo o alcance («dar cuenta de todos los archivos afectados» exige más investigación que «listar cambios»).

Dividí un documento en dos solo cuando lo justifique:

- **Por secuencia:** cuando ver pasos posteriores tienta al agente a cerrar prematuramente el actual (solo efectivo con límite real de contexto: subagente o transferencia).
- **Por invocación (skills):** ver [`SKILL-MECHANICS.md`](SKILL-MECHANICS.md).

## Palabras guía y redacción en positivo

Una **palabra guía** es un concepto compacto conocido por el modelo (por ejemplo, *rojo*, *punto de separación*, *localidad*) que ancla comportamiento con menos tokens que una explicación repetida. Buscá párrafos repetidos que puedan comprimirse en un término preciso; en una referencia de contexto, usar el mismo término del código o pedido mejora la activación.

Escribí en **positivo**: indicar la conducta deseada enfoca la atención mejor que prohibir la no deseada («no pienses en un elefante»). Conservá prohibiciones solo para reglas estrictas, acompañadas de la alternativa correcta.

## Depuración

- **Fuente única de verdad:** mantené cada regla en un solo lugar; la duplicación cuesta tokens, mantenimiento y distorsiona prioridades.
- **El entorno es fuente de verdad:** no dupliques en texto lo que el agente descubre directo en el repo (`package.json`, `.csproj`, scripts, `--help`), salvo que sea difícil de inferir. Documentá convenciones no escritas, motivos de decisiones y límites que el código por sí solo no revela.
- **Checks deterministas antes que prosa:** para convenciones mecánicas o fronteras repetibles, preferí comprobaciones automáticas (linters, tipos, tests de arquitectura) antes que reglas en texto; reservá las instrucciones para intención, criterio y límites que las herramientas no validan.
- **Pertinencia y sedimento:** eliminá líneas que ya no afectan el comportamiento para evitar acumulación de capas obsoletas.
- **Instrucciones sin efecto:** probá oración por oración si realmente cambia la conducta frente a lo que el modelo ya hace por defecto. Si no cambia nada (o si una palabra guía es demasiado débil frente al comportamiento base), eliminala o reemplazala por una condición concreta y verificable.
