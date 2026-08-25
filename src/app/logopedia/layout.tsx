import type { Metadata } from "next";
import {
  JsonLd,
  SITE_URL,
  createBreadcrumbJsonLd,
  createFaqJsonLd,
  createServiceJsonLd,
} from "@/lib/seo";
import { logopediaFaq } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Logopeda i neurologopeda dla dzieci we Wrocławiu",
  description:
    "Profesjonalna terapia logopedyczna i neurologopedyczna dla dzieci we Wrocławiu. Doświadczeni logopedzi i neurologopedzi, diagnoza i terapia zaburzeń mowy. Umów wizytę już dziś!",
  keywords: [
    "logopeda Wrocław",
    "neurologopeda Wrocław",
    "logopedia dzieci",
    "neurologopedia dzieci",
    "terapia logopedyczna",
    "diagnoza logopedyczna",
    "wady wymowy",
    "opóźniony rozwój mowy",
    "logopeda dla dzieci Wrocław",
    "neurologopeda dla dzieci Wrocław",
    "Polana Przygody",
  ],
  openGraph: {
    title: "Logopeda i neurologopeda dla dzieci | Polana Przygody",
    description:
      "Diagnoza i terapia logopedyczna oraz neurologopedyczna dla dzieci we Wrocławiu.",
    url: "https://polanaprzygody.pl/logopedia",
    siteName: "Polana Przygody",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/social/og-logopedia.jpg",
        width: 1200,
        height: 630,
        alt: "Logopeda i neurologopeda dla dzieci w Polanie Przygody",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logopeda i neurologopeda dla dzieci | Polana Przygody",
    description:
      "Diagnoza i terapia logopedyczna oraz neurologopedyczna dla dzieci we Wrocławiu.",
    images: ["/images/social/og-logopedia.jpg"],
  },
  alternates: {
    canonical: "https://polanaprzygody.pl/logopedia",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const serviceJsonLd = createServiceJsonLd({
  path: "/logopedia",
  name: "Logopedia i neurologopedia dla dzieci",
  description:
    "Diagnoza i terapia logopedyczna oraz neurologopedyczna dla dzieci we Wrocławiu.",
  offers: [
    { name: "Diagnoza logopedyczna - 2 spotkania", price: 300 },
    { name: "Terapia logopedyczna", price: 200 },
    { name: "Rediagnoza logopedyczna", price: 200 },
    { name: "Wydanie opinii logopedycznej", price: 150 },
  ],
});

const therapistsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Logopedzi i neurologopedzi w Polanie Przygody",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Person",
        "@id": `${SITE_URL}/terapeuci#katarzyna-karwatka`,
        name: "Katarzyna Karwatka",
        jobTitle: "Logopeda",
        worksFor: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Person",
        "@id": `${SITE_URL}/terapeuci#magdalena-wawrzycka`,
        name: "Magdalena Wawrzycka",
        jobTitle: "Logopeda, neurologopeda",
        worksFor: { "@id": `${SITE_URL}/#organization` },
      },
    },
  ],
};

export default function LogopediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={therapistsJsonLd} />
      <JsonLd data={createFaqJsonLd([...logopediaFaq])} />
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Strona główna", path: "/" },
          { name: "Usługi", path: "/uslugi" },
          { name: "Logopedia i neurologopedia", path: "/logopedia" },
        ])}
      />
      {children}
    </>
  );
}
