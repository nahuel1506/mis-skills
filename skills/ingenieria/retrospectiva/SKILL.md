---
name: retrospectiva
description: Revisa una sesión de programación y propone mejoras al entorno de trabajo a partir de problemas observados.
disable-model-invocation: true
---

Revisá la sesión indicada o la actual. Usá su registro para identificar momentos concretos en los que se perdió tiempo, se repitió un error o faltó información. Antes de proponer un cambio, comprobá qué documentación, herramientas o verificaciones ya existen.

Para cada mejora, indicá qué pasó, qué cambiarías, dónde y cómo se podría comprobar que ayudó. Priorizá por impacto. Una sesión fluida puede terminar sin propuestas.

- Si costó encontrar algo, mejorá la referencia desde el lugar donde el agente ya busca.
- Si una comprobación existente habría detectado el error, revisá por qué quedó sin ejecutar antes de proponer otra. Si el error es mecánico y puede reproducirse, preferí una comprobación determinista. Si hace falta criterio, distinguí si corresponde a una convención del proyecto (`AGENTS.md` o ADR) o a una mejora general de las skills.
- Si una instrucción confundió al agente o duplicó trabajo, considerá corregirla, moverla a donde se necesita o retirarla. Tratá un caso aislado como evidencia de esa sesión al valorar si conviene una regla general.

Aplicá las mejoras que el usuario te pida. Si te pide redactar o modificar instrucciones para agentes, consultá `escribir-para-agentes`.
