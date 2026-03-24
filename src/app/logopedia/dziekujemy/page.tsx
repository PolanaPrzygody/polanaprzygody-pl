"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function DziekujemyPage() {
  return (
    <div className="min-h-screen bg-polana-straw flex items-center justify-center px-4">
      <div className="max-w-xl w-full pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-polana-dark-green/10 text-center"
        >
          {/* Success icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-polana-lime/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              className="w-10 h-10 text-polana-dark-green"
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
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold text-polana-dark-green mb-4">
            Dziękujemy!
          </h1>
          <p className="text-lg text-polana-dark-green/70 mb-2">
            Twoje zgłoszenie zostało wysłane.
          </p>
          <p className="text-polana-dark-green/60 mb-8">
            Oddzwonimy w ciągu 24 godzin, aby umówić szczegóły wizyty
            logopedycznej.
          </p>

          {/* What to expect */}
          <div className="bg-polana-straw rounded-2xl p-6 mb-8 text-left">
            <h2 className="text-sm font-semibold text-polana-dark-green uppercase tracking-wide mb-4">
              Co dalej?
            </h2>
            <div className="space-y-3">
              {[
                {
                  step: "1",
                  text: "Skontaktujemy się telefonicznie w ciągu 24h",
                },
                {
                  step: "2",
                  text: "Wspólnie dobierzemy termin pierwszej wizyty",
                },
                {
                  step: "3",
                  text: "Przeprowadzimy diagnozę i omówimy plan terapii",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-polana-lime rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-polana-dark-green">
                    {item.step}
                  </div>
                  <p className="text-polana-dark-green/70 text-sm pt-0.5">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="tel:+48790512258"
              className="inline-flex items-center gap-2 text-polana-dark-green hover:text-polana-dark-green/70 transition-colors"
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
              <span className="font-medium">790 512 258</span>
            </a>
            <span className="hidden sm:inline text-polana-dark-green/30">|</span>
            <span className="text-polana-dark-green/60 text-sm">
              ul. Białowieska 69B, Wrocław
            </span>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/logopedia" variant="primary">
              Wróć do strony
            </Button>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-2.5 text-polana-dark-green/70 hover:text-polana-dark-green font-medium transition-colors text-sm"
            >
              Strona główna
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
