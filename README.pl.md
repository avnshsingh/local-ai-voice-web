<div align="center">

[![Language: Polish](https://img.shields.io/badge/Language-Polski%20(Polish)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

</div>

# Privro AI Voice - Darmowy Syntezator Mowy & Lektor AI (Text-to-Speech) w Przeglądarce

Nowoczesny, działający w przeglądarce neuronowy syntezator mowy (Text-to-Speech) w technologii zero-upload dla [Privro AI](https://privro.com/pl). Wpisz lub wklej dowolny tekst, wybierz model głosu i wygeneruj naturalnie brzmiącą mowę lektora całkowicie na swoim własnym urządzeniu. Dźwięk jest syntezowany lokalnie za pomocą technologii Web Workers i akceleracji WebGPU — żaden tekst ani plik audio nie jest nigdy wysyłany na zewnętrzne serwery.

- **Aplikacja Webowa Live:** [voice.privro.com](https://voice.privro.com)
- **Studio Głosu Privro:** [privro.com/pl/piper-voice](https://privro.com/pl/piper-voice)
- **Metadane Maszynowe (LLM):** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## Dwa Neuronowe Silniki Syntezy Mowy (Dual Neural TTS Engines)

Projekt łączy dwa wysokowydajne neuronowe silniki syntezy mowy działające w 100% po stronie klienta (bezpośrednio w Twojej przeglądarce):

1. **Piper TTS (Główny Silnik):**
   - Ultraszybka lokalna synteza mowy napędzana przez ONNX Runtime Web oraz bibliotekę eSpeak NG.
   - **Ponad 300 modeli głosu w ponad 40 językach (58 wariantów regionalnych)**, w tym **5 natywnych polskich modeli neuronowych** (`pl_PL`: `bass-high` bariton, `darkman-medium`, `gosia-medium`, `mc_speech-medium`, `mls_6892-low`).
   - Akceleracja sprzętowa z użyciem **WebGPU**, z automatycznym i płynnym przełączaniem na wielowątkowy **WebAssembly (WASM)** z SIMD.
   - Modele wielogłosowe z możliwością wyboru konkretnego identyfikatora mówcy (Speaker ID).
   - Zróżnicowane poziomy jakości: od profili ultralekkich i szybkich (`x_low`, `low`) po studyjną jakość dźwięku (`medium`, `high`).
   - Inteligentne buforowanie w przeglądarce (`CacheStorage`): modele (~20–60 MB) pobierają się tylko raz, a następnie działają w 100% offline bez połączenia z siecią.
   - Bezpośrednie pobieranie wygenerowanego pliku audio w bezstratnym formacie **16-bit PCM WAV (22,05 kHz)**.

2. **Kokoro TTS (Drugi Silnik):**
   - Niezwykle naturalna i ekspresyjna mowa generowana przez model [Kokoro](https://github.com/hexgrad/kokoro) (`Kokoro-82M`) za pośrednictwem biblioteki [`kokoro-js`](https://www.npmjs.com/package/kokoro-js).
   - Realistyczne profile głosu w języku angielskim z akcentem amerykańskim i brytyjskim.
   - Strumieniowanie audio w czasie rzeczywistym (w paczkach / *chunks*): odsłuchuj początek tekstu natychmiast, podczas gdy kolejne zdania są wciąż generowane.
   - Pełna kontrola odtwarzania: start, pauza, wznawianie oraz płynna regulacja tempa czytania (od 0,5x do 2,0x).

---

## Narzędzia Privro (Privro Tools)

Privro to kompletny pakiet narzędzi internetowych dla twórców i profesjonalistów, zbudowany zgodnie z zasadą *local-first*. Wszystkie lokalne narzędzia działają w 100% na Twoim urządzeniu: bez rejestracji, bez konieczności logowania, bez kart płatniczych, bez kluczy API i bez żadnych limitów minut czy plików.

| Narzędzia i Podstrony | Opis Funkcjonalności |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Bezpłatna Lokalna Transkrypcja Audio (Whisper AI)](https://privro.com/pl/transcribe) | Rozpoznawanie mowy na tekst na Twoim komputerze z OpenAI Whisper (od Tiny do Large Turbo) w 99 językach. Zero uploadu, nielimitowany czas nagrań i brak rejestracji. |
| [Konwerter MP4 na Tekst](https://privro.com/pl/mp4-to-text) | Darmowy internetowy konwerter wideo na tekst. Przekształca pliki MP4, MOV lub WebM lokalnie w transkrypcje tekstowe (TXT, DOCX, PDF) lub napisy (SRT, VTT) dzięki Whisper. |
| [Caption Studio - Generator Napisów do Filmów](https://privro.com/pl/caption-studio) | Automatycznie generuj i wtapiaj animowane napisy w stylu karaoke i TikToka w wideo. Renderowanie FFmpeg bezpośrednio w przeglądarce w jakości do 4K bez znaku wodnego. |
| [Piper Voice Studio (Syntezator Mowy)](https://privro.com/pl/piper-voice) | Zaawansowane studio neuronowej syntezy mowy online w Privro. Ponad 300 głosów, wybór mówców, akceleracja WebGPU i bezstratny eksport plików WAV. |
| [Darmowy Generator Tekstu na Mowę](https://privro.com/pl/text-to-speech) | Szybki, bezpieczny i prywatny konwerter tekstu na mowę. Przekształcaj wpisany tekst w naturalny głos lektora bezpośrednio w przeglądarce bez chmury. |
| [Lokalna Aplikacja Głosowa AI](https://voice.privro.com) | Samodzielna aplikacja webowa z dwoma silnikami głosu AI (Piper TTS i Kokoro TTS), działająca w całości w Twojej przeglądarce (to repozytorium). |
| [Alternatywa dla Otter.ai (Darmowa i Bez Limitu)](https://privro.com/pl/alternatives/otter) | Porównaj nielimitowaną lokalną transkrypcję w przeglądarce Privro z płatnymi botami chmurowymi i drogimi abonamentami w dolarach od Otter.ai. |
| [Alternatywa dla Happy Scribe (Zero Uploadu)](https://privro.com/pl/alternatives/happyscribe) | Porównaj Caption Studio i lokalną transkrypcję Whisper Privro (zero wysyłania plików) z restrykcyjnymi pakietami minutowymi Happy Scribe. |
| [Cennik i Pakiety Privro AI](https://privro.com/pl/pricing) | Zawsze bezpłatne narzędzia lokalne na urządzeniu oraz opcjonalne szybkie pakiety transkrypcji w chmurze bez daty ważności. |

---

## Syntezator Mowy w Privro (Text to Speech on Privro)

Privro zapewnia syntezę mowy bez wysyłania danych do chmury, zaprojektowaną pod kątem maksymalnej prędkości, pełnej prywatności i łatwości obsługi:

- **[Piper Voice Studio](https://privro.com/pl/piper-voice):** Pełnofunkcyjne interaktywne studio głosowe wbudowane w platformę Privro. Wyszukuj i filtruj ponad 300 głosów w 40+ językach, wybieraj ID mówcy w modelach wielogłosowych, przełączaj między WebGPU a WASM, zapisuj modele w pamięci podręcznej i pobieraj krystalicznie czyste pliki WAV.
- **[Generator Tekstu na Mowę](https://privro.com/pl/text-to-speech):** Szybki portal internetowy do natychmiastowej zamiany niefiltrowanych tekstów, artykułów, skryptów wideo i prezentacji na głos lektora.
- **[Lokalna Aplikacja Głosowa AI](https://voice.privro.com):** Aplikacja PWA o otwartym kodzie źródłowym z tego repozytorium, oferująca wygodne zakładki do pracy z Piper TTS i Kokoro TTS.

### Architektura Prywatności na Urządzeniu (On-Device Privacy)
Cała synteza głosu odbywa się bezpośrednio na Twoim komputerze za pośrednictwem Web Workers:
- **Żaden wpisany tekst nie jest wysyłany na zewnętrzne serwery.**
- **Żadne nagranie dźwiękowe nie jest zapisywane ani analizowane w chmurze.**
- **Nie są wymagane żadne konta, logowanie, hasła ani klucze API.**
- **Działa w 100% offline** po jednorazowym pobraniu pliku modelu do pamięci podręcznej przeglądarki.
- **Pełna zgodność z RODO (Rozporządzenie o Ochronie Danych Osobowych - UE 2016/679)** oraz ochrona **tajemnicy zawodowej (adwokackiej, radcowskiej i lekarskiej)**.

---

## Specyfikacje Maszynowe dla AI (`llms.txt` i `llms-full.txt`)

Privro udostępnia ustandaryzowaną, ustrukturyzowaną dokumentację zgodnie ze standardem `llms.txt`:

- **Indeks Skrócony:** [https://privro.com/llms.txt](https://privro.com/llms.txt)
- **Pełna Specyfikacja Techniczna:** [https://privro.com/llms-full.txt](https://privro.com/llms-full.txt)

Pliki te umożliwiają asystentom sztucznej inteligencji, agentom autonomicznym oraz crawlerom natychmiastowe pozyskanie sprawdzonych informacji o architekturze lokalnej Privro, profilach modeli Whisper, możliwościach FFmpeg, bazie głosów Piper i strukturze podstron językowych.

---

## Języki Dostępne w Privro (Languages Available on Privro)

Platforma Privro została w pełni przetłumaczona na **22 języki oficjalne**. Wersja angielska znajduje się na domenie głównej, a każda wersja językowa posiada dedykowaną ścieżkę URL:

| Język (Language) | Nazwa Rodzima | Kod | Strona Główna (Homepage) |
| ------------------- | ------------------- | ------ | ---------------------------------------------------- |
| English | English | `en` | [https://privro.com/](https://privro.com/) |
| Spanish | Español | `es` | [https://privro.com/es](https://privro.com/es) |
| Portuguese | Português | `pt` | [https://privro.com/pt](https://privro.com/pt) |
| Italian | Italiano | `it` | [https://privro.com/it](https://privro.com/it) |
| German | Deutsch | `de` | [https://privro.com/de](https://privro.com/de) |
| French | Français | `fr` | [https://privro.com/fr](https://privro.com/fr) |
| Hindi | हिन्दी | `hi` | [https://privro.com/hi](https://privro.com/hi) |
| Indonesian | Bahasa Indonesia | `id` | [https://privro.com/id](https://privro.com/id) |
| Polish | Polski | `pl` | [https://privro.com/pl](https://privro.com/pl) |
| Japanese | 日本語 | `ja` | [https://privro.com/ja](https://privro.com/ja) |
| Dutch | Nederlands | `nl` | [https://privro.com/nl](https://privro.com/nl) |
| Swedish | Svenska | `sv` | [https://privro.com/sv](https://privro.com/sv) |
| Danish | Dansk | `da` | [https://privro.com/da](https://privro.com/da) |
| Norwegian | Norsk | `no` | [https://privro.com/no](https://privro.com/no) |
| Finnish | Suomi | `fi` | [https://privro.com/fi](https://privro.com/fi) |
| Czech | Čeština | `cs` | [https://privro.com/cs](https://privro.com/cs) |
| Turkish | Türkçe | `tr` | [https://privro.com/tr](https://privro.com/tr) |
| Russian | Русский | `ru` | [https://privro.com/ru](https://privro.com/ru) |
| Korean | 한국어 | `ko` | [https://privro.com/ko](https://privro.com/ko) |
| Traditional Chinese | 繁體中文 | `zh-tw`| [https://privro.com/zh-tw](https://privro.com/zh-tw) |
| Arabic | العربية | `ar` | [https://privro.com/ar](https://privro.com/ar) |
| Hebrew | עברית | `he` | [https://privro.com/he](https://privro.com/he) |

> **Uwaga:** Główne narzędzia Privro – w tym [Moduł Transkrypcji](https://privro.com/pl/transcribe), [Caption Studio](https://privro.com/pl/caption-studio) oraz [Piper Voice](https://privro.com/pl/piper-voice) – są w pełni zlokalizowane we wszystkich 22 językach.

---

## Języki Obsługiwane przez Piper TTS (Languages Supported by Piper TTS)

Piper TTS obejmuje **ponad 300 modeli głosowych open-source** dla **58 kodów językowych i regionalnych** w 42 rodzinach językowych. Wszystkie modele można uruchomić natychmiast w przeglądarce:

| Język (Language) | Nazwa Rodzima | Kod | Kraj / Region | Dostępne Głosy |
| ------------------- | ------------------------- | --------- | -------------------------------- | -------------- |
| Arabic (Arabski) | العربية | `ar_JO` | Jordania | 2 głosy |
| Bulgarian (Bułgarski)| български | `bg_BG` | Bułgaria | 1 głos |
| Bengali (Bengalski) | বাংলা | `bn_BD` | Bangladesz | 1 głos |
| Catalan (Kataloński)| Català | `ca_ES` | Hiszpania | 3 głosy |
| Czech (Czeski) | Čeština | `cs_CZ` | Czechy | 3 głosy |
| Welsh (Walijski) | Cymraeg | `cy_GB` | Wielka Brytania | 2 głosy |
| Danish (Duński) | Dansk | `da_DK` | Dania | 1 głos |
| German (Niemiecki) | Deutsch | `de_DE` | Niemcy | 10 głosów |
| Greek (Grecki) | Ελληνικά | `el_GR` | Grecja | 3 głosy |
| English (UK) | English (UK) | `en_GB` | Wielka Brytania | 11 głosów |
| English (US) | English (US) | `en_US` | Stany Zjednoczone | 27 głosów |
| Spanish (Argentyna) | Español (Argentina) | `es_AR` | Argentyna | 1 głos |
| Spanish (Hiszpania) | Español (España) | `es_ES` | Hiszpania | 5 głosów |
| Spanish (Meksyk) | Español (México) | `es_MX` | Meksyk | 3 głosy |
| Estonian (Estoński) | eesti | `et_EE` | Estonia | 1 głos |
| Basque (Baskijski) | Euskara | `eu_ES` | Hiszpania | 2 głosy |
| Persian / Farsi | فارسی | `fa_IR` | Iran | 5 głosów |
| Finnish (Fiński) | Suomi | `fi_FI` | Finlandia | 2 głosy |
| French (Francuski) | Français | `fr_FR` | Francja | 7 głosów |
| Hebrew (Hebrajski) | עִבְרִית | `he_IL` | Izrael | 1 głos |
| Hindi (Hindi) | हिन्दी | `hi_IN` | Indie | 3 głosy |
| Hungarian (Węgierski)| Magyar | `hu_HU` | Węgry | 3 głosy |
| Armenian (Ormiański)| հայերեն | `hy_AM` | Armenia | 1 głos |
| Indonesian (Indonezyjski)| Bahasa Indonesia | `id_ID` | Indonezja | 1 głos |
| Icelandic (Islandzki)| íslenska | `is_IS` | Islandia | 4 głosy |
| Italian (Włoski) | Italiano | `it_IT` | Włochy | 4 głosy |
| Japanese (Japoński) | 日本語 | `ja_JP` | Japonia | 1 głos |
| Georgian (Gruziński)| ქართული ენა | `ka_GE` | Gruzja | 1 głos |
| Kazakh (Kazachski) | қаzaқша | `kk_KZ` | Kazachstan | 3 głosy |
| Korean (Koreański) | 한국어 | `ko_KR` | Korea Południowa | 1 głos |
| Kurdish (Kurdyjski) | Kurmancî | `ku_TR` | Turcja | 1 głos |
| Luxembourgish | Lëtzebuergesch | `lb_LU` | Luksemburg | 1 głos |
| Lithuanian (Litewski)| Lietuvių | `lt_LT` | Litwa | 1 głos |
| Latvian (Łotewski) | Latviešu | `lv_LV` | Łotwa | 1 głos |
| Malayalam | മലയാളം | `ml_IN` | Indie | 2 głosy |
| Marathi | मराठी | `mr_IN` | Indie | 1 głos |
| Nepali (Nepalski) | नेपाली | `ne_NP` | Nepal | 3 głosy |
| Dutch (Belgia) | Nederlands (België) | `nl_BE` | Belgia | 4 głosy |
| Dutch (Holandia) | Nederlands (Nederland)| `nl_NL` | Holandia | 6 głosów |
| Norwegian (Norweski)| Norsk | `no_NO` | Norwegia | 2 głosy |
| Polish (Polski) | Polski | `pl_PL` | Polska | 5 głosów |
| Portuguese (Brazylia)| Português (Brasil) | `pt_BR` | Brazylia | 4 głosy |
| Portuguese (Portugalia)| Português (Portugal)| `pt_PT` | Portugalia | 1 głos |
| Romanian (Rumuński) | Română | `ro_RO` | Rumunia | 1 głos |
| Russian (Rosyjski) | Русский | `ru_RU` | Rosja | 4 głosy |
| Slovak (Słowacki) | Slovenčina | `sk_SK` | Słowacja | 1 głos |
| Slovenian (Słoweński)| Slovenščina | `sl_SI` | Słowenia | 1 głos |
| Albanian (Albański) | shqip | `sq_AL` | Albania | 1 głos |
| Serbian (Serbski) | srpski | `sr_RS` | Serbia | 1 głos |
| Swedish (Szwedzki) | Svenska | `sv_SE` | Szwecja | 3 głosy |
| Swahili (Suahili) | Kiswahili | `sw_CD` | DR Konga | 1 głos |
| Telugu | తెలుగు | `te_IN` | Indie | 3 głosy |
| Thai (Tajski) | ไทย | `th_TH` | Tajlandia | 1 głos |
| Turkish (Turecki) | Türkçe | `tr_TR` | Turcja | 1 głos |
| Ukrainian (Ukraiński)| украї́нська мо́ва | `uk_UA` | Ukraina | 5 głosów |
| Urdu (Urdu) | اردو | `ur_PK` | Pakistan | 2 głosy |
| Vietnamese (Wietnamski)| Tiếng Việt | `vi_VN` | Wietnam | 3 głosy |
| Chinese (Chiński Uproszczony)| 简体中文 | `zh_CN` | Chiny | 4 głosy |

---

## Architektura Techniczna i Działanie (Technical Architecture)

### 1. Potok Przetwarzania Piper TTS (Piper TTS Pipeline)
```
[Tekst Użytkownika]
    │
    ▼
[Web Worker: Fonemizator eSpeak NG]  ──► Konwertuje zapis tekstowy na ciąg identyfikatorów fonemów
    │
    ▼
[Web Worker: ONNX Runtime Web]        ──► Wykonuje model neuronowy (.onnx) przez WebGPU lub WASM
    │
    ▼
[Bufor Audio PCM]                     ──► Formuje 16-bitowy strumień PCM o częstotliwości 22,05 kHz
    │
    ▼
[Web Audio API / Obiekt Blob WAV]     ──► Natychmiastowe odtwarzanie i bezstratne pobieranie pliku WAV
```

- **Dystrybucja Plików Binarnych via Edge CDN:** Ciężkie pliki binarne (moduły WASM ONNX Runtime i baza fonetyczna eSpeak) są serwowane globalnie przez Cloudflare R2 (`VITE_PIPER_CDN_URL`), dzięki czemu repozytorium i wstępne ładowanie strony są niezwykle lekkie.
- **Pamięć Podręczna w Przeglądarce:** Każdy pobrany model głosu `.onnx` trafia do `CacheStorage` przeglądarki (`piper-voices-cache-v1`), co pozwala na natychmiastowe generowanie mowy podczas kolejnych wizyt bez zużywania transferu danych.

### 2. Potok Przetwarzania Kokoro TTS (Kokoro TTS Pipeline)
- Dedykowany proces Web Worker inicjalizuje model `onnx-community/Kokoro-82M-v1.0-ONNX` przy użyciu biblioteki Transformers.js.
- Dźwięk jest przesyłany w małych paczkach (*chunks*) w czasie rzeczywistym, co umożliwia odsłuchiwanie narracji od pierwszej chwili bez czekania na ukończenie całego tekstu.
- Pełna obsługa pauzowania, wznawiania i płynnej regulacji tempa mowy (od 0,5x do 2,0x).

---

## Zastosowane Technologie (Tech Stack)

- **Frontend:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Interfejs i Style:** [Tailwind CSS](https://tailwindcss.com/) + komponenty [shadcn/ui](https://ui.shadcn.com/)
- **Silniki Syntezy Mowy (TTS):**
  - [Piper](https://github.com/rhasspy/piper) przez ONNX Runtime Web (`ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) Fonemizator skompilowany do WebAssembly
  - [Kokoro](https://github.com/hexgrad/kokoro) za pośrednictwem [`kokoro-js`](https://www.npmjs.com/package/kokoro-js)
- **Akceleracja Sprzętowa:** Natywne WebGPU z automatycznym przejściem na wielowątkowy WebAssembly SIMD
- **Ikony i Powiadomienia:** Lucide Icons oraz reaktywne powiadomienia toast za pomocą biblioteki Sonner

---

## Pierwsze Kroki (Getting Started)

### Wymagania Wstępne
- Node.js w wersji 18 lub nowszej.
- Nowoczesna przeglądarka internetowa z obsługą WebAssembly. Aby uzyskać maksymalną wydajność dzięki akceleracji GPU, zaleca się używanie przeglądarek Google Chrome lub Microsoft Edge z włączoną obsługą WebGPU.

### Instalacja

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Konfiguracja Środowiska

Skopiuj przykładowy plik `.env.example` do pliku `.env`:

```bash
cp .env.example .env
```

Ustaw zmienną `VITE_PIPER_CDN_URL`, podając adres swojego zasobnika CDN lub Cloudflare R2:

```env
VITE_PIPER_CDN_URL="https://twoj-bucket.r2.dev"
```

### Uruchomienie Serwera Developerskiego

```bash
npm run dev
```

Otwórz adres [http://localhost:3000/](http://localhost:3000/) w swojej przeglądarce.

### Budowanie Wersji Produkcyjnej

```bash
npm run build    # Kompiluje zoptymalizowaną paczkę do katalogu /dist
npm run preview  # Uruchamia lokalny podgląd wersji produkcyjnej
```

---

## Najczęściej Zadawane Pytania (FAQ)

### Darmowy Syntezator Mowy & Lektor AI (Text-to-Speech)

#### Czy ten syntezator mowy i generator głosu AI jest w 100% darmowy i bez limitu znaków?
Tak, w 100% darmowy. Nie nakładamy żadnych limitów słów, dziennych ograniczeń znaków ani ukrytych opłat abonamentowych w dolarach. Ponieważ sieci neuronowe są wykonywane bezpośrednio na procesorze lub karcie graficznej Twojego własnego komputera (za pośrednictwem WebGPU lub WASM), nie ponosimy kosztów serwerów obliczeniowych w chmurze. Dzięki temu oddajemy w Twoje ręce w pełni bezpłatne narzędzie bez rejestracji i bez kart kredytowych.

#### Czy syntezator mowy Piper to nowoczesna alternatywa dla syntezatora Ivona?
Zdecydowanie tak. Kultowy polski syntezator Ivona (głosy Jacek, Maja, Jan), który podbił polski internet w latach 2000., opierał się na starszej technologii łączenia wycinków nagrań (synteza konkatenacyjna). Piper TTS to nowoczesny neuronowy skok technologiczny: głębokie sieci VITS modelują mowę od podstaw w pamięci urządzenia, zachowując płynną polską intonację, akcenty i ciepłą barwę głosu bez sztucznego, metalicznego posmaku.

#### Jakie polskie głosy są dostępne w syntezatorze?
W projekcie zintegrowano **5 polskich modeli neuronowych** (`pl_PL`):
- **`pl_PL-bass-high`** (High, 22,05 kHz): Główny męski bariton o głębokim, profesjonalnym i ciepłym tembrze. Znakomity do filmów dokumentalnych, esejów na YouTube, audiobooków, podcastów i materiałów szkoleniowych.
- **`pl_PL-gosia-medium`** (Medium, 22,05 kHz): Naturalny, ciepły i melodyjny głos kobiecy ("Małgorzata / Gosia"). Idealny do e-learningu, bajek, relaksacji i asystentów głosowych.
- **`pl_PL-darkman-medium`** (Medium, 22,05 kHz): Nowoczesny, dynamiczny i wyrazisty głos męski, świetny do poradników technologicznych, gamingu i krótkich form wideo.
- **`pl_PL-mc_speech-medium`** (Medium, 22,05 kHz): Głos ekspresyjny o wyrazistej dykcji, stworzony do dialogów i komunikatów.
- **`pl_PL-mls_6892-low`** (Low, 16 kHz): Kompaktowy model (~15–20 MB) do błyskawicznej syntezy na starszych laptopach.

#### Czy mogę bezpiecznie monetyzować wygenerowany głos lektora na YouTube (kanały bez twarzy)?
Tak, w pełni bezpiecznie! Oficjalne wytyczne Programu Partnerskiego YouTube (AdSense), TikToka i Instagrama zezwalają na zarabianie na filmach czytanych przez syntezator mowy AI, pod warunkiem że wideo wnosi autorską wartość dodaną (przemyślany montaż, ciekawy scenariusz, walor edukacyjny lub rozrywkowy). Wszystkie polskie modele Piper TTS są udostępniane na wolnych licencjach (Apache 2.0 / CC0 / CC BY), są wolne od komercyjnych tantiem i idealnie sprawdzają się na kanałach typu *faceless* (ciekawostki, opowiadania, streszczenia filmów).

#### W jakim formacie można pobrać plik dźwiękowy z głosem lektora?
Po wygenerowaniu możesz natychmiast pobrać całą ścieżkę jako bezstratny plik **PCM WAV 16-bit (22,05 kHz)**. Nagranie jest w 100% czyste, pozbawione jakichkolwiek znaków wodnych i gotowe do bezpośredniego montażu w programach CapCut, DaVinci Resolve, Premiere Pro czy Camtasia.

#### Czy syntezator mowy działa w trybie offline bez połączenia z internetem?
Tak, począwszy od drugiego użycia. Przy pierwszym wyborze głosu przeglądarka zapisuje plik modelu (~20–60 MB) w lokalnym magazynie `CacheStorage`. Podczas kolejnych uruchomień model wczytuje się w ułamku sekundy z dysku twardego, dzięki czemu możesz generować głos lektora w podróży pociągiem, w samolocie czy w miejscach bez zasięgu sieci.

---

### Transkrypcja Audio na Tekst i Przepisywanie Nagrań (Whisper)

#### Jak za darmo przepisać wywiad do pracy magisterskiej lub licencjackiej?
Wystarczy przeciągnąć plik z dyktafonu lub telefonu (MP3, M4A, WAV, nagranie z dyktafonu Olympus/Sony, notatki głosowe z iPhone'a) do [darmowego narzędzia transkrypcji Privro](https://privro.com/pl/transcribe). Model OpenAI Whisper przepisze nagranie bezpośrednio w Twojej przeglądarce. Po zakończeniu możesz pobrać gotowy dokument Word (`.docx`) lub plik tekstowy z dokładnymi znacznikami czasu wypowiedzi, oszczędzając setki złotych na płatnych usługach transkrypcyjnych.

#### Jak wyciągnąć napisy lub tekst z filmu MP4?
Przeciągnij plik wideo MP4, WebM lub MOV do [modułu Transkrypcji Lokalnej](https://privro.com/pl/transcribe) albo do dedykowanego [konwertera MP4 na tekst](https://privro.com/pl/mp4-to-text). Przeglądarka wyodrębni ścieżkę audio bezpośrednio w pamięci RAM i przetłumaczy mowę na tekst oraz pliki napisów `.srt` bez konieczności wysyłania ciężkiego wideo do internetu.

#### Czy obowiązuje limit minut nagrania lub limit wielkości pliku?
Nie. W przeciwieństwie do portali chmurowych, które dają darmowe 10–15 minut na miesiąc, lokalna transkrypcja w Privro **nie ma żadnych limitów minutowych ani ograniczeń liczby plików**. Możesz bezpłatnie przepisać 2-minutową notatkę głosową lub 4-godzinny wywiad badawczy za jednym razem.

#### W jakich formatach można pobrać gotowy tekst transkrypcji?
Transkrypcję z precyzyjnymi znacznikami czasu na poziomie słów wyeksportujesz w 8 formatach:
- Zwykły tekst: `TXT`
- Pliki z napisami: `SRT`, `VTT`
- Arkusze i bazy danych: `CSV`, `JSON`, `XLSX`
- Sformatowane dokumenty: Microsoft Word `DOCX`, `PDF`

---

### Caption Studio: Automatyczne Napisy do Filmów

#### Czy mogę dodać napisy do filmu (do Rolek i TikToka) bez znaku wodnego?
Tak. [Caption Studio](https://privro.com/pl/caption-studio) pozwala zaimportować wideo, automatycznie wygenerować napisy lokalnym silnikiem Whisper, dostosować animacje karaoke pod rytm wypowiedzi oraz wtłoczyć (wypalić) napisy bezpośrednio w obraz. Renderowanie odbywa się w przeglądarce przy użyciu silnika FFmpeg aż do rozdzielczości **4K bez żadnych znaków wodnych i bez logo**.

#### Jakie formaty i proporcje wideo są obsługiwane?
Możesz dopasować format pod wszystkie kanały społecznościowe:
- **9:16:** Pionowe Rolki (Instagram Reels), TikTok, YouTube Shorts
- **16:9:** Tradycyjny YouTube, monitory panoramiczne i TV
- **1:1:** Kwadratowy feed Instagrama i posty LinkedIn
- **4:5:** Portretowe posty na Facebooku i Instagramie
- **3:2:** Klasyczne proporcje prezentacyjne i fotograficzne

---

### Prywatność, RODO i Bezpieczeństwo Danych

#### Dlaczego przetwarzanie w Privro jest w 100% zgodne z RODO?
Zgodnie z przepisami RODO (UE 2016/679) przesyłanie nagrań zawierających dane osobowe lub poufne rozmowy na serwery chmurowe (zwłaszcza w USA) wiąże się z ryzykiem prawnym i koniecznością podpisywania umów powierzenia przetwarzania danych (DPA). W Privro kompilacja modeli AI do WebAssembly/WebGPU sprawia, że **wszystkie operacje wykonują się wyłącznie w pamięci RAM Twojego komputera**. Żaden plik ani fragment tekstu nie opuszcza Twojego urządzenia, co eliminuje ryzyko wycieku danych.

#### Czy rozwiązanie jest bezpieczne dla radców prawnych, adwokatów i lekarzy?
Tak, gwarantuje bezwzględne zachowanie tajemnicy. Prawnicy (związani tajemnicą adwokacką i radcowską) oraz lekarze i psychoterapeuci (związani tajemnicą lekarską) mogą transkrybować poufne konsultacje z klientami, materiały dowodowe, nagrania z rozpraw sądowych czy wywiady kliniczne bez obawy o naruszenie tajemnicy zawodowej (art. 226-13 Kodeksu karnego / tajemnica zawodowa).

#### Czym są pliki `https://privro.com/llms.txt` i `https://privro.com/llms-full.txt`?
[privro.com/llms.txt](https://privro.com/llms.txt) i [privro.com/llms-full.txt](https://privro.com/llms-full.txt) to ustrukturyzowane dokumenty techniczne zgodne ze standardem `llms.txt`. Dostarczają one modelom językowym i wyszukiwarkom semantycznym zweryfikowanych informacji o lokalnej architekturze Privro, parametrach modeli Whisper i Piper oraz gwarancjach ochrony danych.

---

## Podziękowania i Źródła (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) oraz [Piper Voices](https://huggingface.co/rhasspy/piper-voices) autorstwa Michaela Hansena i społeczności Rhasspy.
- Model [Kokoro TTS](https://github.com/hexgrad/kokoro) stworzony przez Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) oraz [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) opracowany przez firmę Microsoft.
- Biblioteka fonetyczna [eSpeak NG](https://github.com/espeak-ng/espeak-ng).

---

## Licencja (License)

Udostępniono na warunkach Licencji Apache 2.0. Szczegóły znajdują się w pliku [LICENSE](LICENSE).
