"use client";

import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "logopedia",
    title: "Logopedia",
    description:
      "Profesjonalna diagnoza i terapia zaburzeń mowy. Pomagamy dzieciom w prawidłowym rozwoju komunikacji.",
    image: "/images/gabinety/gabinet-logopedy-1.png",
    imageAlt: "Gabinet logopedyczny w Polanie Przygody",
    video: "/terapia-logopedyczna.mp4",
    videoTitle: "Jak wygląda terapia logopedyczna?",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
    color: "bg-polana-lime/20",
    features: [
      "Diagnoza logopedyczna",
      "Korygowanie wad wymowy",
      "Stymulacja rozwoju mowy",
      "Terapia opóźnionego rozwoju mowy",
      "Praca nad płynnością mowy",
      "Ćwiczenia aparatu artykulacyjnego",
    ],
    forWhom: [
      "Dzieci z wadami wymowy",
      "Dzieci z opóźnionym rozwojem mowy",
      "Dzieci z zaburzeniami komunikacji",
      "Dzieci po zabiegach chirurgicznych",
    ],
  },
  {
    id: "integracja-sensoryczna",
    title: "Terapia Integracji Sensorycznej",
    description:
      "Wspieramy prawidłowy rozwój zmysłów i koordynacji. Pomagamy dzieciom w lepszym odbieraniu świata.",
    image: "/images/gabinety/sala-si.png",
    imageAlt: "Sala integracji sensorycznej z huśtawkami i sprzętem terapeutycznym",
    video: "/co-to-jest-integracja.mp4",
    videoTitle: "Co to jest integracja sensoryczna?",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
    color: "bg-polana-violet/30",
    features: [
      "Diagnoza procesów SI",
      "Ćwiczenia na huśtawkach i platformach",
      "Zabawy stymulujące układ przedsionkowy",
      "Aktywności rozwijające propriocepcję",
      "Doświadczenia dotykowe i sensoryczne",
      "Tory przeszkód i zabawy ruchowe",
    ],
    forWhom: [
      "Dzieci z trudnościami w koncentracji",
      "Dzieci nadmiernie ruchliwe lub zbyt spokojne",
      "Dzieci z trudnościami w koordynacji",
      "Dzieci z nadwrażliwością sensoryczną",
    ],
  },
  {
    id: "konsultacje",
    title: "Konsultacje dla rodziców",
    description:
      "Wspieramy rodziców w codziennej pracy z dzieckiem. Razem tworzymy plan rozwoju.",
    image: "/images/gabinety/gabinet-psychologa.png",
    imageAlt: "Gabinet konsultacyjny - spokojne miejsce do rozmów",
    video: null,
    videoTitle: null,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
    color: "bg-polana-olive/30",
    features: [
      "Omówienie postępów terapii",
      "Wskazówki do ćwiczeń w domu",
      "Odpowiedzi na pytania i wątpliwości",
      "Materiały wspierające",
      "Wspólne planowanie celów",
    ],
    forWhom: [
      "Rodzice dzieci w terapii",
      "Rodzice szukający wsparcia",
      "Rodzice z pytaniami o rozwój dziecka",
    ],
  },
];

export default function UslugiPage() {
  return (
    <>
      <PageHeader
        title="Usługi"
        subtitle="Kompleksowe wsparcie w rozwoju Twojego dziecka"
      />

      {/* Services overview */}
      <section className="py-12 md:py-20 bg-polana-straw">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-polana-dark-green/80 text-center max-w-3xl mx-auto mb-16"
          >
            W Polanie Przygody oferujemy profesjonalne usługi terapeutyczne
            dopasowane do indywidualnych potrzeb każdego dziecka. Nasze podejście
            łączy skuteczność z zabawą.
          </motion.p>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-polana-dark-green/5">
                  {/* Image banner */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-polana-dark-green/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-8 md:left-12">
                      <div
                        className={`w-14 h-14 ${service.color} backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3`}
                      >
                        <svg
                          className="w-7 h-7 text-polana-dark-green"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {service.icon}
                        </svg>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <div className={`grid ${service.video ? "lg:grid-cols-3" : "md:grid-cols-2"} gap-0`}>
                    {/* Left side - info */}
                    <div className="p-8 md:p-12">
                      <p className="text-lg text-polana-dark-green/70 mb-8">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-polana-dark-green mb-4">
                          Co oferujemy?
                        </h3>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-polana-dark-green/80"
                            >
                              <svg
                                className="w-5 h-5 text-polana-lime flex-shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button href="/umow-sie" variant="primary">
                        Umów wizytę
                      </Button>
                    </div>

                    {/* Middle - for whom */}
                    <div className={`${service.color} p-8 md:p-12`}>
                      <h3 className="text-lg font-semibold text-polana-dark-green mb-4">
                        Dla kogo?
                      </h3>
                      <ul className="space-y-3">
                        {service.forWhom.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-polana-dark-green/80"
                          >
                            <span className="w-2 h-2 bg-polana-dark-green/40 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right side - video (if available) */}
                    {service.video && (
                      <div className="bg-polana-dark-green p-8 md:p-12 flex flex-col">
                        <h3 className="text-lg font-semibold text-polana-lime mb-4">
                          {service.videoTitle}
                        </h3>
                        <div className="flex-1 flex items-center justify-center">
                          <div className="relative w-full max-w-[200px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
                            <video
                              controls
                              playsInline
                              poster={service.image}
                              className="absolute inset-0 w-full h-full object-cover"
                            >
                              <source src={service.video} type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-20 bg-polana-olive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-polana-dark-green mb-4">
              Jak wygląda proces?
            </h2>
            <p className="text-lg text-polana-dark-green/70 max-w-2xl mx-auto">
              Od pierwszego kontaktu do systematycznej terapii
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Kontakt",
                description: "Zadzwoń lub napisz do nas, żeby umówić pierwszą wizytę",
              },
              {
                step: "2",
                title: "Diagnoza",
                description: "Przeprowadzamy szczegółową diagnozę i wywiad z rodzicami",
              },
              {
                step: "3",
                title: "Plan terapii",
                description: "Wspólnie ustalamy cele i plan działania",
              },
              {
                step: "4",
                title: "Terapia",
                description: "Systematyczne zajęcia z regularną oceną postępów",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="text-center h-full">
                  <div className="w-12 h-12 bg-polana-lime rounded-full flex items-center justify-center mx-auto mb-4 text-polana-dark-green font-semibold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-polana-dark-green mb-2">
                    {item.title}
                  </h3>
                  <p className="text-polana-dark-green/70 text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-polana-dark-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-polana-lime mb-6">
              Masz pytania o nasze usługi?
            </h2>
            <p className="text-lg text-polana-straw/80 mb-8">
              Chętnie odpowiemy na wszystkie pytania. Zadzwoń lub umów się na
              konsultację!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/umow-sie" variant="primary" size="lg">
                Umów wizytę
              </Button>
              <a
                href="tel:+48790512258"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium text-polana-straw hover:text-polana-lime transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                790 512 258
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

