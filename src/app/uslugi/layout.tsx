import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usługi - Logopedia i Terapia SI",
  description:
    "Profesjonalna logopedia i terapia integracji sensorycznej dla dzieci we Wrocławiu. Diagnoza, terapia wad wymowy, terapia SI, konsultacje dla rodziców.",
  keywords: [
    "logopedia Wrocław",
    "terapia integracji sensorycznej",
    "terapia SI",
    "wady wymowy",
    "opóźniony rozwój mowy",
    "diagnoza logopedyczna",
  ],
  openGraph: {
    title: "Usługi - Logopedia i Terapia SI | Polana Przygody",
    description:
      "Profesjonalna logopedia i terapia integracji sensorycznej dla dzieci we Wrocławiu.",
    images: ["/images/gabinety/gabinet-logopedy-1.png"],
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

