---
name: transferir-contexto
description: Resume la conversación actual en un documento de transferencia para que otro agente pueda continuarla.
argument-hint: "¿Para qué se utilizará la próxima sesión?"
disable-model-invocation: true
---

Redactá un documento de transferencia conciso para retomar el trabajo en una **sesión limpia** (evitando arrastrar contexto acumulado entre fases o tickets). Guardalo en el directorio temporal del sistema operativo del usuario (`$TMPDIR`, `/tmp` o `%TEMP%` en Windows), o en `.scratch/handoff.md` (sin commitear) / directamente en el chat si el entorno aísla el directorio temporal o el usuario lo prefiere.

Incluí una sección «skills sugeridas» indicando qué skills conviene invocar al retomar (manuales o automáticas).

No dupliques información ya registrada en otros artefactos (especificaciones, planes, ADR, incidencias, commits o diferencias de código). Hacé referencia a ellos mediante su ruta o URL.

Ocultá toda información sensible, como claves de API, contraseñas o datos de identificación personal.

Si el usuario proporcionó argumentos, interpretalos como una descripción del objetivo de la siguiente sesión y adaptá el documento en consecuencia.
