# Cómo entra un curso nuevo en la web

La web no tiene cursos escritos a mano. Lee el markdown del repositorio.

## Dónde está el texto

- Cursos: `/workspace/ciber-vigilancia/cursos/*.md`
- Orden, títulos, rama, nivel y estado: `/workspace/ciber-vigilancia/cursos/CATALOGO.md`
- El plan de las dos vías (`00-plan-dos-vias.md`) no es un curso numerado y no genera página de curso.
- Las cuatro ideas del final del catálogo (WiFi del trabajo, copias de seguridad, estafas de inversión, privacidad en redes) se muestran como **no publicado**. No tienen archivo de curso.

## Paso mínimo

1. Añadir el markdown nuevo en `cursos/` y su entrada al final de `CATALOGO.md` (el propio plan dice que el 01 no se reescribe).
2. Reconstruir el contenedor desde la carpeta padre, para que el build vea `cursos/` y `rayversec/web/` a la vez:

```bash
docker build -f rayversec/web/Dockerfile -t rayversec-web /workspace/ciber-vigilancia
```

El Dockerfile copia `cursos/` y, al construir, `npm run build` ejecuta `scripts/sync-cursos.mjs`. Ese script escribe la colección en `rayversec/web/src/content/cursos/` y la lista de ideas en `rayversec/web/src/data/ideas.json`. Astro genera una página por cada markdown de esa colección.

En esta máquina, sin Docker, el mismo refresco es:

```bash
cd /workspace/ciber-vigilancia/rayversec/web
npm run build
```

`npm run sync` hace solo la copia a la colección, sin generar el HTML.

## Qué no está hecho para YouTube

- No hay id de canal.
- No hay clave ni cliente de la API de YouTube.
- No hay webhook que avise cuando se genere un curso.
- No se marca ningún curso como publicado en YouTube. El catálogo y los archivos hablan de vídeos previstos y de duraciones estimadas.
- Subir, programar o enlazar un vídeo sigue siendo un paso aparte, fuera de esta web.
