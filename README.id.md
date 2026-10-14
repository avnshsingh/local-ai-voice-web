<div align="center">

[![Language: Indonesian](https://img.shields.io/badge/Language-Bahasa%20Indonesia%20(Indonesian)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/avnshsingh/local-ai-voice-web)

<br/>

**Translations / Read in other languages:**

[English](README.md) • [Español](README.es.md) • [Português](README.pt.md) • [Italiano](README.it.md) • [Deutsch](README.de.md) • [Français](README.fr.md) • [हिन्दी](README.hi.md) • [Bahasa Indonesia](README.id.md) • [Polski](README.pl.md) • [日本語](README.ja.md) • [Nederlands](README.nl.md) • [Svenska](README.sv.md) • [Dansk](README.da.md) • [Norsk](README.no.md) • [Suomi](README.fi.md) • [Čeština](README.cs.md) • [Türkçe](README.tr.md) • [Русский](README.ru.md) • [한국어](README.ko.md) • [繁體中文](README.zh-tw.md) • [العربية](README.ar.md) • [עברית](README.he.md)

</div>

# Privro AI Voice - Generator Suara AI & Teks ke Suara (Text-to-Speech) Gratis di Browser

Generator teks ke suara (Text-to-Speech / TTS) berbasis jaringan neural langsung di browser dengan teknologi bebas upload untuk [Privro AI](https://privro.com/id). Masukkan teks Anda, pilih model suara, dan hasilkan audio narasi vokal alami yang realistis seutuhnya di perangkat Anda sendiri. Seluruh audio disintesis secara lokal menggunakan Web Workers dan akselerasi WebGPU — tidak ada teks maupun rekaman suara yang dikirim ke server eksternal.

- **Aplikasi Web Langsung:** [voice.privro.com](https://voice.privro.com)
- **Studio Vokal Privro:** [privro.com/id/piper-voice](https://privro.com/id/piper-voice)
- **Metadata Ramah Mesin & AI:** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## Dua Mesin Suara Neural di Browser (Dual Neural TTS Engines)

Proyek ini mengintegrasikan dua mesin sintesis suara neural berperforma tinggi yang berjalan 100% di sisi klien (di dalam peramban Anda):

1. **Piper TTS (Mesin Utama):**
   - Sintesis suara neural lokal berkecepatan tinggi yang didukung oleh ONNX Runtime Web dan eSpeak NG.
   - **Lebih dari 300 model suara dalam 40+ bahasa (58 varian wilayah)**, termasuk model suara Bahasa Indonesia asli (`id_ID-indotts-low`).
   - Akselerasi perangkat keras dengan **WebGPU**, lengkap dengan peralihan otomatis ke **WebAssembly (WASM)** multi-thread dengan dukungan SIMD.
   - Model multi-locutor dengan pemilihan ID pembicara (Speaker ID).
   - Tingkatan kualitas fleksibel: mulai dari profil ultra-ringan (`x_low`, `low`) hingga rekaman vokal fidelitas studio (`medium`, `high`).
   - Caching cerdas di browser melalui `CacheStorage`: model suara (~20–60 MB) hanya diunduh satu kali dan setelah itu berfungsi 100% offline tanpa internet.
   - Pengunduhan langsung file audio format **PCM WAV 16-bit tanpa kompresi / lossless (22.05 kHz)**.

2. **Kokoro TTS (Mesin Sekunder):**
   - Karakter suara ekspresif dan sangat humanis dari model [Kokoro](https://github.com/hexgrad/kokoro) (`Kokoro-82M`) melalui pustaka [`kokoro-js`](https://www.npmjs.com/package/kokoro-js).
   - Pilihan gaya vokal alami bahasa Inggris aksen Amerika dan Inggris Raya.
   - Streaming audio per potongan (*chunk streaming*) secara real-time: dengarkan kalimat pembuka seketika tanpa perlu menunggu seluruh teks selesai diproses.
   - Kontrol pemutaran lengkap: putar (*play*), jeda (*pause*), lanjutkan, dan pengaturan tempo kecepatan bicara (0.5x hingga 2.0x).

---

## Alat Privro (Privro Tools)

Privro adalah rangkaian alat produktivitas dan kreasi konten berbasis peramban dengan filosofi *local-first*. Seluruh alat lokal bekerja 100% di perangkat Anda: tanpa registrasi, tanpa login, tanpa kartu kredit, tanpa kunci API, dan tanpa batasan kuota file atau menit.

| Alat & Halaman | Deskripsi & Manfaat Utama |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Transkripsi Audio Lokal Gratis (Whisper AI)](https://privro.com/id/transcribe) | Ubah rekaman suara ke teks di perangkat Anda dengan OpenAI Whisper (dari Tiny hingga Large Turbo) dalam 99 bahasa. Bebas upload, durasi menit tak terbatas, dan tanpa akun. |
| [Konverter MP4 ke Teks](https://privro.com/id/mp4-to-text) | Konverter video ke teks online gratis. Mengubah video MP4, MOV, atau WebM menjadi transkrip dokumen (TXT, DOCX, PDF) atau file subtitle (SRT, VTT) secara lokal via Whisper. |
| [Caption Studio - Editor Subtitle Video Otomatis](https://privro.com/id/caption-studio) | Buat subtitle otomatis beranimasi dinamis gaya TikTok dan karaoke. Rendering video berbasis FFmpeg langsung di browser hingga resolusi 4K tanpa watermark sama sekali. |
| [Piper Voice Studio (Teks ke Suara Neural)](https://privro.com/id/piper-voice) | Studio teks ke suara multibahasa terlengkap di Privro. 300+ suara, pilihan ID pembicara, akselerasi WebGPU, dan ekspor audio WAV jernih tanpa batas karakter. |
| [Generator Teks ke Suara Gratis](https://privro.com/id/text-to-speech) | Generator suara teks ke audio online yang cepat, aman, dan privat. Ubah teks menjadi suara manusia alami langsung di browser tanpa ketergantungan server cloud. |
| [Aplikasi Web Suara AI Lokal](https://voice.privro.com) | Aplikasi web mandiri dengan mesin suara ganda (Piper TTS & Kokoro TTS) yang berjalan seutuhnya di browser perangkat Anda (repositori ini). |
| [Alternatif Otter.ai (Gratis & Tanpa Batas Menit)](https://privro.com/id/alternatives/otter) | Bandingkan transkripsi lokal gratis tanpa batas menit di browser Privro dengan bot rapat cloud dan biaya langganan bulanan mahal dari Otter.ai. |
| [Alternatif Happy Scribe (Bebas Upload)](https://privro.com/id/alternatives/happyscribe) | Bandingkan Caption Studio dan transkripsi lokal Whisper Privro (nol upload) dengan batasan kuota menit dan sistem prabayar dari Happy Scribe. |
| [Harga & Paket Berlangganan Privro AI](https://privro.com/id/pricing) | Alat lokal gratis selamanya, ditambah opsi layanan transkripsi cloud kilat dan paket kuota kredit sekali bayar tanpa tanggal kedaluwarsa. |

---

## Teks ke Suara di Privro (Text to Speech on Privro)

Privro menyediakan pengalaman sintesis suara tanpa upload di sisi klien, dirancang khusus untuk kecepatan, kerahasiaan data, dan kemudahan penggunaan:

- **[Piper Voice Studio](https://privro.com/id/piper-voice):** Studio suara interaktif lengkap di Privro. Cari dan filter 300+ pilihan suara dalam 40+ bahasa, pilih karakter speaker pada model multi-suara, beralih antara mesin WebGPU dan WASM, simpan model di cache lokal, serta unduh audio WAV murni berkualitas studio.
- **[Generator Teks ke Suara](https://privro.com/id/text-to-speech):** Portal web sederhana untuk konversi cepat teks artikel, materi presentasi, modul pembelajaran, atau naskah video pendek menjadi audio suara narator.
- **[Aplikasi Web Suara AI Lokal](https://voice.privro.com):** Progressive Web App (PWA) sumber terbuka dari repositori ini, dilengkapi tab terpisah untuk beralih antara generator neural Piper TTS dan streaming Kokoro TTS.

### Arsitektur Privasi Lokal di Perangkat (On-Device Privacy)
Seluruh proses pengolahan suara dieksekusi di perangkat Anda menggunakan Web Workers browser:
- **Tidak ada teks yang dikirim ke server eksternal.**
- **Tidak ada rekaman suara yang disimpan atau direkam di cloud.**
- **Tidak perlu registrasi akun, kata sandi, maupun kunci API.**
- **Berfungsi 100% offline** setelah file model suara tersimpan di dalam cache peramban.
- **Kepatuhan Penuh terhadap UU Perlindungan Data Pribadi (UU PDP No. 27 Tahun 2022)** dan standar privasi internasional.

---

## Spesifikasi Terstruktur untuk AI & Mesin (`llms.txt` & `llms-full.txt`)

Privro menyediakan dokumentasi terstruktur yang dapat dibaca oleh sistem kecerdasan buatan (*machine-readable*) mengikuti standar `llms.txt`:

- **Indeks Ringkasan:** [https://privro.com/llms.txt](https://privro.com/llms.txt)
- **Spesifikasi Teknis Lengkap:** [https://privro.com/llms-full.txt](https://privro.com/llms-full.txt)

Dokumen ini memudahkan asisten AI, agen otonom, dan web crawler untuk memahami arsitektur privasi lokal Privro, ukuran model Whisper, profil rendering FFmpeg, ragam model suara Piper, serta struktur tautan internasional.

---

## Bahasa yang Tersedia di Privro (Languages Available on Privro)

Privro telah diterjemahkan dan disesuaikan ke dalam **22 bahasa resmi**. Versi bahasa Inggris berada pada domain utama, sedangkan setiap versi bahasa memiliki jalur URL tersendiri:

| Bahasa (Language) | Nama Asli | Kode | Alamat Halaman Utama (Homepage) |
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

> **Catatan:** Seluruh alat unggulan Privro – termasuk [Aplikasi Transkripsi](https://privro.com/id/transcribe), [Caption Studio](https://privro.com/id/caption-studio), dan [Piper Voice](https://privro.com/id/piper-voice) – telah diterjemahkan secara lengkap dalam 22 bahasa.

---

## Bahasa yang Didukung Piper TTS (Languages Supported by Piper TTS)

Piper TTS menyediakan **lebih dari 300 checkpoint model suara saraf sumber terbuka** yang mencakup **58 kode bahasa dan wilayah** di 42 rumpun bahasa. Seluruh model dapat dimuat secara instan di peramban:

| Bahasa (Language) | Nama Asli | Kode | Wilayah / Negara | Jumlah Suara |
| ------------------- | ------------------------- | --------- | -------------------------------- | ------------ |
| Arabic (Arab) | العربية | `ar_JO` | Yordania | 2 suara |
| Bulgarian (Bulgaria)| български | `bg_BG` | Bulgaria | 1 suara |
| Bengali (Bengali) | বাংলা | `bn_BD` | Bangladesh | 1 suara |
| Catalan (Katalan) | Català | `ca_ES` | Spanyol | 3 suara |
| Czech (Ceko) | Čeština | `cs_CZ` | Republik Ceko | 3 suara |
| Welsh (Wales) | Cymraeg | `cy_GB` | Britania Raya | 2 suara |
| Danish (Denmark) | Dansk | `da_DK` | Denmark | 1 suara |
| German (Jerman) | Deutsch | `de_DE` | Jerman | 10 suara |
| Greek (Yunani) | Ελληνικά | `el_GR` | Yunani | 3 suara |
| English (UK) | English (UK) | `en_GB` | Britania Raya | 11 suara |
| English (US) | English (US) | `en_US` | Amerika Serikat | 27 suara |
| Spanish (Argentina) | Español (Argentina) | `es_AR` | Argentina | 1 suara |
| Spanish (Spanyol) | Español (España) | `es_ES` | Spanyol | 5 suara |
| Spanish (Meksiko) | Español (México) | `es_MX` | Meksiko | 3 suara |
| Estonian (Estonia) | eesti | `et_EE` | Estonia | 1 suara |
| Basque (Bask) | Euskara | `eu_ES` | Spanyol | 2 suara |
| Persian / Farsi | فارسی | `fa_IR` | Iran | 5 suara |
| Finnish (Finlandia) | Suomi | `fi_FI` | Finlandia | 2 suara |
| French (Prancis) | Français | `fr_FR` | Prancis | 7 suara |
| Hebrew (Ibrani) | עִבְרִית | `he_IL` | Israel | 1 suara |
| Hindi (Hindi) | हिन्दी | `hi_IN` | India | 3 suara |
| Hungarian (Hungaria)| Magyar | `hu_HU` | Hungaria | 3 suara |
| Armenian (Armenia) | հայերեն | `hy_AM` | Armenia | 1 suara |
| Indonesian (Indonesia)| Bahasa Indonesia | `id_ID` | Indonesia | 1 suara |
| Icelandic (Islandia)| íslenska | `is_IS` | Islandia | 4 suara |
| Italian (Italia) | Italiano | `it_IT` | Italia | 4 suara |
| Japanese (Jepang) | 日本語 | `ja_JP` | Jepang | 1 suara |
| Georgian (Georgia) | ქართული ენა | `ka_GE` | Georgia | 1 suara |
| Kazakh (Kazakhstan) | қазақша | `kk_KZ` | Kazakhstan | 3 suara |
| Korean (Korea) | 한국어 | `ko_KR` | Korea Selatan | 1 suara |
| Kurdish (Kurdi) | Kurmancî | `ku_TR` | Turki | 1 suara |
| Luxembourgish | Lëtzebuergesch | `lb_LU` | Luksemburg | 1 suara |
| Lithuanian (Lituania)| Lietuvių | `lt_LT` | Lituania | 1 suara |
| Latvian (Latvia) | Latviešu | `lv_LV` | Latvia | 1 suara |
| Malayalam | മലയാളം | `ml_IN` | India | 2 suara |
| Marathi | मराठी | `mr_IN` | India | 1 suara |
| Nepali (Nepal) | नेपाली | `ne_NP` | Nepal | 3 suara |
| Dutch (Belgia) | Nederlands (België) | `nl_BE` | Belgia | 4 suara |
| Dutch (Belanda) | Nederlands (Nederland)| `nl_NL` | Belanda | 6 suara |
| Norwegian (Norwegia)| Norsk | `no_NO` | Norwegia | 2 suara |
| Polish (Polandia) | Polski | `pl_PL` | Polandia | 5 suara |
| Portuguese (Brasil) | Português (Brasil) | `pt_BR` | Brasil | 4 suara |
| Portuguese (Portugal)| Português (Portugal)| `pt_PT` | Portugal | 1 suara |
| Romanian (Rumania) | Română | `ro_RO` | Rumania | 1 suara |
| Russian (Rusia) | Русский | `ru_RU` | Rusia | 4 suara |
| Slovak (Slowakia) | Slovenčina | `sk_SK` | Slowakia | 1 suara |
| Slovenian (Slovenia)| Slovenščina | `sl_SI` | Slovenia | 1 suara |
| Albanian (Albania) | shqip | `sq_AL` | Albania | 1 suara |
| Serbian (Serbia) | srpski | `sr_RS` | Serbia | 1 suara |
| Swedish (Swedia) | Svenska | `sv_SE` | Swedia | 3 suara |
| Swahili (Swahili) | Kiswahili | `sw_CD` | RD Kongo | 1 suara |
| Telugu | తెలుగు | `te_IN` | India | 3 suara |
| Thai (Thailand) | ไทย | `th_TH` | Thailand | 1 suara |
| Turkish (Turki) | Türkçe | `tr_TR` | Turki | 1 suara |
| Ukrainian (Ukraina) | украї́нська мо́ва | `uk_UA` | Ukraina | 5 suara |
| Urdu (Urdu) | اردو | `ur_PK` | Pakistan | 2 suara |
| Vietnamese (Vietnam)| Tiếng Việt | `vi_VN` | Vietnam | 3 suara |
| Chinese (Tiongkok) | 简体中文 | `zh_CN` | Tiongkok | 4 suara |

---

## Arsitektur Teknis & Alur Pemrosesan (Technical Architecture)

### 1. Alur Kerja Piper TTS (Piper TTS Pipeline)
```
[Teks dari Pengguna]
    │
    ▼
[Web Worker: Fonemizer eSpeak NG]  ──► Mengonversi susunan kata teks ke deretan ID fonem
    │
    ▼
[Web Worker: ONNX Runtime Web]      ──► Menjalankan model saraf (.onnx) via WebGPU atau WASM
    │
    ▼
[Buffer Audio PCM]                  ──► Menyusun aliran data audio 16-bit PCM pada 22.05 kHz
    │
    ▼
[Web Audio API / Blob File WAV]     ──► Pemutaran suara seketika dan unduhan audio WAV murni
```

- **Penyaluran Berkas Biner via Edge CDN:** File biner statis berukuran besar (modul WASM ONNX Runtime dan data fonem eSpeak) didistribusikan melalui jaringan CDN Cloudflare R2 (`VITE_PIPER_CDN_URL`) agar proses clone git dan unduhan awal aplikasi web tetap sangat ringan.
- **Penyimpanan Model di Browser:** Setiap model vokal `.onnx` yang diunduh disimpan permanen di `CacheStorage` browser Anda (`piper-voices-cache-v1`), sehingga sintesis suara pada kunjungan berikutnya berlangsung seketika tanpa menggunakan kuota data internet.

### 2. Alur Kerja Kokoro TTS (Kokoro TTS Pipeline)
- Web worker khusus memuat model ringkas `onnx-community/Kokoro-82M-v1.0-ONNX` menggunakan Transformers.js.
- Aliran audio ditransmisikan dalam bentuk potongan (*chunks*) ke antarmuka pengguna secara real-time, memungkinkan Anda mendengarkan bait awal tanpa menunggu tuntasnya seluruh teks.
- Mendukung fitur jeda, lanjut, serta pengaturan tempo kecepatan suara dari 0.5x hingga 2.0x.

---

## Tumpukan Teknologi yang Digunakan (Tech Stack)

- **Kerangka Kerja Front-End:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Tata Letak & Desain Antarmuka:** [Tailwind CSS](https://tailwindcss.com/) + komponen UI [shadcn/ui](https://ui.shadcn.com/)
- **Mesin Sintesis Suara (TTS):**
  - [Piper](https://github.com/rhasspy/piper) melalui ONNX Runtime Web (`ort-wasm-simd-threaded.jsep.wasm`)
  - Fonemizer [eSpeak NG](https://github.com/espeak-ng/espeak-ng) terkompilasi ke WebAssembly
  - [Kokoro](https://github.com/hexgrad/kokoro) melalui [`kokoro-js`](https://www.npmjs.com/package/kokoro-js)
- **Akselerasi Perangkat Keras:** WebGPU natif dengan fallback otomatis ke Web Workers WASM SIMD multi-thread
- **Ikon & Notifikasi:** Lucide Icons dan notifikasi toast reaktif dengan Sonner

---

## Panduan Memulai (Getting Started)

### Prasyarat Sistem
- Node.js versi 18 atau yang lebih baru.
- Peramban web modern yang mendukung WebAssembly. Untuk memperoleh kecepatan komputasi vokal maksimal melalui kartu grafis (GPU), sangat disarankan menggunakan Google Chrome atau Microsoft Edge dengan WebGPU aktif.

### Instalasi

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Konfigurasi Lingkungan

Salin file contoh `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Isi variabel `VITE_PIPER_CDN_URL` dengan alamat CDN atau Cloudflare R2 bucket Anda:

```env
VITE_PIPER_CDN_URL="https://bucket-anda.r2.dev"
```

### Menjalankan Server Pengembangan Lokal

```bash
npm run dev
```

Buka tautan [http://localhost:3000/](http://localhost:3000/) di peramban web Anda.

### Kompilasi untuk Produksi

```bash
npm run build    # Mengompilasi kode yang telah dioptimasi ke folder /dist
npm run preview  # Menjalankan preview lokal dari hasil kompilasi produksi
```

---

## Pertanyaan yang Sering Diajukan (FAQ)

### Generator Suara AI & Teks ke Suara (Text-to-Speech)

#### Apakah Privro AI Voice benar-benar 100% gratis tanpa kartu kredit dan tanpa batas karakter?
Ya, 100% gratis. Tidak ada batasan jumlah karakter harian, tidak ada biaya langganan bulanan dalam dolar AS, dan tidak memerlukan pendaftaran akun atau kartu kredit. Karena komputasi model suara neural dieksekusi langsung pada hardware komputer atau ponsel Anda (memanfaatkan kartu grafis dengan WebGPU atau prosesor dengan WASM), kami tidak menanggung biaya komputasi server cloud. Efisiensi ini kami kembalikan kepada Anda dalam bentuk alat gratis tanpa kuota.

#### Apakah suara AI dari Privro aman dimonetisasi di YouTube dan TikTok? (Konten Tanpa Wajah)
Sangat aman! Kebijakan resmi Program Partner YouTube (AdSense) dan TikTok Creator Rewards mengizinkan monetisasi video yang menggunakan suara narasi AI, asalkan konten video Anda memiliki nilai tambah orisinal (bukan sekadar kompilasi video ulang tanpa narasi). Seluruh model suara yang digunakan berlisensi sumber terbuka (open source Apache 2.0 / MIT) yang bebas royalti komersial, sangat ideal untuk kreator konten tanpa wajah (*faceless channel*), rangkuman film, cerita edukasi, dan video pendek TikTok/Reels.

#### Apakah alat ini mirip dengan Sound of Text atau Suara Mbak Google?
Privro adalah lompatan teknologi generasi baru yang jauh lebih canggih. Jika *Sound of Text* atau *Suara Mbak Google* lawas menghasilkan nada robotik yang kaku, Privro menggunakan jaringan neural tiruan modern (Piper & Kokoro) yang menghasilkan artikulasi alami, intonasi hidup, dan dapat diunduh langsung sebagai file audio WAV kualitas studio tanpa kompresi dan tanpa watermark.

#### Model suara apa yang tersedia untuk Bahasa Indonesia?
Untuk Bahasa Indonesia, tersedia model suara asli **`id_ID-indotts-low`** yang dilatih dari korpus terbuka IndoTTS. Model ini berukuran sangat hemat kuota (~25 MB – 30 MB), menghasilkan vokal narasi bahasa Indonesia yang tenang, artikulatif, dan lancar. Selain itu, Anda juga dapat menggunakan mesin **Kokoro TTS** untuk menghasilkan narasi bahasa Inggris aksen Amerika dan Inggris berkualitas tinggi bagi Anda yang mengelola saluran YouTube faceless internasional.

#### Apakah teks naskah atau suara yang saya hasilkan dikirim ke server luar? (Privasi & UU PDP)
Tidak pernah. Seluruh proses pembuatan suara berlangsung seutuhnya di dalam memori RAM perangkat Anda. Tidak ada satu baris kalimat naskah pun yang diunggah ke internet. Hal ini memberikan jaminan kerahasiaan penuh sesuai amanat **Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27 Tahun 2022)**.

#### Bisakah file audio hasil narasi diunduh untuk diedit di CapCut atau Premiere?
Bisa. Begitu proses sintesis selesai, Anda dapat mengunduh rekaman utuh dalam format **PCM WAV 16-bit tanpa kompresi (22.05 kHz)**. File audio ini murni, bebas watermark suara, dan siap diimpor ke aplikasi video editor seperti CapCut, Premiere Pro, DaVinci Resolve, atau VN.

#### Apakah generator suara ini bisa bekerja tanpa koneksi internet (Offline)?
Bisa, mulai dari pemakaian kedua. Saat pertama kali Anda memilih model suara, peramban akan menyimpan berkas model (~20 MB hingga ~60 MB) ke dalam `CacheStorage` lokal. Setelah itu, model akan dimuat seketika dari penyimpanan lokal perangkat Anda tanpa memerlukan akses internet sama sekali.

#### Mengapa Privro menggunakan teknologi WebGPU?
WebGPU memungkinkan browser memanfaatkan kemampuan komputasi kartu grafis (GPU) laptop atau ponsel Anda secara langsung. Ini membuat pembuatan suara berlangsung 3x hingga 5x lebih cepat daripada hanya mengandalkan CPU. Jika perangkat Anda belum mendukung WebGPU, sistem otomatis beralih ke WebAssembly (WASM) multi-threading di prosesor agar tetap berjalan lancar.

---

### Transkripsi Rekaman Audio ke Teks & Konversi Video

#### Bagaimana cara transkrip wawancara skripsi atau rekaman kuliah tanpa batas durasi menit?
Anda dapat mentranskripsikan rekaman suara apa pun menggunakan [alat transkripsi lokal gratis dari Privro](https://privro.com/id/transcribe). Cukup seret berkas audio rekaman Anda (MP3, WAV, M4A dari voice note HP atau iPhone, AAC, OGG, FLAC, rekaman Zoom, dll.), pilih bahasa atau gunakan deteksi otomatis, dan OpenAI Whisper akan mengubah seluruh ucapan menjadi tulisan langsung di peramban Anda. Sangat membantu mahasiswa tingkat akhir yang harus mentranskrip wawancara narasumber penelitian kualitatif skripsi berjam-jam tanpa perlu membayar biaya transkripsi per menit.

#### Bagaimana cara mengubah video MP4 menjadi teks atau file subtitle?
Cukup seret file video MP4, WebM, atau MOV Anda ke dalam modul [Transkripsi Lokal](https://privro.com/id/transcribe) atau [Konverter MP4 ke Teks](https://privro.com/id/mp4-to-text). Browser Anda akan mengekstrak gelombang suara secara internal di memori dan menghasilkan teks transkrip kata-per-kata beserta stempel waktu (*timestamp*) akurat, tanpa mengharuskan Anda mengunggah video berukuran ratusan megabita ke internet.

#### Apakah ada batasan durasi menit atau batasan ukuran file?
Tidak ada. Berbeda dengan layanan transkripsi cloud yang membatasi akun gratis hanya 10 atau 15 menit per bulan lalu meminta biaya langganan dolar, transkripsi lokal Privro **tidak memiliki batasan durasi menit dan tidak ada batas kuota jumlah file**. Anda bebas mentranskrip rekaman suara pendek 1 menit hingga rekaman kuliah atau notula rapat dinas selama 4 jam penuh secara cuma-cuma.

#### Format apa saja yang tersedia untuk mengunduh hasil transkrip?
Anda dapat mengunduh transkrip lengkap dengan stempel waktu kata yang tersinkronisasi dalam 8 pilihan format:
- Teks polos: `TXT`
- Format subtitle film: `SRT`, `VTT`
- Lembar kerja & data: `CSV`, `JSON`, `XLSX`
- Dokumen rapi: Microsoft Word `DOCX`, `PDF`

---

### Caption Studio : Subtitle Video Otomatis

#### Bisakah membuat subtitle otomatis pada video tanpa watermark?
Bisa. Lewat [Caption Studio](https://privro.com/id/caption-studio), Anda dapat mengunggah video, membuat transkrip percakapan otomatis dengan Whisper lokal, menyesuaikan font, warna teks, animasi karaoke berjalan, dan menempelkan teks subtitle langsung ke dalam video (*hardsub*). Seluruh proses rendering video dikerjakan oleh FFmpeg di browser Anda hingga resolusi **4K tanpa ada logo atau watermark** yang mengganggu.

#### Rasio aspek video (Aspect Ratio) apa saja yang didukung?
Anda dapat menyesuaikan format video bersubtitle untuk semua media sosial populer:
- **9:16:** Format vertikal TikTok, Instagram Reels, YouTube Shorts
- **16:9:** Format horizontal YouTube, monitor layar lebar, dan televisi
- **1:1:** Feed persegi Instagram dan postingan LinkedIn
- **4:5:** Feed vertikal potret Instagram
- **3:2:** Format fotografi dan layar desktop

---

### Platform, Ragam Bahasa, dan Kedaulatan Data

#### Berapa banyak bahasa yang didukung di seluruh platform Privro?
Platform Privro mendukung **22 bahasa resmi**: Inggris, Spanyol, Portugis, Italia, Jerman, Prancis, Hindi, Bahasa Indonesia, Polandia, Jepang, Belanda, Swedia, Denmark, Norwegia, Finlandia, Ceko, Turki, Rusia, Korea, Tionghoa Tradisional, Arab, dan Ibrani. Setiap bahasa memiliki halaman beranda tersendiri di `https://privro.com/{kode_bahasa}`.

#### Apa maksud dari alamat `https://privro.com/llms.txt` dan `https://privro.com/llms-full.txt`?
[privro.com/llms.txt](https://privro.com/llms.txt) dan [privro.com/llms-full.txt](https://privro.com/llms-full.txt) adalah berkas standar dokumentasi mesin yang dirancang berdasarkan spesifikasi `llms.txt`. Berkas ini menyajikan ringkasan teknis terverifikasi mengenai sistem privasi lokal Privro, kapabilitas model Whisper, profil ekspor FFmpeg, dan model suara neural Piper untuk asisten AI dan mesin pencari cerdas.

---

## Kredit dan Penghargaan (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) dan [Piper Voices](https://huggingface.co/rhasspy/piper-voices) oleh Michael Hansen dan komunitas proyek Rhasspy.
- Model [Kokoro TTS](https://github.com/hexgrad/kokoro) oleh Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web), dan [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) oleh Microsoft.
- Pustaka fonetik [eSpeak NG](https://github.com/espeak-ng/espeak-ng).

---

## Lisensi (License)

Didistribusikan di bawah Lisensi Apache 2.0. Silakan baca berkas [LICENSE](LICENSE) untuk rincian ketentuan selengkapnya.
