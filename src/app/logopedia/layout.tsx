import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logopeda i Neurologopeda dla dzieci | Polana Przygody - Wrocław",
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
  robots: {
    index: false,
    follow: false,
  },
};

export default function LogopediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
