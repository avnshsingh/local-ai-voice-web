<div align="center">

[![Language: Dutch](https://img.shields.io/badge/Language-Nederlands%20(Dutch)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/avnshsingh/local-ai-voice-web)

<br/>

**Translations / Read in other languages:**

[English](README.md) • [Español](README.es.md) • [Português](README.pt.md) • [Italiano](README.it.md) • [Deutsch](README.de.md) • [Français](README.fr.md) • [हिन्दी](README.hi.md) • [Bahasa Indonesia](README.id.md) • [Polski](README.pl.md) • [日本語](README.ja.md) • [Nederlands](README.nl.md) • [Svenska](README.sv.md) • [Dansk](README.da.md) • [Norsk](README.no.md) • [Suomi](README.fi.md) • [Čeština](README.cs.md) • [Türkçe](README.tr.md) • [Русский](README.ru.md) • [한국어](README.ko.md) • [繁體中文](README.zh-tw.md) • [العربية](README.ar.md) • [עברית](README.he.md)

</div>

# Privro AI Voice - Gratis Lokale AI Stemmen & Tekst naar Spraak (Text-to-Speech) in uw Browser

Een privacygerichte, browser-gebaseerde AI-spraakgenerator van de volgende generatie zonder data-upload (*zero-upload*), aangedreven door [Privro AI](https://privro.com/nl). Voer tekst in, selecteer een stem en synthetiseer direct levensechte menselijke spraak lokaal op uw apparaat via Web Workers en WebGPU. Er wordt nooit tekst of audio naar externe cloudservers verzonden.

- **Direct beschikbare web-app:** [voice.privro.com](https://voice.privro.com)
- **Privro Voice Studio:** [privro.com/nl/piper-voice](https://privro.com/nl/piper-voice)
- **Machineleesbare specificaties (LLM):** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## Twee Neurale Spraaksynthese-Engines (Dual Neural TTS Engines)

Dit project integreert twee onafhankelijke neurale tekst-naar-spraak-engines die volledig aan de clientzijde in de browser worden uitgevoerd:

1. **Piper TTS (Primaire Engine):**
   - Ultrasnelle lokale neurale spraaksynthese met ONNX Runtime Web en eSpeak NG voor fonemisatie.
   - Ondersteuning voor **meer dan 40 talen, 58 regionale varianten en ruim 300 stemmodellen**.
   - Uitgebreide ondersteuning voor het Nederlands met **10 modellen** verspreid over Nederland (`nl_NL`) en België/Vlaanderen (`nl_BE`), inclusief het multi-speaker MLS-model met maar liefst **52 verschillende sprekers**, evenals de herkenbare stemmen Pim, Alex, Ronnie, Nathalie en RDH.
   - Hardware-versnelling via **WebGPU** met automatische terugval (*fallback*) naar multithreaded **WebAssembly (WASM SIMD)** op niet-ondersteunde apparaten.
   - Multi-speaker ondersteuning met configureerbare Spreker-ID's.
   - Modellen variërend van compact en snel (`x_low`, `low`) tot kristalheldere studiokwaliteit (`medium`, `high`).
   - Browser-caching via `CacheStorage`: modellen (~20MB tot ~75MB) worden eenmalig gedownload en functioneren daarna direct en 100% offline zonder dataverbruik.
   - Direct downloaden van ongecomprimeerde, verliesvrije audio in **16-bit PCM WAV (22,05 kHz)**.

2. **Kokoro TTS (Secundaire Engine):**
   - Aangedreven door [Kokoro](https://github.com/hexgrad/kokoro) (`Kokoro-82M`, 82 miljoen parameters) via [`kokoro-js`](https://www.npmjs.com/package/kokoro-js).
   - Buitengewoon natuurlijke intonatie en expressieve dictie voor Amerikaans- en Brits-Engelse vertellingen.
   - Realtime chunk-streaming: spraakweergave start direct bij de eerste alinea zonder te wachten op de volledige tekstverwerking.
   - Volledige audiobediening: afspelen, pauzeren, hervatten en dynamische snelheidsregeling (0,5x tot 2,0x).

---

## Privro Tools & Diensten (Privro Tools)

Privro biedt een complete reeks gratis productiviteitstools en AI-oplossingen die strikt volgens het *local-first*-principe in de browser werken. Alle lokale tools zijn 100% gratis te gebruiken zonder registratie, zonder account, zonder creditcard, zonder API-sleutels en zonder bestands- of tijdslimieten:

| Tool & Pagina | Belangrijkste Functies & Lokale Mogelijkheden |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Gratis Lokale Audio Transcriptie (Whisper AI)](https://privro.com/nl/transcribe) | Converteer audio naar tekst via OpenAI Whisper (Tiny tot Large Turbo) direct op uw apparaat. Geen uploads, geen tijdslimieten en geen registratie. Ideaal voor scripties en vertrouwelijke notulen. |
| [MP4 naar Tekst Converter (Video Transcriptie)](https://privro.com/nl/mp4-to-text) | Gratis online video-naar-tekst transcriptie. Extraheer lokaal audio uit MP4-, MOV- en WebM-bestanden en converteer naar tekst (TXT, DOCX, PDF) of ondertitels (SRT, VTT). |
| [Caption Studio - Video Ondertiteling Editor](https://privro.com/nl/caption-studio) | Genereer geanimeerde video-ondertitels in TikTok- en Reels-stijl. Brand ondertitels direct in video's tot 4K-resolutie via browser-intern FFmpeg – 100% gratis en **zonder watermerk**. |
| [Piper Voice Studio (AI Spraakstudio)](https://privro.com/nl/piper-voice) | Verken en test meer dan 300 stemmen direct in de browser. Met sprekerselectie, WebGPU-versnelling, toonhoogte- en tempobediening en export naar verliesvrije WAV. |
| [Gratis Tekst naar Spraak Generator](https://privro.com/nl/text-to-speech) | Snelle, veilige en onbeperkte online spraaksynthese. Zet geschreven teksten en artikelen om in natuurlijke spraak zonder externe cloudservers. |
| [Lokale AI Spraak Web-App](https://voice.privro.com) | De open-source standalone Progressive Web App (PWA) gebouwd vanuit deze repository, met directe toegang tot Piper TTS en Kokoro TTS. |
| [Alternatief voor Otter.ai (Gratis & Zonder Tijdslimiet)](https://privro.com/nl/alternatives/otter) | Waarom betalen voor dure maandabonnementen en cloud-uploads? Ontdek Privro's gratis, onbeperkte en strikt lokale transcriptie-architectuur. |
| [Alternatief voor Happy Scribe (Zero-Upload)](https://privro.com/nl/alternatives/happyscribe) | Vergelijk Happy Scribe's minutenbeperkingen en serveruploads met Privro's gratis, lokale Whisper-transcriptie en watermerkvrije Caption Studio. |
| [Prijzen en Pakketten van Privro AI](https://privro.com/nl/pricing) | Bekijk onze 100% gratis lokale browsertools, optionele high-speed cloud-transcriptie voor bulkverwerking en credits zonder vervaldatum. |

---

## Tekst naar Spraak op Privro (Text to Speech on Privro)

Privro biedt zero-upload spraaksynthese direct in uw browser – geoptimaliseerd voor maximale snelheid, privacy en gebruiksgemak:

- **[Piper Voice Studio](https://privro.com/nl/piper-voice):** De complete, interactieve stemstudio. Blader door meer dan 300 stemmen in 40+ talen, selecteer specifieke sprekers in multi-speaker modellen, schakel eenvoudig tussen WebGPU en WASM, sla favoriete modellen lokaal op en download hoogwaardige WAV-bestanden.
- **[Tekst naar Spraak Generator](https://privro.com/nl/text-to-speech):** Snel online hulpmiddel om artikelen, samenvattingen, e-learningteksten en video-scripts direct om te zetten in natuurlijk klinkende spraak.
- **[Lokale AI Spraak Web-App](https://voice.privro.com):** De opensource PWA-app uit deze repository met gescheiden interfaces voor Piper TTS en Kokoro TTS.

### Lokale Privacy-Architectuur op uw Apparaat (On-Device Privacy)
Alle spraakgeneratie en audioconversie vindt plaats aan de clientzijde via Web Workers in uw browser:
- **Er wordt geen tekst verzonden naar externe servers of derden.**
- **Er wordt geen audio opgenomen, opgeslagen of geanalyseerd in de cloud.**
- **Geen registratie, geen gebruikersaccount en geen API-sleutels vereist.**
- **Volledig offline bruikbaar** zodra het model in de browsercache is opgeslagen.
- **Volledig conform de AVG (Algemene Verordening Gegevensbescherming / GDPR)** en geschikt voor beroepsgroepen met een **medisch of ambtelijk beroepsgeheim** (artsen, advocaten, notarissen en onderzoekers).

---

## Machineleesbare Specificaties (`llms.txt` & `llms-full.txt`)

Privro publiceert gestructureerde, machineleesbare documentatie volgens de `llms.txt`-standaard:

- **Beknopt overzicht:** [https://privro.com/llms.txt](https://privro.com/llms.txt)
- **Volledige specificatie:** [https://privro.com/llms-full.txt](https://privro.com/llms-full.txt)

Deze bestanden bieden LLM's, AI-zoekagenten en webcrawlers geverifieerde informatie over de privacy-architectuur van Privro, de beschikbare Whisper-modellen, de FFmpeg-configuraties, de ondersteunde Piper-stemmen en de meertalige URL-structuren.

---

## Beschikbare Talen op Privro (Languages Available on Privro)

Privro is volledig gelokaliseerd in **22 talen**. De Engelse versie bevindt zich op het hoofddomein, terwijl alle overige talen bereikbaar zijn via hun eigen gelokaliseerde pad:

| Taal (Language) | Lokale Naam | Code | Startpagina URL |
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

> **Opmerking:** Alle kernfunctionaliteiten van Privro – waaronder [Transcriptie](https://privro.com/nl/transcribe), [Caption Studio](https://privro.com/nl/caption-studio) en [Piper Voice](https://privro.com/nl/piper-voice) – zijn direct beschikbaar in elk van deze 22 talen.

---

## Ondersteunde Talen in Piper TTS (Languages Supported by Piper TTS)

Piper TTS bevat **meer dan 300 opensource neurale stemmodellen** over **58 taal- en regiocodes** binnen 42 taalfamilies. Alle modellen kunnen rechtstreeks in de browser worden geladen:

| Taal (Language) | Lokale Naam | Code | Regio / Land | Beschikbare Modellen |
| ------------------- | ------------------------- | --------- | -------------------------------- | -------------------- |
| Arabic (Arabisch) | العربية | `ar_JO` | Jordanië | 2 modellen |
| Bulgarian (Bulgaars)| български | `bg_BG` | Bulgarije | 1 model |
| Bengali (Bengaals) | বাংলা | `bn_BD` | Bangladesh | 1 model |
| Catalan (Catalaans) | Català | `ca_ES` | Spanje | 3 modellen |
| Czech (Tsjechisch) | Čeština | `cs_CZ` | Tsjechië | 3 modellen |
| Welsh (Welsh) | Cymraeg | `cy_GB` | Verenigd Koninkrijk | 2 modellen |
| Danish (Deens) | Dansk | `da_DK` | Denemarken | 1 model |
| German (Duits) | Deutsch | `de_DE` | Duitsland | 10 modellen |
| Greek (Grieks) | Ελληνικά | `el_GR` | Griekenland | 3 modellen |
| English (VK) | English (UK) | `en_GB` | Verenigd Koninkrijk | 11 modellen |
| English (VS) | English (US) | `en_US` | Verenigde Staten | 27 modellen |
| Spanish (Argentinië)| Español (Argentina) | `es_AR` | Argentinië | 1 model |
| Spanish (Spanje) | Español (España) | `es_ES` | Spanje | 5 modellen |
| Spanish (Mexico) | Español (México) | `es_MX` | Mexico | 3 modellen |
| Estonian (Estisch) | eesti | `et_EE` | Estland | 1 model |
| Basque (Baskisch) | Euskara | `eu_ES` | Spanje | 2 modellen |
| Persian (Farsi) | فارسی | `fa_IR` | Iran | 5 modellen |
| Finnish (Fins) | Suomi | `fi_FI` | Finland | 2 modellen |
| French (Frans) | Français | `fr_FR` | Frankrijk | 7 modellen |
| Hebrew (Hebreeuws) | עִבְרִית | `he_IL` | Israël | 1 model |
| Hindi (Hindi) | हिन्दी | `hi_IN` | India | 3 modellen |
| Croatian (Kroatisch)| Hrvatski | `hr_HR` | Kroatië | 1 model |
| Hungarian (Hongaars)| Magyar | `hu_HU` | Hongarije | 2 modellen |
| Icelandic (IJslands)| Íslenska | `is_IS` | IJsland | 3 modellen |
| Italian (Italiaans) | Italiano | `it_IT` | Italië | 4 modellen |
| Japanese (Japans) | 日本語 | `ja_JP` | Japan | 1 model (2 sprekers) |
| Georgian (Georgisch)| ქართული ენა | `ka_GE` | Georgië | 1 model |
| Kazakh (Kazachs) | қазақша | `kk_KZ` | Kazachstan | 3 modellen |
| Korean (Koreaans) | 한국어 | `ko_KR` | Zuid-Korea | 1 model |
| Kurdish (Koerdisch) | Kurmancî | `ku_TR` | Turkije | 1 model |
| Luxembourgish (Luxemburgs)| Lëtzebuergesch | `lb_LU` | Luxemburg | 1 model |
| Lithuanian (Litouws)| Lietuvių | `lt_LT` | Litouwen | 1 model |
| Latvian (Lets) | Latviešu | `lv_LV` | Letland | 1 model |
| Malayalam (Malayalam)| മലയാളം | `ml_IN` | India | 2 modellen |
| Marathi (Marathi) | मराठी | `mr_IN` | India | 1 model |
| Nepali (Nepalees) | नेपाली | `ne_NP` | Nepal | 3 modellen |
| Dutch (België/Vlaanderen) | Nederlands (België) | `nl_BE` | België | 4 modellen (Nathalie, RDH) |
| Dutch (Nederland) | Nederlands (Nederland)| `nl_NL` | Nederland | 6 modellen (Pim, Alex, Ronnie, MLS 52 sprekers) |
| Norwegian (Noors) | Norsk | `no_NO` | Noorwegen | 2 modellen |
| Polish (Pools) | Polski | `pl_PL` | Polen | 5 modellen |
| Portuguese (Brazilië)| Português (Brasil) | `pt_BR` | Brazilië | 4 modellen |
| Portuguese (Portugal)| Português (Portugal)| `pt_PT` | Portugal | 1 model |
| Romanian (Roemeens)| Română | `ro_RO` | Roemenië | 1 model |
| Russian (Russisch) | Русский | `ru_RU` | Rusland | 4 modellen |
| Slovak (Slowaaks) | Slovenčina | `sk_SK` | Slowakije | 1 model |
| Slovenian (Sloveens)| Slovenščina | `sl_SI` | Slovenië | 1 model |
| Albanian (Albanees)| shqip | `sq_AL` | Albanië | 1 model |
| Serbian (Servisch) | srpski | `sr_RS` | Servië | 1 model |
| Swedish (Zweeds) | Svenska | `sv_SE` | Zweden | 3 modellen |
| Swahili (Swahili) | Kiswahili | `sw_CD` | DR Congo | 1 model |
| Telugu (Telugu) | తెలుగు | `te_IN` | India | 3 modellen |
| Thai (Thais) | ไทย | `th_TH` | Thailand | 1 model |
| Turkish (Turks) | Türkçe | `tr_TR` | Turkije | 1 model |
| Ukrainian (Oekraïens)| украї́нська мо́ва | `uk_UA` | Oekraïne | 5 modellen |
| Urdu (Urdu) | اردو | `ur_PK` | Pakistan | 2 modellen |
| Vietnamese (Vietnamees)| Tiếng Việt | `vi_VN` | Vietnam | 3 modellen |
| Chinese (Vereenvoudigd)| 简体中文 | `zh_CN` | China | 4 modellen |

---

## Technische Architectuur & Verwerkingspijplijn (Technical Architecture)

### 1. Piper TTS Pijplijn
```
[Invoertekst]
    │
    ▼
[Web Worker: eSpeak NG Fonemisator]     ──► Converteert tekst naar gestandaardiseerde foneemreeksen
    │
    ▼
[Web Worker: ONNX Runtime Web]         ──► Voert neuraal stemmodel (.onnx) uit via WebGPU of WASM
    │
    ▼
[PCM Audiobuffer]                      ──► Construeert een 22,05 kHz 16-bit lineaire PCM audiostream
    │
    ▼
[Web Audio API / WAV Blob]             ──► Directe preview in browser en download van WAV zonder kwaliteitsverlies
```

- **Snelle Edge-CDN Levering:** Statische WASM-binaries van ONNX Runtime en foneemtabellen worden wereldwijd gedistribueerd via Cloudflare R2 (`VITE_PIPER_CDN_URL`), waardoor initiële downloadtijden minimaal zijn.
- **Lokale Browsercache:** Gedownloade stemmodellen (`.onnx`) worden opgeslagen in de browser via `CacheStorage` (`piper-voices-cache-v1`). Bij volgende bezoeken start de spraaksynthese in milliseconden zonder netwerkverkeer.

### 2. Kokoro TTS Pijplijn
- Een zelfstandige Web Worker initialiseert het lichte `onnx-community/Kokoro-82M-v1.0-ONNX`-model via Transformers.js.
- De audiostream wordt in realtime in chunks gegenereerd, waardoor de spraak direct begint te spelen bij de eerste alinea.
- Bevat bedieningselementen voor pauzeren, hervatten en snelheidsaanpassing (0,5x tot 2,0x).

---

## Technologie-Stack (Tech Stack)

- **Frontend Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **UI & Vormgeving:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) componenten
- **Spraaksynthese-Engines (TTS):**
  - [Piper](https://github.com/rhasspy/piper) (via ONNX Runtime Web `ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) (WebAssembly fonemisatie)
  - [Kokoro](https://github.com/hexgrad/kokoro) (via [`kokoro-js`](https://www.npmjs.com/package/kokoro-js))
- **Hardware-Versnelling:** WebGPU met automatische terugval naar multithreaded WASM SIMD
- **Pictogrammen & Notificaties:** Lucide Icons en Sonner toast-meldingen

---

## Installatie & Lokale Ontwikkeling (Getting Started)

### Vereisten
- Node.js 18 of nieuwer
- Een moderne webbrowser met WebAssembly-ondersteuning. Voor de snelste WebGPU-versnelling wordt Google Chrome of Microsoft Edge aanbevolen.

### Installatie

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Omgevingsvariabelen

Kopieer `.env.example` naar `.env`:

```bash
cp .env.example .env
```

Configureer `VITE_PIPER_CDN_URL` met uw Cloudflare R2 bucket of CDN-URL:

```env
VITE_PIPER_CDN_URL="https://your-bucket.r2.dev"
```

### Ontwikkelserver Starten

```bash
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) in uw browser.

### Productie-Build Maken

```bash
npm run build    # Genereert de geoptimaliseerde productiebundel in /dist
npm run preview  # Lokale preview van de productiebundel
```

---

## Veelgestelde Vragen (FAQ)

### Gratis AI Spraaksynthese & Tekst naar Spraak (Text-to-Speech)

#### Waarom is deze AI-spraakgenerator 100% gratis en zonder tekenlimiet?
De spraakmodellen en Whisper-transcriptietools van Privro draaien direct op de hardware van uw eigen computer via WebGPU of WebAssembly in uw browser. Omdat er geen dure cloudservers nodig zijn voor berekeningen, zijn er geen exploitatiekosten per generatie. U profiteert daardoor van onbeperkte tekstconversie zonder abonnementskosten, zonder tokens en zonder tijdslimieten.

#### Worden mijn teksten of audiobestanden geüpload naar servers? (AVG, AP & Beroepsgeheim)
Nee, absoluut niet. Alle ingevoerde teksten, geüploade audiobestanden en gegenereerde spraakbestanden blijven uitsluitend in het tijdelijke werkgeheugen van uw browser. Er wordt geen enkel bestand naar externe servers verstuurd. Dit garandeert volledige naleving van de **AVG (Algemene Verordening Gegevensbescherming)** onder toezicht van de *Autoriteit Persoonsgegevens* (AP), en waarborgt het strikte **medisch en ambtelijk beroepsgeheim** voor artsen, advocaten, notarissen en academische onderzoekers.

#### Mag ik de gegenereerde stemmen commercieel gebruiken en monetizen op YouTube?
Ja. Alle gegenereerde audiobestanden zijn 100% vrij voor zowel persoonlijk als commercieel gebruik. U mag de stemmen zonder extra kosten of licentiekosten inzetten voor advertenties, YouTube-video's met advertentie-inkomsten, TikTok-video's, podcasts, luisterboeken, bedrijfsvideo's en e-learning modules.

#### Kan ik dit gebruiken voor een faceless YouTube-kanaal ("kanaal zonder gezicht") in het Nederlands?
Absoluut. Piper TTS biedt heldere, natuurlijk klinkende Nederlandse en Vlaamse stemmen zonder robotachtige haperingen. Omdat de audio wordt gegenereerd zonder watermerken of audio-handtekeningen, voldoet de content moeiteloos aan de kwaliteitseisen van het YouTube Partnerprogramma voor monetisatie.

#### Welke Nederlandse en Vlaamse stemmen en sprekers zijn beschikbaar?
Binnen Piper TTS zijn er in totaal 10 modellen voor het Nederlandse taalgebied beschikbaar:
- **Nederland (`nl_NL` - 6 modellen):**
  - `nl_NL-mls-medium`: Een geavanceerd neuraal model met **52 unieke mannelijke en vrouwelijke sprekers** (selecteerbaar via de Spreker-ID).
  - `nl_NL-pim-medium`: Een warme, gezaghebbende mannelijke stem. Ideaal voor documentaires, tutorials en zakelijke presentaties.
  - `nl_NL-alex-medium`: Een heldere, moderne Noord-Nederlandse mannelijke stem.
  - `nl_NL-ronnie-medium`: Een natuurlijke, informele spreekstem.
  - `nl_NL-mls_5809-low` en `nl_NL-mls_7432-low`: Compacte, snelle modellen voor apparaten met beperkte rekenkracht.
- **België / Vlaanderen (`nl_BE` - 4 modellen):**
  - `nl_BE-nathalie-medium` & `x_low`: Een kristalheldere, professionele Vlaamse vrouwelijke stem.
  - `nl_BE-rdh-medium` & `x_low`: Een welbespraakte Vlaamse mannelijke omroepstem.
Daarnaast kunt u voor Engelstalige voice-overs gebruikmaken van **Kokoro TTS** voor ultrarealistische intonatie.

#### Kan ik de gegenereerde audiobestanden direct in video-editors zoals Premiere Pro en CapCut gebruiken?
Ja. Zodra de spraak is gegenereerd, downloadt u direct een ongecomprimeerd **16-bit PCM WAV-bestand (22,05 kHz)**. Dit audioformaat is compatibel met alle populaire videomontagesoftware, waaronder Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, CapCut en Audacity.

#### Werkt de spraakgenerator en transcriptie ook offline zonder internet?
Ja. Zodra een stemmodel of Whisper-model de eerste keer is geladen, wordt het veilig opgeslagen in de `CacheStorage` van uw browser. Vanaf dat moment functioneert de tool 100% offline, zelfs wanneer u in de trein zit, in een vliegtuig reist of werkt op een beveiligde, afgeschermde computer zonder internettoegang.

#### Waarom gebruikt Privro WebGPU-technologie?
WebGPU is de moderne webstandaard waarmee webbrowsers rechtstreeks toegang krijgen tot de rekenkernen van de grafische kaart (GPU) van uw computer. Hierdoor verloopt de spraaksynthese en transcriptie tot wel 5 keer sneller dan bij traditionele CPU-verwerking. Als uw browser of hardware geen WebGPU ondersteunt, schakelt Privro automatisch over naar multithreaded WebAssembly (WASM SIMD), zodat de tools op elk apparaat vloeiend werken.

---

### Audio Transcriptie, Scriptie-Interviews & Vergadernotulen (Whisper)

#### Hoe kan ik gratis interviews transcriberen voor mijn scriptie of masterproef?
Voor bachelor- en masterstudenten aan universiteiten en hogescholen (in Nederland en Vlaanderen) biedt Privro de ideale oplossing: sleep uw audiobestand (MP3, WAV, M4A spraakmemo, OGG, FLAC) eenvoudig in de [Gratis Lokale Transcriptie Tool](https://privro.com/nl/transcribe). OpenAI Whisper zet het interview direct om in tekst op uw eigen laptop. U hoeft geen per-minuut tarieven te betalen en vertrouwelijke interviewgegevens verlaten uw computer nooit.

#### Kan ik tekst en ondertitels extraheren uit MP4-videobestanden?
Ja. Gebruik de [MP4 naar Tekst Converter](https://privro.com/nl/mp4-to-text) of sleep uw MP4-, WebM- of MOV-video direct in de transcriptietool. De audio wordt lokaal uit het videobestand gehaald en getranscribeerd naar tekst met exacte tijdscodes of kant-en-klare SRT/VTT-ondertitelbestanden.

#### Zijn er restricties aan de bestandsgrootte of opnameduur?
Nee. In tegenstelling tot commerciële transcriptiediensten die na 15 minuten een betaalmuur tonen, kent Privro's lokale Whisper-tool **geen limiet op bestandsgrootte of opnameduur**. U kunt zowel een korte spraaknotitie van 30 seconden als een complete vergadering van 4 uur gratis transcriberen.

#### Welke bestandsformaten worden ondersteund bij de export van transcripties?
U kunt getranscribeerde teksten downloaden in 8 handige formaten:
- Platte tekst: `TXT`
- Ondertitels: `SRT`, `VTT`
- Gestructureerde data: `CSV`, `JSON`, `XLSX` (Excel)
- Opgemaakte documenten: Microsoft Word `DOCX`, `PDF`

---

### Caption Studio: Automatische Video Ondertiteling

#### Kan ik video's ondertitelen zonder watermerk of logo?
Ja. In [Caption Studio](https://privro.com/nl/caption-studio) kunt u uw video uploaden, automatisch laten ondertitelen via Whisper, lettertypen en animaties instellen (inclusief dynamische karaoke-ondertitels) en de voltooide video exporteren. De video wordt direct in de browser gerenderd via FFmpeg, **volledig gratis en zonder enig watermerk**, tot maximaal 4K-resolutie.

#### Welke beeldverhoudingen worden ondersteund voor sociale media?
Caption Studio bevat presets voor alle populaire videoplatforms:
- **9:16:** TikTok, Instagram Reels, YouTube Shorts (verticale video)
- **16:9:** Horizontale YouTube-video's, desktop en televisie
- **1:1:** Vierkante posts voor Instagram en LinkedIn
- **4:5:** Verticale feedposts voor Instagram
- **3:2:** Klassieke foto- en presentatielay-outs

---

### Platform, Beschikbaarheid & LLM-Integratie

#### In hoeveel talen is het Privro-platform beschikbaar?
Privro is beschikbaar in **22 wereldtalen**: Nederlands, Engels, Spaans, Portugees, Italiaans, Duits, Frans, Hindi, Indonesisch, Pools, Japans, Zweeds, Deens, Noors, Fins, Tsjechisch, Turks, Russisch, Koreaans, Traditioneel Chinees, Arabisch en Hebreeuws. Elke taaleditie is direct toegankelijk via `https://privro.com/{taalcode}`.

#### Wat is het doel van `https://privro.com/llms.txt`?
[privro.com/llms.txt](https://privro.com/llms.txt) en [privro.com/llms-full.txt](https://privro.com/llms-full.txt) zijn gestandaardiseerde, machineleesbare documenten die speciaal zijn ontworpen voor AI-zoeksystemen en LLM's. Ze bevatten beknopte, actuele technische specificaties van Privro's lokale privacy-architectuur, modelvarianten en API-structuren.

---

## Vermeldingen & Dankbetuigingen (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) en [Piper Voices](https://huggingface.co/rhasspy/piper-voices) door Michael Hansen en de Rhasspy-community.
- [Kokoro TTS](https://github.com/hexgrad/kokoro) door Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) en [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) door Microsoft.
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) voor fonemisatie via WebAssembly.

---

## Licentie (License)

Dit project is uitgebracht onder de [Apache License 2.0](LICENSE). Zie het bestand `LICENSE` voor de volledige voorwaarden.
