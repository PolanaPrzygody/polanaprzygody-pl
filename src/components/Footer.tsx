import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-polana-dark-green text-polana-straw">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
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

          {/* Quick Links */}
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
            {/* Social */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/polanaprzygody/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-polana-straw/80 hover:text-polana-lime transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
                <span className="text-sm">@polanaprzygody</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-polana-olive/20 text-center text-sm text-polana-straw/50">
          <p>© {new Date().getFullYear()} Polana Przygody. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}

