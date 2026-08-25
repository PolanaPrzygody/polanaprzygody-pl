import { Metadata } from "next";
import { JsonLd, SITE_URL, createBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terapeuci - Nasz Zespół",
  description:
    "Poznaj zespół doświadczonych specjalistów Polany Przygody. Logopedzi i terapeuci integracji sensorycznej z pasją do pracy z dziećmi.",
  keywords: [
    "logopeda Wrocław",
    "terapeuta SI Wrocław",
    "specjalista integracji sensorycznej",
    "logopeda dla dzieci",
  ],
  openGraph: {
    title: "Terapeuci - Nasz Zespół | Polana Przygody",
    description:
      "Poznaj zespół doświadczonych logopedów i terapeutów SI w Polanie Przygody.",
    url: "https://polanaprzygody.pl/terapeuci",
    siteName: "Polana Przygody",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/social/og-terapeuci.jpg",
        width: 1200,
        height: 630,
        alt: "Zespół terapeutów Polany Przygody",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapeuci - Nasz Zespół | Polana Przygody",
    description:
      "Poznaj doświadczonych logopedów i terapeutów integracji sensorycznej.",
    images: ["/images/social/og-terapeuci.jpg"],
  },
  alternates: {
    canonical: "https://polanaprzygody.pl/terapeuci",
  },
};

const peopleJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Zespół Polany Przygody",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Person",
        "@id": `${SITE_URL}/terapeuci#katarzyna-karwatka`,
        name: "Katarzyna Karwatka",
        image: `${SITE_URL}/images/terapeuci/kasia.jpeg`,
        jobTitle: "Logopeda, założycielka Polany Przygody",
        knowsAbout: ["Logopedia", "Dyslalia", "Dyspraksja", "Rozwój mowy"],
        worksFor: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Person",
        "@id": `${SITE_URL}/terapeuci#weronika-saczewska`,
        name: "Weronika Saczewska",
        image: `${SITE_URL}/images/terapeuci/weronika.jpg`,
        jobTitle: "Terapeutka integracji sensorycznej",
        knowsAbout: ["Integracja sensoryczna", "TUS", "Biofeedback"],
        worksFor: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Person",
        "@id": `${SITE_URL}/terapeuci#magdalena-wawrzycka`,
        name: "Magdalena Wawrzycka",
        image: `${SITE_URL}/images/terapeuci/magda.jpeg`,
        jobTitle: "Logopeda, neurologopeda",
        knowsAbout: ["Logopedia kliniczna", "Terapia miofunkcjonalna", "Neurologopedia"],
        worksFor: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Person",
        "@id": `${SITE_URL}/terapeuci#anna-kuczkowska-pluta`,
        name: "Anna Kuczkowska-Pluta",
        image: `${SITE_URL}/images/terapeuci/ania.jpeg`,
        jobTitle: "Psycholożka, psychoterapeutka w trakcie szkolenia",
        knowsAbout: ["Psychologia dzieci i młodzieży", "Psychoterapia rodzinna", "TUS"],
        worksFor: { "@id": `${SITE_URL}/#organization` },
      },
    },
  ],
};

export default function TerapeuciLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={peopleJsonLd} />
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Strona główna", path: "/" },
          { name: "Terapeuci", path: "/terapeuci" },
        ])}
      />
      {children}
    </>
  );
}
