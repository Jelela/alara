export function FloorPlansSection() {
  return (
    <section id="planos" className="scroll-mt-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-4 text-center">
          Planos
        </h2>
        <p className="text-stone-600 text-center max-w-2xl mx-auto mb-12">
          Conocé la distribución de cada nivel de las viviendas Alara.
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-stone-800">Planta Baja</h3>
            <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-stone-200">
              <img
                src="/images/planta-baja.png"
                alt="Plano planta baja - Alara"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-stone-800">Planta Alta</h3>
            <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-stone-200">
              <img
                src="/images/planta-alta.png"
                alt="Plano planta alta - Alara"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
