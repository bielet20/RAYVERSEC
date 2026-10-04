# Formato de cada alerta

Un archivo por aviso, dentro de la carpeta del tipo y con la fecha en el nombre.

Ruta: `documentacion/<tipo>/AAAA-MM-DD-titulo-corto.md`

Tipos: `phishing`, `malware`, `robo-de-datos`, `vulnerabilidades`, `otros`.

```
# Título corto, en cristiano
fecha: AAAA-MM-DD
tipo: phishing
fuente: nombre y URL del aviso
a_quien_afecta: una frase

## Qué ha pasado
Dos o tres frases. Sin pasos de ataque.

## Qué no hay que hacer
Viñetas para una persona sin informática.

## Qué hacer ahora
Pasos de protección o de recuperación, solo los que el aviso público recomienda.

## Para la vía 1 (charla, principiantes)
Solo si una persona sin informática puede evitarlo con un hábito.
- titulo:
- guion: cuatro o seis frases, tono de charla
- puntos_clave:

## Para la vía 2 (tutorial, medio o avanzado)
Solo si hace falta revisar una cuenta, un dominio o un aparato.
Qué se ve y cómo comprobarlo o contenerlo. Sin pasos para montar el ataque.
- titulo:
- que_se_comprueba:
- pasos_de_defensa:
```
