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
    images: ["/images/gabinety/gabinet-logopedy-1.png"],
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
