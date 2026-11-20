#!/usr/bin/env bash
# Ciclo de reproducción con intervención humana.
# Copiá este archivo, modificá los pasos de abajo y ejecutalo.
# El agente ejecuta el script; el usuario sigue las indicaciones de su terminal.
#
# Uso:
#   bash hitl-loop.template.sh
#
# Dos funciones auxiliares:
#   step "<instruction>"          → mostrar instrucción y esperar Enter
#   capture VAR "<question>"      → mostrar pregunta y guardar respuesta en VAR
#
# Al final se imprimen los valores como KEY=VALUE para que el agente los lea.
#
# `capture` muestra los valores en la terminal para que el agente pueda leerlos,
# por eso usalo para observaciones y dejá el inicio de sesión como un `step`.

set -euo pipefail

step() {
  printf '\n>>> %s\n' "$1"
  read -r -p "    [Enter cuando termines] " _
}

capture() {
  local var="$1" question="$2" answer
  printf '\n>>> %s\n' "$question"
  read -r -p "    > " answer
  printf -v "$var" '%s' "$answer"
}

# --- editar debajo ---------------------------------------------------------

step "Abrí la aplicación en http://localhost:3000 e iniciá sesión."

capture ERRORED "Hacé clic en 'Export'. ¿Apareció un error? (y/n)"

capture ERROR_MSG "Pegá el mensaje de error (o 'ninguno'):"

# --- editar encima ---------------------------------------------------------

printf '\n--- Datos registrados ---\n'
printf 'ERRORED=%s\n' "$ERRORED"
printf 'ERROR_MSG=%s\n' "$ERROR_MSG"
