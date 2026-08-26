"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { formatPrice } from "@/data/prices";
import { paymentMethodsSentence } from "@/data/payments";
import { logopediaFaq } from "@/data/faqs";
import { InlineServiceLeadForm } from "@/components/InlineServiceLeadForm";
import { serviceContactSubjects } from "@/lib/contact";

// ─── Contact Form (simplified: leave your number, we'll call) ────────────────
interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  acceptedTerms: boolean;
  acceptedServiceTerms: boolean;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

function LeadForm({ id }: { id?: string }) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptedTerms: false,
    acceptedServiceTerms: false,
  });
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: serviceContactSubjects.logopedia,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `[Landing: Logopedia]\nTelefon: ${formData.phone}\n${formData.message ? `Wiadomość: ${formData.message}` : "Proszę o kontakt w sprawie logopedii."}`,
          acceptedTerms: formData.acceptedTerms,
          acceptedServiceTerms: formData.acceptedServiceTerms,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = "/logopedia/dziekujemy";
      } else {
        setStatus({
          type: "error",
          message: data.error || "Wystąpił błąd. Spróbuj ponownie.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Wystąpił błąd. Spróbuj ponownie.",
      });
    }
  };

  return (
    <div
      id={id}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-polana-dark-green/10 border border-polana-olive/20"
    >
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-polana-lime/30 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg
            className="w-6 h-6 text-polana-dark-green"
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
        <h3 className="text-xl font-bold text-polana-dark-green">
          Zostaw kontakt
        </h3>
        <p className="text-polana-dark-green/60 text-sm mt-1">
          Zadzwonimy, aby umówić szczegóły
        </p>
      </div>

      {status.type === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-6"
        >
          <div className="w-14 h-14 bg-polana-lime/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-7 h-7 text-polana-dark-green"
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
          <h4 className="text-lg font-semibold text-polana-dark-green mb-1">
            Dziękujemy!
          </h4>
          <p className="text-polana-dark-green/70 text-sm">
            {status.message}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor={`${id}-name`}
              className="block text-sm font-medium text-polana-dark-green mb-1.5"
            >
              Imię *
            </label>
            <input
              type="text"
              id={`${id}-name`}
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-polana-olive/30 bg-white focus:border-polana-lime focus:ring-2 focus:ring-polana-lime/20 outline-none transition-all text-polana-dark-green placeholder:text-polana-dark-green/40"
              placeholder="Jak masz na imię?"
            />
          </div>

          <div>
            <label
              htmlFor={`${id}-email`}
              className="block text-sm font-medium text-polana-dark-green mb-1.5"
            >
              Email *
            </label>
            <input
              type="email"
              id={`${id}-email`}
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-polana-olive/30 bg-white focus:border-polana-lime focus:ring-2 focus:ring-polana-lime/20 outline-none transition-all text-polana-dark-green placeholder:text-polana-dark-green/40"
              placeholder="jan@example.com"
            />
          </div>

          <div>
            <label
              htmlFor={`${id}-phone`}
              className="block text-sm font-medium text-polana-dark-green mb-1.5"
            >
              Numer telefonu *
            </label>
            <input
              type="tel"
              id={`${id}-phone`}
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-polana-olive/30 bg-white focus:border-polana-lime focus:ring-2 focus:ring-polana-lime/20 outline-none transition-all text-polana-dark-green placeholder:text-polana-dark-green/40"
              placeholder="123 456 789"
            />
          </div>

          <div>
            <label
              htmlFor={`${id}-message`}
              className="block text-sm font-medium text-polana-dark-green mb-1.5"
            >
              Wiadomość{" "}
              <span className="text-polana-dark-green/50">(opcjonalnie)</span>
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-polana-olive/30 bg-white focus:border-polana-lime focus:ring-2 focus:ring-polana-lime/20 outline-none transition-all text-polana-dark-green placeholder:text-polana-dark-green/40 resize-none"
              placeholder="Np. wiek dziecka, z czym potrzebujecie pomocy..."
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id={`${id}-acceptedTerms`}
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              required
              className="mt-1 w-4 h-4 text-polana-lime bg-white border-polana-olive/30 rounded focus:ring-polana-lime focus:ring-2 cursor-pointer"
            />
            <label
              htmlFor={`${id}-acceptedTerms`}
              className="text-xs text-polana-dark-green/60 cursor-pointer"
            >
              Akceptuję{" "}
              <Link
                href="/polityka-prywatnosci"
                className="underline hover:text-polana-dark-green transition-colors"
                target="_blank"
              >
                Politykę prywatności
              </Link>{" "}
              i wyrażam zgodę na przetwarzanie danych w celu kontaktu. *
            </label>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id={`${id}-acceptedServiceTerms`}
              name="acceptedServiceTerms"
              checked={formData.acceptedServiceTerms}
              onChange={handleChange}
              required
              className="mt-1 w-4 h-4 text-polana-lime bg-white border-polana-olive/30 rounded focus:ring-polana-lime focus:ring-2 cursor-pointer"
            />
            <label
              htmlFor={`${id}-acceptedServiceTerms`}
              className="text-xs text-polana-dark-green/60 cursor-pointer"
            >
              Akceptuję{" "}
              <Link
                href="/regulamin-swiadczenia-uslug"
                className="underline hover:text-polana-dark-green transition-colors"
                target="_blank"
              >
                regulamin świadczenia usług
              </Link>
              . *
            </label>
          </div>

          {status.type === "error" && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={
              status.type === "loading" ||
              !formData.acceptedTerms ||
              !formData.acceptedServiceTerms
            }
            className="w-full py-3.5 bg-polana-dark-green text-polana-straw rounded-xl font-semibold text-lg hover:bg-polana-dark-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {status.type === "loading" ? (
              <span className="flex items-center justify-center gap-2">
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
              "Zadzwońcie do mnie"
            )}
          </button>

          <p className="text-center text-xs text-polana-dark-green/40">
            Oddzwaniamy w ciągu 24h
          </p>
        </form>
      )}
    </div>
  );
}

// ─── Speech therapy prices ───────────────────────────────────────────────────
const logoPrices = [
  {
    name: "Diagnoza logopedyczna",
    price: 300,
    currency: "zł",
    description: "2 spotkania: 1 z rodzicem, drugie z dzieckiem",
  },
  {
    name: "Terapia logopedyczna",
    price: 200,
    currency: "zł",
    description: "40 min z dzieckiem + 10 min z rodzicem",
  },
  {
    name: "Rediagnoza logopedyczna",
    price: 200,
    currency: "zł",
    description: "Kontrolna ocena postępów",
  },
  {
    name: "Wydanie opinii logopedycznej",
    price: 150,
    currency: "zł",
    description: "Usługa dodatkowo płatna",
  },
];

// ─── Speech therapists ───────────────────────────────────────────────────────
const speechTherapists = [
  {
    name: "Katarzyna Karwatka",
    role: "Założycielka, Logopeda",
    experience: "12 lat doświadczenia",
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
    quote:
      "W mojej pracy najważniejszy jest indywidualny plan pracy, bo każde dziecko ma inne potrzeby.",
    description:
      "Ukończyła studia na Uniwersytecie Wrocławskim. Doświadczenie zdobywała pracując w przedszkolach, mając pod swoją opieką 250 dzieci co roku. Ukończone studia z edukacji muzycznej pozwalają jej na wykorzystanie elementów muzykoterapii w terapii logopedycznej.",
  },
  {
    name: "Magdalena Wawrzycka",
    role: "Logopeda, Neurologopeda",
    experience: "Logopeda kliniczny i neurologopeda",
    photo: "/images/terapeuci/magda.jpeg",
    specializations: [
      "Neurologopedia",
      "Logopedia kliniczna",
      "Terapia miofunkcjonalna",
      "Diagnoza zaburzeń mowy",
      "Terapia zaburzeń komunikacji",
    ],
    quote:
      "W terapii stawiam na indywidualne podejście, uważność i budowanie relacji opartej na zaufaniu.",
    description:
      "Logopeda i neurologopeda, który nieustannie poszerza swoją wiedzę studiując logopedię kliniczną. Specjalizuje się w diagnozowaniu i terapii zaburzeń mowy o podłożu neurologicznym. Prowadzi terapię miofunkcjonalną, wspierając prawidłowy rozwój funkcji takich jak oddychanie, żucie, połykanie i mowa.",
  },
];

// ─── Hero Video with mute/unmute ─────────────────────────────────────────────
function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [ready, setReady] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-[180px] lg:w-[220px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 ring-4 ring-polana-lime/20">
      <video
        ref={videoRef}
        autoPlay={ready}
        loop
        muted
        playsInline
        preload="none"
        poster="/images/posters/polana-intro.webp"
        className="absolute inset-0 w-full h-full object-cover"
      >
        {ready && (
          <source src="/polana-intro-audio-web.mp4" type="video/mp4" />
        )}
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-polana-dark-green/30 via-transparent to-transparent pointer-events-none" />
      {!ready ? (
        <button
          type="button"
          onClick={() => setReady(true)}
          aria-label="Odtwórz film o Polanie Przygody"
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer"
        >
          <span className="w-14 h-14 rounded-full bg-polana-lime text-polana-dark-green flex items-center justify-center shadow-xl">
            <svg aria-hidden="true" className="w-6 h-6 ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute bottom-3 right-3 w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors cursor-pointer z-10"
          aria-label={isMuted ? "Włącz dźwięk" : "Wyłącz dźwięk"}
        >
        {isMuted ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
        </button>
      )}
    </div>
  );
}

// ─── Therapist Mini Profiles (hero section) ──────────────────────────────────
function TherapistMiniProfiles() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const expanded = speechTherapists.find((t) => t.name === expandedId);

  return (
    <div>
      {/* Buttons row - always side by side */}
      <div className="flex flex-col sm:flex-row gap-3">
        {speechTherapists.map((therapist) => {
          const isExpanded = expandedId === therapist.name;
          return (
            <button
              key={therapist.name}
              onClick={() =>
                setExpandedId(isExpanded ? null : therapist.name)
              }
              className={`flex items-center gap-3 backdrop-blur-sm rounded-2xl px-4 py-3 transition-colors cursor-pointer ${
                isExpanded
                  ? "bg-white/15 ring-1 ring-polana-lime/30"
                  : "bg-white/10 hover:bg-white/15"
              }`}
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-polana-lime/40">
                <Image
                  src={therapist.photo}
                  alt={therapist.name}
                  fill
                  className="object-cover object-top"
                  sizes="40px"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white leading-tight">
                  {therapist.name}
                </p>
                <p className="text-xs text-polana-straw/60">
                  {therapist.role}
                </p>
              </div>
              <motion.svg
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-4 text-polana-straw/40 ml-auto sm:ml-2 flex-shrink-0"
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
          );
        })}
      </div>

      {/* Expanded content - renders below both buttons */}
      <AnimatePresence mode="wait">
        {expanded && (
          <motion.div
            key={expanded.name}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <p className="text-sm text-polana-straw/80 leading-relaxed mb-3">
                {expanded.description}
              </p>
              <blockquote className="border-l-2 border-polana-lime/50 pl-3 italic text-xs text-polana-straw/60">
                &ldquo;{expanded.quote}&rdquo;
              </blockquote>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {expanded.specializations.slice(0, 4).map((spec) => (
                  <span
                    key={spec}
                    className="px-2 py-0.5 bg-polana-lime/10 text-polana-lime/80 rounded-full text-xs"
                  >
                    {spec}
                  </span>
                ))}
                {expanded.specializations.length > 4 && (
                  <span className="px-2 py-0.5 text-polana-straw/40 text-xs">
                    +{expanded.specializations.length - 4} więcej
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function LogopediaLandingPage() {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative bg-polana-dark-green">
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-polana-lime rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-polana-violet rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-10">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
            {/* Left: headline */}
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 bg-polana-lime/20 text-polana-lime text-sm font-medium rounded-full mb-4">
                Diagnoza i terapia rozwoju mowy
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Logopeda i neurologopeda dla dzieci{" "}
                <span className="text-polana-lime">we Wrocławiu</span>
              </h1>
              <p className="text-base md:text-lg text-polana-straw/80 mb-6 max-w-2xl leading-relaxed">
                Doświadczeni logopedzi i neurologopedzi z pasją do pracy z
                dziećmi. Diagnoza, terapia i indywidualny plan działania
                dopasowany do potrzeb Twojego dziecka.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 mb-6">
                {[
                  { number: "12+", label: "lat doświadczenia" },
                  { number: "2", label: "logopedów w zespole" },
                ].map((badge) => (
                  <div key={badge.label} className="text-center">
                    <div className="text-2xl font-bold text-polana-lime">
                      {badge.number}
                    </div>
                    <div className="text-sm text-polana-straw/60">
                      {badge.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Therapist mini-profiles */}
              <TherapistMiniProfiles />
            </div>

            {/* Right: video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex-shrink-0 hidden md:block"
            >
              <HeroVideo />
            </motion.div>
          </div>

          {/* Inline form below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
            ref={formRef}
          >
            <InlineServiceLeadForm
              id="hero-form"
              serviceName="Logopedia"
              subjectId={serviceContactSubjects.logopedia}
              defaultMessage="Proszę o kontakt w sprawie logopedii."
              successPath="/logopedia/dziekujemy"
            />
          </motion.div>

          {/* Scroll down button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => {
                document
                  .getElementById("problems-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col items-center gap-2 text-polana-straw/50 hover:text-polana-lime transition-colors cursor-pointer group"
            >
              <span className="text-sm font-medium">
                Dowiedz się więcej
              </span>
              <motion.svg
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
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
              </motion.svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── What problems we solve ── */}
      <section id="problems-section" className="py-16 md:py-24 bg-polana-straw">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-polana-dark-green mb-4">
              Kiedy warto odwiedzić logopedę?
            </h2>
            <p className="text-lg text-polana-dark-green/70 max-w-2xl mx-auto">
              Im wcześniej rozpoczniemy terapię, tym szybciej zobaczycie efekty
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Wady wymowy",
                description:
                  "Dziecko zamienia, opuszcza lub zniekształca głoski (np. seplenienie, reranie)",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
              },
              {
                title: "Opóźniony rozwój mowy",
                description:
                  "Dziecko mówi mniej niż rówieśnicy lub nie mówi wcale w oczekiwanym wieku",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Trudności z komunikacją",
                description:
                  "Dziecko ma problem z wyrażaniem myśli, budowaniem zdań lub rozumieniem poleceń",
                icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
              },
              {
                title: "Jąkanie",
                description:
                  "Zaburzenia płynności mowy - powtarzanie sylab, blokowanie, przeciąganie głosek",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Problemy z żuciem i połykaniem",
                description:
                  "Nieprawidłowe nawyki oralne, oddychanie przez usta, trudności z jedzeniem",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "Autyzm / Mutyzm wybiórczy",
                description:
                  "Specjalistyczne wsparcie komunikacji dla dzieci ze spektrum lub mutyzmem",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
              {
                title: "Zaburzenia neurologiczne mowy",
                description:
                  "Neurologopedia: diagnoza i terapia zaburzeń mowy o podłożu neurologicznym (afazja, dyzartria, apraksja mowy)",
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-lg shadow-polana-dark-green/5 hover:shadow-xl transition-shadow ${index === 6 ? "lg:col-start-2" : ""}`}
              >
                <div className="w-12 h-12 bg-polana-lime/20 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-polana-dark-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-polana-dark-green mb-2">
                  {item.title}
                </h3>
                <p className="text-polana-dark-green/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Speech Therapists ── */}
      <section className="py-16 md:py-24 bg-polana-olive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-polana-dark-green mb-4">
              Nasi logopedzi i neurologopedzi
            </h2>
            <p className="text-lg text-polana-dark-green/70 max-w-2xl mx-auto">
              Doświadczeni specjaliści z pasją do pracy z dziećmi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {speechTherapists.map((therapist, index) => (
              <motion.div
                key={therapist.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-polana-dark-green/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={therapist.photo}
                    alt={therapist.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-polana-dark-green/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <p className="text-sm text-polana-lime font-medium">
                      {therapist.experience}
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      {therapist.name}
                    </h3>
                    <p className="text-polana-straw/80">{therapist.role}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-polana-dark-green/80 leading-relaxed mb-4">
                    {therapist.description}
                  </p>

                  <blockquote className="border-l-4 border-polana-lime pl-4 italic text-polana-dark-green/60 mb-6 text-sm">
                    &ldquo;{therapist.quote}&rdquo;
                  </blockquote>

                  <div className="flex flex-wrap gap-2">
                    {therapist.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1 bg-polana-olive/20 text-polana-dark-green rounded-full text-xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services & What We Offer ── */}
      <section className="py-16 md:py-24 bg-polana-straw">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-polana-dark-green mb-4">
                  Co oferujemy?
                </h2>
                <p className="text-lg text-polana-dark-green/70">
                  Kompleksowa opieka logopedyczna od diagnozy po terapię
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    title: "Diagnoza logopedyczna",
                    description:
                      "Szczegółowa ocena mowy i komunikacji dziecka. Dwa spotkania: jedno z rodzicem (wywiad), drugie z dzieckiem (badanie). Na zakończenie omawiamy wyniki i plan działania.",
                    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                    color: "bg-polana-violet/20",
                  },
                  {
                    title: "Terapia logopedyczna",
                    description:
                      "Regularne zajęcia terapeutyczne dopasowane do potrzeb dziecka. 40 minut pracy z dzieckiem + 10 minut omówienia z rodzicem. Ćwiczenia aparatu artykulacyjnego, stymulacja mowy, korekcja wad wymowy.",
                    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                    color: "bg-polana-lime/20",
                  },
                  {
                    title: "Konsultacje dla rodziców",
                    description:
                      "Wskazówki do ćwiczeń w domu, omówienie postępów, materiały wspierające. Pomagamy rodzicom skutecznie wspierać rozwój mowy dziecka na co dzień.",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                    color: "bg-polana-olive/20",
                  },
                  {
                    title: "Neurologopedia",
                    description:
                      "Specjalistyczna diagnoza i terapia zaburzeń mowy o podłożu neurologicznym. Logopedia kliniczna prowadzona przez wykwalifikowanego neurologopedę - pomoc przy afazji, dyzartrii, apraksji mowy i zaburzeniach komunikacji.",
                    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    color: "bg-polana-lime/30",
                  },
                  {
                    title: "Terapia miofunkcjonalna",
                    description:
                      "Praca nad prawidłową funkcją mięśni twarzy, języka i aparatu artykulacyjnego. Wsparcie w oddychaniu, żuciu i połykaniu.",
                    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                    color: "bg-polana-violet/20",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-md shadow-polana-dark-green/5 flex gap-5"
                  >
                    <div
                      className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <svg
                        className="w-6 h-6 text-polana-dark-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={service.icon}
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-polana-dark-green mb-1">
                        {service.title}
                      </h3>
                      <p className="text-polana-dark-green/60 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sticky form on desktop */}
            <div className="lg:col-span-2 hidden lg:block">
              <div className="sticky top-24">
                <LeadForm id="services-form" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-16 md:py-24 bg-polana-dark-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-polana-lime mb-4">
              Cennik usług logopedycznych
            </h2>
            <p className="text-lg text-polana-straw/70">
              Przejrzyste ceny, bez ukrytych kosztów
            </p>
          </motion.div>

          <div className="space-y-4">
            {logoPrices.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-white/10"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-polana-straw/50 text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="text-2xl font-bold text-polana-lime whitespace-nowrap">
                  {formatPrice(item.price, item.currency)}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-polana-straw/40 text-sm mt-8"
          >
            {paymentMethodsSentence}. Możliwość wystawienia faktury.
          </motion.p>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 md:py-24 bg-polana-olive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-polana-dark-green mb-4">
              Jak zacząć?
            </h2>
            <p className="text-lg text-polana-dark-green/70">
              4 proste kroki do lepszej mowy Twojego dziecka
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Zostaw kontakt",
                description:
                  "Wypełnij formularz lub zadzwoń. Odezwiemy się w ciągu 24 godzin.",
              },
              {
                step: "2",
                title: "Rozmowa telefoniczna",
                description:
                  "Porozmawiamy o potrzebach dziecka i dobierzemy termin pierwszej wizyty.",
              },
              {
                step: "3",
                title: "Diagnoza",
                description:
                  "Przeprowadzimy szczegółową diagnozę i omówimy plan terapii.",
              },
              {
                step: "4",
                title: "Terapia",
                description:
                  "Regularne zajęcia z widocznymi efektami i wsparciem dla rodziców.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl p-6 shadow-md shadow-polana-dark-green/5 text-center relative"
              >
                <div className="w-12 h-12 bg-polana-lime rounded-full flex items-center justify-center mx-auto mb-4 text-polana-dark-green font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-polana-dark-green mb-2">
                  {item.title}
                </h3>
                <p className="text-polana-dark-green/60 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gabinet photos ── */}
      <section className="py-16 md:py-24 bg-polana-straw">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-polana-dark-green mb-4">
              Nasz gabinet
            </h2>
            <p className="text-lg text-polana-dark-green/70">
              Przyjazne i profesjonalnie wyposażone wnętrza
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                src: "/images/gabinety/gabinet-logopedy-1.png",
                alt: "Gabinet logopedyczny",
              },
              {
                src: "/images/gabinety/gabinet-logopedy-2.png",
                alt: "Gabinet logopedyczny - strefa pracy",
              },
              {
                src: "/images/gabinety/gabinet-logopedy-3.png",
                alt: "Gabinet logopedyczny - pomoce",
              },
              {
                src: "/images/gabinety/poczekalnia.png",
                alt: "Poczekalnia",
              },
              {
                src: "/images/gabinety/sala-si.png",
                alt: "Sala integracji sensorycznej",
              },
              {
                src: "/images/gabinety/gabinet-psychologa.png",
                alt: "Gabinet konsultacyjny",
              },
            ].map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Frequently asked questions ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-polana-dark-green mb-8">
            Najczęstsze pytania o logopedię
          </h2>
          <div className="space-y-4">
            {logopediaFaq.map((item) => (
              <details
                key={item.question}
                className="group bg-polana-straw rounded-2xl p-6"
              >
                <summary className="cursor-pointer list-none font-semibold text-polana-dark-green flex items-start justify-between gap-4">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-2xl leading-none group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <p className="text-polana-dark-green/75 leading-relaxed mt-4 pr-8">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location + Final CTA with form ── */}
      <section className="py-16 md:py-24 bg-polana-dark-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Location info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-polana-lime mb-6">
                Odwiedź nas
              </h2>
              <p className="text-lg text-polana-straw/80 mb-8">
                Poradnia logopedyczna Polana Przygody mieści się we Wrocławiu,
                w przyjaznym dzieciom otoczeniu.
              </p>

              <div className="space-y-6 mb-8">
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
                    <p className="text-sm text-polana-straw/50">Adres</p>
                    <p className="text-lg font-medium text-polana-straw">
                      ul. Białowieska 69B
                      <br />
                      54-234 Wrocław
                    </p>
                  </div>
                </div>

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
                    <p className="text-sm text-polana-straw/50">Telefon</p>
                    <p className="text-lg font-medium text-polana-straw group-hover:text-polana-lime transition-colors">
                      790 512 258
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-polana-lime/20 rounded-xl flex items-center justify-center">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-polana-straw/50">
                      Godziny pracy
                    </p>
                    <p className="text-lg font-medium text-polana-straw">
                      Pon-Pt: 9:00-20:00
                      <br />
                      Sob: 10:00-14:00
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Final form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadForm id="bottom-form" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
