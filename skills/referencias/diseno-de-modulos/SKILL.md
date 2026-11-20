---
name: diseno-de-modulos
description: Vocabulario compartido para diseñar módulos profundos. Utilizar al diseñar o mejorar una interfaz, buscar oportunidades de concentrar comportamiento, decidir dónde situar un punto de separación, facilitar pruebas o navegación por IA, o cuando otra skill necesite la terminología de módulos profundos.
---

# Diseño del código

Diseñá **módulos profundos**: mucho comportamiento detrás de una interfaz pequeña, ubicada en un punto de separación claro y comprobable mediante pruebas. Utilizá estos términos y principios siempre que diseñes o reestructures código. El objetivo es aportar aprovechamiento a quienes usan el módulo, localidad a quienes lo mantienen y facilidad de prueba para todos.

## Glosario

Utilizá estos términos de manera consistente: no los sustituyas por «componente», «servicio», «API» o «frontera» cuando tengan otro significado. La consistencia terminológica es fundamental.

**Módulo**: cualquier unidad con una interfaz y una implementación. No presupone un tamaño: puede ser función, clase, paquete o una sección que atraviesa varias capas. _Evitar_: unidad, componente, servicio.

**Interfaz**: todo lo que alguien necesita saber para utilizar correctamente el módulo: firma de tipos, invariantes, restricciones de orden, tipos de errores, configuración obligatoria y características de rendimiento. _Evitar_: API, firma (son demasiado limitadas y solo describen parte de la superficie).

**Implementación**: el contenido del módulo, su código interno. Se diferencia de **adaptador**: un adaptador pequeño puede tener una gran implementación (un repositorio Postgres) y uno grande una implementación pequeña (un sustituto en memoria). Decí «adaptador» cuando se discuta el punto de separación; «implementación» en los demás casos.

**Profundidad**: aprovechamiento que proporciona la interfaz. Cantidad de comportamiento que alguien (o una prueba) puede utilizar por unidad de interfaz que debe aprender. Un módulo es **profundo** si oculta mucho comportamiento tras una interfaz pequeña, y **superficial** si la interfaz tiene casi tanta complejidad como su implementación.

**Punto de separación** (*seam*, Michael Feathers): lugar donde se puede alterar el comportamiento sin editar directamente ese punto; es la *ubicación* de la interfaz de un módulo. Elegir dónde ubicarlo es una decisión distinta de decidir qué comportamiento ocultará. _Evitar_: frontera (puede confundirse con un contexto delimitado de DDD).

**Adaptador**: elemento concreto que satisface una interfaz en un punto de separación. Describe un *rol* (el lugar que ocupa), no su contenido interno.

**Aprovechamiento**: beneficio de la profundidad para quienes utilizan el módulo. Más capacidad por cada unidad de interfaz que deben conocer. Una implementación se aprovecha en N lugares de llamada y M pruebas.

**Localidad**: beneficio de la profundidad para quienes mantienen el módulo. Cambios, errores, conocimiento y verificaciones se concentran en un lugar, en vez de distribuirse entre consumidores. Corregir una vez equivale a corregir en todas partes.

## Módulos profundos y superficiales

**Módulo profundo** = interfaz pequeña + implementación extensa:

```
┌─────────────────────┐
│   Interfaz pequeña  │  ← Pocos métodos, parámetros sencillos
├─────────────────────┤
│                     │
│   Implementación    │  ← Lógica compleja oculta
│      profunda       │
└─────────────────────┘
```

**Módulo superficial** = interfaz extensa + poca implementación (evitar):

```
┌─────────────────────────────────┐
│         Interfaz grande         │  ← Muchos métodos y parámetros complejos
├─────────────────────────────────┤
│      Implementación mínima      │  ← Solo delega llamadas
└─────────────────────────────────┘
```

Al diseñar una interfaz, preguntate:

- ¿Puedo reducir el número de métodos?
- ¿Puedo simplificar los parámetros?
- ¿Puedo ocultar más complejidad dentro del módulo?

## Principios

- **La profundidad es una propiedad de la interfaz, no de la implementación.** Un módulo profundo puede componerse internamente de piezas pequeñas, sustituibles y fáciles de simular; simplemente no forman parte de su interfaz pública. Puede tener **puntos de separación internos** (privados, usados por sus propias pruebas) y un **punto de separación externo** en su interfaz.
- **Prueba de eliminación.** Imaginá que borrás el módulo. Si desaparece la complejidad, solo delegaba llamadas. Si la complejidad reaparece en N consumidores, el módulo aportaba valor.
- **La interfaz es la superficie de prueba.** Consumidores y pruebas cruzan el mismo punto de separación. Si necesitás probar *más allá* de la interfaz, tal vez el módulo no tenga la forma adecuada.
- **Justificá el punto de separación por el problema que resuelve.** Dos adaptadores pueden demostrar que una sustitución es útil. Con uno solo, el límite puede valer la pena si aísla un contrato externo, oculta complejidad que hoy conocen los consumidores o permite verificar una garantía importante. Si la capa solo delega y su beneficio depende de una variante hipotética, mantené directa la relación.

## Diseño para facilitar las pruebas

Las buenas interfaces hacen que probar sea natural:

1. **Recibí dependencias; no las crees internamente.**

   ```typescript
   // Fácil de probar
   function processOrder(order, paymentGateway) {}

   // Difícil de probar
   function processOrder(order) {
     const gateway = new StripeGateway();
   }
   ```

2. **Devolvé resultados en vez de producir efectos secundarios.**

   ```typescript
   // Fácil de probar
   function calculateDiscount(cart): Discount {}

   // Difícil de probar
   function applyDiscount(cart): void {
     cart.total -= discount;
   }
   ```

3. **Superficie pequeña.** Menos métodos requieren menos pruebas; menos parámetros simplifican la preparación de cada prueba.

## Relaciones

- Un **módulo** tiene exactamente una **interfaz** (la superficie que ofrece a consumidores y pruebas).
- La **profundidad** es una propiedad del **módulo**, evaluada respecto a su **interfaz**.
- Un **punto de separación** es donde reside la **interfaz** del **módulo**.
- Un **adaptador** ocupa un **punto de separación** y satisface la **interfaz**.
- La **profundidad** aporta **aprovechamiento** para consumidores y **localidad** para mantenedores.

## Interpretaciones descartadas

- **Profundidad como proporción de líneas de implementación respecto a líneas de interfaz** (Ousterhout): incentiva inflar la implementación. Preferimos definir la profundidad por el aprovechamiento.
- **«Interfaz» como la palabra clave `interface` de TypeScript o los métodos públicos de una clase**: demasiado restrictivo. Aquí abarca todo lo que debe conocer un consumidor.
- **«Frontera»**: puede confundirse con un contexto delimitado de DDD. Decí **punto de separación** o **interfaz**.

## Profundización

- **Concentrar un grupo de módulos considerando sus dependencias**: consultá [DEEPENING.md](DEEPENING.md) sobre categorías de dependencias, disciplina de puntos de separación y pruebas de reemplazar en lugar de agregar capas.
- **Explorar interfaces alternativas.** Consultá [DESIGN-IT-TWICE.md](DESIGN-IT-TWICE.md) para comparar opciones por profundidad, localidad y ubicación de los puntos de separación.
