import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/seo";

export interface ServiceLandingData {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  facts: Array<{ label: string; value: string }>;
  consultationTitle: string;
  consultationLead: string;
  consultationPoints: string[];
  scopeTitle: string;
  scope: string[];
  process: Array<{ title: string; description: string }>;
  specialists: Array<{ name: string; role: string; id: string }>;
  faq: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string }>;
}

export function ServiceLandingPage({ data }: { data: ServiceLandingData }) {
  return (
    <>
      <section className="bg-polana-dark-green pt-24 pb-14 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Okruszki" className="text-sm text-polana-straw/60 mb-8">
            <Link href="/" className="hover:text-polana-lime">
              Strona główna
            </Link>
            <span aria-hidden="true" className="mx-2">
              /
            </span>
            <Link href="/uslugi" className="hover:text-polana-lime">
              Usługi
            </Link>
            <span aria-hidden="true" className="mx-2">
              /
            </span>
            <span aria-current="page" className="text-polana-straw">
              {data.eyebrow}
            </span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-polana-lime font-semibold uppercase tracking-wider text-sm mb-4">
                {data.eyebrow}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                {data.title}
              </h1>
              <p className="text-lg md:text-xl text-polana-straw/85 leading-relaxed mb-8">
                {data.lead}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/umow-sie" variant="primary" size="lg">
                  Umów konsultację
                </Button>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-polana-straw text-polana-straw hover:bg-polana-straw hover:text-polana-dark-green transition-colors text-lg font-medium"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="najwazniejsze-informacje" className="bg-polana-straw py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="najwazniejsze-informacje" className="text-2xl md:text-3xl font-semibold text-polana-dark-green mb-8 text-center">
            Najważniejsze informacje
          </h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.facts.map((fact) => (
              <div key={fact.label} className="bg-white rounded-2xl p-6 shadow-sm">
                <dt className="text-sm text-polana-dark-green/55 mb-2">{fact.label}</dt>
                <dd className="font-semibold text-polana-dark-green">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-polana-dark-green mb-4">
              {data.consultationTitle}
            </h2>
            <p className="text-lg text-polana-dark-green/70 leading-relaxed mb-6">
              {data.consultationLead}
            </p>
            <ul className="space-y-3">
              {data.consultationPoints.map((point) => (
                <li key={point} className="flex gap-3 text-polana-dark-green/80">
                  <span aria-hidden="true" className="w-2 h-2 bg-polana-lime rounded-full mt-2 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-polana-olive/20 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-polana-dark-green mb-6">
              {data.scopeTitle}
            </h2>
            <ul className="space-y-4">
              {data.scope.map((point) => (
                <li key={point} className="flex gap-3 text-polana-dark-green/80">
                  <svg aria-hidden="true" className="w-5 h-5 text-polana-dark-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-polana-olive/20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-polana-dark-green mb-10 text-center">
            Jak wygląda współpraca?
          </h2>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.process.map((step, index) => (
              <li key={step.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <span className="w-10 h-10 rounded-full bg-polana-lime flex items-center justify-center font-semibold text-polana-dark-green mb-4">
                  {index + 1}
                </span>
                <h3 className="font-semibold text-lg text-polana-dark-green mb-2">{step.title}</h3>
                <p className="text-polana-dark-green/65 text-sm leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-polana-straw py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-polana-dark-green mb-8 text-center">
            Specjaliści
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.specialists.map((specialist) => (
              <Link
                key={specialist.id}
                href={`/terapeuci#${specialist.id}`}
                className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-polana-dark-green text-lg">{specialist.name}</h3>
                <p className="text-polana-dark-green/65">{specialist.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-polana-dark-green mb-8">
            Najczęstsze pytania
          </h2>
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

      <section className="bg-polana-dark-green py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-polana-lime mb-5">
            Porozmawiajmy o potrzebach Twojego dziecka
          </h2>
          <p className="text-polana-straw/80 text-lg mb-8">
            Pierwszy kontakt służy ustaleniu, jaki rodzaj konsultacji będzie odpowiedni i jakie są dostępne terminy.
          </p>
          <Button href="/umow-sie" variant="primary" size="lg">
            Umów wizytę
          </Button>

          <nav aria-label="Powiązane usługi" className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {data.related.map((item) => (
              <Link key={item.href} href={item.href} className="text-polana-straw/70 hover:text-polana-lime underline underline-offset-4">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}
