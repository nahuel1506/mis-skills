---
name: escribir-para-agentes
description: Redacción de documentos destinados a agentes. Utilizar al crear o editar skills, o modificar AGENTS.md o CLAUDE.md.
---

Referencia para escribir cualquier documento que consuma un agente: una skill, un `AGENTS.md` o `CLAUDE.md`, o un documento alcanzado mediante una referencia. Cambia el formato de entrega, pero no la manera de escribir: los mismos mecanismos hacen predecible el comportamiento del agente, porque sigue el mismo _procedimiento_ en cada ejecución, no porque produzca siempre la misma salida.

Si el documento es una skill, leé [`SKILL-MECHANICS.md`](SKILL-MECHANICS.md) para conocer el frontmatter, cómo elegir la invocación y las skills que funcionan como selectores.

## Referencias de contexto

Una **referencia de contexto** es una indicación dentro del contexto del agente que nombra material situado fuera de ese contexto y establece cuándo debe consultarse. La descripción de una skill es una referencia; una línea de `AGENTS.md` que menciona un documento también lo es. La _redacción_ de la referencia, no su destino, determina cuándo el agente consulta el material y con qué confiabilidad. Si una referencia débil apunta a contenido imprescindible, genera variabilidad indeseada: primero hacé más precisa la redacción y solamente incluí el contenido en línea si eso no funciona.

Una referencia cumple dos funciones: explicar qué material señala y enumerar las **ramas** que deben activar su consulta (cada rama es un caso distinto que maneja el documento y por eso sigue un camino diferente). Cada palabra de una referencia cargada siempre consume recursos en cada turno, así que necesita incluso más depuración que el cuerpo:

- **Colocá primero la palabra guía**: es en la referencia donde cumple su función de activación.
- **Un disparador por rama.** Los sinónimos que nombran una misma rama son duplicaciones: unificalos y conservá solamente los casos genuinamente diferentes.
- **Eliminá información de identificación que el cuerpo ya contiene.**

## Las dos cargas

Cada documento y referencia consume uno de dos presupuestos:

- **Carga de contexto**: costo del material que siempre ocupa la ventana del agente: líneas de `AGENTS.md`, descripciones de skills y cualquier otro texto presente en todos los turnos, aunque no se use. Consume tokens y atención.
- **Carga cognitiva**: costo para la persona de saber qué documentos existen y cuándo consultar cada uno. La persona es el índice. No siempre hay que minimizarla: es el costo de mantener el control humano. Reservala para las decisiones donde importa el criterio humano y eliminála donde no aporta.

El material consultado solo mediante una referencia evita la carga de contexto, salvo por la línea que lo referencia. El material sin referencia alguna depende completamente de la memoria y las decisiones del usuario.

## Jerarquía de información

Un documento contiene dos tipos de contenido: **pasos** (acciones ordenadas del agente) y **referencias** (definiciones, reglas y hechos consultados cuando corresponde). Pueden mezclarse libremente: solo pasos (receta), solo referencias (normas de revisión, esta skill) o ambos. La decisión fundamental es dónde ubicar cada contenido en la **jerarquía de información**, según qué tan pronto lo necesita el agente:

1. **Paso dentro del archivo**: nivel principal; lo que el agente debe hacer, en orden.
2. **Referencia dentro del archivo**: se consulta cuando hace falta. Puede ser un conjunto plano de reglas equivalentes, como las reglas de una revisión; no tiene nada de malo.
3. **Referencia diferida**: contenido ubicado en un archivo separado, alcanzado mediante una referencia contextual y cargado solamente cuando se cumple su condición. Puede ser un archivo vecino o una fuente externa accesible desde cualquier documento.

Si trasladás muy poco a niveles inferiores, el documento principal crece demasiado; si trasladás demasiado, ocultás material necesario. Esa tensión determina el diseño.

La **divulgación progresiva** consiste en bajar información dentro de la jerarquía (sacarla del archivo principal y dejar una referencia), manteniendo legible la parte principal. No es ante todo una optimización de tokens: protege la organización de la información. El criterio más claro es el de las ramas: dejá en el archivo principal aquello que todas necesitan y trasladá tras referencias lo que solo requieren algunas. Cuando un documento contiene pasos, las referencias que deberían estar separadas pueden ocultarlos y hacer que el agente les preste atención de forma irregular: eso afecta la variabilidad del comportamiento, además de la legibilidad.

La **agrupación contextual** complementa la jerarquía dentro de cada archivo: la jerarquía determina _a qué nivel_ va el contenido; la agrupación determina _qué debe aparecer junto a qué_. Mantené la definición, reglas y advertencias de un concepto bajo un mismo título, en vez de dispersarlas. La prueba es que el documento se lea como documentación pensada para el agente. El contenido agrupado sí; el disperso no. Esto es distinto de duplicar: la duplicación repite el significado en varios lugares, mientras que la dispersión divide un significado en fragmentos distantes.

La **expansión desmedida** ocurre cuando un documento es excesivamente largo aunque todo su contenido sea válido y no se repita. La atención se diluye y cada línea adicional exige mantenimiento. La solución es usar la jerarquía: diferir información de consulta y dividir por ramas o secuencias para que cada recorrido cargue solo lo necesario.

## Pasos y criterios de finalización

Cada paso necesita un **criterio de finalización**, que determine cuándo está completo. Dos propiedades lo hacen efectivo:

- **Claridad**: ¿puede el agente distinguir entre terminado y pendiente? Un límite ambiguo («se alcanzó comprensión») favorece la **finalización prematura**: el agente da el paso por terminado antes de resolverlo y desplaza su atención hacia *terminar*. Los pasos posteriores que tiene visibles (los **pasos posteriores al cumplimiento**) ejercen presión para avanzar; la claridad del criterio la contrarresta. Procedé así: **precisá primero el criterio** (solución local y barata); solo si es imposible precisarlo y observás apresuramiento, ocultá los pasos posteriores dividiendo la secuencia. Esto último solo funciona cuando existe un límite real de contexto (transferencia o subagente); una llamada en el mismo contexto deja los pasos posteriores visibles.
- **Exigencia**: cuánto trabajo requiere. «Dar cuenta de todos los modelos modificados» obliga a investigar más que «producir una lista de cambios». La exigencia impulsa el **trabajo de investigación** que realiza el agente, implícito en la redacción sin necesidad de otro paso. También puede aplicarse a referencias: «aplicar todas las reglas» obliga a un conjunto plano de normas tanto como «completar cada paso» obliga a una secuencia. Así, incluso los documentos que solo contienen reglas pueden imponer exhaustividad.

Los criterios más fuertes son verificables y exhaustivos a la vez.

## Cuándo dividir documentos

Dividir un documento en dos consume uno de los dos presupuestos. Hacelo solamente si la separación lo justifica:

- **Por secuencia**: separá pasos cuando ver los posteriores tiente al agente a cerrar prematuramente el actual. Ocultarlos fomenta más trabajo sobre el paso vigente. Atención al efecto inverso: unir secuencias deja más pasos futuros a la vista y puede acelerar indebidamente su finalización.
- **Por invocación**, específico de skills: consultá [`SKILL-MECHANICS.md`](SKILL-MECHANICS.md).

## Palabras guía

Una **palabra guía** es un concepto compacto que ya existe en el entrenamiento previo del modelo y que el agente puede utilizar para razonar al ejecutar el documento (por ejemplo, _lección_, _niebla de guerra_, _pruebas exploratorias dirigidas_). Repetida como término, no como explicación completa, construye una definición distribuida y ancla una región de comportamiento con pocos tokens al aprovechar asociaciones que el modelo ya aprendió. Inventar un término propio sirve si se define con claridad, pero no aprovecha asociaciones existentes y exige más palabras de explicación. Preferí uno conocido cuando sea adecuado.

Tiene dos efectos. En el cuerpo, **ejecución**: cada aparición activa el mismo comportamiento, y en referencias planas enfoca la atención sobre una clase de casos. En una referencia de contexto, **invocación**: si el mismo término aparece en las solicitudes, la documentación y el código, el agente lo relaciona más fácilmente con el material y accede a él con mayor confiabilidad.

Buscá oportunidades para simplificar utilizando palabras guía. Una explicación de tres ideas repetida en varios lugares o una referencia que gasta una oración en aludir a un solo concepto son candidatos para sustituir por un término:

- «Rápido, determinista y con poco costo» → _ajustado_ (un ciclo _ajustado_).
- «Un ciclo de prueba en el que confiás» → _rojo_, convirtiendo un criterio impreciso en una condición observable: el ciclo se pone _rojo_ ante el error o no.

Ganás dos veces: menos tokens y una referencia conceptual más precisa. Suponé que todos los documentos contienen explicaciones repetidas que podrían sustituirse por términos adecuados. Buscalas.

La **negación** es un problema cercano: intentar orientar mediante prohibiciones introduce en el contexto el comportamiento prohibido y puede volverlo más accesible para el modelo. «No pienses en un elefante» hace aparecer justamente esa idea; la negación puede ser más débil que el concepto activado y la prohibición puede interpretarse parcialmente como una instrucción. Escribí en **positivo**: indicá el comportamiento deseado («escribí comentarios de una línea») para centrar la atención en él. Conservá una prohibición solamente como regla estricta que no pueda expresarse positivamente; aun entonces, acompañala con la acción correcta.

## Depuración

- Mantené cada significado en **una sola fuente de verdad**: un lugar autorizado que permita cambiar el comportamiento mediante una sola edición. La **duplicación** (la misma idea en varios lugares) aumenta el mantenimiento y el consumo de tokens, exagerando la importancia del concepto dentro de la jerarquía. Es el inverso accidental de una palabra guía, que repite el término intencionalmente, no todo su significado.
- El **entorno** también es fuente de verdad (scripts de `package.json`, archivos de configuración, estructura de carpetas y salida de `--help`). Un documento que vuelve a describirlo es una **caché**: una copia que solo justifica su costo cuando consultar el original es difícil. Documentá lo que el agente no puede descubrir mirando: convenciones no escritas, motivos de decisiones y problemas inesperados que las configuraciones no revelan. Dejá las consultas simples en el entorno, donde no pueden quedar desactualizadas como texto duplicado.
- Revisá cada línea por su **pertinencia**: ¿sigue contribuyendo a la tarea? Una línea deja de ser pertinente si nunca afecta al trabajo (exposición innecesaria o rama que debería diferirse), o si el comportamiento o el mundo cambiaron. Cuanto más breve sea el documento, más fácil mantenerlo vigente. Sin depuración, se acumula **sedimento**: capas obsoletas que nadie elimina porque agregar parece seguro y borrar parece riesgoso, hasta que resulta difícil encontrar lo que todavía importa.
- Buscá **instrucciones sin efecto** oración por oración: si el modelo ya hace algo por defecto, escribirlo consume contexto sin cambiar su comportamiento. La prueba «¿modifica la conducta frente a la configuración base?» depende del modelo, no del lector. Si dos personas discrepan, deben probarlo, no discutir en abstracto. Cuando no produzca cambios, eliminá la oración en vez de recortarla. Esto también evalúa palabras guía: un término demasiado débil para mejorar el comportamiento por defecto («sé minucioso» cuando el modelo ya lo es) no aporta; conviene buscar uno más específico y exigente («exhaustivo»), no otra técnica.
