import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umów wizytę",
  description:
    "Umów wizytę w Polanie Przygody - Centrum Rozwoju Dziecka we Wrocławiu. Logopedia i terapia SI. Kontakt: 790 512 258, ul. Białowieska 69B.",
  keywords: [
    "umów wizytę logopeda Wrocław",
    "kontakt logopeda",
    "rejestracja terapia SI",
    "Białowieska 69B Wrocław",
  ],
  openGraph: {
    title: "Umów wizytę | Polana Przygody",
    description:
      "Umów wizytę w Polanie Przygody. Logopedia i terapia SI we Wrocławiu. Tel: 790 512 258.",
    images: ["/images/gabinety/poczekalnia.png"],
  },
  alternates: {
    canonical: "https://polanaprzygody.pl/umow-sie",
  },
};

export default function UmowSieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

