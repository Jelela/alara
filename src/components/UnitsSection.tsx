import { config } from "@/lib/config";

const UNITS = [
  {
    id: "001",
    interior: 113.6,
    parrillero: 21.6,
    verde: 115,
    exterior: 136.6,
    price: null,
    sold: true,
  },
  {
    id: "002",
    interior: 113.6,
    parrillero: 21.6,
    verde: 70,
    exterior: 91.6,
    price: 401712,
    sold: false,
  },
  {
    id: "003",
    interior: 113.6,
    parrillero: 21.6,
    verde: 70,
    exterior: 91.6,
    price: 401712,
    sold: false,
  },
  {
    id: "004",
    interior: 115.1,
    parrillero: 19.9,
    verde: 128,
    exterior: 147.9,
    price: 416208,
    sold: false,
  },
  {
    id: "005",
    interior: 115.1,
    parrillero: 19.9,
    verde: 106,
    exterior: 125.9,
    price: 411808,
    sold: false,
  },
  {
    id: "006",
    interior: 113.6,
    parrillero: 21.6,
    verde: 72.5,
    exterior: 94.1,
    price: null,
    sold: true,
  },
  {
    id: "007",
    interior: 113.6,
    parrillero: 21.6,
    verde: 115,
    exterior: 136.6,
    price: 410712,
    sold: false,
  },
] as const;

function formatPrice(value: number) {
  return value.toLocaleString("es-UY", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

const PAYMENT_STEPS = [
  "Boleto de reserva 10%",
  "Compromiso +20% (total 30%)",
  "60% en cuotas mensuales",
  "Saldo contra entrega 10% + gastos de ocupación 4%",
];

export function UnitsSection() {
  const available = UNITS.filter((u) => !u.sold).length;
  const sold = UNITS.filter((u) => u.sold).length;

  return (
    <section id="unidades" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-4 text-center">
          Unidades y precios
        </h2>
        <p className="text-stone-600 text-center max-w-2xl mx-auto mb-12">
          {available} unidades disponibles · {sold} vendidas
        </p>

        <div className="overflow-x-auto rounded-lg border border-stone-200 bg-white shadow-sm">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50">
                <th className="px-4 py-3 text-left font-semibold text-stone-800">
                  Casa
                </th>
                <th className="px-4 py-3 text-right font-semibold text-stone-800">
                  Área interior (m²)
                </th>
                <th className="px-4 py-3 text-right font-semibold text-stone-800">
                  Área parrillero (m²)
                </th>
                <th className="px-4 py-3 text-right font-semibold text-stone-800">
                  Área verde (m²)
                </th>
                <th className="px-4 py-3 text-right font-semibold text-stone-800">
                  Área total exterior (m²)
                </th>
                <th className="px-4 py-3 text-right font-semibold text-stone-800">
                  Precio (USD)
                </th>
                <th className="px-4 py-3 text-right font-semibold text-stone-800">
                  10% de descuento
                </th>
              </tr>
            </thead>
            <tbody>
              {UNITS.map((unit) => (
                <tr
                  key={unit.id}
                  className={`border-b border-stone-100 last:border-0 ${
                    unit.sold ? "bg-rose-50" : ""
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-stone-900">
                    Casa {unit.id}
                  </td>
                  <td className="px-4 py-3 text-right text-stone-600">
                    {unit.interior}
                  </td>
                  <td className="px-4 py-3 text-right text-stone-600">
                    {unit.parrillero}
                  </td>
                  <td className="px-4 py-3 text-right text-stone-600">
                    {unit.verde}
                  </td>
                  <td className="px-4 py-3 text-right text-stone-600">
                    {unit.exterior}
                  </td>
                  <td className="px-4 py-3 text-right font-medium">
                    {unit.sold ? (
                      <span className="inline-flex items-center rounded-full bg-rose-200 px-2.5 py-0.5 text-xs font-medium text-rose-800">
                        Vendida
                      </span>
                    ) : (
                      <span className="text-stone-500 line-through">
                        {formatPrice(unit.price!)} USD
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-stone-900">
                    {unit.sold ? (
                      <span className="text-stone-400">—</span>
                    ) : (
                      <span>
                        {formatPrice(Math.round(unit.price! * 0.9))} USD
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-4">
              Forma de pago
            </h3>
            <ul className="space-y-2 text-stone-600 list-disc list-inside">
              {PAYMENT_STEPS.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
          <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
            <p className="text-stone-600 mb-4">
              ¿Te interesa alguna unidad? Escribinos y te asesoramos.
            </p>
            <a
              href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-medium rounded-full hover:bg-[#20bd5a] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
