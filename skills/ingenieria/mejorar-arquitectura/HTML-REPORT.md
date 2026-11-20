# Formato del informe HTML

La revisión de arquitectura se presenta como un solo HTML autónomo en el directorio temporal del sistema operativo. Tailwind y Mermaid se cargan desde CDN. Mermaid representa bien grafos de dependencias; los `div` y SVG construidos manualmente permiten diagramas más expresivos (volumen, cortes transversales). Combiná los dos: usar Mermaid para todo produce un resultado genérico.

## Estructura inicial

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Revisión de arquitectura de {{repo name}}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script type="module">
      import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
      mermaid.initialize({ startOnLoad: true, theme: "neutral", securityLevel: "loose" });
    </script>
    <style>
      /* Estilos para lo que Tailwind no cubre cómodamente:
         límites discontinuos, puntas de flecha dibujadas, etc. */
      .seam { stroke-dasharray: 4 4; }
      .leak { stroke: #dc2626; }
      .deep { background: linear-gradient(135deg, #0f172a, #1e293b); }
    </style>
  </head>
  <body class="bg-stone-50 text-slate-900 font-sans">
    <main class="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <header>...</header>
      <section id="candidates" class="space-y-10">...</section>
      <section id="top-recommendation">...</section>
    </main>
  </body>
</html>
```

## Encabezado

Nombre del repositorio, fecha y una leyenda breve: caja de borde continuo = módulo; línea discontinua = límite (*seam*); flecha roja = fuga de responsabilidades; caja oscura de borde grueso = módulo profundo. No escribas una introducción: empezá por los candidatos.

## Tarjeta de cada candidato

Los diagramas transmiten la información principal. El texto es escaso, claro y utiliza naturalmente los términos del glosario de `/diseno-de-modulos`.

Cada candidato ocupa un `<article>`:

- **Título:** breve, identifica la profundización; por ejemplo, «Unificar la recepción de pedidos».
- **Fila de indicadores:** fuerza de la recomendación (`Strong` = esmeralda; `Worth exploring` = ámbar; `Speculative` = gris azulado) y categoría de dependencia (`in-process`, `local-substitutable`, `ports & adapters`, `mock`). Estos identificadores deben conservarse cuando formen parte de datos usados por el código; los rótulos visibles se pueden traducir.
- **Archivos:** listado monoespaciado con `font-mono text-sm`.
- **Diagrama Antes/Después:** elemento central; dos columnas lado a lado.
- **Problema:** una oración que explique el inconveniente.
- **Solución:** una oración que describa el cambio.
- **Beneficios:** viñetas de seis palabras como máximo; por ejemplo: «Pruebas sobre una sola interfaz», «No se filtra la lógica de precios», «Eliminar cuatro envoltorios superficiales».
- **Referencia a ADR** (si corresponde): una línea en una caja de tono ámbar.

Evitá los párrafos explicativos. Si el diagrama necesita un párrafo para entenderse, volvé a dibujarlo.

## Patrones de diagramas

Elegí el adecuado para cada candidato y combiná los estilos. La variedad es intencional.

### Grafo Mermaid (dependencias y flujo de llamadas)

Usá `flowchart` o `graph` cuando necesites mostrar «X llama a Y, que llama a Z; mirá el acoplamiento». Colocalo dentro de una tarjeta Tailwind. Utilizá `classDef` para destacar las fugas en rojo y el módulo profundo en oscuro. Los diagramas de secuencia sirven para comparar «antes: seis viajes de red; después: uno».

```html
<div class="rounded-lg border border-slate-200 bg-white p-4">
  <pre class="mermaid">
    flowchart LR
      A[OrderHandler] --> B[OrderValidator]
      B --> C[OrderRepo]
      C -.leak.-> D[PricingClient]
      classDef leak stroke:#dc2626,stroke-width:2px;
      class C,D leak
  </pre>
</div>
```

### Cajas y flechas manuales

Representá los módulos con `<div>` y bordes. Trazá flechas con elementos SVG `<line>` o `<path>` posicionados sobre un contenedor relativo. Es apropiado cuando querés mostrar en el «después» un módulo profundo con borde grueso y sus detalles internos atenuados: Mermaid no siempre logra ese efecto.

### Corte transversal (capas superficiales)

Apilá franjas horizontales (`h-12 border-l-4`) para mostrar las capas atravesadas por una llamada. Antes: seis capas delgadas que no aportan nada. Después: una franja gruesa con la responsabilidad consolidada.

### Diagrama de volumen (interfaz casi tan grande como implementación)

Dibujá dos rectángulos por módulo: superficie de la interfaz y tamaño de la implementación. Antes: ambos casi del mismo alto (superficial). Después: interfaz pequeña e implementación grande (profundo).

### Colapso del grafo de llamadas

Antes: árbol de llamadas con cajas anidadas. Después: árbol integrado en una única caja, con las llamadas internas atenuadas.

## Guía visual

- Estilo editorial y sobrio, no tablero corporativo. Espacios generosos. Títulos con tipografía serif opcional (`font-serif`, tonos piedra/gris).
- Poco color: un acento (esmeralda o índigo), rojo para fugas y ámbar para advertencias.
- Diagramas de aproximadamente 320 px de alto, para comparar antes/después sin desplazarse.
- En etiquetas de módulos usá `text-xs uppercase tracking-wider`, para que parezcan parte de un esquema y no de una interfaz de usuario.
- Solo scripts de Tailwind CDN e importación ESM de Mermaid. El informe es estático, sin lógica de aplicación ni interacciones adicionales.

## Recomendación principal

Una tarjeta más grande: nombre del candidato, una oración de justificación y un enlace a su tarjeta. Nada más.

## Tono y vocabulario

Español claro y conciso, usando los sustantivos y verbos del vocabulario de `/diseno-de-modulos`. La brevedad no justifica cambiar los términos.

**Utilizá exactamente estos términos:** módulo, interfaz, implementación, profundidad, profundo, superficial, límite, adaptador, rendimiento de la interfaz, localidad.

**No los sustituyas por:** componente, servicio, unidad (si querés decir módulo); API, firma (si querés decir interfaz); frontera (si querés decir límite); capa, envoltorio (cuando querés decir módulo).

**Frases acordes al estilo:**

- «El módulo de recepción de pedidos es superficial: su interfaz casi reproduce su implementación».
- «La lógica de precios se filtra a través del límite».
- «Profundizar: una interfaz, un lugar donde probar».
- «Dos adaptadores justifican el límite: HTTP en producción y memoria en pruebas».

Los beneficios deben nombrar ventajas en términos del glosario: *«localidad: los errores se concentran en un módulo»*, *«rendimiento: una interfaz para N puntos de uso»*, *«la interfaz se reduce; la implementación absorbe los envoltorios»*. No escribas «más fácil de mantener» o «código más limpio», porque no son conceptos precisos del glosario.

Sin reservas innecesarias, introducciones vacías ni «cabe destacar que...». Si una oración puede ser una viñeta, convertíla. Si una viñeta sobra, quitala. Antes de inventar un término nuevo, buscá el correspondiente en el glosario de `/diseno-de-modulos`.
