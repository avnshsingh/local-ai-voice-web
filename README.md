# Privro AI Voice - Free Local AI Voice & Text to Speech Generator

In-browser, zero-upload neural text-to-speech generator for [Privro AI](https://privro.com). Paste text, choose a voice model, and generate natural speech entirely on your device. Audio is synthesized locally with Web Workers and WebGPU — no audio or text is ever uploaded to any server.

- **Live Application:** [voice.privro.com](https://voice.privro.com)
- **Privro Voice Studio:** [privro.com/piper-voice](https://privro.com/piper-voice)
- **Machine-Readable Metadata:** [privro.com/llms.txt](https://privro.com/llms.txt)

---

## Dual Neural TTS Engines

This project features two high-performance neural voice engines running entirely client-side:

1. **Piper TTS (Primary Engine):**
   - High-speed, local neural speech synthesis powered by ONNX Runtime Web and eSpeak NG.
   - **300+ voices across 40+ languages (58 locales)**.
   - Hardware-accelerated with **WebGPU**, with automatic fallback to multi-threaded **WebAssembly (WASM)**.
   - Multi-speaker voice models with selectable speaker IDs.
   - Quality tiers from lightweight (`x_low`, `low`) to high-fidelity (`medium`, `high`).
   - Browser caching via `CacheStorage`: voice models (~20–60 MB) download once and run offline thereafter.
   - Lossless 16-bit PCM WAV (22.05 kHz) audio download.

2. **Kokoro TTS (Secondary Engine):**
   - Natural-sounding speech produced by [Kokoro](https://github.com/hexgrad/kokoro) (`Kokoro-82M`) through [`kokoro-js`](https://www.npmjs.com/package/kokoro-js).
   - Natural American and British voice styles.
   - Real-time audio streaming in chunks for instant playback before full generation finishes.
   - Play, pause, resume, and speaking rate adjustment.

---

## Privro Tools

Privro is a browser suite of local-first creator and productivity tools. Local tools run 100% on your device with no signup, no API key, no file uploads, and no usage quotas.

| Tools & Pages | What it does |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Free Local Transcription](https://privro.com/transcribe) | On-device speech-to-text with OpenAI Whisper (Tiny to Large Turbo) across 99 languages. No upload, no quota, and no account required. |
| [MP4 to Text Converter](https://privro.com/mp4-to-text) | Free online MP4 to text converter. Converts video to text transcripts (TXT, DOCX, PDF) or SRT/VTT captions with local Whisper transcription. |
| [Caption Studio Video Subtitle Editor](https://privro.com/caption-studio) | Add custom subtitles and karaoke animations to videos. Features client-side FFmpeg video rendering up to 4K resolution across 5 aspect ratios. |
| [Piper Neural Text to Speech](https://privro.com/piper-voice) | In-browser multilingual neural text-to-speech studio on Privro. 300+ voices, multi-speaker selection, WebGPU acceleration, and lossless WAV export. |
| [Free Text to Speech Generator](https://privro.com/text-to-speech) | Fast, private online text-to-speech converter. Converts pasted text into clear spoken audio locally in the browser with zero cloud dependencies. |
| [Local AI Voice App](https://voice.privro.com) | Standalone dual-engine neural voice generator (Piper TTS & Kokoro TTS) running entirely in the browser (this repository). |
| [Otter.ai Alternative](https://privro.com/alternatives/otter) | Compare Privro's free on-device browser transcription with unlimited minutes against Otter's cloud meeting bot and per-seat fees. |
| [Happy Scribe Alternative](https://privro.com/alternatives/happyscribe) | Compare Privro's zero-upload Caption Studio and local Whisper transcription against Happy Scribe cloud plans and minute restrictions. |
| [Privro AI Pricing & Plans](https://privro.com/pricing) | Free forever on-device tools, plus optional Cloud transcription subscriptions and non-expiring pay-as-you-go credit packs. |

---

## Text to Speech on Privro

Privro provides zero-upload, client-side text-to-speech through dedicated experiences designed for privacy, speed, and ease of use:

- **[Piper Voice Studio](https://privro.com/piper-voice):** The full-featured interactive voice studio embedded inside Privro. Search and filter through 300+ voices across 40+ languages, select speaker IDs for multi-speaker models, toggle between WebGPU and WASM runtimes, pre-cache models, and export pristine WAV audio files.
- **[Text to Speech Generator](https://privro.com/text-to-speech):** Privro's online text-to-speech portal, highlighting key capabilities, guides, and quick generation for creators and developers.
- **[Local AI Voice App](https://voice.privro.com):** The standalone progressive web application built from this repository, offering tabbed switching between the Piper TTS neural generator and the Kokoro TTS streaming engine.

### On-Device Privacy Architecture
All voice synthesis executes client-side using browser Web Workers:
- **No text is sent to an external server.**
- **No audio is recorded or stored remotely.**
- **No API keys or logins are required.**
- **Works offline** once the voice model and runtime binaries are cached in your browser.

---

## Machine-Readable Specifications (`llms.txt`)

Privro publishes a comprehensive, machine-readable platform overview at:

**[https://privro.com/llms.txt](https://privro.com/llms.txt)**

This file provides LLM assistants, autonomous agents, and crawlers with structured information about Privro's tools, privacy guarantees, technical specifications (including Whisper model sizes, FFmpeg export profiles, and Piper neural voice capabilities), Cloud transcription parameters, pricing tiers, and internationalized routing.

---

## Languages Available on Privro

Privro is localized across **22 languages**. The English edition is served from the root domain, while each localized edition is accessible at its dedicated language path:

| Language | Native Name | Code | Homepage |
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

> **Note:** Core tools such as [Caption Studio](https://privro.com/caption-studio) and [Piper Voice](https://privro.com/piper-voice) are fully localized across all 22 languages.

---

## Languages Supported by Piper TTS

Piper TTS includes **300+ open-source neural voice checkpoints** covering **58 language and regional codes** across 42 language families. All voices can be loaded directly in the browser:

| Language | Native Name | Code | Region / Country | Available Voices |
| ------------------- | ------------------------- | --------- | -------------------------------- | ---------------- |
| Arabic | العربية | `ar_JO` | Jordan | 2 voices |
| Bulgarian | български | `bg_BG` | Bulgaria | 1 voice |
| Bengali | বাংলা | `bn_BD` | Bangladesh | 1 voice |
| Catalan | Català | `ca_ES` | Spain | 3 voices |
| Czech | Čeština | `cs_CZ` | Czech Republic | 3 voices |
| Welsh | Cymraeg | `cy_GB` | Great Britain | 2 voices |
| Danish | Dansk | `da_DK` | Denmark | 1 voice |
| German | Deutsch | `de_DE` | Germany | 10 voices |
| Greek | Ελληνικά | `el_GR` | Greece | 3 voices |
| English (UK) | English (UK) | `en_GB` | Great Britain | 11 voices |
| English (US) | English (US) | `en_US` | United States | 27 voices |
| Spanish (Argentina) | Español (Argentina) | `es_AR` | Argentina | 1 voice |
| Spanish (Spain) | Español (España) | `es_ES` | Spain | 5 voices |
| Spanish (Mexico) | Español (México) | `es_MX` | Mexico | 3 voices |
| Estonian | eesti | `et_EE` | Estonia | 1 voice |
| Basque | Euskara | `eu_ES` | Spain | 2 voices |
| Persian / Farsi | فارسی | `fa_IR` | Iran | 5 voices |
| Finnish | Suomi | `fi_FI` | Finland | 2 voices |
| French | Français | `fr_FR` | France | 7 voices |
| Hebrew | עִבְרִית | `he_IL` | Israel | 1 voice |
| Hindi | हिन्दी | `hi_IN` | India | 3 voices |
| Hungarian | Magyar | `hu_HU` | Hungary | 3 voices |
| Armenian | հայերեն | `hy_AM` | Armenia | 1 voice |
| Indonesian | Bahasa Indonesia | `id_ID` | Indonesia | 1 voice |
| Icelandic | íslenska | `is_IS` | Iceland | 4 voices |
| Italian | Italiano | `it_IT` | Italy | 4 voices |
| Japanese | 日本語 | `ja_JP` | Japan | 1 voice |
| Georgian | ქართული ენა | `ka_GE` | Georgia | 1 voice |
| Kazakh | қазақша | `kk_KZ` | Kazakhstan | 3 voices |
| Korean | 한국어 | `ko_KR` | South Korea | 1 voice |
| Kurdish (Kurmanji) | Kurmancî | `ku_TR` | Turkey | 1 voice |
| Luxembourgish | Lëtzebuergesch | `lb_LU` | Luxembourg | 1 voice |
| Lithuanian | Lietuvių | `lt_LT` | Lithuania | 1 voice |
| Latvian | Latviešu | `lv_LV` | Latvia | 1 voice |
| Malayalam | മലയാളം | `ml_IN` | India | 2 voices |
| Marathi | मराठी | `mr_IN` | India | 1 voice |
| Nepali | नेपाली | `ne_NP` | Nepal | 3 voices |
| Dutch (Belgium) | Nederlands (België) | `nl_BE` | Belgium | 4 voices |
| Dutch (Netherlands)| Nederlands (Nederland) | `nl_NL` | Netherlands | 6 voices |
| Norwegian | Norsk | `no_NO` | Norway | 2 voices |
| Polish | Polski | `pl_PL` | Poland | 5 voices |
| Portuguese (Brazil) | Português (Brasil) | `pt_BR` | Brazil | 4 voices |
| Portuguese (Portugal)| Português (Portugal) | `pt_PT` | Portugal | 1 voice |
| Romanian | Română | `ro_RO` | Romania | 1 voice |
| Russian | Русский | `ru_RU` | Russia | 4 voices |
| Slovak | Slovenčina | `sk_SK` | Slovakia | 1 voice |
| Slovenian | Slovenščina | `sl_SI` | Slovenia | 1 voice |
| Albanian | shqip | `sq_AL` | Albania | 1 voice |
| Serbian | srpski | `sr_RS` | Serbia | 1 voice |
| Swedish | Svenska | `sv_SE` | Sweden | 3 voices |
| Swahili | Kiswahili | `sw_CD` | DR Congo | 1 voice |
| Telugu | తెలుగు | `te_IN` | India | 3 voices |
| Thai | ไทย | `th_TH` | Thailand | 1 voice |
| Turkish | Türkçe | `tr_TR` | Turkey | 1 voice |
| Ukrainian | украї́нська мо́ва | `uk_UA` | Ukraine | 5 voices |
| Urdu | اردو | `ur_PK` | Pakistan | 2 voices |
| Vietnamese | Tiếng Việt | `vi_VN` | Vietnam | 3 voices |
| Chinese (Simplified)| 简体中文 | `zh_CN` | China | 4 voices |

---

## Technical Architecture & How It Works

### 1. Piper TTS Pipeline
```
[User Text]
    │
    ▼
[Web Worker: eSpeak NG Phonemizer]  ──► Converts text to phonetic phoneme IDs
    │
    ▼
[Web Worker: ONNX Runtime Web]      ──► Runs neural voice model (.onnx) via WebGPU / WASM
    │
    ▼
[PCM Audio Buffer]                  ──► Assembles 16-bit PCM 22.05 kHz audio stream
    │
    ▼
[Web Audio API / WAV Blob]          ──► Instant playback and lossless WAV file download
```

- **Offloaded CDN Runtime:** Heavy static binaries (ONNX runtime WASM files, eSpeak phonemizer data) are served from Cloudflare R2 edge storage (`VITE_PIPER_CDN_URL`) to keep deployment bundles and git clones lightweight.
- **Model Storage:** Downloaded `.onnx` voice models and configurations are cached in the browser's persistent `CacheStorage` (`piper-voices-cache-v1`), enabling instant synthesis on repeat visits without network downloads.

### 2. Kokoro TTS Pipeline
- A dedicated web worker initializes the `onnx-community/Kokoro-82M-v1.0-ONNX` model via Transformers.js.
- Audio chunks stream back to the UI in real time, allowing immediate playback while later sentences continue to synthesize.
- Supports pause, resume, and variable speaking rate.

---

## Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/)
- **TTS Engines:**
  - [Piper](https://github.com/rhasspy/piper) via ONNX Runtime Web (`ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) WebAssembly phonemizer
  - [Kokoro](https://github.com/hexgrad/kokoro) via [`kokoro-js`](https://www.npmjs.com/package/kokoro-js)
- **Acceleration:** WebGPU with fallback to multi-threaded WASM SIMD Web Workers
- **Icons & Feedback:** Lucide Icons & Sonner toast notifications

---

## Getting Started

### Prerequisites
- Node.js 18 or later
- A modern web browser with WebAssembly support. For maximum speed, Chrome or Edge with WebGPU is recommended.

### Installation

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Environment Configuration

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Set `VITE_PIPER_CDN_URL` to your Cloudflare R2 CDN bucket endpoint:

```env
VITE_PIPER_CDN_URL="https://your-bucket-subdomain.r2.dev"
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) in your browser.

### Production Build

```bash
npm run build    # Compiles production bundle to /dist
npm run preview  # Previews production build locally
```

---

## Credits & Attributions

- [Piper](https://github.com/rhasspy/piper) and [Piper Voices](https://huggingface.co/rhasspy/piper-voices) by Michael Hansen and the Rhasspy project.
- [Kokoro TTS](https://github.com/hexgrad/kokoro) model by Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web), and [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) by Microsoft.
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) phonetic library.

---

## License

Apache License 2.0. See [LICENSE](LICENSE) for details.
