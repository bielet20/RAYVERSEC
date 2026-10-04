import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cursosDir = process.env.CURSOS_DIR || path.resolve(webRoot, '../../cursos');
const outDir = path.join(webRoot, 'src/content/cursos');
const ideasPath = path.join(webRoot, 'src/data/ideas.json');

function yamlString(value) {
  return JSON.stringify(value);
}

if (!fs.existsSync(path.join(cursosDir, 'CATALOGO.md'))) {
  console.log(`sync: no hay CATALOGO.md en ${cursosDir}; se dejan los markdown ya generados.`);
  process.exit(0);
}

const catalog = fs.readFileSync(path.join(cursosDir, 'CATALOGO.md'), 'utf8');
const blocks = catalog.split(/^### /m).slice(1);
const entries = [];
for (const block of blocks) {
  const numero = block.slice(0, 2).trim();
  const field = (name) => {
    const match = block.match(new RegExp(`^- ${name}: (.+)$`, 'm'));
    return match ? match[1].trim() : '';
  };
  const archivo = field('archivo');
  if (!archivo) continue;
  entries.push({
    numero: field('número') || numero,
    titulo: field('título'),
    nivel: field('nivel'),
    rama: field('rama'),
    resumen: field('resumen'),
    estado: field('estado'),
    videos: Number(field('vídeos') || '0'),
    archivo,
  });
}

const ideas = [];
const ideasSection = catalog.split('## Siguientes posibles')[1] || '';
for (const line of ideasSection.split('\n')) {
  const match = line.match(/^\d+\. idea: (.+?)\. (.+)$/);
  if (match) ideas.push({ titulo: match[1].trim(), texto: match[2].trim(), publicado: false });
}

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(path.dirname(ideasPath), { recursive: true });
for (const name of fs.readdirSync(outDir)) {
  if (name.endsWith('.md')) fs.unlinkSync(path.join(outDir, name));
}

for (const entry of entries) {
  const sourcePath = path.join(cursosDir, entry.archivo);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`El catálogo cita ${entry.archivo} y no está en ${cursosDir}`);
  }
  const source = fs.readFileSync(sourcePath, 'utf8');
  const h1 = (source.match(/^# (.+)$/m) || [, ''])[1].trim();
  const piezas = [];
  const chunks = source.split(/^### /m).slice(1);
  for (const chunk of chunks) {
    const titulo = (chunk.match(/^- titulo: (.+)$/m) || [, ''])[1].trim();
    const duracion = (chunk.match(/^- duracion_min: (\d+)$/m) || [, ''])[1];
    const explica = (chunk.match(/^- que_se_explica: (.+)$/m) || [, ''])[1].trim();
    if (!titulo) continue;
    piezas.push({
      titulo,
      duracion_min: Number(duracion || '0'),
      que_se_explica: explica,
    });
  }
  if (entry.rama !== 'cercana' && entry.rama !== 'tutorial') {
    throw new Error(`Rama no reconocida en ${entry.archivo}: ${entry.rama}`);
  }
  const lines = [
    '---',
    `numero: ${yamlString(entry.numero)}`,
    `titulo: ${yamlString(entry.titulo)}`,
    `nivel: ${yamlString(entry.nivel)}`,
    `rama: ${yamlString(entry.rama)}`,
    `resumen: ${yamlString(entry.resumen)}`,
    `estado: ${yamlString(entry.estado)}`,
    `videos: ${entry.videos}`,
    `h1: ${yamlString(h1)}`,
    `archivo: ${yamlString(entry.archivo)}`,
    'piezas:',
  ];
  for (const pieza of piezas) {
    lines.push(`  - titulo: ${yamlString(pieza.titulo)}`);
    lines.push(`    duracion_min: ${pieza.duracion_min}`);
    lines.push(`    que_se_explica: ${yamlString(pieza.que_se_explica)}`);
  }
  lines.push('---', '');
  lines.push(
    `Página generada desde \`${entry.archivo}\` y desde \`CATALOGO.md\`. Las duraciones son las estimaciones de producción que ya figuran en ese markdown. Esta página no afirma que el curso esté en YouTube.`,
  );
  lines.push('');
  const slug = entry.archivo.replace(/\.md$/, '');
  fs.writeFileSync(path.join(outDir, `${slug}.md`), lines.join('\n'));
  console.log(`sync: ${slug} (${piezas.length} vídeos en el archivo, ${entry.videos} en el catálogo)`);
}

fs.writeFileSync(
  ideasPath,
  JSON.stringify(
    {
      nota: 'Estas cuatro entradas son ideas. No están escritas y no son cursos del canal.',
      ideas,
    },
    null,
    2,
  ) + '\n',
);
console.log(`sync: ${entries.length} cursos, ${ideas.length} ideas no publicadas`);
