"use client";

import Link from "next/link";
import { useState } from "react";

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

interface InlineServiceLeadFormProps {
  id: string;
  serviceName: string;
  defaultMessage: string;
  successPath?: string;
}

export function InlineServiceLeadForm({
  id,
  serviceName,
  defaultMessage,
  successPath,
}: InlineServiceLeadFormProps) {
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
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value, type } = event.target;
    const newValue =
      type === "checkbox" ? event.target.checked : value;

    setFormData((previous) => ({ ...previous, [name]: newValue }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `[Landing: ${serviceName}]\nTelefon: ${formData.phone}\n${
            formData.message
              ? `Wiek dziecka / wiadomość: ${formData.message}`
              : defaultMessage
          }`,
          acceptedTerms: formData.acceptedTerms,
          acceptedServiceTerms: formData.acceptedServiceTerms,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.error || "Wystąpił błąd. Spróbuj ponownie.",
        });
        return;
      }

      if (successPath) {
        window.location.href = successPath;
        return;
      }

      setStatus({
        type: "success",
        message: "Otrzymaliśmy zgłoszenie. Skontaktujemy się z Tobą.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Wystąpił błąd. Spróbuj ponownie.",
      });
    }
  };

  if (status.type === "success") {
    return (
      <div
        id={id}
        role="status"
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="w-10 h-10 bg-polana-lime/20 rounded-full flex items-center justify-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-polana-lime"
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
          </span>
          <div className="text-left">
            <h2 className="text-lg font-semibold text-white">Dziękujemy!</h2>
            <p className="text-polana-straw/80 text-sm">{status.message}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-8 bg-polana-lime/20 rounded-full flex items-center justify-center flex-shrink-0">
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-polana-lime"
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
        </span>
        <h2 className="text-lg font-bold text-white">
          Zostaw kontakt — zadzwonimy, aby umówić szczegóły
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          <input
            aria-label="Imię"
            type="text"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 focus:border-polana-lime focus:ring-2 focus:ring-polana-lime/20 outline-none transition-all text-white placeholder:text-polana-straw/60"
            placeholder="Imię *"
          />
          <input
            aria-label="Email"
            type="email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 focus:border-polana-lime focus:ring-2 focus:ring-polana-lime/20 outline-none transition-all text-white placeholder:text-polana-straw/60"
            placeholder="Email *"
          />
          <input
            aria-label="Telefon"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 focus:border-polana-lime focus:ring-2 focus:ring-polana-lime/20 outline-none transition-all text-white placeholder:text-polana-straw/60"
            placeholder="Telefon *"
          />
          <input
            aria-label="Wiek dziecka lub krótka wiadomość"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 focus:border-polana-lime focus:ring-2 focus:ring-polana-lime/20 outline-none transition-all text-white placeholder:text-polana-straw/60"
            placeholder="Wiek dziecka (opcjonalnie)"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex-1 flex flex-col sm:flex-row gap-x-6 gap-y-2">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                required
                className="mt-0.5 w-4 h-4 text-polana-lime bg-white/10 border-white/30 rounded focus:ring-polana-lime focus:ring-2 cursor-pointer"
              />
              <span className="text-xs text-polana-straw">
                Akceptuję{" "}
                <Link
                  href="/polityka-prywatnosci"
                  className="underline hover:text-polana-lime transition-colors"
                  target="_blank"
                >
                  Politykę prywatności
                </Link>{" "}
                *
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="acceptedServiceTerms"
                checked={formData.acceptedServiceTerms}
                onChange={handleChange}
                required
                className="mt-0.5 w-4 h-4 text-polana-lime bg-white/10 border-white/30 rounded focus:ring-polana-lime focus:ring-2 cursor-pointer"
              />
              <span className="text-xs text-polana-straw">
                Akceptuję{" "}
                <Link
                  href="/regulamin-swiadczenia-uslug"
                  className="underline hover:text-polana-lime transition-colors"
                  target="_blank"
                >
                  regulamin usług
                </Link>{" "}
                *
              </span>
            </label>
          </div>

          {status.type === "error" && (
            <p role="alert" className="text-red-200 text-sm">
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={
              status.type === "loading" ||
              !formData.acceptedTerms ||
              !formData.acceptedServiceTerms
            }
            className="px-8 py-3 bg-polana-lime text-polana-dark-green rounded-xl font-semibold text-base hover:bg-polana-lime/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap flex-shrink-0"
          >
            {status.type === "loading" ? "Wysyłanie..." : "Zadzwońcie do mnie"}
          </button>
        </div>
      </form>
    </div>
  );
}
