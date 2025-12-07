"use client";

import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <PageHeader
        title="Polityka prywatności i regulamin"
        subtitle="Informacje o przetwarzaniu danych osobowych i zasadach korzystania z serwisu"
      />

      <section className="py-12 md:py-20 bg-polana-straw">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none prose-headings:text-polana-dark-green prose-p:text-polana-dark-green/80 prose-li:text-polana-dark-green/80 prose-a:text-polana-lime prose-a:no-underline hover:prose-a:underline prose-strong:text-polana-dark-green"
          >
            <p className="lead text-xl text-polana-dark-green/70 mb-8">
              Witamy w Polityce prywatności i regulaminie serwisu Polana Przygody - Centrum Rozwoju Dziecka.
            </p>

            <p>
              Twoja prywatność jest dla nas bardzo ważna. Ten dokument zawiera wszystkie
              informacje o tym, jak zbieramy dane osobowe, w tym informacje o tym, jak je
              przechowujemy, wykorzystujemy, przekazujemy i usuwamy. Wyjaśnia również,
              jak nasza strona internetowa wykorzystuje pliki cookies oraz określa zasady
              korzystania z serwisu. Naszym celem jest zapewnienie zrozumienia i
              przejrzystości w zakresie przetwarzania danych osobowych oraz świadczenia
              usług drogą elektroniczną.
            </p>

            <div className="bg-polana-olive/20 rounded-2xl p-6 my-8">
              <h3 className="text-lg font-semibold text-polana-dark-green mt-0 mb-4">
                Dane Administratora
              </h3>
              <div className="text-polana-dark-green/80 space-y-1">
                <p className="m-0">
                  <strong>Centrum Rozwoju Dziecka Polana Przygody KATARZYNA KARWATKA</strong>
                </p>
                <p className="m-0">ul. Białowieska 69 lok. B</p>
                <p className="m-0">54-234 Wrocław</p>
                <p className="m-0">NIP: 6972218126</p>
                <p className="m-0">REGON: 542382447</p>
                <p className="m-0">
                  E-mail:{" "}
                  <a href="mailto:info@polanaprzygody.pl">info@polanaprzygody.pl</a>
                </p>
              </div>
            </div>

            <h2>Regulamin Serwisu</h2>

            <h3>Specyfikacja Usług Świadczonych Drogą Elektroniczną</h3>
            <p>
              Serwis internetowy polanaprzygody.pl świadczy następujące usługi drogą elektroniczną:
            </p>
            <ul>
              <li>
                <strong>Dostęp do informacji</strong> – udostępnianie informacji o ofercie
                Centrum Rozwoju Dziecka Polana Przygody, w tym o świadczonych usługach
                terapeutycznych (logopedia, terapia integracji sensorycznej), zespole
                specjalistów, godzinach otwarcia oraz lokalizacji.
              </li>
              <li>
                <strong>Formularz kontaktowy</strong> – umożliwienie przesyłania wiadomości
                kontaktowych w celu umówienia wizyty, uzyskania informacji o usługach lub
                zadania pytań.
              </li>
              <li>
                <strong>Prezentacja multimediów</strong> – wyświetlanie zdjęć gabinetów,
                filmów prezentujących działalność oraz treści z mediów społecznościowych.
              </li>
            </ul>

            <h3>Wymagania Techniczne</h3>
            <p>
              Do korzystania z serwisu niezbędne jest:
            </p>
            <ul>
              <li>urządzenie z dostępem do sieci Internet (komputer, tablet, smartfon);</li>
              <li>
                aktualna wersja przeglądarki internetowej obsługującej JavaScript i pliki
                cookies (np. Google Chrome, Mozilla Firefox, Safari, Microsoft Edge);
              </li>
              <li>aktywne konto poczty elektronicznej (do korzystania z formularza kontaktowego).</li>
            </ul>
            <p>
              Zalecamy korzystanie z najnowszych wersji przeglądarek internetowych w celu
              zapewnienia pełnej funkcjonalności serwisu oraz bezpieczeństwa.
            </p>

            <h3>Zasady Korzystania z Serwisu</h3>
            <p>Użytkownik zobowiązuje się do:</p>
            <ul>
              <li>korzystania z serwisu zgodnie z jego przeznaczeniem;</li>
              <li>niepodejmowania działań mogących zakłócić prawidłowe funkcjonowanie serwisu;</li>
              <li>
                nierozpowszechniania treści o charakterze bezprawnym, w tym treści
                naruszających prawa osób trzecich;
              </li>
              <li>podawania prawdziwych danych w formularzach kontaktowych.</li>
            </ul>

            <h3>Prawa Autorskie i Własność Intelektualna</h3>
            <p>
              Wszelkie treści zamieszczone w serwisie, w tym teksty, zdjęcia, grafiki, filmy
              oraz logo, stanowią własność Centrum Rozwoju Dziecka Polana Przygody KATARZYNA
              KARWATKA lub są wykorzystywane na podstawie odpowiednich licencji. Kopiowanie,
              rozpowszechnianie lub wykorzystywanie tych treści bez zgody właściciela jest
              zabronione.
            </p>

            <h3>Odpowiedzialność</h3>
            <p>
              Administrator dokłada wszelkich starań, aby informacje zawarte w serwisie były
              aktualne i prawidłowe. Nie ponosi jednak odpowiedzialności za:
            </p>
            <ul>
              <li>
                czasową niedostępność serwisu wynikającą z awarii technicznych lub prac
                konserwacyjnych;
              </li>
              <li>
                szkody wynikające z korzystania z serwisu niezgodnie z jego przeznaczeniem
                lub niniejszym regulaminem;
              </li>
              <li>
                działania osób trzecich, w tym ataki hakerskie, które mogą wpłynąć na
                funkcjonowanie serwisu.
              </li>
            </ul>

            <h3>Reklamacje</h3>
            <p>
              Reklamacje dotyczące funkcjonowania serwisu można składać drogą elektroniczną
              na adres{" "}
              <a href="mailto:info@polanaprzygody.pl">info@polanaprzygody.pl</a>. Reklamacja
              powinna zawierać opis problemu oraz dane kontaktowe użytkownika. Reklamacje
              rozpatrywane są w terminie 14 dni roboczych od daty ich otrzymania.
            </p>

            <h2>Przetwarzanie Danych Osobowych</h2>

            <h3>Administrator Danych</h3>
            <p>
              Administratorem Twoich danych osobowych jest Centrum Rozwoju Dziecka Polana
              Przygody KATARZYNA KARWATKA, z siedzibą w Polsce, przy ul. Białowieskiej 69
              lok. B, 54-234 Wrocław, NIP: 6972218126, REGON: 542382447.
            </p>

            <h3>Dane Osobowe</h3>
            <p>
              Zbieramy i przetwarzamy Twoje dane WYŁĄCZNIE na Twoje żądanie, na podstawie
              prawnej Twojej zgody w następujących obszarach:
            </p>

            <h4>Formularz kontaktowy</h4>
            <p>
              Formularz kontaktowy jest podstawowym sposobem komunikacji z naszymi
              specjalistami. Możesz go znaleźć w różnych miejscach na stronie. Formularz
              kontaktowy pozwala wysłać zapytanie o nasze usługi, umówić wizytę lub
              uzyskać informacje.
            </p>
            <p>
              W celu odpowiedzi na Twoje zapytanie zbieramy następujące dane: imię i
              nazwisko, adres e-mail, numer telefonu (opcjonalnie) oraz treść wiadomości.
              Dane te są wykorzystywane do odpowiedzi na Twoje zapytanie, świadczenia
              naszych usług, ale także do celów marketingowych, np. informowania o
              naszych usługach.
            </p>
            <p>
              Dane są zbierane i przetwarzane wyłącznie za Twoją zgodą. Twoje dane
              osobowe będą przechowywane w naszej bazie potencjalnych klientów przez czas
              nieokreślony.
            </p>
            <p>
              Twoje dane będą przetwarzane do momentu poinformowania nas o wycofaniu
              zgody. Możesz wycofać swoją zgodę w dowolnym momencie, wysyłając nam
              wiadomość na adres{" "}
              <a href="mailto:info@polanaprzygody.pl">info@polanaprzygody.pl</a>. Po tym
              wszystkie Twoje dane zostaną usunięte z naszej bazy danych.
            </p>

            <h2>Realizacja Twoich Praw</h2>
            <p>
              Zbieramy i przetwarzamy Twoje dane osobowe wyłącznie za Twoją zgodą. Twoje
              dane osobowe będą przechowywane w naszej bazie danych przez czas
              nieokreślony (chyba że uzgodniono inaczej). Przez cały ten czas masz prawo
              żądać od nas:
            </p>
            <ul>
              <li>dostępu do Twoich danych osobowych;</li>
              <li>sprostowania Twoich danych osobowych;</li>
              <li>usunięcia Twoich danych osobowych;</li>
              <li>ograniczenia przetwarzania;</li>
              <li>przenoszenia danych.</li>
            </ul>
            <p>
              Aby skorzystać z któregokolwiek ze swoich praw, napisz do nas na adres{" "}
              <a href="mailto:info@polanaprzygody.pl">info@polanaprzygody.pl</a>
            </p>
            <p>
              Twoje żądanie zostanie rozpatrzone w odpowiednim czasie i w skuteczny
              sposób. Możemy skontaktować się z Tobą w celu ustalenia szczegółów Twojego
              żądania.
            </p>
            <p>
              Wycofanie danych osobowych nie wpływa na zgodność z prawem przetwarzania
              opartego na zgodzie przed jej wycofaniem.
            </p>
            <p>
              Skargę można również złożyć do właściwego organu nadzorczego. Dla Polski
              organem nadzorczym jest Prezes Urzędu Ochrony Danych Osobowych (
              <a
                href="https://uodo.gov.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://uodo.gov.pl/
              </a>
              ).
            </p>

            <h2>Ochrona Danych Osobowych</h2>

            <h3>Przechowywanie Danych i Rozwiązania Techniczne</h3>
            <p>
              Aby zapewnić ochronę Twoich danych osobowych, stosujemy odpowiednie
              praktyki gromadzenia, przechowywania i przetwarzania danych oraz środki
              bezpieczeństwa, w tym szyfrowanie.
            </p>
            <p>
              Korzystamy z zewnętrznych dostawców i partnerów hostingowych w zakresie
              sprzętu, oprogramowania, sieci, pamięci masowej i powiązanych technologii
              niezbędnych do obsługi naszych stron internetowych. Twoje dane osobowe są
              przechowywane w zabezpieczonych sieciach dostępnych dla ograniczonej liczby
              osób posiadających specjalne uprawnienia dostępu do tych systemów.
            </p>

            <h3>Oprogramowanie Stron Trzecich</h3>
            <p>
              Okazjonalnie współpracujemy z podmiotami trzecimi, które wspierają nas w
              świadczeniu usług: technologie śledzenia Google Analytics, narzędzia
              komunikacyjne. Ci zewnętrzni dostawcy mogą potrzebować dostępu do
              określonych informacji, aby wykonywać swoją pracę dla nas. Rygorystycznie
              weryfikujemy tych zewnętrznych dostawców, aby upewnić się, że spełniają
              nasze standardy prywatności i ograniczamy dane, do których mogą uzyskać
              dostęp, tylko do tego, co jest niezbędne do wykonania zleconych zadań.
            </p>

            <h3>Osadzenia Stron Trzecich</h3>
            <p>
              W naszych treściach możesz znaleźć osadzenia stron trzecich: posty z
              Instagrama, filmy z YouTube, mapy Google Maps lub funkcje udostępniania w
              mediach społecznościowych. Te pliki wysyłają dane do hostowanej witryny tak,
              jakbyś odwiedzał tę witrynę bezpośrednio. Nie kontrolujemy, jakie dane
              zbierają strony trzecie w takich przypadkach ani co z nimi zrobią. Te
              osadzenia stron trzecich są objęte polityką prywatności danej usługi.
            </p>

            <h2>Pliki Cookies i Znaczniki Pikselowe</h2>
            <p>
              Używamy różnych metod śledzenia, takich jak pliki cookies, znaczniki
              pikselowe i inne technologie, aby otrzymywać informacje, które mogą
              obejmować dane osobowe z Twojej przeglądarki (takie jak adres IP, unikalny
              identyfikator cookie; unikalny identyfikator urządzenia i typ urządzenia;
              domena, typ i język przeglądarki, system operacyjny i ustawienia systemowe;
              kraj i strefa czasowa; wcześniej odwiedzane strony internetowe; informacje
              o Twojej interakcji z naszą stroną internetową; oraz czasy dostępu i adresy
              URL odsyłające).
            </p>
            <p>
              Używamy plików cookies i znaczników pikselowych do śledzenia korzystania ze
              strony internetowej i zrozumienia Twoich preferencji; do określenia, czy
              wiadomość e-mail została otwarta i czy podjęto działania; oraz do
              prezentowania reklam odpowiadających Twoim zainteresowaniom.
            </p>
            <p>
              Możemy również otrzymywać raporty oparte na wykorzystaniu tych technologii
              przez naszych dostawców usług/analityki (takich jak Google Analytics).
              Używamy tych raportów do uzyskiwania statystyk dotyczących ruchu i
              interakcji ze stroną, abyśmy mogli ulepszyć naszą stronę internetową i
              Twoje doświadczenia.
            </p>
            <p>
              Nie łączymy informacji przechowywanych w plikach cookies z żadnymi danymi
              osobowymi przesyłanymi przez Ciebie na naszej stronie.
            </p>

            <h3>Jak i dlaczego ich używamy?</h3>

            <h4>1. W celu korzystania ze strony (niezbędne)</h4>
            <p>
              Te pliki cookies, znaczniki pikselowe i inne technologie są niezbędne, aby
              umożliwić stronie internetowej świadczenie żądanych funkcji.
            </p>

            <h4>2. W celu funkcjonalności</h4>
            <p>
              Te pliki cookies, znaczniki pikselowe i inne technologie zapamiętują
              korzystanie z naszej strony internetowej. Używamy tych plików cookies, aby
              zapewnić Ci bardziej odpowiednie doświadczenie i uczynić korzystanie z
              usług bardziej dostosowanym.
            </p>

            <h4>3. W celu analityki</h4>
            <p>
              Te pliki cookies, znaczniki pikselowe i inne technologie zbierają
              informacje o sposobie interakcji z naszą stroną internetową. Używamy plików
              cookies Google Analytics, aby zrozumieć, jak docierasz do naszych produktów
              i strony internetowej i jak je przeglądasz, aby zidentyfikować obszary do
              poprawy, takie jak nawigacja, doświadczenie użytkownika i kampanie
              marketingowe.
            </p>

            <h4>4. W celu reklamy i retargetingu</h4>
            <p>
              Te pliki cookies, znaczniki pikselowe i inne technologie zbierają
              informacje o Twoich nawykach przeglądania, aby reklamy były odpowiednie dla
              Ciebie i Twoich zainteresowań. Zapamiętują odwiedzane strony internetowe, a
              informacje te są udostępniane innym podmiotom, takim jak dostawcy usług
              technologii reklamowych i reklamodawcy.
            </p>

            <h4>5. W celu udostępniania w mediach społecznościowych</h4>
            <p>
              Te pliki cookies, znaczniki pikselowe i inne technologie są używane, gdy
              udostępniasz informacje za pomocą przycisku udostępniania w mediach
              społecznościowych. Sieć społecznościowa zarejestruje, że to zrobiłeś. Te
              informacje mogą być powiązane z działaniami targetowania/reklamy.
            </p>

            <h3>Jak zarządzać plikami cookies?</h3>
            <p>
              Możesz dezaktywować pliki cookies poprzez funkcję wbudowaną w Twoją
              przeglądarkę internetową. Producenci przeglądarek udostępniają strony
              pomocy dotyczące zarządzania plikami cookies w swoich produktach:
            </p>
            <ul>
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Microsoft Edge</li>
              <li>Safari</li>
            </ul>
            <p>
              Jeśli nie zaakceptujesz plików cookies, możesz nie być w stanie korzystać
              ze wszystkich aspektów naszej strony internetowej. Nie będziesz mógł
              zrezygnować z żadnych plików cookies ani innych technologii, które są
              „ściśle niezbędne" dla usług.
            </p>

            <h2>Zmiany Polityki Prywatności</h2>
            <p>
              Możemy okresowo aktualizować naszą Politykę Prywatności. Poinformujemy Cię
              o najważniejszych zmianach, ale niektóre zmiany będą wprowadzane bez
              powiadomienia. Korzystając z polanaprzygody.pl, zgadzasz się na
              obowiązującą wersję naszej Polityki Prywatności opublikowanej na
              https://polanaprzygody.pl/polityka-prywatnosci. Zachęcamy do okresowego
              przeglądania tej Polityki Prywatności.
            </p>

            <h2>Prawo Właściwe</h2>
            <p>
              Wszelkie roszczenia związane z naszą Polityką Prywatności podlegają prawu
              Rzeczypospolitej Polskiej.
            </p>

            <h2>Pytania i Kontakt</h2>
            <p>
              Skontaktuj się z nami w przypadku jakichkolwiek pytań dotyczących
              przetwarzania danych osobowych lub korzystania z plików cookies /
              znaczników pikselowych.
            </p>
            <p>Chętnie przyjmiemy również Twoją opinię na temat naszej Polityki Prywatności.</p>

            <div className="bg-polana-dark-green/10 rounded-2xl p-6 my-8">
              <p className="m-0 mb-2">
                <strong>Kontakt:</strong>
              </p>
              <p className="m-0">
                E-mail:{" "}
                <a href="mailto:info@polanaprzygody.pl">info@polanaprzygody.pl</a>
              </p>
              <p className="m-0">Tel: +48 790 512 258</p>
              <p className="m-0 mt-4 text-sm text-polana-dark-green/60">
                Ostatnia aktualizacja: grudzień 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

