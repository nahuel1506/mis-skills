# Formato de los ADR

Los registros de decisiones de arquitectura (ADR) se guardan en `docs/adr/` con numeración consecutiva: `0001-slug.md`, `0002-slug.md`, etc.

Creá `docs/adr/` solo cuando haga falta registrar el primer ADR.

## Plantilla

```md
# {Título breve de la decisión}

{Entre una y tres oraciones: cuál es el contexto, qué decidimos y por qué.}
```

Eso es todo. Un ADR puede consistir en un solo párrafo. Lo valioso es registrar **qué** se decidió y **por qué**, no completar secciones innecesarias.

## Secciones opcionales

Incluilas solamente cuando aporten valor real. La mayoría de los ADR no las necesitan.

- **Estado** en el frontmatter (`proposed | accepted | deprecated | superseded by ADR-NNNN`): útil cuando se revisan decisiones. Estos valores técnicos deben conservarse tal cual.
- **Opciones consideradas**: solo si vale la pena recordar las alternativas descartadas.
- **Consecuencias**: cuando existan efectos posteriores que no sean evidentes.

## Numeración

Buscá en `docs/adr/` el número más alto y sumale uno.

## Cuándo proponer un ADR

Deben cumplirse **las tres condiciones**:

1. **Difícil de revertir:** cambiar de decisión en el futuro tendría un costo importante.
2. **Sorprendente sin contexto:** alguien que lea el código se preguntaría «¿por qué lo hicieron así?».
3. **Resultado de una decisión con alternativas reales:** había varias opciones y se eligió una por motivos concretos.

Si es fácil de revertir, no hace falta registrarlo: simplemente se revertirá. Si es evidente, nadie necesitará preguntar. Si no había alternativa real, no hay más para registrar que «hicimos lo obvio».

### Casos que justifican un ADR

- **Estructura arquitectónica.** «Usamos un monorepositorio». «El modelo de escritura guarda eventos y el modelo de lectura se proyecta en Postgres».
- **Integración entre contextos.** «Pedidos y Facturación se comunican por eventos de dominio, no por HTTP síncrono».
- **Tecnologías difíciles de sustituir.** Base de datos, bus de mensajes, proveedor de autenticación o destino de despliegue. No toda biblioteca: solo lo que podría llevar meses reemplazar.
- **Límites y alcance.** «Los datos de clientes pertenecen al contexto Clientes; los demás solo los referencian por ID». Las prohibiciones explícitas son tan valiosas como lo permitido.
- **Desviaciones deliberadas de lo esperable.** «Usamos SQL manual en vez de un ORM por X». Sirven para evitar que otro desarrollador «corrija» algo que fue intencional.
- **Restricciones invisibles en el código.** «No podemos usar AWS por requisitos normativos». «Las respuestas deben tardar menos de 200 ms debido al contrato con el proveedor».
- **Alternativas descartadas por motivos poco evidentes.** Si se consideró GraphQL y se eligió REST por una razón sutil, registrala; de lo contrario alguien volverá a proponer GraphQL más adelante.
