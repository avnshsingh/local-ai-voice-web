<div align="center">

[![Language: English](https://img.shields.io/badge/Language-English-blue?style=for-the-badge)](#)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/avnshsingh/local-ai-voice-web)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-green?style=for-the-badge)](LICENSE)

<br/>

**Translations / Read in other languages:**

[English](README.md) • [Español](README.es.md) • [Português](README.pt.md) • [Italiano](README.it.md) • [Deutsch](README.de.md) • [Français](README.fr.md) • [हिन्दी](README.hi.md) • [Bahasa Indonesia](README.id.md) • [Polski](README.pl.md) • [日本語](README.ja.md) • [Nederlands](README.nl.md) • [Svenska](README.sv.md) • [Dansk](README.da.md) • [Norsk](README.no.md) • [Suomi](README.fi.md) • [Čeština](README.cs.md) • [Türkçe](README.tr.md) • [Русский](README.ru.md) • [한국어](README.ko.md) • [繁體中文](README.zh-tw.md) • [العربية](README.ar.md) • [עברית](README.he.md)

</div>

# Privro AI Voice - Free Local AI Voice & Text to Speech Generator

In-browser, zero-upload neural text-to-speech generator for [Privro AI](https://privro.com). Paste text, choose a voice model, and generate natural speech entirely on your device. Audio is synthesized locally with Web Workers and WebGPU — no audio or text is ever uploaded to any server.

- **Live Application:** [voice.privro.com](https://voice.privro.com)
- **Privro Voice Studio:** [privro.com/piper-voice](https://privro.com/piper-voice)
- **Machine-Readable Metadata:** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

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

## Machine-Readable Specifications (`llms.txt` & `llms-full.txt`)

Privro publishes comprehensive, machine-readable platform overview specifications at:

- **Summary Index:** [https://privro.com/llms.txt](https://privro.com/llms.txt)
- **Full Specification:** [https://privro.com/llms-full.txt](https://privro.com/llms-full.txt)

These files provide LLM assistants, autonomous agents, and crawlers with structured information about Privro's tools, privacy guarantees, technical specifications (including Whisper model sizes, FFmpeg export profiles, and Piper neural voice capabilities), Cloud transcription parameters, pricing tiers, and internationalized routing.

---

## Languages Available on Privro & Localized Documentation

Privro is localized across **22 languages**. Complete project documentation and guides are available in all 22 languages:

| # | Language | Native Name | Code | Country / Region | Localized README | Privro Live Homepage |
| :-: | :--- | :--- | :---: | :--- | :--- | :--- |
| 1 | English | English | `en` | United States (US) | [README.md](README.md) | [https://privro.com/](https://privro.com/) |
| 2 | Spanish | Español | `es` | Spain (ES) | [README.es.md](README.es.md) | [https://privro.com/es](https://privro.com/es) |
| 3 | Portuguese | Português | `pt` | Brazil (BR) | [README.pt.md](README.pt.md) | [https://privro.com/pt](https://privro.com/pt) |
| 4 | Italian | Italiano | `it` | Italy (IT) | [README.it.md](README.it.md) | [https://privro.com/it](https://privro.com/it) |
| 5 | German | Deutsch | `de` | Germany (DE) | [README.de.md](README.de.md) | [https://privro.com/de](https://privro.com/de) |
| 6 | French | Français | `fr` | France (FR) | [README.fr.md](README.fr.md) | [https://privro.com/fr](https://privro.com/fr) |
| 7 | Hindi | हिन्दी | `hi` | India (IN) | [README.hi.md](README.hi.md) | [https://privro.com/hi](https://privro.com/hi) |
| 8 | Indonesian | Bahasa Indonesia | `id` | Indonesia (ID) | [README.id.md](README.id.md) | [https://privro.com/id](https://privro.com/id) |
| 9 | Polish | Polski | `pl` | Poland (PL) | [README.pl.md](README.pl.md) | [https://privro.com/pl](https://privro.com/pl) |
| 10 | Japanese | 日本語 | `ja` | Japan (JP) | [README.ja.md](README.ja.md) | [https://privro.com/ja](https://privro.com/ja) |
| 11 | Dutch | Nederlands | `nl` | Netherlands (NL) | [README.nl.md](README.nl.md) | [https://privro.com/nl](https://privro.com/nl) |
| 12 | Swedish | Svenska | `sv` | Sweden (SE) | [README.sv.md](README.sv.md) | [https://privro.com/sv](https://privro.com/sv) |
| 13 | Danish | Dansk | `da` | Denmark (DK) | [README.da.md](README.da.md) | [https://privro.com/da](https://privro.com/da) |
| 14 | Norwegian | Norsk | `no` | Norway (NO) | [README.no.md](README.no.md) | [https://privro.com/no](https://privro.com/no) |
| 15 | Finnish | Suomi | `fi` | Finland (FI) | [README.fi.md](README.fi.md) | [https://privro.com/fi](https://privro.com/fi) |
| 16 | Czech | Čeština | `cs` | Czech Republic (CZ) | [README.cs.md](README.cs.md) | [https://privro.com/cs](https://privro.com/cs) |
| 17 | Turkish | Türkçe | `tr` | Turkey (TR) | [README.tr.md](README.tr.md) | [https://privro.com/tr](https://privro.com/tr) |
| 18 | Russian | Русский | `ru` | Russia (RU) | [README.ru.md](README.ru.md) | [https://privro.com/ru](https://privro.com/ru) |
| 19 | Korean | 한국어 | `ko` | South Korea (KR) | [README.ko.md](README.ko.md) | [https://privro.com/ko](https://privro.com/ko) |
| 20 | Traditional Chinese | 繁體中文 | `zh-tw` | Taiwan (TW) | [README.zh-tw.md](README.zh-tw.md) | [https://privro.com/zh-tw](https://privro.com/zh-tw) |
| 21 | Arabic | العربية | `ar` | Saudi Arabia (SA) | [README.ar.md](README.ar.md) | [https://privro.com/ar](https://privro.com/ar) |
| 22 | Hebrew | עברית | `he` | Israel (IL) | [README.he.md](README.he.md) | [https://privro.com/he](https://privro.com/he) |

> **Note:** Core tools such as the [Transcription Web App](https://privro.com/transcribe), [Caption Studio](https://privro.com/caption-studio), and [Piper Voice](https://privro.com/piper-voice) are fully localized across all 22 languages.

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
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
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

## Frequently Asked Questions (FAQ)

### Free AI Voice & Text to Voice Generator

#### Is this AI voice generator completely free?
Yes. There are no word caps, character counts, daily limits, or subscriptions for generating voice audio locally. Because the neural models run entirely inside your browser using your own hardware (CPU or GPU), we don't have server compute bills for local generation and don't charge you for it.

#### Does the text-to-voice generator upload my text or audio to a server?
No. Everything stays strictly on your computer. When you paste text and hit Generate, the neural network synthesizes the audio inside a background Web Worker on your device. Neither your text nor the generated speech is ever sent over the internet.

#### How many languages and voices does the voice generator support?
- **Piper TTS:** Supports over **300 neural voices** across **40+ languages (58 regional accents and dialects)**, including American English, British English, Spanish, French, German, Hindi, Japanese, Chinese, Arabic, Portuguese, and dozens more. Many voice models also include multiple selectable speaker IDs.
- **Kokoro TTS:** Generates expressive English speech with an 82-million parameter model and streaming chunk playback.

#### Can I download the generated voice audio file?
Yes. Once generation finishes, you can download the full audio track as a standard, lossless **16-bit PCM WAV file (22.05 kHz)**. You can use it in video edits, podcasts, voiceovers, or presentations without watermarks.

#### Does the voice generator work offline?
Yes, after the first load. The first time you pick a voice, your browser downloads the model file (~20 MB to ~60 MB) and saves it to your browser's local CacheStorage. On subsequent visits, the model loads instantly from disk with zero network downloads, allowing you to generate speech even without an internet connection.

#### Why is WebGPU used for text-to-speech?
WebGPU allows the browser to run neural tensor operations directly on your graphics card (GPU). This makes speech synthesis 3x to 5x faster than standard CPU processing. If your browser or device doesn't support WebGPU, the app automatically switches to multi-threaded WebAssembly (WASM) on your CPU so it still works everywhere.

---

### Free Audio to Text, Video to Text & Transcription Generator

#### How do I convert audio to text for free?
You can convert any spoken audio file to text using [Privro's free local transcription tool](https://privro.com/transcribe). Simply drag and drop your audio file (MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, or WEBM), select your language or let auto-detect find it, and Whisper transcribes it in your browser. When finished, you can export your text or subtitle file immediately.

#### How do I convert video to text for free?
To convert video to text, drag and drop any MP4, WEBM, or MOV video into [Privro Local Transcription](https://privro.com/transcribe) or the dedicated [MP4 to text converter](https://privro.com/mp4-to-text). The browser extracts the audio track and transcribes every spoken word into text, timestamps, and SRT/VTT captions without uploading your heavy video file.

#### How does the free transcription generator work?
The transcription generator runs OpenAI Whisper directly on your machine via WebAssembly (WASM):
1. **Choose a model:** Pick between Tiny (~120 MB) for maximum speed, Base (~206 MB) for everyday balance, Small, Medium, or Large Turbo (~1.6 GB) for maximum accuracy on tough accents.
2. **Process locally:** The model decodes audio chunks in memory and outputs synchronized words and sentences.
3. **Download:** Export your completed transcript as TXT, Word DOCX, PDF, or subtitle sidecars (SRT, VTT).

#### Is there a minute limit or file size cap on free transcription?
No. Unlike cloud transcription services that restrict free users to 10 or 15 minutes per month or charge per-minute fees, Privro's local transcription has **zero minute limits and zero file count quotas**. You can transcribe 5-minute voice memos or 4-hour lectures for free because your device handles the processing.

#### Can I transcribe phone voice memos and interview recordings?
Yes. You can import voice memos from iPhone (M4A/AAC), Android voice recorders (MP3/WAV/M4A), Zoom recordings, and dictaphone files. You can also record directly into the browser using your microphone.

#### How many languages does the transcription tool support?
Whisper supports **99 languages** with automatic language identification or manual selection. Major languages include English, Spanish, French, German, Hindi, Mandarin, Japanese, Korean, Portuguese, Italian, Dutch, Russian, Arabic, Turkish, Polish, Vietnamese, and 80+ more.

#### How can transcription run locally without uploading my files?
Most transcription websites require you to upload your audio or video to remote cloud servers, which can take a long time to upload and creates serious privacy risks for sensitive legal recordings, proprietary business meetings, journalist interviews, or medical consultations.

Privro compiles OpenAI's Whisper model into WebAssembly that runs inside your browser sandbox. Your audio file is decoded in your computer's RAM, transcribed locally, and never transmitted over the network.

#### What export formats are available for transcripts?
You can download your finished transcript with word-level timestamps in 8 different formats:
- Plain text: `TXT`
- Subtitles: `SRT`, `VTT`
- Data & spreadsheets: `CSV`, `JSON`, `XLSX`
- Formatted documents: `DOCX`, `PDF`

---

### Video Captions & Subtitle Studio

#### Can I add and burn captions into my videos for free?
Yes. [Caption Studio](https://privro.com/caption-studio) lets you upload video, automatically transcribe speech with on-device Whisper, style your subtitles, and burn them directly into the video. Video encoding runs entirely in your browser using client-side FFmpeg, exporting videos up to **4K resolution** with **no watermarks**.

#### How many languages does Caption Studio support?
- **Interface & Editor:** Fully localized in **22 languages** (English, Spanish, Portuguese, German, French, Hindi, Japanese, and more).
- **Subtitles & Transcription:** Transcribes and synchronizes spoken dialogue across **99 languages** via Whisper.

#### What aspect ratios does Caption Studio support?
You can crop and format captioned videos for all major social media platforms:
- **9:16:** TikTok, Instagram Reels, YouTube Shorts
- **16:9:** YouTube, Vimeo, landscape video
- **1:1:** Instagram square feed, LinkedIn
- **4:5:** Instagram portrait feed
- **3:2:** Photography and desktop displays

---

### Platform, Languages & Privacy

#### How many languages are available across the Privro platform?
Privro is localized across **22 languages**: English, Spanish, Portuguese, Italian, German, French, Hindi, Indonesian, Polish, Japanese, Dutch, Swedish, Danish, Norwegian, Finnish, Czech, Turkish, Russian, Korean, Traditional Chinese, Arabic, and Hebrew. Every language has its own localized homepage at `https://privro.com/{locale}`.

#### What is `https://privro.com/llms.txt` and `https://privro.com/llms-full.txt`?
[privro.com/llms.txt](https://privro.com/llms.txt) and [privro.com/llms-full.txt](https://privro.com/llms-full.txt) are structured, machine-readable documentation files following the emerging `llms.txt` standard. They provide AI assistants, LLMs, and web crawlers with an accurate, verified summary and comprehensive technical specifications of Privro's on-device privacy model, Whisper model specifications, Caption Studio capabilities, Piper neural voices, and pricing tiers.

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
