# Polana Przygody - Centrum Rozwoju Dziecka

Strona internetowa dla gabinetu logopedycznego i terapii integracji sensorycznej we Wrocławiu.

## 🌿 O projekcie

Strona stworzona w Next.js 14 z wykorzystaniem:
- **React 18** - interfejs użytkownika
- **Tailwind CSS** - stylowanie
- **Framer Motion** - animacje
- **MDX** - treści tekstowe
- **Resend** - wysyłanie formularzy kontaktowych

## 🎨 Paleta kolorów (z księgi znaku)

| Kolor | HEX | Nazwa |
|-------|-----|-------|
| 🟢 | `#2A5C47` | Ciemna zieleń (dark-green) |
| 🟡 | `#E8FC59` | Limonkowy (lime) |
| 🫒 | `#BCC7A1` | Oliwkowa szarość (olive) |
| 🟨 | `#EFF1C5` | Słomkowy (straw) |
| 🟣 | `#E3D0F8` | Jasny fiolet (violet) |
| ⚫ | `#000000` | Czerń (black) |

## 🚀 Uruchomienie

### Wymagania
- Node.js 18+
- Yarn

### Instalacja

```bash
# Instalacja zależności
yarn install

# Uruchomienie w trybie developerskim
yarn dev

# Budowanie produkcyjne
yarn build

# Uruchomienie produkcyjne
yarn start
```

### Zmienne środowiskowe

Skopiuj plik `.env.example` do `.env.local` i uzupełnij:

```bash
cp .env.example .env.local
```

Wymagane zmienne:
- `RESEND_API_KEY` - klucz API z [Resend](https://resend.com)

## 📁 Struktura projektu

```
src/
├── app/                    # Strony (App Router)
│   ├── page.tsx           # Strona główna
│   ├── poznaj-nas/        # O nas
│   ├── uslugi/            # Usługi
│   ├── terapeuci/         # Zespół
│   ├── umow-sie/          # Kontakt
│   └── api/contact/       # API formularza
├── components/            # Komponenty React
│   ├── Navigation.tsx     # Nawigacja
│   ├── Footer.tsx         # Stopka
│   ├── Button.tsx         # Przycisk
│   ├── Card.tsx           # Karta
│   ├── PageHeader.tsx     # Nagłówek strony
│   ├── InstagramFeed.tsx  # Feed Instagram
│   └── ImageGallery.tsx   # Galeria zdjęć
└── content/               # Treści MDX
    ├── poznaj-nas.mdx
    ├── uslugi.mdx
    └── terapeuci/
        ├── katarzyna-karwatka.mdx
        ├── weronika-saczewska.mdx
        └── magdalena-wawrzycka.mdx
```

## 📝 Dodawanie treści

### Zdjęcia
Dodaj zdjęcia do folderu `/public/images/`:
- `/images/space-*.jpg` - zdjęcia przestrzeni
- `/images/terapeuci/` - zdjęcia terapeutów

### Treści tekstowe
Edytuj pliki MDX w folderze `/src/content/`.

### Instagram Feed
Aby wyświetlić rzeczywisty feed z Instagrama:
1. Zintegruj z Instagram Basic Display API, lub
2. Użyj widgetu (np. Elfsight, Curator)

Edytuj komponent `/src/components/InstagramFeed.tsx`.

### Mapa Google
Osadź mapę Google w sekcjach kontaktowych edytując odpowiednie komponenty.

## 🔤 Fonty

Strona używa fontu **Jost** z Google Fonts (darmowy).

Docelowo zalecane fonty z księgi znaku:
- **ABC Solar Display** - nagłówki ([licencja](https://abcdinamo.com/typefaces/solar))
- **PP Pangaia** - teksty ([licencja](https://pangrampangram.com/products/pangaia))

## 📧 Formularz kontaktowy

Formularz wysyła wiadomości przez Resend na `info@polanaprzygody.pl`.

Aby działał:
1. Utwórz konto na [Resend](https://resend.com)
2. Zweryfikuj domenę `polanaprzygody.pl`
3. Wygeneruj klucz API
4. Dodaj do `.env.local`

## 🌐 Deployment

Zalecany hosting: [Vercel](https://vercel.com)

```bash
# Instalacja Vercel CLI
yarn global add vercel

# Deploy
vercel
```

Pamiętaj o dodaniu zmiennych środowiskowych w panelu Vercel.

## 📱 Responsywność

Strona jest w pełni responsywna:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Funkcje

- [x] Strona główna z hero section
- [x] Strona "Poznaj nas" z galerią
- [x] Strona usług z opisami
- [x] Profile terapeutów
- [x] Formularz kontaktowy z Resend
- [x] Responsywna nawigacja
- [x] Animacje Framer Motion
- [x] Placeholder Instagram feed
- [x] SEO meta tagi

## 📄 Licencja

Projekt prywatny - wszelkie prawa zastrzeżone.

---

Stworzone z ❤️ dla Polany Przygody

