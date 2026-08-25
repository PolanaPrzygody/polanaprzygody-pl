import { Metadata } from "next";

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

export default function CennikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
