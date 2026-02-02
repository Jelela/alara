"use client";

import { useState } from "react";

interface SectionImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function SectionImage({ src, alt, className = "" }: SectionImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center ${className}`}>
        <span className="text-stone-500 text-sm">Imagen no disponible</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
      onError={() => setError(true)}
    />
  );
}
