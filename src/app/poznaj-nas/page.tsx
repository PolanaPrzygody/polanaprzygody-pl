"use client";

import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { InstagramFeed } from "@/components/InstagramFeed";
import { SpaceGallerySection } from "@/components/SpaceGallerySection";
import { motion } from "framer-motion";
import Script from "next/script";

export default function PoznajNasPage() {
  return (
    <>
      <PageHeader
        title="Poznaj nas"
        subtitle="Odkryj wyjątkowe miejsce, gdzie każde dziecko może rozwijać swoje umiejętności"
      />

      {/* Main content */}
      <section className="py-12 md:py-20 bg-polana-straw">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-polana-dark-green mb-6">
              Nasza historia
            </h2>
            <p className="text-lg text-polana-dark-green/80 leading-relaxed mb-6">
              Polana Przygody powstała z pasji do pracy z dziećmi i przekonania, że
              każde z nich zasługuje na indywidualne podejście. Założona przez
              Katarzynę Karwatkę, logopedę z wieloletnim doświadczeniem, nasza
              placówka od samego początku stawia na wysoką jakość usług i ciepłą,
              rodzinną atmosferę.
            </p>
            <p className="text-lg text-polana-dark-green/80 leading-relaxed">
              Wierzymy, że terapia może i powinna być przyjemna. Dlatego stworzyliśmy
              przestrzeń, w której nauka łączy się z zabawą, a każde spotkanie to
              nowa przygoda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-polana-olive/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-polana-dark-green mb-12 text-center"
          >
            Co nas wyróżnia?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Indywidualne podejście",
                description:
                  "Każde dziecko traktujemy jako wyjątkową osobowość z własnymi potrzebami i tempem rozwoju.",
                icon: "❤️",
              },
              {
                title: "Profesjonalny zespół",
                description:
                  "Doświadczeni terapeuci, którzy nieustannie doskonalą swoje umiejętności.",
                icon: "🎓",
              },
              {
                title: "Nowoczesne metody",
                description:
                  "Łączymy sprawdzone techniki terapeutyczne z innowacyjnymi rozwiązaniami.",
                icon: "✨",
              },
              {
                title: "Przyjazna atmosfera",
                description:
                  "Tworzymy przestrzeń, w której dziecko czuje się bezpiecznie i chętnie wraca.",
                icon: "🏠",
              },
              {
                title: "Współpraca z rodzicami",
                description:
                  "Wspólnie z rodzicami budujemy spójny plan rozwoju dziecka.",
                icon: "🤝",
              },
              {
                title: "Kompleksowa opieka",
                description:
                  "Oferujemy szeroki zakres usług pod jednym dachem – logopedię i terapię SI.",
                icon: "🌟",
              },
            ].map((value, index) => (
              <Card key={value.title} variant="elevated">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-polana-dark-green mb-2">
                  {value.title}
                </h3>
                <p className="text-polana-dark-green/70">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SpaceGallerySection sectionId="galeria-zdjec" />

      {/* Instagram Feed */}
      <section className="py-12 md:py-20 bg-polana-olive/20">
        <InstagramFeed />
      </section>

      {/* Location */}
      <section className="py-12 md:py-20 bg-polana-straw">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-polana-dark-green mb-6">
              Gdzie nas znajdziesz?
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg
                  className="w-8 h-8 text-polana-dark-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="text-left">
                  <p className="text-xl font-medium text-polana-dark-green">
                    ul. Białowieska 69B
                  </p>
                  <p className="text-polana-dark-green/70">54-234 Wrocław</p>
                </div>
              </div>
              <p className="text-polana-dark-green/70 mb-6">
                Zielona część Wrocławia z łatwym dojazdem i parkingiem dla rodziców
              </p>

              {/* Google Maps Widget */}
              <div className="rounded-xl overflow-hidden">
                <div
                  className="elfsight-app-33bbebe4-56b7-4e95-a500-faf14de051ac"
                  data-elfsight-app-lazy
                />
                <Script
                  src="https://static.elfsight.com/platform/platform.js"
                  strategy="lazyOnload"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
