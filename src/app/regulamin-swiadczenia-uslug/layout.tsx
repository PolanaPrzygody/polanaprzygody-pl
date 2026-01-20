import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin świadczenia usług",
  description:
    "Regulamin świadczenia usług Centrum Rozwoju Dziecka Polana Przygody.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://polanaprzygody.pl/regulamin-swiadczenia-uslug",
  },
};

export default function RegulaminUslugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
