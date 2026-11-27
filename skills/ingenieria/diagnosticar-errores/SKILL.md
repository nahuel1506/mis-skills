---
name: diagnosticar-errores
description: Diagnostica errores difíciles y regresiones de rendimiento a partir de una reproducción o de evidencia verificable.
---

# Diagnóstico de errores

Consultá solo el código, glosario y ADR relevantes (delegá barridos amplios de logs o archivos a un subagente de solo lectura si el entorno lo permite para mantener enfocado el hilo principal). Un diagnóstico puede terminar con evidencia y una causa confirmada o pendiente; aplicá la corrección solo si el usuario la pidió y continuá hasta verificarla o explicar qué impide hacerlo.

## 1. Obtené una señal del fallo

Buscá una señal que detecte **el fallo exacto**. Puede ser una prueba, un escenario reproducible o una traza que permita distinguirlo de otros problemas. Usá la señal más rápida y fiable que conserve las condiciones relevantes. Registrá cómo la obtuviste y qué resultado muestra el fallo para poder repetir la comprobación.

Elegí la técnica según el caso.

- **Comportamiento funcional.** Usá una prueba fallida, una invocación CLI o una solicitud a una instancia de desarrollo. Para una interacción de interfaz, reproducí los pasos y observá el resultado relevante en el navegador.
- **Flujo distribuido.** Correlacioná el mismo evento o solicitud entre servicios. Si ayuda a aislar el problema, reproducí una traza anonimizada o armá un entorno de prueba con las dependencias necesarias.
- **Regresión entre estados conocidos.** Compará la misma entrada en dos versiones o configuraciones. Si la señal es fiable y hay extremos conocidos, podés automatizar una búsqueda con `git bisect run`.
- **Rendimiento.** Medí una línea base con una carga y un entorno representativos. Usá tiempos, un perfilador o un plan de consultas según dónde esté el problema.
- **Fallo intermitente.** Repetí el escenario las veces necesarias para estimar su frecuencia. Registrá las condiciones que importan, como concurrencia, orden, semilla o tiempo. Usá condiciones comparables antes y después de la corrección.
- **Paso manual imprescindible.** Describí qué hacer y qué resultado observar.

Protegé credenciales y datos sensibles al capturar o citar evidencias; usá datos anonimizados y mostrá solo lo necesario.

## 2. Aislá la causa

Si tenés una reproducción, reducí las entradas, consumidores o pasos hasta conservar lo que activa el fallo. Volvé a ejecutar la señal al simplificar el escenario. Conservá también el escenario original para comprobar el resultado final.

Si la causa todavía está abierta, formulá las hipótesis plausibles con una predicción verificable para cada una. Elegí primero la comprobación que mejor las distinga. Modificá una variable por vez cuando eso permita atribuir el resultado. Si dos hipótesis consecutivas fallan, frená antes de seguir probando parches: cuestioná tus supuestos o contrastá la evidencia con un subagente en contexto limpio. Si usás instrumentación temporal, hacela fácil de localizar y retirar.

Si no podés reproducir el fallo, seguí con la evidencia disponible. Distinguí qué observaste, qué explicaciones siguen siendo plausibles y qué comprobación permitiría distinguirlas. Si falta información, pedí el dato concreto. Presentá la causa como confirmada cuando la evidencia alcance para sostenerla.

## 3. Corregí y verificá cuando corresponda

Si el usuario pidió corregir el fallo, aplicá un cambio que responda a la causa respaldada por la evidencia. Si existe un punto de prueba que ejercita el patrón real del fallo, usá `pruebas-primero` para incorporar una regresión. Una prueba de un solo consumidor puede quedarse corta cuando el fallo depende de la interacción entre varios.

Si falta un punto de prueba adecuado, explicá qué garantía queda sin automatizar y qué señal sí pudiste comprobar. Volvé a ejecutar el escenario original o compará la evidencia disponible después del cambio bajo condiciones equivalentes. Retirá la instrumentación temporal que agregaste.

Cerrá con el síntoma, la evidencia sobre la causa, las comprobaciones realizadas y lo que quedó pendiente. Si el usuario pidió aplicar la corrección, revisá los cambios con `revisar-codigo` y creá un commit solo si el usuario lo pide o el flujo del repositorio lo establece.
