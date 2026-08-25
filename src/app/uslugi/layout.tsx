import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usługi - Logopedia, Terapia SI i TUS",
  description:
    "Profesjonalna logopedia, terapia integracji sensorycznej i Trening Umiejętności Społecznych (TUS) dla dzieci we Wrocławiu.",
  keywords: [
    "logopedia Wrocław",
    "terapia integracji sensorycznej",
    "terapia SI",
    "wady wymowy",
    "opóźniony rozwój mowy",
    "diagnoza logopedyczna",
    "Trening Umiejętności Społecznych Wrocław",
    "TUS dla dzieci",
  ],
  openGraph: {
    title: "Usługi - Logopedia, Terapia SI i TUS | Polana Przygody",
    description:
      "Profesjonalna logopedia, terapia integracji sensorycznej i TUS dla dzieci we Wrocławiu.",
    url: "https://polanaprzygody.pl/uslugi",
    type: "website",
    images: [
      {
        url: "/images/social/og-uslugi.jpg",
        width: 1200,
        height: 630,
        alt: "Usługi terapeutyczne dla dzieci w Polanie Przygody",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Usługi - Logopedia, Terapia SI i TUS | Polana Przygody",
    description:
      "Profesjonalna logopedia, terapia integracji sensorycznej i TUS dla dzieci we Wrocławiu.",
    images: ["/images/social/og-uslugi.jpg"],
  },
  alternates: {
    canonical: "https://polanaprzygody.pl/uslugi",
  },
};

export default function UslugiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
