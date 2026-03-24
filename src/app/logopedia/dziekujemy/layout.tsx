import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dziękujemy za kontakt | Polana Przygody",
  description: "Dziękujemy za przesłanie formularza. Skontaktujemy się z Tobą jak najszybciej.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DziekujemyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
