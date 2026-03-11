// Shared price data for services
export interface PriceItem {
  id: string;
  name: string;
  price: number | string;
  currency: string;
  description?: string;
  category: "diagnoza" | "terapia";
}

export const prices: PriceItem[] = [
  {
    id: "diagnoza-si",
    name: "Diagnoza integracji sensorycznej",
    price: 750,
    currency: "zł",
    description: "4 spotkania",
    category: "diagnoza",
  },
  {
    id: "diagnoza-logopedyczna",
    name: "Diagnoza logopedyczna",
    price: 300,
    currency: "zł",
    description: "2 spotkania: 1 z rodzicem, drugie z dzieckiem",
    category: "diagnoza",
  },
  {
    id: "diagnoza-psychologiczna",
    name: "Diagnoza psychologiczna",
    price: "700-1000",
    currency: "zł",
    description: "w zależności od zakresu diagnozy i ilości spotkań",
    category: "diagnoza",
  },
  {
    id: "opinia-logopedyczna",
    name: "Wydanie opinii logopedycznej",
    price: 150,
    currency: "zł",
    description: "usługa dodatkowo płatna",
    category: "diagnoza",
  },
  {
    id: "terapia-logopedyczna",
    name: "Terapia logopedyczna",
    price: 200,
    currency: "zł",
    category: "terapia",
  },
  {
    id: "rediagnoza-logopedyczna",
    name: "Rediagnoza logopedyczna",
    price: 200,
    currency: "zł",
    category: "terapia",
  },
  {
    id: "terapia-si",
    name: "Terapia SI",
    price: 200,
    currency: "zł",
    category: "terapia",
  },
  {
    id: "konsultacja-psychologa",
    name: "Konsultacja psychologa",
    price: 220,
    currency: "zł",
    category: "terapia",
  },
];

// Helper function to format price
export function formatPrice(
  price: number | string,
  currency: string = "zł"
): string {
  return `${price} ${currency}`;
}

// Get prices by category
export function getPricesByCategory(category: PriceItem["category"]): PriceItem[] {
  return prices.filter((item) => item.category === category);
}

// Get price by id
export function getPriceById(id: string): PriceItem | undefined {
  return prices.find((item) => item.id === id);
}
