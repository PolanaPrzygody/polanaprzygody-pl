import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd, organizationJsonLd } from "@/lib/seo";

const GA_MEASUREMENT_ID = "G-SBF32BY88T";

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://polanaprzygody.pl";

export const viewport: Viewport = {
  themeColor: "#2A5C47",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  title: {
    default: "Polana Przygody | Centrum Rozwoju Dziecka Wrocław",
    template: "%s | Polana Przygody",
  },
  description:
    "Centrum Rozwoju Dziecka we Wrocławiu. Profesjonalna logopedia, terapia integracji sensorycznej SI, TUS i wsparcie rozwoju dzieci w przyjaznej atmosferze. Umów wizytę!",
  keywords: [
    "logopeda Wrocław",
    "logopedia Wrocław",
    "terapia integracji sensorycznej",
    "terapia SI Wrocław",
    "centrum rozwoju dziecka",
    "rozwój mowy dziecka",
    "opóźniony rozwój mowy",
    "wady wymowy",
    "terapeuta SI",
    "Trening Umiejętności Społecznych Wrocław",
    "TUS dla dzieci",
    "logopeda dla dzieci",
    "rehabilitacja dzieci Wrocław",
    "Białowieska Wrocław",
  ],
  authors: [{ name: "Polana Przygody" }],
  creator: "Polana Przygody",
  publisher: "Polana Przygody",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Polana Przygody | Centrum Rozwoju Dziecka Wrocław",
    description:
      "Profesjonalna logopedia i terapia integracji sensorycznej dla dzieci we Wrocławiu. Przyjazna atmosfera, doświadczony zespół. Umów wizytę!",
    url: siteUrl,
    siteName: "Polana Przygody",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/social/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Polana Przygody - Centrum Rozwoju Dziecka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polana Przygody | Centrum Rozwoju Dziecka Wrocław",
    description:
      "Profesjonalna logopedia i terapia integracji sensorycznej dla dzieci we Wrocławiu.",
    images: ["/images/social/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={jost.variable}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <JsonLd data={organizationJsonLd} />
      </head>
      <body className="font-body bg-polana-straw text-polana-dark-green antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
