import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Polana Przygody | Centrum Rozwoju Dziecka",
  description:
    "Centrum Rozwoju Dziecka we Wrocławiu. Logopedia, terapia integracji sensorycznej i wsparcie rozwoju dzieci w przyjaznej atmosferze.",
  keywords: [
    "logopeda",
    "Wrocław",
    "terapia",
    "dzieci",
    "integracja sensoryczna",
    "rozwój dziecka",
  ],
  authors: [{ name: "Polana Przygody" }],
  openGraph: {
    title: "Polana Przygody | Centrum Rozwoju Dziecka",
    description:
      "Centrum Rozwoju Dziecka we Wrocławiu. Logopedia, terapia integracji sensorycznej i wsparcie rozwoju dzieci.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={jost.variable}>
      <body className="font-body bg-polana-straw text-polana-dark-green antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

