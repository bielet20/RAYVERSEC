# Fuentes de los logos

Cada archivo de esta carpeta se descargó con HTTP 200 y son bytes de imagen (SVG). La licencia es la que declara la página o el archivo LICENSE del repositorio. No se copia aquí una licencia que la fuente no diga.

No son logos de marcas de antivirus ni de fabricantes.

## Archivos guardados

### escudo.svg

- Motivo: escudo con una marca de comprobación.
- Ruta: `/workspace/ciber-vigilancia/rayversec/logos/escudo.svg`
- Descargado de: https://upload.wikimedia.org/wikipedia/commons/1/14/Paomedia_small-n-flat_shield-ok.svg
- Página del archivo: https://commons.wikimedia.org/wiki/File:Paomedia_small-n-flat_shield-ok.svg
- Licencia que declara Wikimedia Commons en los metadatos de ese archivo: CC0. Nombre corto: CC0. Términos de uso: Creative Commons Zero, Public Domain Dedication. Autor indicado: paomedia. Crédito indicado: https://github.com/paomedia/small-n-flat
- El SVG guardado declara el espacio de nombres de Creative Commons, pero no lleva dentro el texto de la licencia.

### cerradura.svg

- Motivo: cerradura.
- Ruta: `/workspace/ciber-vigilancia/rayversec/logos/cerradura.svg`
- Descargado de: https://raw.githubusercontent.com/tabler/tabler-icons/main/icons/outline/lock.svg
- Página del archivo: https://github.com/tabler/tabler-icons/blob/main/icons/outline/lock.svg
- Licencia: MIT. Está declarada en el archivo LICENSE del repositorio, https://github.com/tabler/tabler-icons/blob/main/LICENSE (texto MIT, copyright 2020-2026 Paweł Kuna). El SVG no lleva una línea de licencia propia. El `package.json` consultado no trae un campo `license`.

### red.svg

- Motivo: red (nodos conectados; las etiquetas del SVG dicen connection, internet, network, computing).
- Ruta: `/workspace/ciber-vigilancia/rayversec/logos/red.svg`
- Descargado de: https://raw.githubusercontent.com/tabler/tabler-icons/main/icons/outline/network.svg
- Página del archivo: https://github.com/tabler/tabler-icons/blob/main/icons/outline/network.svg
- Licencia: MIT, la misma del repositorio Tabler citada arriba. No está repetida dentro del SVG.

### ojo.svg

- Motivo: ojo.
- Ruta: `/workspace/ciber-vigilancia/rayversec/logos/ojo.svg`
- Descargado de: https://raw.githubusercontent.com/primer/octicons/main/icons/eye-16.svg
- Página del archivo: https://github.com/primer/octicons/blob/main/icons/eye-16.svg
- Licencia: MIT. Está declarada en https://github.com/primer/octicons/blob/main/LICENSE (texto MIT, copyright 2026 GitHub Inc.). El SVG no lleva una línea de licencia propia.

### binario.svg

- Motivo: dígitos binarios. Las etiquetas del SVG dicen binary, code, digital, bit, byte.
- Ruta: `/workspace/ciber-vigilancia/rayversec/logos/binario.svg`
- Descargado de: https://raw.githubusercontent.com/tabler/tabler-icons/main/icons/outline/binary.svg
- Página del archivo: https://github.com/tabler/tabler-icons/blob/main/icons/outline/binary.svg
- Licencia: MIT, la misma del repositorio Tabler citada arriba. No está repetida dentro del SVG.

## Descargas que no se guardaron

`upload.wikimedia.org` respondió HTTP 429 (Retry-After: 600) al pedir estos archivos, así que no están en la carpeta:

- https://upload.wikimedia.org/wikipedia/commons/0/03/Lock.svg (página: https://commons.wikimedia.org/wiki/File:Lock.svg). Los metadatos de Commons, consultados antes del bloqueo, decían dominio público (Tango Desktop Project). El archivo no se guardó.
- El intento siguiente por https://commons.wikimedia.org/wiki/Special:FilePath/Lock.svg no dejó un archivo guardado.

No se llegó a descargar, por ese bloqueo, `File:Network.svg`, `File:Eye_icon_01.svg` ni `File:Tabler-icons_binary.svg` de Wikimedia. Esos motivos se cubrieron con los archivos de GitHub de arriba.
