import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria zdjęć",
  description:
    "Galeria zdjęć Polany Przygody we Wrocławiu. Zobacz nasze gabinety, sale terapeutyczne i przyjazną przestrzeń dla dzieci.",
  openGraph: {
    title: "Galeria zdjęć | Polana Przygody",
    description:
      "Zobacz galerię zdjęć Polany Przygody - gabinety, sale SI i przestrzeń terapeutyczną dla dzieci.",
    url: "https://polanaprzygody.pl/galeria-zdjec",
    type: "website",
    images: [
      {
        url: "/images/social/og-galeria.jpg",
        width: 1200,
        height: 630,
        alt: "Gabinety i sale terapeutyczne Polany Przygody",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeria zdjęć | Polana Przygody",
    description:
      "Zobacz nasze gabinety, sale SI i przyjazną przestrzeń terapeutyczną.",
    images: ["/images/social/og-galeria.jpg"],
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
