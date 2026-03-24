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
