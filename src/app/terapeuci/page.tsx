"use client";

import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const therapists = [
  {
    id: "katarzyna-karwatka",
    name: "Katarzyna Karwatka",
    role: "Założycielka, Logopeda",
    experience: "Logopeda od 12 lat",
    photo: "/images/terapeuci/kasia.jpeg",
    specializations: [
      "Dyslalia",
      "Dyspraksja",
      "Opóźniony rozwój mowy",
      "Afazja",
      "Autyzm",
      "Mutyzm wybiórczy",
      "Muzykoterapia w logopedii",
    ],
    shortDescription:
      "Logopeda od 12 lat. W mojej pracy najważniejszy jest indywidualny plan pracy, bo każde dziecko ma inne potrzeby.",
    fullDescription:
      "Ukończyłam studia na Uniwersytecie Wrocławskim, 12 lat temu. Doświadczenie zdobywałam pracując w przedszkolach, mając pod swoją opieką 250 dzieci co roku.\n\nTaka duża ilość dzieci przez wiele lat pokazała mi zróżnicowanie potrzeb i pomogła dokształcać się w wielu dziedzinach. Od dyslalii, dyspraksji, opóźnionego rozwoju mowy, afazji, autyzmu, mutyzmu wybiórczego i wiele innych wyzwań które pomogło mi się rozwinąć a przede wszystkim pomogło dzieciom.\n\nUkończone mam również studia z edukacji muzycznej, elementy muzykoterapii w terapii logopedycznej pięknie wspomagają rozwój mowy.\n\nPrywatnie mama dwójki dzieci ❤️",
    quote:
      "W mojej pracy najważniejszy jest indywidualny plan pracy, bo każde dziecko ma inne potrzeby.",
  },
  {
    id: "weronika-saczewska",
    name: "Weronika Saczewska",
    role: "Terapeuta Integracji Sensorycznej",
    experience: "Certyfikowany terapeuta SI",
    photo: "/images/terapeuci/weronika.jpg",
    specializations: [
      "Diagnoza i terapia SI",
      "Trudności w koncentracji",
      "Koordynacja ruchowa",
    ],
    shortDescription:
      "Certyfikowany terapeuta integracji sensorycznej, która zamienia terapię w przygodę. W jej sali huśtamy się jak piraci, skaczemy jak kangury i wspinamy się jak alpiniści.",
    fullDescription: null,
    quote: "Terapia SI to dla mnie zabawa z sensem!",
  },
  {
    id: "magdalena-wawrzycka",
    name: "Magdalena Wawrzycka",
    role: "Logopeda",
    experience: "14 lat doświadczenia",
    photo: "/images/terapeuci/magda.jpeg",
    specializations: [
      "Terapia jąkania",
      "Praca z dziećmi słabosłyszącymi",
      "Metody komunikacji AAC",
    ],
    shortDescription:
      "Logopeda z 14-letnim stażem, która przez te lata pomogła setkom dzieci w odkrywaniu radości z komunikacji. Specjalizuje się w terapii jąkania i alternatywnych metodach komunikacji.",
    fullDescription: null,
    quote: "Dla mnie najważniejsza jest relacja z dzieckiem.",
  },
];

function TherapistCard({
  therapist,
  index,
}: {
  therapist: (typeof therapists)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
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
          {/* Photo */}
          <div
            className={`relative aspect-square md:aspect-auto min-h-[300px] md:min-h-[400px] ${
              index % 2 === 1 ? "md:order-2" : ""
            }`}
          >
            <Image
              src={therapist.photo}
              alt={therapist.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Content */}
          <div
            className={`md:col-span-2 p-8 md:p-12 ${
              index % 2 === 1 ? "md:order-1" : ""
            }`}
          >
            <div className="max-w-2xl">
              <p className="text-sm text-polana-dark-green font-medium mb-2 uppercase tracking-wide">
                {therapist.experience}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-polana-dark-green mb-2">
                {therapist.name}
              </h2>
              <p className="text-lg text-polana-dark-green/70 font-medium mb-6">
                {therapist.role}
              </p>

              <p className="text-polana-dark-green/80 leading-relaxed mb-4">
                {therapist.shortDescription}
                {therapist.fullDescription && !isExpanded && "..."}
              </p>

              {/* Expandable full description */}
              {therapist.fullDescription && (
                <>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="text-polana-dark-green/80 leading-relaxed mb-4 whitespace-pre-line">
                          {therapist.fullDescription}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center gap-2 text-polana-dark-green font-medium mb-6 hover:text-polana-lime transition-colors group cursor-pointer"
                  >
                    <span>
                      {isExpanded ? "Zwiń informacje" : "Więcej informacji"}
                    </span>
                    <motion.svg
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>
                </>
              )}

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
  );
}

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
              <TherapistCard
                key={therapist.id}
                therapist={therapist}
                index={index}
              />
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
