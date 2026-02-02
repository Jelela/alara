# Alara - Sitio web del proyecto inmobiliario

Sitio web inspirado en [Liv District](https://livdistrict.uy/) para promocionar el proyecto Alara y generar contactos por WhatsApp.

## Configuración

### 1. Número de WhatsApp

Editar `src/lib/config.ts` y reemplazar el número:

```ts
number: "59895078890", // Código país + número sin espacios (+598 95 078 890)
```

### 2. Google Maps

Actualizar la URL de Google Maps en `src/lib/config.ts` con la ubicación exacta del proyecto.

### 3. Assets (imágenes y video)

Copiar los archivos en las siguientes ubicaciones:

**Video hero (para que funcione en Chrome, Firefox y Safari):**
El formato `.mov` solo funciona en Safari. Para compatibilidad total, convertí a MP4:

**Opción A - QuickTime (Mac, sin instalar nada):**
1. Abrí `Web.mov` con QuickTime
2. Archivo → Exportar como → 1080p
3. Guardá como `hero.mp4` en `public/video/`

**Opción B - Online:** [CloudConvert MOV to MP4](https://cloudconvert.com/mov-to-mp4) → subí Web.mov → descargá → guardá en `public/video/hero.mp4`

**Opción C - ffmpeg:** `brew install ffmpeg` y luego `./scripts/convert-video.sh`

**Imagen poster del video** (frame o mejor foto para mostrar mientras carga):
- `public/images/hero-poster.jpg`

**Imágenes de las secciones** (renombrar las fotos de WhatsApp):
- `public/images/interior-1.jpg` — Sección Concepto
- `public/images/interior-2.jpg` — Sección Diseño
- `public/images/exterior-1.jpg` — Sección Calidad
- `public/images/exterior-2.jpg` — Sección Privacidad
- `public/images/exterior-3.jpg` — Sección Ubicación

## Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```
