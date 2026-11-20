# Formato de `GLOSSARY.md`

## Estructura

```md
# {Nombre del contexto}

{Una o dos oraciones que expliquen qué es este contexto y para qué existe.}

## Lenguaje

**Pedido**:
{Definición del término en una o dos oraciones}
_Evitar_: Compra, transacción

**Factura**:
Solicitud de pago enviada a un cliente después de la entrega.
_Evitar_: Cuenta, solicitud de cobro

**Cliente**:
Persona u organización que realiza pedidos.
_Evitar_: Comprador, cuenta
```

## Reglas

- **Tomá decisiones terminológicas.** Si existen varias palabras para un mismo concepto, elegí la mejor y agregá las otras bajo `_Evitar_`.
- **Definiciones breves.** Una o dos oraciones como máximo. Definí lo que el concepto **es**, no lo que hace.
- **Incluí solo términos propios de este dominio.** Los conceptos generales de programación (tiempos de espera, tipos de error, utilidades) no pertenecen al glosario aunque se usen mucho. Antes de agregar uno, preguntá: ¿es exclusivo del contexto o es un concepto general de programación? Incluí solamente los primeros.
- **Agrupá bajo subtítulos** cuando aparezcan grupos naturales. Si todo pertenece a un mismo ámbito, una lista plana está bien.

## Repositorios de uno o varios contextos

**Un solo contexto (la mayoría):** un `GLOSSARY.md` en la raíz del repositorio.

**Varios contextos:** un `GLOSSARY-MAP.md` en la raíz enumera los contextos, su ubicación y sus relaciones:

```md
# Mapa de glosarios

## Contextos

- [Pedidos](./src/ordering/GLOSSARY.md): recibe y sigue los pedidos de clientes
- [Facturación](./src/billing/GLOSSARY.md): emite facturas y procesa pagos
- [Preparación](./src/fulfillment/GLOSSARY.md): administra la preparación y el envío del depósito

## Relaciones

- **Pedidos → Preparación**: Pedidos emite eventos `OrderPlaced`; Preparación los consume para iniciar el trabajo
- **Preparación → Facturación**: Preparación emite eventos `ShipmentDispatched`; Facturación los consume para generar facturas
- **Pedidos ↔ Facturación**: tipos compartidos `CustomerId` y `Money`
```

La skill determina cuál estructura corresponde:

- Si existe `GLOSSARY-MAP.md`, leelo para ubicar los contextos.
- Si solo existe `GLOSSARY.md` en la raíz, hay un único contexto.
- Si no existe ninguno, creá `GLOSSARY.md` en la raíz solamente cuando se defina el primer término.

Cuando haya varios contextos, inferí a cuál pertenece el tema actual. Si no queda claro, preguntá.
