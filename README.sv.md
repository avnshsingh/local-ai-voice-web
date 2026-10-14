<div align="center">

[![Language: Swedish](https://img.shields.io/badge/Language-Svenska%20(Swedish)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

</div>

# Privro AI Voice - Gratis Lokala AI-Röster & Text till Tal (Text-to-Speech) i Webbläsaren

En integritetssäker, webbläsarbaserad AI-röstgenerator och talsyntes av nästa generation utan molnuppladdning (*zero-upload*), driven av [Privro AI](https://privro.com/sv). Klistra in din text, välj en röst och generera omedelbart verklighetstroget mänskligt tal lokalt på din egen enhet med hjälp av Web Workers och WebGPU. Ingen text eller ljudfil lämnar någonsin din webbläsare.

- **Kör webbappen direkt:** [voice.privro.com](https://voice.privro.com)
- **Privro Voice Studio:** [privro.com/sv/piper-voice](https://privro.com/sv/piper-voice)
- **Maskinläsbara specifikationer (LLM):** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## Två Neurala Talsyntesmotorer i Webbläsaren (Dual Neural TTS Engines)

Projektet förenar två oberoende neurala talsyntessystem (Text-to-Speech) som körs helt på klientsidan direkt i webbläsaren:

1. **Piper TTS (Primär Motor):**
   - Blixtsnabb lokal talsyntes med ONNX Runtime Web och eSpeak NG för fonetisering.
   - Stöd för **över 40 språk, 58 regionala varianter och mer än 300 röstmodeller**.
   - Omfattande svenskt stöd med **3 officiella modeller** för Sverige (`sv_SE`):
     - `sv_SE-nst-medium`: Tränad på officiellt talmaterial från *Nordisk språkteknologi (NST)*. Neutral, tydlig och auktoritativ rikssvenska.
     - `sv_SE-lisa-medium`: Modern, varm och artikulerad kvinnlig röst med naturlig satsmelodi.
     - `sv_SE-alma-medium`: Uttrycksfull och pigg kvinnlig röst, optimerad av Daniel Nylander / Yeager Stockholm.
   - Hårdvaruacceleration via **WebGPU** med automatisk återgång (*fallback*) till flertrådad **WebAssembly (WASM SIMD)** på enheter som saknar WebGPU-stöd.
   - Multi-speaker-stöd med konfigurerbara talar-ID:n.
   - Modellstorlekar från extremt lätta (`x_low`, `low`) till kristallklar studiokvalitet (`medium`, `high`).
   - Lokal webbläsarlagring via `CacheStorage`: modeller (~20 MB till ~75 MB) laddas ner en enda gång och fungerar därefter 100% offline utan dataförbrukning.
   - Direkt export till förlustfri, okomprimerad **16-bit PCM WAV (22,05 kHz)**.

2. **Kokoro TTS (Sekundär Motor):**
   - Drivs av [Kokoro](https://github.com/hexgrad/kokoro) (`Kokoro-82M`, 82 miljoner parametrar) via [`kokoro-js`](https://www.npmjs.com/package/kokoro-js).
   - Exceptionellt levande och engagerande engelskspråkiga berättarröster (amerikansk och brittisk engelska).
   - Realtidsströmning i textblock (*chunk-streaming*): uppspelningen startar direkt vid första stycket utan att du behöver vänta på att hela texten ska genereras färdigt.
   - Fullständig ljudkontroll: spela upp, pausa, återuppta och steglös hastighetsjustering (0,5x till 2,0x).

---

## Privro Verktyg & Tjänster (Privro Tools)

Privro erbjuder en komplett uppsättning produktivitets- och innehållsskaparverktyg som fungerar 100% lokalt i webbläsaren enligt principen *local-first*. Alla lokala verktyg är helt kostnadsfria utan registrering, utan konto, utan kreditkort, utan API-nycklar och utan tids- eller filbegränsningar:

| Verktyg & Sida | Huvudfunktioner & Lokala Fördelar |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Gratis Lokal Ljudtranskribering (Whisper AI)](https://privro.com/sv/transcribe) | Konvertera ljudfiler till text via OpenAI Whisper (Tiny till Large Turbo) direkt på din dator. Inga uppladdningar, inga tidsgränser. Perfekt för uppsatsintervjuer och konfidentiella möten. |
| [MP4 till Text Konverterare (Videotranskribering)](https://privro.com/sv/mp4-to-text) | Gratis online videotranskribering. Extrahera ljud lokalt från MP4, MOV och WebM och omvandla till text (TXT, DOCX, PDF) eller undertextfiler (SRT, VTT). |
| [Caption Studio - Automatisk Video-undertextning](https://privro.com/sv/caption-studio) | Skapa animerade undertexter i TikTok- och Reels-stil. Bränn in text i videon upp till 4K-upplösning via webbläsar-internt FFmpeg – 100% gratis och **helt utan vattenstämpel**. |
| [Piper Voice Studio (AI-Röststudio)](https://privro.com/sv/piper-voice) | Utforska och provlyssna på över 300 röster direkt i webbläsaren. Med talarväljare, WebGPU-acceleration, tonhöjds- och tempokontroll och export till förlustfri WAV. |
| [Gratis Text till Tal Generator](https://privro.com/sv/text-to-speech) | Snabb, säker och obegränsad online talsyntes. Omvandla artiklar, skript och dokument till naturligt tal utan externa molnservrar. |
| [Lokal AI Röst Webbapp](https://voice.privro.com) | Den öppna och fristående PWA-appen byggd från detta arkiv med dedikerade flikar för både Piper TTS och Kokoro TTS. |
| [Alternativ till Otter.ai (Gratis & Utan Tidsgräns)](https://privro.com/sv/alternatives/otter) | Varför betala dyra månadsabonnemang i dollar och riskera molnläckor? Upptäck Privros gratis, obegränsade och helt lokala transkribering. |
| [Alternativ till Happy Scribe (Zero-Upload)](https://privro.com/sv/alternatives/happyscribe) | Jämför Happy Scribes minutbegränsningar och molnuppladdningar med Privros kostnadsfria, lokala Whisper-transkribering och vattenmärkefria Caption Studio. |
| [Priser och Planer för Privro AI](https://privro.com/sv/pricing) | Utforska våra 100% gratis lokala webbläsarverktyg, kompletterande molntranskribering för massbearbetning och förbetalda krediter utan utgångsdatum. |

---

## Talsyntes & Text till Tal på Privro (Text to Speech on Privro)

Privro erbjuder en kompromisslös nolluppladdningsarkitektur för talsyntes direkt i webbläsaren – skapad för maximal hastighet, integritet och användarvänlighet:

- **[Piper Voice Studio](https://privro.com/sv/piper-voice):** Den kompletta interaktiva röststudion. Bläddra bland 300+ röster på 40+ språk, välj specifika talare i flertalarmodeller, växla sömlöst mellan WebGPU och WASM, spara favoritmodeller lokalt och exportera ljud i högsta studiokvalitet.
- **[Text till Tal Generator](https://privro.com/sv/text-to-speech):** Snabbt webbverktyg för att ge röst åt blogginlägg, manus, presentationer och e-learningmaterial.
- **[Lokal AI Röst Webbapp](https://voice.privro.com):** PWA-appen från detta arkiv med separata gränssnitt för Piper TTS och Kokoro TTS.

### Lokal Integritetsarkitektur på din Enhet (On-Device Privacy)
All röstgenerering och ljudbearbetning utförs lokalt på klientsidan via Web Workers i din webbläsare:
- **Ingen text skickas någonsin till externa servrar eller tredje part.**
- **Inget genererat ljud spelas in, loggas eller lagras i molnet.**
- **Ingen registrering, inget konto och inga API-nycklar krävs.**
- **Fungerar 100% offline** så snart modellen har sparats i webbläsarens cache.
- **Fullständig efterlevnad av Dataskyddsförordningen (GDPR)** under **Integritetsskyddsmyndigheten (IMY)**. Skyddar lagstadgad **advokatsekretess och tystnadsplikt enligt 8 kap. 4 § Rättegångsbalken (RB)** samt vårdens tystnadsplikt enligt **Patientsäkerhetslagen (PSL)** och **Patientdatalagen (PDL)**.

---

## Maskinläsbara Plattformsspecifikationer (`llms.txt` & `llms-full.txt`)

Privro tillhandahåller strukturerad, maskinläsbar dokumentation enligt standarden `llms.txt`:

- **Översiktlig sammanfattning:** [https://privro.com/llms.txt](https://privro.com/llms.txt)
- **Fullständig specifikation:** [https://privro.com/llms-full.txt](https://privro.com/llms-full.txt)

Dessa filer ger LLM:er, AI-sökagenter och sökspindlar verifierad information om Privros lokala säkerhetsarkitektur, Whisper-modeller, FFmpeg-konfigurationer, Piper-röstbibliotek och flerspråkiga sökvägar.

---

## Tillgängliga Språk på Privro (Languages Available on Privro)

Privro är fullständigt lokaliserat på **22 språk**. Den engelska versionen finns på huvuddomänen, medan varje språkversion nås via en egen språkrot:

| Språk (Language) | Lokalt Namn | Kod | Startsida URL |
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

> **Obs:** Kärnverktygen i Privro-sviten – inklusive [Ljudtranskribering](https://privro.com/sv/transcribe), [Caption Studio](https://privro.com/sv/caption-studio) och [Piper Voice](https://privro.com/sv/piper-voice) – är nativt tillgängliga på alla dessa 22 språk.

---

## Språk som Stöds i Piper TTS (Languages Supported by Piper TTS)

Piper TTS omfattar **över 300 öppna neurala röstmodeller** fördelade över **58 språk- och regionkoder** i 42 språkfamiljer. Samtliga modeller kan köras direkt i webbläsaren:

| Språk (Language) | Lokalt Namn | Kod | Land / Region | Tillgängliga Modeller |
| ------------------- | ------------------------- | --------- | -------------------------------- | --------------------- |
| Arabic (Arabiska) | العربية | `ar_JO` | Jordanien | 2 modeller |
| Bulgarian (Bulgariska)| български | `bg_BG` | Bulgarien | 1 modell |
| Bengali (Bengali) | বাংলা | `bn_BD` | Bangladesh | 1 modell |
| Catalan (Katalanska)| Català | `ca_ES` | Spanien | 3 modeller |
| Czech (Tjeckiska) | Čeština | `cs_CZ` | Tjeckien | 3 modeller |
| Welsh (Kymriska/Walesiska)| Cymraeg | `cy_GB` | Storbritannien | 2 modeller |
| Danish (Danska) | Dansk | `da_DK` | Danmark | 1 modell |
| German (Tyska) | Deutsch | `de_DE` | Tyskland | 10 modeller |
| Greek (Grekiska) | Ελληνικά | `el_GR` | Grekland | 3 modeller |
| English (UK) | English (UK) | `en_GB` | Storbritannien | 11 modeller |
| English (US) | English (US) | `en_US` | USA | 27 modeller |
| Spanish (Argentina) | Español (Argentina) | `es_AR` | Argentina | 1 modell |
| Spanish (Spanien) | Español (España) | `es_ES` | Spanien | 5 modeller |
| Spanish (Mexiko) | Español (México) | `es_MX` | Mexiko | 3 modeller |
| Estonian (Estniska) | eesti | `et_EE` | Estland | 1 modell |
| Basque (Baskiska) | Euskara | `eu_ES` | Spanien | 2 modeller |
| Persian (Farsi) | فارسی | `fa_IR` | Iran | 5 modeller |
| Finnish (Finska) | Suomi | `fi_FI` | Finland | 2 modeller |
| French (Franska) | Français | `fr_FR` | Frankrike | 7 modeller |
| Hebrew (Hebreiska) | עִבְרִית | `he_IL` | Israel | 1 modell |
| Hindi (Hindi) | हिन्दी | `hi_IN` | Indien | 3 modeller |
| Croatian (Kroatiska)| Hrvatski | `hr_HR` | Kroatien | 1 modell |
| Hungarian (Ungerska)| Magyar | `hu_HU` | Ungern | 2 modeller |
| Icelandic (Isländska)| Íslenska | `is_IS` | Island | 3 modeller |
| Italian (Italienska)| Italiano | `it_IT` | Italien | 4 modeller |
| Japanese (Japanska) | 日本語 | `ja_JP` | Japan | 1 modell (2 talare) |
| Georgian (Georgiska)| ქართული ენა | `ka_GE` | Georgien | 1 modell |
| Kazakh (Kazakiska) | қазақша | `kk_KZ` | Kazakstan | 3 modeller |
| Korean (Koreanska) | 한국어 | `ko_KR` | Sydkorea | 1 modell |
| Kurdish (Kurdiska) | Kurmancî | `ku_TR` | Turkiet | 1 modell |
| Luxembourgish (Luxemburgiska)| Lëtzebuergesch | `lb_LU` | Luxemburg | 1 modell |
| Lithuanian (Litauiska)| Lietuvių | `lt_LT` | Litauen | 1 modell |
| Latvian (Lettiska) | Latviešu | `lv_LV` | Lettland | 1 modell |
| Malayalam (Malayalam)| മലയാളം | `ml_IN` | Indien | 2 modeller |
| Marathi (Marathi) | मराठी | `mr_IN` | Indien | 1 modell |
| Nepali (Nepalesiska)| नेपाली | `ne_NP` | Nepal | 3 modeller |
| Dutch (Belgien/Flandern)| Nederlands (België) | `nl_BE` | Belgien | 4 modeller (Nathalie, RDH) |
| Dutch (Nederländerna)| Nederlands (Nederland)| `nl_NL` | Nederländerna | 6 modeller (Pim, Alex, Ronnie, MLS 52 talare) |
| Norwegian (Norska) | Norsk | `no_NO` | Norge | 2 modeller |
| Polish (Polska) | Polski | `pl_PL` | Polen | 5 modeller |
| Portuguese (Brasilien)| Português (Brasil) | `pt_BR` | Brasilien | 4 modeller |
| Portuguese (Portugal)| Português (Portugal)| `pt_PT` | Portugal | 1 modell |
| Romanian (Rumänska) | Română | `ro_RO` | Rumänien | 1 modell |
| Russian (Ryska) | Русский | `ru_RU` | Ryssland | 4 modeller |
| Slovak (Slovakiska) | Slovenčina | `sk_SK` | Slovakien | 1 modell |
| Slovenian (Slovenska)| Slovenščina | `sl_SI` | Slovenien | 1 modell |
| Albanian (Albanska) | shqip | `sq_AL` | Albanien | 1 modell |
| Serbian (Serbiska) | srpski | `sr_RS` | Serbien | 1 modell |
| Swedish (Svenska) | Svenska | `sv_SE` | Sverige | 3 modeller (NST, Lisa, Alma) |
| Swahili (Swahili) | Kiswahili | `sw_CD` | DR Kongo | 1 modell |
| Telugu (Telugu) | తెలుగు | `te_IN` | Indien | 3 modeller |
| Thai (Thailändska) | ไทย | `th_TH` | Thailand | 1 modell |
| Turkish (Turkiska) | Türkçe | `tr_TR` | Turkiet | 1 modell |
| Ukrainian (Ukrainska)| украї́нська мо́ва | `uk_UA` | Ukraina | 5 modeller |
| Urdu (Urdu) | اردو | `ur_PK` | Pakistan | 2 modeller |
| Vietnamese (Vietnamesiska)| Tiếng Việt | `vi_VN` | Vietnam | 3 modeller |
| Chinese (Förenklad) | 简体中文 | `zh_CN` | Kina | 4 modeller |

---

## Teknisk Arkitektur & Pipeline (Technical Architecture)

### 1. Piper TTS Pipeline
```
[Inmatad text]
    │
    ▼
[Web Worker: eSpeak NG Fonetisering]   ──► Konverterar textsträngar till standardiserade fonem-ID:n
    │
    ▼
[Web Worker: ONNX Runtime Web]         ──► Kör den neurala modellen (.onnx) via WebGPU eller WASM
    │
    ▼
[PCM Ljudbuffert]                      ──► Skapar en 22,05 kHz 16-bit linjär PCM-ljudström
    │
    ▼
[Web Audio API / WAV Blob]             ──► Omedelbar uppspelning och nedladdning av WAV utan kvalitetsförlust
```

- **Snabb Edge-CDN-leverans:** Statiska WASM-binärer från ONNX Runtime och fonemtabeller distribueras globalt via Cloudflare R2 (`VITE_PIPER_CDN_URL`), vilket minimerar initiala laddningstider.
- **Lokal webbläsarcache:** Nedladdade röstmodeller (`.onnx`) lagras i webbläsarens `CacheStorage` (`piper-voices-cache-v1`). Vid återkommande besök startar talsyntesen på millisekunder helt utan nätverkstrafik.

### 2. Kokoro TTS Pipeline
- En fristående Web Worker initierar den optimerade modellen `onnx-community/Kokoro-82M-v1.0-ONNX` via Transformers.js.
- Ljudströmmen genereras i realtid i block (*chunks*), vilket gör att uppspelningen påbörjas direkt utan fördröjning.
- Innehåller reglage för att pausa, återuppta och justera talhastighet (0,5x till 2,0x).

---

## Teknikstack (Tech Stack)

- **Frontend-ramverk:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **UI & Design:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)-komponenter
- **Talsyntesmotorer (TTS):**
  - [Piper](https://github.com/rhasspy/piper) (via ONNX Runtime Web `ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) (WebAssembly fonetisering)
  - [Kokoro](https://github.com/hexgrad/kokoro) (via [`kokoro-js`](https://www.npmjs.com/package/kokoro-js))
- **Hårdvaruacceleration:** WebGPU med automatisk återgång till flertrådad WASM SIMD
- **Ikoner & Aviseringar:** Lucide Icons och Sonner toast-meddelanden

---

## Installation & Lokal Utveckling (Getting Started)

### Förutsättningar
- Node.js 18 eller senare
- En modern webbläsare med stöd för WebAssembly. För optimal WebGPU-acceleration rekommenderas Google Chrome eller Microsoft Edge.

### Installation

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Miljövariabler

Kopiera `.env.example` till `.env`:

```bash
cp .env.example .env
```

Konfigurera `VITE_PIPER_CDN_URL` med din Cloudflare R2-bucket eller CDN-adress:

```env
VITE_PIPER_CDN_URL="https://your-bucket.r2.dev"
```

### Starta Utvecklingsservern

```bash
npm run dev
```

Öppna [http://localhost:3000/](http://localhost:3000/) i din webbläsare.

### Skapa Produktionsbygge

```bash
npm run build    # Genererar den optimerade produktionskoden i /dist
npm run preview  # Lokal förhandsvisning av produktionsbygget
```

---

## Vanliga Frågor (FAQ)

### Gratis Talsyntes & AI-Röster (Text-to-Speech)

#### Varför är denna AI-röstgenerator 100% gratis och utan teckengräns?
Privros talsyntesmodeller och Whisper-transkribering körs direkt på hårdvaran i din egen dator via WebGPU eller WebAssembly i din webbläsare. Eftersom inga dyra molnservrar används för beräkningarna uppstår det inga driftskostnader per genererad minut. Du kan därför omvandla obegränsat med text utan abonnemangskostnader, tokens eller betalväggar.

#### Laddas mina filer eller texter upp till externa servrar? (GDPR, IMY och tystnadsplikt)
Nej, aldrig. All inmatad text, uppladdade ljudfiler och genererat tal stannar uteslutande i webbläsarens lokala arbetsminne (RAM). Ingen data skickas någonsin till externa servrar eller tredje part. Detta garanterar fullständig efterlevnad av **Dataskyddsförordningen (GDPR)** under **Integritetsskyddsmyndigheten (IMY)**. Det säkerställer också att den lagstadgade **advokatsekretessen och tystnadsplikten enligt 8 kap. 4 § Rättegångsbalken (RB)** samt vårdens sekretess enligt **Patientsäkerhetslagen (PSL)** och **Patientdatalagen (PDL)** upprätthålls utan risk för informationsläckage.

#### Får jag använda de genererade rösterna kommersiellt och tjäna pengar på YouTube?
Ja. Alla genererade ljudfiler är 100% royalty-fria för både personligt och kommersiellt bruk. Du får använda rösterna utan licensavgifter i YouTube-videor med annonsintäkter (monetisering), TikTok, podcast-avsnitt, ljudböcker, informationsfilmer och e-learningkurser.

#### Kan jag använda verktyget för en "faceless YouTube-kanal" på svenska?
Absolut. Piper TTS erbjuder naturliga svenska röster utan mekaniska hackigheter eller robotklang. Eftersom ljudet laddas ner i studiokvalitet utan vattenstämplar eller dolda spår uppfyller innehållet alla kvalitetskrav för YouTube Partner-programmet för annonsintäkter.

#### Vilka svenska röster finns tillgängliga?
Inom Piper TTS finns tre officiella modeller för svenska (`sv_SE`):
- **`sv_SE-nst-medium` (NST Rikssvenska):** Neutral, saklig och tydlig rikssvenska baserad på Nordisk språkteknologis korpus. Utmärkt för nyheter, artiklar och professionella presentationer.
- **`sv_SE-lisa-medium` (Lisa):** En varm, melodisk och uttrycksfull kvinnlig röst med modern intonation. Passar perfekt för videoberättande, instruktionsfilmer och appar.
- **`sv_SE-alma-medium` (Alma):** En pigg och mycket tydlig kvinnlig röst skapad av Daniel Nylander / Yeager Stockholm. Populär för tillgänglighet, skärmläsare och korta videoklipp.
För engelska berättarröster finns dessutom **Kokoro TTS** med extremt naturtrogna accenter och realtidsuppspelning.

#### Kan jag importera de genererade ljudfilerna direkt till Premiere Pro och CapCut?
Ja. När genereringen är klar laddar du ner en okomprimerad **16-bit PCM WAV-fil (22,05 kHz)**. Detta ljudformat stöds av all videoredigeringsprogramvara, inklusive Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, CapCut och Audacity.

#### Fungerar talsyntesen och transkriberingen offline utan internet?
Ja. När en röstmodell eller Whisper-modell har laddats ner första gången sparas den säkert i webbläsarens `CacheStorage`. Därefter fungerar verktyget 100% offline – perfekt när du reser med tåg eller flyg, eller arbetar på en dator i ett skyddat nätverk utan internetåtkomst.

#### Varför används WebGPU-teknik?
WebGPU är en modern webbstandard som ger webbläsare direkt tillgång till de parallella beräkningskärnorna på din dators grafikkort (GPU). Detta gör talsyntes och transkribering upp till 5 gånger snabbare än traditionell CPU-bearbetning. Om din enhet inte har stöd för WebGPU växlar Privro automatiskt över till flertrådad WebAssembly (WASM SIMD).

---

### Ljudtranskribering, Uppsatsintervjuer & Mötesanteckningar (Whisper)

#### Hur transkriberar jag intervjuer gratis till mitt examensarbete eller uppsats?
För studenter vid universitet och högskolor (Stockholms universitet, Uppsala universitet, Lunds universitet, Göteborgs universitet, KTH, Chalmers m.fl.) löser Privro ett stort problem: dra och släpp din intervjuinspelning (MP3, WAV, iPhone-röstmemo i M4A, OGG, FLAC) i [Gratis Lokal Ljudtranskribering](https://privro.com/sv/transcribe). OpenAI Whisper omvandlar talet till text direkt i din webbläsare. Du slipper betala per minut och uppfyller universitetens etiska och GDPR-relaterade riktlinjer eftersom inga känsliga personuppgifter laddas upp till externa molntjänster.

#### Kan jag extrahera text och undertexter från MP4-videofiler?
Ja. Använd vår [MP4 till Text Konverterare](https://privro.com/sv/mp4-to-text) eller släpp din MP4-, WebM- eller MOV-video direkt i transkriberingsverktyget. Ljudet extraheras lokalt ur videon och omvandlas till text med exakta tidskoder eller färdiga SRT/VTT-undertextfiler.

#### Finns det någon gräns för hur långa ljudfiler jag kan transkribera?
Nej. Till skillnad från kommersiella tjänster som låser funktionerna efter 15–30 minuter har Privros lokala Whisper-verktyg **inga tidsgränser eller filstorleksbegränsningar**. Du kan transkribera allt från ett kort röstmemo på 30 sekunder till ett 4-timmars styrelsemöte helt kostnadsfritt.

#### Vilka format stöds vid export av transkriberingen?
Du kan ladda ner texten med ordnivå-tidskoder i 8 vanliga format:
- Ren text: `TXT`
- Undertextfiler: `SRT`, `VTT`
- Kalkylblad & Data: `CSV`, `JSON`, `XLSX` (Excel)
- Formaterade dokument: Microsoft Word `DOCX`, `PDF`

---

### Caption Studio: Automatisk Video-undertextning

#### Kan jag skapa automatiska undertexter utan vattenstämpel eller logotyp?
Ja. I [Caption Studio](https://privro.com/sv/caption-studio) laddar du upp din video, låter Whisper generera textningen automatiskt, anpassar typsnitt och dynamiska textanimationer (t.ex. karaoke-stil) och exporterar videon med inbrända undertexter. Exporten sker via webbläsar-internt FFmpeg, **100% gratis och helt utan vattenstämpel**, upp till 4K-upplösning.

#### Vilka bildförhållanden stöds för sociala medier?
Caption Studio har färdiga förinställningar för alla större plattformar:
- **9:16:** TikTok, Instagram Reels, YouTube Shorts (vertikal video)
- **16:9:** Horisontell video för YouTube, dator och TV
- **1:1:** Kvadratiska inlägg för Instagram och LinkedIn
- **4:5:** Vertikala feed-inlägg för Instagram
- **3:2:** Bildspel och presentationer

---

### Plattform, Tillgänglighet & LLM-Integration

#### På hur många språk finns Privro tillgängligt?
Privro finns tillgängligt på **22 världsspråk**: svenska, engelska, spanska, portugisiska, italienska, tyska, franska, hindi, indonesiska, polska, japanska, nederländska, danska, norska, finska, tjeckiska, turkiska, ryska, koreanska, traditionell kinesiska, arabiska och hebreiska. Varje språkutgåva nås direkt via `https://privro.com/{språkkod}`.

#### Vad är syftet med `https://privro.com/llms.txt`?
[privro.com/llms.txt](https://privro.com/llms.txt) och [privro.com/llms-full.txt](https://privro.com/llms-full.txt) är standardiserade, maskinläsbara specifikationer framtagna för AI-assistenter och LLM:er. De ger tydlig information om Privros lokala integritetsarkitektur, prestanda, modeller och API-strukturer.

---

## Erkännanden & Tack (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) och [Piper Voices](https://huggingface.co/rhasspy/piper-voices) av Michael Hansen och Rhasspy-gemenskapen.
- [Kokoro TTS](https://github.com/hexgrad/kokoro) av Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) och [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) av Microsoft.
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) för fonetisering via WebAssembly.

---

## Licens (License)

Detta projekt är licensierat under [Apache License 2.0](LICENSE). Se filen `LICENSE` för fullständiga villkor.
