"use client";

import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import Link from "next/link";

const therapists = [
  {
    id: "katarzyna-karwatka",
    name: "Katarzyna Karwatka",
    role: "Założycielka, Logopeda",
    experience: "12 lat doświadczenia",
    specializations: [
      "Terapia wad wymowy",
      "Opóźniony rozwój mowy",
      "Neurologopedia dziecięca",
    ],
    description:
      "Założycielka Polany Przygody. Logopeda z pasją, która wierzy, że każde dziecko ma swój niepowtarzalny sposób komunikacji. Specjalizuje się w pracy z dziećmi z zaburzeniami mowy i komunikacji.",
    quote:
      "Terapia nie musi być nudna – może być fascynującą przygodą!",
  },
  {
    id: "weronika-saczewska",
    name: "Weronika Saczewska",
    role: "Terapeuta Integracji Sensorycznej",
    experience: "Certyfikowany terapeuta SI",
    specializations: [
      "Diagnoza i terapia SI",
      "Trudności w koncentracji",
      "Koordynacja ruchowa",
    ],
    description:
      "Certyfikowany terapeuta integracji sensorycznej, która zamienia terapię w przygodę. W jej sali huśtamy się jak piraci, skaczemy jak kangury i wspinamy się jak alpiniści.",
    quote:
      "Terapia SI to dla mnie zabawa z sensem!",
  },
  {
    id: "magdalena-wawrzycka",
    name: "Magdalena Wawrzycka",
    role: "Logopeda",
    experience: "14 lat doświadczenia",
    specializations: [
      "Terapia jąkania",
      "Praca z dziećmi słabosłyszącymi",
      "Metody komunikacji AAC",
    ],
    description:
      "Logopeda z 14-letnim stażem, która przez te lata pomogła setkom dzieci w odkrywaniu radości z komunikacji. Specjalizuje się w terapii jąkania i alternatywnych metodach komunikacji.",
    quote:
      "Dla mnie najważniejsza jest relacja z dzieckiem.",
  },
];

export default function TerapeuciPage() {
  return (
    <>
      <PageHeader
        title="Terapeuci"
        subtitle="Poznaj nasz zespół doświadczonych specjalistów"
      />

      {/* Team intro */}
      <section className="py-12 md:py-20 bg-polana-straw">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-polana-dark-green/80 leading-relaxed"
          >
            W Polanie Przygody pracują doświadczeni specjaliści z prawdziwą pasją do
            pracy z dziećmi. Każdy z nas nieustannie się rozwija, uczestnicząc w
            szkoleniach i konferencjach, aby oferować najlepszą możliwą opiekę.
          </motion.p>
        </div>
      </section>

      {/* Therapists */}
      <section className="py-12 md:py-20 bg-polana-olive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {therapists.map((therapist, index) => (
              <motion.div
                key={therapist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                id={therapist.id}
                className="scroll-mt-24"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-polana-dark-green/5">
                  <div
                    className={`grid md:grid-cols-3 gap-0 ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Photo placeholder */}
                    <div
                      className={`relative aspect-square md:aspect-auto bg-gradient-to-br from-polana-olive/40 to-polana-dark-green/20 ${
                        index % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-32 h-32 mx-auto rounded-full bg-polana-dark-green/20 flex items-center justify-center mb-4">
                            <svg
                              className="w-16 h-16 text-polana-dark-green/40"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                          </div>
                          <p className="text-sm text-polana-dark-green/50">
                            Zdjęcie terapeuty
                            <br />
                            <span className="text-xs">
                              Dodaj do /public/images/terapeuci/
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`md:col-span-2 p-8 md:p-12 ${
                        index % 2 === 1 ? "md:order-1" : ""
                      }`}
                    >
                      <div className="max-w-2xl">
                        <p className="text-sm text-polana-dark-green/60 font-medium mb-2 uppercase tracking-wide">
                          {therapist.experience}
                        </p>
                        <h2 className="text-2xl md:text-3xl font-semibold text-polana-dark-green mb-2">
                          {therapist.name}
                        </h2>
                        <p className="text-lg text-polana-lime font-medium mb-6">
                          {therapist.role}
                        </p>

                        <p className="text-polana-dark-green/80 leading-relaxed mb-6">
                          {therapist.description}
                        </p>

                        {/* Quote */}
                        <blockquote className="border-l-4 border-polana-lime pl-4 italic text-polana-dark-green/70 mb-8">
                          &ldquo;{therapist.quote}&rdquo;
                        </blockquote>

                        {/* Specializations */}
                        <div className="mb-8">
                          <h3 className="text-sm font-semibold text-polana-dark-green mb-3 uppercase tracking-wide">
                            Specjalizacje
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {therapist.specializations.map((spec) => (
                              <span
                                key={spec}
                                className="px-3 py-1 bg-polana-olive/30 text-polana-dark-green rounded-full text-sm"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Button href="/umow-sie" variant="primary">
                          Umów wizytę
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="py-12 md:py-20 bg-polana-straw">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-polana-dark-green mb-6">
              Chcesz dołączyć do naszego zespołu?
            </h2>
            <p className="text-lg text-polana-dark-green/70 mb-8">
              Szukamy pasjonatów pracy z dziećmi. Jeśli jesteś logopedą lub
              terapeutą SI i chciałbyś dołączyć do Polany Przygody, napisz do nas!
            </p>
            <a
              href="mailto:info@polanaprzygody.pl?subject=Aplikacja do pracy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-polana-dark-green text-polana-straw rounded-full font-medium hover:bg-polana-dark-green/90 transition-colors"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Wyślij aplikację
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

