# Formato del informe HTML

Usá este formato cuando el análisis arquitectónico gane con una entrega visual aparte. Generá un solo archivo HTML autónomo y estático (sin lógica de aplicación ni interacciones complejas) en el directorio temporal del sistema operativo —o en `.scratch/` si el entorno aísla el directorio temporal o el usuario lo prefiere—.

## Principios visuales y estructura

- **Estilo editorial sobrio**, con espacio en blanco generoso y paleta mínima (un color de acento, rojo para fugas/acoplamientos problemáticos y ámbar para advertencias o notas de ADR). Empezá directo por los candidatos, sin introducciones extensas.
- **Encabezado:** nombre del repositorio, fecha y una leyenda breve de los símbolos usados en los diagramas.
- **Diagramas primero:** combiná Mermaid (para grafos de dependencias o flujos de llamadas) con esquemas SVG/HTML simples cuando ayuden a comparar mejor el **antes y después** lado a lado. Si un diagrama requiere un párrafo largo para entenderse, simplificá el diagrama.
- **Tarjeta por candidato:**
  - Título breve e indicador de prioridad o confianza (con distinción visual clara).
  - Archivos afectados en monoespaciado.
  - Comparativa visual **Antes / Después**.
  - **Problema** y **Propuesta** (una oración cada uno).
  - **Beneficios** y **Costo/riesgo** en viñetas cortas y verificables (evitá clichés vacíos como «código más limpio»).
  - Referencia a ADR cuando una decisión vigente esté involucrada.
- **Recomendación principal:** bloque destacado al final con el candidato prioritario, una oración de justificación y un enlace a su tarjeta.

## Vocabulario

Usá español claro y conciso. Aplicá los conceptos de `diseno-de-modulos` (profundidad, interfaz, punto de separación, adaptador, aprovechamiento, localidad) respetando los nombres reales del repositorio y su glosario (por ejemplo, `Service`, `Repository`, `Component`).
