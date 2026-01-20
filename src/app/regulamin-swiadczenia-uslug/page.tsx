"use client";

import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";

export default function RegulaminSwiadczeniaUslugPage() {
  return (
    <>
      <PageHeader
        title="Regulamin świadczenia usług"
        subtitle="Zasady korzystania z usług Centrum Rozwoju Dziecka Polana Przygody"
      />

      <section className="py-12 md:py-20 bg-polana-straw">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none 
              prose-headings:text-polana-dark-green prose-headings:!font-bold
              prose-h2:!text-xl prose-h2:!font-bold prose-h2:!mt-10 prose-h2:!mb-6 prose-h2:!pb-3 prose-h2:border-b-2 prose-h2:border-polana-lime/30
              prose-h3:text-xl prose-h3:!font-bold prose-h3:!mt-10 prose-h3:!mb-4
              prose-h4:text-lg prose-h4:!font-bold prose-h4:!mt-8 prose-h4:!mb-4 prose-h4:text-polana-dark-green/90
              prose-p:text-polana-dark-green/80 prose-p:!mb-6 prose-p:leading-relaxed
              prose-li:text-polana-dark-green/80 prose-li:!mb-3 prose-li:leading-relaxed
              prose-ul:!my-6 prose-ul:pl-6 prose-ul:list-disc prose-ul:marker:text-polana-lime
              prose-ol:!my-6 prose-ol:pl-6 prose-ol:list-decimal
              prose-a:text-polana-lime prose-a:no-underline hover:prose-a:underline 
              prose-strong:text-polana-dark-green"
          >
            <h2>Regulamin Centrum Rozwoju Dziecka Polana Przygody KATARZYNA KARWATKA</h2>
            <p>
              <strong>("Regulamin")</strong>
            </p>

            <h2>1. CEL REGULAMINU</h2>
            <ol>
              <li>
                Celem ustalenia niniejszego Regulaminu jest określenie ogólnych reguł
                korzystania z usług Centrum Rozwoju Dziecka Polana Przygody KATARZYNA
                KARWATKA (NIP: 6972218126, REGON: 542382447, adres: ul. Białowieska 69 B,
                54-234 Wrocław; "Polana Przygody").
              </li>
              <li>
                Celem Polany Przygody jest świadczenie usług logopedycznych,
                psychologicznych, a także prowadzenie terapii integracji sensorycznej, i
                innych zajęć wspierających rozwój dzieci, młodzieży i dorosłych
                ("Uczestnik").
              </li>
              <li>
                Uczestnik (lub jego opiekun prawny w przypadku osób niepełnoletnich) jest
                zobowiązany do zapoznania się z treścią Regulaminu, a także do
                przestrzegania jego postanowień w czasie korzystania z usług świadczonych
                przez Polanę przygody.
              </li>
            </ol>

            <h2>2. ZAKRES ŚWIADCZONYCH USŁUG</h2>
            <ol>
              <li>
                Polana Przygody oferuje:
                <ol>
                  <li>
                    usługi logopedyczne: przeprowadzenie diagnozy logopedycznej,
                    prowadzenie terapii logopedycznej;
                  </li>
                  <li>
                    usługi psychologiczne: przeprowadzanie diagnozy, konsultacji,
                    prowadzenie terapii;
                  </li>
                  <li>
                    prowadzenie terapii integracji sensorycznej: przeprowadzenie diagnozy,
                    prowadzenie terapii
                  </li>
                  <li>
                    organizację innych zajęć, warsztatów oraz szkoleń w zakresie
                    prowadzonej działalności.
                  </li>
                </ol>
              </li>
              <li>
                Świadczenie usług odbywa się w siedzibie Polany Przygody – przy ulicy
                Białowieskiej 69 B (54-234 Wrocław), w dniach i godzinach pracy Centrum,
                podanych na stronie internetowej. Godziny i dni pracy Polany Przygody
                mogą ulec zmianie, o czym Uczestnik zostanie poinformowany z odpowiednim
                wyprzedzeniem.
              </li>
              <li>
                Usługi świadczone są przez wykwalifikowaną kadrę. Polana Przygody
                korzysta z odpowiedniego wyposażenia, oraz stosuje specjalistyczne metody
                diagnostyczne i terapeutyczne.
              </li>
              <li>Pojedyncze spotkanie trwa 50 minut.</li>
              <li>
                W cenę prowadzonych zajęć wliczone są materiały, wskazówki do efektywnej
                pracy w domu i porady dla rodziców. Czas rozmowy, podczas której udzielane
                są wskazówki i porady wlicza się w czas terapii.
              </li>
              <li>
                Polana Przygody zapewnia, że pracownicy zobowiązują się do zachowania w
                tajemnicy zawodowej wszystkich informacji dotyczących Uczestnika,
                uzyskanych w trakcie świadczenia usług, a także po ich zakończeniu.
                Zwolnienie z tajemnicy może nastąpić wyłącznie w przypadkach
                przewidzianych prawem.
              </li>
            </ol>

            <h2>3. OBOWIĄZKI UCZESTNIKA</h2>
            <ol>
              <li>
                Uczestnik (lub jego opiekun prawny) zobowiązany jest do terminowego
                uiszczania opłat. W przypadku nieuiszczenia opłaty, Polana Przygody ma
                prawo do odmówienia wizyty.
              </li>
              <li>
                Uczestnik (lub jego opiekun prawny) zobowiązuje się do punktualnego
                przybycia na wizytę. W przypadku spóźnienia czas spotkania nie jest
                przedłużany.
              </li>
              <li>
                Uczestnik (lub jego opiekun prawny) zobowiązuje się do przekazania
                istotnych informacji, potrzebnych do rozpoczęcia terapii. Polana Przygody
                nie odpowiada za brak rezultatów swoich działań. Polana Przygody obejmuje
                opieką Uczestnika (lub jego opiekuna prawnego) i dokłada wszelkich starań
                w celu poprawy jego funkcjonowania. Jednakże terapia jest procesem
                indywidualnym, wymaga czasu, systematyczności i współpracy po obu
                stronach. Specyfika usług świadczonych wymaga wytrwałości, a efekty
                uzależnione są od czynników indywidualnych i zaangażowania Uczestnika.
              </li>
              <li>
                W przypadku, gdy z usług Polany Przygody korzysta małoletni, jego
                opiekun prawny zobowiązuje się do osobistego przyprowadzania i
                odprowadzania dziecka z zajęć. O wszelkich odstępstwach opiekun prawny
                informuje Polanę Przygody przed wizytą.
              </li>
              <li>
                W trakcie terapii dziecko pozostaje pod opieką osoby prowadzącej zajęcia,
                natomiast podczas oczekiwania na wejście do sali oraz po zakończeniu
                zajęć, odpowiedzialność za dziecko ponoszą rodzice.
              </li>
              <li>
                Terapeuta ma prawo poprosić rodziców/opiekunów o opuszczenie sali lub
                przeciwnie - o towarzyszenie dziecku podczas zajęć, jeśli podnosi to
                efektywność terapii.
              </li>
              <li>
                W zajęciach mogą brać udział jedynie zdrowe dzieci. Dziecko powinno
                posiadać buty na zmianę lub skarpetki.
              </li>
              <li>
                Rodzice/opiekunowie zobowiązani są do przekazania terapeucie wszelkiej
                posiadanej wiedzy o stanie zdrowia dziecka, gdyż jest to niezbędne do
                zapewnienia mu bezpieczeństwa podczas prowadzonych zajęć.
              </li>
              <li>
                W celu zapewnienia skutecznej terapii wymagane jest systematyczne
                uczęszczanie na zajęcia oraz praca z dzieckiem w domu według zaleceń
                terapeuty.
              </li>
              <li>
                Uczestnik (lub jego opiekun prawny) może w każdej chwili zrezygnować z
                terapii logopedycznej bez podania przyczyny. Zobowiązany jest jednak
                poinformować o rezygnacji Polane Przygody, telefonicznie lub mailowo.
              </li>
            </ol>

            <h2>4. UMAWIANIE, ODWOŁYWANIE I ZMIANA TERMINU WIZYTY</h2>
            <ol>
              <li>
                Na wizytę w Polanie Przygody można umawiać się przez stronę internetową
                polanaprzygody.pl, na portalu społecznościowym facebook, instagram
                wskazując wybraną przez siebie usługę, a także uzgadnia termin jej
                odbycia.
              </li>
              <li>
                W przypadku chęci systematycznego korzystania z usług Centrum, Uczestnik
                (lub jego opiekun prawny) może zostać zobowiązany do zawarcia umowy
                dostarczonej przez Polanę Przygody. Pojedyncze wizyty nie wymagają
                zawarcia umowy.
              </li>
              <li>
                Odwołanie lub zmiana terminu wizyty może nastąpić najpóźniej na 24h przed
                rozpoczęciem spotkania. W przypadku nieodwołania wizyty z odpowiednim
                wyprzedzeniem, opłata jest pobierana tak, jakby spotkanie odbyło się.
              </li>
              <li>
                Centrum zastrzega sobie prawo do odwołania spotkania z przyczyn losowych.
                W takim przypadku, Uczestnik (lub jego opiekun prawny) zostanie o tym
                fakcie niezwłocznie powiadomiony. Alternatywny termin odbycia wizyty
                zostanie uzgodniony indywidualnie.
              </li>
              <li>
                Opłata za zajęcia indywidualne, odwołane w ustalonym regulaminie terminie,
                przeniesiona zostanie na kolejny miesiąc, chyba że jest to ostatni miesiąc
                terapii, wtedy opłata zwracana jest w tym samym miesiącu w formie przelewu
                na konto.
              </li>
            </ol>

            <h2>5. PŁATNOŚCI ZA USŁUGI</h2>
            <ol>
              <li>
                Opłata za usługi świadczone na Polanie Przygody pobierana jest według
                cennika zamieszczonego bezpośrednio na stronie polanaprzygody.pl lub w
                siedzibie Polany Przygoda.
              </li>
              <li>
                W zależności od sposobu umówienia się na wizytę w Centrum - płatność
                odbywa się na miejscu – w siedzibie Centrum. W przypadku podjęcia
                długoterminowej współpracy z Centrum, cena poszczególnych zajęć może być
                niższa niż standardowa. Opłat można dokonywać każdorazowo po zajęciach
                lub wykupująć pakiet wizyt, płacąc za cały miesiąc przelewem na konto, w
                terminie i kwocie wskazanych w wystawionej fakturze.
              </li>
              <li>
                W przypadku chęci otrzymywania faktury, należy ten fakt wcześniej zgłosić
                droga e-mailową lub telefonicznie.
              </li>
            </ol>

            <h2>6. POSTANOWIENIA KOŃCOWE</h2>
            <ol>
              <li>
                Aktualna wersja regulaminu obowiązuje od 01.01.2026 Polana Przygody
                zastrzega sobie prawo do wprowadzenia zmian w Regulaminie.
              </li>
              <li>
                Polana Przygody jako Administrator powierzonych mu przez Uczestników i
                ich opiekunów prawnych danych osobowych, jest świadome swoich obowiązków
                wynikających z Rozporządzenia Parlamentu Europejskiego i Rady (UE)
                2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
                związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
                takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o
                ochronie danych; RODO). Ze szczegółowymi zasadami RODO można zapoznać się
                w załączniku do Regulaminu/Polityce Prywatności.
              </li>
            </ol>
          </motion.div>
        </div>
      </section>
    </>
  );
}
