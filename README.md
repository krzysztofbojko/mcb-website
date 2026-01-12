# Multidyscyplinarne Centrum Badawcze UKSW (MCB) - Strona WWW

Nowoczesna, responsywna strona internetowa dla Multidyscyplinarnego Centrum Badawczego UKSW, prezentująca infrastrukturę badawczą, ofertę usług oraz ekspertów. Projekt został zrealizowany w oparciu o najnowsze standardy webowe.

## 🛠 Technologie

Projekt wykorzystuje nowoczesny stos technologiczny zapewniający wydajność i łatwość utrzymania:

- **Framework:** [Next.js 16.1](https://nextjs.org/) (App Router)
- **Język:** [TypeScript](https://www.typescriptlang.org/)
- **Style:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Konteneryzacja:** [Docker](https://www.docker.com/) & Docker Compose
- **Jakość kodu:** ESLint

## 🚀 Uruchomienie (Docker) - Zalecane

Projekt jest w pełni skonfigurowany do pracy w kontenerach Docker. Jest to najprostszy sposób na uruchomienie aplikacji w środowisku produkcyjnym lub testowym.

### Wymagania
- Docker
- Docker Compose

### Instrukcja
1. Przejdź do katalogu projektu:
   ```bash
   cd mcb-website
   ```

2. Zbuduj i uruchom kontenery (w trybie tła):
   ```bash
   docker-compose up --build -d
   ```

3. Aplikacja będzie dostępna pod adresem:
   [http://localhost:3000](http://localhost:3000)

4. Aby zatrzymać aplikację:
   ```bash
   docker-compose down
   ```

## 💻 Uruchomienie Lokalne (Development)

Aby pracować nad kodem źródłowym, zaleca się uruchomienie lokalne z wykorzystaniem Node.js.

### Wymagania
- Node.js (v20.9.0 lub nowszy)
- npm

### Instrukcja
1. Zainstaluj zależności:
   ```bash
   npm install
   ```

2. Uruchom serwer developerski:
   ```bash
   npm run dev
   ```

3. Aplikacja będzie dostępna pod adresem:
   [http://localhost:3000](http://localhost:3000)

### Budowanie wersji produkcyjnej
```bash
npm run build
npm start
```

## 📂 Struktura Projektu

```text
mcb-website/
├── app/                    # Główny katalog aplikacji (App Router)
│   ├── layout.tsx          # Główny układ strony (Navbar, Footer)
│   ├── page.tsx            # Strona główna
│   ├── oferta/             # Podstrona z ofertą usług
│   ├── infrastruktura/     # Podstrona z aparaturą badawczą
│   ├── kontakt/            # Formularz kontaktowy i eksperci
│   └── globals.css         # Globalne style i konfiguracja Tailwind
├── components/             # Komponenty UI wielokrotnego użytku
│   ├── Navbar.tsx          # Nawigacja
│   ├── Footer.tsx          # Stopka
│   ├── Hero.tsx            # Sekcja powitalna
│   ├── ServiceCard.tsx     # Karta usługi
│   ├── ExpertCard.tsx      # Wizytówka eksperta
│   └── InfrastructureCard.tsx # Karta aparatury
├── lib/
│   └── data.ts             # Scentralizowane dane (teksty, usługi, eksperci)
├── public/                 # Pliki statyczne (obrazy, ikony)
├── Dockerfile              # Konfiguracja obrazu Docker
├── docker-compose.yml      # Konfiguracja orkiestracji kontenerów
└── next.config.ts          # Konfiguracja Next.js (output: standalone)
```

## 🎨 Design System

Strona opiera się na minimalistycznym, "laboratoryjnym" stylu.
- **Kolor wiodący:** UKSW Red (`#9E1B34`) - zdefiniowany w `globals.css`.
- **Typografia:** Geist Sans / Geist Mono (domyślne fonty Next.js).

## 🔧 Konfiguracja Docker

Obraz Docker jest zoptymalizowany pod kątem rozmiaru i wydajności:
- Wykorzystuje `node:20-alpine`.
- Używa mechanizmu `output: "standalone"` z Next.js, co drastycznie zmniejsza rozmiar obrazu końcowego poprzez dołączanie tylko niezbędnych plików produkcyjnych.
- Jest skonfigurowany jako wieloetapowy build (Multi-stage build).