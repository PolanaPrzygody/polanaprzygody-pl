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
    images: ["/images/terapeuci/kasia.jpeg"],
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

