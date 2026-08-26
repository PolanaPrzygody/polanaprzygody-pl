# Execution plan — formy płatności + opis diagnozy SI

**Slug:** `platnosci-i-opis-diagnozy-si`
**Branch:** `feat/platnosci-i-opis-diagnozy-si`
**Base:** `main`
**Date:** 2026-08-26

## Goal

Uzupełnić treści na stronie o (1) pełną listę akceptowanych form płatności — karty,
Apple Pay, Google Pay, BLIK, przelew i gotówka — wszędzie tam, gdzie pojawia się
informacja o płatnościach, oraz (2) rozbicie czterech spotkań diagnozy SI, analogicznie
do opisu diagnozy logopedycznej.

## Scope

- `src/data/prices.ts` — opis pozycji `diagnoza-si`, nowa stała z formami płatności.
- `src/app/cennik/page.tsx` — punkt „Ważne informacje” o płatności.
- `src/components/ServiceLandingPage.tsx` — stopka cennika na landingach usług
  (integracja sensoryczna, psycholog dziecięcy, TUS).
- `src/app/logopedia/page.tsx` — stopka cennika.
- `src/app/integracja-sensoryczna/page.tsx` — opis diagnozy SI (cennik, zakres, proces, FAQ).

## Non-goals

- **Regulamin świadczenia usług pozostaje nietknięty** — na wyraźne polecenie użytkownika
  („Regulaminu nie zmieniaj”) zmiana w §5 została wycofana.
- Żadnej integracji płatniczej ani zmian w formularzach/API.
- Brak zmian w cenach (kwoty pozostają bez zmian).
- Brak nowych sekcji FAQ poza doprecyzowaniem istniejącej odpowiedzi o diagnozie SI.
- Brak zmian w polityce prywatności.

## Notes / decisions

- Użytkownik napisał „Android Pay”. Usługa nazywa się dziś **Google Pay** (Android Pay
  został przemianowany w 2018 r.), więc w treści strony używamy nazwy „Google Pay”.
- Lista form płatności trafia do jednej współdzielonej stałej (`src/data/payments.ts`),
  żeby uniknąć rozjazdu między czterema miejscami w kodzie.

## Risks

- Treści marketingowe: błędna deklaracja formy płatności wprowadza klientów w błąd —
  lista musi odpowiadać temu, co terminal w gabinecie faktycznie obsługuje.
- `.ai/agentic.config.json` nie istnieje w repozytorium; użyto domyślnych ustawień
  (base `main`, tracker GitHub, runs `.ai/runs`).
- `yarn lint` nie działa w tym repozytorium — brak jakiejkolwiek konfiguracji ESLint,
  więc `next lint` wchodzi w interaktywny kreator. Stan zastany na `main`, nie efekt tej
  zmiany. Bramka walidacyjna: `npx tsc --noEmit` + `yarn build`.
- `yarn build` wymaga `RESEND_API_KEY` (trasa `/api/contact` tworzy klienta Resend na
  poziomie modułu). Stan zastany; build uruchamiany z atrapą klucza.
- Repozytorium nie ma frameworka testowego — weryfikacja opiera się na typecheck/build,
  przeglądzie diffu i grepie po wyrenderowanym HTML-u z `.next/server/app/*.html`.

## Progress

> Convention: `- [ ]` pending, `- [x]` done. Append ` — <commit sha>` when a step lands. Do not rename step titles.

### Phase 1: Formy płatności

- [x] 1.1 Dodaj współdzieloną stałą z formami płatności — c7779e3
- [x] 1.2 Podepnij ją w cenniku, na landingach usług i w logopedii — c7779e3
- [x] 1.3 Uzupełnij §5 regulaminu o akceptowane formy płatności — WYCOFANE na polecenie użytkownika

### Phase 2: Opis diagnozy SI

- [x] 2.1 Rozbij opis 4 spotkań w `prices.ts` — 5ca7da1
- [x] 2.2 Rozbij opis 4 spotkań na landingu integracji sensorycznej (cennik, proces, FAQ) — 5ca7da1

### Phase 3: Walidacja

- [x] 3.1 Pełna bramka walidacyjna (`tsc --noEmit`, `yarn build`) + przegląd diffu — 5ca7da1
