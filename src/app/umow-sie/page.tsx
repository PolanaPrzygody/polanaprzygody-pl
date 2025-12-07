"use client";

import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export default function UmowSiePage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Dziękujemy! Wiadomość została wysłana. Odezwiemy się wkrótce.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Wystąpił błąd. Spróbuj ponownie później.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Wystąpił błąd. Spróbuj ponownie później.",
      });
    }
  };

  return (
    <>
      <PageHeader
        title="Umów się!"
        subtitle="Napisz do nas, a odezwiemy się jak najszybciej"
      />

      <section className="py-12 md:py-20 bg-polana-straw">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-polana-dark-green/5">
                <h2 className="text-2xl font-semibold text-polana-dark-green mb-6">
                  Formularz kontaktowy
                </h2>

                {status.type === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-polana-lime/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-polana-dark-green"
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
                    </div>
                    <h3 className="text-xl font-semibold text-polana-dark-green mb-2">
                      Wiadomość wysłana!
                    </h3>
                    <p className="text-polana-dark-green/70 mb-6">
                      {status.message}
                    </p>
                    <Button
                      onClick={() => setStatus({ type: "idle" })}
                      variant="outline"
                    >
                      Wyślij kolejną wiadomość
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-polana-dark-green mb-2"
                      >
                        Imię i nazwisko *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-polana-olive/30 bg-white focus:border-polana-lime focus:ring-2 focus:ring-polana-lime/20 outline-none transition-all text-polana-dark-green placeholder:text-polana-dark-green/40"
                        placeholder="Jan Kowalski"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-polana-dark-green mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-polana-olive/30 bg-white focus:border-polana-lime focus:ring-2 focus:ring-polana-lime/20 outline-none transition-all text-polana-dark-green placeholder:text-polana-dark-green/40"
                        placeholder="jan@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-polana-dark-green mb-2"
                      >
                        Numer telefonu{" "}
                        <span className="text-polana-dark-green/50">(opcjonalnie)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-polana-olive/30 bg-white focus:border-polana-lime focus:ring-2 focus:ring-polana-lime/20 outline-none transition-all text-polana-dark-green placeholder:text-polana-dark-green/40"
                        placeholder="123 456 789"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-polana-dark-green mb-2"
                      >
                        Wiadomość *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-polana-olive/30 bg-white focus:border-polana-lime focus:ring-2 focus:ring-polana-lime/20 outline-none transition-all text-polana-dark-green placeholder:text-polana-dark-green/40 resize-none"
                        placeholder="W czym możemy pomóc? Opisz sytuację dziecka, wiek, z jakim problemem się zmagacie..."
                      />
                    </div>

                    {/* Error message */}
                    {status.type === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                        {status.message}
                      </div>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={status.type === "loading"}
                    >
                      {status.type === "loading" ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Wysyłanie...
                        </span>
                      ) : (
                        "Wyślij wiadomość"
                      )}
                    </Button>

                    <p className="text-xs text-polana-dark-green/50 text-center">
                      Wysyłając formularz, wyrażasz zgodę na przetwarzanie danych
                      osobowych w celu odpowiedzi na zapytanie.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Quick contact */}
              <div className="bg-polana-dark-green rounded-3xl p-8 md:p-10 text-polana-straw">
                <h2 className="text-2xl font-semibold text-polana-lime mb-6">
                  Szybki kontakt
                </h2>

                <div className="space-y-6">
                  <a
                    href="tel:+48790512258"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-polana-lime/20 rounded-xl flex items-center justify-center group-hover:bg-polana-lime/30 transition-colors">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-polana-straw/60">Telefon</p>
                      <p className="text-lg font-medium group-hover:text-polana-lime transition-colors">
                        790 512 258
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@polanaprzygody.pl"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-polana-lime/20 rounded-xl flex items-center justify-center group-hover:bg-polana-lime/30 transition-colors">
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-polana-straw/60">Email</p>
                      <p className="text-lg font-medium group-hover:text-polana-lime transition-colors">
                        info@polanaprzygody.pl
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-polana-lime/20 rounded-xl flex items-center justify-center flex-shrink-0">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-polana-straw/60">Adres</p>
                      <p className="text-lg font-medium">
                        ul. Białowieska 69B
                        <br />
                        54-234 Wrocław
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-8 pt-8 border-t border-polana-olive/20">
                  <p className="text-sm text-polana-straw/60 mb-4">
                    Śledź nas na Instagramie
                  </p>
                  <a
                    href="https://www.instagram.com/polanaprzygody/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-polana-lime hover:text-polana-straw transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    @polanaprzygody
                  </a>
                </div>
              </div>

              {/* Opening hours */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-polana-dark-green/5">
                <h2 className="text-2xl font-semibold text-polana-dark-green mb-6">
                  Godziny pracy
                </h2>

                <div className="space-y-3">
                  {[
                    { day: "Poniedziałek", hours: "9:00 - 18:00" },
                    { day: "Wtorek", hours: "9:00 - 18:00" },
                    { day: "Środa", hours: "9:00 - 18:00" },
                    { day: "Czwartek", hours: "9:00 - 18:00" },
                    { day: "Piątek", hours: "9:00 - 16:00" },
                    { day: "Sobota", hours: "Zamknięte" },
                    { day: "Niedziela", hours: "Zamknięte" },
                  ].map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between items-center py-2 border-b border-polana-olive/20 last:border-0"
                    >
                      <span className="text-polana-dark-green">{item.day}</span>
                      <span
                        className={`font-medium ${
                          item.hours === "Zamknięte"
                            ? "text-polana-dark-green/50"
                            : "text-polana-dark-green"
                        }`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm text-polana-dark-green/60">
                  * Wizyty odbywają się po wcześniejszym umówieniu telefonicznym lub
                  przez formularz kontaktowy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-12 md:py-20 bg-polana-olive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-semibold text-polana-dark-green mb-4">
              Jak do nas trafić?
            </h2>
            <p className="text-polana-dark-green/70">
              ul. Białowieska 69B, 54-234 Wrocław
            </p>
          </motion.div>

          {/* Map placeholder */}
          <div className="aspect-[16/9] md:aspect-[21/9] bg-white rounded-3xl overflow-hidden shadow-xl shadow-polana-dark-green/5">
            <div className="w-full h-full flex items-center justify-center bg-polana-olive/20">
              <div className="text-center p-8">
                <svg
                  className="w-16 h-16 mx-auto text-polana-dark-green/30 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="text-polana-dark-green/50">
                  Mapa Google Maps
                  <br />
                  <span className="text-sm">
                    Osadź iframe z Google Maps używając adresu:
                    <br />
                    ul. Białowieska 69B, 54-234 Wrocław
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

