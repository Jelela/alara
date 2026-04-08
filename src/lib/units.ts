export const UNITS = [
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
    sold: true,
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

export function formatPrice(value: number) {
  return value.toLocaleString("es-UY", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
