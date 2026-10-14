<div align="center">

[![Language: German](https://img.shields.io/badge/Language-Deutsch%20(German)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

</div>

# Privro AI Voice - Kostenloser lokaler KI-Sprachgenerator & Text-to-Speech (TTS) im Browser

Browserbasierter neuronaler Text-to-Speech-Generator mit Zero-Upload-Technologie für [Privro AI](https://privro.com/de). Geben Sie Text ein, wählen Sie ein Stimmenmodell und erzeugen Sie verblüffend natürliche, lebensechte Sprache vollständig auf Ihrem eigenen Gerät. Das Audio wird lokal über Web Workers und WebGPU synthetisiert – weder Texte noch Sprachaufnahmen werden jemals auf externe Server hochgeladen.

- **Live-Web-Anwendung:** [voice.privro.com](https://voice.privro.com)
- **Privro Voice Studio:** [privro.com/de/piper-voice](https://privro.com/de/piper-voice)
- **Maschinenlesbare Metadaten:** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## Zwei neuronale Sprachsynthese-Engines im Browser (Dual Neural TTS Engines)

Dieses Projekt vereint zwei leistungsstarke neuronale Sprachsynthese-Engines, die vollständig clientseitig im Browser ausgeführt werden:

1. **Piper TTS (Haupt-Engine):**
   - Ultraschnelle, lokale neuronale Sprachsynthese, angetrieben durch ONNX Runtime Web und eSpeak NG.
   - **Über 300 Stimmen in mehr als 40 Sprachen (58 Regionen)**, darunter **10 native deutsche Stimmenmodelle** (`de_DE`: Thorsten high/medium/low, Thorsten Emotional mit 8 Stilen, MLS mit 236 Sprechern, Eva K., Karlsson, Kerstin, Pavoque, Ramona).
   - Hardware-Beschleunigung mit **WebGPU**, inklusive automatischem Fallback auf multithreaded **WebAssembly (WASM)** mit SIMD.
   - Multi-Speaker-Modelle mit individuell wählbaren Sprecher-IDs.
   - Maßgeschneiderte Qualitätsstufen: von extrem ressourcenschonend und schnell (`x_low`, `low`) bis hin zu audiophiler Studioqualität (`medium`, `high`).
   - Intelligentes Browser-Caching via `CacheStorage`: Sprachmodelle (~20–60 MB) werden einmalig heruntergeladen und funktionieren fortan zu 100% offline.
   - Direkter Download der generierten Audiospur als verlustfreie **16-Bit PCM WAV-Datei (22,05 kHz)**.

2. **Kokoro TTS (Sekundäre Engine):**
   - Extrem natürliche und ausdrucksstarke Sprachausgabe basierend auf dem Modell [Kokoro](https://github.com/hexgrad/kokoro) (`Kokoro-82M`) über [`kokoro-js`](https://www.npmjs.com/package/kokoro-js).
   - Authentische amerikanische und britische Sprechstile.
   - Echzeit-Chunk-Streaming: Hören Sie den Beginn des Textes sofort an, während nachfolgende Absätze im Hintergrund weiter synthetisiert werden.
   - Volle Steuerung: Wiedergabe, Pause, Fortsetzen und variable Sprechgeschwindigkeit (0,5x bis 2,0x).

---

## Privro Werkzeuge (Privro Tools)

Privro ist eine moderne Suite von Produktivitäts- und Creator-Tools mit kompromissloser *Local-First*-Architektur. Alle lokalen Tools laufen zu 100% auf Ihrem Endgerät: ohne Registrierung, ohne Benutzerkonto, ohne Kreditkarte, ohne API-Schlüssel und ohne Dateigrößen- oder Minutenbegrenzungen.

| Werkzeuge & Seiten | Funktionsübersicht |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Kostenlose lokale Transkription (Whisper AI)](https://privro.com/de/transcribe) | Speech-to-Text auf Ihrem eigenen Endgerät mit OpenAI Whisper (von Tiny bis Large Turbo) in 99 Sprachen. Ohne Upload, ohne Minutenlimits und ohne Anmeldung. |
| [MP4-in-Text-Konverter](https://privro.com/de/mp4-to-text) | Kostenloser Online-Konverter von Video in Text. Wandelt MP4-, MOV- oder WebM-Dateien lokal mit Whisper in Text-Transkripte (TXT, DOCX, PDF) oder Untertitel (SRT, VTT) um. |
| [Caption Studio - Video-Untertitel-Editor](https://privro.com/de/caption-studio) | Erstellen Sie automatisch animierte Untertitel im TikTok- und Karaoke-Stil für Ihre Videos. Clientseitiges FFmpeg-Rendering im Browser bis 4K-Auflösung ohne Wasserzeichen. |
| [Piper Voice Studio (Neuronales TTS)](https://privro.com/de/piper-voice) | Professionelles multilinguales Sprachsynthese-Studio direkt in Privro. Über 300 Stimmen, Sprecherauswahl, WebGPU-Beschleunigung und verlustfreier WAV-Export. |
| [Kostenloser Text-to-Speech-Generator](https://privro.com/de/text-to-speech) | Schneller, sicherer und privater Online-Konverter von Text in Sprache. Verwandelt eingegebene Texte lokal im Browser ohne Cloud-Abhängigkeiten in natürliche Audioaufnahmen. |
| [Lokale KI-Sprach-Web-App](https://voice.privro.com) | Eigenständige Web-Anwendung mit zwei neuronalen Engines (Piper TTS und Kokoro TTS), die vollständig im Browser läuft (dieses Repository). |
| [Otter.ai Alternative (Kostenlos & Unbegrenzt)](https://privro.com/de/alternatives/otter) | Vergleichen Sie die unbegrenzte, lokale Browser-Transkription von Privro mit den Cloud-Meeting-Bots und teuren monatlichen Abogebühren von Otter. |
| [Happy Scribe Alternative (Ohne Upload)](https://privro.com/de/alternatives/happyscribe) | Vergleichen Sie das Caption Studio und die lokale Whisper-Transkription von Privro (Zero-Upload) mit den restriktiven Cloud-Tarifen und Minutenpreisen von Happy Scribe. |
| [Preise und Pläne von Privro AI](https://privro.com/de/pricing) | Dauerhaft kostenlose On-Device-Tools sowie optionale High-Speed-Cloud-Transkription und zeitlich unbegrenzte Guthaben-Pakete ohne Verfallsdatum. |

---

## Text-to-Speech auf Privro (Text to Speech on Privro)

Privro stellt Zero-Upload-Sprachsynthese direkt im Browser bereit – maßgeschneidert auf maximale Ausführungsgeschwindigkeit, Datensouveränität und einfachste Bedienung:

- **[Piper Voice Studio](https://privro.com/de/piper-voice):** Das interaktive Vollfunktions-Sprachstudio in Privro. Durchsuchen und filtern Sie über 300 Stimmen in mehr als 40 Sprachen, wählen Sie spezifische Sprecher-IDs in Multi-Speaker-Modellen, wechseln Sie nahtlos zwischen WebGPU- und WASM-Laufzeitumgebungen, speichern Sie Modelle lokal ab und exportieren Sie makellose WAV-Audiodateien.
- **[Text-to-Speech-Generator](https://privro.com/de/text-to-speech):** Schnelles Online-Portal zur einfachen Vertonung von Texten, Blogbeiträgen, Skripten und Präsentationen.
- **[Lokale KI-Sprach-Web-App](https://voice.privro.com):** Die quelloffene Progressive Web App (PWA) aus diesem Repository mit dedizierten Reitern für Piper TTS und Kokoro TTS.

### Lokale Datenschutz-Architektur (On-Device Privacy)
Die gesamte Sprachsynthese wird clientseitig über Web Workers im Browser ausgeführt:
- **Es werden keine Texte an externe Server übertragen.**
- **Keine generierte Audiodatei wird in der Cloud gespeichert oder protokolliert.**
- **Keine Registrierung, keine Passwörter und keine API-Schlüssel erforderlich.**
- **Funktioniert 100% offline**, sobald das Sprachmodell und die Laufzeitdateien im Browser-Cache abgelegt sind.
- **Vollständige Einhaltung der DSGVO (GDPR)** und Wahrung der Schweigepflicht nach **§ 203 StGB** (Berufsgeheimnis für Ärzte, Rechtsanwälte und Notare).

---

## Maschinenlesbare Plattform-Spezifikationen (`llms.txt` & `llms-full.txt`)

Privro stellt strukturierte, maschinenlesbare Dokumentationen nach dem standardisierten `llms.txt`-Format zur Verfügung:

- **Übersichts-Index:** [https://privro.com/llms.txt](https://privro.com/llms.txt)
- **Vollständige Spezifikation:** [https://privro.com/llms-full.txt](https://privro.com/llms-full.txt)

Diese Dateien bieten KI-Assistenten, autonomen Agenten und Web-Crawlern geprüfte Informationen über Privros lokales Sicherheitsmodell, Whisper-Modellgrößen, FFmpeg-Exportprofile, das Spektrum der Piper-Neuronalsynthese und internationale Sprachpfade.

---

## Auf Privro verfügbare Sprachen (Languages Available on Privro)

Privro ist in **22 Sprachen** vollständig lokalisiert. Die englische Ausgabe befindet sich auf der Hauptdomain, während jede Sprachversion über einen eigenen Sprachpfad erreichbar ist:

| Sprache (Language) | Nativer Name | Code | Homepage-URL |
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

> **Hinweis:** Die Kernwerkzeuge der Privro-Suite – darunter das [Transkriptions-Tool](https://privro.com/de/transcribe), das [Caption Studio](https://privro.com/de/caption-studio) und [Piper Voice](https://privro.com/de/piper-voice) – sind in allen 22 Sprachen nativ übersetzt.

---

## Unterstützte Sprachen in Piper TTS (Languages Supported by Piper TTS)

Piper TTS umfasst **über 300 quelloffene neuronale Sprachmodelle** über **58 Sprach- und Regionalcodes** in 42 Sprachfamilien. Alle Modelle können direkt im Browser geladen werden:

| Sprache (Language) | Nativer Name | Code | Region / Land | Verfügbare Stimmen |
| ------------------- | ------------------------- | --------- | -------------------------------- | ------------------ |
| Arabic (Arabisch) | العربية | `ar_JO` | Jordanien | 2 Stimmen |
| Bulgarian (Bulgarisch)| български | `bg_BG` | Bulgarien | 1 Stimme |
| Bengali (Bengalisch)| বাংলা | `bn_BD` | Bangladesch | 1 Stimme |
| Catalan (Katalanisch)| Català | `ca_ES` | Spanien | 3 Stimmen |
| Czech (Tschechisch) | Čeština | `cs_CZ` | Tschechien | 3 Stimmen |
| Welsh (Walisisch) | Cymraeg | `cy_GB` | Großbritannien | 2 Stimmen |
| Danish (Dänisch) | Dansk | `da_DK` | Dänemark | 1 Stimme |
| German (Deutsch) | Deutsch | `de_DE` | Deutschland | 10 Stimmen |
| Greek (Griechisch) | Ελληνικά | `el_GR` | Griechenland | 3 Stimmen |
| English (UK) | English (UK) | `en_GB` | Großbritannien | 11 Stimmen |
| English (US) | English (US) | `en_US` | Vereinigte Staaten | 27 Stimmen |
| Spanish (Argentinien)| Español (Argentina) | `es_AR` | Argentinien | 1 Stimme |
| Spanish (Spanien) | Español (España) | `es_ES` | Spanien | 5 Stimmen |
| Spanish (Mexiko) | Español (México) | `es_MX` | Mexiko | 3 Stimmen |
| Estonian (Estnisch) | eesti | `et_EE` | Estland | 1 Stimme |
| Basque (Baskisch) | Euskara | `eu_ES` | Spanien | 2 Stimmen |
| Persian / Farsi | فارسی | `fa_IR` | Iran | 5 Stimmen |
| Finnish (Finnisch) | Suomi | `fi_FI` | Finnland | 2 Stimmen |
| French (Französisch)| Français | `fr_FR` | Frankreich | 7 Stimmen |
| Hebrew (Hebräisch) | עִבְרִית | `he_IL` | Israel | 1 Stimme |
| Hindi (Hindi) | हिन्दी | `hi_IN` | Indien | 3 Stimmen |
| Hungarian (Ungarisch)| Magyar | `hu_HU` | Ungarn | 3 Stimmen |
| Armenian (Armenisch)| հայերեն | `hy_AM` | Armenien | 1 Stimme |
| Indonesian (Indonesisch)| Bahasa Indonesia | `id_ID` | Indonesien | 1 Stimme |
| Icelandic (Isländisch)| íslenska | `is_IS` | Island | 4 Stimmen |
| Italian (Italienisch)| Italiano | `it_IT` | Italien | 4 Stimmen |
| Japanese (Japanisch)| 日本語 | `ja_JP` | Japan | 1 Stimme |
| Georgian (Georgisch)| ქართული ენა | `ka_GE` | Georgien | 1 Stimme |
| Kazakh (Kasachisch) | қазақша | `kk_KZ` | Kasachstan | 3 Stimmen |
| Korean (Koreanisch) | 한국어 | `ko_KR` | Südkorea | 1 Stimme |
| Kurdish (Kurdisch) | Kurmancî | `ku_TR` | Türkei | 1 Stimme |
| Luxembourgish (Luxemburgisch)| Lëtzebuergesch | `lb_LU` | Luxemburg | 1 Stimme |
| Lithuanian (Litauisch)| Lietuvių | `lt_LT` | Litauen | 1 Stimme |
| Latvian (Lettisch) | Latviešu | `lv_LV` | Lettland | 1 Stimme |
| Malayalam | മലയാളം | `ml_IN` | Indien | 2 Stimmen |
| Marathi | मराठी | `mr_IN` | Indien | 1 Stimme |
| Nepali (Nepalesisch)| नेपाली | `ne_NP` | Nepal | 3 Stimmen |
| Dutch (Belgien) | Nederlands (België) | `nl_BE` | Belgien | 4 Stimmen |
| Dutch (Niederlande) | Nederlands (Nederland) | `nl_NL` | Niederlande | 6 Stimmen |
| Norwegian (Norwegisch)| Norsk | `no_NO` | Norwegen | 2 Stimmen |
| Polish (Polnisch) | Polski | `pl_PL` | Polen | 5 Stimmen |
| Portuguese (Brasilien)| Português (Brasil) | `pt_BR` | Brasilien | 4 Stimmen |
| Portuguese (Portugal)| Português (Portugal)| `pt_PT` | Portugal | 1 Stimme |
| Romanian (Rumänisch)| Română | `ro_RO` | Rumänien | 1 Stimme |
| Russian (Russisch) | Русский | `ru_RU` | Russland | 4 Stimmen |
| Slovak (Slowakisch) | Slovenčina | `sk_SK` | Slowakei | 1 Stimme |
| Slovenian (Slowenisch)| Slovenščina | `sl_SI` | Slowenien | 1 Stimme |
| Albanian (Albanisch)| shqip | `sq_AL` | Albanien | 1 Stimme |
| Serbian (Serbisch) | srpski | `sr_RS` | Serbien | 1 Stimme |
| Swedish (Schwedisch)| Svenska | `sv_SE` | Schweden | 3 Stimmen |
| Swahili (Suaheli) | Kiswahili | `sw_CD` | DR Kongo | 1 Stimme |
| Telugu | తెలుగు | `te_IN` | Indien | 3 Stimmen |
| Thai (Thailändisch)| ไทย | `th_TH` | Thailand | 1 Stimme |
| Turkish (Türkisch) | Türkçe | `tr_TR` | Türkei | 1 Stimme |
| Ukrainian (Ukrainisch)| украї́нська мо́ва | `uk_UA` | Ukraine | 5 Stimmen |
| Urdu (Urdu) | اردو | `ur_PK` | Pakistan | 2 Stimmen |
| Vietnamese (Vietnamesisch)| Tiếng Việt | `vi_VN` | Vietnam | 3 Stimmen |
| Chinese (Vereinfacht)| 简体中文 | `zh_CN` | China | 4 Stimmen |

---

## Technische Architektur & Funktionsweise (Technical Architecture)

### 1. Piper TTS Pipeline
```
[Benutzertext]
    │
    ▼
[Web Worker: eSpeak NG Phonemisierer] ──► Wandelt geschriebenen Text in standardisierte Phonem-IDs um
    │
    ▼
[Web Worker: ONNX Runtime Web]        ──► Führt das neuronale Modell (.onnx) via WebGPU oder WASM aus
    │
    ▼
[PCM-Audio-Buffer]                    ──► Baut den unkomprimierten 16-Bit PCM-Audiostrom bei 22,05 kHz auf
    │
    ▼
[Web Audio API / WAV Blob]            ──► Sofortige Wiedergabe im Browser und verlustfreier WAV-Download
```

- **Bereitstellung statischer Binärdateien über Edge CDN:** Ressourcenintensive Binärdateien (WASM-Module von ONNX Runtime, eSpeak-Phonemdaten) werden weltweit über Cloudflare R2 (`VITE_PIPER_CDN_URL`) bereitgestellt, um Git-Klone und das anfängliche Bundle extrem schlank zu halten.
- **Lokale Modellspeicherung im Browser:** Jedes heruntergeladene Sprachmodell (`.onnx`) wird dauerhaft im `CacheStorage` des Browsers (`piper-voices-cache-v1`) hinterlegt. Bei Folgebesuchen startet die Sprachsynthese verzögerungsfrei und ganz ohne Datenvolumen.

### 2. Kokoro TTS Pipeline
- Ein isolierter Web Worker initialisiert das kompakte Modell `onnx-community/Kokoro-82M-v1.0-ONNX` über Transformers.js.
- Der Audiostrom wird in Chunks an die Benutzeroberfläche gestreamt, sodass Sie den Anfang bereits hören können, während der Rest noch generiert wird.
- Vollständige Unterstützung für Pause, Fortsetzen und flexible Geschwindigkeitsregulierung (0,5x bis 2,0x).

---

## Verwendeter Technologie-Stack (Tech Stack)

- **Frontend-Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **UI & Gestaltung:** [Tailwind CSS](https://tailwindcss.com/) + UI-Komponenten von [shadcn/ui](https://ui.shadcn.com/)
- **Sprachsynthese-Engines (TTS):**
  - [Piper](https://github.com/rhasspy/piper) über ONNX Runtime Web (`ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) Phonemisierer kompiliert in WebAssembly
  - [Kokoro](https://github.com/hexgrad/kokoro) über [`kokoro-js`](https://www.npmjs.com/package/kokoro-js)
- **Hardware-Beschleunigung:** WebGPU nativ mit Fallback auf multithreaded WASM SIMD Web Workers
- **Icons & Benachrichtigungen:** Lucide Icons und reaktive Toast-Meldungen mit Sonner

---

## Erste Schritte (Getting Started)

### Voraussetzungen
- Node.js 18 oder neuer.
- Ein aktueller Webbrowser mit WebAssembly-Unterstützung. Für maximale Geschwindigkeit via GPU-Beschleunigung wird Google Chrome oder Microsoft Edge mit aktivem WebGPU empfohlen.

### Installation

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Umgebungskonfiguration

Kopieren Sie die Beispieldatei `.env.example` nach `.env`:

```bash
cp .env.example .env
```

Tragen Sie die URL Ihres Cloudflare R2 Buckets oder CDNs für `VITE_PIPER_CDN_URL` ein:

```env
VITE_PIPER_CDN_URL="https://ihr-bucket.r2.dev"
```

### Entwicklungsserver starten

```bash
npm run dev
```

Rufen Sie [http://localhost:3000/](http://localhost:3000/) in Ihrem Browser auf.

### Produktions-Build erstellen

```bash
npm run build    # Kompiliert das optimierte Bundle in /dist
npm run preview  # Startet die lokale Vorschau des Produktions-Builds
```

---

## Häufig gestellte Fragen (FAQ)

### Kostenloser KI-Sprachgenerator & Text-to-Speech (TTS)

#### Ist dieser KI-Sprachgenerator wirklich 100% kostenlos und ohne Zeichenbegrenzung?
Ja. Es gibt weder monatliche Zeichenlimits, tägliche Wortgrenzen noch versteckte Abofallen. Da die neuronalen Netze vollständig auf der Hardware Ihres eigenen Endgeräts ausgeführt werden (über Ihre Grafikkarte mit WebGPU oder den Prozessor mit WASM), entstehen uns keine laufenden Server-Berechnungskosten. Diese Ersparnis geben wir direkt an Sie weiter: als dauerhaft kostenloses, unbegrenztes Werkzeug ohne Registrierungszwang.

#### Kann ich YouTube-Videos, TikToks und Reels mit diesen KI-Stimmen monetarisieren? (Faceless Channels)
Ja, absolut! Die offiziellen Richtlinien des YouTube-Partnerprogramms (AdSense), von Instagram und TikTok erlauben die Monetarisierung von Inhalten mit synthetischen Stimmen, sofern das Video einen eigenständigen redaktionellen Mehrwert bietet (originelles Skript, sorgfältiger Schnitt oder informativer Charakter). Unsere Sprachmodelle stammen aus Open-Source-Projekten mit freien Lizenzen (Apache 2.0 / MIT), sind komplett frei von kommerziellen Lizenzgebühren und optimal geeignet für automatisierte Kanäle (Faceless Channels), Dokumentationen, Erklärvideos und Social-Media-Clips.

#### Welche deutschen Stimmenmodelle stehen zur Verfügung?
Das Projekt bietet **10 deutsche Stimmenmodelle** (`de_DE`):
- **Thorsten** (high, medium, low): Die führende deutsche Open-Source-Stimme von Thorsten Müller. Authentisch, warm und exzellent verständlich.
- **Thorsten Emotional** (medium): Bietet 8 per Speaker-ID wählbare Emotionszustände: *neutral*, *amused* (heiter), *angry* (bestimmt/wütend), *disgusted*, *drunk*, *sleepy*, *surprised* (überrascht) und *whisper* (flüsternd).
- **MLS (Multilingual LibriSpeech)** (medium): Beinhaltet **236 einzelne deutsche Sprecher**, ideal für Dialoge, verteilte Rollen und Hörbücher mit verschiedenen Charakteren.
- **Eva K.** (x_low), **Karlsson** (low), **Kerstin** (low), **Pavoque** (low) und **Ramona** (low).

#### Werden meine Texte oder generierten Audios auf externe Server hochgeladen? (DSGVO & § 203 StGB)
Nein, zu keinem Zeitpunkt. Die Sprachsynthese findet ausschließlich im Arbeitsspeicher (RAM) Ihres Rechners innerhalb eines isolierten Web Workers statt. Es werden keine Daten an Cloud-Dienste übermittelt. Dies garantiert vollständige Konformität mit der **DSGVO (Datenschutz-Grundverordnung)** und wahrt die strengen Verschwiegenheitspflichten nach **§ 203 StGB** für Rechtsanwälte, Notare, Steuerberater und medizinisches Personal.

#### Kann ich das generierte Audio herunterladen und in Schnittprogrammen verwenden?
Ja. Sobald die Generierung abgeschlossen ist, können Sie die Audiospur als unkomprimierte, verlustfreie **16-Bit PCM WAV-Datei (22,05 kHz)** herunterladen. Die Datei enthält keinerlei störende Wasserzeichen und lässt sich direkt in Premiere Pro, DaVinci Resolve, CapCut oder Final Cut importieren.

#### Funktioniert der Sprachgenerator auch ohne aktive Internetverbindung (offline)?
Ja, ab der zweiten Nutzung. Beim ersten Auswählen einer Stimme speichert der Browser die Modelldatei (~20 MB bis ~60 MB) im lokalen `CacheStorage`. Bei allen nachfolgenden Aufrufen lädt das Modell ohne Netzwerkanfrage direkt von Ihrer Festplatte – ideal für das Arbeiten unterwegs im Zug oder im Flugzeug.

#### Warum setzt Privro auf WebGPU?
WebGPU ermöglicht es dem Browser, neuronale Tensorberechnungen direkt auf den Kernen Ihrer Grafikkarte (GPU) auszuführen. Das beschleunigt die Sprachsynthese um das 3- bis 5-Fache im Vergleich zur reinen CPU-Berechnung. Sollte Ihr Gerät WebGPU nicht unterstützen, schaltet die App nahtlos auf multithreaded WebAssembly (WASM) um.

---

### Audio in Text umwandeln & Whisper Transkription

#### Wie kann ich Audio- und Sprachaufnahmen kostenlos in Text umwandeln?
Sie können jede Audiodatei über das [kostenlose lokale Transkriptions-Tool von Privro](https://privro.com/de/transcribe) transkribieren. Ziehen Sie Ihre Datei (MP3, WAV, M4A, AAC, OGG, FLAC, OPUS oder WhatsApp-Sprachmemos) einfach per Drag & Drop in den Browser, wählen Sie die Sprache (oder die automatische Erkennung) und OpenAI Whisper wandelt das Gesprochene lokal in Text um. Anschließend exportieren Sie das Transkript mit Zeitstempeln.

#### Wie wandle ich MP4-Videos in Text oder Untertitel um?
Ziehen Sie Ihre MP4-, WebM- oder MOV-Videodatei einfach in die [lokale Whisper-Transkription](https://privro.com/de/transcribe) oder den [MP4-in-Text-Konverter](https://privro.com/de/mp4-to-text). Der Browser extrahiert die Audiospur direkt im Arbeitsspeicher und transkribiert jedes Wort sekundengenau – ohne langwierige Uploads riesiger Videodateien.

#### Gibt es Minutenlimits oder Beschränkungen der Dateigröße?
Nein. Im Gegensatz zu herkömmlichen Cloud-Transkriptionsdiensten, die kostenlose Nutzer auf 10 oder 15 Minuten pro Monat beschränken und teure Minutenpreise verlangen, bietet Privros lokale Transkription **weder Zeitlimits noch Dateibeschränkungen**. Sie können 2-minütige Sprachnotizen ebenso kostenlos transkribieren wie 4-stündige Universitätsvorlesungen oder mehrstündige Experteninterviews für Bachelor- und Masterarbeiten.

#### In welchen Dateiformaten kann das Transkript exportiert werden?
Sie können Ihr Transkript mit wortgenauen Zeitstempeln in 8 verschiedenen Formaten herunterladen:
- Reiner Text: `TXT`
- Untertitel: `SRT`, `VTT`
- Tabellen & Daten: `CSV`, `JSON`, `XLSX`
- Formatierte Dokumente: Word `DOCX`, `PDF`

---

### Caption Studio: Automatische Video-Untertitel

#### Kann ich automatische Untertitel ohne Wasserzeichen in Videos einbrennen?
Ja. Mit dem [Caption Studio](https://privro.com/de/caption-studio) können Sie Ihr Video hochladen, die Sprache automatisch per lokalem Whisper transkribieren lassen, Schriftarten, Farben und dynamische Karaoke-Animationen anpassen und die Untertitel fest ins Video einbrennen. Das Video-Encoding erfolgt direkt im Browser via FFmpeg bis hin zu gestochen scharfer **4K-Auflösung ohne Wasserzeichen**.

#### Welche Video-Seitenverhältnisse werden unterstützt?
Sie können untertitelte Videos passgenau für alle relevanten Plattformen zuschneiden:
- **9:16:** TikTok, Instagram Reels, YouTube Shorts
- **16:9:** Klassisches YouTube, Widescreen-Monitore und TV
- **1:1:** Quadratischer Instagram-Feed und LinkedIn
- **4:5:** Hochformatiger Instagram-Feed
- **3:2:** Fotografie und Desktop-Displays

---

### Plattform, Sprachen und Datenschutz

#### Wie viele Sprachen werden auf Privro unterstützt?
Privro ist in **22 Sprachen** verfügbar: Englisch, Spanisch, Portugiesisch, Italienisch, Deutsch, Französisch, Hindi, Indonesisch, Polnisch, Japanisch, Niederländisch, Schwedisch, Dänisch, Norwegisch, Finnisch, Tschechisch, Türkisch, Russisch, Koreanisch, Traditionelles Chinesisch, Arabisch und Hebräisch. Jede Sprache verfügt über eine eigene Startseite unter `https://privro.com/{locale}`.

#### Was bedeuten `https://privro.com/llms.txt` und `https://privro.com/llms-full.txt`?
[privro.com/llms.txt](https://privro.com/llms.txt) und [privro.com/llms-full.txt](https://privro.com/llms-full.txt) sind strukturierte, maschinenlesbare Spezifikationen nach dem modernen `llms.txt`-Standard. Sie liefern KI-Agenten, Suchmaschinen und Web-Crawlern geprüfte technische Angaben zu Privros Datenschutzarchitektur, Whisper-Modellen, FFmpeg-Profilen, neuronalen Piper-Stimmen und Preisen.

---

## Danksagung & Credits (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) und [Piper Voices](https://huggingface.co/rhasspy/piper-voices) von Michael Hansen und dem Rhasspy-Projekt. Besonderer Dank gilt Thorsten Müller für seinen herausragenden deutschen Sprachdatensatz.
- [Kokoro TTS](https://github.com/hexgrad/kokoro) Modell von Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) und [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) von Microsoft.
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) phonetische Bibliothek.

---

## Lizenz (License)

Lizenziert unter der Apache-Lizenz 2.0. Weitere Informationen finden Sie in der Datei [LICENSE](LICENSE).
