import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności i regulamin serwisu",
  description:
    "Polityka prywatności i regulamin serwisu Polana Przygody - Centrum Rozwoju Dziecka. Dowiedz się jak przetwarzamy Twoje dane osobowe i poznaj zasady korzystania z serwisu.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://polanaprzygody.pl/polityka-prywatnosci",
  },
};

export default function PolitykaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

