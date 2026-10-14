<div align="center">

[![Language: Norwegian](https://img.shields.io/badge/Language-Norsk%20(Norwegian)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

</div>

# Privro AI Voice - Gratis Lokale AI-Stemmer & Tekst til Tale (Text-to-Speech) i Nettleseren

En personvernsikker, nettleserbasert AI-stemmegenerator og talesyntese av neste generasjon uten sky-opplasting (*zero-upload*), drevet av [Privro AI](https://privro.com/no). Lim inn teksten din, velg en stemme og generer øyeblikkelig naturtro menneskelig tale lokalt på din egen enhet ved hjelp av Web Workers og WebGPU. Verken tekst eller lydfiler sendes noensinne til eksterne skyservere.

- **Kjør webappen direkte:** [voice.privro.com](https://voice.privro.com)
- **Privro Voice Studio:** [privro.com/no/piper-voice](https://privro.com/no/piper-voice)
- **Maskinlesbare spesifikasjoner (LLM):** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## To Neurale Talesyntesemotorer i Nettleseren (Dual Neural TTS Engines)

Prosjektet forener to uavhengige neurale tekst-til-tale-systemer (Text-to-Speech) som kjøres fullstendig på klientsiden direkte i nettleseren:

1. **Piper TTS (Primær Motor):**
   - Lynrask lokal talesyntese med ONNX Runtime Web og eSpeak NG til fonetisering.
   - Støtte for **over 40 språk, 58 regionale varianter og mer enn 300 stemmemodeller**.
   - Omfattende norsk støtte (`no_NO`) med to offisielle modeller: **NVCC multi-speaker-modellen** med **10 distinkte regionale dialekttalere** (Nord-Norge, Vestlandet, Trøndelag og Østlandet) samt **Talesyntese-modellen** basert på Nasjonalbibliotekets offisielle NST-korpus.
   - Maskinvareakselerasjon via WebGPU med sømløst automatisk tilbakefall til flertrådet WebAssembly (WASM SIMD).

2. **Kokoro TTS (Sekundær Motor):**
   - Kompakt, ultrarask 82M-parametermodell levert via Transformers.js (`onnx-community/Kokoro-82M-v1.0-ONNX`).
   - Eksepsjonell naturlig engelsk diksjon med distinkte amerikanske og britiske stemmeprofiler.
   - Blokkvis sanntidsstrømming (*chunk-streaming*) for umiddelbar oppstart uten ventetid.

---

## Privro AI Web-Verktøy & Økosystem (Privro Web Suite Tools)

| Verktøy & Ressurs | Beskrivelse & Viktigste Funksjoner |
| :--- | :--- |
| [Gratis Lokal Lydtranskribering (Whisper AI)](https://privro.com/no/transcribe) | 100% lokal tale-til-tekst og transkribering i nettleseren via OpenAI Whisper. Ingen opplasting til eksterne servere, ubegrenset lydlengde, automatisk talergjenkjenning og eksport til TXT, Word (DOCX), PDF og SRT. Full overensstemmelse med Sikts retningslinjer for master- og bacheloroppgaver. |
| [MP4 til Tekst Konverter (Videotranskribering)](https://privro.com/no/mp4-to-text) | Gratis nettleserbasert videotranskribering. Trekk ut lyden lokalt fra MP4, MOV og WebM og konverter direkte til ren tekst eller undertekstfiler (SRT, VTT) uten skyoverføring. |
| [Caption Studio - Automatiske Undertekster](https://privro.com/no/caption-studio) | Lag engasjerende, animerte undertekster til TikTok, Instagram Reels og YouTube Shorts. Brenn inn undertekster direkte i videoen opptil 4K via klient-FFmpeg – 100% gratis og **helt uten vannmerke**. |
| [Piper Voice Studio (AI-Stemmestudio)](https://privro.com/no/piper-voice) | Utforsk, test og lytt til over 300 stemmer direkte i nettleseren. Inkluderer talervelger med 10 norske dialekter, tonehøyde- og hastighetskontroll, WebGPU-akselerasjon og ukomprimert 16-bit PCM WAV-nedlasting. |
| [Gratis Tekst til Tale Generator](https://privro.com/no/text-to-speech) | Rask, sikker og ubegrenset talesyntese på nett. Omdann artikler, manuskripter og dokumenter til naturlig tale uten registrering eller eksterne skyservere. |
| [Lokal AI Røst Webapp](https://voice.privro.com) | Den frittstående, åpne PWA-appen bygget fra dette kildekodearkivet med dedikerte faner for både Piper TTS og Kokoro TTS. |
| [Alternativ til Otter.ai (Gratis & Uten Tidsbegrensning)](https://privro.com/no/alternatives/otter) | Hvorfor betale dyre månedlige dollarabonnementer og risikere datalekkasjer i skyen? Oppdag Privros gratis, ubegrensede og 100% lokale transkribering. |
| [Alternativ til Happy Scribe (Zero-Upload)](https://privro.com/no/alternatives/happyscribe) | Sammenlign Happy Scribes minuttbegrensninger og skyopplasting med Privros kostnadsfrie, lokale Whisper-transkribering og vannmerkefrie Caption Studio. |
| [Priser og Planer for Privro AI](https://privro.com/no/pricing) | Utforsk våre 100% gratis lokale nettleserverktøy, valgfrie skytjenester for storskala industriell massebearbeiding, samt forhåndsbetalte kreditter uten utløpsdato. |

---

## Tilgjengelighet på 22 Verdensspråk (Global Availability)

Privro-plattformen er fullstendig lokalisert på **22 verdensspråk**. Hvert språk har sin egen tilpassede inngangsside optimalisert for lokale personvernbestemmelser og regionale søkebehov:

| Språk (Language) | Lokalt Navn | Kode | Tilpasset Nettadresse |
| :--- | :--- | :---: | :--- |
| English | English | `en` | [https://privro.com](https://privro.com) |
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

> **Merk:** Kjernefunksjonene i Privro-økosystemet – inkludert [Lydtranskribering](https://privro.com/no/transcribe), [Caption Studio](https://privro.com/no/caption-studio) og [Piper Voice](https://privro.com/no/piper-voice) – er fullt integrert og tilgjengelige på samtlige 22 språk.

---

## Understøttede Språk i Piper TTS (Languages Supported by Piper TTS)

Piper TTS omfatter **over 300 åpne neurale stemmemodeller** fordelt over **58 språk- og regionskoder** i 42 språkfamilier. Alle modeller kjøres direkte på din egen datamaskin:

| Språk (Language) | Lokalt Navn | Kode | Land / Region | Tilgjengelige Modeller |
| ------------------- | ------------------------- | --------- | -------------------------------- | --------------------- |
| Arabic (Arabisk) | العربية | `ar_JO` | Jordan | 2 modeller |
| Bulgarian (Bulgarsk)| български | `bg_BG` | Bulgaria | 1 modell |
| Bengali (Bengalsk) | বাংলা | `bn_BD` | Bangladesh | 1 modell |
| Catalan (Katalansk) | Català | `ca_ES` | Spania | 3 modeller |
| Czech (Tsjekkisk) | Čeština | `cs_CZ` | Tsjekkia | 3 modeller |
| Welsh (Walisisk) | Cymraeg | `cy_GB` | Storbritannia | 2 modeller |
| Danish (Dansk) | Dansk | `da_DK` | Danmark | 1 modell (NST Rigsdansk) |
| German (Tysk) | Deutsch | `de_DE` | Tyskland | 10 modeller |
| Greek (Gresk) | Ελληνικά | `el_GR` | Hellas | 3 modeller |
| English (UK) | English (UK) | `en_GB` | Storbritannia | 11 modeller |
| English (US) | English (US) | `en_US` | USA | 27 modeller |
| Spanish (Argentina) | Español (Argentina) | `es_AR` | Argentina | 1 modell |
| Spanish (Spania) | Español (España) | `es_ES` | Spania | 5 modeller |
| Spanish (Mexico) | Español (México) | `es_MX` | Mexico | 3 modeller |
| Estonian (Estisk) | Eesti | `et_EE` | Estland | 1 modell |
| Basque (Baskisk) | Euskara | `eu_ES` | Spania | 2 modeller |
| Persian / Farsi | فارسی | `fa_IR` | Iran | 3 modeller |
| Finnish (Finsk) | Suomi | `fi_FI` | Finland | 2 modeller |
| French (Frankrike) | Français (France) | `fr_FR` | Frankrike | 7 modeller |
| Irish (Irsk) | Gaeilge | `ga_IE` | Irland | 3 modeller |
| Galician (Galisisk) | Galego | `gl_ES` | Spania | 1 modell |
| Gujarati (Gujarati) | ગુજરાતી | `gu_IN` | India | 1 modell |
| Hebrew (Hebraisk) | עברית | `he_IL` | Israel | 1 modell |
| Hindi (Hindi) | हिन्दी | `hi_IN` | India | 1 modell |
| Croatian (Kroatisk) | Hrvatski | `hr_HR` | Kroatia | 1 modell |
| Hungarian (Ungarsk) | Magyar | `hu_HU` | Ungarn | 2 modeller |
| Indonesian (Indonesisk)| Bahasa Indonesia | `id_ID` | Indonesia | 1 modell |
| Icelandic (Islandsk) | Íslenska | `is_IS` | Island | 3 modeller |
| Italian (Italiensk) | Italiano | `it_IT` | Italia | 4 modeller |
| Japanese (Japansk) | 日本語 | `ja_JP` | Japan | 1 modell |
| Georgian (Georgisk) | ქართული | `ka_GE` | Georgia | 1 modell |
| Kazakh (Kasakhisk) | Қазақشا | `kk_KZ` | Kasakhstan | 1 modell |
| Luxembourgish | Lëtzebuergesch | `lb_LU` | Luxembourg | 1 modell |
| Nepali (Nepali) | नेपाली | `ne_NP` | Nepal | 1 modell |
| Dutch (Belgia) | Nederlands (België) | `nl_BE` | Belgia | 4 modeller |
| Dutch (Nederland) | Nederlands (Nederland) | `nl_NL` | Nederland | 6 modeller |
| **Norwegian (Norsk)**| **Norsk (Bokmål)** | **`no_NO`** | **Norge** | **2 modeller (11 talere inkl. 10 dialekter)** |
| Polish (Polsk) | Polski | `pl_PL` | Polen | 5 modeller |
| Portuguese (Brasil) | Português (Brasil) | `pt_BR` | Brasil | 4 modeller |
| Portuguese (Portugal)| Português (Portugal) | `pt_PT` | Portugal | 1 modell |
| Romanian (Rumensk) | Română | `ro_RO` | Romania | 2 modeller |
| Russian (Russisk) | Русский | `ru_RU` | Russland | 8 modeller |
| Slovak (Slovakisk) | Slovenčina | `sk_SK` | Slovakia | 1 modell |
| Slovenian (Slovensk)| Slovenščina | `sl_SI` | Slovenia | 1 modell |
| Serbian (Serbisk) | Srpski | `sr_RS` | Serbia | 2 modeller |
| Swedish (Svensk) | Svenska | `sv_SE` | Sverige | 3 modeller |
| Swahili (Swahili) | Kiswahili | `sw_CD` | DR Kongo | 1 modell |
| Telugu (Telugu) | తెలుగు | `te_IN` | India | 1 modell |
| Turkish (Tyrkisk) | Türkçe | `tr_TR` | Tyrkia | 3 modeller |
| Ukrainian (Ukrainsk) | Українська | `uk_UA` | Ukraina | 4 modeller |
| Urdu (Urdu) | اردو | `ur_PK` | Pakistan | 2 modeller |
| Vietnamese (Vietnamisk)| Tiếng Việt | `vi_VN` | Vietnam | 4 modeller |
| Chinese (Kinesisk) | 简体中文 | `zh_CN` | Kina | 2 modeller |

---

## Norske Stemmer i Piper TTS (`no_NO`) – 10 Regionale Dialekter

I Norge har dialekter usedvanlig høy anerkjennelse og prestisje i kringkasting, kulturliv og næringsliv. Mens tradisjonelle skytjenester kun tilbyr én standardisert og stiv østlandsstemme, leverer Privro gjennom Piper TTS et enestående dialektmangfold med **10 distinkte regionale talere**:

### Modell 1: `no_NO-nvcc-medium` (Multi-Speaker: 10 Regionale Dialekttalere)

| Taler-ID (Index) | Kode | Kjønn | Dialektområde & Karakteristikk | Anbefalt Bruksområde |
| :---: | :---: | :---: | :--- | :--- |
| **0** | `KNN` | Kvinne | **Nord-Norsk** (Nordland / Troms / Finnmark) – Frisk, åpen, engasjerende klang. | Lokale kampanjer, kreative YouTube-videoer, podkaster. |
| **1** | `KSV` | Kvinne | **Sør-Vestlandsk** (Rogaland / Stavanger / Jæren) – Myk, distinkt vestlandsk melodi med skarre-r. | Næringsliv på Vestlandet, lokalt tilpasset reklame, opplæring. |
| **2** | `MMN` | Mann | **Midt-Norsk / Trøndersk** (Trøndelag) – Tydelig trøndersk tonefall, stødig og folkelig røst. | Underholdning, lokalradio-stil, dokumentarer, jordnære videoer. |
| **3** | `KON` | Kvinne | **Øst-Norsk** (Standard Østnorsk / Oslo-regionen) – Nøytral, profesjonell og moderne. | Nyhetsformidling, e-læringskurs, bedriftspresentasjoner. |
| **4** | `MNN` | Mann | **Nord-Norsk** (Nord-Norge) – Kraftfull, artikulert og karaktersterk nordnorsk røst. | Storytelling, dokumentarisk formidling, YouTube Automation. |
| **5** | `MSV` | Mann | **Sør-Vestlandsk** (Stavanger / Vestlandet) – Varm, tillitvekkende og melodisk. | Næringslivs-voiceovers, industri, lokale sosiale medier. |
| **6** | `MON` | Mann | **Øst-Norsk** (Standard Østnorsk) – Klar, autoritativ, rolig og velbalansert. | Formelle dokumenter, vitenskapelig formidling, instruksjonsvideoer. |
| **7** | `MNV` | Mann | **Nord-Vestlandsk** (Møre og Romsdal / Sogn og Fjordane) – Karakteristisk vestlandsk tonefall. | Kulturelle innslag, reiseliv, lokale informasjonsvideoer. |
| **8** | `KMN` | Kvinne | **Midt-Norsk / Trøndersk** (Trøndelag) – Livlig, varm og sympatisk tone. | E-læring, barnefortellinger, sosiale medier, voiceover. |
| **9** | `KNV` | Kvinne | **Nord-Vestlandsk** (Sunnmøre / Nordfjord) – Klar og distinkt vestlandsk diksjon. | Dokumentarer, lydbøker, bedriftsinformasjon. |

### Modell 2: `no_NO-talesyntese-medium` (Enkeltaler – Nasjonalbibliotekets NST-korpus)
- **Opprinnelse:** Trenet på det offisielle norske taledatasettet fra *Nordisk språkteknologi (NST)* via **Språkbanken ved Nasjonalbiblioteket**.
- **Karakteristikk:** Nøytral, formell, svært velartikulert standard østnorsk (Bokmål).
- **Format:** 22,05 kHz 16-bit PCM WAV.
- **Beste bruk:** Offentlig informasjonsformidling, artikler, tilgjengelighetsopplesning for synshemmede, akademiske tekster.

---

## Arkitektur & Lydbehandlingspipeline (Architecture)

```
Brukertekst (User Input)
       │
       ▼
Tekstrensing & Fonetisering (eSpeak NG WebAssembly)
       │
       ▼
Neurale Inferensberegninger (Piper ONNX Runtime Web via WebGPU / WASM SIMD)
       │
       ▼
Rå Lydbuffer i Nettleserens Minne (Float32Array PCM Audio Chunks)
       │
       ├─────────────────────────────────┐
       ▼                                 ▼
Web Audio API Kontekst            WAV Lydgenerator (16-bit PCM)
(Umiddelbar lokal avspilling)     (Direkte nedlasting uten tap)
```

### 1. Piper TTS Pipeline
- Fonetisering utføres i sanntid via WebAssembly-kompilerte [eSpeak NG](https://github.com/espeak-ng/espeak-ng).
- Inferensen avvikles i en isolert Web Worker ved hjelp av [ONNX Runtime Web](https://onnxruntime.ai/).
- Hver stemmemodell lastes ned én enkelt gang og lagres persistent i nettleserens `IndexedDB` (`piper-voices-cache-v1`). Ved senere besøk starter talesyntesen på millisekunder uten behov for nettilkobling.

### 2. Kokoro TTS Pipeline
- En separat Web Worker initialiserer den optimerte `onnx-community/Kokoro-82M-v1.0-ONNX`-modellen via Transformers.js.
- Lydstrømmen genereres i sanntid i tekstblokker (*chunks*), slik at avspillingen starter umiddelbart uten ventetid.
- Inkluderer kontroller for pause, gjenopptakelse og hastighetsjustering (0,5x til 2,0x).

---

## Teknologistakk (Tech Stack)

- **Frontend Rammeverk:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Brukergrensesnitt & Design:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)-komponenter
- **Talesyntesemotorer (TTS):**
  - [Piper](https://github.com/rhasspy/piper) (via ONNX Runtime Web `ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) (WebAssembly fonetisering)
  - [Kokoro](https://github.com/hexgrad/kokoro) (via [`kokoro-js`](https://www.npmjs.com/package/kokoro-js))
- **Maskinvareakselerasjon:** WebGPU med automatisk fallback til flertrådet WASM SIMD
- **Ikoner & Varsler:** Lucide Icons og Sonner toast-meldinger

---

## Installasjon & Lokal Utvikling (Getting Started)

### Forutsetninger
- Node.js 18 eller nyere
- En moderne nettleser med støtte for WebAssembly. For optimal WebGPU-akselerasjon anbefales Google Chrome eller Microsoft Edge.

### Installasjon

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Miljøvariabler

Kopier `.env.example` til `.env`:

```bash
cp .env.example .env
```

Konfigurer `VITE_PIPER_CDN_URL` med din Cloudflare R2-bøtte eller CDN-adresse:

```env
VITE_PIPER_CDN_URL="https://your-bucket.r2.dev"
```

### Start Utviklingsserveren

```bash
npm run dev
```

Åpne [http://localhost:3000/](http://localhost:3000/) i nettleseren din.

### Bygg for Produksjon

```bash
npm run build    # Genererer det optimerte produksjonsbygget i /dist
npm run preview  # Lokal forhåndsvisning av produksjonsbygget
```

---

## Ofte Stilte Spørsmål (FAQ)

### Gratis Talesyntese & AI-Stemmer (Text-to-Speech)

#### Hvorfor er denne AI-stemmegeneratoren 100% gratis og uten tegnbegrensning?
Privros talesyntesemodeller og Whisper-transkribering kjøres utelukkende på maskinvaren i din egen datamaskin via WebGPU eller WebAssembly i nettleseren. Ettersom det ikke brukes kostbare skyservere til beregningene, påløper det ingen driftskostnader per minutt generert tale. Du kan derfor omdanne ubegrenset tekst uten abonnement, kreditter eller betalingsmurer.

#### Blir mine filer eller tekster lastet opp til eksterne servere? (GDPR, Datatilsynet, Sikt og lovpålagt taushetsplikt)
Nei, aldri. All inntastet tekst, opplastede lydfiler og generert tale forblir utelukkende i nettleserens midlertidige arbeidsminne (RAM). Ingen data overføres noensinne til eksterne servere eller tredjeparter. Dette sikrer full overholdelse av:
- **Personvernforordningen (GDPR)** og **Personopplysningsloven** under tilsyn av **Datatilsynet**.
- Retningslinjer fra **Sikt** (Kunnskapssektorens tjenesteleverandør, tidligere NSD) for behandling av personopplysninger i studentoppgaver og forskningsprosjekter.
- Lovbestemt taushetsplikt for leger og helsepersonell (**Helsepersonelloven § 21**).
- Advokaters lovpålagte taushetsplikt og fortrolighet (**Domstolloven** og **Regler for god advokatskikk pkt 2.3**).
- Forvaltningsansattes taushetsplikt (**Forvaltningsloven § 13**).

Fordi ingen data overføres, er det **ikke nødvendig med noen databehandleravtale (DPA)**.

#### Hvilke norske stemmer og dialekter finnes i verktøyet?
Privro tilbyr **to offisielle norske modeller** med totalt 11 stemmer:
1. `no_NO-nvcc-medium`: En unik flertaler-modell med **10 distinkte regionale dialekttalere** som dekker Nord-Norge, Vestlandet (både sør og nord), Trøndelag/Midt-Norge og Østlandet.
2. `no_NO-talesyntese-medium`: Nasjonalbibliotekets offisielle NST-modell for nøytral, velartikulert standard østnorsk (Bokmål).

#### Kan jeg eksportere lyden til Premiere Pro, DaVinci Resolve og CapCut?
Ja. All generert tale kan lastes ned umiddelbart som ukomprimert 16-bit PCM WAV i kringkastingskvalitet (22,05 kHz for Piper, 24 kHz for Kokoro). Filene er universelt kompatible med alle videoredigeringsprogrammer og lydredigeringsverktøy (som Audacity, Reaper og Final Cut Pro).

---

### Lydtranskribering, Studenter & Forskning (Whisper AI)

#### Hvordan transkriberer jeg gratis intervjuer til masteroppgave eller bacheloroppgave?
Norske studenter ved universiteter og høyskoler (som UiO, NTNU, UiB, UiT, OsloMet, NMBU, HVL og BI) kan gå til [Lydtranskribering](https://privro.com/no/transcribe), dra inn intervjuopptaket (MP3, M4A, WAV), og la Whisper AI transkribere samtalen direkte på PC-en. Verktøyet skiller mellom talere og eksporterer til Word (DOCX), tekstfiler eller PDF uten minuttbegrensninger.

#### Er Privro godkjent etter Sikts og universitetenes personvernkrav?
Ja. Sikt slår fast at lydopptak av menneskestemmer utgjør personopplysninger som utløser meldeplikt, og forbyr overføring av slike opptak til usikre, kommersielle skytjenester i utlandet. Ettersom Privro kjører transkripsjonen 100% lokalt i nettleseren, forlater opptaket aldri studentens egen maskin. Det skjer ingen dataoverføring til tredjepart eller tredjeland, noe som oppfyller de strengeste etiske og forskningsmessige personvernkrav.

#### Må institusjonen min inngå en databehandleravtale (DPA) med Privro?
Nei. Siden Privro verken mottar, lagrer eller behandler dine filer på noen servere, opptrer ikke Privro som en databehandler etter GDPR art. 28. Behandlingen skjer utelukkende lokalt på brukerens eget utstyr.

---

### Yrkesmessig Taushetsplikt (Advokater, Domstoler & Helsevesen)

#### Kan verktøyet brukes til konfidensielle diktater av advokater og helsepersonell?
Ja. Både advokater underlagt straffesanksjonert taushetsplikt og helsepersonell bundet av helsepersonelloven § 21 kan trygt bruke Privro. Ettersom beregningene skjer lokalt i RAM uten nettverkstrafikk etter innlasting av modellen, elimineres all risiko for skylekkasjer eller uautorisert innsyn.

---

### Caption Studio & Videoteksting (MP4 til Tekst)

#### Hvordan lager jeg automatiske undertekster uten vannmerke til TikTok og Reels?
Gå til [Caption Studio](https://privro.com/no/caption-studio), last opp videoen din og la Whisper generere nøyaktige undertekster. Du kan tilpasse skrifttype, farge, bakgrunnsplakater og animasjonsstil, og deretter brenne inn teksten direkte i videoen ved hjelp av nettleserens integrerte FFmpeg. Eksporten er **100% gratis og helt uten logo eller vannmerke**.

#### Hvilke sideforhold og formater støttes i Caption Studio?
- **9:16:** Vertikalt format optimalisert for TikTok, Instagram Reels og YouTube Shorts
- **16:9:** Horisontalt bredformat til YouTube, TV og presentasjoner
- **1:1:** Kvadratiske innlegg for Instagram og LinkedIn
- **4:5:** Vertikale feed-innlegg for Instagram
- **3:2:** Lysbilder og klassisk fotoformat

#### Kan jeg konvertere videoer (MP4, MOV, WebM) til tekst og undertekstfiler?
Ja. Med [MP4 til Tekst Konverter](https://privro.com/no/mp4-to-text) trekker du ut lyden fra enhver videofil og laster ned nøyaktige tidskodede undertekster (`.srt`, `.vtt`) eller redigerbare dokumenter (`.docx`, `.txt`).

---

### Innholdsskapere & YouTube-Monetisering

#### Er stemmene godkjent for kommersiell bruk og monetisering på YouTube?
Ja. Alle stemmemodellene i Piper og Kokoro er basert på åpne, kommersielt tillatte lisenser. All generert lyd er 100% royalty-fri. Du kan fritt monetisere YouTube-kanaler (inkludert faceless YouTube-kanaler / kanaler uten ansikt), selge lydbøker eller bruke lyden i kommersielle reklamefilmer uten å betale royalties.

#### Fungerer Privro offline uten internettforbindelse?
Ja. Når stemmemodellene eller Whisper-modellene er lastet inn første gang, lagres de sikkert i nettleserens lokale cache (`CacheStorage` og `IndexedDB`). Du kan deretter benytte appen fullstendig offline – for eksempel på fly, tog eller på lukkede, sikre nettverk.

---

### Plattform, Tilgjengelighet & LLM-Integrasjon

#### På hvor mange språk er Privro tilgjengelig?
Privro er tilgjengelig på **22 verdensspråk**: norsk, engelsk, spansk, portugisisk, italiensk, tysk, fransk, hindi, indonesisk, polsk, japansk, nederlandsk, svensk, dansk, finsk, tsjekkisk, tyrkisk, russisk, koreansk, tradisjonell kinesisk, arabisk og hebraisk. Hver språkutgave nås direkte via `https://privro.com/{språkkode}`.

#### Hva er formålet med `https://privro.com/llms.txt`?
[privro.com/llms.txt](https://privro.com/llms.txt) og [privro.com/llms-full.txt](https://privro.com/llms-full.txt) er standardiserte, maskinlesbare spesifikasjoner utarbeidet for AI-assistenter og LLM-er. De gir presis teknisk informasjon om Privros lokale personvernarkitektur, modeller, ytelseskarakteristikker og API-strukturer.

---

## Anerkjennelser & Takk (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) og [Piper Voices](https://huggingface.co/rhasspy/piper-voices) av Michael Hansen og Rhasspy-fellesskapet.
- [Kokoro TTS](https://github.com/hexgrad/kokoro) av Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) og [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) av Microsoft.
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) for fonetisering via WebAssembly.
- [Språkbanken ved Nasjonalbiblioteket](https://www.nb.no/sprakbanken/) og NST for det norske talesyntesedatasettet.

---

## Lisens (License)

Dette prosjektet er utgitt under [Apache License 2.0](LICENSE). Se filen `LICENSE` for de fullstendige vilkårene.
