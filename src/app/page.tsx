"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative min-h-screen bg-polana-dark-green">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-polana-lime/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-polana-olive/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:py-20">
          {/* Left side - Logo and Content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/logo-polana.svg"
                alt="Polana Przygody"
                width={400}
                height={191}
                className="w-48 sm:w-64 md:w-80 lg:w-[400px] h-auto mx-auto md:mx-0 mb-3 md:mb-6"
                priority
              />
              <p className="text-lg md:text-2xl text-polana-olive font-light mb-3 md:mb-4">
                Centrum Rozwoju Dziecka
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-xl text-polana-straw/80 max-w-xl mb-6 md:mb-10 leading-relaxed"
            >
              Wspieramy rozwój Twojego dziecka w przyjaznej, pełnej przygód atmosferze.
              Profesjonalna logopedia i terapia integracji sensorycznej.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start items-center"
            >
              <Button href="/umow-sie" variant="primary" size="lg">
                Umów wizytę
              </Button>
              <Button href="/poznaj-nas" variant="outline" size="lg" className="border-polana-straw text-polana-straw hover:bg-polana-straw hover:text-polana-dark-green">
                Poznaj nas
              </Button>
            </motion.div>
          </div>

          {/* Right side - Vertical Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-shrink-0 order-1 md:order-2"
          >
            <div className="relative w-[200px] sm:w-[260px] md:w-[300px] lg:w-[360px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 ring-4 ring-polana-lime/20">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/polana-intro.mp4" type="video/mp4" />
              </video>
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-polana-dark-green/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - hidden on mobile, shown on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-polana-straw/50"
        >
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
        </motion.div>
      </section>

      {/* What to Expect Video Section */}
      <section className="py-16 md:py-24 bg-polana-straw">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-polana-dark-green mb-6">
                Czego możesz się spodziewać?
              </h2>
              <p className="text-lg text-polana-dark-green/70 mb-6 leading-relaxed">
                Zanim przyjdziesz na pierwszą wizytę, zobacz jak wygląda nasz dzień
                w Polanie Przygody. Przygotowaliśmy krótki film, który pomoże
                Twojemu dziecku oswoić się z nowym miejscem.
              </p>
              <ul className="space-y-3 text-polana-dark-green/80">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-polana-lime rounded-full" />
                  Przyjazna atmosfera od pierwszych chwil
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-polana-lime rounded-full" />
                  Kolorowe, bezpieczne przestrzenie
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-polana-lime rounded-full" />
                  Terapia przez zabawę i przygodę
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[9/16] max-w-[320px] mx-auto rounded-2xl overflow-hidden shadow-xl">
                <video
                  controls
                  playsInline
                  poster="/images/gabinety/poczekalnia.png"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/czego-mozesz-sie-spodziewac.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
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
                id: "katarzyna-karwatka",
                name: "Katarzyna Karwatka",
                role: "Założycielka, Logopeda",
                experience: "Logopeda od 12 lat",
                photo: "/images/terapeuci/kasia.jpeg",
              },
              {
                id: "weronika-saczewska",
                name: "Weronika Saczewska",
                role: "Terapeuta SI",
                experience: "Specjalista integracji sensorycznej",
                photo: "/images/terapeuci/weronika.jpg",
              },
              {
                id: "magdalena-wawrzycka",
                name: "Magdalena Wawrzycka",
                role: "Logopeda",
                experience: "14 lat doświadczenia",
                photo: "/images/terapeuci/magda.jpeg",
              },
            ].map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/terapeuci#${member.id}`} className="block">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-polana-dark-green/10">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-polana-dark-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-polana-dark-green">
                    {member.name}
                  </h3>
                  <p className="text-polana-dark-green/70">{member.role}</p>
                  <p className="text-sm text-polana-dark-green/50 mt-1">
                    {member.experience}
                  </p>
                </Link>
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

