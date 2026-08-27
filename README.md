# Forge to Studio — Web del estudio

Landing estática (HTML + CSS, sin build ni dependencias). Coherente con la estética de
*Forge to Stars* (Orbitron/Inter, fondo espacial, dorado + cian).

```
forge-studios-web/
├── index.html      # la página (una sola)
├── style.css       # estilos
└── assets/
    ├── logo_forge_studios.png
    └── logo_forge_to_stars.png
```

## Ver en local
Abre `index.html` en el navegador (doble clic), o sirve la carpeta:
```
python -m http.server 8080   # → http://localhost:8080
```

## Desplegar GRATIS (Cloudflare Pages) + dominio de Piensa Solutions

1. **Sube esta carpeta a un repo de GitHub** (p.ej. `forge-studios-web`).
2. **Cloudflare Pages** → *Create a project* → conecta el repo. Build command: *(ninguno)*.
   Output directory: `/` (raíz). Deploy → te da una URL `*.pages.dev` gratis con SSL.
3. **Dominio propio** (`forgetostudio.com`): en Cloudflare Pages → *Custom domains* → añade
   `forgetostudio.com` y `www.forgetostudio.com`. Cloudflare te dirá los **registros DNS**.
4. En el **panel de Piensa Solutions** (DNS del dominio): apunta el dominio a Cloudflare
   (lo más limpio: cambiar los **nameservers** del dominio a los de Cloudflare, y gestionar
   todo el DNS desde Cloudflare). Alternativa sin cambiar NS: añadir el registro `CNAME`
   que indique Cloudflare Pages.
5. **`.es` y `.online`** → **redirección 301 a `.com`** (Cloudflare: Redirect Rule
   `*.forgetostudio.es/* → https://forgetostudio.com/$1`). Así no divides SEO.

> Alternativa si prefieres el hosting de Piensa: sube `index.html`, `style.css` y `assets/`
> por FTP/cPanel a la raíz `public_html` del dominio. Mismos archivos, sin cambiar DNS.

## Pendiente de rellenar (marcado con `data-todo` en el HTML)
- **Enlace de Steam** (botón "Wishlist") → la URL de la ficha del juego cuando esté.
- **Capturas** reales del juego (galería): mapa galáctico, combate terrestre/espacial, planeta.
- **Press kit** → generar con [presskit()](https://dopresskit.com) (gratis).
- **Email** de contacto (ahora `hola@forgetostudio.com` — confirmar/crear).
- **Redes**: Steam, Discord, X, YouTube.

## Notas
- Fuentes vía Google Fonts (Orbitron + Inter). Todo lo demás es local.
- Responsive (móvil/tablet/desktop). Peso mínimo, sin JS de terceros.
