import { ServiceLandingPage, type ServiceLandingData } from "@/components/ServiceLandingPage";
import {
  JsonLd,
  createBreadcrumbJsonLd,
  createFaqJsonLd,
  createServiceJsonLd,
  createServiceMetadata,
} from "@/lib/seo";

const path = "/trening-umiejetnosci-spolecznych";

const data: ServiceLandingData = {
  slug: "trening-umiejetnosci-spolecznych",
  eyebrow: "Trening Umiejętności Społecznych",
  title: "TUS dla dzieci",
  titleAccent: "we Wrocławiu",
  lead:
    "Trening Umiejętności Społecznych w Polanie Przygody to 60-minutowe zajęcia prowadzone przez dwie terapeutki w grupach do sześciu osób. Prowadzimy grupę przedszkolną 4-7 lat i szkolną 8-12 lat.",
  image: "/images/gabinety/galeria/terapeutki.jpg",
  imageAlt: "Terapeutki prowadzące zajęcia dla dzieci w Polanie Przygody",
  facts: [
    { label: "Cena", value: "120 zł / 60 minut" },
    { label: "Wielkość grupy", value: "Do 6 dzieci" },
    { label: "Grupy", value: "4-7 oraz 8-12 lat" },
    { label: "Termin", value: "Wtorki, 16:00 i 17:00" },
  ],
  consultationTitle: "Dla kogo są zajęcia TUS?",
  consultationLead:
    "TUS pomaga ćwiczyć konkretne umiejętności potrzebne w relacjach i codziennych sytuacjach społecznych. Przed zapisem ustalamy, czy dostępna grupa jest odpowiednia dla wieku i potrzeb dziecka.",
  consultationPoints: [
    "Dziecko chce łatwiej nawiązywać i podtrzymywać relacje z rówieśnikami.",
    "Potrzebuje ćwiczyć komunikację, współpracę lub zachowanie w grupie.",
    "Ma trudność z rozpoznawaniem i wyrażaniem emocji.",
    "Chce rozwijać sposoby radzenia sobie w codziennych sytuacjach społecznych.",
  ],
  scopeTitle: "Co ćwiczymy podczas TUS?",
  scope: [
    "Komunikowanie potrzeb i słuchanie innych osób.",
    "Współpracę, czekanie na swoją kolej i respektowanie zasad grupy.",
    "Rozpoznawanie, nazywanie i wyrażanie emocji.",
    "Reagowanie na nieporozumienia oraz sytuacje trudne.",
    "Budowanie pewności w kontaktach z rówieśnikami.",
  ],
  prices: [
    {
      name: "Trening Umiejętności Społecznych",
      value: "120 zł",
      description: "60 minut zajęć w grupie do sześciu dzieci, prowadzonej przez dwie terapeutki.",
    },
  ],
  process: [
    {
      title: "Kontakt z rodzicem",
      description: "Poznajemy potrzeby dziecka i sprawdzamy dostępność odpowiedniej grupy wiekowej.",
    },
    {
      title: "Dobór grupy",
      description: "Dopasowujemy dziecko do grupy 4-7 lub 8-12 lat, uwzględniając jej aktualny skład.",
    },
    {
      title: "Regularne spotkania",
      description: "Zajęcia odbywają się we wtorki, trwają 60 minut i prowadzą je dwie terapeutki.",
    },
    {
      title: "Informacja dla rodzica",
      description: "Rodzic otrzymuje informacje wspierające utrwalanie ćwiczonych umiejętności na co dzień.",
    },
  ],
  faq: [
    {
      question: "Ile osób jest w grupie TUS?",
      answer:
        "Grupy w Polanie Przygody liczą maksymalnie sześć dzieci. Każde spotkanie prowadzą dwie terapeutki.",
    },
    {
      question: "Ile trwa i kosztuje jedno spotkanie?",
      answer:
        "Jedno spotkanie TUS trwa 60 minut i kosztuje 120 zł.",
    },
    {
      question: "Dla jakiego wieku są grupy?",
      answer:
        "Prowadzimy grupę przedszkolną dla dzieci w wieku 4-7 lat oraz grupę szkolną dla dzieci w wieku 8-12 lat.",
    },
    {
      question: "Kiedy odbywają się zajęcia TUS?",
      answer:
        "Zajęcia odbywają się we wtorki. Grupa 4-7 lat spotyka się o 16:00, a grupa 8-12 lat o 17:00. Dostępność miejsc warto potwierdzić przed zapisem.",
    },
    {
      question: "Gdzie odbywa się TUS?",
      answer:
        "Zajęcia odbywają się w Polanie Przygody przy ul. Białowieskiej 69B, 54-234 Wrocław.",
    },
  ],
  related: [
    { label: "Psycholog dziecięcy", href: "/psycholog-dzieciecy" },
    { label: "Integracja sensoryczna", href: "/integracja-sensoryczna" },
    { label: "Logopeda i neurologopeda", href: "/logopedia" },
    { label: "Pełny cennik", href: "/cennik" },
  ],
};

export const metadata = createServiceMetadata({
  title: "TUS dla dzieci we Wrocławiu",
  description:
    "Trening Umiejętności Społecznych (TUS) dla dzieci we Wrocławiu: grupy 4-7 i 8-12 lat, do 6 osób, 60 minut, 120 zł. Zajęcia we wtorki.",
  path,
  image: "/images/social/og-tus.jpg",
  imageAlt: "Trening Umiejętności Społecznych dla dzieci w Polanie Przygody",
  keywords: [
    "TUS Wrocław",
    "Trening Umiejętności Społecznych Wrocław",
    "TUS dla dzieci Wrocław",
    "zajęcia społeczne dla dzieci",
  ],
});

export default function TreningUmiejetnosciSpolecznychPage() {
  return (
    <>
      <JsonLd
        data={createServiceJsonLd({
          path,
          name: "Trening Umiejętności Społecznych (TUS) dla dzieci",
          description: metadata.description ?? "",
          offers: [{ name: "Zajęcia grupowe TUS - 60 minut", price: 120 }],
        })}
      />
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Strona główna", path: "/" },
          { name: "Usługi", path: "/uslugi" },
          { name: "Trening Umiejętności Społecznych", path },
        ])}
      />
      <JsonLd data={createFaqJsonLd(data.faq)} />
      <ServiceLandingPage data={data} />
    </>
  );
}
