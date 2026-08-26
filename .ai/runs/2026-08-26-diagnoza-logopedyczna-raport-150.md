# Execution plan — pisemny raport z diagnozy logopedycznej jako wariant diagnozy

Run: `om-auto-create-pr`
Date: 2026-08-26
Slug: `diagnoza-logopedyczna-raport-150`
Branch: `feat/diagnoza-logopedyczna-raport-150`
Base: `main`

## Goal

Wszędzie, gdzie prezentowana jest cena diagnozy logopedycznej, dodać informację, że
sporządzenie pisemnego raportu z diagnozy jest dodatkowo płatne 150 zł — jako **wariant
diagnozy logopedycznej**, a nie osobna pozycja cennika.

## Context

Repozytorium ma już osobną pozycję cennikową `opinia-logopedyczna` — „Wydanie opinii
logopedycznej”, 150 zł, „usługa dodatkowo płatna”. To dokładnie ta usługa, o którą chodzi
w briefie, ale w formie, której użytkownik nie chce (osobna pozycja). Zadanie sprowadza się
więc do: **usunąć pozycję samodzielną i wpiąć ją jako dopisek/wariant przy diagnozie
logopedycznej** we wszystkich powierzchniach (cennik, /uslugi, /logopedia, FAQ, JSON-LD).

Powierzchnie zawierające cenę diagnozy logopedycznej:

- `src/data/prices.ts` — źródło prawdy dla `/cennik`, `/uslugi`, formularza kontaktowego i
  JSON-LD `OfferCatalog` na `/cennik`.
- `src/app/cennik/page.tsx` — karta ceny (`PriceCard`).
- `src/app/cennik/layout.tsx` — JSON-LD `OfferCatalog` generowany z `prices`.
- `src/app/uslugi/page.tsx` — mapa `servicePriceMap` + lista cen w karcie usługi.
- `src/app/logopedia/page.tsx` — lokalna tablica `logoPrices` (sekcja cennika na landingu).
- `src/app/logopedia/layout.tsx` — JSON-LD `Service.offers`.
- `src/data/faqs.ts` — FAQ „Ile kosztuje diagnoza logopedyczna…” (renderowane też jako
  JSON-LD `FAQPage`).

`public/llms.txt` świadomie nie zawiera cen („Źródłem aktualnych cen … są odpowiednie strony
serwisu”) — zostaje bez zmian.

## Scope

- Model danych: opcjonalne pole `note` na `PriceItem` opisujące wariant/dopłatę.
- Renderowanie `note` na `/cennik`, `/uslugi` i `/logopedia`.
- Usunięcie pozycji `opinia-logopedyczna` z cennika.
- Aktualizacja JSON-LD (cennik + logopedia) i FAQ.

## Non-goals

- Zmiana samej ceny diagnozy (300 zł) ani terapii/rediagnozy.
- Dodawanie analogicznej notatki przy diagnozie SI i psychologicznej.
- Zmiany w `public/llms.txt` i regulaminie świadczenia usług.
- Wprowadzanie taksonomii etykiet pipeline'u do repozytorium.

## Risks

- **Brak `.ai/agentic.config.json`** — konfiguracja pipeline'u nie istnieje w repo. Wartości
  wyprowadzone z repozytorium i poprzedniego runu (`.ai/runs/2026-08-26-platnosci-i-opis-diagnozy-si.md`,
  PR #1): `baseBranch=main`, `runsDir=.ai/runs`, tracker `github`,
  `validation.commands=["yarn lint","yarn build"]`. Udokumentowane w PR.
- **`yarn lint` nie jest użyteczną bramką** — repozytorium nie ma commitowanej konfiguracji
  ESLint, więc `next lint` wchodzi w interaktywny kreator i kończy się kodem 1 niezależnie
  od zmian. Stan zastany, nienaprawiany w tym runie (dodanie `.eslintrc.json` to osobna
  zmiana infrastrukturalna). Faktyczną bramką jest `yarn build`, które wykonuje też
  sprawdzenie typów i prerender wszystkich stron.
- **`yarn build` wymaga `RESEND_API_KEY`** — `/api/contact` instancjonuje klienta Resend
  w czasie zbierania danych stron. Do lokalnej weryfikacji build uruchamiany jest z atrapą
  klucza (`RESEND_API_KEY=re_dummy_build_key`); żaden prawdziwy sekret nie jest używany
  ani zapisywany.
- **Brak frameworka testowego** — repozytorium nie ma jakiegokolwiek runnera testów
  (`package.json`: `dev/build/start/lint/indexnow`). Zasada „każda zmiana kodu ma test” jest
  niewykonalna bez wprowadzenia całego toolingu, co wykracza poza brief. Weryfikacja opiera
  się na bramce `yarn lint` + `yarn build` oraz na QA w przeglądarce ze zrzutami ekranu
  (wprost zamówione w briefie).
- **Zmiana kontraktu `?subject=`** — usunięcie `opinia-logopedyczna` z `prices` sprawia, że
  stare linki `/umow-sie?subject=opinia-logopedyczna` degradują się do tematu ogólnego przez
  `normalizeContactSubject`. Degradacja jest łagodna (bez błędu), ale trzeba to odnotować.
- **Brak etykiet pipeline'u** w repozytorium (`review`, `needs-qa`, `priority-*`, `risk-*`).
  Etykietowanie degraduje się do dostępnej taksonomii; pominięcia odnotowane w podsumowaniu.

## Progress

PR: #2

> Convention: `- [ ]` pending, `- [x]` done. Append ` — <commit sha>` when a step lands. Do not rename step titles.

### Phase 1: Model danych i cennik

- [x] 1.1 Dodać pole `note` do `PriceItem`, usunąć pozycję `opinia-logopedyczna`, dopisać wariant raportu przy `diagnoza-logopedyczna` — c759365
- [x] 1.2 Wyrenderować `note` w `PriceCard` na `/cennik` — c759365
- [x] 1.3 Uwzględnić `note` w JSON-LD `OfferCatalog` na `/cennik` — c759365

### Phase 2: Powierzchnie logopedii i usług

- [x] 2.1 Zaktualizować `logoPrices` i render cennika na `/logopedia` — 1725993
- [x] 2.2 Zaktualizować JSON-LD `Service.offers` w `src/app/logopedia/layout.tsx` — 1725993
- [x] 2.3 Usunąć `opinia-logopedyczna` z `servicePriceMap` i wyrenderować `note` na `/uslugi` — 1725993

### Phase 3: FAQ i bramka walidacyjna

- [x] 3.1 Rozszerzyć odpowiedź FAQ o dopłatę za pisemny raport — fb0b13e
- [x] 3.2 Przejść pełną bramkę walidacyjną (`yarn build` czysto; `yarn lint` nieużyteczne — patrz Risks) — fb0b13e
- [x] 3.3 QA w przeglądarce ze zrzutami ekranu `/cennik`, `/uslugi`, `/logopedia` — 7/8 PASS, dowody na `qa-evidence/pr-2`
