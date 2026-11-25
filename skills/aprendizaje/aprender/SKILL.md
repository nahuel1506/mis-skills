---
name: aprender
description: Enseña una habilidad o concepto mediante sesiones progresivas con andamiaje, ayudas visuales interactivas y práctica basada en evidencia.
disable-model-invocation: true
argument-hint: "¿Qué te gustaría aprender?"
---

El usuario quiere aprender un tema o habilidad de forma real y duradera, ya sea en una sesión puntual o a lo largo de varias sesiones.

## 1. Iniciar o retomar sesión

- **Guardia de directorio:** si el usuario quiere guardar progreso en disco pero el directorio actual parece un proyecto de código, preguntá si prefiere trabajar solo en el chat o en una carpeta dedicada antes de crear archivos.
- **Si ya existe `PROGRESO.md`:** leelo (y `GLOSSARY.md` si existe) para ubicar la **zona de desarrollo próximo**. Si hay conceptos en la cola de repaso y el usuario no pidió ir directo a un tema, abrí con 1–2 preguntas rápidas de **recuperación espaciada**.
- **Si es un tema nuevo:** antes de enseñar en profundidad, acordá brevemente el objetivo concreto (qué quiere lograr hacer, no solo «entender X»), su nivel previo y si quiere llevar registro entre sesiones en `PROGRESO.md`.

## 2. Enseñar y practicar (método basado en evidencia)

Trabajá **un concepto acotado por vez** conectado con el objetivo, cuidando la carga cognitiva (reducí el ruido extrínseco y enfocá el esfuerzo en construir el modelo mental):

- **Codificación dual y ayudas visuales:** priorizá práctica directa (chat o código real) y diagramas livianos por defecto para cuidar tokens. Reservá widgets HTML o simulaciones interactivas (inline si el entorno lo soporta, o en disco bajo demanda) para cuando manipular visualmente un flujo, estado o comparación aporte un beneficio claro o el usuario lo pida, manteniendo el diseño sobrio y sin decoración que distraiga.
- **Predicción previa cuando haya intuición en juego:** antes de revelar cómo funciona algo contraintuitivo o clave, pedí una predicción breve (*error productivo*) para activar conocimiento previo.
- **Ejemplos resueltos (*worked examples*) con retirada gradual (*fading*):** en conceptos nuevos y complejos, empezá por un ejemplo resuelto paso a paso, seguí con uno parcial y recién después pasá a práctica autónoma. A medida que el usuario gane dominio, retirá el andamiaje (*efecto de reversión por pericia*).
- **Andamiaje anti-muleta:** cuando el usuario practique o se trabe, **no regales la solución completa de entrada**; ofrecé una pista localizada y devolvele el siguiente paso para que haga el esfuerzo cognitivo.
- **Retención sobre fluidez:** alterná **recuperación activa** (aplicar o recordar sin mirar), **autoexplicación** (explicar con sus propias palabras *por qué* funciona un paso) y **práctica intercalada** (mezclar casos distintos pero parecidos para entrenar discriminación). En cuestionarios, usá opciones de longitud y detalle similares, sin pistas de formato u orden.
- **Fuentes confiables:** cuando haya acceso a red y el tema requiera precisión actualizada (documentación vigente, ciencia, referencias primarias), consultá y citá **solo enlaces verificados** (nunca inventes URLs). Si trabajás sin red, avisalo cuando importe.

## 3. Consolidar (sin burocracia)

- **Solo en el chat** para sesiones puntuales: cerrá con un resumen breve de lo logrado y el siguiente paso sugerido.
- **Estudio multi-sesión (`PROGRESO.md`):** mantené un único archivo compacto con: *objetivo y preferencias*, *dominado con evidencia real* (solo lo que el usuario aplicó o explicó bien, no lo meramente leído), *errores conceptuales corregidos* y *qué repasar al inicio de la próxima sesión*. Confirmá antes de cambiar el objetivo.
- **Artefactos opcionales (solo bajo demanda):** creá `GLOSSARY.md` (agregando términos solo cuando el usuario ya los domine), recursos verificados o una guía/simulador HTML autónomo en disco únicamente si el usuario lo pide o si el entorno no tiene ayudas visuales en el chat.
- Si una duda requiere criterio práctico fuera del estudio, respondela y, salvo que el usuario no quiera comunidades, sugerí una comunidad o espacio práctico confiable.
