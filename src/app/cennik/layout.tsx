import { Metadata } from "next";
import { JsonLd, SITE_URL, createBreadcrumbJsonLd } from "@/lib/seo";
import { prices } from "@/data/prices";

export const metadata: Metadata = {
  title: "Cennik - Ceny usług terapeutycznych",
  description:
    "Cennik usług terapeutycznych w Polanie Przygody. Logopedia, terapia integracji sensorycznej, TUS oraz diagnoza SI i logopedyczna we Wrocławiu.",
  keywords: [
    "cennik logopeda Wrocław",
    "cena terapia SI",
    "koszt diagnozy logopedycznej",
    "cennik terapii integracji sensorycznej",
    "cena TUS Wrocław",
  ],
  openGraph: {
    title: "Cennik - Ceny usług terapeutycznych | Polana Przygody",
    description:
      "Cennik usług terapeutycznych w Polanie Przygody. Logopedia, terapia integracji sensorycznej, TUS i diagnoza SI.",
    url: "https://polanaprzygody.pl/cennik",
    siteName: "Polana Przygody",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/social/og-cennik.jpg",
        width: 1200,
        height: 630,
        alt: "Cennik usług terapeutycznych Polany Przygody",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cennik usług terapeutycznych | Polana Przygody",
    description:
      "Sprawdź ceny logopedii, terapii SI, TUS i diagnoz w Polanie Przygody.",
    images: ["/images/social/og-cennik.jpg"],
  },
  alternates: {
    canonical: "https://polanaprzygody.pl/cennik",
  },
};

const priceListJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Cennik usług Polany Przygody",
  url: `${SITE_URL}/cennik`,
  itemListElement: prices.map((item) => ({
    "@type": "Offer",
    name: item.name,
    description:
      [item.description, item.note].filter(Boolean).join(". ") || undefined,
    price: typeof item.price === "number" ? item.price : undefined,
    priceSpecification:
      typeof item.price === "string"
        ? {
            "@type": "PriceSpecification",
            minPrice: Number(item.price.split("-")[0]),
            maxPrice: Number(item.price.split("-")[1]),
            priceCurrency: "PLN",
          }
        : undefined,
    priceCurrency: "PLN",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/cennik`,
    itemOffered: { "@type": "Service", name: item.name },
  })),
};

export default function CennikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={priceListJsonLd} />
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Strona główna", path: "/" },
          { name: "Cennik", path: "/cennik" },
        ])}
      />
      {children}
    </>
  );
}
