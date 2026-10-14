<div align="center">

[![Language: Turkish](https://img.shields.io/badge/Language-T%C3%BCrk%C3%A7e%20(Turkish)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/avnshsingh/local-ai-voice-web)

<br/>

**Translations / Read in other languages:**

[English](README.md) • [Español](README.es.md) • [Português](README.pt.md) • [Italiano](README.it.md) • [Deutsch](README.de.md) • [Français](README.fr.md) • [हिन्दी](README.hi.md) • [Bahasa Indonesia](README.id.md) • [Polski](README.pl.md) • [日本語](README.ja.md) • [Nederlands](README.nl.md) • [Svenska](README.sv.md) • [Dansk](README.da.md) • [Norsk](README.no.md) • [Suomi](README.fi.md) • [Čeština](README.cs.md) • [Türkçe](README.tr.md) • [Русский](README.ru.md) • [한국어](README.ko.md) • [繁體中文](README.zh-tw.md) • [العربية](README.ar.md) • [עברית](README.he.md)

</div>

# Privro AI Voice - Ücretsiz Yerel Yapay Zeka Sesleri & Tarayıcıda Metni Sese Dönüştürme (Text-to-Speech)

Gizlilik odaklı, yeni nesil tarayıcı tabanlı yapay zeka seslendirici ve sıfır bulut yüklemeli (*zero-upload*) ses sentezi platformu; [Privro AI](https://privro.com/tr) tarafından geliştirilmiştir. Metninizi yapıştırın, sesi seçin ve Web Workers ile WebGPU teknolojileri sayesinde tamamen kendi cihazınızda anında doğal insan sesi üretin. Metinleriniz veya ses dosyalarınız asla harici bulut sunucularına gönderilmez.

- **Web uygulamasını doğrudan kullanın:** [voice.privro.com](https://voice.privro.com)
- **Privro Voice Studio:** [privro.com/tr/piper-voice](https://privro.com/tr/piper-voice)
- **Yapay Zeka (LLM) için Makine Tarafından Okunabilir Belgeler:** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## Tarayıcıda İki Bağımsız Nöral Ses Sentezi Motoru (Dual Neural TTS Engines)

Bu proje, tamamen istemci tarafında doğrudan web tarayıcınızda çalışan iki bağımsız nöral metin okuma (Text-to-Speech) motorunu bir araya getirir:

1. **Piper TTS (Ana Motor):**
   - ONNX Runtime Web ve eSpeak NG fonetizasyonu ile ışık hızında yerel ses sentezi.
   - **40'tan fazla dil, 58 bölgesel varyant ve 300'ü aşkın nöral ses modeli** desteği.
   - Resmi Türkçe ses desteği (`tr_TR`): **DFKI Türkçe Ses Modeli** (`tr_TR-dfki-medium`), 22.05 kHz stüdyo kalitesinde örnekleme hızı ve temiz anlatıcı diksiyonu.
   - WebGPU donanım hızlandırması ve çok izlekli WebAssembly (WASM SIMD) otomatik geri dönüş desteği.

2. **Kokoro TTS (İkinci Motor):**
   - Transformers.js üzerinden çalışan 82 milyon parametreli kompakt ve ultra gerçekçi model (`onnx-community/Kokoro-82M-v1.0-ONNX`).
   - Amerikan ve İngiliz aksanlı zengin erkek ve kadın sesleriyle canlı, insansı İngilizce anlatımlar.
   - Parça akışı (*chunk-streaming*) sayesinde metnin tamamının bitmesini beklemeden anında ses oynatma.

---

## Privro AI Web Araçları & Ekosistemi (Privro Web Suite Tools)

| Araç & Bağlantı | Açıklama ve Temel Özellikler |
| :--- | :--- |
| [Ücretsiz Yerel Ses Deşifre (Whisper AI)](https://privro.com/tr/transcribe) | OpenAI Whisper modeli ile tarayıcınızda çalışan %100 yerel sesi yazıya çevirme aracı. Sunucuya dosya yükleme yok, süre kısıtlaması yok; otomatik konuşmacı ayrımı ve Word (DOCX), PDF, TXT ile SRT formatlarında indirme. Üniversite Etik Kurulları ve tez mülakatları için %100 KVKK uyumludur. |
| [MP4'ü Metne Dönüştürme (Video Deşifre)](https://privro.com/tr/mp4-to-text) | Tarayıcı tabanlı ücretsiz video deşifre aracı. MP4, MOV ve WebM videolarındaki sesleri yerel olarak ayıklayın ve bulut sunucuları kullanmadan metne veya altyazı dosyalarına (SRT, VTT) dönüştürün. |
| [Caption Studio - Otomatik Altyazı Ekleme](https://privro.com/tr/caption-studio) | TikTok, Instagram Reels ve YouTube Shorts videolarınıza dinamik ve kelime vurgulu altyazılar ekleyin. Tarayıcı içi FFmpeg ile altyazıları 4K çözünürlüğe kadar videoya doğrudan gömün (hardsub) – %100 ücretsiz ve **tamamen filigransız**. |
| [Piper Voice Studio (Yapay Zeka Ses Stüdyosu)](https://privro.com/tr/piper-voice) | 300'den fazla nöral sesi doğrudan tarayıcınızda keşfedin ve dinleyin. Türkçe DFKI modelini içerir; perde ve hız ayarı, WebGPU hızlandırması ve kayıpsız 16-bit PCM WAV indirme imkanı sunar. |
| [Ücretsiz Metni Sese Dönüştürme Aracı](https://privro.com/tr/text-to-speech) | Hızlı, güvenli ve limitsiz çevrimiçi seslendirme aracı. Makaleleri, video metinlerini ve belgeleri kayıt olmadan ve harici sunuculara göndermeden doğal sese dönüştürün. |
| [Yerel Web Uygulaması](https://voice.privro.com) | Bu depoya dayanan, Piper TTS ve Kokoro TTS sekmelerini içeren bağımsız progressive web uygulaması (PWA). |
| [Otter.ai Alternatifi (Ücretsiz & Süre Limitsiz)](https://privro.com/tr/alternatives/otter) | Neden yüksek dolar kuru üzerinden aylık abonelikler ödeyip verilerinizi yabancı bulutlara yükleyesiniz? Privro'nun tamamen ücretsiz, sınırsız ve yerel deşifre çözümünü keşfedin. |
| [Happy Scribe Alternatifi (Sıfır Bulut Yüklemesi)](https://privro.com/tr/alternatives/happyscribe) | Happy Scribe'ın dakika sınırlamaları ve buluta yükleme zorunluluğunu Privro'nun ücretsiz yerel Whisper deşifresi ve filigransız Caption Studio'su ile karşılaştırın. |
| [Fiyatlandırma ve Paketler](https://privro.com/tr/pricing) | %100 ücretsiz yerel tarayıcı araçlarımızı, büyük hacimli toplu işlemler için opsiyonel bulut API desteğimizi ve süresi dolmayan kredi modellerini inceleyin. |

---

## 22 Dünya Dilinde Küresel Erişim (Global Availability)

Privro platformu dünya çapında **22 dile** tam olarak uyarlanmıştır. Her dil sürümü yerel arama alışkanlıkları ve yasal gizlilik çerçevelerine göre özel olarak optimize edilmiştir:

| Dil (Language) | Özgün İsim | Kod | Yerelleştirilmiş İnternet Adresi |
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

> **Not:** Privro ekosisteminin tüm ana araçları – [Ses Deşifresi](https://privro.com/tr/transcribe), [Caption Studio](https://privro.com/tr/caption-studio) ve [Piper Voice](https://privro.com/tr/piper-voice) – bu 22 dilin tamamında kesintisiz çalışmaktadır.

---

## Piper TTS Tarafından Desteklenen Diller (Languages Supported by Piper TTS)

Piper TTS, 42 dil ailesi genelinde **58 dil ve bölge koduna** yayılmış **300'den fazla açık kaynaklı nöral ses modeline** sahiptir. Modellerin tümü doğrudan yerel donanımınızda çalıştırılır:

| Dil (Language) | Özgün İsim | Kod | Ülke / Bölge | Mevcut Model Sayısı |
| ------------------- | ------------------------- | --------- | -------------------------------- | --------------------- |
| Arabic (Arapça) | العربية | `ar_JO` | Ürdün | 2 model |
| Bulgarian (Bulgarca)| български | `bg_BG` | Bulgaristan | 1 model |
| Bengali (Bengalce) | বাংলা | `bn_BD` | Bangladeş | 1 model |
| Catalan (Katalanca) | Català | `ca_ES` | İspanya | 3 model |
| Czech (Çekçe) | Čeština | `cs_CZ` | Çekya | 3 model (Jirka & Kasandra) |
| Welsh (Galce) | Cymraeg | `cy_GB` | Birleşik Krallık | 2 model |
| Danish (Danca) | Dansk | `da_DK` | Danimarka | 1 model (NST Rigsdansk) |
| German (Almanca) | Deutsch | `de_DE` | Almanya | 10 model |
| Greek (Yunanca) | Ελληνικά | `el_GR` | Yunanistan | 3 model |
| English (UK) | English (UK) | `en_GB` | Birleşik Krallık | 11 model |
| English (US) | English (US) | `en_US` | Amerika Birleşik Devletleri | 27 model |
| Spanish (Arjantin) | Español (Argentina) | `es_AR` | Arjantin | 1 model |
| Spanish (İspanya) | Español (España) | `es_ES` | İspanya | 5 model |
| Spanish (Meksika) | Español (México) | `es_MX` | Meksika | 3 model |
| Estonian (Estonca) | Eesti | `et_EE` | Estonya | 1 model |
| Basque (Baskça) | Euskara | `eu_ES` | İspanya | 2 model |
| Persian / Farsi | فارسی | `fa_IR` | İran | 3 model |
| Finnish (Fince) | Suomi | `fi_FI` | Finlandiya | 2 model (Harri Medium & Low) |
| French (Fransızca) | Français (France) | `fr_FR` | Fransa | 7 model |
| Irish (İrlandaca) | Gaeilge | `ga_IE` | İrlanda | 3 model |
| Galician (Galiçyaca)| Galego | `gl_ES` | İspanya | 1 model |
| Gujarati (Güceratça)| ગુજરાતી | `gu_IN` | Hindistan | 1 model |
| Hebrew (İbranice) | עברית | `he_IL` | İsrail | 1 model |
| Hindi (Hintçe) | हिन्दी | `hi_IN` | Hindistan | 1 model |
| Croatian (Hırvatça) | Hrvatski | `hr_HR` | Hırvatistan | 1 model |
| Hungarian (Macarca) | Magyar | `hu_HU` | Macaristan | 2 model |
| Indonesian (Endonezce)| Bahasa Indonesia | `id_ID` | Endonezya | 1 model |
| Icelandic (İzlandaca)| Íslenska | `is_IS` | İzlanda | 3 model |
| Italian (İtalyanca) | Italiano | `it_IT` | İtalya | 4 model |
| Japanese (Japonca) | 日本語 | `ja_JP` | Japonya | 1 model |
| Georgian (Gürcüce) | ქართული | `ka_GE` | Gürcistan | 1 model |
| Kazakh (Kazakça) | Қазақша | `kk_KZ` | Kazakistan | 1 model |
| Luxembourgish | Lëtzebuergesch | `lb_LU` | Lüksemburg | 1 model |
| Nepali (Nepalce) | नेपाली | `ne_NP` | Nepal | 1 model |
| Dutch (Belçika) | Nederlands (België) | `nl_BE` | Belçika | 4 model |
| Dutch (Hollanda) | Nederlands (Nederland) | `nl_NL` | Hollanda | 6 model |
| Norwegian (Norveççe)| Norsk (Bokmål) | `no_NO` | Norveç | 2 model (11 konuşmacı) |
| Polish (Lehçe) | Polski | `pl_PL` | Polonya | 5 model |
| Portuguese (Brezilya)| Português (Brasil) | `pt_BR` | Brezilya | 4 model |
| Portuguese (Portekiz)| Português (Portugal) | `pt_PT` | Portekiz | 1 model |
| Romanian (Romence) | Română | `ro_RO` | Romanya | 2 model |
| Russian (Rusça) | Русский | `ru_RU` | Rusya | 8 model |
| Slovak (Slovakça) | Slovenčina | `sk_SK` | Slovakya | 1 model |
| Slovenian (Slovence)| Slovenščina | `sl_SI` | Slovenya | 1 model |
| Serbian (Sırpça) | Srpski | `sr_RS` | Sırbistan | 2 model |
| Swedish (İsveççe) | Svenska | `sv_SE` | İsveç | 3 model |
| Swahili (Svahili) | Kiswahili | `sw_CD` | Kongo DC | 1 model |
| Telugu (Telugu Dili)| తెలుగు | `te_IN` | Hindistan | 1 model |
| **Turkish (Türkçe)** | **Türkçe** | **`tr_TR`** | **Türkiye** | **1 model (DFKI Medium - 22.05 kHz)** |
| Ukrainian (Ukraynaca)| Українська | `uk_UA` | Ukrayna | 4 model |
| Urdu (Urduca) | اردو | `ur_PK` | Pakistan | 2 model |
| Vietnamese (Vietnamca)| Tiếng Việt | `vi_VN` | Vietnam | 4 model |
| Chinese (Çince) | 简体中文 | `zh_CN` | Çin | 2 model |

---

## Türkçe Ses Modeli Piper TTS'te (`tr_TR`) – DFKI

Türkçe, zengin ünlü uyumuna, eklemeli morfolojik yapıya ve yumuşak ünsüz uzatmalarına sahip fonetik bir dildir. Piper TTS'in Türkçe modeli olan **`tr_TR-dfki-medium`**, bu fonetik özellikleri eSpeak NG ve VITS derin öğrenme mimarisi ile kusursuz şekilde yönetir:

### `tr_TR-dfki-medium` (Stüdyo Kalitesi – Kurumsal Anlatıcı Sesi)
- **Model Tipi:** Tek konuşmacılı derin öğrenme nöral modeli (VITS tabanlı).
- **Ses Profili:** Anlaşılır, diksiyonu düzgün, nötr ve profesyonel Türkçe erkek anlatıcı sesi.
- **Kalite:** 22.050 Hz (22.05 kHz) stüdyo örnekleme hızı, 16-bit sıkıştırmasız PCM WAV çıktısı.
- **Eğitim Külliyatı:** DFKI Açık Türkçe Konuşma Veritabanı (Deutsches Forschungszentrum für Künstliche Intelligenz) referans alınarak eğitilmiştir.
- **Dosya Boyutu:** ~35–45 MB (Tarayıcı önbelleğine bir kez indirilir; sonrasında tamamen internetsiz çalışır).
- **Kullanım Alanları:**
  - **Yüzsüz YouTube Kanalları (Faceless YouTube):** Belgesel, teknoloji, tarih, kişisel gelişim ve finans videoları.
  - **Eğitim & E-Kitap:** Uzun makale okumaları, eğitim slaytları ve sesli dokümanlar.
  - **Erişilebilirlik:** Görme engelli bireyler için tarayıcı içi bağımsız sesli okuyucu.

> **Küresel Pazarlar İçin İpucu:** Eğer YouTube Shorts veya TikTok'ta yabancı izleyicileri hedefleyip yüksek reklam geliri (yüksek TBM/RPM) elde etmek istiyorsanız, saniyeler içinde ikinci motorumuz olan **Kokoro TTS'e** geçiş yapabilir; stüdyo kalitesinde Amerikan ve İngiliz aksanlı anlatıcı seslerini ücretsiz üretebilirsiniz.

---

## Sistem Mimarisi & Ses İşleme Akışı (Architecture)

```
Kullanıcı Metni Girişi (User Input)
       │
       ▼
Metin Temizleme & Fonetizasyon (eSpeak NG WebAssembly)
       │
       ▼
Nöral İnferans Hesaplaması (Piper ONNX Runtime Web - WebGPU / WASM SIMD)
       │
       ▼
Bellekteki Ham Ses Tamponu (Float32Array PCM Audio Chunks)
       │
       ├─────────────────────────────────┐
       ▼                                 ▼
Web Audio API Bağlamı             WAV Dosya Oluşturucu (16-bit PCM)
(Anında yerel dinleme)            (Kayıpsız doğrudan indirme)
```

### 1. Piper TTS İşleme Hattı
- Fonetizasyon işlemi WebAssembly olarak derlenmiş [eSpeak NG](https://github.com/espeak-ng/espeak-ng) kütüphanesi ile milisaniyeler içinde gerçekleşir.
- Model hesaplamaları, kullanıcı arayüzünü kilitlememek için arka planda çalışan bir Web Worker iş parçacığında [ONNX Runtime Web](https://onnxruntime.ai/) üzerinden yürütülür.
- Model dosyası tarayıcının yerel `IndexedDB` veritabanında (`piper-voices-cache-v1`) kalıcı olarak saklanır; böylece sonraki kullanımlarda sıfır ağ transferi ile çevrimdışı çalışır.

### 2. Kokoro TTS İşleme Hattı
- Ayrı bir Web Worker, Transformers.js aracılığıyla `onnx-community/Kokoro-82M-v1.0-ONNX` modelini yükler.
- Metin parçalar halinde (*chunks*) işlenir ve ses akışı eşzamanlı olarak başlar; bu sayede uzun paragraflarda bile kullanıcı beklemeden konuşmayı dinlemeye başlar.
- Duraklatma, devam ettirme ve konuşma hızını 0,5x ile 2,0x arasında dinamik olarak değiştirme kontrolleri sunar.

---

## Teknoloji Yığını (Tech Stack)

- **Ön Yüz Çerçevesi:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Stil & Arayüz Bileşenleri:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Ses Sentezleme Motorları (TTS):**
  - [Piper](https://github.com/rhasspy/piper) (ONNX Runtime Web `ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) (WebAssembly fonetizasyonu)
  - [Kokoro](https://github.com/hexgrad/kokoro) ([`kokoro-js`](https://www.npmjs.com/package/kokoro-js))
- **Donanım Hızlandırma:** WebGPU (desteklenmeyen sistemlerde otomatik WASM SIMD yedekleme)
- **İkonlar & Bildirimler:** Lucide Icons ve Sonner toast bildirimleri

---

## Kurulum & Yerel Geliştirme (Getting Started)

### Ön Koşullar
- Node.js 18 veya daha yeni bir sürüm
- WebAssembly destekli modern bir tarayıcı (En iyi WebGPU performansı için Google Chrome veya Microsoft Edge önerilir).

### Kurulum

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Ortam Değişkenleri

`.env.example` dosyasını `.env` olarak kopyalayın:

```bash
cp .env.example .env
```

`VITE_PIPER_CDN_URL` değişkenini Cloudflare R2 veya kendi CDN adresinize yönlendirin:

```env
VITE_PIPER_CDN_URL="https://your-bucket.r2.dev"
```

### Geliştirici Sunucusunu Başlatma

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000/](http://localhost:3000/) adresine gidin.

### Üretim Derlemesi Alma (Build)

```bash
npm run build    # /dist klasörüne optimize edilmiş üretim paketini derler
npm run preview  # Üretim paketini yerel olarak önizler
```

---

## Sıkça Sorulan Sorular (SSS / FAQ)

### Yapay Zeka Sesleri & Metni Sese Dönüştürme (TTS)

#### Privro metni sese dönüştürme ve seslendirme aracı gerçekten tamamen ücretsiz ve limitsiz mi?
Evet, %100 tamamen ücretsizdir ve herhangi bir karakter sınırı veya süre kısıtlaması yoktur. Kredi kartı bilgisi girmeniz veya hesap açıp kayıt olmanız gerekmez. Privro, bulut sunucularının yüksek işlemci maliyetini kullanmak yerine, tarayıcınızın donanım hızlandırma yeteneklerini (WebGPU ve WebAssembly) kullanarak yapay zeka modellerini doğrudan kendi bilgisayarınızda veya telefonunuzda çalıştırır. Minut başına sunucu masrafı oluşmadığı için hizmeti hiçbir kısıtlama olmadan ömür boyu ücretsiz sunabiliyoruz.

#### Piper TTS Türkçe ses modeli (`tr_TR-dfki-medium`) ne kadar doğal?
Piper TTS, son teknoloji derin öğrenme mimarisi olan VITS nöral ağlarını kullanır. Eski nesil mekanik ve robotik ses sentezleyicilerin aksine, hece vurgularını, Türkçe ünlü uyumunu ve cümle sonu tonlamalarını doğal bir akışla seslendirir. 22.05 kHz stüdyo kalitesinde oluşturulan ses; YouTube videoları, podcast girişleri, sunumlar ve sesli kitaplar için profesyonel bir dinleme deneyimi sunar.

#### Üretilen sesleri YouTube'da (Yüzsüz Kanallar) para kazanmak için kullanabilir miyim?
Evet, kesinlikle kullanabilirsiniz! YouTube İş Ortağı Programı (AdSense), TikTok ve Instagram kuralları, özgün bir senaryo ve montajla birleştirildiği sürece yapay zeka tarafından seslendirilen videolarda para kazanmaya (monetizasyona) tam izin verir. Piper TTS modelleri açık kaynaklı ve telifsiz lisanslarla (Apache 2.0) korunmaktadır; hiçbir ticari telif veya lisans ücreti ödemeden "yüzsüz YouTube kanallarınızda" (faceless channels) gönül rahatlığıyla gelir elde edebilirsiniz.

#### Yabancı dilde YouTube kanalları için Kokoro TTS motorunu kullanabilir miyim?
Evet! Privro, Türkçe için Piper TTS'in yanı sıra küresel içerik üreticileri için dünyanın en gelişmiş açık kaynaklı İngilizce ses modeli olan **Kokoro TTS (Kokoro-82M)** motorunu bünyesinde barındırır. Amerika veya Avrupa kitlesine hitap eden yüksek reklam getirili (yüksek RPM/TBM) YouTube veya TikTok kanalları yönetiyorsanız; Amerikan ve İngiliz aksanlı nefes sesleri içeren, insan doğallığında İngilizce seslendirmeleri tarayıcınızda ücretsiz üretebilirsiniz.

#### Oluşturulan ses dosyalarını hangi formatta indirebilirim?
Seslendirme tamamlandığı anda tüm konuşmayı stüdyo standartlarında, kayıpsız **16-bit PCM WAV (22,05 kHz)** formatında tek tıkla indirebilirsiniz. Dosyanız üzerinde hiçbir ses filigranı (audio watermark) bulunmaz; Premiere Pro, DaVinci Resolve veya CapCut gibi kurgu programlarına doğrudan aktarabilirsiniz.

---

### Sesi Yazıya Çevirme & Üniversite Tez Mülakatları (Whisper AI)

#### Üniversite tezim veya araştırma mülakatlarım için ses kayıtlarını nasıl ücretsiz deşifre edebilirim?
Telefonunuzla veya ses kayıt cihazınızla aldığınız ses dosyalarını (MP3, M4A, WAV, AAC vb.) [Privro Ücretsiz Deşifre Aracı](https://privro.com/tr/transcribe) ekranına sürükleyip bırakmanız yeterlidir. OpenAI Whisper yapay zeka modeli, ses kaydınızı tarayıcınızın içinde dinleyerek otomatik olarak yazıya döker. İşlem bittiğinde konuşmacı ayrımı ve zaman damgaları içeren metni Microsoft Word (`.docx`), PDF veya metin belgesi (`.txt`) olarak indirebilir; MAXQDA veya NVivo gibi nitel veri analizi programlarına doğrudan aktarabilirsiniz.

#### Ses kaydı deşifresinde süre sınırı veya dosya boyutu limiti var mı?
Hayır, hiçbir süre sınırı yoktur. Ayda sadece 10-15 dakika ücretsiz hak tanıyan ve sonrasında yüksek dolar abonelikleri isteyen bulut servislerinin aksine Privro'da 5 dakikalık bir sesli notu da, 4 saatlik kesintisiz bir odak grup veya kurul toplantısını da tek seferde, tamamen sınırsız olarak deşifre edebilirsiniz.

#### Deşifre metinlerini hangi dosya formatlarında dışa aktarabilirim?
Whisper AI tarafından deşifre edilen metinleri kelime ve cümle bazlı zaman damgalarıyla şu formatlarda indirebilirsiniz:
- **Metin ve Doküman:** Microsoft Word (`DOCX`), Düz Metin (`TXT`), `PDF`
- **Altyazı Dosyaları:** `SRT`, `VTT`
- **Tablo ve Veri:** Excel (`XLSX`), `CSV`, `JSON`

---

### Caption Studio: Videoya Otomatik Altyazı Ekleme

#### Videolarıma TikTok ve Reels tarzı filigransız otomatik altyazı nasıl ekleyebilirim?
[Caption Studio](https://privro.com/tr/caption-studio) modülüne MP4, MOV veya WebM formatındaki videonuzu yükleyin. Whisper motoru konuşmaları otomatik olarak algılar ve kelime kelime senkronize altyazı satırları oluşturur. Dilediğiniz renk, font ve animasyonlu karaoke vurgu stilini seçtikten sonra, doğrudan tarayıcınızdaki WebAssembly FFmpeg motoru sayesinde videonuzu **4K çözünürlüğe kadar, tamamen filigransız ve logosuz** olarak dışa aktarabilirsiniz.

#### Hangi video en-boy oranları (aspect ratios) desteklenir?
Sosyal medyanın tüm standart formatları tek tıkla desteklenir:
- **9:16:** Dikey format (TikTok, Instagram Reels, YouTube Shorts)
- **16:9:** Yatay format (Standart YouTube, TV ve Masaüstü)
- **1:1:** Kare format (Instagram akışı ve LinkedIn paylaşımları)
- **4:5:** Dikey akış gönderileri (Facebook ve Instagram)
- **3:2:** Klasik fotoğraf ve slayt formatı

#### Videodan (MP4, MOV, WebM) konuşmaları ayıklayıp metin belgesi olarak alabilir miyim?
Evet. [MP4'ü Metne Dönüştürme](https://privro.com/tr/mp4-to-text) aracımızla videonuzun sadece ses kanalını ayıklayabilir, zaman damgalı altyazı dosyalarını (`.srt`, `.vtt`) veya düzenlenebilir Word/metin dosyalarını (`.docx`, `.txt`) saniyeler içinde bilgisayarınıza kaydedebilirsiniz.

---

### Gizlilik, KVKK ve Yasal Güvence (Sıfır Bulut Yüklemesi)

#### Privro, 6698 sayılı Kişisel Verilerin Korunması Kanunu'na (KVKK) nasıl tam uyum sağlıyor?
Geleneksel bulut tabanlı yapay zeka platformlarında sesinizi veya metninizi yüklediğinizde, verileriniz yurt dışındaki sunuculara aktarılır. 2024 yılında güncellenen KVKK Madde 9 uyarınca yurt dışına kişisel veri aktarımı çok ağır yasal yaptırımlara ve idari para cezalarına tabidir. Privro'da ise yapay zeka modelleri doğrudan bilgisayarınızın RAM belleğinde çalışır. Hiçbir ses kaydı, video veya metin cihazınızdan dışarı çıkmaz, sunucuya yüklenmez ve üçüncü şahıslarla paylaşılmaz. Veri aktarımı gerçekleşmediği için bir Veri İşleyen Sözleşmesi (DPA) imzalamanıza gerek kalmaz; KVKK riskleri tamamen sıfırlanır.

#### Avukatlar ve hekimler gizli ses kayıtları için bu sistemi güvenle kullanabilir mi?
Evet, %100 yasal güvenceyle kullanabilirler.
- **Avukatlar İçin:** Avukatlık Kanunu (Kanun No. 1136, Madde 36) uyarınca avukatlar müvekkil sırlarını korumakla yükümlüdür. Privro ile müvekkil görüşmeleri, tanık ifadeleri ve duruşma kayıtları internete sızmadan yerel olarak çözümlenir.
- **Hekimler ve Psikoterapistler İçin:** Tıbbi Deontoloji Nizamnamesi Madde 4 (Hekim Sırrı) ve Hasta Hakları Yönetmeliği uyarınca hasta mahremiyeti mutlak koruma altındadır. Hasta anamnez ve terapi kayıtları hastane veya muayenehane bilgisayarında kalarak tıbbi sır saklama yükümlülüğü eksiksiz yerine getirilir.

#### Üniversite Etik Kurulları açısından araştırma mülakatlarında kullanıma uygun mudur?
Kesinlikle uygundur. Türkiye'deki üniversitelerin (ODTÜ, Boğaziçi Üniversitesi, İTÜ, Hacettepe Üniversitesi vb.) Etik Kurulları, araştırma katılımcılarının ses kayıtlarının üçüncü parti yabancı bulutlara yüklenmesini katı biçimde kısıtlar. Privro'da ses dosyaları yerel olarak çözümlendiği için katılımcıların biyometrik ve kişisel ses verileri korunur, Etik Kurul onay şartları ve Bilgilendirilmiş Gönüllü Onam Formu taahhütleri %100 yerine getirilir.

#### Sistem internet olmadan çevrimdışı (offline) çalışır mı?
Evet! İlk ses veya deşifre modelini seçtiğinizde yapay zeka model dosyası tarayıcınızın yerel önbelleğine (`CacheStorage` ve `IndexedDB`) bir defaya mahsus indirilir. İndirme tamamlandıktan sonra internet bağlantınızı tamamen kesseniz veya uçak moduna alsanız dahi metin seslendirme ve ses kaydı deşifre işlemlerini sınırsız olarak çevrimdışı gerçekleştirebilirsiniz.

---

### Platform, Erişilebilirlik & LLM Entegrasyonu

#### Privro kaç dilde hizmet vermektedir?
Privro platformu dünya genelinde **22 dilde** eksiksiz olarak hizmet vermektedir: Türkçe, İngilizce, İspanyolca, Portekizce, İtalyanca, Almanca, Fransızca, Hintçe, Endonezce, Lehçe, Japonca, Felemenkçe, İsveççe, Danca, Norveççe, Fince, Çekçe, Rusça, Korece, Geleneksel Çince, Arapça ve İbranice. Her dil sürümüne doğrudan `https://privro.com/{dil_kodu}` bağlantısından erişebilirsiniz.

#### `https://privro.com/llms.txt` adresinin amacı nedir?
[privro.com/llms.txt](https://privro.com/llms.txt) ve [privro.com/llms-full.txt](https://privro.com/llms-full.txt) adresleri, yapay zeka asistanları ve büyük dil modelleri (LLM) için hazırlanmış standart ve makine tarafından okunabilir kılavuzlardır. Privro'nun yerel gizlilik mimarisi, desteklenen modelleri ve teknik özellikleri hakkında yapay zeka sistemlerine doğrudan doğrulanmış bilgiler sağlar.

---

## Katkıda Bulunanlar & Teşekkürler (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) ve [Piper Voices](https://huggingface.co/rhasspy/piper-voices) – Michael Hansen ve Rhasspy topluluğu.
- [Kokoro TTS](https://github.com/hexgrad/kokoro) – Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) ve [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) – Microsoft.
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) – WebAssembly üzerinden fonetizasyon.

---

## Lisans (License)

Bu proje [Apache License 2.0](LICENSE) lisansı altında yayınlanmıştır. Lisans detayları için `LICENSE` dosyasını inceleyebilirsiniz.
