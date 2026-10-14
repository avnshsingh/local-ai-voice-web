<div align="center">

[![Language: Italian](https://img.shields.io/badge/Language-Italiano%20(Italian)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/avnshsingh/local-ai-voice-web)

<br/>

**Translations / Read in other languages:**

[English](README.md) • [Español](README.es.md) • [Português](README.pt.md) • [Italiano](README.it.md) • [Deutsch](README.de.md) • [Français](README.fr.md) • [हिन्दी](README.hi.md) • [Bahasa Indonesia](README.id.md) • [Polski](README.pl.md) • [日本語](README.ja.md) • [Nederlands](README.nl.md) • [Svenska](README.sv.md) • [Dansk](README.da.md) • [Norsk](README.no.md) • [Suomi](README.fi.md) • [Čeština](README.cs.md) • [Türkçe](README.tr.md) • [Русский](README.ru.md) • [한국어](README.ko.md) • [繁體中文](README.zh-tw.md) • [العربية](README.ar.md) • [עברית](README.he.md)

</div>

# Privro AI Voice - Generatore Vocale con IA e Sintesi Vocale Testo a Voce Gratuito nel Browser

Generatore neurale di sintesi vocale da testo a voce (Text to Speech) direttamente nel browser e con zero upload per [Privro AI](https://privro.com/it). Digita o incolla il tuo testo, scegli un modello di voce neurale e genera parlato umano naturale interamente sul tuo computer o smartphone. L'audio viene sintetizzato localmente tramite Web Workers e WebGPU: nessun testo e nessun file audio viene mai caricato o inviato a server esterni.

- **Applicazione Web in Tempo Reale:** [voice.privro.com](https://voice.privro.com)
- **Studio Vocale Privro:** [privro.com/it/piper-voice](https://privro.com/it/piper-voice)
- **Metadati per Motori di Ricerca e LLM:** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## Due Motori Vocali Neurali nel Browser (Dual Neural TTS Engines)

Questo progetto include due motori di sintesi vocale neurale ad alte prestazioni eseguiti interamente sul dispositivo (lato client):

1. **Piper TTS (Motore Principale):**
   - Sintesi vocale neurale locale ad altissima velocità alimentata da ONNX Runtime Web ed eSpeak NG.
   - **Oltre 300 voci in più di 40 lingue (58 varianti regionali)**, con 4 voci italiane native (`it_IT`: Paola medium, Riccardo x_low, Serena medium e Serena high).
   - Accelerazione hardware tramite **WebGPU**, con passaggio automatico a **WebAssembly (WASM)** multithread per la massima compatibilità.
   - Modelli multivocali con selezione personalizzata del locutore (Speaker ID).
   - Livelli di qualità personalizzati: da profili ultraleggeri e veloci (`x_low`, `low`) a modelli vocali ad alta fedeltà sonora (`medium`, `high`).
   - Caching intelligente nel browser tramite `CacheStorage`: i modelli (~20–60 MB) si scaricano una volta sola e funzionano al 100% offline.
   - Download diretto dell'audio generato in formato **PCM WAV a 16 bit senza perdita (22.05 kHz)**.

2. **Kokoro TTS (Motore Secondario):**
   - Voce naturale ed espressiva basata sul modello [Kokoro](https://github.com/hexgrad/kokoro) (`Kokoro-82M`) tramite la libreria [`kokoro-js`](https://www.npmjs.com/package/kokoro-js).
   - Stili vocali realistici in inglese americano e britannico.
   - Streaming audio a blocchi in tempo reale: ascolta l'inizio del testo all'istante mentre il modello sintetizza i blocchi successivi.
   - Controlli completi: riproduzione, pausa, ripresa e regolazione della velocità di narrazione.

---

## Strumenti Privro (Privro Tools)

Privro è una suite di strumenti di produttività e creazione di contenuti progettata con architettura *local-first*. Tutti gli strumenti locali operano al 100% sul tuo dispositivo: nessun account obbligatorio, nessuna carta di credito, nessuna chiave API, nessun abbonamento e nessun limite di caricamento file.

| Strumenti e Pagine | Funzionalità Principali |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Trascrizione Audio Locale Gratuita (Whisper AI)](https://privro.com/it/transcribe) | Speech to text e sbobinatura audio sul tuo dispositivo con OpenAI Whisper (da Tiny a Large Turbo) in 99 lingue. Zero upload, minuti illimitati e senza registrazione. |
| [Convertitore da MP4 a Testo](https://privro.com/it/mp4-to-text) | Convertitore online gratuito da video a testo. Converte file MP4, MOV o WEBM in trascrizioni testuali (TXT, DOCX, PDF) o sottotitoli (SRT, VTT) con Whisper in locale. |
| [Caption Studio - Editor di Sottotitoli Video](https://privro.com/it/caption-studio) | Aggiungi sottotitoli automatici animati stile TikTok e karaoke ai tuoi video. Rendering con FFmpeg direttamente nel browser fino a 4K senza filigrana (watermark). |
| [Studio di Sintesi Vocale Neurale Piper](https://privro.com/it/piper-voice) | Studio di sintesi vocale neurale multilingue integrato in Privro. Oltre 300 voci, selezione dello speaker, accelerazione WebGPU ed esportazione WAV pulita. |
| [Generatore di Sintesi Vocale Gratuito](https://privro.com/it/text-to-speech) | Convertitore da testo a voce veloce, affidabile e privato. Trasforma qualsiasi testo in audio parlato naturale direttamente nel browser senza dipendenze dal cloud. |
| [App Web Vocale IA Locale](https://voice.privro.com) | Applicazione standalone con doppio motore vocale neurale (Piper TTS e Kokoro TTS) eseguita direttamente nel browser (questo repository). |
| [Alternativa a Otter.ai (Gratis e Illimitato)](https://privro.com/it/alternatives/otter) | Confronta la trascrizione locale gratuita e illimitata di Privro nel browser rispetto ai bot di riunione su cloud e ai costosi canoni mensili di Otter.ai. |
| [Alternativa a Happy Scribe (Zero Upload)](https://privro.com/it/alternatives/happyscribe) | Confronta Caption Studio e la trascrizione Whisper locale di Privro con i piani a pagamento e i limiti di minuti imposti da Happy Scribe. |
| [Prezzi e Piani Privro AI](https://privro.com/it/pricing) | Strumenti locali gratuiti per sempre, con opzione per abbonamenti di trascrizione cloud veloce e pacchetti di crediti prepagati senza scadenza. |

---

## Sintesi Vocale su Privro (Text to Speech on Privro)

Privro offre soluzioni complete di sintesi vocale neurale direttamente nel browser, ottimizzate per velocità, riservatezza e semplicità:

- **[Piper Voice Studio](https://privro.com/it/piper-voice):** Lo studio vocale interattivo integrato nella piattaforma Privro. Cerca e filtra oltre 300 voci in più di 40 lingue, seleziona i relatori nei modelli multivoce, passa facilmente tra runtime WebGPU e WASM, salva i modelli nella cache locale ed esporta tracce WAV impeccabili.
- **[Generatore di Sintesi Vocale](https://privro.com/it/text-to-speech):** Portale online per creare narrazioni vocali rapide per video, podcast, guide o documenti di studio.
- **[App Vocale IA Locale](https://voice.privro.com):** La Progressive Web App (PWA) open-source costruita a partire da questo repository, con schede dedicate per alternare tra Piper TTS e Kokoro TTS.

### Architettura di Riservatezza Locale (On-Device Privacy)
Tutta la sintesi vocale viene eseguita sul dispositivo tramite Web Workers del browser:
- **Nessun testo viene inviato a server esterni.**
- **Nessun audio viene registrato o conservato su server cloud remoti.**
- **Nessun bisogno di credenziali, account o chiavi API.**
- **Funziona al 100% offline** una volta che il modello vocale e i file di runtime sono memorizzati nella cache locale.
- **Piena conformità al GDPR (Regolamento UE 2016/679)** e alle direttive del Garante per la Protezione dei Dati Personali.

---

## Specifiche Legibili da Agenti e Macchine (`llms.txt` e `llms-full.txt`)

Privro mette a disposizione documentazione tecnica strutturata per crawler e assistenti di intelligenza artificiale:

- **Indice Sintetico:** [https://privro.com/llms.txt](https://privro.com/llms.txt)
- **Specifiche Complete:** [https://privro.com/llms-full.txt](https://privro.com/llms-full.txt)

Questi file forniscono ad assistenti IA, LLM e crawler web una panoramica certificata e dettagliata dell'architettura di sicurezza locale, dei modelli Whisper, dei profili di esportazione FFmpeg, delle voci neurali Piper e dell'indicizzazione multilingue.

---

## Lingue Disponibili su Privro (Languages Available on Privro)

Privro è localizzato in **22 lingue ufficiali**. L'edizione in lingua inglese è ospitata sul dominio radice, mentre ciascuna edizione localizzata è raggiungibile al proprio percorso dedicato:

| Lingua (Language) | Nome Nativo | Codice | Pagina Principale (Homepage) |
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

> **Nota:** Gli strumenti essenziali della suite Privro, tra cui l'[App di Trascrizione](https://privro.com/it/transcribe), [Caption Studio](https://privro.com/it/caption-studio) e [Piper Voice](https://privro.com/it/piper-voice), sono interamente localizzati in tutte le 22 lingue.

---

## Lingue Supportate da Piper TTS (Languages Supported by Piper TTS)

Piper TTS comprende **oltre 300 modelli vocali neurali open-source** distribuiti su **58 codici linguistici e territoriali** in 42 famiglie linguistiche. Tutti i modelli possono essere caricati ed eseguiti direttamente nel browser:

| Lingua (Language) | Nome Nativo | Codice | Regione / Paese | Voci Disponibili |
| ------------------- | ------------------------- | --------- | -------------------------------- | ----------------- |
| Arabic (Arabo) | العربية | `ar_JO` | Giordania | 2 voci |
| Bulgarian (Bulgaro) | български | `bg_BG` | Bulgaria | 1 voce |
| Bengali (Bengalese) | বাংলা | `bn_BD` | Bangladesh | 1 voce |
| Catalan (Catalano) | Català | `ca_ES` | Spagna | 3 voci |
| Czech (Ceco) | Čeština | `cs_CZ` | Repubblica Ceca | 3 voci |
| Welsh (Gallese) | Cymraeg | `cy_GB` | Gran Bretagna | 2 voci |
| Danish (Danese) | Dansk | `da_DK` | Danimarca | 1 voce |
| German (Tedesco) | Deutsch | `de_DE` | Germania | 10 voci |
| Greek (Greco) | Ελληνικά | `el_GR` | Grecia | 3 voci |
| English (UK) | English (UK) | `en_GB` | Gran Bretagna | 11 voci |
| English (US) | English (US) | `en_US` | Stati Uniti | 27 voci |
| Spanish (Argentina) | Español (Argentina) | `es_AR` | Argentina | 1 voce |
| Spanish (Spagna) | Español (España) | `es_ES` | Spagna | 5 voci |
| Spanish (Messico) | Español (México) | `es_MX` | Messico | 3 voci |
| Estonian (Estone) | eesti | `et_EE` | Estonia | 1 voce |
| Basque (Basco) | Euskara | `eu_ES` | Spagna | 2 voci |
| Persian / Farsi | فارسی | `fa_IR` | Iran | 5 voci |
| Finnish (Finlandese)| Suomi | `fi_FI` | Finlandia | 2 voci |
| French (Francese) | Français | `fr_FR` | Francia | 7 voci |
| Hebrew (Ebraico) | עִבְרִית | `he_IL` | Israele | 1 voce |
| Hindi (Hindi) | हिन्दी | `hi_IN` | India | 3 voci |
| Hungarian (Ungherese)| Magyar | `hu_HU` | Ungheria | 3 voci |
| Armenian (Armeno) | հայերեն | `hy_AM` | Armenia | 1 voce |
| Indonesian (Indonesiano)| Bahasa Indonesia | `id_ID` | Indonesia | 1 voce |
| Icelandic (Islandese)| íslenska | `is_IS` | Islanda | 4 voci |
| Italian (Italiano) | Italiano | `it_IT` | Italia | 4 voci |
| Japanese (Giapponese)| 日本語 | `ja_JP` | Giappone | 1 voce |
| Georgian (Georgiano)| ქართული ენა | `ka_GE` | Georgia | 1 voce |
| Kazakh (Kazako) | қазақша | `kk_KZ` | Kazakistan | 3 voci |
| Korean (Coreano) | 한국어 | `ko_KR` | Corea del Sud | 1 voce |
| Kurdish (Curdo) | Kurmancî | `ku_TR` | Turchia | 1 voce |
| Luxembourgish | Lëtzebuergesch | `lb_LU` | Lussemburgo | 1 voce |
| Lithuanian (Lituano)| Lietuvių | `lt_LT` | Lituania | 1 voce |
| Latvian (Lettone) | Latviešu | `lv_LV` | Lettonia | 1 voce |
| Malayalam | മലയാളം | `ml_IN` | India | 2 voci |
| Marathi | मराठी | `mr_IN` | India | 1 voce |
| Nepali (Nepalese) | नेपाली | `ne_NP` | Nepal | 3 voci |
| Dutch (Belgio) | Nederlands (België) | `nl_BE` | Belgio | 4 voci |
| Dutch (Paesi Bassi) | Nederlands (Nederland) | `nl_NL` | Paesi Bassi | 6 voci |
| Norwegian (Norvegese)| Norsk | `no_NO` | Norvegia | 2 voci |
| Polish (Polacco) | Polski | `pl_PL` | Polonia | 5 voci |
| Portuguese (Brasile)| Português (Brasil) | `pt_BR` | Brasile | 4 voci |
| Portuguese (Portogallo)| Português (Portugal)| `pt_PT` | Portogallo | 1 voce |
| Romanian (Rumeno) | Română | `ro_RO` | Romania | 1 voce |
| Russian (Russo) | Русский | `ru_RU` | Russia | 4 voci |
| Slovak (Slovacco) | Slovenčina | `sk_SK` | Slovacchia | 1 voce |
| Slovenian (Sloveno) | Slovenščina | `sl_SI` | Slovenia | 1 voce |
| Albanian (Albanese) | shqip | `sq_AL` | Albania | 1 voce |
| Serbian (Serbo) | srpski | `sr_RS` | Serbia | 1 voce |
| Swedish (Svedese) | Svenska | `sv_SE` | Svezia | 3 voci |
| Swahili (Swahili) | Kiswahili | `sw_CD` | RD del Congo | 1 voce |
| Telugu | తెలుగు | `te_IN` | India | 3 voci |
| Thai (Tailandese) | ไทย | `th_TH` | Thailandia | 1 voce |
| Turkish (Turco) | Türkçe | `tr_TR` | Turchia | 1 voce |
| Ukrainian (Ucraino)| украї́нська мо́ва | `uk_UA` | Ucraina | 5 voci |
| Urdu (Urdu) | اردو | `ur_PK` | Pakistan | 2 voci |
| Vietnamese (Vietnamita)| Tiếng Việt | `vi_VN` | Vietnam | 3 voci |
| Chinese (Cinese Semplificato)| 简体中文 | `zh_CN` | Cina | 4 voci |

---

## Architettura Tecnica e Funzionamento (Technical Architecture)

### 1. Pipeline di Piper TTS (Piper TTS Pipeline)
```
[Testo dell'Utente]
    │
    ▼
[Web Worker: Fonemizzatore eSpeak NG]  ──► Converte la grafia del testo in sequenze di ID fonetici
    │
    ▼
[Web Worker: ONNX Runtime Web]         ──► Esegue il modello neurale (.onnx) via WebGPU o WASM
    │
    ▼
[Buffer Audio PCM]                     ──► Costruisce lo stream PCM a 16 bit a 22.05 kHz
    │
    ▼
[Web Audio API / WAV Blob]             ──► Riproduzione immediata e download del file WAV senza perdita
```

- **File Binari Distribuiti via Edge CDN:** I file binari più consistenti (moduli WASM di ONNX Runtime, dataset fonetici di eSpeak) vengono distribuiti globalmente tramite Cloudflare R2 (`VITE_PIPER_CDN_URL`), garantendo download veloci e repository leggeri.
- **Salvataggio Locale nel Browser:** Ogni modello vocale `.onnx` scaricato viene archiviato in modo permanente nel `CacheStorage` del browser (`piper-voices-cache-v1`), consentendo la sintesi vocale istantanea e senza rete nei successivi accessi.

### 2. Pipeline di Kokoro TTS (Kokoro TTS Pipeline)
- Un web worker isolato istanzia il modello compatto `onnx-community/Kokoro-82M-v1.0-ONNX` tramite Transformers.js.
- Il flusso audio viene inviato all'interfaccia a blocchi (*chunk streaming*), consentendo l'ascolto dell'introduzione mentre il motore completa i paragrafi seguenti.
- Supporto completo per pausa, ripresa e modulazione della velocità di riproduzione (da 0.5x a 2.0x).

---

## Tecnologie Utilizzate (Tech Stack)

- **Framework Web:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Interfaccia Utente e Stile:** [Tailwind CSS](https://tailwindcss.com/) + componenti [shadcn/ui](https://ui.shadcn.com/)
- **Motori di Sintesi Vocale (TTS):**
  - [Piper](https://github.com/rhasspy/piper) via ONNX Runtime Web (`ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) Fonemizzatore compilato in WebAssembly
  - [Kokoro](https://github.com/hexgrad/kokoro) via [`kokoro-js`](https://www.npmjs.com/package/kokoro-js)
- **Accelerazione Hardware:** WebGPU nativa con fallback su Web Workers WASM SIMD multithread
- **Icone e Notifiche:** Lucide Icons e notifiche reattive con Sonner

---

## Primi Passi (Getting Started)

### Prerequisiti
- Node.js 18 o versione successiva.
- Un browser web recente con supporto a WebAssembly. Per ottenere le massime prestazioni di sintesi vocale tramite accelerazione GPU, è consigliato l'uso di Google Chrome o Microsoft Edge con WebGPU attivo.

### Installazione

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Configurazione dell'Ambiente

Copia il file `.env.example` in `.env`:

```bash
cp .env.example .env
```

Configura la variabile `VITE_PIPER_CDN_URL` indicando l'indirizzo del tuo bucket o CDN Cloudflare R2:

```env
VITE_PIPER_CDN_URL="https://tuo-bucket.r2.dev"
```

### Server di Sviluppo Locale

```bash
npm run dev
```

Apri l'indirizzo [http://localhost:3000/](http://localhost:3000/) nel tuo browser.

### Compilazione per la Produzione

```bash
npm run build    # Compila la versione pronta per la produzione nella cartella /dist
npm run preview  # Avvia l'anteprima locale della versione di produzione
```

---

## Domande Frequenti (FAQ)

### Generatore Vocale con IA e Sintesi Vocale Testo a Voce Gratuita

#### Questo generatore di sintesi vocale con IA è davvero gratuito e senza limiti di caratteri?
Sì. Non ci sono limiti di battute, conteggi giornalieri di parole né costosi abbonamenti a consumo per generare audio localmente. Poiché le reti neurali vengono eseguite direttamente all'interno del browser sfruttando l'hardware del tuo computer o smartphone (scheda video con WebGPU o processore con WASM), non sosteniamo costi di server cloud e possiamo offrirti uno strumento completamente libero e illimitato.

#### Posso monetizzare i video su YouTube, TikTok e Reels con queste voci IA? (Canali senza volto)
Certamente! Le linee guida ufficiali di YouTube AdSense, Instagram e TikTok consentono la monetizzazione di contenuti narrati da voci sintetiche, a condizione che i video offrano un valore reale allo spettatore (montaggio accurato, testo originale, intrattenimento o valore didattico). I modelli vocali utilizzati sono open-source e rilasciati con licenze permissive (Apache 2.0 / MIT), liberi da copyright commerciale e ideali per canali faceless, documentari, video tutorial o reel informativi.

#### Come suonano le voci in lingua italiana?
Il progetto include 4 voci italiane native di alta qualità (`it_IT`): Paola (medium, naturale e bilanciata), Riccardo (x_low, scattante e leggero per riproduzioni veloci), Serena medium ed Serena high (con frequenza di campionamento chiara a 22050 Hz). A differenza delle vecchie voci metalliche da sintetizzatore anni 2000, queste reti neurali riproducono pause, intonazioni corrette e cadenze del parlato quotidiano.

#### Questa sintesi vocale è adatta per studenti con DSA o per ascoltare documenti e dispense in PDF?
Assolutamente sì. Molti studenti con DSA (Disturbi Specifici dell'Apprendimento, come la dislessia) o ipovedenti utilizzano Privro come lettore vocale per testi di studio e dispense universitarie. Trattandosi di uno strumento in locale, puoi incollare capitoli di libri, tesi o appunti personali senza inviare documenti privati a piattaforme terze e senza interruzioni pubblicitarie.

#### Posso scaricare l'audio generato per montare video su CapCut o Premiere?
Sì. Non appena la generazione è terminata, puoi scaricare l'audio completo come file **PCM WAV a 16 bit senza perdita (22.05 kHz)**. Il file esportato è pulito, senza watermark o suoni di intermezzo, pronto per essere inserito nelle tue timeline su CapCut, Premiere Pro, DaVinci Resolve o Final Cut.

#### I miei testi o la mia voce vengono inviati a server esterni? (Privacy e GDPR)
No. Tutto rimane confinato nella memoria RAM del tuo dispositivo. Quando incolli un testo e avvii la sintesi, il calcolo della rete neurale avviene in un Web Worker isolato sul tuo computer. Nessun dato lascia mai la sessione del browser, garantendo la totale conformità al **GDPR (Regolamento UE 2016/679)** e alle direttive del Garante per la Privacy.

#### Il generatore vocale funziona anche senza internet (offline)?
Sì, a partire dal secondo utilizzo. La prima volta che selezioni una voce, il browser memorizza il file del modello (~20 MB - 60 MB) nel `CacheStorage` locale. Nelle sessioni successive, il file viene caricato all'istante dal disco rigido a velocità locale, consentendoti di sintetizzare parlato anche in treno, in aereo o senza alcuna connessione web attiva.

#### Perché viene utilizzata la tecnologia WebGPU?
WebGPU consente al browser di eseguire le matrici di calcolo neurale direttamente sui core della tua scheda grafica (GPU), rendendo la sintesi vocale da 3 a 5 volte più veloce rispetto alla sola CPU. Se il tuo dispositivo non dispone di supporto WebGPU, il sistema passa in automatico alla modalità WebAssembly (WASM) multithread.

---

### Trascrizione Audio in Testo e Sbobinatura di Lezioni

#### Come posso sbobinare lezioni universitarie o file audio gratuitamente e senza limiti di tempo?
Puoi trascrivere qualsiasi registrazione vocale tramite lo [strumento gratuito di trascrizione locale di Privro](https://privro.com/it/transcribe). È sufficiente trascinare il tuo file audio (MP3, WAV, M4A, AAC, OGG, FLAC, OPUS o vocali di WhatsApp e registratori vocali per smartphone), scegliere la lingua o attivare il rilevamento automatico, e Whisper trascriverà tutto nel tuo browser. È la soluzione ideale per studenti universitari che necessitano di una sbobinatura completa di lezioni universitarie senza spendere centinaia di euro in piattaforme a consumo.

#### Come si convertono i file video MP4 in testo o sottotitoli?
Trascina semplicemente il file video MP4, WEBM o MOV nell'interfaccia di [Trascrizione Locale Privro](https://privro.com/it/transcribe) o nel [convertitore da MP4 a testo](https://privro.com/it/mp4-to-text). Il browser estrae la traccia audio in memoria e genera la trascrizione parola per parola con timestamp temporali precisi, senza costringerti a caricare video pesanti su internet.

#### Ci sono limiti di minuti o di dimensione dei file per la trascrizione?
No. A differenza dei servizi su cloud che offrono appena 10 o 15 minuti gratuiti al mese per poi richiedere costosi abbonamenti, la trascrizione locale di Privro offre **zero limiti di minuti e zero tetti sul numero di file**. Puoi trascrivere un breve appunto vocale di un minuto o sbobinare una conferenza universitaria di 4 ore in totale autonomia.

#### È una soluzione sicura per documenti legali, cartelle mediche e interviste giornalistiche?
Sì, offre la massima garanzia di segretezza professionale. Poiché il modello Whisper di OpenAI viene eseguito all'interno della sandbox WebAssembly del tuo browser, l'audio viene decodificato esclusivamente nella memoria RAM locale e non transita mai su reti esterne. Rispetta rigorosamente il segreto professionale di avvocati, medici, psicologi e giornalisti investigativi.

#### In quali formati è possibile scaricare le trascrizioni?
Puoi esportare la trascrizione completata con marcatori temporali a livello di singola parola in 8 formati differenti:
- Testo semplice: `TXT`
- Sottotitoli sincronizzati: `SRT`, `VTT`
- Fogli di calcolo e dati: `CSV`, `JSON`, `XLSX`
- Documenti formattati: Word `DOCX`, `PDF`

---

### Caption Studio: Sottotitoli Automatici per Video

#### Posso applicare sottotitoli automatici ai video senza filigrana (watermark)?
Sì. [Caption Studio](https://privro.com/it/caption-studio) ti consente di caricare un video, trascrivere il parlato in automatico con Whisper in locale, personalizzare colori, animazioni dinamiche e stili karaoke, e imprimere i sottotitoli direttamente nel video. L'esportazione video è gestita interamente nel browser con FFmpeg in risoluzione fino a **4K senza alcun watermark o logo sovraimpresso**.

#### Quali proporzioni di video (Aspect Ratio) sono supportate?
Puoi esportare video sottotitolati per qualsiasi social media e piattaforma video:
- **9:16:** TikTok, Instagram Reels, YouTube Shorts
- **16:9:** Canali YouTube orizzontali, presentazioni e monitor widescreen
- **1:1:** Feed quadrato di Instagram e post LinkedIn
- **4:5:** Post verticali nel feed di Instagram
- **3:2:** Formati fotografici e schermi desktop

---

### Piattaforma, Lingue e Riservatezza

#### Quante lingue sono supportate su Privro?
L'ecosistema Privro è localizzato in **22 lingue**: inglese, spagnolo, portoghese, italiano, tedesco, francese, hindi, indonesiano, polacco, giapponese, olandese, svedese, danese, norvegese, finlandese, ceco, turco, russo, coreano, cinese tradizionale, arabo ed ebraico. Ciascuna lingua dispone di un portale dedicato con URL nativo su `https://privro.com/{locale}`.

#### Cosa rappresentano i file `https://privro.com/llms.txt` e `https://privro.com/llms-full.txt`?
[privro.com/llms.txt](https://privro.com/llms.txt) e [privro.com/llms-full.txt](https://privro.com/llms-full.txt) sono documenti standardizzati leggibili dalle macchine che seguono la specifica emergente `llms.txt`. Consentono ad assistenti IA, sistemi di ricerca semantica e modelli linguistici di reperire descrizioni autorevoli, parametri tecnici dei modelli vocali Whisper e Piper, e garanzie di riservatezza locale della suite Privro.

---

## Crediti e Ringraziamenti (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) e [Piper Voices](https://huggingface.co/rhasspy/piper-voices) realizzati da Michael Hansen e dalla community Rhasspy.
- Modello [Kokoro TTS](https://github.com/hexgrad/kokoro) sviluppato da Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) e [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) sviluppato da Microsoft.
- Libreria fonetica [eSpeak NG](https://github.com/espeak-ng/espeak-ng).

---

## Licenza (License)

Rilasciato sotto Licenza Apache 2.0. Consulta il file [LICENSE](LICENSE) per tutti i termini e le condizioni.
