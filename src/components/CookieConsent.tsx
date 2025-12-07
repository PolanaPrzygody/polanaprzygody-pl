"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay to avoid layout shift on page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-polana-dark-green rounded-2xl shadow-2xl shadow-black/20 p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Icon */}
              <div className="hidden md:flex w-12 h-12 bg-polana-lime/20 rounded-xl items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-polana-lime"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-polana-straw text-sm md:text-base leading-relaxed">
                  Używamy plików cookies, aby zapewnić najlepsze doświadczenia na naszej stronie.
                  Kontynuując przeglądanie, zgadzasz się na ich użycie.{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="text-polana-lime hover:underline"
                  >
                    Polityka prywatności
                  </Link>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 w-full md:w-auto">
                <button
                  onClick={rejectCookies}
                  className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-polana-straw/70 hover:text-polana-straw border border-polana-straw/30 hover:border-polana-straw/50 rounded-lg transition-colors"
                >
                  Odrzuć
                </button>
                <button
                  onClick={acceptCookies}
                  className="flex-1 md:flex-none px-6 py-2 text-sm font-medium bg-polana-lime text-polana-dark-green hover:bg-polana-lime/90 rounded-lg transition-colors"
                >
                  Akceptuję
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

