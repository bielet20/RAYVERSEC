# Plan de cursos en dos vías

La misma documentación de alertas alimenta las dos vías. Cada ficha de aviso puede tener dos notas de vídeo: una charla para la vía cercana y un tutorial de defensa para la vía tutorial. No se escribe cómo ejecutar un ataque.

El orden del canal, de base a cima, está en `CATALOGO.md`. El curso 01 ya estaba escrito y no se reescribe. Los cursos 02 a 13 están escritos el 4 de octubre de 2026.

## Vía cercana. Principiantes absolutos
Tono: charla cercana.
Objetivo: qué no hacer, y cómo protegerse antes de que pase nada.
Recuperación: solo los primeros pasos y a quién llamar, sin herramientas ni análisis.

Curso base, ya escrito: `01-prevencion-principiantes.md`
- Fase 1, antes de que pase: el peligro no parece un hacker; la contraseña; el mensaje falso; el WiFi y el móvil.
- Fase 2, si ya ha pasado: los primeros minutos; a quién llamar en España; qué revisar después del susto.

Esenciales para todos, escritos, charla:
- `02-actualizaciones-y-aplicaciones.md`
- `03-compras-paquetes-y-premios.md`
- `04-llamadas-y-familiares.md`
- `05-casa-copias-y-movil-compartido.md`

Por tipo de amenaza, escritos, sigue siendo charla y no tutorial técnico:
- `06-phishing-el-mensaje.md`
- `07-malware-el-archivo.md`
- `08-robo-de-datos-la-filtracion.md`
- `09-ingenieria-social-la-persona-amable.md`

## Vía tutorial. Nivel medio y avanzado
Tono: tutorial, paso a paso, para quien ya sabe cambiar una clave, revisar una cuenta y no pulsar el enlace.
Objetivo: reconocer el modus operandi por lo que ve la víctima o quien defiende, y defenderse o recuperarse a ese nivel.
Límite: se describe la señal y la comprobación. No se dan pasos para montar el phishing, el malware o el robo.

Escritos:
- `10-tutorial-reconocer-phishing.md`. Nivel medio. Remitente, dominio y enlace, sin enseñar a copiar una página.
- `11-tutorial-cuenta-ya-usada.md`. Nivel avanzado. Reenvíos, reglas, sesiones e inicios recientes, y el orden para recuperar la cuenta.
- `12-tutorial-aparato-comprometido.md`. Nivel avanzado. Aislar, no pagar, reinstalar o técnico. Sin análisis de malware.
- `13-tutorial-recuperar-dinero-e-identidad.md`. Nivel avanzado. Banco, correo, operadora, denuncia y pruebas. INCIBE 017, Policía o Guardia Civil.

Ideas aún no escritas, solo en el catálogo, marcadas como idea: WiFi del trabajo, copias de seguridad, estafas de inversión, privacidad en redes.

## Cómo se reparte un aviso nuevo
1. Se guarda la ficha en `documentacion/<tipo>/AAAA-MM-DD-titulo.md`.
2. Si una persona sin informática puede evitarlo con un hábito, se anota un vídeo posible de la vía cercana.
3. Si hace falta revisar una cuenta, un dominio o un aparato con criterio, se anota un vídeo posible de la vía tutorial.
4. Si el aviso solo sirve a quien administra sistemas, se resume el riesgo en una frase y no se convierte en curso.
5. El curso nuevo se añade al final de `CATALOGO.md`, sin reescribir el 01.
