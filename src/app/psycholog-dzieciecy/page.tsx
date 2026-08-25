import { ServiceLandingPage, type ServiceLandingData } from "@/components/ServiceLandingPage";
import {
  JsonLd,
  createBreadcrumbJsonLd,
  createFaqJsonLd,
  createServiceJsonLd,
  createServiceMetadata,
} from "@/lib/seo";

const path = "/psycholog-dzieciecy";

const data: ServiceLandingData = {
  eyebrow: "Psycholog dziecięcy",
  title: "Psycholog dziecięcy we Wrocławiu",
  lead:
    "Oferujemy konsultacje i diagnozę psychologiczną dzieci i młodzieży oraz wsparcie rodziców. Pracujemy w podejściu systemowym i poznawczo-behawioralnym, uwzględniając sytuację dziecka, rodziny i szkoły.",
  image: "/images/gabinety/galeria/gabinet-psychologa.jpg",
  imageAlt: "Przyjazny gabinet psychologa dziecięcego w Polanie Przygody",
  facts: [
    { label: "Konsultacja", value: "220 zł" },
    { label: "Diagnoza", value: "700-1000 zł" },
    { label: "Dla kogo", value: "Dzieci, młodzież i rodzice" },
    { label: "Miejsce", value: "Białowieska 69B, Wrocław" },
  ],
  consultationTitle: "Kiedy warto porozmawiać z psychologiem?",
  consultationLead:
    "Konsultacja służy zrozumieniu sytuacji dziecka i ustaleniu dalszych kroków. Nie trzeba czekać, aż trudność stanie się kryzysem — rozmowa może pomóc rodzicom uporządkować obserwacje.",
  consultationPoints: [
    "Dziecko doświadcza lęku, obniżonego nastroju lub silnych emocji.",
    "Pojawiają się trudności w zachowaniu, relacjach albo komunikacji w rodzinie.",
    "Dziecko lub nastolatek przechodzi kryzys emocjonalny.",
    "Rodzice potrzebują psychoedukacji, wskazówek lub wspólnego planu działania.",
  ],
  scopeTitle: "Zakres pomocy psychologicznej",
  scope: [
    "Konsultacje psychologiczne dla dzieci, młodzieży i rodziców.",
    "Diagnoza psychologiczna dopasowana zakresem do zgłoszonej potrzeby.",
    "Wsparcie w trudnościach emocjonalnych, lękach i obniżonym nastroju.",
    "Praca nad relacjami i komunikacją w rodzinie.",
    "Psychoedukacja oraz zalecenia dla rodziców.",
    "Współpraca z rodziną i, gdy jest potrzebna, ze szkołą.",
  ],
  process: [
    {
      title: "Zgłoszenie",
      description: "Rodzic opisuje krótko sytuację i ustalamy odpowiedni rodzaj pierwszego spotkania.",
    },
    {
      title: "Konsultacja",
      description: "Psycholog zbiera informacje, poznaje potrzeby rodziny i porządkuje cele pomocy.",
    },
    {
      title: "Plan działania",
      description: "Ustalamy zalecenia, potrzebę diagnozy albo dalszych spotkań terapeutycznych.",
    },
    {
      title: "Dalsze wsparcie",
      description: "Praca może obejmować dziecko, rodziców lub całą rodzinę — zależnie od sytuacji.",
    },
  ],
  faq: [
    {
      question: "Ile kosztuje konsultacja psychologa dziecięcego?",
      answer:
        "Konsultacja psychologiczna w Polanie Przygody kosztuje 220 zł.",
    },
    {
      question: "Ile kosztuje diagnoza psychologiczna?",
      answer:
        "Diagnoza psychologiczna kosztuje od 700 do 1000 zł. Ostateczna cena zależy od zakresu diagnozy i liczby potrzebnych spotkań.",
    },
    {
      question: "Czy na pierwsze spotkanie przychodzi dziecko czy rodzic?",
      answer:
        "Forma pierwszego spotkania zależy od wieku dziecka i rodzaju zgłaszanej trudności. Ustalamy ją podczas kontaktu przed wizytą, aby spotkanie miało odpowiedni przebieg.",
    },
    {
      question: "Czy psycholog współpracuje z rodzicami?",
      answer:
        "Tak. Współpraca z rodziną, psychoedukacja i wskazówki dla rodziców są ważnymi elementami wsparcia dziecka.",
    },
    {
      question: "Gdzie znajduje się gabinet psychologa?",
      answer:
        "Gabinet znajduje się w Polanie Przygody przy ul. Białowieskiej 69B, 54-234 Wrocław.",
    },
  ],
  related: [
    { label: "Integracja sensoryczna", href: "/integracja-sensoryczna" },
    { label: "Trening Umiejętności Społecznych", href: "/trening-umiejetnosci-spolecznych" },
    { label: "Logopeda i neurologopeda", href: "/logopedia" },
    { label: "Pełny cennik", href: "/cennik" },
  ],
};

export const metadata = createServiceMetadata({
  title: "Psycholog dziecięcy we Wrocławiu",
  description:
    "Psycholog dziecięcy we Wrocławiu: konsultacje 220 zł, diagnoza psychologiczna 700-1000 zł. Wsparcie dzieci, młodzieży i rodziców przy Białowieskiej 69B.",
  path,
  image: "/images/social/og-psycholog.jpg",
  imageAlt: "Psycholog dziecięcy w Polanie Przygody we Wrocławiu",
  keywords: [
    "psycholog dziecięcy Wrocław",
    "psycholog dla dzieci Wrocław",
    "diagnoza psychologiczna dziecka Wrocław",
    "konsultacja psychologiczna dziecko",
  ],
});

export default function PsychologDzieciecyPage() {
  return (
    <>
      <JsonLd
        data={createServiceJsonLd({
          path,
          name: "Psycholog dziecięcy",
          description: metadata.description ?? "",
          offers: [
            { name: "Konsultacja psychologiczna", price: 220 },
            { name: "Diagnoza psychologiczna", lowPrice: 700, highPrice: 1000 },
          ],
        })}
      />
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Strona główna", path: "/" },
          { name: "Usługi", path: "/uslugi" },
          { name: "Psycholog dziecięcy", path },
        ])}
      />
      <JsonLd data={createFaqJsonLd(data.faq)} />
      <ServiceLandingPage data={data} />
    </>
  );
}
