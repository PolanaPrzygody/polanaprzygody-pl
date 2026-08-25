import type { Metadata } from "next";

export const SITE_URL = "https://polanaprzygody.pl";

export const siteConfig = {
  name: "Polana Przygody",
  legalName: "Polana Przygody - Centrum Rozwoju Dziecka",
  description:
    "Centrum Rozwoju Dziecka we Wrocławiu oferujące logopedię, neurologopedię, terapię integracji sensorycznej, pomoc psychologiczną i TUS dla dzieci.",
  phone: "+48790512258",
  phoneDisplay: "790 512 258",
  email: "info@polanaprzygody.pl",
  streetAddress: "ul. Białowieska 69B",
  postalCode: "54-234",
  city: "Wrocław",
  instagram: "https://www.instagram.com/polanaprzygody/",
} as const;

type JsonLdValue = Record<string, unknown> | Record<string, unknown>[];

export function JsonLd({ data }: { data: JsonLdValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: siteConfig.name,
      alternateName: siteConfig.legalName,
      inLanguage: "pl-PL",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      description: siteConfig.description,
      url: SITE_URL,
      logo: `${SITE_URL}/logo-polana.svg`,
      image: [
        `${SITE_URL}/images/gabinety/galeria/poczekalnia1.jpg`,
        `${SITE_URL}/images/gabinety/galeria/gabinet-logopedy.jpg`,
        `${SITE_URL}/images/gabinety/galeria/sala-si-4.jpg`,
      ],
      telephone: siteConfig.phone,
      email: siteConfig.email,
      priceRange: "120-1000 PLN",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Białowieska 69B",
        addressLocality: siteConfig.city,
        postalCode: siteConfig.postalCode,
        addressCountry: "PL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.1303177,
        longitude: 16.9905263,
      },
      hasMap:
        "https://www.google.com/maps/search/?api=1&query=Bia%C5%82owieska%2069B%2C%2054-234%20Wroc%C5%82aw",
      areaServed: {
        "@type": "City",
        name: siteConfig.city,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: "customer service",
        availableLanguage: "Polish",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "14:00",
        },
      ],
      availableService: [
        {
          "@type": "Service",
          "@id": `${SITE_URL}/logopedia#service`,
          name: "Logopedia i neurologopedia dla dzieci",
          url: `${SITE_URL}/logopedia`,
        },
        {
          "@type": "Service",
          "@id": `${SITE_URL}/integracja-sensoryczna#service`,
          name: "Diagnoza i terapia integracji sensorycznej",
          url: `${SITE_URL}/integracja-sensoryczna`,
        },
        {
          "@type": "Service",
          "@id": `${SITE_URL}/psycholog-dzieciecy#service`,
          name: "Psycholog dziecięcy",
          url: `${SITE_URL}/psycholog-dzieciecy`,
        },
        {
          "@type": "Service",
          "@id": `${SITE_URL}/trening-umiejetnosci-spolecznych#service`,
          name: "Trening Umiejętności Społecznych (TUS)",
          url: `${SITE_URL}/trening-umiejetnosci-spolecznych`,
        },
      ],
      sameAs: [siteConfig.instagram],
    },
  ],
};

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function createServiceJsonLd({
  path,
  name,
  description,
  offers,
}: {
  path: string;
  name: string;
  description: string;
  offers: Array<{
    name: string;
    price?: number;
    lowPrice?: number;
    highPrice?: number;
  }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: "pl-PL",
    serviceType: name,
    areaServed: { "@type": "City", name: siteConfig.city },
    provider: { "@id": `${SITE_URL}/#organization` },
    offers: offers.map((offer) =>
      offer.price !== undefined
        ? {
            "@type": "Offer",
            name: offer.name,
            price: offer.price,
            priceCurrency: "PLN",
            url: `${SITE_URL}${path}`,
            availability: "https://schema.org/InStock",
          }
        : {
            "@type": "AggregateOffer",
            name: offer.name,
            lowPrice: offer.lowPrice,
            highPrice: offer.highPrice,
            priceCurrency: "PLN",
            offerCount: 1,
            url: `${SITE_URL}${path}`,
          },
    ),
  };
}

export function createFaqJsonLd(
  questions: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createServiceMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  keywords: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Polana Przygody`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "pl_PL",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Polana Przygody`,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}
