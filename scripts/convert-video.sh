#!/bin/bash
# Convierte Web.mov a MP4 para compatibilidad con Chrome y Firefox
# Requiere ffmpeg: brew install ffmpeg

INPUT="public/video/Web.mov"
OUTPUT="public/video/hero.mp4"

if [ ! -f "$INPUT" ]; then
  echo "Error: No se encuentra $INPUT"
  exit 1
fi

if ! command -v ffmpeg &> /dev/null; then
  echo "ffmpeg no está instalado. Instalalo con: brew install ffmpeg"
  exit 1
fi

echo "Convirtiendo a MP4 (puede tardar un minuto)..."
ffmpeg -i "$INPUT" -c:v libx264 -preset fast -crf 23 -movflags +faststart "$OUTPUT"

echo "Listo: $OUTPUT"
