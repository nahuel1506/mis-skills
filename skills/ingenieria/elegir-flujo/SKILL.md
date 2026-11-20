---
name: elegir-flujo
description: Recomienda la skill o el recorrido más corto para el objetivo del usuario dentro de esta colección.
disable-model-invocation: true
---

# Elegir cómo seguir

Partí de lo que el usuario quiere obtener ahora y de lo que ya tiene. Usá la conversación, la spec, el diseño, el prototipo o el diff existentes como punto de entrada. Recomendá el recorrido más corto que cumpla el objetivo y explicá qué aporta cada paso sugerido. Indicá qué decisión necesita de la persona cuando eso cambie el recorrido. La consulta termina con la recomendación salvo que el usuario pida avanzar.

## Opciones según el objetivo

| Objetivo | Skill |
| --- | --- |
| Aclarar una idea en el chat | `aclarar-idea` |
| Aclarar una idea y registrar vocabulario o decisiones de dominio | `aclarar-con-registro` |
| Diseñar o comparar soluciones junto con el usuario | `disenar-solucion` |
| Resolver una pregunta mediante un experimento ejecutable | `prototipar` |
| Registrar lo acordado en una especificación | `especificar` |
| Dividir una entrega en incrementos que se puedan verificar | `dividir-en-tareas` |
| Delegar la implementación de un pedido, spec o tickets | `implementar` |
| Evaluar un cambio contra sus requisitos y los estándares del repo | `revisar-codigo` |
| Mejorar cómo se trabaja a partir de lo ocurrido en una sesión | `retrospectiva` |

Si el objetivo es más específico, consultá la skill pertinente de la colección. Por ejemplo, `diagnosticar-errores` para diagnosticar un error difícil o `mejorar-arquitectura` para buscar oportunidades estructurales.

Antes de recomendar una skill, leé su `SKILL.md` para confirmar sus requisitos y qué produce o modifica. Si una skill de invocación manual no aparece en la lista actual, buscala entre las skills disponibles o en la colección antes de darla por ausente. Si hay que decidir cómo transferir el contexto, consultá [PHASE-BOUNDARIES.md](PHASE-BOUNDARIES.md).
