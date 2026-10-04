# Contexto de build: /workspace/ciber-vigilancia
#   docker build -f rayversec/web/Dockerfile -t rayversec-web .
# Así el mismo build lee cursos/*.md. No uses esta carpeta web/ como contexto.
#
# La imagen sigue sirviendo el sitio estático con nginx. Además arranca un
# proceso node mínimo que solo atiende POST /api/peticiones y añade una línea
# JSON en $DATA_DIR/peticiones.jsonl. No envía correo, Telegram ni webhooks.

FROM node:20-alpine AS build
WORKDIR /src/web
COPY rayversec/web/package.json rayversec/web/package-lock.json ./
RUN npm ci
COPY rayversec/web/ ./
COPY cursos /src/cursos
ENV CURSOS_DIR=/src/cursos
RUN npm run build

FROM nginx:1.27-alpine
RUN apk add --no-cache nodejs
COPY rayversec/web/nginx.conf /etc/nginx/conf.d/default.conf
COPY rayversec/web/server.mjs /app/server.mjs
COPY rayversec/web/start.sh /start.sh
RUN chmod +x /start.sh && mkdir -p /data
COPY --from=build /src/web/dist /usr/share/nginx/html
ENV DATA_DIR=/data
ENV API_HOST=127.0.0.1
ENV API_PORT=8787
EXPOSE 80
ENTRYPOINT ["/start.sh"]
