# Armonía Music — sitio web

Vitrina pública de [Armonía Music](https://github.com/armoniamusic/armonia-web): instrumentos y audio en Nicaragua, con catálogo, simulador de apartados y contacto por WhatsApp.

Sitio en GitHub Pages: https://armoniamusic.github.io/armonia-web/

## Cómo editar

Todo el contenido editable está al inicio de `app.js`:

1. Teléfono, WhatsApp, correo y redes
2. `PRODUCTOS` — añade `precioUsd` (referencia en tienda; no es cotización final)
3. `MARCAS`, `SUCURSALES`, `FAQS`, `TESTIMONIOS`

Después de cambiar CSS o JS, sube el número de versión en `index.html` (`estilos.css?v=` y `app.js?v=`) para evitar caché.

## Despliegue

1. Activa GitHub Pages en el repo (`main` / raíz).
2. Cuando tengas dominio propio, actualiza:
   - `SITE_URL` en `app.js`
   - `canonical`, `og:url` y `og:image` en `index.html`
   - `robots.txt` y `sitemap.xml`

## Notas

- Los precios son **de referencia**. Confírmalos en sucursal o WhatsApp antes de publicar cambios grandes.
- Teléfonos `+505 0000 0000` en sucursales distintas de León son placeholders.
- Las fotos viven en `fotos/`. Prefiere JPEG/WebP livianos (máx. ~200–300 KB).
