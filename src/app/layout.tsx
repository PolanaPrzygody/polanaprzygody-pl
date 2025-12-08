import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const GA_MEASUREMENT_ID = "G-SBF32BY88T";

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://polanaprzygody.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Polana Przygody | Centrum Rozwoju Dziecka Wrocław",
    template: "%s | Polana Przygody",
  },
  description:
    "Centrum Rozwoju Dziecka we Wrocławiu. Profesjonalna logopedia, terapia integracji sensorycznej SI i wsparcie rozwoju dzieci w przyjaznej atmosferze. Umów wizytę!",
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
        url: "/images/gabinety/poczekalnia.png",
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
    images: ["/images/gabinety/poczekalnia.png"],
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

// Structured data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://polanaprzygody.pl",
  name: "Polana Przygody - Centrum Rozwoju Dziecka",
  description:
    "Centrum Rozwoju Dziecka we Wrocławiu oferujące profesjonalną logopedię i terapię integracji sensorycznej dla dzieci.",
  url: "https://polanaprzygody.pl",
  telephone: "+48790512258",
  email: "info@polanaprzygody.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Białowieska 69B",
    addressLocality: "Wrocław",
    postalCode: "54-234",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "51.1079",
    longitude: "17.0385",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  image: "https://polanaprzygody.pl/images/gabinety/poczekalnia.png",
  priceRange: "$$",
  medicalSpecialty: ["Speech-Language Pathology", "Pediatric Therapy"],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Logopedia",
      description: "Profesjonalna diagnoza i terapia zaburzeń mowy u dzieci",
    },
    {
      "@type": "MedicalTherapy",
      name: "Terapia Integracji Sensorycznej",
      description: "Terapia SI wspierająca prawidłowy rozwój zmysłów i koordynacji",
    },
  ],
  sameAs: ["https://www.instagram.com/polanaprzygody/"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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

