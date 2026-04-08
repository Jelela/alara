"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { UNITS, formatPrice } from "@/lib/units";
import { getWhatsAppVisitUrl } from "@/lib/config";

export default function ContactoPage() {
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const selectedUnit = selectedUnitId ? UNITS.find((u) => u.id === selectedUnitId) : null;
  const canContact = selectedUnit && !selectedUnit.sold;
  const minAvailablePrice =
    UNITS.filter((u) => !u.sold && u.price != null)
      .map((u) => u.price as number)
      .sort((a, b) => a - b)[0] ?? null;

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* Una sola sección: video de fondo con título, tabla y CTA encima */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-stone-900">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="auto"
          poster="/images/hero-poster.jpeg"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
          <source src="/video/hero.mov" type="video/quicktime" />
          <source src="/video/Web.mov" type="video/quicktime" />
        </video>
        <div className="video-overlay absolute inset-0" />

        <div className="relative z-10 flex flex-col flex-1 min-h-0">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-alara.png"
                alt="Alara"
                width={240}
                height={80}
                className="h-14 w-auto"
              />
            </Link>
          </div>

          <div className="flex-1 overflow-auto px-4 sm:px-6 lg:px-8 pb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white text-center drop-shadow-lg mb-6">
              {minAvailablePrice == null
                ? "Unidades disponibles"
                : `Unidades desde ${formatPrice(minAvailablePrice)} USD`}
            </h1>
            <p className="text-white/90 text-center mb-6 text-sm sm:text-base">
              Elegí la unidad que te interesa y te llevamos a WhatsApp para coordinar una visita.
            </p>

            <div className="overflow-x-auto rounded-lg border border-stone-200/80 bg-white/95 shadow-lg backdrop-blur-sm max-w-7xl mx-auto">
              <table className="w-full text-sm min-w-0 md:min-w-[720px]">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50/95">
                    <th className="px-3 py-3 md:px-4 text-left font-semibold text-stone-800 w-10 md:w-12">
                      Elegir
                    </th>
                    <th className="px-3 py-3 md:px-4 text-left font-semibold text-stone-800">
                      Casa
                    </th>
                    <th className="px-3 py-3 md:px-4 text-right font-semibold text-stone-800 hidden md:table-cell">
                      Área interior (m²)
                    </th>
                    <th className="px-3 py-3 md:px-4 text-right font-semibold text-stone-800 hidden md:table-cell">
                      Área parrillero (m²)
                    </th>
                    <th className="px-3 py-3 md:px-4 text-right font-semibold text-stone-800 hidden md:table-cell">
                      Área verde (m²)
                    </th>
                    <th className="px-3 py-3 md:px-4 text-right font-semibold text-stone-800 hidden md:table-cell">
                      Área total exterior (m²)
                    </th>
                    <th className="px-3 py-3 md:px-4 text-right font-semibold text-stone-800">
                      Precio (USD)
                    </th>
                    <th className="px-3 py-3 md:px-4 text-left font-semibold text-stone-800 md:hidden">
                      Resto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {UNITS.map((unit) => (
                    <tr
                      key={unit.id}
                      role={unit.sold ? undefined : "button"}
                      tabIndex={unit.sold ? undefined : 0}
                      onClick={unit.sold ? undefined : () => setSelectedUnitId(unit.id)}
                      onKeyDown={
                        unit.sold
                          ? undefined
                          : (e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setSelectedUnitId(unit.id);
                              }
                            }
                      }
                      className={`border-b border-stone-100 last:border-0 transition-colors ${
                        unit.sold ? "bg-rose-50/90" : "cursor-pointer hover:bg-white"
                      } ${
                        selectedUnitId === unit.id
                          ? "ring-2 ring-inset ring-stone-500 bg-white"
                          : ""
                      }`}
                    >
                      <td className="px-3 py-3 md:px-4">
                        {unit.sold ? (
                          <span className="text-stone-300" aria-hidden>—</span>
                        ) : (
                          <input
                            type="radio"
                            name="unit"
                            value={unit.id}
                            id={`unit-${unit.id}`}
                            checked={selectedUnitId === unit.id}
                            onChange={() => setSelectedUnitId(unit.id)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-4 h-4 text-stone-600 border-stone-300 focus:ring-stone-500 pointer-events-none"
                            tabIndex={-1}
                          />
                        )}
                      </td>
                      <td className="px-3 py-3 md:px-4 font-medium text-stone-900">
                        Casa {unit.id}
                      </td>
                      <td className="px-3 py-3 md:px-4 text-right text-stone-600 hidden md:table-cell">
                        {unit.interior}
                      </td>
                      <td className="px-3 py-3 md:px-4 text-right text-stone-600 hidden md:table-cell">
                        {unit.parrillero}
                      </td>
                      <td className="px-3 py-3 md:px-4 text-right text-stone-600 hidden md:table-cell">
                        {unit.verde}
                      </td>
                      <td className="px-3 py-3 md:px-4 text-right text-stone-600 hidden md:table-cell">
                        {unit.exterior}
                      </td>
                      <td className="px-3 py-3 md:px-4 text-right font-medium">
                        {unit.sold ? (
                          <span className="inline-flex items-center rounded-full bg-rose-200 px-2.5 py-0.5 text-xs font-medium text-rose-800">
                            Vendida
                          </span>
                        ) : (
                          <span className="text-stone-900">
                            {unit.price == null ? "Consultar" : `${formatPrice(unit.price)} USD`}
                          </span>
                        )}
                      </td>
                      <td className="px-3 py-3 md:px-4 text-stone-600 text-xs md:hidden">
                        {unit.sold ? (
                          "—"
                        ) : (
                          <span>
                            Int. {unit.interior} · Parr. {unit.parrillero} · V. {unit.verde} · Ext. {unit.exterior} m²
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 pb-24 md:pb-8">
              {!canContact && (
                <p className="text-white/90 text-sm drop-shadow">
                  {selectedUnitId && selectedUnit?.sold
                    ? "La unidad elegida está vendida. Elegí una unidad disponible."
                    : "Seleccioná una unidad disponible para consultar por WhatsApp."}
                </p>
              )}
              <div className="hidden md:flex flex-col items-center gap-4">
                {canContact ? (
                  <a
                    href={getWhatsAppVisitUrl(selectedUnitId!)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-lg font-medium rounded-full hover:bg-[#20bd5a] transition-colors shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultar por WhatsApp — Casa {selectedUnitId}
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-2 px-8 py-4 bg-stone-400/80 text-stone-200 text-lg font-medium rounded-full cursor-not-allowed"
                  >
                    Seleccioná unidad
                  </button>
                )}
              </div>
              <Link
                href="/"
                className="text-white/90 hover:text-white text-sm font-medium drop-shadow"
              >
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA fijo en mobile: siempre visible */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-stone-900/95 backdrop-blur-md border-t border-white/10 md:hidden">
        {canContact ? (
          <a
            href={getWhatsAppVisitUrl(selectedUnitId!)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white text-lg font-medium rounded-full hover:bg-[#20bd5a] transition-colors shadow-lg"
          >
            <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar por WhatsApp — Casa {selectedUnitId}
          </a>
        ) : (
          <div className="flex items-center justify-center gap-2 w-full py-4 bg-stone-500/80 text-white text-lg font-medium rounded-full">
            Seleccioná unidad
          </div>
        )}
      </div>
    </div>
  );
}
