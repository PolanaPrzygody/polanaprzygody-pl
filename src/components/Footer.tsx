import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-polana-dark-green text-polana-straw">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-polana-lime text-2xl font-semibold">
                Polana Przygody
              </h3>
              <p className="text-polana-olive text-sm">Centrum Rozwoju Dziecka</p>
            </div>
            <p className="text-polana-straw/70 text-sm leading-relaxed">
              Wspieramy rozwój dzieci w przyjaznej, pełnej przygód atmosferze.
              Profesjonalna opieka logopedyczna i terapia integracji sensorycznej.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-polana-lime font-medium">Kontakt</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-polana-olive flex-shrink-0 mt-0.5"
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
                <span className="text-polana-straw/80">
                  ul. Białowieska 69B
                  <br />
                  54-234 Wrocław
                </span>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-polana-olive flex-shrink-0"
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
                <a
                  href="tel:+48790512258"
                  className="text-polana-straw/80 hover:text-polana-lime transition-colors"
                >
                  790 512 258
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-polana-olive flex-shrink-0"
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
                <a
                  href="mailto:info@polanaprzygody.pl"
                  className="text-polana-straw/80 hover:text-polana-lime transition-colors"
                >
                  info@polanaprzygody.pl
                </a>
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-polana-lime font-medium">Godziny otwarcia</h4>
            <div className="space-y-1 text-sm text-polana-straw/80">
              <p className="flex justify-between">
                <span>Pon - Pt</span>
                <span>9:00 - 20:00</span>
              </p>
              <p className="flex justify-between">
                <span>Sobota</span>
                <span>10:00 - 14:00</span>
              </p>
              <p className="flex justify-between">
                <span>Niedziela</span>
                <span>Zamknięte</span>
              </p>
            </div>
            {/* Social */}
            <div className="pt-4">
              <a
                href="https://www.instagram.com/polanaprzygody/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-polana-straw/80 hover:text-polana-lime transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm">@polanaprzygody</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-polana-lime font-medium">Nawigacja</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/poznaj-nas"
                className="text-polana-straw/80 hover:text-polana-lime transition-colors"
              >
                Poznaj nas
              </Link>
              <Link
                href="/uslugi"
                className="text-polana-straw/80 hover:text-polana-lime transition-colors"
              >
                Usługi
              </Link>
              <Link
                href="/cennik"
                className="text-polana-straw/80 hover:text-polana-lime transition-colors"
              >
                Cennik
              </Link>
              <Link
                href="/terapeuci"
                className="text-polana-straw/80 hover:text-polana-lime transition-colors"
              >
                Terapeuci
              </Link>
              <Link
                href="/umow-sie"
                className="text-polana-straw/80 hover:text-polana-lime transition-colors"
              >
                Umów się!
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-polana-olive/20 text-center text-sm text-polana-straw/50">
          <p className="mb-2">© {new Date().getFullYear()} Polana Przygody. Wszystkie prawa zastrzeżone.</p>
          <Link
            href="/polityka-prywatnosci"
            className="hover:text-polana-lime transition-colors"
          >
            Polityka prywatności i regulamin serwisu
          </Link>
        </div>
      </div>
    </footer>
  );
}

