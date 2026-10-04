#!/bin/sh
set -eu
node /app/server.mjs &
exec /docker-entrypoint.sh nginx -g 'daemon off;'
