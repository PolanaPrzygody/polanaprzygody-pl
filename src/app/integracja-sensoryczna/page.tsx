import { ServiceLandingPage, type ServiceLandingData } from "@/components/ServiceLandingPage";
import {
  JsonLd,
  createBreadcrumbJsonLd,
  createFaqJsonLd,
  createServiceJsonLd,
  createServiceMetadata,
} from "@/lib/seo";
import { serviceContactSubjects } from "@/lib/contact";

const path = "/integracja-sensoryczna";

const data: ServiceLandingData = {
  slug: "integracja-sensoryczna",
  subjectId: serviceContactSubjects["integracja-sensoryczna"],
  eyebrow: "Integracja sensoryczna",
  title: "Integracja sensoryczna dla dzieci",
  titleAccent: "we Wrocławiu",
  lead:
    "W Polanie Przygody prowadzimy diagnozę procesów integracji sensorycznej i indywidualną terapię SI. Zajęcia odbywają się w wyposażonej sali przy ul. Białowieskiej 69B we Wrocławiu.",
  image: "/images/gabinety/galeria/sala-si-4.jpg",
  imageAlt: "Wyposażona sala terapii integracji sensorycznej w Polanie Przygody",
  facts: [
    { label: "Diagnoza SI", value: "750 zł / 4 spotkania" },
    { label: "Terapia SI", value: "200 zł / spotkanie" },
    { label: "Forma", value: "Zajęcia indywidualne" },
    { label: "Miejsce", value: "Białowieska 69B, Wrocław" },
  ],
  consultationTitle: "Kiedy warto skonsultować dziecko?",
  consultationLead:
    "Konsultacja pomaga uporządkować obserwacje rodziców i ocenić, czy potrzebna jest pełna diagnoza SI. Sam pojedynczy objaw nie przesądza o trudnościach integracji sensorycznej.",
  consultationPoints: [
    "Dziecko ma trudność z koncentracją lub organizacją aktywności.",
    "Reaguje wyjątkowo silnie albo bardzo słabo na dotyk, ruch, dźwięki lub inne bodźce.",
    "Ma trudności z koordynacją ruchową, równowagą albo planowaniem ruchu.",
    "Rodzice lub nauczyciele obserwują zachowania, które utrudniają dziecku codzienne funkcjonowanie.",
  ],
  scopeTitle: "Co obejmuje wsparcie SI?",
  scope: [
    "Wywiad z rodzicem i obserwację funkcjonowania dziecka.",
    "Diagnozę procesów integracji sensorycznej obejmującą cztery spotkania.",
    "Omówienie wyników i zaleceń dla rodziców.",
    "Ćwiczenia wykorzystujące ruch, równowagę, propriocepcję i bodźce dotykowe.",
    "Indywidualny plan zajęć dopasowany do potrzeb dziecka.",
  ],
  prices: [
    {
      name: "Diagnoza integracji sensorycznej",
      value: "750 zł",
      description:
        "4 spotkania: wywiad z rodzicem, dwa spotkania z dzieckiem, omówienie diagnozy z rodzicem.",
    },
    {
      name: "Terapia integracji sensorycznej",
      value: "200 zł",
      description: "Jedno indywidualne spotkanie terapeutyczne.",
    },
  ],
  process: [
    {
      title: "Pierwszy kontakt",
      description: "Rozmawiamy o obserwowanych trudnościach i ustalamy termin konsultacji.",
    },
    {
      title: "Diagnoza",
      description:
        "Cztery spotkania: wywiad z rodzicem, dwa spotkania z dzieckiem i omówienie diagnozy z rodzicem. Koszt: 750 zł.",
    },
    {
      title: "Omówienie",
      description: "Rodzic otrzymuje omówienie wyników oraz zalecenia do dalszego postępowania.",
    },
    {
      title: "Terapia",
      description: "Jeśli jest wskazana, rozpoczynamy regularne, indywidualne zajęcia SI.",
    },
  ],
  faq: [
    {
      question: "Co to jest integracja sensoryczna?",
      answer:
        "Integracja sensoryczna to sposób, w jaki układ nerwowy odbiera, porządkuje i wykorzystuje informacje płynące ze zmysłów. Terapia SI wykorzystuje odpowiednio dobrane aktywności ruchowe i sensoryczne.",
    },
    {
      question: "Ile spotkań obejmuje diagnoza SI?",
      answer:
        "W Polanie Przygody diagnoza integracji sensorycznej obejmuje cztery spotkania i kosztuje 750 zł: wywiad z rodzicem, dwa spotkania z dzieckiem oraz omówienie diagnozy z rodzicem.",
    },
    {
      question: "Ile kosztuje terapia integracji sensorycznej?",
      answer:
        "Jedno spotkanie terapii SI kosztuje 200 zł. Częstotliwość zajęć jest ustalana indywidualnie po konsultacji lub diagnozie.",
    },
    {
      question: "Czy każde aktywne lub wrażliwe dziecko potrzebuje terapii SI?",
      answer:
        "Nie. Pojedyncze zachowanie nie jest podstawą do rozpoczęcia terapii. Decyzja powinna wynikać z całościowej oceny funkcjonowania dziecka i wpływu trudności na codzienne życie.",
    },
    {
      question: "Gdzie odbywają się zajęcia SI?",
      answer:
        "Diagnoza i terapia odbywają się w Polanie Przygody przy ul. Białowieskiej 69B, 54-234 Wrocław.",
    },
  ],
  related: [
    { label: "Logopeda i neurologopeda", href: "/logopedia" },
    { label: "Psycholog dziecięcy", href: "/psycholog-dzieciecy" },
    { label: "Trening Umiejętności Społecznych", href: "/trening-umiejetnosci-spolecznych" },
    { label: "Pełny cennik", href: "/cennik" },
  ],
};

export const metadata = createServiceMetadata({
  title: "Integracja sensoryczna dla dzieci we Wrocławiu",
  description:
    "Diagnoza i terapia integracji sensorycznej (SI) dla dzieci we Wrocławiu. Diagnoza: 750 zł / 4 spotkania, terapia: 200 zł. Białowieska 69B.",
  path,
  image: "/images/social/og-integracja-sensoryczna.jpg",
  imageAlt: "Integracja sensoryczna dla dzieci w Polanie Przygody",
  keywords: [
    "integracja sensoryczna Wrocław",
    "terapia SI Wrocław",
    "diagnoza SI Wrocław",
    "integracja sensoryczna dzieci",
  ],
});

export default function IntegracjaSensorycznaPage() {
  return (
    <>
      <JsonLd
        data={createServiceJsonLd({
          path,
          name: "Diagnoza i terapia integracji sensorycznej dla dzieci",
          description: metadata.description ?? "",
          offers: [
            { name: "Diagnoza integracji sensorycznej - 4 spotkania", price: 750 },
            { name: "Terapia integracji sensorycznej", price: 200 },
          ],
        })}
      />
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Strona główna", path: "/" },
          { name: "Usługi", path: "/uslugi" },
          { name: "Integracja sensoryczna", path },
        ])}
      />
      <JsonLd data={createFaqJsonLd(data.faq)} />
      <ServiceLandingPage data={data} />
    </>
  );
}
