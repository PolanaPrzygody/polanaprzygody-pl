"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-polana-dark-green">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-polana-lime/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-polana-olive/20 rounded-full blur-3xl animate-float delay-300" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-polana-violet/10 rounded-full blur-2xl animate-float delay-500" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-polana-lime mb-6 tracking-tight">
              Polana Przygody
            </h1>
            <p className="text-xl md:text-2xl text-polana-olive font-light mb-4">
              Centrum Rozwoju Dziecka
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-polana-straw/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Wspieramy rozwój Twojego dziecka w przyjaznej, pełnej przygód atmosferze.
            Profesjonalna logopedia i terapia integracji sensorycznej.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button href="/umow-sie" variant="primary" size="lg">
              Umów wizytę
            </Button>
            <Button href="/poznaj-nas" variant="outline" size="lg" className="border-polana-straw text-polana-straw hover:bg-polana-straw hover:text-polana-dark-green">
              Poznaj nas
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-polana-straw/50">
              <span className="text-sm">Przewiń</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-polana-straw">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-polana-dark-green mb-4">
              Jak możemy pomóc?
            </h2>
            <p className="text-lg text-polana-dark-green/70 max-w-2xl mx-auto">
              Oferujemy kompleksowe wsparcie w rozwoju Twojego dziecka
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Logopedia",
                description:
                  "Profesjonalna diagnoza i terapia zaburzeń mowy. Pomagamy dzieciom w prawidłowym rozwoju komunikacji.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                ),
              },
              {
                title: "Integracja Sensoryczna",
                description:
                  "Terapia wspierająca prawidłowy rozwój zmysłów i koordynacji. Pomagamy dzieciom w lepszym odbieraniu świata.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                ),
              },
              {
                title: "Indywidualne podejście",
                description:
                  "Każde dziecko jest wyjątkowe. Dopasowujemy terapię do indywidualnych potrzeb i możliwości.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-polana-dark-green/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-polana-lime/20 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-polana-dark-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-polana-dark-green mb-3">
                  {feature.title}
                </h3>
                <p className="text-polana-dark-green/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button href="/uslugi" variant="secondary">
              Zobacz wszystkie usługi
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 md:py-28 bg-polana-olive/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-polana-dark-green mb-4">
              Nasz zespół
            </h2>
            <p className="text-lg text-polana-dark-green/70 max-w-2xl mx-auto">
              Doświadczeni specjaliści z pasją do pracy z dziećmi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Katarzyna Karwatka",
                role: "Założycielka, Logopeda",
                experience: "12 lat doświadczenia",
              },
              {
                name: "Weronika Saczewska",
                role: "Terapeuta SI",
                experience: "Specjalista integracji sensorycznej",
              },
              {
                name: "Magdalena Wawrzycka",
                role: "Logopeda",
                experience: "14 lat doświadczenia",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-polana-dark-green/10">
                  {/* Placeholder for therapist photo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-polana-dark-green/20 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-polana-dark-green/40"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-polana-dark-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-polana-dark-green">
                  {member.name}
                </h3>
                <p className="text-polana-dark-green/70">{member.role}</p>
                <p className="text-sm text-polana-dark-green/50 mt-1">
                  {member.experience}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button href="/terapeuci" variant="outline">
              Poznaj nasz zespół
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-polana-dark-green relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-polana-lime/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-polana-violet/10 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-polana-lime mb-6">
              Gotowi na przygodę?
            </h2>
            <p className="text-lg text-polana-straw/80 mb-8 max-w-2xl mx-auto">
              Umów się na pierwszą wizytę i pozwól nam wspólnie wspierać rozwój
              Twojego dziecka. Każda przygoda zaczyna się od pierwszego kroku!
            </p>
            <Button href="/umow-sie" variant="primary" size="lg">
              Umów wizytę
            </Button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-polana-straw/70"
          >
            <a
              href="tel:+48790512258"
              className="flex items-center gap-2 hover:text-polana-lime transition-colors"
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
              <span>790 512 258</span>
            </a>
            <span className="hidden sm:block">•</span>
            <p className="flex items-center gap-2">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>ul. Białowieska 69B, 54-234 Wrocław</span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

