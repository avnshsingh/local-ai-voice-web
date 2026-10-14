<div align="center">

[![Language: Danish](https://img.shields.io/badge/Language-Dansk%20(Danish)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

</div>

# Privro AI Voice - Gratis Lokale AI-Stemmer & Tekst til Tale (Text-to-Speech) i Browseren

En privatlivssikker, browserbaseret AI-stemmegenerator og talesyntese af næste generation uden sky-upload (*zero-upload*), drevet af [Privro AI](https://privro.com/da). Indtast din tekst, vælg en stemme og generer øjeblikkeligt livagtig menneskelig tale lokalt på din egen enhed ved hjælp af Web Workers og WebGPU. Hverken tekst eller lydfiler sendes nogensinde til eksterne cloud-servere.

- **Kør webappen direkte:** [voice.privro.com](https://voice.privro.com)
- **Privro Voice Studio:** [privro.com/da/piper-voice](https://privro.com/da/piper-voice)
- **Maskinlæsbare specifikationer (LLM):** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## To Neurale Talesyntesemotorer i Browseren (Dual Neural TTS Engines)

Projektet forener to uafhængige neurale tekst-til-tale-systemer (Text-to-Speech), der afvikles fuldstændigt på klientsiden direkte i webbrowseren:

1. **Piper TTS (Primær Motor):**
   - Lynhurtig lokal talesyntese med ONNX Runtime Web og eSpeak NG til fonetisering.
   - Understøttelse af **over 40 sprog, 58 regionale varianter og mere end 300 stemmemodeller**.
   - Officiel dansk model for Danmark (`da_DK`):
     - `da_DK-talesyntese-medium`: Trænet på det officielle danske taledatasæt fra *Nordisk språkteknologi (NST)*. Neutral, rolig, artikuleret og troværdig standardrigsdansk.
   - Hardware-acceleration via **WebGPU** med automatisk tilbagefald (*fallback*) til flertrådet **WebAssembly (WASM SIMD)** på enheder, der ikke understøtter WebGPU.
   - Multi-speaker-understøttelse med konfigurerbare taler-ID'er.
   - Modelstørrelser fra ultrahurtige (`x_low`, `low`) til krystalklar studiekvalitet (`medium`, `high`).
   - Lokal browserlagring via `CacheStorage`: modeller (~20 MB til ~75 MB) downloades kun én gang og fungerer derefter 100% offline uden internetforbrug.
   - Direkte eksport til tabsfrit, ukomprimeret **16-bit PCM WAV (22,05 kHz)**.

2. **Kokoro TTS (Sekundær Motor):**
   - Drevet af [Kokoro](https://github.com/hexgrad/kokoro) (`Kokoro-82M`, 82 millioner parametre) via [`kokoro-js`](https://www.npmjs.com/package/kokoro-js).
   - Ekstremt levende og flydende engelske fortællerstemmer (amerikansk og britisk engelsk).
   - Blokvis streaming i realtid (*chunk-streaming*): afspilningen starter med det samme ved det første afsnit uden at vente på fuld tekstbehandling.
   - Fuld lydkontrol: afspil, pause, genoptag og trinløs hastighedsjustering (0,5x til 2,0x).

---

## Privro Værktøjer & Tjenester (Privro Tools)

Privro tilbyder en komplet serie af produktivitets- og indholdsværktøjer designet efter princippet *local-first*. Alle lokale værktøjer er 100% gratis at benytte uden oprettelse, uden brugerkonto, uden kreditkort, uden API-nøgler og uden tids- eller filbegrænsninger:

| Værktøj & Side | Hovedfunktioner & Lokale Fordele |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Gratis Lokal Lydtranskribering (Whisper AI)](https://privro.com/da/transcribe) | Konverter lydfiler til tekst via OpenAI Whisper (Tiny til Large Turbo) direkte på din computer. Ingen uploads, ingen tidsbegrænsning. Ideel til interviews til speciale og fortrolige møder. |
| [MP4 til Tekst Konverter (Videotransskribering)](https://privro.com/da/mp4-to-text) | Gratis online videotransskribering. Udtræk lyd lokalt fra MP4-, MOV- og WebM-videoer og konverter til tekst (TXT, DOCX, PDF) eller undertekstfiler (SRT, VTT). |
| [Caption Studio - Automatiske Undertekster](https://privro.com/da/caption-studio) | Skab animerede undertekster i TikTok- og Reels-stil. Brænd undertekster direkte ind i videoen op til 4K-opløsning via lokalt browser-FFmpeg – 100% gratis og **helt uden vandmærke**. |
| [Piper Voice Studio (AI-Stemmestudie)](https://privro.com/da/piper-voice) | Udforsk og prøvelyt over 300 stemmer direkte i browseren. Med talervælger, WebGPU-acceleration, tonehøjde- og tempokontrol samt eksport til tabsfrit WAV. |
| [Gratis Tekst til Tale Generator](https://privro.com/da/text-to-speech) | Hurtig, sikker og ubegrænset online talesyntese. Forvandl artikler, manuskripter og dokumenter til naturlig tale uden eksterne cloud-servere. |
| [Lokal AI Stemme Webapp](https://voice.privro.com) | Den åbne og selvstændige PWA-applikation bygget fra dette arkiv med dedikerede faner til både Piper TTS og Kokoro TTS. |
| [Alternativ til Otter.ai (Gratis & Uden Tidsgrænse)](https://privro.com/da/alternatives/otter) | Hvorfor betale dyre månedlige dollarabonnementer og risikere cloud-lækager? Oplev Privros gratis, ubegrænsede og fuldstændig lokale transkribering. |
| [Alternativ til Happy Scribe (Zero-Upload)](https://privro.com/da/alternatives/happyscribe) | Sammenlign Happy Scribes minutbegrænsninger og serveruploads med Privros gratis, lokale Whisper-transkribering og vandmærkefri Caption Studio. |
| [Priser og Planer for Privro AI](https://privro.com/da/pricing) | Se vores 100% gratis lokale browserværktøjer, supplerende cloud-transkribering til store mængder og forudbetalte kreditter uden udløbsdato. |

---

## Talesyntese & Tekst til Tale på Privro (Text to Speech on Privro)

Privro tilbyder en kompromisløs nul-upload arkitektur til talesyntese direkte i browseren – bygget til maksimal hastighed, fuld datasuverænitet og intuitiv betjening:

- **[Piper Voice Studio](https://privro.com/da/piper-voice):** Det komplette interaktive stemmestudie. Gennemse 300+ stemmer på 40+ sprog, vælg specifikke talere i flertalermodeller, skift ubesværet mellem WebGPU og WASM, gem modeller lokalt og download lydfiler i højeste studiekvalitet.
- **[Tekst til Tale Generator](https://privro.com/da/text-to-speech):** Hurtigt onlineværktøj til at give artikler, e-learning, præsentationer og video-manuskripter en naturlig stemme.
- **[Lokal AI Stemme Webapp](https://voice.privro.com):** PWA-appen fra dette arkiv med adskilte brugerflader for Piper TTS og Kokoro TTS.

### Lokal Privatlivsarkitektur på din Enhed (On-Device Privacy)
Al stemmegenerering og lydbehandling afvikles lokalt på klientsiden via Web Workers i din webbrowser:
- **Ingen tekst sendes nogensinde til eksterne servere eller tredjeparter.**
- **Ingen genereret lyd optages, logges eller gemmes i skyen.**
- **Ingen registrering, ingen brugerkonto og ingen API-nøgler påkrævet.**
- **Fungerer 100% offline**, så snart modellen er gemt i browserens cache.
- **Fuld overensstemmelse med Databeskyttelsesforordningen (GDPR)** og **Databeskyttelsesloven** under **Datatilsynet**.
- **Beskytter lovbestemt tavshedspligt og advokatfortrolighed jf. Retsplejelovens § 170**, sundhedspersoners tavshedspligt jf. **Sundhedslovens § 40** samt tavshedspligt jf. **Straffelovens § 152**.
- Da der ikke sker overførsel af personoplysninger til Privro, er **ingen databehandleraftale (DPA)** påkrævet.

---

## Maskinlæsbare Platformsspecifikationer (`llms.txt` & `llms-full.txt`)

Privro stiller struktureret, maskinlæsbar dokumentation til rådighed i henhold til standarden `llms.txt`:

- **Kortfattet overblik:** [https://privro.com/llms.txt](https://privro.com/llms.txt)
- **Komplet teknisk specifikation:** [https://privro.com/llms-full.txt](https://privro.com/llms-full.txt)

Disse filer giver LLM'er, AI-søgeagenter og webcrawlere verificeret information om Privros lokale sikkerhedsmodel, Whisper-modelstørrelser, FFmpeg-konfigurationer, Piper-stemmekatalog og internationale sprogstier.

---

## Tilgængelige Sprog på Privro (Languages Available on Privro)

Privro er fuldstændigt lokaliseret på **22 sprog**. Den engelske udgave findes på hoveddomænet, mens de enkelte sprogversioner tilgås via deres egen sprogsti:

| Sprog (Language) | Lokalt Navn | Kode | Startside URL |
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

> **Bemærk:** Kerneværktøjerne i Privro-suiten – herunder [Lydtranskribering](https://privro.com/da/transcribe), [Caption Studio](https://privro.com/da/caption-studio) og [Piper Voice](https://privro.com/da/piper-voice) – er tilgængelige på alle disse 22 sprog.

---

## Understøttede Sprog i Piper TTS (Languages Supported by Piper TTS)

Piper TTS omfatter **over 300 åbne neurale stemmemodeller** fordelt over **58 sprog- og regionskoder** i 42 sprogfamilier. Alle modeller kan afvikles direkte i browseren:

| Sprog (Language) | Lokalt Navn | Kode | Land / Region | Tilgængelige Modeller |
| ------------------- | ------------------------- | --------- | -------------------------------- | --------------------- |
| Arabic (Arabisk) | العربية | `ar_JO` | Jordan | 2 modeller |
| Bulgarian (Bulgarsk)| български | `bg_BG` | Bulgarien | 1 model |
| Bengali (Bengalsk) | বাংলা | `bn_BD` | Bangladesh | 1 model |
| Catalan (Katalansk) | Català | `ca_ES` | Spanien | 3 modeller |
| Czech (Tjekkisk) | Čeština | `cs_CZ` | Tjekkiet | 3 modeller |
| Welsh (Walisisk) | Cymraeg | `cy_GB` | Storbritannien | 2 modeller |
| Danish (Dansk) | Dansk | `da_DK` | Danmark | 1 model (NST Rigsdansk) |
| German (Tysk) | Deutsch | `de_DE` | Tyskland | 10 modeller |
| Greek (Græsk) | Ελληνικά | `el_GR` | Grækenland | 3 modeller |
| English (UK) | English (UK) | `en_GB` | Storbritannien | 11 modeller |
| English (US) | English (US) | `en_US` | USA | 27 modeller |
| Spanish (Argentina) | Español (Argentina) | `es_AR` | Argentina | 1 model |
| Spanish (Spanien) | Español (España) | `es_ES` | Spanien | 5 modeller |
| Spanish (Mexico) | Español (México) | `es_MX` | Mexico | 3 modeller |
| Estonian (Estisk) | eesti | `et_EE` | Estland | 1 model |
| Basque (Baskisk) | Euskara | `eu_ES` | Spanien | 2 modeller |
| Persian (Farsi) | فارسی | `fa_IR` | Iran | 5 modeller |
| Finnish (Finsk) | Suomi | `fi_FI` | Finland | 2 modeller |
| French (Fransk) | Français | `fr_FR` | Frankrig | 7 modeller |
| Hebrew (Hebraisk) | עִבְרִית | `he_IL` | Israel | 1 model |
| Hindi (Hindi) | हिन्दी | `hi_IN` | Indien | 3 modeller |
| Croatian (Kroatisk) | Hrvatski | `hr_HR` | Kroatien | 1 model |
| Hungarian (Ungarsk) | Magyar | `hu_HU` | Ungarn | 2 modeller |
| Icelandic (Islandsk)| Íslenska | `is_IS` | Island | 3 modeller |
| Italian (Italiensk) | Italiano | `it_IT` | Italien | 4 modeller |
| Japanese (Japansk) | 日本語 | `ja_JP` | Japan | 1 model (2 talere) |
| Georgian (Georgisk) | ქართული ენა | `ka_GE` | Georgien | 1 model |
| Kazakh (Kasakhisk) | қазақша | `kk_KZ` | Kasakhstan | 3 modeller |
| Korean (Koreansk) | 한국어 | `ko_KR` | Sydkorea | 1 model |
| Kurdish (Kurdisk) | Kurmancî | `ku_TR` | Tyrkiet | 1 model |
| Luxembourgish (Luxembourgsk)| Lëtzebuergesch | `lb_LU` | Luxembourg | 1 model |
| Lithuanian (Litauisk)| Lietuvių | `lt_LT` | Litauen | 1 model |
| Latvian (Lettisk) | Latviešu | `lv_LV` | Letland | 1 model |
| Malayalam (Malayalam)| മലയാളം | `ml_IN` | Indien | 2 modeller |
| Marathi (Marathi) | मराठी | `mr_IN` | Indien | 1 model |
| Nepali (Nepalesisk) | नेपाली | `ne_NP` | Nepal | 3 modeller |
| Dutch (Belgien/Flandern)| Nederlands (België) | `nl_BE` | Belgien | 4 modeller (Nathalie, RDH) |
| Dutch (Holland/Nederland)| Nederlands (Nederland)| `nl_NL` | Holland | 6 modeller (Pim, Alex, Ronnie, MLS 52 talere) |
| Norwegian (Norsk) | Norsk | `no_NO` | Norge | 2 modeller |
| Polish (Polsk) | Polski | `pl_PL` | Polen | 5 modeller |
| Portuguese (Brasilien)| Português (Brasil) | `pt_BR` | Brasilien | 4 modeller |
| Portuguese (Portugal)| Português (Portugal)| `pt_PT` | Portugal | 1 model |
| Romanian (Rumænsk) | Română | `ro_RO` | Rumænien | 1 model |
| Russian (Russisk) | Русский | `ru_RU` | Rusland | 4 modeller |
| Slovak (Slovakisk) | Slovenčina | `sk_SK` | Slovakiet | 1 model |
| Slovenian (Slovensk)| Slovenščina | `sl_SI` | Slovenien | 1 model |
| Albanian (Albansk) | shqip | `sq_AL` | Albanien | 1 model |
| Serbian (Serbisk) | srpski | `sr_RS` | Serbien | 1 model |
| Swedish (Svensk) | Svenska | `sv_SE` | Sverige | 3 modeller (NST, Lisa, Alma) |
| Swahili (Swahili) | Kiswahili | `sw_CD` | DR Congo | 1 model |
| Telugu (Telugu) | తెలుగు | `te_IN` | Indien | 3 modeller |
| Thai (Thailandsk) | ไทย | `th_TH` | Thailand | 1 model |
| Turkish (Tyrkisk) | Türkçe | `tr_TR` | Tyrkiet | 1 model |
| Ukrainian (Ukrainsk)| украї́нська мо́ва | `uk_UA` | Ukraine | 5 modeller |
| Urdu (Urdu) | اردو | `ur_PK` | Pakistan | 2 modeller |
| Vietnamese (Vietnamesisk)| Tiếng Việt | `vi_VN` | Vietnam | 3 modeller |
| Chinese (Forenklet) | 简体中文 | `zh_CN` | Kina | 4 modeller |

---

## Teknisk Arkitektur & Behandlingspipeline (Technical Architecture)

### 1. Piper TTS Pipeline
```
[Indtastet tekst]
    │
    ▼
[Web Worker: eSpeak NG Fonetisering]   ──► Konverterer tekststrenge til standardiserede fonem-ID'er
    │
    ▼
[Web Worker: ONNX Runtime Web]         ──► Kører neural model (.onnx) via WebGPU eller WASM
    │
    ▼
[PCM Lydbuffer]                        ──► Opbygger en 22,05 kHz 16-bit lineær PCM-lydstrøm
    │
    ▼
[Web Audio API / WAV Blob]             ──► Øjeblikkelig afspilning og download af WAV i studiekvalitet
```

- **Hurtig Edge-CDN Levering:** Statiske WASM-binærer fra ONNX Runtime og fonemtabeller distribueres globalt via Cloudflare R2 (`VITE_PIPER_CDN_URL`), hvilket minimerer indlæsningstider ved første besøg.
- **Lokal Browsercache:** Downloadede stemmemodeller (`.onnx`) gemmes i browserens `CacheStorage` (`piper-voices-cache-v1`). Ved efterfølgende besøg starter talesyntesen på millisekunder helt uden netværkstrafik.

### 2. Kokoro TTS Pipeline
- En selvstændig Web Worker initialiserer den optimerede `onnx-community/Kokoro-82M-v1.0-ONNX`-model via Transformers.js.
- Lydstrømmen genereres i realtid i tekstblokke (*chunks*), så afspilningen begynder øjeblikkeligt uden ventetid.
- Indeholder kontrolfunktioner til pause, genoptagelse og justering af talehastighed (0,5x til 2,0x).

---

## Teknologistak (Tech Stack)

- **Frontend Rammeværk:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Brugerflade & Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)-komponenter
- **Talesyntesemotorer (TTS):**
  - [Piper](https://github.com/rhasspy/piper) (via ONNX Runtime Web `ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) (WebAssembly fonetisering)
  - [Kokoro](https://github.com/hexgrad/kokoro) (via [`kokoro-js`](https://www.npmjs.com/package/kokoro-js))
- **Hardware-Acceleration:** WebGPU med automatisk tilbagefald til flertrådet WASM SIMD
- **Ikoner & Meddelelser:** Lucide Icons og Sonner toast-beskeder

---

## Installation & Lokal Udvikling (Getting Started)

### Forudsætninger
- Node.js 18 eller nyere
- En moderne webbrowser med understøttelse af WebAssembly. For optimal WebGPU-acceleration anbefales Google Chrome eller Microsoft Edge.

### Installation

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

Konfigurer `VITE_PIPER_CDN_URL` med din Cloudflare R2-bucket eller CDN-adresse:

```env
VITE_PIPER_CDN_URL="https://your-bucket.r2.dev"
```

### Start Udviklingsserveren

```bash
npm run dev
```

Åbn [http://localhost:3000/](http://localhost:3000/) i din browser.

### Opret Produktionsbyg

```bash
npm run build    # Genererer det optimerede produktionsbundt i /dist
npm run preview  # Lokal forhåndsvisning af produktionsbygget
```

---

## Ofte Stillede Spørgsmål (FAQ)

### Gratis Talesyntese & AI-Stemmer (Text-to-Speech)

#### Hvorfor er denne AI-stemmegenerator 100% gratis og uden tegnbegrænsning?
Privros talesyntesemodeller og Whisper-transkribering afvikles direkte på hardwaren i din egen computer via WebGPU eller WebAssembly i din webbrowser. Da der ikke anvendes dyre cloud-servere til beregningerne, opstår der ingen driftsomkostninger pr. genereret minut. Du kan derfor omdanne ubegrænset tekst uden abonnementsbetaling, tokens eller betalingsmure.

#### Bliver mine filer eller tekster uploadet til eksterne servere? (GDPR, Datatilsynet og tavshedspligt)
Nej, aldrig. Al indtastet tekst, uploadede lydfiler og genereret tale forbliver udelukkende i browserens midlertidige arbejdshukommelse (RAM). Ingen data sendes nogensinde til eksterne servere eller tredjeparter. Dette sikrer fuldstændig overholdelse af **Databeskyttelsesforordningen (GDPR)** og **Databeskyttelsesloven** under **Datatilsynet**. Det beskytter også den lovbestemte **advokatfortrolighed og tavshedspligt jf. Retsplejelovens § 170**, sundhedspersoners tavshedspligt jf. **Sundhedslovens § 40** samt tavshedspligt jf. **Straffelovens § 152**.

#### Er der brug for en databehandleraftale (DPA)?
Nej. Da dine data aldrig forlader din egen computer og ikke behandles på Privros servere, optræder Privro ikke som databehandler i henhold til GDPR artikel 28. Derfor er der intet juridisk krav om at indgå en databehandleraftale (DPA).

#### Må jeg bruge de genererede stemmer kommercielt og tjene penge på YouTube?
Ja. Alle genererede lydfiler er 100% royalty-frie til både personlig og kommerciel brug. Du må anvende stemmerne uden licensgebyrer i YouTube-videoer med annonceindtægter (monetisering), TikTok, podcast-episoder, lydbøger, virksomhedsvideoer og e-learningkurser.

#### Kan jeg bruge værktøjet til en "faceless YouTube-kanal" på dansk?
Absolut. Piper TTS tilbyder naturlige danske stemmer uden metallisk robotklang eller mekaniske hak. Da lyden downloades i studiekvalitet uden vandmærker eller lydlogoer, opfylder indholdet alle kvalitetskrav til YouTube Partner-programmet for annonceindtægter.

#### Hvilke danske stemmer er tilgængelige?
I Piper TTS findes den officielle model for dansk (`da_DK`):
- **`da_DK-talesyntese-medium` (NST Rigsdansk):** Neutral, rolig og velartikuleret rigsdansk baseret på Nordisk språkteknologis korpus. Ideel til nyhedsoplæsning, artikler, e-learning og saglige præsentationer.
Til engelske voiceovers kan du desuden benytte **Kokoro TTS** med ultrarealistiske britiske og amerikanske accenter samt direkte streaming.

#### Kan jeg importere de genererede lydfiler direkte i Premiere Pro og CapCut?
Ja. Når genereringen er fuldført, downloader du en ukomprimeret **16-bit PCM WAV-fil (22,05 kHz)**. Dette lydformat understøttes af alle professionelle videoredigeringsprogrammer, herunder Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, CapCut og Audacity.

#### Fungerer talesyntesen og transkriberingen offline uden internetforbindelse?
Ja. Når en stemmemodel eller Whisper-model er downloadet første gang, gemmes den sikkert i browserens `CacheStorage`. Derefter fungerer værktøjet 100% offline – perfekt når du rejser med tog eller fly, eller arbejder på en computer i et lukket netværk uden internetadgang.

#### Hvorfor anvendes WebGPU-teknologi?
WebGPU er den nyeste webstandard, der giver webbrowsere direkte adgang til de parallelle beregningskerner på computerens grafikkort (GPU). Dette gør talesyntese og transkribering op til 5 gange hurtigere end traditionel CPU-behandling. Hvis din enhed ikke understøtter WebGPU, skifter Privro automatisk over til flertrådet WebAssembly (WASM SIMD).

---

### Lydtranskribering, Interviewe til Speciale & Mødereferater (Whisper)

#### Hvordan transskriberer jeg gratis interviews til mit bachelorprojekt eller kandidatspeciale?
For studerende ved danske universiteter og professionshøjskoler (Københavns Universitet, Aarhus Universitet, CBS, SDU, Aalborg Universitet, DTU, RUC m.fl.) løser Privro et stort problem: træk og slip din interviewoptagelse (MP3, WAV, iPhone-stemmememo i M4A, OGG, FLAC) i [Gratis Lokal Lydtranskribering](https://privro.com/da/transcribe). OpenAI Whisper omdanner talen til tekst direkte i din browser. Du slipper for at betale minutpriser og overholder universiteternes etiske og GDPR-relaterede krav, da personhenførbare data aldrig sendes til eksterne cloud-servere.

#### Kan jeg udtrække tekst og undertekster fra MP4-videofiler?
Ja. Brug vores [MP4 til Tekst Konverter](https://privro.com/da/mp4-to-text) eller slip din MP4-, WebM- eller MOV-video direkte i transkriberingsværktøjet. Lyden udtrækkes lokalt fra videoen og omdannes til tekst med nøjagtige tidskoder eller færdige SRT/VTT-undertekstfiler.

#### Er der nogen tidsgrænse eller filstørrelsesbegrænsning for transkribering?
Nej. I modsætning til kommercielle cloud-tjenester, som låser efter 15–30 minutter, har Privros lokale Whisper-værktøj **ingen tidsgrænser eller filstørrelsesbegrænsninger**. Du kan transkribere alt fra en kort 20-sekunders optagelse til et 4-timers bestyrelsesmøde helt kvit og frit.

#### Hvilke formater understøttes ved eksport af transkriberingen?
Du kan downloade teksten med tidskoder på ordniveau i 8 udbredte formater:
- Ren tekst: `TXT`
- Undertekstfiler: `SRT`, `VTT`
- Regneark & Data: `CSV`, `JSON`, `XLSX` (Excel)
- Formaterede dokumenter: Microsoft Word `DOCX`, `PDF`

---

### Caption Studio: Automatiske Undertekster uden Vandmærke

#### Kan jeg generere automatiske undertekster helt uden vandmærke eller logo?
Ja. I [Caption Studio](https://privro.com/da/caption-studio) uploader du din video, lader Whisper generere teksten automatisk, tilpasser skrifttyper og dynamiske tekstanimationer (f.eks. karaoke-stil) og eksporterer videoen med indbrændte undertekster. Eksporten udføres via browser-internt FFmpeg, **100% gratis og helt uden vandmærke**, i op til 4K-opløsning.

#### Hvilke billedformater understøttes til sociale medier?
Caption Studio indeholder færdige forudindstillinger til alle større platforme:
- **9:16:** TikTok, Instagram Reels, YouTube Shorts (vertikal video)
- **16:9:** Horisontal video til YouTube, computer og tv
- **1:1:** Kvadratiske opslag til Instagram og LinkedIn
- **4:5:** Vertikale feed-opslag til Instagram
- **3:2:** Diasshows og præsentationer

---

### Platform, Tilgængelighed & LLM-Integration

#### På hvor mange sprog er Privro tilgængeligt?
Privro er tilgængeligt på **22 verdenssprog**: dansk, engelsk, spansk, portugisisk, italiensk, tysk, fransk, hindi, indonesisk, polsk, japansk, hollandsk, svensk, norsk, finsk, tjekkisk, tyrkisk, russisk, koreansk, traditionelt kinesisk, arabisk og hebraisk. Hver sprogudgave tilgås direkte via `https://privro.com/{sprogkode}`.

#### Hvad er formålet med `https://privro.com/llms.txt`?
[privro.com/llms.txt](https://privro.com/llms.txt) og [privro.com/llms-full.txt](https://privro.com/llms-full.txt) er standardiserede, maskinlæsbare specifikationer udarbejdet til AI-assistenter og LLM'er. De indeholder klare oplysninger om Privros lokale privatlivsarkitektur, ydeevne, modeller og API-strukturer.

---

## Anerkendelser & Tak (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) og [Piper Voices](https://huggingface.co/rhasspy/piper-voices) af Michael Hansen og Rhasspy-fællesskabet.
- [Kokoro TTS](https://github.com/hexgrad/kokoro) af Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) og [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) af Microsoft.
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) til fonetisering via WebAssembly.

---

## Licens (License)

Dette projekt er udgivet under [Apache License 2.0](LICENSE). Se filen `LICENSE` for de fuldstændige vilkår.
