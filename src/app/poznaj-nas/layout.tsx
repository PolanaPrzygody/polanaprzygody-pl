import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poznaj nas",
  description:
    "Poznaj Polanę Przygody - Centrum Rozwoju Dziecka we Wrocławiu. Dowiedz się o naszej historii, wartościach i zobacz nasze przestrzenie terapeutyczne.",
  openGraph: {
    title: "Poznaj nas | Polana Przygody",
    description:
      "Poznaj Polanę Przygody - Centrum Rozwoju Dziecka we Wrocławiu. Dowiedz się o naszej historii i zobacz nasze gabinety.",
    url: "https://polanaprzygody.pl/poznaj-nas",
    type: "website",
    images: [
      {
        url: "/images/social/og-poznaj-nas.jpg",
        width: 1200,
        height: 630,
        alt: "Poznaj Polanę Przygody - Centrum Rozwoju Dziecka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poznaj nas | Polana Przygody",
    description:
      "Poznaj nasze centrum, wartości i przyjazną przestrzeń terapeutyczną we Wrocławiu.",
    images: ["/images/social/og-poznaj-nas.jpg"],
  },
  alternates: {
    canonical: "https://polanaprzygody.pl/poznaj-nas",
  },
};

export default function PoznajNasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
