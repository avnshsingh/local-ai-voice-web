<div align="center">

[![Language: Czech](https://img.shields.io/badge/Language-%C4%8Ce%C5%A1tina%20(Czech)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

</div>

# Privro AI Voice - Bezplatné Lokální AI Hlasy & Převod Textu na Řeč (Text-to-Speech) v Prohlížeči

Zabezpečený webový generátor hlasu nové generace a syntéza řeči s nulovým odesíláním dat do cloudu (*zero-upload*), kterou vám přináší [Privro AI](https://privro.com/cs). Vložte svůj text, vyberte hlas a okamžitě generujte přirozenou lidskou řeč lokálně na svém zařízení pomocí technologií Web Workers a WebGPU. Žádný text ani zvukové soubory se nikdy neodesílají na externí cloudové servery.

- **Používejte webovou aplikaci přímo:** [voice.privro.com](https://voice.privro.com)
- **Privro Voice Studio:** [privro.com/cs/piper-voice](https://privro.com/cs/piper-voice)
- **Strojově čitelné specifikace (LLM):** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## Dva Neuronové Hlasové Systémy v Prohlížeči (Dual Neural TTS Engines)

Tento projekt integruje dva nezávislé neuronové systémy pro syntézu řeči (Text-to-Speech), které běží zcela na straně klienta přímo ve vašem webovém prohlížeči:

1. **Piper TTS (Hlavní Motor):**
   - Bleskurychlá lokální syntéza řeči pomocí ONNX Runtime Web a fonetizace knihovnou eSpeak NG.
   - Podpora pro **více než 40 jazyků, 58 regionálních variant a přes 300 hlasových modelů**.
   - Oficiální podpora pro češtinu (`cs_CZ`):
     - **Jirka** ve dvou variantách: studiová kvalita `cs_CZ-jirka-medium` (vzorkovací frekvence 22,05 kHz) a odlehčený model `cs_CZ-jirka-low` (~17 MB) pro mobilní zařízení.
     - **Kasandra** (`cs_CZ-kasandra-medium`): přirozený, expresivní a artikulovaný ženský hlas s kvalitou 22,05 kHz.
   - Hardwarová akcelerace přes WebGPU s automatickým přechodem na vícevláknový WebAssembly (WASM SIMD).

2. **Kokoro TTS (Sekundární Motor):**
   - Kompaktní a vysoce výkonný model s 82 miliony parametrů přes Transformers.js (`onnx-community/Kokoro-82M-v1.0-ONNX`).
   - Přirozené a expresivní anglické vyprávění s americkými i britskými hlasovými profily.
   - Streamování zvuku v reálném čase po blocích (*chunk-streaming*) pro okamžité přehrávání bez prodlevy.

---

## Privro AI Webové Nástroje & Ekosystém (Privro Web Suite Tools)

| Nástroj & Odkaz | Popis a Klíčové Vlastnosti |
| :--- | :--- |
| [Bezplatný Místní Přepis Zvuku (Whisper AI)](https://privro.com/cs/transcribe) | 100% lokální přepis audia do textu přímo v prohlížeči pomocí modelu OpenAI Whisper. Žádné nahrávání souborů na externí servery, žádné časové limity, automatické rozpoznávání mluvčích a export do formátů Word (DOCX), PDF, TXT i SRT. Plně vyhovuje etickým standardům univerzit pro přepis rozhovorů k diplomovým a bakalářským pracím. |
| [Převod MP4 na Text (Přepis Videa)](https://privro.com/cs/mp4-to-text) | Bezplatný nástroj pro přepis videa v prohlížeči. Extrahujte zvukovou stopu z videí MP4, MOV či WebM a převeďte ji na upravitelný text nebo titulkové soubory (SRT, VTT) bez cloudových serverů. |
| [Caption Studio - Automatické Titulky](https://privro.com/cs/caption-studio) | Vytvářejte dynamické a stylové titulky pro TikTok, Instagram Reels a YouTube Shorts. Vypalte titulky přímo do videa až v rozlišení 4K pomocí prohlížečového FFmpeg – 100% zdarma a **zcela bez vodoznaku**. |
| [Piper Voice Studio (Hlasové AI Studio)](https://privro.com/cs/piper-voice) | Procházejte, zkoušejte a poslouchejte více než 300 hlasů přímo v prohlížeči. Zahrnuje české modely Jirka a Kasandra, nastavení výšky a rychlosti hlasu, akceleraci WebGPU a bezeztrátový export do 16bitového PCM WAV. |
| [Generátor Převodu Textu na Řeč Zdarma](https://privro.com/cs/text-to-speech) | Rychlý, bezpečný a neomezený převod textu na řeč online. Převeďte články, skripty a dokumenty na přirozený hlas bez registrace a bez ukládání na externí servery. |
| [Místní Webová Aplikace AI Hlasů](https://voice.privro.com) | Samostatná webová aplikace (PWA) postavená na tomto repozitáři se samostatnými záložkami pro Piper TTS i Kokoro TTS. |
| [Alternativa k Otter.ai (Zdarma & Bez Časového Limitu)](https://privro.com/cs/alternatives/otter) | Proč platit drahé měsíční poplatky v dolarech a riskovat únik dat do cloudu? Poznejte bezplatný, neomezený a zcela lokální přepis audia s Privro. |
| [Alternativa k Happy Scribe (Zero-Upload)](https://privro.com/cs/alternatives/happyscribe) | Porovnejte minutové limity a cloudové nahrávání služby Happy Scribe s bezplatným lokálním přepisem Whisper a Caption Studiem bez vodoznaku. |
| [Ceník a Plány Privro AI](https://privro.com/cs/pricing) | Přehled našich 100% bezplatných lokálních nástrojů v prohlížeči, volitelného cloudového zpracování pro hromadné projekty a předplacených kreditů bez expirace. |

---

## Dostupnost ve 22 Světových Jazycích (Global Availability)

Platforma Privro je plně lokalizována do **22 světových jazyků**. Každá jazyková verze má vlastní optimalizovanou vstupní stránku zohledňující místní vyhledávací zvyklosti a právní předpisy na ochranu soukromí:

| Jazyk (Language) | Původní Název | Kód | Lokalizovaná URL Adresa |
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

> **Poznámka:** Základní nástroje ekosystému Privro – včetně [Přepisu Audia](https://privro.com/cs/transcribe), [Caption Studia](https://privro.com/cs/caption-studio) a [Piper Voice Studia](https://privro.com/cs/piper-voice) – jsou plně funkční pro všech 22 jazyků.

---

## Podporované Jazyky v Piper TTS (Languages Supported by Piper TTS)

Piper TTS obsahuje **více než 300 otevřených neuronových hlasových modelů** rozdělených do **58 jazykových a regionálních kódů** v rámci 42 jazykových rodin. Všechny modely běží výhradně lokálně na vašem počítači:

| Jazyk (Language) | Původní Název | Kód | Země / Oblast | Dostupné Modely |
| ------------------- | ------------------------- | --------- | -------------------------------- | --------------------- |
| Arabic (Arabština) | العربية | `ar_JO` | Jordánsko | 2 modely |
| Bulgarian (Bulharština)| български | `bg_BG` | Bulharsko | 1 model |
| Bengali (Bengálština) | বাংলা | `bn_BD` | Bangladéš | 1 model |
| Catalan (Katalánština) | Català | `ca_ES` | Španělsko | 3 modely |
| **Czech (Čeština)** | **Čeština** | **`cs_CZ`** | **Česko** | **3 modely (Jirka Medium & Low, Kasandra Medium)** |
| Welsh (Velština) | Cymraeg | `cy_GB` | Spojené království | 2 modely |
| Danish (Dánština) | Dansk | `da_DK` | Dánsko | 1 model (NST Rigsdansk) |
| German (Němčina) | Deutsch | `de_DE` | Německo | 10 modelů |
| Greek (Řečtina) | Ελληνικά | `el_GR` | Řecko | 3 modely |
| English (UK) | English (UK) | `en_GB` | Spojené království | 11 modelů |
| English (US) | English (US) | `en_US` | Spojené státy | 27 modelů |
| Spanish (Argentina) | Español (Argentina) | `es_AR` | Argentina | 1 model |
| Spanish (Španělsko) | Español (España) | `es_ES` | Španělsko | 5 modelů |
| Spanish (Mexiko) | Español (México) | `es_MX` | Mexiko | 3 modely |
| Estonian (Estonština) | Eesti | `et_EE` | Estonsko | 1 model |
| Basque (Baskičtina) | Euskara | `eu_ES` | Španělsko | 2 modely |
| Persian / Farsi | فارسی | `fa_IR` | Írán | 3 modely |
| Finnish (Finština) | Suomi | `fi_FI` | Finsko | 2 modely (Harri Medium & Low) |
| French (Francouzština)| Français (France) | `fr_FR` | Francie | 7 modelů |
| Irish (Irština) | Gaeilge | `ga_IE` | Irsko | 3 modely |
| Galician (Galicijština)| Galego | `gl_ES` | Španělsko | 1 model |
| Gujarati (Gudžarátština)| ગુજરાતી | `gu_IN` | Indie | 1 model |
| Hebrew (Hebrejština) | עברית | `he_IL` | Izrael | 1 model |
| Hindi (Hindština) | हिन्दी | `hi_IN` | Indie | 1 model |
| Croatian (Chorvatština)| Hrvatski | `hr_HR` | Chorvatsko | 1 model |
| Hungarian (Maďarština) | Magyar | `hu_HU` | Maďarsko | 2 modely |
| Indonesian (Indonéština)| Bahasa Indonesia | `id_ID` | Indonésie | 1 model |
| Icelandic (Islandština)| Íslenska | `is_IS` | Island | 3 modely |
| Italian (Italština) | Italiano | `it_IT` | Itálie | 4 modely |
| Japanese (Japonština) | 日本語 | `ja_JP` | Japonsko | 1 model |
| Georgian (Gruzínština) | ქართული | `ka_GE` | Gruzie | 1 model |
| Kazakh (Kazaština) | Қазақша | `kk_KZ` | Kazachstán | 1 model |
| Luxembourgish | Lëtzebuergesch | `lb_LU` | Lucembursko | 1 model |
| Nepali (Nepálština) | नेपाली | `ne_NP` | Nepál | 1 model |
| Dutch (Belgie) | Nederlands (België) | `nl_BE` | Belgie | 4 modely |
| Dutch (Nizozemsko) | Nederlands (Nederland) | `nl_NL` | Nizozemsko | 6 modelů |
| Norwegian (Norština) | Norsk (Bokmål) | `no_NO` | Norsko | 2 modely (11 mluvčích) |
| Polish (Polština) | Polski | `pl_PL` | Polsko | 5 modelů |
| Portuguese (Brazílie) | Português (Brasil) | `pt_BR` | Brazílie | 4 modely |
| Portuguese (Portugalsko)| Português (Portugal) | `pt_PT` | Portugalsko | 1 model |
| Romanian (Rumunština) | Română | `ro_RO` | Rumunsko | 2 modely |
| Russian (Ruština) | Русский | `ru_RU` | Rusko | 8 modelů |
| Slovak (Slovenština) | Slovenčina | `sk_SK` | Slovensko | 1 model |
| Slovenian (Slovinština)| Slovenščina | `sl_SI` | Slovinsko | 1 model |
| Serbian (Srbština) | Srpski | `sr_RS` | Srbsko | 2 modely |
| Swedish (Švédština) | Svenska | `sv_SE` | Švédsko | 3 modely |
| Swahili (Svahilština) | Kiswahili | `sw_CD` | DR Kongo | 1 model |
| Telugu (Telugština) | తెలుగు | `te_IN` | Indie | 1 model |
| Turkish (Turečtina) | Türkçe | `tr_TR` | Turecko | 3 modely |
| Ukrainian (Ukrajinština)| Українська | `uk_UA` | Ukrajina | 4 modely |
| Urdu (Urdština) | اردو | `ur_PK` | Pákistán | 2 modely |
| Vietnamese (Vietnamština)| Tiếng Việt | `vi_VN` | Vietnam | 4 modely |
| Chinese (Čínština) | 简体中文 | `zh_CN` | Čína | 2 modely |

---

## České Hlasy v Systému Piper TTS (`cs_CZ`) – Jirka & Kasandra

Český jazyk se vyznačuje komplexní fonetickou strukturou, diakritikou (háčky a čárky), specifickým rytmem a hláskami jako „ř“. Systém Piper TTS zvládá tyto nástrahy díky fonetizaci eSpeak NG a trénovaným modelům naprosto přirozeně:

### 1. `cs_CZ-jirka-medium` (Studiová kvalita – Mužský hlas)
- **Typ:** Jednohlasý neuronový model (Single-speaker).
- **Profil:** Čistý, srozumitelný a přirozený český mužský hlas.
- **Kvalita:** Vzorkovací frekvence 22 050 Hz (22,05 kHz), 16bitový nekomprimovaný PCM WAV.
- **Fonetizace:** Přímá integrace knihovny eSpeak NG ve WebAssembly se spolehlivou výslovností české slovní zásoby.
- **Využití:** Vyprávění pro videa na YouTube (kanály bez tváře), poslech webových článků, výukové materiály a audioknihy.

### 2. `cs_CZ-jirka-low` (Odlehčený model)
- **Typ:** Rychlá a vysoce úsporná neuronová síť (~17 MB) optimalizovaná pro méně výkonná zařízení a pomalejší připojení.
- **Využití:** Rychlá syntéza řeči na starších noteboocích a mobilních zařízeních.

### 3. `cs_CZ-kasandra-medium` (Studiová kvalita – Ženský hlas)
- **Typ:** Přirozený jednohlasý neuronový model.
- **Profil:** Příjemný, kultivovaný a dynamický český ženský hlas.
- **Kvalita:** Vzorkovací frekvence 22 050 Hz (22,05 kHz), 16bitový PCM WAV.
- **Využití:** Firemní prezentace, namlouvání videí pro sociální sítě, instruktážní videa a asistivní technologie.

---

## Architektura & Zpracování Zvuku (Architecture)

```
Vstupní Text Uživatele (User Input)
       │
       ▼
Čištění Textu & Fonetizace (eSpeak NG WebAssembly)
       │
       ▼
Neuronové Výpočty Inference (Piper ONNX Runtime Web s WebGPU / WASM SIMD)
       │
       ▼
Nezpracovaný Zvukový Buffer v Paměti (Float32Array PCM Audio Chunks)
       │
       ├─────────────────────────────────┐
       ▼                                 ▼
Kontext Web Audio API             Generátor Souboru WAV (16-bit PCM)
(Okamžité lokální přehrávání)     (Přímé bezeztrátové stažení)
```

### 1. Zpracování v Piper TTS
- Fonetizace probíhá v reálném čase pomocí knihovny [eSpeak NG](https://github.com/espeak-ng/espeak-ng) zkompilované do WebAssembly.
- Výpočty modelu probíhají v izolovaném vlákně Web Worker prostřednictvím [ONNX Runtime Web](https://onnxruntime.ai/).
- Hlasový model se stáhne pouze jednou a uloží se do trvalého úložiště prohlížeče `IndexedDB` (`piper-voices-cache-v1`). Následná generování probíhají během milisekund zcela offline.

### 2. Zpracování v Kokoro TTS
- Samostatný Web Worker inicializuje optimalizovaný model `onnx-community/Kokoro-82M-v1.0-ONNX` pomocí knihovny Transformers.js.
- Zvuk se generuje v reálném čase po blocích textu (*chunks*), takže přehrávání začíná okamžitě bez čekání na dokončení celého odstavce.
- Nabízí ovládací prvky pro pozastavení, obnovení i plynulou úpravu rychlosti čtení (0,5x–2,0x).

---

## Technologický Zásobník (Tech Stack)

- **Frontendový Rámec:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styly & UI Komponenty:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Hlasové Systémy (TTS):**
  - [Piper](https://github.com/rhasspy/piper) (ONNX Runtime Web `ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) (fonetizace ve WebAssembly)
  - [Kokoro](https://github.com/hexgrad/kokoro) ([`kokoro-js`](https://www.npmjs.com/package/kokoro-js))
- **Hardwarová Akcelerace:** WebGPU s automatickým fallbackem na vícevláknový WASM SIMD
- **Ikony & Notifikace:** Lucide Icons a Sonner toast hlášení

---

## Instalace & Místní Vývoj (Getting Started)

### Požadavky
- Node.js 18 nebo novější
- Moderní webový prohlížeč s podporou WebAssembly. Pro maximální výkon WebGPU doporučujeme Google Chrome nebo Microsoft Edge.

### Klonování a Instalace

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Konfigurace Proměnných Prostředí

Zkopírujte šablonu `.env.example` do `.env`:

```bash
cp .env.example .env
```

Nastavte `VITE_PIPER_CDN_URL` na své úložiště Cloudflare R2 nebo CDN adresu:

```env
VITE_PIPER_CDN_URL="https://your-bucket.r2.dev"
```

### Spuštění Vývojového Serveru

```bash
npm run dev
```

Otevřete ve svém prohlížeči adresu [http://localhost:3000/](http://localhost:3000/).

### Sestavení pro Produkci

```bash
npm run build    # Vytvoří optimalizovaný balíček ve složce /dist
npm run preview  # Lokální náhled produkčního sestavení
```

---

## Často Kladené Otázky (FAQ)

### AI Hlasy & Převod Textu na Řeč (Text-to-Speech)

#### Proč je tento generátor hlasu 100% zdarma a bez limitu počtu znaků?
Hlasové modely Privro i přepisovací modely Whisper běží přímo na grafické kartě (WebGPU) nebo procesoru (WebAssembly) vašeho vlastního počítače ve webovém prohlížeči. Vzhledem k tomu, že výpočty neprobíhají na nákladných cloudových serverech, nevznikají žádné provozní náklady na minutu běhu. Můžete tedy převádět neomezené množství textu na hlas bez jakéhokoli předplatného, kreditů či platebních bran.

#### Nahrávají se mé texty nebo zvukové nahrávky na servery Privro či třetích stran? (GDPR, ÚOOÚ a profesní tajemství)
Nikdy. Veškerý zadaný text, nahrané zvukové soubory i vygenerovaný hlas existují výhradně v dočasné operační paměti (RAM) vašeho webového prohlížeče. Žádná data se neposílají na externí servery ani třetím stranám. Tím je zajištěn 100% soulad s následujícími předpisy:
- **Obecné nařízení o ochraně osobních údajů (GDPR)** a **Zákon o zpracování osobních údajů (č. 110/2019 Sb.)** pod dohledem **Úřadu pro ochranu osobních údajů (ÚOOÚ)**.
- Etické standardy českých univerzit a výzkumných komisí pro nakládání s osobními a biometrickými údaji respondentů výzkumu.
- Zákonná povinnost mlčenlivosti a **advokátní tajemství** dle **Zákona o advokacii č. 85/1996 Sb. § 21**.
- **Lékařské tajemství a povinná mlčenlivost zdravotnických pracovníků** dle **Zákona o zdravotních službách č. 372/2011 Sb. § 51**.
- Povinnost mlčenlivosti ve veřejné správě dle **Správního řádu (č. 500/2004 Sb.)**.

Jelikož data neopouštějí váš počítač, **není vyžadována smlouva o zpracování osobních údajů (DPA dle čl. 28 GDPR)**.

#### Jaké české hlasy jsou v nástroji k dispozici?
Privro nabízí oficiální české neuronové modely:
1. `cs_CZ-jirka-medium`: Přirozený, srozumitelný český mužský hlas se vzorkovací frekvencí 22,05 kHz ve studiové kvalitě.
2. `cs_CZ-jirka-low`: Rychlá a odlehčená verze vhodná pro slabší procesory a mobilní telefony.
3. `cs_CZ-kasandra-medium`: Příjemný a plynulý český ženský hlas ve studiové kvalitě 22,05 kHz.

Pro anglické vyprávění můžete navíc přepnout na systém Kokoro TTS s pestrou nabídkou amerických a britských hlasů.

#### Mohu vygenerovaný zvuk přímo importovat do Premiere Pro, DaVinci Resolve či CapCutu?
Ano. Veškerý vygenerovaný zvuk si můžete okamžitě stáhnout jako bezeztrátový 16bitový soubor PCM WAV (22,05 kHz pro Piper a 24 kHz pro Kokoro). Tyto soubory jsou plně kompatibilní se všemi profesionálními střižnami a zvukovými editory bez nutnosti další konverze.

---

### Přepis Audia & Zpracování Diplomových Prací (Whisper AI)

#### Jak mohu zdarma přepsat rozhovory pro diplomovou nebo bakalářskou práci?
Studenti a výzkumní pracovníci českých vysokých škol (např. Univerzita Karlova v Praze, ČVUT v Praze, Masarykova univerzita v Brně, VŠE v Praze, VUT v Brně, ZČU v Plzni, UPOL v Olomouci a dalších) mohou otevřít [Přepis Audia](https://privro.com/cs/transcribe), přetáhnout nahrávku rozhovoru do prohlížeče (MP3, M4A, WAV atd.) a nechat Whisper AI přepsat mluvené slovo do textu přímo v notebooku. Výsledný přepis lze exportovat do Wordu (DOCX), PDF nebo TXT včetně časových značek a rozlišení mluvčích.

#### Splňuje Privro etické kodexy a požadavky etických komisí na ochranu osobních údajů?
Ano. Hlasový záznam je podle GDPR a výkladových stanovisek ÚOOÚ osobním a biometrickým údajem. Nahrávání výzkumných rozhovorů na neprověřené zahraniční cloudové služby často porušuje etický souhlas respondentů i zásady ochrany dat univerzity. Vzhledem k tomu, že Privro provádí veškerý přepis 100% lokálně v paměti vašeho prohlížeče, zvukový záznam nikdy neopustí váš počítač. Nedochází k žádnému předávání dat do USA ani třetím stranám.

#### Musí má univerzita či fakulta uzavírat s Privro smlouvu o zpracování osobních údajů (DPA)?
Nemusí. Privro nepřijímá, nezpracovává ani neukládá žádné vaše soubory na svých serverech, a nevystupuje proto v roli zpracovatele osobních údajů ve smyslu článku 28 GDPR. Zpracování probíhá výhradně na koncovém zařízení správce dat (studenta či výzkumníka).

---

### Profesní Mlčenlivost (Advokáti & Zdravotnictví)

#### Mohou advokáti a lékaři používat Privro pro diktování a přepis citlivých nahrávek?
Ano. Vzhledem k tomu, že zpracování probíhá výhradně v operační paměti vašeho počítače bez jakéhokoli odchozího síťového provozu po načtení modelu, je nástroj ideální pro přepis advokátních porad, soudních jednání, lékařských zpráv a znaleckých posudků bez rizika porušení zákonné mlčenlivosti.

---

### Caption Studio & Titulky k Videu (Převod MP4 na Text)

#### Jak vytvořit automatické titulky k videu zcela bez vodoznaku?
Přejděte do nástroje [Caption Studio](https://privro.com/cs/caption-studio), nahrajte své video a nechte model Whisper automaticky vygenerovat text z audia. V editoru můžete snadno upravit styl, písmo, barvy, pozadí a animace titulků. Pomocí prohlížečového FFmpeg pak titulky vypálíte přímo do obrazu. Výsledné video je exportováno **100% zdarma a zcela bez jakýchkoli vodoznaků či log**.

#### Jaké poměry stran a formáty Caption Studio podporuje?
- **9:16:** Vertikální formát pro TikTok, Instagram Reels a YouTube Shorts
- **16:9:** Horizontální širokoúhlý formát pro klasická YouTube videa a prezentace
- **1:1:** Čtvercová videa pro Instagram a LinkedIn
- **4:5:** Vertikální příspěvky pro feed na sociálních sítích
- **3:2:** Tradiční fotografický poměr stran

#### Mohu z videa (MP4, MOV, WebM) získat samostatný text a titulkové soubory?
Ano. Pomocí nástroje [Převod MP4 na Text](https://privro.com/cs/mp4-to-text) můžete snadno extrahovat zvuk z libovolného videa a stáhnout hotové časované soubory titulků (`.srt`, `.vtt`) nebo textové dokumenty (`.docx`, `.txt`).

---

### Tvůrci Obsahu & Zpeněžení na YouTube

#### Mohu vygenerované hlasy používat komerčně a monetizovat videa na YouTube?
Ano. Modely Piper i Kokoro jsou vydány pod otevřenými licencemi umožňujícími komerční využití. Vygenerovaný zvuk je 100% bez licenčních poplatků (royalty-free). Můžete s ním bez obav monetizovat videa na YouTube (včetně populárních kanálů bez tváře – *faceless channels*), používat jej v reklamách, podcastech i komerčních audioknihách.

#### Funguje aplikace v offline režimu bez připojení k internetu?
Ano. Jakmile si v prohlížeči jednou stáhnete vybraný hlasový model nebo model Whisper pro přepis, uloží se do lokální mezipaměti prohlížeče (`CacheStorage` a `IndexedDB`). Následně můžete aplikaci plnohodnotně používat i na cestách, ve vlaku či v uzavřené síti zcela bez přístupu k internetu.

---

### Platforma, Přístupnost & Integrace s LLM

#### Ve kolika jazycích je platforma Privro dostupná?
Privro je plně dostupné ve **22 světových jazycích**: čeština, angličtina, španělština, portugalština, italština, němčina, francouzština, hindština, indonéština, polština, japonština, nizozemština, švédština, dánština, norština, finština, turečtina, ruština, korejština, tradiční čínština, arabština a hebrejština. Všechny jazykové verze jsou přímo přístupné na adrese `https://privro.com/{kód_jazyka}`.

#### K čemu slouží adresa `https://privro.com/llms.txt`?
Soubory [privro.com/llms.txt](https://privro.com/llms.txt) a [privro.com/llms-full.txt](https://privro.com/llms-full.txt) představují standardizované strojově čitelné specifikace určené pro AI agenty a jazykové modely (LLM). Poskytují přesná fakta o lokální architektuře Privro, podporovaných modelech, bezpečnosti dat a struktuře API.

---

## Poděkování & Uznání (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) a [Piper Voices](https://huggingface.co/rhasspy/piper-voices) – Michael Hansen a komunita projektu Rhasspy.
- [Kokoro TTS](https://github.com/hexgrad/kokoro) – Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) a [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) – Microsoft.
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) – fonetizace ve WebAssembly.

---

## Licence (License)

Tento projekt je licencován pod podmínkami [Apache License 2.0](LICENSE). Úplné znění licenčních podmínek naleznete v souboru `LICENSE`.
