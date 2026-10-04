import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

const PORT = Number(process.env.API_PORT || 8787);
const HOST = process.env.API_HOST || '127.0.0.1';
const DATA_DIR = process.env.DATA_DIR || '/data';
const FILE = path.join(DATA_DIR, 'peticiones.jsonl');
const MAX = 24 * 1024;

const RESPUESTA =
  'Tu mensaje se ha recibido y Gabriel lo revisará. No envíes contraseñas ni códigos.';

function clip(value, max) {
  if (typeof value !== 'string') return '';
  return value.replace(/\u0000/g, '').trim().slice(0, max);
}

function sendJson(res, status, body) {
  const raw = JSON.stringify(body);
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'content-length': Buffer.byteLength(raw),
  });
  res.end(raw);
}

function sendHtml(res, status, paragraph, back) {
  const body = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>RayverSec</title>
</head>
<body>
  <p>${paragraph}</p>
  <p><a href="${back}">Volver</a></p>
</body>
</html>
`;
  res.writeHead(status, {
    'content-type': 'text/html; charset=utf-8',
    'cache-control': 'no-store',
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX) {
        const err = new Error('too large');
        err.code = 'TOO_LARGE';
        reject(err);
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

let queue = Promise.resolve();
function appendLine(line) {
  const run = queue.then(async () => {
    await fs.promises.mkdir(DATA_DIR, { recursive: true });
    await fs.promises.appendFile(FILE, line, { encoding: 'utf8', mode: 0o600 });
  });
  queue = run.then(() => {}, () => {});
  return run;
}

function parseFields(ctype, raw) {
  if (ctype.includes('application/json')) {
    const data = JSON.parse(raw || '{}');
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      throw new Error('json');
    }
    return data;
  }
  if (ctype.includes('application/x-www-form-urlencoded')) {
    return Object.fromEntries(new URLSearchParams(raw));
  }
  const err = new Error('type');
  err.code = 'TYPE';
  throw err;
}

const server = http.createServer(async (req, res) => {
  const url = (req.url || '').split('?')[0];
  if (req.method !== 'POST' || url !== '/api/peticiones') {
    sendJson(res, 404, { ok: false, error: 'No encontrado.' });
    return;
  }
  const ctype = String(req.headers['content-type'] || '');
  const wantsHtml = ctype.includes('application/x-www-form-urlencoded');
  try {
    const raw = await readBody(req);
    const data = parseFields(ctype, raw);
    const origen = data.origen === 'chat' ? 'chat' : data.origen === 'formulario' ? 'formulario' : '';
    const nombre = clip(data.nombre, 200);
    const respuestaPor = data.respuesta_por === 'email' || data.respuesta_por === 'telefono' ? data.respuesta_por : '';
    const contacto = clip(data.contacto, 200);
    const texto = clip(data.texto, 8000);
    if (!origen || !nombre || !respuestaPor || !contacto || !texto) {
      const error = 'Faltan el nombre, cómo responderte o qué te ocurre.';
      if (wantsHtml) {
        sendHtml(res, 400, error, origen === 'chat' ? '/chat' : '/peticiones');
      } else {
        sendJson(res, 400, { ok: false, error });
      }
      return;
    }
    const row = {
      id: randomUUID(),
      recibido: new Date().toISOString(),
      origen,
      nombre,
      respuesta_por: respuestaPor,
      contacto,
      texto,
    };
    await appendLine(JSON.stringify(row) + '\n');
    if (wantsHtml) {
      sendHtml(res, 200, RESPUESTA, origen === 'chat' ? '/chat' : '/peticiones');
    } else {
      sendJson(res, 200, { ok: true, respuesta: RESPUESTA });
    }
  } catch (err) {
    const code = err && err.code;
    if (code === 'TOO_LARGE') {
      const error = 'El mensaje es demasiado largo.';
      if (wantsHtml) sendHtml(res, 413, error, '/peticiones');
      else sendJson(res, 413, { ok: false, error });
      return;
    }
    if (code === 'TYPE') {
      sendJson(res, 415, { ok: false, error: 'El envío no tiene un formato válido.' });
      return;
    }
    const error = 'No se ha podido guardar. Inténtalo otra vez.';
    if (wantsHtml) sendHtml(res, 400, error, '/peticiones');
    else sendJson(res, 400, { ok: false, error });
  }
});

server.on('error', (err) => {
  console.error('No se ha podido abrir el puerto de peticiones:', err.message);
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  console.log(`peticiones escuchando en ${HOST}:${PORT}, archivo ${FILE}`);
});
