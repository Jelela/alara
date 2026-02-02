import { Header } from "@/components/Header";
import { ContentSection } from "@/components/ContentSection";
import { FloorPlansSection } from "@/components/FloorPlansSection";
import { LocationSection } from "@/components/LocationSection";
import { UnitsSection } from "@/components/UnitsSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { config } from "@/lib/config";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ContentSection
          id="concepto"
          title="Una forma de habitar que evoluciona al ritmo de la vida"
          content={`Alara nace de una mirada exigente: la de buscar lo mejor en cada decisión.
Pero también de recuperar valores que siguen siendo esenciales: la cercanía, la vida de barrio, el disfrute del jardín propio y la tranquilidad de sentirse en casa.

Es un proyecto pensado para quienes quieren calidad real, buen diseño y confort, sin pagar de más ni resignar lo importante. Casas bien resueltas, funcionales y durables, que acompañan la vida cotidiana y mantienen su valor con el tiempo… en otras palabras, preparadas para acompañar las distintas etapas de la vida.`}
          imageSrc="/images/interior-1.jpeg"
          imageAlt="Interior de vivienda Alara"
          imageFirst={true}
        />

        <ContentSection
          id="diseno"
          title="Diseño pensado al detalle"
          content={`El diseño de Alara parte de una planificación precisa.
La orientación estratégica permite aprovechar la luz natural durante todo el día, generando espacios luminosos, cálidos y eficientes. Las grandes aberturas integran interior y exterior, incorporando el jardín y el verde como parte activa de la casa.

Los espacios se adaptan a la vida real: se conectan, se independizan y evolucionan según las necesidades de cada familia.`}
          imageSrc="/images/interior-2.jpeg"
          imageAlt="Diseño y luminosidad de Alara"
          imageFirst={false}
        />

        <ContentSection
          id="calidad"
          title="Calidad constructiva como base"
          content={`La solidez del proyecto se apoya en una construcción de alto estándar.
Las viviendas están realizadas en bloque Retak, un sistema que mejora la eficiencia térmica, el confort interior y la durabilidad.

Los revestimientos y terminaciones fueron cuidadosamente seleccionados, incorporando materiales Bosch, reconocidos por su diseño, calidad y prestaciones, elevando el estándar del proyecto y asegurando una experiencia que se mantiene en el tiempo.`}
          imageSrc="/images/exterior-1.jpeg"
          imageAlt="Calidad constructiva Alara"
          imageFirst={true}
        />

        <ContentSection
          id="proyecto"
          title="Privacidad, protección y tranquilidad"
          content={`Alara fue diseñado para ofrecer privacidad real. Cada unidad cuenta con espacios íntimos que se abren a su propio jardín, cuidando las visuales y la relación entre viviendas.

El proyecto incorpora un sistema de seguridad de alto nivel, con vigilancia 24 horas y tecnología de inteligencia artificial, elegido para responder a las mayores exigencias, aportando tranquilidad sin interferir en la vida diaria.`}
          imageSrc="/images/exterior-2.jpeg"
          imageAlt="Privacidad y jardín en Alara"
          imageFirst={false}
        />

        <FloorPlansSection />

        <LocationSection />

        <UnitsSection />

        <section id="contacto" className="bg-stone-100 py-16 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-6">
              ¿Te gustaría conocer más?
            </h2>
            <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
              Escribinos por WhatsApp y te contamos todo sobre Alara.
            </p>
            <a
              href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-lg font-medium rounded-full hover:bg-[#20bd5a] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribinos por WhatsApp
            </a>
            <div className="mt-12">
              <a
                href={config.googleMaps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-stone-900 font-medium inline-flex items-center gap-2"
              >
                Ver ubicación en Google Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
