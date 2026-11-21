---
name: modelar-dominio
description: Construye y precisa el modelo de dominio (glosario y ADR). Usar al acordar terminología, registrar decisiones de arquitectura o cuando otra skill lo indique.
---

# Modelado del dominio

Usá esta skill para modificar el modelo de dominio. Cualquier skill puede consultar el vocabulario del proyecto.

## Ubicación de los documentos

Seguí las rutas y formatos que declare el repositorio en sus instrucciones de proyecto o en `docs/agents/domain.md`, si existe. Si el repo usa varios contextos, consultá `GLOSSARY-MAP.md` para localizar el glosario y los ADR del contexto relevante. Como valores por defecto, usá `GLOSSARY.md` y `docs/adr/` en la raíz (ver detalles en [GLOSSARY-FORMAT.md](GLOSSARY-FORMAT.md) y [ADR-FORMAT.md](ADR-FORMAT.md)).

## Precisá los términos y las reglas

Contrastá el vocabulario con el glosario del contexto. Aclará enseguida una ambigüedad que cambie una respuesta, una regla o el alcance. Si solo afecta el nombre, tratala cuando se discuta ese tema. Tomá un caso concreto para distinguir conceptos ambiguos y proponé un término preciso para cada uno. Si la misma palabra tiene sentidos distintos en dos contextos, indicá a cuál pertenece cada significado. Probá las relaciones del dominio con casos límite que puedan cambiar cómo se definen.

Cuando una descripción contradiga el código, explicá qué pasa hoy y preguntá qué debería pasar. Por ejemplo, si el código cancela un pedido entero, preguntá si al cancelar uno de tres productos los otros dos deben seguir activos.

## Registrá lo acordado

Actualizá el glosario cuando el término y su significado estén acordados. Creá los documentos a medida que hagan falta. Si el usuario pide guardar al cierre, reuní los cambios acordados y registralos juntos al terminar. Para el glosario, usá el formato del repo o [GLOSSARY-FORMAT.md](GLOSSARY-FORMAT.md). Registrá solamente vocabulario del dominio en el glosario.

Para proponer un ADR, comprobá que la decisión esté tomada y cumpla los tres criterios siguientes.

1. Cambiarla después tiene un costo relevante.
2. Su motivo sería difícil de entender sin contexto.
3. Hubo una elección real entre alternativas.

Consultá los ADR vigentes del área. Si el nuevo acuerdo reemplaza una decisión anterior, indicá la relación. Usá el formato del repo o [ADR-FORMAT.md](ADR-FORMAT.md).
