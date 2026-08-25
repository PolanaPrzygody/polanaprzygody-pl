import { Metadata } from "next";
import { JsonLd, SITE_URL, createBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Umów wizytę",
  description:
    "Umów wizytę w Polanie Przygody - Centrum Rozwoju Dziecka we Wrocławiu. Logopedia i terapia SI. Kontakt: 790 512 258, ul. Białowieska 69B.",
  keywords: [
    "umów wizytę logopeda Wrocław",
    "kontakt logopeda",
    "rejestracja terapia SI",
    "Białowieska 69B Wrocław",
  ],
  openGraph: {
    title: "Umów wizytę | Polana Przygody",
    description:
      "Umów wizytę w Polanie Przygody. Logopedia i terapia SI we Wrocławiu. Tel: 790 512 258.",
    url: "https://polanaprzygody.pl/umow-sie",
    siteName: "Polana Przygody",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/social/og-kontakt.jpg",
        width: 1200,
        height: 630,
        alt: "Umów wizytę w Polanie Przygody we Wrocławiu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umów wizytę | Polana Przygody",
    description:
      "Skontaktuj się z Polaną Przygody i umów wizytę we Wrocławiu.",
    images: ["/images/social/og-kontakt.jpg"],
  },
  alternates: {
    canonical: "https://polanaprzygody.pl/umow-sie",
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/umow-sie#webpage`,
  url: `${SITE_URL}/umow-sie`,
  name: "Umów wizytę w Polanie Przygody",
  about: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "pl-PL",
};

export default function UmowSieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={contactPageJsonLd} />
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Strona główna", path: "/" },
          { name: "Umów wizytę", path: "/umow-sie" },
        ])}
      />
      {children}
    </>
  );
}
