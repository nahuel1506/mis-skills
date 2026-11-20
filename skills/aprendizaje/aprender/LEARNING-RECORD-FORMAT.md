# Formato de los registros de aprendizaje

Los registros se guardan en `./learning-records/` con numeración consecutiva: `0001-slug.md`, `0002-slug.md`, etc. Creá el directorio solamente cuando se escriba el primer registro.

Son el equivalente pedagógico de los ADR: conservan aprendizajes no evidentes, descubrimientos importantes y conocimientos previos que orientarán las próximas sesiones. Sirven para estimar la zona de desarrollo próximo.

## Plantilla

```md
# {Título breve de lo aprendido o establecido}

{De una a tres frases: qué se aprendió (o qué conocimiento previo se estableció) y por qué importa para las próximas sesiones.}
```

Este es el formato completo. Un registro puede tener un solo párrafo. Lo valioso es anotar _que_ ya se sabe algo y _por qué_ eso modifica lo que corresponde enseñar después; no llenar secciones.

## Secciones opcionales

Incluilas únicamente cuando aporten valor. La mayoría de los registros no las necesitarán.

- **Estado**, en frontmatter (`active | superseded by LR-NNNN`): útil cuando un conocimiento previo resulta incorrecto y es reemplazado. Conservá estos valores literales si los consume alguna herramienta.
- **Evidencia**: cómo demostró comprensión el usuario (una pregunta respondida, un ejercicio resuelto o una experiencia anterior). Útil si puede ser necesario revisar la afirmación.
- **Implicaciones**: qué permite aprender o qué descarta para próximas sesiones. Registralo cuando no sea evidente.

## Numeración

Examiná `./learning-records/`, encontrá el número más alto y sumale uno.

## Cuándo crear un registro

Creá un registro cuando ocurra alguna de estas situaciones:

1. **El usuario demostró una comprensión auténtica de algo no trivial**: no solamente vio el tema, sino que mostró que puede utilizar correctamente el concepto. Establece una nueva base para lo que se le puede enseñar.
2. **El usuario informó conocimientos previos**: «Ya conozco X». Registralo para evitar repetirlo en otras sesiones. Anotá también el _nivel_ de conocimiento declarado.
3. **Se corrigió una idea equivocada**: antes el usuario creía algo falso y ahora entiende por qué. Es una información valiosa, porque permite anticipar dificultades en temas relacionados.
4. **La misión cambió a partir del aprendizaje**: el usuario descubrió otro objetivo. Agregá un enlace a [[MISSION.md]] y actualizá ese archivo.

### Qué NO justifica un registro

- Material que solamente se explicó. Haber cubierto un tema no significa haberlo aprendido. Esperá evidencia.
- Algo que ya figura de forma concisa en [[GLOSSARY.md]] como definición. Evitá duplicaciones.
- Un diario de actividades de cada sesión. Los registros no son una bitácora: guardan descubrimientos importantes para decisiones futuras.

## Reemplazo de registros

Cuando un registro posterior contradiga otro anterior (porque la comprensión mejoró o se corrigió), marcá el anterior como `Status: superseded by LR-NNNN` en vez de borrarlo. El historial de cómo evolucionó la comprensión también resulta útil.
