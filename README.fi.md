<div align="center">

[![Language: Finnish](https://img.shields.io/badge/Language-Suomi%20(Finnish)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/avnshsingh/local-ai-voice-web)

<br/>

**Translations / Read in other languages:**

[English](README.md) • [Español](README.es.md) • [Português](README.pt.md) • [Italiano](README.it.md) • [Deutsch](README.de.md) • [Français](README.fr.md) • [हिन्दी](README.hi.md) • [Bahasa Indonesia](README.id.md) • [Polski](README.pl.md) • [日本語](README.ja.md) • [Nederlands](README.nl.md) • [Svenska](README.sv.md) • [Dansk](README.da.md) • [Norsk](README.no.md) • [Suomi](README.fi.md) • [Čeština](README.cs.md) • [Türkçe](README.tr.md) • [Русский](README.ru.md) • [한국어](README.ko.md) • [繁體中文](README.zh-tw.md) • [العربية](README.ar.md) • [עברית](README.he.md)

</div>

# Privro AI Voice - Ilmaiset Paikalliset Tekoälyäänet & Teksti Puheeksi (Text-to-Speech) Selaimessa

Yksityisyyttä suojaava, seuraavan sukupolven selainpohjainen tekoälyäänigeneraattori ja puhesynteesi ilman pilvilatausta (*zero-upload*), jonka tarjoaa [Privro AI](https://privro.com/fi). Liitä tekstisi, valitse ääni ja generoi välittömästi luonnollista ihmispuhetta paikallisesti omalla laitteellasi Web Workers- ja WebGPU-teknologioiden avulla. Tekstiä tai äänitiedostoja ei koskaan lähetetä ulkopuolisille pilvipalvelimille.

- **Käytä web-sovellusta suoraan:** [voice.privro.com](https://voice.privro.com)
- **Privro Voice Studio:** [privro.com/fi/piper-voice](https://privro.com/fi/piper-voice)
- **Koneellisesti luettavat määritykset (LLM):** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## Kaksi Neuraalista Puhesynteesimoottoria Selaimessa (Dual Neural TTS Engines)

Tämä projekti yhdistää kaksi itsenäistä neuraalista puhesynteesijärjestelmää (Text-to-Speech), jotka toimivat kokonaisuudessaan asiakaspuolella suoraan verkkoselaimessasi:

1. **Piper TTS (Ensisijainen Moottori):**
   - Salamannopea paikallinen puhesynteesi ONNX Runtime Webillä ja eSpeak NG -fonetisoinnilla.
   - Tuki **yli 40 kielelle, 58 alueelliselle variantille ja yli 300 äänimallille**.
   - Virallinen suomen kielen tuki (`fi_FI`): **Harri-äänimalli** kahdessa laatuluokassa (`fi_FI-harri-medium` 22,05 kHz studiolaadulla sekä kevyt `fi_FI-harri-low` matalatehoisille mobiililaitteille).
   - Laitteistokiihdytys WebGPU:lla ja automaattinen fallback monisäikeiseen WebAssemblyyn (WASM SIMD).

2. **Kokoro TTS (Toissijainen Moottori):**
   - Kompakti ja erittäin suorituskykyinen 82 miljoonan parametrin malli Transformers.js:n kautta (`onnx-community/Kokoro-82M-v1.0-ONNX`).
   - Eloisa ja luonnollinen englanninkielinen kerronta amerikkalaisilla ja brittiläisillä ääniprofiileilla.
   - Reaaliaikainen lohkostriimaus (*chunk-streaming*) välittömään toistoon ilman odotusaikaa.

---

## Privro AI Web-Työkalut & Ekosysteemi (Privro Web Suite Tools)

| Työkalu & Resurssi | Kuvaus & Keskeisimmät Ominaisuudet |
| :--- | :--- |
| [Ilmainen Paikallinen Äänen Litterointi (Whisper AI)](https://privro.com/fi/transcribe) | 100 % paikallinen ääni tekstiksi -litterointi selaimessasi OpenAI Whisper -mallilla. Ei tiedostojen latausta ulkoisille palvelimille, ei aikarajoitusta, automaattinen puhujantunnistus ja vienti Word (DOCX)-, PDF-, TXT- ja SRT-muodoissa. Täyttää yliopistojen ja Tutkimuseettisen neuvottelukunnan (TENK) tietosuojakriteerit pro gradu- ja opinnäytetöille. |
| [MP4 Tekstiksi -muunnin (Videon Litterointi)](https://privro.com/fi/mp4-to-text) | Ilmainen selainpohjainen videon litterointityökalu. Erottele ääni paikallisesti MP4-, MOV- ja WebM-videoista ja muunna se luettavaksi tekstiksi tai tekstitystiedostoiksi (SRT, VTT) ilman pilvipalvelimia. |
| [Caption Studio - Automaattiset Tekstitykset](https://privro.com/fi/caption-studio) | Luo näyttäviä, dynaamisia tekstityksiä TikTokiin, Instagram Reelsiin ja YouTube Shortsiin. Polta kiinteät tekstitykset suoraan videoon jopa 4K-laadulla selaimen sisäisellä FFmpegillä – 100 % ilmaiseksi ja **täysin ilman vesileimaa**. |
| [Piper Voice Studio (Tekoälyäänistudio)](https://privro.com/fi/piper-voice) | Selaa, kokeile ja kuuntele yli 300 ääntä suoraan selaimessa. Sisältää suomalaisen Harri-äänen, äänenkorkeuden ja nopeuden säädön, WebGPU-kiihdytyksen sekä häviöttömän 16-bittisen PCM WAV -latauksen. |
| [Ilmainen Teksti Puheeksi -generaattori](https://privro.com/fi/text-to-speech) | Nopea, turvallinen ja rajaton puhesynteesi verkossa. Muunna artikkelit, käsikirjoitukset ja asiakirjat luonnolliseksi puheeksi ilman rekisteröitymistä tai ulkopuolisia palvelimia. |
| [Paikallinen AI Ääni Web-sovellus](https://voice.privro.com) | Tämän koodivaraston pohjalta rakennettu itsenäinen PWA-verkkosovellus omilla välilehdillään sekä Piper TTS:lle että Kokoro TTS:lle. |
| [Vaihtoehto Otter.ai:lle (Ilmainen & Ilman Aikarajoitusta)](https://privro.com/fi/alternatives/otter) | Miksi maksaisit kalliita kuukausimaksuja dollareissa ja ottaisit tietosuojariskejä pilvessä? Tutustu Privron ilmaiseen, rajattomaan ja täysin paikalliseen litterointiin. |
| [Vaihtoehto Happy Scribelle (Zero-Upload)](https://privro.com/fi/alternatives/happyscribe) | Vertaa Happy Scriben minuuttirajoituksia ja pilvilatauksia Privron maksuttomaan, paikalliseen Whisper-litterointiin ja vesileimattomaan Caption Studioon. |
| [Privro AI:n Hinnasto ja Paketit](https://privro.com/fi/pricing) | Tutustu 100 % ilmaisiin paikallisiin selaintyökaluihimme, valinnaiseen pilvikäsittelyyn suuren mittakaavan massaprojekteille sekä etukäteen maksettuihin krediitteihin ilman vanhenemispäivää. |

---

## Saatavuus 22 Maailmankielellä (Global Availability)

Privro-alusta on täysin lokalisoitu **22 maailmankielelle**. Jokaisella kieliversiolla on oma optimoitu aloitussivunsa paikallisia hakutarpeita ja tietosuojasääntöjä varten:

| Kieli (Language) | Omankielinen Nimi | Koodi | Lokalisoitu Verkko-osoite |
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

> **Huomautus:** Privro-ekosysteemin ydintoiminnot – mukaan lukien [Litterointi](https://privro.com/fi/transcribe), [Caption Studio](https://privro.com/fi/caption-studio) ja [Piper Voice](https://privro.com/fi/piper-voice) – ovat käytettävissä kaikilla näillä 22 kielellä.

---

## Tuetut Kielet Piper TTS -järjestelmässä (Languages Supported by Piper TTS)

Piper TTS sisältää **yli 300 avointa neuraalista äänimallia** jaettuna **58 kieli- ja aluekoodiin** 42 kieliperheessä. Kaikkia malleja ajetaan suoraan omalla laitteellasi:

| Kieli (Language) | Omankielinen Nimi | Koodi | Maa / Alue | Saatavilla Olevat Mallit |
| ------------------- | ------------------------- | --------- | -------------------------------- | --------------------- |
| Arabic (Arabia) | العربية | `ar_JO` | Jordania | 2 mallia |
| Bulgarian (Bulgaria)| български | `bg_BG` | Bulgaria | 1 malli |
| Bengali (Bengali) | বাংলা | `bn_BD` | Bangladesh | 1 malli |
| Catalan (Katalaani) | Català | `ca_ES` | Espanja | 3 mallia |
| Czech (Tšekki) | Čeština | `cs_CZ` | Tšekki | 3 mallia |
| Welsh (Kymri) | Cymraeg | `cy_GB` | Yhdistynyt kuningaskunta | 2 mallia |
| Danish (Tanska) | Dansk | `da_DK` | Tanska | 1 malli (NST Rigsdansk) |
| German (Saksa) | Deutsch | `de_DE` | Saksa | 10 mallia |
| Greek (Kreikka) | Ελληνικά | `el_GR` | Kreikka | 3 mallia |
| English (UK) | English (UK) | `en_GB` | Yhdistynyt kuningaskunta | 11 mallia |
| English (US) | English (US) | `en_US` | Yhdysvallat | 27 mallia |
| Spanish (Argentiina)| Español (Argentina) | `es_AR` | Argentiina | 1 malli |
| Spanish (Espanja) | Español (España) | `es_ES` | Espanja | 5 mallia |
| Spanish (Meksiko) | Español (México) | `es_MX` | Meksiko | 3 mallia |
| Estonian (Viro) | Eesti | `et_EE` | Viro | 1 malli |
| Basque (Baski) | Euskara | `eu_ES` | Espanja | 2 mallia |
| Persian / Farsi | فارسی | `fa_IR` | Iran | 3 mallia |
| **Finnish (Suomi)** | **Suomi** | **`fi_FI`** | **Suomi** | **2 mallia (Harri Medium & Low)** |
| French (Ranska) | Français (France) | `fr_FR` | Ranska | 7 mallia |
| Irish (Iiri) | Gaeilge | `ga_IE` | Irlanti | 3 mallia |
| Galician (Galicia) | Galego | `gl_ES` | Espanja | 1 malli |
| Gujarati (Gudžarati)| ગુજરાતી | `gu_IN` | Intia | 1 malli |
| Hebrew (Heprea) | עברית | `he_IL` | Israel | 1 malli |
| Hindi (Hindi) | हिन्दी | `hi_IN` | Intia | 1 malli |
| Croatian (Kroatia) | Hrvatski | `hr_HR` | Kroatia | 1 malli |
| Hungarian (Unkari) | Magyar | `hu_HU` | Unkari | 2 mallia |
| Indonesian (Indonesia)| Bahasa Indonesia | `id_ID` | Indonesia | 1 malli |
| Icelandic (Islanti) | Íslenska | `is_IS` | Islanti | 3 mallia |
| Italian (Italia) | Italiano | `it_IT` | Italia | 4 mallia |
| Japanese (Japani) | 日本語 | `ja_JP` | Japani | 1 malli |
| Georgian (Georgia) | ქართული | `ka_GE` | Georgia | 1 malli |
| Kazakh (Kazakki) | Қазақша | `kk_KZ` | Kazakstan | 1 malli |
| Luxembourgish | Lëtzebuergesch | `lb_LU` | Luxemburg | 1 malli |
| Nepali (Nepali) | नेपाली | `ne_NP` | Nepal | 1 malli |
| Dutch (Belgia) | Nederlands (België) | `nl_BE` | Belgia | 4 mallia |
| Dutch (Alankomaat) | Nederlands (Nederland) | `nl_NL` | Alankomaat | 6 mallia |
| Norwegian (Norja) | Norsk (Bokmål) | `no_NO` | Norja | 2 mallia (11 puhujaa) |
| Polish (Puola) | Polski | `pl_PL` | Puola | 5 mallia |
| Portuguese (Brasilia)| Português (Brasil) | `pt_BR` | Brasilia | 4 mallia |
| Portuguese (Portugali)| Português (Portugal) | `pt_PT` | Portugali | 1 malli |
| Romanian (Romania) | Română | `ro_RO` | Romania | 2 mallia |
| Russian (Venäjä) | Русский | `ru_RU` | Venäjä | 8 mallia |
| Slovak (Slovakki) | Slovenčina | `sk_SK` | Slovakia | 1 malli |
| Slovenian (Sloveeni)| Slovenščina | `sl_SI` | Slovenia | 1 malli |
| Serbian (Serbia) | Srpski | `sr_RS` | Serbia | 2 mallia |
| Swedish (Ruotsi) | Svenska | `sv_SE` | Ruotsi | 3 mallia |
| Swahili (Swahili) | Kiswahili | `sw_CD` | Kongon DT | 1 malli |
| Telugu (Telugu) | తెలుగు | `te_IN` | Intia | 1 malli |
| Turkish (Turkki) | Türkçe | `tr_TR` | Turkki | 3 mallia |
| Ukrainian (Ukraina) | Українська | `uk_UA` | Ukraina | 4 mallia |
| Urdu (Urdu) | اردو | `ur_PK` | Pakistan | 2 mallia |
| Vietnamese (Vietnam)| Tiếng Việt | `vi_VN` | Vietnam | 4 mallia |
| Chinese (Kiina) | 简体中文 | `zh_CN` | Kiina | 2 mallia |

---

## Suomalaiset Äänet Piper TTS -järjestelmässä (`fi_FI`) – Harri

Suomen kieli tunnetaan rikkaasta vokaalirakenteestaan, vokaalisoinnusta ja kaksoiskonsonanttien rytmityksestä. Piper TTS:n suomalainen Harri-malli hallitsee nämä foneettiset erityispiirteet luonnollisesti:

### 1. `fi_FI-harri-medium` (Studiolaatu – Suositeltu oletus)
- **Tyyppi:** Yhden puhujan neural-malli (Single-speaker).
- **Profiili:** Selkeä, asiallinen ja luonnollinen suomalainen miesääni.
- **Laatu:** 22 050 Hz (22,05 kHz) näytteenottotaajuus, 16-bittinen ukomprimoitu PCM WAV.
- **Fonetisointi:** Suora eSpeak NG WebAssembly -integraatio, joka huomioi suomen kielen äännesäännöt täydellisesti.
- **Käyttökohteet:** YouTube-videoiden kertojaäänet (erityisesti kasvottomat kanavat), verkkoartikkelien kuuntelu, opetusvideot ja saavutettavuus.

### 2. `fi_FI-harri-low` (Kevytmalli)
- **Tyyppi:** Nopea ja kompakti neuroverkko (~17 MB) matalatehoisille laitteille ja hitaille verkkoyhteyksille.
- **Käyttökohteet:** Välitön äänisynteesi vanhemmilla älypuhelimilla ja heikoissa verkkoolosuhteissa.

---

## Arkkitehtuuri & Äänenkäsittelyputki (Architecture)

```
Käyttäjän Teksti (User Input)
       │
       ▼
Tekstin Puhdistus & Fonetisointi (eSpeak NG WebAssembly)
       │
       ▼
Neuraaliset Inferenssilaskelmat (Piper ONNX Runtime Web WebGPU:lla / WASM SIMD:llä)
       │
       ▼
Raaka Äänipuskuri Selaimen Muistissa (Float32Array PCM Audio Chunks)
       │
       ├─────────────────────────────────┐
       ▼                                 ▼
Web Audio API -konteksti          WAV-tiedoston Generaattori (16-bit PCM)
(Välitön paikallinen toisto)      (Suora lataus ilman häviötä)
```

### 1. Piper TTS -putki
- Fonetisointi tapahtuu reaaliajassa WebAssembly-käännetyn [eSpeak NG](https://github.com/espeak-ng/espeak-ng) -kirjaston avulla.
- Päättely suoritetaan erillisessä Web Worker -taustasäikeessä [ONNX Runtime Web](https://onnxruntime.ai/) -alustalla.
- Kukin äänimalli ladataan vain kerran ja tallennetaan pysyvästi selaimen `IndexedDB`-muistiin (`piper-voices-cache-v1`). Tämän jälkeen puhesynteesi käynnistyy millisekunneissa täysin ilman verkkoliikennettä.

### 2. Kokoro TTS -putki
- Erillinen Web Worker alustaa optimoidun `onnx-community/Kokoro-82M-v1.0-ONNX`-mallin Transformers.js-kirjaston kautta.
- Äänivirta luodaan reaaliajassa tekstilohkoissa (*chunks*), jolloin toisto alkaa heti ilman puskurointiviivettä.
- Sisältää säätimet keskeytykselle, jatkamiselle ja puhenopeuden hienosäädölle (0,5x–2,0x).

---

## Teknologiapino (Tech Stack)

- **Käyttöliittymäkehys:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Ulkoasu & Komponentit:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Puhesynteesimoottorit (TTS):**
  - [Piper](https://github.com/rhasspy/piper) (ONNX Runtime Web `ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) (WebAssembly-fonetisointi)
  - [Kokoro](https://github.com/hexgrad/kokoro) ([`kokoro-js`](https://www.npmjs.com/package/kokoro-js))
- **Laitteistokiihdytys:** WebGPU automaattisella fallbackilla monisäikeiseen WASM SIMD:iin
- **Kuvakkeet & Ilmoitukset:** Lucide Icons ja Sonner toast -viestit

---

## Asennus & Paikallinen Kehitys (Getting Started)

### Esivaatimukset
- Node.js 18 tai uudempi
- Moderni verkkoselain WebAssembly-tuella. Parhaan WebGPU-suorituskyvyn takaamiseksi suositellaan Google Chromea tai Microsoft Edgeä.

### Asennus

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Ympäristömuuttujat

Kopioi `.env.example` tiedostoksi `.env`:

```bash
cp .env.example .env
```

Määritä `VITE_PIPER_CDN_URL` Cloudflare R2 -tallennustilallasi tai CDN-osoitteellasi:

```env
VITE_PIPER_CDN_URL="https://your-bucket.r2.dev"
```

### Käynnistä Kehityspalvelin

```bash
npm run dev
```

Avaa selaimessasi osoite [http://localhost:3000/](http://localhost:3000/).

### Tuotantoversion Rakentaminen

```bash
npm run build    # Luo optimoidun tuotantopaketin /dist-kansioon
npm run preview  # Esikatsele tuotantoversiota paikallisesti
```

---

## Usein Kysytyt Kysymykset (FAQ)

### Tekoälyäänet & Puhesynteesi (Text-to-Speech)

#### Miksi tämä tekoälyääni on 100 % ilmainen eikä siinä ole merkkirajoituksia?
Privron puhesynteesimallit ja Whisper-litterointi ajetaan suoraan oman tietokoneesi näytönohjaimella (WebGPU) tai prosessorilla (WebAssembly) verkkoselaimessasi. Koska laskentaan ei käytetä kalliita pilvipalvelimia, minuuttikohtaisia ylläpitokustannuksia ei synny. Voit siis muuntaa rajattomasti tekstiä puheeksi ilman tilausmaksuja, krediittejä tai maksumuureja.

#### Siirtyykö tekstejäni tai äänitiedostojani Privron tai ulkopuolisten palvelimille? (GDPR, Tietosuojalaki ja salassapitovelvollisuus)
Ei koskaan. Kaikki syötetty teksti, ladatut äänitiedostot ja tuotettu puhe säilyvät ainoastaan selaimesi väliaikaisessa keskusmuistissa (RAM). Mitään tietoja ei lähetetä ulkoisille palvelimille tai kolmansille osapuolille. Tämä takaa täyden yhteensopivuuden seuraavien vaatimusten kanssa:
- **EU:n yleinen tietosuoja-asetus (GDPR)** ja Suomen **Tietosuojalaki (1050/2018)** valvovan viranomaisen (**Tietosuojavaltuutetun toimisto**) alaisuudessa.
- **Tutkimuseettisen neuvottelukunnan (TENK)** eettiset periaatteet henkilötietoja sisältävien äänitallenteiden käsittelystä.
- Terveydenhuollon ammattihenkilöiden lakisääteinen salassapitovelvollisuus (**Laki terveydenhuollon ammattihenkilöistä 559/1994 § 17**).
- Asianajajien ja oikeudenkäyntiavustajien ammatillinen vaitiolovelvollisuus (**Asianajajalaki 496/1958 § 5 c** ja **Oikeudenkäymiskaari 17 luku 13 §**).
- Julkishallinnon asiakirjajulkisuus ja salassapito (**Laki viranomaisten toiminnan julkisuudesta 621/1999 22–24 §**).

Koska tietoja ei siirretä minnekään, **tietojenkäsittelysopimusta (DPA) ei tarvita**.

#### Mitä suomenkielisiä ääniä työkalussa on?
Privro tarjoaa virallisen **Harri-äänimallin** kahdessa versiossa:
1. `fi_FI-harri-medium`: Luonnollinen, selkeästi artikuloitu suomalainen miesääni 22,05 kHz studiotason äänenlaadulla.
2. `fi_FI-harri-low`: Nopea ja kevyt versio matalamman suorituskyvyn laitteille.

Lisäksi englanninkieliseen kerrontaan on käytettävissä Kokoro TTS -moottori useilla eri kertojaäänillä.

#### Voinko ladata äänen suoraan Premiere Pro-, DaVinci Resolve- ja CapCut-ohjelmiin?
Kyllä. Kaikki generoitu puhe voidaan ladata välittömästi häviöttömänä 16-bittisenä PCM WAV -tiedostona (22,05 kHz Piperille ja 24 kHz Kokorolle). Tiedostot ovat sellaisenaan yhteensopivia kaikkien yleisten video- ja äänenkäsittelyohjelmistojen kanssa.

---

### Äänen Litterointi & Yliopisto-opiskelijat (Whisper AI)

#### Miten litteroin haastattelut ilmaiseksi pro graduun tai kandidaatintutkielmaan?
Suomalaiset yliopisto- ja ammattikorkeakouluopiskelijat (kuten Helsingin yliopisto, Aalto-yliopisto, Tampereen yliopisto, Turun yliopisto, Oulun yliopisto, Jyväskylän yliopisto, LUT, UEF ja Metropolia) voivat avata [Äänen Litteroinnin](https://privro.com/fi/transcribe), pudottaa haastatteluäänitteen selaimeen (MP3, M4A, WAV jne.) ja antaa Whisper AI:n purkaa puheen tekstiksi omalla tietokoneellaan. Valmis aineisto voidaan ladata Word (DOCX)-, PDF- tai TXT-muodossa puhujatunnisteilla ja aikaleimoilla varustettuna.

#### Täyttääkö Privro Tutkimuseettisen neuvottelukunnan (TENK) ja korkeakoulujen tietosuojakriteerit?
Kyllä. TENK linjaa, että ihmisääni on aina henkilötieto ja haastatteluaineistojen lataaminen valvomattomiin ulkomaisiin pilvipalveluihin muodostaa vakavan tietoturvariskin. Koska Privro suorittaa litteroinnin 100 % paikallisesti selaimesi muistissa, haastattelu ei koskaan poistu laitteeltasi. Tietoja ei siirretä kolmansille osapuolille tai EU:n ulkopuolelle, mikä täyttää tiukimmatkin tutkimuseettiset vaatimukset.

#### Tarvitseeko korkeakouluni solmia tietojenkäsittelysopimus (DPA) Privron kanssa?
Ei tarvitse. Koska Privro ei vastaanota, käsittele tai tallenna tiedostojasi palvelimilleen, Privro ei toimi GDPR:n artiklan 28 mukaisena henkilötietojen käsittelijänä. Käsittely tapahtuu täysin rekisterinpitäjän omalla laitteella.

---

### Ammatillinen Salassapitovelvollisuus (Asianajajat & Terveydenhuolto)

#### Voivatko lääkärit ja asianajajat käyttää Privroa luottamuksellisiin saneluihin?
Kyllä. Koska tiedot käsitellään omalla tietokoneella keskusmuistissa ilman minkäänlaista verkkoliikennettä mallin lataamisen jälkeen, palvelu soveltuu potilaskertomusten, oikeudenkäyntiaineistojen ja luottamuksellisten neuvottelujen purkamiseen vaarantamatta salassapitovelvollisuutta.

---

### Caption Studio & Videon Tekstitys (MP4 Tekstiksi)

#### Miten luon automaattiset tekstitykset videoon täysin ilman vesileimaa?
Siirry osoitteeseen [Caption Studio](https://privro.com/fi/caption-studio), tuo videosi ja anna Whisperin luoda puheesta tekstitykset. Voit muokata tekstin tyyliä, väriä, taustoja ja animaatiota sekä polttaa tekstitykset suoraan osaksi videota selaimen sisäisellä FFmpegillä. Valmis video viedään **100 % ilmaiseksi ja täysin ilman vesileimaa tai logoja**.

#### Mitä kuvasuhteita ja formaatteja Caption Studio tukee?
- **9:16:** Vertikaalivideo TikTokiin, Instagram Reelsiin ja YouTube Shortsiin
- **16:9:** Vaakasuuntainen laajakuva YouTubeen, televisioon ja esityksiin
- **1:1:** Neliövideot Instagramiin ja LinkedIniin
- **4:5:** Pystysuuntaiset feed-julkaisut Instagramiin
- **3:2:** Perinteinen valokuva- ja diaesitysformaatti

#### Voinko erottaa puheen videosta (MP4, MOV, WebM) tekstiksi ja tekstitystiedostoiksi?
Kyllä. [MP4 Tekstiksi -muuntimella](https://privro.com/fi/mp4-to-text) voit erottaa ääniraidan mistä tahansa videosta ja ladata valmiit aikaleimatut tekstitystiedostot (`.srt`, `.vtt`) tai muokattavat tekstiasiakirjat (`.docx`, `.txt`).

---

### Sisällöntuottajat & YouTuben Kaupallistaminen

#### Saanko käyttää generoituja ääniä kaupallisesti ja tienata rahaa YouTubessa?
Kyllä. Kaikki Piper- ja Kokoro-mallit perustuvat avoimiin, kaupallisen käytön salliviin lisensseihin. Generoitu ääni on 100 % tekijänoikeusvapaata (royalty-free). Voit vapaasti kaupallistaa YouTube-videoita (mukaan lukien kasvottomat YouTube-kanavat), käyttää ääntä mainosvideoissa tai myydä äänikirjoja.

#### Toimiiko Privro offline-tilassa ilman verkkoyhteyttä?
Kyllä. Kun äänimallit tai Whisper-mallit on ladattu kerran, ne tallentuvat selaimesi paikalliseen välimuistiin (`CacheStorage` ja `IndexedDB`). Tämän jälkeen voit käyttää sovellusta täysin ilman internetyhteyttä esimerkiksi junassa, lentokoneessa tai suojatussa suljetussa verkossa.

---

### Alusta, Saavutettavuus & LLM-Integraatio

#### Monellako kielellä Privro on saatavilla?
Privro on saatavilla **22 maailmankielellä**: suomi, englanti, espanja, portugali, italia, saksa, ranska, hindi, indonesia, puola, japani, hollanti, ruotsi, tanska, norja, tšekki, turkki, venäjä, korea, perinteinen kiina, arabia ja heprea. Kukin kieliversio on suoraan saavutettavissa osoitteessa `https://privro.com/{kielikoodi}`.

#### Mikä on osoitteen `https://privro.com/llms.txt` tarkoitus?
[privro.com/llms.txt](https://privro.com/llms.txt) ja [privro.com/llms-full.txt](https://privro.com/llms-full.txt) ovat standardoituja, koneellisesti luettavia määrityksiä tekoälyavustajille ja LLM-malleille. Ne tarjoavat täsmällistä tietoa Privron paikallisesta tietosuoja-arkkitehtuurista, malleista, suorituskyvystä ja rajapintarakenteista.

---

## Kiitokset & Tunnustukset (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) ja [Piper Voices](https://huggingface.co/rhasspy/piper-voices) – Michael Hansen ja Rhasspy-yhteisö.
- [Kokoro TTS](https://github.com/hexgrad/kokoro) – Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) ja [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) – Microsoft.
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) – fonetisointi WebAssemblyn kautta.

---

## Lisenssi (License)

Tämä projekti on julkaistu [Apache License 2.0](LICENSE) -lisenssillä. Katso täydet lisenssiehdot tiedostosta `LICENSE`.
