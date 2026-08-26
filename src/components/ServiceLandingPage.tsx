import Image from "next/image";
import Link from "next/link";
import { InlineServiceLeadForm } from "@/components/InlineServiceLeadForm";
import { paymentMethodsSentence } from "@/data/payments";

export interface ServiceLandingData {
  slug: string;
  subjectId: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  lead: string;
  image: string;
  imageAlt: string;
  facts: Array<{ label: string; value: string }>;
  consultationTitle: string;
  consultationLead: string;
  consultationPoints: string[];
  scopeTitle: string;
  scope: string[];
  prices: Array<{ name: string; value: string; description: string }>;
  process: Array<{ title: string; description: string }>;
  faq: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string }>;
}

const problemIcons = [
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3",
];

export function ServiceLandingPage({ data }: { data: ServiceLandingData }) {
  const contactMessage = `Proszę o kontakt w sprawie usługi: ${data.eyebrow}.`;

  return (
    <div className="min-h-screen">
      <section className="relative bg-polana-dark-green">
        <div className="absolute inset-0 opacity-10 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-polana-lime rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-polana-violet rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-10">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch md:items-start">
            <div className="flex-1 min-w-0 text-center md:text-left">
              <span className="inline-block px-4 py-1.5 border border-polana-lime/40 text-polana-lime text-sm font-medium rounded-full mb-4">
                {data.eyebrow}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {data.title}{" "}
                <span className="text-polana-lime">{data.titleAccent}</span>
              </h1>
              <p className="text-base md:text-lg text-polana-straw/80 mb-7 max-w-2xl leading-relaxed">
                {data.lead}
              </p>

              <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5 max-w-3xl">
                {data.facts.map((fact) => (
                  <div key={fact.label} className="text-center md:text-left">
                    <dd className="text-xl md:text-2xl font-bold text-polana-lime leading-tight">
                      {fact.value}
                    </dd>
                    <dt className="text-sm text-polana-straw/80 mt-1">
                      {fact.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex-shrink-0 self-center md:self-auto">
              <div className="relative w-[190px] sm:w-[220px] lg:w-[260px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 ring-4 ring-polana-lime/20">
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 190px, (max-width: 1024px) 220px, 260px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-polana-dark-green/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <InlineServiceLeadForm
              id={`${data.slug}-hero-form`}
              serviceName={data.eyebrow}
              subjectId={data.subjectId}
              defaultMessage={contactMessage}
            />
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="#kiedy-warto"
              className="flex flex-col items-center gap-2 text-polana-straw/80 hover:text-polana-lime transition-colors"
            >
              <span className="text-sm font-medium">Dowiedz się więcej</span>
              <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="kiedy-warto" className="py-16 md:py-24 bg-polana-straw scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-polana-dark-green mb-4">
              {data.consultationTitle}
            </h2>
            <p className="text-lg text-polana-dark-green/90 max-w-3xl mx-auto leading-relaxed">
              {data.consultationLead}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.consultationPoints.map((point, index) => (
              <article key={point} className="bg-white rounded-2xl p-6 shadow-lg shadow-polana-dark-green/5">
                <div className="w-12 h-12 bg-polana-lime/20 rounded-xl flex items-center justify-center mb-4">
                  <svg aria-hidden="true" className="w-6 h-6 text-polana-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={problemIcons[index % problemIcons.length]} />
                  </svg>
                </div>
                <p className="text-polana-dark-green/80 leading-relaxed">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-polana-olive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-polana-dark-green mb-4">
              {data.scopeTitle}
            </h2>
            <p className="text-lg text-polana-dark-green/90">
              Wsparcie dopasowane do potrzeb dziecka i jego rodziny
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {data.scope.map((point, index) => (
              <article key={point} className="bg-white rounded-2xl p-6 shadow-md shadow-polana-dark-green/5 flex gap-5">
                <span className="w-11 h-11 bg-polana-lime/20 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-polana-dark-green">
                  {index + 1}
                </span>
                <p className="text-polana-dark-green/90 leading-relaxed self-center">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-polana-dark-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-polana-lime mb-4">
              Cennik: {data.eyebrow.toLocaleLowerCase("pl-PL")}
            </h2>
            <p className="text-lg text-polana-straw/80">
              Przejrzyste ceny, bez ukrytych kosztów
            </p>
          </div>

          <div className="space-y-4">
            {data.prices.map((price) => (
              <article key={price.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-white/10">
                <div>
                  <h3 className="text-lg font-semibold text-white">{price.name}</h3>
                  <p className="text-polana-straw/90 text-sm">{price.description}</p>
                </div>
                <p className="text-2xl font-bold text-polana-lime whitespace-nowrap">{price.value}</p>
              </article>
            ))}
          </div>
          <p className="text-center text-polana-straw/80 text-sm mt-8">
            {paymentMethodsSentence}. Możliwość wystawienia faktury.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-polana-olive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-polana-dark-green mb-4">
              Jak zacząć?
            </h2>
            <p className="text-lg text-polana-dark-green/90">
              Cztery proste kroki do rozpoczęcia współpracy
            </p>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((step, index) => (
              <li key={step.title} className="bg-white rounded-2xl p-6 shadow-lg shadow-polana-dark-green/5 text-center">
                <span className="w-12 h-12 rounded-full bg-polana-lime flex items-center justify-center font-bold text-polana-dark-green mx-auto mb-4">
                  {index + 1}
                </span>
                <h3 className="font-semibold text-lg text-polana-dark-green mb-2">{step.title}</h3>
                <p className="text-polana-dark-green/90 text-sm leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-polana-dark-green mb-4">
              Najczęstsze pytania
            </h2>
            <p className="text-lg text-polana-dark-green/90">
              Odpowiedzi na pytania rodziców
            </p>
          </div>

          <div className="space-y-4">
            {data.faq.map((item) => (
              <details key={item.question} className="group bg-polana-straw rounded-2xl p-6">
                <summary className="cursor-pointer list-none font-semibold text-polana-dark-green flex items-start justify-between gap-4">
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-polana-dark-green/75 leading-relaxed mt-4 pr-8">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-polana-dark-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-polana-lime font-medium mb-3">Polana Przygody · Wrocław</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Porozmawiajmy o potrzebach Twojego dziecka
            </h2>
            <p className="text-lg text-polana-straw/80 max-w-2xl mx-auto">
              Zostaw kontakt. Oddzwonimy i wspólnie ustalimy odpowiedni kolejny krok.
            </p>
          </div>

          <InlineServiceLeadForm
            id={`${data.slug}-bottom-form`}
            serviceName={data.eyebrow}
            subjectId={data.subjectId}
            defaultMessage={contactMessage}
          />

          <nav aria-label="Powiązane usługi" className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {data.related.map((item) => (
              <Link key={item.href} href={item.href} className="text-polana-straw/80 hover:text-polana-lime underline underline-offset-4">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
}
