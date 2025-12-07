import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poznaj nas",
  description:
    "Poznaj Polanę Przygody - Centrum Rozwoju Dziecka we Wrocławiu. Dowiedz się o naszej historii, wartościach i zobacz nasze przestrzenie terapeutyczne.",
  openGraph: {
    title: "Poznaj nas | Polana Przygody",
    description:
      "Poznaj Polanę Przygody - Centrum Rozwoju Dziecka we Wrocławiu. Dowiedz się o naszej historii i zobacz nasze gabinety.",
    images: ["/images/gabinety/poczekalnia.png"],
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

