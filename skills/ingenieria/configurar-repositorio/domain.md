# Documentación del dominio

Cómo deben consultar las skills de ingeniería la documentación del dominio del repositorio al explorar su código.

## Leer antes de explorar

- **`GLOSSARY.md`** en la raíz del repositorio; o
- **`GLOSSARY-MAP.md`** en la raíz, si existe: apunta a un `GLOSSARY.md` por contexto. Leé los glosarios relevantes para el tema.
- **`docs/adr/`**: leé los ADR relacionados con el área donde vas a trabajar. Si el repositorio tiene varios contextos, consultá también `src/<context>/docs/adr/` para decisiones específicas.

Si alguno de esos archivos no existe, **continuá sin señalarlo**. No propongas crearlo de antemano. La skill `modelar-dominio`, que consulta `aclarar-idea` cuando corresponde, los crea cuando se acuerdan términos o decisiones que vale la pena registrar.

## Estructura de archivos

Repositorio con un solo contexto (la mayoría):

```
/
├── GLOSSARY.md
├── docs/adr/
│   ├── 0001-event-sourced-orders.md
│   └── 0002-postgres-for-write-model.md
└── src/
```

Repositorio con varios contextos (con `GLOSSARY-MAP.md` en la raíz):

```
/
├── GLOSSARY-MAP.md
├── docs/adr/                          ← decisiones del sistema completo
└── src/
    ├── ordering/
    │   ├── GLOSSARY.md
    │   └── docs/adr/                  ← decisiones del contexto
    └── billing/
        ├── GLOSSARY.md
        └── docs/adr/
```

## Respetar el vocabulario del glosario

Cuando tu respuesta nombre un concepto de dominio (en una incidencia, refactorización, hipótesis o prueba), utilizá el término definido en `GLOSSARY.md`. No lo sustituyas por sinónimos que el propio glosario pide evitar.

Si el concepto necesario todavía no existe en el glosario, es una señal: quizá estás inventando terminología ajena al proyecto (revisalo) o hay un vacío real (anotalo para `modelar-dominio`).

## Señalar conflictos con ADR

Si tu propuesta contradice un ADR existente, indicalo explícitamente en lugar de sobrescribirlo silenciosamente:

> *«Contradice ADR-0007 (pedidos basados en eventos), pero conviene reconsiderarlo porque…»*
