---
name: transferir-contexto
description: Resume la conversación actual en un documento de transferencia para que otro agente pueda continuarla.
argument-hint: "¿Para qué se utilizará la próxima sesión?"
disable-model-invocation: true
---

Redactá un documento de transferencia que resuma la conversación actual para que un agente nuevo pueda retomar el trabajo. Guardalo en el directorio temporal del sistema operativo del usuario (`$TMPDIR`, o `/tmp` en su defecto; `%TEMP%` en Windows), no en el espacio de trabajo actual.

Incluí una sección «skills sugeridas» en la que indiques cuáles debería invocar el siguiente agente mediante la herramienta de skills.

No dupliques información ya registrada en otros artefactos (especificaciones, planes, ADR, incidencias, commits o diferencias de código). Hacé referencia a ellos mediante su ruta o URL.

Ocultá toda información sensible, como claves de API, contraseñas o datos de identificación personal.

Si el usuario proporcionó argumentos, interpretalos como una descripción del objetivo de la siguiente sesión y adaptá el documento en consecuencia.
