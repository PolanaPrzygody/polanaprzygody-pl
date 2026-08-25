import { getPriceById } from "@/data/prices";

export const GENERAL_CONTACT_SUBJECT = "general";

export const serviceContactSubjects = {
  logopedia: "terapia-logopedyczna",
  "integracja-sensoryczna": "terapia-si",
  tus: "tus",
  psycholog: "konsultacja-psychologa",
  konsultacje: "konsultacja-psychologa",
} as const;

export const therapistContactSubjects = {
  "katarzyna-karwatka": "terapia-logopedyczna",
  "weronika-saczewska": "terapia-si",
  "magdalena-wawrzycka": "terapia-logopedyczna",
  "anna-kuczkowska-pluta": "konsultacja-psychologa",
} as const;

export function normalizeContactSubject(subject?: string | null): string {
  if (!subject || subject === GENERAL_CONTACT_SUBJECT) {
    return GENERAL_CONTACT_SUBJECT;
  }

  return getPriceById(subject) ? subject : GENERAL_CONTACT_SUBJECT;
}

export function createContactHref(subject: string): string {
  const normalizedSubject = normalizeContactSubject(subject);
  const query =
    normalizedSubject === GENERAL_CONTACT_SUBJECT
      ? ""
      : `?subject=${encodeURIComponent(normalizedSubject)}`;

  return `/umow-sie${query}#formularz-kontaktowy`;
}
