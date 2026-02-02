import { config } from "@/lib/config";

const REFERENCE_POINTS = [
  "Scuola Italiana",
  "Colegio Stella Maris",
  "Carrasco Polo Club",
  "St. Patricks College",
  "British Schools",
  "Colegio Jesús María",
  "Devoto Santa Mónica",
  "Woodlands School",
  "Carrasco Lawn Tennis",
  "Sofitel Carrasco",
];

export function LocationSection() {
  return (
    <section id="ubicacion" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-6 text-center">
          Un entorno estratégico, a minutos de todo
        </h2>
        <p className="text-stone-600 leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Ubicado en un entorno clásico de barrio jardín, rodeado de árboles y verde, Alara combina la calma de un ambiente residencial con una localización estratégica.
          <br />
          <br />
          Cerca de los principales puntos de la ciudad y de todo lo necesario para la vida diaria, ofrece una conexión ágil sin perder la sensación de refugio, privacidad y bienestar.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Mapa */}
          <div className="rounded-lg overflow-hidden bg-stone-100 shadow-sm">
            <img
              src="/images/ubicacion-mapa.png"
              alt="Mapa de ubicación de Alara en Carrasco"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Referencia de puntos */}
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-6">
              Referencia de puntos
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-stone-600">
              {REFERENCE_POINTS.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center text-xs font-medium text-stone-700">
                    {index + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a
              href={config.googleMaps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-stone-600 hover:text-stone-900 font-medium"
            >
              Ver ubicación en Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
