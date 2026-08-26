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
  (base `main`, tracker GitHub, runs `.ai/runs`). Bramka walidacyjna: `yarn lint` + `yarn build`.
- Repozytorium nie ma frameworka testowego — weryfikacja opiera się na lint/build,
  przeglądzie diffu i grepie kontrolnym.

## Progress

> Convention: `- [ ]` pending, `- [x]` done. Append ` — <commit sha>` when a step lands. Do not rename step titles.

### Phase 1: Formy płatności

- [x] 1.1 Dodaj współdzieloną stałą z formami płatności — c7779e3
- [x] 1.2 Podepnij ją w cenniku, na landingach usług i w logopedii — c7779e3
- [x] 1.3 Uzupełnij §5 regulaminu o akceptowane formy płatności — WYCOFANE na polecenie użytkownika

### Phase 2: Opis diagnozy SI

- [ ] 2.1 Rozbij opis 4 spotkań w `prices.ts`
- [ ] 2.2 Rozbij opis 4 spotkań na landingu integracji sensorycznej (cennik, zakres, proces, FAQ)

### Phase 3: Walidacja

- [ ] 3.1 Pełna bramka walidacyjna (`yarn lint`, `yarn build`) + przegląd diffu
