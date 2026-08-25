import { Metadata } from "next";

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

export default function TerapeuciLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
