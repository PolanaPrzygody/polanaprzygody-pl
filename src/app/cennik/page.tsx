"use client";

import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { formatPrice, getPricesByCategory, PriceItem } from "@/data/prices";
import Link from "next/link";

// Component for price card with hover button
function PriceCard({ item }: { item: PriceItem }) {
  return (
    <Card variant="elevated" className="group relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-polana-dark-green">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-polana-dark-green/60 text-sm mt-1">
            {item.description}
          </p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold text-polana-dark-green whitespace-nowrap">
          {formatPrice(item.price, item.currency)}
        </div>
        <Link
          href="/umow-sie"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-polana-dark-green text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-polana-olive whitespace-nowrap"
        >
          Umów Się
        </Link>
      </div>
    </Card>
  );
}

export default function CennikPage() {
  const diagnozy = getPricesByCategory("diagnoza");
  const terapie = getPricesByCategory("terapia");

  return (
    <>
      <PageHeader
        title="Cennik"
        subtitle="Przejrzyste ceny usług terapeutycznych"
      />

      {/* Price list */}
      <section className="py-12 md:py-20 bg-polana-straw">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-lg text-polana-dark-green/80 max-w-2xl mx-auto">
              Oferujemy profesjonalne usługi terapeutyczne w przystępnych cenach.
              Każda usługa jest dopasowana do indywidualnych potrzeb dziecka.
            </p>
          </motion.div>

          {/* Diagnostics section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-polana-dark-green mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-polana-violet/30 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-polana-dark-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>
              Diagnostyka
            </h2>

            <div className="space-y-4">
              {diagnozy.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PriceCard item={item} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Therapy section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-polana-dark-green mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-polana-lime/30 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-polana-dark-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </span>
              Terapia
            </h2>

            <div className="space-y-4">
              {terapie.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PriceCard item={item} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info section */}
      <section className="py-12 md:py-20 bg-polana-olive/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-polana-dark-green mb-6">
              Ważne informacje
            </h2>

            <ul className="space-y-4">
              {[
                "Płatność gotówką lub przelewem",
                "Istnieje możliwość wystawienia faktury",
                "Odwołanie wizyty należy zgłosić minimum 24 godziny wcześniej",
                "Pierwsza wizyta obejmuje rozmowę z rodzicami i wstępną ocenę",
              ].map((info, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-polana-dark-green/80"
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {info}
                </motion.li>
              ))}
            </ul>
          </motion.div>
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
              Masz pytania o ceny lub usługi?
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

