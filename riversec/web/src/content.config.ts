import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cursos' }),
  schema: z.object({
    numero: z.string(),
    titulo: z.string(),
    nivel: z.string(),
    rama: z.enum(['cercana', 'tutorial']),
    resumen: z.string(),
    estado: z.string(),
    videos: z.number(),
    h1: z.string(),
    archivo: z.string(),
    piezas: z.array(
      z.object({
        titulo: z.string(),
        duracion_min: z.number(),
        que_se_explica: z.string(),
      }),
    ),
  }),
});

export const collections = { cursos };
