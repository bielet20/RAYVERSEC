# Notificaciones de las peticiones

Los mensajes de `/peticiones` y de `/chat` se guardan en el servidor. No se avisa a Gabriel por ningún canal.

## Qué está conectado

- `POST /api/peticiones` añade una línea JSON al archivo `$DATA_DIR/peticiones.jsonl`.
- En el contenedor, `DATA_DIR` es `/data`. Si ese directorio no está montado como volumen, el archivo vive dentro del contenedor y se pierde al recrearlo.
- Cada línea tiene id, fecha en UTC (`recibido`), origen (`formulario` o `chat`), nombre, `respuesta_por` (`email` o `telefono`), contacto y texto.
- La respuesta del servidor es siempre la misma frase de acuse. No hay consejo de seguridad ni pasos de ningún tipo.

## Qué no está conectado

Avisar a Gabriel no está hecho. No hay credenciales y no hay que inventarlas.

- No hay correo.
- No hay Telegram.
- No hay webhook.
- No hay ningún otro aviso automático.

Hasta que eso se conecte, hay que leer el archivo del servidor a mano.
