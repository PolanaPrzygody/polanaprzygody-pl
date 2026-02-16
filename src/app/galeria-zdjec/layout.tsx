import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria zdjęć",
  description:
    "Galeria zdjęć Polany Przygody we Wrocławiu. Zobacz nasze gabinety, sale terapeutyczne i przyjazną przestrzeń dla dzieci.",
  openGraph: {
    title: "Galeria zdjęć | Polana Przygody",
    description:
      "Zobacz galerię zdjęć Polany Przygody - gabinety, sale SI i przestrzeń terapeutyczną dla dzieci.",
    images: ["/images/gabinety/galeria/poczekalnia1.jpg"],
  },
  alternates: {
    canonical: "https://polanaprzygody.pl/galeria-zdjec",
  },
};

export default function GaleriaZdjecLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
