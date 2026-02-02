import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alara | Vivir el placer de tu casa propia y el confort de un barrio jardín",
  description:
    "Alara es un proyecto de casas en barrio jardín. Calidad real, buen diseño y confort. Cercanía, vida de barrio y tranquilidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
