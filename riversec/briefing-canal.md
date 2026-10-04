# Briefing del canal RiverSec

Documento para Biel (Gabriel Rivero). Hechos tomados de los archivos que ya están en `/workspace/ciber-vigilancia`. No describe vídeos montados ni una carga en Real News Bot.

## Nombre

RiverSec.

## Dominio y canal

El dominio público es https://rayversec.com, comprado en Namecheap. El canal de YouTube es RAYVERSEC, https://www.youtube.com/@RAYVERSEC. El nombre del proyecto sigue siendo RiverSec. No hay ninguna dirección riversec.com en estos archivos.

## Qué es

Canal de ciberseguridad defensiva. El proyecto guarda avisos públicos y los convierte en fichas y en cursos de protección y de recuperación. No es un manual de ataque.

Las fuentes que el propio proyecto dice vigilar están en `fuentes.md`: avisos de INCIBE, OSI (ciudadanía), el teléfono 017 de INCIBE, avisos de CISA y alertas de CERT-EU. De cada aviso se extrae qué ha pasado, a quién afecta y qué debe hacer una persona sin conocimientos técnicos. Si el aviso es solo para quien administra sistemas, se resume el riesgo en una frase y no se copian detalles de explotación. No se guardan procedimientos de ataque, código, kits de phishing, cómo fabricar malware ni cómo saltarse una protección.

## Tono

Dos tonos, uno por rama. Están descritos en `cursos/00-plan-dos-vias.md` y en las cabeceras de los cursos:

- Vía cercana: charla, como si se lo contaras a un familiar. Frases cortas. Sin jerga. Si aparece una palabra técnica, se traduce en el momento.
- Vía tutorial: tutorial de defensa, paso a paso. Cada palabra técnica se traduce en el momento.

Límite de las dos: qué no hacer, cómo protegerse antes de que pase algo, y cómo contenerse o recuperarse. No se explica cómo se monta un engaño, un programa dañino o un robo.

## Público

Dos públicos, y no se mezclan:

- Personas sin conocimientos de ordenador (en el catálogo: principiante absoluto). Usan el móvil, el correo o el banco online.
- Personas de nivel medio o avanzado, que ya saben cambiar una clave, revisar una cuenta y no pulsar el enlace.

## Las dos ramas

La misma documentación de alertas puede alimentar las dos vías. El orden, de base a cima, está en `cursos/CATALOGO.md`.

### Vía cercana

Charla. Objetivo: qué no hacer y cómo protegerse antes de que pase nada. Si ya pasó, solo los primeros pasos y a quién llamar, sin herramientas ni análisis.

Cursos 01 a 09. Nivel: principiante absoluto.

### Vía tutorial

Paso a paso. Objetivo: reconocer la señal por lo que ve quien se defiende, y defenderse o recuperarse. Se describe la señal y la comprobación. No se dan pasos para montar el phishing, el malware o el robo.

Cursos 10 a 13. El 10 es nivel medio. El 11, el 12 y el 13 son nivel avanzado.

## Estructura de contenido que ya existe

### Carpetas de documentación

En `documentacion/`, según `documentacion/LEEME.md` y `formato-alerta.md`. Cada aviso iría en `documentacion/<tipo>/AAAA-MM-DD-titulo-corto.md`.

| Carpeta | Para qué está prevista | Qué hay ahora en disco |
| --- | --- | --- |
| `documentacion/phishing/` | Mensajes, llamadas o páginas que se hacen pasar por alguien de confianza | Vacía |
| `documentacion/malware/` | Programas dañinos que llegan por un archivo, un anuncio o una actualización falsa | Vacía |
| `documentacion/robo-de-datos/` | Filtraciones y cuentas usadas por otra persona | Vacía |
| `documentacion/vulnerabilidades/` | Fallos en programas o aparatos que ya tienen un aviso público | Un archivo: `2026-09-29-actualizacion-iphone-ipad-mac.md` (título de la ficha: «Actualiza el iPhone, el iPad y el Mac», fecha 2026-09-29, tipo vulnerabilidades) |
| `documentacion/otros/` | Lo que no encaja arriba | Vacía |

El formato de cada ficha está en `formato-alerta.md`: qué ha pasado, qué no hay que hacer, qué hacer ahora, y dos notas opcionales de vídeo (vía cercana y vía tutorial), sin pasos de ataque.

### Cursos escritos

Títulos copiados de `cursos/CATALOGO.md`. El detalle de cada vídeo está en el archivo de ese curso. El catálogo dice que las duraciones son estimadas para el vídeo. Este briefing no afirma que esos vídeos estén grabados ni publicados.

Estado según el catálogo: el 01 figura como «ya escrito». Los cursos 02 a 13 figuran como «escrito el 4 de octubre de 2026». `00-plan-dos-vias.md` dice que el curso 01 ya estaba escrito y no se reescribe.

**Vía cercana**

1. **01. Qué no hacer antes de que te engañen.** Principiante absoluto. Archivo `01-prevencion-principiantes.md`. Resumen del catálogo: antes de que te engañen, qué no pulsar, qué no decir y a quién llamar si ya pasó. 7 vídeos en el catálogo.
2. **02. Actualizaciones y aplicaciones.** Principiante absoluto. `02-actualizaciones-y-aplicaciones.md`. No instales lo que no pediste, actualiza desde el propio aparato y no hagas caso a quien ofrece limpiar el PC. 6 vídeos.
3. **03. Compras, paquetes y premios.** Principiante absoluto. `03-compras-paquetes-y-premios.md`. El paquete, la tienda y el premio se comprueban en la app o en la web que tú abres, nunca pagando un enlace. 6 vídeos.
4. **04. Llamadas y familiares.** Principiante absoluto. `04-llamadas-y-familiares.md`. Cuelga al banco, al soporte o al familiar en apuros, y llama tú al número que ya tenías. 6 vídeos.
5. **05. Casa, copias y móvil compartido.** Principiante absoluto. `05-casa-copias-y-movil-compartido.md`. Guarda una copia de las fotos importantes y no dejes el móvil ni las cuentas abiertas cuando en casa se comparte. 6 vídeos.
6. **06. El mensaje falso.** Principiante absoluto. `06-phishing-el-mensaje.md`. El SMS, el correo y el QR no se pulsan: se entra escribiendo la dirección o por la app. 6 vídeos.
7. **07. El archivo que no pediste.** Principiante absoluto. `07-malware-el-archivo.md`. El adjunto, el anuncio y la actualización falsa no se abren; si ya se abrió, no pagues y corta el paso a más cuentas. 6 vídeos.
8. **08. Cuando avisan de que salieron datos.** Principiante absoluto. `08-robo-de-datos-la-filtracion.md`. Si avisan de que salieron datos, cambia primero la clave del correo y no creas a quien ofrece arreglarlo. 6 vídeos.
9. **09. La persona amable.** Principiante absoluto. `09-ingenieria-social-la-persona-amable.md`. Que alguien sea amable, tenga prisa o sepa tu nombre no le da derecho a un código ni a un ingreso. 6 vídeos.

**Vía tutorial**

10. **10. Reconocer un mensaje falso.** Nivel medio. `10-tutorial-reconocer-phishing.md`. Cómo mirar remitente, dominio y enlace sin entrar, y cómo llegar a la web oficial por tu cuenta. 6 vídeos.
11. **11. Si ya usaron tu cuenta de correo.** Nivel avanzado. `11-tutorial-cuenta-ya-usada.md`. Qué revisar si ya usaron el correo: reenvíos, reglas, sesiones e inicios, y en qué orden recuperar la cuenta. 6 vídeos.
12. **12. Si un aparato ya no es de fiar.** Nivel avanzado. `12-tutorial-aparato-comprometido.md`. Cómo aislar un aparato, qué no pagar, cuándo reinstalar y cuándo hace falta un técnico, sin analizar el programa. 6 vídeos.
13. **13. Recuperar el dinero y la identidad.** Nivel avanzado. `13-tutorial-recuperar-dinero-e-identidad.md`. El orden para frenar el dinero y la identidad: banco, correo, operadora, denuncia y pruebas, con el 017 de INCIBE. 6 vídeos.

También está `cursos/00-plan-dos-vias.md`. No es un curso del catálogo numerado: es el plan de las dos vías.

### Ideas que no son cursos

El catálogo las marca así: «Estas cuatro entradas son ideas. No están escritas y no son cursos del canal.»

1. WiFi del trabajo. Qué no hacer en la red de la oficina y a quién avisar, sin tocar la administración de esa red.
2. Copias de seguridad. Una copia de documentos además de las fotos de casa, hecha con calma y guardada aparte.
3. Estafas de inversión. Promesas de beneficio rápido por mensaje: no ingresar y comprobar por un camino propio.
4. Privacidad en redes. Qué no publicar y qué no confirmar a un desconocido que ya vio tu perfil.

## Cómo entra un aviso nuevo

Según `00-plan-dos-vias.md`:

1. Se guarda la ficha en `documentacion/<tipo>/AAAA-MM-DD-titulo.md`.
2. Si una persona sin informática puede evitarlo con un hábito, se anota un vídeo posible de la vía cercana.
3. Si hace falta revisar una cuenta, un dominio o un aparato con criterio, se anota un vídeo posible de la vía tutorial.
4. Si el aviso solo sirve a quien administra sistemas, se resume el riesgo en una frase y no se convierte en curso.
5. El curso nuevo se añade al final de `CATALOGO.md`, sin reescribir el 01.

El catálogo también dice: no se inventan cifras, números de víctimas ni nombres de filtraciones concretas.
